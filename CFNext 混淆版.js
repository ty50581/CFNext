const t=J;!function(){const t=J,e=Bt();for(;;)try{if(455753==-parseInt(t(982))/1+-parseInt(t(830))/2+-parseInt(t(191))/3+parseInt(t(266))/4*(parseInt(t(480))/5)+parseInt(t(288))/6*(-parseInt(t(697))/7)+parseInt(t(824))/8*(parseInt(t(739))/9)+parseInt(t(868))/10)break;e.push(e.shift())}catch(t){e.push(e.shift())}}();import{connect as e}from"cloudflare:sockets";const n=t(752),r=t(811),o=t(806)+t(353),a="luma"+t(531);function s(){const t=J;try{return t(811)===r?t(878):"plain"}catch(t){return"plain"}}const i="PAICNI/CFNext";let l=null;function c(t){const e=J,n=String(t||"")[e(502)](/(\d+)\.(\d+)\.(\d+)/);return n?[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]:null}function p(t,e){const n=c(t),r=c(e);if(!n||!r)return 0;for(let t=0;t<3;t++)if(n[t]!==r[t])return n[t]<r[t]?-1:1;return 0}function d(t){const e=t[J(502)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return e?e[1]:null}const u="application/octet-stream",f=t(436),h={Tracking:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs",ct:u},Advertising:{url:t(428),ct:u},AWAvenueAds:{url:"https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml",ct:f},Direct:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs",ct:u},Private:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs",ct:u},Download:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs",ct:u},AppleCN:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs",ct:u},China:{url:"https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml",ct:f},AI:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs",ct:u},Telegram:{url:t(536),ct:u},Twitter:{url:t(902),ct:u},SocialMedia:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs",ct:u},Netflix:{url:t(449),ct:u},YouTube:{url:t(669),ct:u},Google:{url:"https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs",ct:u},Microsoft:{url:t(272),ct:f},Proxy:{url:t(786),ct:u},Spotify:{url:t(156),ct:u},TikTok:{url:"https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs",ct:u},disney:{url:"https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs",ct:u},github:{url:t(410),ct:f},PrivateIP:{url:"https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs",ct:u},TelegramIP:{url:t(415),ct:u},ProxyIP:{url:"https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs",ct:u},ChinaIP:{url:"https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs",ct:u}},m=new Map,g=new Map;function v(t,e){return new Response(t,{status:200,headers:{"Content-Type":e,"Cache-Control":"public, max-age=86400"}})}const b=["173.245.48.0/20","103.21.244.0/22",t(238),t(391),t(630),t(728),t(796),"188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15",t(690),"104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],y=["104.16.0.0/13",t(790),"172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],x=["2400:cb00::/32",t(844),"2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29",t(261)],w=["2606:4700::/32",t(481),"2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"];let k=x[t(560)](),I=0;function P(t){const e=J;if(!ot(t=String(t||"")))return!1;if(t[e(743)](":")>=0)return x[e(231)](e=>function(t,e){const n=J,[r,o]=e.split("/"),a=parseInt(o,10),s=t=>{const e=J,n=t[e(743)]("::");let r;if(n>=0){const o=t.slice(0,n)[e(192)](":").filter(Boolean),a=t[e(560)](n+2)[e(192)](":").filter(Boolean),s=8-o[e(904)]-a[e(904)];r=[...o,...Array(s)[e(508)]("0"),...a]}else r=t[e(192)](":");return r[e(254)](t=>t.padStart(4,"0"))},i=t=>t.map(t=>parseInt(t,16).toString(2).padStart(16,"0"))[n(384)]("");return i(s(t)).slice(0,a)===i(s(r)).slice(0,a)}(t,e));const n=t.split(".").map(Number),r=(n[0]<<24|n[1]<<16|n[2]<<8|n[3])>>>0;return it[e(231)](([t,e])=>r>=t&&r<=e)}const S={HK:"香港",TW:"台湾",MO:"澳门",JP:"日本",SG:"新加坡",US:"美国",KR:"韩国",DE:"德国",FR:"法国",GB:"英国",CA:"加拿大",AU:t(557),SE:"瑞典",NL:"荷兰",FI:"芬兰",NO:"挪威",DK:"丹麦",CH:"瑞士",IT:"意大利",ES:t(736),PT:"葡萄牙",IE:"爱尔兰",BE:t(174),AT:"奥地利",PL:"波兰",CZ:"捷克",RO:"罗马尼亚",HU:"匈牙利",GR:"希腊",RU:"俄罗斯",TR:"土耳其",UA:t(900),IN:"印度",TH:"泰国",MY:t(230),VN:"越南",PH:"菲律宾",ID:"印尼",BR:"巴西",MX:"墨西哥",AR:"阿根廷",CL:"智利",ZA:"南非",EG:"埃及",AE:"阿联酋",IL:t(277),NZ:t(917),KZ:t(393),SA:"沙特"},C={};for(const t in S)C[S[t]]=t;C[t(863)]="ID";const A={HKG:"香港",TPE:"台湾",KHH:"台湾",TSA:"台湾",RMQ:"台湾",NRT:"日本",KIX:"日本",HND:"日本",CTS:"日本",FUK:"日本",SIN:t(497),ICN:"韩国",KUL:t(230),BKK:"泰国",MNL:t(934),SGN:"越南",HAN:"越南",CGK:"印尼",DEL:"印度",BOM:"印度",MAA:"印度",DXB:"阿联酋",TLV:"以色列",RUH:"沙特",JED:"沙特",DOH:t(338),FRA:"德国",MUC:"德国",DUS:"德国",HAM:"德国",BER:"德国",CGN:"德国",STR:"德国",AMS:"荷兰",CDG:"法国",MRS:"法国",NCE:"法国",LHR:"英国",LGW:"英国",MAN:"英国",MAD:t(736),BCN:t(736),MXP:t(585),FCO:t(585),PMO:"意大利",ZRH:"瑞士",GVA:"瑞士",VIE:t(293),WAW:"波兰",PRG:"捷克",ARN:"瑞典",CPH:"丹麦",OSL:"挪威",HEL:"芬兰",DUB:t(321),LIS:t(469),BRU:"比利时",BUD:"匈牙利",OTP:t(955),ATH:"希腊",IST:t(291),SVO:"俄罗斯",DME:t(547),LED:"俄罗斯",JFK:"美国",EWR:"美国",LAX:"美国",SJC:"美国",SFO:"美国",SEA:"美国",ORD:"美国",DFW:"美国",IAD:"美国",ATL:"美国",MIA:"美国",BOS:"美国",DEN:"美国",PHX:"美国",MSP:"美国",DTW:"美国",PHL:"美国",CLT:"美国",LAS:"美国",PDX:"美国",SLC:"美国",SAN:"美国",AUS:"美国",IAH:"美国",MCI:"美国",BNA:"美国",SMF:"美国",RDU:"美国",YYZ:"加拿大",YVR:t(168),YUL:t(168),YOW:t(168),YYC:t(168),MEX:t(693),GRU:"巴西",GIG:"巴西",EZE:"阿根廷",SCL:"智利",SYD:t(557),MEL:t(557),BNE:t(557),PER:t(557),AKL:t(917),JNB:"南非",CAI:"埃及",ALA:"哈萨克斯坦",ALB:"美国",BDL:"美国",BHM:"美国",BIL:"美国",BOI:"美国",BUF:"美国",BUR:"美国",BTV:"美国",BWI:"美国",CAE:"美国",CHA:"美国",CLE:"美国",CMH:"美国",CPR:"美国",DAL:"美国",DAY:"美国",DSM:"美国",DTT:"美国",ECP:"美国",EYW:"美国",FLL:"美国",GRR:"美国",GSP:"美国",HIO:"美国",HNL:"美国",ICT:"美国",IND:"美国",JAX:"美国",LBB:"美国",MCO:"美国",MDW:"美国",MEM:"美国",MFE:"美国",MFR:"美国",MSY:"美国",OAK:"美国",OKC:"美国",OMA:"美国",ONT:"美国",ORF:"美国",PIT:"美国",PSC:"美国",PVD:"美国",RIC:"美国",RNO:"美国",RSW:"美国",SAT:"美国",SDF:"美国",SNA:"美国",STL:"美国",SWF:"美国",SYR:"美国",TPA:"美国",TUL:"美国",TUS:"美国",CTS:"日本",FUK:"日本",HND:"日本",BLR:"印度",CMB:t(334),KWI:t(456),AMM:"约旦",BEY:t(672),NBO:t(197),LOS:t(219),ACC:"加纳",CPT:"南非",LIM:"秘鲁",BOG:t(307),PTY:"巴拿马"},T=Object.assign({},S,A,{USA:"美国"}),E=A,U=["https://bestcf.pages.dev/random-region/HK/100.txt","https://bestcf.pages.dev/random-region/TW/100.txt","https://bestcf.pages.dev/random-region/JP/100.txt","https://bestcf.pages.dev/random-region/SG/100.txt",t(189),"https://bestcf.pages.dev/random-region/KR/100.txt"][t(384)]("\n"),D=/random-region\/[A-Z]{2,}\/\d+\.txt/i,L={uuid:"",path:"",admin:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,alpn:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:500,polling:!1,countryLabel:"",loadBalance:!0,ipv6Mode:"off",probeAlive:!1,cfAccountId:"",cfApiToken:"",quotaAuto:!1,tgBotToken:"",tgChatID:"",homeWan:!1,homeWanNodes:[],proxyIP:"",outboundProxy:"",outboundMode:"",fakePage:"",preferredDomains:t(655),preferredIPs:[],optimizer:{source:t(815),sourceURL:"",fallbackPool:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:t(855),ipType:[t(262)],isp:["移动","联通","电信"]}},R=["cloudflare.com",t(842),t(784)],N=[t(991),"172.67.72.4",t(301),t(479),"104.16.88.7",t(345),"104.17.2.7",t(468),"104.18.34.34",t(195),t(461),"104.19.1.1",t(615),"104.20.1.1","104.21.23.1",t(735),t(424),"104.25.0.1",t(464),"162.159.128.1"],$=[{label:"香港",region:"HK",url:"https://bestcf.pages.dev/random-region/HK/100.txt",count:12},{label:"日本",region:"JP",url:t(877),count:12},{label:"美国",region:"US",url:t(189),count:12},{label:t(497),region:"SG",url:t(1008),count:12},{label:"台湾",region:"TW",url:"https://bestcf.pages.dev/random-region/TW/100.txt",count:12}],M=["104.17.127.180#优选IP-001",t(187),"104.16.124.96#优选IP-003","104.16.125.96#优选IP-004",t(306),t(701),"104.16.132.229#优选IP-007",t(343),t(540),t(545),"188.114.96.1#优选IP-011",t(486),t(360),t(488),t(264),t(286),"104.21.213.24#优选IP-017",t(692),t(843),t(597),t(854),t(990),t(432),"104.18.37.92#优选IP-024","104.18.47.234#优选IP-025","104.18.42.54#优选IP-026","172.64.144.49#优选IP-027","172.64.146.15#优选IP-028","104.17.185.207#优选IP-029","104.17.101.139#优选IP-030",t(686),t(629),"104.18.217.109#优选IP-033",t(898),"104.18.184.243#优选IP-035","162.159.137.205#优选IP-036","172.65.64.7#优选IP-037",t(909),"104.19.88.253#优选IP-039",t(650),"104.18.185.40#优选IP-041",t(748),t(676),"104.24.54.254#优选IP-044","104.19.123.4#优选IP-045","188.114.98.144#优选IP-046","188.114.99.18#优选IP-047",t(223),"162.159.4.175#优选IP-049",t(215),"172.65.173.221#优选IP-051","104.18.176.111#优选IP-052","104.25.122.6#优选IP-053",t(819),"104.25.214.211#优选IP-055",t(833),"104.25.101.186#优选IP-057",t(699),"104.25.143.238#优选IP-059",t(271),t(375),"104.16.113.211#优选IP-062",t(346),"188.114.98.91#优选IP-064","162.159.236.5#优选IP-065",t(363),t(244),t(766),t(935),t(465),t(870),"162.159.235.27#优选IP-072","104.19.214.25#优选IP-073","104.19.168.107#优选IP-074",t(414),"104.27.66.179#优选IP-076","104.24.2.253#优选IP-077",t(953),"104.21.114.216#优选IP-079",t(173),t(431),"188.114.96.255#优选IP-082","104.25.245.147#优选IP-083","172.66.161.31#优选IP-084",t(763),t(959),"172.64.34.109#优选IP-087",t(297),t(490),t(396),"104.17.13.179#优选IP-091","172.65.35.169#优选IP-092","104.16.0.133#优选IP-093","104.16.238.98#优选IP-094","104.18.28.140#优选IP-095","104.19.115.243#优选IP-096",t(603),t(546),"104.21.192.230#优选IP-099","104.25.20.146#优选IP-100",t(320),t(805),"172.65.134.100#优选IP-103","188.114.96.94#优选IP-104","104.25.197.107#优选IP-105",t(211),"172.64.233.36#优选IP-107",t(568),t(644),t(235),"104.27.72.4#优选IP-111","104.21.57.47#优选IP-112","172.65.162.213#优选IP-113","172.67.255.83#优选IP-114","172.67.189.246#优选IP-115","162.159.230.149#优选IP-116","162.159.197.16#优选IP-117",t(753),t(494),t(977),"104.18.141.27#优选IP-121","172.65.11.191#优选IP-122","104.24.184.158#优选IP-123","188.114.97.52#优选IP-124","104.27.4.144#优选IP-125","104.25.93.154#优选IP-126","172.66.199.166#优选IP-127",t(865),t(915),t(193),"104.18.173.224#优选IP-131",t(610),t(167),t(538),"104.17.195.184#优选IP-135",t(214),t(623),"104.24.51.58#优选IP-138",t(932),t(392),t(916),"172.67.161.136#优选IP-142",t(679),t(268),"104.19.23.222#优选IP-145","188.114.96.141#优选IP-146",t(930),t(251),"104.16.123.26#优选IP-149",t(153),t(290),t(673),"104.16.68.175#优选IP-153",t(435),"104.16.218.231#优选IP-155",t(704),t(212),t(185),t(849),"104.16.201.45#优选IP-160","104.16.91.33#优选IP-161",t(548),"104.16.11.246#优选IP-163",t(162),"104.17.240.245#优选IP-165","172.66.157.150#优选IP-166","104.17.25.173#优选IP-167","104.18.26.28#优选IP-168",t(229),t(634),t(827),t(326),t(831),"104.17.153.58#优选IP-174","188.114.96.89#优选IP-175",t(495),"104.25.251.220#优选IP-177",t(395),"162.159.153.10#优选IP-179",t(400),"172.65.3.67#优选IP-181","172.67.232.109#优选IP-182",t(635),t(515),t(302),t(696),"104.25.73.92#优选IP-187","172.67.195.152#优选IP-188","172.65.184.114#优选IP-189","172.65.202.216#优选IP-190","172.65.21.190#优选IP-191",t(975),t(532),"104.17.160.131#优选IP-194",t(323),"162.159.43.223#优选IP-196","104.21.224.5#优选IP-197","104.25.18.216#优选IP-198",t(441),"104.24.46.127#优选IP-200",t(519),t(354),"188.114.97.108#优选IP-203",t(631),"188.114.97.0#优选IP-205",t(837),"104.19.68.127#优选IP-207","162.159.10.45#优选IP-208","104.25.181.74#优选IP-209",t(659),t(188),t(636),t(165),"104.16.77.112#优选IP-214","104.19.181.118#优选IP-215",t(371),t(250),t(867),t(330),"172.65.47.182#优选IP-220",t(284),t(152),"188.114.96.151#优选IP-223","172.65.139.108#优选IP-224",t(265),t(809),"162.159.134.174#优选IP-227","104.18.194.107#优选IP-228",t(780),t(292),t(194),t(873),t(303),"104.17.0.4#优选IP-234",t(362),"104.27.97.130#优选IP-236","172.67.127.122#优选IP-237",t(409),t(729),t(946),t(408),"172.67.159.243#优选IP-242","104.25.113.22#优选IP-243","188.114.98.27#优选IP-244","162.159.198.200#优选IP-245","104.17.76.49#优选IP-246",t(526),"172.67.131.200#优选IP-248",t(448),t(624),"172.66.164.60#优选IP-251","162.159.26.248#优选IP-252",t(754),"172.65.50.167#优选IP-254","162.159.236.19#优选IP-255","104.19.143.220#优选IP-256",t(518),t(157),"104.18.144.168#优选IP-259",t(357),"104.17.100.40#优选IP-261",t(298),t(163),"104.20.17.160#优选IP-264",t(619),"104.27.20.220#优选IP-266","172.65.118.85#优选IP-267","104.19.83.33#优选IP-268",t(255),t(243),"104.27.46.114#优选IP-271","104.25.126.144#优选IP-272",t(725),"104.24.46.107#优选IP-274",t(332),"162.159.137.71#优选IP-276",t(537),"104.27.124.239#优选IP-278","104.24.34.149#优选IP-279",t(511),t(340),"104.27.96.232#优选IP-282",t(730),"104.24.25.178#优选IP-284","104.24.84.86#优选IP-285","104.25.238.237#优选IP-286","104.16.45.249#优选IP-287",t(617),t(826),"172.65.45.248#优选IP-290",t(440),"104.27.27.106#优选IP-292",t(886),t(263),"162.159.228.164#优选IP-295",t(976),"104.18.185.26#优选IP-297",t(911),"104.24.49.39#优选IP-299","172.67.85.54#优选IP-300"],O=["cloudflare.182682.xyz",t(606),"freeyx.cloudflare88.eu.org","bestcf.top","cdn.2020111.xyz","cfip.cfcdn.vip",t(961),t(489),"cf.zhetengsha.eu.org",t(160),t(328),t(418),t(981),t(389),"115155.xyz","cname.xirancdn.us",t(528),"8.889288.xyz",t(590),"cf.877771.xyz","xn--b6gac.eu.org",t(680),"cdns.doon.eu.org",t(677),"saas.sin.fan"][t(384)]("\n"),_=new Set([80,8080,8880,2052,2082,2086,2095]),F={wetest_v4:{label:t(894),url:t(607)},wetest_v6:{label:t(808),url:t(594)},bestcf:{label:"优选 IP 列表",url:"https://cf.090227.xyz/ip.164746.xyz"},hostmonit:{label:t(373),url:t(232)},wetest_cname:{label:t(447),url:"https://www.wetest.vip/page/cloudflare/cname.html"}},z=new TextEncoder,q=new TextDecoder,B=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],G=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function K(t,e){return(t<<e|t>>>32-e)>>>0}function H(t){const e=J,n=z.encode(String(t)),r=8*n.length,o=1+(n[e(904)]+8>>6)<<6,a=new Uint8Array(o);a[e(390)](n),a[n.length]=128;const s=new DataView(a.buffer);s.setUint32(o-8,r>>>0,!0),s.setUint32(o-4,Math.floor(r/4294967296),!0);let i=1732584193,l=4023233417,c=2562383102,p=271733878;for(let t=0;t<o;t+=64){const e=new Uint32Array(16);for(let n=0;n<16;n++)e[n]=s.getUint32(t+4*n,!0);let n=i,r=l,o=c,a=p;for(let t=0;t<64;t++){let s,i;t<16?(s=r&o|~r&a,i=t):t<32?(s=a&r|~a&o,i=(5*t+1)%16):t<48?(s=r^o^a,i=(3*t+5)%16):(s=o^(r|~a),i=7*t%16);const l=n+s+G[t]+e[i]>>>0;n=a,a=o,o=r,r=r+K(l,B[t])>>>0}i=i+n>>>0,l=l+r>>>0,c=c+o>>>0,p=p+a>>>0}let d="";for(const t of[i,l,c,p])d+=(255&t).toString(16)[e(685)](2,"0"),d+=(t>>>8&255)[e(1002)](16)[e(685)](2,"0"),d+=(t>>>16&255).toString(16).padStart(2,"0"),d+=(t>>>24&255).toString(16)[e(685)](2,"0");return d}function j(t,e=443){const n=J;if(!(t=String(t||"").trim()))return{host:"",port:e};if(t[n(948)]("[")){const n=t.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:n?n[1]:t.replace(/^\[|\]$/g,""),port:n&&n[2]?parseInt(n[2]):e}}const r=t[n(609)](":");return r>0&&/^\d+$/[n(151)](t[n(560)](r+1))?{host:t[n(560)](0,r),port:parseInt(t[n(560)](r+1))}:{host:t,port:e}}async function W(t){const e=J;let n=null,r="";for(const t of["https://www.vpngate.net/api/iphone/",e(367)])try{const o=await fetch(t,{headers:{"User-Agent":e(207),Accept:"text/plain"},cf:{cacheTtl:1800,cacheEverything:!0}});if(!o||!o.ok){n=new Error("HTTP "+(o&&o[e(698)]));continue}if(r=await o.text(),r&&r[e(904)])break}catch(t){n=t}if(!r)throw n||new Error(e(425));const o=[];return String(r)[e(192)](/\r?\n/)[e(663)](e=>{const n=J;if(!(e=e[n(919)]())||e.startsWith("#"))return;const r=e[n(192)](",");if(r.length<15)return;const a=(r[0]||"")[n(919)](),s=(r[1]||"").trim();if(0===a.toLowerCase()[n(743)](n(710)))return;if(0===s[n(743)]("219.100.37."))return;const i=function(t){const e=J;for(let n=t[e(904)]-1;n>=Math[e(646)](3,t.length-3);n--){const r=(t[n]||"")[e(919)]();if(r&&!(r.length<100))try{const t=atob(r.slice(0,600));if(e(260)==typeof t&&t.length>10&&(t.indexOf("client")>=0||t.indexOf("remote")>=0||t.indexOf("dev ")>=0||t[e(743)](e(802))>=0||t.indexOf("PacketiX")>=0))return r}catch(t){}}return""}(r);if(!s||!i)return;const l=(r[6]||"")[n(919)]()[n(872)]();t&&l!==String(t)[n(919)]().toUpperCase()||o[n(505)]({host:a,ip:s,speed:parseInt(r[4])||0,ping:parseInt(r[5])||0,country:l,ovpnB64:i})}),o.sort((t,n)=>(n[e(227)]||0)-(t[e(227)]||0)),o}function V(t){const e=J;try{const n=atob(String(t||"").trim());return"string"==typeof n&&n[e(743)](e(751))>=0?n:""}catch(t){return""}}function J(t,e){return t-=150,Bt()[t]}function X(t){const e=J,n=e=>{const n=J,r=String(t||"").match(new RegExp("<"+e+">([\\s\\S]*?)<\\/"+e+">","i"));return r?r[1][n(919)]():""},r={};return String(t||"").split(/\r?\n/)[e(663)](t=>{const e=J,n=t.trim()[e(502)](/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);n&&(r[n[1].toLowerCase()]=n[2].trim())}),{ca:n("ca"),cert:n(e(861)),key:n("key"),tlsAuth:n("tls-auth"),tlsCrypt:n("tls-crypt"),cipher:r[e(555)]||"",auth:r[e(576)]||"",keyDirection:r[e(971)]||"",remote:r.remote||"",proto:r[e(566)]||""}}let Q="",Y=0;function Z(){const t=J,e=(new Date).toISOString()[t(560)](0,10);return e!==Q&&(Q=e,Y=0),!(Y>=300||(Y++,0))}let tt=0;async function et(t,e){const n=J;try{if(!t.K||"function"!=typeof t.K.get)return null;const r=await t.K[n(210)]("hwcache");if(!r)return null;const o=JSON[n(183)](r);if(o&&o.t&&2===o.v&&Array.isArray(o[n(377)])&&o[n(377)][n(904)]&&(e||Date[n(398)]()-o.t<18e5))return o[n(377)]}catch(t){}return null}function nt(t){const e=J;return Array.isArray(t)&&t.length?t[e(943)](t=>t&&e(1003)!==String(t[e(566)]||"")[e(542)]()):t}async function rt(t,e,n){const r=J;if(!e.homeWan)return[];let o=null;if(n||(o=nt(await et(t))),o&&o[r(904)]&&o[r(904)]>=30)return o;let a=[];try{a=nt((await W(""))[r(254)](t=>function(t){const e=J,n=X("string"==typeof t.ovpn?t.ovpn:V(t[e(993)])),r=String(n[e(627)]||"")[e(192)](/\s+/),o=parseInt(r[1],10)||443,a=e(1003)===String(n.proto||"").toLowerCase()?"udp":e(279);return{server:t.ip,port:o,proto:a,country:t.country,ca:n.ca||"",cert:n[e(861)]||"",key:n.key||"",tlsAuth:n.tlsAuth||"",tlsCrypt:n.tlsCrypt||"",cipher:n.cipher||"AES-128-GCM",auth:n.auth||e(580)}}(t)))[r(560)](0,100),a[r(904)]||(a=[])}catch(t){}if(a[r(904)])return await async function(t,e){const n=J;try{if(!t.K||"function"!=typeof t.K[n(913)])return;if(!Z())return;await t.K.put("hwcache",JSON[n(584)]({t:Date.now(),v:2,nodes:e}))}catch(t){}}(t,a),a;if(o&&o[r(904)])return o;const s=nt(await et(t,!0));return s&&s.length?s:[]}function ot(t){const e=J;if(!(t=String(t||"").trim()))return!1;const n=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(n)return n[e(560)](1).every(t=>Number(t)<=255);if(!/^[0-9a-fA-F:]+$/.test(t))return!1;if((t.match(/::/g)||[])[e(904)]>1)return!1;const r=t[e(213)]("::"),o=t.replace(/::/g,":")[e(192)](":")[e(943)](Boolean);return!(!r&&8!==o[e(904)])&&(!r||!(o[e(904)]<1||o[e(904)]>7))&&o[e(969)](t=>/^[0-9a-fA-F]{1,4}$/.test(t))}function at(t){const e=J,n=[];for(let r=0;r<16;r+=2)n.push((t[r]<<8|t[r+1])[e(1002)](16));let r=-1,o=0,a=-1,s=0;for(let t=0;t<8;t++)"0"===n[t]?(a<0?(a=t,s=1):s++,s>o&&(o=s,r=a)):(a=-1,s=0);if(o>=2){const t=n.slice(0,r)[e(384)](":");return(t?t+"::":"::")+n.slice(r+o).join(":")}return n[e(384)](":")}function st(t){const e=J,[n,r]=t[e(192)]("/"),o=n[e(192)](".").map(Number),a=(o[0]<<24|o[1]<<16|o[2]<<8|o[3])>>>0,s=r>=32?0:4294967295<<32-r>>>0;return[(a&s)>>>0,(a|~s>>>0)>>>0]}const it=b.map(st),lt=new Map;function ct(t){const e=J;if(String(t).indexOf(":")>=0)return function(t){const e=J,[n,r]=t.split("/"),o=parseInt(r,10)||0,a=(t=>{const e=J,n=t.indexOf("::");let r;if(n>=0){const o=t.slice(0,n).split(":").filter(Boolean),a=t[e(560)](n+2).split(":").filter(Boolean),s=8-o[e(904)]-a[e(904)];r=[...o,...Array(s)[e(508)]("0"),...a]}else r=t[e(192)](":");return r.map(t=>t.padStart(4,"0"))})(n)[e(254)](t=>parseInt(t,16));let s=0;for(let t=0;t<8;t++)for(let n=15;n>=0;n--)s>=o&&(a[t]|=(Math[e(612)]()<.5?1:0)<<n),s++;return a.map(t=>t[e(1002)](16)).join(":")}(t);const[n,r]=function(t){const e=J;let n=lt.get(t);return n||(n=st(t),lt[e(390)](t,n)),n}(t),o=n+Math[e(289)](Math[e(612)]()*(r-n>>>0));return(o>>>24&255)+"."+(o>>>16&255)+"."+(o>>>8&255)+"."+(255&o)}function pt(t){const e=J,n=String(t||"")[e(192)](".")[e(254)](t=>parseInt(t,10).toString(16).padStart(2,"0"));return 4!==n[e(904)]||n.some(t=>e(278)===t)?null:"2606:4700::"+n[0]+n[1]+":"+n[2]+n[3]}function dt(t,e){const n=J,r=new Set,o=[];let a=0;for(;o[n(904)]<e&&a++<20*e;){const e=ct(t[Math.floor(Math[n(612)]()*t[n(904)])]);r[n(860)](e)||(r[n(834)](e),o[n(505)](e))}return o}function ut(t){const e=J,n=[],r=new Set;return String(t||"")[e(192)](/[\n,;]+/)[e(254)](t=>t.trim())[e(943)](Boolean)[e(663)](t=>{const e=J;let o="";if(t.includes("#")){const[e,n]=t.split("#");t=e,o=n}const{host:a,port:s}=j(t,443);a&&ot(a)&&!r[e(860)](a)&&(r[e(834)](a),n[e(505)]({ip:a,port:s,name:o}))}),n}function ft(t){const e=J;try{const n=atob(String(t)[e(513)](/-/g,"+").replace(/_/g,"/")),r=new Uint8Array(n.length);for(let t=0;t<n[e(904)];t++)r[t]=n.charCodeAt(t);return new TextDecoder(e(427)).decode(r)}catch(t){return null}}function ht(t,e){return new Response(JSON[J(584)](t),{status:e||200,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function mt(t){const e=J,n=JSON[e(183)](JSON.stringify(L));let r=!1,o=!1;if(t.U&&(n.uuid=String(t.U).toLowerCase()),(t.D||t[e(257)])&&(n.path=String(t.D||t[e(257)])),(t[e(801)]||t.admin)&&(n[e(632)]=String(t.ADMIN||t[e(632)])),t.HOST&&(n.host=String(t[e(563)]).replace(/^https?:\/\//,"")[e(192)]("/")[0]),t[e(928)]&&(n[e(283)]=String(t[e(928)])),(t.S||t.OUTBOUND)&&(n[e(883)]=String(t.S||t[e(564)])),"true"!==t.ECH&&"1"!==t.ECH||(n.ech=!0),"true"!==t[e(922)]&&"1"!==t[e(922)]||(n[e(972)]=!0),t[e(761)]&&(n.trojanPassword=String(t[e(761)])),t[e(177)]&&(n[e(813)]=String(t.ALPN)),t.TGTOKEN&&(n[e(616)]=String(t[e(348)])),t[e(521)]&&(n[e(905)]=String(t.TGCHAT)),t.YX&&(n.preferredIPs=ut(t.YX)),t[e(442)]&&(n[e(958)][e(475)]=String(t.YXURL)),"1"!==t[e(731)]&&e(403)!==t.PROBE_ALIVE||(n[e(823)]=!0),"0"!==t.PROBE_ALIVE&&"false"!==t.PROBE_ALIVE||(n[e(823)]=!1),"1"!==t[e(709)]&&"true"!==t[e(709)]||(n[e(527)]=!0),t.K&&e(358)==typeof t.K.get)try{const a=await async function(t){try{return await t.K.get("config",{cacheTtl:30})}catch(t){return null}}(t);if(a){const t=JSON[e(183)](a);o=!0,void 0!==t[e(968)]&&(r=!0),Object[e(688)](n,t),t[e(958)]&&(n.optimizer=Object[e(688)](JSON.parse(JSON.stringify(L[e(958)])),t[e(958)])),t[e(270)]&&Array.isArray(t.preferredIPs)&&(n.preferredIPs=t[e(270)]),t[e(632)]&&(n.admin=String(t.admin)),t[e(781)]&&(n[e(781)]=String(t[e(781)])[e(542)]())}}catch(t){}var a,s;return n.adminInit=!(!n[e(259)]&&!o),delete n[e(295)],delete n.fragmentParam,a=!!n.probeAlive,Ke=!0===a||e(403)===a||"1"===a||1===a,tn=n.optimizer&&n.optimizer[e(947)]||"",n[e(781)]=String(n.uuid||"")[e(542)](),s=n[e(781)],/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(s||"")||(n[e(781)]=function(){const t=J;if(crypto[t(869)])return crypto.randomUUID();const e=crypto[t(455)](new Uint8Array(16));return e[6]=15&e[6]|64,e[8]=63&e[8]|128,[...e][t(254)]((t,e)=>(4===e||6===e||8===e||10===e?"-":"")+t.toString(16).padStart(2,"0"))[t(384)]("")}()),n.path&&"/"!==n.path&&""!==n.path||(n[e(732)]=n[e(781)]),Array[e(966)](n[e(270)])||(n.preferredIPs=ut(n.preferredIPs)),r||Boolean(n.cfAccountId&&n[e(506)]||t.CF_ACCOUNT_ID&&t.CF_API_TOKEN)&&(n[e(968)]=!0),n}async function gt(t,e){const n=J;if(!t.K||"function"!=typeof t.K.put)return!1;const r=JSON[n(183)](JSON[n(584)](e));return r[n(632)]&&(r[n(632)]=String(r.admin)),await t.K.put(n(776),JSON[n(584)](r)),!0}let vt=null,bt=0;const yt=1e5;async function xt(t,e){const n=J,r=String(t.tgBotToken||"").trim(),o=String(t[n(905)]||"").trim();if(r&&o)try{await fe("https://api.telegram.org/bot"+r+n(891),{method:n(420),headers:{"Content-Type":"application/json"},body:JSON[n(584)]({chat_id:o,text:e})},8e3)}catch(t){}}const wt=[80,85,90,91,92,93,94,95,96,97,98,99];async function kt(t,e){const n=J;try{const r=await It(t,e);if(!r||!r[n(988)]||r.error||n(642)!=typeof r[n(524)])return;const a=Math.floor(r[n(524)]),s=(new Date).toISOString()[n(560)](0,10);let i=null;if(t.K&&"function"==typeof t.K.get)try{i=await t.K[n(210)](n(220))}catch(t){}let l={day:s,level:0};if(i)try{const t=JSON.parse(i);t&&t[n(782)]&&(l=t)}catch(t){}const c=l.day!==s;if(c&&(l={day:s,level:0},e.quotaDisabled)){e[n(319)]=!1;try{await gt(t,e)}catch(t){}}const p=!(!String(e.tgBotToken||"")[n(919)]()||!String(e[n(905)]||"")[n(919)]()),d="当日额度 "+r[n(524)]+"%（"+(r.today&&r[n(383)][n(581)]||0)+n(591)+r.limit+"）";let u=c;if(a>=99&&!e[n(319)]){e[n(319)]=!0;try{await gt(t,e)}catch(t){}p&&await xt(e,"⚠️ "+o+" 用量告警："+d+"。订阅已自动停用，明日自动恢复。"),l.level=99,u=!0}else if(p&&a>=80&&!e.quotaDisabled){const t=wt[n(943)](t=>t<=a&&t>(l.level||0)).pop();t&&(await xt(e,n(267)+o+" 用量提醒："+d+"（提醒阈值 "+t+"%）"),l.level=t,u=!0)}if(u&&t.K&&"function"==typeof t.K.put)try{await t.K.put("tgnote",JSON[n(584)](l))}catch(t){}}catch(t){}}async function It(t,e){const n=J,r=String(t.CF_ACCOUNT_ID||e&&e.cfAccountId||"")[n(919)](),o=String(t[n(912)]||e&&e[n(506)]||"").trim();if(!r||!o)return{configured:!1};const a=Date.now();if(a<bt)return vt&&vt[n(822)]?Object[n(688)]({},vt[n(822)],{stale:!0,error:n(707)}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"};if(vt&&vt.at&&a-vt.at<3e5)return vt.data;try{const t=new Date;t.setUTCHours(0,0,0,0);const e=new Date,s={query:n(372),variables:{accountId:r,filter:{datetime_geq:t[n(228)](),datetime_leq:e.toISOString()}}},i=await fetch(n(299),{method:n(420),headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},body:JSON[n(584)](s)});if(!i.ok)throw new Error(n(897)+i[n(698)]);const l=await i.json();if(l[n(222)]&&l[n(222)][n(904)])throw new Error("GraphQL: "+JSON[n(584)](l.errors).slice(0,200));const c=l&&l[n(822)]&&l[n(822)][n(778)]&&l.data[n(778)].accounts||[];if(!c.length)throw new Error(n(750));const p=c[0],d=(p[n(273)]||[])[0]||{},u=(p.pagesFunctionsInvocationsAdaptiveGroups||[])[n(248)]((t,e)=>t+(e&&e.sum&&e[n(310)][n(581)]||0),0),f=(d.sum&&d.sum.requests||0)+u,h=d.quantiles&&d[n(225)][n(484)]||0,m=d.sum&&d.sum.subrequests||0,g=Math[n(573)](f/yt*1e3)/10,v={configured:!0,limit:yt,today:{requests:f,cpuTime:h,subrequests:m},percent:g,remaining:Math.max(0,yt-f),updatedAt:e[n(228)]()};return vt={at:a,data:v},v}catch(t){const e=t&&t[n(387)]||String(t);return e[n(743)](n(996))>=0?(bt=a+9e5,vt&&vt[n(822)]?Object.assign({},vt.data,{stale:!0,error:n(707)}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"}):{configured:!0,error:e}}}function Pt(t){const e=J;if(!t||t.byteLength<1)throw new Error(e(648));const n=new DataView(t[e(645)],t.byteOffset,t.byteLength);let r=0;if(0!==n[e(554)](0))throw new Error(e(757));if(r+=17,r>=t[e(952)])throw new Error("VLESS 头部过短");const o=n[e(554)](r);if(r+=1,r+=o,r+3>t[e(952)])throw new Error(e(648));const a=n[e(554)](r);r+=1;const s=n[e(553)](r);r+=2;const i=n.getUint8(r);r+=1;const{addr:l,len:c}=function(t,e,n,r){const o=J;if(1===r)return{addr:e.getUint8(n)+"."+e[o(554)](n+1)+"."+e[o(554)](n+2)+"."+e.getUint8(n+3),len:4};if(2===r){const r=e.getUint8(n),o=t.subarray(n+1,n+1+r);return{addr:q.decode(o),len:1+r}}if(3===r)return{addr:at(t[o(355)](n,n+16)),len:16};throw new Error("无法识别的地址类型")}(t,n,r,i);return r+=c,{command:a,port:s,addr:l,headerLength:r,earlyData:t.subarray(r)}}const St=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];let Ct="",At="";function Tt(t){return t!==Ct&&(Ct=t,At=function(t){const e=J,n=z[e(180)](String(t)),r=8*n.length,o=1+(n[e(904)]+8>>6)<<6,a=new Uint8Array(o);a.set(n),a[n.length]=128;const s=new DataView(a.buffer);s.setUint32(o-8,Math[e(289)](r/4294967296),!1),s[e(434)](o-4,r>>>0,!1);let i=3238371032,l=914150663,c=812702999,p=4144912697,d=4290775857,u=1750603025,f=1694076839,h=3204075428;const m=(t,e)=>t>>>e|t<<32-e;for(let t=0;t<o;t+=64){const e=new Uint32Array(64);for(let n=0;n<16;n++)e[n]=s.getUint32(t+4*n,!1);for(let t=16;t<64;t++){const n=m(e[t-15],7)^m(e[t-15],18)^e[t-15]>>>3,r=m(e[t-2],17)^m(e[t-2],19)^e[t-2]>>>10;e[t]=e[t-16]+n+e[t-7]+r>>>0}let n=i,r=l,o=c,a=p,g=d,v=u,b=f,y=h;for(let t=0;t<64;t++){const s=y+(m(g,6)^m(g,11)^m(g,25))+(g&v^~g&b)+St[t]+e[t]>>>0,i=n&r^n&o^r&o;y=b,b=v,v=g,g=a+s>>>0,a=o,o=r,r=n,n=s+((m(n,2)^m(n,13)^m(n,22))+i>>>0)>>>0}i=i+n>>>0,l=l+r>>>0,c=c+o>>>0,p=p+a>>>0,d=d+g>>>0,u=u+v>>>0,f=f+b>>>0,h=h+y>>>0}let g="";for(const t of[i,l,c,p,d,u,f])g+=(t>>>24&255)[e(1002)](16)[e(685)](2,"0"),g+=(t>>>16&255).toString(16).padStart(2,"0"),g+=(t>>>8&255).toString(16).padStart(2,"0"),g+=(255&t).toString(16)[e(685)](2,"0");return g}(t)),At}const Et=["https://doh.pub/dns-query",t(885),"https://1.1.1.1/dns-query",t(733),"https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function Ut(t){const e=J,n=String(t)[e(192)]("::"),r=n[0]?n[0][e(192)](":")[e(943)](Boolean):[],o=n[1]?n[1].split(":")[e(943)](Boolean):[],a=[...r,...Array(Math[e(646)](0,8-r.length-o[e(904)])).fill("0"),...o],s=new Uint8Array(16);return a.forEach((t,e)=>{const n=parseInt(t,16)||0;s[2*e]=n>>8&255,s[2*e+1]=255&n}),s}async function Dt(t,n,r){const o=J,a=e({hostname:t,port:n});try{await(s=a.opened,i=r||6e3,Promise.race([s,new Promise((t,e)=>setTimeout(()=>e(new Error("连接超时（SYN 被静默丢弃）")),i||6e3))]))}catch(s){try{a[o(716)]()}catch(i){}throw s}var s,i;return a}async function Lt(t,e){return Dt(t[J(544)],t.port,e||6e3)}function Rt(t){const e=J,n=t instanceof Uint8Array?t:new Uint8Array(t),r=n[e(904)],o=8*r,a=new Uint8Array(1+(r+8>>6)<<6);a[e(390)](n),a[r]=128;const s=new DataView(a[e(645)]);s[e(434)](a[e(904)]-8,Math[e(289)](o/4294967296),!1),s.setUint32(a[e(904)]-4,o>>>0,!1);let i=1732584193,l=4023233417,c=2562383102,p=271733878,d=3285377520;const u=new Uint32Array(80);for(let t=0;t<a[e(904)];t+=64){for(let e=0;e<16;e++)u[e]=s.getUint32(t+4*e,!1);for(let t=16;t<80;t++)u[t]=K(u[t-3]^u[t-8]^u[t-14]^u[t-16],1);let e=i,n=l,r=c,o=p,a=d;for(let t=0;t<80;t++){let s,i;t<20?(s=n&r|~n&o,i=1518500249):t<40?(s=n^r^o,i=1859775393):t<60?(s=n&r|n&o|r&o,i=2400959708):(s=n^r^o,i=3395469782);const l=K(e,5)+s+a+i+u[t]>>>0;a=o,o=r,r=K(n,30),n=e,e=l}i=i+e>>>0,l=l+n>>>0,c=c+r>>>0,p=p+o>>>0,d=d+a>>>0}const f=new Uint8Array(20),h=new DataView(f.buffer);return h[e(434)](0,i,!1),h.setUint32(4,l,!1),h[e(434)](8,c,!1),h[e(434)](12,p,!1),h[e(434)](16,d,!1),f}function Nt(t,e){const n=J;let r=t;r.length>64&&(r=Rt(r));const o=new Uint8Array(64),a=new Uint8Array(64);for(let t=0;t<64;t++)o[t]=54^(t<r[n(904)]?r[t]:0),a[t]=92^(t<r[n(904)]?r[t]:0);return Rt(qt(a,Rt(qt(o,e))))}function $t(t,e,n){const r=J,o=Nt(e&&e.length?e:new Uint8Array(20),t);let a=new Uint8Array(0),s=new Uint8Array(0);for(let t=1;s.length<n;t++){const e=new Uint8Array([t]);a=Nt(o,qt(qt(a,z[r(180)]("ss-subkey")),e)),s=qt(s,a)}return s.slice(0,n)}function Mt(t,e,n){const r=J,o=new Uint32Array(16);o[0]=1634760805,o[1]=857760878,o[2]=2036477234,o[3]=1797285236;const a=new DataView(t.buffer,t[r(317)],32);for(let t=0;t<8;t++)o[4+t]=a.getUint32(4*t,!0);o[12]=e>>>0;const s=new DataView(n[r(645)],n.byteOffset,12);o[13]=s[r(714)](0,!0),o[14]=s.getUint32(4,!0),o[15]=s.getUint32(8,!0);const i=o.slice(),l=(t,e,n,r)=>{i[t]=i[t]+i[e]>>>0,i[r]=K(i[r]^i[t],16),i[n]=i[n]+i[r]>>>0,i[e]=K(i[e]^i[n],12),i[t]=i[t]+i[e]>>>0,i[r]=K(i[r]^i[t],8),i[n]=i[n]+i[r]>>>0,i[e]=K(i[e]^i[n],7)};for(let t=0;t<10;t++)l(0,4,8,12),l(1,5,9,13),l(2,6,10,14),l(3,7,11,15),l(0,5,10,15),l(1,6,11,12),l(2,7,8,13),l(3,4,9,14);const c=new Uint8Array(64),p=new DataView(c.buffer);for(let t=0;t<16;t++)i[t]=i[t]+o[t]>>>0,p.setUint32(4*t,i[t],!0);return c}function Ot(t,e,n,r){const o=J,a=r.slice(),s=Math.ceil(r[o(904)]/64);for(let r=0;r<s;r++){const s=Mt(t,n+r,e),i=64*r,l=Math[o(797)](64,a.length-i);for(let t=0;t<l;t++)a[i+t]^=s[t]}return a}function _t(t,e){const n=J;let r=0x0n,o=0x0n;for(let e=0;e<16;e++)r|=BigInt(t[e])<<BigInt(8*e),o|=BigInt(t[16+e])<<BigInt(8*e);r&=0xffffffc0ffffffc0ffffffc0fffffffn;let a=0x0n;const s=(0x1n<<0x82n)-0x5n;for(let t=0;t<e.length;t+=16){let o=0x1n;for(let r=Math[n(797)](16,e[n(904)]-t)-1;r>=0;r--)o=o<<0x8n|BigInt(e[t+r]);a=(a+o)*r%s}a=a+o&(0x1n<<0x80n)-0x1n;const i=new Uint8Array(16);for(let t=0;t<16;t++)i[t]=Number(a>>BigInt(8*t)&0xffn);return i}async function Ft(t,e){const n=J,r=new Uint8Array(12),o=()=>{const t=r[J(560)]();for(let e=11;e>=0&&(t[e]++,0===t[e]);e--);return t};if("CHACHA20-POLY1305"===t)return{seal:t=>function(t,e,n){const r=J,o=new Uint8Array(0),a=Ot(t,e,0,new Uint8Array(32)),s=Ot(t,e,1,n),i=t=>new Uint8Array((16-t%16)%16),l=t=>{const e=J,n=new Uint8Array(8),r=new DataView(n.buffer);return r[e(434)](0,t>>>0,!0),r.setUint32(4,Math.floor(t/4294967296),!0),n},c=qt(o,qt(i(o[r(904)]),qt(s,qt(i(s.length),qt(l(o[r(904)]),l(s.length))))));return qt(s,_t(a,c))}(e,o(),t),open(t){const n=J,r=function(t,e,n){const r=J;if(n[r(904)]<16)throw new Error(r(314));const o=n[r(355)](0,n[r(904)]-16),a=n[r(355)](n[r(904)]-16),s=new Uint8Array(0),i=t=>new Uint8Array((16-t%16)%16),l=t=>{const e=J,n=new Uint8Array(8),r=new DataView(n.buffer);return r[e(434)](0,t>>>0,!0),r.setUint32(4,Math[e(289)](t/4294967296),!0),n},c=_t(Ot(t,e,0,new Uint8Array(32)),qt(s,qt(i(s[r(904)]),qt(o,qt(i(o[r(904)]),qt(l(s.length),l(o.length)))))));let p=0;for(let t=0;t<16;t++)p|=c[t]^a[t];return 0!==p?null:Ot(t,e,1,o)}(e,o(),t);if(!r)throw new Error(n(618));return r}};const a=await crypto[n(927)][n(462)](n(702),e,{name:t},!1,["encrypt",n(738)]);return{seal:async e=>new Uint8Array(await crypto[n(927)][n(275)]({name:t,iv:o()},a,e)),async open(e){const n=J;try{return new Uint8Array(await crypto.subtle.decrypt({name:t,iv:o()},a,e))}catch(t){throw new Error(n(618))}}}}async function zt(t,e){const n=new Uint8Array([e.length>>8&255,255&e.length]);return qt(await t.seal(n),await t.seal(e))}function qt(t,e){const n=new Uint8Array(t[J(904)]+e.length);return n.set(t,0),n.set(e,t.length),n}function Bt(){const t=["countryLabel","geosite-disney","请先完成首次设置：设置管理密码后再访问面板","  - {name: MIXED-AL, type: mixed, port: 50007, proxy: 一键连接}","172.67.64.12#优选IP-021","all","user","stash","wss","SS 出站缺少密码","has","cert","binaryType","印度尼西亚","proxyip.nl.","172.67.64.94#优选IP-128","HND","172.65.44.103#优选IP-218","13866830qKQVNq","randomUUID","162.159.228.244#优选IP-071","🌐 谷歌服务","toUpperCase","162.159.192.111#优选IP-232","：账户当日额度已达 99%，订阅已自动停用（次日自动恢复）","EDI","xhttp 代理错误: ","https://bestcf.pages.dev/random-region/JP/100.txt","obfuscated","拉取失败: ","FRA","enableXhttp","repeat","outboundProxy","write","https://dns.alidns.com/resolve","162.159.43.85#优选IP-293","/crules/","AES-128-GCM","TTL","candidates","/sendMessage","仅支持 POST","HAM","微测网 IPv4","https://www.google.com/generate_204","presetErr","CF API HTTP ","172.65.127.225#优选IP-034","false","乌克兰","所有出站方式均失败","https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs","域名-","length","tgChatID",", tls-verification=true, tls13=true","tag",", obfs=","104.25.45.44#优选IP-038","proxyip.jp.","104.27.21.175#优选IP-298","CF_API_TOKEN","put","SLC","104.27.94.231#优选IP-129","104.17.146.117#优选IP-141","新西兰","订阅生成失败: ","trim","open","SOCKS5 连接失败 码","TROJAN","Host","panel"," = trojan, ","nontls","subtle","PROXYIP","quantumultx","104.19.247.23#优选IP-147","limit","104.19.97.238#优选IP-139","getReader","菲律宾","104.18.196.199#优选IP-069","sniff","预设源: ","empty",".top","url","ipv4_only","x-padding-placement","filter","latest","BER","104.25.123.130#优选IP-240","fallbackPool","startsWith","MUC","size","alive","byteLength","104.21.61.179#优选IP-078","json","罗马尼亚","origin","ips","optimizer","188.114.99.155#优选IP-086","SOCKS5 认证失败","cf.0sm.com","HEL","隧道前置","getWriter","密码错误","isArray","  # 家宽模式：VPN Gate 相关流量走家宽出口（OpenVPN 经 CF 隧道）\n  - DOMAIN-SUFFIX,vpngate.net,家宽出口\n","quotaAuto","every","delay","key-direction","enableTrojan","优选IP-S","Ⓜ️ 微软服务","104.19.32.220#优选IP-192","104.24.250.89#优选IP-296","104.25.193.135#优选IP-120","tls","addr","openvpn","cnamefuckxxs.yuchen.icu","710276yXZGDb","🌍 国外媒体","enableVless","🐟 漏网之鱼","text","\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, ","configured","xPaddingMethod","104.18.43.224#优选IP-022","104.16.128.11","text/plain; charset=utf-8","ovpnB64","Status","enqueue","429","geosite-netflix","list","exec","application/octet-stream","trojanPassword","toString","udp","://","xPaddingPlacement","&host=","label","https://bestcf.pages.dev/random-region/SG/100.txt","🎯 全球直连","test","162.159.2.86#优选IP-222","104.27.23.242#优选IP-150","text/plain","STL","https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs","104.17.121.245#优选IP-258","原生地址","subRandomCount","cloudflare.9jy.cc","http","188.114.97.61#优选IP-164","162.159.199.220#优选IP-263","BOS","104.17.97.72#优选IP-213","      enable: ","104.17.107.217#优选IP-133","加拿大",", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\nstatic=🌐 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\nstatic=🐟 漏网之鱼, 🚀 节点选择, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\n[filter_local]\ngeoip, cn, 🌐 全球直连\nfinal, 🐟 漏网之鱼\n"," = vless, ","%25","Accept","188.114.98.53#优选IP-080","比利时","trojan=","current","ALPN","UNICOM","resolve","encode","WAW","  - {name: ","parse","subMode","162.159.19.201#优选IP-158","http/1.1","104.16.123.96#优选IP-002","188.114.96.164#优选IP-211","https://bestcf.pages.dev/random-region/US/100.txt","ICN","1594458Shsazi","split","104.24.168.96#优选IP-130","104.18.41.168#优选IP-231","104.18.7.34","优选IP-","肯尼亚","    tls-crypt: |","hasUpdate","xhttp","update","&alpn=","    server: ","/main/","decode","fillCount","Mozilla/5.0","OFF","], url: 'https://www.google.com/generate_204', interval: 300, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n","get","104.16.108.18#优选IP-106","162.159.143.225#优选IP-157","includes","162.159.14.18#优选IP-136","104.18.255.187#优选IP-050","polling","unknown","hwcert","尼日利亚","tgnote","xPaddingKey","errors","104.17.127.106#优选IP-048","tokens","quantiles","_preamble","speed","toISOString","104.18.123.15#优选IP-169","马来西亚","some","https://stock.hostmonit.com/CloudFlareYes","YYZ","proxyip.hk.","104.19.106.1#优选IP-110","dns-direct","&type=xhttp&mode=stream-one","103.22.200.0/22","PHX","隧道前置-","arraybuffer","githubusercontent.com","162.159.42.67#优选IP-270","162.159.46.167#优选IP-067","aes-256gcm","src","vless=","reduce","geosite-","104.17.169.109#优选IP-217","104.25.24.66#优选IP-148","自定义源: ","burst","map","188.114.96.238#优选IP-269","reject","PATH","198.18.0.0/15","adminInit","string","2c0f:f248::/32","IPv4","172.67.71.106#优选IP-294","162.159.5.175#优选IP-015","172.65.118.105#优选IP-225","677932OQGMhQ","📊 ","104.25.100.203#优选IP-144","country","preferredIPs","188.114.99.114#优选IP-060","https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml","workersInvocationsAdaptive","\"; filename*=utf-8''","encrypt","singbox","以色列","NaN","tcp","; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax","application/json; charset=utf-8","%3F","proxyIP","104.17.245.237#优选IP-221","aes-256-gcm","104.18.119.34#优选IP-016","    client-fingerprint: chrome","531054sdgQOk","floor","104.25.36.200#优选IP-151","土耳其","162.159.9.18#优选IP-230","奥地利","http timeout","fragment","sec-websocket-protocol","172.64.145.202#优选IP-088","104.27.116.114#优选IP-262","https://api.cloudflare.com/client/v4/graphql","    port: ","104.17.201.77","104.18.63.107#优选IP-185","162.159.240.54#优选IP-233","domains","|raw","104.16.126.96#优选IP-005","哥伦比亚","hwrefresh","<tr","sum","timeout","未授权（需要管理密码）","    alpn: [h2]","SS AEAD 数据过短","body","error","byteOffset","flatMap","quotaDisabled","104.27.113.151#优选IP-101","爱尔兰",", tls-verification=true, tag=","162.159.6.39#优选IP-195","ipType",".conf","104.18.18.214#优选IP-172","dns-remote","cf.zerone-cdn.pp.ua","sub","188.114.97.63#优选IP-219","MIA","104.25.109.0#优选IP-275","      x-padding-method: ","斯里兰卡","method","VIE","tls-crypt","卡塔尔","geosite-github","162.159.10.243#优选IP-281","proxyip.de.","document","104.16.248.248#优选IP-008","  - {name: 故障转移, type: fallback, proxies: [","104.16.98.7","104.27.40.81#优选IP-063","vpn","TGTOKEN","&type=","vless://","addEventListener","catch","ext","188.114.97.80#优选IP-202","subarray","    proto: ","162.159.228.231#优选IP-260","function","    key-direction: ","188.114.99.52#优选IP-013","  # 自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换","104.25.86.143#优选IP-235","104.25.44.144#优选IP-066","重置失败: ","BESTIP_AUTO","SEL","http://www.vpngate.net/api/iphone/","\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n","x-padding-key","null","172.67.165.245#优选IP-216","query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }","HostMonit 优选","native","104.19.169.53#优选IP-061",".srs","nodes","    ca: *","v2ray","CHACHA20-POLY1305","Answer","」=自动优选该地区最快节点，也可手动指定单个节点","today","join","    udp: ","ipv6Mode","message","text/html","cloudflare-ip.mofashi.ltd","set","103.31.4.0/22","104.25.161.217#优选IP-140","哈萨克斯坦","SS 分片长度非法 ","104.27.195.79#优选IP-178","104.17.118.180#优选IP-090","    type: ","now","race","104.25.129.238#优选IP-180","caAnchor","server","true","cidr","# ==================== 代理策略组 ====================\nproxy-groups:\n  - {name: 一键连接, type: select, proxies: [直接连接]}\n  - {name: 直接连接, type: select, proxies: [DIRECT]}\n","endsWith",".xyz","172.65.167.52#优选IP-241","104.25.33.126#优选IP-238","https://rule.kelee.one/Clash/GitHub.yaml","Sec-Fetch-Dest","\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>初始化</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare 节点控制台</span></div>\n  </div>\n  <h1>设置管理密码</h1>\n  <p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\n  <div class=\"msg\" id=\"msg\">设置失败，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"设置管理密码（至少 4 位）\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"确认管理密码\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">设置并进入面板</button>\n  </form>\n  <div class=\"foot\">密码保存在 Cloudflare KV 中，之后可在「面板设置」中修改</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || '/';\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '密码至少 4 位'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '两次输入的密码不一致'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '设置失败，请重试'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n","autobestAt","104.24.244.237#优选IP-075","https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs","    key: *","超时/网络错误","cfip.1323123.xyz","proxyip.gb.","POST","pass","vless","source","104.24.12.10","VPN Gate 节点源没有返回内容","host","utf-8","https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs","quantumult","hijack-dns","172.65.145.187#优选IP-081","104.18.40.93#优选IP-023","refillMs","setUint32","188.114.98.19#优选IP-154","text/yaml; charset=utf-8","key","KIX","&fp=chrome","104.25.169.144#优选IP-291","162.159.6.246#优选IP-199","YXURL","shift","CFNext 明文版.js","CTS","region","微测网 优选域名","162.159.135.234#优选IP-249","https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs","    udp: true","code","xhttp-opts",", obfs=wss, obfs-host=","customPref","getRandomValues","科威特","\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>登录</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare 节点控制台</span></div>\n  </div>\n  <h1>登录</h1>\n  <p>请输入管理密码以继续</p>\n  <div class=\"msg\" id=\"msg\">密码错误，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"管理密码\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">登录</button>\n  </form>\n  <div class=\"foot\">配置保存在 Cloudflare KV 中，密码错误 24 小时后自动失效</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || '/';\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n","      path: ","未绑定 KV 命名空间，无法保存管理密码","https://cloudflare-dns.com/dns-query","104.19.191.31","importKey",", type: url-test, proxies: [","104.26.1.1","104.24.155.234#优选IP-070","    ech-opts:",", ws=true, ws-path=","104.17.44.9","葡萄牙","tun0","域名直连·对照","findIndex","mixed-in","text/html; charset=utf-8","sourceURL","headerLength","SHA-256","protocol","104.16.66.7","20HozqOB","2400:cb00::/32","    key: &","#原生地址","cpuTimeP50","isp","104.17.24.252#优选IP-012","binary","162.159.94.229#优选IP-014","cf.090227.xyz","104.19.78.30#优选IP-089","?name=","abort","shadowrocket","162.159.237.243#优选IP-119","172.67.174.143#优选IP-176","threads","新加坡"," 订阅 v","CFNext 混淆版.js","sing-box","mix","match","SOCKS5 握手失败","OSA","push","cfApiToken","keyRef","fill","_quotaCap","HTTP ","104.19.246.234#优选IP-280","relay","replace","latency","104.19.78.144#优选IP-184","SOCKS5 服务器要求认证但未提供凭据","gbk","104.17.151.244#优选IP-257","104.17.87.46#优选IP-201","cfAccountId","TGCHAT","proxyip.oracle.","no-store","percent","geosite-cn","104.21.215.255#优选IP-247","homeWan","f3058171cad.002404.xyz","  # Shadowsocks监听器 - 远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）","cloudflare-ech.com","_auth","104.18.211.8#优选IP-193","proxyip.kr.","    password: ","encryption=none","https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs","104.25.238.28#优选IP-277","188.114.97.91#优选IP-134","certRef","104.16.249.249#优选IP-009","security=none","toLowerCase","https://raw.githubusercontent.com/","hostname","162.159.0.1#优选IP-010","104.27.207.36#优选IP-098","俄罗斯","172.67.82.86#优选IP-162","subIncludeDefault","  # 家宽模式：VPN Gate OpenVPN 出口（多台家宽节点自动测活，经 dialer-proxy 隧道拨号）\n  - {name: 家宽出口, type: select, proxies: [家宽自动, ","    xhttp-opts:","type=xhttp","getUint16","getUint8","cipher","_ctx","澳大利亚","&ech=","    cert: &","slice","then","url:","HOST","OUTBOUND","type","proto","issued","172.67.163.14#优选IP-108","password","read",", obfs-host=","readable","round","network","  # ","auth","setUint16","数据中心","listeners:","SHA1","requests","ws-opts","# ==================== 规则路由 ====================","stringify","意大利","IAH","preferredDomains","不支持的 SS 加密方式: ","writable","cdn.tzpro.xyz"," / ","  - MATCH,一键连接","ech-opts","https://www.wetest.vip/page/cloudflare/address_v6.html","MAN","concat","172.67.64.211#优选IP-020",".yaml","initPool","&type=ws","api","x-padding-obfs-mode","104.24.58.243#优选IP-097","    tls-auth: |","customErr","speed.marisalnc.com","https://www.wetest.vip/page/cloudflare/address_v4.html","PHL","lastIndexOf","172.67.173.89#优选IP-132","tlsCrypt","random",", password=","stats","104.20.15.15","tgBotToken","104.16.234.241#优选IP-288","SS AEAD 解密失败（密码/加密方式与服务器不匹配）","104.25.62.39#优选IP-265","chrome","direct","value","172.67.229.44#优选IP-137","172.65.45.102#优选IP-250","https://223.5.5.5/dns-query","outboundMode","remote","github.com","162.159.44.214#优选IP-032","141.101.64.0/18","162.159.241.11#优选IP-204","admin","🤖 OpenAI","104.25.124.155#优选IP-170","104.18.178.193#优选IP-183","104.24.41.240#优选IP-212","loon","create","err",", username=","handshakeTimeout","number","ORD","104.24.230.213#优选IP-109","buffer","max","CF_ACCOUNT_ID","VLESS 头部过短","echDns","162.159.136.73#优选IP-040","proxy timeout","hwkey"," = "," · 机房 ","https://bestcf.pages.dev/random-region/HK/100.txt\nhttps://bestcf.pages.dev/random-region/TW/100.txt\nhttps://bestcf.pages.dev/random-region/JP/100.txt\nhttps://bestcf.pages.dev/random-region/SG/100.txt\nhttps://bestcf.pages.dev/random-region/US/100.txt\nhttps://bestcf.pages.dev/random-region/KR/100.txt","count","tlsAuth",'\n# 监听器与策略组由订阅生成时按实际节点动态输出（见 generateClash / buildClashGroups）：\n# 有节点的地区才生成对应分组与监听器，无节点不占位（地区归桶由节点名识别 + 机房落点标注）\n\n# ==================== 核心配置 ====================\nmode: rule\nport: 7890\nsocks-port: 7891\nredir-port: 7892\nmixed-port: 7893\ntproxy-port: 7895\nipv6: true\nallow-lan: true\nunified-delay: true\ntcp-concurrent: true\nlog-level: warning\nbind-address: \'*\'\nfind-process-mode: \'always\'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# 认证配置（默认凭据请务必修改！）\nauthentication:\n  - mihomo:yyds666\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# 实验性功能\nexperimental:\n  quic-go-disable-gso: true\n\n# 管理面板配置\nexternal-ui-url: https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\nexternal-ui-name: zashboard\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: yyds666    # 请修改为自定义密钥\n# 允许网页面板跨域访问\nexternal-controller-cors:\n  allow-origins:\n    - "*"\n  allow-private-network: true\n\n# 配置存储\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# geosite / geoip 数据源（GEOSITE 规则依赖；MetaCubeX 官方规则库，GitHub release 官方源）\ngeox-url:\n  geoip: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.dat"\n  geosite: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat"\n  mmdb: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country.mmdb"\n\n# 流量嗅探\nsniffer:\n  enable: true\n  force-dns-mapping: true   # 强制 DNS 映射，提高分流准确度\n  parse-pure-ip: true       # 解析纯 IP 连接\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    TLS:\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - "+.push.apple.com"\n\n# TUN模式配置\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  dns-hijack:\n    - "any:53"\n    - "tcp://any:53"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # 提示：系统级防泄露的最强手段是开启 TUN（自动劫持全部 DNS 流量）；\n  # 不开 TUN 时，请把系统 / LAN 设备的 DNS 指向 127.0.0.1:53（本机）或本机局域网 IP:53。\n\nhosts:\n  miwifi.com: 192.168.31.2\n  "epdg.epc.mnc010.mcc234.pub.3gppnetwork.org": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS 配置 ====================\n# 防泄露要点：\n#   1) respect-rules: true：DNS 服务器连接遵循路由规则（国外 DoH 走代理隧道、国内 DoH 直连），\n#      解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\n#   2) 默认 nameserver 用国内 DoH；只有“将走代理”的规则集才用国外 DoH，\n#      且其域名在 rules 中显式固定走代理。\n#   3) fake-ip-filter 补齐系统连通性检测 / 时间同步 / 运营商登录等域名，防止系统误判断网而回退运营商 DNS。\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # 本机 / LAN 设备可把 DNS 指向此地址，避免走运营商 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules 下官方不推荐 DoH3；且 QUIC 已被规则拦截\n  cache-algorithm: arc      # 性能更优的 ARC 缓存算法\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "+.lan"\n    - "+.local"\n    - "+.localhost"\n    - "+.home.arpa"\n    - "+.internal"\n    # 系统连通性检测（防止 fake-ip 导致“无网络”判断，回退 ISP DNS 造成泄露）\n    - "+.msftconnecttest.com"\n    - "+.msftncsi.com"          # 通配已覆盖 dns.msftncsi.com\n    - "captive.apple.com"\n    - "connectivitycheck.gstatic.com"\n    - "detectportal.firefox.com"\n    # 时间同步\n    - "time.nist.gov"\n    - "+.pool.ntp.org"\n    - "time.*.com"              # 通配已覆盖 time.windows.com\n    - "ntp.*.com"               # 通配已覆盖 ntp.ubuntu.com\n    # 运营商 Wi-Fi 登录页\n    - "+.cmpassport.com"\n    - "id6.me"\n    - "open.e.189.cn"\n    - "mdn.open.wo.cn"\n    - "opencloud.wostore.cn"\n    - "auth.wosms.cn"\n    - "+.10099.com.cn"\n    # 原配置保留项\n    - "+.market.xiaomi.com"\n    - "+.pub.3gppnetwork.org"\n    - "+.push.apple.com"\n    - "+.bing.com"\n    - "+.miwifi.com"\n    - "+.docker.io"\n    # 国内应用登录（+.qq.com 已覆盖 localhost.ptlogin2.qq.com）\n    - "+.qq.com"\n    # 直连 / 国内类规则集：返回真实 IP\n    - rule-set:Direct\n    - rule-set:Private\n    - rule-set:China\n    - geosite:cn                # 国内域名返回真实 IP（geosite 库兜底，防 fake-ip 干扰国内应用）\n  use-hosts: true\n  respect-rules: true\n  # 引导用 DNS（解析 DoH/DoT 服务器自身的域名），必须是 IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # 默认解析：未命中 nameserver-policy 的域名（国内 DoH，直连）\n  nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # 直连出口的解析\n  direct-nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # 解析代理节点域名（防套娃 / 防循环，用国内直连可达的 DoH）\n  proxy-server-nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  nameserver-policy:\n    # 广告域名直接返回空应答\n    "rule-set:Advertising,AWAvenueAds": rcode://success\n    # 直连类：国内 DoH（微软已并入直连，微软域名走国内解析后直连）\n    "rule-set:Direct,Private,China,Microsoft":\n      - "https://dns.alidns.com/dns-query"\n      - "https://doh.pub/dns-query"\n    # 走代理类：国外 DoH（连接本身经代理隧道，不直连暴露查询）\n    "rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy":\n      - "https://dns.google/dns-query"\n      - "https://cloudflare-dns.com/dns-query"\n\n__CLASH_GROUPS__\n\n# ==================== 规则路由 ====================\nrules:\n  # 广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\n  - RULE-SET,Tracking,REJECT\n  - RULE-SET,AWAvenueAds,REJECT\n  - RULE-SET,Advertising,REJECT\n  - GEOSITE,category-ads-all,REJECT        # geosite 广告分类兜底（v2ray 标准库，覆盖面广）\n\n  # DNS 服务器域名：解析通道固定，避免 DNS 流量走错路径（防泄露关键）\n  - DOMAIN-SUFFIX,alidns.com,直接连接\n  - DOMAIN-SUFFIX,doh.pub,直接连接\n  - DOMAIN,dns.google,一键连接\n  - DOMAIN,cloudflare-dns.com,一键连接\n\n  # 大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\n  - RULE-SET,Private,直接连接\n  - RULE-SET,Direct,直接连接\n  - RULE-SET,Download,直接连接\n  - RULE-SET,AppleCN,直接连接\n  - RULE-SET,Microsoft,直接连接        # 微软全家桶直连（Office / OneDrive / Windows 更新 / Teams / Xbox 等）\n  - RULE-SET,China,直接连接             # 国内域名直连\n  - GEOSITE,CN,直接连接                  # geosite 国内域名兜底（覆盖规则集未收录的国内域名，先于 GEOIP 命中）\n  # 阻止走代理的 QUIC（强制回退 TCP，避免 QUIC 绕过代理 / 被干扰）。\n  # 放在直连规则之后：直连 QUIC（大陆 / 微软 / 苹果）不受影响。如需 Telegram 语音等 UDP，可删除此行。\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # 常用国外服务（统一走一键连接）\n  - RULE-SET,AI,一键连接\n  - RULE-SET,Telegram,一键连接\n  - RULE-SET,Twitter,一键连接\n  - RULE-SET,SocialMedia,一键连接\n  - RULE-SET,Netflix,一键连接\n  - RULE-SET,YouTube,一键连接\n  - RULE-SET,Spotify,一键连接\n  - RULE-SET,TikTok,一键连接\n  - RULE-SET,disney,一键连接\n  - RULE-SET,Google,一键连接\n  - RULE-SET,github,一键连接\n  - RULE-SET,Proxy,一键连接\n\n  # IP规则\n  - RULE-SET,PrivateIP,直接连接,no-resolve\n  - RULE-SET,TelegramIP,一键连接,no-resolve\n  - RULE-SET,ProxyIP,一键连接,no-resolve\n  - RULE-SET,ChinaIP,直接连接,no-resolve\n\n  # 大陆 IP 兜底直连：覆盖规则集未收录的域名 / 纯 IP 连接的大陆应用（GEOIP 库覆盖面更全）\n  - GEOIP,CN,直接连接,no-resolve\n\n  # 兜底规则：其余（国外）走一键连接\n  - MATCH,一键连接\n\n# ==================== 规则集 ====================\n# 规则集行为模板\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # 经典规则集（blackmatrix7 等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\n\n# 规则提供者（仅保留常用）\n# ★ 同域代下：url 指向 __CRULES__（生成时替换为 https://<当前订阅域名>/crules）——\n#   客户端导入/更新零外部直连（不开梯子也能完成导入）；上游仓库资源由 Worker 服务端拉取，\n#   KV 缓存 + 进程内缓存，客户端不再每次直连外站下载（见 serveCrule / RULE_SOURCES）\nrule-providers:\n  # 广告\n  Tracking:       {<<: *BehaviorDN, url: __CRULES__/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: __CRULES__/Advertising.mrs}\n  AWAvenueAds:    {<<: *BehaviorDY, url: __CRULES__/AWAvenueAds.yaml}\n  # 直连 / 国内\n  Direct:         {<<: *BehaviorDN, url: __CRULES__/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: __CRULES__/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: __CRULES__/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: __CRULES__/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: __CRULES__/China.yaml}   # 大陆直连全量：ChinaMaxNoIP（11万+ 域名，含大陆可达国际服务），每日更新\n  # 常用国外服务\n  AI:             {<<: *BehaviorDN, url: __CRULES__/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: __CRULES__/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: __CRULES__/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: __CRULES__/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: __CRULES__/Netflix.mrs}\n  YouTube:        {<<: *BehaviorDN, url: __CRULES__/YouTube.mrs}\n  Google:         {<<: *BehaviorDN, url: __CRULES__/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: __CRULES__/Microsoft.yaml}   # 微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure 等）\n  Proxy:          {<<: *BehaviorDN, url: __CRULES__/Proxy.mrs}\n  # 媒体（DustinWin）\n  Spotify:        {<<: *BehaviorDN, url: __CRULES__/Spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: __CRULES__/TikTok.mrs}\n  disney:         {<<: *BehaviorDN, url: __CRULES__/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: __CRULES__/github.yaml}\n  # IP规则\n  PrivateIP:      {<<: *BehaviorIP, url: __CRULES__/PrivateIP.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: __CRULES__/TelegramIP.mrs}\n  ProxyIP:        {<<: *BehaviorIP, url: __CRULES__/ProxyIP.mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: __CRULES__/ChinaIP.mrs}\n\n# ==================== EOF ====================\n\n',"104.24.178.200#优选IP-210","port","application/json","CHINATELECOM","forEach","encryption=none&","tls-auth","usageColo","AMS","🚀 节点选择","https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs","chacha20-ietf-poly1305","searchParams","黎巴嫩","104.17.195.133#优选IP-152","homeWanNodes","故障转移","104.25.246.123#优选IP-043","fn.130519.xyz","FCO","104.17.99.0#优选IP-143","bestcf.030101.xyz","tcp timeout","  - name: ","arrayBuffer","节点}","padStart","162.159.44.215#优选IP-031","没有可测的 IP","assign","ussss","104.16.0.0/13","YUL","104.17.234.5#优选IP-018","墨西哥","wetest_cname",", 直接连接], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/VPN.png}\n","104.19.69.150#优选IP-186","14lKJcvd","status","172.64.81.44#优选IP-058","MCO","104.16.127.96#优选IP-006","raw","ech","104.18.28.48#优选IP-156","CBR","echHost","CF API 限流(429)，显示缓存数据（可能滞后）","tail","HOME_WAN","public-vpn","plain","geoip-cn","&security=none","getUint32","text/yaml","close","security=none&host=","  - {name: 直接连接, type: select, proxies: [DIRECT]}","proxyip.fi.","servername","chacha20-poly1305","IPv6","command","hwrefreshAt","104.25.173.14#优选IP-273","dialerProxy","    cipher: ","108.162.192.0/18","104.25.223.90#优选IP-239","172.65.78.200#优选IP-283","PROBE_ALIVE","path","https://8.8.8.8/dns-query","subUrl","104.21.2.1","西班牙","colo","decrypt","4112541rolSGZ",", type: mixed, port: ","hwlist","boolean","indexOf","PUS","nodeLimit","      host: ","MB/s","104.25.141.168#优选IP-042","      x-padding-key: ","未找到账户数据（检查账户 ID 与令牌权限）","BEGIN","2.6.0","172.67.103.87#优选IP-118","162.159.90.82#优选IP-253","security","&security=tls&sni=","不支持的 VLESS 版本","selector","tun","PER","TROJAN_PASSWORD","from","104.18.133.24#优选IP-085","    skip-cert-verify: true","  - {name: 一键连接, type: select, proxies: [","104.18.84.180#优选IP-068",", ws-headers=Host:","\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n","block","sort","digest","waitUntil","delete","（未指定）","surfboard","config","090227","viewer","?ed=2048","188.114.97.21#优选IP-229","uuid","day","name","speed.cloudflare.com",", over-tls=true, tls-host=","https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs","__GRACE__","|rf","surge","104.24.0.0/14"," → ","未在仓库中找到版本信息","proxyip.sg.","GET / HTTP/1.1\r\nHost: ","Mozilla/5.0 (CFNext)","190.93.240.0/20","min","redirect","quota","charCodeAt","ADMIN","OpenVPN","NGO","srccache:","104.24.230.144#优选IP-102","CFN","EWR","微测网 IPv6","104.21.7.133#优选IP-226","charAt","混淆版","custom","alpn","&fp=chrome&host=","wetest_v4","headers","ARN","upstream empty body","188.114.96.116#优选IP-054","dns-fakeip"," HTTP/1.1\r\nHost: ","data","probeAlive","8sJdVAe","trojan://","104.24.18.62#优选IP-289","188.114.96.64#优选IP-171","      headers:","拉取失败 HTTP ","1294062xwkLZV","104.17.46.187#优选IP-173","security=tls&sni=","104.16.223.195#优选IP-056","add","&type=ws&path=","application/dns-json","188.114.99.14#优选IP-206","[general]\nnetwork_check_url=http://www.gstatic.com/generate_204\nserver_check_url=http://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n","      mode: ","X-Real-IP","自动选择","www.cloudflare.com","104.16.245.187#优选IP-019","2606:4700::/32","LGW","queryInHeader","quanx","\n\n[Proxy Group]\n🚀 节点选择 = select, ","104.25.166.112#优选IP-159"];return(Bt=function(){return t})()}function Gt(t,e){const n=J;t:for(let r=0;r<=t.length-e[n(904)];r++){for(let n=0;n<e.length;n++)if(t[r+n]!==e[n])continue t;return r}return-1}const Kt="cmli"+t(689)+".net",Ht={HK:t(234)+Kt,US:"proxyip.us."+Kt,SG:t(793)+Kt,JP:t(910)+Kt,KR:t(533)+Kt,DE:t(341)+Kt,SE:"proxyip.se."+Kt,NL:t(864)+Kt,FI:t(719)+Kt,GB:t(419)+Kt,Oracle:t(522)+Kt,DigitalOcean:"proxyip.digitalocean."+Kt,Vultr:"proxyip.vultr."+Kt,Multacom:"proxyip.multacom."+Kt},jt=(()=>{const t=J,e=Object[t(638)](null),n=(t,n)=>{const r=J;for(const o of[][r(596)](n))e[o]=t};return n("HK","HKG"),n("AU",["SYD","MEL","BNE",t(760),"ADL",t(705)]),n("SG","SIN"),n("JP",["NRT",t(866),t(438),"TYO",t(504),t(803),t(445),"FUK","OKA"]),n("KR",[t(190),t(366),t(744)]),n("DE",[t(880),t(949),"DUS",t(945),t(893),"STR",t(336),"ZRH","CDG","MAD","MXP",t(678),"PRG",t(181)]),n("SE",t(817)),n("NL",t(667)),n("FI",t(962)),n("GB",["LHR",t(845),t(595),t(875)]),n("US",["LAX","SJC","SFO","SEA","PDX","SAN","LAS",t(239),t(914),"DEN","DFW",t(586),"AUS",t(643),"MSP","DTW",t(155),"MCI","ATL",t(331),t(700),"BNA","CLT","IAD",t(164),t(807),"JFK",t(608),t(233),"YVR",t(691),"MEX","GRU"]),e})(),Wt=new Map;async function Vt(t,e){const n=J;if(e=e||443,ot(t))return[{hostname:t,port:e}];const r=t+":"+e,o=Date[n(398)](),a=Wt[n(210)](r);if(a&&o-a.t<3e5)return a[n(957)];const s=[n(460),n(885),"https://doh.pub/dns-query"],i=async(e,n)=>{const r=J;for(const o of s)try{const a=await fe(o+r(491)+encodeURIComponent(t)+"&type="+e,{headers:{accept:r(836)}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n)[r(254)](t=>t[r(822)])}catch(t){}return[]},l=await i("TXT",16);let c=[];for(const t of l){const r=String(t).replace(/^"|"$/g,"").replace(/\\010/g,",")[n(513)](/\n/g,",")[n(919)]();if(!r)continue;if("@edtunnel"===r)break;const o=r[n(192)](/[,;\s]+/)[n(254)](t=>t[n(919)]())[n(943)](Boolean),a=[];for(const t of o){const{host:n,port:r}=j(t,e);ot(n)&&a.push({hostname:n,port:r})}if(a.length){c=a;break}}c[n(904)]||(c=(await i("A",1))[n(943)](t=>/^\d+\.\d+\.\d+\.\d+$/[n(151)](t))[n(254)](t=>({hostname:t,port:e}))),c[n(904)]||(c=(await i("AAAA",28)).filter(t=>ot(t)).map(t=>({hostname:t,port:e})));const p=new Set,d=c[n(943)](t=>{const e=J,n=t.hostname+":"+t[e(660)];return!p[e(860)](n)&&(p.add(n),!0)});return d.length&&Wt[n(390)](r,{t:o,ips:d}),d}async function Jt(t){if(!t||!t.length)return null;let e=!1;return await new Promise(n=>{const r=J;let o=t[r(904)];const a=t=>{const r=J;if(o--,t)if(e)try{t[r(716)]()}catch(t){}else e=!0,n(t);else o<=0&&!e&&n(null)};for(const e of t)Promise.resolve()[r(561)](e).then(t=>a(t&&t[r(572)]?t:null),()=>a(null))})}async function Xt(t,e,n){const r=J;let o=null;const a=t=>{const e=J;if(t&&t!==o)try{t[e(716)]()}catch(t){}},s=t?Promise[r(179)]()[r(561)](t)[r(561)](t=>t&&t.readable?t:null,()=>null):Promise.resolve(null),i=e&&e[r(904)]?Jt(e).then(t=>t&&t.readable?t:null,()=>null):Promise[r(179)](null);let l=null;const c=await Promise.race([s,new Promise(t=>{l=setTimeout(()=>t("__GRACE__"),n)})]);if(l&&(clearTimeout(l),l=null),c&&r(787)!==c)return o=c,i.then(a),o;const p=await i;if(p)return o=p,s[r(561)](a),o;const d=await s;return d?(o=d,o):null}function Qt(t){const e=J;return!t||t.byteLength<3?e(217):22===t[0]&&3===t[1]?e(978):e(926)}async function Yt(t,e,n,r,o){const a=J,s=function(t){const e=J;if(!t)return null;let n="socks5",r=String(t)[e(919)]();const o=r[e(502)](/^(socks5|http|https|ss):\/\/(.+)$/i);if(o&&(n=o[1].toLowerCase(),r=o[2]),"ss"===n)return function(t){const e=J;let n=t,r="";const o=t.indexOf("#");o>=0&&(n=t[e(560)](0,o));const a=n[e(609)]("@");if(a>=0)r=n[e(560)](0,a),n=n.slice(a+1);else{const t=ft(n);if(t&&t[e(213)]("@")){const o=t[e(609)]("@");r=t[e(560)](0,o),n=t.slice(o+1)}}let s="",i="";if(r){let t=ft(r)||r;try{t=decodeURIComponent(t)}catch(t){}const n=t.indexOf(":");n>0?(s=t[e(560)](0,n),i=t.slice(n+1)):s=t}const{host:l,port:c}=j(n,8388);return{type:"ss",host:l,port:c,method:s,password:i}}(r);let a="",s="";if(r[e(213)]("@")){const[t,n]=r.split("@"),o=t=>{try{return decodeURIComponent(t)}catch(e){return t}},i=t.indexOf(":");i>=0?(a=o(t[e(560)](0,i)),s=o(t[e(560)](i+1))):a=o(t),r=n}const i=e(161)===n?80:"https"===n?443:1080,{host:l,port:c}=j(r,i);return{type:n,host:l,port:c,user:a,pass:s}}(e.outboundProxy),i=e[a(626)]||"",l=a(926)!==o,c=s?a(161)===s.type||"https"===s.type?t=>async function(t,e){const n=J,r=await Dt(t[n(426)],t.port,6e3),o=r.writable.getWriter(),a=r.readable.getReader();let s="";t[n(856)]&&(s="Proxy-Authorization: Basic "+function(t){let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}(z[n(180)](t.user+":"+t[n(421)]))+"\r\n");const i="CONNECT "+e[n(544)]+":"+e[n(660)]+n(821)+e.hostname+":"+e[n(660)]+"\r\n"+s+"\r\n";await o[n(884)](z.encode(i));const{head:l,leftover:c}=await async function(t){const e=J;let n=new Uint8Array(0);for(;n[e(904)]<65536;){const{done:r,value:o}=await t[e(570)]();if(r)break;n=qt(n,o);const a=Gt(n,[13,10,13,10]);if(a>=0)return{head:q[e(205)](n[e(355)](0,a)),leftover:n.subarray(a+4)}}return{head:q.decode(n),leftover:new Uint8Array(0)}}(a);if(!/^HTTP\/\d\.\d\s+2\d\d/i[n(151)](l))throw new Error("HTTP 代理 CONNECT 失败: "+l[n(192)]("\r\n")[0]);return c&&c.byteLength>0&&(r[n(226)]=c),o.releaseLock(),a.releaseLock(),r}(s,t):"ss"===s[a(565)]?t=>async function(t){const e=J,n=function(t){const e=J,n=String(t||"").toLowerCase().replace(/_/g,"-");return"aes-128-gcm"===n||"aes-128gcm"===n?{name:"AES-GCM",keyLen:16}:e(285)===n||e(245)===n?{name:"AES-GCM",keyLen:32}:e(670)===n||e(721)===n||"chacha20poly1305"===n?{name:e(380),keyLen:32}:null}(t.method);if(!n)throw new Error(e(588)+(t[e(335)]||e(774)));if(!t.password)throw new Error(e(859));const r=await Dt(t[e(426)],t.port,6e3),o=r[e(589)].getWriter(),a=r[e(572)][e(933)]();let s=new Uint8Array(0);const i=async t=>{const e=J;for(;s[e(904)]<t;){const{done:t,value:n}=await a[e(570)]();if(t)throw new Error("SS 连接被关闭");s=qt(s,n)}const n=s.slice(0,t);return s=s.subarray(t),n},l=new Uint8Array(await crypto.subtle[e(771)](e(477),z.encode(t.password))),c=crypto.getRandomValues(new Uint8Array(16)),p=await Ft(n.name,await $t(l,c,n.keyLen));return await o[e(884)](c),await o.write(await zt(p,new Uint8Array(0))),{readable:new ReadableStream({async start(t){const e=J;try{const r=await i(16),o=await Ft(n.name,await $t(l,r,n.keyLen));for(;;){const n=await o[e(920)](await i(18)),r=n[0]<<8|n[1];if(r>16384)throw new Error(e(394)+r);const a=await o.open(await i(r+16));r>0&&t[e(995)](a)}}catch(n){try{t[e(316)](n)}catch(t){}}}}),writable:new WritableStream({async write(t){const e=J,n=t instanceof Uint8Array?t:new Uint8Array(t);for(let t=0;t<n[e(904)];t+=16384)await o.write(await zt(p,n.subarray(t,Math[e(797)](n.length,t+16384))))},close(){const t=J;try{o[t(716)]()}catch(t){}},abort(){const t=J;try{o[t(492)]()}catch(t){}}}),close(){const t=J;try{r[t(716)]()}catch(t){}}}}(s):t=>async function(t,e){const n=J,r=await Dt(t.host,t[n(660)],6e3),o=r.writable.getWriter(),a=r[n(572)].getReader();let s=new Uint8Array(0);const i=async t=>{for(;s.length<t;){const{done:t,value:e}=await a.read();if(t)throw new Error("连接被关闭");s=qt(s,e)}const e=s.slice(0,t);return s=s.subarray(t),e},l=t[n(856)]?[5,2,0,2]:[5,1,0];await o[n(884)](new Uint8Array(l));const c=await i(2);if(5!==c[0]||255===c[1])throw new Error(n(503));if(2===c[1]){if(!t[n(856)])throw new Error(n(516));const e=z[n(180)](t.user),r=z[n(180)](t[n(421)]),a=new Uint8Array([1,e.length,...e,r[n(904)],...r]);if(await o.write(a),0!==(await i(2))[1])throw new Error(n(960))}else if(0!==c[1])throw new Error("SOCKS5 不支持的认证方法 "+c[1]);const p=z[n(180)](e.hostname);let d;d=/^\d+\.\d+\.\d+\.\d+$/[n(151)](e.hostname)?new Uint8Array([5,1,0,1,...e[n(544)].split(".")[n(254)](Number),e[n(660)]>>8&255,255&e.port]):new Uint8Array([5,1,0,3,p[n(904)],...p,e.port>>8&255,255&e[n(660)]]),await o.write(d);const u=await i(4);if(0!==u[1])throw new Error(n(921)+u[1]);if(1===u[3])await i(6);else if(3===u[3]){const t=(await i(1))[0];await i(t+2)}else 4===u[3]&&await i(18);return s[n(952)]>0&&(r._preamble=s),o.releaseLock(),a.releaseLock(),r}(s,t):null;let p;const d=async t=>{try{const e=await t();if(e)return e}catch(t){p=t}return null},u=()=>{throw p||new Error(J(901))},f=e.proxyIP?j(e.proxyIP,443):null;if(f&&f.host&&l){let t=await Vt(f[a(426)],f.port);t.length||(t=[{hostname:f.host,port:f.port}]);const e=await Jt(t[a(560)](0,4).map(t=>()=>d(()=>Lt(t,4e3))));if(e)return e}const h={hostname:t[a(979)],port:t[a(660)]},m=()=>{if(!l)return[];const t=function(t){const e=String(t||"").toUpperCase();return e?jt[e]?jt[e]:{HK:"HK",SG:"SG",JP:"JP",KR:"KR",DE:"DE",SE:"SE",NL:"NL",FI:"FI",GB:"GB",US:"US",AU:"AU"}[e]?e:"US":"US"}(n);return[t,...Object.keys(Ht).filter(e=>e!==t)].slice(0,2).map((t,e)=>async()=>{const n=J,r=Ht[t];if(!r)return null;let o=[];try{o=await Vt(r,443)}catch(t){return null}if(!o[n(904)])return null;const a=o[n(560)](0,0===e?2:1);return await Jt(a[n(254)](t=>()=>d(()=>Lt(t,4e3))))})},g=()=>d(()=>Lt(h,4e3)),v=c?()=>d(()=>c(h)):null,b=P(t[a(979)])?0:300,y=()=>Xt(g,m()[a(560)](0,3),b);if("only"===i&&v)return await v()||await Xt(null,m().slice(0,4),0)||u();if(""===i&&v)return await v()||await y()||u();const x=await y();if(x)return x;if(v){const t=await v();if(t)return t}return u()}function Zt(t){const e=J,n=t instanceof Uint8Array?t:new Uint8Array(t);try{return new TextDecoder("utf-8",{fatal:!0})[e(205)](n)}catch(t){}try{return new TextDecoder(e(517)).decode(n)}catch(t){}return(new TextDecoder)[e(205)](n)}function te(t){const e=J,n=new Set,r=[],o=(t,e,o)=>{const a=J;ot(t)&&(n[a(860)](t)||(n[a(834)](t),r.push({ip:t,port:e||443,name:o||""})))};ut(t)[e(663)](t=>o(t.ip,t[e(660)],t.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let s;for(;s=a.exec(t);){const{host:t,port:e}=j(s[0],443);t&&o(t,e,"")}const i=/[0-9a-fA-F:]+/g;for(;s=i[e(999)](t);){const t=s[0];t[e(213)](":")&&t.split(":")[e(904)]>=3&&ot(t)&&o(t,443,"")}return r}const ee={t:0,ips:null};async function ne(t){const e=J;if(t=Math[e(646)](1,parseInt(t)||150),Date.now()-ee.t<6e5)return ee.ips;const n=await fe(e(232),{headers:{"User-Agent":e(207)}},6e3);if(n&&n.ok){const r=te(await n[e(986)]()).filter(t=>t.ip&&P(t.ip)),o=new Set,a=[];for(const n of r)if(!o.has(n.ip)&&(o[e(834)](n.ip),a.push(n),a.length>=t))break;return ee.t=Date.now(),ee.ips=a,a}return null}async function re(t){const e=J,n=[],r={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},o="custom"===(t=t||{}).source||!!t[e(475)],a=e=>{const r=J;e&&e.ip&&(o||P(e.ip))&&n.push({ip:e.ip,port:e[r(660)]||t.port||443,name:e.name||""})};if(t[e(423)]&&F[t.source]){const n=await fe(F[t.source].url,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(n&&n.ok){const t=te(await n[e(986)]());t[e(663)](a),r.preset=t[e(904)]}else r[e(896)]=n?"HTTP "+n[e(698)]:e(417)}if(t.sourceURL){const n=he(t.sourceURL)[e(943)](t=>/^https?:\/\//i.test(t))[e(560)](0,50);if(n.length){const t=await Promise[e(855)](n[e(254)](async t=>{const e=J;try{const n=await fe(t,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);return n&&n.ok?{url:t,arr:te(await n[e(986)]()),err:""}:{url:t,arr:[],err:n?e(510)+n.status:e(417)}}catch(n){return{url:t,arr:[],err:n&&n[e(387)]||String(n)}}}));let o=0;const s=[];for(const n of t)n[e(639)]?s.push(n.url.replace(/^https?:\/\//,"")[e(560)](0,40)+e(791)+n[e(639)]):(n.arr[e(663)](a),r.custom+=n.arr.length,o++);s.length&&(r.customErr=(o?"部分源失败: ":"")+s[e(384)]("；"))}else r.customErr="未提供有效 URL（多个用换行或分号隔开）"}const s=new Set,i=[];for(const t of n)s[e(860)](t.ip)||(s.add(t.ip),i[e(505)](t));if(i[e(904)]<(t[e(656)]||20)){let n=(t[e(656)]||20)-i.length;try{const r=await nn();for(const o of r){if(n<=0)break;s[e(860)](o.ip)||P(o.ip)&&(s.add(o.ip),i[e(505)]({ip:o.ip,port:t[e(660)]||o[e(660)]||443,name:o[e(783)]||""}),n--)}}catch(t){}r.bestcf=(t[e(656)]||20)-i.length-n}if(!1!==t.useCidr&&i[e(904)]<(t.count||20)){const n=(t[e(656)]||20)-i[e(904)],o=dt(b,3*n);let a=0;for(const r of o){if(a>=n)break;s.has(r)||(s[e(834)](r),i[e(505)]({ip:r,port:t[e(660)]||443,name:""}),a++)}r[e(404)]=a}return{candidates:i,stats:r}}function oe(t,n,r){return new Promise(o=>{const a=J,s=Date.now();let i,l=!1;const c=(e,r)=>{if(!l){l=!0,clearTimeout(p);try{i&&i.close()}catch(t){}o({ip:t,port:n,ok:e,latency:r})}},p=setTimeout(()=>c(!1,-1),r);try{i=e({hostname:t,port:n})}catch(t){return c(!1,-1)}i.opened[a(561)](()=>c(!0,Date[a(398)]()-s))[a(352)](()=>c(!1,-1))})}function ae(t){const e=J;return String(t).replace(/%/g,e(171))[e(513)](/#/g,"%23").replace(/\?/g,e(282))[e(513)](/ /g,"%20")}function se(t,e,n,r){return(e?1:0)+(n?1:0)+(r?1:0)<=1?{v:t,t,x:t}:{v:t,t:t+".T",x:t+".X"}}function ie(t,e,n,r,o={}){const a=J,s=t[a(426)],i=e.includes(":")&&!e[a(948)]("[")?"["+e+"]":e,l=!_.has(Number(n)),c=encodeURIComponent;let p=a(535);p+=l?a(756)+c(s)+a(439):a(713),p+=a(1006)+c(s);const d=a(200)===o[a(565)]&&l;return d?(p+=a(237),p+="&extra="+c(JSON.stringify(function(t){const e=t[J(781)]||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:e.slice(1,7),xPaddingKey:"_"+e.slice(25,31)}}(t)))):p+=a(600),p+="&path="+c("/"+t.path+(!d&&l?"?ed=2048":"")),t.alpn&&(p+="&alpn="+t[a(813)].split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean)[a(384)](",")),t.ech&&(p+="&ech="+c((t[a(706)]||a(530))+"+"+(t[a(649)]||a(625)))),"vless://"+t[a(781)]+"@"+i+":"+n+"?"+p+"#"+ae(r)}function le(t,e,n,r){const o=J,a=t[o(426)],s=e.includes(":")&&!e[o(948)]("[")?"["+e+"]":e,i=encodeURIComponent,l=!_.has(Number(n)),c="/"+t.path+(l?o(779):"");let p=l?o(832)+i(a)+o(814)+i(a)+o(835)+i(c):o(717)+i(a)+o(835)+i(c);return t[o(813)]&&l&&(p+=o(202)+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t[o(703)]&&l&&(p+=o(558)+i((t[o(706)]||"cloudflare-ech.com")+"+"+(t[o(649)]||"https://223.5.5.5/dns-query"))),"trojan://"+(t[o(1001)]||t.uuid)+"@"+s+":"+n+"?"+p+"#"+ae(r)}const ce=new Map,pe=18e5,de=new Map;function ue(t,e){const n=J,r=Qe;if(!(r&&r.K&&"function"==typeof r.K[n(913)]&&e&&e.length))return;const o=de[n(210)](t)||0;if(Date.now()-o<pe)return;if(!Z())return;de[n(950)]>200&&de.clear(),de[n(390)](t,Date.now());const a=JSON[n(584)]({t:Date.now(),ips:e.slice(0,300)}),s=r.K[n(913)](t,a,{expirationTtl:1800})[n(352)](()=>{});r._ctx&&"function"==typeof r[n(556)][n(772)]&&r[n(556)][n(772)](s)}function fe(t,e,n){return new Promise(r=>{const o=J,a=new AbortController,s=setTimeout(()=>a[o(492)](),n);fetch(t,Object.assign({},e,{signal:a.signal}))[o(561)](t=>{clearTimeout(s),r(t)})[o(352)](()=>{clearTimeout(s),r(null)})})}function he(t){const e=J,n=[];let r="";const o=t=>/^[a-z][a-z0-9+.-]*:\/\//i.test(t),a=t=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i[e(151)](t)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i[e(151)](t);for(const s of String(t||"")[e(192)](/[\n;]+/)){for(const t of s.split(",")){const s=t[e(919)]();s&&(r?o(s)||a(s)?(n.push(r),r=s):s[e(213)]("=")||/^[A-Za-z0-9]{1,6}$/.test(s)?r=r+","+s:(n[e(505)](r),r=s):r=s)}r&&(n.push(r),r="")}return n}async function me(t,e=100,n=300,r=!1,o=!0,a=!1){const s=J,i=he(t).map(t=>t.replace(/^\*\./,"")),l=Date[s(398)](),c=[s(460),"https://dns.alidns.com/resolve"],p=async(t,e,n)=>{const r=J;for(const o of c)try{const a=await fe(o+r(491)+encodeURIComponent(t)+r(349)+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t[r(565)]===n&&("A"===e?/^\d+\.\d+\.\d+\.\d+$/[r(151)](t[r(822)]):/^[0-9a-fA-F:]+$/.test(t[r(822)])))[r(254)](t=>t[r(822)])}catch(t){}return[]},d=await Promise.all(i[s(254)](async t=>{const n=J;if(t[n(213)]("://")){if(t[n(948)]("sub://")){let e=t.slice(6);if(/^[A-Za-z0-9+/=]+$/[n(151)](e)&&e[n(904)]%4==0)try{const t=atob(e);/^https?:\/\//i[n(151)](t)&&(e=t)}catch(t){}/^https?:\/\//i[n(151)](e)||(e="https://"+e),t=e}const i=n(562)+t+(r?n(788):"")+(o?"":n(305)),c=n(804)+H(i).slice(0,24),p=ce.get(i);if(p&&l-p.t<6e5)return p.ips.slice(0,e);const d=await async function(t){const e=J,n=Qe;if(!n||!n.K||"function"!=typeof n.K.get)return null;try{const r=await n.K[e(210)](t);if(!r)return null;const o=JSON[e(183)](r);return!o||!Array[e(966)](o.ips)||!o[e(957)].length||Date[e(398)]()-(o.t||0)>pe?null:o[e(957)]}catch(t){return null}}(c);if(d)return ce[n(390)](i,{t:l,ips:d}),d[n(560)](0,e);try{const p=await fe(t,{},6e3);if(!p||!p.ok)throw new Error("unreachable");let d=Zt(await p.arrayBuffer());if(/^[A-Za-z0-9+/=\s]{40,}$/.test(d.slice(0,2e3))&&d[n(513)](/\s+/g,"")[n(904)]%4==0)try{const t=atob(d.replace(/\s+/g,""));d=Zt(Uint8Array[n(762)](t,t=>t[n(800)](0)))}catch(t){}const u=new Set,f={},h=[],m=(s=t,D.test(String(s||""))),g=t=>!o||P(t)||m,v=d[n(919)]().split(/\r?\n/)[n(254)](t=>t[n(919)]()).filter(Boolean);if(v.length>1&&v[0][n(213)](",")){const t=v[0].split(",").map(t=>t[n(919)]()),r=t.includes("IP地址")&&t.includes("端口"),o=t.some(t=>t.includes("IP"))&&t[n(231)](t=>t[n(213)]("延迟"))&&t.some(t=>t[n(213)]("下载速度"));if(r||o){const r=t[n(472)](t=>t[n(213)]("IP")),o=t[n(743)]("端口"),a=t[n(472)](t=>t[n(213)]("延迟")),s=t[n(472)](t=>t[n(213)]("下载速度")),p=t.indexOf("国家")>-1?t.indexOf("国家"):t.indexOf("城市")>-1?t.indexOf("城市"):t.indexOf("数据中心"),d=t.indexOf("TLS");for(const t of v[n(560)](1)){if(h[n(904)]>=e)break;const i=t.split(",")[n(254)](t=>t[n(919)]());if(-1!==d&&i[d]&&"true"!==i[d][n(542)]())continue;const l=(i[r]||"").match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!l)continue;const c=l[1].replace(/^\[|\]$/g,""),v=-1!==o&&i[o]?parseInt(i[o]):443,b=c+":"+v;if(u.has(b))continue;if(!g(c))continue;u.add(b);let y=-1!==p&&i[p]?i[p]:"";y||-1===a||-1===s||(y="CF优选 "+(i[a]||"")+"ms "+(i[s]||"")+n(747)),y?(f[y]=(f[y]||0)+1,h.push({ip:c,port:v,name:y+"-"+String(f[y])[n(685)](2,"0"),...m?{relay:!0}:{}})):h[n(505)]({ip:c,port:v,name:"",...m?{relay:!0}:{}})}return ce[n(390)](i,{t:l,ips:h}),ue(c,h),h[n(560)]()}}if(d.includes(n(309))&&d[n(213)]("data-label")){for(const t of d[n(502)](/<tr[\s\S]*?<\/tr>/g)||[]){if(h[n(904)]>=e)break;const r={};for(const e of t.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const t=e[n(502)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);t&&(r[t[1]]=t[2].replace(/<[^>]+>/g,"").trim())}const o=(r["优选地址"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!o)continue;const a=o[1],s=o[2]?parseInt(o[2]):443,i=a+":"+s;if(u[n(860)](i))continue;if(!g(a))continue;u[n(834)](i);const l=(r["线路名称"]||r[n(578)]||"线路")[n(919)]();l?(f[l]=(f[l]||0)+1,h[n(505)]({ip:a,port:s,name:l+"-"+String(f[l]).padStart(2,"0"),...m?{relay:!0}:{}})):h.push({ip:a,port:s,name:"",...m?{relay:!0}:{}})}return ce[n(390)](i,{t:l,ips:h}),ue(c,h),h[n(560)]()}for(const t of d.split(/\r?\n/)){if(h.length>=e)break;const r=t[n(502)](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!r)continue;const o=r[1].replace(/^\[|\]$/g,""),a=r[2]?parseInt(r[2]):443,s=o+":"+a;if(u.has(s))continue;if(!g(o))continue;u.add(s);let i="";const l=t[n(743)]("#");if(l>=0)try{i=decodeURIComponent(t.slice(l+1).trim())}catch(e){i=t.slice(l+1)[n(919)]()}i?(f[i]=(f[i]||0)+1,h[n(505)]({ip:o,port:a,name:i+"-"+String(f[i])[n(685)](2,"0"),...m?{relay:!0}:{}})):h.push({ip:o,port:a,name:"",...m?{relay:!0}:{}})}for(const t of d.split(/\r?\n/)){if(h[n(904)]>=e)break;const r=t.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!r){const e=t.trim().match(/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e||e[1])continue;const n=e[2].toLowerCase(),r=e[3]?parseInt(e[3]):443,o=n+":"+r;if(u.has(o))continue;u.add(o);const a=(e[4]||"").trim();h.push({ip:n,port:r,name:a||n,...m?{relay:!0}:{}});continue}const o=r[1],a=r[2]?parseInt(r[2]):443,s=o+":"+a;if(u.has(s))continue;if(!g(o))continue;u[n(834)](s);const i=(r[3]||"").trim();if(i&&!/[\u4e00-\u9fa5]/.test(i)&&!i[n(213)]("|")){h[n(505)]({ip:o,port:a,name:i,...m?{relay:!0}:{}});continue}let l="";if(r[3]){const t=r[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(t){const e=t[0].match(/[\u4e00-\u9fa5]{2,5}/);e&&(l=e[0])}else{const t=r[3].split("|")[n(254)](t=>t[n(919)]()),e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(t));if(e){const t=e.match(/[\u4e00-\u9fa5]{2,5}/);t&&(l=t[0])}else{const e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}$/[n(151)](t)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/.test(t));if(e)l=e;else{const t=r[3].match(/\b([A-Z]{2})\b/);t&&(l=S[t[1]]||t[1])}}}}l?(f[l]=(f[l]||0)+1,h[n(505)]({ip:o,port:a,name:l+"-"+String(f[l])[n(685)](2,"0"),...m?{relay:!0}:{}})):h.push({ip:o,port:a,name:"",...m?{relay:!0}:{}})}if(!h[n(904)]&&r){const r=(String(t).match(/\/([A-Z]{2})\//)||[])[1]||String(t)[n(513)](/^https?:\/\//,"").split(".")[0];S[r]&&dt(a?w:y,e)[n(663)]((t,e)=>h[n(505)]({ip:t,port:443,name:S[r]+"-"+String(e+1)[n(685)](2,"0")}))}return ce[n(390)](i,{t:l,ips:h}),ue(c,h),h[n(560)]()}catch(t){const r=ce.get(i);return r&&r.ips&&r[n(957)][n(904)]?r.ips[n(560)](0,e):[]}}var s;if(!t[n(213)]("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[n(151)](t)){const e=t[n(502)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e)return[];const r=e[1].replace(/^\[|\]$/g,""),a=e[2]?parseInt(e[2]):443,s=(e[3]||"").trim(),i=ot(r);if(!i&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[n(151)](r))return[];if(o&&i&&!P(r))return[];if(s)return[{ip:r,port:a,name:s}];if(i)return[{ip:r,port:a,name:""}]}const i=ce[n(210)](t);if(i&&l-i.t<6e5)return i.ips[n(560)](0,e)[n(254)]((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}));const c=await p(t,"A",1);let d=o?c.filter(P):c;if(a){const e=await p(t,"AAAA",28);d=[...new Set(c[n(596)](e))][n(943)](t=>!o||P(t))}return d=d[n(560)](0,e),d.length?(ce[n(390)](t,{t:l,ips:d}),d[n(254)]((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}))):i&&i[n(957)]&&i[n(957)].length?i[n(957)].slice(0,e)[n(254)]((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)})):[]})),u=[];let f=0;for(;f<n;){let t=!1;for(const e of d){if(f>=n)break;e.length&&(u[s(505)](e.shift()),f++,t=!0)}if(!t)break}return u}async function ge(t,e=800,n=null){const r=J,o=[],a=new Set,s=t.optimizer&&t.optimizer[r(184)]||"",i=t.filter&&t[r(943)].ipType||[],l=1===i[r(904)]&&"IPv6"===i[0],c=Ce(t),p=l?k:c?[...y,...k]:y,d="custom"===s&&!(t.optimizer&&t.optimizer[r(549)]),u=r(812)===s||r(612)===s,f=(n,r,s,i)=>{((n,r,s,i)=>{const l=J;if(o.length>=e)return;if(ot(n)&&!P(n)&&!d&&!i)return;const c=t[l(823)]?n+":"+r:n;if(a[l(860)](c))return;a.add(c);const p=!_.has(Number(r));if(t.tlsOnly&&!p)return;const u=Number(r),f=se(s,!!t[l(984)],!!t[l(972)],!(!t.enableXhttp||!p));t.enableVless&&o[l(505)](ie(t,n,u,f.v)),t.enableTrojan&&(t.probeAlive||p)&&o.push(le(t,n,p?u:Number(r),f.t)),t[l(881)]&&p&&o[l(505)](ie(t,n,u,f.x,{type:l(200)}))})(n,Number(r)||443,s,i)};if(r(612)===s){let a=Math.min(Math[r(646)](parseInt(t[r(958)][r(159)])||16,1),Math[r(797)](99,e));if(t.nodeLimit){const n=parseInt(t.nodeLimitCount)||0;n>0&&(a=Math[r(797)](Math[r(646)](a,n),e))}const s=(t[r(984)]?1:0)+(t[r(972)]?1:0)+(t.enableXhttp?1:0)||1;let i=0;const l=dt(p,3*Math.ceil(a/s));let c=l;n&&(c=[...l.filter(t=>!n[r(860)](t)),...l.filter(t=>n[r(860)](t))]);for(const e of c){if(i>=a)break;const n=se(r(196)+String(i+1).padStart(2,"0"),!!t[r(984)],!!t.enableTrojan,!!t.enableXhttp);if(t[r(984)]&&(o.push(ie(t,e,443,n.v)),i++),i>=a)break;if(t.enableTrojan&&(o[r(505)](le(t,e,443,n.t)),i++),i>=a)break;t.enableXhttp&&(o[r(505)](ie(t,e,443,n.x,{type:"xhttp"})),i++)}return o}const h=he(t[r(587)])[r(943)](t=>!t.includes(r(1004)));h.forEach((t,e)=>{const n=J,r=t[n(743)]("#"),o=(r>=0?t.slice(0,r):t).trim(),a=(r>=0?t.slice(r+1):"").trim(),s=j(o,443);s[n(426)].startsWith("*.")||f(s.host,s[n(660)],a||"优选IP-"+String(e+1)[n(685)](2,"0"))});let m=t[r(270)]||[];if(c&&!l&&m[r(904)]>1){const t=[],e=[];for(const n of m)(String(n.ip).indexOf(":")>=0?e:t)[r(505)](n);const n=[],o=Math.max(t.length,e[r(904)]);for(let a=0;a<o;a++)a<t[r(904)]&&n.push(t[a]),a<e.length&&n[r(505)](e[a]);m=n}if(m[r(663)]((t,e)=>{const n=J;f(t.ip,t[n(660)]||443,t.name||n(196)+String(e+1).padStart(2,"0"),!0===t.relay||ot(t.ip)&&!P(t.ip))}),!(r(812)!==s||t.optimizer&&t.optimizer.subIncludeDefault))return o;h.length||(t[r(270)]||[])[r(904)]||(ut(M.join("\n")).forEach(t=>f(t.ip,t[r(660)]||443,t.name||"0")),R[r(663)]((t,e)=>f(t,443,r(903)+String(e+1)[r(685)](2,"0"))));const g=Math.min(Math[r(646)](parseInt(t.optimizer&&t[r(958)].fillCount||0)||0,0),5e3),v=Math.min(g,e)-a[r(950)];if(v>0){const t=n?N.filter(t=>!n[r(860)](t)):N.slice(),a=dt(p,3*v);let s=[...t,...n?a[r(943)](t=>!n[r(860)](t)):a];if(s[r(904)]<v&&(s=[...N,...a]),s[r(904)]>0){const t=Math.min(s[r(904)],20),e=s.slice(0,t),n=u?e[r(254)](()=>!0):await Xe(e,t=>Ye(t,443,1500)),o=e.filter((t,e)=>n[e]),a=s[r(560)](t);s=[...o,...a][r(560)](0,v)}let i=0;for(const t of s){if(o[r(904)]>=e)break;i++,f(t,443,r(196)+String(i)[r(685)](3,"0"))}}return o}function ve(t){const e=J,n=t[e(743)]("@"),r=t[e(743)]("?",n),o=r>n&&n>=0?t.slice(n+1,r):t.slice(n+1);if(o[e(948)]("[")){const t=o[e(743)]("]"),n=t>0?o[e(560)](1,t):o,r=o.slice(t+1),a=r.startsWith(":")?parseInt(r.slice(1)):443;return{host:n,port:isNaN(a)?443:a}}const a=o[e(609)](":");if(a>0){const t=parseInt(o[e(560)](a+1));return{host:o.slice(0,a),port:isNaN(t)?443:t}}return{host:o,port:443}}function be(t,e){const n=J,r=t.indexOf("?");if(r<0)return null;const o=t[n(743)]("#",r),a=o>r?t[n(560)](r+1,o):t[n(560)](r+1);for(const t of a[n(192)]("&")){const r=t.indexOf("=");if((r>0?t[n(560)](0,r):t)===e)return r>0?decodeURIComponent(t.slice(r+1)):""}return null}function ye(t,e){const n=J,{host:r,port:o}=ve(t),a=r,s=t.indexOf("#");let i="节点"+(e+1);if(s>=0)try{i=decodeURIComponent(t[n(560)](s+1))||i}catch(t){}const l=t.indexOf("@");let c="";if(l>=0){const e=t.indexOf(n(1004)),r=e>=0?e+3:0;try{c=decodeURIComponent(t.slice(r,l))}catch(e){c=t.slice(r,l)}}const p=t.startsWith("trojan://");return{srv:a,prt:o,name:i,user:c,isTrojan:p,tls:p||n(978)===(be(t,n(755))||n(978))}}const xe={HK:["HK","香港"],TW:["TW","台湾"],US:["US","美国"],SG:["SG","新加坡"],JP:["JP","日本"],KR:["KR","韩国"],DE:["DE","德国"]},we={移动:["移动","CM","CHINAMOBILE"],联通:["联通","CU",t(178)],电信:["电信","CT",t(662)]},ke=["移动","联通","电信"],Ie=["IPv4",t(722)];function Pe(t,e){const n=J;if(!e||!e[n(446)]&&!e[n(324)]&&!e.isp)return t;const r=e.region||n(855),o=e.ipType||Ie,a=e[n(485)]||ke,s=t.map(t=>{const e=J,{host:n}=ve(t);let r="";try{const n=t[e(743)]("#");n>=0&&(r=decodeURIComponent(t[e(560)](n+1)||""))}catch(t){r=""}return{host:n,name:r,up:r[e(872)]()}}),i=s.some(t=>t.up&&Object.keys(we).some(e=>(we[e]||[e])[n(231)](e=>t.up.includes(e.toUpperCase())))),l=(e,n,r)=>{const o=J,a=Array.isArray(e)?0===e.length||e.includes(o(855))?null:e[o(318)](t=>xe[t]||[]):"all"!==e?xe[e]||[]:null,l=r[o(904)]>0&&r.length<ke.length;return t.filter((t,e)=>{const o=J,c=s[e],p=c.host.indexOf(":")>=0;if(!c.name)return!1;if(a&&!a.some(t=>c.up.includes(t.toUpperCase()))&&!/^(优选IP|域名)-\d+/[o(151)](c[o(783)])&&"原生地址"!==c.name)return!1;if(1===n.length){if("IPv4"===n[0]&&p)return!1;if(o(722)===n[0]&&!p)return!1}return!(l&&i&&!r[o(231)](t=>(we[t]||[t])[o(231)](t=>c.up.includes(t.toUpperCase()))))})};let c=l(r,o,a);return c.length||(c=l(r,o,ke)),c[n(904)]||(c=l(r,Ie,ke)),c[n(904)]||(c=l("all",Ie,ke)),c}function Se(t){const e=J;try{let n=ve(t)[e(426)]||"";return"["===n[e(810)](0)&&(n=n.slice(1,n.indexOf("]")>0?n.indexOf("]"):void 0)),n[e(743)](":")>=0}catch(t){return!1}}function Ce(t){const e=J,n=t&&t[e(943)]&&t.filter[e(324)]||[];if(!n[e(213)]("IPv6"))return!1;if(1===n[e(904)])return!0;const r=t&&t[e(386)]||"off";return e(708)===r||"full"===r}function Ae(t,e,n){const r=J,o=e&&e[r(386)]||"off";if(n||"full"===o||r(501)===o||t.length<2)return t;const a=[],s=[];for(const e of t)(Se(e)?a:s).push(e);if(!a[r(904)])return t;if("off"===o)return s.length?s:t;const i=Math.max(1,Math.min(a[r(904)],40,Math.floor(.1*s[r(904)])));return s.length?s.concat(a.slice(0,i)):t}const Te=/^(?:优选IP-S\d|内置·保底-|隧道前置-)/;function Ee(t){try{const e=t.indexOf("#");return!(e<0)&&Te.test(decodeURIComponent(t.slice(e+1)||""))}catch(t){return!1}}function Ue(t){const e=J;for(let n=t.length-1;n>0;n--){const r=Math.floor(Math[e(612)]()*(n+1)),o=t[n];t[n]=t[r],t[r]=o}return t}function De(t){const e=J;if(e(742)==typeof t||e(642)==typeof t)return String(t);const n=String(t);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(n)?n:JSON[e(584)](n)}function Le(t,e){const n=J,r=" "[n(882)](e);return String(t||"")[n(192)]("\n").map(t=>r+(t||""))}function Re(t){const e=J,n=String(t||"");if(!n)return"";if(n[e(743)]("印度尼西亚")>=0)return"印尼";let r="";for(const t in S){const o=S[t];o.length>r[e(904)]&&n.indexOf(o)>=0&&(r=o)}if(r)return r;const o=n[e(872)]().match(/[A-Z]{2,3}/g)||[];for(const t of o)if(T[t])return T[t];return""}const Ne=36e5;let $e=0;function Me(t,e){const n=J,r=async function(t,e){const n=J;try{const r=String(e||"")[n(872)]();if(!r||!t||!t.K||n(358)!=typeof t.K[n(913)])return;const o=Date.now();if(o-$e<Ne)return;$e=o;let a=null;try{a=JSON[n(183)](await t.K[n(210)]("usageColo")||n(370))}catch(t){a=null}if(a&&o-(a.t||0)<Ne)return void($e=a.t||o);if(!Z())return;await t.K.put(n(666),JSON[n(584)]({colo:r,t:o}))[n(352)](()=>{})}catch(t){}}(t,e);t&&t._ctx&&n(358)==typeof t._ctx.waitUntil?t[n(556)][n(772)](r):r[n(352)](()=>{})}async function Oe(t){const e=J;try{if(!t||!t.K||e(358)!=typeof t.K.get)return"";const n=JSON.parse(await t.K.get(e(666),{cacheTtl:30})||e(370));return n&&n.colo?Date.now()-(n.t||0)>6048e5?"":String(n.colo)[e(872)]():""}catch(t){return""}}function _e(t,e,r,a,s,i,l){const c=J,p=t[c(426)],d="/"+t.path,u=d+c(779),f=t[c(813)]?t.alpn.split(",")[c(254)](t=>t.trim()).filter(Boolean):null,h=new Set,m=[],g={},v=String(r||"")[c(872)](),b=E[v]||v||"",y=String(l||"")[c(872)](),x=E[y]||y||"",w=String(i||"").trim().toUpperCase(),k=c(208)===w?"":S[w]||x||b,I=e[c(254)](e=>{const n=J,{user:r,srv:o,prt:a,name:s,isTrojan:i,tls:l}=ye(e,0);let c=s;const v=be(e,"type")||"ws";let b=Re(c);if(!b&&k&&(b=k,c=c?k+"·"+c:k+"·优选"),h[n(860)](c)){const t=i?"T":"xhttp"===v?"X":"W";let e=c+"·"+t,n=2;for(;h.has(e);)e=c+"·"+t+n,n++;c=e}if(h[n(834)](c),b){let t=g[b];void 0===t&&(t=m.length,g[b]=t,m.push({name:b,code:C[b]||"R"+t,nodes:[]})),m[t].nodes.push(c)}const y={name:c,server:o,port:a,udp:!0,...l?{tls:!0,"skip-cert-verify":!0,servername:p,"client-fingerprint":n(620),alpn:f||[n(186)]}:{},...t[n(703)]&&l?{"ech-opts":{enable:!0,"query-server-name":t[n(706)]||"cloudflare-ech.com"}}:{}};if(i)return{...y,type:"trojan",password:r,network:"ws","ws-opts":{path:l?u:d,headers:{Host:p}}};if("xhttp"===v){let t={};try{t=JSON[n(183)](be(e,"extra")||"{}")}catch(t){}return{...y,type:"vless",uuid:r,network:"xhttp",alpn:f||["h2"],"xhttp-opts":{path:d,mode:"stream-one",host:p,"x-padding-obfs-mode":void 0===t.xPaddingObfsMode||t.xPaddingObfsMode,"x-padding-method":t[n(989)]||"tokenish","x-padding-placement":t[n(1005)]||n(846),"x-padding-header":t.xPaddingHeader||"","x-padding-key":t[n(221)]||""}}}return{...y,type:n(422),uuid:r,network:"ws","ws-opts":{path:l?u:d,headers:{Host:p}}}});I.sort((t,e)=>(443===t.port?0:1)-(443===e[c(660)]?0:1));const P=c(812)===(t.optimizer&&t.optimizer[c(184)]||""),A=I.map(t=>t.name),T=t.homeWan&&A[c(904)]?c(963):"",U=function(t){const e=J;if(!t||!t.length)return t;const n=t[0],r=(t,e)=>(t||"")===(e||"");return t.map(t=>(t!==n?(r(t.ca,n.ca)&&(t.caRef="hwca"),r(t[e(861)],n[e(861)])&&(t.certRef=e(218)),r(t[e(437)],n[e(437)])&&(t[e(507)]="hwkey")):(t.ca&&(t[e(401)]="hwca"),t[e(861)]&&(t.certAnchor="hwcert"),t.key&&(t.keyAnchor=e(652))),t))}(function(t,e){const n=J;if(!t.homeWan)return[];const r=Array.isArray(t[n(674)])&&t[n(674)][n(904)]?t.homeWanNodes:[];if(!r.length)return[];const o={};return r.map(t=>{const n=J,r="家宽"+String(t[n(269)]||"XX").toUpperCase();let a=r,s=2;for(;o[a];)a=r+"-"+s,s++;o[a]=1;const i={name:a,type:"openvpn",server:t[n(402)],port:Number(t[n(660)])||1194,proto:n(279)===String(t[n(566)]||n(1003))?"tcp":n(1003),username:n(347),password:"vpn",ca:t.ca||"",dev:"tun",handshakeTimeout:30,cipher:t.cipher||"AES-128-GCM",auth:t[n(576)]||"SHA1"};return t.cert&&(i.cert=t.cert),t[n(437)]&&(i[n(437)]=t[n(437)]),t.tlsAuth&&(i[n(665)]=t[n(657)],i[n(971)]="1"),t.tlsCrypt&&(i[n(337)]=t[n(611)]),e&&(i.dialerProxy=e),i})}(t,T)),D=!(!t[c(527)]||P);U.length&&I[c(505)](...U);const L=function(t,e){const n=J,r=n(895);if(!e)return n(405);const o=[];o[n(505)]("# ==================== 监听器 ===================="),o.push(n(579)),o.push(n(529)),o.push("  - {name: SS-IN,  type: shadowsocks, listen: '::', port: 10000, udp: true, password: Xf3#Lp9WqZ, cipher: aes-256-gcm}"),o[n(505)]("  # Mixed监听器 - 分地区专用端口 玩法：本地浏览器插件或手机APP配置代理，实现分地区访问"),t.slice(0,7).forEach((t,e)=>{const n=J;o[n(505)]("  - {name: MIXED-"+t[n(451)]+n(740)+(5e4+e)+", proxy: "+t.name+n(684))}),o[n(505)](n(853)),o.push(""),o[n(505)]("# ==================== 代理策略组 ===================="),o[n(505)]("proxy-groups:");const a=t.map(t=>t[n(783)]+"节点");return o[n(505)]("  # 主入口：默认自动选择延迟最低节点，可手动切换各地区 / 全部节点 / 直接连接"),o.push(n(765)+[n(841),n(675)].concat(a,["全部节点","直接连接"])[n(384)](", ")+"]}"),o.push(n(361)),o[n(505)]("  - {name: 自动选择, type: url-test, include-all: true, url: '"+r+"', interval: 200, lazy: true, hidden: true, empty-fallback: REJECT}"),o[n(505)](n(344)+a.concat(["全部节点"])[n(384)](", ")+"], url: '"+r+"', interval: 200, lazy: true, empty-fallback: REJECT}"),t[n(663)](t=>{const e=J,n=t[e(783)]+"节点",a=t[e(783)]+"自动";o.push(e(575)+t.name+"（"+t[e(377)][e(904)]+" 节点）：默认选中「"+a+e(382)),o.push("  - {name: "+n+", type: select, proxies: ["+a+", "+t[e(377)].map(De)[e(384)](", ")+"]}"),o[e(505)](e(182)+a+e(463)+t.nodes[e(254)](De)[e(384)](", ")+"], url: '"+r+"', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true}")}),o[n(505)]("  # 全部节点（手动挑选任意节点；首个选项「自动选择」=全部节点中最快）"),o[n(505)]("  - {name: 全部节点, type: select, include-all: true, proxies: [自动选择]}"),o[n(505)](n(718)),o.join("\n")+"\n"}(m,I[c(904)]);let R=c(658).replace("__CLASH_GROUPS__",L);a&&(R=R[c(513)](/__CRULES__/g,a)),R=function(t,e,n,r){const o=J;if(!e[o(904)])return t;const a=e[o(254)](t=>t.name),s=a.slice().sort((t,e)=>t<e?-1:t>e?1:0),i=r&&r[o(904)]?"  # 家宽隧道前置：CF 优选节点自动测活，家宽 openvpn 经此拨号（dialer-proxy）\n  - {name: 隧道前置, type: url-test, proxies: ["+r.map(De).join(", ")+o(209):"",l="  # 家宽模式：自动测活（url-test 自动选择延迟最低家宽节点）\n  - {name: 家宽自动, type: url-test, proxies: ["+a.map(De).join(", ")+"], url: 'https://www.google.com/generate_204', interval: 600, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n",c=o(550)+s.map(De)[o(384)](", ")+o(695);let p=t;return p=p.replace(o(583),i+l+c+o(583)),p=p.replace(o(592),o(967)+(n?"  - MATCH,家宽出口":"  - MATCH,一键连接")),p}(R,U,D,A);const N=String(s||"")[c(872)](),$=S[N]||"";return"# "+o+c(498)+n+c(654)+(v||"未知")+(b?"("+b+")":"")+(y&&y!==v?" · 实测 "+y+(x?"("+x+")":""):"")+(N?" · 访客 "+N+($?"("+$+")":""):"")+" · 节点 "+I[c(904)]+" 个\ntest-url: 'http://www.gstatic.com/generate_204'\nproxies:\n"+I.map(t=>function(t){const e=J,n=[];if(n.push(e(682)+De(t.name)),n.push(e(397)+t.type),n.push(e(203)+De(t[e(402)])),n[e(505)](e(300)+t.port),e(980)===t[e(565)])return n[e(505)](e(356)+De(t.proto||"udp")),n.push(e(385)+(e(279)===t.proto?e(899):e(403))),n[e(505)]("    username: "+De(t.username||e(347))),n[e(505)](e(534)+De(t[e(569)]||"vpn")),t.caRef?n.push(e(378)+t.caRef):t.ca&&(n.push(t[e(401)]?"    ca: &"+t.caAnchor+" |":"    ca: |"),n[e(505)](...Le(t.ca,6))),t.certRef?n[e(505)]("    cert: *"+t[e(539)]):t.cert&&(n[e(505)](t.certAnchor?e(559)+t.certAnchor+" |":"    cert: |"),n.push(...Le(t[e(861)],6))),t[e(507)]?n[e(505)](e(416)+t.keyRef):t[e(437)]&&(n.push(t.keyAnchor?e(482)+t.keyAnchor+" |":"    key: |"),n[e(505)](...Le(t.key,6))),t["tls-auth"]&&(n.push(e(604)),n.push(...Le(t[e(665)],6)),n[e(505)](e(359)+De(t[e(971)]||"1"))),t[e(337)]&&(n[e(505)](e(198)),n.push(...Le(t[e(337)],6))),n[e(505)]("    dev: tun"),n[e(505)](e(727)+De(t.cipher||e(888))),n[e(505)]("    auth: "+De(t.auth||e(580))),t[e(641)]&&n.push("    handshake-timeout: "+t[e(641)]),t.dialerProxy&&n[e(505)]("    dialer-proxy: "+De(t[e(726)])),n.join("\n");if(e(422)===t[e(565)]?n[e(505)]("    uuid: "+De(t.uuid)):n.push(e(534)+De(t.password)),n[e(505)]("    network: "+t[e(574)]),n[e(505)](e(450)),t.tls&&(n.push("    tls: true"),n[e(505)](e(764)),n.push(t[e(813)]&&t.alpn[e(904)]?"    alpn: ["+t[e(813)].join(", ")+"]":e(200)===t[e(574)]?e(313):"    alpn: [http/1.1]"),n[e(505)]("    servername: "+De(t[e(720)])),"trojan"===t.type&&n.push("    sni: "+De(t[e(720)])),n.push(e(287)),t["ech-opts"]&&(n[e(505)](e(466)),n[e(505)](e(166)+De(t[e(593)].enable)),n[e(505)]("      query-server-name: "+De(t[e(593)]["query-server-name"])))),"ws"===t[e(574)])n.push("    ws-opts:"),n[e(505)](e(458)+De(t[e(582)][e(732)])),n.push(e(828)),n.push("        Host: "+De(t["ws-opts"].headers[e(923)]));else if(e(200)===t[e(574)]){const r=t[e(452)];n[e(505)](e(551)),n.push("      path: "+De(r[e(732)])),n[e(505)](e(839)+De(r.mode)),n[e(505)](e(746)+De(r.host)),n[e(505)]("      x-padding-obfs-mode: "+De(r[e(602)])),n[e(505)](e(333)+De(r["x-padding-method"])),n.push("      x-padding-placement: "+De(r[e(942)])),n.push("      x-padding-header: "+De(r["x-padding-header"])),n.push(e(749)+De(r[e(369)]))}return n[e(384)]("\n")}(t)).join("\n")+"\n"+R+"\n"}function Fe(t,e){const n=J,r=t[n(426)],o="/"+t.path,a=[];for(const t of e)t[n(948)](n(825))&&t.indexOf(n(541))<0?a.push(t):t.startsWith(n(350))&&t.indexOf(n(552))<0&&t.indexOf(n(541))<0&&a[n(505)](t[n(513)](/^vless:\/\//,n(825)).replace(n(664),""));const s=a.map((t,e)=>{const n=J,{user:a,srv:s,prt:i,name:l}=ye(t,e);return l+" = trojan, "+s+", "+i+", password="+a+", ws=true, ws-path="+o+n(767)+r+", tls=true, skip-cert-verify=true, sni="+r});return"#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n"+s.join("\n")+n(848)+s.map(t=>t.split(n(653))[0])[n(384)](", ")+"\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n"}function ze(t,e){const n=J,r=t.host,o="/"+t.path,a=t.alpn?t[n(813)].split(",")[n(254)](t=>t.trim()).filter(Boolean):null,s=new Set,i=e[n(254)]((t,e)=>{const n=J,{user:i,srv:l,prt:c,name:p,isTrojan:d,tls:u}=ye(t,e),f=be(t,"type")||"ws";let h=p;if(s.has(h)){const t=d?"T":"xhttp"===f?"X":"W";let e=h+"·"+t,n=2;for(;s.has(e);)e=h+"·"+t+n,n++;h=e}s[n(834)](h);const m=u?n(200)===f?{enabled:!0,server_name:r,insecure:!0,alpn:a||["h2"]}:{enabled:!0,server_name:r,insecure:!0,alpn:a||["http/1.1"],utls:{enabled:!0,fingerprint:n(620)}}:{enabled:!1},g="xhttp"===f?{type:n(200),mode:"stream-one",path:o}:u?{type:"ws",path:o,max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol",headers:{Host:r}}:{type:"ws",path:o,headers:{Host:r}};return d?{type:"trojan",tag:h,server:l,server_port:c,password:i,tls:m,transport:g}:{type:n(422),tag:h,server:l,server_port:c,uuid:i,tls:m,transport:g}}),l=i.map(t=>t[n(907)]),c=[["geosite-cn","🎯 全球直连"],["geosite-google","🌐 谷歌服务"],["geosite-apple","🍎 苹果服务"],["geosite-microsoft",n(974)],["geosite-openai",n(633)],["geosite-spotify","🌍 国外媒体"],["geosite-youtube",n(983)],[n(997),"🌍 国外媒体"],[n(851),n(983)],["geosite-twitter",n(983)],["geosite-telegram","🌍 国外媒体"],[n(339),n(983)],["geosite-category-ads-all",n(769)]],p={log:{level:"info"},dns:{servers:[{tag:n(327),type:"https",server:"1.1.1.1"},{tag:n(236),type:"udp",server:"223.5.5.5"},{tag:n(820),type:"fakeip",inet4_range:n(258)}],rules:[{domain_suffix:[n(242),n(628),"jsdelivr.net"],action:"route",server:"dns-direct"},{rule_set:n(525),action:"route",server:n(236)},{action:"route",server:n(820)}],final:n(327),strategy:n(941)},inbounds:[{type:"mixed",tag:n(473),listen:"127.0.0.1",listen_port:2080},{type:n(759),tag:"tun-in",interface_name:n(470),address:["172.19.0.1/30"],mtu:9e3,auto_route:!0,strict_route:!0}],outbounds:[...i,{type:"direct",tag:n(621)},{type:n(769),tag:n(769)},{type:n(758),tag:"🚀 节点选择",outbounds:l},{type:n(758),tag:"🎯 全球直连",outbounds:["direct"]},{type:n(758),tag:"🐟 漏网之鱼",outbounds:["🚀 节点选择",n(150)]},{type:"selector",tag:n(983),outbounds:[n(668)]},{type:"selector",tag:n(871),outbounds:[n(668)]},{type:"selector",tag:"🤖 OpenAI",outbounds:["🚀 节点选择"]},{type:"selector",tag:"🍎 苹果服务",outbounds:[n(150)]},{type:"selector",tag:n(974),outbounds:["🎯 全球直连"]}],route:{rules:[{action:n(936)},{protocol:"dns",action:n(430)},{ip_is_private:!0,outbound:"direct"},...c.map(([t,e])=>({rule_set:[t],outbound:e})),{rule_set:"geoip-cn",outbound:n(621)},{ip_is_private:!0,action:n(256)}],rule_set:[...c.map(([t])=>{const e=J,n=t[e(513)](e(249),"geosite/");return{type:e(627),tag:t,format:e(487),url:"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/"+n+e(376),download_detour:"direct"}}),{type:n(627),tag:n(712),format:n(487),url:"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",download_detour:n(621)}],final:n(985),auto_detect_interface:!0,default_domain_resolver:{server:"dns-direct"}},experimental:{clash_api:{external_controller:"127.0.0.1:9090"},cache_file:{enabled:!0}}};return JSON[n(584)](p,null,2)}function qe(t,e){const n=J,r=t.host,o="/"+t[n(732)],a=e.map((t,e)=>{const n=J,{user:a,srv:s,prt:i,name:l,isTrojan:c,tls:p}=ye(t,e),d=p?", tls=true, skip-cert-verify=true, sni="+r:", tls=false";return c?l+" = trojan, "+s+", "+i+", password="+a+n(467)+o+", ws-headers=Host:"+r+d:l+n(170)+s+", "+i+", username="+a+", ws=true, ws-path="+o+n(767)+r+d});return"#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n"+a[n(384)]("\n")+n(848)+a.map(t=>t.split(" = ")[0])[n(384)](", ")+n(768)}function Be(t,e){const n=J,r=t.host,o="/"+t[n(732)],a=e[n(254)]((t,e)=>{const n=J,{user:a,srv:s,prt:i,name:l,isTrojan:c,tls:p}=ye(t,e),d=p?", tls=true, skip-cert-verify=true, sni="+r:", tls=false";return c?l+n(925)+s+", "+i+n(613)+a+n(467)+o+n(767)+r+d:l+" = vless, "+s+", "+i+n(640)+a+", ws=true, ws-path="+o+n(767)+r+d}),s=a.map(t=>t.split(" = ")[0])[n(384)](", ");return"[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n"+a[n(384)]("\n")+n(848)+s+n(987)+s+"\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n"}function Ge(t,e){const n=J,r=t.host,o="/"+t.path,a=t=>t.indexOf(":")>=0?"["+t+"]":t,s=e.map((t,e)=>{const n=J,{user:s,srv:i,prt:l,name:c}=ye(t,e);if(t.startsWith(n(825)))return n(175)+a(i)+":"+l+", password="+s+n(785)+r+n(453)+r+", obfs-uri="+o+n(322)+c;const p=n(978)===(be(t,"security")||"tls");return n(247)+a(i)+":"+l+", method=none, password="+s+n(908)+(p?n(858):"ws")+n(571)+r+", obfs-uri="+o+(p?n(906):"")+", tag="+c}),i=e.map((t,e)=>{const n=t[J(743)]("#");if(n<0)return"节点"+(e+1);try{return decodeURIComponent(t.slice(n+1))||"节点"+(e+1)}catch(t){return"节点"+(e+1)}}).join(", ");return n(838)+s.join("\n")+"\n[policy]\nstatic=🚀 节点选择, "+i+n(169)}let Ke=!1;const He=4;let je=0;const We=[];function Ve(){const t=J;return je<He?(je++,Promise.resolve()):new Promise(e=>We[t(505)](e))}function Je(){const t=We[J(443)]();t?t():je--}async function Xe(t,e){const n=[];let r=0;const o=Array.from({length:Math.min(He,t.length)},async()=>{const o=J;for(;r<t[o(904)];){const o=r++;await Ve();try{n[o]=await e(t[o],o)}catch(t){n[o]=!1}finally{Je()}}});return await Promise.all(o),n}let Qe=null;async function Ye(t,n,r){const o=J;if(!Ke)return!0;if(P(t))return!0;const a=r||2e3;try{const r=e({hostname:t,port:n});await Promise[o(399)]([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error(o(651))),a))]);try{r[o(716)]()}catch(t){}return!0}catch(t){return!1}}const Ze={t:0,list:null};let tn="";const en={list:null,at:0,key:""};async function nn(){const t=J,e=String(tn||"")[t(919)](),n=e||"__default__";if(en[t(437)]===n&&en.list&&Date.now()-en.at<6e5)return en[t(998)];const r=[],o=(e?he(e).filter(e=>/^https?:\/\//i[t(151)](e))[t(560)](0,10)[t(254)](t=>({url:t,label:"兜底",count:100})):$).map(async t=>{const e=J;try{const n=await fe(t[e(940)],{headers:{"User-Agent":e(207)}},8e3);if(!n.ok)return;const o=await n[e(986)](),a=[];for(const n of o[e(192)](/[\r\n]+/)){const r=n[e(919)]().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);r&&a[e(904)]<t[e(656)]&&a.push({ip:r[1],port:r[2]?parseInt(r[2],10):443,name:t[e(1007)]+"-"+String(a.length+1)[e(685)](2,"0")})}a.forEach(t=>r.push(t))}catch(t){}});return await Promise[t(855)](o),en[t(998)]=r,en.at=Date.now(),en.key=n,r}async function rn(t,n,r,o,a,s,i){const l=J;t.path&&"/"!==t[l(732)]&&""!==t[l(732)]||(t.path=t[l(781)]);let c="";try{c=(new URL(n)[l(671)][l(210)](l(269))||"").trim()}catch(t){}const p=(c||String(t[l(850)]||""))[l(919)](),d=await Oe(i)||a;if(t.filter&&t[l(943)].ipType,Ce(t)&&await async function(){const t=J,e=Date[t(398)]();if(!(I&&e-I<216e5))try{const n=await fetch("https://www.cloudflare.com/ips-v6/",{signal:AbortSignal[t(311)](1e4)});if(!n.ok)return;const r=await n.text(),o=String(r)[t(192)]("\n")[t(254)](t=>t.trim()).filter(t=>/^[0-9a-fA-F:.]+\/\d+$/.test(t)&&t.indexOf(":")>=0);o.length>=3&&(k=o,I=e)}catch(t){}}(),""===(t.optimizer&&t.optimizer.subMode||"")&&t.probeAlive&&(!t.preferredIPs||t[l(270)].length<80)){let n=!1;try{const e=await async function(t){const e=J;if(!t||!t.K||e(358)!=typeof t.K[e(210)])return null;try{const n=await t.K[e(210)](e(599));if(!n)return null;const r=JSON.parse(n);return r&&Array.isArray(r[e(957)])&&r[e(957)][e(904)]?Date[e(398)]()-(r.at||0)>216e5?null:r.ips:null}catch(t){return null}}(i);if(e&&e.length){const r=new Set((t[l(270)]||[])[l(254)](t=>t.ip)),o=e.filter(t=>t&&t.ip&&!r[l(860)](t.ip));o[l(904)]&&(t[l(270)]=[...t.preferredIPs||[],...o]),n=!0}}catch(t){}if(!n)try{const[n,r,o]=await Promise[l(855)]([nn()[l(352)](()=>[]),ne(200)[l(352)](()=>null),Promise.resolve(ut(M[l(384)]("\n")))]),a=[],s=[],c=new Set((t.preferredIPs||[]).map(t=>t.ip));for(const e of[...t[l(270)]||[],...n||[],...r||[],...o]){if(!e||!e.ip||c.has(e.ip))continue;c[l(834)](e.ip);const t={ip:e.ip,port:e[l(660)]||443,name:e.name||"",relay:!!e[l(512)]};t[l(512)]||!P(t.ip)?s.push(t):a[l(505)](t)}const p=s.slice(0,24),d=a[l(560)](0,16),[u,f]=await Promise.all([Xe(p,t=>async function(t,n){return!Ke||async function(t,n){const r=J;try{const o=e({hostname:t,port:n});await Promise.race([o.opened,new Promise((t,e)=>setTimeout(()=>e(new Error(r(681))),2500))]);const a=o.writable.getWriter(),s=o.readable[r(933)]();await a.write((new TextEncoder)[r(180)](r(794)+t+r(368)));const i=await Promise.race([s[r(570)](),new Promise((t,e)=>setTimeout(()=>e(new Error(r(294))),2500))]);try{o[r(716)]()}catch(t){}const l=(new TextDecoder)[r(205)](i[r(622)]||new Uint8Array(0));return/^HTTP\/1\.[01] (200|204)/[r(151)](l)}catch(t){return!1}}(t,n)}(t.ip,t.port||443)),Xe(d,t=>Ye(t.ip,t[l(660)]||443,2500))]),h=p[l(943)]((t,e)=>u[e]),m=[...d.filter((t,e)=>f[e]),...a.slice(d[l(904)])].slice(0,210),g=[...h,...s.slice(p.length)].slice(0,40);t[l(270)]=[...t[l(270)]||[],...m,...g][l(560)](0,250),async function(t,e){const n=J;if(t&&t.K&&"function"==typeof t.K.put)try{const r=(e||[]).filter(t=>t&&t.ip).map(t=>({ip:t.ip,port:t[n(660)]||443,name:t[n(783)]||"",relay:!!t[n(512)]}))[n(560)](0,250);if(!r.length)return;if(!Z())return;await t.K[n(913)](n(599),JSON[n(584)]({at:Date[n(398)](),ips:r}))}catch(t){}}(i,t.preferredIPs)}catch(t){}}const u=!/\.workers\.dev$/i[l(151)](new URL(n).hostname),f=Object.assign({},t,{host:t[l(426)]||new URL(n)[l(544)]});u&&(f.tlsOnly=!0),f[l(984)]||f.enableTrojan||f.enableXhttp||(f.enableVless=!0);const h=t.optimizer&&t[l(958)][l(184)]||"";if(t.homeWan)try{f[l(674)]=await rt(i,f)}catch(t){}let m=[];const g=t.filter&&t[l(943)][l(324)]||[],v=1===g.length&&"IPv6"===g[0],b=Ce(t),x=ut(M[l(384)]("\n")).map(t=>({ip:t.ip,port:t[l(660)]||443,name:t[l(783)]||"优选IP-"+String(M.indexOf(t)+1).padStart(2,"0")}));if(l(812)===h){const e=!(!t[l(958)]||!t.optimizer.subIncludeDefault),n=!e;if(m=await me(t.preferredDomains||"",n?200:40,n?2e3:300,e,e,b),e){const t=await me(O,40,240,!1,!0,b),e=new Set(t[l(254)](t=>t.ip));m=[...t,...m.filter(t=>!e.has(t.ip))],f.preferredIPs=[...f.preferredIPs||[],...x],f.optimizer||(f[l(958)]={}),f[l(958)][l(206)]=Math[l(646)](parseInt(f[l(958)][l(206)])||0,800)}}else if(""===h){const e=t[l(246)]||{},n=!0===e[l(374)],r=!1!==e.prefDomain,o=!1!==e.prefIp,a=!0===e[l(454)];n&&!v&&(f.preferredDomains=(f.preferredDomains?f.preferredDomains+"\n":"")+f[l(426)]+l(483)),a||(f[l(270)]=[]);const s=(t.filter||{}).region;if(Array[l(966)](s)?0===s.length||s[l(213)]("all"):!s||l(855)===s){if(m=[],r&&!v){const t=await async function(t){const e=J;if(!Ke)return String(t||"")[e(192)](/[\n,;]+/).map(t=>t[e(919)]().replace(/^\*\./,""))[e(943)](Boolean)[e(384)]("\n");if(Date.now()-Ze.t<6e5&&null!==Ze[e(998)])return Ze[e(998)];const n=String(t||"").split(/[\n,;]+/)[e(254)](t=>t.trim()[e(513)](/^\*\./,"")).filter(Boolean),r=n.slice(0,12),o=n.slice(12),a=(await Xe(r,async t=>{const e=await async function(t){const e=J;try{const n=await fe("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(t)+"&type=A",{headers:{accept:"application/dns-json"}},4e3);return n&&n.ok&&((await n[e(954)]())[e(381)]||[]).filter(t=>1===t.type&&/^\d+\.\d+\.\d+\.\d+$/[e(151)](t[e(822)]))[e(254)](t=>t[e(822)]).filter(P)[0]||null}catch(t){return null}}(t);return e&&P(e)?{d:t,ok:await Ye(e,443)}:{d:t,ok:!1}}))[e(254)]((t,e)=>t&&t.ok?r[e]:null)[e(943)](Boolean).concat(o);return Ze.t=Date[e(398)](),Ze[e(998)]=a.join("\n"),Ze[e(998)]}(O);t&&(f[l(587)]=(f.preferredDomains?f.preferredDomains+"\n":"")+t)}if(o&&!v){const t=await ne(150);t&&t.length&&(f[l(270)]=[...f[l(270)]||[],...t]);try{const t=await me(U,100,600,!0,!0,!1);t&&t.length&&(f[l(270)]=[...f.preferredIPs||[],...t])}catch(t){}}if(b&&r)try{const t=O+(v?"\n"+R[l(384)]("\n"):""),e=await me(t,40,v?800:240,!1,!0,!0);e&&e[l(904)]&&(f.preferredIPs=[...f[l(270)]||[],...e])}catch(t){}}else r&&(m=await me(O,100,300,!1,!0,b));if(o)if(v){const t=x[l(254)](t=>({ip:pt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);f[l(270)]=[...f[l(270)]||[],...t]}else if(b){const t=x[l(254)](t=>({ip:pt(t.ip),port:t[l(660)]||443,name:t.name}))[l(943)](t=>t.ip);f[l(270)]=[...f.preferredIPs||[],...x,...t]}else f.preferredIPs=[...f.preferredIPs||[],...x];if(!(n||r||o||a))if(v){const t=x.map(t=>({ip:pt(t.ip),port:t.port||443,name:t[l(783)]}))[l(943)](t=>t.ip);f[l(270)]=[...f.preferredIPs||[],...t]}else f.preferredIPs=[...f[l(270)]||[],...x];if(v&&f[l(270)]&&(f[l(270)]=f[l(270)].filter(t=>String(t.ip).indexOf(":")>=0)),f[l(958)]||(f.optimizer={}),f[l(958)][l(206)]=Math.max(parseInt(f.optimizer[l(206)])||0,v?0:1e3),t.probeAlive&&f[l(270)]&&f[l(270)][l(904)]){const t=N.map((t,e)=>({ip:t,port:443,name:l(973)+String(e+1).padStart(2,"0")})),e=new Set(t[l(254)](t=>t.ip));f[l(270)]=[...t,...f[l(270)].filter(t=>!e.has(t.ip))]}}const w=t._skipIssued&&t._skipIssued[l(950)]?t._skipIssued:null;if(m.length){let t=m;w&&(t=[...m.filter(t=>!w[l(860)](t.ip)),...m.filter(t=>w[l(860)](t.ip))]);const e=(f.preferredIPs||[]).length;t=t[l(254)]((t,n)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[l(151)](t.name||"")?Object.assign({},t,{name:"优选IP-"+String(e+n+1)[l(685)](2,"0")}):t),f[l(270)]=[...f[l(270)]||[],...t]}v&&f[l(270)]&&(f.preferredIPs=f.preferredIPs.filter(t=>String(t.ip)[l(743)](":")>=0)),o=(o||"")[l(542)]();const C=(r||"")[l(542)](),A=["clash",l(276),l(500),l(789),l(775),"loon",l(847),l(929)][l(213)](C)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/.test(o);let T=A?300:800;if(l(812)===h&&t[l(958)]&&t.optimizer[l(549)]&&(T=A?Math.max(T,300):Math.max(T,800)),"custom"!==h||t[l(958)]&&t[l(958)][l(549)]||(T=A?Math.max(T,800):Math[l(646)](T,2e3)),!1===t[l(216)]&&(T=1e4),t[l(745)]){const e=parseInt(t.nodeLimitCount)||0;e>0&&(T=Math[l(797)](e,1e3))}t[l(509)]&&(T=Math[l(797)](T,t._quotaCap));const D=l(612)===h?Object[l(688)]({},t.filter,{region:l(855)}):t.filter,L=!(!t[l(527)]||l(812)===h);let $;$=L?function(t,e,n){const r=J,o=Array.isArray(n)?n[r(560)](0,3):[];if(o[r(904)]>=3)return o;const a=new Set;for(const t of o)try{a.add(ve(t)[r(426)])}catch(t){}for(const e of N){if(o.length>=3)break;a.has(e)||(a[r(834)](e),o[r(505)](ie(t,e,443,r(240)+String(o.length+1)[r(685)](2,"0"))))}return o}(f,0,Pe(await ge(f,T,w),D)[l(560)](0,3)):Pe(await ge(f,T,w),D),L||($=Ae($,t,v));const _="custom"===h&&!(t[l(958)]&&t.optimizer.subIncludeDefault);if(L||_||v||function(t,e,n){if(t.length>=n)return;const r=new Set;for(const e of t)try{r.add(ve(e).host)}catch(t){}e.src&&!0===e.src.native&&(o=>{const a=J;if(t.length>=n)return;if(r.has(o))return;r.add(o);const s=se(a(158),!!e[a(984)],!!e[a(972)],!!e.enableXhttp);e[a(984)]&&t.push(ie(e,o,443,s.v)),e[a(972)]&&t[a(505)](le(e,o,443,s.t)),e.enableXhttp&&t[a(505)](ie(e,o,443,s.x,{type:"xhttp"}))})(e.host)}($,f,T),L||!t.probeAlive||v||_&&$[l(904)]>0||function(t,e){const n=J,r=t.length+3*N[n(904)],o=new Set;for(const e of t)try{o.add(ve(e).host)}catch(t){}let a=0;for(const s of N){if(t.length>=r)break;if(o[n(860)](s))continue;o[n(834)](s),a++;const i=se("内置·保底-"+String(a)[n(685)](2,"0"),!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);if(e[n(984)]&&t[n(505)](ie(e,s,443,i.v)),t.length>=r)break;if(e[n(972)]&&t.push(le(e,s,443,i.t)),t.length>=r)break;e[n(881)]&&t.push(ie(e,s,443,i.x,{type:n(200)}))}}($,f),!L&&t.nodeLimit&&h&&!_&&$[l(904)]<T){const t=T-$[l(904)],e=new Set;for(const t of $)try{e[l(834)](ve(t)[l(426)])}catch(t){}const n=(t,n,r)=>{const o=J;$.length>=T||e[o(860)](t)||(e[o(834)](t),$.push(ie(f,t,n||443,r)))};let r=0;try{const e=await nn(),r=w?e.filter(t=>!w[l(860)](t.ip)):e,o=r.length>=t?r:e;for(const t of o)if(n(t.ip,t[l(660)],t[l(783)]||l(196)+String(t.port)),$[l(904)]>=T)break}catch(t){}if($[l(904)]<T){const t=T-$.length,e=k,o=dt(v?e:b?[...y,...e]:y,3*t),a=w?o[l(943)](t=>!w[l(860)](t)):o,s=a.length>=t?a:o;for(const t of s){if($[l(904)]>=T)break;r++,n(t,443,"优选IP-"+String(r)[l(685)](3,"0"))}}}L||($=Ae($,t,v)),function(t,e,n){const r=J;if(t.length<2)return t;const o=!1!==e.loadBalance&&"random"!==n,a="tail"===(e&&e[r(386)]),s=[],i=[],l=[];for(const e of t)Ee(e)?s[r(505)](e):a&&Se(e)?l.push(e):i[r(505)](e);if(!s.length&&!l.length)return o&&Ue(t),t;o&&(Ue(s),Ue(i)),t.length=0;for(let e=0;e<s[r(904)];e++)t[r(505)](s[e]);for(let e=0;e<i.length;e++)t[r(505)](i[e]);for(let e=0;e<l[r(904)];e++)t[r(505)](l[e])}($,t,h),$.length>T&&($[l(904)]=T),$=function(t,e,n){const r=J,o=String(n||"").trim()[r(872)](),a=String(e||"").toUpperCase(),s=r(208)===o?"":S[o]||E[a]||a||"",i=new Set;return t[r(254)](t=>{const e=J;let n="";try{n=ye(t,0).name||""}catch(t){n=""}const r=n;let o=Re(n);!o&&s&&(o=s,n=n?s+"·"+n:s+"·优选"),n||(n="节点");let a=n,l=2;for(;i[e(860)](a);)a=n+"·"+l,l++;return i[e(834)](a),a===r?t:function(t,e){const n=J,r=String(t),o=r[n(743)]("#");return(o>=0?r.slice(0,o):r)+"#"+ae(e)}(t,a)})}($,d,p);const F=[],z=new Set;for(const t of $)try{const{host:e}=ve(t);ot(e)&&!z[l(860)](e)&&(z.add(e),F[l(505)](e))}catch(t){}if(!$[l(904)])for(let t=0;t<N[l(904)];t++)try{$[l(505)](ie(f,N[t],443,"兜底-"+String(t+1).padStart(2,"0")))}catch(t){}let q,B;const G=()=>{const t=J,e=$.slice();try{e[t(505)](ie(f,f.host,443,t(471)))}catch(t){}return{type:"text/plain",body:e[t(384)]("\n"),issued:F}};if("karing"===C)return G();if("clash"===C)q=l(715),B=_e(f,$,a,new URL(n).origin+l(887)+sn(f),s,p,d);else if(l(276)===C||"sing-box"===C||"hiddify"===C)q=l(661),B=ze(f,$);else if("surge"===C)q=l(154),B=qe(f,$);else if(l(775)===C)q="text/plain",B=Fe(f,$);else if(l(637)===C)q="text/plain",B=Be(f,$);else if(l(847)===C||"quantumultx"===C)q=l(154),B=Ge(f,$);else if(l(711)===C||l(702)===C)q=l(154),B=$.join("\n");else if(l(379)===C||"v2rayn"===C||l(493)===C||"nekoray"===C||"stash"===C)q="text/plain",B=$[l(384)]("\n");else if(o[l(213)]("clash")||o.includes(l(857)))q="text/yaml",B=_e(f,$,a,new URL(n)[l(956)]+"/crules/"+sn(f),s,p,d);else{if(/karing/i.test(o))return G();o.includes(l(500))?(q=l(661),B=ze(f,$)):o[l(213)]("surge")?(q="text/plain",B=qe(f,$)):o.includes(l(775))?(q=l(154),B=Fe(f,$)):o.includes(l(637))?(q="text/plain",B=Be(f,$)):o.includes(l(429))?(q=l(154),B=Ge(f,$)):o.includes("mozilla")?(q=l(715),B=_e(f,$,a,new URL(n).origin+"/crules/"+sn(f),s,p,d)):(q=l(154),B=$[l(384)]("\n"))}return{type:q,body:B,issued:F}}const on=String[t(702)]`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>控制台</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>${o}</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源），默认已配好大陆直连分流（大陆应用、微软、苹果直连，国外服务走代理）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（自定义订阅模式内置常用订阅源，可自行增删，可追加内置优选池与默认节点）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置 Cloudflare 账户 ID 与 API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="clash">Clash / Mihomo</option>
              <option value="singbox">Sing-box</option>
              <option value="karing">Karing</option>
              <option value="surge">Surge</option>
              <option value="surfboard">Surfboard</option>
              <option value="loon">Loon</option>
              <option value="quanx">Quantumult X</option>
              <option value="v2ray">v2rayN / Shadowrocket</option>
              <option value="stash">Stash</option>
              <option value="plain">明文 vless</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6"><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">IPv6 下发</div>
            <div class="pills nowrap">
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-off" value="off" checked><span>不下发</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-tail" value="tail"><span>仅备胎</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-full" value="full"><span>等权混合</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">「节点地区」多选过滤地区；「运营商偏好」按节点名称中的运营商标记过滤（移动/联通/电信），无标记时不生效；「地址来源」控制下发来源（原生地址/优选域名/优选 IP/自定义优选/随机优选）。任一维度无节点时自动放宽，保证订阅非空。<br>
          <b>IPv6 下发</b>（清单质量）：IPv6 到 CF 的可达性取决于客户端所在网络，不少家庭宽带 v6 到 CF 的路径比 v4 差甚至不通，IPv6 节点在客户端逐节点测延迟时会被大量超时项拖长。<b>「不下发」为默认</b>——即使勾选了「IPv6」也不进清单；「仅备胎」= 占比封顶 10% 且整体排到列表尾部，IPv4 打头；「等权混合」= 旧行为。仅勾选 IPv6（单选）时策略自动让位，保证订阅不为空。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控后即可在此查看当日用量；策略见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH、节点测活、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（支持Mihomo内核，须绑定域名开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>家宽模式</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN （仅Mihomo内核）</span></div>
          <p class="hint">- 每日拉取，取最快 100 台，仅留 TCP 家宽节点（「家宽 + 地区」、同区编号；UDP 剔除）。<br>- 缓存 30 分钟；&lt;30 台强制刷新，失败用旧缓存。<br>- 家宽须经隧道前置拨号；隧道节点 Worker 自动生成、自动测活、不受筛选。<br>- 开启后订阅仅含家宽 + 隧道节点；默认节点不下发（自定义订阅除外）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）开启「仅 TLS」后从订阅剔除。</p>
        </div>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：服务端不做任何批量 TCP 探测，全量下发、客户端自行择优。<b>服务端批量探测是 CF 滥用风控的高危画像（可能触发「检测到网络滥用 / 账号封禁」提示），建议保持关闭。</b>开启后按限额抽测（初始化池 ≤40、域名预检 ≤12、补足 ≤20），剔除判死项后下发；CF 段 IP 禁止出站探测、直接视为可用；自定义订阅 / 随机优选模式不测活。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>负载均衡</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>负载均衡（打乱下发顺序）</span></div>
          <p class="hint" style="margin-top:12px">每次订阅对节点顺序随机轮换（Fisher-Yates），连接分散避免集中踩同一批头部 IP；关闭则固定顺序。<br>
            <b>保底前置</b>：「优选IP-Sxx」（实测高存活 IP）/「内置·保底-XX」/「隧道前置-XX」始终保留在清单头部（组内仍随机轮换），
            其余节点整体乱序——既保证客户端「取第一个」就是稳定节点，又不牺牲分散连接的收益；同时避免这批最稳的节点在节点数封顶时被尾部截断砍掉。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>国家标注</h3>
          <div class="field" style="margin-top:10px"><label>无名节点默认国家</label><select id="q-clabel">
            <option value="">按订阅时机房实测（默认）</option>
            <option value="OFF">不标注</option>
            <option value="HK">固定：香港</option>
            <option value="TW">固定：台湾</option>
            <option value="MO">固定：澳门</option>
            <option value="JP">固定：日本</option>
            <option value="SG">固定：新加坡</option>
            <option value="KR">固定：韩国</option>
            <option value="US">固定：美国</option>
            <option value="DE">固定：德国</option>
            <option value="GB">固定：英国</option>
            <option value="FR">固定：法国</option>
            <option value="CA">固定：加拿大</option>
            <option value="AU">固定：澳大利亚</option>
            <option value="SE">固定：瑞典</option>
            <option value="NL">固定：荷兰</option>
            <option value="FI">固定：芬兰</option>
            <option value="IN">固定：印度</option>
            <option value="TR">固定：土耳其</option>
            <option value="BR">固定：巴西</option>
          </select></div>
          <p class="hint" style="margin-top:12px">仅影响无法从名字识别地区的节点（优选IP/保留N/自定名等）。「机房实测」= 真实路由落点，随运营商线路变化（同一网络下全部同名是正常现象）；「固定」只改节点名，不改变实际落地。订阅链接可加 ?country=HK 或 ?country=off 临时覆盖（优先于本设置）。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点附带 ech 参数与 alpn 协商，客户端需支持 ECH 才生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（留空则直连失败后走内置地区反代）</label><input type="text" id="s-proxyIP" placeholder="留空则直连失败后走内置地区反代" autocomplete="off"></div>
        <div class="field"><label>出站代理（可选）</label><input type="text" id="s-outbound" placeholder="socks5://user:pass@1.2.3.4:1080 或 ss://chacha20-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 socks5://（可带 user:pass@）、http(s)://、ss:// 或 host:port（默认按 socks5，端口 1080）。SS 加密支持 aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先代理，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走代理（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">配置修改后点右下角「保存全部」写入 KV 并生效，订阅与节点构成立即更新；「重置」清空 KV 全部数据并还原初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="bestcf">优选 IP 列表（bestcf）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>默认端口 <span style="font-weight:400;color:var(--faint)">（源未带端口时用）</span></label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none;margin-top:12px"><label>自定义数据源 URL <span style="font-weight:400;color:var(--faint)">（多个用换行或分号隔开，上限 50 个，并发拉取；URL 查询串中的逗号原样保留）</span></label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt（多个用换行/分号隔开）" autocomplete="off"></div>
        <div class="field" style="margin-top:8px"><label>兜底优选池 URL <span style="font-weight:400;color:var(--faint)">（可选，换行/分号分隔，上限 10 个；URL 查询串中的逗号原样保留；留空用内置 bestcf 地区池）</span></label><input type="text" id="o-fbpool" placeholder="https://a.example/ips.txt;https://b.example/ips.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为 IP 下发；测速「加入优选」写入此列表，保存后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：用量达免费额度 60% 后节点上限按比例收缩（60%→1000 条、70%→750、80%→500、90%→250、100%→100 条保底），用量越高下发越少。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原 300/800 分档；勾选三种协议时总数仍为设定值。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性全量下发；开启后按格式上限轮换新 IP（200 条去重窗口），端口固定 443，换新靠 IP 轮换。开启后每次更新订阅会写一次 KV 记录轮询窗口（KV 免费额度仅 1,000 写/日），客户端「更新间隔」建议 ≥5 分钟。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div><div class="kv"><span class="k">IPv6 下发</span><span class="v" id="qIp6">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求消耗 Worker CPU（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（优先级从高到低）：① 用量监控；② 自动调节（用量 ≥60% 时按比例收缩节点上限，只收紧不放大）；③ 数量上限精确限制；④ 格式分档与轮询去重。各层上限冲突取较小值，CPU 消耗始终在免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、面板路径、管理密码与绑定域名</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>面板路径（访问入口，留空用 UUID）</label><input type="text" id="a-path" placeholder="留空自动使用 UUID" autocomplete="off"></div>
        <div class="field"><label>自定义订阅路径（只填 UUID/别名段，如 AAZ；留空用面板路径）</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">部署后首次访问强制要求设置管理密码；设置后此处留空并保存可恢复免登录。</p>
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 需绑定自定义域名），不负责 DNS；自定义域名访问面板需在 Cloudflare 控制台为该 Worker 添加域名，证书自动签发；留空使用 *.workers.dev。KV 未绑定时配置仅内存生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（非邮箱），位于 Cloudflare 控制台「管理账户 → 帐户 API 令牌」；查询 401 时请检查这两项。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Telegram 用量通知</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>Bot Token</label><input type="text" id="q-tgtoken" placeholder="123456789:AAxxxx..." autocomplete="off"></div>
          <div class="field" style="margin:0"><label>Chat ID</label><input type="text" id="q-tgchat" placeholder="123456789" autocomplete="off"></div>
        </div>
        <p class="hint">填好后推送规则：80%、85%、90% 各提醒一次；90% 后每涨 1% 提醒一次（91-99）；达 99% 自动停用订阅（次日自动恢复）。需同时配置上方 Cloudflare 账户监控；停用与恢复不依赖 TG，通知依赖 TG。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 导出/导入全部面板设置（协议、优选、筛选、配额监控），可保存或迁移；导入后点「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>${o} — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">感谢以下开源项目的启发与支持（界面与代码均为独立实现）</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>开源项目</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">github.com/IonRh/Cloudflare-BestIP</a></td></tr>
            <tr><td>zvos/CF-Workers-Monitor</td><td><a href="https://github.com/zvos/CF-Workers-Monitor" target="_blank" rel="noopener">github.com/zvos/CF-Workers-Monitor</a></td></tr>
            <tr><td>MetaCubeX/meta-rules-dat</td><td><a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noopener">github.com/MetaCubeX/meta-rules-dat</a></td></tr>
            <tr><td>666OS/rules</td><td><a href="https://github.com/666OS/rules" target="_blank" rel="noopener">github.com/666OS/rules</a></td></tr>
            <tr><td>DustinWin/ruleset_geodata</td><td><a href="https://github.com/DustinWin/ruleset_geodata" target="_blank" rel="noopener">github.com/DustinWin/ruleset_geodata</a></td></tr>
            <tr><td>blackmatrix7/ios_rule_script</td><td><a href="https://github.com/blackmatrix7/ios_rule_script" target="_blank" rel="noopener">github.com/blackmatrix7/ios_rule_script</a></td></tr>
            <tr><td>TG-Twilight/AWAvenue-Ads-Rule</td><td><a href="https://github.com/TG-Twilight/AWAvenue-Ads-Rule" target="_blank" rel="noopener">github.com/TG-Twilight/AWAvenue-Ads-Rule</a></td></tr>
            <tr><td>Koolson/Qure</td><td><a href="https://github.com/Koolson/Qure" target="_blank" rel="noopener">github.com/Koolson/Qure</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.090227.xyz/ip.164746.xyz</td></tr>
            <tr><td>bestcf 地区优选池</td><td class="mono">bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/PAICNI/CFNext/...</td></tr>
            <tr><td>远程规则集（sing-box / Clash）</td><td class="mono">raw.githubusercontent.com/MetaCubeX/meta-rules-dat/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  updateFreeDomainWarn();
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.href = '/login?next=' + encodeURIComponent(APIPATH);
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
// 免费域名（*.workers.dev / *.pages.dev）大陆直连被阻断：命中即提示绑定自定义域名
function isFreeSubDomain(h){
  return /\.(workers\.dev|pages\.dev)$/i.test(String(h || ''));
}
function updateFreeDomainWarn(){
  var effHost = (CFG && CFG.host) ? String(CFG.host) : location.hostname;
  var wd = isFreeSubDomain(location.hostname) || isFreeSubDomain(effHost);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '节点 SNI / 订阅域名使用 *.pages.dev 或 *.workers.dev 免费域名：大陆直连会被阻断——订阅导入与更新需挂梯子，节点测延迟与连接可能全部失败。解决：Cloudflare 给本项目绑定自定义域名 → 「基础配置 → 绑定域名」填入并保存 → 用自定义域名打开面板重新复制订阅链接。'
    : '';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  updateFreeDomainWarn();
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enableVless !== false) a.push('VLESS');
  if (CFG.enableTrojan) a.push('Trojan');
  if (CFG.enableXhttp) a.push('XHTTP');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 500) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
  // 节点测活：开启 = 红字提醒（会误杀 CF 段精选池），关闭 = 绿字（推荐状态，对齐 V1.0.6）
  var pa = !!(CFG && CFG.probeAlive);
  $('qProbe').textContent = pa ? '已开启（剔除死节点，体感更快）' : '关闭（不测活，按 V1.x 原序下发）';
  $('qProbe').className = 'v ' + (pa ? 'warn' : 'ok');
  var lb = !(CFG && CFG.loadBalance === false);
  $('qLb').textContent = lb ? '已开启（随机轮换）' : '关闭（固定顺序）';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
  // IPv6 下发策略：'full'（旧行为）标黄提醒——v6 备胎会拖慢客户端逐节点测延迟
  var i6 = (CFG && CFG.ipv6Mode) || 'off';
  $('qIp6').textContent = i6 === 'full' ? '等权混合（旧行为）' : (i6 === 'tail' ? '仅备胎（≤10%，排尾部）' : '不下发');
  $('qIp6').className = 'v ' + (i6 === 'full' ? 'warn' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });  // URL 感知：含查询串逗号的 URL 整行保留，不按逗号切碎
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-vless').checked = CFG.enableVless !== false;
  $('en-trojan').checked = !!CFG.enableTrojan;
  $('tp-pass').value = CFG.trojanPassword || '';
  $('en-xhttp').checked = !!CFG.enableXhttp;
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var ip6 = CFG.ipv6Mode || 'off';
  $('ip6-off').checked = ip6 !== 'tail' && ip6 !== 'full';
  $('ip6-tail').checked = ip6 === 'tail';
  $('ip6-full').checked = ip6 === 'full';
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  $('o-fbpool').value = o.fallbackPool || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 500;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-clabel').value = CFG.countryLabel || '';
  $('q-lb-on').checked = CFG.loadBalance !== false;
  $('q-probe-on').checked = !!CFG.probeAlive;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('q-tgtoken').value = CFG.tgBotToken || '';
  $('q-tgchat').value = CFG.tgChatID || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('hw-on').checked = !!CFG.homeWan;
  $('s-proxyIP').value = CFG.proxyIP || '';
  $('s-outbound').value = CFG.outboundProxy || '';
  $('s-outmode').value = CFG.outboundMode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  // URL 感知收集：URL（含 ://）整行原样保留（查询串自带逗号不打碎，如 ?region=NL,GB,FI）；
  // 非 URL 行仍支持逗号/分号分隔多条 IP（兼容 "1.2.3.4:443#名, 5.6.7.8" 旧用法）
  String($('f-preferred').value).split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (s.indexOf('://') >= 0){ domLines.push(s); return; }
    s.split(/[;,]+/).map(function(x){ return x.trim(); }).filter(Boolean).forEach(function(x){
      if (parseIps(x).length) ipLines.push(x); else domLines.push(x);
    });
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    path: $('a-path').value.trim() || $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    host: $('a-host').value.trim(),
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 500,
    polling: $('q-poll-on').checked,
    countryLabel: $('q-clabel').value,
    loadBalance: $('q-lb-on').checked,
    ipv6Mode: $('ip6-tail').checked ? 'tail' : ($('ip6-full').checked ? 'full' : 'off'),
    probeAlive: $('q-probe-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    tgBotToken: $('q-tgtoken').value.trim(),
    tgChatID: $('q-tgchat').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    homeWan: $('hw-on').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      fallbackPool: $('o-fbpool').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = 'cfnext-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用面板路径。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（clash/singbox 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/sub$/, '').replace(/\/+$/, '') : '';
  var base = custom ? (location.origin + '/' + custom) : (location.origin + APIPATH);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// Clash/Mihomo、Stash → clash://install-config（FlyClash / Clash Verge / Stash 扫码装订阅，配置名取订阅响应头 filename=CFNext）
// Sing-box → sing-box://import-remote-profile?url=...#CFNext（官方 scheme，# 后为配置文件名称）
// Surge → surge:///install-config（Surge 官方 scheme）
// auto / v2rayN+Shadowrocket / Loon / Quantumult X / 明文 → 直接使用订阅链接（Shadowrocket / Loon / QuanX 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === 'clash' || fmt === 'stash') return 'clash://install-config?url=' + enc;
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#' + __B;
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  // 按格式给出默认保存名（服务端 Content-Disposition 优先；无 CD 场景兜底），带正确扩展名
  var names = { clash:__B+'.yaml', stash:__B+'.yaml', singbox:__B+'.json', surge:__B+'.conf', surfboard:__B+'.conf', loon:__B+'.conf', quanx:__B+'.conf' };
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = names[fmt] || __B+'.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/clash|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(vless|trojan|ss|xhttp):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(vless|trojan|ss|xhttp):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, name: c.name || '', ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      // 候选数量截断：自定义 URL 源可能拉取上千条候选（第三方优选 IP 文档动辄上千条），全量测速耗时过长；
      // 按「候选数量」只测前 N 条（可调高数值测更多），测速列表与「全部加入最优」均基于该子集
      var candSub = (o.count > 0 && cands.length > o.count) ? cands.slice(0, o.count) : cands;
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速前 ' + candSub.length + ' 条…', 'info');
      localTest(candSub, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  // 保留原节点名：防地区信息丢失导致订阅无国家显示；无名条目才编「优选N」
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + (r.name ? ('#' + r.name) : ('#优选' + (i + 1)))); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`;function an(t,e){const n=J;return!t[n(632)]&&!t.adminInit&&!(!e.K||n(358)!=typeof e.K.get)}function sn(t){const e=J;return H(String(t&&t.uuid||"")+"|rule")[e(560)](0,12)}function ln(t,e){const n=J;return!(!function(t){const e=J;return(t||"").toLowerCase()[e(213)]("mozilla")}(e)||!(t.headers[n(210)](n(172))||"").toLowerCase().includes(n(388))&&n(342)!==(t[n(816)][n(210)](n(411))||"")[n(542)]()&&!t.headers[n(210)]("Upgrade-Insecure-Requests"))}async function cn(t,e){const n=J;if(!e.admin)return!0;const r=(t.headers.get("Cookie")||"")[n(502)](new RegExp("(?:^|;\\s*)"+a+"=([^;]+)"));return!(!r||r[1]!==H(String(e.admin)))}const pn=new Map,dn={sub:{cap:30,burst:10,refillMs:6e4},panel:{cap:60,burst:20,refillMs:6e4}};function un(t,e){const n=J,r=dn[e];if(!r)return!0;const o=t[n(816)].get("CF-Connecting-IP")||t.headers[n(210)](n(840))||"";if(!o)return!0;const a=Date[n(398)]();pn.size>2e3&&pn.clear();const s=e+"|"+o;let i=pn.get(s);i||(i={tokens:r.cap,t:a},pn[n(390)](s,i));const l=Math[n(289)]((a-i.t)/r.refillMs);return l>0&&(i.tokens=Math.min(r.cap,i.tokens+l*r[n(253)]),i.t=i.t+l*r[n(433)]),!(i.tokens<=0||(i[n(224)]--,0))}function fn(){return hn()}function hn(){return new Response("Not Found",{status:404})}async function mn(t,e,n){const r=J;if(!t||!t.K||"function"!=typeof t.K[r(210)])return!0;try{const o=await t.K.get(e),a=o&&parseInt(JSON[r(183)](o).t,10)||0;if(a&&Date.now()-a<n)return!1;const s=t.K[r(913)](e,JSON.stringify({t:Date.now()}));return t[r(556)]&&"function"==typeof t._ctx[r(772)]?t[r(556)].waitUntil(s.catch(()=>{})):await s[r(352)](()=>{}),!0}catch(t){return!0}}export default{fetch:async(r,c,u)=>async function(t,r){const c=J;Qe=r;const u=new URL(t.url),f=t.headers[c(210)]("User-Agent")||"",b=(t.headers[c(210)]("Upgrade")||"")[c(542)]();if("http:"===u[c(478)])return Response.redirect(u.href.replace("http://","https://"),301);const y=await mt(r),x=y[c(732)]||y[c(781)],w=u.pathname[c(513)](/^\/+|\/+$/g,"").split("/");if("crules"===w[0]&&3===w[c(904)]&&w[1]===sn(y))return async function(t,e){const r=J,a=String(e||"")[r(513)](/\.(mrs|yaml|yml|txt|list)$/i,""),s=h[a];if(!s)return ht({ok:!1,msg:"unknown rule set"},404);const i=Date[r(398)](),l=m.get(a);if(l&&i-l.t<36e5)return v(l.buf,s.ct);if(t.K&&r(358)==typeof t.K[r(210)])try{const e=await t.K[r(210)]("crule:"+a,{type:r(683)});if(e&&e.byteLength)return m[r(390)](a,{t:i,buf:e}),v(e,s.ct)}catch(t){}let c=g[r(210)](a);if(!c){c=(async()=>{const e=J,r=await fe(s[e(940)],{headers:{"User-Agent":o+"/"+n,Accept:"*/*"}},2e4);if(!r.ok)throw new Error("upstream HTTP "+r[e(698)]);const i=await r[e(683)]();if(!i||!i[e(952)])throw new Error(e(818));if(t.K&&"function"==typeof t.K.put)try{await t.K.put("crule:"+a,i,{expirationTtl:Math[e(289)](86400)})}catch(t){}return m.set(a,{t:Date[e(398)](),buf:i}),i})(),g.set(a,c);const e=()=>g.delete(a);c[r(561)](e,e)}try{return v(await c,s.ct)}catch(t){return new Response("rule upstream error: "+(t.message||t),{status:502,headers:{"Retry-After":"3600"}})}}(r,decodeURIComponent(w[2]));if("login"===w[0]){const e=!y[c(632)]&&an(y,r);if(c(420)===t.method){const n=await t.text(),o=new URLSearchParams(n);if(e){const t=String(o[c(210)](c(569))||"");if(t[c(904)]<4)return ht({ok:!1,msg:"密码至少 4 位"},400);const e=JSON.parse(JSON[c(584)](y));if(e[c(632)]=t,e.adminInit=!0,!await gt(r,e))return ht({ok:!1,msg:c(459)},500);const n=H(t);return new Response(JSON.stringify({ok:!0,next:o.get("next")||"/"}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":a+"="+n+c(280)}})}if(o.get(c(569))===y.admin){const t=H(String(y[c(632)]));return new Response(JSON.stringify({ok:!0,next:o.get("next")||"/"}),{status:200,headers:{"Content-Type":c(281),"Set-Cookie":a+"="+t+c(280)}})}return ht({ok:!1,msg:c(965)},403)}return y[c(632)]?new Response(c(457),{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):e?new Response(c(412),{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):Response.redirect(new URL("/"+x,t[c(940)]).href,302)}const k=String(y[c(734)]||"")[c(919)]()[c(513)](/^\/+/,"").replace(/\/+$/,""),I=w[0]===x||!!k&&w[0]===k;if(""===w[0]&&ln(t,f))return Response[c(798)](new URL("/"+x,t.url).href,302);if(I&&1===w[c(904)]){if("websocket"===b)return Me(r,t.cf&&t.cf[c(737)]),async function(t,e){const n=J,r=new WebSocketPair,[o,a]=Object.values(r);try{a.accept({allowHalfOpen:!0})}catch(t){a.accept()}a[n(862)]=n(241);let s=null,i=null,l=!1,c=null,p=null,d=!1;const u=t=>{try{a.send(t)}catch(t){}},f=async(n,r)=>{const o=J;if(n&&n.byteLength&&(c=c?qt(c,n):n),!c)return;if(c.byteLength>65536)throw new Error("握手头超过 64KB，关闭连接");let h,m;try{let t=function(t,e){const n=J;if(!e[n(972)]||!t||t[n(952)]<58)return!1;const r=t[n(355)](0,56);if(q[n(205)](r).toLowerCase()===Tt(e.trojanPassword||e.uuid))return!0;if(13===t[56]&&10===t[57]){for(let t=0;t<56;t++){const e=r[t];if(!(e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70))return!1}return!0}return!1}(c,e);if(!t&&c.byteLength>0&&0!==c[0]&&c.byteLength<58)return;m=!t,h=t?function(t){const e=J;if(!t||t.byteLength<66)throw new Error("Trojan 头部过短");const n=new DataView(t[e(645)],t[e(317)],t.byteLength);let r=58;const o=n[e(554)](r);r+=1;const a=n.getUint8(r);let s,i;if(r+=1,1===a)s=n[e(554)](r)+"."+n.getUint8(r+1)+"."+n[e(554)](r+2)+"."+n[e(554)](r+3),i=4;else if(3===a){const o=n[e(554)](r);s=q.decode(t.subarray(r+1,r+1+o)),i=1+o}else{if(4!==a)throw new Error("无法识别的地址类型");s=at(t.subarray(r,r+16)),i=16}r+=i;const l=n[e(553)](r);return r+=2,r+=2,{command:o,port:l,addr:s,password:q[e(205)](t[e(355)](0,56)),headerLength:r}}(c):Pt(c)}catch(t){if(/头部过短/.test(t[o(387)]||""))return;throw t}!d&&m&&2!==h[o(723)]&&(d=!0,u(new Uint8Array([0,0])));const g=Qt(c[o(952)]>h.headerLength?c.subarray(h.headerLength):null);if("unknown"===g&&!r)return void(p||(p=setTimeout(()=>{p=null,f(new Uint8Array(0),!0).catch(t=>{const e=J;try{a[e(716)](1011,String(t&&t[e(387)]||t))}catch(t){}})},80)));if(p&&(clearTimeout(p),p=null),l)return;if(l=!0,2===h.command){try{const t=c[o(355)](h.headerLength);if(53===h.port&&t[o(952)]>=12){const e=await async function(t){const e=J;if(!t||t[e(952)]<17)return null;const n=new DataView(t.buffer,t[e(317)],t.byteLength),r=n.getUint16(0);if(32768&n[e(553)](2))return null;if(1!==n[e(553)](4))return null;let o=12,a=[];for(;o<t.byteLength;){const r=n.getUint8(o);if(0===r){o++;break}if(!(192&~r)){o+=2;break}if(o+1+r>t[e(952)])return null;a.push(q[e(205)](t[e(355)](o+1,o+1+r))),o+=1+r}if(o+4>t.byteLength||0===a[e(904)])return null;const s=n[e(553)](o),i=n.getUint16(o+2),l=o+4;if(1!==s&&28!==s)return null;const c=a.join("."),p=t.subarray(12,l);let d=null;for(const t of Et)try{const n=await fe(t+"?name="+encodeURIComponent(c)+e(349)+s,{headers:{accept:"application/dns-json"}},5e3);if(!n||!n.ok)continue;const r=await n[e(954)]();if(!r||0!==r[e(994)])continue;const o=(r.Answer||[]).filter(t=>t[e(565)]===s&&(1===t.type?ot(String(t.data)):/^[0-9a-fA-F:]+$/.test(String(t.data))));if(o[e(904)]){d=o;break}}catch(t){}if(!d)return null;const u=new Uint8Array(12),f=new DataView(u[e(645)]);f[e(577)](0,r),f.setUint16(2,33152),f[e(577)](4,1),f.setUint16(6,d.length);const h=[u,p];for(const t of d){const n=String(t[e(822)]),r=1===t.type?Uint8Array.from(n.split(".")[e(254)](Number)):Ut(n);if(r.length!==(1===t.type?4:16))continue;const o=new Uint8Array(10),a=new DataView(o.buffer);a.setUint16(0,49164),a[e(577)](2,t.type),a.setUint16(4,0===i?1:i),a[e(434)](6,Number(t[e(889)])||300),h[e(505)](o,new Uint8Array([r.length>>8&255,255&r[e(904)]]),r)}let m=0;h.forEach(t=>m+=t[e(952)]);const g=new Uint8Array(m);let v=0;for(const t of h)g[e(390)](t,v),v+=t[e(952)];return g}(t);e&&u(e)}}catch(t){}try{a[o(716)](1e3)}catch(t){}return}const v=await Yt(h,e,t.cf&&t.cf[o(737)],0,g);s=v,i=v[o(589)][o(964)](),v[o(226)]&&v[o(226)][o(952)]>0&&u(v[o(226)]),c&&c[o(952)]>h[o(476)]&&await i.write(c.subarray(h[o(476)])),c=null,async function(t,e,n){try{for(;;){const{done:n,value:r}=await t.read();if(n)break;e(r)}}catch(t){}try{n&&n()}catch(t){}}(v[o(572)][o(933)](),u,()=>{const t=J;try{a[t(716)](1e3)}catch(t){}})},h=function(t,e){const n=J;if(!t)return null;const r=String(t).trim();if(!r||r.length>8192)return null;if(!/^[A-Za-z0-9\-_+/=]+$/.test(r))return null;let o=null;try{const t=r[n(513)](/-/g,"+").replace(/_/g,"/"),e=t.length%4?"="[n(882)](4-t.length%4):"",a=atob(t+e);o=new Uint8Array(a.length);for(let t=0;t<a.length;t++)o[t]=a[n(800)](t)}catch(t){return null}if(!o[n(952)]||o.byteLength>6144)return null;if(o.byteLength>=17&&0===o[0]){const t=function(t){const e=J,n=String(t||"")[e(513)](/-/g,"");if(32!==n[e(904)])return null;const r=new Uint8Array(16);for(let t=0;t<16;t++){const e=parseInt(n.substr(2*t,2),16);if(isNaN(e))return null;r[t]=e}return r}(e.uuid);if(!t)return o;for(let e=0;e<16;e++)if(o[e+1]!==t[e])return null;return o}return e[n(972)]&&o.byteLength>=58&&13===o[56]&&10===o[57]&&q.decode(o.subarray(0,56)).toLowerCase()===Tt(e.trojanPassword||e.uuid)?o:null}(t[n(816)][n(210)](n(296)),e);h&&f(h)[n(352)](t=>{const e=J;try{a[e(716)](1011,String(t&&t[e(387)]||t))}catch(t){}}),a.addEventListener(n(387),async t=>{const e=J;try{const n="string"==typeof t.data?z.encode(t[e(822)]):new Uint8Array(t.data);l?i?await i.write(n):c=c?qt(c,n):n:await f(n)}catch(t){try{a.close(1011,String(t&&t.message||t))}catch(t){}}});const m=()=>{const t=J;if(p&&(clearTimeout(p),p=null),s){try{s[t(716)]()}catch(t){}s=null}};return a[n(351)](n(716),m),a.addEventListener("error",m),new Response(null,{status:101,webSocket:o})}(t,y);if(c(420)===t.method&&y.enableXhttp){Me(r,t.cf&&t.cf[c(737)]);try{return await async function(t,e){const n=J,r=t.body[n(933)](),o=await r.read();if(o.done)return new Response(n(938),{status:400});const a=Pt(o[n(622)]),s=await Yt(a,e,t.cf&&t.cf[n(737)],0,Qt(o.value.subarray(a[n(476)]))),i=s.writable.getWriter();await i.write(o[n(622)].subarray(a.headerLength)),(async()=>{const t=J;try{for(;;){const{done:e,value:n}=await r[t(570)]();if(e)break;await i.write(n)}}catch(t){}try{await i[t(716)]()}catch(t){}})();const l=new ReadableStream({async start(t){const e=J;t.enqueue(new Uint8Array([0,0])),s[e(226)]&&s[e(226)].byteLength>0&&t.enqueue(s[e(226)]);const n=s.readable.getReader();try{for(;;){const{done:r,value:o}=await n[e(570)]();if(r)break;t.enqueue(o)}}catch(t){}try{t.close()}catch(t){}try{s.close()}catch(t){}},cancel(){try{s.close()}catch(t){}}});return new Response(l,{status:200,headers:{"content-type":n(1e3),"x-accel-buffering":"no","cache-control":n(523)}})}(t,y)}catch(t){return ht({ok:!1,msg:c(876)+(t[c(387)]||t)},500)}}}if(I&&c(329)===w[1]){if(!un(t,"sub"))return fn();const e=w[c(904)]>=3?w[2]:"";try{if(r[c(556)]&&c(358)==typeof r._ctx.waitUntil)r._ctx.waitUntil(kt(r,y));else try{await kt(r,y)}catch(t){}if(y.quotaDisabled)return new Response(o+c(874),{status:403,headers:{"Content-Type":c(992)}});let n=null;if(!1!==y[c(216)]&&r.K&&"function"==typeof r.K.get)try{const t=await r.K.get(c(567));if(t){const e=JSON.parse(t);Array.isArray(e[c(957)])&&e[c(957)].length&&(n=new Set(e.ips))}}catch(t){}const a=n?Object[c(688)]({},y,{_skipIssued:n}):y;if(y.quotaAuto)try{const t=await It(r,y);if(t.configured&&t.today&&t[c(383)].requests>=Math[c(573)](6e4)){const e=t[c(383)][c(581)]/t[c(931)],n=Math[c(646)](.1,(1-e)/.4);a[c(509)]=Math.max(20,Math.round(1e3*n))}}catch(t){}const s=await rn(a,t[c(940)],e,f,t.cf&&t.cf.colo,t.cf&&t.cf[c(269)],r);if(!1!==y.polling&&r.K&&c(358)==typeof r.K.put&&s.issued&&s.issued.length){const t=n?Array[c(762)](n):[],e=[...new Set([...s.issued,...t])].slice(0,200);if((e[c(904)]!==t[c(904)]||e[c(231)]((e,n)=>e!==t[n]))&&Date.now()-tt>=3e4){tt=Date.now();const t=JSON[c(584)]({t:Date.now(),ips:e});r[c(556)]&&"function"==typeof r[c(556)][c(772)]?r[c(556)].waitUntil(r.K.put("issued",t)[c(352)](()=>{})):await r.K.put(c(567),t).catch(()=>{})}}const i={clash:o+c(598),stash:o+c(598),singbox:o+".json",surge:o+".conf",surfboard:o+c(325),loon:o+c(325),quanx:o+".conf"}[e]||o+".txt";return new Response(s[c(315)],{status:200,headers:{"Content-Type":s[c(565)]+"; charset=utf-8","Cache-Control":c(523),"Content-Disposition":'attachment; filename="'+i+c(274)+i}})}catch(t){return new Response(c(918)+(t&&t[c(387)]||t),{status:500,headers:{"Content-Type":c(992)}})}}if(I&&1===w[c(904)]&&ln(t,f))return un(t,c(924))?an(y,r)?Response.redirect(new URL("/login?setup=1&next="+encodeURIComponent("/"+x),t[c(940)]).href,302):await cn(t,y)?new Response(on,{status:200,headers:{"Content-Type":c(474)}}):Response.redirect(new URL("/login?next="+encodeURIComponent("/"+x),t[c(940)]).href,302):fn();if(I&&c(601)===w[1]){if(!un(t,c(924)))return fn();const o=w[2]||"";if(an(y,r))return ln(t,f)?ht({ok:!1,status:403,msg:c(852)},403):hn();if(!await cn(t,y))return ln(t,f)?ht({ok:!1,status:403,msg:c(312)},403):hn();if(c(776)===o){if("GET"===t[c(335)])return ht({ok:!0,data:Object[c(688)]({},y,{version:n})});if("POST"===t.method)try{const e=await t.json();let o=!1;if(r.K&&c(358)==typeof r.K.get)try{const t=await r.K[c(210)]("config",{cacheTtl:30});t&&void 0!==JSON.parse(t)[c(968)]&&(o=!0)}catch(t){}const a=Object.assign(JSON.parse(JSON.stringify(y)),e);o||!1!==a.quotaAuto||Boolean(a[c(520)]&&a[c(506)]||r[c(647)]&&r.CF_API_TOKEN)&&(a.quotaAuto=!0),e[c(958)]&&"object"==typeof e.optimizer&&(a[c(958)]=Object[c(688)](a.optimizer,e.optimizer)),e[c(270)]&&Array.isArray(e[c(270)])&&(a.preferredIPs=e[c(270)]),await gt(r,a);const s=await mt(r,t.url);return ht({ok:!0,data:Object.assign({},s,{version:n}),msg:"已保存并生效"})}catch(t){return ht({ok:!1,msg:"保存失败: "+(t.message||t)},500)}}if("reset"===o){if(c(420)!==t.method)return ht({ok:!1,msg:c(892)},405);try{return r.K&&c(358)==typeof r.K.delete?(await r.K[c(773)]("config"),await r.K.delete("issued"),ht({ok:!0,msg:"已重置：KV 已清空，面板还原为初始部署状态"})):ht({ok:!1,msg:"未绑定 KV 命名空间，无需重置"},400)}catch(t){return ht({ok:!1,msg:c(364)+(t.message||t)},500)}}if(c(698)===o)return ht({ok:!0,data:{version:n,kind:c(878)===s()?c(811):"明文版",host:u.hostname,path:x,region:t.cf&&t.cf[c(737)]||"unknown",visitorCountry:t.cf&&t.cf[c(269)]||"",usageColo:await Oe(r),kv:!(!r.K||c(358)!=typeof r.K.get),workersDev:/\.workers\.dev$/i[c(151)](u.hostname)}});if(c(201)===o)try{const t=await async function(){const t=J,e=Date.now();if(l&&e-l.t<6e4)return l.r;const r=t(878)===s()?"混淆":"明文";let o=null,a="",c="";const u="https://raw.githubusercontent.com/"+i+t(204)+encodeURIComponent(t(444));try{const e=await fetch(u,{headers:{"User-Agent":t(795)}});if(e.ok){const n=d(await e[t(986)]());n&&(o=n)}}catch(e){c=e&&e[t(387)]||String(e)}if(o){const s="https://raw.githubusercontent.com/"+i+t(204)+encodeURIComponent("混淆"===r?t(499):"CFNext 明文版.js");try{const e=await fetch(s,{headers:{"User-Agent":"Mozilla/5.0 (CFNext)"}});e.ok&&(a=await e[t(986)]())}catch(t){}return l={t:e,r:{current:n,kind:r,latest:o,hasUpdate:p(o,n)>0,code:a,checkedAt:e}},l.r}const f=t(543)+i+"/main/"+encodeURIComponent("CFNext 混淆版.js");try{const e=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (CFNext)"}});if(e.ok){const n=d(await e[t(986)]());n&&(o=n)}}catch(t){c=t&&t.message||String(t)}return o?(l={t:e,r:{current:n,kind:r,latest:o,hasUpdate:p(o,n)>0,code:"",checkedAt:e}},l.r):{current:n,kind:r,latest:null,hasUpdate:!1,code:"",error:c||t(792)}}(),e={current:t[c(176)],latest:t[c(944)],hasUpdate:t[c(199)],kind:t.kind,error:t.error||""};return t.hasUpdate&&t[c(451)]&&(e.code=t.code),ht({ok:!0,data:e})}catch(t){return ht({ok:!1,msg:"检测失败: "+(t[c(387)]||t)},500)}if(c(799)===o)try{return ht({ok:!0,data:await It(r,y)})}catch(t){return ht({ok:!1,msg:"查询失败: "+(t.message||t)},500)}if("sub"===o){const e=u[c(671)].get("fmt")||"";try{const n=await rn(y,t[c(940)],e,f,t.cf&&t.cf[c(737)],t.cf&&t.cf[c(269)],r);return ht({ok:!0,type:n[c(565)],body:n.body})}catch(t){return ht({ok:!1,msg:"订阅生成失败: "+(t[c(387)]||t)},500)}}if(c(890)===o){if("POST"!==t[c(335)])return ht({ok:!1,msg:c(892)},405);try{const e=await t.json().catch(()=>({})),n=await re(Object.assign({},y.optimizer,e));if(!n.candidates[c(904)]){const t=n.stats||{},e=[t.presetErr&&c(937)+t[c(896)],t.customErr&&c(252)+t[c(605)]].filter(Boolean)[c(384)]("；");return ht({ok:!1,msg:"没有可测的 IP"+(e?"（"+e+"）":"，请换一个数据源")},400)}return ht({ok:!0,data:n.candidates,stats:n[c(614)]})}catch(t){return ht({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}if(c(741)===o)try{const t=u.searchParams.get(c(269))||"",n=u[c(671)].get("proto")||c(279),r=await W(t);if(!r.length)return ht({ok:!1,msg:"VPN Gate 列表为空（可能被限流，请稍后重试）"},400);const o=r[c(560)](0,30),a=await Xe(o,t=>{const n=J,r=String(X(V(t[n(993)])).remote||"")[n(192)](/\s+/),o=parseInt(r[1],10)||0;return o?async function(t,n){const r=J,o=Date.now();try{const a=e({hostname:t,port:n});await Promise[r(399)]([a.opened,new Promise((t,e)=>setTimeout(()=>e(new Error(r(681))),2e3))]);const s=Date[r(398)]()-o;try{a.close()}catch(t){}return{ok:!0,delay:s}}catch(t){return{ok:!1,delay:-1}}}(t.ip,o):{ok:!1,delay:-1}}),s=o[c(254)]((t,e)=>{const r=J,o=X(V(t[r(993)])),s=String(o[r(627)]||"")[r(192)](/\s+/),i=parseInt(s[1],10)||443;return{host:t[r(426)],ip:t.ip,port:i,tcp:i,udp:i,speed:t[r(227)],ping:t.ping,country:t[r(269)],proto:o[r(566)]||n,ovpn:o,alive:!(!a[e]||!a[e].ok),delay:a[e]&&a[e].ok?a[e][r(970)]:-1}});return s.sort((t,e)=>(e.alive?1:0)-(t[c(951)]?1:0)||(e[c(227)]||0)-(t[c(227)]||0)),ht({ok:!0,data:s,proto:n})}catch(t){return ht({ok:!1,msg:"VPN Gate 拉取失败: "+(t[c(387)]||t)},500)}if(c(308)===o)try{const t=await mt(r),e=await rt(r,t,!0);return ht({ok:!0,data:e,count:e.length})}catch(t){return ht({ok:!1,msg:"VPN Gate 刷新失败: "+(t.message||t)},500)}if(c(304)===o)try{const t=F[u.searchParams.get("source")||c(694)]||F[c(694)],e=await fetch(t[c(940)],{headers:{"User-Agent":"Mozilla/5.0"}});return e.ok?ht({ok:!0,data:function(t){const e=J,n=new Set,r=[],o=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let a;for(;a=o[e(999)](t);){const t=a[0][e(542)]();!n[e(860)](t)&&(t[e(213)]("cloudflare")||t.includes("bestcf")||t[e(213)]("182682")||t.includes(e(777))||t[e(406)](e(407))||t.endsWith(e(939)))&&(n.add(t),r.push(t))}return r.slice(0,10)}(await e[c(986)]())}):ht({ok:!1,msg:c(829)+e.status})}catch(t){return ht({ok:!1,msg:c(879)+(t[c(387)]||t)},500)}}return hn()}(r,Object[t(688)]({},c,{_ctx:u})),scheduled:async(t,e,n)=>async function(t,e){const n=J;Qe=e;const r=String(e.HOME_WAN_AUTO||"").toLowerCase();if("1"===r||n(403)===r)try{if(await mn(e,n(724),9e5)){const t=await mt(e);t.homeWan&&await rt(e,t,!0)}}catch(t){}const o=String(e[n(365)]||"")[n(542)]();if("1"===o||"true"===o)try{await mn(e,n(413),18e5)&&await async function(t){const e=J,n=await mt(t),r=(await re(n.optimizer)).candidates||[];if(!r[e(904)])return{ok:!1,msg:e(687)};const o=(await async function(t,e,n){const r=J;e=Math.max(1,Math[r(797)](50,Number(e)||5)),n=Math.max(500,Number(n)||5e3);const o=[];let a=0;return await Promise.all(Array.from({length:e},async function(){const e=J;for(;a<t[e(904)];){const r=t[a++],s=await oe(r.ip,r.port,n);o[e(505)](s)}})),o[r(770)]((t,e)=>(t.latency<0?1e9:t[r(514)])-(e[r(514)]<0?1e9:e.latency)),o}(r,n.optimizer[e(496)]||5,5e3)).filter(t=>t.ok)[e(560)](0,n[e(958)].count||20);if(!o.length)return{ok:!1,msg:"测速无可用 IP"};const a=o.map(t=>({ip:t.ip,port:t[e(660)]||443,name:""})),s=new Set((n.preferredIPs||[])[e(254)](t=>t.ip)),i=new Set(a[e(254)](t=>t.ip)),l=!(s.size===i[e(950)]&&[...i][e(969)](t=>s.has(t)));l&&(n[e(270)]=a,await gt(t,n));try{await kt(t,n)}catch(t){}return{ok:!0,changed:l,count:a.length}}(e)}catch(t){}}(0,e)};