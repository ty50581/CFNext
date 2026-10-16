import{connect as t}from"cloudflare:sockets";const e=atob,n=new RegExp("^("+e("c29ja3M1")+"|http|https|ss):\\/\\/(.+)$","i"),r=new RegExp(e("Y2xhc2g=")+"|"+e("c2luZ2JveA==")+"|"+e("c2luZy1ib3g=")+"|"+e("c3VyZ2U=")+"|"+e("c3VyZmJvYXJk")+"|"+e("bG9vbg==")+"|"+e("cXVhbnR1bXVsdA==")),a=new RegExp(e("a2FyaW5n"),"i"),o=new RegExp("(?:"+e("dmxlc3M=")+"|"+e("dHJvamFu")+"):\\/\\/[^@\\s/]+@(\\[[0-9a-fA-F:]+\\]|[A-Za-z0-9.-]+)(?::(\\d{1,5}))?"),i=new RegExp("^"+e("dmxlc3M=")+":\\/\\/"),s="2.8.1",DEPLOY_EDITION="\u6df7\u6dc6\u7248",l="CFN"+"ext",c="luma"+"_auth";function d(){try{return"\u5c0f\u8bf4\u6df7\u6dc6\u7248"===DEPLOY_EDITION?"novel":"\u6df7\u6dc6\u7248"===DEPLOY_EDITION?"obfuscated":"plain"}catch(t){return"plain"}}const p=e("UEFJQ05J")+"/"+e("Q0ZOZXh0");let u=null;function h(t){const e=String(t||"").match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:null}function f(t,e){const n=h(t),r=h(e);if(!n||!r)return 0;for(let t=0;t<3;t++)if(n[t]!==r[t])return n[t]<r[t]?-1:1;return 0}function m(t){const e=t.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return e?e[1]:null}const g="application/octet-stream",b="text/yaml; charset=utf-8",v={Tracking:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Tracking.mrs",ct:g},Advertising:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Advertising.mrs",ct:g},AWAvenueAds:{url:"https://raw.githubusercontent.com/"+e("VEctVHdpbGlnaHQ=")+"/"+e("QVdBdmVudWU=")+"-Ads-Rule/main/Filters/"+e("QVdBdmVudWU=")+"-Ads-Rule-"+e("Q2xhc2g=")+".yaml",ct:b},Direct:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Direct.mrs",ct:g},Private:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Private.mrs",ct:g},Download:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Download.mrs",ct:g},AppleCN:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/AppleCN.mrs",ct:g},China:{url:"https://cdn.jsdelivr.net/gh/"+e("YmxhY2ttYXRyaXg3")+"/"+e("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+e("Q2xhc2g=")+"/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml",ct:b},AI:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/AI.mrs",ct:g},Telegram:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Telegram.mrs",ct:g},Twitter:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Twitter.mrs",ct:g},SocialMedia:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/SocialMedia.mrs",ct:g},Netflix:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Netflix.mrs",ct:g},[e("WW91VHViZQ==")]:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/"+e("WW91VHViZQ==")+".mrs",ct:g},Google:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Google.mrs",ct:g},Microsoft:{url:"https://cdn.jsdelivr.net/gh/"+e("YmxhY2ttYXRyaXg3")+"/"+e("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+e("Q2xhc2g=")+"/Microsoft/Microsoft.yaml",ct:b},Proxy:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/domain/Proxy.mrs",ct:g},Spotify:{url:"https://github.com/"+e("RHVzdGluV2lu")+"/"+e("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+e("bWlob21v")+"-ruleset/spotify.mrs",ct:g},TikTok:{url:"https://github.com/"+e("RHVzdGluV2lu")+"/"+e("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+e("bWlob21v")+"-ruleset/tiktok.mrs",ct:g},disney:{url:"https://github.com/"+e("RHVzdGluV2lu")+"/"+e("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+e("bWlob21v")+"-ruleset/disney.mrs",ct:g},github:{url:"https://rule.kelee.one/"+e("Q2xhc2g=")+"/GitHub.yaml",ct:b},PrivateIP:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/ip/Private.mrs",ct:g},TelegramIP:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/ip/Telegram.mrs",ct:g},[e("UHJveHlJUA==")]:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/ip/Proxy.mrs",ct:g},ChinaIP:{url:"https://github.com/"+e("NjY2T1M=")+"/rules/raw/release/"+e("bWlob21v")+"/ip/China.mrs",ct:g}},y=new Map,w=new Map;function x(t,e){return new Response(t,{status:200,headers:{"Content-Type":e,"Cache-Control":"public, max-age=86400"}})}const k=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],I=["104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],P=["2400:cb00::/32","2606:4700::/32","2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29","2c0f:f248::/32"],S=["2606:4700::/32","2400:cb00::/32","2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"];let $=P.slice(),C=0;function A(t){if(!st(t=String(t||"")))return!1;if(t.indexOf(":")>=0)return P.some(e=>function(t,e){const[n,r]=e.split("/"),a=parseInt(r,10),o=t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))},i=t=>t.map(t=>parseInt(t,16).toString(2).padStart(16,"0")).join("");return i(o(t)).slice(0,a)===i(o(n)).slice(0,a)}(t,e));const e=t.split(".").map(Number),n=(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0;return dt.some(([t,e])=>n>=t&&n<=e)}const U={HK:"\u9999\u6e2f",TW:"\u53f0\u6e7e",MO:"\u6fb3\u95e8",JP:"\u65e5\u672c",SG:"\u65b0\u52a0\u5761",US:"\u7f8e\u56fd",KR:"\u97e9\u56fd",DE:"\u5fb7\u56fd",FR:"\u6cd5\u56fd",GB:"\u82f1\u56fd",CA:"\u52a0\u62ff\u5927",AU:"\u6fb3\u5927\u5229\u4e9a",SE:"\u745e\u5178",NL:"\u8377\u5170",FI:"\u82ac\u5170",NO:"\u632a\u5a01",DK:"\u4e39\u9ea6",CH:"\u745e\u58eb",IT:"\u610f\u5927\u5229",ES:"\u897f\u73ed\u7259",PT:"\u8461\u8404\u7259",IE:"\u7231\u5c14\u5170",BE:"\u6bd4\u5229\u65f6",AT:"\u5965\u5730\u5229",PL:"\u6ce2\u5170",CZ:"\u6377\u514b",RO:"\u7f57\u9a6c\u5c3c\u4e9a",HU:"\u5308\u7259\u5229",GR:"\u5e0c\u814a",RU:"\u4fc4\u7f57\u65af",TR:"\u571f\u8033\u5176",UA:"\u4e4c\u514b\u5170",IN:"\u5370\u5ea6",TH:"\u6cf0\u56fd",MY:"\u9a6c\u6765\u897f\u4e9a",VN:"\u8d8a\u5357",PH:"\u83f2\u5f8b\u5bbe",ID:"\u5370\u5c3c",BR:"\u5df4\u897f",MX:"\u58a8\u897f\u54e5",AR:"\u963f\u6839\u5ef7",CL:"\u667a\u5229",ZA:"\u5357\u975e",EG:"\u57c3\u53ca",AE:"\u963f\u8054\u914b",IL:"\u4ee5\u8272\u5217",NZ:"\u65b0\u897f\u5170",KZ:"\u54c8\u8428\u514b\u65af\u5766",SA:"\u6c99\u7279"},T={};for(const t in U)T[U[t]]=t;T["\u5370\u5ea6\u5c3c\u897f\u4e9a"]="ID";const V={HKG:"\u9999\u6e2f",TPE:"\u53f0\u6e7e",KHH:"\u53f0\u6e7e",TSA:"\u53f0\u6e7e",RMQ:"\u53f0\u6e7e",NRT:"\u65e5\u672c",KIX:"\u65e5\u672c",HND:"\u65e5\u672c",CTS:"\u65e5\u672c",FUK:"\u65e5\u672c",SIN:"\u65b0\u52a0\u5761",ICN:"\u97e9\u56fd",KUL:"\u9a6c\u6765\u897f\u4e9a",BKK:"\u6cf0\u56fd",MNL:"\u83f2\u5f8b\u5bbe",SGN:"\u8d8a\u5357",HAN:"\u8d8a\u5357",CGK:"\u5370\u5c3c",DEL:"\u5370\u5ea6",BOM:"\u5370\u5ea6",MAA:"\u5370\u5ea6",DXB:"\u963f\u8054\u914b",TLV:"\u4ee5\u8272\u5217",RUH:"\u6c99\u7279",JED:"\u6c99\u7279",DOH:"\u5361\u5854\u5c14",FRA:"\u5fb7\u56fd",MUC:"\u5fb7\u56fd",DUS:"\u5fb7\u56fd",HAM:"\u5fb7\u56fd",BER:"\u5fb7\u56fd",CGN:"\u5fb7\u56fd",STR:"\u5fb7\u56fd",AMS:"\u8377\u5170",CDG:"\u6cd5\u56fd",MRS:"\u6cd5\u56fd",NCE:"\u6cd5\u56fd",LHR:"\u82f1\u56fd",LGW:"\u82f1\u56fd",MAN:"\u82f1\u56fd",MAD:"\u897f\u73ed\u7259",BCN:"\u897f\u73ed\u7259",MXP:"\u610f\u5927\u5229",FCO:"\u610f\u5927\u5229",PMO:"\u610f\u5927\u5229",ZRH:"\u745e\u58eb",GVA:"\u745e\u58eb",VIE:"\u5965\u5730\u5229",WAW:"\u6ce2\u5170",PRG:"\u6377\u514b",ARN:"\u745e\u5178",CPH:"\u4e39\u9ea6",OSL:"\u632a\u5a01",HEL:"\u82ac\u5170",DUB:"\u7231\u5c14\u5170",LIS:"\u8461\u8404\u7259",BRU:"\u6bd4\u5229\u65f6",BUD:"\u5308\u7259\u5229",OTP:"\u7f57\u9a6c\u5c3c\u4e9a",ATH:"\u5e0c\u814a",IST:"\u571f\u8033\u5176",SVO:"\u4fc4\u7f57\u65af",DME:"\u4fc4\u7f57\u65af",LED:"\u4fc4\u7f57\u65af",JFK:"\u7f8e\u56fd",EWR:"\u7f8e\u56fd",LAX:"\u7f8e\u56fd",SJC:"\u7f8e\u56fd",SFO:"\u7f8e\u56fd",SEA:"\u7f8e\u56fd",ORD:"\u7f8e\u56fd",DFW:"\u7f8e\u56fd",IAD:"\u7f8e\u56fd",ATL:"\u7f8e\u56fd",MIA:"\u7f8e\u56fd",BOS:"\u7f8e\u56fd",DEN:"\u7f8e\u56fd",PHX:"\u7f8e\u56fd",MSP:"\u7f8e\u56fd",DTW:"\u7f8e\u56fd",PHL:"\u7f8e\u56fd",CLT:"\u7f8e\u56fd",LAS:"\u7f8e\u56fd",PDX:"\u7f8e\u56fd",SLC:"\u7f8e\u56fd",SAN:"\u7f8e\u56fd",AUS:"\u7f8e\u56fd",IAH:"\u7f8e\u56fd",MCI:"\u7f8e\u56fd",BNA:"\u7f8e\u56fd",SMF:"\u7f8e\u56fd",RDU:"\u7f8e\u56fd",YYZ:"\u52a0\u62ff\u5927",YVR:"\u52a0\u62ff\u5927",YUL:"\u52a0\u62ff\u5927",YOW:"\u52a0\u62ff\u5927",YYC:"\u52a0\u62ff\u5927",MEX:"\u58a8\u897f\u54e5",GRU:"\u5df4\u897f",GIG:"\u5df4\u897f",EZE:"\u963f\u6839\u5ef7",SCL:"\u667a\u5229",SYD:"\u6fb3\u5927\u5229\u4e9a",MEL:"\u6fb3\u5927\u5229\u4e9a",BNE:"\u6fb3\u5927\u5229\u4e9a",PER:"\u6fb3\u5927\u5229\u4e9a",AKL:"\u65b0\u897f\u5170",JNB:"\u5357\u975e",CAI:"\u57c3\u53ca",ALA:"\u54c8\u8428\u514b\u65af\u5766",ALB:"\u7f8e\u56fd",BDL:"\u7f8e\u56fd",BHM:"\u7f8e\u56fd",BIL:"\u7f8e\u56fd",BOI:"\u7f8e\u56fd",BUF:"\u7f8e\u56fd",BUR:"\u7f8e\u56fd",BTV:"\u7f8e\u56fd",BWI:"\u7f8e\u56fd",CAE:"\u7f8e\u56fd",CHA:"\u7f8e\u56fd",CLE:"\u7f8e\u56fd",CMH:"\u7f8e\u56fd",CPR:"\u7f8e\u56fd",DAL:"\u7f8e\u56fd",DAY:"\u7f8e\u56fd",DSM:"\u7f8e\u56fd",DTT:"\u7f8e\u56fd",ECP:"\u7f8e\u56fd",EYW:"\u7f8e\u56fd",FLL:"\u7f8e\u56fd",GRR:"\u7f8e\u56fd",GSP:"\u7f8e\u56fd",HIO:"\u7f8e\u56fd",HNL:"\u7f8e\u56fd",ICT:"\u7f8e\u56fd",IND:"\u7f8e\u56fd",JAX:"\u7f8e\u56fd",LBB:"\u7f8e\u56fd",MCO:"\u7f8e\u56fd",MDW:"\u7f8e\u56fd",MEM:"\u7f8e\u56fd",MFE:"\u7f8e\u56fd",MFR:"\u7f8e\u56fd",MSY:"\u7f8e\u56fd",OAK:"\u7f8e\u56fd",OKC:"\u7f8e\u56fd",OMA:"\u7f8e\u56fd",ONT:"\u7f8e\u56fd",ORF:"\u7f8e\u56fd",PIT:"\u7f8e\u56fd",PSC:"\u7f8e\u56fd",PVD:"\u7f8e\u56fd",RIC:"\u7f8e\u56fd",RNO:"\u7f8e\u56fd",RSW:"\u7f8e\u56fd",SAT:"\u7f8e\u56fd",SDF:"\u7f8e\u56fd",SNA:"\u7f8e\u56fd",STL:"\u7f8e\u56fd",SWF:"\u7f8e\u56fd",SYR:"\u7f8e\u56fd",TPA:"\u7f8e\u56fd",TUL:"\u7f8e\u56fd",TUS:"\u7f8e\u56fd",CTS:"\u65e5\u672c",FUK:"\u65e5\u672c",HND:"\u65e5\u672c",BLR:"\u5370\u5ea6",CMB:"\u65af\u91cc\u5170\u5361",KWI:"\u79d1\u5a01\u7279",AMM:"\u7ea6\u65e6",BEY:"\u9ece\u5df4\u5ae9",NBO:"\u80af\u5c3c\u4e9a",LOS:"\u5c3c\u65e5\u5229\u4e9a",ACC:"\u52a0\u7eb3",CPT:"\u5357\u975e",LIM:"\u79d8\u9c81",BOG:"\u54e5\u4f26\u6bd4\u4e9a",PTY:"\u5df4\u62ff\u9a6c"},R=Object.assign({},U,V,{USA:"\u7f8e\u56fd"}),M=V,N=["https://"+e("YmVzdGNm")+".pages.dev/random-region/HK/100.txt","https://"+e("YmVzdGNm")+".pages.dev/random-region/TW/100.txt","https://"+e("YmVzdGNm")+".pages.dev/random-region/JP/100.txt","https://"+e("YmVzdGNm")+".pages.dev/random-region/SG/100.txt","https://"+e("YmVzdGNm")+".pages.dev/random-region/US/100.txt","https://"+e("YmVzdGNm")+".pages.dev/random-region/KR/100.txt"].join("\n"),H=/random-region\/[A-Z]{2,}\/\d+\.txt/i,E={uuid:"",path:"",admin:"",login:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,[e("YWxwbg==")]:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:300,countryLabel:"",loadBalance:!0,ipv6Mode:"off",cpuLimit:!1,cfAccountId:"",cfApiToken:"",quotaAuto:!1,quotaStrict:!1,tgBotToken:"",tgChatID:"",homeWan:!1,homeWanNodes:[],[e("cHJveHlJUA==")]:"",outboundProxy:"",outboundMode:"",preferredDomains:"https://"+e("YmVzdGNm")+".pages.dev/random-region/HK/100.txt\nhttps://"+e("YmVzdGNm")+".pages.dev/random-region/TW/100.txt\nhttps://"+e("YmVzdGNm")+".pages.dev/random-region/JP/100.txt\nhttps://"+e("YmVzdGNm")+".pages.dev/random-region/SG/100.txt\nhttps://"+e("YmVzdGNm")+".pages.dev/random-region/US/100.txt\nhttps://"+e("YmVzdGNm")+".pages.dev/random-region/KR/100.txt",preferredIPs:[],optimizer:{source:"wetest_v4",sourceURL:"",fallbackPool:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:"all",ipType:["IPv4"],isp:["\u79fb\u52a8","\u8054\u901a","\u7535\u4fe1"]}},D=["cloudflare.com","www.cloudflare.com","speed.cloudflare.com"],L=["104.16.128.11","172.67.72.4","104.17.201.77","104.16.66.7","104.16.88.7","104.16.98.7","104.17.2.7","104.17.44.9","104.18.34.34","104.18.7.34","104.19.191.31","104.19.1.1","104.20.15.15","104.20.1.1","104.21.23.1","104.21.2.1","104.24.12.10","104.25.0.1","104.26.1.1","162.159.128.1"],O=[{label:"\u9999\u6e2f",region:"HK",url:"https://"+e("YmVzdGNm")+".pages.dev/random-region/HK/100.txt",count:12},{label:"\u65e5\u672c",region:"JP",url:"https://"+e("YmVzdGNm")+".pages.dev/random-region/JP/100.txt",count:12},{label:"\u7f8e\u56fd",region:"US",url:"https://"+e("YmVzdGNm")+".pages.dev/random-region/US/100.txt",count:12},{label:"\u65b0\u52a0\u5761",region:"SG",url:"https://"+e("YmVzdGNm")+".pages.dev/random-region/SG/100.txt",count:12},{label:"\u53f0\u6e7e",region:"TW",url:"https://"+e("YmVzdGNm")+".pages.dev/random-region/TW/100.txt",count:12}],z=["104.17.127.180#\u4f18\u9009IP-001","104.16.123.96#\u4f18\u9009IP-002","104.16.124.96#\u4f18\u9009IP-003","104.16.125.96#\u4f18\u9009IP-004","104.16.126.96#\u4f18\u9009IP-005","104.16.127.96#\u4f18\u9009IP-006","104.16.132.229#\u4f18\u9009IP-007","104.16.248.248#\u4f18\u9009IP-008","104.16.249.249#\u4f18\u9009IP-009","162.159.0.1#\u4f18\u9009IP-010","188.114.96.1#\u4f18\u9009IP-011","104.17.24.252#\u4f18\u9009IP-012","188.114.99.52#\u4f18\u9009IP-013","162.159.94.229#\u4f18\u9009IP-014","162.159.5.175#\u4f18\u9009IP-015","104.18.119.34#\u4f18\u9009IP-016","104.21.213.24#\u4f18\u9009IP-017","104.17.234.5#\u4f18\u9009IP-018","104.16.245.187#\u4f18\u9009IP-019","172.67.64.211#\u4f18\u9009IP-020","172.67.64.12#\u4f18\u9009IP-021","104.18.43.224#\u4f18\u9009IP-022","104.18.40.93#\u4f18\u9009IP-023","104.18.37.92#\u4f18\u9009IP-024","104.18.47.234#\u4f18\u9009IP-025","104.18.42.54#\u4f18\u9009IP-026","172.64.144.49#\u4f18\u9009IP-027","172.64.146.15#\u4f18\u9009IP-028","104.17.185.207#\u4f18\u9009IP-029","104.17.101.139#\u4f18\u9009IP-030","162.159.44.215#\u4f18\u9009IP-031","162.159.44.214#\u4f18\u9009IP-032","104.18.217.109#\u4f18\u9009IP-033","172.65.127.225#\u4f18\u9009IP-034","104.18.184.243#\u4f18\u9009IP-035","162.159.137.205#\u4f18\u9009IP-036","172.65.64.7#\u4f18\u9009IP-037","104.25.45.44#\u4f18\u9009IP-038","104.19.88.253#\u4f18\u9009IP-039","162.159.136.73#\u4f18\u9009IP-040","104.18.185.40#\u4f18\u9009IP-041","104.25.141.168#\u4f18\u9009IP-042","104.25.246.123#\u4f18\u9009IP-043","104.24.54.254#\u4f18\u9009IP-044","104.19.123.4#\u4f18\u9009IP-045","188.114.98.144#\u4f18\u9009IP-046","188.114.99.18#\u4f18\u9009IP-047","104.17.127.106#\u4f18\u9009IP-048","162.159.4.175#\u4f18\u9009IP-049","104.18.255.187#\u4f18\u9009IP-050","172.65.173.221#\u4f18\u9009IP-051","104.18.176.111#\u4f18\u9009IP-052","104.25.122.6#\u4f18\u9009IP-053","188.114.96.116#\u4f18\u9009IP-054","104.25.214.211#\u4f18\u9009IP-055","104.16.223.195#\u4f18\u9009IP-056","104.25.101.186#\u4f18\u9009IP-057","172.64.81.44#\u4f18\u9009IP-058","104.25.143.238#\u4f18\u9009IP-059","188.114.99.114#\u4f18\u9009IP-060","104.19.169.53#\u4f18\u9009IP-061","104.16.113.211#\u4f18\u9009IP-062","104.27.40.81#\u4f18\u9009IP-063","188.114.98.91#\u4f18\u9009IP-064","162.159.236.5#\u4f18\u9009IP-065","104.25.44.144#\u4f18\u9009IP-066","162.159.46.167#\u4f18\u9009IP-067","104.18.84.180#\u4f18\u9009IP-068","104.18.196.199#\u4f18\u9009IP-069","104.24.155.234#\u4f18\u9009IP-070","162.159.228.244#\u4f18\u9009IP-071","162.159.235.27#\u4f18\u9009IP-072","104.19.214.25#\u4f18\u9009IP-073","104.19.168.107#\u4f18\u9009IP-074","104.24.244.237#\u4f18\u9009IP-075","104.27.66.179#\u4f18\u9009IP-076","104.24.2.253#\u4f18\u9009IP-077","104.21.61.179#\u4f18\u9009IP-078","104.21.114.216#\u4f18\u9009IP-079","188.114.98.53#\u4f18\u9009IP-080","172.65.145.187#\u4f18\u9009IP-081","188.114.96.255#\u4f18\u9009IP-082","104.25.245.147#\u4f18\u9009IP-083","172.66.161.31#\u4f18\u9009IP-084","104.18.133.24#\u4f18\u9009IP-085","188.114.99.155#\u4f18\u9009IP-086","172.64.34.109#\u4f18\u9009IP-087","172.64.145.202#\u4f18\u9009IP-088","104.19.78.30#\u4f18\u9009IP-089","104.17.118.180#\u4f18\u9009IP-090","104.17.13.179#\u4f18\u9009IP-091","172.65.35.169#\u4f18\u9009IP-092","104.16.0.133#\u4f18\u9009IP-093","104.16.238.98#\u4f18\u9009IP-094","104.18.28.140#\u4f18\u9009IP-095","104.19.115.243#\u4f18\u9009IP-096","104.24.58.243#\u4f18\u9009IP-097","104.27.207.36#\u4f18\u9009IP-098","104.21.192.230#\u4f18\u9009IP-099","104.25.20.146#\u4f18\u9009IP-100","104.27.113.151#\u4f18\u9009IP-101","104.24.230.144#\u4f18\u9009IP-102","172.65.134.100#\u4f18\u9009IP-103","188.114.96.94#\u4f18\u9009IP-104","104.25.197.107#\u4f18\u9009IP-105","104.16.108.18#\u4f18\u9009IP-106","172.64.233.36#\u4f18\u9009IP-107","172.67.163.14#\u4f18\u9009IP-108","104.24.230.213#\u4f18\u9009IP-109","104.19.106.1#\u4f18\u9009IP-110","104.27.72.4#\u4f18\u9009IP-111","104.21.57.47#\u4f18\u9009IP-112","172.65.162.213#\u4f18\u9009IP-113","172.67.255.83#\u4f18\u9009IP-114","172.67.189.246#\u4f18\u9009IP-115","162.159.230.149#\u4f18\u9009IP-116","162.159.197.16#\u4f18\u9009IP-117","172.67.103.87#\u4f18\u9009IP-118","162.159.237.243#\u4f18\u9009IP-119","104.25.193.135#\u4f18\u9009IP-120","104.18.141.27#\u4f18\u9009IP-121","172.65.11.191#\u4f18\u9009IP-122","104.24.184.158#\u4f18\u9009IP-123","188.114.97.52#\u4f18\u9009IP-124","104.27.4.144#\u4f18\u9009IP-125","104.25.93.154#\u4f18\u9009IP-126","172.66.199.166#\u4f18\u9009IP-127","172.67.64.94#\u4f18\u9009IP-128","104.27.94.231#\u4f18\u9009IP-129","104.24.168.96#\u4f18\u9009IP-130","104.18.173.224#\u4f18\u9009IP-131","172.67.173.89#\u4f18\u9009IP-132","104.17.107.217#\u4f18\u9009IP-133","188.114.97.91#\u4f18\u9009IP-134","104.17.195.184#\u4f18\u9009IP-135","162.159.14.18#\u4f18\u9009IP-136","172.67.229.44#\u4f18\u9009IP-137","104.24.51.58#\u4f18\u9009IP-138","104.19.97.238#\u4f18\u9009IP-139","104.25.161.217#\u4f18\u9009IP-140","104.17.146.117#\u4f18\u9009IP-141","172.67.161.136#\u4f18\u9009IP-142","104.17.99.0#\u4f18\u9009IP-143","104.25.100.203#\u4f18\u9009IP-144","104.19.23.222#\u4f18\u9009IP-145","188.114.96.141#\u4f18\u9009IP-146","104.19.247.23#\u4f18\u9009IP-147","104.25.24.66#\u4f18\u9009IP-148","104.16.123.26#\u4f18\u9009IP-149","104.27.23.242#\u4f18\u9009IP-150","104.25.36.200#\u4f18\u9009IP-151","104.17.195.133#\u4f18\u9009IP-152","104.16.68.175#\u4f18\u9009IP-153","188.114.98.19#\u4f18\u9009IP-154","104.16.218.231#\u4f18\u9009IP-155","104.18.28.48#\u4f18\u9009IP-156","162.159.143.225#\u4f18\u9009IP-157","162.159.19.201#\u4f18\u9009IP-158","104.25.166.112#\u4f18\u9009IP-159","104.16.201.45#\u4f18\u9009IP-160","104.16.91.33#\u4f18\u9009IP-161","172.67.82.86#\u4f18\u9009IP-162","104.16.11.246#\u4f18\u9009IP-163","188.114.97.61#\u4f18\u9009IP-164","104.17.240.245#\u4f18\u9009IP-165","172.66.157.150#\u4f18\u9009IP-166","104.17.25.173#\u4f18\u9009IP-167","104.18.26.28#\u4f18\u9009IP-168","104.18.123.15#\u4f18\u9009IP-169","104.25.124.155#\u4f18\u9009IP-170","188.114.96.64#\u4f18\u9009IP-171","104.18.18.214#\u4f18\u9009IP-172","104.17.46.187#\u4f18\u9009IP-173","104.17.153.58#\u4f18\u9009IP-174","188.114.96.89#\u4f18\u9009IP-175","172.67.174.143#\u4f18\u9009IP-176","104.25.251.220#\u4f18\u9009IP-177","104.27.195.79#\u4f18\u9009IP-178","162.159.153.10#\u4f18\u9009IP-179","104.25.129.238#\u4f18\u9009IP-180","172.65.3.67#\u4f18\u9009IP-181","172.67.232.109#\u4f18\u9009IP-182","104.18.178.193#\u4f18\u9009IP-183","104.19.78.144#\u4f18\u9009IP-184","104.18.63.107#\u4f18\u9009IP-185","104.19.69.150#\u4f18\u9009IP-186","104.25.73.92#\u4f18\u9009IP-187","172.67.195.152#\u4f18\u9009IP-188","172.65.184.114#\u4f18\u9009IP-189","172.65.202.216#\u4f18\u9009IP-190","172.65.21.190#\u4f18\u9009IP-191","104.19.32.220#\u4f18\u9009IP-192","104.18.211.8#\u4f18\u9009IP-193","104.17.160.131#\u4f18\u9009IP-194","162.159.6.39#\u4f18\u9009IP-195","162.159.43.223#\u4f18\u9009IP-196","104.21.224.5#\u4f18\u9009IP-197","104.25.18.216#\u4f18\u9009IP-198","162.159.6.246#\u4f18\u9009IP-199","104.24.46.127#\u4f18\u9009IP-200","104.17.87.46#\u4f18\u9009IP-201","188.114.97.80#\u4f18\u9009IP-202","188.114.97.108#\u4f18\u9009IP-203","162.159.241.11#\u4f18\u9009IP-204","188.114.97.0#\u4f18\u9009IP-205","188.114.99.14#\u4f18\u9009IP-206","104.19.68.127#\u4f18\u9009IP-207","162.159.10.45#\u4f18\u9009IP-208","104.25.181.74#\u4f18\u9009IP-209","104.24.178.200#\u4f18\u9009IP-210","188.114.96.164#\u4f18\u9009IP-211","104.24.41.240#\u4f18\u9009IP-212","104.17.97.72#\u4f18\u9009IP-213","104.16.77.112#\u4f18\u9009IP-214","104.19.181.118#\u4f18\u9009IP-215","172.67.165.245#\u4f18\u9009IP-216","104.17.169.109#\u4f18\u9009IP-217","172.65.44.103#\u4f18\u9009IP-218","188.114.97.63#\u4f18\u9009IP-219","172.65.47.182#\u4f18\u9009IP-220","104.17.245.237#\u4f18\u9009IP-221","162.159.2.86#\u4f18\u9009IP-222","188.114.96.151#\u4f18\u9009IP-223","172.65.139.108#\u4f18\u9009IP-224","172.65.118.105#\u4f18\u9009IP-225","104.21.7.133#\u4f18\u9009IP-226","162.159.134.174#\u4f18\u9009IP-227","104.18.194.107#\u4f18\u9009IP-228","188.114.97.21#\u4f18\u9009IP-229","162.159.9.18#\u4f18\u9009IP-230","104.18.41.168#\u4f18\u9009IP-231","162.159.192.111#\u4f18\u9009IP-232","162.159.240.54#\u4f18\u9009IP-233","104.17.0.4#\u4f18\u9009IP-234","104.25.86.143#\u4f18\u9009IP-235","104.27.97.130#\u4f18\u9009IP-236","172.67.127.122#\u4f18\u9009IP-237","104.25.33.126#\u4f18\u9009IP-238","104.25.223.90#\u4f18\u9009IP-239","104.25.123.130#\u4f18\u9009IP-240","172.65.167.52#\u4f18\u9009IP-241","172.67.159.243#\u4f18\u9009IP-242","104.25.113.22#\u4f18\u9009IP-243","188.114.98.27#\u4f18\u9009IP-244","162.159.198.200#\u4f18\u9009IP-245","104.17.76.49#\u4f18\u9009IP-246","104.21.215.255#\u4f18\u9009IP-247","172.67.131.200#\u4f18\u9009IP-248","162.159.135.234#\u4f18\u9009IP-249","172.65.45.102#\u4f18\u9009IP-250","172.66.164.60#\u4f18\u9009IP-251","162.159.26.248#\u4f18\u9009IP-252","162.159.90.82#\u4f18\u9009IP-253","172.65.50.167#\u4f18\u9009IP-254","162.159.236.19#\u4f18\u9009IP-255","104.19.143.220#\u4f18\u9009IP-256","104.17.151.244#\u4f18\u9009IP-257","104.17.121.245#\u4f18\u9009IP-258","104.18.144.168#\u4f18\u9009IP-259","162.159.228.231#\u4f18\u9009IP-260","104.17.100.40#\u4f18\u9009IP-261","104.27.116.114#\u4f18\u9009IP-262","162.159.199.220#\u4f18\u9009IP-263","104.20.17.160#\u4f18\u9009IP-264","104.25.62.39#\u4f18\u9009IP-265","104.27.20.220#\u4f18\u9009IP-266","172.65.118.85#\u4f18\u9009IP-267","104.19.83.33#\u4f18\u9009IP-268","188.114.96.238#\u4f18\u9009IP-269","162.159.42.67#\u4f18\u9009IP-270","104.27.46.114#\u4f18\u9009IP-271","104.25.126.144#\u4f18\u9009IP-272","104.25.173.14#\u4f18\u9009IP-273","104.24.46.107#\u4f18\u9009IP-274","104.25.109.0#\u4f18\u9009IP-275","162.159.137.71#\u4f18\u9009IP-276","104.25.238.28#\u4f18\u9009IP-277","104.27.124.239#\u4f18\u9009IP-278","104.24.34.149#\u4f18\u9009IP-279","104.19.246.234#\u4f18\u9009IP-280","162.159.10.243#\u4f18\u9009IP-281","104.27.96.232#\u4f18\u9009IP-282","172.65.78.200#\u4f18\u9009IP-283","104.24.25.178#\u4f18\u9009IP-284","104.24.84.86#\u4f18\u9009IP-285","104.25.238.237#\u4f18\u9009IP-286","104.16.45.249#\u4f18\u9009IP-287","104.16.234.241#\u4f18\u9009IP-288","104.24.18.62#\u4f18\u9009IP-289","172.65.45.248#\u4f18\u9009IP-290","104.25.169.144#\u4f18\u9009IP-291","104.27.27.106#\u4f18\u9009IP-292","162.159.43.85#\u4f18\u9009IP-293","172.67.71.106#\u4f18\u9009IP-294","162.159.228.164#\u4f18\u9009IP-295","104.24.250.89#\u4f18\u9009IP-296","104.18.185.26#\u4f18\u9009IP-297","104.27.21.175#\u4f18\u9009IP-298","104.24.49.39#\u4f18\u9009IP-299","172.67.85.54#\u4f18\u9009IP-300"],Y=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org",e("YmVzdGNm")+".top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf."+e("MDkwMjI3")+".xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org",e("YmVzdGNm")+"."+e("MDMwMTAx")+".xyz","cdns.doon.eu.org","fn.130519.xyz","saas.sin.fan"].join("\n"),Z=new Set([80,8080,8880,2052,2082,2086,2095]),F={wetest_v4:{label:"\u5fae\u6d4b\u7f51 IPv4",url:"https://www.wetest.vip/page/cloudflare/address_v4.html"},wetest_v6:{label:"\u5fae\u6d4b\u7f51 IPv6",url:"https://www.wetest.vip/page/cloudflare/address_v6.html"},[e("YmVzdGNm")]:{label:"\u4f18\u9009 IP \u5217\u8868",url:"https://cf."+e("MDkwMjI3")+".xyz/ip.164746.xyz"},hostmonit:{label:"HostMonit \u4f18\u9009",url:"https://stock.hostmonit.com/CloudFlareYes"},wetest_cname:{label:"\u5fae\u6d4b\u7f51 \u4f18\u9009\u57df\u540d",url:"https://www.wetest.vip/page/cloudflare/cname.html"}},G=new TextEncoder,_=new TextDecoder,W=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],j=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function J(t,e){return(t<<e|t>>>32-e)>>>0}function Q(t){const e=G.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,n>>>0,!0),o.setUint32(r-4,Math.floor(n/4294967296),!0);let i=1732584193,s=4023233417,l=2562383102,c=271733878;for(let t=0;t<r;t+=64){const e=new Uint32Array(16);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!0);let n=i,r=s,a=l,d=c;for(let t=0;t<64;t++){let o,i;t<16?(o=r&a|~r&d,i=t):t<32?(o=d&r|~d&a,i=(5*t+1)%16):t<48?(o=r^a^d,i=(3*t+5)%16):(o=a^(r|~d),i=7*t%16);const s=n+o+j[t]+e[i]>>>0;n=d,d=a,a=r,r=r+J(s,W[t])>>>0}i=i+n>>>0,s=s+r>>>0,l=l+a>>>0,c=c+d>>>0}let d="";for(const t of[i,s,l,c])d+=(255&t).toString(16).padStart(2,"0"),d+=(t>>>8&255).toString(16).padStart(2,"0"),d+=(t>>>16&255).toString(16).padStart(2,"0"),d+=(t>>>24&255).toString(16).padStart(2,"0");return d}function B(t){const e=Q(String(t||"")+"|"+l);return[e.slice(0,8),e.slice(8,12),"4"+e.slice(13,16),"8"+e.slice(17,20),e.slice(20)].join("-")}function X(t,e=443){if(!(t=String(t||"").trim()))return{host:"",port:e};if(t.startsWith("[")){const n=t.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:n?n[1]:t.replace(/^\[|\]$/g,""),port:n&&n[2]?parseInt(n[2]):e}}const n=t.lastIndexOf(":");return n>0&&/^\d+$/.test(t.slice(n+1))?{host:t.slice(0,n),port:parseInt(t.slice(n+1))}:{host:t,port:e}}async function q(t){let e=null,n="";for(const r of["https://www.vpngate.net/api/iphone/","http://www.vpngate.net/api/iphone/"])try{const t=await fetch(r,{headers:{"User-Agent":"Mozilla/5.0",Accept:"text/plain"},cf:{cacheTtl:1800,cacheEverything:!0},signal:AbortSignal.timeout(8e3)});if(!t||!t.ok){e=new Error("HTTP "+(t&&t.status));continue}if(n=await t.text(),n&&n.length)break}catch(t){e=t}if(!n)throw e||new Error("VPN Gate \u8282\u70b9\u6e90\u6ca1\u6709\u8fd4\u56de\u5185\u5bb9");const r=[];return String(n).split(/\r?\n/).forEach(e=>{if(!(e=e.trim())||e.startsWith("#"))return;const n=e.split(",");if(n.length<15)return;const a=(n[0]||"").trim(),o=(n[1]||"").trim();if(0===a.toLowerCase().indexOf("public-vpn"))return;if(0===o.indexOf("219.100.37."))return;const i=function(t){for(let e=t.length-1;e>=Math.max(3,t.length-3);e--){const n=(t[e]||"").trim();if(n&&!(n.length<100))try{const t=atob(n.slice(0,600));if("string"==typeof t&&t.length>10&&(t.indexOf("client")>=0||t.indexOf("remote")>=0||t.indexOf("dev ")>=0||t.indexOf("OpenVPN")>=0||t.indexOf("PacketiX")>=0))return n}catch(t){}}return""}(n);if(!o||!i)return;const s=(n[6]||"").trim().toUpperCase();t&&s!==String(t).trim().toUpperCase()||r.push({host:a,ip:o,speed:parseInt(n[4])||0,ping:parseInt(n[5])||0,country:s,ovpnB64:i})}),r.sort((t,e)=>(e.speed||0)-(t.speed||0)),r}function K(t){try{const e=atob(String(t||"").trim());return"string"==typeof e&&e.indexOf("BEGIN")>=0?e:""}catch(t){return""}}function tt(t){const e=e=>{const n=String(t||"").match(new RegExp("<"+e+">([\\s\\S]*?)<\\/"+e+">","i"));return n?n[1].trim():""},n={};return String(t||"").split(/\r?\n/).forEach(t=>{const e=t.trim().match(/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);e&&(n[e[1].toLowerCase()]=e[2].trim())}),{ca:e("ca"),cert:e("cert"),key:e("key"),tlsAuth:e("tls-auth"),tlsCrypt:e("tls-crypt"),cipher:n.cipher||"",auth:n.auth||"",keyDirection:n["key-direction"]||"",remote:n.remote||"",proto:n.proto||""}}let et="",nt=0;function rt(){const t=(new Date).toISOString().slice(0,10);return t!==et&&(et=t,nt=0),!(nt>=300||(nt++,0))}async function at(t,e){try{if(!t.K||"function"!=typeof t.K.get)return null;const n=await t.K.get("hwcache");if(!n)return null;const r=JSON.parse(n);if(r&&r.t&&2===r.v&&Array.isArray(r.nodes)&&r.nodes.length&&(e||Date.now()-r.t<18e5))return r.nodes}catch(t){}return null}function ot(t){return Array.isArray(t)&&t.length?t.filter(t=>t&&"udp"!==String(t.proto||"").toLowerCase()):t}async function it(t,n,r){if(!n.homeWan)return[];let a=null;if(r||(a=ot(await at(t))),a&&a.length&&a.length>=30)return a;let o=[];try{o=ot((await q("")).map(t=>function(t){const n=tt("string"==typeof t.ovpn?t.ovpn:K(t.ovpnB64)),r=String(n.remote||"").split(/\s+/),a=parseInt(r[1],10)||443,o="udp"===String(n.proto||"").toLowerCase()?"udp":"tcp";return{server:t.ip,port:a,proto:o,country:t.country,ca:n.ca||"",cert:n.cert||"",key:n.key||"",tlsAuth:n.tlsAuth||"",tlsCrypt:n.tlsCrypt||"",cipher:n.cipher||e("QUVTLTEyOC1HQ00="),auth:n.auth||"SHA1"}}(t))).slice(0,100),o.length||(o=[])}catch(t){}if(o.length)return await async function(t,e){try{if(!t.K||"function"!=typeof t.K.put)return;if(!rt())return;await t.K.put("hwcache",JSON.stringify({t:Date.now(),v:2,nodes:e}))}catch(t){}}(t,o),o;if(a&&a.length)return a;const i=ot(await at(t,!0));return i&&i.length?i:[]}function st(t){if(!(t=String(t||"").trim()))return!1;const e=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(e)return e.slice(1).every(t=>Number(t)<=255);if(!/^[0-9a-fA-F:]+$/.test(t))return!1;if((t.match(/::/g)||[]).length>1)return!1;const n=t.includes("::"),r=t.replace(/::/g,":").split(":").filter(Boolean);return!(!n&&8!==r.length)&&(!n||!(r.length<1||r.length>7))&&r.every(t=>/^[0-9a-fA-F]{1,4}$/.test(t))}function lt(t){const e=[];for(let n=0;n<16;n+=2)e.push((t[n]<<8|t[n+1]).toString(16));let n=-1,r=0,a=-1,o=0;for(let t=0;t<8;t++)"0"===e[t]?(a<0?(a=t,o=1):o++,o>r&&(r=o,n=a)):(a=-1,o=0);if(r>=2){const t=e.slice(0,n).join(":");return(t?t+"::":"::")+e.slice(n+r).join(":")}return e.join(":")}function ct(t){const[e,n]=t.split("/"),r=e.split(".").map(Number),a=(r[0]<<24|r[1]<<16|r[2]<<8|r[3])>>>0,o=n>=32?0:4294967295<<32-n>>>0;return[(a&o)>>>0,(a|~o>>>0)>>>0]}const dt=k.map(ct),pt=new Map;function ut(t){if(String(t).indexOf(":")>=0)return function(t){const[e,n]=t.split("/"),r=parseInt(n,10)||0,a=(t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))})(e).map(t=>parseInt(t,16));let o=0;for(let t=0;t<8;t++)for(let e=15;e>=0;e--)o>=r&&(a[t]|=(Math.random()<.5?1:0)<<e),o++;return a.map(t=>t.toString(16)).join(":")}(t);const[e,n]=function(t){let e=pt.get(t);return e||(e=ct(t),pt.set(t,e)),e}(t),r=e+Math.floor(Math.random()*(n-e>>>0));return`${r>>>24&255}.${r>>>16&255}.${r>>>8&255}.${255&r}`}function ht(t){const e=String(t||"").split(".").map(t=>parseInt(t,10).toString(16).padStart(2,"0"));return 4!==e.length||e.some(t=>"NaN"===t)?null:"2606:4700::"+e[0]+e[1]+":"+e[2]+e[3]}function ft(t,e){const n=new Set,r=[];let a=0;for(;r.length<e&&a++<20*e;){const e=ut(t[Math.floor(Math.random()*t.length)]);n.has(e)||(n.add(e),r.push(e))}return r}function mt(t){const e=[],n=new Set;return String(t||"").split(/[\n,;]+/).map(t=>t.trim()).filter(Boolean).forEach(t=>{let r="";if(t.includes("#")){const[e,n]=t.split("#");t=e,r=n}const{host:a,port:o}=X(t,443);a&&st(a)&&!n.has(a)&&(n.add(a),e.push({ip:a,port:o,name:r}))}),e}function gt(t){try{const e=atob(String(t).replace(/-/g,"+").replace(/_/g,"/")),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return new TextDecoder("utf-8").decode(n)}catch(t){return null}}function bt(t,e){return new Response(JSON.stringify(t),{status:e||200,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function vt(t){const e=JSON.parse(JSON.stringify(E));let n=!1,r=!1;if(t.U&&(e.uuid=String(t.U).toLowerCase()),(t.D||t.PATH)&&(e.path=String(t.D||t.PATH)),(t.login||t.L)&&(e.login=String(t.login||t.L)),(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin)),t.HOST&&(e.host=String(t.HOST).replace(/^https?:\/\//,"").split("/")[0]),t.PROXYIP&&(e.proxyIP=String(t.PROXYIP)),(t.S||t.OUTBOUND)&&(e.outboundProxy=String(t.S||t.OUTBOUND)),"true"!==t.ECH&&"1"!==t.ECH||(e.ech=!0),"true"!==t.TROJAN&&"1"!==t.TROJAN||(e.enableTrojan=!0),t.TROJAN_PASSWORD&&(e.trojanPassword=String(t.TROJAN_PASSWORD)),t.ALPN&&(e.alpn=String(t.ALPN)),t.TGTOKEN&&(e.tgBotToken=String(t.TGTOKEN)),t.TGCHAT&&(e.tgChatID=String(t.TGCHAT)),t.YX&&(e.preferredIPs=mt(t.YX)),t.YXURL&&(e.optimizer.sourceURL=String(t.YXURL)),"1"!==t.HOME_WAN&&"true"!==t.HOME_WAN||(e.homeWan=!0),t.K&&"function"==typeof t.K.get)try{const a=await async function(t){try{return await t.K.get("config",{cacheTtl:30})}catch(t){return null}}(t);if(a){const t=JSON.parse(a);r=!0,void 0!==t.quotaAuto&&(n=!0),Object.assign(e,t),t.optimizer&&(e.optimizer=Object.assign(JSON.parse(JSON.stringify(E.optimizer)),t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(e.preferredIPs=t.preferredIPs),t.admin&&(e.admin=String(t.admin)),t.uuid&&(e.uuid=String(t.uuid).toLowerCase())}}catch(t){}var a;return e.adminInit=!(!e.adminInit&&!r),delete e.fragment,delete e.fragmentParam,Je=!1,on=e.optimizer&&e.optimizer.fallbackPool||"",e.uuid=String(e.uuid||"").toLowerCase(),a=e.uuid,/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(a||"")||(e.uuid=e.admin?B(e.admin):function(){if(crypto.randomUUID)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint8Array(16));return t[6]=15&t[6]|64,t[8]=63&t[8]|128,[...t].map((t,e)=>(4===e||6===e||8===e||10===e?"-":"")+t.toString(16).padStart(2,"0")).join("")}()),delete e.login,(t.login||t.L)&&(e.login=String(t.login||t.L)),(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin)),e.path=t.D||t.PATH?String(t.D||t.PATH):e.uuid,Array.isArray(e.preferredIPs)||(e.preferredIPs=mt(e.preferredIPs)),n||Boolean(e.cfAccountId&&e.cfApiToken||t.CF_ACCOUNT_ID&&t.CF_API_TOKEN)&&(e.quotaAuto=!0),e}async function yt(t,e){if(!t.K||"function"!=typeof t.K.put)return!1;const n=JSON.parse(JSON.stringify(e));return n.admin&&(n.admin=String(n.admin)),await t.K.put("config",JSON.stringify(n)),!0}let wt=null,xt=0;const kt=1e5;async function It(t,e){const n=String(t.tgBotToken||"").trim(),r=String(t.tgChatID||"").trim();if(n&&r)try{await be("https://api.telegram.org/bot"+n+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,text:e})},8e3)}catch(t){}}const Pt=[80,85,90,91,92,93,94,95,96,97,98,99];async function St(t,e){try{const n=await $t(t,e);if(!n||!n.configured||n.error||"number"!=typeof n.percent)return;const r=Math.floor(n.percent),a=(new Date).toISOString().slice(0,10);let o=null;if(t.K&&"function"==typeof t.K.get)try{o=await t.K.get("tgnote")}catch(t){}let i={day:a,level:0};if(o)try{const t=JSON.parse(o);t&&t.day&&(i=t)}catch(t){}const s=i.day!==a;if(s&&(i={day:a,level:0},e.quotaDisabled)){e.quotaDisabled=!1;try{await yt(t,e)}catch(t){}}const c=!(!String(e.tgBotToken||"").trim()||!String(e.tgChatID||"").trim()),d="\u5f53\u65e5\u989d\u5ea6 "+n.percent+"%\uff08"+(n.today&&n.today.requests||0)+" / "+n.limit+"\uff09";let p=s;if(r>=99&&!e.quotaDisabled){e.quotaDisabled=!0;try{await yt(t,e)}catch(t){}c&&await It(e,"\u26a0\ufe0f "+l+" \u7528\u91cf\u544a\u8b66\uff1a"+d+"\u3002\u8ba2\u9605\u5df2\u81ea\u52a8\u505c\u7528\uff0c\u660e\u65e5\u81ea\u52a8\u6062\u590d\u3002"),i.level=99,p=!0}else if(c&&r>=80&&!e.quotaDisabled){const t=Pt.filter(t=>t<=r&&t>(i.level||0)).pop();t&&(await It(e,"\ud83d\udcca "+l+" \u7528\u91cf\u63d0\u9192\uff1a"+d+"\uff08\u63d0\u9192\u9608\u503c "+t+"%\uff09"),i.level=t,p=!0)}if(p&&t.K&&"function"==typeof t.K.put)try{await t.K.put("tgnote",JSON.stringify(i))}catch(t){}}catch(t){}}async function $t(t,e){const n=String(t.CF_ACCOUNT_ID||e&&e.cfAccountId||"").trim(),r=String(t.CF_API_TOKEN||e&&e.cfApiToken||"").trim();if(!n||!r)return{configured:!1};const a=Date.now();if(a<xt)return wt&&wt.data?Object.assign({},wt.data,{stale:!0,error:"CF API \u9650\u6d41(429)\uff0c\u663e\u793a\u7f13\u5b58\u6570\u636e\uff08\u53ef\u80fd\u6ede\u540e\uff09"}):{configured:!0,error:"CF API \u9650\u6d41(429)\uff0c\u8bf7 15 \u5206\u949f\u540e\u518d\u8bd5"};if(wt&&wt.at&&a-wt.at<3e5)return wt.data;try{const t=new Date;t.setUTCHours(0,0,0,0);const e=new Date,o={query:"query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }",variables:{accountId:n,filter:{datetime_geq:t.toISOString(),datetime_leq:e.toISOString()}}},i=await fetch("https://api.cloudflare.com/client/v4/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify(o),signal:AbortSignal.timeout(8e3)});if(!i.ok)throw new Error("CF API HTTP "+i.status);const s=await i.json();if(s.errors&&s.errors.length)throw new Error("GraphQL: "+JSON.stringify(s.errors).slice(0,200));const l=s&&s.data&&s.data.viewer&&s.data.viewer.accounts||[];if(!l.length)throw new Error("\u672a\u627e\u5230\u8d26\u6237\u6570\u636e\uff08\u68c0\u67e5\u8d26\u6237 ID \u4e0e\u4ee4\u724c\u6743\u9650\uff09");const c=l[0],d=(c.workersInvocationsAdaptive||[])[0]||{},p=(c.pagesFunctionsInvocationsAdaptiveGroups||[]).reduce((t,e)=>t+(e&&e.sum&&e.sum.requests||0),0),u=(d.sum&&d.sum.requests||0)+p,h=d.quantiles&&d.quantiles.cpuTimeP50||0,f=d.sum&&d.sum.subrequests||0,m=Math.round(u/kt*1e3)/10,g={configured:!0,limit:kt,today:{requests:u,cpuTime:h,subrequests:f},percent:m,remaining:Math.max(0,kt-u),updatedAt:e.toISOString()};return wt={at:a,data:g},g}catch(t){const e=t&&t.message||String(t);return e.indexOf("429")>=0?(xt=a+9e5,wt&&wt.data?Object.assign({},wt.data,{stale:!0,error:"CF API \u9650\u6d41(429)\uff0c\u663e\u793a\u7f13\u5b58\u6570\u636e\uff08\u53ef\u80fd\u6ede\u540e\uff09"}):{configured:!0,error:"CF API \u9650\u6d41(429)\uff0c\u8bf7 15 \u5206\u949f\u540e\u518d\u8bd5"}):{configured:!0,error:e}}}function Ct(t){if(!t||t.byteLength<1)throw new Error(e("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const n=new DataView(t.buffer,t.byteOffset,t.byteLength);let r=0;if(0!==n.getUint8(0))throw new Error("\u4e0d\u652f\u6301\u7684 "+e("VkxFU1M=")+" \u7248\u672c");if(r+=17,r>=t.byteLength)throw new Error(e("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const a=n.getUint8(r);if(r+=1,r+=a,r+3>t.byteLength)throw new Error(e("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const o=n.getUint8(r);r+=1;const i=n.getUint16(r);r+=2;const s=n.getUint8(r);r+=1;const{addr:l,len:c}=function(t,e,n,r){if(1===r)return{addr:`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,len:4};if(2===r){const r=e.getUint8(n),a=t.subarray(n+1,n+1+r);return{addr:_.decode(a),len:1+r}}if(3===r)return{addr:lt(t.subarray(n,n+16)),len:16};throw new Error("\u65e0\u6cd5\u8bc6\u522b\u7684\u5730\u5740\u7c7b\u578b")}(t,n,r,s);return r+=c,{command:o,port:i,addr:l,headerLength:r,earlyData:t.subarray(r)}}const At=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];let Ut="",Tt="";function Vt(t){return t!==Ut&&(Ut=t,Tt=function(t){const e=G.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,Math.floor(n/4294967296),!1),o.setUint32(r-4,n>>>0,!1);let i=3238371032,s=914150663,l=812702999,c=4144912697,d=4290775857,p=1750603025,u=1694076839,h=3204075428;const f=(t,e)=>t>>>e|t<<32-e;for(let t=0;t<r;t+=64){const e=new Uint32Array(64);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!1);for(let t=16;t<64;t++){const n=f(e[t-15],7)^f(e[t-15],18)^e[t-15]>>>3,r=f(e[t-2],17)^f(e[t-2],19)^e[t-2]>>>10;e[t]=e[t-16]+n+e[t-7]+r>>>0}let n=i,r=s,a=l,m=c,g=d,b=p,v=u,y=h;for(let t=0;t<64;t++){const o=y+(f(g,6)^f(g,11)^f(g,25))+(g&b^~g&v)+At[t]+e[t]>>>0,i=n&r^n&a^r&a;y=v,v=b,b=g,g=m+o>>>0,m=a,a=r,r=n,n=o+((f(n,2)^f(n,13)^f(n,22))+i>>>0)>>>0}i=i+n>>>0,s=s+r>>>0,l=l+a>>>0,c=c+m>>>0,d=d+g>>>0,p=p+b>>>0,u=u+v>>>0,h=h+y>>>0}let m="";for(const t of[i,s,l,c,d,p,u])m+=(t>>>24&255).toString(16).padStart(2,"0"),m+=(t>>>16&255).toString(16).padStart(2,"0"),m+=(t>>>8&255).toString(16).padStart(2,"0"),m+=(255&t).toString(16).padStart(2,"0");return m}(t)),Tt}const Rt=["https://doh.pub/dns-query","https://dns.alidns.com/resolve","https://1.1.1.1/dns-query","https://8.8.8.8/dns-query","https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function Mt(t){const e=String(t).split("::"),n=e[0]?e[0].split(":").filter(Boolean):[],r=e[1]?e[1].split(":").filter(Boolean):[],a=[...n,...Array(Math.max(0,8-n.length-r.length)).fill("0"),...r],o=new Uint8Array(16);return a.forEach((t,e)=>{const n=parseInt(t,16)||0;o[2*e]=n>>8&255,o[2*e+1]=255&n}),o}async function Nt(e,n,r){const a=t({hostname:e,port:n});try{await function(t,e){return Promise.race([t,new Promise((t,n)=>setTimeout(()=>n(new Error("\u8fde\u63a5\u8d85\u65f6\uff08SYN \u88ab\u9759\u9ed8\u4e22\u5f03\uff09")),e||6e3))])}(a.opened,r||6e3)}catch(t){try{a.close()}catch(t){}throw t}return a}async function Ht(t,e){return Nt(t.hostname,t.port,e||6e3)}function Et(t){const e=t instanceof Uint8Array?t:new Uint8Array(t),n=e.length,r=8*n,a=new Uint8Array(1+(n+8>>6)<<6);a.set(e),a[n]=128;const o=new DataView(a.buffer);o.setUint32(a.length-8,Math.floor(r/4294967296),!1),o.setUint32(a.length-4,r>>>0,!1);let i=1732584193,s=4023233417,l=2562383102,c=271733878,d=3285377520;const p=new Uint32Array(80);for(let t=0;t<a.length;t+=64){for(let e=0;e<16;e++)p[e]=o.getUint32(t+4*e,!1);for(let t=16;t<80;t++)p[t]=J(p[t-3]^p[t-8]^p[t-14]^p[t-16],1);let e=i,n=s,r=l,a=c,u=d;for(let t=0;t<80;t++){let o,i;t<20?(o=n&r|~n&a,i=1518500249):t<40?(o=n^r^a,i=1859775393):t<60?(o=n&r|n&a|r&a,i=2400959708):(o=n^r^a,i=3395469782);const s=J(e,5)+o+u+i+p[t]>>>0;u=a,a=r,r=J(n,30),n=e,e=s}i=i+e>>>0,s=s+n>>>0,l=l+r>>>0,c=c+a>>>0,d=d+u>>>0}const u=new Uint8Array(20),h=new DataView(u.buffer);return h.setUint32(0,i,!1),h.setUint32(4,s,!1),h.setUint32(8,l,!1),h.setUint32(12,c,!1),h.setUint32(16,d,!1),u}function Dt(t,e){let n=t;n.length>64&&(n=Et(n));const r=new Uint8Array(64),a=new Uint8Array(64);for(let t=0;t<64;t++)r[t]=54^(t<n.length?n[t]:0),a[t]=92^(t<n.length?n[t]:0);return Et(Gt(a,Et(Gt(r,e))))}function Lt(t,e,n){const r=Dt(e&&e.length?e:new Uint8Array(20),t);let a=new Uint8Array(0),o=new Uint8Array(0);for(let t=1;o.length<n;t++){const e=new Uint8Array([t]);a=Dt(r,Gt(Gt(a,G.encode("ss-subkey")),e)),o=Gt(o,a)}return o.slice(0,n)}function Ot(t,e,n){const r=new Uint32Array(16);r[0]=1634760805,r[1]=857760878,r[2]=2036477234,r[3]=1797285236;const a=new DataView(t.buffer,t.byteOffset,32);for(let t=0;t<8;t++)r[4+t]=a.getUint32(4*t,!0);r[12]=e>>>0;const o=new DataView(n.buffer,n.byteOffset,12);r[13]=o.getUint32(0,!0),r[14]=o.getUint32(4,!0),r[15]=o.getUint32(8,!0);const i=r.slice(),s=(t,e,n,r)=>{i[t]=i[t]+i[e]>>>0,i[r]=J(i[r]^i[t],16),i[n]=i[n]+i[r]>>>0,i[e]=J(i[e]^i[n],12),i[t]=i[t]+i[e]>>>0,i[r]=J(i[r]^i[t],8),i[n]=i[n]+i[r]>>>0,i[e]=J(i[e]^i[n],7)};for(let t=0;t<10;t++)s(0,4,8,12),s(1,5,9,13),s(2,6,10,14),s(3,7,11,15),s(0,5,10,15),s(1,6,11,12),s(2,7,8,13),s(3,4,9,14);const l=new Uint8Array(64),c=new DataView(l.buffer);for(let t=0;t<16;t++)i[t]=i[t]+r[t]>>>0,c.setUint32(4*t,i[t],!0);return l}function zt(t,e,n,r){const a=r.slice(),o=Math.ceil(r.length/64);for(let r=0;r<o;r++){const o=Ot(t,n+r,e),i=64*r,s=Math.min(64,a.length-i);for(let t=0;t<s;t++)a[i+t]^=o[t]}return a}function Yt(t,e){let n=0n,r=0n;for(let e=0;e<16;e++)n|=BigInt(t[e])<<BigInt(8*e),r|=BigInt(t[16+e])<<BigInt(8*e);n&=0x0ffffffc0ffffffc0ffffffc0fffffffn;let a=0n;const o=(1n<<130n)-5n;for(let t=0;t<e.length;t+=16){let r=1n;for(let n=Math.min(16,e.length-t)-1;n>=0;n--)r=r<<8n|BigInt(e[t+n]);a=(a+r)*n%o}a=a+r&(1n<<128n)-1n;const i=new Uint8Array(16);for(let t=0;t<16;t++)i[t]=Number(a>>BigInt(8*t)&0xffn);return i}async function Zt(t,n){const r=new Uint8Array(12),a=()=>{const t=r.slice();for(let e=11;e>=0&&(t[e]++,0===t[e]);e--);return t};if(e("Q0hBQ0hBMjA=")+"-POLY1305"===t)return{seal:t=>function(t,e,n){const r=new Uint8Array(0),a=zt(t,e,0,new Uint8Array(32)),o=zt(t,e,1,n),i=t=>new Uint8Array((16-t%16)%16),s=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=Gt(r,Gt(i(r.length),Gt(o,Gt(i(o.length),Gt(s(r.length),s(o.length))))));return Gt(o,Yt(a,l))}(n,a(),t),open(t){const e=function(t,e,n){if(n.length<16)throw new Error("SS AEAD \u6570\u636e\u8fc7\u77ed");const r=n.subarray(0,n.length-16),a=n.subarray(n.length-16),o=new Uint8Array(0),i=t=>new Uint8Array((16-t%16)%16),s=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=Yt(zt(t,e,0,new Uint8Array(32)),Gt(o,Gt(i(o.length),Gt(r,Gt(i(r.length),Gt(s(o.length),s(r.length)))))));let c=0;for(let t=0;t<16;t++)c|=l[t]^a[t];return 0!==c?null:zt(t,e,1,r)}(n,a(),t);if(!e)throw new Error("SS AEAD \u89e3\u5bc6\u5931\u8d25\uff08\u5bc6\u7801/\u52a0\u5bc6\u65b9\u5f0f\u4e0e\u670d\u52a1\u5668\u4e0d\u5339\u914d\uff09");return e}};const o=await crypto.subtle.importKey("raw",n,{name:t},!1,["encrypt","decrypt"]);return{seal:async e=>new Uint8Array(await crypto.subtle.encrypt({name:t,iv:a()},o,e)),async open(e){try{return new Uint8Array(await crypto.subtle.decrypt({name:t,iv:a()},o,e))}catch(t){throw new Error("SS AEAD \u89e3\u5bc6\u5931\u8d25\uff08\u5bc6\u7801/\u52a0\u5bc6\u65b9\u5f0f\u4e0e\u670d\u52a1\u5668\u4e0d\u5339\u914d\uff09")}}}}async function Ft(t,e){const n=new Uint8Array([e.length>>8&255,255&e.length]);return Gt(await t.seal(n),await t.seal(e))}function Gt(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}function _t(t,e){t:for(let n=0;n<=t.length-e.length;n++){for(let r=0;r<e.length;r++)if(t[n+r]!==e[r])continue t;return n}return-1}const Wt="cmli"+"ussss"+".net",jt={HK:e("cHJveHlpcA==")+".hk."+Wt,US:e("cHJveHlpcA==")+".us."+Wt,SG:e("cHJveHlpcA==")+".sg."+Wt,JP:e("cHJveHlpcA==")+".jp."+Wt,KR:e("cHJveHlpcA==")+".kr."+Wt,DE:e("cHJveHlpcA==")+".de."+Wt,SE:e("cHJveHlpcA==")+".se."+Wt,NL:e("cHJveHlpcA==")+".nl."+Wt,FI:e("cHJveHlpcA==")+".fi."+Wt,GB:e("cHJveHlpcA==")+".gb."+Wt,Oracle:e("cHJveHlpcA==")+".oracle."+Wt,DigitalOcean:e("cHJveHlpcA==")+".digitalocean."+Wt,Vultr:e("cHJveHlpcA==")+".vultr."+Wt,Multacom:e("cHJveHlpcA==")+".multacom."+Wt},Jt=(()=>{const t=Object.create(null),e=(e,n)=>{for(const r of[].concat(n))t[r]=e};return e("HK","HKG"),e("AU",["SYD","MEL","BNE","PER","ADL","CBR"]),e("SG","SIN"),e("JP",["NRT","HND","KIX","TYO","OSA","NGO","CTS","FUK","OKA"]),e("KR",["ICN","SEL","PUS"]),e("DE",["FRA","MUC","DUS","BER","HAM","STR","VIE","ZRH","CDG","MAD","MXP","FCO","PRG","WAW"]),e("SE","ARN"),e("NL","AMS"),e("FI","HEL"),e("GB",["LHR","LGW","MAN","EDI"]),e("US",["LAX","SJC","SFO","SEA","PDX","SAN","LAS","PHX","SLC","DEN","DFW","IAH","AUS","ORD","MSP","DTW","STL","MCI","ATL","MIA","MCO","BNA","CLT","IAD","BOS","EWR","JFK","PHL","YYZ","YVR","YUL","MEX","GRU"]),e("TW",["TPE","KHH","TSA","RMQ"]),t})(),Qt=t=>{const e=String(t||"").toUpperCase();return e?Jt[e]?Jt[e]:/^[A-Z]{2}$/.test(e)?e:"US":"US"},Bt=new Map,Xt=new Map;async function qt(t,n){if(n=n||443,st(t))return[{hostname:t,port:n}];const r=t+":"+n,a=Date.now(),o=Xt.get(r);if(o&&a-o.t<3e5)return o.ips;const i=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve","https://doh.pub/dns-query"],s=async(e,n)=>{for(const r of i)try{const a=await be(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n).map(t=>t.data)}catch(t){}return[]},l=await s("TXT",16);let c=[];for(const t of l){const r=String(t).replace(/^"|"$/g,"").replace(/\\010/g,",").replace(/\n/g,",").trim();if(!r)continue;if("@"+e("ZWR0dW5uZWw=")===r)break;const a=r.split(/[,;\s]+/).map(t=>t.trim()).filter(Boolean),o=[];for(const t of a){const{host:e,port:r}=X(t,n);st(e)&&o.push({hostname:e,port:r})}if(o.length){c=o;break}}c.length||(c=(await s("A",1)).filter(t=>/^\d+\.\d+\.\d+\.\d+$/.test(t)).map(t=>({hostname:t,port:n}))),c.length||(c=(await s("AAAA",28)).filter(t=>st(t)).map(t=>({hostname:t,port:n})));const d=new Set,p=c.filter(t=>{const e=t.hostname+":"+t.port;return!d.has(e)&&(d.add(e),!0)});return p.length&&Xt.set(r,{t:a,ips:p}),p}async function Kt(t){if(!t||!t.length)return null;let e=!1;return await new Promise(n=>{let r=t.length;const a=t=>{if(r--,t)if(e)try{t.close()}catch(t){}else e=!0,n(t);else r<=0&&!e&&n(null)};for(const e of t)Promise.resolve().then(e).then(t=>a(t&&t.readable?t:null),()=>a(null))})}async function te(t,e,n){let r=null;const a=t=>{if(t&&t!==r)try{t.close()}catch(t){}},o=t?Promise.resolve().then(t).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null),i=e&&e.length?Kt(e).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null);let s=null;const l=await Promise.race([o,new Promise(t=>{s=setTimeout(()=>t("__GRACE__"),n)})]);if(s&&(clearTimeout(s),s=null),l&&"__GRACE__"!==l)return r=l,i.then(a),r;const c=await i;if(c)return r=c,o.then(a),r;const d=await o;return d?(r=d,r):null}function ee(t){return!t||t.byteLength<3?"unknown":22===t[0]&&3===t[1]?"tls":"nontls"}async function ne(t,r,a,o,i){const s=function(t){if(!t)return null;let r=e("c29ja3M1"),a=String(t).trim();const o=a.match(n);if(o&&(r=o[1].toLowerCase(),a=o[2]),"ss"===r)return function(t){let e=t,n="";const r=t.indexOf("#");r>=0&&(e=t.slice(0,r));const a=e.lastIndexOf("@");if(a>=0)n=e.slice(0,a),e=e.slice(a+1);else{const t=gt(e);if(t&&t.includes("@")){const r=t.lastIndexOf("@");n=t.slice(0,r),e=t.slice(r+1)}}let o="",i="";if(n){let e=gt(n)||n;try{e=decodeURIComponent(e)}catch(t){}const r=e.indexOf(":");r>0?(o=e.slice(0,r),i=e.slice(r+1)):o=e}const{host:s,port:l}=X(e,8388);return{type:"ss",host:s,port:l,method:o,password:i}}(a);let i="",s="";if(a.includes("@")){const[t,e]=a.split("@"),n=t=>{try{return decodeURIComponent(t)}catch(e){return t}},r=t.indexOf(":");r>=0?(i=n(t.slice(0,r)),s=n(t.slice(r+1))):i=n(t),a=e}const l="http"===r?80:"https"===r?443:1080,{host:c,port:d}=X(a,l);return{type:r,host:c,port:d,user:i,pass:s}}(r.outboundProxy),l=r.outboundMode||"",c="nontls"!==i,d=s?"http"===s.type||"https"===s.type?t=>async function(t,n){const r=await Nt(t.host,t.port,6e3),a=r.writable.getWriter(),o=r.readable.getReader();let i="";t.user&&(i=e("UHJveHktQXV0aG9yaXphdGlvbg==")+": Basic "+function(t){let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}(G.encode(`${t.user}:${t.pass}`))+"\r\n");const s=`${e("Q09OTkVDVA==")} ${n.hostname}:${n.port} HTTP/1.1\r\nHost: ${n.hostname}:${n.port}\r\n${i}\r\n`;await a.write(G.encode(s));const{head:l,leftover:c}=await async function(t){let e=new Uint8Array(0);for(;e.length<65536;){const{done:n,value:r}=await t.read();if(n)break;e=Gt(e,r);const a=_t(e,[13,10,13,10]);if(a>=0)return{head:_.decode(e.subarray(0,a)),leftover:e.subarray(a+4)}}return{head:_.decode(e),leftover:new Uint8Array(0)}}(o);if(!/^HTTP\/\d\.\d\s+2\d\d/i.test(l))throw new Error(e("Q09OTkVDVA==")+" \u5931\u8d25: "+l.split("\r\n")[0]);return c&&c.byteLength>0&&(r._preamble=c),a.releaseLock(),o.releaseLock(),r}(s,t):"ss"===s.type?t=>async function(t){const n=function(t){const n=String(t||"").toLowerCase().replace(/_/g,"-");return_d("YWVzLTEyOC1nY20=")===n||"aes-128gcm"===n||e("YWVzLTI1Ni1nY20=")===n||"aes-256gcm"===n||(e("Y2hhY2hhMjA=")+"-ietf-poly1305"===n||e("Y2hhY2hhMjA=")+"-poly1305"===n||e("Y2hhY2hhMjA=")+"poly1305"===n)&&e("Q0hBQ0hBMjA=")}(t.method);if(!n)throw new Error("\u4e0d\u652f\u6301\u7684 SS \u52a0\u5bc6\u65b9\u5f0f: "+(t.method||"\uff08\u672a\u6307\u5b9a\uff09"));if(!t.password)throw new Error("SS \u51fa\u7ad9\u7f3a\u5c11\u5bc6\u7801");const r=await Nt(t.host,t.port,6e3),a=r.writable.getWriter(),o=r.readable.getReader();let i=new Uint8Array(0);const s=async t=>{for(;i.length<t;){const{done:t,value:e}=await o.read();if(t)throw new Error("SS \u8fde\u63a5\u88ab\u5173\u95ed");i=Gt(i,e)}const e=i.slice(0,t);return i=i.subarray(t),e},l=new Uint8Array(await crypto.subtle.digest("SHA-256",G.encode(t.password))),c=crypto.getRandomValues(new Uint8Array(16)),d=await Zt(n.name,await Lt(l,c,n.keyLen));return await a.write(c),await a.write(await Ft(d,new Uint8Array(0))),{readable:new ReadableStream({async start(t){try{const e=await s(16),r=await Zt(n.name,await Lt(l,e,n.keyLen));for(;;){const e=await r.open(await s(18)),n=e[0]<<8|e[1];if(n>16384)throw new Error("SS \u5206\u7247\u957f\u5ea6\u975e\u6cd5 "+n);const a=await r.open(await s(n+16));n>0&&t.enqueue(a)}}catch(e){try{t.error(e)}catch(t){}}}}),writable:new WritableStream({async write(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);for(let t=0;t<e.length;t+=16384)await a.write(await Ft(d,e.subarray(t,Math.min(e.length,t+16384))))},close(){try{a.close()}catch(t){}},abort(){try{a.abort()}catch(t){}}}),close(){try{r.close()}catch(t){}}}}(s):t=>async function(t,n){const r=await Nt(t.host,t.port,6e3),a=r.writable.getWriter(),o=r.readable.getReader();let i=new Uint8Array(0);const s=async t=>{for(;i.length<t;){const{done:t,value:e}=await o.read();if(t)throw new Error("\u8fde\u63a5\u88ab\u5173\u95ed");i=Gt(i,e)}const e=i.slice(0,t);return i=i.subarray(t),e},l=t.user?[5,2,0,2]:[5,1,0];await a.write(new Uint8Array(l));const c=await s(2);if(5!==c[0]||255===c[1])throw new Error(e("U09DS1M1")+" \u63e1\u624b\u5931\u8d25");if(2===c[1]){if(!t.user)throw new Error(e("U09DS1M1")+" \u670d\u52a1\u5668\u8981\u6c42\u8ba4\u8bc1\u4f46\u672a\u63d0\u4f9b\u51ed\u636e");const n=G.encode(t.user),r=G.encode(t.pass),o=new Uint8Array([1,n.length,...n,r.length,...r]);if(await a.write(o),0!==(await s(2))[1])throw new Error(e("U09DS1M1")+" \u8ba4\u8bc1\u5931\u8d25")}else if(0!==c[1])throw new Error(e("U09DS1M1")+" \u4e0d\u652f\u6301\u7684\u8ba4\u8bc1\u65b9\u6cd5 "+c[1]);const d=G.encode(n.hostname);let p;p=/^\d+\.\d+\.\d+\.\d+$/.test(n.hostname)?new Uint8Array([5,1,0,1,...n.hostname.split(".").map(Number),n.port>>8&255,255&n.port]):new Uint8Array([5,1,0,3,d.length,...d,n.port>>8&255,255&n.port]),await a.write(p);const u=await s(4);if(0!==u[1])throw new Error(e("U09DS1M1")+" \u8fde\u63a5\u5931\u8d25 \u7801"+u[1]);if(1===u[3])await s(6);else if(3===u[3]){const t=(await s(1))[0];await s(t+2)}else 4===u[3]&&await s(18);return i.byteLength>0&&(r._preamble=i),a.releaseLock(),o.releaseLock(),r}(s,t):null;let p;const u=async t=>{try{const e=await t();if(e)return e}catch(t){p=t}return null},h=()=>{throw p||new Error("\u6240\u6709\u51fa\u7ad9\u65b9\u5f0f\u5747\u5931\u8d25")},f=r.proxyIP?(t=>{const e=String(t||"").trim();if(!e)return[];const n=Bt.get(e);if(n)return n;const r=[];for(const t of e.split(/[,;\n\r]+/)){let e=t.trim();if(!e)continue;let n="";const a=/^([A-Za-z]{2})\.(.+)$/.exec(e);if(a&&st(X(a[2],443).host)&&(n=a[1].toUpperCase(),e=a[2]),!n){const t=/^(.+)#([A-Za-z]{2})$/.exec(e);t&&(n=t[2].toUpperCase(),e=t[1])}const o=X(e,443);if(o.host){if(!n&&!st(o.host))for(const t of o.host.toUpperCase().split(/[^A-Z0-9]+/))if(/^[A-Z]{2}$/.test(t)&&"IP"!==t&&"CF"!==t){n=t;break}r.push({host:o.host,port:o.port,cc:n})}}return Bt.size>32&&Bt.clear(),Bt.set(e,r),r})(r.proxyIP):[],m=Qt(a),g=String(a||"").toUpperCase(),b=[];if(f.length&&c){for(const t of f)!t.cc||t.cc!==m&&t.cc!==g||b.push(t);for(const t of f)t.cc||b.push(t);b.length||b.push(f[0]);for(const t of b.slice(0,3)){const e=await u(async()=>{let e=[];try{e=await qt(t.host,t.port)}catch(t){}e.length||(e=[{hostname:t.host,port:t.port}]);const n=await Kt(e.slice(0,4).map(t=>()=>u(()=>Ht(t,4e3))));if(n)return n});if(e)return e}}const v={hostname:t.addr,port:t.port},y=()=>{if(!c)return[];const t=Qt(a);return[t,...Object.keys(jt).filter(e=>e!==t)].slice(0,2).map((t,e)=>async()=>{const n=jt[t];if(!n)return null;let r=[];try{r=await qt(n,443)}catch(t){return null}if(!r.length)return null;const a=r.slice(0,0===e?2:1);return await Kt(a.map(t=>()=>u(()=>Ht(t,4e3))))})},w=()=>u(()=>Ht(v,4e3)),x=d?()=>u(()=>d(v)):null,k=A(t.addr)?0:300,I=()=>te(w,y().slice(0,3),k);if("only"===l&&x)return await x()||await te(null,y().slice(0,4),0)||h();if(""===l&&x)return await x()||await I()||h();const P=await I();if(P)return P;if(x){const t=await x();if(t)return t}return h()}function re(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(t){}try{return new TextDecoder("gbk").decode(e)}catch(t){}return(new TextDecoder).decode(e)}function ae(t){const e=new Set,n=[],r=(t,r,a)=>{st(t)&&(e.has(t)||(e.add(t),n.push({ip:t,port:r||443,name:a||""})))};mt(t).forEach(t=>r(t.ip,t.port,t.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let o;for(;o=a.exec(t);){const{host:t,port:e}=X(o[0],443);t&&r(t,e,"")}const i=/[0-9a-fA-F:]+/g;for(;o=i.exec(t);){const t=o[0];t.includes(":")&&t.split(":").length>=3&&st(t)&&r(t,443,"")}return n}const oe={t:0,ips:null};async function ie(t){if(t=Math.max(1,parseInt(t)||150),Date.now()-oe.t<6e5)return oe.ips;const e=await be("https://stock.hostmonit.com/CloudFlareYes",{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const n=ae(await e.text()).filter(t=>t.ip&&A(t.ip)),r=new Set,a=[];for(const e of n)if(!r.has(e.ip)&&(r.add(e.ip),a.push(e),a.length>=t))break;return oe.t=Date.now(),oe.ips=a,a}return null}async function se(t){const e=[],n={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},r="custom"===(t=t||{}).source||!!t.sourceURL,a=n=>{n&&n.ip&&(r||A(n.ip))&&e.push({ip:n.ip,port:n.port||t.port||443,name:n.name||""})};if(t.source&&F[t.source]){const e=await be(F[t.source].url,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const t=ae(await e.text());t.forEach(a),n.preset=t.length}else n.presetErr=e?"HTTP "+e.status:"\u8d85\u65f6/\u7f51\u7edc\u9519\u8bef"}if(t.sourceURL){const e=ve(t.sourceURL).filter(t=>/^https?:\/\//i.test(t)).slice(0,50);if(e.length){const t=await Promise.all(e.map(async t=>{try{const e=await be(t,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);return e&&e.ok?{url:t,arr:ae(await e.text()),err:""}:{url:t,arr:[],err:e?"HTTP "+e.status:"\u8d85\u65f6/\u7f51\u7edc\u9519\u8bef"}}catch(e){return{url:t,arr:[],err:e&&e.message||String(e)}}}));let r=0;const o=[];for(const e of t)e.err?o.push(e.url.replace(/^https?:\/\//,"").slice(0,40)+" \u2192 "+e.err):(e.arr.forEach(a),n.custom+=e.arr.length,r++);o.length&&(n.customErr=(r?"\u90e8\u5206\u6e90\u5931\u8d25: ":"")+o.join("\uff1b"))}else n.customErr="\u672a\u63d0\u4f9b\u6709\u6548 URL\uff08\u591a\u4e2a\u7528\u6362\u884c\u6216\u5206\u53f7\u9694\u5f00\uff09"}const o=new Set,i=[];for(const t of e)o.has(t.ip)||(o.add(t.ip),i.push(t));if(i.length<(t.count||20)){let e=(t.count||20)-i.length;try{const n=await ln();for(const r of n){if(e<=0)break;o.has(r.ip)||A(r.ip)&&(o.add(r.ip),i.push({ip:r.ip,port:t.port||r.port||443,name:r.name||""}),e--)}}catch(t){}n.bestcf=(t.count||20)-i.length-e}if(!1!==t.useCidr&&i.length<(t.count||20)){const e=(t.count||20)-i.length,r=ft(k,3*e);let a=0;for(const n of r){if(a>=e)break;o.has(n)||(o.add(n),i.push({ip:n,port:t.port||443,name:""}),a++)}n.cidr=a}return{candidates:i,stats:n}}function le(e,n,r){return new Promise(a=>{const o=Date.now();let i,s=!1;const l=(t,r)=>{if(!s){s=!0,clearTimeout(c);try{i&&i.close()}catch(t){}a({ip:e,port:n,ok:t,latency:r})}},c=setTimeout(()=>l(!1,-1),r);try{i=t({hostname:e,port:n})}catch(t){return l(!1,-1)}i.opened.then(()=>l(!0,Date.now()-o)).catch(()=>l(!1,-1))})}function ce(t){return String(t).replace(/%/g,"%25").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/ /g,"%20")}function de(t,e,n,r){return(e?1:0)+(n?1:0)+(r?1:0)<=1?{v:t,t:t,x:t}:{v:t,t:t+".T",x:t+".X"}}function pe(t,n,r,a,o={}){const i=t.host,s=n.includes(":")&&!n.startsWith("[")?`[${n}]`:n,l=!Z.has(Number(r)),c=encodeURIComponent;let d=e("ZW5jcnlwdGlvbj0=")+"none";d+=l?"&"+e("c2VjdXJpdHk9")+"tls&sni="+c(i)+"&fp=chrome":"&"+e("c2VjdXJpdHk9")+"none",d+="&host="+c(i);const p=e("eGh0dHA=")===o.type&&l;return p?(d+="&type="+e("eGh0dHA=")+"&mode="+e("c3RyZWFtLW9uZQ=="),d+="&extra="+c(JSON.stringify(function(t){const e=t.uuid||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:e.slice(1,7),xPaddingKey:"_"+e.slice(25,31)}}(t)))):d+="&"+e("dHlwZT13cw=="),d+="&path="+c("/"+t.path+(!p&&l?"?ed=2048":"")),t.alpn&&(d+="&"+e("YWxwbg==")+"="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&(d+="&ech="+c((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${e("dmxlc3M=")}://${t.uuid}@${s}:${r}?${d}#${ce(a)}`}function ue(t,n,r,a){const o=t.host,i=n.includes(":")&&!n.startsWith("[")?`[${n}]`:n,s=encodeURIComponent,l=!Z.has(Number(r)),c="/"+t.path+(l?"?ed=2048":"");let d=l?e("c2VjdXJpdHk9")+"tls&sni="+s(o)+"&fp=chrome&host="+s(o)+"&"+e("dHlwZT13cw==")+"&path="+s(c):e("c2VjdXJpdHk9")+"none&host="+s(o)+"&"+e("dHlwZT13cw==")+"&path="+s(c);return t.alpn&&l&&(d+="&"+e("YWxwbg==")+"="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&l&&(d+="&ech="+s((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${e("dHJvamFu")}://${t.trojanPassword||t.uuid}@${i}:${r}?${d}#${ce(a)}`}const he=new Map,fe=18e5,me=new Map;function ge(t,e){const n=en;if(!(n&&n.K&&"function"==typeof n.K.put&&e&&e.length))return;const r=me.get(t)||0;if(Date.now()-r<fe)return;if(!rt())return;me.size>200&&me.clear(),me.set(t,Date.now());const a=JSON.stringify({t:Date.now(),ips:e.slice(0,300)}),o=n.K.put(t,a,{expirationTtl:1800}).catch(()=>{});n._ctx&&"function"==typeof n._ctx.waitUntil&&n._ctx.waitUntil(o)}function be(t,e,n){return new Promise(r=>{const a=new AbortController,o=setTimeout(()=>a.abort(),n);fetch(t,Object.assign({},e,{signal:a.signal})).then(t=>{clearTimeout(o),r(t)}).catch(()=>{clearTimeout(o),r(null)})})}function ve(t){const e=[];let n="";const r=t=>/^[a-z][a-z0-9+.-]*:\/\//i.test(t),a=t=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i.test(t)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i.test(t);for(const o of String(t||"").split(/[\n;]+/)){for(const t of o.split(",")){const o=t.trim();o&&(n?r(o)||a(o)?(e.push(n),n=o):o.includes("=")||/^[A-Za-z0-9]{1,6}$/.test(o)?n=n+","+o:(e.push(n),n=o):n=o)}n&&(e.push(n),n="")}return e}async function ye(t,e=100,n=300,r=!1,a=!0,i=!1){const s=ve(t).map(t=>t.replace(/^\*\./,"")),l=Date.now(),c=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve"],d=async(t,e,n)=>{for(const r of c)try{const a=await be(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n&&("A"===e?/^\d+\.\d+\.\d+\.\d+$/.test(t.data):/^[0-9a-fA-F:]+$/.test(t.data))).map(t=>t.data)}catch(t){}return[]},p=await Promise.all(s.map(async t=>{if(t.includes("://")){if(t.startsWith("sub://")){let e=t.slice(6);if(/^[A-Za-z0-9+/=]+$/.test(e)&&e.length%4==0)try{const t=atob(e);/^https?:\/\//i.test(t)&&(e=t)}catch(t){}/^https?:\/\//i.test(e)||(e="https://"+e),t=e}const s="url:"+t+(r?"|rf":"")+(a?"":"|raw"),c="srccache:"+Q(s).slice(0,24),d=he.get(s);if(d&&l-d.t<6e5)return d.ips.slice(0,e);const p=await async function(t){const e=en;if(!e||!e.K||"function"!=typeof e.K.get)return null;try{const n=await e.K.get(t);if(!n)return null;const r=JSON.parse(n);return!r||!Array.isArray(r.ips)||!r.ips.length||Date.now()-(r.t||0)>fe?null:r.ips}catch(t){return null}}(c);if(p)return he.set(s,{t:l,ips:p}),p.slice(0,e);try{const d=await be(t,{},6e3);if(!d||!d.ok)throw new Error("unreachable");let p=re(await d.arrayBuffer());if(/^[A-Za-z0-9+/=\s]{40,}$/.test(p.slice(0,2e3))&&p.replace(/\s+/g,"").length%4==0)try{const t=atob(p.replace(/\s+/g,""));p=re(Uint8Array.from(t,t=>t.charCodeAt(0)))}catch(t){}const u=new Set,h={},f=[],m=(n=t,H.test(String(n||""))),g=t=>!a||A(t)||m,b=p.trim().split(/\r?\n/).map(t=>t.trim()).filter(Boolean);if(b.length>1&&b[0].includes(",")){const t=b[0].split(",").map(t=>t.trim()),n=t.includes("IP\u5730\u5740")&&t.includes("\u7aef\u53e3"),r=t.some(t=>t.includes("IP"))&&t.some(t=>t.includes("\u5ef6\u8fdf"))&&t.some(t=>t.includes("\u4e0b\u8f7d\u901f\u5ea6"));if(n||r){const n=t.findIndex(t=>t.includes("IP")),r=t.indexOf("\u7aef\u53e3"),a=t.findIndex(t=>t.includes("\u5ef6\u8fdf")),o=t.findIndex(t=>t.includes("\u4e0b\u8f7d\u901f\u5ea6")),i=t.indexOf("\u56fd\u5bb6")>-1?t.indexOf("\u56fd\u5bb6"):t.indexOf("\u57ce\u5e02")>-1?t.indexOf("\u57ce\u5e02"):t.indexOf("\u6570\u636e\u4e2d\u5fc3"),d=t.indexOf("TLS");for(const t of b.slice(1)){if(f.length>=e)break;const s=t.split(",").map(t=>t.trim());if(-1!==d&&s[d]&&"true"!==s[d].toLowerCase())continue;const l=(s[n]||"").match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!l)continue;const c=l[1].replace(/^\[|\]$/g,""),p=-1!==r&&s[r]?parseInt(s[r]):443,b=c+":"+p;if(u.has(b))continue;if(!g(c))continue;u.add(b);let v=-1!==i&&s[i]?s[i]:"";v||-1===a||-1===o||(v="CF\u4f18\u9009 "+(s[a]||"")+"ms "+(s[o]||"")+"MB/s"),v?(h[v]=(h[v]||0)+1,f.push({ip:c,port:p,name:v+"-"+String(h[v]).padStart(2,"0"),...m?{relay:!0}:{}})):f.push({ip:c,port:p,name:"",...m?{relay:!0}:{}})}return he.set(s,{t:l,ips:f}),ge(c,f),f.slice()}}if(p.includes("<tr")&&p.includes("data-label")){for(const t of p.match(/<tr[\s\S]*?<\/tr>/g)||[]){if(f.length>=e)break;const n={};for(const e of t.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const t=e.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);t&&(n[t[1]]=t[2].replace(/<[^>]+>/g,"").trim())}const r=(n["\u4f18\u9009\u5730\u5740"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!r)continue;const a=r[1],o=r[2]?parseInt(r[2]):443,i=a+":"+o;if(u.has(i))continue;if(!g(a))continue;u.add(i);const s=(n["\u7ebf\u8def\u540d\u79f0"]||n["\u6570\u636e\u4e2d\u5fc3"]||"\u7ebf\u8def").trim();s?(h[s]=(h[s]||0)+1,f.push({ip:a,port:o,name:s+"-"+String(h[s]).padStart(2,"0"),...m?{relay:!0}:{}})):f.push({ip:a,port:o,name:"",...m?{relay:!0}:{}})}return he.set(s,{t:l,ips:f}),ge(c,f),f.slice()}for(const t of p.split(/\r?\n/)){if(f.length>=e)break;const n=t.match(o);if(!n)continue;const r=n[1].replace(/^\[|\]$/g,""),a=n[2]?parseInt(n[2]):443,i=r+":"+a;if(u.has(i))continue;if(!g(r))continue;u.add(i);let s="";const l=t.indexOf("#");if(l>=0)try{s=decodeURIComponent(t.slice(l+1).trim())}catch(e){s=t.slice(l+1).trim()}s?(h[s]=(h[s]||0)+1,f.push({ip:r,port:a,name:s+"-"+String(h[s]).padStart(2,"0"),...m?{relay:!0}:{}})):f.push({ip:r,port:a,name:"",...m?{relay:!0}:{}})}for(const t of p.split(/\r?\n/)){if(f.length>=e)break;const n=t.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!n){const e=t.trim().match(/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e||e[1])continue;const n=e[2].toLowerCase(),r=e[3]?parseInt(e[3]):443,a=n+":"+r;if(u.has(a))continue;u.add(a);const o=(e[4]||"").trim();f.push({ip:n,port:r,name:o||n,...m?{relay:!0}:{}});continue}const r=n[1],a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(u.has(o))continue;if(!g(r))continue;u.add(o);const i=(n[3]||"").trim();if(i&&!/[\u4e00-\u9fa5]/.test(i)&&!i.includes("|")){f.push({ip:r,port:a,name:i,...m?{relay:!0}:{}});continue}let s="";if(n[3]){const t=n[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(t){const e=t[0].match(/[\u4e00-\u9fa5]{2,5}/);e&&(s=e[0])}else{const t=n[3].split("|").map(t=>t.trim()),e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(t));if(e){const t=e.match(/[\u4e00-\u9fa5]{2,5}/);t&&(s=t[0])}else{const e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}$/.test(t)&&!/^(\u5730\u533a\u968f\u673a|\u968f\u673a\u4f18\u9009|\u5b98\u65b9\u4f18\u9009|\u4f18\u9009|CF\u4f18\u9009)$/.test(t));if(e)s=e;else{const t=n[3].match(/\b([A-Z]{2})\b/);t&&(s=U[t[1]]||t[1])}}}}s?(h[s]=(h[s]||0)+1,f.push({ip:r,port:a,name:s+"-"+String(h[s]).padStart(2,"0"),...m?{relay:!0}:{}})):f.push({ip:r,port:a,name:"",...m?{relay:!0}:{}})}if(!f.length&&r){const n=(String(t).match(/\/([A-Z]{2})\//)||[])[1]||String(t).replace(/^https?:\/\//,"").split(".")[0];U[n]&&ft(i?S:I,e).forEach((t,e)=>f.push({ip:t,port:443,name:U[n]+"-"+String(e+1).padStart(2,"0")}))}return he.set(s,{t:l,ips:f}),ge(c,f),f.slice()}catch(t){const n=he.get(s);return n&&n.ips&&n.ips.length?n.ips.slice(0,e):[]}}var n;if(!t.includes("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(t)){const e=t.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e)return[];const n=e[1].replace(/^\[|\]$/g,""),r=e[2]?parseInt(e[2]):443,o=(e[3]||"").trim(),i=st(n);if(!i&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(n))return[];if(a&&i&&!A(n))return[];if(o)return[{ip:n,port:r,name:o}];if(i)return[{ip:n,port:r,name:""}]}const s=he.get(t);if(s&&l-s.t<6e5)return s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}));const c=await d(t,"A",1);let p=a?c.filter(A):c;if(i){const e=await d(t,"AAAA",28);p=[...new Set(c.concat(e))].filter(t=>!a||A(t))}return p=p.slice(0,e),p.length?(he.set(t,{t:l,ips:p}),p.map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}))):s&&s.ips&&s.ips.length?s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)})):[]})),u=[];let h=0;for(;h<n;){let t=!1;for(const e of p){if(h>=n)break;e.length&&(u.push(e.shift()),h++,t=!0)}if(!t)break}return u}async function we(t,n=800,r=null){const a=[],o=new Set,i=t.optimizer&&t.optimizer.subMode||"",s=t.filter&&t.filter.ipType||[],l=1===s.length&&"IPv6"===s[0],c=Te(t),d=l?$:c?[...I,...$]:I,p="custom"===i&&!(t.optimizer&&t.optimizer.subIncludeDefault),u="custom"===i||"random"===i,h=(r,i,s,l)=>{((r,i,s,l)=>{if(a.length>=n)return;if(st(r)&&!A(r)&&!p&&!l)return;const c=r;if(o.has(c))return;o.add(c);const d=!Z.has(Number(i));if(t.tlsOnly&&!d)return;const u=Number(i),h=de(s,!!t.enableVless,!!t.enableTrojan,!(!t.enableXhttp||!d));t.enableVless&&a.push(pe(t,r,u,h.v)),t.enableTrojan&&d&&a.push(ue(t,r,d?u:Number(i),h.t)),t.enableXhttp&&d&&a.push(pe(t,r,u,h.x,{type:e("eGh0dHA=")}))})(r,Number(i)||443,s,l)};if("random"===i){let o=Math.min(Math.max(parseInt(t.optimizer.subRandomCount)||16,1),Math.min(99,n));if(t.nodeLimit){const e=parseInt(t.nodeLimitCount)||0;e>0&&(o=Math.min(Math.max(o,e),n))}const i=(t.enableVless?1:0)+(t.enableTrojan?1:0)+(t.enableXhttp?1:0)||1;let s=0;const l=ft(d,3*Math.ceil(o/i));let c=l;r&&(c=[...l.filter(t=>!r.has(t)),...l.filter(t=>r.has(t))]);for(const n of c){if(s>=o)break;const r=de("\u4f18\u9009IP-"+String(s+1).padStart(2,"0"),!!t.enableVless,!!t.enableTrojan,!!t.enableXhttp);if(t.enableVless&&(a.push(pe(t,n,443,r.v)),s++),s>=o)break;if(t.enableTrojan&&(a.push(ue(t,n,443,r.t)),s++),s>=o)break;t.enableXhttp&&(a.push(pe(t,n,443,r.x,{type:e("eGh0dHA=")})),s++)}return a}const f=ve(t.preferredDomains).filter(t=>!t.includes("://"));f.forEach((t,e)=>{const n=t.indexOf("#"),r=(n>=0?t.slice(0,n):t).trim(),a=(n>=0?t.slice(n+1):"").trim(),o=X(r,443);o.host.startsWith("*.")||h(o.host,o.port,a||"\u4f18\u9009IP-"+String(e+1).padStart(2,"0"))});let m=t.preferredIPs||[];if(c&&!l&&m.length>1){const t=[],e=[];for(const n of m)(String(n.ip).indexOf(":")>=0?e:t).push(n);const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++)a<t.length&&n.push(t[a]),a<e.length&&n.push(e[a]);m=n}if(m.forEach((t,e)=>{h(t.ip,t.port||443,t.name||"\u4f18\u9009IP-"+String(e+1).padStart(2,"0"),!0===t.relay||st(t.ip)&&!A(t.ip))}),!("custom"!==i||t.optimizer&&t.optimizer.subIncludeDefault))return a;f.length||(t.preferredIPs||[]).length||(mt(z.join("\n")).forEach(t=>h(t.ip,t.port||443,t.name||"0")),D.forEach((t,e)=>h(t,443,"\u57df\u540d-"+String(e+1).padStart(2,"0"))));const g=Math.min(Math.max(parseInt(t.optimizer&&t.optimizer.fillCount||0)||0,0),5e3),b=Math.min(g,n)-o.size;if(b>0){const t=r?L.filter(t=>!r.has(t)):L.slice(),e=ft(d,3*b);let o=[...t,...r?e.filter(t=>!r.has(t)):e];if(o.length<b&&(o=[...L,...e]),o.length>0){const t=Math.min(o.length,20),e=o.slice(0,t),n=u?e.map(()=>!0):await tn(e,t=>rn(t,443,1500)),r=e.filter((t,e)=>n[e]),a=o.slice(t);o=[...r,...a].slice(0,b)}let i=0;for(const t of o){if(a.length>=n)break;i++,h(t,443,"\u4f18\u9009IP-"+String(i).padStart(3,"0"))}}return a}function xe(t){const e=t.indexOf("@"),n=t.indexOf("?",e),r=n>e&&e>=0?t.slice(e+1,n):t.slice(e+1);if(r.startsWith("[")){const t=r.indexOf("]"),e=t>0?r.slice(1,t):r,n=r.slice(t+1),a=n.startsWith(":")?parseInt(n.slice(1)):443;return{host:e,port:isNaN(a)?443:a}}const a=r.lastIndexOf(":");if(a>0){const t=parseInt(r.slice(a+1));return{host:r.slice(0,a),port:isNaN(t)?443:t}}return{host:r,port:443}}function ke(t,e){const n=t.indexOf("?");if(n<0)return null;const r=t.indexOf("#",n),a=r>n?t.slice(n+1,r):t.slice(n+1);for(const t of a.split("&")){const n=t.indexOf("=");if((n>0?t.slice(0,n):t)===e)return n>0?decodeURIComponent(t.slice(n+1)):""}return null}function Ie(t,n){const{host:r,port:a}=xe(t),o=r,i=t.indexOf("#");let s=`${"\u8282\u70b9"}${n+1}`;if(i>=0)try{s=decodeURIComponent(t.slice(i+1))||s}catch(t){}const l=t.indexOf("@");let c="";if(l>=0){const e=t.indexOf("://"),r=e>=0?e+3:0;try{c=decodeURIComponent(t.slice(r,l))}catch(n){c=t.slice(r,l)}}const d=t.startsWith(e("dHJvamFu")+"://");return{srv:o,prt:a,name:s,user:c,isTrojan:d,tls:d||"tls"===(ke(t,"security")||"tls")}}const Pe={HK:["HK","\u9999\u6e2f"],TW:["TW","\u53f0\u6e7e"],US:["US","\u7f8e\u56fd"],SG:["SG","\u65b0\u52a0\u5761"],JP:["JP","\u65e5\u672c"],KR:["KR","\u97e9\u56fd"],DE:["DE","\u5fb7\u56fd"]},Se={"\u79fb\u52a8":["\u79fb\u52a8","CM","CHINAMOBILE"],"\u8054\u901a":["\u8054\u901a","CU","UNICOM"],"\u7535\u4fe1":["\u7535\u4fe1","CT","CHINATELECOM"]},$e=["\u79fb\u52a8","\u8054\u901a","\u7535\u4fe1"],Ce=["IPv4","IPv6"];function Ae(t,e){if(!e||!e.region&&!e.ipType&&!e.isp)return t;const n=e.region||"all",r=e.ipType||Ce,a=e.isp||$e,o=t.map(t=>{const{host:e}=xe(t);let n="";try{const e=t.indexOf("#");e>=0&&(n=decodeURIComponent(t.slice(e+1)||""))}catch(t){n=""}return{host:e,name:n,up:n.toUpperCase()}}),i=o.some(t=>t.up&&Object.keys(Se).some(e=>(Se[e]||[e]).some(e=>t.up.includes(e.toUpperCase())))),s=(e,n,r)=>{const a=Array.isArray(e)?0===e.length||e.includes("all")?null:e.flatMap(t=>Pe[t]||[]):"all"!==e?Pe[e]||[]:null,s=r.length>0&&r.length<$e.length;return t.filter((t,e)=>{const l=o[e],c=l.host.indexOf(":")>=0;if(!l.name)return!1;if(a&&!a.some(t=>l.up.includes(t.toUpperCase()))&&!/^(\u4f18\u9009IP|\u57df\u540d)-\d+/.test(l.name)&&"\u539f\u751f\u5730\u5740"!==l.name)return!1;if(1===n.length){if("IPv4"===n[0]&&c)return!1;if("IPv6"===n[0]&&!c)return!1}return!(s&&i&&!r.some(t=>(Se[t]||[t]).some(t=>l.up.includes(t.toUpperCase()))))})};let l=s(n,r,a);return l.length||(l=s(n,r,$e)),l.length||(l=s(n,Ce,$e)),l.length||(l=s("all",Ce,$e)),l}function Ue(t){try{let e=xe(t).host||"";return"["===e.charAt(0)&&(e=e.slice(1,e.indexOf("]")>0?e.indexOf("]"):void 0)),e.indexOf(":")>=0}catch(t){return!1}}function Te(t){const e=t&&t.filter&&t.filter.ipType||[];if(!e.includes("IPv6"))return!1;if(1===e.length)return!0;const n=t&&t.ipv6Mode||"off";return"tail"===n||"full"===n}function Ve(t,e,n){const r=e&&e.ipv6Mode||"off";if(n||"full"===r||"mix"===r||t.length<2)return t;const a=[],o=[];for(const e of t)(Ue(e)?a:o).push(e);if(!a.length)return t;if("off"===r)return o.length?o:t;const i=Math.max(1,Math.min(a.length,40,Math.floor(.1*o.length)));return o.length?o.concat(a.slice(0,i)):t}const Re=/^(?:\u4f18\u9009IP-S\d|\u5185\u7f6e\u00b7\u4fdd\u5e95-|\u96a7\u9053\u524d\u7f6e-)/;function Me(t){try{const e=t.indexOf("#");return!(e<0)&&Re.test(decodeURIComponent(t.slice(e+1)||""))}catch(t){return!1}}function Ne(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function He(t){if("boolean"==typeof t||"number"==typeof t)return String(t);const e=String(t);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(e)?e:JSON.stringify(e)}function Ee(t,e){const n=" ".repeat(e);return String(t||"").split("\n").map(t=>n+(t||""))}function De(t){const e=String(t||"");if(!e)return"";if(e.indexOf("\u5370\u5ea6\u5c3c\u897f\u4e9a")>=0)return"\u5370\u5c3c";let n="";for(const t in U){const r=U[t];r.length>n.length&&e.indexOf(r)>=0&&(n=r)}if(n)return n;const r=e.toUpperCase().match(/[A-Z]{2,3}/g)||[];for(const t of r)if(R[t])return R[t];return""}const Le=36e5;let Oe=0;function ze(t,e){const n=async function(t,e){try{const n=String(e||"").toUpperCase();if(!n||!t||!t.K||"function"!=typeof t.K.put)return;const r=Date.now();if(r-Oe<Le)return;Oe=r;let a=null;try{a=JSON.parse(await t.K.get("usageColo")||"null")}catch(t){a=null}if(a&&r-(a.t||0)<Le)return void(Oe=a.t||r);if(!rt())return;await t.K.put("usageColo",JSON.stringify({colo:n,t:r})).catch(()=>{})}catch(t){}}(t,e);t&&t._ctx&&"function"==typeof t._ctx.waitUntil?t._ctx.waitUntil(n):n.catch(()=>{})}async function Ye(t){try{if(!t||!t.K||"function"!=typeof t.K.get)return"";const e=JSON.parse(await t.K.get("usageColo",{cacheTtl:30})||"null");return e&&e.colo?Date.now()-(e.t||0)>6048e5?"":String(e.colo).toUpperCase():""}catch(t){return""}}function Ze(t,n,r,a,o,i,c){const d=t.host,p="/"+t.path,u=p+"?ed=2048",h=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,f=new Set,m=[],g={},b=String(r||"").toUpperCase(),v=M[b]||b||"",y=String(c||"").toUpperCase(),w=M[y]||y||"",x=String(i||"").trim().toUpperCase(),k="OFF"===x?"":U[x]||w||v,I=n.map(n=>{const{user:r,srv:a,prt:o,name:i,isTrojan:s,tls:l}=Ie(n,0);let c=i;const b=ke(n,"type")||"ws";let v=De(c);if(!v&&k&&(v=k,c=c?k+"\u00b7"+c:k+"\u00b7\u4f18\u9009"),f.has(c)){const t=s?"T":e("eGh0dHA=")===b?"X":"W";let n=c+"\u00b7"+t,r=2;for(;f.has(n);)n=c+"\u00b7"+t+r,r++;c=n}if(f.add(c),v){let t=g[v];void 0===t&&(t=m.length,g[v]=t,m.push({name:v,code:T[v]||"R"+t,nodes:[]})),m[t].nodes.push(c)}const y={name:c,server:a,port:o,udp:!0,...l?{tls:!0,[e("c2tpcC1jZXJ0LXZlcmlmeQ==")]:!0,[e("c2VydmVybmFtZQ==")]:d,[e("Y2xpZW50LWZpbmdlcnByaW50")]:"chrome",[e("YWxwbg==")]:h||["http/1.1"]}:{},...t.ech&&l?{"ech-opts":{enable:!0,"query-server-name":t.echHost||"cloudflare-ech.com"}}:{}};if(s)return{...y,type:e("dHJvamFu"),password:r,network:"ws",[e("d3Mtb3B0cw==")]:{path:l?u:p,headers:{Host:d}}};if(e("eGh0dHA=")===b){let t={};try{t=JSON.parse(ke(n,"extra")||"{}")}catch(t){}return{...y,type:e("dmxlc3M="),uuid:r,network:e("eGh0dHA="),[e("YWxwbg==")]:h||["h2"],[e("eGh0dHAtb3B0cw==")]:{path:p,mode:e("c3RyZWFtLW9uZQ=="),host:d,[e("eC1wYWRkaW5nLW9iZnMtbW9kZQ==")]:void 0===t.xPaddingObfsMode||t.xPaddingObfsMode,"x-padding-method":t.xPaddingMethod||"tokenish","x-padding-placement":t.xPaddingPlacement||"queryInHeader","x-padding-header":t.xPaddingHeader||"","x-padding-key":t.xPaddingKey||""}}}return{...y,type:e("dmxlc3M="),uuid:r,network:"ws",[e("d3Mtb3B0cw==")]:{path:l?u:p,headers:{Host:d}}}});I.sort((t,e)=>(443===t.port?0:1)-(443===e.port?0:1));const P="custom"===(t.optimizer&&t.optimizer.subMode||""),S=I.map(t=>t.name),$=t.homeWan&&S.length?"\u96a7\u9053\u524d\u7f6e":"",C=function(t){if(!t||!t.length)return t;const e=t[0],n=(t,e)=>(t||"")===(e||"");return t.map(t=>(t!==e?(n(t.ca,e.ca)&&(t.caRef="hwca"),n(t.cert,e.cert)&&(t.certRef="hwcert"),n(t.key,e.key)&&(t.keyRef="hwkey")):(t.ca&&(t.caAnchor="hwca"),t.cert&&(t.certAnchor="hwcert"),t.key&&(t.keyAnchor="hwkey")),t))}(function(t,n){if(!t.homeWan)return[];const r=Array.isArray(t.homeWanNodes)&&t.homeWanNodes.length?t.homeWanNodes:[];if(!r.length)return[];const a={};return r.map(t=>{const r="\u5bb6\u5bbd"+String(t.country||"XX").toUpperCase();let o=r,i=2;for(;a[o];)o=r+"-"+i,i++;a[o]=1;const s={name:o,type:"openvpn",server:t.server,port:Number(t.port)||1194,proto:"tcp"===String(t.proto||"udp")?"tcp":"udp",username:"vpn",password:"vpn",ca:t.ca||"",dev:"tun",handshakeTimeout:30,cipher:t.cipher||e("QUVTLTEyOC1HQ00="),auth:t.auth||"SHA1"};return t.cert&&(s.cert=t.cert),t.key&&(s.key=t.key),t.tlsAuth&&(s["tls-auth"]=t.tlsAuth,s["key-direction"]="1"),t.tlsCrypt&&(s["tls-crypt"]=t.tlsCrypt),n&&(s.dialerProxy=n),s})}(t,$)),A=!(!t.homeWan||P);C.length&&I.push(...C);const V=function(t,n){const r="https://www.google.com/generate_204";if(!n)return"# ==================== \u7b56\u7565\u7ec4 ====================\n"+e("cHJveHktZ3JvdXA=")+"s:\n  - {name: \u4e00\u952e\u8fde\u63a5, type: select, "+e("cHJveGllcw==")+": [\u76f4\u63a5\u8fde\u63a5]}\n  - {name: \u76f4\u63a5\u8fde\u63a5, type: select, "+e("cHJveGllcw==")+": [DIRECT]}\n";const a=[];a.push("# ==================== \u76d1\u542c\u5668 ===================="),a.push("listeners:"),a.push("  # "+e("U2hhZG93c29ja3M=")+"\u76d1\u542c\u5668 - \u8fdc\u7a0b\u8fde\u63a5\u5bb6\u5ead\u7f51\u7edc\uff0c\u7aef\u53e3\u548c\u5bc6\u7801\u4f7f\u7528\u65f6\u8bf7\u4fee\u6539\uff08\u9ed8\u8ba4\u5bc6\u7801\u8bf7\u52ff\u7528\u4e8e\u516c\u7f51\uff09"),a.push("  - {name: SS-IN,  type: "+e("c2hhZG93c29ja3M=")+", listen: '::', port: 10000, "+e("dWRwOg==")+" true, password: Xf3#Lp9WqZ, cipher: "+e("YWVzLTI1Ni1nY20=")+"}"),a.push("  # Mixed\u76d1\u542c\u5668 - \u5206\u5730\u533a\u4e13\u7528\u7aef\u53e3 \u73a9\u6cd5\uff1a\u672c\u5730\u5ba2\u6237\u7aef\u6216\u63d2\u4ef6\uff0c\u5b9e\u73b0\u5206\u5730\u533a\u8bbf\u95ee"),t.slice(0,7).forEach((t,e)=>{a.push("  - {name: MIXED-"+t.code+", type: mixed, port: "+(5e4+e)+", proxy: "+t.name+"\u8282\u70b9}")}),a.push("  - {name: MIXED-AL, type: mixed, port: 50007, proxy: \u4e00\u952e\u8fde\u63a5}"),a.push(""),a.push("# ==================== \u7b56\u7565\u7ec4 ===================="),a.push(e("cHJveHktZ3JvdXA=")+"s:");const o=t.map(t=>t.name+"\u8282\u70b9");return a.push("  # \u4e3b\u5165\u53e3\uff1a\u9ed8\u8ba4\u81ea\u52a8\u9009\u62e9\u5ef6\u8fdf\u6700\u4f4e\u8282\u70b9\uff0c\u53ef\u624b\u52a8\u5207\u6362\u5404\u5730\u533a / \u5168\u90e8\u8282\u70b9 / \u76f4\u63a5\u8fde\u63a5"),a.push("  - {name: \u4e00\u952e\u8fde\u63a5, type: select, "+e("cHJveGllcw==")+": ["+["\u81ea\u52a8\u9009\u62e9","\u6545\u969c\u8f6c\u79fb"].concat(o,["\u5168\u90e8\u8282\u70b9","\u76f4\u63a5\u8fde\u63a5"]).join(", ")+"]}"),a.push("  # \u81ea\u52a8\u9009\u62e9\uff1a\u9690\u85cf\uff08\u9762\u677f\u4e0d\u53ef\u624b\u52a8\u9009\u62e9\uff09\uff0c\u7eaf\u81ea\u52a8\u4f18\u9009\u5ef6\u65f6\u6700\u4f4e\u8282\u70b9\uff1b\u6545\u969c\u8f6c\u79fb\uff1a\u6309\u5e8f\u81ea\u52a8\u5207\u6362"),a.push("  - {name: \u81ea\u52a8\u9009\u62e9, type: "+e("dXJsLXRlc3Q=")+", include-all: true, url: '"+r+"', interval: 200, lazy: true, hidden: true, "+e("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),a.push("  - {name: \u6545\u969c\u8f6c\u79fb, type: "+e("ZmFsbGJhY2s=")+", "+e("cHJveGllcw==")+": ["+o.concat(["\u5168\u90e8\u8282\u70b9"]).join(", ")+"], url: '"+r+"', interval: 200, lazy: true, "+e("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),t.forEach(t=>{const n=t.name+"\u8282\u70b9",o=t.name+"\u81ea\u52a8";a.push("  # "+t.name+"\uff08"+t.nodes.length+" \u8282\u70b9\uff09\uff1a\u9ed8\u8ba4\u9009\u4e2d\u300c"+o+"\u300d=\u81ea\u52a8\u4f18\u9009\u8be5\u5730\u533a\u6700\u5feb\u8282\u70b9\uff0c\u4e5f\u53ef\u624b\u52a8\u6307\u5b9a\u5355\u4e2a\u8282\u70b9"),a.push("  - {name: "+n+", type: select, "+e("cHJveGllcw==")+": ["+o+", "+t.nodes.map(He).join(", ")+"]}"),a.push("  - {name: "+o+", type: "+e("dXJsLXRlc3Q=")+", "+e("cHJveGllcw==")+": ["+t.nodes.map(He).join(", ")+"], url: '"+r+"', interval: 200, lazy: true, "+e("ZW1wdHktZmFsbGJhY2s=")+": REJECT, hidden: true}")}),a.push("  # \u5168\u90e8\u8282\u70b9\uff08\u624b\u52a8\u6311\u9009\u4efb\u610f\u8282\u70b9\uff1b\u9996\u4e2a\u9009\u9879\u300c\u81ea\u52a8\u9009\u62e9\u300d=\u5168\u90e8\u8282\u70b9\u4e2d\u6700\u5feb\uff09"),a.push("  - {name: \u5168\u90e8\u8282\u70b9, type: select, include-all: true, "+e("cHJveGllcw==")+": [\u81ea\u52a8\u9009\u62e9]}"),a.push("  - {name: \u76f4\u63a5\u8fde\u63a5, type: select, "+e("cHJveGllcw==")+": [DIRECT]}"),a.join("\n")+"\n"}(m,I.length);let R="\n# \u76d1\u542c\u5668\u4e0e\u7b56\u7565\u7ec4\u7531\u8ba2\u9605\u751f\u6210\u65f6\u6309\u5b9e\u9645\u8282\u70b9\u52a8\u6001\u8f93\u51fa\uff08\u89c1 generate"+e("Q2xhc2g=")+" / build"+e("Q2xhc2g=")+"Groups\uff09\uff1a\n# \u6709\u8282\u70b9\u7684\u5730\u533a\u624d\u751f\u6210\u5bf9\u5e94\u5206\u7ec4\u4e0e\u76d1\u542c\u5668\uff0c\u65e0\u8282\u70b9\u4e0d\u5360\u4f4d\uff08\u5730\u533a\u5f52\u6876\u7531\u8282\u70b9\u540d\u8bc6\u522b + \u673a\u623f\u843d\u70b9\u6807\u6ce8\uff09\n\n# ==================== \u6838\u5fc3\u914d\u7f6e ====================\nmode: rule\nport: 7890\nsocks-port: 7891\n"+e("cmVkaXItcG9ydA==")+": 7892\n"+e("bWl4ZWQtcG9ydA==")+": 7893\n"+e("dHByb3h5LXBvcnQ=")+": 7895\nipv6: true\n"+e("YWxsb3ctbGFu")+": true\nunified-delay: true\ntcp-concurrent: true\nlog-level: warning\nbind-address: '*'\nfind-process-mode: 'always'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# \u8ba4\u8bc1\u914d\u7f6e\uff08\u9ed8\u8ba4\u51ed\u636e\u8bf7\u52a1\u5fc5\u4fee\u6539\uff01\uff09\nauthentication:\n  - "+e("bWlob21v")+":yyds666\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# \u5b9e\u9a8c\u6027\u529f\u80fd\nexperimental:\n  quic-go-disable-gso: true\n\n# \u7ba1\u7406\u9762\u677f\u914d\u7f6e\nexternal-ui-url: https://github.com/"+e("WmVwaHlydXNv")+"/"+e("emFzaGJvYXJk")+"/releases/latest/download/dist.zip\nexternal-ui-name: "+e("emFzaGJvYXJk")+'\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: yyds666    # \u8bf7\u4fee\u6539\u4e3a\u81ea\u5b9a\u4e49\u5bc6\u94a5\n# \u5141\u8bb8\u7f51\u9875\u9762\u677f\u8de8\u57df\u8bbf\u95ee\nexternal-controller-cors:\n  allow-origins:\n    - "*"\n  allow-private-'+e("bmV0d29yazo=")+" true\n\n# \u914d\u7f6e\u5b58\u50a8\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# "+e("Z2Vvc2l0ZQ==")+" / "+e("Z2VvaXA=")+" \u6570\u636e\u6e90\uff08"+e("R0VPU0lURQ==")+" \u89c4\u5219\u4f9d\u8d56\uff1b"+e("TWV0YUN1YmVY")+" \u5b98\u65b9\u89c4\u5219\u5e93\uff0cGitHub release \u5b98\u65b9\u6e90\uff09\n"+e("Z2VveC11cmw=")+":\n  "+e("Z2VvaXA=")+': "https://github.com/'+e("TWV0YUN1YmVY")+"/"+e("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+e("Z2VvaXA=")+'.dat"\n  '+e("Z2Vvc2l0ZQ==")+': "https://github.com/'+e("TWV0YUN1YmVY")+"/"+e("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+e("Z2Vvc2l0ZQ==")+'.dat"\n  mmdb: "https://github.com/'+e("TWV0YUN1YmVY")+"/"+e("bWV0YS1ydWxlcy1kYXQ=")+'/releases/download/latest/country.mmdb"\n\n# \u6d41\u91cf\u55c5\u63a2\n'+e("c25pZmZlcg==")+":\n  enable: true\n  force-dns-mapping: true   # \u5f3a\u5236 DNS \u6620\u5c04\uff0c\u63d0\u9ad8\u5206\u6d41\u51c6\u786e\u5ea6\n  parse-pure-ip: true       # \u89e3\u6790\u7eaf IP \u8fde\u63a5\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    "+e("VExTOg==")+'\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - "+.push.apple.com"\n\n# TUN\u6a21\u5f0f\u914d\u7f6e\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  '+e("ZG5zLWhpamFjaw==")+':\n    - "any:53"\n    - "tcp://any:53"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # \u63d0\u793a\uff1a\u7cfb\u7edf\u7ea7\u9632\u6cc4\u9732\u7684\u6700\u5f3a\u624b\u6bb5\u662f\u5f00\u542f TUN\uff08\u81ea\u52a8\u52ab\u6301\u5168\u90e8 DNS \u6d41\u91cf\uff09\uff1b\n  # \u4e0d\u5f00 TUN \u65f6\uff0c\u8bf7\u628a\u7cfb\u7edf / LAN \u8bbe\u5907\u7684 DNS \u6307\u5411 127.0.0.1:53\uff08\u672c\u673a\uff09\u6216\u672c\u673a\u5c40\u57df\u7f51 IP:53\u3002\n\nhosts:\n  miwifi.com: 192.168.31.2\n  "epdg.epc.mnc010.mcc234.pub.3gppnetwork.org": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS \u914d\u7f6e ====================\n# \u9632\u6cc4\u9732\u8981\u70b9\uff1a\n#   1) respect-rules: true\uff1aDNS \u670d\u52a1\u5668\u8fde\u63a5\u9075\u5faa\u8def\u7531\u89c4\u5219\uff08\u56fd\u5916 DoH \u8d70\u96a7\u9053\u3001\u56fd\u5185 DoH \u76f4\u8fde\uff09\uff0c\n#      \u89e3\u6790\u884c\u4e3a\u4e0e\u89c4\u5219\u5206\u6d41\u4e00\u81f4\uff0c\u907f\u514d\u201c\u89c4\u5219\u8d70\u51fa\u53e3\u3001\u89e3\u6790\u5374\u76f4\u8fde\u201d\u7684\u6cc4\u9732\u3002\n#   2) \u9ed8\u8ba4 nameserver \u7528\u56fd\u5185 DoH\uff1b\u53ea\u6709\u201c\u5c06\u8d70\u51fa\u53e3\u201d\u7684\u89c4\u5219\u96c6\u624d\u7528\u56fd\u5916 DoH\uff0c\n#      \u4e14\u5176\u57df\u540d\u5728 rules \u4e2d\u663e\u5f0f\u56fa\u5b9a\u8d70\u51fa\u53e3\u3002\n#   3) fake-ip-filter \u8865\u9f50\u7cfb\u7edf\u8fde\u901a\u6027\u68c0\u6d4b / \u65f6\u95f4\u540c\u6b65 / \u8fd0\u8425\u5546\u767b\u5f55\u7b49\u57df\u540d\uff0c\u9632\u6b62\u7cfb\u7edf\u8bef\u5224\u65ad\u7f51\u800c\u56de\u9000\u8fd0\u8425\u5546 DNS\u3002\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # \u672c\u673a / LAN \u8bbe\u5907\u53ef\u628a DNS \u6307\u5411\u6b64\u5730\u5740\uff0c\u907f\u514d\u8d70\u8fd0\u8425\u5546 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules \u4e0b\u5b98\u65b9\u4e0d\u63a8\u8350 DoH3\uff1b\u4e14 QUIC \u5df2\u88ab\u89c4\u5219\u62e6\u622a\n  cache-algorithm: arc      # \u6027\u80fd\u66f4\u4f18\u7684 ARC \u7f13\u5b58\u7b97\u6cd5\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "+.lan"\n    - "+.local"\n    - "+.localhost"\n    - "+.home.arpa"\n    - "+.internal"\n    # \u7cfb\u7edf\u8fde\u901a\u6027\u68c0\u6d4b\uff08\u9632\u6b62 fake-ip \u5bfc\u81f4\u201c\u65e0\u7f51\u7edc\u201d\u5224\u65ad\uff0c\u56de\u9000 ISP DNS \u9020\u6210\u6cc4\u9732\uff09\n    - "+.msft'+e("Y29ubmVjdA==")+'test.com"\n    - "+.msftncsi.com"          # \u901a\u914d\u5df2\u8986\u76d6 dns.msftncsi.com\n    - "captive.apple.com"\n    - "'+e("Y29ubmVjdA==")+'ivitycheck.gstatic.com"\n    - "detectportal.firefox.com"\n    # \u65f6\u95f4\u540c\u6b65\n    - "time.nist.gov"\n    - "+.pool.ntp.org"\n    - "time.*.com"              # \u901a\u914d\u5df2\u8986\u76d6 time.windows.com\n    - "ntp.*.com"               # \u901a\u914d\u5df2\u8986\u76d6 ntp.ubuntu.com\n    # \u8fd0\u8425\u5546 Wi-Fi \u767b\u5f55\u9875\n    - "+.cmpassport.com"\n    - "id6.me"\n    - "open.e.189.cn"\n    - "mdn.open.wo.cn"\n    - "opencloud.wostore.cn"\n    - "auth.wosms.cn"\n    - "+.10099.com.cn"\n    # \u539f\u914d\u7f6e\u4fdd\u7559\u9879\n    - "+.market.xiaomi.com"\n    - "+.pub.3gppnetwork.org"\n    - "+.push.apple.com"\n    - "+.bing.com"\n    - "+.miwifi.com"\n    - "+.docker.io"\n    # \u56fd\u5185\u5e94\u7528\u767b\u5f55\uff08+.qq.com \u5df2\u8986\u76d6 localhost.ptlogin2.qq.com\uff09\n    - "+.qq.com"\n    # \u76f4\u8fde / \u56fd\u5185\u7c7b\u89c4\u5219\u96c6\uff1a\u8fd4\u56de\u771f\u5b9e IP\n    - '+e("cnVsZS1zZXQ=")+":Direct\n    - "+e("cnVsZS1zZXQ=")+":Private\n    - "+e("cnVsZS1zZXQ=")+":China\n    - "+e("Z2Vvc2l0ZQ==")+":cn                # \u56fd\u5185\u57df\u540d\u8fd4\u56de\u771f\u5b9e IP\uff08"+e("Z2Vvc2l0ZQ==")+" \u5e93\u515c\u5e95\uff0c\u9632 fake-ip \u5e72\u6270\u56fd\u5185\u5e94\u7528\uff09\n  use-hosts: true\n  respect-rules: true\n  # \u5f15\u5bfc\u7528 DNS\uff08\u89e3\u6790 DoH/DoT \u670d\u52a1\u5668\u81ea\u8eab\u7684\u57df\u540d\uff09\uff0c\u5fc5\u987b\u662f IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # \u9ed8\u8ba4\u89e3\u6790\uff1a\u672a\u547d\u4e2d "+e("bmFtZXNlcnZlci1wb2xpY3k=")+' \u7684\u57df\u540d\uff08\u56fd\u5185 DoH\uff0c\u76f4\u8fde\uff09\n  nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # \u76f4\u8fde\u51fa\u53e3\u7684\u89e3\u6790\n  '+e("ZGlyZWN0LW5hbWVzZXJ2ZXI=")+':\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # \u89e3\u6790\u8282\u70b9\u57df\u540d\uff08\u9632\u5957\u5a03 / \u9632\u5faa\u73af\uff0c\u7528\u56fd\u5185\u76f4\u8fde\u53ef\u8fbe\u7684 DoH\uff09\n  '+e("cHJveHktc2VydmVyLW5hbWVzZXJ2ZXI=")+':\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  '+e("bmFtZXNlcnZlci1wb2xpY3k=")+':\n    # \u5e7f\u544a\u57df\u540d\u76f4\u63a5\u8fd4\u56de\u7a7a\u5e94\u7b54\n    "'+e("cnVsZS1zZXQ=")+":Advertising,"+e("QVdBdmVudWU=")+'Ads": rcode://success\n    # \u76f4\u8fde\u7c7b\uff1a\u56fd\u5185 DoH\uff08\u5fae\u8f6f\u5df2\u5e76\u5165\u76f4\u8fde\uff0c\u5fae\u8f6f\u57df\u540d\u8d70\u56fd\u5185\u89e3\u6790\u540e\u76f4\u8fde\uff09\n    "'+e("cnVsZS1zZXQ=")+':Direct,Private,China,Microsoft":\n      - "https://dns.alidns.com/dns-query"\n      - "https://doh.pub/dns-query"\n    # \u8d70\u51fa\u53e3\u7c7b\uff1a\u56fd\u5916 DoH\uff08\u8fde\u63a5\u672c\u8eab\u7ecf\u96a7\u9053\uff0c\u4e0d\u76f4\u8fde\u66b4\u9732\u67e5\u8be2\uff09\n    "'+e("cnVsZS1zZXQ=")+":AI,Telegram,Twitter,SocialMedia,Netflix,"+e("WW91VHViZQ==")+',Spotify,TikTok,disney,Google,Proxy":\n      - "https://dns.google/dns-query"\n      - "https://cloudflare-dns.com/dns-query"\n\n__'+e("Q0xBU0g=")+"_GROUPS__\n\n# ==================== \u89c4\u5219\u8def\u7531 ====================\nrules:\n  # \u5e7f\u544a\u62e6\u622a\uff08\u5e38\u7528\uff1a\u76f4\u63a5\u62d2\u7edd\uff1b\u5982\u9700\u4e34\u65f6\u653e\u884c\u53ef\u6539\u4e3a\u4e00\u952e\u8fde\u63a5\uff09\n  - "+e("UlVMRS1TRVQ=")+",Tracking,REJECT\n  - "+e("UlVMRS1TRVQ=")+","+e("QVdBdmVudWU=")+"Ads,REJECT\n  - "+e("UlVMRS1TRVQ=")+",Advertising,REJECT\n  - "+e("R0VPU0lURQ==")+",category-ads-all,REJECT        # "+e("Z2Vvc2l0ZQ==")+" \u5e7f\u544a\u5206\u7c7b\u515c\u5e95\uff08"+e("djJyYXk=")+" \u6807\u51c6\u5e93\uff0c\u8986\u76d6\u9762\u5e7f\uff09\n\n  # DNS \u670d\u52a1\u5668\u57df\u540d\uff1a\u89e3\u6790\u901a\u9053\u56fa\u5b9a\uff0c\u907f\u514d DNS \u6d41\u91cf\u8d70\u9519\u8def\u5f84\uff08\u9632\u6cc4\u9732\u5173\u952e\uff09\n  - DOMAIN-SUFFIX,alidns.com,\u76f4\u63a5\u8fde\u63a5\n  - DOMAIN-SUFFIX,doh.pub,\u76f4\u63a5\u8fde\u63a5\n  - DOMAIN,dns.google,\u4e00\u952e\u8fde\u63a5\n  - DOMAIN,cloudflare-dns.com,\u4e00\u952e\u8fde\u63a5\n\n  # \u5927\u9646\u76f4\u8fde\u4f18\u5148\uff08\u7f6e\u4e8e\u56fd\u5916\u670d\u52a1\u89c4\u5219\u4e4b\u524d\uff1a\u5927\u9646\u5e94\u7528\u4e00\u5f8b\u76f4\u8fde\uff0c\u4e0d\u88ab\u56fd\u5916\u670d\u52a1\u89c4\u5219\u96c6\u62a2\u5148\u547d\u4e2d\uff09\n  - "+e("UlVMRS1TRVQ=")+",Private,\u76f4\u63a5\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Direct,\u76f4\u63a5\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Download,\u76f4\u63a5\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",AppleCN,\u76f4\u63a5\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Microsoft,\u76f4\u63a5\u8fde\u63a5        # \u5fae\u8f6f\u5168\u5bb6\u6876\u76f4\u8fde\uff08Office / OneDrive / Windows \u66f4\u65b0 / Teams / Xbox \u7b49\uff09\n  - "+e("UlVMRS1TRVQ=")+",China,\u76f4\u63a5\u8fde\u63a5             # \u56fd\u5185\u57df\u540d\u76f4\u8fde\n  - "+e("R0VPU0lURQ==")+",CN,\u76f4\u63a5\u8fde\u63a5                  # "+e("Z2Vvc2l0ZQ==")+" \u56fd\u5185\u57df\u540d\u515c\u5e95\uff08\u8986\u76d6\u89c4\u5219\u96c6\u672a\u6536\u5f55\u7684\u56fd\u5185\u57df\u540d\uff0c\u5148\u4e8e "+e("R0VPSVA=")+" \u547d\u4e2d\uff09\n  # \u963b\u6b62 QUIC \u8d70\u51fa\u53e3\uff08\u5f3a\u5236\u56de\u9000 TCP\uff0c\u907f\u514d QUIC \u7ed5\u8fc7\u51fa\u53e3 / \u88ab\u5e72\u6270\uff09\u3002\n  # \u653e\u5728\u76f4\u8fde\u89c4\u5219\u4e4b\u540e\uff1a\u76f4\u8fde QUIC\uff08\u5927\u9646 / \u5fae\u8f6f / \u82f9\u679c\uff09\u4e0d\u53d7\u5f71\u54cd\u3002\u5982\u9700 Telegram \u8bed\u97f3\u7b49 UDP\uff0c\u53ef\u5220\u9664\u6b64\u884c\u3002\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # \u5e38\u7528\u56fd\u5916\u670d\u52a1\uff08\u7edf\u4e00\u8d70\u4e00\u952e\u8fde\u63a5\uff09\n  - "+e("UlVMRS1TRVQ=")+",AI,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Telegram,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Twitter,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",SocialMedia,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Netflix,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+","+e("WW91VHViZQ==")+",\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Spotify,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",TikTok,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",disney,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Google,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",github,\u4e00\u952e\u8fde\u63a5\n  - "+e("UlVMRS1TRVQ=")+",Proxy,\u4e00\u952e\u8fde\u63a5\n\n  # IP\u89c4\u5219\n  - "+e("UlVMRS1TRVQ=")+",PrivateIP,\u76f4\u63a5\u8fde\u63a5,no-resolve\n  - "+e("UlVMRS1TRVQ=")+",TelegramIP,\u4e00\u952e\u8fde\u63a5,no-resolve\n  - "+e("UlVMRS1TRVQ=")+","+e("UHJveHlJUA==")+",\u4e00\u952e\u8fde\u63a5,no-resolve\n  - "+e("UlVMRS1TRVQ=")+",ChinaIP,\u76f4\u63a5\u8fde\u63a5,no-resolve\n\n  # \u5927\u9646 IP \u515c\u5e95\u76f4\u8fde\uff1a\u8986\u76d6\u89c4\u5219\u96c6\u672a\u6536\u5f55\u7684\u57df\u540d / \u7eaf IP \u8fde\u63a5\u7684\u5927\u9646\u5e94\u7528\uff08"+e("R0VPSVA=")+" \u5e93\u8986\u76d6\u9762\u66f4\u5168\uff09\n  - "+e("R0VPSVA=")+",CN,\u76f4\u63a5\u8fde\u63a5,no-resolve\n\n  # \u515c\u5e95\u89c4\u5219\uff1a\u5176\u4f59\uff08\u56fd\u5916\uff09\u8d70\u4e00\u952e\u8fde\u63a5\n  - MATCH,\u4e00\u952e\u8fde\u63a5\n\n# ==================== \u89c4\u5219\u96c6 ====================\n# \u89c4\u5219\u96c6\u884c\u4e3a\u6a21\u677f\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # \u7ecf\u5178\u89c4\u5219\u96c6\uff08"+e("YmxhY2ttYXRyaXg3")+" \u7b49\uff0cDOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME\uff09\n\n# \u89c4\u5219\u63d0\u4f9b\u8005\uff08\u4ec5\u4fdd\u7559\u5e38\u7528\uff09\n# \u2605 \u540c\u57df\u4ee3\u4e0b\uff1aurl \u6307\u5411 __CRULES__\uff08\u751f\u6210\u65f6\u66ff\u6362\u4e3a https://<\u5f53\u524d\u8ba2\u9605\u57df\u540d>/crules\uff09\u2014\u2014\n#   \u5ba2\u6237\u7aef\u5bfc\u5165/\u66f4\u65b0\u96f6\u5916\u90e8\u76f4\u8fde\uff08\u4e0d\u5f00\u68af\u5b50\u4e5f\u80fd\u5b8c\u6210\u5bfc\u5165\uff09\uff1b\u4e0a\u6e38\u4ed3\u5e93\u8d44\u6e90\u7531 Worker \u670d\u52a1\u7aef\u62c9\u53d6\uff0c\n#   KV \u7f13\u5b58 + \u8fdb\u7a0b\u5185\u7f13\u5b58\uff0c\u5ba2\u6237\u7aef\u4e0d\u518d\u6bcf\u6b21\u76f4\u8fde\u5916\u7ad9\u4e0b\u8f7d\uff08\u89c1 serveCrule / RULE_SOURCES\uff09\n"+e("cnVsZS1wcm92aWRlcg==")+"s:\n  # \u5e7f\u544a\n  Tracking:       {<<: *BehaviorDN, url: __CRULES__/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: __CRULES__/Advertising.mrs}\n  "+e("QVdBdmVudWU=")+"Ads:    {<<: *BehaviorDY, url: __CRULES__/"+e("QVdBdmVudWU=")+"Ads.yaml}\n  # \u76f4\u8fde / \u56fd\u5185\n  Direct:         {<<: *BehaviorDN, url: __CRULES__/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: __CRULES__/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: __CRULES__/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: __CRULES__/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: __CRULES__/China.yaml}   # \u5927\u9646\u76f4\u8fde\u5168\u91cf\uff1aChinaMaxNoIP\uff0811\u4e07+ \u57df\u540d\uff0c\u542b\u5927\u9646\u53ef\u8fbe\u56fd\u9645\u670d\u52a1\uff09\uff0c\u6bcf\u65e5\u66f4\u65b0\n  # \u5e38\u7528\u56fd\u5916\u670d\u52a1\n  AI:             {<<: *BehaviorDN, url: __CRULES__/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: __CRULES__/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: __CRULES__/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: __CRULES__/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: __CRULES__/Netflix.mrs}\n  "+e("WW91VHViZQ==")+":        {<<: *BehaviorDN, url: __CRULES__/"+e("WW91VHViZQ==")+".mrs}\n  Google:         {<<: *BehaviorDN, url: __CRULES__/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: __CRULES__/Microsoft.yaml}   # \u5fae\u8f6f\u5168\u5bb6\u6876\u5168\u91cf\uff1a"+e("YmxhY2ttYXRyaXg3")+"\uff08Office/OneDrive/Xbox/Teams/Skype/Bing/Azure \u7b49\uff09\n  Proxy:          {<<: *BehaviorDN, url: __CRULES__/Proxy.mrs}\n  # \u5a92\u4f53\uff08"+e("RHVzdGluV2lu")+"\uff09\n  Spotify:        {<<: *BehaviorDN, url: __CRULES__/Spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: __CRULES__/TikTok.mrs}\n  disney:         {<<: *BehaviorDN, url: __CRULES__/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: __CRULES__/github.yaml}\n  # IP\u89c4\u5219\n  PrivateIP:      {<<: *BehaviorIP, url: __CRULES__/PrivateIP.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: __CRULES__/TelegramIP.mrs}\n  "+e("UHJveHlJUA==")+":        {<<: *BehaviorIP, url: __CRULES__/"+e("UHJveHlJUA==")+".mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: __CRULES__/ChinaIP.mrs}\n\n# ==================== EOF ====================\n\n";R=R.replace("__"+e("Q0xBU0g=")+"_GROUPS__",V),a&&(R=R.replace(/__CRULES__/g,a)),R=function(t,n,r,a){if(!n.length)return t;const o=n.map(t=>t.name),i=o.slice().sort((t,e)=>t<e?-1:t>e?1:0),s=a&&a.length?`  # ${"\u5bb6\u5bbd\u96a7\u9053\u524d\u7f6e\uff1a"}CF ${"\u4f18\u9009\u8282\u70b9\u81ea\u52a8\u6d4b\u6d3b\uff0c\u5bb6\u5bbd"} openvpn ${"\u7ecf\u6b64\u62e8\u53f7\uff08"}${e("ZGlhbGVy")}-proxy${"\uff09"}\n  - {name: ${"\u96a7\u9053\u524d\u7f6e"}, type: ${e("dXJsLXRlc3Q=")}, ${e("cHJveGllcw==")}: [${a.map(He).join(", ")}], url: 'https://www.google.com/generate_204', interval: 300, lazy: true, hidden: true, ${e("ZW1wdHktZmFsbGJhY2s=")}: REJECT, icon: https://github.com/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}/raw/master/IconSet/Color/Auto.png}\n`:"",l=`  # ${"\u5bb6\u5bbd\u6a21\u5f0f\uff1a\u81ea\u52a8\u6d4b\u6d3b\uff08"}${e("dXJsLXRlc3Q=")} ${"\u81ea\u52a8\u9009\u62e9\u5ef6\u8fdf\u6700\u4f4e\u5bb6\u5bbd\u8282\u70b9\uff09"}\n  - {name: ${"\u5bb6\u5bbd\u81ea\u52a8"}, type: ${e("dXJsLXRlc3Q=")}, ${e("cHJveGllcw==")}: [${o.map(He).join(", ")}], url: 'https://www.google.com/generate_204', interval: 600, lazy: true, hidden: true, ${e("ZW1wdHktZmFsbGJhY2s=")}: REJECT, icon: https://github.com/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}/raw/master/IconSet/Color/Auto.png}\n`,c=`  # ${"\u5bb6\u5bbd\u6a21\u5f0f\uff1a"}VPN Gate OpenVPN ${"\u51fa\u53e3\uff08\u591a\u53f0\u5bb6\u5bbd\u8282\u70b9\u81ea\u52a8\u6d4b\u6d3b\uff0c\u7ecf"} ${e("ZGlhbGVy")}-proxy ${"\u96a7\u9053\u62e8\u53f7\uff09"}\n  - {name: ${"\u5bb6\u5bbd\u51fa\u53e3"}, type: select, ${e("cHJveGllcw==")}: [${"\u5bb6\u5bbd\u81ea\u52a8"}, ${i.map(He).join(", ")}, ${"\u76f4\u63a5\u8fde\u63a5"}], icon: https://github.com/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}/raw/master/IconSet/Color/VPN.png}\n`;let d=t;return d=d.replace("# ==================== \u89c4\u5219\u8def\u7531 ====================",s+l+c+"# ==================== \u89c4\u5219\u8def\u7531 ===================="),d=d.replace("  - MATCH,\u4e00\u952e\u8fde\u63a5","  # \u5bb6\u5bbd\u6a21\u5f0f\uff1aVPN Gate \u76f8\u5173\u6d41\u91cf\u8d70\u5bb6\u5bbd\u51fa\u53e3\uff08OpenVPN \u7ecf CF \u96a7\u9053\uff09\n  - DOMAIN-SUFFIX,vpngate.net,\u5bb6\u5bbd\u51fa\u53e3\n"+(r?"  - MATCH,\u5bb6\u5bbd\u51fa\u53e3":"  - MATCH,\u4e00\u952e\u8fde\u63a5")),d}(R,C,A,S);const N=String(o||"").toUpperCase(),H=U[N]||"";return`# ${l} ${"\u8ba2\u9605"} v${s} ${"\u00b7"} ${"\u673a\u623f"} ${b||"\u672a\u77e5"}${v?"("+v+")":""}${y&&y!==b?" \u00b7 \u5b9e\u6d4b "+y+(w?"("+w+")":""):""}${N?" \u00b7 \u8bbf\u5ba2 "+N+(H?"("+H+")":""):""} ${"\u00b7"} ${"\u8282\u70b9"} ${I.length} ${"\u4e2a"}\ntest-url: 'http://www.gstatic.com/generate_204'\n${e("cHJveGllcw==")}:\n${I.map(t=>function(t){const n=[];if(n.push("  - name: "+He(t.name)),n.push("    type: "+t.type),n.push("    server: "+He(t.server)),n.push("    port: "+t.port),"openvpn"===t.type)return n.push("    proto: "+He(t.proto||"udp")),n.push("    "+e("dWRwOg==")+" "+("tcp"===t.proto?"false":"true")),n.push("    username: "+He(t.username||"vpn")),n.push("    password: "+He(t.password||"vpn")),t.caRef?n.push("    ca: *"+t.caRef):t.ca&&(n.push(t.caAnchor?"    ca: &"+t.caAnchor+" |":"    ca: |"),n.push(...Ee(t.ca,6))),t.certRef?n.push("    cert: *"+t.certRef):t.cert&&(n.push(t.certAnchor?"    cert: &"+t.certAnchor+" |":"    cert: |"),n.push(...Ee(t.cert,6))),t.keyRef?n.push("    key: *"+t.keyRef):t.key&&(n.push(t.keyAnchor?"    key: &"+t.keyAnchor+" |":"    key: |"),n.push(...Ee(t.key,6))),t["tls-auth"]&&(n.push("    tls-auth: |"),n.push(...Ee(t["tls-auth"],6)),n.push("    key-direction: "+He(t["key-direction"]||"1"))),t["tls-crypt"]&&(n.push("    tls-crypt: |"),n.push(...Ee(t["tls-crypt"],6))),n.push("    dev: tun"),n.push("    cipher: "+He(t.cipher||e("QUVTLTEyOC1HQ00="))),n.push("    auth: "+He(t.auth||"SHA1")),t.handshakeTimeout&&n.push("    handshake-timeout: "+t.handshakeTimeout),t.dialerProxy&&n.push("    "+e("ZGlhbGVy")+"-proxy: "+He(t.dialerProxy)),n.join("\n");if(e("dmxlc3M=")===t.type?n.push("    uuid: "+He(t.uuid)):n.push("    password: "+He(t.password)),n.push("    "+e("bmV0d29yazo=")+" "+t.network),n.push("    "+e("dWRwOg==")+" true"),t.tls&&(n.push("    "+e("dGxzOg==")+" true"),n.push("    "+e("c2tpcC1jZXJ0LXZlcmlmeQ==")+": true"),n.push(t.alpn&&t.alpn.length?"    "+e("YWxwbg==")+": ["+t.alpn.join(", ")+"]":e("eGh0dHA=")===t.network?"    "+e("YWxwbg==")+": [h2]":"    "+e("YWxwbg==")+": [http/1.1]"),n.push("    "+e("c2VydmVybmFtZQ==")+": "+He(t.servername)),e("dHJvamFu")===t.type&&n.push("    sni: "+He(t.servername)),n.push("    "+e("Y2xpZW50LWZpbmdlcnByaW50")+": chrome"),t["ech-opts"]&&(n.push("    ech-opts:"),n.push("      enable: "+He(t["ech-opts"].enable)),n.push("      query-server-name: "+He(t["ech-opts"]["query-server-name"])))),"ws"===t.network)n.push("    "+e("d3Mtb3B0cw==")+":"),n.push("      path: "+He(t[e("d3Mtb3B0cw==")].path)),n.push("      headers:"),n.push("        Host: "+He(t[e("d3Mtb3B0cw==")].headers.Host));else if(e("eGh0dHA=")===t.network){const r=t[e("eGh0dHA=")+"-opts"];n.push("    "+e("eGh0dHA=")+"-opts:"),n.push("      path: "+He(r.path)),n.push("      mode: "+He(r.mode)),n.push("      host: "+He(r.host)),n.push("      x-padding-"+e("b2Jmcw==")+"-mode: "+He(r["x-padding-"+e("b2Jmcw==")+"-mode"])),n.push("      x-padding-method: "+He(r["x-padding-method"])),n.push("      x-padding-placement: "+He(r["x-padding-placement"])),n.push("      x-padding-header: "+He(r["x-padding-header"])),n.push("      x-padding-key: "+He(r["x-padding-key"]))}return n.join("\n")}(t)).join("\n")}\n${R}\n`}function Fe(t,n){const r=t.host,a="/"+t.path,o=[];for(const t of n)t.startsWith(e("dHJvamFu")+"://")&&t.indexOf(e("c2VjdXJpdHk9")+"none")<0?o.push(t):t.startsWith(e("dmxlc3M=")+"://")&&t.indexOf("type="+e("eGh0dHA="))<0&&t.indexOf(e("c2VjdXJpdHk9")+"none")<0&&o.push(t.replace(i,e("dHJvamFu")+"://").replace(e("ZW5jcnlwdGlvbj0=")+"none&",""));const s=o.map((t,n)=>{const{user:o,srv:i,prt:s,name:l}=Ie(t,n);return`${l} = ${e("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${r}, tls=true, ${e("c2tpcC1jZXJ0LXZlcmlmeQ==")}=true, sni=${r}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${s.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${s.map(t=>t.split(" = ")[0]).join(", ")}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}\n\n[Rule]\n${e("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function Ge(t,n){const r=t.host,a="/"+t.path,o=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,i=new Set,s=n.map((t,n)=>{const{user:s,srv:l,prt:c,name:d,isTrojan:p,tls:u}=Ie(t,n),h=ke(t,"type")||"ws";let f=d;if(i.has(f)){const t=p?"T":e("eGh0dHA=")===h?"X":"W";let n=f+"\u00b7"+t,r=2;for(;i.has(n);)n=f+"\u00b7"+t+r,r++;f=n}i.add(f);const m=u?e("eGh0dHA=")===h?{enabled:!0,server_name:r,insecure:!0,[e("YWxwbg==")]:o||["h2"]}:{enabled:!0,server_name:r,insecure:!0,[e("YWxwbg==")]:o||["http/1.1"],utls:{enabled:!0,[e("ZmluZ2VycHJpbnQ=")]:"chrome"}}:{enabled:!1},g=e("eGh0dHA=")===h?{type:e("eGh0dHA="),mode:e("c3RyZWFtLW9uZQ=="),path:a}:u?{type:"ws",path:a,max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol",headers:{Host:r}}:{type:"ws",path:a,headers:{Host:r}};return p?{type:e("dHJvamFu"),tag:f,server:l,server_port:c,password:s,tls:m,transport:g}:{type:e("dmxlc3M="),tag:f,server:l,server_port:c,uuid:s,tls:m,transport:g}}),l=s.map(t=>t.tag),c=[[e("Z2Vvc2l0ZQ==")+"-cn","\ud83c\udfaf \u5168\u7403\u76f4\u8fde"],[e("Z2Vvc2l0ZQ==")+"-google","\ud83c\udf10 \u8c37\u6b4c\u670d\u52a1"],[e("Z2Vvc2l0ZQ==")+"-apple","\ud83c\udf4e \u82f9\u679c\u670d\u52a1"],[e("Z2Vvc2l0ZQ==")+"-microsoft","\u24c2\ufe0f \u5fae\u8f6f\u670d\u52a1"],[e("Z2Vvc2l0ZQ==")+"-openai","\ud83e\udd16 OpenAI"],[e("Z2Vvc2l0ZQ==")+"-spotify","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-"+e("eW91dHViZQ=="),"\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-netflix","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-disney","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-twitter","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-telegram","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-github","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[e("Z2Vvc2l0ZQ==")+"-category-ads-all","block"]],d={log:{level:"info"},dns:{servers:[{tag:"dns-remote",type:"https",server:"1.1.1.1"},{tag:"dns-direct",type:"udp",server:"223.5.5.5"},{tag:"dns-fakeip",type:"fakeip",inet4_range:"198.18.0.0/15"}],rules:[{domain_suffix:["githubusercontent.com","github.com","jsdelivr.net"],action:"route",server:"dns-direct"},{rule_set:e("Z2Vvc2l0ZQ==")+"-cn",action:"route",server:"dns-direct"},{action:"route",server:"dns-fakeip"}],final:"dns-remote",strategy:"ipv4_only"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080},{type:"tun",tag:"tun-in",interface_name:"tun0",address:["172.19.0.1/30"],mtu:9e3,auto_route:!0,strict_route:!0}],[e("b3V0Ym91bmRz")]:[...s,{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"selector",tag:"\ud83d\ude80 \u8282\u70b9\u9009\u62e9",[e("b3V0Ym91bmRz")]:l},{type:"selector",tag:"\ud83c\udfaf \u5168\u7403\u76f4\u8fde",[e("b3V0Ym91bmRz")]:["direct"]},{type:"selector",tag:"\ud83d\udc1f \u6f0f\u7f51\u4e4b\u9c7c",[e("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9","\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]},{type:"selector",tag:"\ud83c\udf0d \u56fd\u5916\u5a92\u4f53",[e("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83c\udf10 \u8c37\u6b4c\u670d\u52a1",[e("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83e\udd16 OpenAI",[e("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83c\udf4e \u82f9\u679c\u670d\u52a1",[e("b3V0Ym91bmRz")]:["\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]},{type:"selector",tag:"\u24c2\ufe0f \u5fae\u8f6f\u670d\u52a1",[e("b3V0Ym91bmRz")]:["\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]}],route:{rules:[{action:"sniff"},{protocol:"dns",action:"hijack-dns"},{ip_is_private:!0,[e("b3V0Ym91bmQ=")]:"direct"},...c.map(([t,n])=>({rule_set:[t],[e("b3V0Ym91bmQ=")]:n})),{rule_set:e("Z2VvaXA=")+"-cn",[e("b3V0Ym91bmQ=")]:"direct"},{ip_is_private:!0,action:"reject"}],rule_set:[...c.map(([t])=>{const n=t.replace(e("Z2Vvc2l0ZQ==")+"-",e("Z2Vvc2l0ZQ==")+"/");return{type:"remote",tag:t,format:"binary",url:"https://cdn.jsdelivr.net/gh/"+e("TWV0YUN1YmVY")+"/"+e("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+n+".srs",download_detour:"direct"}}),{type:"remote",tag:e("Z2VvaXA=")+"-cn",format:"binary",url:"https://cdn.jsdelivr.net/gh/"+e("TWV0YUN1YmVY")+"/"+e("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+e("Z2VvaXA=")+"/cn.srs",download_detour:"direct"}],final:"\ud83d\udc1f \u6f0f\u7f51\u4e4b\u9c7c",auto_detect_interface:!0,default_domain_resolver:{server:"dns-direct"}},experimental:{clash_api:{external_controller:"127.0.0.1:9090"},cache_file:{enabled:!0}}};return JSON.stringify(d,null,2)}function _e(t,n){const r=t.host,a="/"+t.path,o=n.map((t,n)=>{const{user:o,srv:i,prt:s,name:l,isTrojan:c,tls:d}=Ie(t,n),p=d?", tls=true, "+e("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+r:", tls=false";return c?`${l} = ${e("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${r}${p}`:`${l} = ${e("dmxlc3M=")}, ${i}, ${s}, username=${o}, ws=true, ws-path=${a}, ws-headers=Host:${r}${p}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${o.map(t=>t.split(" = ")[0]).join(", ")}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}\n\n[Rule]\n${e("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function We(t,n){const r=t.host,a="/"+t.path,o=n.map((t,n)=>{const{user:o,srv:i,prt:s,name:l,isTrojan:c,tls:d}=Ie(t,n),p=d?", tls=true, "+e("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+r:", tls=false";return c?`${l} = ${e("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${r}${p}`:`${l} = ${e("dmxlc3M=")}, ${i}, ${s}, username=${o}, ws=true, ws-path=${a}, ws-headers=Host:${r}${p}`}),i=o.map(t=>t.split(" = ")[0]).join(", ");return`[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${i}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${i}\n\n[Rule]\n${e("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function je(t,n){const r=t.host,a="/"+t.path,o=t=>t.indexOf(":")>=0?"["+t+"]":t,i=n.map((t,n)=>{const{user:i,srv:s,prt:l,name:c}=Ie(t,n);if(t.startsWith(e("dHJvamFu")+"://"))return`${e("dHJvamFu")}=${o(s)}:${l}, password=${i}, over-tls=true, tls-host=${r}, ${e("b2Jmcw==")}=wss, ${e("b2Jmcw==")}-host=${r}, ${e("b2Jmcw==")}-uri=${a}, tls-verification=true, tag=${c}`;const d="tls"===(ke(t,"security")||"tls");return`${e("dmxlc3M=")}=${o(s)}:${l}, method=none, password=${i}, ${e("b2Jmcw==")}=${d?"wss":"ws"}, ${e("b2Jmcw==")}-host=${r}, ${e("b2Jmcw==")}-uri=${a}${d?", tls-verification=true, tls13=true":""}, tag=${c}`}),s=n.map((t,e)=>{const n=t.indexOf("#");if(n<0)return`${"\u8282\u70b9"}${e+1}`;try{return decodeURIComponent(t.slice(n+1))||`${"\u8282\u70b9"}${e+1}`}catch(t){return`${"\u8282\u70b9"}${e+1}`}}).join(", ");return`[general]\nnetwork_check_url=http://www.gstatic.com/generate_204\nserver_check_url=http://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n${i.join("\n")}\n[policy]\nstatic=${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}, ${s}, img-url=https://fastly.jsdelivr.net/gh/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}@master/IconSet/Color/Proxy.png\nstatic=${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"}, direct, img-url=https://fastly.jsdelivr.net/gh/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}@master/IconSet/Color/Direct.png\nstatic=${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}, direct, img-url=https://fastly.jsdelivr.net/gh/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}@master/IconSet/Color/Final.png\n[filter_local]\n${e("Z2VvaXA=")}, cn, ${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"}\nfinal, ${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}let Je=!1;const Qe=4;let Be=0;const Xe=[];function qe(){return Be<Qe?(Be++,Promise.resolve()):new Promise(t=>Xe.push(t))}function Ke(){const t=Xe.shift();t?t():Be--}async function tn(t,e){const n=[];let r=0;const a=Array.from({length:Math.min(Qe,t.length)},async()=>{for(;r<t.length;){const a=r++;await qe();try{n[a]=await e(t[a],a)}catch(t){n[a]=!1}finally{Ke()}}});return await Promise.all(a),n}let en=null,nn=null;async function rn(e,n,r){if(!Je)return!0;if(A(e))return!0;const a=r||2e3;try{const r=t({hostname:e,port:n});await Promise.race([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("proxy timeout")),a))]);try{r.close()}catch(t){}return!0}catch(t){return!1}}const an={t:0,list:null};let on="";const sn={list:null,at:0,key:""};async function ln(){const t=String(on||"").trim(),e=t||"__default__";if(sn.key===e&&sn.list&&Date.now()-sn.at<6e5)return sn.list;const n=[],r=(t?ve(t).filter(t=>/^https?:\/\//i.test(t)).slice(0,10).map(t=>({url:t,label:"\u515c\u5e95",count:100})):O).map(async t=>{try{const e=await be(t.url,{headers:{"User-Agent":"Mozilla/5.0"}},8e3);if(!e.ok)return;const r=await e.text(),a=[];for(const e of r.split(/[\r\n]+/)){const n=e.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);n&&a.length<t.count&&a.push({ip:n[1],port:n[2]?parseInt(n[2],10):443,name:t.label+"-"+String(a.length+1).padStart(2,"0")})}a.forEach(t=>n.push(t))}catch(t){}});return await Promise.all(r),sn.list=n,sn.at=Date.now(),sn.key=e,n}const cn=new Map;async function dn(n,o,i,s,l,c,d){n.path&&"/"!==n.path&&""!==n.path||(n.path=n.uuid);let p="";try{p=(new URL(o).searchParams.get("country")||"").trim()}catch(t){}const u=(p||String(n.countryLabel||"")).trim(),h=await Ye(d)||l;if(n.filter&&n.filter.ipType,Te(n)&&await async function(){const t=Date.now();if(!(C&&t-C<216e5))try{const e=await fetch("https://www.cloudflare.com/ips-v6/",{signal:AbortSignal.timeout(1e4)});if(!e.ok)return;const n=await e.text(),r=String(n).split("\n").map(t=>t.trim()).filter(t=>/^[0-9a-fA-F:.]+\/\d+$/.test(t)&&t.indexOf(":")>=0);r.length>=3&&($=r,C=t)}catch(t){}}(),""===(n.optimizer&&n.optimizer.subMode||"")&&!1&&(!n.preferredIPs||n.preferredIPs.length<80)){let r=!1;try{const t=await async function(t){if(!t||!t.K||"function"!=typeof t.K.get)return null;try{const e=await t.K.get("initPool");if(!e)return null;const n=JSON.parse(e);return n&&Array.isArray(n.ips)&&n.ips.length?Date.now()-(n.at||0)>216e5?null:n.ips:null}catch(t){return null}}(d);if(t&&t.length){const e=new Set((n.preferredIPs||[]).map(t=>t.ip)),a=t.filter(t=>t&&t.ip&&!e.has(t.ip));a.length&&(n.preferredIPs=[...n.preferredIPs||[],...a]),r=!0}}catch(t){}if(!r)try{const[r,a,o]=await Promise.all([ln().catch(()=>[]),ie(200).catch(()=>null),Promise.resolve(mt(z.join("\n")))]),i=[],s=[],l=new Set((n.preferredIPs||[]).map(t=>t.ip));for(const t of[...n.preferredIPs||[],...r||[],...a||[],...o]){if(!t||!t.ip||l.has(t.ip))continue;l.add(t.ip);const e={ip:t.ip,port:t.port||443,name:t.name||"",relay:!!t.relay};e.relay||!A(e.ip)?s.push(e):i.push(e)}const c=s.slice(0,24),p=i.slice(0,16),[u,h]=await Promise.all([tn(c,n=>async function(n,r){return!Je||async function(n,r){const a=2500||2500;try{const o=t({hostname:n,port:r});await Promise.race([o.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("tcp timeout")),a))]);const i=o.writable.getWriter(),s=o.readable.getReader();await i.write((new TextEncoder).encode("GET / HTTP/1.1\r\nHost: "+n+"\r\nUser-Agent: Mozilla/5.0\r\n"+e("Q29ubmVjdA==")+"ion: close\r\n\r\n"));const l=await Promise.race([s.read(),new Promise((t,e)=>setTimeout(()=>e(new Error("http timeout")),a))]);try{o.close()}catch(t){}const c=(new TextDecoder).decode(l.value||new Uint8Array(0));return/^HTTP\/1\.[01] (200|204)/.test(c)}catch(t){return!1}}(n,r)}(n.ip,n.port||443)),tn(p,t=>rn(t.ip,t.port||443,2500))]),f=c.filter((t,e)=>u[e]),m=[...p.filter((t,e)=>h[e]),...i.slice(p.length)].slice(0,210),g=[...f,...s.slice(c.length)].slice(0,40);n.preferredIPs=[...n.preferredIPs||[],...m,...g].slice(0,250),async function(t,e){if(t&&t.K&&"function"==typeof t.K.put)try{const n=(e||[]).filter(t=>t&&t.ip).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"",relay:!!t.relay})).slice(0,250);if(!n.length)return;if(!rt())return;await t.K.put("initPool",JSON.stringify({at:Date.now(),ips:n}))}catch(t){}}(d,n.preferredIPs)}catch(t){}}const f=!/\.workers\.dev$/i.test(new URL(o).hostname),m=Object.assign({},n,{host:n.host||new URL(o).hostname});f&&(m.tlsOnly=!0),m.enableVless||m.enableTrojan||m.enableXhttp||(m.enableVless=!0);const g=n.optimizer&&n.optimizer.subMode||"";if(n.homeWan)try{m.homeWanNodes=await it(d,m)}catch(t){}let b=[];const v=n.filter&&n.filter.ipType||[],y=1===v.length&&"IPv6"===v[0],w=Te(n),x=mt(z.join("\n")).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"\u4f18\u9009IP-"+String(z.indexOf(t)+1).padStart(2,"0")}));if("custom"===g){const t=!(!n.optimizer||!n.optimizer.subIncludeDefault),e=!t;if(b=await ye(n.preferredDomains||"",e?200:40,e?2e3:300,t,t,w),t){const t=await ye(Y,40,240,!1,!0,w),e=new Set(t.map(t=>t.ip));b=[...t,...b.filter(t=>!e.has(t.ip))],m.preferredIPs=[...m.preferredIPs||[],...x],m.optimizer||(m.optimizer={}),m.optimizer.fillCount=Math.max(parseInt(m.optimizer.fillCount)||0,800)}}else if(""===g){const t=n.src||{},e=!0===t.native,r=!1!==t.prefDomain,a=!1!==t.prefIp,o=!0===t.customPref;e&&!y&&(m.preferredDomains=(m.preferredDomains?m.preferredDomains+"\n":"")+m.host+"#\u539f\u751f\u5730\u5740"),o||(m.preferredIPs=[]);const i=(n.filter||{}).region;if(Array.isArray(i)?0===i.length||i.includes("all"):!i||"all"===i){if(b=[],r&&!y){const t=await async function(t){if(!Je)return String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean).join("\n");if(Date.now()-an.t<6e5&&null!==an.list)return an.list;const e=String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean),n=e.slice(0,12),r=e.slice(12),a=(await tn(n,async t=>{const e=await async function(t){try{const e=await be("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(t)+"&type=A",{headers:{accept:"application/dns-json"}},4e3);return e&&e.ok&&((await e.json()).Answer||[]).filter(t=>1===t.type&&/^\d+\.\d+\.\d+\.\d+$/.test(t.data)).map(t=>t.data).filter(A)[0]||null}catch(t){return null}}(t);return e&&A(e)?{d:t,ok:await rn(e,443)}:{d:t,ok:!1}})).map((t,e)=>t&&t.ok?n[e]:null).filter(Boolean).concat(r);return an.t=Date.now(),an.list=a.join("\n"),an.list}(Y);t&&(m.preferredDomains=(m.preferredDomains?m.preferredDomains+"\n":"")+t)}if(a&&!y){const t=await ie(150);t&&t.length&&(m.preferredIPs=[...m.preferredIPs||[],...t]);try{const t=await ye(N,100,600,!0,!0,!1);t&&t.length&&(m.preferredIPs=[...m.preferredIPs||[],...t])}catch(t){}}if(w&&r)try{const t=Y+(y?"\n"+D.join("\n"):""),e=await ye(t,40,y?800:240,!1,!0,!0);e&&e.length&&(m.preferredIPs=[...m.preferredIPs||[],...e])}catch(t){}}else r&&(b=await ye(Y,100,300,!1,!0,w));if(a)if(y){const t=x.map(t=>({ip:ht(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);m.preferredIPs=[...m.preferredIPs||[],...t]}else if(w){const t=x.map(t=>({ip:ht(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);m.preferredIPs=[...m.preferredIPs||[],...x,...t]}else m.preferredIPs=[...m.preferredIPs||[],...x];if(!(e||r||a||o))if(y){const t=x.map(t=>({ip:ht(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);m.preferredIPs=[...m.preferredIPs||[],...t]}else m.preferredIPs=[...m.preferredIPs||[],...x];if(y&&m.preferredIPs&&(m.preferredIPs=m.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),m.optimizer||(m.optimizer={}),m.optimizer.fillCount=Math.max(parseInt(m.optimizer.fillCount)||0,y?0:1e3),!1&&m.preferredIPs&&m.preferredIPs.length){const t=L.map((t,e)=>({ip:t,port:443,name:"\u4f18\u9009IP-S"+String(e+1).padStart(2,"0")})),e=new Set(t.map(t=>t.ip));m.preferredIPs=[...t,...m.preferredIPs.filter(t=>!e.has(t.ip))]}}if(b.length){let t=b;const e=(m.preferredIPs||[]).length;t=t.map((t,n)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(t.name||"")?Object.assign({},t,{name:"\u4f18\u9009IP-"+String(e+n+1).padStart(2,"0")}):t),m.preferredIPs=[...m.preferredIPs||[],...t]}y&&m.preferredIPs&&(m.preferredIPs=m.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),s=(s||"").toLowerCase();const k=(i||"").toLowerCase();[e("Y2xhc2g="),e("c2luZ2JveA=="),e("c2luZy1ib3g="),e("c3VyZ2U="),e("c3VyZmJvYXJk"),e("bG9vbg=="),e("cXVhbng="),e("cXVhbnR1bXVsdHg=")].includes(k)||r.test(s);let P=1e4;if(n.nodeLimit){const t=parseInt(n.nodeLimitCount)||0;t>0&&(P=Math.min(t,1e3))}n._quotaCap&&(P=Math.min(P,n._quotaCap)),n.cpuLimit&&(P=Math.max(10,Math.floor(.6*P)));const S="random"===g?Object.assign({},n.filter,{region:"all"}):n.filter,T=!(!n.homeWan||"custom"===g);let V;V=T?function(t,e,n){const r=Array.isArray(n)?n.slice(0,3):[];if(r.length>=3)return r;const a=new Set;for(const e of r)try{a.add(xe(e).host)}catch(t){}for(const e of L){if(r.length>=3)break;a.has(e)||(a.add(e),r.push(pe(t,e,443,"\u96a7\u9053\u524d\u7f6e-"+String(r.length+1).padStart(2,"0"))))}return r}(m,0,Ae(await we(m,P,null),S).slice(0,3)):Ae(await we(m,P,null),S),T||(V=Ve(V,n,y));const R="custom"===g&&!(n.optimizer&&n.optimizer.subIncludeDefault);if(T||R||y||function(t,n,r){if(t.length>=r)return;const a=new Set;for(const e of t)try{a.add(xe(e).host)}catch(t){}n.src&&!0===n.src.native&&(o=>{if(t.length>=r)return;if(a.has(o))return;a.add(o);const i=de("\u539f\u751f\u5730\u5740",!!n.enableVless,!!n.enableTrojan,!!n.enableXhttp);n.enableVless&&t.push(pe(n,o,443,i.v)),n.enableTrojan&&t.push(ue(n,o,443,i.t)),n.enableXhttp&&t.push(pe(n,o,443,i.x,{type:e("eGh0dHA=")}))})(n.host)}(V,m,P),T||!0||y||R&&V.length>0||function(t,n){const r=t.length+3*L.length,a=new Set;for(const e of t)try{a.add(xe(e).host)}catch(t){}let o=0;for(const i of L){if(t.length>=r)break;if(a.has(i))continue;a.add(i),o++;const s=de("\u5185\u7f6e\u00b7\u4fdd\u5e95-"+String(o).padStart(2,"0"),!!n.enableVless,!!n.enableTrojan,!!n.enableXhttp);if(n.enableVless&&t.push(pe(n,i,443,s.v)),t.length>=r)break;if(n.enableTrojan&&t.push(ue(n,i,443,s.t)),t.length>=r)break;n.enableXhttp&&t.push(pe(n,i,443,s.x,{type:e("eGh0dHA=")}))}}(V,m),!T&&n.nodeLimit&&g&&!R&&V.length<P){const t=P-V.length,e=new Set;for(const t of V)try{e.add(xe(t).host)}catch(t){}const n=(t,n,r)=>{V.length>=P||e.has(t)||(e.add(t),V.push(pe(m,t,n||443,r)))};let r=0;try{const e=await ln(),r=e,a=r.length>=t?r:e;for(const t of a)if(n(t.ip,t.port,t.name||"\u4f18\u9009IP-"+String(t.port)),V.length>=P)break}catch(t){}if(V.length<P){const t=P-V.length,e=$,a=ft(y?e:w?[...I,...e]:I,3*t),o=a,i=o.length>=t?o:a;for(const t of i){if(V.length>=P)break;r++,n(t,443,"\u4f18\u9009IP-"+String(r).padStart(3,"0"))}}}if(T||(V=Ve(V,n,y)),function(t,e,n){if(t.length<2)return t;const r=!1!==e.loadBalance&&"random"!==n,a="tail"===(e&&e.ipv6Mode),o=[],i=[],s=[];for(const e of t)Me(e)?o.push(e):a&&Ue(e)?s.push(e):i.push(e);if(!o.length&&!s.length)return r&&Ne(t),t;r&&(Ne(o),Ne(i)),t.length=0;for(let e=0;e<o.length;e++)t.push(o[e]);for(let e=0;e<i.length;e++)t.push(i[e]);for(let e=0;e<s.length;e++)t.push(s[e])}(V,n,g),V.length>P&&(V.length=P),V=function(t,e,n){const r=String(n||"").trim().toUpperCase(),a=String(e||"").toUpperCase(),o="OFF"===r?"":U[r]||M[a]||a||"",i=new Set;return t.map(t=>{let e="";try{e=Ie(t,0).name||""}catch(t){e=""}const n=e;let r=De(e);!r&&o&&(r=o,e=e?o+"\u00b7"+e:o+"\u00b7\u4f18\u9009"),e||(e="\u8282\u70b9");let a=e,s=2;for(;i.has(a);)a=e+"\u00b7"+s,s++;return i.add(a),a===n?t:function(t,e){const n=String(t),r=n.indexOf("#");return(r>=0?n.slice(0,r):n)+"#"+ce(e)}(t,a)})}(V,h,u),!V.length)for(let t=0;t<L.length;t++)try{V.push(pe(m,L[t],443,"\u515c\u5e95-"+String(t+1).padStart(2,"0")))}catch(t){}let H,E;const O=()=>{const t=V.slice();try{t.push(pe(m,m.host,443,"\u57df\u540d\u76f4\u8fde\u00b7\u5bf9\u7167"))}catch(t){}return{type:"text/plain",body:t.join("\n")}};if(e("a2FyaW5n")===k)return O();if(e("Y2xhc2g=")===k)H="text/yaml",E=Ze(m,V,l,new URL(o).origin+"/crules/"+hn(m),c,u,h);else if(e("c2luZ2JveA==")===k||e("c2luZy1ib3g=")===k||e("aGlkZGlmeQ==")===k)H="application/json",E=Ge(m,V);else if(e("c3VyZ2U=")===k)H="text/plain",E=_e(m,V);else if(e("c3VyZmJvYXJk")===k)H="text/plain",E=Fe(m,V);else if(e("bG9vbg==")===k)H="text/plain",E=We(m,V);else if(e("cXVhbng=")===k||e("cXVhbnR1bXVsdHg=")===k)H="text/plain",E=je(m,V);else if("plain"===k||"raw"===k)H="text/plain",E=V.join("\n");else if(e("djJyYXk=")===k||e("djJyYXlu")===k||e("c2hhZG93cm9ja2V0")===k||e("bmVrb3JheQ==")===k||e("c3Rhc2g=")===k)H="text/plain",E=V.join("\n");else if(s.includes(e("Y2xhc2g="))||s.includes(e("c3Rhc2g=")))H="text/yaml",E=Ze(m,V,l,new URL(o).origin+"/crules/"+hn(m),c,u,h);else{if(a.test(s))return O();s.includes(e("c2luZy1ib3g="))?(H="application/json",E=Ge(m,V)):s.includes(e("c3VyZ2U="))?(H="text/plain",E=_e(m,V)):s.includes(e("c3VyZmJvYXJk"))?(H="text/plain",E=Fe(m,V)):s.includes(e("bG9vbg=="))?(H="text/plain",E=We(m,V)):s.includes(e("cXVhbnR1bXVsdA=="))?(H="text/plain",E=je(m,V)):s.includes("mozilla")?(H="text/yaml",E=Ze(m,V,l,new URL(o).origin+"/crules/"+hn(m),c,u,h)):(H="text/plain",E=V.join("\n"))}return{type:H,body:E}}const pn=String.raw`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${"\u63a7\u5236\u53f0"}</title>
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

/* ===== ${"\u4fa7\u8fb9\u680f"} ===== */
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

/* ===== ${"\u4e3b\u533a"} ===== */
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

/* ===== ${"\u5361\u7247"} ===== */
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

/* ===== ${"\u8868\u5355"} ===== */
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

/* ${"\u5f00\u5173"} */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* ${"\u6309\u94ae"} */
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

/* ${"\u8868\u683c"} */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;over${e("Zmxvdzo=")}hidden;text-over${e("Zmxvdzo=")}ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* ${"\u6d88\u606f\u4e0e\u63d0\u793a"} */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;over${e("Zmxvdzo=")}auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* ${"\u60ac\u6d6e\u64cd\u4f5c\u680f"} */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* ${"\u5206\u533a"} */
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

/* ===== ${"\u54cd\u5e94\u5f0f"} ===== */
@media (min-width:1100px){
  /* ${"\u53f3\u4fa7\u907f\u8ba9\u53f3\u4e0b\u89d2\u6d6e\u52a8\u4fdd\u5b58\u680f\uff08\u5c1a\u672a\u4fdd\u5b58"}/${"\u91cd\u7f6e"}/${"\u4fdd\u5b58\u5168\u90e8\uff09\uff0c\u907f\u514d\u906e\u6321\u7b5b\u9009\u52fe\u9009\u9879"} */
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

<!-- ===== ${"\u4fa7\u8fb9\u680f"} ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>${l}</b><span>Cloudflare ${"\u96a7\u9053\u9762\u677f"}</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>${"\u90e8\u7f72\u7248\u672c"}</span>
    <span class="ver-chip" id="sideVer" title="${"\u70b9\u51fb\u68c0\u6d4b\u66f4\u65b0"}" onclick="checkUpdate()">v${"\u2014"}</span>
  </div>
</aside>

<!-- ===== ${"\u4e3b\u533a"} ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="${"\u83dc\u5355"}"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">${"\u4eea\u8868\u76d8"}</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">${"\u8fde\u63a5\u4e2d"}</span></span>
    <button class="icon-btn" id="themeBtn" title="${"\u5207\u6362\u65e5\u95f4"} / ${"\u591c\u95f4"}"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">${"\u5f53\u524d\u8fd0\u884c\u5728"} *.workers.dev ${"\u57df\u540d\u4e0a\uff1a\u8ba2\u9605\u4e0e\u8282\u70b9\u4e0b\u53d1\u529f\u80fd\u6b63\u5e38\uff1b\u82e5\u9047\u8fde\u63a5\u4e0d\u7a33\u6216\u8bbf\u95ee\u53d7\u9650\uff0c\u5efa\u8bae\u5728"} Cloudflare ${"\u9762\u677f\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\u540e\u4f7f\u7528\u3002"}</div>

  <div class="content" id="content">
    <!-- ===== ${"\u89c6\u56fe\uff1a\u4eea\u8868\u76d8"} ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>${"\u4eea\u8868\u76d8"}</h2><p>${"\u5feb\u901f\u5f00\u59cb\u3001\u8ba2\u9605\u7ba1\u7406\u3001\u914d\u989d\u901f\u89c8\u4e0e\u8fd0\u884c\u72b6\u6001"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>${"\u5feb\u901f\u5f00\u59cb"}</h3>
        <ol class="steps">
          <li><b>${"\u90e8\u7f72\u5373\u7528"}</b>${"\uff1a\u7ed1\u5b9a\u57df\u540d\u540e\u5ba2\u6237\u7aef\u8ba2\u9605\u5373\u53ef\u83b7\u5f97\u6d77\u91cf\u8282\u70b9\uff08\u5185\u7f6e"} 300 ${"\u6761\u4f18\u9009"} IP ${"\u4e0e\u5730\u533a\u57df\u540d\u6e90\uff09\uff0c\u9ed8\u8ba4\u5df2\u914d\u597d\u5927\u9646\u76f4\u8fde\u5206\u6d41\uff08\u5927\u9646\u5e94\u7528\u3001\u5fae\u8f6f\u3001\u82f9\u679c\u76f4\u8fde\uff0c\u56fd\u5916\u670d\u52a1\u8d70\u51fa\u53e3\uff09\u3002"}</li>
          <li><b>${"\u8c03\u4f18\u8282\u70b9"}</b>${"\uff1a\u5728\u300c\u4f18\u9009\u914d\u7f6e\u300d\u5728\u7ebf\u6d4b\u901f\uff0c\u628a\u6700\u4f18"} IP ${"\u52a0\u5165\u4f18\u9009\u5217\u8868\uff08\u81ea\u5b9a\u4e49\u8ba2\u9605\u6a21\u5f0f\u5185\u7f6e\u5e38\u7528\u8ba2\u9605\u6e90\uff0c\u53ef\u81ea\u884c\u589e\u5220\uff0c\u53ef\u8ffd\u52a0\u5185\u7f6e\u4f18\u9009\u6c60\u4e0e\u9ed8\u8ba4\u8282\u70b9\uff09\u3002"}</li>
          <li><b>${"\u4fdd\u969c\u989d\u5ea6"}</b>${"\uff1a\u5728\u300c\u914d\u989d\u5b89\u5168\u300d\u5f00\u542f\u7528\u91cf\u76d1\u63a7\u4e0e\u81ea\u52a8\u8c03\u8282\uff0c\u9632\u6b62\u514d\u8d39\u989d\u5ea6\u8d85\u652f\uff08\u9700\u5728\u9762\u677f\u8bbe\u7f6e\u4e2d\u914d\u7f6e"} Cloudflare ${"\u8d26\u6237"} ID ${"\u4e0e"} API ${"\u4ee4\u724c\uff09\u3002"}</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8ba2\u9605\u5730\u5740"}</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>${"\u8ba2\u9605\u683c\u5f0f"}</label>
            <select id="subFmt">
              <option value="auto">${"\u81ea\u52a8\u8bc6\u522b"}</option>
              <option value="${e("Y2xhc2g=")}">${e("Q2xhc2g=")} / ${e("TWlob21v")}</option>
              <option value="${e("c2luZ2JveA==")}">${e("U2luZy1ib3g=")}</option>
              <option value="${e("a2FyaW5n")}">${e("S2FyaW5n")}</option>
              <option value="${e("c3VyZ2U=")}">${e("U3VyZ2U=")}</option>
              <option value="${e("c3VyZmJvYXJk")}">${e("U3VyZmJvYXJk")}</option>
              <option value="${e("bG9vbg==")}">${e("TG9vbg==")}</option>
              <option value="${e("cXVhbng=")}">${e("UXVhbnR1bXVsdA==")} X</option>
              <option value="${e("djJyYXk=")}">${e("djJyYXlO")} / ${e("U2hhZG93cm9ja2V0")}</option>
              <option value="${e("c3Rhc2g=")}">${e("U3Rhc2g=")}</option>
              <option value="plain">${"\u660e\u6587"} ${e("dmxlc3M=")}</option>
            </select>
          </div>
        </div>
        <div class="field"><label>${"\u8ba2\u9605\u94fe\u63a5"}</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">${"\u590d\u5236"}</button>
            <button class="btn sm" onclick="toggleQR()">${"\u4e8c\u7ef4\u7801"}</button>
            <button class="btn sm" onclick="downloadSub()">${"\u4e0b\u8f7d"}</button>
            <button class="btn sm primary" onclick="previewSub()">${"\u9884\u89c8"}</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">${"\u8ba2\u9605\u7c7b\u578b"}</span><span class="v" id="prevType">${"\u2014"}</span></div>
          <div class="kv"><span class="k">${"\u8282\u70b9\u6570\u91cf"}</span><span class="v" id="prevCount">${"\u2014"}</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u5730\u533a\u4e0e\u7ebf\u8def\u7b5b\u9009"}</h3>
        <div class="filter-region">
          <span class="filter-region-label">${"\u8282\u70b9\u5730\u533a"}</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>${"\u5168\u90e8\u5730\u533a"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>${"\u9999\u6e2f"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>${"\u53f0\u6e7e"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>${"\u7f8e\u56fd"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>${"\u65b0\u52a0\u5761"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>${"\u65e5\u672c"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>${"\u97e9\u56fd"}</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>${"\u5fb7\u56fd"}</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP ${"\u7c7b\u578b"}</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6"><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">IPv6 ${"\u4e0b\u53d1"}</div>
            <div class="pills nowrap">
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-off" value="off" checked><span>${"\u4e0d\u4e0b\u53d1"}</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-tail" value="tail"><span>${"\u4ec5\u5907\u80ce"}</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-full" value="full"><span>${"\u7b49\u6743\u6df7\u5408"}</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">${"\u8fd0\u8425\u5546\u504f\u597d"}</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>${"\u79fb\u52a8"}</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>${"\u8054\u901a"}</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>${"\u7535\u4fe1"}</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">${"\u5730\u5740\u6765\u6e90"}</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>${"\u539f\u751f\u5730\u5740"}</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>${"\u4f18\u9009\u57df\u540d"}</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>${"\u4f18\u9009"} IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>${"\u81ea\u5b9a\u4e49\u4f18\u9009"}</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>${"\u968f\u673a\u4f18\u9009"}</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">${"\u300c\u8282\u70b9\u5730\u533a\u300d\u591a\u9009\u8fc7\u6ee4\u5730\u533a\uff1b\u300c\u8fd0\u8425\u5546\u504f\u597d\u300d\u6309\u8282\u70b9\u540d\u79f0\u4e2d\u7684\u8fd0\u8425\u5546\u6807\u8bb0\u8fc7\u6ee4\uff08\u79fb\u52a8"}/${"\u8054\u901a"}/${"\u7535\u4fe1\uff09\uff0c\u65e0\u6807\u8bb0\u65f6\u4e0d\u751f\u6548\uff1b\u300c\u5730\u5740\u6765\u6e90\u300d\u63a7\u5236\u4e0b\u53d1\u6765\u6e90\uff08\u539f\u751f\u5730\u5740"}/${"\u4f18\u9009\u57df\u540d"}/${"\u4f18\u9009"} IP/${"\u81ea\u5b9a\u4e49\u4f18\u9009"}/${"\u968f\u673a\u4f18\u9009\uff09\u3002\u4efb\u4e00\u7ef4\u5ea6\u65e0\u8282\u70b9\u65f6\u81ea\u52a8\u653e\u5bbd\uff0c\u4fdd\u8bc1\u8ba2\u9605\u975e\u7a7a\u3002"}<br>
          <b>IPv6 ${"\u4e0b\u53d1"}</b>${"\uff08\u6e05\u5355\u8d28\u91cf\uff09\uff1a"}IPv6 ${"\u5230"} CF ${"\u7684\u53ef\u8fbe\u6027\u53d6\u51b3\u4e8e\u5ba2\u6237\u7aef\u6240\u5728\u7f51\u7edc\uff0c\u4e0d\u5c11\u5bb6\u5ead\u5bbd\u5e26"} v6 ${"\u5230"} CF ${"\u7684\u8def\u5f84\u6bd4"} v4 ${"\u5dee\u751a\u81f3\u4e0d\u901a\uff0c"}IPv6 ${"\u8282\u70b9\u5728\u5ba2\u6237\u7aef\u9010\u8282\u70b9\u6d4b\u5ef6\u8fdf\u65f6\u4f1a\u88ab\u5927\u91cf\u8d85\u65f6\u9879\u62d6\u957f\u3002"}<b>${"\u300c\u4e0d\u4e0b\u53d1\u300d\u4e3a\u9ed8\u8ba4"}</b>${"\u2014\u2014\u5373\u4f7f\u52fe\u9009\u4e86\u300c"}IPv6${"\u300d\u4e5f\u4e0d\u8fdb\u6e05\u5355\uff1b\u300c\u4ec5\u5907\u80ce\u300d"}= ${"\u5360\u6bd4\u5c01\u9876"} 10% ${"\u4e14\u6574\u4f53\u6392\u5230\u5217\u8868\u5c3e\u90e8\uff0c"}IPv4 ${"\u6253\u5934\uff1b\u300c\u7b49\u6743\u6df7\u5408\u300d"}= ${"\u65e7\u884c\u4e3a\u3002\u4ec5\u52fe\u9009"} IPv6${"\uff08\u5355\u9009\uff09\u65f6\u7b56\u7565\u81ea\u52a8\u8ba9\u4f4d\uff0c\u4fdd\u8bc1\u8ba2\u9605\u4e0d\u4e3a\u7a7a\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u914d\u989d\u901f\u89c8"} <span class="sub" id="dbSub">${"\u672a\u914d\u7f6e\u76d1\u63a7"}</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">${"\u5f53\u65e5\u8bf7\u6c42\u91cf"}</span><span class="v" id="dbReq">${"\u2014"}</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);over${e("Zmxvdzo=")}hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">${"\u5df2\u7528\u989d\u5ea6"}</span><span class="v" id="dbPct">${"\u2014"}</span></div>
        </div>
        <p class="hint" style="margin-top:10px">${"\u514d\u8d39\u8ba1\u5212"} 100,000 ${"\u6b21"}/${"\u65e5\u3002\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u914d\u7f6e"} Cloudflare ${"\u76d1\u63a7\u540e\u5373\u53ef\u5728\u6b64\u67e5\u770b\u5f53\u65e5\u7528\u91cf\uff1b\u7b56\u7565\u89c1\u300c\u914d\u989d\u5b89\u5168\u300d\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8fd0\u884c\u72b6\u6001"}</h3>
        <div class="kv"><span class="k">${"\u534f\u8bae"}</span><span class="v" id="stProto">${"\u2014"}</span></div>
        <div class="kv"><span class="k">KV ${"\u6301\u4e45\u5316"}</span><span class="v" id="stKv">${"\u2014"}</span></div>
        <div class="kv"><span class="k">${"\u9762\u677f\u5165\u53e3"}</span><span class="v" id="stEntry">${"\u2014"}</span></div>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u8282\u70b9\u914d\u7f6e\uff08\u534f\u8bae"} / TLS / ECH / ${"\u843d\u5730\u51fa\u7ad9\uff09"} ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>${"\u8282\u70b9\u914d\u7f6e"}</h2><p>${"\u534f\u8bae\u3001"}TLS/ECH${"\u3001\u8d1f\u8f7d\u5747\u8861\u4e0e\u843d\u5730\u51fa\u7ad9\uff08\u4fdd\u5b58\u540e\u7acb\u5373\u751f\u6548\uff09"}</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>${"\u534f\u8bae\u5f00\u5173"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${e("dmxlc3M=")}" checked><span class="sl"></span></label><span>${e("VkxFU1M=")} ${"\u534f\u8bae\uff08\u9ed8\u8ba4\u5f00\u542f\uff09"}</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${e("dHJvamFu")}"><span class="sl"></span></label><span>${e("VHJvamFu")} ${"\u534f\u8bae\uff08\u652f\u6301"}${e("TWlob21v")}${"\u5185\u6838\uff09"}</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${e("eGh0dHA=")}"><span class="sl"></span></label><span>${e("WEhUVFA=")} ${"\u534f\u8bae\uff08\u652f\u6301"}${e("TWlob21v")}${"\u5185\u6838\uff0c\u987b\u7ed1\u5b9a\u57df\u540d\u5f00\u542f"}${e("Z1JQQw==")}${"\uff09"}</span></div>
          <div class="field" style="margin-top:12px"><label>${e("VHJvamFu")} ${"\u5bc6\u7801\uff08\u7559\u7a7a\u4f7f\u7528"} UUID${"\uff09"}</label><input type="text" id="tp-pass" placeholder="${e("VHJvamFu")} ${"\u5bc6\u7801"}" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>${"\u5bb6\u5bbd\u6a21\u5f0f"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN ${"\uff08\u4ec5"}${e("TWlob21v")}${"\u5185\u6838\uff09"}</span></div>
          <p class="hint">- ${"\u6bcf\u65e5\u62c9\u53d6\uff0c\u53d6\u6700\u5feb"} 100 ${"\u53f0\uff0c\u4ec5\u7559"} TCP ${"\u5bb6\u5bbd\u8282\u70b9\uff08\u300c\u5bb6\u5bbd"} + ${"\u5730\u533a\u300d\u3001\u540c\u533a\u7f16\u53f7\uff1b"}UDP ${"\u5254\u9664\uff09\u3002"}<br>- ${"\u7f13\u5b58"} 30 ${"\u5206\u949f\uff1b"}&lt;30 ${"\u53f0\u5f3a\u5236\u5237\u65b0\uff0c\u5931\u8d25\u7528\u65e7\u7f13\u5b58\u3002"}<br>- ${"\u5bb6\u5bbd\u987b\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7\uff1b\u96a7\u9053\u8282\u70b9"} Worker ${"\u81ea\u52a8\u751f\u6210\u3001\u81ea\u52a8\u6d4b\u6d3b\u3001\u4e0d\u53d7\u7b5b\u9009\u3002"}<br>- ${"\u5f00\u542f\u540e\u8ba2\u9605\u4ec5\u542b\u5bb6\u5bbd"} + ${"\u96a7\u9053\u8282\u70b9\uff1b\u9ed8\u8ba4\u8282\u70b9\u4e0d\u4e0b\u53d1\uff08\u81ea\u5b9a\u4e49\u8ba2\u9605\u9664\u5916\uff09\u3002"}</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS ${"\u4e0e\u4f20\u8f93"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>${"\u4ec5"} TLS ${"\u7aef\u53e3\uff08\u8df3\u8fc7"} 80/8080 ${"\u7b49\u660e\u6587\u7aef\u53e3\uff09"}</span></div>
          <div class="field" style="margin-top:12px"><label>${e("QUxQTg==")} ${"\u534f\u5546\uff08"}h2 / http/1.1${"\uff0c\u9017\u53f7\u5206\u9694\uff09"}</label><input type="text" id="${e("YWxwbg==")}" placeholder="${"\u7559\u7a7a\u81ea\u52a8\uff0c\u5982"} h2,http/1.1" autocomplete="off"></div>
          <p class="hint">${"\u660e\u6587\u7aef\u53e3\u8282\u70b9\uff08"}80/8080/8880/2052/2082/2086/2095${"\uff09\u5f00\u542f\u300c\u4ec5"} TLS${"\u300d\u540e\u4ece\u8ba2\u9605\u5254\u9664\u3002"}</p>
        </div>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>${"\u8d1f\u8f7d\u5747\u8861"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>${"\u8d1f\u8f7d\u5747\u8861\uff08\u6253\u4e71\u4e0b\u53d1\u987a\u5e8f\uff09"}</span></div>
          <p class="hint" style="margin-top:12px">${"\u6bcf\u6b21\u8ba2\u9605\u5bf9\u8282\u70b9\u987a\u5e8f\u968f\u673a\u8f6e\u6362\uff08"}Fisher-Yates${"\uff09\uff0c\u8fde\u63a5\u5206\u6563\u907f\u514d\u96c6\u4e2d\u8e29\u540c\u4e00\u6279\u5934\u90e8"} IP${"\uff1b\u5173\u95ed\u5219\u56fa\u5b9a\u987a\u5e8f\u3002"}<br>
            <b>${"\u4fdd\u5e95\u524d\u7f6e"}</b>${"\uff1a\u300c\u4f18\u9009"}IP-Sxx${"\u300d\uff08\u5b9e\u6d4b\u9ad8\u5b58\u6d3b"} IP${"\uff09"}/${"\u300c\u5185\u7f6e\u00b7\u4fdd\u5e95"}-XX${"\u300d"}/${"\u300c\u96a7\u9053\u524d\u7f6e"}-XX${"\u300d\u59cb\u7ec8\u4fdd\u7559\u5728\u6e05\u5355\u5934\u90e8\uff08\u7ec4\u5185\u4ecd\u968f\u673a\u8f6e\u6362\uff09\uff0c"}
            ${"\u5176\u4f59\u8282\u70b9\u6574\u4f53\u4e71\u5e8f\u2014\u2014\u65e2\u4fdd\u8bc1\u5ba2\u6237\u7aef\u300c\u53d6\u7b2c\u4e00\u4e2a\u300d\u5c31\u662f\u7a33\u5b9a\u8282\u70b9\uff0c\u53c8\u4e0d\u727a\u7272\u5206\u6563\u8fde\u63a5\u7684\u6536\u76ca\uff1b\u540c\u65f6\u907f\u514d\u8fd9\u6279\u6700\u7a33\u7684\u8282\u70b9\u5728\u8282\u70b9\u6570\u5c01\u9876\u65f6\u88ab\u5c3e\u90e8\u622a\u65ad\u780d\u6389\u3002"}</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>${"\u56fd\u5bb6\u6807\u6ce8"}</h3>
          <div class="field" style="margin-top:10px"><label>${"\u65e0\u540d\u8282\u70b9\u9ed8\u8ba4\u56fd\u5bb6"}</label><select id="q-clabel">
            <option value="">${"\u6309\u8ba2\u9605\u65f6\u673a\u623f\u5b9e\u6d4b\uff08\u9ed8\u8ba4\uff09"}</option>
            <option value="OFF">${"\u4e0d\u6807\u6ce8"}</option>
            <option value="HK">${"\u56fa\u5b9a\uff1a\u9999\u6e2f"}</option>
            <option value="TW">${"\u56fa\u5b9a\uff1a\u53f0\u6e7e"}</option>
            <option value="MO">${"\u56fa\u5b9a\uff1a\u6fb3\u95e8"}</option>
            <option value="JP">${"\u56fa\u5b9a\uff1a\u65e5\u672c"}</option>
            <option value="SG">${"\u56fa\u5b9a\uff1a\u65b0\u52a0\u5761"}</option>
            <option value="KR">${"\u56fa\u5b9a\uff1a\u97e9\u56fd"}</option>
            <option value="US">${"\u56fa\u5b9a\uff1a\u7f8e\u56fd"}</option>
            <option value="DE">${"\u56fa\u5b9a\uff1a\u5fb7\u56fd"}</option>
            <option value="GB">${"\u56fa\u5b9a\uff1a\u82f1\u56fd"}</option>
            <option value="FR">${"\u56fa\u5b9a\uff1a\u6cd5\u56fd"}</option>
            <option value="CA">${"\u56fa\u5b9a\uff1a\u52a0\u62ff\u5927"}</option>
            <option value="AU">${"\u56fa\u5b9a\uff1a\u6fb3\u5927\u5229\u4e9a"}</option>
            <option value="SE">${"\u56fa\u5b9a\uff1a\u745e\u5178"}</option>
            <option value="NL">${"\u56fa\u5b9a\uff1a\u8377\u5170"}</option>
            <option value="FI">${"\u56fa\u5b9a\uff1a\u82ac\u5170"}</option>
            <option value="IN">${"\u56fa\u5b9a\uff1a\u5370\u5ea6"}</option>
            <option value="TR">${"\u56fa\u5b9a\uff1a\u571f\u8033\u5176"}</option>
            <option value="BR">${"\u56fa\u5b9a\uff1a\u5df4\u897f"}</option>
          </select></div>
          <p class="hint" style="margin-top:12px">${"\u4ec5\u5f71\u54cd\u65e0\u6cd5\u4ece\u540d\u5b57\u8bc6\u522b\u5730\u533a\u7684\u8282\u70b9\uff08\u4f18\u9009"}IP/${"\u4fdd\u7559"}N/${"\u81ea\u5b9a\u540d\u7b49\uff09\u3002\u300c\u673a\u623f\u5b9e\u6d4b\u300d"}= ${"\u771f\u5b9e\u8def\u7531\u843d\u70b9\uff0c\u968f\u8fd0\u8425\u5546\u7ebf\u8def\u53d8\u5316\uff08\u540c\u4e00\u7f51\u7edc\u4e0b\u5168\u90e8\u540c\u540d\u662f\u6b63\u5e38\u73b0\u8c61\uff09\uff1b\u300c\u56fa\u5b9a\u300d\u53ea\u6539\u8282\u70b9\u540d\uff0c\u4e0d\u6539\u53d8\u5b9e\u9645\u843d\u5730\u3002\u8ba2\u9605\u94fe\u63a5\u53ef\u52a0"} ?country=HK ${"\u6216"} ?country=off ${"\u4e34\u65f6\u8986\u76d6\uff08\u4f18\u5148\u4e8e\u672c\u8bbe\u7f6e\uff09\u3002"}</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH ${"\u52a0\u5bc6\uff08\u53ef\u9009\uff09"}</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>${"\u542f\u7528"} ECH ${"\u52a0\u5bc6\uff08\u9700\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\uff09"}</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH ${"\u57df\u540d\uff08\u7559\u7a7a\u7528\u9ed8\u8ba4"} cloudflare-ech.com${"\uff09"}</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>${"\u81ea\u5b9a\u4e49"} ECH DNS${"\uff08"}DoH ${"\u5730\u5740\uff0c\u7559\u7a7a\u7528\u5ba2\u6237\u7aef\u9ed8\u8ba4\uff09"}</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">${"\u5f00\u542f\u540e\u8ba2\u9605\u8282\u70b9\u9644\u5e26"} ech ${"\u53c2\u6570\u4e0e"} ${e("YWxwbg==")} ${"\u534f\u5546\uff0c\u5ba2\u6237\u7aef\u9700\u652f\u6301"} ECH ${"\u624d\u751f\u6548\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u843d\u5730\u4e0e\u51fa\u7ad9"}</h3>
        <div class="field"><label>${"\u53cd\u4ee3"} / ${"\u843d\u5730\uff08\u53ef\u586b\u591a\u4e2a\uff0c\u82f1\u6587\u9017\u53f7\u5206\u9694\uff1b\u652f\u6301\u57df\u540d\u4e0e"} IP${"\uff0c\u53ef\u5e26\u4e24\u4f4d\u56fd\u5bb6\u4ee3\u7801\uff1b\u7559\u7a7a\u5219\u76f4\u8fde\u5931\u8d25\u540e\u8d70\u5185\u7f6e\u5730\u533a\u51fa\u53e3\uff09"}</label><input type="text" id="s-${e("cHJveHlJUA==")}" placeholder="${"\u5982\uff1a"}Proxy-HK.a.com,HK.43.132.231.159:443,8.219.155.125:443#JP" autocomplete="off"></div>
        <p class="hint">${"\u591a\u6761\u65f6\u6309\u8282\u70b9\u843d\u5730\u56fd\u5bb6\u81ea\u52a8\u5339\u914d\u3002\u5e26\u56fd\u5bb6\u4ee3\u7801\u7684\u6761\u76ee\u53ea\u7528\u4e8e\u8be5\u56fd\u8282\u70b9\uff0c\u4e24\u79cd\u5199\u6cd5\u7b49\u4ef7\uff1a\u57df\u540d\u628a\u56fd\u5bb6\u4ee3\u7801\u653e\u5728\u540d\u5b57\u91cc\uff08\u5982"} Proxy-HK.${"\u2026"} ${"\u91cc\u7684"} HK${"\uff09\uff0c"}IP ${"\u5199\u6210\u524d\u7f00\u5f0f"} HK.1.2.3.4:443 ${"\u6216\u540e\u7f00\u5f0f"} 1.2.3.4:443#HK${"\uff08"}IPv6 ${"\u7528\u65b9\u62ec\u53f7\uff0c\u5982"} HK.[2001:db8::1]:443${"\uff09\u3002\u4e0d\u5e26\u56fd\u5bb6\u4ee3\u7801\u7684\u6761\u76ee\uff08\u542b\u7eaf"} IP${"\uff09\u4f5c\u4e3a\u901a\u7528\u5019\u9009\uff0c\u6309\u586b\u5199\u987a\u5e8f\u4f9d\u6b21\u5c1d\u8bd5\u3002\u67d0\u56fd\u65e0\u5bf9\u5e94\u6761\u76ee\u65f6\u9000\u56de\u5217\u8868\u9996\u6761\uff1b\u53ea\u586b\u4e00\u6761\u65f6\u884c\u4e3a\u4e0e\u65e7\u7248\u4e00\u81f4\u3002"}</p>
        <div class="field"><label>${"\u51fa\u7ad9\uff08\u53ef\u9009\uff09"}</label><input type="text" id="s-${e("b3V0Ym91bmQ=")}" placeholder="${e("c29ja3M1")}://user:pass@1.2.3.4:1080 ${"\u6216"} ${e("c3M6Ly9jaGFjaGEyMA==")}-ietf-poly1305:${"\u5bc6\u7801"}@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">${"\u652f\u6301"} ${e("c29ja3M1")}://${"\uff08\u53ef\u5e26"} user:pass@${"\uff09\u3001"}http(s)://${"\u3001"}${e("c3M6Ly8=")} ${"\u6216"} host:port${"\uff08\u9ed8\u8ba4\u6309"} ${e("c29ja3M1")}${"\uff0c\u7aef\u53e3"} 1080${"\uff09\u3002"}SS ${"\u52a0\u5bc6\u652f\u6301"} ${e("YWVzLTEyOC1nY20=")} / ${e("YWVzLTI1Ni1nY20=")} / ${e("Y2hhY2hhMjA=")}-ietf-poly1305${"\u3002"}</p>
        <div class="field" style="margin-bottom:0"><label>${"\u51fa\u7ad9\u65b9\u5f0f"}</label>
          <select id="s-outmode">
            <option value="">${"\u9ed8\u8ba4\uff08\u4f18\u5148\u51fa\u53e3\uff0c\u5931\u8d25\u76f4\u8fde\uff09"}</option>
            <option value="no">${"\u76f4\u8fde\u4f18\u5148\uff08"}no${"\uff09"}</option>
            <option value="only">${"\u4ec5\u8d70\u51fa\u53e3\uff08"}only${"\uff09"}</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u4fdd\u5b58\u4e0e\u751f\u6548"}</h3>
        <div class="note-box" style="margin:0">${"\u914d\u7f6e\u4fee\u6539\u540e\u70b9\u53f3\u4e0b\u89d2\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u5199\u5165"} KV ${"\u5e76\u751f\u6548\uff0c\u8ba2\u9605\u4e0e\u8282\u70b9\u6784\u6210\u7acb\u5373\u66f4\u65b0\uff1b\u300c\u91cd\u7f6e\u300d\u6e05\u7a7a"} KV ${"\u5168\u90e8\u6570\u636e\u5e76\u8fd8\u539f\u521d\u59cb\u90e8\u7f72\u72b6\u6001\u3002"}</div>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u4f18\u9009\u914d\u7f6e"} ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>${"\u4f18\u9009\u914d\u7f6e"}</h2><p>${"\u62c9\u53d6\u5019\u9009"} IP ${"\u2192"} ${"\u672c\u5730\u6d4b\u901f"} ${"\u2192"} ${"\u6700\u4f18\u8282\u70b9\u52a0\u5165\u8ba2\u9605"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>${"\u5728\u7ebf\u4f18\u9009"}</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>${"\u6570\u636e\u6e90"}</label>
            <select id="o-source">
              <option value="wetest_v4">${"\u5fae\u6d4b\u7f51"} IPv4</option>
              <option value="wetest_v6">${"\u5fae\u6d4b\u7f51"} IPv6</option>
              <option value="${e("YmVzdGNm")}">${"\u4f18\u9009"} IP ${"\u5217\u8868\uff08"}${e("YmVzdGNm")}${"\uff09"}</option>
              <option value="hostmonit">HostMonit ${"\u4f18\u9009"}</option>
              <option value="cidr">${"\u5185\u7f6e"} Cloudflare ${"\u5730\u5740\u6bb5"}</option>
              <option value="custom">${"\u81ea\u5b9a\u4e49"} URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>${"\u9ed8\u8ba4\u7aef\u53e3"} <span style="font-weight:400;color:var(--faint)">${"\uff08\u6e90\u672a\u5e26\u7aef\u53e3\u65f6\u7528\uff09"}</span></label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">${"\u81ea\u5b9a\u4e49\u2026"}</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="${"\u81ea\u5b9a\u4e49\u7aef\u53e3\u53f7"}" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none;margin-top:12px"><label>${"\u81ea\u5b9a\u4e49\u6570\u636e\u6e90"} URL <span style="font-weight:400;color:var(--faint)">${"\uff08\u591a\u4e2a\u7528\u6362\u884c\u6216\u5206\u53f7\u9694\u5f00\uff0c\u4e0a\u9650"} 50 ${"\u4e2a\uff0c\u5e76\u53d1\u62c9\u53d6\uff1b"}URL ${"\u67e5\u8be2\u4e32\u4e2d\u7684\u9017\u53f7\u539f\u6837\u4fdd\u7559\uff09"}</span></label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt${"\uff08\u591a\u4e2a\u7528\u6362\u884c"}/${"\u5206\u53f7\u9694\u5f00\uff09"}" autocomplete="off"></div>
        <div class="field" style="margin-top:8px"><label>${"\u515c\u5e95\u4f18\u9009\u6c60"} URL <span style="font-weight:400;color:var(--faint)">${"\uff08\u53ef\u9009\uff0c\u6362\u884c"}/${"\u5206\u53f7\u5206\u9694\uff0c\u4e0a\u9650"} 10 ${"\u4e2a\uff1b"}URL ${"\u67e5\u8be2\u4e32\u4e2d\u7684\u9017\u53f7\u539f\u6837\u4fdd\u7559\uff1b\u7559\u7a7a\u7528\u5185\u7f6e"} ${e("YmVzdGNm")} ${"\u5730\u533a\u6c60\uff09"}</span></label><input type="text" id="o-fbpool" placeholder="https://a.example/ips.txt;https://b.example/ips.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>${"\u5e76\u53d1\u7ebf\u7a0b\uff08"}1-50${"\uff09"}</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>${"\u5019\u9009\u6570\u91cf"}</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>${"\u968f\u673a\u8865\u8db3\uff08"}0 ${"\u5173\u95ed\uff09"}</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">${"\u5019\u9009\u4e0d\u8db3\u65f6\u7528"} Cloudflare ${"\u5730\u5740\u6bb5\u968f\u673a\u8865\u8db3"}</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">${"\u5f00\u59cb\u4f18\u9009"}</button>
          <button class="btn" onclick="addAllBest()">${"\u5168\u90e8\u52a0\u5165\u6700\u4f18"}</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u6d4b\u901f\u7ed3\u679c"} <span class="sub">${"\u672c\u5730\uff08\u6d4f\u89c8\u5668\uff09\u2192"} ${"\u76ee\u6807"} IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : ${"\u7aef\u53e3"}</th><th>${"\u5ef6\u8fdf"}</th><th>${"\u72b6\u6001"}</th><th>${"\u64cd\u4f5c"}</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">${"\u5c1a\u672a\u6d4b\u901f"} ${"\u2014"} ${"\u70b9\u51fb\u300c\u5f00\u59cb\u4f18\u9009\u300d\u62c9\u53d6\u5019\u9009"}</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u4f18\u9009\u8282\u70b9"}</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>${"\u8ba2\u9605\u6a21\u5f0f"}</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">${"\u5173\u95ed\uff08\u4f7f\u7528\u9762\u677f\u9ed8\u8ba4\u8282\u70b9\u6c60\uff09"}</option>
              <option value="custom">${"\u81ea\u5b9a\u4e49\u8ba2\u9605\uff08\u652f\u6301\u6c47\u805a\uff09"}</option>
              <option value="random">${"\u968f\u673a\u4f18\u9009\u6a21\u5f0f\uff08\u5b98\u65b9\u63a5\u53e3\uff09"}</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>${"\u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\u8ffd\u52a0\u9ed8\u8ba4\u8282\u70b9"}</label>
            <select id="o-subinc">
              <option value="0">${"\u5173\u95ed\uff08\u4ec5\u81ea\u5b9a\u4e49\u8282\u70b9\uff09"}</option>
              <option value="1">${"\u5f00\u542f\uff08\u8ffd\u52a0\u5185\u7f6e\u4f18\u9009\u6c60\u4e0e\u9ed8\u8ba4\u5730\u533a\u6e90\uff09"}</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>${"\u4f18\u9009\u8282\u70b9\uff08\u57df\u540d"} / ${"\u4f18\u9009"} API / IP${"\uff0c\u6bcf\u884c\u4e00\u4e2a\uff1b"}IP ${"\u683c\u5f0f"} IP:${"\u7aef\u53e3"}#${"\u540d\u79f0\uff09"}</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#${"\u9999\u6e2f"}&#10;https://${e("YmVzdGNm")}.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">${"\u5f00\u542f\u300c\u81ea\u5b9a\u4e49\u8ba2\u9605\u300d\u540e\u751f\u6548\uff1b\u57df\u540d\u4e0e\u4f18\u9009"} API ${"\u4fdd\u5b58\u540e\u81ea\u52a8\u89e3\u6790\u4e3a"} IP ${"\u4e0b\u53d1\uff1b\u6d4b\u901f\u300c\u52a0\u5165\u4f18\u9009\u300d\u5199\u5165\u6b64\u5217\u8868\uff0c\u4fdd\u5b58\u540e\u751f\u6548\u3002"}</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">${"\u62c9\u53d6\u5fae\u6d4b\u7f51\u4f18\u9009\u57df\u540d"}</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>${"\u968f\u673a\u4f18\u9009\u6570\u91cf\uff08"}1-99${"\uff09"}</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">${"\u4ece"} Cloudflare ${"\u5730\u5740\u6bb5\u968f\u673a\u751f\u6210\u6307\u5b9a\u6570\u91cf\u8282\u70b9\u76f4\u63a5\u4e0b\u53d1\uff0c\u4e0d\u7ecf\u57df\u540d\u89e3\u6790\u3002"}</div>
        </div>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u914d\u989d\u5b89\u5168"} ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>${"\u914d\u989d\u5b89\u5168"}</h2><p>${"\u76d1\u63a7"} Cloudflare ${"\u8d26\u6237\u5f53\u65e5\u7528\u91cf\uff0c\u6309\u514d\u8d39\u989d\u5ea6\u81ea\u52a8\u8c03\u8282\u4e0b\u53d1\u89c4\u6a21\uff08\u9700\u5728\u9762\u677f\u8bbe\u7f6e\u4e2d\u914d\u7f6e"} Cloudflare ${"\u8d26\u6237"} ID ${"\u53ca"} API ${"\u4ee4\u724c\uff09"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare ${"\u7528\u91cf\u76d1\u63a7"} <span class="sub" id="qQuotaSub">${"\u672a\u914d\u7f6e"}</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">${"\u5f53\u65e5\u8bf7\u6c42\u91cf"}</span><span class="v" id="qReq">${"\u2014"}</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);over${e("Zmxvdzo=")}hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">${"\u5df2\u7528\u989d\u5ea6"}</span><span class="v" id="qPct">${"\u2014"}</span></div>
          <div class="kv"><span class="k">${"\u5269\u4f59\u989d\u5ea6"}</span><span class="v" id="qRemain">${"\u2014"}</span></div>
          <div class="kv"><span class="k">CPU ${"\u65f6\u95f4"}</span><span class="v" id="qCpu">${"\u2014"}</span></div>
          <div class="kv"><span class="k">${"\u5b50\u8bf7\u6c42\u6570"}</span><span class="v" id="qSub">${"\u2014"}</span></div>
          <div class="kv"><span class="k">${"\u6570\u636e\u66f4\u65b0"}</span><span class="v" id="qAt">${"\u2014"}</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">${"\u5c1a\u672a\u914d\u7f6e"} Cloudflare ${"\u76d1\u63a7\uff1a\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u586b\u5199"} Cloudflare ${"\u8d26\u6237"} ID ${"\u4e0e"} API ${"\u4ee4\u724c\uff08\u6216\u90e8\u7f72\u65f6\u914d\u7f6e\u73af\u5883\u53d8\u91cf"} CF_ACCOUNT_ID / CF_API_TOKEN${"\uff09\uff0c\u5373\u53ef\u5b9e\u65f6\u67e5\u770b\u5f53\u65e5\u8bf7\u6c42\u91cf\u5e76\u542f\u7528\u81ea\u52a8\u8c03\u8282\u3002"}</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">${"\u7528\u91cf\u67e5\u8be2\u5931\u8d25"}</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">${"\u81ea\u52a8\u8c03\u8282\uff1a\u5f53\u65e5\u7528\u91cf"} ${"\u2265"} 60% ${"\u65f6\u6309\u6bd4\u4f8b\u6536\u7f29\u8282\u70b9\u4e0a\u9650\uff08\u4fdd\u62a4\u8d26\u6237\u514d\u8d39\u989d\u5ea6\uff09"}</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">${"\u5237\u65b0\u7528\u91cf"}</button>
        </div>
        <p class="hint">${"\u81ea\u52a8\u8c03\u8282\uff1a\u7528\u91cf\u8fbe\u514d\u8d39\u989d\u5ea6"} 60% ${"\u540e\u8282\u70b9\u4e0a\u9650\u6309\u6bd4\u4f8b\u6536\u7f29\uff08"}60%${"\u2192"}1000 ${"\u6761\u3001"}70%${"\u2192"}750${"\u3001"}80%${"\u2192"}500${"\u3001"}90%${"\u2192"}250${"\u3001"}100%${"\u2192"}100 ${"\u6761\u4fdd\u5e95\uff09\uff0c\u7528\u91cf\u8d8a\u9ad8\u4e0b\u53d1\u8d8a\u5c11\u3002"}</p>
        <div class="row" style="margin-top:10px">
          <label class="switch"><input type="checkbox" id="q-strict-on"><span class="sl"></span></label>
          <span style="font-size:13px">${"\u4e25\u683c\u6a21\u5f0f\uff1a\u5f53\u65e5\u7528\u91cf\u9ad8\u4e8e"} 95% ${"\u65f6\u505c\u6b62\u4e0b\u53d1\u4efb\u4f55\u8282\u70b9\uff08\u4fdd\u62a4\u8d26\u6237\u514d\u8d39\u989d\u5ea6\uff09"}</span>
        </div>
        <p class="hint">${"\u4e25\u683c\u6a21\u5f0f\uff1a\u5f00\u542f\u540e\uff0c\u5f53\u65e5\u7528\u91cf\u8d85\u8fc7"} 95% ${"\u65f6\u8ba2\u9605\u5c06\u4e0d\u518d\u4e0b\u53d1\u4efb\u4f55\u8282\u70b9\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09\uff1b\u5173\u95ed\u5219\u6cbf\u7528\u4e0a\u65b9\u81ea\u52a8\u8c03\u8282\u7684\u6bd4\u4f8b\u6536\u7f29\u7b56\u7565\u3002\u9700\u5148\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u914d\u7f6e"} Cloudflare ${"\u8d26\u6237"} ID ${"\u4e0e"} API ${"\u4ee4\u724c\u3002"}</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>${"\u4e0b\u53d1\u63a7\u5236"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>${"\u7cbe\u786e\u8282\u70b9\u6570\u91cf\u63a7\u5236"}</span></div>
          <div class="field" style="margin-top:10px"><label>${"\u7cbe\u786e\u8282\u70b9\u4e0a\u9650\uff08"}1-1000${"\uff09"}</label><input type="number" id="q-nl-count" min="1" max="1000" value="300"></div>
          <p class="hint">${"\u9ed8\u8ba4\u5f00\u542f\uff1a\u6240\u6709\u683c\u5f0f\u8ba2\u9605\u7cbe\u786e\u4e0b\u53d1\u5230\u8bbe\u5b9a\u6570\u91cf\uff08\u9ed8\u8ba4"} 300${"\uff0c\u8303\u56f4"} 1-1000${"\uff09\uff0c\u66ff\u4ee3\u539f"} 300/800 ${"\u5206\u6863\uff1b\u52fe\u9009\u4e09\u79cd\u534f\u8bae\u65f6\u603b\u6570\u4ecd\u4e3a\u8bbe\u5b9a\u503c\u3002"}</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>CPU ${"\u8d85\u989d\u9650\u5236"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-cpu-on"><span class="sl"></span></label><span>${"\u542f\u7528"} CPU ${"\u8d85\u989d\u9650\u5236\uff08\u9ed8\u8ba4\u5173\u95ed\uff09"}</span></div>
          <p class="hint" style="margin-top:12px">${"\u9ed8\u8ba4\u5173\u95ed\uff1a\u6309\u8bbe\u5b9a\u6570\u91cf\u5b8c\u6574\u4e0b\u53d1\u3002\u5f00\u542f\u540e\u5bf9\u8ba2\u9605\u751f\u6210\u964d\u8f7d"} ${"\u2014\u2014"} ${"\u8282\u70b9\u6309\u4e0a\u9650\u7684"} 60% ${"\u4e0b\u53d1\uff08\u524a\u51cf"} 40%${"\uff09\uff0c\u5355\u6b21\u8ba2\u9605\u8bf7\u6c42\u7684"} CPU ${"\u6d88\u8017\u5b9e\u6d4b\u4e0b\u964d\u7ea6"} 25%${"\uff0c\u7528\u4e8e\u89c4\u907f\u514d\u8d39\u8ba1\u5212"} 10ms/${"\u8bf7\u6c42"} ${"\u7684\u8d85\u989d\u98ce\u9669\uff1b\u4ee3\u4ef7\u662f\u4e0b\u53d1\u7684\u8282\u70b9\u6570\u91cf\u76f8\u5e94\u51cf\u5c11\u3002"}</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u5f53\u524d\u4e0b\u53d1\u7b56\u7565"}</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">${"\u8282\u70b9\u6570\u91cf\u63a7\u5236"}</span><span class="v" id="qNl">${"\u2014"}</span></div><div class="kv"><span class="k">${"\u7cbe\u786e\u8282\u70b9\u4e0a\u9650"}</span><span class="v" id="qNlCount">${"\u2014"}</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">CPU ${"\u8d85\u989d\u9650\u5236"}</span><span class="v" id="qCpuLimit">${"\u2014"}</span></div><div class="kv"><span class="k">${"\u8d1f\u8f7d\u5747\u8861"}</span><span class="v" id="qLb">${"\u2014"}</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">IPv6 ${"\u4e0b\u53d1"}</span><span class="v" id="qIp6">${"\u2014"}</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">${"\u6bcf\u6b21\u8ba2\u9605\u8bf7\u6c42\u6d88\u8017"} Worker CPU${"\uff08\u514d\u8d39\u8ba1\u5212"} 10ms/${"\u8bf7\u6c42\uff09\u3002\u9762\u677f\u6309\u300c\u514d\u8d39\u989d\u5ea6"} ${"\u2192"} ${"\u8282\u70b9\u6570\u300d\u9010\u5c42\u8bbe\u9632\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u4fdd\u62a4\u673a\u5236\u8bf4\u660e"}</h3>
        <div class="note-box">${"\u4e09\u9053\u9632\u7ebf\uff08\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\uff09\uff1a\u2460"} ${"\u7528\u91cf\u76d1\u63a7\uff1b\u2461"} ${"\u81ea\u52a8\u8c03\u8282\uff08\u7528\u91cf"} ${"\u2265"}60% ${"\u65f6\u6309\u6bd4\u4f8b\u6536\u7f29\u8282\u70b9\u4e0a\u9650\uff0c\u53ea\u6536\u7d27\u4e0d\u653e\u5927\uff09\uff1b\u2462"} ${"\u6570\u91cf\u4e0a\u9650\u7cbe\u786e\u9650\u5236\u3002\u53ef\u9009\u300c"}CPU ${"\u8d85\u989d\u9650\u5236\u300d\u5728\u4ee5\u4e0a\u57fa\u7840\u4e0a\u518d\u964d\u8f7d\u3002\u5404\u5c42\u4e0a\u9650\u51b2\u7a81\u53d6\u8f83\u5c0f\u503c\uff0c"}CPU ${"\u6d88\u8017\u59cb\u7ec8\u5728\u514d\u8d39\u989d\u5ea6\u5185\u3002"}</div>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u9762\u677f\u8bbe\u7f6e"} ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>${"\u9762\u677f\u8bbe\u7f6e"}</h2><p>${"\u90e8\u7f72\u57fa\u7840\u4fe1\u606f\uff1a"}UUID${"\u3001\u8ba2\u9605\u8def\u5f84\u4e0e\u7ba1\u7406\u5bc6\u7801"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>${"\u57fa\u7840\u914d\u7f6e"}</h3>
        <div class="field"><label>UUID${"\uff08\u8ba2\u9605\u8282\u70b9\u8eab\u4efd\uff09"}</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">${"\u751f\u6210"}</button>
          </div>
        </div>
        <div class="field"><label>${"\u81ea\u5b9a\u4e49\u8ba2\u9605\u8def\u5f84\uff08\u53ea\u586b"} UUID/${"\u522b\u540d\u6bb5\uff0c\u5982"} AAZ${"\uff1b\u7559\u7a7a\u7528"} UUID${"\uff09"}</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>${"\u7ba1\u7406\u5bc6\u7801\uff08\u7559\u7a7a\u5219\u9762\u677f\u514d\u767b\u5f55\uff09"}</label><input type="password" id="a-admin" placeholder="${"\u8bbe\u7f6e\u540e\u8bbf\u95ee\u9762\u677f\u9700\u767b\u5f55"}" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">${"\u90e8\u7f72\u540e\u9996\u6b21\u8bbf\u95ee\u5f3a\u5236\u8981\u6c42\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\uff1b\u8bbe\u7f6e\u540e\u6b64\u5904\u7559\u7a7a\u5e76\u4fdd\u5b58\u53ef\u6062\u590d\u514d\u767b\u5f55\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare ${"\u76d1\u63a7\u9009\u9879"}</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>${"\u8d26\u6237"} ID${"\uff08"}Account Tag${"\uff09"}</label><input type="text" id="a-cfid" placeholder="32 ${"\u4f4d\u5341\u516d\u8fdb\u5236"} ID${"\uff0c\u4f4d\u4e8e"} dash.cloudflare.com ${"\u53f3\u4fa7\u680f\u300c\u8d26\u6237"} ID${"\u300d"}" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API ${"\u4ee4\u724c\uff08"}Bearer${"\uff09"}</label><input type="password" id="a-cftoken" placeholder="40 ${"\u4f4d\u4ee4\u724c\uff08"}My Profile ${"\u2192"} API Tokens ${"\u521b\u5efa\uff09"}" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">${"\u8d26\u6237"} ID ${"\u662f"} 32 ${"\u4f4d\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\uff08\u975e\u90ae\u7bb1\uff09\uff0c\u4f4d\u4e8e"} Cloudflare ${"\u63a7\u5236\u53f0\u300c\u7ba1\u7406\u8d26\u6237"} ${"\u2192"} ${"\u5e10\u6237"} API ${"\u4ee4\u724c\u300d\uff1b\u67e5\u8be2"} 401 ${"\u65f6\u8bf7\u68c0\u67e5\u8fd9\u4e24\u9879\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Telegram ${"\u7528\u91cf\u901a\u77e5"}</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>Bot Token</label><input type="text" id="q-tgtoken" placeholder="123456789:AAxxxx..." autocomplete="off"></div>
          <div class="field" style="margin:0"><label>Chat ID</label><input type="text" id="q-tgchat" placeholder="123456789" autocomplete="off"></div>
        </div>
        <p class="hint">${"\u586b\u597d\u540e\u63a8\u9001\u89c4\u5219\uff1a"}80%${"\u3001"}85%${"\u3001"}90% ${"\u5404\u63d0\u9192\u4e00\u6b21\uff1b"}90% ${"\u540e\u6bcf\u6da8"} 1% ${"\u63d0\u9192\u4e00\u6b21\uff08"}91-99${"\uff09\uff1b\u8fbe"} 99% ${"\u81ea\u52a8\u505c\u7528\u8ba2\u9605\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09\u3002\u9700\u540c\u65f6\u914d\u7f6e\u4e0a\u65b9"} Cloudflare ${"\u8d26\u6237\u76d1\u63a7\uff1b\u505c\u7528\u4e0e\u6062\u590d\u4e0d\u4f9d\u8d56"} TG${"\uff0c\u901a\u77e5\u4f9d\u8d56"} TG${"\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u5907\u4efd\u4e0e\u6062\u590d"}</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">${"\u4ee5"} JSON ${"\u5bfc\u51fa"}/${"\u5bfc\u5165\u5168\u90e8\u9762\u677f\u8bbe\u7f6e\uff08\u534f\u8bae\u3001\u4f18\u9009\u3001\u7b5b\u9009\u3001\u914d\u989d\u76d1\u63a7\uff09\uff0c\u53ef\u4fdd\u5b58\u6216\u8fc1\u79fb\uff1b\u5bfc\u5165\u540e\u70b9\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u751f\u6548\u3002"}</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">${"\u5bfc\u51fa\u914d\u7f6e"}</button>
          <button class="btn" onclick="$('importFile').click()">${"\u5bfc\u5165\u914d\u7f6e"}</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8fd0\u884c\u4fe1\u606f"}</h3>
        <div class="kv"><span class="k">${"\u9762\u677f\u7248\u672c"}</span><span class="v" id="aVer">${"\u2014"}</span></div>
        <div class="kv"><span class="k">KV ${"\u6301\u4e45\u5316"}</span><span class="v" id="aKv">${"\u2014"}</span></div>        <div class="kv"><span class="k">${"\u6784\u5efa\u65e5\u671f"}</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">${"\u5371\u9669\u64cd\u4f5c"}</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">${"\u91cd\u7f6e\u5c06\u6e05\u7a7a"} KV ${"\u4e2d\u5168\u90e8\u6570\u636e\uff08\u9762\u677f\u914d\u7f6e"} + ${"\u5df2\u4e0b\u53d1\u8282\u70b9\u8bb0\u5f55\uff09\uff0c\u9762\u677f\u8fd8\u539f\u4e3a\u521d\u59cb\u90e8\u7f72\u72b6\u6001\uff0c\u4e0d\u53ef\u6062\u590d\u3002"}</p>
        <button class="btn danger" onclick="resetAll()">${"\u91cd\u7f6e\u5168\u90e8\u6570\u636e"}</button>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u5173\u4e8e"} ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>${"\u5173\u4e8e\u9879\u76ee"}</h2><p>${l} ${"\u2014"} Cloudflare ${"\u8fb9\u7f18\u7ba1\u7406\u9762\u677f\uff08\u72ec\u7acb\u754c\u9762"} + ${"\u72ec\u7acb\u5b9e\u73b0\uff09"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>${"\u76f8\u5173\u94fe\u63a5"}</h3>
        <p style="font-size:13px;color:var(--dim)">${e("WW91VHViZQ==")} @${"\u6570\u5b57\u6d3e\uff1a"}<a href="https://www.${e("eW91dHViZQ==")}.com/@${e("UEFJX0NO")}" target="_blank" rel="noopener">${e("eW91dHViZQ==")}.com/@${e("UEFJX0NO")}</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram ${"\u4ea4\u6d41\u7fa4\uff1a"}<a href="https://${e("dC5tZS8=")}${e("U1pfUEFJ")}" target="_blank" rel="noopener">${e("dC5tZS8=")}${e("U1pfUEFJ")}</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u7279\u522b\u9e23\u8c22"}</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">${"\u611f\u8c22\u4ee5\u4e0b\u5f00\u6e90\u9879\u76ee\u7684\u542f\u53d1\u4e0e\u652f\u6301\uff08\u754c\u9762\u4e0e\u4ee3\u7801\u5747\u4e3a\u72ec\u7acb\u5b9e\u73b0\uff09"}</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>${"\u5f00\u6e90\u9879\u76ee"}</th><th>${"\u5730\u5740"}</th></tr></thead>
          <tbody>
            <tr><td>${e("SW9uUmg=")}/${e("Q2xvdWRmbGFyZS1CZXN0SVA=")}</td><td><a href="https://github.com/${e("SW9uUmg=")}/${e("Q2xvdWRmbGFyZS1CZXN0SVA=")}" target="_blank" rel="noopener">github.com/${e("SW9uUmg=")}/${e("Q2xvdWRmbGFyZS1CZXN0SVA=")}</a></td></tr>
            <tr><td>${e("enZvcw==")}/${e("Q0YtV29ya2Vycy1Nb25pdG9y")}</td><td><a href="https://github.com/${e("enZvcw==")}/${e("Q0YtV29ya2Vycy1Nb25pdG9y")}" target="_blank" rel="noopener">github.com/${e("enZvcw==")}/${e("Q0YtV29ya2Vycy1Nb25pdG9y")}</a></td></tr>
            <tr><td>${e("TWV0YUN1YmVY")}/${e("bWV0YS1ydWxlcy1kYXQ=")}</td><td><a href="https://github.com/${e("TWV0YUN1YmVY")}/${e("bWV0YS1ydWxlcy1kYXQ=")}" target="_blank" rel="noopener">github.com/${e("TWV0YUN1YmVY")}/${e("bWV0YS1ydWxlcy1kYXQ=")}</a></td></tr>
            <tr><td>${e("NjY2T1M=")}/rules</td><td><a href="https://github.com/${e("NjY2T1M=")}/rules" target="_blank" rel="noopener">github.com/${e("NjY2T1M=")}/rules</a></td></tr>
            <tr><td>${e("RHVzdGluV2lu")}/${e("cnVsZXNldF9nZW9kYXRh")}</td><td><a href="https://github.com/${e("RHVzdGluV2lu")}/${e("cnVsZXNldF9nZW9kYXRh")}" target="_blank" rel="noopener">github.com/${e("RHVzdGluV2lu")}/${e("cnVsZXNldF9nZW9kYXRh")}</a></td></tr>
            <tr><td>${e("YmxhY2ttYXRyaXg3")}/${e("aW9zX3J1bGVfc2NyaXB0")}</td><td><a href="https://github.com/${e("YmxhY2ttYXRyaXg3")}/${e("aW9zX3J1bGVfc2NyaXB0")}" target="_blank" rel="noopener">github.com/${e("YmxhY2ttYXRyaXg3")}/${e("aW9zX3J1bGVfc2NyaXB0")}</a></td></tr>
            <tr><td>${e("VEctVHdpbGlnaHQ=")}/${e("QVdBdmVudWU=")}-Ads-Rule</td><td><a href="https://github.com/${e("VEctVHdpbGlnaHQ=")}/${e("QVdBdmVudWU=")}-Ads-Rule" target="_blank" rel="noopener">github.com/${e("VEctVHdpbGlnaHQ=")}/${e("QVdBdmVudWU=")}-Ads-Rule</a></td></tr>
            <tr><td>${e("S29vbHNvbg==")}/${e("UXVyZQ==")}</td><td><a href="https://github.com/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}" target="_blank" rel="noopener">github.com/${e("S29vbHNvbg==")}/${e("UXVyZQ==")}</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8c03\u7528\u63a5\u53e3"}</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>${"\u7528\u9014"}</th><th>${"\u63a5\u53e3"}</th></tr></thead>
          <tbody>
            <tr><td>HostMonit ${"\u4f18\u9009"}</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>${"\u4f18\u9009"} IP ${"\u5217\u8868"}</td><td class="mono">cf.${e("MDkwMjI3")}.xyz/ip.164746.xyz</td></tr>
            <tr><td>${e("YmVzdGNm")} ${"\u5730\u533a\u4f18\u9009\u6c60"}</td><td class="mono">${e("YmVzdGNm")}.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH ${"\u89e3\u6790"}</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare ${"\u7528\u91cf\u76d1\u63a7\uff08"}GraphQL${"\uff09"}</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>${"\u7248\u672c\u66f4\u65b0\u68c0\u6d4b"}</td><td class="mono">raw.githubusercontent.com/${e("UEFJQ05J")}/${e("Q0ZOZXh0")}/...</td></tr>
            <tr><td>${"\u8fdc\u7a0b\u89c4\u5219\u96c6\uff08"}${e("c2luZy1ib3g=")} / ${e("Q2xhc2g=")}${"\uff09"}</td><td class="mono">raw.githubusercontent.com/${e("TWV0YUN1YmVY")}/${e("bWV0YS1ydWxlcy1kYXQ=")}/...</td></tr>
            <tr><td>${"\u9762\u677f\u4e8c\u7ef4\u7801\u5e93"}</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">${"\u5c1a\u672a\u4fdd\u5b58"}</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">${"\u91cd\u7f6e"}</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>${"\u4fdd\u5b58\u5168\u90e8"}</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== ${"\u57fa\u7840"} ===== */
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
    toast(ok2 ? '${"\u5df2\u590d\u5236"}' : '${"\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"}', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(${e("ZmFsbGJhY2s=")}Copy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(${e("ZmFsbGJhY2s=")}Copy(t)); });
      setTimeout(function(){ fin(${e("ZmFsbGJhY2s=")}Copy(t)); }, 600); // ${"\u526a\u8d34\u677f"} API ${"\u60ac\u7a7a\uff08\u65e0\u6743\u9650\u7b49\uff09\u65f6\u56de\u9000"}
    } else { fin(true); }
  } else {
    fin(${e("ZmFsbGJhY2s=")}Copy(t));
  }
}
function ${e("ZmFsbGJhY2s=")}Copy(t){
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
  $('savedAt').textContent = '${"\u6709\u672a\u4fdd\u5b58\u7684\u4fee\u6539"}';
}

/* ===== ${"\u5bfc\u822a"} ===== */
var NAV = [
  { id:'dashboard', name:'${"\u4eea\u8868\u76d8"}', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'${"\u8282\u70b9\u914d\u7f6e"}', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'${"\u4f18\u9009\u914d\u7f6e"}', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'${"\u914d\u989d\u5b89\u5168"}', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'${"\u9762\u677f\u8bbe\u7f6e"}', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'${"\u5173\u4e8e\u9879\u76ee"}', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'${"\u4eea\u8868\u76d8"}', nodes:'${"\u8282\u70b9\u914d\u7f6e"}', optimizer:'${"\u4f18\u9009\u914d\u7f6e"}', quota:'${"\u914d\u989d\u5b89\u5168"}', account:'${"\u9762\u677f\u8bbe\u7f6e"}', about:'${"\u5173\u4e8e\u9879\u76ee"}' };
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

/* ===== ${"\u4e3b\u9898"} ===== */
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
  toast(t === 'auto' ? '${"\u5df2\u5207\u6362\u4e3a\u8ddf\u968f\u7cfb\u7edf"}' : (t === 'light' ? '${"\u5df2\u5207\u6362\u4e3a\u65e5\u95f4\u6a21\u5f0f"}' : '${"\u5df2\u5207\u6362\u4e3a\u591c\u95f4\u6a21\u5f0f"}'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== ${"\u66f4\u65b0\u68c0\u6d4b"} ===== */
var topVerText = 'v${"\u2014"}';
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
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // ${"\u526a\u8d34\u677f"} API ${"\u60ac\u7a7a\uff08\u65e0\u6743\u9650\u7b49\uff09\u65f6\u56de\u9000"}
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
  sv.textContent = '${"\u68c0\u6d4b\u4e2d\u2026"}';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('${"\u68c0\u6d4b\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"}', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '${"\u5c0f\u8bf4\u6df7\u6dc6"}') ? '${"\u5c0f\u8bf4\u6df7\u6dc6\u7248"}' : (d.kind === '${"\u6df7\u6dc6"}') ? '${"\u6df7\u6dc6\u7248"}' : '${"\u660e\u6587\u7248"}';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '${"\u5c0f\u8bf4\u6df7\u6dc6"}') ? '${"\u5c0f\u8bf4\u6df7\u6dc6"}' : (d.kind === '${"\u6df7\u6dc6"}') ? '${"\u6df7\u6dc6"}' : '${"\u660e\u6587"}';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '${"\u68c0\u6d4b\u5230\u66f4\u65b0\uff0c\u5df2\u590d\u5236\u6700\u65b0"}' + kind + '${"\u4ee3\u7801\u5230\u526a\u8d34\u677f"}' : '${"\u68c0\u6d4b\u5230\u66f4\u65b0\uff08"}v' + d.latest + '${"\uff09\uff0c\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u524d\u5f80\u4ed3\u5e93\u83b7\u53d6"}', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('${"\u68c0\u6d4b\u5230\u66f4\u65b0\uff08"}v' + d.latest + '${"\uff09\uff0c\u4f46\u672a\u80fd\u83b7\u53d6\u4ee3\u7801"}', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('${"\u5df2\u662f\u6700\u65b0\u7248\u672c\uff08"}v' + d.current + ' ' + kindName + '${"\uff09"}', 'ok');
    } else {
      toast('${"\u68c0\u6d4b\u66f4\u65b0\u5931\u8d25\uff1a"}' + (d.error || '${"\u4ed3\u5e93\u6682\u4e0d\u53ef\u8fbe"}'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('${"\u68c0\u6d4b\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5"}', 'err');
  });
}

/* ===== ${"\u914d\u7f6e\u52a0\u8f7d\u4e0e\u56de\u586b"} ===== */
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
      toast('${"\u914d\u7f6e\u5df2\u52a0\u8f7d"}', 'ok');
    } else if (r && r.status === 403) {
      location.reload();
    } else {
      setConn(false);
      toast('${"\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('${"\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '${"\u8fd0\u884c\u4e2d"}' : '${"\u65e0\u6cd5\u8fde\u63a5"}';
}
// ${"\u514d\u8d39\u57df\u540d\uff08"}*.workers.dev / *.pages.dev${"\uff09\u5927\u9646\u76f4\u8fde\u88ab\u963b\u65ad\uff1a\u547d\u4e2d\u5373\u63d0\u793a\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d"}
function isFreeSubDomain(h){
  return /\.(workers\.dev|pages\.dev)$/i.test(String(h || ''));
}
function updateFreeDomainWarn(){
  var effHost = (CFG && CFG.host) ? String(CFG.host) : location.hostname;
  var wd = isFreeSubDomain(location.hostname) || isFreeSubDomain(effHost);
  // Pages ${"\u90e8\u7f72\uff08"}*.pages.dev${"\uff09\u4e0d\u5c55\u793a\u90a3\u6761"} *.workers.dev ${"\u6a2a\u5e45\uff1a\u57df\u540d\u4e0e\u6587\u6848\u4e0d\u7b26"}
  var isPages = /\.pages\.dev$/i.test(String(location.hostname || ''));
  $('wdwarn').style.display = wd && !isPages ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '${"\u8282\u70b9"} SNI / ${"\u8ba2\u9605\u57df\u540d\u4f7f\u7528"} *.pages.dev ${"\u6216"} *.workers.dev ${"\u514d\u8d39\u57df\u540d\uff1a\u5927\u9646\u76f4\u8fde\u4f1a\u88ab\u963b\u65ad\u2014\u2014\u8ba2\u9605\u5bfc\u5165\u4e0e\u66f4\u65b0\u9700\u6302\u68af\u5b50\uff0c\u8282\u70b9\u6d4b\u5ef6\u8fdf\u4e0e\u8fde\u63a5\u53ef\u80fd\u5168\u90e8\u5931\u8d25\u3002\u89e3\u51b3\uff1a\u5728"} Cloudflare ${"\u63a7\u5236\u53f0\u4e3a\u672c\u9879\u76ee\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u518d\u7528\u81ea\u5b9a\u4e49\u57df\u540d\u6253\u5f00\u9762\u677f\u91cd\u65b0\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u3002"}'
    : '';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || d.uuid || '');
  updateFreeDomainWarn();
  var kv = d.kv;
  var kvTxt = kv ? '${"\u5df2\u7ed1\u5b9a\uff08\u914d\u7f6e\u6301\u4e45\u5316\uff09"}' : '${"\u672a\u7ed1\u5b9a\uff08\u914d\u7f6e\u4ec5\u5185\u5b58\uff09"}';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '${"\u2014"}';
  var kindName = (d.kind === '${"\u5c0f\u8bf4\u6df7\u6dc6\u7248"}') ? '${"\u5c0f\u8bf4\u6df7\u6dc6\u7248"}' : (d.kind === '${"\u6df7\u6dc6\u7248"}') ? '${"\u6df7\u6dc6\u7248"}' : '${"\u660e\u6587\u7248"}';   // ${"\u90e8\u7f72\u5f62\u6001\uff08\u660e\u6587\u7248"} / ${"\u6df7\u6dc6\u7248"} / ${"\u5c0f\u8bf4\u6df7\u6dc6\u7248\uff09\uff0c\u7531\u540e\u7aef\u81ea\u68c0"}
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '${"\u2014"}';
  var a = [];
  if (CFG.enable${e("Vmxlc3M=")} !== false) a.push('${e("VkxFU1M=")}');
  if (CFG.enable${e("VHJvamFu")}) a.push('${e("VHJvamFu")}');
  if (CFG.enable${e("WGh0dHA=")}) a.push('${e("WEhUVFA=")}');
  return a.length ? a.join(' / ') : '${"\u672a\u542f\u7528"}';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '${"\u5df2\u5f00\u542f"}' : '${"\u5173\u95ed\uff08\u9ed8\u8ba4\u5206\u6863\u4e0a\u9650\uff09"}';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 300) + ' ${"\u8282\u70b9"}' : '${"\u2014"}';
  var pc = !!(CFG && CFG.cpuLimit);
  $('qCpuLimit').textContent = pc ? '${"\u5df2\u5f00\u542f\uff08\u964d\u8f7d\u4e0b\u53d1\uff0c\u6309\u4e0a\u9650"} 60% ${"\u4e0b\u53d1\uff09"}' : '${"\u5173\u95ed\uff08\u6309\u8bbe\u5b9a\u6570\u91cf\u5b8c\u6574\u4e0b\u53d1\uff09"}';
  $('qCpuLimit').className = 'v ' + (pc ? 'ok' : '');
  var lb = !(CFG && CFG.loadBalance === false);
  $('qLb').textContent = lb ? '${"\u5df2\u5f00\u542f\uff08\u968f\u673a\u8f6e\u6362\uff09"}' : '${"\u5173\u95ed\uff08\u56fa\u5b9a\u987a\u5e8f\uff09"}';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
  // IPv6 ${"\u4e0b\u53d1\u7b56\u7565\uff1a"}'full'${"\uff08\u65e7\u884c\u4e3a\uff09\u6807\u9ec4\u63d0\u9192\u2014\u2014"}v6 ${"\u5907\u80ce\u4f1a\u62d6\u6162\u5ba2\u6237\u7aef\u9010\u8282\u70b9\u6d4b\u5ef6\u8fdf"}
  var i6 = (CFG && CFG.ipv6Mode) || 'off';
  $('qIp6').textContent = i6 === 'full' ? '${"\u7b49\u6743\u6df7\u5408\uff08\u65e7\u884c\u4e3a\uff09"}' : (i6 === 'tail' ? '${"\u4ec5\u5907\u80ce\uff08\u2264"}10%${"\uff0c\u6392\u5c3e\u90e8\uff09"}' : '${"\u4e0d\u4e0b\u53d1"}');
  $('qIp6').className = 'v ' + (i6 === 'full' ? 'warn' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '${"\u2014"}';
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
  if (m.indexOf('401') >= 0) return '${"\u8ba4\u8bc1\u5931\u8d25\uff08"}CF API 401${"\uff09\uff1a\u8bf7\u68c0\u67e5\u8d26\u6237"} ID ${"\u662f\u5426\u4e3a"} 32 ${"\u4f4d\u5341\u516d\u8fdb\u5236\u3001"}API ${"\u4ee4\u724c\u662f\u5426\u6709\u6548\u4e14\u52fe\u9009"} Account Analytics ${"\u8bfb\u53d6\u6743\u9650"}';
  if (m.indexOf('403') >= 0) return '${"\u65e0\u6743\u9650\uff08"}CF API 403${"\uff09\uff1a"}API ${"\u4ee4\u724c\u7f3a\u5c11\u8d26\u6237"} Analytics ${"\u8bfb\u53d6\u6743\u9650"}';
  if (m.indexOf('429') >= 0) return 'CF API ${"\u9650\u6d41\uff08"}429${"\uff09\uff1a\u5df2\u81ea\u52a8\u9000\u907f"} 15 ${"\u5206\u949f\uff0c\u671f\u95f4\u6cbf\u7528\u7f13\u5b58\u6570\u636e"}';
  if (m.indexOf('${"\u672a\u627e\u5230\u8d26\u6237"}') >= 0) return m + '${"\uff1a\u8bf7\u6838\u5bf9"} dash.cloudflare.com ${"\u53f3\u4fa7\u680f\u7684"} 32 ${"\u4f4d\u8d26\u6237"} ID';
  return m || '${"\u7528\u91cf\u67e5\u8be2\u5931\u8d25"}';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '${"\u672a\u914d\u7f6e"}';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '${"\u67e5\u8be2\u5931\u8d25"}';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '${"\u7f13\u5b58\u6570\u636e"}' : '${"\u5df2\u8fde\u63a5"}';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '${"\u2014"}';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '${"\u2014"}') + (d.stale ? '${"\uff08\u9650\u6d41\u7f13\u5b58\uff09"}' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '${"\u672a\u914d\u7f6e\u76d1\u63a7"}'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '${"\u67e5\u8be2\u5931\u8d25"}'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '${"\u7f13\u5b58\u6570\u636e"}' : '${"\u5df2\u8fde\u63a5"}';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '${"\u67e5\u8be2\u4e2d\u2026"}';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '${"\u67e5\u8be2\u5931\u8d25"}'; showQuotaState('err', (r && r.msg) || '${"\u67e5\u8be2\u5931\u8d25"}'); }
  }).catch(function(){ $('qQuotaSub').textContent = '${"\u67e5\u8be2\u5931\u8d25"}'; showQuotaState('err', '${"\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}'); });
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
  String(CFG.preferredDomains || '').split(/[\n;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });  // URL ${"\u611f\u77e5\uff1a\u542b\u67e5\u8be2\u4e32\u9017\u53f7\u7684"} URL ${"\u6574\u884c\u4fdd\u7559\uff0c\u4e0d\u6309\u9017\u53f7\u5207\u788e"}
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
  $('en-${e("dmxlc3M=")}').checked = CFG.enable${e("Vmxlc3M=")} !== false;
  $('en-${e("dHJvamFu")}').checked = !!CFG.enable${e("VHJvamFu")};
  $('tp-pass').value = CFG.${e("dHJvamFu")}Password || '';
  $('en-${e("eGh0dHA=")}').checked = !!CFG.enable${e("WGh0dHA=")};
  $('tls-only').checked = !!CFG.tlsOnly;
  $('${e("YWxwbg==")}').value = CFG.${e("YWxwbg==")} || '';
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
  var isp = fl.isp || ['${"\u79fb\u52a8"}', '${"\u8054\u901a"}', '${"\u7535\u4fe1"}'];
  $('fl-isp-m').checked = isp.indexOf('${"\u79fb\u52a8"}') >= 0;
  $('fl-isp-c').checked = isp.indexOf('${"\u8054\u901a"}') >= 0;
  $('fl-isp-t').checked = isp.indexOf('${"\u7535\u4fe1"}') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  $('o-fbpool').value = o.${e("ZmFsbGJhY2s=")}Pool || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 300;
  $('q-cpu-on').checked = !!CFG.cpuLimit;
  $('q-clabel').value = CFG.countryLabel || '';
  $('q-lb-on').checked = CFG.loadBalance !== false;  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('q-strict-on').checked = !!CFG.quotaStrict;
  $('a-uuid').value = CFG.uuid || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('q-tgtoken').value = CFG.tgBotToken || '';
  $('q-tgchat').value = CFG.tgChatID || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('hw-on').checked = !!CFG.homeWan;
  $('s-${e("cHJveHlJUA==")}').value = CFG.${e("cHJveHlJUA==")} || '';
  $('s-${e("b3V0Ym91bmQ=")}').value = CFG.${e("b3V0Ym91bmQ=")}Proxy || '';
  $('s-outmode').value = CFG.${e("b3V0Ym91bmQ=")}Mode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// ${"\u8282\u70b9\u5730\u533a\u591a\u9009\u4e92\u65a5\uff1a\u52fe\u9009\u5177\u4f53\u5730\u533a\u65f6\u53d6\u6d88\u300c\u5168\u90e8\u5730\u533a\u300d\uff1b\u5168\u90e8\u53d6\u6d88\u65f6\u81ea\u52a8\u6062\u590d\u300c\u5168\u90e8\u5730\u533a\u300d\uff08\u4fdd\u8bc1\u7b5b\u9009\u975e\u7a7a\uff09"}
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
  // URL ${"\u611f\u77e5\u6536\u96c6\uff1a"}URL${"\uff08\u542b"} ://${"\uff09\u6574\u884c\u539f\u6837\u4fdd\u7559\uff08\u67e5\u8be2\u4e32\u81ea\u5e26\u9017\u53f7\u4e0d\u6253\u788e\uff0c\u5982"} ?region=NL,GB,FI${"\uff09\uff1b"}
  // ${"\u975e"} URL ${"\u884c\u4ecd\u652f\u6301\u9017\u53f7"}/${"\u5206\u53f7\u5206\u9694\u591a\u6761"} IP${"\uff08\u517c\u5bb9"} "1.2.3.4:443#${"\u540d"}, 5.6.7.8" ${"\u65e7\u7528\u6cd5\uff09"}
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
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    ${e("YWxwbg==")}: $('${e("YWxwbg==")}').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 300,
    cpuLimit: $('q-cpu-on').checked,
    countryLabel: $('q-clabel').value,
    loadBalance: $('q-lb-on').checked,
    ipv6Mode: $('ip6-tail').checked ? 'tail' : ($('ip6-full').checked ? 'full' : 'off'),    cfAccountId: $('a-cfid').value.trim(),
    tgBotToken: $('q-tgtoken').value.trim(),
    tgChatID: $('q-tgchat').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    quotaStrict: $('q-strict-on').checked,
    enable${e("Vmxlc3M=")}: $('en-${e("dmxlc3M=")}').checked,
    enable${e("VHJvamFu")}: $('en-${e("dHJvamFu")}').checked,
    ${e("dHJvamFu")}Password: $('tp-pass').value,
    enable${e("WGh0dHA=")}: $('en-${e("eGh0dHA=")}').checked,
    homeWan: $('hw-on').checked,
    ${e("cHJveHlJUA==")}: $('s-${e("cHJveHlJUA==")}').value.trim(),
    ${e("b3V0Ym91bmQ=")}Proxy: $('s-${e("b3V0Ym91bmQ=")}').value.trim(),
    ${e("b3V0Ym91bmQ=")}Mode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      ${e("ZmFsbGJhY2s=")}Pool: $('o-fbpool').value.trim(),
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
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('${"\u79fb\u52a8"}'); if ($('fl-isp-c').checked) a.push('${"\u8054\u901a"}'); if ($('fl-isp-t').checked) a.push('${"\u7535\u4fe1"}'); return a; })()
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
  if (!CFG){ toast('${"\u914d\u7f6e\u5c1a\u672a\u52a0\u8f7d"}', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        // UUID ${"\u5373\u5165\u53e3\u8def\u5f84\uff1a\u6539"} UUID ${"\u4f1a\u6539\u53d8\u5165\u53e3\u4e0e\u8ba2\u9605\u5730\u5740\uff0c\u9700\u8df3\u8f6c\u5230\u65b0\u5165\u53e3\uff0c\u5426\u5219\u505c\u7559\u5728\u65e7\u8def\u5f84\u4f1a\u843d\u5230\u6b22\u8fce\u9875"}
        var nEntry = '/' + String((r.data && r.data.path) || '').replace(/^\/+/, '');
        if (nEntry !== '/' && nEntry !== APIPATH){
          toast('${"\u5165\u53e3\u5730\u5740\u5df2\u968f"} UUID ${"\u53d8\u66f4\uff0c\u6b63\u5728\u8df3\u8f6c\u2026"}', 'ok');
          setTimeout(function(){ location.href = nEntry; }, 1200);
          return;
        }
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '${"\u5df2\u4fdd\u5b58\uff1a"}' + new Date().toLocaleTimeString();
        toast('${"\u5df2\u4fdd\u5b58\u5e76\u751f\u6548"}', 'ok');
      } else toast((r && r.msg) || '${"\u4fdd\u5b58\u5931\u8d25"}', 'err');
    })
    .catch(function(){ toast('${"\u4fdd\u5b58\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('${"\u786e\u5b9a\u91cd\u7f6e\uff1f\u5c06\u6e05\u7a7a"} KV ${"\u4e2d\u5168\u90e8\u9762\u677f\u914d\u7f6e\u4e0e\u8282\u70b9\u8bb0\u5f55\uff0c\u9762\u677f\u8fd8\u539f\u4e3a\u521d\u59cb\u90e8\u7f72\u72b6\u6001\u3002\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01"}')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '${"\u5df2\u91cd\u7f6e"}', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '${"\u91cd\u7f6e\u5931\u8d25"}', 'err');
    })
    .catch(function(){ toast('${"\u91cd\u7f6e\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); })
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
  toast('${"\u5df2\u751f\u6210\u65b0"} UUID', 'ok');
}
// ${"\u5907\u4efd\uff1a\u628a\u5f53\u524d\u9762\u677f\u8868\u5355\u503c\u6536\u96c6\u6210"} JSON ${"\u4e0b\u8f7d\uff08\u4e0e\u4fdd\u5b58\u914d\u7f6e\u540c\u4e00\u5957\u5b57\u6bb5\uff0c\u6062\u590d\u540e\u53ef\u76f4\u63a5\u4fdd\u5b58\uff09"}
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = '${e("Y2ZuZXh0")}-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('${"\u914d\u7f6e\u5df2\u5bfc\u51fa\u4e3a"} JSON', 'ok');
  } catch (e) { toast('${"\u5bfc\u51fa\u5931\u8d25\uff1a"}' + e.message, 'err'); }
}
// ${"\u6062\u590d\uff1a\u8bfb\u53d6"} JSON ${"\u586b\u5145\u8868\u5355\uff0c\u6807\u8bb0\u672a\u4fdd\u5b58\uff0c\u7531\u7528\u6237\u70b9\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u5199\u76d8"}
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
      toast('${"\u914d\u7f6e\u5df2\u5bfc\u5165\uff0c\u8bf7\u70b9\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u751f\u6548"}', 'ok');
    } catch (e) { toast('${"\u5bfc\u5165\u5931\u8d25\uff1a"}JSON ${"\u683c\u5f0f\u4e0d\u6b63\u786e"}', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== ${"\u8ba2\u9605"} ===== */
function subUrlOf(fmt){
  // ${"\u81ea\u5b9a\u4e49\u8ba2\u9605\u8def\u5f84\u4f18\u5148\uff1a\u81ea\u52a8\u4fdd\u7559\u5f53\u524d\u57df\u540d\uff08"}location.origin${"\uff09\uff0c\u53ea\u66ff\u6362\u8def\u5f84\u6bb5\uff1b"}
  // ${"\u7528\u6237\u53ea\u586b"} UUID/${"\u522b\u540d\u6bb5\uff08\u5982"} AAZ${"\uff09\uff0c\u62fc\u6210"} https://${"\u5f53\u524d\u57df\u540d"}/AAZ/sub${"\uff1b\u7559\u7a7a\u7528"} UUID${"\u3002"}
  // ${"\u586b\u4e86"} /sub ${"\u7ed3\u5c3e\u6216\u5e26\u524d\u540e\u659c\u6760\u65f6\u81ea\u52a8\u5f52\u4e00\uff0c\u683c\u5f0f\u540e\u7f00\uff08"}${e("Y2xhc2g=")}/${e("c2luZ2JveA==")} ${"\u7b49\uff09\u62fc\u4e3a"} /sub/<${"\u683c\u5f0f"}>
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
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">${"\u4e8c\u7ef4\u7801\u5e93\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u76f4\u63a5\u590d\u5236\u94fe\u63a5"}</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">${"\u4e8c\u7ef4\u7801\u751f\u6210\u5931\u8d25\uff1a"}' + e.message + '</div>'; }
}
// ${"\u4e8c\u7ef4\u7801\u5185\u5bb9\u968f\u8ba2\u9605\u683c\u5f0f\uff08\u5ba2\u6237\u7aef\uff09\u8054\u52a8\uff1a"}
// ${e("Q2xhc2g=")}/${e("TWlob21v")}${"\u3001"}${e("U3Rhc2g=")} ${"\u2192"} ${e("Y2xhc2g=")}://install-config${"\uff08"}Fly${e("Q2xhc2g=")} / ${e("Q2xhc2g=")} Verge / ${e("U3Rhc2g=")} ${"\u626b\u7801\u88c5\u8ba2\u9605\uff0c\u914d\u7f6e\u540d\u53d6\u8ba2\u9605\u54cd\u5e94\u5934"} filename=${e("Q0ZOZXh0")}${"\uff09"}
// ${e("U2luZy1ib3g=")} ${"\u2192"} ${e("c2luZy1ib3g=")}://import-remote-profile?url=...#${e("Q0ZOZXh0")}${"\uff08\u5b98\u65b9"} scheme${"\uff0c"}# ${"\u540e\u4e3a\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\uff09"}
// ${e("U3VyZ2U=")} ${"\u2192"} ${e("c3VyZ2U=")}:///install-config${"\uff08"}${e("U3VyZ2U=")} ${"\u5b98\u65b9"} scheme${"\uff09"}
// auto / ${e("djJyYXlO")}+${e("U2hhZG93cm9ja2V0")} / ${e("TG9vbg==")} / ${e("UXVhbnR1bXVsdA==")} X / ${"\u660e\u6587"} ${"\u2192"} ${"\u76f4\u63a5\u4f7f\u7528\u8ba2\u9605\u94fe\u63a5\uff08"}${e("U2hhZG93cm9ja2V0")} / ${e("TG9vbg==")} / ${e("UXVhblg=")} ${"\u626b\u7801\u8bc6\u522b\uff09"}
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === '${e("Y2xhc2g=")}' || fmt === '${e("c3Rhc2g=")}') return '${e("Y2xhc2g=")}://install-config?url=' + enc;
  if (fmt === '${e("c2luZ2JveA==")}') return '${e("c2luZy1ib3g=")}://import-remote-profile?url=' + enc + '#' + __B;
  if (fmt === '${e("c3VyZ2U=")}') return '${e("c3VyZ2U=")}:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  // ${"\u4fdd\u5b58\u540d\u6309\u6240\u9009\u683c\u5f0f\u7ed9\u51fa\uff08\u5185\u5bb9\u968f\u7ba1\u7406\u63a5\u53e3\u8fd4\u56de\uff0c\u4e0d\u518d\u4f9d\u8d56\u54cd\u5e94\u5934\u91cc\u7684\u6587\u4ef6\u540d\uff09"}
  var names = { ${e("Y2xhc2g=")}:__B+'.yaml', ${e("c3Rhc2g=")}:__B+'.yaml', ${e("c2luZ2JveA==")}:__B+'.json', ${e("c3VyZ2U=")}:__B+'.conf', ${e("c3VyZmJvYXJk")}:__B+'.conf', ${e("bG9vbg==")}:__B+'.conf', ${e("cXVhbng=")}:__B+'.conf' };
  var name = names[fmt] || __B + '.txt';
  var w = $('qrWrap');
  // ${"\u515c\u5e95\u51fa\u53e3\uff1a\u811a\u672c\u89e6\u53d1\u7684\u4fdd\u5b58\u82e5\u88ab\u6d4f\u89c8\u5668\u6216\u5185\u7f6e"} WebView ${"\u62e6\u4e0b\uff0c\u5c31\u7ed9\u51fa\u4e00\u4e2a\u771f\u5b9e\u94fe\u63a5"}
  // ${"\uff08\u7528\u6237\u624b\u52bf\u70b9\u5b83\u4e00\u5b9a\u4f1a\u8d70\u6d4f\u89c8\u5668\u539f\u751f\u4e0b\u8f7d\uff0c\u4e0d\u7ecf\u8fc7\u811a\u672c\uff09"}
  function alt(msg){
    toast(msg, 'err');
    if (!w) return;
    w.style.display = 'block';
    w.innerHTML = '<div class="hint" style="margin-top:0">' + msg + ' ${"\u53ef"}<a href="' + url + '" download="' + name + '" style="text-decoration:underline">${"\u70b9\u6b64\u76f4\u63a5\u4e0b\u8f7d"}</a>${"\uff0c\u4e5f\u53ef\u590d\u5236\u8ba2\u9605\u94fe\u63a5\u5bfc\u5165\u5ba2\u6237\u7aef\u3002"}</div>';
  }
  toast('${"\u6b63\u5728\u751f\u6210"} ' + name + ' ${"\u2026"}', '');
  // ${"\u4e0e\u300c\u9884\u89c8\u300d\u5171\u7528\u7ba1\u7406\u901a\u9053\uff1a\u8ba2\u9605\u6b63\u6587\u968f"} JSON ${"\u4e00\u5e76\u8fd4\u56de\uff0c"}
  // ${"\u4e0d\u518d\u4f9d\u8d56"} /sub ${"\u7684"} Content-Disposition ${"\u2014\u2014"} ${"\u90a3\u6761\u54cd\u5e94\u5934\u5728\u90e8\u5206\u6258\u7ba1\u73af\u5883\u4f1a\u88ab\u6539\u5199"}
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok) throw new Error((r && r.msg) || '${"\u670d\u52a1\u7aef\u672a\u8fd4\u56de\u5185\u5bb9"}');
      var body = r.body || '';
      if (!body) throw new Error('${"\u8ba2\u9605\u5185\u5bb9\u4e3a\u7a7a"}');
      var bu = URL.createObjectURL(new Blob([body], { type: 'application/octet-stream' }));
      var a = document.createElement('a');
      a.href = bu;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(bu); }, 6e4);
      toast('${"\u5df2\u4fdd\u5b58"} ' + name + '${"\uff08"}' + Math.max(1, Math.round(body.length / 1024)) + ' KB${"\uff09"}', 'ok');
    })
    .catch(function(e){ alt('${"\u4e0b\u8f7d\u5931\u8d25\uff1a"}' + ((e && e.message) || e)); });
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '${"\u8bf7\u6c42\u4e2d\u2026"}';
  $('prevCount').textContent = '${"\u2014"}';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '${"\u9884\u89c8\u5931\u8d25"}'; $('prevBody').textContent = (r && r.msg) || '${"\u672a\u77e5\u9519\u8bef"}'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '${"\u2014"}';
      var n = 0;
      if (/${e("Y2xhc2g=")}|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(${e("dmxlc3M=")}|${e("dHJvamFu")}|ss|${e("eGh0dHA=")}):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* ${"\u4fdd\u6301\u539f\u6837"} */ }
        }
        n = t.split('\n').filter(function(l){ return /^(${e("dmxlc3M=")}|${e("dHJvamFu")}|ss|${e("eGh0dHA=")}):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' ${"\u4e2a\u8282\u70b9"}';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n${"\u2026\uff08\u5df2\u622a\u65ad\uff0c\u5b8c\u6574\u5185\u5bb9\u8bf7\u4e0b\u8f7d\uff09"}' : body;
    })
    .catch(function(){ $('prevType').textContent = '${"\u9884\u89c8\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}'; $('prevBody').textContent = ''; });
}

/* ===== ${"\u4f18\u9009\u914d\u7f6e"} ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // ${"\u300c\u8ffd\u52a0\u5185\u7f6e\u4f18\u9009\u6c60\u4e0e\u9ed8\u8ba4\u5730\u533a\u6e90\u300d\u4ec5\u5728\u81ea\u5b9a\u4e49\u8ba2\u9605"} / ${"\u968f\u673a\u4f18\u9009\u6a21\u5f0f\u4e0b\u53ef\u9009\uff1b"}
  // ${"\u8ba2\u9605\u6a21\u5f0f\u5173\u95ed\uff08\u4f7f\u7528\u9762\u677f\u9ed8\u8ba4\u8282\u70b9\u6c60\uff09\u65f6\u5f3a\u5236\u4e3a\u5173\u95ed\u5e76\u7981\u7528\uff0c\u907f\u514d\u9ed8\u8ba4\u6a21\u5f0f\u4e0b\u8bef\u5f00\u8ffd\u52a0\u5bfc\u81f4\u884c\u4e3a\u4e0d\u7b26"}
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // ${"\u8ba2\u9605\u6a21\u5f0f\u4e0e\u4eea\u8868\u76d8\u300c\u5730\u5740\u6765\u6e90\u300d\u80f6\u56ca\u4e92\u65a5\u540c\u6b65\uff08\u4e09\u6001\u5168\u90e8\u660e\u786e\u8ddf\u968f\uff09\uff1a"}
  // custom ${"\u2192"} ${"\u81ea\u5b9a\u4e49\u4f18\u9009\u5f00\u3001\u968f\u673a\u4f18\u9009\u5173\uff1b"}random ${"\u2192"} ${"\u968f\u673a\u4f18\u9009\u5f00\u3001\u81ea\u5b9a\u4e49\u4f18\u9009\u5173\uff1b\u5173\u95ed"} ${"\u2192"} ${"\u4e24\u4e2a\u80f6\u56ca\u90fd\u5173"}
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
// ${"\u4eea\u8868\u76d8\u300c\u5730\u5740\u6765\u6e90"} ${"\u2192"} ${"\u81ea\u5b9a\u4e49\u4f18\u9009\u300d\u4e0e\u4f18\u9009\u914d\u7f6e\u300c\u8ba2\u9605\u6a21\u5f0f\u300d\u8054\u52a8\uff1a"}
// ${"\u52fe\u9009"} ${"\u2192"} ${"\u8ba2\u9605\u6a21\u5f0f\u5207\u4e3a\u300c\u81ea\u5b9a\u4e49\u8ba2\u9605\uff08\u652f\u6301\u6c47\u805a\uff09\u300d\u5e76\u5173\u95ed\u968f\u673a\u4f18\u9009\uff1b\u53d6\u6d88"} ${"\u2192"} ${"\u8ba2\u9605\u6a21\u5f0f\u5173\u95ed\uff08\u4f7f\u7528\u9762\u677f\u9ed8\u8ba4\u8282\u70b9\u6c60\uff09"}
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // ${"\u4e0e\u968f\u673a\u4f18\u9009\u4e92\u65a5"}
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// ${"\u4eea\u8868\u76d8\u300c\u5730\u5740\u6765\u6e90"} ${"\u2192"} ${"\u968f\u673a\u4f18\u9009\u300d\u4e0e\u4f18\u9009\u914d\u7f6e\u300c\u8ba2\u9605\u6a21\u5f0f"} ${"\u2192"} ${"\u968f\u673a\u4f18\u9009\u6a21\u5f0f\uff08\u5b98\u65b9\u63a5\u53e3\uff09\u300d\u8054\u52a8\uff1a"}
// ${"\u52fe\u9009"} ${"\u2192"} ${"\u8ba2\u9605\u6a21\u5f0f\u5207\u4e3a"} random ${"\u5e76\u5173\u95ed\u81ea\u5b9a\u4e49\u4f18\u9009\uff1b\u53d6\u6d88"} ${"\u2192"} ${"\u8ba2\u9605\u6a21\u5f0f\u5173\u95ed\uff08\u82e5\u5f53\u524d\u4e3a"} random${"\uff09"}
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // ${"\u4e0e\u81ea\u5b9a\u4e49\u4f18\u9009\u4e92\u65a5"}
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
  if (!CFG){ toast('${"\u914d\u7f6e\u5c1a\u672a\u52a0\u8f7d"}', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '${"\u6b63\u5728\u62c9\u53d6\u5019\u9009"} IP${"\u2026"}', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '${"\u62c9\u53d6\u5931\u8d25"}', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '${"\u6ca1\u6709\u53ef\u6d4b\u7684"} IP${"\uff0c\u8bf7\u6362\u4e00\u4e2a\u6570\u636e\u6e90"}', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('${"\u9884\u8bbe\u6e90"} ' + st.preset + ' ${"\u6761"}');
      if (st.presetErr) parts.push('${"\u9884\u8bbe\u6e90\u5931\u8d25"}(' + st.presetErr + ')');
      if (st.custom) parts.push('${"\u81ea\u5b9a\u4e49\u6e90"} ' + st.custom + ' ${"\u6761"}');
      if (st.customErr) parts.push('${"\u81ea\u5b9a\u4e49\u6e90\u5931\u8d25"}(' + st.customErr + ')');
      if (st.cidr) parts.push('CF ${"\u8865\u8db3"} ' + st.cidr + ' ${"\u6761"}');
      // ${"\u5019\u9009\u6570\u91cf\u622a\u65ad\uff1a\u81ea\u5b9a\u4e49"} URL ${"\u6e90\u53ef\u80fd\u62c9\u53d6\u4e0a\u5343\u6761\u5019\u9009\uff08\u7b2c\u4e09\u65b9\u4f18\u9009"} IP ${"\u6587\u6863\u52a8\u8f84\u4e0a\u5343\u6761\uff09\uff0c\u5168\u91cf\u6d4b\u901f\u8017\u65f6\u8fc7\u957f\uff1b"}
      // ${"\u6309\u300c\u5019\u9009\u6570\u91cf\u300d\u53ea\u6d4b\u524d"} N ${"\u6761\uff08\u53ef\u8c03\u9ad8\u6570\u503c\u6d4b\u66f4\u591a\uff09\uff0c\u6d4b\u901f\u5217\u8868\u4e0e\u300c\u5168\u90e8\u52a0\u5165\u6700\u4f18\u300d\u5747\u57fa\u4e8e\u8be5\u5b50\u96c6"}
      var candSub = (o.count > 0 && cands.length > o.count) ? cands.slice(0, o.count) : cands;
      showMsg('oMsg', '${"\u62c9\u53d6"} ' + cands.length + ' ${"\u6761\uff08"}' + (parts.join('${"\uff0c"}') || '${"\u65e0"}') + '${"\uff09\uff0c\u672c\u5730\u6d4b\u901f\u524d"} ' + candSub.length + ' ${"\u6761\u2026"}', 'info');
      localTest(candSub, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '${"\u6d4b\u901f\u5b8c\u6210\uff1a"}' + okc + '/' + results.length + ' ${"\u53ef\u7528\uff08\u672c\u5730"} ${"\u2192"} ${"\u76ee\u6807\uff09"}', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '${"\u62c9\u53d6\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); });
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
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">${"\u6ca1\u6709\u53ef\u7528\u7ed3\u679c"}</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '${"\u8d85\u65f6"}';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '${"\u53ef\u7528"}' : '${"\u8d85\u65f6"}') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">${"\u52a0\u5165\u4f18\u9009"}</button>' : '<span style="color:var(--faint)">${"\u2014"}</span>';
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
  if (exists){ toast('${"\u8be5"} IP ${"\u5df2\u5728\u4f18\u9009\u5217\u8868\u4e2d"}', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('${"\u5df2\u52a0\u5165\u4f18\u9009\u5217\u8868\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u4e0b\u53d1"}', 'ok');
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
  if (!list.length){ toast('${"\u6ca1\u6709\u53ef\u7528\u7ed3\u679c"}', 'err'); return; }
  var arr = [];
  // ${"\u4fdd\u7559\u539f\u8282\u70b9\u540d\uff1a\u9632\u5730\u533a\u4fe1\u606f\u4e22\u5931\u5bfc\u81f4\u8ba2\u9605\u65e0\u56fd\u5bb6\u663e\u793a\uff1b\u65e0\u540d\u6761\u76ee\u624d\u7f16\u300c\u4f18\u9009"}N${"\u300d"}
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + (r.name ? ('#' + r.name) : ('#${"\u4f18\u9009"}' + (i + 1)))); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('${"\u5df2\u52a0\u5165\u6700\u5feb\u7684"} ' + list.length + ' ${"\u4e2a\u4f18\u9009"} IP${"\uff0c\u70b9\u51fb\u300c\u4fdd\u5b58\u5168\u90e8\u300d\u4e0b\u53d1"}', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('${"\u5df2\u62c9\u53d6\u4f18\u9009\u57df\u540d"}', 'ok'); }
    else toast((r && r.msg) || '${"\u62c9\u53d6\u5931\u8d25"}', 'err');
  }).catch(function(){ toast('${"\u62c9\u53d6\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); });
}

/* ===== ${"\u542f\u52a8"} ===== */
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

`;function un(t){const e="/"+String(t||"").replace(/^\/+/,"").replace(/\/+$/,""),n=pn.indexOf("var APIPATH ="),r=n<0?-1:pn.indexOf(";",n),a=n>=0&&r>n?pn.slice(0,n)+"var APIPATH = "+JSON.stringify(e)+pn.slice(r):pn;return new Response(a,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}function hn(t){return Q(String(t&&t.uuid||"")+"|rule").slice(0,12)}function fn(t,e){return!(!function(t){return(t||"").toLowerCase().includes("mozilla")}(e)||!(t.headers.get("Accept")||"").toLowerCase().includes("text/html")&&"document"!==(t.headers.get("Sec-Fetch-Dest")||"").toLowerCase()&&!t.headers.get("Upgrade-Insecure-Requests"))}async function mn(t,e){if(!e.admin)return!0;const n=(t.headers.get("Cookie")||"").match(new RegExp("(?:^|;\\s*)"+c+"=([^;]+)"));return!(!n||n[1]!==Q(String(e.admin)))}const gn=new Map,bn={sub:{cap:30,burst:10,refillMs:6e4},panel:{cap:60,burst:20,refillMs:6e4}};function vn(t,n){const r=bn[n];if(!r)return!0;const a=t.headers.get("CF-"+e("Q29ubmVjdA==")+"ing-IP")||t.headers.get("X-Real-IP")||"";if(!a)return!0;const o=Date.now();gn.size>2e3&&gn.clear();const i=n+"|"+a;let s=gn.get(i);s||(s={tokens:r.cap,t:o},gn.set(i,s));const l=Math.floor((o-s.t)/r.refillMs);return l>0&&(s.tokens=Math.min(r.cap,s.tokens+l*r.burst),s.t=s.t+l*r.refillMs),!(s.tokens<=0||(s.tokens--,0))}function yn(){return kn()}function wn(t){try{return decodeURIComponent(t)}catch(e){return t}}const xn=`\n<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Welcome</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f1216;color:#e8ecf2;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}\nmain{text-align:center;padding:2rem}\nh1{font-size:1.9rem;font-weight:600;letter-spacing:.02em}\np{margin-top:.75rem;color:#8b95a7;font-size:.95rem}\ni{display:inline-block;width:8px;height:8px;border-radius:50%;background:#3ba55d;margin-right:.5rem;vertical-align:middle}\n</style>\n</head>\n<body>\n<main>\n<h1>Welcome</h1>\n<p><i></i>Service is running</p>\n</main>\n</body>\n</html>\n`;function kn(){const t=en&&(en.MASK||"");return"1101"===t?function(){const t=Pn(),n=new Date,r=function(t){return String(t).padStart(2,"0")},a=n.getUTCFullYear()+"-"+r(n.getUTCMonth()+1)+"-"+r(n.getUTCDate())+" "+r(n.getUTCHours())+":"+r(n.getUTCMinutes())+":"+r(n.getUTCSeconds()),o=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(t){return t.toString(16).padStart(2,"0")}).join(""),i=nn&&nn.headers.get("CF-"+e("Q29ubmVjdA==")+"ing-IP")||"";return new Response(`<!DOCTYPE html>\n\x3c!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if gt IE 8]>\x3c!--\x3e <html class="no-js" lang="en-US"> \x3c!--<![endif]--\x3e\n<head>\n<title>Worker threw exception | ${t} | Cloudflare</title>\n<meta charset="UTF-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n<meta name="robots" content="noindex, nofollow" />\n<meta name="viewport" content="width=device-width,initial-scale=1" />\n<style>\nbody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\n.cf-wrapper{max-width:960px;margin:0 auto;padding:0 1.5em}\n#cf-error-details{padding:2.5em 0}\n.cf-error-overview h1{font-size:2.6em;font-weight:400;margin:0 0 .3em;line-height:1.2}\n.cf-error-type{color:#404041}\n.cf-error-code{color:#bd2426;font-weight:600}\n.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\n.cf-subheadline{font-size:1.4em;font-weight:400;margin:0 0 1.2em;color:#404041}\n.cf-section{border-top:1px solid #e0e0e0;padding:1.4em 0}\n.cf-error-source{background:#f6f6f6;border:1px solid #e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\n.cf-error-source p{margin:0 0 .8em}\n.cf-error-source p:last-child{margin:0}\n.cf-footer{border-top:1px solid #e0e0e0;padding:1.2em 0;font-size:.86em;color:#92979b}\n.cf-footer a,.cf-section a{color:#2f7bbf;text-decoration:none}\n.cf-footer p{margin:0 0 .4em}\n</style>\n</head>\n<body>\n<div id="cf-wrapper">\n<div id="cf-error-details" class="cf-error-details-wrapper">\n<div class="cf-header cf-error-overview">\n<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">1101</span><small class="heading-ray-id">Ray ID: ${o} &bull; ${a} UTC</small></h1>\n<h2 class="cf-subheadline">Worker threw exception</h2>\n</div>\n<div class="cf-section cf-wrapper">\n<p>You've requested a page on a website (${t}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>\n</div>\n<div class="cf-section cf-wrapper">\n<div class="cf-error-source">\n<p><strong>What can I do?</strong></p>\n<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 1101 means that the request reached the server, but the server threw an exception while processing it.</p>\n<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>\n</div>\n</div>\n</div>\n<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${o}</strong></p><p>Your IP: ${i} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>\n</div>\n</body>\n</html>`,{status:500,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}():"522"===t?function(){const t=Pn(),n=new Date,r=function(t){return String(t).padStart(2,"0")},a=n.getUTCFullYear()+"-"+r(n.getUTCMonth()+1)+"-"+r(n.getUTCDate())+" "+r(n.getUTCHours())+":"+r(n.getUTCMinutes())+":"+r(n.getUTCSeconds()),o=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(t){return t.toString(16).padStart(2,"0")}).join(""),i=nn&&nn.headers.get("CF-"+e("Q29ubmVjdA==")+"ing-IP")||"";return new Response(`<!DOCTYPE html>\n\x3c!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if gt IE 8]>\x3c!--\x3e <html class="no-js" lang="en-US"> \x3c!--<![endif]--\x3e\n<head>\n<title>${t} | 522: ${e("Q29ubmVjdA==")}ion timed out</title>\n<meta charset="UTF-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n<meta name="robots" content="noindex, nofollow" />\n<meta name="viewport" content="width=device-width,initial-scale=1" />\n<style>\nbody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\n.cf-wrapper{max-width:960px;margin:0 auto;padding:0 1.5em}\n#cf-error-details{padding:2.5em 0}\n.cf-error-overview h1{font-size:2.6em;font-weight:400;margin:0 0 .3em;line-height:1.2}\n.cf-error-type{color:#404041}\n.cf-error-code{color:#bd2426;font-weight:600}\n.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\n.cf-subheadline{font-size:1.4em;font-weight:400;margin:0 0 1.2em;color:#404041}\n.cf-section{border-top:1px solid #e0e0e0;padding:1.4em 0}\n.cf-error-source{background:#f6f6f6;border:1px solid #e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\n.cf-error-source p{margin:0 0 .8em}\n.cf-error-source p:last-child{margin:0}\n.cf-footer{border-top:1px solid #e0e0e0;padding:1.2em 0;font-size:.86em;color:#92979b}\n.cf-footer a,.cf-section a{color:#2f7bbf;text-decoration:none}\n.cf-footer p{margin:0 0 .4em}\n</style>\n</head>\n<body>\n<div id="cf-wrapper">\n<div id="cf-error-details" class="cf-error-details-wrapper">\n<div class="cf-header cf-error-overview">\n<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">522</span><small class="heading-ray-id">Ray ID: ${o} &bull; ${a} UTC</small></h1>\n<h2 class="cf-subheadline">${e("Q29ubmVjdA==")}ion timed out</h2>\n</div>\n<div class="cf-section cf-wrapper">\n<p>You've requested a page on a website (${t}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. Cloudflare is currently unable to reach the origin web server.</p>\n</div>\n<div class="cf-section cf-wrapper">\n<div class="cf-error-source">\n<p><strong>What can I do?</strong></p>\n<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 522 means that the request was able to ${e("Y29ubmVjdA==")} to your web server, but it did not reply in time.</p>\n<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>\n</div>\n</div>\n</div>\n<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${o}</strong></p><p>Your IP: ${i} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>\n</div>\n</body>\n</html>`,{status:522,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}():"off"===t||"0"===t?new Response("Not Found",{status:404}):new Response(xn,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}function In(){try{return kn()}catch(t){return new Response("Service Unavailable",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-store"}})}}function Pn(){try{return new URL(nn.url).host}catch(t){return"localhost"}}async function Sn(t,e,n){if(!t||!t.K||"function"!=typeof t.K.get)return!0;try{const r=await t.K.get(e),a=r&&parseInt(JSON.parse(r).t,10)||0;if(a&&Date.now()-a<n)return!1;const o=t.K.put(e,JSON.stringify({t:Date.now()}));return t._ctx&&"function"==typeof t._ctx.waitUntil?t._ctx.waitUntil(o.catch(()=>{})):await o.catch(()=>{}),!0}catch(t){return!0}}export default{fetch:async(n,r,a)=>async function(n,r){en=r,nn=n;const a=new URL(n.url),o=n.headers.get("User-Agent")||"",i=(n.headers.get("Upgrade")||"").toLowerCase();if("http:"===a.protocol)return Response.redirect(a.href.replace("http://","https://"),301);const h=await vt(r),g=h.path||h.uuid,b=String(h.login||h.admin||"").replace(/^\/+|\/+$/g,""),k=a.pathname.replace(/^\/+|\/+$/g,"").split("/");if("crules"===k[0]&&3===k.length&&k[1]===hn(h))return async function(t,n){const r=String(n||"").replace(/\.(mrs|yaml|yml|txt|list)$/i,""),a=v[r];if(!a)return bt({ok:!1,msg:"unknown rule set"},404);const o=Date.now(),i=y.get(r);if(i&&o-i.t<36e5)return x(i.buf,a.ct);if(t.K&&"function"==typeof t.K.get)try{const e=await t.K.get("crule:"+r,{type:"arrayBuffer"});if(e&&e.byteLength)return y.set(r,{t:o,buf:e}),x(e,a.ct)}catch(t){}let c=w.get(r);if(!c){c=(async()=>{const n=await be(a.url,{headers:{"User-Agent":l+"/"+s,Accept:"*/*"}},2e4);if(!n.ok)throw new Error(e("dXBzdHJlYW0=")+" HTTP "+n.status);const o=await n.arrayBuffer();if(!o||!o.byteLength)throw new Error(e("dXBzdHJlYW0=")+" empty body");if(t.K&&"function"==typeof t.K.put)try{await t.K.put("crule:"+r,o,{expirationTtl:Math.floor(86400)})}catch(t){}return y.set(r,{t:Date.now(),buf:o}),o})(),w.set(r,c);const n=()=>w.delete(r);c.then(n,n)}try{return x(await c,a.ct)}catch(t){return new Response("rule "+e("dXBzdHJlYW0=")+" error: "+(t.message||t),{status:502,headers:{"Retry-After":"3600"}})}}(r,wn(k[2]));if(b&&(k[0]===b||wn(k[0])===b)||"login"===k[0]&&!b){const t=!h.admin;if("POST"===n.method){const e=await n.text(),a=new URLSearchParams(e);if(t){const t=String(a.get("password")||"");if(t.length<4)return bt({ok:!1,msg:"\u5bc6\u7801\u81f3\u5c11 4 \u4f4d"},400);const e=JSON.parse(JSON.stringify(h));if(e.admin=t,e.adminInit=!0,r.U||(e.uuid=B(t)),r.D||r.PATH||(e.path=e.uuid),!await yt(r,e))return bt({ok:!1,msg:"\u672a\u7ed1\u5b9a KV \u547d\u540d\u7a7a\u95f4\uff0c\u65e0\u6cd5\u4fdd\u5b58\u7ba1\u7406\u5bc6\u7801"},500);const n=Q(t);return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"+b}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":c+"="+n+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}if(h.admin&&a.get("password")===h.admin){const t=Q(String(h.admin));return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"+b}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":c+"="+t+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}return bt({ok:!1,msg:"\u5bc6\u7801\u9519\u8bef"},403)}return h.admin&&await mn(n,h)?un(g):h.admin?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>\u767b\u5f55</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare \u8282\u70b9\u63a7\u5236\u53f0</span></div>\n  </div>\n  <h1>\u767b\u5f55</h1>\n  <p>\u8bf7\u8f93\u5165\u7ba1\u7406\u5bc6\u7801\u4ee5\u7ee7\u7eed</p>\n  <div class=\"msg\" id=\"msg\">\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"\u7ba1\u7406\u5bc6\u7801\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">\u767b\u5f55</button>\n  </form>\n  <div class=\"foot\">\u914d\u7f6e\u4fdd\u5b58\u5728 Cloudflare KV \u4e2d\uff0c\u5bc6\u7801\u9519\u8bef 24 \u5c0f\u65f6\u540e\u81ea\u52a8\u5931\u6548</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}}):t?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>\u521d\u59cb\u5316</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare \u8282\u70b9\u63a7\u5236\u53f0</span></div>\n  </div>\n  <h1>\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801</h1>\n  <p>\u90e8\u7f72\u540e\u9996\u6b21\u8bbf\u95ee\u8bf7\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\u3002\u8bbe\u7f6e\u540e\u8bbf\u95ee\u9762\u677f\u9700\u767b\u5f55\u3002</p>\n  <div class=\"msg\" id=\"msg\">\u8bbe\u7f6e\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\uff08\u81f3\u5c11 4 \u4f4d\uff09\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"\u786e\u8ba4\u7ba1\u7406\u5bc6\u7801\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">\u8bbe\u7f6e\u5e76\u8fdb\u5165\u9762\u677f</button>\n  </form>\n  <div class=\"foot\">\u5bc6\u7801\u4fdd\u5b58\u5728 Cloudflare KV \u4e2d\uff0c\u4e4b\u540e\u53ef\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u4e2d\u4fee\u6539</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '\u5bc6\u7801\u81f3\u5c11 4 \u4f4d'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '\u8bbe\u7f6e\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}}):yn()}const I=String(h.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,""),P=k[0]===g||!!I&&k[0]===I;if(""===k[0])return yn();if(P&&1===k.length){if("websocket"===i)return ze(r,n.cf&&n.cf.colo),async function(t,n){const r=new WebSocketPair,[a,o]=Object.values(r);try{o.accept({allowHalfOpen:!0})}catch(t){o.accept()}o.binaryType="arraybuffer";let i=null,s=null,l=!1,c=null,d=null,p=!1;const u=t=>{try{o.send(t)}catch(t){}},h=async(r,a)=>{if(r&&r.byteLength&&(c=c?Gt(c,r):r),!c)return;if(c.byteLength>65536)throw new Error("\u63e1\u624b\u5934\u8d85\u8fc7 64KB\uff0c\u5173\u95ed\u8fde\u63a5");let f,m;try{let t=function(t,e){if(!e.enableTrojan||!t||t.byteLength<58)return!1;const n=t.subarray(0,56);if(_.decode(n).toLowerCase()===Vt(e.trojanPassword||e.uuid))return!0;if(13===t[56]&&10===t[57]){for(let t=0;t<56;t++){const e=n[t];if(!(e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70))return!1}return!0}return!1}(c,n);if(!t&&c.byteLength>0&&0!==c[0]&&c.byteLength<58)return;m=!t,f=t?function(t){if(!t||t.byteLength<66)throw new Error(e("VHJvamFu")+" \u5934\u90e8\u8fc7\u77ed");const n=new DataView(t.buffer,t.byteOffset,t.byteLength);let r=58;const a=n.getUint8(r);r+=1;const o=n.getUint8(r);let i,s;if(r+=1,1===o)i=`${n.getUint8(r)}.${n.getUint8(r+1)}.${n.getUint8(r+2)}.${n.getUint8(r+3)}`,s=4;else if(3===o){const e=n.getUint8(r);i=_.decode(t.subarray(r+1,r+1+e)),s=1+e}else{if(4!==o)throw new Error("\u65e0\u6cd5\u8bc6\u522b\u7684\u5730\u5740\u7c7b\u578b");i=lt(t.subarray(r,r+16)),s=16}r+=s;const l=n.getUint16(r);return r+=2,r+=2,{command:a,port:l,addr:i,password:_.decode(t.subarray(0,56)),headerLength:r}}(c):Ct(c)}catch(t){if(/\u5934\u90e8\u8fc7\u77ed/.test(t.message||""))return;throw t}!p&&m&&2!==f.command&&(p=!0,u(new Uint8Array([0,0])));const g=ee(c.byteLength>f.headerLength?c.subarray(f.headerLength):null);if("unknown"===g&&!a)return void(d||(d=setTimeout(()=>{d=null,h(new Uint8Array(0),!0).catch(t=>{try{o.close(1011,String(t&&t.message||t))}catch(t){}})},80)));if(d&&(clearTimeout(d),d=null),l)return;if(l=!0,2===f.command){try{const t=c.subarray(f.headerLength);if(53===f.port&&t.byteLength>=12){const e=await async function(t){if(!t||t.byteLength<17)return null;const e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=e.getUint16(0);if(32768&e.getUint16(2))return null;if(1!==e.getUint16(4))return null;let r=12,a=[];for(;r<t.byteLength;){const n=e.getUint8(r);if(0===n){r++;break}if(!(192&~n)){r+=2;break}if(r+1+n>t.byteLength)return null;a.push(_.decode(t.subarray(r+1,r+1+n))),r+=1+n}if(r+4>t.byteLength||0===a.length)return null;const o=e.getUint16(r),i=e.getUint16(r+2),s=r+4;if(1!==o&&28!==o)return null;const l=a.join("."),c=t.subarray(12,s);let d=null;for(const e of Rt)try{const t=await be(e+"?name="+encodeURIComponent(l)+"&type="+o,{headers:{accept:"application/dns-json"}},5e3);if(!t||!t.ok)continue;const n=await t.json();if(!n||0!==n.Status)continue;const r=(n.Answer||[]).filter(t=>t.type===o&&(1===t.type?st(String(t.data)):/^[0-9a-fA-F:]+$/.test(String(t.data))));if(r.length){d=r;break}}catch(t){}if(!d)return null;const p=new Uint8Array(12),u=new DataView(p.buffer);u.setUint16(0,n),u.setUint16(2,33152),u.setUint16(4,1),u.setUint16(6,d.length);const h=[p,c];for(const t of d){const e=String(t.data),n=1===t.type?Uint8Array.from(e.split(".").map(Number)):Mt(e);if(n.length!==(1===t.type?4:16))continue;const r=new Uint8Array(10),a=new DataView(r.buffer);a.setUint16(0,49164),a.setUint16(2,t.type),a.setUint16(4,0===i?1:i),a.setUint32(6,Number(t.TTL)||300),h.push(r,new Uint8Array([n.length>>8&255,255&n.length]),n)}let f=0;h.forEach(t=>f+=t.byteLength);const m=new Uint8Array(f);let g=0;for(const t of h)m.set(t,g),g+=t.byteLength;return m}(t);e&&u(e)}}catch(t){}try{o.close(1e3)}catch(t){}return}const b=await ne(f,n,t.cf&&t.cf.colo,0,g);i=b,s=b.writable.getWriter(),b._preamble&&b._preamble.byteLength>0&&u(b._preamble),c&&c.byteLength>f.headerLength&&await s.write(c.subarray(f.headerLength)),c=null,async function(t,e,n){try{for(;;){const{done:n,value:r}=await t.read();if(n)break;e(r)}}catch(t){}try{n&&n()}catch(t){}}(b.readable.getReader(),u,()=>{try{o.close(1e3)}catch(t){}})},f=function(t,e){if(!t)return null;const n=String(t).trim();if(!n||n.length>8192)return null;if(!/^[A-Za-z0-9\-_+/=]+$/.test(n))return null;let r=null;try{const t=n.replace(/-/g,"+").replace(/_/g,"/"),e=t.length%4?"=".repeat(4-t.length%4):"",a=atob(t+e);r=new Uint8Array(a.length);for(let t=0;t<a.length;t++)r[t]=a.charCodeAt(t)}catch(t){return null}if(!r.byteLength||r.byteLength>6144)return null;if(r.byteLength>=17&&0===r[0]){const t=function(t){const e=String(t||"").replace(/-/g,"");if(32!==e.length)return null;const n=new Uint8Array(16);for(let t=0;t<16;t++){const r=parseInt(e.substr(2*t,2),16);if(isNaN(r))return null;n[t]=r}return n}(e.uuid);if(!t)return r;for(let e=0;e<16;e++)if(r[e+1]!==t[e])return null;return r}return e.enableTrojan&&r.byteLength>=58&&13===r[56]&&10===r[57]&&_.decode(r.subarray(0,56)).toLowerCase()===Vt(e.trojanPassword||e.uuid)?r:null}(t.headers.get("sec-websocket-protocol"),n);f&&h(f).catch(t=>{try{o.close(1011,String(t&&t.message||t))}catch(t){}}),o.addEventListener("message",async t=>{try{const e="string"==typeof t.data?G.encode(t.data):new Uint8Array(t.data);l?s?await s.write(e):c=c?Gt(c,e):e:await h(e)}catch(t){try{o.close(1011,String(t&&t.message||t))}catch(t){}}});const m=()=>{if(d&&(clearTimeout(d),d=null),i){try{i.close()}catch(t){}i=null}};return o.addEventListener("close",m),o.addEventListener("error",m),new Response(null,{status:101,webSocket:a})}(n,h);if("POST"===n.method&&h.enableXhttp){ze(r,n.cf&&n.cf.colo);try{return await async function(t,e){const n=t.body.getReader(),r=await n.read();if(r.done)return new Response("empty",{status:400});const a=Ct(r.value),o=await ne(a,e,t.cf&&t.cf.colo,0,ee(r.value.subarray(a.headerLength))),i=o.writable.getWriter();await i.write(r.value.subarray(a.headerLength)),(async()=>{try{for(;;){const{done:t,value:e}=await n.read();if(t)break;await i.write(e)}}catch(t){}try{await i.close()}catch(t){}})();const s=new ReadableStream({async start(t){t.enqueue(new Uint8Array([0,0])),o._preamble&&o._preamble.byteLength>0&&t.enqueue(o._preamble);const e=o.readable.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;t.enqueue(r)}}catch(t){}try{t.close()}catch(t){}try{o.close()}catch(t){}},cancel(){try{o.close()}catch(t){}}});return new Response(s,{status:200,headers:{"content-type":"application/octet-stream","x-accel-buffering":"no","cache-control":"no-store"}})}(n,h)}catch(t){return bt({ok:!1,msg:e("eGh0dHA=")+" \u9519\u8bef: "+(t.message||t)},500)}}}if(P&&"sub"===k[1]){if(!vn(n,"sub"))return yn();const t=k.length>=3?k[2]:"";try{if(r._ctx&&"function"==typeof r._ctx.waitUntil)r._ctx.waitUntil(St(r,h));else try{await St(r,h)}catch(t){}if(h.quotaDisabled)return new Response(l+"\uff1a\u8d26\u6237\u5f53\u65e5\u989d\u5ea6\u5df2\u8fbe 99%\uff0c\u8ba2\u9605\u5df2\u81ea\u52a8\u505c\u7528\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}});if(h.quotaStrict)try{const t=await $t(r,h);if(t&&t.configured&&"number"==typeof t.percent&&t.percent>95)return new Response(l+"\uff1a\u4e25\u683c\u6a21\u5f0f\u5df2\u542f\u7528\uff0c\u5f53\u65e5\u989d\u5ea6\u5df2\u8fbe "+t.percent+"%\uff08\u9608\u503c 95%\uff09\uff0c\u5df2\u505c\u6b62\u4e0b\u53d1\u4efb\u4f55\u8282\u70b9\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}})}catch(t){}const a=h;if(h.quotaAuto)try{const t=await $t(r,h);if(t.configured&&t.today&&t.today.requests>=Math.round(6e4)){const e=t.today.requests/t.limit,n=Math.max(.1,(1-e)/.4);a._quotaCap=Math.max(20,Math.round(1e3*n))}}catch(t){}const i=await async function(){const e=h.preferredIPs||[],i=[h.uuid,n.url,t,o,e.length,e[0]&&e[0].ip||"",h.nodeLimitCount,h.enableVless?1:0,h.enableTrojan?1:0,h.enableXhttp?1:0,h.optimizer&&h.optimizer.subMode||"",h.host||"",h.homeWan?1:0,h._quotaCap||0].join("|"),s=Date.now(),l=cn.get(i);if(l&&s-l.t<6e4)return l.r;const c=await dn(a,n.url,t,o,n.cf&&n.cf.colo,n.cf&&n.cf.country,r);return cn.size>8&&cn.clear(),cn.set(i,{r:c,t:s}),c}(),s={[e("Y2xhc2g=")]:l+".yaml",[e("c3Rhc2g=")]:l+".yaml",[e("c2luZ2JveA==")]:l+".json",[e("c3VyZ2U=")]:l+".conf",[e("c3VyZmJvYXJk")]:l+".conf",[e("bG9vbg==")]:l+".conf",[e("cXVhbng=")]:l+".conf"}[t]||l+".txt";return new Response(i.body,{status:200,headers:{"Content-Type":i.type+"; charset=utf-8","Cache-Control":"no-store","Content-Disposition":'attachment; filename="'+s+"\"; filename*=utf-8''"+s}})}catch(t){return new Response("\u8ba2\u9605\u751f\u6210\u5931\u8d25: "+(t&&t.message||t),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}if(P&&1===k.length&&fn(n,o))return vn(n,"panel")&&await mn(n,h)?un(g):yn();if(P&&"api"===k[1]){if(!vn(n,"panel"))return yn();const i=k[2]||"";if(function(t,e){return!t.admin&&!t.adminInit&&!(!e.K||"function"!=typeof e.K.get)}(h,r))return fn(n,o)||n.headers.get("Cookie")?bt({ok:!1,status:403,msg:"\u8bf7\u5148\u5b8c\u6210\u9996\u6b21\u8bbe\u7f6e\uff1a\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\u540e\u518d\u8bbf\u95ee\u9762\u677f"},403):kn();if(!await mn(n,h))return fn(n,o)||n.headers.get("Cookie")?bt({ok:!1,status:403,msg:"\u672a\u6388\u6743\uff08\u9700\u8981\u7ba1\u7406\u5bc6\u7801\uff09"},403):kn();if("config"===i){if("GET"===n.method)return bt({ok:!0,data:Object.assign({},h,{version:s})});if("POST"===n.method)try{const t=await n.json();let e=!1;if(r.K&&"function"==typeof r.K.get)try{const t=await r.K.get("config",{cacheTtl:30});t&&void 0!==JSON.parse(t).quotaAuto&&(e=!0)}catch(t){}const a=Object.assign(JSON.parse(JSON.stringify(h)),t);e||!1!==a.quotaAuto||Boolean(a.cfAccountId&&a.cfApiToken||r.CF_ACCOUNT_ID&&r.CF_API_TOKEN)&&(a.quotaAuto=!0),t.optimizer&&"object"==typeof t.optimizer&&(a.optimizer=Object.assign(a.optimizer,t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(a.preferredIPs=t.preferredIPs),await yt(r,a);const o=await vt(r,n.url);return bt({ok:!0,data:Object.assign({},o,{version:s}),msg:"\u5df2\u4fdd\u5b58\u5e76\u751f\u6548"})}catch(t){return bt({ok:!1,msg:"\u4fdd\u5b58\u5931\u8d25: "+(t.message||t)},500)}}if("reset"===i){if("POST"!==n.method)return bt({ok:!1,msg:"\u4ec5\u652f\u6301 POST"},405);try{return r.K&&"function"==typeof r.K.delete?(await r.K.delete("config"),bt({ok:!0,msg:"\u5df2\u91cd\u7f6e\uff1aKV \u5df2\u6e05\u7a7a\uff0c\u9762\u677f\u8fd8\u539f\u4e3a\u521d\u59cb\u90e8\u7f72\u72b6\u6001"})):bt({ok:!1,msg:"\u672a\u7ed1\u5b9a KV \u547d\u540d\u7a7a\u95f4\uff0c\u65e0\u9700\u91cd\u7f6e"},400)}catch(t){return bt({ok:!1,msg:"\u91cd\u7f6e\u5931\u8d25: "+(t.message||t)},500)}}if("status"===i)return bt({ok:!0,data:{version:s,kind:"novel"===d()?"\u5c0f\u8bf4\u6df7\u6dc6\u7248":"obfuscated"===d()?"\u6df7\u6dc6\u7248":"\u660e\u6587\u7248",host:a.hostname,path:g,region:n.cf&&n.cf.colo||"unknown",visitorCountry:n.cf&&n.cf.country||"",usageColo:await Ye(r),kv:!(!r.K||"function"!=typeof r.K.get),workersDev:/\.workers\.dev$/i.test(a.hostname)}});if("update"===i)try{const t=await async function(){const t=Date.now();if(u&&t-u.t<6e4)return u.r;const n="novel"===d()?"\u5c0f\u8bf4\u6df7\u6dc6":"obfuscated"===d()?"\u6df7\u6dc6":"\u660e\u6587";let r=null,a="",o="";const i="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent(e("Q0ZOZXh0")+"-\u660e\u6587\u7248.js");try{const t=await fetch(i,{headers:{"User-Agent":"Mozilla/5.0 ("+e("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});if(t.ok){const e=m(await t.text());e&&(r=e)}}catch(t){o=t&&t.message||String(t)}if(r){const o="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent("\u5c0f\u8bf4\u6df7\u6dc6"===n?e("Q0ZOZXh0")+"-\u5c0f\u8bf4\u6df7\u6dc6\u7248.js":"\u6df7\u6dc6"===n?e("Q0ZOZXh0")+"-\u6df7\u6dc6\u7248.js":e("Q0ZOZXh0")+"-\u660e\u6587\u7248.js");try{const t=await fetch(o,{headers:{"User-Agent":"Mozilla/5.0 ("+e("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});t.ok&&(a=await t.text())}catch(t){}return u={t:t,r:{current:s,kind:n,latest:r,hasUpdate:f(r,s)>0,code:a,checkedAt:t}},u.r}const l="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent(e("Q0ZOZXh0")+"-\u6df7\u6dc6\u7248.js");try{const t=await fetch(l,{headers:{"User-Agent":"Mozilla/5.0 ("+e("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});if(t.ok){const e=m(await t.text());e&&(r=e)}}catch(t){o=t&&t.message||String(t)}return r?(u={t:t,r:{current:s,kind:n,latest:r,hasUpdate:f(r,s)>0,code:"",checkedAt:t}},u.r):{current:s,kind:n,latest:null,hasUpdate:!1,code:"",error:o||"\u672a\u5728\u4ed3\u5e93\u4e2d\u627e\u5230\u7248\u672c\u4fe1\u606f"}}(),n={current:t.current,latest:t.latest,hasUpdate:t.hasUpdate,kind:t.kind,error:t.error||""};return t.hasUpdate&&t.code&&(n.code=t.code),bt({ok:!0,data:n})}catch(t){return bt({ok:!1,msg:"\u68c0\u6d4b\u5931\u8d25: "+(t.message||t)},500)}if("quota"===i)try{return bt({ok:!0,data:await $t(r,h)})}catch(t){return bt({ok:!1,msg:"\u67e5\u8be2\u5931\u8d25: "+(t.message||t)},500)}if("sub"===i){const t=a.searchParams.get("fmt")||"";try{const e=await dn(h,n.url,t,o,n.cf&&n.cf.colo,n.cf&&n.cf.country,r);return bt({ok:!0,type:e.type,body:e.body})}catch(t){return bt({ok:!1,msg:"\u8ba2\u9605\u751f\u6210\u5931\u8d25: "+(t.message||t)},500)}}if("candidates"===i){if("POST"!==n.method)return bt({ok:!1,msg:"\u4ec5\u652f\u6301 POST"},405);try{const t=await n.json().catch(()=>({})),e=await se(Object.assign({},h.optimizer,t));if(!e.candidates.length){const t=e.stats||{},n=[t.presetErr&&"\u9884\u8bbe\u6e90: "+t.presetErr,t.customErr&&"\u81ea\u5b9a\u4e49\u6e90: "+t.customErr].filter(Boolean).join("\uff1b");return bt({ok:!1,msg:"\u6ca1\u6709\u53ef\u6d4b\u7684 IP"+(n?"\uff08"+n+"\uff09":"\uff0c\u8bf7\u6362\u4e00\u4e2a\u6570\u636e\u6e90")},400)}return bt({ok:!0,data:e.candidates,stats:e.stats})}catch(t){return bt({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25: "+(t.message||t)},500)}}if("hwlist"===i)try{const e=a.searchParams.get("country")||"",n=a.searchParams.get("proto")||"tcp",r=await q(e);if(!r.length)return bt({ok:!1,msg:"VPN Gate \u5217\u8868\u4e3a\u7a7a\uff08\u53ef\u80fd\u88ab\u9650\u6d41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff09"},400);const o=r.slice(0,30),i=await tn(o,e=>{const n=String(tt(K(e.ovpnB64)).remote||"").split(/\s+/),r=parseInt(n[1],10)||0;return r?async function(e,n){const r=Date.now();try{const a=t({hostname:e,port:n});await Promise.race([a.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("tcp timeout")),2e3))]);const o=Date.now()-r;try{a.close()}catch(t){}return{ok:!0,delay:o}}catch(t){return{ok:!1,delay:-1}}}(e.ip,r):{ok:!1,delay:-1}}),s=o.map((t,e)=>{const r=tt(K(t.ovpnB64)),a=String(r.remote||"").split(/\s+/),o=parseInt(a[1],10)||443;return{host:t.host,ip:t.ip,port:o,tcp:o,udp:o,speed:t.speed,ping:t.ping,country:t.country,proto:r.proto||n,ovpn:r,alive:!(!i[e]||!i[e].ok),delay:i[e]&&i[e].ok?i[e].delay:-1}});return s.sort((t,e)=>(e.alive?1:0)-(t.alive?1:0)||(e.speed||0)-(t.speed||0)),bt({ok:!0,data:s,proto:n})}catch(t){return bt({ok:!1,msg:"VPN Gate \u62c9\u53d6\u5931\u8d25: "+(t.message||t)},500)}if("hwrefresh"===i)try{const t=await vt(r),e=await it(r,t,!0);return bt({ok:!0,data:e,count:e.length})}catch(t){return bt({ok:!1,msg:"VPN Gate \u5237\u65b0\u5931\u8d25: "+(t.message||t)},500)}if("domains"===i)try{const t=F[a.searchParams.get("source")||"wetest_cname"]||F.wetest_cname,n=await fetch(t.url,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout(6e3)});return n.ok?bt({ok:!0,data:function(t){const n=new Set,r=[],a=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let o;for(;o=a.exec(t);){const t=o[0].toLowerCase();!n.has(t)&&(t.includes("cloudflare")||t.includes(e("YmVzdGNm"))||t.includes("182682")||t.includes(e("MDkwMjI3"))||t.endsWith(".xyz")||t.endsWith(".top"))&&(n.add(t),r.push(t))}return r.slice(0,10)}(await n.text())}):bt({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25 HTTP "+n.status})}catch(t){return bt({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25: "+(t.message||t)},500)}}return kn()}(n,Object.assign({},r,{_ctx:a})).catch(In),scheduled:async(t,e,n)=>async function(t,e){en=e;const n=String(e.HOME_WAN_AUTO||"").toLowerCase();if("1"===n||"true"===n)try{if(await Sn(e,"hwrefreshAt",9e5)){const t=await vt(e);t.homeWan&&await it(e,t,!0)}}catch(t){}const r=String(e.BESTIP_AUTO||"").toLowerCase();if("1"===r||"true"===r)try{await Sn(e,"autobestAt",18e5)&&await async function(t){const e=await vt(t),n=(await se(e.optimizer)).candidates||[];if(!n.length)return{ok:!1,msg:"\u6ca1\u6709\u53ef\u6d4b\u7684 IP"};const r=(await async function(t,e,n){e=Math.max(1,Math.min(50,Number(e)||5)),n=Math.max(500,Number(n)||5e3);const r=[];let a=0;return await Promise.all(Array.from({length:e},async function(){for(;a<t.length;){const e=t[a++],o=await le(e.ip,e.port,n);r.push(o)}})),r.sort((t,e)=>(t.latency<0?1e9:t.latency)-(e.latency<0?1e9:e.latency)),r}(n,e.optimizer.threads||5,5e3)).filter(t=>t.ok).slice(0,e.optimizer.count||20);if(!r.length)return{ok:!1,msg:"\u6d4b\u901f\u65e0\u53ef\u7528 IP"};const a=r.map(t=>({ip:t.ip,port:t.port||443,name:""})),o=new Set((e.preferredIPs||[]).map(t=>t.ip)),i=new Set(a.map(t=>t.ip)),s=!(o.size===i.size&&[...i].every(t=>o.has(t)));s&&(e.preferredIPs=a,await yt(t,e));try{await St(t,e)}catch(t){}return{ok:!0,changed:s,count:a.length}}(e)}catch(t){}}(0,e).catch(()=>{})};