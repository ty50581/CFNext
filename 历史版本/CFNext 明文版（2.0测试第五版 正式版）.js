//  === 面板集成：CFNext 新界面（独立设计）+ 配额安全（CF 用量监控）===
// ============================================================================
//  CFNext —— Cloudflare 代理管理面板 · 全新独立编写
//  ----------------------------------------------------------------------------
//  环境变量：
//    U            VLESS UUID（必填，同时用作面板访问路径，除非设置了 D）
//    D / PATH     自定义面板路径（可选）
//    ADMIN        面板管理密码（可选，设置后访问面板需登录）
//    HOST         自定义 SNI/Host（可选，默认使用 Worker 域名）
//    PROXYIP      自定义反代/落地 IP（可选，填写后作为固定出口优先使用；留空则直连失败时由内置地区反代兜底，格式 host 或 host:port）
//    S / OUTBOUND 出站代理（可选，socks5:// / http:// / ss:// 或 host:port）
//    ECH          设为 true/1 开启 ECH 加密（可选）
//    TROJAN       设为 true/1 开启 Trojan 协议（可选）
//    TROJAN_PASSWORD  Trojan 密码（开启 Trojan 时必填）
//    ALPN         自定义 ALPN 协商（可选）
//    YX           自定义优选 IP 列表（可选，格式 IP:port#名称，逗号分隔）
//    YXURL        优选器自定义数据源 URL（可选）
//    BESTIP_AUTO  设为 1 启用定时自动优选（scheduled 触发，刷新优选节点）
//    DEPLOY_EDITION 部署形态标注：明文版 / 混淆版（手动维护），决定版本号检测更新时拉取的仓库代码
//    CF_ACCOUNT_ID CF 账户监控：账户 ID（可选，与 CF_API_TOKEN 同时设置后可在面板查看当日用量）
//    CF_API_TOKEN  CF 账户监控：API 令牌（可选，需 Workers 用量分析读取权限，如 Account Analytics 读权限）
//    K            已绑定 KV 命名空间时读取图形化配置
// ============================================================================
import { connect } from 'cloudflare:sockets';

const VERSION = '2.0.0';

// 部署形态标注（手动维护）：明文版部署保持「明文版」；生成混淆版部署前，请将下方标注手动改为「混淆版」。
// 更新检测时：统一以仓库「CFNext 明文版.js」的版本号为比对基准（明文与混淆同步发布同一版本号），
// 有更新时按本标注拉取对应仓库代码——明文版 → CFNext 明文版.js，混淆版 → CFNext 混淆版.js。
const DEPLOY_EDITION = '明文版';

function deployKind(){
  try {
    return DEPLOY_EDITION === '混淆版' ? 'obfuscated' : 'plain';
  } catch (e) { return 'plain'; }
}

// 更新检测：点击版本号后拉取仓库代码比对版本号；有新版本时返回最新代码供面板复制
// 明文版与混淆版同步发布同一版本号：版本基准统一用「CFNext 明文版.js」，按自身形态复制对应代码
const UPDATE_REPO = 'PAICNI/CFNext';
let UPDATE_CACHE = null; // { t, r } 60 秒缓存

