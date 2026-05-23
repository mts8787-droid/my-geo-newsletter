const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as n,b as Y,R as ao,L as cn,D as dn,G as so,A as pn,c as _e,S as kt,C as Ue,d as jo,e as lo,P as un,f as fn,h as co,F as hn,T as gn,i as yn}from"./react-BzJiA2Qb.js";import{R as mn}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const bn="modulepreload",xn=function(t){return"/admin/weekly-report/"+t},po={},He=function(e,o,a){let l=Promise.resolve();if(o&&o.length>0){let f=function(m){return Promise.all(m.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=f(o.map(m=>{if(m=xn(m),m in po)return;po[m]=!0;const h=m.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":bn,h||(g.as="script"),g.crossOrigin="",g.href=m,p&&g.setAttribute("nonce",p),document.head.appendChild(g),h)return new Promise((c,C)=>{g.addEventListener("load",c),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(f){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=f,window.dispatchEvent(s),!s.defaultPrevented)throw f}return l.then(f=>{for(const s of f||[])s.status==="rejected"&&r(s.reason);return e().catch(r)})},vn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Te={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},Po={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},ve={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},me={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},wn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(vn.map((t,e)=>[t,e]));const Do={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Mo=new Set(Object.values(ve)),uo=[...new Set(Object.values(Do))].filter(t=>!Mo.has(t));uo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:uo,validCodes:[...Mo]});const K="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Cn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function pe(t){const e=Cn.indexOf(t);return e>=0?e:999}function Ct(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const fo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function No(t){return fo.filter(e=>t.includes(e)).concat(t.filter(e=>!fo.includes(e)))}const kn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function _o(t){return kn[String(t||"").trim().toUpperCase()]||t}function be(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Sn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function We(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ge(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Fn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Te,a=Po,l=[],r=[];Object.entries(t).forEach(([p,m])=>{if(!m)return;const h=m.Total||m.TTL||m.TOTAL;if(h){const d=h.LG||h.lg||[],g=d.length>0?d[d.length-1]:null,c=d.length>=2?d[d.length-2]:null;let C="",u=0;Object.entries(h).forEach(([k,w])=>{if(k==="LG"||k==="lg")return;const v=Array.isArray(w)&&w.length?w[w.length-1]:0;v>u&&(u=v,C=k)}),g!=null&&g>0&&l.push({id:p,kr:o[p]||p,bu:a[p]||"OTHER",score:g,prev:c,vsComp:u,compName:C,category:o[p]||p})}Object.entries(m).forEach(([d,g])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const c=g.LG||g.lg||[],C=c.length>0?c[c.length-1]:null,u=c.length>=2?c[c.length-2]:null;if(C==null||C<=0)return;let k="",w=0;Object.entries(g).forEach(([v,A])=>{if(v==="LG"||v==="lg")return;const P=Array.isArray(A)&&A.length?A[A.length-1]:0;P>w&&(w=P,k=v)}),r.push({product:o[p]||p,country:d,score:C,prev:u,compScore:w,compName:k})})});const f=(e==null?void 0:e[e.length-1])||"This Week",s=(e==null?void 0:e[e.length-2])||"Last Week";return{products:l,productsCnty:r,lastLabel:f,prevLabel:s}}function En(t,e,o,a){if(!t.length)return"";const l=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],f={};t.forEach(p=>{const m=p.bu||"OTHER";f[m]||(f[m]=[]),f[m].push(p)});const s=[];return r.forEach(p=>{const m=(f[p]||[]).slice().sort((h,d)=>pe(h.kr||h.category||h.id)-pe(d.kr||d.category||d.id));m.forEach((h,d)=>{const g=Sn(h.score,h.prev),c=ge(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${d===0?`<td rowspan="${m.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;">${Ct(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;font-weight:700;background:${c};">${be(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;background:${c};">${be(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;background:${c};">${Ct(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;font-weight:700;background:${c};">${We(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;">${g}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${l.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.wow}</th>
      </tr>
    </thead>
    <tbody>${s.join("")}</tbody>
  </table>`}function An(t,e,o,a){const l=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},f=new Set,s=new Set;t.forEach(c=>{!c.country||!c.product||(f.add(c.country),s.add(c.product),r[c.product]||(r[c.product]={}),r[c.product][c.country]=c)});const p=No(Array.from(f)),m=Array.from(s).sort((c,C)=>pe(c)-pe(C));if(!m.length||!p.length)return"";const h={};(o||[]).forEach(c=>{[c.kr,c.category,c.id,c.en].filter(Boolean).forEach(u=>{h[u]=c})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+p.map(c=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Ct(_o(c))}</th>`).join(""),g=[];return m.forEach((c,C)=>{const u=C%2===0?"#FFFFFF":"#FAFAFA",k=h[c],v=(k?ge(k.score,k.vsComp):null)||u,A=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${v};">${k?be(k.score):"—"}</td>`,P=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${v};">${k?We(k.score,k.vsComp):"—"}</td>`,B=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;background:${v};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?Ct(k.compName):"—"}</td>`,j=p.map(O=>{var E;const b=(E=r[c])==null?void 0:E[O],S=(b?ge(b.score,b.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${S};">${b?be(b.score):"—"}</td>`}).join(""),$=p.map(O=>{var E;const b=(E=r[c])==null?void 0:E[O],S=(b?ge(b.score,b.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${S};">${b?We(b.score,b.compScore):"—"}</td>`}).join(""),_=p.map(O=>{var E;const b=(E=r[c])==null?void 0:E[O],S=(b?ge(b.score,b.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;background:${S};color:#1A1A1A;font-weight:600;">${b!=null&&b.compName?Ct(b.compName):"—"}</td>`}).join("");g.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${K};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Ct(c)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};font-weight:600;background:#F5F5F5;white-space:nowrap;">${l.lg} (%)</td>
        ${A}${j}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};background:#F5F5F5;white-space:nowrap;">${l.ratio}</td>
        ${P}${$}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${B}${_}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${l.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${g.join("")}</tbody>
  </table>
  </div>`}function Tn(t,e,o,a){const l=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},r={},f=new Set,s=new Set;t.forEach(g=>{!g.country||!g.product||(f.add(g.country),s.add(g.product),r[g.product]||(r[g.product]={}),r[g.product][g.country]=g)});const p=No(Array.from(f)),m=Array.from(s).sort((g,c)=>pe(g)-pe(c));if(!m.length||!p.length)return"";const h=p.map(g=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Ct(_o(g))}</th>`).join(""),d=m.map(g=>{const c=p.map(C=>{var j;const u=(j=r[g])==null?void 0:j[C];if(!u||u.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${K};text-align:center;color:#999;">—</td>`;const k=u.score,w=u.prev,v=w!=null?+(k-w).toFixed(1):null,A=v==null?"#999":v>0?"#16A34A":v<0?"#DC2626":"#666",P=v==null?"":v>0?"▲":v<0?"▼":"─",B=v!=null?`${P}${Math.abs(v).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${K};text-align:center;">
        <div style="font-weight:700;color:#111;">${be(k)}%</div>
        <div style="font-size:9px;color:${A};">${B}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Ct(g)}</td>
      ${c}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${l.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${l.product}</th>
      ${h}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${K};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Bn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((r,f)=>r+(f.score||0),0),l=t.map((r,f)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:center;">${f+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};">${Ct(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;">${a>0?(r.score/a*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function Ln(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,p)=>(p.citations||0)-(s.citations||0));const a=o.slice(0,20),l=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((s,p)=>s+(p.citations||0),0),f=a.map((s,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};">${Ct(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};">${Ct(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;">${r>0?(s.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${l.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${l.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${l.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${f}</tbody>
  </table>`}function $n(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},l=Object.keys(o).filter(s=>o[s]!=null);if(!l.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},f=l.map(s=>{const p=o[s]||0,m=a[s]||0,h=p-m,d=h>0?"LG":h<0?"SS":"=",g=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",c=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${g};color:${c};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};font-weight:${s==="TTL"?"900":"600"};">${Ct(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;">${m.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${f}</tbody>
  </table>`}function Rn(t,e){var f;if(!t||!t.length)return"";const o=((f=t[0])==null?void 0:f.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function l(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(s=>{const p=(s.monthRate||0).toFixed(0),m=(s.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${K};background:#F5F5F5;">${Ct(s.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.monthRate)};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.progressRate)};">${m}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${K};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${K};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function Je(t,e,o,a,l={},r="ko",f=[],s=[],p={}){const{weeklyAll:m={},weeklyLabels:h=[],categoryStats:d=null}=p,g=Fn(m,h),c=g.products.length?g.products:o,C=g.productsCnty.length?g.productsCnty:f,u=g.lastLabel,k=g.prevLabel,w=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",v=t.period||u||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Ct(w)} — ${Ct(v)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LGEIText'; font-weight: 100 300; font-style: normal; src: url('/font/LGEIText%20Light.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 400 500; font-style: normal; src: url('/font/LGEIText%20Regular.otf') format('opentype'), url('/font/LGEIText%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 600; font-style: normal; src: url('/font/LGEIText%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 700 900; font-style: normal; src: url('/font/LGEIText%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${K} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${K};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${K};">${Ct(w)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${K};">${Ct(v)} · ${u?`${Ct(u)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${En(c,r,u,k)}
    ${Tn(C,r,u,k)}
    ${An(C,r,c,u)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${K};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Bn(a,r)}
    ${Ln(s,r)}
    ${$n(l,r)}

    ${Rn(d,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${K};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const mt="#CF0652",L="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",In=`1. GEO 최적화의 중요성 및 방향성 정의

LLM 모델의 발전에 따라 마케팅 패러다임이 기존 자사몰 유입 트래픽 중심에서 생성형 AI 답변 내 브랜드 노출(Visibility) 및 자사 콘텐츠 인용(Citation) 확보로 전환되고 있습니다. 닷컴뿐만 아니라 제3자 콘텐츠를 크로스체크하는 AI의 특성상, 외부 접점 채널의 콘텐츠를 AI 향으로 최적화하는 활동은 향후 AI 커머스 및 마케팅 경쟁력 유지의 핵심 요소입니다. 이에 따라 Brand Visibility를 핵심 KPI로 설정하고, AI Citations 및 Readability를 보조 지표로 선정하여 실시간 시각화 대시보드를 통해 성과를 관리하고 있습니다.

GEO KPI Dashboard 바로가기

2. 4월 실적 리뷰 - AI 노출 및 인용 현황

2.1 글로벌 성과 요약

4월 기준 글로벌 Visibility 41.9%를 기록하며 주요 경쟁사(38.5%)를 3.4%p 앞서며 리더십을 유지하고 있습니다. 모니터(60.1%), 세탁기(40.2%), 냉장고(44%), RAC(44.6%)는 안정적인 우위를 점하고 있으나, TV(85.9%)는 전월 대비 -1.5%p 하락하며 경쟁사 대비 97% 수준에 머물러 있어 주의가 필요합니다.

2.2 지역별 세부 현황

북미 (미국·캐나다): 세탁기(미국 139%, 캐나다 129%)와 냉장고(양국 116%)에서 삼성 대비 확실한 우위를 유지 중입니다. TV는 가시성 자체는 높으나(미국 88.1%, 캐나다 79.1%), 경쟁비가 각각 97%, 91%로 접전 상황입니다. 청소기(8~11%) 및 식기세척기(68~71%)는 Dyson, Bosch 등 전문 브랜드 대비 열세가 지속되고 있습니다.

유럽 (영국·독일·스페인): 스페인은 세탁기(121%) 및 냉장고(101%)에서 우위를 보이며 HA 카테고리 경쟁력이 양호합니다. 반면 독일은 Bosch의 영향으로 세탁기 63%, 식기세척기 8%의 낮은 경쟁비를 기록했습니다. TV는 3개국 모두 삼성과 90~98% 수준으로 접전 중이며, 청소기(1~4%)는 Dyson 대비 극히 열세입니다.

중남미 (브라질·멕시코): RAC 영역에서 Media 대비 최고 155%(멕시코)의 압도적 우위를 기록했습니다. 브라질은 Cooking에서 243%의 점유율로 리더십을 보였으나 냉장고(89%)는 열세입니다. 멕시코는 냉장고(103%)와 세탁기(112%) 모두 우위를 유지하고 있습니다.

아시아 (베트남·호주·인도): 세탁기(107~119%)는 3개국 모두 우세하며, 냉장고 역시 상대적으로 양호한 성과를 보입니다. 특히 인도는 모니터(116%), RAC(134%), Cooking(101%) 등 전 품목에서 균형 잡힌 경쟁력을 확보했습니다.

2.3 Citation(인용) 분석

전체 인용의 43.2%가 Retail 및 Review 채널(약 499만 건)에 집중되어 AI 답변의 핵심 근거로 활용되고 있습니다. 영어권은 Reddit(30만 건), 비영어권은 YouTube(39만 건)가 주요 인용 소스로 기능하며 자사 브랜드 노출을 주도합니다. 기술적으로는 자사 닷컴이 Experience 영역에서 우세하나, Support 영역은 경쟁사의 SSR 적용으로 인해 인용량이 LG 대비 2배 이상 높게 나타나고 있습니다.

3. 향후 추진 방향 및 Action Items

① Weak Content 개선: Support Page 기술 개선 (진행 중)

인용률이 낮은 서포트 영역의 원인인 콘텐츠 노출 구조(SSR 미적용)를 개선하고 있습니다. 특히 고인용 콘텐츠의 핵심인 FAQ를 체계적으로 관리하고 데이터 라벨링(스키마 마크업)을 강화하여 AI의 데이터 수집 효율을 높일 계획입니다.

② GEO Agent 개발 완료 및 성과 분석 PoC 진행 (4월 완료)

Summary Box와 FAQ를 자동 생성하고 46개 항목의 기술적 결함을 자가 진단·수정하는 'GEO Agent' PoC를 진행 중입니다. Akamai CDN을 활용해 사이트 구조 변경 없이 AI 봇 가독성을 극대화하며, 4월 말 영향도 분석 후 글로벌 확산 계획을 수립합니다.

③ 외부 채널 콘텐츠 관리 (상시 진행)

리테일 채널 인용 극대화를 위해 'GEO 친화적 PDP 콘텐츠 자동 제작 Agent'를 개발하여 글로벌 운영을 준비 중입니다. Reddit과 YouTube 대응을 위한 커뮤니티 콘텐츠 제작 가이드를 수립하고 글로벌 교육을 완료하였습니다.

④ Best Practice의 글로벌 확대 적용 (상시 진행)

인용 Top 10 콘텐츠가 집중된 미국 법인의 우수 사례(FAQ 활용 및 SSR 구조)를 벤치마킹하여 글로벌 GP1 LG.com 표준으로 확대 적용을 추진합니다.

⑤ Global KPI Dashboard 오픈 및 성과 관리 (4월 완료)

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Se={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:In,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},jn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Pn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Dn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Mn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Nn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],_n=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Oo=3;function On(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Oo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function zn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Oo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Pe={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ne(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Gn(t){try{const e=await fetch(ne(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Un(t,e,o){try{const a=await fetch(ne(t).snapshots,{method:"POST",headers:Pe,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const l=await a.json();return l.ok?l.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function Hn(t,e,o){try{const a=await fetch(`${ne(t).snapshots}/${e}`,{method:"PUT",headers:Pe,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const l=await a.json();return l.ok?l.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function Wn(t,e){try{const o=await fetch(`${ne(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function St(t,e,o="ko",a=""){try{const l=await fetch("/api/generate-insight",{method:"POST",headers:Pe,body:JSON.stringify({type:t,data:e,lang:o,rules:a})});if(!l.ok){const f=await l.json().catch(()=>({}));throw new Error(f.error||`HTTP ${l.status}`)}const r=await l.json();if(!r.ok)throw new Error(r.error||"AI 생성 실패");return r.insight}catch(l){throw console.error("[API] generateAIInsight failed:",l.message),l}}async function Be(t){try{const e=await fetch(ne(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function ho(t){try{const e=await fetch(ne(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Vn(t,e,o={}){const{includePromptList:a=!1,includeReadability:l=!1}=o,[r,f]=await Promise.all([Be("dashboard").catch(()=>null),Be("visibility").catch(()=>null)]),s={...r||{},...f||{}};if(r&&Object.keys(r).forEach(E=>{s[E]==null&&r[E]!=null&&(s[E]=r[E])}),f!=null&&f.meta&&(r!=null&&r.meta)&&(s.meta={...r.meta||{},...f.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const p=s.meta||{},m=s.total||{},d=(s.productsPartial||s.products||[]).map(E=>{var F;const M=E.weekly||((F=s.weeklyMap)==null?void 0:F[E.id])||[],x=E.vsComp>0?E.score/E.vsComp*100:100;return{...E,weekly:M,monthly:E.monthly||[],compRatio:E.compRatio||Math.round(x),status:E.status||(x>=100?"lead":x>=80?"behind":"critical")}}),g=s.citations||[],c=s.dotcom||{},C=s.productsCnty||[],u=s.citationsCnty||[],k=s.weeklyLabels||null,w=s.weeklyAll||{},v=s.citationsByCnty||{},A=s.dotcomByCnty||{},P=e(d,C,g,u,"ko"),B=e(d,C,g,u,"en"),j={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},$={monthlyVis:s.monthlyVis||[],includePromptList:a,includeReadability:l},_=t(p,m,P.products,P.citations,c,"ko",P.productsCnty,P.citationsCnty,k,w,v,A,$,j),O=t({...p,title:p.title||"GEO KPI Dashboard"},m,B.products,B.citations,c,"en",B.productsCnty,B.citationsCnty,k,w,v,A,$,j),b=`${p.period||""} ${p.title||"KPI Dashboard"}`.trim(),S=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:b,htmlKo:_,htmlEn:O})})).json();if(!S.ok)throw new Error(S.error||"게시 실패");return S}async function go(t,e){try{const o=await fetch(ne(t).syncData,{method:"POST",headers:Pe,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Kn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Oe={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},yo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Ae(t,e,o,a,l){return l!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(r=>({...r,kr:r.en||Oe[r.kr]||r.kr,compName:r.compNameEn||yo[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||Kn[r.country]||r.country,product:r.productEn||Oe[r.product]||r.product,compName:r.compNameEn||yo[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||Oe[r.category]||r.category})),citationsCnty:a.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function qn(t,{from:e="ko",to:o="en"}={}){const l=[];for(let r=0;r<t.length;r+=20){const f=t.slice(r,r+20),s=await Promise.all(f.map(async p=>{if(!p||!p.trim())return p;const m=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,h=await fetch(m);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(g=>g[0]).join("")}));l.push(...s)}return l}const Fe=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Jn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Yn(t){const e=Jn.indexOf(t);return e>=0?e:999}function Ee(t){return Yn(t)}function zo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Xn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[zo(o)]=o)}),e}function mo(t,e){var d,g,c,C;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(c=(g=t==null?void 0:t._dashboard)==null?void 0:g.categoryStats)!=null&&c.length?[...t._dashboard.categoryStats].sort((u,k)=>Ee(u.category)-Ee(k.category)):null;const o=t.quantitativeGoals.rows,a=Xn((C=t.quantitativeResults)==null?void 0:C.rows),r=new Date().getMonth()+1-1,f=r>=3&&r<=12?`${r}월`:"3월";let s=e||t._month||f,p=Fe.indexOf(s);p<0&&(s="3월",p=0);const m=[...new Set(o.map(u=>u.taskCategory).filter(Boolean))],h=p>0?Fe[p-1]:null;return m.map(u=>{const k=o.filter(b=>b.taskCategory===u);let w=0,v=0,A=0,P=0,B=0,j=0;k.forEach(b=>{var x,F,N,I,R;const T=zo(b),S=a[T]||{},E=typeof((x=b.monthly)==null?void 0:x[s])=="number"?b.monthly[s]:0,M=typeof((F=S.monthly)==null?void 0:F[s])=="number"?S.monthly[s]:0;if(v+=E,w+=M,h){const U=typeof((N=b.monthly)==null?void 0:N[h])=="number"?b.monthly[h]:0,rt=typeof((I=S.monthly)==null?void 0:I[h])=="number"?S.monthly[h]:0;j+=U,B+=rt}for(let U=0;U<=p;U++){const rt=Fe[U];typeof((R=S.monthly)==null?void 0:R[rt])=="number"&&(A+=S.monthly[rt])}Fe.forEach(U=>{var rt;typeof((rt=b.monthly)==null?void 0:rt[U])=="number"&&(P+=b.monthly[U])})});const $=v>0?Math.round(w/v*1e3)/10:0,_=j>0?Math.round(B/j*1e3)/10:0,O=P>0?Math.round(A/P*1e3)/10:0;return{category:u,taskCount:k.length,targetMonth:s,monthRate:$,prevMonthRate:_,prevMonth:h,progressRate:O,monthActual:w,monthGoal:v,cumActual:A,annualGoal:P}}).sort((u,k)=>Ee(u.category)-Ee(k.category))}function Zn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function Qn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function Go(){const t=await He(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function Ve(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Rt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function tr(t,e){return Array.isArray(t)?t.length===0?(Ve(e,"invalid input: empty rows",{len:0}),!1):!0:(Ve(e,"invalid input: not an array",{type:typeof t}),!1)}function De(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const a=o.map(l=>String(l??"").trim().toLowerCase());return e.every(l=>a.some(r=>l instanceof RegExp?l.test(r):r===String(l).toLowerCase()))})}function er(t,e="sync"){var l,r,f;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((l=t.products)==null?void 0:l.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(f=t.weeklyLabels)!=null&&f.length&&t.weeklyLabels.every((p,m)=>p===`W${m+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const wt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},bo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],xo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function or(t,e,o,a,l={}){const r=await Go(),f=r.utils.book_new(),s=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(f,s,"meta");const p=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(f,p,"total");const m=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(u=>[u.id,u.bu,u.kr,u.score,u.prev,u.vsComp,u.compName])]);m["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(f,m,"products");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(u=>[u.id,u.kr,...u.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(f,h,"weekly");const d=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(u=>[u.rank,u.source,u.category,u.score,u.delta,u.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(f,d,"citations");const g=(l==null?void 0:l.lg)||{},c=(l==null?void 0:l.samsung)||{},C=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...bo.map(u=>`LG_${u}`),...xo.map(u=>`Samsung_${u}`)],[...bo.map(u=>g[u]??0),...xo.map(u=>c[u]??0)]]);C["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(f,C,"dotcom"),r.writeFile(f,"GEO_Newsletter_템플릿.xlsx")}function Gt(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),l=parseFloat(a)||0;return o?+l.toFixed(2):Math.abs(l)<=1&&l!==0?+(l*100).toFixed(2):+l.toFixed(2)}function Le(t){return t==null||String(t).trim()===""?null:Gt(t)}function qt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Jt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const nr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function rr(t){const e=Jt(t);return nr[e]||e}function de(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,l=0;const r=e.match(/(\d{4})/);if(r)l=parseInt(r[1]);else{const s=e.match(/(\d{2})년/);if(s)l=2e3+parseInt(s[1]);else{const p=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);p&&(l=2e3+parseInt(p[1]))}}const f=e.match(/(\d{1,2})월/);if(f)a=parseInt(f[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)a=o[s[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(a=parseInt(p[1]))}}return l?l*12+a:a}function ir(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],a=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(r=>{if(!r[0]||String(r[0]).startsWith("[")||String(r[0]).startsWith("※")||r[0]==="key")return;const f=String(r[0]).trim(),s=r[1]??"";if(o.includes(f))e[f]=parseInt(s)||(f==="titleFontSize"?24:10);else if(a.includes(f)){const p=String(s).trim().toLowerCase();e[f]=p==="y"||p==="yes"||p==="true"||p==="1"}else e[f]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(r=>{e[r]=!1}),e.weeklyLabels){const r=String(e.weeklyLabels).split(",").map(f=>f.trim()).filter(Boolean);r.length?e.weeklyLabels=r:delete e.weeklyLabels}if(e.period){const r={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},f=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);f&&(e.period=`${r[f[2]]||f[2]} ${f[1]}`)}if(e.dateLine){const r=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(r){const f=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${f[parseInt(r[2])]||r[2]} ${r[1]}`}}return Object.keys(e).length?{meta:e}:{}}function ar(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let l=!1;if(t.forEach(E=>{if(!E[0]||String(E[0]).startsWith("[")||String(E[0]).startsWith("※")||E[0]==="key")return;const M=String(E[0]).trim();(o.includes(M)||e.includes(M))&&(l=!0,e.includes(M)?a[M]=parseInt(E[1])||0:a[M]=Gt(E[1]))}),l&&Object.keys(a).length>=2)return{total:a};const r=t.find(E=>E.some(M=>String(M||"").trim().toUpperCase()==="LG")),f=r?r.findIndex(E=>String(E||"").trim().toUpperCase()==="LG"):4,s=r?r.findIndex(E=>{const M=String(E||"").trim().toUpperCase();return M==="SAMSUNG"||M==="SAMSUMG"}):5,p=s>=0?s:f+1,m=r?r.findIndex(E=>/date/i.test(String(E||"").trim())):0,h=r?r.findIndex(E=>/countries|country/i.test(String(E||"").trim())):2,d=r?r.findIndex(E=>/divisions?/i.test(String(E||"").trim())):3,g=[];t.filter(E=>{const M=String(E[m>=0?m:0]||"").trim();return M&&!M.startsWith("[")&&!M.startsWith("※")&&!/^date$/i.test(M)&&!/^key$/i.test(M)}).forEach(E=>{const M=String(E[m>=0?m:0]||"").trim(),x=Jt(E[h>=0?h:2]),F=String(E[d>=0?d:3]||"").trim().toUpperCase(),N=Gt(E[f]),I=Gt(E[p]);M&&N>0&&g.push({date:M,country:x,division:F,lg:N,comp:I})});const C=g.filter(E=>(E.country==="TOTAL"||E.country==="TTL")&&(E.division==="TOTAL"||E.division==="TTL"||E.division===""));C.sort((E,M)=>de(E.date)-de(M.date));const u=C[C.length-1],k=C.length>=2?C[C.length-2]:null;if(!u){const E=t.find(N=>N.some(I=>String(I||"").trim().toUpperCase()==="TOTAL"));if(!E)return Rt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(N=>N==null?void 0:N.slice(0,6))});const M=Gt(E[f]),x=Gt(E[p]),F={total:{score:M,prev:M,vsComp:x,rank:M>=x?1:2,totalBrands:12}};return g.length&&(F.monthlyVis=g),F}const w=u.lg,v=u.comp,A=k?k.lg:w,P=u.date,B=k?k.date:null;function j(E){const M={};return g.filter(x=>x.date===E&&(x.country==="TOTAL"||x.country==="TTL")&&x.division&&x.division!=="TOTAL"&&x.division!=="TTL"&&x.division!=="").forEach(x=>{M[x.division]={lg:x.lg,comp:x.comp}}),M}const $=j(P),_=B?j(B):{};function O(E){const M={};return g.filter(x=>x.date===E&&x.country&&x.country!=="TOTAL"&&x.country!=="TTL"&&(x.division==="TOTAL"||x.division==="TTL"||x.division==="")).forEach(x=>{M[x.country]={lg:x.lg,comp:x.comp}}),M}const b=O(P),T=B?O(B):{},S={total:{score:w,prev:A,vsComp:v,rank:w>=v?1:2,totalBrands:12},...Object.keys($).length?{buTotals:$}:{},...Object.keys(_).length?{buTotalsPrev:_}:{},...Object.keys(b).length?{countryTotals:b}:{},...Object.keys(T).length?{countryTotalsPrev:T}:{}};return P&&(S.derivedPeriod=P),g.length&&(S.monthlyVis=g),S}function sr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,a)=>console.log(`  row${a}: [${o.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const a=String(o[0]||"").trim().toLowerCase();return a==="div"||a==="division"||a==="divisions"});if(e<0){const o=t.findIndex(a=>a.some((l,r)=>r>=1&&String(l||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),vo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),vo(t,e)}function vo(t,e){const o=t[e],a=o.findIndex((h,d)=>d>=3&&String(h||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const l=[];for(let h=4;h<o.length;h++){const d=String(o[h]||"").trim();d&&d.toUpperCase()!=="LG"&&l.push({name:d,col:h})}const r=t.slice(e+1).filter(h=>{const d=String(h[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),f={},s={};r.forEach(h=>{const d=String(h[0]||"").trim(),g=String(h[1]||"").trim(),c=String(h[2]||"").trim(),C=Jt(h[2])||c,u=String(h[3]||"").trim(),k=Gt(h[a]),w=l.map(B=>({name:B.name,score:Gt(h[B.col])})).filter(B=>B.score>0),v=[...w].sort((B,j)=>j.score-B.score)[0]||{name:"",score:0},A=+(k-v.score).toFixed(2),P={LG:k};if(w.forEach(B=>{P[B.name]=B.score}),C==="TTL"||C==="TOTAL"){const B=me[u]||u.toLowerCase(),j=wn[u]||u;f[B]||(f[B]=[]),f[B].push({id:B,bu:d,kr:j,category:u,date:g,score:k,vsComp:v.score,compName:v.name,allScores:P})}else{const B=`${u}|${C}`;s[B]||(s[B]=[]),s[B].push({product:u,country:C,date:g,score:k,compName:v.name,compScore:v.score,gap:A,allScores:P})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(f).join(", ")||"없음"} / 국가별: ${Object.keys(s).length}건`);const p=[];for(const[h,d]of Object.entries(f)){d.sort((u,k)=>de(u.date)-de(k.date));const g=d[d.length-1],c=d.length>=2?d[d.length-2].score:null;console.log(`[parseProductCnty] ${h}: dates=[${d.map(u=>u.date).join(",")}] score=${g.score} prev=${c} vsComp=${g.vsComp}`);const C=d.map(u=>({date:u.date,score:u.score,comp:u.vsComp,allScores:u.allScores}));p.push({...g,prev:c,monthlyScores:C})}const m=[];for(const h of Object.values(s)){h.sort((C,u)=>de(C.date)-de(u.date));const d=h[h.length-1],g=h.length>=2?h[h.length-2].score:null,c=h.map(C=>({date:C.date,score:C.score,compScore:C.compScore,compName:C.compName,allScores:C.allScores}));m.push({...d,prev:g,monthlyScores:c})}return{...p.length?{productsPartial:p}:{},...m.length?{productsCnty:m}:{}}}function Uo(t,e=0,o){const a=o??t.length;for(let l=e;l<a;l++){const r=[];for(const f of t[l]||[]){const s=String(f||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&r.push(s.toUpperCase())}if(r.length>=2)return r}return null}const ze={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function wo(t,e){var u;const o=e?ze[e]||{}:{...ze.MS,...ze.ES};if(!Object.keys(o).length)return Rt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const a=t.findIndex(k=>k.some(w=>String(w||"").trim()in o));if(a<0)return Rt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const l=t[a],r=t.findIndex((k,w)=>w>a&&k.some(v=>String(v||"").trim()==="TTL")),f=r>0?r+1:Math.min(a+20,t.length);let s=-1,p=-1;for(let k=a+1;k<f;k++){const w=t[k];if(!w.some(P=>String(P||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=k),w.some(P=>{const B=String(P||"").trim().toLowerCase().replace(/[\s_-]/g,"");return B==="nonbrand"||B==="nb"})){s=k;break}}const m=s>=0?s:p>=0?p:r;if(m<0)return Rt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:a,ttlRowIdx:r});const h=t[m],d=s>=0?"LG-NB":p>=0?"LG":"TTL",g={},c=Object.keys(o).map(k=>l.findIndex(w=>String(w||"").trim()===k)).filter(k=>k>=0).sort((k,w)=>k-w);for(const[k,w]of Object.entries(o)){const v=l.findIndex(B=>String(B||"").trim()===k);if(v<0)continue;const A=c.find(B=>B>v)||v+20,P=[];for(let B=v+1;B<A&&B<h.length;B++){const j=Gt(h[B]);j>0&&P.push(j)}P.length&&(g[w]=P)}if(!Object.keys(g).length)return Rt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:a,dataRowIdx:m,dataRowLabel:d});const C=Uo(t,a,f)||((u=Object.values(g)[0])==null?void 0:u.map((k,w)=>`W${w+1}`))||[];return{weeklyMap:g,weeklyLabels:C}}function lr(t,e,o){for(const a of Object.values(t))for(const l of Object.values(a))for(const[r,f]of Object.entries(l))l[r]=f.slice(o);for(const[a,l]of Object.entries(e))e[a]=l.slice(o)}function cr(t){const{data:e,rows:o,headerIdx:a,brandIdx:l,catIdx:r,countryIdx:f,isNonBrand:s,isTotal:p,weeklyMap:m,weeklyAll:h}=t;let d=t.wCols,g=t.weeklyLabels;if(!d.length){const c=e.find(C=>String(C[l]||"").trim().toUpperCase()==="LG"&&s(C));if(c){const C=[];for(let u=l+1;u<c.length;u++)if(String(c[u]||"").trim())C.push(u);else if(C.length)break;d=C,g=Uo(o,0,a+1)||d.map((u,k)=>`W${k+1}`)}}return e.forEach(c=>{if(!s(c))return;const C=String(c[l]||"").trim();if(!C)return;const u=String(c[r>=0?r:0]||"").trim();if(!u)return;const k=me[u]||u.toLowerCase(),w=f>=0?Jt(c[f]):"TOTAL",v=w==="TOTAL"||w==="TTL"||!w?"Total":w;h[k]||(h[k]={}),h[k][v]||(h[k][v]={}),h[k][v][C]=d.map(A=>Le(c[A]))}),e.forEach(c=>{if(String(c[l]||"").trim().toUpperCase()!=="LG"||!s(c)||!p(c))return;const u=String(c[r>=0?r:0]||"").trim();u&&(m[me[u]||u.toLowerCase()]=d.map(k=>Le(c[k])))}),{wCols:d,weeklyLabels:g}}function dr(t){const{data:e,header:o,lgIdx:a,catIdx:l,isTotal:r,weeklyMap:f}=t,s=o.findIndex(h=>{const d=String(h||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),p={},m=[];return e.forEach(h=>{if(!r(h))return;const d=String(h[l>=0?l:3]||"").trim();if(d){if(s>=0){const g=String(h[s]||"").trim();g&&!m.includes(g)&&m.push(g)}p[d]=p[d]||[],p[d].push(Le(h[a]))}}),Object.entries(p).forEach(([h,d])=>{f[me[h]||h.toLowerCase()]=d}),m.length?m:null}function pr(t){const{data:e,wCols:o,catIdx:a,isTotal:l,weeklyMap:r}=t;e.forEach(f=>{if(!l(f))return;const s=String(f[a>=0?a:0]||"").trim();s&&(r[me[s]||s.toLowerCase()]=o.map(p=>Le(f[p])))})}function Ge(t,e){const o={};let a=[],l=-1;for(let $=0;$<Math.min(t.length,10);$++){const _=t[$];if(!_)continue;let O=0;for(let b=0;b<_.length;b++)/^w\d+$/i.test(String(_[b]||"").trim())&&O++;if(O>=2){l=$;break}}let r=t.findIndex($=>{const _=$.slice(0,5).map(O=>String(O||"").trim().toLowerCase());return _.includes("category")||_.includes("product")});if(r<0&&l>=0&&(r=l),r<0&&(r=t.findIndex($=>{let _=!1,O=0;for(let b=0;b<Math.min($.length,10);b++){const T=String($[b]||"").trim();T.toUpperCase()==="LG"?(_=!0,O++):T&&isNaN(parseFloat(T))&&O++}return _&&O>=3})),r<0)return wo(t,e);const f=t[r],s=r+1;let p=null;if(t[s]){const $=t[s].slice(4,8).map(_=>String(_||"").trim()).filter(Boolean);$.length&&$.every(_=>/^\d{1,2}\/\d{1,2}/.test(_)||/~/.test(_)||/^\(/.test(_))&&(p=s)}const m=p!=null?p+1:s,h=t.slice(m).filter($=>$[0]!=null&&String($[0]).trim()),d=f.findIndex($=>{const _=String($||"").trim().toLowerCase();return _==="category"||_==="product"}),g=f.findIndex($=>{const _=String($||"").trim().toLowerCase();return _==="country"||_==="county"}),c=f.findIndex($=>String($||"").trim().toLowerCase()==="brand"),C=f.findIndex($=>String($||"").trim().toUpperCase()==="LG");let u=[];const k=l>=0?t[l]:f;for(let $=0;$<k.length;$++)/^w\d+$/i.test(String(k[$]||"").trim())&&u.push($);if(!u.length)for(let $=0;$<f.length;$++){const _=String(f[$]||"").split(/\n/)[0].trim();/^w\d+/i.test(_)&&u.push($)}a=u.map($=>String(k[$]||"").trim().toUpperCase());let w=u.map(($,_)=>{const O=a[_]||`W${$}`;let b="";const T=p!=null?t[p]:l!==r&&l>=0?t[l+1]:null;if(T){const S=String(T[$]||"").trim();S&&/\d/.test(S)&&(b=S.startsWith("(")?S:`(${S})`)}return b?`${O}${b}`:O});console.log(`[parseWeekly:${e}] wLabelRow:${l} headerIdx:${r} dateRangeRow:${p} wCols:${u.length} labels:`,a.slice(0,5),"full:",w.slice(-2));function v($){if(g<0)return!0;const _=String($[g]||"").replace(/[()]/g,"").trim().toUpperCase();return _==="TOTAL"||_==="TTL"||_===""}const A=f.findIndex($=>{const _=String($||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="b/nb"||_==="bnb"||_==="brand/nonbrand"});function P($){if(A<0)return!0;const _=String($[A]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="nonbrand"||_==="nb"}const B={},j={data:h,rows:t,header:f,headerIdx:r,brandIdx:c,lgIdx:C,catIdx:d,countryIdx:g,wCols:u,weeklyLabels:a,weeklyMap:o,weeklyAll:B,isNonBrand:P,isTotal:v};if(c>=0){const $=cr(j);u=$.wCols,a=$.weeklyLabels}else if(C>=0){const $=dr(j);$&&(a=$)}else u.length&&pr(j);if(a.length>0){let $=a.length;for(const T of Object.values(B))for(const S of Object.values(T))for(const E of Object.values(S)){const M=E.findIndex(x=>x!=null);M>=0&&M<$&&($=M)}for(const T of Object.values(o)){const S=T.findIndex(E=>E!=null);S>=0&&S<$&&($=S)}const _=12,b=a.length-$>_?a.length-_:$;b>0&&b<a.length&&(a=a.slice(b),w=w.slice(b),lr(B,o,b))}if(Object.keys(o).length){const $={weeklyMap:o};return a.length&&($.weeklyLabels=a),w.length&&($.weeklyLabelsFull=w),Object.keys(B).length&&($.weeklyAll=B),$}return wo(t,e)}function ur(t){const e=t.findIndex(A=>A.some(j=>{const $=String(j||"").trim().toLowerCase();return $.includes("page type")||$==="country"})?!A.some(j=>/^\[.*\]$/.test(String(j||"").trim())):!1);if(e<0)return Rt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(A=>A==null?void 0:A.slice(0,6))});const o=t[e],a=[];for(let A=2;A<o.length;A++){const P=String(o[A]||"").trim();if(/\bLG\b/i.test(P)){const B=A+1;B<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[B]||""))&&a.push({lg:A,ss:B})}}a.length||a.push({lg:2,ss:3});const l=t.slice(e+1).filter(A=>A[0]!=null&&String(A[0]).trim());let r=a[0];for(let A=a.length-1;A>=0;A--)if(l.some(P=>qt(P[a[A].lg])>0)){r=a[A];break}if(!l.some(A=>qt(A[r.lg])>0)){for(let A=Math.min(r.lg,o.length)-1;A>=2;A--)if(l.some(P=>qt(P[A])>0)){r={lg:A-1,ss:A};break}}const f={},s={},p={},m={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},h=new Set,d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=a.map(A=>{const P=String(o[A.lg]||"").trim(),B=P.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return B?B[1].charAt(0).toUpperCase()+B[1].slice(1).toLowerCase():P.replace(/\s*LG\s*/i,"").trim()}),c={};l.forEach(A=>{const P=Jt(A[0]),B=String(A[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test(B)?"TTL":B;j.toLowerCase()==="microsite"&&(j="Microsites");const $=m[P]||P.toUpperCase();h.add($);const _=qt(A[r.lg]),O=qt(A[r.ss]);$==="TTL"?(f[j]=(f[j]||0)+_,s[j]=(s[j]||0)+O):(p[$]||(p[$]={lg:{},samsung:{}}),p[$].lg[j]=(p[$].lg[j]||0)+_,p[$].samsung[j]=(p[$].samsung[j]||0)+O),$==="TTL"&&(c[j]||(c[j]={}),a.forEach((b,T)=>{var M,x;const S=qt(A[b.lg]),E=qt(A[b.ss]);if(S>0||E>0){const F=g[T]||`M${T+1}`;c[j][F]={lg:(((M=c[j][F])==null?void 0:M.lg)||0)+S,samsung:(((x=c[j][F])==null?void 0:x.samsung)||0)+E}}}))});const C=new Set;Object.values(c).forEach(A=>Object.keys(A).forEach(P=>C.add(P)));const u=d.filter(A=>C.has(A)),k={},w={};a.forEach((A,P)=>{const B=g[P];if(!B)return;const j={},$={};l.forEach(_=>{const O=Jt(_[0]),b=String(_[1]||"").replace(/[()]/g,"").trim();let T=/page total|^ttl$/i.test(b)?"TTL":b;T.toLowerCase()==="microsite"&&(T="Microsites");const S=m[O]||O.toUpperCase(),E=qt(_[A.lg]),M=qt(_[A.ss]);E<=0&&M<=0||(S==="TTL"?(E>0&&(j[T]=(j[T]||0)+E),M>0&&($[T]=($[T]||0)+M)):(w[B]||(w[B]={}),w[B][S]||(w[B][S]={lg:{},samsung:{}}),E>0&&(w[B][S].lg[T]=(w[B][S].lg[T]||0)+E),M>0&&(w[B][S].samsung[T]=(w[B][S].samsung[T]||0)+M)))}),Object.keys(j).length&&(k[B]={lg:j,samsung:$})}),Object.keys(w).forEach(A=>{Object.keys(w[A]).forEach(P=>{const B=w[A][P];Object.values(B.lg).some($=>$>0)||Object.values(B.samsung).some($=>$>0)||delete w[A][P]}),Object.keys(w[A]).length||delete w[A]});const v={};return(f.TTL||Object.keys(f).length)&&(v.dotcom={lg:f,samsung:s,byMonth:k,byCntyByMonth:w}),Object.keys(p).length&&(v.dotcomByCnty=p),Object.keys(c).length&&u.length&&(v.dotcomTrend=c,v.dotcomTrendMonths=u),v}function fr(t){const e=t.findIndex(x=>x.some(I=>{const R=String(I||"").trim().toLowerCase();return R==="channel"||R==="country"})?!x.some(I=>/^\[.*\]$/.test(String(I||"").trim())):!1);e<0&&Rt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let l=-1,r=-1,f=-1;for(let x=0;x<o.length;x++){const F=String(o[x]||"").trim().toLowerCase();F==="country"&&l<0&&(l=x),F==="channel"&&r<0&&(r=x),F==="prd"&&f<0&&(f=x)}const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function p(x){const F=String(x||"").trim().toLowerCase();if(!F)return null;const N=F.match(/^(\d{1,2})월/);if(N){const R=parseInt(N[1]);if(R>=1&&R<=12)return s[R-1]}const I=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return I?I[1].charAt(0).toUpperCase()+I[1].slice(1).toLowerCase():null}const m=[],h=new Set;for(let x=0;x<o.length;x++){const F=p(o[x]);F&&!h.has(x)&&(m.push({col:x,label:F}),h.add(x))}if(e>0){const x=t[e-1];if(x)for(let F=0;F<x.length;F++){const N=p(x[F]);N&&!h.has(F)&&(m.push({col:F,label:N}),h.add(F))}}let d=2;if(m.length>0)d=Math.min(...m.map(x=>x.col));else if(l>=0&&r>=0)d=Math.max(l,r,f)+1;else{const x=t[a];x&&!String(x[0]||"").trim()?(l=1,r=2,d=3):(l=0,r=1,d=2)}if(l<0||r<0){const x=t[a],F=x&&!String(x[0]||"").trim()?1:0;l<0&&(l=F),r<0&&(r=F+1)}if(m.length>0){m.sort((I,R)=>I.col-R.col);const x=m[0],F=s.indexOf(x.label),N=new Set([l,r,f].filter(I=>I>=0));if(F>0&&x.col>d){let I=F-1;for(let R=x.col-1;R>=d&&I>=0;R--){if(h.has(R)||N.has(R))continue;const U=String(o[R]||"").trim(),rt=e>0?String((t[e-1]||[])[R]||"").trim():"";U||rt||(m.push({col:R,label:s[I]}),h.add(R),I--)}}}m.sort((x,F)=>s.indexOf(x.label)-s.indexOf(F.label));const g=t.slice(a).filter(x=>x.some(F=>F!=null&&String(F).trim())),c=[],C={},u={},k={},w={},v=new Set,A={};g.forEach(x=>{const F=Jt(x[l]),N=String(x[r]||"").replace(/[()]/g,"").trim(),I=f>=0?String(x[f]||"").trim():"";if(!F||!N||N.toLowerCase()==="total")return;v.add(F);const R={};if(m.forEach(({col:gt,label:pt})=>{const at=qt(x[gt]);at>0&&(R[pt]=at)}),Object.keys(R).length===0)return;const U=I.toUpperCase(),rt=!I||U==="TTL"||U==="TOTAL",dt=F==="TTL"||F==="TOTAL"?"TTL":F;A[dt]||(A[dt]={}),A[dt][N]||(A[dt][N]={ttl:null,prds:[]}),rt?A[dt][N].ttl=R:A[dt][N].prds.push({prd:I,monthScores:R})});const P=x=>{for(let F=m.length-1;F>=0;F--){const N=x[m[F].label];if(N>0)return N}return 0},B=x=>x.ttl?{...x.ttl}:{},j={};Object.entries(A).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([N,I])=>{const R=B(I);Object.keys(R).length!==0&&(j[x]||(j[x]={}),j[x][N]=R)})});const $=A.TTL||{};Object.entries($).forEach(([x,F])=>{const N=B(F),I=P(N);I>0&&(c.push({source:x,category:"",score:I,delta:0,ratio:0,monthScores:N}),C[x]=N),F.prds.forEach(({prd:R,monthScores:U})=>{const rt=P(U);rt>0&&(k[R]||(k[R]=[]),k[R].push({source:x,category:"",score:rt,delta:0,ratio:0,monthScores:U}))})}),Object.entries(A).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([N,I])=>{const R=B(I),U=P(R);U>0&&(u[x]||(u[x]=[]),u[x].push({source:N,category:"",score:U,delta:0,ratio:0,monthScores:R,prd:""})),I.prds.forEach(({prd:rt,monthScores:dt})=>{const gt=P(dt);if(gt<=0)return;u[x]||(u[x]=[]),u[x].push({source:N,category:"",score:gt,delta:0,ratio:0,monthScores:dt,prd:rt}),w[rt]||(w[rt]={}),w[rt][N]||(w[rt][N]={source:N,category:"",score:0,delta:0,ratio:0,monthScores:{}});const pt=w[rt][N];pt.score+=gt,Object.entries(dt).forEach(([at,xt])=>{pt.monthScores[at]=(pt.monthScores[at]||0)+xt})})})});const _={};new Set([...Object.keys(k),...Object.keys(w)]).forEach(x=>{let F=k[x];(!F||!F.length)&&(F=Object.values(w[x]||{})),F&&F.length&&(_[x]=F)});const b=c.reduce((x,F)=>x+F.score,0);c.sort((x,F)=>F.score-x.score),c.forEach((x,F)=>{x.rank=F+1,x.ratio=b>0?+(x.score/b*100).toFixed(1):0});for(const[x,F]of Object.entries(u)){const N=F.reduce((I,R)=>I+R.score,0);F.sort((I,R)=>R.score-I.score),F.forEach((I,R)=>{I.rank=R+1,I.ratio=N>0?+(I.score/N*100).toFixed(1):0})}for(const[x,F]of Object.entries(_)){const N=F.reduce((I,R)=>I+R.score,0);F.sort((I,R)=>R.score-I.score),F.forEach((I,R)=>{I.rank=R+1,I.ratio=N>0?+(I.score/N*100).toFixed(1):0})}const T=m.map(x=>x.label).filter(x=>Object.values(C).some(F=>F[x]>0)),S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let E=null;if(T.length>0){const x={};Object.values(C).forEach(I=>{Object.entries(I).forEach(([R,U])=>{U>0&&(x[R]=(x[R]||0)+1)})});let F=T[T.length-1];if(T.length>=2){const I=x[F]||0,R=T[T.length-2],U=x[R]||0;U>0&&I<U*.5&&(F=R)}const N=S.findIndex(I=>F.toLowerCase().startsWith(I.toLowerCase()));N>=0&&(E=`${S[N]} ${new Date().getFullYear()}`)}const M={};return c.length>0&&(M.citations=c),Object.keys(u).length>0&&(M.citationsByCnty=u),Object.keys(_).length>0&&(M.citationsByPrd=_),Object.keys(C).length>0&&(M.citTouchPointsTrend=C,M.citTrendMonths=T),Object.keys(j).length>0&&(M.citTouchPointsTrendByCnty=j),E&&(M.citDerivedPeriod=E),M}function hr(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let l=null,r=0,f=-1,s=-1,p=-1,m=-1,h=-1,d=4;for(let b=0;b<Math.min(t.length,10);b++){const T=t[b];if(!T)continue;const S=T.some(F=>/^no$/i.test(String(F||"").trim())),E=T.some(F=>/^region$/i.test(String(F||"").trim())),M=T.some(F=>/domain|domian/i.test(String(F||"").trim())),x=T.some(F=>/^prd$/i.test(String(F||"").trim()));if(S||E||M||x){l=T,r=b+1;for(let F=0;F<T.length;F++){const N=String(T[F]||"").trim().toLowerCase();N==="prd"&&h<0&&(h=F),N==="no"&&f<0&&(f=F),N==="region"&&s<0&&(s=F),(N==="domain"||N==="domian")&&p<0&&(p=F),N==="type"&&m<0&&(m=F)}break}(String(T[0]||"").trim().startsWith("[")||!String(T[0]||"").trim())&&(r=b+1)}l||Rt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(b=>b==null?void 0:b.slice(0,6))});const g=f>=0||s>=0||h>=0;if(g)s<0&&(s=f>=0?f+1:h>=0?h+2:1),p<0&&(p=s+1),m<0&&(m=p+1),d=Math.max(p,m)+1;else if(p>=0)m=p+1,d=p+2;else{for(let b=r;b<Math.min(t.length,r+5);b++){const T=t[b];if(T){for(let S=0;S<Math.min(T.length,6);S++){const E=String(T[S]||"").trim();if(E.includes(".")&&E.length>3&&!a.test(E)){p=S,m=S+1,d=S+2;break}}if(p>=0)break}}p<0&&(p=0,m=1,d=2)}const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],C=b=>{const T=String(b||"").trim().toLowerCase();if(!T)return null;const S=T.match(/^(\d{1,2})월/);if(S){const M=parseInt(S[1]);if(M>=1&&M<=12)return c[M-1]}const E=T.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():null},u=[];if(l)for(let b=d;b<l.length;b++){const T=C(l[b]);T&&u.push({col:b,label:T})}const k=b=>/^(type|domain[_ ]type)$/i.test(String(b||"").trim()),w=b=>/^(domain|domian)$/i.test(String(b||"").trim()),v=b=>/^region$/i.test(String(b||"").trim()),A=[];l&&u.forEach(({col:b,label:T})=>{const S=b-1,E=b-2,M=b-3;M<0||k(l[S])&&w(l[E])&&v(l[M])&&A.push({regionCol:M,domainCol:E,typeCol:S,monthCol:b,label:T})});const P=[],B={},j={};let $="TTL";const _=b=>{let T=String(b||"").trim();if(!T)return"";const S=T.match(/^\[([^\]]+)\]/);S&&(T=S[1].trim()),T=T.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const E=T.indexOf("/");return E>=0&&(T=T.slice(0,E)),T};if(A.length>=2){const b={};for(let S=r;S<t.length;S++){const E=t[S];if(!E)continue;const M=h>=0?String(E[h]||"").trim():"";A.forEach(x=>{const F=_(E[x.domainCol]);if(!F||!F.includes("."))return;const N=String(E[x.monthCol]||"").replace(/,/g,"").trim(),I=parseFloat(N);if(isNaN(I)||I<=0)return;const R=String(E[x.regionCol]||"").trim().toUpperCase(),U=e[R]||R||"TTL",rt=String(E[x.typeCol]||"").trim(),dt=`${U}|${F}|${rt}|${M}`;b[dt]||(b[dt]={cnty:U,domain:F,type:rt,prd:M,monthScores:{}}),b[dt].monthScores[x.label]=(b[dt].monthScores[x.label]||0)+I})}Object.values(b).forEach(S=>{let E=0;for(let N=u.length-1;N>=0;N--){const I=S.monthScores[u[N].label];if(I>0){E=I;break}}if(E<=0)return;j[S.cnty]=(j[S.cnty]||0)+1,P.push({cnty:S.cnty,rank:j[S.cnty],domain:S.domain,type:S.type,citations:E,monthScores:S.monthScores,prd:S.prd});const M=`${S.cnty}|${S.domain}`,x=!S.prd||/^(ttl|total)$/i.test(S.prd);B[M]||(B[M]={cnty:S.cnty,domain:S.domain,type:S.type,months:{},_hasTtl:!1});const F=B[M];x?(F.type=S.type||F.type,F._hasTtl=!0,Object.entries(S.monthScores).forEach(([N,I])=>{I>0&&(F.months[N]=I)})):F._hasTtl||Object.entries(S.monthScores).forEach(([N,I])=>{I>0&&!F.months[N]&&(F.months[N]=I)})}),Object.values(B).forEach(S=>{delete S._hasTtl});const T={};P.forEach(S=>{T[S.cnty]||(T[S.cnty]=[]),T[S.cnty].push(S)}),Object.values(T).forEach(S=>{S.sort((E,M)=>M.citations-E.citations),S.forEach((E,M)=>{E.rank=M+1})})}else for(let b=r;b<t.length;b++){const T=t[b];if(!T)continue;const S=String(T[p]||"").trim(),E=String(T[m]||"").trim(),M=h>=0?String(T[h]||"").trim():"";if(!g&&(!S||!S.includes("."))){const I=String(T[p]||"").trim().toUpperCase(),R=e[I]||(o.includes(I)?I:null);R&&(!E||E==="")&&($=R);continue}if(!S||!S.includes("."))continue;let x="TTL";if(g&&s>=0){const I=String(T[s]||"").trim().toUpperCase();x=e[I]||I}else g||(x=$);let F=0;if(u.length>0)for(let I=u.length-1;I>=0;I--){const R=String(T[u[I].col]||"").replace(/,/g,"").trim(),U=parseFloat(R);if(!isNaN(U)&&U>0){F=U;break}}else for(let I=T.length-1;I>=d;I--){const R=String(T[I]||"").replace(/,/g,"").trim();if(!R)continue;const U=parseFloat(R);if(!isNaN(U)&&U>0){F=U;break}}if(u.length>0){const I={};if(u.forEach(({col:R,label:U})=>{const rt=String(T[R]||"").replace(/,/g,"").trim(),dt=parseFloat(rt);!isNaN(dt)&&dt>0&&(I[U]=dt)}),Object.keys(I).length>0){const R=`${x}|${S}`;B[R]={cnty:x,domain:S,type:E,months:I}}}const N={};u.length>0&&u.forEach(({col:I,label:R})=>{const U=String(T[I]||"").replace(/,/g,"").trim(),rt=parseFloat(U);!isNaN(rt)&&rt>0&&(N[R]=rt)}),F>0&&(j[x]=(j[x]||0)+1,P.push({cnty:x,rank:j[x],domain:S,type:E,citations:F,monthScores:N,prd:M}))}const O={};if(P.length>0&&(O.citationsCnty=P),Object.keys(B).length>0){O.citDomainTrend=B;const b=u.map(T=>T.label).filter(T=>Object.values(B).some(S=>S.months[T]>0));O.citDomainMonths=b}return O}function Co(t,e){const o=De(t,[/^type$/,/^(county|country)$/]);if(o<0)return Rt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const a=t[o];let l=-1,r=-1,f=-1,s=-1,p=4;for(let v=0;v<a.length;v++){const A=String(a[v]||"").trim().toLowerCase();A==="type"&&l<0&&(l=v),(A==="county"||A==="country")&&r<0&&(r=v),(A==="topic"||A==="topoc")&&f<0&&(f=v),A==="brand"&&s<0&&(s=v)}p=Math.max(l,r,f,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[],g=[o];for(let v=0;v<=o;v++)v!==o&&g.push(v);for(const v of g){if(d.length>0)break;const A=t[v];if(A)for(let P=p;P<A.length;P++){const B=String(A[P]||"").split(/\n/)[0].trim();B&&(m.test(B)||h.test(B))&&d.push({col:P,label:B})}}const c=t.slice(o+1),C=[];c.forEach(v=>{if(!v)return;const A=String(v[l]||"").trim(),P=Jt(v[r]),B=String(v[f]||"").trim(),j=String(v[s]||"").trim();if(!B||!j)return;const $={};let _=0;d.forEach(({col:O,label:b})=>{const T=Gt(v[O]);T>0&&($[b]=T,_=T)}),(Object.keys($).length>0||B)&&C.push({type:A,country:P,topic:B,brand:j,scores:$,latestScore:_})});const u=e==="weekly"?"weeklyPR":"monthlyPR",k=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return C.length>0&&(w[u]=C),d.length>0&&(w[k]=d.map(v=>v.label)),w}function ko(t,e){const o=t.findIndex(w=>w?w.some(v=>/steakholders|stakeholders/i.test(String(v||"").trim()))||w.some(v=>/^type$/i.test(String(v||"").trim()))&&w.some(v=>/topoc|topic/i.test(String(v||"").trim())):!1);if(o<0)return Rt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const a=t[o];let l=-1,r=-1,f=-1,s=-1,p=4;for(let w=0;w<a.length;w++){const v=String(a[w]||"").trim().toLowerCase();(v==="steakholders"||v==="stakeholders")&&l<0&&(l=w),v==="type"&&r<0&&(r=w),(v==="country"||v==="county")&&f<0&&(f=w),(v==="topoc"||v==="topic")&&s<0&&(s=w)}p=Math.max(l,r,f,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[];for(let w=p;w<a.length;w++){const v=String(a[w]||"").split(/\n/)[0].trim();v&&(m.test(v)||h.test(v))&&d.push({col:w,label:v})}const g=t.slice(o+1),c=[];g.forEach(w=>{if(!w)return;const v=String(w[l]||"").trim(),A=String(w[r]||"").trim(),P=Jt(w[f]),B=String(w[s]||"").trim();if(!B||!v)return;const j={};let $=0;d.forEach(({col:_,label:O})=>{const b=Gt(w[_]);b>0&&(j[O]=b,$=b)}),c.push({stakeholder:v,type:A,country:P,topic:B,scores:j,latestScore:$})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",u=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",k={};return c.length>0&&(k[C]=c),d.length>0&&(k[u]=d.map(w=>w.label)),k}function gr(t){const e=De(t,[/^prompts?$/,/^country$/]);if(e<0)return Rt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],a={},l=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const p=String(o[s]||"").trim().toLowerCase();l.includes(p)&&!a[p]&&(a[p]=s)}const r=t.slice(e+1),f=[];return r.forEach(s=>{if(!s)return;const p=String(s[a.prompts]||"").trim();p&&f.push({country:Jt(s[a.country]),prompt:p,division:String(s[a.division]||"").trim(),category:String(s[a.category]||"").trim(),launched:String(s[a.launched]||"").trim(),branded:String(s[a.branded]||"").trim(),cej:String(s[a.cej]||"").trim(),topic:String(s[a.topic]||"").trim()})}),f.length>0?{appendixPrompts:f}:{}}const te={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function yr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const e=De(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,g)=>console.log(`  row${g}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const o=t[e];let a=-1,l=-1,r=-1;for(let d=0;d<o.length;d++){const g=String(o[d]||"").trim().toLowerCase();a<0&&(g==="country"||g==="county")&&(a=d),l<0&&(g==="category"||g==="product"||g==="제품"||g==="카테고리")&&(l=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(g)&&(r=d)}if(a<0||l<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:l,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const f=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...te};let p=0,m=0,h=0;return t.slice(e+1).forEach((d,g)=>{const c=e+1+g;try{if(!d){h++;return}const C=String(d[r]||"").trim();if(!C){h++;return}p++;const u=C.toLowerCase().replace(/\s+/g," ");if(!f.has(u)&&!f.has(u.replace(/\s/g,"")))return;const k=rr(d[a]),w=String(d[l]||"").trim();if(!k||!w){console.warn("[parseUnlaunched] row skipped",{rowIdx:c,raw:{country:d[a],category:d[l],status:d[r]},parsed:{country:k,rawCategory:w}}),h++;return}const v=w.toUpperCase(),A=Do[v]||v;s[`${k}|${A}`]=!0,A!==v&&(s[`${k}|${v}`]=!0),m++}catch(C){let u;try{u={country:d==null?void 0:d[a],category:d==null?void 0:d[l],status:d==null?void 0:d[r]}}catch{u=d}console.warn("[parseUnlaunched] row error",{rowIdx:c,raw:u,error:C==null?void 0:C.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${m}건 + 디폴트 ${Object.keys(te).length}건 + skip ${h}건 / 총행 ${p} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function mr(t){const e=De(t,[/^bu$/,/topic/]);if(e<0)return Rt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let a=-1,l=-1,r=-1,f=-1,s=-1;for(let h=0;h<o.length;h++){const d=String(o[h]||"").trim().toLowerCase();a<0&&d==="bu"&&(a=h),l<0&&d.includes("topic")&&d.includes("대시보드")&&(l=h),r<0&&(d==="explanation"||d==="설명")&&(r=h),f<0&&d.includes("기존")&&(f=h),s<0&&d.includes("topic")&&d.includes("row")&&(s=h)}l<0&&(l=1),r<0&&(r=2);const p=[];let m="";return t.slice(e+1).forEach(h=>{if(!h)return;const d=String(h[a]||"").trim();d&&(m=d);const g=String(h[l]||"").trim();if(!g)return;const c=String(h[r]||"").trim(),C=f>=0?String(h[f]||"").trim():"",u=s>=0?String(h[s]||"").trim():"";p.push({bu:m,topic:g,explanation:c,oldTopic:C,topicRow:u})}),p.length>0?{prTopicList:p}:{}}function br(t,e){var o;if(!tr(e,`parseSheetRows:${t}`))return{};try{if(t===wt.meta)return ir(e);if(t===wt.visSummary)return ar(e);if(t===wt.productMS||t===wt.productHS||t===wt.productES)return sr(e);if(t===wt.weeklyMS)return Ge(e,"MS");if(t===wt.weeklyHS)return Ge(e,"HS");if(t===wt.weeklyES)return Ge(e,"ES");if(t===wt.monthlyPR)return Co(e,"monthly");if(t===wt.weeklyPR)return Co(e,"weekly");if(t===wt.monthlyBrandPrompt)return ko(e,"monthly");if(t===wt.weeklyBrandPrompt)return ko(e,"weekly");if(t===wt.citPageType)return ur(e);if(t===wt.citTouchPoints)return fr(e);if(t===wt.citDomain)return hr(e);if(t===wt.appendix)return gr(e);if(t===wt.unlaunched)return yr(e);if(t===wt.prTopicList)return mr(e)}catch(a){return Ve(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:a==null?void 0:a.message,stack:(o=a==null?void 0:a.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Rt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(wt)})}function xr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function vr(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,l=await fetch(a,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!l.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${l.status}).`);const r=await l.text(),f=await Go(),s=f.read(r,{type:"string"}),p=s.Sheets[s.SheetNames[0]];return f.utils.sheet_to_json(p,{header:1,defval:""})}async function wr(t,e){var r,f;const o=Object.values(wt),a={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const l=await Promise.allSettled(o.map(s=>vr(t,s).then(p=>({name:s,rows:p}))));for(let s=0;s<o.length;s++){const p=o[s],m=l[s];if(e==null||e(`"${p}" 처리 중... (${s+1}/${o.length})`),m.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(r=m.reason)==null?void 0:r.message);continue}try{const{rows:h}=m.value,d=br(p,h);for(const[g,c]of Object.entries(d))g==="weeklyLabels"||g==="weeklyLabelsFull"?a[g]||(a[g]=c):Array.isArray(c)&&Array.isArray(a[g])?a[g]=[...a[g],...c]:c&&typeof c=="object"&&!Array.isArray(c)&&a[g]&&typeof a[g]=="object"&&!Array.isArray(a[g])?a[g]={...a[g],...c}:a[g]=c}catch(h){console.warn(`"${p}" 시트 처리 실패:`,h.message)}}if(!a.productsPartial&&a.weeklyAll&&a.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[p,m]of Object.entries(a.weeklyAll)){const h=m.Total||m.TTL||{},d=h.LG||h.lg||[],g=Object.entries(h).filter(([w])=>w!=="LG"&&w!=="lg"),c=d.length?d[d.length-1]:0,C=d.length>=5?d[0]:0;let u="",k=0;for(const[w,v]of g){const A=v.length?v[v.length-1]:0;A>k&&(k=A,u=w)}c>0&&s.push({id:p,bu:Po[p]||"HS",kr:Te[p]||p,category:p,date:((f=a.meta)==null?void 0:f.period)||"",score:c,prev:C,vsComp:k,compName:u,allScores:{LG:c,...u?{[u]:k}:{}}})}if(s.length&&(a.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(p=>`${p.id}=${p.score}`).join(", "))),!a.productsCnty){const p=[];for(const[m,h]of Object.entries(a.weeklyAll)){const d=Te[m]||m;for(const[g,c]of Object.entries(h)){if(g==="Total"||g==="TTL")continue;const C=c.LG||c.lg||[],u=C.length?C[C.length-1]:0;if(u<=0)continue;const k=C.length>=2?C[0]:0;let w="",v=0;const A={LG:u};for(const[B,j]of Object.entries(c)){if(B==="LG"||B==="lg")continue;const $=j.length?j[j.length-1]:0;A[B]=$,$>v&&(v=$,w=B)}const P=+(u-v).toFixed(1);p.push({product:d,country:g,score:u,prev:k,compName:w,compScore:v,gap:P,allScores:A})}}p.length&&(a.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(a.weeklyLabels&&a.weeklyLabels.length&&a.weeklyLabels.every((p,m)=>p===`W${m+1}`)){const p=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(m=>String(m).split(/\n/)[0].trim().toUpperCase()).filter(m=>/^W\d+/.test(m));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),a.weeklyLabels=p;const m=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(h=>{const d=String(h).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(h=>/^W\d+/.test(h));m.length&&(a.weeklyLabelsFull=m)}}if(a._syncIssues=er(a,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:a._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return a}const ht={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function Cr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),l=Math.floor(a/24);return l>=1?`${l}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function kr({savedAt:t,ageMs:e,stale:o,style:a}){const l=t==null,r=l?"#1E293B":o?"#7F1D1D":"#064E3B",f=l?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=l?"#334155":o?"#B91C1C":"#047857",p=l?"○":o?"⚠️":"●",m=l?"동기화 정보 없음":`데이터 최신화: ${Cr(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:f,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...a||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),m]})}function Sr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
body{background:#F1F5F9;font-family:${t};min-width:1200px;color:#1A1A1A}
/* ── 탭바 ── */
.tab-bar{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:space-between;padding:10px 40px;border-bottom:none}
.lang-btn{padding:4px 10px;border-radius:5px;border:none;font-size:13px;font-weight:700;cursor:pointer;background:transparent;color:#64748B;font-family:${t};transition:all .15s}
.lang-btn.active{background:${e};color:#fff}
.lang-btn:hover:not(.active){color:#1E293B}
.tab-btn{padding:8px 24px;border-radius:8px;border:none;font-size:16px;font-weight:600;font-family:${t};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.tab-btn:hover{color:#E2E8F0}
.tab-btn.active{background:${e};color:#fff}
.tab-panel{display:none}
.tab-panel.active{display:block}
/* ── GNB 서브메뉴 ── */
.gnb-sub{display:none;position:sticky;top:49px;z-index:99;background:#1E293B;padding:6px 40px;border-bottom:none}
.gnb-sub.active{display:flex;align-items:center;gap:4px}
.gnb-sub-btn{padding:6px 18px;border-radius:6px;border:none;font-size:14px;font-weight:600;font-family:${t};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.gnb-sub-btn:hover{color:#E2E8F0}
.gnb-sub-btn.active{background:#334155;color:#fff}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
/* ── 필터 레이어 ── */
.filter-layer{position:sticky;top:86px;z-index:90;background:#fff;border-bottom:2px solid #E8EDF2;padding:8px 40px}
.fl-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:4px 0}
.fl-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.fl-label{font-size:15px;font-weight:700;color:#64748B;white-space:nowrap;margin-right:4px}
.fl-badge{font-size:15px;font-weight:600;color:#1A1A1A;padding:3px 10px;border-radius:6px;background:#F1F5F9}
.fl-chk-label{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:6px;font-size:14px;font-weight:600;color:#475569;cursor:pointer;transition:all .15s;background:#F8FAFC;border:1px solid #E2E8F0;white-space:nowrap;user-select:none}
.fl-chk-label:hover{border-color:#94A3B8}
.fl-chk-label:has(input:checked){background:#0F172A;color:#fff;border-color:#0F172A}
.fl-chk{width:12px;height:12px;margin:0;cursor:pointer;accent-color:${e}}
.fl-all-label{font-weight:700}
.fl-divider{width:1px;height:24px;background:#E8EDF2;flex-shrink:0;align-self:center}
.hero-ctx{display:flex;gap:8px;flex-wrap:wrap}
.hero-ctx-badge{font-size:14px;font-weight:600;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,.12);color:#FFB0C0;border:1px solid rgba(255,255,255,.08)}
/* ── Hero ── */
.hero{background:#0F172A;border-radius:16px;padding:28px 32px;margin-bottom:24px;color:#fff}
.hero-top{display:flex;justify-content:space-between;margin-bottom:20px}
.hero-brand{font-size:16px;font-weight:700;color:#FFCCD8}
.hero-meta{font-size:14px;color:#FFB0C0}
.hero-body{display:flex;gap:40px;align-items:flex-start}
.hero-left{flex:1}
.hero-right{flex:0 0 320px;text-align:right}
.hero-label{font-size:16px;font-weight:600;color:#94A3B8;text-transform:uppercase;margin-bottom:8px}
.hero-score-row{margin-bottom:16px;display:flex;align-items:baseline;gap:8px}
.hero-score{font-size:52px;font-weight:900}
.hero-pct{font-size:20px;color:#94A3B8}
.hero-delta{font-size:16px;font-weight:700}
.hero-mom{font-size:15px;color:#64748B}
.hero-gauge{margin-top:8px}
.hero-gauge-track{height:10px;background:#1E2433;border-radius:8px;overflow:hidden}
.hero-gauge-bar{height:100%;border-radius:8px;transition:width .5s}
.hero-legend{display:flex;gap:16px;margin-top:10px;font-size:14px;color:#94A3B8}
.hero-legend i{display:inline-block;width:10px;height:10px;border-radius:5px;margin-right:4px;vertical-align:-1px}
.hero-comp{margin-top:12px}
.hero-comp-label{font-size:16px;font-weight:800;color:${o}}
.hero-comp-score{font-size:16px;color:#94A3B8}
.hero-comp-gap{font-size:16px;font-weight:800;margin-left:8px}
.hero-info{font-size:14px;color:#64748B;margin-top:12px;line-height:1.6}
.hero-insight{margin-top:20px;padding:16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px}
.hero-insight-label{display:block;font-size:14px;font-weight:700;color:${e};text-transform:uppercase;margin-bottom:6px}
.hero-insight-text{font-size:15px;color:#fff;line-height:1.8}
/* ── 섹션 카드 ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:20px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:4px;height:22px;background:${e};border-radius:4px;flex-shrink:0}
.section-header-right{display:flex;align-items:center;gap:16px}
.section-body{padding:24px 28px}
.legend{font-size:14px;color:#94A3B8;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px 0 8px;vertical-align:0}
/* ── Insight / HowToRead ── */
.hero-insight,.insight-box,.howto-box{display:none}
body.show-insights .hero-insight{display:block}
body.show-insights .insight-box{display:block}
body.show-insights .howto-box{display:block}
.insight-box{margin:0 28px;padding:12px 16px;background:#FFF4F7;border:1px solid #F5CCD8;border-radius:8px;margin-top:12px}
.insight-label{display:block;font-size:14px;font-weight:700;color:${e};margin-bottom:4px}
.insight-text{font-size:14px;color:#1A1A1A;line-height:1.8}
.howto-box{margin:0 28px;padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-top:8px}
.howto-label{display:block;font-size:14px;font-weight:700;color:#64748B;margin-bottom:4px}
.howto-text{font-size:14px;color:#475569;line-height:1.8}
/* ── 트렌드 탭 ── */
.trend-tabs{display:inline-flex;background:#F1F5F9;border-radius:8px;padding:3px}
.trend-tab{padding:5px 16px;border:none;border-radius:6px;font-size:14px;font-weight:700;font-family:${t};cursor:pointer;background:transparent;color:#64748B;transition:all .15s}
.trend-tab.active{background:${e};color:#fff}
.trend-tab:hover{opacity:.85}
/* ── BU / 제품 ── */
.bu-group{margin-bottom:20px}
.bu-header{display:flex;align-items:center;justify-content:space-between;background:#F1F5F9;border-radius:8px;padding:8px 14px;margin-bottom:12px}
.bu-label{font-size:17px;font-weight:700;color:#1A1A1A}
.bu-count{font-size:15px;color:#94A3B8}
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.prod-card{border:2px solid #E8EDF2;border-radius:12px;padding:16px 18px;background:#fff;transition:border-color .15s}
.prod-card:hover{border-color:#CBD5E1}
/* 미출시 제품: 회색 처리 (신호등/그래프/테두리/경쟁비바) */
.prod-card.is-unlaunched{border-color:#CBD5E1 !important}
.prod-card.is-unlaunched .prod-badge{background:#F1F5F9 !important;color:#64748B !important;border-color:#CBD5E1 !important}
/* 월간 패널: trend-monthly 보이고 trend-weekly 숨김, WoW/MoM 반전 */
#bu-monthly-content .trend-weekly{display:none !important}
#bu-monthly-content .trend-monthly{display:block !important}
#bu-monthly-content .prod-wow{display:none !important}
#bu-monthly-content .prod-mom{display:inline !important}
.prod-card.is-unlaunched .prod-chart svg path[stroke]{stroke:#94A3B8 !important}
.prod-card.is-unlaunched .prod-chart svg circle[stroke]{stroke:#94A3B8 !important}
.prod-card.is-unlaunched .prod-chart svg text[fill]:not([fill="#94A3B8"]){fill:#64748B !important}
.prod-card.is-unlaunched .prod-chart svg stop{stop-color:#94A3B8 !important}
.prod-card.is-unlaunched .prod-comp-bar{background:#94A3B8 !important}
.prod-card.is-unlaunched .prod-comp-pct{color:#64748B !important}
/* 국가별 섹션 미출시 제품 bar */
.vbar-item.is-unlaunched .vbar-bar{background:#94A3B8 !important}
.vbar-item.is-unlaunched .vbar-label{color:#64748B !important}
/* 주간/월간 트렌드 미출시 배지 */
.trend-row.is-unlaunched .trend-status-badge{background:#F1F5F9 !important;color:#64748B !important;border-color:#CBD5E1 !important}
.prod-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.prod-name{font-size:20px;font-weight:900;color:#1A1A1A}
.prod-badge{font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;border:1px solid}
.prod-score-row{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.prod-score{font-size:32px;font-weight:900;color:#1A1A1A}
.prod-score small{font-size:16px;color:#94A3B8;font-weight:400}
.prod-delta{font-size:14px;font-weight:700}
.prod-chart{margin:6px 0 10px}
.prod-comp{display:flex;align-items:center;gap:8px;background:#F8FAFC;border-radius:8px;padding:8px 10px}
.prod-comp-name{font-size:14px;color:#64748B;white-space:nowrap;min-width:80px}
.prod-comp-bar-wrap{flex:1;height:6px;background:#E8EDF2;border-radius:3px;overflow:hidden}
.prod-comp-bar{height:100%;border-radius:3px;transition:width .3s}
.prod-comp-pct{font-size:16px;font-weight:700;min-width:40px;text-align:right}
/* ── 국가 (세로 막대) ── */
.cnty-product{margin-bottom:40px}
.vbar-chart{display:flex;align-items:flex-end;gap:14px;padding:12px 8px 0;min-height:220px;overflow-x:auto}
.vbar-item{display:flex;flex-direction:column;align-items:center;flex:1;min-width:88px;max-width:108px}
.vbar-item.hidden{display:none}
.vbar-val{font-size:13px;font-weight:700;white-space:nowrap;margin-bottom:3px}
.vbar-val.comp-val{font-size:13px;font-weight:600}
.vbar-cols{display:flex;gap:3px;width:100%;align-items:flex-end;justify-content:center}
.vbar-col-wrap{flex:0 0 26px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
.vbar-col{width:100%;border-radius:4px 4px 0 0;min-height:3px;transition:height .3s}
.vbar-col-name{font-size:10px;font-weight:600;color:#94A3B8;margin-top:3px;white-space:nowrap;width:26px;text-align:center;overflow:visible;letter-spacing:-0.6px}
.vbar-gap{font-size:15px;font-weight:700;margin-top:4px;white-space:nowrap}
.vbar-label{font-size:15px;font-weight:600;color:#475569;margin-top:4px;text-align:center;word-break:keep-all;line-height:1.3}
/* ── 국가 뷰탭 ── */
.cnty-view-tab{padding:5px 16px;border:none;border-radius:6px;font-size:14px;font-weight:700;font-family:${t};cursor:pointer;background:transparent;color:#64748B;transition:all .15s}
.cnty-view-tab.active{background:${e};color:#fff}
.cnty-view-tab:hover{opacity:.85}
/* ── 필터 칩 ── */
.cnty-filters{padding:12px 28px 0;display:flex;flex-wrap:wrap;gap:10px}
.filter-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.filter-label{font-size:14px;font-weight:700;color:#64748B;margin-right:4px;white-space:nowrap}
.filter-chip{padding:4px 12px;border-radius:14px;border:1px solid #E2E8F0;font-size:14px;font-weight:600;font-family:${t};cursor:pointer;background:#fff;color:#64748B;transition:all .15s}
.filter-chip.active{background:#0F172A;color:#fff;border-color:#0F172A}
.filter-chip:hover{border-color:#94A3B8}
/* ── Citation ── */
.cit-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.cit-row:last-child{border-bottom:none}
.cit-row.compact{padding:5px 0}
.cit-rank{width:28px;height:28px;border-radius:5px;background:#F1F5F9;font-size:14px;font-weight:800;color:#94A3B8;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cit-rank.top{background:${e};color:#fff}
.cit-info{min-width:160px;flex-shrink:0}
.cit-source{display:block;font-size:16px;font-weight:700;color:#1A1A1A}
.cit-cat{font-size:14px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px}
.cit-bar-wrap{flex:1;height:24px;background:#F8FAFC;border-radius:6px;overflow:hidden}
.cit-bar{height:100%;background:${e};border-radius:6px;transition:width .3s}
.cit-score{font-size:16px;font-weight:700;color:${e};min-width:80px;text-align:right}
.cit-ratio{font-size:14px;color:#64748B;min-width:50px}
.cit-delta{font-size:14px;font-weight:700;min-width:50px}
/* ── 닷컴 ── */
.dc-row{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.dc-row:last-child{border-bottom:none}
.dc-row.ttl{background:#F8FAFC;border-radius:8px;padding:10px 12px;margin-bottom:8px;border-bottom:2px solid #E2E8F0}
.dc-label{font-size:16px;font-weight:700;color:#1A1A1A;min-width:160px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.dc-bars{flex:1}
.dc-bar-pair{display:flex;align-items:center;gap:8px;margin:2px 0}
.dc-bar{height:16px;border-radius:4px;min-width:2px;transition:width .3s}
.dc-bar.lg{background:${e}}
.dc-bar.ss{background:${o}}
.dc-val{font-size:16px;font-weight:700;color:#94A3B8;white-space:nowrap}
.dc-val.win{color:#1A1A1A}
.dc-val.muted{color:#CBD5E1;font-weight:400}
.dc-badge{font-size:14px;font-weight:800;padding:1px 6px;border-radius:3px}
.dc-badge.lg{background:#FFF1F2;color:${e}}
.dc-badge.ss{background:#F1F5F9;color:#64748B}
.dc-summary{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid #E8EDF2;align-items:center}
.dc-sum-item{font-size:16px;font-weight:700;color:#fff;padding:3px 10px;border-radius:5px}
.dc-sum-item.lg{background:${e}}
.dc-sum-item.ss{background:${o}}
.dc-sum-list{font-size:16px;color:#64748B;margin-right:16px}
/* ── Progress ── */
.progress-placeholder{min-height:60vh;display:flex;align-items:center;justify-content:center}
.progress-placeholder .inner{text-align:center;padding:40px}
.progress-placeholder .icon{font-size:48px;margin-bottom:16px;opacity:.3}
.progress-placeholder h2{font-size:20px;font-weight:700;color:#1E293B;margin-bottom:8px}
.progress-placeholder p{font-size:16px;color:#64748B}
/* ── Footer ── */
.notice-box{background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:16px 20px;margin-bottom:20px}
.notice-box .notice-title{font-size:14px;font-weight:700;color:#BE123C;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px}
.notice-box .notice-text{font-size:15px;color:#1E293B;line-height:1.8}
.dash-footer{background:#1A1A1A;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.dash-footer span{font-size:14px;color:#94A3B8}
.dash-footer strong{color:#fff;font-weight:700}
`}const zt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Ut="#CF0652",ee="#94A3B8",$e={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Ho={LG:Ut,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},So=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Ke={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Fr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Re={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Er={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Ar={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},Ye=90;function Xe(t,e){const o=$e[e]||$e.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Tr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Br(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function qe(t){const e=String(t||"").trim().toUpperCase();return Re[e]||t}function Lr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Er[o]||Re[o]||t:Ar[o]||Re[o]||t}let $r=0;function Fo(t,e,o,a,l,r={}){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const f=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,s=r.baselineLabel||"",p=r.labelOffsetY||0,m=r.lineOffsetY||0,h=$r++,d={t:18,r:10,b:20,l:10},g=o-d.l-d.r,c=a-d.t-d.b,C=t.filter(b=>b!=null);if(!C.length){let b=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const T=t.length,S=T>1?T-1:1;return b+=t.map((E,M)=>`<text x="${(d.l+M/S*g).toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${zt}">${e[M]||""}</text>`).join(""),b+="</svg>",b}const u=Math.min(...C)-1,k=Math.max(...C)+1,w=k-u||1,v=t.length,A=v>1?v-1:1,P=t.map((b,T)=>d.l+T/A*g),B=[];t.forEach((b,T)=>{b!=null&&B.push({x:P[T],y:d.t+(1-(b-u)/w)*c,v:b,idx:T})});let j=`<svg viewBox="0 0 ${o} ${a+12}" width="100%" height="${a+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const $=f>0?B.filter(b=>b.idx<f):[],_=f>0?B.filter(b=>b.idx>=f):B,O="#64748B";if(_.length>=2){const b=_.map((S,E)=>`${E?"L":"M"}${S.x.toFixed(1)},${S.y.toFixed(1)}`).join(" "),T=b+` L${_[_.length-1].x.toFixed(1)},${d.t+c} L${_[0].x.toFixed(1)},${d.t+c} Z`;j+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${l}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${l}" stop-opacity="0.03"/>
    </linearGradient></defs>`,j+=`<path d="${T}" fill="url(#lg${h})"/>`,j+=`<path d="${b}" stroke="${l}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if($.length>=2){const b=$.map((T,S)=>`${S?"L":"M"}${T.x.toFixed(1)},${T.y.toFixed(1)}`).join(" ");j+=`<path d="${b}" stroke="${O}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(j+=B.map(b=>{const T=f>0&&b.idx<f;return f>0&&b.idx===f?`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="4" fill="#000" stroke="${l}" stroke-width="3"/>`:`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${T?O:l}" stroke-width="2" opacity="${T?.85:1}"/>`}).join(""),j+=B.map(b=>{const S=f>0&&b.idx<f?O:l;return`<text x="${b.x.toFixed(1)}" y="${Math.max(b.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${S}" font-family="${zt}">${b.v.toFixed(1)}</text>`}).join(""),f>0&&s){const b=P[f];j+=`<line x1="${b.toFixed(1)}" y1="${(d.t+m).toFixed(1)}" x2="${b.toFixed(1)}" y2="${(d.t+c+m).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const T=b>o*.7,S=(T?d.t+c+1:d.t+8)+p;j+=`<text x="${(T?b-5:b+5).toFixed(1)}" y="${S.toFixed(1)}" text-anchor="${T?"end":"start"}" font-size="9" fill="#64748B" font-family="${zt}">${s}</text>`}return j+=t.map((b,T)=>`<text x="${P[T].toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${zt}">${e[T]||""}</text>`).join(""),j+="</svg>",j}function xe(t,e){return Ho[t]||So[e%So.length]}function Wo(t,e,o,a,l={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const f=l.fadeBeforeIdx!=null?l.fadeBeforeIdx:-1,s=l.baselineLabel||"";let p=1/0,m=-1/0;if(r.forEach(v=>(t[v]||[]).forEach(A=>{A!=null&&(A<p&&(p=A),A>m&&(m=A))})),!isFinite(p))return"";const h=Math.max((m-p)*.15,2);p=Math.max(0,p-h),m=Math.min(100,m+h);const d=m-p||1,g=e.length,c=8,C=8,u=a-c-C,k="#64748B";let w="";for(let v=0;v<=4;v++){const A=c+v/4*u;w+=`<line x1="0" y1="${A.toFixed(1)}" x2="${o}" y2="${A.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((v,A)=>{const P=t[v]||[],B=xe(v,A),j=v==="LG",$=j?2.5:1.5,_=j?1:.7,O=[];if(P.forEach((E,M)=>{if(E==null)return;const x=(M+.5)/g*o,F=c+(1-(E-p)/d)*u;O.push({x,y:F,v:E,idx:M})}),!O.length)return;const b=f>0?O.filter(E=>E.idx<f):[],T=f>0?O.filter(E=>E.idx>=f):O;function S(E,M,x,F){if(E.length>=2){const N=E.map((I,R)=>`${R?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ");w+=`<path d="${N}" stroke="${M}" fill="none" stroke-width="${$}" stroke-linecap="round" stroke-linejoin="round" opacity="${x}"/>`}E.forEach(N=>{F&&N.idx===f||(w+=`<circle cx="${N.x.toFixed(1)}" cy="${N.y.toFixed(1)}" r="${j?3.5:2.5}" fill="#fff" stroke="${M}" stroke-width="${j?2:1.5}" opacity="${x}"/>`)})}if(S(b,k,.85,!1),S(T,B,_,j&&f>0),j&&f>0){const E=O.find(M=>M.idx===f);E&&(w+=`<circle cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="4.5" fill="#000" stroke="${B}" stroke-width="3"/>`)}}),f>0&&s){const v=(f+.5)/g*o;w+=`<line x1="${v.toFixed(1)}" y1="${c}" x2="${v.toFixed(1)}" y2="${c+u}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const A=v>o*.7;w+=`<text x="${(A?v-5:v+5).toFixed(1)}" y="${(c+12).toFixed(1)}" text-anchor="${A?"end":"start"}" font-size="11" fill="#64748B" font-family="${zt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function Rr({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:l,monthlyVis:r,total:f,meta:s,wLabels:p}){const m={monthlyVis:r};return`
var _periodMode='weekly';
var _curLang='${t}';
// iframe에서 한영 전환 메시지 수신
window.addEventListener('message',function(e){
  if(e.data&&e.data.type==='switchLang')switchLang(e.data.lang);
});
function switchLang(lang){
  _curLang=lang;
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.toggle('active',b.textContent.toLowerCase()===lang)});
  // Citation iframe 전환
  var citBase='/p/'+(lang==='en'?'GEO-Citation-Dashboard-EN':'GEO-Citation-Dashboard-KO');
  var citTp=document.getElementById('cit-iframe-tp');
  if(citTp)citTp.src=citBase+'?tab=touchpoint';
  var citDc=document.getElementById('cit-iframe-dc');
  if(citDc&&citDc.src)citDc.src=citBase+'?tab=dotcom';
  // Tracker iframe lang 갱신 (v2만 사용)
  var trkIframe=document.getElementById('tracker-iframe');
  if(trkIframe)trkIframe.src='/p/progress-tracker-v2/?lang='+lang;
  // KO↔EN 페이지 전환 — 현재 탭을 hash로 유지
  var path=window.location.pathname;
  var activeTab=document.querySelector('.tab-panel.active');
  var hash=activeTab?'#'+activeTab.id.replace('tab-',''):'';
  if(path.indexOf('-KO')>0)window.location.href=path.replace('-KO',lang==='en'?'-EN':'-KO')+hash;
  else if(path.indexOf('-EN')>0)window.location.href=path.replace('-EN',lang==='ko'?'-KO':'-EN')+hash;
}
// 페이지 로드 시 hash에서 탭 복원
(function(){var h=window.location.hash.replace('#','');if(h&&document.getElementById('tab-'+h)){switchTab(h)}})();
function switchTab(id){
  document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active')});
  document.getElementById('tab-'+id).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(function(b){
    if(b.getAttribute('onclick')&&b.getAttribute('onclick').indexOf("'"+id+"'")>=0)b.classList.add('active');
  });
  // GNB 서브메뉴: 탭에 따라 표시
  var gnbVis=document.getElementById('gnb-visibility');
  var gnbCit=document.getElementById('gnb-citation');
  if(gnbVis){if(id==='visibility')gnbVis.classList.add('active');else gnbVis.classList.remove('active');}
  if(gnbCit){if(id==='citation')gnbCit.classList.add('active');else gnbCit.classList.remove('active');}
}
function switchCitSub(sub){
  document.querySelectorAll('#gnb-citation .gnb-sub-btn').forEach(function(b){b.classList.remove('active')});
  var btns=document.querySelectorAll('#gnb-citation .gnb-sub-btn');
  var subMap={touchpoint:0,dotcom:1};
  if(subMap[sub]!==undefined&&btns[subMap[sub]])btns[subMap[sub]].classList.add('active');
  var tp=document.getElementById('cit-sub-touchpoint');
  var dc=document.getElementById('cit-sub-dotcom');
  if(tp)tp.style.display=sub==='touchpoint'?'':'none';
  if(dc){
    dc.style.display=sub==='dotcom'?'':'none';
    var iframe=document.getElementById('cit-iframe-dc');
    if(iframe&&!iframe.src&&iframe.getAttribute('data-src')){iframe.src=iframe.getAttribute('data-src')}
  }
}
function switchVisSub(sub){
  document.querySelectorAll('.vis-sub-panel').forEach(function(p){p.style.display='none'});
  document.querySelectorAll('#gnb-visibility .gnb-sub-btn').forEach(function(b){b.classList.remove('active')});
  var panel=document.getElementById('vis-sub-'+sub);
  if(panel)panel.style.display='block';
  var btns=document.querySelectorAll('#gnb-visibility .gnb-sub-btn');
  var subMap={bu:0,pr:1,brandprompt:2};
  if(subMap[sub]!==undefined&&btns[subMap[sub]])btns[subMap[sub]].classList.add('active');
}
function switchPeriodPage(mode){
  _periodMode=mode;
  var wc=document.getElementById('bu-weekly-content');
  var mc=document.getElementById('bu-monthly-content');
  if(wc)wc.style.display=mode==='weekly'?'':'none';
  if(mc)mc.style.display=mode==='monthly'?'':'none';
  // 필터 버튼 활성화 상태 업데이트
  document.querySelectorAll('#period-toggle .trend-tab').forEach(function(btn){
    var isW=mode==='weekly'&&btn.textContent.match(/(주간|Weekly)/);
    var isM=mode==='monthly'&&btn.textContent.match(/(월간|Monthly)/);
    if(isW||isM)btn.classList.add('active');else btn.classList.remove('active');
  });
  // 기간 뱃지 토글
  var monthBadge=document.getElementById('period-badge');
  var weekBadge=document.getElementById('period-weekly-badge');
  if(monthBadge)monthBadge.style.display=mode==='monthly'?'':'none';
  if(weekBadge)weekBadge.style.display=mode==='weekly'?'':'none';
  // 주차/월 드롭다운 표시 토글
  var wkGrp=document.getElementById('vis-week-select-group');
  var mnGrp=document.getElementById('vis-month-select-group');
  if(wkGrp)wkGrp.style.display=mode==='weekly'?'':'none';
  if(mnGrp)mnGrp.style.display=mode==='monthly'?'':'none';
}
// 주차/월 선택 (Visibility 전용 — 제품 카드 점수 + 미니그래프 + 트렌드 truncation)
var _curWeekIdx=-1;        // -1 = 최신 (wLabels 인덱스)
var _curMonthIdx=-1;       // -1 = 최신 (dropdown 인덱스, monthlyScores 배열 기준)
var _curMonthIdxIn12=-1;   // 0=Jan, 11=Dec (트렌드 차트 truncate용)
function _arrAtIdx(arr,idx){
  if(!arr||!arr.length)return null;
  var i=idx<0||idx>=arr.length?arr.length-1:idx;
  return arr[i];
}
// 미니그래프용 슬라이스: 선택 주차까지 + 최근 10주만
function _miniSlice(arr,labels){
  if(!arr||!arr.length)return{data:arr||[],labels:labels||[]};
  var end=_curWeekIdx<0||_curWeekIdx>=arr.length?arr.length-1:_curWeekIdx;
  var start=Math.max(0,end-9);
  return{data:arr.slice(start,end+1),labels:(labels||[]).slice(start,end+1)};
}
function switchVisWeek(idx){
  _curWeekIdx=idx;
  var sel=document.getElementById('vis-week-select');
  var label=sel&&sel.options[sel.selectedIndex]?sel.options[sel.selectedIndex].textContent:_wLabels[idx];
  var badge=document.getElementById('period-weekly-badge');
  if(badge)badge.textContent=label+' '+(_curLang==='en'?'data':'기준');
  // 제품 카드/Hero/트렌드 재계산 (filterTrend 내부에서 _trendMultiSvg가 _curWeekIdx로 truncate)
  if(typeof onFilterChange==='function')onFilterChange();
  else if(typeof updateHeroFromCheckboxes==='function')updateHeroFromCheckboxes();
  _truncateTrendTable('#trend-container',_wLabels.length,_curWeekIdx);
}
// _monthOptsRaw가 항상 3-letter('Jan'..'Dec')로 정규화되므로 dropdown 텍스트로 캘린더 인덱스 역산 안전
function switchVisMonth(idx){
  _curMonthIdx=idx;
  var sel=document.getElementById('vis-month-select');
  var monthName=sel&&sel.options[sel.selectedIndex]?sel.options[sel.selectedIndex].textContent:'';
  var MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  _curMonthIdxIn12=MN.indexOf(monthName);
  var mb=document.getElementById('period-badge');
  if(mb)mb.textContent=monthName;
  _applyMonthSelectionOverride();
  // 국가별 제품별 Visibility 카드 — _monthlyVis 기반으로 선택 월 값으로 덮어쓰기
  _updateCntyMonth();
  // #monthly-trend-container 재렌더 (updateMonthlyTrend 내부에서 _trendMultiSvg가 _curMonthIdxIn12로 truncate)
  if(typeof updateMonthlyTrend==='function'&&typeof getCheckedValues==='function'){
    updateMonthlyTrend(getCheckedValues('country'));
  }
  _truncateTrendTable('#monthly-trend-container',12,_curMonthIdxIn12);
}
// month-of-year(0~11) 파싱 — '1월'·'Jan'·'2026-01'·'2026/1' 모두 지원
function _dateMi(d){
  var s=String(d||'').trim();
  var km=s.match(/(\\d{1,2})월/);if(km)return parseInt(km[1])-1;
  var enM={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
  var em=s.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(em)return enM[em[1].toLowerCase()];
  var iso=s.match(/\\d{4}[-\\/](\\d{1,2})/);if(iso)return parseInt(iso[1])-1;
  return -1;
}
// 선택 월의 _productsCnty[].monthlyScores 데이터로 국가별 제품별 vbar-item 의 LG/Comp 점수·바·갭 갱신
function _updateCntyMonth(){
  if(_curMonthIdxIn12<0||!_productsCnty||!_productsCnty.length)return;
  var dateMonthIdx=_dateMi;
  // product+country → cnty 엔트리 매핑
  var cntyMap={};
  _productsCnty.forEach(function(r){
    cntyMap[(r.product||'')+'|'+(r.country||'')]=r;
  });
  var BAR_H=130;
  ['.cnty-view-product','.cnty-view-country'].forEach(function(viewSel){
    document.querySelectorAll(viewSel+' .cnty-product').forEach(function(grp){
      var items=grp.querySelectorAll('.vbar-item');
      // 1차: 각 아이템의 선택 월 lg/comp 점수 결정 (해당 월 데이터 없으면 기존 값 유지)
      var rowLg=[],rowComp=[],rowCb=[];
      items.forEach(function(item){
        var product=item.getAttribute('data-product')||'';
        var country=item.getAttribute('data-country')||'';
        var cnty=cntyMap[product+'|'+country];
        var lg=null,comp=null,allScores=null;
        if(cnty&&cnty.monthlyScores&&cnty.monthlyScores.length){
          var ms=cnty.monthlyScores.find(function(m){return dateMonthIdx(m.date)===_curMonthIdxIn12});
          if(ms){lg=Number(ms.score)||0;comp=Number(ms.compScore)||0;allScores=ms.allScores||null}
        }
        if(lg===null){
          // 폴백: 기존 텍스트값 유지
          var lgEl=item.querySelector('.vbar-cols > .vbar-col-wrap:first-child > .vbar-val');
          var cEl=item.querySelector('.vbar-val.comp-val');
          lg=parseFloat(lgEl?lgEl.textContent:'0')||0;
          comp=parseFloat(cEl?cEl.textContent:'0')||0;
        }
        rowLg.push(lg);rowComp.push(comp);
        // C-brand: allScores 에서 TCL/Hisense/Haier 1위 점수 추출 (없으면 기존 표시값 유지)
        var cbScore=0;
        if(allScores){
          var KEYS=['TCL','HISENSE','HAIER'];
          Object.keys(allScores).forEach(function(b){
            var bu=b.toUpperCase();
            var match=KEYS.some(function(k){return bu.indexOf(k)>=0});
            if(match&&allScores[b]>cbScore)cbScore=allScores[b];
          });
        }
        if(!cbScore){
          var cbEl=item.querySelector('.cbrand-bar .vbar-val');
          cbScore=parseFloat(cbEl?cbEl.textContent:'0')||0;
        }
        rowCb.push(cbScore);
      });
      // 2차: 그룹 maxScore 재계산 후 bar 높이 + 값 + gap 갱신
      var maxScore=1;
      for(var i=0;i<items.length;i++){
        maxScore=Math.max(maxScore,rowLg[i],rowComp[i],rowCb[i]);
      }
      items.forEach(function(item,i){
        var lg=rowLg[i],comp=rowComp[i],cb=rowCb[i];
        var gap=+(lg-comp).toFixed(1);
        var hPx=Math.max(3,Math.round(lg/maxScore*BAR_H));
        var cPx=comp>0?Math.max(3,Math.round(comp/maxScore*BAR_H)):0;
        var cbPx=cb>0?Math.max(3,Math.round(cb/maxScore*BAR_H)):0;
        // LG 점수
        var lgValEl=item.querySelector('.vbar-cols > .vbar-col-wrap:first-child > .vbar-val');
        var lgColEl=item.querySelector('.vbar-cols > .vbar-col-wrap:first-child > .vbar-col');
        if(lgValEl)lgValEl.textContent=lg.toFixed(1);
        if(lgColEl)lgColEl.style.height=hPx+'px';
        // Comp 점수
        var cValEl=item.querySelector('.vbar-val.comp-val');
        var cColEl=cValEl&&cValEl.parentElement?cValEl.parentElement.querySelector('.vbar-col'):null;
        if(cValEl)cValEl.textContent=comp.toFixed(1);
        if(cColEl)cColEl.style.height=cPx+'px';
        // C-brand bar
        var cbValEl=item.querySelector('.cbrand-bar .vbar-val');
        var cbColEl=item.querySelector('.cbrand-bar .vbar-col');
        if(cbValEl&&cb>0)cbValEl.textContent=cb.toFixed(1);
        if(cbColEl)cbColEl.style.height=cbPx+'px';
        // 신호등 색상 (LG/Comp 비율)
        var status=comp>0?(lg>=comp?'lead':lg>=comp*0.8?'behind':'critical'):'lead';
        var barColor=status==='lead'?'#15803D':status==='behind'?'#D97706':'#BE123C';
        if(lgValEl)lgValEl.style.color=barColor;
        if(lgColEl)lgColEl.style.background=barColor;
        // Gap
        var gapEl=item.querySelector('.vbar-gap');
        if(gapEl){
          gapEl.textContent=(gap>=0?'+':'')+gap+'%p';
          gapEl.style.color=gap>=0?'#15803D':'#BE123C';
        }
      });
    });
  });
}
// 월 드롭다운 선택 인덱스로 monthlyScores를 truncate (선택 월까지만)
function _sliceMsByCurMonth(ms){
  if(!ms||!ms.length)return ms;
  if(_curMonthIdx<0||_curMonthIdx>=ms.length)return ms;
  return ms.slice(0,_curMonthIdx+1);
}
// 월 드롭다운으로 선택된 월의 점수/경쟁비를 카드에 덮어쓰기
function _applyMonthSelectionOverride(){
  if(_curMonthIdx<0)return;
  var monthlyContainer=document.getElementById('bu-monthly-content');
  if(!monthlyContainer)return;
  var cards=monthlyContainer.querySelectorAll('.prod-card');
  var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  cards.forEach(function(card){
    var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
    var name=nameEl.textContent.replace(/\\*$/,'');
    var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
    var ms=prod.monthlyScores||[];if(!ms.length)return;
    var pick=_arrAtIdx(ms,_curMonthIdx);
    if(!pick)return;
    var sc=Number(pick.score)||0;
    var scoreEl=card.querySelector('.prod-score');
    if(scoreEl)scoreEl.innerHTML=sc.toFixed(1)+'<small>%</small>';
    // 경쟁비 (allScores에서 LG 외 1위 추출, 폴백 pick.comp)
    var compTop=0;
    if(pick.allScores){Object.keys(pick.allScores).forEach(function(b){if(b==='LG'||b==='lg')return;var v=Number(pick.allScores[b])||0;if(v>compTop)compTop=v})}
    if(!compTop&&pick.comp)compTop=Number(pick.comp)||0;
    var compPct=compTop>0?Math.round(sc/compTop*100):100;
    var cc=compPct>=100?'#15803D':compPct>=80?'#D97706':'#BE123C';
    var compBar=card.querySelector('.prod-comp-bar');if(compBar){compBar.style.width=Math.min(compPct,120)+'%';compBar.style.background=cc}
    var compPctEl=card.querySelector('.prod-comp-pct');if(compPctEl){compPctEl.textContent=compPct+'%';compPctEl.style.color=cc}
    // status badge / 카드 테두리도 선택 월 기준으로 재계산
    var status=compPct>=100?'lead':compPct>=80?'behind':'critical';
    var st=_statusInfo(status);
    var badge=card.querySelector('.prod-badge');
    if(badge){badge.style.background=st.bg;badge.style.color=st.color;badge.style.borderColor=st.border;badge.textContent=st.label}
    card.style.borderColor=st.border;
    // 월간 미니차트 truncate: 선택 월까지만
    var mChart=card.querySelector('.trend-monthly');
    if(mChart){
      var msSliced=_sliceMsByCurMonth(ms);
      var mData=msSliced.map(function(m){return m.score});
      var mLabels=msSliced.map(function(m){var km=String(m.date||'').match(/(\\d{1,2})월/);return km?ML[parseInt(km[1])-1]:m.date});
      var _pid1=card.getAttribute('data-prodid');var _fi1=_baselineIdx(_pid1,mLabels);
      var _audM1=String(_pid1||'').toLowerCase()==='audio'?-60:0;
      mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,cc,_fi1,_shouldBridge(_pid1),_fi1>0?'*Baseline 재설정':'',_audM1,0);
    }
  });
}
// 트렌드 표 셀 truncate (SVG는 _trendMultiSvg(...,endIdx)에서 처리). endIdx<0 이면 전체 표시.
function _truncateTrendTable(containerSel,N,endIdx){
  if(!N)return;
  var lim=(endIdx>=0&&endIdx<N)?endIdx:N-1;
  document.querySelectorAll(containerSel+' .trend-row').forEach(function(row){
    row.querySelectorAll('table > tbody > tr').forEach(function(tr){
      var cells=tr.children;
      if(cells.length<=2)return;  // chart row / legend row (colspan)
      for(var i=1;i<cells.length;i++){
        cells[i].style.display=(i-1)>lim?'none':'';
      }
    });
  });
}
function switchPeriodMode(mode){
  _periodMode=mode;
  // Update all period toggles
  document.querySelectorAll('#period-toggle .trend-tab, #filter-layer-cit #period-toggle .trend-tab').forEach(function(btn){
    var isW=mode==='weekly'&&btn.textContent.match(/(주간|Weekly)/);
    var isM=mode==='monthly'&&btn.textContent.match(/(월간|Monthly)/);
    if(isW||isM)btn.classList.add('active');else btn.classList.remove('active');
  });
  // Toggle product card trends + WoW/MoM
  document.querySelectorAll('.trend-weekly').forEach(function(el){el.style.display=mode==='weekly'?'':'none'});
  document.querySelectorAll('.trend-monthly').forEach(function(el){el.style.display=mode==='monthly'?'':'none'});
  document.querySelectorAll('.prod-wow').forEach(function(el){el.style.display=mode==='weekly'?'':'none'});
  document.querySelectorAll('.prod-mom').forEach(function(el){el.style.display=mode==='monthly'?'':'none'});
  // 카드 점수/MoM/경쟁비/신호등 동적 전환
  document.querySelectorAll('.prod-card').forEach(function(card){
    var sc=mode==='monthly'?card.getAttribute('data-ms'):card.getAttribute('data-ws');
    var ratio=parseFloat(mode==='monthly'?card.getAttribute('data-mr'):card.getAttribute('data-wr'));
    var mom=mode==='monthly'?card.getAttribute('data-mmom'):card.getAttribute('data-wmom');
    // 점수 업데이트
    var scoreEl=card.querySelector('.prod-score');
    if(scoreEl&&sc)scoreEl.innerHTML=sc+'<small>%</small>';
    // 경쟁비 업데이트
    var compEl=card.querySelector('.prod-comp-pct');
    if(compEl&&!isNaN(ratio))compEl.textContent=Math.min(Math.round(ratio),120)+'%';
    // 신호등 색상 업데이트
    var status=ratio>=100?'lead':ratio>=80?'behind':'critical';
    var colors={lead:{border:'#BBF7D0',bg:'#ECFDF5',color:'#15803D'},behind:{border:'#FDE68A',bg:'#FFFBEB',color:'#D97706'},critical:{border:'#FECDD3',bg:'#FFF1F2',color:'#BE123C'}};
    var c=colors[status];
    card.style.borderColor=c.border;
    var badge=card.querySelector('.prod-badge');
    if(badge){badge.style.background=c.bg;badge.style.color=c.color;badge.style.borderColor=c.border}
    // 경쟁비 바 색상
    var compBar=card.querySelector('.prod-comp-bar');
    if(compBar)compBar.style.background=c.color;
    var compPctEl=card.querySelector('.prod-comp-pct');
    if(compPctEl)compPctEl.style.color=c.color;
    // 그래프 sparkColor는 CSS로 직접 변경 어려움 (SVG) — 서버사이드에서 결정
    // MoM/WoW 업데이트 — 오디오/RAC 는 MoM 표기 안 함 (4월 새 베이스라인)
    var _pidM=card.getAttribute('data-prodid');
    var momEl=mode==='monthly'?card.querySelector('.prod-mom'):card.querySelector('.prod-wow');
    if(mode==='monthly'&&_isBaselineProd(_pidM)){
      if(momEl)momEl.innerHTML='';
    } else if(momEl&&mom){
      var mv=parseFloat(mom);var arrow=mv>0?'▲':mv<0?'▼':'─';var clr=mv>0?'#22C55E':mv<0?'#EF4444':'#94A3B8';
      momEl.innerHTML=(mode==='monthly'?'MoM ':'WoW ')+arrow+' '+Math.abs(mv).toFixed(1)+'%p';
      momEl.style.color=clr;
    }
  });
  onFilterChange();
}
function switchTrend(mode){switchPeriodMode(mode)}
function toggleInsights(on){
  document.body.classList.toggle('show-insights',on);
}
function toggleAll(el, target){
  var checked=el.checked;
  // Update all filter layers
  document.querySelectorAll('.fl-chk[data-filter="'+target+'"]').forEach(function(c){c.checked=checked});
  // If toggling BU, also toggle related products
  if(target==='bu'){
    document.querySelectorAll('.fl-chk[data-filter="product"]').forEach(function(c){c.checked=checked});
    document.querySelectorAll('.fl-chk-all[data-target="product"]').forEach(function(c){c.checked=checked});
  }
  // If toggling region, also toggle related countries
  if(target==='region'){
    document.querySelectorAll('.fl-chk[data-filter="country"]').forEach(function(c){c.checked=checked});
    document.querySelectorAll('.fl-chk-all[data-target="country"]').forEach(function(c){c.checked=checked});
  }
  syncAllFilterLayers();
  onFilterChange();
}
function onBuChange(bu){
  var chk=document.querySelector('.fl-chk[data-filter="bu"][value="'+bu+'"]');
  if(!chk)return;
  var isChecked=chk.checked;
  // Toggle products under this BU + uncheck disabled products
  document.querySelectorAll('.fl-chk[data-filter="product"][data-bu="'+bu+'"]').forEach(function(c){c.checked=isChecked});
  updateAllCheckbox('bu');
  updateAllCheckbox('product');
  syncAllFilterLayers();
  onFilterChange();
}
function onRegionChange(region){
  var chk=document.querySelector('.fl-chk[data-filter="region"][value="'+region+'"]');
  if(!chk)return;
  var isChecked=chk.checked;
  var rc=_REGIONS[region]||[];
  rc.forEach(function(c){
    document.querySelectorAll('.fl-chk[data-filter="country"][value="'+c+'"]').forEach(function(cb){cb.checked=isChecked});
  });
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  syncAllFilterLayers();
  onFilterChange();
}
function updateAllCheckbox(target){
  var all=document.querySelectorAll('.fl-chk[data-filter="'+target+'"]');
  var allChecked=true;
  all.forEach(function(c){if(!c.checked)allChecked=false});
  document.querySelectorAll('.fl-chk-all[data-target="'+target+'"]').forEach(function(c){c.checked=allChecked});
}
function syncAllFilterLayers(){}
function _syncDisabledState(){
  // BU 해제 시 → 해당 BU 소속 제품 disabled
  var buChks=document.querySelectorAll('#filter-layer .fl-chk[data-filter="bu"]');
  var activeBU={};
  buChks.forEach(function(c){if(c.checked)activeBU[c.value]=true});
  var allBUChecked=Object.keys(activeBU).length===buChks.length;
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="product"]').forEach(function(c){
    var bu=c.getAttribute('data-bu');
    var disabled=!allBUChecked&&!activeBU[bu];
    c.disabled=disabled;
    var label=c.closest('.fl-chk-label');
    if(label){
      label.style.opacity=disabled?'0.35':'';
      label.style.pointerEvents=disabled?'none':'';
    }
  });
  // Region 해제 시 → 해당 Region 소속 국가 disabled
  var regionChks=document.querySelectorAll('#filter-layer .fl-chk[data-filter="region"]');
  var activeCountries={};
  regionChks.forEach(function(c){
    if(c.checked){var rc=_REGIONS[c.value]||[];rc.forEach(function(cn){activeCountries[cn]=true})}
  });
  var allRegChecked=true;
  regionChks.forEach(function(c){if(!c.checked)allRegChecked=false});
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="country"]').forEach(function(c){
    var cn=c.value;
    var disabled=!allRegChecked&&!activeCountries[cn];
    c.disabled=disabled;
    var label=c.closest('.fl-chk-label');
    if(label){
      label.style.opacity=disabled?'0.35':'';
      label.style.pointerEvents=disabled?'none':'';
    }
  });
}
function getCheckedValues(filterName){
  var vals={};var total=0;var checked=0;
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="'+filterName+'"]').forEach(function(c){
    total++;if(c.checked){vals[c.value]=true;checked++}
  });
  return{vals:vals,total:total,checked:checked,isAll:total===checked};
}
function toggleCBrand(cb){
  var show=cb.checked;
  document.querySelectorAll('.cnty-section .cbrand-bar').forEach(function(el){
    el.style.display=show?'':'none';
  });
}
// 현재 보이는 콘텐츠 패널 (주간/월간) 내의 국가 섹션을 찾는 헬퍼
function _getVisibleCntySections(){
  var results=[];
  document.querySelectorAll('.cnty-section').forEach(function(sec){
    // 부모가 display:none이면 제외
    var p=sec.closest('#bu-weekly-content')||sec.closest('#bu-monthly-content');
    if(!p||p.style.display!=='none')results.push(sec);
  });
  return results;
}
function switchCntyView(mode){
  _getVisibleCntySections().forEach(function(sec){
    var vp=sec.querySelector('.cnty-view-product');
    var vc=sec.querySelector('.cnty-view-country');
    if(vp)vp.style.display=mode==='product'?'':'none';
    if(vc)vc.style.display=mode==='country'?'':'none';
    sec.querySelectorAll('.cnty-view-tab').forEach(function(btn){btn.classList.remove('active')});
    var tabs=sec.querySelectorAll('.cnty-view-tab');
    if(mode==='country'&&tabs[0])tabs[0].classList.add('active');
    if(mode==='product'&&tabs[1])tabs[1].classList.add('active');
    var titleEl=sec.querySelector('.cnty-section-title');
    if(titleEl){
      // periodTag 보존 (기존 span 태그)
      var existingTag=titleEl.querySelector('span');var tagHtml=existingTag?existingTag.outerHTML:'';
      titleEl.innerHTML=(mode==='product'
        ? (_lang==='en'?'GEO Visibility by Product':'제품별 GEO Visibility 현황')
        : (_lang==='en'?'GEO Visibility by Country':'국가별 GEO Visibility 현황'))+tagHtml;
    }
  });
  applyCntyFilters();
}
function toggleCntyFilter(btn){
  btn.classList.toggle('active');
  applyCntyFilters();
}
function applyCntyFilters(){
  var selProducts=getCheckedValues('product');
  var selCountries=getCheckedValues('country');
  // Get product names from selected IDs
  var activeProductNames={};
  _products.forEach(function(p){if(selProducts.isAll||selProducts.vals[p.id]){activeProductNames[p.kr]=true;if(p.category)activeProductNames[p.category]=true}});
  // product view
  document.querySelectorAll('.cnty-view-product .vbar-item').forEach(function(item){
    var p=item.getAttribute('data-product');var c=item.getAttribute('data-country');
    var show=(selProducts.isAll||activeProductNames[p])&&(selCountries.isAll||selCountries.vals[c]);
    item.classList.toggle('hidden',!show);
  });
  document.querySelectorAll('.cnty-view-product .cnty-product').forEach(function(grp){
    var gp=grp.getAttribute('data-group-product');
    var vis=grp.querySelectorAll('.vbar-item:not(.hidden)').length;
    var show=vis>0&&(selProducts.isAll||activeProductNames[gp]);
    grp.style.display=show?'':'none';
  });
  // country view
  document.querySelectorAll('.cnty-view-country .vbar-item').forEach(function(item){
    var p=item.getAttribute('data-product');var c=item.getAttribute('data-country');
    var show=(selProducts.isAll||activeProductNames[p])&&(selCountries.isAll||selCountries.vals[c]);
    item.classList.toggle('hidden',!show);
  });
  document.querySelectorAll('.cnty-view-country .cnty-product').forEach(function(grp){
    var gc=grp.getAttribute('data-group-country');
    var vis=grp.querySelectorAll('.vbar-item:not(.hidden)').length;
    var show=vis>0&&(selCountries.isAll||selCountries.vals[gc]);
    grp.style.display=show?'':'none';
  });
  // Also sync cnty-filter chips with top filter
  document.querySelectorAll('#cnty-filter-products .filter-chip').forEach(function(chip){
    var v=chip.getAttribute('data-filter-value');
    chip.classList.toggle('active',!!activeProductNames[v]);
  });
  document.querySelectorAll('#cnty-filter-countries .filter-chip').forEach(function(chip){
    var v=chip.getAttribute('data-filter-value');
    chip.classList.toggle('active',selCountries.isAll||!!selCountries.vals[v]);
  });
}
function switchCitCnty(btn){
  var sec=btn.closest('.section-card')||document.getElementById('cit-domain-section');
  sec.querySelectorAll('.filter-chip').forEach(function(c){c.classList.remove('active')});
  btn.classList.add('active');
  var sel=btn.getAttribute('data-cit-cnty-val');
  sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
    p.style.display=p.getAttribute('data-cit-cnty')===sel?'':'none';
  });
}
// ─── Embedded Data ───
${(()=>{const h=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${h(a||[])};
var _unlaunchedMap=${h(l)};
var _PROD_TO_UL=${h(ve)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((m==null?void 0:m.monthlyVis)||[])};
var _total=${h(f)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(p)};`})()}
${(()=>{const h=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(Ho)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Ut}';
var _FONT=${h(zt)};
var _COMP='${ee}';
var _REGIONS=${h(Object.fromEntries(Object.entries(Ke).map(([d,g])=>[d,g.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Ke).map(([h,d])=>[h,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
function _brandColor(name,idx){return _BRAND_COLORS[name]||_FALLBACK[idx%_FALLBACK.length]}
// endIdx: 0..N-1 까지만 라인/포인트 그림 (-1 또는 미지정 = 전체). 배경 가로선은 항상 풀 폭.
function _trendMultiSvg(brandData,labels,w,h,endIdx){
  var brands=Object.keys(brandData);if(!brands.length||!labels.length)return'';
  var mn=Infinity,mx=-Infinity;
  brands.forEach(function(b){(brandData[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
  if(!isFinite(mn))return'';
  var pad=Math.max((mx-mn)*0.15,2);mn=Math.max(0,mn-pad);mx=Math.min(100,mx+pad);var rng=mx-mn||1;
  var N=labels.length;var pt=8,pb=8,ch=h-pt-pb;var g='';
  var maxI=(typeof endIdx==='number'&&endIdx>=0&&endIdx<N)?endIdx:N-1;
  for(var i=0;i<=4;i++){var y=pt+(i/4)*ch;g+='<line x1="0" y1="'+y.toFixed(1)+'" x2="'+w+'" y2="'+y.toFixed(1)+'" stroke="#E8EDF2" stroke-width="1"/>';}
  brands.forEach(function(b,bi){
    var vals=brandData[b]||[];var color=_brandColor(b,bi);var isLG=b==='LG';var sw=isLG?2.5:1.5;var op=isLG?1:0.7;
    var pts=[];
    vals.forEach(function(v,i){if(v!=null&&i<=maxI){var x=((i+0.5)/N)*w;var y=pt+(1-(v-mn)/rng)*ch;pts.push({x:x,y:y,v:v})}});
    if(!pts.length)return;
    if(pts.length>=2){var d=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');g+='<path d="'+d+'" stroke="'+color+'" fill="none" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round" opacity="'+op+'"/>';}
    pts.forEach(function(p){g+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?3.5:2.5)+'" fill="#fff" stroke="'+color+'" stroke-width="'+(isLG?2:1.5)+'" opacity="'+op+'"/>'});
  });
  return'<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">'+g+'</svg>';
}
// ─── Helpers ───
function _fmt(n){return Number(n).toLocaleString('en-US')}
function _bc(n,i){return _BRAND_COLORS[n]||_FALLBACK[i%_FALLBACK.length]}
function _statusInfo(s){
  if(s==='lead')return{bg:'#ECFDF5',border:'#A7F3D0',color:'#15803D',label:_lang==='en'?'Lead':'선도'};
  if(s==='behind')return{bg:'#FFFBEB',border:'#FDE68A',color:'#B45309',label:_lang==='en'?'Behind':'추격'};
  if(s==='critical')return{bg:'#FFF1F2',border:'#FECDD3',color:'#BE123C',label:_lang==='en'?'Critical':'취약'};
  return{bg:'#F8FAFC',border:'#E2E8F0',color:'#475569',label:'—'};
}
var _TREND_BC=${Ye};

// ─── Checkbox-based Filter Logic ───
function onFilterChange(){
  var selBU=getCheckedValues('bu');
  var selProd=getCheckedValues('product');
  var selCountry=getCheckedValues('country');
  // Update "All" checkboxes
  updateAllCheckbox('bu');
  updateAllCheckbox('product');
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  syncAllFilterLayers();
  // 상위 BU/Region 해제 시 하위 항목 disabled 처리
  _syncDisabledState();
  // Apply filters
  filterBU(selBU);
  filterProducts(selProd);
  filterTrend(selBU,selProd,selCountry);
  applyCntyFilters();
  updateHeroFromCheckboxes();
  updateProductScores(selCountry,selBU,selProd);
  updateMonthlyProductScores(selCountry);
  updateMonthlyTrend(selCountry);
  filterTrendByProduct(selProd);
  applyUnlaunchedStyle(selCountry);
}
// 월간 카드 업데이트: 국가 필터 반영
function updateMonthlyProductScores(selCountry){
  var monthlyContainer=document.getElementById('bu-monthly-content');
  if(!monthlyContainer)return;
  var cards=monthlyContainer.querySelectorAll('.prod-card');
  var countries=selCountry.isAll?null:Object.keys(selCountry.vals);
  if(selCountry.isAll){
    cards.forEach(function(card){
      var ms=parseFloat(card.getAttribute('data-ms'));
      var mr=parseFloat(card.getAttribute('data-mr'));
      if(isNaN(ms))return;
      var compPct=isNaN(mr)?100:Math.round(mr);
      var status=compPct>=100?'lead':compPct>=80?'behind':'critical';
      var st=_statusInfo(status);
      var sparkColor=status==='critical'?'#BE123C':status==='behind'?'#D97706':'#15803D';
      var scoreEl=card.querySelector('.prod-score');if(scoreEl)scoreEl.innerHTML=ms.toFixed(1)+'<small>%</small>';
      var compBar=card.querySelector('.prod-comp-bar');if(compBar){compBar.style.width=Math.min(compPct,120)+'%';compBar.style.background=sparkColor}
      var compPctEl=card.querySelector('.prod-comp-pct');if(compPctEl){compPctEl.textContent=compPct+'%';compPctEl.style.color=sparkColor}
      var badge=card.querySelector('.prod-badge');if(badge){badge.style.background=st.bg;badge.style.color=st.color;badge.style.borderColor=st.border;badge.textContent=st.label}
      card.style.borderColor=st.border;
      // 전체 국가: 서버 렌더 MoM(data-mmom) 복원
      var origMom=parseFloat(card.getAttribute('data-mmom'));
      _setProdMom(card,isNaN(origMom)?null:origMom);
      // TTL 미니차트 복원
      var nameEl=card.querySelector('.prod-name');
      if(nameEl){
        var name=nameEl.textContent.replace(/\\*$/,'');
        var prod=_products.find(function(p){return p.kr===name||p.en===name});
        if(prod){
          var mChart=card.querySelector('.trend-monthly');
          if(mChart){
            var msc=_sliceMsByCurMonth(prod.monthlyScores||[]);
            var mData=msc.length?msc.map(function(m){return m.score}):[ms];
            var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var mLabels=msc.length?msc.map(function(m){var km=String(m.date||'').match(/(\\d{1,2})월/);return km?ML[parseInt(km[1])-1]:m.date}):['M0'];
            var _fi2=_baselineIdx(prod.id,mLabels);
            var _audM2=String(prod.id||'').toLowerCase()==='audio'?-60:0;
            mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,sparkColor,_fi2,_shouldBridge(prod.id),_fi2>0?'*Baseline 재설정':'',_audM2,0);
          }
        }
      }
    });
    return;
  }
  if(!countries||!countries.length)return;
  // 월간 국가별 데이터에서 선택 국가 평균
  var prodKeyMap={};
  _products.forEach(function(p){
    var keys=[(p.category||'').toUpperCase(),p.id.toUpperCase(),(p.kr||'').toUpperCase(),(p.en||'').toUpperCase()];
    keys.forEach(function(k){if(k)prodKeyMap[k]=p.id});
  });
  var avgByProdId={};
  _productsCnty.forEach(function(r){
    if(countries.indexOf(r.country||'')<0)return;
    var rKey=(r.product||'').toUpperCase();
    var prodId=prodKeyMap[rKey];
    if(!prodId)return;
    if(!avgByProdId[prodId])avgByProdId[prodId]={scores:[],compScores:[]};
    // 월 드롭다운 활성 시 해당 월의 score/compScore 사용, 아니면 r.score/r.compScore(최신)
    var sc=r.score,cs=r.compScore;
    if(_curMonthIdxIn12>=0){
      var ms=(r.monthlyScores||[]).find(function(m){return _dateMi(m.date)===_curMonthIdxIn12});
      if(ms){sc=Number(ms.score)||0;cs=Number(ms.compScore)||0}
    }
    avgByProdId[prodId].scores.push(sc||0);
    avgByProdId[prodId].compScores.push(cs||0);
  });
  cards.forEach(function(card){
    var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
    var name=nameEl.textContent.replace(/\\*$/,'');
    var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
    var avg=avgByProdId[prod.id];
    var score,compPct;
    if(avg&&avg.scores.length){
      score=+(avg.scores.reduce(function(s,v){return s+v},0)/avg.scores.length).toFixed(1);
      var comp=+(avg.compScores.reduce(function(s,v){return s+v},0)/avg.compScores.length).toFixed(1);
      compPct=comp>0?Math.round((score/comp)*100):100;
    }else{
      var ms=parseFloat(card.getAttribute('data-ms'));
      score=isNaN(ms)?0:ms;compPct=100;
    }
    var status=compPct>=100?'lead':compPct>=80?'behind':'critical';
    var st=_statusInfo(status);
    var sparkColor=status==='critical'?'#BE123C':status==='behind'?'#D97706':'#15803D';
    var scoreEl=card.querySelector('.prod-score');if(scoreEl)scoreEl.innerHTML=score.toFixed(1)+'<small>%</small>';
    var compBar=card.querySelector('.prod-comp-bar');if(compBar){compBar.style.width=Math.min(compPct,120)+'%';compBar.style.background=sparkColor}
    var compPctEl=card.querySelector('.prod-comp-pct');if(compPctEl){compPctEl.textContent=compPct+'%';compPctEl.style.color=sparkColor}
    var badge=card.querySelector('.prod-badge');if(badge){badge.style.background=st.bg;badge.style.color=st.color;badge.style.borderColor=st.border;badge.textContent=st.label}
    card.style.borderColor=st.border;
    // 선택 국가 기반 MoM 재계산
    _setProdMom(card,_filteredMomD(prod.id,countries));
    // 월간 미니차트: 선택 국가들의 월별 평균 시리즈 전체로 렌더 (TTL 기반 폴백)
    var mChart=card.querySelector('.trend-monthly');
    if(mChart&&prod){
      var series=_filteredMonthlySeries(prod.id,countries);
      if(series&&series.data.length){
        var _fi3=_baselineIdx(prod.id,series.labels);
        var _audM3=String(prod.id||'').toLowerCase()==='audio'?-60:0;
        mChart.innerHTML=_miniSvgNullAware(series.data,series.labels,300,90,sparkColor,_fi3,_shouldBridge(prod.id),_fi3>0?'*Baseline 재설정':'',_audM3,0);
      }else{
        var ms=_sliceMsByCurMonth(prod.monthlyScores||[]);
        var mData=ms.length?ms.map(function(m){return m.score}):[score];
        if(mData.length)mData[mData.length-1]=score;
        var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var mLabels=ms.length?ms.map(function(m){var km=String(m.date||'').match(/(\\d{1,2})월/);return km?ML[parseInt(km[1])-1]:m.date}):['M0'];
        var _fi4=_baselineIdx(prod.id,mLabels);
        var _audM4=String(prod.id||'').toLowerCase()==='audio'?-60:0;
        mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,sparkColor,_fi4,_shouldBridge(prod.id),_fi4>0?'*Baseline 재설정':'',_audM4,0);
      }
    }
  });
}
// 월간 트렌드 차트: 국가 필터에 따라 재렌더링
function updateMonthlyTrend(selCountry){
  var container=document.getElementById('monthly-trend-container');
  if(!container)return;
  var countries=selCountry.isAll?null:Object.keys(selCountry.vals).filter(function(k){return selCountry.vals[k]});
  // 제품명 → id 매핑
  var NAME_TO_ID={'TV':'tv','모니터':'monitor','오디오':'audio','세탁기':'washer','냉장고':'fridge','식기세척기':'dw','청소기':'vacuum','Cooking':'cooking','RAC':'rac','Aircare':'aircare'};
  // 각 트렌드 row의 SVG+표를 재렌더링
  container.querySelectorAll('.trend-row[data-prodid]').forEach(function(row){
    var pid=row.getAttribute('data-prodid');
    var prod=_products.find(function(p){return p.id===pid});
    if(!prod||!prod.monthlyScores||prod.monthlyScores.length<2)return;
    var ms=prod.monthlyScores;
    var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var enM={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
    function pmi(d){var km=String(d).match(/(\\d{1,2})월/);if(km)return parseInt(km[1])-1;var em=String(d).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return em?enM[em[1].toLowerCase()]:-1}
    // 12개월 고정
    var sorted=[0,1,2,3,4,5,6,7,8,9,10,11];
    // 브랜드 데이터 구성
    var allBrands={};
    ms.forEach(function(m){
      if(!m.allScores)return;
      Object.keys(m.allScores).forEach(function(b){if(!allBrands[b])allBrands[b]=true});
    });
    var brandData={};
    // 국가 필터용: 선택 국가들의 브랜드별 평균 계산 (최신 월 기준, 이전 월은 비율 적용)
    var cntyBrandAvg={};
    var ttlBrandLast={};
    if(countries){
      var prodKr=prod.kr||prod.category||'';
      // 선택 국가들의 allScores 집계
      var brandSums={};var brandCounts={};
      countries.forEach(function(c){
        var match=_productsCnty.find(function(r){return r.country===c&&(r.product===prodKr||r.product===prod.category)});
        if(match&&match.allScores){
          Object.keys(match.allScores).forEach(function(b){
            if(!brandSums[b])brandSums[b]=0;
            if(!brandCounts[b])brandCounts[b]=0;
            brandSums[b]+=match.allScores[b];
            brandCounts[b]++;
          });
        }
      });
      Object.keys(brandSums).forEach(function(b){cntyBrandAvg[b]=+(brandSums[b]/brandCounts[b]).toFixed(1)});
      // TTL 마지막 월 브랜드 값 (비율 계산용)
      var lastMs=ms[ms.length-1];
      if(lastMs&&lastMs.allScores)ttlBrandLast=lastMs.allScores;
    }
    Object.keys(allBrands).forEach(function(brand){
      brandData[brand]=sorted.map(function(mi){
        var found=ms.find(function(m){return pmi(m.date)===mi});
        if(!found||!found.allScores)return null;
        var ttlVal=found.allScores[brand];
        if(ttlVal==null)return null;
        if(!countries)return ttlVal;
        // 국가 필터: 선택 국가 평균이 있으면 비율 적용
        var cntyAvg=cntyBrandAvg[brand];
        var ttlLast=ttlBrandLast[brand];
        if(cntyAvg!=null&&ttlLast!=null&&ttlLast>0){
          // 이전 월은 TTL 비율로 스케일링: cntyAvg * (이전월TTL / 최신월TTL)
          return +(cntyAvg * (ttlVal / ttlLast)).toFixed(1);
        }
        if(cntyAvg!=null)return cntyAvg;
        return ttlVal;
      });
    });
    // 브랜드 정렬 (LG 먼저)
    var brands=Object.keys(brandData).sort(function(a,b){
      if(a==='LG')return -1;if(b==='LG')return 1;
      var la=(brandData[a]||[]).filter(function(v){return v!=null});la=la.length?la[la.length-1]:0;
      var lb=(brandData[b]||[]).filter(function(v){return v!=null});lb=lb.length?lb[lb.length-1]:0;
      return lb-la;
    });
    if(!brands.length)return;
    // 테이블 재생성
    var mLabels=ML;var N=12;
    var tbl=row.querySelector('table');
    if(!tbl)return;
    // SVG 재생성
    var svgTd=tbl.querySelector('td[colspan]');
    if(svgTd){svgTd.innerHTML=_trendMultiSvg(brandData,mLabels,N*80,180,_curMonthIdxIn12)}
    // 범례
    var legendTd=tbl.querySelectorAll('tr')[1];
    if(legendTd){
      var legTd=legendTd.querySelector('td[colspan]');
      if(legTd){
        var lh='';
        brands.forEach(function(b,i){var c=_brandColor(b,i);var isLG=b==='LG';lh+='<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.7)+'"></i><span style="font-size:13px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'});
        legTd.innerHTML=lh;
      }
    }
    // 데이터 행 재생성
    var tbody=tbl.querySelector('tbody');if(!tbody)return;
    // thead(2행: chart+legend) + thead row(Brand|W1|W2..) + data rows
    // 기존 데이터 행 제거 후 재생성
    var existingRows=tbody.querySelectorAll('tr');
    var startIdx=3;// chart + legend + header = 3행
    for(var ri=existingRows.length-1;ri>=startIdx;ri--){existingRows[ri].remove()}
    brands.forEach(function(b,i){
      var c=_brandColor(b,i);var isLG=b==='LG';
      var tr=document.createElement('tr');
      tr.style.background=isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC';
      var html='<td style="padding:5px 6px;font-size:13px;font-weight:'+(isLG?700:500)+';color:'+c+';border-bottom:1px solid #F8FAFC;white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>';
      sorted.forEach(function(mi){
        var val=brandData[b]?brandData[b][mi]:null;
        html+='<td style="text-align:center;padding:5px 2px;font-size:14px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>';
      });
      tr.innerHTML=html;
      tbody.appendChild(tr);
    });
    // 상태 배지 업데이트
    var lgLast=(brandData.LG||[]).filter(function(v){return v!=null});lgLast=lgLast.length?lgLast[lgLast.length-1]:null;
    var lgSpan=row.querySelector('span[style*="font-size:16px"]');
    if(lgSpan&&lgLast!=null)lgSpan.textContent='LG '+lgLast.toFixed(1)+'%';
  });
}
// 선택된 국가 내에서 제품이 "모두 미출시"면 카드/트렌드에 회색 처리
function applyUnlaunchedStyle(selCountry){
  var countries = selCountry.isAll ? ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'] : Object.keys(selCountry.vals).filter(function(k){return selCountry.vals[k]});
  if(!countries.length)countries = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'];
  var isEn=document.documentElement.lang==='en';
  // 제품 카드
  document.querySelectorAll('.prod-card[data-prodid]').forEach(function(card){
    var pid = card.getAttribute('data-prodid');
    var allUL = countries.every(function(c){return _isUnlaunched(c,pid)});
    var someUL = !allUL && countries.some(function(c){return _isUnlaunched(c,pid)});
    card.classList.toggle('is-unlaunched', allUL);
    var badge = card.querySelector('.prod-badge');
    if(badge && allUL){badge.textContent = isEn?'Unlaunched':'미출시'}
    // 미출시 라벨 동적 변경
    var ulNote = card.querySelector('.prod-ul-note');
    if(ulNote){
      if(allUL){
        ulNote.style.display='block';
        ulNote.textContent=isEn?'* Not launched':'* 제품 미출시 국가';
      } else if(someUL && countries.length>1){
        ulNote.style.display='block';
        ulNote.textContent=isEn?'* Includes unlaunched countries':'* 제품 미출시 국가 포함';
      } else if(someUL && countries.length===1){
        ulNote.style.display='block';
        ulNote.textContent=isEn?'* Not launched':'* 제품 미출시 국가';
      } else {
        ulNote.style.display='none';
      }
    }
  });
  // 트렌드 row — 미출시 시 텍스트·배경·테두리·글자색까지 회색으로 통일.
  // 최초 1회 원본 status 정보(text/bg/color/border)를 dataset에 캐시 → allUL 해제 시 복원.
  document.querySelectorAll('.trend-row[data-prodid]').forEach(function(row){
    var pid = row.getAttribute('data-prodid');
    var allUL = countries.every(function(c){return _isUnlaunched(c,pid)});
    row.classList.toggle('is-unlaunched', allUL);
    var badge = row.querySelector('.trend-status-badge');
    if(!badge)return;
    if(badge.dataset.origText==null){
      badge.dataset.origText=badge.textContent;
      badge.dataset.origBg=badge.style.background;
      badge.dataset.origColor=badge.style.color;
      badge.dataset.origBorder=badge.style.borderColor||badge.style.border;
    }
    if(allUL){
      badge.textContent=isEn?'Unlaunched':'미출시';
      badge.style.background='#F1F5F9';
      badge.style.color='#64748B';
      badge.style.borderColor='#CBD5E1';
    }else{
      badge.textContent=badge.dataset.origText;
      badge.style.background=badge.dataset.origBg;
      badge.style.color=badge.dataset.origColor;
      badge.style.borderColor=badge.dataset.origBorder;
    }
  });
  // 국가별 섹션 vbar
  document.querySelectorAll('.vbar-item[data-prodid][data-country]').forEach(function(item){
    var pid = item.getAttribute('data-prodid');
    var cnty = item.getAttribute('data-country');
    item.classList.toggle('is-unlaunched', _isUnlaunched(cnty, pid));
  });
}
function filterBU(selBU){
  document.querySelectorAll('.bu-group[data-bu]').forEach(function(g){
    var bu=g.getAttribute('data-bu');
    g.style.display=(selBU.isAll||selBU.vals[bu])?'':'none';
  });
}
function filterProducts(selProd){
  if(selProd.isAll){
    document.querySelectorAll('.prod-card').forEach(function(c){c.style.display=''});
    return;
  }
  document.querySelectorAll('.prod-card').forEach(function(c){
    var pid=c.getAttribute('data-prodid');
    c.style.display=(pid&&selProd.vals[pid])?'':'none';
  });
}
function filterTrendByProduct(selProd){
  // 주간+월간 트렌드 행: 선택 안 된 제품 숨김
  document.querySelectorAll('.trend-row[data-prodid]').forEach(function(row){
    var pid=row.getAttribute('data-prodid');
    row.style.display=(selProd.isAll||selProd.vals[pid])?'':'none';
  });
  // BU 그룹: 내부 visible row 없으면 그룹도 숨김
  document.querySelectorAll('#trend-container .bu-group[data-bu], #monthly-trend-container .bu-group[data-bu]').forEach(function(grp){
    var visRows=grp.querySelectorAll('.trend-row[data-prodid]');
    var hasVisible=false;
    visRows.forEach(function(r){if(r.style.display!=='none')hasVisible=true});
    grp.style.display=hasVisible?'':'none';
  });
}
function filterTrend(selBU,selProd,selCountry){
  // Determine country for trend data
  var trendCnty='Total';
  var trendCountries=null; // 다중 국가 평균용
  if(!selCountry.isAll){
    var cKeys=Object.keys(selCountry.vals);
    if(cKeys.length===1)trendCnty=cKeys[0];
    else if(cKeys.length>1)trendCountries=cKeys;
  }
  var container=document.getElementById('trend-container');if(!container)return;

  // 월간 모드: 제품별 월간 스코어 표시
  if(_periodMode==='monthly'){
    _renderMonthlyTrend(container,selBU,selProd,trendCnty,trendCountries);
    return;
  }

  // 다중 국가 평균 데이터 계산 (국가별 주간 데이터 없으면 Total 폴백, Total도 없으면 아무 국가)
  function _pickAnyCountry(prodData){
    var keys=Object.keys(prodData||{});
    for(var i=0;i<keys.length;i++){
      var v=prodData[keys[i]];
      if(v&&Object.keys(v).length)return v;
    }
    return {};
  }
  function _avgWeeklyData(prodId){
    var prodData=_weeklyAll[prodId]||{};
    if(!trendCountries){
      var d=prodData[trendCnty];
      if(!d||!Object.keys(d).length)d=prodData['Total']||prodData['TTL']||_pickAnyCountry(prodData);
      return d;
    }
    var allBrands={};
    trendCountries.forEach(function(c){
      var cData=prodData[c];
      if(!cData||!Object.keys(cData).length)cData=prodData['Total']||prodData['TTL']||_pickAnyCountry(prodData);
      Object.keys(cData).forEach(function(brand){
        if(!allBrands[brand])allBrands[brand]=[];
        allBrands[brand].push(cData[brand]||[]);
      });
    });
    var avg={};
    Object.keys(allBrands).forEach(function(brand){
      var arrays=allBrands[brand];
      var maxLen=Math.max.apply(null,arrays.map(function(a){return a.length}));
      avg[brand]=[];
      for(var i=0;i<maxLen;i++){
        var sum=0;var cnt=0;
        arrays.forEach(function(a){if(a[i]!=null){sum+=a[i];cnt++}});
        avg[brand].push(cnt>0?sum/cnt:null);
      }
    });
    return avg;
  }

  var BU=['MS','HS','ES'];var html='';var hasTrend=false;
  var selectedProdIds=selProd.isAll?null:selProd.vals;
  BU.forEach(function(b){
    if(!selBU.isAll&&!selBU.vals[b])return;
    var prods=_products.filter(function(p){return p.bu===b&&(!selectedProdIds||selectedProdIds[p.id])});if(!prods.length)return;
    var rows='';
    prods.forEach(function(p){
      var data=_avgWeeklyData(p.id);
      var brands=Object.keys(data).sort(function(a,b2){if(a==='LG')return -1;if(b2==='LG')return 1;var la=(data[a]||[])[data[a].length-1]||0;var lb=(data[b2]||[])[data[b2].length-1]||0;return lb-la});
      if(!brands.length)return;
      var st=_statusInfo(p.status);var lgL=data.LG?data.LG[data.LG.length-1]:null;
      var legend=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.7)+'"></i><span style="font-size:13px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+br+'</span></span>'}).join('');
      var N=_wLabels.length;
      var colgroup='<colgroup><col style="width:'+_TREND_BC+'px">'+_wLabels.map(function(){return'<col>'}).join('')+'</colgroup>';
      var chartRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:8px 0;border:0">'+_trendMultiSvg(data,_wLabels,N*80,180,_curWeekIdx)+'</td></tr>';
      var legendRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:4px 0 6px;border:0">'+legend+'</td></tr>';
      var thead='<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>'+_wLabels.map(function(w){return'<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">'+w+'</th>'}).join('')+'</tr>';
      var tbody=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';var cells=_wLabels.map(function(_,wi){var val=data[br]?data[br][wi]:null;return'<td style="text-align:center;padding:5px 2px;font-size:14px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>'}).join('');return'<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 6px;font-size:14px;font-weight:'+(isLG?700:500)+';color:'+c+';border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+br+'</td>'+cells+'</tr>'}).join('');
      rows+='<div class="trend-row" data-prodid="'+(p.id||p.category||'')+'" style="margin-bottom:24px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="width:3px;height:16px;border-radius:2px;background:'+_RED+';flex-shrink:0"></span><span style="font-size:15px;font-weight:700;color:#1A1A1A">'+p.kr+'</span><span style="font-size:13px;font-weight:700;padding:2px 8px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>'+(lgL!=null?'<span style="font-size:13px;font-weight:700;color:#1A1A1A">LG '+lgL.toFixed(1)+'%</span>':'')+(p.compName?'<span style="font-size:13px;color:#94A3B8">vs '+p.compName+' '+(p.compRatio||'')+'%</span>':'')+'</div><div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:'+_FONT+'">'+colgroup+'<tbody>'+chartRow+legendRow+thead+tbody+'</tbody></table></div></div>';
    });
    if(!rows)return;hasTrend=true;
    html+='<div class="bu-group" data-bu="'+b+'" style="margin-bottom:20px"><div class="bu-header"><span class="bu-label">'+b+'</span></div>'+rows+'</div>';
  });
  // 필터 변경 후 데이터가 비었을 때 컨테이너를 비우지 않음 — 이전 SSR/렌더 유지
  if(!hasTrend)return;
  var title=_lang==='en'?'Weekly Competitor Trend':'주간 경쟁사 트렌드';
  var sub=_wLabels[0]+'–'+_wLabels[_wLabels.length-1]+' ('+_wLabels.length+(_lang==='en'?' weeks':'주')+')';
  var cntyLabel=trendCountries?(' — '+trendCountries.join(', ')+' avg'):(trendCnty==='Total'?'':' — '+trendCnty);
  container.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+title+cntyLabel+'</div><span class="legend">'+sub+'</span></div><div class="section-body">'+html+'</div></div>';
}

// ─── 월간 트렌드 렌더링 ───
var _mLabels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function _parseMonth(d){
  var ML=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var m=d.match(/([0-9]{1,2})월/);if(m)return parseInt(m[1])-1;
  var e=d.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(e)return ML.indexOf(e[1].toLowerCase());
  var iso=d.match(/[0-9]{4}-([0-9]{2})/);if(iso)return parseInt(iso[1])-1;
  return -1;
}
function _getMonthlyBrandData(cat,countries){
  // 국가 필터에 따라 제품별 월별 브랜드별 스코어 계산
  // 반환: { LG: [null,...,86,...], Samsung: [null,...,91,...], ... }
  var N=12;

  // 1) _monthlyVis 데이터 활용 (division 기반 — cat은 사실 division에 매핑)
  //    _monthlyVis: [{ date, country, division, lg, comp }]
  //    cat을 division이 아닌 product category로 매칭하기 위해 _products에서 division(bu) 찾기
  var prod=_products.find(function(pr){return(pr.category||'').toUpperCase()===cat||pr.id.toUpperCase()===cat});

  // 2) _monthlyVis에서 해당 제품의 월간 데이터 수집
  if(_monthlyVis&&_monthlyVis.length>0&&prod){
    var bu=prod.bu;// MS, HS, ES
    var byMonth={};// { monthIdx: { lg: [scores], comp: [scores] } }
    _monthlyVis.forEach(function(r){
      if(bu&&r.division&&r.division!==bu)return;
      if(countries&&countries.indexOf(r.country||'')<0)return;
      var mi=_parseMonth(r.date||'');if(mi<0)return;
      if(!byMonth[mi])byMonth[mi]={lg:[],comp:[]};
      byMonth[mi].lg.push(r.lg||0);
      if(r.comp>0)byMonth[mi].comp.push(r.comp);
    });
    if(Object.keys(byMonth).length>0){
      var lgArr=[];var compArr=[];
      for(var i=0;i<N;i++){
        var m=byMonth[i];
        lgArr.push(m&&m.lg.length?m.lg.reduce(function(a,b){return a+b},0)/m.lg.length:null);
        compArr.push(m&&m.comp.length?m.comp.reduce(function(a,b){return a+b},0)/m.comp.length:null);
      }
      var result={LG:lgArr};
      if(compArr.some(function(v){return v!=null}))result.Samsung=compArr;
      return result;
    }
  }

  // 3) 폴백: _products allScores 사용 (단일 월 데이터)
  if(!countries){
    if(!prod||!prod.allScores)return null;
    var mi2=_parseMonth(prod.date||'');if(mi2<0)return null;
    var result2={};
    Object.keys(prod.allScores).forEach(function(brand){
      var arr=[];for(var i=0;i<N;i++)arr.push(null);
      arr[mi2]=prod.allScores[brand];
      result2[brand]=arr;
    });
    return result2;
  }
  // 4) 폴백: _productsCnty에서 선택 국가 평균
  var byBrandMonth={};
  _productsCnty.forEach(function(r){
    if((r.product||'').toUpperCase()!==cat)return;
    if(countries.indexOf(r.country||'')<0)return;
    var mi3=_parseMonth(r.date||'');if(mi3<0)return;
    if(!r.allScores)return;
    Object.keys(r.allScores).forEach(function(brand){
      if(!byBrandMonth[brand])byBrandMonth[brand]={};
      if(!byBrandMonth[brand][mi3])byBrandMonth[brand][mi3]=[];
      byBrandMonth[brand][mi3].push(r.allScores[brand]);
    });
  });
  if(!Object.keys(byBrandMonth).length)return null;
  var result3={};
  Object.keys(byBrandMonth).forEach(function(brand){
    var arr=[];for(var i=0;i<N;i++){
      var vals=byBrandMonth[brand][i];
      arr.push(vals?vals.reduce(function(a,b){return a+b},0)/vals.length:null);
    }
    result3[brand]=arr;
  });
  return result3;
}
function _renderMonthlyTrend(container,selBU,selProd,trendCnty,trendCountries){
  var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var html='';var hasTrend=false;
  var selectedProdIds=selProd.isAll?null:selProd.vals;
  var countries=trendCountries||null;// null=전체(TTL), 배열=선택 국가
  if(trendCnty!=='Total'&&!trendCountries)countries=[trendCnty];// 단일 국가
  var BU=['MS','HS','ES'];
  BU.forEach(function(b){
    if(!selBU.isAll&&!selBU.vals[b])return;
    var prods=_products.filter(function(p){return p.bu===b&&(!selectedProdIds||selectedProdIds[p.id])});
    if(!prods.length)return;
    var rows='';
    prods.forEach(function(p){
      var cat=(p.category||p.id||'').toUpperCase();
      var brandData=_getMonthlyBrandData(cat,countries);
      if(!brandData)return;
      var brands=Object.keys(brandData).sort(function(a,b2){if(a==='LG')return -1;if(b2==='LG')return 1;return 0});
      if(!brands.length)return;
      var hasAny=brands.some(function(br){return brandData[br].some(function(v){return v!=null})});
      if(!hasAny)return;
      var N=12;
      var colgroup='<colgroup><col style="width:'+_TREND_BC+'px">'+ML.map(function(){return'<col>'}).join('')+'</colgroup>';
      // SVG 멀티 라인 차트
      var svgW=N*80;var svgH=180;
      var chartSvg=_trendMultiSvg(brandData,ML,svgW,svgH,_curMonthIdxIn12);
      // 범례
      var legend=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.7)+'"></i><span style="font-size:14px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+br+'</span></span>'}).join('');
      var chartRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:8px 0;border:0">'+chartSvg+'</td></tr>';
      var legendRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:4px 0 6px;border:0">'+legend+'</td></tr>';
      var thead='<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>'+ML.map(function(m){return'<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">'+m+'</th>'}).join('')+'</tr>';
      var tbody=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';var cells=ML.map(function(_,mi){var val=brandData[br][mi];return'<td style="text-align:center;padding:5px 2px;font-size:14px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>'}).join('');return'<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 6px;font-size:14px;font-weight:'+(isLG?700:500)+';color:'+c+';border-bottom:1px solid #F8FAFC;white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+br+'</td>'+cells+'</tr>'}).join('');
      var st=_statusInfo(p.status);
      var lgLatest=brandData.LG?brandData.LG.filter(function(v){return v!=null}).pop():null;
      rows+='<div class="trend-row" style="margin-bottom:24px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="width:4px;height:22px;border-radius:4px;background:'+_RED+';flex-shrink:0"></span><span style="font-size:20px;font-weight:700;color:#1A1A1A">'+p.kr+'</span><span style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>'+(lgLatest!=null?'<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG '+lgLatest.toFixed(1)+'%</span>':'')+'</div><div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:'+_FONT+'">'+colgroup+'<tbody>'+chartRow+legendRow+thead+tbody+'</tbody></table></div></div>';
    });
    if(!rows)return;hasTrend=true;
    html+='<div class="bu-group" data-bu="'+b+'" style="margin-bottom:20px"><div class="bu-header"><span class="bu-label">'+b+'</span></div>'+rows+'</div>';
  });
  if(!hasTrend){container.innerHTML='<div class="section-card"><div class="section-body" style="text-align:center;padding:40px;color:#94A3B8;font-size:16px">'+(_lang==='en'?'No monthly data available':'월간 데이터가 없습니다')+'</div></div>';return}
  var title=_lang==='en'?'Monthly Visibility Trend':'월간 Visibility 트렌드';
  var cntyLabel=countries?(countries.length>1?' — '+countries.join(', ')+' avg':' — '+countries[0]):'';
  container.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+title+cntyLabel+'</div><span class="legend">Jan–Dec</span></div><div class="section-body">'+html+'</div></div>';
}

// ─── 제품 카드 스코어 국가 필터 업데이트 ───
// 오디오: W13/Apr 베이스라인 (boundary 회색 연결)
// RAC/Aircare: W16 베이스라인 (boundary 끊김), 월간은 Apr 공통
function _isBaselineProd(prodId){var s=String(prodId||'').toLowerCase();return s==='audio'||s==='rac'||s==='aircare'}
function _baselineWk(prodId){var s=String(prodId||'').toLowerCase();if(s==='audio')return 13;if(s==='rac'||s==='aircare')return 16;return 0}
function _shouldBridge(prodId){return String(prodId||'').toLowerCase()==='audio'}
// prod-mom 텍스트 갱신 (baseline 제품은 빈 처리)
function _setProdMom(card,momD){
  var el=card.querySelector('.prod-mom');if(!el)return;
  if(_isBaselineProd(card.getAttribute('data-prodid'))){el.innerHTML='';return}
  if(momD==null||isNaN(momD)){el.innerHTML='MoM —';el.style.color='#94A3B8';return}
  var arrow=momD>0?'▲':momD<0?'▼':'─';
  var clr=momD>0?'#22C55E':momD<0?'#EF4444':'#94A3B8';
  el.innerHTML='MoM '+arrow+' '+Math.abs(momD).toFixed(1)+'%p';
  el.style.color=clr;
}
// 선택 국가들 평균 월별 시리즈 — 날짜별 평균. server 가 시간순 정렬한 첫 매칭 국가의 dates 순서 사용.
function _filteredMonthlySeries(prodId,countries){
  if(!_productsCnty||!_productsCnty.length||!countries||!countries.length)return null;
  var prod=_products.find(function(p){return p.id===prodId});if(!prod)return null;
  var prodKeys=[(prod.category||'').toUpperCase(),prod.id.toUpperCase(),(prod.kr||'').toUpperCase(),(prod.en||'').toUpperCase()].filter(Boolean);
  var matched=_productsCnty.filter(function(r){
    return countries.indexOf(r.country||'')>=0 && prodKeys.indexOf((r.product||'').toUpperCase())>=0;
  });
  if(!matched.length)return null;
  var byDate={};
  matched.forEach(function(r){
    (r.monthlyScores||[]).forEach(function(m){
      if(m.score==null)return;
      var d=m.date;
      if(!byDate[d])byDate[d]={sum:0,count:0};
      byDate[d].sum+=Number(m.score)||0;byDate[d].count++;
    });
  });
  // 첫 매칭 국가의 monthlyScores 순서를 사용 (서버에서 시간순 정렬됨)
  var canonical=(matched[0].monthlyScores||[]).map(function(m){return m.date});
  var dates=Object.keys(byDate).sort(function(a,b){return canonical.indexOf(a)-canonical.indexOf(b)});
  var MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return {
    data: dates.map(function(d){return byDate[d].sum/byDate[d].count}),
    labels: dates.map(function(d){var mi=_dateMi(d);return mi>=0?MN[mi]:d}),
  };
}
// 선택 국가들 평균 MoM — 주간 WoW(_updateCard 의 wLast-wPrev) 와 동일 패턴
// 각 국가별 monthlyScores 는 서버에서 시간순 정렬되어 있음
// 월 드롭다운(_curMonthIdxIn12) 있으면 그 month-of-year 위치를 '최신'으로, 없으면 배열 끝
function _filteredMomD(prodId,countries){
  if(!_productsCnty||!_productsCnty.length||!countries||!countries.length)return null;
  var prod=_products.find(function(p){return p.id===prodId});if(!prod)return null;
  var prodKeys=[(prod.category||'').toUpperCase(),prod.id.toUpperCase(),(prod.kr||'').toUpperCase(),(prod.en||'').toUpperCase()].filter(Boolean);
  var lastSum=0,lastCnt=0,prevSum=0,prevCnt=0;
  _productsCnty.forEach(function(r){
    if(countries.indexOf(r.country||'')<0)return;
    var rKey=(r.product||'').toUpperCase();
    if(prodKeys.indexOf(rKey)<0)return;
    var ms=r.monthlyScores||[];if(ms.length<2)return;
    var ti=ms.length-1;
    if(_curMonthIdxIn12>=0){
      for(var i=0;i<ms.length;i++){if(_dateMi(ms[i].date)===_curMonthIdxIn12){ti=i;break}}
    }
    if(ti<1)return;
    var last=ms[ti],prev=ms[ti-1];
    if(last&&last.score!=null){lastSum+=Number(last.score)||0;lastCnt++}
    if(prev&&prev.score!=null){prevSum+=Number(prev.score)||0;prevCnt++}
  });
  if(!lastCnt||!prevCnt)return null;
  return +((lastSum/lastCnt)-(prevSum/prevCnt)).toFixed(1);
}
function _baselineIdx(prodId,labels){
  if(!_isBaselineProd(prodId)||!labels)return -1;
  var wk=_baselineWk(prodId);
  if(wk>0){
    for(var i=0;i<labels.length;i++){
      var m=String(labels[i]||'').trim().match(/^W?(\\d+)$/i);
      if(m&&parseInt(m[1],10)===wk)return i;
    }
  }
  for(var j=0;j<labels.length;j++){
    var s=String(labels[j]||'').trim();
    if(/^Apr(il)?$/i.test(s)||s==='4월')return j;
  }
  return -1;
}
// 미니 SVG 라인 차트 — bridge 인자 제거 (모든 베이스라인 제품 boundary 끊김), 베이스라인 라벨 X축 영역으로
// labOff/lineOff: 라벨/점선 Y 오프셋 (제품·모드별)
function _miniSvg(data,labels,w,h,color,fadeIdx,_unused,label,labOff,lineOff){
  labOff=labOff||0;lineOff=lineOff||0;
  if(!data||data.length<2)return'<svg width="'+w+'" height="'+h+'"></svg>';
  if(fadeIdx==null)fadeIdx=-1;
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var mn=Math.min.apply(null,data)-1;var mx=Math.max.apply(null,data)+1;var rng=mx-mn||1;
  var pts=data.map(function(v,i){return{x:pl+(i/(data.length-1))*cw,y:pt+(1-(v-mn)/rng)*ch,v:v,idx:i}});
  var prePts=fadeIdx>0?pts.filter(function(p){return p.idx<fadeIdx}):[];
  var postPts=fadeIdx>0?pts.filter(function(p){return p.idx>=fadeIdx}):pts;
  var FADE='#64748B';
  var id='ms'+Math.random().toString(36).slice(2,6);
  var s='<svg viewBox="0 0 '+w+' '+(h+12)+'" width="100%" height="'+(h+12)+'" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">';
  if(postPts.length>=2){
    var line=postPts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
    var area=line+' L'+postPts[postPts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+postPts[0].x.toFixed(1)+','+(pt+ch)+' Z';
    s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
    s+='<path d="'+area+'" fill="url(#'+id+')"/>';
    s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  if(prePts.length>=2){
    var pline=prePts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
    s+='<path d="'+pline+'" stroke="'+FADE+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>';
  }
  pts.forEach(function(p){
    var isPre=fadeIdx>0&&p.idx<fadeIdx;
    var isBaseStart=fadeIdx>0&&p.idx===fadeIdx;
    if(isBaseStart){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="4" fill="#000" stroke="'+color+'" stroke-width="3"/>';return}
    s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+(isPre?FADE:color)+'" stroke-width="2" opacity="'+(isPre?0.85:1)+'"/>';
  });
  pts.forEach(function(p){var isPre=fadeIdx>0&&p.idx<fadeIdx;s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+(isPre?FADE:color)+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
  if(fadeIdx>0&&label){
    var bx=pl+(fadeIdx/(data.length-1))*cw;
    s+='<line x1="'+bx.toFixed(1)+'" y1="'+(pt+lineOff).toFixed(1)+'" x2="'+bx.toFixed(1)+'" y2="'+(pt+ch+lineOff).toFixed(1)+'" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>';
    var onR=bx>w*0.7;
    var labY=(onR?pt+ch+1:pt+8)+labOff;
    s+='<text x="'+(onR?bx-4:bx+4).toFixed(1)+'" y="'+labY.toFixed(1)+'" text-anchor="'+(onR?'end':'start')+'" font-size="9" fill="#64748B" font-family="'+_FONT+'">'+label+'</text>';
  }
  pts.forEach(function(p,i){s+='<text x="'+p.x.toFixed(1)+'" y="'+(pt+ch+14)+'" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="'+_FONT+'">'+(labels[i]||'')+'</text>'});
  s+='</svg>';return s;
}
function _miniSvgNullAware(data,labels,w,h,color,fadeIdx,_unused,label,labOff,lineOff){
  labOff=labOff||0;lineOff=lineOff||0;
  if(fadeIdx==null)fadeIdx=-1;
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var N=data.length;var divisor=N>1?N-1:1;
  var allX=data.map(function(_,i){return pl+(i/divisor)*cw});
  var valid=data.filter(function(v){return v!=null});
  var FADE='#64748B';
  var s='<svg viewBox="0 0 '+w+' '+(h+12)+'" width="100%" height="'+(h+12)+'" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">';
  if(valid.length){
    var mn=Math.min.apply(null,valid)-1;var mx=Math.max.apply(null,valid)+1;var rng=mx-mn||1;
    var pts=[];
    data.forEach(function(v,i){if(v!=null)pts.push({x:allX[i],y:pt+(1-(v-mn)/rng)*ch,v:v,idx:i})});
    var prePts=fadeIdx>0?pts.filter(function(p){return p.idx<fadeIdx}):[];
    var postPts=fadeIdx>0?pts.filter(function(p){return p.idx>=fadeIdx}):pts;
    if(postPts.length>=2){
      var id='mn'+Math.random().toString(36).slice(2,6);
      var line=postPts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
      var area=line+' L'+postPts[postPts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+postPts[0].x.toFixed(1)+','+(pt+ch)+' Z';
      s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
      s+='<path d="'+area+'" fill="url(#'+id+')"/>';
      s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    if(prePts.length>=2){
      var pline=prePts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
      s+='<path d="'+pline+'" stroke="'+FADE+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>';
    }
    pts.forEach(function(p){
      var isPre=fadeIdx>0&&p.idx<fadeIdx;
      var isBaseStart=fadeIdx>0&&p.idx===fadeIdx;
      if(isBaseStart){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="4" fill="#000" stroke="'+color+'" stroke-width="3"/>';return}
      s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+(isPre?FADE:color)+'" stroke-width="2" opacity="'+(isPre?0.85:1)+'"/>';
    });
    pts.forEach(function(p){var isPre=fadeIdx>0&&p.idx<fadeIdx;s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+(isPre?FADE:color)+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
  }
  if(fadeIdx>0&&label){
    var bx=allX[fadeIdx];
    s+='<line x1="'+bx.toFixed(1)+'" y1="'+pt+'" x2="'+bx.toFixed(1)+'" y2="'+(pt+ch)+'" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>';
    var onR=bx>w*0.7;
    var labY=onR?pt+ch+1:pt+8;
    s+='<text x="'+(onR?bx-4:bx+4).toFixed(1)+'" y="'+labY.toFixed(1)+'" text-anchor="'+(onR?'end':'start')+'" font-size="9" fill="#64748B" font-family="'+_FONT+'">'+label+'</text>';
  }
  data.forEach(function(_,i){s+='<text x="'+allX[i].toFixed(1)+'" y="'+(pt+ch+14)+'" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="'+_FONT+'">'+(labels[i]||'')+'</text>'});
  s+='</svg>';return s;
}
function _updateCard(card,score,compPct,weeklyData,wLabels,monthlyLG,mLabels){
  var scoreEl=card.querySelector('.prod-score');
  if(scoreEl)scoreEl.innerHTML=score.toFixed(1)+'<small>%</small>';
  var cc=compPct>=100?'#15803D':compPct>=80?'#D97706':'#BE123C';
  var compBar=card.querySelector('.prod-comp-bar');if(compBar){compBar.style.width=Math.min(compPct,120)+'%';compBar.style.background=cc}
  var compPctEl=card.querySelector('.prod-comp-pct');if(compPctEl){compPctEl.textContent=compPct+'%';compPctEl.style.color=cc}
  var status=compPct>=100?'lead':compPct>=80?'behind':'critical';
  var st=_statusInfo(status);
  var badge=card.querySelector('.prod-badge');
  if(badge){badge.style.background=st.bg;badge.style.color=st.color;badge.style.borderColor=st.border;badge.textContent=st.label}
  card.style.borderColor=st.border;
  var sparkColor=status==='critical'?'#BE123C':status==='behind'?'#D97706':'#15803D';
  // WoW 업데이트
  var wowEl=card.querySelector('.prod-wow');
  if(wowEl&&weeklyData&&weeklyData.length>=2){
    var wLast=weeklyData[weeklyData.length-1];var wPrev=weeklyData[weeklyData.length-2];
    var wd=+(wLast-wPrev).toFixed(1);
    var wArrow=wd>0?'▲':wd<0?'▼':'─';
    var wc=wd>0?'#22C55E':wd<0?'#EF4444':'#94A3B8';
    wowEl.style.color=wc;wowEl.textContent='WoW '+wArrow+' '+Math.abs(wd).toFixed(1)+'%p';
  }
  // 주간 미니 차트
  var _pid=card.getAttribute('data-prodid');
  var chartWrap=card.querySelector('.trend-weekly');
  if(chartWrap){
    var _fiW=_baselineIdx(_pid,wLabels);
    var _racW=_pid==='aircare'?30:_pid==='rac'?20:0;
    chartWrap.innerHTML=weeklyData&&weeklyData.length>=1?_miniSvg(weeklyData,wLabels,300,90,sparkColor,_fiW,_shouldBridge(_pid),_fiW>0?'*Baseline 재설정':'',_racW,0):'<svg width="300" height="90"></svg>';
  }
  // 월간 미니 차트 (4M: [null,null,null,score])
  if(mLabels&&mLabels.length){
    var m4=[null,null,null,monthlyLG!=null?monthlyLG:null];
    var mChartWrap=card.querySelector('.trend-monthly');
    if(mChartWrap){var _fiM=_baselineIdx(_pid,mLabels);var _audMC=_pid==='audio'?-60:0;mChartWrap.innerHTML=_miniSvgNullAware(m4,mLabels,300,90,sparkColor,_fiM,_shouldBridge(_pid),_fiM>0?'*Baseline 재설정':'',_audMC,0)}
  }
}
function _getWeeklyForCountries(prodId,countries){
  var prodData=_weeklyAll[prodId]||{};
  var totalLG=(prodData['Total']||{}).LG||[];
  if(!countries||!countries.length)return totalLG;
  if(countries.length===1){
    var d=prodData[countries[0]];
    var lg=d&&d.LG?d.LG:null;
    return lg&&lg.length?lg:totalLG;
  }
  // 다중 국가 → LG 브랜드 평균
  var result=[];var maxLen=0;
  countries.forEach(function(c){var d=(prodData[c]||{}).LG||[];if(d.length>maxLen)maxLen=d.length});
  if(!maxLen)return totalLG;
  for(var i=0;i<maxLen;i++){var sum=0;var cnt=0;
    countries.forEach(function(c){var v=(prodData[c]||{}).LG;if(v&&v[i]!=null){sum+=v[i];cnt++}});
    result.push(cnt>0?sum/cnt:null);
  }
  return result;
}
function _get4MLabels(prod){
  var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // _meta.period 우선 (시트의 최신 월 기준), 없으면 prod.date 폴백
  var mi=_parseMonth((_meta&&_meta.period)||'');
  if(mi<0)mi=_parseMonth(prod.date||'');
  if(mi<0)return['M-3','M-2','M-1','M0'];
  return[0,1,2,3].map(function(i){return ML[(mi-3+i+12)%12]});
}
function updateProductScores(selCountry,selBU,selProd){
  // 주간 콘텐츠 카드만 업데이트 (월간 콘텐츠는 서버사이드 렌더링 고정)
  var weeklyContainer=document.getElementById('bu-weekly-content');
  if(!weeklyContainer)return;
  var cards=weeklyContainer.querySelectorAll('.prod-card');
  var countries=selCountry.isAll?null:Object.keys(selCountry.vals);
  // 선택된 주차의 인덱스 (없으면 마지막)
  function _pickW(arr){
    if(!arr||!arr.length)return null;
    var idx=_curWeekIdx<0||_curWeekIdx>=arr.length?arr.length-1:_curWeekIdx;
    return arr[idx];
  }
  // 전체 국가 선택 시 → 주간 TTL 데이터 사용 (선택 주차 LG 점수 + 경쟁사)
  if(selCountry.isAll){
    cards.forEach(function(card){
      var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
      // 미출시 국가가 있는 제품은 prodNameUL이 'kr*' 형식으로 렌더 → 트레일링 * 제거 후 매치
      var name=nameEl.textContent.replace(/\\*$/,'');
      var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
      var totalData=(_weeklyAll[prod.id]||{})['Total']||{};
      var weekly=totalData.LG||[];
      // 선택 주차 점수 (해당 주 값이 null이면 0 폴백)
      var wScore=_pickW(weekly);
      if(wScore==null)wScore=prod.score;
      // 선택 주차 경쟁사 1위
      var wComp=0;
      Object.keys(totalData).forEach(function(b){if(b==='LG'||b==='lg')return;var arr=totalData[b]||[];var v=_pickW(arr);if(v!=null&&v>wComp)wComp=v});
      var wRatio=wComp>0?Math.round(wScore/wComp*100):100;
      var mL=_get4MLabels(prod);
      var mini=_miniSlice(weekly,_wLabels);
      _updateCard(card,wScore,wRatio,mini.data,mini.labels,null,mL);
    });
    return;
  }
  if(!countries||!countries.length)return;
  // 주간 국가별 데이터: weeklyAll에서 선택된 국가의 선택 주차 LG/경쟁사 평균
  cards.forEach(function(card){
    var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
    var name=nameEl.textContent.replace(/\\*$/,'');
    var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
    var prodData=_weeklyAll[prod.id]||{};
    var scores=[];var compScores=[];
    countries.forEach(function(c){
      var cd=prodData[c];if(!cd)return;
      var lgArr=cd.LG||cd.lg||[];var last=_pickW(lgArr);
      if(last!=null&&last>0)scores.push(last);
      // 경쟁사 1위
      var topComp=0;
      Object.keys(cd).forEach(function(b){if(b==='LG'||b==='lg')return;var a=cd[b]||[];var l=_pickW(a);if(l!=null&&l>topComp)topComp=l});
      if(topComp>0)compScores.push(topComp);
    });
    var score,compPct;
    if(scores.length){
      score=+(scores.reduce(function(s,v){return s+v},0)/scores.length).toFixed(1);
      var comp=compScores.length?+(compScores.reduce(function(s,v){return s+v},0)/compScores.length).toFixed(1):0;
      compPct=comp>0?Math.round(score/comp*100):100;
    }else{
      // 선택 국가/주차에 주간 데이터 없으면 TTL 폴백
      var totalLG=(prodData['Total']||{}).LG||[];
      var t=_pickW(totalLG);
      score=t!=null?t:prod.score;
      compPct=prod.compRatio||100;
    }
    var weekly=_getWeeklyForCountries(prod.id,countries);
    var mL=_get4MLabels(prod);
    var mini=_miniSlice(weekly,_wLabels);
    _updateCard(card,score,compPct,mini.data,mini.labels,null,mL);
  });
}

// ─── Hero / Executive Summary 동적 업데이트 (체크박스 기반) ───
// 주간/월간 콘텐츠 둘 다 hero를 포함해 DOM에 동일 id 엘리먼트가 2개 있을 수 있음 — 모두 갱신
function updateHeroFromCheckboxes(){
  var selBU=getCheckedValues('bu');
  var selProd=getCheckedValues('product');
  var selRegion=getCheckedValues('region');
  var selCountry=getCheckedValues('country');
  var heroes=document.querySelectorAll('#hero-section, .hero');
  if(!heroes.length)return;
  var allL=_lang==='en'?'All':'전체';
  // Context badges
  var badges='<span class="hero-ctx-badge">'+_meta.period+'</span>';
  var buLabel=selBU.isAll?(allL+(_lang==='en'?' Divisions':' 본부')):Object.keys(selBU.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+buLabel+'</span>';
  var prodLabel=selProd.isAll?(allL+(_lang==='en'?' Products':' 제품')):_products.filter(function(p){return selProd.vals[p.id]}).map(function(p){return p.kr}).join(', ');
  badges+='<span class="hero-ctx-badge">'+prodLabel+'</span>';
  var cntyLabel=selCountry.isAll?(allL+(_lang==='en'?' Countries':' 국가')):Object.keys(selCountry.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+cntyLabel+'</span>';
  // Calculate filtered scores
  var result=calcFilteredDataCB(selBU,selProd,selCountry);
  if(!result)return;
  var sc=result.score;var comp=result.vsComp;var compName='SAMSUNG';
  var d=+(sc-(result.prev||sc)).toFixed(1);
  var gap=+(sc-comp).toFixed(1);
  var dArrow=d>0?'▲':d<0?'▼':'─';
  var dColor=d>0?'#22C55E':d<0?'#EF4444':'#94A3B8';
  heroes.forEach(function(hero){
    var ctx=hero.querySelector('#hero-ctx, .hero-ctx');
    if(ctx)ctx.innerHTML=badges;
    var scoreRow=hero.querySelector('.hero-score-row');
    if(scoreRow)scoreRow.innerHTML='<span class="hero-score">'+sc.toFixed(1)+'</span><span class="hero-pct">%</span><span class="hero-delta" style="color:'+dColor+'">'+dArrow+' '+Math.abs(d).toFixed(1)+'%p</span><span class="hero-mom">MoM</span>';
    var tracks=hero.querySelectorAll('.hero-gauge-track');
    if(tracks[0]){var bar=tracks[0].querySelector('.hero-gauge-bar');if(bar)bar.style.width=Math.min(sc,100)+'%'}
    if(tracks[1]){var bar2=tracks[1].querySelector('.hero-gauge-bar');if(bar2)bar2.style.width=Math.min(comp,100)+'%'}
    var legend=hero.querySelector('.hero-legend');
    if(legend)legend.innerHTML='<span><i style="background:'+_RED+'"></i> LG '+sc.toFixed(1)+'%</span>'+(comp>0?'<span><i style="background:'+_COMP+'"></i> '+compName+' '+comp.toFixed(1)+'%</span>':'')+'<span><i style="background:#475569"></i> prev '+(result.prev||sc).toFixed(1)+'%</span>';
    var compDiv=hero.querySelector('.hero-comp');
    if(compDiv&&comp>0){compDiv.innerHTML='<span class="hero-comp-label">'+compName.toUpperCase()+'</span> <span class="hero-comp-score">'+comp.toFixed(1)+'%</span><span class="hero-comp-gap" style="color:'+(gap>=0?'#22C55E':'#EF4444')+'">Gap '+(gap>=0?'+':'')+gap.toFixed(1)+'%p</span>'}
  });
}
function _getSamsungScore(item){
  if(item.allScores){var s=item.allScores.SAMSUNG||item.allScores.Samsung||item.allScores.Samsumg;if(s!=null)return s}
  return item.compScore||item.vsComp||0;
}
function _allProdsOfBU(bu){
  // 해당 BU에 속하는 모든 제품 ID
  var ids=[];_products.forEach(function(p){if(p.bu===bu)ids.push(p.id)});return ids;
}
function _isBuFullySelected(bu,selProd){
  // 해당 BU의 모든 제품이 선택되었는지 확인
  var ids=_allProdsOfBU(bu);if(!ids.length)return false;
  return ids.every(function(id){return selProd.vals[id]});
}
function calcFilteredDataCB(selBU,selProd,selCountry){
  var selectedProdNames={};
  _products.forEach(function(p){if(selProd.isAll||selProd.vals[p.id]){selectedProdNames[p.kr]=true;if(p.category)selectedProdNames[p.category]=true}});
  var buTotals=_total.buTotals||{};
  var countryTotals=_total.countryTotals||{};

  // ── BU별 전체 제품 선택 감지 ──
  // 선택된 BU 목록 (BU 체크박스 또는 제품으로부터 역산)
  var activeBUs={};
  if(selBU.isAll){Object.keys(buTotals).forEach(function(b){activeBUs[b]=true})}
  else{Object.keys(selBU.vals).forEach(function(b){activeBUs[b]=true})}
  // 각 BU의 모든 제품이 선택됐는지 확인
  var buFullySelected={};
  Object.keys(activeBUs).forEach(function(bu){
    if(_isBuFullySelected(bu,selProd))buFullySelected[bu]=true;
  });
  var allActiveBusFull=Object.keys(activeBUs).length>0&&Object.keys(activeBUs).every(function(b){return buFullySelected[b]});

  // ── 국가 전체 선택 감지 (리전 내 모든 국가 선택 = 전체) ──
  var allCountryCodes=[];Object.values(_REGIONS).forEach(function(cs){cs.forEach(function(c){allCountryCodes.push(c)})});
  var allCountriesOn=allCountryCodes.every(function(c){return selCountry.isAll||selCountry.vals[c]});

  // 단일 국가 + 전체 BU/제품 → 시트의 country TOTAL 값 사용
  if(!allCountriesOn){
    var cKeys=Object.keys(selCountry.vals);
    if(cKeys.length===1&&allActiveBusFull&&countryTotals[cKeys[0]]){
      var ct=countryTotals[cKeys[0]];
      return{score:+ct.lg.toFixed(1),prev:+ct.lg.toFixed(1),vsComp:+ct.comp.toFixed(1),compName:'SAMSUNG'}
    }
    // 그 외 국가 필터: productsCnty에서 평균
    var cntyData=_productsCnty.filter(function(r){return selCountry.vals[r.country]});
    if(!selBU.isAll)cntyData=cntyData.filter(function(r){return _products.some(function(p){return(p.kr===r.product||p.category===r.product)&&selBU.vals[p.bu]})});
    if(!selProd.isAll)cntyData=cntyData.filter(function(r){return selectedProdNames[r.product]});
    if(!cntyData.length)return _total;
    var lgAvg=cntyData.reduce(function(s,r){return s+r.score},0)/cntyData.length;
    var ssAvg=cntyData.reduce(function(s,r){return s+_getSamsungScore(r)},0)/cntyData.length;
    return{score:+lgAvg.toFixed(1),prev:+lgAvg.toFixed(1),vsComp:+ssAvg.toFixed(1),compName:'SAMSUNG'}
  }

  // 전체 국가 + 단일 BU + 해당 BU 모든 제품 → 시트의 BU TOTAL 값 사용
  var selBuKeys=Object.keys(activeBUs);
  if(selBuKeys.length===1&&buFullySelected[selBuKeys[0]]&&buTotals[selBuKeys[0]]){
    var bt=buTotals[selBuKeys[0]];
    return{score:+bt.lg.toFixed(1),prev:+bt.lg.toFixed(1),vsComp:+bt.comp.toFixed(1),compName:'SAMSUNG'}
  }

  // 모든 BU의 모든 제품 선택 + 전체 국가 → 시트 TTL
  if(allActiveBusFull&&allCountriesOn&&selBuKeys.length===Object.keys(buTotals).length){
    return _total;
  }

  // Specific products (일부 제품만 선택)
  if(!allActiveBusFull){
    var fProds=_products.filter(function(p){return selProd.vals[p.id]&&(selBU.isAll||selBU.vals[p.bu])});
    if(!fProds.length)return _total;
    var lgA=fProds.reduce(function(s,p){return s+p.score},0)/fProds.length;
    var ssA=fProds.reduce(function(s,p){return s+_getSamsungScore(p)},0)/fProds.length;
    return{score:+lgA.toFixed(1),prev:+lgA.toFixed(1),vsComp:+ssA.toFixed(1),compName:'SAMSUNG'}
  }

  // Multiple BUs, all fully selected
  if(!selBU.isAll){
    var buLg=0,buComp=0,buCnt=0;
    selBuKeys.forEach(function(b){if(buTotals[b]){buLg+=buTotals[b].lg;buComp+=buTotals[b].comp;buCnt++}});
    if(buCnt>0)return{score:+(buLg/buCnt).toFixed(1),prev:+(buLg/buCnt).toFixed(1),vsComp:+(buComp/buCnt).toFixed(1),compName:'SAMSUNG'};
  }

  return _total;
}
`}const Ir=["audio","rac","aircare"];function Vo(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Ir.includes(String(e).toLowerCase())}function jr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function Ie(t,e){if(!Vo(t)||!e)return-1;const o=jr(t);if(o>0){const a=e.findIndex(l=>{const r=String(l||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(a>=0)return a}return e.findIndex(a=>{const l=String(a||"").trim();return/^Apr(il)?$/i.test(l)||l==="4월"})}const je={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Pr(t){const e=je[t]||je.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function Ko(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),a=je[e]||je.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.racair}</p>`:""}function Dr(t,e,o,a,l,r,f){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(m=>{const h=t.filter(g=>g.bu===m);if(!h.length)return"";const d=h.map(g=>{var b,T;const c=((b=e[g.id])==null?void 0:b.Total)||{},C=Object.keys(c).sort((S,E)=>{var F,N;if(S==="LG")return-1;if(E==="LG")return 1;const M=((F=c[S])==null?void 0:F[c[S].length-1])||0;return(((N=c[E])==null?void 0:N[c[E].length-1])||0)-M});if(!C.length)return"";const u=Xe(g.status,l),k=(T=c.LG)==null?void 0:T[c.LG.length-1],w=C.map((S,E)=>{const M=xe(S,E),x=S==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${M};opacity:${x?1:.7}"></i><span style="font-size:13px;color:${x?"#1A1A1A":"#94A3B8"};font-weight:${x?700:400}">${S}</span></span>`}).join(""),v=o.length,A=`<colgroup><col style="width:${Ye}px">${o.map(()=>"<col>").join("")}</colgroup>`,P=Ie(g,o),B=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:8px 0;border:0">${Wo(c,o,v*80,180,{fadeBeforeIdx:P,baselineLabel:P>0?"*Baseline 재설정":""})}</td></tr>`,j=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,$=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(S=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${S}</th>`).join("")}</tr>`,_=C.map((S,E)=>{const M=xe(S,E),x=S==="LG",F=o.map((N,I)=>{var U;const R=(U=c[S])==null?void 0:U[I];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${R!=null?x?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${x?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${R!=null?R.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${x?"#FFF8F9":E%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${x?700:500};color:${M};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${M};margin-right:4px;vertical-align:0"></i>${S}</td>${F}</tr>`}).join(""),O=Ze(g.id||g.category,r);return`<div class="trend-row${O?" is-unlaunched":""}" data-prodid="${g.id||g.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ut};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Qe(g,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${O?"#F1F5F9":u.bg};color:${O?"#64748B":u.color};border:1px solid ${O?"#CBD5E1":u.border}">${O?l==="en"?"Unlaunched":"미출시":u.label}</span>
          ${k!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${k.toFixed(1)}%</span>`:""}
          ${g.compName?`<span style="font-size:14px;color:#94A3B8">vs ${g.compName} ${g.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${zt}">${A}<tbody>${B}${j}${$}${_}</tbody></table></div>
        ${Ko(g,l)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${m}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${m}</span></div>
      ${d}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${l==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${f||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${l==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function Mr(t,e,o,a,l,r){if(!e||!e.length)return"";const f=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function m(c){const C=String(c).match(/(\d{1,2})월/);if(C)return parseInt(C[1])-1;const u=String(c).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return u?p[u[1].toLowerCase()]:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],d=s.slice(),g=f.map(c=>{const C=t.filter(k=>k.bu===c);if(!C.length)return"";const u=C.map(k=>{const w=k.monthlyScores||[];let v={};if(w.length>=2){const x=new Set;if(w.forEach(F=>{F.allScores&&Object.keys(F.allScores).forEach(N=>x.add(N))}),x.forEach(F=>{v[F]=h.map(N=>{var R;const I=w.find(U=>m(U.date)===N);return((R=I==null?void 0:I.allScores)==null?void 0:R[F])??null})}),!x.size&&(v.LG=h.map(F=>{const N=w.find(I=>m(I.date)===F);return N?N.score:null}),k.vsComp>0)){const F=h.map(N=>{const I=w.find(R=>m(R.date)===N);return(I==null?void 0:I.comp)??null});F.some(N=>N!=null)&&(v[k.compName||"Comp"]=F)}}else{const x=e.filter(R=>R.division===c&&(R.country==="TOTAL"||R.country==="TTL")),F={};x.forEach(R=>{const U=m(R.date);U>=0&&(F[U]=R)});const N=h.map(R=>{var U;return((U=F[R])==null?void 0:U.lg)||null}),I=h.map(R=>{var U;return((U=F[R])==null?void 0:U.comp)||null});v={LG:N},I.some(R=>R!=null&&R>0)&&(v.Samsung=I)}const A=Object.keys(v).sort((x,F)=>{if(x==="LG")return-1;if(F==="LG")return 1;const N=(v[x]||[]).filter(R=>R!=null).pop()||0;return((v[F]||[]).filter(R=>R!=null).pop()||0)-N});if(!A.length)return"";const P=Xe(k.status,a),B=(v.LG||[]).filter(x=>x!=null).pop(),j=A.map((x,F)=>{const N=xe(x,F),I=x==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${N};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${x}</span></span>`}).join(""),$=d.length,_=`<colgroup><col style="width:${Ye}px">${d.map(()=>"<col>").join("")}</colgroup>`,O=Ie(k,d),b=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:8px 0;border:0">${Wo(v,d,$*80,180,{fadeBeforeIdx:O,baselineLabel:O>0?"*Baseline 재설정":""})}</td></tr>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:4px 0 6px;border:0">${j}</td></tr>`,S=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(x=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${x}</th>`).join("")}</tr>`,E=A.map((x,F)=>{const N=xe(x,F),I=x==="LG",R=d.map((U,rt)=>{var gt;const dt=(gt=v[x])==null?void 0:gt[rt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${dt!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${dt!=null?dt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":F%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${N};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${N};margin-right:4px;vertical-align:0"></i>${x}</td>${R}</tr>`}).join(""),M=Ze(k.id||k.category,l);return`<div class="trend-row${M?" is-unlaunched":""}" data-prodid="${k.id||k.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ut};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Qe(k,l)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${M?"#F1F5F9":P.bg};color:${M?"#64748B":P.color};border:1px solid ${M?"#CBD5E1":P.border}">${M?a==="en"?"Unlaunched":"미출시":P.label}</span>
          ${B!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${B.toFixed(1)}%</span>`:""}
          ${k.compName?`<span style="font-size:14px;color:#94A3B8">vs ${k.compName} ${k.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${zt}">${_}<tbody>${b}${T}${S}${E}</tbody></table></div>
        ${Ko(k,a)}
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${c}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${c}</span></div>
      ${u}
    </div>`:""}).join("");return g.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${g}</div>
  </div>`:""}function qo(){return""}function Nr(t,e,o,a){const l=+(t.score-t.prev).toFixed(1),r=t.vsComp||0,f=+(t.score-r).toFixed(1),s=l>0?"▲":l<0?"▼":"─",p=l>0?"#22C55E":l<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${e.period||""}</span>
        <span class="hero-ctx-badge">${a==="en"?"All Divisions":"전체 본부"}</span>
        <span class="hero-ctx-badge">${a==="en"?"All Products":"전체 제품"}</span>
        <span class="hero-ctx-badge">${a==="en"?"All Countries":"전체 국가"}</span>
      </div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${p}">${s} ${Math.abs(l).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Ut}"></div>
          </div>
          ${r>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(r,100)}%;background:${ee}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Ut}"></i> LG ${t.score}%</span>
            ${r>0?`<span><i style="background:${ee}"></i> Samsung ${r}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${r>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${r}%</span>
          <span class="hero-comp-gap" style="color:${f>=0?"#22C55E":"#EF4444"}">Gap ${f>=0?"+":""}${f}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function ye(t,e){const o=ve[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function Ze(t,e){return Fr.every(o=>{const a=ve[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function Qe(t,e){return ye(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Eo(t,e,o,a,l,r,f,s,p){if(!t.length)return"";const h=["MS","HS","ES"].map(d=>{const g=t.filter(C=>C.bu===d);if(!g.length)return"";const c=g.map(C=>{var st,ut;const u=C.weekly||[],k=u.filter(X=>X!=null),w=C.weeklyScore||(k.length>0?k[k.length-1]:C.score),v=C.monthlyScore||C.score,A=w,P=((st=s==null?void 0:s[C.id])==null?void 0:st.Total)||((ut=s==null?void 0:s[C.id])==null?void 0:ut.TTL)||{};let B=0;Object.entries(P).forEach(([X,ot])=>{if(X==="LG"||X==="lg")return;const ct=Array.isArray(ot)&&ot.length?ot[ot.length-1]:0;ct>B&&(B=ct)});const j=C.vsComp||0,$=B>0?w/B*100:j>0?w/j*100:100,_=j>0?v/j*100:100,O=Math.round($*10)/10,b=Math.round(_*10)/10,T=O,S=$>=100?"lead":$>=80?"behind":"critical",E=Xe(S,a),M=k.length>=1?k[k.length-1]:null,x=k.length>=2?k[k.length-2]:null,F=M!=null&&x!=null?+(M-x).toFixed(1):null,N=F>0?"▲":F<0?"▼":"─",I=F>0?"#22C55E":F<0?"#EF4444":"#94A3B8",R=S==="critical"?"#BE123C":S==="behind"?"#D97706":"#15803D",U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function dt(X){const ot=String(X).match(/(\d{1,2})월/);if(ot)return parseInt(ot[1])-1;const ct=String(X).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ct?rt[ct[1].toLowerCase()]:-1}let gt=C.monthlyScores||[];if(gt.length<2&&f.length>0){const X=f.filter(ct=>ct.division===C.bu&&(ct.country==="TOTAL"||ct.country==="TTL")),ot={};X.forEach(ct=>{const Et=dt(ct.date);Et>=0&&(ot[Et]={date:ct.date,score:ct.lg,comp:ct.comp})}),gt=Object.keys(ot).sort((ct,Et)=>ct-Et).map(ct=>ot[ct])}const pt=gt.length>0?gt.map(X=>{const ot=dt(X.date);return ot>=0?U[ot]:X.date}):["M-3","M-2","M-1","M0"],at=gt.length>0?gt.map(X=>X.score):[null,null,null,C.score],xt=gt.length>=2?+(gt[gt.length-1].score-gt[gt.length-2].score).toFixed(1):null,Ht=xt>0?"▲":xt<0?"▼":"─",Tt=xt>0?"#22C55E":xt<0?"#EF4444":"#94A3B8",It=T,Ft=It>=100?"#15803D":It>=80?"#D97706":"#BE123C",At=C.weeklyPrev||(k.length>=5?k[k.length-5]:k[0]||0),Wt=w&&At?+(w-At).toFixed(1):null,tt=v&&(C.monthlyPrev||C.prev)?+(v-(C.monthlyPrev||C.prev)).toFixed(1):null,G=ye(C.id||C.category,r),lt=Ze(C.id||C.category,r),H=lt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:E;return`<div class="prod-card${lt?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${w.toFixed(1)}" data-ms="${v.toFixed(1)}" data-wr="${O}" data-mr="${b}" data-wmom="${Wt??""}" data-mmom="${tt??""}" style="border-color:${H.border}">
        <div class="prod-head">
          <span class="prod-name">${Qe(C,r)}</span>
          ${G.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${H.bg};color:${H.color};border-color:${H.border}">${H.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${A.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${I}">${F!=null?`WoW ${N} ${Math.abs(F).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Tt}">${Vo(C)||xt==null?"":`MoM ${Ht} ${Math.abs(xt).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const X=l.slice(-10),ot=Ie(C,X),ct=String(C.id||"").toLowerCase(),Et=ct==="aircare"?30:ct==="rac"?20:0;return Fo(u.slice(-10),X,300,90,R,{fadeBeforeIdx:ot,baselineLabel:ot>0?"*Baseline 재설정":"",labelOffsetY:Et})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const X=Ie(C,pt),ct=String(C.id||"").toLowerCase()==="audio";return Fo(at,pt,300,90,R,{fadeBeforeIdx:X,baselineLabel:X>0?"*Baseline 재설정":"",labelOffsetY:ct?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(It,120)}%;background:${Ft}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Ft}">${It}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${g.length}${o.categories}</span></div>
      <div class="prod-grid">${c}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${qo(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const d=t.filter(g=>ye(g.id||g.category,r).length>0).map(g=>`${(g.id||"").toLowerCase()==="audio"||g.kr==="오디오"?"Audio-Sound Suite":g.kr}: ${ye(g.id||g.category,r).map(c=>Lr(c,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Pr(a)})()}</div>
  </div>`}function Ao(t,e,o,a){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),f=ve[r]||(r||"").toUpperCase(),s=a&&a[`${t.country}|${f}`],p=Br(t.score,t.compScore),m=s?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),d=s?"#64748B":h>=0?"#15803D":"#BE123C",g=130,c=["TCL","HISENSE","HAIER"];let C="",u=0;t.allScores&&Object.entries(t.allScores).forEach(([B,j])=>{const $=String(B).toUpperCase();c.some(O=>$.includes(O))&&j>u&&(C=B,u=j)});const k=Math.max(e,u),w=Math.max(3,Math.round(t.score/k*g)),v=t.compScore>0?Math.max(3,Math.round(t.compScore/k*g)):0,A=u>0?Math.max(3,Math.round(u/k*g)):0,P="#9333EA";return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${m}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${w}px;background:${m}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ee}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${ee}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${u>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${P}">${u.toFixed(1)}</span>
        <div class="vbar-col" style="height:${A}px;background:${P}"></div>
        <span class="vbar-col-name" style="color:${P}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${h>=0?"+":""}${h}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function To(t,e,o,a,l,r){if(!t||!t.length)return"";const f=new Map;t.forEach(c=>{f.has(c.product)||f.set(c.product,[]),f.get(c.product).push(c)});const s=e.cntyProductFilter||{},p=[...f.entries()].filter(([c])=>s[c]!==!1).map(([c,C])=>{const u=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),k=C.map(w=>Ao(w,u,qe(w.country),l)).join("");return`<div class="cnty-product" data-group-product="${c}"><div class="bu-header"><span class="bu-label">${c}</span></div><div class="vbar-chart">${k}</div></div>`}).join(""),m=new Map;t.forEach(c=>{m.has(c.country)||m.set(c.country,[]),m.get(c.country).push(c)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],g=h.filter(c=>m.has(c)).concat([...m.keys()].filter(c=>!h.includes(c))).map(c=>{const C=m.get(c);if(!C)return"";const u=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),k=C.map(w=>Ao(w,u,w.product,l)).join("");return`<div class="cnty-product" data-group-country="${c}"><div class="bu-header"><span class="bu-label">${qe(c)}</span></div><div class="vbar-chart">${k}</div></div>`}).join("");return`<div class="section-card cnty-section">
    <div class="section-header">
      <div class="section-title cnty-section-title">${o.cntyTitle}</div>
      <div class="section-header-right">
        ${r?`<span class="legend">${r}</span>`:""}
        <div class="trend-tabs">
          <button class="cnty-view-tab active" onclick="switchCntyView('country')">${o.byCountry}</button>
          <button class="cnty-view-tab" onclick="switchCntyView('product')">${o.byProduct}</button>
        </div>
        <label style="display:inline-flex;align-items:center;gap:5px;font-size:13px;color:#475569;cursor:pointer;margin-left:8px;">
          <input type="checkbox" class="cnty-cbrand-toggle" checked onchange="toggleCBrand(this)" style="cursor:pointer;" />
          ${o.cBrandCompare}
        </label>
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ee}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${qo(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${g}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!l||!Object.keys(l).length)return"";const c={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},u=[...new Set(t.map(k=>k.product))].map(k=>{const w=c[k]||String(k).toLowerCase(),v=ye(w,l),A=w==="audio"?"Audio-Sound Suite":k;return v.length?`${A}: ${v.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Bo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function _r(t){const e=Bo[t]||Bo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(l=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${l.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${l.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Or(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",a=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",l=e==="en"?"All":"전체",r=e==="en"?"Total":"총",f=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",p=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],m={};p.forEach(c=>{const C=new Set;t.forEach(u=>{u[c.key]&&C.add(u[c.key])}),m[c.key]=[...C].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(m).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),g=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${a}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${r} ${t.length}${f?" "+f:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${s}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${p.map(c=>`<th data-col="${c.key}" onclick="_plToggle('${c.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${c.label} <span id="pl-arrow-${c.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${p.map(c=>`<div id="pl-dd-${c.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${c.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${l}</div>
      ${m[c.key].map(C=>`<div onclick="_plFilter('${c.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${h};
    var _plFilters={};
    var _divC=${d};
    var _cejC=${g};
    var _openDD=null;
    function badge(t,c){return '<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;background:'+c+'22;color:'+c+';white-space:nowrap">'+t+'</span>';}
    function render(){
      var f=_plData.filter(function(p){
        for(var k in _plFilters){if(_plFilters[k]&&p[k]!==_plFilters[k])return false;}
        return true;
      });
      var html='';
      f.forEach(function(p,i){
        html+='<tr style="border-top:1px solid #E2E8F0" onmouseenter="this.style.background=\\'#F8FAFC\\'" onmouseleave="this.style.background=\\'transparent\\'">';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+(i+1)+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.country,'#3B82F6')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.division,_divC[p.division]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.category+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.branded,p.branded==='Brand'?'#A50034':'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.cej,_cejC[p.cej]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.topic+'</td>';
        html+='<td style="padding:8px 12px;text-align:left;font-size:13px;color:#1A1A1A;font-weight:500">'+p.prompt+'</td>';
        html+='</tr>';
      });
      document.getElementById('pl-body').innerHTML=html;
      document.getElementById('pl-count').textContent='${r} '+f.length+'${f?" "+f:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(p.map(c=>c.key))}.forEach(function(k){
        document.getElementById('pl-arrow-'+k).textContent=_plFilters[k]?'▼':'▽';
        document.getElementById('pl-arrow-'+k).style.color=_plFilters[k]?'#3B82F6':'#94A3B8';
      });
    }
    window._plToggle=function(col){
      if(_openDD===col){_closeDD();return;}
      _closeDD();
      var th=document.querySelector('th[data-col="'+col+'"]');
      var rect=th.getBoundingClientRect();
      var dd=document.getElementById('pl-dd-'+col);
      dd.style.display='block';
      dd.style.left=rect.left+'px';
      dd.style.top=rect.bottom+2+'px';
      // highlight active
      var children=dd.children;
      for(var i=0;i<children.length;i++){
        var isActive=i===0?!_plFilters[col]:children[i].textContent===_plFilters[col];
        children[i].style.color=isActive?'#3B82F6':'#64748B';
        children[i].style.fontWeight=isActive?'700':'400';
        children[i].style.background=isActive?'rgba(59,130,246,0.08)':'transparent';
      }
      _openDD=col;
    };
    function _closeDD(){
      if(_openDD){document.getElementById('pl-dd-'+_openDD).style.display='none';_openDD=null;}
    }
    window._plFilter=function(col,val){
      _plFilters[col]=val;_closeDD();render();
    };
    window._plClear=function(){_plFilters={};_closeDD();render();};
    document.addEventListener('click',function(e){
      if(_openDD&&!e.target.closest('th[data-col]')&&!e.target.closest('[id^="pl-dd-"]'))_closeDD();
    });
    render();
  })();
  <\/script>`}function Lo(t,e,o,a,l,r){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const f=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let b=0;b<12;b++)s.push("w"+(5+b));const p=[...new Set(t.map(b=>b.topic))].filter(Boolean),m=[...new Set(t.map(b=>b.type))].filter(Boolean),h=[...new Set(t.map(b=>b.country))].filter(b=>b&&b!=="TTL"),d=f.filter(b=>h.includes(b)).concat(f.filter(b=>!h.includes(b))),g=JSON.stringify(t).replace(/</g,"\\u003c"),c=JSON.stringify(s),C=JSON.stringify(p),u=JSON.stringify(m),k=JSON.stringify(d),w=72;function v(b){const T={};return b&&String(b).split(`
`).forEach(S=>{const E=S.indexOf("=");if(E>0){const M=S.slice(0,E).trim(),x=S.slice(E+1).trim();M&&(T[M]=x)}}),T}const A=v(a==null?void 0:a.prTopicPromptsRaw);l&&l.length&&p.forEach(b=>{if(!A[b]){const T=l.find(S=>S.topic===b&&S.country==="US");T&&(A[b]=T.prompt)}});const P=(r==null?void 0:r.prTopicList)||[],B={},j={};P.forEach(b=>{[b.topic,b.topicRow,b.oldTopic].filter(Boolean).map(S=>S.trim()).forEach(S=>{b.explanation&&!B[S]&&(B[S]=b.explanation),b.bu&&!j[S]&&(j[S]=b.bu)})});const _={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...B,...v(a==null?void 0:a.prTopicDescsRaw)},O={};return p.forEach(b=>{const T=j[b];if(T)O[b]=T;else{const S=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];O[b]=S.some(E=>b.toLowerCase().includes(E.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${zt}">
    <!-- 필터 바 -->
    <div id="pr-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="pr-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="pr-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${Ut};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(a==null?void 0:a.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs SS ratio":"() 는 SS 대비 경쟁비"}</span></span>
      </div>
      <div class="section-body" id="pr-matrix"></div>
    </div>
    <!-- 토픽별 주간 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div class="section-body" id="pr-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${g},W=${c},TP=${C},TY=${u},CN=${k};
    var CW=${w};
    var TOPIC_CAT=${JSON.stringify(O)};
    var TOPIC_PROMPT=${JSON.stringify(A).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(_).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(P).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Re)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Ut}',COMP='${ee}';
    var BC={'LG':RED,'Samsung':COMP,'Google':'#4285F4','Apple':'#A2AAAD','Sony':'#000','Bosch':'#EA0016','Dyson':'#6B21A8'};
    var FB=['#3B82F6','#10B981','#F59E0B','#8B5CF6','#EC4899','#06B6D4','#84CC16','#F97316'];
    function bc(n,i){return BC[n]||FB[i%FB.length]}
    // 신호등 3단: lead(≥100%) / behind(≥80%) / critical(<80%) — 다른 대시보드와 통일
    function tl(lg,ss){
      if(lg==null)return{bg:'#F8FAFC',color:'#94A3B8',border:'#E2E8F0',label:'—'};
      if(ss==null||ss===0)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${o==="en"?"Lead":"선도"}'};
      var r=lg/ss*100;
      if(r>=100)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${o==="en"?"Lead":"선도"}'};
      if(r>=80) return{bg:'#FFFBEB',color:'#B45309',border:'#FDE68A',label:'${o==="en"?"Behind":"추격"}'};
      return{bg:'#FFF1F2',color:'#BE123C',border:'#FECDD3',label:'${o==="en"?"Critical":"취약"}'};
    }
    function chip(txt,on,onclick){return'<span onclick="'+onclick+'" style="padding:3px 10px;border-radius:6px;font-size:17px;font-weight:600;cursor:pointer;border:1px solid '+(on?'#0F172A':'#E2E8F0')+';background:'+(on?'#0F172A':'#F8FAFC')+';color:'+(on?'#fff':'#475569')+';white-space:nowrap;user-select:none">'+txt+'</span>'}
    function renderFilters(){
      var te=document.getElementById('pr-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_prSetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('pr-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_prCntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_prCntyTog('"+c+"')")}).join(' ');
    }
    // 특정 토픽+국가+브랜드의 특정 주 값
    function val(topic,cnty,brand,wk){
      var r=D.find(function(x){return x.topic===topic&&x.country===cnty&&x.brand===brand&&x.type===fType});
      return r&&r.scores[wk]!=null?r.scores[wk]:null;
    }
    function lastVal(topic,cnty,brand){for(var i=W.length-1;i>=0;i--){var v=val(topic,cnty,brand,W[i]);if(v!=null)return v}return null}
    // ── 상단 매트릭스: PR Topic List 시트 전용 ──
    // PR Topic List의 토픽만 행으로 사용. 기존 토픽(oldTopic)으로 Weekly PR 데이터 JOIN.
    function renderMatrix(){
      var el=document.getElementById('pr-matrix');if(!el)return;
      if(!_prTopicList||!_prTopicList.length){el.innerHTML='<p style="text-align:center;color:#94A3B8;padding:20px">PR Topic List 시트를 동기화해주세요.</p>';return}
      var lastW=W[W.length-1];
      var ac=CN.filter(function(c){return fCnty[c]});
      var cols=['TTL'].concat(ac);
      var h='<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%">';
      h+='<thead><tr><th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;width:60px">BU</th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:120px">${o==="en"?"Topic":"토픽"} <span style="font-weight:400;color:#94A3B8">('+lastW+')</span></th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:140px">${o==="en"?"Description":"설명"}</th>';
      cols.forEach(function(c){h+='<th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:56px">'+cf(c)+'</th>'});
      h+='</tr></thead><tbody>';
      var prevBU='';
      _prTopicList.forEach(function(row,idx){
        var bu=row.bu||'';
        var isNewBU=bu&&bu!==prevBU;
        var buCount=0;
        if(isNewBU){_prTopicList.forEach(function(r){if(r.bu===bu)buCount++})}
        var dataKey=(row.oldTopic||'').trim();
        h+='<tr style="border-bottom:1px solid #F1F5F9;'+(isNewBU&&idx>0?'border-top:2px solid #CBD5E1;':'')+'">';
        if(isNewBU){
          h+='<td rowspan="'+buCount+'" style="padding:6px 8px;font-size:15px;font-weight:700;color:#475569;vertical-align:middle;text-align:center;border-right:2px solid #E8EDF2;background:#F8FAFC;line-height:1.4;word-break:keep-all">'+bu+'</td>';
          prevBU=bu;
        }
        h+='<td style="padding:6px 10px;font-size:16px;font-weight:600;color:#1A1A1A">'+row.topic+'</td>';
        h+='<td style="padding:6px 10px;font-size:14px;color:#64748B;line-height:1.4">'+((row.explanation||''))+'</td>';
        if(!dataKey){
          h+='<td colspan="'+cols.length+'" style="padding:8px 12px;text-align:center;font-size:13px;color:#94A3B8;font-style:italic;border:1px solid #F1F5F9;background:#FAFBFC">${o==="en"?"Prompt addition/modification in progress (KPI tracking planned within April)":"Prompt 추가/수정 진행 중 (4월 내 KPI 추적 진행 예정)"}</td>';
        }else{
          cols.forEach(function(cnty){
            var lg=lastVal(dataKey,cnty,'LG');
            var ss=lastVal(dataKey,cnty,'Samsung');
            var s=tl(lg,ss);
            var ratio=(lg!=null&&ss!=null&&ss>0)?Math.round(lg/ss*100)+'%':'';
            h+='<td style="padding:4px 6px;text-align:center;background:'+s.bg+';color:'+s.color+';font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;border:1px solid '+s.border+'">'+(lg!=null?lg.toFixed(1)+'%':'—')+(ratio?'<div style="font-size:13px;font-weight:400;color:#64748B">('+ratio+')</div>':'')+'</td>';
          });
        }
        h+='</tr>';
      });
      h+='</tbody></table></div>';
      el.innerHTML=h;
    }
    // ── SVG 차트 (고정 컬럼 너비로 정렬) ──
    function svgChart(brandData,w,h){
      var brands=Object.keys(brandData);if(!brands.length)return'';
      var N=W.length;var pl=0,pr=0,pt=16,pb=4;var cw=w;var ch=h-pt-pb;
      var mn=Infinity,mx=-Infinity;
      brands.forEach(function(b){(brandData[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
      if(!isFinite(mn)){mn=0;mx=100}
      var pad=Math.max((mx-mn)*0.1,2);mn-=pad;mx+=pad;var rng=mx-mn||1;
      var s='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';
      for(var g=0;g<=4;g++){var gy=pt+(g/4)*ch;s+='<line x1="0" y1="'+gy+'" x2="'+w+'" y2="'+gy+'" stroke="#F1F5F9" stroke-width="1"/>';}
      brands.forEach(function(b,bi){
        var vals=brandData[b]||[];var c=bc(b,bi);var isLG=b==='LG';
        var pts=[];
        vals.forEach(function(v,i){if(v!=null){var x=(i+0.5)*(cw/N);var y=pt+((mx-v)/rng)*ch;pts.push({x:x,y:y})}});
        if(!pts.length)return;
        var path=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
        s+='<path d="'+path+'" fill="none" stroke="'+c+'" stroke-width="'+(isLG?2.5:1.5)+'" opacity="'+(isLG?1:0.5)+'"/>';
        pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?4:3)+'" fill="'+c+'" opacity="'+(isLG?1:0.5)+'"/>'});
      });
      s+='</svg>';return s;
    }
    // ── 토픽별 섹션 렌더 ──
    function renderSections(){
      var el=document.getElementById('pr-sections');if(!el)return;
      var N=W.length;var tblW=CW*N;var html='';
      // PR Topic List의 기존 토픽(oldTopic)이 있는 토픽만 섹션 표시
      var validTopics=[];
      if(_prTopicList&&_prTopicList.length){
        _prTopicList.forEach(function(t){if(t.oldTopic&&t.oldTopic.trim())validTopics.push(t.oldTopic.trim())});
      }
      var sectionTopics=validTopics.length?validTopics:TP;
      sectionTopics.forEach(function(topic){
        var ttl=D.filter(function(r){return r.topic===topic&&r.country==='TTL'&&r.type===fType});
        if(!ttl.length)return;
        var brandMap={};
        ttl.forEach(function(r){if(!brandMap[r.brand])brandMap[r.brand]={}; W.forEach(function(wk){if(r.scores[wk]!=null){brandMap[r.brand][wk]=r.scores[wk]}})});
        var brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
        var chartData={};
        brands.forEach(function(b){chartData[b]=W.map(function(wk){return brandMap[b][wk]!=null?brandMap[b][wk]:null})});
        var lgLast=chartData.LG?chartData.LG[N-1]:null;
        var ssLast=chartData.Samsung?chartData.Samsung[N-1]:null;
        var st=tl(lgLast,ssLast);
        var legend=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:10px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+'"></i><span style="font-size:15px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'}).join('');
        // 국가별 LG 서브
        var ac=CN.filter(function(c){return fCnty[c]});
        var cntyHtml=ac.map(function(cn){
          var cr=D.filter(function(r){return r.topic===topic&&r.country===cn&&r.brand==='LG'&&r.type===fType});
          if(!cr.length)return'';
          var cells=W.map(function(wk){var v=cr[0]&&cr[0].scores[wk];return'<td style="width:'+CW+'px;min-width:'+CW+'px;max-width:'+CW+'px;text-align:center;padding:5px 0;font-size:16px;color:#475569;font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'}).join('');
          return'<tr style="border-top:1px solid #F1F5F9"><td style="padding:5px 8px;font-size:16px;font-weight:600;color:#64748B;white-space:nowrap">'+cf(cn)+'</td>'+cells+'</tr>';
        }).filter(Boolean).join('');

        html+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:20px;overflow:hidden">';
        // 헤더
        html+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        html+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        html+='<span style="font-size:21px;font-weight:700;color:#1A1A1A">'+topic+'</span>';
        var tpPrompt=TOPIC_PROMPT[topic]||'';
        if(tpPrompt)html+='<span style="font-size:18px;color:#64748B;font-weight:500;font-style:italic;max-width:700px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"'+tpPrompt+'"</span>';
        if(st.label!=='—')html+='<span style="font-size:17px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lgLast!=null)html+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">LG '+lgLast.toFixed(1)+'%</span>';
        if(ssLast!=null)html+='<span style="font-size:17px;color:#94A3B8">vs Samsung '+ssLast.toFixed(1)+'%</span>';
        html+='<span style="margin-left:auto">'+legend+'</span></div>';
        // 차트+테이블 (같은 너비 정렬)
        html+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:120px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(chartData,tblW,160)+'</div></div>';
        // 테이블
        html+='<table style="border-collapse:collapse;table-layout:fixed;width:'+(120+tblW)+'px">';
        html+='<colgroup><col style="width:120px">';W.forEach(function(){html+='<col style="width:'+CW+'px">'});html+='</colgroup>';
        html+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:17px;color:#94A3B8;font-weight:600">Brand</th>';
        W.forEach(function(wk){html+='<th style="text-align:center;padding:5px 0;font-size:17px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
        html+='</tr>';
        brands.forEach(function(b,i){
          var c=bc(b,i);var isLG=b==='LG';
          html+='<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 8px;font-size:17px;font-weight:'+(isLG?700:500)+';color:'+c+';white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>';
          W.forEach(function(wk,wi){var v=chartData[b][wi];html+='<td style="text-align:center;padding:5px 0;font-size:17px;color:'+(v!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
          html+='</tr>';
        });
        if(cntyHtml){
          html+='<tr><td colspan="'+(N+1)+'" style="padding:6px 8px;font-size:14px;font-weight:700;color:#64748B;background:#F8FAFC;border-top:2px solid #E8EDF2">${o==="en"?"LG by Country":"LG 국가별"}</td></tr>'+cntyHtml;
        }
        html+='</table></div></div>';
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${o==="en"?"No data":"데이터 없음"}</div>';
      el.innerHTML=html;
    }
    function renderAll(){renderFilters();renderMatrix();renderSections()}
    window._prSetType=function(t){fType=t;renderAll()};
    window._prCntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._prCntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    renderAll();
  })();
  <\/script>`}function $o(t,e,o,a,l,r){const f=(t||[]).filter(u=>!0);if(!f.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let u=0;u<12;u++)s.push("w"+(5+u));const m=[...new Set(f.map(u=>u.stakeholder))].filter(Boolean).map(u=>({stakeholder:u,topics:[...new Set(f.filter(k=>k.stakeholder===u).map(k=>k.topic))].filter(Boolean)})),h=72,d=JSON.stringify(f).replace(/</g,"\\u003c"),g=JSON.stringify(s),c=JSON.stringify(m),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${zt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${l||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Ut};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${g},GROUPS=${c};
    var CW=${h},RED='${Ut}';
    var N=W.length,tblW=CW*N;
    function svgChart(vals,w,h,color){
      if(!vals||!vals.length)return'';
      var pt=12,pb=4,ch=h-pt-pb;
      var mn=Infinity,mx=-Infinity;
      vals.forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}});
      if(!isFinite(mn)){mn=0;mx=100}
      var pad=Math.max((mx-mn)*0.1,1);mn-=pad;mx+=pad;var rng=mx-mn||1;
      var s='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';
      for(var g=0;g<=4;g++){var gy=pt+(g/4)*ch;s+='<line x1="0" y1="'+gy+'" x2="'+w+'" y2="'+gy+'" stroke="#F1F5F9" stroke-width="1"/>';}
      var pts=[];
      vals.forEach(function(v,i){if(v!=null){var x=(i+0.5)*(w/N);var y=pt+((mx-v)/rng)*ch;pts.push({x:x,y:y})}});
      if(pts.length>0){
        var path=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
        s+='<path d="'+path+'" fill="none" stroke="'+color+'" stroke-width="2.5"/>';
        pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="4" fill="'+color+'"/>'});
      }
      s+='</svg>';return s;
    }
    // 신호등 3단
    function tl(v){
      if(v==null)return{bg:'#F8FAFC',color:'#94A3B8',border:'#E2E8F0',label:'—'};
      if(v>=100)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${o==="en"?"Lead":"선도"}'};
      if(v>=80) return{bg:'#FFFBEB',color:'#B45309',border:'#FDE68A',label:'${o==="en"?"Behind":"추격"}'};
      return{bg:'#FFF1F2',color:'#BE123C',border:'#FECDD3',label:'${o==="en"?"Critical":"취약"}'};
    }
    function renderTopic(topic, stakeholder){
      var rows=D.filter(function(r){return r.topic===topic&&r.stakeholder===stakeholder&&r.country==='TTL'});
      if(!rows.length)rows=D.filter(function(r){return r.topic===topic&&r.stakeholder===stakeholder});
      if(!rows.length)return '';
      var topicHtml=''
      ;(function(){
        var vals=W.map(function(wk){var r=rows[0];return r&&r.scores[wk]!=null?r.scores[wk]:null});
        var lastV=null;for(var i=vals.length-1;i>=0;i--){if(vals[i]!=null){lastV=vals[i];break}}
        var st=tl(lastV);

        topicHtml+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:16px;overflow:hidden">';
        topicHtml+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        topicHtml+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        topicHtml+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">'+topic+'</span>';
        topicHtml+='<span style="font-size:14px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lastV!=null)topicHtml+='<span style="font-size:15px;font-weight:700;color:'+st.color+'">'+lastV.toFixed(1)+'%</span>';
        topicHtml+='</div>';
        topicHtml+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:120px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(vals,tblW,120,RED)+'</div></div>';
        topicHtml+='<table style="border-collapse:collapse;table-layout:fixed;width:'+(120+tblW)+'px">';
        topicHtml+='<colgroup><col style="width:120px">';W.forEach(function(){topicHtml+='<col style="width:'+CW+'px">'});topicHtml+='</colgroup>';
        topicHtml+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:14px;color:#94A3B8;font-weight:600">${o==="en"?"Week":"주차"}</th>';
        W.forEach(function(wk){topicHtml+='<th style="text-align:center;padding:5px 0;font-size:14px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
        topicHtml+='</tr>';
        topicHtml+='<tr style="background:#FFF8F9"><td style="padding:5px 8px;font-size:14px;font-weight:700;color:'+RED+'">Score</td>';
        vals.forEach(function(v){topicHtml+='<td style="text-align:center;padding:5px 0;font-size:14px;color:'+(v!=null?'#1A1A1A':'#CBD5E1')+';font-weight:700;font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
        topicHtml+='</tr></table></div></div>';
      })();
      return topicHtml;
    }
    function render(){
      var el=document.getElementById('${C}-sections');if(!el)return;
      var html='';
      GROUPS.forEach(function(g){
        var inner='';
        g.topics.forEach(function(t){inner+=renderTopic(t,g.stakeholder)});
        if(!inner)return;
        // stakeholder 헤더
        html+='<div style="margin-bottom:24px">';
        var shName=g.stakeholder;
        ${o!=="en"?"if(shName==='CVIOS')shName='고가혁';":""}
        html+='<h3 style="font-size:20px;font-weight:800;color:#0F172A;margin:0 0 12px;padding:8px 0;border-bottom:2px solid '+RED+'">'+shName+'</h3>';
        html+=inner;
        html+='</div>';
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${o==="en"?"No data":"데이터 없음"}</div>';
      el.innerHTML=html;
    }
    render();
  })();
  <\/script>`}function zr(t,e,o,a,l,r,f,s,p,m,h,d,g,c){var tt,G,lt;o=(o||[]).map(z=>({...z,weekly:(z.weekly||[]).map(H=>H??0),monthly:(z.monthly||[]).map(H=>H??0)})),m&&typeof m=="object"&&Object.values(m).forEach(z=>{!z||typeof z!="object"||Object.values(z).forEach(H=>{!H||typeof H!="object"||Object.keys(H).forEach(st=>{const ut=H[st];Array.isArray(ut)&&(H[st]=ut.map(X=>X??0))})})});const C={aircare:"Xiaomi"};o=o.map(z=>{const H=C[(z.id||"").toLowerCase()];if(!H||!z.allScores)return z;const st=Object.entries(z.allScores).find(([ot])=>ot.toLowerCase()===H.toLowerCase()&&ot.toLowerCase()!=="lg");if(!st)return z;const ut=st[1];if(!(ut>0))return z;const X=Math.round(z.score/ut*100);return{...z,compName:st[0],vsComp:ut,compRatio:X,status:X>=100?"lead":X>=80?"behind":"critical"}});const u=(g==null?void 0:g.visibilityOnly)||!1,k=(g==null?void 0:g.includePromptList)||!1,w=(g==null?void 0:g.includeReadability)===!0,v=(c==null?void 0:c.unlaunchedMap)||{},P=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,B=$e[r]||$e.ko;let j;if(p&&p.length)j=p.map(z=>String(z).toUpperCase().startsWith("W")?z.toUpperCase():z);else{const z=m?Math.max(...Object.values(m).flatMap(st=>Object.values(st).flatMap(ut=>Object.values(ut).map(X=>(X==null?void 0:X.length)||0))),0):0,H=t.weekStart||Math.max(1,z-11);j=Array.from({length:Math.max(12,z)},(st,ut)=>`W${H+ut}`)}const $=new Set;m&&Object.values(m).forEach(z=>Object.keys(z).forEach(H=>{H!=="Total"&&$.add(H)})),f&&f.forEach(z=>{z.country&&z.country!=="TTL"&&$.add(z.country)});const _=[...$].sort(),O=r==="en"?"All":"전체",b=["MS","HS","ES"],T=o.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${z.bu}" value="${z.id}" checked onchange="onFilterChange()"><span>${z.kr}</span></label>`).join(""),S=b.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${z}" checked onchange="onBuChange('${z}')"><span>${z}</span></label>`).join(""),E=_.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${z}" checked onchange="onFilterChange()"><span>${qe(z)}</span></label>`).join(""),M=Object.entries(Ke).map(([z,H])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${z}" checked onchange="onRegionChange('${z}')"><span>${H.labelEn}</span></label>`).join(""),x=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,F=g!=null&&g.weeklyLabelsFull&&g.weeklyLabelsFull.length===j.length?g.weeklyLabelsFull:j,N=j.map((z,H)=>`<option value="${H}"${H===j.length-1?" selected":""}>${F[H]||z}</option>`).join(""),I=(((tt=o[0])==null?void 0:tt.monthlyScores)||[]).map(z=>{const H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ut=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?H[parseInt(st[1])-1]:ut?ut[1].charAt(0).toUpperCase()+ut[1].slice(1).toLowerCase():z.date}),R=I.map((z,H)=>`<option value="${H}"${H===I.length-1?" selected":""}>${z}</option>`).join(""),U=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${zt}`,rt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${x}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${j[j.length-1]} ${r==="en"?"data":"기준"}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"View":"조회"}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodPage('weekly')">${r==="en"?"Weekly":"주간"}</button>
          <button class="trend-tab" onclick="switchPeriodPage('monthly')">${r==="en"?"Monthly":"월간"}</button>
        </div>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group" id="vis-week-select-group"${j.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${U}">${N}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${U}"${I.length>0?"":" disabled"}>${R||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${O}</span></label>
        ${S}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${O}</span></label>
        ${T}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${O}</span></label>
        ${M}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${O}</span></label>
        ${E}
      </div>
    </div>
  </div>`,gt=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Tr(t.noticeText)}</div></div>`:"",t.showTotal!==!1?Nr(e,t,B,r):""].join(""),pt=[];if(m&&Object.keys(m).length){const z=Te;Object.entries(m).forEach(([H,st])=>{const ut=o.find(ot=>ot.id===H),X=(ut==null?void 0:ut.kr)||z[H]||H;Object.entries(st).forEach(([ot,ct])=>{if(ot==="Total"||ot==="TTL"||ot==="TOTAL")return;const Et=ct.LG||ct.lg||[],jt=Et.length>0?Et[Et.length-1]:0;if(jt<=0)return;let Xt="",Bt=0;Object.entries(ct).forEach(([Dt,vt])=>{if(Dt==="LG"||Dt==="lg")return;const Vt=Array.isArray(vt)&&vt.length?vt[vt.length-1]:0;Vt>Bt&&(Bt=Vt,Xt=Dt)});const re=+(jt-Bt).toFixed(1),Pt={};Object.entries(ct).forEach(([Dt,vt])=>{if(Array.isArray(vt)&&vt.length){const Vt=vt[vt.length-1];Vt!=null&&(Pt[Dt]=Vt)}}),pt.push({product:X,country:ot,score:jt,compName:Xt,compScore:Bt,gap:re,allScores:Pt})})})}const at=((G=g==null?void 0:g.weeklyLabelsFull)==null?void 0:G[g.weeklyLabelsFull.length-1])||j[j.length-1]||"",xt=at?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${at} ${r==="en"?"data":"기준"}</span>`:"",Ht=[gt,t.showProducts!==!1?Eo(o,t,B,r,j,v,(g==null?void 0:g.monthlyVis)||[],m,xt):"",`<div id="trend-container">${Dr(o,m,j,B,r,v,xt)}</div>`,t.showCnty!==!1?To(pt,t,B,r,v,xt):""].join(""),Tt=o.map(z=>{const H=z.monthlyScore||z.score,st=z.monthlyPrev||z.prev,ut=z.vsComp||0,X=ut>0?H/ut*100:100;return{...z,score:H,prev:st,weeklyScore:H,weeklyPrev:st,monthlyScore:H,monthlyPrev:st,weekly:(z.monthlyScores||[]).map(ot=>ot.score),status:X>=100?"lead":X>=80?"behind":"critical"}}),It=(((lt=o[0])==null?void 0:lt.monthlyScores)||[]).map(z=>{const H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ut=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?H[parseInt(st[1])-1]:ut?ut[1].charAt(0).toUpperCase()+ut[1].slice(1).toLowerCase():z.date}),Ft=(g==null?void 0:g.monthlyVis)||[],At=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Wt=[gt,t.showProducts!==!1?Eo(Tt,t,B,r,It.length?It:["Feb","Mar"],v,Ft,{},At):"",`<div id="monthly-trend-container">${Mr(Tt,Ft,B,r,v,At)}</div>`,t.showCnty!==!1?To(f,t,B,r,v,At):""].join("");return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Sr({FONT:zt,RED:Ut,COMP:ee})}</style>
</head>
<body>
${u?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${rt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Ht}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Wt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Lo(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${$o(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${w?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${k?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
    <button class="tab-btn" onclick="switchTab('glossary')">Glossary</button>
  </div>
  <div id="lang-toggle" style="display:flex;gap:2px;background:#1E293B;border-radius:6px;padding:2px">
    <button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button>
    <button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button>
  </div>
</div>
<div id="gnb-visibility" class="gnb-sub active">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="gnb-citation" class="gnb-sub">
  <button class="gnb-sub-btn active" onclick="switchCitSub('touchpoint')">${r==="en"?"Touch Points":"외부접점채널"}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('dotcom')">${r==="en"?"Dotcom":"닷컴"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${rt}
    <div id="bu-weekly-content" class="dash-container">${Ht}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Wt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Lo(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${$o(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${r==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${r==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
</div>
${w?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${B.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${P}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Or(c==null?void 0:c.appendixPrompts,r)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${_r(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${B.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Rr({lang:r,weeklyAll:m,products:o,productsCnty:f,ulMap:v,monthlyVis:g==null?void 0:g.monthlyVis,total:e,meta:t,wLabels:j})}
<\/script>
</body>
</html>`}function Gr(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),a=t.filter(p=>p.status==="critical"),l=[...t].sort((p,m)=>m.score-p.score)[0],r=[...t].sort((p,m)=>p.score-m.score)[0],f=(t.reduce((p,m)=>p+m.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${f}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),l&&s.push(`가장 높은 카테고리는 ${l.kr} ${l.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(l.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?s.push(`취약 카테고리(${a.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Ur(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Hr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const Q=wt,Wr={citation:[Q.meta,Q.citTouchPoints,Q.citDomain,Q.citPageType],"weekly-report":[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES],"monthly-report":[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES],dashboard:[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citDomain,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES,Q.weeklyPR,Q.weeklyBrandPrompt,Q.appendix,Q.unlaunched,Q.prTopicList],newsletter:[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES,Q.unlaunched]};function Vr(t){return Wr[t]||[]}const Ro="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Kr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function qr({url:t,downloadName:e="sheet",mode:o}){const[a,l]=Y.useState(!1),[r,f]=Y.useState(""),s=o?Vr(o):[],p=s.length?"zip":"xlsx",m=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const d=Kr(t);if(!d){f("ERROR: 동기화 URL 비어있거나 잘못됨");return}l(!0),f("");try{const g=new URLSearchParams({id:d,name:e});s.length&&g.set("tabs",s.join(","));const c=await fetch(`/api/sheet-download?${g.toString()}`,{credentials:"include"});if(!c.ok){const k=await c.text().catch(()=>"");let w=k;try{const v=JSON.parse(k);w=v.error||v.detail||k}catch{}throw new Error(`(${c.status}) ${w}`)}const C=await c.blob(),u=document.createElement("a");u.href=URL.createObjectURL(C),u.download=`${e}.${p}`,document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(u.href),1e3),f("다운로드 완료")}catch(g){f("ERROR: "+(g.message||String(g)))}finally{l(!1)}}return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("button",{onClick:h,disabled:a||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:a||!t?"#1E293B":"#1D4ED8",color:a||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Ro,cursor:a||!t?"not-allowed":"pointer"},children:a?"다운로드 중…":m}),r&&n.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Ro,background:r.startsWith("ERROR")?"#450A0A":"#14532D",color:r.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:r})]})}function Jr({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:l,metaEn:r,setMetaEn:f,total:s,setTotal:p,products:m,setProducts:h,citations:d,setCitations:g,dotcom:c,setDotcom:C,productsCnty:u,setProductsCnty:k,citationsCnty:w,setCitationsCnty:v,resolved:A,previewLang:P,setPreviewLang:B,snapshots:j,setSnapshots:$,setWeeklyLabels:_,setWeeklyAll:O,weeklyLabels:b,weeklyAll:T,citationsByCnty:S,dotcomByCnty:E,generateHTML:M,publishEndpoint:x,setMonthlyVis:F,onSyncExtra:N,categoryStats:I,extra:R,monthlyVis:U,progressMonth:rt,setProgressMonth:dt,progressDataMonth:gt}){const pt=Y.useRef({products:m,productsCnty:u,citations:d,citationsCnty:w,total:s,dotcom:c,extra:R});pt.current={products:m,productsCnty:u,citations:d,citationsCnty:w,total:s,dotcom:c,extra:R};function at(){return pt.current}const[xt,Ht]=Y.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Tt,It]=Y.useState(!1),[Ft,At]=Y.useState(null),[Wt,tt]=Y.useState(""),[G,lt]=Y.useState(""),[z,H]=Y.useState(!1),[st,ut]=Y.useState(""),[X,ot]=Y.useState(!1),[ct,Et]=Y.useState(!1),[jt,Xt]=Y.useState(!1),[Bt,re]=Y.useState(!1),[Pt,Dt]=Y.useState(""),[vt,Vt]=Y.useState(!1),[to,Jo]=Y.useState(!0),[ie,we]=Y.useState(""),[oe,Me]=Y.useState(null),[ue,Yo]=Y.useState([]),Mt=t==="newsletter",[ae,Xo]=Y.useState(()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`});function Ne(){Mt&&fetch("/api/publish").then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.months)&&Yo(i.months)}).catch(()=>{})}Y.useEffect(()=>{if(Mt){Ne();return}fetch(x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(y=>y.ok?y.json():null).then(Me).catch(()=>{})},[t,x,Mt]);const Zo=(()=>{const i=new Set,y=new Date;for(let et=0;et<24;et++){const bt=new Date(y.getFullYear(),y.getMonth()-et,1);i.add(`${bt.getFullYear()}-${String(bt.getMonth()+1).padStart(2,"0")}`)}for(const et of ue)i.add(et.month);return ae&&i.add(ae),[...i].sort((et,bt)=>bt.localeCompare(et))})();function Ce(i){const[y,et]=i.split("-");return`${y}년 ${parseInt(et,10)}월`}const[Qo,eo]=Y.useState(null);Y.useEffect(()=>{let i=!0;const y=()=>ho(t).then(bt=>{i&&eo(bt)});y();const et=setInterval(y,6e4);return()=>{i=!1,clearInterval(et)}},[t]);function tn(){ho(t).then(eo)}async function en(){if(!Bt){re(!0),Dt("");try{const i=at(),y=Ae(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),et=Ae(i.products,i.productsCnty,i.citations,i.citationsCnty,"en");let bt,Nt,W;if(t==="dashboard"){const Z=U||[],ft=i.extra||R||{};bt=M(a,i.total,y.products,y.citations,i.dotcom,"ko",y.productsCnty,y.citationsCnty,b,T,S,E,Z,ft),Nt=M(r,i.total,et.products,et.citations,i.dotcom,"en",et.productsCnty,et.citationsCnty,b,T,S,E,Z,ft),W=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else bt=M(a,i.total,y.products,y.citations,c,"ko",y.productsCnty,y.citationsCnty,{weeklyLabels:b,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Nt=M(r,i.total,et.products,et.citations,c,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:b,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),W=`${a.period||""} ${a.title||"Newsletter"}`.trim();const se=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),D={title:W,htmlKo:bt,htmlEn:Nt};Mt&&(D.month=ae);const Lt=await(await fetch(se,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(D)})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if(Me({...Lt,published:!0}),Mt&&Ne(),t==="dashboard")try{const Z=await Be(t)||{},ft=i.extra||R||{};go(t,{...Z,meta:a,total:i.total,weeklyPR:ft.weeklyPR||Z.weeklyPR,weeklyPRLabels:ft.weeklyPRLabels||Z.weeklyPRLabels,weeklyBrandPrompt:ft.weeklyBrandPrompt||Z.weeklyBrandPrompt,weeklyBrandPromptLabels:ft.weeklyBrandPromptLabels||Z.weeklyBrandPromptLabels,appendixPrompts:ft.appendixPrompts||Z.appendixPrompts})}catch{}const _t=`${window.location.origin}${Lt.urls.ko}`,nt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(_t+`
`+nt)}catch{}Dt(`KO: ${_t}
EN: ${nt}`)}catch(i){Dt("ERROR:"+i.message)}finally{re(!1),setTimeout(()=>Dt(""),2e4)}}}async function on(){if(!vt){Vt(!0),we("");try{const i=await Vn(zr,Ae,{includeProgressTracker:to});we(`통합 게시 완료!
KO: ${window.location.origin}${i.urls.ko}
EN: ${window.location.origin}${i.urls.en}`)}catch(i){we("ERROR: "+i.message)}finally{Vt(!1),setTimeout(()=>we(""),15e3)}}}async function oo(i){try{const y=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),et=Mt?`${y}?month=${encodeURIComponent(i||ae)}`:y;(await(await fetch(et,{method:"DELETE"})).json()).ok&&(Mt?Ne():Me(null))}catch{}}async function nn(){if(P!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}Et(!0)}async function no(i){Et(!1),Xt(!0);const y=(i==null?void 0:i.products)??m,et=(i==null?void 0:i.productsCnty)??u,bt=(i==null?void 0:i.citations)??d,Nt=(i==null?void 0:i.citationsCnty)??w;try{const W=a,se=[W.title||"",W.dateLine||"",W.noticeText||"",W.totalInsight||"",W.reportType||"",W.productInsight||"",W.productHowToRead||"",W.citationInsight||"",W.citationHowToRead||"",W.dotcomInsight||"",W.dotcomHowToRead||"",W.todoText||"",W.todoNotice||"",W.kpiLogicText||"",W.cntyInsight||"",W.cntyHowToRead||"",W.citDomainInsight||"",W.citDomainHowToRead||"",W.citCntyInsight||"",W.citCntyHowToRead||"",W.citPrdInsight||"",W.citPrdHowToRead||"",W.period||"",W.team||"",W.reportNo||"",W.monthlyReportBody||""],D=y.map(J=>J.kr||""),Zt=y.map(J=>J.compName||""),Lt=bt.map(J=>J.category||""),_t=[...new Set(et.map(J=>J.country||""))],nt=[...new Set(et.map(J=>J.product||""))],Z=[...new Set(et.map(J=>J.compName||""))],ft=[...new Set(Nt.map(J=>J.cnty||"").filter(J=>J&&J!=="TTL"))],yt=[...se,...D,...Zt,...Lt,..._t,...nt,...Z,...ft].map(J=>J||" "),q=await qn(yt,{from:"ko",to:"en"});let V=0;const Yt={...a,title:q[V++]||W.title,dateLine:q[V++]||W.dateLine,noticeText:q[V++]||W.noticeText,totalInsight:q[V++]||W.totalInsight,reportType:q[V++]||W.reportType,productInsight:q[V++]||W.productInsight,productHowToRead:q[V++]||W.productHowToRead,citationInsight:q[V++]||W.citationInsight,citationHowToRead:q[V++]||W.citationHowToRead,dotcomInsight:q[V++]||W.dotcomInsight,dotcomHowToRead:q[V++]||W.dotcomHowToRead,todoText:q[V++]||W.todoText,todoNotice:q[V++]||W.todoNotice,kpiLogicText:q[V++]||W.kpiLogicText,cntyInsight:q[V++]||W.cntyInsight,cntyHowToRead:q[V++]||W.cntyHowToRead,citDomainInsight:q[V++]||W.citDomainInsight,citDomainHowToRead:q[V++]||W.citDomainHowToRead,citCntyInsight:q[V++]||W.citCntyInsight,citCntyHowToRead:q[V++]||W.citCntyHowToRead,citPrdInsight:q[V++]||W.citPrdInsight,citPrdHowToRead:q[V++]||W.citPrdHowToRead,period:(V++,W.period),team:q[V++]||W.team,reportNo:(V++,W.reportNo),monthlyReportBody:q[V++]||W.monthlyReportBody},$t=J=>J&&J.replace(/\b\w/g,it=>it.toUpperCase()),Kt=J=>(J||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Qt={};y.forEach((J,it)=>{Qt[J.id]={en:$t(q[V+it]||J.kr),compNameEn:Kt(q[V+D.length+it]||J.compName)}}),V+=D.length+Zt.length;const Ot={};bt.forEach((J,it)=>{Ot[`${J.rank}_${J.source}`]=$t(q[V+it]||J.category)}),V+=Lt.length;const le={};_t.forEach((J,it)=>{le[J]=/^[A-Z]{2,3}$/.test(J)?J:q[V+it]||J}),V+=_t.length;const ke={};nt.forEach((J,it)=>{ke[J]=q[V+it]||J}),V+=nt.length;const fe={};Z.forEach((J,it)=>{fe[J]=q[V+it]||J}),V+=Z.length;const he={};ft.forEach((J,it)=>{he[J]=/^[A-Z]{2,3}$/.test(J)?J:q[V+it]||J}),f(Yt),h(J=>J.map(it=>{var ro,io;return{...it,en:((ro=Qt[it.id])==null?void 0:ro.en)||it.en||it.kr,compNameEn:((io=Qt[it.id])==null?void 0:io.compNameEn)||it.compNameEn||it.compName}})),g(J=>J.map(it=>({...it,categoryEn:Ot[`${it.rank}_${it.source}`]||it.categoryEn||it.category}))),k(J=>J.map(it=>({...it,countryEn:$t(le[it.country]||it.country),productEn:$t(ke[it.product]||it.product),compNameEn:Kt(fe[it.compName]||it.compName)}))),v(J=>J.map(it=>({...it,cntyEn:it.cnty==="TTL"?"TTL":$t(he[it.cnty]||it.cnty)}))),Xt(!1)}catch(W){alert("번역 오류: "+W.message),Xt(!1)}}async function rn(){const i=M(e,s,A.products,A.citations,c,P,A.productsCnty,A.citationsCnty);try{await navigator.clipboard.writeText(i)}catch{const y=document.createElement("textarea");y.value=i,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}H(!0),setTimeout(()=>H(!1),2500)}async function an(){await or(e,s,m,d,c)}async function sn(){if(X!=="sending"){ot("sending");try{const i=at(),y=M(e,i.total,i.products,i.citations,i.dotcom,P,i.productsCnty,i.citationsCnty,{weeklyLabels:b,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,Nt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:st.trim(),subject:et,html:y})})).json();if(!Nt.ok)throw new Error(Nt.error||"발송 실패");ot("ok"),setTimeout(()=>ot(!1),4e3)}catch(i){ot("error"),tt(i.message),setTimeout(()=>{ot(!1),tt("")},5e3)}}}async function ln(){var et,bt,Nt,W,se;if(Tt)return;const i=xr(xt.trim());if(!i){At("error"),tt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>At(null),3e3);return}It(!0),At(null),tt(""),lt("");const y=[];try{const D=await wr(i,nt=>tt(nt));if(y.push(`[Sync] parsed keys: ${Object.keys(D).join(", ")||"(없음)"}`),D.meta&&y.push(`[Sync] meta keys: ${Object.keys(D.meta).join(", ")}`),D.productsPartial&&y.push(`[Sync] products: ${D.productsPartial.length}건`),y.push(`[Sync] citations: ${((et=D.citations)==null?void 0:et.length)??0}건`),y.push(`[Sync] citationsCnty: ${((bt=D.citationsCnty)==null?void 0:bt.length)??0}건`),y.push(`[Sync] dotcom: ${D.dotcom?"OK":"(없음)"}`),y.push(`[Sync] productsCnty: ${((Nt=D.productsCnty)==null?void 0:Nt.length)??0}건`),D.meta){const nt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];l(Z=>{const ft={...Z};for(const[yt,q]of Object.entries(D.meta))nt.includes(yt)&&Z[yt]||(ft[yt]=q);return ft}),f(Z=>({...Z,period:D.meta.period,dateLine:D.meta.dateLine,reportNo:D.meta.reportNo}))}if(D.citations&&(g(D.citations),pt.current={...pt.current,citations:D.citations}),D.dotcom&&(C(nt=>({...nt,...D.dotcom})),pt.current={...pt.current,dotcom:{...pt.current.dotcom,...D.dotcom}}),D.productsCnty&&(k(D.productsCnty),pt.current={...pt.current,productsCnty:D.productsCnty}),D.citationsCnty&&(v(D.citationsCnty),pt.current={...pt.current,citationsCnty:D.citationsCnty}),D.monthlyVis&&F&&F(D.monthlyVis),N){const nt={weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,weeklyLabelsFull:D.weeklyLabelsFull||null,prTopicList:D.prTopicList||null};N(nt),pt.current={...pt.current,extra:{...pt.current.extra,...nt}}}const Zt=D.weeklyLabels||((W=D.meta)==null?void 0:W.weeklyLabels);console.log("[SYNC] weeklyLabels:",Zt,"weeklyLabelsFull:",D.weeklyLabelsFull),Zt&&Zt.length&&_(Zt),D.weeklyAll&&O(nt=>({...nt,...D.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(D));const Lt=D.weeklyMap?Object.keys(D.weeklyMap):[],_t=((se=D.productsPartial)==null?void 0:se.map(nt=>nt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Lt.length?Lt:"NONE"),console.log("[SYNC] productsPartial IDs:",_t.length?_t:"NONE"),Lt.length&&_t.length){const nt=_t.filter(ft=>!Lt.includes(ft)),Z=Lt.filter(ft=>!_t.includes(ft));nt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",nt),Z.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",Z),!nt.length&&!Z.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(D.productsPartial){const nt=D.productsPartial.map(Z=>{var fe;const ft=((fe=D.weeklyMap)==null?void 0:fe[Z.id])||[],yt=ft.filter(he=>he!=null&&he>0),q=Z.score,V=Z.prev||0,Yt=Z.vsComp>0?Math.round(q/Z.vsComp*100):100,$t=yt.length>0?yt[yt.length-1]:q,Kt=yt.length>=5?yt[yt.length-5]:yt[0]||0,Qt=q,Ot=V,le=Yt,ke=V>0&&V!==q?[V,q]:[];return{...Z,score:Qt,prev:Ot,weekly:ft,monthly:ke,weeklyScore:$t,weeklyPrev:Kt,monthlyScore:q,monthlyPrev:V,compRatio:le,status:le>=100?"lead":le>=80?"behind":"critical"}});h(nt),pt.current={...pt.current,products:nt}}else D.weeklyMap&&h(nt=>nt.map(Z=>{var yt;const ft=(yt=D.weeklyMap)==null?void 0:yt[Z.id];return ft?{...Z,weekly:ft}:Z}));if(D.total){const nt={...pt.current.total,...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}};p(Z=>({...Z,...nt})),pt.current={...pt.current,total:nt}}{let nt=function(V){if(!V)return 0;const Yt=String(V).trim(),$t=Yt.match(/(\d{1,2})월/);if($t){const Ot=parseInt($t[1]);return Ot>=1&&Ot<=12?Ot:0}const Kt=Yt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Kt)return yt[Kt[1].toLowerCase()]||0;const Qt=Yt.match(/\d{4}[-\/](\d{1,2})/);if(Qt){const Ot=parseInt(Qt[1]);return Ot>=1&&Ot<=12?Ot:0}return 0};const Z=new Date().getFullYear(),ft=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yt={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let q=0;if(D.derivedPeriod){const V=nt(D.derivedPeriod);V>q&&(q=V)}if(D.citDerivedPeriod){const V=nt(D.citDerivedPeriod);V>q&&(q=V)}q>0&&q<=12&&(l(V=>({...V,period:`${Z}년 ${q}월`})),f(V=>({...V,period:`${ft[q]} ${Z}`})))}if(!D.total&&D.productsPartial&&D.productsPartial.length>0){const nt=D.productsPartial,Z=+(nt.reduce((yt,q)=>yt+q.score,0)/nt.length).toFixed(1),ft=+(nt.reduce((yt,q)=>yt+(q.vsComp||0),0)/nt.length).toFixed(1);p(yt=>({...yt,score:Z,vsComp:ft,rank:Z>=ft?1:2}))}if(setTimeout(()=>{go(t,{meta:D.meta||null,total:D.total?{...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}}:null,productsPartial:D.productsPartial||null,weeklyMap:D.weeklyMap||null,weeklyLabels:D.weeklyLabels||null,weeklyLabelsFull:D.weeklyLabelsFull||null,weeklyAll:D.weeklyAll||null,citations:D.citations||null,dotcom:D.dotcom||null,productsCnty:D.productsCnty||null,citationsCnty:D.citationsCnty||null,citationsByCnty:D.citationsByCnty||null,dotcomByCnty:D.dotcomByCnty||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,prTopicList:D.prTopicList||null,monthlyVis:D.monthlyVis||null,weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,monthlyPR:D.monthlyPR||null,monthlyPRLabels:D.monthlyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,monthlyBrandPrompt:D.monthlyBrandPrompt||null,monthlyBrandPromptLabels:D.monthlyBrandPromptLabels||null,dotcomTrend:D.dotcomTrend||null,dotcomTrendMonths:D.dotcomTrendMonths||null}),setTimeout(tn,250)},100),lt(y.join(`
`)),At("ok"),tt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const nt={};D.productsPartial&&(nt.products=D.productsPartial.map(Z=>{var $t;const ft=(($t=D.weeklyMap)==null?void 0:$t[Z.id])||[],yt=Z.vsComp>0?Z.score/Z.vsComp*100:100,q=ft.find(Kt=>Kt!=null&&Kt>0),V=Z.prev!=null&&Z.prev>0?Z.prev:q||0,Yt=V>0?[V,Z.score]:[];return{...Z,prev:V,weekly:ft,monthly:Yt,compRatio:Math.round(yt),status:yt>=100?"lead":yt>=80?"behind":"critical"}})),D.productsCnty&&(nt.productsCnty=D.productsCnty),D.citations&&(nt.citations=D.citations),D.citationsCnty&&(nt.citationsCnty=D.citationsCnty);try{await no(nt)}catch{}tt("동기화 + 번역 완료!")}}catch(D){y.push(`[ERROR] ${D.message}`),At("error"),tt(D.message),lt(y.join(`
`))}finally{It(!1),setTimeout(()=>{At(null),tt("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:mt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(kr,{...Qo||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),n.jsx("input",{value:xt,onChange:i=>Ht(i.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ht,fontSize:11,padding:"7px 9px",marginBottom:8,color:xt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:ln,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Tt?"wait":"pointer",background:Tt?"#1E293B":mt,fontSize:12,fontWeight:700,color:Tt?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(ao,{size:13,style:{animation:Tt?"spin 1s linear infinite":"none"}}),Tt?"동기화 중...":"구글 시트 동기화"]}),(Ft||Tt&&Wt)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:Ft==="ok"?"#14532D":Ft==="error"?"#450A0A":"#1E293B",color:Ft==="ok"?"#86EFAC":Ft==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Ft==="ok"?"#22C55E33":Ft==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Wt}),G&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[G,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(G).then(()=>{const i=document.getElementById("vis-debug-copy-btn");i&&(i.textContent="복사됨!",setTimeout(()=>{i.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),n.jsx(qr,{url:xt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:nn,disabled:jt,style:{width:"100%",padding:"9px 0",background:jt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:jt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:jt?.6:1},children:[n.jsx(cn,{size:13})," ",jt?"번역 중...":"AI 번역 (EN)"]}),ct&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>Et(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:no,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:an,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(dn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Mt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"발행 월"}),n.jsx("select",{value:ae,onChange:i=>Xo(i.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:Zo.map(i=>n.jsxs("option",{value:i,children:[i," · ",Ce(i),ue.find(y=>y.month===i)?" ✓ 게시됨":""]},i))})]}),Mt&&dt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",gt||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:rt||"",onChange:i=>dt(i.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",gt||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(i=>n.jsx("option",{value:i,children:i},i))]}),rt&&n.jsx("button",{onClick:()=>dt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:en,disabled:Bt,style:{width:"100%",padding:"9px 0",background:Bt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:Bt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(so,{size:12}),Bt?"게시 중...":Mt?`${Ce(ae)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:to,onChange:i=>Jo(i.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:on,disabled:vt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:vt?"#1E293B":"#166534",color:vt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:vt?"wait":"pointer",marginBottom:6},children:[n.jsx(so,{size:12}),vt?"통합 게시 중...":"통합 대시보드 게시"]}),ie&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:ie.startsWith("ERROR")?"#450A0A":"#14532D",color:ie.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:ie.startsWith("ERROR:")?ie.slice(6):ie})]})]}),n.jsxs("button",{onClick:async()=>{const i={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(i).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const bt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:i})})).json();bt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(bt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(pn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Pt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:Pt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Pt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Pt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Pt.startsWith("ERROR:")?Pt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(_e,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Pt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Mt&&(oe==null?void 0:oe.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>oo(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:oe.urls.ko},{label:"EN",url:oe.urls.en}].map(({label:i,url:y})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i,": ",y]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${y}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(_e,{size:10})})]},i)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:oe.ts?new Date(oe.ts).toLocaleString("ko-KR"):""})]}),Mt&&ue.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ue.length,")"]})}),ue.map(i=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L},children:Ce(i.month)}),n.jsx("button",{onClick:()=>{confirm(`${Ce(i.month)} 게시본을 삭제할까요?`)&&oo(i.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:i.urls.ko},{label:"EN",url:i.urls.en}].map(({label:y,url:et})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:et,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[y,": ",et]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${et}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(_e,{size:10})})]},y)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:i.ts?new Date(i.ts).toLocaleString("ko-KR"):""})]},i.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:i=>o(y=>({...y,reportType:i.target.value})),style:{...ht,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),n.jsx("input",{value:e.reportNo,onChange:i=>o(y=>({...y,reportNo:i.target.value})),style:{...ht}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:i=>o(y=>({...y,period:i.target.value})),style:{...ht}})]})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:i=>o(y=>({...y,title:i.target.value})),rows:4,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:i=>o(y=>({...y,team:i.target.value})),style:{...ht,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:i=>o(y=>({...y,dateLine:i.target.value})),style:{...ht,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),n.jsx("button",{onClick:()=>o(i=>({...i,showNotice:!i.showNotice})),style:{background:e.showNotice?mt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:i=>o(y=>({...y,noticeText:i.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ht,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(i=>({...i,showKpiLogic:!i.showKpiLogic})),style:{background:e.showKpiLogic?mt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:i=>o(y=>({...y,kpiLogicText:i.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ht,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:i=>o(y=>({...y,titleFontSize:Number(i.target.value)})),style:{width:"100%",accentColor:mt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:i=>o(y=>({...y,titleColor:i.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([i,y])=>n.jsx("button",{onClick:()=>o(et=>({...et,titleColor:i})),title:y,style:{width:16,height:16,borderRadius:"50%",background:i,border:e.titleColor===i?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},i))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:i,label:y})=>n.jsx("button",{onClick:()=>o(et=>({...et,[i]:!et[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[i]?mt:"#1E293B",color:e[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:y},i))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?mt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(i=>({...i,trendMode:(i.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?mt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?mt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,monthlyReportBody:"⏳ AI 생성 중..."}));const i=await St("monthlyReportBody",{products:at().products,productsCnty:at().productsCnty,total:at().total,citations:at().citations,todoText:e.todoText||"",period:e.period||""},P);o(y=>({...y,monthlyReportBody:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,monthlyReportBody:`[AI 실패: ${i.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:i=>o(y=>({...y,monthlyReportBody:i.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:L},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,totalInsight:"⏳ AI 생성 중..."}));const i=await St("totalInsight",{products:at().products,productsCnty:at().productsCnty,total:at().total,todoText:e.todoText||""},P);o(y=>({...y,totalInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,totalInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:i=>o(y=>({...y,totalInsight:i.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productInsight:"⏳ AI 생성 중..."}));const i=await St("product",{products:at().products,total:at().total},P);o(y=>({...y,productInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,productInsight:`[AI 실패: ${i.message}]

`+Gr(at().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductInsight:!i.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?mt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:i=>o(y=>({...y,productInsight:i.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 GEO Visibility"},P);o(y=>({...y,productHowToRead:i}))}catch{o(i=>({...i,productHowToRead:Ur()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductHowToRead:!i.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?mt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:i=>o(y=>({...y,productHowToRead:i.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyInsight:"⏳ AI 생성 중..."}));const i=await St("cnty",{productsCnty:at().productsCnty},P);o(y=>({...y,cntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,cntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyInsight:!i.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?mt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:i=>o(y=>({...y,cntyInsight:i.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 GEO Visibility"},P);o(y=>({...y,cntyHowToRead:i}))}catch{o(i=>({...i,cntyHowToRead:Hr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyHowToRead:!i.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?mt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:i=>o(y=>({...y,cntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:i=>o(y=>({...y,prNotice:i.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:i=>o(y=>({...y,prTopicDescsRaw:i.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:i=>o(y=>({...y,prTopicPromptsRaw:i.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:i=>o(y=>({...y,bpNotice:i.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationInsight:"⏳ AI 생성 중..."}));const i=await St("citation",{citations:at().citations},P);o(y=>({...y,citationInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citationInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationInsight:!i.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?mt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:i=>o(y=>({...y,citationInsight:i.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"Citation 도메인별 현황"},P);o(y=>({...y,citationHowToRead:i}))}catch{o(i=>({...i,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationHowToRead:!i.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?mt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:i=>o(y=>({...y,citationHowToRead:i.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainInsight:"⏳ AI 생성 중..."}));const i=await St("citDomain",{citationsCnty:at().citationsCnty},P);o(y=>({...y,citDomainInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citDomainInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainInsight:!i.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?mt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:i=>o(y=>({...y,citDomainInsight:i.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"도메인별 Citation 현황"},P);o(y=>({...y,citDomainHowToRead:i}))}catch{o(i=>({...i,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainHowToRead:!i.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?mt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:i=>o(y=>({...y,citDomainHowToRead:i.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyInsight:"⏳ AI 생성 중..."}));const i=await St("citCnty",{citationsCnty:at().citationsCnty},P);o(y=>({...y,citCntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citCntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyInsight:!i.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?mt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:i=>o(y=>({...y,citCntyInsight:i.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 Citation 도메인"},P);o(y=>({...y,citCntyHowToRead:i}))}catch{o(i=>({...i,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyHowToRead:!i.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?mt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:i=>o(y=>({...y,citCntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdInsight:"⏳ AI 생성 중..."}));const i=await St("citPrd",{citationsCnty:at().citationsCnty},P);o(y=>({...y,citPrdInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citPrdInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdInsight:!i.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?mt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:i=>o(y=>({...y,citPrdInsight:i.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 Citation"},P);o(y=>({...y,citPrdHowToRead:i}))}catch{o(i=>({...i,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdHowToRead:!i.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?mt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:i=>o(y=>({...y,citPrdHowToRead:i.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),u.length>0&&(()=>{const i=[...new Set(A.productsCnty.map(y=>y.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:i.map(y=>{const et=(e.cntyProductFilter||{})[y]!==!1;return n.jsx("button",{onClick:()=>o(bt=>({...bt,cntyProductFilter:{...bt.cntyProductFilter||{},[y]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:y},y)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomInsight:"⏳ AI 생성 중..."}));const i=await St("dotcom",{dotcom:at().dotcom},P);o(y=>({...y,dotcomInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,dotcomInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomInsight:!i.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?mt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:i=>o(y=>({...y,dotcomInsight:i.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"닷컴 Citation"},P);o(y=>({...y,dotcomHowToRead:i}))}catch{o(y=>({...y,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomHowToRead:!i.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?mt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:i=>o(y=>({...y,dotcomHowToRead:i.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:i=>o(y=>({...y,todoNotice:i.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,todoText:"⏳ AI 생성 중..."}));const i=await St("todo",{products:at().products},P);o(y=>({...y,todoText:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,todoText:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showTodo:!i.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?mt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:i=>o(y=>({...y,todoText:i.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:rn,style:{width:"100%",padding:"9px 0",background:z?"#14532D":"transparent",border:`1px solid ${z?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:z?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:z?n.jsxs(n.Fragment,{children:[n.jsx(Ue,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(jo,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:st,onChange:i=>ut(i.target.value),placeholder:"recipient@example.com",style:{...ht,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:sn,disabled:X==="sending"||!st.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:X==="sending"||!st.trim()?"not-allowed":"pointer",background:X==="ok"?"#14532D":X==="error"?"#7F1D1D":X==="sending"?"#1E3A5F":st.trim()?"#1D4ED8":"#1E293B",color:X==="ok"?"#86EFAC":X==="error"?"#FCA5A5":st.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:X==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(ao,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):X==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(Ue,{size:12})," 발송 완료!"]}):X==="error"?n.jsxs(n.Fragment,{children:[n.jsx(lo,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(lo,{size:12})," 메일 발송"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const ce="weekly-report",Io="geo-weekly-report-cache";function Yr({meta:t,total:e,products:o,citations:a,dotcom:l,productsCnty:r=[],citationsCnty:f=[],lang:s="ko",weeklyLabels:p,weeklyAll:m,categoryStats:h}){const d=Y.useRef(null),g=Y.useMemo(()=>Je(t,e,o,a,l,s,r,f,{weeklyLabels:p,weeklyAll:m,categoryStats:h}),[t,e,o,a,l,s,r,f,p,m,h]);return yn.useEffect(()=>{const c=d.current;if(!c)return;const C=c.contentDocument||c.contentWindow.document;C.open(),C.write(g),C.close();const u=()=>{try{C.body.style.overflow="hidden",C.documentElement.style.overflow="hidden";const k=C.documentElement.scrollHeight;k&&(c.style.height=k+20+"px")}catch{}};setTimeout(u,150),setTimeout(u,400),setTimeout(u,1e3),setTimeout(u,2e3)},[g]),n.jsx("iframe",{ref:d,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Xr({meta:t,total:e,products:o,citations:a,dotcom:l,productsCnty:r=[],citationsCnty:f=[],lang:s="ko",weeklyLabels:p,weeklyAll:m,categoryStats:h}){const[d,g]=Y.useState(!1),c=Y.useMemo(()=>Je(t,e,o,a,l,s,r,f,{weeklyLabels:p,weeklyAll:m,categoryStats:h}),[t,e,o,a,l,s,r,f,p,m,h]);async function C(){try{await navigator.clipboard.writeText(c)}catch{const u=document.createElement("textarea");u.value=c,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u)}g(!0),setTimeout(()=>g(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:C,style:{padding:"6px 14px",borderRadius:7,border:"none",background:d?"#14532D":mt,color:d?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ue,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(jo,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:c})})]})}function Zr(){const t=Y.useRef(On(Io)).current,[e,o]=Y.useState({...Se,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,l]=Y.useState({...Se,...(t==null?void 0:t.metaEn)??{}}),[r,f]=Y.useState((t==null?void 0:t.total)??jn),[s,p]=Y.useState((t==null?void 0:t.products)??Pn),[m,h]=Y.useState((t==null?void 0:t.citations)??_n),[d,g]=Y.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Dn),[c,C]=Y.useState((t==null?void 0:t.productsCnty)??Mn),[u,k]=Y.useState((t==null?void 0:t.citationsCnty)??Nn),[w,v]=Y.useState((t==null?void 0:t.weeklyLabels)??null),[A,P]=Y.useState((t==null?void 0:t.weeklyAll)??{}),[B,j]=Y.useState(null),[$,_]=Y.useState("preview"),[O,b]=Y.useState("ko"),[T,S]=Y.useState([]),[E,M]=Y.useState(""),[x,F]=Y.useState(!1),[N,I]=Y.useState(""),[R,U]=Y.useState(null),[rt,dt]=Y.useState(!0);Y.useEffect(()=>{let tt=!1;const G=Zn(e.period)||`${new Date().getMonth()+1}월`,lt=Qn(G);async function z(){var H,st,ut;try{const X=await fetch("/api/tracker-snapshot-v2"),ot=X.ok?await X.json():null;if(ot!=null&&ot.ok&&((ut=(st=(H=ot.data)==null?void 0:H.quantitativeGoals)==null?void 0:st.rows)!=null&&ut.length)){const ct=mo(ot.data,lt);if(ct!=null&&ct.length&&!tt){j(ct);return}}}catch{}try{const[{parseKPISheet:X},ot]=await Promise.all([He(()=>import("./sheetParser-BGRKNm5Y.js"),[]),He(()=>import("./xlsx-2l-k0XfJ.js").then(Vt=>Vt.x),__vite__mapDeps([0,1]))]),ct=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Et=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${ct}&headers=1`,jt=await fetch(Et,{cache:"no-store"});if(!jt.ok)return;const Xt=await jt.text(),Bt=ot.read(Xt,{type:"string"}),re=Bt.Sheets[Bt.SheetNames[0]],Pt=ot.utils.sheet_to_json(re,{header:1,defval:""}),Dt=X(Pt),vt=mo(Dt,lt);vt!=null&&vt.length&&!tt&&j(vt)}catch{}}return z(),()=>{tt=!0}},[e.period]);const gt=O==="en"?a:e,pt=O==="en"?l:o,at=Y.useMemo(()=>Ae(s,c,m,u,O),[s,c,m,u,O]);Y.useEffect(()=>{Gn(ce).then(S)},[]);const xt=Y.useRef(null);function Ht(tt,G=2e3){clearTimeout(xt.current),I(tt),xt.current=setTimeout(()=>I(""),G)}Y.useEffect(()=>()=>clearTimeout(xt.current),[]);const Tt=Y.useRef(!1);Y.useEffect(()=>{let tt=!1;return Be(ce).then(G=>{tt||!G||(Tt.current=!0,G.meta&&o(lt=>({...lt,...G.meta})),G.total&&f(lt=>({...lt,...G.total})),G.citations&&h(G.citations),G.dotcom&&g(lt=>({...lt,...G.dotcom})),G.productsCnty&&C(G.productsCnty),G.citationsCnty&&k(G.citationsCnty),G.weeklyLabels&&v(G.weeklyLabels),G.weeklyAll&&P(lt=>({...lt,...G.weeklyAll})),G.productsPartial?p(G.productsPartial.map(lt=>{var st;const z=((st=G.weeklyMap)==null?void 0:st[lt.id])||[],H=lt.vsComp>0?lt.score/lt.vsComp*100:100;return{...lt,weekly:z,monthly:[],compRatio:Math.round(H),status:H>=100?"lead":H>=80?"behind":"critical"}})):G.weeklyMap&&p(lt=>lt.map(z=>{var st;const H=(st=G.weeklyMap)==null?void 0:st[z.id];return H?{...z,weekly:H}:z})))}),()=>{tt=!0}},[]),Y.useEffect(()=>{zn(Io,{metaKo:e,metaEn:a,total:r,products:s,citations:m,dotcom:d,productsCnty:c,citationsCnty:u,weeklyLabels:w,weeklyAll:A})},[e,a,r,s,m,d,c,u,w,A]);async function It(){if(!R)return;const G=await Hn(ce,R,{metaKo:e,metaEn:a,total:r,products:s,citations:m,dotcom:d,productsCnty:c,citationsCnty:u,weeklyLabels:w,weeklyAll:A});G&&S(G),Ht(G?"저장 완료!":"저장 실패")}async function Ft(){var lt;const tt=E.trim()||`${gt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,G=await Un(ce,tt,{metaKo:e,metaEn:a,total:r,products:s,citations:m,dotcom:d,productsCnty:c,citationsCnty:u,weeklyLabels:w,weeklyAll:A});G&&(S(G),M(""),U(((lt=G[0])==null?void 0:lt.ts)||null)),Ht(G?"새로 저장 완료!":"저장 실패")}function At(tt){const G=tt.data;o({...Se,...G.metaKo||G.meta||{}}),l({...Se,...G.metaEn||{}}),G.total&&f(G.total),G.products&&p(G.products),G.citations&&h(G.citations),G.dotcom&&g(G.dotcom),G.productsCnty&&C(G.productsCnty),G.citationsCnty&&k(G.citationsCnty),G.weeklyLabels&&v(G.weeklyLabels),G.weeklyAll&&P(G.weeklyAll),U(tt.ts),Ht(`"${tt.name}" 불러옴`)}async function Wt(tt){const G=T[tt];if(!G)return;const lt=await Wn(ce,G.ts);lt&&S(lt),R===G.ts&&U(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[rt&&n.jsx(Jr,{mode:ce,meta:gt,setMeta:pt,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:l,total:r,setTotal:f,products:s,setProducts:p,citations:m,setCitations:h,dotcom:d,setDotcom:g,productsCnty:c,setProductsCnty:C,citationsCnty:u,setCitationsCnty:k,resolved:at,previewLang:O,setPreviewLang:b,snapshots:T,setSnapshots:S,setWeeklyLabels:v,setWeeklyAll:P,weeklyLabels:w,weeklyAll:A,generateHTML:Je}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>dt(tt=>!tt),title:rt?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:rt?n.jsx(un,{size:16}):n.jsx(fn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:tt,tab:G,lang:lt,label:z})=>{const H=G==="code"?$==="code":$==="preview"&&O===lt;return n.jsx("button",{onClick:()=>{_(G),lt&&b(lt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:H?"#1E293B":"transparent",color:H?"#FFFFFF":"#475569",fontSize:11,fontWeight:H?700:500,fontFamily:L,cursor:"pointer"},children:z},tt)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[N&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:N}),n.jsxs("button",{onClick:It,disabled:!R,title:R?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:R?"pointer":"default",background:R?"#1D4ED8":"#1E293B",color:R?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:R?1:.5},children:[n.jsx(co,{size:11})," 저장"]}),n.jsx("input",{value:E,onChange:tt=>M(tt.target.value),placeholder:"버전 이름...",onKeyDown:tt=>tt.key==="Enter"&&Ft(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),n.jsxs("button",{onClick:Ft,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[n.jsx(co,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>F(!x),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:x?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[n.jsx(hn,{size:11})," 불러오기 ",T.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",T.length,")"]})]}),x&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:tt=>tt.stopPropagation(),children:T.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):T.map((tt,G)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:R===tt.ts?"#1E3A5F":"#0F172A",border:R===tt.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:tt.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(tt.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{At(tt),F(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),n.jsx("button",{onClick:()=>Wt(G),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(gn,{size:10})})]},tt.ts))})]})]})]}),$==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:n.jsx(Yr,{meta:gt,total:r,products:at.products,citations:at.citations,dotcom:d,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:O,weeklyLabels:w,weeklyAll:A,categoryStats:B})})}):n.jsx(Xr,{meta:gt,total:r,products:at.products,citations:at.citations,dotcom:d,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:O,weeklyLabels:w,weeklyAll:A,categoryStats:B}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}mn.createRoot(document.getElementById("root")).render(n.jsx(Zr,{}));
