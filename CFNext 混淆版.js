const _0x34b348=_0x2664;(function(_0x5c0da3,_0x43c3df){const _0x2cd896=_0x2664,_0x5e1b65=_0x5c0da3();while(!![]){try{const _0x1041f1=-parseInt(_0x2cd896(0x129))/0x1+parseInt(_0x2cd896(0x426))/0x2*(parseInt(_0x2cd896(0x2c4))/0x3)+parseInt(_0x2cd896(0x259))/0x4*(parseInt(_0x2cd896(0x11c))/0x5)+-parseInt(_0x2cd896(0x1e0))/0x6+-parseInt(_0x2cd896(0x292))/0x7+parseInt(_0x2cd896(0x2f8))/0x8*(-parseInt(_0x2cd896(0x1ce))/0x9)+parseInt(_0x2cd896(0x355))/0xa;if(_0x1041f1===_0x43c3df)break;else _0x5e1b65['push'](_0x5e1b65['shift']());}catch(_0x139930){_0x5e1b65['push'](_0x5e1b65['shift']());}}}(_0x395a,0x1d73a));const _0x10b405=(function(){let _0x21ffb2=!![];return function(_0xb26f58,_0x2414fa){const _0x1c092a=_0x21ffb2?function(){const _0x33ebb7=_0x2664;if(_0x2414fa){const _0x33dd98=_0x2414fa[_0x33ebb7(0x29f)](_0xb26f58,arguments);return _0x2414fa=null,_0x33dd98;}}:function(){};return _0x21ffb2=![],_0x1c092a;};}()),_0x125329=_0x10b405(this,function(){const _0x185c1d=_0x2664;return _0x125329[_0x185c1d(0x24f)]()[_0x185c1d(0x306)]('(((.+)+)+)+$')[_0x185c1d(0x24f)]()[_0x185c1d(0x20c)](_0x125329)[_0x185c1d(0x306)](_0x185c1d(0x1de));});_0x125329();const _0x13ad9f=(function(){let _0x430ee8=!![];return function(_0xc8a4a6,_0xe1bddf){const _0x480672=_0x430ee8?function(){const _0xc31154=_0x2664;if(_0xe1bddf){const _0x546387=_0xe1bddf[_0xc31154(0x29f)](_0xc8a4a6,arguments);return _0xe1bddf=null,_0x546387;}}:function(){};return _0x430ee8=![],_0x480672;};}()),_0x57710c=_0x13ad9f(this,function(){const _0xe0803=_0x2664;let _0x2c6559;try{const _0x492d84=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2c6559=_0x492d84();}catch(_0xe11cd2){_0x2c6559=window;}const _0x294ab9=_0x2c6559[_0xe0803(0x14b)]=_0x2c6559[_0xe0803(0x14b)]||{},_0x190161=['log',_0xe0803(0x260),'info',_0xe0803(0x34f),_0xe0803(0x2b8),'table',_0xe0803(0x211)];for(let _0x5ec950=0x0;_0x5ec950<_0x190161['length'];_0x5ec950++){const _0x1628c2=_0x13ad9f[_0xe0803(0x20c)][_0xe0803(0x197)][_0xe0803(0x1bb)](_0x13ad9f),_0x5bf0c4=_0x190161[_0x5ec950],_0x20f18b=_0x294ab9[_0x5bf0c4]||_0x1628c2;_0x1628c2[_0xe0803(0x1b3)]=_0x13ad9f['bind'](_0x13ad9f),_0x1628c2[_0xe0803(0x24f)]=_0x20f18b[_0xe0803(0x24f)][_0xe0803(0x1bb)](_0x20f18b),_0x294ab9[_0x5bf0c4]=_0x1628c2;}});_0x57710c();import{connect}from'cloudflare:sockets';const VERSION=_0x34b348(0x35c),DEPLOY_EDITION='混淆版';function deployKind(){const _0x37e791=_0x34b348;try{return DEPLOY_EDITION===_0x37e791(0x326)?_0x37e791(0x297):'plain';}catch(_0x2fdea8){return _0x37e791(0x29e);}}const UPDATE_REPO=_0x34b348(0x3a0);let UPDATE_CACHE=null;function parseVer(_0x2efb48){const _0x3d4b13=_0x34b348,_0xc40c01=String(_0x2efb48||'')[_0x3d4b13(0x178)](/(\d+)\.(\d+)\.(\d+)/);return _0xc40c01?[parseInt(_0xc40c01[0x1],0xa),parseInt(_0xc40c01[0x2],0xa),parseInt(_0xc40c01[0x3],0xa)]:null;}function cmpVer(_0x7dde53,_0x5addfa){const _0x1cab81=parseVer(_0x7dde53),_0x5040f8=parseVer(_0x5addfa);if(!_0x1cab81||!_0x5040f8)return 0x0;for(let _0x25135a=0x0;_0x25135a<0x3;_0x25135a++){if(_0x1cab81[_0x25135a]!==_0x5040f8[_0x25135a])return _0x1cab81[_0x25135a]<_0x5040f8[_0x25135a]?-0x1:0x1;}return 0x0;}function extractVersion(_0x5b8371){const _0x341317=_0x5b8371['match'](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x341317?_0x341317[0x1]:null;}async function checkUpdate(_0x1a22f2){const _0x107abc=_0x34b348,_0x1bcc44=Date[_0x107abc(0x1c9)]();if(UPDATE_CACHE&&_0x1bcc44-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x51fa19=deployKind()===_0x107abc(0x297)?'混淆':'明文';let _0xcf89f6=null,_0x530fbe='',_0x2ed632='';const _0x1c3839=_0x107abc(0x36d)+UPDATE_REPO+_0x107abc(0x1ac)+encodeURIComponent(_0x107abc(0x2bd));try{const _0xf74e1f=await fetch(_0x1c3839,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0xf74e1f['ok']){const _0x45acf0=await _0xf74e1f[_0x107abc(0x25e)](),_0x2194c8=extractVersion(_0x45acf0);if(_0x2194c8)_0xcf89f6=_0x2194c8;}}catch(_0x90b6d5){_0x2ed632=_0x90b6d5&&_0x90b6d5[_0x107abc(0x287)]||String(_0x90b6d5);}if(_0xcf89f6){const _0x5321d4=_0x51fa19==='混淆'?'CFNext\x20混淆版.js':_0x107abc(0x2bd),_0x1ebc95=_0x107abc(0x36d)+UPDATE_REPO+_0x107abc(0x1ac)+encodeURIComponent(_0x5321d4);try{const _0xc9fee1=await fetch(_0x1ebc95,{'headers':{'User-Agent':_0x107abc(0x3cd)}});if(_0xc9fee1['ok'])_0x530fbe=await _0xc9fee1[_0x107abc(0x25e)]();}catch(_0x494c20){}return UPDATE_CACHE={'t':_0x1bcc44,'r':{'current':VERSION,'kind':_0x51fa19,'latest':_0xcf89f6,'hasUpdate':cmpVer(_0xcf89f6,VERSION)>0x0,'code':_0x530fbe,'checkedAt':_0x1bcc44}},UPDATE_CACHE['r'];}const _0x21485d=_0x107abc(0x36d)+UPDATE_REPO+_0x107abc(0x1ac)+encodeURIComponent(_0x107abc(0x14e));try{const _0x2b8bf4=await fetch(_0x21485d,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x2b8bf4['ok']){const _0x258abe=await _0x2b8bf4[_0x107abc(0x25e)](),_0x49e6e4=extractVersion(_0x258abe);if(_0x49e6e4)_0xcf89f6=_0x49e6e4;}}catch(_0x427103){_0x2ed632=_0x427103&&_0x427103[_0x107abc(0x287)]||String(_0x427103);}if(_0xcf89f6)return UPDATE_CACHE={'t':_0x1bcc44,'r':{'current':VERSION,'kind':_0x51fa19,'latest':_0xcf89f6,'hasUpdate':cmpVer(_0xcf89f6,VERSION)>0x0,'code':'','checkedAt':_0x1bcc44}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x51fa19,'latest':null,'hasUpdate':![],'code':'','error':_0x2ed632||_0x107abc(0x213)};}const CLASH_TEMPLATE=_0x34b348(0x1c8),CLOUDFLARE_CIDRS=[_0x34b348(0x216),'103.21.244.0/22',_0x34b348(0x227),'103.31.4.0/22','141.101.64.0/18',_0x34b348(0x2cb),_0x34b348(0x3c1),_0x34b348(0x27e),_0x34b348(0x40a),'198.41.128.0/17','162.158.0.0/15','104.16.0.0/13',_0x34b348(0x1b7),'172.64.0.0/13','131.0.72.0/22'],REACHABLE_CIDRS=[_0x34b348(0x1ef),_0x34b348(0x1b7),_0x34b348(0x132),'162.158.0.0/15',_0x34b348(0x27e)],CLOUDFLARE_CIDRS_V6=[_0x34b348(0x2b4),'2606:4700::/32',_0x34b348(0x113),_0x34b348(0x2ed),'2405:8100::/32',_0x34b348(0x403),_0x34b348(0x1aa)],REACHABLE_CIDRS_V6=[_0x34b348(0x3a6),_0x34b348(0x2b4),_0x34b348(0x113),_0x34b348(0x403),_0x34b348(0x1aa)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6[_0x34b348(0x1ab)](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0x190944=_0x34b348,_0x4786d6=Date[_0x190944(0x1c9)]();if(OFFICIAL_V6_CIDRS_T&&_0x4786d6-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x5d69e0=await fetch('https://www.cloudflare.com/ips-v6/',{'signal':AbortSignal[_0x190944(0x201)](0x2710)});if(!_0x5d69e0['ok'])return;const _0x3e4f4d=await _0x5d69e0['text'](),_0x8618eb=String(_0x3e4f4d)[_0x190944(0x208)]('\x0a')[_0x190944(0x17e)](_0xec4515=>_0xec4515[_0x190944(0x1d1)]())[_0x190944(0x3ff)](_0x26899f=>/^[0-9a-fA-F:.]+\/\d+$/[_0x190944(0x421)](_0x26899f)&&_0x26899f[_0x190944(0x343)](':')>=0x0);_0x8618eb[_0x190944(0x26b)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x8618eb,OFFICIAL_V6_CIDRS_T=_0x4786d6);}catch(_0x52a2d3){}}function ipInCidrV6(_0x4b0ee5,_0xc4900d){const _0x1fcdd9=_0x34b348,[_0x53e57a,_0x2adb72]=_0xc4900d[_0x1fcdd9(0x208)]('/'),_0x31e194=parseInt(_0x2adb72,0xa),_0x4637f9=_0x286a8b=>{const _0x25220e=_0x1fcdd9,_0x490819=_0x286a8b[_0x25220e(0x343)]('::');let _0xb73bda;if(_0x490819>=0x0){const _0x2b5646=_0x286a8b[_0x25220e(0x1ab)](0x0,_0x490819)['split'](':')[_0x25220e(0x3ff)](Boolean),_0x5d880a=_0x286a8b[_0x25220e(0x1ab)](_0x490819+0x2)['split'](':')[_0x25220e(0x3ff)](Boolean),_0xe0327e=0x8-_0x2b5646[_0x25220e(0x26b)]-_0x5d880a[_0x25220e(0x26b)];_0xb73bda=[..._0x2b5646,...Array(_0xe0327e)[_0x25220e(0x3a2)]('0'),..._0x5d880a];}else _0xb73bda=_0x286a8b[_0x25220e(0x208)](':');return _0xb73bda[_0x25220e(0x17e)](_0x5186af=>_0x5186af[_0x25220e(0x2bf)](0x4,'0'));},_0x63edb2=_0x3e5f9a=>_0x3e5f9a[_0x1fcdd9(0x17e)](_0x17dcb6=>parseInt(_0x17dcb6,0x10)[_0x1fcdd9(0x24f)](0x2)[_0x1fcdd9(0x2bf)](0x10,'0'))['join']('');return _0x63edb2(_0x4637f9(_0x4b0ee5))[_0x1fcdd9(0x1ab)](0x0,_0x31e194)===_0x63edb2(_0x4637f9(_0x53e57a))['slice'](0x0,_0x31e194);}function isCloudflareIP(_0x30c979){const _0x1eeb47=_0x34b348;_0x30c979=String(_0x30c979||'');if(!isValidIp(_0x30c979))return![];if(_0x30c979[_0x1eeb47(0x343)](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x1eeb47(0x1c5)](_0x23405f=>ipInCidrV6(_0x30c979,_0x23405f));const _0x2d3d70=_0x30c979['split']('.')[_0x1eeb47(0x17e)](Number),_0x5d4ff4=(_0x2d3d70[0x0]<<0x18|_0x2d3d70[0x1]<<0x10|_0x2d3d70[0x2]<<0x8|_0x2d3d70[0x3])>>>0x0;return CLOUDFLARE_RANGES[_0x1eeb47(0x1c5)](([_0x1a9446,_0xbc4b99])=>_0x5d4ff4>=_0x1a9446&&_0x5d4ff4<=_0xbc4b99);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':_0x34b348(0x22e),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x34b348(0x357),'AU':_0x34b348(0x2b5),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':_0x34b348(0x38e),'ES':_0x34b348(0x17f),'PT':'葡萄牙','IE':_0x34b348(0x133),'BE':_0x34b348(0x1a9),'AT':_0x34b348(0x3a8),'PL':'波兰','CZ':'捷克','RO':_0x34b348(0x3d8),'HU':_0x34b348(0x139),'GR':'希腊','RU':_0x34b348(0x146),'TR':'土耳其','UA':'乌克兰','IN':'印度','TH':'泰国','MY':'马来西亚','VN':'越南','PH':'菲律宾','ID':'印尼','BR':'巴西','MX':_0x34b348(0x46b),'AR':_0x34b348(0x169),'CL':'智利','ZA':'南非','EG':'埃及','AE':_0x34b348(0x418),'IL':'以色列','NZ':_0x34b348(0x143),'KZ':'哈萨克斯坦','SA':'沙特'},DEFAULT_REGION_POOLS=[_0x34b348(0x3ba),_0x34b348(0x144),_0x34b348(0x3b8),'https://bestcf.pages.dev/random-region/SG/100.txt',_0x34b348(0x3aa),_0x34b348(0x199)][_0x34b348(0x318)]('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x24ab6a){const _0x243de1=_0x34b348;return TRUSTED_REGION_POOL_RE[_0x243de1(0x421)](String(_0x24ab6a||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':'cloudflare-ech.com','echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'probeAlive':![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x34b348(0x37f),'preferredIPs':[],'optimizer':{'source':_0x34b348(0x13d),'sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':'all','ipType':[_0x34b348(0x204),_0x34b348(0x417)],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[_0x34b348(0x3e1),_0x34b348(0x3e8),'speed.cloudflare.com'],BUILTIN_STABLE_IPS=[_0x34b348(0x1a5),_0x34b348(0x40b),_0x34b348(0x19a),_0x34b348(0x365),_0x34b348(0x315),_0x34b348(0x1a1),_0x34b348(0x265),_0x34b348(0x435),_0x34b348(0x29a),_0x34b348(0x22d),_0x34b348(0x183),_0x34b348(0x36b),_0x34b348(0x231),_0x34b348(0x382),_0x34b348(0x234),'104.21.2.1','104.24.12.10','104.25.0.1','104.26.1.1',_0x34b348(0x280)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x34b348(0x3ba),'count':0xc},{'label':'日本','region':'JP','url':_0x34b348(0x3b8),'count':0xc},{'label':'美国','region':'US','url':_0x34b348(0x3aa),'count':0xc},{'label':'新加坡','region':'SG','url':_0x34b348(0x1ca),'count':0xc},{'label':'台湾','region':'TW','url':'https://bestcf.pages.dev/random-region/TW/100.txt','count':0xc}],BUILTIN_PREFERRED_IPS=[_0x34b348(0x2e8),_0x34b348(0x18e),_0x34b348(0x26c),_0x34b348(0x28e),'104.16.126.96#优选IP-005',_0x34b348(0x249),_0x34b348(0x25c),_0x34b348(0x38c),'104.16.249.249#优选IP-009','162.159.0.1#优选IP-010',_0x34b348(0x15c),'104.17.24.252#优选IP-012','188.114.99.52#优选IP-013',_0x34b348(0x2ca),'162.159.5.175#优选IP-015',_0x34b348(0x1e8),_0x34b348(0x114),'104.17.234.5#优选IP-018','104.16.245.187#优选IP-019',_0x34b348(0x310),_0x34b348(0x43e),_0x34b348(0x12b),'104.18.40.93#优选IP-023',_0x34b348(0x1bf),'104.18.47.234#优选IP-025','104.18.42.54#优选IP-026',_0x34b348(0x346),'172.64.146.15#优选IP-028',_0x34b348(0x43c),_0x34b348(0x233),_0x34b348(0x358),'162.159.44.214#优选IP-032',_0x34b348(0x324),_0x34b348(0x24c),_0x34b348(0x375),_0x34b348(0x463),_0x34b348(0x170),_0x34b348(0x3c5),_0x34b348(0x37d),_0x34b348(0x272),_0x34b348(0x2de),_0x34b348(0x45a),_0x34b348(0x258),_0x34b348(0x3b3),_0x34b348(0x449),_0x34b348(0x16b),_0x34b348(0x447),_0x34b348(0x2b7),_0x34b348(0x247),_0x34b348(0x2d8),_0x34b348(0x164),'104.18.176.111#优选IP-052','104.25.122.6#优选IP-053',_0x34b348(0x46c),_0x34b348(0x1cd),_0x34b348(0x460),_0x34b348(0x251),_0x34b348(0x3c6),'104.25.143.238#优选IP-059',_0x34b348(0x2e4),_0x34b348(0x397),_0x34b348(0x12f),_0x34b348(0x3ca),_0x34b348(0x3f0),_0x34b348(0x217),_0x34b348(0x21d),_0x34b348(0x1cb),'104.18.84.180#优选IP-068',_0x34b348(0x1b5),_0x34b348(0x351),_0x34b348(0x1bd),_0x34b348(0x458),_0x34b348(0x2d0),_0x34b348(0x30a),_0x34b348(0x240),_0x34b348(0x13c),_0x34b348(0x37e),'104.21.61.179#优选IP-078',_0x34b348(0x277),'188.114.98.53#优选IP-080','172.65.145.187#优选IP-081',_0x34b348(0x171),_0x34b348(0x395),_0x34b348(0x2a9),_0x34b348(0x448),_0x34b348(0x32d),_0x34b348(0x1fd),_0x34b348(0x1c0),_0x34b348(0x1fc),_0x34b348(0x35f),'104.17.13.179#优选IP-091',_0x34b348(0x282),'104.16.0.133#优选IP-093',_0x34b348(0x294),_0x34b348(0x333),'104.19.115.243#优选IP-096',_0x34b348(0x29c),'104.27.207.36#优选IP-098',_0x34b348(0x206),_0x34b348(0x3b6),'104.27.113.151#优选IP-101',_0x34b348(0x2af),_0x34b348(0x212),_0x34b348(0x322),_0x34b348(0x2c8),_0x34b348(0x41e),'172.64.233.36#优选IP-107',_0x34b348(0x2ab),_0x34b348(0x2d3),'104.19.106.1#优选IP-110','104.27.72.4#优选IP-111',_0x34b348(0x340),'172.65.162.213#优选IP-113','172.67.255.83#优选IP-114','172.67.189.246#优选IP-115',_0x34b348(0x23b),'162.159.197.16#优选IP-117',_0x34b348(0x3d7),_0x34b348(0x2da),_0x34b348(0x28d),_0x34b348(0x12d),_0x34b348(0x123),'104.24.184.158#优选IP-123','188.114.97.52#优选IP-124',_0x34b348(0x3f1),'104.25.93.154#优选IP-126',_0x34b348(0x255),_0x34b348(0x33d),'104.27.94.231#优选IP-129','104.24.168.96#优选IP-130',_0x34b348(0x1d9),_0x34b348(0x2d1),_0x34b348(0x17a),_0x34b348(0x2ef),_0x34b348(0x2a5),_0x34b348(0x42c),'172.67.229.44#优选IP-137',_0x34b348(0x220),_0x34b348(0x422),'104.25.161.217#优选IP-140',_0x34b348(0x339),'172.67.161.136#优选IP-142','104.17.99.0#优选IP-143',_0x34b348(0x179),_0x34b348(0x2ac),_0x34b348(0x19b),_0x34b348(0x31e),_0x34b348(0x175),_0x34b348(0x131),_0x34b348(0x3da),_0x34b348(0x1dd),_0x34b348(0x2b6),_0x34b348(0x1b9),_0x34b348(0x3f9),'104.16.218.231#优选IP-155',_0x34b348(0x32f),'162.159.143.225#优选IP-157',_0x34b348(0x2b9),'104.25.166.112#优选IP-159',_0x34b348(0x3d5),_0x34b348(0x364),_0x34b348(0x44f),'104.16.11.246#优选IP-163',_0x34b348(0x26e),_0x34b348(0x2eb),_0x34b348(0x336),_0x34b348(0x431),_0x34b348(0x26f),_0x34b348(0x348),_0x34b348(0x2fe),'188.114.96.64#优选IP-171','104.18.18.214#优选IP-172',_0x34b348(0x3fb),'104.17.153.58#优选IP-174',_0x34b348(0x2a4),_0x34b348(0x275),_0x34b348(0x443),'104.27.195.79#优选IP-178',_0x34b348(0x261),'104.25.129.238#优选IP-180','172.65.3.67#优选IP-181',_0x34b348(0x392),_0x34b348(0x3de),_0x34b348(0x453),_0x34b348(0x40d),_0x34b348(0x151),_0x34b348(0x2b1),_0x34b348(0x298),'172.65.184.114#优选IP-189',_0x34b348(0x2e2),_0x34b348(0x284),_0x34b348(0x38a),'104.18.211.8#优选IP-193',_0x34b348(0x42e),_0x34b348(0x242),'162.159.43.223#优选IP-196',_0x34b348(0x19d),'104.25.18.216#优选IP-198',_0x34b348(0x152),_0x34b348(0x1bc),_0x34b348(0x1a8),_0x34b348(0x308),'188.114.97.108#优选IP-203',_0x34b348(0x374),_0x34b348(0x15b),_0x34b348(0x209),_0x34b348(0x1f2),_0x34b348(0x116),_0x34b348(0x241),_0x34b348(0x34e),_0x34b348(0x461),_0x34b348(0x2c3),_0x34b348(0x378),_0x34b348(0x3bf),'104.19.181.118#优选IP-215',_0x34b348(0x441),_0x34b348(0x35a),'172.65.44.103#优选IP-218',_0x34b348(0x43d),_0x34b348(0x1e6),_0x34b348(0x1da),_0x34b348(0x2ee),_0x34b348(0x37a),_0x34b348(0x3bb),'172.65.118.105#优选IP-225',_0x34b348(0x238),'162.159.134.174#优选IP-227',_0x34b348(0x2e6),_0x34b348(0x229),_0x34b348(0x122),_0x34b348(0x205),_0x34b348(0x46e),'162.159.240.54#优选IP-233','104.17.0.4#优选IP-234','104.25.86.143#优选IP-235',_0x34b348(0x383),_0x34b348(0x410),_0x34b348(0x3b5),_0x34b348(0x469),'104.25.123.130#优选IP-240',_0x34b348(0x166),_0x34b348(0x270),_0x34b348(0x3ad),_0x34b348(0x1be),'162.159.198.200#优选IP-245',_0x34b348(0x276),'104.21.215.255#优选IP-247',_0x34b348(0x3c7),'162.159.135.234#优选IP-249',_0x34b348(0x235),_0x34b348(0x177),_0x34b348(0x2f0),_0x34b348(0x40e),_0x34b348(0x224),'162.159.236.19#优选IP-255',_0x34b348(0x42f),'104.17.151.244#优选IP-257','104.17.121.245#优选IP-258',_0x34b348(0x354),'162.159.228.231#优选IP-260','104.17.100.40#优选IP-261',_0x34b348(0x349),_0x34b348(0x248),'104.20.17.160#优选IP-264',_0x34b348(0x2f2),_0x34b348(0x425),_0x34b348(0x115),'104.19.83.33#优选IP-268','188.114.96.238#优选IP-269','162.159.42.67#优选IP-270',_0x34b348(0x16c),_0x34b348(0x2f4),'104.25.173.14#优选IP-273',_0x34b348(0x379),_0x34b348(0x30b),_0x34b348(0x15a),_0x34b348(0x2b0),_0x34b348(0x2a3),_0x34b348(0x1a4),_0x34b348(0x429),_0x34b348(0x386),_0x34b348(0x253),_0x34b348(0x1b6),'104.24.25.178#优选IP-284','104.24.84.86#优选IP-285',_0x34b348(0x124),_0x34b348(0x44c),_0x34b348(0x3e6),_0x34b348(0x1c1),'172.65.45.248#优选IP-290','104.25.169.144#优选IP-291',_0x34b348(0x27f),_0x34b348(0x302),_0x34b348(0x43b),_0x34b348(0x2c9),_0x34b348(0x3ec),_0x34b348(0x180),_0x34b348(0x200),_0x34b348(0x466),_0x34b348(0x299)],DEFAULT_PREFERRED_DOMAINS=['cloudflare.182682.xyz',_0x34b348(0x13e),'freeyx.cloudflare88.eu.org','bestcf.top',_0x34b348(0x384),'cfip.cfcdn.vip','cf.0sm.com',_0x34b348(0x3a3),'cf.zhetengsha.eu.org','cloudflare.9jy.cc',_0x34b348(0x157),_0x34b348(0x393),'cnamefuckxxs.yuchen.icu',_0x34b348(0x46d),_0x34b348(0x3a9),_0x34b348(0x411),'f3058171cad.002404.xyz','8.889288.xyz',_0x34b348(0x3ef),_0x34b348(0x3c2),_0x34b348(0x464),_0x34b348(0x436),_0x34b348(0x1c4),'fn.130519.xyz',_0x34b348(0x40f)][_0x34b348(0x318)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':'微测网\x20IPv4','url':_0x34b348(0x27a)},'wetest_v6':{'label':_0x34b348(0x3f4),'url':_0x34b348(0x2b3)},'bestcf':{'label':'优选\x20IP\x20列表','url':'https://cf.090227.xyz/ip.164746.xyz'},'hostmonit':{'label':_0x34b348(0x3fc),'url':_0x34b348(0x14a)},'wetest_cname':{'label':_0x34b348(0x1d0),'url':_0x34b348(0x33a)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x2ec3a6){const _0x24dcaa=_0x34b348;let _0x47a1d0='';const _0x21ba4b=0x8000;for(let _0x24f62f=0x0;_0x24f62f<_0x2ec3a6[_0x24dcaa(0x26b)];_0x24f62f+=_0x21ba4b){_0x47a1d0+=String['fromCharCode'](..._0x2ec3a6[_0x24dcaa(0x189)](_0x24f62f,_0x24f62f+_0x21ba4b));}return btoa(_0x47a1d0);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x269505,_0x3435ad){return(_0x269505<<_0x3435ad|_0x269505>>>0x20-_0x3435ad)>>>0x0;}function md5hex(_0x1042d9){const _0x5d754f=_0x34b348,_0x40c59b=TE['encode'](String(_0x1042d9)),_0x2f94f3=_0x40c59b[_0x5d754f(0x26b)]*0x8,_0x7af029=(_0x40c59b[_0x5d754f(0x26b)]+0x8>>0x6)+0x1<<0x6,_0x131a28=new Uint8Array(_0x7af029);_0x131a28[_0x5d754f(0x2e9)](_0x40c59b),_0x131a28[_0x40c59b[_0x5d754f(0x26b)]]=0x80;const _0x37c718=new DataView(_0x131a28[_0x5d754f(0x406)]);_0x37c718['setUint32'](_0x7af029-0x8,_0x2f94f3>>>0x0,!![]),_0x37c718[_0x5d754f(0x215)](_0x7af029-0x4,Math['floor'](_0x2f94f3/0x100000000),!![]);let _0x421247=0x67452301,_0x4ad992=0xefcdab89,_0x233d57=0x98badcfe,_0x5e8a2f=0x10325476;for(let _0x21fa34=0x0;_0x21fa34<_0x7af029;_0x21fa34+=0x40){const _0x3d8682=new Uint32Array(0x10);for(let _0x2f1698=0x0;_0x2f1698<0x10;_0x2f1698++)_0x3d8682[_0x2f1698]=_0x37c718[_0x5d754f(0x3b4)](_0x21fa34+_0x2f1698*0x4,!![]);let _0x5d1d0f=_0x421247,_0x281bfc=_0x4ad992,_0x13bf19=_0x233d57,_0x4799de=_0x5e8a2f;for(let _0x58f911=0x0;_0x58f911<0x40;_0x58f911++){let _0x499e47,_0x573a86;if(_0x58f911<0x10)_0x499e47=_0x281bfc&_0x13bf19|~_0x281bfc&_0x4799de,_0x573a86=_0x58f911;else{if(_0x58f911<0x20)_0x499e47=_0x4799de&_0x281bfc|~_0x4799de&_0x13bf19,_0x573a86=(0x5*_0x58f911+0x1)%0x10;else _0x58f911<0x30?(_0x499e47=_0x281bfc^_0x13bf19^_0x4799de,_0x573a86=(0x3*_0x58f911+0x5)%0x10):(_0x499e47=_0x13bf19^(_0x281bfc|~_0x4799de),_0x573a86=0x7*_0x58f911%0x10);}const _0x5a62e1=_0x5d1d0f+_0x499e47+MD5_K[_0x58f911]+_0x3d8682[_0x573a86]>>>0x0,_0x5f4c22=_0x281bfc+rotl32(_0x5a62e1,MD5_S[_0x58f911])>>>0x0;_0x5d1d0f=_0x4799de,_0x4799de=_0x13bf19,_0x13bf19=_0x281bfc,_0x281bfc=_0x5f4c22;}_0x421247=_0x421247+_0x5d1d0f>>>0x0,_0x4ad992=_0x4ad992+_0x281bfc>>>0x0,_0x233d57=_0x233d57+_0x13bf19>>>0x0,_0x5e8a2f=_0x5e8a2f+_0x4799de>>>0x0;}let _0x484962='';for(const _0x907be0 of[_0x421247,_0x4ad992,_0x233d57,_0x5e8a2f]){_0x484962+=(_0x907be0&0xff)[_0x5d754f(0x24f)](0x10)['padStart'](0x2,'0'),_0x484962+=(_0x907be0>>>0x8&0xff)[_0x5d754f(0x24f)](0x10)[_0x5d754f(0x2bf)](0x2,'0'),_0x484962+=(_0x907be0>>>0x10&0xff)[_0x5d754f(0x24f)](0x10)[_0x5d754f(0x2bf)](0x2,'0'),_0x484962+=(_0x907be0>>>0x18&0xff)[_0x5d754f(0x24f)](0x10)[_0x5d754f(0x2bf)](0x2,'0');}return _0x484962;}function uuidv4(){const _0x321e65=_0x34b348;if(crypto[_0x321e65(0x2f9)])return crypto['randomUUID']();const _0x31aa7a=crypto['getRandomValues'](new Uint8Array(0x10));return _0x31aa7a[0x6]=_0x31aa7a[0x6]&0xf|0x40,_0x31aa7a[0x8]=_0x31aa7a[0x8]&0x3f|0x80,[..._0x31aa7a]['map']((_0x1e1516,_0x3d94e8)=>(_0x3d94e8===0x4||_0x3d94e8===0x6||_0x3d94e8===0x8||_0x3d94e8===0xa?'-':'')+_0x1e1516['toString'](0x10)[_0x321e65(0x2bf)](0x2,'0'))['join']('');}function isUUID(_0x3f8094){const _0x5e3bde=_0x34b348;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x5e3bde(0x421)](_0x3f8094||'');}function parseHostPort(_0x2e74b5,_0x404b47=0x1bb){const _0x51e377=_0x34b348;_0x2e74b5=String(_0x2e74b5||'')[_0x51e377(0x1d1)]();if(!_0x2e74b5)return{'host':'','port':_0x404b47};if(_0x2e74b5[_0x51e377(0x3b7)]('[')){const _0x4844fa=_0x2e74b5['match'](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x4844fa?_0x4844fa[0x1]:_0x2e74b5['replace'](/^\[|\]$/g,''),'port':_0x4844fa&&_0x4844fa[0x2]?parseInt(_0x4844fa[0x2]):_0x404b47};}const _0x189e25=_0x2e74b5[_0x51e377(0x465)](':');if(_0x189e25>0x0&&/^\d+$/[_0x51e377(0x421)](_0x2e74b5[_0x51e377(0x1ab)](_0x189e25+0x1)))return{'host':_0x2e74b5[_0x51e377(0x1ab)](0x0,_0x189e25),'port':parseInt(_0x2e74b5[_0x51e377(0x1ab)](_0x189e25+0x1))};return{'host':_0x2e74b5,'port':_0x404b47};}function isValidIp(_0x5381b0){const _0x2e758e=_0x34b348;_0x5381b0=String(_0x5381b0||'')['trim']();if(!_0x5381b0)return![];const _0x56092e=_0x5381b0[_0x2e758e(0x178)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x56092e)return _0x56092e[_0x2e758e(0x1ab)](0x1)[_0x2e758e(0x31f)](_0x6c90b7=>Number(_0x6c90b7)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x2e758e(0x421)](_0x5381b0))return![];if((_0x5381b0[_0x2e758e(0x178)](/::/g)||[])[_0x2e758e(0x26b)]>0x1)return![];const _0xb3ee3c=_0x5381b0[_0x2e758e(0x37c)]('::'),_0x5bcee2=_0x5381b0[_0x2e758e(0x38f)](/::/g,':')[_0x2e758e(0x208)](':')['filter'](Boolean);if(!_0xb3ee3c&&_0x5bcee2[_0x2e758e(0x26b)]!==0x8)return![];if(_0xb3ee3c&&(_0x5bcee2['length']<0x1||_0x5bcee2[_0x2e758e(0x26b)]>0x7))return![];return _0x5bcee2[_0x2e758e(0x31f)](_0x284993=>/^[0-9a-fA-F]{1,4}$/[_0x2e758e(0x421)](_0x284993));}function formatIPv6(_0x34c92e){const _0x5d7747=_0x34b348,_0x22591c=[];for(let _0xfe472c=0x0;_0xfe472c<0x10;_0xfe472c+=0x2)_0x22591c[_0x5d7747(0x2df)]((_0x34c92e[_0xfe472c]<<0x8|_0x34c92e[_0xfe472c+0x1])['toString'](0x10));let _0x3df492=-0x1,_0x3e381a=0x0,_0x2c2b04=-0x1,_0x39a187=0x0;for(let _0x5b4a95=0x0;_0x5b4a95<0x8;_0x5b4a95++){if(_0x22591c[_0x5b4a95]==='0'){if(_0x2c2b04<0x0)_0x2c2b04=_0x5b4a95,_0x39a187=0x1;else _0x39a187++;_0x39a187>_0x3e381a&&(_0x3e381a=_0x39a187,_0x3df492=_0x2c2b04);}else _0x2c2b04=-0x1,_0x39a187=0x0;}if(_0x3e381a>=0x2){const _0x397961=_0x22591c[_0x5d7747(0x1ab)](0x0,_0x3df492)[_0x5d7747(0x318)](':'),_0x257dbe=_0x22591c['slice'](_0x3df492+_0x3e381a)['join'](':');return(_0x397961?_0x397961+'::':'::')+_0x257dbe;}return _0x22591c[_0x5d7747(0x318)](':');}function cidrToRange(_0x3d1578){const _0x4a9a3d=_0x34b348,[_0x5c3f9b,_0x333521]=_0x3d1578[_0x4a9a3d(0x208)]('/'),_0x3a5ed8=_0x5c3f9b[_0x4a9a3d(0x208)]('.')[_0x4a9a3d(0x17e)](Number),_0xaa8383=(_0x3a5ed8[0x0]<<0x18|_0x3a5ed8[0x1]<<0x10|_0x3a5ed8[0x2]<<0x8|_0x3a5ed8[0x3])>>>0x0,_0x4688d0=_0x333521>=0x20?0x0:0xffffffff<<0x20-_0x333521>>>0x0,_0x16f894=(_0xaa8383&_0x4688d0)>>>0x0,_0x5a90d3=(_0xaa8383|~_0x4688d0>>>0x0)>>>0x0;return[_0x16f894,_0x5a90d3];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[_0x34b348(0x17e)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x5b5c4a){const _0x38b911=_0x34b348;let _0x1bd663=_rangeCache['get'](_0x5b5c4a);return!_0x1bd663&&(_0x1bd663=cidrToRange(_0x5b5c4a),_rangeCache[_0x38b911(0x2e9)](_0x5b5c4a,_0x1bd663)),_0x1bd663;}function randomIPFromCidr(_0xfa5c15){const _0x41e0f6=_0x34b348;if(String(_0xfa5c15)[_0x41e0f6(0x343)](':')>=0x0)return randomIP6FromCidr(_0xfa5c15);const [_0x6f9fa5,_0x50fc9d]=cidrRangeCached(_0xfa5c15),_0x55725a=_0x6f9fa5+Math[_0x41e0f6(0x125)](Math[_0x41e0f6(0x438)]()*(_0x50fc9d-_0x6f9fa5>>>0x0));return(_0x55725a>>>0x18&0xff)+'.'+(_0x55725a>>>0x10&0xff)+'.'+(_0x55725a>>>0x8&0xff)+'.'+(_0x55725a&0xff);}function randomIP6FromCidr(_0x24cb16){const _0x4e9071=_0x34b348,[_0x4c920e,_0x2e7b64]=_0x24cb16[_0x4e9071(0x208)]('/'),_0x55ea13=parseInt(_0x2e7b64,0xa)||0x0,_0x174da8=_0x3c777a=>{const _0x94263=_0x4e9071,_0x505893=_0x3c777a[_0x94263(0x343)]('::');let _0x443d21;if(_0x505893>=0x0){const _0x8ef560=_0x3c777a['slice'](0x0,_0x505893)[_0x94263(0x208)](':')['filter'](Boolean),_0x3210e5=_0x3c777a['slice'](_0x505893+0x2)['split'](':')[_0x94263(0x3ff)](Boolean),_0x5b6321=0x8-_0x8ef560[_0x94263(0x26b)]-_0x3210e5['length'];_0x443d21=[..._0x8ef560,...Array(_0x5b6321)[_0x94263(0x3a2)]('0'),..._0x3210e5];}else _0x443d21=_0x3c777a[_0x94263(0x208)](':');return _0x443d21[_0x94263(0x17e)](_0x589bb8=>_0x589bb8[_0x94263(0x2bf)](0x4,'0'));},_0xbe6f15=_0x174da8(_0x4c920e)[_0x4e9071(0x17e)](_0x31ba23=>parseInt(_0x31ba23,0x10));let _0x4d8e5f=0x0;for(let _0x1cf5eb=0x0;_0x1cf5eb<0x8;_0x1cf5eb++)for(let _0x1b3419=0xf;_0x1b3419>=0x0;_0x1b3419--){if(_0x4d8e5f>=_0x55ea13)_0xbe6f15[_0x1cf5eb]|=(Math[_0x4e9071(0x438)]()<0.5?0x1:0x0)<<_0x1b3419;_0x4d8e5f++;}return _0xbe6f15[_0x4e9071(0x17e)](_0x2f3552=>_0x2f3552[_0x4e9071(0x24f)](0x10))[_0x4e9071(0x318)](':');}function ipv4ToEmbeddedV6(_0x187643){const _0x492648=_0x34b348,_0x337573=String(_0x187643||'')['split']('.')['map'](_0x453a43=>parseInt(_0x453a43,0xa)[_0x492648(0x24f)](0x10)[_0x492648(0x2bf)](0x2,'0'));if(_0x337573['length']!==0x4||_0x337573[_0x492648(0x1c5)](_0x5d5047=>_0x5d5047==='NaN'))return null;return _0x492648(0x3d2)+_0x337573[0x0]+_0x337573[0x1]+':'+_0x337573[0x2]+_0x337573[0x3];}function randomIPsFromCidrs(_0x71a7a5,_0x5266dd){const _0x5cdfde=_0x34b348,_0x286879=new Set(),_0x34efdc=[];let _0x27004a=0x0;while(_0x34efdc['length']<_0x5266dd&&_0x27004a++<_0x5266dd*0x14){const _0x53a157=randomIPFromCidr(_0x71a7a5[Math['floor'](Math[_0x5cdfde(0x438)]()*_0x71a7a5['length'])]);!_0x286879[_0x5cdfde(0x32a)](_0x53a157)&&(_0x286879['add'](_0x53a157),_0x34efdc[_0x5cdfde(0x2df)](_0x53a157));}return _0x34efdc;}function parseIPList(_0x2f865c){const _0x55dfb1=_0x34b348,_0xc17789=[],_0x65f662=new Set();return String(_0x2f865c||'')[_0x55dfb1(0x208)](/[\n,;]+/)['map'](_0x5cd8f9=>_0x5cd8f9[_0x55dfb1(0x1d1)]())[_0x55dfb1(0x3ff)](Boolean)[_0x55dfb1(0x442)](_0x830ad9=>{const _0x53323c=_0x55dfb1;let _0x58bec2='';if(_0x830ad9[_0x53323c(0x37c)]('#')){const [_0x4989b0,_0x32d438]=_0x830ad9[_0x53323c(0x208)]('#');_0x830ad9=_0x4989b0,_0x58bec2=_0x32d438;}const {host:_0x2e68ae,port:_0x33b3d6}=parseHostPort(_0x830ad9,0x1bb);_0x2e68ae&&isValidIp(_0x2e68ae)&&!_0x65f662[_0x53323c(0x32a)](_0x2e68ae)&&(_0x65f662[_0x53323c(0x176)](_0x2e68ae),_0xc17789['push']({'ip':_0x2e68ae,'port':_0x33b3d6,'name':_0x58bec2}));}),_0xc17789;}function parseProxyAddress(_0x31022f){const _0x3c6e2c=_0x34b348;if(!_0x31022f)return null;let _0x258abc=_0x3c6e2c(0x367),_0x20aa65=String(_0x31022f)[_0x3c6e2c(0x1d1)]();const _0x1974bf=_0x20aa65[_0x3c6e2c(0x178)](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x1974bf&&(_0x258abc=_0x1974bf[0x1][_0x3c6e2c(0x1a7)](),_0x20aa65=_0x1974bf[0x2]);if(_0x258abc==='ss')return parseSsProxy(_0x20aa65);let _0x11f8df='',_0x560191='';if(_0x20aa65['includes']('@')){const [_0x188afe,_0x5a5a39]=_0x20aa65[_0x3c6e2c(0x208)]('@'),_0x14cafc=_0x476264=>{try{return decodeURIComponent(_0x476264);}catch(_0x243efe){return _0x476264;}},_0x3ce3b0=_0x188afe['indexOf'](':');if(_0x3ce3b0>=0x0)_0x11f8df=_0x14cafc(_0x188afe[_0x3c6e2c(0x1ab)](0x0,_0x3ce3b0)),_0x560191=_0x14cafc(_0x188afe[_0x3c6e2c(0x1ab)](_0x3ce3b0+0x1));else _0x11f8df=_0x14cafc(_0x188afe);_0x20aa65=_0x5a5a39;}const _0x46ab95=_0x258abc==='http'?0x50:_0x258abc==='https'?0x1bb:0x438,{host:_0x24f411,port:_0x43e189}=parseHostPort(_0x20aa65,_0x46ab95);return{'type':_0x258abc,'host':_0x24f411,'port':_0x43e189,'user':_0x11f8df,'pass':_0x560191};}function parseSsProxy(_0x2bf5d5){const _0x27adda=_0x34b348;let _0x1789c3=_0x2bf5d5,_0x22b935='';const _0x4997ae=_0x2bf5d5[_0x27adda(0x343)]('#');if(_0x4997ae>=0x0)_0x1789c3=_0x2bf5d5['slice'](0x0,_0x4997ae);const _0x13d846=_0x1789c3['lastIndexOf']('@');if(_0x13d846>=0x0)_0x22b935=_0x1789c3['slice'](0x0,_0x13d846),_0x1789c3=_0x1789c3[_0x27adda(0x1ab)](_0x13d846+0x1);else{const _0x3113de=b64ToUtf8(_0x1789c3);if(_0x3113de&&_0x3113de[_0x27adda(0x37c)]('@')){const _0x341c03=_0x3113de['lastIndexOf']('@');_0x22b935=_0x3113de[_0x27adda(0x1ab)](0x0,_0x341c03),_0x1789c3=_0x3113de[_0x27adda(0x1ab)](_0x341c03+0x1);}}let _0x2b7393='',_0x430663='';if(_0x22b935){let _0x57a5a9=b64ToUtf8(_0x22b935)||_0x22b935;try{_0x57a5a9=decodeURIComponent(_0x57a5a9);}catch(_0x5e2082){}const _0x4abb49=_0x57a5a9['indexOf'](':');if(_0x4abb49>0x0)_0x2b7393=_0x57a5a9[_0x27adda(0x1ab)](0x0,_0x4abb49),_0x430663=_0x57a5a9[_0x27adda(0x1ab)](_0x4abb49+0x1);else _0x2b7393=_0x57a5a9;}const {host:_0x264023,port:_0x5d5c36}=parseHostPort(_0x1789c3,0x20c4);return{'type':'ss','host':_0x264023,'port':_0x5d5c36,'method':_0x2b7393,'password':_0x430663};}function b64ToUtf8(_0x3db75d){const _0x1223a9=_0x34b348;try{const _0x1cc419=atob(String(_0x3db75d)[_0x1223a9(0x38f)](/-/g,'+')['replace'](/_/g,'/')),_0xa7660=new Uint8Array(_0x1cc419[_0x1223a9(0x26b)]);for(let _0x18a73a=0x0;_0x18a73a<_0x1cc419['length'];_0x18a73a++)_0xa7660[_0x18a73a]=_0x1cc419[_0x1223a9(0x290)](_0x18a73a);return new TextDecoder(_0x1223a9(0x17b))['decode'](_0xa7660);}catch(_0x48627f){return null;}}function json(_0x37e3f4,_0x2e6e9b){const _0x2f174f=_0x34b348;return new Response(JSON['stringify'](_0x37e3f4),{'status':_0x2e6e9b||0xc8,'headers':{'Content-Type':_0x2f174f(0x221)}});}async function kvGetConfigCached(_0x2ddd8f){const _0x1591a8=_0x34b348;try{return await _0x2ddd8f['K']['get'](_0x1591a8(0x11f),{'cacheTtl':0x1e});}catch(_0x410f56){return null;}}function invalidateConfigCache(){}async function loadConfig(_0x3bc13b){const _0x39c64a=_0x34b348,_0x566a32=JSON[_0x39c64a(0x3fa)](JSON[_0x39c64a(0x2db)](DEFAULT_CONFIG));let _0x52f8e5=![];if(_0x3bc13b['U'])_0x566a32[_0x39c64a(0x32c)]=String(_0x3bc13b['U'])[_0x39c64a(0x1a7)]();if(_0x3bc13b['D']||_0x3bc13b['PATH'])_0x566a32[_0x39c64a(0x46a)]=String(_0x3bc13b['D']||_0x3bc13b[_0x39c64a(0x3db)]);if(_0x3bc13b['ADMIN']||_0x3bc13b[_0x39c64a(0x3ab)])_0x566a32['admin']=String(_0x3bc13b[_0x39c64a(0x35e)]||_0x3bc13b['admin']);if(_0x3bc13b[_0x39c64a(0x45c)])_0x566a32[_0x39c64a(0x1c7)]=String(_0x3bc13b[_0x39c64a(0x45c)])[_0x39c64a(0x38f)](/^https?:\/\//,'')[_0x39c64a(0x208)]('/')[0x0];if(_0x3bc13b[_0x39c64a(0x2a8)])_0x566a32['proxyIP']=String(_0x3bc13b[_0x39c64a(0x2a8)]);if(_0x3bc13b['S']||_0x3bc13b[_0x39c64a(0x1f1)])_0x566a32[_0x39c64a(0x202)]=String(_0x3bc13b['S']||_0x3bc13b[_0x39c64a(0x1f1)]);if(_0x3bc13b[_0x39c64a(0x398)]===_0x39c64a(0x24b)||_0x3bc13b[_0x39c64a(0x398)]==='1')_0x566a32[_0x39c64a(0x273)]=!![];if(_0x3bc13b['TROJAN']===_0x39c64a(0x24b)||_0x3bc13b['TROJAN']==='1')_0x566a32['enableTrojan']=!![];if(_0x3bc13b[_0x39c64a(0x239)])_0x566a32[_0x39c64a(0x223)]=String(_0x3bc13b[_0x39c64a(0x239)]);if(_0x3bc13b[_0x39c64a(0x24e)])_0x566a32[_0x39c64a(0x3d3)]=String(_0x3bc13b[_0x39c64a(0x24e)]);if(_0x3bc13b['YX'])_0x566a32[_0x39c64a(0x2dd)]=parseIPList(_0x3bc13b['YX']);if(_0x3bc13b['YXURL'])_0x566a32['optimizer'][_0x39c64a(0x39b)]=String(_0x3bc13b['YXURL']);if(_0x3bc13b['PROBE_ALIVE']==='1'||_0x3bc13b[_0x39c64a(0x165)]===_0x39c64a(0x24b))_0x566a32['probeAlive']=!![];if(_0x3bc13b[_0x39c64a(0x165)]==='0'||_0x3bc13b[_0x39c64a(0x165)]===_0x39c64a(0x191))_0x566a32[_0x39c64a(0x457)]=![];if(_0x3bc13b['K']&&typeof _0x3bc13b['K'][_0x39c64a(0x1d4)]===_0x39c64a(0x18c))try{const _0x262c22=await kvGetConfigCached(_0x3bc13b);if(_0x262c22){const _0x349a23=JSON[_0x39c64a(0x3fa)](_0x262c22);if(_0x349a23[_0x39c64a(0x279)]!==undefined)_0x52f8e5=!![];Object['assign'](_0x566a32,_0x349a23);if(_0x349a23[_0x39c64a(0x186)])_0x566a32['optimizer']=Object[_0x39c64a(0x33e)](JSON[_0x39c64a(0x3fa)](JSON[_0x39c64a(0x2db)](DEFAULT_CONFIG['optimizer'])),_0x349a23[_0x39c64a(0x186)]);if(_0x349a23['preferredIPs']&&Array[_0x39c64a(0x41d)](_0x349a23[_0x39c64a(0x2dd)]))_0x566a32[_0x39c64a(0x2dd)]=_0x349a23[_0x39c64a(0x2dd)];if(_0x349a23[_0x39c64a(0x3ab)])_0x566a32[_0x39c64a(0x3ab)]=String(_0x349a23[_0x39c64a(0x3ab)]);if(_0x349a23[_0x39c64a(0x32c)])_0x566a32[_0x39c64a(0x32c)]=String(_0x349a23[_0x39c64a(0x32c)])[_0x39c64a(0x1a7)]();}}catch(_0x466919){}delete _0x566a32['fragment'],delete _0x566a32[_0x39c64a(0x2e5)],setProbeAlive(!!_0x566a32[_0x39c64a(0x457)]),_0x566a32[_0x39c64a(0x32c)]=String(_0x566a32['uuid']||'')[_0x39c64a(0x1a7)]();if(!isUUID(_0x566a32['uuid']))_0x566a32[_0x39c64a(0x32c)]=uuidv4();if(!_0x566a32[_0x39c64a(0x46a)]||_0x566a32['path']==='/'||_0x566a32['path']==='')_0x566a32[_0x39c64a(0x46a)]=_0x566a32[_0x39c64a(0x32c)];if(!Array['isArray'](_0x566a32['preferredIPs']))_0x566a32[_0x39c64a(0x2dd)]=parseIPList(_0x566a32['preferredIPs']);if(!_0x52f8e5){const _0x565c9f=Boolean(_0x566a32['cfAccountId']&&_0x566a32[_0x39c64a(0x160)]||_0x3bc13b[_0x39c64a(0x126)]&&_0x3bc13b['CF_API_TOKEN']);if(_0x565c9f)_0x566a32[_0x39c64a(0x279)]=!![];}return _0x566a32;}async function saveConfig(_0x54f492,_0x5c5e34){const _0x9e8fee=_0x34b348;if(!_0x54f492['K']||typeof _0x54f492['K'][_0x9e8fee(0x30e)]!=='function')return![];const _0x4e799e=JSON[_0x9e8fee(0x3fa)](JSON[_0x9e8fee(0x2db)](_0x5c5e34));if(_0x4e799e[_0x9e8fee(0x3ab)])_0x4e799e[_0x9e8fee(0x3ab)]=String(_0x4e799e['admin']);return await _0x54f492['K']['put'](_0x9e8fee(0x11f),JSON[_0x9e8fee(0x2db)](_0x4e799e)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x33aee6,_0x2ddc49){const _0x1eb187=_0x34b348,_0x53ce46=String(_0x33aee6['CF_ACCOUNT_ID']||_0x2ddc49&&_0x2ddc49['cfAccountId']||'')[_0x1eb187(0x1d1)](),_0x4e0d28=String(_0x33aee6[_0x1eb187(0x2e0)]||_0x2ddc49&&_0x2ddc49[_0x1eb187(0x160)]||'')[_0x1eb187(0x1d1)]();if(!_0x53ce46||!_0x4e0d28)return{'configured':![]};const _0x20a0aa=Date[_0x1eb187(0x1c9)]();if(_0x20a0aa<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE[_0x1eb187(0x3f5)])return Object['assign']({},QUOTA_CACHE[_0x1eb187(0x3f5)],{'stale':!![],'error':'CF\x20API\x20限流(429)，显示缓存数据（可能滞后）'});return{'configured':!![],'error':'CF\x20API\x20限流(429)，请\x2015\x20分钟后再试'};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x20a0aa-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE[_0x1eb187(0x3f5)];try{const _0x574663=new Date();_0x574663[_0x1eb187(0x154)](0x0,0x0,0x0,0x0);const _0x36cd96=new Date(),_0x28d68e={'query':'query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','variables':{'accountId':_0x53ce46,'filter':{'datetime_geq':_0x574663[_0x1eb187(0x3b9)](),'datetime_leq':_0x36cd96[_0x1eb187(0x3b9)]()}}},_0xee5d87=await fetch(_0x1eb187(0x3e2),{'method':'POST','headers':{'Content-Type':'application/json','Authorization':_0x1eb187(0x2bc)+_0x4e0d28},'body':JSON[_0x1eb187(0x2db)](_0x28d68e)});if(!_0xee5d87['ok'])throw new Error(_0x1eb187(0x37b)+_0xee5d87[_0x1eb187(0x2ce)]);const _0x116c9c=await _0xee5d87[_0x1eb187(0x196)]();if(_0x116c9c['errors']&&_0x116c9c[_0x1eb187(0x385)][_0x1eb187(0x26b)])throw new Error(_0x1eb187(0x1ad)+JSON[_0x1eb187(0x2db)](_0x116c9c[_0x1eb187(0x385)])['slice'](0x0,0xc8));const _0x52517c=_0x116c9c&&_0x116c9c[_0x1eb187(0x3f5)]&&_0x116c9c[_0x1eb187(0x3f5)][_0x1eb187(0x13b)]&&_0x116c9c[_0x1eb187(0x3f5)][_0x1eb187(0x13b)][_0x1eb187(0x25f)]||[];if(!_0x52517c['length'])throw new Error(_0x1eb187(0x237));const _0x40099b=_0x52517c[0x0],_0x25a22c=(_0x40099b[_0x1eb187(0x412)]||[])[0x0]||{},_0x347f7c=(_0x40099b[_0x1eb187(0x2f5)]||[])['reduce']((_0x9e8db8,_0xd56ae)=>_0x9e8db8+(_0xd56ae&&_0xd56ae[_0x1eb187(0x34d)]&&_0xd56ae['sum'][_0x1eb187(0x470)]||0x0),0x0),_0x144e57=(_0x25a22c['sum']&&_0x25a22c['sum']['requests']||0x0)+_0x347f7c,_0x1f7014=_0x25a22c[_0x1eb187(0x269)]&&_0x25a22c[_0x1eb187(0x269)][_0x1eb187(0x1e9)]||0x0,_0x11d45a=_0x25a22c[_0x1eb187(0x34d)]&&_0x25a22c[_0x1eb187(0x34d)][_0x1eb187(0x430)]||0x0,_0x4aaaf5=QUOTA_LIMIT>0x0?Math[_0x1eb187(0x3ac)](_0x144e57/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x3b31d4={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x144e57,'cpuTime':_0x1f7014,'subrequests':_0x11d45a},'percent':_0x4aaaf5,'remaining':Math[_0x1eb187(0x39e)](0x0,QUOTA_LIMIT-_0x144e57),'updatedAt':_0x36cd96[_0x1eb187(0x3b9)]()};return QUOTA_CACHE={'at':_0x20a0aa,'data':_0x3b31d4},_0x3b31d4;}catch(_0x4609d5){const _0x5bda9a=_0x4609d5&&_0x4609d5[_0x1eb187(0x287)]||String(_0x4609d5);if(_0x5bda9a[_0x1eb187(0x343)](_0x1eb187(0x138))>=0x0){QUOTA_BACKOFF=_0x20a0aa+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE['data'])return Object['assign']({},QUOTA_CACHE[_0x1eb187(0x3f5)],{'stale':!![],'error':_0x1eb187(0x168)});return{'configured':!![],'error':_0x1eb187(0x192)};}return{'configured':!![],'error':_0x5bda9a};}}function readAddress(_0x1dab9a,_0xcff5b4,_0x23060b,_0x2de408){const _0x2b0002=_0x34b348;if(_0x2de408===0x1)return{'addr':_0xcff5b4[_0x2b0002(0x2d4)](_0x23060b)+'.'+_0xcff5b4[_0x2b0002(0x2d4)](_0x23060b+0x1)+'.'+_0xcff5b4[_0x2b0002(0x2d4)](_0x23060b+0x2)+'.'+_0xcff5b4['getUint8'](_0x23060b+0x3),'len':0x4};if(_0x2de408===0x2){const _0xf79b00=_0xcff5b4[_0x2b0002(0x2d4)](_0x23060b),_0x15f40f=_0x1dab9a[_0x2b0002(0x189)](_0x23060b+0x1,_0x23060b+0x1+_0xf79b00);return{'addr':TD[_0x2b0002(0x338)](_0x15f40f),'len':0x1+_0xf79b00};}if(_0x2de408===0x3){const _0x12c412=_0x1dab9a['subarray'](_0x23060b,_0x23060b+0x10);return{'addr':formatIPv6(_0x12c412),'len':0x10};}throw new Error(_0x2b0002(0x1a3));}function parseVlessHeader(_0x5a326e){const _0x1a8856=_0x34b348;if(!_0x5a326e||_0x5a326e['byteLength']<0x1)throw new Error(_0x1a8856(0x243));const _0x3287d7=new DataView(_0x5a326e[_0x1a8856(0x406)],_0x5a326e[_0x1a8856(0x262)],_0x5a326e[_0x1a8856(0x236)]);let _0x380d79=0x0;if(_0x3287d7[_0x1a8856(0x2d4)](0x0)!==0x0)throw new Error(_0x1a8856(0x366));_0x380d79+=0x1+0x10;if(_0x380d79>=_0x5a326e[_0x1a8856(0x236)])throw new Error(_0x1a8856(0x243));const _0x276e27=_0x3287d7[_0x1a8856(0x2d4)](_0x380d79);_0x380d79+=0x1,_0x380d79+=_0x276e27;if(_0x380d79+0x3>_0x5a326e[_0x1a8856(0x236)])throw new Error(_0x1a8856(0x243));const _0x5020f6=_0x3287d7['getUint8'](_0x380d79);_0x380d79+=0x1;const _0x5af1da=_0x3287d7[_0x1a8856(0x371)](_0x380d79);_0x380d79+=0x2;const _0x13091e=_0x3287d7[_0x1a8856(0x2d4)](_0x380d79);_0x380d79+=0x1;const {addr:_0x214b35,len:_0x5304a5}=readAddress(_0x5a326e,_0x3287d7,_0x380d79,_0x13091e);return _0x380d79+=_0x5304a5,{'command':_0x5020f6,'port':_0x5af1da,'addr':_0x214b35,'headerLength':_0x380d79,'earlyData':_0x5a326e[_0x1a8856(0x189)](_0x380d79)};}function parseTrojanHeader(_0x5b50cf){const _0x5db4ec=_0x34b348;if(!_0x5b50cf||_0x5b50cf[_0x5db4ec(0x236)]<0x3a+0x8)throw new Error(_0x5db4ec(0x2f1));const _0x1255c2=new DataView(_0x5b50cf['buffer'],_0x5b50cf['byteOffset'],_0x5b50cf[_0x5db4ec(0x236)]);let _0x3cd5ac=0x3a;const _0xcb900e=_0x1255c2[_0x5db4ec(0x2d4)](_0x3cd5ac);_0x3cd5ac+=0x1;const _0x30c8e3=_0x1255c2['getUint8'](_0x3cd5ac);_0x3cd5ac+=0x1;let _0x4c6a4a,_0x6d1c1e;if(_0x30c8e3===0x1)_0x4c6a4a=_0x1255c2['getUint8'](_0x3cd5ac)+'.'+_0x1255c2[_0x5db4ec(0x2d4)](_0x3cd5ac+0x1)+'.'+_0x1255c2[_0x5db4ec(0x2d4)](_0x3cd5ac+0x2)+'.'+_0x1255c2['getUint8'](_0x3cd5ac+0x3),_0x6d1c1e=0x4;else{if(_0x30c8e3===0x3){const _0x1ff4b3=_0x1255c2[_0x5db4ec(0x2d4)](_0x3cd5ac);_0x4c6a4a=TD['decode'](_0x5b50cf[_0x5db4ec(0x189)](_0x3cd5ac+0x1,_0x3cd5ac+0x1+_0x1ff4b3)),_0x6d1c1e=0x1+_0x1ff4b3;}else{if(_0x30c8e3===0x4)_0x4c6a4a=formatIPv6(_0x5b50cf[_0x5db4ec(0x189)](_0x3cd5ac,_0x3cd5ac+0x10)),_0x6d1c1e=0x10;else throw new Error(_0x5db4ec(0x1a3));}}_0x3cd5ac+=_0x6d1c1e;const _0x4f74d2=_0x1255c2[_0x5db4ec(0x371)](_0x3cd5ac);return _0x3cd5ac+=0x2,_0x3cd5ac+=0x2,{'command':_0xcb900e,'port':_0x4f74d2,'addr':_0x4c6a4a,'password':TD['decode'](_0x5b50cf[_0x5db4ec(0x189)](0x0,0x38)),'headerLength':_0x3cd5ac};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x491cd5){const _0x1b2564=_0x34b348,_0x31e8b9=TE[_0x1b2564(0x117)](String(_0x491cd5)),_0x5cd9d7=_0x31e8b9['length']*0x8,_0x5598de=(_0x31e8b9[_0x1b2564(0x26b)]+0x8>>0x6)+0x1<<0x6,_0x10e563=new Uint8Array(_0x5598de);_0x10e563[_0x1b2564(0x2e9)](_0x31e8b9),_0x10e563[_0x31e8b9[_0x1b2564(0x26b)]]=0x80;const _0x5b573f=new DataView(_0x10e563['buffer']);_0x5b573f[_0x1b2564(0x215)](_0x5598de-0x8,Math[_0x1b2564(0x125)](_0x5cd9d7/0x100000000),![]),_0x5b573f[_0x1b2564(0x215)](_0x5598de-0x4,_0x5cd9d7>>>0x0,![]);let _0x28be6d=0xc1059ed8,_0x2436f4=0x367cd507,_0x4ab0de=0x3070dd17,_0x6e3c89=0xf70e5939,_0x4877fd=0xffc00b31,_0x97ed9f=0x68581511,_0x59cf67=0x64f98fa7,_0x3aab0e=0xbefa4fa4;const _0x5110e9=(_0x5c3dd7,_0x19ffe0)=>_0x5c3dd7>>>_0x19ffe0|_0x5c3dd7<<0x20-_0x19ffe0;for(let _0x59a0c0=0x0;_0x59a0c0<_0x5598de;_0x59a0c0+=0x40){const _0x40e532=new Uint32Array(0x40);for(let _0xc8fb74=0x0;_0xc8fb74<0x10;_0xc8fb74++)_0x40e532[_0xc8fb74]=_0x5b573f[_0x1b2564(0x3b4)](_0x59a0c0+_0xc8fb74*0x4,![]);for(let _0x5710b7=0x10;_0x5710b7<0x40;_0x5710b7++){const _0x5ed464=_0x5110e9(_0x40e532[_0x5710b7-0xf],0x7)^_0x5110e9(_0x40e532[_0x5710b7-0xf],0x12)^_0x40e532[_0x5710b7-0xf]>>>0x3,_0x59781e=_0x5110e9(_0x40e532[_0x5710b7-0x2],0x11)^_0x5110e9(_0x40e532[_0x5710b7-0x2],0x13)^_0x40e532[_0x5710b7-0x2]>>>0xa;_0x40e532[_0x5710b7]=_0x40e532[_0x5710b7-0x10]+_0x5ed464+_0x40e532[_0x5710b7-0x7]+_0x59781e>>>0x0;}let _0x28469e=_0x28be6d,_0x36fa46=_0x2436f4,_0x1818aa=_0x4ab0de,_0x1f7b20=_0x6e3c89,_0x2d6d0c=_0x4877fd,_0x7d2d56=_0x97ed9f,_0x29f1fd=_0x59cf67,_0x23330b=_0x3aab0e;for(let _0x51f595=0x0;_0x51f595<0x40;_0x51f595++){const _0x10a6fe=_0x5110e9(_0x2d6d0c,0x6)^_0x5110e9(_0x2d6d0c,0xb)^_0x5110e9(_0x2d6d0c,0x19),_0x30a0e9=_0x2d6d0c&_0x7d2d56^~_0x2d6d0c&_0x29f1fd,_0x1c80eb=_0x23330b+_0x10a6fe+_0x30a0e9+SHA256_K[_0x51f595]+_0x40e532[_0x51f595]>>>0x0,_0x55d297=_0x5110e9(_0x28469e,0x2)^_0x5110e9(_0x28469e,0xd)^_0x5110e9(_0x28469e,0x16),_0x3b5720=_0x28469e&_0x36fa46^_0x28469e&_0x1818aa^_0x36fa46&_0x1818aa,_0x5a7261=_0x55d297+_0x3b5720>>>0x0;_0x23330b=_0x29f1fd,_0x29f1fd=_0x7d2d56,_0x7d2d56=_0x2d6d0c,_0x2d6d0c=_0x1f7b20+_0x1c80eb>>>0x0,_0x1f7b20=_0x1818aa,_0x1818aa=_0x36fa46,_0x36fa46=_0x28469e,_0x28469e=_0x1c80eb+_0x5a7261>>>0x0;}_0x28be6d=_0x28be6d+_0x28469e>>>0x0,_0x2436f4=_0x2436f4+_0x36fa46>>>0x0,_0x4ab0de=_0x4ab0de+_0x1818aa>>>0x0,_0x6e3c89=_0x6e3c89+_0x1f7b20>>>0x0,_0x4877fd=_0x4877fd+_0x2d6d0c>>>0x0,_0x97ed9f=_0x97ed9f+_0x7d2d56>>>0x0,_0x59cf67=_0x59cf67+_0x29f1fd>>>0x0,_0x3aab0e=_0x3aab0e+_0x23330b>>>0x0;}let _0x4d50c8='';for(const _0x2c25fe of[_0x28be6d,_0x2436f4,_0x4ab0de,_0x6e3c89,_0x4877fd,_0x97ed9f,_0x59cf67]){_0x4d50c8+=(_0x2c25fe>>>0x18&0xff)['toString'](0x10)[_0x1b2564(0x2bf)](0x2,'0'),_0x4d50c8+=(_0x2c25fe>>>0x10&0xff)['toString'](0x10)[_0x1b2564(0x2bf)](0x2,'0'),_0x4d50c8+=(_0x2c25fe>>>0x8&0xff)[_0x1b2564(0x24f)](0x10)[_0x1b2564(0x2bf)](0x2,'0'),_0x4d50c8+=(_0x2c25fe&0xff)[_0x1b2564(0x24f)](0x10)[_0x1b2564(0x2bf)](0x2,'0');}return _0x4d50c8;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x58a98a){return _0x58a98a!==_trojanPassC&&(_trojanPassC=_0x58a98a,_trojanHashC=sha224hex(_0x58a98a)),_trojanHashC;}function detectTrojan(_0x52bec5,_0x61a8ec){const _0x26d6f9=_0x34b348;if(!_0x61a8ec[_0x26d6f9(0x3f8)]||!_0x52bec5||_0x52bec5[_0x26d6f9(0x236)]<0x3a)return![];const _0x4434e6=_0x52bec5[_0x26d6f9(0x189)](0x0,0x38);if(TD['decode'](_0x4434e6)[_0x26d6f9(0x1a7)]()===trojanPasswordHash(_0x61a8ec[_0x26d6f9(0x223)]||_0x61a8ec[_0x26d6f9(0x32c)]))return!![];if(_0x52bec5[0x38]===0xd&&_0x52bec5[0x39]===0xa){for(let _0x444d9b=0x0;_0x444d9b<0x38;_0x444d9b++){const _0x18bbf1=_0x4434e6[_0x444d9b];if(!(_0x18bbf1>=0x30&&_0x18bbf1<=0x39||_0x18bbf1>=0x61&&_0x18bbf1<=0x66||_0x18bbf1>=0x41&&_0x18bbf1<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=['https://doh.pub/dns-query',_0x34b348(0x2d6),_0x34b348(0x285),_0x34b348(0x46f),_0x34b348(0x2c0),_0x34b348(0x11a)];function ipv6ToBytes(_0x1fcc03){const _0x504b11=_0x34b348,_0x4739d7=String(_0x1fcc03)['split']('::'),_0x554b13=_0x4739d7[0x0]?_0x4739d7[0x0][_0x504b11(0x208)](':')[_0x504b11(0x3ff)](Boolean):[],_0x1a1d1f=_0x4739d7[0x1]?_0x4739d7[0x1][_0x504b11(0x208)](':')[_0x504b11(0x3ff)](Boolean):[],_0x232120=[..._0x554b13,...Array(Math[_0x504b11(0x39e)](0x0,0x8-_0x554b13[_0x504b11(0x26b)]-_0x1a1d1f['length']))['fill']('0'),..._0x1a1d1f],_0x774a27=new Uint8Array(0x10);return _0x232120[_0x504b11(0x442)]((_0x4b035a,_0x2f3c90)=>{const _0x827995=parseInt(_0x4b035a,0x10)||0x0;_0x774a27[_0x2f3c90*0x2]=_0x827995>>0x8&0xff,_0x774a27[_0x2f3c90*0x2+0x1]=_0x827995&0xff;}),_0x774a27;}async function dnsToDoH(_0x26d59a){const _0x3126ee=_0x34b348;if(!_0x26d59a||_0x26d59a[_0x3126ee(0x236)]<0x11)return null;const _0x2f1c21=new DataView(_0x26d59a[_0x3126ee(0x406)],_0x26d59a['byteOffset'],_0x26d59a[_0x3126ee(0x236)]),_0x5031c6=_0x2f1c21[_0x3126ee(0x371)](0x0);if(_0x2f1c21[_0x3126ee(0x371)](0x2)&0x8000)return null;if(_0x2f1c21['getUint16'](0x4)!==0x1)return null;let _0x2bc1ca=0xc,_0x170fe2=[];while(_0x2bc1ca<_0x26d59a[_0x3126ee(0x236)]){const _0x37153e=_0x2f1c21[_0x3126ee(0x2d4)](_0x2bc1ca);if(_0x37153e===0x0){_0x2bc1ca++;break;}if((_0x37153e&0xc0)===0xc0){_0x2bc1ca+=0x2;break;}if(_0x2bc1ca+0x1+_0x37153e>_0x26d59a[_0x3126ee(0x236)])return null;_0x170fe2[_0x3126ee(0x2df)](TD['decode'](_0x26d59a['subarray'](_0x2bc1ca+0x1,_0x2bc1ca+0x1+_0x37153e))),_0x2bc1ca+=0x1+_0x37153e;}if(_0x2bc1ca+0x4>_0x26d59a['byteLength']||_0x170fe2['length']===0x0)return null;const _0x4489db=_0x2f1c21['getUint16'](_0x2bc1ca),_0x1bbd48=_0x2f1c21[_0x3126ee(0x371)](_0x2bc1ca+0x2),_0xc0a1e3=_0x2bc1ca+0x4;if(_0x4489db!==0x1&&_0x4489db!==0x1c)return null;const _0x14fcac=_0x170fe2[_0x3126ee(0x318)]('.'),_0x2c67a9=_0x26d59a[_0x3126ee(0x189)](0xc,_0xc0a1e3);let _0xb63e0d=null;for(const _0x5cf347 of DOH_ENDPOINTS){try{const _0x55de0c=await fetchTimeout(_0x5cf347+_0x3126ee(0x15d)+encodeURIComponent(_0x14fcac)+'&type='+_0x4489db,{'headers':{'accept':'application/dns-json'}},0x1388);if(!_0x55de0c||!_0x55de0c['ok'])continue;const _0xd978da=await _0x55de0c[_0x3126ee(0x196)]();if(!_0xd978da||_0xd978da[_0x3126ee(0x1df)]!==0x0)continue;const _0x497cca=(_0xd978da['Answer']||[])['filter'](_0x35ba5d=>_0x35ba5d[_0x3126ee(0x21f)]===_0x4489db&&(_0x35ba5d[_0x3126ee(0x21f)]===0x1?isValidIp(String(_0x35ba5d[_0x3126ee(0x3f5)])):/^[0-9a-fA-F:]+$/['test'](String(_0x35ba5d[_0x3126ee(0x3f5)]))));if(_0x497cca['length']){_0xb63e0d=_0x497cca;break;}}catch(_0x117d03){}}if(!_0xb63e0d)return null;const _0x1d0b7c=new Uint8Array(0xc),_0x1dca85=new DataView(_0x1d0b7c[_0x3126ee(0x406)]);_0x1dca85[_0x3126ee(0x252)](0x0,_0x5031c6),_0x1dca85['setUint16'](0x2,0x8180),_0x1dca85[_0x3126ee(0x252)](0x4,0x1),_0x1dca85[_0x3126ee(0x252)](0x6,_0xb63e0d[_0x3126ee(0x26b)]);const _0x9c07bc=[_0x1d0b7c,_0x2c67a9];for(const _0x3b2103 of _0xb63e0d){const _0x3112c7=String(_0x3b2103[_0x3126ee(0x3f5)]),_0x9339b4=_0x3b2103['type']===0x1?Uint8Array[_0x3126ee(0x419)](_0x3112c7[_0x3126ee(0x208)]('.')[_0x3126ee(0x17e)](Number)):ipv6ToBytes(_0x3112c7);if(_0x9339b4[_0x3126ee(0x26b)]!==(_0x3b2103[_0x3126ee(0x21f)]===0x1?0x4:0x10))continue;const _0x3546a4=new Uint8Array(0xa),_0x348595=new DataView(_0x3546a4[_0x3126ee(0x406)]);_0x348595['setUint16'](0x0,0xc00c),_0x348595['setUint16'](0x2,_0x3b2103[_0x3126ee(0x21f)]),_0x348595['setUint16'](0x4,_0x1bbd48===0x0?0x1:_0x1bbd48),_0x348595[_0x3126ee(0x215)](0x6,Number(_0x3b2103[_0x3126ee(0x335)])||0x12c),_0x9c07bc[_0x3126ee(0x2df)](_0x3546a4,new Uint8Array([_0x9339b4[_0x3126ee(0x26b)]>>0x8&0xff,_0x9339b4['length']&0xff]),_0x9339b4);}let _0xadd4a8=0x0;_0x9c07bc[_0x3126ee(0x442)](_0xf40fe4=>_0xadd4a8+=_0xf40fe4['byteLength']);const _0x2babc8=new Uint8Array(_0xadd4a8);let _0x5af140=0x0;for(const _0x473756 of _0x9c07bc){_0x2babc8['set'](_0x473756,_0x5af140),_0x5af140+=_0x473756[_0x3126ee(0x236)];}return _0x2babc8;}function withTimeout(_0x118d13,_0x36b201,_0x9d1fad){const _0x4111cc=_0x34b348;return Promise[_0x4111cc(0x210)]([_0x118d13,new Promise((_0x3ddcb9,_0x4ec69c)=>setTimeout(()=>_0x4ec69c(new Error(_0x9d1fad||'操作超时')),_0x36b201||0x1770))]);}async function connectWithTimeout(_0x11f35b,_0x26c505,_0x14e5c8){const _0x410df8=_0x34b348,_0x539b2d=connect({'hostname':_0x11f35b,'port':_0x26c505});try{await withTimeout(_0x539b2d[_0x410df8(0x41a)],_0x14e5c8||0x1770,_0x410df8(0x3f7));}catch(_0x14bec4){try{_0x539b2d['close']();}catch(_0x473bea){}throw _0x14bec4;}return _0x539b2d;}async function connectDirect(_0x28e13a,_0x44bf17){const _0x2733fa=_0x34b348;return connectWithTimeout(_0x28e13a[_0x2733fa(0x188)],_0x28e13a[_0x2733fa(0x24d)],_0x44bf17||0x1770);}async function connectViaSocks5(_0xa5de8f,_0x1a80e6){const _0x5c2b0b=_0x34b348,_0x4e8497=await connectWithTimeout(_0xa5de8f['host'],_0xa5de8f['port'],0x1770),_0x16b98f=_0x4e8497[_0x5c2b0b(0x34c)][_0x5c2b0b(0x325)](),_0x780696=_0x4e8497[_0x5c2b0b(0x20f)]['getReader']();let _0x5bdc01=new Uint8Array(0x0);const _0x4b3010=async _0x5c13da=>{const _0xe60e19=_0x5c2b0b;while(_0x5bdc01[_0xe60e19(0x26b)]<_0x5c13da){const {done:_0x349016,value:_0x579fd5}=await _0x780696['read']();if(_0x349016)throw new Error(_0xe60e19(0x2a0));_0x5bdc01=concatBytes(_0x5bdc01,_0x579fd5);}const _0x2a3f8b=_0x5bdc01[_0xe60e19(0x1ab)](0x0,_0x5c13da);return _0x5bdc01=_0x5bdc01['subarray'](_0x5c13da),_0x2a3f8b;},_0x4e24db=_0xa5de8f[_0x5c2b0b(0x1d8)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x16b98f[_0x5c2b0b(0x245)](new Uint8Array(_0x4e24db));const _0xaea140=await _0x4b3010(0x2);if(_0xaea140[0x0]!==0x5||_0xaea140[0x1]===0xff)throw new Error(_0x5c2b0b(0x293));if(_0xaea140[0x1]===0x2){if(!_0xa5de8f[_0x5c2b0b(0x1d8)])throw new Error(_0x5c2b0b(0x2bb));const _0x26c764=TE['encode'](_0xa5de8f['user']),_0x131dff=TE[_0x5c2b0b(0x117)](_0xa5de8f['pass']),_0x322195=new Uint8Array([0x1,_0x26c764[_0x5c2b0b(0x26b)],..._0x26c764,_0x131dff[_0x5c2b0b(0x26b)],..._0x131dff]);await _0x16b98f[_0x5c2b0b(0x245)](_0x322195);const _0x54e103=await _0x4b3010(0x2);if(_0x54e103[0x1]!==0x0)throw new Error('SOCKS5\x20认证失败');}else{if(_0xaea140[0x1]!==0x0)throw new Error(_0x5c2b0b(0x3a5)+_0xaea140[0x1]);}const _0xbe5a77=TE[_0x5c2b0b(0x117)](_0x1a80e6[_0x5c2b0b(0x188)]);let _0x5baf2f;/^\d+\.\d+\.\d+\.\d+$/['test'](_0x1a80e6[_0x5c2b0b(0x188)])?_0x5baf2f=new Uint8Array([0x5,0x1,0x0,0x1,..._0x1a80e6['hostname']['split']('.')['map'](Number),_0x1a80e6[_0x5c2b0b(0x24d)]>>0x8&0xff,_0x1a80e6['port']&0xff]):_0x5baf2f=new Uint8Array([0x5,0x1,0x0,0x3,_0xbe5a77[_0x5c2b0b(0x26b)],..._0xbe5a77,_0x1a80e6['port']>>0x8&0xff,_0x1a80e6[_0x5c2b0b(0x24d)]&0xff]);await _0x16b98f[_0x5c2b0b(0x245)](_0x5baf2f);const _0x398576=await _0x4b3010(0x4);if(_0x398576[0x1]!==0x0)throw new Error(_0x5c2b0b(0x420)+_0x398576[0x1]);if(_0x398576[0x3]===0x1)await _0x4b3010(0x6);else{if(_0x398576[0x3]===0x3){const _0x92cbf=(await _0x4b3010(0x1))[0x0];await _0x4b3010(_0x92cbf+0x2);}else{if(_0x398576[0x3]===0x4)await _0x4b3010(0x12);}}if(_0x5bdc01[_0x5c2b0b(0x236)]>0x0)_0x4e8497['_preamble']=_0x5bdc01;return _0x16b98f[_0x5c2b0b(0x368)](),_0x780696[_0x5c2b0b(0x368)](),_0x4e8497;}async function connectViaHttpProxy(_0xc2499e,_0x17db9a){const _0x5caa3e=_0x34b348,_0x59c683=await connectWithTimeout(_0xc2499e[_0x5caa3e(0x1c7)],_0xc2499e[_0x5caa3e(0x24d)],0x1770),_0xaab999=_0x59c683[_0x5caa3e(0x34c)][_0x5caa3e(0x325)](),_0x25b358=_0x59c683['readable'][_0x5caa3e(0x12c)]();let _0x309737='';if(_0xc2499e[_0x5caa3e(0x1d8)])_0x309737='Proxy-Authorization:\x20Basic\x20'+b64FromBytes(TE['encode'](_0xc2499e[_0x5caa3e(0x1d8)]+':'+_0xc2499e[_0x5caa3e(0x30f)]))+'\x0d\x0a';const _0x233c33='CONNECT\x20'+_0x17db9a['hostname']+':'+_0x17db9a[_0x5caa3e(0x24d)]+_0x5caa3e(0x39d)+_0x17db9a['hostname']+':'+_0x17db9a['port']+'\x0d\x0a'+_0x309737+'\x0d\x0a';await _0xaab999['write'](TE[_0x5caa3e(0x117)](_0x233c33));const {head:_0xebadaa,leftover:_0x966c6c}=await readUntilCRLFCRLF(_0x25b358);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x5caa3e(0x421)](_0xebadaa))throw new Error(_0x5caa3e(0x288)+_0xebadaa[_0x5caa3e(0x208)]('\x0d\x0a')[0x0]);if(_0x966c6c&&_0x966c6c[_0x5caa3e(0x236)]>0x0)_0x59c683[_0x5caa3e(0x307)]=_0x966c6c;return _0xaab999[_0x5caa3e(0x368)](),_0x25b358[_0x5caa3e(0x368)](),_0x59c683;}function ssCipherAlgo(_0xe6f0be){const _0x1502b4=_0x34b348,_0x3d4772=String(_0xe6f0be||'')[_0x1502b4(0x1a7)]()[_0x1502b4(0x38f)](/_/g,'-');if(_0x3d4772===_0x1502b4(0x28f)||_0x3d4772===_0x1502b4(0x1b2))return{'name':_0x1502b4(0x390),'keyLen':0x10};if(_0x3d4772===_0x1502b4(0x3f3)||_0x3d4772===_0x1502b4(0x21e))return{'name':_0x1502b4(0x390),'keyLen':0x20};if(_0x3d4772===_0x1502b4(0x120)||_0x3d4772==='chacha20-poly1305'||_0x3d4772===_0x1502b4(0x416))return{'name':_0x1502b4(0x321),'keyLen':0x20};return null;}function sha1Bytes(_0x2d3d84){const _0x7a984d=_0x34b348,_0x32f044=_0x2d3d84 instanceof Uint8Array?_0x2d3d84:new Uint8Array(_0x2d3d84),_0x26ca68=_0x32f044['length'],_0x3ed674=_0x26ca68*0x8,_0x3c6582=new Uint8Array((_0x26ca68+0x8>>0x6)+0x1<<0x6);_0x3c6582[_0x7a984d(0x2e9)](_0x32f044),_0x3c6582[_0x26ca68]=0x80;const _0x8f09a5=new DataView(_0x3c6582['buffer']);_0x8f09a5[_0x7a984d(0x215)](_0x3c6582[_0x7a984d(0x26b)]-0x8,Math['floor'](_0x3ed674/0x100000000),![]),_0x8f09a5[_0x7a984d(0x215)](_0x3c6582[_0x7a984d(0x26b)]-0x4,_0x3ed674>>>0x0,![]);let _0x5684a3=0x67452301,_0x5ea78d=0xefcdab89,_0x4c01ae=0x98badcfe,_0x1754a9=0x10325476,_0x148a4d=0xc3d2e1f0;const _0x3e8775=new Uint32Array(0x50);for(let _0x137455=0x0;_0x137455<_0x3c6582[_0x7a984d(0x26b)];_0x137455+=0x40){for(let _0x4cecc7=0x0;_0x4cecc7<0x10;_0x4cecc7++)_0x3e8775[_0x4cecc7]=_0x8f09a5[_0x7a984d(0x3b4)](_0x137455+_0x4cecc7*0x4,![]);for(let _0x26a928=0x10;_0x26a928<0x50;_0x26a928++)_0x3e8775[_0x26a928]=rotl32(_0x3e8775[_0x26a928-0x3]^_0x3e8775[_0x26a928-0x8]^_0x3e8775[_0x26a928-0xe]^_0x3e8775[_0x26a928-0x10],0x1);let _0x1374e8=_0x5684a3,_0x516f63=_0x5ea78d,_0x2bf4df=_0x4c01ae,_0x5aa0d7=_0x1754a9,_0x256b1f=_0x148a4d;for(let _0xb43d60=0x0;_0xb43d60<0x50;_0xb43d60++){let _0x253116,_0x7d7ed7;if(_0xb43d60<0x14)_0x253116=_0x516f63&_0x2bf4df|~_0x516f63&_0x5aa0d7,_0x7d7ed7=0x5a827999;else{if(_0xb43d60<0x28)_0x253116=_0x516f63^_0x2bf4df^_0x5aa0d7,_0x7d7ed7=0x6ed9eba1;else _0xb43d60<0x3c?(_0x253116=_0x516f63&_0x2bf4df|_0x516f63&_0x5aa0d7|_0x2bf4df&_0x5aa0d7,_0x7d7ed7=0x8f1bbcdc):(_0x253116=_0x516f63^_0x2bf4df^_0x5aa0d7,_0x7d7ed7=0xca62c1d6);}const _0x97b17f=rotl32(_0x1374e8,0x5)+_0x253116+_0x256b1f+_0x7d7ed7+_0x3e8775[_0xb43d60]>>>0x0;_0x256b1f=_0x5aa0d7,_0x5aa0d7=_0x2bf4df,_0x2bf4df=rotl32(_0x516f63,0x1e),_0x516f63=_0x1374e8,_0x1374e8=_0x97b17f;}_0x5684a3=_0x5684a3+_0x1374e8>>>0x0,_0x5ea78d=_0x5ea78d+_0x516f63>>>0x0,_0x4c01ae=_0x4c01ae+_0x2bf4df>>>0x0,_0x1754a9=_0x1754a9+_0x5aa0d7>>>0x0,_0x148a4d=_0x148a4d+_0x256b1f>>>0x0;}const _0x4e22a0=new Uint8Array(0x14),_0x16b8db=new DataView(_0x4e22a0[_0x7a984d(0x406)]);return _0x16b8db['setUint32'](0x0,_0x5684a3,![]),_0x16b8db['setUint32'](0x4,_0x5ea78d,![]),_0x16b8db[_0x7a984d(0x215)](0x8,_0x4c01ae,![]),_0x16b8db[_0x7a984d(0x215)](0xc,_0x1754a9,![]),_0x16b8db['setUint32'](0x10,_0x148a4d,![]),_0x4e22a0;}function hmacSha1(_0x4c83b2,_0x48e9e0){const _0x30302f=_0x34b348,_0xc942cb=0x40;let _0x595f91=_0x4c83b2;if(_0x595f91[_0x30302f(0x26b)]>_0xc942cb)_0x595f91=sha1Bytes(_0x595f91);const _0x542b0e=new Uint8Array(_0xc942cb),_0x4662d2=new Uint8Array(_0xc942cb);for(let _0x368a4b=0x0;_0x368a4b<_0xc942cb;_0x368a4b++){_0x542b0e[_0x368a4b]=(_0x368a4b<_0x595f91[_0x30302f(0x26b)]?_0x595f91[_0x368a4b]:0x0)^0x36,_0x4662d2[_0x368a4b]=(_0x368a4b<_0x595f91[_0x30302f(0x26b)]?_0x595f91[_0x368a4b]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x4662d2,sha1Bytes(concatBytes(_0x542b0e,_0x48e9e0))));}function hkdfSha1(_0x209c8a,_0x18f285,_0x486b65){const _0x299c74=_0x34b348,_0x44694d=hmacSha1(_0x18f285&&_0x18f285[_0x299c74(0x26b)]?_0x18f285:new Uint8Array(0x14),_0x209c8a);let _0x51bd19=new Uint8Array(0x0),_0x27a37a=new Uint8Array(0x0);for(let _0x53ad21=0x1;_0x27a37a[_0x299c74(0x26b)]<_0x486b65;_0x53ad21++){const _0x25e0b0=new Uint8Array([_0x53ad21]);_0x51bd19=hmacSha1(_0x44694d,concatBytes(concatBytes(_0x51bd19,TE['encode'](_0x299c74(0x1a2))),_0x25e0b0)),_0x27a37a=concatBytes(_0x27a37a,_0x51bd19);}return _0x27a37a['slice'](0x0,_0x486b65);}function chacha20Block(_0x4bec8d,_0x224ef9,_0x5d0c73){const _0x3c6e67=_0x34b348,_0x4a84ee=new Uint32Array(0x10);_0x4a84ee[0x0]=0x61707865,_0x4a84ee[0x1]=0x3320646e,_0x4a84ee[0x2]=0x79622d32,_0x4a84ee[0x3]=0x6b206574;const _0x568725=new DataView(_0x4bec8d[_0x3c6e67(0x406)],_0x4bec8d[_0x3c6e67(0x262)],0x20);for(let _0x3bf6e=0x0;_0x3bf6e<0x8;_0x3bf6e++)_0x4a84ee[0x4+_0x3bf6e]=_0x568725['getUint32'](_0x3bf6e*0x4,!![]);_0x4a84ee[0xc]=_0x224ef9>>>0x0;const _0x62b63=new DataView(_0x5d0c73[_0x3c6e67(0x406)],_0x5d0c73[_0x3c6e67(0x262)],0xc);_0x4a84ee[0xd]=_0x62b63[_0x3c6e67(0x3b4)](0x0,!![]),_0x4a84ee[0xe]=_0x62b63[_0x3c6e67(0x3b4)](0x4,!![]),_0x4a84ee[0xf]=_0x62b63[_0x3c6e67(0x3b4)](0x8,!![]);const _0x4e571e=_0x4a84ee['slice'](),_0x2a09cd=(_0x522ea1,_0x5dd9f8,_0x51be2c,_0x57a219)=>{_0x4e571e[_0x522ea1]=_0x4e571e[_0x522ea1]+_0x4e571e[_0x5dd9f8]>>>0x0,_0x4e571e[_0x57a219]=rotl32(_0x4e571e[_0x57a219]^_0x4e571e[_0x522ea1],0x10),_0x4e571e[_0x51be2c]=_0x4e571e[_0x51be2c]+_0x4e571e[_0x57a219]>>>0x0,_0x4e571e[_0x5dd9f8]=rotl32(_0x4e571e[_0x5dd9f8]^_0x4e571e[_0x51be2c],0xc),_0x4e571e[_0x522ea1]=_0x4e571e[_0x522ea1]+_0x4e571e[_0x5dd9f8]>>>0x0,_0x4e571e[_0x57a219]=rotl32(_0x4e571e[_0x57a219]^_0x4e571e[_0x522ea1],0x8),_0x4e571e[_0x51be2c]=_0x4e571e[_0x51be2c]+_0x4e571e[_0x57a219]>>>0x0,_0x4e571e[_0x5dd9f8]=rotl32(_0x4e571e[_0x5dd9f8]^_0x4e571e[_0x51be2c],0x7);};for(let _0x265a7f=0x0;_0x265a7f<0xa;_0x265a7f++){_0x2a09cd(0x0,0x4,0x8,0xc),_0x2a09cd(0x1,0x5,0x9,0xd),_0x2a09cd(0x2,0x6,0xa,0xe),_0x2a09cd(0x3,0x7,0xb,0xf),_0x2a09cd(0x0,0x5,0xa,0xf),_0x2a09cd(0x1,0x6,0xb,0xc),_0x2a09cd(0x2,0x7,0x8,0xd),_0x2a09cd(0x3,0x4,0x9,0xe);}const _0x26921c=new Uint8Array(0x40),_0x13595a=new DataView(_0x26921c[_0x3c6e67(0x406)]);for(let _0x1fdf1a=0x0;_0x1fdf1a<0x10;_0x1fdf1a++){_0x4e571e[_0x1fdf1a]=_0x4e571e[_0x1fdf1a]+_0x4a84ee[_0x1fdf1a]>>>0x0,_0x13595a[_0x3c6e67(0x215)](_0x1fdf1a*0x4,_0x4e571e[_0x1fdf1a],!![]);}return _0x26921c;}function chacha20Xor(_0x3263ac,_0x4b04bf,_0x1d8dde,_0x8ad219){const _0x3d83ef=_0x34b348,_0x55b1c1=_0x8ad219[_0x3d83ef(0x1ab)](),_0x3eeb2f=Math[_0x3d83ef(0x3b1)](_0x8ad219['length']/0x40);for(let _0x3ce58f=0x0;_0x3ce58f<_0x3eeb2f;_0x3ce58f++){const _0x356195=chacha20Block(_0x3263ac,_0x1d8dde+_0x3ce58f,_0x4b04bf),_0x34d04c=_0x3ce58f*0x40,_0x45edfe=Math[_0x3d83ef(0x446)](0x40,_0x55b1c1[_0x3d83ef(0x26b)]-_0x34d04c);for(let _0x5b2e63=0x0;_0x5b2e63<_0x45edfe;_0x5b2e63++)_0x55b1c1[_0x34d04c+_0x5b2e63]^=_0x356195[_0x5b2e63];}return _0x55b1c1;}function poly1305(_0x9a8ee3,_0x3b57c9){const _0x154812=_0x34b348;let _0xae6fc4=0x0n,_0x5a2c38=0x0n;for(let _0x3e8009=0x0;_0x3e8009<0x10;_0x3e8009++){_0xae6fc4|=BigInt(_0x9a8ee3[_0x3e8009])<<BigInt(0x8*_0x3e8009),_0x5a2c38|=BigInt(_0x9a8ee3[0x10+_0x3e8009])<<BigInt(0x8*_0x3e8009);}_0xae6fc4&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x577441=0x0n;const _0x11a684=(0x1n<<0x82n)-0x5n;for(let _0x387e76=0x0;_0x387e76<_0x3b57c9[_0x154812(0x26b)];_0x387e76+=0x10){const _0x6f6c3f=Math['min'](0x10,_0x3b57c9[_0x154812(0x26b)]-_0x387e76);let _0x3bcff1=0x1n;for(let _0x3ecf79=_0x6f6c3f-0x1;_0x3ecf79>=0x0;_0x3ecf79--)_0x3bcff1=_0x3bcff1<<0x8n|BigInt(_0x3b57c9[_0x387e76+_0x3ecf79]);_0x577441=(_0x577441+_0x3bcff1)*_0xae6fc4%_0x11a684;}_0x577441=_0x577441+_0x5a2c38&(0x1n<<0x80n)-0x1n;const _0x20a2c7=new Uint8Array(0x10);for(let _0x575171=0x0;_0x575171<0x10;_0x575171++)_0x20a2c7[_0x575171]=Number(_0x577441>>BigInt(0x8*_0x575171)&0xffn);return _0x20a2c7;}function chacha20Poly1305Seal(_0x112481,_0x38eee0,_0x1269b7,_0x2870cd){const _0x13b64a=_0x34b348,_0xf8f90=_0x2870cd||new Uint8Array(0x0),_0x3eee5a=chacha20Xor(_0x112481,_0x38eee0,0x0,new Uint8Array(0x20)),_0x54a075=chacha20Xor(_0x112481,_0x38eee0,0x1,_0x1269b7),_0x3ce5aa=_0x26ea20=>new Uint8Array((0x10-_0x26ea20%0x10)%0x10),_0x27c8ea=_0x5e1b52=>{const _0x138b8e=_0x2664,_0x5416a6=new Uint8Array(0x8),_0x411d00=new DataView(_0x5416a6[_0x138b8e(0x406)]);return _0x411d00['setUint32'](0x0,_0x5e1b52>>>0x0,!![]),_0x411d00[_0x138b8e(0x215)](0x4,Math['floor'](_0x5e1b52/0x100000000),!![]),_0x5416a6;},_0xb1381c=concatBytes(_0xf8f90,concatBytes(_0x3ce5aa(_0xf8f90[_0x13b64a(0x26b)]),concatBytes(_0x54a075,concatBytes(_0x3ce5aa(_0x54a075[_0x13b64a(0x26b)]),concatBytes(_0x27c8ea(_0xf8f90[_0x13b64a(0x26b)]),_0x27c8ea(_0x54a075[_0x13b64a(0x26b)])))))),_0x1761e1=poly1305(_0x3eee5a,_0xb1381c);return concatBytes(_0x54a075,_0x1761e1);}function chacha20Poly1305Open(_0x51d174,_0x24f437,_0x28d9f6,_0xb1acfe){const _0x50425d=_0x34b348;if(_0x28d9f6['length']<0x10)throw new Error(_0x50425d(0x303));const _0x39659e=_0x28d9f6['subarray'](0x0,_0x28d9f6['length']-0x10),_0x10d9fb=_0x28d9f6[_0x50425d(0x189)](_0x28d9f6[_0x50425d(0x26b)]-0x10),_0x34924d=_0xb1acfe||new Uint8Array(0x0),_0x1bb412=chacha20Xor(_0x51d174,_0x24f437,0x0,new Uint8Array(0x20)),_0x1e5413=_0x2c53f4=>new Uint8Array((0x10-_0x2c53f4%0x10)%0x10),_0x1a6a03=_0x5a2b90=>{const _0x38032b=_0x50425d,_0x42c879=new Uint8Array(0x8),_0x5e89c7=new DataView(_0x42c879[_0x38032b(0x406)]);return _0x5e89c7[_0x38032b(0x215)](0x0,_0x5a2b90>>>0x0,!![]),_0x5e89c7['setUint32'](0x4,Math[_0x38032b(0x125)](_0x5a2b90/0x100000000),!![]),_0x42c879;},_0x24a04a=concatBytes(_0x34924d,concatBytes(_0x1e5413(_0x34924d[_0x50425d(0x26b)]),concatBytes(_0x39659e,concatBytes(_0x1e5413(_0x39659e[_0x50425d(0x26b)]),concatBytes(_0x1a6a03(_0x34924d[_0x50425d(0x26b)]),_0x1a6a03(_0x39659e[_0x50425d(0x26b)])))))),_0x588c24=poly1305(_0x1bb412,_0x24a04a);let _0x10b40f=0x0;for(let _0x2fda8d=0x0;_0x2fda8d<0x10;_0x2fda8d++)_0x10b40f|=_0x588c24[_0x2fda8d]^_0x10d9fb[_0x2fda8d];if(_0x10b40f!==0x0)return null;return chacha20Xor(_0x51d174,_0x24f437,0x1,_0x39659e);}async function newSsAead(_0x217781,_0x210d21){const _0x321946=_0x34b348,_0x12eb2a=new Uint8Array(0xc),_0x36ddd7=()=>{const _0x1483d5=_0x12eb2a['slice']();for(let _0x53eb40=0xb;_0x53eb40>=0x0;_0x53eb40--){_0x1483d5[_0x53eb40]++;if(_0x1483d5[_0x53eb40]!==0x0)break;}return _0x1483d5;};if(_0x217781===_0x321946(0x321))return{'seal'(_0x1f7c2a){return chacha20Poly1305Seal(_0x210d21,_0x36ddd7(),_0x1f7c2a);},'open'(_0x4b8713){const _0x4cc7e4=chacha20Poly1305Open(_0x210d21,_0x36ddd7(),_0x4b8713);if(!_0x4cc7e4)throw new Error('SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）');return _0x4cc7e4;}};const _0x388c0f=await crypto[_0x321946(0x39f)]['importKey']('raw',_0x210d21,{'name':_0x217781},![],[_0x321946(0x3a4),_0x321946(0x264)]);return{async 'seal'(_0x4cad34){const _0x195bc0=_0x321946;return new Uint8Array(await crypto[_0x195bc0(0x39f)][_0x195bc0(0x3a4)]({'name':_0x217781,'iv':_0x36ddd7()},_0x388c0f,_0x4cad34));},async 'open'(_0x148806){const _0x4a925b=_0x321946;try{return new Uint8Array(await crypto['subtle']['decrypt']({'name':_0x217781,'iv':_0x36ddd7()},_0x388c0f,_0x148806));}catch(_0x5f3cd4){throw new Error(_0x4a925b(0x25d));}}};}async function ssSealChunk(_0x28674f,_0x520888){const _0x3049d3=_0x34b348,_0x5d0758=new Uint8Array([_0x520888['length']>>0x8&0xff,_0x520888['length']&0xff]);return concatBytes(await _0x28674f['seal'](_0x5d0758),await _0x28674f[_0x3049d3(0x16a)](_0x520888));}async function connectViaShadowsocks(_0x422b19,_0xc40650){const _0x5ee4c1=_0x34b348,_0x485e36=ssCipherAlgo(_0x422b19[_0x5ee4c1(0x25a)]);if(!_0x485e36)throw new Error(_0x5ee4c1(0x440)+(_0x422b19['method']||_0x5ee4c1(0x19f)));if(!_0x422b19[_0x5ee4c1(0x16e)])throw new Error(_0x5ee4c1(0x1f0));const _0x54ac0e=await connectWithTimeout(_0x422b19[_0x5ee4c1(0x1c7)],_0x422b19['port'],0x1770),_0x175925=_0x54ac0e[_0x5ee4c1(0x34c)][_0x5ee4c1(0x325)](),_0x4dc75b=_0x54ac0e['readable'][_0x5ee4c1(0x12c)]();let _0x17c85e=new Uint8Array(0x0);const _0x22b1c0=async _0x230abd=>{const _0x27db87=_0x5ee4c1;while(_0x17c85e[_0x27db87(0x26b)]<_0x230abd){const {done:_0x4db12e,value:_0x37a699}=await _0x4dc75b['read']();if(_0x4db12e)throw new Error(_0x27db87(0x381));_0x17c85e=concatBytes(_0x17c85e,_0x37a699);}const _0xbd7c2c=_0x17c85e[_0x27db87(0x1ab)](0x0,_0x230abd);return _0x17c85e=_0x17c85e['subarray'](_0x230abd),_0xbd7c2c;},_0x30e996=new Uint8Array(await crypto[_0x5ee4c1(0x39f)]['digest']('SHA-256',TE[_0x5ee4c1(0x117)](_0x422b19[_0x5ee4c1(0x16e)]))),_0x5eedbb=crypto[_0x5ee4c1(0x278)](new Uint8Array(0x10)),_0xa4431b=await newSsAead(_0x485e36[_0x5ee4c1(0x121)],await hkdfSha1(_0x30e996,_0x5eedbb,_0x485e36[_0x5ee4c1(0x359)]));await _0x175925[_0x5ee4c1(0x245)](_0x5eedbb),await _0x175925['write'](await ssSealChunk(_0xa4431b,new Uint8Array(0x0)));const _0x258b08=new ReadableStream({async 'start'(_0x13cf53){const _0x2746c0=_0x5ee4c1;try{const _0x3e9890=await _0x22b1c0(0x10),_0x3056b2=await newSsAead(_0x485e36[_0x2746c0(0x121)],await hkdfSha1(_0x30e996,_0x3e9890,_0x485e36['keyLen']));while(!![]){const _0x56907d=await _0x3056b2['open'](await _0x22b1c0(0x12)),_0x61b50=_0x56907d[0x0]<<0x8|_0x56907d[0x1];if(_0x61b50>0x4000)throw new Error(_0x2746c0(0x408)+_0x61b50);const _0x3e20d9=await _0x3056b2[_0x2746c0(0x399)](await _0x22b1c0(_0x61b50+0x10));if(_0x61b50>0x0)_0x13cf53[_0x2746c0(0x1f5)](_0x3e20d9);}}catch(_0x5396d6){try{_0x13cf53[_0x2746c0(0x34f)](_0x5396d6);}catch(_0x132aed){}}}}),_0x4c2260=new WritableStream({async 'write'(_0x2c28e1){const _0x478205=_0x5ee4c1,_0xe01c76=_0x2c28e1 instanceof Uint8Array?_0x2c28e1:new Uint8Array(_0x2c28e1);for(let _0x4c16dd=0x0;_0x4c16dd<_0xe01c76[_0x478205(0x26b)];_0x4c16dd+=0x4000){await _0x175925[_0x478205(0x245)](await ssSealChunk(_0xa4431b,_0xe01c76[_0x478205(0x189)](_0x4c16dd,Math['min'](_0xe01c76[_0x478205(0x26b)],_0x4c16dd+0x4000))));}},'close'(){const _0x11173e=_0x5ee4c1;try{_0x175925[_0x11173e(0x1f3)]();}catch(_0x37e28e){}},'abort'(){const _0x9d1d07=_0x5ee4c1;try{_0x175925[_0x9d1d07(0x119)]();}catch(_0x5ce16a){}}});return{'readable':_0x258b08,'writable':_0x4c2260,'close'(){try{_0x54ac0e['close']();}catch(_0x40e44b){}}};}async function readN(_0x4bcd0d,_0x434ce1){const _0x323a5f=_0x34b348,_0x20f5f0=new Uint8Array(_0x434ce1);let _0x43fbf6=0x0;while(_0x43fbf6<_0x434ce1){const {done:_0x4fbc3e,value:_0x5a8589}=await _0x4bcd0d[_0x323a5f(0x330)]();if(_0x4fbc3e)throw new Error(_0x323a5f(0x2a0));const _0x5eec99=_0x434ce1-_0x43fbf6;_0x20f5f0['set'](_0x5a8589[_0x323a5f(0x189)](0x0,Math[_0x323a5f(0x446)](_0x5eec99,_0x5a8589[_0x323a5f(0x26b)])),_0x43fbf6),_0x43fbf6+=Math[_0x323a5f(0x446)](_0x5eec99,_0x5a8589[_0x323a5f(0x26b)]);}return _0x20f5f0;}async function readUntilCRLFCRLF(_0x51f94a){const _0x5e48c6=_0x34b348;let _0x1a9d57=new Uint8Array(0x0);while(_0x1a9d57[_0x5e48c6(0x26b)]<0x10000){const {done:_0x398ec2,value:_0x3965f9}=await _0x51f94a[_0x5e48c6(0x330)]();if(_0x398ec2)break;_0x1a9d57=concatBytes(_0x1a9d57,_0x3965f9);const _0x5377ed=findBytes(_0x1a9d57,[0xd,0xa,0xd,0xa]);if(_0x5377ed>=0x0)return{'head':TD[_0x5e48c6(0x338)](_0x1a9d57[_0x5e48c6(0x189)](0x0,_0x5377ed)),'leftover':_0x1a9d57[_0x5e48c6(0x189)](_0x5377ed+0x4)};}return{'head':TD[_0x5e48c6(0x338)](_0x1a9d57),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x4f17cf,_0x171027){const _0x345bbf=_0x34b348,_0x27b452=new Uint8Array(_0x4f17cf[_0x345bbf(0x26b)]+_0x171027[_0x345bbf(0x26b)]);return _0x27b452[_0x345bbf(0x2e9)](_0x4f17cf,0x0),_0x27b452[_0x345bbf(0x2e9)](_0x171027,_0x4f17cf[_0x345bbf(0x26b)]),_0x27b452;}function findBytes(_0x3b2bc1,_0x3fd57c){const _0x3bf303=_0x34b348;_0xb1ba3c:for(let _0x75840f=0x0;_0x75840f<=_0x3b2bc1[_0x3bf303(0x26b)]-_0x3fd57c['length'];_0x75840f++){for(let _0x5e9dd5=0x0;_0x5e9dd5<_0x3fd57c[_0x3bf303(0x26b)];_0x5e9dd5++)if(_0x3b2bc1[_0x75840f+_0x5e9dd5]!==_0x3fd57c[_0x5e9dd5])continue _0xb1ba3c;return _0x75840f;}return-0x1;}const RELAY_DOMAINS={'HK':'proxyip.hk.cmliussss.net','US':_0x34b348(0x2be),'SG':_0x34b348(0x363),'JP':_0x34b348(0x36f),'KR':_0x34b348(0x112),'DE':'proxyip.de.cmliussss.net','SE':_0x34b348(0x2c7),'NL':_0x34b348(0x305),'FI':_0x34b348(0x18b),'GB':_0x34b348(0x389),'Oracle':_0x34b348(0x2ad),'DigitalOcean':_0x34b348(0x1cc),'Vultr':_0x34b348(0x274),'Multacom':_0x34b348(0x193)};function selectRelayRegion(_0x1db8eb){const _0x1febb7=_0x34b348,_0x371ee7=(_0x1db8eb||'')[_0x1febb7(0x3e0)]();if(_0x371ee7['startsWith'](_0x1febb7(0x327))||_0x371ee7[_0x1febb7(0x3b7)]('HK'))return'HK';if(_0x371ee7[_0x1febb7(0x3b7)]('SIN')||_0x371ee7['startsWith']('SG'))return'SG';if(_0x371ee7[_0x1febb7(0x3b7)]('NRT')||_0x371ee7['startsWith'](_0x1febb7(0x42d))||_0x371ee7['startsWith'](_0x1febb7(0x36a))||_0x371ee7['startsWith'](_0x1febb7(0x23f))||_0x371ee7['startsWith']('JP'))return'JP';if(_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x3d1))||_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x2c1))||_0x371ee7['startsWith']('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/['test'](_0x371ee7))return'HK';if(_0x371ee7['startsWith']('FRA')||_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x2f7))||_0x371ee7[_0x1febb7(0x3b7)]('MUC')||_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x1fb))||_0x371ee7['startsWith'](_0x1febb7(0x44a))||_0x371ee7[_0x1febb7(0x3b7)]('STR')||_0x371ee7[_0x1febb7(0x3b7)]('DE'))return'DE';if(_0x371ee7['startsWith'](_0x1febb7(0x361))||_0x371ee7[_0x1febb7(0x3b7)]('SE'))return'SE';if(_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x3ae))||_0x371ee7[_0x1febb7(0x3b7)]('NL'))return'NL';if(_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x16f))||_0x371ee7[_0x1febb7(0x3b7)]('FI'))return'FI';if(_0x371ee7[_0x1febb7(0x3b7)]('LHR')||_0x371ee7[_0x1febb7(0x3b7)](_0x1febb7(0x405))||_0x371ee7[_0x1febb7(0x3b7)]('GB')||_0x371ee7[_0x1febb7(0x3b7)]('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/[_0x1febb7(0x421)](_0x371ee7))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x46c8a0,_0x49f6fb){const _0x1fac4a=_0x34b348;_0x49f6fb=_0x49f6fb||0x1bb;if(isValidIp(_0x46c8a0))return[{'hostname':_0x46c8a0,'port':_0x49f6fb}];const _0x2c579d=_0x46c8a0+':'+_0x49f6fb,_0x3053e5=Date[_0x1fac4a(0x1c9)](),_0x155da4=PROXYIP_CACHE[_0x1fac4a(0x1d4)](_0x2c579d);if(_0x155da4&&_0x3053e5-_0x155da4['t']<0x5*0x3c*0x3e8)return _0x155da4[_0x1fac4a(0x3ed)];const _0x314160=[_0x1fac4a(0x11a),'https://dns.alidns.com/resolve',_0x1fac4a(0x44b)],_0x3ba9ec=async(_0x474d7d,_0x88abfd)=>{const _0x4b6b01=_0x1fac4a,_0x37c262=_0x314160[_0x4b6b01(0x17e)](async _0x402922=>{const _0x32ca87=_0x4b6b01,_0x404ea0=await fetchTimeout(_0x402922+'?name='+encodeURIComponent(_0x46c8a0)+_0x32ca87(0x111)+_0x474d7d,{'headers':{'accept':_0x32ca87(0x218)}},0xfa0);if(!_0x404ea0||!_0x404ea0['ok'])throw new Error(_0x32ca87(0x267));const _0x1f7c02=await _0x404ea0[_0x32ca87(0x196)]();return(_0x1f7c02['Answer']||[])[_0x32ca87(0x3ff)](_0x114b70=>_0x114b70[_0x32ca87(0x21f)]===_0x88abfd)[_0x32ca87(0x17e)](_0x3a3fe2=>_0x3a3fe2[_0x32ca87(0x3f5)]);});try{return await Promise[_0x4b6b01(0x187)](_0x37c262);}catch(_0x50e0d0){return[];}},[_0x420ef3,_0x4dda09]=await Promise[_0x1fac4a(0x3a1)]([_0x3ba9ec(_0x1fac4a(0x3fe),0x10),_0x3ba9ec('A',0x1)]);let _0x414a96=[];for(const _0x48296f of _0x420ef3){const _0x4d2664=String(_0x48296f)[_0x1fac4a(0x38f)](/^"|"$/g,'')[_0x1fac4a(0x38f)](/\\010/g,',')[_0x1fac4a(0x38f)](/\n/g,',')[_0x1fac4a(0x1d1)]();if(!_0x4d2664)continue;if(_0x4d2664===_0x1fac4a(0x286)){_0x414a96=_0x4dda09[_0x1fac4a(0x3ff)](_0xb08825=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0xb08825))['map'](_0x228979=>({'hostname':_0x228979,'port':_0x49f6fb}));break;}const _0x565942=_0x4d2664['split'](/[,;\s]+/)[_0x1fac4a(0x17e)](_0x34f3f5=>_0x34f3f5['trim']())[_0x1fac4a(0x3ff)](Boolean),_0x1b23b0=[];for(const _0x1d5cfb of _0x565942){const {host:_0x1e3a7f,port:_0x3035b8}=parseHostPort(_0x1d5cfb,_0x49f6fb);if(isValidIp(_0x1e3a7f))_0x1b23b0[_0x1fac4a(0x2df)]({'hostname':_0x1e3a7f,'port':_0x3035b8});}if(_0x1b23b0[_0x1fac4a(0x26b)]){_0x414a96=_0x1b23b0;break;}}!_0x414a96[_0x1fac4a(0x26b)]&&(_0x414a96=_0x4dda09[_0x1fac4a(0x3ff)](_0xe36d57=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0xe36d57))[_0x1fac4a(0x17e)](_0x3ee867=>({'hostname':_0x3ee867,'port':_0x49f6fb})));if(!_0x414a96['length']){const _0x173126=await _0x3ba9ec(_0x1fac4a(0x456),0x1c);_0x414a96=_0x173126['filter'](_0x2dd657=>isValidIp(_0x2dd657))['map'](_0x4a934d=>({'hostname':_0x4a934d,'port':_0x49f6fb}));}const _0x2c7249=new Set(),_0x1f8796=_0x414a96[_0x1fac4a(0x3ff)](_0x51f342=>{const _0x1e2572=_0x51f342['hostname']+':'+_0x51f342['port'];if(_0x2c7249['has'](_0x1e2572))return![];return _0x2c7249['add'](_0x1e2572),!![];});if(_0x1f8796[_0x1fac4a(0x26b)])PROXYIP_CACHE[_0x1fac4a(0x2e9)](_0x2c579d,{'t':_0x3053e5,'ips':_0x1f8796});return _0x1f8796;}async function openOutbound(_0x2eed55,_0x45226e,_0xecf068,_0x504dee){const _0x49e20d=_0x34b348,_0x296eb9=parseProxyAddress(_0x45226e[_0x49e20d(0x202)]),_0x3581b3=_0x45226e[_0x49e20d(0x127)]||'',_0x5265d5=_0x296eb9?_0x296eb9['type']==='http'||_0x296eb9[_0x49e20d(0x21f)]==='https'?_0x1d3b61=>connectViaHttpProxy(_0x296eb9,_0x1d3b61):_0x296eb9['type']==='ss'?_0x4fa6d7=>connectViaShadowsocks(_0x296eb9,_0x4fa6d7):_0x85225e=>connectViaSocks5(_0x296eb9,_0x85225e):null,_0x104082=(_0x4afb14,_0xd0f1ae)=>{const _0x421c9b=_0x49e20d,_0x58d602=[];if(_0x3581b3===_0x421c9b(0x356))_0x58d602[_0x421c9b(0x2df)](_0x5265d5?()=>_0x5265d5(_0x4afb14):()=>connectDirect(_0x4afb14,_0xd0f1ae));else{if(_0x3581b3==='no'){_0x58d602[_0x421c9b(0x2df)](()=>connectDirect(_0x4afb14,_0xd0f1ae));if(_0x5265d5)_0x58d602[_0x421c9b(0x2df)](()=>_0x5265d5(_0x4afb14));}else{if(_0x5265d5)_0x58d602[_0x421c9b(0x2df)](()=>_0x5265d5(_0x4afb14));_0x58d602[_0x421c9b(0x2df)](()=>connectDirect(_0x4afb14,_0xd0f1ae));}}return _0x58d602;};let _0x36998e;const _0x1e0fb5=async(_0x549033,_0x2d1bf5)=>{for(const _0x7a721 of _0x104082(_0x549033,_0x2d1bf5)){try{return await _0x7a721();}catch(_0x51cb98){_0x36998e=_0x51cb98;}}return null;},_0x2ab219=_0x45226e[_0x49e20d(0x2fc)]?parseHostPort(_0x45226e[_0x49e20d(0x2fc)],0x1bb):null;if(_0x2ab219&&_0x2ab219[_0x49e20d(0x1c7)]){let _0x29724b=await resolveProxyIPs(_0x2ab219[_0x49e20d(0x1c7)],_0x2ab219[_0x49e20d(0x24d)]);if(!_0x29724b['length'])_0x29724b=[{'hostname':_0x2ab219['host'],'port':_0x2ab219['port']}];for(const _0x43ebcf of _0x29724b){const _0x56fa45=await _0x1e0fb5(_0x43ebcf,0x1770);if(_0x56fa45)return _0x56fa45;}}const _0x4c029a=await _0x1e0fb5({'hostname':_0x2eed55[_0x49e20d(0x148)],'port':_0x2eed55[_0x49e20d(0x24d)]},0x1770);if(_0x4c029a)return _0x4c029a;{const _0xfcebba=selectRelayRegion(_0xecf068),_0x174c2f=[_0xfcebba,...Object[_0x49e20d(0x2dc)](RELAY_DOMAINS)['filter'](_0x16b260=>_0x16b260!==_0xfcebba)][_0x49e20d(0x1ab)](0x0,0x3);for(const _0x2b5822 of _0x174c2f){const _0x134b6d=RELAY_DOMAINS[_0x2b5822];if(!_0x134b6d)continue;let _0x2ee282=[];try{_0x2ee282=await resolveProxyIPs(_0x134b6d,0x1bb);}catch(_0x80dff9){}if(!_0x2ee282['length'])continue;for(const _0x595f28 of _0x2ee282){const _0x21d27a=await _0x1e0fb5(_0x595f28,0x1388);if(_0x21d27a)return _0x21d27a;}}}throw _0x36998e||new Error(_0x49e20d(0x360));}async function pumpToReader(_0x2b2688,_0x42dcb0,_0x4a74f2){const _0x172f6c=_0x34b348;try{while(!![]){const {done:_0x1cdaa1,value:_0x283070}=await _0x2b2688[_0x172f6c(0x330)]();if(_0x1cdaa1)break;_0x42dcb0(_0x283070);}}catch(_0xb8995f){}try{if(_0x4a74f2)_0x4a74f2();}catch(_0x1c88ce){}}async function handleWebSocketProxy(_0x272a93,_0x29a235){const _0x1a5bd1=_0x34b348,_0x4b7295=new WebSocketPair(),[_0x537d45,_0xa92ee0]=Object[_0x1a5bd1(0x342)](_0x4b7295);try{_0xa92ee0[_0x1a5bd1(0x34b)]({'allowHalfOpen':!![]});}catch(_0x590caa){_0xa92ee0[_0x1a5bd1(0x34b)]();}_0xa92ee0['binaryType']=_0x1a5bd1(0x2ba);let _0x1a3048=null,_0x33b702=null,_0x2be1fd=![],_0x3d73fa=null;const _0x24c6af=_0xa8e502=>{const _0x82dd96=_0x1a5bd1;try{_0xa92ee0[_0x82dd96(0x271)](_0xa8e502);}catch(_0x50f9a9){}};_0xa92ee0[_0x1a5bd1(0x1ff)]('message',async _0x59d2ec=>{const _0x5a8392=_0x1a5bd1;try{const _0x5d030a=typeof _0x59d2ec[_0x5a8392(0x3f5)]===_0x5a8392(0x45f)?TE[_0x5a8392(0x117)](_0x59d2ec[_0x5a8392(0x3f5)]):new Uint8Array(_0x59d2ec[_0x5a8392(0x3f5)]);if(!_0x2be1fd){_0x3d73fa=_0x3d73fa?concatBytes(_0x3d73fa,_0x5d030a):_0x5d030a;let _0x4991e0,_0x4d1969;try{let _0x59c900=detectTrojan(_0x3d73fa,_0x29a235);if(!_0x59c900&&_0x3d73fa[_0x5a8392(0x236)]>0x0&&_0x3d73fa[0x0]!==0x0&&_0x3d73fa['byteLength']<0x3a)return;_0x4d1969=!_0x59c900,_0x4991e0=_0x59c900?parseTrojanHeader(_0x3d73fa):parseVlessHeader(_0x3d73fa);}catch(_0x4938f6){if(/头部过短/[_0x5a8392(0x421)](_0x4938f6['message']||''))return;throw _0x4938f6;}_0x2be1fd=!![];if(_0x4991e0[_0x5a8392(0x1e4)]===0x2){try{const _0x38144a=_0x3d73fa[_0x5a8392(0x189)](_0x4991e0[_0x5a8392(0x320)]);if(_0x4991e0[_0x5a8392(0x24d)]===0x35&&_0x38144a['byteLength']>=0xc){const _0x2f1f9a=await dnsToDoH(_0x38144a);if(_0x2f1f9a)_0x24c6af(_0x2f1f9a);}}catch(_0x28d151){}try{_0xa92ee0[_0x5a8392(0x1f3)](0x3e8);}catch(_0x115428){}return;}const _0x1287ad=await openOutbound(_0x4991e0,_0x29a235,_0x272a93['cf']&&_0x272a93['cf'][_0x5a8392(0x28c)],_0x4d1969);_0x1a3048=_0x1287ad,_0x33b702=_0x1287ad[_0x5a8392(0x34c)][_0x5a8392(0x325)]();if(_0x4d1969)_0x24c6af(new Uint8Array([0x0,0x0]));if(_0x1287ad[_0x5a8392(0x307)]&&_0x1287ad[_0x5a8392(0x307)]['byteLength']>0x0)_0x24c6af(_0x1287ad[_0x5a8392(0x307)]);if(_0x3d73fa&&_0x3d73fa[_0x5a8392(0x236)]>_0x4991e0[_0x5a8392(0x320)])await _0x33b702[_0x5a8392(0x245)](_0x3d73fa[_0x5a8392(0x189)](_0x4991e0['headerLength']));_0x3d73fa=null,pumpToReader(_0x1287ad['readable'][_0x5a8392(0x12c)](),_0x24c6af,()=>{const _0x1cf9f3=_0x5a8392;try{_0xa92ee0[_0x1cf9f3(0x1f3)](0x3e8);}catch(_0x3063ad){}});}else{if(_0x33b702)await _0x33b702[_0x5a8392(0x245)](_0x5d030a);else _0x3d73fa=_0x3d73fa?concatBytes(_0x3d73fa,_0x5d030a):_0x5d030a;}}catch(_0x2e70d8){try{_0xa92ee0[_0x5a8392(0x1f3)](0x3f3,String(_0x2e70d8&&_0x2e70d8[_0x5a8392(0x287)]||_0x2e70d8));}catch(_0x404fed){}}});const _0x3f7055=()=>{const _0x4d9b90=_0x1a5bd1;if(_0x1a3048){try{_0x1a3048[_0x4d9b90(0x1f3)]();}catch(_0x57a5aa){}_0x1a3048=null;}};return _0xa92ee0[_0x1a5bd1(0x1ff)]('close',_0x3f7055),_0xa92ee0[_0x1a5bd1(0x1ff)](_0x1a5bd1(0x34f),_0x3f7055),new Response(null,{'status':0x65,'webSocket':_0x537d45});}async function handleXhttpProxy(_0x13fee8,_0x54654){const _0x3bd937=_0x34b348,_0x3e40f6=_0x13fee8[_0x3bd937(0x27c)]['getReader'](),_0x16f06b=await _0x3e40f6['read']();if(_0x16f06b['done'])return new Response(_0x3bd937(0x1ea),{'status':0x190});const _0x208f8b=parseVlessHeader(_0x16f06b[_0x3bd937(0x314)]),_0x26e643=await openOutbound(_0x208f8b,_0x54654,_0x13fee8['cf']&&_0x13fee8['cf'][_0x3bd937(0x28c)],!![]),_0x486cb5=_0x26e643['writable']['getWriter']();await _0x486cb5[_0x3bd937(0x245)](_0x16f06b['value']['subarray'](_0x208f8b[_0x3bd937(0x320)])),((async()=>{const _0x24394f=_0x3bd937;try{while(!![]){const {done:_0x23b1fe,value:_0x7f9d28}=await _0x3e40f6[_0x24394f(0x330)]();if(_0x23b1fe)break;await _0x486cb5['write'](_0x7f9d28);}}catch(_0x897d94){}try{await _0x486cb5['close']();}catch(_0x174a08){}})());const _0x920d95=new ReadableStream({async 'start'(_0x3e7a37){const _0x33dea8=_0x3bd937;_0x3e7a37[_0x33dea8(0x1f5)](new Uint8Array([0x0,0x0]));if(_0x26e643[_0x33dea8(0x307)]&&_0x26e643[_0x33dea8(0x307)][_0x33dea8(0x236)]>0x0)_0x3e7a37[_0x33dea8(0x1f5)](_0x26e643[_0x33dea8(0x307)]);const _0xea14b9=_0x26e643['readable'][_0x33dea8(0x12c)]();try{while(!![]){const {done:_0x6ccea8,value:_0x52e78f}=await _0xea14b9['read']();if(_0x6ccea8)break;_0x3e7a37[_0x33dea8(0x1f5)](_0x52e78f);}}catch(_0x5cf6dc){}try{_0x3e7a37[_0x33dea8(0x1f3)]();}catch(_0x23b084){}try{_0x26e643[_0x33dea8(0x1f3)]();}catch(_0x4e5c0c){}},'cancel'(){const _0x175d09=_0x3bd937;try{_0x26e643[_0x175d09(0x1f3)]();}catch(_0x460bb7){}}});return new Response(_0x920d95,{'status':0xc8,'headers':{'content-type':_0x3bd937(0x43f),'x-accel-buffering':'no','cache-control':_0x3bd937(0x300)}});}function decodeUtf8OrGbk(_0x4941fb){const _0x91af5c=_0x34b348,_0x261a83=_0x4941fb instanceof Uint8Array?_0x4941fb:new Uint8Array(_0x4941fb);try{const _0x26c140=new TextDecoder(_0x91af5c(0x17b))[_0x91af5c(0x338)](_0x261a83);if(!_0x26c140['includes'](' '))return _0x26c140;}catch(_0x13f390){}try{return new TextDecoder(_0x91af5c(0x423))['decode'](_0x261a83);}catch(_0x2ef833){}return new TextDecoder()[_0x91af5c(0x338)](_0x261a83);}function extractCandidates(_0x27e542){const _0x1e17ae=_0x34b348,_0x160562=new Set(),_0x7a107d=[],_0x4d582a=(_0x6db9eb,_0x36ee62,_0x3ab95a)=>{const _0xc796f9=_0x2664;if(!isValidIp(_0x6db9eb))return;if(_0x160562[_0xc796f9(0x32a)](_0x6db9eb))return;_0x160562[_0xc796f9(0x176)](_0x6db9eb),_0x7a107d['push']({'ip':_0x6db9eb,'port':_0x36ee62||0x1bb,'name':_0x3ab95a||''});};parseIPList(_0x27e542)[_0x1e17ae(0x442)](_0x4d0eb0=>_0x4d582a(_0x4d0eb0['ip'],_0x4d0eb0['port'],_0x4d0eb0[_0x1e17ae(0x121)]));const _0x5dd568=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x244f64;while(_0x244f64=_0x5dd568['exec'](_0x27e542)){const {host:_0x5450e2,port:_0x25cb69}=parseHostPort(_0x244f64[0x0],0x1bb);if(_0x5450e2)_0x4d582a(_0x5450e2,_0x25cb69,'');}const _0x3646ca=/[0-9a-fA-F:]+/g;while(_0x244f64=_0x3646ca['exec'](_0x27e542)){const _0x303d1c=_0x244f64[0x0];if(_0x303d1c['includes'](':')&&_0x303d1c[_0x1e17ae(0x208)](':')[_0x1e17ae(0x26b)]>=0x3&&isValidIp(_0x303d1c))_0x4d582a(_0x303d1c,0x1bb,'');}return _0x7a107d;}function extractDomains(_0x153a00){const _0x4d31d5=_0x34b348,_0x1daa89=new Set(),_0x29188d=[],_0x2198a6=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x584614;while(_0x584614=_0x2198a6[_0x4d31d5(0x21c)](_0x153a00)){const _0x45bbfe=_0x584614[0x0][_0x4d31d5(0x1a7)]();!_0x1daa89[_0x4d31d5(0x32a)](_0x45bbfe)&&(_0x45bbfe['includes'](_0x4d31d5(0x413))||_0x45bbfe['includes'](_0x4d31d5(0x18d))||_0x45bbfe[_0x4d31d5(0x37c)]('182682')||_0x45bbfe[_0x4d31d5(0x37c)]('090227')||_0x45bbfe[_0x4d31d5(0x1d5)]('.xyz')||_0x45bbfe[_0x4d31d5(0x1d5)]('.top'))&&(_0x1daa89[_0x4d31d5(0x176)](_0x45bbfe),_0x29188d['push'](_0x45bbfe));}return _0x29188d[_0x4d31d5(0x1ab)](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x5e2c77){const _0x208bde=_0x34b348;_0x5e2c77=Math[_0x208bde(0x39e)](0x1,parseInt(_0x5e2c77)||0x96);if(Date[_0x208bde(0x1c9)]()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE['ips'];const _0x4bf0f7=await fetchTimeout(_0x208bde(0x14a),{'headers':{'User-Agent':_0x208bde(0x155)}},0x1770);if(_0x4bf0f7&&_0x4bf0f7['ok']){const _0x2f16e3=extractCandidates(await _0x4bf0f7[_0x208bde(0x25e)]())['filter'](_0x15fe58=>_0x15fe58['ip']&&isCloudflareIP(_0x15fe58['ip'])),_0x1c1b35=new Set(),_0x38d271=[];for(const _0x2ef7b2 of _0x2f16e3){if(_0x1c1b35['has'](_0x2ef7b2['ip']))continue;_0x1c1b35[_0x208bde(0x176)](_0x2ef7b2['ip']),_0x38d271[_0x208bde(0x2df)](_0x2ef7b2);if(_0x38d271[_0x208bde(0x26b)]>=_0x5e2c77)break;}return SUBPREF_CACHE['t']=Date[_0x208bde(0x1c9)](),SUBPREF_CACHE[_0x208bde(0x3ed)]=_0x38d271,_0x38d271;}return null;}async function collectCandidates(_0x1fb586){const _0x199316=_0x34b348;_0x1fb586=_0x1fb586||{};const _0x1030ff=[],_0x573437={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x4648c6=_0x2484df=>{const _0xbccb0e=_0x2664;if(_0x2484df&&_0x2484df['ip']&&isCloudflareIP(_0x2484df['ip']))_0x1030ff[_0xbccb0e(0x2df)]({'ip':_0x2484df['ip'],'port':_0x1fb586[_0xbccb0e(0x24d)]||_0x2484df['port']||0x1bb,'name':_0x2484df[_0xbccb0e(0x121)]||''});};if(_0x1fb586[_0x199316(0x283)]&&OPTIMIZE_SOURCES[_0x1fb586[_0x199316(0x283)]]){const _0x4663fc=await fetchTimeout(OPTIMIZE_SOURCES[_0x1fb586['source']][_0x199316(0x377)],{'headers':{'User-Agent':_0x199316(0x155)}},0x1770);if(_0x4663fc&&_0x4663fc['ok']){const _0x358071=extractCandidates(await _0x4663fc[_0x199316(0x25e)]());_0x358071['forEach'](_0x4648c6),_0x573437[_0x199316(0x11d)]=_0x358071[_0x199316(0x26b)];}else _0x573437['presetErr']=_0x4663fc?_0x199316(0x31d)+_0x4663fc[_0x199316(0x2ce)]:_0x199316(0x1c6);}if(_0x1fb586[_0x199316(0x39b)]){const _0x45d7cd=await fetchTimeout(_0x1fb586[_0x199316(0x39b)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1770);if(_0x45d7cd&&_0x45d7cd['ok']){const _0x1a2b98=extractCandidates(await _0x45d7cd[_0x199316(0x25e)]());_0x1a2b98[_0x199316(0x442)](_0x4648c6),_0x573437[_0x199316(0x2cf)]=_0x1a2b98[_0x199316(0x26b)];}else _0x573437[_0x199316(0x407)]=_0x45d7cd?'HTTP\x20'+_0x45d7cd[_0x199316(0x2ce)]:_0x199316(0x1c6);}const _0x4db518=new Set(),_0x2efcc7=[];for(const _0x5d3f42 of _0x1030ff){if(_0x4db518[_0x199316(0x32a)](_0x5d3f42['ip']))continue;_0x4db518[_0x199316(0x176)](_0x5d3f42['ip']),_0x2efcc7[_0x199316(0x2df)](_0x5d3f42);}if(_0x2efcc7[_0x199316(0x26b)]<(_0x1fb586['count']||0x14)){let _0x959e98=(_0x1fb586[_0x199316(0x18a)]||0x14)-_0x2efcc7['length'];try{const _0x54d56f=await fetchBestcfPool();for(const _0x41e7b8 of _0x54d56f){if(_0x959e98<=0x0)break;if(_0x4db518[_0x199316(0x32a)](_0x41e7b8['ip']))continue;if(!isCloudflareIP(_0x41e7b8['ip']))continue;_0x4db518[_0x199316(0x176)](_0x41e7b8['ip']),_0x2efcc7[_0x199316(0x2df)]({'ip':_0x41e7b8['ip'],'port':_0x1fb586['port']||_0x41e7b8[_0x199316(0x24d)]||0x1bb,'name':_0x41e7b8[_0x199316(0x121)]||''}),_0x959e98--;}}catch(_0x53e6ff){}_0x573437['bestcf']=(_0x1fb586[_0x199316(0x18a)]||0x14)-_0x2efcc7[_0x199316(0x26b)]-_0x959e98;}if(_0x1fb586[_0x199316(0x372)]!==![]&&_0x2efcc7[_0x199316(0x26b)]<(_0x1fb586[_0x199316(0x18a)]||0x14)){const _0x1b6e77=(_0x1fb586[_0x199316(0x18a)]||0x14)-_0x2efcc7[_0x199316(0x26b)],_0x2408fb=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x1b6e77*0x3);let _0x5e04c7=0x0;for(const _0x35438d of _0x2408fb){if(_0x5e04c7>=_0x1b6e77)break;if(_0x4db518[_0x199316(0x32a)](_0x35438d))continue;_0x4db518[_0x199316(0x176)](_0x35438d),_0x2efcc7['push']({'ip':_0x35438d,'port':_0x1fb586['port']||0x1bb,'name':''}),_0x5e04c7++;}_0x573437[_0x199316(0x1e1)]=_0x5e04c7;}return{'candidates':_0x2efcc7,'stats':_0x573437};}function testOneLatency(_0x2b650f,_0x23fd09,_0x35a8d0){return new Promise(_0x410f72=>{const _0x5e88b5=_0x2664,_0xf439dd=Date[_0x5e88b5(0x1c9)]();let _0x3c9bc0,_0x1fa51c=![];const _0x1cf8d4=(_0x18bdac,_0x244e2b)=>{if(_0x1fa51c)return;_0x1fa51c=!![],clearTimeout(_0x3082bc);try{if(_0x3c9bc0)_0x3c9bc0['close']();}catch(_0x146cb9){}_0x410f72({'ip':_0x2b650f,'port':_0x23fd09,'ok':_0x18bdac,'latency':_0x244e2b});},_0x3082bc=setTimeout(()=>_0x1cf8d4(![],-0x1),_0x35a8d0);try{_0x3c9bc0=connect({'hostname':_0x2b650f,'port':_0x23fd09});}catch(_0x57d387){return _0x1cf8d4(![],-0x1);}_0x3c9bc0[_0x5e88b5(0x41a)][_0x5e88b5(0x1ae)](()=>_0x1cf8d4(!![],Date['now']()-_0xf439dd))['catch'](()=>_0x1cf8d4(![],-0x1));});}async function runLatencyTest(_0x188d35,_0x40d824,_0x543e3b){const _0x1d0fa1=_0x34b348;_0x40d824=Math[_0x1d0fa1(0x39e)](0x1,Math[_0x1d0fa1(0x446)](0x32,Number(_0x40d824)||0x5)),_0x543e3b=Math['max'](0x1f4,Number(_0x543e3b)||0x1388);const _0x5da5e9=[];let _0x1f98e3=0x0;async function _0x4578e7(){const _0xf8a16b=_0x1d0fa1;while(_0x1f98e3<_0x188d35[_0xf8a16b(0x26b)]){const _0x2cdc11=_0x188d35[_0x1f98e3++],_0x25eeab=await testOneLatency(_0x2cdc11['ip'],_0x2cdc11[_0xf8a16b(0x24d)],_0x543e3b);_0x5da5e9[_0xf8a16b(0x2df)](_0x25eeab);}}return await Promise['all'](Array[_0x1d0fa1(0x419)]({'length':_0x40d824},_0x4578e7)),_0x5da5e9['sort']((_0x21a79c,_0x3575fb)=>(_0x21a79c[_0x1d0fa1(0x3a7)]<0x0?0x3b9aca00:_0x21a79c[_0x1d0fa1(0x3a7)])-(_0x3575fb['latency']<0x0?0x3b9aca00:_0x3575fb[_0x1d0fa1(0x3a7)])),_0x5da5e9;}function xhttpPadding(_0x1cfa17){const _0x28006c=_0x34b348,_0x31a591=_0x1cfa17[_0x28006c(0x32c)]||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x28006c(0x3c4),'xPaddingPlacement':_0x28006c(0x427),'xPaddingHeader':_0x31a591[_0x28006c(0x1ab)](0x1,0x7),'xPaddingKey':'_'+_0x31a591[_0x28006c(0x1ab)](0x19,0x1f)};}function uriFragName(_0x4a1b8d){const _0x4f6bcc=_0x34b348;return String(_0x4a1b8d)['replace'](/%/g,'%25')['replace'](/#/g,_0x4f6bcc(0x2f3))[_0x4f6bcc(0x38f)](/\?/g,_0x4f6bcc(0x30d))[_0x4f6bcc(0x38f)](/ /g,_0x4f6bcc(0x350));}function vlessNode(_0x1362fb,_0x3107c0,_0x3ea714,_0x1ffbb0,_0xc145a6={}){const _0xda3b80=_0x34b348,_0x46a6d6=_0x1362fb[_0xda3b80(0x1c7)],_0x5b7709=_0x3107c0[_0xda3b80(0x37c)](':')&&!_0x3107c0[_0xda3b80(0x3b7)]('[')?'['+_0x3107c0+']':_0x3107c0,_0x4e464d=!HTTP_PORTS[_0xda3b80(0x32a)](Number(_0x3ea714)),_0x1f1449=encodeURIComponent;let _0x5a2f44=_0xda3b80(0x1f9);if(_0x4e464d)_0x5a2f44+=_0xda3b80(0x2a7)+_0x1f1449(_0x46a6d6)+_0xda3b80(0x3b0);else _0x5a2f44+=_0xda3b80(0x266);_0x5a2f44+=_0xda3b80(0x3e7)+_0x1f1449(_0x46a6d6);if(_0xc145a6[_0xda3b80(0x21f)]===_0xda3b80(0x130)&&_0x4e464d)_0x5a2f44+=_0xda3b80(0x291),_0x5a2f44+=_0xda3b80(0x295)+_0x1f1449(JSON[_0xda3b80(0x2db)](xhttpPadding(_0x1362fb)));else _0x5a2f44+=_0xda3b80(0x3d6);_0x5a2f44+='&path='+_0x1f1449('/'+_0x1362fb[_0xda3b80(0x46a)]);if(_0x1362fb[_0xda3b80(0x3d3)])_0x5a2f44+=_0xda3b80(0x173)+_0x1f1449(_0x1362fb[_0xda3b80(0x3d3)]);return _0x1362fb[_0xda3b80(0x273)]&&(_0x5a2f44+=_0xda3b80(0x3bd)+_0x1f1449((_0x1362fb[_0xda3b80(0x2ea)]||_0xda3b80(0x149))+'+'+(_0x1362fb[_0xda3b80(0x3e4)]||_0xda3b80(0x439)))),_0xda3b80(0x394)+_0x1362fb[_0xda3b80(0x32c)]+'@'+_0x5b7709+':'+_0x3ea714+'?'+_0x5a2f44+'#'+uriFragName(_0x1ffbb0);}function trojanNode(_0xabf6c5,_0x4bcabf,_0x3d156e,_0x4c258e){const _0x4d0d63=_0x34b348,_0x36d315=_0xabf6c5['host'],_0x4440dc=_0x4bcabf[_0x4d0d63(0x37c)](':')&&!_0x4bcabf[_0x4d0d63(0x3b7)]('[')?'['+_0x4bcabf+']':_0x4bcabf,_0x19063e=encodeURIComponent,_0x5e4a7b=!HTTP_PORTS[_0x4d0d63(0x32a)](Number(_0x3d156e));let _0x528dd0=_0x5e4a7b?'security=tls&sni='+_0x19063e(_0x36d315)+_0x4d0d63(0x30c)+_0x19063e(_0x36d315)+_0x4d0d63(0x2a2)+_0x19063e('/'+_0xabf6c5[_0x4d0d63(0x46a)]):_0x4d0d63(0x1b1)+_0x19063e(_0x36d315)+_0x4d0d63(0x2a2)+_0x19063e('/'+_0xabf6c5[_0x4d0d63(0x46a)]);if(_0xabf6c5[_0x4d0d63(0x3d3)]&&_0x5e4a7b)_0x528dd0+=_0x4d0d63(0x173)+_0x19063e(_0xabf6c5[_0x4d0d63(0x3d3)]);if(_0xabf6c5[_0x4d0d63(0x273)]&&_0x5e4a7b)_0x528dd0+=_0x4d0d63(0x3bd)+_0x19063e((_0xabf6c5[_0x4d0d63(0x2ea)]||'cloudflare-ech.com')+'+'+(_0xabf6c5[_0x4d0d63(0x3e4)]||_0x4d0d63(0x439)));return _0x4d0d63(0x135)+(_0xabf6c5[_0x4d0d63(0x223)]||_0xabf6c5[_0x4d0d63(0x32c)])+'@'+_0x4440dc+':'+_0x3d156e+'?'+_0x528dd0+'#'+uriFragName(_0x4c258e);}const DNH_CACHE=new Map();function _0x2664(_0x1690d5,_0x456fdd){const _0xfb4016=_0x395a();return _0x2664=function(_0x57710c,_0x13ad9f){_0x57710c=_0x57710c-0x111;let _0x2f5e32=_0xfb4016[_0x57710c];return _0x2f5e32;},_0x2664(_0x1690d5,_0x456fdd);}function fetchTimeout(_0x2f86f5,_0x4f7ec5,_0x2f3503){return new Promise(_0x43577b=>{const _0x4a3001=_0x2664,_0x26f208=new AbortController(),_0x5c2e30=setTimeout(()=>_0x26f208[_0x4a3001(0x119)](),_0x2f3503);fetch(_0x2f86f5,Object['assign']({},_0x4f7ec5,{'signal':_0x26f208[_0x4a3001(0x228)]}))[_0x4a3001(0x1ae)](_0x5eba44=>{clearTimeout(_0x5c2e30),_0x43577b(_0x5eba44);})[_0x4a3001(0x281)](()=>{clearTimeout(_0x5c2e30),_0x43577b(null);});});}async function resolvePreferredDomains(_0x5c82ed,_0x2585fb=0x64,_0x36f0ff=0x12c,_0x19f52b=![],_0x3f3a31=!![],_0x2fb927=![]){const _0x45c66b=_0x34b348,_0x42a49c=String(_0x5c82ed||'')[_0x45c66b(0x208)](/[\n,;]+/)[_0x45c66b(0x17e)](_0x352c0e=>_0x352c0e[_0x45c66b(0x1d1)]()[_0x45c66b(0x38f)](/^\*\./,''))[_0x45c66b(0x3ff)](Boolean),_0x595ba9=Date[_0x45c66b(0x1c9)](),_0x52303d=[_0x45c66b(0x11a),_0x45c66b(0x2d6)],_0x2ec299=async(_0x1223fb,_0x38865a,_0x1dccb3)=>{const _0x331894=_0x45c66b,_0x29dc90=_0x52303d[_0x331894(0x17e)](async _0x4e17e0=>{const _0x5e477d=_0x331894,_0x4c971b=await fetchTimeout(_0x4e17e0+_0x5e477d(0x15d)+encodeURIComponent(_0x1223fb)+_0x5e477d(0x111)+_0x38865a,{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x4c971b||!_0x4c971b['ok'])throw new Error('doh\x20unavailable');const _0x30dffd=await _0x4c971b['json'](),_0x328993=(_0x30dffd[_0x5e477d(0x2fa)]||[])[_0x5e477d(0x3ff)](_0x32751c=>_0x32751c[_0x5e477d(0x21f)]===_0x1dccb3&&(_0x38865a==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x32751c[_0x5e477d(0x3f5)]):/^[0-9a-fA-F:]+$/[_0x5e477d(0x421)](_0x32751c[_0x5e477d(0x3f5)])))['map'](_0xf4d295=>_0xf4d295[_0x5e477d(0x3f5)]);if(!_0x328993['length'])throw new Error(_0x5e477d(0x162));return _0x328993;});try{return await Promise[_0x331894(0x187)](_0x29dc90);}catch(_0x433fe1){return[];}},_0x192247=await Promise[_0x45c66b(0x3a1)](_0x42a49c['map'](async _0x1c4e41=>{const _0x4f1f3b=_0x45c66b;if(_0x1c4e41[_0x4f1f3b(0x37c)](_0x4f1f3b(0x140))){if(_0x1c4e41['startsWith'](_0x4f1f3b(0x347))){let _0x2b144c=_0x1c4e41['slice'](0x6);if(/^[A-Za-z0-9+/=]+$/[_0x4f1f3b(0x421)](_0x2b144c)&&_0x2b144c[_0x4f1f3b(0x26b)]%0x4===0x0)try{const _0xc304b8=atob(_0x2b144c);if(/^https?:\/\//i[_0x4f1f3b(0x421)](_0xc304b8))_0x2b144c=_0xc304b8;}catch(_0x591208){}if(!/^https?:\/\//i[_0x4f1f3b(0x421)](_0x2b144c))_0x2b144c=_0x4f1f3b(0x345)+_0x2b144c;_0x1c4e41=_0x2b144c;}const _0x4c0709=_0x4f1f3b(0x20b)+_0x1c4e41+(_0x19f52b?_0x4f1f3b(0x289):'')+(_0x3f3a31?'':'|raw'),_0x29a4ff=DNH_CACHE['get'](_0x4c0709);if(_0x29a4ff&&_0x595ba9-_0x29a4ff['t']<0xa*0x3c*0x3e8)return _0x29a4ff['ips'][_0x4f1f3b(0x1ab)](0x0,_0x2585fb);try{const _0x85161b=await fetchTimeout(_0x1c4e41,{},0x1770);if(!_0x85161b||!_0x85161b['ok'])throw new Error('unreachable');const _0x29e2c4=decodeUtf8OrGbk(await _0x85161b[_0x4f1f3b(0x2ae)]());let _0x5c237e=_0x29e2c4;if(/^[A-Za-z0-9+/=\s]{40,}$/[_0x4f1f3b(0x421)](_0x5c237e['slice'](0x0,0x7d0))&&_0x5c237e[_0x4f1f3b(0x38f)](/\s+/g,'')[_0x4f1f3b(0x26b)]%0x4===0x0)try{const _0x3a0342=atob(_0x5c237e[_0x4f1f3b(0x38f)](/\s+/g,''));_0x5c237e=decodeUtf8OrGbk(Uint8Array[_0x4f1f3b(0x419)](_0x3a0342,_0x300c8b=>_0x300c8b[_0x4f1f3b(0x290)](0x0)));}catch(_0x24c869){}const _0x1d0a8f=new Set(),_0x220b1f={},_0x5da1b5=[],_0xce6742=isTrustedRegionPool(_0x1c4e41),_0x5b670f=_0x6315e7=>!_0x3f3a31||isCloudflareIP(_0x6315e7)||_0xce6742,_0x477a46=_0x5c237e[_0x4f1f3b(0x1d1)]()[_0x4f1f3b(0x208)](/\r?\n/)[_0x4f1f3b(0x17e)](_0x46f174=>_0x46f174[_0x4f1f3b(0x1d1)]())['filter'](Boolean);if(_0x477a46[_0x4f1f3b(0x26b)]>0x1&&_0x477a46[0x0][_0x4f1f3b(0x37c)](',')){const _0x18683e=_0x477a46[0x0][_0x4f1f3b(0x208)](',')['map'](_0x1d05a2=>_0x1d05a2['trim']()),_0x263d6d=_0x18683e[_0x4f1f3b(0x37c)](_0x4f1f3b(0x244))&&_0x18683e[_0x4f1f3b(0x37c)]('端口'),_0x42eb60=_0x18683e['some'](_0xbf48a3=>_0xbf48a3['includes']('IP'))&&_0x18683e[_0x4f1f3b(0x1c5)](_0x1d5995=>_0x1d5995['includes']('延迟'))&&_0x18683e[_0x4f1f3b(0x1c5)](_0x509d24=>_0x509d24[_0x4f1f3b(0x37c)]('下载速度'));if(_0x263d6d||_0x42eb60){const _0x7a0437=_0x18683e['findIndex'](_0x18f8ff=>_0x18f8ff[_0x4f1f3b(0x37c)]('IP')),_0x16158e=_0x18683e[_0x4f1f3b(0x343)]('端口'),_0x46186c=_0x18683e[_0x4f1f3b(0x40c)](_0xca066b=>_0xca066b[_0x4f1f3b(0x37c)]('延迟')),_0x411390=_0x18683e['findIndex'](_0x3b67f8=>_0x3b67f8[_0x4f1f3b(0x37c)](_0x4f1f3b(0x1ec))),_0x5c6460=_0x18683e['indexOf']('国家')>-0x1?_0x18683e['indexOf']('国家'):_0x18683e[_0x4f1f3b(0x343)]('城市')>-0x1?_0x18683e[_0x4f1f3b(0x343)]('城市'):_0x18683e[_0x4f1f3b(0x343)](_0x4f1f3b(0x163)),_0x425a73=_0x18683e[_0x4f1f3b(0x343)](_0x4f1f3b(0x459));for(const _0x17f17a of _0x477a46['slice'](0x1)){if(_0x5da1b5[_0x4f1f3b(0x26b)]>=_0x2585fb)break;const _0x5c4963=_0x17f17a[_0x4f1f3b(0x208)](',')[_0x4f1f3b(0x17e)](_0x71b1=>_0x71b1[_0x4f1f3b(0x1d1)]());if(_0x425a73!==-0x1&&_0x5c4963[_0x425a73]&&_0x5c4963[_0x425a73][_0x4f1f3b(0x1a7)]()!==_0x4f1f3b(0x24b))continue;const _0x514522=_0x5c4963[_0x7a0437]||'',_0x22587f=_0x514522[_0x4f1f3b(0x178)](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0x22587f)continue;const _0x1fb8cf=_0x22587f[0x1][_0x4f1f3b(0x38f)](/^\[|\]$/g,''),_0x573f3c=_0x16158e!==-0x1&&_0x5c4963[_0x16158e]?parseInt(_0x5c4963[_0x16158e]):0x1bb,_0x104b1f=_0x1fb8cf+':'+_0x573f3c;if(_0x1d0a8f[_0x4f1f3b(0x32a)](_0x104b1f))continue;if(!_0x5b670f(_0x1fb8cf))continue;_0x1d0a8f[_0x4f1f3b(0x176)](_0x104b1f);let _0x13c2b1=_0x5c6460!==-0x1&&_0x5c4963[_0x5c6460]?_0x5c4963[_0x5c6460]:'';if(!_0x13c2b1&&_0x46186c!==-0x1&&_0x411390!==-0x1)_0x13c2b1='CF优选\x20'+(_0x5c4963[_0x46186c]||'')+_0x4f1f3b(0x301)+(_0x5c4963[_0x411390]||'')+_0x4f1f3b(0x2c6);if(_0x13c2b1)_0x220b1f[_0x13c2b1]=(_0x220b1f[_0x13c2b1]||0x0)+0x1,_0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x1fb8cf,'port':_0x573f3c,'name':_0x13c2b1+'-'+String(_0x220b1f[_0x13c2b1])['padStart'](0x2,'0'),..._0xce6742?{'relay':!![]}:{}});else _0x5da1b5['push']({'ip':_0x1fb8cf,'port':_0x573f3c,'name':'',..._0xce6742?{'relay':!![]}:{}});}return DNH_CACHE['set'](_0x4c0709,{'t':_0x595ba9,'ips':_0x5da1b5}),_0x5da1b5[_0x4f1f3b(0x1ab)]();}}if(_0x5c237e[_0x4f1f3b(0x37c)](_0x4f1f3b(0x415))&&_0x5c237e[_0x4f1f3b(0x37c)]('data-label')){for(const _0x1f2163 of _0x5c237e[_0x4f1f3b(0x178)](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x5da1b5[_0x4f1f3b(0x26b)]>=_0x2585fb)break;const _0x30d408={};for(const _0x23204d of _0x1f2163[_0x4f1f3b(0x178)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x1bdbf3=_0x23204d[_0x4f1f3b(0x178)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x1bdbf3)_0x30d408[_0x1bdbf3[0x1]]=_0x1bdbf3[0x2][_0x4f1f3b(0x38f)](/<[^>]+>/g,'')[_0x4f1f3b(0x1d1)]();}const _0x16fd3c=(_0x30d408[_0x4f1f3b(0x195)]||'')[_0x4f1f3b(0x178)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x16fd3c)continue;const _0x599d44=_0x16fd3c[0x1],_0x1998f4=_0x16fd3c[0x2]?parseInt(_0x16fd3c[0x2]):0x1bb,_0x303da7=_0x599d44+':'+_0x1998f4;if(_0x1d0a8f['has'](_0x303da7))continue;if(!_0x5b670f(_0x599d44))continue;_0x1d0a8f[_0x4f1f3b(0x176)](_0x303da7);const _0x58a10d=(_0x30d408['线路名称']||_0x30d408[_0x4f1f3b(0x163)]||'线路')['trim']();if(_0x58a10d)_0x220b1f[_0x58a10d]=(_0x220b1f[_0x58a10d]||0x0)+0x1,_0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x599d44,'port':_0x1998f4,'name':_0x58a10d+'-'+String(_0x220b1f[_0x58a10d])[_0x4f1f3b(0x2bf)](0x2,'0'),..._0xce6742?{'relay':!![]}:{}});else _0x5da1b5['push']({'ip':_0x599d44,'port':_0x1998f4,'name':'',..._0xce6742?{'relay':!![]}:{}});}return DNH_CACHE[_0x4f1f3b(0x2e9)](_0x4c0709,{'t':_0x595ba9,'ips':_0x5da1b5}),_0x5da1b5['slice']();}for(const _0x2ef7d9 of _0x5c237e[_0x4f1f3b(0x208)](/\r?\n/)){if(_0x5da1b5[_0x4f1f3b(0x26b)]>=_0x2585fb)break;const _0x1525d7=_0x2ef7d9['match'](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x1525d7)continue;const _0x1eba04=_0x1525d7[0x1]['replace'](/^\[|\]$/g,''),_0x2e6aa6=_0x1525d7[0x2]?parseInt(_0x1525d7[0x2]):0x1bb,_0x3eeda1=_0x1eba04+':'+_0x2e6aa6;if(_0x1d0a8f[_0x4f1f3b(0x32a)](_0x3eeda1))continue;if(!_0x5b670f(_0x1eba04))continue;_0x1d0a8f['add'](_0x3eeda1);let _0x5c674e='';const _0x30316a=_0x2ef7d9[_0x4f1f3b(0x343)]('#');if(_0x30316a>=0x0)try{_0x5c674e=decodeURIComponent(_0x2ef7d9[_0x4f1f3b(0x1ab)](_0x30316a+0x1)[_0x4f1f3b(0x1d1)]());}catch(_0x528cb1){_0x5c674e=_0x2ef7d9[_0x4f1f3b(0x1ab)](_0x30316a+0x1)[_0x4f1f3b(0x1d1)]();}if(_0x5c674e)_0x220b1f[_0x5c674e]=(_0x220b1f[_0x5c674e]||0x0)+0x1,_0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x1eba04,'port':_0x2e6aa6,'name':_0x5c674e+'-'+String(_0x220b1f[_0x5c674e])[_0x4f1f3b(0x2bf)](0x2,'0'),..._0xce6742?{'relay':!![]}:{}});else _0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x1eba04,'port':_0x2e6aa6,'name':'',..._0xce6742?{'relay':!![]}:{}});}for(const _0x1b5ce3 of _0x5c237e[_0x4f1f3b(0x208)](/\r?\n/)){if(_0x5da1b5[_0x4f1f3b(0x26b)]>=_0x2585fb)break;const _0x25e348=_0x1b5ce3[_0x4f1f3b(0x178)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x25e348)continue;const _0x22ba56=_0x25e348[0x1],_0x2cd392=_0x25e348[0x2]?parseInt(_0x25e348[0x2]):0x1bb,_0x5412c6=_0x22ba56+':'+_0x2cd392;if(_0x1d0a8f['has'](_0x5412c6))continue;if(!_0x5b670f(_0x22ba56))continue;_0x1d0a8f[_0x4f1f3b(0x176)](_0x5412c6);const _0x5e214b=(_0x25e348[0x3]||'')['trim']();if(_0x5e214b&&!/[\u4e00-\u9fa5]/[_0x4f1f3b(0x421)](_0x5e214b)&&!_0x5e214b[_0x4f1f3b(0x37c)]('|')){_0x5da1b5['push']({'ip':_0x22ba56,'port':_0x2cd392,'name':_0x5e214b,..._0xce6742?{'relay':!![]}:{}});continue;}let _0x580515='';if(_0x25e348[0x3]){const _0x545fd6=_0x25e348[0x3]['match'](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x545fd6){const _0x3e88db=_0x545fd6[0x0][_0x4f1f3b(0x178)](/[\u4e00-\u9fa5]{2,5}/);if(_0x3e88db)_0x580515=_0x3e88db[0x0];}else{const _0x2f7af9=_0x25e348[0x3][_0x4f1f3b(0x208)]('|')[_0x4f1f3b(0x17e)](_0x428b8f=>_0x428b8f[_0x4f1f3b(0x1d1)]()),_0x40ab63=_0x2f7af9[_0x4f1f3b(0x23d)](_0x81fff1=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/['test'](_0x81fff1));if(_0x40ab63){const _0x5a741e=_0x40ab63[_0x4f1f3b(0x178)](/[\u4e00-\u9fa5]{2,5}/);if(_0x5a741e)_0x580515=_0x5a741e[0x0];}else{const _0x12361c=_0x2f7af9['find'](_0x51cf23=>/^[\u4e00-\u9fa5]{2,5}$/['test'](_0x51cf23)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x4f1f3b(0x421)](_0x51cf23));if(_0x12361c)_0x580515=_0x12361c;else{const _0x590f7d=_0x25e348[0x3][_0x4f1f3b(0x178)](/\b([A-Z]{2})\b/);if(_0x590f7d)_0x580515=REGION_CN[_0x590f7d[0x1]]||_0x590f7d[0x1];}}}}if(_0x580515)_0x220b1f[_0x580515]=(_0x220b1f[_0x580515]||0x0)+0x1,_0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x22ba56,'port':_0x2cd392,'name':_0x580515+'-'+String(_0x220b1f[_0x580515])['padStart'](0x2,'0'),..._0xce6742?{'relay':!![]}:{}});else _0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x22ba56,'port':_0x2cd392,'name':'',..._0xce6742?{'relay':!![]}:{}});}if(!_0x5da1b5[_0x4f1f3b(0x26b)]&&_0x19f52b){const _0x4a3a0c=(String(_0x1c4e41)[_0x4f1f3b(0x178)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x1c4e41)[_0x4f1f3b(0x38f)](/^https?:\/\//,'')[_0x4f1f3b(0x208)]('.')[0x0];if(REGION_CN[_0x4a3a0c]){const _0xb3d024=randomIPsFromCidrs(_0x2fb927?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x2585fb);_0xb3d024[_0x4f1f3b(0x442)]((_0x26864b,_0x177444)=>_0x5da1b5[_0x4f1f3b(0x2df)]({'ip':_0x26864b,'port':0x1bb,'name':REGION_CN[_0x4a3a0c]+'-'+String(_0x177444+0x1)[_0x4f1f3b(0x2bf)](0x2,'0')}));}}return DNH_CACHE[_0x4f1f3b(0x2e9)](_0x4c0709,{'t':_0x595ba9,'ips':_0x5da1b5}),_0x5da1b5[_0x4f1f3b(0x1ab)]();}catch(_0x953b83){const _0x40f975=DNH_CACHE['get'](_0x4c0709);if(_0x40f975&&_0x40f975['ips']&&_0x40f975['ips'][_0x4f1f3b(0x26b)])return _0x40f975[_0x4f1f3b(0x3ed)]['slice'](0x0,_0x2585fb);return[];}}if(!_0x1c4e41[_0x4f1f3b(0x37c)](_0x4f1f3b(0x140))&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x4f1f3b(0x421)](_0x1c4e41)){const _0x57e5f2=_0x1c4e41['match'](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x57e5f2)return[];const _0xe6f5fc=_0x57e5f2[0x1]['replace'](/^\[|\]$/g,''),_0xcb098f=_0x57e5f2[0x2]?parseInt(_0x57e5f2[0x2]):0x1bb,_0x58c66d=(_0x57e5f2[0x3]||'')['trim'](),_0x35bf83=isValidIp(_0xe6f5fc);if(!_0x35bf83&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0xe6f5fc))return[];if(_0x3f3a31&&_0x35bf83&&!isCloudflareIP(_0xe6f5fc))return[];if(_0x58c66d)return[{'ip':_0xe6f5fc,'port':_0xcb098f,'name':_0x58c66d}];if(_0x35bf83)return[{'ip':_0xe6f5fc,'port':_0xcb098f,'name':''}];}const _0x1a6cfc=DNH_CACHE[_0x4f1f3b(0x1d4)](_0x1c4e41);if(_0x1a6cfc&&_0x595ba9-_0x1a6cfc['t']<0xa*0x3c*0x3e8)return _0x1a6cfc['ips'][_0x4f1f3b(0x1ab)](0x0,_0x2585fb)[_0x4f1f3b(0x17e)]((_0x527dcf,_0x1f5137)=>({'ip':_0x527dcf,'port':0x1bb,'name':_0x1c4e41+'-'+(_0x1f5137+0x1)}));const _0x45c76f=await _0x2ec299(_0x1c4e41,'A',0x1);let _0x43f556=_0x3f3a31?_0x45c76f[_0x4f1f3b(0x3ff)](isCloudflareIP):_0x45c76f;if(_0x2fb927){const _0x511822=await _0x2ec299(_0x1c4e41,_0x4f1f3b(0x456),0x1c);_0x43f556=[...new Set(_0x45c76f[_0x4f1f3b(0x3f2)](_0x511822))][_0x4f1f3b(0x3ff)](_0x44730d=>_0x3f3a31?isCloudflareIP(_0x44730d):!![]);}_0x43f556=_0x43f556[_0x4f1f3b(0x1ab)](0x0,_0x2585fb);if(!_0x43f556[_0x4f1f3b(0x26b)]){if(_0x1a6cfc&&_0x1a6cfc[_0x4f1f3b(0x3ed)]&&_0x1a6cfc[_0x4f1f3b(0x3ed)]['length'])return _0x1a6cfc[_0x4f1f3b(0x3ed)]['slice'](0x0,_0x2585fb)['map']((_0x41b53c,_0x2e2d8b)=>({'ip':_0x41b53c,'port':0x1bb,'name':_0x1c4e41+'-'+(_0x2e2d8b+0x1)}));return[];}return DNH_CACHE[_0x4f1f3b(0x2e9)](_0x1c4e41,{'t':_0x595ba9,'ips':_0x43f556}),_0x43f556[_0x4f1f3b(0x17e)]((_0x1cbe2e,_0x5d9030)=>({'ip':_0x1cbe2e,'port':0x1bb,'name':_0x1c4e41+'-'+(_0x5d9030+0x1)}));})),_0x1dccd1=[];let _0x500167=0x0;while(_0x500167<_0x36f0ff){let _0x4efeb3=![];for(const _0x3d17d1 of _0x192247){if(_0x500167>=_0x36f0ff)break;_0x3d17d1[_0x45c66b(0x26b)]&&(_0x1dccd1['push'](_0x3d17d1[_0x45c66b(0x23e)]()),_0x500167++,_0x4efeb3=!![]);}if(!_0x4efeb3)break;}return _0x1dccd1;}async function buildNodes(_0x4fef65,_0x49b085=0x320,_0x100fd0=null){const _0x7670f1=_0x34b348,_0x2f5eaa=[],_0x210be9=new Set(),_0xa43c46=_0x4fef65[_0x7670f1(0x186)]&&_0x4fef65['optimizer'][_0x7670f1(0x3ea)]||'',_0x1de085=_0x4fef65[_0x7670f1(0x3ff)]&&_0x4fef65[_0x7670f1(0x3ff)]['ipType']||[],_0x123a6b=_0x1de085[_0x7670f1(0x37c)](_0x7670f1(0x417)),_0x52f311=_0x1de085[_0x7670f1(0x26b)]===0x1&&_0x1de085[0x0]===_0x7670f1(0x417),_0x1e01e4=_0x52f311?OFFICIAL_V6_CIDRS:_0x123a6b?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x53b428=_0xa43c46===_0x7670f1(0x2cf)&&!(_0x4fef65[_0x7670f1(0x186)]&&_0x4fef65[_0x7670f1(0x186)][_0x7670f1(0x150)]),_0x52e92b=_0xa43c46===_0x7670f1(0x2cf)||_0xa43c46===_0x7670f1(0x438),_0x55efbc=(_0xef929,_0x18ac99,_0x1c0fab,_0x11f620)=>{const _0x29b7a0=_0x7670f1;if(_0x2f5eaa[_0x29b7a0(0x26b)]>=_0x49b085)return;if(isValidIp(_0xef929)&&!isCloudflareIP(_0xef929)&&!_0x53b428&&!_0x11f620)return;const _0xf98200=_0xef929+':'+_0x18ac99;if(_0x210be9[_0x29b7a0(0x32a)](_0xf98200))return;_0x210be9[_0x29b7a0(0x176)](_0xf98200);const _0x12de92=!HTTP_PORTS['has'](Number(_0x18ac99));if(_0x4fef65['tlsOnly']&&!_0x12de92)return;const _0xa5e8c0=Number(_0x18ac99);if(_0x4fef65[_0x29b7a0(0x3b2)])_0x2f5eaa[_0x29b7a0(0x2df)](vlessNode(_0x4fef65,_0xef929,_0xa5e8c0,_0x1c0fab));if(_0x4fef65[_0x29b7a0(0x3f8)])_0x2f5eaa[_0x29b7a0(0x2df)](trojanNode(_0x4fef65,_0xef929,_0x12de92?_0xa5e8c0:Number(_0x18ac99),_0x1c0fab));if(_0x4fef65[_0x29b7a0(0x1c2)]&&_0x12de92)_0x2f5eaa[_0x29b7a0(0x2df)](vlessNode(_0x4fef65,_0xef929,_0xa5e8c0,_0x1c0fab,{'type':_0x29b7a0(0x130)}));},_0x4a3bed=(_0x4ff453,_0x56e9f3,_0x3c263a,_0x5f1f6a)=>{_0x55efbc(_0x4ff453,Number(_0x56e9f3)||0x1bb,_0x3c263a,_0x5f1f6a);};if(_0xa43c46===_0x7670f1(0x438)){let _0x2816f7=Math[_0x7670f1(0x446)](Math['max'](parseInt(_0x4fef65[_0x7670f1(0x186)][_0x7670f1(0x444)])||0x10,0x1),Math['min'](0x63,_0x49b085));if(_0x4fef65['nodeLimit']){const _0x3a2e35=parseInt(_0x4fef65[_0x7670f1(0x11e)])||0x0;if(_0x3a2e35>0x0)_0x2816f7=Math[_0x7670f1(0x446)](Math[_0x7670f1(0x39e)](_0x2816f7,_0x3a2e35),_0x49b085);}const _0x4693ff=(_0x4fef65[_0x7670f1(0x3b2)]?0x1:0x0)+(_0x4fef65[_0x7670f1(0x3f8)]?0x1:0x0)+(_0x4fef65[_0x7670f1(0x1c2)]?0x1:0x0)||0x1;let _0x64738c=0x0;const _0x3afa43=randomIPsFromCidrs(_0x1e01e4,Math[_0x7670f1(0x3b1)](_0x2816f7/_0x4693ff)*0x3);let _0x1eee76=_0x3afa43;if(_0x100fd0){const _0xd2200d=_0x3afa43[_0x7670f1(0x3ff)](_0x591b2c=>!_0x100fd0[_0x7670f1(0x32a)](_0x591b2c)),_0x3b0c39=_0x3afa43[_0x7670f1(0x3ff)](_0x34e184=>_0x100fd0['has'](_0x34e184));_0x1eee76=[..._0xd2200d,..._0x3b0c39];}for(const _0x106bf3 of _0x1eee76){if(_0x64738c>=_0x2816f7)break;_0x4fef65[_0x7670f1(0x3b2)]&&(_0x2f5eaa[_0x7670f1(0x2df)](vlessNode(_0x4fef65,_0x106bf3,0x1bb,'优选IP-'+String(_0x64738c+0x1)[_0x7670f1(0x2bf)](0x2,'0'))),_0x64738c++);if(_0x64738c>=_0x2816f7)break;_0x4fef65[_0x7670f1(0x3f8)]&&(_0x2f5eaa['push'](trojanNode(_0x4fef65,_0x106bf3,0x1bb,_0x7670f1(0x437)+String(_0x64738c+0x1)[_0x7670f1(0x2bf)](0x2,'0'))),_0x64738c++);if(_0x64738c>=_0x2816f7)break;_0x4fef65[_0x7670f1(0x1c2)]&&(_0x2f5eaa[_0x7670f1(0x2df)](vlessNode(_0x4fef65,_0x106bf3,0x1bb,_0x7670f1(0x437)+String(_0x64738c+0x1)['padStart'](0x2,'0'),{'type':_0x7670f1(0x130)})),_0x64738c++);}return _0x2f5eaa;}const _0x33061b=String(_0x4fef65['preferredDomains']||'')[_0x7670f1(0x208)](/[\n,;]+/)[_0x7670f1(0x17e)](_0x4015ad=>_0x4015ad[_0x7670f1(0x1d1)]())[_0x7670f1(0x3ff)](_0x55c813=>_0x55c813&&!_0x55c813[_0x7670f1(0x37c)](_0x7670f1(0x140)));_0x33061b[_0x7670f1(0x442)]((_0x4a2cd2,_0x539051)=>{const _0x6bb182=_0x7670f1,_0x10b4f6=_0x4a2cd2['indexOf']('#'),_0x5b25a6=(_0x10b4f6>=0x0?_0x4a2cd2['slice'](0x0,_0x10b4f6):_0x4a2cd2)[_0x6bb182(0x1d1)](),_0x51d89f=(_0x10b4f6>=0x0?_0x4a2cd2[_0x6bb182(0x1ab)](_0x10b4f6+0x1):'')['trim'](),_0x5ab5c3=parseHostPort(_0x5b25a6,0x1bb);if(_0x5ab5c3['host']['startsWith']('*.'))return;_0x4a3bed(_0x5ab5c3['host'],_0x5ab5c3[_0x6bb182(0x24d)],_0x51d89f||_0x6bb182(0x437)+String(_0x539051+0x1)[_0x6bb182(0x2bf)](0x2,'0'));});let _0xaf0c4f=_0x4fef65[_0x7670f1(0x2dd)]||[];if(_0x123a6b&&!_0x52f311&&_0xaf0c4f[_0x7670f1(0x26b)]>0x1){const _0x52aa18=[],_0xe57e4d=[];for(const _0x506201 of _0xaf0c4f)(String(_0x506201['ip'])['indexOf'](':')>=0x0?_0xe57e4d:_0x52aa18)['push'](_0x506201);const _0x10da13=[],_0x338767=Math[_0x7670f1(0x39e)](_0x52aa18['length'],_0xe57e4d['length']);for(let _0x12d2e4=0x0;_0x12d2e4<_0x338767;_0x12d2e4++){if(_0x12d2e4<_0x52aa18['length'])_0x10da13[_0x7670f1(0x2df)](_0x52aa18[_0x12d2e4]);if(_0x12d2e4<_0xe57e4d[_0x7670f1(0x26b)])_0x10da13[_0x7670f1(0x2df)](_0xe57e4d[_0x12d2e4]);}_0xaf0c4f=_0x10da13;}_0xaf0c4f[_0x7670f1(0x442)]((_0x5368ff,_0x4ee1fe)=>{const _0x24547b=_0x7670f1;_0x4a3bed(_0x5368ff['ip'],_0x5368ff['port']||0x1bb,_0x5368ff['name']||_0x24547b(0x437)+String(_0x4ee1fe+0x1)[_0x24547b(0x2bf)](0x2,'0'),_0x5368ff['relay']===!![]);});if(_0xa43c46===_0x7670f1(0x2cf)&&!(_0x4fef65[_0x7670f1(0x186)]&&_0x4fef65[_0x7670f1(0x186)][_0x7670f1(0x150)]))return _0x2f5eaa;!_0x33061b[_0x7670f1(0x26b)]&&!(_0x4fef65[_0x7670f1(0x2dd)]||[])[_0x7670f1(0x26b)]&&(parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x7670f1(0x442)](_0x706dc9=>_0x4a3bed(_0x706dc9['ip'],_0x706dc9['port']||0x1bb,_0x706dc9['name']||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x7670f1(0x442)]((_0x451ec1,_0x457df0)=>_0x4a3bed(_0x451ec1,0x1bb,'域名-'+String(_0x457df0+0x1)[_0x7670f1(0x2bf)](0x2,'0'))));const _0x3aaaa5=Math[_0x7670f1(0x446)](Math[_0x7670f1(0x39e)](parseInt(_0x4fef65[_0x7670f1(0x186)]&&_0x4fef65[_0x7670f1(0x186)][_0x7670f1(0x312)]||0x0)||0x0,0x0),0x1388),_0x4a691a=Math['min'](_0x3aaaa5,_0x49b085)-_0x210be9[_0x7670f1(0x13f)];if(_0x4a691a>0x0){const _0x48e2d0=_0x100fd0?BUILTIN_STABLE_IPS[_0x7670f1(0x3ff)](_0x4425a1=>!_0x100fd0['has'](_0x4425a1)):BUILTIN_STABLE_IPS['slice'](),_0x3f1e35=randomIPsFromCidrs(_0x1e01e4,_0x4a691a*0x3),_0x4b3154=_0x100fd0?_0x3f1e35[_0x7670f1(0x3ff)](_0x3b7f66=>!_0x100fd0[_0x7670f1(0x32a)](_0x3b7f66)):_0x3f1e35;let _0x102cb0=[..._0x48e2d0,..._0x4b3154];if(_0x102cb0[_0x7670f1(0x26b)]<_0x4a691a)_0x102cb0=[...BUILTIN_STABLE_IPS,..._0x3f1e35];if(_0x102cb0[_0x7670f1(0x26b)]>0x0){const _0x4a6d20=Math[_0x7670f1(0x446)](_0x102cb0[_0x7670f1(0x26b)],Math['max'](_0x4a691a,0x14),0x3c),_0x1b6c98=_0x102cb0[_0x7670f1(0x1ab)](0x0,_0x4a6d20),_0x4334e9=_0x52e92b?_0x1b6c98['map'](()=>!![]):await probeAll(_0x1b6c98,_0x218dc9=>testProxyAlive(_0x218dc9,0x1bb,0x5dc)),_0x1869a4=_0x1b6c98[_0x7670f1(0x3ff)]((_0x51b966,_0x47480e)=>_0x4334e9[_0x47480e]),_0x4516e8=_0x102cb0[_0x7670f1(0x1ab)](_0x4a6d20);_0x102cb0=[..._0x1869a4,..._0x4516e8][_0x7670f1(0x1ab)](0x0,_0x4a691a);}let _0x5e1982=0x0;for(const _0x3f2982 of _0x102cb0){if(_0x2f5eaa[_0x7670f1(0x26b)]>=_0x49b085)break;_0x5e1982++,_0x4a3bed(_0x3f2982,0x1bb,'优选IP-'+String(_0x5e1982)['padStart'](0x3,'0'));}}return _0x2f5eaa;}function parseNodeServer(_0x3616c8){const _0x441039=_0x34b348,_0xa00f6c=_0x3616c8[_0x441039(0x343)]('@'),_0x8b9af7=_0x3616c8[_0x441039(0x343)]('?',_0xa00f6c),_0x22eafa=_0x8b9af7>_0xa00f6c&&_0xa00f6c>=0x0?_0x3616c8['slice'](_0xa00f6c+0x1,_0x8b9af7):_0x3616c8[_0x441039(0x1ab)](_0xa00f6c+0x1);if(_0x22eafa[_0x441039(0x3b7)]('[')){const _0x682ad8=_0x22eafa[_0x441039(0x343)](']'),_0x2b577a=_0x682ad8>0x0?_0x22eafa[_0x441039(0x1ab)](0x1,_0x682ad8):_0x22eafa,_0x10df42=_0x22eafa['slice'](_0x682ad8+0x1),_0x18c6a8=_0x10df42[_0x441039(0x3b7)](':')?parseInt(_0x10df42[_0x441039(0x1ab)](0x1)):0x1bb;return{'host':_0x2b577a,'port':isNaN(_0x18c6a8)?0x1bb:_0x18c6a8};}const _0x1585b9=_0x22eafa['lastIndexOf'](':');if(_0x1585b9>0x0){const _0x433956=parseInt(_0x22eafa['slice'](_0x1585b9+0x1));return{'host':_0x22eafa[_0x441039(0x1ab)](0x0,_0x1585b9),'port':isNaN(_0x433956)?0x1bb:_0x433956};}return{'host':_0x22eafa,'port':0x1bb};}function getParam(_0x5996c5,_0x1ea646){const _0x1a4c77=_0x34b348,_0x2799de=_0x5996c5[_0x1a4c77(0x343)]('?');if(_0x2799de<0x0)return null;const _0x1c1527=_0x5996c5[_0x1a4c77(0x343)]('#',_0x2799de),_0x432ffc=_0x1c1527>_0x2799de?_0x5996c5['slice'](_0x2799de+0x1,_0x1c1527):_0x5996c5[_0x1a4c77(0x1ab)](_0x2799de+0x1);for(const _0x28dc5e of _0x432ffc['split']('&')){const _0x16a851=_0x28dc5e[_0x1a4c77(0x343)]('='),_0x37ebfd=_0x16a851>0x0?_0x28dc5e[_0x1a4c77(0x1ab)](0x0,_0x16a851):_0x28dc5e;if(_0x37ebfd===_0x1ea646)return _0x16a851>0x0?decodeURIComponent(_0x28dc5e['slice'](_0x16a851+0x1)):'';}return null;}function parseShareNode(_0x2d4303,_0x6aaff2){const _0x54794e=_0x34b348,{host:_0x27ba7e,port:_0x3a641c}=parseNodeServer(_0x2d4303),_0x20676d=_0x27ba7e,_0x17b0b4=_0x2d4303[_0x54794e(0x343)]('#');let _0x2156b1='节点'+(_0x6aaff2+0x1);if(_0x17b0b4>=0x0)try{_0x2156b1=decodeURIComponent(_0x2d4303[_0x54794e(0x1ab)](_0x17b0b4+0x1))||_0x2156b1;}catch(_0x4eaf20){}const _0x42a1ce=_0x2d4303[_0x54794e(0x343)]('@');let _0xc93ff6='';if(_0x42a1ce>=0x0){const _0x4040ce=_0x2d4303[_0x54794e(0x343)]('://'),_0x58d757=_0x4040ce>=0x0?_0x4040ce+0x3:0x0;try{_0xc93ff6=decodeURIComponent(_0x2d4303[_0x54794e(0x1ab)](_0x58d757,_0x42a1ce));}catch(_0x4a1b05){_0xc93ff6=_0x2d4303[_0x54794e(0x1ab)](_0x58d757,_0x42a1ce);}}const _0x342e63=_0x2d4303[_0x54794e(0x3b7)]('trojan://'),_0xf8a280=_0x342e63||(getParam(_0x2d4303,_0x54794e(0x33b))||'tls')==='tls';return{'srv':_0x20676d,'prt':_0x3a641c,'name':_0x2156b1,'user':_0xc93ff6,'isTrojan':_0x342e63,'tls':_0xf8a280};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',_0x34b348(0x22e)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x34b348(0x3fd)],'联通':['联通','CU','UNICOM'],'电信':['电信','CT',_0x34b348(0x194)]},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[_0x34b348(0x204),_0x34b348(0x417)];function filterNodes(_0x4da7c6,_0x8ccd39){const _0x320a09=_0x34b348;if(!_0x8ccd39||!_0x8ccd39[_0x320a09(0x402)]&&!_0x8ccd39[_0x320a09(0x246)]&&!_0x8ccd39[_0x320a09(0x1cf)])return _0x4da7c6;const _0x493357=_0x8ccd39[_0x320a09(0x402)]||_0x320a09(0x3a1),_0x24de6f=_0x8ccd39['ipType']||FILTER_IPTYPES,_0x369874=_0x8ccd39[_0x320a09(0x1cf)]||FILTER_ISPS,_0x165569=_0x4da7c6[_0x320a09(0x17e)](_0x415f58=>{const _0x41cdf2=_0x320a09,{host:_0x291e0d}=parseNodeServer(_0x415f58);let _0x7a790e='';try{const _0x46b311=_0x415f58[_0x41cdf2(0x343)]('#');if(_0x46b311>=0x0)_0x7a790e=decodeURIComponent(_0x415f58['slice'](_0x46b311+0x1)||'');}catch(_0x38be14){_0x7a790e='';}return{'host':_0x291e0d,'name':_0x7a790e,'up':_0x7a790e[_0x41cdf2(0x3e0)]()};}),_0x3e2f07=_0x165569[_0x320a09(0x1c5)](_0x430722=>_0x430722['up']&&Object['keys'](ISP_TAGS)[_0x320a09(0x1c5)](_0x3327fa=>(ISP_TAGS[_0x3327fa]||[_0x3327fa])[_0x320a09(0x1c5)](_0x44ea6e=>_0x430722['up'][_0x320a09(0x37c)](_0x44ea6e[_0x320a09(0x3e0)]())))),_0x338fe8=(_0x157d09,_0x41df24,_0x2479b9)=>{const _0x53b868=_0x320a09,_0x5cdd6f=Array['isArray'](_0x157d09)?_0x157d09[_0x53b868(0x26b)]===0x0||_0x157d09[_0x53b868(0x37c)](_0x53b868(0x3a1))?null:_0x157d09[_0x53b868(0x3c0)](_0x51181f=>REGION_TAGS[_0x51181f]||[]):_0x157d09!=='all'?REGION_TAGS[_0x157d09]||[]:null,_0x47e107=_0x2479b9[_0x53b868(0x26b)]>0x0&&_0x2479b9[_0x53b868(0x26b)]<FILTER_ISPS[_0x53b868(0x26b)];return _0x4da7c6[_0x53b868(0x3ff)]((_0x56cae1,_0x2d7939)=>{const _0x1999d5=_0x53b868,_0x4ee809=_0x165569[_0x2d7939],_0xdc8eba=_0x4ee809[_0x1999d5(0x1c7)]['indexOf'](':')>=0x0;if(!_0x4ee809['name'])return![];if(_0x5cdd6f&&!_0x5cdd6f[_0x1999d5(0x1c5)](_0x12b161=>_0x4ee809['up'][_0x1999d5(0x37c)](_0x12b161[_0x1999d5(0x3e0)]()))){if(!/^(优选IP|域名)-\d+/['test'](_0x4ee809[_0x1999d5(0x121)])&&_0x4ee809[_0x1999d5(0x121)]!==_0x1999d5(0x226))return![];}if(_0x41df24['length']===0x1){if(_0x41df24[0x0]===_0x1999d5(0x204)&&_0xdc8eba)return![];if(_0x41df24[0x0]===_0x1999d5(0x417)&&!_0xdc8eba)return![];}if(_0x47e107&&_0x3e2f07&&!_0x2479b9['some'](_0x4b7397=>(ISP_TAGS[_0x4b7397]||[_0x4b7397])[_0x1999d5(0x1c5)](_0x1c6887=>_0x4ee809['up'][_0x1999d5(0x37c)](_0x1c6887['toUpperCase']()))))return![];return!![];});};let _0x8bb37f=_0x338fe8(_0x493357,_0x24de6f,_0x369874);if(!_0x8bb37f[_0x320a09(0x26b)])_0x8bb37f=_0x338fe8(_0x493357,_0x24de6f,FILTER_ISPS);if(!_0x8bb37f[_0x320a09(0x26b)])_0x8bb37f=_0x338fe8(_0x493357,FILTER_IPTYPES,FILTER_ISPS);if(!_0x8bb37f[_0x320a09(0x26b)])_0x8bb37f=_0x338fe8(_0x320a09(0x3a1),FILTER_IPTYPES,FILTER_ISPS);return _0x8bb37f;}function yamlVal(_0x11f14a){const _0x55a47c=_0x34b348;if(typeof _0x11f14a===_0x55a47c(0x1d7)||typeof _0x11f14a==='number')return String(_0x11f14a);const _0x347978=String(_0x11f14a);return/^[\w.\-/\u4e00-\u9fa5]+$/['test'](_0x347978)?_0x347978:JSON[_0x55a47c(0x2db)](_0x347978);}function clashProxyYaml(_0x4c69f1){const _0x24266a=_0x34b348,_0x19b7b3=[];_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x26d)+yamlVal(_0x4c69f1[_0x24266a(0x121)])),_0x19b7b3[_0x24266a(0x2df)]('\x20\x20\x20\x20type:\x20'+_0x4c69f1['type']),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x25b)+yamlVal(_0x4c69f1['server'])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x257)+_0x4c69f1[_0x24266a(0x24d)]);if(_0x4c69f1[_0x24266a(0x21f)]===_0x24266a(0x2ec))_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x230)+yamlVal(_0x4c69f1[_0x24266a(0x32c)]));else _0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x462)+yamlVal(_0x4c69f1['password']));_0x19b7b3['push'](_0x24266a(0x1f8)+_0x4c69f1['network']),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x311));if(_0x4c69f1[_0x24266a(0x14c)]){_0x19b7b3[_0x24266a(0x2df)]('\x20\x20\x20\x20tls:\x20true'),_0x19b7b3['push'](_0x24266a(0x39c)),_0x19b7b3[_0x24266a(0x2df)](_0x4c69f1[_0x24266a(0x2aa)]===_0x24266a(0x130)?_0x24266a(0x396):'\x20\x20\x20\x20alpn:\x20[http/1.1]'),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x15f)+yamlVal(_0x4c69f1[_0x24266a(0x3af)]));if(_0x4c69f1[_0x24266a(0x21f)]==='trojan')_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x214)+yamlVal(_0x4c69f1[_0x24266a(0x3af)]));_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x263)),_0x4c69f1[_0x24266a(0x42a)]&&(_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x45b)),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x18f)+yamlVal(_0x4c69f1[_0x24266a(0x42a)][_0x24266a(0x158)])),_0x19b7b3[_0x24266a(0x2df)]('\x20\x20\x20\x20\x20\x20query-server-name:\x20'+yamlVal(_0x4c69f1[_0x24266a(0x42a)][_0x24266a(0x391)])));}if(_0x4c69f1[_0x24266a(0x2aa)]==='ws')_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x20e)),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x1a0)+yamlVal(_0x4c69f1[_0x24266a(0x38d)]['path'])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x22c)),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x1fe)+yamlVal(_0x4c69f1[_0x24266a(0x38d)][_0x24266a(0x185)]['Host']));else{if(_0x4c69f1[_0x24266a(0x2aa)]===_0x24266a(0x130)){const _0x58cc8e=_0x4c69f1[_0x24266a(0x3cc)];_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x19c)),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x1a0)+yamlVal(_0x58cc8e['path'])),_0x19b7b3[_0x24266a(0x2df)]('\x20\x20\x20\x20\x20\x20mode:\x20'+yamlVal(_0x58cc8e[_0x24266a(0x414)])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x203)+yamlVal(_0x58cc8e[_0x24266a(0x1c7)])),_0x19b7b3[_0x24266a(0x2df)]('\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20'+yamlVal(_0x58cc8e[_0x24266a(0x20a)])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x353)+yamlVal(_0x58cc8e['x-padding-method'])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x1c3)+yamlVal(_0x58cc8e['x-padding-placement'])),_0x19b7b3[_0x24266a(0x2df)](_0x24266a(0x3df)+yamlVal(_0x58cc8e[_0x24266a(0x190)])),_0x19b7b3['push'](_0x24266a(0x1d6)+yamlVal(_0x58cc8e[_0x24266a(0x147)]));}}return _0x19b7b3[_0x24266a(0x318)]('\x0a');}function generateClash(_0x10bfd8,_0x5d952b){const _0x226f72=_0x34b348,_0xdf2ae=_0x10bfd8[_0x226f72(0x1c7)],_0x3ad198='/'+_0x10bfd8[_0x226f72(0x46a)],_0x5826f5=new Set(),_0x215496=_0x5d952b[_0x226f72(0x17e)](_0xca1d13=>{const _0x3bb255=_0x226f72,{user:_0x232c44,srv:_0x21412d,prt:_0x29de97,name:_0x29a51e,isTrojan:_0x121f7d,tls:_0x2ea1a5}=parseShareNode(_0xca1d13,0x0);let _0x2d5766=_0x29a51e;const _0x4a74f0=getParam(_0xca1d13,_0x3bb255(0x21f))||'ws';if(_0x5826f5['has'](_0x2d5766)){const _0x34baec=_0x121f7d?'T':_0x4a74f0===_0x3bb255(0x130)?'X':'W';let _0x4b3775=_0x2d5766+'·'+_0x34baec,_0x1365bb=0x2;while(_0x5826f5[_0x3bb255(0x32a)](_0x4b3775)){_0x4b3775=_0x2d5766+'·'+_0x34baec+_0x1365bb,_0x1365bb++;}_0x2d5766=_0x4b3775;}_0x5826f5[_0x3bb255(0x176)](_0x2d5766);const _0x5c1778={'name':_0x2d5766,'server':_0x21412d,'port':_0x29de97,'udp':!![],..._0x2ea1a5?{'tls':!![],'skip-cert-verify':!![],'servername':_0xdf2ae,'client-fingerprint':_0x3bb255(0x23a),'alpn':['http/1.1']}:{},..._0x10bfd8[_0x3bb255(0x273)]&&_0x2ea1a5?{'ech-opts':{'enable':!![],'query-server-name':_0x10bfd8[_0x3bb255(0x2ea)]||'cloudflare-ech.com'}}:{}};if(_0x121f7d)return{..._0x5c1778,'type':_0x3bb255(0x1d3),'password':_0x232c44,'network':'ws','ws-opts':{'path':_0x3ad198,'headers':{'Host':_0xdf2ae}}};if(_0x4a74f0===_0x3bb255(0x130)){let _0x5e25c7={};try{_0x5e25c7=JSON[_0x3bb255(0x3fa)](getParam(_0xca1d13,_0x3bb255(0x316))||'{}');}catch(_0x3a7a69){}return{..._0x5c1778,'type':_0x3bb255(0x2ec),'uuid':_0x232c44,'network':_0x3bb255(0x130),'alpn':['h2'],'xhttp-opts':{'path':_0x3ad198,'mode':_0x3bb255(0x370),'host':_0xdf2ae,'x-padding-obfs-mode':_0x5e25c7['xPaddingObfsMode']!==undefined?_0x5e25c7[_0x3bb255(0x12e)]:!![],'x-padding-method':_0x5e25c7['xPaddingMethod']||_0x3bb255(0x3c4),'x-padding-placement':_0x5e25c7[_0x3bb255(0x334)]||_0x3bb255(0x427),'x-padding-header':_0x5e25c7[_0x3bb255(0x36e)]||'','x-padding-key':_0x5e25c7[_0x3bb255(0x22b)]||''}};}return{..._0x5c1778,'type':'vless','uuid':_0x232c44,'network':'ws','ws-opts':{'path':_0x3ad198,'headers':{'Host':_0xdf2ae}}};});_0x215496[_0x226f72(0x27d)]((_0x570d57,_0x3c3c9b)=>(_0x570d57[_0x226f72(0x24d)]===0x1bb?0x0:0x1)-(_0x3c3c9b[_0x226f72(0x24d)]===0x1bb?0x0:0x1));const _0xfbe699='#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a'+_0x215496['map'](_0x4c2378=>clashProxyYaml(_0x4c2378))[_0x226f72(0x318)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0xfbe699;}function generateSurfboard(_0x50fa23,_0x284884){const _0x3237eb=_0x34b348,_0x526bb3=_0x50fa23[_0x3237eb(0x1c7)],_0x2d65fe='/'+_0x50fa23['path'],_0x30264b=[];for(const _0x4af3a9 of _0x284884){if(_0x4af3a9[_0x3237eb(0x3b7)](_0x3237eb(0x135))&&_0x4af3a9[_0x3237eb(0x343)]('security=none')<0x0)_0x30264b['push'](_0x4af3a9);else{if(_0x4af3a9[_0x3237eb(0x3b7)]('vless://')&&_0x4af3a9[_0x3237eb(0x343)](_0x3237eb(0x31c))<0x0&&_0x4af3a9[_0x3237eb(0x343)](_0x3237eb(0x2e1))<0x0)_0x30264b['push'](_0x4af3a9[_0x3237eb(0x38f)](/^vless:\/\//,_0x3237eb(0x135))[_0x3237eb(0x38f)]('encryption=none&',''));}}const _0x321c4=_0x30264b[_0x3237eb(0x17e)]((_0x58c011,_0x2ddf2f)=>{const _0x34b7e4=_0x3237eb,{user:_0x2c850a,srv:_0x296fc3,prt:_0x2e2e75,name:_0x4d4488}=parseShareNode(_0x58c011,_0x2ddf2f);return _0x4d4488+_0x34b7e4(0x341)+_0x296fc3+',\x20'+_0x2e2e75+_0x34b7e4(0x1b4)+_0x2c850a+_0x34b7e4(0x1eb)+_0x2d65fe+_0x34b7e4(0x1ed)+_0x526bb3+_0x34b7e4(0x19e)+_0x526bb3;});return _0x3237eb(0x1fa)+_0x321c4[_0x3237eb(0x318)]('\x0a')+_0x3237eb(0x14f)+_0x321c4['map'](_0x21f480=>_0x21f480['split'](_0x3237eb(0x21b))[0x0])[_0x3237eb(0x318)](',\x20')+_0x3237eb(0x198);}function generateSingbox(_0x4c8240,_0x3305fb){const _0x36192a=_0x34b348,_0x1e0c93=_0x4c8240[_0x36192a(0x1c7)],_0x55d8fd='/'+_0x4c8240[_0x36192a(0x46a)],_0x1e552b=_0x3305fb['map']((_0x185feb,_0x7f9080)=>{const _0x4969df=_0x36192a,{user:_0x93bc3e,srv:_0x4e7e32,prt:_0x5f4e0f,name:_0xc7c5a2,isTrojan:_0xd6751a,tls:_0x6cdcc3}=parseShareNode(_0x185feb,_0x7f9080),_0x2e795e=getParam(_0x185feb,'type')||'ws',_0x5e8cae=_0x6cdcc3?_0x2e795e===_0x4969df(0x130)?{'enabled':!![],'server_name':_0x1e0c93,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x1e0c93,'insecure':!![],'alpn':['http/1.1'],'utls':{'enabled':!![],'fingerprint':_0x4969df(0x23a)}}:{'enabled':![]},_0x2d2f1f=_0x2e795e===_0x4969df(0x130)?{'type':'xhttp','mode':_0x4969df(0x370),'path':_0x55d8fd}:_0x6cdcc3?{'type':'ws','path':_0x55d8fd,'headers':{'Host':_0x1e0c93},'max_early_data':0x800,'early_data_header_name':'Sec-WebSocket-Protocol'}:{'type':'ws','path':_0x55d8fd,'headers':{'Host':_0x1e0c93}};if(_0xd6751a)return{'type':_0x4969df(0x1d3),'tag':_0xc7c5a2,'server':_0x4e7e32,'server_port':_0x5f4e0f,'password':_0x93bc3e,'tls':_0x5e8cae,'transport':_0x2d2f1f};return{'type':'vless','tag':_0xc7c5a2,'server':_0x4e7e32,'server_port':_0x5f4e0f,'uuid':_0x93bc3e,'packet_encoding':'xudp','tls':_0x5e8cae,'transport':_0x2d2f1f};}),_0xe4563c=_0x1e552b[_0x36192a(0x17e)](_0x226734=>_0x226734[_0x36192a(0x41f)]),_0x41c0f8=[['geosite-cn',_0x36192a(0x1e7)],[_0x36192a(0x42b),_0x36192a(0x145)],[_0x36192a(0x44d),_0x36192a(0x409)],[_0x36192a(0x44e),_0x36192a(0x250)],[_0x36192a(0x29d),'🤖\x20OpenAI'],[_0x36192a(0x142),_0x36192a(0x1a6)],['geosite-youtube',_0x36192a(0x1a6)],[_0x36192a(0x41b),_0x36192a(0x1a6)],['geosite-disney',_0x36192a(0x1a6)],['geosite-twitter',_0x36192a(0x1a6)],[_0x36192a(0x1af),_0x36192a(0x1a6)],[_0x36192a(0x2e3),_0x36192a(0x1a6)],[_0x36192a(0x32b),_0x36192a(0x313)]],_0x26ba57={'log':{'level':_0x36192a(0x445)},'dns':{'servers':[{'tag':_0x36192a(0x2fd),'address':_0x36192a(0x285)},{'tag':_0x36192a(0x16d),'address':'udp://223.5.5.5'}],'strategy':_0x36192a(0x17c),'independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':_0x36192a(0x14d),'store_fakeip':!![]}},'inbounds':[{'type':_0x36192a(0x3dc),'tag':_0x36192a(0x1d2),'listen':'127.0.0.1','listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':_0x36192a(0x344),'tag':_0x36192a(0x3f6),'interface_name':_0x36192a(0x43a),'inet4_address':[_0x36192a(0x434)],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':_0x36192a(0x3dc),'sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x1e552b,{'type':_0x36192a(0x159),'tag':'direct'},{'type':_0x36192a(0x313),'tag':_0x36192a(0x313)},{'type':'dns','tag':_0x36192a(0x12a)},{'type':_0x36192a(0x35d),'tag':_0x36192a(0x34a),'outbounds':_0xe4563c},{'type':'selector','tag':'🎯\x20全球直连','outbounds':[_0x36192a(0x159)]},{'type':_0x36192a(0x35d),'tag':'🐟\x20漏网之鱼','outbounds':['🚀\x20节点选择','🎯\x20全球直连']},{'type':_0x36192a(0x35d),'tag':_0x36192a(0x1a6),'outbounds':[_0x36192a(0x34a)]},{'type':_0x36192a(0x35d),'tag':'🌐\x20谷歌服务','outbounds':[_0x36192a(0x34a)]},{'type':_0x36192a(0x35d),'tag':_0x36192a(0x454),'outbounds':[_0x36192a(0x34a)]},{'type':_0x36192a(0x35d),'tag':'🍎\x20苹果服务','outbounds':['🎯\x20全球直连']},{'type':_0x36192a(0x35d),'tag':'Ⓜ️\x20微软服务','outbounds':[_0x36192a(0x1e7)]}],'route':{'rules':[{'protocol':_0x36192a(0x2f6),'outbound':_0x36192a(0x12a)},{'ip_is_private':!![],'outbound':_0x36192a(0x159)},..._0x41c0f8[_0x36192a(0x17e)](([_0x47d892,_0x1202d3])=>({'rule_set':[_0x47d892],'outbound':_0x1202d3})),{'geoip':['cn'],'outbound':_0x36192a(0x159)},{'ip_is_private':!![],'outbound':_0x36192a(0x313)}],'rule_set':_0x41c0f8[_0x36192a(0x17e)](([_0x13a198])=>({'type':_0x36192a(0x141),'tag':_0x13a198,'format':_0x36192a(0x283),'url':_0x36192a(0x36c)+_0x13a198+_0x36192a(0x3d9)})),'final':_0x36192a(0x3e5),'auto_detect_interface':!![],'default_domain_resolver':{'server':_0x36192a(0x2fd)}},'experimental':{'clash_api':{'external_controller':_0x36192a(0x225)}}};return JSON['stringify'](_0x26ba57,null,0x2);}function generateSurge(_0x17c161,_0x3a9049){const _0x3a978d=_0x34b348,_0x5e7401=_0x17c161['host'],_0x37262b='/'+_0x17c161['path'],_0x4bfc66=_0x3a9049['map']((_0x15765f,_0x13ce19)=>{const _0x378f00=_0x2664,{user:_0x5db06f,srv:_0xb255a0,prt:_0x3f9f85,name:_0x46576e,isTrojan:_0x3528e1,tls:_0x1dafea}=parseShareNode(_0x15765f,_0x13ce19),_0x41b57c=_0x1dafea?_0x378f00(0x19e)+_0x5e7401:_0x378f00(0x296);return _0x3528e1?_0x46576e+_0x378f00(0x341)+_0xb255a0+',\x20'+_0x3f9f85+_0x378f00(0x1b4)+_0x5db06f+_0x378f00(0x1eb)+_0x37262b+_0x378f00(0x1ed)+_0x5e7401+_0x41b57c:_0x46576e+_0x378f00(0x182)+_0xb255a0+',\x20'+_0x3f9f85+',\x20username='+_0x5db06f+_0x378f00(0x1eb)+_0x37262b+_0x378f00(0x1ed)+_0x5e7401+_0x41b57c;});return _0x3a978d(0x1fa)+_0x4bfc66[_0x3a978d(0x318)]('\x0a')+_0x3a978d(0x14f)+_0x4bfc66['map'](_0x1acc94=>_0x1acc94[_0x3a978d(0x208)](_0x3a978d(0x21b))[0x0])[_0x3a978d(0x318)](',\x20')+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateLoon(_0x2e2208,_0x11b542){const _0x47c2e9=_0x34b348,_0x978e7c=_0x2e2208[_0x47c2e9(0x1c7)],_0x4f5b78='/'+_0x2e2208[_0x47c2e9(0x46a)],_0x5ee0e4=_0x11b542[_0x47c2e9(0x17e)]((_0xbe3424,_0x22ee02)=>{const _0xfc5191=_0x47c2e9,{user:_0x48b8cb,srv:_0x27bb78,prt:_0x26fd32,name:_0x25910f,isTrojan:_0x34b78c,tls:_0x3e782d}=parseShareNode(_0xbe3424,_0x22ee02),_0x466c3a=_0x3e782d?_0xfc5191(0x19e)+_0x978e7c:_0xfc5191(0x296);return _0x34b78c?_0x25910f+'\x20=\x20trojan,\x20'+_0x27bb78+',\x20'+_0x26fd32+_0xfc5191(0x1b4)+_0x48b8cb+',\x20ws=true,\x20ws-path='+_0x4f5b78+_0xfc5191(0x1ed)+_0x978e7c+_0x466c3a:_0x25910f+_0xfc5191(0x182)+_0x27bb78+',\x20'+_0x26fd32+_0xfc5191(0x27b)+_0x48b8cb+_0xfc5191(0x1eb)+_0x4f5b78+',\x20ws-headers=Host:'+_0x978e7c+_0x466c3a;}),_0x23fe18=_0x5ee0e4[_0x47c2e9(0x17e)](_0x57a018=>_0x57a018['split'](_0x47c2e9(0x21b))[0x0])['join'](',\x20');return _0x47c2e9(0x3cb)+_0x5ee0e4[_0x47c2e9(0x318)]('\x0a')+_0x47c2e9(0x14f)+_0x23fe18+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20'+_0x23fe18+_0x47c2e9(0x3ce);}function generateQuanX(_0x542bf6,_0x3c95a8){const _0x427ced=_0x34b348,_0x1bc0cc=_0x542bf6['host'],_0xd489ef='/'+_0x542bf6['path'],_0x34e19a=_0x54d561=>_0x54d561[_0x427ced(0x343)](':')>=0x0?'['+_0x54d561+']':_0x54d561,_0x3dde70=_0x3c95a8[_0x427ced(0x17e)]((_0x4ced48,_0xa14c59)=>{const _0x5bce82=_0x427ced,{user:_0x52de5e,srv:_0x1d0885,prt:_0x20240c,name:_0x1be940}=parseShareNode(_0x4ced48,_0xa14c59);if(_0x4ced48[_0x5bce82(0x3b7)]('trojan://'))return _0x5bce82(0x388)+_0x34e19a(_0x1d0885)+':'+_0x20240c+_0x5bce82(0x1b4)+_0x52de5e+_0x5bce82(0x137)+_0x1bc0cc+_0x5bce82(0x39a)+_0x1bc0cc+_0x5bce82(0x33c)+_0xd489ef+_0x5bce82(0x184)+_0x1be940;const _0x51740f=(getParam(_0x4ced48,'security')||_0x5bce82(0x14c))===_0x5bce82(0x14c);return _0x5bce82(0x1f4)+_0x34e19a(_0x1d0885)+':'+_0x20240c+_0x5bce82(0x13a)+_0x52de5e+',\x20obfs='+(_0x51740f?_0x5bce82(0x153):'ws')+_0x5bce82(0x452)+_0x1bc0cc+_0x5bce82(0x33c)+_0xd489ef+(_0x51740f?',\x20tls-verification=true,\x20tls13=true':'')+_0x5bce82(0x432)+_0x1be940;}),_0x179aab=_0x3c95a8[_0x427ced(0x17e)]((_0x5d4e2a,_0x122c4f)=>{const _0x4e7ab4=_0x427ced,_0x5d4544=_0x5d4e2a[_0x4e7ab4(0x343)]('#');if(_0x5d4544<0x0)return'节点'+(_0x122c4f+0x1);try{return decodeURIComponent(_0x5d4e2a[_0x4e7ab4(0x1ab)](_0x5d4544+0x1))||'节点'+(_0x122c4f+0x1);}catch(_0x5ed207){return'节点'+(_0x122c4f+0x1);}})[_0x427ced(0x318)](',\x20');return _0x427ced(0x2fb)+_0x3dde70[_0x427ced(0x318)]('\x0a')+_0x427ced(0x207)+_0x179aab+_0x427ced(0x1dc);}let PROBE_ALIVE_ENABLED=![];function setProbeAlive(_0x430267){const _0x448785=_0x34b348;PROBE_ALIVE_ENABLED=_0x430267===!![]||_0x430267===_0x448785(0x24b)||_0x430267==='1'||_0x430267===0x1;}const PROBE_CONCURRENCY=0x4;let probeRunning=0x0;const probeWaiters=[];function _0x395a(){const _0x4e85cf=['162.159.2.86#优选IP-222','188.114.97.91#优选IP-134','162.159.26.248#优选IP-252','Trojan\x20头部过短','104.25.62.39#优选IP-265','%23','104.25.126.144#优选IP-272','pagesFunctionsInvocationsAdaptiveGroups','dns','BER','1406872kgkyJe','randomUUID','Answer','[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a','proxyIP','dns-remote','104.25.124.155#优选IP-170','src','no-store','ms\x20','162.159.43.85#优选IP-293','SS\x20AEAD\x20数据过短','prefIp','proxyip.nl.cmliussss.net','search','_preamble','188.114.97.80#优选IP-202','quanx','104.19.168.107#优选IP-074','104.25.109.0#优选IP-275','&fp=chrome&host=','%3F','put','pass','172.67.64.211#优选IP-020','\x20\x20\x20\x20udp:\x20true','fillCount','block','value','104.16.88.7','extra','订阅生成失败:\x20','join','Upgrade','current','nekoray','type=xhttp','HTTP\x20','104.19.247.23#优选IP-147','every','headerLength','CHACHA20-POLY1305','188.114.96.94#优选IP-104','latest','104.18.217.109#优选IP-033','getWriter','混淆版','HKG','delete','singbox','has','geosite-category-ads-all','uuid','188.114.99.155#优选IP-086','仅支持\x20POST','104.18.28.48#优选IP-156','read','websocket','明文版','104.18.28.140#优选IP-095','xPaddingPlacement','TTL','172.66.157.150#优选IP-166','login','decode','104.17.146.117#优选IP-141','https://www.wetest.vip/page/cloudflare/cname.html','security',',\x20obfs-uri=','172.67.64.94#优选IP-128','assign','_ctx','104.21.57.47#优选IP-112','\x20=\x20trojan,\x20','values','indexOf','tun','https://','172.64.144.49#优选IP-027','sub://','104.18.123.15#优选IP-169','104.27.116.114#优选IP-262','🚀\x20节点选择','accept','writable','sum','104.24.178.200#优选IP-210','error','%20','104.24.155.234#优选IP-070','code','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','104.18.144.168#优选IP-259','4965080RkYPzM','only','加拿大','162.159.44.215#优选IP-031','keyLen','104.17.169.109#优选IP-217','http:','2.0.0','selector','ADMIN','104.17.118.180#优选IP-090','所有出站方式均失败','ARN','tlsOnly','proxyip.sg.cmliussss.net','104.16.91.33#优选IP-161','104.16.66.7','不支持的\x20VLESS\x20版本','socks5','releaseLock','preferredDomains','TYO','104.19.1.1','https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/','https://raw.githubusercontent.com/','xPaddingHeader','proxyip.jp.cmliussss.net','stream-one','getUint16','useCidr','object','162.159.241.11#优选IP-204','104.18.184.243#优选IP-035','保存失败:\x20','url','104.17.97.72#优选IP-213','104.24.46.107#优选IP-274','188.114.96.151#优选IP-223','CF\x20API\x20HTTP\x20','includes','104.19.88.253#优选IP-039','104.24.2.253#优选IP-077','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','拉取失败\x20HTTP\x20','SS\x20连接被关闭','104.20.1.1','104.27.97.130#优选IP-236','cdn.2020111.xyz','errors','162.159.10.243#优选IP-281','BESTIP_AUTO','trojan=','proxyip.gb.cmliussss.net','104.19.32.220#优选IP-192','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','104.16.248.248#优选IP-008','ws-opts','意大利','replace','AES-GCM','query-server-name','172.67.232.109#优选IP-182','cfip.1323123.xyz','vless://','104.25.245.147#优选IP-083','\x20\x20\x20\x20alpn:\x20[h2]','104.19.169.53#优选IP-061','ECH','open',',\x20obfs=wss,\x20obfs-host=','sourceURL','\x20\x20\x20\x20skip-cert-verify:\x20true','\x20HTTP/1.1\x0d\x0aHost:\x20','max','subtle','PAICNI/CFNext','all','fill','cf.090227.xyz','encrypt','SOCKS5\x20不支持的认证方法\x20','2606:4700::/32','latency','奥地利','115155.xyz','https://bestcf.pages.dev/random-region/US/100.txt','admin','round','104.25.113.22#优选IP-243','AMS','servername','&fp=chrome','ceil','enableVless','104.24.54.254#优选IP-044','getUint32','104.25.33.126#优选IP-238','104.25.20.146#优选IP-100','startsWith','https://bestcf.pages.dev/random-region/JP/100.txt','toISOString','https://bestcf.pages.dev/random-region/HK/100.txt','172.65.139.108#优选IP-224','reset','&ech=','https://cloudflare-dns.com/dns-query?name=','104.16.77.112#优选IP-214','flatMap','190.93.240.0/20','cf.877771.xyz','configured','tokenish','104.25.45.44#优选IP-038','172.64.81.44#优选IP-058','172.67.131.200#优选IP-248','kind','surge','104.27.40.81#优选IP-063','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','xhttp-opts','Mozilla/5.0\x20(CFNext)','\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','text/html;\x20charset=utf-8','version','ICN','2606:4700::','alpn','unknown','104.16.201.45#优选IP-160','&type=ws','172.67.103.87#优选IP-118','罗马尼亚','.list','104.27.23.242#优选IP-150','PATH','mixed','list','104.18.178.193#优选IP-183','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','toUpperCase','cloudflare.com','https://api.cloudflare.com/client/v4/graphql','http://','echDns','🐟\x20漏网之鱼','104.16.234.241#优选IP-288','&host=','www.cloudflare.com','clash','subMode','v2rayn','104.24.250.89#优选IP-296','ips','，请换一个数据源','cdn.tzpro.xyz','188.114.98.91#优选IP-064','104.27.4.144#优选IP-125','concat','aes-256-gcm','微测网\x20IPv6','data','tun-in','连接超时（SYN\x20被静默丢弃）','enableTrojan','188.114.98.19#优选IP-154','parse','104.17.46.187#优选IP-173','HostMonit\x20优选','CHINAMOBILE','TXT','filter','redirect','next','region','2a06:98c0::/29','nodeLimit','MAN','buffer','customErr','SS\x20分片长度非法\x20','🍎\x20苹果服务','197.234.240.0/22','172.67.72.4','findIndex','104.18.63.107#优选IP-185','162.159.90.82#优选IP-253','saas.sin.fan','172.67.127.122#优选IP-237','cname.xirancdn.us','workersInvocationsAdaptive','cloudflare','mode','<tr','chacha20poly1305','IPv6','阿联酋','from','opened','geosite-netflix','Not\x20Found','isArray','104.16.108.18#优选IP-106','tag','SOCKS5\x20连接失败\x20码','test','104.19.97.238#优选IP-139','gbk','update','104.27.20.220#优选IP-266','14AcHVZK','queryInHeader','luma_auth=','104.19.246.234#优选IP-280','ech-opts','geosite-google','162.159.14.18#优选IP-136','KIX','104.17.160.131#优选IP-194','104.19.143.220#优选IP-256','subrequests','104.17.25.173#优选IP-167',',\x20tag=','prefDomain','172.19.0.1/30','104.17.44.9','bestcf.030101.xyz','优选IP-','random','https://223.5.5.5/dns-query','tun0','172.67.71.106#优选IP-294','104.17.185.207#优选IP-029','188.114.97.63#优选IP-219','172.67.64.12#优选IP-021','application/octet-stream','不支持的\x20SS\x20加密方式:\x20','172.67.165.245#优选IP-216','forEach','104.25.251.220#优选IP-177','subRandomCount','info','min','188.114.99.18#优选IP-047','104.18.133.24#优选IP-085','104.19.123.4#优选IP-045','HAM','https://doh.pub/dns-query','104.16.45.249#优选IP-287','geosite-apple','geosite-microsoft','172.67.82.86#优选IP-162','未知\x20API:\x20','xhttp\x20代理错误:\x20',',\x20obfs-host=','104.19.78.144#优选IP-184','🤖\x20OpenAI','text/plain;\x20charset=utf-8','AAAA','probeAlive','162.159.235.27#优选IP-072','TLS','104.25.141.168#优选IP-042','\x20\x20\x20\x20ech-opts:','HOST','native','proxy\x20timeout','string','104.16.223.195#优选IP-056','188.114.96.164#优选IP-211','\x20\x20\x20\x20password:\x20','162.159.137.205#优选IP-036','xn--b6gac.eu.org','lastIndexOf','104.24.49.39#优选IP-299','quantumultx','quantumult','104.25.223.90#优选IP-239','path','墨西哥','188.114.96.116#优选IP-054','cloudflare-ip.mofashi.ltd','162.159.192.111#优选IP-232','https://8.8.8.8/dns-query','requests','&type=','proxyip.kr.cmliussss.net','2803:f800::/32','104.21.213.24#优选IP-017','172.65.118.85#优选IP-267','162.159.10.45#优选IP-208','encode','fmt','abort','https://cloudflare-dns.com/dns-query','/login?next=','145HiSXtC','preset','nodeLimitCount','config','chacha20-ietf-poly1305','name','162.159.9.18#优选IP-230','172.65.11.191#优选IP-122','104.25.238.237#优选IP-286','floor','CF_ACCOUNT_ID','outboundMode','stats','216913WIyzyE','dns-out','104.18.43.224#优选IP-022','getReader','104.18.141.27#优选IP-121','xPaddingObfsMode','104.16.113.211#优选IP-062','xhttp','104.16.123.26#优选IP-149','172.64.0.0/13','爱尔兰','text/yaml','trojan://','cfAccountId',',\x20over-tls=true,\x20tls-host=','429','匈牙利',',\x20method=none,\x20password=','viewer','104.27.66.179#优选IP-076','wetest_v4','speed.marisalnc.com','size','://','remote','geosite-spotify','新西兰','https://bestcf.pages.dev/random-region/TW/100.txt','🌐\x20谷歌服务','俄罗斯','x-padding-key','addr','cloudflare-ech.com','https://stock.hostmonit.com/CloudFlareYes','console','tls','198.18.0.0/15','CFNext\x20混淆版.js','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','subIncludeDefault','104.19.69.150#优选IP-186','162.159.6.246#优选IP-199','wss','setUTCHours','Mozilla/5.0','已重置：KV\x20已清空，面板还原为初始部署状态','cf.zerone-cdn.pp.ua','enable','direct','162.159.137.71#优选IP-276','188.114.97.0#优选IP-205','188.114.96.1#优选IP-011','?name=','raw','\x20\x20\x20\x20servername:\x20','cfApiToken','已保存并生效','no\x20answer','数据中心','172.65.173.221#优选IP-051','PROBE_ALIVE','172.65.167.52#优选IP-241','subUrl','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','阿根廷','seal','188.114.98.144#优选IP-046','104.27.46.114#优选IP-271','dns-direct','password','HEL','172.65.64.7#优选IP-037','188.114.96.255#优选IP-082','resolve','&alpn=','href','104.25.24.66#优选IP-148','add','172.66.164.60#优选IP-251','match','104.25.100.203#优选IP-144','104.17.107.217#优选IP-133','utf-8','ipv4_only','protocol','map','西班牙','104.18.185.26#优选IP-297','pathname','\x20=\x20vless,\x20','104.19.191.31',',\x20tls-verification=true,\x20tag=','headers','optimizer','any','hostname','subarray','count','proxyip.fi.cmliussss.net','function','bestcf','104.16.123.96#优选IP-002','\x20\x20\x20\x20\x20\x20enable:\x20','x-padding-header','false','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','proxyip.multacom.cmliussss.net','CHINATELECOM','优选地址','json','prototype','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','https://bestcf.pages.dev/random-region/KR/100.txt','104.17.201.77','188.114.96.141#优选IP-146','\x20\x20\x20\x20xhttp-opts:','104.21.224.5#优选IP-197',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','（未指定）','\x20\x20\x20\x20\x20\x20path:\x20','104.16.98.7','ss-subkey','无法识别的地址类型','104.24.34.149#优选IP-279','104.16.128.11','🌍\x20国外媒体','toLowerCase','104.17.87.46#优选IP-201','比利时','2c0f:f248::/32','slice','/main/','GraphQL:\x20','then','geosite-telegram','attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext','security=none&host=','aes-128gcm','__proto__',',\x20password=','104.18.196.199#优选IP-069','172.65.78.200#优选IP-283','104.24.0.0/14','sing-box','104.16.68.175#优选IP-153','内置·保底-','bind','104.24.46.127#优选IP-200','162.159.228.244#优选IP-071','188.114.98.27#优选IP-244','104.18.37.92#优选IP-024','172.64.145.202#优选IP-088','104.24.18.62#优选IP-289','enableXhttp','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','cdns.doon.eu.org','some','超时/网络错误','host','\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走代理隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20默认\x20nameserver\x20用国内\x20DoH；只有“将走代理”的规则集才用国外\x20DoH，\x0a#\x20\x20\x20\x20\x20\x20且其域名在\x20rules\x20中显式固定走代理。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH（微软已并入直连，微软域名走国内解析后直连）\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China,Microsoft\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20-\x20RULE-SET,Microsoft,直接连接\x20\x20\x20\x20\x20\x20\x20\x20#\x20微软全家桶直连（Office\x20/\x20OneDrive\x20/\x20Windows\x20更新\x20/\x20Teams\x20/\x20Xbox\x20等）\x0a\x20\x20-\x20RULE-SET,China,直接连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名直连\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC（大陆\x20/\x20微软\x20/\x20苹果）不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20大陆\x20IP\x20兜底直连：覆盖规则集未收录的域名\x20/\x20纯\x20IP\x20连接的大陆应用（GEOIP\x20库覆盖面更全）\x0a\x20\x20-\x20GEOIP,CN,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：其余（国外）走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0aBehaviorCL:\x20&BehaviorCL\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x20\x20\x20#\x20经典规则集（blackmatrix7\x20等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}\x20\x20\x20#\x20大陆直连全量：ChinaMaxNoIP（11万+\x20域名，含大陆可达国际服务），每日更新\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}\x20\x20\x20#\x20微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure\x20等）\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','now','https://bestcf.pages.dev/random-region/SG/100.txt','162.159.46.167#优选IP-067','proxyip.digitalocean.cmliussss.net','104.25.214.211#优选IP-055','9DzXdJX','isp','微测网\x20优选域名','trim','mixed-in','trojan','get','endsWith','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','boolean','user','104.18.173.224#优选IP-131','104.17.245.237#优选IP-221','today',',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a','104.25.36.200#优选IP-151','(((.+)+)+)+$','Status','1270530RdfKif','cidr','application/json','hasUpdate','command','tcp\x20timeout','172.65.47.182#优选IP-220','🎯\x20全球直连','104.18.119.34#优选IP-016','cpuTimeP50','empty',',\x20ws=true,\x20ws-path=','下载速度',',\x20ws-headers=Host:','relay','104.16.0.0/13','SS\x20出站缺少密码','OUTBOUND','104.19.68.127#优选IP-207','close','vless=','enqueue','quota','http\x20timeout','\x20\x20\x20\x20network:\x20','encryption=none','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','DUS','104.19.78.30#优选IP-089','172.64.34.109#优选IP-087','\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20','addEventListener','104.27.21.175#优选IP-298','timeout','outboundProxy','\x20\x20\x20\x20\x20\x20host:\x20','IPv4','104.18.41.168#优选IP-231','104.21.192.230#优选IP-099','\x0a[policy]\x0astatic=🚀\x20节点选择,\x20','split','188.114.99.14#优选IP-206','x-padding-obfs-mode','url:','constructor','未绑定\x20KV\x20命名空间，无需重置','\x20\x20\x20\x20ws-opts:','readable','race','trace','172.65.134.100#优选IP-103','未在仓库中找到版本信息','\x20\x20\x20\x20sni:\x20','setUint32','173.245.48.0/20','162.159.236.5#优选IP-065','application/dns-json','POST','检测失败:\x20','\x20=\x20','exec','104.25.44.144#优选IP-066','aes-256gcm','type','104.24.51.58#优选IP-138','application/json;\x20charset=utf-8','candidates','trojanPassword','172.65.50.167#优选IP-254','127.0.0.1:9090','原生地址','103.22.200.0/22','signal','188.114.97.21#优选IP-229','mozilla','xPaddingKey','\x20\x20\x20\x20\x20\x20headers:','104.18.7.34','新加坡','GET\x20/\x20HTTP/1.1\x0d\x0aHost:\x20','\x20\x20\x20\x20uuid:\x20','104.20.15.15','v2ray','104.17.101.139#优选IP-030','104.21.23.1','172.65.45.102#优选IP-250','byteLength','未找到账户数据（检查账户\x20ID\x20与令牌权限）','104.21.7.133#优选IP-226','TROJAN_PASSWORD','chrome','162.159.230.149#优选IP-116',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','find','shift','OSA','104.24.244.237#优选IP-075','104.25.181.74#优选IP-209','162.159.6.39#优选IP-195','VLESS\x20头部过短','IP地址','write','ipType','162.159.4.175#优选IP-049','162.159.199.220#优选IP-263','104.16.127.96#优选IP-006','polling','true','172.65.127.225#优选IP-034','port','ALPN','toString','Ⓜ️\x20微软服务','104.25.101.186#优选IP-057','setUint16','104.27.96.232#优选IP-282','没有可测的\x20IP','172.66.199.166#优选IP-127','searchParams','\x20\x20\x20\x20port:\x20','104.25.246.123#优选IP-043','25372BVNPEB','method','\x20\x20\x20\x20server:\x20','104.16.132.229#优选IP-007','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）','text','accounts','warn','162.159.153.10#优选IP-179','byteOffset','\x20\x20\x20\x20client-fingerprint:\x20chrome','decrypt','104.17.2.7','&security=none','doh\x20fail','密码错误','quantiles','User-Agent','length','104.16.124.96#优选IP-003','\x20\x20-\x20name:\x20','188.114.97.61#优选IP-164','104.18.26.28#优选IP-168','172.67.159.243#优选IP-242','send','162.159.136.73#优选IP-040','ech','proxyip.vultr.cmliussss.net','172.67.174.143#优选IP-176','104.17.76.49#优选IP-246','104.21.114.216#优选IP-079','getRandomValues','quotaAuto','https://www.wetest.vip/page/cloudflare/address_v4.html',',\x20username=','body','sort','188.114.96.0/20','104.27.27.106#优选IP-292','162.159.128.1','catch','172.65.35.169#优选IP-092','source','172.65.21.190#优选IP-191','https://1.1.1.1/dns-query','@edtunnel','message','HTTP\x20代理\x20CONNECT\x20失败:\x20','|rf','_quotaCap','优选IP-S','colo','104.25.193.135#优选IP-120','104.16.125.96#优选IP-004','aes-128-gcm','charCodeAt','&type=xhttp&mode=stream-one','435631xOedyW','SOCKS5\x20握手失败','104.16.238.98#优选IP-094','&extra=',',\x20tls=false','obfuscated','172.67.195.152#优选IP-188','172.67.85.54#优选IP-300','104.18.34.34','domains','104.24.58.243#优选IP-097','geosite-openai','plain','apply','连接被关闭','loon','&type=ws&path=','104.27.124.239#优选IP-278','188.114.96.89#优选IP-175','104.17.195.184#优选IP-135','sub','&security=tls&sni=','PROXYIP','172.66.161.31#优选IP-084','network','172.67.163.14#优选IP-108','104.19.23.222#优选IP-145','proxyip.oracle.cmliussss.net','arrayBuffer','104.24.230.144#优选IP-102','104.25.238.28#优选IP-277','104.25.73.92#优选IP-187','luma','https://www.wetest.vip/page/cloudflare/address_v6.html','2400:cb00::/32','澳大利亚','104.17.195.133#优选IP-152','104.17.127.106#优选IP-048','exception','162.159.19.201#优选IP-158','arraybuffer','SOCKS5\x20服务器要求认证但未提供凭据','Bearer\x20','CFNext\x20明文版.js','proxyip.us.cmliussss.net','padStart','https://dns.google/dns-query','SEL','surfboard','104.24.41.240#优选IP-212','45831IWNCqq','issued','MB/s','proxyip.se.cmliussss.net','104.25.197.107#优选IP-105','162.159.228.164#优选IP-295','162.159.94.229#优选IP-014','108.162.192.0/18','threads','presetErr','status','custom','104.19.214.25#优选IP-073','172.67.173.89#优选IP-132','拉取失败:\x20','104.24.230.213#优选IP-109','getUint8','预设源:\x20','https://dns.alidns.com/resolve','text/plain','104.18.255.187#优选IP-050','customPref','162.159.237.243#优选IP-119','stringify','keys','preferredIPs','104.18.185.40#优选IP-041','push','CF_API_TOKEN','security=none','172.65.202.216#优选IP-190','geosite-github','188.114.99.114#优选IP-060','fragmentParam','104.18.194.107#优选IP-228','未授权（需要管理密码）','104.17.127.180#优选IP-001','set','echHost','104.17.240.245#优选IP-165','vless','2405:b500::/32'];_0x395a=function(){return _0x4e85cf;};return _0x395a();}function probeLimit(){const _0x551f30=_0x34b348;if(probeRunning<PROBE_CONCURRENCY)return probeRunning++,Promise[_0x551f30(0x172)]();return new Promise(_0x29cded=>probeWaiters[_0x551f30(0x2df)](_0x29cded));}function probeRelease(){const _0x3f6b8e=_0x34b348,_0x4d9356=probeWaiters[_0x3f6b8e(0x23e)]();if(_0x4d9356)_0x4d9356();else probeRunning--;}async function probeAll(_0x35879e,_0x4a458e){const _0x3f41fa=_0x34b348,_0x2a90d3=[];let _0x331148=0x0;const _0x42eea2=Array[_0x3f41fa(0x419)]({'length':Math[_0x3f41fa(0x446)](PROBE_CONCURRENCY,_0x35879e['length'])},async()=>{while(_0x331148<_0x35879e['length']){const _0x8db57e=_0x331148++;await probeLimit();try{_0x2a90d3[_0x8db57e]=await _0x4a458e(_0x35879e[_0x8db57e],_0x8db57e);}catch(_0x2f300f){_0x2a90d3[_0x8db57e]=![];}finally{probeRelease();}}});return await Promise['all'](_0x42eea2),_0x2a90d3;}async function testProxyAlive(_0x2a610a,_0x28b2a4,_0x4e9e4d){const _0x549a46=_0x34b348;if(!PROBE_ALIVE_ENABLED)return!![];if(isCloudflareIP(_0x2a610a))return!![];const _0x427c5b=_0x4e9e4d||0x7d0;try{const _0x5f101a=connect({'hostname':_0x2a610a,'port':_0x28b2a4});await Promise['race']([_0x5f101a[_0x549a46(0x41a)],new Promise((_0x3f4a56,_0x3be1f1)=>setTimeout(()=>_0x3be1f1(new Error(_0x549a46(0x45e))),_0x427c5b))]);try{_0x5f101a['close']();}catch(_0x5d1e7f){}return!![];}catch(_0x46a30b){return![];}}async function testRelayAlive(_0x59ec1a,_0x4362a5,_0x26d06e){if(!PROBE_ALIVE_ENABLED)return!![];return testRelayAliveRaw(_0x59ec1a,_0x4362a5,_0x26d06e);}async function testRelayAliveRaw(_0x2184f6,_0x254968,_0x3fd1fc){const _0x29dff8=_0x34b348,_0x439c00=_0x3fd1fc||0x9c4;try{const _0x36f728=connect({'hostname':_0x2184f6,'port':_0x254968});await Promise[_0x29dff8(0x210)]([_0x36f728[_0x29dff8(0x41a)],new Promise((_0x4f73a6,_0x4967e7)=>setTimeout(()=>_0x4967e7(new Error(_0x29dff8(0x1e5))),_0x439c00))]);const _0x349292=_0x36f728['writable'][_0x29dff8(0x325)](),_0x58699b=_0x36f728[_0x29dff8(0x20f)][_0x29dff8(0x12c)]();await _0x349292['write'](new TextEncoder()[_0x29dff8(0x117)](_0x29dff8(0x22f)+_0x2184f6+'\x0d\x0aUser-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20close\x0d\x0a\x0d\x0a'));const _0x1b6b5a=await Promise[_0x29dff8(0x210)]([_0x58699b[_0x29dff8(0x330)](),new Promise((_0x3a544a,_0x1e6d00)=>setTimeout(()=>_0x1e6d00(new Error(_0x29dff8(0x1f7))),_0x439c00))]);try{_0x36f728[_0x29dff8(0x1f3)]();}catch(_0x16b4fe){}const _0x4a19e6=new TextDecoder()['decode'](_0x1b6b5a[_0x29dff8(0x314)]||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x29dff8(0x421)](_0x4a19e6);}catch(_0x3b8f17){return![];}}async function dohFirstCF(_0x5ae980){const _0x2af87c=_0x34b348;try{const _0x4bbc95=await fetchTimeout(_0x2af87c(0x3be)+encodeURIComponent(_0x5ae980)+'&type=A',{'headers':{'accept':_0x2af87c(0x218)}},0xfa0);if(!_0x4bbc95||!_0x4bbc95['ok'])return null;const _0x2c9e3f=await _0x4bbc95['json'](),_0x332f61=(_0x2c9e3f[_0x2af87c(0x2fa)]||[])['filter'](_0x48156f=>_0x48156f[_0x2af87c(0x21f)]===0x1&&/^\d+\.\d+\.\d+\.\d+$/[_0x2af87c(0x421)](_0x48156f[_0x2af87c(0x3f5)]))[_0x2af87c(0x17e)](_0x2155ea=>_0x2155ea['data']);return _0x332f61['filter'](isCloudflareIP)[0x0]||null;}catch(_0x1cbe69){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x214bc8){const _0x16f113=_0x34b348;if(!PROBE_ALIVE_ENABLED)return String(_0x214bc8||'')[_0x16f113(0x208)](/[\n,;]+/)[_0x16f113(0x17e)](_0xea0f32=>_0xea0f32[_0x16f113(0x1d1)]()[_0x16f113(0x38f)](/^\*\./,''))[_0x16f113(0x3ff)](Boolean)[_0x16f113(0x318)]('\x0a');if(Date[_0x16f113(0x1c9)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE[_0x16f113(0x3dd)]!==null)return DOMAIN_ALIVE_CACHE[_0x16f113(0x3dd)];const _0x9c1b0f=String(_0x214bc8||'')['split'](/[\n,;]+/)[_0x16f113(0x17e)](_0xb741ac=>_0xb741ac[_0x16f113(0x1d1)]()['replace'](/^\*\./,''))[_0x16f113(0x3ff)](Boolean),_0x3b685e=await probeAll(_0x9c1b0f,async _0x34ee65=>{const _0x1e968a=await dohFirstCF(_0x34ee65);if(!_0x1e968a||!isCloudflareIP(_0x1e968a))return{'d':_0x34ee65,'ok':![]};return{'d':_0x34ee65,'ok':await testProxyAlive(_0x1e968a,0x1bb)};}),_0x3f0cbc=_0x3b685e[_0x16f113(0x17e)]((_0x204bbd,_0x4207f2)=>_0x204bbd&&_0x204bbd['ok']?_0x9c1b0f[_0x4207f2]:null)['filter'](Boolean);return DOMAIN_ALIVE_CACHE['t']=Date[_0x16f113(0x1c9)](),DOMAIN_ALIVE_CACHE['list']=_0x3f0cbc[_0x16f113(0x318)]('\x0a'),DOMAIN_ALIVE_CACHE['list'];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x1c15d3=_0x34b348;if(bestcfCache['list']&&Date['now']()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache['list'];const _0x2e20b8=[],_0x12ca83=BESTCF_REGION_URLS['map'](async _0x5225ec=>{const _0x12a2e9=_0x2664;try{const _0x4efc62=await fetchTimeout(_0x5225ec[_0x12a2e9(0x377)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1f40);if(!_0x4efc62['ok'])return;const _0x50cd18=await _0x4efc62[_0x12a2e9(0x25e)](),_0x57691e=[];for(const _0x2eda8e of _0x50cd18['split'](/[\r\n]+/)){const _0x59fb0c=_0x2eda8e[_0x12a2e9(0x1d1)]()[_0x12a2e9(0x178)](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x59fb0c&&_0x57691e['length']<_0x5225ec[_0x12a2e9(0x18a)])_0x57691e[_0x12a2e9(0x2df)]({'ip':_0x59fb0c[0x1],'port':_0x59fb0c[0x2]?parseInt(_0x59fb0c[0x2],0xa):0x1bb,'name':_0x5225ec['label']+'-'+String(_0x57691e[_0x12a2e9(0x26b)]+0x1)['padStart'](0x2,'0')});}_0x57691e[_0x12a2e9(0x442)](_0x182bc6=>_0x2e20b8[_0x12a2e9(0x2df)](_0x182bc6));}catch(_0x521a3d){}});return await Promise[_0x1c15d3(0x3a1)](_0x12ca83),bestcfCache[_0x1c15d3(0x3dd)]=_0x2e20b8,bestcfCache['at']=Date[_0x1c15d3(0x1c9)](),_0x2e20b8;}function appendStableNodes(_0x267b5b,_0x7040b6,_0x6aeb73){const _0x22c241=_0x34b348;if(_0x267b5b[_0x22c241(0x26b)]>=_0x6aeb73)return;const _0x3db4bd=new Set();for(const _0x583f32 of _0x267b5b){try{_0x3db4bd[_0x22c241(0x176)](parseNodeServer(_0x583f32)[_0x22c241(0x1c7)]);}catch(_0x429806){}}let _0x1696ef=0x0;for(const _0x116b93 of BUILTIN_STABLE_IPS){if(_0x267b5b[_0x22c241(0x26b)]>=_0x6aeb73)break;if(_0x3db4bd[_0x22c241(0x32a)](_0x116b93))continue;_0x3db4bd[_0x22c241(0x176)](_0x116b93),_0x1696ef++;const _0x426f11=_0x22c241(0x1ba)+String(_0x1696ef)[_0x22c241(0x2bf)](0x2,'0');if(_0x7040b6[_0x22c241(0x3b2)])_0x267b5b[_0x22c241(0x2df)](vlessNode(_0x7040b6,_0x116b93,0x1bb,_0x426f11));if(_0x267b5b[_0x22c241(0x26b)]>=_0x6aeb73)break;if(_0x7040b6[_0x22c241(0x3f8)])_0x267b5b[_0x22c241(0x2df)](trojanNode(_0x7040b6,_0x116b93,0x1bb,_0x426f11));if(_0x267b5b[_0x22c241(0x26b)]>=_0x6aeb73)break;if(_0x7040b6['enableXhttp'])_0x267b5b[_0x22c241(0x2df)](vlessNode(_0x7040b6,_0x116b93,0x1bb,_0x426f11,{'type':_0x22c241(0x130)}));}}function appendFallbackNodes(_0x2e915f,_0x65df7d,_0x440108,_0x3c6176){const _0x57d448=_0x34b348;if(_0x2e915f[_0x57d448(0x26b)]>=_0x440108)return;const _0x1b177e=new Set();for(const _0x28d0ae of _0x2e915f){try{_0x1b177e[_0x57d448(0x176)](parseNodeServer(_0x28d0ae)[_0x57d448(0x1c7)]);}catch(_0x164811){}}const _0x129ae1=(_0x837a94,_0x1a1cf3)=>{const _0x75b9ef=_0x57d448;if(_0x2e915f['length']>=_0x440108)return;if(_0x1b177e['has'](_0x837a94))return;_0x1b177e[_0x75b9ef(0x176)](_0x837a94);if(_0x65df7d[_0x75b9ef(0x3b2)])_0x2e915f[_0x75b9ef(0x2df)](vlessNode(_0x65df7d,_0x837a94,0x1bb,_0x1a1cf3));if(_0x65df7d['enableTrojan'])_0x2e915f[_0x75b9ef(0x2df)](trojanNode(_0x65df7d,_0x837a94,0x1bb,_0x1a1cf3));if(_0x65df7d['enableXhttp'])_0x2e915f[_0x75b9ef(0x2df)](vlessNode(_0x65df7d,_0x837a94,0x1bb,_0x1a1cf3,{'type':_0x75b9ef(0x130)}));};_0x65df7d[_0x57d448(0x2ff)]&&_0x65df7d[_0x57d448(0x2ff)]['native']===!![]&&_0x129ae1(_0x65df7d[_0x57d448(0x1c7)],'原生地址');}async function generateSubscription(_0x24dcc3,_0x2075c5,_0xbe55c7,_0x3ba023,_0x1471b9){const _0x535933=_0x34b348;if(!_0x24dcc3[_0x535933(0x46a)]||_0x24dcc3['path']==='/'||_0x24dcc3[_0x535933(0x46a)]==='')_0x24dcc3['path']=_0x24dcc3[_0x535933(0x32c)];const _0x386e31=_0x24dcc3[_0x535933(0x3ff)]&&_0x24dcc3[_0x535933(0x3ff)][_0x535933(0x246)]||[];if(_0x386e31[_0x535933(0x37c)](_0x535933(0x417)))await refreshOfficialV6CIDRs();const _0x32f2ed=_0x24dcc3[_0x535933(0x186)]&&_0x24dcc3[_0x535933(0x186)][_0x535933(0x3ea)]||'';if(_0x32f2ed===''&&(!_0x24dcc3[_0x535933(0x2dd)]||_0x24dcc3[_0x535933(0x2dd)][_0x535933(0x26b)]<0x50))try{const [_0x25e8c2,_0x3f655f,_0x47e56b]=await Promise[_0x535933(0x3a1)]([fetchBestcfPool()[_0x535933(0x281)](()=>[]),fetchLatestPreferredIPs(0xc8)[_0x535933(0x281)](()=>null),Promise['resolve'](parseIPList(BUILTIN_PREFERRED_IPS[_0x535933(0x318)]('\x0a')))]),_0x38212b=[],_0x9f1f19=[],_0x58d43f=new Set((_0x24dcc3[_0x535933(0x2dd)]||[])[_0x535933(0x17e)](_0x50d395=>_0x50d395['ip']));for(const _0x3aa6e6 of[..._0x24dcc3[_0x535933(0x2dd)]||[],..._0x25e8c2||[],..._0x3f655f||[],..._0x47e56b]){if(!_0x3aa6e6||!_0x3aa6e6['ip']||_0x58d43f['has'](_0x3aa6e6['ip']))continue;_0x58d43f['add'](_0x3aa6e6['ip']);const _0x28d040={'ip':_0x3aa6e6['ip'],'port':_0x3aa6e6[_0x535933(0x24d)]||0x1bb,'name':_0x3aa6e6[_0x535933(0x121)]||'','relay':!!_0x3aa6e6[_0x535933(0x1ee)]};if(_0x28d040[_0x535933(0x1ee)]||!isCloudflareIP(_0x28d040['ip']))_0x9f1f19[_0x535933(0x2df)](_0x28d040);else _0x38212b[_0x535933(0x2df)](_0x28d040);}const _0x4d51a8=_0x9f1f19[_0x535933(0x1ab)](0x0,0x64),_0x275e18=_0x38212b['slice'](0x0,0x96),[_0x5677f5,_0xd2427a]=await Promise[_0x535933(0x3a1)]([probeAll(_0x4d51a8,_0x2b81fd=>testRelayAlive(_0x2b81fd['ip'],_0x2b81fd[_0x535933(0x24d)]||0x1bb,0x9c4)),probeAll(_0x275e18,_0x71ff01=>testProxyAlive(_0x71ff01['ip'],_0x71ff01[_0x535933(0x24d)]||0x1bb,0x9c4))]),_0x3d0ec2=_0x4d51a8[_0x535933(0x3ff)]((_0x8b1bf6,_0x73d18a)=>_0x5677f5[_0x73d18a]),_0x5227fd=_0x275e18['filter']((_0x1a58d3,_0x4d1aff)=>_0xd2427a[_0x4d1aff]),_0x29a97f=_0x5227fd['slice'](0x0,0xd2),_0xd9c4e4=_0x3d0ec2[_0x535933(0x1ab)](0x0,0x28);_0x24dcc3['preferredIPs']=[..._0x24dcc3[_0x535933(0x2dd)]||[],..._0x29a97f,..._0xd9c4e4]['slice'](0x0,0xfa);}catch(_0x2b25d5){}const _0xfe51a1=!/\.workers\.dev$/i[_0x535933(0x421)](new URL(_0x2075c5)[_0x535933(0x188)]),_0x4fbdd6=Object[_0x535933(0x33e)]({},_0x24dcc3,{'host':_0x24dcc3[_0x535933(0x1c7)]||new URL(_0x2075c5)[_0x535933(0x188)]});_0xfe51a1&&(_0x4fbdd6[_0x535933(0x362)]=!![]);const _0x9f5851=_0x24dcc3[_0x535933(0x186)]&&_0x24dcc3[_0x535933(0x186)][_0x535933(0x3ea)]||'';let _0x2445b7=[];const _0x4297f1=_0x24dcc3[_0x535933(0x3ff)]&&_0x24dcc3[_0x535933(0x3ff)][_0x535933(0x246)]||[],_0x4c6013=_0x4297f1[_0x535933(0x37c)](_0x535933(0x417)),_0x4f527d=_0x4297f1[_0x535933(0x26b)]===0x1&&_0x4297f1[0x0]==='IPv6',_0x394200=_0x4f527d?OFFICIAL_V6_CIDRS:_0x4c6013?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x3be201=parseIPList(BUILTIN_PREFERRED_IPS[_0x535933(0x318)]('\x0a'))[_0x535933(0x17e)](_0x3a0afb=>({'ip':_0x3a0afb['ip'],'port':_0x3a0afb[_0x535933(0x24d)]||0x1bb,'name':_0x3a0afb['name']||_0x535933(0x437)+String(BUILTIN_PREFERRED_IPS[_0x535933(0x343)](_0x3a0afb)+0x1)['padStart'](0x2,'0')}));if(_0x9f5851===_0x535933(0x2cf)){const _0x3b3e2b=!!(_0x24dcc3['optimizer']&&_0x24dcc3[_0x535933(0x186)]['subIncludeDefault']),_0x4cf8cd=!_0x3b3e2b;_0x2445b7=await resolvePreferredDomains(_0x24dcc3[_0x535933(0x369)]||'',_0x4cf8cd?0xc8:0x28,_0x4cf8cd?0x7d0:0x12c,_0x3b3e2b,_0x3b3e2b,_0x4c6013);if(_0x3b3e2b){const _0xafffe3=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x4c6013),_0x2b7715=new Set(_0xafffe3['map'](_0x3b0f5b=>_0x3b0f5b['ip']));_0x2445b7=[..._0xafffe3,..._0x2445b7[_0x535933(0x3ff)](_0x3a30bb=>!_0x2b7715[_0x535933(0x32a)](_0x3a30bb['ip']))],_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x3be201];if(!_0x4fbdd6['optimizer'])_0x4fbdd6['optimizer']={};_0x4fbdd6[_0x535933(0x186)]['fillCount']=Math[_0x535933(0x39e)](parseInt(_0x4fbdd6[_0x535933(0x186)][_0x535933(0x312)])||0x0,0x320);}}else{if(_0x9f5851===''){const _0x1705b7=_0x24dcc3[_0x535933(0x2ff)]||{},_0x5ee6f0=_0x1705b7[_0x535933(0x45d)]===!![],_0x567b2c=_0x1705b7[_0x535933(0x433)]!==![],_0x2e9e0d=_0x1705b7[_0x535933(0x304)]!==![],_0x4ef120=_0x1705b7[_0x535933(0x2d9)]===!![];_0x5ee6f0&&!_0x4f527d&&(_0x4fbdd6[_0x535933(0x369)]=(_0x4fbdd6[_0x535933(0x369)]?_0x4fbdd6[_0x535933(0x369)]+'\x0a':'')+_0x4fbdd6[_0x535933(0x1c7)]+'#原生地址');if(!_0x4ef120)_0x4fbdd6[_0x535933(0x2dd)]=[];const _0x15bcd5=_0x24dcc3[_0x535933(0x3ff)]||{},_0x252837=_0x15bcd5[_0x535933(0x402)],_0x482e88=Array[_0x535933(0x41d)](_0x252837)?_0x252837['length']===0x0||_0x252837[_0x535933(0x37c)]('all'):!_0x252837||_0x252837==='all';if(_0x482e88){_0x2445b7=[];if(_0x567b2c&&!_0x4f527d){const _0x27c5d4=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0x27c5d4)_0x4fbdd6[_0x535933(0x369)]=(_0x4fbdd6[_0x535933(0x369)]?_0x4fbdd6[_0x535933(0x369)]+'\x0a':'')+_0x27c5d4;}if(_0x2e9e0d&&!_0x4f527d){const _0x362938=await fetchLatestPreferredIPs(0x96);if(_0x362938&&_0x362938[_0x535933(0x26b)])_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x362938];try{const _0x552861=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x552861&&_0x552861[_0x535933(0x26b)])_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6['preferredIPs']||[],..._0x552861];}catch(_0x433115){}}if(_0x4c6013&&_0x567b2c)try{const _0x4d5317=DEFAULT_PREFERRED_DOMAINS+(_0x4f527d?'\x0a'+BUILTIN_OFFICIAL_DOMAINS[_0x535933(0x318)]('\x0a'):''),_0x537971=await resolvePreferredDomains(_0x4d5317,0x28,_0x4f527d?0x320:0xf0,![],!![],!![]);if(_0x537971&&_0x537971['length'])_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6['preferredIPs']||[],..._0x537971];}catch(_0x408b7f){}}else _0x567b2c&&(_0x2445b7=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x4c6013));if(_0x2e9e0d){if(_0x4f527d){const _0x3afa20=_0x3be201[_0x535933(0x17e)](_0x279a97=>({'ip':ipv4ToEmbeddedV6(_0x279a97['ip']),'port':_0x279a97['port']||0x1bb,'name':_0x279a97['name']}))[_0x535933(0x3ff)](_0xdfbb38=>_0xdfbb38['ip']);_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x3afa20];}else{if(_0x4c6013){const _0x535326=_0x3be201[_0x535933(0x17e)](_0x249c1a=>({'ip':ipv4ToEmbeddedV6(_0x249c1a['ip']),'port':_0x249c1a[_0x535933(0x24d)]||0x1bb,'name':_0x249c1a[_0x535933(0x121)]}))[_0x535933(0x3ff)](_0x39e206=>_0x39e206['ip']);_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x3be201,..._0x535326];}else _0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x3be201];}}if(!_0x5ee6f0&&!_0x567b2c&&!_0x2e9e0d&&!_0x4ef120){if(_0x4f527d){const _0x375595=_0x3be201[_0x535933(0x17e)](_0x35d7f3=>({'ip':ipv4ToEmbeddedV6(_0x35d7f3['ip']),'port':_0x35d7f3['port']||0x1bb,'name':_0x35d7f3['name']}))[_0x535933(0x3ff)](_0x5a1fa8=>_0x5a1fa8['ip']);_0x4fbdd6['preferredIPs']=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x375595];}else _0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6[_0x535933(0x2dd)]||[],..._0x3be201];}if(_0x4f527d&&_0x4fbdd6[_0x535933(0x2dd)])_0x4fbdd6[_0x535933(0x2dd)]=_0x4fbdd6[_0x535933(0x2dd)][_0x535933(0x3ff)](_0x8f3ec4=>String(_0x8f3ec4['ip'])[_0x535933(0x343)](':')>=0x0);if(!_0x4fbdd6[_0x535933(0x186)])_0x4fbdd6[_0x535933(0x186)]={};_0x4fbdd6['optimizer'][_0x535933(0x312)]=Math[_0x535933(0x39e)](parseInt(_0x4fbdd6[_0x535933(0x186)][_0x535933(0x312)])||0x0,_0x4f527d?0x0:0x3e8);if(_0x4fbdd6[_0x535933(0x2dd)]&&_0x4fbdd6[_0x535933(0x2dd)][_0x535933(0x26b)]){const _0x1fb965=BUILTIN_STABLE_IPS[_0x535933(0x17e)]((_0x1301e4,_0x3db4fe)=>({'ip':_0x1301e4,'port':0x1bb,'name':_0x535933(0x28b)+String(_0x3db4fe+0x1)[_0x535933(0x2bf)](0x2,'0')})),_0x1dd5dc=new Set(_0x1fb965[_0x535933(0x17e)](_0xe62a13=>_0xe62a13['ip']));_0x4fbdd6[_0x535933(0x2dd)]=[..._0x1fb965,..._0x4fbdd6['preferredIPs'][_0x535933(0x3ff)](_0x33883b=>!_0x1dd5dc[_0x535933(0x32a)](_0x33883b['ip']))];}}}const _0x121af8=_0x24dcc3['_skipIssued']&&_0x24dcc3['_skipIssued'][_0x535933(0x13f)]?_0x24dcc3['_skipIssued']:null;if(_0x2445b7[_0x535933(0x26b)]){let _0x5eab5d=_0x2445b7;if(_0x121af8){const _0x32ae2b=_0x2445b7[_0x535933(0x3ff)](_0x3e1061=>!_0x121af8[_0x535933(0x32a)](_0x3e1061['ip'])),_0x346408=_0x2445b7[_0x535933(0x3ff)](_0x4c9039=>_0x121af8[_0x535933(0x32a)](_0x4c9039['ip']));_0x5eab5d=[..._0x32ae2b,..._0x346408];}const _0x15441b=(_0x4fbdd6['preferredIPs']||[])[_0x535933(0x26b)];_0x5eab5d=_0x5eab5d[_0x535933(0x17e)]((_0x2b4d42,_0x498d1c)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x535933(0x421)](_0x2b4d42[_0x535933(0x121)]||'')?Object[_0x535933(0x33e)]({},_0x2b4d42,{'name':_0x535933(0x437)+String(_0x15441b+_0x498d1c+0x1)['padStart'](0x2,'0')}):_0x2b4d42),_0x4fbdd6[_0x535933(0x2dd)]=[..._0x4fbdd6['preferredIPs']||[],..._0x5eab5d];}if(_0x4f527d&&_0x4fbdd6[_0x535933(0x2dd)])_0x4fbdd6[_0x535933(0x2dd)]=_0x4fbdd6[_0x535933(0x2dd)][_0x535933(0x3ff)](_0x425d08=>String(_0x425d08['ip'])[_0x535933(0x343)](':')>=0x0);_0x3ba023=(_0x3ba023||'')[_0x535933(0x1a7)]();const _0x2c07af=(_0xbe55c7||'')[_0x535933(0x1a7)](),_0x2969a9=[_0x535933(0x3e9),'singbox',_0x535933(0x1b8),_0x535933(0x3c9),_0x535933(0x2c2),_0x535933(0x2a1),'quanx',_0x535933(0x467)][_0x535933(0x37c)](_0x2c07af)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/['test'](_0x3ba023);let _0xf12eaa=_0x2969a9?0x12c:0x320;if(_0x9f5851===_0x535933(0x2cf)&&_0x24dcc3[_0x535933(0x186)]&&_0x24dcc3[_0x535933(0x186)][_0x535933(0x150)])_0xf12eaa=_0x2969a9?Math[_0x535933(0x39e)](_0xf12eaa,0x12c):Math['max'](_0xf12eaa,0x320);if(_0x9f5851==='custom'&&!(_0x24dcc3['optimizer']&&_0x24dcc3[_0x535933(0x186)]['subIncludeDefault']))_0xf12eaa=_0x2969a9?Math[_0x535933(0x39e)](_0xf12eaa,0x320):Math[_0x535933(0x39e)](_0xf12eaa,0x7d0);if(_0x24dcc3[_0x535933(0x24a)]===![])_0xf12eaa=0x2710;if(_0x24dcc3[_0x535933(0x404)]){const _0x41012a=parseInt(_0x24dcc3[_0x535933(0x11e)])||0x0;if(_0x41012a>0x0)_0xf12eaa=Math[_0x535933(0x446)](_0x41012a,0x3e8);}if(_0x24dcc3[_0x535933(0x28a)])_0xf12eaa=Math['min'](_0xf12eaa,_0x24dcc3['_quotaCap']);const _0x224e5a=_0x9f5851===_0x535933(0x438)?Object[_0x535933(0x33e)]({},_0x24dcc3['filter'],{'region':_0x535933(0x3a1)}):_0x24dcc3[_0x535933(0x3ff)];let _0x3c4a1e=filterNodes(await buildNodes(_0x4fbdd6,_0xf12eaa,_0x121af8),_0x224e5a);const _0x38998b=_0x9f5851===_0x535933(0x2cf)&&!(_0x24dcc3[_0x535933(0x186)]&&_0x24dcc3[_0x535933(0x186)][_0x535933(0x150)]);if(!_0x38998b&&!_0x4f527d)appendFallbackNodes(_0x3c4a1e,_0x4fbdd6,_0xf12eaa,_0x1471b9);if(!_0x4f527d&&!(_0x38998b&&_0x3c4a1e['length']>0x0))appendStableNodes(_0x3c4a1e,_0x4fbdd6,_0xf12eaa);if(_0x24dcc3['nodeLimit']&&_0x9f5851&&!_0x38998b&&_0x3c4a1e[_0x535933(0x26b)]<_0xf12eaa){const _0x5ea72e=_0xf12eaa-_0x3c4a1e[_0x535933(0x26b)],_0x4d475a=new Set();for(const _0x231521 of _0x3c4a1e){try{_0x4d475a['add'](parseNodeServer(_0x231521)[_0x535933(0x1c7)]);}catch(_0x264929){}}const _0x1890ab=(_0x53e0e5,_0x1e7daf,_0x3a4fac)=>{const _0x1c6bed=_0x535933;if(_0x3c4a1e[_0x1c6bed(0x26b)]>=_0xf12eaa)return;if(_0x4d475a[_0x1c6bed(0x32a)](_0x53e0e5))return;_0x4d475a['add'](_0x53e0e5),_0x3c4a1e[_0x1c6bed(0x2df)](vlessNode(_0x4fbdd6,_0x53e0e5,_0x1e7daf||0x1bb,_0x3a4fac));};let _0x51fd89=0x0;try{const _0x1e7da6=await fetchBestcfPool(),_0x1f1d81=_0x121af8?_0x1e7da6[_0x535933(0x3ff)](_0x237aa4=>!_0x121af8['has'](_0x237aa4['ip'])):_0x1e7da6,_0x219ce6=_0x1f1d81['length']>=_0x5ea72e?_0x1f1d81:_0x1e7da6;for(const _0x47e94d of _0x219ce6){_0x1890ab(_0x47e94d['ip'],_0x47e94d['port'],_0x47e94d[_0x535933(0x121)]||'优选IP-'+String(_0x47e94d[_0x535933(0x24d)]));if(_0x3c4a1e[_0x535933(0x26b)]>=_0xf12eaa)break;}}catch(_0x2b964b){}if(_0x3c4a1e[_0x535933(0x26b)]<_0xf12eaa){const _0x3b99b1=_0xf12eaa-_0x3c4a1e['length'],_0x5b2795=OFFICIAL_V6_CIDRS,_0x572157=_0x4f527d?_0x5b2795:_0x4c6013?[...REACHABLE_CIDRS,..._0x5b2795]:REACHABLE_CIDRS,_0x1697e7=randomIPsFromCidrs(_0x572157,_0x3b99b1*0x3),_0x24238c=_0x121af8?_0x1697e7['filter'](_0x5ab35b=>!_0x121af8['has'](_0x5ab35b)):_0x1697e7,_0x44ed3c=_0x24238c[_0x535933(0x26b)]>=_0x3b99b1?_0x24238c:_0x1697e7;for(const _0x2c70c8 of _0x44ed3c){if(_0x3c4a1e[_0x535933(0x26b)]>=_0xf12eaa)break;_0x51fd89++,_0x1890ab(_0x2c70c8,0x1bb,_0x535933(0x437)+String(_0x51fd89)['padStart'](0x3,'0'));}}}if(_0x3c4a1e[_0x535933(0x26b)]>_0xf12eaa)_0x3c4a1e['length']=_0xf12eaa;const _0x3fd237=[],_0x4931c0=new Set();for(const _0x2330ac of _0x3c4a1e){try{const {host:_0x51d8c1}=parseNodeServer(_0x2330ac);isValidIp(_0x51d8c1)&&!_0x4931c0[_0x535933(0x32a)](_0x51d8c1)&&(_0x4931c0[_0x535933(0x176)](_0x51d8c1),_0x3fd237[_0x535933(0x2df)](_0x51d8c1));}catch(_0x335c54){}}let _0x48d420,_0x284852;if(_0x2c07af===_0x535933(0x3e9))_0x48d420=_0x535933(0x134),_0x284852=generateClash(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af===_0x535933(0x329)||_0x2c07af===_0x535933(0x1b8))_0x48d420=_0x535933(0x1e2),_0x284852=generateSingbox(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af==='surge')_0x48d420=_0x535933(0x2d7),_0x284852=generateSurge(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af===_0x535933(0x2c2))_0x48d420=_0x535933(0x2d7),_0x284852=generateSurfboard(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af===_0x535933(0x2a1))_0x48d420=_0x535933(0x2d7),_0x284852=generateLoon(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af===_0x535933(0x309)||_0x2c07af===_0x535933(0x467))_0x48d420=_0x535933(0x2d7),_0x284852=generateQuanX(_0x4fbdd6,_0x3c4a1e);else{if(_0x2c07af===_0x535933(0x29e)||_0x2c07af==='raw')_0x48d420='text/plain',_0x284852=_0x3c4a1e[_0x535933(0x318)]('\x0a');else{if(_0x2c07af===_0x535933(0x232)||_0x2c07af===_0x535933(0x3eb)||_0x2c07af==='shadowrocket'||_0x2c07af===_0x535933(0x31b)||_0x2c07af==='stash')_0x48d420='text/plain',_0x284852=_0x3c4a1e[_0x535933(0x318)]('\x0a');else{if(_0x3ba023[_0x535933(0x37c)]('clash')||_0x3ba023[_0x535933(0x37c)]('stash'))_0x48d420=_0x535933(0x134),_0x284852=generateClash(_0x4fbdd6,_0x3c4a1e);else{if(_0x3ba023['includes'](_0x535933(0x1b8)))_0x48d420=_0x535933(0x1e2),_0x284852=generateSingbox(_0x4fbdd6,_0x3c4a1e);else{if(_0x3ba023['includes']('surge'))_0x48d420=_0x535933(0x2d7),_0x284852=generateSurge(_0x4fbdd6,_0x3c4a1e);else{if(_0x3ba023[_0x535933(0x37c)]('surfboard'))_0x48d420=_0x535933(0x2d7),_0x284852=generateSurfboard(_0x4fbdd6,_0x3c4a1e);else{if(_0x3ba023[_0x535933(0x37c)](_0x535933(0x2a1)))_0x48d420='text/plain',_0x284852=generateLoon(_0x4fbdd6,_0x3c4a1e);else _0x3ba023[_0x535933(0x37c)](_0x535933(0x468))?(_0x48d420=_0x535933(0x2d7),_0x284852=generateQuanX(_0x4fbdd6,_0x3c4a1e)):(_0x48d420=_0x535933(0x2d7),_0x284852=_0x3c4a1e[_0x535933(0x318)]('\x0a'));}}}}}}}}}}}}return{'type':_0x48d420,'body':_0x284852,'issued':_0x3fd237};}const PANEL_HTML=String[_0x34b348(0x15e)]`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · Cloudflare 隧道面板</title>
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
    <div class="bt"><b>CFNext</b><span>Cloudflare 隧道面板</span></div>
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
              <label class="spill"><input type="checkbox" id="fl-ip6" checked><span>IPv6</span></label>
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
        <p class="hint" style="margin-top:12px">筛选按 地区 → IP 类型 → 运营商 逐级放宽，任一维度无节点时自动放宽，保证订阅始终非空。「运营商偏好」按节点名称中的运营商标记过滤（移动=移动/CM/CHINAMOBILE、联通=联通/CU/UNICOM、电信=电信/CT/CHINATELECOM），三个全选或节点池无任何运营商标记时不生效。「节点地区」支持多选，仅剔除明确标记为其它地区的节点。「地址来源」控制下发节点的来源：原生地址（工作器域名）、优选域名（第三方优选域名列表）、优选 IP（内置与实时拉取的优选 IP）、自定义优选（「优选配置」保存的优选列表）、随机优选（「优选配置」随机优选模式，与自定义优选互斥）。</p>
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
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控选项后即可在此查看当日用量；详细策略与自动调节见「配额安全」。</p>
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
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH、节点测活与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（支持Mihomo内核，须绑定自定义域名并开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）在开启「仅 TLS」后将从订阅中剔除。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">关闭：不做任何 TCP 握手 / HTTP 探测与剔除，节点的下发策略、出入站方式、ProxyIP 等节点相关均按 V1.x版本处理方式处理——按数据源原始顺序全量下发，客户端自行择优。<br>开启：对候选地址做 TCP 探测并剔除判死项（含精选池 / 优选 IP / 域名预检 / ProxyIP 兜底）；Cloudflare 运行时禁止出站连接 CF IP 段，故对 CF 段 IP 跳过探测、直接视为可用（内置精选池实测 97% 可用，不会被误判清空），仅对非 CF 段（反代 / ProxyIP）真实测活剔除死节点。自定义订阅 / 随机优选模式不测活。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点将附带 ech 参数与 alpn 协商，客户端需支持 ECH 才能生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（填写后作为固定出口优先使用；留空则直连失败后由内置地区反代兜底，格式 host 或 host:port）</label><input type="text" id="s-proxyIP" placeholder="留空则直连失败后走内置地区反代" autocomplete="off"></div>
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
        <div class="note-box" style="margin:0">所有配置修改后点击右下角「保存全部」才会写入 KV 并生效，保存成功后订阅地址与节点构成立即更新；「重置」将清空 KV 中全部数据并还原为初始部署状态。</div>
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
          <div class="field" style="margin:0"><label>测速端口</label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt" autocomplete="off"></div>
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
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为可用 IP 下发。测速结果里的「加入优选」会把最优 IP 写入此列表，保存全部后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点直接下发，不经域名解析。</div>
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
        <p class="hint">自动调节：当日用量达到免费额度 60% 后，节点上限按比例收缩（基准上限 1000 条）——60% 时下发 1000 条、70% 时 750 条、80% 时 500 条、90% 时 250 条、100% 时 100 条（保底下限），用量越高下发越少，保护账户免费额度。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原轮询模式的 300/800 分档上限；勾选三种协议时节点总数仍为设定值（不再按协议 3 倍膨胀）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性下发全部节点，不受 300/800 上限限制；开启后按格式上限轮换下发新 IP（200 条去重窗口，避免重复下发）；端口固定 443（1.0.6 机制），换新通过 IP 轮换实现。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求都会消耗 Worker 的 CPU 时间（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防，保证稳定运行。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（按生效优先级从高到低）：① 用量监控——查看当日请求量，为自动调节提供数据；② 自动调节——用量 ≥60% 时按比例收缩节点上限，位于计算链末端以 min 收敛，只收紧、永不放大，优先级最高且与轮询状态无关；③ 数量上限（下发控制）——按设定值精确限制，全局生效（轮询开/关均受限）；④ 格式分档与轮询去重——结构化/行式格式上限与轮询去重换新。各层上限冲突时取较小值，让订阅生成的 CPU 消耗始终处于免费额度内。</div>
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
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 协议要求绑定自定义域名），不负责域名解析。自定义域名访问面板需先在 Cloudflare 面板 → Workers 与 Pages → 该 Worker → Domains &amp; Routes 添加自定义域名（DNS 由 Cloudflare 托管，证书自动签发），此字段留空即使用 *.workers.dev。KV 未绑定时配置只在内存中生效，重置后回到默认值。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项（可选）</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（<b>不是邮箱</b>），打开并登录Cloudflare账户后，点击「左侧栏」→「管理账户」→「帐户 API 令牌」→「创建令牌」。查询失败提示 401 时请检查这两项是否填错。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 格式导出全部面板设置（含协议、优选、筛选、配额监控），可保存到本地或迁移到其他部署；导入后请点右下角「保存全部」生效。</p>
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
      <div class="view-head"><h2>关于项目</h2><p>CFNext — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">本面板为全新独立设计/全新编写：后端代理、订阅与优选逻辑参考以下开源项目的功能清单</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>参考仓库</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">github.com/cmliu/edgetunnel</a></td></tr>
            <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">github.com/zizifn/edgetunnel</a></td></tr>
            <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">github.com/6Kmfi6HP/EDtunnel</a></td></tr>
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
  if (/\.workers\.dev$/i.test(location.hostname)) $('wdwarn').style.display = 'block';
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
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  var wd = !!(d.workersDev) || /\.workers\.dev$/i.test(location.hostname);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '当前为 *.workers.dev 域名：Cloudflare 可能限制该域名直连，若客户端更新订阅失败（提示无效订阅），请在客户端开启系统代理或「更新订阅使用代理」后重试；节点连接不受影响（直连优选 IP）。'
    : '';
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
  String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });
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
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
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
  $('q-probe-on').checked = !!CFG.probeAlive;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
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
  String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (parseIps(s).length) ipLines.push(s); else domLines.push(s);
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
    probeAlive: $('q-probe-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
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
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#CFNext';
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
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
            results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
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
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
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
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
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

`,loginHTML=_0x34b348(0x38b);function isBrowserUA(_0x3a0602){const _0x4f8d4d=_0x34b348;return(_0x3a0602||'')[_0x4f8d4d(0x1a7)]()[_0x4f8d4d(0x37c)](_0x4f8d4d(0x22a));}async function requireAuth(_0x567ddf,_0x282dfb){const _0x53e17a=_0x34b348;if(!_0x282dfb[_0x53e17a(0x3ab)])return!![];const _0x1da28a=_0x567ddf[_0x53e17a(0x185)][_0x53e17a(0x1d4)]('Cookie')||'',_0x587068=_0x1da28a['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x587068&&_0x587068[0x1]===md5hex(String(_0x282dfb[_0x53e17a(0x3ab)])));}async function handleRequest(_0x5d4d56,_0xea922f){const _0x39e931=_0x34b348,_0x5ac70e=new URL(_0x5d4d56[_0x39e931(0x377)]),_0x190430=_0x5d4d56[_0x39e931(0x185)][_0x39e931(0x1d4)](_0x39e931(0x26a))||'',_0x356796=(_0x5d4d56[_0x39e931(0x185)][_0x39e931(0x1d4)](_0x39e931(0x319))||'')[_0x39e931(0x1a7)]();if(_0x5ac70e[_0x39e931(0x17d)]===_0x39e931(0x35b))return Response[_0x39e931(0x400)](_0x5ac70e[_0x39e931(0x174)][_0x39e931(0x38f)](_0x39e931(0x3e3),_0x39e931(0x345)),0x12d);const _0x55ac81=await loadConfig(_0xea922f),_0x39932b=_0x55ac81[_0x39e931(0x46a)]||_0x55ac81[_0x39e931(0x32c)],_0x54a57e=_0x5ac70e[_0x39e931(0x181)][_0x39e931(0x38f)](/^\/+|\/+$/g,''),_0x3a9eec=_0x54a57e['split']('/');if(_0x3a9eec[0x0]===_0x39e931(0x3d0))return json({'version':VERSION});if(_0x3a9eec[0x0]===_0x39e931(0x337)){if(_0x5d4d56[_0x39e931(0x25a)]==='POST'){const _0x47fdc3=await _0x5d4d56[_0x39e931(0x25e)](),_0x45fb60=new URLSearchParams(_0x47fdc3);if(_0x45fb60['get'](_0x39e931(0x16e))===_0x55ac81[_0x39e931(0x3ab)]){const _0x1aa73b=md5hex(String(_0x55ac81[_0x39e931(0x3ab)]));return new Response(JSON['stringify']({'ok':!![],'next':_0x45fb60[_0x39e931(0x1d4)](_0x39e931(0x401))||'/'}),{'status':0xc8,'headers':{'Content-Type':_0x39e931(0x221),'Set-Cookie':_0x39e931(0x428)+_0x1aa73b+_0x39e931(0x23c)}});}return json({'ok':![],'msg':_0x39e931(0x268)},0x193);}if(_0x55ac81[_0x39e931(0x3ab)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':'text/html;\x20charset=utf-8'}});return Response[_0x39e931(0x400)](new URL('/'+_0x39932b,_0x5d4d56[_0x39e931(0x377)])[_0x39e931(0x174)],0x12e);}const _0x917644=String(_0x55ac81[_0x39e931(0x167)]||'')[_0x39e931(0x1d1)]()[_0x39e931(0x38f)](/^\/+/,'')[_0x39e931(0x38f)](/\/+$/,''),_0x2b12f6=_0x3a9eec[0x0]===_0x39932b||!!_0x917644&&_0x3a9eec[0x0]===_0x917644;if(_0x3a9eec[0x0]===''&&isBrowserUA(_0x190430))return Response[_0x39e931(0x400)](new URL('/'+_0x39932b,_0x5d4d56[_0x39e931(0x377)])[_0x39e931(0x174)],0x12e);if(_0x2b12f6&&_0x3a9eec[_0x39e931(0x26b)]===0x1){if(_0x356796===_0x39e931(0x331))return handleWebSocketProxy(_0x5d4d56,_0x55ac81);if(_0x5d4d56[_0x39e931(0x25a)]==='POST'){if(_0x55ac81[_0x39e931(0x1c2)])try{return await handleXhttpProxy(_0x5d4d56,_0x55ac81);}catch(_0x2445fd){return json({'ok':![],'msg':_0x39e931(0x451)+(_0x2445fd['message']||_0x2445fd)},0x1f4);}}}if(_0x2b12f6&&(_0x3a9eec[0x1]===_0x39e931(0x2a6)||_0x3a9eec['length']===0x1&&!isBrowserUA(_0x190430)&&!_0x190430[_0x39e931(0x3b7)](_0x39e931(0x2b2)))){const _0xfc2882=_0x3a9eec[_0x39e931(0x26b)]>=0x3?_0x3a9eec[0x2]:'';try{let _0x1922cf=null;if(_0x55ac81[_0x39e931(0x24a)]!==![]&&_0xea922f['K']&&typeof _0xea922f['K'][_0x39e931(0x1d4)]===_0x39e931(0x18c))try{const _0x43c433=await _0xea922f['K'][_0x39e931(0x1d4)](_0x39e931(0x2c5));if(_0x43c433){const _0x13f0c0=JSON[_0x39e931(0x3fa)](_0x43c433);if(Array[_0x39e931(0x41d)](_0x13f0c0[_0x39e931(0x3ed)])&&_0x13f0c0['ips'][_0x39e931(0x26b)])_0x1922cf=new Set(_0x13f0c0[_0x39e931(0x3ed)]);}}catch(_0x31ea68){}const _0x6e42f0=_0x1922cf?Object[_0x39e931(0x33e)]({},_0x55ac81,{'_skipIssued':_0x1922cf}):_0x55ac81;if(_0x55ac81[_0x39e931(0x279)])try{const _0x45652e=await getQuota(_0xea922f,_0x55ac81);if(_0x45652e[_0x39e931(0x3c3)]&&_0x45652e['today']&&_0x45652e[_0x39e931(0x1db)][_0x39e931(0x470)]>=Math[_0x39e931(0x3ac)](QUOTA_LIMIT*0.6)){const _0x372150=_0x45652e[_0x39e931(0x1db)][_0x39e931(0x470)]/_0x45652e['limit'],_0x232479=Math[_0x39e931(0x39e)](0.1,(0x1-_0x372150)/0.4);_0x6e42f0['_quotaCap']=Math['max'](0x14,Math['round'](0x3e8*_0x232479));}}catch(_0x3501a3){}const _0x34eed5=await generateSubscription(_0x6e42f0,_0x5d4d56[_0x39e931(0x377)],_0xfc2882,_0x190430,_0x5d4d56['cf']&&_0x5d4d56['cf'][_0x39e931(0x28c)]);if(_0x55ac81['polling']!==![]&&_0xea922f['K']&&typeof _0xea922f['K'][_0x39e931(0x30e)]===_0x39e931(0x18c)&&_0x34eed5[_0x39e931(0x2c5)]&&_0x34eed5['issued'][_0x39e931(0x26b)]){const _0x55858f=_0x1922cf?Array[_0x39e931(0x419)](_0x1922cf):[],_0x2ee889=[...new Set([..._0x34eed5[_0x39e931(0x2c5)],..._0x55858f])]['slice'](0x0,0xc8),_0x1d612d=_0x2ee889['length']!==_0x55858f[_0x39e931(0x26b)]||_0x2ee889[_0x39e931(0x1c5)]((_0x13d77c,_0x5105c7)=>_0x13d77c!==_0x55858f[_0x5105c7]);if(_0x1d612d){const _0x4c107b=JSON[_0x39e931(0x2db)]({'t':Date[_0x39e931(0x1c9)](),'ips':_0x2ee889});if(_0xea922f[_0x39e931(0x33f)]&&typeof _0xea922f[_0x39e931(0x33f)]['waitUntil']===_0x39e931(0x18c))_0xea922f[_0x39e931(0x33f)]['waitUntil'](_0xea922f['K'][_0x39e931(0x30e)](_0x39e931(0x2c5),_0x4c107b)[_0x39e931(0x281)](()=>{}));else await _0xea922f['K'][_0x39e931(0x30e)]('issued',_0x4c107b)[_0x39e931(0x281)](()=>{});}}return new Response(_0x34eed5[_0x39e931(0x27c)],{'status':0xc8,'headers':{'Content-Type':_0x34eed5[_0x39e931(0x21f)]+';\x20charset=utf-8','Cache-Control':_0x39e931(0x300),'Content-Disposition':_0x39e931(0x1b0)}});}catch(_0xdeeedf){return new Response(_0x39e931(0x317)+(_0xdeeedf&&_0xdeeedf[_0x39e931(0x287)]||_0xdeeedf),{'status':0x1f4,'headers':{'Content-Type':_0x39e931(0x455)}});}}if(_0x2b12f6&&_0x3a9eec['length']===0x1&&isBrowserUA(_0x190430)){if(!await requireAuth(_0x5d4d56,_0x55ac81))return Response[_0x39e931(0x400)](new URL(_0x39e931(0x11b)+encodeURIComponent('/'+_0x39932b),_0x5d4d56[_0x39e931(0x377)])['href'],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x39e931(0x3cf)}});}if(_0x2b12f6&&_0x3a9eec[0x1]==='api'){const _0x2f616b=_0x3a9eec[0x2]||'',_0x7d7330=await requireAuth(_0x5d4d56,_0x55ac81);if(!_0x7d7330)return json({'ok':![],'status':0x193,'msg':_0x39e931(0x2e7)},0x193);if(_0x2f616b===_0x39e931(0x11f)){if(_0x5d4d56[_0x39e931(0x25a)]==='GET')return json({'ok':!![],'data':Object[_0x39e931(0x33e)]({},_0x55ac81,{'version':VERSION})});if(_0x5d4d56['method']==='POST')try{const _0x24d16d=await _0x5d4d56['json']();let _0x3399f4=![];if(_0xea922f['K']&&typeof _0xea922f['K'][_0x39e931(0x1d4)]==='function')try{const _0x53b1bf=await _0xea922f['K']['get'](_0x39e931(0x11f),{'cacheTtl':0x1e});if(_0x53b1bf){const _0x4a3711=JSON[_0x39e931(0x3fa)](_0x53b1bf);if(_0x4a3711[_0x39e931(0x279)]!==undefined)_0x3399f4=!![];}}catch(_0x133782){}const _0x338c04=Object[_0x39e931(0x33e)](JSON['parse'](JSON[_0x39e931(0x2db)](_0x55ac81)),_0x24d16d);if(!_0x3399f4&&_0x338c04[_0x39e931(0x279)]===![]){const _0x2afbe6=Boolean(_0x338c04[_0x39e931(0x136)]&&_0x338c04[_0x39e931(0x160)]||_0xea922f[_0x39e931(0x126)]&&_0xea922f[_0x39e931(0x2e0)]);if(_0x2afbe6)_0x338c04[_0x39e931(0x279)]=!![];}if(_0x24d16d[_0x39e931(0x186)]&&typeof _0x24d16d[_0x39e931(0x186)]===_0x39e931(0x373))_0x338c04['optimizer']=Object[_0x39e931(0x33e)](_0x338c04['optimizer'],_0x24d16d[_0x39e931(0x186)]);if(_0x24d16d[_0x39e931(0x2dd)]&&Array[_0x39e931(0x41d)](_0x24d16d[_0x39e931(0x2dd)]))_0x338c04['preferredIPs']=_0x24d16d[_0x39e931(0x2dd)];await saveConfig(_0xea922f,_0x338c04);const _0x101a7e=await loadConfig(_0xea922f,_0x5d4d56[_0x39e931(0x377)]);return json({'ok':!![],'data':Object[_0x39e931(0x33e)]({},_0x101a7e,{'version':VERSION}),'msg':_0x39e931(0x161)});}catch(_0x513fe3){return json({'ok':![],'msg':_0x39e931(0x376)+(_0x513fe3[_0x39e931(0x287)]||_0x513fe3)},0x1f4);}}if(_0x2f616b===_0x39e931(0x3bc)){if(_0x5d4d56[_0x39e931(0x25a)]!==_0x39e931(0x219))return json({'ok':![],'msg':_0x39e931(0x32e)},0x195);try{if(!_0xea922f['K']||typeof _0xea922f['K']['delete']!=='function')return json({'ok':![],'msg':_0x39e931(0x20d)},0x190);return await _0xea922f['K'][_0x39e931(0x328)](_0x39e931(0x11f)),await _0xea922f['K'][_0x39e931(0x328)](_0x39e931(0x2c5)),invalidateConfigCache(),json({'ok':!![],'msg':_0x39e931(0x156)});}catch(_0x50d494){return json({'ok':![],'msg':'重置失败:\x20'+(_0x50d494[_0x39e931(0x287)]||_0x50d494)},0x1f4);}}if(_0x2f616b===_0x39e931(0x2ce))return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()===_0x39e931(0x297)?_0x39e931(0x326):_0x39e931(0x332),'host':_0x5ac70e['hostname'],'path':_0x39932b,'region':_0x5d4d56['cf']&&_0x5d4d56['cf'][_0x39e931(0x28c)]||_0x39e931(0x3d4),'kv':!!(_0xea922f['K']&&typeof _0xea922f['K'][_0x39e931(0x1d4)]===_0x39e931(0x18c)),'workersDev':/\.workers\.dev$/i[_0x39e931(0x421)](_0x5ac70e[_0x39e931(0x188)])}});if(_0x2f616b===_0x39e931(0x424))try{const _0x3f584f=await checkUpdate(_0xea922f),_0x5663fb={'current':_0x3f584f[_0x39e931(0x31a)],'latest':_0x3f584f[_0x39e931(0x323)],'hasUpdate':_0x3f584f[_0x39e931(0x1e3)],'kind':_0x3f584f[_0x39e931(0x3c8)],'error':_0x3f584f[_0x39e931(0x34f)]||''};if(_0x3f584f[_0x39e931(0x1e3)]&&_0x3f584f[_0x39e931(0x352)])_0x5663fb[_0x39e931(0x352)]=_0x3f584f['code'];return json({'ok':!![],'data':_0x5663fb});}catch(_0x442e12){return json({'ok':![],'msg':_0x39e931(0x21a)+(_0x442e12['message']||_0x442e12)},0x1f4);}if(_0x2f616b===_0x39e931(0x1f6))try{const _0x311cd9=await getQuota(_0xea922f,_0x55ac81);return json({'ok':!![],'data':_0x311cd9});}catch(_0x2f0f09){return json({'ok':![],'msg':'查询失败:\x20'+(_0x2f0f09['message']||_0x2f0f09)},0x1f4);}if(_0x2f616b===_0x39e931(0x2a6)){const _0x519f3d=_0x5ac70e[_0x39e931(0x256)]['get'](_0x39e931(0x118))||'';try{const _0x1a0579=await generateSubscription(_0x55ac81,_0x5d4d56[_0x39e931(0x377)],_0x519f3d,_0x190430,_0x5d4d56['cf']&&_0x5d4d56['cf'][_0x39e931(0x28c)]);return json({'ok':!![],'type':_0x1a0579[_0x39e931(0x21f)],'body':_0x1a0579[_0x39e931(0x27c)]});}catch(_0x53b184){return json({'ok':![],'msg':_0x39e931(0x317)+(_0x53b184[_0x39e931(0x287)]||_0x53b184)},0x1f4);}}if(_0x2f616b===_0x39e931(0x222)){if(_0x5d4d56[_0x39e931(0x25a)]!==_0x39e931(0x219))return json({'ok':![],'msg':_0x39e931(0x32e)},0x195);try{const _0x217224=await _0x5d4d56['json']()[_0x39e931(0x281)](()=>({})),_0x30c9b4=await collectCandidates(Object[_0x39e931(0x33e)]({},_0x55ac81[_0x39e931(0x186)],_0x217224));if(!_0x30c9b4[_0x39e931(0x222)][_0x39e931(0x26b)]){const _0x5ed54a=_0x30c9b4[_0x39e931(0x128)]||{},_0x1662ec=[_0x5ed54a[_0x39e931(0x2cd)]&&_0x39e931(0x2d5)+_0x5ed54a[_0x39e931(0x2cd)],_0x5ed54a[_0x39e931(0x407)]&&'自定义源:\x20'+_0x5ed54a[_0x39e931(0x407)]]['filter'](Boolean)['join']('；');return json({'ok':![],'msg':_0x39e931(0x254)+(_0x1662ec?'（'+_0x1662ec+'）':_0x39e931(0x3ee))},0x190);}return json({'ok':!![],'data':_0x30c9b4[_0x39e931(0x222)],'stats':_0x30c9b4[_0x39e931(0x128)]});}catch(_0x24daf0){return json({'ok':![],'msg':_0x39e931(0x2d2)+(_0x24daf0[_0x39e931(0x287)]||_0x24daf0)},0x1f4);}}if(_0x2f616b===_0x39e931(0x29b))try{const _0x238e30=OPTIMIZE_SOURCES[_0x5ac70e[_0x39e931(0x256)][_0x39e931(0x1d4)](_0x39e931(0x283))||'wetest_cname']||OPTIMIZE_SOURCES['wetest_cname'],_0x15bec6=await fetch(_0x238e30[_0x39e931(0x377)],{'headers':{'User-Agent':_0x39e931(0x155)}});if(!_0x15bec6['ok'])return json({'ok':![],'msg':_0x39e931(0x380)+_0x15bec6['status']});const _0x4c8768=extractDomains(await _0x15bec6['text']());return json({'ok':!![],'data':_0x4c8768});}catch(_0x41c0f3){return json({'ok':![],'msg':_0x39e931(0x2d2)+(_0x41c0f3[_0x39e931(0x287)]||_0x41c0f3)},0x1f4);}return json({'ok':![],'msg':_0x39e931(0x450)+_0x2f616b},0x194);}return new Response(_0x39e931(0x41c),{'status':0x194});}async function handleScheduled(_0x5eb33e,_0x2b3438,_0x241e71){const _0x465667=_0x34b348,_0x3fb140=String(_0x2b3438[_0x465667(0x387)]||'')[_0x465667(0x1a7)]();if(_0x3fb140!=='1'&&_0x3fb140!=='true')return;try{const _0x4b7d06=await loadConfig(_0x2b3438),_0x530db6=await collectCandidates(_0x4b7d06['optimizer']),_0x1b489c=_0x530db6[_0x465667(0x222)]||[];if(!_0x1b489c[_0x465667(0x26b)])return;const _0x56b69f=await runLatencyTest(_0x1b489c,_0x4b7d06[_0x465667(0x186)][_0x465667(0x2cc)]||0x5,0x1388),_0xb15a6d=_0x56b69f['filter'](_0x3292a7=>_0x3292a7['ok'])['slice'](0x0,_0x4b7d06[_0x465667(0x186)][_0x465667(0x18a)]||0x14);if(!_0xb15a6d[_0x465667(0x26b)])return;_0x4b7d06['preferredIPs']=_0xb15a6d['map'](_0x2bc2e3=>({'ip':_0x2bc2e3['ip'],'port':_0x2bc2e3[_0x465667(0x24d)]||0x1bb,'name':''})),await saveConfig(_0x2b3438,_0x4b7d06);}catch(_0x27cba4){}}export default{async 'fetch'(_0x14a48b,_0x3bd173,_0xed0d9f){const _0x30970a=_0x34b348;return handleRequest(_0x14a48b,Object[_0x30970a(0x33e)]({},_0x3bd173,{'_ctx':_0xed0d9f}));},async 'scheduled'(_0x8fc11c,_0x261944,_0x485492){return handleScheduled(_0x8fc11c,_0x261944,_0x485492);}};