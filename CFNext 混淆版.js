const _0x30a059=_0x2153;(function(_0x545950,_0x577cd2){const _0x453c0e=_0x2153,_0x5077a7=_0x545950();while(!![]){try{const _0x5ecc2a=-parseInt(_0x453c0e(0x24c))/0x1*(-parseInt(_0x453c0e(0x3d5))/0x2)+-parseInt(_0x453c0e(0x1c0))/0x3*(parseInt(_0x453c0e(0x23e))/0x4)+parseInt(_0x453c0e(0x28e))/0x5+-parseInt(_0x453c0e(0x2f9))/0x6*(parseInt(_0x453c0e(0x327))/0x7)+-parseInt(_0x453c0e(0x125))/0x8+parseInt(_0x453c0e(0x228))/0x9*(parseInt(_0x453c0e(0x1df))/0xa)+parseInt(_0x453c0e(0xfd))/0xb;if(_0x5ecc2a===_0x577cd2)break;else _0x5077a7['push'](_0x5077a7['shift']());}catch(_0xd4db8b){_0x5077a7['push'](_0x5077a7['shift']());}}}(_0x564d,0x71491));const _0x5e1533=(function(){let _0x12ee39=!![];return function(_0x16658d,_0x37b0a2){const _0x2185bb=_0x12ee39?function(){if(_0x37b0a2){const _0x7c2ffd=_0x37b0a2['apply'](_0x16658d,arguments);return _0x37b0a2=null,_0x7c2ffd;}}:function(){};return _0x12ee39=![],_0x2185bb;};}()),_0x3535ae=_0x5e1533(this,function(){const _0x14162b=_0x2153;return _0x3535ae['toString']()[_0x14162b(0xc3)](_0x14162b(0x109))[_0x14162b(0x142)]()[_0x14162b(0x370)](_0x3535ae)[_0x14162b(0xc3)](_0x14162b(0x109));});_0x3535ae();const _0x11136a=(function(){let _0x3c44c4=!![];return function(_0x2afe82,_0x1f3eb6){const _0x565245=_0x3c44c4?function(){if(_0x1f3eb6){const _0x141bf8=_0x1f3eb6['apply'](_0x2afe82,arguments);return _0x1f3eb6=null,_0x141bf8;}}:function(){};return _0x3c44c4=![],_0x565245;};}()),_0x390852=_0x11136a(this,function(){const _0x4f324c=_0x2153;let _0x1fa64e;try{const _0x2e0f42=Function('return\x20(function()\x20'+_0x4f324c(0x291)+');');_0x1fa64e=_0x2e0f42();}catch(_0x6b8979){_0x1fa64e=window;}const _0x483614=_0x1fa64e[_0x4f324c(0x25d)]=_0x1fa64e['console']||{},_0x48ecf2=['log',_0x4f324c(0x21d),_0x4f324c(0xc2),_0x4f324c(0x1d5),'exception',_0x4f324c(0x18f),_0x4f324c(0x156)];for(let _0x1c3c50=0x0;_0x1c3c50<_0x48ecf2[_0x4f324c(0xd7)];_0x1c3c50++){const _0x3fce0e=_0x11136a[_0x4f324c(0x370)][_0x4f324c(0x19e)][_0x4f324c(0x2b1)](_0x11136a),_0x29a949=_0x48ecf2[_0x1c3c50],_0x1a8f7f=_0x483614[_0x29a949]||_0x3fce0e;_0x3fce0e[_0x4f324c(0x11d)]=_0x11136a[_0x4f324c(0x2b1)](_0x11136a),_0x3fce0e[_0x4f324c(0x142)]=_0x1a8f7f[_0x4f324c(0x142)][_0x4f324c(0x2b1)](_0x1a8f7f),_0x483614[_0x29a949]=_0x3fce0e;}});_0x390852();import{connect}from'cloudflare:sockets';const VERSION=_0x30a059(0x194),DEPLOY_EDITION=_0x30a059(0x9a);function deployKind(){const _0x179177=_0x30a059;try{return DEPLOY_EDITION===_0x179177(0x9a)?_0x179177(0x328):_0x179177(0xc4);}catch(_0x4a9c0c){return _0x179177(0xc4);}}const UPDATE_REPO=_0x30a059(0x11f);let UPDATE_CACHE=null;function parseVer(_0x55e07a){const _0x127855=_0x30a059,_0x46ac5c=String(_0x55e07a||'')[_0x127855(0x27b)](/(\d+)\.(\d+)\.(\d+)/);return _0x46ac5c?[parseInt(_0x46ac5c[0x1],0xa),parseInt(_0x46ac5c[0x2],0xa),parseInt(_0x46ac5c[0x3],0xa)]:null;}function cmpVer(_0xbf7eb9,_0x3c1e4e){const _0x2b8091=parseVer(_0xbf7eb9),_0x4219c3=parseVer(_0x3c1e4e);if(!_0x2b8091||!_0x4219c3)return 0x0;for(let _0x582ec8=0x0;_0x582ec8<0x3;_0x582ec8++){if(_0x2b8091[_0x582ec8]!==_0x4219c3[_0x582ec8])return _0x2b8091[_0x582ec8]<_0x4219c3[_0x582ec8]?-0x1:0x1;}return 0x0;}function extractVersion(_0x4bf801){const _0x272c48=_0x4bf801['match'](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x272c48?_0x272c48[0x1]:null;}async function checkUpdate(_0xa8bf92){const _0x1d471d=_0x30a059,_0x5b7d77=Date['now']();if(UPDATE_CACHE&&_0x5b7d77-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x528355=deployKind()===_0x1d471d(0x328)?'混淆':'明文';let _0x66dd31=null,_0x5c44a4='',_0x42c63c='';const _0x4e1f2f='https://raw.githubusercontent.com/'+UPDATE_REPO+'/main/'+encodeURIComponent(_0x1d471d(0x2ab));try{const _0x30d161=await fetch(_0x4e1f2f,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x30d161['ok']){const _0x192a8d=await _0x30d161[_0x1d471d(0x201)](),_0x4971df=extractVersion(_0x192a8d);if(_0x4971df)_0x66dd31=_0x4971df;}}catch(_0x28c153){_0x42c63c=_0x28c153&&_0x28c153['message']||String(_0x28c153);}if(_0x66dd31){const _0x5a1b2f=_0x528355==='混淆'?'CFNext\x20混淆版.js':_0x1d471d(0x2ab),_0x23681d='https://raw.githubusercontent.com/'+UPDATE_REPO+'/main/'+encodeURIComponent(_0x5a1b2f);try{const _0x847e96=await fetch(_0x23681d,{'headers':{'User-Agent':_0x1d471d(0x3e3)}});if(_0x847e96['ok'])_0x5c44a4=await _0x847e96['text']();}catch(_0x115e7a){}return UPDATE_CACHE={'t':_0x5b7d77,'r':{'current':VERSION,'kind':_0x528355,'latest':_0x66dd31,'hasUpdate':cmpVer(_0x66dd31,VERSION)>0x0,'code':_0x5c44a4,'checkedAt':_0x5b7d77}},UPDATE_CACHE['r'];}const _0x555b64='https://raw.githubusercontent.com/'+UPDATE_REPO+'/main/'+encodeURIComponent('CFNext\x20混淆版.js');try{const _0x5a2b8f=await fetch(_0x555b64,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x5a2b8f['ok']){const _0x25d160=await _0x5a2b8f[_0x1d471d(0x201)](),_0x50ce9a=extractVersion(_0x25d160);if(_0x50ce9a)_0x66dd31=_0x50ce9a;}}catch(_0x5c5d6c){_0x42c63c=_0x5c5d6c&&_0x5c5d6c[_0x1d471d(0x384)]||String(_0x5c5d6c);}if(_0x66dd31)return UPDATE_CACHE={'t':_0x5b7d77,'r':{'current':VERSION,'kind':_0x528355,'latest':_0x66dd31,'hasUpdate':cmpVer(_0x66dd31,VERSION)>0x0,'code':'','checkedAt':_0x5b7d77}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x528355,'latest':null,'hasUpdate':![],'code':'','error':_0x42c63c||_0x1d471d(0x279)};}const CLASH_TEMPLATE='\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走代理隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20默认\x20nameserver\x20用国内\x20DoH；只有“将走代理”的规则集才用国外\x20DoH，\x0a#\x20\x20\x20\x20\x20\x20且其域名在\x20rules\x20中显式固定走代理。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH（微软已并入直连，微软域名走国内解析后直连）\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China,Microsoft\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20-\x20RULE-SET,Microsoft,直接连接\x20\x20\x20\x20\x20\x20\x20\x20#\x20微软全家桶直连（Office\x20/\x20OneDrive\x20/\x20Windows\x20更新\x20/\x20Teams\x20/\x20Xbox\x20等）\x0a\x20\x20-\x20RULE-SET,China,直接连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名直连\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC（大陆\x20/\x20微软\x20/\x20苹果）不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20大陆\x20IP\x20兜底直连：覆盖规则集未收录的域名\x20/\x20纯\x20IP\x20连接的大陆应用（GEOIP\x20库覆盖面更全）\x0a\x20\x20-\x20GEOIP,CN,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：其余（国外）走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0aBehaviorCL:\x20&BehaviorCL\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x20\x20\x20#\x20经典规则集（blackmatrix7\x20等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}\x20\x20\x20#\x20大陆直连全量：ChinaMaxNoIP（11万+\x20域名，含大陆可达国际服务），每日更新\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}\x20\x20\x20#\x20微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure\x20等）\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a',CLOUDFLARE_CIDRS=['173.245.48.0/20',_0x30a059(0x3dd),_0x30a059(0x2e4),_0x30a059(0x23b),_0x30a059(0x25f),_0x30a059(0x245),_0x30a059(0x29b),'188.114.96.0/20','197.234.240.0/22',_0x30a059(0x2cb),'162.158.0.0/15','104.16.0.0/13',_0x30a059(0x3b8),_0x30a059(0x309),_0x30a059(0x15a)],REACHABLE_CIDRS=[_0x30a059(0x1ce),'104.24.0.0/14',_0x30a059(0x309),'162.158.0.0/15',_0x30a059(0x391)],CLOUDFLARE_CIDRS_V6=[_0x30a059(0x3e0),_0x30a059(0x148),_0x30a059(0x30d),_0x30a059(0x159),_0x30a059(0x2fb),_0x30a059(0x295),_0x30a059(0x33d)],REACHABLE_CIDRS_V6=['2606:4700::/32',_0x30a059(0x3e0),'2803:f800::/32','2a06:98c0::/29',_0x30a059(0x33d)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6[_0x30a059(0x239)](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0x1dcb29=_0x30a059,_0x31ad66=Date[_0x1dcb29(0x24d)]();if(OFFICIAL_V6_CIDRS_T&&_0x31ad66-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x4436a5=await fetch(_0x1dcb29(0x1bb),{'signal':AbortSignal[_0x1dcb29(0x3eb)](0x2710)});if(!_0x4436a5['ok'])return;const _0x34af81=await _0x4436a5[_0x1dcb29(0x201)](),_0x370526=String(_0x34af81)['split']('\x0a')[_0x1dcb29(0x396)](_0x3d2e91=>_0x3d2e91[_0x1dcb29(0x36c)]())[_0x1dcb29(0x13e)](_0x16e506=>/^[0-9a-fA-F:.]+\/\d+$/[_0x1dcb29(0x1fa)](_0x16e506)&&_0x16e506[_0x1dcb29(0x12c)](':')>=0x0);_0x370526[_0x1dcb29(0xd7)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x370526,OFFICIAL_V6_CIDRS_T=_0x31ad66);}catch(_0x16a24e){}}function ipInCidrV6(_0x4d3c6a,_0x4dc821){const _0x64bffe=_0x30a059,[_0x1a7f4,_0x4f4f04]=_0x4dc821[_0x64bffe(0x246)]('/'),_0x2536e3=parseInt(_0x4f4f04,0xa),_0x41410e=_0x429c49=>{const _0x25674f=_0x64bffe,_0x2e2547=_0x429c49['indexOf']('::');let _0x363d1d;if(_0x2e2547>=0x0){const _0x27860e=_0x429c49['slice'](0x0,_0x2e2547)[_0x25674f(0x246)](':')[_0x25674f(0x13e)](Boolean),_0x1ecd39=_0x429c49['slice'](_0x2e2547+0x2)[_0x25674f(0x246)](':')[_0x25674f(0x13e)](Boolean),_0x532b90=0x8-_0x27860e[_0x25674f(0xd7)]-_0x1ecd39[_0x25674f(0xd7)];_0x363d1d=[..._0x27860e,...Array(_0x532b90)[_0x25674f(0x24e)]('0'),..._0x1ecd39];}else _0x363d1d=_0x429c49[_0x25674f(0x246)](':');return _0x363d1d[_0x25674f(0x396)](_0x514b64=>_0x514b64[_0x25674f(0x1a3)](0x4,'0'));},_0x33eaa5=_0x2b9af2=>_0x2b9af2[_0x64bffe(0x396)](_0x5c7377=>parseInt(_0x5c7377,0x10)[_0x64bffe(0x142)](0x2)['padStart'](0x10,'0'))[_0x64bffe(0x10e)]('');return _0x33eaa5(_0x41410e(_0x4d3c6a))[_0x64bffe(0x239)](0x0,_0x2536e3)===_0x33eaa5(_0x41410e(_0x1a7f4))[_0x64bffe(0x239)](0x0,_0x2536e3);}function isCloudflareIP(_0x110e15){const _0x1dcb32=_0x30a059;_0x110e15=String(_0x110e15||'');if(!isValidIp(_0x110e15))return![];if(_0x110e15[_0x1dcb32(0x12c)](':')>=0x0)return CLOUDFLARE_CIDRS_V6['some'](_0x42ff30=>ipInCidrV6(_0x110e15,_0x42ff30));const _0x1f3473=_0x110e15[_0x1dcb32(0x246)]('.')[_0x1dcb32(0x396)](Number),_0x28c507=(_0x1f3473[0x0]<<0x18|_0x1f3473[0x1]<<0x10|_0x1f3473[0x2]<<0x8|_0x1f3473[0x3])>>>0x0;return CLOUDFLARE_RANGES['some'](([_0x9a110a,_0x42734f])=>_0x28c507>=_0x9a110a&&_0x28c507<=_0x42734f);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':'新加坡','US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x30a059(0x2bf),'AU':_0x30a059(0x252),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':_0x30a059(0x3de),'ES':_0x30a059(0xa5),'PT':_0x30a059(0xd2),'IE':_0x30a059(0xcd),'BE':'比利时','AT':_0x30a059(0x251),'PL':'波兰','CZ':'捷克','RO':'罗马尼亚','HU':_0x30a059(0x320),'GR':'希腊','RU':'俄罗斯','TR':'土耳其','UA':_0x30a059(0x3ed),'IN':'印度','TH':'泰国','MY':_0x30a059(0x235),'VN':'越南','PH':_0x30a059(0x3b6),'ID':'印尼','BR':'巴西','MX':_0x30a059(0x2c3),'AR':'阿根廷','CL':'智利','ZA':'南非','EG':'埃及','AE':_0x30a059(0x34b),'IL':'以色列','NZ':_0x30a059(0xaa),'KZ':_0x30a059(0x2bb),'SA':'沙特'},DEFAULT_REGION_POOLS=[_0x30a059(0x25a),_0x30a059(0x122),_0x30a059(0x3c8),_0x30a059(0x133),'https://bestcf.pages.dev/random-region/US/100.txt',_0x30a059(0x311)][_0x30a059(0x10e)]('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x5da5cc){return TRUSTED_REGION_POOL_RE['test'](String(_0x5da5cc||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':_0x30a059(0x234),'echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'probeAlive':![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x30a059(0x1b6),'preferredIPs':[],'optimizer':{'source':_0x30a059(0x205),'sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':_0x30a059(0x24b),'ipType':[_0x30a059(0x1ca),'IPv6'],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=['cloudflare.com',_0x30a059(0xde),_0x30a059(0xf7)],BUILTIN_STABLE_IPS=[_0x30a059(0x21e),'172.67.72.4',_0x30a059(0x2da),_0x30a059(0x264),'104.16.88.7','104.16.98.7',_0x30a059(0x390),_0x30a059(0x29f),_0x30a059(0x29a),_0x30a059(0x360),_0x30a059(0x1d7),_0x30a059(0x3e8),_0x30a059(0xd9),'104.20.1.1',_0x30a059(0x98),_0x30a059(0x394),_0x30a059(0x331),_0x30a059(0x3b9),_0x30a059(0x28f),_0x30a059(0x2a8)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x30a059(0x25a),'count':0xc},{'label':'日本','region':'JP','url':'https://bestcf.pages.dev/random-region/JP/100.txt','count':0xc},{'label':'美国','region':'US','url':_0x30a059(0x3c6),'count':0xc},{'label':'新加坡','region':'SG','url':'https://bestcf.pages.dev/random-region/SG/100.txt','count':0xc},{'label':'台湾','region':'TW','url':'https://bestcf.pages.dev/random-region/TW/100.txt','count':0xc}],BUILTIN_PREFERRED_IPS=[_0x30a059(0x250),_0x30a059(0x1e5),_0x30a059(0x365),_0x30a059(0x12e),_0x30a059(0x342),_0x30a059(0x21b),_0x30a059(0xb3),_0x30a059(0x18a),'104.16.249.249#优选IP-009',_0x30a059(0x308),_0x30a059(0x22e),'104.17.24.252#优选IP-012','188.114.99.52#优选IP-013','162.159.94.229#优选IP-014','162.159.5.175#优选IP-015',_0x30a059(0x2c1),_0x30a059(0x305),_0x30a059(0xb1),_0x30a059(0x21a),_0x30a059(0x38d),_0x30a059(0x111),_0x30a059(0x26a),'104.18.40.93#优选IP-023',_0x30a059(0x339),'104.18.47.234#优选IP-025',_0x30a059(0x35e),_0x30a059(0x261),_0x30a059(0x323),'104.17.185.207#优选IP-029',_0x30a059(0xed),'162.159.44.215#优选IP-031',_0x30a059(0xc8),_0x30a059(0x2d7),_0x30a059(0x24f),_0x30a059(0x202),'162.159.137.205#优选IP-036',_0x30a059(0x3ec),'104.25.45.44#优选IP-038',_0x30a059(0x262),_0x30a059(0x31d),'104.18.185.40#优选IP-041','104.25.141.168#优选IP-042','104.25.246.123#优选IP-043',_0x30a059(0x161),_0x30a059(0x335),'188.114.98.144#优选IP-046',_0x30a059(0x39e),'104.17.127.106#优选IP-048','162.159.4.175#优选IP-049',_0x30a059(0x2a1),_0x30a059(0xe8),_0x30a059(0x2ac),'104.25.122.6#优选IP-053',_0x30a059(0x214),_0x30a059(0x12a),_0x30a059(0x248),_0x30a059(0x154),_0x30a059(0x153),_0x30a059(0x237),_0x30a059(0x1b8),_0x30a059(0x2c6),_0x30a059(0x138),_0x30a059(0x120),_0x30a059(0xca),_0x30a059(0x36d),'104.25.44.144#优选IP-066',_0x30a059(0x2cc),_0x30a059(0x3f1),_0x30a059(0xac),_0x30a059(0x2ad),'162.159.228.244#优选IP-071',_0x30a059(0x1f2),_0x30a059(0x1b3),'104.19.168.107#优选IP-074',_0x30a059(0x39a),_0x30a059(0x267),'104.24.2.253#优选IP-077',_0x30a059(0xf6),_0x30a059(0x37a),_0x30a059(0x2db),'172.65.145.187#优选IP-081',_0x30a059(0x32a),_0x30a059(0x186),_0x30a059(0x209),'104.18.133.24#优选IP-085','188.114.99.155#优选IP-086',_0x30a059(0x150),_0x30a059(0x14d),'104.19.78.30#优选IP-089',_0x30a059(0x118),_0x30a059(0x254),'172.65.35.169#优选IP-092','104.16.0.133#优选IP-093','104.16.238.98#优选IP-094',_0x30a059(0x1a1),_0x30a059(0x230),'104.24.58.243#优选IP-097',_0x30a059(0x386),_0x30a059(0x367),_0x30a059(0x99),_0x30a059(0x349),_0x30a059(0x199),_0x30a059(0x3b4),'188.114.96.94#优选IP-104',_0x30a059(0x3e6),_0x30a059(0x3a6),_0x30a059(0x171),_0x30a059(0x210),_0x30a059(0x182),_0x30a059(0x3ee),'104.27.72.4#优选IP-111',_0x30a059(0x3c3),_0x30a059(0x30e),_0x30a059(0x176),'172.67.189.246#优选IP-115',_0x30a059(0x2e2),_0x30a059(0x290),_0x30a059(0x3e5),'162.159.237.243#优选IP-119','104.25.193.135#优选IP-120',_0x30a059(0x1bd),_0x30a059(0x33b),_0x30a059(0xfe),_0x30a059(0x26f),_0x30a059(0x192),_0x30a059(0x3dc),'172.66.199.166#优选IP-127',_0x30a059(0x1ee),_0x30a059(0xc7),_0x30a059(0x385),'104.18.173.224#优选IP-131',_0x30a059(0xee),_0x30a059(0xfc),_0x30a059(0x38a),_0x30a059(0x1c8),'162.159.14.18#优选IP-136',_0x30a059(0x341),_0x30a059(0x1cb),_0x30a059(0x18e),_0x30a059(0x354),'104.17.146.117#优选IP-141',_0x30a059(0xdf),_0x30a059(0xd3),'104.25.100.203#优选IP-144',_0x30a059(0x229),_0x30a059(0x2c8),_0x30a059(0x1a0),_0x30a059(0x3bd),'104.16.123.26#优选IP-149',_0x30a059(0x27e),_0x30a059(0x3a9),'104.17.195.133#优选IP-152',_0x30a059(0x266),_0x30a059(0x31e),_0x30a059(0x304),_0x30a059(0xf8),_0x30a059(0x13c),_0x30a059(0xb0),'104.25.166.112#优选IP-159',_0x30a059(0x35f),_0x30a059(0x32f),_0x30a059(0x2ce),_0x30a059(0x3e9),_0x30a059(0x347),_0x30a059(0x33e),'172.66.157.150#优选IP-166',_0x30a059(0x25e),'104.18.26.28#优选IP-168',_0x30a059(0xef),'104.25.124.155#优选IP-170',_0x30a059(0x102),_0x30a059(0x3af),_0x30a059(0x188),_0x30a059(0xe5),_0x30a059(0x17b),_0x30a059(0x334),_0x30a059(0xc0),_0x30a059(0x282),_0x30a059(0x285),_0x30a059(0x1c4),'172.65.3.67#优选IP-181',_0x30a059(0x119),_0x30a059(0x2cd),_0x30a059(0xa1),_0x30a059(0x38f),'104.19.69.150#优选IP-186',_0x30a059(0x1cf),_0x30a059(0x1a5),_0x30a059(0x1e8),'172.65.202.216#优选IP-190',_0x30a059(0xa6),'104.19.32.220#优选IP-192',_0x30a059(0x20f),_0x30a059(0x293),_0x30a059(0xba),_0x30a059(0x137),_0x30a059(0x12d),_0x30a059(0x3b3),_0x30a059(0x1dd),'104.24.46.127#优选IP-200',_0x30a059(0x2f3),'188.114.97.80#优选IP-202',_0x30a059(0x3a1),_0x30a059(0x27a),'188.114.97.0#优选IP-205',_0x30a059(0x2ca),_0x30a059(0x36a),_0x30a059(0x29e),_0x30a059(0xff),'104.24.178.200#优选IP-210','188.114.96.164#优选IP-211',_0x30a059(0x2f6),_0x30a059(0x31b),_0x30a059(0x1c1),_0x30a059(0x1fc),'172.67.165.245#优选IP-216','104.17.169.109#优选IP-217',_0x30a059(0x380),_0x30a059(0x198),_0x30a059(0x136),_0x30a059(0x15f),_0x30a059(0x1f0),_0x30a059(0x337),_0x30a059(0x183),'172.65.118.105#优选IP-225',_0x30a059(0x317),_0x30a059(0x357),_0x30a059(0x1ae),_0x30a059(0x219),_0x30a059(0x1a9),'104.18.41.168#优选IP-231',_0x30a059(0x3a7),_0x30a059(0x2e6),_0x30a059(0x224),'104.25.86.143#优选IP-235',_0x30a059(0x3db),_0x30a059(0x35b),_0x30a059(0x2d6),_0x30a059(0x26d),_0x30a059(0x123),_0x30a059(0x16d),_0x30a059(0xcf),_0x30a059(0xb2),'188.114.98.27#优选IP-244','162.159.198.200#优选IP-245',_0x30a059(0x23c),_0x30a059(0x35d),_0x30a059(0x1c2),'162.159.135.234#优选IP-249',_0x30a059(0x16b),_0x30a059(0x26c),_0x30a059(0x181),'162.159.90.82#优选IP-253',_0x30a059(0x20e),_0x30a059(0xcc),_0x30a059(0x314),_0x30a059(0x203),_0x30a059(0x1ef),_0x30a059(0x184),_0x30a059(0x1b1),_0x30a059(0x269),'104.27.116.114#优选IP-262',_0x30a059(0x272),_0x30a059(0xf0),_0x30a059(0x353),_0x30a059(0x377),_0x30a059(0x1f6),_0x30a059(0x16c),'188.114.96.238#优选IP-269',_0x30a059(0x20d),'104.27.46.114#优选IP-271','104.25.126.144#优选IP-272',_0x30a059(0x379),_0x30a059(0x178),_0x30a059(0xa8),_0x30a059(0x2f7),'104.25.238.28#优选IP-277',_0x30a059(0x2f2),_0x30a059(0x128),_0x30a059(0x130),'162.159.10.243#优选IP-281','104.27.96.232#优选IP-282',_0x30a059(0x294),'104.24.25.178#优选IP-284','104.24.84.86#优选IP-285',_0x30a059(0x236),_0x30a059(0x2b9),'104.16.234.241#优选IP-288',_0x30a059(0x35a),_0x30a059(0x243),_0x30a059(0xcb),_0x30a059(0x185),_0x30a059(0x2b3),_0x30a059(0x1e0),_0x30a059(0x3a8),'104.24.250.89#优选IP-296',_0x30a059(0x372),_0x30a059(0x2eb),'104.24.49.39#优选IP-299',_0x30a059(0x28b)],DEFAULT_PREFERRED_DOMAINS=[_0x30a059(0x15c),_0x30a059(0x2e8),_0x30a059(0x17c),_0x30a059(0xfb),_0x30a059(0x168),_0x30a059(0x220),'cf.0sm.com',_0x30a059(0x1a4),_0x30a059(0x33c),'cloudflare.9jy.cc',_0x30a059(0x340),_0x30a059(0x1ea),_0x30a059(0x1de),_0x30a059(0x359),_0x30a059(0x301),_0x30a059(0x1f8),'f3058171cad.002404.xyz',_0x30a059(0x2f4),_0x30a059(0x113),_0x30a059(0x2be),'xn--b6gac.eu.org',_0x30a059(0x25b),_0x30a059(0x1a2),_0x30a059(0x112),_0x30a059(0x103)][_0x30a059(0x10e)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':_0x30a059(0x165),'url':_0x30a059(0x2dd)},'wetest_v6':{'label':_0x30a059(0x121),'url':_0x30a059(0x387)},'bestcf':{'label':_0x30a059(0x18d),'url':_0x30a059(0x22b)},'hostmonit':{'label':_0x30a059(0x13a),'url':'https://stock.hostmonit.com/CloudFlareYes'},'wetest_cname':{'label':'微测网\x20优选域名','url':_0x30a059(0x2bd)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x74b958){const _0x52f968=_0x30a059;let _0x3ffb36='';const _0x18d700=0x8000;for(let _0x57baed=0x0;_0x57baed<_0x74b958[_0x52f968(0xd7)];_0x57baed+=_0x18d700){_0x3ffb36+=String[_0x52f968(0xbe)](..._0x74b958[_0x52f968(0x1af)](_0x57baed,_0x57baed+_0x18d700));}return btoa(_0x3ffb36);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x268d20,_0x17a825){return(_0x268d20<<_0x17a825|_0x268d20>>>0x20-_0x17a825)>>>0x0;}function md5hex(_0x151fc0){const _0x1e20bd=_0x30a059,_0x33aa26=TE[_0x1e20bd(0xbf)](String(_0x151fc0)),_0x375dbf=_0x33aa26[_0x1e20bd(0xd7)]*0x8,_0x4be8db=(_0x33aa26[_0x1e20bd(0xd7)]+0x8>>0x6)+0x1<<0x6,_0x156909=new Uint8Array(_0x4be8db);_0x156909[_0x1e20bd(0xf2)](_0x33aa26),_0x156909[_0x33aa26[_0x1e20bd(0xd7)]]=0x80;const _0x4d35f3=new DataView(_0x156909['buffer']);_0x4d35f3[_0x1e20bd(0x28a)](_0x4be8db-0x8,_0x375dbf>>>0x0,!![]),_0x4d35f3[_0x1e20bd(0x28a)](_0x4be8db-0x4,Math[_0x1e20bd(0x2b5)](_0x375dbf/0x100000000),!![]);let _0x31c031=0x67452301,_0x5030fa=0xefcdab89,_0x2f38a5=0x98badcfe,_0xcd93a6=0x10325476;for(let _0x4a9ef1=0x0;_0x4a9ef1<_0x4be8db;_0x4a9ef1+=0x40){const _0x24f127=new Uint32Array(0x10);for(let _0x4a13c2=0x0;_0x4a13c2<0x10;_0x4a13c2++)_0x24f127[_0x4a13c2]=_0x4d35f3[_0x1e20bd(0x19b)](_0x4a9ef1+_0x4a13c2*0x4,!![]);let _0x3303f1=_0x31c031,_0x2b2d1a=_0x5030fa,_0x5c0589=_0x2f38a5,_0x1f09e5=_0xcd93a6;for(let _0xd59663=0x0;_0xd59663<0x40;_0xd59663++){let _0x4d410e,_0x42b4d1;if(_0xd59663<0x10)_0x4d410e=_0x2b2d1a&_0x5c0589|~_0x2b2d1a&_0x1f09e5,_0x42b4d1=_0xd59663;else{if(_0xd59663<0x20)_0x4d410e=_0x1f09e5&_0x2b2d1a|~_0x1f09e5&_0x5c0589,_0x42b4d1=(0x5*_0xd59663+0x1)%0x10;else _0xd59663<0x30?(_0x4d410e=_0x2b2d1a^_0x5c0589^_0x1f09e5,_0x42b4d1=(0x3*_0xd59663+0x5)%0x10):(_0x4d410e=_0x5c0589^(_0x2b2d1a|~_0x1f09e5),_0x42b4d1=0x7*_0xd59663%0x10);}const _0x5ba082=_0x3303f1+_0x4d410e+MD5_K[_0xd59663]+_0x24f127[_0x42b4d1]>>>0x0,_0xfe8ded=_0x2b2d1a+rotl32(_0x5ba082,MD5_S[_0xd59663])>>>0x0;_0x3303f1=_0x1f09e5,_0x1f09e5=_0x5c0589,_0x5c0589=_0x2b2d1a,_0x2b2d1a=_0xfe8ded;}_0x31c031=_0x31c031+_0x3303f1>>>0x0,_0x5030fa=_0x5030fa+_0x2b2d1a>>>0x0,_0x2f38a5=_0x2f38a5+_0x5c0589>>>0x0,_0xcd93a6=_0xcd93a6+_0x1f09e5>>>0x0;}let _0x2b9516='';for(const _0x4f4400 of[_0x31c031,_0x5030fa,_0x2f38a5,_0xcd93a6]){_0x2b9516+=(_0x4f4400&0xff)[_0x1e20bd(0x142)](0x10)[_0x1e20bd(0x1a3)](0x2,'0'),_0x2b9516+=(_0x4f4400>>>0x8&0xff)[_0x1e20bd(0x142)](0x10)[_0x1e20bd(0x1a3)](0x2,'0'),_0x2b9516+=(_0x4f4400>>>0x10&0xff)['toString'](0x10)[_0x1e20bd(0x1a3)](0x2,'0'),_0x2b9516+=(_0x4f4400>>>0x18&0xff)[_0x1e20bd(0x142)](0x10)[_0x1e20bd(0x1a3)](0x2,'0');}return _0x2b9516;}function uuidv4(){const _0x1e29ff=_0x30a059;if(crypto[_0x1e29ff(0xab)])return crypto[_0x1e29ff(0xab)]();const _0x1d6537=crypto[_0x1e29ff(0x1ad)](new Uint8Array(0x10));return _0x1d6537[0x6]=_0x1d6537[0x6]&0xf|0x40,_0x1d6537[0x8]=_0x1d6537[0x8]&0x3f|0x80,[..._0x1d6537][_0x1e29ff(0x396)]((_0x587bd3,_0x10b65c)=>(_0x10b65c===0x4||_0x10b65c===0x6||_0x10b65c===0x8||_0x10b65c===0xa?'-':'')+_0x587bd3[_0x1e29ff(0x142)](0x10)[_0x1e29ff(0x1a3)](0x2,'0'))[_0x1e29ff(0x10e)]('');}function isUUID(_0x1e0b67){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/['test'](_0x1e0b67||'');}function parseHostPort(_0x400a20,_0x1e43d9=0x1bb){const _0x35d86b=_0x30a059;_0x400a20=String(_0x400a20||'')[_0x35d86b(0x36c)]();if(!_0x400a20)return{'host':'','port':_0x1e43d9};if(_0x400a20[_0x35d86b(0x1e6)]('[')){const _0x595dd7=_0x400a20['match'](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x595dd7?_0x595dd7[0x1]:_0x400a20[_0x35d86b(0x14e)](/^\[|\]$/g,''),'port':_0x595dd7&&_0x595dd7[0x2]?parseInt(_0x595dd7[0x2]):_0x1e43d9};}const _0x38ceca=_0x400a20['lastIndexOf'](':');if(_0x38ceca>0x0&&/^\d+$/[_0x35d86b(0x1fa)](_0x400a20[_0x35d86b(0x239)](_0x38ceca+0x1)))return{'host':_0x400a20[_0x35d86b(0x239)](0x0,_0x38ceca),'port':parseInt(_0x400a20['slice'](_0x38ceca+0x1))};return{'host':_0x400a20,'port':_0x1e43d9};}function isValidIp(_0x478664){const _0x2903ee=_0x30a059;_0x478664=String(_0x478664||'')[_0x2903ee(0x36c)]();if(!_0x478664)return![];const _0x2c38db=_0x478664[_0x2903ee(0x27b)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x2c38db)return _0x2c38db[_0x2903ee(0x239)](0x1)[_0x2903ee(0x352)](_0x1e1946=>Number(_0x1e1946)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x2903ee(0x1fa)](_0x478664))return![];if((_0x478664[_0x2903ee(0x27b)](/::/g)||[])[_0x2903ee(0xd7)]>0x1)return![];const _0x5a280f=_0x478664[_0x2903ee(0x283)]('::'),_0x527fc8=_0x478664[_0x2903ee(0x14e)](/::/g,':')[_0x2903ee(0x246)](':')[_0x2903ee(0x13e)](Boolean);if(!_0x5a280f&&_0x527fc8[_0x2903ee(0xd7)]!==0x8)return![];if(_0x5a280f&&(_0x527fc8[_0x2903ee(0xd7)]<0x1||_0x527fc8['length']>0x7))return![];return _0x527fc8[_0x2903ee(0x352)](_0x9a31e8=>/^[0-9a-fA-F]{1,4}$/[_0x2903ee(0x1fa)](_0x9a31e8));}function formatIPv6(_0x45317f){const _0x307af5=_0x30a059,_0xab53a7=[];for(let _0x40d487=0x0;_0x40d487<0x10;_0x40d487+=0x2)_0xab53a7[_0x307af5(0x1bf)]((_0x45317f[_0x40d487]<<0x8|_0x45317f[_0x40d487+0x1])['toString'](0x10));let _0x2f6b3e=-0x1,_0x102401=0x0,_0x1464f0=-0x1,_0x1fb062=0x0;for(let _0x466a00=0x0;_0x466a00<0x8;_0x466a00++){if(_0xab53a7[_0x466a00]==='0'){if(_0x1464f0<0x0)_0x1464f0=_0x466a00,_0x1fb062=0x1;else _0x1fb062++;_0x1fb062>_0x102401&&(_0x102401=_0x1fb062,_0x2f6b3e=_0x1464f0);}else _0x1464f0=-0x1,_0x1fb062=0x0;}if(_0x102401>=0x2){const _0x1a1b6c=_0xab53a7[_0x307af5(0x239)](0x0,_0x2f6b3e)[_0x307af5(0x10e)](':'),_0xc0f57c=_0xab53a7[_0x307af5(0x239)](_0x2f6b3e+_0x102401)[_0x307af5(0x10e)](':');return(_0x1a1b6c?_0x1a1b6c+'::':'::')+_0xc0f57c;}return _0xab53a7[_0x307af5(0x10e)](':');}function cidrToRange(_0x51c73){const _0x324c70=_0x30a059,[_0x54ae24,_0x13b760]=_0x51c73['split']('/'),_0x550fed=_0x54ae24[_0x324c70(0x246)]('.')[_0x324c70(0x396)](Number),_0x34e0b5=(_0x550fed[0x0]<<0x18|_0x550fed[0x1]<<0x10|_0x550fed[0x2]<<0x8|_0x550fed[0x3])>>>0x0,_0x1a1405=_0x13b760>=0x20?0x0:0xffffffff<<0x20-_0x13b760>>>0x0,_0x1b7994=(_0x34e0b5&_0x1a1405)>>>0x0,_0x2fb8f9=(_0x34e0b5|~_0x1a1405>>>0x0)>>>0x0;return[_0x1b7994,_0x2fb8f9];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[_0x30a059(0x396)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x330eb3){const _0x5d38eb=_0x30a059;let _0x3e824e=_rangeCache[_0x5d38eb(0x1f4)](_0x330eb3);return!_0x3e824e&&(_0x3e824e=cidrToRange(_0x330eb3),_rangeCache[_0x5d38eb(0xf2)](_0x330eb3,_0x3e824e)),_0x3e824e;}function randomIPFromCidr(_0x193e56){const _0xb4f678=_0x30a059;if(String(_0x193e56)[_0xb4f678(0x12c)](':')>=0x0)return randomIP6FromCidr(_0x193e56);const [_0xb3b407,_0x310b81]=cidrRangeCached(_0x193e56),_0x42e40f=_0xb3b407+Math[_0xb4f678(0x2b5)](Math[_0xb4f678(0x358)]()*(_0x310b81-_0xb3b407>>>0x0));return(_0x42e40f>>>0x18&0xff)+'.'+(_0x42e40f>>>0x10&0xff)+'.'+(_0x42e40f>>>0x8&0xff)+'.'+(_0x42e40f&0xff);}function randomIP6FromCidr(_0x131d6f){const _0x58830b=_0x30a059,[_0x143580,_0x3b2a90]=_0x131d6f[_0x58830b(0x246)]('/'),_0xec3c15=parseInt(_0x3b2a90,0xa)||0x0,_0x419245=_0x333378=>{const _0x195a5e=_0x58830b,_0x1f0808=_0x333378['indexOf']('::');let _0xda7515;if(_0x1f0808>=0x0){const _0x46d55b=_0x333378['slice'](0x0,_0x1f0808)[_0x195a5e(0x246)](':')[_0x195a5e(0x13e)](Boolean),_0xcbf0e7=_0x333378['slice'](_0x1f0808+0x2)['split'](':')[_0x195a5e(0x13e)](Boolean),_0x2fad39=0x8-_0x46d55b['length']-_0xcbf0e7[_0x195a5e(0xd7)];_0xda7515=[..._0x46d55b,...Array(_0x2fad39)['fill']('0'),..._0xcbf0e7];}else _0xda7515=_0x333378[_0x195a5e(0x246)](':');return _0xda7515['map'](_0x2e8bb9=>_0x2e8bb9[_0x195a5e(0x1a3)](0x4,'0'));},_0x3089b3=_0x419245(_0x143580)[_0x58830b(0x396)](_0x39530f=>parseInt(_0x39530f,0x10));let _0x570b7c=0x0;for(let _0x1db329=0x0;_0x1db329<0x8;_0x1db329++)for(let _0x113f10=0xf;_0x113f10>=0x0;_0x113f10--){if(_0x570b7c>=_0xec3c15)_0x3089b3[_0x1db329]|=(Math[_0x58830b(0x358)]()<0.5?0x1:0x0)<<_0x113f10;_0x570b7c++;}return _0x3089b3[_0x58830b(0x396)](_0x21dd0d=>_0x21dd0d[_0x58830b(0x142)](0x10))[_0x58830b(0x10e)](':');}function ipv4ToEmbeddedV6(_0x4f0e5b){const _0x557f75=_0x30a059,_0x3d4e69=String(_0x4f0e5b||'')[_0x557f75(0x246)]('.')[_0x557f75(0x396)](_0x15f8de=>parseInt(_0x15f8de,0xa)[_0x557f75(0x142)](0x10)['padStart'](0x2,'0'));if(_0x3d4e69[_0x557f75(0xd7)]!==0x4||_0x3d4e69['some'](_0x14a80b=>_0x14a80b===_0x557f75(0x10d)))return null;return _0x557f75(0x32b)+_0x3d4e69[0x0]+_0x3d4e69[0x1]+':'+_0x3d4e69[0x2]+_0x3d4e69[0x3];}function randomIPsFromCidrs(_0x2b8d2c,_0xd047a4){const _0x2439dc=_0x30a059,_0x17bb96=new Set(),_0x5e53b0=[];let _0x501a5e=0x0;while(_0x5e53b0[_0x2439dc(0xd7)]<_0xd047a4&&_0x501a5e++<_0xd047a4*0x14){const _0x2b92db=randomIPFromCidr(_0x2b8d2c[Math['floor'](Math[_0x2439dc(0x358)]()*_0x2b8d2c[_0x2439dc(0xd7)])]);!_0x17bb96[_0x2439dc(0x288)](_0x2b92db)&&(_0x17bb96[_0x2439dc(0x383)](_0x2b92db),_0x5e53b0[_0x2439dc(0x1bf)](_0x2b92db));}return _0x5e53b0;}function parseIPList(_0x27a000){const _0x33592b=_0x30a059,_0x2daa97=[],_0x2d0f0f=new Set();return String(_0x27a000||'')['split'](/[\n,;]+/)[_0x33592b(0x396)](_0x3debbe=>_0x3debbe[_0x33592b(0x36c)]())[_0x33592b(0x13e)](Boolean)[_0x33592b(0x388)](_0x4b1e5a=>{const _0x43277b=_0x33592b;let _0x41aca5='';if(_0x4b1e5a[_0x43277b(0x283)]('#')){const [_0x30c4ff,_0x44f2c4]=_0x4b1e5a[_0x43277b(0x246)]('#');_0x4b1e5a=_0x30c4ff,_0x41aca5=_0x44f2c4;}const {host:_0x4f7019,port:_0x292c4a}=parseHostPort(_0x4b1e5a,0x1bb);_0x4f7019&&isValidIp(_0x4f7019)&&!_0x2d0f0f[_0x43277b(0x288)](_0x4f7019)&&(_0x2d0f0f['add'](_0x4f7019),_0x2daa97[_0x43277b(0x1bf)]({'ip':_0x4f7019,'port':_0x292c4a,'name':_0x41aca5}));}),_0x2daa97;}function parseProxyAddress(_0x157fdc){const _0x235fce=_0x30a059;if(!_0x157fdc)return null;let _0x1f3d0c='socks5',_0x5f1c7f=String(_0x157fdc)['trim']();const _0x559ef1=_0x5f1c7f['match'](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x559ef1&&(_0x1f3d0c=_0x559ef1[0x1][_0x235fce(0x3d9)](),_0x5f1c7f=_0x559ef1[0x2]);if(_0x1f3d0c==='ss')return parseSsProxy(_0x5f1c7f);let _0x42deb7='',_0xfed299='';if(_0x5f1c7f[_0x235fce(0x283)]('@')){const [_0x3ef4f6,_0x40bdf6]=_0x5f1c7f['split']('@'),_0x3850e9=_0x7154d8=>{try{return decodeURIComponent(_0x7154d8);}catch(_0x9fc61c){return _0x7154d8;}},_0x2a573f=_0x3ef4f6[_0x235fce(0x12c)](':');if(_0x2a573f>=0x0)_0x42deb7=_0x3850e9(_0x3ef4f6[_0x235fce(0x239)](0x0,_0x2a573f)),_0xfed299=_0x3850e9(_0x3ef4f6[_0x235fce(0x239)](_0x2a573f+0x1));else _0x42deb7=_0x3850e9(_0x3ef4f6);_0x5f1c7f=_0x40bdf6;}const _0x24f79e=_0x1f3d0c==='http'?0x50:_0x1f3d0c===_0x235fce(0x1b4)?0x1bb:0x438,{host:_0x3c8cd9,port:_0x2c6de3}=parseHostPort(_0x5f1c7f,_0x24f79e);return{'type':_0x1f3d0c,'host':_0x3c8cd9,'port':_0x2c6de3,'user':_0x42deb7,'pass':_0xfed299};}function parseSsProxy(_0x2e0e20){const _0x442d17=_0x30a059;let _0x2a7e01=_0x2e0e20,_0x45f4cf='';const _0x14f759=_0x2e0e20['indexOf']('#');if(_0x14f759>=0x0)_0x2a7e01=_0x2e0e20[_0x442d17(0x239)](0x0,_0x14f759);const _0x405794=_0x2a7e01[_0x442d17(0x1ec)]('@');if(_0x405794>=0x0)_0x45f4cf=_0x2a7e01[_0x442d17(0x239)](0x0,_0x405794),_0x2a7e01=_0x2a7e01[_0x442d17(0x239)](_0x405794+0x1);else{const _0x40768d=b64ToUtf8(_0x2a7e01);if(_0x40768d&&_0x40768d['includes']('@')){const _0x444773=_0x40768d[_0x442d17(0x1ec)]('@');_0x45f4cf=_0x40768d[_0x442d17(0x239)](0x0,_0x444773),_0x2a7e01=_0x40768d[_0x442d17(0x239)](_0x444773+0x1);}}let _0x1d6faf='',_0x3a7610='';if(_0x45f4cf){let _0x4aed5d=b64ToUtf8(_0x45f4cf)||_0x45f4cf;try{_0x4aed5d=decodeURIComponent(_0x4aed5d);}catch(_0x28732a){}const _0x183f77=_0x4aed5d[_0x442d17(0x12c)](':');if(_0x183f77>0x0)_0x1d6faf=_0x4aed5d[_0x442d17(0x239)](0x0,_0x183f77),_0x3a7610=_0x4aed5d[_0x442d17(0x239)](_0x183f77+0x1);else _0x1d6faf=_0x4aed5d;}const {host:_0x352e83,port:_0x51e783}=parseHostPort(_0x2a7e01,0x20c4);return{'type':'ss','host':_0x352e83,'port':_0x51e783,'method':_0x1d6faf,'password':_0x3a7610};}function b64ToUtf8(_0x3e9707){const _0x593ca3=_0x30a059;try{const _0x4e7ff5=atob(String(_0x3e9707)['replace'](/-/g,'+')[_0x593ca3(0x14e)](/_/g,'/')),_0x397ddb=new Uint8Array(_0x4e7ff5[_0x593ca3(0xd7)]);for(let _0x5a69ed=0x0;_0x5a69ed<_0x4e7ff5[_0x593ca3(0xd7)];_0x5a69ed++)_0x397ddb[_0x5a69ed]=_0x4e7ff5[_0x593ca3(0x9b)](_0x5a69ed);return new TextDecoder(_0x593ca3(0x1d9))[_0x593ca3(0x3d6)](_0x397ddb);}catch(_0x33239f){return null;}}function json(_0x4a89c5,_0x277a9c){const _0x5b9ea8=_0x30a059;return new Response(JSON[_0x5b9ea8(0x363)](_0x4a89c5),{'status':_0x277a9c||0xc8,'headers':{'Content-Type':_0x5b9ea8(0x398)}});}async function kvGetConfigCached(_0x1ea7ca){const _0x49b1c7=_0x30a059;try{return await _0x1ea7ca['K'][_0x49b1c7(0x1f4)](_0x49b1c7(0x3b7),{'cacheTtl':0x1e});}catch(_0x1c1d50){return null;}}function invalidateConfigCache(){}async function loadConfig(_0x128520){const _0x5390c6=_0x30a059,_0x1ce2a2=JSON[_0x5390c6(0xd1)](JSON[_0x5390c6(0x363)](DEFAULT_CONFIG));let _0x36a465=![];if(_0x128520['U'])_0x1ce2a2[_0x5390c6(0x325)]=String(_0x128520['U'])[_0x5390c6(0x3d9)]();if(_0x128520['D']||_0x128520[_0x5390c6(0xf9)])_0x1ce2a2[_0x5390c6(0x149)]=String(_0x128520['D']||_0x128520[_0x5390c6(0xf9)]);if(_0x128520[_0x5390c6(0x389)]||_0x128520[_0x5390c6(0x3e2)])_0x1ce2a2[_0x5390c6(0x3e2)]=String(_0x128520[_0x5390c6(0x389)]||_0x128520[_0x5390c6(0x3e2)]);if(_0x128520['HOST'])_0x1ce2a2[_0x5390c6(0x37d)]=String(_0x128520[_0x5390c6(0x95)])[_0x5390c6(0x14e)](/^https?:\/\//,'')['split']('/')[0x0];if(_0x128520['PROXYIP'])_0x1ce2a2[_0x5390c6(0x23f)]=String(_0x128520[_0x5390c6(0x3df)]);if(_0x128520['S']||_0x128520[_0x5390c6(0x2aa)])_0x1ce2a2['outboundProxy']=String(_0x128520['S']||_0x128520[_0x5390c6(0x2aa)]);if(_0x128520['ECH']===_0x5390c6(0x376)||_0x128520[_0x5390c6(0x1f5)]==='1')_0x1ce2a2[_0x5390c6(0x345)]=!![];if(_0x128520['TROJAN']===_0x5390c6(0x376)||_0x128520['TROJAN']==='1')_0x1ce2a2[_0x5390c6(0x22c)]=!![];if(_0x128520['TROJAN_PASSWORD'])_0x1ce2a2[_0x5390c6(0x12b)]=String(_0x128520[_0x5390c6(0x30c)]);if(_0x128520[_0x5390c6(0x3c9)])_0x1ce2a2[_0x5390c6(0xa7)]=String(_0x128520[_0x5390c6(0x3c9)]);if(_0x128520['YX'])_0x1ce2a2[_0x5390c6(0x256)]=parseIPList(_0x128520['YX']);if(_0x128520[_0x5390c6(0x2b0)])_0x1ce2a2[_0x5390c6(0x2a5)][_0x5390c6(0x18b)]=String(_0x128520[_0x5390c6(0x2b0)]);if(_0x128520[_0x5390c6(0xec)]==='1'||_0x128520[_0x5390c6(0xec)]==='true')_0x1ce2a2[_0x5390c6(0x258)]=!![];if(_0x128520[_0x5390c6(0xec)]==='0'||_0x128520[_0x5390c6(0xec)]===_0x5390c6(0x31a))_0x1ce2a2[_0x5390c6(0x258)]=![];if(_0x128520['K']&&typeof _0x128520['K'][_0x5390c6(0x1f4)]===_0x5390c6(0x3f8))try{const _0x534e07=await kvGetConfigCached(_0x128520);if(_0x534e07){const _0x28fe71=JSON['parse'](_0x534e07);if(_0x28fe71[_0x5390c6(0x22a)]!==undefined)_0x36a465=!![];Object[_0x5390c6(0x300)](_0x1ce2a2,_0x28fe71);if(_0x28fe71['optimizer'])_0x1ce2a2[_0x5390c6(0x2a5)]=Object[_0x5390c6(0x300)](JSON[_0x5390c6(0xd1)](JSON['stringify'](DEFAULT_CONFIG[_0x5390c6(0x2a5)])),_0x28fe71['optimizer']);if(_0x28fe71['preferredIPs']&&Array[_0x5390c6(0x226)](_0x28fe71[_0x5390c6(0x256)]))_0x1ce2a2[_0x5390c6(0x256)]=_0x28fe71['preferredIPs'];if(_0x28fe71[_0x5390c6(0x3e2)])_0x1ce2a2['admin']=String(_0x28fe71['admin']);if(_0x28fe71['uuid'])_0x1ce2a2[_0x5390c6(0x325)]=String(_0x28fe71[_0x5390c6(0x325)])[_0x5390c6(0x3d9)]();}}catch(_0x352cac){}delete _0x1ce2a2['fragment'],delete _0x1ce2a2[_0x5390c6(0x3b1)],setProbeAlive(!!_0x1ce2a2['probeAlive']),_0x1ce2a2[_0x5390c6(0x325)]=String(_0x1ce2a2[_0x5390c6(0x325)]||'')[_0x5390c6(0x3d9)]();if(!isUUID(_0x1ce2a2['uuid']))_0x1ce2a2[_0x5390c6(0x325)]=uuidv4();if(!_0x1ce2a2[_0x5390c6(0x149)]||_0x1ce2a2[_0x5390c6(0x149)]==='/'||_0x1ce2a2[_0x5390c6(0x149)]==='')_0x1ce2a2[_0x5390c6(0x149)]=_0x1ce2a2[_0x5390c6(0x325)];if(!Array[_0x5390c6(0x226)](_0x1ce2a2[_0x5390c6(0x256)]))_0x1ce2a2[_0x5390c6(0x256)]=parseIPList(_0x1ce2a2[_0x5390c6(0x256)]);if(!_0x36a465){const _0x115358=Boolean(_0x1ce2a2[_0x5390c6(0x221)]&&_0x1ce2a2[_0x5390c6(0x3a0)]||_0x128520['CF_ACCOUNT_ID']&&_0x128520[_0x5390c6(0x249)]);if(_0x115358)_0x1ce2a2[_0x5390c6(0x22a)]=!![];}return _0x1ce2a2;}async function saveConfig(_0xc233b3,_0x10489a){const _0x375dd2=_0x30a059;if(!_0xc233b3['K']||typeof _0xc233b3['K'][_0x375dd2(0x23d)]!==_0x375dd2(0x3f8))return![];const _0x15d4f0=JSON[_0x375dd2(0xd1)](JSON[_0x375dd2(0x363)](_0x10489a));if(_0x15d4f0[_0x375dd2(0x3e2)])_0x15d4f0[_0x375dd2(0x3e2)]=String(_0x15d4f0[_0x375dd2(0x3e2)]);return await _0xc233b3['K']['put'](_0x375dd2(0x3b7),JSON['stringify'](_0x15d4f0)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x46426f,_0x3e3ba0){const _0x1b16e3=_0x30a059,_0x144cfb=String(_0x46426f[_0x1b16e3(0xc6)]||_0x3e3ba0&&_0x3e3ba0['cfAccountId']||'')[_0x1b16e3(0x36c)](),_0x567217=String(_0x46426f[_0x1b16e3(0x249)]||_0x3e3ba0&&_0x3e3ba0[_0x1b16e3(0x3a0)]||'')[_0x1b16e3(0x36c)]();if(!_0x144cfb||!_0x567217)return{'configured':![]};const _0x46d04b=Date[_0x1b16e3(0x24d)]();if(_0x46d04b<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE[_0x1b16e3(0x2a3)])return Object[_0x1b16e3(0x300)]({},QUOTA_CACHE[_0x1b16e3(0x2a3)],{'stale':!![],'error':_0x1b16e3(0x2d2)});return{'configured':!![],'error':_0x1b16e3(0x1eb)};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x46d04b-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE['data'];try{const _0x3ea85c=new Date();_0x3ea85c['setUTCHours'](0x0,0x0,0x0,0x0);const _0x59157e=new Date(),_0x1bb2a6={'query':'query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','variables':{'accountId':_0x144cfb,'filter':{'datetime_geq':_0x3ea85c[_0x1b16e3(0xc9)](),'datetime_leq':_0x59157e[_0x1b16e3(0xc9)]()}}},_0x2bdd29=await fetch(_0x1b16e3(0x315),{'method':'POST','headers':{'Content-Type':_0x1b16e3(0x1f3),'Authorization':'Bearer\x20'+_0x567217},'body':JSON['stringify'](_0x1bb2a6)});if(!_0x2bdd29['ok'])throw new Error('CF\x20API\x20HTTP\x20'+_0x2bdd29[_0x1b16e3(0x195)]);const _0x5684b6=await _0x2bdd29['json']();if(_0x5684b6[_0x1b16e3(0x162)]&&_0x5684b6[_0x1b16e3(0x162)][_0x1b16e3(0xd7)])throw new Error(_0x1b16e3(0x11e)+JSON['stringify'](_0x5684b6['errors'])[_0x1b16e3(0x239)](0x0,0xc8));const _0x5cd95b=_0x5684b6&&_0x5684b6[_0x1b16e3(0x2a3)]&&_0x5684b6[_0x1b16e3(0x2a3)][_0x1b16e3(0x2e9)]&&_0x5684b6[_0x1b16e3(0x2a3)][_0x1b16e3(0x2e9)]['accounts']||[];if(!_0x5cd95b[_0x1b16e3(0xd7)])throw new Error(_0x1b16e3(0x36b));const _0x21e7ea=_0x5cd95b[0x0],_0x40b78d=(_0x21e7ea[_0x1b16e3(0x19d)]||[])[0x0]||{},_0x336b6b=(_0x21e7ea[_0x1b16e3(0x361)]||[])['reduce']((_0x38b5a3,_0x15424c)=>_0x38b5a3+(_0x15424c&&_0x15424c[_0x1b16e3(0x316)]&&_0x15424c['sum'][_0x1b16e3(0x1fe)]||0x0),0x0),_0x593112=(_0x40b78d[_0x1b16e3(0x316)]&&_0x40b78d[_0x1b16e3(0x316)]['requests']||0x0)+_0x336b6b,_0x230886=_0x40b78d[_0x1b16e3(0x19f)]&&_0x40b78d['quantiles']['cpuTimeP50']||0x0,_0x4d623d=_0x40b78d[_0x1b16e3(0x316)]&&_0x40b78d[_0x1b16e3(0x316)][_0x1b16e3(0x2d4)]||0x0,_0x3b2e8a=QUOTA_LIMIT>0x0?Math[_0x1b16e3(0x2fe)](_0x593112/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x402a38={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x593112,'cpuTime':_0x230886,'subrequests':_0x4d623d},'percent':_0x3b2e8a,'remaining':Math[_0x1b16e3(0xae)](0x0,QUOTA_LIMIT-_0x593112),'updatedAt':_0x59157e[_0x1b16e3(0xc9)]()};return QUOTA_CACHE={'at':_0x46d04b,'data':_0x402a38},_0x402a38;}catch(_0x5b7548){const _0x2d6fb2=_0x5b7548&&_0x5b7548[_0x1b16e3(0x384)]||String(_0x5b7548);if(_0x2d6fb2['indexOf'](_0x1b16e3(0x3ab))>=0x0){QUOTA_BACKOFF=_0x46d04b+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE['data'])return Object[_0x1b16e3(0x300)]({},QUOTA_CACHE[_0x1b16e3(0x2a3)],{'stale':!![],'error':_0x1b16e3(0x2d2)});return{'configured':!![],'error':_0x1b16e3(0x1eb)};}return{'configured':!![],'error':_0x2d6fb2};}}function readAddress(_0x46a017,_0x1b5f24,_0x52f0c1,_0x2bb0c3){const _0x442f88=_0x30a059;if(_0x2bb0c3===0x1)return{'addr':_0x1b5f24[_0x442f88(0x3bf)](_0x52f0c1)+'.'+_0x1b5f24['getUint8'](_0x52f0c1+0x1)+'.'+_0x1b5f24['getUint8'](_0x52f0c1+0x2)+'.'+_0x1b5f24[_0x442f88(0x3bf)](_0x52f0c1+0x3),'len':0x4};if(_0x2bb0c3===0x2){const _0x5d875d=_0x1b5f24[_0x442f88(0x3bf)](_0x52f0c1),_0x567b93=_0x46a017[_0x442f88(0x1af)](_0x52f0c1+0x1,_0x52f0c1+0x1+_0x5d875d);return{'addr':TD['decode'](_0x567b93),'len':0x1+_0x5d875d};}if(_0x2bb0c3===0x3){const _0x39a956=_0x46a017[_0x442f88(0x1af)](_0x52f0c1,_0x52f0c1+0x10);return{'addr':formatIPv6(_0x39a956),'len':0x10};}throw new Error(_0x442f88(0x355));}function parseVlessHeader(_0x508bf0){const _0x43ba97=_0x30a059;if(!_0x508bf0||_0x508bf0[_0x43ba97(0x129)]<0x1)throw new Error(_0x43ba97(0x302));const _0x15fbf4=new DataView(_0x508bf0[_0x43ba97(0x13d)],_0x508bf0[_0x43ba97(0x348)],_0x508bf0[_0x43ba97(0x129)]);let _0x52bc7d=0x0;if(_0x15fbf4[_0x43ba97(0x3bf)](0x0)!==0x0)throw new Error('不支持的\x20VLESS\x20版本');_0x52bc7d+=0x1+0x10;if(_0x52bc7d>=_0x508bf0[_0x43ba97(0x129)])throw new Error(_0x43ba97(0x302));const _0x34fa78=_0x15fbf4[_0x43ba97(0x3bf)](_0x52bc7d);_0x52bc7d+=0x1,_0x52bc7d+=_0x34fa78;if(_0x52bc7d+0x3>_0x508bf0[_0x43ba97(0x129)])throw new Error(_0x43ba97(0x302));const _0x319202=_0x15fbf4['getUint8'](_0x52bc7d);_0x52bc7d+=0x1;const _0x2078ea=_0x15fbf4[_0x43ba97(0x14c)](_0x52bc7d);_0x52bc7d+=0x2;const _0x4f8f88=_0x15fbf4[_0x43ba97(0x3bf)](_0x52bc7d);_0x52bc7d+=0x1;const {addr:_0x56ceef,len:_0x16b0bd}=readAddress(_0x508bf0,_0x15fbf4,_0x52bc7d,_0x4f8f88);return _0x52bc7d+=_0x16b0bd,{'command':_0x319202,'port':_0x2078ea,'addr':_0x56ceef,'headerLength':_0x52bc7d,'earlyData':_0x508bf0[_0x43ba97(0x1af)](_0x52bc7d)};}function parseTrojanHeader(_0x53b284){const _0x1ce0a6=_0x30a059;if(!_0x53b284||_0x53b284[_0x1ce0a6(0x129)]<0x3a+0x8)throw new Error(_0x1ce0a6(0x2ef));const _0xbc8cef=new DataView(_0x53b284[_0x1ce0a6(0x13d)],_0x53b284[_0x1ce0a6(0x348)],_0x53b284['byteLength']);let _0x5f49c8=0x3a;const _0x58d0f5=_0xbc8cef[_0x1ce0a6(0x3bf)](_0x5f49c8);_0x5f49c8+=0x1;const _0x228a7c=_0xbc8cef['getUint8'](_0x5f49c8);_0x5f49c8+=0x1;let _0x4cd695,_0x2c46f0;if(_0x228a7c===0x1)_0x4cd695=_0xbc8cef[_0x1ce0a6(0x3bf)](_0x5f49c8)+'.'+_0xbc8cef[_0x1ce0a6(0x3bf)](_0x5f49c8+0x1)+'.'+_0xbc8cef['getUint8'](_0x5f49c8+0x2)+'.'+_0xbc8cef['getUint8'](_0x5f49c8+0x3),_0x2c46f0=0x4;else{if(_0x228a7c===0x3){const _0x3ba4ad=_0xbc8cef[_0x1ce0a6(0x3bf)](_0x5f49c8);_0x4cd695=TD[_0x1ce0a6(0x3d6)](_0x53b284['subarray'](_0x5f49c8+0x1,_0x5f49c8+0x1+_0x3ba4ad)),_0x2c46f0=0x1+_0x3ba4ad;}else{if(_0x228a7c===0x4)_0x4cd695=formatIPv6(_0x53b284[_0x1ce0a6(0x1af)](_0x5f49c8,_0x5f49c8+0x10)),_0x2c46f0=0x10;else throw new Error('无法识别的地址类型');}}_0x5f49c8+=_0x2c46f0;const _0x17c09c=_0xbc8cef[_0x1ce0a6(0x14c)](_0x5f49c8);return _0x5f49c8+=0x2,_0x5f49c8+=0x2,{'command':_0x58d0f5,'port':_0x17c09c,'addr':_0x4cd695,'password':TD['decode'](_0x53b284[_0x1ce0a6(0x1af)](0x0,0x38)),'headerLength':_0x5f49c8};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x36e7f8){const _0x3a3298=_0x30a059,_0xc3397=TE[_0x3a3298(0xbf)](String(_0x36e7f8)),_0x1326ce=_0xc3397[_0x3a3298(0xd7)]*0x8,_0x588979=(_0xc3397[_0x3a3298(0xd7)]+0x8>>0x6)+0x1<<0x6,_0x3be906=new Uint8Array(_0x588979);_0x3be906[_0x3a3298(0xf2)](_0xc3397),_0x3be906[_0xc3397[_0x3a3298(0xd7)]]=0x80;const _0x407ffa=new DataView(_0x3be906[_0x3a3298(0x13d)]);_0x407ffa[_0x3a3298(0x28a)](_0x588979-0x8,Math['floor'](_0x1326ce/0x100000000),![]),_0x407ffa[_0x3a3298(0x28a)](_0x588979-0x4,_0x1326ce>>>0x0,![]);let _0x250df3=0xc1059ed8,_0x4b8630=0x367cd507,_0x3c9fb7=0x3070dd17,_0x322d86=0xf70e5939,_0x50ac25=0xffc00b31,_0x570a9c=0x68581511,_0x487227=0x64f98fa7,_0x56a184=0xbefa4fa4;const _0x5583c1=(_0xd9cb99,_0x256bd6)=>_0xd9cb99>>>_0x256bd6|_0xd9cb99<<0x20-_0x256bd6;for(let _0x240820=0x0;_0x240820<_0x588979;_0x240820+=0x40){const _0x4f4a54=new Uint32Array(0x40);for(let _0x4d2dcd=0x0;_0x4d2dcd<0x10;_0x4d2dcd++)_0x4f4a54[_0x4d2dcd]=_0x407ffa[_0x3a3298(0x19b)](_0x240820+_0x4d2dcd*0x4,![]);for(let _0x3bbcd0=0x10;_0x3bbcd0<0x40;_0x3bbcd0++){const _0x43bc36=_0x5583c1(_0x4f4a54[_0x3bbcd0-0xf],0x7)^_0x5583c1(_0x4f4a54[_0x3bbcd0-0xf],0x12)^_0x4f4a54[_0x3bbcd0-0xf]>>>0x3,_0x2b950c=_0x5583c1(_0x4f4a54[_0x3bbcd0-0x2],0x11)^_0x5583c1(_0x4f4a54[_0x3bbcd0-0x2],0x13)^_0x4f4a54[_0x3bbcd0-0x2]>>>0xa;_0x4f4a54[_0x3bbcd0]=_0x4f4a54[_0x3bbcd0-0x10]+_0x43bc36+_0x4f4a54[_0x3bbcd0-0x7]+_0x2b950c>>>0x0;}let _0x411b75=_0x250df3,_0x264057=_0x4b8630,_0x21fd3a=_0x3c9fb7,_0x311639=_0x322d86,_0x58d5f2=_0x50ac25,_0x2826e7=_0x570a9c,_0x44fc53=_0x487227,_0x50bcc2=_0x56a184;for(let _0x5b56df=0x0;_0x5b56df<0x40;_0x5b56df++){const _0x333976=_0x5583c1(_0x58d5f2,0x6)^_0x5583c1(_0x58d5f2,0xb)^_0x5583c1(_0x58d5f2,0x19),_0x5c8504=_0x58d5f2&_0x2826e7^~_0x58d5f2&_0x44fc53,_0x325f86=_0x50bcc2+_0x333976+_0x5c8504+SHA256_K[_0x5b56df]+_0x4f4a54[_0x5b56df]>>>0x0,_0x4ba949=_0x5583c1(_0x411b75,0x2)^_0x5583c1(_0x411b75,0xd)^_0x5583c1(_0x411b75,0x16),_0x518ab6=_0x411b75&_0x264057^_0x411b75&_0x21fd3a^_0x264057&_0x21fd3a,_0x3506bf=_0x4ba949+_0x518ab6>>>0x0;_0x50bcc2=_0x44fc53,_0x44fc53=_0x2826e7,_0x2826e7=_0x58d5f2,_0x58d5f2=_0x311639+_0x325f86>>>0x0,_0x311639=_0x21fd3a,_0x21fd3a=_0x264057,_0x264057=_0x411b75,_0x411b75=_0x325f86+_0x3506bf>>>0x0;}_0x250df3=_0x250df3+_0x411b75>>>0x0,_0x4b8630=_0x4b8630+_0x264057>>>0x0,_0x3c9fb7=_0x3c9fb7+_0x21fd3a>>>0x0,_0x322d86=_0x322d86+_0x311639>>>0x0,_0x50ac25=_0x50ac25+_0x58d5f2>>>0x0,_0x570a9c=_0x570a9c+_0x2826e7>>>0x0,_0x487227=_0x487227+_0x44fc53>>>0x0,_0x56a184=_0x56a184+_0x50bcc2>>>0x0;}let _0xe79358='';for(const _0x348c69 of[_0x250df3,_0x4b8630,_0x3c9fb7,_0x322d86,_0x50ac25,_0x570a9c,_0x487227]){_0xe79358+=(_0x348c69>>>0x18&0xff)['toString'](0x10)[_0x3a3298(0x1a3)](0x2,'0'),_0xe79358+=(_0x348c69>>>0x10&0xff)[_0x3a3298(0x142)](0x10)[_0x3a3298(0x1a3)](0x2,'0'),_0xe79358+=(_0x348c69>>>0x8&0xff)[_0x3a3298(0x142)](0x10)[_0x3a3298(0x1a3)](0x2,'0'),_0xe79358+=(_0x348c69&0xff)[_0x3a3298(0x142)](0x10)[_0x3a3298(0x1a3)](0x2,'0');}return _0xe79358;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x3c5cbe){return _0x3c5cbe!==_trojanPassC&&(_trojanPassC=_0x3c5cbe,_trojanHashC=sha224hex(_0x3c5cbe)),_trojanHashC;}function detectTrojan(_0x5e9431,_0x10650e){const _0x397c44=_0x30a059;if(!_0x10650e['enableTrojan']||!_0x5e9431||_0x5e9431['byteLength']<0x3a)return![];const _0x51c5b1=_0x5e9431[_0x397c44(0x1af)](0x0,0x38);if(TD[_0x397c44(0x3d6)](_0x51c5b1)[_0x397c44(0x3d9)]()===trojanPasswordHash(_0x10650e['trojanPassword']||_0x10650e['uuid']))return!![];if(_0x5e9431[0x38]===0xd&&_0x5e9431[0x39]===0xa){for(let _0x591b37=0x0;_0x591b37<0x38;_0x591b37++){const _0x1b0744=_0x51c5b1[_0x591b37];if(!(_0x1b0744>=0x30&&_0x1b0744<=0x39||_0x1b0744>=0x61&&_0x1b0744<=0x66||_0x1b0744>=0x41&&_0x1b0744<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=['https://doh.pub/dns-query','https://dns.alidns.com/resolve','https://1.1.1.1/dns-query',_0x30a059(0x2b2),'https://dns.google/dns-query','https://cloudflare-dns.com/dns-query'];function ipv6ToBytes(_0x15f143){const _0x176ca3=_0x30a059,_0x4b552b=String(_0x15f143)['split']('::'),_0x1b2a95=_0x4b552b[0x0]?_0x4b552b[0x0][_0x176ca3(0x246)](':')[_0x176ca3(0x13e)](Boolean):[],_0x5d6d06=_0x4b552b[0x1]?_0x4b552b[0x1]['split'](':')[_0x176ca3(0x13e)](Boolean):[],_0x327ff4=[..._0x1b2a95,...Array(Math[_0x176ca3(0xae)](0x0,0x8-_0x1b2a95[_0x176ca3(0xd7)]-_0x5d6d06['length']))[_0x176ca3(0x24e)]('0'),..._0x5d6d06],_0x4769f6=new Uint8Array(0x10);return _0x327ff4[_0x176ca3(0x388)]((_0x1b1f1f,_0x4339d2)=>{const _0x3a7918=parseInt(_0x1b1f1f,0x10)||0x0;_0x4769f6[_0x4339d2*0x2]=_0x3a7918>>0x8&0xff,_0x4769f6[_0x4339d2*0x2+0x1]=_0x3a7918&0xff;}),_0x4769f6;}async function dnsToDoH(_0x3af1d9){const _0x29a8b7=_0x30a059;if(!_0x3af1d9||_0x3af1d9['byteLength']<0x11)return null;const _0x1e9048=new DataView(_0x3af1d9[_0x29a8b7(0x13d)],_0x3af1d9['byteOffset'],_0x3af1d9[_0x29a8b7(0x129)]),_0x5674a5=_0x1e9048[_0x29a8b7(0x14c)](0x0);if(_0x1e9048[_0x29a8b7(0x14c)](0x2)&0x8000)return null;if(_0x1e9048[_0x29a8b7(0x14c)](0x4)!==0x1)return null;let _0x1ac76b=0xc,_0x5e77d5=[];while(_0x1ac76b<_0x3af1d9['byteLength']){const _0x5f4d55=_0x1e9048[_0x29a8b7(0x3bf)](_0x1ac76b);if(_0x5f4d55===0x0){_0x1ac76b++;break;}if((_0x5f4d55&0xc0)===0xc0){_0x1ac76b+=0x2;break;}if(_0x1ac76b+0x1+_0x5f4d55>_0x3af1d9['byteLength'])return null;_0x5e77d5[_0x29a8b7(0x1bf)](TD[_0x29a8b7(0x3d6)](_0x3af1d9[_0x29a8b7(0x1af)](_0x1ac76b+0x1,_0x1ac76b+0x1+_0x5f4d55))),_0x1ac76b+=0x1+_0x5f4d55;}if(_0x1ac76b+0x4>_0x3af1d9['byteLength']||_0x5e77d5[_0x29a8b7(0xd7)]===0x0)return null;const _0x14790a=_0x1e9048[_0x29a8b7(0x14c)](_0x1ac76b),_0x2af377=_0x1e9048[_0x29a8b7(0x14c)](_0x1ac76b+0x2),_0x44f482=_0x1ac76b+0x4;if(_0x14790a!==0x1&&_0x14790a!==0x1c)return null;const _0x22b67c=_0x5e77d5['join']('.'),_0x4de642=_0x3af1d9[_0x29a8b7(0x1af)](0xc,_0x44f482);let _0x508cc1=null;for(const _0x3d13d8 of DOH_ENDPOINTS){try{const _0x401207=await fetchTimeout(_0x3d13d8+_0x29a8b7(0x397)+encodeURIComponent(_0x22b67c)+_0x29a8b7(0x369)+_0x14790a,{'headers':{'accept':_0x29a8b7(0x1c6)}},0x1388);if(!_0x401207||!_0x401207['ok'])continue;const _0x4bbd43=await _0x401207[_0x29a8b7(0xe9)]();if(!_0x4bbd43||_0x4bbd43[_0x29a8b7(0x28d)]!==0x0)continue;const _0x39c6df=(_0x4bbd43[_0x29a8b7(0x2c7)]||[])[_0x29a8b7(0x13e)](_0x1a588f=>_0x1a588f[_0x29a8b7(0x338)]===_0x14790a&&(_0x1a588f[_0x29a8b7(0x338)]===0x1?isValidIp(String(_0x1a588f[_0x29a8b7(0x2a3)])):/^[0-9a-fA-F:]+$/[_0x29a8b7(0x1fa)](String(_0x1a588f['data']))));if(_0x39c6df[_0x29a8b7(0xd7)]){_0x508cc1=_0x39c6df;break;}}catch(_0x3a8363){}}if(!_0x508cc1)return null;const _0x1f2004=new Uint8Array(0xc),_0x39b4f4=new DataView(_0x1f2004[_0x29a8b7(0x13d)]);_0x39b4f4[_0x29a8b7(0x2f1)](0x0,_0x5674a5),_0x39b4f4[_0x29a8b7(0x2f1)](0x2,0x8180),_0x39b4f4[_0x29a8b7(0x2f1)](0x4,0x1),_0x39b4f4['setUint16'](0x6,_0x508cc1['length']);const _0x2c1dba=[_0x1f2004,_0x4de642];for(const _0x103787 of _0x508cc1){const _0x4d0b26=String(_0x103787[_0x29a8b7(0x2a3)]),_0x4e9442=_0x103787[_0x29a8b7(0x338)]===0x1?Uint8Array[_0x29a8b7(0x1ed)](_0x4d0b26[_0x29a8b7(0x246)]('.')['map'](Number)):ipv6ToBytes(_0x4d0b26);if(_0x4e9442[_0x29a8b7(0xd7)]!==(_0x103787[_0x29a8b7(0x338)]===0x1?0x4:0x10))continue;const _0xdf0b1a=new Uint8Array(0xa),_0x19a628=new DataView(_0xdf0b1a[_0x29a8b7(0x13d)]);_0x19a628[_0x29a8b7(0x2f1)](0x0,0xc00c),_0x19a628[_0x29a8b7(0x2f1)](0x2,_0x103787[_0x29a8b7(0x338)]),_0x19a628[_0x29a8b7(0x2f1)](0x4,_0x2af377===0x0?0x1:_0x2af377),_0x19a628[_0x29a8b7(0x28a)](0x6,Number(_0x103787[_0x29a8b7(0x191)])||0x12c),_0x2c1dba['push'](_0xdf0b1a,new Uint8Array([_0x4e9442[_0x29a8b7(0xd7)]>>0x8&0xff,_0x4e9442['length']&0xff]),_0x4e9442);}let _0x5cd31d=0x0;_0x2c1dba['forEach'](_0x50fec9=>_0x5cd31d+=_0x50fec9[_0x29a8b7(0x129)]);const _0x10214b=new Uint8Array(_0x5cd31d);let _0x1eb8e6=0x0;for(const _0xc01ec0 of _0x2c1dba){_0x10214b[_0x29a8b7(0xf2)](_0xc01ec0,_0x1eb8e6),_0x1eb8e6+=_0xc01ec0[_0x29a8b7(0x129)];}return _0x10214b;}function withTimeout(_0x5cf857,_0x3ffd3e,_0xa6ba77){const _0x162f80=_0x30a059;return Promise[_0x162f80(0x3c4)]([_0x5cf857,new Promise((_0x5e11a8,_0x2d0444)=>setTimeout(()=>_0x2d0444(new Error(_0xa6ba77||_0x162f80(0x24a))),_0x3ffd3e||0x1770))]);}async function connectWithTimeout(_0x3ba7ee,_0x536b61,_0x2e1bfb){const _0x3355be=_0x30a059,_0x16b0b2=connect({'hostname':_0x3ba7ee,'port':_0x536b61});try{await withTimeout(_0x16b0b2['opened'],_0x2e1bfb||0x1770,_0x3355be(0x32d));}catch(_0x2418e8){try{_0x16b0b2['close']();}catch(_0x37a276){}throw _0x2418e8;}return _0x16b0b2;}async function connectDirect(_0x172ecf,_0x4f4c09){const _0x59a594=_0x30a059;return connectWithTimeout(_0x172ecf[_0x59a594(0x276)],_0x172ecf['port'],_0x4f4c09||0x1770);}async function connectViaSocks5(_0x20bbb9,_0x24255f){const _0x58b5f4=_0x30a059,_0x2ff507=await connectWithTimeout(_0x20bbb9[_0x58b5f4(0x37d)],_0x20bbb9[_0x58b5f4(0x296)],0x1770),_0x1c78ed=_0x2ff507['writable']['getWriter'](),_0x3a9ba2=_0x2ff507[_0x58b5f4(0x1e9)][_0x58b5f4(0xc5)]();let _0x2bb852=new Uint8Array(0x0);const _0x19230a=async _0x1e0067=>{const _0x49b3b3=_0x58b5f4;while(_0x2bb852[_0x49b3b3(0xd7)]<_0x1e0067){const {done:_0x2eb4bb,value:_0x508900}=await _0x3a9ba2[_0x49b3b3(0x38b)]();if(_0x2eb4bb)throw new Error(_0x49b3b3(0x14f));_0x2bb852=concatBytes(_0x2bb852,_0x508900);}const _0x53a83c=_0x2bb852[_0x49b3b3(0x239)](0x0,_0x1e0067);return _0x2bb852=_0x2bb852[_0x49b3b3(0x1af)](_0x1e0067),_0x53a83c;},_0x53faf0=_0x20bbb9['user']?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x1c78ed[_0x58b5f4(0x29d)](new Uint8Array(_0x53faf0));const _0x3d4d5e=await _0x19230a(0x2);if(_0x3d4d5e[0x0]!==0x5||_0x3d4d5e[0x1]===0xff)throw new Error(_0x58b5f4(0x200));if(_0x3d4d5e[0x1]===0x2){if(!_0x20bbb9[_0x58b5f4(0x18c)])throw new Error(_0x58b5f4(0x247));const _0xe18e3=TE['encode'](_0x20bbb9[_0x58b5f4(0x18c)]),_0x1ca51a=TE[_0x58b5f4(0xbf)](_0x20bbb9[_0x58b5f4(0x1b7)]),_0x10d497=new Uint8Array([0x1,_0xe18e3[_0x58b5f4(0xd7)],..._0xe18e3,_0x1ca51a[_0x58b5f4(0xd7)],..._0x1ca51a]);await _0x1c78ed['write'](_0x10d497);const _0x2a03f6=await _0x19230a(0x2);if(_0x2a03f6[0x1]!==0x0)throw new Error(_0x58b5f4(0x3a4));}else{if(_0x3d4d5e[0x1]!==0x0)throw new Error(_0x58b5f4(0x319)+_0x3d4d5e[0x1]);}const _0x2dff40=TE[_0x58b5f4(0xbf)](_0x24255f['hostname']);let _0xe6859b;/^\d+\.\d+\.\d+\.\d+$/[_0x58b5f4(0x1fa)](_0x24255f[_0x58b5f4(0x276)])?_0xe6859b=new Uint8Array([0x5,0x1,0x0,0x1,..._0x24255f['hostname'][_0x58b5f4(0x246)]('.')[_0x58b5f4(0x396)](Number),_0x24255f['port']>>0x8&0xff,_0x24255f[_0x58b5f4(0x296)]&0xff]):_0xe6859b=new Uint8Array([0x5,0x1,0x0,0x3,_0x2dff40[_0x58b5f4(0xd7)],..._0x2dff40,_0x24255f[_0x58b5f4(0x296)]>>0x8&0xff,_0x24255f[_0x58b5f4(0x296)]&0xff]);await _0x1c78ed['write'](_0xe6859b);const _0x2270c9=await _0x19230a(0x4);if(_0x2270c9[0x1]!==0x0)throw new Error(_0x58b5f4(0x329)+_0x2270c9[0x1]);if(_0x2270c9[0x3]===0x1)await _0x19230a(0x6);else{if(_0x2270c9[0x3]===0x3){const _0x2a7202=(await _0x19230a(0x1))[0x0];await _0x19230a(_0x2a7202+0x2);}else{if(_0x2270c9[0x3]===0x4)await _0x19230a(0x12);}}if(_0x2bb852[_0x58b5f4(0x129)]>0x0)_0x2ff507[_0x58b5f4(0x399)]=_0x2bb852;return _0x1c78ed[_0x58b5f4(0x1c7)](),_0x3a9ba2[_0x58b5f4(0x1c7)](),_0x2ff507;}async function connectViaHttpProxy(_0x2e3e0b,_0xc7f975){const _0x54f711=_0x30a059,_0x2fd034=await connectWithTimeout(_0x2e3e0b[_0x54f711(0x37d)],_0x2e3e0b[_0x54f711(0x296)],0x1770),_0x1c2153=_0x2fd034['writable'][_0x54f711(0x2f8)](),_0xb3540=_0x2fd034[_0x54f711(0x1e9)]['getReader']();let _0x5b9310='';if(_0x2e3e0b[_0x54f711(0x18c)])_0x5b9310=_0x54f711(0xf3)+b64FromBytes(TE['encode'](_0x2e3e0b[_0x54f711(0x18c)]+':'+_0x2e3e0b[_0x54f711(0x1b7)]))+'\x0d\x0a';const _0x49f5c6=_0x54f711(0x96)+_0xc7f975[_0x54f711(0x276)]+':'+_0xc7f975['port']+_0x54f711(0x139)+_0xc7f975['hostname']+':'+_0xc7f975[_0x54f711(0x296)]+'\x0d\x0a'+_0x5b9310+'\x0d\x0a';await _0x1c2153['write'](TE[_0x54f711(0xbf)](_0x49f5c6));const {head:_0x45c942,leftover:_0x413f0d}=await readUntilCRLFCRLF(_0xb3540);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x54f711(0x1fa)](_0x45c942))throw new Error(_0x54f711(0xf1)+_0x45c942[_0x54f711(0x246)]('\x0d\x0a')[0x0]);if(_0x413f0d&&_0x413f0d[_0x54f711(0x129)]>0x0)_0x2fd034['_preamble']=_0x413f0d;return _0x1c2153[_0x54f711(0x1c7)](),_0xb3540[_0x54f711(0x1c7)](),_0x2fd034;}function ssCipherAlgo(_0x290cd6){const _0x37ae11=_0x30a059,_0x30388c=String(_0x290cd6||'')[_0x37ae11(0x3d9)]()[_0x37ae11(0x14e)](/_/g,'-');if(_0x30388c===_0x37ae11(0x19c)||_0x30388c===_0x37ae11(0x31f))return{'name':'AES-GCM','keyLen':0x10};if(_0x30388c===_0x37ae11(0x1ff)||_0x30388c===_0x37ae11(0x30b))return{'name':_0x37ae11(0x115),'keyLen':0x20};if(_0x30388c===_0x37ae11(0x152)||_0x30388c===_0x37ae11(0xbd)||_0x30388c===_0x37ae11(0x9c))return{'name':_0x37ae11(0x92),'keyLen':0x20};return null;}function sha1Bytes(_0x583765){const _0x58a28d=_0x30a059,_0x21c36a=_0x583765 instanceof Uint8Array?_0x583765:new Uint8Array(_0x583765),_0xd76097=_0x21c36a[_0x58a28d(0xd7)],_0x56c4d0=_0xd76097*0x8,_0x385505=new Uint8Array((_0xd76097+0x8>>0x6)+0x1<<0x6);_0x385505['set'](_0x21c36a),_0x385505[_0xd76097]=0x80;const _0x3e2655=new DataView(_0x385505[_0x58a28d(0x13d)]);_0x3e2655[_0x58a28d(0x28a)](_0x385505[_0x58a28d(0xd7)]-0x8,Math['floor'](_0x56c4d0/0x100000000),![]),_0x3e2655['setUint32'](_0x385505['length']-0x4,_0x56c4d0>>>0x0,![]);let _0x1b04ff=0x67452301,_0x3b2721=0xefcdab89,_0x2eecdc=0x98badcfe,_0x2a409b=0x10325476,_0x55d289=0xc3d2e1f0;const _0x18c0c5=new Uint32Array(0x50);for(let _0x1c843=0x0;_0x1c843<_0x385505[_0x58a28d(0xd7)];_0x1c843+=0x40){for(let _0x1fc88e=0x0;_0x1fc88e<0x10;_0x1fc88e++)_0x18c0c5[_0x1fc88e]=_0x3e2655[_0x58a28d(0x19b)](_0x1c843+_0x1fc88e*0x4,![]);for(let _0x3ddfc7=0x10;_0x3ddfc7<0x50;_0x3ddfc7++)_0x18c0c5[_0x3ddfc7]=rotl32(_0x18c0c5[_0x3ddfc7-0x3]^_0x18c0c5[_0x3ddfc7-0x8]^_0x18c0c5[_0x3ddfc7-0xe]^_0x18c0c5[_0x3ddfc7-0x10],0x1);let _0x4d26df=_0x1b04ff,_0x232c14=_0x3b2721,_0x28b2e2=_0x2eecdc,_0x1d926c=_0x2a409b,_0x2c2a1d=_0x55d289;for(let _0x3271c9=0x0;_0x3271c9<0x50;_0x3271c9++){let _0x17ae65,_0x34154b;if(_0x3271c9<0x14)_0x17ae65=_0x232c14&_0x28b2e2|~_0x232c14&_0x1d926c,_0x34154b=0x5a827999;else{if(_0x3271c9<0x28)_0x17ae65=_0x232c14^_0x28b2e2^_0x1d926c,_0x34154b=0x6ed9eba1;else _0x3271c9<0x3c?(_0x17ae65=_0x232c14&_0x28b2e2|_0x232c14&_0x1d926c|_0x28b2e2&_0x1d926c,_0x34154b=0x8f1bbcdc):(_0x17ae65=_0x232c14^_0x28b2e2^_0x1d926c,_0x34154b=0xca62c1d6);}const _0x4ae2bf=rotl32(_0x4d26df,0x5)+_0x17ae65+_0x2c2a1d+_0x34154b+_0x18c0c5[_0x3271c9]>>>0x0;_0x2c2a1d=_0x1d926c,_0x1d926c=_0x28b2e2,_0x28b2e2=rotl32(_0x232c14,0x1e),_0x232c14=_0x4d26df,_0x4d26df=_0x4ae2bf;}_0x1b04ff=_0x1b04ff+_0x4d26df>>>0x0,_0x3b2721=_0x3b2721+_0x232c14>>>0x0,_0x2eecdc=_0x2eecdc+_0x28b2e2>>>0x0,_0x2a409b=_0x2a409b+_0x1d926c>>>0x0,_0x55d289=_0x55d289+_0x2c2a1d>>>0x0;}const _0x36e23c=new Uint8Array(0x14),_0x34c3ab=new DataView(_0x36e23c[_0x58a28d(0x13d)]);return _0x34c3ab[_0x58a28d(0x28a)](0x0,_0x1b04ff,![]),_0x34c3ab[_0x58a28d(0x28a)](0x4,_0x3b2721,![]),_0x34c3ab[_0x58a28d(0x28a)](0x8,_0x2eecdc,![]),_0x34c3ab[_0x58a28d(0x28a)](0xc,_0x2a409b,![]),_0x34c3ab[_0x58a28d(0x28a)](0x10,_0x55d289,![]),_0x36e23c;}function hmacSha1(_0x1e66b5,_0x47072e){const _0x28a049=_0x30a059,_0x352266=0x40;let _0x491019=_0x1e66b5;if(_0x491019[_0x28a049(0xd7)]>_0x352266)_0x491019=sha1Bytes(_0x491019);const _0x22a7eb=new Uint8Array(_0x352266),_0x2acfbe=new Uint8Array(_0x352266);for(let _0x1cab7c=0x0;_0x1cab7c<_0x352266;_0x1cab7c++){_0x22a7eb[_0x1cab7c]=(_0x1cab7c<_0x491019['length']?_0x491019[_0x1cab7c]:0x0)^0x36,_0x2acfbe[_0x1cab7c]=(_0x1cab7c<_0x491019[_0x28a049(0xd7)]?_0x491019[_0x1cab7c]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x2acfbe,sha1Bytes(concatBytes(_0x22a7eb,_0x47072e))));}function hkdfSha1(_0x9cb7ce,_0x535978,_0x233752){const _0x3b3709=_0x30a059,_0x4ebdf7=hmacSha1(_0x535978&&_0x535978[_0x3b3709(0xd7)]?_0x535978:new Uint8Array(0x14),_0x9cb7ce);let _0x40afe2=new Uint8Array(0x0),_0x536445=new Uint8Array(0x0);for(let _0x49c84c=0x1;_0x536445[_0x3b3709(0xd7)]<_0x233752;_0x49c84c++){const _0x1a314c=new Uint8Array([_0x49c84c]);_0x40afe2=hmacSha1(_0x4ebdf7,concatBytes(concatBytes(_0x40afe2,TE[_0x3b3709(0xbf)](_0x3b3709(0x1d4))),_0x1a314c)),_0x536445=concatBytes(_0x536445,_0x40afe2);}return _0x536445[_0x3b3709(0x239)](0x0,_0x233752);}function chacha20Block(_0x4831ed,_0x3ebc49,_0x254aaa){const _0x3d88f6=_0x30a059,_0x5e0a4b=new Uint32Array(0x10);_0x5e0a4b[0x0]=0x61707865,_0x5e0a4b[0x1]=0x3320646e,_0x5e0a4b[0x2]=0x79622d32,_0x5e0a4b[0x3]=0x6b206574;const _0x42fa36=new DataView(_0x4831ed[_0x3d88f6(0x13d)],_0x4831ed['byteOffset'],0x20);for(let _0x28cb01=0x0;_0x28cb01<0x8;_0x28cb01++)_0x5e0a4b[0x4+_0x28cb01]=_0x42fa36[_0x3d88f6(0x19b)](_0x28cb01*0x4,!![]);_0x5e0a4b[0xc]=_0x3ebc49>>>0x0;const _0x4172b2=new DataView(_0x254aaa[_0x3d88f6(0x13d)],_0x254aaa[_0x3d88f6(0x348)],0xc);_0x5e0a4b[0xd]=_0x4172b2[_0x3d88f6(0x19b)](0x0,!![]),_0x5e0a4b[0xe]=_0x4172b2[_0x3d88f6(0x19b)](0x4,!![]),_0x5e0a4b[0xf]=_0x4172b2['getUint32'](0x8,!![]);const _0x28d0e4=_0x5e0a4b[_0x3d88f6(0x239)](),_0x325dbc=(_0x3abcbf,_0x6301c7,_0x50360d,_0x5f3652)=>{_0x28d0e4[_0x3abcbf]=_0x28d0e4[_0x3abcbf]+_0x28d0e4[_0x6301c7]>>>0x0,_0x28d0e4[_0x5f3652]=rotl32(_0x28d0e4[_0x5f3652]^_0x28d0e4[_0x3abcbf],0x10),_0x28d0e4[_0x50360d]=_0x28d0e4[_0x50360d]+_0x28d0e4[_0x5f3652]>>>0x0,_0x28d0e4[_0x6301c7]=rotl32(_0x28d0e4[_0x6301c7]^_0x28d0e4[_0x50360d],0xc),_0x28d0e4[_0x3abcbf]=_0x28d0e4[_0x3abcbf]+_0x28d0e4[_0x6301c7]>>>0x0,_0x28d0e4[_0x5f3652]=rotl32(_0x28d0e4[_0x5f3652]^_0x28d0e4[_0x3abcbf],0x8),_0x28d0e4[_0x50360d]=_0x28d0e4[_0x50360d]+_0x28d0e4[_0x5f3652]>>>0x0,_0x28d0e4[_0x6301c7]=rotl32(_0x28d0e4[_0x6301c7]^_0x28d0e4[_0x50360d],0x7);};for(let _0x46322c=0x0;_0x46322c<0xa;_0x46322c++){_0x325dbc(0x0,0x4,0x8,0xc),_0x325dbc(0x1,0x5,0x9,0xd),_0x325dbc(0x2,0x6,0xa,0xe),_0x325dbc(0x3,0x7,0xb,0xf),_0x325dbc(0x0,0x5,0xa,0xf),_0x325dbc(0x1,0x6,0xb,0xc),_0x325dbc(0x2,0x7,0x8,0xd),_0x325dbc(0x3,0x4,0x9,0xe);}const _0x54aba7=new Uint8Array(0x40),_0x7913a6=new DataView(_0x54aba7[_0x3d88f6(0x13d)]);for(let _0x388ca2=0x0;_0x388ca2<0x10;_0x388ca2++){_0x28d0e4[_0x388ca2]=_0x28d0e4[_0x388ca2]+_0x5e0a4b[_0x388ca2]>>>0x0,_0x7913a6[_0x3d88f6(0x28a)](_0x388ca2*0x4,_0x28d0e4[_0x388ca2],!![]);}return _0x54aba7;}function chacha20Xor(_0x5c18e4,_0x45a3a8,_0x5df924,_0x430598){const _0x20cddc=_0x30a059,_0x1a3270=_0x430598[_0x20cddc(0x239)](),_0x54d98a=Math['ceil'](_0x430598[_0x20cddc(0xd7)]/0x40);for(let _0x48fd99=0x0;_0x48fd99<_0x54d98a;_0x48fd99++){const _0x38081a=chacha20Block(_0x5c18e4,_0x5df924+_0x48fd99,_0x45a3a8),_0x43bde8=_0x48fd99*0x40,_0x1d6ef3=Math[_0x20cddc(0x227)](0x40,_0x1a3270[_0x20cddc(0xd7)]-_0x43bde8);for(let _0x389880=0x0;_0x389880<_0x1d6ef3;_0x389880++)_0x1a3270[_0x43bde8+_0x389880]^=_0x38081a[_0x389880];}return _0x1a3270;}function poly1305(_0x298b17,_0x159b09){const _0x4d8b02=_0x30a059;let _0x2fbcab=0x0n,_0x3bc092=0x0n;for(let _0x5b4966=0x0;_0x5b4966<0x10;_0x5b4966++){_0x2fbcab|=BigInt(_0x298b17[_0x5b4966])<<BigInt(0x8*_0x5b4966),_0x3bc092|=BigInt(_0x298b17[0x10+_0x5b4966])<<BigInt(0x8*_0x5b4966);}_0x2fbcab&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x5c657e=0x0n;const _0x23245c=(0x1n<<0x82n)-0x5n;for(let _0x50f123=0x0;_0x50f123<_0x159b09['length'];_0x50f123+=0x10){const _0x20edb8=Math['min'](0x10,_0x159b09[_0x4d8b02(0xd7)]-_0x50f123);let _0x1d9361=0x1n;for(let _0x1bc681=_0x20edb8-0x1;_0x1bc681>=0x0;_0x1bc681--)_0x1d9361=_0x1d9361<<0x8n|BigInt(_0x159b09[_0x50f123+_0x1bc681]);_0x5c657e=(_0x5c657e+_0x1d9361)*_0x2fbcab%_0x23245c;}_0x5c657e=_0x5c657e+_0x3bc092&(0x1n<<0x80n)-0x1n;const _0x1ac425=new Uint8Array(0x10);for(let _0x3e3242=0x0;_0x3e3242<0x10;_0x3e3242++)_0x1ac425[_0x3e3242]=Number(_0x5c657e>>BigInt(0x8*_0x3e3242)&0xffn);return _0x1ac425;}function chacha20Poly1305Seal(_0x52d055,_0x421167,_0x76d7a1,_0xd474bb){const _0x2930d1=_0x30a059,_0x54741c=_0xd474bb||new Uint8Array(0x0),_0xa29cbf=chacha20Xor(_0x52d055,_0x421167,0x0,new Uint8Array(0x20)),_0x2e470f=chacha20Xor(_0x52d055,_0x421167,0x1,_0x76d7a1),_0x48bbe7=_0xbe4f95=>new Uint8Array((0x10-_0xbe4f95%0x10)%0x10),_0x3eff72=_0x52c5dc=>{const _0x262c67=_0x2153,_0x37dd4c=new Uint8Array(0x8),_0x3c0e2a=new DataView(_0x37dd4c[_0x262c67(0x13d)]);return _0x3c0e2a[_0x262c67(0x28a)](0x0,_0x52c5dc>>>0x0,!![]),_0x3c0e2a[_0x262c67(0x28a)](0x4,Math[_0x262c67(0x2b5)](_0x52c5dc/0x100000000),!![]),_0x37dd4c;},_0x3aa62b=concatBytes(_0x54741c,concatBytes(_0x48bbe7(_0x54741c[_0x2930d1(0xd7)]),concatBytes(_0x2e470f,concatBytes(_0x48bbe7(_0x2e470f[_0x2930d1(0xd7)]),concatBytes(_0x3eff72(_0x54741c[_0x2930d1(0xd7)]),_0x3eff72(_0x2e470f[_0x2930d1(0xd7)])))))),_0x110eec=poly1305(_0xa29cbf,_0x3aa62b);return concatBytes(_0x2e470f,_0x110eec);}function chacha20Poly1305Open(_0x54a7d3,_0x57644b,_0x333e07,_0x171dd6){const _0x5e7e86=_0x30a059;if(_0x333e07[_0x5e7e86(0xd7)]<0x10)throw new Error(_0x5e7e86(0x30f));const _0xf02cee=_0x333e07['subarray'](0x0,_0x333e07[_0x5e7e86(0xd7)]-0x10),_0x2205d7=_0x333e07['subarray'](_0x333e07[_0x5e7e86(0xd7)]-0x10),_0x6dec67=_0x171dd6||new Uint8Array(0x0),_0x386f35=chacha20Xor(_0x54a7d3,_0x57644b,0x0,new Uint8Array(0x20)),_0x37d47c=_0x1e86b0=>new Uint8Array((0x10-_0x1e86b0%0x10)%0x10),_0x3cfc78=_0x56c1b6=>{const _0x346911=_0x5e7e86,_0x1ce6d3=new Uint8Array(0x8),_0x5a2ea0=new DataView(_0x1ce6d3['buffer']);return _0x5a2ea0['setUint32'](0x0,_0x56c1b6>>>0x0,!![]),_0x5a2ea0[_0x346911(0x28a)](0x4,Math[_0x346911(0x2b5)](_0x56c1b6/0x100000000),!![]),_0x1ce6d3;},_0x427842=concatBytes(_0x6dec67,concatBytes(_0x37d47c(_0x6dec67[_0x5e7e86(0xd7)]),concatBytes(_0xf02cee,concatBytes(_0x37d47c(_0xf02cee[_0x5e7e86(0xd7)]),concatBytes(_0x3cfc78(_0x6dec67[_0x5e7e86(0xd7)]),_0x3cfc78(_0xf02cee[_0x5e7e86(0xd7)])))))),_0x40d3c7=poly1305(_0x386f35,_0x427842);let _0x70402d=0x0;for(let _0x44fa75=0x0;_0x44fa75<0x10;_0x44fa75++)_0x70402d|=_0x40d3c7[_0x44fa75]^_0x2205d7[_0x44fa75];if(_0x70402d!==0x0)return null;return chacha20Xor(_0x54a7d3,_0x57644b,0x1,_0xf02cee);}async function newSsAead(_0x1c1cd0,_0x4c5ee8){const _0x2131db=_0x30a059,_0x134f27=new Uint8Array(0xc),_0x4c0718=()=>{const _0x462c96=_0x2153,_0x5aa0b6=_0x134f27[_0x462c96(0x239)]();for(let _0x44dee3=0xb;_0x44dee3>=0x0;_0x44dee3--){_0x5aa0b6[_0x44dee3]++;if(_0x5aa0b6[_0x44dee3]!==0x0)break;}return _0x5aa0b6;};if(_0x1c1cd0===_0x2131db(0x92))return{'seal'(_0x2abcc4){return chacha20Poly1305Seal(_0x4c5ee8,_0x4c0718(),_0x2abcc4);},'open'(_0x98f08){const _0x432bce=_0x2131db,_0x13fcf2=chacha20Poly1305Open(_0x4c5ee8,_0x4c0718(),_0x98f08);if(!_0x13fcf2)throw new Error(_0x432bce(0x2c4));return _0x13fcf2;}};const _0x10b4f6=await crypto['subtle'][_0x2131db(0xa4)](_0x2131db(0x216),_0x4c5ee8,{'name':_0x1c1cd0},![],[_0x2131db(0x3cd),_0x2131db(0x381)]);return{async 'seal'(_0x1661dd){const _0x51f74a=_0x2131db;return new Uint8Array(await crypto[_0x51f74a(0x107)][_0x51f74a(0x3cd)]({'name':_0x1c1cd0,'iv':_0x4c0718()},_0x10b4f6,_0x1661dd));},async 'open'(_0x2db679){const _0x4b71a6=_0x2131db;try{return new Uint8Array(await crypto[_0x4b71a6(0x107)][_0x4b71a6(0x381)]({'name':_0x1c1cd0,'iv':_0x4c0718()},_0x10b4f6,_0x2db679));}catch(_0x57efb9){throw new Error('SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）');}}};}async function ssSealChunk(_0x1a5776,_0x25107e){const _0x2ccc4a=_0x30a059,_0x3157b2=new Uint8Array([_0x25107e[_0x2ccc4a(0xd7)]>>0x8&0xff,_0x25107e[_0x2ccc4a(0xd7)]&0xff]);return concatBytes(await _0x1a5776[_0x2ccc4a(0x39d)](_0x3157b2),await _0x1a5776[_0x2ccc4a(0x39d)](_0x25107e));}function _0x2153(_0x56f982,_0x431d3a){const _0x239f7a=_0x564d();return _0x2153=function(_0x390852,_0x11136a){_0x390852=_0x390852-0x91;let _0x1ed55f=_0x239f7a[_0x390852];return _0x1ed55f;},_0x2153(_0x56f982,_0x431d3a);}async function connectViaShadowsocks(_0x3a677f,_0x22609d){const _0x2ca9bf=_0x30a059,_0x1fd5ab=ssCipherAlgo(_0x3a677f['method']);if(!_0x1fd5ab)throw new Error(_0x2ca9bf(0xf4)+(_0x3a677f[_0x2ca9bf(0x13b)]||_0x2ca9bf(0x378)));if(!_0x3a677f[_0x2ca9bf(0x37b)])throw new Error(_0x2ca9bf(0x271));const _0x1af268=await connectWithTimeout(_0x3a677f[_0x2ca9bf(0x37d)],_0x3a677f['port'],0x1770),_0x5bdb72=_0x1af268[_0x2ca9bf(0x3d4)][_0x2ca9bf(0x2f8)](),_0x27b190=_0x1af268[_0x2ca9bf(0x1e9)][_0x2ca9bf(0xc5)]();let _0x2638d1=new Uint8Array(0x0);const _0xe88a8=async _0x18bceb=>{const _0x1f282c=_0x2ca9bf;while(_0x2638d1[_0x1f282c(0xd7)]<_0x18bceb){const {done:_0x46b220,value:_0x35302a}=await _0x27b190[_0x1f282c(0x38b)]();if(_0x46b220)throw new Error(_0x1f282c(0x124));_0x2638d1=concatBytes(_0x2638d1,_0x35302a);}const _0x179b0d=_0x2638d1[_0x1f282c(0x239)](0x0,_0x18bceb);return _0x2638d1=_0x2638d1[_0x1f282c(0x1af)](_0x18bceb),_0x179b0d;},_0x4ed998=new Uint8Array(await crypto['subtle'][_0x2ca9bf(0x16e)](_0x2ca9bf(0x91),TE[_0x2ca9bf(0xbf)](_0x3a677f[_0x2ca9bf(0x37b)]))),_0x13ce43=crypto['getRandomValues'](new Uint8Array(0x10)),_0x20133f=await newSsAead(_0x1fd5ab['name'],await hkdfSha1(_0x4ed998,_0x13ce43,_0x1fd5ab[_0x2ca9bf(0x2b6)]));await _0x5bdb72[_0x2ca9bf(0x29d)](_0x13ce43),await _0x5bdb72[_0x2ca9bf(0x29d)](await ssSealChunk(_0x20133f,new Uint8Array(0x0)));const _0x3ca8f0=new ReadableStream({async 'start'(_0x2f825c){const _0x358e2c=_0x2ca9bf;try{const _0x1412d9=await _0xe88a8(0x10),_0x3c9bdb=await newSsAead(_0x1fd5ab[_0x358e2c(0x134)],await hkdfSha1(_0x4ed998,_0x1412d9,_0x1fd5ab[_0x358e2c(0x2b6)]));while(!![]){const _0x4b1a49=await _0x3c9bdb['open'](await _0xe88a8(0x12)),_0x5a2484=_0x4b1a49[0x0]<<0x8|_0x4b1a49[0x1];if(_0x5a2484>0x4000)throw new Error(_0x358e2c(0xda)+_0x5a2484);const _0xe91951=await _0x3c9bdb[_0x358e2c(0x22d)](await _0xe88a8(_0x5a2484+0x10));if(_0x5a2484>0x0)_0x2f825c[_0x358e2c(0x1fd)](_0xe91951);}}catch(_0x2ab883){try{_0x2f825c[_0x358e2c(0x1d5)](_0x2ab883);}catch(_0x2824a8){}}}}),_0x365ceb=new WritableStream({async 'write'(_0x540ee3){const _0x3b4478=_0x2ca9bf,_0x3ed60a=_0x540ee3 instanceof Uint8Array?_0x540ee3:new Uint8Array(_0x540ee3);for(let _0x5c2f2e=0x0;_0x5c2f2e<_0x3ed60a[_0x3b4478(0xd7)];_0x5c2f2e+=0x4000){await _0x5bdb72[_0x3b4478(0x29d)](await ssSealChunk(_0x20133f,_0x3ed60a[_0x3b4478(0x1af)](_0x5c2f2e,Math[_0x3b4478(0x227)](_0x3ed60a['length'],_0x5c2f2e+0x4000))));}},'close'(){const _0x3899dc=_0x2ca9bf;try{_0x5bdb72[_0x3899dc(0x2a4)]();}catch(_0x4a4314){}},'abort'(){const _0x30ccc8=_0x2ca9bf;try{_0x5bdb72[_0x30ccc8(0xe7)]();}catch(_0xab8075){}}});return{'readable':_0x3ca8f0,'writable':_0x365ceb,'close'(){const _0x1fb9f6=_0x2ca9bf;try{_0x1af268[_0x1fb9f6(0x2a4)]();}catch(_0x41c2d7){}}};}async function readN(_0x476e0b,_0xac6c65){const _0xc5915d=_0x30a059,_0x4815e2=new Uint8Array(_0xac6c65);let _0x2e2b29=0x0;while(_0x2e2b29<_0xac6c65){const {done:_0xe82549,value:_0xa994ca}=await _0x476e0b['read']();if(_0xe82549)throw new Error(_0xc5915d(0x14f));const _0x212098=_0xac6c65-_0x2e2b29;_0x4815e2[_0xc5915d(0xf2)](_0xa994ca[_0xc5915d(0x1af)](0x0,Math[_0xc5915d(0x227)](_0x212098,_0xa994ca['length'])),_0x2e2b29),_0x2e2b29+=Math[_0xc5915d(0x227)](_0x212098,_0xa994ca[_0xc5915d(0xd7)]);}return _0x4815e2;}async function readUntilCRLFCRLF(_0x4049e1){const _0x47cbb8=_0x30a059;let _0x2c65c3=new Uint8Array(0x0);while(_0x2c65c3['length']<0x10000){const {done:_0x1bba57,value:_0x34c7e2}=await _0x4049e1[_0x47cbb8(0x38b)]();if(_0x1bba57)break;_0x2c65c3=concatBytes(_0x2c65c3,_0x34c7e2);const _0x286802=findBytes(_0x2c65c3,[0xd,0xa,0xd,0xa]);if(_0x286802>=0x0)return{'head':TD[_0x47cbb8(0x3d6)](_0x2c65c3[_0x47cbb8(0x1af)](0x0,_0x286802)),'leftover':_0x2c65c3[_0x47cbb8(0x1af)](_0x286802+0x4)};}return{'head':TD[_0x47cbb8(0x3d6)](_0x2c65c3),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x5b26ad,_0x50708d){const _0x363be3=_0x30a059,_0x5d6cd2=new Uint8Array(_0x5b26ad[_0x363be3(0xd7)]+_0x50708d['length']);return _0x5d6cd2[_0x363be3(0xf2)](_0x5b26ad,0x0),_0x5d6cd2[_0x363be3(0xf2)](_0x50708d,_0x5b26ad['length']),_0x5d6cd2;}function findBytes(_0x3c4e10,_0x1e73a4){const _0x1f4d76=_0x30a059;_0x27ac06:for(let _0x2d0f20=0x0;_0x2d0f20<=_0x3c4e10[_0x1f4d76(0xd7)]-_0x1e73a4[_0x1f4d76(0xd7)];_0x2d0f20++){for(let _0x15dcc0=0x0;_0x15dcc0<_0x1e73a4[_0x1f4d76(0xd7)];_0x15dcc0++)if(_0x3c4e10[_0x2d0f20+_0x15dcc0]!==_0x1e73a4[_0x15dcc0])continue _0x27ac06;return _0x2d0f20;}return-0x1;}const RELAY_DOMAINS={'HK':_0x30a059(0x20c),'US':'proxyip.us.cmliussss.net','SG':_0x30a059(0x197),'JP':_0x30a059(0x206),'KR':_0x30a059(0x362),'DE':'proxyip.de.cmliussss.net','SE':_0x30a059(0x173),'NL':_0x30a059(0x3b2),'FI':_0x30a059(0x25c),'GB':_0x30a059(0x1e7),'Oracle':_0x30a059(0x127),'DigitalOcean':_0x30a059(0x2d1),'Vultr':_0x30a059(0x26b),'Multacom':'proxyip.multacom.cmliussss.net'};function selectRelayRegion(_0x544c1a){const _0x45e30f=_0x30a059,_0x4cf0ae=(_0x544c1a||'')[_0x45e30f(0x15b)]();if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x2ed))||_0x4cf0ae[_0x45e30f(0x1e6)]('HK'))return'HK';if(_0x4cf0ae['startsWith'](_0x45e30f(0xa9))||_0x4cf0ae['startsWith']('SG'))return'SG';if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x2ea))||_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x371))||_0x4cf0ae['startsWith']('TYO')||_0x4cf0ae[_0x45e30f(0x1e6)]('OSA')||_0x4cf0ae[_0x45e30f(0x1e6)]('JP'))return'JP';if(_0x4cf0ae[_0x45e30f(0x1e6)]('ICN')||_0x4cf0ae['startsWith']('SEL')||_0x4cf0ae[_0x45e30f(0x1e6)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/['test'](_0x4cf0ae))return'HK';if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x2b4))||_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x3f0))||_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x27c))||_0x4cf0ae['startsWith']('DUS')||_0x4cf0ae[_0x45e30f(0x1e6)]('HAM')||_0x4cf0ae[_0x45e30f(0x1e6)]('STR')||_0x4cf0ae['startsWith']('DE'))return'DE';if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x277))||_0x4cf0ae[_0x45e30f(0x1e6)]('SE'))return'SE';if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x158))||_0x4cf0ae[_0x45e30f(0x1e6)]('NL'))return'NL';if(_0x4cf0ae[_0x45e30f(0x1e6)]('HEL')||_0x4cf0ae[_0x45e30f(0x1e6)]('FI'))return'FI';if(_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x212))||_0x4cf0ae[_0x45e30f(0x1e6)](_0x45e30f(0x1cc))||_0x4cf0ae[_0x45e30f(0x1e6)]('GB')||_0x4cf0ae['startsWith']('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/[_0x45e30f(0x1fa)](_0x4cf0ae))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x4ce1a7,_0x3a54cc){const _0x75a4fe=_0x30a059;_0x3a54cc=_0x3a54cc||0x1bb;if(isValidIp(_0x4ce1a7))return[{'hostname':_0x4ce1a7,'port':_0x3a54cc}];const _0x1143b6=_0x4ce1a7+':'+_0x3a54cc,_0x75c83f=Date[_0x75a4fe(0x24d)](),_0x536138=PROXYIP_CACHE[_0x75a4fe(0x1f4)](_0x1143b6);if(_0x536138&&_0x75c83f-_0x536138['t']<0x5*0x3c*0x3e8)return _0x536138[_0x75a4fe(0x215)];const _0x4dc6bd=[_0x75a4fe(0x3ad),_0x75a4fe(0x3ca),_0x75a4fe(0x292)],_0x523867=async(_0x1f8ed4,_0xd056a7)=>{const _0x3a927a=_0x75a4fe,_0x4c99fd=_0x4dc6bd[_0x3a927a(0x396)](async _0x49b220=>{const _0x397f58=_0x3a927a,_0x5aaa04=await fetchTimeout(_0x49b220+_0x397f58(0x397)+encodeURIComponent(_0x4ce1a7)+'&type='+_0x1f8ed4,{'headers':{'accept':_0x397f58(0x1c6)}},0xfa0);if(!_0x5aaa04||!_0x5aaa04['ok'])throw new Error('doh\x20fail');const _0x2f0bc3=await _0x5aaa04[_0x397f58(0xe9)]();return(_0x2f0bc3[_0x397f58(0x2c7)]||[])[_0x397f58(0x13e)](_0x1e8268=>_0x1e8268[_0x397f58(0x338)]===_0xd056a7)[_0x397f58(0x396)](_0x4f3287=>_0x4f3287[_0x397f58(0x2a3)]);});try{return await Promise['any'](_0x4c99fd);}catch(_0xe93c9){return[];}},[_0x556445,_0x22ac24]=await Promise['all']([_0x523867('TXT',0x10),_0x523867('A',0x1)]);let _0x3fc113=[];for(const _0xc21271 of _0x556445){const _0x25c074=String(_0xc21271)['replace'](/^"|"$/g,'')[_0x75a4fe(0x14e)](/\\010/g,',')[_0x75a4fe(0x14e)](/\n/g,',')[_0x75a4fe(0x36c)]();if(!_0x25c074)continue;if(_0x25c074==='@edtunnel'){_0x3fc113=_0x22ac24[_0x75a4fe(0x13e)](_0x380e71=>/^\d+\.\d+\.\d+\.\d+$/[_0x75a4fe(0x1fa)](_0x380e71))[_0x75a4fe(0x396)](_0x166f57=>({'hostname':_0x166f57,'port':_0x3a54cc}));break;}const _0xb0bda8=_0x25c074['split'](/[,;\s]+/)[_0x75a4fe(0x396)](_0x3fc1cf=>_0x3fc1cf[_0x75a4fe(0x36c)]())[_0x75a4fe(0x13e)](Boolean),_0x310c89=[];for(const _0x4c49a2 of _0xb0bda8){const {host:_0x489404,port:_0x357a10}=parseHostPort(_0x4c49a2,_0x3a54cc);if(isValidIp(_0x489404))_0x310c89['push']({'hostname':_0x489404,'port':_0x357a10});}if(_0x310c89[_0x75a4fe(0xd7)]){_0x3fc113=_0x310c89;break;}}!_0x3fc113[_0x75a4fe(0xd7)]&&(_0x3fc113=_0x22ac24[_0x75a4fe(0x13e)](_0x5e2462=>/^\d+\.\d+\.\d+\.\d+$/[_0x75a4fe(0x1fa)](_0x5e2462))[_0x75a4fe(0x396)](_0x3e7e55=>({'hostname':_0x3e7e55,'port':_0x3a54cc})));if(!_0x3fc113[_0x75a4fe(0xd7)]){const _0x4f9b73=await _0x523867(_0x75a4fe(0x1a8),0x1c);_0x3fc113=_0x4f9b73[_0x75a4fe(0x13e)](_0xe3b661=>isValidIp(_0xe3b661))[_0x75a4fe(0x396)](_0x4e28b2=>({'hostname':_0x4e28b2,'port':_0x3a54cc}));}const _0x15c1bc=new Set(),_0x4b9120=_0x3fc113['filter'](_0x3b692d=>{const _0x1646c9=_0x75a4fe,_0x1e4946=_0x3b692d['hostname']+':'+_0x3b692d[_0x1646c9(0x296)];if(_0x15c1bc['has'](_0x1e4946))return![];return _0x15c1bc[_0x1646c9(0x383)](_0x1e4946),!![];});if(_0x4b9120[_0x75a4fe(0xd7)])PROXYIP_CACHE[_0x75a4fe(0xf2)](_0x1143b6,{'t':_0x75c83f,'ips':_0x4b9120});return _0x4b9120;}async function openOutbound(_0x337277,_0x2b769b,_0x30f3aa,_0xe8964a){const _0x5be86a=_0x30a059,_0x1dafce=parseProxyAddress(_0x2b769b[_0x5be86a(0x28c)]),_0x189b5a=_0x2b769b[_0x5be86a(0x2fc)]||'',_0x153895=_0x1dafce?_0x1dafce['type']===_0x5be86a(0x17a)||_0x1dafce['type']===_0x5be86a(0x1b4)?_0x404e97=>connectViaHttpProxy(_0x1dafce,_0x404e97):_0x1dafce[_0x5be86a(0x338)]==='ss'?_0x2e2454=>connectViaShadowsocks(_0x1dafce,_0x2e2454):_0x175fd9=>connectViaSocks5(_0x1dafce,_0x175fd9):null,_0x357c91=(_0x330918,_0x3c2d0d)=>{const _0x24bdc6=_0x5be86a,_0x2dbf87=[];if(_0x189b5a===_0x24bdc6(0x1ba))_0x2dbf87[_0x24bdc6(0x1bf)](_0x153895?()=>_0x153895(_0x330918):()=>connectDirect(_0x330918,_0x3c2d0d));else{if(_0x189b5a==='no'){_0x2dbf87['push'](()=>connectDirect(_0x330918,_0x3c2d0d));if(_0x153895)_0x2dbf87['push'](()=>_0x153895(_0x330918));}else{if(_0x153895)_0x2dbf87[_0x24bdc6(0x1bf)](()=>_0x153895(_0x330918));_0x2dbf87[_0x24bdc6(0x1bf)](()=>connectDirect(_0x330918,_0x3c2d0d));}}return _0x2dbf87;};let _0x6b6be7;const _0x46b0f3=async(_0x5af172,_0x14f1f6)=>{for(const _0x1854ed of _0x357c91(_0x5af172,_0x14f1f6)){try{return await _0x1854ed();}catch(_0x34e7ff){_0x6b6be7=_0x34e7ff;}}return null;},_0x566391=_0x2b769b[_0x5be86a(0x23f)]?parseHostPort(_0x2b769b[_0x5be86a(0x23f)],0x1bb):null;if(_0x566391&&_0x566391[_0x5be86a(0x37d)]){let _0x2962d9=await resolveProxyIPs(_0x566391['host'],_0x566391[_0x5be86a(0x296)]);if(!_0x2962d9['length'])_0x2962d9=[{'hostname':_0x566391[_0x5be86a(0x37d)],'port':_0x566391[_0x5be86a(0x296)]}];for(const _0xe722ca of _0x2962d9){const _0x2959fc=await _0x46b0f3(_0xe722ca,0x1770);if(_0x2959fc)return _0x2959fc;}}const _0x46fd74=await _0x46b0f3({'hostname':_0x337277['addr'],'port':_0x337277['port']},0x1770);if(_0x46fd74)return _0x46fd74;{const _0x5d6658=selectRelayRegion(_0x30f3aa),_0x1f7f89=[_0x5d6658,...Object[_0x5be86a(0x274)](RELAY_DOMAINS)[_0x5be86a(0x13e)](_0xc3ffed=>_0xc3ffed!==_0x5d6658)][_0x5be86a(0x239)](0x0,0x3);for(const _0xe1b000 of _0x1f7f89){const _0x26b599=RELAY_DOMAINS[_0xe1b000];if(!_0x26b599)continue;let _0x26dfe6=[];try{_0x26dfe6=await resolveProxyIPs(_0x26b599,0x1bb);}catch(_0x588c73){}if(!_0x26dfe6['length'])continue;for(const _0x304f9d of _0x26dfe6){const _0x2f18ac=await _0x46b0f3(_0x304f9d,0x1388);if(_0x2f18ac)return _0x2f18ac;}}}throw _0x6b6be7||new Error('所有出站方式均失败');}async function pumpToReader(_0x510aeb,_0x4e7ded,_0x447cb9){const _0xd38b1=_0x30a059;try{while(!![]){const {done:_0x3c284d,value:_0x2f4a61}=await _0x510aeb[_0xd38b1(0x38b)]();if(_0x3c284d)break;_0x4e7ded(_0x2f4a61);}}catch(_0x58bbe0){}try{if(_0x447cb9)_0x447cb9();}catch(_0x334710){}}async function handleWebSocketProxy(_0x662e63,_0x3b97aa){const _0x263176=_0x30a059,_0x1a5879=new WebSocketPair(),[_0x3b6c76,_0x4796d4]=Object[_0x263176(0xd8)](_0x1a5879);try{_0x4796d4['accept']({'allowHalfOpen':!![]});}catch(_0x20c0cc){_0x4796d4['accept']();}_0x4796d4[_0x263176(0xd5)]=_0x263176(0x17e);let _0x4ec9c1=null,_0x56e959=null,_0x4dcce5=![],_0xf2543b=null;const _0xa66cb3=_0x838ddd=>{try{_0x4796d4['send'](_0x838ddd);}catch(_0x255243){}};_0x4796d4['addEventListener']('message',async _0x2b7c0e=>{const _0x277d96=_0x263176;try{const _0x5d636d=typeof _0x2b7c0e[_0x277d96(0x2a3)]==='string'?TE[_0x277d96(0xbf)](_0x2b7c0e[_0x277d96(0x2a3)]):new Uint8Array(_0x2b7c0e[_0x277d96(0x2a3)]);if(!_0x4dcce5){_0xf2543b=_0xf2543b?concatBytes(_0xf2543b,_0x5d636d):_0x5d636d;let _0x586eca,_0x4623c5;try{let _0x2b8d62=detectTrojan(_0xf2543b,_0x3b97aa);if(!_0x2b8d62&&_0xf2543b['byteLength']>0x0&&_0xf2543b[0x0]!==0x0&&_0xf2543b[_0x277d96(0x129)]<0x3a)return;_0x4623c5=!_0x2b8d62,_0x586eca=_0x2b8d62?parseTrojanHeader(_0xf2543b):parseVlessHeader(_0xf2543b);}catch(_0x241209){if(/头部过短/['test'](_0x241209[_0x277d96(0x384)]||''))return;throw _0x241209;}_0x4dcce5=!![];if(_0x586eca['command']===0x2){try{const _0x23ce6b=_0xf2543b[_0x277d96(0x1af)](_0x586eca[_0x277d96(0x39c)]);if(_0x586eca[_0x277d96(0x296)]===0x35&&_0x23ce6b[_0x277d96(0x129)]>=0xc){const _0x1036de=await dnsToDoH(_0x23ce6b);if(_0x1036de)_0xa66cb3(_0x1036de);}}catch(_0x15023e){}try{_0x4796d4['close'](0x3e8);}catch(_0x3dacdb){}return;}const _0x50c9e0=await openOutbound(_0x586eca,_0x3b97aa,_0x662e63['cf']&&_0x662e63['cf'][_0x277d96(0x2fd)],_0x4623c5);_0x4ec9c1=_0x50c9e0,_0x56e959=_0x50c9e0[_0x277d96(0x3d4)]['getWriter']();if(_0x4623c5)_0xa66cb3(new Uint8Array([0x0,0x0]));if(_0x50c9e0[_0x277d96(0x399)]&&_0x50c9e0['_preamble'][_0x277d96(0x129)]>0x0)_0xa66cb3(_0x50c9e0[_0x277d96(0x399)]);if(_0xf2543b&&_0xf2543b['byteLength']>_0x586eca[_0x277d96(0x39c)])await _0x56e959['write'](_0xf2543b['subarray'](_0x586eca[_0x277d96(0x39c)]));_0xf2543b=null,pumpToReader(_0x50c9e0[_0x277d96(0x1e9)][_0x277d96(0xc5)](),_0xa66cb3,()=>{const _0x20fbbc=_0x277d96;try{_0x4796d4[_0x20fbbc(0x2a4)](0x3e8);}catch(_0x4b0e85){}});}else{if(_0x56e959)await _0x56e959[_0x277d96(0x29d)](_0x5d636d);else _0xf2543b=_0xf2543b?concatBytes(_0xf2543b,_0x5d636d):_0x5d636d;}}catch(_0xcb83bd){try{_0x4796d4[_0x277d96(0x2a4)](0x3f3,String(_0xcb83bd&&_0xcb83bd[_0x277d96(0x384)]||_0xcb83bd));}catch(_0x1a840d){}}});const _0x11a898=()=>{const _0x2f43ca=_0x263176;if(_0x4ec9c1){try{_0x4ec9c1[_0x2f43ca(0x2a4)]();}catch(_0x5a7ef7){}_0x4ec9c1=null;}};return _0x4796d4['addEventListener']('close',_0x11a898),_0x4796d4[_0x263176(0x2bc)]('error',_0x11a898),new Response(null,{'status':0x65,'webSocket':_0x3b6c76});}async function handleXhttpProxy(_0x13bfd2,_0x2d46b1){const _0x23c00f=_0x30a059,_0x14bf93=_0x13bfd2[_0x23c00f(0x297)][_0x23c00f(0xc5)](),_0x1249fc=await _0x14bf93[_0x23c00f(0x38b)]();if(_0x1249fc[_0x23c00f(0x175)])return new Response('empty',{'status':0x190});const _0x8cc6fc=parseVlessHeader(_0x1249fc[_0x23c00f(0xe6)]),_0x4426d1=await openOutbound(_0x8cc6fc,_0x2d46b1,_0x13bfd2['cf']&&_0x13bfd2['cf'][_0x23c00f(0x2fd)],!![]),_0x4856c5=_0x4426d1[_0x23c00f(0x3d4)]['getWriter']();await _0x4856c5[_0x23c00f(0x29d)](_0x1249fc[_0x23c00f(0xe6)]['subarray'](_0x8cc6fc[_0x23c00f(0x39c)])),((async()=>{const _0x2361b2=_0x23c00f;try{while(!![]){const {done:_0x42fbb7,value:_0x50acb8}=await _0x14bf93['read']();if(_0x42fbb7)break;await _0x4856c5[_0x2361b2(0x29d)](_0x50acb8);}}catch(_0x36069c){}try{await _0x4856c5['close']();}catch(_0x43e5e1){}})());const _0x5bbb60=new ReadableStream({async 'start'(_0x3c0f36){const _0x5c498b=_0x23c00f;_0x3c0f36[_0x5c498b(0x1fd)](new Uint8Array([0x0,0x0]));if(_0x4426d1['_preamble']&&_0x4426d1['_preamble']['byteLength']>0x0)_0x3c0f36[_0x5c498b(0x1fd)](_0x4426d1['_preamble']);const _0xc2897e=_0x4426d1['readable']['getReader']();try{while(!![]){const {done:_0x2b043f,value:_0x382cec}=await _0xc2897e[_0x5c498b(0x38b)]();if(_0x2b043f)break;_0x3c0f36[_0x5c498b(0x1fd)](_0x382cec);}}catch(_0x37d21a){}try{_0x3c0f36[_0x5c498b(0x2a4)]();}catch(_0x318d11){}try{_0x4426d1[_0x5c498b(0x2a4)]();}catch(_0x4eb84e){}},'cancel'(){try{_0x4426d1['close']();}catch(_0x226c9b){}}});return new Response(_0x5bbb60,{'status':0xc8,'headers':{'content-type':_0x23c00f(0x368),'x-accel-buffering':'no','cache-control':_0x23c00f(0x364)}});}function decodeUtf8OrGbk(_0x10bc8a){const _0xa3a884=_0x30a059,_0x18dcbf=_0x10bc8a instanceof Uint8Array?_0x10bc8a:new Uint8Array(_0x10bc8a);try{const _0x124704=new TextDecoder(_0xa3a884(0x1d9))[_0xa3a884(0x3d6)](_0x18dcbf);if(!_0x124704[_0xa3a884(0x283)](' '))return _0x124704;}catch(_0x289fbf){}try{return new TextDecoder(_0xa3a884(0x1a7))[_0xa3a884(0x3d6)](_0x18dcbf);}catch(_0x99833a){}return new TextDecoder()[_0xa3a884(0x3d6)](_0x18dcbf);}function _0x564d(){const _0x39607a=['&fp=chrome&host=','104.16.66.7','http:','104.16.68.175#优选IP-153','104.27.66.179#优选IP-076','custom','104.17.100.40#优选IP-261','104.18.43.224#优选IP-022','proxyip.vultr.cmliussss.net','172.66.164.60#优选IP-251','104.25.223.90#优选IP-239','dns-out','188.114.97.52#优选IP-124','原生地址','SS\x20出站缺少密码','162.159.199.220#优选IP-263','https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/','keys','&ech=','hostname','ARN','http/1.1','未在仓库中找到版本信息','162.159.241.11#优选IP-204','match','MUC','next','104.27.23.242#优选IP-150','tag','bestcf','拉取失败\x20HTTP\x20','104.27.195.79#优选IP-178','includes','stats','162.159.153.10#优选IP-179','🎯\x20全球直连','内置·保底-','has','Sec-WebSocket-Protocol','setUint32','172.67.85.54#优选IP-300','outboundProxy','Status','904910SYaCdH','104.26.1.1','162.159.197.16#优选IP-117','{}.constructor(\x22return\x20this\x22)(\x20)','https://doh.pub/dns-query','104.17.160.131#优选IP-194','172.65.78.200#优选IP-283','2a06:98c0::/29','port','body','no\x20answer','\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20','104.18.34.34','190.93.240.0/20','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','write','162.159.10.45#优选IP-208','104.17.44.9',',\x20tls-verification=true,\x20tls13=true','104.18.255.187#优选IP-050','geosite-disney','data','close','optimizer','boolean','重置失败:\x20','162.159.128.1','trojan','OUTBOUND','CFNext\x20明文版.js','104.18.176.111#优选IP-052','104.24.155.234#优选IP-070',',\x20tls-verification=true,\x20tag=','\x20\x20\x20\x20ws-opts:','YXURL','bind','https://8.8.8.8/dns-query','162.159.43.85#优选IP-293','FRA','floor','keyLen','&type=A','vless=','104.16.45.249#优选IP-287','，请换一个数据源','哈萨克斯坦','addEventListener','https://www.wetest.vip/page/cloudflare/cname.html','cf.877771.xyz','加拿大','source','104.18.119.34#优选IP-016','sing-box','墨西哥','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）','version','104.19.169.53#优选IP-061','Answer','188.114.96.141#优选IP-146','servername','188.114.99.14#优选IP-206','198.41.128.0/17','162.159.46.167#优选IP-067','104.18.178.193#优选IP-183','172.67.82.86#优选IP-162','reset','xhttp\x20代理错误:\x20','proxyip.digitalocean.cmliussss.net','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','mode','subrequests','新加坡','104.25.33.126#优选IP-238','104.18.217.109#优选IP-033','headers','HTTP\x20','104.17.201.77','188.114.98.53#优选IP-080','nodeLimit','https://www.wetest.vip/page/cloudflare/address_v4.html','.top','ech-opts','ipType','url','162.159.230.149#优选IP-116','|rf','103.22.200.0/22','&type=ws&path=','162.159.240.54#优选IP-233','data-label','speed.marisalnc.com','viewer','NRT','104.27.21.175#优选IP-298',',\x20obfs-uri=','HKG','xPaddingHeader','Trojan\x20头部过短','\x0a[policy]\x0astatic=🚀\x20节点选择,\x20','setUint16','104.27.124.239#优选IP-278','104.17.87.46#优选IP-201','8.889288.xyz','stream-one','104.24.41.240#优选IP-212','162.159.137.71#优选IP-276','getWriter','18oioofS','订阅生成失败:\x20','2405:8100::/32','outboundMode','colo','round','geosite-google','assign','115155.xyz','VLESS\x20头部过短','BESTIP_AUTO','104.16.218.231#优选IP-155','104.21.213.24#优选IP-017','network','\x20\x20\x20\x20\x20\x20path:\x20','162.159.0.1#优选IP-010','172.64.0.0/13','redirect','aes-256gcm','TROJAN_PASSWORD','2803:f800::/32','172.65.162.213#优选IP-113','SS\x20AEAD\x20数据过短','quota','https://bestcf.pages.dev/random-region/KR/100.txt','ws-opts','127.0.0.1:9090','104.19.143.220#优选IP-256','https://api.cloudflare.com/client/v4/graphql','sum','104.21.7.133#优选IP-226','&security=tls&sni=','SOCKS5\x20不支持的认证方法\x20','false','104.17.97.72#优选IP-213','https://223.5.5.5/dns-query','162.159.136.73#优选IP-040','188.114.98.19#优选IP-154','aes-128gcm','匈牙利','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','presetErr','172.64.146.15#优选IP-028','geosite-apple','uuid','dns','666568nnxvWC','obfuscated','SOCKS5\x20连接失败\x20码','188.114.96.255#优选IP-082','2606:4700::','fillCount','连接超时（SYN\x20被静默丢弃）','&host=','104.16.91.33#优选IP-161','\x20\x20\x20\x20sni:\x20','104.24.12.10',',\x20username=','encryption=none','172.67.174.143#优选IP-176','104.19.123.4#优选IP-045','已保存并生效','188.114.96.151#优选IP-223','type','104.18.37.92#优选IP-024','mixed-in','172.65.11.191#优选IP-122','cf.zhetengsha.eu.org','2c0f:f248::/32','104.17.240.245#优选IP-165','vless','cf.zerone-cdn.pp.ua','172.67.229.44#优选IP-137','104.16.126.96#优选IP-005','udp://223.5.5.5','unknown','ech','some','188.114.97.61#优选IP-164','byteOffset','104.27.113.151#优选IP-101','xPaddingMethod','阿联酋','xPaddingKey','\x20\x20\x20\x20client-fingerprint:\x20chrome','090227','queryInHeader','\x20\x20\x20\x20skip-cert-verify:\x20true','today','every','104.25.62.39#优选IP-265','104.25.161.217#优选IP-140','无法识别的地址类型','subIncludeDefault','162.159.134.174#优选IP-227','random','cloudflare-ip.mofashi.ltd','104.24.18.62#优选IP-289','172.67.127.122#优选IP-237','security','104.21.215.255#优选IP-247','104.18.42.54#优选IP-026','104.16.201.45#优选IP-160','104.18.7.34','pagesFunctionsInvocationsAdaptiveGroups','proxyip.kr.cmliussss.net','stringify','no-store','104.16.124.96#优选IP-003','🐟\x20漏网之鱼','104.21.192.230#优选IP-099','application/octet-stream','&type=','104.19.68.127#优选IP-207','未找到账户数据（检查账户\x20ID\x20与令牌权限）','trim','162.159.236.5#优选IP-065','数据中心','loon','constructor','KIX','104.18.185.26#优选IP-297','region','x-padding-method','geosite-twitter','true','104.27.20.220#优选IP-266','（未指定）','104.25.173.14#优选IP-273','104.21.114.216#优选IP-079','password','websocket','host','login','拉取失败:\x20','172.65.44.103#优选IP-218','decrypt','surfboard','add','message','104.24.168.96#优选IP-130','104.27.207.36#优选IP-098','https://www.wetest.vip/page/cloudflare/address_v6.html','forEach','ADMIN','188.114.97.91#优选IP-134','read','update','172.67.64.211#优选IP-020','未授权（需要管理密码）','104.18.63.107#优选IP-185','104.17.2.7','188.114.96.0/20','xhttp','http\x20timeout','104.21.2.1','text/html;\x20charset=utf-8','map','?name=','application/json;\x20charset=utf-8','_preamble','104.24.244.237#优选IP-075','_quotaCap','headerLength','seal','188.114.99.18#优选IP-047','block','cfApiToken','188.114.97.108#优选IP-203','MB/s','\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20','SOCKS5\x20认证失败','tls','104.16.108.18#优选IP-106','162.159.192.111#优选IP-232','162.159.228.164#优选IP-295','104.25.36.200#优选IP-151','configured','429','明文版','https://cloudflare-dns.com/dns-query','🌐\x20谷歌服务','104.18.18.214#优选IP-172','ceil','fragmentParam','proxyip.nl.cmliussss.net','104.25.18.216#优选IP-198','172.65.134.100#优选IP-103','\x20\x20\x20\x20servername:\x20','菲律宾','config','104.24.0.0/14','104.25.0.1','🌍\x20国外媒体','GET\x20/\x20HTTP/1.1\x0d\x0aHost:\x20','signal','104.25.24.66#优选IP-148','xPaddingObfsMode','getUint8','Cookie','&type=ws','doh\x20unavailable','104.21.57.47#优选IP-112','race','\x20\x20\x20\x20\x20\x20enable:\x20','https://bestcf.pages.dev/random-region/US/100.txt','subUrl','https://bestcf.pages.dev/random-region/JP/100.txt','ALPN','https://dns.alidns.com/resolve','text/plain;\x20charset=utf-8','IPv6','encrypt','endsWith','下载速度','[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a','echHost','geosite-telegram','仅支持\x20POST','writable','6DhlwUd','decode','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','域名-','toLowerCase','https://','104.27.97.130#优选IP-236','104.25.93.154#优选IP-126','103.21.244.0/22','意大利','PROXYIP','2400:cb00::/32','preset','admin','Mozilla/5.0\x20(CFNext)','hasUpdate','172.67.103.87#优选IP-118','104.25.197.107#优选IP-105','v2rayn','104.19.1.1','104.16.11.246#优选IP-163',',\x20ws-headers=Host:','timeout','172.65.64.7#优选IP-037','乌克兰','104.19.106.1#优选IP-110',',\x20password=','BER','104.18.84.180#优选IP-068','tokenish','Host','\x20=\x20vless,\x20','sort','number','preferredDomains','function','SHA-256','CHACHA20-POLY1305','findIndex','trojan://','HOST','CONNECT\x20','ms\x20','104.21.23.1','104.25.20.146#优选IP-100','混淆版','charCodeAt','chacha20poly1305','geosite-cn','sub',',\x20tag=','text/yaml','104.19.78.144#优选IP-184','&security=none','v2ray','importKey','西班牙','172.65.21.190#优选IP-191','alpn','104.25.109.0#优选IP-275','SIN','新西兰','randomUUID','104.18.196.199#优选IP-069','已重置：KV\x20已清空，面板还原为初始部署状态','max','优选IP-S','162.159.19.201#优选IP-158','104.17.234.5#优选IP-018','104.25.113.22#优选IP-243','104.16.132.229#优选IP-007','\x20\x20\x20\x20ech-opts:','\x20\x20\x20\x20tls:\x20true','优选地址','sub://','%20','_ctx','162.159.6.39#优选IP-195','\x20\x20\x20\x20alpn:\x20[http/1.1]','customErr','chacha20-poly1305','fromCharCode','encode','104.25.251.220#优选IP-177','size','info','search','plain','getReader','CF_ACCOUNT_ID','104.27.94.231#优选IP-129','162.159.44.214#优选IP-032','toISOString','188.114.98.91#优选IP-064','104.25.169.144#优选IP-291','162.159.236.19#优选IP-255','爱尔兰','xudp','172.67.159.243#优选IP-242','candidates','parse','葡萄牙','104.17.99.0#优选IP-143','any','binaryType','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','length','values','104.20.15.15','SS\x20分片长度非法\x20','issued','chrome','CHINATELECOM','www.cloudflare.com','172.67.161.136#优选IP-142','href','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','CHINAMOBILE','IP地址',',\x20over-tls=true,\x20tls-host=','104.17.153.58#优选IP-174','value','abort','172.65.173.221#优选IP-051','json','tun0','text/plain','PROBE_ALIVE','104.17.101.139#优选IP-030','172.67.173.89#优选IP-132','104.18.123.15#优选IP-169','104.20.17.160#优选IP-264','HTTP\x20代理\x20CONNECT\x20失败:\x20','set','Proxy-Authorization:\x20Basic\x20','不支持的\x20SS\x20加密方式:\x20','latest','104.21.61.179#优选IP-078','speed.cloudflare.com','104.18.28.48#优选IP-156','PATH','type=xhttp','bestcf.top','104.17.107.217#优选IP-133','5136362mllNyP','104.24.184.158#优选IP-123','104.25.181.74#优选IP-209','_skipIssued','预设源:\x20','188.114.96.64#优选IP-171','saas.sin.fan','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','#原生地址','quanx','subtle','geosite-microsoft','(((.+)+)+)+$','/login?next=','127.0.0.1','mozilla','NaN','join','shift','api','172.67.64.12#优选IP-021','fn.130519.xyz','cdn.tzpro.xyz','\x20\x20\x20\x20udp:\x20true','AES-GCM','resolve','GET','104.17.118.180#优选IP-090','172.67.232.109#优选IP-182','xPaddingPlacement','find','protocol','__proto__','GraphQL:\x20','PAICNI/CFNext','104.27.40.81#优选IP-063','微测网\x20IPv6','https://bestcf.pages.dev/random-region/TW/100.txt','104.25.123.130#优选IP-240','SS\x20连接被关闭','2767536SlIgoC','#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a','proxyip.oracle.cmliussss.net','104.24.34.149#优选IP-279','byteLength','104.25.214.211#优选IP-055','trojanPassword','indexOf','104.21.224.5#优选IP-197','104.16.125.96#优选IP-004','attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext','104.19.246.234#优选IP-280','luma','.list','https://bestcf.pages.dev/random-region/SG/100.txt','name',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','172.65.47.182#优选IP-220','162.159.43.223#优选IP-196','104.16.113.211#优选IP-062','\x20HTTP/1.1\x0d\x0aHost:\x20','HostMonit\x20优选','method','162.159.143.225#优选IP-157','buffer','filter','opened','exec','relay','toString','mixed',',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a','未绑定\x20KV\x20命名空间，无需重置','\x20\x20\x20\x20\x20\x20host:\x20','quantumult','2606:4700::/32','path','prefDomain','isp','getUint16','172.64.145.202#优选IP-088','replace','连接被关闭','172.64.34.109#优选IP-087','\x20\x20-\x20name:\x20','chacha20-ietf-poly1305','172.64.81.44#优选IP-058','104.25.101.186#优选IP-057','subMode','trace','\x20\x20\x20\x20server:\x20','AMS','2405:b500::/32','131.0.72.0/22','toUpperCase','cloudflare.182682.xyz','server','🍎\x20苹果服务','104.17.245.237#优选IP-221','singbox','104.24.54.254#优选IP-044','errors','code','clash','微测网\x20IPv4','geosite-github','query-server-name','cdn.2020111.xyz','Ⓜ️\x20微软服务',',\x20tls=false','172.65.45.102#优选IP-250','104.19.83.33#优选IP-268','172.65.167.52#优选IP-241','digest','stash','nodeLimitCount','172.64.233.36#优选IP-107','\x20\x20\x20\x20\x20\x20mode:\x20','proxyip.se.cmliussss.net','geosite-category-ads-all','done','172.67.255.83#优选IP-114','\x20\x20\x20\x20network:\x20','104.24.46.107#优选IP-274','useCidr','http','188.114.96.89#优选IP-175','freeyx.cloudflare88.eu.org','count','arraybuffer','&alpn=','优选IP-','162.159.26.248#优选IP-252','104.24.230.213#优选IP-109','172.65.139.108#优选IP-224','104.18.144.168#优选IP-259','104.27.27.106#优选IP-292','104.25.245.147#优选IP-083','waitUntil','104.17.46.187#优选IP-173','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','104.16.248.248#优选IP-008','sourceURL','user','优选\x20IP\x20列表','104.19.97.238#优选IP-139','table','🤖\x20OpenAI','TTL','104.27.4.144#优选IP-125','ipv4_only','2.0.0','status','超时/网络错误','proxyip.sg.cmliussss.net','188.114.97.63#优选IP-219','104.24.230.144#优选IP-102','encryption=none&','getUint32','aes-128-gcm','workersInvocationsAdaptive','prototype','quantiles','104.19.247.23#优选IP-147','104.18.28.140#优选IP-095','cdns.doon.eu.org','padStart','cf.090227.xyz','172.67.195.152#优选IP-188','🚀\x20节点选择','gbk','AAAA','162.159.9.18#优选IP-230','security=none','fmt','searchParams','getRandomValues','104.18.194.107#优选IP-228','subarray','flatMap','162.159.228.231#优选IP-260','\x20=\x20trojan,\x20','104.19.214.25#优选IP-073','https',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','pass','188.114.99.114#优选IP-060','direct','only','https://www.cloudflare.com/ips-v6/','src','104.18.141.27#优选IP-121',';\x20charset=utf-8','push','1878015hqjaNH','104.16.77.112#优选IP-214','172.67.131.200#优选IP-248','trojan=','104.25.129.238#优选IP-180','selector','application/dns-json','releaseLock','104.17.195.184#优选IP-135','enableXhttp','IPv4','104.24.51.58#优选IP-138','MAN','://','104.16.0.0/13','104.25.73.92#优选IP-187','polling','x-padding-header','vless://','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','ss-subkey','error','enableVless','104.19.191.31','%3F','utf-8','tcp\x20timeout','kind','\x20\x20\x20\x20port:\x20','162.159.6.246#优选IP-199','cnamefuckxxs.yuchen.icu','9204990KDcTut','172.67.71.106#优选IP-294','enable','subRandomCount','保存失败:\x20','dns-remote','104.16.123.96#优选IP-002','startsWith','proxyip.gb.cmliussss.net','172.65.184.114#优选IP-189','readable','cfip.1323123.xyz','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','lastIndexOf','from','172.67.64.94#优选IP-128','104.17.121.245#优选IP-258','162.159.2.86#优选IP-222','quantumultx','162.159.235.27#优选IP-072','application/json','get','ECH','172.65.118.85#优选IP-267','catch','cname.xirancdn.us','https://1.1.1.1/dns-query','test','wetest_cname','104.19.181.118#优选IP-215','enqueue','requests','aes-256-gcm','SOCKS5\x20握手失败','text','104.18.184.243#优选IP-035','104.17.151.244#优选IP-257','x-padding-placement','wetest_v4','proxyip.jp.cmliussss.net',',\x20ws=true,\x20ws-path=','User-Agent','172.66.161.31#优选IP-084','customPref','label','proxyip.hk.cmliussss.net','162.159.42.67#优选IP-270','172.65.50.167#优选IP-254','104.18.211.8#优选IP-193','172.67.163.14#优选IP-108','then','LHR','nekoray','188.114.96.116#优选IP-054','ips','raw','POST','密码错误','188.114.97.21#优选IP-229','104.16.245.187#优选IP-019','104.16.127.96#优选IP-006','cidr','warn','104.16.128.11','security=tls&sni=','cfip.cfcdn.vip','cfAccountId','\x20=\x20','latency','104.17.0.4#优选IP-234','remote','isArray','min','9oGpwPq','104.19.23.222#优选IP-145','quotaAuto','https://cf.090227.xyz/ip.164746.xyz','enableTrojan','open','188.114.96.1#优选IP-011','limit','104.19.115.243#优选IP-096','echDns','list','unreachable','cloudflare-ech.com','马来西亚','104.25.238.237#优选IP-286','104.25.143.238#优选IP-059','tun-in','slice','surge','103.31.4.0/22','104.17.76.49#优选IP-246','put','4jOmkew','proxyIP','Mozilla/5.0','<tr','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','172.65.45.248#优选IP-290','Upgrade','108.162.192.0/18','split','SOCKS5\x20服务器要求认证但未提供凭据','104.16.223.195#优选IP-056','CF_API_TOKEN','操作超时','all','51071IOmFlb','now','fill','172.65.127.225#优选IP-034','104.17.127.180#优选IP-001','奥地利','澳大利亚','delete','104.17.13.179#优选IP-091','CF优选\x20','preferredIPs','tlsOnly','probeAlive','threads','https://bestcf.pages.dev/random-region/HK/100.txt','bestcf.030101.xyz','proxyip.fi.cmliussss.net','console','104.17.25.173#优选IP-167','141.101.64.0/18','x-padding-obfs-mode','172.64.144.49#优选IP-027','104.19.88.253#优选IP-039'];_0x564d=function(){return _0x39607a;};return _0x564d();}function extractCandidates(_0x53ac65){const _0x8b979a=_0x30a059,_0x46748c=new Set(),_0x4e883e=[],_0x24323a=(_0x402756,_0x534e1f,_0x396251)=>{const _0x1401a9=_0x2153;if(!isValidIp(_0x402756))return;if(_0x46748c[_0x1401a9(0x288)](_0x402756))return;_0x46748c[_0x1401a9(0x383)](_0x402756),_0x4e883e[_0x1401a9(0x1bf)]({'ip':_0x402756,'port':_0x534e1f||0x1bb,'name':_0x396251||''});};parseIPList(_0x53ac65)[_0x8b979a(0x388)](_0x52aab9=>_0x24323a(_0x52aab9['ip'],_0x52aab9[_0x8b979a(0x296)],_0x52aab9[_0x8b979a(0x134)]));const _0x4f28bd=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x3f3d51;while(_0x3f3d51=_0x4f28bd[_0x8b979a(0x140)](_0x53ac65)){const {host:_0x10beb0,port:_0x43430f}=parseHostPort(_0x3f3d51[0x0],0x1bb);if(_0x10beb0)_0x24323a(_0x10beb0,_0x43430f,'');}const _0x16b4bc=/[0-9a-fA-F:]+/g;while(_0x3f3d51=_0x16b4bc[_0x8b979a(0x140)](_0x53ac65)){const _0x575046=_0x3f3d51[0x0];if(_0x575046[_0x8b979a(0x283)](':')&&_0x575046[_0x8b979a(0x246)](':')[_0x8b979a(0xd7)]>=0x3&&isValidIp(_0x575046))_0x24323a(_0x575046,0x1bb,'');}return _0x4e883e;}function extractDomains(_0x2d6e4e){const _0x5b8043=_0x30a059,_0x5d84cb=new Set(),_0x2980c7=[],_0x3aa75f=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x1b58a0;while(_0x1b58a0=_0x3aa75f['exec'](_0x2d6e4e)){const _0x3316b9=_0x1b58a0[0x0][_0x5b8043(0x3d9)]();!_0x5d84cb[_0x5b8043(0x288)](_0x3316b9)&&(_0x3316b9[_0x5b8043(0x283)]('cloudflare')||_0x3316b9[_0x5b8043(0x283)](_0x5b8043(0x280))||_0x3316b9['includes']('182682')||_0x3316b9[_0x5b8043(0x283)](_0x5b8043(0x34e))||_0x3316b9[_0x5b8043(0x3ce)]('.xyz')||_0x3316b9[_0x5b8043(0x3ce)](_0x5b8043(0x2de)))&&(_0x5d84cb['add'](_0x3316b9),_0x2980c7['push'](_0x3316b9));}return _0x2980c7[_0x5b8043(0x239)](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x24880f){const _0x3e8a4a=_0x30a059;_0x24880f=Math[_0x3e8a4a(0xae)](0x1,parseInt(_0x24880f)||0x96);if(Date['now']()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE[_0x3e8a4a(0x215)];const _0x294e53=await fetchTimeout('https://stock.hostmonit.com/CloudFlareYes',{'headers':{'User-Agent':_0x3e8a4a(0x240)}},0x1770);if(_0x294e53&&_0x294e53['ok']){const _0x3e8af6=extractCandidates(await _0x294e53[_0x3e8a4a(0x201)]())[_0x3e8a4a(0x13e)](_0x2e2f2e=>_0x2e2f2e['ip']&&isCloudflareIP(_0x2e2f2e['ip'])),_0x17eee5=new Set(),_0x12ea75=[];for(const _0x23eef4 of _0x3e8af6){if(_0x17eee5['has'](_0x23eef4['ip']))continue;_0x17eee5[_0x3e8a4a(0x383)](_0x23eef4['ip']),_0x12ea75['push'](_0x23eef4);if(_0x12ea75[_0x3e8a4a(0xd7)]>=_0x24880f)break;}return SUBPREF_CACHE['t']=Date[_0x3e8a4a(0x24d)](),SUBPREF_CACHE[_0x3e8a4a(0x215)]=_0x12ea75,_0x12ea75;}return null;}async function collectCandidates(_0x3e6b22){const _0x582787=_0x30a059;_0x3e6b22=_0x3e6b22||{};const _0x4e1358=[],_0x38bb18={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x58afd9=_0x4d7203=>{const _0x1a7011=_0x2153;if(_0x4d7203&&_0x4d7203['ip']&&isCloudflareIP(_0x4d7203['ip']))_0x4e1358['push']({'ip':_0x4d7203['ip'],'port':_0x3e6b22[_0x1a7011(0x296)]||_0x4d7203['port']||0x1bb,'name':_0x4d7203[_0x1a7011(0x134)]||''});};if(_0x3e6b22['source']&&OPTIMIZE_SOURCES[_0x3e6b22[_0x582787(0x2c0)]]){const _0x58fbd9=await fetchTimeout(OPTIMIZE_SOURCES[_0x3e6b22['source']][_0x582787(0x2e1)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1770);if(_0x58fbd9&&_0x58fbd9['ok']){const _0xf11c52=extractCandidates(await _0x58fbd9['text']());_0xf11c52['forEach'](_0x58afd9),_0x38bb18[_0x582787(0x3e1)]=_0xf11c52[_0x582787(0xd7)];}else _0x38bb18[_0x582787(0x322)]=_0x58fbd9?_0x582787(0x2d9)+_0x58fbd9[_0x582787(0x195)]:_0x582787(0x196);}if(_0x3e6b22[_0x582787(0x18b)]){const _0x12c81a=await fetchTimeout(_0x3e6b22['sourceURL'],{'headers':{'User-Agent':_0x582787(0x240)}},0x1770);if(_0x12c81a&&_0x12c81a['ok']){const _0x4c49e8=extractCandidates(await _0x12c81a[_0x582787(0x201)]());_0x4c49e8[_0x582787(0x388)](_0x58afd9),_0x38bb18['custom']=_0x4c49e8[_0x582787(0xd7)];}else _0x38bb18['customErr']=_0x12c81a?'HTTP\x20'+_0x12c81a['status']:'超时/网络错误';}const _0x1a88bb=new Set(),_0x207fd1=[];for(const _0x102d13 of _0x4e1358){if(_0x1a88bb[_0x582787(0x288)](_0x102d13['ip']))continue;_0x1a88bb[_0x582787(0x383)](_0x102d13['ip']),_0x207fd1['push'](_0x102d13);}if(_0x207fd1[_0x582787(0xd7)]<(_0x3e6b22[_0x582787(0x17d)]||0x14)){let _0x40f6c6=(_0x3e6b22[_0x582787(0x17d)]||0x14)-_0x207fd1[_0x582787(0xd7)];try{const _0x5de201=await fetchBestcfPool();for(const _0x56d06d of _0x5de201){if(_0x40f6c6<=0x0)break;if(_0x1a88bb[_0x582787(0x288)](_0x56d06d['ip']))continue;if(!isCloudflareIP(_0x56d06d['ip']))continue;_0x1a88bb[_0x582787(0x383)](_0x56d06d['ip']),_0x207fd1[_0x582787(0x1bf)]({'ip':_0x56d06d['ip'],'port':_0x3e6b22['port']||_0x56d06d[_0x582787(0x296)]||0x1bb,'name':_0x56d06d[_0x582787(0x134)]||''}),_0x40f6c6--;}}catch(_0x2f814e){}_0x38bb18['bestcf']=(_0x3e6b22[_0x582787(0x17d)]||0x14)-_0x207fd1['length']-_0x40f6c6;}if(_0x3e6b22[_0x582787(0x179)]!==![]&&_0x207fd1[_0x582787(0xd7)]<(_0x3e6b22[_0x582787(0x17d)]||0x14)){const _0x2d3691=(_0x3e6b22[_0x582787(0x17d)]||0x14)-_0x207fd1['length'],_0xc9bcb1=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x2d3691*0x3);let _0x4dc2b1=0x0;for(const _0x495477 of _0xc9bcb1){if(_0x4dc2b1>=_0x2d3691)break;if(_0x1a88bb['has'](_0x495477))continue;_0x1a88bb[_0x582787(0x383)](_0x495477),_0x207fd1[_0x582787(0x1bf)]({'ip':_0x495477,'port':_0x3e6b22['port']||0x1bb,'name':''}),_0x4dc2b1++;}_0x38bb18[_0x582787(0x21c)]=_0x4dc2b1;}return{'candidates':_0x207fd1,'stats':_0x38bb18};}function testOneLatency(_0x5cf24a,_0x48bb92,_0x1d29b6){return new Promise(_0x3753be=>{const _0x5a086a=_0x2153,_0x135d5a=Date[_0x5a086a(0x24d)]();let _0x4514a7,_0x2571d0=![];const _0x700e8f=(_0xe113c1,_0xedb767)=>{const _0x545d34=_0x5a086a;if(_0x2571d0)return;_0x2571d0=!![],clearTimeout(_0x45d0c0);try{if(_0x4514a7)_0x4514a7[_0x545d34(0x2a4)]();}catch(_0x1be127){}_0x3753be({'ip':_0x5cf24a,'port':_0x48bb92,'ok':_0xe113c1,'latency':_0xedb767});},_0x45d0c0=setTimeout(()=>_0x700e8f(![],-0x1),_0x1d29b6);try{_0x4514a7=connect({'hostname':_0x5cf24a,'port':_0x48bb92});}catch(_0x3afb0b){return _0x700e8f(![],-0x1);}_0x4514a7[_0x5a086a(0x13f)][_0x5a086a(0x211)](()=>_0x700e8f(!![],Date[_0x5a086a(0x24d)]()-_0x135d5a))['catch'](()=>_0x700e8f(![],-0x1));});}async function runLatencyTest(_0x42df85,_0x306dcd,_0x327697){const _0x51ed1b=_0x30a059;_0x306dcd=Math['max'](0x1,Math[_0x51ed1b(0x227)](0x32,Number(_0x306dcd)||0x5)),_0x327697=Math[_0x51ed1b(0xae)](0x1f4,Number(_0x327697)||0x1388);const _0x3eebda=[];let _0x39a361=0x0;async function _0x5bc018(){const _0x169b6c=_0x51ed1b;while(_0x39a361<_0x42df85[_0x169b6c(0xd7)]){const _0x16a594=_0x42df85[_0x39a361++],_0x2aa754=await testOneLatency(_0x16a594['ip'],_0x16a594['port'],_0x327697);_0x3eebda[_0x169b6c(0x1bf)](_0x2aa754);}}return await Promise['all'](Array[_0x51ed1b(0x1ed)]({'length':_0x306dcd},_0x5bc018)),_0x3eebda[_0x51ed1b(0x3f5)]((_0x24edf2,_0x35571e)=>(_0x24edf2[_0x51ed1b(0x223)]<0x0?0x3b9aca00:_0x24edf2[_0x51ed1b(0x223)])-(_0x35571e[_0x51ed1b(0x223)]<0x0?0x3b9aca00:_0x35571e[_0x51ed1b(0x223)])),_0x3eebda;}function xhttpPadding(_0x1848ad){const _0x5b6a75=_0x30a059,_0x16aff4=_0x1848ad['uuid']||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x5b6a75(0x3f2),'xPaddingPlacement':_0x5b6a75(0x34f),'xPaddingHeader':_0x16aff4[_0x5b6a75(0x239)](0x1,0x7),'xPaddingKey':'_'+_0x16aff4[_0x5b6a75(0x239)](0x19,0x1f)};}function uriFragName(_0x22111b){const _0x13a4a7=_0x30a059;return String(_0x22111b)[_0x13a4a7(0x14e)](/%/g,'%25')[_0x13a4a7(0x14e)](/#/g,'%23')[_0x13a4a7(0x14e)](/\?/g,_0x13a4a7(0x1d8))['replace'](/ /g,_0x13a4a7(0xb8));}function vlessNode(_0xcdfb09,_0x5964b5,_0x26bdf8,_0x42ee89,_0x597b17={}){const _0x1133d4=_0x30a059,_0x2e1965=_0xcdfb09[_0x1133d4(0x37d)],_0xc0ba20=_0x5964b5[_0x1133d4(0x283)](':')&&!_0x5964b5[_0x1133d4(0x1e6)]('[')?'['+_0x5964b5+']':_0x5964b5,_0x4254ab=!HTTP_PORTS[_0x1133d4(0x288)](Number(_0x26bdf8)),_0x12262e=encodeURIComponent;let _0x3149c5=_0x1133d4(0x333);if(_0x4254ab)_0x3149c5+=_0x1133d4(0x318)+_0x12262e(_0x2e1965)+'&fp=chrome';else _0x3149c5+=_0x1133d4(0xa2);_0x3149c5+=_0x1133d4(0x32e)+_0x12262e(_0x2e1965);if(_0x597b17['type']===_0x1133d4(0x392)&&_0x4254ab)_0x3149c5+='&type=xhttp&mode=stream-one',_0x3149c5+='&extra='+_0x12262e(JSON[_0x1133d4(0x363)](xhttpPadding(_0xcdfb09)));else _0x3149c5+=_0x1133d4(0x3c1);_0x3149c5+='&path='+_0x12262e('/'+_0xcdfb09[_0x1133d4(0x149)]);if(_0xcdfb09[_0x1133d4(0xa7)])_0x3149c5+='&alpn='+_0x12262e(_0xcdfb09[_0x1133d4(0xa7)]);return _0xcdfb09[_0x1133d4(0x345)]&&(_0x3149c5+=_0x1133d4(0x275)+_0x12262e((_0xcdfb09[_0x1133d4(0x3d1)]||_0x1133d4(0x234))+'+'+(_0xcdfb09[_0x1133d4(0x231)]||_0x1133d4(0x31c)))),_0x1133d4(0x1d2)+_0xcdfb09[_0x1133d4(0x325)]+'@'+_0xc0ba20+':'+_0x26bdf8+'?'+_0x3149c5+'#'+uriFragName(_0x42ee89);}function trojanNode(_0x35ea73,_0x10d78b,_0x6c785d,_0x585811){const _0x40098d=_0x30a059,_0x2a6ff1=_0x35ea73[_0x40098d(0x37d)],_0x46c109=_0x10d78b[_0x40098d(0x283)](':')&&!_0x10d78b[_0x40098d(0x1e6)]('[')?'['+_0x10d78b+']':_0x10d78b,_0x12439c=encodeURIComponent,_0xba22d8=!HTTP_PORTS[_0x40098d(0x288)](Number(_0x6c785d));let _0x14c211=_0xba22d8?_0x40098d(0x21f)+_0x12439c(_0x2a6ff1)+_0x40098d(0x263)+_0x12439c(_0x2a6ff1)+_0x40098d(0x2e5)+_0x12439c('/'+_0x35ea73[_0x40098d(0x149)]):'security=none&host='+_0x12439c(_0x2a6ff1)+'&type=ws&path='+_0x12439c('/'+_0x35ea73[_0x40098d(0x149)]);if(_0x35ea73[_0x40098d(0xa7)]&&_0xba22d8)_0x14c211+=_0x40098d(0x17f)+_0x12439c(_0x35ea73[_0x40098d(0xa7)]);if(_0x35ea73[_0x40098d(0x345)]&&_0xba22d8)_0x14c211+=_0x40098d(0x275)+_0x12439c((_0x35ea73[_0x40098d(0x3d1)]||'cloudflare-ech.com')+'+'+(_0x35ea73[_0x40098d(0x231)]||_0x40098d(0x31c)));return _0x40098d(0x94)+(_0x35ea73['trojanPassword']||_0x35ea73['uuid'])+'@'+_0x46c109+':'+_0x6c785d+'?'+_0x14c211+'#'+uriFragName(_0x585811);}const DNH_CACHE=new Map();function fetchTimeout(_0x255686,_0x2cdafb,_0x4df43a){return new Promise(_0x4ce254=>{const _0x2a30d3=_0x2153,_0x524028=new AbortController(),_0x2ce0d1=setTimeout(()=>_0x524028[_0x2a30d3(0xe7)](),_0x4df43a);fetch(_0x255686,Object[_0x2a30d3(0x300)]({},_0x2cdafb,{'signal':_0x524028[_0x2a30d3(0x3bc)]}))[_0x2a30d3(0x211)](_0x43975e=>{clearTimeout(_0x2ce0d1),_0x4ce254(_0x43975e);})[_0x2a30d3(0x1f7)](()=>{clearTimeout(_0x2ce0d1),_0x4ce254(null);});});}async function resolvePreferredDomains(_0x459663,_0x363139=0x64,_0x475498=0x12c,_0xb6dd4a=![],_0x3f88cd=!![],_0x2319bf=![]){const _0x8ad818=_0x30a059,_0x1d1649=String(_0x459663||'')[_0x8ad818(0x246)](/[\n,;]+/)[_0x8ad818(0x396)](_0x2b0b50=>_0x2b0b50[_0x8ad818(0x36c)]()[_0x8ad818(0x14e)](/^\*\./,''))[_0x8ad818(0x13e)](Boolean),_0x10e3c6=Date['now'](),_0x48e8d2=[_0x8ad818(0x3ad),_0x8ad818(0x3ca)],_0x3f3cd0=async(_0x4997ba,_0x2ea2e3,_0xcd0cfd)=>{const _0x4b29f0=_0x8ad818,_0x16cb73=_0x48e8d2[_0x4b29f0(0x396)](async _0x29717f=>{const _0x5df063=_0x4b29f0,_0x30f5cd=await fetchTimeout(_0x29717f+_0x5df063(0x397)+encodeURIComponent(_0x4997ba)+_0x5df063(0x369)+_0x2ea2e3,{'headers':{'accept':_0x5df063(0x1c6)}},0xfa0);if(!_0x30f5cd||!_0x30f5cd['ok'])throw new Error(_0x5df063(0x3c2));const _0x562a02=await _0x30f5cd[_0x5df063(0xe9)](),_0x549b0a=(_0x562a02[_0x5df063(0x2c7)]||[])[_0x5df063(0x13e)](_0x1e3bda=>_0x1e3bda[_0x5df063(0x338)]===_0xcd0cfd&&(_0x2ea2e3==='A'?/^\d+\.\d+\.\d+\.\d+$/[_0x5df063(0x1fa)](_0x1e3bda['data']):/^[0-9a-fA-F:]+$/[_0x5df063(0x1fa)](_0x1e3bda[_0x5df063(0x2a3)])))[_0x5df063(0x396)](_0x7bc1cf=>_0x7bc1cf[_0x5df063(0x2a3)]);if(!_0x549b0a[_0x5df063(0xd7)])throw new Error(_0x5df063(0x298));return _0x549b0a;});try{return await Promise[_0x4b29f0(0xd4)](_0x16cb73);}catch(_0x4ced17){return[];}},_0xb66c63=await Promise[_0x8ad818(0x24b)](_0x1d1649[_0x8ad818(0x396)](async _0x2048d1=>{const _0x33f44b=_0x8ad818;if(_0x2048d1[_0x33f44b(0x283)](_0x33f44b(0x1cd))){if(_0x2048d1['startsWith'](_0x33f44b(0xb7))){let _0x33ab7d=_0x2048d1['slice'](0x6);if(/^[A-Za-z0-9+/=]+$/[_0x33f44b(0x1fa)](_0x33ab7d)&&_0x33ab7d[_0x33f44b(0xd7)]%0x4===0x0)try{const _0x2cf25a=atob(_0x33ab7d);if(/^https?:\/\//i[_0x33f44b(0x1fa)](_0x2cf25a))_0x33ab7d=_0x2cf25a;}catch(_0x151a96){}if(!/^https?:\/\//i['test'](_0x33ab7d))_0x33ab7d=_0x33f44b(0x3da)+_0x33ab7d;_0x2048d1=_0x33ab7d;}const _0x39b6b4='url:'+_0x2048d1+(_0xb6dd4a?_0x33f44b(0x2e3):'')+(_0x3f88cd?'':'|raw'),_0x5215a0=DNH_CACHE['get'](_0x39b6b4);if(_0x5215a0&&_0x10e3c6-_0x5215a0['t']<0xa*0x3c*0x3e8)return _0x5215a0['ips'][_0x33f44b(0x239)](0x0,_0x363139);try{const _0x143e48=await fetchTimeout(_0x2048d1,{},0x1770);if(!_0x143e48||!_0x143e48['ok'])throw new Error(_0x33f44b(0x233));const _0xf536f9=decodeUtf8OrGbk(await _0x143e48['arrayBuffer']());let _0x21c292=_0xf536f9;if(/^[A-Za-z0-9+/=\s]{40,}$/[_0x33f44b(0x1fa)](_0x21c292[_0x33f44b(0x239)](0x0,0x7d0))&&_0x21c292['replace'](/\s+/g,'')[_0x33f44b(0xd7)]%0x4===0x0)try{const _0x4859a5=atob(_0x21c292[_0x33f44b(0x14e)](/\s+/g,''));_0x21c292=decodeUtf8OrGbk(Uint8Array['from'](_0x4859a5,_0x2a0cce=>_0x2a0cce[_0x33f44b(0x9b)](0x0)));}catch(_0x3e40a2){}const _0x75f27f=new Set(),_0x481de7={},_0x4fdb7b=[],_0x286568=isTrustedRegionPool(_0x2048d1),_0xa64345=_0x2630f0=>!_0x3f88cd||isCloudflareIP(_0x2630f0)||_0x286568,_0x398066=_0x21c292['trim']()[_0x33f44b(0x246)](/\r?\n/)[_0x33f44b(0x396)](_0x27fe0d=>_0x27fe0d[_0x33f44b(0x36c)]())['filter'](Boolean);if(_0x398066[_0x33f44b(0xd7)]>0x1&&_0x398066[0x0][_0x33f44b(0x283)](',')){const _0x175e3a=_0x398066[0x0][_0x33f44b(0x246)](',')[_0x33f44b(0x396)](_0x4dff89=>_0x4dff89['trim']()),_0x3003ec=_0x175e3a[_0x33f44b(0x283)](_0x33f44b(0xe3))&&_0x175e3a[_0x33f44b(0x283)]('端口'),_0x31fbf8=_0x175e3a[_0x33f44b(0x346)](_0x594d2a=>_0x594d2a['includes']('IP'))&&_0x175e3a[_0x33f44b(0x346)](_0x5e3804=>_0x5e3804['includes']('延迟'))&&_0x175e3a[_0x33f44b(0x346)](_0x40d844=>_0x40d844[_0x33f44b(0x283)](_0x33f44b(0x3cf)));if(_0x3003ec||_0x31fbf8){const _0x1c7afd=_0x175e3a['findIndex'](_0x1c6e6f=>_0x1c6e6f[_0x33f44b(0x283)]('IP')),_0x4fa967=_0x175e3a['indexOf']('端口'),_0x18c6d4=_0x175e3a[_0x33f44b(0x93)](_0x56d2cb=>_0x56d2cb[_0x33f44b(0x283)]('延迟')),_0x4e250d=_0x175e3a[_0x33f44b(0x93)](_0x34eb59=>_0x34eb59[_0x33f44b(0x283)](_0x33f44b(0x3cf))),_0x59eb6b=_0x175e3a[_0x33f44b(0x12c)]('国家')>-0x1?_0x175e3a[_0x33f44b(0x12c)]('国家'):_0x175e3a['indexOf']('城市')>-0x1?_0x175e3a[_0x33f44b(0x12c)]('城市'):_0x175e3a[_0x33f44b(0x12c)](_0x33f44b(0x36e)),_0x5c3f5b=_0x175e3a[_0x33f44b(0x12c)]('TLS');for(const _0x190605 of _0x398066[_0x33f44b(0x239)](0x1)){if(_0x4fdb7b[_0x33f44b(0xd7)]>=_0x363139)break;const _0x27d8f6=_0x190605[_0x33f44b(0x246)](',')[_0x33f44b(0x396)](_0x2afaf7=>_0x2afaf7[_0x33f44b(0x36c)]());if(_0x5c3f5b!==-0x1&&_0x27d8f6[_0x5c3f5b]&&_0x27d8f6[_0x5c3f5b]['toLowerCase']()!==_0x33f44b(0x376))continue;const _0x294bf6=_0x27d8f6[_0x1c7afd]||'',_0x3ad42a=_0x294bf6['match'](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0x3ad42a)continue;const _0x407ca8=_0x3ad42a[0x1]['replace'](/^\[|\]$/g,''),_0x845398=_0x4fa967!==-0x1&&_0x27d8f6[_0x4fa967]?parseInt(_0x27d8f6[_0x4fa967]):0x1bb,_0x31e527=_0x407ca8+':'+_0x845398;if(_0x75f27f['has'](_0x31e527))continue;if(!_0xa64345(_0x407ca8))continue;_0x75f27f[_0x33f44b(0x383)](_0x31e527);let _0x459f38=_0x59eb6b!==-0x1&&_0x27d8f6[_0x59eb6b]?_0x27d8f6[_0x59eb6b]:'';if(!_0x459f38&&_0x18c6d4!==-0x1&&_0x4e250d!==-0x1)_0x459f38=_0x33f44b(0x255)+(_0x27d8f6[_0x18c6d4]||'')+_0x33f44b(0x97)+(_0x27d8f6[_0x4e250d]||'')+_0x33f44b(0x3a2);if(_0x459f38)_0x481de7[_0x459f38]=(_0x481de7[_0x459f38]||0x0)+0x1,_0x4fdb7b['push']({'ip':_0x407ca8,'port':_0x845398,'name':_0x459f38+'-'+String(_0x481de7[_0x459f38])[_0x33f44b(0x1a3)](0x2,'0'),..._0x286568?{'relay':!![]}:{}});else _0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x407ca8,'port':_0x845398,'name':'',..._0x286568?{'relay':!![]}:{}});}return DNH_CACHE[_0x33f44b(0xf2)](_0x39b6b4,{'t':_0x10e3c6,'ips':_0x4fdb7b}),_0x4fdb7b[_0x33f44b(0x239)]();}}if(_0x21c292[_0x33f44b(0x283)](_0x33f44b(0x241))&&_0x21c292[_0x33f44b(0x283)](_0x33f44b(0x2e7))){for(const _0x4e3cea of _0x21c292[_0x33f44b(0x27b)](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x4fdb7b[_0x33f44b(0xd7)]>=_0x363139)break;const _0xa9cbeb={};for(const _0x1f05b9 of _0x4e3cea[_0x33f44b(0x27b)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x43b1a0=_0x1f05b9['match'](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x43b1a0)_0xa9cbeb[_0x43b1a0[0x1]]=_0x43b1a0[0x2][_0x33f44b(0x14e)](/<[^>]+>/g,'')[_0x33f44b(0x36c)]();}const _0x36932a=(_0xa9cbeb[_0x33f44b(0xb6)]||'')[_0x33f44b(0x27b)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x36932a)continue;const _0x16386e=_0x36932a[0x1],_0x117c01=_0x36932a[0x2]?parseInt(_0x36932a[0x2]):0x1bb,_0x5bdea2=_0x16386e+':'+_0x117c01;if(_0x75f27f['has'](_0x5bdea2))continue;if(!_0xa64345(_0x16386e))continue;_0x75f27f[_0x33f44b(0x383)](_0x5bdea2);const _0x4451dc=(_0xa9cbeb['线路名称']||_0xa9cbeb['数据中心']||'线路')['trim']();if(_0x4451dc)_0x481de7[_0x4451dc]=(_0x481de7[_0x4451dc]||0x0)+0x1,_0x4fdb7b['push']({'ip':_0x16386e,'port':_0x117c01,'name':_0x4451dc+'-'+String(_0x481de7[_0x4451dc])['padStart'](0x2,'0'),..._0x286568?{'relay':!![]}:{}});else _0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x16386e,'port':_0x117c01,'name':'',..._0x286568?{'relay':!![]}:{}});}return DNH_CACHE['set'](_0x39b6b4,{'t':_0x10e3c6,'ips':_0x4fdb7b}),_0x4fdb7b[_0x33f44b(0x239)]();}for(const _0x59dea2 of _0x21c292[_0x33f44b(0x246)](/\r?\n/)){if(_0x4fdb7b[_0x33f44b(0xd7)]>=_0x363139)break;const _0x593866=_0x59dea2['match'](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x593866)continue;const _0x5271ab=_0x593866[0x1][_0x33f44b(0x14e)](/^\[|\]$/g,''),_0x1c050f=_0x593866[0x2]?parseInt(_0x593866[0x2]):0x1bb,_0xb79b2=_0x5271ab+':'+_0x1c050f;if(_0x75f27f[_0x33f44b(0x288)](_0xb79b2))continue;if(!_0xa64345(_0x5271ab))continue;_0x75f27f[_0x33f44b(0x383)](_0xb79b2);let _0x3775b2='';const _0x55e760=_0x59dea2[_0x33f44b(0x12c)]('#');if(_0x55e760>=0x0)try{_0x3775b2=decodeURIComponent(_0x59dea2['slice'](_0x55e760+0x1)[_0x33f44b(0x36c)]());}catch(_0x120f7f){_0x3775b2=_0x59dea2[_0x33f44b(0x239)](_0x55e760+0x1)[_0x33f44b(0x36c)]();}if(_0x3775b2)_0x481de7[_0x3775b2]=(_0x481de7[_0x3775b2]||0x0)+0x1,_0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x5271ab,'port':_0x1c050f,'name':_0x3775b2+'-'+String(_0x481de7[_0x3775b2])['padStart'](0x2,'0'),..._0x286568?{'relay':!![]}:{}});else _0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x5271ab,'port':_0x1c050f,'name':'',..._0x286568?{'relay':!![]}:{}});}for(const _0x4a1b94 of _0x21c292[_0x33f44b(0x246)](/\r?\n/)){if(_0x4fdb7b['length']>=_0x363139)break;const _0x546dff=_0x4a1b94[_0x33f44b(0x27b)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x546dff)continue;const _0x1d4cc6=_0x546dff[0x1],_0x1422fd=_0x546dff[0x2]?parseInt(_0x546dff[0x2]):0x1bb,_0x591005=_0x1d4cc6+':'+_0x1422fd;if(_0x75f27f[_0x33f44b(0x288)](_0x591005))continue;if(!_0xa64345(_0x1d4cc6))continue;_0x75f27f[_0x33f44b(0x383)](_0x591005);const _0x3723a9=(_0x546dff[0x3]||'')[_0x33f44b(0x36c)]();if(_0x3723a9&&!/[\u4e00-\u9fa5]/[_0x33f44b(0x1fa)](_0x3723a9)&&!_0x3723a9[_0x33f44b(0x283)]('|')){_0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x1d4cc6,'port':_0x1422fd,'name':_0x3723a9,..._0x286568?{'relay':!![]}:{}});continue;}let _0x3b8f6d='';if(_0x546dff[0x3]){const _0x32e443=_0x546dff[0x3][_0x33f44b(0x27b)](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x32e443){const _0x31193b=_0x32e443[0x0][_0x33f44b(0x27b)](/[\u4e00-\u9fa5]{2,5}/);if(_0x31193b)_0x3b8f6d=_0x31193b[0x0];}else{const _0x397274=_0x546dff[0x3][_0x33f44b(0x246)]('|')[_0x33f44b(0x396)](_0x4cebd2=>_0x4cebd2[_0x33f44b(0x36c)]()),_0x389a80=_0x397274[_0x33f44b(0x11b)](_0xb17e91=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/['test'](_0xb17e91));if(_0x389a80){const _0x36dcc2=_0x389a80['match'](/[\u4e00-\u9fa5]{2,5}/);if(_0x36dcc2)_0x3b8f6d=_0x36dcc2[0x0];}else{const _0x22c18e=_0x397274[_0x33f44b(0x11b)](_0xc2fa75=>/^[\u4e00-\u9fa5]{2,5}$/[_0x33f44b(0x1fa)](_0xc2fa75)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x33f44b(0x1fa)](_0xc2fa75));if(_0x22c18e)_0x3b8f6d=_0x22c18e;else{const _0x3b9dc9=_0x546dff[0x3]['match'](/\b([A-Z]{2})\b/);if(_0x3b9dc9)_0x3b8f6d=REGION_CN[_0x3b9dc9[0x1]]||_0x3b9dc9[0x1];}}}}if(_0x3b8f6d)_0x481de7[_0x3b8f6d]=(_0x481de7[_0x3b8f6d]||0x0)+0x1,_0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x1d4cc6,'port':_0x1422fd,'name':_0x3b8f6d+'-'+String(_0x481de7[_0x3b8f6d])[_0x33f44b(0x1a3)](0x2,'0'),..._0x286568?{'relay':!![]}:{}});else _0x4fdb7b['push']({'ip':_0x1d4cc6,'port':_0x1422fd,'name':'',..._0x286568?{'relay':!![]}:{}});}if(!_0x4fdb7b[_0x33f44b(0xd7)]&&_0xb6dd4a){const _0x1f4418=(String(_0x2048d1)[_0x33f44b(0x27b)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x2048d1)['replace'](/^https?:\/\//,'')[_0x33f44b(0x246)]('.')[0x0];if(REGION_CN[_0x1f4418]){const _0x4e2f11=randomIPsFromCidrs(_0x2319bf?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x363139);_0x4e2f11['forEach']((_0x112304,_0x316f7d)=>_0x4fdb7b[_0x33f44b(0x1bf)]({'ip':_0x112304,'port':0x1bb,'name':REGION_CN[_0x1f4418]+'-'+String(_0x316f7d+0x1)[_0x33f44b(0x1a3)](0x2,'0')}));}}return DNH_CACHE[_0x33f44b(0xf2)](_0x39b6b4,{'t':_0x10e3c6,'ips':_0x4fdb7b}),_0x4fdb7b['slice']();}catch(_0x28336c){const _0x3180c9=DNH_CACHE[_0x33f44b(0x1f4)](_0x39b6b4);if(_0x3180c9&&_0x3180c9[_0x33f44b(0x215)]&&_0x3180c9[_0x33f44b(0x215)][_0x33f44b(0xd7)])return _0x3180c9['ips'][_0x33f44b(0x239)](0x0,_0x363139);return[];}}if(!_0x2048d1['includes'](_0x33f44b(0x1cd))&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x33f44b(0x1fa)](_0x2048d1)){const _0x525385=_0x2048d1[_0x33f44b(0x27b)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x525385)return[];const _0x162b7a=_0x525385[0x1][_0x33f44b(0x14e)](/^\[|\]$/g,''),_0x97807d=_0x525385[0x2]?parseInt(_0x525385[0x2]):0x1bb,_0x380aab=(_0x525385[0x3]||'')[_0x33f44b(0x36c)](),_0x3a0fc1=isValidIp(_0x162b7a);if(!_0x3a0fc1&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0x162b7a))return[];if(_0x3f88cd&&_0x3a0fc1&&!isCloudflareIP(_0x162b7a))return[];if(_0x380aab)return[{'ip':_0x162b7a,'port':_0x97807d,'name':_0x380aab}];if(_0x3a0fc1)return[{'ip':_0x162b7a,'port':_0x97807d,'name':''}];}const _0x1882ae=DNH_CACHE['get'](_0x2048d1);if(_0x1882ae&&_0x10e3c6-_0x1882ae['t']<0xa*0x3c*0x3e8)return _0x1882ae['ips'][_0x33f44b(0x239)](0x0,_0x363139)[_0x33f44b(0x396)]((_0x90c0ea,_0xdc5fab)=>({'ip':_0x90c0ea,'port':0x1bb,'name':_0x2048d1+'-'+(_0xdc5fab+0x1)}));const _0x3e0eb0=await _0x3f3cd0(_0x2048d1,'A',0x1);let _0x5f5295=_0x3f88cd?_0x3e0eb0['filter'](isCloudflareIP):_0x3e0eb0;if(_0x2319bf){const _0x40794c=await _0x3f3cd0(_0x2048d1,'AAAA',0x1c);_0x5f5295=[...new Set(_0x3e0eb0['concat'](_0x40794c))]['filter'](_0x147e49=>_0x3f88cd?isCloudflareIP(_0x147e49):!![]);}_0x5f5295=_0x5f5295['slice'](0x0,_0x363139);if(!_0x5f5295['length']){if(_0x1882ae&&_0x1882ae[_0x33f44b(0x215)]&&_0x1882ae['ips'][_0x33f44b(0xd7)])return _0x1882ae[_0x33f44b(0x215)]['slice'](0x0,_0x363139)[_0x33f44b(0x396)]((_0x178ba3,_0x352418)=>({'ip':_0x178ba3,'port':0x1bb,'name':_0x2048d1+'-'+(_0x352418+0x1)}));return[];}return DNH_CACHE[_0x33f44b(0xf2)](_0x2048d1,{'t':_0x10e3c6,'ips':_0x5f5295}),_0x5f5295['map']((_0x17cebe,_0x3ef07f)=>({'ip':_0x17cebe,'port':0x1bb,'name':_0x2048d1+'-'+(_0x3ef07f+0x1)}));})),_0x3b3085=[];let _0xa4a882=0x0;while(_0xa4a882<_0x475498){let _0x2f5da9=![];for(const _0x4d0431 of _0xb66c63){if(_0xa4a882>=_0x475498)break;_0x4d0431[_0x8ad818(0xd7)]&&(_0x3b3085[_0x8ad818(0x1bf)](_0x4d0431['shift']()),_0xa4a882++,_0x2f5da9=!![]);}if(!_0x2f5da9)break;}return _0x3b3085;}async function buildNodes(_0x27d6d1,_0x26175b=0x320,_0x5841e1=null){const _0x3065df=_0x30a059,_0x1071a4=[],_0x306316=new Set(),_0x161320=_0x27d6d1[_0x3065df(0x2a5)]&&_0x27d6d1[_0x3065df(0x2a5)][_0x3065df(0x155)]||'',_0xcb155c=_0x27d6d1[_0x3065df(0x13e)]&&_0x27d6d1[_0x3065df(0x13e)][_0x3065df(0x2e0)]||[],_0x5d4304=_0xcb155c[_0x3065df(0x283)](_0x3065df(0x3cc)),_0x785165=_0xcb155c[_0x3065df(0xd7)]===0x1&&_0xcb155c[0x0]===_0x3065df(0x3cc),_0x527df2=_0x785165?OFFICIAL_V6_CIDRS:_0x5d4304?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x212160=_0x161320==='custom'&&!(_0x27d6d1[_0x3065df(0x2a5)]&&_0x27d6d1[_0x3065df(0x2a5)]['subIncludeDefault']),_0x531cd7=_0x161320===_0x3065df(0x268)||_0x161320===_0x3065df(0x358),_0x564142=(_0x98a57e,_0x5badc0,_0x27d6c5,_0x5617b6)=>{const _0x3ec5cd=_0x3065df;if(_0x1071a4[_0x3ec5cd(0xd7)]>=_0x26175b)return;if(isValidIp(_0x98a57e)&&!isCloudflareIP(_0x98a57e)&&!_0x212160&&!_0x5617b6)return;const _0x157766=_0x98a57e+':'+_0x5badc0;if(_0x306316[_0x3ec5cd(0x288)](_0x157766))return;_0x306316[_0x3ec5cd(0x383)](_0x157766);const _0x240ad0=!HTTP_PORTS[_0x3ec5cd(0x288)](Number(_0x5badc0));if(_0x27d6d1[_0x3ec5cd(0x257)]&&!_0x240ad0)return;const _0x53c4e9=Number(_0x5badc0);if(_0x27d6d1[_0x3ec5cd(0x1d6)])_0x1071a4[_0x3ec5cd(0x1bf)](vlessNode(_0x27d6d1,_0x98a57e,_0x53c4e9,_0x27d6c5));if(_0x27d6d1[_0x3ec5cd(0x22c)])_0x1071a4['push'](trojanNode(_0x27d6d1,_0x98a57e,_0x240ad0?_0x53c4e9:Number(_0x5badc0),_0x27d6c5));if(_0x27d6d1[_0x3ec5cd(0x1c9)]&&_0x240ad0)_0x1071a4[_0x3ec5cd(0x1bf)](vlessNode(_0x27d6d1,_0x98a57e,_0x53c4e9,_0x27d6c5,{'type':_0x3ec5cd(0x392)}));},_0x5e3dee=(_0x227f41,_0x3f48ea,_0x50f414,_0xbbd280)=>{_0x564142(_0x227f41,Number(_0x3f48ea)||0x1bb,_0x50f414,_0xbbd280);};if(_0x161320===_0x3065df(0x358)){let _0xa50ece=Math[_0x3065df(0x227)](Math[_0x3065df(0xae)](parseInt(_0x27d6d1['optimizer'][_0x3065df(0x1e2)])||0x10,0x1),Math[_0x3065df(0x227)](0x63,_0x26175b));if(_0x27d6d1[_0x3065df(0x2dc)]){const _0x3a2d26=parseInt(_0x27d6d1[_0x3065df(0x170)])||0x0;if(_0x3a2d26>0x0)_0xa50ece=Math[_0x3065df(0x227)](Math[_0x3065df(0xae)](_0xa50ece,_0x3a2d26),_0x26175b);}const _0x5971d1=(_0x27d6d1['enableVless']?0x1:0x0)+(_0x27d6d1[_0x3065df(0x22c)]?0x1:0x0)+(_0x27d6d1['enableXhttp']?0x1:0x0)||0x1;let _0x2c8dc2=0x0;const _0x3cc5fe=randomIPsFromCidrs(_0x527df2,Math[_0x3065df(0x3b0)](_0xa50ece/_0x5971d1)*0x3);let _0xcfecd6=_0x3cc5fe;if(_0x5841e1){const _0x570bf2=_0x3cc5fe['filter'](_0x25ea46=>!_0x5841e1[_0x3065df(0x288)](_0x25ea46)),_0x2ed1b2=_0x3cc5fe[_0x3065df(0x13e)](_0x166b07=>_0x5841e1[_0x3065df(0x288)](_0x166b07));_0xcfecd6=[..._0x570bf2,..._0x2ed1b2];}for(const _0x3980ed of _0xcfecd6){if(_0x2c8dc2>=_0xa50ece)break;_0x27d6d1['enableVless']&&(_0x1071a4[_0x3065df(0x1bf)](vlessNode(_0x27d6d1,_0x3980ed,0x1bb,_0x3065df(0x180)+String(_0x2c8dc2+0x1)[_0x3065df(0x1a3)](0x2,'0'))),_0x2c8dc2++);if(_0x2c8dc2>=_0xa50ece)break;_0x27d6d1[_0x3065df(0x22c)]&&(_0x1071a4['push'](trojanNode(_0x27d6d1,_0x3980ed,0x1bb,_0x3065df(0x180)+String(_0x2c8dc2+0x1)[_0x3065df(0x1a3)](0x2,'0'))),_0x2c8dc2++);if(_0x2c8dc2>=_0xa50ece)break;_0x27d6d1[_0x3065df(0x1c9)]&&(_0x1071a4[_0x3065df(0x1bf)](vlessNode(_0x27d6d1,_0x3980ed,0x1bb,_0x3065df(0x180)+String(_0x2c8dc2+0x1)[_0x3065df(0x1a3)](0x2,'0'),{'type':'xhttp'})),_0x2c8dc2++);}return _0x1071a4;}const _0x5b615e=String(_0x27d6d1[_0x3065df(0x3f7)]||'')[_0x3065df(0x246)](/[\n,;]+/)[_0x3065df(0x396)](_0x5e426c=>_0x5e426c['trim']())[_0x3065df(0x13e)](_0x3df141=>_0x3df141&&!_0x3df141[_0x3065df(0x283)](_0x3065df(0x1cd)));_0x5b615e[_0x3065df(0x388)]((_0x37513d,_0x4850a4)=>{const _0x2c52ea=_0x3065df,_0x3f588c=_0x37513d[_0x2c52ea(0x12c)]('#'),_0x389387=(_0x3f588c>=0x0?_0x37513d[_0x2c52ea(0x239)](0x0,_0x3f588c):_0x37513d)['trim'](),_0x45adc5=(_0x3f588c>=0x0?_0x37513d[_0x2c52ea(0x239)](_0x3f588c+0x1):'')['trim'](),_0x42c043=parseHostPort(_0x389387,0x1bb);if(_0x42c043[_0x2c52ea(0x37d)][_0x2c52ea(0x1e6)]('*.'))return;_0x5e3dee(_0x42c043[_0x2c52ea(0x37d)],_0x42c043[_0x2c52ea(0x296)],_0x45adc5||'优选IP-'+String(_0x4850a4+0x1)[_0x2c52ea(0x1a3)](0x2,'0'));});let _0x1c3b4b=_0x27d6d1[_0x3065df(0x256)]||[];if(_0x5d4304&&!_0x785165&&_0x1c3b4b[_0x3065df(0xd7)]>0x1){const _0x51a7b1=[],_0x48d443=[];for(const _0x576ae8 of _0x1c3b4b)(String(_0x576ae8['ip'])[_0x3065df(0x12c)](':')>=0x0?_0x48d443:_0x51a7b1)['push'](_0x576ae8);const _0x5c5d8c=[],_0xa9c6e1=Math[_0x3065df(0xae)](_0x51a7b1['length'],_0x48d443[_0x3065df(0xd7)]);for(let _0x57a4e9=0x0;_0x57a4e9<_0xa9c6e1;_0x57a4e9++){if(_0x57a4e9<_0x51a7b1[_0x3065df(0xd7)])_0x5c5d8c[_0x3065df(0x1bf)](_0x51a7b1[_0x57a4e9]);if(_0x57a4e9<_0x48d443[_0x3065df(0xd7)])_0x5c5d8c[_0x3065df(0x1bf)](_0x48d443[_0x57a4e9]);}_0x1c3b4b=_0x5c5d8c;}_0x1c3b4b[_0x3065df(0x388)]((_0x5f5cd5,_0x2dfe55)=>{const _0x2fcb50=_0x3065df;_0x5e3dee(_0x5f5cd5['ip'],_0x5f5cd5[_0x2fcb50(0x296)]||0x1bb,_0x5f5cd5[_0x2fcb50(0x134)]||_0x2fcb50(0x180)+String(_0x2dfe55+0x1)[_0x2fcb50(0x1a3)](0x2,'0'),_0x5f5cd5['relay']===!![]);});if(_0x161320==='custom'&&!(_0x27d6d1[_0x3065df(0x2a5)]&&_0x27d6d1['optimizer'][_0x3065df(0x356)]))return _0x1071a4;!_0x5b615e[_0x3065df(0xd7)]&&!(_0x27d6d1['preferredIPs']||[])[_0x3065df(0xd7)]&&(parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x3065df(0x388)](_0x343c2c=>_0x5e3dee(_0x343c2c['ip'],_0x343c2c[_0x3065df(0x296)]||0x1bb,_0x343c2c['name']||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x3065df(0x388)]((_0x36b53e,_0x81c869)=>_0x5e3dee(_0x36b53e,0x1bb,_0x3065df(0x3d8)+String(_0x81c869+0x1)[_0x3065df(0x1a3)](0x2,'0'))));const _0x4c8236=Math[_0x3065df(0x227)](Math[_0x3065df(0xae)](parseInt(_0x27d6d1[_0x3065df(0x2a5)]&&_0x27d6d1['optimizer'][_0x3065df(0x32c)]||0x0)||0x0,0x0),0x1388),_0x15f20e=Math[_0x3065df(0x227)](_0x4c8236,_0x26175b)-_0x306316['size'];if(_0x15f20e>0x0){const _0x580ad4=_0x5841e1?BUILTIN_STABLE_IPS[_0x3065df(0x13e)](_0x6433=>!_0x5841e1[_0x3065df(0x288)](_0x6433)):BUILTIN_STABLE_IPS['slice'](),_0x2625e1=randomIPsFromCidrs(_0x527df2,_0x15f20e*0x3),_0x5a7a56=_0x5841e1?_0x2625e1[_0x3065df(0x13e)](_0x36e537=>!_0x5841e1[_0x3065df(0x288)](_0x36e537)):_0x2625e1;let _0x5ef41a=[..._0x580ad4,..._0x5a7a56];if(_0x5ef41a[_0x3065df(0xd7)]<_0x15f20e)_0x5ef41a=[...BUILTIN_STABLE_IPS,..._0x2625e1];if(_0x5ef41a[_0x3065df(0xd7)]>0x0){const _0xda2a3a=Math[_0x3065df(0x227)](_0x5ef41a[_0x3065df(0xd7)],Math[_0x3065df(0xae)](_0x15f20e,0x14),0x3c),_0x3bae72=_0x5ef41a[_0x3065df(0x239)](0x0,_0xda2a3a),_0xc722c8=_0x531cd7?_0x3bae72[_0x3065df(0x396)](()=>!![]):await probeAll(_0x3bae72,_0x64f56a=>testProxyAlive(_0x64f56a,0x1bb,0x5dc)),_0x52f8dd=_0x3bae72[_0x3065df(0x13e)]((_0x48b4e5,_0x119979)=>_0xc722c8[_0x119979]),_0x239068=_0x5ef41a['slice'](_0xda2a3a);_0x5ef41a=[..._0x52f8dd,..._0x239068][_0x3065df(0x239)](0x0,_0x15f20e);}let _0x512c54=0x0;for(const _0x19f3bf of _0x5ef41a){if(_0x1071a4[_0x3065df(0xd7)]>=_0x26175b)break;_0x512c54++,_0x5e3dee(_0x19f3bf,0x1bb,_0x3065df(0x180)+String(_0x512c54)[_0x3065df(0x1a3)](0x3,'0'));}}return _0x1071a4;}function parseNodeServer(_0x10c478){const _0x211777=_0x30a059,_0x1acd2b=_0x10c478[_0x211777(0x12c)]('@'),_0x39b419=_0x10c478[_0x211777(0x12c)]('?',_0x1acd2b),_0x505dd5=_0x39b419>_0x1acd2b&&_0x1acd2b>=0x0?_0x10c478['slice'](_0x1acd2b+0x1,_0x39b419):_0x10c478[_0x211777(0x239)](_0x1acd2b+0x1);if(_0x505dd5[_0x211777(0x1e6)]('[')){const _0x402402=_0x505dd5[_0x211777(0x12c)](']'),_0x4504d3=_0x402402>0x0?_0x505dd5[_0x211777(0x239)](0x1,_0x402402):_0x505dd5,_0x134219=_0x505dd5[_0x211777(0x239)](_0x402402+0x1),_0x4e8389=_0x134219[_0x211777(0x1e6)](':')?parseInt(_0x134219[_0x211777(0x239)](0x1)):0x1bb;return{'host':_0x4504d3,'port':isNaN(_0x4e8389)?0x1bb:_0x4e8389};}const _0x3da38f=_0x505dd5[_0x211777(0x1ec)](':');if(_0x3da38f>0x0){const _0x117345=parseInt(_0x505dd5['slice'](_0x3da38f+0x1));return{'host':_0x505dd5['slice'](0x0,_0x3da38f),'port':isNaN(_0x117345)?0x1bb:_0x117345};}return{'host':_0x505dd5,'port':0x1bb};}function getParam(_0x4e79be,_0x20939e){const _0x57edb4=_0x30a059,_0x1e39d2=_0x4e79be[_0x57edb4(0x12c)]('?');if(_0x1e39d2<0x0)return null;const _0x2c3649=_0x4e79be['indexOf']('#',_0x1e39d2),_0x185288=_0x2c3649>_0x1e39d2?_0x4e79be[_0x57edb4(0x239)](_0x1e39d2+0x1,_0x2c3649):_0x4e79be[_0x57edb4(0x239)](_0x1e39d2+0x1);for(const _0x3b9878 of _0x185288['split']('&')){const _0x118a8c=_0x3b9878[_0x57edb4(0x12c)]('='),_0x7079ac=_0x118a8c>0x0?_0x3b9878['slice'](0x0,_0x118a8c):_0x3b9878;if(_0x7079ac===_0x20939e)return _0x118a8c>0x0?decodeURIComponent(_0x3b9878[_0x57edb4(0x239)](_0x118a8c+0x1)):'';}return null;}function parseShareNode(_0x1bb007,_0x1bf098){const _0x16099b=_0x30a059,{host:_0x361d33,port:_0x27be0a}=parseNodeServer(_0x1bb007),_0x3d5639=_0x361d33,_0x3ee9a6=_0x1bb007[_0x16099b(0x12c)]('#');let _0x3e397a='节点'+(_0x1bf098+0x1);if(_0x3ee9a6>=0x0)try{_0x3e397a=decodeURIComponent(_0x1bb007['slice'](_0x3ee9a6+0x1))||_0x3e397a;}catch(_0x2f365e){}const _0x416d75=_0x1bb007[_0x16099b(0x12c)]('@');let _0x4ed165='';if(_0x416d75>=0x0){const _0x94f03c=_0x1bb007[_0x16099b(0x12c)](_0x16099b(0x1cd)),_0x3c9c22=_0x94f03c>=0x0?_0x94f03c+0x3:0x0;try{_0x4ed165=decodeURIComponent(_0x1bb007[_0x16099b(0x239)](_0x3c9c22,_0x416d75));}catch(_0x1a7f32){_0x4ed165=_0x1bb007[_0x16099b(0x239)](_0x3c9c22,_0x416d75);}}const _0x45474d=_0x1bb007[_0x16099b(0x1e6)](_0x16099b(0x94)),_0x54bbae=_0x45474d||(getParam(_0x1bb007,_0x16099b(0x35c))||_0x16099b(0x3a5))==='tls';return{'srv':_0x3d5639,'prt':_0x27be0a,'name':_0x3e397a,'user':_0x4ed165,'isTrojan':_0x45474d,'tls':_0x54bbae};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',_0x30a059(0x2d5)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x30a059(0xe2)],'联通':['联通','CU','UNICOM'],'电信':['电信','CT',_0x30a059(0xdd)]},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[_0x30a059(0x1ca),_0x30a059(0x3cc)];function filterNodes(_0x5a63f5,_0x5a8906){const _0x8312da=_0x30a059;if(!_0x5a8906||!_0x5a8906['region']&&!_0x5a8906[_0x8312da(0x2e0)]&&!_0x5a8906[_0x8312da(0x14b)])return _0x5a63f5;const _0x33d8ec=_0x5a8906[_0x8312da(0x373)]||_0x8312da(0x24b),_0x2eb335=_0x5a8906[_0x8312da(0x2e0)]||FILTER_IPTYPES,_0xb3d64d=_0x5a8906[_0x8312da(0x14b)]||FILTER_ISPS,_0x1f0505=_0x5a63f5[_0x8312da(0x396)](_0x160ad3=>{const _0xf92957=_0x8312da,{host:_0xfd5260}=parseNodeServer(_0x160ad3);let _0x456408='';try{const _0x53ea49=_0x160ad3[_0xf92957(0x12c)]('#');if(_0x53ea49>=0x0)_0x456408=decodeURIComponent(_0x160ad3[_0xf92957(0x239)](_0x53ea49+0x1)||'');}catch(_0xd8f80e){_0x456408='';}return{'host':_0xfd5260,'name':_0x456408,'up':_0x456408[_0xf92957(0x15b)]()};}),_0x5eb332=_0x1f0505['some'](_0x2ef1e2=>_0x2ef1e2['up']&&Object[_0x8312da(0x274)](ISP_TAGS)[_0x8312da(0x346)](_0x1f1f03=>(ISP_TAGS[_0x1f1f03]||[_0x1f1f03])[_0x8312da(0x346)](_0x551e1a=>_0x2ef1e2['up']['includes'](_0x551e1a[_0x8312da(0x15b)]())))),_0xeae26=(_0x44bc4a,_0x4bfc43,_0x4b9071)=>{const _0x1c0645=_0x8312da,_0x2657de=Array[_0x1c0645(0x226)](_0x44bc4a)?_0x44bc4a[_0x1c0645(0xd7)]===0x0||_0x44bc4a[_0x1c0645(0x283)](_0x1c0645(0x24b))?null:_0x44bc4a[_0x1c0645(0x1b0)](_0x274e6a=>REGION_TAGS[_0x274e6a]||[]):_0x44bc4a!==_0x1c0645(0x24b)?REGION_TAGS[_0x44bc4a]||[]:null,_0x5ec2aa=_0x4b9071[_0x1c0645(0xd7)]>0x0&&_0x4b9071['length']<FILTER_ISPS['length'];return _0x5a63f5[_0x1c0645(0x13e)]((_0x37e1e5,_0x3af6e4)=>{const _0x1e9af5=_0x1c0645,_0x4392d9=_0x1f0505[_0x3af6e4],_0x4b13ab=_0x4392d9['host']['indexOf'](':')>=0x0;if(!_0x4392d9[_0x1e9af5(0x134)])return![];if(_0x2657de&&!_0x2657de[_0x1e9af5(0x346)](_0x2229f1=>_0x4392d9['up'][_0x1e9af5(0x283)](_0x2229f1[_0x1e9af5(0x15b)]()))){if(!/^(优选IP|域名)-\d+/[_0x1e9af5(0x1fa)](_0x4392d9[_0x1e9af5(0x134)])&&_0x4392d9['name']!==_0x1e9af5(0x270))return![];}if(_0x4bfc43[_0x1e9af5(0xd7)]===0x1){if(_0x4bfc43[0x0]==='IPv4'&&_0x4b13ab)return![];if(_0x4bfc43[0x0]===_0x1e9af5(0x3cc)&&!_0x4b13ab)return![];}if(_0x5ec2aa&&_0x5eb332&&!_0x4b9071[_0x1e9af5(0x346)](_0x3cda9e=>(ISP_TAGS[_0x3cda9e]||[_0x3cda9e])['some'](_0x4cdf20=>_0x4392d9['up'][_0x1e9af5(0x283)](_0x4cdf20[_0x1e9af5(0x15b)]()))))return![];return!![];});};let _0x198213=_0xeae26(_0x33d8ec,_0x2eb335,_0xb3d64d);if(!_0x198213[_0x8312da(0xd7)])_0x198213=_0xeae26(_0x33d8ec,_0x2eb335,FILTER_ISPS);if(!_0x198213[_0x8312da(0xd7)])_0x198213=_0xeae26(_0x33d8ec,FILTER_IPTYPES,FILTER_ISPS);if(!_0x198213[_0x8312da(0xd7)])_0x198213=_0xeae26(_0x8312da(0x24b),FILTER_IPTYPES,FILTER_ISPS);return _0x198213;}function yamlVal(_0x5c7735){const _0x429a01=_0x30a059;if(typeof _0x5c7735===_0x429a01(0x2a6)||typeof _0x5c7735===_0x429a01(0x3f6))return String(_0x5c7735);const _0x22de3a=String(_0x5c7735);return/^[\w.\-/\u4e00-\u9fa5]+$/[_0x429a01(0x1fa)](_0x22de3a)?_0x22de3a:JSON[_0x429a01(0x363)](_0x22de3a);}function clashProxyYaml(_0x5e490c){const _0x35d3fe=_0x30a059,_0x16455c=[];_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x151)+yamlVal(_0x5e490c[_0x35d3fe(0x134)])),_0x16455c['push']('\x20\x20\x20\x20type:\x20'+_0x5e490c[_0x35d3fe(0x338)]),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x157)+yamlVal(_0x5e490c[_0x35d3fe(0x15d)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x1dc)+_0x5e490c[_0x35d3fe(0x296)]);if(_0x5e490c['type']==='vless')_0x16455c[_0x35d3fe(0x1bf)]('\x20\x20\x20\x20uuid:\x20'+yamlVal(_0x5e490c['uuid']));else _0x16455c[_0x35d3fe(0x1bf)]('\x20\x20\x20\x20password:\x20'+yamlVal(_0x5e490c[_0x35d3fe(0x37b)]));_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x177)+_0x5e490c[_0x35d3fe(0x306)]),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x114));if(_0x5e490c[_0x35d3fe(0x3a5)]){_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0xb5)),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x350)),_0x16455c[_0x35d3fe(0x1bf)](_0x5e490c[_0x35d3fe(0x306)]===_0x35d3fe(0x392)?'\x20\x20\x20\x20alpn:\x20[h2]':_0x35d3fe(0xbb)),_0x16455c['push'](_0x35d3fe(0x3b5)+yamlVal(_0x5e490c[_0x35d3fe(0x2c9)]));if(_0x5e490c[_0x35d3fe(0x338)]===_0x35d3fe(0x2a9))_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x330)+yamlVal(_0x5e490c['servername']));_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x34d)),_0x5e490c[_0x35d3fe(0x2df)]&&(_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0xb4)),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x3c5)+yamlVal(_0x5e490c[_0x35d3fe(0x2df)][_0x35d3fe(0x1e1)])),_0x16455c['push']('\x20\x20\x20\x20\x20\x20query-server-name:\x20'+yamlVal(_0x5e490c[_0x35d3fe(0x2df)][_0x35d3fe(0x167)])));}if(_0x5e490c['network']==='ws')_0x16455c['push'](_0x35d3fe(0x2af)),_0x16455c[_0x35d3fe(0x1bf)]('\x20\x20\x20\x20\x20\x20path:\x20'+yamlVal(_0x5e490c[_0x35d3fe(0x312)][_0x35d3fe(0x149)])),_0x16455c[_0x35d3fe(0x1bf)]('\x20\x20\x20\x20\x20\x20headers:'),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x3a3)+yamlVal(_0x5e490c[_0x35d3fe(0x312)]['headers'][_0x35d3fe(0x3f3)]));else{if(_0x5e490c[_0x35d3fe(0x306)]===_0x35d3fe(0x392)){const _0x1aa910=_0x5e490c['xhttp-opts'];_0x16455c[_0x35d3fe(0x1bf)]('\x20\x20\x20\x20xhttp-opts:'),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x307)+yamlVal(_0x1aa910[_0x35d3fe(0x149)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x172)+yamlVal(_0x1aa910[_0x35d3fe(0x2d3)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x146)+yamlVal(_0x1aa910[_0x35d3fe(0x37d)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x299)+yamlVal(_0x1aa910[_0x35d3fe(0x260)])),_0x16455c['push'](_0x35d3fe(0x3d7)+yamlVal(_0x1aa910[_0x35d3fe(0x374)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x189)+yamlVal(_0x1aa910[_0x35d3fe(0x204)])),_0x16455c['push'](_0x35d3fe(0x321)+yamlVal(_0x1aa910[_0x35d3fe(0x1d1)])),_0x16455c[_0x35d3fe(0x1bf)](_0x35d3fe(0x104)+yamlVal(_0x1aa910['x-padding-key']));}}return _0x16455c['join']('\x0a');}function generateClash(_0x5bb16e,_0xa8733d){const _0x2ab42f=_0x30a059,_0x4f64c3=_0x5bb16e[_0x2ab42f(0x37d)],_0x4fec72='/'+_0x5bb16e[_0x2ab42f(0x149)],_0x438815=new Set(),_0x471680=_0xa8733d[_0x2ab42f(0x396)](_0x7e721=>{const _0x3af0df=_0x2ab42f,{user:_0x3f1fae,srv:_0x5d4540,prt:_0x5491d7,name:_0x3e95e9,isTrojan:_0x2b58e0,tls:_0x28c1bf}=parseShareNode(_0x7e721,0x0);let _0x20a8f1=_0x3e95e9;const _0x4a5069=getParam(_0x7e721,'type')||'ws';if(_0x438815[_0x3af0df(0x288)](_0x20a8f1)){const _0x3d7652=_0x2b58e0?'T':_0x4a5069===_0x3af0df(0x392)?'X':'W';let _0x15565e=_0x20a8f1+'·'+_0x3d7652,_0x4c2ba0=0x2;while(_0x438815['has'](_0x15565e)){_0x15565e=_0x20a8f1+'·'+_0x3d7652+_0x4c2ba0,_0x4c2ba0++;}_0x20a8f1=_0x15565e;}_0x438815[_0x3af0df(0x383)](_0x20a8f1);const _0x51fbc5={'name':_0x20a8f1,'server':_0x5d4540,'port':_0x5491d7,'udp':!![],..._0x28c1bf?{'tls':!![],'skip-cert-verify':!![],'servername':_0x4f64c3,'client-fingerprint':'chrome','alpn':[_0x3af0df(0x278)]}:{},..._0x5bb16e['ech']&&_0x28c1bf?{'ech-opts':{'enable':!![],'query-server-name':_0x5bb16e[_0x3af0df(0x3d1)]||_0x3af0df(0x234)}}:{}};if(_0x2b58e0)return{..._0x51fbc5,'type':_0x3af0df(0x2a9),'password':_0x3f1fae,'network':'ws','ws-opts':{'path':_0x4fec72,'headers':{'Host':_0x4f64c3}}};if(_0x4a5069===_0x3af0df(0x392)){let _0x366294={};try{_0x366294=JSON[_0x3af0df(0xd1)](getParam(_0x7e721,'extra')||'{}');}catch(_0x523031){}return{..._0x51fbc5,'type':_0x3af0df(0x33f),'uuid':_0x3f1fae,'network':_0x3af0df(0x392),'alpn':['h2'],'xhttp-opts':{'path':_0x4fec72,'mode':_0x3af0df(0x2f5),'host':_0x4f64c3,'x-padding-obfs-mode':_0x366294['xPaddingObfsMode']!==undefined?_0x366294[_0x3af0df(0x3be)]:!![],'x-padding-method':_0x366294[_0x3af0df(0x34a)]||_0x3af0df(0x3f2),'x-padding-placement':_0x366294[_0x3af0df(0x11a)]||_0x3af0df(0x34f),'x-padding-header':_0x366294[_0x3af0df(0x2ee)]||'','x-padding-key':_0x366294[_0x3af0df(0x34c)]||''}};}return{..._0x51fbc5,'type':_0x3af0df(0x33f),'uuid':_0x3f1fae,'network':'ws','ws-opts':{'path':_0x4fec72,'headers':{'Host':_0x4f64c3}}};});_0x471680[_0x2ab42f(0x3f5)]((_0x1d9ce5,_0x598fd0)=>(_0x1d9ce5['port']===0x1bb?0x0:0x1)-(_0x598fd0[_0x2ab42f(0x296)]===0x1bb?0x0:0x1));const _0x52fd33=_0x2ab42f(0x126)+_0x471680[_0x2ab42f(0x396)](_0x46e2cb=>clashProxyYaml(_0x46e2cb))[_0x2ab42f(0x10e)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x52fd33;}function generateSurfboard(_0x663489,_0x1ed1fb){const _0x2cda0f=_0x30a059,_0x467fca=_0x663489['host'],_0x3928c0='/'+_0x663489[_0x2cda0f(0x149)],_0x4d9a15=[];for(const _0x2447d6 of _0x1ed1fb){if(_0x2447d6[_0x2cda0f(0x1e6)](_0x2cda0f(0x94))&&_0x2447d6[_0x2cda0f(0x12c)]('security=none')<0x0)_0x4d9a15[_0x2cda0f(0x1bf)](_0x2447d6);else{if(_0x2447d6['startsWith'](_0x2cda0f(0x1d2))&&_0x2447d6['indexOf'](_0x2cda0f(0xfa))<0x0&&_0x2447d6[_0x2cda0f(0x12c)](_0x2cda0f(0x1aa))<0x0)_0x4d9a15[_0x2cda0f(0x1bf)](_0x2447d6[_0x2cda0f(0x14e)](/^vless:\/\//,_0x2cda0f(0x94))[_0x2cda0f(0x14e)](_0x2cda0f(0x19a),''));}}const _0x4386df=_0x4d9a15[_0x2cda0f(0x396)]((_0x47bda3,_0x6c71a9)=>{const _0x577f4c=_0x2cda0f,{user:_0x4dfdcd,srv:_0x343c49,prt:_0x12d6de,name:_0x384849}=parseShareNode(_0x47bda3,_0x6c71a9);return _0x384849+'\x20=\x20trojan,\x20'+_0x343c49+',\x20'+_0x12d6de+_0x577f4c(0x3ef)+_0x4dfdcd+_0x577f4c(0x207)+_0x3928c0+_0x577f4c(0x3ea)+_0x467fca+_0x577f4c(0x1b5)+_0x467fca;});return'#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a'+_0x4386df[_0x2cda0f(0x10e)]('\x0a')+'\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20'+_0x4386df[_0x2cda0f(0x396)](_0x4f1bdc=>_0x4f1bdc['split'](_0x2cda0f(0x222))[0x0])[_0x2cda0f(0x10e)](',\x20')+_0x2cda0f(0x1d3);}function generateSingbox(_0x1e63d3,_0x1fe394){const _0x144222=_0x30a059,_0x3e80f1=_0x1e63d3[_0x144222(0x37d)],_0x55e26e='/'+_0x1e63d3[_0x144222(0x149)],_0x30dea2=_0x1fe394[_0x144222(0x396)]((_0x3d450c,_0x6a263e)=>{const _0x2fe595=_0x144222,{user:_0x12a493,srv:_0x1950f8,prt:_0x2a6cd4,name:_0x23364f,isTrojan:_0x2acede,tls:_0x2e45dd}=parseShareNode(_0x3d450c,_0x6a263e),_0x38fe5f=getParam(_0x3d450c,'type')||'ws',_0x19cf30=_0x2e45dd?_0x38fe5f===_0x2fe595(0x392)?{'enabled':!![],'server_name':_0x3e80f1,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x3e80f1,'insecure':!![],'alpn':[_0x2fe595(0x278)],'utls':{'enabled':!![],'fingerprint':_0x2fe595(0xdc)}}:{'enabled':![]},_0x56248e=_0x38fe5f===_0x2fe595(0x392)?{'type':_0x2fe595(0x392),'mode':_0x2fe595(0x2f5),'path':_0x55e26e}:_0x2e45dd?{'type':'ws','path':_0x55e26e,'headers':{'Host':_0x3e80f1},'max_early_data':0x800,'early_data_header_name':_0x2fe595(0x289)}:{'type':'ws','path':_0x55e26e,'headers':{'Host':_0x3e80f1}};if(_0x2acede)return{'type':_0x2fe595(0x2a9),'tag':_0x23364f,'server':_0x1950f8,'server_port':_0x2a6cd4,'password':_0x12a493,'tls':_0x19cf30,'transport':_0x56248e};return{'type':'vless','tag':_0x23364f,'server':_0x1950f8,'server_port':_0x2a6cd4,'uuid':_0x12a493,'packet_encoding':_0x2fe595(0xce),'tls':_0x19cf30,'transport':_0x56248e};}),_0x10bcf3=_0x30dea2['map'](_0x57d137=>_0x57d137[_0x144222(0x27f)]),_0x5bd7bb=[[_0x144222(0x9d),'🎯\x20全球直连'],[_0x144222(0x2ff),'🌐\x20谷歌服务'],[_0x144222(0x324),_0x144222(0x15e)],[_0x144222(0x108),_0x144222(0x169)],['geosite-openai',_0x144222(0x190)],['geosite-spotify',_0x144222(0x3ba)],['geosite-youtube',_0x144222(0x3ba)],['geosite-netflix','🌍\x20国外媒体'],[_0x144222(0x2a2),'🌍\x20国外媒体'],[_0x144222(0x375),_0x144222(0x3ba)],[_0x144222(0x3d2),_0x144222(0x3ba)],[_0x144222(0x166),_0x144222(0x3ba)],[_0x144222(0x174),_0x144222(0x39f)]],_0xfdc99c={'log':{'level':_0x144222(0xc2)},'dns':{'servers':[{'tag':_0x144222(0x1e4),'address':_0x144222(0x1f9)},{'tag':'dns-direct','address':_0x144222(0x343)}],'strategy':_0x144222(0x193),'independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':'198.18.0.0/15','store_fakeip':!![]}},'inbounds':[{'type':_0x144222(0x143),'tag':_0x144222(0x33a),'listen':_0x144222(0x10b),'listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':'tun','tag':_0x144222(0x238),'interface_name':_0x144222(0xea),'inet4_address':['172.19.0.1/30'],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':_0x144222(0x143),'sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x30dea2,{'type':_0x144222(0x1b9),'tag':_0x144222(0x1b9)},{'type':_0x144222(0x39f),'tag':_0x144222(0x39f)},{'type':_0x144222(0x326),'tag':_0x144222(0x26e)},{'type':_0x144222(0x1c5),'tag':_0x144222(0x1a6),'outbounds':_0x10bcf3},{'type':'selector','tag':_0x144222(0x286),'outbounds':[_0x144222(0x1b9)]},{'type':'selector','tag':'🐟\x20漏网之鱼','outbounds':[_0x144222(0x1a6),_0x144222(0x286)]},{'type':_0x144222(0x1c5),'tag':_0x144222(0x3ba),'outbounds':[_0x144222(0x1a6)]},{'type':_0x144222(0x1c5),'tag':_0x144222(0x3ae),'outbounds':[_0x144222(0x1a6)]},{'type':_0x144222(0x1c5),'tag':_0x144222(0x190),'outbounds':[_0x144222(0x1a6)]},{'type':_0x144222(0x1c5),'tag':'🍎\x20苹果服务','outbounds':[_0x144222(0x286)]},{'type':_0x144222(0x1c5),'tag':_0x144222(0x169),'outbounds':['🎯\x20全球直连']}],'route':{'rules':[{'protocol':_0x144222(0x326),'outbound':_0x144222(0x26e)},{'ip_is_private':!![],'outbound':_0x144222(0x1b9)},..._0x5bd7bb[_0x144222(0x396)](([_0x46492c,_0x6c4e6c])=>({'rule_set':[_0x46492c],'outbound':_0x6c4e6c})),{'geoip':['cn'],'outbound':_0x144222(0x1b9)},{'ip_is_private':!![],'outbound':_0x144222(0x39f)}],'rule_set':_0x5bd7bb[_0x144222(0x396)](([_0x14d0b1])=>({'type':_0x144222(0x225),'tag':_0x14d0b1,'format':_0x144222(0x2c0),'url':_0x144222(0x273)+_0x14d0b1+_0x144222(0x132)})),'final':_0x144222(0x366),'auto_detect_interface':!![],'default_domain_resolver':{'server':_0x144222(0x1e4)}},'experimental':{'clash_api':{'external_controller':_0x144222(0x313)}}};return JSON[_0x144222(0x363)](_0xfdc99c,null,0x2);}function generateSurge(_0xca95c3,_0x2c14a4){const _0x19396e=_0x30a059,_0x371fcc=_0xca95c3[_0x19396e(0x37d)],_0x3de1c2='/'+_0xca95c3[_0x19396e(0x149)],_0x62b45=_0x2c14a4[_0x19396e(0x396)]((_0x70282e,_0x1329cc)=>{const _0x4d516c=_0x19396e,{user:_0x23b548,srv:_0x1bdee8,prt:_0x47ce15,name:_0x17d1fb,isTrojan:_0x2841bc,tls:_0x18f59f}=parseShareNode(_0x70282e,_0x1329cc),_0x13c438=_0x18f59f?_0x4d516c(0x1b5)+_0x371fcc:',\x20tls=false';return _0x2841bc?_0x17d1fb+_0x4d516c(0x1b2)+_0x1bdee8+',\x20'+_0x47ce15+',\x20password='+_0x23b548+',\x20ws=true,\x20ws-path='+_0x3de1c2+',\x20ws-headers=Host:'+_0x371fcc+_0x13c438:_0x17d1fb+_0x4d516c(0x3f4)+_0x1bdee8+',\x20'+_0x47ce15+_0x4d516c(0x332)+_0x23b548+_0x4d516c(0x207)+_0x3de1c2+_0x4d516c(0x3ea)+_0x371fcc+_0x13c438;});return _0x19396e(0x242)+_0x62b45[_0x19396e(0x10e)]('\x0a')+_0x19396e(0xe1)+_0x62b45[_0x19396e(0x396)](_0x567d93=>_0x567d93['split'](_0x19396e(0x222))[0x0])[_0x19396e(0x10e)](',\x20')+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateLoon(_0x41d8c6,_0x24bb31){const _0x4067ac=_0x30a059,_0x17ab74=_0x41d8c6['host'],_0x20e38c='/'+_0x41d8c6['path'],_0x635241=_0x24bb31['map']((_0x3fd12a,_0x3ef742)=>{const _0x28c8d4=_0x2153,{user:_0x5ba98b,srv:_0x1b490d,prt:_0x3da050,name:_0x4a5f35,isTrojan:_0x1f804b,tls:_0x10be46}=parseShareNode(_0x3fd12a,_0x3ef742),_0x21fcdf=_0x10be46?_0x28c8d4(0x1b5)+_0x17ab74:_0x28c8d4(0x16a);return _0x1f804b?_0x4a5f35+_0x28c8d4(0x1b2)+_0x1b490d+',\x20'+_0x3da050+_0x28c8d4(0x3ef)+_0x5ba98b+_0x28c8d4(0x207)+_0x20e38c+_0x28c8d4(0x3ea)+_0x17ab74+_0x21fcdf:_0x4a5f35+'\x20=\x20vless,\x20'+_0x1b490d+',\x20'+_0x3da050+_0x28c8d4(0x332)+_0x5ba98b+',\x20ws=true,\x20ws-path='+_0x20e38c+',\x20ws-headers=Host:'+_0x17ab74+_0x21fcdf;}),_0x3565dd=_0x635241[_0x4067ac(0x396)](_0x98ac99=>_0x98ac99[_0x4067ac(0x246)](_0x4067ac(0x222))[0x0])[_0x4067ac(0x10e)](',\x20');return _0x4067ac(0x29c)+_0x635241[_0x4067ac(0x10e)]('\x0a')+_0x4067ac(0xe1)+_0x3565dd+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20'+_0x3565dd+'\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateQuanX(_0x6bae7,_0x3136d9){const _0x4c93ac=_0x30a059,_0x4e037c=_0x6bae7[_0x4c93ac(0x37d)],_0x1e2c7a='/'+_0x6bae7[_0x4c93ac(0x149)],_0x56f14b=_0x1026ea=>_0x1026ea['indexOf'](':')>=0x0?'['+_0x1026ea+']':_0x1026ea,_0x5e2298=_0x3136d9[_0x4c93ac(0x396)]((_0x5095d3,_0x1edb8d)=>{const _0x18f7f3=_0x4c93ac,{user:_0x301c97,srv:_0xc3ae59,prt:_0x39231c,name:_0x2ea3ce}=parseShareNode(_0x5095d3,_0x1edb8d);if(_0x5095d3[_0x18f7f3(0x1e6)](_0x18f7f3(0x94)))return _0x18f7f3(0x1c3)+_0x56f14b(_0xc3ae59)+':'+_0x39231c+_0x18f7f3(0x3ef)+_0x301c97+_0x18f7f3(0xe4)+_0x4e037c+',\x20obfs=wss,\x20obfs-host='+_0x4e037c+_0x18f7f3(0x2ec)+_0x1e2c7a+_0x18f7f3(0x2ae)+_0x2ea3ce;const _0x24f556=(getParam(_0x5095d3,_0x18f7f3(0x35c))||_0x18f7f3(0x3a5))===_0x18f7f3(0x3a5);return _0x18f7f3(0x2b8)+_0x56f14b(_0xc3ae59)+':'+_0x39231c+',\x20method=none,\x20password='+_0x301c97+',\x20obfs='+(_0x24f556?'wss':'ws')+',\x20obfs-host='+_0x4e037c+',\x20obfs-uri='+_0x1e2c7a+(_0x24f556?_0x18f7f3(0x2a0):'')+_0x18f7f3(0x9f)+_0x2ea3ce;}),_0x702cdd=_0x3136d9[_0x4c93ac(0x396)]((_0x5c6911,_0x2ce398)=>{const _0x16495d=_0x4c93ac,_0x16b04d=_0x5c6911['indexOf']('#');if(_0x16b04d<0x0)return'节点'+(_0x2ce398+0x1);try{return decodeURIComponent(_0x5c6911[_0x16495d(0x239)](_0x16b04d+0x1))||'节点'+(_0x2ce398+0x1);}catch(_0x38f4e0){return'节点'+(_0x2ce398+0x1);}})[_0x4c93ac(0x10e)](',\x20');return _0x4c93ac(0x3d0)+_0x5e2298[_0x4c93ac(0x10e)]('\x0a')+_0x4c93ac(0x2f0)+_0x702cdd+_0x4c93ac(0x144);}let PROBE_ALIVE_ENABLED=![];function setProbeAlive(_0x28f186){const _0x13bd8f=_0x30a059;PROBE_ALIVE_ENABLED=_0x28f186===!![]||_0x28f186===_0x13bd8f(0x376)||_0x28f186==='1'||_0x28f186===0x1;}const PROBE_CONCURRENCY=0x4;let probeRunning=0x0;const probeWaiters=[];function probeLimit(){const _0x42d195=_0x30a059;if(probeRunning<PROBE_CONCURRENCY)return probeRunning++,Promise[_0x42d195(0x116)]();return new Promise(_0x46976f=>probeWaiters[_0x42d195(0x1bf)](_0x46976f));}function probeRelease(){const _0x824e6f=_0x30a059,_0x47c644=probeWaiters[_0x824e6f(0x10f)]();if(_0x47c644)_0x47c644();else probeRunning--;}async function probeAll(_0x403d07,_0x282326){const _0x44206d=_0x30a059,_0x1e9a51=[];let _0x37f8d2=0x0;const _0x412ffd=Array['from']({'length':Math[_0x44206d(0x227)](PROBE_CONCURRENCY,_0x403d07[_0x44206d(0xd7)])},async()=>{const _0x20869c=_0x44206d;while(_0x37f8d2<_0x403d07[_0x20869c(0xd7)]){const _0x48785e=_0x37f8d2++;await probeLimit();try{_0x1e9a51[_0x48785e]=await _0x282326(_0x403d07[_0x48785e],_0x48785e);}catch(_0x4746cb){_0x1e9a51[_0x48785e]=![];}finally{probeRelease();}}});return await Promise['all'](_0x412ffd),_0x1e9a51;}async function testProxyAlive(_0x170fc6,_0x228ab9,_0x25b608){const _0x59ee4f=_0x30a059;if(!PROBE_ALIVE_ENABLED)return!![];const _0x3eff41=_0x25b608||0x7d0;try{const _0x466e4d=connect({'hostname':_0x170fc6,'port':_0x228ab9});await Promise[_0x59ee4f(0x3c4)]([_0x466e4d['opened'],new Promise((_0x3dc5dc,_0x115fed)=>setTimeout(()=>_0x115fed(new Error('proxy\x20timeout')),_0x3eff41))]);try{_0x466e4d[_0x59ee4f(0x2a4)]();}catch(_0x37fe5b){}return!![];}catch(_0x4f12f9){return![];}}async function testRelayAlive(_0x5a3f8c,_0x2b8d3e,_0x2832c1){if(!PROBE_ALIVE_ENABLED)return!![];return testRelayAliveRaw(_0x5a3f8c,_0x2b8d3e,_0x2832c1);}async function testRelayAliveRaw(_0x11b1d6,_0x15240d,_0x5c9805){const _0x418ab5=_0x30a059,_0x2dd898=_0x5c9805||0x9c4;try{const _0x23ea2d=connect({'hostname':_0x11b1d6,'port':_0x15240d});await Promise['race']([_0x23ea2d['opened'],new Promise((_0x8f14ff,_0x1602c5)=>setTimeout(()=>_0x1602c5(new Error(_0x418ab5(0x1da))),_0x2dd898))]);const _0x585cb5=_0x23ea2d['writable']['getWriter'](),_0x35ab1b=_0x23ea2d['readable'][_0x418ab5(0xc5)]();await _0x585cb5['write'](new TextEncoder()[_0x418ab5(0xbf)](_0x418ab5(0x3bb)+_0x11b1d6+'\x0d\x0aUser-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20close\x0d\x0a\x0d\x0a'));const _0x5a3d08=await Promise['race']([_0x35ab1b[_0x418ab5(0x38b)](),new Promise((_0x2534fa,_0x16ce48)=>setTimeout(()=>_0x16ce48(new Error(_0x418ab5(0x393))),_0x2dd898))]);try{_0x23ea2d[_0x418ab5(0x2a4)]();}catch(_0x212bdf){}const _0x2455e0=new TextDecoder()[_0x418ab5(0x3d6)](_0x5a3d08['value']||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x418ab5(0x1fa)](_0x2455e0);}catch(_0x53ff93){return![];}}async function dohFirstCF(_0x337b3b){const _0xf4f292=_0x30a059;try{const _0x1c8571=await fetchTimeout('https://cloudflare-dns.com/dns-query?name='+encodeURIComponent(_0x337b3b)+_0xf4f292(0x2b7),{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x1c8571||!_0x1c8571['ok'])return null;const _0x3b4db3=await _0x1c8571[_0xf4f292(0xe9)](),_0x5556a0=(_0x3b4db3[_0xf4f292(0x2c7)]||[])[_0xf4f292(0x13e)](_0x4fd14b=>_0x4fd14b['type']===0x1&&/^\d+\.\d+\.\d+\.\d+$/[_0xf4f292(0x1fa)](_0x4fd14b[_0xf4f292(0x2a3)]))[_0xf4f292(0x396)](_0xb0ce8d=>_0xb0ce8d[_0xf4f292(0x2a3)]);return _0x5556a0[_0xf4f292(0x13e)](isCloudflareIP)[0x0]||null;}catch(_0x2d518b){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x54a0a6){const _0x3866b3=_0x30a059;if(!PROBE_ALIVE_ENABLED)return String(_0x54a0a6||'')[_0x3866b3(0x246)](/[\n,;]+/)[_0x3866b3(0x396)](_0x406408=>_0x406408[_0x3866b3(0x36c)]()[_0x3866b3(0x14e)](/^\*\./,''))['filter'](Boolean)[_0x3866b3(0x10e)]('\x0a');if(Date[_0x3866b3(0x24d)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE['list']!==null)return DOMAIN_ALIVE_CACHE['list'];const _0x51ddb4=String(_0x54a0a6||'')[_0x3866b3(0x246)](/[\n,;]+/)[_0x3866b3(0x396)](_0x349a3c=>_0x349a3c['trim']()[_0x3866b3(0x14e)](/^\*\./,''))['filter'](Boolean),_0x513459=await probeAll(_0x51ddb4,async _0x217a5b=>{const _0x3117d5=await dohFirstCF(_0x217a5b);if(!_0x3117d5||!isCloudflareIP(_0x3117d5))return{'d':_0x217a5b,'ok':![]};return{'d':_0x217a5b,'ok':await testProxyAlive(_0x3117d5,0x1bb)};}),_0x198231=_0x513459[_0x3866b3(0x396)]((_0x5f4c16,_0x233fa7)=>_0x5f4c16&&_0x5f4c16['ok']?_0x51ddb4[_0x233fa7]:null)[_0x3866b3(0x13e)](Boolean);return DOMAIN_ALIVE_CACHE['t']=Date[_0x3866b3(0x24d)](),DOMAIN_ALIVE_CACHE['list']=_0x198231[_0x3866b3(0x10e)]('\x0a'),DOMAIN_ALIVE_CACHE[_0x3866b3(0x232)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x4c2153=_0x30a059;if(bestcfCache[_0x4c2153(0x232)]&&Date['now']()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache[_0x4c2153(0x232)];const _0x36296a=[],_0x449ba6=BESTCF_REGION_URLS[_0x4c2153(0x396)](async _0x1f78bf=>{const _0x5eb028=_0x4c2153;try{const _0x38eb7e=await fetchTimeout(_0x1f78bf[_0x5eb028(0x2e1)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1f40);if(!_0x38eb7e['ok'])return;const _0x3a3242=await _0x38eb7e[_0x5eb028(0x201)](),_0x42e8fe=[];for(const _0x4d8bab of _0x3a3242[_0x5eb028(0x246)](/[\r\n]+/)){const _0x58dc26=_0x4d8bab[_0x5eb028(0x36c)]()[_0x5eb028(0x27b)](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x58dc26&&_0x42e8fe[_0x5eb028(0xd7)]<_0x1f78bf[_0x5eb028(0x17d)])_0x42e8fe[_0x5eb028(0x1bf)]({'ip':_0x58dc26[0x1],'port':_0x58dc26[0x2]?parseInt(_0x58dc26[0x2],0xa):0x1bb,'name':_0x1f78bf[_0x5eb028(0x20b)]+'-'+String(_0x42e8fe['length']+0x1)['padStart'](0x2,'0')});}_0x42e8fe[_0x5eb028(0x388)](_0x125100=>_0x36296a['push'](_0x125100));}catch(_0x251aa5){}});return await Promise[_0x4c2153(0x24b)](_0x449ba6),bestcfCache[_0x4c2153(0x232)]=_0x36296a,bestcfCache['at']=Date[_0x4c2153(0x24d)](),_0x36296a;}function appendStableNodes(_0x163a4b,_0x978080,_0x421f0e){const _0x1e354a=_0x30a059;if(_0x163a4b[_0x1e354a(0xd7)]>=_0x421f0e)return;const _0x517596=new Set();for(const _0x57a7b5 of _0x163a4b){try{_0x517596[_0x1e354a(0x383)](parseNodeServer(_0x57a7b5)[_0x1e354a(0x37d)]);}catch(_0x917418){}}let _0x3f8939=0x0;for(const _0x22fb32 of BUILTIN_STABLE_IPS){if(_0x163a4b[_0x1e354a(0xd7)]>=_0x421f0e)break;if(_0x517596[_0x1e354a(0x288)](_0x22fb32))continue;_0x517596[_0x1e354a(0x383)](_0x22fb32),_0x3f8939++;const _0x504cee=_0x1e354a(0x287)+String(_0x3f8939)[_0x1e354a(0x1a3)](0x2,'0');if(_0x978080[_0x1e354a(0x1d6)])_0x163a4b['push'](vlessNode(_0x978080,_0x22fb32,0x1bb,_0x504cee));if(_0x163a4b['length']>=_0x421f0e)break;if(_0x978080[_0x1e354a(0x22c)])_0x163a4b[_0x1e354a(0x1bf)](trojanNode(_0x978080,_0x22fb32,0x1bb,_0x504cee));if(_0x163a4b[_0x1e354a(0xd7)]>=_0x421f0e)break;if(_0x978080[_0x1e354a(0x1c9)])_0x163a4b[_0x1e354a(0x1bf)](vlessNode(_0x978080,_0x22fb32,0x1bb,_0x504cee,{'type':_0x1e354a(0x392)}));}}function appendFallbackNodes(_0x9de532,_0x36d388,_0x1cd8bf,_0x4fec23){const _0x2d56bd=_0x30a059;if(_0x9de532[_0x2d56bd(0xd7)]>=_0x1cd8bf)return;const _0x354514=new Set();for(const _0x428a7b of _0x9de532){try{_0x354514[_0x2d56bd(0x383)](parseNodeServer(_0x428a7b)[_0x2d56bd(0x37d)]);}catch(_0x323cec){}}const _0x216120=(_0x78c256,_0x429af7)=>{const _0x4d8278=_0x2d56bd;if(_0x9de532[_0x4d8278(0xd7)]>=_0x1cd8bf)return;if(_0x354514[_0x4d8278(0x288)](_0x78c256))return;_0x354514[_0x4d8278(0x383)](_0x78c256);if(_0x36d388[_0x4d8278(0x1d6)])_0x9de532[_0x4d8278(0x1bf)](vlessNode(_0x36d388,_0x78c256,0x1bb,_0x429af7));if(_0x36d388['enableTrojan'])_0x9de532[_0x4d8278(0x1bf)](trojanNode(_0x36d388,_0x78c256,0x1bb,_0x429af7));if(_0x36d388[_0x4d8278(0x1c9)])_0x9de532['push'](vlessNode(_0x36d388,_0x78c256,0x1bb,_0x429af7,{'type':_0x4d8278(0x392)}));};_0x36d388[_0x2d56bd(0x1bc)]&&_0x36d388[_0x2d56bd(0x1bc)]['native']===!![]&&_0x216120(_0x36d388['host'],'原生地址');}async function generateSubscription(_0x5e0a8e,_0x3888a1,_0x3e8c91,_0x32c5f0,_0x7850ce){const _0x50c378=_0x30a059;if(!_0x5e0a8e[_0x50c378(0x149)]||_0x5e0a8e['path']==='/'||_0x5e0a8e['path']==='')_0x5e0a8e[_0x50c378(0x149)]=_0x5e0a8e[_0x50c378(0x325)];const _0x4a9f84=_0x5e0a8e['filter']&&_0x5e0a8e[_0x50c378(0x13e)][_0x50c378(0x2e0)]||[];if(_0x4a9f84[_0x50c378(0x283)](_0x50c378(0x3cc)))await refreshOfficialV6CIDRs();const _0x21c89c=_0x5e0a8e['optimizer']&&_0x5e0a8e[_0x50c378(0x2a5)][_0x50c378(0x155)]||'';if(_0x21c89c===''&&(!_0x5e0a8e[_0x50c378(0x256)]||_0x5e0a8e[_0x50c378(0x256)][_0x50c378(0xd7)]<0x50))try{const [_0x434eef,_0x206019,_0x39ee3d]=await Promise[_0x50c378(0x24b)]([fetchBestcfPool()[_0x50c378(0x1f7)](()=>[]),fetchLatestPreferredIPs(0xc8)[_0x50c378(0x1f7)](()=>null),Promise['resolve'](parseIPList(BUILTIN_PREFERRED_IPS[_0x50c378(0x10e)]('\x0a')))]),_0x250515=[],_0x1255c7=[],_0x4fdcba=new Set((_0x5e0a8e[_0x50c378(0x256)]||[])[_0x50c378(0x396)](_0x40771f=>_0x40771f['ip']));for(const _0xdb5ff7 of[..._0x5e0a8e['preferredIPs']||[],..._0x434eef||[],..._0x206019||[],..._0x39ee3d]){if(!_0xdb5ff7||!_0xdb5ff7['ip']||_0x4fdcba[_0x50c378(0x288)](_0xdb5ff7['ip']))continue;_0x4fdcba[_0x50c378(0x383)](_0xdb5ff7['ip']);const _0xe9d93a={'ip':_0xdb5ff7['ip'],'port':_0xdb5ff7[_0x50c378(0x296)]||0x1bb,'name':_0xdb5ff7[_0x50c378(0x134)]||'','relay':!!_0xdb5ff7[_0x50c378(0x141)]};if(_0xe9d93a[_0x50c378(0x141)]||!isCloudflareIP(_0xe9d93a['ip']))_0x1255c7['push'](_0xe9d93a);else _0x250515[_0x50c378(0x1bf)](_0xe9d93a);}const _0x2af0ce=_0x1255c7[_0x50c378(0x239)](0x0,0x64),_0x4a78bf=_0x250515[_0x50c378(0x239)](0x0,0x96),[_0x3aa5c0,_0x1cf1cd]=await Promise[_0x50c378(0x24b)]([probeAll(_0x2af0ce,_0x33c282=>testRelayAlive(_0x33c282['ip'],_0x33c282[_0x50c378(0x296)]||0x1bb,0x9c4)),probeAll(_0x4a78bf,_0x4f4b7f=>testProxyAlive(_0x4f4b7f['ip'],_0x4f4b7f[_0x50c378(0x296)]||0x1bb,0x9c4))]),_0x50c4f7=_0x2af0ce[_0x50c378(0x13e)]((_0x481514,_0x51fc7c)=>_0x3aa5c0[_0x51fc7c]),_0x256df4=_0x4a78bf[_0x50c378(0x13e)]((_0x6d4a7a,_0xb6fd2f)=>_0x1cf1cd[_0xb6fd2f]),_0x1b7f91=_0x256df4[_0x50c378(0x239)](0x0,0xd2),_0x41d14c=_0x50c4f7[_0x50c378(0x239)](0x0,0x28);_0x5e0a8e[_0x50c378(0x256)]=[..._0x5e0a8e[_0x50c378(0x256)]||[],..._0x1b7f91,..._0x41d14c][_0x50c378(0x239)](0x0,0xfa);}catch(_0x273c99){}const _0x46d6d8=!/\.workers\.dev$/i['test'](new URL(_0x3888a1)[_0x50c378(0x276)]),_0x373a59=Object[_0x50c378(0x300)]({},_0x5e0a8e,{'host':_0x5e0a8e['host']||new URL(_0x3888a1)[_0x50c378(0x276)]});_0x46d6d8&&(_0x373a59[_0x50c378(0x257)]=!![]);const _0x1cf084=_0x5e0a8e[_0x50c378(0x2a5)]&&_0x5e0a8e['optimizer'][_0x50c378(0x155)]||'';let _0x37c40c=[];const _0x2f3bc1=_0x5e0a8e['filter']&&_0x5e0a8e[_0x50c378(0x13e)][_0x50c378(0x2e0)]||[],_0x56bf7e=_0x2f3bc1[_0x50c378(0x283)](_0x50c378(0x3cc)),_0x2cf582=_0x2f3bc1[_0x50c378(0xd7)]===0x1&&_0x2f3bc1[0x0]===_0x50c378(0x3cc),_0x3e2e22=_0x2cf582?OFFICIAL_V6_CIDRS:_0x56bf7e?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x23816d=parseIPList(BUILTIN_PREFERRED_IPS[_0x50c378(0x10e)]('\x0a'))[_0x50c378(0x396)](_0x4af2c0=>({'ip':_0x4af2c0['ip'],'port':_0x4af2c0['port']||0x1bb,'name':_0x4af2c0[_0x50c378(0x134)]||'优选IP-'+String(BUILTIN_PREFERRED_IPS['indexOf'](_0x4af2c0)+0x1)[_0x50c378(0x1a3)](0x2,'0')}));if(_0x1cf084===_0x50c378(0x268)){const _0x2561bf=!!(_0x5e0a8e[_0x50c378(0x2a5)]&&_0x5e0a8e['optimizer'][_0x50c378(0x356)]),_0x19b08e=!_0x2561bf;_0x37c40c=await resolvePreferredDomains(_0x5e0a8e['preferredDomains']||'',_0x19b08e?0xc8:0x28,_0x19b08e?0x7d0:0x12c,_0x2561bf,_0x2561bf,_0x56bf7e);if(_0x2561bf){const _0x3a4b5f=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x56bf7e),_0x257900=new Set(_0x3a4b5f[_0x50c378(0x396)](_0x545e20=>_0x545e20['ip']));_0x37c40c=[..._0x3a4b5f,..._0x37c40c[_0x50c378(0x13e)](_0x5c3909=>!_0x257900[_0x50c378(0x288)](_0x5c3909['ip']))],_0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x23816d];if(!_0x373a59['optimizer'])_0x373a59[_0x50c378(0x2a5)]={};_0x373a59[_0x50c378(0x2a5)]['fillCount']=Math[_0x50c378(0xae)](parseInt(_0x373a59[_0x50c378(0x2a5)][_0x50c378(0x32c)])||0x0,0x320);}}else{if(_0x1cf084===''){const _0x5f16bc=_0x5e0a8e['src']||{},_0x4b9095=_0x5f16bc['native']===!![],_0x51588b=_0x5f16bc[_0x50c378(0x14a)]!==![],_0x454963=_0x5f16bc['prefIp']!==![],_0x2ac1b4=_0x5f16bc[_0x50c378(0x20a)]===!![];_0x4b9095&&!_0x2cf582&&(_0x373a59[_0x50c378(0x3f7)]=(_0x373a59[_0x50c378(0x3f7)]?_0x373a59[_0x50c378(0x3f7)]+'\x0a':'')+_0x373a59[_0x50c378(0x37d)]+_0x50c378(0x105));if(!_0x2ac1b4)_0x373a59[_0x50c378(0x256)]=[];const _0x3cb34a=_0x5e0a8e[_0x50c378(0x13e)]||{},_0x9a216f=_0x3cb34a[_0x50c378(0x373)],_0x16a91c=Array[_0x50c378(0x226)](_0x9a216f)?_0x9a216f[_0x50c378(0xd7)]===0x0||_0x9a216f['includes'](_0x50c378(0x24b)):!_0x9a216f||_0x9a216f===_0x50c378(0x24b);if(_0x16a91c){_0x37c40c=[];if(_0x51588b&&!_0x2cf582){const _0x3d490b=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0x3d490b)_0x373a59[_0x50c378(0x3f7)]=(_0x373a59[_0x50c378(0x3f7)]?_0x373a59[_0x50c378(0x3f7)]+'\x0a':'')+_0x3d490b;}if(_0x454963&&!_0x2cf582){const _0x2cd909=await fetchLatestPreferredIPs(0x96);if(_0x2cd909&&_0x2cd909[_0x50c378(0xd7)])_0x373a59['preferredIPs']=[..._0x373a59[_0x50c378(0x256)]||[],..._0x2cd909];try{const _0x101d53=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x101d53&&_0x101d53['length'])_0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x101d53];}catch(_0x4ddf12){}}if(_0x56bf7e&&_0x51588b)try{const _0x2a29a0=DEFAULT_PREFERRED_DOMAINS+(_0x2cf582?'\x0a'+BUILTIN_OFFICIAL_DOMAINS[_0x50c378(0x10e)]('\x0a'):''),_0x3e0d40=await resolvePreferredDomains(_0x2a29a0,0x28,_0x2cf582?0x320:0xf0,![],!![],!![]);if(_0x3e0d40&&_0x3e0d40[_0x50c378(0xd7)])_0x373a59['preferredIPs']=[..._0x373a59[_0x50c378(0x256)]||[],..._0x3e0d40];}catch(_0x1aa8c6){}}else _0x51588b&&(_0x37c40c=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x56bf7e));if(_0x454963){if(_0x2cf582){const _0x101f01=_0x23816d['map'](_0x107b46=>({'ip':ipv4ToEmbeddedV6(_0x107b46['ip']),'port':_0x107b46['port']||0x1bb,'name':_0x107b46[_0x50c378(0x134)]}))[_0x50c378(0x13e)](_0x37152f=>_0x37152f['ip']);_0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x101f01];}else{if(_0x56bf7e){const _0x2a15e2=_0x23816d[_0x50c378(0x396)](_0x5d7b0c=>({'ip':ipv4ToEmbeddedV6(_0x5d7b0c['ip']),'port':_0x5d7b0c[_0x50c378(0x296)]||0x1bb,'name':_0x5d7b0c[_0x50c378(0x134)]}))[_0x50c378(0x13e)](_0xdbe2f1=>_0xdbe2f1['ip']);_0x373a59[_0x50c378(0x256)]=[..._0x373a59['preferredIPs']||[],..._0x23816d,..._0x2a15e2];}else _0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x23816d];}}if(!_0x4b9095&&!_0x51588b&&!_0x454963&&!_0x2ac1b4){if(_0x2cf582){const _0x2ba05f=_0x23816d[_0x50c378(0x396)](_0x4c464e=>({'ip':ipv4ToEmbeddedV6(_0x4c464e['ip']),'port':_0x4c464e[_0x50c378(0x296)]||0x1bb,'name':_0x4c464e['name']}))['filter'](_0x42304e=>_0x42304e['ip']);_0x373a59['preferredIPs']=[..._0x373a59['preferredIPs']||[],..._0x2ba05f];}else _0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x23816d];}if(_0x2cf582&&_0x373a59[_0x50c378(0x256)])_0x373a59[_0x50c378(0x256)]=_0x373a59[_0x50c378(0x256)][_0x50c378(0x13e)](_0x3715d4=>String(_0x3715d4['ip'])['indexOf'](':')>=0x0);if(!_0x373a59[_0x50c378(0x2a5)])_0x373a59[_0x50c378(0x2a5)]={};_0x373a59[_0x50c378(0x2a5)][_0x50c378(0x32c)]=Math['max'](parseInt(_0x373a59[_0x50c378(0x2a5)][_0x50c378(0x32c)])||0x0,_0x2cf582?0x0:0x3e8);if(_0x373a59[_0x50c378(0x256)]&&_0x373a59['preferredIPs']['length']){const _0x3a3f91=BUILTIN_STABLE_IPS[_0x50c378(0x396)]((_0x2203d6,_0x2d0403)=>({'ip':_0x2203d6,'port':0x1bb,'name':_0x50c378(0xaf)+String(_0x2d0403+0x1)[_0x50c378(0x1a3)](0x2,'0')})),_0x8d0fa1=new Set(_0x3a3f91[_0x50c378(0x396)](_0x41d1d0=>_0x41d1d0['ip']));_0x373a59[_0x50c378(0x256)]=[..._0x3a3f91,..._0x373a59[_0x50c378(0x256)][_0x50c378(0x13e)](_0x582b92=>!_0x8d0fa1[_0x50c378(0x288)](_0x582b92['ip']))];}}}const _0x267a9c=_0x5e0a8e[_0x50c378(0x100)]&&_0x5e0a8e[_0x50c378(0x100)][_0x50c378(0xc1)]?_0x5e0a8e[_0x50c378(0x100)]:null;if(_0x37c40c[_0x50c378(0xd7)]){let _0x3c3539=_0x37c40c;if(_0x267a9c){const _0x5d7c87=_0x37c40c[_0x50c378(0x13e)](_0x3cc07a=>!_0x267a9c[_0x50c378(0x288)](_0x3cc07a['ip'])),_0x3d52f8=_0x37c40c[_0x50c378(0x13e)](_0x5f3945=>_0x267a9c['has'](_0x5f3945['ip']));_0x3c3539=[..._0x5d7c87,..._0x3d52f8];}const _0x3e4302=(_0x373a59[_0x50c378(0x256)]||[])[_0x50c378(0xd7)];_0x3c3539=_0x3c3539[_0x50c378(0x396)]((_0x175339,_0x1f5851)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x50c378(0x1fa)](_0x175339[_0x50c378(0x134)]||'')?Object[_0x50c378(0x300)]({},_0x175339,{'name':_0x50c378(0x180)+String(_0x3e4302+_0x1f5851+0x1)['padStart'](0x2,'0')}):_0x175339),_0x373a59[_0x50c378(0x256)]=[..._0x373a59[_0x50c378(0x256)]||[],..._0x3c3539];}if(_0x2cf582&&_0x373a59[_0x50c378(0x256)])_0x373a59[_0x50c378(0x256)]=_0x373a59[_0x50c378(0x256)][_0x50c378(0x13e)](_0x11e51b=>String(_0x11e51b['ip'])[_0x50c378(0x12c)](':')>=0x0);_0x32c5f0=(_0x32c5f0||'')[_0x50c378(0x3d9)]();const _0xae260c=(_0x3e8c91||'')['toLowerCase'](),_0x485240=[_0x50c378(0x164),_0x50c378(0x160),'sing-box',_0x50c378(0x23a),_0x50c378(0x382),_0x50c378(0x36f),_0x50c378(0x106),_0x50c378(0x1f1)][_0x50c378(0x283)](_0xae260c)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/[_0x50c378(0x1fa)](_0x32c5f0);let _0x4ffd32=_0x485240?0x12c:0x320;if(_0x1cf084===_0x50c378(0x268)&&_0x5e0a8e[_0x50c378(0x2a5)]&&_0x5e0a8e['optimizer'][_0x50c378(0x356)])_0x4ffd32=_0x485240?Math[_0x50c378(0xae)](_0x4ffd32,0x12c):Math['max'](_0x4ffd32,0x320);if(_0x1cf084===_0x50c378(0x268)&&!(_0x5e0a8e['optimizer']&&_0x5e0a8e[_0x50c378(0x2a5)][_0x50c378(0x356)]))_0x4ffd32=_0x485240?Math[_0x50c378(0xae)](_0x4ffd32,0x320):Math[_0x50c378(0xae)](_0x4ffd32,0x7d0);if(_0x5e0a8e[_0x50c378(0x1d0)]===![])_0x4ffd32=0x2710;if(_0x5e0a8e['nodeLimit']){const _0x47e2c9=parseInt(_0x5e0a8e[_0x50c378(0x170)])||0x0;if(_0x47e2c9>0x0)_0x4ffd32=Math[_0x50c378(0x227)](_0x47e2c9,0x3e8);}if(_0x5e0a8e['_quotaCap'])_0x4ffd32=Math[_0x50c378(0x227)](_0x4ffd32,_0x5e0a8e[_0x50c378(0x39b)]);const _0x119eb5=_0x1cf084===_0x50c378(0x358)?Object['assign']({},_0x5e0a8e[_0x50c378(0x13e)],{'region':_0x50c378(0x24b)}):_0x5e0a8e[_0x50c378(0x13e)];let _0x2290ab=filterNodes(await buildNodes(_0x373a59,_0x4ffd32,_0x267a9c),_0x119eb5);const _0x3720b7=_0x1cf084===_0x50c378(0x268)&&!(_0x5e0a8e[_0x50c378(0x2a5)]&&_0x5e0a8e[_0x50c378(0x2a5)]['subIncludeDefault']);if(!_0x3720b7&&!_0x2cf582)appendFallbackNodes(_0x2290ab,_0x373a59,_0x4ffd32,_0x7850ce);if(!_0x2cf582&&!(_0x3720b7&&_0x2290ab[_0x50c378(0xd7)]>0x0))appendStableNodes(_0x2290ab,_0x373a59,_0x4ffd32);if(_0x5e0a8e['nodeLimit']&&_0x1cf084&&!_0x3720b7&&_0x2290ab[_0x50c378(0xd7)]<_0x4ffd32){const _0x12bd13=_0x4ffd32-_0x2290ab[_0x50c378(0xd7)],_0x1508d2=new Set();for(const _0x1f221e of _0x2290ab){try{_0x1508d2[_0x50c378(0x383)](parseNodeServer(_0x1f221e)['host']);}catch(_0x5f0463){}}const _0x218862=(_0x5f5054,_0x2fedf1,_0x5d48ed)=>{const _0x47606c=_0x50c378;if(_0x2290ab['length']>=_0x4ffd32)return;if(_0x1508d2[_0x47606c(0x288)](_0x5f5054))return;_0x1508d2[_0x47606c(0x383)](_0x5f5054),_0x2290ab[_0x47606c(0x1bf)](vlessNode(_0x373a59,_0x5f5054,_0x2fedf1||0x1bb,_0x5d48ed));};let _0x1a6a4b=0x0;try{const _0x35e79a=await fetchBestcfPool(),_0x49a3f1=_0x267a9c?_0x35e79a[_0x50c378(0x13e)](_0xab65e=>!_0x267a9c['has'](_0xab65e['ip'])):_0x35e79a,_0x19ba7f=_0x49a3f1[_0x50c378(0xd7)]>=_0x12bd13?_0x49a3f1:_0x35e79a;for(const _0x36de8a of _0x19ba7f){_0x218862(_0x36de8a['ip'],_0x36de8a[_0x50c378(0x296)],_0x36de8a['name']||_0x50c378(0x180)+String(_0x36de8a[_0x50c378(0x296)]));if(_0x2290ab['length']>=_0x4ffd32)break;}}catch(_0x57916d){}if(_0x2290ab['length']<_0x4ffd32){const _0x333e05=_0x4ffd32-_0x2290ab[_0x50c378(0xd7)],_0x4f74aa=OFFICIAL_V6_CIDRS,_0x355888=_0x2cf582?_0x4f74aa:_0x56bf7e?[...REACHABLE_CIDRS,..._0x4f74aa]:REACHABLE_CIDRS,_0x312d57=randomIPsFromCidrs(_0x355888,_0x333e05*0x3),_0x4a8ed3=_0x267a9c?_0x312d57['filter'](_0x59e81b=>!_0x267a9c[_0x50c378(0x288)](_0x59e81b)):_0x312d57,_0x4dabef=_0x4a8ed3[_0x50c378(0xd7)]>=_0x333e05?_0x4a8ed3:_0x312d57;for(const _0x4a649a of _0x4dabef){if(_0x2290ab['length']>=_0x4ffd32)break;_0x1a6a4b++,_0x218862(_0x4a649a,0x1bb,_0x50c378(0x180)+String(_0x1a6a4b)[_0x50c378(0x1a3)](0x3,'0'));}}}if(_0x2290ab[_0x50c378(0xd7)]>_0x4ffd32)_0x2290ab[_0x50c378(0xd7)]=_0x4ffd32;const _0xdfa044=[],_0x30d55c=new Set();for(const _0x2008cf of _0x2290ab){try{const {host:_0x348d77}=parseNodeServer(_0x2008cf);isValidIp(_0x348d77)&&!_0x30d55c[_0x50c378(0x288)](_0x348d77)&&(_0x30d55c['add'](_0x348d77),_0xdfa044[_0x50c378(0x1bf)](_0x348d77));}catch(_0x35792e){}}let _0x1aa299,_0x490f38;if(_0xae260c===_0x50c378(0x164))_0x1aa299=_0x50c378(0xa0),_0x490f38=generateClash(_0x373a59,_0x2290ab);else{if(_0xae260c===_0x50c378(0x160)||_0xae260c===_0x50c378(0x2c2))_0x1aa299=_0x50c378(0x1f3),_0x490f38=generateSingbox(_0x373a59,_0x2290ab);else{if(_0xae260c===_0x50c378(0x23a))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateSurge(_0x373a59,_0x2290ab);else{if(_0xae260c==='surfboard')_0x1aa299=_0x50c378(0xeb),_0x490f38=generateSurfboard(_0x373a59,_0x2290ab);else{if(_0xae260c===_0x50c378(0x36f))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateLoon(_0x373a59,_0x2290ab);else{if(_0xae260c===_0x50c378(0x106)||_0xae260c===_0x50c378(0x1f1))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateQuanX(_0x373a59,_0x2290ab);else{if(_0xae260c===_0x50c378(0xc4)||_0xae260c===_0x50c378(0x216))_0x1aa299='text/plain',_0x490f38=_0x2290ab[_0x50c378(0x10e)]('\x0a');else{if(_0xae260c===_0x50c378(0xa3)||_0xae260c===_0x50c378(0x3e7)||_0xae260c==='shadowrocket'||_0xae260c===_0x50c378(0x213)||_0xae260c===_0x50c378(0x16f))_0x1aa299='text/plain',_0x490f38=_0x2290ab[_0x50c378(0x10e)]('\x0a');else{if(_0x32c5f0[_0x50c378(0x283)](_0x50c378(0x164))||_0x32c5f0['includes'](_0x50c378(0x16f)))_0x1aa299='text/yaml',_0x490f38=generateClash(_0x373a59,_0x2290ab);else{if(_0x32c5f0['includes'](_0x50c378(0x2c2)))_0x1aa299=_0x50c378(0x1f3),_0x490f38=generateSingbox(_0x373a59,_0x2290ab);else{if(_0x32c5f0['includes'](_0x50c378(0x23a)))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateSurge(_0x373a59,_0x2290ab);else{if(_0x32c5f0['includes'](_0x50c378(0x382)))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateSurfboard(_0x373a59,_0x2290ab);else{if(_0x32c5f0['includes'](_0x50c378(0x36f)))_0x1aa299=_0x50c378(0xeb),_0x490f38=generateLoon(_0x373a59,_0x2290ab);else _0x32c5f0[_0x50c378(0x283)](_0x50c378(0x147))?(_0x1aa299=_0x50c378(0xeb),_0x490f38=generateQuanX(_0x373a59,_0x2290ab)):(_0x1aa299='text/plain',_0x490f38=_0x2290ab[_0x50c378(0x10e)]('\x0a'));}}}}}}}}}}}}return{'type':_0x1aa299,'body':_0x490f38,'issued':_0xdfa044};}const PANEL_HTML=String[_0x30a059(0x216)]`
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
          <p class="hint" style="margin-top:12px">关闭：不做任何 TCP 握手 / HTTP 探测与剔除，节点的下发策略、出入站方式、ProxyIP 等节点相关均按 V1.x版本处理方式处理——按数据源原始顺序全量下发，客户端自行择优。<br>开启：对候选地址做 TCP 探测并剔除判死项（含精选池 / 优选 IP / 域名预检 / ProxyIP 兜底），但 Cloudflare 运行时禁止出站连接 CF IP 段，对 CF 段 IP 的探测恒判死，内置精选池（实测 97% 可用）会被整体清空，订阅只能用随机 CF IP 补足，自定义订阅 / 随机优选模式不测活。</p>
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

`,loginHTML=_0x30a059(0xd6);function isBrowserUA(_0x4b5a89){const _0x500fda=_0x30a059;return(_0x4b5a89||'')[_0x500fda(0x3d9)]()[_0x500fda(0x283)](_0x500fda(0x10c));}async function requireAuth(_0x12426b,_0x1de3df){const _0x1d16d2=_0x30a059;if(!_0x1de3df['admin'])return!![];const _0x389f4d=_0x12426b[_0x1d16d2(0x2d8)][_0x1d16d2(0x1f4)](_0x1d16d2(0x3c0))||'',_0x286f37=_0x389f4d['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x286f37&&_0x286f37[0x1]===md5hex(String(_0x1de3df[_0x1d16d2(0x3e2)])));}async function handleRequest(_0x979b99,_0x1cc56b){const _0x24d9ff=_0x30a059,_0x1b5404=new URL(_0x979b99[_0x24d9ff(0x2e1)]),_0x1c7c7f=_0x979b99[_0x24d9ff(0x2d8)][_0x24d9ff(0x1f4)](_0x24d9ff(0x208))||'',_0x5c2c83=(_0x979b99['headers'][_0x24d9ff(0x1f4)](_0x24d9ff(0x244))||'')[_0x24d9ff(0x3d9)]();if(_0x1b5404[_0x24d9ff(0x11c)]===_0x24d9ff(0x265))return Response['redirect'](_0x1b5404[_0x24d9ff(0xe0)][_0x24d9ff(0x14e)]('http://','https://'),0x12d);const _0x4ba077=await loadConfig(_0x1cc56b),_0x2b3334=_0x4ba077[_0x24d9ff(0x149)]||_0x4ba077[_0x24d9ff(0x325)],_0x321f2a=_0x1b5404['pathname']['replace'](/^\/+|\/+$/g,''),_0x259303=_0x321f2a[_0x24d9ff(0x246)]('/');if(_0x259303[0x0]===_0x24d9ff(0x2c5))return json({'version':VERSION});if(_0x259303[0x0]===_0x24d9ff(0x37e)){if(_0x979b99['method']===_0x24d9ff(0x217)){const _0x7d062a=await _0x979b99['text'](),_0x492790=new URLSearchParams(_0x7d062a);if(_0x492790[_0x24d9ff(0x1f4)](_0x24d9ff(0x37b))===_0x4ba077['admin']){const _0x32057b=md5hex(String(_0x4ba077[_0x24d9ff(0x3e2)]));return new Response(JSON[_0x24d9ff(0x363)]({'ok':!![],'next':_0x492790[_0x24d9ff(0x1f4)](_0x24d9ff(0x27d))||'/'}),{'status':0xc8,'headers':{'Content-Type':_0x24d9ff(0x398),'Set-Cookie':'luma_auth='+_0x32057b+_0x24d9ff(0x135)}});}return json({'ok':![],'msg':_0x24d9ff(0x218)},0x193);}if(_0x4ba077['admin'])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x24d9ff(0x395)}});return Response[_0x24d9ff(0x30a)](new URL('/'+_0x2b3334,_0x979b99[_0x24d9ff(0x2e1)])['href'],0x12e);}const _0x9417d0=String(_0x4ba077[_0x24d9ff(0x3c7)]||'')[_0x24d9ff(0x36c)]()['replace'](/^\/+/,'')[_0x24d9ff(0x14e)](/\/+$/,''),_0x552096=_0x259303[0x0]===_0x2b3334||!!_0x9417d0&&_0x259303[0x0]===_0x9417d0;if(_0x259303[0x0]===''&&isBrowserUA(_0x1c7c7f))return Response[_0x24d9ff(0x30a)](new URL('/'+_0x2b3334,_0x979b99[_0x24d9ff(0x2e1)])[_0x24d9ff(0xe0)],0x12e);if(_0x552096&&_0x259303[_0x24d9ff(0xd7)]===0x1){if(_0x5c2c83===_0x24d9ff(0x37c))return handleWebSocketProxy(_0x979b99,_0x4ba077);if(_0x979b99['method']===_0x24d9ff(0x217)){if(_0x4ba077['enableXhttp'])try{return await handleXhttpProxy(_0x979b99,_0x4ba077);}catch(_0x160c86){return json({'ok':![],'msg':_0x24d9ff(0x2d0)+(_0x160c86['message']||_0x160c86)},0x1f4);}}}if(_0x552096&&(_0x259303[0x1]===_0x24d9ff(0x9e)||_0x259303[_0x24d9ff(0xd7)]===0x1&&!isBrowserUA(_0x1c7c7f)&&!_0x1c7c7f[_0x24d9ff(0x1e6)](_0x24d9ff(0x131)))){const _0x15e342=_0x259303[_0x24d9ff(0xd7)]>=0x3?_0x259303[0x2]:'';try{let _0x306455=null;if(_0x4ba077[_0x24d9ff(0x1d0)]!==![]&&_0x1cc56b['K']&&typeof _0x1cc56b['K'][_0x24d9ff(0x1f4)]===_0x24d9ff(0x3f8))try{const _0xf3c772=await _0x1cc56b['K']['get'](_0x24d9ff(0xdb));if(_0xf3c772){const _0x2f360c=JSON[_0x24d9ff(0xd1)](_0xf3c772);if(Array['isArray'](_0x2f360c[_0x24d9ff(0x215)])&&_0x2f360c[_0x24d9ff(0x215)][_0x24d9ff(0xd7)])_0x306455=new Set(_0x2f360c['ips']);}}catch(_0x32f730){}const _0x5df544=_0x306455?Object[_0x24d9ff(0x300)]({},_0x4ba077,{'_skipIssued':_0x306455}):_0x4ba077;if(_0x4ba077['quotaAuto'])try{const _0x1db75f=await getQuota(_0x1cc56b,_0x4ba077);if(_0x1db75f[_0x24d9ff(0x3aa)]&&_0x1db75f[_0x24d9ff(0x351)]&&_0x1db75f[_0x24d9ff(0x351)][_0x24d9ff(0x1fe)]>=Math['round'](QUOTA_LIMIT*0.6)){const _0x1ca21c=_0x1db75f['today'][_0x24d9ff(0x1fe)]/_0x1db75f[_0x24d9ff(0x22f)],_0x28819a=Math[_0x24d9ff(0xae)](0.1,(0x1-_0x1ca21c)/0.4);_0x5df544['_quotaCap']=Math[_0x24d9ff(0xae)](0x14,Math[_0x24d9ff(0x2fe)](0x3e8*_0x28819a));}}catch(_0xd381b){}const _0x144d43=await generateSubscription(_0x5df544,_0x979b99['url'],_0x15e342,_0x1c7c7f,_0x979b99['cf']&&_0x979b99['cf'][_0x24d9ff(0x2fd)]);if(_0x4ba077[_0x24d9ff(0x1d0)]!==![]&&_0x1cc56b['K']&&typeof _0x1cc56b['K'][_0x24d9ff(0x23d)]===_0x24d9ff(0x3f8)&&_0x144d43[_0x24d9ff(0xdb)]&&_0x144d43[_0x24d9ff(0xdb)][_0x24d9ff(0xd7)]){const _0x32daad=_0x306455?Array[_0x24d9ff(0x1ed)](_0x306455):[],_0x23f2d8=[...new Set([..._0x144d43['issued'],..._0x32daad])]['slice'](0x0,0xc8),_0x18a345=_0x23f2d8['length']!==_0x32daad['length']||_0x23f2d8[_0x24d9ff(0x346)]((_0x5da59b,_0x34bbb1)=>_0x5da59b!==_0x32daad[_0x34bbb1]);if(_0x18a345){const _0x56014e=JSON['stringify']({'t':Date[_0x24d9ff(0x24d)](),'ips':_0x23f2d8});if(_0x1cc56b[_0x24d9ff(0xb9)]&&typeof _0x1cc56b['_ctx'][_0x24d9ff(0x187)]===_0x24d9ff(0x3f8))_0x1cc56b['_ctx'][_0x24d9ff(0x187)](_0x1cc56b['K'][_0x24d9ff(0x23d)](_0x24d9ff(0xdb),_0x56014e)['catch'](()=>{}));else await _0x1cc56b['K']['put'](_0x24d9ff(0xdb),_0x56014e)[_0x24d9ff(0x1f7)](()=>{});}}return new Response(_0x144d43[_0x24d9ff(0x297)],{'status':0xc8,'headers':{'Content-Type':_0x144d43['type']+_0x24d9ff(0x1be),'Cache-Control':_0x24d9ff(0x364),'Content-Disposition':_0x24d9ff(0x12f)}});}catch(_0x11f149){return new Response(_0x24d9ff(0x2fa)+(_0x11f149&&_0x11f149[_0x24d9ff(0x384)]||_0x11f149),{'status':0x1f4,'headers':{'Content-Type':_0x24d9ff(0x3cb)}});}}if(_0x552096&&_0x259303[_0x24d9ff(0xd7)]===0x1&&isBrowserUA(_0x1c7c7f)){if(!await requireAuth(_0x979b99,_0x4ba077))return Response[_0x24d9ff(0x30a)](new URL(_0x24d9ff(0x10a)+encodeURIComponent('/'+_0x2b3334),_0x979b99['url'])[_0x24d9ff(0xe0)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x24d9ff(0x395)}});}if(_0x552096&&_0x259303[0x1]===_0x24d9ff(0x110)){const _0x40f019=_0x259303[0x2]||'',_0x163d4d=await requireAuth(_0x979b99,_0x4ba077);if(!_0x163d4d)return json({'ok':![],'status':0x193,'msg':_0x24d9ff(0x38e)},0x193);if(_0x40f019==='config'){if(_0x979b99[_0x24d9ff(0x13b)]===_0x24d9ff(0x117))return json({'ok':!![],'data':Object[_0x24d9ff(0x300)]({},_0x4ba077,{'version':VERSION})});if(_0x979b99[_0x24d9ff(0x13b)]==='POST')try{const _0x1c48c9=await _0x979b99[_0x24d9ff(0xe9)]();let _0x4a664a=![];if(_0x1cc56b['K']&&typeof _0x1cc56b['K'][_0x24d9ff(0x1f4)]===_0x24d9ff(0x3f8))try{const _0x3743a9=await _0x1cc56b['K'][_0x24d9ff(0x1f4)](_0x24d9ff(0x3b7),{'cacheTtl':0x1e});if(_0x3743a9){const _0x4e21a1=JSON['parse'](_0x3743a9);if(_0x4e21a1[_0x24d9ff(0x22a)]!==undefined)_0x4a664a=!![];}}catch(_0x46eb36){}const _0x1b4dd9=Object[_0x24d9ff(0x300)](JSON['parse'](JSON[_0x24d9ff(0x363)](_0x4ba077)),_0x1c48c9);if(!_0x4a664a&&_0x1b4dd9[_0x24d9ff(0x22a)]===![]){const _0x389adc=Boolean(_0x1b4dd9['cfAccountId']&&_0x1b4dd9[_0x24d9ff(0x3a0)]||_0x1cc56b['CF_ACCOUNT_ID']&&_0x1cc56b[_0x24d9ff(0x249)]);if(_0x389adc)_0x1b4dd9[_0x24d9ff(0x22a)]=!![];}if(_0x1c48c9['optimizer']&&typeof _0x1c48c9[_0x24d9ff(0x2a5)]==='object')_0x1b4dd9['optimizer']=Object[_0x24d9ff(0x300)](_0x1b4dd9[_0x24d9ff(0x2a5)],_0x1c48c9[_0x24d9ff(0x2a5)]);if(_0x1c48c9[_0x24d9ff(0x256)]&&Array['isArray'](_0x1c48c9[_0x24d9ff(0x256)]))_0x1b4dd9[_0x24d9ff(0x256)]=_0x1c48c9['preferredIPs'];await saveConfig(_0x1cc56b,_0x1b4dd9);const _0x563919=await loadConfig(_0x1cc56b,_0x979b99[_0x24d9ff(0x2e1)]);return json({'ok':!![],'data':Object[_0x24d9ff(0x300)]({},_0x563919,{'version':VERSION}),'msg':_0x24d9ff(0x336)});}catch(_0xd7addb){return json({'ok':![],'msg':_0x24d9ff(0x1e3)+(_0xd7addb['message']||_0xd7addb)},0x1f4);}}if(_0x40f019===_0x24d9ff(0x2cf)){if(_0x979b99[_0x24d9ff(0x13b)]!==_0x24d9ff(0x217))return json({'ok':![],'msg':_0x24d9ff(0x3d3)},0x195);try{if(!_0x1cc56b['K']||typeof _0x1cc56b['K']['delete']!=='function')return json({'ok':![],'msg':_0x24d9ff(0x145)},0x190);return await _0x1cc56b['K'][_0x24d9ff(0x253)](_0x24d9ff(0x3b7)),await _0x1cc56b['K']['delete'](_0x24d9ff(0xdb)),invalidateConfigCache(),json({'ok':!![],'msg':_0x24d9ff(0xad)});}catch(_0x245480){return json({'ok':![],'msg':_0x24d9ff(0x2a7)+(_0x245480['message']||_0x245480)},0x1f4);}}if(_0x40f019===_0x24d9ff(0x195))return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()===_0x24d9ff(0x328)?'混淆版':_0x24d9ff(0x3ac),'host':_0x1b5404[_0x24d9ff(0x276)],'path':_0x2b3334,'region':_0x979b99['cf']&&_0x979b99['cf'][_0x24d9ff(0x2fd)]||_0x24d9ff(0x344),'kv':!!(_0x1cc56b['K']&&typeof _0x1cc56b['K']['get']===_0x24d9ff(0x3f8)),'workersDev':/\.workers\.dev$/i[_0x24d9ff(0x1fa)](_0x1b5404[_0x24d9ff(0x276)])}});if(_0x40f019===_0x24d9ff(0x38c))try{const _0x5b7ab4=await checkUpdate(_0x1cc56b),_0x187fdb={'current':_0x5b7ab4['current'],'latest':_0x5b7ab4[_0x24d9ff(0xf5)],'hasUpdate':_0x5b7ab4['hasUpdate'],'kind':_0x5b7ab4[_0x24d9ff(0x1db)],'error':_0x5b7ab4['error']||''};if(_0x5b7ab4[_0x24d9ff(0x3e4)]&&_0x5b7ab4[_0x24d9ff(0x163)])_0x187fdb[_0x24d9ff(0x163)]=_0x5b7ab4[_0x24d9ff(0x163)];return json({'ok':!![],'data':_0x187fdb});}catch(_0x26c4e0){return json({'ok':![],'msg':'检测失败:\x20'+(_0x26c4e0['message']||_0x26c4e0)},0x1f4);}if(_0x40f019===_0x24d9ff(0x310))try{const _0x2d6a13=await getQuota(_0x1cc56b,_0x4ba077);return json({'ok':!![],'data':_0x2d6a13});}catch(_0xfff4a7){return json({'ok':![],'msg':'查询失败:\x20'+(_0xfff4a7['message']||_0xfff4a7)},0x1f4);}if(_0x40f019==='sub'){const _0xf4b031=_0x1b5404[_0x24d9ff(0x1ac)][_0x24d9ff(0x1f4)](_0x24d9ff(0x1ab))||'';try{const _0x27a604=await generateSubscription(_0x4ba077,_0x979b99[_0x24d9ff(0x2e1)],_0xf4b031,_0x1c7c7f,_0x979b99['cf']&&_0x979b99['cf'][_0x24d9ff(0x2fd)]);return json({'ok':!![],'type':_0x27a604[_0x24d9ff(0x338)],'body':_0x27a604[_0x24d9ff(0x297)]});}catch(_0x217aca){return json({'ok':![],'msg':'订阅生成失败:\x20'+(_0x217aca[_0x24d9ff(0x384)]||_0x217aca)},0x1f4);}}if(_0x40f019===_0x24d9ff(0xd0)){if(_0x979b99[_0x24d9ff(0x13b)]!==_0x24d9ff(0x217))return json({'ok':![],'msg':_0x24d9ff(0x3d3)},0x195);try{const _0x5b5f80=await _0x979b99[_0x24d9ff(0xe9)]()[_0x24d9ff(0x1f7)](()=>({})),_0x24a1d6=await collectCandidates(Object[_0x24d9ff(0x300)]({},_0x4ba077[_0x24d9ff(0x2a5)],_0x5b5f80));if(!_0x24a1d6[_0x24d9ff(0xd0)][_0x24d9ff(0xd7)]){const _0x432d0d=_0x24a1d6[_0x24d9ff(0x284)]||{},_0x4870c2=[_0x432d0d[_0x24d9ff(0x322)]&&_0x24d9ff(0x101)+_0x432d0d[_0x24d9ff(0x322)],_0x432d0d[_0x24d9ff(0xbc)]&&'自定义源:\x20'+_0x432d0d[_0x24d9ff(0xbc)]][_0x24d9ff(0x13e)](Boolean)['join']('；');return json({'ok':![],'msg':'没有可测的\x20IP'+(_0x4870c2?'（'+_0x4870c2+'）':_0x24d9ff(0x2ba))},0x190);}return json({'ok':!![],'data':_0x24a1d6[_0x24d9ff(0xd0)],'stats':_0x24a1d6[_0x24d9ff(0x284)]});}catch(_0x34e837){return json({'ok':![],'msg':_0x24d9ff(0x37f)+(_0x34e837[_0x24d9ff(0x384)]||_0x34e837)},0x1f4);}}if(_0x40f019==='domains')try{const _0x16ee78=OPTIMIZE_SOURCES[_0x1b5404[_0x24d9ff(0x1ac)]['get'](_0x24d9ff(0x2c0))||_0x24d9ff(0x1fb)]||OPTIMIZE_SOURCES[_0x24d9ff(0x1fb)],_0x501559=await fetch(_0x16ee78[_0x24d9ff(0x2e1)],{'headers':{'User-Agent':'Mozilla/5.0'}});if(!_0x501559['ok'])return json({'ok':![],'msg':_0x24d9ff(0x281)+_0x501559['status']});const _0x3c11ca=extractDomains(await _0x501559[_0x24d9ff(0x201)]());return json({'ok':!![],'data':_0x3c11ca});}catch(_0x44685a){return json({'ok':![],'msg':_0x24d9ff(0x37f)+(_0x44685a[_0x24d9ff(0x384)]||_0x44685a)},0x1f4);}return json({'ok':![],'msg':'未知\x20API:\x20'+_0x40f019},0x194);}return new Response('Not\x20Found',{'status':0x194});}async function handleScheduled(_0xe623fe,_0x19494b,_0x8f95b0){const _0x22f660=_0x30a059,_0x4eb87b=String(_0x19494b[_0x22f660(0x303)]||'')[_0x22f660(0x3d9)]();if(_0x4eb87b!=='1'&&_0x4eb87b!==_0x22f660(0x376))return;try{const _0x5c6ace=await loadConfig(_0x19494b),_0x208c38=await collectCandidates(_0x5c6ace[_0x22f660(0x2a5)]),_0x29851c=_0x208c38[_0x22f660(0xd0)]||[];if(!_0x29851c['length'])return;const _0x5b0a55=await runLatencyTest(_0x29851c,_0x5c6ace['optimizer'][_0x22f660(0x259)]||0x5,0x1388),_0x3524ae=_0x5b0a55[_0x22f660(0x13e)](_0x44f599=>_0x44f599['ok'])[_0x22f660(0x239)](0x0,_0x5c6ace[_0x22f660(0x2a5)][_0x22f660(0x17d)]||0x14);if(!_0x3524ae['length'])return;_0x5c6ace[_0x22f660(0x256)]=_0x3524ae[_0x22f660(0x396)](_0x4584d9=>({'ip':_0x4584d9['ip'],'port':_0x4584d9[_0x22f660(0x296)]||0x1bb,'name':''})),await saveConfig(_0x19494b,_0x5c6ace);}catch(_0x513385){}}export default{async 'fetch'(_0x337435,_0x4a5749,_0x5a8502){const _0xeb4665=_0x30a059;return handleRequest(_0x337435,Object[_0xeb4665(0x300)]({},_0x4a5749,{'_ctx':_0x5a8502}));},async 'scheduled'(_0x4cee99,_0x377846,_0x51b638){return handleScheduled(_0x4cee99,_0x377846,_0x51b638);}};