function parseVer(v){
  const m = String(v || '').match(/(\d+)\.(\d+)\.(\d+)/);
  return m ? [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)] : null;
}
function cmpVer(a, b){
  const A = parseVer(a), B = parseVer(b);
  if (!A || !B) return 0;
  for (let i = 0; i < 3; i++){ if (A[i] !== B[i]) return A[i] < B[i] ? -1 : 1; }
  return 0;
}
function extractVersion(txt){
  // 版本号与 CFNext 源码同一位置：const VERSION = 'x.y.z ...'
  const m = txt.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);
  return m ? m[1] : null;
}
async function checkUpdate(env){
  const now = Date.now();
  if (UPDATE_CACHE && now - UPDATE_CACHE.t < 60000) return UPDATE_CACHE.r;
  const kindName = deployKind() === 'obfuscated' ? '混淆' : '明文';   // 自身形态（读取 DEPLOY_EDITION 标注）
  let latest = null, code = '', err = '';
  // 版本基准统一用明文文件（明文与混淆同步发布同一版本号）
  const plainUrl = 'https://raw.githubusercontent.com/' + UPDATE_REPO + '/main/' + encodeURIComponent('CFNext 明文版.js');
  try {
    const res = await fetch(plainUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (CFNext)' } });
    if (res.ok) {
      const txt = await res.text();
      const v = extractVersion(txt);
      if (v) latest = v;
    }
  } catch (e) { err = (e && e.message) || String(e); }
  if (latest) {
    // 按自身形态拉取对应最新代码：明文→明文文件；混淆→轻混淆文件
    const wantFile = kindName === '混淆' ? 'CFNext 混淆版.js' : 'CFNext 明文版.js';
    const codeUrl = 'https://raw.githubusercontent.com/' + UPDATE_REPO + '/main/' + encodeURIComponent(wantFile);
    try {
      const res = await fetch(codeUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (CFNext)' } });
      if (res.ok) code = await res.text();
    } catch (e) { /* 代码拉取失败不阻断版本判断 */ }
    UPDATE_CACHE = { t: now, r: { current: VERSION, kind: kindName, latest, hasUpdate: cmpVer(latest, VERSION) > 0, code, checkedAt: now } };
    return UPDATE_CACHE.r;
  }
  // 兜底：明文文件不可达时尝试混淆文件版本
  const obfUrl = 'https://raw.githubusercontent.com/' + UPDATE_REPO + '/main/' + encodeURIComponent('CFNext 混淆版.js');
  try {
    const res = await fetch(obfUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (CFNext)' } });
    if (res.ok) {
      const txt = await res.text();
      const v = extractVersion(txt);
      if (v) latest = v;
    }
  } catch (e) { err = (e && e.message) || String(e); }
  if (latest) {
    UPDATE_CACHE = { t: now, r: { current: VERSION, kind: kindName, latest, hasUpdate: cmpVer(latest, VERSION) > 0, code: '', checkedAt: now } };
    return UPDATE_CACHE.r;
  }
  return { current: VERSION, kind: kindName, latest: null, hasUpdate: false, code: '', error: err || '未在仓库中找到版本信息' };
}

const CLASH_TEMPLATE = `
# ==================== 锚点配置 ====================
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
    # 直连类：国内 DoH（微软已并入直连，微软域名走国内解析后直连）
    "rule-set:Direct,Private,China,Microsoft":
      - "https://dns.alidns.com/dns-query"
      - "https://doh.pub/dns-query"
    # 走代理类：国外 DoH（连接本身经代理隧道，不直连暴露查询）
    "rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy":
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

  # 大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）
  - RULE-SET,Private,直接连接
  - RULE-SET,Direct,直接连接
  - RULE-SET,Download,直接连接
  - RULE-SET,AppleCN,直接连接
  - RULE-SET,Microsoft,直接连接        # 微软全家桶直连（Office / OneDrive / Windows 更新 / Teams / Xbox 等）
  - RULE-SET,China,直接连接             # 国内域名直连
  # 阻止走代理的 QUIC（强制回退 TCP，避免 QUIC 绕过代理 / 被干扰）。
  # 放在直连规则之后：直连 QUIC（大陆 / 微软 / 苹果）不受影响。如需 Telegram 语音等 UDP，可删除此行。
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
  - RULE-SET,github,一键连接
  - RULE-SET,Proxy,一键连接

  # IP规则
  - RULE-SET,PrivateIP,直接连接,no-resolve
  - RULE-SET,TelegramIP,一键连接,no-resolve
  - RULE-SET,ProxyIP,一键连接,no-resolve
  - RULE-SET,ChinaIP,直接连接,no-resolve

  # 大陆 IP 兜底直连：覆盖规则集未收录的域名 / 纯 IP 连接的大陆应用（GEOIP 库覆盖面更全）
  - GEOIP,CN,直接连接,no-resolve

  # 兜底规则：其余（国外）走一键连接
  - MATCH,一键连接

# ==================== 规则集 ====================
# 规则集行为模板
BehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}
BehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}
BehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}
ClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}
BehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # 经典规则集（blackmatrix7 等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）

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
  China:          {<<: *BehaviorCL, url: https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}   # 大陆直连全量：ChinaMaxNoIP（11万+ 域名，含大陆可达国际服务），每日更新
  # 常用国外服务
  AI:             {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}
  Telegram:       {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}
  Twitter:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}
  SocialMedia:    {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}
  Netflix:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}
  YouTube:        {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}
  Google:         {<<: *BehaviorDN, url: https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}
  Microsoft:      {<<: *BehaviorCL, url: https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}   # 微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure 等）
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
// IPv6 随机补足/随机优选专用段（筛选含 IPv6 时使用，与 IPv4 补足同一可达性原则）
const REACHABLE_CIDRS_V6 = [
  '2606:4700::/32', '2400:cb00::/32', '2803:f800::/32', '2a06:98c0::/29', '2c0f:f248::/32'
];
// Cloudflare 官方公开 IPv6 网段（https://www.cloudflare.com/ips-v6/ 动态拉取，6 小时缓存；
// 失败回退内置段；实测官方段随机地址 TCP+TLS 全端口可用，与 IPv4 补足同机制）
let OFFICIAL_V6_CIDRS = CLOUDFLARE_CIDRS_V6.slice();
let OFFICIAL_V6_CIDRS_T = 0;
async function refreshOfficialV6CIDRs() {
  const now = Date.now();
  if (OFFICIAL_V6_CIDRS_T && now - OFFICIAL_V6_CIDRS_T < 6 * 60 * 60 * 1000) return;
  try {
    const resp = await fetch('https://www.cloudflare.com/ips-v6/', { signal: AbortSignal.timeout(10000) });
    if (!resp.ok) return;
    const txt = await resp.text();
    const cidrs = String(txt).split('\n').map(s => s.trim()).filter(s => /^[0-9a-fA-F:.]+\/\d+$/.test(s) && s.indexOf(':') >= 0);
    if (cidrs.length >= 3) { OFFICIAL_V6_CIDRS = cidrs; OFFICIAL_V6_CIDRS_T = now; }
  } catch (e) { /* 拉取失败沿用内置/上次成功网段 */ }
}

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

// 默认 6 条地区优选源（bestcf 在线优选池，社区维护的可达中转 IP，可用率高）
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
  nodeLimit: true,      // 节点数量控制：默认开启，按 nodeLimitCount 精确限制节点总数
  nodeLimitCount: 500,  // 开启节点数量控制后，最多下发的节点数（默认 500）
  polling: false,       // 轮询机制：开启后每次更新订阅轮询下发新节点（KV issued 去重 + 数量限制），关闭后忽略轮询与限制、下发全部节点
  probeAlive: true,     // ★ 节点测活（TCP 探测）总开关：默认开启——恢复 2.0 第四版原版「下发前剔除死节点」策略，
                        //   实测节点「活」的比例高、客户端体感更快；并发已限 ≤4（probeAll 信号量），不再有 250 socket 排队假死。
                        //   节点形态：所有模式统一按 1.0.6 机制——端口原样单端口下发（固定 443、不随机 TLS 端口、不追加明文端口变体）。
                        //   关闭：所有测活函数直接放行，不做任何 TCP 握手/HTTP 探测与剔除——节点的下发策略、出入站方式、
                        //   ProxyIP 等节点相关均按 V1.x 处理：按数据源原始顺序（bestcf 地区池行序 = 质量序）全量下发，客户端自行择优；
                        //   开启：对候选地址做 TCP 握手/HTTP 探测并剔除判死项，
                        //   含精选池/优选 IP/域名预检/ProxyIP 兜底各环节的测活剔除（自定义订阅 / 随机优选模式除外：不进行测活）。
                        //   注意：Cloudflare 运行时禁止出站连接 CF IP 段（官方文档：Outbound TCP sockets to
                        //   Cloudflare IP ranges are blocked），因此对 CF 段 IP 的探测恒失败 → 精选池会被整体判死、
                        //   订阅被迫用随机 CF IP 补足（客户端可达率仅 28-45%，而精选池实测 97%）。可用环境变量 PROBE_ALIVE=0 覆盖关闭
  // 配额安全（账户监控）：填写 CF 账户 ID 与 API 令牌后，面板可查询当日用量并按需自动收缩节点上限
  cfAccountId: '',      // CF 账户监控：账户 ID（Account Tag），留空则监控关闭；可用环境变量 CF_ACCOUNT_ID 覆盖
  cfApiToken: '',       // CF 账户监控：API 令牌（需 Workers 用量分析读取权限），可用环境变量 CF_API_TOKEN 覆盖
  quotaAuto: false,     // 配额安全：开启后当日用量 ≥ 60% 免费额度时自动收缩订阅节点上限，保护账户
  // 落地与出站
  proxyIP: '',
  outboundProxy: '',
  outboundMode: '',    // '' | 'no' | 'only'
  // 优选节点（保存后随订阅下发到客户端）
  preferredDomains: 'https://bestcf.pages.dev/random-region/HK/100.txt\nhttps://bestcf.pages.dev/random-region/TW/100.txt\nhttps://bestcf.pages.dev/random-region/JP/100.txt\nhttps://bestcf.pages.dev/random-region/SG/100.txt\nhttps://bestcf.pages.dev/random-region/US/100.txt\nhttps://bestcf.pages.dev/random-region/KR/100.txt',   // 自定义订阅模式下使用的地址（每行/逗号分隔）
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
// 内置保底优选 IP：Cloudflare 官方任播段 IP，全部经实测（SNI=部署域名、443、HTTP 101）确认客户端可达，
// 固定 443 追加下发，保证订阅内始终有稳定可用节点（参考 TunnelBoard 内置优选思路，独立实测选取）
const BUILTIN_STABLE_IPS = [
  '104.16.128.11', '172.67.72.4', '104.17.201.77', '104.16.66.7', '104.16.88.7',
  '104.16.98.7', '104.17.2.7', '104.17.44.9', '104.18.34.34', '104.18.7.34',
  '104.19.191.31', '104.19.1.1', '104.20.15.15', '104.20.1.1', '104.21.23.1',
  '104.21.2.1', '104.24.12.10', '104.25.0.1', '104.26.1.1', '162.159.128.1'
];

// bestcf 区域优选池（实时测速过的优质 CF IP，可用性远高于随机 CIDR 生成）
const BESTCF_REGION_URLS = [
  { label: '香港', region: 'HK', url: 'https://bestcf.pages.dev/random-region/HK/100.txt', count: 12 },
  { label: '日本', region: 'JP', url: 'https://bestcf.pages.dev/random-region/JP/100.txt', count: 12 },
  { label: '美国', region: 'US', url: 'https://bestcf.pages.dev/random-region/US/100.txt', count: 12 },
  { label: '新加坡', region: 'SG', url: 'https://bestcf.pages.dev/random-region/SG/100.txt', count: 12 },
  { label: '台湾', region: 'TW', url: 'https://bestcf.pages.dev/random-region/TW/100.txt', count: 12 }
];


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
// 默认优选域名：第三方 CNAME 域名，解析到 Cloudflare 边缘；
// 节点 server 直接下发域名（客户端连接时动态 DNS 解析，拿到当前最优 CF 边缘 IP，可用性远高于静态 IP 快照）
const DEFAULT_PREFERRED_DOMAINS = [
  'cloudflare.182682.xyz', 'speed.marisalnc.com', 'freeyx.cloudflare88.eu.org', 'bestcf.top',
  'cdn.2020111.xyz', 'cfip.cfcdn.vip', 'cf.0sm.com', 'cf.090227.xyz', 'cf.zhetengsha.eu.org',
  'cloudflare.9jy.cc', 'cf.zerone-cdn.pp.ua', 'cfip.1323123.xyz', 'cnamefuckxxs.yuchen.icu',
  'cloudflare-ip.mofashi.ltd', '115155.xyz', 'cname.xirancdn.us', 'f3058171cad.002404.xyz',
  '8.889288.xyz', 'cdn.tzpro.xyz', 'cf.877771.xyz', 'xn--b6gac.eu.org',
  'bestcf.030101.xyz', 'cdns.doon.eu.org', 'fn.130519.xyz', 'saas.sin.fan'
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
const _rangeCache = new Map();
function cidrRangeCached(cidr) {
  let r = _rangeCache.get(cidr);
  if (!r) { r = cidrToRange(cidr); _rangeCache.set(cidr, r); }
  return r;
}
function randomIPFromCidr(cidr) {
  if (String(cidr).indexOf(':') >= 0) return randomIP6FromCidr(cidr);   // IPv6 段：按前缀展开随机生成（参考 CFNext v1.0.5）
  const [start, end] = cidrRangeCached(cidr);
  const r = start + Math.floor(Math.random() * ((end - start) >>> 0));
  return `${(r >>> 24) & 255}.${(r >>> 16) & 255}.${(r >>> 8) & 255}.${r & 255}`;
}
// IPv6 随机地址生成：网络前缀位固定，主机位随机（16 进制组逐位置乱，返回压缩形式）
function randomIP6FromCidr(cidr) {
  const [net, bitsStr] = cidr.split('/');
  const bits = parseInt(bitsStr, 10) || 0;
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
  const g = expand(net).map(x => parseInt(x, 16));
  let b = 0;
  for (let i = 0; i < 8; i++) for (let k = 15; k >= 0; k--) {
    if (b >= bits) g[i] |= (Math.random() < 0.5 ? 1 : 0) << k;
    b++;
  }
  return g.map(x => x.toString(16)).join(':');
}
// IPv4-embedded IPv6（2606:4700::<hex>）：与对应 IPv4 路由到同一 CF 边缘，实测可达，
// 单选 IPv6 时内置实测池转此格式替代随机补足，实现"下发即用"
function ipv4ToEmbeddedV6(ipv4) {
  const p = String(ipv4 || '').split('.').map(n => parseInt(n, 10).toString(16).padStart(2, '0'));
  if (p.length !== 4 || p.some(x => x === 'NaN')) return null;
  return '2606:4700::' + p[0] + p[1] + ':' + p[2] + p[3];
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

// 出站代理地址解析：socks5:// / http(s):// / ss:// 或 host:port，可带 user:pass@
function parseProxyAddress(addr) {
  if (!addr) return null;
  let type = 'socks5', rest = String(addr).trim();
  const m = rest.match(/^(socks5|http|https|ss):\/\/(.+)$/i);
  if (m) { type = m[1].toLowerCase(); rest = m[2]; }
  if (type === 'ss') return parseSsProxy(rest);
  let user = '', pass = '';
  if (rest.includes('@')) {
    const [u, h] = rest.split('@');
    // 修复：用户名/密码可能经 URL 编码（密码含 %40/@、%28/() 等特殊字符时），解码后再用于认证，
    // 否则 socks5 用户名密码 / HTTP Basic 认证会失败
    const dec = (s) => { try { return decodeURIComponent(s); } catch (e) { return s; } };
    const idx = u.indexOf(':');
    if (idx >= 0) { user = dec(u.slice(0, idx)); pass = dec(u.slice(idx + 1)); }
    else user = dec(u);
    rest = h;
  }
  const defaultPort = type === 'http' ? 80 : type === 'https' ? 443 : 1080;
  const { host, port } = parseHostPort(rest, defaultPort);
  return { type, host, port, user, pass };
}

// SS 出站解析：SIP002（ss://method:password@host:port#name 或 ss://BASE64(method:password)@host:port#name）
// 及旧格式 ss://BASE64(method:password@host:port)（整段无 @）。密码支持 percent-encoding。
function parseSsProxy(rest) {
  let hostPort = rest, userinfo = '';
  const hashIdx = rest.indexOf('#');
  if (hashIdx >= 0) hostPort = rest.slice(0, hashIdx);
  const atIdx = hostPort.lastIndexOf('@');
  if (atIdx >= 0) { userinfo = hostPort.slice(0, atIdx); hostPort = hostPort.slice(atIdx + 1); }
  else {
    const dec = b64ToUtf8(hostPort);   // 旧格式：整段 BASE64(method:password@host:port)
    if (dec && dec.includes('@')) {
      const at2 = dec.lastIndexOf('@');
      userinfo = dec.slice(0, at2); hostPort = dec.slice(at2 + 1);
    }
  }
  let method = '', password = '';
  if (userinfo) {
    let ui = b64ToUtf8(userinfo) || userinfo;   // SIP002 userinfo 可为 BASE64(method:password) 或明文
    try { ui = decodeURIComponent(ui); } catch (e) { /* 保持原样 */ }
    const ci = ui.indexOf(':');
    if (ci > 0) { method = ui.slice(0, ci); password = ui.slice(ci + 1); }
    else method = ui;
  }
  const { host, port } = parseHostPort(hostPort, 8388);
  return { type: 'ss', host, port, method, password };
}
function b64ToUtf8(s) {
  try {
    const bin = atob(String(s).replace(/-/g, '+').replace(/_/g, '/'));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  } catch (e) { return null; }
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// 配置加载：默认值 < 环境变量 < KV 图形化配置
// KV 读取走 Cloudflare KV 内置边缘缓存 cacheTtl=30：请求/面板读配置命中边缘缓存，
// 不再每次穿透 KV，KV 读量降一个数量级；不再使用模块级内存缓存（不同 isolate
// 不共享且会残留陈旧值）。KV 写入后内部缓存层会以新值重校验，保存后读取即新配置。
// ---------------------------------------------------------------------------
async function kvGetConfigCached(env) {
  try { return await env.K.get('config', { cacheTtl: 30 }); } catch (e) { return null; }
}
function invalidateConfigCache() { /* 内存缓存已移除；KV 边缘缓存 30s 自然过期 */ }

async function loadConfig(env) {
  const cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  let kvQuotaSet = false;   // KV 是否显式设置过 quotaAuto（用于自动调节默认值联动）
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
  // 节点测活：环境变量 PROBE_ALIVE=1/true 强制开启，=0/false 强制关闭（不走面板也能改）
  if (env.PROBE_ALIVE === '1' || env.PROBE_ALIVE === 'true') cfg.probeAlive = true;
  if (env.PROBE_ALIVE === '0' || env.PROBE_ALIVE === 'false') cfg.probeAlive = false;
  // KV 图形化配置（更高优先级）
  if (env.K && typeof env.K.get === 'function') {
    try {
      const kvJson = await kvGetConfigCached(env);
      if (kvJson) {
        const kvCfg = JSON.parse(kvJson);
        if (kvCfg.quotaAuto !== undefined) kvQuotaSet = true;
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
  // 节点测活开关同步到测活函数（订阅生成与手动测速都依赖此全局标记）
  setProbeAlive(!!cfg.probeAlive);
  // 兜底
  // 兜底：path 为空或为 "/" 时一律回退 UUID（兼容 KV 残留旧值，保证订阅 ws 路径与 Worker 面板路径统一为 /UUID）
  cfg.uuid = String(cfg.uuid || '').toLowerCase();
  if (!isUUID(cfg.uuid)) cfg.uuid = uuidv4();
  if (!cfg.path || cfg.path === '/' || cfg.path === '') cfg.path = cfg.uuid;
  if (!Array.isArray(cfg.preferredIPs)) cfg.preferredIPs = parseIPList(cfg.preferredIPs);
  // 自动调节默认值联动：用户未显式设置 quotaAuto 时——Cloudflare 监控已配置（面板输入或环境变量 CF_ACCOUNT_ID/CF_API_TOKEN）→ 默认开启；
  // 未配置监控 → 默认关闭；用户显式保存过开关后一律以用户设置为准
  if (!kvQuotaSet) {
    const hasMonitor = Boolean((cfg.cfAccountId && cfg.cfApiToken) || (env.CF_ACCOUNT_ID && env.CF_API_TOKEN));
    if (hasMonitor) cfg.quotaAuto = true;
  }
  return cfg;
}

async function saveConfig(env, cfg) {
  if (!env.K || typeof env.K.put !== 'function') return false;
  const clone = JSON.parse(JSON.stringify(cfg));
  if (clone.admin) clone.admin = String(clone.admin);
  await env.K.put('config', JSON.stringify(clone));
  invalidateConfigCache();   // 内存缓存已移除；KV put 后内部缓存层自动以新值重校验，保存后读取即为新配置
  return true;
}

// ---------------------------------------------------------------------------
// 配额安全：CF 账户用量监控（参考 CF-Workers-Monitor 的 GraphQL Analytics 思路，
// 代码独立编写）—— 查询当日 Workers + Pages 请求量，对比免费额度 100,000 次/日
// ---------------------------------------------------------------------------
let QUOTA_CACHE = null;    // 模块级缓存：5 分钟内不重复请求 CF API（多 isolate 各自缓存，可接受）
let QUOTA_BACKOFF = 0;    // 429 限流退避截止时间戳（限流后 15 分钟不再请求，避免拉长限流窗口）
const QUOTA_LIMIT = 100000;
const QUOTA_TTL = 300000;         // 正常缓存 5 分钟（GraphQL Analytics 有账户级日请求配额，低频查询更稳）
const QUOTA_BACKOFF_TTL = 900000; // 429 退避 15 分钟

async function getQuota(env, cfg) {
  const accountId = String((env.CF_ACCOUNT_ID || (cfg && cfg.cfAccountId) || '')).trim();
  const token = String((env.CF_API_TOKEN || (cfg && cfg.cfApiToken) || '')).trim();
  if (!accountId || !token) return { configured: false };
  const now = Date.now();
  // 限流退避窗口内：优先沿用上次成功缓存（stale 标记），无缓存则明确提示稍后再试
  if (now < QUOTA_BACKOFF) {
    if (QUOTA_CACHE && QUOTA_CACHE.data) {
      return Object.assign({}, QUOTA_CACHE.data, { stale: true, error: 'CF API 限流(429)，显示缓存数据（可能滞后）' });
    }
    return { configured: true, error: 'CF API 限流(429)，请 15 分钟后再试' };
  }
  if (QUOTA_CACHE && QUOTA_CACHE.at && (now - QUOTA_CACHE.at) < QUOTA_TTL) return QUOTA_CACHE.data;
  try {
    const start = new Date(); start.setUTCHours(0, 0, 0, 0);
    const end = new Date();
    const query = {
      query: `query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
        viewer { accounts(filter:{accountTag:$accountId}) {
          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }
          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }
        } }
      }`,
      variables: { accountId, filter: { datetime_geq: start.toISOString(), datetime_leq: end.toISOString() } }
    };
    const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify(query)
    });
    if (!res.ok) throw new Error('CF API HTTP ' + res.status);
    const data = await res.json();
    if (data.errors && data.errors.length) throw new Error('GraphQL: ' + JSON.stringify(data.errors).slice(0, 200));
    const accounts = (data && data.data && data.data.viewer && data.data.viewer.accounts) || [];
    if (!accounts.length) throw new Error('未找到账户数据（检查账户 ID 与令牌权限）');
    const acc = accounts[0];
    const w = (acc.workersInvocationsAdaptive || [])[0] || {};
    const p = (acc.pagesFunctionsInvocationsAdaptiveGroups || []).reduce((s, g) => s + ((g && g.sum && g.sum.requests) || 0), 0);
    const requests = (w.sum && w.sum.requests || 0) + p;
    const cpuTime = (w.quantiles && w.quantiles.cpuTimeP50) || 0;
    const subrequests = (w.sum && w.sum.subrequests || 0);
    const percent = QUOTA_LIMIT > 0 ? Math.round((requests / QUOTA_LIMIT) * 1000) / 10 : 0;
    const dataOut = {
      configured: true,
      limit: QUOTA_LIMIT,
      today: { requests, cpuTime, subrequests },
      percent,                                            // 0 - 100（一位小数）
      remaining: Math.max(0, QUOTA_LIMIT - requests),
      updatedAt: end.toISOString()
    };
    QUOTA_CACHE = { at: now, data: dataOut };
    return dataOut;
  } catch (e) {
    const msg = (e && e.message) || String(e);
    if (msg.indexOf('429') >= 0) {
      QUOTA_BACKOFF = now + QUOTA_BACKOFF_TTL;
      if (QUOTA_CACHE && QUOTA_CACHE.data) {
        return Object.assign({}, QUOTA_CACHE.data, { stale: true, error: 'CF API 限流(429)，显示缓存数据（可能滞后）' });
      }
      return { configured: true, error: 'CF API 限流(429)，请 15 分钟后再试' };
    }
    return { configured: true, error: msg };
  }
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
// Trojan 头判定（v1.0.5 修复）：56 字节 SHA224 hex + CRLF；密码匹配或纯 hex 特征均可识别
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

// DoH 端点池（UDP/DNS → DoH 转换用；v1.0.5 修复：V2rayNG 关闭「本地 DNS」时远端 DNS 不可用）
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

// ---------------------------------------------------------------------------
// 出站连接：直连 / SOCKS5 / HTTP CONNECT / 反代 IP 中继
// ---------------------------------------------------------------------------
// 通用超时助手：promise 超时即 reject（出站层兜底，避免目标 SYN 被静默丢弃时永久阻塞）
function withTimeout(promise, ms, msg) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error(msg || '操作超时')), ms || 6000))
  ]);
}

// connect + opened 超时：CF 回环保护会静默丢弃对 CF 托管站点的 SYN（连接永远挂起），
// 带超时快速失败，由 openOutbound 按序走下一出站方式（反代兜底），解决「延迟有、流量 0」
async function connectWithTimeout(hostname, port, ms) {
  const socket = connect({ hostname, port });
  try {
    await withTimeout(socket.opened, ms || 6000, '连接超时（SYN 被静默丢弃）');
  } catch (e) {
    try { socket.close(); } catch (e2) { /* 忽略 */ }
    throw e;
  }
  return socket;
}

async function connectDirect(target, timeoutMs) {
  return connectWithTimeout(target.hostname, target.port, timeoutMs || 6000);
}

// 通过 SOCKS5 代理建立到目标的连接
async function connectViaSocks5(proxy, target) {
  // 修复：代理连接同样走 6s 超时快速失败（原先无超时，代理不可达时永久挂起 → 出站代理填写后全部超时）
  const socket = await connectWithTimeout(proxy.host, proxy.port, 6000);
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
  // 修复：握手期间多读的字节（目标端早期数据）不能直接丢弃，挂到 socket._preamble，
  // 由 WebSocket / xhttp 转发前先补发给客户端，避免 Telegram 等 TLS 握手中途被截断
  if (pending.byteLength > 0) socket._preamble = pending;
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}

// 通过 HTTP/HTTPS CONNECT 代理建立连接
async function connectViaHttpProxy(proxy, target) {
  // 修复：代理连接同样走 6s 超时快速失败（原先无超时，代理不可达时永久挂起 → 出站代理填写后全部超时）
  const socket = await connectWithTimeout(proxy.host, proxy.port, 6000);
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  let authHeader = '';
  if (proxy.user) authHeader = 'Proxy-Authorization: Basic ' + b64FromBytes(TE.encode(`${proxy.user}:${proxy.pass}`)) + '\r\n';
  const connectReq = `CONNECT ${target.hostname}:${target.port} HTTP/1.1\r\nHost: ${target.hostname}:${target.port}\r\n${authHeader}\r\n`;
  await writer.write(TE.encode(connectReq));
  // 读取响应头直到空行；空行后同包多读的字节（目标端早期数据）一并保留
  const { head, leftover } = await readUntilCRLFCRLF(reader);
  if (!/^HTTP\/\d\.\d\s+2\d\d/i.test(head)) throw new Error('HTTP 代理 CONNECT 失败: ' + head.split('\r\n')[0]);
  // 修复：残留字节挂 socket._preamble，由 WebSocket / xhttp 转发前先补发给客户端
  if (leftover && leftover.byteLength > 0) socket._preamble = leftover;
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}

// ---------------------------------------------------------------------------
// Shadowsocks AEAD 出站代理客户端（ss://）：aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305
// 协议：客户端发 16B 随机 salt + AEAD 流（首个 chunk 为 length=0 空块校准 nonce）；
//       服务端回 16B 随机 salt + 同构 AEAD 流。密钥派生：masterKey=SHA256(password)，
//       sessionKey=HKDF-SHA1(masterKey, salt, "ss-subkey")，每 chunk 两个 AEAD 块
//       （2B 大端长度 + 负载），nonce 为 12B 大端计数器逐块 +1。
// ---------------------------------------------------------------------------
function ssCipherAlgo(method) {
  const m = String(method || '').toLowerCase().replace(/_/g, '-');
  if (m === 'aes-128-gcm' || m === 'aes-128gcm') return { name: 'AES-GCM', keyLen: 16 };
  if (m === 'aes-256-gcm' || m === 'aes-256gcm') return { name: 'AES-GCM', keyLen: 32 };
  if (m === 'chacha20-ietf-poly1305' || m === 'chacha20-poly1305' || m === 'chacha20poly1305') return { name: 'CHACHA20-POLY1305', keyLen: 32 };
  return null;
}
// ---------- SS 加密原语（纯 JS，兼容 CF Workers / Node / 浏览器） ----------
// CF Workers 的 crypto.subtle 官方支持矩阵不含 CHACHA20-POLY1305（SS 最常用的 chacha20-ietf-poly1305
// 用 WebCrypto 会抛 NotSupportedError → 出站全超时），故 chacha20-poly1305（RFC 8439）与
// HKDF-SHA1 用纯 JS 实现，不依赖 WebCrypto；AES-GCM 保留 WebCrypto（CF 明确支持、性能好）。
// （rotl32 复用文件已有的 MD5 实现 737 行 function rotl32）

// SHA-1（FIPS 180-4）
function sha1Bytes(data) {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const ml = bytes.length, lenBits = ml * 8;
  const padded = new Uint8Array((((ml + 8) >> 6) + 1) << 6);
  padded.set(bytes);
  padded[ml] = 0x80;
  const dv = new DataView(padded.buffer);
  dv.setUint32(padded.length - 8, Math.floor(lenBits / 0x100000000), false);
  dv.setUint32(padded.length - 4, lenBits >>> 0, false);
  let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
  const w = new Uint32Array(80);
  for (let off = 0; off < padded.length; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4, false);
    for (let i = 16; i < 80; i++) w[i] = rotl32(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
    let a = h0, b = h1, c = h2, d = h3, e = h4;
    for (let i = 0; i < 80; i++) {
      let f, k;
      if (i < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
      else if (i < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
      else if (i < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
      else { f = b ^ c ^ d; k = 0xca62c1d6; }
      const tmp = (rotl32(a, 5) + f + e + k + w[i]) >>> 0;
      e = d; d = c; c = rotl32(b, 30); b = a; a = tmp;
    }
    h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0; h4 = (h4 + e) >>> 0;
  }
  const out = new Uint8Array(20), ov = new DataView(out.buffer);
  ov.setUint32(0, h0, false); ov.setUint32(4, h1, false); ov.setUint32(8, h2, false);
  ov.setUint32(12, h3, false); ov.setUint32(16, h4, false);
  return out;
}
// HMAC-SHA1（RFC 2104）
function hmacSha1(key, data) {
  const block = 64;
  let k = key;
  if (k.length > block) k = sha1Bytes(k);
  const ipad = new Uint8Array(block), opad = new Uint8Array(block);
  for (let i = 0; i < block; i++) { ipad[i] = (i < k.length ? k[i] : 0) ^ 0x36; opad[i] = (i < k.length ? k[i] : 0) ^ 0x5c; }
  return sha1Bytes(concatBytes(opad, sha1Bytes(concatBytes(ipad, data))));
}
// HKDF-SHA1（RFC 5869，info="ss-subkey"）：SS AEAD 会话密钥派生
function hkdfSha1(ikm, salt, keyLen) {
  const prk = hmacSha1(salt && salt.length ? salt : new Uint8Array(20), ikm);
  let t = new Uint8Array(0), okm = new Uint8Array(0);
  for (let i = 1; okm.length < keyLen; i++) {
    const ti = new Uint8Array([i]);
    t = hmacSha1(prk, concatBytes(concatBytes(t, TE.encode('ss-subkey')), ti));
    okm = concatBytes(okm, t);
  }
  return okm.slice(0, keyLen);
}

// ---------- ChaCha20-Poly1305 AEAD（RFC 8439，纯 JS） ----------
function chacha20Block(key32, counter, nonce12) {
  const st = new Uint32Array(16);
  st[0] = 0x61707865; st[1] = 0x3320646e; st[2] = 0x79622d32; st[3] = 0x6b206574;
  const dv = new DataView(key32.buffer, key32.byteOffset, 32);
  for (let i = 0; i < 8; i++) st[4 + i] = dv.getUint32(i * 4, true);
  st[12] = counter >>> 0;
  const nv = new DataView(nonce12.buffer, nonce12.byteOffset, 12);
  st[13] = nv.getUint32(0, true); st[14] = nv.getUint32(4, true); st[15] = nv.getUint32(8, true);
  const w = st.slice();
  const qr = (a, b, c, d) => {
    w[a] = (w[a] + w[b]) >>> 0; w[d] = rotl32(w[d] ^ w[a], 16);
    w[c] = (w[c] + w[d]) >>> 0; w[b] = rotl32(w[b] ^ w[c], 12);
    w[a] = (w[a] + w[b]) >>> 0; w[d] = rotl32(w[d] ^ w[a], 8);
    w[c] = (w[c] + w[d]) >>> 0; w[b] = rotl32(w[b] ^ w[c], 7);
  };
  for (let i = 0; i < 10; i++) {
    qr(0, 4, 8, 12); qr(1, 5, 9, 13); qr(2, 6, 10, 14); qr(3, 7, 11, 15);
    qr(0, 5, 10, 15); qr(1, 6, 11, 12); qr(2, 7, 8, 13); qr(3, 4, 9, 14);
  }
  const out = new Uint8Array(64), odv = new DataView(out.buffer);
  for (let i = 0; i < 16; i++) { w[i] = (w[i] + st[i]) >>> 0; odv.setUint32(i * 4, w[i], true); }
  return out;
}
function chacha20Xor(key32, nonce12, counterStart, data) {
  const out = data.slice();
  const blocks = Math.ceil(data.length / 64);
  for (let b = 0; b < blocks; b++) {
    const ks = chacha20Block(key32, counterStart + b, nonce12);
    const off = b * 64, n = Math.min(64, out.length - off);
    for (let i = 0; i < n; i++) out[off + i] ^= ks[i];
  }
  return out;
}
// Poly1305（RFC 8439 §2.5，BigInt 实现，简洁可靠）
function poly1305(key32, msg) {
  let r = 0n, p = 0n;
  // RFC 8439 §2.5：r = le_bytes_to_num(key[0..16))，s = le_bytes_to_num(key[16..32))（小端）
  for (let i = 0; i < 16; i++) { r |= BigInt(key32[i]) << BigInt(8 * i); p |= BigInt(key32[16 + i]) << BigInt(8 * i); }
  r &= 0x0ffffffc0ffffffc0ffffffc0fffffffn;
  let h = 0n;
  const MOD = (1n << 130n) - 5n;
  // RFC 8439 §2.5.1：每块 n_i = 块内容 || 0x01（小端）。完整 16B 块 → 内容 + 2^128；
  // 不足 16B 的最后一块不补齐 → 内容 + 2^(8*实际字节数)。
  for (let i = 0; i < msg.length; i += 16) {
    const n = Math.min(16, msg.length - i);
    let c = 1n;
    for (let j = n - 1; j >= 0; j--) c = (c << 8n) | BigInt(msg[i + j]);
    h = ((h + c) * r) % MOD;
  }
  h = (h + p) & ((1n << 128n) - 1n);
  const tag = new Uint8Array(16);
  for (let i = 0; i < 16; i++) tag[i] = Number((h >> BigInt(8 * i)) & 0xffn);
  return tag;
}
// AEAD_CHACHA20_POLY1305（RFC 8439 §2.8）；输出 = 密文 || 16B tag
function chacha20Poly1305Seal(key32, nonce12, plaintext, aad) {
  const aadB = aad || new Uint8Array(0);
  const polyKey = chacha20Xor(key32, nonce12, 0, new Uint8Array(32));
  const ct = chacha20Xor(key32, nonce12, 1, plaintext);
  const pad16 = (len) => new Uint8Array((16 - (len % 16)) % 16);
  const le64 = (n) => {
    const b = new Uint8Array(8), dv = new DataView(b.buffer);
    dv.setUint32(0, n >>> 0, true); dv.setUint32(4, Math.floor(n / 0x100000000), true);
    return b;
  };
  const macData = concatBytes(aadB, concatBytes(pad16(aadB.length), concatBytes(ct,
    concatBytes(pad16(ct.length), concatBytes(le64(aadB.length), le64(ct.length))))));
  const tag = poly1305(polyKey, macData);
  return concatBytes(ct, tag);
}
function chacha20Poly1305Open(key32, nonce12, data, aad) {
  if (data.length < 16) throw new Error('SS AEAD 数据过短');
  const ct = data.subarray(0, data.length - 16);
  const got = data.subarray(data.length - 16);
  const aadB = aad || new Uint8Array(0);
  const polyKey = chacha20Xor(key32, nonce12, 0, new Uint8Array(32));
  const pad16 = (len) => new Uint8Array((16 - (len % 16)) % 16);
  const le64 = (n) => {
    const b = new Uint8Array(8), dv = new DataView(b.buffer);
    dv.setUint32(0, n >>> 0, true); dv.setUint32(4, Math.floor(n / 0x100000000), true);
    return b;
  };
  const macData = concatBytes(aadB, concatBytes(pad16(aadB.length), concatBytes(ct,
    concatBytes(pad16(ct.length), concatBytes(le64(aadB.length), le64(ct.length))))));
  const expect = poly1305(polyKey, macData);
  let diff = 0;
  for (let i = 0; i < 16; i++) diff |= expect[i] ^ got[i];
  if (diff !== 0) return null;
  return chacha20Xor(key32, nonce12, 1, ct);
}
async function newSsAead(algoName, keyBytes) {
  const nonce = new Uint8Array(12);
  const next = () => {
    const n = nonce.slice();
    for (let i = 11; i >= 0; i--) { n[i]++; if (n[i] !== 0) break; }
    return n;
  };
  if (algoName === 'CHACHA20-POLY1305') {
    // 纯 JS：CF Workers 的 crypto.subtle 不支持该算法
    return {
      seal(data) { return chacha20Poly1305Seal(keyBytes, next(), data); },
      open(data) {
        const plain = chacha20Poly1305Open(keyBytes, next(), data);
        if (!plain) throw new Error('SS AEAD 解密失败（密码/加密方式与服务器不匹配）');
        return plain;
      }
    };
  }
  // AES-GCM：WebCrypto（CF 明确支持）
  const ck = await crypto.subtle.importKey('raw', keyBytes, { name: algoName }, false, ['encrypt', 'decrypt']);
  return {
    async seal(data) { return new Uint8Array(await crypto.subtle.encrypt({ name: algoName, iv: next() }, ck, data)); },
    async open(data) {
      try { return new Uint8Array(await crypto.subtle.decrypt({ name: algoName, iv: next() }, ck, data)); }
      catch (e) { throw new Error('SS AEAD 解密失败（密码/加密方式与服务器不匹配）'); }
    }
  };
}
async function ssSealChunk(aead, data) {
  const len = new Uint8Array([(data.length >> 8) & 255, data.length & 255]);
  return concatBytes(await aead.seal(len), await aead.seal(data));
}


// 通过 SS 出站代理建立到目标的加密隧道；返回兼容 socket 语义的包装（readable 已解密 / writable 自动加密）
async function connectViaShadowsocks(proxy, target) {
  const algo = ssCipherAlgo(proxy.method);
  if (!algo) throw new Error('不支持的 SS 加密方式: ' + (proxy.method || '（未指定）'));
  if (!proxy.password) throw new Error('SS 出站缺少密码');
  const raw = await connectWithTimeout(proxy.host, proxy.port, 6000);
  const rawWriter = raw.writable.getWriter();
  const rawReader = raw.readable.getReader();
  let pending = new Uint8Array(0);
  const readN = async (n) => {
    while (pending.length < n) {
      const { done, value } = await rawReader.read();
      if (done) throw new Error('SS 连接被关闭');
      pending = concatBytes(pending, value);
    }
    const out = pending.slice(0, n);
    pending = pending.subarray(n);
    return out;
  };
  const masterKey = new Uint8Array(await crypto.subtle.digest('SHA-256', TE.encode(proxy.password)));
  // 客户端方向：随机 salt → subkey；先发 salt + 空 chunk（length=0，供服务端校准 nonce）
  const clientSalt = crypto.getRandomValues(new Uint8Array(16));
  const clientAead = await newSsAead(algo.name, await hkdfSha1(masterKey, clientSalt, algo.keyLen));
  await rawWriter.write(clientSalt);
  await rawWriter.write(await ssSealChunk(clientAead, new Uint8Array(0)));

  // 读方向：先收服务端 16B salt → 派生服务端 subkey → 逐 chunk 解密（空块跳过）
  const readable = new ReadableStream({
    async start(controller) {
      try {
        const serverSalt = await readN(16);
        const serverAead = await newSsAead(algo.name, await hkdfSha1(masterKey, serverSalt, algo.keyLen));
        while (true) {
          const lb = await serverAead.open(await readN(18));
          const len = (lb[0] << 8) | lb[1];
          if (len > 16384) throw new Error('SS 分片长度非法 ' + len);
          const pb = await serverAead.open(await readN(len + 16));
          if (len > 0) controller.enqueue(pb);
        }
      } catch (e) {
        try { controller.error(e); } catch (e2) { /* 忽略 */ }
      }
    }
  });

  // 写方向：明文按 ≤16384 分包加密写入底层
  const writable = new WritableStream({
    async write(chunk) {
      const data = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
      for (let off = 0; off < data.length; off += 16384) {
        await rawWriter.write(await ssSealChunk(clientAead, data.subarray(off, Math.min(data.length, off + 16384))));
      }
    },
    close() { try { rawWriter.close(); } catch (e) { /* 忽略 */ } },
    abort() { try { rawWriter.abort(); } catch (e) { /* 忽略 */ } }
  });

  return {
    readable,
    writable,
    close() { try { raw.close(); } catch (e) { /* 忽略 */ } }
  };
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
    // 修复：返回头部文本 + 空行之后同一包内多读的残留字节（不再丢弃）
    if (idx >= 0) return { head: TD.decode(buf.subarray(0, idx)), leftover: buf.subarray(idx + 4) };
  }
  return { head: TD.decode(buf), leftover: new Uint8Array(0) };
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
    : proxy.type === 'ss'
      ? (t) => connectViaShadowsocks(proxy, t)
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

  // 1) 用户自定义 proxyIP 透明代理：填了「反代/落地 IP」就优先走它作为固定出口，失败再回退直连；
  //    留空则整块跳过、行为不变。这是"临时切落地"开关：填什么落地=走什么落地，清空=恢复直连。
  const relay = cfg.proxyIP ? parseHostPort(cfg.proxyIP, 443) : null;
  if (relay && relay.host) {
    let customTargets = await resolveProxyIPs(relay.host, relay.port);
    if (!customTargets.length) customTargets = [{ hostname: relay.host, port: relay.port }];
    for (const target of customTargets) {
      const r = await tryConnect(target, 6000);
      if (r) return r;
    }
  }

  // 2) 直连目标（非 CF 网站直连可用；CF 网站回环保护会失败）
  //    6s 连接超时：目标 SYN 被丢弃 / 直连被回环保护拦截时不再无限挂起，及时进入反代兜底
  const directResult = await tryConnect({ hostname: parsed.addr, port: parsed.port }, 6000);
  if (directResult) return directResult;

  // 3) 兜底内置地区反代（透明代理：发送去掉 VLESS/Trojan 头部的原始 TLS 数据，对端按 SNI 路由到目标）
  //    多地区轮询：本地区域优先，失败后依次尝试其余区域；单个反代失效不再导致
  //    （尤其 CF 托管站点直连被回环保护拦截时）流量为 0；VLESS / Trojan / XHTTP 均启用
  //    （对齐 1.0.6：Trojan 无反代兜底时 Clash Verge 测速 gstatic.com 被回环保护拦截 → 节点全部超时）
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
        // 补发 SOCKS5/HTTP 代理握手残留字节（目标端早期数据），避免 TLS 握手中途被截断
        if (conn._preamble && conn._preamble.byteLength > 0) send(conn._preamble);
        if (pending && pending.byteLength > parsed.headerLength) await writer.write(pending.subarray(parsed.headerLength));
        pending = null;   // 出站就绪后清空缓冲，后续消息直接写出站
        pumpToReader(conn.readable.getReader(), send, () => { try { server.close(1000); } catch (e) { /* 忽略 */ } });
      } else {
        // 出站未就绪时暂存，避免头部之后的早期数据帧被丢弃（否则 TLS 握手不完整 → 连接通但流量为 0）
        if (writer) await writer.write(chunk); else pending = pending ? concatBytes(pending, chunk) : chunk;
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
      // 补发 SOCKS5/HTTP 代理握手残留字节（目标端早期数据），避免 TLS 握手中途被截断
      if (conn._preamble && conn._preamble.byteLength > 0) controller.enqueue(conn._preamble);
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
// 内容解码：优先 UTF-8（无 U+FFFD 判定），否则按 GBK 解码（对齐 edgetunnel 请求优选API 的编码检测；
// 国内优选 API 常返回 GB2312/GBK 编码，直接 text() 会乱码导致解析不到 IP）
function decodeUtf8OrGbk(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  try {
    const utf8 = new TextDecoder('utf-8').decode(bytes);
    // 修复：以 U+FFFD（替换符）判定有效 UTF-8，而非「不含空格」。
    // 原判定导致 bestcf 等含空格行式的 UTF-8 源被误判为 GBK，UTF-8 中文被 GBK 解码成乱码
    // （如 香港 → 棣欐腐、美国 → 缇庡浗）；GBK 源按 UTF-8 解码必产生替换符，判定依旧准确
    if (!utf8.includes('\uFFFD')) return utf8;
  } catch (e) { /* 继续尝试 GBK */ }
  try { return new TextDecoder('gbk').decode(bytes); } catch (e) { /* 兜底 */ }
  return new TextDecoder().decode(bytes);
}

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

// 订阅时自动拉取最新优选 IP：HostMonit 优选源，10 分钟缓存；
// 失败返回 null，由内置优选池兜底。保证 IP 节点为「当前优选」而非静态过期快照，显著提升可用率。
const SUBPREF_CACHE = { t: 0, ips: null };
async function fetchLatestPreferredIPs(maxCount) {
  maxCount = Math.max(1, parseInt(maxCount) || 150);
  if (Date.now() - SUBPREF_CACHE.t < 10 * 60 * 1000) return SUBPREF_CACHE.ips;
  const res = await fetchTimeout('https://stock.hostmonit.com/CloudFlareYes', { headers: { 'User-Agent': 'Mozilla/5.0' } }, 6000);
  if (res && res.ok) {
    const arr = extractCandidates(await res.text()).filter(x => x.ip && isCloudflareIP(x.ip));
    const seen = new Set(); const out = [];
    for (const x of arr) { if (seen.has(x.ip)) continue; seen.add(x.ip); out.push(x); if (out.length >= maxCount) break; }
    SUBPREF_CACHE.t = Date.now(); SUBPREF_CACHE.ips = out;
    return out;
  }
  return null;
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
  // 高可用补足：去重后仍不足目标数量时，优先并入 bestcf 区域优选池（实时测速过的优质 IP），
  // 其次才用 CF CIDR 随机生成（参考 TunnelBoard：真实优选池可用性远高于随机 CIDR）
  if (dedup.length < (opt.count || 20)) {
    let need = (opt.count || 20) - dedup.length;
    try {
      const pool = await fetchBestcfPool();
      for (const p of pool) {
        if (need <= 0) break;
        if (seen.has(p.ip)) continue;
        if (!isCloudflareIP(p.ip)) continue;
        seen.add(p.ip);
        dedup.push({ ip: p.ip, port: opt.port || p.port || 443, name: p.name || '' });
        need--;
      }
    } catch (e) {}
    stats.bestcf = (opt.count || 20) - dedup.length - need;
  }
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
  if (extra.type === 'xhttp' && isTls) {
    // XHTTP（stream-one）：仅 TLS 端口生效；必须携带 extra（JSON）作为 XHTTP Extra，否则 V2rayN 无法识别完整 xhttp 配置
    // Padding 头/键由 UUID 内部派生（切片），客户端按此发送，服务端按 VLESS 流处理 body
    q += '&type=xhttp&mode=stream-one';
    q += '&extra=' + enc(JSON.stringify(xhttpPadding(cfg)));
  }
  else q += '&type=ws';   // 明文端口与默认路径均走 ws
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
  const isTls = !HTTP_PORTS.has(Number(port));
  // 明文端口（80/8080/8880/2052/2082/2086/2095）：走 security=none 明文 ws（不被 TLS 指纹检测，可用性高）；
  // TLS 端口：security=tls + sni/fp
  let q = isTls
    ? 'security=tls&sni=' + enc(host) + '&fp=chrome&host=' + enc(host) + '&type=ws&path=' + enc('/' + cfg.path)
    : 'security=none&host=' + enc(host) + '&type=ws&path=' + enc('/' + cfg.path);
  if (cfg.alpn && isTls) q += '&alpn=' + enc(cfg.alpn);
  if (cfg.ech && isTls) q += '&ech=' + enc((cfg.echHost || 'cloudflare-ech.com') + '+' + (cfg.echDns || 'https://223.5.5.5/dns-query'));   // ECH：仅 TLS 端口有效
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
      // CFBox 复刻增强：sub:// 子订阅前缀——后面跟 base64(订阅URL) 或直接 URL
      if (d.startsWith('sub://')) {
        let real = d.slice(6);
        if (/^[A-Za-z0-9+/=]+$/.test(real) && real.length % 4 === 0) {
          try { const dec = atob(real); if (/^https?:\/\//i.test(dec)) real = dec; } catch (e) { /* 保持原样 */ }
        }
        if (!/^https?:\/\//i.test(real)) real = 'https://' + real;
        d = real;
      }
      const ck = 'url:' + d + (allowRegionFallback ? '|rf' : '') + (filterCF ? '' : '|raw');
      const cHit = DNH_CACHE.get(ck);
      if (cHit && now - cHit.t < 10 * 60 * 1000) return cHit.ips.slice(0, limitPerDomain);
      try {
        const res = await fetchTimeout(d, {}, 6000);
        if (!res || !res.ok) throw new Error('unreachable');
        // edgetunnel 对齐：数组缓冲 + UTF-8/GBK 编码检测（国内优选 API 常返回 GB2312，直接 text() 会乱码）
        const txt = decodeUtf8OrGbk(await res.arrayBuffer());
        // 兼容多种数据源格式：base64 订阅 / CSV 优选表 / HTML 线路表 / vless 订阅行 / 纯 IP 行
        let content = txt;
        // base64 内容检测（子订阅常见输出）：整段可 base64 且长度对齐则解码后再解析；
        // atob 得到的是二进制串，用 decodeUtf8OrGbk 按 UTF-8/GBK 还原，避免 base64 源中文节点名乱码
        if (/^[A-Za-z0-9+/=\s]{40,}$/.test(content.slice(0, 2000)) && content.replace(/\s+/g, '').length % 4 === 0) {
          try {
            const raw = atob(content.replace(/\s+/g, ''));
            content = decodeUtf8OrGbk(Uint8Array.from(raw, c => c.charCodeAt(0)));
          } catch (e) { /* 非 base64，保持原文 */ }
        }
        const seen = new Set();
        const counters = {};
        const rec = [];
        // bestcf 地区优选池：社区维护的可达中转 IP（非 CF 段），标记后允许绕过 CF 段过滤直接下发（v1.0.5 修复）
        const relay = isTrustedRegionPool(d);
        // 追加/默认模式强制 CF 段；bestcf 地区优选池（社区中转）放行；仅自定义模式（filterCF=false）原样下发
        const pass = (ip) => !filterCF || isCloudflareIP(ip) || relay;
        // CSV 优选表解析（对齐 edgetunnel 请求优选API）：
        // ① wetest 风格：IP地址,端口,数据中心[,TLS]（TLS 列非 true 跳过，避免明文端口无法转发）
        // ② hostmonit 风格：IP,延迟,下载速度 → 命名「CF优选 {延迟}ms {速度}MB/s」
        const csvLines = content.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        if (csvLines.length > 1 && csvLines[0].includes(',')) {
          const headers = csvLines[0].split(',').map(h => h.trim());
          const isWetest = headers.includes('IP地址') && headers.includes('端口');
          const isHostmonit = headers.some(h => h.includes('IP')) && headers.some(h => h.includes('延迟')) && headers.some(h => h.includes('下载速度'));
          if (isWetest || isHostmonit) {
            const ipIdx = headers.findIndex(h => h.includes('IP'));
            const portIdx = headers.indexOf('端口');
            const delayIdx = headers.findIndex(h => h.includes('延迟'));
            const speedIdx = headers.findIndex(h => h.includes('下载速度'));
            const remarkIdx = headers.indexOf('国家') > -1 ? headers.indexOf('国家') : headers.indexOf('城市') > -1 ? headers.indexOf('城市') : headers.indexOf('数据中心');
            const tlsIdx = headers.indexOf('TLS');
            for (const line of csvLines.slice(1)) {
              if (rec.length >= limitPerDomain) break;
              const cols = line.split(',').map(c => c.trim());
              if (tlsIdx !== -1 && cols[tlsIdx] && cols[tlsIdx].toLowerCase() !== 'true') continue;
              const raw = cols[ipIdx] || '';
              const ipm = raw.match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);
              if (!ipm) continue;
              const ip = ipm[1].replace(/^\[|\]$/g, '');
              const port = portIdx !== -1 && cols[portIdx] ? parseInt(cols[portIdx]) : 443;
              const key = ip + ':' + port;
              if (seen.has(key)) continue;
              if (!pass(ip)) continue;
              seen.add(key);
              let nm = remarkIdx !== -1 && cols[remarkIdx] ? cols[remarkIdx] : '';
              if (!nm && delayIdx !== -1 && speedIdx !== -1) nm = 'CF优选 ' + (cols[delayIdx] || '') + 'ms ' + (cols[speedIdx] || '') + 'MB/s';
              if (nm) { counters[nm] = (counters[nm] || 0) + 1; rec.push({ ip, port, name: nm + '-' + String(counters[nm]).padStart(2, '0'), ...(relay ? { relay: true } : {}) }); }
              else rec.push({ ip, port, name: '', ...(relay ? { relay: true } : {}) });
            }
            DNH_CACHE.set(ck, { t: now, ips: rec });
            return rec.slice();
          }
        }
        // HTML 线路表解析（wetest 等页面，对齐 CFBox）：<td data-label="线路名称">…</td><td data-label="优选地址">IP[:端口]</td>…
        if (content.includes('<tr') && content.includes('data-label')) {
          for (const row of content.match(/<tr[\s\S]*?<\/tr>/g) || []) {
            if (rec.length >= limitPerDomain) break;
            const cells = {};
            for (const td of row.match(/<td[^>]*>[\s\S]*?<\/td>/g) || []) {
              const lm = td.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);
              if (lm) cells[lm[1]] = lm[2].replace(/<[^>]+>/g, '').trim();
            }
            const ipm = (cells['优选地址'] || '').match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);
            if (!ipm) continue;
            const ip = ipm[1];
            const port = ipm[2] ? parseInt(ipm[2]) : 443;
            const key = ip + ':' + port;
            if (seen.has(key)) continue;
            if (!pass(ip)) continue;
            seen.add(key);
            // 名称保留线路名称/数据中心（含「移动/联通/电信」时面板 isp 筛选生效）
            const nm = (cells['线路名称'] || cells['数据中心'] || '线路').trim();
            if (nm) { counters[nm] = (counters[nm] || 0) + 1; rec.push({ ip, port, name: nm + '-' + String(counters[nm]).padStart(2, '0'), ...(relay ? { relay: true } : {}) }); }
            else rec.push({ ip, port, name: '', ...(relay ? { relay: true } : {}) });
          }
          DNH_CACHE.set(ck, { t: now, ips: rec });
          return rec.slice();
        }
        // vless/trojan 订阅行提取（子订阅/转换器输出）：vless://uuid@host:port#名称
        for (const line of content.split(/\r?\n/)) {
          if (rec.length >= limitPerDomain) break;
          const vm = line.match(/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);
          if (!vm) continue;
          const host = vm[1].replace(/^\[|\]$/g, '');
          const port = vm[2] ? parseInt(vm[2]) : 443;
          const key = host + ':' + port;
          if (seen.has(key)) continue;
          if (!pass(host)) continue;
          seen.add(key);
          let nm = '';
          const hashIdx = line.indexOf('#');
          if (hashIdx >= 0) { try { nm = decodeURIComponent(line.slice(hashIdx + 1).trim()); } catch (e) { nm = line.slice(hashIdx + 1).trim(); } }
          if (nm) { counters[nm] = (counters[nm] || 0) + 1; rec.push({ ip: host, port, name: nm + '-' + String(counters[nm]).padStart(2, '0'), ...(relay ? { relay: true } : {}) }); }
          else rec.push({ ip: host, port, name: '', ...(relay ? { relay: true } : {}) });
        }
        // 纯文本行：IP / IP:端口 / IP:端口#名称（如 bestcf 的 "IP:端口#地区随机 | 香港 HK | HKG | ..."）
        for (const raw of content.split(/\r?\n/)) {
          if (rec.length >= limitPerDomain) break;
          const m = raw.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);
          if (!m) continue;
          const ip = m[1];
          const port = m[2] ? parseInt(m[2]) : 443;
          const key = ip + ':' + port;
          if (seen.has(key)) continue;   // 源内去重（同 IP 同端口只留一条）
          if (!pass(ip)) continue;
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
            const gen = randomIPsFromCidrs(v6 ? REACHABLE_CIDRS_V6 : REACHABLE_CIDRS, limitPerDomain);
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
    // 用户自定义条目（IP / IP:端口 / 域名:端口 / 带#名称）：
    // 修复：原先纯 IP 与带端口/名称的条目不匹配下方域名正则被整体丢弃 → 自定义订阅模式节点全部丢失、名称被忽略
    if (!d.includes('://') && !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(d)) {
      const cm = d.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);
      if (!cm) return [];
      const host = cm[1].replace(/^\[|\]$/g, '');
      const port = cm[2] ? parseInt(cm[2]) : 443;
      const rawName = (cm[3] || '').trim();
      const isIp = isValidIp(host);
      if (!isIp && !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(host)) return [];
      if (filterCF && isIp && !isCloudflareIP(host)) return [];
      if (rawName) return [{ ip: host, port, name: rawName }];   // 带名称原样下发（域名保留让客户端动态解析，名称不被重写）
      if (isIp) return [{ ip: host, port, name: '' }];
      // 无名称的域名：落入下方 DoH 解析分支（与原先一致）
    }
    const hit = DNH_CACHE.get(d);
    if (hit && now - hit.t < 10 * 60 * 1000) return hit.ips.slice(0, limitPerDomain).map((ip, i) => ({ ip, port: 443, name: d + '-' + (i + 1) }));
    // 按需解析 IPv6：默认仅查 A（IPv4），筛选含 IPv6 时才追加 AAAA 查询，节省 50% DNS 子请求
    const aRec = await qry(d, 'A', 1);
    // 严格自定义模式（filterCF=false）：域名解析结果原样下发，不做 CF 段过滤（用户自担可用性）
    let ips = filterCF ? aRec.filter(isCloudflareIP) : aRec;
    if (v6) {
      const aaaaRec = await qry(d, 'AAAA', 28);
      ips = [...new Set(aRec.concat(aaaaRec))].filter(ip => filterCF ? isCloudflareIP(ip) : true);
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

async function buildNodes(cfg, cap = 800, skipSet = null) {
  const nodes = [];
  const used = new Set();
  // 订阅模式：random 随机优选（CF CIDR 随机生成指定数量，不经域名解析）
  const mode = (cfg.optimizer && cfg.optimizer.subMode) || '';
  // 筛选含 IPv6 时随机生成/补足混合 v4+v6 段；仅勾选 IPv6 时全走官方 v6 网段（ips-v6 拉取，实测可用）
  const ipT = (cfg.filter && cfg.filter.ipType) || [];
  const wantV6 = ipT.includes('IPv6');
  const onlyV6 = ipT.length === 1 && ipT[0] === 'IPv6';
  const RAND_CIDRS = onlyV6 ? OFFICIAL_V6_CIDRS : (wantV6 ? [...REACHABLE_CIDRS, ...OFFICIAL_V6_CIDRS] : REACHABLE_CIDRS);
  // 仅自定义模式（custom + 关闭追加）：严格按「优选节点」输入框内容下发，放行非 CF 段 IP（用户自担可用性）；
  // 其它模式（默认/追加/随机）入口必须是 CF 段——非 CF IP 无法转发到 Worker（历史 v2rayNG 全 -1 根因）
  const allowNonCF = (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault));
  // 节点形态统一按 1.0.6 机制（方案 B）：所有模式端口原样单端口下发（固定 443、不随机 TLS 端口、不追加明文端口变体）
  // 测活剔除范围（方案 A）：默认模式开启测活剔除死节点；自定义订阅 / 随机优选模式不测活
  const probeSkip = (mode === 'custom' || mode === 'random');
  const push = (server, port, name, trusted) => {
    if (nodes.length >= cap) return;   // 生成过程限流：避免多协议膨胀超 Worker CPU
    // 入口 IP 硬性要求：非 CF 段 IP 无法转发到 Worker，直接丢弃；
    // 例外：bestcf 地区优选池的社区中转 IP（trusted 标记）可用作客户端入口（v1.0.5 修复）
    if (isValidIp(server) && !isCloudflareIP(server) && !allowNonCF && !trusted) return;
    const key = server + ':' + port;   // 按 服务器:端口 去重（单端口机制：同 IP 同端口仅下发一次）
    if (used.has(key)) return;
    used.add(key);
    const isTls = !HTTP_PORTS.has(Number(port));
    if (cfg.tlsOnly && !isTls) return;   // TLS 控制：仅下发 TLS 端口节点，明文端口跳过
    // 节点端口统一按 1.0.6 机制（方案 B）：端口原样下发（默认/自定义/随机优选均固定源端口，通常是 443），
    // 不做 TLS 端口随机（443 全域可达性最佳），也不追加明文端口变体
    const finalPort = Number(port);
    if (cfg.enableVless) nodes.push(vlessNode(cfg, server, finalPort, name));
    if (cfg.enableTrojan) nodes.push(trojanNode(cfg, server, isTls ? finalPort : Number(port), name));  // Trojan 明文/TLS 端口均下发
    if (cfg.enableXhttp && isTls) nodes.push(vlessNode(cfg, server, finalPort, name, { type: 'xhttp' }));  // XHTTP 仅 TLS 端口
  };
  // 单端口下发（1.0.6 机制，方案 B）：每个地址按源端口（通常 443）单条下发，不追加明文端口变体
  const multiPort = (server, port, name, trusted) => {
    push(server, Number(port) || 443, name, trusted);
  };
  if (mode === 'random') {
    let n = Math.min(Math.max(parseInt(cfg.optimizer.subRandomCount) || 16, 1), Math.min(99, cap));
    // 节点数量控制：开启后以设定数量为准（全局生效，与轮询开/关无关；提升随机优选生成量，使下发达到设定总数）
    if (cfg.nodeLimit) {
      const lim = parseInt(cfg.nodeLimitCount) || 0;
      if (lim > 0) n = Math.min(Math.max(n, lim), cap);
    }
    // 数量 = 下发节点总数（含启用的所有协议），而非 IP 数：每个 IP 生成一条后计数，达 n 即止
    const protoCount = (cfg.enableVless ? 1 : 0) + (cfg.enableTrojan ? 1 : 0) + (cfg.enableXhttp ? 1 : 0) || 1;
    let made = 0;
    // 去重下发：随机模式生成 3 倍数量后过滤已下发 IP；新 IP 排前、已下发 IP 紧随补齐，节点总量恒定
    const randPool = randomIPsFromCidrs(RAND_CIDRS, Math.ceil(n / protoCount) * 3);
    let randIPs = randPool;
    if (skipSet) {
      const unissued = randPool.filter(ip => !skipSet.has(ip));
      const prev = randPool.filter(ip => skipSet.has(ip));
      randIPs = [...unissued, ...prev];
    }
    for (const ip of randIPs) {
      if (made >= n) break;
      // 随机优选模式：按 1.0.6 机制——每个 IP 每协议仅固定 443 单端口下发，不随机 TLS 端口、不追加明文端口变体
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
    multiPort(p.host, p.port, nm || '优选IP-' + String(i + 1).padStart(2, '0'));
  });
  // 双选（IPv4+IPv6）时把 preferredIPs 重排为 v4/v6 交替：各来源 v4 天然排前，
  // 若不做交替，开启「节点数量控制 / 轮询」后 push 限流截断（cap）会先占满 v4，IPv6 被整体挤掉——
  // 交替后按顺序截断天然保持 v4/v6 混合比例（约 1:1），数量控制与轮询开启时同样生效
  let prefIPs = cfg.preferredIPs || [];
  if (wantV6 && !onlyV6 && prefIPs.length > 1) {
    const v4l = [], v6l = [];
    for (const x of prefIPs) (String(x.ip).indexOf(':') >= 0 ? v6l : v4l).push(x);
    const mixed = [];
    const mx = Math.max(v4l.length, v6l.length);
    for (let i = 0; i < mx; i++) {
      if (i < v4l.length) mixed.push(v4l[i]);
      if (i < v6l.length) mixed.push(v6l[i]);
    }
    prefIPs = mixed;
  }
  prefIPs.forEach((x, i) => {
    multiPort(x.ip, x.port || 443, x.name || '优选IP-' + String(i + 1).padStart(2, '0'), x.relay === true);
  });
  // 自定义订阅模式：仅下发用户设置节点，不兜底内置池、不做 CF 随机补足；
  // 但开启「追加内置及默认节点」(subIncludeDefault) 后需要完整下发自定义+默认+补足，因此继续走补足逻辑
  if (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault)) return nodes;
  if (!domains.length && !(cfg.preferredIPs || []).length) {
    // 无任何优选：内置优选 IP 池（开箱即用）+ 官方域名兜底（无明确地区，直接使用“优选IP-XX”名称）
    parseIPList(BUILTIN_PREFERRED_IPS.join('\n')).forEach(x => multiPort(x.ip, x.port || 443, x.name || '0'));
    BUILTIN_OFFICIAL_DOMAINS.forEach((d, i) => multiPort(d, 443, '域名-' + String(i + 1).padStart(2, '0')));
  }
  // CF CIDR 随机补足：节点数不足 fillCount（封顶 cap）时随机生成补齐（大量下发，客户端自动择优；对齐 1.0.6/2.0 第一版）
  // 补足候选做小范围 TCP 测活（可达排前，不足由未测活补齐），保证节点数量充足
  const fillCount = Math.min(Math.max(parseInt((cfg.optimizer && cfg.optimizer.fillCount) || 0) || 0, 0), 5000);
  const need = Math.min(fillCount, cap) - used.size;   // 按唯一 IP 数补足，而非节点数（多协议节点会膨胀 nodes.length）
  if (need > 0) {
    // 优先用实测高存活率大站任播轮换补足（随机 CIDR 生成的任播 IP 大量不可达、客户端测速 -1）；
    // 轮换仍带已下发去重，超出 STABLE 数量后回退随机 CIDR（保证海量下发数量）；
    // 候选再做 TCP 测活（1.5s 超时，网络等待不计 CPU），可达排前，不足由未测活补齐
    const freshStable = skipSet ? BUILTIN_STABLE_IPS.filter(ip => !skipSet.has(ip)) : BUILTIN_STABLE_IPS.slice();
    const fillPool = randomIPsFromCidrs(RAND_CIDRS, need * 3);
    const freshRand = skipSet ? fillPool.filter(ip => !skipSet.has(ip)) : fillPool;
    let fillIPs = [...freshStable, ...freshRand];
    if (fillIPs.length < need) fillIPs = [...BUILTIN_STABLE_IPS, ...fillPool];
    if (fillIPs.length > 0) {
      const probeCount = Math.min(fillIPs.length, Math.max(need, 20), 60);
      const probeShot = fillIPs.slice(0, probeCount);
      // 自定义订阅 / 随机优选模式不进行测活（节点原样下发）；默认模式保持测活剔除死节点
      // 并发受限（≤4）：排队不再计入超时，避免假死
      const probeOk = probeSkip ? probeShot.map(() => true) : await probeAll(probeShot, (ip) => testProxyAlive(ip, 443, 1500));
      const alive = probeShot.filter((ip, i) => probeOk[i]);
      const rest = fillIPs.slice(probeCount);
      fillIPs = [...alive, ...rest].slice(0, need);
    }
    let fi = 0;
    for (const ip of fillIPs) {
      if (nodes.length >= cap) break;   // 补足同样受 cap 限流（与 push 一致）
      fi++;
      multiPort(ip, 443, '优选IP-' + String(fi).padStart(3, '0'));
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
  const { host: srvRaw, port: prt } = parseNodeServer(n);
  // IPv6 以裸地址传递：Clash/Sing-box/Surge/Loon 的 server 字段端口均为独立字段/逗号分隔，要求裸 IPv6；
  // 仅 vless URI（生成处单独加方括号）与 QuanX（ip:port 格式，生成处补方括号）需要 [ip] 形式
  const srv = srvRaw;
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
    // rg 兼容字符串（旧配置 'all'/'HK'）与数组（面板多选地区 ['HK','SG']）；数组含 'all' 或空 = 全部地区
    const tg = Array.isArray(rg)
      ? (rg.length === 0 || rg.includes('all') ? null : rg.flatMap(r => REGION_TAGS[r] || []))
      : (rg !== 'all' ? (REGION_TAGS[rg] || []) : null);
    const partial = s.length > 0 && s.length < FILTER_ISPS.length;
    return nodes.filter((n, i) => {
      const m = meta[i];
      const isV6 = m.host.indexOf(':') >= 0;
      if (!m.name) return false;  // 跳过无法解析的非法节点
      if (tg && !tg.some(t2 => m.up.includes(t2.toUpperCase()))) {
        // 无地区标记的通用节点（优选IP-XX / 域名-XX / 原生地址）是 CF 通用入口，任意地区可用，不参与地区过滤；
        // 地区过滤仅剔除明确标记为其它地区的节点，避免指定地区后节点数量骤减
        if (!/^(优选IP|域名)-\d+/.test(m.name) && m.name !== '原生地址') return false;
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
    // ALPN：ws/trojan 强制 HTTP/1.1（CF Worker 的 WebSocket 仅支持 HTTP/1.1 升级，mihomo utls(chrome) 默认 ALPN 含 h2 → WS 升级失败）；
    // xhttp 必须 h2（stream-one 依赖 HTTP/2 双向流，h1.1 请求体未发完 CF 边缘无法回传响应 → Clash Verge 节点全部超时）
    L.push(p.network === 'xhttp' ? '    alpn: [h2]' : '    alpn: [http/1.1]');
    L.push('    servername: ' + yamlVal(p.servername));
    if (p.type === 'trojan') L.push('    sni: ' + yamlVal(p.servername));   // mihomo trojan 只认 sni 字段（servername 被忽略）：CF 优选 IP 下缺 sni 时 TLS SNI 回落为 server(IP)，Go/utls 对 IP 型 ServerName 不发送 SNI 扩展 → CF 边缘无法路由 → 403 → Clash Verge 全 Error
    L.push('    client-fingerprint: chrome');
    if (p['ech-opts']) {
      L.push('    ech-opts:');
      L.push('      enable: ' + yamlVal(p['ech-opts'].enable));
      L.push('      query-server-name: ' + yamlVal(p['ech-opts']['query-server-name']));
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
    // 修复：mihomo 规范中 XHTTP 请求主机字段名为 host（headers.Host 是错误写法，
    // 会导致 Nekobox 等客户端把 'Host: 域名' 整行误导入 XHTTP 标头导致节点报错）
    L.push('      host: ' + yamlVal(xo.host));
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
      ...(cfg.ech && tls ? { 'ech-opts': { enable: true, 'query-server-name': cfg.echHost || 'cloudflare-ech.com' } } : {})   // 修复 #6：mihomo ECH 官方格式为顶层 ech-opts（enable + query-server-name），旧 tls-opts.ech 不被识别导致 ECH 未生效
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
        alpn: ['h2'],   // 修复：xhttp stream-one 依赖 HTTP/2 双向流必须 h2（ws 节点才用 http/1.1）
        'xhttp-opts': {
          path,
          mode: 'stream-one',
          // 修复：mihomo 规范 XHTTP 主机字段为 host（headers.Host 会被 Nekobox 误读为标头）
          host,
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

// Surfboard（Surge 兼容格式，不支持 VLESS/XHTTP，Trojan 必须 TLS）：
// 将 VLESS TLS 节点转换为 Trojan（密码=UUID，TLS/WS 参数一致），XHTTP 与明文端口节点过滤，
// 输出 Surge 风格配置（[General]/[Proxy]/[Proxy Group]/[Rule]），Surfboard 直接导入
function generateSurfboard(cfg, nodes) {
  const host = cfg.host, path = '/' + cfg.path;
  const sb = [];
  for (const n of nodes) {
    if (n.startsWith('trojan://') && n.indexOf('security=none') < 0) sb.push(n);
    else if (n.startsWith('vless://') && n.indexOf('type=xhttp') < 0 && n.indexOf('security=none') < 0)
      sb.push(n.replace(/^vless:\/\//, 'trojan://').replace('encryption=none&', ''));
  }
  const lines = sb.map((n, i) => {
    const { user, srv, prt, name } = parseShareNode(n, i);
    return `${name} = trojan, ${srv}, ${prt}, password=${user}, ws=true, ws-path=${path}, ws-headers=Host:${host}, tls=true, skip-cert-verify=true, sni=${host}`;
  });
  return `#!MANAGED-CONFIG
