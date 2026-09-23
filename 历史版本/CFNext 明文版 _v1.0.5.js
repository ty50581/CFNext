// ============================================================================
//  CFNext —— Cloudflare 代理管理面板 · 全新独立编写
// ============================================================================
//  环境变量：
//    U            VLESS UUID（必填，同时用作面板访问路径，除非设置了 D）
//    D / PATH     自定义面板路径（可选）
//    ADMIN        面板管理密码（可选，设置后访问面板需登录）
//    HOST         自定义 SNI/Host（可选，默认使用 Worker 域名）
//    PROXYIP      自定义反代/落地 IP（可选，留空使用内置地区反代，格式 host 或 host:port）
//    S / OUTBOUND 出站代理（可选，socks5:// / http:// 或 host:port）
//    ECH          设为 true/1 开启 ECH 加密（可选）
//    TROJAN       设为 true/1 开启 Trojan 协议（已支持 Clash Verge / Mihomo，自动下发 sni 字段；V2rayNG 亦可使用）
//    TROJAN_PASSWORD  Trojan 密码（开启 Trojan 时必填）
//    ALPN         自定义 ALPN 协商（可选）
//    YX           自定义优选 IP 列表（可选，格式 IP:port#名称，逗号分隔）
//    YXURL        优选器自定义数据源 URL（可选）
//    BESTIP_AUTO  设为 1 启用定时自动优选（scheduled 触发，刷新优选节点）
//    K            已绑定 KV 命名空间时读取图形化配置
// ============================================================================
import { connect } from 'cloudflare:sockets';
const VERSION = '1.0.5';
// GitHub 仓库最新版源码地址（面板右上角版本号按钮点击检测更新；远端版本号取自该文件 const VERSION）
const UPDATE_RAW_URL = 'https://raw.githubusercontent.com/PAICNI/CFNext/main/CFNext%20%E6%98%8E%E6%96%87%E7%89%88.js';
const CLASH_TEMPLATE = `# ==================== 锚点配置 ====================
# 代理提供者模板 - 订阅源基础配置

# 节点筛选正则表达式 - 仅保留常用地区
FilterHK: &FilterHK '^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$'
FilterSG: &FilterSG '^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$'
FilterJP: &FilterJP '^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$'
FilterUS: &FilterUS '^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$'
# 注意：🇼🇸 是萨摩亚旗帜，不是台湾，已移除，避免误匹配
FilterTW: &FilterTW '^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$'

# ==================== 监听器 ====================
listeners:
  # Shadowsocks监听器 - 远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）
  - {name: SS-IN,  type: shadowsocks, listen: '::', port: 10000, udp: true, password: Xf3#Lp9WqZ, cipher: aes-256-gcm}
  # Mixed监听器 - 分地区专用端口 玩法：本地浏览器插件或手机APP配置代理，实现分地区访问
  - {name: MIXED-SG, type: mixed, port: 50000, proxy: 新加坡节点}
  - {name: MIXED-US, type: mixed, port: 50001, proxy: 美国节点}
  - {name: MIXED-TW, type: mixed, port: 50002, proxy: 台湾节点}
  - {name: MIXED-HK, type: mixed, port: 50003, proxy: 香港节点}
  - {name: MIXED-JP, type: mixed, port: 50004, proxy: 日本节点}
  - {name: MIXED-AL, type: mixed, port: 50007, proxy: 一键连接}

# ==================== 核心配置 ====================
mode: rule
port: 7890
socks-port: 7891
redir-port: 7892
mixed-port: 7893
tproxy-port: 7895
ipv6: true
allow-lan: true
unified-delay: true
tcp-concurrent: true
log-level: warning
bind-address: '*'
find-process-mode: 'always'
keep-alive-interval: 15
keep-alive-idle: 600

# 认证配置（默认凭据请务必修改！）
authentication:
  - mihomo:yyds666
skip-auth-prefixes:
  - 192.168.1.0/24
  - 192.168.31.0/24
  - 192.168.100.0/24
  - 127.0.0.1/8

# 实验性功能
experimental:
  quic-go-disable-gso: true

# 管理面板配置
external-ui-url: https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip
external-ui-name: zashboard
external-ui: ui
external-controller: 127.0.0.1:9090
secret: yyds666    # 请修改为自定义密钥
# 允许网页面板跨域访问
external-controller-cors:
  allow-origins:
    - "*"
  allow-private-network: true

# 配置存储
profile:
  store-selected: true
  store-fake-ip: true

# 流量嗅探
sniffer:
  enable: true
  force-dns-mapping: true   # 强制 DNS 映射，提高分流准确度
  parse-pure-ip: true       # 解析纯 IP 连接
  override-destination: true
  sniff:
    HTTP:
      ports: [80, 8080-8880]
    TLS:
      ports: [443, 8443]
    QUIC:
      ports: [443, 8443]
  skip-domain:
    - "+.push.apple.com"

# TUN模式配置
tun:
  enable: false
  stack: mixed
  mtu: 1480
  dns-hijack:
    - "any:53"
    - "tcp://any:53"
  udp-timeout: 300
  auto-route: true
  strict-route: true
  auto-redirect: true
  auto-detect-interface: true
  # 提示：系统级防泄露的最强手段是开启 TUN（自动劫持全部 DNS 流量）；
  # 不开 TUN 时，请把系统 / LAN 设备的 DNS 指向 127.0.0.1:53（本机）或本机局域网 IP:53。

hosts:
  miwifi.com: 192.168.31.2
  "epdg.epc.mnc010.mcc234.pub.3gppnetwork.org": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]
  services.googleapis.cn: services.googleapis.com
  cn.bing.com: www4.bing.com

# ==================== DNS 配置 ====================
# 防泄露要点：
#   1) respect-rules: true：DNS 服务器连接遵循路由规则（国外 DoH 走代理隧道、国内 DoH 直连），
#      解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。
#   2) 默认 nameserver 用国内 DoH；只有“将走代理”的规则集才用国外 DoH，
#      且其域名在 rules 中显式固定走代理。
#   3) fake-ip-filter 补齐系统连通性检测 / 时间同步 / 运营商登录等域名，防止系统误判断网而回退运营商 DNS。
dns:
  enable: true
  listen: 0.0.0.0:53        # 本机 / LAN 设备可把 DNS 指向此地址，避免走运营商 DNS
  ipv6: true
  prefer-h3: false          # respect-rules 下官方不推荐 DoH3；且 QUIC 已被规则拦截
  cache-algorithm: arc      # 性能更优的 ARC 缓存算法
  cache-size: 4096
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "+.lan"
    - "+.local"
    - "+.localhost"
    - "+.home.arpa"
    - "+.internal"
    # 系统连通性检测（防止 fake-ip 导致“无网络”判断，回退 ISP DNS 造成泄露）
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"          # 通配已覆盖 dns.msftncsi.com
    - "captive.apple.com"
    - "connectivitycheck.gstatic.com"
    - "detectportal.firefox.com"
    # 时间同步
    - "time.nist.gov"
    - "+.pool.ntp.org"
    - "time.*.com"              # 通配已覆盖 time.windows.com
    - "ntp.*.com"               # 通配已覆盖 ntp.ubuntu.com
    # 运营商 Wi-Fi 登录页
    - "+.cmpassport.com"
    - "id6.me"
    - "open.e.189.cn"
    - "mdn.open.wo.cn"
    - "opencloud.wostore.cn"
    - "auth.wosms.cn"
    - "+.10099.com.cn"
    # 原配置保留项
    - "+.market.xiaomi.com"
    - "+.pub.3gppnetwork.org"
    - "+.push.apple.com"
    - "+.bing.com"
    - "+.miwifi.com"
    - "+.docker.io"
    # 国内应用登录（+.qq.com 已覆盖 localhost.ptlogin2.qq.com）
    - "+.qq.com"
    # 直连 / 国内类规则集：返回真实 IP
    - rule-set:Direct
    - rule-set:Private
    - rule-set:China
  use-hosts: true
  respect-rules: true
  # 引导用 DNS（解析 DoH/DoT 服务器自身的域名），必须是 IP
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  # 默认解析：未命中 nameserver-policy 的域名（国内 DoH，直连）
  nameserver:
    - "https://dns.alidns.com/dns-query"
    - "https://doh.pub/dns-query"
  # 直连出口的解析
  direct-nameserver:
    - "https://dns.alidns.com/dns-query"
    - "https://doh.pub/dns-query"
  # 解析代理节点域名（防套娃 / 防循环，用国内直连可达的 DoH）
  proxy-server-nameserver:
    - "https://dns.alidns.com/dns-query"
    - "https://doh.pub/dns-query"
  nameserver-policy:
    # 广告域名直接返回空应答
    "rule-set:Advertising,AWAvenueAds": rcode://success
    # 直连类：国内 DoH
    "rule-set:Direct,Private,China":
      - "https://dns.alidns.com/dns-query"
      - "https://doh.pub/dns-query"
    # 走代理类：国外 DoH（连接本身经代理隧道，不直连暴露查询）
    "rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Microsoft,Proxy":
      - "https://dns.google/dns-query"
      - "https://cloudflare-dns.com/dns-query"

# ==================== 代理策略组（9 个可见 + 6 个隐藏自动子组） ====================
proxy-groups:
  # 主入口：默认自动选择，可手动切换各地区 / 故障转移 / 全部节点 / 直接连接
  - {name: 一键连接,     type: select, proxies: [自动选择, 故障转移, 香港节点, 台湾节点, 日本节点, 美国节点, 新加坡节点, 全部节点, 直接连接], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}
  # 自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换
  - {name: 自动选择,     type: url-test, include-all: true, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  - {name: 故障转移,     type: fallback, proxies: [香港节点, 台湾节点, 日本节点, 美国节点, 新加坡节点, 全部节点], url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}
  # 常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）
  - {name: 香港节点,     type: select, include-all: true, filter: *FilterHK, proxies: [香港自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}
  - {name: 台湾节点,     type: select, include-all: true, filter: *FilterTW, proxies: [台湾自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}
  - {name: 日本节点,     type: select, include-all: true, filter: *FilterJP, proxies: [日本自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}
  - {name: 美国节点,     type: select, include-all: true, filter: *FilterUS, proxies: [美国自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}
  - {name: 新加坡节点,   type: select, include-all: true, filter: *FilterSG, proxies: [新加坡自动], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}
  # 全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）
  - {name: 全部节点,     type: select, include-all: true, proxies: [自动选择], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}
  # 各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）
  - {name: 香港自动,     type: url-test, include-all: true, filter: *FilterHK, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  - {name: 台湾自动,     type: url-test, include-all: true, filter: *FilterTW, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  - {name: 日本自动,     type: url-test, include-all: true, filter: *FilterJP, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  - {name: 美国自动,     type: url-test, include-all: true, filter: *FilterUS, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  - {name: 新加坡自动,   type: url-test, include-all: true, filter: *FilterSG, url: 'https://www.google.com/generate_204', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true, icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}
  # 直连分组（放在最下方）
  - {name: 直接连接,     type: select, proxies: [DIRECT], icon: https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}

# ==================== 规则路由 ====================
rules:
  # 广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）
  - RULE-SET,Tracking,REJECT
  - RULE-SET,AWAvenueAds,REJECT
  - RULE-SET,Advertising,REJECT

  # DNS 服务器域名：解析通道固定，避免 DNS 流量走错路径（防泄露关键）
  - DOMAIN-SUFFIX,alidns.com,直接连接
  - DOMAIN-SUFFIX,doh.pub,直接连接
  - DOMAIN,dns.google,一键连接
  - DOMAIN,cloudflare-dns.com,一键连接

  # 直连规则
  - RULE-SET,Private,直接连接
  - RULE-SET,Direct,直接连接
  - RULE-SET,Download,直接连接
  - RULE-SET,AppleCN,直接连接
  # 阻止走代理的 QUIC（强制回退 TCP，避免 QUIC 绕过代理 / 被干扰）。
  # 放在直连规则之后：直连 QUIC 不受影响。如需 Telegram 语音等 UDP，可删除此行。
  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT

  # 常用国外服务（统一走一键连接）
  - RULE-SET,AI,一键连接
  - RULE-SET,Telegram,一键连接
  - RULE-SET,Twitter,一键连接
  - RULE-SET,SocialMedia,一键连接
  - RULE-SET,Netflix,一键连接
  - RULE-SET,YouTube,一键连接
  - RULE-SET,Spotify,一键连接
  - RULE-SET,TikTok,一键连接
  - RULE-SET,disney,一键连接
  - RULE-SET,Google,一键连接
  - RULE-SET,Microsoft,一键连接
  - RULE-SET,github,一键连接
  - RULE-SET,Proxy,一键连接
  - RULE-SET,China,直接连接

  # IP规则
  - RULE-SET,PrivateIP,直接连接,no-resolve
  - RULE-SET,TelegramIP,一键连接,no-resolve
  - RULE-SET,ProxyIP,一键连接,no-resolve
  - RULE-SET,ChinaIP,直接连接,no-resolve

  # 兜底规则：国内 IP 直连（ChinaIP 规则集已覆盖），其余走一键连接
  - MATCH,一键连接

# ==================== 规则集 ====================
# 规则集行为模板
BehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}
BehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}
BehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}
ClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}

# 规则提供者（仅保留常用）
rule-providers:
  # 广告
  Tracking:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}
  Advertising:    {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}
  AWAvenueAds:    {<<: *BehaviorDY, url: https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}
  # 直连 / 国内
  Direct:         {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}
  Private:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}
  Download:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}
  AppleCN:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}
  China:          {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/China.mrs}
  # 常用国外服务
  AI:             {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}
  Telegram:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}
  Twitter:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}
  SocialMedia:    {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}
  Netflix:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}
  YouTube:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}
  Google:         {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}
  Microsoft:      {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Microsoft.mrs}
  Proxy:          {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}
  # 媒体（DustinWin）
  Spotify:        {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}
  TikTok:         {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}
  disney:         {<<: *BehaviorDN, url: https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}
  # GitHub
  github:          {<<: *ClassicalYaml, url: https://rule.kelee.one/Clash/GitHub.yaml}
  # IP规则
  PrivateIP:      {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}
  TelegramIP:     {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}
  ProxyIP:        {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}
  ChinaIP:        {<<: *BehaviorIP, url: https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}

# ==================== EOF ====================
`;
// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------
// Cloudflare 官方 IPv4 地址段（入口 IP 校验 + 随机生成测速候选）
const CLOUDFLARE_CIDRS = [
  '173.245.48.0/20', '103.21.244.0/22', '103.22.200.0/22', '103.31.4.0/22',
  '141.101.64.0/18', '108.162.192.0/18', '190.93.240.0/20', '188.114.96.0/20',
  '197.234.240.0/22', '198.41.128.0/17', '162.158.0.0/15', '104.16.0.0/13',
  '104.24.0.0/14', '172.64.0.0/13', '131.0.72.0/22'
];
// 随机补足/随机优选只用这些新段：CF 老段（103.x/141.101/131.0/173.245 等）在国内大量不可达，
// 实测 90 个全段随机 IP 仅 5 个可达（5.6%）；新段命中率高得多
const REACHABLE_CIDRS = [
  '104.16.0.0/13', '104.24.0.0/14', '172.64.0.0/13', '162.158.0.0/15', '188.114.96.0/20'
];
// Cloudflare 官方 IPv6 地址段（用于入口 IP 过滤）
const CLOUDFLARE_CIDRS_V6 = [
  '2400:cb00::/32', '2606:4700::/32', '2803:f800::/32', '2405:b500::/32',
  '2405:8100::/32', '2a06:98c0::/29', '2c0f:f248::/32'
];
// IPv6 CIDR 前缀匹配（展开为 16 进制组后按位比较）
function ipInCidrV6(ip, cidr) {
  const [net, bitsStr] = cidr.split('/');
  const bits = parseInt(bitsStr, 10);
  const expand = (a) => {
    const dbl = a.indexOf('::');
    let groups;
    if (dbl >= 0) {
      const left = a.slice(0, dbl).split(':').filter(Boolean);
      const right = a.slice(dbl + 2).split(':').filter(Boolean);
      const fill = 8 - left.length - right.length;
      groups = [...left, ...Array(fill).fill('0'), ...right];
    } else groups = a.split(':');
    return groups.map(g => g.padStart(4, '0'));
  };
  const bitStr = (groups) => groups.map(g => parseInt(g, 16).toString(2).padStart(16, '0')).join('');
  return bitStr(expand(ip)).slice(0, bits) === bitStr(expand(net)).slice(0, bits);
}
// 判断 IP 是否属于 Cloudflare Anycast 段：节点入口必须是 CF 边缘 IP，
// 非 CF IP（如各地区云服务器/落地 IP）无法把客户端 TLS 转发到 Worker，下发必然连不通
function isCloudflareIP(ip) {
  ip = String(ip || '');
  if (!isValidIp(ip)) return false;
  if (ip.indexOf(':') >= 0) return CLOUDFLARE_CIDRS_V6.some(cidr => ipInCidrV6(ip, cidr));
  const p = ip.split('.').map(Number);
  const n = ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0;
  return CLOUDFLARE_RANGES.some(([start, end]) => n >= start && n <= end);
}
// ISO 国家/地区码 → 中文（用于优选 API 数据源（bestcf 等 /random-region/XX/）下发的节点命名，以及按 Worker 机房标注节点地区前缀）
const REGION_CN = {
  HK: '香港', TW: '台湾', MO: '澳门', JP: '日本', SG: '新加坡', US: '美国', KR: '韩国', DE: '德国',
  FR: '法国', GB: '英国', CA: '加拿大', AU: '澳大利亚', SE: '瑞典', NL: '荷兰', FI: '芬兰',
  NO: '挪威', DK: '丹麦', CH: '瑞士', IT: '意大利', ES: '西班牙', PT: '葡萄牙', IE: '爱尔兰',
  BE: '比利时', AT: '奥地利', PL: '波兰', CZ: '捷克', RO: '罗马尼亚', HU: '匈牙利', GR: '希腊',
  RU: '俄罗斯', TR: '土耳其', UA: '乌克兰', IN: '印度', TH: '泰国', MY: '马来西亚', VN: '越南',
  PH: '菲律宾', ID: '印尼', BR: '巴西', MX: '墨西哥', AR: '阿根廷', CL: '智利', ZA: '南非',
  EG: '埃及', AE: '阿联酋', IL: '以色列', NZ: '新西兰', KZ: '哈萨克斯坦', SA: '沙特'
};
// 内置 6 条地区优选源（bestcf 在线优选池，社区维护、活跃更新）：
// 返回的是各地区的「可达中转/优选 IP」（非 CF 官方 anycast 段，但作为客户端入口可把 TLS
// 转发到本 Worker，参考 edgetunnel / CFnew / TunnelBoard 的区域优选池用法），
// 默认订阅模式与「追加内置及默认节点」共用
const DEFAULT_REGION_POOLS = [
  'https://bestcf.pages.dev/random-region/HK/100.txt',
  'https://bestcf.pages.dev/random-region/TW/100.txt',
  'https://bestcf.pages.dev/random-region/JP/100.txt',
  'https://bestcf.pages.dev/random-region/SG/100.txt',
  'https://bestcf.pages.dev/random-region/US/100.txt',
  'https://bestcf.pages.dev/random-region/KR/100.txt'
].join('\n');
// 识别 bestcf 地区优选池 URL：这类来源的 IP 为社区中转节点（非 CF 段），
// 允许绕过「仅 CF 段」过滤直接下发；其余来源仍保持 CF 段硬性要求
const TRUSTED_REGION_POOL_RE = /random-region\/[A-Z]{2,}\/\d+\.txt/i;
function isTrustedRegionPool(url) {
  return TRUSTED_REGION_POOL_RE.test(String(url || ''));
}
const DEFAULT_CONFIG = {
  uuid: '',
  path: '',            // 自定义路径，留空用 UUID
  admin: '',
  host: '',
  // 协议开关
  enableVless: true,
  enableTrojan: false,
  trojanPassword: '',
  enableXhttp: false,
  // 传输参数
  alpn: '',
  ech: false,
  echHost: 'cloudflare-ech.com',   // ECH 查询域名（默认 cloudflare-ech.com）
  echDns: '',                      // 自定义 ECH DNS：客户端获取 ECH 配置的 DoH 地址（留空用默认 223.5.5.5）
  tlsOnly: false,       // TLS 控制：关闭下发全部节点，开启仅下发 TLS 端口节点
  nodeLimit: false,     // 节点数量控制：关闭不限制下发数量（默认），开启后按 nodeLimitCount 限制节点总数
  nodeLimitCount: 100,  // 开启节点数量控制后，最多下发的节点数
  polling: true,        // 轮询机制：开启后每次更新订阅轮询下发新节点（KV issued 去重，默认上限 Clash 300/V2rayN 800）；关闭后不轮询换新、一次性下发全部节点；节点数量控制（自定义限制）与其独立、始终生效
  // 落地与出站
  proxyIP: '',
  outboundProxy: '',
  outboundMode: '',    // '' | 'no' | 'only'
  // 优选节点（保存后随订阅下发到客户端）
  preferredDomains: DEFAULT_REGION_POOLS,   // 自定义订阅模式下使用的地址（每行/逗号分隔）
  preferredIPs: [],       // [{ip, port, name}]
  // 优选器（在线测速参数）
  optimizer: {
    source: 'wetest_v4', // 预设数据源键，见 OPTIMIZE_SOURCES
    sourceURL: '',       // 自定义数据源 URL
    port: 443,
    threads: 5,
    count: 20,
    useCidr: true,
    fillCount: 0,        // 节点 IP 不足时用 CF CIDR 随机补足（0 关闭；默认关闭，只下发真实优选节点）
    subMode: '',         // 订阅模式：'' 关闭（使用面板默认）/ custom 自定义订阅（支持汇聚）/ random 随机优选
    subRandomCount: 16,  // random 模式随机优选数量
    subIncludeDefault: false // 自定义订阅模式下是否同时下发内置及默认地区节点（false 仅自定义）
  },
  // 订阅筛选（按节点名称中的地区/运营商标记 + 地址 IP 类型过滤下发）
  filter: {
    region: 'all',        // 'all' | 'HK' | 'TW' | 'US' | 'SG' | 'JP' | 'KR' | 'DE'
    ipType: ['IPv4', 'IPv6'],   // 勾选的 IP 类型集合（全选或空 = 不过滤）
    isp: ['移动', '联通', '电信']  // 勾选的运营商集合（全选 = 不过滤）
  }
};
// 内置官方直连域名：未配置任何优选节点时的回退，保证开箱即用
const BUILTIN_OFFICIAL_DOMAINS = ['cloudflare.com', 'www.cloudflare.com', 'speed.cloudflare.com'];
// 内置 Cloudflare 优选 IP 池：未配置优选节点时开箱即用的可用节点（部署即下发）
const BUILTIN_PREFERRED_IPS = [
  '104.17.127.180#优选IP-001', '104.16.123.96#优选IP-002', '104.16.124.96#优选IP-003', '104.16.125.96#优选IP-004',
  '104.16.126.96#优选IP-005', '104.16.127.96#优选IP-006', '104.16.132.229#优选IP-007', '104.16.248.248#优选IP-008',
  '104.16.249.249#优选IP-009', '162.159.0.1#优选IP-010', '188.114.96.1#优选IP-011', '104.17.24.252#优选IP-012',
  '188.114.99.52#优选IP-013', '162.159.94.229#优选IP-014', '162.159.5.175#优选IP-015', '104.18.119.34#优选IP-016',
  '104.21.213.24#优选IP-017', '104.17.234.5#优选IP-018', '104.16.245.187#优选IP-019', '172.67.64.211#优选IP-020',
  '172.67.64.12#优选IP-021', '104.18.43.224#优选IP-022', '104.18.40.93#优选IP-023', '104.18.37.92#优选IP-024',
  '104.18.47.234#优选IP-025', '104.18.42.54#优选IP-026', '172.64.144.49#优选IP-027', '172.64.146.15#优选IP-028',
  '104.17.185.207#优选IP-029', '104.17.101.139#优选IP-030', '162.159.44.215#优选IP-031', '162.159.44.214#优选IP-032',
  '104.18.217.109#优选IP-033', '172.65.127.225#优选IP-034', '104.18.184.243#优选IP-035', '162.159.137.205#优选IP-036',
  '172.65.64.7#优选IP-037', '104.25.45.44#优选IP-038', '104.19.88.253#优选IP-039', '162.159.136.73#优选IP-040',
  '104.18.185.40#优选IP-041', '104.25.141.168#优选IP-042', '104.25.246.123#优选IP-043', '104.24.54.254#优选IP-044',
  '104.19.123.4#优选IP-045', '188.114.98.144#优选IP-046', '188.114.99.18#优选IP-047', '104.17.127.106#优选IP-048',
  '162.159.4.175#优选IP-049', '104.18.255.187#优选IP-050', '172.65.173.221#优选IP-051', '104.18.176.111#优选IP-052',
  '104.25.122.6#优选IP-053', '188.114.96.116#优选IP-054', '104.25.214.211#优选IP-055', '104.16.223.195#优选IP-056',
  '104.25.101.186#优选IP-057', '172.64.81.44#优选IP-058', '104.25.143.238#优选IP-059', '188.114.99.114#优选IP-060',
  '104.19.169.53#优选IP-061', '104.16.113.211#优选IP-062', '104.27.40.81#优选IP-063', '188.114.98.91#优选IP-064',
  '162.159.236.5#优选IP-065', '104.25.44.144#优选IP-066', '162.159.46.167#优选IP-067', '104.18.84.180#优选IP-068',
  '104.18.196.199#优选IP-069', '104.24.155.234#优选IP-070', '162.159.228.244#优选IP-071', '162.159.235.27#优选IP-072',
  '104.19.214.25#优选IP-073', '104.19.168.107#优选IP-074', '104.24.244.237#优选IP-075', '104.27.66.179#优选IP-076',
  '104.24.2.253#优选IP-077', '104.21.61.179#优选IP-078', '104.21.114.216#优选IP-079', '188.114.98.53#优选IP-080',
  '172.65.145.187#优选IP-081', '188.114.96.255#优选IP-082', '104.25.245.147#优选IP-083', '172.66.161.31#优选IP-084',
  '104.18.133.24#优选IP-085', '188.114.99.155#优选IP-086', '172.64.34.109#优选IP-087', '172.64.145.202#优选IP-088',
  '104.19.78.30#优选IP-089', '104.17.118.180#优选IP-090', '104.17.13.179#优选IP-091', '172.65.35.169#优选IP-092',
  '104.16.0.133#优选IP-093', '104.16.238.98#优选IP-094', '104.18.28.140#优选IP-095', '104.19.115.243#优选IP-096',
  '104.24.58.243#优选IP-097', '104.27.207.36#优选IP-098', '104.21.192.230#优选IP-099', '104.25.20.146#优选IP-100',
  '104.27.113.151#优选IP-101', '104.24.230.144#优选IP-102', '172.65.134.100#优选IP-103', '188.114.96.94#优选IP-104',
  '104.25.197.107#优选IP-105', '104.16.108.18#优选IP-106', '172.64.233.36#优选IP-107', '172.67.163.14#优选IP-108',
  '104.24.230.213#优选IP-109', '104.19.106.1#优选IP-110', '104.27.72.4#优选IP-111', '104.21.57.47#优选IP-112',
  '172.65.162.213#优选IP-113', '172.67.255.83#优选IP-114', '172.67.189.246#优选IP-115', '162.159.230.149#优选IP-116',
  '162.159.197.16#优选IP-117', '172.67.103.87#优选IP-118', '162.159.237.243#优选IP-119', '104.25.193.135#优选IP-120',
  '104.18.141.27#优选IP-121', '172.65.11.191#优选IP-122', '104.24.184.158#优选IP-123', '188.114.97.52#优选IP-124',
  '104.27.4.144#优选IP-125', '104.25.93.154#优选IP-126', '172.66.199.166#优选IP-127', '172.67.64.94#优选IP-128',
  '104.27.94.231#优选IP-129', '104.24.168.96#优选IP-130', '104.18.173.224#优选IP-131', '172.67.173.89#优选IP-132',
  '104.17.107.217#优选IP-133', '188.114.97.91#优选IP-134', '104.17.195.184#优选IP-135', '162.159.14.18#优选IP-136',
  '172.67.229.44#优选IP-137', '104.24.51.58#优选IP-138', '104.19.97.238#优选IP-139', '104.25.161.217#优选IP-140',
  '104.17.146.117#优选IP-141', '172.67.161.136#优选IP-142', '104.17.99.0#优选IP-143', '104.25.100.203#优选IP-144',
  '104.19.23.222#优选IP-145', '188.114.96.141#优选IP-146', '104.19.247.23#优选IP-147', '104.25.24.66#优选IP-148',
  '104.16.123.26#优选IP-149', '104.27.23.242#优选IP-150', '104.25.36.200#优选IP-151', '104.17.195.133#优选IP-152',
  '104.16.68.175#优选IP-153', '188.114.98.19#优选IP-154', '104.16.218.231#优选IP-155', '104.18.28.48#优选IP-156',
  '162.159.143.225#优选IP-157', '162.159.19.201#优选IP-158', '104.25.166.112#优选IP-159', '104.16.201.45#优选IP-160',
  '104.16.91.33#优选IP-161', '172.67.82.86#优选IP-162', '104.16.11.246#优选IP-163', '188.114.97.61#优选IP-164',
  '104.17.240.245#优选IP-165', '172.66.157.150#优选IP-166', '104.17.25.173#优选IP-167', '104.18.26.28#优选IP-168',
  '104.18.123.15#优选IP-169', '104.25.124.155#优选IP-170', '188.114.96.64#优选IP-171', '104.18.18.214#优选IP-172',
  '104.17.46.187#优选IP-173', '104.17.153.58#优选IP-174', '188.114.96.89#优选IP-175', '172.67.174.143#优选IP-176',
  '104.25.251.220#优选IP-177', '104.27.195.79#优选IP-178', '162.159.153.10#优选IP-179', '104.25.129.238#优选IP-180',
  '172.65.3.67#优选IP-181', '172.67.232.109#优选IP-182', '104.18.178.193#优选IP-183', '104.19.78.144#优选IP-184',
  '104.18.63.107#优选IP-185', '104.19.69.150#优选IP-186', '104.25.73.92#优选IP-187', '172.67.195.152#优选IP-188',
  '172.65.184.114#优选IP-189', '172.65.202.216#优选IP-190', '172.65.21.190#优选IP-191', '104.19.32.220#优选IP-192',
  '104.18.211.8#优选IP-193', '104.17.160.131#优选IP-194', '162.159.6.39#优选IP-195', '162.159.43.223#优选IP-196',
  '104.21.224.5#优选IP-197', '104.25.18.216#优选IP-198', '162.159.6.246#优选IP-199', '104.24.46.127#优选IP-200',
  '104.17.87.46#优选IP-201', '188.114.97.80#优选IP-202', '188.114.97.108#优选IP-203', '162.159.241.11#优选IP-204',
  '188.114.97.0#优选IP-205', '188.114.99.14#优选IP-206', '104.19.68.127#优选IP-207', '162.159.10.45#优选IP-208',
  '104.25.181.74#优选IP-209', '104.24.178.200#优选IP-210', '188.114.96.164#优选IP-211', '104.24.41.240#优选IP-212',
  '104.17.97.72#优选IP-213', '104.16.77.112#优选IP-214', '104.19.181.118#优选IP-215', '172.67.165.245#优选IP-216',
  '104.17.169.109#优选IP-217', '172.65.44.103#优选IP-218', '188.114.97.63#优选IP-219', '172.65.47.182#优选IP-220',
  '104.17.245.237#优选IP-221', '162.159.2.86#优选IP-222', '188.114.96.151#优选IP-223', '172.65.139.108#优选IP-224',
  '172.65.118.105#优选IP-225', '104.21.7.133#优选IP-226', '162.159.134.174#优选IP-227', '104.18.194.107#优选IP-228',
  '188.114.97.21#优选IP-229', '162.159.9.18#优选IP-230', '104.18.41.168#优选IP-231', '162.159.192.111#优选IP-232',
  '162.159.240.54#优选IP-233', '104.17.0.4#优选IP-234', '104.25.86.143#优选IP-235', '104.27.97.130#优选IP-236',
  '172.67.127.122#优选IP-237', '104.25.33.126#优选IP-238', '104.25.223.90#优选IP-239', '104.25.123.130#优选IP-240',
  '172.65.167.52#优选IP-241', '172.67.159.243#优选IP-242', '104.25.113.22#优选IP-243', '188.114.98.27#优选IP-244',
  '162.159.198.200#优选IP-245', '104.17.76.49#优选IP-246', '104.21.215.255#优选IP-247', '172.67.131.200#优选IP-248',
  '162.159.135.234#优选IP-249', '172.65.45.102#优选IP-250', '172.66.164.60#优选IP-251', '162.159.26.248#优选IP-252',
  '162.159.90.82#优选IP-253', '172.65.50.167#优选IP-254', '162.159.236.19#优选IP-255', '104.19.143.220#优选IP-256',
  '104.17.151.244#优选IP-257', '104.17.121.245#优选IP-258', '104.18.144.168#优选IP-259', '162.159.228.231#优选IP-260',
  '104.17.100.40#优选IP-261', '104.27.116.114#优选IP-262', '162.159.199.220#优选IP-263', '104.20.17.160#优选IP-264',
  '104.25.62.39#优选IP-265', '104.27.20.220#优选IP-266', '172.65.118.85#优选IP-267', '104.19.83.33#优选IP-268',
  '188.114.96.238#优选IP-269', '162.159.42.67#优选IP-270', '104.27.46.114#优选IP-271', '104.25.126.144#优选IP-272',
  '104.25.173.14#优选IP-273', '104.24.46.107#优选IP-274', '104.25.109.0#优选IP-275', '162.159.137.71#优选IP-276',
  '104.25.238.28#优选IP-277', '104.27.124.239#优选IP-278', '104.24.34.149#优选IP-279', '104.19.246.234#优选IP-280',
  '162.159.10.243#优选IP-281', '104.27.96.232#优选IP-282', '172.65.78.200#优选IP-283', '104.24.25.178#优选IP-284',
  '104.24.84.86#优选IP-285', '104.25.238.237#优选IP-286', '104.16.45.249#优选IP-287', '104.16.234.241#优选IP-288',
  '104.24.18.62#优选IP-289', '172.65.45.248#优选IP-290', '104.25.169.144#优选IP-291', '104.27.27.106#优选IP-292',
  '162.159.43.85#优选IP-293', '172.67.71.106#优选IP-294', '162.159.228.164#优选IP-295', '104.24.250.89#优选IP-296',
  '104.18.185.26#优选IP-297', '104.27.21.175#优选IP-298', '104.24.49.39#优选IP-299', '172.67.85.54#优选IP-300',
];
// 内置默认优选池：未配置任何优选时自动 DoH 解析下发真实优选节点（而非 CF 随机补足）
// 2026-09 实测清洗：29 个候选中剔除 12 个已过期/NXDOMAIN 死链域名与 3 个非 CF 段域名（无法作入口），保留 14 个高可用活跃域名
const DEFAULT_PREFERRED_DOMAINS = [
  'cloudflare.182682.xyz', 'bestcf.top', 'cdn.2020111.xyz', 'cf.0sm.com', 'cf.090227.xyz',
  'cfip.1323123.xyz', 'cloudflare-ip.mofashi.ltd', 'cdn.tzpro.xyz', 'cf.877771.xyz',
  'xn--b6gac.eu.org', 'bestcf.030101.xyz', 'cdns.doon.eu.org', 'fn.130519.xyz', 'saas.sin.fan'
].join('\n');
// 明文 HTTP 端口：Cloudflare 边缘在这些端口上不支持 TLS，节点必须走明文 ws（否则握手失败连不通）
const HTTP_PORTS = new Set([80, 8080, 8880, 2052, 2082, 2086, 2095]);
// 优选器预设数据源：微测网接口 + 优选 IP 来源
const OPTIMIZE_SOURCES = {
  wetest_v4:    { label: '微测网 IPv4', url: 'https://www.wetest.vip/page/cloudflare/address_v4.html' },
  wetest_v6:    { label: '微测网 IPv6', url: 'https://www.wetest.vip/page/cloudflare/address_v6.html' },
  bestcf:       { label: '优选 IP 列表', url: 'https://cf.090227.xyz/ip.164746.xyz' },
  hostmonit:    { label: 'HostMonit 优选', url: 'https://stock.hostmonit.com/CloudFlareYes' },
  wetest_cname: { label: '微测网 优选域名', url: 'https://www.wetest.vip/page/cloudflare/cname.html' }
};
// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------
const TE = new TextEncoder();
const TD = new TextDecoder();
// Base64 编码（出站 HTTP 代理认证用）
function b64FromBytes(bytes) {
  let bin = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(bin);
}
// MD5（纯 JS 实现，RFC 1321；WebCrypto 不支持 MD5）
const MD5_S = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
  5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
  4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
  6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
];
const MD5_K = [
  0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
  0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
  0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
  0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
  0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
  0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
  0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
  0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
];
function rotl32(x, c) { return ((x << c) | (x >>> (32 - c))) >>> 0; }
function md5hex(str) {
  const bytes = TE.encode(String(str));
  const bitLen = bytes.length * 8;
  const paddedLen = (((bytes.length + 8) >> 6) + 1) << 6;
  const data = new Uint8Array(paddedLen);
  data.set(bytes);
  data[bytes.length] = 0x80;
  const dv = new DataView(data.buffer);
  dv.setUint32(paddedLen - 8, bitLen >>> 0, true);
  dv.setUint32(paddedLen - 4, Math.floor(bitLen / 0x100000000), true);
  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  for (let i = 0; i < paddedLen; i += 64) {
    const M = new Uint32Array(16);
    for (let j = 0; j < 16; j++) M[j] = dv.getUint32(i + j * 4, true);
    let a = a0, b = b0, c = c0, d = d0;
    for (let j = 0; j < 64; j++) {
      let f, g;
      if (j < 16) { f = (b & c) | (~b & d); g = j; }
      else if (j < 32) { f = (d & b) | (~d & c); g = (5 * j + 1) % 16; }
      else if (j < 48) { f = b ^ c ^ d; g = (3 * j + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7 * j) % 16; }
      const sum = (a + f + MD5_K[j] + M[g]) >>> 0;
      const nb = (b + rotl32(sum, MD5_S[j])) >>> 0;
      a = d; d = c; c = b; b = nb;
    }
    a0 = (a0 + a) >>> 0; b0 = (b0 + b) >>> 0; c0 = (c0 + c) >>> 0; d0 = (d0 + d) >>> 0;
  }
  let hex = '';
  for (const v of [a0, b0, c0, d0]) {
    hex += (v & 255).toString(16).padStart(2, '0');
    hex += ((v >>> 8) & 255).toString(16).padStart(2, '0');
    hex += ((v >>> 16) & 255).toString(16).padStart(2, '0');
    hex += ((v >>> 24) & 255).toString(16).padStart(2, '0');
  }
  return hex;
}
function uuidv4() {
  if (crypto.randomUUID) return crypto.randomUUID();
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
  return [...b].map((x, i) => (i === 4 || i === 6 || i === 8 || i === 10 ? '-' : '') + x.toString(16).padStart(2, '0')).join('');
}
function isUUID(str) {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(str || '');
}
function parseHostPort(addr, defaultPort = 443) {
  addr = String(addr || '').trim();
  if (!addr) return { host: '', port: defaultPort };
  if (addr.startsWith('[')) {
    const m = addr.match(/^\[([^\]]+)\](?::(\d+))?$/);
    return { host: m ? m[1] : addr.replace(/^\[|\]$/g, ''), port: m && m[2] ? parseInt(m[2]) : defaultPort };
  }
  const idx = addr.lastIndexOf(':');
  if (idx > 0 && /^\d+$/.test(addr.slice(idx + 1))) {
    return { host: addr.slice(0, idx), port: parseInt(addr.slice(idx + 1)) };
  }
  return { host: addr, port: defaultPort };
}
// 严格校验 IPv4 / IPv6 地址
function isValidIp(str) {
  str = String(str || '').trim();
  if (!str) return false;
  const m4 = str.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (m4) return m4.slice(1).every(n => Number(n) <= 255);
  if (!/^[0-9a-fA-F:]+$/.test(str)) return false;
  if ((str.match(/::/g) || []).length > 1) return false;
  const hasDbl = str.includes('::');
  const groups = str.replace(/::/g, ':').split(':').filter(Boolean);
  if (!hasDbl && groups.length !== 8) return false;
  if (hasDbl && (groups.length < 1 || groups.length > 7)) return false;
  return groups.every(g => /^[0-9a-fA-F]{1,4}$/.test(g));
}
function formatIPv6(bytes) {
  const parts = [];
  for (let i = 0; i < 16; i += 2) parts.push(((bytes[i] << 8) | bytes[i + 1]).toString(16));
  // 简单压缩：连续 0 组用 ::，仅压缩最长段
  let bestStart = -1, bestLen = 0, curStart = -1, curLen = 0;
  for (let i = 0; i < 8; i++) {
    if (parts[i] === '0') {
      if (curStart < 0) { curStart = i; curLen = 1; } else curLen++;
      if (curLen > bestLen) { bestLen = curLen; bestStart = curStart; }
    } else { curStart = -1; curLen = 0; }
  }
  if (bestLen >= 2) {
    const head = parts.slice(0, bestStart).join(':');
    const tail = parts.slice(bestStart + bestLen).join(':');
    return (head ? head + '::' : '::') + tail;
  }
  return parts.join(':');
}
function cidrToRange(cidr) {
  const [ip, bits] = cidr.split('/');
  const b = ip.split('.').map(Number);
  const base = ((b[0] << 24) | (b[1] << 16) | (b[2] << 8) | b[3]) >>> 0;
  const mask = bits >= 32 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
  const start = (base & mask) >>> 0;   // >>> 0 保证无符号：位运算结果可能为负（如 162.158.0.0），比较/加减前必须归一
  const end = (base | (~mask >>> 0)) >>> 0;
  return [start, end];
}
// CIDR 掩码表预编译：初始化时一次性把 CF 地址段编译为无符号整数区间数组，IP 校验变纯整数比较（性能提升数十倍，应对免费版 10ms CPU 硬限）
const CLOUDFLARE_RANGES = CLOUDFLARE_CIDRS.map(cidrToRange);
const REACHABLE_RANGES = REACHABLE_CIDRS.map(cidrToRange);
const _rangeCache = new Map();
function cidrRangeCached(cidr) {
  let r = _rangeCache.get(cidr);
  if (!r) { r = cidrToRange(cidr); _rangeCache.set(cidr, r); }
  return r;
}
function randomIPFromCidr(cidr) {
  const [start, end] = cidrRangeCached(cidr);
  const r = start + Math.floor(Math.random() * ((end - start) >>> 0));
  return `${(r >>> 24) & 255}.${(r >>> 16) & 255}.${(r >>> 8) & 255}.${r & 255}`;
}
function randomIPsFromCidrs(cidrs, count) {
  const seen = new Set();
  const out = [];
  let guard = 0;
  while (out.length < count && guard++ < count * 20) {
    const ip = randomIPFromCidr(cidrs[Math.floor(Math.random() * cidrs.length)]);
    if (!seen.has(ip)) { seen.add(ip); out.push(ip); }
  }
  return out;
}
// 解析 "1.2.3.4:443#名称, 5.6.7.8" 这类优选列表（仅接受合法 IP 行，过滤 HTML 等杂质）
function parseIPList(text) {
  const items = [];
  const seen = new Set();   // 按 IP 去重（忽略端口）：同一 IP 无论端口/名称只保留第一条
  String(text || '').split(/[\n,;]+/).map(s => s.trim()).filter(Boolean).forEach(s => {
    let name = '';
    if (s.includes('#')) {
      const [a, n] = s.split('#');
      s = a; name = n;
    }
    const { host, port } = parseHostPort(s, 443);
    if (host && isValidIp(host) && !seen.has(host)) { seen.add(host); items.push({ ip: host, port, name }); }
  });
  return items;
}
// 出站代理地址解析：socks5:// / http(s):// 或 host:port，可带 user:pass@
function parseProxyAddress(addr) {
  if (!addr) return null;
  let type = 'socks5', rest = String(addr).trim();
  const m = rest.match(/^(socks5|http|https):\/\/(.+)$/i);
  if (m) { type = m[1].toLowerCase(); rest = m[2]; }
  let user = '', pass = '';
  if (rest.includes('@')) {
    const [u, h] = rest.split('@');
    const idx = u.indexOf(':');
    if (idx >= 0) { user = u.slice(0, idx); pass = u.slice(idx + 1); }
    else user = u;
    rest = h;
  }
  const defaultPort = type === 'http' ? 80 : type === 'https' ? 443 : 1080;
  const { host, port } = parseHostPort(rest, defaultPort);
  return { type, host, port, user, pass };
}
function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
// ---------------------------------------------------------------------------
// 配置加载：默认值 < 环境变量 < KV 图形化配置
// ---------------------------------------------------------------------------
async function loadConfig(env) {
  const cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  // 环境变量
  if (env.U) cfg.uuid = String(env.U).toLowerCase();
  if (env.D || env.PATH) cfg.path = String(env.D || env.PATH);
  if (env.ADMIN || env.admin) cfg.admin = String(env.ADMIN || env.admin);
  if (env.HOST) cfg.host = String(env.HOST).replace(/^https?:\/\//, '').split('/')[0];
  if (env.PROXYIP) cfg.proxyIP = String(env.PROXYIP);
  if (env.S || env.OUTBOUND) cfg.outboundProxy = String(env.S || env.OUTBOUND);
  if (env.ECH === 'true' || env.ECH === '1') cfg.ech = true;
  if (env.TROJAN === 'true' || env.TROJAN === '1') cfg.enableTrojan = true;
  if (env.TROJAN_PASSWORD) cfg.trojanPassword = String(env.TROJAN_PASSWORD);
  if (env.ALPN) cfg.alpn = String(env.ALPN);
  if (env.YX) cfg.preferredIPs = parseIPList(env.YX);
  if (env.YXURL) cfg.optimizer.sourceURL = String(env.YXURL);
  // KV 图形化配置（更高优先级）
  if (env.K && typeof env.K.get === 'function') {
    try {
      const kvJson = await env.K.get('config');
      if (kvJson) {
        const kvCfg = JSON.parse(kvJson);
        Object.assign(cfg, kvCfg);
        if (kvCfg.optimizer) cfg.optimizer = Object.assign(JSON.parse(JSON.stringify(DEFAULT_CONFIG.optimizer)), kvCfg.optimizer);
        if (kvCfg.preferredIPs && Array.isArray(kvCfg.preferredIPs)) cfg.preferredIPs = kvCfg.preferredIPs;
        if (kvCfg.admin) cfg.admin = String(kvCfg.admin);
        if (kvCfg.uuid) cfg.uuid = String(kvCfg.uuid).toLowerCase();
      }
    } catch (e) { /* KV 读取失败忽略 */ }
  }
  // 清理已废弃字段（fragment 分片功能已移除，避免 KV 残留字段混入配置）
  delete cfg.fragment;
  delete cfg.fragmentParam;
  // 兜底
  cfg.uuid = String(cfg.uuid || '').toLowerCase();
  if (!isUUID(cfg.uuid)) cfg.uuid = uuidv4();
  if (!cfg.path) cfg.path = cfg.uuid;
  if (!Array.isArray(cfg.preferredIPs)) cfg.preferredIPs = parseIPList(cfg.preferredIPs);
  return cfg;
}
async function saveConfig(env, cfg) {
  if (!env.K || typeof env.K.put !== 'function') return false;
  const clone = JSON.parse(JSON.stringify(cfg));
  if (clone.admin) clone.admin = String(clone.admin);
  await env.K.put('config', JSON.stringify(clone));
  return true;
}
// ---------------------------------------------------------------------------
// VLESS / Trojan 请求头解析
// ---------------------------------------------------------------------------
function readAddress(data, view, offset, atyp) {
  if (atyp === 1) { // IPv4
    return { addr: `${view.getUint8(offset)}.${view.getUint8(offset + 1)}.${view.getUint8(offset + 2)}.${view.getUint8(offset + 3)}`, len: 4 };
  }
  if (atyp === 2) { // 域名
    const len = view.getUint8(offset);
    const bytes = data.subarray(offset + 1, offset + 1 + len);
    return { addr: TD.decode(bytes), len: 1 + len };
  }
  if (atyp === 3) { // IPv6
    const bytes = data.subarray(offset, offset + 16);
    return { addr: formatIPv6(bytes), len: 16 };
  }
  throw new Error('无法识别的地址类型');
}
// VLESS 请求头：Version(1) | UUID(16) | AddonsLen(1) | Addons | Cmd(1) | Port(2) | Atyp(1) | Addr | [TCP]1字节User | [UDP]数据包
function parseVlessHeader(data) {
  if (!data || data.byteLength < 1) throw new Error('VLESS 头部过短');
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  let offset = 0;
  if (view.getUint8(0) !== 0) throw new Error('不支持的 VLESS 版本');
  offset += 1 + 16;                       // version + uuid
  if (offset >= data.byteLength) throw new Error('VLESS 头部过短');
  const addonsLen = view.getUint8(offset); offset += 1;
  offset += addonsLen;
  if (offset + 3 > data.byteLength) throw new Error('VLESS 头部过短');
  const command = view.getUint8(offset); offset += 1;
  const port = view.getUint16(offset); offset += 2;
  const atyp = view.getUint8(offset); offset += 1;
  const { addr, len } = readAddress(data, view, offset, atyp);
  offset += len;
  return {
    command, port, addr,
    headerLength: offset,
    earlyData: data.subarray(offset)
  };
}
// Trojan 请求头：Password+CRLF(56) | Cmd(1) | Port(2) | Atyp(1) | Addr | CRLF(2)
function parseTrojanHeader(data) {
  if (!data || data.byteLength < 58 + 8) throw new Error('Trojan 头部过短');
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  let offset = 58;                             // 56 字节 SHA224 hex + CRLF
  const command = view.getUint8(offset); offset += 1;   // CMD
  const atyp = view.getUint8(offset); offset += 1;      // ATYP（Trojan 用 SOCKS5 编码：1=IPv4, 3=域名, 4=IPv6）
  let addr, len;
  if (atyp === 1) {
    addr = `${view.getUint8(offset)}.${view.getUint8(offset + 1)}.${view.getUint8(offset + 2)}.${view.getUint8(offset + 3)}`;
    len = 4;
  } else if (atyp === 3) {
    const l = view.getUint8(offset);
    addr = TD.decode(data.subarray(offset + 1, offset + 1 + l));
    len = 1 + l;
  } else if (atyp === 4) {
    addr = formatIPv6(data.subarray(offset, offset + 16));
    len = 16;
  } else {
    throw new Error('无法识别的地址类型');
  }
  offset += len;
  const port = view.getUint16(offset); offset += 2;     // DST.PORT
  offset += 2;                                    // 尾部 CRLF
  return { command, port, addr, password: TD.decode(data.subarray(0, 56)), headerLength: offset };
}
// Trojan 协议密码使用 SHA-224（56 字节 hex）——Cloudflare WebCrypto 不支持 SHA-224，手写实现（SHA-256 结构 + SHA-224 初始值）
const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];
function sha224hex(str) {
  const bytes = TE.encode(String(str));
  const bitLen = bytes.length * 8;
  const paddedLen = (((bytes.length + 8) >> 6) + 1) << 6;
  const data = new Uint8Array(paddedLen);
  data.set(bytes);
  data[bytes.length] = 0x80;
  const dv = new DataView(data.buffer);
  dv.setUint32(paddedLen - 8, Math.floor(bitLen / 0x100000000), false);   // SHA-2 大端 64 位长度
  dv.setUint32(paddedLen - 4, bitLen >>> 0, false);
  let h0 = 0xc1059ed8, h1 = 0x367cd507, h2 = 0x3070dd17, h3 = 0xf70e5939,
      h4 = 0xffc00b31, h5 = 0x68581511, h6 = 0x64f98fa7, h7 = 0xbefa4fa4;
  const rotr = (x, n) => (x >>> n) | (x << (32 - n));
  for (let i = 0; i < paddedLen; i += 64) {
    const w = new Uint32Array(64);
    for (let j = 0; j < 16; j++) w[j] = dv.getUint32(i + j * 4, false);  // 大端读消息字
    for (let j = 16; j < 64; j++) {
      const s0 = rotr(w[j - 15], 7) ^ rotr(w[j - 15], 18) ^ (w[j - 15] >>> 3);
      const s1 = rotr(w[j - 2], 17) ^ rotr(w[j - 2], 19) ^ (w[j - 2] >>> 10);
      w[j] = (w[j - 16] + s0 + w[j - 7] + s1) >>> 0;
    }
    let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
    for (let j = 0; j < 64; j++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + SHA256_K[j] + w[j]) >>> 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
    h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
  }
  let hex = '';
  for (const v of [h0, h1, h2, h3, h4, h5, h6]) {
    hex += (v >>> 24 & 255).toString(16).padStart(2, '0');
    hex += (v >>> 16 & 255).toString(16).padStart(2, '0');
    hex += (v >>> 8 & 255).toString(16).padStart(2, '0');
    hex += (v & 255).toString(16).padStart(2, '0');
  }
  return hex;
}
// Trojan 密码 SHA-224 摘要缓存：同一密码只计算一次，避免 WebSocket 每帧连接重复跑完整 SHA-224
let _trojanPassC = '', _trojanHashC = '';
function trojanPasswordHash(pass) {
  if (pass !== _trojanPassC) { _trojanPassC = pass; _trojanHashC = sha224hex(pass); }
  return _trojanHashC;
}
// Trojan 判定：主判定 SHA224(密码) 的 56 字节 hex 精确匹配（与节点生成同源，密码留空用 UUID）；
// 兜底判定对齐 edgetunnel/_worker 方案：前 56 字节全为 hex 字符且 56/57 为 CRLF 即按 Trojan 处理，
// 兼容客户端密码变体/大小写差异（该 Worker 仅依赖 path token 鉴权）；VLESS 头 version=0x00 + 16 字节 UUID
// 必含非 hex 字节且无尾部 CRLF，不会误判，VLESS/XHTTP 行为不受影响
function detectTrojan(pending, cfg) {
  if (!cfg.enableTrojan || !pending || pending.byteLength < 58) return false;
  const head = pending.subarray(0, 56);
  if (TD.decode(head).toLowerCase() === trojanPasswordHash(cfg.trojanPassword || cfg.uuid)) return true;
  if (pending[56] === 0x0d && pending[57] === 0x0a) {
    for (let i = 0; i < 56; i++) {
      const c = head[i];
      if (!((c >= 48 && c <= 57) || (c >= 97 && c <= 102) || (c >= 65 && c <= 70))) return false;
    }
    return true;
  }
  return false;
}
// ---------------------------------------------------------------------------
// 出站连接：直连 / SOCKS5 / HTTP CONNECT / 反代 IP 中继
// ---------------------------------------------------------------------------
async function connectDirect(target, timeoutMs) {
  const socket = connect({ hostname: target.hostname, port: target.port });
  // 连接超时保护：目标 SYN 被静默丢弃（CF 回环保护 / 不可达）时不再无限挂起，及时进入反代兜底
  let timer = null;
  const timerP = new Promise((_, reject) => {
    timer = setTimeout(() => {
      try { socket.close(); } catch (e) { /* 忽略 */ }
      reject(new Error('连接超时 ' + target.hostname + ':' + target.port));
    }, timeoutMs > 0 ? timeoutMs : 8000);
  });
  try {
    await Promise.race([socket.opened, timerP]);
    clearTimeout(timer);
    return socket;
  } catch (e) {
    clearTimeout(timer);
    try { socket.close(); } catch (e2) { /* 忽略 */ }
    throw e;
  }
}
// 通过 SOCKS5 代理建立到目标的连接
async function connectViaSocks5(proxy, target) {
  const socket = connect({hostname: proxy.host, port: proxy.port});
  await socket.opened;
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  // 带缓存的读取器：多余字节保留，避免丢失后续 VLESS 数据流
  let pending = new Uint8Array(0);
  const readN = async (n) => {
    while (pending.length < n) {
      const { done, value } = await reader.read();
      if (done) throw new Error('连接被关闭');
      pending = concatBytes(pending, value);
    }
    const out = pending.slice(0, n);
    pending = pending.subarray(n);
    return out;
  };
  // 握手：声明支持的方法（有凭据则同时声明无认证+用户名密码，服务器选择其一）
  const methods = proxy.user ? [5, 2, 0, 2] : [5, 1, 0];
  await writer.write(new Uint8Array(methods));
  const h1 = await readN(2);
  if (h1[0] !== 5 || h1[1] === 0xff) throw new Error('SOCKS5 握手失败');
  if (h1[1] === 2) { // 服务器选择用户名密码认证（RFC 1929）
    if (!proxy.user) throw new Error('SOCKS5 服务器要求认证但未提供凭据');
    const u = TE.encode(proxy.user), p = TE.encode(proxy.pass);
    const auth = new Uint8Array([1, u.length, ...u, p.length, ...p]);
    await writer.write(auth);
    const h2 = await readN(2);
    if (h2[1] !== 0) throw new Error('SOCKS5 认证失败');
  } else if (h1[1] !== 0) {
    throw new Error('SOCKS5 不支持的认证方法 ' + h1[1]);
  }
  // CONNECT 请求
  const addrBytes = TE.encode(target.hostname);
  let connReq;
  if (/^\d+\.\d+\.\d+\.\d+$/.test(target.hostname)) {
    connReq = new Uint8Array([5, 1, 0, 1, ...target.hostname.split('.').map(Number), (target.port >> 8) & 255, target.port & 255]);
  } else {
    // 域名模式
    connReq = new Uint8Array([5, 1, 0, 3, addrBytes.length, ...addrBytes, (target.port >> 8) & 255, target.port & 255]);
  }
  await writer.write(connReq);
  const rep = await readN(4);
  if (rep[1] !== 0) throw new Error('SOCKS5 连接失败 码' + rep[1]);
  // 跳过 BND.ADDR + BND.PORT（必须完整消费否则残留字节污染后续 VLESS 数据流）
  if (rep[3] === 1) await readN(6);
  else if (rep[3] === 3) { const l = (await readN(1))[0]; await readN(l + 2); }
  else if (rep[3] === 4) await readN(18);
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}
// 通过 HTTP/HTTPS CONNECT 代理建立连接
async function connectViaHttpProxy(proxy, target) {
  const socket = connect({ hostname: proxy.host, port: proxy.port });
  await socket.opened;
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  let authHeader = '';
  if (proxy.user) authHeader = 'Proxy-Authorization: Basic ' + b64FromBytes(TE.encode(`${proxy.user}:${proxy.pass}`)) + '\r\n';
  const connectReq = `CONNECT ${target.hostname}:${target.port} HTTP/1.1\r\nHost: ${target.hostname}:${target.port}\r\n${authHeader}\r\n`;
  await writer.write(TE.encode(connectReq));
  // 读取响应头直到空行
  const head = await readUntilCRLFCRLF(reader);
  if (!/^HTTP\/\d\.\d\s+2\d\d/i.test(head)) throw new Error('HTTP 代理 CONNECT 失败: ' + head.split('\r\n')[0]);
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}
async function readN(reader, n) {
  const out = new Uint8Array(n);
  let got = 0;
  while (got < n) {
    const { done, value } = await reader.read();
    if (done) throw new Error('连接被关闭');
    const need = n - got;
    out.set(value.subarray(0, Math.min(need, value.length)), got);
    got += Math.min(need, value.length);
  }
  return out;
}
async function readUntilCRLFCRLF(reader) {
  let buf = new Uint8Array(0);
  while (buf.length < 65536) {
    const { done, value } = await reader.read();
    if (done) break;
    buf = concatBytes(buf, value);
    const idx = findBytes(buf, [13, 10, 13, 10]);
    if (idx >= 0) return TD.decode(buf.subarray(0, idx));
  }
  return TD.decode(buf);
}
function concatBytes(a, b) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a, 0); out.set(b, a.length);
  return out;
}
function findBytes(hay, needle) {
  outer:
  for (let i = 0; i <= hay.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) continue outer;
    return i;
  }
  return -1;
}
// ---------------------------------------------------------------------------
// 内置地区反代域名池：proxyip.<地区>.cmliussss.net 社区反代服务（解析为非 Cloudflare IP）
// 出站兜底：直连与自定义反代均失败后使用，透明代理模式发送去掉 VLESS 头部的原始
// TLS 数据，由对端按 SNI 路由到目标
// ---------------------------------------------------------------------------
const RELAY_DOMAINS = {
  HK: 'proxyip.hk.cmliussss.net',
  US: 'proxyip.us.cmliussss.net',
  SG: 'proxyip.sg.cmliussss.net',
  JP: 'proxyip.jp.cmliussss.net',
  KR: 'proxyip.kr.cmliussss.net',
  DE: 'proxyip.de.cmliussss.net',
  SE: 'proxyip.se.cmliussss.net',
  NL: 'proxyip.nl.cmliussss.net',
  FI: 'proxyip.fi.cmliussss.net',
  GB: 'proxyip.gb.cmliussss.net',
  Oracle: 'proxyip.oracle.cmliussss.net',
  DigitalOcean: 'proxyip.digitalocean.cmliussss.net',
  Vultr: 'proxyip.vultr.cmliussss.net',
  Multacom: 'proxyip.multacom.cmliussss.net'
};
// 根据 Worker 所在机房 colo（IATA 代码）选择最近的中继地区
function selectRelayRegion(colo) {
  const c = (colo || '').toUpperCase();
  // 亚洲
  if (c.startsWith('HKG') || c.startsWith('HK')) return 'HK';
  if (c.startsWith('SIN') || c.startsWith('SG')) return 'SG';
  if (c.startsWith('NRT') || c.startsWith('KIX') || c.startsWith('TYO') || c.startsWith('OSA') || c.startsWith('JP')) return 'JP';
  if (c.startsWith('ICN') || c.startsWith('SEL') || c.startsWith('KR')) return 'KR';
  if (/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/.test(c)) return 'HK';
  // 欧洲
  if (c.startsWith('FRA') || c.startsWith('BER') || c.startsWith('MUC') || c.startsWith('DUS') || c.startsWith('HAM') || c.startsWith('STR') || c.startsWith('DE')) return 'DE';
  if (c.startsWith('ARN') || c.startsWith('SE')) return 'SE';
  if (c.startsWith('AMS') || c.startsWith('NL')) return 'NL';
  if (c.startsWith('HEL') || c.startsWith('FI')) return 'FI';
  if (c.startsWith('LHR') || c.startsWith('MAN') || c.startsWith('GB') || c.startsWith('UK')) return 'GB';
  if (/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/.test(c)) return 'DE';
  // 北美及其他默认 US
  return 'US';
}
// PROXYIP 反代 IP 解析缓存（TTL 5 分钟：域名 → DoH TXT/A 解析结果）
const PROXYIP_CACHE = new Map();
// 解析反代域名为 IP 候选列表：
//   - IP 字面量直接返回
//   - 域名先查 TXT：TXT 含逗号/换行分隔的 IP 列表则解析为多候选；
//     TXT 为 @edtunnel 标记（反代服务约定）或无有效 TXT 时查 A 记录
//   - 结果缓存 5 分钟，避免每次连接都触发 DoH
async function resolveProxyIPs(host, port) {
  port = port || 443;
  if (isValidIp(host)) return [{ hostname: host, port }];
  const cacheKey = host + ':' + port;
  const now = Date.now();
  const hit = PROXYIP_CACHE.get(cacheKey);
  if (hit && now - hit.t < 5 * 60 * 1000) return hit.ips;
  const dohs = ['https://cloudflare-dns.com/dns-query', 'https://dns.alidns.com/resolve', 'https://doh.pub/dns-query'];
  const dohQuery = async (type, filterType) => {
    const jobs = dohs.map(async (url) => {
      const res = await fetchTimeout(url + '?name=' + encodeURIComponent(host) + '&type=' + type, { headers: { accept: 'application/dns-json' } }, 4000);
      if (!res || !res.ok) throw new Error('doh fail');
      const j = await res.json();
      return (j.Answer || []).filter(a => a.type === filterType).map(a => a.data);
    });
    try { return await Promise.any(jobs); } catch (e) { return []; }
  };
  // 并发查询 TXT 与 A 记录（TXT 优先，无有效 TXT 用 A）
  const [txtRecords, aRecords] = await Promise.all([dohQuery('TXT', 16), dohQuery('A', 1)]);
  let targets = [];
  // 1) TXT 记录：反代服务约定——TXT 存逗号/换行分隔的 IP 列表（支持 ip:port），或 @edtunnel 标记
  for (const raw of txtRecords) {
    // DNS TXT 转义：\010 是八进制换行符，需还原为分隔符；去掉首尾引号
    const val = String(raw).replace(/^"|"$/g, '').replace(/\\010/g, ',').replace(/\n/g, ',').trim();
    if (!val) continue;
    if (val === '@edtunnel') {
      // @edtunnel 是反代服务标记：实际反代 IP 在 A 记录中
      targets = aRecords.filter(ip => /^\d+\.\d+\.\d+\.\d+$/.test(ip)).map(ip => ({ hostname: ip, port }));
      break;
    }
    // TXT 值为逗号/分号/空格分隔的条目，每条可为 IP 或 IP:port
    const entries = val.split(/[,;\s]+/).map(s => s.trim()).filter(Boolean);
    const parsed = [];
    for (const entry of entries) {
      const { host: h, port: p } = parseHostPort(entry, port);
      if (isValidIp(h)) parsed.push({ hostname: h, port: p });
    }
    if (parsed.length) { targets = parsed; break; }
  }
  // 2) 无有效 TXT 时用 A 记录
  if (!targets.length) {
    targets = aRecords.filter(ip => /^\d+\.\d+\.\d+\.\d+$/.test(ip)).map(ip => ({ hostname: ip, port }));
  }
  // 3) 无 A 记录时回退 AAAA（IPv6 反代）
  if (!targets.length) {
    const aaaaRecs = await dohQuery('AAAA', 28);
    targets = aaaaRecs.filter(ip => isValidIp(ip)).map(ip => ({ hostname: ip, port }));
  }
  // 去重（按 hostname:port）
  const seen = new Set();
  const result = targets.filter(t => { const k = t.hostname + ':' + t.port; if (seen.has(k)) return false; seen.add(k); return true; });
  if (result.length) PROXYIP_CACHE.set(cacheKey, { t: now, ips: result });
  return result;
}
// 打开到目标的出站连接（含内置地区反代 / 自定义反代透明代理 / 出站代理 / 直连）
// 所有模式均为透明代理：发送去掉 VLESS 头部的原始 TLS 数据，对端按 SNI 路由到目标
async function openOutbound(parsed, cfg, colo, isVless) {
  const proxy = parseProxyAddress(cfg.outboundProxy);
  const mode = cfg.outboundMode || '';
  const viaProxy = proxy ? (proxy.type === 'http' || proxy.type === 'https'
    ? (t) => connectViaHttpProxy(proxy, t)
    : (t) => connectViaSocks5(proxy, t)) : null;
  const buildAttempts = (target, timeoutMs) => {
    const attempts = [];
    if (mode === 'only') {
      attempts.push(viaProxy ? () => viaProxy(target) : () => connectDirect(target, timeoutMs));
    } else if (mode === 'no') {
      attempts.push(() => connectDirect(target, timeoutMs));
      if (viaProxy) attempts.push(() => viaProxy(target));
    } else {
      if (viaProxy) attempts.push(() => viaProxy(target));
      attempts.push(() => connectDirect(target, timeoutMs));
    }
    return attempts;
  };
  let lastErr;
  const tryConnect = async (target, timeoutMs) => {
    for (const fn of buildAttempts(target, timeoutMs)) {
      try { return await fn(); } catch (e) { lastErr = e; }
    }
    return null;
  };
  // 1) 优先直连目标（非 CF 网站直连可用；CF 网站回环保护会失败）
  //    6s 连接超时：目标 SYN 被丢弃 / 直连被回环保护拦截时不再无限挂起，及时进入反代兜底
  const directResult = await tryConnect({ hostname: parsed.addr, port: parsed.port }, 6000);
  if (directResult) return directResult;
  // 2) 用户自定义 proxyIP 透明代理（优先于内置反代）
  const relay = cfg.proxyIP ? parseHostPort(cfg.proxyIP, 443) : null;
  if (relay && relay.host) {
    let customTargets = await resolveProxyIPs(relay.host, relay.port);
    if (!customTargets.length) customTargets = [{ hostname: relay.host, port: relay.port }];
    for (const target of customTargets) {
      const r = await tryConnect(target, 6000);
      if (r) return r;
    }
  }
  // 3) 兜底内置地区反代（透明代理：发送去掉 VLESS/Trojan 头部的原始 TLS 数据，对端按 SNI 路由到目标）
  //    多地区轮询：本地区域优先，失败后依次尝试其余区域；单个反代失效不再导致
  //    （尤其 CF 托管站点直连被回环保护拦截时）流量为 0；VLESS / Trojan / XHTTP 均启用
  //    （Trojan 无反代兜底时 Clash Verge 测速 gstatic.com 被回环保护拦截 → 节点显示不可用）
  {
    const primary = selectRelayRegion(colo);
    const regions = [primary, ...Object.keys(RELAY_DOMAINS).filter(r => r !== primary)].slice(0, 3);
    for (const region of regions) {
      const relayDomain = RELAY_DOMAINS[region];
      if (!relayDomain) continue;
      let relayTargets = [];
      try { relayTargets = await resolveProxyIPs(relayDomain, 443); } catch (e) { /* 忽略 */ }
      if (!relayTargets.length) continue;
      for (const target of relayTargets) {
        const r = await tryConnect(target, 5000);
        if (r) return r;
      }
    }
  }
  throw lastErr || new Error('所有出站方式均失败');
}
// ---------- UDP → DoH 转换（V2rayNG 远端 DNS 支持）----------
// CF Workers 平台无 UDP socket，VLESS/Trojan 的 UDP 数据报无法原生转发。
// V2rayNG 关闭「本地 DNS」时使用远端 DNS（UDP 53 走代理），此前被按 TCP 连到 1.1.1.1:53 必然失败 → 必须开本地 DNS。
// 此处将 DNS(53) 查询转换为 DoH(HTTPS) 请求并构造标准 DNS 响应返回；其余 UDP 快速失败（客户端自动回退），TCP 路径完全不受影响。
const DOH_ENDPOINTS = [
  'https://doh.pub/dns-query',
  'https://dns.alidns.com/resolve',
  'https://1.1.1.1/dns-query',
  'https://8.8.8.8/dns-query',
  'https://dns.google/dns-query',
  'https://cloudflare-dns.com/dns-query'
];
// IPv6 字符串 → 16 字节（支持 :: 压缩）
function ipv6ToBytes(ip) {
  const sp = String(ip).split('::');
  const h = sp[0] ? sp[0].split(':').filter(Boolean) : [];
  const t = sp[1] ? sp[1].split(':').filter(Boolean) : [];
  const parts = [...h, ...Array(Math.max(0, 8 - h.length - t.length)).fill('0'), ...t];
  const out = new Uint8Array(16);
  parts.forEach((p, i) => { const n = parseInt(p, 16) || 0; out[i * 2] = (n >> 8) & 255; out[i * 2 + 1] = n & 255; });
  return out;
}
// 解析标准 DNS 查询（12B 头 + QNAME + QTYPE + QCLASS），经 DoH 查询后构造标准 DNS 响应（仅 A/AAAA 单查询）
async function dnsToDoH(query) {
  if (!query || query.byteLength < 17) return null;
  const view = new DataView(query.buffer, query.byteOffset, query.byteLength);
  const id = view.getUint16(0);
  if (view.getUint16(2) & 0x8000) return null;           // 非查询报文直接忽略
  if (view.getUint16(4) !== 1) return null;               // 仅支持单问题查询
  let off = 12, labels = [];
  while (off < query.byteLength) {
    const len = view.getUint8(off);
    if (len === 0) { off++; break; }
    if ((len & 0xC0) === 0xC0) { off += 2; break; }       // 压缩指针（罕见，直接略过）
    if (off + 1 + len > query.byteLength) return null;
    labels.push(TD.decode(query.subarray(off + 1, off + 1 + len)));
    off += 1 + len;
  }
  if (off + 4 > query.byteLength || labels.length === 0) return null;
  const qtype = view.getUint16(off);                      // 1=A 28=AAAA
  const qclass = view.getUint16(off + 2);
  const qEnd = off + 4;
  if (qtype !== 1 && qtype !== 28) return null;           // 仅 A/AAAA
  const name = labels.join('.');
  const question = query.subarray(12, qEnd);              // 响应中原样回显
  let answer = null;
  for (const ep of DOH_ENDPOINTS) {
    try {
      const r = await fetchTimeout(ep + '?name=' + encodeURIComponent(name) + '&type=' + qtype,
        { headers: { accept: 'application/dns-json' } }, 5000);
      if (!r || !r.ok) continue;
      const j = await r.json();
      if (!j || j.Status !== 0) continue;
      const an = (j.Answer || []).filter(a => a.type === qtype && (a.type === 1 ? isValidIp(String(a.data)) : /^[0-9a-fA-F:]+$/.test(String(a.data))));
      if (an.length) { answer = an; break; }
    } catch (e) { /* 尝试下一个 DoH 端点 */ }
  }
  if (!answer) return null;
  const header = new Uint8Array(12);
  const dv = new DataView(header.buffer);
  dv.setUint16(0, id); dv.setUint16(2, 0x8180); dv.setUint16(4, 1); dv.setUint16(6, answer.length);
  const chunks = [header, question];
  for (const a of answer) {
    const data = String(a.data);
    const rdata = a.type === 1 ? Uint8Array.from(data.split('.').map(Number)) : ipv6ToBytes(data);
    if (rdata.length !== (a.type === 1 ? 4 : 16)) continue;
    const h = new Uint8Array(10);
    const dh = new DataView(h.buffer);
    dh.setUint16(0, 0xC00C); dh.setUint16(2, a.type); dh.setUint16(4, qclass === 0 ? 1 : qclass);
    dh.setUint32(6, Number(a.TTL) || 300);
    chunks.push(h, new Uint8Array([(rdata.length >> 8) & 255, rdata.length & 255]), rdata);
  }
  let total = 0; chunks.forEach(c => total += c.byteLength);
  const out = new Uint8Array(total);
  let o = 0;
  for (const c of chunks) { out.set(c, o); o += c.byteLength; }
  return out;
}

