from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import fitz  # PyMuPDF for PDF processing
import faiss
import numpy as np
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from sentence_transformers import SentenceTransformer

app = Flask(__name__)
CORS(app)

# Paths to JSON files
CONVERSATIONS_FILE = 'data/conversations.json'
MESSAGES_FILE = 'data/messages.json'
USER_FILE = 'data/user.json'

# Load Embedding Model
embedding_model = SentenceTransformer("sentence-transformers/multi-qa-mpnet-base-dot-v1")  # Optimized for QA tasks
embedding_index = None

# Load a large generative model for question answering
qa_model_name = "google/flan-t5-large"  # Use "flan-t5-xxl" if you have the resources
qa_tokenizer = AutoTokenizer.from_pretrained(qa_model_name)
qa_model = AutoModelForSeq2SeqLM.from_pretrained(qa_model_name)

# Global variables to store chunks and embeddings
chunks = []
chunk_embeddings = []

def load_data(file_path):
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            return json.load(file)
    return {}

def save_data(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

# Route to get all conversations
@app.route('/conversations', methods=['GET'])
def get_conversations():
    conversations = load_data(CONVERSATIONS_FILE)
    return jsonify(list(conversations.values()))

# Route to get the current user information
@app.route('/user', methods=['GET'])
def get_user():
    user = load_data(USER_FILE)
    return jsonify(user)

# Route to get messages for a specific conversation
@app.route('/conversations/<conversation_id>/messages', methods=['GET'])
def get_messages(conversation_id):
    messages = load_data(MESSAGES_FILE).get(conversation_id, [])
    user = load_data(USER_FILE)
    for msg in messages:
        msg['isCurrentUser'] = (msg['senderId'] == user['userId'])
    return jsonify(messages)

# Route to add a new message to a conversation
@app.route('/conversations/<conversation_id>/messages', methods=['POST'])
def add_message(conversation_id):
    message_data = request.json
    messages = load_data(MESSAGES_FILE)

    new_message = {
        "text": message_data.get("text"),
        "senderId": message_data.get("senderId"),
        "timestamp": message_data.get("timestamp"),
    }
    if conversation_id not in messages:
        messages[conversation_id] = []
    messages[conversation_id].append(new_message)

    save_data(MESSAGES_FILE, messages)
    conversations = load_data(CONVERSATIONS_FILE)
    if conversation_id in conversations:
        conversations[conversation_id]["lastMessage"] = message_data.get("text")
    save_data(CONVERSATIONS_FILE, conversations)

    return jsonify(new_message), 201

# Function to extract text from PDF
def extract_text_from_pdf(pdf_data):
    text = ""
    with fitz.open(stream=pdf_data, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text("text") + "\n"
    return text

# Function to chunk text into smaller pieces with overlap
def chunk_text(text, chunk_size=500, overlap=100):
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunks.append(" ".join(words[i:i + chunk_size]))
    return chunks

# Endpoint to upload PDF and prepare it for Q&A
@app.route("/upload_pdf", methods=["POST"])
def upload_pdf():
    global embedding_index, chunks, chunk_embeddings
    
    pdf_file = request.files.get("file")
    if not pdf_file:
        return jsonify({"error": "No file uploaded"}), 400

    pdf_text = extract_text_from_pdf(pdf_file.read())
    chunks = chunk_text(pdf_text)

    # Generate embeddings for each chunk
    chunk_embeddings = [embedding_model.encode(chunk) for chunk in chunks]
    chunk_embeddings = np.array(chunk_embeddings)

    # Initialize FAISS index
    embedding_dim = chunk_embeddings.shape[1]
    embedding_index = faiss.IndexFlatL2(embedding_dim)
    embedding_index.add(chunk_embeddings)

    return jsonify({"message": "PDF uploaded and processed successfully"}), 200

@app.route("/ask_question", methods=["POST"])
def ask_question():
    global embedding_index, chunks, chunk_embeddings

    data = request.json
    question = data.get("question")

    if not embedding_index or not chunks:
        return jsonify({"error": "No PDF has been uploaded yet"}), 400

    # Encode the question to find the most relevant chunk
    question_embedding = embedding_model.encode(question)
    _, indices = embedding_index.search(np.array([question_embedding]), k=1)
    most_relevant_chunk = chunks[indices[0][0]]

    # Use the T5 model to answer the question based on the most relevant chunk
    input_text = f"Generate a detailed, coherent answer to the following question based on the provided context. Question: {question} Context: {most_relevant_chunk}"
    
    # Adjust parameters for paragraph-style output
    inputs = qa_tokenizer(input_text, return_tensors="pt")
    outputs = qa_model.generate(
        **inputs,
        max_length=200,         # Controls the length of the response
        num_beams=5,            # Beam search to improve coherence
        no_repeat_ngram_size=2  # Prevents repetitive n-grams for better coherence
    )
    
    answer = qa_tokenizer.decode(outputs[0], skip_special_tokens=True)

    return jsonify({"answer": answer}), 200

# Ensure necessary directories and files are set up
if __name__ == "__main__":
    os.makedirs('data', exist_ok=True)
    for file_name in [CONVERSATIONS_FILE, MESSAGES_FILE, USER_FILE]:
        if not os.path.exists(file_name):
            with open(file_name, 'w') as f:
                json.dump({}, f)
    app.run(debug=True)