[General]
loglevel = notify
dns-server = 223.5.5.5, 119.29.29.29

[Proxy]
${lines.join('\n')}

[Proxy Group]
🚀 节点选择 = select, ${lines.map(l => l.split(' = ')[0]).join(', ')}
🌐 全球直连 = select, DIRECT
🐟 漏网之鱼 = select, 🚀 节点选择

[Rule]
GEOIP,CN,DIRECT
FINAL,🐟 漏网之鱼
`;
}

// ---------- Sing-box JSON ----------
function generateSingbox(cfg, nodes) {
  const host = cfg.host;
  const path = '/' + cfg.path;
  const outbounds = nodes.map((n, i) => {
    const { user, srv, prt, name, isTrojan, tls } = parseShareNode(n, i);
    const type = getParam(n, 'type') || 'ws';
    // XHTTP 在 sing-box 中不支持 uTLS（官方限制，xhttp+utls 会导致 outbound 异常/流量不通），xhttp 模式禁用 utls
    // insecure/alpn：CF 优选 IP 场景 server 为 Anycast IP（证书为域名证书无 IP SAN）须跳过校验；
    // 强制 HTTP/1.1 ALPN 避免 CF 边缘协商 h2 导致 WS 升级失败（v1.0.5 修复）
    // xhttp stream-one 依赖 HTTP/2 双向流，ALPN 必须 h2（h1.1 经 CF 边缘请求体未发完响应无法回传 → 超时）；ws 才用 http/1.1
    const tlsObj = tls ? (type === 'xhttp'
      ? { enabled: true, server_name: host, insecure: true, alpn: ['h2'] }
      : { enabled: true, server_name: host, insecure: true, alpn: ['http/1.1'], utls: { enabled: true, fingerprint: 'chrome' } })
      : { enabled: false };
    // early data：TLS 下的 ws 走 2048 字节 early data（ed=2048），
    // 减少首包往返；明文 ws 与 xhttp 不启用
    const transport = type === 'xhttp' ? { type: 'xhttp', mode: 'stream-one', path } :
      (tls ? {
        type: 'ws', path, headers: { Host: host },
        max_early_data: 2048, early_data_header_name: 'Sec-WebSocket-Protocol'
      } : { type: 'ws', path, headers: { Host: host } });
    if (isTrojan) {
      return {
        type: 'trojan', tag: name, server: srv, server_port: prt,
        password: user, tls: tlsObj,
        transport
      };
    }
    return {
      type: 'vless', tag: name, server: srv, server_port: prt,
      uuid: user, packet_encoding: 'xudp',
      tls: tlsObj,
      transport
    };
  });
  const tags = outbounds.map(o => o.tag);
  // rule_set 分流（参考 CFNext sing-box 生成）：远程规则集（MetaCubeX .list 文本格式）+ 主流分流域名
  const RULE_SETS = [
    ['geosite-cn', '🎯 全球直连'], ['geosite-google', '🌐 谷歌服务'], ['geosite-apple', '🍎 苹果服务'],
    ['geosite-microsoft', 'Ⓜ️ 微软服务'], ['geosite-openai', '🤖 OpenAI'], ['geosite-spotify', '🌍 国外媒体'],
    ['geosite-youtube', '🌍 国外媒体'], ['geosite-netflix', '🌍 国外媒体'], ['geosite-disney', '🌍 国外媒体'],
    ['geosite-twitter', '🌍 国外媒体'], ['geosite-telegram', '🌍 国外媒体'], ['geosite-github', '🌍 国外媒体'],
    ['geosite-category-ads-all', 'block']
  ];
  const config = {
    log: { level: 'info' },
    // 完整 DNS + fakeip：远程 DoH 解析（走代理）+ 本地直连 DNS 兜底；fakeip 加速分流
    dns: {
      servers: [
        { tag: 'dns-remote', address: 'https://1.1.1.1/dns-query' },
        { tag: 'dns-direct', address: 'udp://223.5.5.5' }
      ],
      strategy: 'ipv4_only',
      independent_cache: true,
      fakeip: { enabled: true, inet4_range: '198.18.0.0/15', store_fakeip: true }
    },
    inbounds: [
      {
        type: 'mixed', tag: 'mixed-in', listen: '127.0.0.1', listen_port: 2080,
        sniff: true, sniff_override_destination: true
      },
      {
        type: 'tun', tag: 'tun-in', interface_name: 'tun0',
        inet4_address: ['172.19.0.1/30'], mtu: 9000,
        auto_route: true, strict_route: true, stack: 'mixed',
        sniff: true, sniff_override_destination: true
      }
    ],
    outbounds: [
      ...outbounds,
      { type: 'direct', tag: 'direct' },
      { type: 'block', tag: 'block' },
      { type: 'dns', tag: 'dns-out' },
      { type: 'selector', tag: '🚀 节点选择', outbounds: tags },
      { type: 'selector', tag: '🎯 全球直连', outbounds: ['direct'] },
      { type: 'selector', tag: '🐟 漏网之鱼', outbounds: ['🚀 节点选择', '🎯 全球直连'] },
      { type: 'selector', tag: '🌍 国外媒体', outbounds: ['🚀 节点选择'] },
      { type: 'selector', tag: '🌐 谷歌服务', outbounds: ['🚀 节点选择'] },
      { type: 'selector', tag: '🤖 OpenAI', outbounds: ['🚀 节点选择'] },
      { type: 'selector', tag: '🍎 苹果服务', outbounds: ['🎯 全球直连'] },
      { type: 'selector', tag: 'Ⓜ️ 微软服务', outbounds: ['🎯 全球直连'] }
    ],
    route: {
      rules: [
        { protocol: 'dns', outbound: 'dns-out' },
        { ip_is_private: true, outbound: 'direct' },
        ...RULE_SETS.map(([rs, out]) => ({ rule_set: [rs], outbound: out })),
        { geoip: ['cn'], outbound: 'direct' },   // 大陆 IP 兜底直连（覆盖未收录域名 / 纯 IP 连接的大陆应用）
        { ip_is_private: true, outbound: 'block' }
      ],
      rule_set: RULE_SETS.map(([rs]) => ({
        type: 'remote', tag: rs, format: 'source',
        url: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/' + rs + '.list'
      })),
      final: '🐟 漏网之鱼',
      auto_detect_interface: true,
      default_domain_resolver: { server: 'dns-remote' }
    },
    experimental: {
      clash_api: { external_controller: '127.0.0.1:9090' }
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
  // QuanX 的 ip:port 格式中 IPv6 必须带方括号（裸 v6 与端口冒号歧义）
  const qxHost = (srv) => srv.indexOf(':') >= 0 ? '[' + srv + ']' : srv;
  const servers = nodes.map((n, i) => {
    const { user, srv, prt, name } = parseShareNode(n, i);
    if (n.startsWith('trojan://')) {
      return `trojan=${qxHost(srv)}:${prt}, password=${user}, over-tls=true, tls-host=${host}, obfs=wss, obfs-host=${host}, obfs-uri=${path}, tls-verification=true, tag=${name}`;
    }
    const tls = (getParam(n, 'security') || 'tls') === 'tls';
    return `vless=${qxHost(srv)}:${prt}, method=none, password=${user}, obfs=${tls ? 'wss' : 'ws'}, obfs-host=${host}, obfs-uri=${path}${tls ? ', tls-verification=true, tls13=true' : ''}, tag=${name}`;
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

// ★ 测活总开关（见 DEFAULT_CONFIG.probeAlive / 面板「节点测活」）：关闭时所有测活函数直接返回 true（不剔除任何节点）
// 注意：由于 Cloudflare 运行时禁止 connect() 到 CF IP 段，对 CF 段 IP 的探测恒失败（抛
// "proxy request failed, cannot connect to the specified address"），故测活仅在「第三方中转（非 CF 段）」
// 场景有真实信息量；对 CF 段 IP 关闭测活 = 避免把最优来源整体判死。
let PROBE_ALIVE_ENABLED = false;
function setProbeAlive(v) { PROBE_ALIVE_ENABLED = (v === true || v === 'true' || v === '1' || v === 1); }

// ★ 探测并发闸（见下面的 probeLimit）
// 为什么必须有：Cloudflare Workers 每次调用**同时等待响应头的连接数上限是 6**（Free/Paid 相同，官方 limits 文档
// "Simultaneous open connections"）。第 7 个连接不会报错，而是**排队**；而各测活函数用的是
// Promise.race(conn.opened, 超时)，计时器在 connect() 调用那一刻就开始跑 ——
// 于是排队的探测会「还没轮到建连就超时」→ 被误判为死节点（假死）。
// 这里用信号量把并发压到 SAFE 以下，超时计时器改为「拿到令牌后才启动」，排队不再计入超时。
const PROBE_CONCURRENCY = 4;              // 留 2 个名额给 DoH fetch / KV / D1 等其它出网调用
let probeRunning = 0;
const probeWaiters = [];
function probeLimit() {
  if (probeRunning < PROBE_CONCURRENCY) { probeRunning++; return Promise.resolve(); }
  return new Promise(res => probeWaiters.push(res));
}
function probeRelease() {
  const next = probeWaiters.shift();
  if (next) next(); else probeRunning--;
}
// 对所有候选做并发受限的探测；fn 收 (item, index)，返回真值 = 可用
async function probeAll(items, fn) {
  const out = [];
  let idx = 0;
  const workers = Array.from({ length: Math.min(PROBE_CONCURRENCY, items.length) }, async () => {
    while (idx < items.length) {
      const i = idx++;
      await probeLimit();
      try { out[i] = await fn(items[i], i); }
      catch (e) { out[i] = false; }
      finally { probeRelease(); }
    }
  });
  await Promise.all(workers);
  return out;
}


// ProxyIP 可用性检测：TCP 连通测试（参考 TunnelBoard 测活思路，独立实现），2 秒超时
async function testProxyAlive(server, port, timeoutMs) {
  if (!PROBE_ALIVE_ENABLED) return true;   // 测活关闭：不剔除
  const ms = timeoutMs || 2000;
  try {
    const conn = connect({ hostname: server, port: port });
    await Promise.race([conn.opened, new Promise((_, rej) => setTimeout(() => rej(new Error('proxy timeout')), ms))]);
    try { conn.close(); } catch (e) {}
    return true;
  } catch (e) { return false; }
}

// relay IP 双重测活：TCP 连通 + HTTP GET 返回 200/204 才算活（纯 TCP 通但 HTTP 不通的假活节点剔除）
async function testRelayAlive(server, port, timeoutMs) {
  if (!PROBE_ALIVE_ENABLED) return true;   // 测活关闭：不剔除
  return testRelayAliveRaw(server, port, timeoutMs);
}
async function testRelayAliveRaw(server, port, timeoutMs) {
  const ms = timeoutMs || 2500;
  try {
    const conn = connect({ hostname: server, port: port });
    await Promise.race([conn.opened, new Promise((_, rej) => setTimeout(() => rej(new Error('tcp timeout')), ms))]);
    // TCP 通后发 HTTP GET /，期望 200/204（反代服务应返回任意 HTTP 响应）
    const writer = conn.writable.getWriter();
    const reader = conn.readable.getReader();
    await writer.write(new TextEncoder().encode('GET / HTTP/1.1\r\nHost: ' + server + '\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n'));
    const chunk = await Promise.race([reader.read(), new Promise((_, rej) => setTimeout(() => rej(new Error('http timeout')), ms))]);
    try { conn.close(); } catch (e) {}
    const head = new TextDecoder().decode(chunk.value || new Uint8Array(0));
    return /^HTTP\/1\\.[01] (200|204)/.test(head);
  } catch (e) { return false; }
}


// 域名可用性预检：DoH 解析首个 CF IP → TCP 测活，剔除死域名（NXDOMAIN / 解析到死 IP，客户端测速 -1 主因）。
// 活域名仍按域名形式下发（保留客户端动态 DNS 解析拿最优边缘的优势）；结果 10 分钟缓存，避免每次订阅重测
async function dohFirstCF(domain) {
  try {
    const res = await fetchTimeout('https://cloudflare-dns.com/dns-query?name=' + encodeURIComponent(domain) + '&type=A', { headers: { accept: 'application/dns-json' } }, 4000);
    if (!res || !res.ok) return null;
    const j = await res.json();
    const ips = (j.Answer || []).filter(a => a.type === 1 && /^\d+\.\d+\.\d+\.\d+$/.test(a.data)).map(a => a.data);
    return ips.filter(isCloudflareIP)[0] || null;
  } catch (e) { return null; }
}
const DOMAIN_ALIVE_CACHE = { t: 0, list: null };
async function filterAliveDomains(domainText) {
  // 测活关闭：域名预检直接跳过，返回原文（原样下发，不剔除任何域名）
  if (!PROBE_ALIVE_ENABLED) return String(domainText || '').split(/[\n,;]+/).map(s => s.trim().replace(/^\*\./, '')).filter(Boolean).join('\n');
  if (Date.now() - DOMAIN_ALIVE_CACHE.t < 10 * 60 * 1000 && DOMAIN_ALIVE_CACHE.list !== null) return DOMAIN_ALIVE_CACHE.list;
  const domains = String(domainText || '').split(/[\n,;]+/).map(s => s.trim().replace(/^\*\./, '')).filter(Boolean);
  // DoH 解析 + TCP 测活双重预检（10 分钟缓存）：解析不出 CF IP 或解析到非 CF 段的域名（源站已搬走）直接判死；
  // 解析出 CF IP 再做 TCP 测活，连接超时的死域名剔除——客户端测速 -1 主因
  // 并发受限（≤4）：DoH fetch + TCP 探测都算出网，避免撞 6 连接上限；排队不计入超时
  const checked = await probeAll(domains, async (d) => {
    const ip = await dohFirstCF(d);
    if (!ip || !isCloudflareIP(ip)) return { d, ok: false };
    return { d, ok: await testProxyAlive(ip, 443) };
  });
  const alive = checked.map((c, i) => (c && c.ok ? domains[i] : null)).filter(Boolean);
  DOMAIN_ALIVE_CACHE.t = Date.now();
  DOMAIN_ALIVE_CACHE.list = alive.join('\n');
  return DOMAIN_ALIVE_CACHE.list;
}

// bestcf 区域优选池拉取（内存缓存 10 分钟；并发拉 5 区域，解析 "IP:端口" 行）
const bestcfCache = { list: null, at: 0 };
async function fetchBestcfPool() {
  if (bestcfCache.list && Date.now() - bestcfCache.at < 10 * 60 * 1000) return bestcfCache.list;
  const out = [];
  const jobs = BESTCF_REGION_URLS.map(async (rp) => {
    try {
      const res = await fetchTimeout(rp.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, 8000);
      if (!res.ok) return;
      const text = await res.text();
      const got = [];
      for (const line of text.split(/[\r\n]+/)) {
        const m = line.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);
        if (m && got.length < rp.count) got.push({ ip: m[1], port: m[2] ? parseInt(m[2], 10) : 443, name: rp.label + '-' + String(got.length + 1).padStart(2, '0') });
      }
      got.forEach(g => out.push(g));
    } catch (e) {}
  });
  await Promise.all(jobs);
  bestcfCache.list = out;
  bestcfCache.at = Date.now();
  return out;
}

// 内置保底节点：CF 官方任播段 IP（实测 443 全部可达），固定 443 追加下发，
// 无论任何订阅模式都保证订阅内存在稳定可用节点（参考 TunnelBoard 内置优选思路）
function appendStableNodes(nodes, rc, cap) {
  if (nodes.length >= cap) return;
  const used = new Set();
  for (const n of nodes) {
    try { used.add(parseNodeServer(n).host); } catch (e) { /* 忽略 */ }
  }
  let si = 0;
  for (const ip of BUILTIN_STABLE_IPS) {
    if (nodes.length >= cap) break;
    if (used.has(ip)) continue;
    used.add(ip);
    si++;
    const nm = '内置·保底-' + String(si).padStart(2, '0');
    if (rc.enableVless) nodes.push(vlessNode(rc, ip, 443, nm));
    if (nodes.length >= cap) break;
    if (rc.enableTrojan) nodes.push(trojanNode(rc, ip, 443, nm));
    if (nodes.length >= cap) break;
    if (rc.enableXhttp) nodes.push(vlessNode(rc, ip, 443, nm, { type: 'xhttp' }));
  }
}

// 兜底入口节点（代码独立实现）：
// 兜底入口节点（代码独立实现）：
// 原生地址（当前访问域名）仅在面板「原生地址」开关（src.native）开启后追加——默认关闭不追加，
// 与「地址来源」面板控制保持一致；
// 内置地区反代（proxyip.*.cmliussss.net）不再自动下发为订阅节点
// （需要反代时请通过「出站代理」或「反代/落地 IP」填写自己的中继服务）
function appendFallbackNodes(nodes, rc, cap, colo) {
  if (nodes.length >= cap) return;
  const used = new Set();
  for (const n of nodes) {
    try { used.add(parseNodeServer(n).host); } catch (e) { /* 忽略 */ }
  }
  const pushNode = (server, name) => {
    if (nodes.length >= cap) return;
    if (used.has(server)) return;
    used.add(server);
    if (rc.enableVless) nodes.push(vlessNode(rc, server, 443, name));
    if (rc.enableTrojan) nodes.push(trojanNode(rc, server, 443, name));
    if (rc.enableXhttp) nodes.push(vlessNode(rc, server, 443, name, { type: 'xhttp' }));
  };
  // 原生地址：仅面板「原生地址」开关（src.native）开启时下发；默认关闭不下发
  if (rc.src && rc.src.native === true) {
    pushNode(rc.host, '原生地址');
  }
  // 内置地区反代（proxyip.*.cmliussss.net）不再自动下发（用户要求订阅中不出现内置反代节点）
}

// 根据 UA 或指定格式生成订阅
async function generateSubscription(cfg, requestUrl, format, ua, colo) {
  // 兜底：path 为空或为 "/" 时一律回退 UUID（兼容 KV 残留旧值；Worker WS/xhttp 代理仅在 panelPath=cfg.path 处理）
  if (!cfg.path || cfg.path === '/' || cfg.path === '') cfg.path = cfg.uuid;
  // 筛选含 IPv6 时刷新官方 v6 网段（ips-v6，6 小时缓存节流；失败沿用内置/上次成功段）
  const _ipT0 = (cfg.filter && cfg.filter.ipType) || [];
  if (_ipT0.includes('IPv6')) await refreshOfficialV6CIDRs();
  // 首次初始化：preferredIPs 太少时同步拉取多源补充（部署即有 300+ 节点，不等 cron）
  // 关键：relay IP（第三方 VPS）做 TCP 测活过滤，踢掉死节点；CF 段 IP 也做 TCP 测活（GFW 封段剔除）
  // 失败不阻塞订阅响应
  // 修复：仅默认模式（订阅模式关闭）生效；自定义订阅/随机优选由用户配置决定节点来源，
  // 注入内置池会污染「仅自定义节点」语义并优先占满下发上限，导致自定义节点被截断未正常下发
  const _initSubMode = (cfg.optimizer && cfg.optimizer.subMode) || '';
  if (_initSubMode === '' && (!cfg.preferredIPs || cfg.preferredIPs.length < 80)) {
    try {
      const [bestcfList, hostmonitList, builtinList] = await Promise.all([
        fetchBestcfPool().catch(() => []),
        fetchLatestPreferredIPs(200).catch(() => null),
        Promise.resolve(parseIPList(BUILTIN_PREFERRED_IPS.join('\n'))),
      ]);
      const cfNew = [], relayNew = [];
      const seen = new Set((cfg.preferredIPs || []).map(x => x.ip));
      for (const x of [...(cfg.preferredIPs || []), ...(bestcfList || []), ...(hostmonitList || []), ...builtinList]) {
        if (!x || !x.ip || seen.has(x.ip)) continue;
        seen.add(x.ip);
        const entry = { ip: x.ip, port: x.port || 443, name: x.name || '', relay: !!x.relay };
        if (entry.relay || !isCloudflareIP(entry.ip)) relayNew.push(entry);
        else cfNew.push(entry);
      }
      const relayToTest = relayNew.slice(0, 100);
      const cfToTest = cfNew.slice(0, 150);
      // 并发受限（≤4，见 probeAll）：避免撞 CF「同时连接上限 6」导致排队即超时的假死
      const [relayOk, cfOk] = await Promise.all([
        probeAll(relayToTest, (x) => testRelayAlive(x.ip, x.port || 443, 2500)),
        probeAll(cfToTest, (x) => testProxyAlive(x.ip, x.port || 443, 2500)),
      ]);
      const aliveRelay = relayToTest.filter((x, i) => relayOk[i]);
      const aliveCf = cfToTest.filter((x, i) => cfOk[i]);
      const finalCf = aliveCf.slice(0, 210);
      const finalRelay = aliveRelay.slice(0, 40);
      cfg.preferredIPs = [...(cfg.preferredIPs || []), ...finalCf, ...finalRelay].slice(0, 250);
    } catch (e) { /* 初始化失败不影响现有逻辑 */ }
  }
  // 自定义域名部署（非 *.workers.dev）：Cloudflare 边缘实测明文 HTTP 端口（80/8080/8880/2052/2082/2086/2095）全部拒绝，
  // 自动禁用明文端口节点（等效 tlsOnly）；节点端口统一固定为源端口（通常 443）单端口下发（1.0.6 机制）。
  const hostOnly443 = !/\.workers\.dev$/i.test(new URL(requestUrl).hostname);
  const rc = Object.assign({}, cfg, { host: cfg.host || new URL(requestUrl).hostname });
  if (hostOnly443) { rc.tlsOnly = true; }
  const mode = (cfg.optimizer && cfg.optimizer.subMode) || '';
  // 订阅模式决定节点来源：
  //   ''（关闭，默认）→ 仅用内置默认优选池限量下发（不解析自定义订阅的优选节点）
  //   custom          → 使用「优选节点」框内地址（支持汇聚，可增删）
  //   random          → 由 buildNodes 直接随机生成，此处不解析
  let resolved = [];
  // 筛选含 IPv6 时查询 AAAA 记录并生成 IPv6 节点（默认双选 IPv4+IPv6 同样生效）；
  // 仅勾选 IPv6（单选）时随机生成/补足全部走 IPv6 专用段（参考 CFNext v1.0.5 可达性原则）
  const ipT = (cfg.filter && cfg.filter.ipType) || [];
  const wantV6 = ipT.includes('IPv6');
  const onlyV6 = ipT.length === 1 && ipT[0] === 'IPv6';
  const RAND_CIDRS = onlyV6 ? OFFICIAL_V6_CIDRS : (wantV6 ? [...REACHABLE_CIDRS, ...OFFICIAL_V6_CIDRS] : REACHABLE_CIDRS);
  // 内置 Cloudflare 优选 IP（实测可达的 Anycast 兜底池，始终随订阅下发；无明确地区，名称统一“优选IP-XX”）
  const builtinIPs = parseIPList(BUILTIN_PREFERRED_IPS.join('\n')).map(x => ({ ip: x.ip, port: x.port || 443, name: x.name || ('优选IP-' + String(BUILTIN_PREFERRED_IPS.indexOf(x) + 1).padStart(2, '0')) }));
  if (mode === 'custom') {
    // 自定义订阅（支持汇聚）：默认仅下发「优选节点」框内设置的节点（严格模式，不生成任何额外节点）；
    // 开启 subIncludeDefault 后追加内置优选 IP 池 + 默认 6 条地区源节点（含地区回退生成 + CF CIDR 补足），自定义与默认节点合并下发
    const incDefault = !!(cfg.optimizer && cfg.optimizer.subIncludeDefault);
    // 仅自定义模式（关闭追加）：输入框内容（域名/优选API/IP）原样下发，不做 CF 段过滤（用户自担可用性）；
    // 追加模式：CF 段过滤 + 地区回退生成，自定义与默认节点合并下发
    // 严格模式（仅自定义节点）：放大每源解析上限与总量上限（用户汇聚多源 100/源 时不被 40/源、300 总量截断，数量与填入地址对等）
    const strictMode = !incDefault;
    resolved = await resolvePreferredDomains(cfg.preferredDomains || '', strictMode ? 200 : 40, strictMode ? 2000 : 300, incDefault, incDefault, wantV6);
    if (incDefault) {
      // 默认域名池优先（CNAME 域名解析出可用 CF 优选 IP，保证可达性），自定义节点追加在后并去重
      const def = await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS, 40, 240, false, true, wantV6);
      const seen = new Set(def.map(x => x.ip));
      resolved = [...def, ...resolved.filter(x => !seen.has(x.ip))];
      rc.preferredIPs = [...(rc.preferredIPs || []), ...builtinIPs];
      if (!rc.optimizer) rc.optimizer = {};
      // 追加模式下按接近上限的数量补足（fillCount 决定 buildNodes 的 CF CIDR 随机补足 IP 数，默认 0 时强制大量补足），满足"下发全部节点"预期
      rc.optimizer.fillCount = Math.max(parseInt(rc.optimizer.fillCount) || 0, 800);
    }
  } else if (mode === '') {
    // 关闭（使用面板默认）：
    // 1) 原生地址（src.native）：工作器域名直接作为节点 server 下发（默认关闭）；
    // 2) 第三方优选域名直接作为节点 server 下发（客户端连接时动态 DNS 解析，拿到当前最优 CF 边缘 IP，可用性远高于静态 IP 快照）；
    // 3) 订阅时自动拉取最新优选 IP（HostMonit 仓库，10 分钟缓存）作为 IP 节点，失败回退内置池；
    // 4) CF CIDR 随机补足保证海量下发。
    // 地区筛选开启时仍按地区源解析成 IP（地区节点需确定地区标记；域名节点无地区标记不参与地区过滤）。
    const src = cfg.src || {};
    const useNative = src.native === true;            // 启用原生地址（工作器域名）
    const useDomain = src.prefDomain !== false;       // 启用优选域名（默认开）
    const useIp = src.prefIp !== false;               // 启用优选 IP（内置池 + 实时拉取，默认开）
    const useCustom = src.customPref === true;        // 启用自定义优选（面板「优选配置」列表，默认关闭）
    // 原生地址（工作器域名，IPv4 入口）：仅勾选 IPv6 时跳过，避免 v4 域名混入
    if (useNative && !onlyV6) {
      rc.preferredDomains = (rc.preferredDomains ? rc.preferredDomains + '\n' : '') + rc.host + '#原生地址';
    }
    if (!useCustom) rc.preferredIPs = [];
    const fl2 = cfg.filter || {};
    const regionSel = fl2.region;
    // 兼容字符串（旧配置）与数组（面板多选）：空 / 'all' / ['all'] 视为全部地区
    const regionAll = Array.isArray(regionSel) ? (regionSel.length === 0 || regionSel.includes('all')) : (!regionSel || regionSel === 'all');
    if (regionAll) {
      resolved = [];
      // 仅勾选 IPv6 时跳过 v4 优选域名（域名节点为 IPv4 入口，混入会占满 cap 并被 filterNodes 剔除，导致数量控制下发不足）
      if (useDomain && !onlyV6) {
        // 域名可用性预检：DoH 解析 + TCP 测活，死域名（NXDOMAIN/死 IP）不下发——客户端测速 -1 主因；
        // 活域名仍按域名形式下发，保留客户端动态 DNS 解析拿当前最优 CF 边缘的优势
        const aliveDomains = await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);
        if (aliveDomains) rc.preferredDomains = (rc.preferredDomains ? rc.preferredDomains + '\n' : '') + aliveDomains;
      }
      // 仅勾选 IPv6 时跳过 IPv4 来源（fresh/地区池/内置池均为 v4，筛选后会被剔除，避免无谓解析与 CPU 开销）
      if (useIp && !onlyV6) {
        const fresh = await fetchLatestPreferredIPs(150);
        if (fresh && fresh.length) rc.preferredIPs = [...(rc.preferredIPs || []), ...fresh];
        // v1.0.5 修复：并入 bestcf 地区优选池（社区维护的可达中转 IP，可用率高，trusted 标记放行）作为默认优选 IP 来源之一
        try {
          const regionPool = await resolvePreferredDomains(DEFAULT_REGION_POOLS, 100, 600, true, true, false);
          if (regionPool && regionPool.length) rc.preferredIPs = [...(rc.preferredIPs || []), ...regionPool];
        } catch (e) { /* bestcf 池拉取失败不影响其它来源 */ }
      }
      // IPv6 节点来源：筛选含 IPv6 时解析默认域名池 AAAA 记录生成 v6 IP 节点（仅追加，不影响 v4 链路）；
      // 仅勾选 IPv6 时并入官方域名 AAAA（增加真实可达 v6 数量），并关闭 CIDR 随机补足——
      // 随机生成的任播段 v6 地址并非 CF 实际部署 IP，实测全部 -1，宁可少而真实
      if (wantV6 && useDomain) {
        try {
          const v6src = DEFAULT_PREFERRED_DOMAINS + (onlyV6 ? '\n' + BUILTIN_OFFICIAL_DOMAINS.join('\n') : '');
          const v6dom = await resolvePreferredDomains(v6src, 40, onlyV6 ? 800 : 240, false, true, true);
          if (v6dom && v6dom.length) rc.preferredIPs = [...(rc.preferredIPs || []), ...v6dom];
        } catch (e) { /* AAAA 解析失败不影响其它来源 */ }
      }
    } else if (useDomain) {
      resolved = await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS, 100, 300, false, true, wantV6);
    }
    // 内置实测池（IPv4）：单选 IPv6 时全量转 IPv4-embedded IPv6（2606:4700::<hex>，与对应 IPv4 路由到同一 CF 边缘，下发即用）；
    // 混合（IPv4+IPv6 同选）时全局下发——内置池全量保持 IPv4 且全量转 embedded IPv6，两侧都不削减
    if (useIp) {
      if (onlyV6) {
        const embedded = builtinIPs.map(b => ({ ip: ipv4ToEmbeddedV6(b.ip), port: b.port || 443, name: b.name })).filter(b => b.ip);
        rc.preferredIPs = [...(rc.preferredIPs || []), ...embedded];
      } else if (wantV6) {
        const embedded = builtinIPs.map(b => ({ ip: ipv4ToEmbeddedV6(b.ip), port: b.port || 443, name: b.name })).filter(b => b.ip);
        rc.preferredIPs = [...(rc.preferredIPs || []), ...builtinIPs, ...embedded];
      } else {
        rc.preferredIPs = [...(rc.preferredIPs || []), ...builtinIPs];
      }
    }
    // 地址来源全部关闭时兜底内置优选池，保证订阅永不为空（客户端不会收到「无效订阅」）；单选 IPv6 时同样转 embedded
    if (!useNative && !useDomain && !useIp && !useCustom) {
      if (onlyV6) {
        const embedded = builtinIPs.map(b => ({ ip: ipv4ToEmbeddedV6(b.ip), port: b.port || 443, name: b.name })).filter(b => b.ip);
        rc.preferredIPs = [...(rc.preferredIPs || []), ...embedded];
      } else {
        rc.preferredIPs = [...(rc.preferredIPs || []), ...builtinIPs];
      }
    }
    // 仅勾选 IPv6（单选）时清掉各来源混入的 IPv4（域名 AAAA 解析的 v4 与用户自定义列表中的 v4 一并剔除，
    // 避免 filterNodes 过滤空集后放宽回退全 v4；参考 CFNext v1.0.5 同款处理）
    if (onlyV6 && rc.preferredIPs) rc.preferredIPs = rc.preferredIPs.filter(x => String(x.ip).indexOf(':') >= 0);
    if (!rc.optimizer) rc.optimizer = {};
    // 单选 IPv6 时内置实测池已全量转 embedded IPv6（真实可达），无需 CIDR 随机补足（随机 v6 不可达会拖低可用率）；
    // 纯 IPv4 / 混合保留少量随机补足供海量下发
    rc.optimizer.fillCount = Math.max(parseInt(rc.optimizer.fillCount) || 0, onlyV6 ? 0 : 1000);
    // 连通率提升（纯排序，不删节点）：实测存活率最高的 20 条大站任播 IP（BUILTIN_STABLE_IPS）排到优选池最前——
    // 客户端默认选第一个可用节点，头部放最稳 IP = 用户优先踩到高存活率节点；其它来源顺序与数量不变（appendStableNodes 自带 used 去重不会重复）
    if (rc.preferredIPs && rc.preferredIPs.length) {
      const stableNodes = BUILTIN_STABLE_IPS.map((ip, i) => ({ ip, port: 443, name: '优选IP-S' + String(i + 1).padStart(2, '0') }));
      const stableSet = new Set(stableNodes.map(n => n.ip));
      rc.preferredIPs = [...stableNodes, ...rc.preferredIPs.filter(x => !stableSet.has(x.ip))];
    }
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
  // 仅勾选 IPv6 时：resolved（地区筛选解析）在首次过滤之后才并入，此处二次过滤保证纯 v6（数量控制下不被 v4 挤占）
  if (onlyV6 && rc.preferredIPs) rc.preferredIPs = rc.preferredIPs.filter(x => String(x.ip).indexOf(':') >= 0);
  ua = (ua || '').toLowerCase();
  const forced = (format || '').toLowerCase();
  // 节点数上限（按 Workers / Pages 免费额度 10ms CPU 硬限调整）：
  //   - 纯行格式（v2ray 通用链接）拼接近乎零成本 → 800 上限，满足大量择优；
  //   - 结构化格式（Clash/Singbox/Surge/Loon/QuanX）模板化生成后实测 250 节点冷启动 ~5ms、300 节点 ~6ms、400 节点 ~8ms，
  //     为保免费版稳定（含网络/KV/解析开销）收紧到 300，避免 CPU 超限导致订阅 5xx；
  //   - 自定义订阅开启「追加内置及默认节点」时：轻量格式放宽到 800，结构化格式放宽到 300。
  const isHeavy = ['clash', 'singbox', 'sing-box', 'surge', 'surfboard', 'loon', 'quanx', 'quantumultx'].includes(forced) || /clash|singbox|sing-box|surge|surfboard|loon|quantumult/.test(ua);
  let cap = isHeavy ? 300 : 800;
  if (mode === 'custom' && cfg.optimizer && cfg.optimizer.subIncludeDefault) cap = isHeavy ? Math.max(cap, 300) : Math.max(cap, 800);
  // 严格自定义模式（仅自定义节点）：汇聚多源时放宽上限，保证填入的节点数量对等下发（多协议膨胀不超此线即完整下发）
  if (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault)) cap = isHeavy ? Math.max(cap, 800) : Math.max(cap, 2000);
  // 轮询机制关闭：不限制 Clash 300 / V2rayN 800 上限，一次性下发全部节点（数量由数据源与 fillCount 决定）
  if (cfg.polling === false) cap = 10000;
  // 节点数量控制（默认开启，全局生效，与轮询状态无关）：按设定数量精确下发（上限 1000 防滥用），轮询关闭时同样受限
  if (cfg.nodeLimit) {
    const n = parseInt(cfg.nodeLimitCount) || 0;
    if (n > 0) cap = Math.min(n, 1000);
  }
  // 配额安全自动调节：当日用量偏高时由路由层注入 _quotaCap，此处做最终收紧（永远不放大）
  if (cfg._quotaCap) cap = Math.min(cap, cfg._quotaCap);
  // 随机优选节点无地区标记，随机模式下忽略地区筛选（ipType/isp 仍生效）
  const fl = (mode === 'random') ? Object.assign({}, cfg.filter, { region: 'all' }) : cfg.filter;
  // 连通率优化：仅默认模式（mode===''）对最终优选 IP 池（内置静态池 + HostMonit 实时池 + bestcf 中转池）做 TCP 测活（10 分钟缓存），
  // 剔除不可达 IP（静态快照与中转池中大量 IP 已失效，客户端测速 -1 主因）；
  // 自定义模式（严格/追加）节点由用户自定（自建落地端口往往非 443，TCP 测活会误删），整体跳过测活剔除；
  // 默认模式剔除数量由 fillCount 自动补足（补足路径同样已测活），下发总量保持不变
  // 二次测活移除（对齐 1.0.6）：默认模式不再对优选 IP 池做 TCP 测活剔除——Worker 边缘连通性 ≠ 客户端连通性，
  // 测活误杀导致可用节点少、订阅生成慢；全量下发由客户端自行择优（fillCount 补足块内的小范围测活仍保留）
  let nodes = filterNodes(await buildNodes(rc, cap, skipSet), fl);
  // 兜底入口节点：自定义订阅严格模式（仅下发框内节点）不追加，其余模式追加原生地址与地区反代入口；
  // 仅勾选 IPv6 时跳过（原生地址/反代均为 IPv4 域名，混入会破坏「只下发 IPv6」语义）
  const strictCustom = (mode === 'custom' && !(cfg.optimizer && cfg.optimizer.subIncludeDefault));
  if (!strictCustom && !onlyV6) appendFallbackNodes(nodes, rc, cap, colo);
  // 内置保底节点：无论任何模式（含自定义订阅严格模式）始终追加 20 个实测可用的 CF 官方任播段 IP（443），
  // 保证订阅内始终有稳定可用节点（参考 TunnelBoard 内置优选思路）；仅勾选 IPv6 时跳过（保底池为 IPv4）
  // 内置保底节点：严格自定义模式（仅自定义节点）且已有自定义节点时跳过——用户自担可用性，不混入「内置·保底-X」；
  // 严格模式解析结果为空时仍追加保底，保证订阅永不为空（客户端不会收到「无效订阅」）
  if (!onlyV6 && !(strictCustom && nodes.length > 0)) appendStableNodes(nodes, rc, cap);
  // 下发控制开启时按 cap 补足（全局生效，与轮询状态无关）：优先用 bestcf 区域优选池（实时测速过的优质 IP）补齐，
  // 不足再用 ProxyIP 域名兜底（TCP 测活通过才下发），最后才回退 CF CIDR 随机生成——
  // 避免下发大量「延迟 -1」的随机 IP 死节点（参考 TunnelBoard：订阅场景不生成随机 IP）
  // 节点数量控制补足：严格自定义模式（仅自定义节点）跳过——不追加 bestcf 池 / ProxyIP 反代 / CIDR 随机 IP 等任何内置节点；
  // 内置节点仅在「追加内置优选池与默认地区源」开启时作为追加下发
  if (cfg.nodeLimit && mode && !strictCustom && nodes.length < cap) {
    const need = cap - nodes.length;
    // 该补足块仅服务「自定义订阅（追加内置）/ 随机优选」两种模式：
    // 优先用 bestcf 区域优选池（实时测速过的优质 IP）补齐，不足再回退 CF CIDR 随机补足——
    // 避免纯随机 CIDR 灌入大量「延迟 -1」死节点；两模式均不进行测活（按 1.0.6 机制）
    const seen = new Set();
    for (const n of nodes) { try { seen.add(parseNodeServer(n).host); } catch (e) {} }
    const pushFill = (ip, port, name) => {
      if (nodes.length >= cap) return;
      if (seen.has(ip)) return;
      seen.add(ip);
      nodes.push(vlessNode(rc, ip, port || 443, name));
    };
    let fi = 0;
    try {
      const pool = await fetchBestcfPool();
      const fresh = skipSet ? pool.filter(p => !skipSet.has(p.ip)) : pool;
      const ordered = fresh.length >= need ? fresh : pool;
      for (const p of ordered) { pushFill(p.ip, p.port, p.name || ('优选IP-' + String(p.port))); if (nodes.length >= cap) break; }
    } catch (e) {}
    if (nodes.length < cap) {
      const left = cap - nodes.length;
      const v6c = OFFICIAL_V6_CIDRS;
      const fillCidrs = onlyV6 ? v6c : (wantV6 ? [...REACHABLE_CIDRS, ...v6c] : REACHABLE_CIDRS);
      const pool = randomIPsFromCidrs(fillCidrs, left * 3);
      const freshP = skipSet ? pool.filter(ip => !skipSet.has(ip)) : pool;
      const fillIPs = (freshP.length >= left) ? freshP : pool;
      for (const ip of fillIPs) {
        if (nodes.length >= cap) break;
        fi++;
        pushFill(ip, 443, '优选IP-' + String(fi).padStart(3, '0'));
      }
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
  else if (forced === 'surfboard') { type = 'text/plain'; body = generateSurfboard(rc, nodes); }
  else if (forced === 'loon') { type = 'text/plain'; body = generateLoon(rc, nodes); }
  else if (forced === 'quanx' || forced === 'quantumultx') { type = 'text/plain'; body = generateQuanX(rc, nodes); }
  else if (forced === 'plain' || forced === 'raw') { type = 'text/plain'; body = nodes.join('\n'); }
  else if (forced === 'v2ray' || forced === 'v2rayn' || forced === 'shadowrocket' || forced === 'nekoray' || forced === 'stash') {
    // 明文下发（与 1.0.6 一致）：base64 订阅在 AsteriskNG / v2rayNG 中按系统编码（GBK）解码，
    // 中文节点名（UTF-8）会被误读成乱码（如 美国 → 缇庡浗）；明文按响应 charset=utf-8 读取则正常
    type = 'text/plain'; body = nodes.join('\n');
  }
  // UA 自动识别
  else if (ua.includes('clash') || ua.includes('stash')) { type = 'text/yaml'; body = generateClash(rc, nodes); }
  else if (ua.includes('sing-box')) { type = 'application/json'; body = generateSingbox(rc, nodes); }
  else if (ua.includes('surge')) { type = 'text/plain'; body = generateSurge(rc, nodes); }
  else if (ua.includes('surfboard')) { type = 'text/plain'; body = generateSurfboard(rc, nodes); }
  else if (ua.includes('loon')) { type = 'text/plain'; body = generateLoon(rc, nodes); }
  else if (ua.includes('quantumult')) { type = 'text/plain'; body = generateQuanX(rc, nodes); }
  // 默认（v2rayN / Shadowrocket / 未知客户端）：返回 base64 编码订阅（V2rayN 标准格式）
  else { type = 'text/plain'; body = nodes.join('\n'); }   // 明文（同 1.0.6，避免客户端按 GBK 解码 base64 导致中文名称乱码）
  return { type, body, issued: issuedIPs };
}

// ---------------------------------------------------------------------------
// 管理面板 HTML（单页应用）
// ---------------------------------------------------------------------------
const PANEL_HTML = String.raw`
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

