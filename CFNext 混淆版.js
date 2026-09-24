const a0_0x15be5e=a0_0xe43c;(function(_0x5f393f,_0xf7e868){const _0x21eadd=a0_0xe43c,_0x2c771a=_0x5f393f();while(!![]){try{const _0x4562ae=-parseInt(_0x21eadd(0x22a))/0x1*(-parseInt(_0x21eadd(0x215))/0x2)+-parseInt(_0x21eadd(0x44c))/0x3*(-parseInt(_0x21eadd(0x1c9))/0x4)+parseInt(_0x21eadd(0x2b7))/0x5*(parseInt(_0x21eadd(0x4a5))/0x6)+parseInt(_0x21eadd(0x3c8))/0x7*(parseInt(_0x21eadd(0x26d))/0x8)+-parseInt(_0x21eadd(0x2c8))/0x9*(parseInt(_0x21eadd(0x1c8))/0xa)+parseInt(_0x21eadd(0x482))/0xb+-parseInt(_0x21eadd(0x450))/0xc;if(_0x4562ae===_0xf7e868)break;else _0x2c771a['push'](_0x2c771a['shift']());}catch(_0x4e9d85){_0x2c771a['push'](_0x2c771a['shift']());}}}(a0_0x1274,0x23393));import{connect}from'cloudflare:sockets';const VERSION=a0_0x15be5e(0x3a0),DEPLOY_EDITION=a0_0x15be5e(0x1e6);function deployKind(){const _0x1231e5=a0_0x15be5e;try{return DEPLOY_EDITION===_0x1231e5(0x1e6)?_0x1231e5(0x3f5):_0x1231e5(0x259);}catch(_0x217d71){return'plain';}}const UPDATE_REPO=a0_0x15be5e(0x2ef);let UPDATE_CACHE=null;function parseVer(_0x1fe4c3){const _0x2a2d8d=String(_0x1fe4c3||'')['match'](/(\d+)\.(\d+)\.(\d+)/);return _0x2a2d8d?[parseInt(_0x2a2d8d[0x1],0xa),parseInt(_0x2a2d8d[0x2],0xa),parseInt(_0x2a2d8d[0x3],0xa)]:null;}function cmpVer(_0x1b4154,_0x25baa7){const _0x17a425=parseVer(_0x1b4154),_0x3ccbda=parseVer(_0x25baa7);if(!_0x17a425||!_0x3ccbda)return 0x0;for(let _0x243d7a=0x0;_0x243d7a<0x3;_0x243d7a++){if(_0x17a425[_0x243d7a]!==_0x3ccbda[_0x243d7a])return _0x17a425[_0x243d7a]<_0x3ccbda[_0x243d7a]?-0x1:0x1;}return 0x0;}function extractVersion(_0x4ed708){const _0x282249=a0_0x15be5e,_0x2cd32e=_0x4ed708[_0x282249(0x2e5)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x2cd32e?_0x2cd32e[0x1]:null;}async function checkUpdate(_0x3df395){const _0x2ed114=a0_0x15be5e,_0x499f7a=Date[_0x2ed114(0x250)]();if(UPDATE_CACHE&&_0x499f7a-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x41c226=deployKind()===_0x2ed114(0x3f5)?'混淆':'明文';let _0x282e13=null,_0x433d42='',_0xce3c99='';const _0x4dcf89=_0x2ed114(0x2d6)+UPDATE_REPO+'/main/'+encodeURIComponent(_0x2ed114(0x265));try{const _0x26a77f=await fetch(_0x4dcf89,{'headers':{'User-Agent':_0x2ed114(0x37e)}});if(_0x26a77f['ok']){const _0x5b4f3e=await _0x26a77f[_0x2ed114(0x42e)](),_0x5ef7b0=extractVersion(_0x5b4f3e);if(_0x5ef7b0)_0x282e13=_0x5ef7b0;}}catch(_0x301383){_0xce3c99=_0x301383&&_0x301383[_0x2ed114(0x221)]||String(_0x301383);}if(_0x282e13){const _0x1b59b1=_0x41c226==='混淆'?_0x2ed114(0x47c):_0x2ed114(0x265),_0x4d1cbb='https://raw.githubusercontent.com/'+UPDATE_REPO+'/main/'+encodeURIComponent(_0x1b59b1);try{const _0x31200c=await fetch(_0x4d1cbb,{'headers':{'User-Agent':_0x2ed114(0x37e)}});if(_0x31200c['ok'])_0x433d42=await _0x31200c[_0x2ed114(0x42e)]();}catch(_0x3027de){}return UPDATE_CACHE={'t':_0x499f7a,'r':{'current':VERSION,'kind':_0x41c226,'latest':_0x282e13,'hasUpdate':cmpVer(_0x282e13,VERSION)>0x0,'code':_0x433d42,'checkedAt':_0x499f7a}},UPDATE_CACHE['r'];}const _0x1c2791=_0x2ed114(0x2d6)+UPDATE_REPO+'/main/'+encodeURIComponent(_0x2ed114(0x47c));try{const _0x50f675=await fetch(_0x1c2791,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x50f675['ok']){const _0x303c88=await _0x50f675['text'](),_0x4d9044=extractVersion(_0x303c88);if(_0x4d9044)_0x282e13=_0x4d9044;}}catch(_0x4934a9){_0xce3c99=_0x4934a9&&_0x4934a9[_0x2ed114(0x221)]||String(_0x4934a9);}if(_0x282e13)return UPDATE_CACHE={'t':_0x499f7a,'r':{'current':VERSION,'kind':_0x41c226,'latest':_0x282e13,'hasUpdate':cmpVer(_0x282e13,VERSION)>0x0,'code':'','checkedAt':_0x499f7a}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x41c226,'latest':null,'hasUpdate':![],'code':'','error':_0xce3c99||_0x2ed114(0x255)};}const CLASH_TEMPLATE=a0_0x15be5e(0x418),CLOUDFLARE_CIDRS=[a0_0x15be5e(0x2e9),a0_0x15be5e(0x232),a0_0x15be5e(0x237),'103.31.4.0/22',a0_0x15be5e(0x24b),a0_0x15be5e(0x24c),a0_0x15be5e(0x38a),a0_0x15be5e(0x32f),'197.234.240.0/22',a0_0x15be5e(0x45f),'162.158.0.0/15','104.16.0.0/13',a0_0x15be5e(0x3c4),a0_0x15be5e(0x344),a0_0x15be5e(0x393)],REACHABLE_CIDRS=['104.16.0.0/13',a0_0x15be5e(0x3c4),a0_0x15be5e(0x344),a0_0x15be5e(0x3a7),'188.114.96.0/20'],CLOUDFLARE_CIDRS_V6=[a0_0x15be5e(0x2c1),a0_0x15be5e(0x386),a0_0x15be5e(0x257),a0_0x15be5e(0x2f9),a0_0x15be5e(0x1d2),a0_0x15be5e(0x31f),a0_0x15be5e(0x30e)],REACHABLE_CIDRS_V6=['2606:4700::/32',a0_0x15be5e(0x2c1),a0_0x15be5e(0x257),a0_0x15be5e(0x31f),a0_0x15be5e(0x30e)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6[a0_0x15be5e(0x39d)](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0x329f5c=a0_0x15be5e,_0x3de22f=Date[_0x329f5c(0x250)]();if(OFFICIAL_V6_CIDRS_T&&_0x3de22f-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x356c4c=await fetch(_0x329f5c(0x38e),{'signal':AbortSignal[_0x329f5c(0x1e9)](0x2710)});if(!_0x356c4c['ok'])return;const _0x29c462=await _0x356c4c[_0x329f5c(0x42e)](),_0x18a05e=String(_0x29c462)[_0x329f5c(0x1d9)]('\x0a')[_0x329f5c(0x2c2)](_0x16f511=>_0x16f511[_0x329f5c(0x2ae)]())[_0x329f5c(0x36f)](_0x206550=>/^[0-9a-fA-F:.]+\/\d+$/[_0x329f5c(0x3fe)](_0x206550)&&_0x206550[_0x329f5c(0x32a)](':')>=0x0);_0x18a05e['length']>=0x3&&(OFFICIAL_V6_CIDRS=_0x18a05e,OFFICIAL_V6_CIDRS_T=_0x3de22f);}catch(_0x320eaa){}}function ipInCidrV6(_0x29a88e,_0x36ecaa){const _0x8d71a6=a0_0x15be5e,[_0x59d675,_0x414f10]=_0x36ecaa[_0x8d71a6(0x1d9)]('/'),_0x2caf27=parseInt(_0x414f10,0xa),_0x4b1b72=_0xa6d6b6=>{const _0xe30173=_0x8d71a6,_0x43f45e=_0xa6d6b6[_0xe30173(0x32a)]('::');let _0x4ad92f;if(_0x43f45e>=0x0){const _0x41524c=_0xa6d6b6[_0xe30173(0x39d)](0x0,_0x43f45e)[_0xe30173(0x1d9)](':')[_0xe30173(0x36f)](Boolean),_0x293e7a=_0xa6d6b6[_0xe30173(0x39d)](_0x43f45e+0x2)['split'](':')[_0xe30173(0x36f)](Boolean),_0x46955b=0x8-_0x41524c['length']-_0x293e7a[_0xe30173(0x2ca)];_0x4ad92f=[..._0x41524c,...Array(_0x46955b)[_0xe30173(0x339)]('0'),..._0x293e7a];}else _0x4ad92f=_0xa6d6b6[_0xe30173(0x1d9)](':');return _0x4ad92f[_0xe30173(0x2c2)](_0x39bed4=>_0x39bed4['padStart'](0x4,'0'));},_0x53ec6d=_0x5a1acd=>_0x5a1acd['map'](_0x3999d0=>parseInt(_0x3999d0,0x10)['toString'](0x2)[_0x8d71a6(0x376)](0x10,'0'))[_0x8d71a6(0x3d5)]('');return _0x53ec6d(_0x4b1b72(_0x29a88e))[_0x8d71a6(0x39d)](0x0,_0x2caf27)===_0x53ec6d(_0x4b1b72(_0x59d675))[_0x8d71a6(0x39d)](0x0,_0x2caf27);}function isCloudflareIP(_0x5e24b2){const _0x1c28b2=a0_0x15be5e;_0x5e24b2=String(_0x5e24b2||'');if(!isValidIp(_0x5e24b2))return![];if(_0x5e24b2[_0x1c28b2(0x32a)](':')>=0x0)return CLOUDFLARE_CIDRS_V6['some'](_0x4a5c1b=>ipInCidrV6(_0x5e24b2,_0x4a5c1b));const _0x4f8072=_0x5e24b2[_0x1c28b2(0x1d9)]('.')[_0x1c28b2(0x2c2)](Number),_0x5eb1b8=(_0x4f8072[0x0]<<0x18|_0x4f8072[0x1]<<0x10|_0x4f8072[0x2]<<0x8|_0x4f8072[0x3])>>>0x0;return CLOUDFLARE_RANGES[_0x1c28b2(0x350)](([_0x50eafe,_0x2cf39d])=>_0x5eb1b8>=_0x50eafe&&_0x5eb1b8<=_0x2cf39d);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':'新加坡','US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':a0_0x15be5e(0x253),'AU':a0_0x15be5e(0x187),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':'意大利','ES':a0_0x15be5e(0x164),'PT':'葡萄牙','IE':a0_0x15be5e(0x328),'BE':'比利时','AT':a0_0x15be5e(0x2ea),'PL':'波兰','CZ':'捷克','RO':'罗马尼亚','HU':a0_0x15be5e(0x3d7),'GR':'希腊','RU':a0_0x15be5e(0x2c9),'TR':a0_0x15be5e(0x4a9),'UA':a0_0x15be5e(0x316),'IN':'印度','TH':'泰国','MY':'马来西亚','VN':'越南','PH':'菲律宾','ID':'印尼','BR':'巴西','MX':a0_0x15be5e(0x359),'AR':'阿根廷','CL':'智利','ZA':'南非','EG':'埃及','AE':a0_0x15be5e(0x457),'IL':a0_0x15be5e(0x21f),'NZ':a0_0x15be5e(0x371),'KZ':a0_0x15be5e(0x2cb),'SA':'沙特'},DEFAULT_REGION_POOLS=[a0_0x15be5e(0x284),a0_0x15be5e(0x1f2),a0_0x15be5e(0x2c3),'https://bestcf.pages.dev/random-region/SG/100.txt',a0_0x15be5e(0x25c),a0_0x15be5e(0x3dc)][a0_0x15be5e(0x3d5)]('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x2870fb){return TRUSTED_REGION_POOL_RE['test'](String(_0x2870fb||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':a0_0x15be5e(0x416),'echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'probeAlive':![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':a0_0x15be5e(0x414),'preferredIPs':[],'optimizer':{'source':a0_0x15be5e(0x1cd),'sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':a0_0x15be5e(0x3f9),'ipType':[a0_0x15be5e(0x263),a0_0x15be5e(0x398)],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[a0_0x15be5e(0x290),a0_0x15be5e(0x30d),'speed.cloudflare.com'],BUILTIN_STABLE_IPS=[a0_0x15be5e(0x2d2),a0_0x15be5e(0x3c3),a0_0x15be5e(0x413),a0_0x15be5e(0x31e),a0_0x15be5e(0x3e8),'104.16.98.7',a0_0x15be5e(0x343),'104.17.44.9','104.18.34.34','104.18.7.34',a0_0x15be5e(0x2fd),'104.19.1.1','104.20.15.15',a0_0x15be5e(0x3eb),a0_0x15be5e(0x35e),a0_0x15be5e(0x2b0),'104.24.12.10',a0_0x15be5e(0x35f),a0_0x15be5e(0x281),a0_0x15be5e(0x3a4)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':a0_0x15be5e(0x284),'count':0xc},{'label':'日本','region':'JP','url':a0_0x15be5e(0x2c3),'count':0xc},{'label':'美国','region':'US','url':'https://bestcf.pages.dev/random-region/US/100.txt','count':0xc},{'label':a0_0x15be5e(0x20f),'region':'SG','url':a0_0x15be5e(0x3ce),'count':0xc},{'label':'台湾','region':'TW','url':a0_0x15be5e(0x1f2),'count':0xc}],BUILTIN_PREFERRED_IPS=[a0_0x15be5e(0x1d4),'104.16.123.96#优选IP-002',a0_0x15be5e(0x323),'104.16.125.96#优选IP-004',a0_0x15be5e(0x30f),a0_0x15be5e(0x311),'104.16.132.229#优选IP-007',a0_0x15be5e(0x1b2),a0_0x15be5e(0x43c),a0_0x15be5e(0x2a6),a0_0x15be5e(0x160),'104.17.24.252#优选IP-012',a0_0x15be5e(0x304),a0_0x15be5e(0x29e),a0_0x15be5e(0x302),a0_0x15be5e(0x307),a0_0x15be5e(0x437),'104.17.234.5#优选IP-018',a0_0x15be5e(0x45c),'172.67.64.211#优选IP-020','172.67.64.12#优选IP-021',a0_0x15be5e(0x2ed),a0_0x15be5e(0x391),a0_0x15be5e(0x427),a0_0x15be5e(0x279),a0_0x15be5e(0x1be),a0_0x15be5e(0x3c2),a0_0x15be5e(0x43d),a0_0x15be5e(0x190),a0_0x15be5e(0x223),a0_0x15be5e(0x236),a0_0x15be5e(0x3a2),a0_0x15be5e(0x2d5),a0_0x15be5e(0x15f),a0_0x15be5e(0x23d),a0_0x15be5e(0x25a),a0_0x15be5e(0x38b),a0_0x15be5e(0x22f),a0_0x15be5e(0x47a),a0_0x15be5e(0x1fd),'104.18.185.40#优选IP-041',a0_0x15be5e(0x26a),'104.25.246.123#优选IP-043','104.24.54.254#优选IP-044',a0_0x15be5e(0x1b8),a0_0x15be5e(0x1da),a0_0x15be5e(0x1de),a0_0x15be5e(0x225),'162.159.4.175#优选IP-049',a0_0x15be5e(0x34d),a0_0x15be5e(0x203),'104.18.176.111#优选IP-052',a0_0x15be5e(0x365),'188.114.96.116#优选IP-054','104.25.214.211#优选IP-055',a0_0x15be5e(0x273),a0_0x15be5e(0x1a9),a0_0x15be5e(0x42b),a0_0x15be5e(0x1c4),a0_0x15be5e(0x353),a0_0x15be5e(0x479),'104.16.113.211#优选IP-062',a0_0x15be5e(0x3e1),a0_0x15be5e(0x1f6),a0_0x15be5e(0x239),a0_0x15be5e(0x485),a0_0x15be5e(0x1ff),a0_0x15be5e(0x433),a0_0x15be5e(0x4ab),a0_0x15be5e(0x3b2),'162.159.228.244#优选IP-071',a0_0x15be5e(0x36a),a0_0x15be5e(0x162),a0_0x15be5e(0x440),a0_0x15be5e(0x3e0),'104.27.66.179#优选IP-076',a0_0x15be5e(0x3cd),a0_0x15be5e(0x2ff),a0_0x15be5e(0x464),a0_0x15be5e(0x1a6),a0_0x15be5e(0x181),a0_0x15be5e(0x468),a0_0x15be5e(0x49a),a0_0x15be5e(0x39e),a0_0x15be5e(0x1bc),a0_0x15be5e(0x3d2),a0_0x15be5e(0x3c0),a0_0x15be5e(0x286),a0_0x15be5e(0x478),a0_0x15be5e(0x326),'104.17.13.179#优选IP-091',a0_0x15be5e(0x342),'104.16.0.133#优选IP-093',a0_0x15be5e(0x394),'104.18.28.140#优选IP-095',a0_0x15be5e(0x47b),'104.24.58.243#优选IP-097',a0_0x15be5e(0x1bd),a0_0x15be5e(0x212),a0_0x15be5e(0x193),a0_0x15be5e(0x3b3),'104.24.230.144#优选IP-102',a0_0x15be5e(0x288),a0_0x15be5e(0x3ca),a0_0x15be5e(0x322),'104.16.108.18#优选IP-106',a0_0x15be5e(0x429),a0_0x15be5e(0x194),a0_0x15be5e(0x469),'104.19.106.1#优选IP-110',a0_0x15be5e(0x1c7),a0_0x15be5e(0x438),a0_0x15be5e(0x3f7),'172.67.255.83#优选IP-114',a0_0x15be5e(0x389),a0_0x15be5e(0x1c5),a0_0x15be5e(0x2c4),'172.67.103.87#优选IP-118',a0_0x15be5e(0x192),a0_0x15be5e(0x2e3),a0_0x15be5e(0x41f),a0_0x15be5e(0x411),a0_0x15be5e(0x397),a0_0x15be5e(0x347),a0_0x15be5e(0x2f6),a0_0x15be5e(0x2ee),'172.66.199.166#优选IP-127',a0_0x15be5e(0x1e3),a0_0x15be5e(0x388),a0_0x15be5e(0x178),a0_0x15be5e(0x1fc),a0_0x15be5e(0x48e),a0_0x15be5e(0x1c2),a0_0x15be5e(0x28a),a0_0x15be5e(0x335),a0_0x15be5e(0x2eb),'172.67.229.44#优选IP-137',a0_0x15be5e(0x1d5),a0_0x15be5e(0x23c),a0_0x15be5e(0x24d),a0_0x15be5e(0x44b),a0_0x15be5e(0x231),a0_0x15be5e(0x425),a0_0x15be5e(0x20c),a0_0x15be5e(0x1b9),a0_0x15be5e(0x492),a0_0x15be5e(0x16d),a0_0x15be5e(0x462),a0_0x15be5e(0x37b),a0_0x15be5e(0x275),'104.25.36.200#优选IP-151',a0_0x15be5e(0x1b7),a0_0x15be5e(0x2d1),a0_0x15be5e(0x177),a0_0x15be5e(0x358),a0_0x15be5e(0x488),a0_0x15be5e(0x3e7),'162.159.19.201#优选IP-158',a0_0x15be5e(0x269),a0_0x15be5e(0x2fb),a0_0x15be5e(0x473),a0_0x15be5e(0x3c6),'104.16.11.246#优选IP-163','188.114.97.61#优选IP-164','104.17.240.245#优选IP-165',a0_0x15be5e(0x285),a0_0x15be5e(0x33e),a0_0x15be5e(0x4a6),a0_0x15be5e(0x2d0),a0_0x15be5e(0x336),a0_0x15be5e(0x3f4),'104.18.18.214#优选IP-172','104.17.46.187#优选IP-173',a0_0x15be5e(0x46d),a0_0x15be5e(0x15d),a0_0x15be5e(0x368),a0_0x15be5e(0x40d),'104.27.195.79#优选IP-178',a0_0x15be5e(0x4a7),a0_0x15be5e(0x2aa),a0_0x15be5e(0x2db),a0_0x15be5e(0x474),a0_0x15be5e(0x247),a0_0x15be5e(0x266),a0_0x15be5e(0x48c),a0_0x15be5e(0x46f),'104.25.73.92#优选IP-187',a0_0x15be5e(0x47f),'172.65.184.114#优选IP-189',a0_0x15be5e(0x1d0),'172.65.21.190#优选IP-191',a0_0x15be5e(0x33f),a0_0x15be5e(0x2b3),a0_0x15be5e(0x3b8),a0_0x15be5e(0x1f9),a0_0x15be5e(0x356),a0_0x15be5e(0x320),a0_0x15be5e(0x287),a0_0x15be5e(0x195),a0_0x15be5e(0x27a),'104.17.87.46#优选IP-201',a0_0x15be5e(0x48f),a0_0x15be5e(0x2d9),'162.159.241.11#优选IP-204','188.114.97.0#优选IP-205',a0_0x15be5e(0x2b2),'104.19.68.127#优选IP-207','162.159.10.45#优选IP-208',a0_0x15be5e(0x2d8),a0_0x15be5e(0x375),'188.114.96.164#优选IP-211','104.24.41.240#优选IP-212','104.17.97.72#优选IP-213',a0_0x15be5e(0x296),a0_0x15be5e(0x42f),a0_0x15be5e(0x49e),'104.17.169.109#优选IP-217',a0_0x15be5e(0x1f7),a0_0x15be5e(0x2d4),a0_0x15be5e(0x25f),a0_0x15be5e(0x2de),'162.159.2.86#优选IP-222','188.114.96.151#优选IP-223','172.65.139.108#优选IP-224',a0_0x15be5e(0x40a),'104.21.7.133#优选IP-226',a0_0x15be5e(0x303),a0_0x15be5e(0x461),a0_0x15be5e(0x29d),a0_0x15be5e(0x208),a0_0x15be5e(0x325),'162.159.192.111#优选IP-232',a0_0x15be5e(0x1a8),a0_0x15be5e(0x369),a0_0x15be5e(0x1ad),a0_0x15be5e(0x20d),a0_0x15be5e(0x2f8),a0_0x15be5e(0x182),'104.25.223.90#优选IP-239','104.25.123.130#优选IP-240',a0_0x15be5e(0x463),a0_0x15be5e(0x490),a0_0x15be5e(0x319),a0_0x15be5e(0x26b),a0_0x15be5e(0x385),'104.17.76.49#优选IP-246','104.21.215.255#优选IP-247','172.67.131.200#优选IP-248',a0_0x15be5e(0x175),a0_0x15be5e(0x270),a0_0x15be5e(0x41b),a0_0x15be5e(0x1df),'162.159.90.82#优选IP-253',a0_0x15be5e(0x297),'162.159.236.19#优选IP-255',a0_0x15be5e(0x248),'104.17.151.244#优选IP-257','104.17.121.245#优选IP-258',a0_0x15be5e(0x256),a0_0x15be5e(0x382),a0_0x15be5e(0x163),a0_0x15be5e(0x2ac),'162.159.199.220#优选IP-263','104.20.17.160#优选IP-264',a0_0x15be5e(0x280),a0_0x15be5e(0x42c),a0_0x15be5e(0x419),a0_0x15be5e(0x3d6),a0_0x15be5e(0x3b0),a0_0x15be5e(0x227),a0_0x15be5e(0x1c1),a0_0x15be5e(0x44e),a0_0x15be5e(0x345),a0_0x15be5e(0x357),a0_0x15be5e(0x1b6),a0_0x15be5e(0x29a),'104.25.238.28#优选IP-277',a0_0x15be5e(0x2bf),a0_0x15be5e(0x43b),a0_0x15be5e(0x1f3),a0_0x15be5e(0x329),a0_0x15be5e(0x2ce),a0_0x15be5e(0x3df),a0_0x15be5e(0x169),'104.24.84.86#优选IP-285',a0_0x15be5e(0x1ea),'104.16.45.249#优选IP-287',a0_0x15be5e(0x1d6),a0_0x15be5e(0x3a5),'172.65.45.248#优选IP-290','104.25.169.144#优选IP-291','104.27.27.106#优选IP-292',a0_0x15be5e(0x392),'172.67.71.106#优选IP-294',a0_0x15be5e(0x25e),a0_0x15be5e(0x459),a0_0x15be5e(0x1cf),'104.27.21.175#优选IP-298',a0_0x15be5e(0x41d),a0_0x15be5e(0x27c)],DEFAULT_PREFERRED_DOMAINS=['cloudflare.182682.xyz',a0_0x15be5e(0x390),a0_0x15be5e(0x3af),a0_0x15be5e(0x352),a0_0x15be5e(0x445),a0_0x15be5e(0x3d8),a0_0x15be5e(0x34c),a0_0x15be5e(0x201),a0_0x15be5e(0x1d8),a0_0x15be5e(0x39a),'cf.zerone-cdn.pp.ua',a0_0x15be5e(0x2f0),a0_0x15be5e(0x1e2),a0_0x15be5e(0x36c),a0_0x15be5e(0x1a5),a0_0x15be5e(0x395),a0_0x15be5e(0x446),'8.889288.xyz','cdn.tzpro.xyz',a0_0x15be5e(0x3ae),'xn--b6gac.eu.org','bestcf.030101.xyz','cdns.doon.eu.org','fn.130519.xyz','saas.sin.fan'][a0_0x15be5e(0x3d5)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':a0_0x15be5e(0x1fe),'url':a0_0x15be5e(0x1f5)},'wetest_v6':{'label':a0_0x15be5e(0x228),'url':a0_0x15be5e(0x34a)},'bestcf':{'label':a0_0x15be5e(0x3b9),'url':a0_0x15be5e(0x493)},'hostmonit':{'label':a0_0x15be5e(0x1ee),'url':a0_0x15be5e(0x32c)},'wetest_cname':{'label':a0_0x15be5e(0x2e2),'url':'https://www.wetest.vip/page/cloudflare/cname.html'}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x232537){const _0x7f8d22=a0_0x15be5e;let _0x3b8f74='';const _0x223d27=0x8000;for(let _0x3a67be=0x0;_0x3a67be<_0x232537[_0x7f8d22(0x2ca)];_0x3a67be+=_0x223d27){_0x3b8f74+=String['fromCharCode'](..._0x232537['subarray'](_0x3a67be,_0x3a67be+_0x223d27));}return btoa(_0x3b8f74);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x518b2b,_0x18b2a1){return(_0x518b2b<<_0x18b2a1|_0x518b2b>>>0x20-_0x18b2a1)>>>0x0;}function md5hex(_0x1fd385){const _0x368933=a0_0x15be5e,_0x31b9f5=TE['encode'](String(_0x1fd385)),_0x5cee92=_0x31b9f5[_0x368933(0x2ca)]*0x8,_0x457c01=(_0x31b9f5[_0x368933(0x2ca)]+0x8>>0x6)+0x1<<0x6,_0x2834b6=new Uint8Array(_0x457c01);_0x2834b6['set'](_0x31b9f5),_0x2834b6[_0x31b9f5['length']]=0x80;const _0x16a49a=new DataView(_0x2834b6[_0x368933(0x3ee)]);_0x16a49a[_0x368933(0x367)](_0x457c01-0x8,_0x5cee92>>>0x0,!![]),_0x16a49a[_0x368933(0x367)](_0x457c01-0x4,Math[_0x368933(0x4aa)](_0x5cee92/0x100000000),!![]);let _0x43ac5a=0x67452301,_0x3879e0=0xefcdab89,_0x5dcc97=0x98badcfe,_0x3d839a=0x10325476;for(let _0x30fc8b=0x0;_0x30fc8b<_0x457c01;_0x30fc8b+=0x40){const _0x3a9d23=new Uint32Array(0x10);for(let _0x2935c8=0x0;_0x2935c8<0x10;_0x2935c8++)_0x3a9d23[_0x2935c8]=_0x16a49a[_0x368933(0x19e)](_0x30fc8b+_0x2935c8*0x4,!![]);let _0x37334d=_0x43ac5a,_0x367cb7=_0x3879e0,_0x35078a=_0x5dcc97,_0x3382b5=_0x3d839a;for(let _0x305cf2=0x0;_0x305cf2<0x40;_0x305cf2++){let _0x576324,_0xec3e2e;if(_0x305cf2<0x10)_0x576324=_0x367cb7&_0x35078a|~_0x367cb7&_0x3382b5,_0xec3e2e=_0x305cf2;else{if(_0x305cf2<0x20)_0x576324=_0x3382b5&_0x367cb7|~_0x3382b5&_0x35078a,_0xec3e2e=(0x5*_0x305cf2+0x1)%0x10;else _0x305cf2<0x30?(_0x576324=_0x367cb7^_0x35078a^_0x3382b5,_0xec3e2e=(0x3*_0x305cf2+0x5)%0x10):(_0x576324=_0x35078a^(_0x367cb7|~_0x3382b5),_0xec3e2e=0x7*_0x305cf2%0x10);}const _0x396cb3=_0x37334d+_0x576324+MD5_K[_0x305cf2]+_0x3a9d23[_0xec3e2e]>>>0x0,_0x3552dc=_0x367cb7+rotl32(_0x396cb3,MD5_S[_0x305cf2])>>>0x0;_0x37334d=_0x3382b5,_0x3382b5=_0x35078a,_0x35078a=_0x367cb7,_0x367cb7=_0x3552dc;}_0x43ac5a=_0x43ac5a+_0x37334d>>>0x0,_0x3879e0=_0x3879e0+_0x367cb7>>>0x0,_0x5dcc97=_0x5dcc97+_0x35078a>>>0x0,_0x3d839a=_0x3d839a+_0x3382b5>>>0x0;}let _0x103364='';for(const _0x3f3f25 of[_0x43ac5a,_0x3879e0,_0x5dcc97,_0x3d839a]){_0x103364+=(_0x3f3f25&0xff)['toString'](0x10)[_0x368933(0x376)](0x2,'0'),_0x103364+=(_0x3f3f25>>>0x8&0xff)[_0x368933(0x214)](0x10)[_0x368933(0x376)](0x2,'0'),_0x103364+=(_0x3f3f25>>>0x10&0xff)[_0x368933(0x214)](0x10)['padStart'](0x2,'0'),_0x103364+=(_0x3f3f25>>>0x18&0xff)['toString'](0x10)['padStart'](0x2,'0');}return _0x103364;}function uuidv4(){const _0x18a352=a0_0x15be5e;if(crypto[_0x18a352(0x246)])return crypto['randomUUID']();const _0x29f644=crypto['getRandomValues'](new Uint8Array(0x10));return _0x29f644[0x6]=_0x29f644[0x6]&0xf|0x40,_0x29f644[0x8]=_0x29f644[0x8]&0x3f|0x80,[..._0x29f644][_0x18a352(0x2c2)]((_0x276dc6,_0x4fc8fd)=>(_0x4fc8fd===0x4||_0x4fc8fd===0x6||_0x4fc8fd===0x8||_0x4fc8fd===0xa?'-':'')+_0x276dc6[_0x18a352(0x214)](0x10)[_0x18a352(0x376)](0x2,'0'))[_0x18a352(0x3d5)]('');}function isUUID(_0xfd3f30){const _0x3ef769=a0_0x15be5e;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x3ef769(0x3fe)](_0xfd3f30||'');}function parseHostPort(_0x404e3c,_0x46dc61=0x1bb){const _0x5c5c28=a0_0x15be5e;_0x404e3c=String(_0x404e3c||'')[_0x5c5c28(0x2ae)]();if(!_0x404e3c)return{'host':'','port':_0x46dc61};if(_0x404e3c[_0x5c5c28(0x3c7)]('[')){const _0xae7d96=_0x404e3c[_0x5c5c28(0x2e5)](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0xae7d96?_0xae7d96[0x1]:_0x404e3c['replace'](/^\[|\]$/g,''),'port':_0xae7d96&&_0xae7d96[0x2]?parseInt(_0xae7d96[0x2]):_0x46dc61};}const _0x2534e6=_0x404e3c['lastIndexOf'](':');if(_0x2534e6>0x0&&/^\d+$/[_0x5c5c28(0x3fe)](_0x404e3c[_0x5c5c28(0x39d)](_0x2534e6+0x1)))return{'host':_0x404e3c[_0x5c5c28(0x39d)](0x0,_0x2534e6),'port':parseInt(_0x404e3c[_0x5c5c28(0x39d)](_0x2534e6+0x1))};return{'host':_0x404e3c,'port':_0x46dc61};}function isValidIp(_0x5a16fc){const _0x5ae5f1=a0_0x15be5e;_0x5a16fc=String(_0x5a16fc||'')[_0x5ae5f1(0x2ae)]();if(!_0x5a16fc)return![];const _0x53f51c=_0x5a16fc[_0x5ae5f1(0x2e5)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x53f51c)return _0x53f51c[_0x5ae5f1(0x39d)](0x1)[_0x5ae5f1(0x439)](_0x4a79ae=>Number(_0x4a79ae)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x5ae5f1(0x3fe)](_0x5a16fc))return![];if((_0x5a16fc[_0x5ae5f1(0x2e5)](/::/g)||[])[_0x5ae5f1(0x2ca)]>0x1)return![];const _0x32c206=_0x5a16fc['includes']('::'),_0x4a327f=_0x5a16fc[_0x5ae5f1(0x33a)](/::/g,':')['split'](':')[_0x5ae5f1(0x36f)](Boolean);if(!_0x32c206&&_0x4a327f[_0x5ae5f1(0x2ca)]!==0x8)return![];if(_0x32c206&&(_0x4a327f[_0x5ae5f1(0x2ca)]<0x1||_0x4a327f['length']>0x7))return![];return _0x4a327f[_0x5ae5f1(0x439)](_0x15c723=>/^[0-9a-fA-F]{1,4}$/[_0x5ae5f1(0x3fe)](_0x15c723));}function formatIPv6(_0x514ceb){const _0x270fd2=a0_0x15be5e,_0xa195ce=[];for(let _0x4881f6=0x0;_0x4881f6<0x10;_0x4881f6+=0x2)_0xa195ce[_0x270fd2(0x39b)]((_0x514ceb[_0x4881f6]<<0x8|_0x514ceb[_0x4881f6+0x1])[_0x270fd2(0x214)](0x10));let _0x1ce75=-0x1,_0x442d91=0x0,_0x272867=-0x1,_0x38bf15=0x0;for(let _0x425535=0x0;_0x425535<0x8;_0x425535++){if(_0xa195ce[_0x425535]==='0'){if(_0x272867<0x0)_0x272867=_0x425535,_0x38bf15=0x1;else _0x38bf15++;_0x38bf15>_0x442d91&&(_0x442d91=_0x38bf15,_0x1ce75=_0x272867);}else _0x272867=-0x1,_0x38bf15=0x0;}if(_0x442d91>=0x2){const _0xb3bf55=_0xa195ce[_0x270fd2(0x39d)](0x0,_0x1ce75)[_0x270fd2(0x3d5)](':'),_0xc6a5f3=_0xa195ce[_0x270fd2(0x39d)](_0x1ce75+_0x442d91)['join'](':');return(_0xb3bf55?_0xb3bf55+'::':'::')+_0xc6a5f3;}return _0xa195ce['join'](':');}function cidrToRange(_0x3282bd){const _0x409bc5=a0_0x15be5e,[_0x1da7c9,_0x37ddc1]=_0x3282bd[_0x409bc5(0x1d9)]('/'),_0x213809=_0x1da7c9[_0x409bc5(0x1d9)]('.')[_0x409bc5(0x2c2)](Number),_0x5a363a=(_0x213809[0x0]<<0x18|_0x213809[0x1]<<0x10|_0x213809[0x2]<<0x8|_0x213809[0x3])>>>0x0,_0x548e8c=_0x37ddc1>=0x20?0x0:0xffffffff<<0x20-_0x37ddc1>>>0x0,_0x38820e=(_0x5a363a&_0x548e8c)>>>0x0,_0x52b9ec=(_0x5a363a|~_0x548e8c>>>0x0)>>>0x0;return[_0x38820e,_0x52b9ec];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[a0_0x15be5e(0x2c2)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x546cf2){const _0xff364b=a0_0x15be5e;let _0x277566=_rangeCache[_0xff364b(0x2bc)](_0x546cf2);return!_0x277566&&(_0x277566=cidrToRange(_0x546cf2),_rangeCache[_0xff364b(0x16b)](_0x546cf2,_0x277566)),_0x277566;}function randomIPFromCidr(_0x28bdaf){const _0x311a3e=a0_0x15be5e;if(String(_0x28bdaf)[_0x311a3e(0x32a)](':')>=0x0)return randomIP6FromCidr(_0x28bdaf);const [_0x17fce3,_0x15408f]=cidrRangeCached(_0x28bdaf),_0x1cbaab=_0x17fce3+Math[_0x311a3e(0x4aa)](Math[_0x311a3e(0x18a)]()*(_0x15408f-_0x17fce3>>>0x0));return(_0x1cbaab>>>0x18&0xff)+'.'+(_0x1cbaab>>>0x10&0xff)+'.'+(_0x1cbaab>>>0x8&0xff)+'.'+(_0x1cbaab&0xff);}function randomIP6FromCidr(_0x31f0f0){const _0x4f4c36=a0_0x15be5e,[_0x480205,_0x3101b1]=_0x31f0f0[_0x4f4c36(0x1d9)]('/'),_0x5851e7=parseInt(_0x3101b1,0xa)||0x0,_0x37e2d1=_0x5d32cd=>{const _0x36a29e=_0x4f4c36,_0x556394=_0x5d32cd[_0x36a29e(0x32a)]('::');let _0x3a1644;if(_0x556394>=0x0){const _0x2c1ec0=_0x5d32cd[_0x36a29e(0x39d)](0x0,_0x556394)[_0x36a29e(0x1d9)](':')[_0x36a29e(0x36f)](Boolean),_0x7bcae3=_0x5d32cd['slice'](_0x556394+0x2)[_0x36a29e(0x1d9)](':')['filter'](Boolean),_0x3a100b=0x8-_0x2c1ec0[_0x36a29e(0x2ca)]-_0x7bcae3['length'];_0x3a1644=[..._0x2c1ec0,...Array(_0x3a100b)[_0x36a29e(0x339)]('0'),..._0x7bcae3];}else _0x3a1644=_0x5d32cd[_0x36a29e(0x1d9)](':');return _0x3a1644[_0x36a29e(0x2c2)](_0x3176a3=>_0x3176a3[_0x36a29e(0x376)](0x4,'0'));},_0x3c6205=_0x37e2d1(_0x480205)[_0x4f4c36(0x2c2)](_0x3dfdda=>parseInt(_0x3dfdda,0x10));let _0x5802b2=0x0;for(let _0x153d1a=0x0;_0x153d1a<0x8;_0x153d1a++)for(let _0x98f671=0xf;_0x98f671>=0x0;_0x98f671--){if(_0x5802b2>=_0x5851e7)_0x3c6205[_0x153d1a]|=(Math[_0x4f4c36(0x18a)]()<0.5?0x1:0x0)<<_0x98f671;_0x5802b2++;}return _0x3c6205[_0x4f4c36(0x2c2)](_0x576d8b=>_0x576d8b[_0x4f4c36(0x214)](0x10))[_0x4f4c36(0x3d5)](':');}function ipv4ToEmbeddedV6(_0x31589d){const _0x1a11b0=a0_0x15be5e,_0x5cb768=String(_0x31589d||'')[_0x1a11b0(0x1d9)]('.')[_0x1a11b0(0x2c2)](_0x4fe1a7=>parseInt(_0x4fe1a7,0xa)[_0x1a11b0(0x214)](0x10)['padStart'](0x2,'0'));if(_0x5cb768[_0x1a11b0(0x2ca)]!==0x4||_0x5cb768[_0x1a11b0(0x350)](_0x2f4684=>_0x2f4684===_0x1a11b0(0x206)))return null;return'2606:4700::'+_0x5cb768[0x0]+_0x5cb768[0x1]+':'+_0x5cb768[0x2]+_0x5cb768[0x3];}function randomIPsFromCidrs(_0x58a2d3,_0x5a96db){const _0x2a2055=a0_0x15be5e,_0x285c89=new Set(),_0x2d2dda=[];let _0x16f09a=0x0;while(_0x2d2dda[_0x2a2055(0x2ca)]<_0x5a96db&&_0x16f09a++<_0x5a96db*0x14){const _0x2b3d13=randomIPFromCidr(_0x58a2d3[Math[_0x2a2055(0x4aa)](Math[_0x2a2055(0x18a)]()*_0x58a2d3['length'])]);!_0x285c89[_0x2a2055(0x27d)](_0x2b3d13)&&(_0x285c89[_0x2a2055(0x442)](_0x2b3d13),_0x2d2dda[_0x2a2055(0x39b)](_0x2b3d13));}return _0x2d2dda;}function parseIPList(_0x4038cc){const _0x354a84=a0_0x15be5e,_0x1f2c16=[],_0x458f70=new Set();return String(_0x4038cc||'')[_0x354a84(0x1d9)](/[\n,;]+/)[_0x354a84(0x2c2)](_0x4a315b=>_0x4a315b[_0x354a84(0x2ae)]())[_0x354a84(0x36f)](Boolean)[_0x354a84(0x197)](_0x894c2b=>{const _0x53d0d9=_0x354a84;let _0x42e816='';if(_0x894c2b[_0x53d0d9(0x2ad)]('#')){const [_0x443bc3,_0x303d9c]=_0x894c2b[_0x53d0d9(0x1d9)]('#');_0x894c2b=_0x443bc3,_0x42e816=_0x303d9c;}const {host:_0x3d97fb,port:_0x839936}=parseHostPort(_0x894c2b,0x1bb);_0x3d97fb&&isValidIp(_0x3d97fb)&&!_0x458f70[_0x53d0d9(0x27d)](_0x3d97fb)&&(_0x458f70[_0x53d0d9(0x442)](_0x3d97fb),_0x1f2c16['push']({'ip':_0x3d97fb,'port':_0x839936,'name':_0x42e816}));}),_0x1f2c16;}function parseProxyAddress(_0x55ff06){const _0xc0614=a0_0x15be5e;if(!_0x55ff06)return null;let _0x5117ee='socks5',_0x17cfec=String(_0x55ff06)[_0xc0614(0x2ae)]();const _0x569aa9=_0x17cfec['match'](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x569aa9&&(_0x5117ee=_0x569aa9[0x1]['toLowerCase'](),_0x17cfec=_0x569aa9[0x2]);if(_0x5117ee==='ss')return parseSsProxy(_0x17cfec);let _0xe77168='',_0x1638ef='';if(_0x17cfec[_0xc0614(0x2ad)]('@')){const [_0x4ea38d,_0x103727]=_0x17cfec[_0xc0614(0x1d9)]('@'),_0x4798d2=_0x36749b=>{try{return decodeURIComponent(_0x36749b);}catch(_0x418128){return _0x36749b;}},_0x1896bb=_0x4ea38d[_0xc0614(0x32a)](':');if(_0x1896bb>=0x0)_0xe77168=_0x4798d2(_0x4ea38d[_0xc0614(0x39d)](0x0,_0x1896bb)),_0x1638ef=_0x4798d2(_0x4ea38d[_0xc0614(0x39d)](_0x1896bb+0x1));else _0xe77168=_0x4798d2(_0x4ea38d);_0x17cfec=_0x103727;}const _0x428bfc=_0x5117ee===_0xc0614(0x447)?0x50:_0x5117ee==='https'?0x1bb:0x438,{host:_0x49faa4,port:_0x4187a6}=parseHostPort(_0x17cfec,_0x428bfc);return{'type':_0x5117ee,'host':_0x49faa4,'port':_0x4187a6,'user':_0xe77168,'pass':_0x1638ef};}function parseSsProxy(_0xf5f581){const _0x5f2337=a0_0x15be5e;let _0x33fe9a=_0xf5f581,_0x2122e6='';const _0x42a4c9=_0xf5f581[_0x5f2337(0x32a)]('#');if(_0x42a4c9>=0x0)_0x33fe9a=_0xf5f581[_0x5f2337(0x39d)](0x0,_0x42a4c9);const _0x1d1313=_0x33fe9a[_0x5f2337(0x1ec)]('@');if(_0x1d1313>=0x0)_0x2122e6=_0x33fe9a[_0x5f2337(0x39d)](0x0,_0x1d1313),_0x33fe9a=_0x33fe9a[_0x5f2337(0x39d)](_0x1d1313+0x1);else{const _0x56fffa=b64ToUtf8(_0x33fe9a);if(_0x56fffa&&_0x56fffa[_0x5f2337(0x2ad)]('@')){const _0x567493=_0x56fffa[_0x5f2337(0x1ec)]('@');_0x2122e6=_0x56fffa[_0x5f2337(0x39d)](0x0,_0x567493),_0x33fe9a=_0x56fffa[_0x5f2337(0x39d)](_0x567493+0x1);}}let _0x4da938='',_0x2cfc02='';if(_0x2122e6){let _0x1875df=b64ToUtf8(_0x2122e6)||_0x2122e6;try{_0x1875df=decodeURIComponent(_0x1875df);}catch(_0x30467e){}const _0x3947e2=_0x1875df['indexOf'](':');if(_0x3947e2>0x0)_0x4da938=_0x1875df['slice'](0x0,_0x3947e2),_0x2cfc02=_0x1875df[_0x5f2337(0x39d)](_0x3947e2+0x1);else _0x4da938=_0x1875df;}const {host:_0x1f2207,port:_0x59679e}=parseHostPort(_0x33fe9a,0x20c4);return{'type':'ss','host':_0x1f2207,'port':_0x59679e,'method':_0x4da938,'password':_0x2cfc02};}function b64ToUtf8(_0x5e3833){const _0x305ef8=a0_0x15be5e;try{const _0x4c86c3=atob(String(_0x5e3833)[_0x305ef8(0x33a)](/-/g,'+')['replace'](/_/g,'/')),_0x1d5adf=new Uint8Array(_0x4c86c3[_0x305ef8(0x2ca)]);for(let _0x4d25d5=0x0;_0x4d25d5<_0x4c86c3[_0x305ef8(0x2ca)];_0x4d25d5++)_0x1d5adf[_0x4d25d5]=_0x4c86c3[_0x305ef8(0x39f)](_0x4d25d5);return new TextDecoder(_0x305ef8(0x2df))['decode'](_0x1d5adf);}catch(_0x195bf0){return null;}}function json(_0x14bac3,_0x1acee9){const _0xbac24b=a0_0x15be5e;return new Response(JSON[_0xbac24b(0x2f4)](_0x14bac3),{'status':_0x1acee9||0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8'}});}async function kvGetConfigCached(_0x492da3){const _0x47fd9b=a0_0x15be5e;try{return await _0x492da3['K'][_0x47fd9b(0x2bc)](_0x47fd9b(0x3cb),{'cacheTtl':0x1e});}catch(_0x18c21c){return null;}}function invalidateConfigCache(){}async function loadConfig(_0x4a82a5){const _0x5b0dc3=a0_0x15be5e,_0x28428b=JSON[_0x5b0dc3(0x2e7)](JSON[_0x5b0dc3(0x2f4)](DEFAULT_CONFIG));let _0x55159c=![];if(_0x4a82a5['U'])_0x28428b[_0x5b0dc3(0x422)]=String(_0x4a82a5['U'])['toLowerCase']();if(_0x4a82a5['D']||_0x4a82a5[_0x5b0dc3(0x17e)])_0x28428b[_0x5b0dc3(0x45d)]=String(_0x4a82a5['D']||_0x4a82a5['PATH']);if(_0x4a82a5['ADMIN']||_0x4a82a5[_0x5b0dc3(0x475)])_0x28428b[_0x5b0dc3(0x475)]=String(_0x4a82a5[_0x5b0dc3(0x3d9)]||_0x4a82a5['admin']);if(_0x4a82a5[_0x5b0dc3(0x3c1)])_0x28428b[_0x5b0dc3(0x292)]=String(_0x4a82a5['HOST'])[_0x5b0dc3(0x33a)](/^https?:\/\//,'')[_0x5b0dc3(0x1d9)]('/')[0x0];if(_0x4a82a5['PROXYIP'])_0x28428b[_0x5b0dc3(0x20a)]=String(_0x4a82a5[_0x5b0dc3(0x230)]);if(_0x4a82a5['S']||_0x4a82a5[_0x5b0dc3(0x472)])_0x28428b['outboundProxy']=String(_0x4a82a5['S']||_0x4a82a5['OUTBOUND']);if(_0x4a82a5[_0x5b0dc3(0x161)]==='true'||_0x4a82a5[_0x5b0dc3(0x161)]==='1')_0x28428b[_0x5b0dc3(0x33c)]=!![];if(_0x4a82a5[_0x5b0dc3(0x2b9)]===_0x5b0dc3(0x1aa)||_0x4a82a5['TROJAN']==='1')_0x28428b['enableTrojan']=!![];if(_0x4a82a5['TROJAN_PASSWORD'])_0x28428b[_0x5b0dc3(0x3ba)]=String(_0x4a82a5[_0x5b0dc3(0x289)]);if(_0x4a82a5['ALPN'])_0x28428b[_0x5b0dc3(0x449)]=String(_0x4a82a5[_0x5b0dc3(0x46a)]);if(_0x4a82a5['YX'])_0x28428b['preferredIPs']=parseIPList(_0x4a82a5['YX']);if(_0x4a82a5[_0x5b0dc3(0x477)])_0x28428b[_0x5b0dc3(0x41c)][_0x5b0dc3(0x31c)]=String(_0x4a82a5['YXURL']);if(_0x4a82a5[_0x5b0dc3(0x494)]==='1'||_0x4a82a5['PROBE_ALIVE']===_0x5b0dc3(0x1aa))_0x28428b[_0x5b0dc3(0x15e)]=!![];if(_0x4a82a5[_0x5b0dc3(0x494)]==='0'||_0x4a82a5[_0x5b0dc3(0x494)]===_0x5b0dc3(0x229))_0x28428b[_0x5b0dc3(0x15e)]=![];if(_0x4a82a5['K']&&typeof _0x4a82a5['K']['get']===_0x5b0dc3(0x481))try{const _0x1999b9=await kvGetConfigCached(_0x4a82a5);if(_0x1999b9){const _0x53a64b=JSON[_0x5b0dc3(0x2e7)](_0x1999b9);if(_0x53a64b[_0x5b0dc3(0x2d7)]!==undefined)_0x55159c=!![];Object['assign'](_0x28428b,_0x53a64b);if(_0x53a64b[_0x5b0dc3(0x41c)])_0x28428b[_0x5b0dc3(0x41c)]=Object[_0x5b0dc3(0x3ec)](JSON[_0x5b0dc3(0x2e7)](JSON[_0x5b0dc3(0x2f4)](DEFAULT_CONFIG[_0x5b0dc3(0x41c)])),_0x53a64b[_0x5b0dc3(0x41c)]);if(_0x53a64b[_0x5b0dc3(0x34b)]&&Array[_0x5b0dc3(0x26e)](_0x53a64b[_0x5b0dc3(0x34b)]))_0x28428b[_0x5b0dc3(0x34b)]=_0x53a64b[_0x5b0dc3(0x34b)];if(_0x53a64b[_0x5b0dc3(0x475)])_0x28428b[_0x5b0dc3(0x475)]=String(_0x53a64b[_0x5b0dc3(0x475)]);if(_0x53a64b[_0x5b0dc3(0x422)])_0x28428b[_0x5b0dc3(0x422)]=String(_0x53a64b[_0x5b0dc3(0x422)])[_0x5b0dc3(0x278)]();}}catch(_0x3acac8){}delete _0x28428b[_0x5b0dc3(0x349)],delete _0x28428b[_0x5b0dc3(0x2b6)],setProbeAlive(!!_0x28428b[_0x5b0dc3(0x15e)]),_0x28428b[_0x5b0dc3(0x422)]=String(_0x28428b[_0x5b0dc3(0x422)]||'')[_0x5b0dc3(0x278)]();if(!isUUID(_0x28428b[_0x5b0dc3(0x422)]))_0x28428b[_0x5b0dc3(0x422)]=uuidv4();if(!_0x28428b[_0x5b0dc3(0x45d)]||_0x28428b['path']==='/'||_0x28428b['path']==='')_0x28428b[_0x5b0dc3(0x45d)]=_0x28428b[_0x5b0dc3(0x422)];if(!Array[_0x5b0dc3(0x26e)](_0x28428b[_0x5b0dc3(0x34b)]))_0x28428b['preferredIPs']=parseIPList(_0x28428b[_0x5b0dc3(0x34b)]);if(!_0x55159c){const _0xb7572=Boolean(_0x28428b[_0x5b0dc3(0x487)]&&_0x28428b[_0x5b0dc3(0x2fc)]||_0x4a82a5[_0x5b0dc3(0x1b4)]&&_0x4a82a5[_0x5b0dc3(0x1c3)]);if(_0xb7572)_0x28428b[_0x5b0dc3(0x2d7)]=!![];}return _0x28428b;}async function saveConfig(_0x2a3887,_0x4ec78a){const _0x2ea149=a0_0x15be5e;if(!_0x2a3887['K']||typeof _0x2a3887['K']['put']!==_0x2ea149(0x481))return![];const _0x2b4e45=JSON[_0x2ea149(0x2e7)](JSON[_0x2ea149(0x2f4)](_0x4ec78a));if(_0x2b4e45[_0x2ea149(0x475)])_0x2b4e45['admin']=String(_0x2b4e45[_0x2ea149(0x475)]);return await _0x2a3887['K']['put'](_0x2ea149(0x3cb),JSON['stringify'](_0x2b4e45)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x463e82,_0x30aceb){const _0x10c3d5=a0_0x15be5e,_0x11cdcb=String(_0x463e82['CF_ACCOUNT_ID']||_0x30aceb&&_0x30aceb[_0x10c3d5(0x487)]||'')[_0x10c3d5(0x2ae)](),_0x31fd5d=String(_0x463e82['CF_API_TOKEN']||_0x30aceb&&_0x30aceb['cfApiToken']||'')['trim']();if(!_0x11cdcb||!_0x31fd5d)return{'configured':![]};const _0x1f2e3f=Date['now']();if(_0x1f2e3f<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE['data'])return Object['assign']({},QUOTA_CACHE[_0x10c3d5(0x3f1)],{'stale':!![],'error':_0x10c3d5(0x19f)});return{'configured':!![],'error':_0x10c3d5(0x242)};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x1f2e3f-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE[_0x10c3d5(0x3f1)];try{const _0x2b66d6=new Date();_0x2b66d6['setUTCHours'](0x0,0x0,0x0,0x0);const _0x4cb7d1=new Date(),_0x54faeb={'query':_0x10c3d5(0x217),'variables':{'accountId':_0x11cdcb,'filter':{'datetime_geq':_0x2b66d6[_0x10c3d5(0x25d)](),'datetime_leq':_0x4cb7d1[_0x10c3d5(0x25d)]()}}},_0x29bacf=await fetch(_0x10c3d5(0x184),{'method':_0x10c3d5(0x2e8),'headers':{'Content-Type':'application/json','Authorization':_0x10c3d5(0x317)+_0x31fd5d},'body':JSON[_0x10c3d5(0x2f4)](_0x54faeb)});if(!_0x29bacf['ok'])throw new Error(_0x10c3d5(0x2f3)+_0x29bacf[_0x10c3d5(0x298)]);const _0x46a3f0=await _0x29bacf[_0x10c3d5(0x291)]();if(_0x46a3f0[_0x10c3d5(0x2a7)]&&_0x46a3f0['errors'][_0x10c3d5(0x2ca)])throw new Error('GraphQL:\x20'+JSON['stringify'](_0x46a3f0[_0x10c3d5(0x2a7)])[_0x10c3d5(0x39d)](0x0,0xc8));const _0x1ac32d=_0x46a3f0&&_0x46a3f0[_0x10c3d5(0x3f1)]&&_0x46a3f0[_0x10c3d5(0x3f1)][_0x10c3d5(0x245)]&&_0x46a3f0[_0x10c3d5(0x3f1)]['viewer'][_0x10c3d5(0x1ed)]||[];if(!_0x1ac32d['length'])throw new Error('未找到账户数据（检查账户\x20ID\x20与令牌权限）');const _0x20d7a5=_0x1ac32d[0x0],_0x28772f=(_0x20d7a5['workersInvocationsAdaptive']||[])[0x0]||{},_0x30ca5c=(_0x20d7a5[_0x10c3d5(0x1e1)]||[])[_0x10c3d5(0x21e)]((_0x119435,_0x4a33f1)=>_0x119435+(_0x4a33f1&&_0x4a33f1[_0x10c3d5(0x3aa)]&&_0x4a33f1[_0x10c3d5(0x3aa)][_0x10c3d5(0x222)]||0x0),0x0),_0x1988d1=(_0x28772f[_0x10c3d5(0x3aa)]&&_0x28772f[_0x10c3d5(0x3aa)][_0x10c3d5(0x222)]||0x0)+_0x30ca5c,_0x11b058=_0x28772f[_0x10c3d5(0x42a)]&&_0x28772f[_0x10c3d5(0x42a)]['cpuTimeP50']||0x0,_0x135e8b=_0x28772f['sum']&&_0x28772f['sum'][_0x10c3d5(0x48a)]||0x0,_0x2250ba=QUOTA_LIMIT>0x0?Math[_0x10c3d5(0x2f1)](_0x1988d1/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x5169ee={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x1988d1,'cpuTime':_0x11b058,'subrequests':_0x135e8b},'percent':_0x2250ba,'remaining':Math['max'](0x0,QUOTA_LIMIT-_0x1988d1),'updatedAt':_0x4cb7d1[_0x10c3d5(0x25d)]()};return QUOTA_CACHE={'at':_0x1f2e3f,'data':_0x5169ee},_0x5169ee;}catch(_0xcccd94){const _0x482c53=_0xcccd94&&_0xcccd94[_0x10c3d5(0x221)]||String(_0xcccd94);if(_0x482c53[_0x10c3d5(0x32a)](_0x10c3d5(0x3a9))>=0x0){QUOTA_BACKOFF=_0x1f2e3f+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE[_0x10c3d5(0x3f1)])return Object[_0x10c3d5(0x3ec)]({},QUOTA_CACHE[_0x10c3d5(0x3f1)],{'stale':!![],'error':_0x10c3d5(0x19f)});return{'configured':!![],'error':_0x10c3d5(0x242)};}return{'configured':!![],'error':_0x482c53};}}function readAddress(_0x2b59e4,_0x4ced4e,_0x2c1f6d,_0x1ea8a3){const _0x5c17c9=a0_0x15be5e;if(_0x1ea8a3===0x1)return{'addr':_0x4ced4e['getUint8'](_0x2c1f6d)+'.'+_0x4ced4e[_0x5c17c9(0x2e6)](_0x2c1f6d+0x1)+'.'+_0x4ced4e['getUint8'](_0x2c1f6d+0x2)+'.'+_0x4ced4e['getUint8'](_0x2c1f6d+0x3),'len':0x4};if(_0x1ea8a3===0x2){const _0x509181=_0x4ced4e[_0x5c17c9(0x2e6)](_0x2c1f6d),_0x479350=_0x2b59e4[_0x5c17c9(0x16c)](_0x2c1f6d+0x1,_0x2c1f6d+0x1+_0x509181);return{'addr':TD[_0x5c17c9(0x312)](_0x479350),'len':0x1+_0x509181};}if(_0x1ea8a3===0x3){const _0x2523c9=_0x2b59e4[_0x5c17c9(0x16c)](_0x2c1f6d,_0x2c1f6d+0x10);return{'addr':formatIPv6(_0x2523c9),'len':0x10};}throw new Error(_0x5c17c9(0x196));}function parseVlessHeader(_0x4fdb87){const _0x47f068=a0_0x15be5e;if(!_0x4fdb87||_0x4fdb87['byteLength']<0x1)throw new Error(_0x47f068(0x1a3));const _0x535acd=new DataView(_0x4fdb87[_0x47f068(0x3ee)],_0x4fdb87[_0x47f068(0x44a)],_0x4fdb87[_0x47f068(0x432)]);let _0x93bfd6=0x0;if(_0x535acd[_0x47f068(0x2e6)](0x0)!==0x0)throw new Error('不支持的\x20VLESS\x20版本');_0x93bfd6+=0x1+0x10;if(_0x93bfd6>=_0x4fdb87[_0x47f068(0x432)])throw new Error('VLESS\x20头部过短');const _0x4159e7=_0x535acd[_0x47f068(0x2e6)](_0x93bfd6);_0x93bfd6+=0x1,_0x93bfd6+=_0x4159e7;if(_0x93bfd6+0x3>_0x4fdb87['byteLength'])throw new Error('VLESS\x20头部过短');const _0x15ffb8=_0x535acd[_0x47f068(0x2e6)](_0x93bfd6);_0x93bfd6+=0x1;const _0x110116=_0x535acd[_0x47f068(0x21d)](_0x93bfd6);_0x93bfd6+=0x2;const _0x269f2f=_0x535acd['getUint8'](_0x93bfd6);_0x93bfd6+=0x1;const {addr:_0x51a8bb,len:_0x54c4b1}=readAddress(_0x4fdb87,_0x535acd,_0x93bfd6,_0x269f2f);return _0x93bfd6+=_0x54c4b1,{'command':_0x15ffb8,'port':_0x110116,'addr':_0x51a8bb,'headerLength':_0x93bfd6,'earlyData':_0x4fdb87[_0x47f068(0x16c)](_0x93bfd6)};}function parseTrojanHeader(_0x36729d){const _0x3fb94b=a0_0x15be5e;if(!_0x36729d||_0x36729d[_0x3fb94b(0x432)]<0x3a+0x8)throw new Error('Trojan\x20头部过短');const _0x8eced8=new DataView(_0x36729d[_0x3fb94b(0x3ee)],_0x36729d[_0x3fb94b(0x44a)],_0x36729d['byteLength']);let _0x392d0a=0x3a;const _0x1e1bf5=_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a);_0x392d0a+=0x1;const _0x193b39=_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a);_0x392d0a+=0x1;let _0x157b13,_0x5b1475;if(_0x193b39===0x1)_0x157b13=_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a)+'.'+_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a+0x1)+'.'+_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a+0x2)+'.'+_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a+0x3),_0x5b1475=0x4;else{if(_0x193b39===0x3){const _0x2082fc=_0x8eced8[_0x3fb94b(0x2e6)](_0x392d0a);_0x157b13=TD['decode'](_0x36729d[_0x3fb94b(0x16c)](_0x392d0a+0x1,_0x392d0a+0x1+_0x2082fc)),_0x5b1475=0x1+_0x2082fc;}else{if(_0x193b39===0x4)_0x157b13=formatIPv6(_0x36729d[_0x3fb94b(0x16c)](_0x392d0a,_0x392d0a+0x10)),_0x5b1475=0x10;else throw new Error(_0x3fb94b(0x196));}}_0x392d0a+=_0x5b1475;const _0x3e7da0=_0x8eced8['getUint16'](_0x392d0a);return _0x392d0a+=0x2,_0x392d0a+=0x2,{'command':_0x1e1bf5,'port':_0x3e7da0,'addr':_0x157b13,'password':TD[_0x3fb94b(0x312)](_0x36729d[_0x3fb94b(0x16c)](0x0,0x38)),'headerLength':_0x392d0a};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x276be3){const _0x4032ce=a0_0x15be5e,_0xd7e180=TE[_0x4032ce(0x3c9)](String(_0x276be3)),_0x1aa18d=_0xd7e180[_0x4032ce(0x2ca)]*0x8,_0x3df7d7=(_0xd7e180['length']+0x8>>0x6)+0x1<<0x6,_0x30ddad=new Uint8Array(_0x3df7d7);_0x30ddad[_0x4032ce(0x16b)](_0xd7e180),_0x30ddad[_0xd7e180[_0x4032ce(0x2ca)]]=0x80;const _0xf70277=new DataView(_0x30ddad[_0x4032ce(0x3ee)]);_0xf70277['setUint32'](_0x3df7d7-0x8,Math['floor'](_0x1aa18d/0x100000000),![]),_0xf70277[_0x4032ce(0x367)](_0x3df7d7-0x4,_0x1aa18d>>>0x0,![]);let _0x523b8e=0xc1059ed8,_0x4ed331=0x367cd507,_0x32c4ad=0x3070dd17,_0x27b12e=0xf70e5939,_0x12d524=0xffc00b31,_0x18dce5=0x68581511,_0x3fb179=0x64f98fa7,_0x421ca8=0xbefa4fa4;const _0x1b9c61=(_0x12439e,_0x42daab)=>_0x12439e>>>_0x42daab|_0x12439e<<0x20-_0x42daab;for(let _0x19d17a=0x0;_0x19d17a<_0x3df7d7;_0x19d17a+=0x40){const _0x49dc32=new Uint32Array(0x40);for(let _0x277fa2=0x0;_0x277fa2<0x10;_0x277fa2++)_0x49dc32[_0x277fa2]=_0xf70277[_0x4032ce(0x19e)](_0x19d17a+_0x277fa2*0x4,![]);for(let _0x3b4401=0x10;_0x3b4401<0x40;_0x3b4401++){const _0x351bc6=_0x1b9c61(_0x49dc32[_0x3b4401-0xf],0x7)^_0x1b9c61(_0x49dc32[_0x3b4401-0xf],0x12)^_0x49dc32[_0x3b4401-0xf]>>>0x3,_0x49c8bc=_0x1b9c61(_0x49dc32[_0x3b4401-0x2],0x11)^_0x1b9c61(_0x49dc32[_0x3b4401-0x2],0x13)^_0x49dc32[_0x3b4401-0x2]>>>0xa;_0x49dc32[_0x3b4401]=_0x49dc32[_0x3b4401-0x10]+_0x351bc6+_0x49dc32[_0x3b4401-0x7]+_0x49c8bc>>>0x0;}let _0x55f522=_0x523b8e,_0x2dbe57=_0x4ed331,_0x5e6de7=_0x32c4ad,_0x25511e=_0x27b12e,_0x5227a6=_0x12d524,_0x491f7c=_0x18dce5,_0x487d1e=_0x3fb179,_0x4c7e56=_0x421ca8;for(let _0x2b0758=0x0;_0x2b0758<0x40;_0x2b0758++){const _0x2b2e37=_0x1b9c61(_0x5227a6,0x6)^_0x1b9c61(_0x5227a6,0xb)^_0x1b9c61(_0x5227a6,0x19),_0x1a6207=_0x5227a6&_0x491f7c^~_0x5227a6&_0x487d1e,_0x4a627b=_0x4c7e56+_0x2b2e37+_0x1a6207+SHA256_K[_0x2b0758]+_0x49dc32[_0x2b0758]>>>0x0,_0x442cbe=_0x1b9c61(_0x55f522,0x2)^_0x1b9c61(_0x55f522,0xd)^_0x1b9c61(_0x55f522,0x16),_0x540a69=_0x55f522&_0x2dbe57^_0x55f522&_0x5e6de7^_0x2dbe57&_0x5e6de7,_0x484a36=_0x442cbe+_0x540a69>>>0x0;_0x4c7e56=_0x487d1e,_0x487d1e=_0x491f7c,_0x491f7c=_0x5227a6,_0x5227a6=_0x25511e+_0x4a627b>>>0x0,_0x25511e=_0x5e6de7,_0x5e6de7=_0x2dbe57,_0x2dbe57=_0x55f522,_0x55f522=_0x4a627b+_0x484a36>>>0x0;}_0x523b8e=_0x523b8e+_0x55f522>>>0x0,_0x4ed331=_0x4ed331+_0x2dbe57>>>0x0,_0x32c4ad=_0x32c4ad+_0x5e6de7>>>0x0,_0x27b12e=_0x27b12e+_0x25511e>>>0x0,_0x12d524=_0x12d524+_0x5227a6>>>0x0,_0x18dce5=_0x18dce5+_0x491f7c>>>0x0,_0x3fb179=_0x3fb179+_0x487d1e>>>0x0,_0x421ca8=_0x421ca8+_0x4c7e56>>>0x0;}let _0xbb9b9e='';for(const _0x9a8870 of[_0x523b8e,_0x4ed331,_0x32c4ad,_0x27b12e,_0x12d524,_0x18dce5,_0x3fb179]){_0xbb9b9e+=(_0x9a8870>>>0x18&0xff)[_0x4032ce(0x214)](0x10)[_0x4032ce(0x376)](0x2,'0'),_0xbb9b9e+=(_0x9a8870>>>0x10&0xff)[_0x4032ce(0x214)](0x10)[_0x4032ce(0x376)](0x2,'0'),_0xbb9b9e+=(_0x9a8870>>>0x8&0xff)[_0x4032ce(0x214)](0x10)['padStart'](0x2,'0'),_0xbb9b9e+=(_0x9a8870&0xff)[_0x4032ce(0x214)](0x10)[_0x4032ce(0x376)](0x2,'0');}return _0xbb9b9e;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x52ec03){return _0x52ec03!==_trojanPassC&&(_trojanPassC=_0x52ec03,_trojanHashC=sha224hex(_0x52ec03)),_trojanHashC;}function detectTrojan(_0x384c1f,_0x28817c){const _0x40c98e=a0_0x15be5e;if(!_0x28817c[_0x40c98e(0x183)]||!_0x384c1f||_0x384c1f['byteLength']<0x3a)return![];const _0x4533a3=_0x384c1f[_0x40c98e(0x16c)](0x0,0x38);if(TD[_0x40c98e(0x312)](_0x4533a3)['toLowerCase']()===trojanPasswordHash(_0x28817c[_0x40c98e(0x3ba)]||_0x28817c[_0x40c98e(0x422)]))return!![];if(_0x384c1f[0x38]===0xd&&_0x384c1f[0x39]===0xa){for(let _0x1db166=0x0;_0x1db166<0x38;_0x1db166++){const _0x576baa=_0x4533a3[_0x1db166];if(!(_0x576baa>=0x30&&_0x576baa<=0x39||_0x576baa>=0x61&&_0x576baa<=0x66||_0x576baa>=0x41&&_0x576baa<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=[a0_0x15be5e(0x46c),'https://dns.alidns.com/resolve',a0_0x15be5e(0x18e),a0_0x15be5e(0x305),a0_0x15be5e(0x409),a0_0x15be5e(0x165)];function ipv6ToBytes(_0x177991){const _0x8612d4=a0_0x15be5e,_0x13248b=String(_0x177991)[_0x8612d4(0x1d9)]('::'),_0x230e67=_0x13248b[0x0]?_0x13248b[0x0][_0x8612d4(0x1d9)](':')[_0x8612d4(0x36f)](Boolean):[],_0x3f9220=_0x13248b[0x1]?_0x13248b[0x1][_0x8612d4(0x1d9)](':')[_0x8612d4(0x36f)](Boolean):[],_0x1ef939=[..._0x230e67,...Array(Math[_0x8612d4(0x43f)](0x0,0x8-_0x230e67['length']-_0x3f9220[_0x8612d4(0x2ca)]))[_0x8612d4(0x339)]('0'),..._0x3f9220],_0x57f94d=new Uint8Array(0x10);return _0x1ef939[_0x8612d4(0x197)]((_0x5ba8aa,_0x25fff9)=>{const _0x309586=parseInt(_0x5ba8aa,0x10)||0x0;_0x57f94d[_0x25fff9*0x2]=_0x309586>>0x8&0xff,_0x57f94d[_0x25fff9*0x2+0x1]=_0x309586&0xff;}),_0x57f94d;}async function dnsToDoH(_0x1c1c71){const _0xf543f6=a0_0x15be5e;if(!_0x1c1c71||_0x1c1c71[_0xf543f6(0x432)]<0x11)return null;const _0x30c88f=new DataView(_0x1c1c71['buffer'],_0x1c1c71[_0xf543f6(0x44a)],_0x1c1c71['byteLength']),_0x43d86c=_0x30c88f[_0xf543f6(0x21d)](0x0);if(_0x30c88f[_0xf543f6(0x21d)](0x2)&0x8000)return null;if(_0x30c88f[_0xf543f6(0x21d)](0x4)!==0x1)return null;let _0x3934b3=0xc,_0x3eae6c=[];while(_0x3934b3<_0x1c1c71['byteLength']){const _0x35fa7a=_0x30c88f[_0xf543f6(0x2e6)](_0x3934b3);if(_0x35fa7a===0x0){_0x3934b3++;break;}if((_0x35fa7a&0xc0)===0xc0){_0x3934b3+=0x2;break;}if(_0x3934b3+0x1+_0x35fa7a>_0x1c1c71[_0xf543f6(0x432)])return null;_0x3eae6c[_0xf543f6(0x39b)](TD['decode'](_0x1c1c71[_0xf543f6(0x16c)](_0x3934b3+0x1,_0x3934b3+0x1+_0x35fa7a))),_0x3934b3+=0x1+_0x35fa7a;}if(_0x3934b3+0x4>_0x1c1c71[_0xf543f6(0x432)]||_0x3eae6c[_0xf543f6(0x2ca)]===0x0)return null;const _0x4e4c91=_0x30c88f[_0xf543f6(0x21d)](_0x3934b3),_0x169f0d=_0x30c88f['getUint16'](_0x3934b3+0x2),_0xec6837=_0x3934b3+0x4;if(_0x4e4c91!==0x1&&_0x4e4c91!==0x1c)return null;const _0x1de089=_0x3eae6c['join']('.'),_0x457863=_0x1c1c71['subarray'](0xc,_0xec6837);let _0x5d29ad=null;for(const _0x32bd1e of DOH_ENDPOINTS){try{const _0x50616e=await fetchTimeout(_0x32bd1e+_0xf543f6(0x3b4)+encodeURIComponent(_0x1de089)+_0xf543f6(0x299)+_0x4e4c91,{'headers':{'accept':_0xf543f6(0x1bf)}},0x1388);if(!_0x50616e||!_0x50616e['ok'])continue;const _0x448136=await _0x50616e[_0xf543f6(0x291)]();if(!_0x448136||_0x448136[_0xf543f6(0x202)]!==0x0)continue;const _0x5e2ab4=(_0x448136[_0xf543f6(0x451)]||[])[_0xf543f6(0x36f)](_0x50a780=>_0x50a780['type']===_0x4e4c91&&(_0x50a780[_0xf543f6(0x238)]===0x1?isValidIp(String(_0x50a780[_0xf543f6(0x3f1)])):/^[0-9a-fA-F:]+$/[_0xf543f6(0x3fe)](String(_0x50a780['data']))));if(_0x5e2ab4[_0xf543f6(0x2ca)]){_0x5d29ad=_0x5e2ab4;break;}}catch(_0x2ee99f){}}if(!_0x5d29ad)return null;const _0x23bdc8=new Uint8Array(0xc),_0x30bfc6=new DataView(_0x23bdc8[_0xf543f6(0x3ee)]);_0x30bfc6[_0xf543f6(0x377)](0x0,_0x43d86c),_0x30bfc6[_0xf543f6(0x377)](0x2,0x8180),_0x30bfc6['setUint16'](0x4,0x1),_0x30bfc6[_0xf543f6(0x377)](0x6,_0x5d29ad['length']);const _0x1eb97a=[_0x23bdc8,_0x457863];for(const _0x30b597 of _0x5d29ad){const _0xbc5576=String(_0x30b597[_0xf543f6(0x3f1)]),_0x299d0a=_0x30b597[_0xf543f6(0x238)]===0x1?Uint8Array[_0xf543f6(0x35a)](_0xbc5576[_0xf543f6(0x1d9)]('.')[_0xf543f6(0x2c2)](Number)):ipv6ToBytes(_0xbc5576);if(_0x299d0a['length']!==(_0x30b597[_0xf543f6(0x238)]===0x1?0x4:0x10))continue;const _0x396fb1=new Uint8Array(0xa),_0x1b8fb=new DataView(_0x396fb1['buffer']);_0x1b8fb['setUint16'](0x0,0xc00c),_0x1b8fb['setUint16'](0x2,_0x30b597['type']),_0x1b8fb[_0xf543f6(0x377)](0x4,_0x169f0d===0x0?0x1:_0x169f0d),_0x1b8fb['setUint32'](0x6,Number(_0x30b597['TTL'])||0x12c),_0x1eb97a[_0xf543f6(0x39b)](_0x396fb1,new Uint8Array([_0x299d0a[_0xf543f6(0x2ca)]>>0x8&0xff,_0x299d0a[_0xf543f6(0x2ca)]&0xff]),_0x299d0a);}let _0x4a1c2e=0x0;_0x1eb97a[_0xf543f6(0x197)](_0x482dc5=>_0x4a1c2e+=_0x482dc5[_0xf543f6(0x432)]);const _0x492de0=new Uint8Array(_0x4a1c2e);let _0xe6d6ad=0x0;for(const _0x25331f of _0x1eb97a){_0x492de0[_0xf543f6(0x16b)](_0x25331f,_0xe6d6ad),_0xe6d6ad+=_0x25331f[_0xf543f6(0x432)];}return _0x492de0;}function withTimeout(_0x4c0493,_0x5d7990,_0x17f8f9){const _0xee365f=a0_0x15be5e;return Promise[_0xee365f(0x3e4)]([_0x4c0493,new Promise((_0x1251b3,_0x593768)=>setTimeout(()=>_0x593768(new Error(_0x17f8f9||_0xee365f(0x2f5))),_0x5d7990||0x1770))]);}async function connectWithTimeout(_0x5dbd98,_0x5cdd32,_0x149f24){const _0xed5728=a0_0x15be5e,_0x49276c=connect({'hostname':_0x5dbd98,'port':_0x5cdd32});try{await withTimeout(_0x49276c[_0xed5728(0x168)],_0x149f24||0x1770,_0xed5728(0x1e5));}catch(_0x2c38c0){try{_0x49276c[_0xed5728(0x428)]();}catch(_0x5cff2f){}throw _0x2c38c0;}return _0x49276c;}async function connectDirect(_0x5a593e,_0x2f8bdb){const _0x5c3b91=a0_0x15be5e;return connectWithTimeout(_0x5a593e[_0x5c3b91(0x452)],_0x5a593e[_0x5c3b91(0x453)],_0x2f8bdb||0x1770);}async function connectViaSocks5(_0x486874,_0x2fe553){const _0x28ca21=a0_0x15be5e,_0x480e88=await connectWithTimeout(_0x486874['host'],_0x486874[_0x28ca21(0x453)],0x1770),_0x5aaf59=_0x480e88[_0x28ca21(0x3f8)][_0x28ca21(0x3d0)](),_0x48932d=_0x480e88[_0x28ca21(0x1f0)][_0x28ca21(0x24f)]();let _0x33e7bf=new Uint8Array(0x0);const _0xa05aba=async _0x2b0674=>{const _0x5c2504=_0x28ca21;while(_0x33e7bf['length']<_0x2b0674){const {done:_0x4843d2,value:_0x4705d0}=await _0x48932d['read']();if(_0x4843d2)throw new Error('连接被关闭');_0x33e7bf=concatBytes(_0x33e7bf,_0x4705d0);}const _0x433dea=_0x33e7bf[_0x5c2504(0x39d)](0x0,_0x2b0674);return _0x33e7bf=_0x33e7bf[_0x5c2504(0x16c)](_0x2b0674),_0x433dea;},_0x2bcdf8=_0x486874[_0x28ca21(0x17a)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x5aaf59['write'](new Uint8Array(_0x2bcdf8));const _0x424b65=await _0xa05aba(0x2);if(_0x424b65[0x0]!==0x5||_0x424b65[0x1]===0xff)throw new Error(_0x28ca21(0x40e));if(_0x424b65[0x1]===0x2){if(!_0x486874[_0x28ca21(0x17a)])throw new Error(_0x28ca21(0x260));const _0x2aa9e9=TE[_0x28ca21(0x3c9)](_0x486874[_0x28ca21(0x17a)]),_0x428846=TE[_0x28ca21(0x3c9)](_0x486874[_0x28ca21(0x22b)]),_0x46ee86=new Uint8Array([0x1,_0x2aa9e9[_0x28ca21(0x2ca)],..._0x2aa9e9,_0x428846[_0x28ca21(0x2ca)],..._0x428846]);await _0x5aaf59[_0x28ca21(0x271)](_0x46ee86);const _0x4f25f4=await _0xa05aba(0x2);if(_0x4f25f4[0x1]!==0x0)throw new Error(_0x28ca21(0x2b1));}else{if(_0x424b65[0x1]!==0x0)throw new Error('SOCKS5\x20不支持的认证方法\x20'+_0x424b65[0x1]);}const _0x1bcf35=TE[_0x28ca21(0x3c9)](_0x2fe553['hostname']);let _0x345202;/^\d+\.\d+\.\d+\.\d+$/['test'](_0x2fe553[_0x28ca21(0x452)])?_0x345202=new Uint8Array([0x5,0x1,0x0,0x1,..._0x2fe553[_0x28ca21(0x452)][_0x28ca21(0x1d9)]('.')[_0x28ca21(0x2c2)](Number),_0x2fe553[_0x28ca21(0x453)]>>0x8&0xff,_0x2fe553[_0x28ca21(0x453)]&0xff]):_0x345202=new Uint8Array([0x5,0x1,0x0,0x3,_0x1bcf35[_0x28ca21(0x2ca)],..._0x1bcf35,_0x2fe553[_0x28ca21(0x453)]>>0x8&0xff,_0x2fe553[_0x28ca21(0x453)]&0xff]);await _0x5aaf59['write'](_0x345202);const _0x83c6e8=await _0xa05aba(0x4);if(_0x83c6e8[0x1]!==0x0)throw new Error(_0x28ca21(0x301)+_0x83c6e8[0x1]);if(_0x83c6e8[0x3]===0x1)await _0xa05aba(0x6);else{if(_0x83c6e8[0x3]===0x3){const _0x50a063=(await _0xa05aba(0x1))[0x0];await _0xa05aba(_0x50a063+0x2);}else{if(_0x83c6e8[0x3]===0x4)await _0xa05aba(0x12);}}if(_0x33e7bf[_0x28ca21(0x432)]>0x0)_0x480e88[_0x28ca21(0x226)]=_0x33e7bf;return _0x5aaf59[_0x28ca21(0x1b0)](),_0x48932d[_0x28ca21(0x1b0)](),_0x480e88;}async function connectViaHttpProxy(_0x400498,_0x33bf81){const _0x27fc1f=a0_0x15be5e,_0x92daf=await connectWithTimeout(_0x400498[_0x27fc1f(0x292)],_0x400498[_0x27fc1f(0x453)],0x1770),_0x393002=_0x92daf[_0x27fc1f(0x3f8)][_0x27fc1f(0x3d0)](),_0x1cb2ef=_0x92daf[_0x27fc1f(0x1f0)][_0x27fc1f(0x24f)]();let _0x3e2b95='';if(_0x400498['user'])_0x3e2b95=_0x27fc1f(0x341)+b64FromBytes(TE['encode'](_0x400498[_0x27fc1f(0x17a)]+':'+_0x400498[_0x27fc1f(0x22b)]))+'\x0d\x0a';const _0x243d10=_0x27fc1f(0x1ab)+_0x33bf81[_0x27fc1f(0x452)]+':'+_0x33bf81[_0x27fc1f(0x453)]+'\x20HTTP/1.1\x0d\x0aHost:\x20'+_0x33bf81[_0x27fc1f(0x452)]+':'+_0x33bf81['port']+'\x0d\x0a'+_0x3e2b95+'\x0d\x0a';await _0x393002[_0x27fc1f(0x271)](TE[_0x27fc1f(0x3c9)](_0x243d10));const {head:_0x5ad564,leftover:_0x24ed28}=await readUntilCRLFCRLF(_0x1cb2ef);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x27fc1f(0x3fe)](_0x5ad564))throw new Error(_0x27fc1f(0x366)+_0x5ad564[_0x27fc1f(0x1d9)]('\x0d\x0a')[0x0]);if(_0x24ed28&&_0x24ed28[_0x27fc1f(0x432)]>0x0)_0x92daf[_0x27fc1f(0x226)]=_0x24ed28;return _0x393002[_0x27fc1f(0x1b0)](),_0x1cb2ef[_0x27fc1f(0x1b0)](),_0x92daf;}function ssCipherAlgo(_0x2daa05){const _0x3d2e08=a0_0x15be5e,_0x18ddfc=String(_0x2daa05||'')[_0x3d2e08(0x278)]()['replace'](/_/g,'-');if(_0x18ddfc===_0x3d2e08(0x3be)||_0x18ddfc===_0x3d2e08(0x2c5))return{'name':'AES-GCM','keyLen':0x10};if(_0x18ddfc===_0x3d2e08(0x40b)||_0x18ddfc==='aes-256gcm')return{'name':_0x3d2e08(0x21c),'keyLen':0x20};if(_0x18ddfc===_0x3d2e08(0x42d)||_0x18ddfc==='chacha20-poly1305'||_0x18ddfc==='chacha20poly1305')return{'name':_0x3d2e08(0x15b),'keyLen':0x20};return null;}function sha1Bytes(_0x364fe6){const _0x4bbb19=a0_0x15be5e,_0x589f98=_0x364fe6 instanceof Uint8Array?_0x364fe6:new Uint8Array(_0x364fe6),_0x1e2db4=_0x589f98[_0x4bbb19(0x2ca)],_0x4cc718=_0x1e2db4*0x8,_0x59d29f=new Uint8Array((_0x1e2db4+0x8>>0x6)+0x1<<0x6);_0x59d29f[_0x4bbb19(0x16b)](_0x589f98),_0x59d29f[_0x1e2db4]=0x80;const _0x421869=new DataView(_0x59d29f[_0x4bbb19(0x3ee)]);_0x421869[_0x4bbb19(0x367)](_0x59d29f['length']-0x8,Math[_0x4bbb19(0x4aa)](_0x4cc718/0x100000000),![]),_0x421869['setUint32'](_0x59d29f[_0x4bbb19(0x2ca)]-0x4,_0x4cc718>>>0x0,![]);let _0x498d5d=0x67452301,_0x1cd1b7=0xefcdab89,_0x3a881f=0x98badcfe,_0x2c682f=0x10325476,_0xdb40c6=0xc3d2e1f0;const _0x2edf01=new Uint32Array(0x50);for(let _0x515261=0x0;_0x515261<_0x59d29f[_0x4bbb19(0x2ca)];_0x515261+=0x40){for(let _0xc3cb72=0x0;_0xc3cb72<0x10;_0xc3cb72++)_0x2edf01[_0xc3cb72]=_0x421869[_0x4bbb19(0x19e)](_0x515261+_0xc3cb72*0x4,![]);for(let _0x18732b=0x10;_0x18732b<0x50;_0x18732b++)_0x2edf01[_0x18732b]=rotl32(_0x2edf01[_0x18732b-0x3]^_0x2edf01[_0x18732b-0x8]^_0x2edf01[_0x18732b-0xe]^_0x2edf01[_0x18732b-0x10],0x1);let _0x4c69ee=_0x498d5d,_0x3e0c3d=_0x1cd1b7,_0x417d4d=_0x3a881f,_0xa892b4=_0x2c682f,_0x2bc8ff=_0xdb40c6;for(let _0x58b7f2=0x0;_0x58b7f2<0x50;_0x58b7f2++){let _0x4de454,_0x5e4620;if(_0x58b7f2<0x14)_0x4de454=_0x3e0c3d&_0x417d4d|~_0x3e0c3d&_0xa892b4,_0x5e4620=0x5a827999;else{if(_0x58b7f2<0x28)_0x4de454=_0x3e0c3d^_0x417d4d^_0xa892b4,_0x5e4620=0x6ed9eba1;else _0x58b7f2<0x3c?(_0x4de454=_0x3e0c3d&_0x417d4d|_0x3e0c3d&_0xa892b4|_0x417d4d&_0xa892b4,_0x5e4620=0x8f1bbcdc):(_0x4de454=_0x3e0c3d^_0x417d4d^_0xa892b4,_0x5e4620=0xca62c1d6);}const _0x1c15b3=rotl32(_0x4c69ee,0x5)+_0x4de454+_0x2bc8ff+_0x5e4620+_0x2edf01[_0x58b7f2]>>>0x0;_0x2bc8ff=_0xa892b4,_0xa892b4=_0x417d4d,_0x417d4d=rotl32(_0x3e0c3d,0x1e),_0x3e0c3d=_0x4c69ee,_0x4c69ee=_0x1c15b3;}_0x498d5d=_0x498d5d+_0x4c69ee>>>0x0,_0x1cd1b7=_0x1cd1b7+_0x3e0c3d>>>0x0,_0x3a881f=_0x3a881f+_0x417d4d>>>0x0,_0x2c682f=_0x2c682f+_0xa892b4>>>0x0,_0xdb40c6=_0xdb40c6+_0x2bc8ff>>>0x0;}const _0x4bf4dc=new Uint8Array(0x14),_0x44fc6b=new DataView(_0x4bf4dc[_0x4bbb19(0x3ee)]);return _0x44fc6b[_0x4bbb19(0x367)](0x0,_0x498d5d,![]),_0x44fc6b[_0x4bbb19(0x367)](0x4,_0x1cd1b7,![]),_0x44fc6b['setUint32'](0x8,_0x3a881f,![]),_0x44fc6b[_0x4bbb19(0x367)](0xc,_0x2c682f,![]),_0x44fc6b[_0x4bbb19(0x367)](0x10,_0xdb40c6,![]),_0x4bf4dc;}function hmacSha1(_0x2b8bba,_0x4945b8){const _0x378f43=a0_0x15be5e,_0xb29f22=0x40;let _0x1f8617=_0x2b8bba;if(_0x1f8617[_0x378f43(0x2ca)]>_0xb29f22)_0x1f8617=sha1Bytes(_0x1f8617);const _0x924470=new Uint8Array(_0xb29f22),_0x4fb0ff=new Uint8Array(_0xb29f22);for(let _0x318463=0x0;_0x318463<_0xb29f22;_0x318463++){_0x924470[_0x318463]=(_0x318463<_0x1f8617[_0x378f43(0x2ca)]?_0x1f8617[_0x318463]:0x0)^0x36,_0x4fb0ff[_0x318463]=(_0x318463<_0x1f8617[_0x378f43(0x2ca)]?_0x1f8617[_0x318463]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x4fb0ff,sha1Bytes(concatBytes(_0x924470,_0x4945b8))));}function hkdfSha1(_0x5c3928,_0x5e6bc7,_0x451dc8){const _0x316002=a0_0x15be5e,_0x45288a=hmacSha1(_0x5e6bc7&&_0x5e6bc7['length']?_0x5e6bc7:new Uint8Array(0x14),_0x5c3928);let _0x1aa7ec=new Uint8Array(0x0),_0x28044b=new Uint8Array(0x0);for(let _0x144b0a=0x1;_0x28044b[_0x316002(0x2ca)]<_0x451dc8;_0x144b0a++){const _0x4c15da=new Uint8Array([_0x144b0a]);_0x1aa7ec=hmacSha1(_0x45288a,concatBytes(concatBytes(_0x1aa7ec,TE[_0x316002(0x3c9)](_0x316002(0x167))),_0x4c15da)),_0x28044b=concatBytes(_0x28044b,_0x1aa7ec);}return _0x28044b[_0x316002(0x39d)](0x0,_0x451dc8);}function chacha20Block(_0x2546a2,_0x537bb6,_0x30bf19){const _0x152022=a0_0x15be5e,_0x49a6f8=new Uint32Array(0x10);_0x49a6f8[0x0]=0x61707865,_0x49a6f8[0x1]=0x3320646e,_0x49a6f8[0x2]=0x79622d32,_0x49a6f8[0x3]=0x6b206574;const _0x19615b=new DataView(_0x2546a2[_0x152022(0x3ee)],_0x2546a2[_0x152022(0x44a)],0x20);for(let _0x41afb8=0x0;_0x41afb8<0x8;_0x41afb8++)_0x49a6f8[0x4+_0x41afb8]=_0x19615b[_0x152022(0x19e)](_0x41afb8*0x4,!![]);_0x49a6f8[0xc]=_0x537bb6>>>0x0;const _0x33cecf=new DataView(_0x30bf19[_0x152022(0x3ee)],_0x30bf19[_0x152022(0x44a)],0xc);_0x49a6f8[0xd]=_0x33cecf[_0x152022(0x19e)](0x0,!![]),_0x49a6f8[0xe]=_0x33cecf[_0x152022(0x19e)](0x4,!![]),_0x49a6f8[0xf]=_0x33cecf['getUint32'](0x8,!![]);const _0x570ec7=_0x49a6f8[_0x152022(0x39d)](),_0x67f6c9=(_0x484617,_0x35d32b,_0x2a67e5,_0x55a014)=>{_0x570ec7[_0x484617]=_0x570ec7[_0x484617]+_0x570ec7[_0x35d32b]>>>0x0,_0x570ec7[_0x55a014]=rotl32(_0x570ec7[_0x55a014]^_0x570ec7[_0x484617],0x10),_0x570ec7[_0x2a67e5]=_0x570ec7[_0x2a67e5]+_0x570ec7[_0x55a014]>>>0x0,_0x570ec7[_0x35d32b]=rotl32(_0x570ec7[_0x35d32b]^_0x570ec7[_0x2a67e5],0xc),_0x570ec7[_0x484617]=_0x570ec7[_0x484617]+_0x570ec7[_0x35d32b]>>>0x0,_0x570ec7[_0x55a014]=rotl32(_0x570ec7[_0x55a014]^_0x570ec7[_0x484617],0x8),_0x570ec7[_0x2a67e5]=_0x570ec7[_0x2a67e5]+_0x570ec7[_0x55a014]>>>0x0,_0x570ec7[_0x35d32b]=rotl32(_0x570ec7[_0x35d32b]^_0x570ec7[_0x2a67e5],0x7);};for(let _0x4799f8=0x0;_0x4799f8<0xa;_0x4799f8++){_0x67f6c9(0x0,0x4,0x8,0xc),_0x67f6c9(0x1,0x5,0x9,0xd),_0x67f6c9(0x2,0x6,0xa,0xe),_0x67f6c9(0x3,0x7,0xb,0xf),_0x67f6c9(0x0,0x5,0xa,0xf),_0x67f6c9(0x1,0x6,0xb,0xc),_0x67f6c9(0x2,0x7,0x8,0xd),_0x67f6c9(0x3,0x4,0x9,0xe);}const _0x38805f=new Uint8Array(0x40),_0x3467aa=new DataView(_0x38805f[_0x152022(0x3ee)]);for(let _0x320dc1=0x0;_0x320dc1<0x10;_0x320dc1++){_0x570ec7[_0x320dc1]=_0x570ec7[_0x320dc1]+_0x49a6f8[_0x320dc1]>>>0x0,_0x3467aa[_0x152022(0x367)](_0x320dc1*0x4,_0x570ec7[_0x320dc1],!![]);}return _0x38805f;}function chacha20Xor(_0x3fad04,_0xb66aed,_0x11604f,_0x46a294){const _0x487734=a0_0x15be5e,_0x4f68ef=_0x46a294['slice'](),_0x41b87d=Math[_0x487734(0x2c7)](_0x46a294['length']/0x40);for(let _0x191a7f=0x0;_0x191a7f<_0x41b87d;_0x191a7f++){const _0x19728c=chacha20Block(_0x3fad04,_0x11604f+_0x191a7f,_0xb66aed),_0x162a04=_0x191a7f*0x40,_0x33ed1d=Math['min'](0x40,_0x4f68ef['length']-_0x162a04);for(let _0x501c2f=0x0;_0x501c2f<_0x33ed1d;_0x501c2f++)_0x4f68ef[_0x162a04+_0x501c2f]^=_0x19728c[_0x501c2f];}return _0x4f68ef;}function poly1305(_0x1d591c,_0x372e3f){const _0x83a205=a0_0x15be5e;let _0xcde7a8=0x0n,_0x3df9ac=0x0n;for(let _0x126eec=0x0;_0x126eec<0x10;_0x126eec++){_0xcde7a8|=BigInt(_0x1d591c[_0x126eec])<<BigInt(0x8*_0x126eec),_0x3df9ac|=BigInt(_0x1d591c[0x10+_0x126eec])<<BigInt(0x8*_0x126eec);}_0xcde7a8&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x1a00f2=0x0n;const _0x85c236=(0x1n<<0x82n)-0x5n;for(let _0x5a7bb6=0x0;_0x5a7bb6<_0x372e3f['length'];_0x5a7bb6+=0x10){const _0xbede1e=Math['min'](0x10,_0x372e3f[_0x83a205(0x2ca)]-_0x5a7bb6);let _0x510a6e=0x1n;for(let _0x22e285=_0xbede1e-0x1;_0x22e285>=0x0;_0x22e285--)_0x510a6e=_0x510a6e<<0x8n|BigInt(_0x372e3f[_0x5a7bb6+_0x22e285]);_0x1a00f2=(_0x1a00f2+_0x510a6e)*_0xcde7a8%_0x85c236;}_0x1a00f2=_0x1a00f2+_0x3df9ac&(0x1n<<0x80n)-0x1n;const _0x1faa16=new Uint8Array(0x10);for(let _0x2b7337=0x0;_0x2b7337<0x10;_0x2b7337++)_0x1faa16[_0x2b7337]=Number(_0x1a00f2>>BigInt(0x8*_0x2b7337)&0xffn);return _0x1faa16;}function chacha20Poly1305Seal(_0x2c5c0f,_0x2606a9,_0x409e6a,_0x379c9c){const _0x358a9b=a0_0x15be5e,_0x29af0b=_0x379c9c||new Uint8Array(0x0),_0x983d23=chacha20Xor(_0x2c5c0f,_0x2606a9,0x0,new Uint8Array(0x20)),_0x3650ce=chacha20Xor(_0x2c5c0f,_0x2606a9,0x1,_0x409e6a),_0x35dd1b=_0x4af93f=>new Uint8Array((0x10-_0x4af93f%0x10)%0x10),_0x3bcc46=_0x1a10af=>{const _0x5e41f8=a0_0xe43c,_0x4c4e56=new Uint8Array(0x8),_0x121876=new DataView(_0x4c4e56[_0x5e41f8(0x3ee)]);return _0x121876['setUint32'](0x0,_0x1a10af>>>0x0,!![]),_0x121876[_0x5e41f8(0x367)](0x4,Math[_0x5e41f8(0x4aa)](_0x1a10af/0x100000000),!![]),_0x4c4e56;},_0x188291=concatBytes(_0x29af0b,concatBytes(_0x35dd1b(_0x29af0b['length']),concatBytes(_0x3650ce,concatBytes(_0x35dd1b(_0x3650ce[_0x358a9b(0x2ca)]),concatBytes(_0x3bcc46(_0x29af0b[_0x358a9b(0x2ca)]),_0x3bcc46(_0x3650ce[_0x358a9b(0x2ca)])))))),_0x567f45=poly1305(_0x983d23,_0x188291);return concatBytes(_0x3650ce,_0x567f45);}function chacha20Poly1305Open(_0x5f3fd8,_0x339c04,_0x5aa6c8,_0x752cba){const _0x4c7ee5=a0_0x15be5e;if(_0x5aa6c8[_0x4c7ee5(0x2ca)]<0x10)throw new Error(_0x4c7ee5(0x417));const _0xd8293f=_0x5aa6c8[_0x4c7ee5(0x16c)](0x0,_0x5aa6c8[_0x4c7ee5(0x2ca)]-0x10),_0x311e5c=_0x5aa6c8[_0x4c7ee5(0x16c)](_0x5aa6c8[_0x4c7ee5(0x2ca)]-0x10),_0x245c0e=_0x752cba||new Uint8Array(0x0),_0x34f876=chacha20Xor(_0x5f3fd8,_0x339c04,0x0,new Uint8Array(0x20)),_0x5d77a7=_0x146b97=>new Uint8Array((0x10-_0x146b97%0x10)%0x10),_0x1f2257=_0x526452=>{const _0x4071e6=_0x4c7ee5,_0x86a198=new Uint8Array(0x8),_0x23a9e5=new DataView(_0x86a198[_0x4071e6(0x3ee)]);return _0x23a9e5[_0x4071e6(0x367)](0x0,_0x526452>>>0x0,!![]),_0x23a9e5[_0x4071e6(0x367)](0x4,Math[_0x4071e6(0x4aa)](_0x526452/0x100000000),!![]),_0x86a198;},_0x2ba5e7=concatBytes(_0x245c0e,concatBytes(_0x5d77a7(_0x245c0e[_0x4c7ee5(0x2ca)]),concatBytes(_0xd8293f,concatBytes(_0x5d77a7(_0xd8293f[_0x4c7ee5(0x2ca)]),concatBytes(_0x1f2257(_0x245c0e[_0x4c7ee5(0x2ca)]),_0x1f2257(_0xd8293f[_0x4c7ee5(0x2ca)])))))),_0x4c116d=poly1305(_0x34f876,_0x2ba5e7);let _0x384d74=0x0;for(let _0x2bbf16=0x0;_0x2bbf16<0x10;_0x2bbf16++)_0x384d74|=_0x4c116d[_0x2bbf16]^_0x311e5c[_0x2bbf16];if(_0x384d74!==0x0)return null;return chacha20Xor(_0x5f3fd8,_0x339c04,0x1,_0xd8293f);}async function newSsAead(_0x3011b2,_0x3df75d){const _0x259b1c=a0_0x15be5e,_0x4550e2=new Uint8Array(0xc),_0x50d9a8=()=>{const _0x403627=_0x4550e2['slice']();for(let _0x18eff4=0xb;_0x18eff4>=0x0;_0x18eff4--){_0x403627[_0x18eff4]++;if(_0x403627[_0x18eff4]!==0x0)break;}return _0x403627;};if(_0x3011b2===_0x259b1c(0x15b))return{'seal'(_0x3925e8){return chacha20Poly1305Seal(_0x3df75d,_0x50d9a8(),_0x3925e8);},'open'(_0x3ad463){const _0x2cffe3=_0x259b1c,_0x52827a=chacha20Poly1305Open(_0x3df75d,_0x50d9a8(),_0x3ad463);if(!_0x52827a)throw new Error(_0x2cffe3(0x362));return _0x52827a;}};const _0x3f3bb7=await crypto[_0x259b1c(0x330)][_0x259b1c(0x267)](_0x259b1c(0x1e4),_0x3df75d,{'name':_0x3011b2},![],[_0x259b1c(0x495),_0x259b1c(0x420)]);return{async 'seal'(_0x27bfe4){const _0x34f10d=_0x259b1c;return new Uint8Array(await crypto[_0x34f10d(0x330)]['encrypt']({'name':_0x3011b2,'iv':_0x50d9a8()},_0x3f3bb7,_0x27bfe4));},async 'open'(_0x3d0730){const _0x468428=_0x259b1c;try{return new Uint8Array(await crypto[_0x468428(0x330)][_0x468428(0x420)]({'name':_0x3011b2,'iv':_0x50d9a8()},_0x3f3bb7,_0x3d0730));}catch(_0x111346){throw new Error(_0x468428(0x362));}}};}async function ssSealChunk(_0x306340,_0x4178ed){const _0x3d5a9c=a0_0x15be5e,_0x8b2ea8=new Uint8Array([_0x4178ed[_0x3d5a9c(0x2ca)]>>0x8&0xff,_0x4178ed['length']&0xff]);return concatBytes(await _0x306340[_0x3d5a9c(0x454)](_0x8b2ea8),await _0x306340['seal'](_0x4178ed));}async function connectViaShadowsocks(_0xfa224a,_0x4d1bc7){const _0x30a332=a0_0x15be5e,_0x579af8=ssCipherAlgo(_0xfa224a[_0x30a332(0x374)]);if(!_0x579af8)throw new Error(_0x30a332(0x48d)+(_0xfa224a[_0x30a332(0x374)]||_0x30a332(0x465)));if(!_0xfa224a[_0x30a332(0x332)])throw new Error(_0x30a332(0x4a0));const _0x2370ba=await connectWithTimeout(_0xfa224a['host'],_0xfa224a['port'],0x1770),_0x1dcd75=_0x2370ba[_0x30a332(0x3f8)][_0x30a332(0x3d0)](),_0x2c6fa8=_0x2370ba[_0x30a332(0x1f0)][_0x30a332(0x24f)]();let _0x440752=new Uint8Array(0x0);const _0x10f71d=async _0x451f5f=>{const _0x4cd053=_0x30a332;while(_0x440752[_0x4cd053(0x2ca)]<_0x451f5f){const {done:_0x27978a,value:_0x155360}=await _0x2c6fa8['read']();if(_0x27978a)throw new Error(_0x4cd053(0x233));_0x440752=concatBytes(_0x440752,_0x155360);}const _0x1a5b67=_0x440752[_0x4cd053(0x39d)](0x0,_0x451f5f);return _0x440752=_0x440752[_0x4cd053(0x16c)](_0x451f5f),_0x1a5b67;},_0x1fc957=new Uint8Array(await crypto['subtle'][_0x30a332(0x40c)](_0x30a332(0x1f8),TE[_0x30a332(0x3c9)](_0xfa224a[_0x30a332(0x332)]))),_0x4c13e4=crypto['getRandomValues'](new Uint8Array(0x10)),_0x24c491=await newSsAead(_0x579af8[_0x30a332(0x423)],await hkdfSha1(_0x1fc957,_0x4c13e4,_0x579af8[_0x30a332(0x207)]));await _0x1dcd75['write'](_0x4c13e4),await _0x1dcd75['write'](await ssSealChunk(_0x24c491,new Uint8Array(0x0)));const _0xa6100d=new ReadableStream({async 'start'(_0x5db5b8){const _0x561591=_0x30a332;try{const _0xfe975=await _0x10f71d(0x10),_0x322ba0=await newSsAead(_0x579af8['name'],await hkdfSha1(_0x1fc957,_0xfe975,_0x579af8[_0x561591(0x207)]));while(!![]){const _0x2716bc=await _0x322ba0[_0x561591(0x340)](await _0x10f71d(0x12)),_0xea87bf=_0x2716bc[0x0]<<0x8|_0x2716bc[0x1];if(_0xea87bf>0x4000)throw new Error(_0x561591(0x172)+_0xea87bf);const _0x30dd72=await _0x322ba0[_0x561591(0x340)](await _0x10f71d(_0xea87bf+0x10));if(_0xea87bf>0x0)_0x5db5b8['enqueue'](_0x30dd72);}}catch(_0x452ed9){try{_0x5db5b8[_0x561591(0x2f2)](_0x452ed9);}catch(_0x1f146f){}}}}),_0x3c04a2=new WritableStream({async 'write'(_0x1eb183){const _0x171577=_0x30a332,_0x37e0bb=_0x1eb183 instanceof Uint8Array?_0x1eb183:new Uint8Array(_0x1eb183);for(let _0x35590e=0x0;_0x35590e<_0x37e0bb[_0x171577(0x2ca)];_0x35590e+=0x4000){await _0x1dcd75[_0x171577(0x271)](await ssSealChunk(_0x24c491,_0x37e0bb[_0x171577(0x16c)](_0x35590e,Math['min'](_0x37e0bb[_0x171577(0x2ca)],_0x35590e+0x4000))));}},'close'(){const _0x4b3982=_0x30a332;try{_0x1dcd75[_0x4b3982(0x428)]();}catch(_0x32657d){}},'abort'(){const _0x273b7f=_0x30a332;try{_0x1dcd75[_0x273b7f(0x34e)]();}catch(_0x10a01f){}}});return{'readable':_0xa6100d,'writable':_0x3c04a2,'close'(){const _0x2a40fe=_0x30a332;try{_0x2370ba[_0x2a40fe(0x428)]();}catch(_0x187cc7){}}};}async function readN(_0x2f44f8,_0x54693e){const _0xfc97c=a0_0x15be5e,_0x1789f4=new Uint8Array(_0x54693e);let _0x544223=0x0;while(_0x544223<_0x54693e){const {done:_0x154331,value:_0x4efd12}=await _0x2f44f8[_0xfc97c(0x26f)]();if(_0x154331)throw new Error(_0xfc97c(0x16f));const _0x4ca99b=_0x54693e-_0x544223;_0x1789f4[_0xfc97c(0x16b)](_0x4efd12['subarray'](0x0,Math['min'](_0x4ca99b,_0x4efd12[_0xfc97c(0x2ca)])),_0x544223),_0x544223+=Math['min'](_0x4ca99b,_0x4efd12['length']);}return _0x1789f4;}async function readUntilCRLFCRLF(_0x171619){const _0x3981a9=a0_0x15be5e;let _0x1de3f6=new Uint8Array(0x0);while(_0x1de3f6[_0x3981a9(0x2ca)]<0x10000){const {done:_0x24f96b,value:_0x30c722}=await _0x171619[_0x3981a9(0x26f)]();if(_0x24f96b)break;_0x1de3f6=concatBytes(_0x1de3f6,_0x30c722);const _0x439989=findBytes(_0x1de3f6,[0xd,0xa,0xd,0xa]);if(_0x439989>=0x0)return{'head':TD['decode'](_0x1de3f6[_0x3981a9(0x16c)](0x0,_0x439989)),'leftover':_0x1de3f6[_0x3981a9(0x16c)](_0x439989+0x4)};}return{'head':TD[_0x3981a9(0x312)](_0x1de3f6),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x5e6595,_0x14266c){const _0x264c9e=a0_0x15be5e,_0x1eecc3=new Uint8Array(_0x5e6595[_0x264c9e(0x2ca)]+_0x14266c['length']);return _0x1eecc3[_0x264c9e(0x16b)](_0x5e6595,0x0),_0x1eecc3[_0x264c9e(0x16b)](_0x14266c,_0x5e6595[_0x264c9e(0x2ca)]),_0x1eecc3;}function findBytes(_0x16e869,_0x76e290){const _0x279915=a0_0x15be5e;_0x38a5d1:for(let _0x56e4e5=0x0;_0x56e4e5<=_0x16e869[_0x279915(0x2ca)]-_0x76e290[_0x279915(0x2ca)];_0x56e4e5++){for(let _0x458a6c=0x0;_0x458a6c<_0x76e290[_0x279915(0x2ca)];_0x458a6c++)if(_0x16e869[_0x56e4e5+_0x458a6c]!==_0x76e290[_0x458a6c])continue _0x38a5d1;return _0x56e4e5;}return-0x1;}const RELAY_DOMAINS={'HK':a0_0x15be5e(0x32b),'US':a0_0x15be5e(0x19a),'SG':a0_0x15be5e(0x1d7),'JP':'proxyip.jp.cmliussss.net','KR':'proxyip.kr.cmliussss.net','DE':a0_0x15be5e(0x3b7),'SE':'proxyip.se.cmliussss.net','NL':a0_0x15be5e(0x16e),'FI':a0_0x15be5e(0x363),'GB':a0_0x15be5e(0x198),'Oracle':a0_0x15be5e(0x3a3),'DigitalOcean':'proxyip.digitalocean.cmliussss.net','Vultr':a0_0x15be5e(0x351),'Multacom':a0_0x15be5e(0x31a)};function selectRelayRegion(_0x6a4e22){const _0x12c479=a0_0x15be5e,_0x4cfac4=(_0x6a4e22||'')[_0x12c479(0x470)]();if(_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x1b3))||_0x4cfac4[_0x12c479(0x3c7)]('HK'))return'HK';if(_0x4cfac4['startsWith'](_0x12c479(0x3b5))||_0x4cfac4[_0x12c479(0x3c7)]('SG'))return'SG';if(_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x36d))||_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x4a1))||_0x4cfac4[_0x12c479(0x3c7)]('TYO')||_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x315))||_0x4cfac4['startsWith']('JP'))return'JP';if(_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x1af))||_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x3d4))||_0x4cfac4[_0x12c479(0x3c7)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/[_0x12c479(0x3fe)](_0x4cfac4))return'HK';if(_0x4cfac4['startsWith'](_0x12c479(0x17f))||_0x4cfac4[_0x12c479(0x3c7)]('BER')||_0x4cfac4[_0x12c479(0x3c7)]('MUC')||_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x3a8))||_0x4cfac4['startsWith'](_0x12c479(0x354))||_0x4cfac4[_0x12c479(0x3c7)](_0x12c479(0x3dd))||_0x4cfac4['startsWith']('DE'))return'DE';if(_0x4cfac4[_0x12c479(0x3c7)]('ARN')||_0x4cfac4[_0x12c479(0x3c7)]('SE'))return'SE';if(_0x4cfac4['startsWith'](_0x12c479(0x3d3))||_0x4cfac4[_0x12c479(0x3c7)]('NL'))return'NL';if(_0x4cfac4[_0x12c479(0x3c7)]('HEL')||_0x4cfac4[_0x12c479(0x3c7)]('FI'))return'FI';if(_0x4cfac4['startsWith'](_0x12c479(0x3ed))||_0x4cfac4[_0x12c479(0x3c7)]('MAN')||_0x4cfac4[_0x12c479(0x3c7)]('GB')||_0x4cfac4['startsWith']('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/[_0x12c479(0x3fe)](_0x4cfac4))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x582f7a,_0x17ef20){const _0x425ae4=a0_0x15be5e;_0x17ef20=_0x17ef20||0x1bb;if(isValidIp(_0x582f7a))return[{'hostname':_0x582f7a,'port':_0x17ef20}];const _0x43f9cb=_0x582f7a+':'+_0x17ef20,_0x31f112=Date['now'](),_0x3368a0=PROXYIP_CACHE[_0x425ae4(0x2bc)](_0x43f9cb);if(_0x3368a0&&_0x31f112-_0x3368a0['t']<0x5*0x3c*0x3e8)return _0x3368a0['ips'];const _0x52f05f=[_0x425ae4(0x165),_0x425ae4(0x36e),_0x425ae4(0x46c)],_0x498752=async(_0x250825,_0x46e125)=>{const _0x4dba40=_0x425ae4,_0x567e77=_0x52f05f['map'](async _0x4a5c9f=>{const _0x2ff557=a0_0xe43c,_0x1140ce=await fetchTimeout(_0x4a5c9f+_0x2ff557(0x3b4)+encodeURIComponent(_0x582f7a)+_0x2ff557(0x299)+_0x250825,{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x1140ce||!_0x1140ce['ok'])throw new Error(_0x2ff557(0x378));const _0x209dac=await _0x1140ce[_0x2ff557(0x291)]();return(_0x209dac['Answer']||[])[_0x2ff557(0x36f)](_0x29bc46=>_0x29bc46[_0x2ff557(0x238)]===_0x46e125)['map'](_0x2e613a=>_0x2e613a[_0x2ff557(0x3f1)]);});try{return await Promise[_0x4dba40(0x218)](_0x567e77);}catch(_0x46399c){return[];}},[_0x38d909,_0x55ba04]=await Promise[_0x425ae4(0x3f9)]([_0x498752(_0x425ae4(0x2cf),0x10),_0x498752('A',0x1)]);let _0x390720=[];for(const _0x16c683 of _0x38d909){const _0x15e037=String(_0x16c683)[_0x425ae4(0x33a)](/^"|"$/g,'')[_0x425ae4(0x33a)](/\\010/g,',')[_0x425ae4(0x33a)](/\n/g,',')[_0x425ae4(0x2ae)]();if(!_0x15e037)continue;if(_0x15e037===_0x425ae4(0x1a2)){_0x390720=_0x55ba04[_0x425ae4(0x36f)](_0x131248=>/^\d+\.\d+\.\d+\.\d+$/[_0x425ae4(0x3fe)](_0x131248))[_0x425ae4(0x2c2)](_0xa247cc=>({'hostname':_0xa247cc,'port':_0x17ef20}));break;}const _0x43377c=_0x15e037[_0x425ae4(0x1d9)](/[,;\s]+/)[_0x425ae4(0x2c2)](_0x308312=>_0x308312[_0x425ae4(0x2ae)]())[_0x425ae4(0x36f)](Boolean),_0x16332c=[];for(const _0x5eebd5 of _0x43377c){const {host:_0x5c46f4,port:_0x373d71}=parseHostPort(_0x5eebd5,_0x17ef20);if(isValidIp(_0x5c46f4))_0x16332c['push']({'hostname':_0x5c46f4,'port':_0x373d71});}if(_0x16332c[_0x425ae4(0x2ca)]){_0x390720=_0x16332c;break;}}!_0x390720[_0x425ae4(0x2ca)]&&(_0x390720=_0x55ba04[_0x425ae4(0x36f)](_0x3d6cb4=>/^\d+\.\d+\.\d+\.\d+$/[_0x425ae4(0x3fe)](_0x3d6cb4))[_0x425ae4(0x2c2)](_0x488fcb=>({'hostname':_0x488fcb,'port':_0x17ef20})));if(!_0x390720[_0x425ae4(0x2ca)]){const _0x109b0e=await _0x498752(_0x425ae4(0x251),0x1c);_0x390720=_0x109b0e['filter'](_0x4829b5=>isValidIp(_0x4829b5))[_0x425ae4(0x2c2)](_0x4885cb=>({'hostname':_0x4885cb,'port':_0x17ef20}));}const _0x4c8832=new Set(),_0x440200=_0x390720[_0x425ae4(0x36f)](_0x5788c9=>{const _0x1641e4=_0x425ae4,_0x5515b7=_0x5788c9['hostname']+':'+_0x5788c9[_0x1641e4(0x453)];if(_0x4c8832['has'](_0x5515b7))return![];return _0x4c8832[_0x1641e4(0x442)](_0x5515b7),!![];});if(_0x440200[_0x425ae4(0x2ca)])PROXYIP_CACHE[_0x425ae4(0x16b)](_0x43f9cb,{'t':_0x31f112,'ips':_0x440200});return _0x440200;}async function openOutbound(_0x1dc64c,_0x3ac961,_0x19ad46,_0x31b3ed){const _0x226d0c=a0_0x15be5e,_0x4e1a98=parseProxyAddress(_0x3ac961['outboundProxy']),_0x5f9807=_0x3ac961[_0x226d0c(0x1eb)]||'',_0x4f0058=_0x4e1a98?_0x4e1a98[_0x226d0c(0x238)]==='http'||_0x4e1a98[_0x226d0c(0x238)]===_0x226d0c(0x49d)?_0x122e42=>connectViaHttpProxy(_0x4e1a98,_0x122e42):_0x4e1a98[_0x226d0c(0x238)]==='ss'?_0x9df955=>connectViaShadowsocks(_0x4e1a98,_0x9df955):_0x10b405=>connectViaSocks5(_0x4e1a98,_0x10b405):null,_0x3d82f6=(_0x2417cf,_0x23de82)=>{const _0x4660b8=_0x226d0c,_0x1ac8bd=[];if(_0x5f9807===_0x4660b8(0x210))_0x1ac8bd[_0x4660b8(0x39b)](_0x4f0058?()=>_0x4f0058(_0x2417cf):()=>connectDirect(_0x2417cf,_0x23de82));else{if(_0x5f9807==='no'){_0x1ac8bd['push'](()=>connectDirect(_0x2417cf,_0x23de82));if(_0x4f0058)_0x1ac8bd[_0x4660b8(0x39b)](()=>_0x4f0058(_0x2417cf));}else{if(_0x4f0058)_0x1ac8bd[_0x4660b8(0x39b)](()=>_0x4f0058(_0x2417cf));_0x1ac8bd[_0x4660b8(0x39b)](()=>connectDirect(_0x2417cf,_0x23de82));}}return _0x1ac8bd;};let _0x20f3b4;const _0x238622=async(_0x433ab1,_0x24d39b)=>{for(const _0x5d65fb of _0x3d82f6(_0x433ab1,_0x24d39b)){try{return await _0x5d65fb();}catch(_0x14c74d){_0x20f3b4=_0x14c74d;}}return null;},_0x4954eb=_0x3ac961[_0x226d0c(0x20a)]?parseHostPort(_0x3ac961[_0x226d0c(0x20a)],0x1bb):null;if(_0x4954eb&&_0x4954eb[_0x226d0c(0x292)]){let _0x424af1=await resolveProxyIPs(_0x4954eb[_0x226d0c(0x292)],_0x4954eb['port']);if(!_0x424af1[_0x226d0c(0x2ca)])_0x424af1=[{'hostname':_0x4954eb[_0x226d0c(0x292)],'port':_0x4954eb[_0x226d0c(0x453)]}];for(const _0x5e4071 of _0x424af1){const _0x23cd70=await _0x238622(_0x5e4071,0x1770);if(_0x23cd70)return _0x23cd70;}}const _0x194b45=await _0x238622({'hostname':_0x1dc64c[_0x226d0c(0x2a8)],'port':_0x1dc64c[_0x226d0c(0x453)]},0x1770);if(_0x194b45)return _0x194b45;{const _0x2d13dc=selectRelayRegion(_0x19ad46),_0xac6920=[_0x2d13dc,...Object[_0x226d0c(0x28d)](RELAY_DOMAINS)['filter'](_0x1a12e9=>_0x1a12e9!==_0x2d13dc)][_0x226d0c(0x39d)](0x0,0x3);for(const _0x400cf5 of _0xac6920){const _0x207d5c=RELAY_DOMAINS[_0x400cf5];if(!_0x207d5c)continue;let _0x51e85c=[];try{_0x51e85c=await resolveProxyIPs(_0x207d5c,0x1bb);}catch(_0x4c730d){}if(!_0x51e85c['length'])continue;for(const _0x27ca80 of _0x51e85c){const _0x37c230=await _0x238622(_0x27ca80,0x1388);if(_0x37c230)return _0x37c230;}}}throw _0x20f3b4||new Error('所有出站方式均失败');}async function pumpToReader(_0x12093f,_0x188acc,_0x4db4be){const _0xc92703=a0_0x15be5e;try{while(!![]){const {done:_0x3b3cfa,value:_0x341fa4}=await _0x12093f[_0xc92703(0x26f)]();if(_0x3b3cfa)break;_0x188acc(_0x341fa4);}}catch(_0x4eb6e4){}try{if(_0x4db4be)_0x4db4be();}catch(_0x2aac51){}}async function handleWebSocketProxy(_0x18e3b3,_0x255247){const _0x455521=a0_0x15be5e,_0x4ac13d=new WebSocketPair(),[_0x278119,_0x8953b6]=Object['values'](_0x4ac13d);try{_0x8953b6[_0x455521(0x4a4)]({'allowHalfOpen':!![]});}catch(_0x1f6a9c){_0x8953b6[_0x455521(0x4a4)]();}_0x8953b6[_0x455521(0x185)]=_0x455521(0x466);let _0x15ea12=null,_0x14dd7e=null,_0x5dbcab=![],_0x105341=null;const _0x1e93fe=_0x509b93=>{const _0x3eaf79=_0x455521;try{_0x8953b6[_0x3eaf79(0x2fe)](_0x509b93);}catch(_0x21907a){}};_0x8953b6[_0x455521(0x436)](_0x455521(0x221),async _0x187877=>{const _0x47609a=_0x455521;try{const _0x1bd067=typeof _0x187877[_0x47609a(0x3f1)]===_0x47609a(0x415)?TE[_0x47609a(0x3c9)](_0x187877[_0x47609a(0x3f1)]):new Uint8Array(_0x187877[_0x47609a(0x3f1)]);if(!_0x5dbcab){_0x105341=_0x105341?concatBytes(_0x105341,_0x1bd067):_0x1bd067;let _0x38fec8,_0x3c8699;try{let _0x48f0d8=detectTrojan(_0x105341,_0x255247);if(!_0x48f0d8&&_0x105341[_0x47609a(0x432)]>0x0&&_0x105341[0x0]!==0x0&&_0x105341[_0x47609a(0x432)]<0x3a)return;_0x3c8699=!_0x48f0d8,_0x38fec8=_0x48f0d8?parseTrojanHeader(_0x105341):parseVlessHeader(_0x105341);}catch(_0x120b2b){if(/头部过短/[_0x47609a(0x3fe)](_0x120b2b[_0x47609a(0x221)]||''))return;throw _0x120b2b;}_0x5dbcab=!![];if(_0x38fec8[_0x47609a(0x49f)]===0x2){try{const _0x5f49e0=_0x105341[_0x47609a(0x16c)](_0x38fec8[_0x47609a(0x3bc)]);if(_0x38fec8[_0x47609a(0x453)]===0x35&&_0x5f49e0[_0x47609a(0x432)]>=0xc){const _0x2df514=await dnsToDoH(_0x5f49e0);if(_0x2df514)_0x1e93fe(_0x2df514);}}catch(_0x33c51e){}try{_0x8953b6[_0x47609a(0x428)](0x3e8);}catch(_0x4b493f){}return;}const _0x501b75=await openOutbound(_0x38fec8,_0x255247,_0x18e3b3['cf']&&_0x18e3b3['cf'][_0x47609a(0x35b)],_0x3c8699);_0x15ea12=_0x501b75,_0x14dd7e=_0x501b75[_0x47609a(0x3f8)][_0x47609a(0x3d0)]();if(_0x3c8699)_0x1e93fe(new Uint8Array([0x0,0x0]));if(_0x501b75[_0x47609a(0x226)]&&_0x501b75[_0x47609a(0x226)]['byteLength']>0x0)_0x1e93fe(_0x501b75[_0x47609a(0x226)]);if(_0x105341&&_0x105341[_0x47609a(0x432)]>_0x38fec8[_0x47609a(0x3bc)])await _0x14dd7e['write'](_0x105341[_0x47609a(0x16c)](_0x38fec8[_0x47609a(0x3bc)]));_0x105341=null,pumpToReader(_0x501b75['readable'][_0x47609a(0x24f)](),_0x1e93fe,()=>{const _0x300820=_0x47609a;try{_0x8953b6[_0x300820(0x428)](0x3e8);}catch(_0x56a3e7){}});}else{if(_0x14dd7e)await _0x14dd7e[_0x47609a(0x271)](_0x1bd067);else _0x105341=_0x105341?concatBytes(_0x105341,_0x1bd067):_0x1bd067;}}catch(_0x3b0582){try{_0x8953b6[_0x47609a(0x428)](0x3f3,String(_0x3b0582&&_0x3b0582[_0x47609a(0x221)]||_0x3b0582));}catch(_0x1cfe86){}}});const _0x59d856=()=>{if(_0x15ea12){try{_0x15ea12['close']();}catch(_0x47e579){}_0x15ea12=null;}};return _0x8953b6[_0x455521(0x436)](_0x455521(0x428),_0x59d856),_0x8953b6[_0x455521(0x436)]('error',_0x59d856),new Response(null,{'status':0x65,'webSocket':_0x278119});}async function handleXhttpProxy(_0x4012af,_0x109d3c){const _0x5b6ec4=a0_0x15be5e,_0x340cbc=_0x4012af[_0x5b6ec4(0x407)][_0x5b6ec4(0x24f)](),_0x57a1a8=await _0x340cbc[_0x5b6ec4(0x26f)]();if(_0x57a1a8[_0x5b6ec4(0x38f)])return new Response(_0x5b6ec4(0x480),{'status':0x190});const _0x28c282=parseVlessHeader(_0x57a1a8[_0x5b6ec4(0x383)]),_0x4cd8db=await openOutbound(_0x28c282,_0x109d3c,_0x4012af['cf']&&_0x4012af['cf'][_0x5b6ec4(0x35b)],!![]),_0x2eb2dc=_0x4cd8db['writable'][_0x5b6ec4(0x3d0)]();await _0x2eb2dc[_0x5b6ec4(0x271)](_0x57a1a8[_0x5b6ec4(0x383)][_0x5b6ec4(0x16c)](_0x28c282[_0x5b6ec4(0x3bc)])),((async()=>{const _0x20ee41=_0x5b6ec4;try{while(!![]){const {done:_0xcc2126,value:_0x92762}=await _0x340cbc[_0x20ee41(0x26f)]();if(_0xcc2126)break;await _0x2eb2dc[_0x20ee41(0x271)](_0x92762);}}catch(_0x2a0218){}try{await _0x2eb2dc[_0x20ee41(0x428)]();}catch(_0x7a544b){}})());const _0x138664=new ReadableStream({async 'start'(_0x72ed84){const _0xdfc3e3=_0x5b6ec4;_0x72ed84[_0xdfc3e3(0x3b1)](new Uint8Array([0x0,0x0]));if(_0x4cd8db['_preamble']&&_0x4cd8db[_0xdfc3e3(0x226)]['byteLength']>0x0)_0x72ed84[_0xdfc3e3(0x3b1)](_0x4cd8db[_0xdfc3e3(0x226)]);const _0x15c24b=_0x4cd8db[_0xdfc3e3(0x1f0)][_0xdfc3e3(0x24f)]();try{while(!![]){const {done:_0x5da1ca,value:_0x49a707}=await _0x15c24b[_0xdfc3e3(0x26f)]();if(_0x5da1ca)break;_0x72ed84[_0xdfc3e3(0x3b1)](_0x49a707);}}catch(_0x145285){}try{_0x72ed84[_0xdfc3e3(0x428)]();}catch(_0x29b184){}try{_0x4cd8db['close']();}catch(_0x535718){}},'cancel'(){try{_0x4cd8db['close']();}catch(_0x4de413){}}});return new Response(_0x138664,{'status':0xc8,'headers':{'content-type':'application/octet-stream','x-accel-buffering':'no','cache-control':_0x5b6ec4(0x441)}});}function decodeUtf8OrGbk(_0x1e0ae6){const _0x18aee1=a0_0x15be5e,_0x452226=_0x1e0ae6 instanceof Uint8Array?_0x1e0ae6:new Uint8Array(_0x1e0ae6);try{return new TextDecoder(_0x18aee1(0x2df),{'fatal':!![]})[_0x18aee1(0x312)](_0x452226);}catch(_0x1e94cf){}try{return new TextDecoder('gbk')[_0x18aee1(0x312)](_0x452226);}catch(_0x2a3c6c){}return new TextDecoder()[_0x18aee1(0x312)](_0x452226);}function extractCandidates(_0x952412){const _0x269567=a0_0x15be5e,_0x31e2bc=new Set(),_0x13ca09=[],_0x31f44e=(_0x4096a0,_0x3882c0,_0x15a578)=>{const _0x1285d1=a0_0xe43c;if(!isValidIp(_0x4096a0))return;if(_0x31e2bc[_0x1285d1(0x27d)](_0x4096a0))return;_0x31e2bc[_0x1285d1(0x442)](_0x4096a0),_0x13ca09[_0x1285d1(0x39b)]({'ip':_0x4096a0,'port':_0x3882c0||0x1bb,'name':_0x15a578||''});};parseIPList(_0x952412)[_0x269567(0x197)](_0x3b3e89=>_0x31f44e(_0x3b3e89['ip'],_0x3b3e89[_0x269567(0x453)],_0x3b3e89[_0x269567(0x423)]));const _0x348c18=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x3ffb52;while(_0x3ffb52=_0x348c18[_0x269567(0x170)](_0x952412)){const {host:_0x508d07,port:_0x6b164d}=parseHostPort(_0x3ffb52[0x0],0x1bb);if(_0x508d07)_0x31f44e(_0x508d07,_0x6b164d,'');}const _0x1fc0e3=/[0-9a-fA-F:]+/g;while(_0x3ffb52=_0x1fc0e3[_0x269567(0x170)](_0x952412)){const _0x9594d0=_0x3ffb52[0x0];if(_0x9594d0[_0x269567(0x2ad)](':')&&_0x9594d0[_0x269567(0x1d9)](':')['length']>=0x3&&isValidIp(_0x9594d0))_0x31f44e(_0x9594d0,0x1bb,'');}return _0x13ca09;}function extractDomains(_0x2c620b){const _0x2787d7=a0_0x15be5e,_0x225890=new Set(),_0x428799=[],_0x170222=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x261be6;while(_0x261be6=_0x170222[_0x2787d7(0x170)](_0x2c620b)){const _0x158194=_0x261be6[0x0][_0x2787d7(0x278)]();!_0x225890[_0x2787d7(0x27d)](_0x158194)&&(_0x158194['includes'](_0x2787d7(0x355))||_0x158194['includes'](_0x2787d7(0x404))||_0x158194[_0x2787d7(0x2ad)](_0x2787d7(0x2cd))||_0x158194[_0x2787d7(0x2ad)](_0x2787d7(0x348))||_0x158194['endsWith']('.xyz')||_0x158194[_0x2787d7(0x2a9)](_0x2787d7(0x361)))&&(_0x225890[_0x2787d7(0x442)](_0x158194),_0x428799[_0x2787d7(0x39b)](_0x158194));}return _0x428799['slice'](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x24914f){const _0x5ce50b=a0_0x15be5e;_0x24914f=Math[_0x5ce50b(0x43f)](0x1,parseInt(_0x24914f)||0x96);if(Date[_0x5ce50b(0x250)]()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE[_0x5ce50b(0x27e)];const _0x4159af=await fetchTimeout(_0x5ce50b(0x32c),{'headers':{'User-Agent':_0x5ce50b(0x2e4)}},0x1770);if(_0x4159af&&_0x4159af['ok']){const _0x257c44=extractCandidates(await _0x4159af['text']())['filter'](_0x5d721d=>_0x5d721d['ip']&&isCloudflareIP(_0x5d721d['ip'])),_0x2daeee=new Set(),_0x1b547c=[];for(const _0x5b2026 of _0x257c44){if(_0x2daeee[_0x5ce50b(0x27d)](_0x5b2026['ip']))continue;_0x2daeee[_0x5ce50b(0x442)](_0x5b2026['ip']),_0x1b547c[_0x5ce50b(0x39b)](_0x5b2026);if(_0x1b547c[_0x5ce50b(0x2ca)]>=_0x24914f)break;}return SUBPREF_CACHE['t']=Date['now'](),SUBPREF_CACHE[_0x5ce50b(0x27e)]=_0x1b547c,_0x1b547c;}return null;}async function collectCandidates(_0x47e301){const _0x3cea24=a0_0x15be5e;_0x47e301=_0x47e301||{};const _0x471f3e=[],_0xdd10e4={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x2a2965=_0x308d4d=>{const _0x11e0b8=a0_0xe43c;if(_0x308d4d&&_0x308d4d['ip']&&isCloudflareIP(_0x308d4d['ip']))_0x471f3e[_0x11e0b8(0x39b)]({'ip':_0x308d4d['ip'],'port':_0x47e301[_0x11e0b8(0x453)]||_0x308d4d['port']||0x1bb,'name':_0x308d4d[_0x11e0b8(0x423)]||''});};if(_0x47e301[_0x3cea24(0x28b)]&&OPTIMIZE_SOURCES[_0x47e301[_0x3cea24(0x28b)]]){const _0x5be139=await fetchTimeout(OPTIMIZE_SOURCES[_0x47e301['source']][_0x3cea24(0x396)],{'headers':{'User-Agent':_0x3cea24(0x2e4)}},0x1770);if(_0x5be139&&_0x5be139['ok']){const _0x2a614a=extractCandidates(await _0x5be139[_0x3cea24(0x42e)]());_0x2a614a[_0x3cea24(0x197)](_0x2a2965),_0xdd10e4[_0x3cea24(0x4a3)]=_0x2a614a[_0x3cea24(0x2ca)];}else _0xdd10e4['presetErr']=_0x5be139?'HTTP\x20'+_0x5be139[_0x3cea24(0x298)]:_0x3cea24(0x28f);}if(_0x47e301[_0x3cea24(0x31c)]){const _0x54486d=await fetchTimeout(_0x47e301['sourceURL'],{'headers':{'User-Agent':_0x3cea24(0x2e4)}},0x1770);if(_0x54486d&&_0x54486d['ok']){const _0x366c4d=extractCandidates(await _0x54486d[_0x3cea24(0x42e)]());_0x366c4d[_0x3cea24(0x197)](_0x2a2965),_0xdd10e4[_0x3cea24(0x310)]=_0x366c4d[_0x3cea24(0x2ca)];}else _0xdd10e4[_0x3cea24(0x460)]=_0x54486d?_0x3cea24(0x249)+_0x54486d[_0x3cea24(0x298)]:_0x3cea24(0x28f);}const _0x2aae6c=new Set(),_0x405fcd=[];for(const _0x2b6bd5 of _0x471f3e){if(_0x2aae6c['has'](_0x2b6bd5['ip']))continue;_0x2aae6c[_0x3cea24(0x442)](_0x2b6bd5['ip']),_0x405fcd[_0x3cea24(0x39b)](_0x2b6bd5);}if(_0x405fcd[_0x3cea24(0x2ca)]<(_0x47e301[_0x3cea24(0x189)]||0x14)){let _0x31b5b9=(_0x47e301[_0x3cea24(0x189)]||0x14)-_0x405fcd[_0x3cea24(0x2ca)];try{const _0x37d443=await fetchBestcfPool();for(const _0x2724a1 of _0x37d443){if(_0x31b5b9<=0x0)break;if(_0x2aae6c['has'](_0x2724a1['ip']))continue;if(!isCloudflareIP(_0x2724a1['ip']))continue;_0x2aae6c[_0x3cea24(0x442)](_0x2724a1['ip']),_0x405fcd['push']({'ip':_0x2724a1['ip'],'port':_0x47e301[_0x3cea24(0x453)]||_0x2724a1[_0x3cea24(0x453)]||0x1bb,'name':_0x2724a1['name']||''}),_0x31b5b9--;}}catch(_0x4d3783){}_0xdd10e4['bestcf']=(_0x47e301[_0x3cea24(0x189)]||0x14)-_0x405fcd[_0x3cea24(0x2ca)]-_0x31b5b9;}if(_0x47e301[_0x3cea24(0x2cc)]!==![]&&_0x405fcd[_0x3cea24(0x2ca)]<(_0x47e301[_0x3cea24(0x189)]||0x14)){const _0x5e2867=(_0x47e301[_0x3cea24(0x189)]||0x14)-_0x405fcd[_0x3cea24(0x2ca)],_0x13b54b=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x5e2867*0x3);let _0x3a04a4=0x0;for(const _0x4054d8 of _0x13b54b){if(_0x3a04a4>=_0x5e2867)break;if(_0x2aae6c[_0x3cea24(0x27d)](_0x4054d8))continue;_0x2aae6c[_0x3cea24(0x442)](_0x4054d8),_0x405fcd[_0x3cea24(0x39b)]({'ip':_0x4054d8,'port':_0x47e301[_0x3cea24(0x453)]||0x1bb,'name':''}),_0x3a04a4++;}_0xdd10e4[_0x3cea24(0x20e)]=_0x3a04a4;}return{'candidates':_0x405fcd,'stats':_0xdd10e4};}function testOneLatency(_0x51add2,_0x1bb9e3,_0x3e1ea1){return new Promise(_0x47d9b9=>{const _0x280dfa=a0_0xe43c,_0x38936c=Date[_0x280dfa(0x250)]();let _0xccede2,_0x5ea4ff=![];const _0x4063ff=(_0x305f9b,_0x411579)=>{if(_0x5ea4ff)return;_0x5ea4ff=!![],clearTimeout(_0x5a6683);try{if(_0xccede2)_0xccede2['close']();}catch(_0x4fb678){}_0x47d9b9({'ip':_0x51add2,'port':_0x1bb9e3,'ok':_0x305f9b,'latency':_0x411579});},_0x5a6683=setTimeout(()=>_0x4063ff(![],-0x1),_0x3e1ea1);try{_0xccede2=connect({'hostname':_0x51add2,'port':_0x1bb9e3});}catch(_0xb8f4a){return _0x4063ff(![],-0x1);}_0xccede2[_0x280dfa(0x168)][_0x280dfa(0x32e)](()=>_0x4063ff(!![],Date[_0x280dfa(0x250)]()-_0x38936c))[_0x280dfa(0x200)](()=>_0x4063ff(![],-0x1));});}async function runLatencyTest(_0x4b1b14,_0x1d17f5,_0x16143f){const _0x2b8d0f=a0_0x15be5e;_0x1d17f5=Math[_0x2b8d0f(0x43f)](0x1,Math['min'](0x32,Number(_0x1d17f5)||0x5)),_0x16143f=Math['max'](0x1f4,Number(_0x16143f)||0x1388);const _0x3b0b1b=[];let _0x558430=0x0;async function _0xd950aa(){const _0x3556fa=_0x2b8d0f;while(_0x558430<_0x4b1b14['length']){const _0x2ec846=_0x4b1b14[_0x558430++],_0x402cb5=await testOneLatency(_0x2ec846['ip'],_0x2ec846[_0x3556fa(0x453)],_0x16143f);_0x3b0b1b[_0x3556fa(0x39b)](_0x402cb5);}}return await Promise[_0x2b8d0f(0x3f9)](Array[_0x2b8d0f(0x35a)]({'length':_0x1d17f5},_0xd950aa)),_0x3b0b1b[_0x2b8d0f(0x29b)]((_0x22e827,_0x25a791)=>(_0x22e827[_0x2b8d0f(0x337)]<0x0?0x3b9aca00:_0x22e827['latency'])-(_0x25a791['latency']<0x0?0x3b9aca00:_0x25a791['latency'])),_0x3b0b1b;}function xhttpPadding(_0x15a595){const _0x2fae8d=a0_0x15be5e,_0x4987ab=_0x15a595['uuid']||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':'tokenish','xPaddingPlacement':'queryInHeader','xPaddingHeader':_0x4987ab['slice'](0x1,0x7),'xPaddingKey':'_'+_0x4987ab[_0x2fae8d(0x39d)](0x19,0x1f)};}function uriFragName(_0xf4bb12){const _0x45ad29=a0_0x15be5e;return String(_0xf4bb12)['replace'](/%/g,_0x45ad29(0x37f))[_0x45ad29(0x33a)](/#/g,_0x45ad29(0x205))['replace'](/\?/g,_0x45ad29(0x483))[_0x45ad29(0x33a)](/ /g,_0x45ad29(0x1a0));}function vlessNode(_0x305ed1,_0x33487a,_0x3d08de,_0x5078aa,_0x944f39={}){const _0x4e632e=a0_0x15be5e,_0x1e5999=_0x305ed1[_0x4e632e(0x292)],_0x5a25fe=_0x33487a['includes'](':')&&!_0x33487a[_0x4e632e(0x3c7)]('[')?'['+_0x33487a+']':_0x33487a,_0x12687b=!HTTP_PORTS[_0x4e632e(0x27d)](Number(_0x3d08de)),_0x8509fe=encodeURIComponent;let _0x4d9320='encryption=none';if(_0x12687b)_0x4d9320+=_0x4e632e(0x204)+_0x8509fe(_0x1e5999)+_0x4e632e(0x1dc);else _0x4d9320+=_0x4e632e(0x2d3);_0x4d9320+='&host='+_0x8509fe(_0x1e5999);if(_0x944f39[_0x4e632e(0x238)]==='xhttp'&&_0x12687b)_0x4d9320+='&type=xhttp&mode=stream-one',_0x4d9320+=_0x4e632e(0x24e)+_0x8509fe(JSON['stringify'](xhttpPadding(_0x305ed1)));else _0x4d9320+=_0x4e632e(0x45b);_0x4d9320+=_0x4e632e(0x403)+_0x8509fe('/'+_0x305ed1[_0x4e632e(0x45d)]);if(_0x305ed1[_0x4e632e(0x449)])_0x4d9320+=_0x4e632e(0x321)+_0x8509fe(_0x305ed1['alpn']);return _0x305ed1['ech']&&(_0x4d9320+='&ech='+_0x8509fe((_0x305ed1[_0x4e632e(0x467)]||_0x4e632e(0x416))+'+'+(_0x305ed1['echDns']||'https://223.5.5.5/dns-query'))),_0x4e632e(0x282)+_0x305ed1['uuid']+'@'+_0x5a25fe+':'+_0x3d08de+'?'+_0x4d9320+'#'+uriFragName(_0x5078aa);}function a0_0x1274(){const _0x1b8861=['EgH0Dha','C2vJDxjPDhK','mta0lJe3lJi0ns4YmZCJ5lYy6ycjsvaTmJiX','DxrMltG','Bw96AwXSyq','z2vVC2L0zs1HChbSzq','5B6U5Rwl572rios8MoMaIEwFN+wqJq','mta0lJi1lJe5mY4XmZuJ5lYy6ycjsvaTmtiW','tw96AwXSys81lJa','Bwf0y2G','z2v0vwLUDdG','CgfYC2u','ue9tva','mtCZlJi0ns40oc4WlZiW','5AwL5zYW5yIP','mtyYlJe1os4Xnc4XocpKVjJPGiLjuc0XmZy','Cg9SBgLUzW','mta0lJe4lJqZlJiYncpKVjJPGiLjuc0WmJi','mta0lJi1lJKZlJe1ncpKVjJPGiLjuc0XmJy','uefjq05jl0ngtMv4Da','y2zPCc4XmZiZmtiZlNH5EG','CM91BMq','zxjYB3i','q0yGqvbjieHuvfaG','C3rYAw5NAwz5','5Pon5l2C6lAf5PE2','mta0lJi3lJqUmtq0i+s8MoMaIuLqlteYnq','cGPBuNvSzv0kr0vpsvaSq04SreLsrunucKzjtKfmlpcFKj8G5RYp572r5lMl6Bg8cG','mtCYlJy3lJeYnY4XmJiJ5lYy6ycjsvaTmJm3','mJqWntPIntaWoJOVmZi','D3nZ','mta0lJe2lJiWms40nspKVjJPGiLjuc0XnJa','y2zbCgLuB2TLBG','mta0lJe5lJe5ms4Zmq','C2vUza','mta0lJiXlJyXlJe3ospKVjJPGiLjuc0WnZG','C3jJ','u09ds1m1ioI/NUAoPEwKSEI0PsdNOie','mtyYlJe1os41lJe3nspKVjJPGiLjuc0Wmtu','mtyYlJe1os4XmZqUmtC0i+s8MoMaIuLqltiYnW','mtG4lJeXnc45os41mIpKVjJPGiLjuc0Wmtm','Ahr0Chm6lY84lJGUoc44l2rUCY1XDwvYEq','qKvtveLqx0fvve8','mta0lJe4lJeXos4ZncpKVjJPGiLjuc0Wmty','Ec1WywrKAw5Nlw9IzNmTBw9Kzq','Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04','lcb3CY1OzwfKzxjZpuHVC3q6','C2vJDxjPDhK9BM9UzszOB3n0pq','lcb1C2vYBMfTzt0','D3D3lMnSB3vKzMXHCMuUy29T','mMmWzJPMmJq4oJOVmZi','mta0lJe2lJeYnI45nIpKVjJPGiLjuc0Wmdu','y3vZDg9T','mta0lJe2lJeYnY45nIpKVjJPGiLjuc0Wmdy','zgvJB2rL','q29VA2LL','zgvSzxrL','t1nb','5lMm5ywl5ywW','qMvHCMvYia','zg5Z','mta0lJi1lJeXmY4YmIpKVjJPGiLjuc0Yndm','ChjVEhLPCc5TDwX0ywnVBs5JBwXPDxnZC3mUBMv0','x3nRAxbjC3n1zwq','C291CMnLvvjm','y29Kzq','mta0lJe2lJy2lJC','mMeWnJO5ogmWoJOVmJK','mta0lJiXlJiYnc41i+s8MoMaIuLqlte5nW','jMfSCg49','mta0lJi1lJe5nY4XmdCJ5lYy6ycjsvaTmta1','mta0lJe2lJeYnc45nIpKVjJPGiLjuc0Wmdm','Ec1WywrKAw5NlwHLywrLCG','mta0lJe4lJqXlJe2ocpKVjJPGiLjuc0YmZe','mta0lJe3lJeXoc4XodaJ5lYy6ycjsvaTmdKW','icaGigfSCg46ifTOmL0','54IX5Bcu5ywW','mtyYlJe1os4Xmc4YndmJ5lYy6ycjsvaTmJGX','Aw5KzxHpzG','ChjVEhLPCc5OAY5JBwXPDxnZC3mUBMv0','Ahr0Chm6lY9ZDg9JAY5OB3n0Bw9UAxqUy29Tl0nSB3vKrMXHCMvzzxm','icaGicaGEc1WywrKAw5NlxbSywnLBwvUDdOG','DgHLBG','mtG4lJeXnc45nI4WlZiW','C3vIDgXL','C3vIoI8V','CgfZC3DVCMq','5RkH5PYj5y+V5Rwl55QeieLq','8j+KLIbpCgvUquK','mta0lJe3lJe5ns4XodqJ5lYy6ycjsvaTmtm1','mta0lJi1lJeYnc4XntuJ5lYy6ycjsvaTmtCW','Bgf0zw5JEq','AhjLzG','zMLSBa','CMvWBgfJzq','dqPvC2vYlufNzw50oIbnB3PPBgXHlZuUma0kq29UBMvJDgLVBJOGy2XVC2uncG0k','zwnO','A2LUza','mta0lJe3lJi1lJe3mYpKVjJPGiLjuc0XnJC','mta0lJe5lJmYlJiYmcpKVjJPGiLjuc0Xoti','B3bLBG','uhjVEhKTqxv0Ag9YAxPHDgLVBJOGqMfZAwmG','mtCYlJy1lJm1lJe2ospKVjJPGiLjuc0Woti','mta0lJe3lJiUnW','mtCYlJy0lJaUmc8XmW','mta0lJi1lJe3mY4XncpKVjJPGiLjuc0YnZm','C3rHDhm','mtG4lJeXnc45nY41mIpKVjJPGiLjuc0XmJq','mdKWmJi3','zNjHz21LBNq','Ahr0Chm6lY93D3CUD2v0zxn0lNzPCc9WywDLl2nSB3vKzMXHCMuVywrKCMvZC192nI5ODg1S','ChjLzMvYCMvKsvbZ','y2yUmhnTlMnVBq','mta0lJe4lJi1ns4XodCJ5lYy6ycjsvaTmduW','ywjVCNq','DhjVAMfUpq','C29Tzq','ChjVEhLPCc52DwX0CI5JBwXPDxnZC3mUBMv0','yMvZDgnMlNrVCa','mtG4lJeXnc45os4XmtqJ5lYy6ycjsvaTmdyW','sefn','y2XVDwrMBgfYzq','mtyYlJe1os40mY4YmJmJ5lYy6ycjsvaTmtK2','mta0lJi0lJq2lJeWnYpKVjJPGiLjuc0YnZq','mta0lJe2lJiXoc4YmZeJ5lYy6ycjsvaTmtu1','5AkO6kw/5zoL','zNjVBq','y29SBW','C2vSzwn0B3i','Dg9KyxK','mta0lJiXlJiZlJe','mta0lJi1lJaUmq','EgH0DhaG5lUJ55cg6zsz6k+VoIa','lNrVCa','u1mGquvbrcdOP6pLR4BLPlhOTkxVViJLR4BNOieV5yQG5A+g5PA55BYp5lIo5PYn5yQH5zMO5lIn5yY56ywn77Yj','ChjVEhLPCc5MAs5JBwXPDxnZC3mUBMv0','BMf0AxzL','mta0lJi1lJeYmI42i+s8MoMaIuLqlta1mW','sfruucdKU6pNKiyGq09otKvdvcdLPlhOTku6ia','C2v0vwLUDdmY','mtCYlJy3lJe3nc4XndmJ5lYy6ycjsvaTmtC2','mta0lJe3lJaUncpKVjJPGiLjuc0YmZq','mtyYlJe1os4YmZuUmJCJ5lYy6ycjsvaTmdCY','BgLTAxq','y2XVDwrMBgfYzs1PCc5TB2zHC2HPlMX0za','tLju','Ahr0Chm6lY9KBNmUywXPzg5ZlMnVBs9YzxnVBhzL','zMLSDgvY','lcbVyMzZpq','5PAW6kw/5ywW','Ahr0Chm6lY9JBg91zgzSyxjLlwrUCY5JB20Vzg5Zlxf1zxj5p25HBwu9','icaGihnLCNzLCJOG','Bwv0Ag9K','mta0lJi0lJe3oc4YmdaJ5lYy6ycjsvaTmJeW','CgfKu3rHCNq','C2v0vwLUDde2','zg9OigzHAwW','zgLYzwn0','5lYy6ycjsvaT','mta0lJe2lJeYmY4YnIpKVjJPGiLjuc0XndK','icaGigfSCg46ifTODhrWlZeUmv0','BNvTyMvY','tw96AwXSys81lJaGkengtMv4DcK','jti1','Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LDgfdDwjLwc9TzxrHlxj1BgvZlwrHDc9TzxrHl2DLBY8','BgLZDa','mtyYlJe1os4YmJGUmJmXi+s8MoMaIuLqlti2ma','DMfSDwu','zMLUza','mtyYlJe1os4XotGUmJaWi+s8MoMaIuLqlti0nq','mJyWnJO0nZaWoJOVmZi','BwL4zwqTAw4','mta0lJi3lJK0lJiZmspKVjJPGiLjuc0XmJK','mtCYlJy3lJe4os4YndyJ5lYy6ycjsvaTmte1','mtKWlJKZlJi0mc4WlZiW','mtCYlJy1lJy0lJCJ5lYy6ycjsvaTmdm3','z2vVC2L0zs15B3v0DwjL','z2vVC2L0zs10D2L0DgvY','Ahr0Chm6lY93D3CUy2XVDwrMBgfYzs5JB20VAxbZlxy2lW','zg9Uzq','C3bLzwqUBwfYAxnHBg5JlMnVBq','mta0lJe4lJqWlJKZi+s8MoMaIuLqltaYmW','mtyYlJe1os40mY44nspKVjJPGiLjuc0Yotm','mtmXlJaUnZiUmc8YmG','mta0lJe2lJiZoc45ocpKVjJPGiLjuc0Wotq','y25HBwuUEgLYyw5Jzg4UDxm','DxjS','mta0lJi0lJe4nc4XntGJ5lYy6ycjsvaTmtiZ','svb2nG','lcbVyMzZlwHVC3q9','y2XVDwrMBgfYzs45ANKUy2m','ChvZAa','CxvHBNr1BxvSDa','C2XPy2u','mtCYlJy2lJe2ms4ZmspKVjJPGiLjuc0Wodq','y2HHCKnVzgvbDa','mI4WlJa','C2LUzY1IB3G','mtyYlJe1os40nc4YmtqJ5lYy6ycjsvaTmdmY','ChjVEhLPCc5VCMfJBguUy21SAxvZC3nZlM5LDa','mtyYlJe1os4XmJGUmq','mta0lJi0lJe4lJyYi+s8MoMaIuLqlti4oq','EfbHzgrPBMDnzxrOB2q','mtyYlJe1oc4WlJaVmtu','rfvt','ndi5','C3vT','u2vJlvDLyLnVy2TLDc1qCM90B2nVBa','Dw5RBM93BG','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','y2yUodC3nZCXlNH5EG','zNjLzxL4lMnSB3vKzMXHCMu4oc5LDs5VCMC','mtG4lJeXnc45nI4YmZGJ5lYy6ycjsvaTmJy5','zw5XDwv1zq','mta0lJi0lJe1ns4YmZqJ5lYy6ycjsvaTmdCW','mta0lJi3lJeXmY4XnteJ5lYy6ycjsvaTmtaX','p25HBwu9','u0Lo','5PwW5O2U5lIT5B+d','ChjVEhLPCc5Kzs5JBwXPDxnZC3mUBMv0','mta0lJe3lJe2mc4XmZeJ5lYy6ycjsvaTmtK0','5lYy6ycjieLqiowiL+IHQa','DhjVAMfUugfZC3DVCMq','8j+oRYdLHAJNKipNM7tOV54','AgvHzgvYtgvUz3rO','cVcFJjaG5ywO55cd55U06l+Eid0GC2vSzwn0lcbesvjfq1qk8j+qNYdMVi/NVzhKUyVPSBWGpsbZzwXLy3qSipcFMOaG6iQc54k56ycj5OUPcGPBuNvSzv0kr0vpsvaSq04SreLsrunucKzjtKfmlpcFKj8G5RYp572r5lMl6Bg8cG','ywvZlteYoc1Ny20','EfbHzgrPBMDpyMzZtw9Kzq','mtCYlJy0lJm0lJeWospKVjJPGiLjuc0WodC','se9tva','mtCYlJy0lJe0nc40ospKVjJPGiLjuc0WmJC','mtCYlJy3lJCYlJq','mta0lJi0lJaUmc8Xna','lcb3CZ10CNvLlcb3CY1WyxrOpq','mtCYlJy3lJGYlJG2i+s8MoMaIuLqlte2mG','C3rHCNrZv2L0Aa','nJeZovb3ufbLtG','zw5JB2rL','mtG4lJeXnc45nI45ncpKVjJPGiLjuc0Xmdq','y29UzMLN','yMXVy2S','mta0lJi0lJiUmJuZi+s8MoMaIuLqlta3nW','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24Vu0CVmtaWlNr4Da','zxH0CMe','z2v0v3jPDgvY','yxr0ywnOBwvUDdSGzMLSzw5HBwu9iKngtMv4Dci7igzPBgvUyw1LkJ11DgyTocCNq0zozxH0','mtG4lJeXnc45os4XntuJ5lYy6ycjsvaTmdG2','qu1t','u0vm','AM9PBG','mta0lJe5lJGZlJmZi+s8MoMaIuLqlti2oa','5yYi54Mz5yIP','y2zPCc5JzMnKBI52Axa','qurnsu4','lcbVyMzZpxDZCYWGB2jMCY1OB3n0pq','C3vIuMfUzg9Tq291BNq','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24Vs1iVmtaWlNr4Da','u1rs','icaGig5LDhDVCMS6ia','mtCYlJy1lJC4lJiWmcpKVjJPGiLjuc0Yodm','mta0lJi0lJi0nc4YmZCJ5lYy6ycjsvaTmdC1','mta0lJi3lJqWlJGXi+s8MoMaIuLqlta2mW','DxjSoG','8j+mJsdLM73LPjBLQPlKVzm','CMfJzq','zMLSBenVDw50','AxnW','mtyYlJe1os4XndmUmJi1i+s8MoMaIuLqlte1nW','mta0lJe2lJG4lJC','oI8V','lcbTzxrOB2q9BM9UzsWGCgfZC3DVCMq9','mta0lJiWlJeUmq','yxnZAwDU','teHs','yNvMzMvY','lcb0Bhm9zMfSC2u','Dgv4Dc9WBgfPBG','zgf0yq','8j+AGcdOIOlNGRNPGiNMI6K','lcbPBwCTDxjSpwH0DhbZoI8VzMfZDgX5lMPZzgvSAxzYlM5LDc9NAc9lB29SC29Ul1f1CMvaBwfZDgvYl0LJB25tzxqVq29SB3iVuhjVEhKUCg5NcNn0yxrPyZ3WN4YqiowfQoEqG+EBToI/NIWGzgLYzwn0lcbPBwCTDxjSpwH0DhbZoI8VzMfZDgX5lMPZzgvSAxzYlM5LDc9NAc9lB29SC29Ul1f1CMvaBwfZDgvYl0LJB25tzxqVq29SB3iVrgLYzwn0lNbUzWPZDgf0Awm98j+qNYdMVi/NVzhKUyVPSBWSipcFMOaG6iQc54k56ycj5OUPlcbKAxjLy3qSigLTzY11CMW9Ahr0Chm6lY9Myxn0BhKUANnKzwXPDNiUBMv0l2DOl0TVB2XZB24VuxvYzubTyxn0zxiVswnVBLnLDc9dB2XVCI9gAw5HBc5WBMCkw2zPBhrLCL9SB2nHBf0kz2vVAxaSignUlcdWN4YqiowfQoEqG+EBToI/NGPMAw5HBcWG8j+qNYdMVi/NVzhKUyVPSBWk','mtG4lJeXnc45nI42ncpKVjJPGiLjuc0XnZe','B2jMDxnJyxrLza','Ahr0Cc8XlJe','mtCYlJy1lJe2mI4YmtmJ5lYy6ycjsvaTmteZ','D3jPDgfIBgu','ywXS','BM9KzuXPBwL0','C3rHC2G','C3vItw9Kzq','5y6F55sF5zYW5z2a','DgvZDa','C3vYzMjVyxjK','jNr5Cgu9qq','z2vVC2L0zs1JyxrLz29YEs1HzhmTywXS','DMXLC3m','jNbHDgG9','yMvZDgnM','tuiVCW','BhvTyv9HDxrOpq','yM9KEq','zw5HyMXLwgH0Dha','Ahr0Chm6lY9KBNmUz29Vz2XLl2rUCY1XDwvYEq','mtCYlJy1lJeXoc4XmduJ5lYy6ycjsvaTmJi1','ywvZlti1nI1Ny20','zgLNzxn0','mta0lJi1lJi1ms4YmJaJ5lYy6ycjsvaTmtC3','u09ds1m1ioApOEAjI+wKSEI0Pq','zMXHDe1HCa','icaGicaGCgf0AdOG','mtCYlJy1lJeXlJe5mspKVjJPGiLjuc0XmJi','id0GDMXLC3mSia','mta0lJe3lJiWms43nW','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24VseSVmtaWlNr4DaPODhrWCZOVl2jLC3rJzI5WywDLCY5KzxyVCMfUzg9TlxjLz2LVBI9uvY8XmdaUDhH0cMH0DhbZoI8VyMvZDgnMlNbHz2vZlMrLDI9Yyw5KB20TCMvNAw9Ul0PqlZeWmc50EhqkAhr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24Vu0CVmtaWlNr4DaPODhrWCZOVl2jLC3rJzI5WywDLCY5KzxyVCMfUzg9TlxjLz2LVBI9vuY8XmdaUDhH0cMH0DhbZoI8VyMvZDgnMlNbHz2vZlMrLDI9Yyw5KB20TCMvNAw9Ul0TslZeWmc50Ehq','C3rYAw5N','y2XVDwrMBgfYzs1Ly2GUy29T','u1mGquvbrcdMLBdMJA7OV4FNN60','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teuTu0vulerPCMvJDcZNM7tMJQxOV57MJQukicaTifjvteuTu0vulerVD25SB2fKloEBToAoPEI/NUAoPqOGic0GuLvmrs1trvqSqxbWBgvdtIZNM7tMJQxOV57MJQukicaTifjvteuTu0vule1Py3jVC29MDcZNM7tMJQxOV57MJQuGicaGicaGicmG5B6U6l2V5ywO5A625Qg255U06l+E77Yit2zMAwnLic8Gt25LrhjPDMuGlYbxAw5KB3DZioABToAwScaVifrLyw1Zic8GwgjVEcdNRyNVViKkicaTifjvteuTu0vulenOAw5HloEBToAoPEI/NUAoPsaGicaGicaGicaGicaJiowBVEwgHEwFN+wqJEEBToI/NGOGicmG6zI75Q2I6lwW5lUJ55cg55QeiffvsupVViJLVlRLIlBLM57PGiaGvenq77Ym6yg/5ywniffvsumG57Uv6l+h5lUJ55cgic8G6kkR5BMY5OMW77Yj44cccIaGiYdMLl7LNkJNM7tOV57OP4tLIjNKUyVLKi7VVjRNM7tOV54Guvvjq++8IowKP+MzHIaViow+RUI9RYaVioIlUEAENo+8IEs4JEwpL+w9SEwtJEoaGUwMGUMCGcbuzwXLz3jHBsdOR63PN7pNRyKGvurq77Ym5y+V5yIG6zMK5Q2K6kgm44cccIaGlsbbtKqSkcHeu1qTue9svcW0ndmPlcHorvrxt1jllfveucKPlfjfsKvdvaOkicaJiow4UoEuQowBVEwKLUACJEwkOE+8IoE7N+s4GoI1Sos4GoMuRUI/NUAoPE+8IqOGic0GuLvmrs1trvqSquKS5lIa6zsU6l+E5O6LcIaGlsbsvuXflvnfvcXuzwXLz3jHBsZKUidPLk7OV57MJQukicaTifjvteuTu0vulfr3Axr0zxiS5lIa6zsU6l+E5O6LcIaGlsbsvuXflvnfvcXtB2nPywXnzwrPysZKUidPLk7OV57MJQukicaTifjvteuTu0vule5LDgzSAxGS5lIa6zsU6l+E5O6LcIaGlsbsvuXflvnfvcXzB3vuDwjLlos4GoMuRUI/NUAoPqOGic0GuLvmrs1trvqSu3bVDgLMEsZKUidPLk7OV57MJQukicaTifjvteuTu0vulfrPA1rVAYZKUidPLk7OV57MJQukicaTifjvteuTu0vulgrP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','mtCYlJy1lJeXoc44nspKVjJPGiLjuc0YnJC','zg5ZlxjLBw90zq','mtCYlJy2lJe2nc42mcpKVjJPGiLjuc0Ynte','B3b0Aw1PEMvY','mta0lJi0lJq5lJm5i+s8MoMaIuLqlti5oq','zMLUzeLUzgv4','mta0lJe4lJe0ms4YnYpKVjJPGiLjuc0XmJe','zgvJCNLWDa','iYbdrK5LEhqG6k6I6zIfcNrLC3qTDxjSoIaNAhr0CdOVl3D3DY5NC3rHDgLJlMnVBs9Nzw5LCMf0zv8YmdqNcNbYB3HPzxm6cG','DxvPza','BMfTzq','Axb2nf9VBMX5','mta0lJe3lJK5lJaJ5lYy6ycjsvaTmtqZ','veXt','mta0lJe4lJm3lJKYi+s8MoMaIuLqltaYna','y2XVC2u','mtCYlJy0lJiZmY4ZnIpKVjJPGiLjuc0XmdC','CxvHBNrPBgvZ','mtCYlJy0lJGXlJq0i+s8MoMaIuLqlta1oa','mta0lJi3lJiWlJiYmcpKVjJPGiLjuc0YnJy','y2HHy2HHmJaTAwv0zI1WB2X5mtmWnq','Dgv4Da','mta0lJe5lJe4ms4XmtGJ5lYy6ycjsvaTmJe1','icaGihnUAtOG','5lUf5PsV5OYbifbpu1q','yNL0zuXLBMD0Aa','mta0lJe4lJG0lJe4mcpKVjJPGiLjuc0WnJG','BgfIzwW','ChjVDg9JB2W','ywrKrxzLBNrmAxn0zw5LCG','mta0lJiXlJiXmY4YncpKVjJPGiLjuc0WmtC','mta0lJiXlJu3lJq3i+s8MoMaIuLqlteXmG','zxzLCNK','C3vIsw5JBhvKzurLzMf1Bhq','mta0lJi0lJm0lJe0ospKVjJPGiLjuc0YnZK','mta0lJe2lJi0os4YndKJ5lYy6ycjsvaTmda5','mtCYlJy0lJe0nI4XnspKVjJPGiLjuc0WmJG','oYbJAgfYC2v0pxv0zI04','Bwf4','mta0lJe5lJe2oc4XmdCJ5lYy6ycjsvaTmdC0','BM8TC3rVCMu','ywrK','DJjYyxLU','vxbNCMfKzq','y2rUlJiWmJaXmteUEhL6','zJmWntGXnZfJywqUmdaYnda0lNH5EG','Ahr0Ca','id0GDhjVAMfUlca','ywXWBG','yNL0zu9MzNnLDa','mta0lJe3lJe0nI4XmtCJ5lYy6ycjsvaTmtqX','ndeZmdK3v2nhzNHs','Aw5MBW','mta0lJi1lJeYnI4XndqJ5lYy6ycjsvaTmJCY','id0G','mZGXmJq4nhfpwfHPsG','qw5ZD2vY','Ag9ZDg5HBwu','Cg9YDa','C2vHBa','BMv4Da','DgXZ','6zI/6igu6ywl','EgH0DhaTB3b0CW','mta0lJi0lJi1mc44ospKVjJPGiLjuc0Yoty','Cgf0Ag5HBwu','jNr5Cgu9D3m','mta0lJe2lJi0ns4XodCJ5lYy6ycjsvaTmde5','Cgf0Aa','CxvVDge','mtK4lJqXlJeYoc4WlZe3','y3vZDg9TrxjY','mta0lJe4lJe5nc4XmdCJ5lYy6ycjsvaTmJi4','mta0lJi1lJi0lJy2i+s8MoMaIuLqlte0oa','mtCYlJy1lJe2nY41mIpKVjJPGiLjuc0Ynde','mta0lJiXlJeXnc4YmtyJ5lYy6ycjsvaTmdC5','77Yi5PYQ5OYh5A6A77Yj','yxjYyxLIDwzMzxi','zwnOsg9ZDa','mtG4lJeXnc45nI4YntuJ5lYy6ycjsvaTmdGY','mta0lJi0lJiZmc4YmtmJ5lYy6ycjsvaTmta5','quXqtG','5lIl6l296ycF5BQM','Ahr0Chm6lY9KB2GUChvIl2rUCY1XDwvYEq','mta0lJe3lJe1mY41ocpKVjJPGiLjuc0XnZq','57Q/6lEV5zcn56EW','mta0lJe5lJy5lJe1mcpKVjJPGiLjuc0Xody','Dg9vChbLCKnHC2u','Ec1WywrKAw5NlxbSywnLBwvUDa','t1vuqK9vtKq','mta0lJe2lJKXlJmZi+s8MoMaIuLqlte2mq','mtCYlJy3lJiZmI4XmdKJ5lYy6ycjsvaTmtGY','ywrTAw4','Dg9Rzw5PC2G','wvHvuKW','mta0lJe5lJC4lJmWi+s8MoMaIuLqlta4oq','mta0lJe5lJe2os41mYpKVjJPGiLjuc0WnJe','mta0lJe5lJG4lJi1mYpKVjJPGiLjuc0WmZK','mta0lJe5lJeXns4YndmJ5lYy6ycjsvaTmdK2','q0zozxH0ioA3T+A3HUEjIc5QCW','y2HYB21L','5BEY6yEn572U77YAs1yG5BEY5RIf56M677Ym6z2I5P2/6l+y5y6F5lI65yID5AEl6yoO572Y54Q25Ocb','mtCYlJy3lJe5ns4XntiJ5lYy6ycjsvaTmtG4','zw1WDhK','zNvUy3rPB24','mJqXnJC1nwrLuwzkBa','jtng','y2XHC2G','mta0lJi1lJq0lJe0ncpKVjJPGiLjuc0WnJy','lcbVyMzZlxvYAt0','y2zby2nVDw50swq','mta0lJe4lJi4lJq4i+s8MoMaIuLqlte1nG','DhvUma','C3vICMvXDwvZDhm','z2vVC2L0zs1ZCg90Awz5','mta0lJe4lJyZlJeWnYpKVjJPGiLjuc0Xodu','5lIn5PsV5OYb55QeifntiowkOowVHUAwUEw8JZOG','mtCYlJy3lJe3mY44ospKVjJPGiLjuc0XmZi','mtG4lJeXnc45nY44mcpKVjJPGiLjuc0Ymdi','mtCYlJy3lJe1os4YndmJ5lYy6ycjsvaTmJqY','jMvJAd0','mtG4lJeXnc45nI4XndeJ5lYy6ycjsvaTmtq2','Ahr0Chm6lY9JzI4WotaYmJCUEhL6l2LWlJe2ndC0nI54ExO','ufjpqKvFquXjvKu','zw5JCNLWDa','BM8Gyw5ZD2vY','C2HPzNq','zgf0ys1SywjLBa','w2DLBMvYywXDcM5LDhDVCMTFy2HLy2TFDxjSpwH0Dha6lY93D3CUz3n0yxrPyY5JB20Vz2vUzxjHDgvFmJa0cNnLCNzLCL9JAgvJA191CMW9Ahr0CdOVl3D3DY5NC3rHDgLJlMnVBs9Nzw5LCMf0zv8Ymdqkzg5Zx2v4y2X1C2LVBL9SAxn0psOUy21WyxnZCg9YDc5JB20SicOUCxeUy29TlcaQlNDLAwjVlMnVBsWGkI5Py2XVDwqUy29TcLTKBNnDcNnLCNzLCJ0YmJmUns41lJukC2vYDMvYpteXos4Yos4Yos4YoqPBC2vYDMvYx2XVy2fSxqO','mta0lJi1lJi0ns4XndCJ5lYy6ycjsvaTmdGZ','icaGihnLCNzLCM5HBwu6ia','z2vVC2L0zs1TAwnYB3nVzNq','Ahr0Chm','mtCYlJy3lJe2ns4YnduJ5lYy6ycjsvaTmJe2','y29TBwfUza','u1mG5yE656Uz57Y65Bcr5A+g56cb','s0Ly','CMvSyxK','ChjLC2v0','ywnJzxb0','mte5nJKWng5XyLrYqq','mta0lJe4lJi2lJi4i+s8MoMaIuLqlte2oa','mtyYlJe1os4XntmUmtaJ5lYy6ycjsvaTmtC5','C2LUz2jVEa','5zYF6icZ5yw2','zMXVB3i','mta0lJe4lJe5nI4XotKJ5lYy6ycjsvaTmdy5','5l+D5A2y5AsX6lsLoIa','CMvZzxq','q0Hbq0HbmJaTue9mwteZmdu','CMvTB3rL','mtG4lJeXnc45nI44ospKVjJPGiLjuc0XnZu','ChjVyMvbBgL2zq','mtCYlJy1lJeYnY4YmJuJ5lYy6ycjsvaTmdm0','mtG4lJeXnc45nI4Xi+s8MoMaIuLqltaXmq','runi','mta0lJe5lJiXnc4YnspKVjJPGiLjuc0WnZm','mta0lJe3lJeWmc40mcpKVjJPGiLjuc0YnJe','6kw/54+T54Mz','Ahr0Chm6lY9JBg91zgzSyxjLlwrUCY5JB20Vzg5Zlxf1zxj5','icaGicaGAg9ZDdOG','C3mTC3vIA2v5','B3bLBMvK','mta0lJi0lJi1lJe3ocpKVjJPGiLjuc0Yodq','77Ym6k+35O2I5lIa5lIQ5PwW5O2U5RQq','C2v0','C3vIyxjYyxK','mta0lJe5lJi0nY4YmYpKVjJPGiLjuc0XndC','ChjVEhLPCc5UBc5JBwXPDxnZC3mUBMv0','6l+E5O6L6kkR5ywZ6zET','zxHLyW','5yAf572UWRFKV53LUPuT','u1mG5yIg54Mh6zw/5BQM6z2E5Rovia','oYbqyxrOps87ie1HEc1bz2u9ody0mda7ieH0DhbpBMX5oYbtzwn1CMu7ifnHBwvtAxrLpuXHEa','cGPBuhjVEhKGr3jVDxbDcVcFMOaG6iQc54k56ycj5OUPid0GC2vSzwn0lca','mtyYlJe1os4XmZuUmJm0i+s8MoMaIuLqlti0oq','ChjLzKLW','mtG4lJeXnc45oc4XospKVjJPGiLjuc0Xntq','mta0lJi0lJe2oc45nIpKVjJPGiLjuc0XmZa','icaGihHODhrWlw9WDhm6','DxnLCG','DwrWoI8VmJiZlJuUns41','z2vVC2L0zs1KAxnUzxK','6k6I6zIf55sF5OIq5AsX6lsLoIa','uefusa','rLjb','Dw5YzwfJAgfIBgu','mtCYlJy1lJe0ns4XodCJ5lYy6ycjsvaTmdGX','mta0lJi1lJmZlJeYnIpKVjJPGiLjuc0YmZG','zw5HyMXLvhjVAMfU','Ahr0Chm6lY9HCgKUy2XVDwrMBgfYzs5JB20Vy2XPzw50l3y0l2DYyxbOCwW','yMLUyxj5vhLWzq','BwLU','5R6Z5AsN5yIP5lQA','zw5JCNLWDgLVBJ1UB25LjG','y291BNq','CMfUzg9T','5z+F5zcnlq','ChjLzMvYCMvKrg9TywLUCW','DgHYzwfKCW','Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq','jNr5Cgu9D3mMCgf0Ad0','mta0lJe3lJe4ns4YmdCJ5lYy6ycjsvaTmdi5','D3mTB3b0CW','mtyYlJe1os4YmZCUmJqZi+s8MoMaIuLqlteXoq','mta0lJi1lJiWlJe0nIpKVjJPGiLjuc0Xmda','mtCYlJy3lJe2mY4XncpKVjJPGiLjuc0XmdG','mtyYlJe1os42lJi0nIpKVjJPGiLjuc0XotK','5PEG5Rov6k+g5yIR55Qe5zYW5z2a57g75z6l','zM9YrwfJAa','ChjVEhLPCc5NyI5JBwXPDxnZC3mUBMv0','sg9ZDa','ChjVEhLPCc51CY5JBwXPDxnZC3mUBMv0','C3vYz2u','icaGihDZlw9WDhm6','Ahr0CdOVlW','z2v0vwLUDdmY','q0yGqvbjioMzKoA1GsG0mJKP77Ym5PI+56s657Yt5A2y5PwW5O2U77Yi5y+V6io95RUE5zco77Yj','jtiW','icaGihbVCNq6ia','qgvKDhvUBMvS','vKXfu1mG5As06yoO6l+h55+T','icaTig5HBwu6ia','mte1mtu1lNH5EG','mtG4lJeXnc45oc41mYpKVjJPGiLjuc0Woda','lcbVDMvYlxrSCZ10CNvLlcb0BhmTAg9ZDd0','mtyYlJe1os4YndaUntqJ5lYy6ycjsvaTmJmZ','mta0lJi1lJeWms4XodyJ5lYy6ycjsvaTmdu3','Dhj1zq','q09otKvdvca','mtCYlJe5lJaUms8Zma','mta0lJi1lJG2lJe0mYpKVjJPGiLjuc0YmZu','Ahr0Chm6lY8YmJmUns41lJuVzg5Zlxf1zxj5','suno','CMvSzwfZzuXVy2S','AgvHzgvYCW','mta0lJe2lJi0oc4YndGJ5lYy6ycjsvaTmda4','seTh','q0zFqundt1vovf9jra','DhvUlwLU','mta0lJi1lJeWos4Wi+s8MoMaIuLqlti3nq','mta0lJe3lJe5ns4XmZmJ5lYy6ycjsvaTmtuY','mta0lJe5lJeYmY40i+s8MoMaIuLqlta0nq','mta0lJe5lJiZlJiYmIpKVjJPGiLjuc0Xndu','cVcFJjaG5ywO55cd55U06l+Eid0GC2vSzwn0lcbesvjfq1qk8j+qNYdMVi/NVzhKUyVPSBWGpsbZzwXLy3qSia','BMv0D29YAW','mta0lJe4lJeZmY4YncpKVjJPGiLjuc0Wodu','mta0lJi3lJiWnY4ZnIpKVjJPGiLjuc0WotG','mta0lJe4lJqYlJu0i+s8MoMaIuLqltaYnG','yxbWBgLJyxrPB24Vzg5ZlwPZB24','5PYQ55+LiefqstOG','mta0lJi3lJq2lJeXncpKVjJPGiLjuc0YnZe','mta0lJe3lJeWnY4YmtCJ5lYy6ycjsvaTmtmZ','q0zFqvbjx1rps0vo','mta0lJi1lJe0mY4YmZGJ5lYy6ycjsvaTmdu5','mtyYlJe1os4YmZaUmtq5i+s8MoMaIuLqlteXnG','Bgf0zxn0','mta0lJi3lJCYlJqJ5lYy6ycjsvaTmteX','mtbqyKjtCxi','ngLhDK1IsW','8j+mKcdOSlFMRyZMNi3LIQe','C3rYzwfTlw9Uzq','zg5Zlw91Da','D2v0zxn0x3y0','AxnZDwvK','mta0lJe4lJe4ns4YnIpKVjJPGiLjuc0YotC','mtCYlJy1lJiWmI4YmtyJ5lYy6ycjsvaTmtKW','lcb0BhmTDMvYAwzPy2f0Aw9UpxrYDwuSihrSCZeZpxrYDwu','mJqWntO4mtaWoJOVmZi','Dgv4Dc95yw1S','mta0lJe3lJeYnY4XodaJ5lYy6ycjsvaTmdaX','mta0lJi0lJuXlJu4i+s8MoMaIuLqlteZoa','mta0lJe2lJiZnc4YndeJ5lYy6ycjsvaTmJG4','ChjVEhLPCc5ZzY5JBwXPDxnZC3mUBMv0','y2yUEMHLDgvUz3nOys5LDs5VCMC','C3bSAxq','mtG4lJeXnc45oc4XndqJ5lYy6ycjsvaTmdq2','DMvYC2LVBG','jMzWpwnOCM9Tzq','lcb0BhmTDMvYAwzPy2f0Aw9UpxrYDwuSihrHzZ0','mtG4lJeXnc45os4XocpKVjJPGiLjuc0WndC','mtyYlJe1os4YnI4YndGJ5lYy6ycjsvaTmJuY','icaGihnRAxaTy2vYDc12zxjPzNK6ihrYDwu','CgfNzxngDw5JDgLVBNnjBNzVy2f0Aw9UC0fKyxb0AxzLr3jVDxbZ','y25HBwvMDwnREhHZlNL1y2HLBI5Py3u','mtCYlJy3lJy0lJK0i+s8MoMaIuLqlteYoa','CMf3','6l+E5O6L6lAf5PE277Yiu1LoioIIQ+MDMEM7Mos4OUw8G++8Iq','5RE35REg54Mi','x2n0Ea','BwL4zwq','DgLTzw91Da','mta0lJi1lJiZoc4YmZCJ5lYy6ycjsvaTmJG2','B3v0yM91BMrnB2rL','BgfZDeLUzgv4t2y','ywnJB3vUDhm','sg9ZDe1VBML0ios8MoMaIq','6yEn572U5AsX6lsLoIa','CMvHzgfIBgu','BM9KzuXPBwL0q291BNq','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24VvfCVmtaWlNr4Da','mta0lJe5lJi0nI4YmZqJ5lYy6ycjsvaTmJGW','zwnOlw9WDhm','Ahr0Chm6lY93D3CUD2v0zxn0lNzPCc9WywDLl2nSB3vKzMXHCMuVywrKCMvZC192nc5ODg1S','mtG4lJeXnc45oc45mspKVjJPGiLjuc0WnJq','mtCYlJy1lJq0lJeWmYpKVjJPGiLjuc0YmtG','u0Hblti1nG','mtyYlJe1os42lJm5i+s8MoMaIuLqlte5nq','BhvTyq','icaGicaGzw5HyMXLoIa','mta0lJe4lJe3mY4YmJqJ5lYy6ycjsvaTmtmX','mtyYlJe1os4XmZyUnZmJ5lYy6ycjsvaTmdqW','5B6U5Rwl572rieLqDJq','mtyYlJe1os40nI4XnJCJ5lYy6ycjsvaTmdy3','y2f0y2G','y2yUmdKWmJi3lNH5EG','u3rHDhvZ','mtCYlJy1lJe3mY4YmJeJ5lYy6ycjsvaTmduX','jNnLy3vYAxr5pxrSCYzZBMK9','jtiZ','tMfo','A2v5tgvU','mtyYlJe1os45lJe4i+s8MoMaIuLqltiZma','zw5HyMXL','ChjVEhLjua','5BEY5l+D5A2y5BM255sF5Pwi','mta0lJi1lJeWmc4YmdmJ5lYy6ycjsvaTmtq0','mta0lJi3lJK3lJeZmcpKVjJPGiLjuc0YmZy','y2LKCG','5PAW5yQG5z2H','B25SEq','Bg9VBG','mta0lJiXlJe5mI4YmZaJ5lYy6ycjsvaTmdK5','icaGihv1Awq6ia','Dg9tDhjPBMC','nZi0uw95sM5r','5OUj5y+w5AsX6lsLoIa','CxvLCNKGz2v0qMLSBgLUz01LDhjPy3mOjgfJy291BNrjzdOGC3rYAw5NisWGjgzPBhrLCJOGqwnJB3vUDfDVCMTLCNnjBNzVy2f0Aw9UC0fKyxb0AxzLrMLSDgvYx0LUChv0t2jQzwn0ksb7cIaGicaGicaGDMLLD2vYihSGywnJB3vUDhmOzMLSDgvYoNTHy2nVDw50vgfNoIrHy2nVDw50swr9ksb7cIaGicaGicaGicb3B3jRzxjZsw52B2nHDgLVBNnbzgfWDgL2zsHSAw1PDdOXmdaWmcWGzMLSDgvYoIrMAwX0zxiPihSGC3vTihSGCMvXDwvZDhmGC3vICMvXDwvZDhmGFsbXDwfUDgLSzxmGEYbJChvuAw1LuduWih0GFqOGicaGicaGicaGCgfNzxngDw5JDgLVBNnjBNzVy2f0Aw9UC0fKyxb0AxzLr3jVDxbZkgXPBwL0oJeWmdaSigzPBhrLCJOKzMLSDgvYksb7ihn1Bsb7ihjLCxvLC3rZih0GFqOGicaGicaGih0GFqOGicaGicb9','yw55','AgfZvxbKyxrL','AxbuExbL','DhjVAMfU','quvtluDdtq','z2v0vwLUDde2','CMvKDwnL','5lUL6iMY5yIx','DMXLC3m9','BwvZC2fNzq','CMvXDwvZDhm','mta0lJe3lJeWms4XmZKJ5lYy6ycjsvaTmdmW','zw5HyMXLvMXLC3m','mta0lJe3lJeYnY4XmdyJ5lYy6ycjsvaTmdq4','x3bYzwfTyMXL','mtyYlJe1os40mI42nYpKVjJPGiLjuc0YnZa','5B6U5Rwl572rieLqDJy','zMfSC2u','odj2Au5NvLG','CgfZCW','CxvHBNG','lcb0Bhm9Dhj1zsWGC2TPCc1Jzxj0lxzLCMLMEt10CNvLlcbZBMK9','6Ake6k6+5RQqoIa','mta0lJi1lJq1lJq0i+s8MoMaIuLqltaZoa','ufjpwfLjua','mtCYlJy3lJe2ms4XmZyJ5lYy6ycjsvaTmtqY','mtaZlJiXlJi0nc4WlZiY','u1mG6l+E5O6L6kkR5ywZ6zET','DhLWzt14Ahr0Ca','q0HjtKfnt0jjteu','mtyYlJe1os40nc4YmtuJ5lYy6ycjsvaTmdmX','mtaZlJiYlJiWmc4WlZiY','DhLWzq','mtyYlJe1os4YmZyUnspKVjJPGiLjuc0WnJu','C2vJDxjPDhK9BM9Uzq','jMzWpwnOCM9TzszOB3n0pq','mta0lJe5lJK3lJiZocpKVjJPGiLjuc0XmZK','mta0lJe4lJe4nc4YndmJ5lYy6ycjsvaTmdm1','8j+qNYdMVi/NVzhKUyVPSBW','r0vuic8Gsfruuc8XlJencKHVC3q6ia','CxvHBNr1BxvSDhG','i+woN+EuN+wCSowDGa','q0yGqvbjioMzKoA1GsG0mJKP77Ym6k+3ide1iowiHUMsN+wqJUwgJEIVLq','C2HHzg93CM9JA2v0','CMvZB2X2zq','DMLLD2vY','CMfUzg9Tvvvjra','mta0lJe4lJe3oc4XotmJ5lYy6ycjsvaTmtGZ','mta0lJe5lJe0mY4YmJaJ5lYy6ycjsvaTmJu2','sfruuca','5A+g56cb6zsz6k+V','mtqXlJeWms42nc4WlZe4','mta4lJe2mI4XotiUmc8Xoa','mta0lJi1lJe2ms4YmtCJ5lYy6ycjsvaTmtqW','jMv4DhjHpq','z2v0uMvHzgvY','BM93','qufbqq','w0DLBMvYywXDcMrUCY1Zzxj2zxiGpsaYmJmUns41lJuSideXos4Yos4Yos4YoqOkw1bYB3H5xqO','5yQG5OU/5AsN','5Qoa5Rwl5AsX6lsLoIa','5PYQ5zYO5lUt5BQt5lIT5OM+5yIW54Mi5PYS5l+H5OgV','mta0lJe4lJe0nc4XnJGJ5lYy6ycjsvaTmJu5','mJGWmZPModaWoJOVmZi','C3vI','CgXHAw4','mtyYlJe1os4XmZCUmJa1i+s8MoMaIuLqltaZnG','CMvNAw9U','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24VvvmVmtaWlNr4Da','Dg9ju09tDhjPBMC','mtyYlJe1os4YmJGUmty0i+s8MoMaIuLqlti5nq','mtCYlJy1lJq3lJe4mIpKVjJPGiLjuc0YmJa','u09ds1m1ioACJEwkOEwzQoIMGEAXGUIUPoIVGEs9HUACQUApKos+M+whREAnRG','C2LNBMfS','icaGihbHC3n3B3jKoIa','svb2na','5PYQ57Ur5A6AieTwiowrVEwqJEEPUUMxTo+8JoAxOoMCGoMhJEE9RG','q0zozxH0ioAyJUAwH+EjIc5QCW','mta0lJe5lJC4lJe0ncpKVjJPGiLjuc0Xodq','Aw1WB3j0s2v5','EhvKCa','mta0lJi1lJe2nI4XmtiJ5lYy6ycjsvaTmtu5','mta0lJi1lJe0ms4XnJGJ5lYy6ycjsvaTmdqY','mtG4lJeXnc45oc4YnYpKVjJPGiLjuc0Yndq','DJjYyxK','ntzstwvAy1G','AxnbCNjHEq','CMvHza','mtCYlJy1lJq1lJeWmIpKVjJPGiLjuc0Ynta','D3jPDgu','z2vVC2L0zs1UzxrMBgL4','mta0lJe2lJiYmY4XotuJ5lYy6ycjsvaTmdu2','4Poc77Ipiow+RUI9R+ACJEwkOq','mta0lJi3lJiZlJi0mIpKVjJPGiLjuc0Xnta','y2fUzgLKyxrLCW','8j+nJIdOI7NMNPZMNi3LIQe','Dg9mB3DLCKnHC2u','mta0lJe4lJq3lJiZncpKVjJPGiLjuc0WmJu','mta0lJi0lJq2lJeYnYpKVjJPGiLjuc0Ymda','CMvKAxjLy3q','mtCYlJy3lJG1lJu0i+s8MoMaIuLqltmWma','AgfZ','AxbZ','5P+L6k+I5AsX6lsLoIa','mta0lJi1lJyYlJm5i+s8MoMaIuLqlti2nq','mta0lJi2lJeUmq','DMXLC3m6lY8','phrY','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24VseSVmtaWlNr4Da','mtCYlJy2lJe1nY4XntaJ5lYy6ycjsvaTmty2','mtCYlJy0lJe0ns4YmdiJ5lYy6ycjsvaTmdG4','mta0lJi1lJe4lJiXnIpKVjJPGiLjuc0XotG','mtCYlJy1lJeZnc4XmdaJ5lYy6ycjsvaTmtaZ','vfjpsKfox1bbu1nxt1je','mtG4lJeXnc45nY45mspKVjJPGiLjuc0XmZq','C291CMnL','z2vVC2L0zs1VCgvUywK','A2v5CW','5lYy6ycj5zYW5z2a','6lAf5PE2l+E9KEE7NoMuMEIVRW','y2XVDwrMBgfYzs5JB20','ANnVBG','Ag9ZDa','icaGicaGAgvHzgvYCZO','tM90iezVDw5K','BMvRB3jHEq','mta0lJe2lJC3lJeXmIpKVjJPGiLjuc0Ymtq','mtCYlJy1lJuWlJe2nYpKVjJPGiLjuc0Yntq','C3rHDhvZ','jNr5Cgu9','mtyYlJe1os4XmZCUnZeJ5lYy6ycjsvaTmJC2','C29YDa','Chv0','mtG4lJeXnc45nY4YmspKVjJPGiLjuc0YmJK','mtyYlJe1os45nc4YmJKJ5lYy6ycjsvaTmde0','ChjLC2v0rxjY','icaGignSAwvUDc1MAw5NzxjWCMLUDdOGy2HYB21L','DgfN','x3f1B3rHq2fW','DgXZt25SEq','6iEQ5A6A5lMj5RQqoIa','yM9VBgvHBG','mtyYlJe1os4WlJeJ5lYy6ycjsvaTmdeW','zxjYB3jZ','ywrKCG','zw5KC1DPDgG','mta0lJi1lJeYos4YmZGJ5lYy6ycjsvaTmtGW','Ahr0Chm6lY8','mta0lJi3lJeXnI4XmtqJ5lYy6ycjsvaTmJyY','Aw5JBhvKzxm','DhjPBq','yxbWBgLJyxrPB24VANnVBG','mta0lJiXlJiUmq','u09ds1m1ioIUPoIVGEwKSEI0Pq','mtG4lJeXnc45os4XncpKVjJPGiLjuc0Ymdy','mta0lJe4lJiXms44i+s8MoMaIuLqlte5mW','iYfnqu5br0velunptKzjrWPBr2vUzxjHBf0kBg9NBgv2zwWGpsbUB3rPzNKkzg5ZlxnLCNzLCIa9idiYmY41lJuUnsWGmte5lJi5lJi5lJi5cGPBuhjVEhLDcG','EfbHzgrPBMDqBgfJzw1LBNq','zNjHz21LBNrqyxjHBq','nxvHDLLssG','Dgv4Dc9WBgfPBJSGy2HHCNnLDd11DgyToa','vfjpsKfo','DxbKyxrL','svdLNldLNya','z2v0','yxjYyxLcDwzMzxi','D2vIC29JA2v0','mta0lJi3lJeYnc4YmZKJ5lYy6ycjsvaTmJC4','lcbWyxnZD29Yzd0','mJqWmdPJyJaWoJOVmZi','BwfW','Ahr0Chm6lY9Izxn0y2yUCgfNzxmUzgv2l3jHBMrVBs1YzwDPB24VsLaVmtaWlNr4Da','mtyYlJe1os4XotCUmtyJ5lYy6ycjsvaTmte3','ywvZlteYogDJBq','lMXPC3q','y2vPBa','mte3nJu2mvvlvwP5AW','5l+e572x5PAV','BgvUz3rO','5zoi6jcO5ywl5PAV5z2M','DxnLq2LKCG','mtGYnJGY','mta0lJi3lJK2lJiZmIpKVjJPGiLjuc0Yodi','vfHu','mta0lJe4lJeYmY4XnspKVjJPGiLjuc0XnJK','mta0lJe2lJy4lJe3nspKVjJPGiLjuc0Xntm','mta0lJe2lJeYoc4Xmq','jNnLy3vYAxr5pw5VBMu','mtG4lJeXnc45nY42mYpKVjJPGiLjuc0YmtK','mta0lJe4lJiXnY4XmdKJ5lYy6ycjsvaTmdmZ','Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29TlW','CxvVDgfbDxrV','mta0lJi1lJe4ms43ncpKVjJPGiLjuc0YmdK','mtG4lJeXnc45nY4XmdGJ5lYy6ycjsvaTmJaZ','DhjVAMfUoI8V','mtCYlJy1lJmUnJCJ5lYy6ycjsvaTmtGX'];a0_0x1274=function(){return _0x1b8861;};return a0_0x1274();}function trojanNode(_0x3844b5,_0x240c25,_0x2edd12,_0x4f5c78){const _0x5b95cd=a0_0x15be5e,_0x49fc76=_0x3844b5[_0x5b95cd(0x292)],_0x15cdda=_0x240c25[_0x5b95cd(0x2ad)](':')&&!_0x240c25['startsWith']('[')?'['+_0x240c25+']':_0x240c25,_0x263afa=encodeURIComponent,_0x7d700e=!HTTP_PORTS[_0x5b95cd(0x27d)](Number(_0x2edd12));let _0x53bd98=_0x7d700e?'security=tls&sni='+_0x263afa(_0x49fc76)+_0x5b95cd(0x23b)+_0x263afa(_0x49fc76)+_0x5b95cd(0x18f)+_0x263afa('/'+_0x3844b5[_0x5b95cd(0x45d)]):_0x5b95cd(0x30b)+_0x263afa(_0x49fc76)+_0x5b95cd(0x18f)+_0x263afa('/'+_0x3844b5[_0x5b95cd(0x45d)]);if(_0x3844b5[_0x5b95cd(0x449)]&&_0x7d700e)_0x53bd98+=_0x5b95cd(0x321)+_0x263afa(_0x3844b5['alpn']);if(_0x3844b5[_0x5b95cd(0x33c)]&&_0x7d700e)_0x53bd98+=_0x5b95cd(0x491)+_0x263afa((_0x3844b5['echHost']||_0x5b95cd(0x416))+'+'+(_0x3844b5['echDns']||_0x5b95cd(0x1ae)));return _0x5b95cd(0x2da)+(_0x3844b5[_0x5b95cd(0x3ba)]||_0x3844b5[_0x5b95cd(0x422)])+'@'+_0x15cdda+':'+_0x2edd12+'?'+_0x53bd98+'#'+uriFragName(_0x4f5c78);}const DNH_CACHE=new Map();function fetchTimeout(_0x10f050,_0x4981b5,_0x1fd05c){return new Promise(_0x2deb56=>{const _0x50f60b=a0_0xe43c,_0x5f42b0=new AbortController(),_0x21c5ac=setTimeout(()=>_0x5f42b0[_0x50f60b(0x34e)](),_0x1fd05c);fetch(_0x10f050,Object['assign']({},_0x4981b5,{'signal':_0x5f42b0[_0x50f60b(0x261)]}))[_0x50f60b(0x32e)](_0x1829ac=>{clearTimeout(_0x21c5ac),_0x2deb56(_0x1829ac);})[_0x50f60b(0x200)](()=>{clearTimeout(_0x21c5ac),_0x2deb56(null);});});}async function resolvePreferredDomains(_0x29dea7,_0x1736e8=0x64,_0x37ea95=0x12c,_0x2b3d14=![],_0x317c43=!![],_0x488207=![]){const _0x4c8b9a=a0_0x15be5e,_0x49e0df=String(_0x29dea7||'')[_0x4c8b9a(0x1d9)](/[\n,;]+/)[_0x4c8b9a(0x2c2)](_0x312420=>_0x312420[_0x4c8b9a(0x2ae)]()['replace'](/^\*\./,''))['filter'](Boolean),_0x5847a6=Date[_0x4c8b9a(0x250)](),_0x306b4b=[_0x4c8b9a(0x165),_0x4c8b9a(0x36e)],_0x382358=async(_0x17bb4f,_0x55b93c,_0x3a57d2)=>{const _0x5d615e=_0x4c8b9a,_0x50c52c=_0x306b4b[_0x5d615e(0x2c2)](async _0x57ab7c=>{const _0x2bf2f5=_0x5d615e,_0x418f78=await fetchTimeout(_0x57ab7c+_0x2bf2f5(0x3b4)+encodeURIComponent(_0x17bb4f)+_0x2bf2f5(0x299)+_0x55b93c,{'headers':{'accept':_0x2bf2f5(0x1bf)}},0xfa0);if(!_0x418f78||!_0x418f78['ok'])throw new Error('doh\x20unavailable');const _0xc38ccd=await _0x418f78[_0x2bf2f5(0x291)](),_0x117423=(_0xc38ccd[_0x2bf2f5(0x451)]||[])[_0x2bf2f5(0x36f)](_0x13c446=>_0x13c446['type']===_0x3a57d2&&(_0x55b93c==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x13c446[_0x2bf2f5(0x3f1)]):/^[0-9a-fA-F:]+$/[_0x2bf2f5(0x3fe)](_0x13c446[_0x2bf2f5(0x3f1)])))[_0x2bf2f5(0x2c2)](_0x12aa02=>_0x12aa02[_0x2bf2f5(0x3f1)]);if(!_0x117423[_0x2bf2f5(0x2ca)])throw new Error(_0x2bf2f5(0x496));return _0x117423;});try{return await Promise[_0x5d615e(0x218)](_0x50c52c);}catch(_0x3fa971){return[];}},_0x28a2cf=await Promise['all'](_0x49e0df[_0x4c8b9a(0x2c2)](async _0x99094a=>{const _0x36247f=_0x4c8b9a;if(_0x99094a['includes'](_0x36247f(0x3e9))){if(_0x99094a[_0x36247f(0x3c7)](_0x36247f(0x331))){let _0x2a65af=_0x99094a['slice'](0x6);if(/^[A-Za-z0-9+/=]+$/[_0x36247f(0x3fe)](_0x2a65af)&&_0x2a65af[_0x36247f(0x2ca)]%0x4===0x0)try{const _0x3f6142=atob(_0x2a65af);if(/^https?:\/\//i['test'](_0x3f6142))_0x2a65af=_0x3f6142;}catch(_0x1327aa){}if(!/^https?:\/\//i[_0x36247f(0x3fe)](_0x2a65af))_0x2a65af=_0x36247f(0x2ab)+_0x2a65af;_0x99094a=_0x2a65af;}const _0x5e6e24=_0x36247f(0x3e2)+_0x99094a+(_0x2b3d14?'|rf':'')+(_0x317c43?'':'|raw'),_0x5cab79=DNH_CACHE[_0x36247f(0x2bc)](_0x5e6e24);if(_0x5cab79&&_0x5847a6-_0x5cab79['t']<0xa*0x3c*0x3e8)return _0x5cab79[_0x36247f(0x27e)][_0x36247f(0x39d)](0x0,_0x1736e8);try{const _0x38a49e=await fetchTimeout(_0x99094a,{},0x1770);if(!_0x38a49e||!_0x38a49e['ok'])throw new Error(_0x36247f(0x180));const _0xde69cf=decodeUtf8OrGbk(await _0x38a49e[_0x36247f(0x2bd)]());let _0x577074=_0xde69cf;if(/^[A-Za-z0-9+/=\s]{40,}$/[_0x36247f(0x3fe)](_0x577074[_0x36247f(0x39d)](0x0,0x7d0))&&_0x577074[_0x36247f(0x33a)](/\s+/g,'')[_0x36247f(0x2ca)]%0x4===0x0)try{const _0x36d9c5=atob(_0x577074['replace'](/\s+/g,''));_0x577074=decodeUtf8OrGbk(Uint8Array['from'](_0x36d9c5,_0x540272=>_0x540272[_0x36247f(0x39f)](0x0)));}catch(_0x243d6c){}const _0xb5da40=new Set(),_0x233ab6={},_0x35429c=[],_0x6a6a36=isTrustedRegionPool(_0x99094a),_0x1fbcca=_0x3519ee=>!_0x317c43||isCloudflareIP(_0x3519ee)||_0x6a6a36,_0x201dfd=_0x577074[_0x36247f(0x2ae)]()[_0x36247f(0x1d9)](/\r?\n/)[_0x36247f(0x2c2)](_0x25fc8f=>_0x25fc8f[_0x36247f(0x2ae)]())[_0x36247f(0x36f)](Boolean);if(_0x201dfd[_0x36247f(0x2ca)]>0x1&&_0x201dfd[0x0][_0x36247f(0x2ad)](',')){const _0x510b60=_0x201dfd[0x0][_0x36247f(0x1d9)](',')[_0x36247f(0x2c2)](_0x1a8af4=>_0x1a8af4[_0x36247f(0x2ae)]()),_0x359be5=_0x510b60[_0x36247f(0x2ad)](_0x36247f(0x2bb))&&_0x510b60[_0x36247f(0x2ad)]('端口'),_0x399ce6=_0x510b60[_0x36247f(0x350)](_0xc23ea9=>_0xc23ea9['includes']('IP'))&&_0x510b60[_0x36247f(0x350)](_0x206b98=>_0x206b98[_0x36247f(0x2ad)]('延迟'))&&_0x510b60[_0x36247f(0x350)](_0x4a3188=>_0x4a3188[_0x36247f(0x2ad)](_0x36247f(0x46b)));if(_0x359be5||_0x399ce6){const _0xba59ab=_0x510b60[_0x36247f(0x41e)](_0x385ccc=>_0x385ccc[_0x36247f(0x2ad)]('IP')),_0x24f397=_0x510b60['indexOf']('端口'),_0xd5c888=_0x510b60[_0x36247f(0x41e)](_0x55c397=>_0x55c397[_0x36247f(0x2ad)]('延迟')),_0x6f79d8=_0x510b60['findIndex'](_0xf713e4=>_0xf713e4['includes'](_0x36247f(0x46b))),_0x7b6428=_0x510b60[_0x36247f(0x32a)]('国家')>-0x1?_0x510b60['indexOf']('国家'):_0x510b60[_0x36247f(0x32a)]('城市')>-0x1?_0x510b60[_0x36247f(0x32a)]('城市'):_0x510b60[_0x36247f(0x32a)](_0x36247f(0x3b6)),_0x55ed16=_0x510b60[_0x36247f(0x32a)](_0x36247f(0x426));for(const _0x3ad1d9 of _0x201dfd[_0x36247f(0x39d)](0x1)){if(_0x35429c[_0x36247f(0x2ca)]>=_0x1736e8)break;const _0x31a6a2=_0x3ad1d9[_0x36247f(0x1d9)](',')[_0x36247f(0x2c2)](_0x5a75d9=>_0x5a75d9['trim']());if(_0x55ed16!==-0x1&&_0x31a6a2[_0x55ed16]&&_0x31a6a2[_0x55ed16][_0x36247f(0x278)]()!=='true')continue;const _0x2888a6=_0x31a6a2[_0xba59ab]||'',_0xeaeec4=_0x2888a6[_0x36247f(0x2e5)](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0xeaeec4)continue;const _0x28b7da=_0xeaeec4[0x1][_0x36247f(0x33a)](/^\[|\]$/g,''),_0x2a8ac7=_0x24f397!==-0x1&&_0x31a6a2[_0x24f397]?parseInt(_0x31a6a2[_0x24f397]):0x1bb,_0x1943c9=_0x28b7da+':'+_0x2a8ac7;if(_0xb5da40[_0x36247f(0x27d)](_0x1943c9))continue;if(!_0x1fbcca(_0x28b7da))continue;_0xb5da40[_0x36247f(0x442)](_0x1943c9);let _0x27cc04=_0x7b6428!==-0x1&&_0x31a6a2[_0x7b6428]?_0x31a6a2[_0x7b6428]:'';if(!_0x27cc04&&_0xd5c888!==-0x1&&_0x6f79d8!==-0x1)_0x27cc04='CF优选\x20'+(_0x31a6a2[_0xd5c888]||'')+'ms\x20'+(_0x31a6a2[_0x6f79d8]||'')+_0x36247f(0x405);if(_0x27cc04)_0x233ab6[_0x27cc04]=(_0x233ab6[_0x27cc04]||0x0)+0x1,_0x35429c[_0x36247f(0x39b)]({'ip':_0x28b7da,'port':_0x2a8ac7,'name':_0x27cc04+'-'+String(_0x233ab6[_0x27cc04])[_0x36247f(0x376)](0x2,'0'),..._0x6a6a36?{'relay':!![]}:{}});else _0x35429c[_0x36247f(0x39b)]({'ip':_0x28b7da,'port':_0x2a8ac7,'name':'',..._0x6a6a36?{'relay':!![]}:{}});}return DNH_CACHE[_0x36247f(0x16b)](_0x5e6e24,{'t':_0x5847a6,'ips':_0x35429c}),_0x35429c[_0x36247f(0x39d)]();}}if(_0x577074['includes'](_0x36247f(0x283))&&_0x577074[_0x36247f(0x2ad)](_0x36247f(0x498))){for(const _0x1dc292 of _0x577074[_0x36247f(0x2e5)](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x35429c[_0x36247f(0x2ca)]>=_0x1736e8)break;const _0x27b568={};for(const _0xf5fa6 of _0x1dc292[_0x36247f(0x2e5)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x15287b=_0xf5fa6[_0x36247f(0x2e5)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x15287b)_0x27b568[_0x15287b[0x1]]=_0x15287b[0x2]['replace'](/<[^>]+>/g,'')[_0x36247f(0x2ae)]();}const _0x31baf6=(_0x27b568[_0x36247f(0x28e)]||'')[_0x36247f(0x2e5)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x31baf6)continue;const _0x1a0868=_0x31baf6[0x1],_0x4c0569=_0x31baf6[0x2]?parseInt(_0x31baf6[0x2]):0x1bb,_0x54499d=_0x1a0868+':'+_0x4c0569;if(_0xb5da40[_0x36247f(0x27d)](_0x54499d))continue;if(!_0x1fbcca(_0x1a0868))continue;_0xb5da40['add'](_0x54499d);const _0x10aba6=(_0x27b568[_0x36247f(0x46e)]||_0x27b568[_0x36247f(0x3b6)]||'线路')[_0x36247f(0x2ae)]();if(_0x10aba6)_0x233ab6[_0x10aba6]=(_0x233ab6[_0x10aba6]||0x0)+0x1,_0x35429c[_0x36247f(0x39b)]({'ip':_0x1a0868,'port':_0x4c0569,'name':_0x10aba6+'-'+String(_0x233ab6[_0x10aba6])['padStart'](0x2,'0'),..._0x6a6a36?{'relay':!![]}:{}});else _0x35429c['push']({'ip':_0x1a0868,'port':_0x4c0569,'name':'',..._0x6a6a36?{'relay':!![]}:{}});}return DNH_CACHE['set'](_0x5e6e24,{'t':_0x5847a6,'ips':_0x35429c}),_0x35429c[_0x36247f(0x39d)]();}for(const _0x2c4d3f of _0x577074[_0x36247f(0x1d9)](/\r?\n/)){if(_0x35429c['length']>=_0x1736e8)break;const _0x3ec2f1=_0x2c4d3f[_0x36247f(0x2e5)](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x3ec2f1)continue;const _0x2f701c=_0x3ec2f1[0x1][_0x36247f(0x33a)](/^\[|\]$/g,''),_0x130e30=_0x3ec2f1[0x2]?parseInt(_0x3ec2f1[0x2]):0x1bb,_0x35b335=_0x2f701c+':'+_0x130e30;if(_0xb5da40[_0x36247f(0x27d)](_0x35b335))continue;if(!_0x1fbcca(_0x2f701c))continue;_0xb5da40[_0x36247f(0x442)](_0x35b335);let _0x48e2f9='';const _0x5743d6=_0x2c4d3f[_0x36247f(0x32a)]('#');if(_0x5743d6>=0x0)try{_0x48e2f9=decodeURIComponent(_0x2c4d3f['slice'](_0x5743d6+0x1)[_0x36247f(0x2ae)]());}catch(_0x44fb70){_0x48e2f9=_0x2c4d3f[_0x36247f(0x39d)](_0x5743d6+0x1)[_0x36247f(0x2ae)]();}if(_0x48e2f9)_0x233ab6[_0x48e2f9]=(_0x233ab6[_0x48e2f9]||0x0)+0x1,_0x35429c[_0x36247f(0x39b)]({'ip':_0x2f701c,'port':_0x130e30,'name':_0x48e2f9+'-'+String(_0x233ab6[_0x48e2f9])[_0x36247f(0x376)](0x2,'0'),..._0x6a6a36?{'relay':!![]}:{}});else _0x35429c[_0x36247f(0x39b)]({'ip':_0x2f701c,'port':_0x130e30,'name':'',..._0x6a6a36?{'relay':!![]}:{}});}for(const _0x52730e of _0x577074[_0x36247f(0x1d9)](/\r?\n/)){if(_0x35429c[_0x36247f(0x2ca)]>=_0x1736e8)break;const _0x1e2cad=_0x52730e['match'](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x1e2cad)continue;const _0x185ea9=_0x1e2cad[0x1],_0x2ba0d2=_0x1e2cad[0x2]?parseInt(_0x1e2cad[0x2]):0x1bb,_0x4418c1=_0x185ea9+':'+_0x2ba0d2;if(_0xb5da40[_0x36247f(0x27d)](_0x4418c1))continue;if(!_0x1fbcca(_0x185ea9))continue;_0xb5da40['add'](_0x4418c1);const _0x520fdf=(_0x1e2cad[0x3]||'')[_0x36247f(0x2ae)]();if(_0x520fdf&&!/[\u4e00-\u9fa5]/[_0x36247f(0x3fe)](_0x520fdf)&&!_0x520fdf['includes']('|')){_0x35429c[_0x36247f(0x39b)]({'ip':_0x185ea9,'port':_0x2ba0d2,'name':_0x520fdf,..._0x6a6a36?{'relay':!![]}:{}});continue;}let _0x50ff71='';if(_0x1e2cad[0x3]){const _0x4960b5=_0x1e2cad[0x3]['match'](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x4960b5){const _0x1a2c1e=_0x4960b5[0x0]['match'](/[\u4e00-\u9fa5]{2,5}/);if(_0x1a2c1e)_0x50ff71=_0x1a2c1e[0x0];}else{const _0x4dfcea=_0x1e2cad[0x3][_0x36247f(0x1d9)]('|')[_0x36247f(0x2c2)](_0x37adf9=>_0x37adf9[_0x36247f(0x2ae)]()),_0x395bb9=_0x4dfcea[_0x36247f(0x384)](_0x3e612b=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x36247f(0x3fe)](_0x3e612b));if(_0x395bb9){const _0x2e1b67=_0x395bb9['match'](/[\u4e00-\u9fa5]{2,5}/);if(_0x2e1b67)_0x50ff71=_0x2e1b67[0x0];}else{const _0x31fd7d=_0x4dfcea[_0x36247f(0x384)](_0x22a700=>/^[\u4e00-\u9fa5]{2,5}$/['test'](_0x22a700)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x36247f(0x3fe)](_0x22a700));if(_0x31fd7d)_0x50ff71=_0x31fd7d;else{const _0x25928a=_0x1e2cad[0x3][_0x36247f(0x2e5)](/\b([A-Z]{2})\b/);if(_0x25928a)_0x50ff71=REGION_CN[_0x25928a[0x1]]||_0x25928a[0x1];}}}}if(_0x50ff71)_0x233ab6[_0x50ff71]=(_0x233ab6[_0x50ff71]||0x0)+0x1,_0x35429c['push']({'ip':_0x185ea9,'port':_0x2ba0d2,'name':_0x50ff71+'-'+String(_0x233ab6[_0x50ff71])[_0x36247f(0x376)](0x2,'0'),..._0x6a6a36?{'relay':!![]}:{}});else _0x35429c[_0x36247f(0x39b)]({'ip':_0x185ea9,'port':_0x2ba0d2,'name':'',..._0x6a6a36?{'relay':!![]}:{}});}if(!_0x35429c['length']&&_0x2b3d14){const _0x40beae=(String(_0x99094a)[_0x36247f(0x2e5)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x99094a)[_0x36247f(0x33a)](/^https?:\/\//,'')[_0x36247f(0x1d9)]('.')[0x0];if(REGION_CN[_0x40beae]){const _0x313a5a=randomIPsFromCidrs(_0x488207?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x1736e8);_0x313a5a[_0x36247f(0x197)]((_0x1a91fd,_0x4c9c47)=>_0x35429c[_0x36247f(0x39b)]({'ip':_0x1a91fd,'port':0x1bb,'name':REGION_CN[_0x40beae]+'-'+String(_0x4c9c47+0x1)[_0x36247f(0x376)](0x2,'0')}));}}return DNH_CACHE[_0x36247f(0x16b)](_0x5e6e24,{'t':_0x5847a6,'ips':_0x35429c}),_0x35429c[_0x36247f(0x39d)]();}catch(_0x3e3292){const _0x3d32f5=DNH_CACHE[_0x36247f(0x2bc)](_0x5e6e24);if(_0x3d32f5&&_0x3d32f5[_0x36247f(0x27e)]&&_0x3d32f5[_0x36247f(0x27e)][_0x36247f(0x2ca)])return _0x3d32f5[_0x36247f(0x27e)]['slice'](0x0,_0x1736e8);return[];}}if(!_0x99094a[_0x36247f(0x2ad)]('://')&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x36247f(0x3fe)](_0x99094a)){const _0x598fa8=_0x99094a[_0x36247f(0x2e5)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x598fa8)return[];const _0xb36b0=_0x598fa8[0x1][_0x36247f(0x33a)](/^\[|\]$/g,''),_0x5cd8ee=_0x598fa8[0x2]?parseInt(_0x598fa8[0x2]):0x1bb,_0xe96f6a=(_0x598fa8[0x3]||'')['trim'](),_0x31dbf0=isValidIp(_0xb36b0);if(!_0x31dbf0&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0xb36b0))return[];if(_0x317c43&&_0x31dbf0&&!isCloudflareIP(_0xb36b0))return[];if(_0xe96f6a)return[{'ip':_0xb36b0,'port':_0x5cd8ee,'name':_0xe96f6a}];if(_0x31dbf0)return[{'ip':_0xb36b0,'port':_0x5cd8ee,'name':''}];}const _0x379dd6=DNH_CACHE[_0x36247f(0x2bc)](_0x99094a);if(_0x379dd6&&_0x5847a6-_0x379dd6['t']<0xa*0x3c*0x3e8)return _0x379dd6[_0x36247f(0x27e)][_0x36247f(0x39d)](0x0,_0x1736e8)['map']((_0xae7e78,_0x1e8c9b)=>({'ip':_0xae7e78,'port':0x1bb,'name':_0x99094a+'-'+(_0x1e8c9b+0x1)}));const _0x15779d=await _0x382358(_0x99094a,'A',0x1);let _0x12d722=_0x317c43?_0x15779d['filter'](isCloudflareIP):_0x15779d;if(_0x488207){const _0x517806=await _0x382358(_0x99094a,'AAAA',0x1c);_0x12d722=[...new Set(_0x15779d['concat'](_0x517806))][_0x36247f(0x36f)](_0x53e5d8=>_0x317c43?isCloudflareIP(_0x53e5d8):!![]);}_0x12d722=_0x12d722[_0x36247f(0x39d)](0x0,_0x1736e8);if(!_0x12d722['length']){if(_0x379dd6&&_0x379dd6['ips']&&_0x379dd6[_0x36247f(0x27e)][_0x36247f(0x2ca)])return _0x379dd6[_0x36247f(0x27e)][_0x36247f(0x39d)](0x0,_0x1736e8)['map']((_0x3e7013,_0x3858e3)=>({'ip':_0x3e7013,'port':0x1bb,'name':_0x99094a+'-'+(_0x3858e3+0x1)}));return[];}return DNH_CACHE['set'](_0x99094a,{'t':_0x5847a6,'ips':_0x12d722}),_0x12d722[_0x36247f(0x2c2)]((_0x54cace,_0x161eb3)=>({'ip':_0x54cace,'port':0x1bb,'name':_0x99094a+'-'+(_0x161eb3+0x1)}));})),_0x31c56f=[];let _0xad6aac=0x0;while(_0xad6aac<_0x37ea95){let _0x492d9c=![];for(const _0x5cf9be of _0x28a2cf){if(_0xad6aac>=_0x37ea95)break;_0x5cf9be[_0x4c8b9a(0x2ca)]&&(_0x31c56f[_0x4c8b9a(0x39b)](_0x5cf9be['shift']()),_0xad6aac++,_0x492d9c=!![]);}if(!_0x492d9c)break;}return _0x31c56f;}async function buildNodes(_0x587015,_0x3d62cf=0x320,_0x519fcd=null){const _0x389990=a0_0x15be5e,_0x32e28a=[],_0x32ea63=new Set(),_0x2e9307=_0x587015[_0x389990(0x41c)]&&_0x587015[_0x389990(0x41c)][_0x389990(0x3fc)]||'',_0x4027e7=_0x587015['filter']&&_0x587015[_0x389990(0x36f)][_0x389990(0x21a)]||[],_0x3ab3ea=_0x4027e7[_0x389990(0x2ad)](_0x389990(0x398)),_0x399650=_0x4027e7[_0x389990(0x2ca)]===0x1&&_0x4027e7[0x0]==='IPv6',_0x3149c6=_0x399650?OFFICIAL_V6_CIDRS:_0x3ab3ea?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x12eca9=_0x2e9307==='custom'&&!(_0x587015['optimizer']&&_0x587015[_0x389990(0x41c)]['subIncludeDefault']),_0x5492f3=_0x2e9307===_0x389990(0x310)||_0x2e9307===_0x389990(0x18a),_0x56355f=(_0x448e5b,_0x31b167,_0x1efa77,_0x1b8ebf)=>{const _0x18632e=_0x389990;if(_0x32e28a['length']>=_0x3d62cf)return;if(isValidIp(_0x448e5b)&&!isCloudflareIP(_0x448e5b)&&!_0x12eca9&&!_0x1b8ebf)return;const _0x1b777a=_0x448e5b+':'+_0x31b167;if(_0x32ea63[_0x18632e(0x27d)](_0x1b777a))return;_0x32ea63[_0x18632e(0x442)](_0x1b777a);const _0x3f2dc7=!HTTP_PORTS['has'](Number(_0x31b167));if(_0x587015[_0x18632e(0x2a3)]&&!_0x3f2dc7)return;const _0x44344d=Number(_0x31b167);if(_0x587015[_0x18632e(0x224)])_0x32e28a[_0x18632e(0x39b)](vlessNode(_0x587015,_0x448e5b,_0x44344d,_0x1efa77));if(_0x587015['enableTrojan'])_0x32e28a[_0x18632e(0x39b)](trojanNode(_0x587015,_0x448e5b,_0x3f2dc7?_0x44344d:Number(_0x31b167),_0x1efa77));if(_0x587015[_0x18632e(0x408)]&&_0x3f2dc7)_0x32e28a[_0x18632e(0x39b)](vlessNode(_0x587015,_0x448e5b,_0x44344d,_0x1efa77,{'type':_0x18632e(0x2dc)}));},_0x256146=(_0x2a452a,_0x31d335,_0x158cae,_0x3b028d)=>{_0x56355f(_0x2a452a,Number(_0x31d335)||0x1bb,_0x158cae,_0x3b028d);};if(_0x2e9307==='random'){let _0x316900=Math[_0x389990(0x186)](Math[_0x389990(0x43f)](parseInt(_0x587015['optimizer'][_0x389990(0x3db)])||0x10,0x1),Math[_0x389990(0x186)](0x63,_0x3d62cf));if(_0x587015[_0x389990(0x3fa)]){const _0x38d8f1=parseInt(_0x587015[_0x389990(0x1f1)])||0x0;if(_0x38d8f1>0x0)_0x316900=Math['min'](Math[_0x389990(0x43f)](_0x316900,_0x38d8f1),_0x3d62cf);}const _0x31e487=(_0x587015['enableVless']?0x1:0x0)+(_0x587015[_0x389990(0x183)]?0x1:0x0)+(_0x587015[_0x389990(0x408)]?0x1:0x0)||0x1;let _0x46f1b7=0x0;const _0x4f0012=randomIPsFromCidrs(_0x3149c6,Math['ceil'](_0x316900/_0x31e487)*0x3);let _0x4cd7ac=_0x4f0012;if(_0x519fcd){const _0x70c8e9=_0x4f0012[_0x389990(0x36f)](_0xf4d7e1=>!_0x519fcd[_0x389990(0x27d)](_0xf4d7e1)),_0x3abd0d=_0x4f0012['filter'](_0x3a4655=>_0x519fcd[_0x389990(0x27d)](_0x3a4655));_0x4cd7ac=[..._0x70c8e9,..._0x3abd0d];}for(const _0x11b4ba of _0x4cd7ac){if(_0x46f1b7>=_0x316900)break;_0x587015['enableVless']&&(_0x32e28a['push'](vlessNode(_0x587015,_0x11b4ba,0x1bb,_0x389990(0x37a)+String(_0x46f1b7+0x1)[_0x389990(0x376)](0x2,'0'))),_0x46f1b7++);if(_0x46f1b7>=_0x316900)break;_0x587015[_0x389990(0x183)]&&(_0x32e28a['push'](trojanNode(_0x587015,_0x11b4ba,0x1bb,_0x389990(0x37a)+String(_0x46f1b7+0x1)[_0x389990(0x376)](0x2,'0'))),_0x46f1b7++);if(_0x46f1b7>=_0x316900)break;_0x587015[_0x389990(0x408)]&&(_0x32e28a[_0x389990(0x39b)](vlessNode(_0x587015,_0x11b4ba,0x1bb,_0x389990(0x37a)+String(_0x46f1b7+0x1)[_0x389990(0x376)](0x2,'0'),{'type':_0x389990(0x2dc)})),_0x46f1b7++);}return _0x32e28a;}const _0x38f7cc=String(_0x587015[_0x389990(0x18c)]||'')[_0x389990(0x1d9)](/[\n,;]+/)[_0x389990(0x2c2)](_0x2bfc8a=>_0x2bfc8a['trim']())[_0x389990(0x36f)](_0x2ea6b7=>_0x2ea6b7&&!_0x2ea6b7[_0x389990(0x2ad)](_0x389990(0x3e9)));_0x38f7cc[_0x389990(0x197)]((_0x3f9658,_0x2d8aa0)=>{const _0x451531=_0x389990,_0x4e13b8=_0x3f9658[_0x451531(0x32a)]('#'),_0xf58313=(_0x4e13b8>=0x0?_0x3f9658[_0x451531(0x39d)](0x0,_0x4e13b8):_0x3f9658)[_0x451531(0x2ae)](),_0x34024b=(_0x4e13b8>=0x0?_0x3f9658[_0x451531(0x39d)](_0x4e13b8+0x1):'')[_0x451531(0x2ae)](),_0x34e117=parseHostPort(_0xf58313,0x1bb);if(_0x34e117[_0x451531(0x292)][_0x451531(0x3c7)]('*.'))return;_0x256146(_0x34e117['host'],_0x34e117[_0x451531(0x453)],_0x34024b||'优选IP-'+String(_0x2d8aa0+0x1)['padStart'](0x2,'0'));});let _0x555da6=_0x587015['preferredIPs']||[];if(_0x3ab3ea&&!_0x399650&&_0x555da6[_0x389990(0x2ca)]>0x1){const _0x525d04=[],_0x5809af=[];for(const _0x550bf6 of _0x555da6)(String(_0x550bf6['ip'])[_0x389990(0x32a)](':')>=0x0?_0x5809af:_0x525d04)[_0x389990(0x39b)](_0x550bf6);const _0x42106f=[],_0x5ca4e4=Math['max'](_0x525d04['length'],_0x5809af[_0x389990(0x2ca)]);for(let _0x3ce206=0x0;_0x3ce206<_0x5ca4e4;_0x3ce206++){if(_0x3ce206<_0x525d04[_0x389990(0x2ca)])_0x42106f['push'](_0x525d04[_0x3ce206]);if(_0x3ce206<_0x5809af[_0x389990(0x2ca)])_0x42106f[_0x389990(0x39b)](_0x5809af[_0x3ce206]);}_0x555da6=_0x42106f;}_0x555da6[_0x389990(0x197)]((_0x4b09dd,_0x539025)=>{const _0x266a15=_0x389990;_0x256146(_0x4b09dd['ip'],_0x4b09dd[_0x266a15(0x453)]||0x1bb,_0x4b09dd[_0x266a15(0x423)]||_0x266a15(0x37a)+String(_0x539025+0x1)[_0x266a15(0x376)](0x2,'0'),_0x4b09dd['relay']===!![]);});if(_0x2e9307===_0x389990(0x310)&&!(_0x587015['optimizer']&&_0x587015[_0x389990(0x41c)][_0x389990(0x43a)]))return _0x32e28a;!_0x38f7cc[_0x389990(0x2ca)]&&!(_0x587015[_0x389990(0x34b)]||[])[_0x389990(0x2ca)]&&(parseIPList(BUILTIN_PREFERRED_IPS[_0x389990(0x3d5)]('\x0a'))[_0x389990(0x197)](_0x170965=>_0x256146(_0x170965['ip'],_0x170965[_0x389990(0x453)]||0x1bb,_0x170965[_0x389990(0x423)]||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x389990(0x197)]((_0x59bc15,_0x9c4483)=>_0x256146(_0x59bc15,0x1bb,_0x389990(0x18b)+String(_0x9c4483+0x1)[_0x389990(0x376)](0x2,'0'))));const _0x3a80be=Math[_0x389990(0x186)](Math[_0x389990(0x43f)](parseInt(_0x587015[_0x389990(0x41c)]&&_0x587015['optimizer'][_0x389990(0x3e5)]||0x0)||0x0,0x0),0x1388),_0x4195cf=Math[_0x389990(0x186)](_0x3a80be,_0x3d62cf)-_0x32ea63['size'];if(_0x4195cf>0x0){const _0x4b4793=_0x519fcd?BUILTIN_STABLE_IPS['filter'](_0x16acac=>!_0x519fcd[_0x389990(0x27d)](_0x16acac)):BUILTIN_STABLE_IPS[_0x389990(0x39d)](),_0x3feb2d=randomIPsFromCidrs(_0x3149c6,_0x4195cf*0x3),_0x5269c7=_0x519fcd?_0x3feb2d[_0x389990(0x36f)](_0x644099=>!_0x519fcd[_0x389990(0x27d)](_0x644099)):_0x3feb2d;let _0x3285cd=[..._0x4b4793,..._0x5269c7];if(_0x3285cd[_0x389990(0x2ca)]<_0x4195cf)_0x3285cd=[...BUILTIN_STABLE_IPS,..._0x3feb2d];if(_0x3285cd[_0x389990(0x2ca)]>0x0){const _0x14c84f=Math[_0x389990(0x186)](_0x3285cd[_0x389990(0x2ca)],Math['max'](_0x4195cf,0x14),0x3c),_0xb63565=_0x3285cd[_0x389990(0x39d)](0x0,_0x14c84f),_0x379ba8=_0x5492f3?_0xb63565[_0x389990(0x2c2)](()=>!![]):await probeAll(_0xb63565,_0x161cf8=>testProxyAlive(_0x161cf8,0x1bb,0x5dc)),_0x39487b=_0xb63565['filter']((_0x3a164f,_0x4af91a)=>_0x379ba8[_0x4af91a]),_0x349e22=_0x3285cd[_0x389990(0x39d)](_0x14c84f);_0x3285cd=[..._0x39487b,..._0x349e22][_0x389990(0x39d)](0x0,_0x4195cf);}let _0x2b1fe6=0x0;for(const _0x91daf3 of _0x3285cd){if(_0x32e28a[_0x389990(0x2ca)]>=_0x3d62cf)break;_0x2b1fe6++,_0x256146(_0x91daf3,0x1bb,_0x389990(0x37a)+String(_0x2b1fe6)['padStart'](0x3,'0'));}}return _0x32e28a;}function parseNodeServer(_0x986b22){const _0x2de1e8=a0_0x15be5e,_0x330234=_0x986b22['indexOf']('@'),_0x50ff91=_0x986b22['indexOf']('?',_0x330234),_0x36b405=_0x50ff91>_0x330234&&_0x330234>=0x0?_0x986b22[_0x2de1e8(0x39d)](_0x330234+0x1,_0x50ff91):_0x986b22[_0x2de1e8(0x39d)](_0x330234+0x1);if(_0x36b405['startsWith']('[')){const _0x1b2a59=_0x36b405['indexOf'](']'),_0xbc36ee=_0x1b2a59>0x0?_0x36b405['slice'](0x1,_0x1b2a59):_0x36b405,_0x56e7d9=_0x36b405[_0x2de1e8(0x39d)](_0x1b2a59+0x1),_0x3a9354=_0x56e7d9['startsWith'](':')?parseInt(_0x56e7d9[_0x2de1e8(0x39d)](0x1)):0x1bb;return{'host':_0xbc36ee,'port':isNaN(_0x3a9354)?0x1bb:_0x3a9354};}const _0x2a76a9=_0x36b405[_0x2de1e8(0x1ec)](':');if(_0x2a76a9>0x0){const _0x5be6cd=parseInt(_0x36b405[_0x2de1e8(0x39d)](_0x2a76a9+0x1));return{'host':_0x36b405[_0x2de1e8(0x39d)](0x0,_0x2a76a9),'port':isNaN(_0x5be6cd)?0x1bb:_0x5be6cd};}return{'host':_0x36b405,'port':0x1bb};}function getParam(_0x192a4b,_0x557c0b){const _0x441aab=a0_0x15be5e,_0x13caee=_0x192a4b[_0x441aab(0x32a)]('?');if(_0x13caee<0x0)return null;const _0x3eee8d=_0x192a4b[_0x441aab(0x32a)]('#',_0x13caee),_0x336e27=_0x3eee8d>_0x13caee?_0x192a4b[_0x441aab(0x39d)](_0x13caee+0x1,_0x3eee8d):_0x192a4b['slice'](_0x13caee+0x1);for(const _0x4a8971 of _0x336e27[_0x441aab(0x1d9)]('&')){const _0x1c28be=_0x4a8971[_0x441aab(0x32a)]('='),_0x36eb7b=_0x1c28be>0x0?_0x4a8971[_0x441aab(0x39d)](0x0,_0x1c28be):_0x4a8971;if(_0x36eb7b===_0x557c0b)return _0x1c28be>0x0?decodeURIComponent(_0x4a8971['slice'](_0x1c28be+0x1)):'';}return null;}function parseShareNode(_0xa505f0,_0x2773fd){const _0x1d7476=a0_0x15be5e,{host:_0x17a09c,port:_0x18dcec}=parseNodeServer(_0xa505f0),_0xf37b2a=_0x17a09c,_0x291ff7=_0xa505f0[_0x1d7476(0x32a)]('#');let _0x57f1d6='节点'+(_0x2773fd+0x1);if(_0x291ff7>=0x0)try{_0x57f1d6=decodeURIComponent(_0xa505f0[_0x1d7476(0x39d)](_0x291ff7+0x1))||_0x57f1d6;}catch(_0x54e481){}const _0x4e6e01=_0xa505f0[_0x1d7476(0x32a)]('@');let _0x4f5930='';if(_0x4e6e01>=0x0){const _0x1b4a7a=_0xa505f0[_0x1d7476(0x32a)](_0x1d7476(0x3e9)),_0x23c859=_0x1b4a7a>=0x0?_0x1b4a7a+0x3:0x0;try{_0x4f5930=decodeURIComponent(_0xa505f0['slice'](_0x23c859,_0x4e6e01));}catch(_0x1f3220){_0x4f5930=_0xa505f0[_0x1d7476(0x39d)](_0x23c859,_0x4e6e01);}}const _0x3810c4=_0xa505f0[_0x1d7476(0x3c7)]('trojan://'),_0x73b567=_0x3810c4||(getParam(_0xa505f0,_0x1d7476(0x2dd))||'tls')===_0x1d7476(0x456);return{'srv':_0xf37b2a,'prt':_0x18dcec,'name':_0x57f1d6,'user':_0x4f5930,'isTrojan':_0x3810c4,'tls':_0x73b567};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',a0_0x15be5e(0x20f)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',a0_0x15be5e(0x235)],'联通':['联通','CU','UNICOM'],'电信':['电信','CT','CHINATELECOM']},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[a0_0x15be5e(0x263),a0_0x15be5e(0x398)];function filterNodes(_0x2ebe50,_0x4890a4){const _0x46d4b2=a0_0x15be5e;if(!_0x4890a4||!_0x4890a4[_0x46d4b2(0x25b)]&&!_0x4890a4[_0x46d4b2(0x21a)]&&!_0x4890a4['isp'])return _0x2ebe50;const _0xaeb28c=_0x4890a4['region']||_0x46d4b2(0x3f9),_0x1d03fb=_0x4890a4[_0x46d4b2(0x21a)]||FILTER_IPTYPES,_0x4e3c91=_0x4890a4[_0x46d4b2(0x3e6)]||FILTER_ISPS,_0x6526cb=_0x2ebe50[_0x46d4b2(0x2c2)](_0x5746b1=>{const _0x2890d3=_0x46d4b2,{host:_0xbfecc3}=parseNodeServer(_0x5746b1);let _0x141edf='';try{const _0x1e7d4f=_0x5746b1['indexOf']('#');if(_0x1e7d4f>=0x0)_0x141edf=decodeURIComponent(_0x5746b1[_0x2890d3(0x39d)](_0x1e7d4f+0x1)||'');}catch(_0x44d0aa){_0x141edf='';}return{'host':_0xbfecc3,'name':_0x141edf,'up':_0x141edf[_0x2890d3(0x470)]()};}),_0x159f6e=_0x6526cb['some'](_0x371ebc=>_0x371ebc['up']&&Object['keys'](ISP_TAGS)[_0x46d4b2(0x350)](_0x53015e=>(ISP_TAGS[_0x53015e]||[_0x53015e])[_0x46d4b2(0x350)](_0x2ec687=>_0x371ebc['up'][_0x46d4b2(0x2ad)](_0x2ec687[_0x46d4b2(0x470)]())))),_0x3f6bd7=(_0x5aed06,_0x39ff64,_0x1126f8)=>{const _0x30d136=_0x46d4b2,_0x5a40d6=Array['isArray'](_0x5aed06)?_0x5aed06['length']===0x0||_0x5aed06[_0x30d136(0x2ad)](_0x30d136(0x3f9))?null:_0x5aed06[_0x30d136(0x40f)](_0x197e60=>REGION_TAGS[_0x197e60]||[]):_0x5aed06!==_0x30d136(0x3f9)?REGION_TAGS[_0x5aed06]||[]:null,_0x1d2f69=_0x1126f8[_0x30d136(0x2ca)]>0x0&&_0x1126f8['length']<FILTER_ISPS[_0x30d136(0x2ca)];return _0x2ebe50[_0x30d136(0x36f)]((_0x221d68,_0x3cb367)=>{const _0x1375fd=_0x30d136,_0x3e2e93=_0x6526cb[_0x3cb367],_0x1aea3e=_0x3e2e93[_0x1375fd(0x292)][_0x1375fd(0x32a)](':')>=0x0;if(!_0x3e2e93[_0x1375fd(0x423)])return![];if(_0x5a40d6&&!_0x5a40d6[_0x1375fd(0x350)](_0x3e05e4=>_0x3e2e93['up'][_0x1375fd(0x2ad)](_0x3e05e4['toUpperCase']()))){if(!/^(优选IP|域名)-\d+/[_0x1375fd(0x3fe)](_0x3e2e93[_0x1375fd(0x423)])&&_0x3e2e93[_0x1375fd(0x423)]!=='原生地址')return![];}if(_0x39ff64['length']===0x1){if(_0x39ff64[0x0]==='IPv4'&&_0x1aea3e)return![];if(_0x39ff64[0x0]===_0x1375fd(0x398)&&!_0x1aea3e)return![];}if(_0x1d2f69&&_0x159f6e&&!_0x1126f8['some'](_0x51164b=>(ISP_TAGS[_0x51164b]||[_0x51164b])['some'](_0x1abc5d=>_0x3e2e93['up'][_0x1375fd(0x2ad)](_0x1abc5d['toUpperCase']()))))return![];return!![];});};let _0x37d19b=_0x3f6bd7(_0xaeb28c,_0x1d03fb,_0x4e3c91);if(!_0x37d19b['length'])_0x37d19b=_0x3f6bd7(_0xaeb28c,_0x1d03fb,FILTER_ISPS);if(!_0x37d19b[_0x46d4b2(0x2ca)])_0x37d19b=_0x3f6bd7(_0xaeb28c,FILTER_IPTYPES,FILTER_ISPS);if(!_0x37d19b[_0x46d4b2(0x2ca)])_0x37d19b=_0x3f6bd7(_0x46d4b2(0x3f9),FILTER_IPTYPES,FILTER_ISPS);return _0x37d19b;}function yamlVal(_0x45330f){const _0x448e0f=a0_0x15be5e;if(typeof _0x45330f===_0x448e0f(0x2a5)||typeof _0x45330f===_0x448e0f(0x37d))return String(_0x45330f);const _0x280c93=String(_0x45330f);return/^[\w.\-/\u4e00-\u9fa5]+$/[_0x448e0f(0x3fe)](_0x280c93)?_0x280c93:JSON[_0x448e0f(0x2f4)](_0x280c93);}function clashProxyYaml(_0xcb0f6f){const _0x3b1969=a0_0x15be5e,_0xb0ded1=[];_0xb0ded1['push'](_0x3b1969(0x1a4)+yamlVal(_0xcb0f6f[_0x3b1969(0x423)])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20type:\x20'+_0xcb0f6f[_0x3b1969(0x238)]),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x373)+yamlVal(_0xcb0f6f['server'])),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x1a1)+_0xcb0f6f[_0x3b1969(0x453)]);if(_0xcb0f6f[_0x3b1969(0x238)]==='vless')_0xb0ded1['push'](_0x3b1969(0x213)+yamlVal(_0xcb0f6f['uuid']));else _0xb0ded1['push'](_0x3b1969(0x262)+yamlVal(_0xcb0f6f[_0x3b1969(0x332)]));_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x3de)+_0xcb0f6f[_0x3b1969(0x1bb)]),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20udp:\x20true');if(_0xcb0f6f[_0x3b1969(0x456)]){_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20tls:\x20true'),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x1e0)),_0xb0ded1[_0x3b1969(0x39b)](_0xcb0f6f[_0x3b1969(0x1bb)]===_0x3b1969(0x2dc)?_0x3b1969(0x327):_0x3b1969(0x37c)),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x49b)+yamlVal(_0xcb0f6f['servername']));if(_0xcb0f6f[_0x3b1969(0x238)]===_0x3b1969(0x21b))_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x430)+yamlVal(_0xcb0f6f['servername']));_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x2a0)),_0xcb0f6f['ech-opts']&&(_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20ech-opts:'),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x1fb)+yamlVal(_0xcb0f6f[_0x3b1969(0x1f4)][_0x3b1969(0x209)])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20query-server-name:\x20'+yamlVal(_0xcb0f6f[_0x3b1969(0x1f4)]['query-server-name'])));}if(_0xcb0f6f[_0x3b1969(0x1bb)]==='ws')_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x19c)),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x410)+yamlVal(_0xcb0f6f[_0x3b1969(0x191)][_0x3b1969(0x45d)])),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x293)),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20'+yamlVal(_0xcb0f6f[_0x3b1969(0x191)]['headers'][_0x3b1969(0x199)]));else{if(_0xcb0f6f[_0x3b1969(0x1bb)]===_0x3b1969(0x2dc)){const _0x1be836=_0xcb0f6f[_0x3b1969(0x458)];_0xb0ded1['push'](_0x3b1969(0x179)),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x410)+yamlVal(_0x1be836['path'])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20mode:\x20'+yamlVal(_0x1be836['mode'])),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x166)+yamlVal(_0x1be836[_0x3b1969(0x292)])),_0xb0ded1['push']('\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20'+yamlVal(_0x1be836[_0x3b1969(0x308)])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20x-padding-method:\x20'+yamlVal(_0x1be836['x-padding-method'])),_0xb0ded1[_0x3b1969(0x39b)](_0x3b1969(0x32d)+yamlVal(_0x1be836[_0x3b1969(0x471)])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20x-padding-header:\x20'+yamlVal(_0x1be836[_0x3b1969(0x324)])),_0xb0ded1[_0x3b1969(0x39b)]('\x20\x20\x20\x20\x20\x20x-padding-key:\x20'+yamlVal(_0x1be836['x-padding-key']));}}return _0xb0ded1['join']('\x0a');}function generateClash(_0x258648,_0x432f2a){const _0x68c0b8=a0_0x15be5e,_0xadf39=_0x258648[_0x68c0b8(0x292)],_0x42e9de='/'+_0x258648['path'],_0x485753=new Set(),_0x56c7a3=_0x432f2a['map'](_0xd42a3d=>{const _0x299cb3=_0x68c0b8,{user:_0x19df37,srv:_0x4fed88,prt:_0x2e119d,name:_0x44d589,isTrojan:_0x13adfa,tls:_0x5a38ce}=parseShareNode(_0xd42a3d,0x0);let _0x2777b9=_0x44d589;const _0xdaa189=getParam(_0xd42a3d,_0x299cb3(0x238))||'ws';if(_0x485753['has'](_0x2777b9)){const _0x506570=_0x13adfa?'T':_0xdaa189===_0x299cb3(0x2dc)?'X':'W';let _0x428eae=_0x2777b9+'·'+_0x506570,_0x4bcebf=0x2;while(_0x485753[_0x299cb3(0x27d)](_0x428eae)){_0x428eae=_0x2777b9+'·'+_0x506570+_0x4bcebf,_0x4bcebf++;}_0x2777b9=_0x428eae;}_0x485753[_0x299cb3(0x442)](_0x2777b9);const _0x21d437={'name':_0x2777b9,'server':_0x4fed88,'port':_0x2e119d,'udp':!![],..._0x5a38ce?{'tls':!![],'skip-cert-verify':!![],'servername':_0xadf39,'client-fingerprint':_0x299cb3(0x47d),'alpn':['http/1.1']}:{},..._0x258648['ech']&&_0x5a38ce?{'ech-opts':{'enable':!![],'query-server-name':_0x258648[_0x299cb3(0x467)]||_0x299cb3(0x416)}}:{}};if(_0x13adfa)return{..._0x21d437,'type':_0x299cb3(0x21b),'password':_0x19df37,'network':'ws','ws-opts':{'path':_0x42e9de,'headers':{'Host':_0xadf39}}};if(_0xdaa189===_0x299cb3(0x2dc)){let _0x234678={};try{_0x234678=JSON[_0x299cb3(0x2e7)](getParam(_0xd42a3d,_0x299cb3(0x3cf))||'{}');}catch(_0x3f28ff){}return{..._0x21d437,'type':'vless','uuid':_0x19df37,'network':_0x299cb3(0x2dc),'alpn':['h2'],'xhttp-opts':{'path':_0x42e9de,'mode':_0x299cb3(0x1cb),'host':_0xadf39,'x-padding-obfs-mode':_0x234678['xPaddingObfsMode']!==undefined?_0x234678[_0x299cb3(0x3bf)]:!![],'x-padding-method':_0x234678[_0x299cb3(0x3a6)]||_0x299cb3(0x476),'x-padding-placement':_0x234678[_0x299cb3(0x2b5)]||'queryInHeader','x-padding-header':_0x234678['xPaddingHeader']||'','x-padding-key':_0x234678['xPaddingKey']||''}};}return{..._0x21d437,'type':_0x299cb3(0x402),'uuid':_0x19df37,'network':'ws','ws-opts':{'path':_0x42e9de,'headers':{'Host':_0xadf39}}};});_0x56c7a3[_0x68c0b8(0x29b)]((_0x5fcf54,_0x4b3be)=>(_0x5fcf54['port']===0x1bb?0x0:0x1)-(_0x4b3be[_0x68c0b8(0x453)]===0x1bb?0x0:0x1));const _0x2a1b17=_0x68c0b8(0x421)+_0x56c7a3[_0x68c0b8(0x2c2)](_0x360fca=>clashProxyYaml(_0x360fca))[_0x68c0b8(0x3d5)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x2a1b17;}function generateSurfboard(_0xcca637,_0x15891f){const _0x46e2d6=a0_0x15be5e,_0x5ee4c2=_0xcca637[_0x46e2d6(0x292)],_0x21e645='/'+_0xcca637[_0x46e2d6(0x45d)],_0x664151=[];for(const _0x3e8b8c of _0x15891f){if(_0x3e8b8c[_0x46e2d6(0x3c7)](_0x46e2d6(0x2da))&&_0x3e8b8c[_0x46e2d6(0x32a)](_0x46e2d6(0x23a))<0x0)_0x664151['push'](_0x3e8b8c);else{if(_0x3e8b8c[_0x46e2d6(0x3c7)](_0x46e2d6(0x282))&&_0x3e8b8c[_0x46e2d6(0x32a)](_0x46e2d6(0x234))<0x0&&_0x3e8b8c[_0x46e2d6(0x32a)](_0x46e2d6(0x23a))<0x0)_0x664151[_0x46e2d6(0x39b)](_0x3e8b8c[_0x46e2d6(0x33a)](/^vless:\/\//,'trojan://')[_0x46e2d6(0x33a)](_0x46e2d6(0x188),''));}}const _0xe01b35=_0x664151[_0x46e2d6(0x2c2)]((_0x510301,_0x57fe0b)=>{const _0x3ba298=_0x46e2d6,{user:_0x2438d0,srv:_0x4a1ad3,prt:_0x147e7a,name:_0x28cc62}=parseShareNode(_0x510301,_0x57fe0b);return _0x28cc62+_0x3ba298(0x448)+_0x4a1ad3+',\x20'+_0x147e7a+_0x3ba298(0x2c0)+_0x2438d0+_0x3ba298(0x3c5)+_0x21e645+_0x3ba298(0x30a)+_0x5ee4c2+',\x20tls=true,\x20skip-cert-verify=true,\x20sni='+_0x5ee4c2;});return _0x46e2d6(0x2b4)+_0xe01b35['join']('\x0a')+_0x46e2d6(0x174)+_0xe01b35[_0x46e2d6(0x2c2)](_0x338919=>_0x338919['split']('\x20=\x20')[0x0])[_0x46e2d6(0x3d5)](',\x20')+_0x46e2d6(0x3bd);}function generateSingbox(_0x4e72d6,_0x4878b4){const _0x43ba43=a0_0x15be5e,_0x2830e6=_0x4e72d6[_0x43ba43(0x292)],_0xcf6a72='/'+_0x4e72d6[_0x43ba43(0x45d)],_0x31e07d=_0x4878b4[_0x43ba43(0x2c2)]((_0x7265d9,_0x49bf4a)=>{const _0x20c19d=_0x43ba43,{user:_0x23b824,srv:_0x51da98,prt:_0x284b0e,name:_0x58d2aa,isTrojan:_0x1c45cf,tls:_0x9584b1}=parseShareNode(_0x7265d9,_0x49bf4a),_0x1bce48=getParam(_0x7265d9,_0x20c19d(0x238))||'ws',_0x2cb192=_0x9584b1?_0x1bce48===_0x20c19d(0x2dc)?{'enabled':!![],'server_name':_0x2830e6,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x2830e6,'insecure':!![],'alpn':[_0x20c19d(0x3f6)],'utls':{'enabled':!![],'fingerprint':_0x20c19d(0x47d)}}:{'enabled':![]},_0x10c1a7=_0x1bce48===_0x20c19d(0x2dc)?{'type':_0x20c19d(0x2dc),'mode':'stream-one','path':_0xcf6a72}:_0x9584b1?{'type':'ws','path':_0xcf6a72,'headers':{'Host':_0x2830e6},'max_early_data':0x800,'early_data_header_name':_0x20c19d(0x3ab)}:{'type':'ws','path':_0xcf6a72,'headers':{'Host':_0x2830e6}};if(_0x1c45cf)return{'type':_0x20c19d(0x21b),'tag':_0x58d2aa,'server':_0x51da98,'server_port':_0x284b0e,'password':_0x23b824,'tls':_0x2cb192,'transport':_0x10c1a7};return{'type':'vless','tag':_0x58d2aa,'server':_0x51da98,'server_port':_0x284b0e,'uuid':_0x23b824,'packet_encoding':_0x20c19d(0x268),'tls':_0x2cb192,'transport':_0x10c1a7};}),_0x2b4226=_0x31e07d[_0x43ba43(0x2c2)](_0x554f1f=>_0x554f1f[_0x43ba43(0x2a1)]),_0x2d4b81=[['geosite-cn',_0x43ba43(0x3bb)],['geosite-google',_0x43ba43(0x1ca)],[_0x43ba43(0x2e1),_0x43ba43(0x277)],[_0x43ba43(0x49c),_0x43ba43(0x274)],[_0x43ba43(0x28c),_0x43ba43(0x334)],[_0x43ba43(0x48b),_0x43ba43(0x3e3)],[_0x43ba43(0x38c),'🌍\x20国外媒体'],[_0x43ba43(0x272),_0x43ba43(0x3e3)],[_0x43ba43(0x17c),'🌍\x20国外媒体'],[_0x43ba43(0x38d),_0x43ba43(0x3e3)],['geosite-telegram',_0x43ba43(0x3e3)],['geosite-github',_0x43ba43(0x3e3)],[_0x43ba43(0x401),_0x43ba43(0x3cc)]],_0x290696={'log':{'level':_0x43ba43(0x44d)},'dns':{'servers':[{'tag':_0x43ba43(0x41a),'address':_0x43ba43(0x18e)},{'tag':'dns-direct','address':_0x43ba43(0x17b)}],'strategy':_0x43ba43(0x424),'independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':'198.18.0.0/15','store_fakeip':!![]}},'inbounds':[{'type':'mixed','tag':_0x43ba43(0x387),'listen':'127.0.0.1','listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':'tun','tag':_0x43ba43(0x1b5),'interface_name':_0x43ba43(0x489),'inet4_address':[_0x43ba43(0x1ac)],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':_0x43ba43(0x1e8),'sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x31e07d,{'type':'direct','tag':_0x43ba43(0x379)},{'type':_0x43ba43(0x3cc),'tag':'block'},{'type':_0x43ba43(0x318),'tag':_0x43ba43(0x1cc)},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x3f2),'outbounds':_0x2b4226},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x3bb),'outbounds':[_0x43ba43(0x379)]},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x23e),'outbounds':[_0x43ba43(0x3f2),_0x43ba43(0x3bb)]},{'type':_0x43ba43(0x35c),'tag':'🌍\x20国外媒体','outbounds':['🚀\x20节点选择']},{'type':_0x43ba43(0x35c),'tag':'🌐\x20谷歌服务','outbounds':[_0x43ba43(0x3f2)]},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x334),'outbounds':[_0x43ba43(0x3f2)]},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x277),'outbounds':['🎯\x20全球直连']},{'type':_0x43ba43(0x35c),'tag':_0x43ba43(0x274),'outbounds':['🎯\x20全球直连']}],'route':{'rules':[{'protocol':_0x43ba43(0x318),'outbound':_0x43ba43(0x1cc)},{'ip_is_private':!![],'outbound':_0x43ba43(0x379)},..._0x2d4b81['map'](([_0x16db32,_0x4987a2])=>({'rule_set':[_0x16db32],'outbound':_0x4987a2})),{'geoip':['cn'],'outbound':'direct'},{'ip_is_private':!![],'outbound':_0x43ba43(0x3cc)}],'rule_set':_0x2d4b81[_0x43ba43(0x2c2)](([_0x3fd843])=>({'type':_0x43ba43(0x15c),'tag':_0x3fd843,'format':_0x43ba43(0x28b),'url':_0x43ba43(0x380)+_0x3fd843+_0x43ba43(0x2c6)})),'final':_0x43ba43(0x23e),'auto_detect_interface':!![],'default_domain_resolver':{'server':'dns-remote'}},'experimental':{'clash_api':{'external_controller':'127.0.0.1:9090'}}};return JSON[_0x43ba43(0x2f4)](_0x290696,null,0x2);}function generateSurge(_0x569ef8,_0x19468f){const _0x2eef2e=a0_0x15be5e,_0x247104=_0x569ef8[_0x2eef2e(0x292)],_0x32becd='/'+_0x569ef8['path'],_0x33d47e=_0x19468f[_0x2eef2e(0x2c2)]((_0x179479,_0x503e54)=>{const _0x17bba9=_0x2eef2e,{user:_0x5877aa,srv:_0x4b5469,prt:_0x5943d3,name:_0x8e11a3,isTrojan:_0x3003d2,tls:_0x1f2e99}=parseShareNode(_0x179479,_0x503e54),_0x1ec706=_0x1f2e99?_0x17bba9(0x22d)+_0x247104:_0x17bba9(0x3ef);return _0x3003d2?_0x8e11a3+_0x17bba9(0x448)+_0x4b5469+',\x20'+_0x5943d3+_0x17bba9(0x2c0)+_0x5877aa+_0x17bba9(0x3c5)+_0x32becd+_0x17bba9(0x30a)+_0x247104+_0x1ec706:_0x8e11a3+'\x20=\x20vless,\x20'+_0x4b5469+',\x20'+_0x5943d3+_0x17bba9(0x30c)+_0x5877aa+',\x20ws=true,\x20ws-path='+_0x32becd+',\x20ws-headers=Host:'+_0x247104+_0x1ec706;});return'#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a'+_0x33d47e[_0x2eef2e(0x3d5)]('\x0a')+_0x2eef2e(0x174)+_0x33d47e[_0x2eef2e(0x2c2)](_0x12fb83=>_0x12fb83['split']('\x20=\x20')[0x0])[_0x2eef2e(0x3d5)](',\x20')+_0x2eef2e(0x3bd);}function generateLoon(_0x499419,_0x1f5fdc){const _0x4bba46=a0_0x15be5e,_0x31b6e3=_0x499419['host'],_0x3b3333='/'+_0x499419[_0x4bba46(0x45d)],_0x4f0ba4=_0x1f5fdc[_0x4bba46(0x2c2)]((_0x47842e,_0x1e5abe)=>{const _0x47e915=_0x4bba46,{user:_0x190a91,srv:_0x28c405,prt:_0x3f4233,name:_0x9cb57c,isTrojan:_0x110501,tls:_0x2cbb51}=parseShareNode(_0x47842e,_0x1e5abe),_0x5875cd=_0x2cbb51?',\x20tls=true,\x20skip-cert-verify=true,\x20sni='+_0x31b6e3:',\x20tls=false';return _0x110501?_0x9cb57c+'\x20=\x20trojan,\x20'+_0x28c405+',\x20'+_0x3f4233+',\x20password='+_0x190a91+_0x47e915(0x3c5)+_0x3b3333+',\x20ws-headers=Host:'+_0x31b6e3+_0x5875cd:_0x9cb57c+_0x47e915(0x412)+_0x28c405+',\x20'+_0x3f4233+_0x47e915(0x30c)+_0x190a91+',\x20ws=true,\x20ws-path='+_0x3b3333+_0x47e915(0x30a)+_0x31b6e3+_0x5875cd;}),_0x14706e=_0x4f0ba4[_0x4bba46(0x2c2)](_0x54a483=>_0x54a483['split'](_0x4bba46(0x44f))[0x0])[_0x4bba46(0x3d5)](',\x20');return _0x4bba46(0x252)+_0x4f0ba4[_0x4bba46(0x3d5)]('\x0a')+_0x4bba46(0x174)+_0x14706e+_0x4bba46(0x1ba)+_0x14706e+_0x4bba46(0x2f7);}function generateQuanX(_0x407798,_0xeb5d17){const _0x56b8c2=a0_0x15be5e,_0x514cce=_0x407798[_0x56b8c2(0x292)],_0x3c66c4='/'+_0x407798['path'],_0x500cb1=_0x573d0b=>_0x573d0b[_0x56b8c2(0x32a)](':')>=0x0?'['+_0x573d0b+']':_0x573d0b,_0x1ccc04=_0xeb5d17[_0x56b8c2(0x2c2)]((_0x5a1eb2,_0x54f1e2)=>{const _0x4136e4=_0x56b8c2,{user:_0x18d98e,srv:_0x1a9523,prt:_0x156577,name:_0x379ab8}=parseShareNode(_0x5a1eb2,_0x54f1e2);if(_0x5a1eb2['startsWith'](_0x4136e4(0x2da)))return _0x4136e4(0x34f)+_0x500cb1(_0x1a9523)+':'+_0x156577+_0x4136e4(0x2c0)+_0x18d98e+_0x4136e4(0x1a7)+_0x514cce+_0x4136e4(0x3da)+_0x514cce+_0x4136e4(0x486)+_0x3c66c4+_0x4136e4(0x1dd)+_0x379ab8;const _0x528fe2=(getParam(_0x5a1eb2,_0x4136e4(0x2dd))||_0x4136e4(0x456))===_0x4136e4(0x456);return _0x4136e4(0x220)+_0x500cb1(_0x1a9523)+':'+_0x156577+_0x4136e4(0x3ea)+_0x18d98e+_0x4136e4(0x370)+(_0x528fe2?_0x4136e4(0x2fa):'ws')+_0x4136e4(0x399)+_0x514cce+',\x20obfs-uri='+_0x3c66c4+(_0x528fe2?_0x4136e4(0x1d1):'')+',\x20tag='+_0x379ab8;}),_0x2c36b2=_0xeb5d17[_0x56b8c2(0x2c2)]((_0x22723a,_0x198492)=>{const _0x38caad=_0x56b8c2,_0x4a5df0=_0x22723a[_0x38caad(0x32a)]('#');if(_0x4a5df0<0x0)return'节点'+(_0x198492+0x1);try{return decodeURIComponent(_0x22723a[_0x38caad(0x39d)](_0x4a5df0+0x1))||'节点'+(_0x198492+0x1);}catch(_0x4aa7f0){return'节点'+(_0x198492+0x1);}})['join'](',\x20');return _0x56b8c2(0x499)+_0x1ccc04[_0x56b8c2(0x3d5)]('\x0a')+'\x0a[policy]\x0astatic=🚀\x20节点选择,\x20'+_0x2c36b2+_0x56b8c2(0x3f3);}let PROBE_ALIVE_ENABLED=![];function setProbeAlive(_0xa672){PROBE_ALIVE_ENABLED=_0xa672===!![]||_0xa672==='true'||_0xa672==='1'||_0xa672===0x1;}const PROBE_CONCURRENCY=0x4;let probeRunning=0x0;const probeWaiters=[];function probeLimit(){const _0x85d6b5=a0_0x15be5e;if(probeRunning<PROBE_CONCURRENCY)return probeRunning++,Promise[_0x85d6b5(0x244)]();return new Promise(_0x2d9cb5=>probeWaiters['push'](_0x2d9cb5));}function probeRelease(){const _0x5df578=a0_0x15be5e,_0x4edc23=probeWaiters[_0x5df578(0x497)]();if(_0x4edc23)_0x4edc23();else probeRunning--;}async function probeAll(_0x376d36,_0x24002e){const _0x1e3dfd=a0_0x15be5e,_0x190bd3=[];let _0x5eebe2=0x0;const _0x3f96b9=Array['from']({'length':Math[_0x1e3dfd(0x186)](PROBE_CONCURRENCY,_0x376d36['length'])},async()=>{const _0x408af2=_0x1e3dfd;while(_0x5eebe2<_0x376d36[_0x408af2(0x2ca)]){const _0x54be85=_0x5eebe2++;await probeLimit();try{_0x190bd3[_0x54be85]=await _0x24002e(_0x376d36[_0x54be85],_0x54be85);}catch(_0x891027){_0x190bd3[_0x54be85]=![];}finally{probeRelease();}}});return await Promise['all'](_0x3f96b9),_0x190bd3;}function a0_0xe43c(_0x42a711,_0x5d6d79){_0x42a711=_0x42a711-0x159;const _0x127400=a0_0x1274();let _0xe43cf2=_0x127400[_0x42a711];if(a0_0xe43c['tLakCD']===undefined){var _0x6edd83=function(_0x2a030b){const _0x4f334d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1e063e='',_0x38a5d1='';for(let _0x217d71=0x0,_0x1fe4c3,_0x2a2d8d,_0x1b4154=0x0;_0x2a2d8d=_0x2a030b['charAt'](_0x1b4154++);~_0x2a2d8d&&(_0x1fe4c3=_0x217d71%0x4?_0x1fe4c3*0x40+_0x2a2d8d:_0x2a2d8d,_0x217d71++%0x4)?_0x1e063e+=String['fromCharCode'](0xff&_0x1fe4c3>>(-0x2*_0x217d71&0x6)):0x0){_0x2a2d8d=_0x4f334d['indexOf'](_0x2a2d8d);}for(let _0x25baa7=0x0,_0x17a425=_0x1e063e['length'];_0x25baa7<_0x17a425;_0x25baa7++){_0x38a5d1+='%'+('00'+_0x1e063e['charCodeAt'](_0x25baa7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38a5d1);};a0_0xe43c['fVVgKc']=_0x6edd83,a0_0xe43c['tLHZmc']={},a0_0xe43c['tLakCD']=!![];}const _0x31eead=_0x127400[0x0];a0_0xe43c['SMyhYC']!==_0x31eead&&(a0_0xe43c['tLHZmc']={},a0_0xe43c['SMyhYC']=_0x31eead);const _0x3d06f4=a0_0xe43c['tLHZmc'][_0x42a711];return _0x3d06f4===undefined?(_0xe43cf2=a0_0xe43c['fVVgKc'](_0xe43cf2),a0_0xe43c['tLHZmc'][_0x42a711]=_0xe43cf2):_0xe43cf2=_0x3d06f4,_0xe43cf2;}async function testProxyAlive(_0x106ce4,_0xd769fe,_0x942136){const _0x2d2f35=a0_0x15be5e;if(!PROBE_ALIVE_ENABLED)return!![];if(isCloudflareIP(_0x106ce4))return!![];const _0x20a81d=_0x942136||0x7d0;try{const _0x2b8ad3=connect({'hostname':_0x106ce4,'port':_0xd769fe});await Promise[_0x2d2f35(0x3e4)]([_0x2b8ad3[_0x2d2f35(0x168)],new Promise((_0x28daa3,_0xc79153)=>setTimeout(()=>_0xc79153(new Error('proxy\x20timeout')),_0x20a81d))]);try{_0x2b8ad3[_0x2d2f35(0x428)]();}catch(_0x1484a7){}return!![];}catch(_0x38766d){return![];}}async function testRelayAlive(_0x861172,_0x5d7c3b,_0x509be4){if(!PROBE_ALIVE_ENABLED)return!![];return testRelayAliveRaw(_0x861172,_0x5d7c3b,_0x509be4);}async function testRelayAliveRaw(_0x564dc1,_0x19416a,_0x3afcae){const _0x80cafb=a0_0x15be5e,_0x21c5cd=_0x3afcae||0x9c4;try{const _0x1dad25=connect({'hostname':_0x564dc1,'port':_0x19416a});await Promise[_0x80cafb(0x3e4)]([_0x1dad25[_0x80cafb(0x168)],new Promise((_0x16e58b,_0x4229b4)=>setTimeout(()=>_0x4229b4(new Error('tcp\x20timeout')),_0x21c5cd))]);const _0x12bc07=_0x1dad25[_0x80cafb(0x3f8)]['getWriter'](),_0x182375=_0x1dad25['readable'][_0x80cafb(0x24f)]();await _0x12bc07[_0x80cafb(0x271)](new TextEncoder()['encode'](_0x80cafb(0x23f)+_0x564dc1+_0x80cafb(0x33b)));const _0x2e278a=await Promise[_0x80cafb(0x3e4)]([_0x182375[_0x80cafb(0x26f)](),new Promise((_0x308817,_0x5d6daf)=>setTimeout(()=>_0x5d6daf(new Error('http\x20timeout')),_0x21c5cd))]);try{_0x1dad25[_0x80cafb(0x428)]();}catch(_0x4a2c6f){}const _0x39ba90=new TextDecoder()[_0x80cafb(0x312)](_0x2e278a[_0x80cafb(0x383)]||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x80cafb(0x3fe)](_0x39ba90);}catch(_0x5321b8){return![];}}async function dohFirstCF(_0x510300){const _0x3c2d34=a0_0x15be5e;try{const _0x1c5b7a=await fetchTimeout(_0x3c2d34(0x372)+encodeURIComponent(_0x510300)+_0x3c2d34(0x400),{'headers':{'accept':_0x3c2d34(0x1bf)}},0xfa0);if(!_0x1c5b7a||!_0x1c5b7a['ok'])return null;const _0x59eb7b=await _0x1c5b7a[_0x3c2d34(0x291)](),_0xef54c=(_0x59eb7b[_0x3c2d34(0x451)]||[])['filter'](_0x302c6a=>_0x302c6a[_0x3c2d34(0x238)]===0x1&&/^\d+\.\d+\.\d+\.\d+$/[_0x3c2d34(0x3fe)](_0x302c6a[_0x3c2d34(0x3f1)]))['map'](_0x2e6551=>_0x2e6551[_0x3c2d34(0x3f1)]);return _0xef54c[_0x3c2d34(0x36f)](isCloudflareIP)[0x0]||null;}catch(_0x41af81){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x179373){const _0x21a42d=a0_0x15be5e;if(!PROBE_ALIVE_ENABLED)return String(_0x179373||'')[_0x21a42d(0x1d9)](/[\n,;]+/)[_0x21a42d(0x2c2)](_0x33a253=>_0x33a253['trim']()[_0x21a42d(0x33a)](/^\*\./,''))['filter'](Boolean)[_0x21a42d(0x3d5)]('\x0a');if(Date[_0x21a42d(0x250)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE['list']!==null)return DOMAIN_ALIVE_CACHE['list'];const _0x23645c=String(_0x179373||'')[_0x21a42d(0x1d9)](/[\n,;]+/)[_0x21a42d(0x2c2)](_0x31e1bf=>_0x31e1bf[_0x21a42d(0x2ae)]()[_0x21a42d(0x33a)](/^\*\./,''))[_0x21a42d(0x36f)](Boolean),_0x25ee34=await probeAll(_0x23645c,async _0x2ceabc=>{const _0x3fd298=await dohFirstCF(_0x2ceabc);if(!_0x3fd298||!isCloudflareIP(_0x3fd298))return{'d':_0x2ceabc,'ok':![]};return{'d':_0x2ceabc,'ok':await testProxyAlive(_0x3fd298,0x1bb)};}),_0x570f7c=_0x25ee34[_0x21a42d(0x2c2)]((_0x3924f3,_0x305092)=>_0x3924f3&&_0x3924f3['ok']?_0x23645c[_0x305092]:null)[_0x21a42d(0x36f)](Boolean);return DOMAIN_ALIVE_CACHE['t']=Date[_0x21a42d(0x250)](),DOMAIN_ALIVE_CACHE[_0x21a42d(0x381)]=_0x570f7c[_0x21a42d(0x3d5)]('\x0a'),DOMAIN_ALIVE_CACHE[_0x21a42d(0x381)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x252a4c=a0_0x15be5e;if(bestcfCache[_0x252a4c(0x381)]&&Date[_0x252a4c(0x250)]()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache['list'];const _0x584bcf=[],_0xba1335=BESTCF_REGION_URLS[_0x252a4c(0x2c2)](async _0x50d1cd=>{const _0x2f4e33=_0x252a4c;try{const _0x569e90=await fetchTimeout(_0x50d1cd['url'],{'headers':{'User-Agent':_0x2f4e33(0x2e4)}},0x1f40);if(!_0x569e90['ok'])return;const _0x4c645b=await _0x569e90['text'](),_0x2f522e=[];for(const _0x39804a of _0x4c645b[_0x2f4e33(0x1d9)](/[\r\n]+/)){const _0x5ebf40=_0x39804a['trim']()['match'](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x5ebf40&&_0x2f522e[_0x2f4e33(0x2ca)]<_0x50d1cd[_0x2f4e33(0x189)])_0x2f522e[_0x2f4e33(0x39b)]({'ip':_0x5ebf40[0x1],'port':_0x5ebf40[0x2]?parseInt(_0x5ebf40[0x2],0xa):0x1bb,'name':_0x50d1cd[_0x2f4e33(0x434)]+'-'+String(_0x2f522e[_0x2f4e33(0x2ca)]+0x1)[_0x2f4e33(0x376)](0x2,'0')});}_0x2f522e['forEach'](_0x1f9ec2=>_0x584bcf[_0x2f4e33(0x39b)](_0x1f9ec2));}catch(_0x496e85){}});return await Promise[_0x252a4c(0x3f9)](_0xba1335),bestcfCache[_0x252a4c(0x381)]=_0x584bcf,bestcfCache['at']=Date[_0x252a4c(0x250)](),_0x584bcf;}function appendStableNodes(_0x12372c,_0x10e3cf,_0x4711cd){const _0x1860e5=a0_0x15be5e;if(_0x12372c['length']>=_0x4711cd)return;const _0xf725f=new Set();for(const _0x2c9e48 of _0x12372c){try{_0xf725f['add'](parseNodeServer(_0x2c9e48)[_0x1860e5(0x292)]);}catch(_0x167eb1){}}let _0x3f9434=0x0;for(const _0x2ae6b9 of BUILTIN_STABLE_IPS){if(_0x12372c[_0x1860e5(0x2ca)]>=_0x4711cd)break;if(_0xf725f[_0x1860e5(0x27d)](_0x2ae6b9))continue;_0xf725f[_0x1860e5(0x442)](_0x2ae6b9),_0x3f9434++;const _0xf885ee=_0x1860e5(0x171)+String(_0x3f9434)['padStart'](0x2,'0');if(_0x10e3cf[_0x1860e5(0x224)])_0x12372c[_0x1860e5(0x39b)](vlessNode(_0x10e3cf,_0x2ae6b9,0x1bb,_0xf885ee));if(_0x12372c['length']>=_0x4711cd)break;if(_0x10e3cf[_0x1860e5(0x183)])_0x12372c['push'](trojanNode(_0x10e3cf,_0x2ae6b9,0x1bb,_0xf885ee));if(_0x12372c[_0x1860e5(0x2ca)]>=_0x4711cd)break;if(_0x10e3cf[_0x1860e5(0x408)])_0x12372c[_0x1860e5(0x39b)](vlessNode(_0x10e3cf,_0x2ae6b9,0x1bb,_0xf885ee,{'type':_0x1860e5(0x2dc)}));}}function appendFallbackNodes(_0x24d108,_0xd1ea1d,_0x3146ea,_0x59e5da){const _0x32b9e5=a0_0x15be5e;if(_0x24d108['length']>=_0x3146ea)return;const _0x2670c6=new Set();for(const _0x1d31d9 of _0x24d108){try{_0x2670c6[_0x32b9e5(0x442)](parseNodeServer(_0x1d31d9)['host']);}catch(_0x2dd24f){}}const _0x167edb=(_0x2e81ea,_0x1d3458)=>{const _0x3f9091=_0x32b9e5;if(_0x24d108[_0x3f9091(0x2ca)]>=_0x3146ea)return;if(_0x2670c6['has'](_0x2e81ea))return;_0x2670c6[_0x3f9091(0x442)](_0x2e81ea);if(_0xd1ea1d[_0x3f9091(0x224)])_0x24d108[_0x3f9091(0x39b)](vlessNode(_0xd1ea1d,_0x2e81ea,0x1bb,_0x1d3458));if(_0xd1ea1d[_0x3f9091(0x183)])_0x24d108[_0x3f9091(0x39b)](trojanNode(_0xd1ea1d,_0x2e81ea,0x1bb,_0x1d3458));if(_0xd1ea1d['enableXhttp'])_0x24d108['push'](vlessNode(_0xd1ea1d,_0x2e81ea,0x1bb,_0x1d3458,{'type':'xhttp'}));};_0xd1ea1d[_0x32b9e5(0x300)]&&_0xd1ea1d[_0x32b9e5(0x300)]['native']===!![]&&_0x167edb(_0xd1ea1d[_0x32b9e5(0x292)],_0x32b9e5(0x3fd));}async function generateSubscription(_0x37e517,_0x54c299,_0x35dc54,_0x5a73d0,_0x4d6075){const _0x5c5715=a0_0x15be5e;if(!_0x37e517[_0x5c5715(0x45d)]||_0x37e517[_0x5c5715(0x45d)]==='/'||_0x37e517['path']==='')_0x37e517[_0x5c5715(0x45d)]=_0x37e517[_0x5c5715(0x422)];const _0xf20e5c=_0x37e517[_0x5c5715(0x36f)]&&_0x37e517[_0x5c5715(0x36f)]['ipType']||[];if(_0xf20e5c['includes'](_0x5c5715(0x398)))await refreshOfficialV6CIDRs();const _0x5aae11=_0x37e517[_0x5c5715(0x41c)]&&_0x37e517[_0x5c5715(0x41c)][_0x5c5715(0x3fc)]||'';if(_0x5aae11===''&&(!_0x37e517[_0x5c5715(0x34b)]||_0x37e517[_0x5c5715(0x34b)]['length']<0x50))try{const [_0x35ce4b,_0x4c89aa,_0x38817f]=await Promise['all']([fetchBestcfPool()[_0x5c5715(0x200)](()=>[]),fetchLatestPreferredIPs(0xc8)[_0x5c5715(0x200)](()=>null),Promise[_0x5c5715(0x244)](parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a')))]),_0x27c93f=[],_0x352cc5=[],_0x349538=new Set((_0x37e517[_0x5c5715(0x34b)]||[])[_0x5c5715(0x2c2)](_0x4529af=>_0x4529af['ip']));for(const _0x2cb042 of[..._0x37e517[_0x5c5715(0x34b)]||[],..._0x35ce4b||[],..._0x4c89aa||[],..._0x38817f]){if(!_0x2cb042||!_0x2cb042['ip']||_0x349538[_0x5c5715(0x27d)](_0x2cb042['ip']))continue;_0x349538[_0x5c5715(0x442)](_0x2cb042['ip']);const _0x45c787={'ip':_0x2cb042['ip'],'port':_0x2cb042[_0x5c5715(0x453)]||0x1bb,'name':_0x2cb042[_0x5c5715(0x423)]||'','relay':!!_0x2cb042[_0x5c5715(0x4a2)]};if(_0x45c787['relay']||!isCloudflareIP(_0x45c787['ip']))_0x352cc5[_0x5c5715(0x39b)](_0x45c787);else _0x27c93f[_0x5c5715(0x39b)](_0x45c787);}const _0x10d792=_0x352cc5[_0x5c5715(0x39d)](0x0,0x64),_0x43fb10=_0x27c93f['slice'](0x0,0x96),[_0x9769ab,_0x5c2853]=await Promise[_0x5c5715(0x3f9)]([probeAll(_0x10d792,_0x46ce23=>testRelayAlive(_0x46ce23['ip'],_0x46ce23['port']||0x1bb,0x9c4)),probeAll(_0x43fb10,_0x133e92=>testProxyAlive(_0x133e92['ip'],_0x133e92['port']||0x1bb,0x9c4))]),_0x193a52=_0x10d792['filter']((_0x38a6e1,_0x499175)=>_0x9769ab[_0x499175]),_0xf4d17f=_0x43fb10[_0x5c5715(0x36f)]((_0x347f69,_0x377f79)=>_0x5c2853[_0x377f79]),_0x4c4ccb=_0xf4d17f['slice'](0x0,0xd2),_0xd9548f=_0x193a52[_0x5c5715(0x39d)](0x0,0x28);_0x37e517[_0x5c5715(0x34b)]=[..._0x37e517[_0x5c5715(0x34b)]||[],..._0x4c4ccb,..._0xd9548f][_0x5c5715(0x39d)](0x0,0xfa);}catch(_0x1b7e47){}const _0x178a50=!/\.workers\.dev$/i[_0x5c5715(0x3fe)](new URL(_0x54c299)[_0x5c5715(0x452)]),_0xd6ca03=Object[_0x5c5715(0x3ec)]({},_0x37e517,{'host':_0x37e517[_0x5c5715(0x292)]||new URL(_0x54c299)[_0x5c5715(0x452)]});_0x178a50&&(_0xd6ca03[_0x5c5715(0x2a3)]=!![]);const _0xe748f4=_0x37e517[_0x5c5715(0x41c)]&&_0x37e517[_0x5c5715(0x41c)][_0x5c5715(0x3fc)]||'';let _0x1fdbea=[];const _0x3c4a35=_0x37e517[_0x5c5715(0x36f)]&&_0x37e517['filter'][_0x5c5715(0x21a)]||[],_0x5b6930=_0x3c4a35[_0x5c5715(0x2ad)](_0x5c5715(0x398)),_0x4bfd2e=_0x3c4a35[_0x5c5715(0x2ca)]===0x1&&_0x3c4a35[0x0]===_0x5c5715(0x398),_0x13b6b3=_0x4bfd2e?OFFICIAL_V6_CIDRS:_0x5b6930?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0xf0bec8=parseIPList(BUILTIN_PREFERRED_IPS[_0x5c5715(0x3d5)]('\x0a'))[_0x5c5715(0x2c2)](_0x12b4cb=>({'ip':_0x12b4cb['ip'],'port':_0x12b4cb['port']||0x1bb,'name':_0x12b4cb[_0x5c5715(0x423)]||_0x5c5715(0x37a)+String(BUILTIN_PREFERRED_IPS[_0x5c5715(0x32a)](_0x12b4cb)+0x1)[_0x5c5715(0x376)](0x2,'0')}));if(_0xe748f4==='custom'){const _0x3caada=!!(_0x37e517[_0x5c5715(0x41c)]&&_0x37e517[_0x5c5715(0x41c)][_0x5c5715(0x43a)]),_0x362a14=!_0x3caada;_0x1fdbea=await resolvePreferredDomains(_0x37e517[_0x5c5715(0x18c)]||'',_0x362a14?0xc8:0x28,_0x362a14?0x7d0:0x12c,_0x3caada,_0x3caada,_0x5b6930);if(_0x3caada){const _0x5d917c=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x5b6930),_0x142238=new Set(_0x5d917c[_0x5c5715(0x2c2)](_0x65bb5f=>_0x65bb5f['ip']));_0x1fdbea=[..._0x5d917c,..._0x1fdbea[_0x5c5715(0x36f)](_0x2df525=>!_0x142238[_0x5c5715(0x27d)](_0x2df525['ip']))],_0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0xf0bec8];if(!_0xd6ca03[_0x5c5715(0x41c)])_0xd6ca03[_0x5c5715(0x41c)]={};_0xd6ca03[_0x5c5715(0x41c)]['fillCount']=Math[_0x5c5715(0x43f)](parseInt(_0xd6ca03[_0x5c5715(0x41c)][_0x5c5715(0x3e5)])||0x0,0x320);}}else{if(_0xe748f4===''){const _0x514415=_0x37e517[_0x5c5715(0x300)]||{},_0x40495e=_0x514415[_0x5c5715(0x364)]===!![],_0x2b7c49=_0x514415['prefDomain']!==![],_0x4cddea=_0x514415[_0x5c5715(0x176)]!==![],_0x206d24=_0x514415['customPref']===!![];_0x40495e&&!_0x4bfd2e&&(_0xd6ca03['preferredDomains']=(_0xd6ca03['preferredDomains']?_0xd6ca03['preferredDomains']+'\x0a':'')+_0xd6ca03[_0x5c5715(0x292)]+_0x5c5715(0x241));if(!_0x206d24)_0xd6ca03[_0x5c5715(0x34b)]=[];const _0x293716=_0x37e517[_0x5c5715(0x36f)]||{},_0x5875ea=_0x293716['region'],_0x4830a2=Array[_0x5c5715(0x26e)](_0x5875ea)?_0x5875ea[_0x5c5715(0x2ca)]===0x0||_0x5875ea[_0x5c5715(0x2ad)](_0x5c5715(0x3f9)):!_0x5875ea||_0x5875ea===_0x5c5715(0x3f9);if(_0x4830a2){_0x1fdbea=[];if(_0x2b7c49&&!_0x4bfd2e){const _0x51185e=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0x51185e)_0xd6ca03[_0x5c5715(0x18c)]=(_0xd6ca03[_0x5c5715(0x18c)]?_0xd6ca03[_0x5c5715(0x18c)]+'\x0a':'')+_0x51185e;}if(_0x4cddea&&!_0x4bfd2e){const _0x3d3269=await fetchLatestPreferredIPs(0x96);if(_0x3d3269&&_0x3d3269[_0x5c5715(0x2ca)])_0xd6ca03['preferredIPs']=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0x3d3269];try{const _0x3aa38d=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x3aa38d&&_0x3aa38d[_0x5c5715(0x2ca)])_0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03['preferredIPs']||[],..._0x3aa38d];}catch(_0x2003c2){}}if(_0x5b6930&&_0x2b7c49)try{const _0x3d0f87=DEFAULT_PREFERRED_DOMAINS+(_0x4bfd2e?'\x0a'+BUILTIN_OFFICIAL_DOMAINS[_0x5c5715(0x3d5)]('\x0a'):''),_0x44eeef=await resolvePreferredDomains(_0x3d0f87,0x28,_0x4bfd2e?0x320:0xf0,![],!![],!![]);if(_0x44eeef&&_0x44eeef[_0x5c5715(0x2ca)])_0xd6ca03['preferredIPs']=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0x44eeef];}catch(_0x38f17e){}}else _0x2b7c49&&(_0x1fdbea=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x5b6930));if(_0x4cddea){if(_0x4bfd2e){const _0x20dfb4=_0xf0bec8[_0x5c5715(0x2c2)](_0x3b0799=>({'ip':ipv4ToEmbeddedV6(_0x3b0799['ip']),'port':_0x3b0799[_0x5c5715(0x453)]||0x1bb,'name':_0x3b0799[_0x5c5715(0x423)]}))[_0x5c5715(0x36f)](_0x39dcf4=>_0x39dcf4['ip']);_0xd6ca03['preferredIPs']=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0x20dfb4];}else{if(_0x5b6930){const _0x25dad7=_0xf0bec8[_0x5c5715(0x2c2)](_0x2ff778=>({'ip':ipv4ToEmbeddedV6(_0x2ff778['ip']),'port':_0x2ff778[_0x5c5715(0x453)]||0x1bb,'name':_0x2ff778[_0x5c5715(0x423)]}))[_0x5c5715(0x36f)](_0x14783f=>_0x14783f['ip']);_0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0xf0bec8,..._0x25dad7];}else _0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0xf0bec8];}}if(!_0x40495e&&!_0x2b7c49&&!_0x4cddea&&!_0x206d24){if(_0x4bfd2e){const _0x1dfe1f=_0xf0bec8[_0x5c5715(0x2c2)](_0x5ed461=>({'ip':ipv4ToEmbeddedV6(_0x5ed461['ip']),'port':_0x5ed461['port']||0x1bb,'name':_0x5ed461[_0x5c5715(0x423)]}))[_0x5c5715(0x36f)](_0x4970a9=>_0x4970a9['ip']);_0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03['preferredIPs']||[],..._0x1dfe1f];}else _0xd6ca03['preferredIPs']=[..._0xd6ca03['preferredIPs']||[],..._0xf0bec8];}if(_0x4bfd2e&&_0xd6ca03['preferredIPs'])_0xd6ca03[_0x5c5715(0x34b)]=_0xd6ca03[_0x5c5715(0x34b)][_0x5c5715(0x36f)](_0x30971c=>String(_0x30971c['ip'])[_0x5c5715(0x32a)](':')>=0x0);if(!_0xd6ca03[_0x5c5715(0x41c)])_0xd6ca03[_0x5c5715(0x41c)]={};_0xd6ca03[_0x5c5715(0x41c)][_0x5c5715(0x3e5)]=Math[_0x5c5715(0x43f)](parseInt(_0xd6ca03[_0x5c5715(0x41c)][_0x5c5715(0x3e5)])||0x0,_0x4bfd2e?0x0:0x3e8);if(_0xd6ca03[_0x5c5715(0x34b)]&&_0xd6ca03[_0x5c5715(0x34b)][_0x5c5715(0x2ca)]){const _0x27963b=BUILTIN_STABLE_IPS['map']((_0x29977f,_0x2882a2)=>({'ip':_0x29977f,'port':0x1bb,'name':'优选IP-S'+String(_0x2882a2+0x1)[_0x5c5715(0x376)](0x2,'0')})),_0x4df919=new Set(_0x27963b[_0x5c5715(0x2c2)](_0x558983=>_0x558983['ip']));_0xd6ca03[_0x5c5715(0x34b)]=[..._0x27963b,..._0xd6ca03['preferredIPs'][_0x5c5715(0x36f)](_0x4b016b=>!_0x4df919['has'](_0x4b016b['ip']))];}}}const _0x534840=_0x37e517[_0x5c5715(0x31b)]&&_0x37e517[_0x5c5715(0x31b)]['size']?_0x37e517[_0x5c5715(0x31b)]:null;if(_0x1fdbea[_0x5c5715(0x2ca)]){let _0xc6e397=_0x1fdbea;if(_0x534840){const _0x1cac11=_0x1fdbea[_0x5c5715(0x36f)](_0x4054d1=>!_0x534840[_0x5c5715(0x27d)](_0x4054d1['ip'])),_0x12dc8b=_0x1fdbea['filter'](_0x4c347f=>_0x534840[_0x5c5715(0x27d)](_0x4c347f['ip']));_0xc6e397=[..._0x1cac11,..._0x12dc8b];}const _0x175e6e=(_0xd6ca03['preferredIPs']||[])[_0x5c5715(0x2ca)];_0xc6e397=_0xc6e397[_0x5c5715(0x2c2)]((_0x3a938f,_0x565d98)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x5c5715(0x3fe)](_0x3a938f[_0x5c5715(0x423)]||'')?Object[_0x5c5715(0x3ec)]({},_0x3a938f,{'name':'优选IP-'+String(_0x175e6e+_0x565d98+0x1)[_0x5c5715(0x376)](0x2,'0')}):_0x3a938f),_0xd6ca03[_0x5c5715(0x34b)]=[..._0xd6ca03[_0x5c5715(0x34b)]||[],..._0xc6e397];}if(_0x4bfd2e&&_0xd6ca03[_0x5c5715(0x34b)])_0xd6ca03[_0x5c5715(0x34b)]=_0xd6ca03[_0x5c5715(0x34b)][_0x5c5715(0x36f)](_0x6e3eb3=>String(_0x6e3eb3['ip'])[_0x5c5715(0x32a)](':')>=0x0);_0x5a73d0=(_0x5a73d0||'')[_0x5c5715(0x278)]();const _0x54b907=(_0x35dc54||'')[_0x5c5715(0x278)](),_0x453a01=[_0x5c5715(0x484),_0x5c5715(0x4a8),'sing-box',_0x5c5715(0x19b),_0x5c5715(0x3ff),'loon',_0x5c5715(0x22c),_0x5c5715(0x240)][_0x5c5715(0x2ad)](_0x54b907)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/['test'](_0x5a73d0);let _0x37e255=_0x453a01?0x12c:0x320;if(_0xe748f4===_0x5c5715(0x310)&&_0x37e517[_0x5c5715(0x41c)]&&_0x37e517[_0x5c5715(0x41c)][_0x5c5715(0x43a)])_0x37e255=_0x453a01?Math['max'](_0x37e255,0x12c):Math[_0x5c5715(0x43f)](_0x37e255,0x320);if(_0xe748f4===_0x5c5715(0x310)&&!(_0x37e517['optimizer']&&_0x37e517[_0x5c5715(0x41c)]['subIncludeDefault']))_0x37e255=_0x453a01?Math[_0x5c5715(0x43f)](_0x37e255,0x320):Math['max'](_0x37e255,0x7d0);if(_0x37e517[_0x5c5715(0x2ec)]===![])_0x37e255=0x2710;if(_0x37e517[_0x5c5715(0x3fa)]){const _0x405103=parseInt(_0x37e517['nodeLimitCount'])||0x0;if(_0x405103>0x0)_0x37e255=Math[_0x5c5715(0x186)](_0x405103,0x3e8);}if(_0x37e517[_0x5c5715(0x2a2)])_0x37e255=Math['min'](_0x37e255,_0x37e517[_0x5c5715(0x2a2)]);const _0x1d8c8c=_0xe748f4===_0x5c5715(0x18a)?Object[_0x5c5715(0x3ec)]({},_0x37e517['filter'],{'region':_0x5c5715(0x3f9)}):_0x37e517[_0x5c5715(0x36f)];let _0x295f06=filterNodes(await buildNodes(_0xd6ca03,_0x37e255,_0x534840),_0x1d8c8c);const _0x12389e=_0xe748f4==='custom'&&!(_0x37e517[_0x5c5715(0x41c)]&&_0x37e517['optimizer'][_0x5c5715(0x43a)]);if(!_0x12389e&&!_0x4bfd2e)appendFallbackNodes(_0x295f06,_0xd6ca03,_0x37e255,_0x4d6075);if(!_0x4bfd2e&&!(_0x12389e&&_0x295f06['length']>0x0))appendStableNodes(_0x295f06,_0xd6ca03,_0x37e255);if(_0x37e517[_0x5c5715(0x3fa)]&&_0xe748f4&&!_0x12389e&&_0x295f06['length']<_0x37e255){const _0x1bb512=_0x37e255-_0x295f06[_0x5c5715(0x2ca)],_0x42b317=new Set();for(const _0x5c09bf of _0x295f06){try{_0x42b317['add'](parseNodeServer(_0x5c09bf)[_0x5c5715(0x292)]);}catch(_0x3fa926){}}const _0xcb8e17=(_0x4da7cd,_0x117ea8,_0x248faf)=>{const _0x397cc3=_0x5c5715;if(_0x295f06[_0x397cc3(0x2ca)]>=_0x37e255)return;if(_0x42b317[_0x397cc3(0x27d)](_0x4da7cd))return;_0x42b317['add'](_0x4da7cd),_0x295f06[_0x397cc3(0x39b)](vlessNode(_0xd6ca03,_0x4da7cd,_0x117ea8||0x1bb,_0x248faf));};let _0x3c89ba=0x0;try{const _0x22190f=await fetchBestcfPool(),_0x2df5e1=_0x534840?_0x22190f[_0x5c5715(0x36f)](_0x57b5ca=>!_0x534840['has'](_0x57b5ca['ip'])):_0x22190f,_0x364095=_0x2df5e1[_0x5c5715(0x2ca)]>=_0x1bb512?_0x2df5e1:_0x22190f;for(const _0x74eb22 of _0x364095){_0xcb8e17(_0x74eb22['ip'],_0x74eb22['port'],_0x74eb22[_0x5c5715(0x423)]||'优选IP-'+String(_0x74eb22[_0x5c5715(0x453)]));if(_0x295f06[_0x5c5715(0x2ca)]>=_0x37e255)break;}}catch(_0x1821ed){}if(_0x295f06[_0x5c5715(0x2ca)]<_0x37e255){const _0x1af6e7=_0x37e255-_0x295f06[_0x5c5715(0x2ca)],_0x239744=OFFICIAL_V6_CIDRS,_0x79c4fc=_0x4bfd2e?_0x239744:_0x5b6930?[...REACHABLE_CIDRS,..._0x239744]:REACHABLE_CIDRS,_0x58ed04=randomIPsFromCidrs(_0x79c4fc,_0x1af6e7*0x3),_0x31c5f8=_0x534840?_0x58ed04[_0x5c5715(0x36f)](_0x525bbc=>!_0x534840[_0x5c5715(0x27d)](_0x525bbc)):_0x58ed04,_0x16cf14=_0x31c5f8[_0x5c5715(0x2ca)]>=_0x1af6e7?_0x31c5f8:_0x58ed04;for(const _0x5e80e4 of _0x16cf14){if(_0x295f06['length']>=_0x37e255)break;_0x3c89ba++,_0xcb8e17(_0x5e80e4,0x1bb,'优选IP-'+String(_0x3c89ba)['padStart'](0x3,'0'));}}}if(_0x295f06[_0x5c5715(0x2ca)]>_0x37e255)_0x295f06['length']=_0x37e255;const _0x5b175f=[],_0xa5092e=new Set();for(const _0x3a2cb3 of _0x295f06){try{const {host:_0xfefc60}=parseNodeServer(_0x3a2cb3);isValidIp(_0xfefc60)&&!_0xa5092e[_0x5c5715(0x27d)](_0xfefc60)&&(_0xa5092e[_0x5c5715(0x442)](_0xfefc60),_0x5b175f['push'](_0xfefc60));}catch(_0x5e1e6f){}}let _0x4fb07f,_0x451af7;if(_0x54b907==='clash')_0x4fb07f=_0x5c5715(0x1d3),_0x451af7=generateClash(_0xd6ca03,_0x295f06);else{if(_0x54b907===_0x5c5715(0x4a8)||_0x54b907===_0x5c5715(0x3a1))_0x4fb07f=_0x5c5715(0x2af),_0x451af7=generateSingbox(_0xd6ca03,_0x295f06);else{if(_0x54b907==='surge')_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=generateSurge(_0xd6ca03,_0x295f06);else{if(_0x54b907===_0x5c5715(0x3ff))_0x4fb07f='text/plain',_0x451af7=generateSurfboard(_0xd6ca03,_0x295f06);else{if(_0x54b907===_0x5c5715(0x211))_0x4fb07f='text/plain',_0x451af7=generateLoon(_0xd6ca03,_0x295f06);else{if(_0x54b907==='quanx'||_0x54b907===_0x5c5715(0x240))_0x4fb07f='text/plain',_0x451af7=generateQuanX(_0xd6ca03,_0x295f06);else{if(_0x54b907===_0x5c5715(0x259)||_0x54b907===_0x5c5715(0x1e4))_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=_0x295f06[_0x5c5715(0x3d5)]('\x0a');else{if(_0x54b907===_0x5c5715(0x26c)||_0x54b907===_0x5c5715(0x443)||_0x54b907===_0x5c5715(0x243)||_0x54b907===_0x5c5715(0x295)||_0x54b907===_0x5c5715(0x3fb))_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=_0x295f06[_0x5c5715(0x3d5)]('\x0a');else{if(_0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x484))||_0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x3fb)))_0x4fb07f=_0x5c5715(0x1d3),_0x451af7=generateClash(_0xd6ca03,_0x295f06);else{if(_0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x3a1)))_0x4fb07f='application/json',_0x451af7=generateSingbox(_0xd6ca03,_0x295f06);else{if(_0x5a73d0[_0x5c5715(0x2ad)]('surge'))_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=generateSurge(_0xd6ca03,_0x295f06);else{if(_0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x3ff)))_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=generateSurfboard(_0xd6ca03,_0x295f06);else{if(_0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x211)))_0x4fb07f=_0x5c5715(0x3f0),_0x451af7=generateLoon(_0xd6ca03,_0x295f06);else _0x5a73d0[_0x5c5715(0x2ad)](_0x5c5715(0x39c))?(_0x4fb07f='text/plain',_0x451af7=generateQuanX(_0xd6ca03,_0x295f06)):(_0x4fb07f='text/plain',_0x451af7=_0x295f06[_0x5c5715(0x3d5)]('\x0a'));}}}}}}}}}}}}return{'type':_0x4fb07f,'body':_0x451af7,'issued':_0x5b175f};}const PANEL_HTML=String['raw']`
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

`,loginHTML=a0_0x15be5e(0x3ad);function isBrowserUA(_0x437549){const _0x58b3fd=a0_0x15be5e;return(_0x437549||'')[_0x58b3fd(0x278)]()[_0x58b3fd(0x2ad)](_0x58b3fd(0x2e0));}async function requireAuth(_0x5ecfd4,_0x138e4a){const _0x888b66=a0_0x15be5e;if(!_0x138e4a[_0x888b66(0x475)])return!![];const _0x3cc430=_0x5ecfd4[_0x888b66(0x1b1)][_0x888b66(0x2bc)](_0x888b66(0x313))||'',_0x252fc7=_0x3cc430[_0x888b66(0x2e5)](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x252fc7&&_0x252fc7[0x1]===md5hex(String(_0x138e4a['admin'])));}async function handleRequest(_0x101838,_0x3e4e34){const _0x5b5361=a0_0x15be5e,_0x2c0c55=new URL(_0x101838[_0x5b5361(0x396)]),_0x37f9d4=_0x101838[_0x5b5361(0x1b1)][_0x5b5361(0x2bc)]('User-Agent')||'',_0x3242cd=(_0x101838[_0x5b5361(0x1b1)][_0x5b5361(0x2bc)](_0x5b5361(0x444))||'')[_0x5b5361(0x278)]();if(_0x2c0c55[_0x5b5361(0x435)]==='http:')return Response['redirect'](_0x2c0c55[_0x5b5361(0x338)][_0x5b5361(0x33a)](_0x5b5361(0x19d),_0x5b5361(0x2ab)),0x12d);const _0x3a1950=await loadConfig(_0x3e4e34),_0x5427a3=_0x3a1950[_0x5b5361(0x45d)]||_0x3a1950['uuid'],_0x4e701c=_0x2c0c55[_0x5b5361(0x45a)][_0x5b5361(0x33a)](/^\/+|\/+$/g,''),_0x253a84=_0x4e701c[_0x5b5361(0x1d9)]('/');if(_0x253a84[0x0]===_0x5b5361(0x1db))return json({'version':VERSION});if(_0x253a84[0x0]==='login'){if(_0x101838[_0x5b5361(0x374)]===_0x5b5361(0x2e8)){const _0x2a5744=await _0x101838[_0x5b5361(0x42e)](),_0x1e2339=new URLSearchParams(_0x2a5744);if(_0x1e2339[_0x5b5361(0x2bc)](_0x5b5361(0x332))===_0x3a1950['admin']){const _0x13a5b5=md5hex(String(_0x3a1950[_0x5b5361(0x475)]));return new Response(JSON[_0x5b5361(0x2f4)]({'ok':!![],'next':_0x1e2339[_0x5b5361(0x2bc)](_0x5b5361(0x455))||'/'}),{'status':0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8','Set-Cookie':_0x5b5361(0x406)+_0x13a5b5+_0x5b5361(0x173)}});}return json({'ok':![],'msg':_0x5b5361(0x24a)},0x193);}if(_0x3a1950[_0x5b5361(0x475)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x5b5361(0x309)}});return Response[_0x5b5361(0x27b)](new URL('/'+_0x5427a3,_0x101838[_0x5b5361(0x396)])[_0x5b5361(0x338)],0x12e);}const _0x4474e0=String(_0x3a1950['subUrl']||'')[_0x5b5361(0x2ae)]()['replace'](/^\/+/,'')['replace'](/\/+$/,''),_0x1c0f0c=_0x253a84[0x0]===_0x5427a3||!!_0x4474e0&&_0x253a84[0x0]===_0x4474e0;if(_0x253a84[0x0]===''&&isBrowserUA(_0x37f9d4))return Response[_0x5b5361(0x27b)](new URL('/'+_0x5427a3,_0x101838[_0x5b5361(0x396)])[_0x5b5361(0x338)],0x12e);if(_0x1c0f0c&&_0x253a84[_0x5b5361(0x2ca)]===0x1){if(_0x3242cd===_0x5b5361(0x2be))return handleWebSocketProxy(_0x101838,_0x3a1950);if(_0x101838[_0x5b5361(0x374)]==='POST'){if(_0x3a1950[_0x5b5361(0x408)])try{return await handleXhttpProxy(_0x101838,_0x3a1950);}catch(_0x50d49c){return json({'ok':![],'msg':_0x5b5361(0x360)+(_0x50d49c['message']||_0x50d49c)},0x1f4);}}}if(_0x1c0f0c&&(_0x253a84[0x1]===_0x5b5361(0x258)||_0x253a84[_0x5b5361(0x2ca)]===0x1&&!isBrowserUA(_0x37f9d4)&&!_0x37f9d4[_0x5b5361(0x3c7)](_0x5b5361(0x1fa)))){const _0x5ea718=_0x253a84[_0x5b5361(0x2ca)]>=0x3?_0x253a84[0x2]:'';try{let _0x3f1614=null;if(_0x3a1950[_0x5b5361(0x2ec)]!==![]&&_0x3e4e34['K']&&typeof _0x3e4e34['K'][_0x5b5361(0x2bc)]===_0x5b5361(0x481))try{const _0x583d2c=await _0x3e4e34['K']['get'](_0x5b5361(0x1ce));if(_0x583d2c){const _0x1aa9e6=JSON[_0x5b5361(0x2e7)](_0x583d2c);if(Array[_0x5b5361(0x26e)](_0x1aa9e6[_0x5b5361(0x27e)])&&_0x1aa9e6[_0x5b5361(0x27e)]['length'])_0x3f1614=new Set(_0x1aa9e6[_0x5b5361(0x27e)]);}}catch(_0xa6efd3){}const _0x4be391=_0x3f1614?Object[_0x5b5361(0x3ec)]({},_0x3a1950,{'_skipIssued':_0x3f1614}):_0x3a1950;if(_0x3a1950['quotaAuto'])try{const _0x18330c=await getQuota(_0x3e4e34,_0x3a1950);if(_0x18330c['configured']&&_0x18330c['today']&&_0x18330c[_0x5b5361(0x35d)][_0x5b5361(0x222)]>=Math['round'](QUOTA_LIMIT*0.6)){const _0x5458bf=_0x18330c[_0x5b5361(0x35d)][_0x5b5361(0x222)]/_0x18330c[_0x5b5361(0x36b)],_0x573465=Math[_0x5b5361(0x43f)](0.1,(0x1-_0x5458bf)/0.4);_0x4be391['_quotaCap']=Math[_0x5b5361(0x43f)](0x14,Math[_0x5b5361(0x2f1)](0x3e8*_0x573465));}}catch(_0x562383){}const _0x599bd2=await generateSubscription(_0x4be391,_0x101838[_0x5b5361(0x396)],_0x5ea718,_0x37f9d4,_0x101838['cf']&&_0x101838['cf']['colo']);if(_0x3a1950['polling']!==![]&&_0x3e4e34['K']&&typeof _0x3e4e34['K'][_0x5b5361(0x29c)]===_0x5b5361(0x481)&&_0x599bd2['issued']&&_0x599bd2['issued'][_0x5b5361(0x2ca)]){const _0x30ea20=_0x3f1614?Array[_0x5b5361(0x35a)](_0x3f1614):[],_0x4d752a=[...new Set([..._0x599bd2[_0x5b5361(0x1ce)],..._0x30ea20])][_0x5b5361(0x39d)](0x0,0xc8),_0x43bc27=_0x4d752a[_0x5b5361(0x2ca)]!==_0x30ea20[_0x5b5361(0x2ca)]||_0x4d752a['some']((_0x142dca,_0x504590)=>_0x142dca!==_0x30ea20[_0x504590]);if(_0x43bc27){const _0x29b2ec=JSON['stringify']({'t':Date[_0x5b5361(0x250)](),'ips':_0x4d752a});if(_0x3e4e34[_0x5b5361(0x1e7)]&&typeof _0x3e4e34[_0x5b5361(0x1e7)]['waitUntil']===_0x5b5361(0x481))_0x3e4e34['_ctx']['waitUntil'](_0x3e4e34['K'][_0x5b5361(0x29c)](_0x5b5361(0x1ce),_0x29b2ec)[_0x5b5361(0x200)](()=>{}));else await _0x3e4e34['K'][_0x5b5361(0x29c)]('issued',_0x29b2ec)['catch'](()=>{});}}return new Response(_0x599bd2[_0x5b5361(0x407)],{'status':0xc8,'headers':{'Content-Type':_0x599bd2[_0x5b5361(0x238)]+_0x5b5361(0x43e),'Cache-Control':'no-store','Content-Disposition':_0x5b5361(0x3d1)}});}catch(_0x66040c){return new Response(_0x5b5361(0x17d)+(_0x66040c&&_0x66040c[_0x5b5361(0x221)]||_0x66040c),{'status':0x1f4,'headers':{'Content-Type':_0x5b5361(0x2b8)}});}}if(_0x1c0f0c&&_0x253a84[_0x5b5361(0x2ca)]===0x1&&isBrowserUA(_0x37f9d4)){if(!await requireAuth(_0x101838,_0x3a1950))return Response['redirect'](new URL('/login?next='+encodeURIComponent('/'+_0x5427a3),_0x101838[_0x5b5361(0x396)])[_0x5b5361(0x338)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x5b5361(0x309)}});}if(_0x1c0f0c&&_0x253a84[0x1]==='api'){const _0x29022c=_0x253a84[0x2]||'',_0x342d93=await requireAuth(_0x101838,_0x3a1950);if(!_0x342d93)return json({'ok':![],'status':0x193,'msg':'未授权（需要管理密码）'},0x193);if(_0x29022c===_0x5b5361(0x3cb)){if(_0x101838[_0x5b5361(0x374)]==='GET')return json({'ok':!![],'data':Object[_0x5b5361(0x3ec)]({},_0x3a1950,{'version':VERSION})});if(_0x101838[_0x5b5361(0x374)]===_0x5b5361(0x2e8))try{const _0x4e48b5=await _0x101838[_0x5b5361(0x291)]();let _0x3bec23=![];if(_0x3e4e34['K']&&typeof _0x3e4e34['K']['get']===_0x5b5361(0x481))try{const _0x413c0a=await _0x3e4e34['K']['get']('config',{'cacheTtl':0x1e});if(_0x413c0a){const _0x2c6f13=JSON[_0x5b5361(0x2e7)](_0x413c0a);if(_0x2c6f13[_0x5b5361(0x2d7)]!==undefined)_0x3bec23=!![];}}catch(_0x14bb6f){}const _0x9acdeb=Object[_0x5b5361(0x3ec)](JSON[_0x5b5361(0x2e7)](JSON[_0x5b5361(0x2f4)](_0x3a1950)),_0x4e48b5);if(!_0x3bec23&&_0x9acdeb[_0x5b5361(0x2d7)]===![]){const _0x506b57=Boolean(_0x9acdeb[_0x5b5361(0x487)]&&_0x9acdeb[_0x5b5361(0x2fc)]||_0x3e4e34['CF_ACCOUNT_ID']&&_0x3e4e34[_0x5b5361(0x1c3)]);if(_0x506b57)_0x9acdeb[_0x5b5361(0x2d7)]=!![];}if(_0x4e48b5[_0x5b5361(0x41c)]&&typeof _0x4e48b5['optimizer']==='object')_0x9acdeb[_0x5b5361(0x41c)]=Object[_0x5b5361(0x3ec)](_0x9acdeb[_0x5b5361(0x41c)],_0x4e48b5[_0x5b5361(0x41c)]);if(_0x4e48b5['preferredIPs']&&Array['isArray'](_0x4e48b5[_0x5b5361(0x34b)]))_0x9acdeb['preferredIPs']=_0x4e48b5[_0x5b5361(0x34b)];await saveConfig(_0x3e4e34,_0x9acdeb);const _0xa24a1=await loadConfig(_0x3e4e34,_0x101838['url']);return json({'ok':!![],'data':Object[_0x5b5361(0x3ec)]({},_0xa24a1,{'version':VERSION}),'msg':_0x5b5361(0x20b)});}catch(_0x585b9a){return json({'ok':![],'msg':_0x5b5361(0x159)+(_0x585b9a['message']||_0x585b9a)},0x1f4);}}if(_0x29022c===_0x5b5361(0x15a)){if(_0x101838[_0x5b5361(0x374)]!==_0x5b5361(0x2e8))return json({'ok':![],'msg':_0x5b5361(0x431)},0x195);try{if(!_0x3e4e34['K']||typeof _0x3e4e34['K'][_0x5b5361(0x314)]!==_0x5b5361(0x481))return json({'ok':![],'msg':_0x5b5361(0x264)},0x190);return await _0x3e4e34['K']['delete'](_0x5b5361(0x3cb)),await _0x3e4e34['K']['delete'](_0x5b5361(0x1ce)),invalidateConfigCache(),json({'ok':!![],'msg':_0x5b5361(0x47e)});}catch(_0x21c1c5){return json({'ok':![],'msg':_0x5b5361(0x1ef)+(_0x21c1c5[_0x5b5361(0x221)]||_0x21c1c5)},0x1f4);}}if(_0x29022c===_0x5b5361(0x298))return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()===_0x5b5361(0x3f5)?_0x5b5361(0x1e6):'明文版','host':_0x2c0c55['hostname'],'path':_0x5427a3,'region':_0x101838['cf']&&_0x101838['cf']['colo']||_0x5b5361(0x3ac),'kv':!!(_0x3e4e34['K']&&typeof _0x3e4e34['K'][_0x5b5361(0x2bc)]==='function'),'workersDev':/\.workers\.dev$/i[_0x5b5361(0x3fe)](_0x2c0c55[_0x5b5361(0x452)])}});if(_0x29022c===_0x5b5361(0x2ba))try{const _0x1906c8=await checkUpdate(_0x3e4e34),_0x398d20={'current':_0x1906c8['current'],'latest':_0x1906c8[_0x5b5361(0x1c6)],'hasUpdate':_0x1906c8['hasUpdate'],'kind':_0x1906c8[_0x5b5361(0x33d)],'error':_0x1906c8[_0x5b5361(0x2f2)]||''};if(_0x1906c8[_0x5b5361(0x219)]&&_0x1906c8[_0x5b5361(0x31d)])_0x398d20['code']=_0x1906c8['code'];return json({'ok':!![],'data':_0x398d20});}catch(_0x46c2e7){return json({'ok':![],'msg':_0x5b5361(0x254)+(_0x46c2e7['message']||_0x46c2e7)},0x1f4);}if(_0x29022c===_0x5b5361(0x45e))try{const _0x4a6289=await getQuota(_0x3e4e34,_0x3a1950);return json({'ok':!![],'data':_0x4a6289});}catch(_0x3c3702){return json({'ok':![],'msg':_0x5b5361(0x27f)+(_0x3c3702['message']||_0x3c3702)},0x1f4);}if(_0x29022c===_0x5b5361(0x258)){const _0x3d78cb=_0x2c0c55['searchParams']['get']('fmt')||'';try{const _0x1b1e32=await generateSubscription(_0x3a1950,_0x101838[_0x5b5361(0x396)],_0x3d78cb,_0x37f9d4,_0x101838['cf']&&_0x101838['cf'][_0x5b5361(0x35b)]);return json({'ok':!![],'type':_0x1b1e32['type'],'body':_0x1b1e32[_0x5b5361(0x407)]});}catch(_0x3ffa97){return json({'ok':![],'msg':_0x5b5361(0x17d)+(_0x3ffa97['message']||_0x3ffa97)},0x1f4);}}if(_0x29022c==='candidates'){if(_0x101838[_0x5b5361(0x374)]!==_0x5b5361(0x2e8))return json({'ok':![],'msg':_0x5b5361(0x431)},0x195);try{const _0xb00aa4=await _0x101838[_0x5b5361(0x291)]()[_0x5b5361(0x200)](()=>({})),_0x386f67=await collectCandidates(Object[_0x5b5361(0x3ec)]({},_0x3a1950[_0x5b5361(0x41c)],_0xb00aa4));if(!_0x386f67[_0x5b5361(0x276)]['length']){const _0x3360fb=_0x386f67[_0x5b5361(0x346)]||{},_0x3b0f7b=[_0x3360fb['presetErr']&&_0x5b5361(0x22e)+_0x3360fb[_0x5b5361(0x29f)],_0x3360fb[_0x5b5361(0x460)]&&_0x5b5361(0x2a4)+_0x3360fb[_0x5b5361(0x460)]]['filter'](Boolean)[_0x5b5361(0x3d5)]('；');return json({'ok':![],'msg':_0x5b5361(0x333)+(_0x3b0f7b?'（'+_0x3b0f7b+'）':_0x5b5361(0x16a))},0x190);}return json({'ok':!![],'data':_0x386f67[_0x5b5361(0x276)],'stats':_0x386f67[_0x5b5361(0x346)]});}catch(_0x931df7){return json({'ok':![],'msg':_0x5b5361(0x216)+(_0x931df7[_0x5b5361(0x221)]||_0x931df7)},0x1f4);}}if(_0x29022c==='domains')try{const _0xb28a25=OPTIMIZE_SOURCES[_0x2c0c55['searchParams'][_0x5b5361(0x2bc)](_0x5b5361(0x28b))||'wetest_cname']||OPTIMIZE_SOURCES['wetest_cname'],_0x427bb6=await fetch(_0xb28a25[_0x5b5361(0x396)],{'headers':{'User-Agent':_0x5b5361(0x2e4)}});if(!_0x427bb6['ok'])return json({'ok':![],'msg':'拉取失败\x20HTTP\x20'+_0x427bb6[_0x5b5361(0x298)]});const _0x317922=extractDomains(await _0x427bb6[_0x5b5361(0x42e)]());return json({'ok':!![],'data':_0x317922});}catch(_0x5b04aa){return json({'ok':![],'msg':_0x5b5361(0x216)+(_0x5b04aa[_0x5b5361(0x221)]||_0x5b04aa)},0x1f4);}return json({'ok':![],'msg':_0x5b5361(0x1c0)+_0x29022c},0x194);}return new Response(_0x5b5361(0x294),{'status':0x194});}async function handleScheduled(_0xbde883,_0x1a6784,_0x970c81){const _0x4c21af=a0_0x15be5e,_0x4cb19d=String(_0x1a6784[_0x4c21af(0x306)]||'')[_0x4c21af(0x278)]();if(_0x4cb19d!=='1'&&_0x4cb19d!==_0x4c21af(0x1aa))return;try{const _0x56d3b6=await loadConfig(_0x1a6784),_0xa4656f=await collectCandidates(_0x56d3b6['optimizer']),_0x1185d8=_0xa4656f[_0x4c21af(0x276)]||[];if(!_0x1185d8[_0x4c21af(0x2ca)])return;const _0x46e490=await runLatencyTest(_0x1185d8,_0x56d3b6[_0x4c21af(0x41c)][_0x4c21af(0x18d)]||0x5,0x1388),_0x28f2c2=_0x46e490[_0x4c21af(0x36f)](_0x1d0f88=>_0x1d0f88['ok'])[_0x4c21af(0x39d)](0x0,_0x56d3b6[_0x4c21af(0x41c)]['count']||0x14);if(!_0x28f2c2[_0x4c21af(0x2ca)])return;_0x56d3b6[_0x4c21af(0x34b)]=_0x28f2c2[_0x4c21af(0x2c2)](_0x2ef90a=>({'ip':_0x2ef90a['ip'],'port':_0x2ef90a[_0x4c21af(0x453)]||0x1bb,'name':''})),await saveConfig(_0x1a6784,_0x56d3b6);}catch(_0x650aa3){}}export default{async 'fetch'(_0x5a8f1f,_0x5ca159,_0x50ccb0){const _0x34f5dd=a0_0x15be5e;return handleRequest(_0x5a8f1f,Object[_0x34f5dd(0x3ec)]({},_0x5ca159,{'_ctx':_0x50ccb0}));},async 'scheduled'(_0x525ddd,_0x39e3f3,_0x32d057){return handleScheduled(_0x525ddd,_0x39e3f3,_0x32d057);}};