// 双向管道：socket 可读 → send 回调；结束调用 onDone
async function pumpToReader(reader, send, onDone) {
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      send(value);
    }
  } catch (e) { /* 忽略 */ }
  try { if (onDone) onDone(); } catch (e) { /* 忽略 */ }
}
// ---------------------------------------------------------------------------
// WebSocket 代理（VLESS / Trojan）
// ---------------------------------------------------------------------------
async function handleWebSocketProxy(request, cfg) {
  const pair = new WebSocketPair();
  const [client, server] = Object.values(pair);
  try { server.accept({ allowHalfOpen: true }); } catch (e) { server.accept(); }
  // 关键：必须声明二进制类型，否则 CF 将二进制帧按 UTF-8 解码成 string，VLESS/Trojan 头（含 16 字节原始 UUID）会被损坏导致隧道失败
  server.binaryType = 'arraybuffer';
  let socket = null, writer = null, headerSent = false, pending = null;
  const send = (data) => { try { server.send(data); } catch (e) { /* 忽略 */ } };
  server.addEventListener('message', async (ev) => {
    try {
      const chunk = typeof ev.data === 'string' ? TE.encode(ev.data) : new Uint8Array(ev.data);
      if (!headerSent) {
        // 累积缓冲：Workers 端 WS 消息可能分片到达，不足头部长度时等待后续数据
        pending = pending ? concatBytes(pending, chunk) : chunk;
        let parsed, isVless;
        try {
          // Trojan 判定：客户端发送 SHA224(密码) 的 56 字节 hex + CRLF；密码与节点生成同源（留空用 UUID）
          let isTrojan = detectTrojan(pending, cfg);
          // 分帧等待：部分客户端（mihomo 等）将 Trojan 头分帧发送（首帧可能仅 56 字节 SHA224 hex）。
          // 此时 pending[0] 为 hex 字符（非 0）且不足 58 字节，不能按 VLESS 解析（会报版本错误而关闭连接），应等待后续分片
          if (!isTrojan && pending.byteLength > 0 && pending[0] !== 0 && pending.byteLength < 58) return;
          isVless = !isTrojan;
          parsed = isTrojan ? parseTrojanHeader(pending) : parseVlessHeader(pending);
        } catch (err) {
          if (/头部过短/.test(err.message || '')) return;   // 等下一个分片
          throw err;
        }
        headerSent = true;
        // UDP 请求（command=0x02）：CF Workers 无 UDP socket 无法原生转发数据报，
        // DNS(53) 查询 → DoH(HTTPS) 转换后回标准 DNS 响应（修复 V2rayNG 关闭「本地 DNS」时远端 DNS 不可用）；
        // 其余 UDP 快速失败关闭连接（客户端自动回退），TCP（VLESS/Trojan WS/XHTTP）路径零影响
        if (parsed.command === 2) {
          try {
            const payload = pending.subarray(parsed.headerLength);
            if (parsed.port === 53 && payload.byteLength >= 12) {
              const resp = await dnsToDoH(payload);
              if (resp) send(resp);
            }
          } catch (e) { /* UDP 处理失败不响应，客户端按超时/回退处理 */ }
          try { server.close(1000); } catch (e) { /* 忽略 */ }
          return;
        }
        const conn = await openOutbound(parsed, cfg, request.cf && request.cf.colo, isVless);
        socket = conn;
        writer = conn.writable.getWriter();
        // 透明代理：去掉 VLESS/Trojan 头部，发送原始 TLS 数据，由对端按 SNI 路由
        // VLESS 协议：须先向客户端回 2 字节响应头（version=0 + addonsLen=0），否则客户端握手失败
        if (isVless) send(new Uint8Array([0, 0]));
        if (pending && pending.byteLength > parsed.headerLength) await writer.write(pending.subarray(parsed.headerLength));
        pending = null;   // 出站就绪后清空缓冲，后续消息直接写出站
        pumpToReader(conn.readable.getReader(), send, () => { try { server.close(1000); } catch (e) { /* 忽略 */ } });
      } else {
        if (writer) await writer.write(chunk); else pending = pending ? concatBytes(pending, chunk) : chunk;   // 出站未就绪时暂存，避免头部之后的早期数据帧被丢弃（否则 TLS 握手不完整 → 连接通但流量为 0）
      }
    } catch (err) {
      try { server.close(1011, String(err && err.message || err)); } catch (e) { /* 忽略 */ }
    }
  });
  const cleanup = () => { if (socket) { try { socket.close(); } catch (e) { /* 忽略 */ } socket = null; } };
  server.addEventListener('close', cleanup);
  server.addEventListener('error', cleanup);
  return new Response(null, { status: 101, webSocket: client });
}
// xhttp 代理（stream-one 模式：请求体即 VLESS 流）
async function handleXhttpProxy(request, cfg) {
  const bodyReader = request.body.getReader();
  const first = await bodyReader.read();
  if (first.done) return new Response('empty', { status: 400 });
  const parsed = parseVlessHeader(first.value);
  const conn = await openOutbound(parsed, cfg, request.cf && request.cf.colo, true);
  const writer = conn.writable.getWriter();
  await writer.write(first.value.subarray(parsed.headerLength));
  (async () => {
    try {
      while (true) {
        const { done, value } = await bodyReader.read();
        if (done) break;
        await writer.write(value);
      }
    } catch (e) { /* 忽略 */ }
    try { await writer.close(); } catch (e) { /* 忽略 */ }
  })();
  const respStream = new ReadableStream({
    async start(controller) {
      // 须先回 2 字节 VLESS 响应头（version=0 + addonsLen=0），否则 xhttp 客户端握手失败（真连接报 unexpected response version）
      controller.enqueue(new Uint8Array([0, 0]));
      const r = conn.readable.getReader();
      try {
        while (true) {
          const { done, value } = await r.read();
          if (done) break;
          controller.enqueue(value);
        }
      } catch (e) { /* 忽略 */ }
      try { controller.close(); } catch (e) { /* 忽略 */ }
      try { conn.close(); } catch (e) { /* 忽略 */ }
    },
    cancel() { try { conn.close(); } catch (e) { /* 忽略 */ } }
  });
  return new Response(respStream, { status: 200, headers: { 'content-type': 'application/octet-stream', 'x-accel-buffering': 'no', 'cache-control': 'no-store' } });
}
// ---------------------------------------------------------------------------
// 优选器：候选提取（txt / HTML 多源）+ TCP 延迟测试
// ---------------------------------------------------------------------------
// 从任意数据源文本提取 IP 候选（兼容 txt 行式、HTML 表格、JSON 文本；仅保留合法 IPv4/IPv6）
function extractCandidates(text) {
  const seen = new Set();
  const out = [];
  const add = (ip, port, name) => {
    if (!isValidIp(ip)) return;
    if (seen.has(ip)) return;   // 按 IP 去重（忽略端口）
    seen.add(ip);
    out.push({ ip, port: port || 443, name: name || '' });
  };
  parseIPList(text).forEach(x => add(x.ip, x.port, x.name));
  // IPv4：点分四段（HTML/JSON 文本中散落的合法 IP）
  const re4 = /\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;
  let m;
  while ((m = re4.exec(text))) {
    const { host, port } = parseHostPort(m[0], 443);
    if (host) add(host, port, '');
  }
  // IPv6：冒号分隔的连续 token（微测网 IPv6 源为裸地址）
  const re6 = /[0-9a-fA-F:]+/g;
  while ((m = re6.exec(text))) {
    const t = m[0];
    if (t.includes(':') && t.split(':').length >= 3 && isValidIp(t)) add(t, 443, '');
  }
  return out;
}
// 从文本提取域名（用于微测网优选域名源，支持 *. 通配前缀）
function extractDomains(text) {
  const seen = new Set();
  const out = [];
  const re = /(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;
  let m;
  while ((m = re.exec(text))) {
    const d = m[0].toLowerCase();
    if (!seen.has(d) && (d.includes('cloudflare') || d.includes('bestcf') || d.includes('182682') || d.includes('090227') || d.endsWith('.xyz') || d.endsWith('.top'))) {
      seen.add(d); out.push(d);
    }
  }
  return out.slice(0, 10);
}
// 按数据源键 + 自定义 URL 收集候选 IP
async function collectCandidates(opt) {
  opt = opt || {};
  const out = [];
  // 源拉取统计：预设源 / 自定义源 各自拉到的 IP 数与失败原因（前端展示，便于排查"源未生效"）
  const stats = { preset: 0, presetErr: '', custom: 0, customErr: '', cidr: 0 };
  // 统一使用所选测速端口：忽略源文本自带端口，保证测速结果只出现所选端口；
  // 仅保留 Cloudflare Anycast IP：非 CF IP 无法作为 Worker 入口，测速/加入优选均无意义
  const push = (x) => { if (x && x.ip && isCloudflareIP(x.ip)) out.push({ ip: x.ip, port: opt.port || x.port || 443, name: x.name || '' }); };
  if (opt.source && OPTIMIZE_SOURCES[opt.source]) {
    const res = await fetchTimeout(OPTIMIZE_SOURCES[opt.source].url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, 6000);
    if (res && res.ok) {
      const arr = extractCandidates(await res.text());
      arr.forEach(push);
      stats.preset = arr.length;
    } else stats.presetErr = res ? ('HTTP ' + res.status) : '超时/网络错误';
  }
  if (opt.sourceURL) {
    const res = await fetchTimeout(opt.sourceURL, { headers: { 'User-Agent': 'Mozilla/5.0' } }, 6000);
    if (res && res.ok) {
      const arr = extractCandidates(await res.text());
      arr.forEach(push);
      stats.custom = arr.length;
    } else stats.customErr = res ? ('HTTP ' + res.status) : '超时/网络错误';
  }
  // 按 IP 去重（忽略端口）：同一 IP 无论来源/端口如何只保留一条，避免候选框出现重复 IP
  const seen = new Set();
  const dedup = [];
  for (const x of out) {
    if (seen.has(x.ip)) continue;
    seen.add(x.ip);
    dedup.push(x);
  }
  // CF 补足：在去重后仍不足目标数量时补充，且补足 IP 不与已有候选重复
  if (opt.useCidr !== false && dedup.length < (opt.count || 20)) {
    const need = (opt.count || 20) - dedup.length;
    const pool = randomIPsFromCidrs(CLOUDFLARE_CIDRS, need * 3);
    let filled = 0;
    for (const ip of pool) {
      if (filled >= need) break;
      if (seen.has(ip)) continue;
      seen.add(ip);
      dedup.push({ ip, port: opt.port || 443, name: '' });
      filled++;
    }
    stats.cidr = filled;
  }
  return { candidates: dedup, stats };
}
// 单个 IP 的 TCP 连接延迟测试
function testOneLatency(ip, port, timeout) {
  return new Promise((resolve) => {
    const start = Date.now();
    let socket, done = false;
    const finish = (ok, latency) => {
      if (done) return; done = true;
      clearTimeout(timer);
      try { if (socket) socket.close(); } catch (e) { /* 忽略 */ }
      resolve({ ip, port, ok, latency });
    };
    const timer = setTimeout(() => finish(false, -1), timeout);
    try {
      socket = connect({ hostname: ip, port });
    } catch (e) { return finish(false, -1); }
    socket.opened.then(() => finish(true, Date.now() - start))
      .catch(() => finish(false, -1));
  });
}
// 并发延迟测试
async function runLatencyTest(candidates, threads, timeout) {
  threads = Math.max(1, Math.min(50, Number(threads) || 5));
  timeout = Math.max(500, Number(timeout) || 5000);
  const results = [];
  let idx = 0;
  async function worker() {
    while (idx < candidates.length) {
      const c = candidates[idx++];
      const r = await testOneLatency(c.ip, c.port, timeout);
      results.push(r);
    }
  }
  await Promise.all(Array.from({ length: threads }, worker));
  results.sort((a, b) => (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency));
  return results;
}
// ---------------------------------------------------------------------------
// 订阅生成
// ---------------------------------------------------------------------------
// XHTTP Padding（XHTTP Extra）参数：xPadding 混淆参数，客户端与服务端约定一致。
// header/key 两项由 UUID 内部切片派生（slice(1,7) / '_'+slice(25,31)），
// 其余三项为固定混淆策略。V2rayN（extra JSON，camelCase）与 mihomo
// （xhttp-opts，kebab-case）共用同一份派生结果。
function xhttpPadding(cfg) {
  const u = cfg.uuid || '';
  return {
    xPaddingObfsMode: true, xPaddingMethod: 'tokenish', xPaddingPlacement: 'queryInHeader',
    xPaddingHeader: u.slice(1, 7), xPaddingKey: '_' + u.slice(25, 31)
  };
}
function vlessNode(cfg, server, port, name, extra = {}) {
  const host = cfg.host;
  const addr = server.includes(':') && !server.startsWith('[') ? `[${server}]` : server;  // IPv6 需方括号
  const isTls = !HTTP_PORTS.has(Number(port));
  const enc = encodeURIComponent;
  let q = 'encryption=none';
  if (isTls) q += '&security=tls&sni=' + enc(host) + '&fp=chrome';
  else q += '&security=none';   // 80/8080/2052 等明文端口走明文 ws
  q += '&host=' + enc(host);
  if (extra.type === 'xhttp') {
    // XHTTP（stream-one）：必须携带 extra（JSON）作为 XHTTP Extra，否则 V2rayN 无法识别完整 xhttp 配置
    // Padding 头/键由 UUID 内部派生（切片），客户端按此发送，服务端按 VLESS 流处理 body
    q += '&type=xhttp&mode=stream-one';
    q += '&extra=' + enc(JSON.stringify(xhttpPadding(cfg)));
  }
  else q += '&type=ws';
  q += '&path=' + enc('/' + cfg.path);
  if (cfg.alpn) q += '&alpn=' + enc(cfg.alpn);
  if (cfg.ech) {
    // ECH：输出 "查询域名+DoH"（xray/V2rayN 客户端本地查询 ECH 配置，Worker 端拉取会与用户边缘密钥不匹配导致握手失败）
    q += '&ech=' + enc((cfg.echHost || 'cloudflare-ech.com') + '+' + (cfg.echDns || 'https://223.5.5.5/dns-query'));
  }
  return `vless://${cfg.uuid}@${addr}:${port}?${q}#${encodeURIComponent(name)}`;
}
function trojanNode(cfg, server, port, name) {
  const host = cfg.host;
  const addr = server.includes(':') && !server.startsWith('[') ? `[${server}]` : server;  // IPv6 需方括号
  const enc = encodeURIComponent;
  let q = 'security=tls&sni=' + enc(host) + '&fp=chrome&host=' + enc(host) + '&type=ws&path=' + enc('/' + cfg.path);
  if (cfg.alpn) q += '&alpn=' + enc(cfg.alpn);
  if (cfg.ech) q += '&ech=' + enc((cfg.echHost || 'cloudflare-ech.com') + '+' + (cfg.echDns || 'https://223.5.5.5/dns-query'));   // ECH：与 VLESS 节点一致，客户端本地查询 ECH 配置
  return `trojan://${cfg.trojanPassword || cfg.uuid}@${addr}:${port}?${q}#${encodeURIComponent(name)}`;
}
// 优选域名 / 优选 API 的 DNS 解析缓存（TTL 10 分钟：域名或 URL → IP 列表）
const DNH_CACHE = new Map();
// 带超时的 fetch（手动 AbortController，兼容所有运行时）
function fetchTimeout(url, opts, ms) {
  return new Promise((resolve) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    fetch(url, Object.assign({}, opts, { signal: ctrl.signal }))
      .then(r => { clearTimeout(timer); resolve(r); })
      .catch(() => { clearTimeout(timer); resolve(null); });
  });
}
// 解析优选域名/优选API为 IP：URL 数据源与域名并发拉取（避免串行拖垮订阅墙钟）；按输入顺序均衡截断 maxTotal，保证各地区节点都有
// allowRegionFallback：仅「自定义订阅 + 追加内置及默认节点」开启时允许地区回退生成——
// 数据源能确定地区（路径含地区码）但无可解析 IP 时，用 CF 段随机生成该地区节点；
// filterCF：仅自定义模式（关闭追加）传 false，输入框内容原样下发（用户自担可用性）；追加/默认模式保持 CF 段过滤保证可达
// v6：默认 IPv4 模式跳过 AAAA 查询（省一半 DNS 子请求）；仅筛选含 IPv6 时传 true
async function resolvePreferredDomains(domainsStr, limitPerDomain = 100, maxTotal = 300, allowRegionFallback = false, filterCF = true, v6 = false) {
  const list = String(domainsStr || '').split(/[\n,;]+/).map(s => s.trim().replace(/^\*\./, '')).filter(Boolean);
  const now = Date.now();
  // DoH 降级链：CF 官方 1.1.1.1 优先（Worker 与 1.1.1.1 同机房，内网时延 <5ms 且只计 1 次子请求），失败后优雅降级阿里 DNS
  const dohs = ['https://cloudflare-dns.com/dns-query', 'https://dns.alidns.com/resolve'];
  // 并发两个 DoH，取最快成功结果
  const qry = async (d, type, filter) => {
    const jobs = dohs.map(async (url) => {
      const res = await fetchTimeout(url + '?name=' + encodeURIComponent(d) + '&type=' + type, { headers: { accept: 'application/dns-json' } }, 4000);
      if (!res || !res.ok) throw new Error('doh unavailable');
      const j = await res.json();
      const arr = (j.Answer || []).filter(a => a.type === filter && (type === 'A' ? /^\d+\.\d+\.\d+\.\d+$/.test(a.data) : /^[0-9a-fA-F:]+$/.test(a.data))).map(a => a.data);
      if (!arr.length) throw new Error('no answer');
      return arr;
    });
    try { return await Promise.any(jobs); } catch (e) { return []; }
  };
  // 每个条目返回一个有序 IP 数组
  const perItem = await Promise.all(list.map(async (d) => {
    if (d.includes('://')) {
      const ck = 'url:' + d + (allowRegionFallback ? '|rf' : '') + (filterCF ? '' : '|raw');
      const cHit = DNH_CACHE.get(ck);
      if (cHit && now - cHit.t < 10 * 60 * 1000) return cHit.ips.slice(0, limitPerDomain);
      try {
        const res = await fetchTimeout(d, {}, 6000);
        if (!res || !res.ok) throw new Error('unreachable');
        const txt = await res.text();
        // 兼容多种数据源格式：纯 IP / IP:端口 / IP:端口#名称（如 bestcf 的 "IP:端口#地区随机 | 香港 HK | HKG | ..."）
        const seen = new Set();
        const counters = {};
        const rec = [];
        // bestcf 地区优选池：社区维护的可达中转 IP（非 CF 段），标记后允许绕过 CF 段过滤直接下发
        const relay = isTrustedRegionPool(d);
        for (const raw of txt.split(/\r?\n/)) {
          if (rec.length >= limitPerDomain) break;
          const m = raw.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);
          if (!m) continue;
          const ip = m[1];
          const port = m[2] ? parseInt(m[2]) : 443;
          const key = ip + ':' + port;
          if (seen.has(key)) continue;   // 源内去重（同 IP 同端口只留一条）
          if (filterCF && !isCloudflareIP(ip) && !relay) continue;   // 追加/默认模式强制 CF 段；bestcf 地区优选池（社区中转）放行；仅自定义模式原样下发
          seen.add(key);
          // 名称：优先匹配 "中文 地区码"（bestcf 格式 "地区随机 | 香港 HK"），再取纯中文段，再取地区码映射，否则留空走“优选IP-XX”兜底
          // 【新增】用户自定义名称（不含中文、不含 |）直接保留原样，例如 JP-A-147 / CF-B-163
          const rawName = (m[3] || '').trim();
          if (rawName && !/[\u4e00-\u9fa5]/.test(rawName) && !rawName.includes('|')) {
            rec.push({ ip, port, name: rawName, ...(relay ? { relay: true } : {}) });
            continue;
          }
          let nm = '';
          if (m[3]) {
            // 优先匹配「中文地区名 + 空格 + 地区码」（如 "澳大利亚 AU"），锚定开头避免 4 字以上地区名被截断（如"澳大利亚"误取"大利亚"）
            const zhCode = m[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);
            if (zhCode) { const cn = zhCode[0].match(/[\u4e00-\u9fa5]{2,5}/); if (cn) nm = cn[0]; }
            else {
              const segs = m[3].split('|').map(s => s.trim());
              // 优先取「中文名+空格+地区码」段（bestcf 格式 "地区随机 | 香港 HK"），避免把 "地区随机" 前缀当地区名
              const segCode = segs.find(s => /^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(s));
              if (segCode) { const cn = segCode.match(/[\u4e00-\u9fa5]{2,5}/); if (cn) nm = cn[0]; }
              else {
                // | 分隔的独立中文段（如 "澳大利亚"、"印度尼西亚"），放宽到 2-5 字并排除 bestcf 等前缀词
                const zh = segs.find(s => /^[\u4e00-\u9fa5]{2,5}$/.test(s) && !/^(地区随机|随机优选|官方优选|优选|CF优选)$/.test(s));
                if (zh) nm = zh;
                else { const code = m[3].match(/\b([A-Z]{2})\b/); if (code) nm = REGION_CN[code[1]] || code[1]; }
              }
            }
          }
          if (nm) { counters[nm] = (counters[nm] || 0) + 1; rec.push({ ip, port, name: nm + '-' + String(counters[nm]).padStart(2, '0'), ...(relay ? { relay: true } : {}) }); }
          else rec.push({ ip, port, name: '', ...(relay ? { relay: true } : {}) });
        }
        if (!rec.length && allowRegionFallback) {
          // 追加模式兜底：源内无可解析 IP 时，按 URL 路径地区码（如 /HK/）用可达 CF 段生成该地区节点
          const tag = (String(d).match(/\/([A-Z]{2})\//) || [])[1] || String(d).replace(/^https?:\/\//, '').split('.')[0];
          if (REGION_CN[tag]) {
            const gen = randomIPsFromCidrs(REACHABLE_CIDRS, limitPerDomain);
            gen.forEach((ip, i) => rec.push({ ip, port: 443, name: REGION_CN[tag] + '-' + String(i + 1).padStart(2, '0') }));
          }
        }
        DNH_CACHE.set(ck, { t: now, ips: rec });
        return rec.slice();   // 返回副本：均衡截断的 shift() 会原地修改数组，直接返回引用会污染缓存
      } catch (e) {
        // SWR 平滑容灾：当次拉取网络异常/超时，沿用上一轮有效缓存兜底，确保外部数据源抖动时订阅永不枯竭
        const stale = DNH_CACHE.get(ck);
        if (stale && stale.ips && stale.ips.length) return stale.ips.slice(0, limitPerDomain);
        return [];   // 无历史缓存才返回空
      }
    }
    if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(d)) return [];
    const hit = DNH_CACHE.get(d);
    if (hit && now - hit.t < 10 * 60 * 1000) return hit.ips.slice(0, limitPerDomain).map((ip, i) => ({ ip, port: 443, name: d + '-' + (i + 1) }));
    // 按需解析 IPv6：默认仅查 A（IPv4），筛选含 IPv6 时才追加 AAAA 查询，节省 50% DNS 子请求
    const aRec = await qry(d, 'A', 1);
    let ips = aRec.filter(isCloudflareIP);
    if (v6) {
      const aaaaRec = await qry(d, 'AAAA', 28);
      ips = [...new Set(aRec.concat(aaaaRec))].filter(isCloudflareIP);
    }
    ips = ips.slice(0, limitPerDomain);
    if (!ips.length) {
      // SWR：当次解析失败（死链/超时）但有历史缓存（无论是否过期）→ 沿用旧数据兜底
      if (hit && hit.ips && hit.ips.length) return hit.ips.slice(0, limitPerDomain).map((ip, i) => ({ ip, port: 443, name: d + '-' + (i + 1) }));
      return [];
    }
    DNH_CACHE.set(d, { t: now, ips });
    return ips.map((ip, i) => ({ ip, port: 443, name: d + '-' + (i + 1) }));
  }));
  // 按输入顺序均衡截断：轮流取每条目的节点，保证各地区/域名都有且总量受控
  const out = [];
  let got = 0;
  while (got < maxTotal) {
    let any = false;
    for (const arr of perItem) {
      if (got >= maxTotal) break;
      if (arr.length) { out.push(arr.shift()); got++; any = true; }
    }
    if (!any) break;
  }
  return out;
}
function buildNodes(cfg, cap = 800, skipSet = null) {
  const nodes = [];
  const used = new Set();
  // 订阅模式：random 随机优选（CF CIDR 随机生成指定数量，不经域名解析）
  const mode = (cfg.optimizer && cfg.optimizer.subMode) || '';
  // 仅自定义模式（custom + 关闭追加）：严格按「优选节点」输入框内容下发，放行非 CF 段 IP（用户自担可用性）；
  // 其它模式（默认/追加/随机）入口必须是 CF 段——非 CF IP 无法转发到 Worker（历史 v2rayNG 全 -1 根因）
  const allowNonCF = (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault));
  const push = (server, port, name, trusted) => {
    if (nodes.length >= cap) return;   // 生成过程限流：避免多协议膨胀超 Worker CPU
    // 入口 IP 硬性要求：非 CF 段 IP 无法转发到 Worker，直接丢弃；
    // 例外：bestcf 地区优选池的社区中转 IP（trusted 标记）可用作客户端入口，参考 edgetunnel/CFnew/TunnelBoard
    if (isValidIp(server) && !isCloudflareIP(server) && !allowNonCF && !trusted) return;
    const key = server;   // 按服务器/IP 去重（忽略端口）：同一 IP 不同端口只保留一条
    if (used.has(key)) return;
    used.add(key);
    const isTls = !HTTP_PORTS.has(Number(port));
    if (cfg.tlsOnly && !isTls) return;   // TLS 控制：仅下发 TLS 端口节点，明文端口跳过
    if (cfg.enableVless) nodes.push(vlessNode(cfg, server, port, name));
    if (cfg.enableTrojan && isTls) nodes.push(trojanNode(cfg, server, port, name));  // Trojan 依赖 TLS，明文端口不出
    if (cfg.enableXhttp) nodes.push(vlessNode(cfg, server, port, name, { type: 'xhttp' }));
  };
  if (mode === 'random') {
    let n = Math.min(Math.max(parseInt(cfg.optimizer.subRandomCount) || 16, 1), Math.min(99, cap));
    // 节点数量控制：开启后以设定数量为准（提升随机优选生成量，使下发达到设定总数，默认关闭不影响原行为）
    if (cfg.nodeLimit) {   // 自定义数量限制与轮询开关独立：关闭轮询后仍生效
      const lim = parseInt(cfg.nodeLimitCount) || 0;
      if (lim > 0) n = Math.min(Math.max(n, lim), cap);
    }
    // 数量 = 下发节点总数（含启用的所有协议），而非 IP 数：每个 IP 生成一条后计数，达 n 即止
    const protoCount = (cfg.enableVless ? 1 : 0) + (cfg.enableTrojan ? 1 : 0) + (cfg.enableXhttp ? 1 : 0) || 1;
    let made = 0;
    // 去重下发：随机模式生成 3 倍数量后过滤已下发 IP；新 IP 排前、已下发 IP 紧随补齐，节点总量恒定
    const randPool = randomIPsFromCidrs(REACHABLE_CIDRS, Math.ceil(n / protoCount) * 3);
    let randIPs = randPool;
    if (skipSet) {
      const unissued = randPool.filter(ip => !skipSet.has(ip));
      const prev = randPool.filter(ip => skipSet.has(ip));
      randIPs = [...unissued, ...prev];
    }
    for (const ip of randIPs) {
      if (made >= n) break;
      if (cfg.enableVless) { nodes.push(vlessNode(cfg, ip, 443, '优选IP-' + String(made + 1).padStart(2, '0'))); made++; }
      if (made >= n) break;
      if (cfg.enableTrojan) { nodes.push(trojanNode(cfg, ip, 443, '优选IP-' + String(made + 1).padStart(2, '0'))); made++; }
      if (made >= n) break;
      if (cfg.enableXhttp) { nodes.push(vlessNode(cfg, ip, 443, '优选IP-' + String(made + 1).padStart(2, '0'), { type: 'xhttp' })); made++; }
    }
    return nodes;
  }
  const domains = String(cfg.preferredDomains || '').split(/[\n,;]+/).map(s => s.trim()).filter(s => s && !s.includes('://'));  // URL 数据源由 resolvePreferredDomains 解析，不作为服务器地址
  domains.forEach((d, i) => {
    // 支持 "IP:端口#名称" 格式：剥离 #名称 后再解析地址，名称用于节点命名（无名称时用“优选IP-XX”兜底）
    const hash = d.indexOf('#');
    const addr = (hash >= 0 ? d.slice(0, hash) : d).trim();
    const nm = (hash >= 0 ? d.slice(hash + 1) : '').trim();
    const p = parseHostPort(addr, 443);
    if (p.host.startsWith('*.')) return;   // 通配符域名无法作为服务器地址，其 IP 由 resolvePreferredDomains 解析下发
    push(p.host, p.port, nm || '优选IP-' + String(i + 1).padStart(2, '0'));
  });
  (cfg.preferredIPs || []).forEach((x, i) => {
    push(x.ip, x.port || 443, x.name || '优选IP-' + String(i + 1).padStart(2, '0'), x.relay === true);
  });
  // 自定义订阅模式：仅下发用户设置节点，不兜底内置池、不做 CF 随机补足；
  // 但开启「追加内置及默认节点」(subIncludeDefault) 后需要完整下发自定义+默认+补足，因此继续走补足逻辑
  if (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault)) return nodes;
  if (!domains.length && !(cfg.preferredIPs || []).length) {
    // 无任何优选：内置优选 IP 池（开箱即用）+ 官方域名兜底（无明确地区，直接使用“优选IP-XX”名称）
    parseIPList(BUILTIN_PREFERRED_IPS.join('\n')).forEach(x => push(x.ip, x.port || 443, x.name || '0'));
    BUILTIN_OFFICIAL_DOMAINS.forEach((d, i) => push(d, 443, '域名-' + String(i + 1).padStart(2, '0')));
  }
  // CF CIDR 随机补足：节点数不足 fillCount（封顶 cap）时随机生成补齐（大量下发，客户端自动择优）
  // 补足节点只出 VLESS（通用协议）且固定 443，避免多协议 3 倍膨胀导致免费版 Worker CPU 超时；无明确地区，名称统一“优选IP-XXX”
  const fillCount = Math.min(Math.max(parseInt((cfg.optimizer && cfg.optimizer.fillCount) || 0) || 0, 0), 5000);
  const need = Math.min(fillCount, cap) - used.size;   // 按唯一 IP 数补足，而非节点数（多协议节点会膨胀 nodes.length）
  if (need > 0) {
    // 去重下发：生成 3 倍数量后过滤已下发 IP，不足时回退包含已下发（循环使用）
    const fillPool = randomIPsFromCidrs(REACHABLE_CIDRS, need * 3);
    const freshFill = skipSet ? fillPool.filter(ip => !skipSet.has(ip)) : fillPool;
    const fillIPs = (freshFill.length >= need) ? freshFill : fillPool;
    let fi = 0;
    for (const ip of fillIPs) {
      if (nodes.length >= cap) break;   // 补足同样受 cap 限流（与 push 一致）
      fi++;
      nodes.push(vlessNode(cfg, ip, 443, '优选IP-' + String(fi).padStart(3, '0')));
    }
  }
  return nodes;
}
// 从节点链接提取服务器地址与端口（URL API 对 vless:// 等非标准 scheme 不解析 port/IPv6，需手动处理）
function parseNodeServer(n) {
  const at = n.indexOf('@');
  const q = n.indexOf('?', at);
  const auth = (q > at && at >= 0) ? n.slice(at + 1, q) : n.slice(at + 1);
  if (auth.startsWith('[')) {
    const end = auth.indexOf(']');
    const host = end > 0 ? auth.slice(1, end) : auth;
    const rest = auth.slice(end + 1);
    const port = rest.startsWith(':') ? parseInt(rest.slice(1)) : 443;
    return { host, port: isNaN(port) ? 443 : port };
  }
  const idx = auth.lastIndexOf(':');
  if (idx > 0) {
    const port = parseInt(auth.slice(idx + 1));
    return { host: auth.slice(0, idx), port: isNaN(port) ? 443 : port };
  }
  return { host: auth, port: 443 };
}
// 轻量查询参数提取：从分享链接字符串提取指定参数（替代 new URL().searchParams，避免 URL 对象开销与 GC 压力）
function getParam(n, key) {
  const q = n.indexOf('?');
  if (q < 0) return null;
  const hash = n.indexOf('#', q);
  const seg = (hash > q ? n.slice(q + 1, hash) : n.slice(q + 1));
  for (const pair of seg.split('&')) {
    const eq = pair.indexOf('=');
    const k = eq > 0 ? pair.slice(0, eq) : pair;
    if (k === key) return eq > 0 ? decodeURIComponent(pair.slice(eq + 1)) : '';
  }
  return null;
}
// 解析分享链接为统一节点信息（五个客户端生成器共用；纯字符串解析，无 new URL 对象开销）
function parseShareNode(n, i) {
  const { host: srv, port: prt } = parseNodeServer(n);
  const hashIdx = n.indexOf('#');
  let name = `节点${i + 1}`;
  if (hashIdx >= 0) { try { name = decodeURIComponent(n.slice(hashIdx + 1)) || name; } catch (e) { /* 忽略非法编码 */ } }
  const at = n.indexOf('@');
  let user = '';
  if (at >= 0) {
    const proto = n.indexOf('://');
    const start = proto >= 0 ? proto + 3 : 0;
    try { user = decodeURIComponent(n.slice(start, at)); } catch (e) { user = n.slice(start, at); }
  }
  const isTrojan = n.startsWith('trojan://');
  const tls = isTrojan || (getParam(n, 'security') || 'tls') === 'tls';
  return { srv, prt, name, user, isTrojan, tls };
}
// 地区 / 运营商标签表：按节点名称中的关键字匹配
const REGION_TAGS = { HK: ['HK', '香港'], TW: ['TW', '台湾'], US: ['US', '美国'], SG: ['SG', '新加坡'], JP: ['JP', '日本'], KR: ['KR', '韩国'], DE: ['DE', '德国'] };
const ISP_TAGS = { 移动: ['移动', 'CM', 'CHINAMOBILE'], 联通: ['联通', 'CU', 'UNICOM'], 电信: ['电信', 'CT', 'CHINATELECOM'] };
const FILTER_ISPS = ['移动', '联通', '电信'];
const FILTER_IPTYPES = ['IPv4', 'IPv6'];
// 按面板筛选配置过滤节点（region 按名称地区标记、ipType 按地址类型、isp 按名称运营商标记）
// 任何维度筛选后为空时逐级放宽（isp → ipType → region），保证订阅永不为空（避免客户端「无效订阅」）
function filterNodes(nodes, filter) {
  if (!filter || !filter.region && !filter.ipType && !filter.isp) return nodes;
  const region = filter.region || 'all';
  const ipType = filter.ipType || FILTER_IPTYPES;
  const isp = filter.isp || FILTER_ISPS;
  // 预解析节点（名称解析一次，供各轮过滤与池标记检查复用）
  const meta = nodes.map(n => {
    const { host } = parseNodeServer(n);
    let name = '';
    try {
      const h = n.indexOf('#');
      if (h >= 0) name = decodeURIComponent(n.slice(h + 1) || '');
    } catch (e) { name = ''; }
    return { host, name, up: name.toUpperCase() };
  });
  // 池内无任何运营商标记时 ISP 筛选不生效（默认数据源节点名仅含地区，按运营商过滤会清空节点池）
  const poolHasIsp = meta.some(m => m.up && Object.keys(ISP_TAGS).some(k => (ISP_TAGS[k] || [k]).some(t => m.up.includes(t.toUpperCase()))));
  const apply = (rg, t, s) => {
    const tg = rg !== 'all' ? (REGION_TAGS[rg] || []) : null;
    const partial = s.length > 0 && s.length < FILTER_ISPS.length;
    return nodes.filter((n, i) => {
      const m = meta[i];
      const isV6 = m.host.indexOf(':') >= 0;
      if (!m.name) return false;  // 跳过无法解析的非法节点
      if (tg && !tg.some(t2 => m.up.includes(t2.toUpperCase()))) {
        // 无地区标记的通用节点（优选IP-XX / 域名-XX）是 CF 通用入口，任意地区可用，不参与地区过滤；
        // 地区过滤仅剔除明确标记为其它地区的节点，避免指定地区后节点数量骤减
        if (!/^(优选IP|域名)-\d+/.test(m.name)) return false;
      }
      if (t.length === 1) {
        if (t[0] === 'IPv4' && isV6) return false;
        if (t[0] === 'IPv6' && !isV6) return false;
      }
      if (partial && poolHasIsp && !s.some(k => (ISP_TAGS[k] || [k]).some(t2 => m.up.includes(t2.toUpperCase())))) return false;
      return true;
    });
  };
  let out = apply(region, ipType, isp);
  if (!out.length) out = apply(region, ipType, FILTER_ISPS);          // 放宽 isp
  if (!out.length) out = apply(region, FILTER_IPTYPES, FILTER_ISPS);  // 放宽 ipType
  if (!out.length) out = apply('all', FILTER_IPTYPES, FILTER_ISPS);   // 放宽 region
  return out;
}
// ---------- Clash YAML ----------
// YAML 标量值序列化（裸值或 JSON 字符串，避免特殊字符破坏 YAML）
function yamlVal(v) {
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  const s = String(v);
  return /^[\w.\-/\u4e00-\u9fa5]+$/.test(s) ? s : JSON.stringify(s);
}
// 单个 Clash 代理块模板化生成（固定结构，800 节点级订阅生成耗时降低一个数量级）
function clashProxyYaml(p) {
  const L = [];
  L.push('  - name: ' + yamlVal(p.name));
  L.push('    type: ' + p.type);
  L.push('    server: ' + yamlVal(p.server));
  L.push('    port: ' + p.port);
  if (p.type === 'vless') L.push('    uuid: ' + yamlVal(p.uuid));
  else L.push('    password: ' + yamlVal(p.password));
  L.push('    network: ' + p.network);
  L.push('    udp: true');
  if (p.tls) {
    L.push('    tls: true');
    L.push('    skip-cert-verify: true');   // CF 优选 IP 场景：server 为 CF Anycast IP，证书是域名证书（无 IP SAN），mihomo 校验 IP 主机名必失败，须跳过（与 edgetunnel/subconverter 一致）
    L.push('    alpn: [http/1.1]');   // 强制 HTTP/1.1 ALPN：CF Worker 的 WebSocket 仅支持 HTTP/1.1 升级，mihomo utls(chrome) 默认 ALPN 含 h2，CF 边缘会协商为 h2 → WS 升级失败、节点 Error
    L.push('    servername: ' + yamlVal(p.servername));
    if (p.type === 'trojan') L.push('    sni: ' + yamlVal(p.servername));   // mihomo trojan 只认 sni 字段（servername 被忽略）：CF 优选 IP 下缺 sni 时 TLS SNI 回落为 server(IP)，Go/utls 对 IP 型 ServerName 不发送 SNI 扩展 → CF 边缘无法路由 → 403 → Clash Verge 全 Error
    L.push('    client-fingerprint: chrome');
    if (p['tls-opts']) {
      L.push('    tls-opts:');
      L.push('      ech:');
      L.push('        enable: true');
    }
  }
  if (p.network === 'ws') {
    L.push('    ws-opts:');
    L.push('      path: ' + yamlVal(p['ws-opts'].path));
    L.push('      headers:');
    L.push('        Host: ' + yamlVal(p['ws-opts'].headers.Host));
  } else if (p.network === 'xhttp') {
    const xo = p['xhttp-opts'];
    L.push('    xhttp-opts:');
    L.push('      path: ' + yamlVal(xo.path));
    L.push('      mode: ' + yamlVal(xo.mode));
    L.push('      headers:');
    L.push('        Host: ' + yamlVal(xo.headers.Host));
    L.push('      x-padding-obfs-mode: ' + yamlVal(xo['x-padding-obfs-mode']));
    L.push('      x-padding-method: ' + yamlVal(xo['x-padding-method']));
    L.push('      x-padding-placement: ' + yamlVal(xo['x-padding-placement']));
    L.push('      x-padding-header: ' + yamlVal(xo['x-padding-header']));
    L.push('      x-padding-key: ' + yamlVal(xo['x-padding-key']));
  }
  return L.join('\n');
}
function generateClash(cfg, nodes) {
  const host = cfg.host;
  const path = '/' + cfg.path;
  const seen = new Set();
  // XHTTP 节点按 mihomo xhttp-opts 规范输出（含 x-padding 混淆参数），与 WS/Trojan 一并下发
  const proxies = nodes.map((n) => {
    const { user, srv, prt, name: baseName, isTrojan, tls } = parseShareNode(n, 0);
    let name = baseName;
    const xType = getParam(n, 'type') || 'ws';
    // 同名去重：同一名称（同一 IP 多协议节点或不同 IP 同名优选池）追加协议后缀并保证全局唯一——
    // 若后缀仍被占用（多个同名 IP 的 Trojan/XHTTP 节点），继续递增序号，避免 mihomo「duplicate name」校验失败
    if (seen.has(name)) {
      const suff = isTrojan ? 'T' : (xType === 'xhttp' ? 'X' : 'W');
      let cand = name + '·' + suff;
      let k = 2;
      while (seen.has(cand)) { cand = name + '·' + suff + k; k++; }
      name = cand;
    }
    seen.add(name);
    const base = {
      name, server: srv, port: prt, udp: true,
      ...(tls ? { tls: true, 'skip-cert-verify': true, servername: host, 'client-fingerprint': 'chrome', alpn: ['http/1.1'] } : {}),
      ...(cfg.ech && tls ? { 'tls-opts': { ech: { enable: true } } } : {})
    };
    if (isTrojan) {
      return { ...base, type: 'trojan', password: user, network: 'ws', 'ws-opts': { path, headers: { Host: host } } };
    }
    if (xType === 'xhttp') {
      // 从节点链接的 extra 参数恢复 x-padding 混淆配置（由 UUID 派生，与服务端一致）
      let xo = {};
      try { xo = JSON.parse(getParam(n, 'extra') || '{}'); } catch (e) { /* extra 解析失败则用空 */ }
      return {
        ...base, type: 'vless', uuid: user, network: 'xhttp',
        'xhttp-opts': {
          path,
          mode: 'stream-one',
          headers: { Host: host },
          'x-padding-obfs-mode': xo.xPaddingObfsMode !== undefined ? xo.xPaddingObfsMode : true,
          'x-padding-method': xo.xPaddingMethod || 'tokenish',
          'x-padding-placement': xo.xPaddingPlacement || 'queryInHeader',
          'x-padding-header': xo.xPaddingHeader || '',
          'x-padding-key': xo.xPaddingKey || ''
        }
      };
    }
    return { ...base, type: 'vless', uuid: user, network: 'ws', 'ws-opts': { path, headers: { Host: host } } };
  });
  // 节点排序：443端口优先（非标准端口如8443在mihomo下HTTPS握手易被GFW干扰，放后面避免默认选中）
  proxies.sort((a, b) => (a.port === 443 ? 0 : 1) - (b.port === 443 ? 0 : 1));
  const yaml = `# CFNext 订阅
test-url: 'http://www.gstatic.com/generate_204'
proxies:
${proxies.map(p => clashProxyYaml(p)).join('\n')}
${CLASH_TEMPLATE}
`;
  return yaml;
}
// ---------- Sing-box JSON ----------
function generateSingbox(cfg, nodes) {
  const host = cfg.host;
  const path = '/' + cfg.path;
  const outbounds = nodes.map((n, i) => {
    const { user, srv, prt, name, isTrojan, tls } = parseShareNode(n, i);
    const type = getParam(n, 'type') || 'ws';
    const tlsObj = tls ? { enabled: true, server_name: host, insecure: true, alpn: ['http/1.1'], utls: { enabled: true, fingerprint: 'chrome' } } : { enabled: false };
    const transport = type === 'xhttp' ? { type: 'xhttp', mode: 'stream-one', path } :
      { type: 'ws', path, headers: { Host: host } };
    if (isTrojan) {
      return {
        type: 'trojan', tag: name, server: srv, server_port: prt,
        password: user, tls: tlsObj,
        transport
      };
    }
    return {
      type: 'vless', tag: name, server: srv, server_port: prt,
      uuid: user, flow: '', packet_encoding: 'xudp',
      tls: tlsObj,
      transport
    };
  });
  const tags = outbounds.map(o => o.tag);
  const config = {
    log: { level: 'info' },
    dns: { servers: [{ address: '223.5.5.5' }, { address: '119.29.29.29' }] },
    inbounds: [{
      type: 'mixed', tag: 'mixed-in', listen: '127.0.0.1', listen_port: 2080
    }],
    outbounds: [
      ...outbounds,
      { type: 'direct', tag: 'direct' },
      { type: 'block', tag: 'block' },
      { type: 'selector', tag: '🚀 节点选择', outbounds: tags },
      { type: 'selector', tag: '🌐 全球直连', outbounds: ['direct'] },
      { type: 'selector', tag: '🐟 漏网之鱼', outbounds: ['🚀 节点选择', '🌐 全球直连'] }
    ],
    route: {
      rules: [
        { geoip: ['cn'], outbound: 'direct' },
        { outbound: '🐟 漏网之鱼' }
      ]
    }
  };
  return JSON.stringify(config, null, 2);
}
// ---------- Surge ----------
function generateSurge(cfg, nodes) {
  const host = cfg.host, path = '/' + cfg.path;
  const proxies = nodes.map((n, i) => {
    const { user, srv, prt, name, isTrojan, tls } = parseShareNode(n, i);
    const tlsPart = tls ? ', tls=true, skip-cert-verify=true, sni=' + host : ', tls=false';
    return isTrojan
      ? `${name} = trojan, ${srv}, ${prt}, password=${user}, ws=true, ws-path=${path}, ws-headers=Host:${host}${tlsPart}`
      : `${name} = vless, ${srv}, ${prt}, username=${user}, ws=true, ws-path=${path}, ws-headers=Host:${host}${tlsPart}`;
  });
  return `#!MANAGED-CONFIG
[General]
loglevel = notify
dns-server = 223.5.5.5, 119.29.29.29
[Proxy]
${proxies.join('\n')}
[Proxy Group]
🚀 节点选择 = select, ${proxies.map(p => p.split(' = ')[0]).join(', ')}
🌐 全球直连 = select, DIRECT
🐟 漏网之鱼 = select, 🚀 节点选择
[Rule]
GEOIP,CN,DIRECT
FINAL,🐟 漏网之鱼
`;
}
// ---------- Loon ----------
function generateLoon(cfg, nodes) {
  const host = cfg.host, path = '/' + cfg.path;
  const proxies = nodes.map((n, i) => {
    const { user, srv, prt, name, isTrojan, tls } = parseShareNode(n, i);
    const tlsPart = tls ? ', tls=true, skip-cert-verify=true, sni=' + host : ', tls=false';
    return isTrojan
      ? `${name} = trojan, ${srv}, ${prt}, password=${user}, ws=true, ws-path=${path}, ws-headers=Host:${host}${tlsPart}`
      : `${name} = vless, ${srv}, ${prt}, username=${user}, ws=true, ws-path=${path}, ws-headers=Host:${host}${tlsPart}`;
  });
  const names = proxies.map(p => p.split(' = ')[0]).join(', ');
  return `[General]
dns-server = 223.5.5.5, 119.29.29.29
[Proxy]
${proxies.join('\n')}
[Proxy Group]
🚀 节点选择 = select, ${names}
🌐 全球直连 = select, DIRECT
🐟 漏网之鱼 = select, ${names}
[Rule]
GEOIP,CN,DIRECT
FINAL,🐟 漏网之鱼
`;
}
// ---------- Quantumult X ----------
function generateQuanX(cfg, nodes) {
  const host = cfg.host, path = '/' + cfg.path;
  const servers = nodes.map((n, i) => {
    const { user, srv, prt, name } = parseShareNode(n, i);
    if (n.startsWith('trojan://')) {
      return `trojan=${srv}:${prt}, password=${user}, over-tls=true, tls-host=${host}, obfs=wss, obfs-host=${host}, obfs-uri=${path}, tls-verification=false, tag=${name}`;
    }
    const tls = (getParam(n, 'security') || 'tls') === 'tls';
    return `vless=${srv}:${prt}, method=none, password=${user}, obfs=${tls ? 'wss' : 'ws'}, obfs-host=${host}, obfs-uri=${path}${tls ? ', tls-verification=false, tls13=true' : ''}, tag=${name}`;
  });
  const names = nodes.map((n, i) => {
    const h = n.indexOf('#');
    if (h < 0) return `节点${i + 1}`;
    try { return decodeURIComponent(n.slice(h + 1)) || `节点${i + 1}`; } catch (e) { return `节点${i + 1}`; }
  }).join(', ');
  return `[general]
network_check_url=http://www.gstatic.com/generate_204
server_check_url=http://www.gstatic.com/generate_204
dns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com
[dns]
server=223.5.5.5
server=119.29.29.29
[server_local]
${servers.join('\n')}
[policy]
static=🚀 节点选择, ${names}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png
static=🌐 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png
static=🐟 漏网之鱼, 🚀 节点选择, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png
[filter_local]
geoip, cn, 🌐 全球直连
final, 🐟 漏网之鱼
`;
}
// 根据 UA 或指定格式生成订阅
async function generateSubscription(cfg, requestUrl, format, ua, colo) {
  const rc = Object.assign({}, cfg, { host: cfg.host || new URL(requestUrl).hostname });
  const mode = (cfg.optimizer && cfg.optimizer.subMode) || '';
  // 订阅模式决定节点来源：
  //   ''（关闭，默认）→ 仅用内置默认优选池限量下发（不解析自定义订阅的优选节点）
  //   custom          → 使用「优选节点」框内地址（支持汇聚，可增删）
  //   random          → 由 buildNodes 直接随机生成，此处不解析
  let resolved = [];
  // 仅当筛选明确「只要 IPv6」时才查询 AAAA 记录（默认 IPv4 模式直接跳过，节省 50% DNS 子请求，全局子请求控制在 15 次以内）
  const wantV6 = !!(cfg.filter && cfg.filter.ipType && cfg.filter.ipType.length === 1 && cfg.filter.ipType[0] === 'IPv6');
  // 内置 Cloudflare 优选 IP（实测可达的 Anycast 兜底池，始终随订阅下发；无明确地区，名称统一“优选IP-XX”）
  const builtinIPs = parseIPList(BUILTIN_PREFERRED_IPS.join('\n')).map(x => ({ ip: x.ip, port: x.port || 443, name: x.name || ('优选IP-' + String(BUILTIN_PREFERRED_IPS.indexOf(x) + 1).padStart(2, '0')) }));
  if (mode === 'custom') {
    // 自定义订阅（支持汇聚）：默认仅下发「优选节点」框内设置的节点（严格模式，不生成任何额外节点）；
    // 开启 subIncludeDefault 后追加默认域名池 + 默认 6 条地区源节点（含地区回退生成 + CF CIDR 补足），自定义与默认节点合并下发
    const incDefault = !!(cfg.optimizer && cfg.optimizer.subIncludeDefault);
    // 仅自定义模式（关闭追加）：输入框内容（域名/优选API/IP）原样下发，不做 CF 段过滤（用户自担可用性）；
    // 追加模式：常规来源 CF 段过滤（bestcf 地区优选池为社区中转节点，放行）+ 地区回退生成，自定义与默认节点合并下发
    resolved = await resolvePreferredDomains(cfg.preferredDomains || '', 100, 600, incDefault, incDefault, wantV6);
    if (incDefault) {
      // 默认域名池补充（CNAME 域名解析出可用 CF 优选 IP，保证可达性），自定义节点追加在后并去重
      const def = await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS, 40, 200, false, true, wantV6);
      const seen = new Set(def.map(x => x.ip));
      resolved = [...def, ...resolved.filter(x => !seen.has(x.ip))];
      if (!rc.optimizer) rc.optimizer = {};
      // 追加模式下按接近上限的数量补足（fillCount 决定 buildNodes 的 CF CIDR 随机补足 IP 数，默认 0 时强制大量补足），满足"下发全部节点"预期
      rc.optimizer.fillCount = Math.max(parseInt(rc.optimizer.fillCount) || 0, 800);
    }
  } else if (mode === '') {
    // 关闭（使用面板默认）：固定使用内置 6 条地区优选源（HK/TW/JP/SG/US/KR）下发各地区节点，
    // 与「优选节点」框解耦——框内自定义源仅用于「自定义订阅（支持汇聚）」模式；
    // 在线优选「加入优选」保存的 IP（preferredIPs）仍随订阅下发，不受影响；
    // 地区源为 bestcf 在线优选池（社区维护的可达中转 IP，可用率高，参考 edgetunnel/CFnew/TunnelBoard），
    // 不可达时按地区回退 CF CIDR 随机补足，另叠加 CNAME 域名池与内置官方优选 IP 兜底，保证开箱即用且数量充足
    resolved = await resolvePreferredDomains(DEFAULT_REGION_POOLS, 100, 600, true, true, wantV6);
    // CNAME 域名池补充（DNS 解析出的活跃 CF 优选 IP，与地区池去重合并）
    const defExtra = await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS, 40, 200, false, true, wantV6);
    const seenExtra = new Set(resolved.map(x => x.ip));
    resolved = [...resolved, ...defExtra.filter(x => !seenExtra.has(x.ip))];
    if (!rc.optimizer) rc.optimizer = {};
    // 提高默认补足量：地区源/域名解析不足时用可达 CF 段随机补齐到上限，保证订阅数量充足
    rc.optimizer.fillCount = Math.max(parseInt(rc.optimizer.fillCount) || 0, 1000);
  }
  // 去重下发：读取上次已下发 IP（KV issued），所有模式均生效（随机补足 / 随机优选 / 自定义解析）
  const skipSet = (cfg._skipIssued && cfg._skipIssued.size) ? cfg._skipIssued : null;
  if (resolved.length) {
    // 新 IP 优先排前（供客户端优先连接），已下发过的 IP 紧随其后作为数量补齐——
    // 采用 [...unissued, ...previouslyIssued] 策略，节点总量恒定，不再因去重塌陷
    let fresh = resolved;
    if (skipSet) {
      const unissued = resolved.filter(x => !skipSet.has(x.ip));
      const previouslyIssued = resolved.filter(x => skipSet.has(x.ip));
      fresh = [...unissued, ...previouslyIssued];
    }
    // 统一名称：域名池/数据源自动解析且无法确定地区的节点（"域名.xx-NN" 格式）改为“优选IP-XX”，避免长域名占据节点名；
    // 能确定地区的（如优选 API 源 /HK/ → “香港-XX”）、用户自定义名称（如 JP-A-147）与面板手动填写的名称保留不变
    const nameBase = (rc.preferredIPs || []).length;
    fresh = fresh.map((x, i) => (/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(x.name || '')) ? Object.assign({}, x, { name: '优选IP-' + String(nameBase + i + 1).padStart(2, '0') }) : x);
    rc.preferredIPs = [...(rc.preferredIPs || []), ...fresh];
  }
  // 内置静态优选池（CF 官方段）作为最后兜底：排在动态解析/地区优选节点之后，仅作数量补位，
  // 避免静态池占据下发名额（此前 Clash 300 上限时订阅被 300 个静态 IP 填满、动态可用节点被截断）
  if (!(mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault))) {
    rc.preferredIPs = [...(rc.preferredIPs || []), ...builtinIPs];
  }
  ua = (ua || '').toLowerCase();
  const forced = (format || '').toLowerCase();
  // 节点数上限（按 Workers / Pages 免费额度 10ms CPU 硬限校准；本地冷启动实测与原作者在 Workers 上的实测一致）：
  //   - 纯行格式（v2ray 通用链接）拼接近乎零成本 → 800 上限（冷启动 ~7ms 含一次性数据源解析，缓存命中后 ~2-3ms）；
  //   - 结构化格式（Clash/Singbox/Surge/Loon/QuanX）模板化生成实测 300 节点 ~6ms、400 节点 ~8ms，
  //     为保免费版稳定（含网络/KV/解析/面板路由开销）收紧到 300，避免 CPU 超限导致订阅 5xx；
  //   - 自定义订阅开启「追加内置及默认节点」时同样按格式安全上限执行；
  //   - 节点数量控制同样按格式安全上限钳制，确保免费版 10ms 内稳定
  const isHeavy = ['clash', 'singbox', 'sing-box', 'surge', 'loon', 'quanx', 'quantumultx'].includes(forced) || /clash|singbox|sing-box|surge|loon|quantumult/.test(ua);
  const SAFE_CAP = isHeavy ? 300 : 800;   // 免费版 10ms CPU 安全上限（结构化 300 / 行格式 800）
  let cap = SAFE_CAP;
  // 轮询机制关闭：忽略轮询去重、一次性下发全部节点（数量由数据源与 fillCount 决定，可能超出免费版 10ms CPU 预算需自行承担）；自定义节点数量限制仍生效
  if (cfg.polling === false) cap = 10000;
  // 节点数量控制（自定义限制）：开启后按设定数量精确下发，但钳制在格式安全上限内（防免费版 CPU 超限；默认关闭不限制）
  // 与轮询开关独立：轮询关闭时节点数量控制同样生效
  if (cfg.nodeLimit) {
    const n = parseInt(cfg.nodeLimitCount) || 0;
    if (n > 0) cap = Math.min(n, SAFE_CAP);
  }
  // 随机优选节点无地区标记，随机模式下忽略地区筛选（ipType/isp 仍生效）
  const fl = (mode === 'random') ? Object.assign({}, cfg.filter, { region: 'all' }) : cfg.filter;
  let nodes = filterNodes(buildNodes(rc, cap, skipSet), fl);
  // 节点数量控制：订阅模式关闭（默认）时「有多少发多少」，数据源不足不强制补足；
  // 仅自定义订阅模式按设定数量补足（该模式按地区源解析，数量不足时用优选IP补齐）
  if (cfg.nodeLimit && mode && nodes.length < cap) {
    const need = cap - nodes.length;
    const pool = randomIPsFromCidrs(REACHABLE_CIDRS, need * 3);
    const freshP = skipSet ? pool.filter(ip => !skipSet.has(ip)) : pool;
    const fillIPs = (freshP.length >= need) ? freshP : pool;
    let fi = 0;
    for (const ip of fillIPs) {
      if (nodes.length >= cap) break;
      fi++;
      nodes.push(vlessNode(rc, ip, 443, '优选IP-' + String(fi).padStart(3, '0')));
    }
  }
  // 严格封顶：多协议膨胀可能越过 cap 一个 IP（3 条），统一截断到上限；节点数量控制开启时同样按设定值精确截断
  if (nodes.length > cap) nodes.length = cap;
  // 收集本次下发的所有 IP 型节点地址（排除域名），记录到 KV issued 供下次去重
  const issuedIPs = [];
  const seenIssued = new Set();
  for (const n of nodes) {
    try {
      const { host } = parseNodeServer(n);
      if (isValidIp(host) && !seenIssued.has(host)) { seenIssued.add(host); issuedIPs.push(host); }
    } catch (e) { /* 忽略解析失败 */ }
  }
  let type, body;
  if (forced === 'clash') { type = 'text/yaml'; body = generateClash(rc, nodes); }
  else if (forced === 'singbox' || forced === 'sing-box') { type = 'application/json'; body = generateSingbox(rc, nodes); }
  else if (forced === 'surge') { type = 'text/plain'; body = generateSurge(rc, nodes); }
  else if (forced === 'loon') { type = 'text/plain'; body = generateLoon(rc, nodes); }
  else if (forced === 'quanx' || forced === 'quantumultx') { type = 'text/plain'; body = generateQuanX(rc, nodes); }
  else if (forced === 'v2ray' || forced === 'v2rayn' || forced === 'shadowrocket' || forced === 'nekoray' || forced === 'stash') {
    type = 'text/plain'; body = nodes.join('\n');
  }
  // UA 自动识别
  else if (ua.includes('clash') || ua.includes('stash')) { type = 'text/yaml'; body = generateClash(rc, nodes); }
  else if (ua.includes('sing-box')) { type = 'application/json'; body = generateSingbox(rc, nodes); }
  else if (ua.includes('surge')) { type = 'text/plain'; body = generateSurge(rc, nodes); }
  else if (ua.includes('loon')) { type = 'text/plain'; body = generateLoon(rc, nodes); }
  else if (ua.includes('quantumult')) { type = 'text/plain'; body = generateQuanX(rc, nodes); }
  else { type = 'text/plain'; body = nodes.join('\n'); }
  return { type, body, issued: issuedIPs };
}
// ---------------------------------------------------------------------------
// 管理面板 HTML（单页应用）
// ---------------------------------------------------------------------------
const PANEL_HTML = String.raw`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · 管理面板</title>
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
:root{--bg:#0d1117;--card:#161b22;--card2:#1c2230;--line:#2d333b;--txt:#e6edf3;--dim:#8b949e;--acc:#4f9dff;--ok:#3fb950;--warn:#d29922;--err:#f85149}
[data-theme='light']{--bg:#f6f8fa;--card:#ffffff;--card2:#f0f3f6;--line:#d0d7de;--txt:#1f2328;--dim:#656d76;--acc:#0969da;--ok:#1a7f37;--warn:#9a6700;--err:#cf222e}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--txt);font-family:"PingFang SC","Microsoft YaHei",system-ui,sans-serif;font-size:14px;line-height:1.6}
a{color:var(--acc);text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:16px}
header{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--line);margin-bottom:16px}
.logo{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,#4f9dff,#6f5bff);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:13px;letter-spacing:-0.5px}
.logo span{transform:rotate(-12deg)}
header h1{font-size:18px;font-weight:700}
header .sub{color:var(--dim);font-size:12px}
nav{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px}
nav button{background:var(--card);color:var(--dim);border:1px solid var(--line);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;transition:.15s}
nav button:hover{color:var(--txt);border-color:var(--acc)}
nav button.on{background:var(--acc);color:#fff;border-color:var(--acc);font-weight:600}
.tab{display:none}
.tab.on{display:block}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;margin-bottom:14px}
.card h2{font-size:15px;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h2 .tag{font-size:11px;color:var(--dim);font-weight:400}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.proto-row{display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--card2);border:1px solid var(--line);border-radius:10px;margin-bottom:8px}
.proto-row span{font-size:13px}
.proto-row .switch{margin:0}
.chk-row{display:flex;flex-wrap:wrap;gap:10px}
.chk-groups{display:flex;align-items:center;gap:8px 16px;flex-wrap:wrap}
.chk-group{display:inline-flex;align-items:center;gap:7px}
.chk-group .chk-gt{font-size:13px;color:var(--dim);white-space:nowrap}
.chk-group .chk{display:inline-flex;align-items:center;gap:4px;font-size:14px;color:var(--txt);cursor:pointer;white-space:nowrap}
.chk-group .chk input{width:auto;height:auto;accent-color:var(--acc);margin:0;padding:0}
.chk-group .chk:has(input:checked){color:var(--acc);font-weight:600}
@media(max-width:760px){.grid,.grid3{grid-template-columns:1fr}}
.field{margin-bottom:12px}
.field label{display:block;font-size:12px;color:var(--dim);margin-bottom:5px}
.field input,.field select,.field textarea{width:100%;background:var(--card2);border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:9px 11px;font-size:13px;outline:none}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--acc)}
.field textarea{resize:vertical;font-family:ui-monospace,Consolas,monospace;font-size:12px}
.field .hint{font-size:11px;color:var(--dim);margin-top:4px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.switch{position:relative;width:44px;height:24px;display:inline-block;flex:none}
.switch input{opacity:0;width:0;height:0}
.switch .sl{position:absolute;inset:0;background:var(--card2);border:1px solid var(--line);border-radius:12px;transition:.15s;cursor:pointer}
.switch .sl:before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:var(--dim);border-radius:50%;transition:.15s}
.switch input:checked + .sl{background:var(--acc);border-color:var(--acc)}
.switch input:checked + .sl:before{transform:translateX(20px);background:#fff}
.btn{background:var(--card2);border:1px solid var(--line);color:var(--txt);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;transition:.15s}
.btn:hover{border-color:var(--acc);color:var(--acc)}
.btn.primary{background:var(--acc);border-color:var(--acc);color:#fff;font-weight:600}
.btn.danger{background:var(--err);border-color:var(--err);color:#fff;font-weight:600}
.btn.danger:hover{background:#c62828;border-color:#c62828;color:#fff}
.btn.sm{padding:5px 10px;font-size:12px}
.btn.dirty{outline:2px solid var(--warn)}
.msg{padding:10px 14px;border-radius:8px;margin:10px 0;font-size:13px;display:none}
.msg.show{display:block}
.msg.info{background:rgba(79,157,255,.12);color:var(--acc);border:1px solid rgba(79,157,255,.35)}
.msg.ok{background:rgba(63,185,80,.12);color:var(--ok);border:1px solid rgba(63,185,80,.35)}
.msg.err{background:rgba(248,81,73,.12);color:var(--err);border:1px solid rgba(248,81,73,.35)}
table{width:100%;border-collapse:collapse;font-size:13px}
th,td{padding:9px 10px;text-align:left;border-bottom:1px solid var(--line)}
th{color:var(--dim);font-weight:500;font-size:12px}
td .ip{font-family:ui-monospace,Consolas,monospace}
.badge{display:inline-block;padding:2px 9px;border-radius:20px;font-size:11px;background:var(--card2);border:1px solid var(--line)}
.badge.g{color:var(--ok);border-color:var(--ok)}
.badge.r{color:var(--err);border-color:var(--err)}
.kv{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim)}
.kv .v{font-family:ui-monospace,Consolas,monospace;word-break:break-all;text-align:right;max-width:70%}
.toast{position:fixed;top:16px;right:16px;z-index:99;background:var(--card2);border:1px solid var(--line);border-left:4px solid var(--acc);padding:11px 18px;border-radius:8px;font-size:13px;box-shadow:0 6px 24px rgba(0,0,0,.4);transform:translateX(120%);transition:.25s}
.toast.show{transform:translateX(0)}
.toast.ok{border-left-color:var(--ok)}
.toast.err{border-left-color:var(--err)}
.fbar{position:fixed;bottom:18px;right:18px;display:flex;flex-direction:column;gap:8px;z-index:50}
.fbar .btn{box-shadow:0 6px 20px rgba(0,0,0,.45)}
.loading{text-align:center;color:var(--dim);padding:40px}
pre.code{background:#0b0e14;border:1px solid var(--line);border-radius:8px;padding:12px;overflow:auto;font-size:11.5px;line-height:1.5;max-height:340px;font-family:ui-monospace,Consolas,monospace}
.center{text-align:center}
.mt{margin-top:14px}
#qrWrap{display:none;text-align:center;margin-top:10px}
#qrWrap canvas,#qrWrap img{margin:0 auto}
.qrbox{background:#fff;display:inline-block;padding:10px;border-radius:8px;margin-top:8px}
code.hl{background:var(--card2);padding:2px 6px;border-radius:5px;font-family:ui-monospace,Consolas,monospace;font-size:12px}
</style>
</head>
<body>
<div class="wrap">
<header>
  <div class="logo"><span>CF</span></div>
  <div>
    <h1>CFNext</h1>
    <div class="sub">Cloudflare 代理管理面板 · 全新编写</div>
  </div>
  <div style="margin-left:auto;font-size:12px;color:var(--dim);display:flex;align-items:center;gap:8px"><button id='themeBtn' class='btn sm' onclick='toggleTheme()' style='font-size:14px;padding:2px 8px'>🌙</button><button id="hdrInfo" class="btn sm" onclick="checkUpdate()" title="点击检测 GitHub 仓库更新" style="font-size:12px;padding:2px 8px">加载中…</button></div>
</header>
<nav id="nav">
  <button data-tab="overview" class="on">总览</button>
  <button data-tab="nodes">节点配置</button>
  <button data-tab="pick">优选器</button>
  <button data-tab="help">关于项目</button>
</nav>
<!-- 总览 -->
<div class="tab on" id="tab-overview">
  <div class="card">
    <h2>快速开始</h2>
    <div id="wdwarn" style="display:none;background:rgba(242,85,73,.12);border:1px solid rgba(242,85,73,.4);color:#ff9c98;border-radius:8px;padding:8px 12px;font-size:12px;margin-bottom:10px">检测到当前通过 *.workers.dev 访问。该域名大陆直连常被阻断，下发的节点 SNI 取自访问域名，会导致客户端真连接延时全部 -1。请到 Cloudflare Workers 绑定自定义域名后，用自定义域名访问面板与订阅。</div>
    <div class="grid3">
      <div class="card" style="margin:0">
        <h2>1. 免配置使用（小白专属）</h2>
        <p style="color:var(--dim);font-size:13px">部署即可用，直接点击下方复制订阅链接导入客户端。Clash Verge / V2rayN / V2rayNG / SingBox 等客户端均可直接使用（Trojan 节点在 Clash Verge 自动携带 SNI 可用；V2rayNG 无需开启「本地 DNS」）。</p>
      </div>
      <div class="card" style="margin:0">
        <h2>2. 配置协议使用</h2>
        <p style="color:var(--dim);font-size:13px">根据需要在节点配置选项中配置 VLESS / Trojan / XHTTP 协议、节点数量控制、TLS、ECH，保存后生效。Trojan 已支持 Clash Verge / Mihomo；XHTTP 需绑定自定义域名（须开启 gRPC）；V2rayNG 已内置远端 DNS 支持（UDP→DoH），无需开启「本地 DNS」。</p>
      </div>
      <div class="card" style="margin:0">
        <h2>3. 优选方式使用</h2>
        <p style="color:var(--dim);font-size:13px">在优选器选项中将订阅模式改为【自定义订阅（支持汇聚）】或【随机优选模式（官方接口）】进行使用，【自定义订阅（支持汇聚）】模式内置 6 个在线源（可根据需求增删），在线优选需开启【自定义订阅（支持汇聚）】选项后方可使用。</p>
      </div>
    </div>
  </div>
  <div class="card">
    <h2>地区与筛选</h2>
    <div class="grid">
      <div class="field" style="display:flex;flex-direction:column">
        <label>地区选择</label>
        <select id="fl-region" style="max-width:280px" onchange="markDirty();makeSub(false)">
          <option value="all">全部节点</option>
          <option value="HK">HK 香港</option>
          <option value="TW">TW 台湾</option>
          <option value="US">US 美国</option>
          <option value="SG">SG 新加坡</option>
          <option value="JP">JP 日本</option>
          <option value="KR">KR 韩国</option>
          <option value="DE">DE 德国</option>
        </select>
        <p class="hint" style="color:var(--dim);font-size:12px;margin-top:auto;padding-top:5px">节点名称含地区标记（HK/香港、TW/台湾、US/美国…）即仅下发该地区</p>
      </div>
      <div class="field" style="display:flex;flex-direction:column">
        <label>筛选设置</label>
        <div class="chk-groups">
          <div class="chk-group">
            <span class="chk-gt">IP类型</span>
            <label class="chk"><input type="checkbox" id="fl-ipv4" checked onchange="markDirty()"> IPv4</label>
            <label class="chk"><input type="checkbox" id="fl-ipv6" checked onchange="markDirty()"> IPv6</label>
          </div>
          <div class="chk-group">
            <span class="chk-gt">运营商</span>
            <label class="chk"><input type="checkbox" id="fl-isp-mobile" checked onchange="markDirty()"> 移动</label>
            <label class="chk"><input type="checkbox" id="fl-isp-unicom" checked onchange="markDirty()"> 联通</label>
            <label class="chk"><input type="checkbox" id="fl-isp-telecom" checked onchange="markDirty()"> 电信</label>
          </div>
        </div>
        <p class="hint" style="color:var(--dim);font-size:12px;margin-top:auto;padding-top:5px">取消勾选即过滤；IP 类型按地址、运营商按名称匹配</p>
      </div>
    </div>
  </div>
  <div class="card">
    <h2>订阅地址</h2>
    <div class="field">
      <label>客户端格式</label>
      <select id="subFmt" onchange="makeSub(false)">
        <option value="auto">自动识别（UA）</option>
        <option value="clash">Clash YAML</option>
        <option value="singbox">Sing-box JSON</option>
        <option value="surge">Surge</option>
        <option value="loon">Loon</option>
        <option value="quanx">Quantumult X</option>
        <option value="v2ray">v2ray / 通用链接</option>
      </select>
    </div>
    <div class="field">
      <label>订阅链接</label>
      <div class="row">
        <input id="subUrl" readonly style="flex:1">
        <button class="btn" onclick="copySub()">复制</button>
        <button class="btn" onclick="showQRCode()">二维码</button>
        <button class="btn primary" onclick="downloadSub()">下载</button>
      </div>
      <div id="qrWrap"></div>
    </div>
  </div>
  <div class="card">
    <h2>运行状态</h2>
    <div id="statusBox"><div class="loading">加载中…</div></div>
  </div>
</div>
<!-- 节点配置 -->
<div class="tab" id="tab-nodes">
  <div class="card">
    <h2>基础配置</h2>
    <div class="grid">
      <div class="field"><label>面板路径</label><input id="f-path" placeholder="留空使用 UUID"></div>
      <div class="field"><label>管理密码（留空无需登录）</label><input id="f-admin" type="password" placeholder="可选"></div>
    </div>
    <div class="grid">
      <div class="field"><label>VLESS UUID</label><input id="f-uuid" placeholder="留空自动生成"></div>
      <div class="field"><label>自定义 SNI / Host（留空用 Worker 域名）</label><input id="f-host" placeholder="your.domain.com"></div>
    </div>
    <div class="hint" style="margin:0;font-size:11px;color:var(--dim)">UUID 为 VLESS 用户认证 ID；面板路径为访问面板的 URL 路径，留空时与 UUID 相同。</div>
  </div>
  <div class="card">
    <h2>节点配置</h2>
    <div class="grid">
      <div class="field"><label>ALPN（留空由客户端协商）</label><select id="f-alpn">
        <option value="">自动</option>
        <option value="h3">h3</option>
        <option value="h2">h2</option>
        <option value="http/1.1">http/1.1</option>
        <option value="h3,h2">h3,h2</option>
        <option value="h2,http/1.1">h2,http/1.1</option>
        <option value="h3,h2,http/1.1">h3,h2,http/1.1</option>
      </select></div>
      <div class="field"><label>TLS 控制（开启仅下发 TLS 端口节点）</label>
        <select id="f-tlsOnly">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
      </div>
    </div>
    <div class="grid" style="margin-bottom:0">
      <div class="field" style="margin-bottom:0"><label>节点数量控制（开启后限制下发节点总数）</label>
        <select id="f-nodeLimit" onchange="onNodeLimit()">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
      </div>
      <div class="field" id="f-nodeLimitWrap" style="margin-bottom:0;display:none"><label>下发节点数量</label>
        <input id="f-nodeLimitCount" type="number" min="1" max="800" value="100">
        <p class="hint">开启后最多下发该数量的节点；免费版 10ms CPU 硬限内，结构化格式（Clash/Singbox/Surge 等）上限 300、行格式（v2ray）上限 800，超出部分自动钳制</p>
      </div>
      <div class="field" style="margin-bottom:0"><label>轮询机制（开启后每次更新订阅下发不同节点）</label>
        <select id="f-polling" onchange="markDirty()">
          <option value="true">开启</option>
          <option value="false">关闭</option>
        </select>
        <p class="hint">开启：每次更新订阅轮询下发新节点（默认上限 Clash 300 / V2rayN 800）；关闭：不轮询换新、一次性下发全部节点（节点数量控制不受影响，开启后仍按设定数量限制）</p>
      </div>
    </div>
  </div>
  <div class="card">
    <h2>ECH 配置</h2>
    <div class="grid">
      <div class="field" style="margin-bottom:0"><label>ECH 加密</label>
        <select id="f-ech">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
        <p class="hint">关闭使用默认 ECH 配置，开启 ECH 加密 TLS 握手隐藏 SNI</p>
      </div>
      <div class="field" style="margin-bottom:0"><label>自定义 ECH 域名</label>
        <input id="f-echHost" placeholder="cloudflare-ech.com">
        <p class="hint">ECH 域名留空用默认</p>
      </div>
    </div>
    <div class="grid">
      <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS</label>
        <input id="f-echDns" placeholder="https://223.5.5.5/dns-query">
        <p class="hint">关闭用客户端默认 DNS，开启自定义 DoH 获取 ECH 配置；地址留空用默认</p>
      </div>
      <div class="field" style="margin-bottom:0"></div>
    </div>
  </div>
  <div class="card">
    <h2>协议开关</h2>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableVless"><span class="sl"></span></label><span>启用 VLESS 协议（默认开启）</span></div>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableTrojan"><span class="sl"></span></label><span>启用 Trojan 协议（已支持Clash Verge）</span></div>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableXhttp"><span class="sl"></span></label><span>启用 xhttp 协议（须绑定域名并开启gRPC）</span></div>
    <div class="field" style="margin-top:10px"><label>Trojan 密码（留空用 UUID）</label><input id="f-trojanPassword" placeholder="Trojan 密码"></div>
  </div>
  <div class="card">
    <h2>落地与出站</h2>
    <div class="grid">
      <div class="field"><label>反代/落地 IP（留空使用内置地区反代，填写后优先，格式 host 或 host:port）</label><input id="f-proxyIP" placeholder="留空使用内置中继"></div>
      <div class="field"><label>出站代理（可选，socks5:// / http:// 或 host:port）</label><input id="f-outboundProxy" placeholder="socks5://user:pass@1.2.3.4:1080"></div>
    </div>
    <div class="field"><label>出站方式</label><select id="f-outboundMode">
      <option value="">默认（优先代理，失败直连）</option>
      <option value="no">直连优先（no）</option>
      <option value="only">仅走代理（only）</option>
    </select></div>
  </div>
</div>
<!-- 优选器 -->
<div class="tab" id="tab-pick">
  <div class="card">
    <h2>在线优选</h2>
    <div class="field">
      <label>数据源</label>
      <select id="o-source">
        <option value="wetest_v4">微测网 IPv4</option>
        <option value="wetest_v6">微测网 IPv6</option>
        <option value="bestcf">优选 IP 列表</option>
        <option value="hostmonit">HostMonit 优选</option>
        <option value="cidr">内置 CF 地址段</option>
        <option value="custom">自定义 URL</option>
      </select>
    </div>
    <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input id="o-sourceURL" placeholder="https://.../ip.txt"></div>
    <div class="grid3">
      <div class="field" style="grid-column:span 3"><label>测速端口（本地→目标测速）</label>
        <select id="o-portSel" onchange="onPortSel()">
          <optgroup label="HTTPS">
            <option value="443">443</option>
            <option value="2053">2053</option>
            <option value="2083">2083</option>
            <option value="2087">2087</option>
            <option value="2096">2096</option>
            <option value="8443">8443</option>
          </optgroup>
          <optgroup label="HTTP">
            <option value="80">80</option>
            <option value="8080">8080</option>
            <option value="8880">8880</option>
            <option value="2052">2052</option>
            <option value="2082">2082</option>
            <option value="2086">2086</option>
            <option value="2095">2095</option>
          </optgroup>
          <option value="custom">自定义…</option>
        </select>
        <input id="o-portCustom" style="display:none;margin-top:8px" placeholder="输入端口号">
      </div>
      <div class="field"><label>并发线程（1-50）</label><input id="o-threads" value="5"></div>
      <div class="field"><label>候选数量</label><input id="o-count" value="20"></div>
      <div class="field"><label>随机补足数量（0 关闭）</label><input id="o-fillCount" value="0"></div>
    </div>
    <div class="row">
      <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
      <span style="font-size:13px">不足时补充随机 Cloudflare IP</span>
      <button class="btn primary" onclick="runPick()">开始优选</button>
      <button class="btn" onclick="addAllBest()">全部加入最优</button>
    </div>
    <div class="msg" id="oMsg"></div>
  </div>
  <div class="card">
    <h2>测速结果</h2>
    <table><thead><tr><th>IP:端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
    <tbody id="oTableBody"></tbody></table>
  </div>
  <div class="card">
    <h2>优选节点</h2>
    <div class="field">
      <label>订阅模式</label>
      <div class="row">
        <select id="o-subMode" onchange="onSubMode()" style="flex:1">
          <option value="">关闭（使用面板默认）</option>
          <option value="custom">自定义订阅（支持汇聚）</option>
          <option value="random">随机优选模式（官方接口）</option>
        </select>
        <select id="o-subIncludeDefault" style="flex:1">
          <option value="0">关闭（仅自定义节点）</option>
          <option value="1">开启（追加内置及默认节点）</option>
        </select>
      </div>
      <div class="hint">订阅模式：选择生成优选节点的方式；选择「自定义订阅（支持汇聚）」时，右侧开关控制是否同时下发内置优选池及默认 6 条地区源节点——关闭仅下发自定义节点，开启则默认地区与自定义节点合并下发</div>
    </div>
    <div class="field" id="sm-custom">
      <label>优选节点（域名 / 优选API / IP，每行一个，IP 格式 IP:端口#名称）</label>
      <textarea id="f-preferred" rows="5" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
      <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析下发；点击上方测速结果「加入优选」自动填入 IP；保存用右上「保存全部」按钮</div>
      <button class="btn sm" style="margin-top:6px" onclick="fetchDomains()">拉取微测网优选域名</button>
    </div>
    <div class="field" id="sm-random" style="display:none">
      <label>随机优选数量（1-99）</label>
      <input id="o-subRandomCount" value="16" type="number" min="1" max="99">
      <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点下发（不经域名解析）</div>
    </div>
  </div>
</div>
<!-- 关于项目 -->
<div class="tab" id="tab-help">
  <div class="card">
    <h2>相关链接</h2>
    <p style="color:var(--dim);font-size:13px">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">https://www.youtube.com/@PAI_CN</a></p>
    <p style="color:var(--dim);font-size:13px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">https://t.me/SZ_PAI</a></p>
  </div>
  <div class="card">
    <h2>特别鸣谢</h2>
    <p style="color:var(--dim);font-size:13px">本面板为全新独立编写，功能与接口参考以下开源项目：</p>
    <table>
      <tr><th>参考仓库</th><th>地址</th></tr>
      <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">https://github.com/cmliu/edgetunnel</a></td></tr>
      <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">https://github.com/zizifn/edgetunnel</a></td></tr>
      <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">https://github.com/6Kmfi6HP/EDtunnel</a></td></tr>
      <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">https://github.com/IonRh/Cloudflare-BestIP</a></td></tr>
    </table>
  </div>
  <div class="card">
    <h2>调用 API 接口</h2>
    <table>
      <tr><th colspan="2" style="text-align:left">优选测速数据源</th></tr>
      <tr><td>微测网 IPv4 优选</td><td>https://www.wetest.vip/page/cloudflare/address_v4.html</td></tr>
      <tr><td>微测网 IPv6 优选</td><td>https://www.wetest.vip/page/cloudflare/address_v6.html</td></tr>
      <tr><td>微测网 优选域名</td><td>https://www.wetest.vip/page/cloudflare/cname.html</td></tr>
      <tr><td>优选 IP 列表</td><td>https://cf.090227.xyz/ip.164746.xyz</td></tr>
      <tr><td>HostMonit 优选</td><td>https://stock.hostmonit.com/CloudFlareYes</td></tr>
      <tr><td>优选 API（bestcf 随机地区）</td><td>https://bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
      <tr><td>节点测速地址</td><td>https://www.gstatic.com/generate_204 / https://www.google.com/generate_204</td></tr>
      <tr><th colspan="2" style="text-align:left">DoH 解析（UDP→DoH 转换 / 节点解析）</th></tr>
      <tr><td>DoH 解析（腾讯）</td><td>https://doh.pub/dns-query</td></tr>
      <tr><td>DoH 解析（阿里）</td><td>https://dns.alidns.com/resolve（/dns-query）</td></tr>
      <tr><td>DoH 解析（Cloudflare）</td><td>https://1.1.1.1/dns-query / https://cloudflare-dns.com/dns-query</td></tr>
      <tr><td>DoH 解析（Google）</td><td>https://8.8.8.8/dns-query / https://dns.google/dns-query</td></tr>
      <tr><td>公共 DNS（引导）</td><td>https://223.5.5.5/dns-query</td></tr>
      <tr><th colspan="2" style="text-align:left">Clash 规则集源（订阅模板）</th></tr>
      <tr><td>666OS Mihomo 规则集</td><td>https://github.com/666OS/rules/raw/release/mihomo/</td></tr>
      <tr><td>DustinWin 媒体规则集</td><td>https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/</td></tr>
      <tr><td>AWAvenue 广告拦截规则</td><td>https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/</td></tr>
      <tr><td>GitHub 分流规则（kelee one）</td><td>https://rule.kelee.one/Clash/GitHub.yaml</td></tr>
      <tr><th colspan="2" style="text-align:left">面板与资源</th></tr>
      <tr><td>zashboard 管理面板</td><td>https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip</td></tr>
      <tr><td>Qure 图标集</td><td>https://github.com/Koolson/Qure/</td></tr>
      <tr><td>二维码生成库</td><td>https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
    </table>
  </div>
</div>
</div>
<div class="fbar"><button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
<button class="btn primary" id="saveBtn" onclick="saveAll()">保存全部</button></div>
<div class="toast" id="toast"></div>
<script>
var APIPATH = location.pathname;
var CFG = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
var toastTimer = null;
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
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){ toast('已复制', 'ok'); }, function(){ fallbackCopy(t); });
  } else fallbackCopy(t);
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('已复制', 'ok'); } catch(e) { toast('复制失败，请手动复制', 'err'); }
  document.body.removeChild(ta);
}
function copySub(){ copyText($('subUrl').value); }
function markDirty(){ $('saveBtn').classList.add('dirty'); }
function switchTab(t){
  document.querySelectorAll('#nav button').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-tab') === t);
  });
  document.querySelectorAll('.tab').forEach(function(x){
    x.classList.toggle('on', x.id === ('tab-' + t));
  });
  if(t === 'overview') makeSub(false);
}
document.querySelectorAll('#nav button').forEach(function(b){
  b.addEventListener('click', function(){ switchTab(b.getAttribute('data-tab')); });
});
document.querySelectorAll('input,select,textarea').forEach(function(el){
  if(el.id && el.id.length >= 2 && el.id.charAt(1) === '-' && (el.id.charAt(0) === 'f' || el.id.charAt(0) === 'o')){
    el.addEventListener('change', markDirty);
  }
});
$('saveBtn').addEventListener('click', saveAll);
$('o-source').addEventListener('change', function(){
  var v = $('o-source').value;
  $('o-customWrap').style.display = v === 'custom' ? '' : 'none';
  markDirty();
});
function onPortSel(){
  $('o-portCustom').style.display = $('o-portSel').value === 'custom' ? '' : 'none';
  markDirty();
}
function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) { var w = $('wdwarn'); if (w) w.style.display = ''; }
  api('status').then(function(r){
    if(r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if(r && r.ok){ CFG = r.data; fillForm(); renderPreferred(); renderHeader(); makeSub(false); }
    else if(r && r.status === 403){ location.href = '/login?next=' + encodeURIComponent(APIPATH); }
    else { toast('无法连接服务器', 'err'); }
  }).catch(function(){ toast('无法连接服务器', 'err'); });
}
function renderHeader(){
  if(!CFG) return;
  $('hdrInfo').textContent = '当前版本：' + (CFG.version || '');
}
// 右上角版本号按钮：点击检测 GitHub 仓库（PAICNI/CFNext）最新版本
function checkUpdate(){
  var btn = $('hdrInfo');
  if(btn.getAttribute('data-checking') === '1') return;
  btn.setAttribute('data-checking', '1');
  var old = btn.textContent;
  btn.textContent = '检测中…';
  api('check-update').then(function(r){
    btn.removeAttribute('data-checking');
    if(!r || !r.ok){ toast((r && r.msg) || '检测失败', 'err'); btn.textContent = old; return; }
    if(r.changed){
      copyCode(r.code || '');
      toast('检测到新版本，已复制代码到剪贴板', 'ok');
      btn.textContent = '检测到新版本 ' + (r.latest || '');
    } else {
      toast('当前为最新版本（' + (r.current || '') + '）', 'ok');
      btn.textContent = old;
    }
  }).catch(function(){
    btn.removeAttribute('data-checking');
    toast('检测失败', 'err');
    btn.textContent = old;
  });
}
// 复制远端最新代码到剪贴板（提示由 checkUpdate 统一给出，这里不再重复弹"已复制"）
function copyCode(t){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){}, function(){ fallbackCopy(t); });
  } else fallbackCopy(t);
}
function renderStatus(d){
  var h = '';
  h += '<div class="kv"><span class="k">Worker 地址</span><span class="v">' + (d.host || '') + '</span></div>';
  h += '<div class="kv"><span class="k">面板路径</span><span class="v">' + (d.path || '') + '</span></div>';
  h += '<div class="kv"><span class="k">面板入口</span><span class="v">' + location.origin + '/' + (d.path || '') + '</span></div>';
  h += '<div class="kv"><span class="k">接入节点</span><span class="v">' + (d.host ? '正常' : '未知') + '</span></div>';
  $('statusBox').innerHTML = h;
}
function onNodeLimit(){
  var on = $('f-nodeLimit') && $('f-nodeLimit').value === 'true';
  if($('f-nodeLimitWrap')) $('f-nodeLimitWrap').style.display = on ? '' : 'none';
}
function fillForm(){
  if(!CFG) return;
  $('f-uuid').value = CFG.uuid || '';
  $('f-path').value = CFG.path || '';
  $('f-admin').value = CFG.admin || '';
  $('f-host').value = CFG.host || '';
  $('f-alpn').value = CFG.alpn || '';
  $('f-ech').value = CFG.ech ? 'true' : 'false';
  $('f-echHost').value = CFG.echHost || '';
  $('f-echDns').value = CFG.echDns || '';
  $('f-tlsOnly').value = CFG.tlsOnly ? 'true' : 'false';
  $('f-nodeLimit').value = CFG.nodeLimit ? 'true' : 'false';
  $('f-nodeLimitCount').value = CFG.nodeLimitCount || 100;
  $('f-polling').value = CFG.polling === false ? 'false' : 'true';
  onNodeLimit();
  $('f-enableVless').checked = CFG.enableVless !== false;
  $('f-enableTrojan').checked = !!CFG.enableTrojan;
  $('f-trojanPassword').value = CFG.trojanPassword || '';
  $('f-enableXhttp').checked = !!CFG.enableXhttp;
  $('f-proxyIP').value = CFG.proxyIP || '';
  $('f-outboundProxy').value = CFG.outboundProxy || '';
  $('f-outboundMode').value = CFG.outboundMode || '';
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(String(o.port || 443));
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fillCount').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-subMode').value = o.subMode || '';
  $('o-subIncludeDefault').value = (o.subIncludeDefault ? '1' : '0');
  $('o-subRandomCount').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
  var fl = CFG.filter || {};
  $('fl-region').value = fl.region || 'all';
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ipv4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ipv6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-mobile').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-unicom').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-telecom').checked = isp.indexOf('电信') >= 0;
}
function onSubMode(){
  var m = $('o-subMode') ? $('o-subMode').value : '';
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-portSel');
  var found = Array.prototype.some.call(sel.options, function(o){ return o.value === pv; });
  if (found) {
    sel.value = pv;
    $('o-portCustom').style.display = 'none';
  } else {
    sel.value = 'custom';
    $('o-portCustom').value = pv;
    $('o-portCustom').style.display = '';
  }
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if(s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function collectForm(){
  if(!CFG) return null;
  return {
    uuid: $('f-uuid').value.trim(),
    path: $('f-path').value.trim() || $('f-uuid').value.trim(),
    admin: $('f-admin').value,
    host: $('f-host').value.trim(),
    alpn: $('f-alpn').value,
    ech: $('f-ech').value === 'true',
    echHost: $('f-echHost').value.trim() || 'cloudflare-ech.com',
    echDns: $('f-echDns').value.trim(),
    tlsOnly: $('f-tlsOnly').value === 'true',
    nodeLimit: $('f-nodeLimit').value === 'true',
    nodeLimitCount: parseInt($('f-nodeLimitCount').value) || 100,
    polling: $('f-polling').value !== 'false',
    enableVless: $('f-enableVless').checked,
    enableTrojan: $('f-enableTrojan').checked,
    trojanPassword: $('f-trojanPassword').value,
    enableXhttp: $('f-enableXhttp').checked,
    proxyIP: $('f-proxyIP').value.trim(),
    outboundProxy: $('f-outboundProxy').value.trim(),
    outboundMode: $('f-outboundMode').value,
    preferredDomains: (function(){
      var d = [];
      String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ if (!parseIps(s).length) d.push(s); });
      return d.join('\n');
    })(),
    preferredIPs: (function(){
      var a = [], seen = {};
      String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ var p = parseIps(s); if (p.length) { var k = p[0].ip + ':' + (p[0].port || 443); if (seen[k]) return; seen[k] = 1; a.push(p[0]); } });
      return a;
    })(),
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: (function(){
        var p = $('o-portSel').value;
        if (p === 'custom') p = $('o-portCustom').value;
        return parseInt(p) || 443;
      })(),
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fillCount').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-subMode').value,
      subRandomCount: parseInt($('o-subRandomCount').value) || 16,
      subIncludeDefault: $('o-subIncludeDefault').value === '1'
    },
    filter: {
      region: $('fl-region').value,
      ipType: (function(){ var a = []; if ($('fl-ipv4').checked) a.push('IPv4'); if ($('fl-ipv6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-mobile').checked) a.push('移动'); if ($('fl-isp-unicom').checked) a.push('联通'); if ($('fl-isp-telecom').checked) a.push('电信'); return a; })()
    }
  };
}
function saveAll(){
  if(!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  $('saveBtn').disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if(r && r.ok){ CFG = r.data; renderPreferred(); renderHeader(); $('saveBtn').classList.remove('dirty'); toast('已保存并生效', 'ok'); }
      else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ $('saveBtn').disabled = false; });
}
// 重置：清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为最开始的部署状态
function resetAll(){
  if(!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为最开始的部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if(r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function renderPreferred(){
  if(!CFG) return;
  var lines = [];
  var dom = String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean);
  lines = lines.concat(dom);
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
// ---- 优选器 ----
var LAST = [];
// 本地（浏览器）→ 目标 IP 的延迟探测：HTTPS 端口用 https，HTTP 端口用 http（被混合内容阻止时回退 https）
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
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);   // https 面板下 http 被混合内容阻止，回退 https 探测
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
        var c = cands[idx++]; pending++;
        pingIp(c.ip, c.port, timeout).then(function(r){
          pending--; results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
          if (results.length === cands.length) resolve(results);
          else next();
        });
      }
    }
    next();
  });
}
function runPick(){
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if(!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if(!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a,b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地→目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  // 显示层兜底：同一 IP 只显示一条（列表已按延迟排序，保留最先=最优的一条）
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
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if(!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  // 同一 IP 已在优选列表中则不再重复加入
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists) { toast('该 IP 已在优选列表中', 'warn'); return; }
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
  if(!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if(r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}
// ---- 订阅 ----
function subUrlOf(fmt){
  var u = location.origin + APIPATH + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if(showQR) showQRCode(url);
}
function showQRCode(){
  var url = $('subUrl').value || subUrlOf('');
  var w = $('qrWrap');
  w.style.display = 'block';
  if(typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  var q = qrcode(0, 'M');
  q.addData(url);
  q.make();
  w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
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
// 日间/夜间模式切换
function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme') || 'dark';
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('cfnext_theme', next); } catch(e) {}
  document.getElementById('themeBtn').textContent = next === 'dark' ? '🌙' : '☀';
}
(function() {
  var t = 'dark';
  try { t = localStorage.getItem('cfnext_theme') || 'dark'; } catch(e) {}
  if (t === 'light') { document.documentElement.setAttribute('data-theme', 'light'); }
  setTimeout(function() { var b = document.getElementById('themeBtn'); if(b) b.textContent = t === 'dark' ? '🌙' : '☀'; }, 0);
})();
loadAll();
</script>
</body>
</html>`;
// ---------------------------------------------------------------------------
// 登录页
// ---------------------------------------------------------------------------
const loginHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · 登录</title>
<style>
body{background:#0d1117;color:#e6edf3;font-family:"PingFang SC","Microsoft YaHei",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.box{background:#161b22;border:1px solid #2d333b;border-radius:12px;padding:28px;width:320px}
h1{font-size:18px;margin-bottom:6px}
p{color:#8b949e;font-size:13px;margin:0 0 18px}
input{width:100%;background:#1c2230;border:1px solid #2d333b;color:#e6edf3;border-radius:8px;padding:10px 12px;font-size:14px;outline:none;box-sizing:border-box;margin-bottom:12px}
input:focus{border-color:#4f9dff}
button{width:100%;background:#4f9dff;border:none;color:#fff;border-radius:8px;padding:10px;font-size:14px;font-weight:600;cursor:pointer}
.msg{color:#f85149;font-size:13px;margin-bottom:10px;display:none}
</style>
</head>
<body>
<div class="box">
  <h1>CFNext</h1>
  <p>请输入管理密码</p>
  <div class="msg" id="msg">密码错误</div>
  <form id="form">
    <input type="password" id="pwd" placeholder="管理密码" autofocus>
    <button type="submit">登录</button>
  </form>
</div>
<script>
var next = new URLSearchParams(location.search).get('next') || '/';
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  var pwd = document.getElementById('pwd').value;
  fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(pwd) + '&next=' + encodeURIComponent(next) })
    .then(function(r){ return r.json(); })
    .then(function(r){
      if(r && r.ok){ location.href = r.next || '/'; }
      else { document.getElementById('msg').style.display = 'block'; }
    })
    .catch(function(){ document.getElementById('msg').textContent = '网络错误'; document.getElementById('msg').style.display = 'block'; });
});
</script>
</body>
</html>`;
// ---------------------------------------------------------------------------
// 路由与调度
// ---------------------------------------------------------------------------
function isBrowserUA(ua) {
  // 任何包含 Mozilla 的 UA 视为浏览器；curl / ClashForAndroid / Sing-box 等客户端不含
  return (ua || '').toLowerCase().includes('mozilla');
}
async function requireAuth(request, cfg) {
  if (!cfg.admin) return true;
  const cookies = request.headers.get('Cookie') || '';
  const m = cookies.match(/(?:^|;\s*)luma_auth=([^;]+)/);
  return !!(m && m[1] === md5hex(String(cfg.admin)));
}
async function handleRequest(request, env) {
  const url = new URL(request.url);
  const UA = request.headers.get('User-Agent') || '';
  const upgrade = (request.headers.get('Upgrade') || '').toLowerCase();
  // HTTP → HTTPS
  if (url.protocol === 'http:') {
    return Response.redirect(url.href.replace('http://', 'https://'), 301);
  }
  const cfg = await loadConfig(env);
  const panelPath = cfg.path || cfg.uuid;
  const path = url.pathname.replace(/^\/+|\/+$/g, '');
  const segs = path.split('/');
  // ---------- 版本接口 ----------
  if (segs[0] === 'version') {
    return json({ version: VERSION });
  }
  // ---------- 登录 ----------
  if (segs[0] === 'login') {
    if (request.method === 'POST') {
      const body = await request.text();
      const params = new URLSearchParams(body);
      if (params.get('password') === cfg.admin) {
        const token = md5hex(String(cfg.admin));
        return new Response(JSON.stringify({ ok: true, next: params.get('next') || '/' }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Set-Cookie': `luma_auth=${token}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`
          }
        });
      }
      return json({ ok: false, msg: '密码错误' }, 403);
    }
    if (cfg.admin) {
      return new Response(loginHTML, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }
    return Response.redirect(new URL('/' + panelPath, request.url).href, 302);
  }
  const isPanelRoot = segs[0] === panelPath;
  // 根路径：浏览器访问自动跳转到面板入口，避免 Not Found 困惑（上手即用）
  if (segs[0] === '' && isBrowserUA(UA)) {
    return Response.redirect(new URL('/' + panelPath, request.url).href, 302);
  }
  // ---------- 代理：WebSocket / xhttp ----------
  if (isPanelRoot && segs.length === 1) {
    if (upgrade === 'websocket') {
      return handleWebSocketProxy(request, cfg);
    }
    if (request.method === 'POST') {
      if (cfg.enableXhttp) {
        try { return await handleXhttpProxy(request, cfg); }
        catch (e) { return json({ ok: false, msg: 'xhttp 代理错误: ' + (e.message || e) }, 500); }
      }
    }
  }
  // ---------- 订阅 ----------
  if (isPanelRoot && (segs[1] === 'sub' || (segs.length === 1 && !isBrowserUA(UA) && !UA.startsWith('luma')))) {
    const fmt = segs.length >= 3 ? segs[2] : '';
    try {
      // 读取上次下发的 IP（KV 键 issued），用于本次去重下发新 IP；轮询机制关闭时跳过（下发全部节点）
      let skip = null;
      if (cfg.polling !== false && env.K && typeof env.K.get === 'function') {
        try {
          const iv = await env.K.get('issued');
          if (iv) { const j = JSON.parse(iv); if (Array.isArray(j.ips) && j.ips.length) skip = new Set(j.ips); }
        } catch (e) { /* 忽略 */ }
      }
      const sub = await generateSubscription(skip ? Object.assign({}, cfg, { _skipIssued: skip }) : cfg, request.url, fmt, UA, request.cf && request.cf.colo);
      if (cfg.polling !== false && env.K && typeof env.K.put === 'function' && sub.issued && sub.issued.length) {
        // 滑动窗口历史队列：合并历史与本次已下发 IP，去重后保留最近 200 条（新 IP 优先保留），
        // 既实现客户端定期换新 IP，又避免集合无限增长或清空引起数量塌陷
        const prevIps = skip ? Array.from(skip) : [];
        const win = [...new Set([...sub.issued, ...prevIps])].slice(0, 200);
        const payload = JSON.stringify({ t: Date.now(), ips: win });
        if (env._ctx && typeof env._ctx.waitUntil === 'function') env._ctx.waitUntil(env.K.put('issued', payload).catch(() => {}));
        else await env.K.put('issued', payload).catch(() => {});
      }
      return new Response(sub.body, { status: 200, headers: { 'Content-Type': sub.type + '; charset=utf-8', 'Cache-Control': 'no-store', 'Content-Disposition': 'attachment; filename*=utf-8\'\'CFNext' } });
    } catch (e) {
      return new Response('订阅生成失败: ' + (e && e.message || e), { status: 500, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  }
  // ---------- 面板（浏览器访问） ----------
  if (isPanelRoot && segs.length === 1 && isBrowserUA(UA)) {
    if (!(await requireAuth(request, cfg))) {
      return Response.redirect(new URL('/login?next=' + encodeURIComponent('/' + panelPath), request.url).href, 302);
    }
    return new Response(PANEL_HTML, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  // ---------- API ----------
  if (isPanelRoot && segs[1] === 'api') {
    const apiName = segs[2] || '';
    const authed = await requireAuth(request, cfg);
    if (!authed) {
      return json({ ok: false, status: 403, msg: '未授权（需要管理密码）' }, 403);
    }
    if (apiName === 'config') {
      if (request.method === 'GET') {
        return json({ ok: true, data: Object.assign({}, cfg, { version: VERSION }) });
      }
      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const merged = Object.assign(JSON.parse(JSON.stringify(cfg)), body);
          if (body.optimizer && typeof body.optimizer === 'object') merged.optimizer = Object.assign(merged.optimizer, body.optimizer);
          if (body.preferredIPs && Array.isArray(body.preferredIPs)) merged.preferredIPs = body.preferredIPs;
          await saveConfig(env, merged);
          const fresh = await loadConfig(env, request.url);
          return json({ ok: true, data: Object.assign({}, fresh, { version: VERSION }), msg: '已保存并生效' });
        } catch (e) { return json({ ok: false, msg: '保存失败: ' + (e.message || e) }, 500); }
      }
    }
    if (apiName === 'reset') {
      if (request.method !== 'POST') return json({ ok: false, msg: '仅支持 POST' }, 405);
      try {
        if (!env.K || typeof env.K.delete !== 'function') return json({ ok: false, msg: '未绑定 KV 命名空间，无需重置' }, 400);
        await env.K.delete('config');
        await env.K.delete('issued');
        return json({ ok: true, msg: '已重置：KV 已清空，面板还原为初始部署状态' });
      } catch (e) { return json({ ok: false, msg: '重置失败: ' + (e.message || e) }, 500); }
    }
    if (apiName === 'status') {
      return json({ ok: true, data: { version: VERSION, host: url.hostname, path: panelPath, region: (request.cf && request.cf.colo) || 'unknown' } });
    }
    if (apiName === 'check-update') {
      // 拉取 GitHub 仓库最新版源码：提取远端 VERSION 与本地对比；changed=true 时返回完整代码供前端复制
      try {
        const res = await fetchTimeout(UPDATE_RAW_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } }, 8000);
        if (!res || !res.ok) return json({ ok: false, msg: '仓库拉取失败 HTTP ' + (res && res.status) }, 502);
        const code = await res.text();
        const m = code.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);
        const latest = m ? m[1] : '';
        return json({ ok: true, changed: !!latest && latest !== VERSION, latest: latest, current: VERSION, code: code });
      } catch (e) {
        return json({ ok: false, msg: '检测失败: ' + (e.message || e) }, 500);
      }
    }
    if (apiName === 'sub') {
      const fmt = url.searchParams.get('fmt') || '';
      try {
        const sub = await generateSubscription(cfg, request.url, fmt, UA, request.cf && request.cf.colo);
        return json({ ok: true, type: sub.type, body: sub.body });
      } catch (e) { return json({ ok: false, msg: '订阅生成失败: ' + (e.message || e) }, 500); }
    }
    if (apiName === 'candidates') {
      if (request.method !== 'POST') return json({ ok: false, msg: '仅支持 POST' }, 405);
      try {
        const body = await request.json().catch(() => ({}));
        const cand = await collectCandidates(Object.assign({}, cfg.optimizer, body));
        if (!cand.candidates.length) {
          const st = cand.stats || {};
          const why = [st.presetErr && ('预设源: ' + st.presetErr), st.customErr && ('自定义源: ' + st.customErr)].filter(Boolean).join('；');
          return json({ ok: false, msg: '没有可测的 IP' + (why ? '（' + why + '）' : '，请换一个数据源') }, 400);
        }
        return json({ ok: true, data: cand.candidates, stats: cand.stats });
      } catch (e) { return json({ ok: false, msg: '拉取失败: ' + (e.message || e) }, 500); }
    }
    if (apiName === 'domains') {
      try {
        const src = OPTIMIZE_SOURCES[url.searchParams.get('source') || 'wetest_cname'] || OPTIMIZE_SOURCES.wetest_cname;
        const res = await fetch(src.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) return json({ ok: false, msg: '拉取失败 HTTP ' + res.status });
        const domains = extractDomains(await res.text());
        return json({ ok: true, data: domains });
      } catch (e) { return json({ ok: false, msg: '拉取失败: ' + (e.message || e) }, 500); }
    }
    return json({ ok: false, msg: '未知 API: ' + apiName }, 404);
  }
  return new Response('Not Found', { status: 404 });
}
// 定时自动优选：拉取候选 → 测速 → 取最优写入优选节点
async function handleScheduled(_controller, env, _ctx) {
  const auto = String(env.BESTIP_AUTO || '').toLowerCase();
  if (auto !== '1' && auto !== 'true') return;
  try {
    const cfg = await loadConfig(env);
    const cand = await collectCandidates(cfg.optimizer);
    const candidates = cand.candidates || [];
    if (!candidates.length) return;
    const results = await runLatencyTest(candidates, cfg.optimizer.threads || 5, 5000);
    const best = results.filter(r => r.ok).slice(0, cfg.optimizer.count || 20);
    if (!best.length) return;
    cfg.preferredIPs = best.map(r => ({ ip: r.ip, port: r.port || 443, name: '' }));
    await saveConfig(env, cfg);
  } catch (e) { /* 忽略 */ }
}
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, Object.assign({}, env, { _ctx: ctx }));
  },
  async scheduled(controller, env, ctx) {
    return handleScheduled(controller, env, ctx);
  }
};