`;

// ---------------------------------------------------------------------------
// 登录页
// ---------------------------------------------------------------------------
const loginHTML = `
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · 登录</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}
[data-theme="light"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}
[data-theme="light"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}
.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}
.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}
.mark svg{width:20px;height:20px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.25}
.brand .bt b{font-size:16px}
.brand .bt span{font-size:11.5px;color:var(--dim)}
h1{font-size:15px;margin-bottom:4px}
p{color:var(--dim);font-size:13px;margin-bottom:18px}
input{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}
input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
button{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}
button:hover{filter:brightness(1.06)}
button:disabled{opacity:.6;cursor:not-allowed}
.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}
.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}
</style>
</head>
<body>
<div class="box">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>CFNext</b><span>Cloudflare 全新代理管理面板</span></div>
  </div>
  <h1>登录</h1>
  <p>请输入管理密码以继续</p>
  <div class="msg" id="msg">密码错误，请重试</div>
  <form id="form">
    <input type="password" id="pwd" placeholder="管理密码" autofocus autocomplete="current-password">
    <button type="submit" id="btn">登录</button>
  </form>
  <div class="foot">配置保存在 Cloudflare KV 中，密码错误 24 小时后自动失效</div>
</div>
<script>
(function(){
  var t = 'dark';
  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}
  var resolved = t === 'auto'
    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : t;
  document.documentElement.setAttribute('data-theme', resolved);
  var next = new URLSearchParams(location.search).get('next') || '/';
  document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var btn = document.getElementById('btn');
    var msg = document.getElementById('msg');
    btn.disabled = true; msg.style.display = 'none';
    fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })
      .then(function(r){ return r.json(); })
      .then(function(r){
        if (r && r.ok){ location.href = r.next || '/'; }
        else { msg.style.display = 'block'; btn.disabled = false; }
      })
      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });
  });
})();
</script>
</body>
</html>

