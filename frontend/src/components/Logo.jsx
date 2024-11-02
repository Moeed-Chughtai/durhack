import React from 'react';

const Logo = ({ width = 147, height = 62 }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 62">
            <g fill="none" fillRule="evenodd">
                <path
                fill="white"
                d="M73.4722526 33.3925079h-4.980164c-.3947181 0-.6737322-.3997215-.5493581-.7875378l1.9778469-6.1703235c.4951317-1.4648301 1.061672-4.0280381 1.061672-4.0280381h.0707781s.5310725 2.563208.9910516 4.0280381l1.9776892 6.1704866c.1242165.3876532-.1547976.7873747-.5495157.7873747zm.0529653-15.0902613c-.0813396-.2397351-.3001371-.3998846-.5457325-.3998846h-3.9590041c-.2455954 0-.4643929.1601495-.5458902.3998846l-8.441199 24.8023032c-.1327287.3896103.1467583.7978122.5458902.7978122h3.4714389c.2500092 0 .4716441-.1658575.5498311-.4113005l1.8615122-5.8420333c.078187-.2454431.2999795-.4114637.5498311-.4114637h7.9761756c.2496939 0 .4713287.1658576.5496734.4114637l1.8616698 5.8420333c.0783446.245443.2999795.4113005.5499887.4113005h3.4711237c.3992895 0 .6786188-.4082019.5462054-.7978122l-8.4415143-24.8023032zM106.01802 39.8573938c-2.959094 0-5.419025-2.3968575-5.419025-5.9549484 0-3.5207286 2.459931-5.9551152 5.419025-5.9551152 2.923213 0 5.383144 2.4343866 5.383144 5.9551152 0 3.5580909-2.459931 5.9549484-5.383144 5.9549484m-.035722-15.9550318C100.456581 23.902362 96 28.0597506 96 33.9024454c0 5.880057 4.456581 9.9999166 10.01802 9.9999166 5.525399 0 9.98198-4.1198596 9.98198-9.9999166 0-5.8426948-4.456581-10.0000834-10.017702-10.0000834M93.3556708 39.7647515c-.0706369.0029582-.1464998.0044372-.2262402.0044372-1.3250727 0-3.8234922-.4427343-3.8234922-3.5422034v-6.4042c0-.334105.2778269-.6049388.6207274-.6049388h3.1499979c.3427319 0 .6205589-.2708338.6205589-.6049388v-2.5172094c0-.334105-.277827-.6047744-.6205589-.6047744h-3.1499979c-.3429005 0-.6207274-.2709981-.6207274-.6052675l.0011801-3.3783556c0-.334105-.277827-.6049388-.6207275-.6049388l-3.4536182.0744464c-.3425633 0-.6203903.2708338-.6203903.6047745v3.3040735c0 .3342694-.2779955.6052675-.6207274.6052675h-1.3709277c-.3429005 0-.6207274.2706694-.6207274.6047744v2.5172094c0 .334105.2778269.6049388.6207274.6049388h1.2573018c.342732 0 .6207275.2708338.6207275.6049388v6.9945124c0 6.310197 5.3373793 7.0850643 8.0247819 7.0850643.3624563 0 .670797-.0175845.9101867-.0389488C93.7548784 43.8353109 94 43.574995 94 43.2606108v-2.8917422c0-.3438011-.291988-.6180861-.6443292-.6041171M143.461712 25.5457578c-1.275616-.9342915-2.829648-1.4866529-4.482561-1.4857973h-.291569c-1.100833-.0003422-2.161257.2445243-3.120901.6851471-.773134.3552362-1.480506.8367557-2.104528 1.4188911-.22343.2082478-.552713.2007187-.770915-.013347-.281428-.2760095-.580445-.531143-.896576-.7623203-1.275298-.9342915-2.829331-1.486824-4.482243-1.4859694h-.291569c-1.100833 0-2.161258.2445253-3.120901.6853192-1.440732.6617043-2.658668 1.7566735-3.524026 3.1358657-.865359 1.37731-1.376714 3.0554413-1.375923 4.8403489v10.7087606c0 .347707.261146.6297056.583139.6297056h3.499941c.322311 0 .583455-.2819986.583455-.6297056V32.5638958c.000317-.5003422.093651-.967488.262888-1.3995551.253855-.6466461.686297-1.2097877 1.225225-1.6031826.540512-.3935661 1.172774-.6184121 1.866202-.6192676h.291569c.463341.0003422.8961.1009582 1.295898.2838809.598827.273785 1.120324.7411019 1.484785 1.3230663.36462.5836755.572839 1.2665981.573314 2.0150581v10.7087606c0 .347707.261145.6297056.583456.6297056h3.49994c.322311 0 .583455-.2819986.583455-.6297056V32.7214933c.000317-.5005133.093651-.9678302.263205-1.399555.253539-.6466461.68598-1.2097878 1.224908-1.6031827.540512-.3937372 1.172774-.6187543 1.866202-.6194387h.291569c.463342.0003422.895942.1007871 1.295899.284052.598826.273785 1.120323.7407597 1.484784 1.3228952.36462.5838466.572839 1.2665981.573631 2.0152292v10.5511631c0 .347707.261145.6297056.583139.6297056h3.49994c.322311 0 .583456-.2819986.583456-.6297056V32.7214933c.000317-1.1889117-.226442-2.3336755-.63448-3.370123-.612771-1.5557837-1.626767-2.8709787-2.903808-3.8056125"
                />
                <path
                fill="#FDDA24"
                d="M26.9867988 7.58182408C26.9956858 7.42564313 27 7.29243976 27 7.20652359c.0013989-.46171617-.0492253-.9182707-.1488867-1.36966361-.0220589-.10706221-.0490373-.217621-.0791896-.33117687-.1118811-.39727904-.2221751-.70997394-.3757934-1.03365812-.1593313-.31769003-.2875581-.5458008-.4224501-.75426406-.0268197-.04096004-.0537981-.07675844-.0807766-.11621994-.1175941-.17199885-.2359817-.33117687-.3569084-.47670155-.0409437-.05011776-.0818874-.1028996-.1242594-.15118582-.1437791-.16284111-.283432-.30536872-.4173719-.4314124-.0401502-.03779646-.0793482-.07342836-.1193398-.10955977-.1674248-.14968728-.3145365-.26773877-.4362567-.35715153-.0768091-.05494638-.0996614-.07276233-.1160072-.08441763-.046498-.03080328-.0906157-.05511289-.1363203-.08441763-.1301311-.08525016-.2566123-.16717023-.379126-.23676899-.1928162-.10606318-.352941-.1861517-.5040201-.25225387-.1871032-.08192007-.3365954-.13986354-.4673613-.18398715-.0856961-.02947125-.1274333-.04512264-.1567922-.05378086-.039198-.0116553-.0785547-.01898148-.1185463-.02997076-.1372725-.039961-.2712123-.0752599-.4018196-.10356561-.0385632-.00849172-.0777613-.01698343-.1160071-.02430962-.1355269-.02697368-.2664515-.0477867-.3921391-.0636046-.1063267-.01415286-.2109077-.02514214-.3162822-.03330085-.0872831-.00666017-.1747249-.01348684-.2562949-.01681692-.0696678-.00266407-.1398116-.00597343-.209162-.00597343-.3473867-.0033508-.6611297.02528792-.9959794.08223235l-.0872831.0159844c-.5041788.09340887-1.0554906.26241064-1.5988675.5256538-.0923613.04279157-.1707574.08291909-.2639123.13386938l-.0872831.04928524c-.1071201.06094054-.2320143.13736597-.3700803.22977581-.2989842.20430066-.5997141.4392381-.8996506.73028745-.0349132.03496589-.0668112.06743421-.0995027.10040204-.0360241.03729694-.072683.07093079-.1087071.11022579-.1674248.19147984-.2735928.31502596-.3610346.42325369-.0399915.04845273-.0712547.09757147-.1087071.14702322-.1601248.21895303-.2696254.38529074-.3635737.55096242-.0612569.10606318-.098868.1781595-.1363204.25092184-.1168006.22078458-.2083685.41476199-.2623253.53847461-.0522112.12304661-.104581.24842428-.1544117.36697528-.3316758.79605661-.7204823 1.7253166-1.0440645 2.50039368-.0268197.06427063-.056972.13703297-.0825222.19880603-.0211066.05095029-.0457046.11022578-.0685569.16483916-.1168006.28006008-.246773.59025742-.3716672.89129703-.0744287.17632796-.1463182.34865981-.2099555.5025097-.0480851.1147214-.1028354.24576021-.1544117.36880682-.3749999.89795719-.8234763 1.97240886-1.1740369 2.81208956-.3437367.8253614-.7817391 1.8730058-1.1565803 2.7729611-.0704612.1686687-.1429856.3433317-.2085272.4991796-.1191811.2857212-.2613732.6252233-.4002327.9580652-.10442226.2500893-.20741631.4975146-.29723854.712305-.1963076.4690424-.42245015 1.0128451-.65113184 1.5594784-.15203127.3644777-.30390384.7284559-.45022204 1.0796133-.11267453.2699033-.22233383.5324805-.32263003.7734121-.10378753.2490902-.21741424.5199926-.3334214.7985541-.37658685.9022863-.79729133 1.9104693-1.13388666 2.7160167-.02618493.061773-.05554378.1335363-.08331568.199805-.21233595.5093364-.46720256 1.1187418-.6665254 1.5959429-.35294107.8461743-.79570437 1.9059736-1.19038262 2.8523835-.11933979.2850552-.23534695.5634503-.34230841.8195337-.33659532.8060469-.75142804 1.8002435-1.13372796 2.7176817-.02793059.0661022-.05570248.1320379-.0825222.197141-.12663982.3035372-.24931224.5979166-.36293895.868819-.2416948.5810997-.5659118 1.3546782-.8077653 1.9357779-.49592664 1.187508-1.15689766 2.771962-1.6526656 3.9601361-.14790517.3864562-.25010573.6673488-.33167574.9727175-.08902875.3223522-.14965082.652197-.21741424 1.1763523-.03015234.2540854-.04491111.5139985-.03999152.7098074.00333262.3756335.0228523.7457724.072683 1.1135802.01221964.1123903.05379813.398944.15203128.7902289.03586541.1513524.0776026.3003736.13473335.4768681.05395681.1620086.0866483.257582.12663982.3693063.13155942.3681408.30390384.7061444.43958937.9525706.09299617.1681692.14536602.2584145.17551836.3101973.04808504.0802551.12092675.1873173.19043583.2912159.08490264.1267097.18853147.2625771.30549081.4110989.03031103.0386289.06030467.079589.09061571.1162199.06458949.079589.13552683.1573465.20916202.2400991.11918109.1332033.23614043.2549179.35056062.3669753.03491324.0336338.06363731.0654361.1002962.09907.36039981.3383365.68144288.5714424.88330486.7046458.25391444.1623416.44514375.2792275.62161428.3721369.40023264.2097953.81696971.3694728.82093712.3701388.04903723.018482.095694.0261412.14377905.0427916 1.02946435.3664758 1.90673874.4190911 2.42964378.3996101.05141768-.001332.0915679-.0068267.13568553-.0079922.13314639-.0066602.27121236-.0178159.41403923-.0319688.16837702-.0168169.32691484-.03763.48132656-.0636046.10442231-.017483.20820984-.0342999.31675826-.0567779.11457889-.0251422.21582728-.0534479.32024959-.0820866.0728417-.0189815.14473123-.0366309.21995338-.0592755.16329872-.0501178.30882344-.1004021.44260461-.1521849.20598808-.079589.34881496-.140363.45910901-.1929783l.0785548-.0409601c.0537981-.0261411.1087071-.0554459.1634574-.0837516.1371138-.0709308.2661341-.1431936.3888065-.2147904.0384046-.0226446.075857-.0434576.1142615-.0672677.2058294-.1260437.3865847-.2489238.5473443-.3676413.453396-.3395021.7230214-.6080734.8537873-.7517665.2885103-.3060347.4614895-.5208252.5195724-.5995817.1315595-.1706668.2550254-.3476608.4102306-.5919224.0390393-.0621061.0750634-.1187175.1160071-.1839872.0766504-.1313718.1264811-.2207846.1721857-.3085323.0220589-.042625.0426894-.0842511.063796-.1277087.0236458-.0487857.0482438-.0979045.0703026-.1466902.1160072-.2484243.2115425-.4816967.2769254-.6536955l3.9269455-10.9438221c3.0079339-8.388815 6.2405821-17.4018543 8.8711357-24.73686414l.0498307-.15901152c.1764706-.56245121.1871032-.613568.251534-1.00085679.0312632-.18848276.0498307-.36031511.0630025-.5183276.0047609-.05761046.0074588-.11538742.0114262-.17299787"
                />
                <path
                fill="#614B79"
                d="M44.9759362 52.344752c-.0328502-.4300891-.125053-.9994796-.2156689-1.4210064-.0715722-.3354101-.2199537-.768957-.3240588-1.0944877-.0923615-.2537393-.1942448-.5336595-.295176-.8120977-.3200914-.8797725-.6698591-1.8408865-.9939179-2.7321852-.1212443-.3342575-.240743-.6615994-.3489742-.961114-.2358234-.6484267-.5511539-1.5146972-.7869773-2.1629593-.3319936-.9127043-.7444465-2.0453929-1.1196057-3.0771456-.1380662-.380856-.2721649-.7495273-.3940441-1.0852668-.3264392-.8960738-.7339725-2.0174009-1.1004034-3.0246194-.1187051-.324872-.2328081-.6393705-.3377067-.9288409-.1091834-.3006671-.2383625-.6535312-.3657961-1.004584-.1148964-.3154864-.2285233-.6288323-.3272327-.8990376-.4003919-1.101568-.934724-2.5696668-1.3349572-3.6705762-.3818245-1.0495359-.8901302-2.4481486-1.2721133-3.4981784-.1845644-.5064908-.4300683-1.1819216-.6144739-1.6892357-.2597867-.7141257-.5822585-1.6013078-.8767997-2.409783-.1082312-.2986913-.2132885-.5876677-.3086652-.8519452-.3410394-.9350979-.7942774-2.1810718-1.1343645-3.1166637-.1644099-.4519887-.3842049-1.0554636-.5484561-1.5074523-.0780788-.2135626-.1621881-.4454023-.24963-.6858043-.1821839-.5022097-.3786505-1.0424555-.5614692-1.5454885-.0874419-.240402-.1717099-.4717477-.24963-.6861336l.0017457.0059277-.0023805-.0059277c-.144414-.3627436-.2520104-.6345954-.4484771-.9917406l-.0111087-.0225583c-.0401503-.0749198-.0939485-.1593898-.1436206-.2413899-.0231697-.0385302-.0401503-.06998-.064907-.1108154l-.0073-.0098796c-.0995029-.1569199-.2029732-.3118639-.2993021-.4391453l-.0768093-.0887511c-.2110667-.2731691-.4227682-.5188402-.6249479-.71659557l-.07062-.06322902c-.287876-.27251048-.5527409-.48179195-.7396857-.62537451l-.0023804-.00148193-.0023805-.00164659c-.1956731-.14967494-.5614692-.38678376-1.0788206-.62537451-.0585591-.02799202-.1171182-.05845391-.1748839-.08315275-.0464981-.02025305-.1018833-.03918882-.1509206-.05911255-.1683773-.06816878-.3335806-.13040985-.494023-.18128945-.0368177-.01218476-.064907-.02552213-.1026769-.03787155-.284702-.08990376-.5622626-.14835767-.8188753-.18968705l-.0122196-.00246989c-.1153726-.01778316-.2269364-.03276712-.3313589-.04429324-.3096174-.03523701-.569404-.04412859-.7442879-.04192569h-.0119022c-.0810941-.00072097-.3113631.00174892-.6336762.03319877-.0569722.0055984-.1133095.0111968-.166949.01794782l-.0722071.00823294-.0779201.01169079-.0922028.01383134c-.0856962.01399601-.1723447.02930929-.2469322.04330529l-.0336437.00839761c-.1196573.02387554-.2294755.04923301-.3321523.07689571l-.0352307.0083976c-.1999579.042482-.4413357.12892792-.6650982.21833771-.0360241.01300805-.0672874.02436951-.1058507.03770688-.1434619.05252619-.3305654.14193598-.5278255.24468313-.1234661.06306436-.2374103.1230002-.3521481.1903457l-.0071414.0047751c-.0755396.04445791-.1574272.09204433-.2142406.1266227-.066494.04083541-.1572685.10093591-.2623258.17569105l-.042372.03194383c-.103629.07475514-.2158276.15988379-.3378654.25851447l-.0399916.0312852c-.029835.02453417-.0739527.06652219-.1083899.09566682-.2012275.17157457-.4075333.36142629-.5959064.57317764-.0771266.0862813-.1317183.1608717-.1990057.2430365-.1114052.1310685-.221382.2690527-.3337393.4266313-.1234661.1722332-.2286821.3334342-.3167588.4836032l-.0537982.0821647c-.0207893.0365543-.0328502.0694861-.052846.1057111-.0987094.1814541-.1861513.3530287-.2599453.5063261-.0177741.0363896-.0353894.0831527-.0528461.1239881l-.0234871.0535142c-.0783962.1855706-.1569511.3889243-.2083688.5614868l-.0096806.0360603c-.1356857.4292658-.2029731.7827885-.2470908 1.0259897l-.0063479.0490683c-.0217415.154944-.0482438.3647195-.0674461.6148364-.020948.2469883-.0288828.4776754-.0160284.7707683v.0205824c.0144414.3273418.0369764.5474908.0745875.7798245.0369763.2362855.084268.4538.1412401.7063867l.0063479.027992.0025391.0133374 9.634481 37.3617637-.0007935-.0060924.0007935.0036225v.0029639c.2150341.8120977.4506988 1.3396648.5181449 1.4832474.3385003.7189007.664146 1.2798936.9658286 1.6671713.4251486.5440331.7323856.9372385 1.3732031 1.4947736.7442879.6456275 1.4093861 1.0044193 1.6596509 1.1389456 1.5369782.8292222 3.3875412 1.1715481 5.0767097.9416843.377857-.0517029 1.3806619-.1878758 2.5710464-.757431 1.1389667-.5443623 1.8359629-1.1837328 2.2115982-1.5275406.7723771-.7109972 1.3490812-1.6131633 1.6948815-2.2452888.5533756-1.0087005.7820577-2.0190475.8783866-2.4504538.1618707-.7159369.2237624-1.6763923.1610772-2.5069318"
                />
                <path
                fill="#E04678"
                d="M42.9636275 29.8368295l.001468-.0161351c.0187571-.2415007.0324579-.4959796.0349045-.7765905l-.0009786-.0345502-.001468-.0852355c0-.1983568-.0068504-.3893475-.0177784-.5734983-.0044039-.0785711-.0094601-.1515299-.0153319-.2251902-.0086446-.1078598-.018594-.2102827-.0306638-.3118288-.0101125-.0929523-.0195726-.1841508-.0305007-.2685094l-.0024465-.0177136c-.02626-.1841508-.052683-.3411175-.0789429-.4744077-.0874244-.4661647-.1839827-.8046515-.2306307-.9539013-.0228347-.0733096-.0551296-.1695942-.0830206-.2557066-.1799049-.5752522-.3691069-1.0191434-.5742932-1.4205923-.0373511-.0745372-.0781274-.1510036-.1195561-.2285224-.1195561-.2215071-.2449839-.4381036-.3782409-.6653984-.001631-.0043845-.2205181-.3625141-.5707049-.8141221l-.0670362-.0871647c-.0440384-.055596-.091502-.1127705-.1399442-.1711726-.0729081-.0887432-.1432064-.1720495-.2110581-.2502698-.0339259-.0382332-.0662207-.0754141-.0973738-.109789-.3648662-.4037288-.6481799-.6515432-.7404974-.7288865l-.0060349-.0050861c-.0034252-.0028061-.2051863-.1850278-.5232414-.4300361-.2332403-.1878338-.3730214-.2860476-.6444284-.4624817l-.0229979-.0136797-.0210405-.0149075c-.0959059-.0619097-.2011087-.1250472-.3121833-.1885354-.4842592-.2874507-.8598904-.4598509-.9776523-.510887h-.0009786c-.3425209-.1652096-.9685185-.3832092-1.5468894-.5387728-.0381666-.0103475-.0763332-.0199935-.1144998-.0298149-.2263899-.0580513-.4392422-.1048783-.6232248-.1329394-.1637576-.0292887-.3240899-.0475284-.4842592-.0668204-.0763332-.0092952-.1423908-.0163105-.218724-.0249042-.0510519-.0052615-.1027563-.0149075-.1528296-.0184151-.0531722-.0035076-.1118901-.0050861-.1670196-.0087691-.0610014-.0042092-.1314628-.0136798-.1874079-.015609-.1407597-.0015784-.3314296-.0042091-.536779-.0036241-.0694828.0009934-.136519 0-.2086115.0020457-.3138144.005963-.6555197.0235012-.9650932.0703281l-.0763333.0119259c-.3162609.0427932-.6462226.106106-.9903745.1913415-.162942.0382333-.3208278.0780449-.4614245.1208381-.5902775.1797663-.6258345.1973044-1.5638522.6203252l-.0034252.0019292.0034252-.0026307-17.384074 8.696129-.0145163.0089445-.0499102.0278857c-.1417384.0764664-.2732011.1504775-.3978135.2222087-.100799.0573498-.1975203.1150504-.2890223.1722249l-.0110912.0078921c-.1035717.0650667-.2053494.1336409-.308758.2092305l-.0601858.0427931c-.0763332.0573499-.1552761.1180319-.2400908.1867816-.0397977.0320949-.07633323.0571745-.11776194.0911985-.03490451.0294641-.06377412.0605067-.09769999.0896201-.09835241.0841832-.20257661.176434-.31952301.2813123-.00766594.005963-.68536787.6222545-1.2272032 1.4860096-.02789099.0448978-.04844224.0885678-.07551769.132764-.4459295.7238005-.67916988 1.3393905-.76398456 1.6024631-.0127222.0384087-.02805409.0897955-.04061319.1303087l-.03066377.0975122c-.03229482.1015461-.06197996.2109843-.0950903.3318223-.03033756.112069-.05839165.2208057-.08302053.3276132-.01190667.0531406-.02283472.1041767-.03392587.1601235-.12037161.5870027-.15870132 1.0861392-.16033237 1.431992v.0024554c-.03457829 1.305191.25525957 2.2834704.3129988 2.4669198.05088881.1588958.1043873.3241055.16538863.4972072l.02283472.0745373c.03392587.095583.07372353.1839755.11107461.2757001.0220192.0552453.04240734.1094382.06703622.1666127.0569237.1303086.11629398.2537774.1771322.37444.04175492.0843587.08660884.1697696.13505107.2583374.08644574.1580189.17289147.3046381.25852168.4412605l.04844223.0819032.03311035.0457747c.3162609.4833521.59517072.8055284.68259508.9012868l.06018581.0606821c.34855572.3903998.65225752.66382.806555.7874641.06100133.0494577.14500052.1138228.22296472.1752064.0381666.0298149.0761701.0599805.1144999.0897954.1339093.1006692.2891854.2109843.4656652.3265609.1286899.0834817.2603158.1564405.390963.2293993.0856302.0485807.1660411.0955831.2593372.1443392l.0432229.0242027c.1213502.0584021.305496.1450407.5367791.2407991l.080737.0375317c.2017611.0789218.6214307.2429037 1.2322595.3761939.0499102.0112244.1076494.0198181.1619634.0294641l.0066873.0017538c.0856302.0145567.1722391.0287626.2637411.0417409.2612944.0417409.5343325.0762911.8302052.0911985h-.0008155c.1748487.0043002.325721.0052615.4681118.0033323l.0601858-.0008769c.380035-.0050861.6674263-.0303411.9584059-.0773434.2314462-.0319195.4790399-.077168.8090016-.1615266l.0083184-.0017538 18.7606814-4.8817512-.0076659.0026307.0084814-.0026307c.0331104-.0084183.0654052-.021572.0993311-.0303411l.0210406-.0068398c-.0406132.0112244-.0795954.0268334-.1211872.0371809.2245958-.0676974.5299287-.1432869.7497944-.226944.0525199-.0198181.1118902-.0433193.1686508-.065242.2136677-.0769926.4402208-.1709972.6777019-.2785062.1355404-.0612083.2678187-.1218904.3823185-.1827478l.074539-.0406886.0331104-.0168367.0365355-.0222734c1.0404478-.5694646 1.6078907-1.0608843 1.8546688-1.27485l.054314-.0520884.0262599-.0208704c.0440384-.0391102.080574-.0841833.1237969-.1243457.2231278-.2069505.4323917-.4144271.6232248-.6254113.0857933-.095057.1655517-.19292.2469412-.2897307.1500567-.1795909.291632-.3567265.4206482-.5343882.0805739-.1094382.1609848-.219578.2365025-.3325238.1892019-.2807862.3572003-.5545571.4986124-.8144729.0264231-.0475285.0492578-.0962846.0738867-.1443392.4010755-.7636122.6157219-1.3935834.699558-1.6840156.0254444-.0890939.0534985-.1839755.0805739-.2837677l.0238134-.0871647c.1278744-.4705493.2603158-1.0608843.3214802-1.8401054"
                />
            </g>
        </svg>
    );
}

export default Logo;