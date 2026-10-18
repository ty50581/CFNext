import{connect as e}from"cloudflare:sockets";const t=atob,r=new RegExp("^("+t("c29ja3M1")+"|http|https|ss):\\/\\/(.+)$","i"),n=new RegExp(t("Y2xhc2g=")+"|"+t("c2luZ2JveA==")+"|"+t("c2luZy1ib3g=")+"|"+t("c3VyZ2U=")+"|"+t("c3VyZmJvYXJk")+"|"+t("bG9vbg==")+"|"+t("cXVhbnR1bXVsdA==")),a=new RegExp(t("a2FyaW5n"),"i"),o=new RegExp("(?:"+t("dmxlc3M=")+"|"+t("dHJvamFu")+"):\\/\\/[^@\\s/]+@(\\[[0-9a-fA-F:]+\\]|[A-Za-z0-9.-]+)(?::(\\d{1,5}))?"),i=new RegExp("^"+t("dmxlc3M=")+":\\/\\/"),s="3.0.0",DEPLOY_EDITION="\u6df7\u6dc6\u7248",l="CFN"+"ext",c="luma"+"_auth";function d(){try{return"\u5c0f\u8bf4\u6df7\u6dc6\u7248"===DEPLOY_EDITION?"novel":"\u6df7\u6dc6\u7248"===DEPLOY_EDITION?"obfuscated":"plain"}catch(e){return"plain"}}const p=t("UEFJQ05J")+"/"+t("Q0ZOZXh0");let u=null;function h(e){const t=String(e||"").match(/(\d+)\.(\d+)\.(\d+)/);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function m(e,t){const r=h(e),n=h(t);if(!r||!n)return 0;for(let e=0;e<3;e++)if(r[e]!==n[e])return r[e]<n[e]?-1:1;return 0}function f(e){const t=e.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return t?t[1]:null}const b="application/octet-stream",g="text/yaml; charset=utf-8",v={Tracking:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Tracking.mrs",ct:b},Advertising:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Advertising.mrs",ct:b},AWAvenueAds:{url:"https://raw.githubusercontent.com/"+t("VEctVHdpbGlnaHQ=")+"/"+t("QVdBdmVudWU=")+"-Ads-Rule/main/Filters/"+t("QVdBdmVudWU=")+"-Ads-Rule-"+t("Q2xhc2g=")+".yaml",ct:g},Direct:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Direct.mrs",ct:b},Private:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Private.mrs",ct:b},Download:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Download.mrs",ct:b},AppleCN:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/AppleCN.mrs",ct:b},China:{url:"https://cdn.jsdelivr.net/gh/"+t("YmxhY2ttYXRyaXg3")+"/"+t("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+t("Q2xhc2g=")+"/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml",ct:g},AI:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/AI.mrs",ct:b},Telegram:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Telegram.mrs",ct:b},Twitter:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Twitter.mrs",ct:b},SocialMedia:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/SocialMedia.mrs",ct:b},Netflix:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Netflix.mrs",ct:b},[t("WW91VHViZQ==")]:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/"+t("WW91VHViZQ==")+".mrs",ct:b},Google:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Google.mrs",ct:b},Microsoft:{url:"https://cdn.jsdelivr.net/gh/"+t("YmxhY2ttYXRyaXg3")+"/"+t("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+t("Q2xhc2g=")+"/Microsoft/Microsoft.yaml",ct:g},Proxy:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/domain/Proxy.mrs",ct:b},Spotify:{url:"https://github.com/"+t("RHVzdGluV2lu")+"/"+t("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+t("bWlob21v")+"-ruleset/spotify.mrs",ct:b},TikTok:{url:"https://github.com/"+t("RHVzdGluV2lu")+"/"+t("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+t("bWlob21v")+"-ruleset/tiktok.mrs",ct:b},disney:{url:"https://github.com/"+t("RHVzdGluV2lu")+"/"+t("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+t("bWlob21v")+"-ruleset/disney.mrs",ct:b},github:{url:"https://rule.kelee.one/"+t("Q2xhc2g=")+"/GitHub.yaml",ct:g},PrivateIP:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/ip/Private.mrs",ct:b},TelegramIP:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/ip/Telegram.mrs",ct:b},[t("UHJveHlJUA==")]:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/ip/Proxy.mrs",ct:b},ChinaIP:{url:"https://github.com/"+t("NjY2T1M=")+"/rules/raw/release/"+t("bWlob21v")+"/ip/China.mrs",ct:b}},x=new Map,y=new Map;function w(e,t){return new Response(e,{status:200,headers:{"Content-Type":t,"Cache-Control":"public, max-age=86400"}})}const k=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],S=["104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],P=["2400:cb00::/32","2606:4700::/32","2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29","2c0f:f248::/32"],I=["2606:4700::/32","2400:cb00::/32","2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"];let C=P.slice(),A=0;function $(e){if(!se(e=String(e||"")))return!1;if(e.indexOf(":")>=0)return P.some(t=>function(e,t){const[r,n]=t.split("/"),a=parseInt(n,10),o=e=>{const t=e.indexOf("::");let r;if(t>=0){const n=e.slice(0,t).split(":").filter(Boolean),a=e.slice(t+2).split(":").filter(Boolean),o=8-n.length-a.length;r=[...n,...Array(o).fill("0"),...a]}else r=e.split(":");return r.map(e=>e.padStart(4,"0"))},i=e=>e.map(e=>parseInt(e,16).toString(2).padStart(16,"0")).join("");return i(o(e)).slice(0,a)===i(o(r)).slice(0,a)}(e,t));const t=e.split(".").map(Number),r=(t[0]<<24|t[1]<<16|t[2]<<8|t[3])>>>0;return de.some(([e,t])=>r>=e&&r<=t)}const V={HK:"\u9999\u6e2f",TW:"\u53f0\u6e7e",MO:"\u6fb3\u95e8",JP:"\u65e5\u672c",SG:"\u65b0\u52a0\u5761",US:"\u7f8e\u56fd",KR:"\u97e9\u56fd",DE:"\u5fb7\u56fd",FR:"\u6cd5\u56fd",GB:"\u82f1\u56fd",CA:"\u52a0\u62ff\u5927",AU:"\u6fb3\u5927\u5229\u4e9a",SE:"\u745e\u5178",NL:"\u8377\u5170",FI:"\u82ac\u5170",NO:"\u632a\u5a01",DK:"\u4e39\u9ea6",CH:"\u745e\u58eb",IT:"\u610f\u5927\u5229",ES:"\u897f\u73ed\u7259",PT:"\u8461\u8404\u7259",IE:"\u7231\u5c14\u5170",BE:"\u6bd4\u5229\u65f6",AT:"\u5965\u5730\u5229",PL:"\u6ce2\u5170",CZ:"\u6377\u514b",RO:"\u7f57\u9a6c\u5c3c\u4e9a",HU:"\u5308\u7259\u5229",GR:"\u5e0c\u814a",RU:"\u4fc4\u7f57\u65af",TR:"\u571f\u8033\u5176",UA:"\u4e4c\u514b\u5170",IN:"\u5370\u5ea6",TH:"\u6cf0\u56fd",MY:"\u9a6c\u6765\u897f\u4e9a",VN:"\u8d8a\u5357",PH:"\u83f2\u5f8b\u5bbe",ID:"\u5370\u5c3c",BR:"\u5df4\u897f",MX:"\u58a8\u897f\u54e5",AR:"\u963f\u6839\u5ef7",CL:"\u667a\u5229",ZA:"\u5357\u975e",EG:"\u57c3\u53ca",AE:"\u963f\u8054\u914b",IL:"\u4ee5\u8272\u5217",NZ:"\u65b0\u897f\u5170",KZ:"\u54c8\u8428\u514b\u65af\u5766",SA:"\u6c99\u7279"},T={};for(const e in V)T[V[e]]=e;T["\u5370\u5ea6\u5c3c\u897f\u4e9a"]="ID";const U={HKG:"\u9999\u6e2f",TPE:"\u53f0\u6e7e",KHH:"\u53f0\u6e7e",TSA:"\u53f0\u6e7e",RMQ:"\u53f0\u6e7e",NRT:"\u65e5\u672c",KIX:"\u65e5\u672c",HND:"\u65e5\u672c",CTS:"\u65e5\u672c",FUK:"\u65e5\u672c",SIN:"\u65b0\u52a0\u5761",ICN:"\u97e9\u56fd",KUL:"\u9a6c\u6765\u897f\u4e9a",BKK:"\u6cf0\u56fd",MNL:"\u83f2\u5f8b\u5bbe",SGN:"\u8d8a\u5357",HAN:"\u8d8a\u5357",CGK:"\u5370\u5c3c",DEL:"\u5370\u5ea6",BOM:"\u5370\u5ea6",MAA:"\u5370\u5ea6",DXB:"\u963f\u8054\u914b",TLV:"\u4ee5\u8272\u5217",RUH:"\u6c99\u7279",JED:"\u6c99\u7279",DOH:"\u5361\u5854\u5c14",FRA:"\u5fb7\u56fd",MUC:"\u5fb7\u56fd",DUS:"\u5fb7\u56fd",HAM:"\u5fb7\u56fd",BER:"\u5fb7\u56fd",CGN:"\u5fb7\u56fd",STR:"\u5fb7\u56fd",AMS:"\u8377\u5170",CDG:"\u6cd5\u56fd",MRS:"\u6cd5\u56fd",NCE:"\u6cd5\u56fd",LHR:"\u82f1\u56fd",LGW:"\u82f1\u56fd",MAN:"\u82f1\u56fd",MAD:"\u897f\u73ed\u7259",BCN:"\u897f\u73ed\u7259",MXP:"\u610f\u5927\u5229",FCO:"\u610f\u5927\u5229",PMO:"\u610f\u5927\u5229",ZRH:"\u745e\u58eb",GVA:"\u745e\u58eb",VIE:"\u5965\u5730\u5229",WAW:"\u6ce2\u5170",PRG:"\u6377\u514b",ARN:"\u745e\u5178",CPH:"\u4e39\u9ea6",OSL:"\u632a\u5a01",HEL:"\u82ac\u5170",DUB:"\u7231\u5c14\u5170",LIS:"\u8461\u8404\u7259",BRU:"\u6bd4\u5229\u65f6",BUD:"\u5308\u7259\u5229",OTP:"\u7f57\u9a6c\u5c3c\u4e9a",ATH:"\u5e0c\u814a",IST:"\u571f\u8033\u5176",SVO:"\u4fc4\u7f57\u65af",DME:"\u4fc4\u7f57\u65af",LED:"\u4fc4\u7f57\u65af",JFK:"\u7f8e\u56fd",EWR:"\u7f8e\u56fd",LAX:"\u7f8e\u56fd",SJC:"\u7f8e\u56fd",SFO:"\u7f8e\u56fd",SEA:"\u7f8e\u56fd",ORD:"\u7f8e\u56fd",DFW:"\u7f8e\u56fd",IAD:"\u7f8e\u56fd",ATL:"\u7f8e\u56fd",MIA:"\u7f8e\u56fd",BOS:"\u7f8e\u56fd",DEN:"\u7f8e\u56fd",PHX:"\u7f8e\u56fd",MSP:"\u7f8e\u56fd",DTW:"\u7f8e\u56fd",PHL:"\u7f8e\u56fd",CLT:"\u7f8e\u56fd",LAS:"\u7f8e\u56fd",PDX:"\u7f8e\u56fd",SLC:"\u7f8e\u56fd",SAN:"\u7f8e\u56fd",AUS:"\u7f8e\u56fd",IAH:"\u7f8e\u56fd",MCI:"\u7f8e\u56fd",BNA:"\u7f8e\u56fd",SMF:"\u7f8e\u56fd",RDU:"\u7f8e\u56fd",YYZ:"\u52a0\u62ff\u5927",YVR:"\u52a0\u62ff\u5927",YUL:"\u52a0\u62ff\u5927",YOW:"\u52a0\u62ff\u5927",YYC:"\u52a0\u62ff\u5927",MEX:"\u58a8\u897f\u54e5",GRU:"\u5df4\u897f",GIG:"\u5df4\u897f",EZE:"\u963f\u6839\u5ef7",SCL:"\u667a\u5229",SYD:"\u6fb3\u5927\u5229\u4e9a",MEL:"\u6fb3\u5927\u5229\u4e9a",BNE:"\u6fb3\u5927\u5229\u4e9a",PER:"\u6fb3\u5927\u5229\u4e9a",AKL:"\u65b0\u897f\u5170",JNB:"\u5357\u975e",CAI:"\u57c3\u53ca",ALA:"\u54c8\u8428\u514b\u65af\u5766",ALB:"\u7f8e\u56fd",BDL:"\u7f8e\u56fd",BHM:"\u7f8e\u56fd",BIL:"\u7f8e\u56fd",BOI:"\u7f8e\u56fd",BUF:"\u7f8e\u56fd",BUR:"\u7f8e\u56fd",BTV:"\u7f8e\u56fd",BWI:"\u7f8e\u56fd",CAE:"\u7f8e\u56fd",CHA:"\u7f8e\u56fd",CLE:"\u7f8e\u56fd",CMH:"\u7f8e\u56fd",CPR:"\u7f8e\u56fd",DAL:"\u7f8e\u56fd",DAY:"\u7f8e\u56fd",DSM:"\u7f8e\u56fd",DTT:"\u7f8e\u56fd",ECP:"\u7f8e\u56fd",EYW:"\u7f8e\u56fd",FLL:"\u7f8e\u56fd",GRR:"\u7f8e\u56fd",GSP:"\u7f8e\u56fd",HIO:"\u7f8e\u56fd",HNL:"\u7f8e\u56fd",ICT:"\u7f8e\u56fd",IND:"\u7f8e\u56fd",JAX:"\u7f8e\u56fd",LBB:"\u7f8e\u56fd",MCO:"\u7f8e\u56fd",MDW:"\u7f8e\u56fd",MEM:"\u7f8e\u56fd",MFE:"\u7f8e\u56fd",MFR:"\u7f8e\u56fd",MSY:"\u7f8e\u56fd",OAK:"\u7f8e\u56fd",OKC:"\u7f8e\u56fd",OMA:"\u7f8e\u56fd",ONT:"\u7f8e\u56fd",ORF:"\u7f8e\u56fd",PIT:"\u7f8e\u56fd",PSC:"\u7f8e\u56fd",PVD:"\u7f8e\u56fd",RIC:"\u7f8e\u56fd",RNO:"\u7f8e\u56fd",RSW:"\u7f8e\u56fd",SAT:"\u7f8e\u56fd",SDF:"\u7f8e\u56fd",SNA:"\u7f8e\u56fd",STL:"\u7f8e\u56fd",SWF:"\u7f8e\u56fd",SYR:"\u7f8e\u56fd",TPA:"\u7f8e\u56fd",TUL:"\u7f8e\u56fd",TUS:"\u7f8e\u56fd",CTS:"\u65e5\u672c",FUK:"\u65e5\u672c",HND:"\u65e5\u672c",BLR:"\u5370\u5ea6",CMB:"\u65af\u91cc\u5170\u5361",KWI:"\u79d1\u5a01\u7279",AMM:"\u7ea6\u65e6",BEY:"\u9ece\u5df4\u5ae9",NBO:"\u80af\u5c3c\u4e9a",LOS:"\u5c3c\u65e5\u5229\u4e9a",ACC:"\u52a0\u7eb3",CPT:"\u5357\u975e",LIM:"\u79d8\u9c81",BOG:"\u54e5\u4f26\u6bd4\u4e9a",PTY:"\u5df4\u62ff\u9a6c"},M=Object.assign({},V,U,{USA:"\u7f8e\u56fd"}),R=U,D=["https://"+t("YmVzdGNm")+".pages.dev/random-region/HK/100.txt","https://"+t("YmVzdGNm")+".pages.dev/random-region/TW/100.txt","https://"+t("YmVzdGNm")+".pages.dev/random-region/JP/100.txt","https://"+t("YmVzdGNm")+".pages.dev/random-region/SG/100.txt","https://"+t("YmVzdGNm")+".pages.dev/random-region/US/100.txt","https://"+t("YmVzdGNm")+".pages.dev/random-region/KR/100.txt"].join("\n"),E=/random-region\/[A-Z]{2,}\/\d+\.txt/i,N={uuid:"",path:"",admin:"",login:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,[t("YWxwbg==")]:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:300,countryLabel:"",loadBalance:!0,ipv6Mode:"off",cpuLimit:!1,cfAccountId:"",cfApiToken:"",quotaAuto:!1,quotaStrict:!1,tgBotToken:"",tgChatID:"",homeWan:!1,homeWanNodes:[],[t("cHJveHlJUA==")]:"",outboundProxy:"",outboundMode:"",[t("d2FycEZyb250")]:"",mode:"",warpEnable:!1,warpConf:"",warpEps:"",warpName:"",masqueEnable:!1,masqueConf:"",masqueName:"",masqueNet:"",preferredDomains:"https://"+t("YmVzdGNm")+".pages.dev/random-region/HK/100.txt\nhttps://"+t("YmVzdGNm")+".pages.dev/random-region/TW/100.txt\nhttps://"+t("YmVzdGNm")+".pages.dev/random-region/JP/100.txt\nhttps://"+t("YmVzdGNm")+".pages.dev/random-region/SG/100.txt\nhttps://"+t("YmVzdGNm")+".pages.dev/random-region/US/100.txt\nhttps://"+t("YmVzdGNm")+".pages.dev/random-region/KR/100.txt",preferredIPs:[],optimizer:{source:"wetest_v4",sourceURL:"",fallbackPool:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:"all",ipType:["IPv4"],isp:["\u79fb\u52a8","\u8054\u901a","\u7535\u4fe1"]}},L=["cloudflare.com","www.cloudflare.com","speed.cloudflare.com"],F=["104.16.128.11","172.67.72.4","104.17.201.77","104.16.66.7","104.16.88.7","104.16.98.7","104.17.2.7","104.17.44.9","104.18.34.34","104.18.7.34","104.19.191.31","104.19.1.1","104.20.15.15","104.20.1.1","104.21.23.1","104.21.2.1","104.24.12.10","104.25.0.1","104.26.1.1","162.159.128.1"],H=[{label:"\u9999\u6e2f",region:"HK",url:"https://"+t("YmVzdGNm")+".pages.dev/random-region/HK/100.txt",count:12},{label:"\u65e5\u672c",region:"JP",url:"https://"+t("YmVzdGNm")+".pages.dev/random-region/JP/100.txt",count:12},{label:"\u7f8e\u56fd",region:"US",url:"https://"+t("YmVzdGNm")+".pages.dev/random-region/US/100.txt",count:12},{label:"\u65b0\u52a0\u5761",region:"SG",url:"https://"+t("YmVzdGNm")+".pages.dev/random-region/SG/100.txt",count:12},{label:"\u53f0\u6e7e",region:"TW",url:"https://"+t("YmVzdGNm")+".pages.dev/random-region/TW/100.txt",count:12}],W=["104.17.127.180#\u4f18\u9009IP-001","104.16.123.96#\u4f18\u9009IP-002","104.16.124.96#\u4f18\u9009IP-003","104.16.125.96#\u4f18\u9009IP-004","104.16.126.96#\u4f18\u9009IP-005","104.16.127.96#\u4f18\u9009IP-006","104.16.132.229#\u4f18\u9009IP-007","104.16.248.248#\u4f18\u9009IP-008","104.16.249.249#\u4f18\u9009IP-009","162.159.0.1#\u4f18\u9009IP-010","188.114.96.1#\u4f18\u9009IP-011","104.17.24.252#\u4f18\u9009IP-012","188.114.99.52#\u4f18\u9009IP-013","162.159.94.229#\u4f18\u9009IP-014","162.159.5.175#\u4f18\u9009IP-015","104.18.119.34#\u4f18\u9009IP-016","104.21.213.24#\u4f18\u9009IP-017","104.17.234.5#\u4f18\u9009IP-018","104.16.245.187#\u4f18\u9009IP-019","172.67.64.211#\u4f18\u9009IP-020","172.67.64.12#\u4f18\u9009IP-021","104.18.43.224#\u4f18\u9009IP-022","104.18.40.93#\u4f18\u9009IP-023","104.18.37.92#\u4f18\u9009IP-024","104.18.47.234#\u4f18\u9009IP-025","104.18.42.54#\u4f18\u9009IP-026","172.64.144.49#\u4f18\u9009IP-027","172.64.146.15#\u4f18\u9009IP-028","104.17.185.207#\u4f18\u9009IP-029","104.17.101.139#\u4f18\u9009IP-030","162.159.44.215#\u4f18\u9009IP-031","162.159.44.214#\u4f18\u9009IP-032","104.18.217.109#\u4f18\u9009IP-033","172.65.127.225#\u4f18\u9009IP-034","104.18.184.243#\u4f18\u9009IP-035","162.159.137.205#\u4f18\u9009IP-036","172.65.64.7#\u4f18\u9009IP-037","104.25.45.44#\u4f18\u9009IP-038","104.19.88.253#\u4f18\u9009IP-039","162.159.136.73#\u4f18\u9009IP-040","104.18.185.40#\u4f18\u9009IP-041","104.25.141.168#\u4f18\u9009IP-042","104.25.246.123#\u4f18\u9009IP-043","104.24.54.254#\u4f18\u9009IP-044","104.19.123.4#\u4f18\u9009IP-045","188.114.98.144#\u4f18\u9009IP-046","188.114.99.18#\u4f18\u9009IP-047","104.17.127.106#\u4f18\u9009IP-048","162.159.4.175#\u4f18\u9009IP-049","104.18.255.187#\u4f18\u9009IP-050","172.65.173.221#\u4f18\u9009IP-051","104.18.176.111#\u4f18\u9009IP-052","104.25.122.6#\u4f18\u9009IP-053","188.114.96.116#\u4f18\u9009IP-054","104.25.214.211#\u4f18\u9009IP-055","104.16.223.195#\u4f18\u9009IP-056","104.25.101.186#\u4f18\u9009IP-057","172.64.81.44#\u4f18\u9009IP-058","104.25.143.238#\u4f18\u9009IP-059","188.114.99.114#\u4f18\u9009IP-060","104.19.169.53#\u4f18\u9009IP-061","104.16.113.211#\u4f18\u9009IP-062","104.27.40.81#\u4f18\u9009IP-063","188.114.98.91#\u4f18\u9009IP-064","162.159.236.5#\u4f18\u9009IP-065","104.25.44.144#\u4f18\u9009IP-066","162.159.46.167#\u4f18\u9009IP-067","104.18.84.180#\u4f18\u9009IP-068","104.18.196.199#\u4f18\u9009IP-069","104.24.155.234#\u4f18\u9009IP-070","162.159.228.244#\u4f18\u9009IP-071","162.159.235.27#\u4f18\u9009IP-072","104.19.214.25#\u4f18\u9009IP-073","104.19.168.107#\u4f18\u9009IP-074","104.24.244.237#\u4f18\u9009IP-075","104.27.66.179#\u4f18\u9009IP-076","104.24.2.253#\u4f18\u9009IP-077","104.21.61.179#\u4f18\u9009IP-078","104.21.114.216#\u4f18\u9009IP-079","188.114.98.53#\u4f18\u9009IP-080","172.65.145.187#\u4f18\u9009IP-081","188.114.96.255#\u4f18\u9009IP-082","104.25.245.147#\u4f18\u9009IP-083","172.66.161.31#\u4f18\u9009IP-084","104.18.133.24#\u4f18\u9009IP-085","188.114.99.155#\u4f18\u9009IP-086","172.64.34.109#\u4f18\u9009IP-087","172.64.145.202#\u4f18\u9009IP-088","104.19.78.30#\u4f18\u9009IP-089","104.17.118.180#\u4f18\u9009IP-090","104.17.13.179#\u4f18\u9009IP-091","172.65.35.169#\u4f18\u9009IP-092","104.16.0.133#\u4f18\u9009IP-093","104.16.238.98#\u4f18\u9009IP-094","104.18.28.140#\u4f18\u9009IP-095","104.19.115.243#\u4f18\u9009IP-096","104.24.58.243#\u4f18\u9009IP-097","104.27.207.36#\u4f18\u9009IP-098","104.21.192.230#\u4f18\u9009IP-099","104.25.20.146#\u4f18\u9009IP-100","104.27.113.151#\u4f18\u9009IP-101","104.24.230.144#\u4f18\u9009IP-102","172.65.134.100#\u4f18\u9009IP-103","188.114.96.94#\u4f18\u9009IP-104","104.25.197.107#\u4f18\u9009IP-105","104.16.108.18#\u4f18\u9009IP-106","172.64.233.36#\u4f18\u9009IP-107","172.67.163.14#\u4f18\u9009IP-108","104.24.230.213#\u4f18\u9009IP-109","104.19.106.1#\u4f18\u9009IP-110","104.27.72.4#\u4f18\u9009IP-111","104.21.57.47#\u4f18\u9009IP-112","172.65.162.213#\u4f18\u9009IP-113","172.67.255.83#\u4f18\u9009IP-114","172.67.189.246#\u4f18\u9009IP-115","162.159.230.149#\u4f18\u9009IP-116","162.159.197.16#\u4f18\u9009IP-117","172.67.103.87#\u4f18\u9009IP-118","162.159.237.243#\u4f18\u9009IP-119","104.25.193.135#\u4f18\u9009IP-120","104.18.141.27#\u4f18\u9009IP-121","172.65.11.191#\u4f18\u9009IP-122","104.24.184.158#\u4f18\u9009IP-123","188.114.97.52#\u4f18\u9009IP-124","104.27.4.144#\u4f18\u9009IP-125","104.25.93.154#\u4f18\u9009IP-126","172.66.199.166#\u4f18\u9009IP-127","172.67.64.94#\u4f18\u9009IP-128","104.27.94.231#\u4f18\u9009IP-129","104.24.168.96#\u4f18\u9009IP-130","104.18.173.224#\u4f18\u9009IP-131","172.67.173.89#\u4f18\u9009IP-132","104.17.107.217#\u4f18\u9009IP-133","188.114.97.91#\u4f18\u9009IP-134","104.17.195.184#\u4f18\u9009IP-135","162.159.14.18#\u4f18\u9009IP-136","172.67.229.44#\u4f18\u9009IP-137","104.24.51.58#\u4f18\u9009IP-138","104.19.97.238#\u4f18\u9009IP-139","104.25.161.217#\u4f18\u9009IP-140","104.17.146.117#\u4f18\u9009IP-141","172.67.161.136#\u4f18\u9009IP-142","104.17.99.0#\u4f18\u9009IP-143","104.25.100.203#\u4f18\u9009IP-144","104.19.23.222#\u4f18\u9009IP-145","188.114.96.141#\u4f18\u9009IP-146","104.19.247.23#\u4f18\u9009IP-147","104.25.24.66#\u4f18\u9009IP-148","104.16.123.26#\u4f18\u9009IP-149","104.27.23.242#\u4f18\u9009IP-150","104.25.36.200#\u4f18\u9009IP-151","104.17.195.133#\u4f18\u9009IP-152","104.16.68.175#\u4f18\u9009IP-153","188.114.98.19#\u4f18\u9009IP-154","104.16.218.231#\u4f18\u9009IP-155","104.18.28.48#\u4f18\u9009IP-156","162.159.143.225#\u4f18\u9009IP-157","162.159.19.201#\u4f18\u9009IP-158","104.25.166.112#\u4f18\u9009IP-159","104.16.201.45#\u4f18\u9009IP-160","104.16.91.33#\u4f18\u9009IP-161","172.67.82.86#\u4f18\u9009IP-162","104.16.11.246#\u4f18\u9009IP-163","188.114.97.61#\u4f18\u9009IP-164","104.17.240.245#\u4f18\u9009IP-165","172.66.157.150#\u4f18\u9009IP-166","104.17.25.173#\u4f18\u9009IP-167","104.18.26.28#\u4f18\u9009IP-168","104.18.123.15#\u4f18\u9009IP-169","104.25.124.155#\u4f18\u9009IP-170","188.114.96.64#\u4f18\u9009IP-171","104.18.18.214#\u4f18\u9009IP-172","104.17.46.187#\u4f18\u9009IP-173","104.17.153.58#\u4f18\u9009IP-174","188.114.96.89#\u4f18\u9009IP-175","172.67.174.143#\u4f18\u9009IP-176","104.25.251.220#\u4f18\u9009IP-177","104.27.195.79#\u4f18\u9009IP-178","162.159.153.10#\u4f18\u9009IP-179","104.25.129.238#\u4f18\u9009IP-180","172.65.3.67#\u4f18\u9009IP-181","172.67.232.109#\u4f18\u9009IP-182","104.18.178.193#\u4f18\u9009IP-183","104.19.78.144#\u4f18\u9009IP-184","104.18.63.107#\u4f18\u9009IP-185","104.19.69.150#\u4f18\u9009IP-186","104.25.73.92#\u4f18\u9009IP-187","172.67.195.152#\u4f18\u9009IP-188","172.65.184.114#\u4f18\u9009IP-189","172.65.202.216#\u4f18\u9009IP-190","172.65.21.190#\u4f18\u9009IP-191","104.19.32.220#\u4f18\u9009IP-192","104.18.211.8#\u4f18\u9009IP-193","104.17.160.131#\u4f18\u9009IP-194","162.159.6.39#\u4f18\u9009IP-195","162.159.43.223#\u4f18\u9009IP-196","104.21.224.5#\u4f18\u9009IP-197","104.25.18.216#\u4f18\u9009IP-198","162.159.6.246#\u4f18\u9009IP-199","104.24.46.127#\u4f18\u9009IP-200","104.17.87.46#\u4f18\u9009IP-201","188.114.97.80#\u4f18\u9009IP-202","188.114.97.108#\u4f18\u9009IP-203","162.159.241.11#\u4f18\u9009IP-204","188.114.97.0#\u4f18\u9009IP-205","188.114.99.14#\u4f18\u9009IP-206","104.19.68.127#\u4f18\u9009IP-207","162.159.10.45#\u4f18\u9009IP-208","104.25.181.74#\u4f18\u9009IP-209","104.24.178.200#\u4f18\u9009IP-210","188.114.96.164#\u4f18\u9009IP-211","104.24.41.240#\u4f18\u9009IP-212","104.17.97.72#\u4f18\u9009IP-213","104.16.77.112#\u4f18\u9009IP-214","104.19.181.118#\u4f18\u9009IP-215","172.67.165.245#\u4f18\u9009IP-216","104.17.169.109#\u4f18\u9009IP-217","172.65.44.103#\u4f18\u9009IP-218","188.114.97.63#\u4f18\u9009IP-219","172.65.47.182#\u4f18\u9009IP-220","104.17.245.237#\u4f18\u9009IP-221","162.159.2.86#\u4f18\u9009IP-222","188.114.96.151#\u4f18\u9009IP-223","172.65.139.108#\u4f18\u9009IP-224","172.65.118.105#\u4f18\u9009IP-225","104.21.7.133#\u4f18\u9009IP-226","162.159.134.174#\u4f18\u9009IP-227","104.18.194.107#\u4f18\u9009IP-228","188.114.97.21#\u4f18\u9009IP-229","162.159.9.18#\u4f18\u9009IP-230","104.18.41.168#\u4f18\u9009IP-231","162.159.192.111#\u4f18\u9009IP-232","162.159.240.54#\u4f18\u9009IP-233","104.17.0.4#\u4f18\u9009IP-234","104.25.86.143#\u4f18\u9009IP-235","104.27.97.130#\u4f18\u9009IP-236","172.67.127.122#\u4f18\u9009IP-237","104.25.33.126#\u4f18\u9009IP-238","104.25.223.90#\u4f18\u9009IP-239","104.25.123.130#\u4f18\u9009IP-240","172.65.167.52#\u4f18\u9009IP-241","172.67.159.243#\u4f18\u9009IP-242","104.25.113.22#\u4f18\u9009IP-243","188.114.98.27#\u4f18\u9009IP-244","162.159.198.200#\u4f18\u9009IP-245","104.17.76.49#\u4f18\u9009IP-246","104.21.215.255#\u4f18\u9009IP-247","172.67.131.200#\u4f18\u9009IP-248","162.159.135.234#\u4f18\u9009IP-249","172.65.45.102#\u4f18\u9009IP-250","172.66.164.60#\u4f18\u9009IP-251","162.159.26.248#\u4f18\u9009IP-252","162.159.90.82#\u4f18\u9009IP-253","172.65.50.167#\u4f18\u9009IP-254","162.159.236.19#\u4f18\u9009IP-255","104.19.143.220#\u4f18\u9009IP-256","104.17.151.244#\u4f18\u9009IP-257","104.17.121.245#\u4f18\u9009IP-258","104.18.144.168#\u4f18\u9009IP-259","162.159.228.231#\u4f18\u9009IP-260","104.17.100.40#\u4f18\u9009IP-261","104.27.116.114#\u4f18\u9009IP-262","162.159.199.220#\u4f18\u9009IP-263","104.20.17.160#\u4f18\u9009IP-264","104.25.62.39#\u4f18\u9009IP-265","104.27.20.220#\u4f18\u9009IP-266","172.65.118.85#\u4f18\u9009IP-267","104.19.83.33#\u4f18\u9009IP-268","188.114.96.238#\u4f18\u9009IP-269","162.159.42.67#\u4f18\u9009IP-270","104.27.46.114#\u4f18\u9009IP-271","104.25.126.144#\u4f18\u9009IP-272","104.25.173.14#\u4f18\u9009IP-273","104.24.46.107#\u4f18\u9009IP-274","104.25.109.0#\u4f18\u9009IP-275","162.159.137.71#\u4f18\u9009IP-276","104.25.238.28#\u4f18\u9009IP-277","104.27.124.239#\u4f18\u9009IP-278","104.24.34.149#\u4f18\u9009IP-279","104.19.246.234#\u4f18\u9009IP-280","162.159.10.243#\u4f18\u9009IP-281","104.27.96.232#\u4f18\u9009IP-282","172.65.78.200#\u4f18\u9009IP-283","104.24.25.178#\u4f18\u9009IP-284","104.24.84.86#\u4f18\u9009IP-285","104.25.238.237#\u4f18\u9009IP-286","104.16.45.249#\u4f18\u9009IP-287","104.16.234.241#\u4f18\u9009IP-288","104.24.18.62#\u4f18\u9009IP-289","172.65.45.248#\u4f18\u9009IP-290","104.25.169.144#\u4f18\u9009IP-291","104.27.27.106#\u4f18\u9009IP-292","162.159.43.85#\u4f18\u9009IP-293","172.67.71.106#\u4f18\u9009IP-294","162.159.228.164#\u4f18\u9009IP-295","104.24.250.89#\u4f18\u9009IP-296","104.18.185.26#\u4f18\u9009IP-297","104.27.21.175#\u4f18\u9009IP-298","104.24.49.39#\u4f18\u9009IP-299","172.67.85.54#\u4f18\u9009IP-300"],z=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org",t("YmVzdGNm")+".top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf."+t("MDkwMjI3")+".xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org",t("YmVzdGNm")+"."+t("MDMwMTAx")+".xyz","cdns.doon.eu.org","fn.130519.xyz","saas.sin.fan"].join("\n"),_=new Set([80,8080,8880,2052,2082,2086,2095]),G={wetest_v4:{label:"\u5fae\u6d4b\u7f51 IPv4",url:"https://www.wetest.vip/page/cloudflare/address_v4.html"},wetest_v6:{label:"\u5fae\u6d4b\u7f51 IPv6",url:"https://www.wetest.vip/page/cloudflare/address_v6.html"},[t("YmVzdGNm")]:{label:"\u4f18\u9009 IP \u5217\u8868",url:"https://cf."+t("MDkwMjI3")+".xyz/ip.164746.xyz"},hostmonit:{label:"HostMonit \u4f18\u9009",url:"https://stock.hostmonit.com/CloudFlareYes"},wetest_cname:{label:"\u5fae\u6d4b\u7f51 \u4f18\u9009\u57df\u540d",url:"https://www.wetest.vip/page/cloudflare/cname.html"}},O=new TextEncoder,Z=new TextDecoder,Y=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],J=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function j(e,t){return(e<<t|e>>>32-t)>>>0}function X(e){const t=O.encode(String(e)),r=8*t.length,n=1+(t.length+8>>6)<<6,a=new Uint8Array(n);a.set(t),a[t.length]=128;const o=new DataView(a.buffer);o.setUint32(n-8,r>>>0,!0),o.setUint32(n-4,Math.floor(r/4294967296),!0);let i=1732584193,s=4023233417,l=2562383102,c=271733878;for(let e=0;e<n;e+=64){const t=new Uint32Array(16);for(let r=0;r<16;r++)t[r]=o.getUint32(e+4*r,!0);let r=i,n=s,a=l,d=c;for(let e=0;e<64;e++){let o,i;e<16?(o=n&a|~n&d,i=e):e<32?(o=d&n|~d&a,i=(5*e+1)%16):e<48?(o=n^a^d,i=(3*e+5)%16):(o=a^(n|~d),i=7*e%16);const s=r+o+J[e]+t[i]>>>0;r=d,d=a,a=n,n=n+j(s,Y[e])>>>0}i=i+r>>>0,s=s+n>>>0,l=l+a>>>0,c=c+d>>>0}let d="";for(const e of[i,s,l,c])d+=(255&e).toString(16).padStart(2,"0"),d+=(e>>>8&255).toString(16).padStart(2,"0"),d+=(e>>>16&255).toString(16).padStart(2,"0"),d+=(e>>>24&255).toString(16).padStart(2,"0");return d}function Q(e){const t=X(String(e||"")+"|"+l);return[t.slice(0,8),t.slice(8,12),"4"+t.slice(13,16),"8"+t.slice(17,20),t.slice(20)].join("-")}function B(e,t=443){if(!(e=String(e||"").trim()))return{host:"",port:t};if(e.startsWith("[")){const r=e.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:r?r[1]:e.replace(/^\[|\]$/g,""),port:r&&r[2]?parseInt(r[2]):t}}const r=e.lastIndexOf(":");return r>0&&/^\d+$/.test(e.slice(r+1))?{host:e.slice(0,r),port:parseInt(e.slice(r+1))}:{host:e,port:t}}async function q(e){let t=null,r="";for(const n of["https://www.vpngate.net/api/iphone/","http://www.vpngate.net/api/iphone/"])try{const e=await fetch(n,{headers:{"User-Agent":"Mozilla/5.0",Accept:"text/plain"},cf:{cacheTtl:1800,cacheEverything:!0},signal:AbortSignal.timeout(8e3)});if(!e||!e.ok){t=new Error("HTTP "+(e&&e.status));continue}if(r=await e.text(),r&&r.length)break}catch(e){t=e}if(!r)throw t||new Error("VPN Gate \u8282\u70b9\u6e90\u6ca1\u6709\u8fd4\u56de\u5185\u5bb9");const n=[];return String(r).split(/\r?\n/).forEach(t=>{if(!(t=t.trim())||t.startsWith("#"))return;const r=t.split(",");if(r.length<15)return;const a=(r[0]||"").trim(),o=(r[1]||"").trim();if(0===a.toLowerCase().indexOf("public-vpn"))return;if(0===o.indexOf("219.100.37."))return;const i=function(e){for(let t=e.length-1;t>=Math.max(3,e.length-3);t--){const r=(e[t]||"").trim();if(r&&!(r.length<100))try{const e=atob(r.slice(0,600));if("string"==typeof e&&e.length>10&&(e.indexOf("client")>=0||e.indexOf("remote")>=0||e.indexOf("dev ")>=0||e.indexOf("OpenVPN")>=0||e.indexOf("PacketiX")>=0))return r}catch(e){}}return""}(r);if(!o||!i)return;const s=(r[6]||"").trim().toUpperCase();e&&s!==String(e).trim().toUpperCase()||n.push({host:a,ip:o,speed:parseInt(r[4])||0,ping:parseInt(r[5])||0,country:s,ovpnB64:i})}),n.sort((e,t)=>(t.speed||0)-(e.speed||0)),n}function K(e){try{const t=atob(String(e||"").trim());return"string"==typeof t&&t.indexOf("BEGIN")>=0?t:""}catch(e){return""}}function ee(e){const t=t=>{const r=String(e||"").match(new RegExp("<"+t+">([\\s\\S]*?)<\\/"+t+">","i"));return r?r[1].trim():""},r={};return String(e||"").split(/\r?\n/).forEach(e=>{const t=e.trim().match(/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);t&&(r[t[1].toLowerCase()]=t[2].trim())}),{ca:t("ca"),cert:t("cert"),key:t("key"),tlsAuth:t("tls-auth"),tlsCrypt:t("tls-crypt"),cipher:r.cipher||"",auth:r.auth||"",keyDirection:r["key-direction"]||"",remote:r.remote||"",proto:r.proto||""}}let te="",re=0;function ne(){const e=(new Date).toISOString().slice(0,10);return e!==te&&(te=e,re=0),!(re>=300||(re++,0))}async function ae(e,t){try{if(!e.K||"function"!=typeof e.K.get)return null;const r=await e.K.get("hwcache");if(!r)return null;const n=JSON.parse(r);if(n&&n.t&&2===n.v&&Array.isArray(n.nodes)&&n.nodes.length&&(t||Date.now()-n.t<18e5))return n.nodes}catch(e){}return null}function oe(e){return Array.isArray(e)&&e.length?e.filter(e=>e&&"udp"!==String(e.proto||"").toLowerCase()):e}async function ie(e,r,n){if(!r.homeWan)return[];const a=function(e){try{const r={ca:"ca",cert:"cert",key:"key","tls-auth":"tlsAuth","tls-crypt":"tlsCrypt"};let n={ca:"",cert:"",key:"",tlsAuth:"",tlsCrypt:""},a=null,o=[];const i=[],s=function(){a&&(n[a]=o.join("\n"),a=null,o=[])},l=function(e,r,n,a,o){return o&&o.ca?{server:String(e||""),port:Number(r)||1194,proto:n,country:String(a||"XX").toUpperCase().slice(0,2),ca:o.ca||"",cert:o.cert||"",key:o.key||"",tlsAuth:o.tlsAuth||"",tlsCrypt:o.tlsCrypt||"",cipher:o.cipher||t("QUVTLTEyOC1HQ00="),auth:o.auth||"SHA1"}:null};return String(e||"").split(/\r?\n/).forEach(function(e){const t=String(e||"").trim(),c=/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]\s*(.*)$/i.exec(t);if(c)return s(),a=r[c[1].toLowerCase()],void(c[2]&&o.push(c[2]));if(a&&(/^-{3,}/.test(t)||/^[A-Za-z0-9+/=\s]{16,}$/.test(t)))return void o.push(t);if(s(),!t||"#"===t.charAt(0))return;let d="",p=t;const u=/^([A-Za-z]{2})\s*[:|]\s*([\s\S]+)$/.exec(t);u&&(d=u[1].toUpperCase(),p=u[2].trim());const h=p.replace(/\s+/g,"");if(h.length>=200&&/^[A-Za-z0-9+/=]+$/.test(h)){try{const e=ee(atob(h)),t=String(e.remote||"").split(/\s+/),r=l(t[0]||"",parseInt(t[1],10)||1194,"udp"===String(e.proto||"").toLowerCase()?"udp":"tcp",d,e);r&&i.push(r)}catch(e){}return}const m=p.split(/[\s:]+/).filter(Boolean);if(!m.length)return;const f=l(m[0],parseInt(m[1],10)||1194,/udp/i.test(m[2]||"")?"udp":"tcp",m[3]||d||"XX",n);f&&i.push(f)}),s(),i}catch(e){return[]}}(r&&r.hwCfg);if(a.length)return a;let o=null;if(n||(o=oe(await ae(e))),o&&o.length&&o.length>=30)return o;let i=[];try{i=oe((await q("")).map(e=>function(e){const r=ee("string"==typeof e.ovpn?e.ovpn:K(e.ovpnB64)),n=String(r.remote||"").split(/\s+/),a=parseInt(n[1],10)||443,o="udp"===String(r.proto||"").toLowerCase()?"udp":"tcp";return{server:e.ip,port:a,proto:o,country:e.country,ca:r.ca||"",cert:r.cert||"",key:r.key||"",tlsAuth:r.tlsAuth||"",tlsCrypt:r.tlsCrypt||"",cipher:r.cipher||t("QUVTLTEyOC1HQ00="),auth:r.auth||"SHA1"}}(e))).slice(0,100),i.length||(i=[])}catch(e){}if(i.length)return await async function(e,t){try{if(!e.K||"function"!=typeof e.K.put)return;if(!ne())return;await e.K.put("hwcache",JSON.stringify({t:Date.now(),v:2,nodes:t}))}catch(e){}}(e,i),i;if(o&&o.length)return o;const s=oe(await ae(e,!0));return s&&s.length?s:[]}function se(e){if(!(e=String(e||"").trim()))return!1;const t=e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(t)return t.slice(1).every(e=>Number(e)<=255);if(!/^[0-9a-fA-F:]+$/.test(e))return!1;if((e.match(/::/g)||[]).length>1)return!1;const r=e.includes("::"),n=e.replace(/::/g,":").split(":").filter(Boolean);return!(!r&&8!==n.length)&&(!r||!(n.length<1||n.length>7))&&n.every(e=>/^[0-9a-fA-F]{1,4}$/.test(e))}function le(e){const t=[];for(let r=0;r<16;r+=2)t.push((e[r]<<8|e[r+1]).toString(16));let r=-1,n=0,a=-1,o=0;for(let e=0;e<8;e++)"0"===t[e]?(a<0?(a=e,o=1):o++,o>n&&(n=o,r=a)):(a=-1,o=0);if(n>=2){const e=t.slice(0,r).join(":");return(e?e+"::":"::")+t.slice(r+n).join(":")}return t.join(":")}function ce(e){const[t,r]=e.split("/"),n=t.split(".").map(Number),a=(n[0]<<24|n[1]<<16|n[2]<<8|n[3])>>>0,o=r>=32?0:4294967295<<32-r>>>0;return[(a&o)>>>0,(a|~o>>>0)>>>0]}const de=k.map(ce),pe=new Map;function ue(e){if(String(e).indexOf(":")>=0)return function(e){const[t,r]=e.split("/"),n=parseInt(r,10)||0,a=(e=>{const t=e.indexOf("::");let r;if(t>=0){const n=e.slice(0,t).split(":").filter(Boolean),a=e.slice(t+2).split(":").filter(Boolean),o=8-n.length-a.length;r=[...n,...Array(o).fill("0"),...a]}else r=e.split(":");return r.map(e=>e.padStart(4,"0"))})(t).map(e=>parseInt(e,16));let o=0;for(let e=0;e<8;e++)for(let t=15;t>=0;t--)o>=n&&(a[e]|=(Math.random()<.5?1:0)<<t),o++;return a.map(e=>e.toString(16)).join(":")}(e);const[t,r]=function(e){let t=pe.get(e);return t||(t=ce(e),pe.set(e,t)),t}(e),n=t+Math.floor(Math.random()*(r-t>>>0));return`${n>>>24&255}.${n>>>16&255}.${n>>>8&255}.${255&n}`}function he(e){const t=String(e||"").split(".").map(e=>parseInt(e,10).toString(16).padStart(2,"0"));return 4!==t.length||t.some(e=>"NaN"===e)?null:"2606:4700::"+t[0]+t[1]+":"+t[2]+t[3]}function me(e,t){const r=new Set,n=[];let a=0;for(;n.length<t&&a++<20*t;){const t=ue(e[Math.floor(Math.random()*e.length)]);r.has(t)||(r.add(t),n.push(t))}return n}function fe(e){const t=[],r=new Set;return String(e||"").split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n="";if(e.includes("#")){const[t,r]=e.split("#");e=t,n=r}const{host:a,port:o}=B(e,443);a&&se(a)&&!r.has(a)&&(r.add(a),t.push({ip:a,port:o,name:n}))}),t}function be(e){try{const t=atob(String(e).replace(/-/g,"+").replace(/_/g,"/")),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return new TextDecoder("utf-8").decode(r)}catch(e){return null}}function ge(e,t){return new Response(JSON.stringify(e),{status:t||200,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function ve(e){const t=JSON.parse(JSON.stringify(N));let r=!1,n=!1;if(e.U&&(t.uuid=String(e.U).toLowerCase()),(e.D||e.PATH)&&(t.path=String(e.D||e.PATH)),(e.login||e.L)&&(t.login=String(e.login||e.L)),(e.ADMIN||e.admin)&&(t.admin=String(e.ADMIN||e.admin)),e.HOST&&(t.host=String(e.HOST).replace(/^https?:\/\//,"").split("/")[0]),e.PROXYIP&&(t.proxyIP=String(e.PROXYIP)),(e.S||e.OUTBOUND)&&(t.outboundProxy=String(e.S||e.OUTBOUND)),"true"!==e.ECH&&"1"!==e.ECH||(t.ech=!0),"true"!==e.TROJAN&&"1"!==e.TROJAN||(t.enableTrojan=!0),e.TROJAN_PASSWORD&&(t.trojanPassword=String(e.TROJAN_PASSWORD)),e.ALPN&&(t.alpn=String(e.ALPN)),e.TGTOKEN&&(t.tgBotToken=String(e.TGTOKEN)),e.TGCHAT&&(t.tgChatID=String(e.TGCHAT)),e.YX&&(t.preferredIPs=fe(e.YX)),e.YXURL&&(t.optimizer.sourceURL=String(e.YXURL)),"1"!==e.HOME_WAN&&"true"!==e.HOME_WAN||(t.homeWan=!0),"1"!==e.WARP_ENABLE&&"true"!==e.WARP_ENABLE||(t.warpEnable=!0),e.WARP_ENDPOINTS&&(t.warpEps=String(e.WARP_ENDPOINTS)),e.MASQUE_ENDPOINTS&&(t.masqueEps=String(e.MASQUE_ENDPOINTS)),e.MASQUE_SNI&&(t.masqueSni=String(e.MASQUE_SNI)),e.K&&"function"==typeof e.K.get)try{const a=await async function(e){try{return await e.K.get("config",{cacheTtl:30})}catch(e){return null}}(e);if(a){const e=JSON.parse(a);n=!0,void 0!==e.quotaAuto&&(r=!0),Object.assign(t,e),e.optimizer&&(t.optimizer=Object.assign(JSON.parse(JSON.stringify(N.optimizer)),e.optimizer)),e.preferredIPs&&Array.isArray(e.preferredIPs)&&(t.preferredIPs=e.preferredIPs),e.admin&&(t.admin=String(e.admin)),e.uuid&&(t.uuid=String(e.uuid).toLowerCase())}}catch(e){}var a;return t.adminInit=!(!t.adminInit&&!n),delete t.fragment,delete t.fragmentParam,Xt=!1,ir=t.optimizer&&t.optimizer.fallbackPool||"",t.uuid=String(t.uuid||"").toLowerCase(),a=t.uuid,/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(a||"")||(t.uuid=t.admin?Q(t.admin):function(){if(crypto.randomUUID)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint8Array(16));return e[6]=15&e[6]|64,e[8]=63&e[8]|128,[...e].map((e,t)=>(4===t||6===t||8===t||10===t?"-":"")+e.toString(16).padStart(2,"0")).join("")}()),delete t.login,(e.login||e.L)&&(t.login=String(e.login||e.L)),(e.ADMIN||e.admin)&&(t.admin=String(e.ADMIN||e.admin)),t.path=e.D||e.PATH?String(e.D||e.PATH):t.uuid,Array.isArray(t.preferredIPs)||(t.preferredIPs=fe(t.preferredIPs)),r||Boolean(t.cfAccountId&&t.cfApiToken||e.CF_ACCOUNT_ID&&e.CF_API_TOKEN)&&(t.quotaAuto=!0),t}async function xe(e,t){if(!e.K||"function"!=typeof e.K.put)return!1;const r=JSON.parse(JSON.stringify(t));return r.admin&&(r.admin=String(r.admin)),await e.K.put("config",JSON.stringify(r)),!0}let ye=null,we=0;const ke=1e5;async function Se(e,t){const r=String(e.tgBotToken||"").trim(),n=String(e.tgChatID||"").trim();if(r&&n)try{await gt("https://api.telegram.org/bot"+r+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:n,text:t})},8e3)}catch(e){}}const Pe=[80,85,90,91,92,93,94,95,96,97,98,99];async function Ie(e,t){try{const r=await Ce(e,t);if(!r||!r.configured||r.error||"number"!=typeof r.percent)return;const n=Math.floor(r.percent),a=(new Date).toISOString().slice(0,10);let o=null;if(e.K&&"function"==typeof e.K.get)try{o=await e.K.get("tgnote")}catch(e){}let i={day:a,level:0};if(o)try{const e=JSON.parse(o);e&&e.day&&(i=e)}catch(e){}const s=i.day!==a;if(s&&(i={day:a,level:0},t.quotaDisabled)){t.quotaDisabled=!1;try{await xe(e,t)}catch(e){}}const c=!(!String(t.tgBotToken||"").trim()||!String(t.tgChatID||"").trim()),d="\u5f53\u65e5\u989d\u5ea6 "+r.percent+"%\uff08"+(r.today&&r.today.requests||0)+" / "+r.limit+"\uff09";let p=s;if(n>=99&&!t.quotaDisabled){t.quotaDisabled=!0;try{await xe(e,t)}catch(e){}c&&await Se(t,"\u26a0\ufe0f "+l+" \u7528\u91cf\u544a\u8b66\uff1a"+d+"\u3002\u8ba2\u9605\u5df2\u81ea\u52a8\u505c\u7528\uff0c\u660e\u65e5\u81ea\u52a8\u6062\u590d\u3002"),i.level=99,p=!0}else if(c&&n>=80&&!t.quotaDisabled){const e=Pe.filter(e=>e<=n&&e>(i.level||0)).pop();e&&(await Se(t,"\ud83d\udcca "+l+" \u7528\u91cf\u63d0\u9192\uff1a"+d+"\uff08\u63d0\u9192\u9608\u503c "+e+"%\uff09"),i.level=e,p=!0)}if(p&&e.K&&"function"==typeof e.K.put)try{await e.K.put("tgnote",JSON.stringify(i))}catch(e){}}catch(e){}}async function Ce(e,t){const r=String(e.CF_ACCOUNT_ID||t&&t.cfAccountId||"").trim(),n=String(e.CF_API_TOKEN||t&&t.cfApiToken||"").trim();if(!r||!n)return{configured:!1};const a=Date.now();if(a<we)return ye&&ye.data?Object.assign({},ye.data,{stale:!0,error:"CF API \u9650\u6d41(429)\uff0c\u663e\u793a\u7f13\u5b58\u6570\u636e\uff08\u53ef\u80fd\u6ede\u540e\uff09"}):{configured:!0,error:"CF API \u9650\u6d41(429)\uff0c\u8bf7 15 \u5206\u949f\u540e\u518d\u8bd5"};if(ye&&ye.at&&a-ye.at<3e5)return ye.data;try{const e=new Date;e.setUTCHours(0,0,0,0);const t=new Date,o={query:"query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }",variables:{accountId:r,filter:{datetime_geq:e.toISOString(),datetime_leq:t.toISOString()}}},i=await fetch("https://api.cloudflare.com/client/v4/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify(o),signal:AbortSignal.timeout(8e3)});if(!i.ok)throw new Error("CF API HTTP "+i.status);const s=await i.json();if(s.errors&&s.errors.length)throw new Error("GraphQL: "+JSON.stringify(s.errors).slice(0,200));const l=s&&s.data&&s.data.viewer&&s.data.viewer.accounts||[];if(!l.length)throw new Error("\u672a\u627e\u5230\u8d26\u6237\u6570\u636e\uff08\u68c0\u67e5\u8d26\u6237 ID \u4e0e\u4ee4\u724c\u6743\u9650\uff09");const c=l[0],d=(c.workersInvocationsAdaptive||[])[0]||{},p=(c.pagesFunctionsInvocationsAdaptiveGroups||[]).reduce((e,t)=>e+(t&&t.sum&&t.sum.requests||0),0),u=(d.sum&&d.sum.requests||0)+p,h=d.quantiles&&d.quantiles.cpuTimeP50||0,m=d.sum&&d.sum.subrequests||0,f=Math.round(u/ke*1e3)/10,b={configured:!0,limit:ke,today:{requests:u,cpuTime:h,subrequests:m},percent:f,remaining:Math.max(0,ke-u),updatedAt:t.toISOString()};return ye={at:a,data:b},b}catch(e){const t=e&&e.message||String(e);return t.indexOf("429")>=0?(we=a+9e5,ye&&ye.data?Object.assign({},ye.data,{stale:!0,error:"CF API \u9650\u6d41(429)\uff0c\u663e\u793a\u7f13\u5b58\u6570\u636e\uff08\u53ef\u80fd\u6ede\u540e\uff09"}):{configured:!0,error:"CF API \u9650\u6d41(429)\uff0c\u8bf7 15 \u5206\u949f\u540e\u518d\u8bd5"}):{configured:!0,error:t}}}function Ae(e){if(!e||e.byteLength<1)throw new Error(t("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const r=new DataView(e.buffer,e.byteOffset,e.byteLength);let n=0;if(0!==r.getUint8(0))throw new Error("\u4e0d\u652f\u6301\u7684 "+t("VkxFU1M=")+" \u7248\u672c");if(n+=17,n>=e.byteLength)throw new Error(t("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const a=r.getUint8(n);if(n+=1,n+=a,n+3>e.byteLength)throw new Error(t("VkxFU1M=")+" \u5934\u90e8\u8fc7\u77ed");const o=r.getUint8(n);n+=1;const i=r.getUint16(n);n+=2;const s=r.getUint8(n);n+=1;const{addr:l,len:c}=function(e,t,r,n){if(1===n)return{addr:`${t.getUint8(r)}.${t.getUint8(r+1)}.${t.getUint8(r+2)}.${t.getUint8(r+3)}`,len:4};if(2===n){const n=t.getUint8(r),a=e.subarray(r+1,r+1+n);return{addr:Z.decode(a),len:1+n}}if(3===n)return{addr:le(e.subarray(r,r+16)),len:16};throw new Error("\u65e0\u6cd5\u8bc6\u522b\u7684\u5730\u5740\u7c7b\u578b")}(e,r,n,s);return n+=c,{command:o,port:i,addr:l,headerLength:n,earlyData:e.subarray(n)}}const $e=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];let Ve="",Te="";function Ue(e){return e!==Ve&&(Ve=e,Te=function(e){const t=O.encode(String(e)),r=8*t.length,n=1+(t.length+8>>6)<<6,a=new Uint8Array(n);a.set(t),a[t.length]=128;const o=new DataView(a.buffer);o.setUint32(n-8,Math.floor(r/4294967296),!1),o.setUint32(n-4,r>>>0,!1);let i=3238371032,s=914150663,l=812702999,c=4144912697,d=4290775857,p=1750603025,u=1694076839,h=3204075428;const m=(e,t)=>e>>>t|e<<32-t;for(let e=0;e<n;e+=64){const t=new Uint32Array(64);for(let r=0;r<16;r++)t[r]=o.getUint32(e+4*r,!1);for(let e=16;e<64;e++){const r=m(t[e-15],7)^m(t[e-15],18)^t[e-15]>>>3,n=m(t[e-2],17)^m(t[e-2],19)^t[e-2]>>>10;t[e]=t[e-16]+r+t[e-7]+n>>>0}let r=i,n=s,a=l,f=c,b=d,g=p,v=u,x=h;for(let e=0;e<64;e++){const o=x+(m(b,6)^m(b,11)^m(b,25))+(b&g^~b&v)+$e[e]+t[e]>>>0,i=r&n^r&a^n&a;x=v,v=g,g=b,b=f+o>>>0,f=a,a=n,n=r,r=o+((m(r,2)^m(r,13)^m(r,22))+i>>>0)>>>0}i=i+r>>>0,s=s+n>>>0,l=l+a>>>0,c=c+f>>>0,d=d+b>>>0,p=p+g>>>0,u=u+v>>>0,h=h+x>>>0}let f="";for(const e of[i,s,l,c,d,p,u])f+=(e>>>24&255).toString(16).padStart(2,"0"),f+=(e>>>16&255).toString(16).padStart(2,"0"),f+=(e>>>8&255).toString(16).padStart(2,"0"),f+=(255&e).toString(16).padStart(2,"0");return f}(e)),Te}const Me=["https://doh.pub/dns-query","https://dns.alidns.com/resolve","https://1.1.1.1/dns-query","https://8.8.8.8/dns-query","https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function Re(e){const t=String(e).split("::"),r=t[0]?t[0].split(":").filter(Boolean):[],n=t[1]?t[1].split(":").filter(Boolean):[],a=[...r,...Array(Math.max(0,8-r.length-n.length)).fill("0"),...n],o=new Uint8Array(16);return a.forEach((e,t)=>{const r=parseInt(e,16)||0;o[2*t]=r>>8&255,o[2*t+1]=255&r}),o}async function De(t,r,n){const a=e({hostname:t,port:r});try{await function(e,t){return Promise.race([e,new Promise((e,r)=>setTimeout(()=>r(new Error("\u8fde\u63a5\u8d85\u65f6\uff08SYN \u88ab\u9759\u9ed8\u4e22\u5f03\uff09")),t||6e3))])}(a.opened,n||6e3)}catch(e){try{a.close()}catch(e){}throw e}return a}async function Ee(e,t){return De(e.hostname,e.port,t||6e3)}function Ne(e){const t=e instanceof Uint8Array?e:new Uint8Array(e),r=t.length,n=8*r,a=new Uint8Array(1+(r+8>>6)<<6);a.set(t),a[r]=128;const o=new DataView(a.buffer);o.setUint32(a.length-8,Math.floor(n/4294967296),!1),o.setUint32(a.length-4,n>>>0,!1);let i=1732584193,s=4023233417,l=2562383102,c=271733878,d=3285377520;const p=new Uint32Array(80);for(let e=0;e<a.length;e+=64){for(let t=0;t<16;t++)p[t]=o.getUint32(e+4*t,!1);for(let e=16;e<80;e++)p[e]=j(p[e-3]^p[e-8]^p[e-14]^p[e-16],1);let t=i,r=s,n=l,a=c,u=d;for(let e=0;e<80;e++){let o,i;e<20?(o=r&n|~r&a,i=1518500249):e<40?(o=r^n^a,i=1859775393):e<60?(o=r&n|r&a|n&a,i=2400959708):(o=r^n^a,i=3395469782);const s=j(t,5)+o+u+i+p[e]>>>0;u=a,a=n,n=j(r,30),r=t,t=s}i=i+t>>>0,s=s+r>>>0,l=l+n>>>0,c=c+a>>>0,d=d+u>>>0}const u=new Uint8Array(20),h=new DataView(u.buffer);return h.setUint32(0,i,!1),h.setUint32(4,s,!1),h.setUint32(8,l,!1),h.setUint32(12,c,!1),h.setUint32(16,d,!1),u}function Le(e,t){let r=e;r.length>64&&(r=Ne(r));const n=new Uint8Array(64),a=new Uint8Array(64);for(let e=0;e<64;e++)n[e]=54^(e<r.length?r[e]:0),a[e]=92^(e<r.length?r[e]:0);return Ne(Oe(a,Ne(Oe(n,t))))}function Fe(e,t,r){const n=Le(t&&t.length?t:new Uint8Array(20),e);let a=new Uint8Array(0),o=new Uint8Array(0);for(let e=1;o.length<r;e++){const t=new Uint8Array([e]);a=Le(n,Oe(Oe(a,O.encode("ss-subkey")),t)),o=Oe(o,a)}return o.slice(0,r)}function He(e,t,r){const n=new Uint32Array(16);n[0]=1634760805,n[1]=857760878,n[2]=2036477234,n[3]=1797285236;const a=new DataView(e.buffer,e.byteOffset,32);for(let e=0;e<8;e++)n[4+e]=a.getUint32(4*e,!0);n[12]=t>>>0;const o=new DataView(r.buffer,r.byteOffset,12);n[13]=o.getUint32(0,!0),n[14]=o.getUint32(4,!0),n[15]=o.getUint32(8,!0);const i=n.slice(),s=(e,t,r,n)=>{i[e]=i[e]+i[t]>>>0,i[n]=j(i[n]^i[e],16),i[r]=i[r]+i[n]>>>0,i[t]=j(i[t]^i[r],12),i[e]=i[e]+i[t]>>>0,i[n]=j(i[n]^i[e],8),i[r]=i[r]+i[n]>>>0,i[t]=j(i[t]^i[r],7)};for(let e=0;e<10;e++)s(0,4,8,12),s(1,5,9,13),s(2,6,10,14),s(3,7,11,15),s(0,5,10,15),s(1,6,11,12),s(2,7,8,13),s(3,4,9,14);const l=new Uint8Array(64),c=new DataView(l.buffer);for(let e=0;e<16;e++)i[e]=i[e]+n[e]>>>0,c.setUint32(4*e,i[e],!0);return l}function We(e,t,r,n){const a=n.slice(),o=Math.ceil(n.length/64);for(let n=0;n<o;n++){const o=He(e,r+n,t),i=64*n,s=Math.min(64,a.length-i);for(let e=0;e<s;e++)a[i+e]^=o[e]}return a}function ze(e,t){let r=0n,n=0n;for(let t=0;t<16;t++)r|=BigInt(e[t])<<BigInt(8*t),n|=BigInt(e[16+t])<<BigInt(8*t);r&=0x0ffffffc0ffffffc0ffffffc0fffffffn;let a=0n;const o=(1n<<130n)-5n;for(let e=0;e<t.length;e+=16){let n=1n;for(let r=Math.min(16,t.length-e)-1;r>=0;r--)n=n<<8n|BigInt(t[e+r]);a=(a+n)*r%o}a=a+n&(1n<<128n)-1n;const i=new Uint8Array(16);for(let e=0;e<16;e++)i[e]=Number(a>>BigInt(8*e)&0xffn);return i}async function _e(e,r){const n=new Uint8Array(12),a=()=>{const e=n.slice();for(let t=11;t>=0&&(e[t]++,0===e[t]);t--);return e};if(t("Q0hBQ0hBMjA=")+"-POLY1305"===e)return{seal:e=>function(e,t,r){const n=new Uint8Array(0),a=We(e,t,0,new Uint8Array(32)),o=We(e,t,1,r),i=e=>new Uint8Array((16-e%16)%16),s=e=>{const t=new Uint8Array(8),r=new DataView(t.buffer);return r.setUint32(0,e>>>0,!0),r.setUint32(4,Math.floor(e/4294967296),!0),t},l=Oe(n,Oe(i(n.length),Oe(o,Oe(i(o.length),Oe(s(n.length),s(o.length))))));return Oe(o,ze(a,l))}(r,a(),e),open(e){const t=function(e,t,r){if(r.length<16)throw new Error("SS AEAD \u6570\u636e\u8fc7\u77ed");const n=r.subarray(0,r.length-16),a=r.subarray(r.length-16),o=new Uint8Array(0),i=e=>new Uint8Array((16-e%16)%16),s=e=>{const t=new Uint8Array(8),r=new DataView(t.buffer);return r.setUint32(0,e>>>0,!0),r.setUint32(4,Math.floor(e/4294967296),!0),t},l=ze(We(e,t,0,new Uint8Array(32)),Oe(o,Oe(i(o.length),Oe(n,Oe(i(n.length),Oe(s(o.length),s(n.length)))))));let c=0;for(let e=0;e<16;e++)c|=l[e]^a[e];return 0!==c?null:We(e,t,1,n)}(r,a(),e);if(!t)throw new Error("SS AEAD \u89e3\u5bc6\u5931\u8d25\uff08\u5bc6\u7801/\u52a0\u5bc6\u65b9\u5f0f\u4e0e\u670d\u52a1\u5668\u4e0d\u5339\u914d\uff09");return t}};const o=await crypto.subtle.importKey("raw",r,{name:e},!1,["encrypt","decrypt"]);return{seal:async t=>new Uint8Array(await crypto.subtle.encrypt({name:e,iv:a()},o,t)),async open(t){try{return new Uint8Array(await crypto.subtle.decrypt({name:e,iv:a()},o,t))}catch(e){throw new Error("SS AEAD \u89e3\u5bc6\u5931\u8d25\uff08\u5bc6\u7801/\u52a0\u5bc6\u65b9\u5f0f\u4e0e\u670d\u52a1\u5668\u4e0d\u5339\u914d\uff09")}}}}async function Ge(e,t){const r=new Uint8Array([t.length>>8&255,255&t.length]);return Oe(await e.seal(r),await e.seal(t))}function Oe(e,t){const r=new Uint8Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function Ze(e,t){e:for(let r=0;r<=e.length-t.length;r++){for(let n=0;n<t.length;n++)if(e[r+n]!==t[n])continue e;return r}return-1}const Ye="cmli"+"ussss"+".net",Je={HK:t("cHJveHlpcA==")+".hk."+Ye,US:t("cHJveHlpcA==")+".us."+Ye,SG:t("cHJveHlpcA==")+".sg."+Ye,JP:t("cHJveHlpcA==")+".jp."+Ye,KR:t("cHJveHlpcA==")+".kr."+Ye,DE:t("cHJveHlpcA==")+".de."+Ye,SE:t("cHJveHlpcA==")+".se."+Ye,NL:t("cHJveHlpcA==")+".nl."+Ye,FI:t("cHJveHlpcA==")+".fi."+Ye,GB:t("cHJveHlpcA==")+".gb."+Ye,Oracle:t("cHJveHlpcA==")+".oracle."+Ye,DigitalOcean:t("cHJveHlpcA==")+".digitalocean."+Ye,Vultr:t("cHJveHlpcA==")+".vultr."+Ye,Multacom:t("cHJveHlpcA==")+".multacom."+Ye},je=(()=>{const e=Object.create(null),t=(t,r)=>{for(const n of[].concat(r))e[n]=t};return t("HK","HKG"),t("AU",["SYD","MEL","BNE","PER","ADL","CBR"]),t("SG","SIN"),t("JP",["NRT","HND","KIX","TYO","OSA","NGO","CTS","FUK","OKA"]),t("KR",["ICN","SEL","PUS"]),t("DE",["FRA","MUC","DUS","BER","HAM","STR","VIE","ZRH","CDG","MAD","MXP","FCO","PRG","WAW"]),t("SE","ARN"),t("NL","AMS"),t("FI","HEL"),t("GB",["LHR","LGW","MAN","EDI"]),t("US",["LAX","SJC","SFO","SEA","PDX","SAN","LAS","PHX","SLC","DEN","DFW","IAH","AUS","ORD","MSP","DTW","STL","MCI","ATL","MIA","MCO","BNA","CLT","IAD","BOS","EWR","JFK","PHL","YYZ","YVR","YUL","MEX","GRU"]),t("TW",["TPE","KHH","TSA","RMQ"]),e})(),Xe=e=>{const t=String(e||"").toUpperCase();return t?je[t]?je[t]:/^[A-Z]{2}$/.test(t)?t:"US":"US"},Qe=new Map,Be=new Map;async function qe(e,r){if(r=r||443,se(e))return[{hostname:e,port:r}];const n=e+":"+r,a=Date.now(),o=Be.get(n);if(o&&a-o.t<3e5)return o.ips;const i=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve","https://doh.pub/dns-query"],s=async(t,r)=>{for(const n of i)try{const a=await gt(n+"?name="+encodeURIComponent(e)+"&type="+t,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(e=>e.type===r).map(e=>e.data)}catch(e){}return[]},l=await s("TXT",16);let c=[];for(const e of l){const n=String(e).replace(/^"|"$/g,"").replace(/\\010/g,",").replace(/\n/g,",").trim();if(!n)continue;if("@"+t("ZWR0dW5uZWw=")===n)break;const a=n.split(/[,;\s]+/).map(e=>e.trim()).filter(Boolean),o=[];for(const e of a){const{host:t,port:n}=B(e,r);se(t)&&o.push({hostname:t,port:n})}if(o.length){c=o;break}}c.length||(c=(await s("A",1)).filter(e=>/^\d+\.\d+\.\d+\.\d+$/.test(e)).map(e=>({hostname:e,port:r}))),c.length||(c=(await s("AAAA",28)).filter(e=>se(e)).map(e=>({hostname:e,port:r})));const d=new Set,p=c.filter(e=>{const t=e.hostname+":"+e.port;return!d.has(t)&&(d.add(t),!0)});return p.length&&Be.set(n,{t:a,ips:p}),p}async function Ke(e){if(!e||!e.length)return null;let t=!1;return await new Promise(r=>{let n=e.length;const a=e=>{if(n--,e)if(t)try{e.close()}catch(e){}else t=!0,r(e);else n<=0&&!t&&r(null)};for(const t of e)Promise.resolve().then(t).then(e=>a(e&&e.readable?e:null),()=>a(null))})}async function et(e,t,r){let n=null;const a=e=>{if(e&&e!==n)try{e.close()}catch(e){}},o=e?Promise.resolve().then(e).then(e=>e&&e.readable?e:null,()=>null):Promise.resolve(null),i=t&&t.length?Ke(t).then(e=>e&&e.readable?e:null,()=>null):Promise.resolve(null);let s=null;const l=await Promise.race([o,new Promise(e=>{s=setTimeout(()=>e("__GRACE__"),r)})]);if(s&&(clearTimeout(s),s=null),l&&"__GRACE__"!==l)return n=l,i.then(a),n;const c=await i;if(c)return n=c,o.then(a),n;const d=await o;return d?(n=d,n):null}function tt(e){return!e||e.byteLength<3?"unknown":22===e[0]&&3===e[1]?"tls":"nontls"}async function rt(e,n,a,o,i){const s=function(e){if(!e)return null;let n=t("c29ja3M1"),a=String(e).trim();const o=a.match(r);if(o&&(n=o[1].toLowerCase(),a=o[2]),"ss"===n)return function(e){let t=e,r="";const n=e.indexOf("#");n>=0&&(t=e.slice(0,n));const a=t.lastIndexOf("@");if(a>=0)r=t.slice(0,a),t=t.slice(a+1);else{const e=be(t);if(e&&e.includes("@")){const n=e.lastIndexOf("@");r=e.slice(0,n),t=e.slice(n+1)}}let o="",i="";if(r){let t=be(r)||r;try{t=decodeURIComponent(t)}catch(e){}const n=t.indexOf(":");n>0?(o=t.slice(0,n),i=t.slice(n+1)):o=t}const{host:s,port:l}=B(t,8388);return{type:"ss",host:s,port:l,method:o,password:i}}(a);let i="",s="";if(a.includes("@")){const[e,t]=a.split("@"),r=e=>{try{return decodeURIComponent(e)}catch(t){return e}},n=e.indexOf(":");n>=0?(i=r(e.slice(0,n)),s=r(e.slice(n+1))):i=r(e),a=t}const l="http"===n?80:"https"===n?443:1080,{host:c,port:d}=B(a,l);return{type:n,host:c,port:d,user:i,pass:s}}(n.outboundProxy),l=n.outboundMode||"",c="nontls"!==i,d=s?"http"===s.type||"https"===s.type?e=>async function(e,r){const n=await De(e.host,e.port,6e3),a=n.writable.getWriter(),o=n.readable.getReader();let i="";e.user&&(i=t("UHJveHktQXV0aG9yaXphdGlvbg==")+": Basic "+function(e){let t="";for(let r=0;r<e.length;r+=32768)t+=String.fromCharCode(...e.subarray(r,r+32768));return btoa(t)}(O.encode(`${e.user}:${e.pass}`))+"\r\n");const s=`${t("Q09OTkVDVA==")} ${r.hostname}:${r.port} HTTP/1.1\r\nHost: ${r.hostname}:${r.port}\r\n${i}\r\n`;await a.write(O.encode(s));const{head:l,leftover:c}=await async function(e){let t=new Uint8Array(0);for(;t.length<65536;){const{done:r,value:n}=await e.read();if(r)break;t=Oe(t,n);const a=Ze(t,[13,10,13,10]);if(a>=0)return{head:Z.decode(t.subarray(0,a)),leftover:t.subarray(a+4)}}return{head:Z.decode(t),leftover:new Uint8Array(0)}}(o);if(!/^HTTP\/\d\.\d\s+2\d\d/i.test(l))throw new Error(t("Q09OTkVDVA==")+" \u5931\u8d25: "+l.split("\r\n")[0]);return c&&c.byteLength>0&&(n._preamble=c),a.releaseLock(),o.releaseLock(),n}(s,e):"ss"===s.type?e=>async function(e){const r=function(e){const r=String(e||"").toLowerCase().replace(/_/g,"-");return t("YWVzLTEyOC1nY20=")===r||"aes-128gcm"===r?{name:"AES-GCM",keyLen:16}:t("YWVzLTI1Ni1nY20=")===r||"aes-256gcm"===r?{name:"AES-GCM",keyLen:32}:t("Y2hhY2hhMjA=")+"-ietf-poly1305"===r||t("Y2hhY2hhMjA=")+"-poly1305"===r||t("Y2hhY2hhMjA=")+"poly1305"===r?{name:t("Q0hBQ0hBMjA=")+"-POLY1305",keyLen:32}:null}(e.method);if(!r)throw new Error("\u4e0d\u652f\u6301\u7684 SS \u52a0\u5bc6\u65b9\u5f0f: "+(e.method||"\uff08\u672a\u6307\u5b9a\uff09"));if(!e.password)throw new Error("SS \u51fa\u7ad9\u7f3a\u5c11\u5bc6\u7801");const n=await De(e.host,e.port,6e3),a=n.writable.getWriter(),o=n.readable.getReader();let i=new Uint8Array(0);const s=async e=>{for(;i.length<e;){const{done:e,value:t}=await o.read();if(e)throw new Error("SS \u8fde\u63a5\u88ab\u5173\u95ed");i=Oe(i,t)}const t=i.slice(0,e);return i=i.subarray(e),t},l=new Uint8Array(await crypto.subtle.digest("SHA-256",O.encode(e.password))),c=crypto.getRandomValues(new Uint8Array(16)),d=await _e(r.name,await Fe(l,c,r.keyLen));return await a.write(c),await a.write(await Ge(d,new Uint8Array(0))),{readable:new ReadableStream({async start(e){try{const t=await s(16),n=await _e(r.name,await Fe(l,t,r.keyLen));for(;;){const t=await n.open(await s(18)),r=t[0]<<8|t[1];if(r>16384)throw new Error("SS \u5206\u7247\u957f\u5ea6\u975e\u6cd5 "+r);const a=await n.open(await s(r+16));r>0&&e.enqueue(a)}}catch(t){try{e.error(t)}catch(e){}}}}),writable:new WritableStream({async write(e){const t=e instanceof Uint8Array?e:new Uint8Array(e);for(let e=0;e<t.length;e+=16384)await a.write(await Ge(d,t.subarray(e,Math.min(t.length,e+16384))))},close(){try{a.close()}catch(e){}},abort(){try{a.abort()}catch(e){}}}),close(){try{n.close()}catch(e){}}}}(s):e=>async function(e,r){const n=await De(e.host,e.port,6e3),a=n.writable.getWriter(),o=n.readable.getReader();let i=new Uint8Array(0);const s=async e=>{for(;i.length<e;){const{done:e,value:t}=await o.read();if(e)throw new Error("\u8fde\u63a5\u88ab\u5173\u95ed");i=Oe(i,t)}const t=i.slice(0,e);return i=i.subarray(e),t},l=e.user?[5,2,0,2]:[5,1,0];await a.write(new Uint8Array(l));const c=await s(2);if(5!==c[0]||255===c[1])throw new Error(t("U09DS1M1")+" \u63e1\u624b\u5931\u8d25");if(2===c[1]){if(!e.user)throw new Error(t("U09DS1M1")+" \u670d\u52a1\u5668\u8981\u6c42\u8ba4\u8bc1\u4f46\u672a\u63d0\u4f9b\u51ed\u636e");const r=O.encode(e.user),n=O.encode(e.pass),o=new Uint8Array([1,r.length,...r,n.length,...n]);if(await a.write(o),0!==(await s(2))[1])throw new Error(t("U09DS1M1")+" \u8ba4\u8bc1\u5931\u8d25")}else if(0!==c[1])throw new Error(t("U09DS1M1")+" \u4e0d\u652f\u6301\u7684\u8ba4\u8bc1\u65b9\u6cd5 "+c[1]);const d=O.encode(r.hostname);let p;p=/^\d+\.\d+\.\d+\.\d+$/.test(r.hostname)?new Uint8Array([5,1,0,1,...r.hostname.split(".").map(Number),r.port>>8&255,255&r.port]):new Uint8Array([5,1,0,3,d.length,...d,r.port>>8&255,255&r.port]),await a.write(p);const u=await s(4);if(0!==u[1])throw new Error(t("U09DS1M1")+" \u8fde\u63a5\u5931\u8d25 \u7801"+u[1]);if(1===u[3])await s(6);else if(3===u[3]){const e=(await s(1))[0];await s(e+2)}else 4===u[3]&&await s(18);return i.byteLength>0&&(n._preamble=i),a.releaseLock(),o.releaseLock(),n}(s,e):null;let p;const u=async e=>{try{const t=await e();if(t)return t}catch(e){p=e}return null},h=()=>{throw p||new Error("\u6240\u6709\u51fa\u7ad9\u65b9\u5f0f\u5747\u5931\u8d25")},m=n.proxyIP?(e=>{const t=String(e||"").trim();if(!t)return[];const r=Qe.get(t);if(r)return r;const n=[];for(const e of t.split(/[,;\n\r]+/)){let t=e.trim();if(!t)continue;let r="";const a=/^([A-Za-z]{2})\.(.+)$/.exec(t);if(a&&se(B(a[2],443).host)&&(r=a[1].toUpperCase(),t=a[2]),!r){const e=/^(.+)#([A-Za-z]{2})$/.exec(t);e&&(r=e[2].toUpperCase(),t=e[1])}const o=B(t,443);if(o.host){if(!r&&!se(o.host))for(const e of o.host.toUpperCase().split(/[^A-Z0-9]+/))if(/^[A-Z]{2}$/.test(e)&&"IP"!==e&&"CF"!==e){r=e;break}n.push({host:o.host,port:o.port,cc:r})}}return Qe.size>32&&Qe.clear(),Qe.set(t,n),n})(n.proxyIP):[],f=Xe(a),b=String(a||"").toUpperCase(),g=[];if(m.length&&c){for(const e of m)!e.cc||e.cc!==f&&e.cc!==b||g.push(e);for(const e of m)e.cc||g.push(e);g.length||g.push(m[0]);for(const e of g.slice(0,3)){const t=await u(async()=>{let t=[];try{t=await qe(e.host,e.port)}catch(e){}t.length||(t=[{hostname:e.host,port:e.port}]);const r=await Ke(t.slice(0,4).map(e=>()=>u(()=>Ee(e,4e3))));if(r)return r});if(t)return t}}const v={hostname:e.addr,port:e.port},x=()=>{if(!c)return[];const e=Xe(a);return[e,...Object.keys(Je).filter(t=>t!==e)].slice(0,2).map((e,t)=>async()=>{const r=Je[e];if(!r)return null;let n=[];try{n=await qe(r,443)}catch(e){return null}if(!n.length)return null;const a=n.slice(0,0===t?2:1);return await Ke(a.map(e=>()=>u(()=>Ee(e,4e3))))})},y=()=>u(()=>Ee(v,4e3)),w=d?()=>u(()=>d(v)):null,k=$(e.addr)?0:300,S=()=>et(y,x().slice(0,3),k);if("only"===l&&w)return await w()||await et(null,x().slice(0,4),0)||h();if(""===l&&w)return await w()||await S()||h();const P=await S();if(P)return P;if(w){const e=await w();if(e)return e}return h()}function nt(e){const t=e instanceof Uint8Array?e:new Uint8Array(e);try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch(e){}try{return new TextDecoder("gbk").decode(t)}catch(e){}return(new TextDecoder).decode(t)}function at(e){const t=new Set,r=[],n=(e,n,a)=>{se(e)&&(t.has(e)||(t.add(e),r.push({ip:e,port:n||443,name:a||""})))};fe(e).forEach(e=>n(e.ip,e.port,e.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let o;for(;o=a.exec(e);){const{host:e,port:t}=B(o[0],443);e&&n(e,t,"")}const i=/[0-9a-fA-F:]+/g;for(;o=i.exec(e);){const e=o[0];e.includes(":")&&e.split(":").length>=3&&se(e)&&n(e,443,"")}return r}const ot={t:0,ips:null};async function it(e){if(e=Math.max(1,parseInt(e)||150),Date.now()-ot.t<6e5)return ot.ips;const t=await gt("https://stock.hostmonit.com/CloudFlareYes",{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(t&&t.ok){const r=at(await t.text()).filter(e=>e.ip&&$(e.ip)),n=new Set,a=[];for(const t of r)if(!n.has(t.ip)&&(n.add(t.ip),a.push(t),a.length>=e))break;return ot.t=Date.now(),ot.ips=a,a}return null}async function st(e){const t=[],r={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},n="custom"===(e=e||{}).source||!!e.sourceURL,a=r=>{r&&r.ip&&(n||$(r.ip))&&t.push({ip:r.ip,port:r.port||e.port||443,name:r.name||""})};if(e.source&&G[e.source]){const t=await gt(G[e.source].url,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(t&&t.ok){const e=at(await t.text());e.forEach(a),r.preset=e.length}else r.presetErr=t?"HTTP "+t.status:"\u8d85\u65f6/\u7f51\u7edc\u9519\u8bef"}if(e.sourceURL){const t=vt(e.sourceURL).filter(e=>/^https?:\/\//i.test(e)).slice(0,50);if(t.length){const e=await Promise.all(t.map(async e=>{try{const t=await gt(e,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);return t&&t.ok?{url:e,arr:at(await t.text()),err:""}:{url:e,arr:[],err:t?"HTTP "+t.status:"\u8d85\u65f6/\u7f51\u7edc\u9519\u8bef"}}catch(t){return{url:e,arr:[],err:t&&t.message||String(t)}}}));let n=0;const o=[];for(const t of e)t.err?o.push(t.url.replace(/^https?:\/\//,"").slice(0,40)+" \u2192 "+t.err):(t.arr.forEach(a),r.custom+=t.arr.length,n++);o.length&&(r.customErr=(n?"\u90e8\u5206\u6e90\u5931\u8d25: ":"")+o.join("\uff1b"))}else r.customErr="\u672a\u63d0\u4f9b\u6709\u6548 URL\uff08\u591a\u4e2a\u7528\u6362\u884c\u6216\u5206\u53f7\u9694\u5f00\uff09"}const o=new Set,i=[];for(const e of t)o.has(e.ip)||(o.add(e.ip),i.push(e));if(i.length<(e.count||20)){let t=(e.count||20)-i.length;try{const r=await lr();for(const n of r){if(t<=0)break;o.has(n.ip)||$(n.ip)&&(o.add(n.ip),i.push({ip:n.ip,port:e.port||n.port||443,name:n.name||""}),t--)}}catch(e){}r.bestcf=(e.count||20)-i.length-t}if(!1!==e.useCidr&&i.length<(e.count||20)){const t=(e.count||20)-i.length,n=me(k,3*t);let a=0;for(const r of n){if(a>=t)break;o.has(r)||(o.add(r),i.push({ip:r,port:e.port||443,name:""}),a++)}r.cidr=a}return{candidates:i,stats:r}}function lt(t,r,n){return new Promise(a=>{const o=Date.now();let i,s=!1;const l=(e,n)=>{if(!s){s=!0,clearTimeout(c);try{i&&i.close()}catch(e){}a({ip:t,port:r,ok:e,latency:n})}},c=setTimeout(()=>l(!1,-1),n);try{i=e({hostname:t,port:r})}catch(e){return l(!1,-1)}i.opened.then(()=>l(!0,Date.now()-o)).catch(()=>l(!1,-1))})}function ct(e){return String(e).replace(/%/g,"%25").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/ /g,"%20")}function dt(e,t,r,n){return(t?1:0)+(r?1:0)+(n?1:0)<=1?{v:e,t:e,x:e}:{v:e,t:e+".T",x:e+".X"}}function pt(e,r,n,a,o={}){const i=e.host,s=r.includes(":")&&!r.startsWith("[")?`[${r}]`:r,l=!_.has(Number(n)),c=encodeURIComponent;let d=t("ZW5jcnlwdGlvbj0=")+"none";d+=l?"&"+t("c2VjdXJpdHk9")+"tls&sni="+c(i)+"&fp=chrome":"&"+t("c2VjdXJpdHk9")+"none",d+="&host="+c(i);const p=t("eGh0dHA=")===o.type&&l;return p?(d+="&type="+t("eGh0dHA=")+"&mode="+t("c3RyZWFtLW9uZQ=="),d+="&extra="+c(JSON.stringify(function(e){const t=e.uuid||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:t.slice(1,7),xPaddingKey:"_"+t.slice(25,31)}}(e)))):d+="&"+t("dHlwZT13cw=="),d+="&path="+c("/"+e.path+(!p&&l?"?ed=2048":"")),e.alpn&&(d+="&"+t("YWxwbg==")+"="+e.alpn.split(",").map(e=>e.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),e.ech&&(d+="&ech="+c((e.echHost||"cloudflare-ech.com")+"+"+(e.echDns||"https://223.5.5.5/dns-query"))),`${t("dmxlc3M=")}://${e.uuid}@${s}:${n}?${d}#${ct(a)}`}function ut(e,r,n,a){const o=e.host,i=r.includes(":")&&!r.startsWith("[")?`[${r}]`:r,s=encodeURIComponent,l=!_.has(Number(n)),c="/"+e.path+(l?"?ed=2048":"");let d=l?t("c2VjdXJpdHk9")+"tls&sni="+s(o)+"&fp=chrome&host="+s(o)+"&"+t("dHlwZT13cw==")+"&path="+s(c):t("c2VjdXJpdHk9")+"none&host="+s(o)+"&"+t("dHlwZT13cw==")+"&path="+s(c);return e.alpn&&l&&(d+="&"+t("YWxwbg==")+"="+e.alpn.split(",").map(e=>e.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),e.ech&&l&&(d+="&ech="+s((e.echHost||"cloudflare-ech.com")+"+"+(e.echDns||"https://223.5.5.5/dns-query"))),`${t("dHJvamFu")}://${e.trojanPassword||e.uuid}@${i}:${n}?${d}#${ct(a)}`}const ht=new Map,mt=18e5,ft=new Map;function bt(e,t){const r=rr;if(!(r&&r.K&&"function"==typeof r.K.put&&t&&t.length))return;const n=ft.get(e)||0;if(Date.now()-n<mt)return;if(!ne())return;ft.size>200&&ft.clear(),ft.set(e,Date.now());const a=JSON.stringify({t:Date.now(),ips:t.slice(0,300)}),o=r.K.put(e,a,{expirationTtl:1800}).catch(()=>{});r._ctx&&"function"==typeof r._ctx.waitUntil&&r._ctx.waitUntil(o)}function gt(e,t,r){return new Promise(n=>{const a=new AbortController,o=setTimeout(()=>a.abort(),r);fetch(e,Object.assign({},t,{signal:a.signal})).then(e=>{clearTimeout(o),n(e)}).catch(()=>{clearTimeout(o),n(null)})})}function vt(e){const t=[];let r="";const n=e=>/^[a-z][a-z0-9+.-]*:\/\//i.test(e),a=e=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i.test(e)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i.test(e);for(const o of String(e||"").split(/[\n;]+/)){for(const e of o.split(",")){const o=e.trim();o&&(r?n(o)||a(o)?(t.push(r),r=o):o.includes("=")||/^[A-Za-z0-9]{1,6}$/.test(o)?r=r+","+o:(t.push(r),r=o):r=o)}r&&(t.push(r),r="")}return t}async function xt(e,t=100,r=300,n=!1,a=!0,i=!1){const s=vt(e).map(e=>e.replace(/^\*\./,"")),l=Date.now(),c=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve"],d=async(e,t,r)=>{for(const n of c)try{const a=await gt(n+"?name="+encodeURIComponent(e)+"&type="+t,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(e=>e.type===r&&("A"===t?/^\d+\.\d+\.\d+\.\d+$/.test(e.data):/^[0-9a-fA-F:]+$/.test(e.data))).map(e=>e.data)}catch(e){}return[]},p=await Promise.all(s.map(async e=>{if(e.includes("://")){if(e.startsWith("sub://")){let t=e.slice(6);if(/^[A-Za-z0-9+/=]+$/.test(t)&&t.length%4==0)try{const e=atob(t);/^https?:\/\//i.test(e)&&(t=e)}catch(e){}/^https?:\/\//i.test(t)||(t="https://"+t),e=t}const s="url:"+e+(n?"|rf":"")+(a?"":"|raw"),c="srccache:"+X(s).slice(0,24),d=ht.get(s);if(d&&l-d.t<6e5)return d.ips.slice(0,t);const p=await async function(e){const t=rr;if(!t||!t.K||"function"!=typeof t.K.get)return null;try{const r=await t.K.get(e);if(!r)return null;const n=JSON.parse(r);return!n||!Array.isArray(n.ips)||!n.ips.length||Date.now()-(n.t||0)>mt?null:n.ips}catch(e){return null}}(c);if(p)return ht.set(s,{t:l,ips:p}),p.slice(0,t);try{const d=await gt(e,{},6e3);if(!d||!d.ok)throw new Error("unreachable");let p=nt(await d.arrayBuffer());if(/^[A-Za-z0-9+/=\s]{40,}$/.test(p.slice(0,2e3))&&p.replace(/\s+/g,"").length%4==0)try{const e=atob(p.replace(/\s+/g,""));p=nt(Uint8Array.from(e,e=>e.charCodeAt(0)))}catch(e){}const u=new Set,h={},m=[],f=(r=e,E.test(String(r||""))),b=e=>!a||$(e)||f,g=p.trim().split(/\r?\n/).map(e=>e.trim()).filter(Boolean);if(g.length>1&&g[0].includes(",")){const e=g[0].split(",").map(e=>e.trim()),r=e.includes("IP\u5730\u5740")&&e.includes("\u7aef\u53e3"),n=e.some(e=>e.includes("IP"))&&e.some(e=>e.includes("\u5ef6\u8fdf"))&&e.some(e=>e.includes("\u4e0b\u8f7d\u901f\u5ea6"));if(r||n){const r=e.findIndex(e=>e.includes("IP")),n=e.indexOf("\u7aef\u53e3"),a=e.findIndex(e=>e.includes("\u5ef6\u8fdf")),o=e.findIndex(e=>e.includes("\u4e0b\u8f7d\u901f\u5ea6")),i=e.indexOf("\u56fd\u5bb6")>-1?e.indexOf("\u56fd\u5bb6"):e.indexOf("\u57ce\u5e02")>-1?e.indexOf("\u57ce\u5e02"):e.indexOf("\u6570\u636e\u4e2d\u5fc3"),d=e.indexOf("TLS");for(const e of g.slice(1)){if(m.length>=t)break;const s=e.split(",").map(e=>e.trim());if(-1!==d&&s[d]&&"true"!==s[d].toLowerCase())continue;const l=(s[r]||"").match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!l)continue;const c=l[1].replace(/^\[|\]$/g,""),p=-1!==n&&s[n]?parseInt(s[n]):443,g=c+":"+p;if(u.has(g))continue;if(!b(c))continue;u.add(g);let v=-1!==i&&s[i]?s[i]:"";v||-1===a||-1===o||(v="CF\u4f18\u9009 "+(s[a]||"")+"ms "+(s[o]||"")+"MB/s"),v?(h[v]=(h[v]||0)+1,m.push({ip:c,port:p,name:v+"-"+String(h[v]).padStart(2,"0"),...f?{relay:!0}:{}})):m.push({ip:c,port:p,name:"",...f?{relay:!0}:{}})}return ht.set(s,{t:l,ips:m}),bt(c,m),m.slice()}}if(p.includes("<tr")&&p.includes("data-label")){for(const e of p.match(/<tr[\s\S]*?<\/tr>/g)||[]){if(m.length>=t)break;const r={};for(const t of e.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const e=t.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);e&&(r[e[1]]=e[2].replace(/<[^>]+>/g,"").trim())}const n=(r["\u4f18\u9009\u5730\u5740"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!n)continue;const a=n[1],o=n[2]?parseInt(n[2]):443,i=a+":"+o;if(u.has(i))continue;if(!b(a))continue;u.add(i);const s=(r["\u7ebf\u8def\u540d\u79f0"]||r["\u6570\u636e\u4e2d\u5fc3"]||"\u7ebf\u8def").trim();s?(h[s]=(h[s]||0)+1,m.push({ip:a,port:o,name:s+"-"+String(h[s]).padStart(2,"0"),...f?{relay:!0}:{}})):m.push({ip:a,port:o,name:"",...f?{relay:!0}:{}})}return ht.set(s,{t:l,ips:m}),bt(c,m),m.slice()}for(const e of p.split(/\r?\n/)){if(m.length>=t)break;const r=e.match(o);if(!r)continue;const n=r[1].replace(/^\[|\]$/g,""),a=r[2]?parseInt(r[2]):443,i=n+":"+a;if(u.has(i))continue;if(!b(n))continue;u.add(i);let s="";const l=e.indexOf("#");if(l>=0)try{s=decodeURIComponent(e.slice(l+1).trim())}catch(t){s=e.slice(l+1).trim()}s?(h[s]=(h[s]||0)+1,m.push({ip:n,port:a,name:s+"-"+String(h[s]).padStart(2,"0"),...f?{relay:!0}:{}})):m.push({ip:n,port:a,name:"",...f?{relay:!0}:{}})}for(const e of p.split(/\r?\n/)){if(m.length>=t)break;const r=e.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!r){const t=e.trim().match(/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!t||t[1])continue;const r=t[2].toLowerCase(),n=t[3]?parseInt(t[3]):443,a=r+":"+n;if(u.has(a))continue;u.add(a);const o=(t[4]||"").trim();m.push({ip:r,port:n,name:o||r,...f?{relay:!0}:{}});continue}const n=r[1],a=r[2]?parseInt(r[2]):443,o=n+":"+a;if(u.has(o))continue;if(!b(n))continue;u.add(o);const i=(r[3]||"").trim();if(i&&!/[\u4e00-\u9fa5]/.test(i)&&!i.includes("|")){m.push({ip:n,port:a,name:i,...f?{relay:!0}:{}});continue}let s="";if(r[3]){const e=r[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(e){const t=e[0].match(/[\u4e00-\u9fa5]{2,5}/);t&&(s=t[0])}else{const e=r[3].split("|").map(e=>e.trim()),t=e.find(e=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(e));if(t){const e=t.match(/[\u4e00-\u9fa5]{2,5}/);e&&(s=e[0])}else{const t=e.find(e=>/^[\u4e00-\u9fa5]{2,5}$/.test(e)&&!/^(\u5730\u533a\u968f\u673a|\u968f\u673a\u4f18\u9009|\u5b98\u65b9\u4f18\u9009|\u4f18\u9009|CF\u4f18\u9009)$/.test(e));if(t)s=t;else{const e=r[3].match(/\b([A-Z]{2})\b/);e&&(s=V[e[1]]||e[1])}}}}s?(h[s]=(h[s]||0)+1,m.push({ip:n,port:a,name:s+"-"+String(h[s]).padStart(2,"0"),...f?{relay:!0}:{}})):m.push({ip:n,port:a,name:"",...f?{relay:!0}:{}})}if(!m.length&&n){const r=(String(e).match(/\/([A-Z]{2})\//)||[])[1]||String(e).replace(/^https?:\/\//,"").split(".")[0];V[r]&&me(i?I:S,t).forEach((e,t)=>m.push({ip:e,port:443,name:V[r]+"-"+String(t+1).padStart(2,"0")}))}return ht.set(s,{t:l,ips:m}),bt(c,m),m.slice()}catch(e){const r=ht.get(s);return r&&r.ips&&r.ips.length?r.ips.slice(0,t):[]}}var r;if(!e.includes("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(e)){const t=e.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!t)return[];const r=t[1].replace(/^\[|\]$/g,""),n=t[2]?parseInt(t[2]):443,o=(t[3]||"").trim(),i=se(r);if(!i&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(r))return[];if(a&&i&&!$(r))return[];if(o)return[{ip:r,port:n,name:o}];if(i)return[{ip:r,port:n,name:""}]}const s=ht.get(e);if(s&&l-s.t<6e5)return s.ips.slice(0,t).map((t,r)=>({ip:t,port:443,name:e+"-"+(r+1)}));const c=await d(e,"A",1);let p=a?c.filter($):c;if(i){const t=await d(e,"AAAA",28);p=[...new Set(c.concat(t))].filter(e=>!a||$(e))}return p=p.slice(0,t),p.length?(ht.set(e,{t:l,ips:p}),p.map((t,r)=>({ip:t,port:443,name:e+"-"+(r+1)}))):s&&s.ips&&s.ips.length?s.ips.slice(0,t).map((t,r)=>({ip:t,port:443,name:e+"-"+(r+1)})):[]})),u=[];let h=0;for(;h<r;){let e=!1;for(const t of p){if(h>=r)break;t.length&&(u.push(t.shift()),h++,e=!0)}if(!e)break}return u}async function yt(e,r=800,n=null){const a=[],o=new Set,i=e.optimizer&&e.optimizer.subMode||"",s=e.filter&&e.filter.ipType||[],l=1===s.length&&"IPv6"===s[0],c=Tt(e),d=l?C:c?[...S,...C]:S,p="custom"===i&&!(e.optimizer&&e.optimizer.subIncludeDefault),u="custom"===i||"random"===i,h=(n,i,s,l)=>{((n,i,s,l)=>{if(a.length>=r)return;if(se(n)&&!$(n)&&!p&&!l)return;const c=n;if(o.has(c))return;o.add(c);const d=!_.has(Number(i));if(e.tlsOnly&&!d)return;const u=Number(i),h=dt(s,!!e.enableVless,!!e.enableTrojan,!(!e.enableXhttp||!d));e.enableVless&&a.push(pt(e,n,u,h.v)),e.enableTrojan&&d&&a.push(ut(e,n,d?u:Number(i),h.t)),e.enableXhttp&&d&&a.push(pt(e,n,u,h.x,{type:t("eGh0dHA=")}))})(n,Number(i)||443,s,l)};if("random"===i){let o=Math.min(Math.max(parseInt(e.optimizer.subRandomCount)||16,1),Math.min(99,r));if(e.nodeLimit){const t=parseInt(e.nodeLimitCount)||0;t>0&&(o=Math.min(Math.max(o,t),r))}const i=(e.enableVless?1:0)+(e.enableTrojan?1:0)+(e.enableXhttp?1:0)||1;let s=0;const l=me(d,3*Math.ceil(o/i));let c=l;n&&(c=[...l.filter(e=>!n.has(e)),...l.filter(e=>n.has(e))]);for(const r of c){if(s>=o)break;const n=dt("\u4f18\u9009IP-"+String(s+1).padStart(2,"0"),!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);if(e.enableVless&&(a.push(pt(e,r,443,n.v)),s++),s>=o)break;if(e.enableTrojan&&(a.push(ut(e,r,443,n.t)),s++),s>=o)break;e.enableXhttp&&(a.push(pt(e,r,443,n.x,{type:t("eGh0dHA=")})),s++)}return a}const m=vt(e.preferredDomains).filter(e=>!e.includes("://"));m.forEach((e,t)=>{const r=e.indexOf("#"),n=(r>=0?e.slice(0,r):e).trim(),a=(r>=0?e.slice(r+1):"").trim(),o=B(n,443);o.host.startsWith("*.")||h(o.host,o.port,a||"\u4f18\u9009IP-"+String(t+1).padStart(2,"0"))});let f=e.preferredIPs||[];if(c&&!l&&f.length>1){const e=[],t=[];for(const r of f)(String(r.ip).indexOf(":")>=0?t:e).push(r);const r=[],n=Math.max(e.length,t.length);for(let a=0;a<n;a++)a<e.length&&r.push(e[a]),a<t.length&&r.push(t[a]);f=r}if(f.forEach((e,t)=>{h(e.ip,e.port||443,e.name||"\u4f18\u9009IP-"+String(t+1).padStart(2,"0"),!0===e.relay||se(e.ip)&&!$(e.ip))}),!("custom"!==i||e.optimizer&&e.optimizer.subIncludeDefault))return a;m.length||(e.preferredIPs||[]).length||(fe(W.join("\n")).forEach(e=>h(e.ip,e.port||443,e.name||"0")),L.forEach((e,t)=>h(e,443,"\u57df\u540d-"+String(t+1).padStart(2,"0"))));const b=Math.min(Math.max(parseInt(e.optimizer&&e.optimizer.fillCount||0)||0,0),5e3),g=Math.min(b,r)-o.size;if(g>0){const e=n?F.filter(e=>!n.has(e)):F.slice(),t=me(d,3*g);let o=[...e,...n?t.filter(e=>!n.has(e)):t];if(o.length<g&&(o=[...F,...t]),o.length>0){const e=Math.min(o.length,20),t=o.slice(0,e),r=u?t.map(()=>!0):await tr(t,e=>ar(e,443,1500)),n=t.filter((e,t)=>r[t]),a=o.slice(e);o=[...n,...a].slice(0,g)}let i=0;for(const e of o){if(a.length>=r)break;i++,h(e,443,"\u4f18\u9009IP-"+String(i).padStart(3,"0"))}}return a}function wt(e){const t=e.indexOf("@"),r=e.indexOf("?",t),n=r>t&&t>=0?e.slice(t+1,r):e.slice(t+1);if(n.startsWith("[")){const e=n.indexOf("]"),t=e>0?n.slice(1,e):n,r=n.slice(e+1),a=r.startsWith(":")?parseInt(r.slice(1)):443;return{host:t,port:isNaN(a)?443:a}}const a=n.lastIndexOf(":");if(a>0){const e=parseInt(n.slice(a+1));return{host:n.slice(0,a),port:isNaN(e)?443:e}}return{host:n,port:443}}function kt(e,t){const r=e.indexOf("?");if(r<0)return null;const n=e.indexOf("#",r),a=n>r?e.slice(r+1,n):e.slice(r+1);for(const e of a.split("&")){const r=e.indexOf("=");if((r>0?e.slice(0,r):e)===t)return r>0?decodeURIComponent(e.slice(r+1)):""}return null}function St(e,r){const{host:n,port:a}=wt(e),o=n,i=e.indexOf("#");let s=`${"\u8282\u70b9"}${r+1}`;if(i>=0)try{s=decodeURIComponent(e.slice(i+1))||s}catch(e){}const l=e.indexOf("@");let c="";if(l>=0){const t=e.indexOf("://"),n=t>=0?t+3:0;try{c=decodeURIComponent(e.slice(n,l))}catch(r){c=e.slice(n,l)}}const d=e.startsWith(t("dHJvamFu")+"://");return{srv:o,prt:a,name:s,user:c,isTrojan:d,tls:d||"tls"===(kt(e,"security")||"tls")}}const Pt={HK:["HK","\u9999\u6e2f"],TW:["TW","\u53f0\u6e7e"],US:["US","\u7f8e\u56fd"],SG:["SG","\u65b0\u52a0\u5761"],JP:["JP","\u65e5\u672c"],KR:["KR","\u97e9\u56fd"],DE:["DE","\u5fb7\u56fd"]},It={"\u79fb\u52a8":["\u79fb\u52a8","CM","CHINAMOBILE"],"\u8054\u901a":["\u8054\u901a","CU","UNICOM"],"\u7535\u4fe1":["\u7535\u4fe1","CT","CHINATELECOM"]},Ct=["\u79fb\u52a8","\u8054\u901a","\u7535\u4fe1"],At=["IPv4","IPv6"];function $t(e,t){if(!t||!t.region&&!t.ipType&&!t.isp)return e;const r=t.region||"all",n=t.ipType||At,a=t.isp||Ct,o=e.map(e=>{const{host:t}=wt(e);let r="";try{const t=e.indexOf("#");t>=0&&(r=decodeURIComponent(e.slice(t+1)||""))}catch(e){r=""}return{host:t,name:r,up:r.toUpperCase()}}),i=o.some(e=>e.up&&Object.keys(It).some(t=>(It[t]||[t]).some(t=>e.up.includes(t.toUpperCase())))),s=(t,r,n)=>{const a=Array.isArray(t)?0===t.length||t.includes("all")?null:t.flatMap(e=>Pt[e]||[]):"all"!==t?Pt[t]||[]:null,s=n.length>0&&n.length<Ct.length;return e.filter((e,t)=>{const l=o[t],c=l.host.indexOf(":")>=0;if(!l.name)return!1;if(a&&!a.some(e=>l.up.includes(e.toUpperCase()))&&!/^(\u4f18\u9009IP|\u57df\u540d)-\d+/.test(l.name)&&"\u539f\u751f\u5730\u5740"!==l.name)return!1;if(1===r.length){if("IPv4"===r[0]&&c)return!1;if("IPv6"===r[0]&&!c)return!1}return!(s&&i&&!n.some(e=>(It[e]||[e]).some(e=>l.up.includes(e.toUpperCase()))))})};let l=s(r,n,a);return l.length||(l=s(r,n,Ct)),l.length||(l=s(r,At,Ct)),l.length||(l=s("all",At,Ct)),l}function Vt(e){try{let t=wt(e).host||"";return"["===t.charAt(0)&&(t=t.slice(1,t.indexOf("]")>0?t.indexOf("]"):void 0)),t.indexOf(":")>=0}catch(e){return!1}}function Tt(e){const t=e&&e.filter&&e.filter.ipType||[];if(!t.includes("IPv6"))return!1;if(1===t.length)return!0;const r=e&&e.ipv6Mode||"off";return"tail"===r||"full"===r}function Ut(e,t,r){const n=t&&t.ipv6Mode||"off";if(r||"full"===n||"mix"===n||e.length<2)return e;const a=[],o=[];for(const t of e)(Vt(t)?a:o).push(t);if(!a.length)return e;if("off"===n)return o.length?o:e;const i=Math.max(1,Math.min(a.length,40,Math.floor(.1*o.length)));return o.length?o.concat(a.slice(0,i)):e}const Mt=/^(?:\u4f18\u9009IP-S\d|\u5185\u7f6e\u00b7\u4fdd\u5e95-|\u96a7\u9053\u524d\u7f6e-)/;function Rt(e){try{const t=e.indexOf("#");return!(t<0)&&Mt.test(decodeURIComponent(e.slice(t+1)||""))}catch(e){return!1}}function Dt(e){for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function Et(e){if("boolean"==typeof e||"number"==typeof e)return String(e);const t=String(e);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(t)?t:JSON.stringify(t)}function Nt(e,t){const r=" ".repeat(t);return String(e||"").split("\n").map(e=>r+(e||""))}function Lt(e){const t=String(e||"");if(!t)return"";if(t.indexOf("\u5370\u5ea6\u5c3c\u897f\u4e9a")>=0)return"\u5370\u5c3c";let r="";for(const e in V){const n=V[e];n.length>r.length&&t.indexOf(n)>=0&&(r=n)}if(r)return r;const n=t.toUpperCase().match(/[A-Z]{2,3}/g)||[];for(const e of n)if(M[e])return M[e];return""}const Ft=36e5;let Ht=0;function Wt(e,t){const r=async function(e,t){try{const r=String(t||"").toUpperCase();if(!r||!e||!e.K||"function"!=typeof e.K.put)return;const n=Date.now();if(n-Ht<Ft)return;Ht=n;let a=null;try{a=JSON.parse(await e.K.get("usageColo")||"null")}catch(e){a=null}if(a&&n-(a.t||0)<Ft)return void(Ht=a.t||n);if(!ne())return;await e.K.put("usageColo",JSON.stringify({colo:r,t:n})).catch(()=>{})}catch(e){}}(e,t);e&&e._ctx&&"function"==typeof e._ctx.waitUntil?e._ctx.waitUntil(r):r.catch(()=>{})}async function zt(e){try{if(!e||!e.K||"function"!=typeof e.K.get)return"";const t=JSON.parse(await e.K.get("usageColo",{cacheTtl:30})||"null");return t&&t.colo?Date.now()-(t.t||0)>6048e5?"":String(t.colo).toUpperCase():""}catch(e){return""}}let _t=null;function Gt(e,r,n,a,o,i,c,d){const p=e.host,u="/"+e.path,h=u+"?ed=2048",m=e.alpn?e.alpn.split(",").map(e=>e.trim()).filter(Boolean):null,f=new Set,b=[],g={},v=String(n||"").toUpperCase(),x=R[v]||v||"",y=String(c||"").toUpperCase(),w=R[y]||y||"",k=String(i||"").trim().toUpperCase(),S="OFF"===k?"":V[k]||w||x,P=r.map(r=>{const{user:n,srv:a,prt:o,name:i,isTrojan:s,tls:l}=St(r,0);let c=i;const d=kt(r,"type")||"ws";let v=Lt(c);if(!v&&S&&(v=S,c=c?S+"\u00b7"+c:S+"\u00b7\u4f18\u9009"),f.has(c)){const e=s?"T":t("eGh0dHA=")===d?"X":"W";let r=c+"\u00b7"+e,n=2;for(;f.has(r);)r=c+"\u00b7"+e+n,n++;c=r}if(f.add(c),v){let e=g[v];void 0===e&&(e=b.length,g[v]=e,b.push({name:v,code:T[v]||"R"+e,nodes:[]})),b[e].nodes.push(c)}const x={name:c,server:a,port:o,udp:!0,...l?{tls:!0,[t("c2tpcC1jZXJ0LXZlcmlmeQ==")]:!0,[t("c2VydmVybmFtZQ==")]:p,[t("Y2xpZW50LWZpbmdlcnByaW50")]:"chrome",[t("YWxwbg==")]:m||["http/1.1"]}:{},...e.ech&&l?{"ech-opts":{enable:!0,"query-server-name":e.echHost||"cloudflare-ech.com"}}:{}};if(s)return{...x,type:t("dHJvamFu"),password:n,network:"ws",[t("d3Mtb3B0cw==")]:{path:l?h:u,headers:{Host:p}}};if(t("eGh0dHA=")===d){let e={};try{e=JSON.parse(kt(r,"extra")||"{}")}catch(e){}return{...x,type:t("dmxlc3M="),uuid:n,network:t("eGh0dHA="),[t("YWxwbg==")]:m||["h2"],[t("eGh0dHAtb3B0cw==")]:{path:u,mode:t("c3RyZWFtLW9uZQ=="),host:p,[t("eC1wYWRkaW5nLW9iZnMtbW9kZQ==")]:void 0===e.xPaddingObfsMode||e.xPaddingObfsMode,"x-padding-method":e.xPaddingMethod||"tokenish","x-padding-placement":e.xPaddingPlacement||"queryInHeader","x-padding-header":e.xPaddingHeader||"","x-padding-key":e.xPaddingKey||""}}}return{...x,type:t("dmxlc3M="),uuid:n,network:"ws",[t("d3Mtb3B0cw==")]:{path:l?h:u,headers:{Host:p}}}});P.sort((e,t)=>(443===e.port?0:1)-(443===t.port?0:1));const I="custom"===(e.optimizer&&e.optimizer.subMode||""),C=P.map(e=>e.name),A=e.homeWan&&C.length?"\u96a7\u9053\u524d\u7f6e":"",$=function(e){if(!e||!e.length)return e;const t=e[0],r=(e,t)=>(e||"")===(t||"");return e.map(e=>(e!==t?(r(e.ca,t.ca)&&(e.caRef="hwca"),r(e.cert,t.cert)&&(e.certRef="hwcert"),r(e.key,t.key)&&(e.keyRef="hwkey")):(e.ca&&(e.caAnchor="hwca"),e.cert&&(e.certAnchor="hwcert"),e.key&&(e.keyAnchor="hwkey")),e))}(function(e,r){if(!e.homeWan)return[];const n=Array.isArray(e.homeWanNodes)&&e.homeWanNodes.length?e.homeWanNodes:[];if(!n.length)return[];const a={};return n.map(e=>{const n="\u5bb6\u5bbd"+String(e.country||"XX").toUpperCase();let o=n,i=2;for(;a[o];)o=n+"-"+i,i++;a[o]=1;const s={name:o,type:"openvpn",server:e.server,port:Number(e.port)||1194,proto:"tcp"===String(e.proto||"udp")?"tcp":"udp",username:"vpn",password:"vpn",ca:e.ca||"",dev:"tun",handshakeTimeout:30,cipher:e.cipher||t("QUVTLTEyOC1HQ00="),auth:e.auth||"SHA1"};return e.cert&&(s.cert=e.cert),e.key&&(s.key=e.key),e.tlsAuth&&(s["tls-auth"]=e.tlsAuth,s["key-direction"]="1"),e.tlsCrypt&&(s["tls-crypt"]=e.tlsCrypt),r&&(s[t("ZGlhbGVyUHJveHk=")]=r),s})}(e,A)),U=!(!e.homeWan||I);if($.length&&P.push(...$),d&&d.length){const e=d.map(function(e){const r={name:e.name,type:e.mg?t("bWFzcXVl"):t("d2lyZWd1YXJk"),server:e.host,port:e.port,ip:e.local[0]?e.mg?String(e.local[0]).split("/")[0]+"/32":String(e.local[0]):"","private-key":e.k,"peer-public-key":e.p,udp:!0,mtu:1280,"remote-dns-resolve":!0,dns:["1.1.1.1"]};return e.local[1]&&(r.ipv6=e.mg?String(e.local[1]).split("/")[0]+"/128":String(e.local[1])),e.mg?(r.sni=e.sni,r.uri=t("aHR0cHM6Ly9jbG91ZGZsYXJlYWNjZXNzLmNvbQ=="),r["congestion-controller"]="bbr",e.msnet&&(r[t("bmV0d29yaw==")]=e.msnet)):e.cid&&(r.cid=e.cid),e[t("ZGlhbGVyUHJveHk=")]&&(r[t("ZGlhbGVyUHJveHk=")]=e[t("ZGlhbGVyUHJveHk=")]),r});P.push(...e),_t&&P.push(_t),b.push({name:yr((d.find(function(e){return!e.mg})||d[0]).name),code:"R"+b.length,nodes:e.map(function(e){return e.name}),proto:1})}const M=function(e,r){const n="https://www.gstatic.com/generate_204",a="https://www.gstatic.com/generate_204";if(!r)return"# ==================== \u7b56\u7565\u7ec4 ====================\n"+t("cHJveHktZ3JvdXA=")+"s:\n  - {name: \u4e00\u952e\u8fde\u63a5, type: select, "+t("cHJveGllcw==")+": [\u76f4\u63a5\u8fde\u63a5]}\n  - {name: \u76f4\u63a5\u8fde\u63a5, type: select, "+t("cHJveGllcw==")+": [DIRECT]}\n";const o=[];o.push("# ==================== \u76d1\u542c\u5668 ===================="),o.push("listeners:"),o.push("  # "+t("U2hhZG93c29ja3M=")+"\u76d1\u542c\u5668 - \u8fdc\u7a0b\u8fde\u63a5\u5bb6\u5ead\u7f51\u7edc\uff0c\u7aef\u53e3\u548c\u5bc6\u7801\u4f7f\u7528\u65f6\u8bf7\u4fee\u6539\uff08\u9ed8\u8ba4\u5bc6\u7801\u8bf7\u52ff\u7528\u4e8e\u516c\u7f51\uff09"),o.push("  - {name: SS-IN,  type: "+t("c2hhZG93c29ja3M=")+", listen: '::', port: 10000, "+t("dWRwOg==")+" true, password: Xf3#Lp9WqZ, cipher: "+t("YWVzLTI1Ni1nY20=")+"}"),o.push("  # Mixed\u76d1\u542c\u5668 - \u5206\u5730\u533a\u4e13\u7528\u7aef\u53e3 \u73a9\u6cd5\uff1a\u672c\u5730\u5ba2\u6237\u7aef\u6216\u63d2\u4ef6\uff0c\u5b9e\u73b0\u5206\u5730\u533a\u8bbf\u95ee"),e.slice(0,7).forEach((e,t)=>{o.push("  - {name: MIXED-"+e.code+", type: mixed, port: "+(5e4+t)+", proxy: "+e.name+"\u8282\u70b9}")}),o.push("  - {name: MIXED-AL, type: mixed, port: 50007, proxy: \u4e00\u952e\u8fde\u63a5}"),o.push(""),o.push("# ==================== \u7b56\u7565\u7ec4 ===================="),o.push(t("cHJveHktZ3JvdXA=")+"s:");const i=e.map(e=>e.name+"\u8282\u70b9");return o.push("  # \u4e3b\u5165\u53e3\uff1a\u9ed8\u8ba4\u81ea\u52a8\u9009\u62e9\u5ef6\u8fdf\u6700\u4f4e\u8282\u70b9\uff0c\u53ef\u624b\u52a8\u5207\u6362\u5404\u5730\u533a / \u5168\u90e8\u8282\u70b9 / \u76f4\u63a5\u8fde\u63a5"),o.push("  - {name: \u4e00\u952e\u8fde\u63a5, type: select, "+t("cHJveGllcw==")+": ["+["\u81ea\u52a8\u9009\u62e9","\u6545\u969c\u8f6c\u79fb"].concat(i,["\u5168\u90e8\u8282\u70b9","\u76f4\u63a5\u8fde\u63a5"]).join(", ")+"]}"),o.push("  # \u81ea\u52a8\u9009\u62e9\uff1a\u9690\u85cf\uff08\u9762\u677f\u4e0d\u53ef\u624b\u52a8\u9009\u62e9\uff09\uff0c\u7eaf\u81ea\u52a8\u4f18\u9009\u5ef6\u65f6\u6700\u4f4e\u8282\u70b9\uff1b\u6545\u969c\u8f6c\u79fb\uff1a\u6309\u5e8f\u81ea\u52a8\u5207\u6362"),o.push("  - {name: \u81ea\u52a8\u9009\u62e9, type: "+t("dXJsLXRlc3Q=")+", include-all: true, url: '"+n+"', interval: 200, timeout: 8000, expected-status: '204', lazy: true, hidden: true, "+t("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),o.push("  - {name: \u6545\u969c\u8f6c\u79fb, type: "+t("ZmFsbGJhY2s=")+", "+t("cHJveGllcw==")+": ["+i.concat(["\u5168\u90e8\u8282\u70b9"]).join(", ")+"], url: '"+n+"', interval: 200, timeout: 8000, expected-status: '204', lazy: true, "+t("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),e.forEach(e=>{const r=e.name+"\u8282\u70b9",i=e.name+"\u81ea\u52a8",s=e.proto?a:n,l=e.proto?"600":"200";o.push("  # "+e.name+"\uff08"+e.nodes.length+" \u8282\u70b9\uff09\uff1a\u9ed8\u8ba4\u9009\u4e2d\u300c"+i+"\u300d=\u81ea\u52a8\u4f18\u9009\u8be5\u5730\u533a\u6700\u5feb\u8282\u70b9\uff0c\u4e5f\u53ef\u624b\u52a8\u6307\u5b9a\u5355\u4e2a\u8282\u70b9"),o.push("  - {name: "+r+", type: select, "+t("cHJveGllcw==")+": ["+i+", "+e.nodes.map(Et).join(", ")+"]}"),o.push("  - {name: "+i+", type: "+t("dXJsLXRlc3Q=")+", "+t("cHJveGllcw==")+": ["+e.nodes.map(Et).join(", ")+"], url: '"+s+"', interval: "+l+(e.proto?", timeout: 5000, tolerance: 50, expected-status: '204'":"")+", lazy: true, "+t("ZW1wdHktZmFsbGJhY2s=")+": REJECT, hidden: true}")}),o.push("  # \u5168\u90e8\u8282\u70b9\uff08\u624b\u52a8\u6311\u9009\u4efb\u610f\u8282\u70b9\uff1b\u9996\u4e2a\u9009\u9879\u300c\u81ea\u52a8\u9009\u62e9\u300d=\u5168\u90e8\u8282\u70b9\u4e2d\u6700\u5feb\uff09"),o.push("  - {name: \u5168\u90e8\u8282\u70b9, type: select, include-all: true, "+t("cHJveGllcw==")+": [\u81ea\u52a8\u9009\u62e9]}"),o.push("  - {name: \u76f4\u63a5\u8fde\u63a5, type: select, "+t("cHJveGllcw==")+": [DIRECT]}"),o.join("\n")+"\n"}(b,P.length);let D="\n# \u76d1\u542c\u5668\u4e0e\u7b56\u7565\u7ec4\u7531\u8ba2\u9605\u751f\u6210\u65f6\u6309\u5b9e\u9645\u8282\u70b9\u52a8\u6001\u8f93\u51fa\uff08\u89c1 generate"+t("Q2xhc2g=")+" / build"+t("Q2xhc2g=")+"Groups\uff09\uff1a\n# \u6709\u8282\u70b9\u7684\u5730\u533a\u624d\u751f\u6210\u5bf9\u5e94\u5206\u7ec4\u4e0e\u76d1\u542c\u5668\uff0c\u65e0\u8282\u70b9\u4e0d\u5360\u4f4d\uff08\u5730\u533a\u5f52\u6876\u7531\u8282\u70b9\u540d\u8bc6\u522b + \u673a\u623f\u843d\u70b9\u6807\u6ce8\uff09\n\n# ==================== \u6838\u5fc3\u914d\u7f6e ====================\nmode: rule\nport: 7890\nsocks-port: 7891\n"+t("cmVkaXItcG9ydA==")+": 7892\n"+t("bWl4ZWQtcG9ydA==")+": 7893\n"+t("dHByb3h5LXBvcnQ=")+": 7895\nipv6: true\n"+t("YWxsb3ctbGFu")+": true\nunified-delay: false\ntcp-concurrent: true\nlog-level: warning\nbind-address: '*'\nfind-process-mode: 'always'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# \u8ba4\u8bc1\u914d\u7f6e\uff08\u9ed8\u8ba4\u51ed\u636e\u8bf7\u52a1\u5fc5\u4fee\u6539\uff01\uff09\nauthentication:\n  - "+t("bWlob21v")+":yyds666\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# \u5b9e\u9a8c\u6027\u529f\u80fd\nexperimental:\n  quic-go-disable-gso: true\n\n# \u7ba1\u7406\u9762\u677f\u914d\u7f6e\nexternal-ui-url: https://github.com/"+t("WmVwaHlydXNv")+"/"+t("emFzaGJvYXJk")+"/releases/latest/download/dist.zip\nexternal-ui-name: "+t("emFzaGJvYXJk")+'\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: yyds666    # \u8bf7\u4fee\u6539\u4e3a\u81ea\u5b9a\u4e49\u5bc6\u94a5\n# \u5141\u8bb8\u7f51\u9875\u9762\u677f\u8de8\u57df\u8bbf\u95ee\nexternal-controller-cors:\n  allow-origins:\n    - "*"\n  allow-private-'+t("bmV0d29yazo=")+" true\n\n# \u914d\u7f6e\u5b58\u50a8\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# "+t("Z2Vvc2l0ZQ==")+" / "+t("Z2VvaXA=")+" \u6570\u636e\u6e90\uff08"+t("R0VPU0lURQ==")+" \u89c4\u5219\u4f9d\u8d56\uff1b"+t("TWV0YUN1YmVY")+" \u5b98\u65b9\u89c4\u5219\u5e93\uff0cGitHub release \u5b98\u65b9\u6e90\uff09\n"+t("Z2VveC11cmw=")+":\n  "+t("Z2VvaXA=")+': "https://github.com/'+t("TWV0YUN1YmVY")+"/"+t("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+t("Z2VvaXA=")+'.dat"\n  '+t("Z2Vvc2l0ZQ==")+': "https://github.com/'+t("TWV0YUN1YmVY")+"/"+t("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+t("Z2Vvc2l0ZQ==")+'.dat"\n  mmdb: "https://github.com/'+t("TWV0YUN1YmVY")+"/"+t("bWV0YS1ydWxlcy1kYXQ=")+'/releases/download/latest/country.mmdb"\n\n# \u6d41\u91cf\u55c5\u63a2\n'+t("c25pZmZlcg==")+":\n  enable: true\n  force-dns-mapping: true   # \u5f3a\u5236 DNS \u6620\u5c04\uff0c\u63d0\u9ad8\u5206\u6d41\u51c6\u786e\u5ea6\n  parse-pure-ip: true       # \u89e3\u6790\u7eaf IP \u8fde\u63a5\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    "+t("VExTOg==")+'\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - "+.push.apple.com"\n\n# TUN\u6a21\u5f0f\u914d\u7f6e\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  '+t("ZG5zLWhpamFjaw==")+':\n    - "any:53"\n    - "tcp://any:53"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # \u63d0\u793a\uff1a\u7cfb\u7edf\u7ea7\u9632\u6cc4\u9732\u7684\u6700\u5f3a\u624b\u6bb5\u662f\u5f00\u542f TUN\uff08\u81ea\u52a8\u52ab\u6301\u5168\u90e8 DNS \u6d41\u91cf\uff09\uff1b\n  # \u4e0d\u5f00 TUN \u65f6\uff0c\u8bf7\u628a\u7cfb\u7edf / LAN \u8bbe\u5907\u7684 DNS \u6307\u5411 127.0.0.1:53\uff08\u672c\u673a\uff09\u6216\u672c\u673a\u5c40\u57df\u7f51 IP:53\u3002\n\nhosts:\n  miwifi.com: 192.168.31.2\n  "epdg.epc.mnc010.mcc234.pub.3gppnetwork.org": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS \u914d\u7f6e ====================\n# \u9632\u6cc4\u9732\u8981\u70b9\uff1a\n#   1) respect-rules: true\uff1aDNS \u670d\u52a1\u5668\u8fde\u63a5\u9075\u5faa\u8def\u7531\u89c4\u5219\uff08\u56fd\u5916 DoH \u8d70\u96a7\u9053\u3001\u56fd\u5185 DoH \u76f4\u8fde\uff09\uff0c\n#      \u89e3\u6790\u884c\u4e3a\u4e0e\u89c4\u5219\u5206\u6d41\u4e00\u81f4\uff0c\u907f\u514d\u201c\u89c4\u5219\u8d70\u51fa\u53e3\u3001\u89e3\u6790\u5374\u76f4\u8fde\u201d\u7684\u6cc4\u9732\u3002\n#   2) \u9ed8\u8ba4 nameserver \u7528\u56fd\u5185 DoH\uff1b\u53ea\u6709\u201c\u5c06\u8d70\u51fa\u53e3\u201d\u7684\u89c4\u5219\u96c6\u624d\u7528\u56fd\u5916 DoH\uff0c\n#      \u4e14\u5176\u57df\u540d\u5728 rules \u4e2d\u663e\u5f0f\u56fa\u5b9a\u8d70\u51fa\u53e3\u3002\n#   3) fake-ip-filter \u8865\u9f50\u7cfb\u7edf\u8fde\u901a\u6027\u68c0\u6d4b / \u65f6\u95f4\u540c\u6b65 / \u8fd0\u8425\u5546\u767b\u5f55\u7b49\u57df\u540d\uff0c\u9632\u6b62\u7cfb\u7edf\u8bef\u5224\u65ad\u7f51\u800c\u56de\u9000\u8fd0\u8425\u5546 DNS\u3002\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # \u672c\u673a / LAN \u8bbe\u5907\u53ef\u628a DNS \u6307\u5411\u6b64\u5730\u5740\uff0c\u907f\u514d\u8d70\u8fd0\u8425\u5546 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules \u4e0b\u5b98\u65b9\u4e0d\u63a8\u8350 DoH3\uff1b\u4e14 QUIC \u5df2\u88ab\u89c4\u5219\u62e6\u622a\n  cache-algorithm: arc      # \u6027\u80fd\u66f4\u4f18\u7684 ARC \u7f13\u5b58\u7b97\u6cd5\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "+.lan"\n    - "+.local"\n    - "+.localhost"\n    - "+.home.arpa"\n    - "+.internal"\n    # \u7cfb\u7edf\u8fde\u901a\u6027\u68c0\u6d4b\uff08\u9632\u6b62 fake-ip \u5bfc\u81f4\u201c\u65e0\u7f51\u7edc\u201d\u5224\u65ad\uff0c\u56de\u9000 ISP DNS \u9020\u6210\u6cc4\u9732\uff09\n    - "+.msft'+t("Y29ubmVjdA==")+'test.com"\n    - "+.msftncsi.com"          # \u901a\u914d\u5df2\u8986\u76d6 dns.msftncsi.com\n    - "captive.apple.com"\n    - "'+t("Y29ubmVjdA==")+'ivitycheck.gstatic.com"\n    - "detectportal.firefox.com"\n    # \u65f6\u95f4\u540c\u6b65\n    - "time.nist.gov"\n    - "+.pool.ntp.org"\n    - "time.*.com"              # \u901a\u914d\u5df2\u8986\u76d6 time.windows.com\n    - "ntp.*.com"               # \u901a\u914d\u5df2\u8986\u76d6 ntp.ubuntu.com\n    # \u8fd0\u8425\u5546 Wi-Fi \u767b\u5f55\u9875\n    - "+.cmpassport.com"\n    - "id6.me"\n    - "open.e.189.cn"\n    - "mdn.open.wo.cn"\n    - "opencloud.wostore.cn"\n    - "auth.wosms.cn"\n    - "+.10099.com.cn"\n    # \u539f\u914d\u7f6e\u4fdd\u7559\u9879\n    - "+.market.xiaomi.com"\n    - "+.pub.3gppnetwork.org"\n    - "+.push.apple.com"\n    - "+.bing.com"\n    - "+.miwifi.com"\n    - "+.docker.io"\n    # \u56fd\u5185\u5e94\u7528\u767b\u5f55\uff08+.qq.com \u5df2\u8986\u76d6 localhost.ptlogin2.qq.com\uff09\n    - "+.qq.com"\n    # \u76f4\u8fde / \u56fd\u5185\u7c7b\u89c4\u5219\u96c6\uff1a\u8fd4\u56de\u771f\u5b9e IP\n    - '+t("cnVsZS1zZXQ=")+":Direct\n    - "+t("cnVsZS1zZXQ=")+":Private\n    - "+t("cnVsZS1zZXQ=")+":China\n    - "+t("Z2Vvc2l0ZQ==")+":cn                # \u56fd\u5185\u57df\u540d\u8fd4\u56de\u771f\u5b9e IP\uff08"+t("Z2Vvc2l0ZQ==")+" \u5e93\u515c\u5e95\uff0c\u9632 fake-ip \u5e72\u6270\u56fd\u5185\u5e94\u7528\uff09\n  use-hosts: true\n  respect-rules: true\n  # \u5f15\u5bfc\u7528 DNS\uff08\u89e3\u6790 DoH/DoT \u670d\u52a1\u5668\u81ea\u8eab\u7684\u57df\u540d\uff09\uff0c\u5fc5\u987b\u662f IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # \u9ed8\u8ba4\u89e3\u6790\uff1a\u672a\u547d\u4e2d "+t("bmFtZXNlcnZlci1wb2xpY3k=")+' \u7684\u57df\u540d\uff08\u56fd\u5185 DoH\uff0c\u76f4\u8fde\uff09\n  nameserver:\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # \u76f4\u8fde\u51fa\u53e3\u7684\u89e3\u6790\n  '+t("ZGlyZWN0LW5hbWVzZXJ2ZXI=")+':\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  # \u89e3\u6790\u8282\u70b9\u57df\u540d\uff08\u9632\u5957\u5a03 / \u9632\u5faa\u73af\uff0c\u7528\u56fd\u5185\u76f4\u8fde\u53ef\u8fbe\u7684 DoH\uff09\n  '+t("cHJveHktc2VydmVyLW5hbWVzZXJ2ZXI=")+':\n    - "https://dns.alidns.com/dns-query"\n    - "https://doh.pub/dns-query"\n  '+t("bmFtZXNlcnZlci1wb2xpY3k=")+':\n    # \u5e7f\u544a\u57df\u540d\u76f4\u63a5\u8fd4\u56de\u7a7a\u5e94\u7b54\n    "'+t("cnVsZS1zZXQ=")+":Advertising,"+t("QVdBdmVudWU=")+'Ads": rcode://success\n    # \u76f4\u8fde\u7c7b\uff1a\u56fd\u5185 DoH\uff08\u5fae\u8f6f\u5df2\u5e76\u5165\u76f4\u8fde\uff0c\u5fae\u8f6f\u57df\u540d\u8d70\u56fd\u5185\u89e3\u6790\u540e\u76f4\u8fde\uff09\n    "'+t("cnVsZS1zZXQ=")+':Direct,Private,China,Microsoft":\n      - "https://dns.alidns.com/dns-query"\n      - "https://doh.pub/dns-query"\n    # \u8d70\u51fa\u53e3\u7c7b\uff1a\u56fd\u5916 DoH\uff08\u8fde\u63a5\u672c\u8eab\u7ecf\u96a7\u9053\uff0c\u4e0d\u76f4\u8fde\u66b4\u9732\u67e5\u8be2\uff09\n    "'+t("cnVsZS1zZXQ=")+":AI,Telegram,Twitter,SocialMedia,Netflix,"+t("WW91VHViZQ==")+',Spotify,TikTok,disney,Google,Proxy":\n      - "https://dns.google/dns-query"\n      - "https://cloudflare-dns.com/dns-query"\n\n__'+t("Q0xBU0g=")+"_GROUPS__\n\n# ==================== \u89c4\u5219\u8def\u7531 ====================\nrules:\n  # \u5e7f\u544a\u62e6\u622a\uff08\u5e38\u7528\uff1a\u76f4\u63a5\u62d2\u7edd\uff1b\u5982\u9700\u4e34\u65f6\u653e\u884c\u53ef\u6539\u4e3a\u4e00\u952e\u8fde\u63a5\uff09\n  - "+t("UlVMRS1TRVQ=")+",Tracking,REJECT\n  - "+t("UlVMRS1TRVQ=")+","+t("QVdBdmVudWU=")+"Ads,REJECT\n  - "+t("UlVMRS1TRVQ=")+",Advertising,REJECT\n  - "+t("R0VPU0lURQ==")+",category-ads-all,REJECT        # "+t("Z2Vvc2l0ZQ==")+" \u5e7f\u544a\u5206\u7c7b\u515c\u5e95\uff08"+t("djJyYXk=")+" \u6807\u51c6\u5e93\uff0c\u8986\u76d6\u9762\u5e7f\uff09\n\n  # DNS \u670d\u52a1\u5668\u57df\u540d\uff1a\u89e3\u6790\u901a\u9053\u56fa\u5b9a\uff0c\u907f\u514d DNS \u6d41\u91cf\u8d70\u9519\u8def\u5f84\uff08\u9632\u6cc4\u9732\u5173\u952e\uff09\n  - DOMAIN-SUFFIX,alidns.com,\u76f4\u63a5\u8fde\u63a5\n  - DOMAIN-SUFFIX,doh.pub,\u76f4\u63a5\u8fde\u63a5\n  - DOMAIN,dns.google,\u4e00\u952e\u8fde\u63a5\n  - DOMAIN,cloudflare-dns.com,\u4e00\u952e\u8fde\u63a5\n\n  # \u5927\u9646\u76f4\u8fde\u4f18\u5148\uff08\u7f6e\u4e8e\u56fd\u5916\u670d\u52a1\u89c4\u5219\u4e4b\u524d\uff1a\u5927\u9646\u5e94\u7528\u4e00\u5f8b\u76f4\u8fde\uff0c\u4e0d\u88ab\u56fd\u5916\u670d\u52a1\u89c4\u5219\u96c6\u62a2\u5148\u547d\u4e2d\uff09\n  - "+t("UlVMRS1TRVQ=")+",Private,\u76f4\u63a5\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Direct,\u76f4\u63a5\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Download,\u76f4\u63a5\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",AppleCN,\u76f4\u63a5\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Microsoft,\u76f4\u63a5\u8fde\u63a5        # \u5fae\u8f6f\u5168\u5bb6\u6876\u76f4\u8fde\uff08Office / OneDrive / Windows \u66f4\u65b0 / Teams / Xbox \u7b49\uff09\n  - "+t("UlVMRS1TRVQ=")+",China,\u76f4\u63a5\u8fde\u63a5             # \u56fd\u5185\u57df\u540d\u76f4\u8fde\n  - "+t("R0VPU0lURQ==")+",CN,\u76f4\u63a5\u8fde\u63a5                  # "+t("Z2Vvc2l0ZQ==")+" \u56fd\u5185\u57df\u540d\u515c\u5e95\uff08\u8986\u76d6\u89c4\u5219\u96c6\u672a\u6536\u5f55\u7684\u56fd\u5185\u57df\u540d\uff0c\u5148\u4e8e "+t("R0VPSVA=")+" \u547d\u4e2d\uff09\n  # \u963b\u6b62 QUIC \u8d70\u51fa\u53e3\uff08\u5f3a\u5236\u56de\u9000 TCP\uff0c\u907f\u514d QUIC \u7ed5\u8fc7\u51fa\u53e3 / \u88ab\u5e72\u6270\uff09\u3002\n  # \u653e\u5728\u76f4\u8fde\u89c4\u5219\u4e4b\u540e\uff1a\u76f4\u8fde QUIC\uff08\u5927\u9646 / \u5fae\u8f6f / \u82f9\u679c\uff09\u4e0d\u53d7\u5f71\u54cd\u3002\u5982\u9700 Telegram \u8bed\u97f3\u7b49 UDP\uff0c\u53ef\u5220\u9664\u6b64\u884c\u3002\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # \u5e38\u7528\u56fd\u5916\u670d\u52a1\uff08\u7edf\u4e00\u8d70\u4e00\u952e\u8fde\u63a5\uff09\n  - "+t("UlVMRS1TRVQ=")+",AI,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Telegram,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Twitter,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",SocialMedia,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Netflix,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+","+t("WW91VHViZQ==")+",\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Spotify,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",TikTok,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",disney,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Google,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",github,\u4e00\u952e\u8fde\u63a5\n  - "+t("UlVMRS1TRVQ=")+",Proxy,\u4e00\u952e\u8fde\u63a5\n\n  # IP\u89c4\u5219\n  - "+t("UlVMRS1TRVQ=")+",PrivateIP,\u76f4\u63a5\u8fde\u63a5,no-resolve\n  - "+t("UlVMRS1TRVQ=")+",TelegramIP,\u4e00\u952e\u8fde\u63a5,no-resolve\n  - "+t("UlVMRS1TRVQ=")+","+t("UHJveHlJUA==")+",\u4e00\u952e\u8fde\u63a5,no-resolve\n  - "+t("UlVMRS1TRVQ=")+",ChinaIP,\u76f4\u63a5\u8fde\u63a5,no-resolve\n\n  # \u5927\u9646 IP \u515c\u5e95\u76f4\u8fde\uff1a\u8986\u76d6\u89c4\u5219\u96c6\u672a\u6536\u5f55\u7684\u57df\u540d / \u7eaf IP \u8fde\u63a5\u7684\u5927\u9646\u5e94\u7528\uff08"+t("R0VPSVA=")+" \u5e93\u8986\u76d6\u9762\u66f4\u5168\uff09\n  - "+t("R0VPSVA=")+",CN,\u76f4\u63a5\u8fde\u63a5,no-resolve\n\n  # \u515c\u5e95\u89c4\u5219\uff1a\u5176\u4f59\uff08\u56fd\u5916\uff09\u8d70\u4e00\u952e\u8fde\u63a5\n  - MATCH,\u4e00\u952e\u8fde\u63a5\n\n# ==================== \u89c4\u5219\u96c6 ====================\n# \u89c4\u5219\u96c6\u884c\u4e3a\u6a21\u677f\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # \u7ecf\u5178\u89c4\u5219\u96c6\uff08"+t("YmxhY2ttYXRyaXg3")+" \u7b49\uff0cDOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME\uff09\n\n# \u89c4\u5219\u63d0\u4f9b\u8005\uff08\u4ec5\u4fdd\u7559\u5e38\u7528\uff09\n# \u2605 \u540c\u57df\u4ee3\u4e0b\uff1aurl \u6307\u5411 __CRULES__\uff08\u751f\u6210\u65f6\u66ff\u6362\u4e3a https://<\u5f53\u524d\u8ba2\u9605\u57df\u540d>/crules\uff09\u2014\u2014\n#   \u5ba2\u6237\u7aef\u5bfc\u5165/\u66f4\u65b0\u96f6\u5916\u90e8\u76f4\u8fde\uff08\u4e0d\u5f00\u68af\u5b50\u4e5f\u80fd\u5b8c\u6210\u5bfc\u5165\uff09\uff1b\u4e0a\u6e38\u4ed3\u5e93\u8d44\u6e90\u7531 Worker \u670d\u52a1\u7aef\u62c9\u53d6\uff0c\n#   KV \u7f13\u5b58 + \u8fdb\u7a0b\u5185\u7f13\u5b58\uff0c\u5ba2\u6237\u7aef\u4e0d\u518d\u6bcf\u6b21\u76f4\u8fde\u5916\u7ad9\u4e0b\u8f7d\uff08\u89c1 serveCrule / RULE_SOURCES\uff09\n"+t("cnVsZS1wcm92aWRlcg==")+"s:\n  # \u5e7f\u544a\n  Tracking:       {<<: *BehaviorDN, url: __CRULES__/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: __CRULES__/Advertising.mrs}\n  "+t("QVdBdmVudWU=")+"Ads:    {<<: *BehaviorDY, url: __CRULES__/"+t("QVdBdmVudWU=")+"Ads.yaml}\n  # \u76f4\u8fde / \u56fd\u5185\n  Direct:         {<<: *BehaviorDN, url: __CRULES__/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: __CRULES__/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: __CRULES__/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: __CRULES__/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: __CRULES__/China.yaml}   # \u5927\u9646\u76f4\u8fde\u5168\u91cf\uff1aChinaMaxNoIP\uff0811\u4e07+ \u57df\u540d\uff0c\u542b\u5927\u9646\u53ef\u8fbe\u56fd\u9645\u670d\u52a1\uff09\uff0c\u6bcf\u65e5\u66f4\u65b0\n  # \u5e38\u7528\u56fd\u5916\u670d\u52a1\n  AI:             {<<: *BehaviorDN, url: __CRULES__/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: __CRULES__/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: __CRULES__/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: __CRULES__/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: __CRULES__/Netflix.mrs}\n  "+t("WW91VHViZQ==")+":        {<<: *BehaviorDN, url: __CRULES__/"+t("WW91VHViZQ==")+".mrs}\n  Google:         {<<: *BehaviorDN, url: __CRULES__/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: __CRULES__/Microsoft.yaml}   # \u5fae\u8f6f\u5168\u5bb6\u6876\u5168\u91cf\uff1a"+t("YmxhY2ttYXRyaXg3")+"\uff08Office/OneDrive/Xbox/Teams/Skype/Bing/Azure \u7b49\uff09\n  Proxy:          {<<: *BehaviorDN, url: __CRULES__/Proxy.mrs}\n  # \u5a92\u4f53\uff08"+t("RHVzdGluV2lu")+"\uff09\n  Spotify:        {<<: *BehaviorDN, url: __CRULES__/Spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: __CRULES__/TikTok.mrs}\n  disney:         {<<: *BehaviorDN, url: __CRULES__/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: __CRULES__/github.yaml}\n  # IP\u89c4\u5219\n  PrivateIP:      {<<: *BehaviorIP, url: __CRULES__/PrivateIP.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: __CRULES__/TelegramIP.mrs}\n  "+t("UHJveHlJUA==")+":        {<<: *BehaviorIP, url: __CRULES__/"+t("UHJveHlJUA==")+".mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: __CRULES__/ChinaIP.mrs}\n\n# ==================== EOF ====================\n\n";D=D.replace("__"+t("Q0xBU0g=")+"_GROUPS__",M),a&&(D=D.replace(/__CRULES__/g,a)),D=function(e,r,n,a,o){if(!(r.length||o&&o.length))return e;let i=e;if(r.length){const e=r.map(e=>e.name),o=e.slice().sort((e,t)=>e<t?-1:e>t?1:0),s=a&&a.length?`  # ${"\u5bb6\u5bbd\u96a7\u9053\u524d\u7f6e\uff1a"}CF ${"\u4f18\u9009\u8282\u70b9\u81ea\u52a8\u6d4b\u6d3b\uff0c\u5bb6\u5bbd"} openvpn ${"\u7ecf\u6b64\u62e8\u53f7\uff08"}${t("ZGlhbGVy")}-proxy${"\uff09"}\n  - {name: ${"\u96a7\u9053\u524d\u7f6e"}, type: ${t("dXJsLXRlc3Q=")}, ${t("cHJveGllcw==")}: [${a.map(Et).join(", ")}], url: 'https://www.gstatic.com/generate_204', interval: 300, lazy: true, hidden: true, ${t("ZW1wdHktZmFsbGJhY2s=")}: REJECT}\n`:"",l=`  # ${"\u5bb6\u5bbd\u6a21\u5f0f\uff1a\u81ea\u52a8\u6d4b\u6d3b\uff08"}${t("dXJsLXRlc3Q=")} ${"\u81ea\u52a8\u9009\u62e9\u5ef6\u8fdf\u6700\u4f4e\u5bb6\u5bbd\u8282\u70b9\uff09"}\n  - {name: ${"\u5bb6\u5bbd\u81ea\u52a8"}, type: ${t("dXJsLXRlc3Q=")}, ${t("cHJveGllcw==")}: [${e.map(Et).join(", ")}], url: 'https://www.gstatic.com/generate_204', interval: 600, lazy: true, hidden: true, ${t("ZW1wdHktZmFsbGJhY2s=")}: REJECT}\n`,c=`  # ${"\u5bb6\u5bbd\u6a21\u5f0f\uff1a"}VPN Gate OpenVPN ${"\u51fa\u53e3\uff08\u591a\u53f0\u5bb6\u5bbd\u8282\u70b9\u81ea\u52a8\u6d4b\u6d3b\uff0c\u7ecf"} ${t("ZGlhbGVy")}-proxy ${"\u96a7\u9053\u62e8\u53f7\uff09"}\n  - {name: ${"\u5bb6\u5bbd\u51fa\u53e3"}, type: select, ${t("cHJveGllcw==")}: [${"\u5bb6\u5bbd\u81ea\u52a8"}, ${o.map(Et).join(", ")}, ${"\u76f4\u63a5\u8fde\u63a5"}]}\n`;i=i.replace("# ==================== \u89c4\u5219\u8def\u7531 ====================",s+l+c+"# ==================== \u89c4\u5219\u8def\u7531 ===================="),i=i.replace("  - MATCH,\u4e00\u952e\u8fde\u63a5","  # \u5bb6\u5bbd\u6a21\u5f0f\uff1aVPN Gate \u76f8\u5173\u6d41\u91cf\u8d70\u5bb6\u5bbd\u51fa\u53e3\uff08OpenVPN \u7ecf CF \u96a7\u9053\uff09\n  - DOMAIN-SUFFIX,vpngate.net,\u5bb6\u5bbd\u51fa\u53e3\n"+(n?"  - MATCH,\u5bb6\u5bbd\u51fa\u53e3":"  - MATCH,\u4e00\u952e\u8fde\u63a5"))}return function(e,r){try{if(!r||!r.length)return e;const n=r.map(Et).join(", ")+", \u4e00\u952e\u8fde\u63a5",a=t("dXJsLXRlc3Q="),o=t("cHJveGllcw=="),i=t("ZW1wdHktZmFsbGJhY2s="),s="  # AI \u4e0e\u6d41\u5a92\u4f53\u4e13\u7528\u7b56\u7565\u7ec4\uff1a\u6309\u771f\u5b9e\u7ad9\u70b9\u6d4b\u6d3b\uff0c\u53ea\u6709\u80fd\u76f4\u8fde\u8be5\u7ad9\u70b9\u7684\u8282\u70b9\u624d\u4f1a\u88ab\u9009\u4e2d\uff1b\n  # \u7ec4\u5185\u672b\u4f4d\u56fa\u5b9a\u6302\u300c\u4e00\u952e\u8fde\u63a5\u300d\u515c\u5e95\uff0c\u5168\u90e8\u4e0d\u8fbe\u6807\u65f6\u4ecd\u53ef\u6b63\u5e38\u51fa\u7f51\uff0c\u4e0d\u4f1a\u65ad\u6d41\u3002\n"+"  - {name: AI\u81ea\u52a8, type: "+a+", "+o+": ["+n+"], url: 'https://chatgpt.com/cdn-cgi/trace', interval: 600, timeout: 5000, tolerance: 50, expected-status: '200-399', lazy: true, hidden: true, "+i+": REJECT}\n"+"  - {name: AI\u4f18\u9009, type: select, "+o+": [AI\u81ea\u52a8, \u4e00\u952e\u8fde\u63a5, \u76f4\u63a5\u8fde\u63a5]}\n"+"  - {name: \u6d41\u5a92\u4f53\u81ea\u52a8, type: "+a+", "+o+": ["+n+"], url: 'https://www."+t("eW91dHViZQ==")+".com/generate_204', interval: 600, timeout: 5000, tolerance: 50, expected-status: '204', lazy: true, hidden: true, "+i+": REJECT}\n"+"  - {name: \u6d41\u5a92\u4f53\u4f18\u9009, type: select, "+o+": [\u6d41\u5a92\u4f53\u81ea\u52a8, \u4e00\u952e\u8fde\u63a5, \u76f4\u63a5\u8fde\u63a5]}\n",l=t("UlVMRS1TRVQ=");let c=e.replace("# ==================== \u89c4\u5219\u8def\u7531 ====================",s+"# ==================== \u89c4\u5219\u8def\u7531 ====================");return c=c.replace("  - "+l+",AI,\u4e00\u952e\u8fde\u63a5","  - "+l+",AI,AI\u4f18\u9009"),["Netflix",t("WW91VHViZQ=="),"Spotify","TikTok","disney"].forEach(function(e){c=c.replace("  - "+l+","+e+",\u4e00\u952e\u8fde\u63a5","  - "+l+","+e+",\u6d41\u5a92\u4f53\u4f18\u9009")}),c}catch(t){return e}}(i,(o&&o.length?o:r).map(function(e){return e.name}))}(D,$,U,C,d);{const e=String(p||"").toLowerCase(),r=/^[a-z0-9]([a-z0-9.-]{0,251}[a-z0-9])?$/.test(e)?"  - DOMAIN,"+e+",DIRECT\n":"";D=D.replace("# ==================== \u89c4\u5219\u8def\u7531 ====================\nrules:\n","# ==================== \u89c4\u5219\u8def\u7531 ====================\nrules:\n  # \u672c\u8ba2\u9605\u57df\u540d\u5fc5\u987b\u76f4\u8fde\uff1a\u5ba2\u6237\u7aef\uff08"+t("Q2xhc2g=")+" Verge \u7b49\uff09\u62c9\u53d6/\u66f4\u65b0\u8ba2\u9605\u8d70\u7684\u662f\u7cfb\u7edf\u4ee3\u7406\uff08=\u672c "+t("Q2xhc2g=")+" \u81ea\u8eab\uff09\uff0c\n  # \u89c4\u5219\u91cc\u82e5\u6ca1\u6709 DIRECT \u653e\u884c\uff0c\u8bf7\u6c42\u4f1a\u88ab\u9001\u8fdb\u4ee3\u7406\u8282\u70b9 \u2192 \u81ea\u6307\u5faa\u73af \u2192 TLS \u63e1\u624b\u88ab\u65ad\uff08tls handshake eof\uff09\u2192 \u5bfc\u5165/\u66f4\u65b0\u5931\u8d25\n"+r+"  - DOMAIN-SUFFIX,pages.dev,DIRECT\n  - DOMAIN-SUFFIX,workers.dev,DIRECT\n")}const E=String(o||"").toUpperCase(),N=V[E]||"";return`# ${l} ${"\u8ba2\u9605"} v${s} ${"\u00b7"} ${"\u673a\u623f"} ${v||"\u672a\u77e5"}${x?"("+x+")":""}${y&&y!==v?" \u00b7 \u5b9e\u6d4b "+y+(w?"("+w+")":""):""}${E?" \u00b7 \u8bbf\u5ba2 "+E+(N?"("+N+")":""):""} ${"\u00b7"} ${"\u8282\u70b9"} ${P.length} ${"\u4e2a"}\ntest-url: 'https://www.gstatic.com/generate_204'\n${t("cHJveGllcw==")}:\n${P.map(e=>function(e){const r=[];if(r.push("  - name: "+Et(e.name)),r.push("    type: "+e.type),r.push("    server: "+Et(e.server)),r.push("    port: "+e.port),"openvpn"===e.type)return r.push("    proto: "+Et(e.proto||"udp")),r.push("    "+t("dWRwOg==")+" "+("tcp"===e.proto?"false":"true")),r.push("    username: "+Et(e.username||"vpn")),r.push("    password: "+Et(e.password||"vpn")),e.caRef?r.push("    ca: *"+e.caRef):e.ca&&(r.push(e.caAnchor?"    ca: &"+e.caAnchor+" |":"    ca: |"),r.push(...Nt(e.ca,6))),e.certRef?r.push("    cert: *"+e.certRef):e.cert&&(r.push(e.certAnchor?"    cert: &"+e.certAnchor+" |":"    cert: |"),r.push(...Nt(e.cert,6))),e.keyRef?r.push("    key: *"+e.keyRef):e.key&&(r.push(e.keyAnchor?"    key: &"+e.keyAnchor+" |":"    key: |"),r.push(...Nt(e.key,6))),e["tls-auth"]&&(r.push("    tls-auth: |"),r.push(...Nt(e["tls-auth"],6)),r.push("    key-direction: "+Et(e["key-direction"]||"1"))),e["tls-crypt"]&&(r.push("    tls-crypt: |"),r.push(...Nt(e["tls-crypt"],6))),r.push("    dev: tun"),r.push("    cipher: "+Et(e.cipher||t("QUVTLTEyOC1HQ00="))),r.push("    auth: "+Et(e.auth||"SHA1")),e.handshakeTimeout&&r.push("    handshake-timeout: "+e.handshakeTimeout),e[t("ZGlhbGVyUHJveHk=")]&&r.push("    "+t("ZGlhbGVy")+"-proxy: "+Et(e[t("ZGlhbGVyUHJveHk=")])),r.join("\n");if(t("bWFzcXVl")===e.type)return e.ip&&r.push("    ip: "+Et(e.ip)),e.ipv6&&r.push("    ipv6: "+Et(e.ipv6)),r.push("    private-key: "+Et(e["private-key"]||"")),r.push("    public-key: "+Et(e["peer-public-key"]||"")),r.push("    "+t("dWRwOg==")+" true"),r.push("    mtu: "+(e.mtu||1280)),e[t("ZGlhbGVyUHJveHk=")]&&r.push("    "+t("ZGlhbGVy")+"-proxy: "+Et(e[t("ZGlhbGVyUHJveHk=")])),e.sni&&r.push("    sni: "+Et(e.sni)),e["remote-dns-resolve"]&&r.push("    remote-dns-resolve: true"),e.dns&&e.dns.length&&r.push("    dns: ["+e.dns.join(", ")+"]"),e.uri&&r.push("    "+t("dXJp")+": "+e.uri),e["congestion-controller"]&&r.push("    "+t("Y29uZ2VzdGlvbi1jb250cm9sbGVy")+": "+e["congestion-controller"]),e.network&&r.push("    "+t("bmV0d29yaw==")+": "+e.network),r.join("\n");if(t("d2lyZWd1YXJk")===e.type)return e.ip&&r.push("    ip: "+Et(e.ip)),e.ipv6&&r.push("    ipv6: "+Et(e.ipv6)),r.push("    private-key: "+Et(e["private-key"]||"")),r.push("    public-key: "+Et(e["peer-public-key"]||"")),e[t("ZGlhbGVyUHJveHk=")]&&r.push("    "+t("ZGlhbGVy")+"-proxy: "+Et(e[t("ZGlhbGVyUHJveHk=")])),e["pre-shared-key"]&&r.push("    pre-shared-key: "+Et(e["pre-shared-key"])),e.cid&&r.push("    "+t("cmVzZXJ2ZWQ=")+": "+Et(e.cid)),r.push("    "+t("cGVyc2lzdGVudC1rZWVwYWxpdmU=")+": "+(e["persistent-keepalive"]||25)),r.push("    "+t("dWRwOg==")+" true"),r.push("    mtu: "+(e.mtu||1280)),e["remote-dns-resolve"]&&r.push("    remote-dns-resolve: true"),e.dns&&e.dns.length&&r.push("    dns: ["+e.dns.join(", ")+"]"),r.join("\n");if(e.type===t("c2hhZG93c29ja3M=")||e.type===t("c29ja3M1")||"http"===e.type)return e.cipher&&r.push("    cipher: "+Et(e.cipher)),e.username&&r.push("    username: "+Et(e.username)),e.password&&r.push("    password: "+Et(e.password)),e.tls&&r.push("    "+t("dGxzOg==")+" true"),r.push("    "+t("dWRwOg==")+" true"),r.join("\n");if(t("dmxlc3M=")===e.type?r.push("    uuid: "+Et(e.uuid)):r.push("    password: "+Et(e.password)),r.push("    "+t("bmV0d29yazo=")+" "+e.network),r.push("    "+t("dWRwOg==")+" true"),e.tls&&(r.push("    "+t("dGxzOg==")+" true"),r.push("    "+t("c2tpcC1jZXJ0LXZlcmlmeQ==")+": true"),r.push(e.alpn&&e.alpn.length?"    "+t("YWxwbg==")+": ["+e.alpn.join(", ")+"]":t("eGh0dHA=")===e.network?"    "+t("YWxwbg==")+": [h2]":"    "+t("YWxwbg==")+": [http/1.1]"),r.push("    "+t("c2VydmVybmFtZQ==")+": "+Et(e.servername)),t("dHJvamFu")===e.type&&r.push("    sni: "+Et(e.servername)),r.push("    "+t("Y2xpZW50LWZpbmdlcnByaW50")+": chrome"),e[t("Zmxvdw==")]&&r.push("    "+t("Zmxvdw==")+": "+Et(e[t("Zmxvdw==")])),e[t("cmVhbGl0eS1vcHRz")]&&(r.push("    "+t("cmVhbGl0eS1vcHRz")+":"),r.push("      "+t("cHVibGljLWtleQ==")+": "+Et(e[t("cmVhbGl0eS1vcHRz")][t("cHVibGljLWtleQ==")]||"")),e[t("cmVhbGl0eS1vcHRz")][t("c2hvcnQtaWQ=")]&&r.push("      "+t("c2hvcnQtaWQ=")+": "+Et(e[t("cmVhbGl0eS1vcHRz")][t("c2hvcnQtaWQ=")]))),e["ech-opts"]&&(r.push("    ech-opts:"),r.push("      enable: "+Et(e["ech-opts"].enable)),r.push("      query-server-name: "+Et(e["ech-opts"]["query-server-name"])))),"ws"===e.network)r.push("    "+t("d3Mtb3B0cw==")+":"),r.push("      path: "+Et(e[t("d3Mtb3B0cw==")].path)),r.push("      headers:"),r.push("        Host: "+Et(e[t("d3Mtb3B0cw==")].headers.Host));else if(t("eGh0dHA=")===e.network){const n=e[t("eGh0dHA=")+"-opts"];r.push("    "+t("eGh0dHA=")+"-opts:"),r.push("      path: "+Et(n.path)),r.push("      mode: "+Et(n.mode)),r.push("      host: "+Et(n.host)),r.push("      x-padding-"+t("b2Jmcw==")+"-mode: "+Et(n["x-padding-"+t("b2Jmcw==")+"-mode"])),r.push("      x-padding-method: "+Et(n["x-padding-method"])),r.push("      x-padding-placement: "+Et(n["x-padding-placement"])),r.push("      x-padding-header: "+Et(n["x-padding-header"])),r.push("      x-padding-key: "+Et(n["x-padding-key"]))}return r.join("\n")}(e)).join("\n")}\n${D}\n`}function Ot(e,r){const n=e.host,a="/"+e.path,o=[];for(const e of r)e.startsWith(t("dHJvamFu")+"://")&&e.indexOf(t("c2VjdXJpdHk9")+"none")<0?o.push(e):e.startsWith(t("dmxlc3M=")+"://")&&e.indexOf("type="+t("eGh0dHA="))<0&&e.indexOf(t("c2VjdXJpdHk9")+"none")<0&&o.push(e.replace(i,t("dHJvamFu")+"://").replace(t("ZW5jcnlwdGlvbj0=")+"none&",""));const s=o.map((e,r)=>{const{user:o,srv:i,prt:s,name:l}=St(e,r);return`${l} = ${t("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${n}, tls=true, ${t("c2tpcC1jZXJ0LXZlcmlmeQ==")}=true, sni=${n}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${s.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${s.map(e=>e.split(" = ")[0]).join(", ")}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}\n\n[Rule]\n${t("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function Zt(e,r,n){const a=n&&n.length?n.filter(function(e){return!e.mg}).map(function(e){return{type:t("d2lyZWd1YXJk"),tag:e.name,address:e.local.map(function(e){return e.indexOf(":")>=0?e+"/128":e+"/32"}),private_key:e.k,mtu:1280,peers:[{address:e.host,port:e.port,public_key:e.p,allowed_ips:["0.0.0.0/0","::/0"],persistent_keepalive_interval:25}]}}):[],o=e.host,i="/"+e.path,s=e.alpn?e.alpn.split(",").map(e=>e.trim()).filter(Boolean):null,l=new Set,c=r.map((e,r)=>{const{user:n,srv:a,prt:c,name:d,isTrojan:p,tls:u}=St(e,r),h=kt(e,"type")||"ws";let m=d;if(l.has(m)){const e=p?"T":t("eGh0dHA=")===h?"X":"W";let r=m+"\u00b7"+e,n=2;for(;l.has(r);)r=m+"\u00b7"+e+n,n++;m=r}l.add(m);const f=u?t("eGh0dHA=")===h?{enabled:!0,server_name:o,insecure:!0,[t("YWxwbg==")]:s||["h2"]}:{enabled:!0,server_name:o,insecure:!0,[t("YWxwbg==")]:s||["http/1.1"],utls:{enabled:!0,[t("ZmluZ2VycHJpbnQ=")]:"chrome"}}:{enabled:!1},b=t("eGh0dHA=")===h?{type:t("eGh0dHA="),mode:t("c3RyZWFtLW9uZQ=="),path:i}:u?{type:"ws",path:i,max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol",headers:{Host:o}}:{type:"ws",path:i,headers:{Host:o}};return p?{type:t("dHJvamFu"),tag:m,server:a,server_port:c,password:n,tls:f,transport:b}:{type:t("dmxlc3M="),tag:m,server:a,server_port:c,uuid:n,tls:f,transport:b}}),d=a.length?c.map(e=>e.tag).concat(a.map(e=>e.tag)):c.map(e=>e.tag),p=[[t("Z2Vvc2l0ZQ==")+"-cn","\ud83c\udfaf \u5168\u7403\u76f4\u8fde"],[t("Z2Vvc2l0ZQ==")+"-google","\ud83c\udf10 \u8c37\u6b4c\u670d\u52a1"],[t("Z2Vvc2l0ZQ==")+"-apple","\ud83c\udf4e \u82f9\u679c\u670d\u52a1"],[t("Z2Vvc2l0ZQ==")+"-microsoft","\u24c2\ufe0f \u5fae\u8f6f\u670d\u52a1"],[t("Z2Vvc2l0ZQ==")+"-openai","\ud83e\udd16 OpenAI"],[t("Z2Vvc2l0ZQ==")+"-spotify","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-"+t("eW91dHViZQ=="),"\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-netflix","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-disney","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-twitter","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-telegram","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-github","\ud83c\udf0d \u56fd\u5916\u5a92\u4f53"],[t("Z2Vvc2l0ZQ==")+"-category-ads-all","block"]],u={log:{level:"info"},dns:{servers:[{tag:"dns-remote",type:"https",server:"1.1.1.1"},{tag:"dns-direct",type:"udp",server:"223.5.5.5"},{tag:"dns-fakeip",type:"fakeip",inet4_range:"198.18.0.0/15"}],rules:[{domain_suffix:["githubusercontent.com","github.com","jsdelivr.net"],action:"route",server:"dns-direct"},{rule_set:t("Z2Vvc2l0ZQ==")+"-cn",action:"route",server:"dns-direct"},{action:"route",server:"dns-fakeip"}],final:"dns-remote",strategy:"ipv4_only"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080},{type:"tun",tag:"tun-in",interface_name:"tun0",address:["172.19.0.1/30"],mtu:9e3,auto_route:!0,strict_route:!0}],[t("b3V0Ym91bmRz")]:[...c,{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"selector",tag:"\ud83d\ude80 \u8282\u70b9\u9009\u62e9",[t("b3V0Ym91bmRz")]:d},{type:"selector",tag:"\ud83c\udfaf \u5168\u7403\u76f4\u8fde",[t("b3V0Ym91bmRz")]:["direct"]},{type:"selector",tag:"\ud83d\udc1f \u6f0f\u7f51\u4e4b\u9c7c",[t("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9","\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]},{type:"selector",tag:"\ud83c\udf0d \u56fd\u5916\u5a92\u4f53",[t("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83c\udf10 \u8c37\u6b4c\u670d\u52a1",[t("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83e\udd16 OpenAI",[t("b3V0Ym91bmRz")]:["\ud83d\ude80 \u8282\u70b9\u9009\u62e9"]},{type:"selector",tag:"\ud83c\udf4e \u82f9\u679c\u670d\u52a1",[t("b3V0Ym91bmRz")]:["\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]},{type:"selector",tag:"\u24c2\ufe0f \u5fae\u8f6f\u670d\u52a1",[t("b3V0Ym91bmRz")]:["\ud83c\udfaf \u5168\u7403\u76f4\u8fde"]}],endpoints:a.length?a:void 0,route:{rules:[{action:"sniff"},{protocol:"dns",action:"hijack-dns"},{ip_is_private:!0,[t("b3V0Ym91bmQ=")]:"direct"},...p.map(([e,r])=>({rule_set:[e],[t("b3V0Ym91bmQ=")]:r})),{rule_set:t("Z2VvaXA=")+"-cn",[t("b3V0Ym91bmQ=")]:"direct"},{ip_is_private:!0,action:"reject"}],rule_set:[...p.map(([e])=>{const r=e.replace(t("Z2Vvc2l0ZQ==")+"-",t("Z2Vvc2l0ZQ==")+"/");return{type:"remote",tag:e,format:"binary",url:"https://cdn.jsdelivr.net/gh/"+t("TWV0YUN1YmVY")+"/"+t("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+r+".srs",download_detour:"direct"}}),{type:"remote",tag:t("Z2VvaXA=")+"-cn",format:"binary",url:"https://cdn.jsdelivr.net/gh/"+t("TWV0YUN1YmVY")+"/"+t("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+t("Z2VvaXA=")+"/cn.srs",download_detour:"direct"}],final:"\ud83d\udc1f \u6f0f\u7f51\u4e4b\u9c7c",auto_detect_interface:!0,default_domain_resolver:{server:"dns-direct"}},experimental:{clash_api:{external_controller:"127.0.0.1:9090"},cache_file:{enabled:!0}}};return JSON.stringify(u,null,2)}function Yt(e,r){const n=e.host,a="/"+e.path,o=r.map((e,r)=>{const{user:o,srv:i,prt:s,name:l,isTrojan:c,tls:d}=St(e,r),p=d?", tls=true, "+t("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+n:", tls=false";return c?`${l} = ${t("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${n}${p}`:`${l} = ${t("dmxlc3M=")}, ${i}, ${s}, username=${o}, ws=true, ws-path=${a}, ws-headers=Host:${n}${p}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${o.map(e=>e.split(" = ")[0]).join(", ")}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}\n\n[Rule]\n${t("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function Jt(e,r){const n=e.host,a="/"+e.path,o=r.map((e,r)=>{const{user:o,srv:i,prt:s,name:l,isTrojan:c,tls:d}=St(e,r),p=d?", tls=true, "+t("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+n:", tls=false";return c?`${l} = ${t("dHJvamFu")}, ${i}, ${s}, password=${o}, ws=true, ws-path=${a}, ws-headers=Host:${n}${p}`:`${l} = ${t("dmxlc3M=")}, ${i}, ${s}, username=${o}, ws=true, ws-path=${a}, ws-headers=Host:${n}${p}`}),i=o.map(e=>e.split(" = ")[0]).join(", ");return`[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"} = select, ${i}\n${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"} = select, DIRECT\n${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"} = select, ${i}\n\n[Rule]\n${t("R0VPSVA=")},CN,DIRECT\nFINAL,${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}function jt(e,r){const n=e.host,a="/"+e.path,o=e=>e.indexOf(":")>=0?"["+e+"]":e,i=r.map((e,r)=>{const{user:i,srv:s,prt:l,name:c}=St(e,r);if(e.startsWith(t("dHJvamFu")+"://"))return`${t("dHJvamFu")}=${o(s)}:${l}, password=${i}, over-tls=true, tls-host=${n}, ${t("b2Jmcw==")}=wss, ${t("b2Jmcw==")}-host=${n}, ${t("b2Jmcw==")}-uri=${a}, tls-verification=true, tag=${c}`;const d="tls"===(kt(e,"security")||"tls");return`${t("dmxlc3M=")}=${o(s)}:${l}, method=none, password=${i}, ${t("b2Jmcw==")}=${d?"wss":"ws"}, ${t("b2Jmcw==")}-host=${n}, ${t("b2Jmcw==")}-uri=${a}${d?", tls-verification=true, tls13=true":""}, tag=${c}`}),s=r.map((e,t)=>{const r=e.indexOf("#");if(r<0)return`${"\u8282\u70b9"}${t+1}`;try{return decodeURIComponent(e.slice(r+1))||`${"\u8282\u70b9"}${t+1}`}catch(e){return`${"\u8282\u70b9"}${t+1}`}}).join(", ");return`[general]\nnetwork_check_url=https://www.gstatic.com/generate_204\nserver_check_url=https://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n${i.join("\n")}\n[policy]\nstatic=${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}, ${s}, img-url=https://fastly.jsdelivr.net/gh/${t("S29vbHNvbg==")}/${t("UXVyZQ==")}@master/IconSet/Color/Proxy.png\nstatic=${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"}, direct, img-url=https://fastly.jsdelivr.net/gh/${t("S29vbHNvbg==")}/${t("UXVyZQ==")}@master/IconSet/Color/Direct.png\nstatic=${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}, ${"\ud83d\ude80"} ${"\u8282\u70b9\u9009\u62e9"}, direct, img-url=https://fastly.jsdelivr.net/gh/${t("S29vbHNvbg==")}/${t("UXVyZQ==")}@master/IconSet/Color/Final.png\n[filter_local]\n${t("Z2VvaXA=")}, cn, ${"\ud83c\udf10"} ${"\u5168\u7403\u76f4\u8fde"}\nfinal, ${"\ud83d\udc1f"} ${"\u6f0f\u7f51\u4e4b\u9c7c"}\n`}let Xt=!1;const Qt=4;let Bt=0;const qt=[];function Kt(){return Bt<Qt?(Bt++,Promise.resolve()):new Promise(e=>qt.push(e))}function er(){const e=qt.shift();e?e():Bt--}async function tr(e,t){const r=[];let n=0;const a=Array.from({length:Math.min(Qt,e.length)},async()=>{for(;n<e.length;){const a=n++;await Kt();try{r[a]=await t(e[a],a)}catch(e){r[a]=!1}finally{er()}}});return await Promise.all(a),r}let rr=null,nr=null;async function ar(t,r,n){if(!Xt)return!0;if($(t))return!0;const a=n||2e3;try{const n=e({hostname:t,port:r});await Promise.race([n.opened,new Promise((e,t)=>setTimeout(()=>t(new Error("proxy timeout")),a))]);try{n.close()}catch(e){}return!0}catch(e){return!1}}const or={t:0,list:null};let ir="";const sr={list:null,at:0,key:""};async function lr(){const e=String(ir||"").trim(),t=e||"__default__";if(sr.key===t&&sr.list&&Date.now()-sr.at<6e5)return sr.list;const r=[],n=(e?vt(e).filter(e=>/^https?:\/\//i.test(e)).slice(0,10).map(e=>({url:e,label:"\u515c\u5e95",count:100})):H).map(async e=>{try{const t=await gt(e.url,{headers:{"User-Agent":"Mozilla/5.0"}},8e3);if(!t.ok)return;const n=await t.text(),a=[];for(const t of n.split(/[\r\n]+/)){const r=t.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);r&&a.length<e.count&&a.push({ip:r[1],port:r[2]?parseInt(r[2],10):443,name:e.label+"-"+String(a.length+1).padStart(2,"0")})}a.forEach(e=>r.push(e))}catch(e){}});return await Promise.all(n),sr.list=r,sr.at=Date.now(),sr.key=t,r}const cr=new Map,dr="https://api."+t("Y2xvdWRmbGFyZWNsaWVudA==")+".com/v0a5641/reg",pr="https://api."+t("Y2xvdWRmbGFyZWNsaWVudA==")+".com/v0a2158/reg",ur=t("d3d3Lm1pY3Jvc29mdC5jb20=");function hr(e){let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function mr(e){try{const t=String(e||"").replace(/-/g,"+").replace(/_/g,"/"),r=t.length%4,n=atob(r?t+(2===r?"==":"="):t),a=new Uint8Array(n.length);for(let e=0;e<n.length;e++)a[e]=n.charCodeAt(e);return a}catch(e){return null}}async function fr(e,r,n){try{if(t("bWFzcXVl")===n)return async function(e,r){try{if(e._mkc)return e._mkc;let n=null;try{const t=JSON.parse(String(e.masqueConf||""));t&&t.mk&&t.k&&t.p&&(n=t)}catch(e){}if(n)return e._mkc=n;const a=await async function(){try{const e=await crypto.subtle.generateKey({name:t("RUNEU0E="),namedCurve:"P-256"},!0,["sign","verify"]),r=function(e){try{const t=mr(e.d),r=mr(e.x),n=mr(e.y);if(!t||!r||!n||32!==t.length||32!==r.length||32!==n.length)return null;const a=new Uint8Array(121);return a.set([48,119,2,1,1,4,32],0),a.set(t,7),a.set([160,10,6,8,42,134,72,206,61,3,1,7],39),a.set([161,68,3,66,0],51),a[56]=4,a.set(r,57),a.set(n,89),a}catch(e){return null}}(await crypto.subtle.exportKey("jwk",e.privateKey));return r?{pub:hr(new Uint8Array(await crypto.subtle.exportKey("spki",e.publicKey))),pri:hr(r)}:null}catch(e){return null}}();if(!a)return null;let o=null;for(let e=0;e<3&&!o;e++){try{const e=await fetch(pr,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"okhttp/3.12.1","CF-Client-Version":"a-6.30.0"},body:JSON.stringify({[t("ZmNtX3Rva2Vu")]:"",[t("aW5zdGFsbF9pZA==")]:"",key:a.pub,locale:"en_US",model:"PC",tos:(new Date).toISOString(),[t("c2VyaWFsX251bWJlcg==")]:"",[t("dHVubmVsX3R5cGU=")]:t("bWFzcXVl")}),signal:AbortSignal.timeout(1e4)});e.ok&&(o=e)}catch(e){}!o&&e<2&&await new Promise(t=>setTimeout(t,800*(e+1)))}if(!o)return null;const i=await o.json(),s=i&&i.config,l=s&&s.peers&&s.peers[0],c=s&&s.interface;if(!l||!c||!l.public_key)return null;const d=l.endpoint||{};let p=String(d.host||d.v4||d.v6||"");const u=p.lastIndexOf(":");u>0&&(p=p.slice(0,u)),p=p||"162.159.198.2",n={mk:1,k:a.pri,p:String(l.public_key).replace(/-----[^-]+-----/g,"").replace(/\s+/g,""),a4:String(c.addresses&&c.addresses.v4||""),a6:String(c.addresses&&c.addresses.v6||""),h:p,pt:Number(d.ports&&d.ports[0]||443)||443,cid:String(s.client_id||""),at:Date.now()};try{const t=JSON.parse(JSON.stringify(e));delete t._mkc,t.masqueConf=JSON.stringify(n),e.masqueConf=t.masqueConf,await xe(r,t)}catch(e){}return e._mkc=n}catch(e){return null}}(e,r);if(e._wgc)return e._wgc;let a=null;try{const r=JSON.parse(String(e.warpConf||""));r&&r.k&&r.p&&r.a4&&(r.cid=br(r[t("cmVzZXJ2ZWQ=")]||r.cid||""),a=r)}catch(e){}if(a)return e._wgc=a;const o=await async function(){try{const e=await crypto.subtle.generateKey({name:t("WDI1NTE5")},!0,["deriveBits"]),r=new Uint8Array(await crypto.subtle.exportKey("raw",e.publicKey)),n=new Uint8Array(await crypto.subtle.exportKey("pkcs8",e.privateKey));return{pub:hr(r),pri:hr(n.slice(n.length-32))}}catch(e){return null}}();if(!o)return null;let i=null;for(let e=0;e<3&&!i;e++){try{const e=await fetch(dr,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"1.1.1.1/6.38.9-5641 (Android 16.0.0)","CF-Client-Version":"a-6.38.9-5641"},body:JSON.stringify({[t("ZmNtX3Rva2Vu")]:"",[t("aW5zdGFsbF9pZA==")]:"",key:o.pub,locale:"en_US",model:"PC",tos:(new Date).toISOString(),[t("c2VyaWFsX251bWJlcg==")]:"",os_version:"16.0.0",[t("a2V5X3R5cGU=")]:t("Y3VydmUyNTUxOQ=="),[t("dHVubmVsX3R5cGU=")]:t("d2lyZWd1YXJk")}),signal:AbortSignal.timeout(1e4)});e.ok&&(i=e)}catch(e){}!i&&e<2&&await new Promise(t=>setTimeout(t,800*(e+1)))}if(!i)return null;const s=await i.json(),l=s&&s.config,c=l&&l.peers&&l.peers[0],d=l&&l.interface;if(!c||!d||!c.public_key)return null;const p=c.endpoint||{};let u=String(p.host||p.v4||p.v6||"");const h=u.lastIndexOf(":");h>0&&(u=u.slice(0,h)),u=u||"engage."+t("Y2xvdWRmbGFyZWNsaWVudA==")+".com",a={k:o.pri,p:String(c.public_key),a4:String(d.addresses&&d.addresses.v4||""),a6:String(d.addresses&&d.addresses.v6||""),h:u,pt:Number(p.ports&&p.ports[0]||2408)||2408,cid:br(l[t("cmVzZXJ2ZWQ=")]||l.client_id||""),at:Date.now()};try{const t=JSON.parse(JSON.stringify(e));delete t._wgc,t.warpConf=JSON.stringify(a),e.warpConf=t.warpConf,t.warpEnable=!0,await xe(r,t)}catch(e){}return e._wgc=a}catch(e){return null}}function br(e){try{const t=String(e||"");return t?3!==atob(t.replace(/-/g,"+").replace(/_/g,"/")).length?"":t:""}catch(e){return""}}const gr=["162.159.192.1:2408","162.159.192.2:2408","162.159.192.3:2408","162.159.192.4:2408","162.159.192.5:2408","162.159.192.6:2408","162.159.192.7:2408","162.159.192.8:2408","162.159.192.9:2408","162.159.192.10:2408","162.159.192.11:2408","162.159.192.12:2408","162.159.192.13:2408","162.159.193.1:2408","162.159.193.2:2408","162.159.193.3:2408","162.159.193.4:2408","162.159.193.5:2408","162.159.193.6:2408","162.159.193.7:2408","162.159.193.8:2408","162.159.193.9:2408","162.159.193.10:2408","162.159.193.11:2408","162.159.193.12:2408","162.159.193.13:2408","162.159.195.1:2408","162.159.195.2:2408","162.159.195.3:2408","162.159.195.4:2408","162.159.195.5:2408","162.159.195.6:2408","162.159.195.7:2408","162.159.195.8:2408","162.159.195.9:2408","162.159.195.10:2408","162.159.195.11:2408","162.159.195.12:2408","162.159.204.1:2408","162.159.204.2:2408","162.159.204.3:2408","162.159.204.4:2408","162.159.204.5:2408","162.159.204.6:2408","162.159.204.7:2408","162.159.204.8:2408","162.159.204.9:2408","162.159.204.10:2408","162.159.204.11:2408","162.159.204.12:2408","188.114.96.1:2408","188.114.96.2:2408","188.114.96.3:2408","188.114.96.4:2408","188.114.96.5:2408","188.114.96.6:2408","188.114.96.7:2408","188.114.96.8:2408","188.114.96.9:2408","188.114.96.10:2408","188.114.96.11:2408","188.114.96.12:2408","188.114.96.13:2408","188.114.97.1:2408","188.114.97.2:2408","188.114.97.3:2408","188.114.97.4:2408","188.114.97.5:2408","188.114.97.6:2408","188.114.97.7:2408","188.114.97.8:2408","188.114.97.9:2408","188.114.97.10:2408","188.114.97.11:2408","188.114.97.12:2408","188.114.98.1:2408","188.114.98.2:2408","188.114.98.3:2408","188.114.98.4:2408","188.114.98.5:2408","188.114.98.6:2408","188.114.98.7:2408","188.114.98.8:2408","188.114.98.9:2408","188.114.98.10:2408","188.114.98.11:2408","188.114.98.12:2408","188.114.99.1:2408","188.114.99.2:2408","188.114.99.3:2408","188.114.99.4:2408","188.114.99.5:2408","188.114.99.6:2408","188.114.99.7:2408","188.114.99.8:2408","188.114.99.9:2408","188.114.99.10:2408","188.114.99.11:2408","188.114.99.12:2408","188.114.99.13:2408"],vr=["162.159.198.2:443","162.159.198.2:8443","162.159.198.2:4443","162.159.198.2:8095","162.159.198.2:500","162.159.198.2:1701","162.159.198.2:4500","162.159.199.2:443","162.159.199.2:8443","162.159.199.2:4443","162.159.199.2:8095","162.159.199.2:500","162.159.199.2:1701","162.159.199.2:4500","[2606:4700:103::2]:443","[2606:4700:103::2]:8443","[2606:4700:103::2]:4443","[2606:4700:103::2]:8095","[2606:4700:103::2]:500","[2606:4700:103::2]:1701","[2606:4700:103::2]:4500","[2606:4700:104::2]:443","[2606:4700:104::2]:8443","[2606:4700:104::2]:4443","[2606:4700:104::2]:8095","[2606:4700:104::2]:500","[2606:4700:104::2]:1701","[2606:4700:104::2]:4500"];function xr(e,r,n,a){const o=t("bWFzcXVl")===a,i=String((o?r.masqueEps:r.warpEps)||"").split(/[\n,;]+/).map(e=>e.trim()).filter(Boolean),s=(i.length?i:o?vr:gr).slice(0,50),l=[];return e.a4&&l.push(String(e.a4).split("/")[0]),e.a6&&l.push(String(e.a6).split("/")[0]),s.map((t,a)=>{const i=function(e){let t=String(e||"").trim();if("["===t.charAt(0)){const e=t.indexOf("]");if(e>0)return{h:t.slice(1,e),p:parseInt(t.slice(e+2),10)||0}}const r=t.lastIndexOf(":");return r>0&&t.indexOf(":")===r?{h:t.slice(0,r),p:parseInt(t.slice(r+1),10)||0}:{h:t,p:0}}(t),c={name:n+(s.length>1?"\u00b7"+String(a+1):""),host:i.h,port:i.p||e.pt,local:l,k:e.k,p:e.p,cid:e.cid};if(o){c.mg=1,c.sni=String(r.masqueSni||"").trim()||ur;const e=String(r.masqueNet||"").trim();e&&(c.msnet=e)}return c})}function yr(e){const t=String(e||"").lastIndexOf("\u00b7");return t>0?String(e).slice(0,t):String(e||"WARP")}async function wr(r,o,i,s,l,c,d){r.path&&"/"!==r.path&&""!==r.path||(r.path=r.uuid);let p="";try{p=(new URL(o).searchParams.get("country")||"").trim()}catch(e){}const u=(p||String(r.countryLabel||"")).trim(),h=await zt(d)||l;if(r.filter&&r.filter.ipType,Tt(r)&&await async function(){const e=Date.now();if(!(A&&e-A<216e5))try{const t=await fetch("https://www.cloudflare.com/ips-v6/",{signal:AbortSignal.timeout(1e4)});if(!t.ok)return;const r=await t.text(),n=String(r).split("\n").map(e=>e.trim()).filter(e=>/^[0-9a-fA-F:.]+\/\d+$/.test(e)&&e.indexOf(":")>=0);n.length>=3&&(C=n,A=e)}catch(e){}}(),""===(r.optimizer&&r.optimizer.subMode||"")&&!1&&(!r.preferredIPs||r.preferredIPs.length<80)){let n=!1;try{const e=await async function(e){if(!e||!e.K||"function"!=typeof e.K.get)return null;try{const t=await e.K.get("initPool");if(!t)return null;const r=JSON.parse(t);return r&&Array.isArray(r.ips)&&r.ips.length?Date.now()-(r.at||0)>216e5?null:r.ips:null}catch(e){return null}}(d);if(e&&e.length){const t=new Set((r.preferredIPs||[]).map(e=>e.ip)),a=e.filter(e=>e&&e.ip&&!t.has(e.ip));a.length&&(r.preferredIPs=[...r.preferredIPs||[],...a]),n=!0}}catch(e){}if(!n)try{const[n,a,o]=await Promise.all([lr().catch(()=>[]),it(200).catch(()=>null),Promise.resolve(fe(W.join("\n")))]),i=[],s=[],l=new Set((r.preferredIPs||[]).map(e=>e.ip));for(const e of[...r.preferredIPs||[],...n||[],...a||[],...o]){if(!e||!e.ip||l.has(e.ip))continue;l.add(e.ip);const t={ip:e.ip,port:e.port||443,name:e.name||"",relay:!!e.relay};t.relay||!$(t.ip)?s.push(t):i.push(t)}const c=s.slice(0,24),p=i.slice(0,16),[u,h]=await Promise.all([tr(c,r=>async function(r,n){return!Xt||async function(r,n){const a=2500||2500;try{const o=e({hostname:r,port:n});await Promise.race([o.opened,new Promise((e,t)=>setTimeout(()=>t(new Error("tcp timeout")),a))]);const i=o.writable.getWriter(),s=o.readable.getReader();await i.write((new TextEncoder).encode("GET / HTTP/1.1\r\nHost: "+r+"\r\nUser-Agent: Mozilla/5.0\r\n"+t("Q29ubmVjdA==")+"ion: close\r\n\r\n"));const l=await Promise.race([s.read(),new Promise((e,t)=>setTimeout(()=>t(new Error("http timeout")),a))]);try{o.close()}catch(e){}const c=(new TextDecoder).decode(l.value||new Uint8Array(0));return/^HTTP\/1\.[01] (200|204)/.test(c)}catch(e){return!1}}(r,n)}(r.ip,r.port||443)),tr(p,e=>ar(e.ip,e.port||443,2500))]),m=c.filter((e,t)=>u[t]),f=[...p.filter((e,t)=>h[t]),...i.slice(p.length)].slice(0,210),b=[...m,...s.slice(c.length)].slice(0,40);r.preferredIPs=[...r.preferredIPs||[],...f,...b].slice(0,250),async function(e,t){if(e&&e.K&&"function"==typeof e.K.put)try{const r=(t||[]).filter(e=>e&&e.ip).map(e=>({ip:e.ip,port:e.port||443,name:e.name||"",relay:!!e.relay})).slice(0,250);if(!r.length)return;if(!ne())return;await e.K.put("initPool",JSON.stringify({at:Date.now(),ips:r}))}catch(e){}}(d,r.preferredIPs)}catch(e){}}const m=r.host||new URL(o).hostname,f=!/\.workers\.dev$/i.test(m),b=Object.assign({},r,{host:m});f&&(b.tlsOnly=!0),b.enableVless||b.enableTrojan||b.enableXhttp||(b.enableVless=!0);const g=r.optimizer&&r.optimizer.subMode||"",v=!("home"!==String(r.mode||"").toLowerCase()&&!r.homeWan);if(v)try{b.homeWanNodes=await ie(d,b)}catch(e){}let x=[];const y=r.filter&&r.filter.ipType||[],w=1===y.length&&"IPv6"===y[0],k=Tt(r),P=fe(W.join("\n")).map(e=>({ip:e.ip,port:e.port||443,name:e.name||"\u4f18\u9009IP-"+String(W.indexOf(e)+1).padStart(2,"0")}));if("custom"===g){const e=!(!r.optimizer||!r.optimizer.subIncludeDefault),t=!e;if(x=await xt(r.preferredDomains||"",t?200:40,t?2e3:300,e,e,k),e){const e=await xt(z,40,240,!1,!0,k),t=new Set(e.map(e=>e.ip));x=[...e,...x.filter(e=>!t.has(e.ip))],b.preferredIPs=[...b.preferredIPs||[],...P],b.optimizer||(b.optimizer={}),b.optimizer.fillCount=Math.max(parseInt(b.optimizer.fillCount)||0,800)}}else if(""===g){const e=r.src||{},t=!0===e.native,n=!1!==e.prefDomain,a=!1!==e.prefIp,o=!0===e.customPref;t&&!w&&(b.preferredDomains=(b.preferredDomains?b.preferredDomains+"\n":"")+b.host+"#\u539f\u751f\u5730\u5740"),o||(b.preferredIPs=[]);const i=(r.filter||{}).region;if(Array.isArray(i)?0===i.length||i.includes("all"):!i||"all"===i){if(x=[],n&&!w){const e=await async function(e){if(!Xt)return String(e||"").split(/[\n,;]+/).map(e=>e.trim().replace(/^\*\./,"")).filter(Boolean).join("\n");if(Date.now()-or.t<6e5&&null!==or.list)return or.list;const t=String(e||"").split(/[\n,;]+/).map(e=>e.trim().replace(/^\*\./,"")).filter(Boolean),r=t.slice(0,12),n=t.slice(12),a=(await tr(r,async e=>{const t=await async function(e){try{const t=await gt("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(e)+"&type=A",{headers:{accept:"application/dns-json"}},4e3);return t&&t.ok&&((await t.json()).Answer||[]).filter(e=>1===e.type&&/^\d+\.\d+\.\d+\.\d+$/.test(e.data)).map(e=>e.data).filter($)[0]||null}catch(e){return null}}(e);return t&&$(t)?{d:e,ok:await ar(t,443)}:{d:e,ok:!1}})).map((e,t)=>e&&e.ok?r[t]:null).filter(Boolean).concat(n);return or.t=Date.now(),or.list=a.join("\n"),or.list}(z);e&&(b.preferredDomains=(b.preferredDomains?b.preferredDomains+"\n":"")+e)}if(a&&!w){const e=await it(150);e&&e.length&&(b.preferredIPs=[...b.preferredIPs||[],...e]);try{const e=await xt(D,100,600,!0,!0,!1);e&&e.length&&(b.preferredIPs=[...b.preferredIPs||[],...e])}catch(e){}}if(k&&n)try{const e=z+(w?"\n"+L.join("\n"):""),t=await xt(e,40,w?800:240,!1,!0,!0);t&&t.length&&(b.preferredIPs=[...b.preferredIPs||[],...t])}catch(e){}}else n&&(x=await xt(z,100,300,!1,!0,k));if(a)if(w){const e=P.map(e=>({ip:he(e.ip),port:e.port||443,name:e.name})).filter(e=>e.ip);b.preferredIPs=[...b.preferredIPs||[],...e]}else if(k){const e=P.map(e=>({ip:he(e.ip),port:e.port||443,name:e.name})).filter(e=>e.ip);b.preferredIPs=[...b.preferredIPs||[],...P,...e]}else b.preferredIPs=[...b.preferredIPs||[],...P];if(!(t||n||a||o))if(w){const e=P.map(e=>({ip:he(e.ip),port:e.port||443,name:e.name})).filter(e=>e.ip);b.preferredIPs=[...b.preferredIPs||[],...e]}else b.preferredIPs=[...b.preferredIPs||[],...P];if(w&&b.preferredIPs&&(b.preferredIPs=b.preferredIPs.filter(e=>String(e.ip).indexOf(":")>=0)),b.optimizer||(b.optimizer={}),b.optimizer.fillCount=Math.max(parseInt(b.optimizer.fillCount)||0,w?0:1e3),!1&&b.preferredIPs&&b.preferredIPs.length){const e=F.map((e,t)=>({ip:e,port:443,name:"\u4f18\u9009IP-S"+String(t+1).padStart(2,"0")})),t=new Set(e.map(e=>e.ip));b.preferredIPs=[...e,...b.preferredIPs.filter(e=>!t.has(e.ip))]}}if(x.length){let e=x;const t=(b.preferredIPs||[]).length;e=e.map((e,r)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(e.name||"")?Object.assign({},e,{name:"\u4f18\u9009IP-"+String(t+r+1).padStart(2,"0")}):e),b.preferredIPs=[...b.preferredIPs||[],...e]}w&&b.preferredIPs&&(b.preferredIPs=b.preferredIPs.filter(e=>String(e.ip).indexOf(":")>=0)),s=(s||"").toLowerCase();const I=(i||"").toLowerCase();[t("Y2xhc2g="),t("c2luZ2JveA=="),t("c2luZy1ib3g="),t("c3VyZ2U="),t("c3VyZmJvYXJk"),t("bG9vbg=="),t("cXVhbng="),t("cXVhbnR1bXVsdHg=")].includes(I)||n.test(s);let T=1e4;if(r.nodeLimit){const e=parseInt(r.nodeLimitCount)||0;e>0&&(T=Math.min(e,1e3))}r._quotaCap&&(T=Math.min(T,r._quotaCap)),r.cpuLimit&&(T=Math.max(10,Math.floor(.6*T)));const U="random"===g?Object.assign({},r.filter,{region:"all"}):r.filter,M=!(!v||"custom"===g),E=String(r.mode||"").toLowerCase();let N,H=null;if(t("bWFzcXVl")===E){const e=await fr(r,d,E);e&&(H=xr(e,r,String(r.masqueName||"")||"WARP",E))}else if("warp"===E){const e=await fr(r,d,E);H=e?xr(e,r,String(r.warpName||"")||"WARP",E):null}if(_t=null,H&&H.length){const e=function(e){try{const r=String(e[t("d2FycEZyb250")]||"").split(/[\n\r]+/).map(function(e){return e.trim()}).filter(Boolean)[0];if(!r)return null;const n=/^([A-Za-z0-9]+):\/\/([\s\S]*)$/.exec(r);if(!n)return null;const a=n[1].toLowerCase();let o=n[2],i="\u524d\u7f6e\u8282\u70b9";const s=o.indexOf("#");if(s>=0){try{i=decodeURIComponent(o.slice(s+1))||i}catch(e){}o=o.slice(0,s)}const l={},c=o.indexOf("?");c>=0&&(o.slice(c+1).split("&").forEach(function(e){const t=e.split("=");if(t[0])try{l[decodeURIComponent(t[0]).toLowerCase()]=decodeURIComponent((t[1]||"").replace(/\+/g," "))}catch(e){}}),o=o.slice(0,c));const d=o.lastIndexOf("@"),p=d>=0?o.slice(d+1):o,u=d>=0?o.slice(0,d):"",h=/^\[([^\]]+)\]:(\d+)$/.exec(p)||/^([^:]+):(\d+)$/.exec(p);if(!h)return null;const m=h[1],f=parseInt(h[2],10);if(!m||!(f>0&&f<65536))return null;let b="",g="";if(u){const e=u.indexOf(":");e>=0?(b=u.slice(0,e),g=u.slice(e+1)):b=u}const v=String(l[t("c2VjdXJpdHk=")]||"").toLowerCase(),x="tls"===v||t("cmVhbGl0eQ==")===v||t("dHJvamFu")===a||"https"===a,y=String(l[t("dHlwZQ==")]||"tcp").toLowerCase();if({}[t("dWRw")]=!0,t("c29ja3M1")===a||t("c29ja3M=")===a){const e={name:i,type:t("c29ja3M1"),server:m,port:f};return e[t("dWRw")]=!0,b&&(e[t("dXNlcm5hbWU=")]=b),g&&(e[t("cGFzc3dvcmQ=")]=g),e}if("http"===a||"https"===a){const e={name:i,type:"http",server:m,port:f};return e[t("dWRw")]=!0,b&&(e[t("dXNlcm5hbWU=")]=b),g&&(e[t("cGFzc3dvcmQ=")]=g),"https"===a&&(e[t("dGxz")]=!0),e}if("ss"===a||a===t("c2hhZG93c29ja3M=")){let e="",r=u;if(u.indexOf(":")>=0)e=u.slice(0,u.indexOf(":")),r=u.slice(u.indexOf(":")+1);else try{const t=atob(u),n=t.indexOf(":");n>=0&&(e=t.slice(0,n),r=t.slice(n+1))}catch(e){}if(!e||!r)return null;let n=r;try{n=decodeURIComponent(r)}catch(e){}const a={name:i,type:t("c2hhZG93c29ja3M="),server:m,port:f,[t("Y2lwaGVy")]:e,[t("cGFzc3dvcmQ=")]:n};return a[t("dWRw")]=!0,a}if(t("dHJvamFu")===a||a===t("dHJvamFu")){const e={name:i,type:t("dHJvamFu"),server:m,port:f,password:b+(g?":"+g:""),skip_:0};delete e.skip_;const r={};if(r[t("dGxz")]=!0,r[t("c2tpcC1jZXJ0LXZlcmlmeQ==")]=!("false"===String(l[t("YWxsb3dpbnNlY3VyZQ==")]||"")||"0"===String(l[t("YWxsb3dpbnNlY3VyZQ==")]||"")),r[t("c2VydmVybmFtZQ==")]=l[t("c25p")]||l[t("cGVlcg==")]||l[t("aG9zdA==")]||m,l[t("YWxwbg==")]&&(r[t("YWxwbg==")]=l[t("YWxwbg==")].split(",").map(function(e){return e.trim()}).filter(Boolean)),Object.assign(e,r),e[t("dWRw")]=!0,e[t("bmV0d29yaw==")]="ws"===y?"ws":t("Z3JwYw==")===y?t("Z3JwYw=="):"http"===y||"h2"===y?"http":"tcp","ws"===y){e[t("bmV0d29yaw==")]="ws";const r={path:l[t("cGF0aA==")]||"/",headers:{Host:l[t("aG9zdA==")]||l[t("c25p")]||m}};e[t("d3Mtb3B0cw==")]=r}else if(t("Z3JwYw==")===y){e[t("bmV0d29yaw==")]=t("Z3JwYw==");const r={};r[t("Z3JwYy1zZXJ2aWNlLW5hbWU=")]=l[t("c2VydmljZW5hbWU=")]||l[t("cGF0aA==")]||"",e[t("Z3JwYy1vcHRz")]=r}return e}if(t("dmxlc3M=")===a||a===t("dmxlc3M=")){if(!b)return null;const e={name:i,type:t("dmxlc3M="),server:m,port:f,uuid:b};if(e[t("dWRw")]=!0,x&&(e[t("dGxz")]=!0,e[t("c2tpcC1jZXJ0LXZlcmlmeQ==")]=!("false"===String(l[t("YWxsb3dpbnNlY3VyZQ==")]||"")||"0"===String(l[t("YWxsb3dpbnNlY3VyZQ==")]||"")),e[t("c2VydmVybmFtZQ==")]=l[t("c25p")]||l[t("aG9zdA==")]||m,l[t("ZnA=")]&&(e[t("Y2xpZW50LWZpbmdlcnByaW50")]=l[t("ZnA=")]),l[t("YWxwbg==")]&&(e[t("YWxwbg==")]=l[t("YWxwbg==")].split(",").map(function(e){return e.trim()}).filter(Boolean)),l[t("Zmxvdw==")]&&(e[t("Zmxvdw==")]=l[t("Zmxvdw==")]),t("cmVhbGl0eQ==")===v)){const r={};r[t("cHVibGljLWtleQ==")]=l[t("cGJr")]||"",l[t("c2lk")]&&(r[t("c2hvcnQtaWQ=")]=l[t("c2lk")]),e[t("cmVhbGl0eS1vcHRz")]=r}if(e[t("bmV0d29yaw==")]="ws"===y?"ws":t("Z3JwYw==")===y?t("Z3JwYw=="):"http"===y||"h2"===y?"http":"tcp","ws"===y){e[t("bmV0d29yaw==")]="ws";const r={path:l[t("cGF0aA==")]||"/",headers:{Host:l[t("aG9zdA==")]||l[t("c25p")]||m}};e[t("d3Mtb3B0cw==")]=r}else if(t("Z3JwYw==")===y){e[t("bmV0d29yaw==")]=t("Z3JwYw==");const r={};r[t("Z3JwYy1zZXJ2aWNlLW5hbWU=")]=l[t("c2VydmljZW5hbWU=")]||l[t("cGF0aA==")]||"",e[t("Z3JwYy1vcHRz")]=r}return e}return null}catch(e){return null}}(r);if(e){_t=e;for(let r=0;r<H.length;r++)H[r][t("ZGlhbGVyUHJveHk=")]=e.name}}N=M?function(e,t,r){const n=Array.isArray(r)?r.slice(0,3):[];if(n.length>=3)return n;const a=new Set;for(const t of n)try{a.add(wt(t).host)}catch(e){}for(const t of F){if(n.length>=3)break;a.has(t)||(a.add(t),n.push(pt(e,t,443,"\u96a7\u9053\u524d\u7f6e-"+String(n.length+1).padStart(2,"0"))))}return n}(b,0,$t(await yt(b,T,null),U).slice(0,3)):$t(await yt(b,T,null),U),M||(N=Ut(N,r,w));const _="custom"===g&&!(r.optimizer&&r.optimizer.subIncludeDefault);if(M||_||w||H&&H.length||function(e,r,n){if(e.length>=n)return;const a=new Set;for(const t of e)try{a.add(wt(t).host)}catch(e){}r.src&&!0===r.src.native&&(o=>{if(e.length>=n)return;if(a.has(o))return;a.add(o);const i=dt("\u539f\u751f\u5730\u5740",!!r.enableVless,!!r.enableTrojan,!!r.enableXhttp);r.enableVless&&e.push(pt(r,o,443,i.v)),r.enableTrojan&&e.push(ut(r,o,443,i.t)),r.enableXhttp&&e.push(pt(r,o,443,i.x,{type:t("eGh0dHA=")}))})(r.host)}(N,b,T),M||!0||w||_&&N.length>0||function(e,r){const n=e.length+3*F.length,a=new Set;for(const t of e)try{a.add(wt(t).host)}catch(e){}let o=0;for(const i of F){if(e.length>=n)break;if(a.has(i))continue;a.add(i),o++;const s=dt("\u5185\u7f6e\u00b7\u4fdd\u5e95-"+String(o).padStart(2,"0"),!!r.enableVless,!!r.enableTrojan,!!r.enableXhttp);if(r.enableVless&&e.push(pt(r,i,443,s.v)),e.length>=n)break;if(r.enableTrojan&&e.push(ut(r,i,443,s.t)),e.length>=n)break;r.enableXhttp&&e.push(pt(r,i,443,s.x,{type:t("eGh0dHA=")}))}}(N,b),!M&&(!H||!H.length)&&r.nodeLimit&&g&&!_&&N.length<T){const e=T-N.length,t=new Set;for(const e of N)try{t.add(wt(e).host)}catch(e){}const r=(e,r,n)=>{N.length>=T||t.has(e)||(t.add(e),N.push(pt(b,e,r||443,n)))};let n=0;try{const t=await lr(),n=t,a=n.length>=e?n:t;for(const e of a)if(r(e.ip,e.port,e.name||"\u4f18\u9009IP-"+String(e.port)),N.length>=T)break}catch(e){}if(N.length<T){const e=T-N.length,t=C,a=me(w?t:k?[...S,...t]:S,3*e),o=a,i=o.length>=e?o:a;for(const e of i){if(N.length>=T)break;n++,r(e,443,"\u4f18\u9009IP-"+String(n).padStart(3,"0"))}}}if(M||(N=Ut(N,r,w)),function(e,t,r){if(e.length<2)return e;const n=!1!==t.loadBalance&&"random"!==r,a="tail"===(t&&t.ipv6Mode),o=[],i=[],s=[];for(const t of e)Rt(t)?o.push(t):a&&Vt(t)?s.push(t):i.push(t);if(!o.length&&!s.length)return n&&Dt(e),e;n&&(Dt(o),Dt(i)),e.length=0;for(let t=0;t<o.length;t++)e.push(o[t]);for(let t=0;t<i.length;t++)e.push(i[t]);for(let t=0;t<s.length;t++)e.push(s[t])}(N,r,g),N.length>T&&(N.length=T),N=function(e,t,r){const n=String(r||"").trim().toUpperCase(),a=String(t||"").toUpperCase(),o="OFF"===n?"":V[n]||R[a]||a||"",i=new Set;return e.map(e=>{let t="";try{t=St(e,0).name||""}catch(e){t=""}const r=t;let n=Lt(t);!n&&o&&(n=o,t=t?o+"\u00b7"+t:o+"\u00b7\u4f18\u9009"),t||(t="\u8282\u70b9");let a=t,s=2;for(;i.has(a);)a=t+"\u00b7"+s,s++;return i.add(a),a===r?e:function(e,t){const r=String(e),n=r.indexOf("#");return(n>=0?r.slice(0,n):r)+"#"+ct(t)}(e,a)})}(N,h,u),!(N.length||H&&H.length))for(let e=0;e<F.length;e++)try{N.push(pt(b,F[e],443,"\u515c\u5e95-"+String(e+1).padStart(2,"0")))}catch(e){}if("warp"===String(r.mode||"").toLowerCase()||t("bWFzcXVl")===String(r.mode||"").toLowerCase()){const e=t("bWFzcXVl")===String(r.mode||"").toLowerCase(),n=e?[t("Y2xhc2g=")]:[t("Y2xhc2g="),t("c2luZ2JveA=="),t("c2luZy1ib3g="),t("aGlkZGlmeQ=="),"plain","raw",t("djJyYXk="),t("djJyYXlu"),t("c2hhZG93cm9ja2V0"),t("bmVrb3JheQ=="),t("c3Rhc2g=")];if(!n.includes(I)&&!n.some(function(e){return s&&s.includes(e)}))return{type:"text/plain",body:"# \u5f53\u524d\u4e3a "+(e?"MASQUE":"WARP")+" \u6a21\u5f0f\uff1a\u672c\u8ba2\u9605\u683c\u5f0f\u4e0d\u652f\u6301\u8be5\u6a21\u5f0f\u7684\u539f\u751f\u8282\u70b9\uff0c\u672a\u4e0b\u53d1\u4efb\u4f55\u8282\u70b9\u3002\u8bf7\u6539\u7528\u652f\u6301\u8be5\u6a21\u5f0f\u7684\u5ba2\u6237\u7aef\u4e0e\u8ba2\u9605\u683c\u5f0f\u3002\n"};N=[]}let G,O;const Z=()=>{const e=N.slice();try{e.push(pt(b,b.host,443,"\u57df\u540d\u76f4\u8fde\u00b7\u5bf9\u7167"))}catch(e){}return{type:"text/plain",body:e.join("\n")}},Y=()=>(H||[]).filter(e=>!e.mg).map(e=>{try{const r=e.cid?atob(e.cid):"";return t("d2lyZWd1YXJk")+"://"+encodeURIComponent(e.k)+"@"+e.host+":"+e.port+"/?publickey="+encodeURIComponent(e.p)+"&address="+encodeURIComponent(e.local.map(e=>e+(e.indexOf(":")>=0?"/128":"/32")).join(","))+(e.cid?"&"+t("cmVzZXJ2ZWQ=")+"="+r.charCodeAt(0)+","+r.charCodeAt(1)+","+r.charCodeAt(2):"")+"&mtu=1280#"+encodeURIComponent(e.name)}catch(e){return""}}).filter(Boolean).join("\n");if(t("a2FyaW5n")===I)return Z();if(t("Y2xhc2g=")===I)G="text/yaml",O=Gt(b,N,l,new URL(o).origin+"/crules/"+Pr(b),c,u,h,H);else if(t("c2luZ2JveA==")===I||t("c2luZy1ib3g=")===I||t("aGlkZGlmeQ==")===I)G="application/json",O=Zt(b,N,H);else if(t("c3VyZ2U=")===I)G="text/plain",O=Yt(b,N);else if(t("c3VyZmJvYXJk")===I)G="text/plain",O=Ot(b,N);else if(t("bG9vbg==")===I)G="text/plain",O=Jt(b,N);else if(t("cXVhbng=")===I||t("cXVhbnR1bXVsdHg=")===I)G="text/plain",O=jt(b,N);else if("plain"===I||"raw"===I)G="text/plain",O=N.join("\n")+(Y()?"\n"+Y():"");else if(t("djJyYXk=")===I||t("djJyYXlu")===I||t("c2hhZG93cm9ja2V0")===I||t("bmVrb3JheQ==")===I||t("c3Rhc2g=")===I)G="text/plain",O=N.join("\n")+(Y()?"\n"+Y():"");else if(s.includes(t("Y2xhc2g="))||s.includes(t("c3Rhc2g=")))G="text/yaml",O=Gt(b,N,l,new URL(o).origin+"/crules/"+Pr(b),c,u,h,H);else{if(a.test(s))return Z();s.includes(t("c2luZy1ib3g="))?(G="application/json",O=Zt(b,N,H)):s.includes(t("c3VyZ2U="))?(G="text/plain",O=Yt(b,N)):s.includes(t("c3VyZmJvYXJk"))?(G="text/plain",O=Ot(b,N)):s.includes(t("bG9vbg=="))?(G="text/plain",O=Jt(b,N)):s.includes(t("cXVhbnR1bXVsdA=="))?(G="text/plain",O=jt(b,N)):s.includes("mozilla")?(G="text/yaml",O=Gt(b,N,l,new URL(o).origin+"/crules/"+Pr(b),c,u,h,H)):(G="text/plain",O=N.join("\n")+(Y()?"\n"+Y():""))}return{type:G,body:O}}const kr=String.raw`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${"\u63a7\u5236\u53f0"}</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}
.ibtn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.mbadge{margin-left:auto;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14);font-size:12px;color:var(--accent);white-space:nowrap}
[data-theme="light"] .mbadge{border-color:rgba(30,45,70,.10);background:rgba(255,255,255,.60);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.ibtn:hover{border-color:var(--accent);color:var(--accent)}
.ibtn svg{width:16px;height:16px;stroke:currentColor}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}
.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid rgba(255,255,255,.13);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:rgba(255,255,255,.05);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.20);transition:border-color .15s,color .15s,background .15s,box-shadow .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.tbl-wrap{overflow-x:auto}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.msg.show{display:block}
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
@media (min-width:1100px){
  /* ${"\u53f3\u4fa7\u907f\u8ba9\u53f3\u4e0b\u89d2\u6d6e\u52a8\u4fdd\u5b58\u680f\uff08\u5c1a\u672a\u4fdd\u5b58"}/${"\u91cd\u7f6e"}/${"\u4fdd\u5b58\u5168\u90e8\uff09\uff0c\u907f\u514d\u906e\u6321\u7b5b\u9009\u52fe\u9009\u9879"} */
  .filter-grid{padding-right:200px}
}
.mmode{position:fixed;inset:0;z-index:120;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,13,.74)}
.mmode.show{display:flex}
.mmodebox{width:100%;max-width:820px;max-height:88vh;overflow-y:auto;background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);padding:22px 22px 16px}
.mmodebox h3{margin:0 0 6px;font-size:17px}
.mmodebox .msub{color:var(--dim);font-size:12.5px;line-height:1.65;margin-bottom:16px}
.mmodegrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.mmodecard{border:1px solid rgba(255,255,255,.14);border-radius:11px;background:rgba(255,255,255,.055);color:var(--text);padding:15px 14px;cursor:pointer;text-align:left;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 8px 22px rgba(0,0,0,.30);transition:border-color .15s,transform .15s,box-shadow .15s,background .15s}
.mmodecard:hover{border-color:var(--accent);transform:translateY(-2px)}
.mmodecard b{display:block;font-size:14.5px;margin-bottom:7px}
.mmodecard span{display:block;font-size:12.5px;color:var(--dim);line-height:1.6}
.mmodecard em{display:block;font-style:normal;font-size:11.5px;color:var(--faint);margin-top:9px}
.mmodefoot{margin-top:14px;text-align:right}
.mmodefoot a{color:var(--dim);font-size:12.5px;text-decoration:none}
.mmodefoot a:hover{color:var(--accent)}
@media (max-width:760px){
  .mmodegrid{grid-template-columns:1fr}
}
*{box-sizing:border-box;margin:0;padding:0}:root{--bg:#06080d;--bg2:#090d14;--card:#0c1119;--card2:#101724;--border:#1a2331;--text:#e9eef7;--dim:#93a3b8;--faint:#61718a;--line:#131a25;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.14);--ok:#22c55e;--ok-dim:rgba(34,197,94,.13);--err:#f87171;--err-dim:rgba(248,113,113,.13);--warn:#fbbf24;--sb-bg:#080c12;--sb-text:#9fb0c5;--sb-dim:#5f7292;--sb-border:#161d28;--sb-active-bg:rgba(124,108,255,.14);--sb-active-text:#ab9dff;--sb-active-bar:#7c6cff;--glass:rgba(23,32,45,.54);--glass-2:rgba(19,27,39,.62);--glass-line:rgba(255,255,255,.10);--sb-glass:rgba(20,28,41,.50);--sb-rim:rgba(255,255,255,.46);--sb-vol-a:rgba(255,255,255,.11);--sb-vol-b:rgba(0,0,0,.20);--sb-glass-m:rgba(15,21,32,.88);--glass-rim:rgba(255,255,255,.30);--glass-hi:rgba(255,255,255,.12);--glass-field:rgba(255,255,255,.045);--glass-hover:rgba(255,255,255,.07);--glass-btn:rgba(255,255,255,.09);--glass-btn-hi:rgba(255,255,255,.17);--glass-rim-sm:rgba(255,255,255,.55);--glass-field-brd:rgba(255,255,255,.09);--glass-blur:22px;--glass-sh:0 20px 48px rgba(0,0,0,.42);--glass-shx:12px 0 36px rgba(0,0,0,.30);--blob-o:.44;--shadow:0 14px 40px rgba(0,0,0,.4);color-scheme:dark}[data-theme="light"]{--bg:#f4f6fb;--bg2:#eaeef6;--card:#fff;--card2:#f7f9fd;--border:#e1e7f0;--text:#16202e;--dim:#5a6a80;--faint:#93a1b4;--line:#eaeff6;--accent:#6355f5;--accent2:#0ea5b7;--accent-dim:rgba(99,85,245,.10);--ok:#17915a;--ok-dim:rgba(23,145,90,.11);--err:#dc4c4c;--err-dim:rgba(220,76,76,.10);--warn:#b7791f;--sb-bg:#ffffff;--sb-text:#5a6a80;--sb-dim:#9aa8bb;--sb-border:#e5eaf2;--sb-active-bg:rgba(99,85,245,.10);--sb-active-text:#5546e8;--sb-active-bar:#6355f5;--glass:rgba(255,255,255,.50);--glass-2:rgba(255,255,255,.60);--glass-line:rgba(20,40,70,.10);--sb-glass:rgba(255,255,255,.46);--sb-rim:rgba(255,255,255,1);--sb-vol-a:rgba(255,255,255,.68);--sb-vol-b:rgba(20,40,70,.075);--sb-glass-m:rgba(255,255,255,.90);--glass-rim:rgba(255,255,255,.95);--glass-hi:rgba(255,255,255,.70);--glass-field:rgba(255,255,255,.62);--glass-hover:rgba(20,40,70,.055);--glass-btn:rgba(255,255,255,.86);--glass-btn-hi:#ffffff;--glass-rim-sm:rgba(255,255,255,1);--glass-field-brd:rgba(20,40,70,.11);--glass-blur:22px;--glass-sh:0 18px 44px rgba(25,45,80,.13);--glass-shx:10px 0 30px rgba(25,45,80,.09);--blob-o:.42;--shadow:0 12px 34px rgba(25,40,70,.12);color-scheme:light}html,body{min-height:100%}body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.6;-webkit-font-smoothing:antialiased}a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}.app{display:flex;min-height:100vh;gap:12px;padding:12px}.sidebar{width:232px;flex:0 0 232px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:12px;height:calc(100vh - 24px);z-index:50}.brand{display:flex;align-items:center;gap:11px;padding:18px 18px 14px}.brand .lg{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}.brand .lg svg{width:18px;height:18px;stroke:#0b0e14;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.brand .bt{display:flex;flex-direction:column;line-height:1.25;min-width:0}.brand .bt b{font-size:15px;font-weight:700;letter-spacing:.3px}.brand .bt span{font-size:11px;color:var(--sb-dim);white-space:nowrap;over${t("Zmxvdzo=")}hidden;text-over${t("Zmxvdzo=")}ellipsis}.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}.nav-item{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;margin:2px 0;border:none;background:transparent;color:var(--sb-text);font-size:13.5px;font-family:inherit;text-align:left;cursor:pointer;border-radius:8px;position:relative;transition:.15s}.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent}.main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.topbar{display:flex;align-items:center;gap:14px;padding:12px 20px;border:1px solid var(--border);border-radius:18px;background:var(--bg);position:sticky;top:12px;z-index:40}.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}.ibtn.hamb{display:none}.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 11px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}.pill.off{background:var(--err-dim);color:var(--err)}.pill i{width:6px;height:6px;border-radius:50%;background:currentColor;display:block}.ibtn{width:34px;height:34px;border-radius:9px;border:1px solid var(--border);background:var(--card2);color:var(--dim);cursor:pointer;display:flex;align-items:center;justify-content:center}.ibtn:hover{border-color:var(--accent);color:var(--accent)}.ibtn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}.wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 4px 96px}.view{display:none}.view.on{display:block;animation:up .2s ease}@keyframes up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.vh{margin-bottom:16px}.vh h2{font-size:20px;font-weight:700}.vh p{color:var(--dim);font-size:13px;margin-top:3px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px}.card h3{font-size:14px;font-weight:650;margin-bottom:14px;display:flex;align-items:center;gap:9px}.card h3 .dot{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}.card h3 .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}.kv{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px}.kv:last-child{border-bottom:none}.kv .k{color:var(--dim);white-space:nowrap}.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}.field{margin-bottom:13px}.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}input[type=text],input[type=password],input[type=number],select,textarea{width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:9px 11px;font-size:13.5px;outline:none;font-family:inherit;transition:.15s}input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}textarea{resize:vertical;line-height:1.55;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}select{cursor:pointer;appearance:none;-webkit-appearance:none;padding-right:30px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2393a3b8' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 11px center}select option,select optgroup{background:var(--bg2);color:var(--text)}input,select,textarea{accent-color:var(--accent)}.hint{font-size:12px;color:var(--dim);margin-top:7px;line-height:1.7}.inrow{display:flex;gap:8px;align-items:flex-start}.inrow>div{flex:1}.sw{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}.sw input{opacity:0;width:0;height:0}.sw .sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:.18s}.sw .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}.sw input:checked+.sl{background:var(--accent)}.sw input:checked+.sl::before{transform:translateX(18px)}.prow{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px dashed var(--line);font-size:13.5px}.prow:last-child{border-bottom:none}.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:9px;padding:9px 15px;font-size:13px;cursor:pointer;font-family:inherit;white-space:nowrap;transition:.15s}.btn:hover{border-color:var(--accent);color:var(--accent)}.btn:active{transform:translateY(1px)}.btn:disabled{opacity:.5;cursor:not-allowed}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;font-weight:600}.btn.pri:hover{filter:brightness(1.07);color:#0b0e14}.btn.dgr{background:var(--err-dim);border-color:transparent;color:var(--err)}.btn.sm{padding:5px 11px;font-size:12px;border-radius:7px}.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.row .grow{flex:1;min-width:150px}.pills{display:flex;flex-wrap:wrap;gap:8px}.sp{position:relative}.sp input{position:absolute;opacity:0;pointer-events:none}.sp span{display:inline-block;padding:5px 13px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card2);transition:.15s;user-select:none}.sp:hover span{border-color:var(--accent);color:var(--accent)}.sp input:checked+span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}.blk{border-top:1px solid var(--line);margin-top:14px;padding-top:14px}.blk-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:10px;letter-spacing:.4px}.tbl{overflow-x:auto}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--line);white-space:nowrap}th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}td.ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.bdg{display:inline-block;padding:2px 9px;border-radius:10px;font-size:11.5px}.bdg.g{background:var(--ok-dim);color:var(--ok)}.bdg.r{background:var(--err-dim);color:var(--err)}.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.msg{display:none;margin-top:12px;padding:10px 13px;border-radius:9px;font-size:12.5px;line-height:1.65}.msg.on{display:block}.msg.ok{background:var(--ok-dim);color:var(--ok)}.msg.err{background:var(--err-dim);color:var(--err)}.msg.info{background:var(--accent-dim);color:var(--accent)}pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;over${t("Zmxvdzo=")}auto;max-height:280px;white-space:pre-wrap;word-break:break-all;color:var(--dim);margin-top:10px}.bar{position:fixed;right:20px;bottom:20px;display:flex;gap:10px;align-items:center;z-index:60}.bar .btn{box-shadow:var(--shadow)}.stat{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:9px;padding:6px 11px;box-shadow:var(--shadow);white-space:nowrap}.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(90px);background:var(--card);border:1px solid var(--border);padding:11px 20px;border-radius:11px;font-size:13px;opacity:0;transition:.25s;z-index:200;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}.toast.ok{border-color:var(--ok);color:var(--ok)}.toast.err{border-color:var(--err);color:var(--err)}.toast.warn{border-color:var(--warn);color:var(--warn)}.note{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.75}.steps{list-style:none;counter-reset:st}.steps li{counter-increment:st;position:relative;padding:0 0 15px 32px;font-size:13px;color:var(--dim)}.steps li::before{content:counter(st);position:absolute;left:0;top:1px;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}.steps li b{color:var(--text)}.prog{height:9px;border-radius:7px;background:var(--card2);over${t("Zmxvdzo=")}hidden;margin:10px 0}.prog>div{height:100%;width:0;border-radius:7px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s}.qr{display:flex;justify-content:center;padding:12px 0 2px}.qr img{width:170px;height:170px;image-rendering:pixelated;border-radius:10px;background:#fff;padding:8px}.dz{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim);margin-bottom:16px}.dz h3{font-size:14px;color:var(--err);margin-bottom:8px}.fgrp{border:1px solid var(--border);border-radius:11px;padding:12px;margin-bottom:12px}.fgrp-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px}.bgfx{position:fixed;inset:0;z-index:0;over${t("Zmxvdzo=")}hidden;pointer-events:none}.bgfx i{position:absolute;display:block;border-radius:50%;filter:blur(74px);opacity:var(--blob-o);will-change:transform}.bgfx i:nth-child(1){width:46vw;height:46vw;left:-12vw;top:-16vh;background:var(--accent);animation:blob 24s ease-in-out infinite}.bgfx i:nth-child(2){width:38vw;height:38vw;right:-14vw;top:2vh;background:var(--accent2);opacity:calc(var(--blob-o) * .72);animation:blob 30s ease-in-out infinite -8s}.bgfx i:nth-child(3){width:34vw;height:34vw;left:20vw;bottom:-22vh;background:#f472b6;opacity:calc(var(--blob-o) * .55);animation:blob 27s ease-in-out infinite -14s}.bgfx i:nth-child(4){width:30vw;height:30vw;right:10vw;bottom:-16vh;background:#38bdf8;opacity:calc(var(--blob-o) * .5);animation:blob 33s ease-in-out infinite -20s}@keyframes blob{0%,100%{transform:translate3d(0,0,0) scale(1)}33%{transform:translate3d(4vw,4vh,0) scale(1.1)}66%{transform:translate3d(-3vw,2vh,0) scale(.94)}}.app{position:relative;z-index:1}.sidebar{background:var(--sb-glass);-webkit-backdrop-filter:blur(30px) saturate(190%);backdrop-filter:blur(30px) saturate(190%);border:1px solid var(--glass-line);border-radius:22px;corner-shape:squircle;isolation:isolate;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi),0 0 0 1px rgba(255,255,255,.03)}.sidebar::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(520px 400px at var(--mx,50%) var(--my,-16%),var(--glass-hi),transparent 62%),linear-gradient(180deg,var(--sb-vol-a) 0,rgba(0,0,0,0) 32%,rgba(0,0,0,0) 60%,var(--sb-vol-b) 100%)}.sidebar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:1;background:linear-gradient(150deg,var(--sb-rim) 0,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 66%,var(--sb-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.sidebar>*{position:relative;z-index:2}.side-foot{border-top:1px solid var(--glass-line)}.nav::-webkit-scrollbar{width:8px}.nav::-webkit-scrollbar-thumb{background:var(--glass-field-brd);border-radius:8px}.nav-item{border-radius:12px}.nav-item:hover{background:var(--glass-hover)}.nav-item.on{background:var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.16)}.topbar{background:var(--glass-2);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--glass-line);box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.topbar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 36%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.ibtn{position:relative;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:11px;box-shadow:inset 0 1px 0 var(--glass-hi);transition:.18s cubic-bezier(.34,1.4,.64,1)}.ibtn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--accent);transform:translateY(-1px)}.ibtn:active{transform:translateY(0) scale(.96)}.card{position:relative;background:var(--glass);-webkit-backdrop-filter:blur(var(--glass-blur)) saturate(170%);backdrop-filter:blur(var(--glass-blur)) saturate(170%);border:1px solid var(--glass-line);border-radius:20px;corner-shape:squircle;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.card>*{position:relative;z-index:1}.card::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(440px 260px at var(--mx,50%) var(--my,-12%),var(--glass-hi),transparent 68%)}.card::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:0;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 32%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.fgrp{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px;corner-shape:squircle}.note{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-left:3px solid var(--accent);border-radius:14px}pre.code{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px}.msg{border-radius:13px}input[type=text],input[type=password],input[type=number],select,textarea{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:12px;box-shadow:inset 0 1px 0 var(--glass-hi)}.sp span{background:var(--glass-field);border:1px solid var(--glass-field-brd)}th{background:var(--glass-field)}.btn{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:13px;position:relative;box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 14px rgba(0,0,0,.16);transition:.18s cubic-bezier(.34,1.4,.64,1)}.btn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--text);transform:translateY(-1px)}.btn:active{transform:translateY(0) scale(.985)}.btn.sm{border-radius:10px}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;box-shadow:0 8px 24px var(--accent-dim),inset 0 1px 0 rgba(255,255,255,.45);over${t("Zmxvdzo=")}hidden}.btn.pri:hover{color:#0b0e14;filter:brightness(1.06)}.btn.pri::after{content:"";position:absolute;top:-60%;left:-40%;width:36%;height:220%;pointer-events:none;transform:rotate(16deg);background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0));opacity:0;transition:opacity .2s}.btn.pri:hover::after{opacity:1;animation:sheen .85s cubic-bezier(.4,0,.2,1)}@keyframes sheen{from{left:-40%}to{left:130%}}.bar .stat{background:var(--glass);-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%);border:1px solid var(--glass-line);border-radius:14px;box-shadow:var(--glass-sh)}.toast{background:var(--glass);-webkit-backdrop-filter:blur(24px) saturate(180%);backdrop-filter:blur(24px) saturate(180%);border:1px solid var(--glass-line);border-radius:16px;box-shadow:var(--glass-sh)}.pill{box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}.btn::before,.ibtn::before,.sp span::before,.pill::before,.nav-item.on::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(160deg,var(--glass-rim-sm) 0,rgba(255,255,255,0) 42%,rgba(255,255,255,0) 58%,var(--glass-rim-sm) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.btn{background:var(--glass-btn);border-radius:13px;box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.20),0 1px 2px rgba(0,0,0,.18)}.btn:hover{background:var(--glass-btn-hi);border-color:var(--glass-rim-sm);color:var(--text);transform:translateY(-1px);box-shadow:inset 0 1px 0 var(--glass-hi),0 10px 26px rgba(0,0,0,.26)}.bar .btn{box-shadow:inset 0 1px 0 var(--glass-hi),var(--glass-sh)}.ibtn{background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 12px rgba(0,0,0,.16)}.ibtn:hover{background:var(--glass-btn-hi)}.sp span{position:relative;background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi)}.sp input:checked+span{box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 4px 14px var(--accent-dim)}.pill{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.ver-chip{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.nav-item{border-radius:12px}.nav-item.on{background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,0)),var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 8px 20px rgba(0,0,0,.18)}.sw .sl{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}.sw input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}.sw .sl::before{box-shadow:0 1px 4px rgba(0,0,0,.40)}.bdg{box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.fgrp,.note,pre.code{box-shadow:inset 0 1px 0 var(--glass-hi)}.msg{box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}.prog{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.14)}.steps li::before{background:var(--accent-dim);box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.dz{background:var(--err-dim);border:1px solid rgba(248,113,113,.30);border-radius:18px;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:var(--glass-sh)}@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.sidebar,.topbar{background:var(--card2)}.card{background:var(--card)}.btn,.ibtn,.sp span{background:var(--card2)}.bar .stat,.toast{background:var(--card)}}@media(prefers-reduced-motion:reduce){.bgfx i{animation:none}.btn.pri:hover::after{animation:none;opacity:0}.ibtn:hover,.btn:hover{transform:none}.view.on{animation:none}}@media(max-width:640px){:root{--glass-blur:14px}.sidebar{-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%)}.bgfx i:nth-child(3),.bgfx i:nth-child(4){display:none}}@media(max-width:960px){.sidebar{position:fixed;left:12px;top:12px;height:calc(100vh - 24px);background:var(--sb-glass-m);transform:translateX(calc(-100% - 28px));transition:transform .22s ease;z-index:70;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.sidebar.open{transform:translateX(0)}.ibtn.hamb{display:flex}.app{padding:10px;gap:10px}.wrap{padding:0 2px 92px}.topbar{padding:10px 14px;top:10px}}@media(max-width:560px){.topbar .pill{display:none}}[data-style="material"]{--bg:var(--m-surface);--bg2:var(--m-surface-container);--card:var(--m-surface-container-low);--card2:var(--m-surface-container);--border:var(--m-outline-variant);--line:var(--m-outline-variant);--text:var(--m-on-surface);--dim:var(--m-on-surface-variant);--faint:var(--m-outline);--accent:var(--m-primary);--accent2:var(--m-tertiary);--accent-dim:var(--m-primary-container);--ok:var(--m-primary);--ok-dim:var(--m-primary-container);--err:var(--m-error);--err-dim:var(--m-error-container);--warn:var(--m-tertiary);--glass-rim:transparent;--glass-rim-sm:transparent;--glass-hi:transparent;--sb-rim:transparent;--sb-vol-a:transparent;--sb-vol-b:transparent;--m-e1:0 1px 2px rgba(0,0,0,.42),0 1px 3px 1px rgba(0,0,0,.24);--m-e2:0 1px 2px rgba(0,0,0,.42),0 2px 6px 2px rgba(0,0,0,.24);--m-e3:0 1px 3px rgba(0,0,0,.42),0 4px 8px 3px rgba(0,0,0,.24);--shadow:var(--m-e2);font-family:Roboto,"Roboto Flex","Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif}[data-theme="light"][data-style="material"]{--m-e1:0 1px 2px rgba(0,0,0,.16),0 1px 3px 1px rgba(0,0,0,.09);--m-e2:0 1px 2px rgba(0,0,0,.16),0 2px 6px 2px rgba(0,0,0,.09);--m-e3:0 1px 3px rgba(0,0,0,.16),0 4px 8px 3px rgba(0,0,0,.09)}[data-style="material"] .bgfx{display:none}[data-style="material"] .card::before,[data-style="material"] .card::after,[data-style="material"] .sidebar::before,[data-style="material"] .sidebar::after,[data-style="material"] .topbar::after{display:none}[data-style="material"] .sidebar{background:var(--m-surface-container-low);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:var(--m-e1)}[data-style="material"] .brand .lg{border-radius:12px;box-shadow:none}[data-style="material"] .brand .bt b{font-weight:500}[data-style="material"] .nav-item{border-radius:28px;padding:10px 16px;font-size:14px}[data-style="material"] .nav-item.on::before{display:none}[data-style="material"] .nav-item.on{background:var(--m-secondary-container);color:var(--m-on-secondary-container);font-weight:500;box-shadow:none}[data-style="material"] .nav-item:hover{background:transparent;color:var(--text)}[data-style="material"] .side-foot{border-top:1px solid var(--m-outline-variant)}[data-style="material"] .ver-chip{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none}[data-style="material"] .topbar{background:var(--m-surface);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:none}[data-style="material"] .topbar h1{font-weight:400;font-size:20px}[data-style="material"] .ibtn{background:transparent;border:none;border-radius:50%;color:var(--m-on-surface-variant);box-shadow:none;over${t("Zmxvdzo=")}hidden}[data-style="material"] .ibtn:hover{background:transparent;color:var(--m-on-surface)}[data-style="material"] .ibtn:active{transform:none}[data-style="material"] .pill{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none;padding:5px 12px;font-weight:500}[data-style="material"] .card{background:var(--m-surface-container-low);border:none;border-radius:16px;box-shadow:var(--m-e1);-webkit-backdrop-filter:none;backdrop-filter:none}[data-style="material"] .card h3{font-weight:500}[data-style="material"] .card h3 .dot{background:var(--m-primary)}[data-style="material"] .fgrp,[data-style="material"] .note,[data-style="material"] pre.code{background:var(--m-surface-container);border:1px solid var(--m-outline-variant);border-radius:12px;box-shadow:none}[data-style="material"] .note{border-left:1px solid var(--m-outline-variant)}[data-style="material"] .msg{border-radius:12px;box-shadow:none}[data-style="material"] input[type=text],[data-style="material"] input[type=password],[data-style="material"] input[type=number],[data-style="material"] select,[data-style="material"] textarea{background:transparent;border:1px solid var(--m-outline);border-radius:8px;box-shadow:none}[data-style="material"] input:focus,[data-style="material"] select:focus,[data-style="material"] textarea:focus{border-color:var(--m-primary);box-shadow:inset 0 0 0 1px var(--m-primary)}[data-style="material"] th{background:var(--m-surface-container);font-weight:500}[data-style="material"] .bdg{box-shadow:none;background:var(--m-secondary-container);color:var(--m-on-secondary-container)}[data-style="material"] .box{background:var(--m-surface-container-high);border:none;border-radius:28px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:var(--m-e3);corner-shape:round}[data-style="material"] .box::after{display:none}[data-style="material"] .logo{background:var(--m-primary-container);border-radius:16px;box-shadow:none}[data-style="material"] .logo svg{stroke:var(--m-on-primary-container)}[data-style="material"] .box p{color:var(--m-on-surface-variant)}[data-style="material"] .btn{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border:none;border-radius:20px;box-shadow:none;font-weight:500;-webkit-mask:none;over${t("Zmxvdzo=")}hidden}[data-style="material"] .btn:hover{background:var(--m-secondary-container);color:var(--m-on-secondary-container);transform:none;box-shadow:var(--m-e1)}[data-style="material"] .btn:active{transform:none}[data-style="material"] .btn.pri{background:var(--m-primary);color:var(--m-on-primary);box-shadow:none;border-radius:20px}[data-style="material"] .btn.pri:hover{background:var(--m-primary);color:var(--m-on-primary);box-shadow:var(--m-e1);filter:none}[data-style="material"] .btn.pri::after{display:none}[data-style="material"] .btn.sm{border-radius:18px}[data-style="material"] .btn.dgr{background:var(--m-error);color:var(--m-on-error)}[data-style="material"] .sp span{background:transparent;border:1px solid var(--m-outline);color:var(--m-on-surface-variant);border-radius:20px;box-shadow:none}[data-style="material"] .sp input:checked+span{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-color:transparent;box-shadow:none}[data-style="material"] .btn::before,[data-style="material"] .ibtn::before,[data-style="material"] .sp span::before,[data-style="material"] .nav-item::before{content:"";position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;-webkit-mask:none;mask:none;pointer-events:none;transition:opacity .12s}[data-style="material"] .btn:hover::before,[data-style="material"] .ibtn:hover::before,[data-style="material"] .sp span:hover::before,[data-style="material"] .nav-item:hover::before{opacity:.08}[data-style="material"] .btn:active::before,[data-style="material"] .ibtn:active::before,[data-style="material"] .sp span:active::before{opacity:.12}[data-style="material"] .card,.md-rip-host{position:relative}[data-style="material"] .nav-item,[data-style="material"] .sp span,[data-style="material"] .pill,[data-style="material"] .fgrp{position:relative;over${t("Zmxvdzo=")}hidden}.md-rip{position:absolute;border-radius:50%;pointer-events:none;background:currentColor;opacity:0;transform:scale(0);animation:mdRip .62s cubic-bezier(.2,0,0,1) forwards}@keyframes mdRip{0%{opacity:.20;transform:scale(.25)}55%{opacity:.14}100%{opacity:0;transform:scale(1)}}@media(prefers-reduced-motion:reduce){.md-rip{display:none}}[data-style="material"] .sw .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}[data-style="material"] .sw input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}[data-style="material"] .sw .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}[data-style="material"] .prog{background:var(--m-surface-container-highest);border:none;border-radius:4px;box-shadow:none;height:8px}[data-style="material"] .prog>div{border-radius:4px;background:var(--m-primary)}[data-style="material"] .steps li::before{background:var(--m-primary-container);color:var(--m-on-primary-container);box-shadow:none}[data-style="material"] .dz{background:var(--m-error-container);border:none;border-radius:16px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none}[data-style="material"] .dz h3{color:var(--m-on-error-container)}[data-style="material"] .dz p{color:var(--m-on-error-container)}[data-style="material"] .bar .stat,[data-style="material"] .toast{background:var(--m-surface-container-high);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:12px;box-shadow:var(--m-e3);color:var(--text)}[data-style="material"] .bar .btn{box-shadow:var(--m-e2)}[data-style="material"] .qr img{border-radius:12px}.seg{display:flex;gap:8px;flex-wrap:wrap}.seg button{flex:1;min-width:120px;justify-content:center}.seg button.on{background:var(--accent);color:#fff;border-color:transparent}[data-style="material"] .seg button.on{background:var(--m-primary);color:var(--m-on-primary)}.md-sw{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-sw i{width:30px;height:30px;border-radius:50%;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-sw i:hover{transform:scale(1.1)}.md-sw i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}.md-pal{margin-top:14px;border:1px solid var(--border);border-radius:12px;over${t("Zmxvdzo=")}hidden}.md-pal .r{display:flex;align-items:center;gap:2px;padding:3px 6px}.md-pal .r b{width:66px;flex:0 0 66px;font-size:10.5px;font-weight:500;color:var(--dim);font-family:ui-monospace,Consolas,monospace}.md-pal .r i{flex:1;height:20px;border-radius:4px;display:block;cursor:pointer;position:relative;z-index:0;transition:transform .12s ease,box-shadow .12s ease}.md-pal .r:hover b{color:var(--text)}.md-pal .r i:hover{transform:scale(1.16);z-index:3;box-shadow:0 0 0 1.5px var(--text),0 4px 10px rgba(0,0,0,.45)}.md-pal .r i.on{z-index:2;box-shadow:inset 0 0 0 2px rgba(255,255,255,.94),inset 0 0 0 4px rgba(0,0,0,.56)}.md-pal .r:first-child i{border-radius:6px 6px 4px 4px}.md-pal .r:last-child i{border-radius:4px 4px 6px 6px}.md-out{display:flex;align-items:center;gap:9px;margin-top:10px;flex-wrap:wrap;font-size:12px}.md-out .chip{width:20px;height:20px;border-radius:6px;flex:0 0 20px;display:block;box-shadow:0 0 0 1px var(--border)}.md-out .hx{font-family:ui-monospace,Consolas,monospace;color:var(--text);cursor:pointer;letter-spacing:.4px;padding:3px 7px;border-radius:7px;background:var(--bg2);box-shadow:0 0 0 1px var(--border)}.md-out .hx:hover{background:var(--card2)}.md-out .tag{color:var(--faint)}.md-seed{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-seed i{width:34px;height:34px;border-radius:9px;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-seed i:hover{transform:scale(1.08)}.md-seed i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}

/* ===== ${t("Q0ZOZXh0")} ${"\u81ea\u6709\u7ec4\u4ef6\u5c42\uff1a\u5bf9\u9f50\u53c2\u8003\u9762\u677f\u89c6\u89c9"} ===== */
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.mark{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:19px;height:19px}
.mark path{stroke:#fff}
.fold{display:none}
.fold.open{display:block}
.foldbtn{margin-left:auto;flex:0 0 26px;width:26px;height:26px;padding:0;border:1px solid var(--border);border-radius:8px;background:var(--card2);color:var(--dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:color .18s,border-color .18s,background .18s}
.foldbtn:hover{color:var(--text);border-color:var(--accent);background:var(--accent-dim)}
.foldbtn svg{width:14px;height:14px;transition:transform .2s ease}
.foldbtn[data-open="1"] svg{transform:rotate(180deg)}
.foldbtn path{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.card h3 .tick{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#fff;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#fff}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:10px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.danger-zone{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim)}
.steps li::before{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .steps li::before{color:var(--accent)}
.msg.info{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .msg.info{color:var(--accent)}
.qrbox img{border-radius:12px}
.mmodebox{border-radius:16px}
.mmodecard{border-radius:14px}
/* ${"\u5f00\u5173\u6ed1\u5757\u672c\u4f53\uff1a"}${t("Q0ZOZXh0")} ${"\u7684"} DOM ${"\u662f"} label.switch>span.sl${"\uff08\u65e0"} .sw ${"\u7956\u5148\uff09\uff0c"}nimbus ${"\u7684"} .sw .sl ${"\u4e0d\u5339\u914d\uff0c\u987b\u5355\u72ec\u8865\u56de"} */
.switch .sl{position:absolute;inset:0;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:22px;cursor:pointer;transition:.18s;box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}
.switch .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s;box-shadow:0 1px 4px rgba(0,0,0,.40)}
.switch input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}
.switch input:checked+.sl::before{transform:translateX(18px)}
[data-style="material"] .switch .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}
[data-style="material"] .switch input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}
[data-style="material"] .switch .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}
/* ${"\u6309\u94ae\u7edf\u4e00\u6db2\u6001\u73bb\u7483\uff1a\u534a\u900f\u660e"} + ${"\u6a21\u7cca"} + ${"\u5185\u9ad8\u5149\uff0c\u4e0e\u5361\u7247"}/${"\u8f93\u5165\u6846\u540c\u4e00\u6750\u8d28"} */
.btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:var(--text);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.18);transition:border-color .15s,color .15s,box-shadow .15s,transform .15s}
[data-theme="light"] .btn{background:rgba(255,255,255,.55);border:1px solid rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90),0 2px 8px rgba(30,45,70,.06)}
.btn:hover{border-color:var(--accent);color:var(--accent);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 4px 14px var(--accent-dim)}
.btn.pri,.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:rgba(255,255,255,.18);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 6px 18px var(--accent-dim)}
.btn.pri:hover,.btn.primary:hover{filter:brightness(1.08);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 8px 22px var(--accent-dim)}
.btn.dgr,.btn.danger{background:var(--err-dim);border-color:rgba(248,113,113,.28);color:var(--err);box-shadow:inset 0 1px 0 rgba(255,255,255,.10)}
.ibtn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}
[data-theme="light"] .ibtn{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.nav-item{background:transparent;border-color:transparent}
.nav-item.on,.nav-item:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
[data-theme="light"] .nav-item.on,[data-theme="light"] .nav-item:hover{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
@media (max-width:960px){.grid2,.grid3{grid-template-columns:1fr}}

</style>
</head>
<body><div class="bgfx" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
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
    <button class="ibtn hamb" id="hamb" title="${"\u83dc\u5355"}"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">${"\u4eea\u8868\u76d8"}</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">${"\u8fde\u63a5\u4e2d"}</span></span>
    <button class="ibtn" id="themeBtn" title="${"\u5207\u6362\u65e5\u95f4"} / ${"\u591c\u95f4"}"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button><button class="ibtn" id="exitBtn" title="${"\u9000\u51fa\u5f53\u524d\u6a21\u5f0f\uff0c\u56de\u5230\u6a21\u5f0f\u9009\u62e9"}" onclick="exitMode()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">${"\u5f53\u524d\u8fd0\u884c\u5728"} *.workers.dev ${"\u57df\u540d\u4e0a\uff1a\u8ba2\u9605\u4e0e\u8282\u70b9\u4e0b\u53d1\u529f\u80fd\u6b63\u5e38\uff1b\u82e5\u9047\u8fde\u63a5\u4e0d\u7a33\u6216\u8bbf\u95ee\u53d7\u9650\uff0c\u5efa\u8bae\u5728"} Cloudflare ${"\u9762\u677f\u7ed1\u5b9a\u81ea\u5b9a\u4e49\u57df\u540d\u540e\u4f7f\u7528\u3002"}</div>

  <div class="wrap" id="content">
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
              <option value="${t("Y2xhc2g=")}">${t("Q2xhc2g=")} / ${t("TWlob21v")}</option>
              <option value="${t("c2luZ2JveA==")}">${t("U2luZy1ib3g=")}</option>
              <option value="${t("a2FyaW5n")}">${t("S2FyaW5n")}</option>
              <option value="${t("c3VyZ2U=")}">${t("U3VyZ2U=")}</option>
              <option value="${t("c3VyZmJvYXJk")}">${t("U3VyZmJvYXJk")}</option>
              <option value="${t("bG9vbg==")}">${t("TG9vbg==")}</option>
              <option value="${t("cXVhbng=")}">${t("UXVhbnR1bXVsdA==")} X</option>
              <option value="${t("djJyYXk=")}">${t("djJyYXlO")} / ${t("U2hhZG93cm9ja2V0")}</option>
              <option value="${t("c3Rhc2g=")}">${t("U3Rhc2g=")}</option>
              <option value="plain">${"\u660e\u6587"} ${t("dmxlc3M=")}</option>
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
      <div class="card" id="cardFilter">
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
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);over${t("Zmxvdzo=")}hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">${"\u5df2\u7528\u989d\u5ea6"}</span><span class="v" id="dbPct">${"\u2014"}</span></div>
        </div>
        <p class="hint" style="margin-top:10px">${"\u514d\u8d39\u8ba1\u5212"} 100,000 ${"\u6b21"}/${"\u65e5\u3002\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u914d\u7f6e"} Cloudflare ${"\u76d1\u63a7\u540e\u5373\u53ef\u5728\u6b64\u67e5\u770b\u5f53\u65e5\u7528\u91cf\uff1b\u7b56\u7565\u89c1\u300c\u914d\u989d\u5b89\u5168\u300d\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8fd0\u884c\u72b6\u6001"}</h3>
        <div class="kv"><span class="k">${"\u534f\u8bae"}</span><span class="v" id="stProto">${"\u2014"}</span><span class="mbadge" id="stMode">${"\u2014"}</span></div>
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
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${t("dmxlc3M=")}" checked><span class="sl"></span></label><span>${t("VkxFU1M=")} ${"\u534f\u8bae\uff08\u9ed8\u8ba4\u5f00\u542f\uff09"}</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${t("dHJvamFu")}"><span class="sl"></span></label><span>${t("VHJvamFu")} ${"\u534f\u8bae\uff08\u652f\u6301"}${t("TWlob21v")}${"\u5185\u6838\uff09"}</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${t("eGh0dHA=")}"><span class="sl"></span></label><span>${t("WEhUVFA=")} ${"\u534f\u8bae\uff08\u652f\u6301"}${t("TWlob21v")}${"\u5185\u6838\uff0c\u987b\u7ed1\u5b9a\u57df\u540d\u5f00\u542f"}${t("Z1JQQw==")}${"\uff09"}</span></div>
          <div class="field" style="margin-top:12px"><label>${t("VHJvamFu")} ${"\u5bc6\u7801\uff08\u7559\u7a7a\u4f7f\u7528"} UUID${"\uff09"}</label><input type="text" id="tp-pass" placeholder="${t("VHJvamFu")} ${"\u5bc6\u7801"}" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS ${"\u4e0e\u4f20\u8f93"}</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>${"\u4ec5"} TLS ${"\u7aef\u53e3\uff08\u8df3\u8fc7"} 80/8080 ${"\u7b49\u660e\u6587\u7aef\u53e3\uff09"}</span></div>
          <div class="field" style="margin-top:12px"><label>${t("QUxQTg==")} ${"\u534f\u5546\uff08"}h2 / http/1.1${"\uff0c\u9017\u53f7\u5206\u9694\uff09"}</label><input type="text" id="${t("YWxwbg==")}" placeholder="${"\u7559\u7a7a\u81ea\u52a8\uff0c\u5982"} h2,http/1.1" autocomplete="off"></div>
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
        <p class="hint">${"\u5f00\u542f\u540e\u8ba2\u9605\u8282\u70b9\u9644\u5e26"} ech ${"\u53c2\u6570\u4e0e"} ${t("YWxwbg==")} ${"\u534f\u5546\uff0c\u5ba2\u6237\u7aef\u9700\u652f\u6301"} ECH ${"\u624d\u751f\u6548\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u843d\u5730\u4e0e\u51fa\u7ad9"}</h3>
        <div class="field"><label>${"\u53cd\u4ee3"} / ${"\u843d\u5730\uff08\u53ef\u586b\u591a\u4e2a\uff0c\u82f1\u6587\u9017\u53f7\u5206\u9694\uff1b\u652f\u6301\u57df\u540d\u4e0e"} IP${"\uff0c\u53ef\u5e26\u4e24\u4f4d\u56fd\u5bb6\u4ee3\u7801\uff1b\u7559\u7a7a\u5219\u76f4\u8fde\u5931\u8d25\u540e\u8d70\u5185\u7f6e\u5730\u533a\u51fa\u53e3\uff09"}</label><input type="text" id="s-${t("cHJveHlJUA==")}" placeholder="${"\u5982\uff1a"}Proxy-HK.a.com,HK.43.132.231.159:443,8.219.155.125:443#JP" autocomplete="off"></div>
        <p class="hint">${"\u591a\u6761\u65f6\u6309\u8282\u70b9\u843d\u5730\u56fd\u5bb6\u81ea\u52a8\u5339\u914d\u3002\u5e26\u56fd\u5bb6\u4ee3\u7801\u7684\u6761\u76ee\u53ea\u7528\u4e8e\u8be5\u56fd\u8282\u70b9\uff0c\u4e24\u79cd\u5199\u6cd5\u7b49\u4ef7\uff1a\u57df\u540d\u628a\u56fd\u5bb6\u4ee3\u7801\u653e\u5728\u540d\u5b57\u91cc\uff08\u5982"} Proxy-HK.${"\u2026"} ${"\u91cc\u7684"} HK${"\uff09\uff0c"}IP ${"\u5199\u6210\u524d\u7f00\u5f0f"} HK.1.2.3.4:443 ${"\u6216\u540e\u7f00\u5f0f"} 1.2.3.4:443#HK${"\uff08"}IPv6 ${"\u7528\u65b9\u62ec\u53f7\uff0c\u5982"} HK.[2001:db8::1]:443${"\uff09\u3002\u4e0d\u5e26\u56fd\u5bb6\u4ee3\u7801\u7684\u6761\u76ee\uff08\u542b\u7eaf"} IP${"\uff09\u4f5c\u4e3a\u901a\u7528\u5019\u9009\uff0c\u6309\u586b\u5199\u987a\u5e8f\u4f9d\u6b21\u5c1d\u8bd5\u3002\u67d0\u56fd\u65e0\u5bf9\u5e94\u6761\u76ee\u65f6\u9000\u56de\u5217\u8868\u9996\u6761\uff1b\u53ea\u586b\u4e00\u6761\u65f6\u884c\u4e3a\u4e0e\u65e7\u7248\u4e00\u81f4\u3002"}</p>
        <div class="field"><label>${"\u51fa\u7ad9\uff08\u53ef\u9009\uff09"}</label><input type="text" id="s-${t("b3V0Ym91bmQ=")}" placeholder="${t("c29ja3M1")}://user:pass@1.2.3.4:1080 ${"\u6216"} ${t("c3M6Ly9jaGFjaGEyMA==")}-ietf-poly1305:${"\u5bc6\u7801"}@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">${"\u652f\u6301"} ${t("c29ja3M1")}://${"\uff08\u53ef\u5e26"} user:pass@${"\uff09\u3001"}http(s)://${"\u3001"}${t("c3M6Ly8=")} ${"\u6216"} host:port${"\uff08\u9ed8\u8ba4\u6309"} ${t("c29ja3M1")}${"\uff0c\u7aef\u53e3"} 1080${"\uff09\u3002"}SS ${"\u52a0\u5bc6\u652f\u6301"} ${t("YWVzLTEyOC1nY20=")} / ${t("YWVzLTI1Ni1nY20=")} / ${t("Y2hhY2hhMjA=")}-ietf-poly1305${"\u3002"}</p>
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
              <option value="${t("YmVzdGNm")}">${"\u4f18\u9009"} IP ${"\u5217\u8868\uff08"}${t("YmVzdGNm")}${"\uff09"}</option>
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
        <div class="field" style="margin-top:8px"><label>${"\u515c\u5e95\u4f18\u9009\u6c60"} URL <span style="font-weight:400;color:var(--faint)">${"\uff08\u53ef\u9009\uff0c\u6362\u884c"}/${"\u5206\u53f7\u5206\u9694\uff0c\u4e0a\u9650"} 10 ${"\u4e2a\uff1b"}URL ${"\u67e5\u8be2\u4e32\u4e2d\u7684\u9017\u53f7\u539f\u6837\u4fdd\u7559\uff1b\u7559\u7a7a\u7528\u5185\u7f6e"} ${t("YmVzdGNm")} ${"\u5730\u533a\u6c60\uff09"}</span></label><input type="text" id="o-fbpool" placeholder="https://a.example/ips.txt;https://b.example/ips.txt" autocomplete="off"></div>
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
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#${"\u9999\u6e2f"}&#10;https://${t("YmVzdGNm")}.pages.dev/random-region/HK/100.txt"></textarea>
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
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);over${t("Zmxvdzo=")}hidden">
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
    <!-- ===== ${"\u89c6\u56fe\uff1a"}WARP ${"\u6a21\u5f0f"} ===== -->
    <section class="view" data-view="warp">
      <div class="view-head"><h2>WARP ${"\u914d\u7f6e"}</h2><p>${"\u4e0b\u53d1"} WARP${"\uff08"}${t("V2lyZUd1YXJk")}${"\uff09\u8282\u70b9\u7531\u5ba2\u6237\u7aef\u76f4\u8fde\uff1a\u672c\u670d\u52a1\u53ea\u505a\u914d\u7f6e\u89e3\u6790\u4e0e\u683c\u5f0f\u8f6c\u6362\uff0c\u4e0d\u627f\u8f7d\u6d41\u91cf\u3002"}${t("V2lyZUd1YXJk")} ${"\u8d70"} UDP 2408${"\uff0c\u90e8\u5206\u8fd0\u8425\u5546\u5c4f\u853d"} UDP ${"\u65f6\u8868\u73b0\u4e3a\u5168\u90e8\u8d85\u65f6"}</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>${"\u63a5\u5165\u8fdb\u5ea6"}</h3>
        <div class="hint">${"\u9762\u677f\u4e0e\u914d\u7f6e\u5b58\u50a8\u5df2\u5c31\u7eea\uff1b\u5207\u5230\u672c\u6a21\u5f0f\u540e\u8ba2\u9605\u5373\u4e0b\u53d1"} WARP ${"\u8282\u70b9\uff08\u5ba2\u6237\u7aef\u76f4\u8fde\uff09\u3002\u6ce8\u518c\u5728\u9996\u6b21\u62c9\u53d6\u8ba2\u9605\u65f6\u81ea\u52a8\u5b8c\u6210\uff0c\u4e4b\u540e\u4e00\u76f4\u590d\u7528\u3002"}</div>
      </div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>${"\u51ed\u636e\uff08\u81ea\u52a8\u751f\u6210\uff09"}</h3>
          <div class="field"><label class="spill"><input type="checkbox" id="w-on"> ${"\u542f\u7528"} WARP ${"\u8282\u70b9\u4e0b\u53d1"}</label></div>
          <div class="field"><label>${"\u6ce8\u518c\u72b6\u6001"}</label><div class="hint" id="w-stat" style="margin:0">${"\u2014"}</div></div>
          <div class="field"><label>${"\u8282\u70b9\u540d\u79f0"}</label><input type="text" id="w-name" placeholder="WARP"></div>
          <div class="field"><label>${"\u5bf9\u7aef\u5019\u9009\uff08\u53ef\u9009\uff0c\u4e00\u884c\u4e00\u4e2a\u300c"}IP:${"\u7aef\u53e3\u300d\uff0c\u6700\u591a"} 50 ${"\u4e2a\uff09"}</label>
            <textarea id="w-eps" rows="4" placeholder="${"\u7559\u7a7a\u5219\u4f7f\u7528\u5185\u7f6e"} 50 ${"\u4e2a\u5b98\u65b9"} anycast ${"\u63a5\u5165\u70b9"}"></textarea>
          </div>
          <div class="field"><label>${"\u524d\u7f6e\u8282\u70b9\uff08\u53ef\u9009\uff0c\u7c98\u8d34\u4e00\u4e2a\u8282\u70b9\u94fe\u63a5\uff09"}</label>
            <textarea id="w-front" rows="2" placeholder="${t("dmxlc3M=")}://${"\u2026"} / trojan://${"\u2026"} / ${t("c3M6")}//${"\u2026"} / ${t("c29ja3M1")}://${"\u2026\uff08"}WARP ${"\u8282\u70b9\u7ecf\u5b83\u62e8\u53f7\uff0c\u53ef\u7ed5\u8fc7\u8fd0\u8425\u5546\u5bf9"} UDP ${"\u7684\u5c01\u9501\uff09"}"></textarea>
          </div>
          <div class="hint">${"\u4ec5"} <code>clash</code> ${"\u683c\u5f0f\u751f\u6548\uff1b\u7559\u7a7a\u5219"} WARP ${"\u8282\u70b9\u76f4\u8fde\u3002"}<b>${"\u524d\u7f6e\u5fc5\u987b\u80fd\u627f\u8f7d"} UDP</b>${"\uff0c\u89e3\u6790\u5931\u8d25\u4f1a\u81ea\u52a8\u5ffd\u7565\u3002"}</div>
          <div class="inrow"><button class="btn sm" onclick="regenWarp()">${"\u91cd\u65b0\u751f\u6210\u51ed\u636e"}</button></div>
          <div class="hint">${"\u90e8\u7f72\u540e\u65e0\u9700\u4efb\u4f55\u586b\u5199\uff1a\u9996\u6b21\u62c9\u53d6\u8ba2\u9605\u65f6\u672c\u670d\u52a1\u4f1a\u81ea\u52a8\u5b8c\u6210\u6ce8\u518c\u5e76\u5199\u5165\u4f60\u7684\u5b58\u50a8\uff0c\u4e4b\u540e\u4e00\u76f4\u590d\u7528\u3002\u51ed\u636e\u53ea\u4fdd\u5b58\u5728\u4f60\u81ea\u5df1\u7684\u5b58\u50a8\u4e2d\uff0c\u4e0d\u5916\u53d1\u3002\u82e5\u6362\u5ba2\u6237\u7aef\u540e\u8fde\u4e0d\u4e0a\uff0c\u53ef\u70b9\u4e0a\u65b9\u6309\u94ae\u91cd\u7b7e\u4e00\u6b21\u3002"}</div>
        </div>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a\u5bb6\u5bbd\u6a21\u5f0f"} ===== -->
    <section class="view" data-view="${t("aG9tZQ==")}">
      <div class="view-head"><h2>${"\u5bb6\u5bbd\u6a21\u5f0f"}</h2><p>VPN Gate OpenVPN ${"\u5bb6\u5bbd\u51fa\u53e3\uff0c\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7\uff08\u4ec5"} ${t("TWlob21v")} ${"\u5185\u6838\uff09"}</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>${"\u5bb6\u5bbd\u51fa\u53e3"}</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN ${"\uff08\u4ec5"}${t("TWlob21v")}${"\u5185\u6838\uff09"}</span></div>
        <p class="hint">- ${"\u8be5\u5f00\u5173\u7531\u8fd0\u884c\u6a21\u5f0f\u81ea\u52a8\u63a7\u5236\uff1a\u9009\u300c\u5bb6\u5bbd\u6a21\u5f0f\u300d\u81ea\u52a8\u6253\u5f00\uff0c\u5207\u5230\u5176\u5b83\u6a21\u5f0f\u81ea\u52a8\u5173\u95ed\u3002"}<br>- ${"\u6bcf\u65e5\u62c9\u53d6\uff0c\u53d6\u6700\u5feb"} 100 ${"\u53f0\uff0c\u4ec5\u7559"} TCP ${"\u5bb6\u5bbd\u8282\u70b9\uff08\u300c\u5bb6\u5bbd"} + ${"\u5730\u533a\u300d\u3001\u540c\u533a\u7f16\u53f7\uff1b"}UDP ${"\u5254\u9664\uff09\u3002"}<br>- ${"\u7f13\u5b58"} 30 ${"\u5206\u949f\uff1b"}&lt;30 ${"\u53f0\u5f3a\u5236\u5237\u65b0\uff0c\u5931\u8d25\u7528\u65e7\u7f13\u5b58\u3002"}<br>- ${"\u5bb6\u5bbd\u987b\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7\uff1b\u96a7\u9053\u8282\u70b9"} Worker ${"\u81ea\u52a8\u751f\u6210\u3001\u81ea\u52a8\u6d4b\u6d3b\u3001\u4e0d\u53d7\u7b5b\u9009\u3002"}<br>- ${"\u5f00\u542f\u540e\u8ba2\u9605\u4ec5\u542b\u5bb6\u5bbd"} + ${"\u96a7\u9053\u8282\u70b9\uff1b\u9ed8\u8ba4\u8282\u70b9\u4e0d\u4e0b\u53d1\uff08\u81ea\u5b9a\u4e49\u8ba2\u9605\u9664\u5916\uff09\u3002"}</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>VPN Gate ${"\u624b\u5199\u53c2\u6570"}</h3>
        <div class="field"><label>${"\u6bcf\u884c\u4e00\u6761\uff1a\u4e3b\u673a"} ${"\u7aef\u53e3"} ${"\u534f\u8bae"} ${"\u5730\u533a\uff08\u7a7a\u683c\u6216\u5192\u53f7\u5206\u9694\uff0c\u7559\u7a7a\u5219\u81ea\u52a8\u62c9\u53d6\uff09"}</label>
          <textarea id="hw-cfg" rows="7" placeholder="116.12.3.63 1357 tcp JP&#10;219.100.37.10 1194 udp KR&#10;1.2.3.4:443:tcp:US"></textarea></div>
        <p class="hint" style="margin-top:8px">- ${"\u624b\u5199\u53c2\u6570"}<b>${"\u4f18\u5148\u7ea7\u9ad8\u4e8e\u81ea\u52a8\u62c9\u53d6"}</b>${"\uff1a\u586b\u4e86\u5c31\u4e0d\u518d\u8bbf\u95ee"} VPN Gate ${"\u5217\u8868\uff0c\u8ba2\u9605\u91cc\u51fa\u73b0\u7684\u5c31\u662f\u4f60\u624b\u5199\u7684\u8fd9\u51e0\u53f0\u3002"}<br>- ${"\u4e24\u79cd\u5199\u6cd5\uff1a\u2460"} ${"\u76f4\u63a5\u7c98\u8d34"} VPN Gate ${"\u7684"} base64 ${"\u914d\u7f6e\uff08\u53ef\u52a0\u5730\u533a\u7801\u524d\u7f00\uff0c\u5982"} JP: ${"\u5f00\u5934\uff09\uff1b\u2461"} ${"\u4e3b\u673a"} ${"\u7aef\u53e3"} ${"\u534f\u8bae"} ${"\u5730\u533a\uff0c\u540c\u65f6\u5728\u672c\u6846\u5185\u7528"} ca: / cert: / key: ${"\u7ed9\u51fa\u8bc1\u4e66\u3002"}<br>- ${"\u5185\u6838\u8981\u6c42"} openvpn ${"\u5fc5\u987b\u5e26\u5185\u8054\u8bc1\u4e66\uff0c"}<b>${"\u7f3a\u5c11\u8bc1\u4e66\u7684\u884c\u4f1a\u88ab\u5ffd\u7565"}</b>${"\uff08\u53ef\u5148\u70b9\u300c\u8bd5\u7528\u5e76\u9884\u89c8\u300d\u770b\u89e3\u6790\u7ed3\u679c\uff09\u3002"}<br>- ${"\u7aef\u53e3\u7701\u7565\u9ed8\u8ba4"} 1194${"\uff1b\u534f\u8bae\u7701\u7565\u9ed8\u8ba4"} tcp${"\uff08\u53ea\u8ba4"} tcp / udp${"\uff09\uff1b\u5730\u533a\u7701\u7565\u9ed8\u8ba4"} XX${"\uff0c\u8282\u70b9\u540d\u5f62\u5982\u300c\u5bb6\u5bbd"}JP${"\u300d\u3002"}<br>- ${"\u8ba4\u8bc1\u6cbf\u7528"} VPN Gate ${"\u516c\u5171\u8d26\u53f7"} vpn / vpn${"\uff1b\u4ec5"} ${t("TWlob21v")} ${"\u5185\u6838\u652f\u6301"} openvpn ${"\u51fa\u7ad9\u3002"}</p>
        <div class="inrow" style="margin-top:10px">
          <button class="btn sm" onclick="hwCustomApply()">${"\u8bd5\u7528\u5e76\u9884\u89c8"}</button>
          <span class="hint" id="hw-cfg-stat" style="margin:0"></span>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u4f7f\u7528\u8bf4\u660e"}</h3>
        <p class="hint" style="margin:0">${"\u672c\u6a21\u5f0f\u662f"} Worker ${"\u6a21\u5f0f\u91cc\u7684\u300c\u5bb6\u5bbd\u6a21\u5f0f\u300d\u72ec\u7acb\u800c\u6765\uff0c\u903b\u8f91\u4e0e\u539f\u5148\u5b8c\u5168\u4e00\u81f4\uff1a\u5f00\u542f\u540e\u8ba2\u9605\u4ec5\u4e0b\u53d1\u5bb6\u5bbd\u51fa\u53e3\u4e0e\u96a7\u9053\u524d\u7f6e\u8282\u70b9\u3002\u5207\u6362\u5230\u5176\u5b83\u6a21\u5f0f\u5373\u6062\u590d\u5bf9\u5e94\u5f62\u6001\uff0c\u4e92\u4e0d\u5f71\u54cd\u3002"}</p>
      </div>
    </section>

    <!-- ===== ${"\u89c6\u56fe\uff1a"}${t("TUFTUVVF")} ${"\u6a21\u5f0f"} ===== -->
    <section class="view" data-view="${t("bWFzcXVl")}">
      <div class="view-head"><h2>${t("TUFTUVVF")} ${"\u914d\u7f6e"}</h2><p>${"\u4e0b\u53d1"} ${t("TUFTUVVF")} ${"\u8282\u70b9\u7531\u5ba2\u6237\u7aef\u76f4\u8fde\uff1a\u9700"} ${t("TWlob21v")} ${"\u5185\u6838\u652f\u6301\uff08"}${t("Q2xhc2g=")} Verge Rev ${"\u5efa\u8bae\u5728\u300c\u8bbe\u7f6e"} ${"\u2192"} ${"\u5185\u6838\u300d\u5207\u5230"} Alpha${"\uff1b"}${t("Q2xhc2g=")}Mi / Fl${t("Q2xhc2g=")} / ${t("U2hhZG93cm9ja2V0")} ${"\u4ea6\u53ef\uff09\u3002\u4e0d\u652f\u6301\u7684\u5185\u6838\u4f1a\u6574\u4efd\u914d\u7f6e\u62d2\u8f7d"}</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>${"\u63a5\u5165\u8fdb\u5ea6"}</h3>
        <div class="hint">${t("TUFTUVVF")} ${"\u8d70"}<b>${"\u8bc1\u4e66\u8ba4\u8bc1"}</b>${"\uff1a\u672c\u670d\u52a1\u4f1a\u5728\u9996\u6b21\u62c9\u53d6\u8ba2\u9605\u65f6"}<b>${"\u81ea\u52a8\u5b8c\u6210\u6ce8\u518c"}</b>${"\u5e76\u628a\u51ed\u636e\u5199\u5165\u4f60\u7684\u5b58\u50a8\uff0c\u4e4b\u540e\u4e00\u76f4\u590d\u7528\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u4e0b\u9762\u624b\u5de5\u586b\u5165\u81ea\u5df1\u751f\u6210\u7684\u51ed\u636e\uff08\u4f18\u5148\u7ea7\u66f4\u9ad8\uff09\uff1b\u4e24\u8005\u90fd\u6ca1\u6709\u65f6\u624d\u56de\u843d\u5230"} WARP ${"\u8282\u70b9\uff0c\u4fdd\u8bc1\u8ba2\u9605\u4e0d\u4f1a\u7a7a\u3002"}</div>
      </div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>${"\u51ed\u636e\uff08\u81ea\u52a8\u6ce8\u518c\uff0c\u53ef\u8986\u76d6\uff09"}</h3>
          <div class="field"><label class="spill"><input type="checkbox" id="x-on"> ${"\u542f\u7528"} ${t("TUFTUVVF")} ${"\u8282\u70b9\u4e0b\u53d1"}</label></div>
          <div class="field"><label>${"\u7c98\u8d34\u672c\u5730\u751f\u6210\u7684\u51ed\u636e\uff08"}EC ${"\u79c1\u94a5"} / ${"\u516c\u94a5\uff09"}</label>
            <textarea id="x-conf" rows="6" placeholder="${"\u7559\u7a7a\u5219\u7531\u672c\u670d\u52a1\u81ea\u52a8\u6ce8\u518c\uff1b\u6ce8\u518c\u5931\u8d25\u65f6\u56de\u843d\u5230"} WARP ${"\u8282\u70b9"}"></textarea>
          </div>
          <div class="field"><label>${"\u8282\u70b9\u540d\u79f0"}</label><input type="text" id="x-name" placeholder="${t("TUFTUVVF")}"></div>
          <div class="hint">${"\u4e0d\u586b\u4e5f\u80fd\u7528\uff1a\u7559\u7a7a\u65f6\u672c\u670d\u52a1\u81ea\u52a8\u6ce8\u518c\u3002\u51ed\u636e\u53ea\u4fdd\u5b58\u5728\u4f60\u81ea\u5df1\u7684\u5b58\u50a8\u4e2d\uff0c\u4e0d\u5916\u53d1\u3002"}</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>${"\u5bf9\u7aef\u5019\u9009"}</h3>
          <div class="field"><label>${"\u4e00\u884c\u4e00\u4e2a\u300c"}IP:${"\u7aef\u53e3\u300d\uff0c\u6309\u586b\u5199\u987a\u5e8f\u5c1d\u8bd5\uff08\u6700\u591a"} 50 ${"\u4e2a\uff09"}</label>
            <textarea id="x-eps" rows="6" placeholder="${"\u7559\u7a7a\u5219\u4f7f\u7528\u5185\u7f6e\u5b98\u65b9\u7aef\u70b9\u7ec4\u5408"}"></textarea>
          </div>
          <div class="hint">${t("TUFTUVVF")} ${"\u7684"} IP ${"\u4e0e\u7aef\u53e3\u548c"} WARP ${"\u4e0d\u540c\uff0c\u4e32\u7528\u4f1a\u8fde\u4e0d\u4e0a\uff1b\u7559\u7a7a\u5373\u7528\u5185\u7f6e\u7684\u5b98\u65b9\u7aef\u70b9\u7ec4\u5408\u3002"}</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>${"\u5ba2\u6237\u7aef\u517c\u5bb9"}</h3>
          <div class="hint">${"\u672c\u6a21\u5f0f\u4ea7\u51fa\u7684\u8282\u70b9"}<b>${"\u53ea\u88ab\u90e8\u5206\u5ba2\u6237\u7aef\u652f\u6301"}</b>${"\uff1b\u5176\u4f59\u5ba2\u6237\u7aef\u5bfc\u5165\u540e\u4f1a\u770b\u4e0d\u5230\u8282\u70b9\uff0c\u6216\u76f4\u63a5\u5ffd\u7565\u8be5\u8282\u70b9\u3002"}</div>
          <div class="hint">${"\u82e5\u4f60\u7684\u5ba2\u6237\u7aef\u4e0d\u5728\u652f\u6301\u8303\u56f4\u5185\uff0c\u8bf7\u6539\u7528"} Worker ${"\u6a21\u5f0f\u6216"} WARP ${"\u6a21\u5f0f\u3002"}</div>
        </div>
      </div>
    </section>

    <section class="view" data-view="account">
      <div class="view-head"><h2>${"\u9762\u677f\u8bbe\u7f6e"}</h2><p>${"\u8fd0\u884c\u6a21\u5f0f\u3001\u90e8\u7f72\u57fa\u7840\u4fe1\u606f\uff1a"}UUID${"\u3001\u8ba2\u9605\u8def\u5f84\u4e0e\u7ba1\u7406\u5bc6\u7801"}</p></div>
      <div class="card">
        <h3><span class="tick"></span>${"\u8fd0\u884c\u6a21\u5f0f"}</h3>
        <div class="field"><label>${"\u5f53\u524d\u6a21\u5f0f\uff08\u56db\u79cd\u6a21\u5f0f\u4e92\u4e0d\u5f71\u54cd\uff0c\u53ef\u968f\u65f6\u5207\u6362\uff09"}</label>
          <div class="inrow">
            <select id="a-mode">
              <option value="worker">Worker ${"\u6a21\u5f0f"} ${"\u2014"} ${"\u4f7f\u7528\u5185\u7f6e\u8282\u70b9\uff0c\u7531\u672c\u670d\u52a1\u627f\u8f7d\u8f6c\u53d1"}</option>
              <option value="warp">WARP ${"\u6a21\u5f0f"} ${"\u2014"} ${"\u4e0b\u53d1"} WARP ${"\u8282\u70b9\uff0c\u5ba2\u6237\u7aef\u76f4\u8fde"}</option>
              <option value="${t("bWFzcXVl")}">${t("TUFTUVVF")} ${"\u6a21\u5f0f"} ${"\u2014"} ${"\u4e0b\u53d1"} ${t("TUFTUVVF")} ${"\u8282\u70b9\uff0c\u5ba2\u6237\u7aef\u76f4\u8fde"}</option>
              <option value="home">${"\u5bb6\u5bbd\u6a21\u5f0f"} ${"\u2014"} ${"\u4e0b\u53d1"} VPN Gate ${"\u5bb6\u5bbd\u51fa\u53e3\uff0c\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7"}</option>
            </select>
            <button class="btn sm" onclick="switchModeFromPanel()">${"\u5207\u6362"}</button>
          </div>
        </div>
        <div class="hint" id="modeHint">${"\u5207\u6362\u540e\u5de6\u4fa7\u5bfc\u822a\u4e0e\u5404\u6a21\u5f0f\u7684\u914d\u7f6e\u533a\u5757\u4f1a\u968f\u4e4b\u6539\u53d8\u3002"}</div>
      </div>
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
      <div class="card"><h3><span class="tick"></span>${"\u5916\u89c2\u98ce\u683c"}<button class="foldbtn" id="mdFoldBtn" onclick="toggleMdFold()" data-open="0" title="${"\u5c55\u5f00\u8272\u5f69\u8bbe\u7f6e"}"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button></h3><p class="hint" style="margin:0 0 12px">${"\u4e24\u79cd\u8bbe\u8ba1\u8bed\u8a00\u5e76\u5b58\uff0c\u5207\u6362\u53ea\u5f71\u54cd\u672c\u673a\u663e\u793a\uff0c\u4e0d\u6539\u52a8"} Worker ${"\u914d\u7f6e\u3002"}</p><div class="field"><label>${"\u8bbe\u8ba1\u8bed\u8a00"}</label><div class="inrow seg" id="styleSeg"><button class="btn" data-s="glass" onclick="setStyle('glass')">${"\u6db2\u6001\u73bb\u7483"}</button><button class="btn" data-s="material" onclick="setStyle('material')">Material</button></div></div><div id="mdBox" class="fold"><div class="field"><label>${"\u79cd\u5b50\u8272\uff08\u5355\u4e00\u6765\u6e90\u8272\uff0c\u5176\u4f59"} 64 ${"\u8272\u7531\u5b83\u6d3e\u751f\uff09"}</label><div class="inrow"><div><input type="text" id="mdSeed" placeholder="#6750A4" autocomplete="off" spellcheck="false"></div><button class="btn sm" onclick="resetSeed()">${"\u9ed8\u8ba4"}</button></div><div class="md-seed" id="mdSeedRow"></div></div><div class="field"><label>${"\u4e3b\u9898\u65b9\u6848"}</label><div class="inrow seg" id="mdVarSeg"></div><p class="hint" id="mdVarDesc" style="margin:8px 0 0"></p></div><div class="md-pal" id="mdPal"></div><div class="md-out" id="mdPalOut"></div><p class="hint" style="margin:10px 0 0">${"\u5355\u51fb\u4efb\u610f\u8272\u5757\uff0c\u5373\u628a\u8be5\u8272\u8bbe\u4e3a\u65b0\u7684\u79cd\u5b50\u8272\uff1b\u767d\u5708\u6807\u51fa\u5f53\u524d\u79cd\u5b50\u8272\u5728\u8272\u677f\u4e2d\u7684\u843d\u70b9\u3002\u91c7\u6837"} AOSP${"\u300c"}Material ${"\u8bbe\u8ba1\u300d\u89c4\u8303\uff1a\u6765\u6e90\u8272\u7ecf"} CAM16/HCT ${"\u5c55\u5f00\u4e3a"} 5 ${"\u4e2a\u8272\u8c03\u8c03\u8272\u76d8"} ${"\u00d7"} 13 ${"\u4e2a\u8272\u8c03\u5171"} 65 ${"\u8272\uff0c\u518d\u6309\u6587\u6863\u7684\u989c\u8272\u89d2\u8272\u8868\u6620\u5c04\u3002\u6807\u53f7"} N ${"\u5bf9\u5e94"} HCT ${"\u8272\u8c03"} (1000${"\u2212"}N)/10${"\u3002"}</p></div></div>
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
        <p style="font-size:13px;color:var(--dim)">${t("WW91VHViZQ==")} @${"\u6570\u5b57\u6d3e\uff1a"}<a href="https://www.${t("eW91dHViZQ==")}.com/@${t("UEFJX0NO")}" target="_blank" rel="noopener">${t("eW91dHViZQ==")}.com/@${t("UEFJX0NO")}</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram ${"\u4ea4\u6d41\u7fa4\uff1a"}<a href="https://${t("dC5tZS8=")}${t("U1pfUEFJ")}" target="_blank" rel="noopener">${t("dC5tZS8=")}${t("U1pfUEFJ")}</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>${"\u7279\u522b\u9e23\u8c22"}</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">${"\u611f\u8c22\u4ee5\u4e0b\u5f00\u6e90\u9879\u76ee\u7684\u542f\u53d1\u4e0e\u652f\u6301\uff08\u754c\u9762\u4e0e\u4ee3\u7801\u5747\u4e3a\u72ec\u7acb\u5b9e\u73b0\uff09"}</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>${"\u5f00\u6e90\u9879\u76ee"}</th><th>${"\u5730\u5740"}</th></tr></thead>
          <tbody>
            <tr><td>${t("SW9uUmg=")}/${t("Q2xvdWRmbGFyZS1CZXN0SVA=")}</td><td><a href="https://github.com/${t("SW9uUmg=")}/${t("Q2xvdWRmbGFyZS1CZXN0SVA=")}" target="_blank" rel="noopener">github.com/${t("SW9uUmg=")}/${t("Q2xvdWRmbGFyZS1CZXN0SVA=")}</a></td></tr>
            <tr><td>${t("enZvcw==")}/${t("Q0YtV29ya2Vycy1Nb25pdG9y")}</td><td><a href="https://github.com/${t("enZvcw==")}/${t("Q0YtV29ya2Vycy1Nb25pdG9y")}" target="_blank" rel="noopener">github.com/${t("enZvcw==")}/${t("Q0YtV29ya2Vycy1Nb25pdG9y")}</a></td></tr>
            <tr><td>${t("TWV0YUN1YmVY")}/${t("bWV0YS1ydWxlcy1kYXQ=")}</td><td><a href="https://github.com/${t("TWV0YUN1YmVY")}/${t("bWV0YS1ydWxlcy1kYXQ=")}" target="_blank" rel="noopener">github.com/${t("TWV0YUN1YmVY")}/${t("bWV0YS1ydWxlcy1kYXQ=")}</a></td></tr>
            <tr><td>${t("NjY2T1M=")}/rules</td><td><a href="https://github.com/${t("NjY2T1M=")}/rules" target="_blank" rel="noopener">github.com/${t("NjY2T1M=")}/rules</a></td></tr>
            <tr><td>${t("RHVzdGluV2lu")}/${t("cnVsZXNldF9nZW9kYXRh")}</td><td><a href="https://github.com/${t("RHVzdGluV2lu")}/${t("cnVsZXNldF9nZW9kYXRh")}" target="_blank" rel="noopener">github.com/${t("RHVzdGluV2lu")}/${t("cnVsZXNldF9nZW9kYXRh")}</a></td></tr>
            <tr><td>${t("YmxhY2ttYXRyaXg3")}/${t("aW9zX3J1bGVfc2NyaXB0")}</td><td><a href="https://github.com/${t("YmxhY2ttYXRyaXg3")}/${t("aW9zX3J1bGVfc2NyaXB0")}" target="_blank" rel="noopener">github.com/${t("YmxhY2ttYXRyaXg3")}/${t("aW9zX3J1bGVfc2NyaXB0")}</a></td></tr>
            <tr><td>${t("VEctVHdpbGlnaHQ=")}/${t("QVdBdmVudWU=")}-Ads-Rule</td><td><a href="https://github.com/${t("VEctVHdpbGlnaHQ=")}/${t("QVdBdmVudWU=")}-Ads-Rule" target="_blank" rel="noopener">github.com/${t("VEctVHdpbGlnaHQ=")}/${t("QVdBdmVudWU=")}-Ads-Rule</a></td></tr>
            <tr><td>${t("S29vbHNvbg==")}/${t("UXVyZQ==")}</td><td><a href="https://github.com/${t("S29vbHNvbg==")}/${t("UXVyZQ==")}" target="_blank" rel="noopener">github.com/${t("S29vbHNvbg==")}/${t("UXVyZQ==")}</a></td></tr>
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
            <tr><td>${"\u4f18\u9009"} IP ${"\u5217\u8868"}</td><td class="mono">cf.${t("MDkwMjI3")}.xyz/ip.164746.xyz</td></tr>
            <tr><td>${t("YmVzdGNm")} ${"\u5730\u533a\u4f18\u9009\u6c60"}</td><td class="mono">${t("YmVzdGNm")}.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH ${"\u89e3\u6790"}</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare ${"\u7528\u91cf\u76d1\u63a7\uff08"}GraphQL${"\uff09"}</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>${"\u7248\u672c\u66f4\u65b0\u68c0\u6d4b"}</td><td class="mono">raw.githubusercontent.com/${t("UEFJQ05J")}/${t("Q0ZOZXh0")}/...</td></tr>
            <tr><td>${"\u8fdc\u7a0b\u89c4\u5219\u96c6\uff08"}${t("c2luZy1ib3g=")} / ${t("Q2xhc2g=")}${"\uff09"}</td><td class="mono">raw.githubusercontent.com/${t("TWV0YUN1YmVY")}/${t("bWV0YS1ydWxlcy1kYXQ=")}/...</td></tr>
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
<div class="mmode" id="mMode">
  <div class="mmodebox">
    <h3>${"\u9009\u62e9\u8fd0\u884c\u6a21\u5f0f"}</h3>
    <div class="msub">${"\u56db\u79cd\u6a21\u5f0f\u4e92\u4e0d\u5f71\u54cd\uff0c\u4e4b\u540e\u53ef\u968f\u65f6\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u91cc\u5207\u6362\u3002\u6a21\u5f0f\u51b3\u5b9a\u9762\u677f\u5f62\u6001\u4e0e\u8ba2\u9605\u4e0b\u53d1\u5185\u5bb9\uff0c\u8bf7\u6309\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u3002"}</div>
    <div class="mmodegrid">
      <button class="mmodecard" onclick="pickMode('worker')">
        <b>Worker ${"\u6a21\u5f0f"}</b>
        <span>${"\u4f7f\u7528\u5185\u7f6e\u8282\u70b9\uff0c\u7531\u672c\u670d\u52a1\u627f\u8f7d\u8f6c\u53d1\u3002\u5f00\u7bb1\u5373\u7528\uff0c\u65e0\u9700\u989d\u5916\u51c6\u5907\u4efb\u4f55\u4e1c\u897f\u3002"}</span>
        <em>${"\u9002\u5408\uff1a\u5148\u8dd1\u901a\u3001\u770b\u91cd\u5373\u5f00\u5373\u7528"}</em>
      </button>
      <button class="mmodecard" onclick="pickMode('warp')">
        <b>WARP ${"\u6a21\u5f0f"}</b>
        <span>${"\u4e0b\u53d1"} WARP ${"\u8282\u70b9\uff0c\u7531\u5ba2\u6237\u7aef\u76f4\u8fde\uff0c\u6d41\u91cf\u4e0d\u7ecf\u8fc7\u672c\u670d\u52a1\u3002\u51ed\u636e\u7531\u672c\u670d\u52a1\u81ea\u52a8\u6ce8\u518c\u5e76\u4fdd\u7ba1\uff0c\u65e0\u9700\u81ea\u5907\u914d\u7f6e\u3002"}</span>
        <em>${"\u9002\u5408\uff1a\u60f3\u7ed9\u672c\u670d\u52a1\u51cf\u8d1f\u3001\u5c11\u66b4\u9732"}</em>
      </button>
      <button class="mmodecard" onclick="pickMode('${t("bWFzcXVl")}')">
        <b>${t("TUFTUVVF")} ${"\u6a21\u5f0f"}</b>
        <span>${"\u4e0b\u53d1"} ${t("TUFTUVVF")} ${"\u8282\u70b9\uff0c\u540c\u6837\u7531\u5ba2\u6237\u7aef\u76f4\u8fde\u3002\u4ec5\u90e8\u5206\u5ba2\u6237\u7aef\u652f\u6301\uff0c\u51ed\u636e\u540c\u6837\u81ea\u52a8\u751f\u6210\u4e0e\u4fdd\u7ba1\uff0c\u65e0\u9700\u81ea\u5907\u914d\u7f6e\u3002"}</span>
        <em>${"\u9002\u5408\uff1a\u660e\u786e\u77e5\u9053\u81ea\u5df1\u7684\u5ba2\u6237\u7aef\u652f\u6301"}</em>
      </button>
      <button class="mmodecard" onclick="pickMode('home')">
        <b>${"\u5bb6\u5bbd\u6a21\u5f0f"}</b>
        <span>${"\u4e0b\u53d1"} VPN Gate OpenVPN ${"\u5bb6\u5bbd\u51fa\u53e3\uff0c\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7\uff0c\u5ba2\u6237\u7aef\u76f4\u8fde\u3002"}</span>
        <em>${"\u9002\u5408\uff1a\u9700\u8981\u771f\u5b9e\u5bb6\u5bbd\u51fa\u53e3\uff08\u4ec5"} ${t("TWlob21v")} ${"\u5185\u6838\uff09"}</em>
      </button>
    </div>
    <div class="mmodefoot"><a href="javascript:;" onclick="pickMode('worker')">${"\u5148\u7528"} Worker ${"\u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09"}</a></div>
  </div>
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
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(${t("ZmFsbGJhY2s=")}Copy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(${t("ZmFsbGJhY2s=")}Copy(t)); });
      setTimeout(function(){ fin(${t("ZmFsbGJhY2s=")}Copy(t)); }, 600); // ${"\u526a\u8d34\u677f"} API ${"\u60ac\u7a7a\uff08\u65e0\u6743\u9650\u7b49\uff09\u65f6\u56de\u9000"}
    } else { fin(true); }
  } else {
    fin(${t("ZmFsbGJhY2s=")}Copy(t));
  }
}
function ${t("ZmFsbGJhY2s=")}Copy(t){
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
  { id:'warp', name:'WARP ${"\u914d\u7f6e"}', icon:'<path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"/>' },
  { id:'${t("bWFzcXVl")}', name:'${t("TUFTUVVF")} ${"\u914d\u7f6e"}', icon:'<path d="M4 7l8-4 8 4v10l-8 4-8-4zM12 3v18"/>' },
  { id:'${t("aG9tZQ==")}', name:'${"\u5bb6\u5bbd\u914d\u7f6e"}', icon:'<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"/>' },
  { id:'nodes', name:'${"\u8282\u70b9\u914d\u7f6e"}', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'${"\u4f18\u9009\u914d\u7f6e"}', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'${"\u914d\u989d\u5b89\u5168"}', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'${"\u9762\u677f\u8bbe\u7f6e"}', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'${"\u5173\u4e8e\u9879\u76ee"}', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'${"\u4eea\u8868\u76d8"}', warp:'WARP ${"\u914d\u7f6e"}', ${t("bWFzcXVl")}:'${t("TUFTUVVF")} ${"\u914d\u7f6e"}', ${t("aG9tZQ==")}:'${"\u5bb6\u5bbd\u914d\u7f6e"}', nodes:'${"\u8282\u70b9\u914d\u7f6e"}', optimizer:'${"\u4f18\u9009\u914d\u7f6e"}', quota:'${"\u914d\u989d\u5b89\u5168"}', account:'${"\u9762\u677f\u8bbe\u7f6e"}', about:'${"\u5173\u4e8e\u9879\u76ee"}' };

/* ===== ${"\u8fd0\u884c\u6a21\u5f0f\uff08\u56db\u79cd\u6a21\u5f0f\u4e92\u4e0d\u5f71\u54cd\uff0c\u53ef\u968f\u65f6\u5207\u6362\uff09"} ===== */
var MODE_NAV = {
  worker: ['dashboard', 'nodes', 'optimizer', 'quota', 'account', 'about'],
  warp: ['dashboard', 'warp', 'account', 'about'],
  ${t("bWFzcXVl")}: ['dashboard', '${t("bWFzcXVl")}', 'account', 'about'],
  home: ['dashboard', '${t("aG9tZQ==")}', 'account', 'about']
};
var MODE_SHORT = { worker: 'Worker', warp: 'WARP', ${t("bWFzcXVl")}: '${t("TUFTUVVF")}', home: '${"\u5bb6\u5bbd"}' };
var MODE_LABEL = { worker: 'Worker ${"\u6a21\u5f0f"}', warp: 'WARP ${"\u6a21\u5f0f"}', ${t("bWFzcXVl")}: '${t("TUFTUVVF")} ${"\u6a21\u5f0f"}', home: '${"\u5bb6\u5bbd\u6a21\u5f0f"}' };
var MODE_DESC = {
  worker: '${"\u4f7f\u7528\u5185\u7f6e\u8282\u70b9\uff0c\u7531\u672c\u670d\u52a1\u627f\u8f7d\u8f6c\u53d1\uff0c\u5f00\u7bb1\u5373\u7528\u3002"}',
  warp: '${"\u4e0b\u53d1"} WARP ${"\u8282\u70b9\uff0c\u5ba2\u6237\u7aef\u76f4\u8fde\uff0c\u6d41\u91cf\u4e0d\u7ecf\u8fc7\u672c\u670d\u52a1\u3002"}',
  ${t("bWFzcXVl")}: '${"\u4e0b\u53d1"} ${t("TUFTUVVF")} ${"\u8282\u70b9\uff0c\u5ba2\u6237\u7aef\u76f4\u8fde\uff1b\u4ec5\u90e8\u5206\u5ba2\u6237\u7aef\u652f\u6301\u3002"}',
  home: 'VPN Gate OpenVPN ${"\u5bb6\u5bbd\u51fa\u53e3\uff0c\u7ecf\u96a7\u9053\u524d\u7f6e\u62e8\u53f7\uff08\u4ec5"} ${t("TWlob21v")} ${"\u5185\u6838\uff09\u3002"}'
};
function curMode(){ var m = CFG && CFG.mode; return MODE_NAV[m] ? m : 'worker'; }
function applyMode(){
  var m = curMode(), nav = MODE_NAV[m];
  buildNav();
  var active = document.querySelector('.nav-item.on');
  if (!active || nav.indexOf(active.getAttribute('data-v')) < 0) switchView(nav[0]);
  var h = $('modeHint');
  if (h) h.innerHTML = '${"\u5f53\u524d\uff1a"}<b>' + MODE_LABEL[m] + '</b> ${"\u2014"} ' + MODE_DESC[m];
  var sel = $('a-mode');
  if (sel) sel.value = m;
  // ${"\u5730\u533a\u4e0e\u7ebf\u8def\u7b5b\u9009\u53ea\u5bf9\u5185\u7f6e"} CF ${"\u8282\u70b9\u6c60\u6709\u610f\u4e49\uff1a"}WARP / ${t("TUFTUVVF")} ${"\u7684\u8282\u70b9\u7531\u5ba2\u6237\u7aef\u76f4\u8fde\uff0c\u4e0d\u53c2\u4e0e\u5730\u533a"}/${"\u6765\u6e90\u7b5b\u9009"}
  var cf = $('cardFilter');
  if (cf) cf.style.display = (m === 'worker') ? '' : 'none';
  var sm = $('stMode');
  if (sm) sm.textContent = MODE_SHORT[m] || 'Worker';
}
function exitMode(){ showMode(); }
function showMode(){ $('mMode').classList.add('show'); }
function closeMode(){ $('mMode').classList.remove('show'); }
/* ===== WARP ${"\u51ed\u636e\u72b6\u6001\u4e0e\u91cd\u7b7e\uff08\u81ea\u52a8\u751f\u6210\uff0c\u65e0\u9700\u624b\u586b\uff09"} ===== */
function setWStat(){
  var el = $('w-stat');
  if (!el) return;
  var c = null;
  try { c = JSON.parse(String(CFG.warpConf || '')); } catch (e) { c = null; }
  if (!c || !c.p || !c.a4) { el.textContent = '${"\u5c1a\u672a\u751f\u6210"} ${"\u00b7"} ${"\u9996\u6b21\u62c9\u53d6\u8ba2\u9605\u65f6\u4f1a\u81ea\u52a8\u6ce8\u518c\uff08\u65e0\u9700\u4efb\u4f55\u586b\u5199\uff09"}'; el.style.color = 'var(--warn)'; return; }
  var d = '';
  if (c.at) { try { d = ' ${"\u00b7"} ' + new Date(c.at).toLocaleString('zh-CN'); } catch (e) { d = ''; } }
  el.textContent = '${"\u5df2\u5c31\u7eea"} ${"\u00b7"} ${"\u5185\u7f51\u5730\u5740"} ' + String(c.a4).split('/')[0] + ' ${"\u00b7"} ${"\u5bf9\u7aef"} ' + c.h + ':' + c.pt + d;
  el.style.color = 'var(--ok)';
}
function regenWarp(){
  if (!window.confirm('${"\u91cd\u65b0\u751f\u6210\u4f1a\u4f5c\u5e9f\u5f53\u524d\u51ed\u636e\u5e76\u91cd\u65b0\u6ce8\u518c\uff0c\u5ba2\u6237\u7aef\u9700\u91cd\u65b0\u62c9\u53d6\u8ba2\u9605\u3002\u7ee7\u7eed\uff1f"}')) return;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ warpConf: '' }) })
    .then(function(r){
      if (!r || !r.ok) { toast((r && r.msg) || '${"\u91cd\u7b7e\u5931\u8d25"}', 'err'); return; }
      CFG = r.data; setWStat(); toast('${"\u5df2\u6e05\u7a7a\u51ed\u636e"} ${"\u00b7"} ${"\u4e0b\u6b21\u62c9\u53d6\u8ba2\u9605\u65f6\u81ea\u52a8\u91cd\u65b0\u6ce8\u518c"}', 'ok');
    })
    .catch(function(){ toast('${"\u91cd\u7b7e\u5931\u8d25"}', 'err'); });
}
function pickMode(m){
  if (!MODE_NAV[m]) return;
  var same = (m === curMode());
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: m }) })
    .then(function(r){
      if (!r || !r.ok) { toast((r && r.msg) || '${"\u4fdd\u5b58\u5931\u8d25"}', 'err'); return; }
      CFG = r.data;
      closeMode();
      fillForm();
      renderAll();
      applyMode();
      switchView(m === 'worker' ? 'dashboard' : m);
      toast(same ? '${"\u5df2\u5e94\u7528\u5f53\u524d\u6a21\u5f0f"}' : ('${"\u5df2\u5207\u6362\u5230"} ' + MODE_LABEL[m]), 'ok');
    })
    .catch(function(){ toast('${"\u4fdd\u5b58\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); });
}
function switchModeFromPanel(){
  var m = $('a-mode').value;
  if (!MODE_NAV[m]) return;
  if (m === curMode()) { toast('${"\u5df2\u662f\u5f53\u524d\u6a21\u5f0f"}'); return; }
  if (!confirm('${"\u5207\u6362\u5230\u300c"}' + MODE_LABEL[m] + '${"\u300d\uff1f"}\n\n' + MODE_DESC[m] + '\n\n${"\u5404\u6a21\u5f0f\u7684\u9762\u677f\u5f62\u6001\u4e0e\u8ba2\u9605\u5185\u5bb9\u4f1a\u968f\u4e4b\u6539\u53d8\uff0c\u53ef\u968f\u65f6\u5207\u56de\u3002"}')) {
    $('a-mode').value = curMode();
    return;
  }
  pickMode(m);
}
function buildNav(){
  var nav = MODE_NAV[curMode()];
  var html = '';
  NAV.forEach(function(n){
    if (nav.indexOf(n.id) < 0) return;
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
  if (id === 'account' && typeof mdPaint === 'function') mdPaint();
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== Material ${"\u52a8\u6001\u53d6\u8272\uff08\u79fb\u690d\u81ea\u53c2\u8003\u9762\u677f\uff09"} ===== */
/* ---------- sRGB ${"\u2194"} XYZ ${"\u2194"} CAM16 ${"\u2194"} HCT ---------- */
var MD_WP = [95.047, 100.0, 108.883];
var MD_XYZ2SRGB = [
  [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
  [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
  [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]
];
var MD_PI = Math.PI;
function mdClamp(a, b, x) { return x < a ? a : (x > b ? b : x); }
function mdSign(x) { return x < 0 ? -1 : (x > 0 ? 1 : 0); }
function mdDeg(d) { d = d % 360; return d < 0 ? d + 360 : d; }
var MD_LE = 216 / 24389, MD_LK = 24389 / 27;
function mdLabF(t) { return t > MD_LE ? Math.cbrt(t) : (MD_LK * t + 16) / 116; }
function mdLabInv(ft) { var f3 = ft * ft * ft; return f3 > MD_LE ? f3 : (116 * ft - 16) / MD_LK; }
function mdYFromLstar(l) { return 100 * mdLabInv((l + 16) / 116); }
function mdLstarFromY(y) { return 116 * mdLabF(y / 100) - 16; }
function mdLinear(c) { var n = c / 255; return n <= 0.040449936 ? n / 12.92 * 100 : Math.pow((n + 0.055) / 1.055, 2.4) * 100; }
function mdDelinear(c) { var n = c / 100; var d = n <= 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 1 / 2.4) - 0.055; return mdClamp(0, 255, Math.round(d * 255)); }

/* ${"\u89c2\u770b\u6761\u4ef6\uff1a"}D65 ${"\u767d\u70b9\u3001\u9002\u5e94\u4eae\u5ea6"} 11.73${"\u3001\u80cc\u666f"} L*50${"\u3001\u5e73\u5747\u73af\u7ed5\uff0c\u53ea\u7b97\u4e00\u6b21"} */
var MD_VC = (function () {
  var la = (200 / MD_PI) * mdYFromLstar(50) / 100;
  var rW = MD_WP[0] * 0.401288 + MD_WP[1] * 0.650173 + MD_WP[2] * -0.051461;
  var gW = MD_WP[0] * -0.250268 + MD_WP[1] * 1.204414 + MD_WP[2] * 0.045854;
  var bW = MD_WP[0] * -0.002079 + MD_WP[1] * 0.048952 + MD_WP[2] * 0.953127;
  var f = 1.0, cc = 0.69;
  var d = mdClamp(0, 1, f * (1 - (1 / 3.6) * Math.exp((-la - 42) / 92)));
  var rgbD = [d * (100 / rW) + 1 - d, d * (100 / gW) + 1 - d, d * (100 / bW) + 1 - d];
  var k = 1 / (5 * la + 1), k4 = k * k * k * k, k4F = 1 - k4;
  var fl = k4 * la + 0.1 * k4F * k4F * Math.cbrt(5 * la);
  var n = mdYFromLstar(50) / MD_WP[1];
  var z = 1.48 + Math.sqrt(n);
  var nbb = 0.725 / Math.pow(n, 0.2);
  var af = [Math.pow(fl * rgbD[0] * rW / 100, 0.42), Math.pow(fl * rgbD[1] * gW / 100, 0.42), Math.pow(fl * rgbD[2] * bW / 100, 0.42)];
  var aa = [400 * af[0] / (af[0] + 27.13), 400 * af[1] / (af[1] + 27.13), 400 * af[2] / (af[2] + 27.13)];
  return { n: n, aw: (2 * aa[0] + aa[1] + 0.05 * aa[2]) * nbb, nbb: nbb, ncb: nbb, c: cc, nc: f, rgbD: rgbD, fl: fl, fLRoot: Math.pow(fl, 0.25), z: z };
})();

/* ${"\u6b63\u5411\uff1a"}8 ${"\u4f4d"} sRGB ${"\u2192"} { h ${"\u8272\u76f8"}, c ${"\u8272\u5ea6"}, t ${"\u8272\u8c03"} } */
function mdHctFromRgb(r, g, b) {
  var rl = mdLinear(r), gl = mdLinear(g), bl = mdLinear(b);
  var x = 0.41233895 * rl + 0.35762064 * gl + 0.18051042 * bl;
  var y = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  var z = 0.01932141 * rl + 0.11916382 * gl + 0.95034478 * bl;
  var rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
  var gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
  var bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
  var rD = MD_VC.rgbD[0] * rC, gD = MD_VC.rgbD[1] * gC, bD = MD_VC.rgbD[2] * bC;
  var rAF = Math.pow(MD_VC.fl * Math.abs(rD) / 100, 0.42);
  var gAF = Math.pow(MD_VC.fl * Math.abs(gD) / 100, 0.42);
  var bAF = Math.pow(MD_VC.fl * Math.abs(bD) / 100, 0.42);
  var rA = mdSign(rD) * 400 * rAF / (rAF + 27.13);
  var gA = mdSign(gD) * 400 * gAF / (gAF + 27.13);
  var bA = mdSign(bD) * 400 * bAF / (bAF + 27.13);
  var a = (11 * rA - 12 * gA + bA) / 11;
  var bb = (rA + gA - 2 * bA) / 9;
  var u = (20 * rA + 20 * gA + 21 * bA) / 20;
  var p2 = (40 * rA + 20 * gA + bA) / 20;
  var hue = mdDeg(Math.atan2(bb, a) * 180 / MD_PI);
  var J = 100 * Math.pow(p2 * MD_VC.nbb / MD_VC.aw, MD_VC.c * MD_VC.z);
  var hp = hue < 20.14 ? hue + 360 : hue;
  var eHue = 0.25 * (Math.cos(hp * MD_PI / 180 + 2) + 3.8);
  var p1 = (50000 / 13) * eHue * MD_VC.nc * MD_VC.ncb;
  var t = (p1 * Math.sqrt(a * a + bb * bb)) / (u + 0.305);
  var alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73);
  return { h: hue, c: alpha * Math.sqrt(J / 100), t: mdLstarFromY(y) };
}

/* ${"\u9006\u5411\uff1a"}CAM16 (J, C, H) ${"\u2192"} ${"\u7ebf\u6027"} sRGB${"\uff08\u672a\u88c1\u526a\uff0c\u7528\u4e8e\u8272\u57df\u5224\u5b9a\uff09"} */
function mdCamToLinear(j, c, h) {
  var alpha = (c === 0 || j === 0) ? 0 : c / Math.sqrt(j / 100);
  var t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73), 1 / 0.9);
  var hRad = h * MD_PI / 180;
  var eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
  var ac = MD_VC.aw * Math.pow(j / 100, 1 / MD_VC.c / MD_VC.z);
  var p1 = eHue * (50000 / 13) * MD_VC.nc * MD_VC.ncb;
  var p2 = ac / MD_VC.nbb;
  var hSin = Math.sin(hRad), hCos = Math.cos(hRad);
  var gamma = (23 * (p2 + 0.305) * t) / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
  var a = gamma * hCos, b = gamma * hSin;
  var rA = (460 * p2 + 451 * a + 288 * b) / 1403;
  var gA = (460 * p2 - 891 * a - 261 * b) / 1403;
  var bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
  var rB = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
  var gB = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
  var bB = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
  var rC = mdSign(rA) * (100 / MD_VC.fl) * Math.pow(rB, 1 / 0.42);
  var gC = mdSign(gA) * (100 / MD_VC.fl) * Math.pow(gB, 1 / 0.42);
  var bC = mdSign(bA) * (100 / MD_VC.fl) * Math.pow(bB, 1 / 0.42);
  var rF = rC / MD_VC.rgbD[0], gF = gC / MD_VC.rgbD[1], bF = bC / MD_VC.rgbD[2];
  var X = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
  var Y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
  var Z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
  return [
    MD_XYZ2SRGB[0][0] * X + MD_XYZ2SRGB[0][1] * Y + MD_XYZ2SRGB[0][2] * Z,
    MD_XYZ2SRGB[1][0] * X + MD_XYZ2SRGB[1][1] * Y + MD_XYZ2SRGB[1][2] * Z,
    MD_XYZ2SRGB[2][0] * X + MD_XYZ2SRGB[2][1] * Y + MD_XYZ2SRGB[2][2] * Z
  ];
}
function mdInGamut(v) {
  return v[0] >= -0.01 && v[0] <= 100.01 && v[1] >= -0.01 && v[1] <= 100.01 && v[2] >= -0.01 && v[2] <= 100.01;
}
function mdLinToRgb(v) { return [mdDelinear(v[0]), mdDelinear(v[1]), mdDelinear(v[2])]; }

/* ${"\u6c42\u51fa\u8ba9\u91cf\u5316\u540e\u8272\u8c03\u7b49\u4e8e"} tone ${"\u7684"} CAM16 ${"\u660e\u5ea6"} J */
function mdJForTone(h, c, tone) {
  var lo = 0.01, hi = 99.9, i, mid, rgb, lt;
  for (i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    rgb = mdLinToRgb(mdCamToLinear(mid, c, h));
    lt = mdLstarFromY(mdLinear(rgb[0]) * 0.2126 + mdLinear(rgb[1]) * 0.7152 + mdLinear(rgb[2]) * 0.0722);
    if (lt < tone) { lo = mid; } else { hi = mid; }
  }
  return (lo + hi) / 2;
}
/* HCT ${"\u2192"} sRGB${"\uff1a\u5148\u628a\u8272\u5ea6\u6536\u655b\u5230\u8272\u57df\u5185\uff08\u4fdd\u4f4f\u8272\u8c03\u3001\u727a\u7272\u8272\u5ea6\uff09\uff0c\u518d\u89e3\u660e\u5ea6"} */
function mdRgbFromHct(hue, chroma, tone) {
  var h = mdDeg(hue), t = mdClamp(0, 100, tone);
  if (!(chroma >= 1e-4) || t >= 99.9999 || t <= 0.0001) {
    var g = mdDelinear(mdYFromLstar(t));
    return [g, g, g];
  }
  var lo = 0, hi = chroma, i, mid;
  for (i = 0; i < 16; i++) {
    mid = (lo + hi) / 2;
    if (mdInGamut(mdCamToLinear(mdJForTone(h, mid, t), mid, h))) { lo = mid; } else { hi = mid; }
  }
  if (lo < 1e-4) { var g2 = mdDelinear(mdYFromLstar(t)); return [g2, g2, g2]; }
  return mdLinToRgb(mdCamToLinear(mdJForTone(h, lo, t), lo, h));
}

/* ---------- ${"\u5341\u516d\u8fdb\u5236\u4e92\u8f6c"} ---------- */
function mdHexToRgb(hx) {
  var s = String(hx || '').replace(/[^0-9a-fA-F]/g, '');
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  if (s.length !== 6) return null;
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function mdRgbToHex(v) {
  return '#' + v.map(function (x) { var s = mdClamp(0, 255, Math.round(x)).toString(16); return s.length < 2 ? '0' + s : s; }).join('');
}
function mdHctFromHex(hx) { var v = mdHexToRgb(hx); return v ? mdHctFromRgb(v[0], v[1], v[2]) : { h: 0, c: 0, t: 50 }; }
function mdHexFromHct(h, c, t) { return mdRgbToHex(mdRgbFromHct(h, c, t)); }

/* ---------- ${"\u8272\u8c03\u4e0e\u4e3b\u9898\u65b9\u6848"} ---------- */
/* ${"\u6587\u6863\u7684"} 13 ${"\u4e2a\u8272\u8c03\u6807\u53f7"} 0/10/50/100/200${"\u2026"}1000 ${"\u2194"} HCT ${"\u8272\u8c03"} 100/99/95/90/80${"\u2026"}0 */
var MD_TONE_LABELS = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
function mdLabelToTone(L) { return (1000 - L) / 10; }
var MD_TONES = MD_TONE_LABELS.map(mdLabelToTone);

/* ${"\u4e3b\u9898\u65b9\u6848\uff1a"}hue ${"\u4e3a\u5404\u8c03\u8272\u76d8\u76f8\u5bf9\u6765\u6e90\u8272\u7684\u8272\u76f8\u504f\u79fb\uff0c"}chroma ${"\u4e3a\u8272\u5ea6\uff0c"}
   n ${"\u4e3a"} neutral1/neutral2 ${"\u8272\u5ea6\uff0c"}cap ${"\u4e3a\u9ad8\u8272\u8c03\uff08\u2265"}90${"\uff09\u7684\u8272\u5ea6\u4e0a\u9650\u3002"}
   TONAL_SPOT ${"\u5b8c\u5168\u6309\u6587\u6863\uff1a"}accent1 ${"\u8272\u5ea6"} 48${"\u3001\u9ad8\u8272\u8c03"} 40${"\uff1b"}accent2 16${"\uff1b"}accent3 ${"\u8272\u76f8"} +60${"\u3001\u8272\u5ea6"} 32${"\uff1b"}
   neutral1 ${"\u8272\u5ea6"} 4${"\uff1b"}neutral2 ${"\u8272\u5ea6"} 8${"\u3002"} */
var MD_VARIANTS = [
  { id: 'TONAL_SPOT', name: '${"\u8272\u8c03\u70b9"}', desc: 'Android ${"\u9ed8\u8ba4\u65b9\u6848\uff0c\u4f4e\u5230\u4e2d\u7b49\u5f69\u5ea6"}', hue: [0, 0, 60], chroma: [48, 16, 32], n: [4, 8], cap: 40 },
  { id: 'VIBRANT', name: '${"\u9c9c\u8273"}', desc: '${"\u6b21\u8272\u4e0e\u4e09\u8272\u4e0e\u4e3b\u8272\u540c\u7c7b\uff0c\u6574\u4f53\u66f4\u9971\u548c"}', hue: [0, 0, 60], chroma: [64, 32, 48], n: [6, 10], cap: 40 },
  { id: 'EXPRESSIVE', name: '${"\u8868\u73b0\u529b"}', desc: '${"\u9ad8\u5f69\u5ea6\uff0c\u8272\u76f8\u95f4\u62c9\u5f00\u8ddd\u79bb"}', hue: [0, 15, -45], chroma: [72, 36, 56], n: [8, 12], cap: 44 },
  { id: 'SPRITZ', name: '${"\u7070\u8c03"}', desc: '${"\u53bb\u9971\u548c\uff0c\u63a5\u8fd1\u7070\u9636"}', hue: [0, 0, 60], chroma: [14, 8, 18], n: [3, 5], cap: 14 }
];
function mdVariant(id) {
  for (var i = 0; i < MD_VARIANTS.length; i++) { if (MD_VARIANTS[i].id === id) return MD_VARIANTS[i]; }
  return MD_VARIANTS[0];
}

/* ---------- ${"\u7531\u6765\u6e90\u8272\u6d3e\u751f"} 5 ${"\u4e2a\u8272\u8c03\u8c03\u8272\u76d8"} ---------- */
function mdPalettes(seedHex, variantId) {
  var src = mdHctFromHex(seedHex);
  /* ${"\u6587\u6863\u8981\u6c42\u6765\u6e90\u8272\u7684"} CAM16 ${"\u8272\u5ea6\u4e0d\u4f4e\u4e8e"} 5${"\uff0c\u5426\u5219\u8272\u76f8\u4e0d\u7a33"} */
  var hue = src.h, chroma = Math.max(5, src.c);
  var V = mdVariant(variantId);
  var cap = function (c, t) { return t >= 90 ? Math.min(c, V.cap) : c; };
  var P = {
    a1: { h: hue, c: V.chroma[0] },
    a2: { h: mdDeg(hue + V.hue[1]), c: V.chroma[1] },
    a3: { h: mdDeg(hue + V.hue[2]), c: V.chroma[2] },
    n1: { h: hue, c: V.n[0] },
    n2: { h: hue, c: V.n[1] },
    err: { h: 25, c: 84 }
  };
  for (var k in P) { P[k].at = function (t) { return mdHexFromHct(this.h, cap(this.c, t), t); }; }
  P.err.at = function (t) { return mdHexFromHct(this.h, this.c, t); };
  P.seed = seedHex;
  P.sourceChroma = chroma;
  return P;
}
/* 65 ${"\u8272\uff1a"}5 ${"\u4e2a\u8c03\u8272\u76d8"} ${"\u00d7"} 13 ${"\u4e2a\u8272\u8c03\uff0c\u952e\u4e3a\u6587\u6863\u6807\u53f7"} */
function mdTonal(seedHex, variantId) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  ['a1', 'a2', 'a3', 'n1', 'n2'].forEach(function (k) {
    var row = {};
    MD_TONE_LABELS.forEach(function (L) { row[L] = P[k].at(mdLabelToTone(L)); });
    out[k] = row;
  });
  return out;
}

/* ---------- ${"\u989c\u8272\u89d2\u8272\u6620\u5c04\uff08\u6587\u6863\u300c"}Material ${"\u5e93\u989c\u8272\u5c5e\u6027\u66f4\u65b0\u300d\u8868\uff09"} ---------- */
/* [${"\u89d2\u8272"}, ${"\u8c03\u8272\u76d8"}, ${"\u6d45\u8272\u4e3b\u9898\u8272\u8c03"}, ${"\u6df1\u8272\u4e3b\u9898\u8272\u8c03"}] ${"\u2014\u2014"} ${"\u6807\u53f7"} N ${"\u2194"} ${"\u8272\u8c03"} (1000-N)/10 */
var MD_ROLE_MAP = [
  ['primary', 'a1', 600, 200], ['onPrimary', 'a1', 0, 800],
  ['primaryContainer', 'a1', 100, 700], ['onPrimaryContainer', 'a1', 900, 900],
  ['secondary', 'a2', 600, 200], ['onSecondary', 'a2', 0, 800],
  ['secondaryContainer', 'a2', 100, 700], ['onSecondaryContainer', 'a2', 900, 900],
  ['tertiary', 'a3', 600, 200], ['onTertiary', 'a3', 0, 800],
  ['tertiaryContainer', 'a3', 100, 700], ['onTertiaryContainer', 'a3', 900, 900],
  ['error', 'err', 600, 200], ['onError', 'err', 0, 800],
  ['errorContainer', 'err', 100, 700], ['onErrorContainer', 'err', 900, 900],
  ['background', 'n1', 10, 900],
  ['onBackground', 'n1', 900, 100],
  ['surface', 'n1', 10, 900], ['onSurface', 'n1', 900, 100],
  ['surfaceContainerLowest', 'n1', 0, 1000], ['surfaceContainerLow', 'n1', 100, 900],
  ['surfaceContainer', 'n1', 200, 800], ['surfaceContainerHigh', 'n1', 300, 700],
  ['surfaceContainerHighest', 'n1', 400, 600],
  ['surfaceVariant', 'n2', 100, 700], ['onSurfaceVariant', 'n2', 700, 200],
  ['outline', 'n2', 500, 400], ['outlineVariant', 'n2', 200, 700],
  ['inverseSurface', 'n1', 800, 100], ['inverseOnSurface', 'n1', 100, 800],
  ['inversePrimary', 'a1', 200, 600],
  /* ${"\u906e\u7f69\u4e0e\u6295\u5f71\u4e0d\u968f\u6df1\u6d45\u7ffb\u8f6c\uff1a"}M3 ${"\u89c4\u5b9a\u4e24\u8005\u5728\u4efb\u4f55\u4e3b\u9898\u4e0b\u90fd\u662f\u7eaf\u9ed1"} */
  ['scrim', 'n1', 1000, 1000], ['shadow', 'n1', 1000, 1000],
  /* ${"\u72b6\u6001\u5c42\u4e0e\u72b6\u6001\u5185\u5bb9\uff08\u6587\u6863\u7b2c\u4e8c\u5f20\u8868\uff09"} */
  ['primaryStateContent', 'a1', 700, 200], ['primaryStateLayer', 'a1', 600, 300],
  ['secondaryStateContent', 'a2', 700, 200], ['secondaryStateLayer', 'a2', 600, 300],
  ['onPrimaryStateContent', 'a1', 0, 800], ['onPrimaryStateLayer', 'a1', 900, 800],
  ['onSecondaryStateContent', 'a2', 0, 800], ['onSecondaryStateLayer', 'a2', 900, 800],
  ['onSurfaceStateContent', 'n1', 900, 100], ['onSurfaceStateLayer', 'n1', 900, 100],
  ['onSurfaceVariantStateContent', 'n2', 700, 200], ['onSurfaceVariantStateLayer', 'n2', 700, 200],
  ['errorStateContent', 'err', 800, 200]
];
function mdRoleKey(role) {
  return role.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
/* ${"\u751f\u6210\u6574\u5957\u989c\u8272\u89d2\u8272\uff1b"}dark ${"\u4e3a\u771f\u65f6\u53d6\u6df1\u8272\u4e3b\u9898\u5217"} */
function mdRoles(seedHex, variantId, dark) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  MD_ROLE_MAP.forEach(function (row) {
    var pal = P[row[1]], L = dark ? row[3] : row[2];
    out[row[0]] = pal.at(mdLabelToTone(L));
  });
  return out;
}
/* ${"\u628a\u89d2\u8272\u5199\u6210"} CSS ${"\u53d8\u91cf"} */
function mdApply(seedHex, variantId, dark) {
  var r = mdRoles(seedHex, variantId, dark);
  var st = document.documentElement.style;
  for (var k in r) { st.setProperty('--m-' + mdRoleKey(k), r[k]); }
  return r;
}

/* ---------- Material ${"\u5916\u89c2"} ---------- */
var MD_SEED_DEF = '#6750A4';
var MD_PNAME = { a1: 'accent1', a2: 'accent2', a3: 'accent3', n1: 'neutral1', n2: 'neutral2' };
function storedStyle(){ try { return localStorage.getItem('nb_style') || 'glass'; } catch (e) { return 'glass'; } }
function storedSeed(){
  try { var v = localStorage.getItem('nb_seed'); return (v && mdHexToRgb(v)) ? v : MD_SEED_DEF; } catch (e) { return MD_SEED_DEF; }
}
function storedVariant(){ try { return localStorage.getItem('nb_variant') || 'TONAL_SPOT'; } catch (e) { return 'TONAL_SPOT'; } }
function savePref(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
function normHex(hx){ var v = mdHexToRgb(hx); return v ? mdRgbToHex(v) : null; }

/* ${"\u6d3e\u751f"} 65 ${"\u8272\u89d2\u8272\u5199\u5165"} CSS ${"\u53d8\u91cf\uff1b\u53d8\u91cf\u5c31\u7eea\u540e\u624d\u6302"} data-style${"\uff0c\u907f\u514d\u9996\u5e27\u95ea\u70c1"} */
function mdSync(){
  var roles = mdApply(storedSeed(), storedVariant(), resolveTheme(storedTheme()) !== 'light');
  document.documentElement.setAttribute('data-style', storedStyle());
  return roles;
}
function setStyle(s){ savePref('nb_style', s); mdSync(); mdPaint(); }
function setSeed(hx){
  var v = normHex(hx); if (!v) return false;
  savePref('nb_seed', v); mdSync(); mdPaint(); return true;
}
function setVariant(id){ savePref('nb_variant', id); mdSync(); mdPaint(); }
function resetSeed(){ var i = $('mdSeed'); var s = setSeed(MD_SEED_DEF); if (i) i.value = storedSeed(); return s; }

/* ---------- ${"\u5916\u89c2\u98ce\u683c\uff1a\u8272\u5f69\u8bbe\u7f6e\u6298\u53e0\uff08\u4ece\u300c\u79cd\u5b50\u8272\u300d\u8d77\u6536\u8d77\uff09"} ---------- */
function mdFoldSet(open){
  var b = $('mdFoldBtn'), d = $('mdBox');
  if (!b || !d) return;
  d.classList[open ? 'add' : 'remove']('open');
  b.setAttribute('data-open', open ? '1' : '0');
  b.title = open ? '${"\u6536\u8d77\u8272\u5f69\u8bbe\u7f6e"}' : '${"\u5c55\u5f00\u8272\u5f69\u8bbe\u7f6e"}';
}
function mdFoldInit(){
  var open = false;
  try { open = localStorage.getItem('nb_mdfold') === '1'; } catch (e) {}
  mdFoldSet(open);
}
function toggleMdFold(){
  var b = $('mdFoldBtn');
  var open = !(b && b.getAttribute('data-open') === '1');
  try { localStorage.setItem('nb_mdfold', open ? '1' : '0'); } catch (e) {}
  mdFoldSet(open);
  if (open && typeof mdPaint === 'function') mdPaint();
}

function buildOnce(el, html){
  if (!el || el.getAttribute('data-built')) return;
  el.innerHTML = html; el.setAttribute('data-built', '1');
}
/* ${"\u6e32\u67d3\u5916\u89c2\u5361\u7247\uff1a\u98ce\u683c\u6bb5\u9009\u3001\u79cd\u5b50\u8272\u677f\u3001\u65b9\u6848\u6bb5\u9009\u3001"}65 ${"\u8272\u9884\u89c8"} */
function mdPaint(){
  var seed = storedSeed(), variant = storedVariant(), style = storedStyle();
  var seg = document.querySelectorAll('#styleSeg button');
  for (var i = 0; i < seg.length; i++) seg[i].classList.toggle('on', seg[i].getAttribute('data-s') === style);

  var sr = $('mdSeedRow');
  if (sr) {
    buildOnce(sr, ["#6750A4","#0B57D0","#006A6A","#006E1C","#7A5900","#8B5000","#BA1A1A","#B90063","#7C6CFF","#5F6368"].map(function (c) {
      return '<i data-c="' + c + '" style="background:' + c + '" title="' + c + '"></i>';
    }).join(''));
    var its = sr.querySelectorAll('i');
    for (var j = 0; j < its.length; j++) {
      its[j].classList.toggle('on', normHex(its[j].getAttribute('data-c')) === normHex(seed));
    }
    if (!sr.getAttribute('data-bound')) {
      sr.setAttribute('data-bound', '1');
      sr.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'I') { var c = t.getAttribute('data-c'); var inp = $('mdSeed'); if (inp) inp.value = c; setSeed(c); }
      });
    }
  }
  var vs = $('mdVarSeg');
  if (vs) {
    buildOnce(vs, MD_VARIANTS.map(function (v) {
      return '<button class="btn sm" data-v="' + v.id + '" onclick="setVariant(\'' + v.id + '\')">' + v.name + '</button>';
    }).join(''));
    var vb = vs.querySelectorAll('button');
    for (var m = 0; m < vb.length; m++) vb[m].classList.toggle('on', vb[m].getAttribute('data-v') === variant);
  }
  var dsc = $('mdVarDesc');
  if (dsc) dsc.textContent = mdVariant(variant).desc;

  var pal = $('mdPal');
  if (pal) {
    buildOnce(pal, ['a1', 'a2', 'a3', 'n1', 'n2'].map(function (row) {
      return '<div class="r"><b>' + MD_PNAME[row] + '</b>' + MD_TONE_LABELS.map(function (L) {
        return '<i data-p="' + row + '" data-l="' + L + '"></i>';
      }).join('') + '</div>';
    }).join(''));
    var T = mdTonal(seed, variant);
    var cells = pal.querySelectorAll('i');
    var srgb = mdHexToRgb(seed), best = null, bestD = 1e9;
    for (var n = 0; n < cells.length; n++) {
      var cp = cells[n].getAttribute('data-p'), cl = cells[n].getAttribute('data-l');
      var hx = T[cp][cl], c = mdHexToRgb(hx);
      cells[n].style.background = hx;
      cells[n].setAttribute('data-hex', hx);
      cells[n].title = MD_PNAME[cp] + ' ${"\u00b7"} ' + cl + ' ${"\u00b7"} ' + hx + '\n${"\u5355\u51fb\u8bbe\u4e3a\u79cd\u5b50\u8272"}';
      cells[n].classList.remove('on');
      var d = Math.abs(c[0] - srgb[0]) + Math.abs(c[1] - srgb[1]) + Math.abs(c[2] - srgb[2]);
      if (d < bestD) { bestD = d; best = cells[n]; }   /* ${"\u79cd\u5b50\u8272\u5728\u8272\u677f\u4e2d\u7684\u843d\u70b9"} */
    }
    if (best) best.classList.add('on');
    /* ${"\u5355\u51fb\u4efb\u4e00\u8272\u5757"} ${"\u2192"} ${"\u8be5\u8272\u6210\u4e3a\u65b0\u7684\u79cd\u5b50\u8272\uff08\u4e0e\u4e0a\u65b9\u9884\u8bbe\u8272\u677f\u540c\u4e00\u5957\u4ea4\u4e92\uff09"} */
    if (!pal.getAttribute('data-bound')) {
      pal.setAttribute('data-bound', '1');
      pal.addEventListener('click', function (e) {
        var t = e.target;
        if (!t || t.tagName !== 'I') return;
        var hx = t.getAttribute('data-hex');
        if (!hx || !mdHexToRgb(hx)) return;
        if (normHex(hx) === normHex(storedSeed())) { toast('${"\u5df2\u662f\u5f53\u524d\u79cd\u5b50\u8272"} ' + hx); return; }
        var i = $('mdSeed'); if (i) i.value = hx;
        setSeed(hx);
        toast('${"\u79cd\u5b50\u8272\u5df2\u66f4\u65b0"} ${"\u00b7"} ' + hx);
      });
    }
  }
  var po = $('mdPalOut');
  if (po) {
    var found = null;
    if (pal) {
      var cs = pal.querySelectorAll('i');
      for (var k = 0; k < cs.length; k++) if (cs[k].classList.contains('on')) { found = cs[k]; break; }
    }
    po.innerHTML = '<i class="chip" style="background:' + seed + '"></i>' +
      '<span class="hx" title="${"\u70b9\u51fb\u590d\u5236"}" onclick="copySeed()">' + seed + '</span>' +
      '<span class="tag">${"\u5f53\u524d\u79cd\u5b50\u8272"}' + (found
        ? ' ${"\u00b7"} ${"\u843d\u70b9"} ' + MD_PNAME[found.getAttribute('data-p')] + ' ${"\u00b7"} ' + found.getAttribute('data-l')
        : '') + '${"\u3000\u5355\u51fb\u8272\u5757\u5373\u53ef\u6539\u7528\u8be5\u8272"}</span>';
  }
  var inp = $('mdSeed');
  if (inp && document.activeElement !== inp) inp.value = seed;
}

/* ${"\u590d\u5236\u5f53\u524d\u79cd\u5b50\u8272"} */
function copySeed(){ copyText(storedSeed()); }

/* ---------- ${"\u6d9f\u6f2a\uff08"}Material ${"\u89e6\u63a7\u53cd\u9988\uff09"} ---------- */
function mdRipple(e){
  if (storedStyle() !== 'material') return;
  if (!e.target || !e.target.closest) return;
  var host = e.target.closest('.btn,.ibtn,.nav-item,.sp span,.pill,.fgrp');
  if (!host) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var r = host.getBoundingClientRect();
  if (!r.width || !r.height) return;
  var d = Math.max(r.width, r.height) * 2;
  var sp = document.createElement('span');
  sp.className = 'md-rip';
  sp.style.width = sp.style.height = d + 'px';
  sp.style.left = (e.clientX - r.left - d / 2) + 'px';
  sp.style.top = (e.clientY - r.top - d / 2) + 'px';
  host.appendChild(sp);
  setTimeout(function () { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 640);
}

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
  if (typeof mdSync === 'function') mdSync();
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
if (typeof mdFoldInit === 'function') mdFoldInit();

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
      applyMode();
      if (!CFG.mode) showMode();
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
  if (CFG.enable${t("Vmxlc3M=")} !== false) a.push('${t("VkxFU1M=")}');
  if (CFG.enable${t("VHJvamFu")}) a.push('${t("VHJvamFu")}');
  if (CFG.enable${t("WGh0dHA=")}) a.push('${t("WEhUVFA=")}');
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
  $('en-${t("dmxlc3M=")}').checked = CFG.enable${t("Vmxlc3M=")} !== false;
  $('en-${t("dHJvamFu")}').checked = !!CFG.enable${t("VHJvamFu")};
  $('tp-pass').value = CFG.${t("dHJvamFu")}Password || '';
  $('en-${t("eGh0dHA=")}').checked = !!CFG.enable${t("WGh0dHA=")};
  $('tls-only').checked = !!CFG.tlsOnly;
  $('${t("YWxwbg==")}').value = CFG.${t("YWxwbg==")} || '';
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
  $('o-fbpool').value = o.${t("ZmFsbGJhY2s=")}Pool || '';
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
  $('hw-cfg').value = CFG.hwCfg || '';
  $('s-${t("cHJveHlJUA==")}').value = CFG.${t("cHJveHlJUA==")} || '';
  $('s-${t("b3V0Ym91bmQ=")}').value = CFG.${t("b3V0Ym91bmQ=")}Proxy || '';
  $('s-outmode').value = CFG.${t("b3V0Ym91bmQ=")}Mode || '';
  $('a-mode').value = curMode();
  $('w-on').checked = !!CFG.warpEnable;
  setWStat();
  $('w-eps').value = CFG.warpEps || '';
  $('w-front').value = CFG.warpFront || '';
  $('w-name').value = CFG.warpName || 'WARP';
  $('x-on').checked = !!CFG.${t("bWFzcXVl")}Enable;
  $('x-conf').value = CFG.${t("bWFzcXVl")}Conf || '';
  $('x-name').value = CFG.${t("bWFzcXVl")}Name || '${t("TUFTUVVF")}';
  $('x-eps').value = CFG.${t("bWFzcXVl")}Eps || '';
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
    mode: $('a-mode').value || '',
    warpEnable: $('w-on').checked,
    warpConf: CFG.warpConf || '',
    warpEps: $('w-eps').value,
    warpFront: $('w-front').value,
    warpName: $('w-name').value.trim() || 'WARP',
    ${t("bWFzcXVl")}Enable: $('x-on').checked,
    ${t("bWFzcXVl")}Conf: $('x-conf').value,
    ${t("bWFzcXVl")}Name: $('x-name').value.trim() || '${t("TUFTUVVF")}',
    ${t("bWFzcXVl")}Eps: $('x-eps').value,
    uuid: $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    ${t("YWxwbg==")}: $('${t("YWxwbg==")}').value,
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
    enable${t("Vmxlc3M=")}: $('en-${t("dmxlc3M=")}').checked,
    enable${t("VHJvamFu")}: $('en-${t("dHJvamFu")}').checked,
    ${t("dHJvamFu")}Password: $('tp-pass').value,
    enable${t("WGh0dHA=")}: $('en-${t("eGh0dHA=")}').checked,
    homeWan: $('hw-on').checked,
    hwCfg: $('hw-cfg').value,
    ${t("cHJveHlJUA==")}: $('s-${t("cHJveHlJUA==")}').value.trim(),
    ${t("b3V0Ym91bmQ=")}Proxy: $('s-${t("b3V0Ym91bmQ=")}').value.trim(),
    ${t("b3V0Ym91bmQ=")}Mode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      ${t("ZmFsbGJhY2s=")}Pool: $('o-fbpool').value.trim(),
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
        toast('${"\u5df2\u4fdd\u5b58\u5e76\u751f\u6548\uff0c\u6b63\u5728\u5237\u65b0\u2026"}', 'ok');
        setTimeout(function(){ location.reload(); }, 800);
      } else toast((r && r.msg) || '${"\u4fdd\u5b58\u5931\u8d25"}', 'err');
    })
    .catch(function(){ toast('${"\u4fdd\u5b58\u5931\u8d25\uff1a\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668"}', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function hwCustomApply(){
  var el = $('hw-cfg'), st = $('hw-cfg-stat');
  if (!el || !st) return;
  var hosts = [], hasCrypto = false;
  String(el.value || '').split(/\n+/).forEach(function(line){
    var s = String(line || '').trim();
    if (!s || s.charAt(0) === '#') return;
    if (/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]/i.test(s)) { hasCrypto = true; return; }
    if (/^-{3,}/.test(s) || /^[A-Za-z0-9+/=\s]{16,}$/.test(s)) return;
    var m = /^([A-Za-z]{2})\s*[:|]\s*([\s\S]+)$/.exec(s);
    var body = s, code = '';
    if (m) { code = m[1].toUpperCase(); body = m[2].trim(); }
    var b64 = body.replace(/\s+/g, '');
    if (b64.length >= 200 && /^[A-Za-z0-9+/=]+$/.test(b64)) { hosts.push('${"\u914d\u7f6e"}(' + (code || 'XX') + ')'); return; }
    var p = body.split(/[\s:]+/).filter(Boolean);
    if (p.length) hosts.push(p[0] + ':' + (parseInt(p[1], 10) || 1194) + '/' + (/udp/i.test(p[2] || '') ? 'udp' : 'tcp'));
  });
  st.textContent = hosts.length
    ? ('${"\u89e3\u6790\u5230"} ' + hosts.length + ' ${"\u6761\uff1a"}' + hosts.slice(0, 4).join('${"\u3001"}') + (hosts.length > 4 ? ' ${"\u2026"}' : '') + (hasCrypto ? '${"\uff08\u542b\u8bc1\u4e66\u5757\uff09"}' : '${"\uff08\u65e0\u8bc1\u4e66\u5757\u7684\u884c\u4f1a\u88ab\u5ffd\u7565\uff09"}'))
    : '${"\u672a\u89e3\u6790\u5230\u6709\u6548\u6761\u76ee"}';
  toast(hosts.length ? ('${"\u89e3\u6790\u5230"} ' + hosts.length + ' ${"\u6761"}') : '${"\u6ca1\u6709\u89e3\u6790\u5230\u6761\u76ee"}', hosts.length ? 'ok' : 'err');
}
function resetAll(){
  if (!confirm('${"\u786e\u5b9a\u91cd\u7f6e\uff1f\u5c06\u6e05\u7a7a"} KV ${"\u4e2d\u5168\u90e8\u9762\u677f\u914d\u7f6e\u4e0e\u8282\u70b9\u8bb0\u5f55\uff0c\u9762\u677f\u8fd8\u539f\u4e3a\u521d\u59cb\u90e8\u7f72\u72b6\u6001\u3002\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01"}')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '${"\u5df2\u91cd\u7f6e"}', 'ok'); setTimeout(function(){ location.href = APIPATH; }, 900); }
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
    a.download = '${t("Y2ZuZXh0")}-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
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
  // ${"\u586b\u4e86"} /sub ${"\u7ed3\u5c3e\u6216\u5e26\u524d\u540e\u659c\u6760\u65f6\u81ea\u52a8\u5f52\u4e00\uff0c\u683c\u5f0f\u540e\u7f00\uff08"}${t("Y2xhc2g=")}/${t("c2luZ2JveA==")} ${"\u7b49\uff09\u62fc\u4e3a"} /sub/<${"\u683c\u5f0f"}>
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
// ${t("Q2xhc2g=")}/${t("TWlob21v")}${"\u3001"}${t("U3Rhc2g=")} ${"\u2192"} ${t("Y2xhc2g=")}://install-config${"\uff08"}Fly${t("Q2xhc2g=")} / ${t("Q2xhc2g=")} Verge / ${t("U3Rhc2g=")} ${"\u626b\u7801\u88c5\u8ba2\u9605\uff0c\u914d\u7f6e\u540d\u53d6\u8ba2\u9605\u54cd\u5e94\u5934"} filename=${t("Q0ZOZXh0")}${"\uff09"}
// ${t("U2luZy1ib3g=")} ${"\u2192"} ${t("c2luZy1ib3g=")}://import-remote-profile?url=...#${t("Q0ZOZXh0")}${"\uff08\u5b98\u65b9"} scheme${"\uff0c"}# ${"\u540e\u4e3a\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\uff09"}
// ${t("U3VyZ2U=")} ${"\u2192"} ${t("c3VyZ2U=")}:///install-config${"\uff08"}${t("U3VyZ2U=")} ${"\u5b98\u65b9"} scheme${"\uff09"}
// auto / ${t("djJyYXlO")}+${t("U2hhZG93cm9ja2V0")} / ${t("TG9vbg==")} / ${t("UXVhbnR1bXVsdA==")} X / ${"\u660e\u6587"} ${"\u2192"} ${"\u76f4\u63a5\u4f7f\u7528\u8ba2\u9605\u94fe\u63a5\uff08"}${t("U2hhZG93cm9ja2V0")} / ${t("TG9vbg==")} / ${t("UXVhblg=")} ${"\u626b\u7801\u8bc6\u522b\uff09"}
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === '${t("Y2xhc2g=")}' || fmt === '${t("c3Rhc2g=")}') return '${t("Y2xhc2g=")}://install-config?url=' + enc;
  if (fmt === '${t("c2luZ2JveA==")}') return '${t("c2luZy1ib3g=")}://import-remote-profile?url=' + enc + '#' + __B;
  if (fmt === '${t("c3VyZ2U=")}') return '${t("c3VyZ2U=")}:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  // ${"\u4fdd\u5b58\u540d\u6309\u6240\u9009\u683c\u5f0f\u7ed9\u51fa\uff08\u5185\u5bb9\u968f\u7ba1\u7406\u63a5\u53e3\u8fd4\u56de\uff0c\u4e0d\u518d\u4f9d\u8d56\u54cd\u5e94\u5934\u91cc\u7684\u6587\u4ef6\u540d\uff09"}
  var names = { ${t("Y2xhc2g=")}:__B+'.yaml', ${t("c3Rhc2g=")}:__B+'.yaml', ${t("c2luZ2JveA==")}:__B+'.json', ${t("c3VyZ2U=")}:__B+'.conf', ${t("c3VyZmJvYXJk")}:__B+'.conf', ${t("bG9vbg==")}:__B+'.conf', ${t("cXVhbng=")}:__B+'.conf' };
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
      if (/${t("Y2xhc2g=")}|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(${t("dmxlc3M=")}|${t("dHJvamFu")}|ss|${t("eGh0dHA=")}):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* ${"\u4fdd\u6301\u539f\u6837"} */ }
        }
        n = t.split('\n').filter(function(l){ return /^(${t("dmxlc3M=")}|${t("dHJvamFu")}|ss|${t("eGh0dHA=")}):\/\//.test(l.trim()); }).length;
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

/* ${"\u6db2\u6001\u73bb\u7483\uff1a\u9ad8\u5149\u8ddf\u968f\u6307\u9488"} */
var GLASS_EL=null,GLASS_EV=null,GLASS_RAF=0;
function glassTick(){GLASS_RAF=0;if(!GLASS_EL||!GLASS_EV)return;var r=GLASS_EL.getBoundingClientRect();if(!r.width||!r.height)return;GLASS_EL.style.setProperty('--mx',((GLASS_EV.clientX-r.left)/r.width*100).toFixed(1)+'%');GLASS_EL.style.setProperty('--my',((GLASS_EV.clientY-r.top)/r.height*100).toFixed(1)+'%');}
function bindGlass(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if (typeof mdPaint === 'function') mdPaint();
document.addEventListener('pointerdown', function(e){ if (typeof mdRipple === 'function') mdRipple(e); }, true);
/* ${"\u9f20\u6807\u8ddf\u968f\u9ad8\u5149\u5df2\u6309\u7528\u6237\u8981\u6c42\u79fb\u9664\uff08\u539f"} pointermove ${"\u2192"} glassTick ${"\u6cbf\u5149\u6807\u5237\u65b0\u5361\u7247\u9ad8\u5149\uff09"} */
document.addEventListener('pointerleave',function(){GLASS_EL=null;});}
bindGlass();
</script>
</body>
</html>

`;function Sr(e){const t="/"+String(e||"").replace(/^\/+/,"").replace(/\/+$/,""),r=kr.indexOf("var APIPATH ="),n=r<0?-1:kr.indexOf(";",r),a=r>=0&&n>r?kr.slice(0,r)+"var APIPATH = "+JSON.stringify(t)+kr.slice(n):kr;return new Response(a,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}function Pr(e){return X(String(e&&e.uuid||"")+"|rule").slice(0,12)}function Ir(e,t){return!(!function(e){return(e||"").toLowerCase().includes("mozilla")}(t)||!(e.headers.get("Accept")||"").toLowerCase().includes("text/html")&&"document"!==(e.headers.get("Sec-Fetch-Dest")||"").toLowerCase()&&!e.headers.get("Upgrade-Insecure-Requests"))}async function Cr(e,t){if(!t.admin)return!0;const r=(e.headers.get("Cookie")||"").match(new RegExp("(?:^|;\\s*)"+c+"=([^;]+)"));return!(!r||r[1]!==X(String(t.admin)))}const Ar=new Map,$r={sub:{cap:30,burst:10,refillMs:6e4},panel:{cap:60,burst:20,refillMs:6e4}};function Vr(e,r){const n=$r[r];if(!n)return!0;const a=e.headers.get("CF-"+t("Q29ubmVjdA==")+"ing-IP")||e.headers.get("X-Real-IP")||"";if(!a)return!0;const o=Date.now();Ar.size>2e3&&Ar.clear();const i=r+"|"+a;let s=Ar.get(i);s||(s={tokens:n.cap,t:o},Ar.set(i,s));const l=Math.floor((o-s.t)/n.refillMs);return l>0&&(s.tokens=Math.min(n.cap,s.tokens+l*n.burst),s.t=s.t+l*n.refillMs),!(s.tokens<=0||(s.tokens--,0))}function Tr(){return Rr()}function Ur(e){try{return decodeURIComponent(e)}catch(t){return e}}const Mr=`\n<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Welcome</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f1216;color:#e8ecf2;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}\nmain{text-align:center;padding:2rem}\nh1{font-size:1.9rem;font-weight:600;letter-spacing:.02em}\np{margin-top:.75rem;color:#8b95a7;font-size:.95rem}\ni{display:inline-block;width:8px;height:8px;border-radius:50%;background:#3ba55d;margin-right:.5rem;vertical-align:middle}\n</style>\n</head>\n<body>\n<main>\n<h1>Welcome</h1>\n<p><i></i>Service is running</p>\n</main>\n</body>\n</html>\n`;function Rr(){const e=rr&&(rr.MASK||"");return"1101"===e?function(){const e=Er(),r=new Date,n=function(e){return String(e).padStart(2,"0")},a=r.getUTCFullYear()+"-"+n(r.getUTCMonth()+1)+"-"+n(r.getUTCDate())+" "+n(r.getUTCHours())+":"+n(r.getUTCMinutes())+":"+n(r.getUTCSeconds()),o=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(e){return e.toString(16).padStart(2,"0")}).join(""),i=nr&&nr.headers.get("CF-"+t("Q29ubmVjdA==")+"ing-IP")||"";return new Response(`<!DOCTYPE html>\n\x3c!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if gt IE 8]>\x3c!--\x3e <html class="no-js" lang="en-US"> \x3c!--<![endif]--\x3e\n<head>\n<title>Worker threw exception | ${e} | Cloudflare</title>\n<meta charset="UTF-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n<meta name="robots" content="noindex, nofollow" />\n<meta name="viewport" content="width=device-width,initial-scale=1" />\n<style>\nbody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\n.cf-wrapper{max-width:960px;margin:0 auto;padding:0 1.5em}\n#cf-error-details{padding:2.5em 0}\n.cf-error-overview h1{font-size:2.6em;font-weight:400;margin:0 0 .3em;line-height:1.2}\n.cf-error-type{color:#404041}\n.cf-error-code{color:#bd2426;font-weight:600}\n.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\n.cf-subheadline{font-size:1.4em;font-weight:400;margin:0 0 1.2em;color:#404041}\n.cf-section{border-top:1px solid #e0e0e0;padding:1.4em 0}\n.cf-error-source{background:#f6f6f6;border:1px solid #e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\n.cf-error-source p{margin:0 0 .8em}\n.cf-error-source p:last-child{margin:0}\n.cf-footer{border-top:1px solid #e0e0e0;padding:1.2em 0;font-size:.86em;color:#92979b}\n.cf-footer a,.cf-section a{color:#2f7bbf;text-decoration:none}\n.cf-footer p{margin:0 0 .4em}\n</style>\n</head>\n<body>\n<div id="cf-wrapper">\n<div id="cf-error-details" class="cf-error-details-wrapper">\n<div class="cf-header cf-error-overview">\n<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">1101</span><small class="heading-ray-id">Ray ID: ${o} &bull; ${a} UTC</small></h1>\n<h2 class="cf-subheadline">Worker threw exception</h2>\n</div>\n<div class="cf-section cf-wrapper">\n<p>You've requested a page on a website (${e}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>\n</div>\n<div class="cf-section cf-wrapper">\n<div class="cf-error-source">\n<p><strong>What can I do?</strong></p>\n<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 1101 means that the request reached the server, but the server threw an exception while processing it.</p>\n<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>\n</div>\n</div>\n</div>\n<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${o}</strong></p><p>Your IP: ${i} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>\n</div>\n</body>\n</html>`,{status:500,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}():"522"===e?function(){const e=Er(),r=new Date,n=function(e){return String(e).padStart(2,"0")},a=r.getUTCFullYear()+"-"+n(r.getUTCMonth()+1)+"-"+n(r.getUTCDate())+" "+n(r.getUTCHours())+":"+n(r.getUTCMinutes())+":"+n(r.getUTCSeconds()),o=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(e){return e.toString(16).padStart(2,"0")}).join(""),i=nr&&nr.headers.get("CF-"+t("Q29ubmVjdA==")+"ing-IP")||"";return new Response(`<!DOCTYPE html>\n\x3c!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]--\x3e\n\x3c!--[if gt IE 8]>\x3c!--\x3e <html class="no-js" lang="en-US"> \x3c!--<![endif]--\x3e\n<head>\n<title>${e} | 522: ${t("Q29ubmVjdA==")}ion timed out</title>\n<meta charset="UTF-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n<meta name="robots" content="noindex, nofollow" />\n<meta name="viewport" content="width=device-width,initial-scale=1" />\n<style>\nbody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\n.cf-wrapper{max-width:960px;margin:0 auto;padding:0 1.5em}\n#cf-error-details{padding:2.5em 0}\n.cf-error-overview h1{font-size:2.6em;font-weight:400;margin:0 0 .3em;line-height:1.2}\n.cf-error-type{color:#404041}\n.cf-error-code{color:#bd2426;font-weight:600}\n.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\n.cf-subheadline{font-size:1.4em;font-weight:400;margin:0 0 1.2em;color:#404041}\n.cf-section{border-top:1px solid #e0e0e0;padding:1.4em 0}\n.cf-error-source{background:#f6f6f6;border:1px solid #e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\n.cf-error-source p{margin:0 0 .8em}\n.cf-error-source p:last-child{margin:0}\n.cf-footer{border-top:1px solid #e0e0e0;padding:1.2em 0;font-size:.86em;color:#92979b}\n.cf-footer a,.cf-section a{color:#2f7bbf;text-decoration:none}\n.cf-footer p{margin:0 0 .4em}\n</style>\n</head>\n<body>\n<div id="cf-wrapper">\n<div id="cf-error-details" class="cf-error-details-wrapper">\n<div class="cf-header cf-error-overview">\n<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">522</span><small class="heading-ray-id">Ray ID: ${o} &bull; ${a} UTC</small></h1>\n<h2 class="cf-subheadline">${t("Q29ubmVjdA==")}ion timed out</h2>\n</div>\n<div class="cf-section cf-wrapper">\n<p>You've requested a page on a website (${e}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. Cloudflare is currently unable to reach the origin web server.</p>\n</div>\n<div class="cf-section cf-wrapper">\n<div class="cf-error-source">\n<p><strong>What can I do?</strong></p>\n<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 522 means that the request was able to ${t("Y29ubmVjdA==")} to your web server, but it did not reply in time.</p>\n<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>\n</div>\n</div>\n</div>\n<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${o}</strong></p><p>Your IP: ${i} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>\n</div>\n</body>\n</html>`,{status:522,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}():"off"===e||"0"===e?new Response("Not Found",{status:404}):new Response(Mr,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}})}function Dr(){try{return Rr()}catch(e){return new Response("Service Unavailable",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-store"}})}}function Er(){try{return new URL(nr.url).host}catch(e){return"localhost"}}async function Nr(e,t,r){if(!e||!e.K||"function"!=typeof e.K.get)return!0;try{const n=await e.K.get(t),a=n&&parseInt(JSON.parse(n).t,10)||0;if(a&&Date.now()-a<r)return!1;const o=e.K.put(t,JSON.stringify({t:Date.now()}));return e._ctx&&"function"==typeof e._ctx.waitUntil?e._ctx.waitUntil(o.catch(()=>{})):await o.catch(()=>{}),!0}catch(e){return!0}}export default{fetch:async(r,n,a)=>async function(r,n){rr=n,nr=r;const a=new URL(r.url),o=r.headers.get("User-Agent")||"",i=(r.headers.get("Upgrade")||"").toLowerCase();if("http:"===a.protocol)return Response.redirect(a.href.replace("http://","https://"),301);const h=await ve(n);{const e=String(r.headers.get("x-cf-host")||"").trim();!h.host&&/^[A-Za-z0-9.-]{1,253}$/.test(e)&&(h.host=e)}const b=h.path||h.uuid,g=String(h.login||h.admin||"").replace(/^\/+|\/+$/g,""),k=a.pathname.replace(/^\/+|\/+$/g,"").split("/");if(!function(e,t,r,n,a){try{const o=String(t&&t.API||t&&t.GATE||"").trim();return!o||e.headers.get("X-CF-Api")===o||e.headers.get("X-CF-Gate")===o||"crules"===r[0]||"websocket"===n||!("POST"!==e.method||!a||!a.enableXhttp)}catch(e){return!0}}(r,n,k,i,h))return Tr();if("crules"===k[0]&&3===k.length&&k[1]===Pr(h))return async function(e,r){const n=String(r||"").replace(/\.(mrs|yaml|yml|txt|list)$/i,""),a=v[n];if(!a)return ge({ok:!1,msg:"unknown rule set"},404);const o=Date.now(),i=x.get(n);if(i&&o-i.t<36e5)return w(i.buf,a.ct);if(e.K&&"function"==typeof e.K.get)try{const t=await e.K.get("crule:"+n,{type:"arrayBuffer"});if(t&&t.byteLength)return x.set(n,{t:o,buf:t}),w(t,a.ct)}catch(e){}let c=y.get(n);if(!c){c=(async()=>{const r=await gt(a.url,{headers:{"User-Agent":l+"/"+s,Accept:"*/*"}},2e4);if(!r.ok)throw new Error(t("dXBzdHJlYW0=")+" HTTP "+r.status);const o=await r.arrayBuffer();if(!o||!o.byteLength)throw new Error(t("dXBzdHJlYW0=")+" empty body");if(e.K&&"function"==typeof e.K.put)try{await e.K.put("crule:"+n,o,{expirationTtl:Math.floor(86400)})}catch(e){}return x.set(n,{t:Date.now(),buf:o}),o})(),y.set(n,c);const r=()=>y.delete(n);c.then(r,r)}try{return w(await c,a.ct)}catch(e){return new Response("rule "+t("dXBzdHJlYW0=")+" error: "+(e.message||e),{status:502,headers:{"Retry-After":"3600"}})}}(n,Ur(k[2]));if(g&&(k[0]===g||Ur(k[0])===g)||"login"===k[0]&&!g){const e=!h.admin;if("POST"===r.method){const t=await r.text(),a=new URLSearchParams(t);if(e){const e=String(a.get("password")||"");if(e.length<4)return ge({ok:!1,msg:"\u5bc6\u7801\u81f3\u5c11 4 \u4f4d"},400);const t=JSON.parse(JSON.stringify(h));if(t.admin=e,t.adminInit=!0,n.U||(t.uuid=Q(e)),n.D||n.PATH||(t.path=t.uuid),!await xe(n,t))return ge({ok:!1,msg:"\u672a\u7ed1\u5b9a KV \u547d\u540d\u7a7a\u95f4\uff0c\u65e0\u6cd5\u4fdd\u5b58\u7ba1\u7406\u5bc6\u7801"},500);const r=X(e);return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"+g}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":c+"="+r+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}if(h.admin&&a.get("password")===h.admin){const e=X(String(h.admin));return new Response(JSON.stringify({ok:!0,next:a.get("next")||"/"+g}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":c+"="+e+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}return ge({ok:!1,msg:"\u5bc6\u7801\u9519\u8bef"},403)}return h.admin&&await Cr(r,h)?Sr(b):h.admin?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>\u767b\u5f55</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\n[data-theme=\"light\"]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\nbody::before,body::after{content:\"\";position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\nbody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\nbody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\n.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px solid var(--glass-brd);border-radius:20px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35),inset 0 1px 0 var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\n[data-theme=\"light\"] .box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0 16px 44px rgba(30,45,70,.12),inset 0 1px 0 var(--hi)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px var(--accent-dim),inset 0 1px 0 var(--hi)}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#fff}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--glass);border:1px solid var(--glass-brd);color:var(--text);border-radius:12px;padding:11px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset 0 1px 0 var(--hi);transition:border-color .15s,box-shadow .15s}\ninput:focus{border-color:var(--accent);box-shadow:inset 0 1px 0 var(--hi),0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.38),0 8px 22px var(--accent-dim);transition:transform .15s,filter .15s,box-shadow .15s}\nbutton:hover{filter:brightness(1.08);box-shadow:inset 0 1px 0 var(--hi),0 10px 26px var(--accent-dim)}\nbutton:active{transform:translateY(1px)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare \u8282\u70b9\u63a7\u5236\u53f0</span></div>\n  </div>\n  <h1>\u767b\u5f55</h1>\n  <p>\u8bf7\u8f93\u5165\u7ba1\u7406\u5bc6\u7801\u4ee5\u7ee7\u7eed</p>\n  <div class=\"msg\" id=\"msg\">\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"\u7ba1\u7406\u5bc6\u7801\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">\u767b\u5f55</button>\n  </form>\n  <div class=\"foot\">\u914d\u7f6e\u4fdd\u5b58\u5728 Cloudflare KV \u4e2d\uff0c\u5bc6\u7801\u9519\u8bef 24 \u5c0f\u65f6\u540e\u81ea\u52a8\u5931\u6548</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}}):e?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>\u521d\u59cb\u5316</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\n[data-theme=\"light\"]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\nbody::before,body::after{content:\"\";position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\nbody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\nbody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\n.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px solid var(--glass-brd);border-radius:20px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35),inset 0 1px 0 var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\n[data-theme=\"light\"] .box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0 16px 44px rgba(30,45,70,.12),inset 0 1px 0 var(--hi)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px var(--accent-dim),inset 0 1px 0 var(--hi)}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#fff}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--glass);border:1px solid var(--glass-brd);color:var(--text);border-radius:12px;padding:11px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset 0 1px 0 var(--hi);transition:border-color .15s,box-shadow .15s}\ninput:focus{border-color:var(--accent);box-shadow:inset 0 1px 0 var(--hi),0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.38),0 8px 22px var(--accent-dim);transition:transform .15s,filter .15s,box-shadow .15s}\nbutton:hover{filter:brightness(1.08);box-shadow:inset 0 1px 0 var(--hi),0 10px 26px var(--accent-dim)}\nbutton:active{transform:translateY(1px)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare \u8282\u70b9\u63a7\u5236\u53f0</span></div>\n  </div>\n  <h1>\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801</h1>\n  <p>\u90e8\u7f72\u540e\u9996\u6b21\u8bbf\u95ee\u8bf7\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\u3002\u8bbe\u7f6e\u540e\u8bbf\u95ee\u9762\u677f\u9700\u767b\u5f55\u3002</p>\n  <div class=\"msg\" id=\"msg\">\u8bbe\u7f6e\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\uff08\u81f3\u5c11 4 \u4f4d\uff09\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"\u786e\u8ba4\u7ba1\u7406\u5bc6\u7801\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">\u8bbe\u7f6e\u5e76\u8fdb\u5165\u9762\u677f</button>\n  </form>\n  <div class=\"foot\">\u5bc6\u7801\u4fdd\u5b58\u5728 Cloudflare KV \u4e2d\uff0c\u4e4b\u540e\u53ef\u5728\u300c\u9762\u677f\u8bbe\u7f6e\u300d\u4e2d\u4fee\u6539</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '\u5bc6\u7801\u81f3\u5c11 4 \u4f4d'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '\u8bbe\u7f6e\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate",Pragma:"no-cache"}}):Tr()}const S=String(h.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,""),P=k[0]===b||!!S&&k[0]===S;if(""===k[0])return Tr();if(P&&1===k.length){if("websocket"===i)return Wt(n,r.cf&&r.cf.colo),async function(e,r){const n=new WebSocketPair,[a,o]=Object.values(n);try{o.accept({allowHalfOpen:!0})}catch(e){o.accept()}o.binaryType="arraybuffer";let i=null,s=null,l=!1,c=null,d=null,p=!1;const u=e=>{try{o.send(e)}catch(e){}},h=async(n,a)=>{if(n&&n.byteLength&&(c=c?Oe(c,n):n),!c)return;if(c.byteLength>65536)throw new Error("\u63e1\u624b\u5934\u8d85\u8fc7 64KB\uff0c\u5173\u95ed\u8fde\u63a5");let m,f;try{let e=function(e,t){if(!t.enableTrojan||!e||e.byteLength<58)return!1;const r=e.subarray(0,56);if(Z.decode(r).toLowerCase()===Ue(t.trojanPassword||t.uuid))return!0;if(13===e[56]&&10===e[57]){for(let e=0;e<56;e++){const t=r[e];if(!(t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70))return!1}return!0}return!1}(c,r);if(!e&&c.byteLength>0&&0!==c[0]&&c.byteLength<58)return;f=!e,m=e?function(e){if(!e||e.byteLength<66)throw new Error(t("VHJvamFu")+" \u5934\u90e8\u8fc7\u77ed");const r=new DataView(e.buffer,e.byteOffset,e.byteLength);let n=58;const a=r.getUint8(n);n+=1;const o=r.getUint8(n);let i,s;if(n+=1,1===o)i=`${r.getUint8(n)}.${r.getUint8(n+1)}.${r.getUint8(n+2)}.${r.getUint8(n+3)}`,s=4;else if(3===o){const t=r.getUint8(n);i=Z.decode(e.subarray(n+1,n+1+t)),s=1+t}else{if(4!==o)throw new Error("\u65e0\u6cd5\u8bc6\u522b\u7684\u5730\u5740\u7c7b\u578b");i=le(e.subarray(n,n+16)),s=16}n+=s;const l=r.getUint16(n);return n+=2,n+=2,{command:a,port:l,addr:i,password:Z.decode(e.subarray(0,56)),headerLength:n}}(c):Ae(c)}catch(e){if(/\u5934\u90e8\u8fc7\u77ed/.test(e.message||""))return;throw e}!p&&f&&2!==m.command&&(p=!0,u(new Uint8Array([0,0])));const b=tt(c.byteLength>m.headerLength?c.subarray(m.headerLength):null);if("unknown"===b&&!a)return void(d||(d=setTimeout(()=>{d=null,h(new Uint8Array(0),!0).catch(e=>{try{o.close(1011,String(e&&e.message||e))}catch(e){}})},80)));if(d&&(clearTimeout(d),d=null),l)return;if(l=!0,2===m.command){try{const e=c.subarray(m.headerLength);if(53===m.port&&e.byteLength>=12){const t=await async function(e){if(!e||e.byteLength<17)return null;const t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=t.getUint16(0);if(32768&t.getUint16(2))return null;if(1!==t.getUint16(4))return null;let n=12,a=[];for(;n<e.byteLength;){const r=t.getUint8(n);if(0===r){n++;break}if(!(192&~r)){n+=2;break}if(n+1+r>e.byteLength)return null;a.push(Z.decode(e.subarray(n+1,n+1+r))),n+=1+r}if(n+4>e.byteLength||0===a.length)return null;const o=t.getUint16(n),i=t.getUint16(n+2),s=n+4;if(1!==o&&28!==o)return null;const l=a.join("."),c=e.subarray(12,s);let d=null;for(const t of Me)try{const e=await gt(t+"?name="+encodeURIComponent(l)+"&type="+o,{headers:{accept:"application/dns-json"}},5e3);if(!e||!e.ok)continue;const r=await e.json();if(!r||0!==r.Status)continue;const n=(r.Answer||[]).filter(e=>e.type===o&&(1===e.type?se(String(e.data)):/^[0-9a-fA-F:]+$/.test(String(e.data))));if(n.length){d=n;break}}catch(e){}if(!d)return null;const p=new Uint8Array(12),u=new DataView(p.buffer);u.setUint16(0,r),u.setUint16(2,33152),u.setUint16(4,1),u.setUint16(6,d.length);const h=[p,c];for(const e of d){const t=String(e.data),r=1===e.type?Uint8Array.from(t.split(".").map(Number)):Re(t);if(r.length!==(1===e.type?4:16))continue;const n=new Uint8Array(10),a=new DataView(n.buffer);a.setUint16(0,49164),a.setUint16(2,e.type),a.setUint16(4,0===i?1:i),a.setUint32(6,Number(e.TTL)||300),h.push(n,new Uint8Array([r.length>>8&255,255&r.length]),r)}let m=0;h.forEach(e=>m+=e.byteLength);const f=new Uint8Array(m);let b=0;for(const e of h)f.set(e,b),b+=e.byteLength;return f}(e);t&&u(t)}}catch(e){}try{o.close(1e3)}catch(e){}return}const g=await rt(m,r,e.cf&&e.cf.colo,0,b);i=g,s=g.writable.getWriter(),g._preamble&&g._preamble.byteLength>0&&u(g._preamble),c&&c.byteLength>m.headerLength&&await s.write(c.subarray(m.headerLength)),c=null,async function(e,t,r){try{for(;;){const{done:r,value:n}=await e.read();if(r)break;t(n)}}catch(e){}try{r&&r()}catch(e){}}(g.readable.getReader(),u,()=>{try{o.close(1e3)}catch(e){}})},m=function(e,t){if(!e)return null;const r=String(e).trim();if(!r||r.length>8192)return null;if(!/^[A-Za-z0-9\-_+/=]+$/.test(r))return null;let n=null;try{const e=r.replace(/-/g,"+").replace(/_/g,"/"),t=e.length%4?"=".repeat(4-e.length%4):"",a=atob(e+t);n=new Uint8Array(a.length);for(let e=0;e<a.length;e++)n[e]=a.charCodeAt(e)}catch(e){return null}if(!n.byteLength||n.byteLength>6144)return null;if(n.byteLength>=17&&0===n[0]){const e=function(e){const t=String(e||"").replace(/-/g,"");if(32!==t.length)return null;const r=new Uint8Array(16);for(let e=0;e<16;e++){const n=parseInt(t.substr(2*e,2),16);if(isNaN(n))return null;r[e]=n}return r}(t.uuid);if(!e)return n;for(let t=0;t<16;t++)if(n[t+1]!==e[t])return null;return n}return t.enableTrojan&&n.byteLength>=58&&13===n[56]&&10===n[57]&&Z.decode(n.subarray(0,56)).toLowerCase()===Ue(t.trojanPassword||t.uuid)?n:null}(e.headers.get("sec-websocket-protocol"),r);m&&h(m).catch(e=>{try{o.close(1011,String(e&&e.message||e))}catch(e){}}),o.addEventListener("message",async e=>{try{const t="string"==typeof e.data?O.encode(e.data):new Uint8Array(e.data);l?s?await s.write(t):c=c?Oe(c,t):t:await h(t)}catch(e){try{o.close(1011,String(e&&e.message||e))}catch(e){}}});const f=()=>{if(d&&(clearTimeout(d),d=null),i){try{i.close()}catch(e){}i=null}};return o.addEventListener("close",f),o.addEventListener("error",f),new Response(null,{status:101,webSocket:a})}(r,h);if("POST"===r.method&&h.enableXhttp){Wt(n,r.cf&&r.cf.colo);try{return await async function(e,t){const r=e.body.getReader(),n=await r.read();if(n.done)return new Response("empty",{status:400});const a=Ae(n.value),o=await rt(a,t,e.cf&&e.cf.colo,0,tt(n.value.subarray(a.headerLength))),i=o.writable.getWriter();await i.write(n.value.subarray(a.headerLength)),(async()=>{try{for(;;){const{done:e,value:t}=await r.read();if(e)break;await i.write(t)}}catch(e){}try{await i.close()}catch(e){}})();const s=new ReadableStream({async start(e){e.enqueue(new Uint8Array([0,0])),o._preamble&&o._preamble.byteLength>0&&e.enqueue(o._preamble);const t=o.readable.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;e.enqueue(n)}}catch(e){}try{e.close()}catch(e){}try{o.close()}catch(e){}},cancel(){try{o.close()}catch(e){}}});return new Response(s,{status:200,headers:{"content-type":"application/octet-stream","x-accel-buffering":"no","cache-control":"no-store"}})}(r,h)}catch(e){return ge({ok:!1,msg:t("eGh0dHA=")+" \u9519\u8bef: "+(e.message||e)},500)}}}if(P&&"sub"===k[1]){if(!Vr(r,"sub"))return Tr();const e=k.length>=3?k[2]:"";try{if(n._ctx&&"function"==typeof n._ctx.waitUntil)n._ctx.waitUntil(Ie(n,h));else try{await Ie(n,h)}catch(e){}if(h.quotaDisabled)return new Response(l+"\uff1a\u8d26\u6237\u5f53\u65e5\u989d\u5ea6\u5df2\u8fbe 99%\uff0c\u8ba2\u9605\u5df2\u81ea\u52a8\u505c\u7528\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}});if(h.quotaStrict)try{const e=await Ce(n,h);if(e&&e.configured&&"number"==typeof e.percent&&e.percent>95)return new Response(l+"\uff1a\u4e25\u683c\u6a21\u5f0f\u5df2\u542f\u7528\uff0c\u5f53\u65e5\u989d\u5ea6\u5df2\u8fbe "+e.percent+"%\uff08\u9608\u503c 95%\uff09\uff0c\u5df2\u505c\u6b62\u4e0b\u53d1\u4efb\u4f55\u8282\u70b9\uff08\u6b21\u65e5\u81ea\u52a8\u6062\u590d\uff09",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}})}catch(e){}const a=h;if(h.quotaAuto)try{const e=await Ce(n,h);if(e.configured&&e.today&&e.today.requests>=Math.round(6e4)){const t=e.today.requests/e.limit,r=Math.max(.1,(1-t)/.4);a._quotaCap=Math.max(20,Math.round(1e3*r))}}catch(e){}const i=await async function(){const t=h.preferredIPs||[],i=[h.uuid,r.url,e,o,t.length,t[0]&&t[0].ip||"",h.nodeLimitCount,h.enableVless?1:0,h.enableTrojan?1:0,h.enableXhttp?1:0,h.optimizer&&h.optimizer.subMode||"",h.host||"",h.homeWan?1:0,h._quotaCap||0,String(h.mode||""),h.warpEnable?1:0,(h.warpConf||"").length,h.masqueEnable?1:0,(h.masqueConf||"").length].join("|"),s=Date.now(),l=cr.get(i);if(l&&s-l.t<6e4)return l.r;const c=await wr(a,r.url,e,o,r.cf&&r.cf.colo,r.cf&&r.cf.country,n);return cr.size>8&&cr.clear(),cr.set(i,{r:c,t:s}),c}(),s={[t("Y2xhc2g=")]:l+".yaml",[t("c3Rhc2g=")]:l+".yaml",[t("c2luZ2JveA==")]:l+".json",[t("c3VyZ2U=")]:l+".conf",[t("c3VyZmJvYXJk")]:l+".conf",[t("bG9vbg==")]:l+".conf",[t("cXVhbng=")]:l+".conf"}[e]||l;return new Response(i.body,{status:200,headers:{"Content-Type":i.type+"; charset=utf-8","Cache-Control":"no-store","Content-Disposition":'attachment; filename="'+s+"\"; filename*=utf-8''"+s}})}catch(e){return new Response("\u8ba2\u9605\u751f\u6210\u5931\u8d25: "+(e&&e.message||e),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}if(P&&1===k.length&&Ir(r,o))return Vr(r,"panel")&&await Cr(r,h)?Sr(b):Tr();if(P&&"api"===k[1]){if(!Vr(r,"panel"))return Tr();const i=k[2]||"";if(function(e,t){return!e.admin&&!e.adminInit&&!(!t.K||"function"!=typeof t.K.get)}(h,n))return Ir(r,o)||r.headers.get("Cookie")?ge({ok:!1,status:403,msg:"\u8bf7\u5148\u5b8c\u6210\u9996\u6b21\u8bbe\u7f6e\uff1a\u8bbe\u7f6e\u7ba1\u7406\u5bc6\u7801\u540e\u518d\u8bbf\u95ee\u9762\u677f"},403):Rr();if(!await Cr(r,h))return Ir(r,o)||r.headers.get("Cookie")?ge({ok:!1,status:403,msg:"\u672a\u6388\u6743\uff08\u9700\u8981\u7ba1\u7406\u5bc6\u7801\uff09"},403):Rr();if("config"===i){if("GET"===r.method)return ge({ok:!0,data:Object.assign({},h,{version:s})});if("POST"===r.method)try{const e=await r.json();let t=!1;if(n.K&&"function"==typeof n.K.get)try{const e=await n.K.get("config",{cacheTtl:30});e&&void 0!==JSON.parse(e).quotaAuto&&(t=!0)}catch(e){}const a=Object.assign(JSON.parse(JSON.stringify(h)),e);"home"===String(a.mode||"").toLowerCase()?a.homeWan=!0:a.homeWan=!1,t||!1!==a.quotaAuto||Boolean(a.cfAccountId&&a.cfApiToken||n.CF_ACCOUNT_ID&&n.CF_API_TOKEN)&&(a.quotaAuto=!0),e.optimizer&&"object"==typeof e.optimizer&&(a.optimizer=Object.assign(a.optimizer,e.optimizer)),e.preferredIPs&&Array.isArray(e.preferredIPs)&&(a.preferredIPs=e.preferredIPs),await xe(n,a);const o=await ve(n,r.url);return ge({ok:!0,data:Object.assign({},o,{version:s}),msg:"\u5df2\u4fdd\u5b58\u5e76\u751f\u6548"})}catch(e){return ge({ok:!1,msg:"\u4fdd\u5b58\u5931\u8d25: "+(e.message||e)},500)}}if("reset"===i){if("POST"!==r.method)return ge({ok:!1,msg:"\u4ec5\u652f\u6301 POST"},405);try{if(!n.K||"function"!=typeof n.K.delete)return ge({ok:!1,msg:"\u672a\u7ed1\u5b9a KV \u547d\u540d\u7a7a\u95f4\uff0c\u65e0\u9700\u91cd\u7f6e"},400);await n.K.delete("config");const e=c+"=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax";return new Response(JSON.stringify({ok:!0,msg:"\u5df2\u91cd\u7f6e\uff1aKV \u5df2\u6e05\u7a7a\uff0c\u9762\u677f\u8fd8\u539f\u4e3a\u521d\u59cb\u90e8\u7f72\u72b6\u6001"}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":e}})}catch(e){return ge({ok:!1,msg:"\u91cd\u7f6e\u5931\u8d25: "+(e.message||e)},500)}}if("status"===i)return ge({ok:!0,data:{version:s,kind:"novel"===d()?"\u5c0f\u8bf4\u6df7\u6dc6\u7248":"obfuscated"===d()?"\u6df7\u6dc6\u7248":"\u660e\u6587\u7248",host:a.hostname,path:b,region:r.cf&&r.cf.colo||"unknown",visitorCountry:r.cf&&r.cf.country||"",usageColo:await zt(n),kv:!(!n.K||"function"!=typeof n.K.get),workersDev:/\.workers\.dev$/i.test(a.hostname),adminEnv:!(!n.ADMIN&&!n.admin)}});if("update"===i)try{const e=await async function(){const e=Date.now();if(u&&e-u.t<6e4)return u.r;const r="novel"===d()?"\u5c0f\u8bf4\u6df7\u6dc6":"obfuscated"===d()?"\u6df7\u6dc6":"\u660e\u6587";let n=null,a="",o="";const i="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent(t("Q0ZOZXh0")+"-\u660e\u6587\u7248.js");try{const e=await fetch(i,{headers:{"User-Agent":"Mozilla/5.0 ("+t("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});if(e.ok){const t=f(await e.text());t&&(n=t)}}catch(e){o=e&&e.message||String(e)}if(n){const o="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent("\u5c0f\u8bf4\u6df7\u6dc6"===r?t("Q0ZOZXh0")+"-\u5c0f\u8bf4\u6df7\u6dc6\u7248.js":"\u6df7\u6dc6"===r?t("Q0ZOZXh0")+"-\u6df7\u6dc6\u7248.js":t("Q0ZOZXh0")+"-\u660e\u6587\u7248.js");try{const e=await fetch(o,{headers:{"User-Agent":"Mozilla/5.0 ("+t("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});e.ok&&(a=await e.text())}catch(e){}return u={t:e,r:{current:s,kind:r,latest:n,hasUpdate:m(n,s)>0,code:a,checkedAt:e}},u.r}const l="https://raw.githubusercontent.com/"+p+"/main/"+encodeURIComponent(t("Q0ZOZXh0")+"-\u6df7\u6dc6\u7248.js");try{const e=await fetch(l,{headers:{"User-Agent":"Mozilla/5.0 ("+t("Q0ZOZXh0")+")"},signal:AbortSignal.timeout(1e4)});if(e.ok){const t=f(await e.text());t&&(n=t)}}catch(e){o=e&&e.message||String(e)}return n?(u={t:e,r:{current:s,kind:r,latest:n,hasUpdate:m(n,s)>0,code:"",checkedAt:e}},u.r):{current:s,kind:r,latest:null,hasUpdate:!1,code:"",error:o||"\u672a\u5728\u4ed3\u5e93\u4e2d\u627e\u5230\u7248\u672c\u4fe1\u606f"}}(),r={current:e.current,latest:e.latest,hasUpdate:e.hasUpdate,kind:e.kind,error:e.error||""};return e.hasUpdate&&e.code&&(r.code=e.code),ge({ok:!0,data:r})}catch(e){return ge({ok:!1,msg:"\u68c0\u6d4b\u5931\u8d25: "+(e.message||e)},500)}if("quota"===i)try{return ge({ok:!0,data:await Ce(n,h)})}catch(e){return ge({ok:!1,msg:"\u67e5\u8be2\u5931\u8d25: "+(e.message||e)},500)}if("sub"===i){const e=a.searchParams.get("fmt")||"";try{const t=await wr(h,r.url,e,o,r.cf&&r.cf.colo,r.cf&&r.cf.country,n);return ge({ok:!0,type:t.type,body:t.body})}catch(e){return ge({ok:!1,msg:"\u8ba2\u9605\u751f\u6210\u5931\u8d25: "+(e.message||e)},500)}}if("candidates"===i){if("POST"!==r.method)return ge({ok:!1,msg:"\u4ec5\u652f\u6301 POST"},405);try{const e=await r.json().catch(()=>({})),t=await st(Object.assign({},h.optimizer,e));if(!t.candidates.length){const e=t.stats||{},r=[e.presetErr&&"\u9884\u8bbe\u6e90: "+e.presetErr,e.customErr&&"\u81ea\u5b9a\u4e49\u6e90: "+e.customErr].filter(Boolean).join("\uff1b");return ge({ok:!1,msg:"\u6ca1\u6709\u53ef\u6d4b\u7684 IP"+(r?"\uff08"+r+"\uff09":"\uff0c\u8bf7\u6362\u4e00\u4e2a\u6570\u636e\u6e90")},400)}return ge({ok:!0,data:t.candidates,stats:t.stats})}catch(e){return ge({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25: "+(e.message||e)},500)}}if("hwlist"===i)try{const t=a.searchParams.get("country")||"",r=a.searchParams.get("proto")||"tcp",n=await q(t);if(!n.length)return ge({ok:!1,msg:"VPN Gate \u5217\u8868\u4e3a\u7a7a\uff08\u53ef\u80fd\u88ab\u9650\u6d41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff09"},400);const o=n.slice(0,30),i=await tr(o,t=>{const r=String(ee(K(t.ovpnB64)).remote||"").split(/\s+/),n=parseInt(r[1],10)||0;return n?async function(t,r){const n=Date.now();try{const a=e({hostname:t,port:r});await Promise.race([a.opened,new Promise((e,t)=>setTimeout(()=>t(new Error("tcp timeout")),2e3))]);const o=Date.now()-n;try{a.close()}catch(e){}return{ok:!0,delay:o}}catch(e){return{ok:!1,delay:-1}}}(t.ip,n):{ok:!1,delay:-1}}),s=o.map((e,t)=>{const n=ee(K(e.ovpnB64)),a=String(n.remote||"").split(/\s+/),o=parseInt(a[1],10)||443;return{host:e.host,ip:e.ip,port:o,tcp:o,udp:o,speed:e.speed,ping:e.ping,country:e.country,proto:n.proto||r,ovpn:n,alive:!(!i[t]||!i[t].ok),delay:i[t]&&i[t].ok?i[t].delay:-1}});return s.sort((e,t)=>(t.alive?1:0)-(e.alive?1:0)||(t.speed||0)-(e.speed||0)),ge({ok:!0,data:s,proto:r})}catch(e){return ge({ok:!1,msg:"VPN Gate \u62c9\u53d6\u5931\u8d25: "+(e.message||e)},500)}if("hwrefresh"===i)try{const e=await ve(n),t=await ie(n,e,!0);return ge({ok:!0,data:t,count:t.length})}catch(e){return ge({ok:!1,msg:"VPN Gate \u5237\u65b0\u5931\u8d25: "+(e.message||e)},500)}if("domains"===i)try{const e=G[a.searchParams.get("source")||"wetest_cname"]||G.wetest_cname,r=await fetch(e.url,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout(6e3)});return r.ok?ge({ok:!0,data:function(e){const r=new Set,n=[],a=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let o;for(;o=a.exec(e);){const e=o[0].toLowerCase();!r.has(e)&&(e.includes("cloudflare")||e.includes(t("YmVzdGNm"))||e.includes("182682")||e.includes(t("MDkwMjI3"))||e.endsWith(".xyz")||e.endsWith(".top"))&&(r.add(e),n.push(e))}return n.slice(0,10)}(await r.text())}):ge({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25 HTTP "+r.status})}catch(e){return ge({ok:!1,msg:"\u62c9\u53d6\u5931\u8d25: "+(e.message||e)},500)}}return Rr()}(r,Object.assign({},n,{_ctx:a})).catch(Dr),scheduled:async(e,t,r)=>async function(e,t){rr=t;const r=String(t.HOME_WAN_AUTO||"").toLowerCase();if("1"===r||"true"===r)try{if(await Nr(t,"hwrefreshAt",9e5)){const e=await ve(t);e.homeWan&&await ie(t,e,!0)}}catch(e){}const n=String(t.BESTIP_AUTO||"").toLowerCase();if("1"===n||"true"===n)try{await Nr(t,"autobestAt",18e5)&&await async function(e){const t=await ve(e),r=(await st(t.optimizer)).candidates||[];if(!r.length)return{ok:!1,msg:"\u6ca1\u6709\u53ef\u6d4b\u7684 IP"};const n=(await async function(e,t,r){t=Math.max(1,Math.min(50,Number(t)||5)),r=Math.max(500,Number(r)||5e3);const n=[];let a=0;return await Promise.all(Array.from({length:t},async function(){for(;a<e.length;){const t=e[a++],o=await lt(t.ip,t.port,r);n.push(o)}})),n.sort((e,t)=>(e.latency<0?1e9:e.latency)-(t.latency<0?1e9:t.latency)),n}(r,t.optimizer.threads||5,5e3)).filter(e=>e.ok).slice(0,t.optimizer.count||20);if(!n.length)return{ok:!1,msg:"\u6d4b\u901f\u65e0\u53ef\u7528 IP"};const a=n.map(e=>({ip:e.ip,port:e.port||443,name:""})),o=new Set((t.preferredIPs||[]).map(e=>e.ip)),i=new Set(a.map(e=>e.ip)),s=!(o.size===i.size&&[...i].every(e=>o.has(e)));s&&(t.preferredIPs=a,await xe(e,t));try{await Ie(e,t)}catch(e){}return{ok:!0,changed:s,count:a.length}}(t)}catch(e){}}(0,t).catch(()=>{})};