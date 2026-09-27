import{connect as t}from"cloudflare:sockets";const e="2.1.0",n="混淆版";function r(){try{return n==="混淆版"?"obfuscated":"plain"}catch(t){return"plain"}}const a="PAICNI/CFNext";let o=null;function s(t){const e=String(t||"").match(/(\d+)\.(\d+)\.(\d+)/)
;return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:null}function i(t,e){const n=s(t),r=s(e);if(!n||!r)return 0;for(let t=0;t<3;t++)if(n[t]!==r[t])return n[t]<r[t]?-1:1;return 0}function l(t){const e=t.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return e?e[1]:null}
async function c(t){const n=Date.now();if(o&&n-o.t<6e4)return o.r;const s=r()==="obfuscated"?"混淆":"明文";let c=null,d="",p="";const u="https://raw.githubusercontent.com/"+a+"/main/"+encodeURIComponent("CFNext 明文版.js");try{const t=await fetch(u,{headers:{"User-Agent":"Mozilla/5.0 (CFNext)"}});if(t.ok){
const e=await t.text(),n=l(e);n&&(c=n)}}catch(t){p=t&&t.message||String(t)}if(c){const t=s==="混淆"?"CFNext 混淆版.js":"CFNext 明文版.js",r="https://raw.githubusercontent.com/"+a+"/main/"+encodeURIComponent(t);try{const t=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0 (CFNext)"}})
;t.ok&&(d=await t.text())}catch(t){}o={t:n,r:{current:e,kind:s,latest:c,hasUpdate:i(c,e)>0,code:d,checkedAt:n}};return o.r}const f="https://raw.githubusercontent.com/"+a+"/main/"+encodeURIComponent("CFNext 混淆版.js");try{const t=await fetch(f,{headers:{"User-Agent":"Mozilla/5.0 (CFNext)"}});if(t.ok){
const e=await t.text(),n=l(e);n&&(c=n)}}catch(t){p=t&&t.message||String(t)}if(c){o={t:n,r:{current:e,kind:s,latest:c,hasUpdate:i(c,e)>0,code:"",checkedAt:n}};return o.r}return{current:e,kind:s,latest:null,hasUpdate:!1,code:"",error:p||"未在仓库中找到版本信息"}}
const d='\n# ==================== 锚点配置 ====================\n# 代理提供者模板 - 订阅源基础配置\n\n# 节点筛选正则表达式 - 仅保留常用地区\nFilterHK: &FilterHK \'^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\'\nFilterSG: &FilterSG \'^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\'\nFilterJP: &FilterJP \'^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\'\nFilterUS: &FilterUS \'^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\'\n# 注意：🇼🇸 是萨摩亚旗帜，不是台湾，已移除，避免误匹配\nFilterTW: &FilterTW \'^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\'\n\n# ==================== 监听器 ====================\nlisteners:\n  # Shadowsocks监听器 - 远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\n  - {name: SS-IN,  type: shadowsocks, listen: \'::\', port: 10000, udp: true, password: Xf3#Lp9WqZ, cipher: aes-256-gcm}\n  # Mixed监听器 - 分地区专用端口 玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\n  - {name: MIXED-SG, type: mixed, port: 50000, proxy: 新加坡节点}\n  - {name: MIXED-US, type: mixed, port: 50001, proxy: 美国节点}\n  - {name: MIXED-TW, type: mixed, port: 50002, proxy: 台湾节点}\n  - {name: MIXED-HK, type: mixed, port: 50003, proxy: 香港节点}\n  - {name: MIXED-JP, type: mixed, port: 50004, proxy: 日本节点}\n  - {name: MIXED-AL, type: mixed, port: 50007, proxy: 一键连接}\n\n# ==================== 核心配置 ====================\nmode: rule\nport: 7890\nsocks-port: 7891\nredir-port: 7892\nmixed-port: 7893\ntproxy-port: 7895\nipv6: true\nallow-lan: true\nunified-delay: true\ntcp-concurrent: true\nlog-level: warning\nbind-address: \'*\'\nfind-process-mode: \'always\'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# 认证配置（默认凭据请务必修改！）\nauthentication:\n  - mihomo:yyds666\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# 实验性功能\nexperimental:\n  quic-go-disable-gso: true\n\n# 管理面板配置\nexternal-ui-url: https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\nexternal-ui-name: zashboard\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: yyds666    # 请修改为自定义密钥\n# 允许网页面板跨域访问\nexternal-controller-cors:\n  allow-origins:\n    - "*"\n  allow-private-network: true\n\n# 配置存储\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# 流量嗅探\nsniffer:\n  enable: true\n  force-dns-mapping: true   # 强制 DNS 映射，提高分流准确度\n  parse-pure-ip: true       # 解析纯 IP 连接\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    TLS:\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - "+.push.apple.com"\n\n# TUN模式配置\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  dns-hijack:\n    - "any:53"\n    - "tcp://any:53"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # 提示：系统级防泄露的最强手段是开启 TUN（自动劫持全部 DNS 流量）；\n  # 不开 TUN 时，请把系统 / LAN 设备的 DNS 指向 127.0.0.1:53（本机）或本机局域网 IP:53。\n\nhosts:\n  miwifi.com: 192.168.31.2\n  "epdg.epc.mnc010.mcc234.pub.3gppnetwork.org": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS 配置 ====================\n# 防泄露要点：\n#   1) respect-rules: true：DNS 服务器连接遵循路由规则（国外 DoH 走代理隧道、国内 DoH 直连），\n#      解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\n#   2) 默认 nameserver 用国内 DoH；只有“将走代理”的规则集才用国外 DoH，\n#      且其域名在 rules 中显式固定走代理。\n#   3) fake-ip-filter 补齐系统连通性检测 / 时间同步 / 运营商登录等域名，防止系统误判断网而回退运营商 DNS。\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # 本机 / LAN 设备可把 DNS 指向此地址，避免走运营商 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules 下官方不推荐 DoH3；且 QUIC 已被规则拦截\n  cache-algorithm: arc      # 性能更优的 ARC 缓存算法\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "+.lan"\n    - "+.local"\n    - "+.localhost"\n    - "+.home.arpa"\n    - "+.internal"\n    # 系统连通性检测（防止 fake-ip 导致“无网络”判断，回退 ISP DNS 造成泄露）\n    - "+.msftconnecttest.com"\n    - "+.msftncsi.com"          # 通配已覆盖 dns.msftncsi.com\n    - "captive.apple.com"\n    - "connectivitycheck.gstatic.com"\n    - "detectportal.firefox.com"\n    # 时间同步\n    - "time.nist.gov"\n    - "+.pool.ntp.org"\n    - "time.*.com"              # 通配已覆盖 time.windows.com\n    - "ntp.*.com"               # 通配已覆盖 ntp.ubuntu.com\n    # 运营商 Wi-Fi 登录页\n    - "+.cmpassport.com"\n    - "id6.me"\n    - "open.e.189.cn"\n    - "mdn.open.wo.cn"\n    - "opencloud.wostore.cn"\n    - "auth.wosms.cn"\n    - "+.10099.com.cn"\n    # 原配置保留项\n    - "+.market.xiaomi.com"\n    - "+.pub.3gppnetwork.org"\n    - "+.push.apple.com"\n    - "+.bing.com"\n    - "+.miwifi.com"\n    - "+.docker.io"\n    # 国内应用登录（+.qq.com 已覆盖 localhost.ptlogin2.qq.com）\n    - "+.qq.com"\n    # 直连 / 国内类规则集：返回真实 IP\n    - rule-set:Direct\n    - rule-set:Private\n    - rule-set:China\n  use-hosts: true\n  respect-rules: true\n  # 引导用 DNS（解析 DoH/DoT 服务器自身的域名），必须是 IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # 默认解析：未命中 nameserver-policy 的域名（国内 DoH，直连）\n  nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # 直连出口的解析\n  direct-nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # 解析代理节点域名（防套娃 / 防循环，用国内直连可达的 DoH）\n  proxy-server-nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  nameserver-policy:\n    # 广告域名直接返回空应答\n    "rule-set:Advertising,AWAvenueAds": rcode://success\n    # 直连类：国内 DoH（微软已并入直连，微软域名走国内解析后直连）\n    "rule-set:Direct,Private,China,Microsoft":\n      - "https://dns.alidns.com/dns-query"\n      - "https://doh.pub/dns-query"\n    # 走代理类：国外 DoH（连接本身经代理隧道，不直连暴露查询）\n    "rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy":\n      - "https://dns.google/dns-query"\n      - "https://cloudflare-dns.com/dns-query"\n\n# ==================== 代理策略组（9 个可见 + 6 个隐藏自动子组） ====================\nproxy-groups:\n  # 主入口：默认自动选择，可手动切换各地区 / 故障转移 / 全部节点 / 直接连接\n  - {name: 一键连接,     type: select, proxies: [自动选择, 故障转移, 香港节点, 台湾节点, 日本节点, 美国节点, 新加坡节点, 全部节点, 直接连接], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\n  # 自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\n  - {name: 自动选择,     type: url-test, include-all: true, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  - {name: 故障转移,     type: fallback, proxies: [香港节点, 台湾节点, 日本节点, 美国节点, 新加坡节点, 全部节点], url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\n  # 常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\n  - {name: 香港节点,     type: select, include-all: true, filter: *FilterHK, proxies: [香港自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\n  - {name: 台湾节点,     type: select, include-all: true, filter: *FilterTW, proxies: [台湾自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\n  - {name: 日本节点,     type: select, include-all: true, filter: *FilterJP, proxies: [日本自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\n  - {name: 美国节点,     type: select, include-all: true, filter: *FilterUS, proxies: [美国自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\n  - {name: 新加坡节点,   type: select, include-all: true, filter: *FilterSG, proxies: [新加坡自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\n  # 全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\n  - {name: 全部节点,     type: select, include-all: true, proxies: [自动选择], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\n  # 各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\n  - {name: 香港自动,     type: url-test, include-all: true, filter: *FilterHK, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  - {name: 台湾自动,     type: url-test, include-all: true, filter: *FilterTW, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  - {name: 日本自动,     type: url-test, include-all: true, filter: *FilterJP, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  - {name: 美国自动,     type: url-test, include-all: true, filter: *FilterUS, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  - {name: 新加坡自动,   type: url-test, include-all: true, filter: *FilterSG, url: \'https://www.google.com/generate_204\', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\n  # 直连分组（放在最下方）\n  - {name: 直接连接,     type: select, proxies: [DIRECT], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\n\n# ==================== 规则路由 ====================\nrules:\n  # 广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\n  - RULE-SET,Tracking,REJECT\n  - RULE-SET,AWAvenueAds,REJECT\n  - RULE-SET,Advertising,REJECT\n\n  # DNS 服务器域名：解析通道固定，避免 DNS 流量走错路径（防泄露关键）\n  - DOMAIN-SUFFIX,alidns.com,直接连接\n  - DOMAIN-SUFFIX,doh.pub,直接连接\n  - DOMAIN,dns.google,一键连接\n  - DOMAIN,cloudflare-dns.com,一键连接\n\n  # 大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\n  - RULE-SET,Private,直接连接\n  - RULE-SET,Direct,直接连接\n  - RULE-SET,Download,直接连接\n  - RULE-SET,AppleCN,直接连接\n  - RULE-SET,Microsoft,直接连接        # 微软全家桶直连（Office / OneDrive / Windows 更新 / Teams / Xbox 等）\n  - RULE-SET,China,直接连接             # 国内域名直连\n  # 阻止走代理的 QUIC（强制回退 TCP，避免 QUIC 绕过代理 / 被干扰）。\n  # 放在直连规则之后：直连 QUIC（大陆 / 微软 / 苹果）不受影响。如需 Telegram 语音等 UDP，可删除此行。\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # 常用国外服务（统一走一键连接）\n  - RULE-SET,AI,一键连接\n  - RULE-SET,Telegram,一键连接\n  - RULE-SET,Twitter,一键连接\n  - RULE-SET,SocialMedia,一键连接\n  - RULE-SET,Netflix,一键连接\n  - RULE-SET,YouTube,一键连接\n  - RULE-SET,Spotify,一键连接\n  - RULE-SET,TikTok,一键连接\n  - RULE-SET,disney,一键连接\n  - RULE-SET,Google,一键连接\n  - RULE-SET,github,一键连接\n  - RULE-SET,Proxy,一键连接\n\n  # IP规则\n  - RULE-SET,PrivateIP,直接连接,no-resolve\n  - RULE-SET,TelegramIP,一键连接,no-resolve\n  - RULE-SET,ProxyIP,一键连接,no-resolve\n  - RULE-SET,ChinaIP,直接连接,no-resolve\n\n  # 大陆 IP 兜底直连：覆盖规则集未收录的域名 / 纯 IP 连接的大陆应用（GEOIP 库覆盖面更全）\n  - GEOIP,CN,直接连接,no-resolve\n\n  # 兜底规则：其余（国外）走一键连接\n  - MATCH,一键连接\n\n# ==================== 规则集 ====================\n# 规则集行为模板\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # 经典规则集（blackmatrix7 等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\n\n# 规则提供者（仅保留常用）\nrule-providers:\n  # 广告\n  Tracking:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\n  AWAvenueAds:    {<<: *BehaviorDY, url: https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\n  # 直连 / 国内\n  Direct:         {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}   # 大陆直连全量：ChinaMaxNoIP（11万+ 域名，含大陆可达国际服务），每日更新\n  # 常用国外服务\n  AI:             {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\n  YouTube:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\n  Google:         {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}   # 微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure 等）\n  Proxy:          {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\n  # 媒体（DustinWin）\n  Spotify:        {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\n  disney:         {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: https://rule.kelee.one/Clash/GitHub.yaml}\n  # IP规则\n  PrivateIP:      {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\n  ProxyIP:        {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\n\n# ==================== EOF ====================\n\n',p=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],u=["104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],f=["2400:cb00::/32","2606:4700::/32","2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29","2c0f:f248::/32"],h=["2606:4700::/32","2400:cb00::/32","2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"]
;let m=f.slice(),g=0;async function b(){const t=Date.now();if(!(g&&t-g<216e5))try{const e=await fetch("https://www.cloudflare.com/ips-v6/",{signal:AbortSignal.timeout(1e4)});if(!e.ok)return
;const n=await e.text(),r=String(n).split("\n").map(t=>t.trim()).filter(t=>/^[0-9a-fA-F:.]+\/\d+$/.test(t)&&t.indexOf(":")>=0);if(r.length>=3){m=r;g=t}}catch(t){}}function v(t,e){const[n,r]=e.split("/"),a=parseInt(r,10),o=t=>{const e=t.indexOf("::");let n;if(e>=0){
const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))},s=t=>t.map(t=>parseInt(t,16).toString(2).padStart(16,"0")).join("")
;return s(o(t)).slice(0,a)===s(o(n)).slice(0,a)}function x(t){t=String(t||"");if(!H(t))return!1;if(t.indexOf(":")>=0)return f.some(e=>v(t,e));const e=t.split(".").map(Number),n=(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0;return _.some(([t,e])=>n>=t&&n<=e)}const y={HK:"香港",TW:"台湾",MO:"澳门",JP:"日本",SG:"新加坡",
US:"美国",KR:"韩国",DE:"德国",FR:"法国",GB:"英国",CA:"加拿大",AU:"澳大利亚",SE:"瑞典",NL:"荷兰",FI:"芬兰",NO:"挪威",DK:"丹麦",CH:"瑞士",IT:"意大利",ES:"西班牙",PT:"葡萄牙",IE:"爱尔兰",BE:"比利时",AT:"奥地利",PL:"波兰",CZ:"捷克",RO:"罗马尼亚",HU:"匈牙利",GR:"希腊",RU:"俄罗斯",TR:"土耳其",UA:"乌克兰",IN:"印度",TH:"泰国",MY:"马来西亚",VN:"越南",PH:"菲律宾",ID:"印尼",BR:"巴西",MX:"墨西哥",
AR:"阿根廷",CL:"智利",ZA:"南非",EG:"埃及",AE:"阿联酋",IL:"以色列",NZ:"新西兰",KZ:"哈萨克斯坦",SA:"沙特"
},w=["https://bestcf.pages.dev/random-region/HK/100.txt","https://bestcf.pages.dev/random-region/TW/100.txt","https://bestcf.pages.dev/random-region/JP/100.txt","https://bestcf.pages.dev/random-region/SG/100.txt","https://bestcf.pages.dev/random-region/US/100.txt","https://bestcf.pages.dev/random-region/KR/100.txt"].join("\n"),I=/random-region\/[A-Z]{2,}\/\d+\.txt/i
;function k(t){return I.test(String(t||""))}const P={uuid:"",path:"",admin:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,alpn:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:500,polling:!1,loadBalance:!0,probeAlive:!0,
cfAccountId:"",cfApiToken:"",quotaAuto:!1,proxyIP:"",outboundProxy:"",outboundMode:"",
preferredDomains:"https://bestcf.pages.dev/random-region/HK/100.txt\nhttps://bestcf.pages.dev/random-region/TW/100.txt\nhttps://bestcf.pages.dev/random-region/JP/100.txt\nhttps://bestcf.pages.dev/random-region/SG/100.txt\nhttps://bestcf.pages.dev/random-region/US/100.txt\nhttps://bestcf.pages.dev/random-region/KR/100.txt",
preferredIPs:[],optimizer:{source:"wetest_v4",sourceURL:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:"all",ipType:["IPv4","IPv6"],isp:["移动","联通","电信"]}
},S=["cloudflare.com","www.cloudflare.com","speed.cloudflare.com"],C=["104.16.128.11","172.67.72.4","104.17.201.77","104.16.66.7","104.16.88.7","104.16.98.7","104.17.2.7","104.17.44.9","104.18.34.34","104.18.7.34","104.19.191.31","104.19.1.1","104.20.15.15","104.20.1.1","104.21.23.1","104.21.2.1","104.24.12.10","104.25.0.1","104.26.1.1","162.159.128.1"],A=[{
label:"香港",region:"HK",url:"https://bestcf.pages.dev/random-region/HK/100.txt",count:12},{label:"日本",region:"JP",url:"https://bestcf.pages.dev/random-region/JP/100.txt",count:12},{label:"美国",region:"US",url:"https://bestcf.pages.dev/random-region/US/100.txt",count:12},{label:"新加坡",region:"SG",
url:"https://bestcf.pages.dev/random-region/SG/100.txt",count:12},{label:"台湾",region:"TW",url:"https://bestcf.pages.dev/random-region/TW/100.txt",count:12
}],T=["104.17.127.180#优选IP-001","104.16.123.96#优选IP-002","104.16.124.96#优选IP-003","104.16.125.96#优选IP-004","104.16.126.96#优选IP-005","104.16.127.96#优选IP-006","104.16.132.229#优选IP-007","104.16.248.248#优选IP-008","104.16.249.249#优选IP-009","162.159.0.1#优选IP-010","188.114.96.1#优选IP-011","104.17.24.252#优选IP-012","188.114.99.52#优选IP-013","162.159.94.229#优选IP-014","162.159.5.175#优选IP-015","104.18.119.34#优选IP-016","104.21.213.24#优选IP-017","104.17.234.5#优选IP-018","104.16.245.187#优选IP-019","172.67.64.211#优选IP-020","172.67.64.12#优选IP-021","104.18.43.224#优选IP-022","104.18.40.93#优选IP-023","104.18.37.92#优选IP-024","104.18.47.234#优选IP-025","104.18.42.54#优选IP-026","172.64.144.49#优选IP-027","172.64.146.15#优选IP-028","104.17.185.207#优选IP-029","104.17.101.139#优选IP-030","162.159.44.215#优选IP-031","162.159.44.214#优选IP-032","104.18.217.109#优选IP-033","172.65.127.225#优选IP-034","104.18.184.243#优选IP-035","162.159.137.205#优选IP-036","172.65.64.7#优选IP-037","104.25.45.44#优选IP-038","104.19.88.253#优选IP-039","162.159.136.73#优选IP-040","104.18.185.40#优选IP-041","104.25.141.168#优选IP-042","104.25.246.123#优选IP-043","104.24.54.254#优选IP-044","104.19.123.4#优选IP-045","188.114.98.144#优选IP-046","188.114.99.18#优选IP-047","104.17.127.106#优选IP-048","162.159.4.175#优选IP-049","104.18.255.187#优选IP-050","172.65.173.221#优选IP-051","104.18.176.111#优选IP-052","104.25.122.6#优选IP-053","188.114.96.116#优选IP-054","104.25.214.211#优选IP-055","104.16.223.195#优选IP-056","104.25.101.186#优选IP-057","172.64.81.44#优选IP-058","104.25.143.238#优选IP-059","188.114.99.114#优选IP-060","104.19.169.53#优选IP-061","104.16.113.211#优选IP-062","104.27.40.81#优选IP-063","188.114.98.91#优选IP-064","162.159.236.5#优选IP-065","104.25.44.144#优选IP-066","162.159.46.167#优选IP-067","104.18.84.180#优选IP-068","104.18.196.199#优选IP-069","104.24.155.234#优选IP-070","162.159.228.244#优选IP-071","162.159.235.27#优选IP-072","104.19.214.25#优选IP-073","104.19.168.107#优选IP-074","104.24.244.237#优选IP-075","104.27.66.179#优选IP-076","104.24.2.253#优选IP-077","104.21.61.179#优选IP-078","104.21.114.216#优选IP-079","188.114.98.53#优选IP-080","172.65.145.187#优选IP-081","188.114.96.255#优选IP-082","104.25.245.147#优选IP-083","172.66.161.31#优选IP-084","104.18.133.24#优选IP-085","188.114.99.155#优选IP-086","172.64.34.109#优选IP-087","172.64.145.202#优选IP-088","104.19.78.30#优选IP-089","104.17.118.180#优选IP-090","104.17.13.179#优选IP-091","172.65.35.169#优选IP-092","104.16.0.133#优选IP-093","104.16.238.98#优选IP-094","104.18.28.140#优选IP-095","104.19.115.243#优选IP-096","104.24.58.243#优选IP-097","104.27.207.36#优选IP-098","104.21.192.230#优选IP-099","104.25.20.146#优选IP-100","104.27.113.151#优选IP-101","104.24.230.144#优选IP-102","172.65.134.100#优选IP-103","188.114.96.94#优选IP-104","104.25.197.107#优选IP-105","104.16.108.18#优选IP-106","172.64.233.36#优选IP-107","172.67.163.14#优选IP-108","104.24.230.213#优选IP-109","104.19.106.1#优选IP-110","104.27.72.4#优选IP-111","104.21.57.47#优选IP-112","172.65.162.213#优选IP-113","172.67.255.83#优选IP-114","172.67.189.246#优选IP-115","162.159.230.149#优选IP-116","162.159.197.16#优选IP-117","172.67.103.87#优选IP-118","162.159.237.243#优选IP-119","104.25.193.135#优选IP-120","104.18.141.27#优选IP-121","172.65.11.191#优选IP-122","104.24.184.158#优选IP-123","188.114.97.52#优选IP-124","104.27.4.144#优选IP-125","104.25.93.154#优选IP-126","172.66.199.166#优选IP-127","172.67.64.94#优选IP-128","104.27.94.231#优选IP-129","104.24.168.96#优选IP-130","104.18.173.224#优选IP-131","172.67.173.89#优选IP-132","104.17.107.217#优选IP-133","188.114.97.91#优选IP-134","104.17.195.184#优选IP-135","162.159.14.18#优选IP-136","172.67.229.44#优选IP-137","104.24.51.58#优选IP-138","104.19.97.238#优选IP-139","104.25.161.217#优选IP-140","104.17.146.117#优选IP-141","172.67.161.136#优选IP-142","104.17.99.0#优选IP-143","104.25.100.203#优选IP-144","104.19.23.222#优选IP-145","188.114.96.141#优选IP-146","104.19.247.23#优选IP-147","104.25.24.66#优选IP-148","104.16.123.26#优选IP-149","104.27.23.242#优选IP-150","104.25.36.200#优选IP-151","104.17.195.133#优选IP-152","104.16.68.175#优选IP-153","188.114.98.19#优选IP-154","104.16.218.231#优选IP-155","104.18.28.48#优选IP-156","162.159.143.225#优选IP-157","162.159.19.201#优选IP-158","104.25.166.112#优选IP-159","104.16.201.45#优选IP-160","104.16.91.33#优选IP-161","172.67.82.86#优选IP-162","104.16.11.246#优选IP-163","188.114.97.61#优选IP-164","104.17.240.245#优选IP-165","172.66.157.150#优选IP-166","104.17.25.173#优选IP-167","104.18.26.28#优选IP-168","104.18.123.15#优选IP-169","104.25.124.155#优选IP-170","188.114.96.64#优选IP-171","104.18.18.214#优选IP-172","104.17.46.187#优选IP-173","104.17.153.58#优选IP-174","188.114.96.89#优选IP-175","172.67.174.143#优选IP-176","104.25.251.220#优选IP-177","104.27.195.79#优选IP-178","162.159.153.10#优选IP-179","104.25.129.238#优选IP-180","172.65.3.67#优选IP-181","172.67.232.109#优选IP-182","104.18.178.193#优选IP-183","104.19.78.144#优选IP-184","104.18.63.107#优选IP-185","104.19.69.150#优选IP-186","104.25.73.92#优选IP-187","172.67.195.152#优选IP-188","172.65.184.114#优选IP-189","172.65.202.216#优选IP-190","172.65.21.190#优选IP-191","104.19.32.220#优选IP-192","104.18.211.8#优选IP-193","104.17.160.131#优选IP-194","162.159.6.39#优选IP-195","162.159.43.223#优选IP-196","104.21.224.5#优选IP-197","104.25.18.216#优选IP-198","162.159.6.246#优选IP-199","104.24.46.127#优选IP-200","104.17.87.46#优选IP-201","188.114.97.80#优选IP-202","188.114.97.108#优选IP-203","162.159.241.11#优选IP-204","188.114.97.0#优选IP-205","188.114.99.14#优选IP-206","104.19.68.127#优选IP-207","162.159.10.45#优选IP-208","104.25.181.74#优选IP-209","104.24.178.200#优选IP-210","188.114.96.164#优选IP-211","104.24.41.240#优选IP-212","104.17.97.72#优选IP-213","104.16.77.112#优选IP-214","104.19.181.118#优选IP-215","172.67.165.245#优选IP-216","104.17.169.109#优选IP-217","172.65.44.103#优选IP-218","188.114.97.63#优选IP-219","172.65.47.182#优选IP-220","104.17.245.237#优选IP-221","162.159.2.86#优选IP-222","188.114.96.151#优选IP-223","172.65.139.108#优选IP-224","172.65.118.105#优选IP-225","104.21.7.133#优选IP-226","162.159.134.174#优选IP-227","104.18.194.107#优选IP-228","188.114.97.21#优选IP-229","162.159.9.18#优选IP-230","104.18.41.168#优选IP-231","162.159.192.111#优选IP-232","162.159.240.54#优选IP-233","104.17.0.4#优选IP-234","104.25.86.143#优选IP-235","104.27.97.130#优选IP-236","172.67.127.122#优选IP-237","104.25.33.126#优选IP-238","104.25.223.90#优选IP-239","104.25.123.130#优选IP-240","172.65.167.52#优选IP-241","172.67.159.243#优选IP-242","104.25.113.22#优选IP-243","188.114.98.27#优选IP-244","162.159.198.200#优选IP-245","104.17.76.49#优选IP-246","104.21.215.255#优选IP-247","172.67.131.200#优选IP-248","162.159.135.234#优选IP-249","172.65.45.102#优选IP-250","172.66.164.60#优选IP-251","162.159.26.248#优选IP-252","162.159.90.82#优选IP-253","172.65.50.167#优选IP-254","162.159.236.19#优选IP-255","104.19.143.220#优选IP-256","104.17.151.244#优选IP-257","104.17.121.245#优选IP-258","104.18.144.168#优选IP-259","162.159.228.231#优选IP-260","104.17.100.40#优选IP-261","104.27.116.114#优选IP-262","162.159.199.220#优选IP-263","104.20.17.160#优选IP-264","104.25.62.39#优选IP-265","104.27.20.220#优选IP-266","172.65.118.85#优选IP-267","104.19.83.33#优选IP-268","188.114.96.238#优选IP-269","162.159.42.67#优选IP-270","104.27.46.114#优选IP-271","104.25.126.144#优选IP-272","104.25.173.14#优选IP-273","104.24.46.107#优选IP-274","104.25.109.0#优选IP-275","162.159.137.71#优选IP-276","104.25.238.28#优选IP-277","104.27.124.239#优选IP-278","104.24.34.149#优选IP-279","104.19.246.234#优选IP-280","162.159.10.243#优选IP-281","104.27.96.232#优选IP-282","172.65.78.200#优选IP-283","104.24.25.178#优选IP-284","104.24.84.86#优选IP-285","104.25.238.237#优选IP-286","104.16.45.249#优选IP-287","104.16.234.241#优选IP-288","104.24.18.62#优选IP-289","172.65.45.248#优选IP-290","104.25.169.144#优选IP-291","104.27.27.106#优选IP-292","162.159.43.85#优选IP-293","172.67.71.106#优选IP-294","162.159.228.164#优选IP-295","104.24.250.89#优选IP-296","104.18.185.26#优选IP-297","104.27.21.175#优选IP-298","104.24.49.39#优选IP-299","172.67.85.54#优选IP-300"],$=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org","bestcf.top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf.090227.xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org","bestcf.030101.xyz","cdns.doon.eu.org","fn.130519.xyz","saas.sin.fan"].join("\n"),U=new Set([80,8080,8880,2052,2082,2086,2095]),E={
wetest_v4:{label:"微测网 IPv4",url:"https://www.wetest.vip/page/cloudflare/address_v4.html"},wetest_v6:{label:"微测网 IPv6",url:"https://www.wetest.vip/page/cloudflare/address_v6.html"},bestcf:{label:"优选 IP 列表",url:"https://cf.090227.xyz/ip.164746.xyz"},hostmonit:{label:"HostMonit 优选",
url:"https://stock.hostmonit.com/CloudFlareYes"},wetest_cname:{label:"微测网 优选域名",url:"https://www.wetest.vip/page/cloudflare/cname.html"}},D=new TextEncoder,O=new TextDecoder;function N(t){let e="";const n=32768;for(let r=0;r<t.length;r+=n)e+=String.fromCharCode(...t.subarray(r,r+n));return btoa(e)}
const L=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],M=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745]
;function R(t,e){return(t<<e|t>>>32-e)>>>0}function z(t){const e=D.encode(String(t)),n=e.length*8,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e);a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,n>>>0,!0);o.setUint32(r-4,Math.floor(n/4294967296),!0)
;let s=1732584193,i=4023233417,l=2562383102,c=271733878;for(let t=0;t<r;t+=64){const e=new Uint32Array(16);for(let n=0;n<16;n++)e[n]=o.getUint32(t+n*4,!0);let n=s,r=i,a=l,d=c;for(let t=0;t<64;t++){let o,s;if(t<16){o=r&a|~r&d;s=t}else if(t<32){o=d&r|~d&a;s=(5*t+1)%16}else if(t<48){o=r^a^d
;s=(3*t+5)%16}else{o=a^(r|~d);s=7*t%16}const i=n+o+M[t]+e[s]>>>0,l=r+R(i,L[t])>>>0;n=d;d=a;a=r;r=l}s=s+n>>>0;i=i+r>>>0;l=l+a>>>0;c=c+d>>>0}let d="";for(const t of[s,i,l,c]){d+=(t&255).toString(16).padStart(2,"0");d+=(t>>>8&255).toString(16).padStart(2,"0")
;d+=(t>>>16&255).toString(16).padStart(2,"0");d+=(t>>>24&255).toString(16).padStart(2,"0")}return d}function F(){if(crypto.randomUUID)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint8Array(16));t[6]=t[6]&15|64;t[8]=t[8]&63|128
;return[...t].map((t,e)=>(e===4||e===6||e===8||e===10?"-":"")+t.toString(16).padStart(2,"0")).join("")}function q(t){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(t||"")}function j(t,e=443){t=String(t||"").trim();if(!t)return{host:"",port:e}
;if(t.startsWith("[")){const n=t.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:n?n[1]:t.replace(/^\[|\]$/g,""),port:n&&n[2]?parseInt(n[2]):e}}const n=t.lastIndexOf(":");return n>0&&/^\d+$/.test(t.slice(n+1))?{host:t.slice(0,n),port:parseInt(t.slice(n+1))}:{host:t,port:e}}function H(t){
t=String(t||"").trim();if(!t)return!1;const e=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(e)return e.slice(1).every(t=>Number(t)<=255);if(!/^[0-9a-fA-F:]+$/.test(t))return!1;if((t.match(/::/g)||[]).length>1)return!1
;const n=t.includes("::"),r=t.replace(/::/g,":").split(":").filter(Boolean);return!(!n&&r.length!==8)&&((!n||!(r.length<1||r.length>7))&&r.every(t=>/^[0-9a-fA-F]{1,4}$/.test(t)))}function K(t){const e=[];for(let n=0;n<16;n+=2)e.push((t[n]<<8|t[n+1]).toString(16));let n=-1,r=0,a=-1,o=0
;for(let t=0;t<8;t++)if(e[t]==="0"){if(a<0){a=t;o=1}else o++;if(o>r){r=o;n=a}}else{a=-1;o=0}if(r>=2){const t=e.slice(0,n).join(":"),a=e.slice(n+r).join(":");return(t?t+"::":"::")+a}return e.join(":")}function B(t){
const[e,n]=t.split("/"),r=e.split(".").map(Number),a=(r[0]<<24|r[1]<<16|r[2]<<8|r[3])>>>0,o=n>=32?0:4294967295<<32-n>>>0,s=(a&o)>>>0,i=(a|~o>>>0)>>>0;return[s,i]}const _=p.map(B),G=new Map;function W(t){let e=G.get(t);if(!e){e=B(t);G.set(t,e)}return e}function V(t){
if(String(t).indexOf(":")>=0)return J(t);const[e,n]=W(t),r=e+Math.floor(Math.random()*(n-e>>>0));return`${r>>>24&255}.${r>>>16&255}.${r>>>8&255}.${r&255}`}function J(t){const[e,n]=t.split("/"),r=parseInt(n,10)||0,a=t=>{const e=t.indexOf("::");let n;if(e>=0){
const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))},o=a(e).map(t=>parseInt(t,16));let s=0;for(let t=0;t<8;t++)for(let e=15;e>=0;e--){
s>=r&&(o[t]|=(Math.random()<.5?1:0)<<e);s++}return o.map(t=>t.toString(16)).join(":")}function Q(t){const e=String(t||"").split(".").map(t=>parseInt(t,10).toString(16).padStart(2,"0"));return e.length!==4||e.some(t=>t==="NaN")?null:"2606:4700::"+e[0]+e[1]+":"+e[2]+e[3]}function X(t,e){
const n=new Set,r=[];let a=0;for(;r.length<e&&a++<e*20;){const e=V(t[Math.floor(Math.random()*t.length)]);if(!n.has(e)){n.add(e);r.push(e)}}return r}function Y(t){const e=[],n=new Set;String(t||"").split(/[\n,;]+/).map(t=>t.trim()).filter(Boolean).forEach(t=>{let r="";if(t.includes("#")){
const[e,n]=t.split("#");t=e;r=n}const{host:a,port:o}=j(t,443);if(a&&H(a)&&!n.has(a)){n.add(a);e.push({ip:a,port:o,name:r})}});return e}function Z(t){if(!t)return null;let e="socks5",n=String(t).trim();const r=n.match(/^(socks5|http|https|ss):\/\/(.+)$/i);if(r){e=r[1].toLowerCase();n=r[2]}
if(e==="ss")return tt(n);let a="",o="";if(n.includes("@")){const[t,e]=n.split("@"),r=t=>{try{return decodeURIComponent(t)}catch(e){return t}},s=t.indexOf(":");if(s>=0){a=r(t.slice(0,s));o=r(t.slice(s+1))}else a=r(t);n=e}const s=e==="http"?80:e==="https"?443:1080,{host:i,port:l}=j(n,s);return{type:e,
host:i,port:l,user:a,pass:o}}function tt(t){let e=t,n="";const r=t.indexOf("#");r>=0&&(e=t.slice(0,r));const a=e.lastIndexOf("@");if(a>=0){n=e.slice(0,a);e=e.slice(a+1)}else{const t=et(e);if(t&&t.includes("@")){const r=t.lastIndexOf("@");n=t.slice(0,r);e=t.slice(r+1)}}let o="",s="";if(n){
let t=et(n)||n;try{t=decodeURIComponent(t)}catch(t){}const e=t.indexOf(":");if(e>0){o=t.slice(0,e);s=t.slice(e+1)}else o=t}const{host:i,port:l}=j(e,8388);return{type:"ss",host:i,port:l,method:o,password:s}}function et(t){try{
const e=atob(String(t).replace(/-/g,"+").replace(/_/g,"/")),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return new TextDecoder("utf-8").decode(n)}catch(t){return null}}function nt(t,e){return new Response(JSON.stringify(t),{status:e||200,headers:{
"Content-Type":"application/json; charset=utf-8"}})}async function rt(t){try{return await t.K.get("config",{cacheTtl:30})}catch(t){return null}}function at(){}const ot=216e5;async function st(t){if(!t||!t.K||typeof t.K.get!=="function")return null;try{const e=await t.K.get("initPool")
;if(!e)return null;const n=JSON.parse(e);return n&&Array.isArray(n.ips)&&n.ips.length?Date.now()-(n.at||0)>ot?null:n.ips:null}catch(t){return null}}async function it(t,e){if(t&&t.K&&typeof t.K.put==="function")try{const n=(e||[]).filter(t=>t&&t.ip).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"",
relay:!!t.relay})).slice(0,250);if(!n.length)return;await t.K.put("initPool",JSON.stringify({at:Date.now(),ips:n}))}catch(t){}}async function lt(t){const e=JSON.parse(JSON.stringify(P));let n=!1,r=!1;t.U&&(e.uuid=String(t.U).toLowerCase());(t.D||t.PATH)&&(e.path=String(t.D||t.PATH))
;(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin));t.HOST&&(e.host=String(t.HOST).replace(/^https?:\/\//,"").split("/")[0]);t.PROXYIP&&(e.proxyIP=String(t.PROXYIP));(t.S||t.OUTBOUND)&&(e.outboundProxy=String(t.S||t.OUTBOUND));t.ECH!=="true"&&t.ECH!=="1"||(e.ech=!0)
;t.TROJAN!=="true"&&t.TROJAN!=="1"||(e.enableTrojan=!0);t.TROJAN_PASSWORD&&(e.trojanPassword=String(t.TROJAN_PASSWORD));t.ALPN&&(e.alpn=String(t.ALPN));t.YX&&(e.preferredIPs=Y(t.YX));t.YXURL&&(e.optimizer.sourceURL=String(t.YXURL));t.PROBE_ALIVE!=="1"&&t.PROBE_ALIVE!=="true"||(e.probeAlive=!0)
;t.PROBE_ALIVE!=="0"&&t.PROBE_ALIVE!=="false"||(e.probeAlive=!1);if(t.K&&typeof t.K.get==="function")try{const a=await rt(t);if(a){const t=JSON.parse(a);r=!0;t.quotaAuto!==void 0&&(n=!0);Object.assign(e,t);t.optimizer&&(e.optimizer=Object.assign(JSON.parse(JSON.stringify(P.optimizer)),t.optimizer))
;t.preferredIPs&&Array.isArray(t.preferredIPs)&&(e.preferredIPs=t.preferredIPs);t.admin&&(e.admin=String(t.admin));t.uuid&&(e.uuid=String(t.uuid).toLowerCase())}}catch(t){}e.adminInit=!(!e.adminInit&&!r);delete e.fragment;delete e.fragmentParam;Re(!!e.probeAlive)
;e.uuid=String(e.uuid||"").toLowerCase();q(e.uuid)||(e.uuid=F());e.path&&e.path!=="/"&&e.path!==""||(e.path=e.uuid);Array.isArray(e.preferredIPs)||(e.preferredIPs=Y(e.preferredIPs));if(!n){const n=Boolean(e.cfAccountId&&e.cfApiToken||t.CF_ACCOUNT_ID&&t.CF_API_TOKEN);n&&(e.quotaAuto=!0)}return e}
async function ct(t,e){if(!t.K||typeof t.K.put!=="function")return!1;const n=JSON.parse(JSON.stringify(e));n.admin&&(n.admin=String(n.admin));await t.K.put("config",JSON.stringify(n));at();return!0}let dt=null,pt=0;const ut=1e5,ft=3e5,ht=9e5;async function mt(t,e){
const n=String(t.CF_ACCOUNT_ID||e&&e.cfAccountId||"").trim(),r=String(t.CF_API_TOKEN||e&&e.cfApiToken||"").trim();if(!n||!r)return{configured:!1};const a=Date.now();if(a<pt)return dt&&dt.data?Object.assign({},dt.data,{stale:!0,error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,
error:"CF API 限流(429)，请 15 分钟后再试"};if(dt&&dt.at&&a-dt.at<ft)return dt.data;try{const t=new Date;t.setUTCHours(0,0,0,0);const e=new Date,o={
query:"query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }",
variables:{accountId:n,filter:{datetime_geq:t.toISOString(),datetime_leq:e.toISOString()}}},s=await fetch("https://api.cloudflare.com/client/v4/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify(o)})
;if(!s.ok)throw new Error("CF API HTTP "+s.status);const i=await s.json();if(i.errors&&i.errors.length)throw new Error("GraphQL: "+JSON.stringify(i.errors).slice(0,200));const l=i&&i.data&&i.data.viewer&&i.data.viewer.accounts||[];if(!l.length)throw new Error("未找到账户数据（检查账户 ID 与令牌权限）")
;const c=l[0],d=(c.workersInvocationsAdaptive||[])[0]||{},p=(c.pagesFunctionsInvocationsAdaptiveGroups||[]).reduce((t,e)=>t+(e&&e.sum&&e.sum.requests||0),0),u=(d.sum&&d.sum.requests||0)+p,f=d.quantiles&&d.quantiles.cpuTimeP50||0,h=d.sum&&d.sum.subrequests||0,m=ut>0?Math.round(u/ut*1e3)/10:0,g={
configured:!0,limit:ut,today:{requests:u,cpuTime:f,subrequests:h},percent:m,remaining:Math.max(0,ut-u),updatedAt:e.toISOString()};dt={at:a,data:g};return g}catch(t){const e=t&&t.message||String(t);if(e.indexOf("429")>=0){pt=a+ht;return dt&&dt.data?Object.assign({},dt.data,{stale:!0,
error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"}}return{configured:!0,error:e}}}function gt(t,e,n,r){if(r===1)return{addr:`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,len:4};if(r===2){const r=e.getUint8(n),a=t.subarray(n+1,n+1+r)
;return{addr:O.decode(a),len:1+r}}if(r===3){const e=t.subarray(n,n+16);return{addr:K(e),len:16}}throw new Error("无法识别的地址类型")}function bt(t){if(!t||t.byteLength<1)throw new Error("VLESS 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=0
;if(e.getUint8(0)!==0)throw new Error("不支持的 VLESS 版本");n+=17;if(n>=t.byteLength)throw new Error("VLESS 头部过短");const r=e.getUint8(n);n+=1;n+=r;if(n+3>t.byteLength)throw new Error("VLESS 头部过短");const a=e.getUint8(n);n+=1;const o=e.getUint16(n);n+=2;const s=e.getUint8(n);n+=1
;const{addr:i,len:l}=gt(t,e,n,s);n+=l;return{command:a,port:o,addr:i,headerLength:n,earlyData:t.subarray(n)}}function vt(t){if(!t||t.byteLength<66)throw new Error("Trojan 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=58;const r=e.getUint8(n);n+=1;const a=e.getUint8(n);n+=1
;let o,s;if(a===1){o=`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`;s=4}else if(a===3){const r=e.getUint8(n);o=O.decode(t.subarray(n+1,n+1+r));s=1+r}else{if(a!==4)throw new Error("无法识别的地址类型");o=K(t.subarray(n,n+16));s=16}n+=s;const i=e.getUint16(n);n+=2;n+=2;return{
command:r,port:i,addr:o,password:O.decode(t.subarray(0,56)),headerLength:n}}
const xt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
;function yt(t){const e=D.encode(String(t)),n=e.length*8,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e);a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,Math.floor(n/4294967296),!1);o.setUint32(r-4,n>>>0,!1)
;let s=3238371032,i=914150663,l=812702999,c=4144912697,d=4290775857,p=1750603025,u=1694076839,f=3204075428;const h=(t,e)=>t>>>e|t<<32-e;for(let t=0;t<r;t+=64){const e=new Uint32Array(64);for(let n=0;n<16;n++)e[n]=o.getUint32(t+n*4,!1);for(let t=16;t<64;t++){
const n=h(e[t-15],7)^h(e[t-15],18)^e[t-15]>>>3,r=h(e[t-2],17)^h(e[t-2],19)^e[t-2]>>>10;e[t]=e[t-16]+n+e[t-7]+r>>>0}let n=s,r=i,a=l,m=c,g=d,b=p,v=u,x=f;for(let t=0;t<64;t++){const o=h(g,6)^h(g,11)^h(g,25),s=g&b^~g&v,i=x+o+s+xt[t]+e[t]>>>0,l=h(n,2)^h(n,13)^h(n,22),c=n&r^n&a^r&a,d=l+c>>>0;x=v;v=b;b=g
;g=m+i>>>0;m=a;a=r;r=n;n=i+d>>>0}s=s+n>>>0;i=i+r>>>0;l=l+a>>>0;c=c+m>>>0;d=d+g>>>0;p=p+b>>>0;u=u+v>>>0;f=f+x>>>0}let m="";for(const t of[s,i,l,c,d,p,u]){m+=(t>>>24&255).toString(16).padStart(2,"0");m+=(t>>>16&255).toString(16).padStart(2,"0");m+=(t>>>8&255).toString(16).padStart(2,"0")
;m+=(t&255).toString(16).padStart(2,"0")}return m}let wt="",It="";function kt(t){if(t!==wt){wt=t;It=yt(t)}return It}function Pt(t,e){if(!e.enableTrojan||!t||t.byteLength<58)return!1;const n=t.subarray(0,56);if(O.decode(n).toLowerCase()===kt(e.trojanPassword||e.uuid))return!0
;if(t[56]===13&&t[57]===10){for(let t=0;t<56;t++){const e=n[t];if(!(e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70))return!1}return!0}return!1}
const St=["https://doh.pub/dns-query","https://dns.alidns.com/resolve","https://1.1.1.1/dns-query","https://8.8.8.8/dns-query","https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function Ct(t){
const e=String(t).split("::"),n=e[0]?e[0].split(":").filter(Boolean):[],r=e[1]?e[1].split(":").filter(Boolean):[],a=[...n,...Array(Math.max(0,8-n.length-r.length)).fill("0"),...r],o=new Uint8Array(16);a.forEach((t,e)=>{const n=parseInt(t,16)||0;o[e*2]=n>>8&255;o[e*2+1]=n&255});return o}
async function At(t){if(!t||t.byteLength<17)return null;const e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=e.getUint16(0);if(e.getUint16(2)&32768)return null;if(e.getUint16(4)!==1)return null;let r=12,a=[];for(;r<t.byteLength;){const n=e.getUint8(r);if(n===0){r++;break}if((n&192)===192){r+=2
;break}if(r+1+n>t.byteLength)return null;a.push(O.decode(t.subarray(r+1,r+1+n)));r+=1+n}if(r+4>t.byteLength||a.length===0)return null;const o=e.getUint16(r),s=e.getUint16(r+2),i=r+4;if(o!==1&&o!==28)return null;const l=a.join("."),c=t.subarray(12,i);let d=null;for(const t of St)try{
const e=await be(t+"?name="+encodeURIComponent(l)+"&type="+o,{headers:{accept:"application/dns-json"}},5e3);if(!e||!e.ok)continue;const n=await e.json();if(!n||n.Status!==0)continue;const r=(n.Answer||[]).filter(t=>t.type===o&&(t.type===1?H(String(t.data)):/^[0-9a-fA-F:]+$/.test(String(t.data))))
;if(r.length){d=r;break}}catch(t){}if(!d)return null;const p=new Uint8Array(12),u=new DataView(p.buffer);u.setUint16(0,n);u.setUint16(2,33152);u.setUint16(4,1);u.setUint16(6,d.length);const f=[p,c];for(const t of d){const e=String(t.data),n=t.type===1?Uint8Array.from(e.split(".").map(Number)):Ct(e)
;if(n.length!==(t.type===1?4:16))continue;const r=new Uint8Array(10),a=new DataView(r.buffer);a.setUint16(0,49164);a.setUint16(2,t.type);a.setUint16(4,s===0?1:s);a.setUint32(6,Number(t.TTL)||300);f.push(r,new Uint8Array([n.length>>8&255,n.length&255]),n)}let h=0;f.forEach(t=>h+=t.byteLength)
;const m=new Uint8Array(h);let g=0;for(const t of f){m.set(t,g);g+=t.byteLength}return m}function Tt(t,e,n){return Promise.race([t,new Promise((t,r)=>setTimeout(()=>r(new Error(n||"操作超时")),e||6e3))])}async function $t(e,n,r){const a=t({hostname:e,port:n});try{
await Tt(a.opened,r||6e3,"连接超时（SYN 被静默丢弃）")}catch(t){try{a.close()}catch(t){}throw t}return a}async function Ut(t,e){return $t(t.hostname,t.port,e||6e3)}async function Et(t,e){const n=await $t(t.host,t.port,6e3),r=n.writable.getWriter(),a=n.readable.getReader();let o=new Uint8Array(0)
;const s=async t=>{for(;o.length<t;){const{done:t,value:e}=await a.read();if(t)throw new Error("连接被关闭");o=Wt(o,e)}const e=o.slice(0,t);o=o.subarray(t);return e},i=t.user?[5,2,0,2]:[5,1,0];await r.write(new Uint8Array(i));const l=await s(2);if(l[0]!==5||l[1]===255)throw new Error("SOCKS5 握手失败")
;if(l[1]===2){if(!t.user)throw new Error("SOCKS5 服务器要求认证但未提供凭据");const e=D.encode(t.user),n=D.encode(t.pass),a=new Uint8Array([1,e.length,...e,n.length,...n]);await r.write(a);const o=await s(2);if(o[1]!==0)throw new Error("SOCKS5 认证失败")}else if(l[1]!==0)throw new Error("SOCKS5 不支持的认证方法 "+l[1])
;const c=D.encode(e.hostname);let d;d=/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname)?new Uint8Array([5,1,0,1,...e.hostname.split(".").map(Number),e.port>>8&255,e.port&255]):new Uint8Array([5,1,0,3,c.length,...c,e.port>>8&255,e.port&255]);await r.write(d);const p=await s(4)
;if(p[1]!==0)throw new Error("SOCKS5 连接失败 码"+p[1]);if(p[3]===1)await s(6);else if(p[3]===3){const t=(await s(1))[0];await s(t+2)}else p[3]===4&&await s(18);o.byteLength>0&&(n._preamble=o);r.releaseLock();a.releaseLock();return n}async function Dt(t,e){
const n=await $t(t.host,t.port,6e3),r=n.writable.getWriter(),a=n.readable.getReader();let o="";t.user&&(o="Proxy-Authorization: Basic "+N(D.encode(`${t.user}:${t.pass}`))+"\r\n");const s=`CONNECT ${e.hostname}:${e.port} HTTP/1.1\r\nHost: ${e.hostname}:${e.port}\r\n${o}\r\n`
;await r.write(D.encode(s));const{head:i,leftover:l}=await Gt(a);if(!/^HTTP\/\d\.\d\s+2\d\d/i.test(i))throw new Error("HTTP 代理 CONNECT 失败: "+i.split("\r\n")[0]);l&&l.byteLength>0&&(n._preamble=l);r.releaseLock();a.releaseLock();return n}function Ot(t){
const e=String(t||"").toLowerCase().replace(/_/g,"-");return e==="aes-128-gcm"||e==="aes-128gcm"?{name:"AES-GCM",keyLen:16}:e==="aes-256-gcm"||e==="aes-256gcm"?{name:"AES-GCM",keyLen:32}:e==="chacha20-ietf-poly1305"||e==="chacha20-poly1305"||e==="chacha20poly1305"?{name:"CHACHA20-POLY1305",keyLen:32
}:null}function Nt(t){const e=t instanceof Uint8Array?t:new Uint8Array(t),n=e.length,r=n*8,a=new Uint8Array(1+(n+8>>6)<<6);a.set(e);a[n]=128;const o=new DataView(a.buffer);o.setUint32(a.length-8,Math.floor(r/4294967296),!1);o.setUint32(a.length-4,r>>>0,!1)
;let s=1732584193,i=4023233417,l=2562383102,c=271733878,d=3285377520;const p=new Uint32Array(80);for(let t=0;t<a.length;t+=64){for(let e=0;e<16;e++)p[e]=o.getUint32(t+e*4,!1);for(let t=16;t<80;t++)p[t]=R(p[t-3]^p[t-8]^p[t-14]^p[t-16],1);let e=s,n=i,r=l,a=c,u=d;for(let t=0;t<80;t++){let o,s;if(t<20){
o=n&r|~n&a;s=1518500249}else if(t<40){o=n^r^a;s=1859775393}else if(t<60){o=n&r|n&a|r&a;s=2400959708}else{o=n^r^a;s=3395469782}const i=R(e,5)+o+u+s+p[t]>>>0;u=a;a=r;r=R(n,30);n=e;e=i}s=s+e>>>0;i=i+n>>>0;l=l+r>>>0;c=c+a>>>0;d=d+u>>>0}const u=new Uint8Array(20),f=new DataView(u.buffer)
;f.setUint32(0,s,!1);f.setUint32(4,i,!1);f.setUint32(8,l,!1);f.setUint32(12,c,!1);f.setUint32(16,d,!1);return u}function Lt(t,e){const n=64;let r=t;r.length>n&&(r=Nt(r));const a=new Uint8Array(n),o=new Uint8Array(n);for(let t=0;t<n;t++){a[t]=(t<r.length?r[t]:0)^54;o[t]=(t<r.length?r[t]:0)^92}
return Nt(Wt(o,Nt(Wt(a,e))))}function Mt(t,e,n){const r=Lt(e&&e.length?e:new Uint8Array(20),t);let a=new Uint8Array(0),o=new Uint8Array(0);for(let t=1;o.length<n;t++){const e=new Uint8Array([t]);a=Lt(r,Wt(Wt(a,D.encode("ss-subkey")),e));o=Wt(o,a)}return o.slice(0,n)}function Rt(t,e,n){
const r=new Uint32Array(16);r[0]=1634760805;r[1]=857760878;r[2]=2036477234;r[3]=1797285236;const a=new DataView(t.buffer,t.byteOffset,32);for(let t=0;t<8;t++)r[4+t]=a.getUint32(t*4,!0);r[12]=e>>>0;const o=new DataView(n.buffer,n.byteOffset,12);r[13]=o.getUint32(0,!0);r[14]=o.getUint32(4,!0)
;r[15]=o.getUint32(8,!0);const s=r.slice(),i=(t,e,n,r)=>{s[t]=s[t]+s[e]>>>0;s[r]=R(s[r]^s[t],16);s[n]=s[n]+s[r]>>>0;s[e]=R(s[e]^s[n],12);s[t]=s[t]+s[e]>>>0;s[r]=R(s[r]^s[t],8);s[n]=s[n]+s[r]>>>0;s[e]=R(s[e]^s[n],7)};for(let t=0;t<10;t++){i(0,4,8,12);i(1,5,9,13);i(2,6,10,14);i(3,7,11,15);i(0,5,10,15)
;i(1,6,11,12);i(2,7,8,13);i(3,4,9,14)}const l=new Uint8Array(64),c=new DataView(l.buffer);for(let t=0;t<16;t++){s[t]=s[t]+r[t]>>>0;c.setUint32(t*4,s[t],!0)}return l}function zt(t,e,n,r){const a=r.slice(),o=Math.ceil(r.length/64);for(let r=0;r<o;r++){
const o=Rt(t,n+r,e),s=r*64,i=Math.min(64,a.length-s);for(let t=0;t<i;t++)a[s+t]^=o[t]}return a}function Ft(t,e){let n=0n,r=0n;for(let e=0;e<16;e++){n|=BigInt(t[e])<<BigInt(8*e);r|=BigInt(t[16+e])<<BigInt(8*e)}n&=0x0ffffffc0ffffffc0ffffffc0fffffffn;let a=0n;const o=(1n<<130n)-5n
;for(let t=0;t<e.length;t+=16){const r=Math.min(16,e.length-t);let s=1n;for(let n=r-1;n>=0;n--)s=s<<8n|BigInt(e[t+n]);a=(a+s)*n%o}a=a+r&(1n<<128n)-1n;const s=new Uint8Array(16);for(let t=0;t<16;t++)s[t]=Number(a>>BigInt(8*t)&0xffn);return s}function qt(t,e,n,r){
const a=r||new Uint8Array(0),o=zt(t,e,0,new Uint8Array(32)),s=zt(t,e,1,n),i=t=>new Uint8Array((16-t%16)%16),l=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);n.setUint32(0,t>>>0,!0);n.setUint32(4,Math.floor(t/4294967296),!0);return e
},c=Wt(a,Wt(i(a.length),Wt(s,Wt(i(s.length),Wt(l(a.length),l(s.length)))))),d=Ft(o,c);return Wt(s,d)}function jt(t,e,n,r){if(n.length<16)throw new Error("SS AEAD 数据过短")
;const a=n.subarray(0,n.length-16),o=n.subarray(n.length-16),s=r||new Uint8Array(0),i=zt(t,e,0,new Uint8Array(32)),l=t=>new Uint8Array((16-t%16)%16),c=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);n.setUint32(0,t>>>0,!0);n.setUint32(4,Math.floor(t/4294967296),!0);return e
},d=Wt(s,Wt(l(s.length),Wt(a,Wt(l(a.length),Wt(c(s.length),c(a.length)))))),p=Ft(i,d);let u=0;for(let t=0;t<16;t++)u|=p[t]^o[t];return u!==0?null:zt(t,e,1,a)}async function Ht(t,e){const n=new Uint8Array(12),r=()=>{const t=n.slice();for(let e=11;e>=0;e--){t[e]++;if(t[e]!==0)break}return t}
;if(t==="CHACHA20-POLY1305")return{seal(t){return qt(e,r(),t)},open(t){const n=jt(e,r(),t);if(!n)throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）");return n}};const a=await crypto.subtle.importKey("raw",e,{name:t},!1,["encrypt","decrypt"]);return{async seal(e){
return new Uint8Array(await crypto.subtle.encrypt({name:t,iv:r()},a,e))},async open(e){try{return new Uint8Array(await crypto.subtle.decrypt({name:t,iv:r()},a,e))}catch(t){throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）")}}}}async function Kt(t,e){const n=new Uint8Array([e.length>>8&255,e.length&255])
;return Wt(await t.seal(n),await t.seal(e))}async function Bt(t,e){const n=Ot(t.method);if(!n)throw new Error("不支持的 SS 加密方式: "+(t.method||"（未指定）"));if(!t.password)throw new Error("SS 出站缺少密码");const r=await $t(t.host,t.port,6e3),a=r.writable.getWriter(),o=r.readable.getReader()
;let s=new Uint8Array(0);const i=async t=>{for(;s.length<t;){const{done:t,value:e}=await o.read();if(t)throw new Error("SS 连接被关闭");s=Wt(s,e)}const e=s.slice(0,t);s=s.subarray(t);return e
},l=new Uint8Array(await crypto.subtle.digest("SHA-256",D.encode(t.password))),c=crypto.getRandomValues(new Uint8Array(16)),d=await Ht(n.name,await Mt(l,c,n.keyLen));await a.write(c);await a.write(await Kt(d,new Uint8Array(0)));const p=new ReadableStream({async start(t){try{
const e=await i(16),r=await Ht(n.name,await Mt(l,e,n.keyLen));for(;;){const e=await r.open(await i(18)),n=e[0]<<8|e[1];if(n>16384)throw new Error("SS 分片长度非法 "+n);const a=await r.open(await i(n+16));n>0&&t.enqueue(a)}}catch(e){try{t.error(e)}catch(t){}}}}),u=new WritableStream({async write(t){
const e=t instanceof Uint8Array?t:new Uint8Array(t);for(let t=0;t<e.length;t+=16384)await a.write(await Kt(d,e.subarray(t,Math.min(e.length,t+16384))))},close(){try{a.close()}catch(t){}},abort(){try{a.abort()}catch(t){}}});return{readable:p,writable:u,close(){try{r.close()}catch(t){}}}}
async function _t(t,e){const n=new Uint8Array(e);let r=0;for(;r<e;){const{done:a,value:o}=await t.read();if(a)throw new Error("连接被关闭");const s=e-r;n.set(o.subarray(0,Math.min(s,o.length)),r);r+=Math.min(s,o.length)}return n}async function Gt(t){let e=new Uint8Array(0);for(;e.length<65536;){
const{done:n,value:r}=await t.read();if(n)break;e=Wt(e,r);const a=Vt(e,[13,10,13,10]);if(a>=0)return{head:O.decode(e.subarray(0,a)),leftover:e.subarray(a+4)}}return{head:O.decode(e),leftover:new Uint8Array(0)}}function Wt(t,e){const n=new Uint8Array(t.length+e.length);n.set(t,0);n.set(e,t.length)
;return n}function Vt(t,e){t:for(let n=0;n<=t.length-e.length;n++){for(let r=0;r<e.length;r++)if(t[n+r]!==e[r])continue t;return n}return-1}const Jt={HK:"proxyip.hk.cmliussss.net",US:"proxyip.us.cmliussss.net",SG:"proxyip.sg.cmliussss.net",JP:"proxyip.jp.cmliussss.net",KR:"proxyip.kr.cmliussss.net",
DE:"proxyip.de.cmliussss.net",SE:"proxyip.se.cmliussss.net",NL:"proxyip.nl.cmliussss.net",FI:"proxyip.fi.cmliussss.net",GB:"proxyip.gb.cmliussss.net",Oracle:"proxyip.oracle.cmliussss.net",DigitalOcean:"proxyip.digitalocean.cmliussss.net",Vultr:"proxyip.vultr.cmliussss.net",
Multacom:"proxyip.multacom.cmliussss.net"};function Qt(t){const e=(t||"").toUpperCase()
;return e.startsWith("HKG")||e.startsWith("HK")?"HK":e.startsWith("SIN")||e.startsWith("SG")?"SG":e.startsWith("NRT")||e.startsWith("KIX")||e.startsWith("TYO")||e.startsWith("OSA")||e.startsWith("JP")?"JP":e.startsWith("ICN")||e.startsWith("SEL")||e.startsWith("KR")?"KR":/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/.test(e)?"HK":e.startsWith("FRA")||e.startsWith("BER")||e.startsWith("MUC")||e.startsWith("DUS")||e.startsWith("HAM")||e.startsWith("STR")||e.startsWith("DE")?"DE":e.startsWith("ARN")||e.startsWith("SE")?"SE":e.startsWith("AMS")||e.startsWith("NL")?"NL":e.startsWith("HEL")||e.startsWith("FI")?"FI":e.startsWith("LHR")||e.startsWith("MAN")||e.startsWith("GB")||e.startsWith("UK")?"GB":/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/.test(e)?"DE":"US"
}const Xt=new Map;async function Yt(t,e){e=e||443;if(H(t))return[{hostname:t,port:e}];const n=t+":"+e,r=Date.now(),a=Xt.get(n);if(a&&r-a.t<3e5)return a.ips;const o=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve","https://doh.pub/dns-query"],s=async(e,n)=>{
const r=o.map(async r=>{const a=await be(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)throw new Error("doh fail");const o=await a.json();return(o.Answer||[]).filter(t=>t.type===n).map(t=>t.data)});try{return await Promise.any(r)}catch(t){
return[]}},[i,l]=await Promise.all([s("TXT",16),s("A",1)]);let c=[];for(const t of i){const n=String(t).replace(/^"|"$/g,"").replace(/\\010/g,",").replace(/\n/g,",").trim();if(!n)continue;if(n==="@edtunnel"){c=l.filter(t=>/^\d+\.\d+\.\d+\.\d+$/.test(t)).map(t=>({hostname:t,port:e}));break}
const r=n.split(/[,;\s]+/).map(t=>t.trim()).filter(Boolean),a=[];for(const t of r){const{host:n,port:r}=j(t,e);H(n)&&a.push({hostname:n,port:r})}if(a.length){c=a;break}}c.length||(c=l.filter(t=>/^\d+\.\d+\.\d+\.\d+$/.test(t)).map(t=>({hostname:t,port:e})));if(!c.length){const t=await s("AAAA",28)
;c=t.filter(t=>H(t)).map(t=>({hostname:t,port:e}))}const d=new Set,p=c.filter(t=>{const e=t.hostname+":"+t.port;if(d.has(e))return!1;d.add(e);return!0});p.length&&Xt.set(n,{t:r,ips:p});return p}async function Zt(t,e,n,r){
const a=Z(e.outboundProxy),o=e.outboundMode||"",s=a?a.type==="http"||a.type==="https"?t=>Dt(a,t):a.type==="ss"?t=>Bt(a,t):t=>Et(a,t):null,i=(t,e)=>{const n=[];if(o==="only")n.push(s?()=>s(t):()=>Ut(t,e));else if(o==="no"){n.push(()=>Ut(t,e));s&&n.push(()=>s(t))}else{s&&n.push(()=>s(t))
;n.push(()=>Ut(t,e))}return n};let l;const c=async(t,e)=>{for(const n of i(t,e))try{return await n()}catch(t){l=t}return null},d=e.proxyIP?j(e.proxyIP,443):null;if(d&&d.host){let t=await Yt(d.host,d.port);t.length||(t=[{hostname:d.host,port:d.port}]);for(const e of t){const t=await c(e,6e3)
;if(t)return t}}const p=await c({hostname:t.addr,port:t.port},6e3);if(p)return p;{const t=Qt(n),e=[t,...Object.keys(Jt).filter(e=>e!==t)].slice(0,3);for(const t of e){const e=Jt[t];if(!e)continue;let n=[];try{n=await Yt(e,443)}catch(t){}if(n.length)for(const t of n){const e=await c(t,5e3)
;if(e)return e}}}throw l||new Error("所有出站方式均失败")}async function te(t,e,n){try{for(;;){const{done:n,value:r}=await t.read();if(n)break;e(r)}}catch(t){}try{n&&n()}catch(t){}}async function ee(t,e){const n=new WebSocketPair,[r,a]=Object.values(n);try{a.accept({allowHalfOpen:!0})}catch(t){a.accept()}
a.binaryType="arraybuffer";let o=null,s=null,i=!1,l=null;const c=t=>{try{a.send(t)}catch(t){}};a.addEventListener("message",async n=>{try{const r=typeof n.data==="string"?D.encode(n.data):new Uint8Array(n.data);if(i)s?await s.write(r):l=l?Wt(l,r):r;else{l=l?Wt(l,r):r
;if(l.byteLength>65536)throw new Error("握手头超过 64KB，关闭连接");let n,d;try{let t=Pt(l,e);if(!t&&l.byteLength>0&&l[0]!==0&&l.byteLength<58)return;d=!t;n=t?vt(l):bt(l)}catch(t){if(/头部过短/.test(t.message||""))return;throw t}i=!0;if(n.command===2){try{const t=l.subarray(n.headerLength)
;if(n.port===53&&t.byteLength>=12){const e=await At(t);e&&c(e)}}catch(t){}try{a.close(1e3)}catch(t){}return}const p=await Zt(n,e,t.cf&&t.cf.colo,d);o=p;s=p.writable.getWriter();d&&c(new Uint8Array([0,0]));p._preamble&&p._preamble.byteLength>0&&c(p._preamble)
;l&&l.byteLength>n.headerLength&&await s.write(l.subarray(n.headerLength));l=null;te(p.readable.getReader(),c,()=>{try{a.close(1e3)}catch(t){}})}}catch(t){try{a.close(1011,String(t&&t.message||t))}catch(t){}}});const d=()=>{if(o){try{o.close()}catch(t){}o=null}};a.addEventListener("close",d)
;a.addEventListener("error",d);return new Response(null,{status:101,webSocket:r})}async function ne(t,e){const n=t.body.getReader(),r=await n.read();if(r.done)return new Response("empty",{status:400});const a=bt(r.value),o=await Zt(a,e,t.cf&&t.cf.colo,!0),s=o.writable.getWriter()
;await s.write(r.value.subarray(a.headerLength));(async()=>{try{for(;;){const{done:t,value:e}=await n.read();if(t)break;await s.write(e)}}catch(t){}try{await s.close()}catch(t){}})();const i=new ReadableStream({async start(t){t.enqueue(new Uint8Array([0,0]))
;o._preamble&&o._preamble.byteLength>0&&t.enqueue(o._preamble);const e=o.readable.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;t.enqueue(r)}}catch(t){}try{t.close()}catch(t){}try{o.close()}catch(t){}},cancel(){try{o.close()}catch(t){}}});return new Response(i,{status:200,
headers:{"content-type":"application/octet-stream","x-accel-buffering":"no","cache-control":"no-store"}})}function re(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(t){}try{return new TextDecoder("gbk").decode(e)}catch(t){}
return(new TextDecoder).decode(e)}function ae(t){const e=new Set,n=[],r=(t,r,a)=>{if(H(t)&&!e.has(t)){e.add(t);n.push({ip:t,port:r||443,name:a||""})}};Y(t).forEach(t=>r(t.ip,t.port,t.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let o;for(;o=a.exec(t);){const{host:t,port:e}=j(o[0],443)
;t&&r(t,e,"")}const s=/[0-9a-fA-F:]+/g;for(;o=s.exec(t);){const t=o[0];t.includes(":")&&t.split(":").length>=3&&H(t)&&r(t,443,"")}return n}function oe(t){const e=new Set,n=[],r=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let a;for(;a=r.exec(t);){const t=a[0].toLowerCase()
;if(!e.has(t)&&(t.includes("cloudflare")||t.includes("bestcf")||t.includes("182682")||t.includes("090227")||t.endsWith(".xyz")||t.endsWith(".top"))){e.add(t);n.push(t)}}return n.slice(0,10)}const se={t:0,ips:null};async function ie(t){t=Math.max(1,parseInt(t)||150)
;if(Date.now()-se.t<6e5)return se.ips;const e=await be("https://stock.hostmonit.com/CloudFlareYes",{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const n=ae(await e.text()).filter(t=>t.ip&&x(t.ip)),r=new Set,a=[];for(const e of n)if(!r.has(e.ip)){r.add(e.ip);a.push(e);if(a.length>=t)break}
se.t=Date.now();se.ips=a;return a}return null}async function le(t){t=t||{};const e=[],n={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},r=n=>{n&&n.ip&&x(n.ip)&&e.push({ip:n.ip,port:t.port||n.port||443,name:n.name||""})};if(t.source&&E[t.source]){const e=await be(E[t.source].url,{headers:{
"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const t=ae(await e.text());t.forEach(r);n.preset=t.length}else n.presetErr=e?"HTTP "+e.status:"超时/网络错误"}if(t.sourceURL){const e=await be(t.sourceURL,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const t=ae(await e.text());t.forEach(r)
;n.custom=t.length}else n.customErr=e?"HTTP "+e.status:"超时/网络错误"}const a=new Set,o=[];for(const t of e)if(!a.has(t.ip)){a.add(t.ip);o.push(t)}if(o.length<(t.count||20)){let e=(t.count||20)-o.length;try{const n=await Xe();for(const r of n){if(e<=0)break;if(!a.has(r.ip)&&x(r.ip)){a.add(r.ip);o.push({
ip:r.ip,port:t.port||r.port||443,name:r.name||""});e--}}}catch(t){}n.bestcf=(t.count||20)-o.length-e}if(t.useCidr!==!1&&o.length<(t.count||20)){const e=(t.count||20)-o.length,r=X(p,e*3);let s=0;for(const n of r){if(s>=e)break;if(!a.has(n)){a.add(n);o.push({ip:n,port:t.port||443,name:""});s++}}
n.cidr=s}return{candidates:o,stats:n}}function ce(e,n,r){return new Promise(a=>{const o=Date.now();let s,i=!1;const l=(t,r)=>{if(!i){i=!0;clearTimeout(c);try{s&&s.close()}catch(t){}a({ip:e,port:n,ok:t,latency:r})}},c=setTimeout(()=>l(!1,-1),r);try{s=t({hostname:e,port:n})}catch(t){return l(!1,-1)}
s.opened.then(()=>l(!0,Date.now()-o)).catch(()=>l(!1,-1))})}async function de(t,e,n){e=Math.max(1,Math.min(50,Number(e)||5));n=Math.max(500,Number(n)||5e3);const r=[];let a=0;async function o(){for(;a<t.length;){const e=t[a++],o=await ce(e.ip,e.port,n);r.push(o)}}await Promise.all(Array.from({
length:e},o));r.sort((t,e)=>(t.latency<0?1e9:t.latency)-(e.latency<0?1e9:e.latency));return r}function pe(t){const e=t.uuid||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:e.slice(1,7),xPaddingKey:"_"+e.slice(25,31)}}function ue(t){
return String(t).replace(/%/g,"%25").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/ /g,"%20")}function fe(t,e,n,r){const a=(e?1:0)+(n?1:0)+(r?1:0);return a<=1?{v:t,t:t,x:t}:{v:t,t:t+".T",x:t+".X"}}function he(t,e,n,r,a={}){
const o=t.host,s=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,i=!U.has(Number(n)),l=encodeURIComponent;let c="encryption=none";c+=i?"&security=tls&sni="+l(o)+"&fp=chrome":"&security=none";c+="&host="+l(o);if(a.type==="xhttp"&&i){c+="&type=xhttp&mode=stream-one"
;c+="&extra="+l(JSON.stringify(pe(t)))}else c+="&type=ws";c+="&path="+l("/"+t.path);t.alpn&&(c+="&alpn="+l(t.alpn));t.ech&&(c+="&ech="+l((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query")));return`vless://${t.uuid}@${s}:${n}?${c}#${ue(r)}`}function me(t,e,n,r){
const a=t.host,o=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,s=encodeURIComponent,i=!U.has(Number(n));let l=i?"security=tls&sni="+s(a)+"&fp=chrome&host="+s(a)+"&type=ws&path="+s("/"+t.path):"security=none&host="+s(a)+"&type=ws&path="+s("/"+t.path);t.alpn&&i&&(l+="&alpn="+s(t.alpn))
;t.ech&&i&&(l+="&ech="+s((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query")));return`trojan://${t.trojanPassword||t.uuid}@${o}:${n}?${l}#${ue(r)}`}const ge=new Map;function be(t,e,n){return new Promise(r=>{const a=new AbortController,o=setTimeout(()=>a.abort(),n)
;fetch(t,Object.assign({},e,{signal:a.signal})).then(t=>{clearTimeout(o);r(t)}).catch(()=>{clearTimeout(o);r(null)})})}async function ve(t,e=100,n=300,r=!1,a=!0,o=!1){
const s=String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean),i=Date.now(),l=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve"],c=async(t,e,n)=>{const r=l.map(async r=>{const a=await be(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{
accept:"application/dns-json"}},4e3);if(!a||!a.ok)throw new Error("doh unavailable");const o=await a.json(),s=(o.Answer||[]).filter(t=>t.type===n&&(e==="A"?/^\d+\.\d+\.\d+\.\d+$/.test(t.data):/^[0-9a-fA-F:]+$/.test(t.data))).map(t=>t.data);if(!s.length)throw new Error("no answer");return s});try{
return await Promise.any(r)}catch(t){return[]}},d=await Promise.all(s.map(async t=>{if(t.includes("://")){if(t.startsWith("sub://")){let e=t.slice(6);if(/^[A-Za-z0-9+/=]+$/.test(e)&&e.length%4===0)try{const t=atob(e);/^https?:\/\//i.test(t)&&(e=t)}catch(t){}/^https?:\/\//i.test(e)||(e="https://"+e)
;t=e}const n="url:"+t+(r?"|rf":"")+(a?"":"|raw"),s=ge.get(n);if(s&&i-s.t<6e5)return s.ips.slice(0,e);try{const s=await be(t,{},6e3);if(!s||!s.ok)throw new Error("unreachable");const l=re(await s.arrayBuffer());let c=l
;if(/^[A-Za-z0-9+/=\s]{40,}$/.test(c.slice(0,2e3))&&c.replace(/\s+/g,"").length%4===0)try{const t=atob(c.replace(/\s+/g,""));c=re(Uint8Array.from(t,t=>t.charCodeAt(0)))}catch(t){}const d=new Set,p={},f=[],m=k(t),g=t=>!a||x(t)||m,b=c.trim().split(/\r?\n/).map(t=>t.trim()).filter(Boolean)
;if(b.length>1&&b[0].includes(",")){const t=b[0].split(",").map(t=>t.trim()),r=t.includes("IP地址")&&t.includes("端口"),a=t.some(t=>t.includes("IP"))&&t.some(t=>t.includes("延迟"))&&t.some(t=>t.includes("下载速度"));if(r||a){
const r=t.findIndex(t=>t.includes("IP")),a=t.indexOf("端口"),o=t.findIndex(t=>t.includes("延迟")),s=t.findIndex(t=>t.includes("下载速度")),l=t.indexOf("国家")>-1?t.indexOf("国家"):t.indexOf("城市")>-1?t.indexOf("城市"):t.indexOf("数据中心"),c=t.indexOf("TLS");for(const t of b.slice(1)){if(f.length>=e)break
;const n=t.split(",").map(t=>t.trim());if(c!==-1&&n[c]&&n[c].toLowerCase()!=="true")continue;const i=n[r]||"",u=i.match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!u)continue;const h=u[1].replace(/^\[|\]$/g,""),b=a!==-1&&n[a]?parseInt(n[a]):443,v=h+":"+b;if(d.has(v))continue;if(!g(h))continue
;d.add(v);let x=l!==-1&&n[l]?n[l]:"";x||o===-1||s===-1||(x="CF优选 "+(n[o]||"")+"ms "+(n[s]||"")+"MB/s");if(x){p[x]=(p[x]||0)+1;f.push({ip:h,port:b,name:x+"-"+String(p[x]).padStart(2,"0"),...m?{relay:!0}:{}})}else f.push({ip:h,port:b,name:"",...m?{relay:!0}:{}})}ge.set(n,{t:i,ips:f});return f.slice()}
}if(c.includes("<tr")&&c.includes("data-label")){for(const t of c.match(/<tr[\s\S]*?<\/tr>/g)||[]){if(f.length>=e)break;const n={};for(const e of t.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const t=e.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);t&&(n[t[1]]=t[2].replace(/<[^>]+>/g,"").trim())}
const r=(n["优选地址"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!r)continue;const a=r[1],o=r[2]?parseInt(r[2]):443,s=a+":"+o;if(d.has(s))continue;if(!g(a))continue;d.add(s);const i=(n["线路名称"]||n["数据中心"]||"线路").trim();if(i){p[i]=(p[i]||0)+1;f.push({ip:a,port:o,
name:i+"-"+String(p[i]).padStart(2,"0"),...m?{relay:!0}:{}})}else f.push({ip:a,port:o,name:"",...m?{relay:!0}:{}})}ge.set(n,{t:i,ips:f});return f.slice()}for(const t of c.split(/\r?\n/)){if(f.length>=e)break
;const n=t.match(/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!n)continue;const r=n[1].replace(/^\[|\]$/g,""),a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!g(r))continue;d.add(o);let s="";const i=t.indexOf("#");if(i>=0)try{
s=decodeURIComponent(t.slice(i+1).trim())}catch(e){s=t.slice(i+1).trim()}if(s){p[s]=(p[s]||0)+1;f.push({ip:r,port:a,name:s+"-"+String(p[s]).padStart(2,"0"),...m?{relay:!0}:{}})}else f.push({ip:r,port:a,name:"",...m?{relay:!0}:{}})}for(const t of c.split(/\r?\n/)){if(f.length>=e)break
;const n=t.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!n)continue;const r=n[1],a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!g(r))continue;d.add(o);const s=(n[3]||"").trim();if(s&&!/[\u4e00-\u9fa5]/.test(s)&&!s.includes("|")){f.push({ip:r,port:a,name:s,...m?{
relay:!0}:{}});continue}let i="";if(n[3]){const t=n[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(t){const e=t[0].match(/[\u4e00-\u9fa5]{2,5}/);e&&(i=e[0])}else{const t=n[3].split("|").map(t=>t.trim()),e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(t));if(e){
const t=e.match(/[\u4e00-\u9fa5]{2,5}/);t&&(i=t[0])}else{const e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}$/.test(t)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/.test(t));if(e)i=e;else{const t=n[3].match(/\b([A-Z]{2})\b/);t&&(i=y[t[1]]||t[1])}}}}if(i){p[i]=(p[i]||0)+1;f.push({ip:r,port:a,
name:i+"-"+String(p[i]).padStart(2,"0"),...m?{relay:!0}:{}})}else f.push({ip:r,port:a,name:"",...m?{relay:!0}:{}})}if(!f.length&&r){const n=(String(t).match(/\/([A-Z]{2})\//)||[])[1]||String(t).replace(/^https?:\/\//,"").split(".")[0];if(y[n]){const t=X(o?h:u,e);t.forEach((t,e)=>f.push({ip:t,
port:443,name:y[n]+"-"+String(e+1).padStart(2,"0")}))}}ge.set(n,{t:i,ips:f});return f.slice()}catch(t){const r=ge.get(n);return r&&r.ips&&r.ips.length?r.ips.slice(0,e):[]}}if(!t.includes("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(t)){
const e=t.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e)return[];const n=e[1].replace(/^\[|\]$/g,""),r=e[2]?parseInt(e[2]):443,o=(e[3]||"").trim(),s=H(n);if(!s&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(n))return[]
;if(a&&s&&!x(n))return[];if(o)return[{ip:n,port:r,name:o}];if(s)return[{ip:n,port:r,name:""}]}const n=ge.get(t);if(n&&i-n.t<6e5)return n.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}));const s=await c(t,"A",1);let l=a?s.filter(x):s;if(o){const e=await c(t,"AAAA",28)
;l=[...new Set(s.concat(e))].filter(t=>!a||x(t))}l=l.slice(0,e);if(!l.length)return n&&n.ips&&n.ips.length?n.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)})):[];ge.set(t,{t:i,ips:l});return l.map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}))})),p=[];let f=0;for(;f<n;){let t=!1
;for(const e of d){if(f>=n)break;if(e.length){p.push(e.shift());f++;t=!0}}if(!t)break}return p}async function xe(t,e=800,n=null){
const r=[],a=new Set,o=t.optimizer&&t.optimizer.subMode||"",s=t.filter&&t.filter.ipType||[],i=s.includes("IPv6"),l=s.length===1&&s[0]==="IPv6",c=l?m:i?[...u,...m]:u,d=o==="custom"&&!(t.optimizer&&t.optimizer.subIncludeDefault),p=o==="custom"||o==="random",f=(n,o,s,i)=>{if(r.length>=e)return
;if(H(n)&&!x(n)&&!d&&!i)return;const l=t.probeAlive?n+":"+o:n;if(a.has(l))return;a.add(l);const c=!U.has(Number(o));if(t.tlsOnly&&!c)return;const p=Number(o),u=fe(s,!!t.enableVless,!!t.enableTrojan,!(!t.enableXhttp||!c));t.enableVless&&r.push(he(t,n,p,u.v))
;t.enableTrojan&&(t.probeAlive||c)&&r.push(me(t,n,c?p:Number(o),u.t));t.enableXhttp&&c&&r.push(he(t,n,p,u.x,{type:"xhttp"}))},h=(t,e,n,r)=>{f(t,Number(e)||443,n,r)};if(o==="random"){let a=Math.min(Math.max(parseInt(t.optimizer.subRandomCount)||16,1),Math.min(99,e));if(t.nodeLimit){
const n=parseInt(t.nodeLimitCount)||0;n>0&&(a=Math.min(Math.max(a,n),e))}const o=(t.enableVless?1:0)+(t.enableTrojan?1:0)+(t.enableXhttp?1:0)||1;let s=0;const i=X(c,Math.ceil(a/o)*3);let l=i;if(n){const t=i.filter(t=>!n.has(t)),e=i.filter(t=>n.has(t));l=[...t,...e]}for(const e of l){if(s>=a)break
;const n="优选IP-"+String(s+1).padStart(2,"0"),o=fe(n,!!t.enableVless,!!t.enableTrojan,!!t.enableXhttp);if(t.enableVless){r.push(he(t,e,443,o.v));s++}if(s>=a)break;if(t.enableTrojan){r.push(me(t,e,443,o.t));s++}if(s>=a)break;if(t.enableXhttp){r.push(he(t,e,443,o.x,{type:"xhttp"}));s++}}return r}
const g=String(t.preferredDomains||"").split(/[\n,;]+/).map(t=>t.trim()).filter(t=>t&&!t.includes("://"));g.forEach((t,e)=>{const n=t.indexOf("#"),r=(n>=0?t.slice(0,n):t).trim(),a=(n>=0?t.slice(n+1):"").trim(),o=j(r,443)
;o.host.startsWith("*.")||h(o.host,o.port,a||"优选IP-"+String(e+1).padStart(2,"0"))});let b=t.preferredIPs||[];if(i&&!l&&b.length>1){const t=[],e=[];for(const n of b)(String(n.ip).indexOf(":")>=0?e:t).push(n);const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++){a<t.length&&n.push(t[a])
;a<e.length&&n.push(e[a])}b=n}b.forEach((t,e)=>{h(t.ip,t.port||443,t.name||"优选IP-"+String(e+1).padStart(2,"0"),t.relay===!0)});if(o==="custom"&&(!t.optimizer||!t.optimizer.subIncludeDefault))return r;if(!g.length&&!(t.preferredIPs||[]).length){
Y(T.join("\n")).forEach(t=>h(t.ip,t.port||443,t.name||"0"));S.forEach((t,e)=>h(t,443,"域名-"+String(e+1).padStart(2,"0")))}const v=Math.min(Math.max(parseInt(t.optimizer&&t.optimizer.fillCount||0)||0,0),5e3),y=Math.min(v,e)-a.size;if(y>0){
const t=n?C.filter(t=>!n.has(t)):C.slice(),a=X(c,y*3),o=n?a.filter(t=>!n.has(t)):a;let s=[...t,...o];s.length<y&&(s=[...C,...a]);if(s.length>0){const t=Math.min(s.length,Math.max(y,20),60),e=s.slice(0,t),n=p?e.map(()=>!0):await Ke(e,t=>Be(t,443,1500)),r=e.filter((t,e)=>n[e]),a=s.slice(t)
;s=[...r,...a].slice(0,y)}let i=0;for(const t of s){if(r.length>=e)break;i++;h(t,443,"优选IP-"+String(i).padStart(3,"0"))}}return r}function ye(t){const e=t.indexOf("@"),n=t.indexOf("?",e),r=n>e&&e>=0?t.slice(e+1,n):t.slice(e+1);if(r.startsWith("[")){
const t=r.indexOf("]"),e=t>0?r.slice(1,t):r,n=r.slice(t+1),a=n.startsWith(":")?parseInt(n.slice(1)):443;return{host:e,port:isNaN(a)?443:a}}const a=r.lastIndexOf(":");if(a>0){const t=parseInt(r.slice(a+1));return{host:r.slice(0,a),port:isNaN(t)?443:t}}return{host:r,port:443}}function we(t,e){
const n=t.indexOf("?");if(n<0)return null;const r=t.indexOf("#",n),a=r>n?t.slice(n+1,r):t.slice(n+1);for(const t of a.split("&")){const n=t.indexOf("="),r=n>0?t.slice(0,n):t;if(r===e)return n>0?decodeURIComponent(t.slice(n+1)):""}return null}function Ie(t,e){
const{host:n,port:r}=ye(t),a=n,o=t.indexOf("#");let s=`节点${e+1}`;if(o>=0)try{s=decodeURIComponent(t.slice(o+1))||s}catch(t){}const i=t.indexOf("@");let l="";if(i>=0){const e=t.indexOf("://"),n=e>=0?e+3:0;try{l=decodeURIComponent(t.slice(n,i))}catch(e){l=t.slice(n,i)}}
const c=t.startsWith("trojan://"),d=c||(we(t,"security")||"tls")==="tls";return{srv:a,prt:r,name:s,user:l,isTrojan:c,tls:d}}const ke={HK:["HK","香港"],TW:["TW","台湾"],US:["US","美国"],SG:["SG","新加坡"],JP:["JP","日本"],KR:["KR","韩国"],DE:["DE","德国"]},Pe={"移动":["移动","CM","CHINAMOBILE"],
"联通":["联通","CU","UNICOM"],"电信":["电信","CT","CHINATELECOM"]},Se=["移动","联通","电信"],Ce=["IPv4","IPv6"];function Ae(t,e){if(!e||!e.region&&!e.ipType&&!e.isp)return t;const n=e.region||"all",r=e.ipType||Ce,a=e.isp||Se,o=t.map(t=>{const{host:e}=ye(t);let n="";try{const e=t.indexOf("#")
;e>=0&&(n=decodeURIComponent(t.slice(e+1)||""))}catch(t){n=""}return{host:e,name:n,up:n.toUpperCase()}}),s=o.some(t=>t.up&&Object.keys(Pe).some(e=>(Pe[e]||[e]).some(e=>t.up.includes(e.toUpperCase())))),i=(e,n,r)=>{
const a=Array.isArray(e)?e.length===0||e.includes("all")?null:e.flatMap(t=>ke[t]||[]):e!=="all"?ke[e]||[]:null,i=r.length>0&&r.length<Se.length;return t.filter((t,e)=>{const l=o[e],c=l.host.indexOf(":")>=0;if(!l.name)return!1
;if(a&&!a.some(t=>l.up.includes(t.toUpperCase()))&&!/^(优选IP|域名)-\d+/.test(l.name)&&l.name!=="原生地址")return!1;if(n.length===1){if(n[0]==="IPv4"&&c)return!1;if(n[0]==="IPv6"&&!c)return!1}return!(i&&s&&!r.some(t=>(Pe[t]||[t]).some(t=>l.up.includes(t.toUpperCase()))))})};let l=i(n,r,a)
;l.length||(l=i(n,r,Se));l.length||(l=i(n,Ce,Se));l.length||(l=i("all",Ce,Se));return l}function Te(t){if(typeof t==="boolean"||typeof t==="number")return String(t);const e=String(t);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(e)?e:JSON.stringify(e)}function $e(t){const e=[]
;e.push("  - name: "+Te(t.name));e.push("    type: "+t.type);e.push("    server: "+Te(t.server));e.push("    port: "+t.port);t.type==="vless"?e.push("    uuid: "+Te(t.uuid)):e.push("    password: "+Te(t.password));e.push("    network: "+t.network);e.push("    udp: true");if(t.tls){
e.push("    tls: true");e.push("    skip-cert-verify: true");e.push(t.network==="xhttp"?"    alpn: [h2]":"    alpn: [http/1.1]");e.push("    servername: "+Te(t.servername));t.type==="trojan"&&e.push("    sni: "+Te(t.servername));e.push("    client-fingerprint: chrome");if(t["ech-opts"]){
e.push("    ech-opts:");e.push("      enable: "+Te(t["ech-opts"].enable));e.push("      query-server-name: "+Te(t["ech-opts"]["query-server-name"]))}}if(t.network==="ws"){e.push("    ws-opts:");e.push("      path: "+Te(t["ws-opts"].path));e.push("      headers:")
;e.push("        Host: "+Te(t["ws-opts"].headers.Host))}else if(t.network==="xhttp"){const n=t["xhttp-opts"];e.push("    xhttp-opts:");e.push("      path: "+Te(n.path));e.push("      mode: "+Te(n.mode));e.push("      host: "+Te(n.host))
;e.push("      x-padding-obfs-mode: "+Te(n["x-padding-obfs-mode"]));e.push("      x-padding-method: "+Te(n["x-padding-method"]));e.push("      x-padding-placement: "+Te(n["x-padding-placement"]));e.push("      x-padding-header: "+Te(n["x-padding-header"]))
;e.push("      x-padding-key: "+Te(n["x-padding-key"]))}return e.join("\n")}function Ue(t,e){const n=t.host,r="/"+t.path,a=new Set,o=e.map(e=>{const{user:o,srv:s,prt:i,name:l,isTrojan:c,tls:d}=Ie(e,0);let p=l;const u=we(e,"type")||"ws";if(a.has(p)){const t=c?"T":u==="xhttp"?"X":"W";let e=p+"·"+t,n=2
;for(;a.has(e);){e=p+"·"+t+n;n++}p=e}a.add(p);const f={name:p,server:s,port:i,udp:!0,...d?{tls:!0,"skip-cert-verify":!0,servername:n,"client-fingerprint":"chrome",alpn:["http/1.1"]}:{},...t.ech&&d?{"ech-opts":{enable:!0,"query-server-name":t.echHost||"cloudflare-ech.com"}}:{}};if(c)return{...f,
type:"trojan",password:o,network:"ws","ws-opts":{path:r,headers:{Host:n}}};if(u==="xhttp"){let t={};try{t=JSON.parse(we(e,"extra")||"{}")}catch(t){}return{...f,type:"vless",uuid:o,network:"xhttp",alpn:["h2"],"xhttp-opts":{path:r,mode:"stream-one",host:n,
"x-padding-obfs-mode":t.xPaddingObfsMode===void 0||t.xPaddingObfsMode,"x-padding-method":t.xPaddingMethod||"tokenish","x-padding-placement":t.xPaddingPlacement||"queryInHeader","x-padding-header":t.xPaddingHeader||"","x-padding-key":t.xPaddingKey||""}}}return{...f,type:"vless",uuid:o,network:"ws",
"ws-opts":{path:r,headers:{Host:n}}}});o.sort((t,e)=>(t.port===443?0:1)-(e.port===443?0:1));const s=`# CFNext 订阅\ntest-url: 'http://www.gstatic.com/generate_204'\nproxies:\n${o.map(t=>$e(t)).join("\n")}\n${d}\n`;return s}function Ee(t,e){const n=t.host,r="/"+t.path,a=[]
;for(const t of e)t.startsWith("trojan://")&&t.indexOf("security=none")<0?a.push(t):t.startsWith("vless://")&&t.indexOf("type=xhttp")<0&&t.indexOf("security=none")<0&&a.push(t.replace(/^vless:\/\//,"trojan://").replace("encryption=none&",""));const o=a.map((t,e)=>{
const{user:a,srv:o,prt:s,name:i}=Ie(t,e);return`${i} = trojan, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}, tls=true, skip-cert-verify=true, sni=${n}`})
;return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}
function De(t,e){const n=t.host,r="/"+t.path,a=new Map,o=e.map((t,e)=>{const{user:o,srv:s,prt:i,name:l,isTrojan:c,tls:d}=Ie(t,e),p=we(t,"type")||"ws",u=l||"节点-"+(e+1),f=(a.get(u)||0)+1;a.set(u,f);const h=f===1?u:u+"-"+f,m=d?p==="xhttp"?{enabled:!0,server_name:n,insecure:!0,alpn:["h2"]}:{enabled:!0,
server_name:n,insecure:!0,alpn:["http/1.1"],utls:{enabled:!0,fingerprint:"chrome"}}:{enabled:!1},g=p==="xhttp"?{type:"xhttp",mode:"stream-one",path:r}:d?{type:"ws",path:r,headers:{Host:n},max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol"}:{type:"ws",path:r,headers:{Host:n}}
;return c?{type:"trojan",tag:h,server:s,server_port:i,password:o,tls:m,transport:g}:{type:"vless",tag:h,server:s,server_port:i,uuid:o,packet_encoding:"xudp",tls:m,transport:g}}),s=o.map(t=>t.tag),i={log:{level:"info"},dns:{servers:[{address:"223.5.5.5"},{address:"119.29.29.29"}]},inbounds:[{
type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080}],outbounds:[...o,{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"selector",tag:"🚀 节点选择",outbounds:s},{type:"selector",tag:"🎯 全球直连",outbounds:["direct"]},{type:"selector",tag:"🐟 漏网之鱼",outbounds:["🚀 节点选择","🎯 全球直连"]}],
route:{rules:[{geoip:["cn"],outbound:"direct"},{outbound:"🐟 漏网之鱼"}]}};return JSON.stringify(i,null,2)}function Oe(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=Ie(t,e),d=c?", tls=true, skip-cert-verify=true, sni="+n:", tls=false"
;return l?`${i} = trojan, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${d}`:`${i} = vless, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${d}`})
;return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${a.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}
function Ne(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=Ie(t,e),d=c?", tls=true, skip-cert-verify=true, sni="+n:", tls=false"
;return l?`${i} = trojan, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${d}`:`${i} = vless, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${d}`}),o=a.map(t=>t.split(" = ")[0]).join(", ")
;return`[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, ${o}\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function Le(t,e){
const n=t.host,r="/"+t.path,a=t=>t.indexOf(":")>=0?"["+t+"]":t,o=e.map((t,e)=>{const{user:o,srv:s,prt:i,name:l}=Ie(t,e);if(t.startsWith("trojan://"))return`trojan=${a(s)}:${i}, password=${o}, over-tls=true, tls-host=${n}, obfs=wss, obfs-host=${n}, obfs-uri=${r}, tls-verification=true, tag=${l}`
;const c=(we(t,"security")||"tls")==="tls";return`vless=${a(s)}:${i}, method=none, password=${o}, obfs=${c?"wss":"ws"}, obfs-host=${n}, obfs-uri=${r}${c?", tls-verification=true, tls13=true":""}, tag=${l}`}),s=e.map((t,e)=>{const n=t.indexOf("#");if(n<0)return`节点${e+1}`;try{
return decodeURIComponent(t.slice(n+1))||`节点${e+1}`}catch(t){return`节点${e+1}`}}).join(", ")
;return`[general]\nnetwork_check_url=http://www.gstatic.com/generate_204\nserver_check_url=http://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n${o.join("\n")}\n[policy]\nstatic=🚀 节点选择, ${s}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\nstatic=🌐 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\nstatic=🐟 漏网之鱼, 🚀 节点选择, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\n[filter_local]\ngeoip, cn, 🌐 全球直连\nfinal, 🐟 漏网之鱼\n`
}let Me=!1;function Re(t){Me=t===!0||t==="true"||t==="1"||t===1}const ze=4;let Fe=0;const qe=[];function je(){if(Fe<ze){Fe++;return Promise.resolve()}return new Promise(t=>qe.push(t))}function He(){const t=qe.shift();t?t():Fe--}async function Ke(t,e){const n=[];let r=0;const a=Array.from({
length:Math.min(ze,t.length)},async()=>{for(;r<t.length;){const a=r++;await je();try{n[a]=await e(t[a],a)}catch(t){n[a]=!1}finally{He()}}});await Promise.all(a);return n}async function Be(e,n,r){if(!Me)return!0;if(x(e))return!0;const a=r||2e3;try{const r=t({hostname:e,port:n})
;await Promise.race([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("proxy timeout")),a))]);try{r.close()}catch(t){}return!0}catch(t){return!1}}async function _e(t,e,n){return!Me||Ge(t,e,n)}async function Ge(e,n,r){const a=r||2500;try{const r=t({hostname:e,port:n})
;await Promise.race([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("tcp timeout")),a))]);const o=r.writable.getWriter(),s=r.readable.getReader();await o.write((new TextEncoder).encode("GET / HTTP/1.1\r\nHost: "+e+"\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n"))
;const i=await Promise.race([s.read(),new Promise((t,e)=>setTimeout(()=>e(new Error("http timeout")),a))]);try{r.close()}catch(t){}const l=(new TextDecoder).decode(i.value||new Uint8Array(0));return/^HTTP\/1\\.[01] (200|204)/.test(l)}catch(t){return!1}}async function We(t){try{
const e=await be("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(t)+"&type=A",{headers:{accept:"application/dns-json"}},4e3);if(!e||!e.ok)return null;const n=await e.json(),r=(n.Answer||[]).filter(t=>t.type===1&&/^\d+\.\d+\.\d+\.\d+$/.test(t.data)).map(t=>t.data)
;return r.filter(x)[0]||null}catch(t){return null}}const Ve={t:0,list:null};async function Je(t){if(!Me)return String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean).join("\n");if(Date.now()-Ve.t<6e5&&Ve.list!==null)return Ve.list
;const e=String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean),n=await Ke(e,async t=>{const e=await We(t);return e&&x(e)?{d:t,ok:await Be(e,443)}:{d:t,ok:!1}}),r=n.map((t,n)=>t&&t.ok?e[n]:null).filter(Boolean);Ve.t=Date.now();Ve.list=r.join("\n");return Ve.list}
const Qe={list:null,at:0};async function Xe(){if(Qe.list&&Date.now()-Qe.at<6e5)return Qe.list;const t=[],e=A.map(async e=>{try{const n=await be(e.url,{headers:{"User-Agent":"Mozilla/5.0"}},8e3);if(!n.ok)return;const r=await n.text(),a=[];for(const t of r.split(/[\r\n]+/)){
const n=t.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);n&&a.length<e.count&&a.push({ip:n[1],port:n[2]?parseInt(n[2],10):443,name:e.label+"-"+String(a.length+1).padStart(2,"0")})}a.forEach(e=>t.push(e))}catch(t){}});await Promise.all(e);Qe.list=t;Qe.at=Date.now();return t}
function Ye(t,e,n){if(t.length>=n)return;const r=new Set;for(const e of t)try{r.add(ye(e).host)}catch(t){}let a=0;for(const o of C){if(t.length>=n)break;if(r.has(o))continue;r.add(o);a++;const s="内置·保底-"+String(a).padStart(2,"0"),i=fe(s,!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp)
;e.enableVless&&t.push(he(e,o,443,i.v));if(t.length>=n)break;e.enableTrojan&&t.push(me(e,o,443,i.t));if(t.length>=n)break;e.enableXhttp&&t.push(he(e,o,443,i.x,{type:"xhttp"}))}}function Ze(t,e,n,r){if(t.length>=n)return;const a=new Set;for(const e of t)try{a.add(ye(e).host)}catch(t){}
const o=(r,o)=>{if(t.length>=n)return;if(a.has(r))return;a.add(r);const s=fe(o,!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);e.enableVless&&t.push(he(e,r,443,s.v));e.enableTrojan&&t.push(me(e,r,443,s.t));e.enableXhttp&&t.push(he(e,r,443,s.x,{type:"xhttp"}))}
;e.src&&e.src.native===!0&&o(e.host,"原生地址")}async function tn(t,e,n,r,a,o){t.path&&t.path!=="/"&&t.path!==""||(t.path=t.uuid);const s=t.filter&&t.filter.ipType||[];s.includes("IPv6")&&await b();const i=t.optimizer&&t.optimizer.subMode||""
;if(i===""&&t.probeAlive&&(!t.preferredIPs||t.preferredIPs.length<80)){let e=!1;try{const n=await st(o);if(n&&n.length){const r=new Set((t.preferredIPs||[]).map(t=>t.ip)),a=n.filter(t=>t&&t.ip&&!r.has(t.ip));a.length&&(t.preferredIPs=[...t.preferredIPs||[],...a]);e=!0}}catch(t){}if(!e)try{
const[e,n,r]=await Promise.all([Xe().catch(()=>[]),ie(200).catch(()=>null),Promise.resolve(Y(T.join("\n")))]),a=[],s=[],i=new Set((t.preferredIPs||[]).map(t=>t.ip));for(const o of[...t.preferredIPs||[],...e||[],...n||[],...r]){if(!o||!o.ip||i.has(o.ip))continue;i.add(o.ip);const t={ip:o.ip,
port:o.port||443,name:o.name||"",relay:!!o.relay};t.relay||!x(t.ip)?s.push(t):a.push(t)}
const l=s.slice(0,100),c=a.slice(0,150),[d,p]=await Promise.all([Ke(l,t=>_e(t.ip,t.port||443,2500)),Ke(c,t=>Be(t.ip,t.port||443,2500))]),u=l.filter((t,e)=>d[e]),f=c.filter((t,e)=>p[e]),h=f.slice(0,210),m=u.slice(0,40);t.preferredIPs=[...t.preferredIPs||[],...h,...m].slice(0,250);it(o,t.preferredIPs)
}catch(t){}}const l=!/\.workers\.dev$/i.test(new URL(e).hostname),c=Object.assign({},t,{host:t.host||new URL(e).hostname});l&&(c.tlsOnly=!0);const d=t.optimizer&&t.optimizer.subMode||"";let p=[]
;const f=t.filter&&t.filter.ipType||[],h=f.includes("IPv6"),g=f.length===1&&f[0]==="IPv6",v=g?m:h?[...u,...m]:u,y=Y(T.join("\n")).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"优选IP-"+String(T.indexOf(t)+1).padStart(2,"0")}));if(d==="custom"){
const e=!(!t.optimizer||!t.optimizer.subIncludeDefault),n=!e;p=await ve(t.preferredDomains||"",n?200:40,n?2e3:300,e,e,h);if(e){const t=await ve($,40,240,!1,!0,h),e=new Set(t.map(t=>t.ip));p=[...t,...p.filter(t=>!e.has(t.ip))];c.preferredIPs=[...c.preferredIPs||[],...y];c.optimizer||(c.optimizer={})
;c.optimizer.fillCount=Math.max(parseInt(c.optimizer.fillCount)||0,800)}}else if(d===""){const e=t.src||{},n=e.native===!0,r=e.prefDomain!==!1,a=e.prefIp!==!1,o=e.customPref===!0;n&&!g&&(c.preferredDomains=(c.preferredDomains?c.preferredDomains+"\n":"")+c.host+"#原生地址");o||(c.preferredIPs=[])
;const s=t.filter||{},i=s.region,l=Array.isArray(i)?i.length===0||i.includes("all"):!i||i==="all";if(l){p=[];if(r&&!g){const t=await Je($);t&&(c.preferredDomains=(c.preferredDomains?c.preferredDomains+"\n":"")+t)}if(a&&!g){const t=await ie(150)
;t&&t.length&&(c.preferredIPs=[...c.preferredIPs||[],...t]);try{const t=await ve(w,100,600,!0,!0,!1);t&&t.length&&(c.preferredIPs=[...c.preferredIPs||[],...t])}catch(t){}}if(h&&r)try{const t=$+(g?"\n"+S.join("\n"):""),e=await ve(t,40,g?800:240,!1,!0,!0)
;e&&e.length&&(c.preferredIPs=[...c.preferredIPs||[],...e])}catch(t){}}else r&&(p=await ve($,100,300,!1,!0,h));if(a)if(g){const t=y.map(t=>({ip:Q(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);c.preferredIPs=[...c.preferredIPs||[],...t]}else if(h){const t=y.map(t=>({ip:Q(t.ip),
port:t.port||443,name:t.name})).filter(t=>t.ip);c.preferredIPs=[...c.preferredIPs||[],...y,...t]}else c.preferredIPs=[...c.preferredIPs||[],...y];if(!n&&!r&&!a&&!o)if(g){const t=y.map(t=>({ip:Q(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);c.preferredIPs=[...c.preferredIPs||[],...t]
}else c.preferredIPs=[...c.preferredIPs||[],...y];g&&c.preferredIPs&&(c.preferredIPs=c.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0));c.optimizer||(c.optimizer={});c.optimizer.fillCount=Math.max(parseInt(c.optimizer.fillCount)||0,g?0:1e3)
;if(t.probeAlive&&c.preferredIPs&&c.preferredIPs.length){const t=C.map((t,e)=>({ip:t,port:443,name:"优选IP-S"+String(e+1).padStart(2,"0")})),e=new Set(t.map(t=>t.ip));c.preferredIPs=[...t,...c.preferredIPs.filter(t=>!e.has(t.ip))]}}const I=t._skipIssued&&t._skipIssued.size?t._skipIssued:null
;if(p.length){let t=p;if(I){const e=p.filter(t=>!I.has(t.ip)),n=p.filter(t=>I.has(t.ip));t=[...e,...n]}const e=(c.preferredIPs||[]).length;t=t.map((t,n)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(t.name||"")?Object.assign({},t,{name:"优选IP-"+String(e+n+1).padStart(2,"0")}):t)
;c.preferredIPs=[...c.preferredIPs||[],...t]}g&&c.preferredIPs&&(c.preferredIPs=c.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0));r=(r||"").toLowerCase()
;const k=(n||"").toLowerCase(),P=["clash","singbox","sing-box","surge","surfboard","loon","quanx","quantumultx"].includes(k)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/.test(r);let A=P?300:800
;d==="custom"&&t.optimizer&&t.optimizer.subIncludeDefault&&(A=P?Math.max(A,300):Math.max(A,800));d!=="custom"||t.optimizer&&t.optimizer.subIncludeDefault||(A=P?Math.max(A,800):Math.max(A,2e3));t.polling===!1&&(A=1e4);if(t.nodeLimit){const e=parseInt(t.nodeLimitCount)||0;e>0&&(A=Math.min(e,1e3))}
t._quotaCap&&(A=Math.min(A,t._quotaCap));const U=d==="random"?Object.assign({},t.filter,{region:"all"}):t.filter;let E=Ae(await xe(c,A,I),U);const D=d==="custom"&&!(t.optimizer&&t.optimizer.subIncludeDefault);D||g||Ze(E,c,A,a);!t.probeAlive||g||D&&E.length>0||Ye(E,c,A)
;if(t.nodeLimit&&d&&!D&&E.length<A){const t=A-E.length,e=new Set;for(const t of E)try{e.add(ye(t).host)}catch(t){}const n=(t,n,r)=>{if(!(E.length>=A)&&!e.has(t)){e.add(t);E.push(he(c,t,n||443,r))}};let r=0;try{const e=await Xe(),r=I?e.filter(t=>!I.has(t.ip)):e,a=r.length>=t?r:e;for(const t of a){
n(t.ip,t.port,t.name||"优选IP-"+String(t.port));if(E.length>=A)break}}catch(t){}if(E.length<A){const t=A-E.length,e=m,a=g?e:h?[...u,...e]:u,o=X(a,t*3),s=I?o.filter(t=>!I.has(t)):o,i=s.length>=t?s:o;for(const t of i){if(E.length>=A)break;r++;n(t,443,"优选IP-"+String(r).padStart(3,"0"))}}}
E.length>A&&(E.length=A);if(t.loadBalance!==!1&&E.length>1&&d!=="random")for(let t=E.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1)),n=E[t];E[t]=E[e];E[e]=n}const O=[],N=new Set;for(const t of E)try{const{host:e}=ye(t);if(H(e)&&!N.has(e)){N.add(e);O.push(e)}}catch(t){}let L,M
;if(k==="clash"){L="text/yaml";M=Ue(c,E)}else if(k==="singbox"||k==="sing-box"){L="application/json";M=De(c,E)}else if(k==="surge"){L="text/plain";M=Oe(c,E)}else if(k==="surfboard"){L="text/plain";M=Ee(c,E)}else if(k==="loon"){L="text/plain";M=Ne(c,E)}else if(k==="quanx"||k==="quantumultx"){
L="text/plain";M=Le(c,E)}else if(k==="plain"||k==="raw"){L="text/plain";M=E.join("\n")}else if(k==="v2ray"||k==="v2rayn"||k==="shadowrocket"||k==="nekoray"||k==="stash"){L="text/plain";M=E.join("\n")}else if(r.includes("clash")||r.includes("stash")){L="text/yaml";M=Ue(c,E)
}else if(r.includes("sing-box")){L="application/json";M=De(c,E)}else if(r.includes("surge")){L="text/plain";M=Oe(c,E)}else if(r.includes("surfboard")){L="text/plain";M=Ee(c,E)}else if(r.includes("loon")){L="text/plain";M=Ne(c,E)}else if(r.includes("quantumult")){L="text/plain";M=Le(c,E)}else{
L="text/plain";M=E.join("\n")}return{type:L,body:M,issued:O}}const en=String.raw`
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
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH、节点测活、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid2">
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
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">关闭：不做任何 TCP 握手 / HTTP 探测与剔除，节点的下发策略、出入站方式、ProxyIP 等节点相关均按 V1.x版本处理方式处理——按数据源原始顺序全量下发，客户端自行择优。<br>开启：对候选地址做 TCP 探测并剔除判死项（含精选池 / 优选 IP / 域名预检 / ProxyIP 兜底）；Cloudflare 运行时禁止出站连接 CF IP 段，故对 CF 段 IP 跳过探测、直接视为可用（内置精选池实测 97% 可用，不会被误判清空），仅对非 CF 段（反代 / ProxyIP）真实测活剔除死节点。自定义订阅 / 随机优选模式不测活。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>负载均衡</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>负载均衡（打乱下发顺序）</span></div>
          <p class="hint" style="margin-top:12px">每次订阅请求对节点顺序做随机轮换（Fisher-Yates），客户端连接分散到整批节点，避免全部集中踩同一批头部「最优 IP」导致拥塞变慢；关闭则保持固定顺序（头部为最稳节点）。</p>
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
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div></div>
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
        <p class="hint" style="margin-top:4px">部署后首次访问面板会强制要求先设置管理密码；设置完成后，此处留空并保存即可恢复免登录。</p>
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
  var lb = !(CFG && CFG.loadBalance === false);
  $('qLb').textContent = lb ? '已开启（随机轮换）' : '关闭（固定顺序）';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
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
  $('q-lb-on').checked = CFG.loadBalance !== false;
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
    loadBalance: $('q-lb-on').checked,
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

`,nn="\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>CFNext · 登录</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>CFNext</b><span>Cloudflare 全新代理管理面板</span></div>\n  </div>\n  <h1>登录</h1>\n  <p>请输入管理密码以继续</p>\n  <div class=\"msg\" id=\"msg\">密码错误，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"管理密码\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">登录</button>\n  </form>\n  <div class=\"foot\">配置保存在 Cloudflare KV 中，密码错误 24 小时后自动失效</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || '/';\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",rn="\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>CFNext · 首次设置</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>CFNext</b><span>Cloudflare 全新代理管理面板</span></div>\n  </div>\n  <h1>设置管理密码</h1>\n  <p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\n  <div class=\"msg\" id=\"msg\">设置失败，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"设置管理密码（至少 4 位）\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"确认管理密码\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">设置并进入面板</button>\n  </form>\n  <div class=\"foot\">密码保存在 Cloudflare KV 中，之后可在「面板设置」中修改</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || '/';\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '密码至少 4 位'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '两次输入的密码不一致'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '设置失败，请重试'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n"
;function an(t,e){return!t.admin&&!t.adminInit&&!(!e.K||typeof e.K.get!=="function")}function on(t){return(t||"").toLowerCase().includes("mozilla")}async function sn(t,e){if(!e.admin)return!0;const n=t.headers.get("Cookie")||"",r=n.match(/(?:^|;\s*)luma_auth=([^;]+)/)
;return!(!r||r[1]!==z(String(e.admin)))}async function ln(t,n){const a=new URL(t.url),o=t.headers.get("User-Agent")||"",s=(t.headers.get("Upgrade")||"").toLowerCase();if(a.protocol==="http:")return Response.redirect(a.href.replace("http://","https://"),301)
;const i=await lt(n),l=i.path||i.uuid,d=a.pathname.replace(/^\/+|\/+$/g,""),p=d.split("/");if(p[0]==="version")return nt({version:e});if(p[0]==="login"){const e=!i.admin&&an(i,n);if(t.method==="POST"){const r=await t.text(),a=new URLSearchParams(r);if(e){const t=String(a.get("password")||"")
;if(t.length<4)return nt({ok:!1,msg:"密码至少 4 位"},400);const e=JSON.parse(JSON.stringify(i));e.admin=t;e.adminInit=!0;if(!await ct(n,e))return nt({ok:!1,msg:"未绑定 KV 命名空间，无法保存管理密码"},500);const r=z(t);return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"}),{status:200,headers:{
"Content-Type":"application/json; charset=utf-8","Set-Cookie":`luma_auth=${r}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`}})}if(a.get("password")===i.admin){const t=z(String(i.admin));return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"}),{status:200,headers:{
"Content-Type":"application/json; charset=utf-8","Set-Cookie":`luma_auth=${t}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`}})}return nt({ok:!1,msg:"密码错误"},403)}return i.admin?new Response(nn,{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):e?new Response(rn,{status:200,
headers:{"Content-Type":"text/html; charset=utf-8"}}):Response.redirect(new URL("/"+l,t.url).href,302)}const u=String(i.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,""),f=p[0]===l||!!u&&p[0]===u;if(p[0]===""&&on(o))return Response.redirect(new URL("/"+l,t.url).href,302);if(f&&p.length===1){
if(s==="websocket")return ee(t,i);if(t.method==="POST"&&i.enableXhttp)try{return await ne(t,i)}catch(t){return nt({ok:!1,msg:"xhttp 代理错误: "+(t.message||t)},500)}}if(f&&(p[1]==="sub"||p.length===1&&!on(o)&&!o.startsWith("luma"))){const e=p.length>=3?p[2]:"";try{let r=null
;if(i.polling!==!1&&n.K&&typeof n.K.get==="function")try{const t=await n.K.get("issued");if(t){const e=JSON.parse(t);Array.isArray(e.ips)&&e.ips.length&&(r=new Set(e.ips))}}catch(t){}const a=r?Object.assign({},i,{_skipIssued:r}):i;if(i.quotaAuto)try{const t=await mt(n,i)
;if(t.configured&&t.today&&t.today.requests>=Math.round(ut*.6)){const e=t.today.requests/t.limit,n=Math.max(.1,(1-e)/.4);a._quotaCap=Math.max(20,Math.round(1e3*n))}}catch(t){}const s=await tn(a,t.url,e,o,t.cf&&t.cf.colo,n)
;if(i.polling!==!1&&n.K&&typeof n.K.put==="function"&&s.issued&&s.issued.length){const t=r?Array.from(r):[],e=[...new Set([...s.issued,...t])].slice(0,200),a=e.length!==t.length||e.some((e,n)=>e!==t[n]);if(a){const t=JSON.stringify({t:Date.now(),ips:e})
;n._ctx&&typeof n._ctx.waitUntil==="function"?n._ctx.waitUntil(n.K.put("issued",t).catch(()=>{})):await n.K.put("issued",t).catch(()=>{})}}return new Response(s.body,{status:200,headers:{"Content-Type":s.type+"; charset=utf-8","Cache-Control":"no-store",
"Content-Disposition":"attachment; filename=\"CFNext\"; filename*=utf-8''CFNext"}})}catch(t){return new Response("订阅生成失败: "+(t&&t.message||t),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}
if(f&&p.length===1&&on(o))return an(i,n)?Response.redirect(new URL("/login?setup=1&next="+encodeURIComponent("/"+l),t.url).href,302):await sn(t,i)?new Response(en,{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}
}):Response.redirect(new URL("/login?next="+encodeURIComponent("/"+l),t.url).href,302);if(f&&p[1]==="api"){const s=p[2]||"";if(an(i,n))return nt({ok:!1,status:403,msg:"请先完成首次设置：设置管理密码后再访问面板"},403);const d=await sn(t,i);if(!d)return nt({ok:!1,status:403,msg:"未授权（需要管理密码）"},403);if(s==="config"){
if(t.method==="GET")return nt({ok:!0,data:Object.assign({},i,{version:e})});if(t.method==="POST")try{const r=await t.json();let a=!1;if(n.K&&typeof n.K.get==="function")try{const t=await n.K.get("config",{cacheTtl:30});if(t){const e=JSON.parse(t);e.quotaAuto!==void 0&&(a=!0)}}catch(t){}
const o=Object.assign(JSON.parse(JSON.stringify(i)),r);if(!a&&o.quotaAuto===!1){const t=Boolean(o.cfAccountId&&o.cfApiToken||n.CF_ACCOUNT_ID&&n.CF_API_TOKEN);t&&(o.quotaAuto=!0)}r.optimizer&&typeof r.optimizer==="object"&&(o.optimizer=Object.assign(o.optimizer,r.optimizer))
;r.preferredIPs&&Array.isArray(r.preferredIPs)&&(o.preferredIPs=r.preferredIPs);await ct(n,o);const s=await lt(n,t.url);return nt({ok:!0,data:Object.assign({},s,{version:e}),msg:"已保存并生效"})}catch(t){return nt({ok:!1,msg:"保存失败: "+(t.message||t)},500)}}if(s==="reset"){if(t.method!=="POST")return nt({
ok:!1,msg:"仅支持 POST"},405);try{if(!n.K||typeof n.K.delete!=="function")return nt({ok:!1,msg:"未绑定 KV 命名空间，无需重置"},400);await n.K.delete("config");await n.K.delete("issued");at();return nt({ok:!0,msg:"已重置：KV 已清空，面板还原为初始部署状态"})}catch(t){return nt({ok:!1,msg:"重置失败: "+(t.message||t)},500)}}
if(s==="status")return nt({ok:!0,data:{version:e,kind:r()==="obfuscated"?"混淆版":"明文版",host:a.hostname,path:l,region:t.cf&&t.cf.colo||"unknown",kv:!(!n.K||typeof n.K.get!=="function"),workersDev:/\.workers\.dev$/i.test(a.hostname)}});if(s==="update")try{const t=await c(n),e={current:t.current,
latest:t.latest,hasUpdate:t.hasUpdate,kind:t.kind,error:t.error||""};t.hasUpdate&&t.code&&(e.code=t.code);return nt({ok:!0,data:e})}catch(t){return nt({ok:!1,msg:"检测失败: "+(t.message||t)},500)}if(s==="quota")try{const t=await mt(n,i);return nt({ok:!0,data:t})}catch(t){return nt({ok:!1,
msg:"查询失败: "+(t.message||t)},500)}if(s==="sub"){const e=a.searchParams.get("fmt")||"";try{const r=await tn(i,t.url,e,o,t.cf&&t.cf.colo,n);return nt({ok:!0,type:r.type,body:r.body})}catch(t){return nt({ok:!1,msg:"订阅生成失败: "+(t.message||t)},500)}}if(s==="candidates"){if(t.method!=="POST")return nt({
ok:!1,msg:"仅支持 POST"},405);try{const e=await t.json().catch(()=>({})),n=await le(Object.assign({},i.optimizer,e));if(!n.candidates.length){const t=n.stats||{},e=[t.presetErr&&"预设源: "+t.presetErr,t.customErr&&"自定义源: "+t.customErr].filter(Boolean).join("；");return nt({ok:!1,
msg:"没有可测的 IP"+(e?"（"+e+"）":"，请换一个数据源")},400)}return nt({ok:!0,data:n.candidates,stats:n.stats})}catch(t){return nt({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}if(s==="domains")try{const t=E[a.searchParams.get("source")||"wetest_cname"]||E.wetest_cname,e=await fetch(t.url,{headers:{
"User-Agent":"Mozilla/5.0"}});if(!e.ok)return nt({ok:!1,msg:"拉取失败 HTTP "+e.status});const n=oe(await e.text());return nt({ok:!0,data:n})}catch(t){return nt({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}return nt({ok:!1,msg:"未知 API: "+s},404)}return new Response("Not Found",{status:404})}
async function cn(t,e,n){const r=String(e.BESTIP_AUTO||"").toLowerCase();if(r==="1"||r==="true")try{const t=await lt(e),n=await le(t.optimizer),r=n.candidates||[];if(!r.length)return;const a=await de(r,t.optimizer.threads||5,5e3),o=a.filter(t=>t.ok).slice(0,t.optimizer.count||20);if(!o.length)return
;const s=o.map(t=>({ip:t.ip,port:t.port||443,name:""})),i=new Set((t.preferredIPs||[]).map(t=>t.ip)),l=new Set(s.map(t=>t.ip));if(i.size===l.size&&[...l].every(t=>i.has(t)))return;t.preferredIPs=s;await ct(e,t)}catch(t){}}export default{async fetch(t,e,n){return ln(t,Object.assign({},e,{_ctx:n}))},
async scheduled(t,e,n){return cn(t,e,n)}};