`;

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

  // 自定义订阅路径（基础配置中设置）作为订阅别名入口：/AAZ/sub 同样命中订阅处理；
  // 面板入口与 API 仍只认 panelPath，别名路径不开放面板/管理功能
  const subAlias = String(cfg.subUrl || '').trim().replace(/^\/+/, '').replace(/\/+$/, '');
  const isPanelRoot = segs[0] === panelPath || (!!subAlias && segs[0] === subAlias);

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
      const subCfg = skip ? Object.assign({}, cfg, { _skipIssued: skip }) : cfg;
      // 配额安全：自动调节 —— 当日用量 ≥ 60% 免费额度时，按用量比例收缩本次下发上限（保护账户）
      if (cfg.quotaAuto) {
        try {
          const q = await getQuota(env, cfg);
          if (q.configured && q.today && q.today.requests >= Math.round(QUOTA_LIMIT * 0.6)) {
            const usage = q.today.requests / q.limit;
            const scale = Math.max(0.1, (1 - usage) / 0.4);   // 60%→1.0，100%→0.1
            subCfg._quotaCap = Math.max(20, Math.round(1000 * scale));
          }
        } catch (e) { /* 监控失败不阻断订阅 */ }
      }
      const sub = await generateSubscription(subCfg, request.url, fmt, UA, request.cf && request.cf.colo);
      if (cfg.polling !== false && env.K && typeof env.K.put === 'function' && sub.issued && sub.issued.length) {
        // 滑动窗口历史队列：合并历史与本次已下发 IP，去重后保留最近 200 条（新 IP 优先保留），
        // 既实现客户端定期换新 IP，又避免集合无限增长或清空引起数量塌陷
        const prevIps = skip ? Array.from(skip) : [];
        const win = [...new Set([...sub.issued, ...prevIps])].slice(0, 200);
        // KV 免费写配额仅 1,000 次/日：仅当窗口内容实际变化（出现新 IP）时才写入，
        // 客户端高频刷新但未换新 IP 时跳过写入，大幅降低 KV 写消耗与 CPU
        const changed = win.length !== prevIps.length || win.some((ip, i) => ip !== prevIps[i]);
        if (changed) {
          const payload = JSON.stringify({ t: Date.now(), ips: win });
          if (env._ctx && typeof env._ctx.waitUntil === 'function') env._ctx.waitUntil(env.K.put('issued', payload).catch(() => {}));
          else await env.K.put('issued', payload).catch(() => {});
        }
      }
      return new Response(sub.body, { status: 200, headers: { 'Content-Type': sub.type + '; charset=utf-8', 'Cache-Control': 'no-store', 'Content-Disposition': 'attachment; filename="CFNext"; filename*=utf-8\'\'CFNext' } });
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
          // 首次保存联动：KV 从未显式设置过 quotaAuto 时，本次保存若已配置 Cloudflare 监控 → 自动调节默认开启
          // （否则表单默认 false 会写入 KV，导致刷新后联动失效；用户后续手动关闭并保存后以用户为准）
          let kvHadQuota = false;
          if (env.K && typeof env.K.get === 'function') {
            try {
              const kvJson = await env.K.get('config', { cacheTtl: 30 });
              if (kvJson) { const kvCfg = JSON.parse(kvJson); if (kvCfg.quotaAuto !== undefined) kvHadQuota = true; }
            } catch (e) { /* 读取失败按未设置处理 */ }
          }
          const merged = Object.assign(JSON.parse(JSON.stringify(cfg)), body);
          if (!kvHadQuota && merged.quotaAuto === false) {
            const hasMonitor = Boolean((merged.cfAccountId && merged.cfApiToken) || (env.CF_ACCOUNT_ID && env.CF_API_TOKEN));
            if (hasMonitor) merged.quotaAuto = true;
          }
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
        invalidateConfigCache();   // 清空配置缓存，reload 后 loadConfig 读到空 KV → 默认配置
        return json({ ok: true, msg: '已重置：KV 已清空，面板还原为初始部署状态' });
      } catch (e) { return json({ ok: false, msg: '重置失败: ' + (e.message || e) }, 500); }
    }

    if (apiName === 'status') {
      return json({ ok: true, data: { version: VERSION, kind: deployKind() === 'obfuscated' ? '混淆版' : '明文版', host: url.hostname, path: panelPath, region: (request.cf && request.cf.colo) || 'unknown', kv: !!(env.K && typeof env.K.get === 'function'), workersDev: /\.workers\.dev$/i.test(url.hostname) } });
    }

    if (apiName === 'update') {
      try {
        const r = await checkUpdate(env);
        const d = { current: r.current, latest: r.latest, hasUpdate: r.hasUpdate, kind: r.kind, error: r.error || '' };
        if (r.hasUpdate && r.code) d.code = r.code;
        return json({ ok: true, data: d });
      } catch (e) { return json({ ok: false, msg: '检测失败: ' + (e.message || e) }, 500); }
    }

    if (apiName === 'quota') {
      try {
        const q = await getQuota(env, cfg);
        return json({ ok: true, data: q });
      } catch (e) { return json({ ok: false, msg: '查询失败: ' + (e.message || e) }, 500); }
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
