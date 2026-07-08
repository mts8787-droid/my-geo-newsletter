const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as st,R as po,L as fn,D as mn,G as uo,A as gn,c as He,S as Pt,C as qe,d as No,e as ho,f as _o,P as yn,h as bn,i as fo,F as xn,T as vn}from"./react-CVd_-pOw.js";import{R as wn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const Cn="modulepreload",kn=function(t){return"/admin/weekly-report/"+t},mo={},Je=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let c=function(x){return Promise.all(x.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=c(o.map(x=>{if(x=kn(x),x in mo)return;mo[x]=!0;const f=x.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":Cn,f||(h.as="script"),h.crossOrigin="",h.href=x,p&&h.setAttribute("nonce",p),document.head.appendChild(h),f)return new Promise((u,C)=>{h.addEventListener("load",u),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${x}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return a.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},Sn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Re={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},zo={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Fe={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Ce={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Fn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Sn.map((t,e)=>[t,e]));const Go={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Uo=new Set(Object.values(Fe)),go=[...new Set(Object.values(Go))].filter(t=>!Uo.has(t));go.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:go,validCodes:[...Uo]});const ce="Total";function Tn(...t){const e=new Set([ce]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(c=>e.add(c)))})}),[ce,...Array.from(e).filter(o=>o!==ce).sort((o,i)=>o.localeCompare(i))]}function Ho(t,e){return!Array.isArray(t)||!e||e===ce?t:t.map(o=>{var x;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(f=>{var d;return(d=f==null?void 0:f.byLlm)==null?void 0:d[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],p=(x=c==null?void 0:c.byLlm)==null?void 0:x[e];return{...o,score:s.score??o.score,prev:(p==null?void 0:p.score)??null,vsComp:s.comp??o.vsComp,allScores:s.allScores??o.allScores,monthlyScore:s.score??o.monthlyScore??o.score,monthlyPrev:(p==null?void 0:p.score)??null,monthlyScores:i.map(f=>{var h;const d=(h=f==null?void 0:f.byLlm)==null?void 0:h[e];return d?{...f,score:d.score,comp:d.comp,allScores:d.allScores}:{...f,score:null,comp:null,allScores:null}})}})}function Wo(t,e){return!Array.isArray(t)||!e||e===ce?t:t.map(o=>{var f;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(d=>{var h;return(h=d==null?void 0:d.byLlm)==null?void 0:h[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],p=(f=c==null?void 0:c.byLlm)==null?void 0:f[e],x=s.compScore??o.compScore;return{...o,score:s.score??o.score,prev:(p==null?void 0:p.score)??null,compScore:x,compName:s.compName??o.compName,allScores:s.allScores??o.allScores,gap:+((s.score??o.score)-x||0).toFixed(2),monthlyScores:i.map(d=>{var u;const h=(u=d==null?void 0:d.byLlm)==null?void 0:u[e];return h?{...d,score:h.score,compScore:h.compScore,compName:h.compName,allScores:h.allScores}:{...d,score:null,compScore:null,compName:null,allScores:null}})}})}function En(t,e){if(!Array.isArray(t)||!e||e===ce)return(t||[]).filter(a=>!a.llmModel||a.llmModel===ce||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const n=`${a.date}|${a.country}|${a.division}`;o[n]||(o[n]={}),o[n][a.llmModel]=a});const i=[];return Object.values(o).forEach(a=>{const n=a[e]||a[ce]||a.TOTAL||a.All;n&&i.push(n)}),i}function Vo(t,e,o){if(!o||o===ce||!Array.isArray(e)||!e.length)return t;const i=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!i.length)return t;i.sort((c,s)=>String(c.date).localeCompare(String(s.date)));const a=i[i.length-1],n=i.length>=2?i[i.length-2]:null;return{...t,score:a.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:a.comp??t.vsComp}}const pt="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",An=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function ye(t){const e=An.indexOf(t);return e>=0?e:999}function It(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const yo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Ko(t){return yo.filter(e=>t.includes(e)).concat(t.filter(e=>!yo.includes(e)))}const Ln={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function qo(t){return Ln[String(t||"").trim().toUpperCase()]||t}function ke(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function $n(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ye(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ve(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Bn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Re,i=zo,a=[],n=[];Object.entries(t).forEach(([p,x])=>{if(!x)return;const f=x.Total||x.TTL||x.TOTAL;if(f){const d=f.LG||f.lg||[],h=d.length>0?d[d.length-1]:null,u=d.length>=2?d[d.length-2]:null;let C="",b=0;Object.entries(f).forEach(([g,w])=>{if(g==="LG"||g==="lg")return;const m=Array.isArray(w)&&w.length?w[w.length-1]:0;m>b&&(b=m,C=g)}),h!=null&&h>0&&a.push({id:p,kr:o[p]||p,bu:i[p]||"OTHER",score:h,prev:u,vsComp:b,compName:C,category:o[p]||p})}Object.entries(x).forEach(([d,h])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const u=h.LG||h.lg||[],C=u.length>0?u[u.length-1]:null,b=u.length>=2?u[u.length-2]:null;if(C==null||C<=0)return;let g="",w=0;Object.entries(h).forEach(([m,I])=>{if(m==="LG"||m==="lg")return;const M=Array.isArray(I)&&I.length?I[I.length-1]:0;M>w&&(w=M,g=m)}),n.push({product:o[p]||p,country:d,score:C,prev:b,compScore:w,compName:g})})});const c=(e==null?void 0:e[e.length-1])||"This Week",s=(e==null?void 0:e[e.length-2])||"Last Week";return{products:a,productsCnty:n,lastLabel:c,prevLabel:s}}function Rn(t,e,o,i){if(!t.length)return"";const a=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},n=["MS","HS","ES"],c={};t.forEach(p=>{const x=p.bu||"OTHER";c[x]||(c[x]=[]),c[x].push(p)});const s=[];return n.forEach(p=>{const x=(c[p]||[]).slice().sort((f,d)=>ye(f.kr||f.category||f.id)-ye(d.kr||d.category||d.id));x.forEach((f,d)=>{const h=$n(f.score,f.prev),u=ve(f.score,f.vsComp)||"#FFFFFF";s.push(`<tr>
        ${d===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${It(f.kr||f.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${u};">${ke(f.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${u};">${ke(f.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${u};">${It(f.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${u};">${Ye(f.score,f.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${h}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${i})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.wow}</th>
      </tr>
    </thead>
    <tbody>${s.join("")}</tbody>
  </table>`}function jn(t,e,o,i){const a=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={},c=new Set,s=new Set;t.forEach(u=>{!u.country||!u.product||(c.add(u.country),s.add(u.product),n[u.product]||(n[u.product]={}),n[u.product][u.country]=u)});const p=Ko(Array.from(c)),x=Array.from(s).sort((u,C)=>ye(u)-ye(C));if(!x.length||!p.length)return"";const f={};(o||[]).forEach(u=>{[u.kr,u.category,u.id,u.en].filter(Boolean).forEach(b=>{f[b]=u})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+p.map(u=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${It(qo(u))}</th>`).join(""),h=[];return x.forEach((u,C)=>{const b=C%2===0?"#FFFFFF":"#FAFAFA",g=f[u],m=(g?ve(g.score,g.vsComp):null)||b,I=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${m};">${g?ke(g.score):"—"}</td>`,M=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${m};">${g?Ye(g.score,g.vsComp):"—"}</td>`,P=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${m};color:#1A1A1A;font-weight:600;">${g!=null&&g.compName?It(g.compName):"—"}</td>`,_=p.map(U=>{var S;const B=(S=n[u])==null?void 0:S[U],E=(B?ve(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${E};">${B?ke(B.score):"—"}</td>`}).join(""),$=p.map(U=>{var S;const B=(S=n[u])==null?void 0:S[U],E=(B?ve(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${E};">${B?Ye(B.score,B.compScore):"—"}</td>`}).join(""),D=p.map(U=>{var S;const B=(S=n[u])==null?void 0:S[U],E=(B?ve(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${E};color:#1A1A1A;font-weight:600;">${B!=null&&B.compName?It(B.compName):"—"}</td>`}).join("");h.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${It(u)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${I}${_}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${M}${$}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${P}${D}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${i})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${h.join("")}</tbody>
  </table>
  </div>`}function In(t,e,o,i){const a=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${i})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${i})`,product:"제품"},n={},c=new Set,s=new Set;t.forEach(h=>{!h.country||!h.product||(c.add(h.country),s.add(h.product),n[h.product]||(n[h.product]={}),n[h.product][h.country]=h)});const p=Ko(Array.from(c)),x=Array.from(s).sort((h,u)=>ye(h)-ye(u));if(!x.length||!p.length)return"";const f=p.map(h=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${It(qo(h))}</th>`).join(""),d=x.map(h=>{const u=p.map(C=>{var _;const b=(_=n[h])==null?void 0:_[C];if(!b||b.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;color:#999;">—</td>`;const g=b.score,w=b.prev,m=w!=null?+(g-w).toFixed(1):null,I=m==null?"#999":m>0?"#16A34A":m<0?"#DC2626":"#666",M=m==null?"":m>0?"▲":m<0?"▼":"─",P=m!=null?`${M}${Math.abs(m).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;">
        <div style="font-weight:700;color:#111;">${ke(g)}%</div>
        <div style="font-size:9px;color:${I};">${P}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${It(h)}</td>
      ${u}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${a.product}</th>
      ${f}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${pt};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Pn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,c)=>n+(c.score||0),0),a=t.map((n,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${It(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${a}</tbody>
  </table>`}function Mn(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,p)=>(p.citations||0)-(s.citations||0));const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,p)=>s+(p.citations||0),0),c=i.map((s,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${It(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${It(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Dn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(s=>o[s]!=null);if(!a.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=a.map(s=>{const p=o[s]||0,x=i[s]||0,f=p-x,d=f>0?"LG":f<0?"SS":"=",h=f>0?"#86EFAC":f<0?"#FCA5A5":"#FFFFFF",u=f>0?"#14532D":f<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${h};color:${u};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:${s==="TTL"?"900":"600"};">${It(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${f>0?"+":""}${f.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function On(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",i=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>{const p=(s.monthRate||0).toFixed(0),x=(s.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${pt};background:#F5F5F5;">${It(s.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.monthRate)};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${pt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function to(t,e,o,i,a={},n="ko",c=[],s=[],p={}){const{weeklyAll:x={},weeklyLabels:f=[],categoryStats:d=null,cntyKeys:h=null,llmModel:u,monthlyVis:C}=p;u&&u!=="Total"&&(o=Ho(o,u),c=Wo(c,u),e=Vo(e,C,u));let b=x;if(Array.isArray(h)&&h.length>0){const $=new Set(h.map(U=>String(U).toUpperCase())),D=U=>/^(total|ttl)$/i.test(String(U));c=(c||[]).filter(U=>U&&$.has(String(U.country).toUpperCase())),s=(s||[]).filter(U=>U&&$.has(String(U.country).toUpperCase())),b={},Object.entries(x||{}).forEach(([U,B])=>{if(!B)return;const K={};Object.entries(B).forEach(([E,S])=>{(D(E)||$.has(String(E).toUpperCase()))&&(K[E]=S)}),b[U]=K})}const g=Bn(b,f),w=g.products.length?g.products:o,m=g.productsCnty.length?g.productsCnty:c,I=g.lastLabel,M=g.prevLabel,P=n==="en"?"GEO Weekly Report":"GEO 주간 보고서",_=t.period||I||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${It(P)} — ${It(_)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${pt} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${pt};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${pt};">${It(P)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${pt};">${It(_)} · ${I?`${It(I)} ${n==="en"?"data":"기준"}`:""}</p>
    </div>

    ${Rn(w,n,I,M)}
    ${In(m,n,I,M)}
    ${jn(m,n,w,I)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Pn(i,n)}
    ${Mn(s,n)}
    ${Dn(a,n)}

    ${On(d,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${pt};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const Bt="#CF0652",L="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Nn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Ae={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Nn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showTouchPointsBump:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},_n={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},zn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Gn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Un=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Hn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Wn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Jo=3;function Vn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Jo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Kn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Jo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ne={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function he(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function qn(t){try{const e=await fetch(he(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Jn(t,e,o){try{const i=await fetch(he(t).snapshots,{method:"POST",headers:Ne,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Yn(t,e,o){try{const i=await fetch(`${he(t).snapshots}/${e}`,{method:"PUT",headers:Ne,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function Xn(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Mt(t,e,o="ko",i=""){try{const a=await fetch("/api/generate-insight",{method:"POST",headers:Ne,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!a.ok){const c=await a.json().catch(()=>({}));throw new Error(c.error||`HTTP ${a.status}`)}const n=await a.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(a){throw console.error("[API] generateAIInsight failed:",a.message),a}}async function je(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function bo(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Zn(t,e,o={}){const{includePromptList:i=!1,includeReadability:a=!1}=o,[n,c]=await Promise.all([je("dashboard").catch(()=>null),je("visibility").catch(()=>null)]),s={...n||{},...c||{}};if(n&&Object.keys(n).forEach(S=>{s[S]==null&&n[S]!=null&&(s[S]=n[S])}),c!=null&&c.meta&&(n!=null&&n.meta)&&(s.meta={...n.meta||{},...c.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const p=s.meta||{},x=s.total||{},d=(s.productsPartial||s.products||[]).map(S=>{var J;const G=S.weekly||((J=s.weeklyMap)==null?void 0:J[S.id])||[],N=S.vsComp>0?S.score/S.vsComp*100:100;return{...S,weekly:G,monthly:S.monthly||[],compRatio:S.compRatio||Math.round(N),status:S.status||(N>=100?"lead":N>=80?"behind":"critical")}}),h=s.citations||[],u=s.dotcom||{},C=s.productsCnty||[],b=s.citationsCnty||[],g=s.weeklyLabels||null,w=s.weeklyAll||{},m=s.citationsByCnty||{},I=s.dotcomByCnty||{},M=e(d,C,h,b,"ko"),P=e(d,C,h,b,"en"),_={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],monthlyPR:s.monthlyPR||[],monthlyPRLabels:s.monthlyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},$={monthlyVis:s.monthlyVis||[],includePromptList:i,includeReadability:a},D=t(p,x,M.products,M.citations,u,"ko",M.productsCnty,M.citationsCnty,g,w,m,I,$,_),U=t({...p,title:p.title||"GEO KPI Dashboard"},x,P.products,P.citations,u,"en",P.productsCnty,P.citationsCnty,g,w,m,I,$,_),B=`${p.period||""} ${p.title||"KPI Dashboard"}`.trim(),E=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:B,htmlKo:D,htmlEn:U})})).json();if(!E.ok)throw new Error(E.error||"게시 실패");return E}async function xo(t,e){try{const o=await fetch(he(t).syncData,{method:"POST",headers:Ne,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Qn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},We={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},vo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Be(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||We[n.kr]||n.kr,compName:n.compNameEn||vo[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||Qn[n.country]||n.country,product:n.productEn||We[n.product]||n.product,compName:n.compNameEn||vo[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||We[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function tr(t,{from:e="ko",to:o="en"}={}){const a=[];for(let n=0;n<t.length;n+=20){const c=t.slice(n,n+20),s=await Promise.all(c.map(async p=>{if(!p||!p.trim())return p;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,f=await fetch(x);if(!f.ok)throw new Error(`번역 실패 (${f.status})`);return(await f.json())[0].map(h=>h[0]).join("")}));a.push(...s)}return a}const Le=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],er=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function or(t){const e=er.indexOf(t);return e>=0?e:999}function $e(t){return or(t)}function Yo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function nr(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Yo(o)]=o)}),e}function wo(t,e){var d,h,u,C;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(u=(h=t==null?void 0:t._dashboard)==null?void 0:h.categoryStats)!=null&&u.length?[...t._dashboard.categoryStats].sort((b,g)=>$e(b.category)-$e(g.category)):null;const o=t.quantitativeGoals.rows,i=nr((C=t.quantitativeResults)==null?void 0:C.rows),n=new Date().getMonth()+1-1,c=n>=3&&n<=12?`${n}월`:"3월";let s=e||t._month||c,p=Le.indexOf(s);p<0&&(s="3월",p=0);const x=[...new Set(o.map(b=>b.taskCategory).filter(Boolean))],f=p>0?Le[p-1]:null;return x.map(b=>{const g=o.filter(B=>B.taskCategory===b);let w=0,m=0,I=0,M=0,P=0,_=0;g.forEach(B=>{var N,J,nt,q,v;const K=Yo(B),E=i[K]||{},S=typeof((N=B.monthly)==null?void 0:N[s])=="number"?B.monthly[s]:0,G=typeof((J=E.monthly)==null?void 0:J[s])=="number"?E.monthly[s]:0;if(m+=S,w+=G,f){const H=typeof((nt=B.monthly)==null?void 0:nt[f])=="number"?B.monthly[f]:0,F=typeof((q=E.monthly)==null?void 0:q[f])=="number"?E.monthly[f]:0;_+=H,P+=F}for(let H=0;H<=p;H++){const F=Le[H];typeof((v=E.monthly)==null?void 0:v[F])=="number"&&(I+=E.monthly[F])}Le.forEach(H=>{var F;typeof((F=B.monthly)==null?void 0:F[H])=="number"&&(M+=B.monthly[H])})});const $=m>0?Math.round(w/m*1e3)/10:0,D=_>0?Math.round(P/_*1e3)/10:0,U=M>0?Math.round(I/M*1e3)/10:0;return{category:b,taskCount:g.length,targetMonth:s,monthRate:$,prevMonthRate:D,prevMonth:f,progressRate:U,monthActual:w,monthGoal:m,cumActual:I,annualGoal:M}}).sort((b,g)=>$e(b.category)-$e(g.category))}function rr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}function ir(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const i=parseInt(e[1])-1;return i<3?"3월":`${i}월`}async function Xo(){const t=await Je(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function Xe(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Wt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function ar(t,e){return Array.isArray(t)?t.length===0?(Xe(e,"invalid input: empty rows",{len:0}),!1):!0:(Xe(e,"invalid input: not an array",{type:typeof t}),!1)}function _e(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>i.some(n=>a instanceof RegExp?a.test(n):n===String(a).toLowerCase()))})}function sr(t,e="sync"){var a,n,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((p,x)=>p===`W${x+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const Rt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Co=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],ko=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function lr(t,e,o,i,a={}){const n=await Xo(),c=n.utils.book_new(),s=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(c,s,"meta");const p=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(c,p,"total");const x=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(b=>[b.id,b.bu,b.kr,b.score,b.prev,b.vsComp,b.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(c,x,"products");const f=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(b=>[b.id,b.kr,...b.weekly])]);f["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(c,f,"weekly");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(b=>[b.rank,b.source,b.category,b.score,b.delta,b.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(c,d,"citations");const h=(a==null?void 0:a.lg)||{},u=(a==null?void 0:a.samsung)||{},C=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Co.map(b=>`LG_${b}`),...ko.map(b=>`Samsung_${b}`)],[...Co.map(b=>h[b]??0),...ko.map(b=>u[b]??0)]]);C["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(c,C,"dotcom"),n.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function te(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function Ie(t){return t==null||String(t).trim()===""?null:te(t)}function Nt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function ae(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const cr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function dr(t){const e=ae(t);return cr[e]||e}function ge(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const n=e.match(/(\d{4})/);if(n)a=parseInt(n[1]);else{const s=e.match(/(\d{2})년/);if(s)a=2e3+parseInt(s[1]);else{const p=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);p&&(a=2e3+parseInt(p[1]))}}const c=e.match(/(\d{1,2})월/);if(c)i=parseInt(c[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)i=o[s[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(i=parseInt(p[1]))}}return a?a*12+i:i}function pr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const c=String(n[0]).trim(),s=n[1]??"";if(o.includes(c))e[c]=parseInt(s)||(c==="titleFontSize"?24:10);else if(i.includes(c)){const p=String(s).trim().toLowerCase();e[c]=p==="y"||p==="yes"||p==="true"||p==="1"}else e[c]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(c=>c.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},c=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);c&&(e.period=`${n[c[2]]||c[2]} ${c[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const c=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${c[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function ur(t){var q;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((v,H)=>console.log(`  row${H}: [${(v||[]).slice(0,8).map(F=>JSON.stringify(String(F||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1,n=-1;if(t.forEach((v,H)=>{if(!v[0]||String(v[0]).startsWith("[")||String(v[0]).startsWith("※")||v[0]==="key")return;const F=String(v[0]).trim();(o.includes(F)||e.includes(F))&&(a||(n=H),a=!0,e.includes(F)?i[F]=parseInt(v[1])||0:i[F]=te(v[1]))}),a&&Object.keys(i).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${n}: r[0]='${(q=t[n])==null?void 0:q[0]}' / kvObj keys:`,Object.keys(i)),{total:i};console.log("[parseVisSummary] Table path 진입");let c=t.find(v=>v.some(H=>String(H||"").trim().toUpperCase()==="LG"));c||(c=t.find(v=>v.some(H=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(H||"").trim()))));const s=c?c.findIndex(v=>String(v||"").trim().toUpperCase()==="LG"):-1,p=c?c.findIndex(v=>{const H=String(v||"").trim().toUpperCase();return H==="SAMSUNG"||H==="SAMSUMG"}):-1,x=c?c.findIndex(v=>/date/i.test(String(v||"").trim())):0,f=c?c.findIndex(v=>/countries|country/i.test(String(v||"").trim())):2,d=c?c.findIndex(v=>/divisions?/i.test(String(v||"").trim())):3,h=c?c.findIndex(v=>/^(llm\s*model|llm|model)$/i.test(String(v||"").trim())):-1,u=Math.max(x,f,d,h),C=s>=0?s:u>=0?u+1:4,b=p>=0?p:C+1;console.log(`[parseVisSummary] columns: date=${x} cnty=${f} div=${d} llm=${h} lg=${C}(raw=${s}) ss=${b}(raw=${p})`);const g=[];t.filter(v=>{const H=String(v[x>=0?x:0]||"").trim();return H&&!H.startsWith("[")&&!H.startsWith("※")&&!/^date$/i.test(H)&&!/^key$/i.test(H)}).forEach(v=>{const H=String(v[x>=0?x:0]||"").trim(),F=ae(v[f>=0?f:2]),Y=String(v[d>=0?d:3]||"").trim().toUpperCase(),k=(h>=0?String(v[h]||"").trim():"")||"Total",T=te(v[C]),A=te(v[b]);H&&T>0&&g.push({date:H,country:F,division:Y,llmModel:k,lg:T,comp:A})});const m=g.filter(v=>(v.country==="TOTAL"||v.country==="TTL")&&(v.division==="TOTAL"||v.division==="TTL"||v.division==="")&&(v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"));m.sort((v,H)=>ge(v.date)-ge(H.date));const I=m[m.length-1],M=m.length>=2?m[m.length-2]:null;if(!I){const v=t.find(V=>V.some(k=>String(k||"").trim().toUpperCase()==="TOTAL"));if(!v)return Wt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(V=>V==null?void 0:V.slice(0,6))});const H=te(v[C]),F=te(v[b]),Y={total:{score:H,prev:H,vsComp:F,rank:H>=F?1:2,totalBrands:12}};return g.length&&(Y.monthlyVis=g),Y}const P=I.lg,_=I.comp,$=M?M.lg:P,D=I.date,U=M?M.date:null;function B(v){const H={};return g.filter(F=>F.date===v&&(F.country==="TOTAL"||F.country==="TTL")&&F.division&&F.division!=="TOTAL"&&F.division!=="TTL"&&F.division!==""&&(F.llmModel==="Total"||F.llmModel==="TOTAL"||F.llmModel==="All")).forEach(F=>{H[F.division]={lg:F.lg,comp:F.comp}}),H}const K=B(D),E=U?B(U):{};function S(v){const H={};return g.filter(F=>F.date===v&&F.country&&F.country!=="TOTAL"&&F.country!=="TTL"&&(F.division==="TOTAL"||F.division==="TTL"||F.division==="")&&(F.llmModel==="Total"||F.llmModel==="TOTAL"||F.llmModel==="All")).forEach(F=>{H[F.country]={lg:F.lg,comp:F.comp}}),H}const G=S(D),N=U?S(U):{},J={total:{score:P,prev:$,vsComp:_,rank:P>=_?1:2,totalBrands:12},...Object.keys(K).length?{buTotals:K}:{},...Object.keys(E).length?{buTotalsPrev:E}:{},...Object.keys(G).length?{countryTotals:G}:{},...Object.keys(N).length?{countryTotalsPrev:N}:{}};D&&(J.derivedPeriod=D),g.length&&(J.monthlyVis=g);const nt={};return g.forEach(v=>{nt[v.date]=(nt[v.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${g.length}행 / unique dates:`,nt,`/ TOTAL+TOTAL+Total 행: ${m.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(J)),J}function hr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,n)=>console.log(`  row${n}: [${a.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,n)=>{if(n===0)return;const c=String((a==null?void 0:a[1])||"").trim(),s=String((a==null?void 0:a[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(s==="TTL"||s==="TOTAL")&&o.push({date:c,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const i=t.findIndex(a=>{const n=String(a[0]||"").trim().toLowerCase();return n==="div"||n==="division"||n==="divisions"});if(i<0){const a=t.findIndex(n=>n.some((c,s)=>s>=1&&String(c||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(n=>JSON.stringify(String(n||"").trim())).join(", ")}]`),So(t,a))}return console.log(`[parseProductCnty] header at row${i}: [${t[i].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),So(t,i)}function So(t,e){const o=t[e],i=o.findIndex((d,h)=>h>=3&&String(d||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(d=>/^(llm\s*model|llm|model)$/i.test(String(d||"").trim())),n=[];for(let d=i+1;d<o.length;d++){const h=String(o[d]||"").trim();h&&h.toUpperCase()!=="LG"&&n.push({name:h,col:d})}const c=t.slice(e+1).filter(d=>{const h=String(d[0]||"").trim();return h&&!h.startsWith("[")&&!h.startsWith("※")}),s={},p={};c.forEach(d=>{const h=String(d[0]||"").trim(),u=String(d[1]||"").trim(),C=String(d[2]||"").trim(),b=ae(d[2])||C,g=String(d[3]||"").trim(),m=(a>=0?String(d[a]||"").trim():"")||"Total",I=te(d[i]),M=n.map(D=>({name:D.name,score:te(d[D.col])})).filter(D=>D.score>0),P=[...M].sort((D,U)=>U.score-D.score)[0]||{name:"",score:0},_=+(I-P.score).toFixed(2),$={LG:I};if(M.forEach(D=>{$[D.name]=D.score}),b==="TTL"||b==="TOTAL"){const D=Ce[g]||g.toLowerCase(),U=Fn[g]||g;s[D]||(s[D]=[]),s[D].push({id:D,bu:h,kr:U,category:g,date:u,llmModel:m,score:I,vsComp:P.score,compName:P.name,allScores:$})}else{const D=`${g}|${b}`;p[D]||(p[D]=[]),p[D].push({product:g,country:b,date:u,llmModel:m,score:I,compName:P.name,compScore:P.score,gap:_,allScores:$})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(s).join(", ")||"없음"} / 국가별: ${Object.keys(p).length}건`);const x=[];for(const[d,h]of Object.entries(s)){const u=h.filter(m=>m.llmModel==="Total"||m.llmModel==="TOTAL"||m.llmModel==="All"),C=u.length?u:h;C.sort((m,I)=>ge(m.date)-ge(I.date));const b=C[C.length-1],g=C.length>=2?C[C.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${C.map(m=>m.date).join(",")}] score=${b.score} prev=${g} vsComp=${b.vsComp}`);const w=C.map(m=>{const I=h.filter(P=>P.date===m.date),M={};return I.forEach(P=>{M[P.llmModel]={score:P.score,comp:P.vsComp,allScores:P.allScores}}),{date:m.date,score:m.score,comp:m.vsComp,allScores:m.allScores,byLlm:M}});x.push({...b,prev:g,monthlyScores:w})}const f=[];for(const d of Object.values(p)){const h=d.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),u=h.length?h:d;u.sort((w,m)=>ge(w.date)-ge(m.date));const C=u[u.length-1],b=u.length>=2?u[u.length-2].score:null,g=u.map(w=>{const m=d.filter(M=>M.date===w.date),I={};return m.forEach(M=>{I[M.llmModel]={score:M.score,compScore:M.compScore,compName:M.compName,allScores:M.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:I}});f.push({...C,prev:b,monthlyScores:g})}return{...x.length?{productsPartial:x}:{},...f.length?{productsCnty:f}:{}}}function Zo(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const n=[];for(const c of t[a]||[]){const s=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Ve={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Fo(t,e){var b;const o=e?Ve[e]||{}:{...Ve.MS,...Ve.ES};if(!Object.keys(o).length)return Wt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(g=>g.some(w=>String(w||"").trim()in o));if(i<0)return Wt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[i],n=t.findIndex((g,w)=>w>i&&g.some(m=>String(m||"").trim()==="TTL")),c=n>0?n+1:Math.min(i+20,t.length);let s=-1,p=-1;for(let g=i+1;g<c;g++){const w=t[g];if(!w.some(M=>String(M||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=g),w.some(M=>{const P=String(M||"").trim().toLowerCase().replace(/[\s_-]/g,"");return P==="nonbrand"||P==="nb"})){s=g;break}}const x=s>=0?s:p>=0?p:n;if(x<0)return Wt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const f=t[x],d=s>=0?"LG-NB":p>=0?"LG":"TTL",h={},u=Object.keys(o).map(g=>a.findIndex(w=>String(w||"").trim()===g)).filter(g=>g>=0).sort((g,w)=>g-w);for(const[g,w]of Object.entries(o)){const m=a.findIndex(P=>String(P||"").trim()===g);if(m<0)continue;const I=u.find(P=>P>m)||m+20,M=[];for(let P=m+1;P<I&&P<f.length;P++){const _=te(f[P]);_>0&&M.push(_)}M.length&&(h[w]=M)}if(!Object.keys(h).length)return Wt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:x,dataRowLabel:d});const C=Zo(t,i,c)||((b=Object.values(h)[0])==null?void 0:b.map((g,w)=>`W${w+1}`))||[];return{weeklyMap:h,weeklyLabels:C}}function fr(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[n,c]of Object.entries(a))a[n]=c.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function mr(t){const{data:e,rows:o,headerIdx:i,brandIdx:a,catIdx:n,countryIdx:c,isNonBrand:s,isTotal:p,weeklyMap:x,weeklyAll:f}=t;let d=t.wCols,h=t.weeklyLabels;if(!d.length){const u=e.find(C=>String(C[a]||"").trim().toUpperCase()==="LG"&&s(C));if(u){const C=[];for(let b=a+1;b<u.length;b++)if(String(u[b]||"").trim())C.push(b);else if(C.length)break;d=C,h=Zo(o,0,i+1)||d.map((b,g)=>`W${g+1}`)}}return e.forEach(u=>{if(!s(u))return;const C=String(u[a]||"").trim();if(!C)return;const b=String(u[n>=0?n:0]||"").trim();if(!b)return;const g=Ce[b]||b.toLowerCase(),w=c>=0?ae(u[c]):"TOTAL",m=w==="TOTAL"||w==="TTL"||!w?"Total":w;f[g]||(f[g]={}),f[g][m]||(f[g][m]={}),f[g][m][C]=d.map(I=>Ie(u[I]))}),e.forEach(u=>{if(String(u[a]||"").trim().toUpperCase()!=="LG"||!s(u)||!p(u))return;const b=String(u[n>=0?n:0]||"").trim();b&&(x[Ce[b]||b.toLowerCase()]=d.map(g=>Ie(u[g])))}),{wCols:d,weeklyLabels:h}}function gr(t){const{data:e,header:o,lgIdx:i,catIdx:a,isTotal:n,weeklyMap:c}=t,s=o.findIndex(f=>{const d=String(f||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),p={},x=[];return e.forEach(f=>{if(!n(f))return;const d=String(f[a>=0?a:3]||"").trim();if(d){if(s>=0){const h=String(f[s]||"").trim();h&&!x.includes(h)&&x.push(h)}p[d]=p[d]||[],p[d].push(Ie(f[i]))}}),Object.entries(p).forEach(([f,d])=>{c[Ce[f]||f.toLowerCase()]=d}),x.length?x:null}function yr(t){const{data:e,wCols:o,catIdx:i,isTotal:a,weeklyMap:n}=t;e.forEach(c=>{if(!a(c))return;const s=String(c[i>=0?i:0]||"").trim();s&&(n[Ce[s]||s.toLowerCase()]=o.map(p=>Ie(c[p])))})}function Ke(t,e){const o={};let i=[],a=-1;for(let $=0;$<Math.min(t.length,10);$++){const D=t[$];if(!D)continue;let U=0;for(let B=0;B<D.length;B++)/^w\d+$/i.test(String(D[B]||"").trim())&&U++;if(U>=2){a=$;break}}let n=t.findIndex($=>{const D=$.slice(0,5).map(U=>String(U||"").trim().toLowerCase());return D.includes("category")||D.includes("product")});if(n<0&&a>=0&&(n=a),n<0&&(n=t.findIndex($=>{let D=!1,U=0;for(let B=0;B<Math.min($.length,10);B++){const K=String($[B]||"").trim();K.toUpperCase()==="LG"?(D=!0,U++):K&&isNaN(parseFloat(K))&&U++}return D&&U>=3})),n<0)return Fo(t,e);const c=t[n],s=n+1;let p=null;if(t[s]){const $=t[s].slice(4,8).map(D=>String(D||"").trim()).filter(Boolean);$.length&&$.every(D=>/^\d{1,2}\/\d{1,2}/.test(D)||/~/.test(D)||/^\(/.test(D))&&(p=s)}const x=p!=null?p+1:s,f=t.slice(x).filter($=>$[0]!=null&&String($[0]).trim()),d=c.findIndex($=>{const D=String($||"").trim().toLowerCase();return D==="category"||D==="product"}),h=c.findIndex($=>{const D=String($||"").trim().toLowerCase();return D==="country"||D==="county"}),u=c.findIndex($=>String($||"").trim().toLowerCase()==="brand"),C=c.findIndex($=>String($||"").trim().toUpperCase()==="LG");let b=[];const g=a>=0?t[a]:c;for(let $=0;$<g.length;$++)/^w\d+$/i.test(String(g[$]||"").trim())&&b.push($);if(!b.length)for(let $=0;$<c.length;$++){const D=String(c[$]||"").split(/\n/)[0].trim();/^w\d+/i.test(D)&&b.push($)}i=b.map($=>String(g[$]||"").trim().toUpperCase());let w=b.map(($,D)=>{const U=i[D]||`W${$}`;let B="";const K=p!=null?t[p]:a!==n&&a>=0?t[a+1]:null;if(K){const E=String(K[$]||"").trim();E&&/\d/.test(E)&&(B=E.startsWith("(")?E:`(${E})`)}return B?`${U}${B}`:U});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${n} dateRangeRow:${p} wCols:${b.length} labels:`,i.slice(0,5),"full:",w.slice(-2));function m($){if(h<0)return!0;const D=String($[h]||"").replace(/[()]/g,"").trim().toUpperCase();return D==="TOTAL"||D==="TTL"||D===""}const I=c.findIndex($=>{const D=String($||"").trim().toLowerCase().replace(/[\s_-]/g,"");return D==="b/nb"||D==="bnb"||D==="brand/nonbrand"});function M($){if(I<0)return!0;const D=String($[I]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return D==="nonbrand"||D==="nb"}const P={},_={data:f,rows:t,header:c,headerIdx:n,brandIdx:u,lgIdx:C,catIdx:d,countryIdx:h,wCols:b,weeklyLabels:i,weeklyMap:o,weeklyAll:P,isNonBrand:M,isTotal:m};if(u>=0){const $=mr(_);b=$.wCols,i=$.weeklyLabels}else if(C>=0){const $=gr(_);$&&(i=$)}else b.length&&yr(_);if(i.length>0){let $=i.length;for(const K of Object.values(P))for(const E of Object.values(K))for(const S of Object.values(E)){const G=S.findIndex(N=>N!=null);G>=0&&G<$&&($=G)}for(const K of Object.values(o)){const E=K.findIndex(S=>S!=null);E>=0&&E<$&&($=E)}const D=12,B=i.length-$>D?i.length-D:$;B>0&&B<i.length&&(i=i.slice(B),w=w.slice(B),fr(P,o,B))}if(Object.keys(o).length){const $={weeklyMap:o};return i.length&&($.weeklyLabels=i),w.length&&($.weeklyLabelsFull=w),Object.keys(P).length&&($.weeklyAll=P),$}return Fo(t,e)}function br(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((F,Y)=>console.log(`  row${Y}: [${(F||[]).slice(0,10).map(V=>JSON.stringify(String(V||"").trim())).join(", ")}]`));const e=t.findIndex(F=>F.some(k=>{const T=String(k||"").trim().toLowerCase();return T.includes("page type")||T==="country"})?!F.some(k=>/^\[.*\]$/.test(String(k||"").trim())):!1);if(e<0)return Wt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(F=>F==null?void 0:F.slice(0,6))});const o=t[e],i=o.findIndex(F=>{const Y=String(F||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(Y)}),a=o.findIndex(F=>/^country$|countries/i.test(String(F||"").trim())),n=o.findIndex(F=>{const Y=String(F||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(Y)||Y==="type"}),c=a>=0?a:0,s=n>=0?n:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(F=>JSON.stringify(String(F||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${i} cntyCol=${a} ptCol=${n} (fallbackCnty=${c} fallbackPt=${s})`),i<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(F=>Array.from(String(F||"")).map(Y=>Y.codePointAt(0).toString(16)).join(" ")));const p=[],x=new Set,f=Math.max(s+1,2);for(let F=f;F<o.length;F++){const Y=String(o[F]||"").trim();if(/\bLG\b/i.test(Y)){const V=F+1;if(V<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[V]||""))){const k=Y.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),T=k?k[1].toLowerCase():`col${F}`;x.has(T)||(p.push({lg:F,ss:V}),x.add(T))}}}p.length||p.push({lg:f,ss:f+1}),console.log("[parseCitPageType] monthPairs:",p.map(F=>`LG=${F.lg}/SS=${F.ss}`).join(", "));const d=new Map;let h="",u=0;t.slice(e+1).forEach(F=>{if(!F||!F.some(V=>String(V||"").trim())){h="";return}let Y=i>=0?String(F[i]||"").trim():"";Y?h=Y:i>=0&&h&&(Y=h,u++),d.set(F,Y)}),u&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${u}건 상속`);const C=t.slice(e+1).filter(F=>F&&F[c]!=null&&String(F[c]).trim());console.log(`[parseCitPageType] data ${C.length}행 (필터 통과)`);let b=p[0];for(let F=p.length-1;F>=0;F--)if(C.some(Y=>Nt(Y[p[F].lg])>0)){b=p[F];break}if(!C.some(F=>Nt(F[b.lg])>0)){for(let F=Math.min(b.lg,o.length)-1;F>=2;F--)if(C.some(Y=>Nt(Y[F])>0)){b={lg:F-1,ss:F};break}}const g={},w={},m={},I={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},M=new Set,P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_=p.map(F=>{const Y=String(o[F.lg]||"").trim(),V=Y.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return V?V[1].charAt(0).toUpperCase()+V[1].slice(1).toLowerCase():Y.replace(/\s*LG\s*/i,"").trim()}),$={},D=F=>String(F||"").trim().replace(/^\((.*)\)$/,"$1").trim(),U=F=>{const Y=D(F);return!Y||/^(total|all|ttl)$/i.test(Y)},B=F=>{const Y=ae(F[c]),V=String(F[s]||"").replace(/[()]/g,"").trim();let k=/page total|^ttl$/i.test(V)?"TTL":V;return k.toLowerCase()==="microsite"&&(k="Microsites"),{cnty:I[Y]||Y.toUpperCase(),key:k}},K=new Set;C.forEach(F=>{const Y=d.get(F)||"";if(U(Y))return;const{cnty:V,key:k}=B(F);p.forEach((T,A)=>{(Nt(F[T.lg])>0||Nt(F[T.ss])>0)&&K.add(`${V}|${k}|${A}`)})});const E=(F,Y,V,k)=>K.has(`${Y}|${V}|${k}`)?!F:F,S=p.indexOf(b);K.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${K.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const G={};function N(F){return G[F]||(G[F]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),G[F]}C.forEach(F=>{const Y=d.get(F)||"",V=U(Y),k=V?"Total":Y,{cnty:T,key:A}=B(F);M.add(T);const Q=Nt(F[b.lg]),X=Nt(F[b.ss]);E(V,T,A,S)&&(T==="TTL"?(g[A]=(g[A]||0)+Q,w[A]=(w[A]||0)+X):(m[T]||(m[T]={lg:{},samsung:{}}),m[T].lg[A]=(m[T].lg[A]||0)+Q,m[T].samsung[A]=(m[T].samsung[A]||0)+X)),T==="TTL"&&p.forEach((yt,vt)=>{var Z,et;if(!E(V,T,A,vt))return;const kt=Nt(F[yt.lg]),j=Nt(F[yt.ss]);if(kt>0||j>0){$[A]||($[A]={});const dt=_[vt]||`M${vt+1}`;$[A][dt]={lg:(((Z=$[A][dt])==null?void 0:Z.lg)||0)+kt,samsung:(((et=$[A][dt])==null?void 0:et.samsung)||0)+j}}});const lt=N(k);T==="TTL"?(lt.lg[A]=(lt.lg[A]||0)+Q,lt.samsung[A]=(lt.samsung[A]||0)+X,lt.dotcomTrend[A]||(lt.dotcomTrend[A]={}),p.forEach((yt,vt)=>{var Z,et;const kt=Nt(F[yt.lg]),j=Nt(F[yt.ss]);if(kt>0||j>0){const dt=_[vt]||`M${vt+1}`;lt.dotcomTrend[A][dt]={lg:(((Z=lt.dotcomTrend[A][dt])==null?void 0:Z.lg)||0)+kt,samsung:(((et=lt.dotcomTrend[A][dt])==null?void 0:et.samsung)||0)+j}}})):(lt.dotcomByCnty[T]||(lt.dotcomByCnty[T]={lg:{},samsung:{}}),lt.dotcomByCnty[T].lg[A]=(lt.dotcomByCnty[T].lg[A]||0)+Q,lt.dotcomByCnty[T].samsung[A]=(lt.dotcomByCnty[T].samsung[A]||0)+X)});const J=new Set;Object.values($).forEach(F=>Object.keys(F).forEach(Y=>J.add(Y)));const nt=P.filter(F=>J.has(F)),q={},v={};p.forEach((F,Y)=>{const V=_[Y];if(!V)return;const k={},T={};C.forEach(A=>{const Q=d.get(A)||"",X=U(Q),{cnty:lt,key:yt}=B(A);if(!E(X,lt,yt,Y))return;const vt=Nt(A[F.lg]),kt=Nt(A[F.ss]);vt<=0&&kt<=0||(lt==="TTL"?(vt>0&&(k[yt]=(k[yt]||0)+vt),kt>0&&(T[yt]=(T[yt]||0)+kt)):(v[V]||(v[V]={}),v[V][lt]||(v[V][lt]={lg:{},samsung:{}}),vt>0&&(v[V][lt].lg[yt]=(v[V][lt].lg[yt]||0)+vt),kt>0&&(v[V][lt].samsung[yt]=(v[V][lt].samsung[yt]||0)+kt)))}),Object.keys(k).length&&(q[V]={lg:k,samsung:T})}),Object.keys(v).forEach(F=>{Object.keys(v[F]).forEach(Y=>{const V=v[F][Y];Object.values(V.lg).some(T=>T>0)||Object.values(V.samsung).some(T=>T>0)||delete v[F][Y]}),Object.keys(v[F]).length||delete v[F]});const H={};return(g.TTL||Object.keys(g).length)&&(H.dotcom={lg:g,samsung:w,byMonth:q,byCntyByMonth:v}),Object.keys(m).length&&(H.dotcomByCnty=m),Object.keys($).length&&nt.length&&(H.dotcomTrend=$,H.dotcomTrendMonths=nt),(Object.keys(G).length>1||Object.keys(G).length===1&&!(G.Total||G.TOTAL||G.All))&&(H.dotcomByLlm=G),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(g).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(m).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys($).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(G).join(",")||"(EMPTY)"}`),H}function xr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((k,T)=>console.log(`  row${T}: [${(k||[]).slice(0,12).map(A=>JSON.stringify(String(A||"").trim())).join(", ")}]`));const e=t.findIndex(k=>k.some(Q=>{const X=String(Q||"").trim().toLowerCase();return X==="channel"||X==="country"})?!k.some(Q=>/^\[.*\]$/.test(String(Q||"").trim())):!1);e<0&&Wt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(k=>k==null?void 0:k.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,n=-1,c=-1,s=-1;for(let k=0;k<o.length;k++){const T=String(o[k]||"").trim().toLowerCase();T==="country"&&a<0&&(a=k),T==="channel"&&n<0&&(n=k),T==="prd"&&c<0&&(c=k),/^(llm\s*model|llm|model)$/i.test(T)&&s<0&&(s=k)}const p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(k){const T=String(k||"").trim().toLowerCase();if(!T)return null;const A=T.match(/^(\d{1,2})월/);if(A){const X=parseInt(A[1]);if(X>=1&&X<=12)return p[X-1]}const Q=T.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Q?Q[1].charAt(0).toUpperCase()+Q[1].slice(1).toLowerCase():null}const f=[],d=new Set;for(let k=0;k<o.length;k++){const T=x(o[k]);T&&!d.has(k)&&(f.push({col:k,label:T}),d.add(k))}if(e>0){const k=t[e-1];if(k)for(let T=0;T<k.length;T++){const A=x(k[T]);A&&!d.has(T)&&(f.push({col:T,label:A}),d.add(T))}}let h=2;if(f.length>0)h=Math.min(...f.map(k=>k.col));else if(a>=0&&n>=0)h=Math.max(a,n,c)+1;else{const k=t[i];k&&!String(k[0]||"").trim()?(a=1,n=2,h=3):(a=0,n=1,h=2)}if(a<0||n<0){const k=t[i],T=k&&!String(k[0]||"").trim()?1:0;a<0&&(a=T),n<0&&(n=T+1)}if(f.length>0){f.sort((Q,X)=>Q.col-X.col);const k=f[0],T=p.indexOf(k.label),A=new Set([a,n,c].filter(Q=>Q>=0));if(T>0&&k.col>h){let Q=T-1;for(let X=k.col-1;X>=h&&Q>=0;X--){if(d.has(X)||A.has(X))continue;const lt=String(o[X]||"").trim(),yt=e>0?String((t[e-1]||[])[X]||"").trim():"";lt||yt||(f.push({col:X,label:p[Q]}),d.add(X),Q--)}}}f.sort((k,T)=>p.indexOf(k.label)-p.indexOf(T.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(k=>JSON.stringify(String(k||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${n} prdCol=${c} llmCol=${s} dataStartCol=${h}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",f.map(k=>`${k.label}@col${k.col}`).join(", "));const u=t.slice(i).filter(k=>k.some(T=>T!=null&&String(T).trim())),C=[],b={},g={},w={},m={},I=new Set,M={},P={},_={},$=k=>String(k||"").replace(/[()]/g,"").trim();u.forEach(k=>{const T=ae(k[a]),A=$(k[n]);if(!T||!A||A.toLowerCase()==="total")return;const Q=T==="TTL"||T==="TOTAL",X=s>=0?$(k[s]):"",lt=!X||/^(total|all|ttl)$/i.test(X),yt=c>=0?$(k[c]):"",vt=!yt||/^(ttl|total)$/i.test(yt.toUpperCase());f.forEach(({col:kt,label:j})=>{Nt(k[kt])<=0||(Q||(M[A]||(M[A]={}),M[A][j]=!0),lt||(P[A]||(P[A]={}),P[A][j]=!0),vt||(_[A]||(_[A]={}),_[A][j]=!0))})});const D=Object.keys(M).map(k=>`${k}:[${Object.keys(M[k]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${D||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(P).map(k=>`${k}:[${Object.keys(P[k]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(_).map(k=>`${k}:[${Object.keys(_[k]).join(",")}]`).join(" ")||"(없음)");const U={},B={},K={},E={};u.forEach(k=>{const T=ae(k[a]),A=$(k[n]),Q=c>=0?$(k[c]):"",X=s>=0?$(k[s]):"";if(!T||!A||A.toLowerCase()==="total")return;const lt=T==="TTL"||T==="TOTAL",yt=!X||/^(total|all|ttl)$/i.test(X),vt=Q.toUpperCase(),kt=!Q||vt==="TTL"||vt==="TOTAL";if(lt||I.add(T),!lt&&(K[T]||(K[T]={}),K[T][A]||(K[T][A]={ttl:null,prds:[]}),!kt)){const Z={};f.forEach(({col:et,label:dt})=>{var wt;const gt=Nt(k[et]);gt<=0||yt&&((wt=P[A])!=null&&wt[dt])||(Z[dt]=gt)}),Object.keys(Z).length&&K[T][A].prds.push({prd:Q,monthScores:Z})}U[A]||(U[A]={}),B[A]||(B[A]={});const j=lt?"TTL":T;B[A][j]||(B[A][j]={}),f.forEach(({col:Z,label:et})=>{var St,Ct,W,z;const dt=Nt(k[Z]);if(dt<=0)return;const gt=lt&&((St=M[A])==null?void 0:St[et]),wt=yt&&((Ct=P[A])==null?void 0:Ct[et]),Lt=kt&&((W=_[A])==null?void 0:W[et]),bt=yt?"Total":X;!gt&&!(kt&&((z=_[A])!=null&&z[et]))&&(E[bt]||(E[bt]={}),E[bt][A]||(E[bt][A]={}),E[bt][A][et]=(E[bt][A][et]||0)+dt),!(gt||wt||Lt)&&(U[A][et]=(U[A][et]||0)+dt,B[A][j][et]=(B[A][j][et]||0)+dt)})});const S=k=>{for(let T=f.length-1;T>=0;T--){const A=k[f[T].label];if(A>0)return A}return 0},G={};Object.entries(B).forEach(([k,T])=>{Object.entries(T).forEach(([A,Q])=>{A!=="TTL"&&Object.keys(Q).length!==0&&(G[A]||(G[A]={}),G[A][k]=Q)})}),Object.entries(U).forEach(([k,T])=>{const A=S(T);A>0&&(C.push({source:k,category:"",score:A,delta:0,ratio:0,monthScores:T}),b[k]=T)}),Object.entries(B).forEach(([k,T])=>{Object.entries(T).forEach(([A,Q])=>{if(A==="TTL")return;const X=S(Q);X>0&&(g[A]||(g[A]=[]),g[A].push({source:k,category:"",score:X,delta:0,ratio:0,monthScores:Q,prd:""}))})}),Object.entries(K).forEach(([k,T])=>{Object.entries(T).forEach(([A,Q])=>{Q.prds.forEach(({prd:X,monthScores:lt})=>{const yt=S(lt);if(yt<=0)return;g[k]||(g[k]=[]),g[k].push({source:A,category:"",score:yt,delta:0,ratio:0,monthScores:lt,prd:X}),m[X]||(m[X]={}),m[X][A]||(m[X][A]={source:A,category:"",score:0,delta:0,ratio:0,monthScores:{}});const vt=m[X][A];vt.score+=yt,Object.entries(lt).forEach(([kt,j])=>{vt.monthScores[kt]=(vt.monthScores[kt]||0)+j})})})});const N={};new Set([...Object.keys(w),...Object.keys(m)]).forEach(k=>{let T=w[k];(!T||!T.length)&&(T=Object.values(m[k]||{})),T&&T.length&&(N[k]=T)});const nt=C.reduce((k,T)=>k+T.score,0);C.sort((k,T)=>T.score-k.score),C.forEach((k,T)=>{k.rank=T+1,k.ratio=nt>0?+(k.score/nt*100).toFixed(1):0});for(const[k,T]of Object.entries(g)){const A=T.reduce((Q,X)=>Q+X.score,0);T.sort((Q,X)=>X.score-Q.score),T.forEach((Q,X)=>{Q.rank=X+1,Q.ratio=A>0?+(Q.score/A*100).toFixed(1):0})}for(const[k,T]of Object.entries(N)){const A=T.reduce((Q,X)=>Q+X.score,0);T.sort((Q,X)=>X.score-Q.score),T.forEach((Q,X)=>{Q.rank=X+1,Q.ratio=A>0?+(Q.score/A*100).toFixed(1):0})}const q=f.map(k=>k.label).filter(k=>Object.values(b).some(T=>T[k]>0)),v={};f.forEach(k=>{let T=0;Object.values(b).forEach(A=>{T+=A[k.label]||0}),v[k.label]=T}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",v,"→ validMonths:",q);const H={};Object.entries(K.TTL||{}).forEach(([k,T])=>{H[k]={ttl:T.ttl,latestScore:S(T.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",H),console.log("[parseCitTouchPoints] citations top 3:",C.slice(0,3).map(k=>({source:k.source,score:k.score,monthScores:k.monthScores})));const F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let Y=null;if(q.length>0){const k={};Object.values(b).forEach(Q=>{Object.entries(Q).forEach(([X,lt])=>{lt>0&&(k[X]=(k[X]||0)+1)})});let T=q[q.length-1];if(q.length>=2){const Q=k[T]||0,X=q[q.length-2],lt=k[X]||0;lt>0&&Q<lt*.5&&(T=X)}const A=F.findIndex(Q=>T.toLowerCase().startsWith(Q.toLowerCase()));A>=0&&(Y=`${F[A]} ${new Date().getFullYear()}`)}const V={};return C.length>0&&(V.citations=C),Object.keys(g).length>0&&(V.citationsByCnty=g),Object.keys(N).length>0&&(V.citationsByPrd=N),Object.keys(b).length>0&&(V.citTouchPointsTrend=b,V.citTrendMonths=q),Object.keys(G).length>0&&(V.citTouchPointsTrendByCnty=G),Object.keys(E).length>0&&(V.citTouchPointsByLlm=E,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(E).join(", "))),Y&&(V.citDerivedPeriod=Y),V}function vr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((E,S)=>console.log(`  row${S}: [${(E||[]).slice(0,14).map(G=>JSON.stringify(String(G||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,n=0,c=-1,s=-1,p=-1,x=-1,f=-1,d=-1,h=4;for(let E=0;E<Math.min(t.length,10);E++){const S=t[E];if(!S)continue;const G=S.some(q=>/^no$/i.test(String(q||"").trim())),N=S.some(q=>/^region$/i.test(String(q||"").trim())),J=S.some(q=>/domain|domian/i.test(String(q||"").trim())),nt=S.some(q=>/^prd$/i.test(String(q||"").trim()));if(G||N||J||nt){a=S,n=E+1;for(let q=0;q<S.length;q++){const v=String(S[q]||"").trim().toLowerCase();v==="prd"&&f<0&&(f=q),v==="no"&&c<0&&(c=q),v==="region"&&s<0&&(s=q),(v==="domain"||v==="domian")&&p<0&&(p=q),v==="type"&&x<0&&(x=q),/^(llm\s*model|llm|model)$/i.test(v)&&d<0&&(d=q)}console.log(`[parseCitDomain] header row${E}: [${(S||[]).slice(0,14).map(q=>JSON.stringify(String(q||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${f} noCol=${c} regionCol=${s} domainCol=${p} typeCol=${x} llmCol=${d}`);break}(String(S[0]||"").trim().startsWith("[")||!String(S[0]||"").trim())&&(n=E+1)}a||Wt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(E=>E==null?void 0:E.slice(0,6))});const u=c>=0||s>=0||f>=0;if(u)s<0&&(s=c>=0?c+1:f>=0?f+2:1),p<0&&(p=s+1),x<0&&(x=p+1),h=Math.max(p,x)+1;else if(p>=0)x=p+1,h=p+2;else{for(let E=n;E<Math.min(t.length,n+5);E++){const S=t[E];if(S){for(let G=0;G<Math.min(S.length,6);G++){const N=String(S[G]||"").trim();if(N.includes(".")&&N.length>3&&!i.test(N)){p=G,x=G+1,h=G+2;break}}if(p>=0)break}}p<0&&(p=0,x=1,h=2)}const C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=E=>{const S=String(E||"").trim().toLowerCase();if(!S)return null;const G=S.match(/^(\d{1,2})월/);if(G){const J=parseInt(G[1]);if(J>=1&&J<=12)return C[J-1]}const N=S.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return N?N[1].charAt(0).toUpperCase()+N[1].slice(1).toLowerCase():null},g=[];if(a)for(let E=h;E<a.length;E++){const S=b(a[E]);S&&g.push({col:E,label:S})}const w=E=>/^(type|domain[_ ]type)$/i.test(String(E||"").trim()),m=E=>/^(domain|domian)$/i.test(String(E||"").trim()),I=E=>/^region$/i.test(String(E||"").trim()),M=[];a&&g.forEach(({col:E,label:S})=>{const G=E-1,N=E-2,J=E-3;J<0||w(a[G])&&m(a[N])&&I(a[J])&&M.push({regionCol:J,domainCol:N,typeCol:G,monthCol:E,label:S})}),console.log(`[parseCitDomain] domainMonthLabels: ${g.map(E=>`${E.label}@col${E.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${M.length}개`,M.map(E=>`${E.label}@col${E.monthCol}(r${E.regionCol}/d${E.domainCol}/t${E.typeCol})`).join(", "));const P=[],_={};let $=null;const D={};let U="TTL";const B=E=>{let S=String(E||"").trim();if(!S)return"";const G=S.match(/^\[([^\]]+)\]/);G&&(S=G[1].trim()),S=S.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const N=S.indexOf("/");return N>=0&&(S=S.slice(0,N)),S};if(M.length>=2){const E=j=>String(j||"").replace(/[()]/g,"").trim(),S={},G=M.map(()=>({region:"",domain:"",type:""}));let N="",J=0,nt=0;for(let j=n;j<t.length;j++){const Z=t[j];if(!Z)continue;let et=f>=0?E(Z[f]):"";et?N=et:et=N;const dt=d>=0?E(Z[d]):"";M.forEach((gt,wt)=>{const Lt=G[wt],bt=B(Z[gt.domainCol]);bt&&bt.includes(".")&&(Lt.domain=bt,Lt.region=String(Z[gt.regionCol]||"").trim().toUpperCase(),Lt.type=String(Z[gt.typeCol]||"").trim());const St=String(Z[gt.monthCol]||"").replace(/,/g,"").trim(),Ct=parseFloat(St);if(isNaN(Ct)||Ct<=0)return;let W=bt,z,O;if(W&&W.includes("."))z=String(Z[gt.regionCol]||"").trim().toUpperCase(),O=String(Z[gt.typeCol]||"").trim();else if(Lt.domain)W=Lt.domain,z=Lt.region,O=Lt.type,J++;else{nt++;return}const it=e[z]||z||"TTL",Ft=`${it}|${W}|${O}|${et}|${dt}`;S[Ft]||(S[Ft]={cnty:it,domain:W,type:O,prd:et,llm:dt,monthScores:{}}),S[Ft].monthScores[gt.label]=(S[Ft].monthScores[gt.label]||0)+Ct})}(J||nt)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${J}건 / domain 없어 drop ${nt}건`);const q=j=>{const Z=E(j);return!Z||/^(total|all|ttl)$/i.test(Z)},v=new Set;Object.values(S).forEach(j=>{if(q(j.llm))return;const Z=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`;Object.entries(j.monthScores).forEach(([et,dt])=>{dt>0&&v.add(`${Z}|${et}`)})});const H={};Object.values(S).forEach(j=>{const Z=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`,et=q(j.llm);H[Z]||(H[Z]={cnty:j.cnty,domain:j.domain,type:j.type,prd:j.prd,monthScores:{}}),Object.entries(j.monthScores).forEach(([dt,gt])=>{gt>0&&v.has(`${Z}|${dt}`)!==et&&(H[Z].monthScores[dt]=(H[Z].monthScores[dt]||0)+gt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(S).length} → ${Object.keys(H).length} rows / breakdown 월 ${v.size}건`);const F=j=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(j||"").trim()),Y=j=>{const Z=String(j||"").trim();return!Z||/^(ttl|total)$/i.test(Z)},V=j=>{for(let Z=g.length-1;Z>=0;Z--){const et=j[g[Z].label];if(et>0)return et}return 0},k=j=>j.find(Z=>Object.keys(Z).length)||{},T=(j,Z)=>{Object.entries(Z).forEach(([et,dt])=>{dt>0&&(j[et]=(j[et]||0)+dt)})},A={};Object.values(S).forEach(j=>{if(q(j.llm))return;const Z=E(j.llm);A[Z]||(A[Z]={}),A[Z][j.domain]||(A[Z][j.domain]=[{},{},{},{}]);const et=(F(j.cnty)?0:2)+(Y(j.prd)?0:1);T(A[Z][j.domain][et],j.monthScores)});const Q={};if(Object.entries(A).forEach(([j,Z])=>{const et={};Object.entries(Z).forEach(([dt,gt])=>{const wt=V(k(gt));wt>0&&(et[dt]=wt)}),Object.keys(et).length&&(Q[j]=et)}),Object.keys(Q).length){const j={};Object.values(H).forEach(et=>{j[et.domain]||(j[et.domain]=[{},{},{},{}]);const dt=(F(et.cnty)?0:2)+(Y(et.prd)?0:1);T(j[et.domain][dt],et.monthScores)});const Z={};Object.entries(j).forEach(([et,dt])=>{const gt=V(k(dt));gt>0&&(Z[et]=gt)}),Object.keys(Z).length&&(Q.Total=Z),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(Q).join(", ")),Object.keys(Q).length>1&&($=Q)}Object.values(H).forEach(j=>{let Z=0;for(let wt=g.length-1;wt>=0;wt--){const Lt=j.monthScores[g[wt].label];if(Lt>0){Z=Lt;break}}if(Z<=0)return;D[j.cnty]=(D[j.cnty]||0)+1,P.push({cnty:j.cnty,rank:D[j.cnty],domain:j.domain,type:j.type,citations:Z,monthScores:j.monthScores,prd:j.prd});const et=`${j.cnty}|${j.domain}`,dt=!j.prd||/^(ttl|total)$/i.test(j.prd);_[et]||(_[et]={cnty:j.cnty,domain:j.domain,type:j.type,months:{},_ttlMonths:{}});const gt=_[et];dt?(gt.type=j.type||gt.type,Object.entries(j.monthScores).forEach(([wt,Lt])=>{Lt>0&&(gt._ttlMonths[wt]?gt.months[wt]+=Lt:(gt.months[wt]=Lt,gt._ttlMonths[wt]=!0))})):Object.entries(j.monthScores).forEach(([wt,Lt])=>{!(Lt>0)||gt._ttlMonths[wt]||(gt.months[wt]=(gt.months[wt]||0)+Lt)})}),Object.values(_).forEach(j=>{delete j._ttlMonths});const X={TTL:{},CNTY:{}};Object.entries(_).forEach(([j,Z])=>{const et=j.startsWith("TTL|")?"TTL":"CNTY";Object.entries(Z.months).forEach(([dt,gt])=>{gt>0&&(X[et][dt]=(X[et][dt]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",X.TTL,"/ CNTY:",X.CNTY);const lt={},yt={};Object.values(S).forEach(j=>{lt[j.cnty]=(lt[j.cnty]||0)+1,yt[j.prd||"(empty)"]=(yt[j.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(S).length} / cnty dist:`,lt,"/ prd dist:",yt);const vt=Object.values(S).filter(j=>j.cnty==="TTL"&&j.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${vt.length}건):`,vt.map(j=>`${j.domain}|prd='${j.prd}'|type='${j.type}'|May=${j.monthScores.May}`).join(" / "));const kt={};P.forEach(j=>{kt[j.cnty]||(kt[j.cnty]=[]),kt[j.cnty].push(j)}),Object.values(kt).forEach(j=>{j.sort((Z,et)=>et.citations-Z.citations),j.forEach((Z,et)=>{Z.rank=et+1})})}else for(let E=n;E<t.length;E++){const S=t[E];if(!S)continue;const G=String(S[p]||"").trim(),N=String(S[x]||"").trim(),J=f>=0?String(S[f]||"").trim():"";if(!u&&(!G||!G.includes("."))){const H=String(S[p]||"").trim().toUpperCase(),F=e[H]||(o.includes(H)?H:null);F&&(!N||N==="")&&(U=F);continue}if(!G||!G.includes("."))continue;let nt="TTL";if(u&&s>=0){const H=String(S[s]||"").trim().toUpperCase();nt=e[H]||H}else u||(nt=U);let q=0;if(g.length>0)for(let H=g.length-1;H>=0;H--){const F=String(S[g[H].col]||"").replace(/,/g,"").trim(),Y=parseFloat(F);if(!isNaN(Y)&&Y>0){q=Y;break}}else for(let H=S.length-1;H>=h;H--){const F=String(S[H]||"").replace(/,/g,"").trim();if(!F)continue;const Y=parseFloat(F);if(!isNaN(Y)&&Y>0){q=Y;break}}if(g.length>0){const H={};if(g.forEach(({col:F,label:Y})=>{const V=String(S[F]||"").replace(/,/g,"").trim(),k=parseFloat(V);!isNaN(k)&&k>0&&(H[Y]=k)}),Object.keys(H).length>0){const F=`${nt}|${G}`;_[F]={cnty:nt,domain:G,type:N,months:H}}}const v={};g.length>0&&g.forEach(({col:H,label:F})=>{const Y=String(S[H]||"").replace(/,/g,"").trim(),V=parseFloat(Y);!isNaN(V)&&V>0&&(v[F]=V)}),q>0&&(D[nt]=(D[nt]||0)+1,P.push({cnty:nt,rank:D[nt],domain:G,type:N,citations:q,monthScores:v,prd:J}))}const K={};if(P.length>0&&(K.citationsCnty=P),Object.keys(_).length>0){K.citDomainTrend=_;const E=g.map(S=>S.label).filter(S=>Object.values(_).some(G=>G.months[S]>0));K.citDomainMonths=E}return $&&(K.citDomainByLlm=$),K}function To(t,e){const o=_e(t,[/^type$/,/^(county|country)$/]);if(o<0)return Wt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,p=4;for(let m=0;m<i.length;m++){const I=String(i[m]||"").split(/\n/)[0].trim().toLowerCase();I==="type"&&a<0&&(a=m),(I==="county"||I==="country")&&n<0&&(n=m),(I==="topic"||I==="topoc")&&c<0&&(c=m),I==="brand"&&s<0&&(s=m)}c<0&&(c=2,Wt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:i.slice(0,6)})),p=Math.max(a,n,c,s)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,f=/^w\d+/i,d=[],h=[o];for(let m=0;m<=o;m++)m!==o&&h.push(m);for(const m of h){if(d.length>0)break;const I=t[m];if(I)for(let M=p;M<I.length;M++){const P=String(I[M]||"").split(/\n/)[0].trim();P&&(x.test(P)||f.test(P))&&d.push({col:M,label:P})}}const u=t.slice(o+1),C=[];u.forEach(m=>{if(!m)return;const I=String(m[a]||"").trim(),M=ae(m[n]),P=String(m[c]||"").trim(),_=String(m[s]||"").trim();if(!P||!_)return;const $={};let D=0;d.forEach(({col:U,label:B})=>{const K=te(m[U]);K>0&&($[B]=K,D=K)}),(Object.keys($).length>0||P)&&C.push({type:I,country:M,topic:P,brand:_,scores:$,latestScore:D})});const b=e==="weekly"?"weeklyPR":"monthlyPR",g=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return C.length>0&&(w[b]=C),d.length>0&&(w[g]=d.map(m=>m.label)),w}function Eo(t,e){const o=t.findIndex(w=>w?w.some(m=>/steakholders|stakeholders/i.test(String(m||"").trim()))||w.some(m=>/^type$/i.test(String(m||"").trim()))&&w.some(m=>/topoc|topic/i.test(String(m||"").trim())):!1);if(o<0)return Wt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,p=4;for(let w=0;w<i.length;w++){const m=String(i[w]||"").trim().toLowerCase();(m==="steakholders"||m==="stakeholders")&&a<0&&(a=w),m==="type"&&n<0&&(n=w),(m==="country"||m==="county")&&c<0&&(c=w),(m==="topoc"||m==="topic")&&s<0&&(s=w)}p=Math.max(a,n,c,s)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,f=/^w\d+/i,d=[];for(let w=p;w<i.length;w++){const m=String(i[w]||"").split(/\n/)[0].trim();m&&(x.test(m)||f.test(m))&&d.push({col:w,label:m})}const h=t.slice(o+1),u=[];h.forEach(w=>{if(!w)return;const m=String(w[a]||"").trim(),I=String(w[n]||"").trim(),M=ae(w[c]),P=String(w[s]||"").trim();if(!P||!m)return;const _={};let $=0;d.forEach(({col:D,label:U})=>{const B=te(w[D]);B>0&&(_[U]=B,$=B)}),u.push({stakeholder:m,type:I,country:M,topic:P,scores:_,latestScore:$})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",b=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",g={};return u.length>0&&(g[C]=u),d.length>0&&(g[b]=d.map(w=>w.label)),g}function wr(t){const e=_e(t,[/^prompts?$/,/^country$/]);if(e<0)return Wt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],i={},a=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const p=String(o[s]||"").trim().toLowerCase();a.includes(p)&&!i[p]&&(i[p]=s)}const n=t.slice(e+1),c=[];return n.forEach(s=>{if(!s)return;const p=String(s[i.prompts]||"").trim();p&&c.push({country:ae(s[i.country]),prompt:p,division:String(s[i.division]||"").trim(),category:String(s[i.category]||"").trim(),launched:String(s[i.launched]||"").trim(),branded:String(s[i.branded]||"").trim(),cej:String(s[i.cej]||"").trim(),topic:String(s[i.topic]||"").trim()})}),c.length>0?{appendixPrompts:c}:{}}const pe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Cr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const e=_e(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,h)=>console.log(`  row${h}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const o=t[e];let i=-1,a=-1,n=-1;for(let d=0;d<o.length;d++){const h=String(o[d]||"").trim().toLowerCase();i<0&&(h==="country"||h==="county")&&(i=d),a<0&&(h==="category"||h==="product"||h==="제품"||h==="카테고리")&&(a=d),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(h)&&(n=d)}if(i<0||a<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...pe};let p=0,x=0,f=0;return t.slice(e+1).forEach((d,h)=>{const u=e+1+h;try{if(!d){f++;return}const C=String(d[n]||"").trim();if(!C){f++;return}p++;const b=C.toLowerCase().replace(/\s+/g," ");if(!c.has(b)&&!c.has(b.replace(/\s/g,"")))return;const g=dr(d[i]),w=String(d[a]||"").trim();if(!g||!w){console.warn("[parseUnlaunched] row skipped",{rowIdx:u,raw:{country:d[i],category:d[a],status:d[n]},parsed:{country:g,rawCategory:w}}),f++;return}const m=w.toUpperCase(),I=Go[m]||m;s[`${g}|${I}`]=!0,I!==m&&(s[`${g}|${m}`]=!0),x++}catch(C){let b;try{b={country:d==null?void 0:d[i],category:d==null?void 0:d[a],status:d==null?void 0:d[n]}}catch{b=d}console.warn("[parseUnlaunched] row error",{rowIdx:u,raw:b,error:C==null?void 0:C.message}),f++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(pe).length}건 + skip ${f}건 / 총행 ${p} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function kr(t){const e=_e(t,[/^bu$/,/topic/]);if(e<0)return Wt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(f=>f==null?void 0:f.slice(0,6))});const o=t[e];let i=-1,a=-1,n=-1,c=-1,s=-1;for(let f=0;f<o.length;f++){const d=String(o[f]||"").trim().toLowerCase();i<0&&d==="bu"&&(i=f),a<0&&d.includes("topic")&&d.includes("대시보드")&&(a=f),n<0&&(d==="explanation"||d==="설명")&&(n=f),c<0&&d.includes("기존")&&(c=f),s<0&&d.includes("topic")&&d.includes("row")&&(s=f)}a<0&&(a=1),n<0&&(n=2);const p=[];let x="";return t.slice(e+1).forEach(f=>{if(!f)return;const d=String(f[i]||"").trim();d&&(x=d);const h=String(f[a]||"").trim();if(!h)return;const u=String(f[n]||"").trim(),C=c>=0?String(f[c]||"").trim():"",b=s>=0?String(f[s]||"").trim():"";p.push({bu:x,topic:h,explanation:u,oldTopic:C,topicRow:b})}),p.length>0?{prTopicList:p}:{}}function Sr(t,e){var o;if(!ar(e,`parseSheetRows:${t}`))return{};try{if(t===Rt.meta)return pr(e);if(t===Rt.visSummary)return ur(e);if(t===Rt.productMS||t===Rt.productHS||t===Rt.productES)return hr(e);if(t===Rt.weeklyMS)return Ke(e,"MS");if(t===Rt.weeklyHS)return Ke(e,"HS");if(t===Rt.weeklyES)return Ke(e,"ES");if(t===Rt.monthlyPR)return To(e,"monthly");if(t===Rt.weeklyPR)return To(e,"weekly");if(t===Rt.monthlyBrandPrompt)return Eo(e,"monthly");if(t===Rt.weeklyBrandPrompt)return Eo(e,"weekly");if(t===Rt.citPageType)return br(e);if(t===Rt.citTouchPoints)return xr(e);if(t===Rt.citDomain)return vr(e);if(t===Rt.appendix)return wr(e);if(t===Rt.unlaunched)return Cr(e);if(t===Rt.prTopicList)return kr(e)}catch(i){return Xe(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Wt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(Rt)})}function Fr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Tr(t,e){var d;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const n=await a.text(),c=await Xo(),s=c.read(n,{type:"string"}),p=s.Sheets[s.SheetNames[0]],x=c.utils.sheet_to_json(p,{header:1,defval:""}),f=n.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${n.length}자/${f}줄 → ${x.length}행 × ${((d=x[0])==null?void 0:d.length)??0}컬럼`),x}async function Er(t,e){var n,c;const o=Object.values(Rt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(s=>Tr(t,s).then(p=>({name:s,rows:p}))));for(let s=0;s<o.length;s++){const p=o[s],x=a[s];if(e==null||e(`"${p}" 처리 중... (${s+1}/${o.length})`),x.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(n=x.reason)==null?void 0:n.message);continue}try{const{rows:f}=x.value,d=Sr(p,f);for(const[h,u]of Object.entries(d))h==="weeklyLabels"||h==="weeklyLabelsFull"?i[h]||(i[h]=u):Array.isArray(u)&&Array.isArray(i[h])?i[h]=[...i[h],...u]:u&&typeof u=="object"&&!Array.isArray(u)&&i[h]&&typeof i[h]=="object"&&!Array.isArray(i[h])?i[h]={...i[h],...u}:i[h]=u}catch(f){console.warn(`"${p}" 시트 처리 실패:`,f.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[p,x]of Object.entries(i.weeklyAll)){const f=x.Total||x.TTL||{},d=f.LG||f.lg||[],h=Object.entries(f).filter(([w])=>w!=="LG"&&w!=="lg"),u=d.length?d[d.length-1]:0,C=d.length>=5?d[0]:0;let b="",g=0;for(const[w,m]of h){const I=m.length?m[m.length-1]:0;I>g&&(g=I,b=w)}u>0&&s.push({id:p,bu:zo[p]||"HS",kr:Re[p]||p,category:p,date:((c=i.meta)==null?void 0:c.period)||"",score:u,prev:C,vsComp:g,compName:b,allScores:{LG:u,...b?{[b]:g}:{}}})}if(s.length&&(i.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(p=>`${p.id}=${p.score}`).join(", "))),!i.productsCnty){const p=[];for(const[x,f]of Object.entries(i.weeklyAll)){const d=Re[x]||x;for(const[h,u]of Object.entries(f)){if(h==="Total"||h==="TTL")continue;const C=u.LG||u.lg||[],b=C.length?C[C.length-1]:0;if(b<=0)continue;const g=C.length>=2?C[0]:0;let w="",m=0;const I={LG:b};for(const[P,_]of Object.entries(u)){if(P==="LG"||P==="lg")continue;const $=_.length?_[_.length-1]:0;I[P]=$,$>m&&(m=$,w=P)}const M=+(b-m).toFixed(1);p.push({product:d,country:h,score:b,prev:g,compName:w,compScore:m,gap:M,allScores:I})}}p.length&&(i.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((p,x)=>p===`W${x+1}`)){const p=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),i.weeklyLabels=p;const x=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(f=>{const d=String(f).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(f=>/^W\d+/.test(f));x.length&&(i.weeklyLabelsFull=x)}}if(i._syncIssues=sr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return i}const Et={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function Ar(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Lr({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,n=a?"#1E293B":o?"#7F1D1D":"#064E3B",c=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=a?"#334155":o?"#B91C1C":"#047857",p=a?"○":o?"⚠️":"●",x=a?"동기화 정보 없음":`데이터 최신화: ${Ar(e)}`,f=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:f,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:c,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),x]})}function $r({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
.hero-compratio{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}
.hero-compratio-cap{font-size:13px;font-weight:700;color:#64748B;letter-spacing:0.3px}
.hero-compratio-val{font-size:20px;font-weight:900;letter-spacing:-0.5px}
.hero-compratio-sub{font-size:13px;color:#64748B}
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
`}const Yt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",ee="#CF0652",ue="#94A3B8",Pe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Qo={LG:ee,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Ao=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Ze={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Br=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Me={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Rr={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},jr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},eo=90;function oo(t,e){const o=Pe[e]||Pe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Ir(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Pr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Qe(t){const e=String(t||"").trim().toUpperCase();return Me[e]||t}function Mr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Rr[o]||Me[o]||t:jr[o]||Me[o]||t}let Dr=0;function Lo(t,e,o,i,a,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const c=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,s=n.baselineLabel||"",p=n.labelOffsetY||0,x=n.lineOffsetY||0,f=Dr++,d={t:18,r:10,b:20,l:10},h=o-d.l-d.r,u=i-d.t-d.b,C=t.filter(B=>B!=null);if(!C.length){let B=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const K=t.length,E=K>1?K-1:1;return B+=t.map((S,G)=>`<text x="${(d.l+G/E*h).toFixed(1)}" y="${d.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Yt}">${e[G]||""}</text>`).join(""),B+="</svg>",B}const b=Math.min(...C)-1,g=Math.max(...C)+1,w=g-b||1,m=t.length,I=m>1?m-1:1,M=t.map((B,K)=>d.l+K/I*h),P=[];t.forEach((B,K)=>{B!=null&&P.push({x:M[K],y:d.t+(1-(B-b)/w)*u,v:B,idx:K})});let _=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const $=c>0?P.filter(B=>B.idx<c):[],D=c>0?P.filter(B=>B.idx>=c):P,U="#64748B";if(D.length>=2){const B=D.map((E,S)=>`${S?"L":"M"}${E.x.toFixed(1)},${E.y.toFixed(1)}`).join(" "),K=B+` L${D[D.length-1].x.toFixed(1)},${d.t+u} L${D[0].x.toFixed(1)},${d.t+u} Z`;_+=`<defs><linearGradient id="lg${f}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,_+=`<path d="${K}" fill="url(#lg${f})"/>`,_+=`<path d="${B}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if($.length>=2){const B=$.map((K,E)=>`${E?"L":"M"}${K.x.toFixed(1)},${K.y.toFixed(1)}`).join(" ");_+=`<path d="${B}" stroke="${U}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(_+=P.map(B=>{const K=c>0&&B.idx<c;return c>0&&B.idx===c?`<circle cx="${B.x.toFixed(1)}" cy="${B.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${B.x.toFixed(1)}" cy="${B.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${K?U:a}" stroke-width="2" opacity="${K?.85:1}"/>`}).join(""),_+=P.map(B=>{const E=c>0&&B.idx<c?U:a;return`<text x="${B.x.toFixed(1)}" y="${Math.max(B.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${E}" font-family="${Yt}">${B.v.toFixed(1)}</text>`}).join(""),c>0&&s){const B=M[c];_+=`<line x1="${B.toFixed(1)}" y1="${(d.t+x).toFixed(1)}" x2="${B.toFixed(1)}" y2="${(d.t+u+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const K=B>o*.7,E=(K?d.t+u+1:d.t+8)+p;_+=`<text x="${(K?B-5:B+5).toFixed(1)}" y="${E.toFixed(1)}" text-anchor="${K?"end":"start"}" font-size="9" fill="#64748B" font-family="${Yt}">${s}</text>`}return _+=t.map((B,K)=>`<text x="${M[K].toFixed(1)}" y="${d.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Yt}">${e[K]||""}</text>`).join(""),_+="</svg>",_}function Se(t,e){return Qo[t]||Ao[e%Ao.length]}function tn(t,e,o,i,a={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const c=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,s=a.baselineLabel||"";let p=1/0,x=-1/0;if(n.forEach(m=>(t[m]||[]).forEach(I=>{I!=null&&(I<p&&(p=I),I>x&&(x=I))})),!isFinite(p))return"";const f=Math.max((x-p)*.15,2);p=Math.max(0,p-f),x=Math.min(100,x+f);const d=x-p||1,h=e.length,u=8,C=8,b=i-u-C,g="#64748B";let w="";for(let m=0;m<=4;m++){const I=u+m/4*b;w+=`<line x1="0" y1="${I.toFixed(1)}" x2="${o}" y2="${I.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((m,I)=>{const M=t[m]||[],P=Se(m,I),_=m==="LG",$=_?2.5:1.5,D=_?1:.7,U=[];if(M.forEach((S,G)=>{if(S==null)return;const N=(G+.5)/h*o,J=u+(1-(S-p)/d)*b;U.push({x:N,y:J,v:S,idx:G})}),!U.length)return;const B=c>0?U.filter(S=>S.idx<c):[],K=c>0?U.filter(S=>S.idx>=c):U;function E(S,G,N,J){if(S.length>=2){const nt=S.map((q,v)=>`${v?"L":"M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(" ");w+=`<path d="${nt}" stroke="${G}" fill="none" stroke-width="${$}" stroke-linecap="round" stroke-linejoin="round" opacity="${N}"/>`}S.forEach(nt=>{J&&nt.idx===c||(w+=`<circle cx="${nt.x.toFixed(1)}" cy="${nt.y.toFixed(1)}" r="${_?3.5:2.5}" fill="#fff" stroke="${G}" stroke-width="${_?2:1.5}" opacity="${N}"/>`)})}if(E(B,g,.85,!1),E(K,P,D,_&&c>0),_&&c>0){const S=U.find(G=>G.idx===c);S&&(w+=`<circle cx="${S.x.toFixed(1)}" cy="${S.y.toFixed(1)}" r="4.5" fill="#000" stroke="${P}" stroke-width="3"/>`)}}),c>0&&s){const m=(c+.5)/h*o;w+=`<line x1="${m.toFixed(1)}" y1="${u}" x2="${m.toFixed(1)}" y2="${u+b}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const I=m>o*.7;w+=`<text x="${(I?m-5:m+5).toFixed(1)}" y="${(u+12).toFixed(1)}" text-anchor="${I?"end":"start"}" font-size="11" fill="#64748B" font-family="${Yt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function Or({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:a,monthlyVis:n,total:c,meta:s,wLabels:p}){const x={monthlyVis:n};return`
var _periodMode='weekly';
var _curLang='${t}';
// iframe에서 한영 전환 메시지 수신
window.addEventListener('message',function(e){
  if(e.data&&e.data.type==='switchLang')switchLang(e.data.lang);
});
// LLM Model 변경 — 부모 React 어드민에게 알림 → llmModel state 갱신 → 미리보기 재렌더
// LLM 드롭다운은 monthly 모드에서만 활성. 다른 모델 선택 시 weekly 면 monthly 로 자동 전환.
function switchLlmModel(value){
  if(value && value !== 'Total' && _periodMode !== 'monthly') {
    switchPeriodPage('monthly');
  }
  try { if(window.parent && window.parent!==window) window.parent.postMessage({type:'llmModel', value:value}, '*'); } catch(e){}
}
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
  // 활성 탭 안의 lazy iframe(data-src) 최초 1회 로드 (readability 등)
  var actPanel=document.getElementById('tab-'+id);
  if(actPanel){actPanel.querySelectorAll('iframe[data-src]').forEach(function(f){if(!f.src){f.src=f.getAttribute('data-src')}})}
}
function switchCitSub(sub){
  document.querySelectorAll('#gnb-citation .gnb-sub-btn').forEach(function(b){b.classList.remove('active')});
  var btns=document.querySelectorAll('#gnb-citation .gnb-sub-btn');
  var subMap={touchpoint:0,dotcom:1,'llm-compare':2};
  if(subMap[sub]!==undefined&&btns[subMap[sub]])btns[subMap[sub]].classList.add('active');
  var tp=document.getElementById('cit-sub-touchpoint');
  var dc=document.getElementById('cit-sub-dotcom');
  var llm=document.getElementById('cit-sub-llm-compare');
  if(tp)tp.style.display=sub==='touchpoint'?'':'none';
  if(dc){
    dc.style.display=sub==='dotcom'?'':'none';
    var iframe=document.getElementById('cit-iframe-dc');
    if(iframe&&!iframe.src&&iframe.getAttribute('data-src')){iframe.src=iframe.getAttribute('data-src')}
  }
  if(llm){
    llm.style.display=sub==='llm-compare'?'':'none';
    var iframeLlm=document.getElementById('cit-iframe-llm');
    if(iframeLlm&&!iframeLlm.src&&iframeLlm.getAttribute('data-src')){iframeLlm.src=iframeLlm.getAttribute('data-src')}
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
function switchPRPeriod(mode){
  var wp=document.getElementById('pr-period-weekly');
  var mp=document.getElementById('pr-period-monthly');
  if(wp)wp.style.display=mode==='weekly'?'':'none';
  if(mp)mp.style.display=mode==='monthly'?'':'none';
  var wb=document.getElementById('pr-period-w-btn');
  var mb=document.getElementById('pr-period-m-btn');
  if(wb){wb.style.background=mode==='weekly'?'#fff':'transparent';wb.style.color=mode==='weekly'?'#0F172A':'#94A3B8'}
  if(mb){mb.style.background=mode==='monthly'?'#fff':'transparent';mb.style.color=mode==='monthly'?'#0F172A':'#94A3B8'}
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
  // LLM Model 드롭다운 — monthly 에서만 활성
  var llmGrp=document.getElementById('vis-llm-select-group');
  if(llmGrp)llmGrp.style.display=mode==='monthly'?'':'none';
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
  // Hero(월간 전체 수치) — 선택 월 TTL 반영 (_monthTotalOverride 가 calcFilteredDataCB 안에서 동작).
  // onFilterChange 전체 호출 X — updateMonthlyProductScores 가 카드 점수를 최신월(data-ms)로 되돌림.
  if(typeof updateHeroFromCheckboxes==='function')updateHeroFromCheckboxes();
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
        // 미출시 여부 — 서버 렌더 시 is-unlaunched class 부여 (LG 점수/Gap '—' 처리)
        var isUL=item.classList.contains('is-unlaunched');
        // 미출시: LG 막대 크기를 '수치 1' 기준으로 고정
        var lgForBar=isUL?1:lg;
        var hPx=Math.max(3,Math.round(lgForBar/maxScore*BAR_H));
        var cPx=comp>0?Math.max(3,Math.round(comp/maxScore*BAR_H)):0;
        var cbPx=cb>0?Math.max(3,Math.round(cb/maxScore*BAR_H)):0;
        // LG 점수
        var lgValEl=item.querySelector('.vbar-cols > .vbar-col-wrap:first-child > .vbar-val');
        var lgColEl=item.querySelector('.vbar-cols > .vbar-col-wrap:first-child > .vbar-col');
        if(lgValEl)lgValEl.textContent=isUL?'—':lg.toFixed(1);
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
        // 신호등 색상 (LG/Comp 비율) — 미출시면 회색
        var status=comp>0?(lg>=comp?'lead':lg>=comp*0.8?'behind':'critical'):'lead';
        var barColor=isUL?'#94A3B8':(status==='lead'?'#15803D':status==='behind'?'#D97706':'#BE123C');
        if(lgValEl)lgValEl.style.color=barColor;
        if(lgColEl)lgColEl.style.background=barColor;
        // Gap
        var gapEl=item.querySelector('.vbar-gap');
        if(gapEl){
          gapEl.textContent=isUL?'—':((gap>=0?'+':'')+gap+'%p');
          gapEl.style.color=isUL?'#64748B':(gap>=0?'#15803D':'#BE123C');
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
    // MoM/WoW 업데이트 — baseline 제품도 표시 (사용자 요청)
    var momEl=mode==='monthly'?card.querySelector('.prod-mom'):card.querySelector('.prod-wow');
    if(momEl&&mom){
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
${(()=>{const f=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?f(e):"{}"};
var _products=${f(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${f(i||[])};
var _unlaunchedMap=${f(a)};
var _PROD_TO_UL=${f(Fe)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${f((x==null?void 0:x.monthlyVis)||[])};
var _total=${f(c)};
var _meta={period:${f(s.period||"")},reportNo:${f(s.reportNo||"")},totalInsight:${f(s.totalInsight||"")}};
var _wLabels=${f(p)};`})()}
${(()=>{const f=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${f(Qo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${ee}';
var _FONT=${f(Yt)};
var _COMP='${ue}';
var _REGIONS=${f(Object.fromEntries(Object.entries(Ze).map(([d,h])=>[d,h.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Ze).map(([f,d])=>[f,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${eo};

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
    function pmi(d){var s=String(d||'');var km=s.match(/(\\d{1,2})월/);if(km)return parseInt(km[1])-1;var em=s.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(em)return enM[em[1].toLowerCase()];var iso=s.match(/\\d{4}[-\\/](\\d{1,2})/);if(iso)return parseInt(iso[1])-1;return -1}
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
// prod-mom 텍스트 갱신 — baseline 제품도 MoM 표시 (사용자 요청)
function _setProdMom(card,momD){
  var el=card.querySelector('.prod-mom');if(!el)return;
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
  // Calculate filtered scores — weekly/monthly 각각 (hero data-period 로 분기)
  var weeklyResult=calcFilteredDataCBWeekly(selBU,selProd,selCountry);
  var monthlyResult=calcFilteredDataCB(selBU,selProd,selCountry);
  heroes.forEach(function(hero){
    var period=hero.getAttribute('data-period')||'monthly';
    var result=period==='weekly'?weeklyResult:monthlyResult;
    if(!result)return;
    var sc=result.score;var comp=result.vsComp;var compName=result.compName||'SAMSUNG';
    var d=+(sc-(result.prev||sc)).toFixed(1);
    var gap=+(sc-comp).toFixed(1);
    var dArrow=d>0?'▲':d<0?'▼':'─';
    var dColor=d>0?'#22C55E':d<0?'#EF4444':'#94A3B8';
    var ctx=hero.querySelector('#hero-ctx, .hero-ctx');
    if(ctx)ctx.innerHTML=badges;
    var compRatioEl=hero.querySelector('.hero-compratio-val');
    if(compRatioEl&&comp>0){var cr=Math.round((sc/comp)*100);compRatioEl.textContent=cr+'%';compRatioEl.style.color=cr>=100?'#22C55E':cr>=80?'#FBBF24':'#EF4444'}
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
// 선택 해석 — weekly/monthly 양쪽이 공유. (BU × Product) → prodIds, country 전체 여부 → countries.
// 통합 함수가 아닌 헬퍼로 분리한 이유: monthly 는 precomputed _total.buTotals/_total.countryTotals 를
// 활용, weekly 는 _weeklyAll 의 raw 시계열에서 직접 평균 — 데이터 shape 이 다르므로 본체는 분리 유지.
function _resolveSelection(selBU,selProd,selCountry){
  var prodIds=[];
  _products.forEach(function(p){
    var buOk=selBU.isAll||selBU.vals[p.bu];
    var prOk=selProd.isAll||selProd.vals[p.id];
    if(buOk&&prOk)prodIds.push(p.id);
  });
  var allCountryCodes=[];
  Object.values(_REGIONS).forEach(function(cs){cs.forEach(function(c){allCountryCodes.push(c)})});
  var allCountriesOn=allCountryCodes.every(function(c){return selCountry.isAll||selCountry.vals[c]});
  return{prodIds:prodIds,allCountriesOn:allCountriesOn,countryKeys:Object.keys(selCountry.vals)};
}
// 주간 데이터 (_weeklyAll + _curWeekIdx) 기반 필터링 평균
function calcFilteredDataCBWeekly(selBU,selProd,selCountry){
  if(!_weeklyAll||!Object.keys(_weeklyAll).length)return _total;
  // 1) 주차 인덱스 결정
  var maxLen=0;
  Object.keys(_weeklyAll).forEach(function(pid){
    var byC=_weeklyAll[pid]||{};
    Object.keys(byC).forEach(function(c){
      var brands=byC[c]||{};
      Object.keys(brands).forEach(function(b){
        var arr=brands[b];if(Array.isArray(arr)&&arr.length>maxLen)maxLen=arr.length;
      });
    });
  });
  if(!maxLen)return _total;
  var wIdx=(_curWeekIdx<0||_curWeekIdx>=maxLen)?maxLen-1:_curWeekIdx;
  var prevIdx=wIdx>0?wIdx-1:null;
  // 2) 선택 해석 (공통 헬퍼)
  var sel=_resolveSelection(selBU,selProd,selCountry);
  if(!sel.prodIds.length)return _total;
  var cKeys=sel.allCountriesOn?['Total']:sel.countryKeys;
  if(!cKeys.length)return _total;
  // 3) Aggregate
  var lgSum=0,lgCnt=0,ssSum=0,ssCnt=0,lgPrevSum=0,lgPrevCnt=0;
  sel.prodIds.forEach(function(pid){
    var byC=_weeklyAll[pid]||{};
    cKeys.forEach(function(c){
      var brands=byC[c];
      // 국가별 데이터 없으면 Total 폴백
      if(!brands)brands=byC['Total']||byC['TTL']||byC['TOTAL'];
      if(!brands)return;
      // LG
      var lgArr=brands.LG||brands.lg||null;
      if(Array.isArray(lgArr)){
        var lgV=lgArr[wIdx];
        if(lgV!=null){lgSum+=Number(lgV)||0;lgCnt++}
        if(prevIdx!=null){var lgP=lgArr[prevIdx];if(lgP!=null){lgPrevSum+=Number(lgP)||0;lgPrevCnt++}}
      }
      // Samsung (이름 변형 대응)
      var ssArr=null;
      Object.keys(brands).forEach(function(b){
        var bu=b.toUpperCase();
        if(bu==='SAMSUNG'||bu==='SAMSUMG')ssArr=brands[b];
      });
      if(Array.isArray(ssArr)){
        var ssV=ssArr[wIdx];
        if(ssV!=null){ssSum+=Number(ssV)||0;ssCnt++}
      }
    });
  });
  if(!lgCnt)return _total;
  var score=lgSum/lgCnt;
  var prev=lgPrevCnt?lgPrevSum/lgPrevCnt:score;
  var vsComp=ssCnt?ssSum/ssCnt:0;
  return{score:+score.toFixed(1),prev:+prev.toFixed(1),vsComp:+vsComp.toFixed(1),compName:'SAMSUNG'};
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
// 월 드롭다운 선택 시 — _monthlyVis 의 TTL 행 (country=TOTAL, division=TOTAL, llmModel=Total) 에서
// 선택 월의 전체 수치를 가져옴. 미선택(-1) 또는 해당 월 TTL 없으면 null (호출자가 _total 폴백).
function _monthTotalOverride(){
  if(_curMonthIdxIn12<0||!_monthlyVis||!_monthlyVis.length)return null;
  var ttl=_monthlyVis.filter(function(r){
    var c=String(r.country||'').toUpperCase();
    var d=String(r.division||'').toUpperCase();
    var m=String(r.llmModel||'Total').toUpperCase();
    return(c==='TOTAL'||c==='TTL')&&(d==='TOTAL'||d==='TTL'||d==='')&&(m==='TOTAL'||m==='ALL');
  });
  if(!ttl.length)return _monthTotalFromProducts();
  ttl.sort(function(a,b){return _dateMi(a.date)-_dateMi(b.date)});
  var idx=-1;
  ttl.forEach(function(r,i){if(_dateMi(r.date)===_curMonthIdxIn12)idx=i});
  if(idx<0)return _monthTotalFromProducts();
  var cur=ttl[idx];var prev=idx>0?ttl[idx-1]:null;
  return{
    score:+(Number(cur.lg)||0).toFixed(1),
    prev:+(Number(prev?prev.lg:cur.lg)||0).toFixed(1),
    vsComp:+(Number(cur.comp)||0).toFixed(1),
    compName:'SAMSUNG'
  };
}
// 폴백 — _monthlyVis TTL 행이 선택 월을 커버하지 않을 때, 작동 중인 cnty 카드/트렌드와
// 동일한 소스(_products[].monthlyScores: score=LG, comp=1위 경쟁사)를 월별 평균해서
// 선택 월 수치 + 직전(가용) 월 MoM 계산. _curMonthIdxIn12 미선택 시 null.
function _monthTotalFromProducts(){
  if(_curMonthIdxIn12<0||!_products||!_products.length)return null;
  var byMi={};
  _products.forEach(function(p){
    (p.monthlyScores||[]).forEach(function(m){
      if(m.score==null)return;
      var mi=_dateMi(m.date);if(mi<0)return;
      if(!byMi[mi])byMi[mi]={lgSum:0,lgCnt:0,compSum:0,compCnt:0};
      byMi[mi].lgSum+=Number(m.score)||0;byMi[mi].lgCnt++;
      if(m.comp!=null){byMi[mi].compSum+=Number(m.comp)||0;byMi[mi].compCnt++}
    });
  });
  var mis=Object.keys(byMi).map(Number).sort(function(a,b){return a-b});
  var pos=mis.indexOf(_curMonthIdxIn12);
  if(pos<0||!byMi[_curMonthIdxIn12].lgCnt)return null;
  var cur=byMi[_curMonthIdxIn12];
  var prev=pos>0?byMi[mis[pos-1]]:null;
  var curLg=cur.lgSum/cur.lgCnt;
  var prevLg=prev&&prev.lgCnt?prev.lgSum/prev.lgCnt:curLg;
  var curComp=cur.compCnt?cur.compSum/cur.compCnt:0;
  return{
    score:+curLg.toFixed(1),
    prev:+prevLg.toFixed(1),
    vsComp:+curComp.toFixed(1),
    compName:'SAMSUNG'
  };
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

  // ── 국가 전체 선택 감지 (공통 헬퍼 사용 — weekly 와 동일 로직) ──
  var allCountriesOn=_resolveSelection(selBU,selProd,selCountry).allCountriesOn;

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

  // 모든 BU의 모든 제품 선택 + 전체 국가 → 시트 TTL (월 드롭다운 선택 시 해당 월 TTL)
  if(allActiveBusFull&&allCountriesOn&&selBuKeys.length===Object.keys(buTotals).length){
    return _monthTotalOverride()||_total;
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

  return _monthTotalOverride()||_total;
}
// 초기 로드 — script 가 </body> 직전이라 DOM 이미 파싱 완료 상태. 직접 호출.
updateHeroFromCheckboxes();
// LLM 모델 != Total 일 때 monthly 모드로 자동 전환 (iframe 재렌더 시에도 monthly 유지)
(function(){
  var llmSel=document.getElementById('vis-llm-select');
  if(llmSel&&llmSel.value&&llmSel.value!=='Total'){
    switchPeriodPage('monthly');
  }
})();
`}const Nr=["audio","rac","aircare"];function _r(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Nr.includes(String(e).toLowerCase())}function zr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function De(t,e){if(!_r(t)||!e)return-1;const o=zr(t);if(o>0){const i=e.findIndex(a=>{const n=String(a||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const a=String(i||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const Oe={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Gr(t){const e=Oe[t]||Oe.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function en(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=Oe[e]||Oe.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Ur(t,e,o,i,a,n,c){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(x=>{const f=t.filter(h=>h.bu===x);if(!f.length)return"";const d=f.map(h=>{var B,K;const u=((B=e[h.id])==null?void 0:B.Total)||{},C=Object.keys(u).sort((E,S)=>{var J,nt;if(E==="LG")return-1;if(S==="LG")return 1;const G=((J=u[E])==null?void 0:J[u[E].length-1])||0;return(((nt=u[S])==null?void 0:nt[u[S].length-1])||0)-G});if(!C.length)return"";const b=oo(h.status,a),g=(K=u.LG)==null?void 0:K[u.LG.length-1],w=C.map((E,S)=>{const G=Se(E,S),N=E==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${G};opacity:${N?1:.7}"></i><span style="font-size:13px;color:${N?"#1A1A1A":"#94A3B8"};font-weight:${N?700:400}">${E}</span></span>`}).join(""),m=o.length,I=`<colgroup><col style="width:${eo}px">${o.map(()=>"<col>").join("")}</colgroup>`,M=De(h,o),P=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:8px 0;border:0">${tn(u,o,m*80,180,{fadeBeforeIdx:M,baselineLabel:M>0?"*Baseline 재설정":""})}</td></tr>`,_=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,$=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(E=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${E}</th>`).join("")}</tr>`,D=C.map((E,S)=>{const G=Se(E,S),N=E==="LG",J=o.map((nt,q)=>{var H;const v=(H=u[E])==null?void 0:H[q];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${v!=null?N?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${N?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${v!=null?v.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${N?"#FFF8F9":S%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${N?700:500};color:${G};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${G};margin-right:4px;vertical-align:0"></i>${E}</td>${J}</tr>`}).join(""),U=no(h.id||h.category,n);return`<div class="trend-row${U?" is-unlaunched":""}" data-prodid="${h.id||h.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(h,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${U?"#F1F5F9":b.bg};color:${U?"#64748B":b.color};border:1px solid ${U?"#CBD5E1":b.border}">${U?a==="en"?"Unlaunched":"미출시":b.label}</span>
          ${g!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${g.toFixed(1)}%</span>`:""}
          ${h.compName?`<span style="font-size:14px;color:#94A3B8">vs ${h.compName} ${h.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Yt}">${I}<tbody>${P}${_}${$}${D}</tbody></table></div>
        ${en(h,a)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${d}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function Hr(t,e,o,i,a,n){if(!e||!e.length)return"";const c=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(u){const C=String(u||""),b=C.match(/(\d{1,2})월/);if(b)return parseInt(b[1])-1;const g=C.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(g)return p[g[1].toLowerCase()];const w=C.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const f=[0,1,2,3,4,5,6,7,8,9,10,11],d=s.slice(),h=c.map(u=>{const C=t.filter(g=>g.bu===u);if(!C.length)return"";const b=C.map(g=>{const w=g.monthlyScores||[];let m={};if(w.length>=2){const N=new Set;if(w.forEach(J=>{J.allScores&&Object.keys(J.allScores).forEach(nt=>N.add(nt))}),N.forEach(J=>{m[J]=f.map(nt=>{var v;const q=w.find(H=>x(H.date)===nt);return((v=q==null?void 0:q.allScores)==null?void 0:v[J])??null})}),!N.size&&(m.LG=f.map(J=>{const nt=w.find(q=>x(q.date)===J);return nt?nt.score:null}),g.vsComp>0)){const J=f.map(nt=>{const q=w.find(v=>x(v.date)===nt);return(q==null?void 0:q.comp)??null});J.some(nt=>nt!=null)&&(m[g.compName||"Comp"]=J)}}else{const N=e.filter(v=>v.division===u&&(v.country==="TOTAL"||v.country==="TTL")),J={};N.forEach(v=>{const H=x(v.date);H>=0&&(J[H]=v)});const nt=f.map(v=>{var H;return((H=J[v])==null?void 0:H.lg)||null}),q=f.map(v=>{var H;return((H=J[v])==null?void 0:H.comp)||null});m={LG:nt},q.some(v=>v!=null&&v>0)&&(m.Samsung=q)}const I=Object.keys(m).sort((N,J)=>{if(N==="LG")return-1;if(J==="LG")return 1;const nt=(m[N]||[]).filter(v=>v!=null).pop()||0;return((m[J]||[]).filter(v=>v!=null).pop()||0)-nt});if(!I.length)return"";const M=oo(g.status,i),P=(m.LG||[]).filter(N=>N!=null).pop(),_=I.map((N,J)=>{const nt=Se(N,J),q=N==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${nt};opacity:${q?1:.7}"></i><span style="font-size:13px;color:${q?"#1A1A1A":"#94A3B8"};font-weight:${q?700:400}">${N}</span></span>`}).join(""),$=d.length,D=`<colgroup><col style="width:${eo}px">${d.map(()=>"<col>").join("")}</colgroup>`,U=De(g,d),B=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:8px 0;border:0">${tn(m,d,$*80,180,{fadeBeforeIdx:U,baselineLabel:U>0?"*Baseline 재설정":""})}</td></tr>`,K=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:4px 0 6px;border:0">${_}</td></tr>`,E=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(N=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${N}</th>`).join("")}</tr>`,S=I.map((N,J)=>{const nt=Se(N,J),q=N==="LG",v=d.map((H,F)=>{var V;const Y=(V=m[N])==null?void 0:V[F];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${Y!=null?q?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${q?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${Y!=null?Y.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${q?"#FFF8F9":J%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${q?700:500};color:${nt};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${nt};margin-right:4px;vertical-align:0"></i>${N}</td>${v}</tr>`}).join(""),G=no(g.id||g.category,a);return`<div class="trend-row${G?" is-unlaunched":""}" data-prodid="${g.id||g.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(g,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${G?"#F1F5F9":M.bg};color:${G?"#64748B":M.color};border:1px solid ${G?"#CBD5E1":M.border}">${G?i==="en"?"Unlaunched":"미출시":M.label}</span>
          ${P!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${P.toFixed(1)}%</span>`:""}
          ${g.compName?`<span style="font-size:14px;color:#94A3B8">vs ${g.compName} ${g.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Yt}">${D}<tbody>${B}${K}${E}${S}</tbody></table></div>
        ${en(g,i)}
      </div>`}).join("");return b?`<div class="bu-group" data-bu="${u}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${u}</span></div>
      ${b}
    </div>`:""}).join("");return h.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${h}</div>
  </div>`:""}function on(){return""}function $o(t,e,o,i,a){const n=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,s=+(t.score-c).toFixed(1),p=n>0?"▲":n<0?"▼":"─",x=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8",f=c>0?Math.round(t.score/c*100):null,d=f==null?"#94A3B8":f>=100?"#22C55E":f>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${e.period||""}</span>
        <span class="hero-ctx-badge">${i==="en"?"All Divisions":"전체 본부"}</span>
        <span class="hero-ctx-badge">${i==="en"?"All Products":"전체 제품"}</span>
        <span class="hero-ctx-badge">${i==="en"?"All Countries":"전체 국가"}</span>
      </div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        ${f!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${i==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${d}">${f}%</span>
          <span class="hero-compratio-sub">${i==="en"?"vs Samsung":"삼성 대비"}</span>
        </div>`:""}
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${x}">${p} ${Math.abs(n).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${ee}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${ue}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${ee}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${ue}"></i> Samsung ${c}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${c>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${c}%</span>
          <span class="hero-comp-gap" style="color:${s>=0?"#22C55E":"#EF4444"}">Gap ${s>=0?"+":""}${s}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function we(t,e){const o=Fe[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function no(t,e){return Br.every(o=>{const i=Fe[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function ro(t,e){return we(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Bo(t,e,o,i,a,n,c,s,p){if(!t.length)return"";const f=["MS","HS","ES"].map(d=>{const h=t.filter(C=>C.bu===d);if(!h.length)return"";const u=h.map(C=>{var wt,Lt;const b=C.weekly||[],g=b.filter(bt=>bt!=null),w=C.weeklyScore||(g.length>0?g[g.length-1]:C.score),m=C.monthlyScore||C.score,I=w,M=((wt=s==null?void 0:s[C.id])==null?void 0:wt.Total)||((Lt=s==null?void 0:s[C.id])==null?void 0:Lt.TTL)||{};let P=0;Object.entries(M).forEach(([bt,St])=>{if(bt==="LG"||bt==="lg")return;const Ct=Array.isArray(St)&&St.length?St[St.length-1]:0;Ct>P&&(P=Ct)});const _=C.vsComp||0,$=P>0?w/P*100:_>0?w/_*100:100,D=_>0?m/_*100:100,U=Math.round($*10)/10,B=Math.round(D*10)/10,K=U,E=$>=100?"lead":$>=80?"behind":"critical",S=oo(E,i),G=g.length>=1?g[g.length-1]:null,N=g.length>=2?g[g.length-2]:null,J=G!=null&&N!=null?+(G-N).toFixed(1):null,nt=J>0?"▲":J<0?"▼":"─",q=J>0?"#22C55E":J<0?"#EF4444":"#94A3B8",v=E==="critical"?"#BE123C":E==="behind"?"#D97706":"#15803D",H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],F={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function Y(bt){const St=String(bt||""),Ct=St.match(/(\d{1,2})월/);if(Ct)return parseInt(Ct[1])-1;const W=St.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(W)return F[W[1].toLowerCase()];const z=St.match(/\d{4}[-\/](\d{1,2})/);return z?parseInt(z[1])-1:-1}let V=C.monthlyScores||[];if(V.length<2&&c.length>0){const bt=c.filter(Ct=>Ct.division===C.bu&&(Ct.country==="TOTAL"||Ct.country==="TTL")),St={};bt.forEach(Ct=>{const W=Y(Ct.date);W>=0&&(St[W]={date:Ct.date,score:Ct.lg,comp:Ct.comp})}),V=Object.keys(St).sort((Ct,W)=>Ct-W).map(Ct=>St[Ct])}const k=V.length>0?V.map(bt=>{const St=Y(bt.date);return St>=0?H[St]:bt.date}):["M-3","M-2","M-1","M0"],T=V.length>0?V.map(bt=>bt.score):[null,null,null,C.score],A=V.length>=2?+(V[V.length-1].score-V[V.length-2].score).toFixed(1):null,Q=A>0?"▲":A<0?"▼":"─",X=A>0?"#22C55E":A<0?"#EF4444":"#94A3B8",lt=K,yt=lt>=100?"#15803D":lt>=80?"#D97706":"#BE123C",vt=C.weeklyPrev||(g.length>=5?g[g.length-5]:g[0]||0),kt=w&&vt?+(w-vt).toFixed(1):null,j=m&&(C.monthlyPrev||C.prev)?+(m-(C.monthlyPrev||C.prev)).toFixed(1):null,Z=we(C.id||C.category,n),et=no(C.id||C.category,n),gt=et?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:S;return`<div class="prod-card${et?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${w.toFixed(1)}" data-ms="${m.toFixed(1)}" data-wr="${U}" data-mr="${B}" data-wmom="${kt??""}" data-mmom="${j??""}" style="border-color:${gt.border}">
        <div class="prod-head">
          <span class="prod-name">${ro(C,n)}</span>
          ${Z.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${gt.bg};color:${gt.color};border-color:${gt.border}">${gt.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${I.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${q}">${J!=null?`WoW ${nt} ${Math.abs(J).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${X}">${A==null?"MoM —":`MoM ${Q} ${Math.abs(A).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const bt=a.slice(-10),St=De(C,bt),Ct=String(C.id||"").toLowerCase(),W=Ct==="aircare"?30:Ct==="rac"?20:0;return Lo(b.slice(-10),bt,300,90,v,{fadeBeforeIdx:St,baselineLabel:St>0?"*Baseline 재설정":"",labelOffsetY:W})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const bt=De(C,k),Ct=String(C.id||"").toLowerCase()==="audio";return Lo(T,k,300,90,v,{fadeBeforeIdx:bt,baselineLabel:bt>0?"*Baseline 재설정":"",labelOffsetY:Ct?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(lt,120)}%;background:${yt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${yt}">${lt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${h.length}${o.categories}</span></div>
      <div class="prod-grid">${u}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${on(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${f}${(()=>{const d=t.filter(h=>we(h.id||h.category,n).length>0).map(h=>`${(h.id||"").toLowerCase()==="audio"||h.kr==="오디오"?"Audio-Sound Suite":h.kr}: ${we(h.id||h.category,n).map(u=>Mr(u,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Gr(i)})()}</div>
  </div>`}function Ro(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Fe[n]||(n||"").toUpperCase(),s=i&&i[`${t.country}|${c}`],p=Pr(t.score,t.compScore),x=s?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",f=+(t.score-t.compScore).toFixed(1),d=s?"#64748B":f>=0?"#15803D":"#BE123C",h=130,u=["TCL","HISENSE","HAIER"];let C="",b=0;t.allScores&&Object.entries(t.allScores).forEach(([D,U])=>{const B=String(D).toUpperCase();u.some(E=>B.includes(E))&&U>b&&(C=D,b=U)});const g=Math.max(e,b),w=s?1:t.score,m=Math.max(3,Math.round(w/g*h)),I=t.compScore>0?Math.max(3,Math.round(t.compScore/g*h)):0,M=b>0?Math.max(3,Math.round(b/g*h)):0,P="#9333EA",_=s?"—":t.score.toFixed(1),$=s?"—":`${f>=0?"+":""}${f}%p`;return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${_}</span>
        <div class="vbar-col" style="height:${m}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ue}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${I}px;background:${ue}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${b>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${P}">${b.toFixed(1)}</span>
        <div class="vbar-col" style="height:${M}px;background:${P}"></div>
        <span class="vbar-col-name" style="color:${P}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${$}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function jo(t,e,o,i,a,n){if(!t||!t.length)return"";const c=new Map;t.forEach(u=>{c.has(u.product)||c.set(u.product,[]),c.get(u.product).push(u)});const s=e.cntyProductFilter||{},p=[...c.entries()].filter(([u])=>s[u]!==!1).map(([u,C])=>{const b=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),g=C.map(w=>Ro(w,b,Qe(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${u}"><div class="bu-header"><span class="bu-label">${u}</span></div><div class="vbar-chart">${g}</div></div>`}).join(""),x=new Map;t.forEach(u=>{x.has(u.country)||x.set(u.country,[]),x.get(u.country).push(u)});const f=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],h=f.filter(u=>x.has(u)).concat([...x.keys()].filter(u=>!f.includes(u))).map(u=>{const C=x.get(u);if(!C)return"";const b=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),g=C.map(w=>Ro(w,b,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${u}"><div class="bu-header"><span class="bu-label">${Qe(u)}</span></div><div class="vbar-chart">${g}</div></div>`}).join("");return`<div class="section-card cnty-section">
    <div class="section-header">
      <div class="section-title cnty-section-title">${o.cntyTitle}</div>
      <div class="section-header-right">
        ${n?`<span class="legend">${n}</span>`:""}
        <div class="trend-tabs">
          <button class="cnty-view-tab active" onclick="switchCntyView('country')">${o.byCountry}</button>
          <button class="cnty-view-tab" onclick="switchCntyView('product')">${o.byProduct}</button>
        </div>
        <label style="display:inline-flex;align-items:center;gap:5px;font-size:13px;color:#475569;cursor:pointer;margin-left:8px;">
          <input type="checkbox" class="cnty-cbrand-toggle" checked onchange="toggleCBrand(this)" style="cursor:pointer;" />
          ${o.cBrandCompare}
        </label>
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ue}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${on(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${h}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const u={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},b=[...new Set(t.map(g=>g.product))].map(g=>{const w=u[g]||String(g).toLowerCase(),m=we(w,a),I=w==="audio"?"Audio-Sound Suite":g;return m.length?`${I}: ${m.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return b.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${b.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Io={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Wr(t){const e=Io[t]||Io.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Vr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",a=e==="en"?"All":"전체",n=e==="en"?"Total":"총",c=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",p=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],x={};p.forEach(u=>{const C=new Set;t.forEach(b=>{b[u.key]&&C.add(b[u.key])}),x[u.key]=[...C].sort()});const f=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(x).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),h=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${c?" "+c:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${s}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${p.map(u=>`<th data-col="${u.key}" onclick="_plToggle('${u.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${u.label} <span id="pl-arrow-${u.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${p.map(u=>`<div id="pl-dd-${u.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${u.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${a}</div>
      ${x[u.key].map(C=>`<div onclick="_plFilter('${u.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${f};
    var _plFilters={};
    var _divC=${d};
    var _cejC=${h};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${c?" "+c:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(p.map(u=>u.key))}.forEach(function(k){
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
  <\/script>`}function Po(t,e,o,i,a,n,c="weekly"){const s=c==="monthly",p=s?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const x=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let f;s?f=e&&e.length?e.slice():[]:f=e&&e.length?e.slice(-12):[];const d=[...new Set(t.map(S=>S.topic))].filter(Boolean),h=[...new Set(t.map(S=>S.type))].filter(Boolean),u=[...new Set(t.map(S=>S.country))].filter(S=>S&&S!=="TTL"),C=x.filter(S=>u.includes(S)).concat(x.filter(S=>!u.includes(S))),b=JSON.stringify(t).replace(/</g,"\\u003c"),g=JSON.stringify(f),w=JSON.stringify(d),m=JSON.stringify(h),I=JSON.stringify(C),M=72;function P(S){const G={};return S&&String(S).split(`
`).forEach(N=>{const J=N.indexOf("=");if(J>0){const nt=N.slice(0,J).trim(),q=N.slice(J+1).trim();nt&&(G[nt]=q)}}),G}const _=P(i==null?void 0:i.prTopicPromptsRaw);a&&a.length&&d.forEach(S=>{if(!_[S]){const G=a.find(N=>N.topic===S&&N.country==="US");G&&(_[S]=G.prompt)}});const $=(n==null?void 0:n.prTopicList)||[],D={},U={};$.forEach(S=>{[S.topic,S.topicRow,S.oldTopic].filter(Boolean).map(N=>N.trim()).forEach(N=>{S.explanation&&!D[N]&&(D[N]=S.explanation),S.bu&&!U[N]&&(U[N]=S.bu)})});const K={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...D,...P(i==null?void 0:i.prTopicDescsRaw)},E={};return d.forEach(S=>{const G=U[S];if(G)E[S]=G;else{const N=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];E[S]=N.some(J=>S.toLowerCase().includes(J.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Yt}">
    <!-- 필터 바 -->
    <div id="${p}-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="${p}-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="${p}-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"View":"보기"}</span>
        <div id="${p}-view-chips" style="display:flex;gap:4px"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${ee};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(i==null?void 0:i.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs #1 competitor":"() 는 1위 경쟁사 대비"}</span></span>
      </div>
      <div class="section-body" id="${p}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">${s?f.length?`${f[0]}–${f[f.length-1]} (${f.length}${o==="en"?" months":"개월"})`:"":f.length?`${f[0].toUpperCase()}–${f[f.length-1].toUpperCase()} (${f.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${p}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${b},W=${g},TP=${w},TY=${m},CN=${I};
    var CW=${M};
    var TOPIC_CAT=${JSON.stringify(E)};
    var TOPIC_PROMPT=${JSON.stringify(_).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(K).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify($).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Me)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${ee}',COMP='${ue}';
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
      var te=document.getElementById('${p}-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_${p}SetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('${p}-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_${p}CntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_${p}CntyTog('"+c+"')")}).join(' ');
      var ve=document.getElementById('${p}-view-chips');if(ve)ve.innerHTML=chip('${o==="en"?"By Country":"국가별 함께"}',fView==='together',"_${p}SetView('together')")+' '+chip('${o==="en"?"Total":"국가 Total"}',fView==='total',"_${p}SetView('total')");
    }
    // 특정 토픽+국가+브랜드의 특정 주 값
    function val(topic,cnty,brand,wk){
      var r=D.find(function(x){return x.topic===topic&&x.country===cnty&&x.brand===brand&&x.type===fType});
      return r&&r.scores[wk]!=null?r.scores[wk]:null;
    }
    function lastVal(topic,cnty,brand){for(var i=W.length-1;i>=0;i--){var v=val(topic,cnty,brand,W[i]);if(v!=null)return v}return null}
    function lastOf(arr){if(!arr)return null;for(var i=arr.length-1;i>=0;i--){if(arr[i]!=null)return arr[i]}return null}
    // 토픽의 1위 경쟁사 (LG 제외) — TTL 최신값 최고, TTL 없으면 국가 최신값 최댓값
    function topCompFor(topic){
      var brands={};
      D.forEach(function(x){if(x.topic===topic&&x.type===fType&&x.brand&&x.brand!=='LG')brands[x.brand]=1});
      var best=null,bestV=-1;
      Object.keys(brands).forEach(function(b){
        var v=lastVal(topic,'TTL',b);
        if(v==null){CN.forEach(function(c){var cv=lastVal(topic,c,b);if(cv!=null&&(v==null||cv>v))v=cv})}
        if(v!=null&&v>bestV){bestV=v;best=b}
      });
      return best;
    }
    // 특정 국가의 1위 경쟁사 (LG 제외) — 그 국가 최신값 최댓값
    function topCompForCnty(topic,cnty){
      var brands={};
      D.forEach(function(x){if(x.topic===topic&&x.type===fType&&x.country===cnty&&x.brand&&x.brand!=='LG')brands[x.brand]=1});
      var best=null,bestV=-1;
      Object.keys(brands).forEach(function(b){
        var v=lastVal(topic,cnty,b);
        if(v!=null&&v>bestV){bestV=v;best=b}
      });
      return best;
    }
    // 경쟁비(%) 색상 — lead≥100 / behind≥80 / critical<80
    function ratioColor(r){return r==null?'#CBD5E1':r>=100?'#15803D':r>=80?'#B45309':'#BE123C'}
    // ── 표1: TTL 전체 브랜드 표 + 1위 경쟁사 경쟁비 행 ──
    function buildT1(brands,chartData,comp,tblW){
      var h='<table style="border-collapse:collapse;table-layout:fixed;width:'+(240+tblW)+'px">';
      h+='<colgroup><col style="width:240px">';W.forEach(function(){h+='<col style="width:'+CW+'px">'});h+='</colgroup>';
      h+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:17px;color:#94A3B8;font-weight:600">Brand</th>';
      W.forEach(function(wk){h+='<th style="text-align:center;padding:5px 0;font-size:17px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
      h+='</tr>';
      brands.forEach(function(b,i){
        var c=bc(b,i);var isLG=b==='LG';
        h+='<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 8px;font-size:17px;font-weight:'+(isLG?700:500)+';color:'+c+';white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>';
        W.forEach(function(wk,wi){var v=chartData[b][wi];h+='<td style="text-align:center;padding:5px 0;font-size:17px;color:'+(v!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
        h+='</tr>';
      });
      var compName=comp||'${o==="en"?"N/A":"없음"}';
      h+='<tr style="background:#F8FAFC;border-top:2px solid #E8EDF2"><td style="padding:5px 8px;font-size:15px;font-weight:700;color:#BE123C;white-space:nowrap">${o==="en"?"#1 Competitor":"1위 경쟁사"} ('+compName+')</td>';
      W.forEach(function(wk,wi){
        var lgv=chartData.LG?chartData.LG[wi]:null;
        var cv=comp&&chartData[comp]?chartData[comp][wi]:null;
        var rn=(lgv!=null&&cv!=null&&cv>0)?Math.round(lgv/cv*100):null;
        h+='<td style="text-align:center;padding:5px 0;font-variant-numeric:tabular-nums">'+(cv!=null?'<div style="font-size:16px;font-weight:700;color:#475569">'+cv.toFixed(1)+'%</div>':'<div style="font-size:16px;color:#CBD5E1">—</div>')+(rn!=null?'<div style="font-size:12px;font-weight:600;color:'+ratioColor(rn)+'">('+rn+'%)</div>':'')+'</td>';
      });
      h+='</tr></table>';
      return h;
    }
    // ── 표2: 국가별 — 각 국가의 1위 경쟁사 대비 경쟁비 ──
    function buildT2(topic,ac,tblW){
      var rows='';
      ac.forEach(function(cn){
        var hasLG=D.some(function(r){return r.topic===topic&&r.country===cn&&r.brand==='LG'&&r.type===fType});
        if(!hasLG)return;
        var cnComp=topCompForCnty(topic,cn);
        var label=cf(cn)+(cnComp?' <span style="color:#94A3B8;font-weight:500">('+cnComp+')</span>':'');
        var cells=W.map(function(wk){
          var lgv=val(topic,cn,'LG',wk);
          var cv=cnComp?val(topic,cn,cnComp,wk):null;
          var rn=(lgv!=null&&cv!=null&&cv>0)?Math.round(lgv/cv*100):null;
          return'<td style="width:'+CW+'px;text-align:center;padding:5px 0;font-variant-numeric:tabular-nums">'+(lgv!=null?'<div style="font-size:16px;font-weight:600;color:#1A1A1A">'+lgv.toFixed(1)+'%</div>':'<div style="font-size:16px;color:#CBD5E1">—</div>')+(rn!=null?'<div style="font-size:12px;font-weight:600;color:'+ratioColor(rn)+'">('+rn+'%)</div>':'')+'</td>';
        }).join('');
        rows+='<tr style="border-top:1px solid #F1F5F9"><td style="padding:5px 8px;font-size:16px;font-weight:600;color:#64748B;white-space:nowrap">'+label+'</td>'+cells+'</tr>';
      });
      if(!rows)return'';
      var h='<table style="border-collapse:collapse;table-layout:fixed;width:'+(240+tblW)+'px">';
      h+='<colgroup><col style="width:240px">';W.forEach(function(){h+='<col style="width:'+CW+'px">'});h+='</colgroup>';
      h+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:15px;color:#94A3B8;font-weight:600">${o==="en"?"Country (vs #1)":"국가 (1위 경쟁사)"}</th>';
      W.forEach(function(wk){h+='<th style="text-align:center;padding:5px 0;font-size:15px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
      h+='</tr>'+rows+'</table>';
      return h;
    }
    // ── 상단 매트릭스: PR Topic List 시트 전용 ──
    // PR Topic List의 토픽만 행으로 사용. 기존 토픽(oldTopic)으로 Weekly PR 데이터 JOIN.
    function renderMatrix(){
      var el=document.getElementById('${p}-matrix');if(!el)return;
      if(!_prTopicList||!_prTopicList.length){el.innerHTML='<p style="text-align:center;color:#94A3B8;padding:20px">PR Topic List 시트를 동기화해주세요.</p>';return}
      var lastW=W[W.length-1];
      var ac=CN.filter(function(c){return fCnty[c]});
      var cols=['TTL'].concat(ac);
      var h='<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%">';
      h+='<thead><tr><th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;width:60px">BU</th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:120px">${o==="en"?"Topic":"토픽"} <span style="font-weight:400;color:#94A3B8">('+lastW+')</span></th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:140px">${o==="en"?"Description":"설명"}</th>';
      h+='<th style="padding:8px 10px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:80px">${o==="en"?"Competitor":"경쟁사"}</th>';
      cols.forEach(function(c){h+='<th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:56px">'+cf(c)+'</th>'});
      h+='</tr></thead><tbody>';
      var prevBU='';
      _prTopicList.forEach(function(row,idx){
        var bu=row.bu||'';
        var isNewBU=bu&&bu!==prevBU;
        var buCount=0;
        if(isNewBU){_prTopicList.forEach(function(r){if(r.bu===bu)buCount++})}
        var dataKey=(row.topicRow||'').trim();
        var comp=topCompFor(dataKey);
        h+='<tr style="border-bottom:1px solid #F1F5F9;'+(isNewBU&&idx>0?'border-top:2px solid #CBD5E1;':'')+'">';
        if(isNewBU){
          h+='<td rowspan="'+buCount+'" style="padding:6px 8px;font-size:15px;font-weight:700;color:#475569;vertical-align:middle;text-align:center;border-right:2px solid #E8EDF2;background:#F8FAFC;line-height:1.4;word-break:keep-all">'+bu+'</td>';
          prevBU=bu;
        }
        h+='<td style="padding:6px 10px;font-size:16px;font-weight:600;color:#1A1A1A">'+row.topic+'</td>';
        h+='<td style="padding:6px 10px;font-size:14px;color:#64748B;line-height:1.4">'+((row.explanation||''))+'</td>';
        h+='<td style="padding:6px 10px;font-size:15px;font-weight:600;color:#475569;white-space:nowrap;text-align:center">'+(comp||'—')+'</td>';
        cols.forEach(function(cnty){
          var lg=lastVal(dataKey,cnty,'LG');
          var ss=comp?lastVal(dataKey,cnty,comp):null;
          var s=tl(lg,ss);
          var ratio=(lg!=null&&ss!=null&&ss>0)?Math.round(lg/ss*100)+'%':'';
          h+='<td style="padding:4px 6px;text-align:center;background:'+s.bg+';color:'+s.color+';font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;border:1px solid '+s.border+'">'+(lg!=null?lg.toFixed(1)+'%':'—')+(ratio?'<div style="font-size:13px;font-weight:400;color:#64748B">('+ratio+')</div>':'')+'</td>';
        });
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
      var el=document.getElementById('${p}-sections');if(!el)return;
      var N=W.length;var tblW=CW*N;var html='';
      // PR Topic List의 Topic-row(topicRow)로 데이터 매칭, 대시보드 토픽명으로 표시
      var sectionTopics=[];
      if(_prTopicList&&_prTopicList.length){
        _prTopicList.forEach(function(t){if(t.topicRow&&t.topicRow.trim())sectionTopics.push({key:t.topicRow.trim(),name:t.topic||t.topicRow.trim()})});
      }
      if(!sectionTopics.length)TP.forEach(function(t){sectionTopics.push({key:t,name:t})});
      var bottomGroups='';  // fView==='total' 일 때 표2(국가별)를 하단에 모음
      var ac=CN.filter(function(c){return fCnty[c]});
      sectionTopics.forEach(function(st0){
        var topic=st0.key;var topicName=st0.name;
        var ttl=D.filter(function(r){return r.topic===topic&&r.country==='TTL'&&r.type===fType});
        if(!ttl.length)return;
        var brandMap={};
        ttl.forEach(function(r){if(!brandMap[r.brand])brandMap[r.brand]={}; W.forEach(function(wk){if(r.scores[wk]!=null){brandMap[r.brand][wk]=r.scores[wk]}})});
        var brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
        var chartData={};
        brands.forEach(function(b){chartData[b]=W.map(function(wk){return brandMap[b][wk]!=null?brandMap[b][wk]:null})});
        var lgLast=chartData.LG?chartData.LG[N-1]:null;
        var comp=topCompFor(topic);
        var ssLast=comp&&chartData[comp]?lastOf(chartData[comp]):null;
        var st=tl(lgLast,ssLast);
        var legend=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:10px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+'"></i><span style="font-size:15px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'}).join('');
        var t1=buildT1(brands,chartData,comp,tblW);
        var t2=buildT2(topic,ac,tblW);

        html+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:20px;overflow:hidden">';
        // 헤더
        html+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        html+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        html+='<span style="font-size:21px;font-weight:700;color:#1A1A1A">'+topicName+'</span>';
        var tpPrompt=TOPIC_PROMPT[topic]||'';
        if(tpPrompt)html+='<span style="font-size:18px;color:#64748B;font-weight:500;font-style:italic;max-width:700px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"'+tpPrompt+'"</span>';
        if(st.label!=='—')html+='<span style="font-size:17px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lgLast!=null)html+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">LG '+lgLast.toFixed(1)+'%</span>';
        if(ssLast!=null&&comp)html+='<span style="font-size:17px;color:#94A3B8">vs '+comp+' '+ssLast.toFixed(1)+'%</span>';
        html+='<span style="margin-left:auto">'+legend+'</span></div>';
        // 차트 + 표1 (TTL 전체)
        html+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:240px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(chartData,tblW,160)+'</div></div>';
        html+='<div style="font-size:14px;font-weight:700;color:#64748B;margin:4px 0 2px">${o==="en"?"Overall (TTL)":"전체 (TTL)"}</div>';
        html+=t1;
        // 표2 (국가별) — 국가별 함께 보기일 때만 토픽 안에 표시
        if(fView==='together'&&t2){
          html+='<div style="font-size:14px;font-weight:700;color:#64748B;margin:24px 0 2px">${o==="en"?"By Country (vs #1 ratio)":"국가별 (1위 경쟁사 경쟁비)"}</div>';
          html+=t2;
        }
        html+='</div></div>';
        // 국가 Total 보기일 때 — 표2를 하단에 모음
        if(fView==='total'&&t2){
          bottomGroups+='<div style="margin-bottom:16px"><div style="font-size:17px;font-weight:700;color:#1A1A1A;margin-bottom:6px"><span style="display:inline-block;width:4px;height:16px;border-radius:4px;background:'+RED+';vertical-align:-2px;margin-right:6px"></span>'+topicName+'</div><div style="overflow-x:auto">'+t2+'</div></div>';
        }
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${o==="en"?"No data":"데이터 없음"}</div>';
      if(fView==='total'&&bottomGroups){
        html+='<div style="border-top:3px solid #E8EDF2;margin-top:8px;padding-top:18px"><div style="font-size:19px;font-weight:700;color:#1A1A1A;margin-bottom:14px">${o==="en"?"By Country — #1 Competitor Ratio (gathered)":"국가별 — 1위 경쟁사 경쟁비 (모아보기)"}</div>'+bottomGroups+'</div>';
      }
      el.innerHTML=html;
    }
    function renderAll(){renderFilters();renderMatrix();renderSections()}
    window._${p}SetType=function(t){fType=t;renderAll()};
    window._${p}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${p}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    window._${p}SetView=function(v){fView=v;renderAll()};
    renderAll();
  })();
  <\/script>`}function Mo(t,e,o,i,a,n){const c=(t||[]).filter(b=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=e&&e.length?e.slice(-12):[],x=[...new Set(c.map(b=>b.stakeholder))].filter(Boolean).map(b=>({stakeholder:b,topics:[...new Set(c.filter(g=>g.stakeholder===b).map(g=>g.topic))].filter(Boolean)})),f=72,d=JSON.stringify(c).replace(/</g,"\\u003c"),h=JSON.stringify(s),u=JSON.stringify(x),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Yt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${s.length?`${s[0].toUpperCase()}–${s[s.length-1].toUpperCase()} (${s.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${ee};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${h},GROUPS=${u};
    var CW=${f},RED='${ee}';
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
  <\/script>`}function Kr(t,e,o,i,a,n,c,s,p,x,f,d,h,u){var bt,St,Ct;h!=null&&h.llmModel&&h.llmModel!=="Total"&&(o=Ho(o,h.llmModel),c=Wo(c,h.llmModel),e=Vo(e,h.monthlyVis,h.llmModel),h.monthlyVis&&(h={...h,monthlyVis:En(h.monthlyVis,h.llmModel)})),o=(o||[]).map(W=>({...W,weekly:(W.weekly||[]).map(z=>z??0),monthly:(W.monthly||[]).map(z=>z??0)})),x&&typeof x=="object"&&Object.values(x).forEach(W=>{!W||typeof W!="object"||Object.values(W).forEach(z=>{!z||typeof z!="object"||Object.keys(z).forEach(O=>{const it=z[O];Array.isArray(it)&&(z[O]=it.map(Ft=>Ft??0))})})});const C={aircare:"Xiaomi"};o=o.map(W=>{const z=C[(W.id||"").toLowerCase()];if(!z||!W.allScores)return W;const O=Object.entries(W.allScores).find(([Tt])=>Tt.toLowerCase()===z.toLowerCase()&&Tt.toLowerCase()!=="lg");if(!O)return W;const it=O[1];if(!(it>0))return W;const Ft=Math.round(W.score/it*100);return{...W,compName:O[0],vsComp:it,compRatio:Ft,status:Ft>=100?"lead":Ft>=80?"behind":"critical"}});const b=(h==null?void 0:h.visibilityOnly)||!1,g=(h==null?void 0:h.includePromptList)||!1,w=(h==null?void 0:h.includeReadability)===!0,m=(u==null?void 0:u.unlaunchedMap)||{},M=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,P=Pe[n]||Pe.ko;let _;if(p&&p.length)_=p.map(W=>String(W).toUpperCase().startsWith("W")?W.toUpperCase():W);else{const W=x?Math.max(...Object.values(x).flatMap(O=>Object.values(O).flatMap(it=>Object.values(it).map(Ft=>(Ft==null?void 0:Ft.length)||0))),0):0,z=t.weekStart||Math.max(1,W-11);_=Array.from({length:Math.max(12,W)},(O,it)=>`W${z+it}`)}const $=new Set;x&&Object.values(x).forEach(W=>Object.keys(W).forEach(z=>{z!=="Total"&&$.add(z)})),c&&c.forEach(W=>{W.country&&W.country!=="TTL"&&$.add(W.country)});const D=[...$].sort(),U=n==="en"?"All":"전체",B=["MS","HS","ES"],K=o.map(W=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${W.bu}" value="${W.id}" checked onchange="onFilterChange()"><span>${W.kr}</span></label>`).join(""),E=B.map(W=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${W}" checked onchange="onBuChange('${W}')"><span>${W}</span></label>`).join(""),S=D.map(W=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${W}" checked onchange="onFilterChange()"><span>${Qe(W)}</span></label>`).join(""),G=Object.entries(Ze).map(([W,z])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${W}" checked onchange="onRegionChange('${W}')"><span>${z.labelEn}</span></label>`).join(""),N=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,J=h!=null&&h.weeklyLabelsFull&&h.weeklyLabelsFull.length===_.length?h.weeklyLabelsFull:_,nt=_.map((W,z)=>`<option value="${z}"${z===_.length-1?" selected":""}>${J[z]||W}</option>`).join(""),q=(((bt=o[0])==null?void 0:bt.monthlyScores)||[]).map(W=>{const z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],O=String(W.date).match(/(\d{1,2})월/),it=String(W.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return O?z[parseInt(O[1])-1]:it?it[1].charAt(0).toUpperCase()+it[1].slice(1).toLowerCase():W.date}),v=q.map((W,z)=>`<option value="${z}"${z===q.length-1?" selected":""}>${W}</option>`).join(""),H=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Yt}`,F=new Set(["Total"]);(o||[]).forEach(W=>(W.monthlyScores||[]).forEach(z=>Object.keys(z.byLlm||{}).forEach(O=>F.add(O)))),(c||[]).forEach(W=>(W.monthlyScores||[]).forEach(z=>Object.keys(z.byLlm||{}).forEach(O=>F.add(O)))),((h==null?void 0:h.monthlyVis)||[]).forEach(W=>{W.llmModel&&F.add(W.llmModel)});const Y=["Total",...Array.from(F).filter(W=>W!=="Total").sort((W,z)=>W.localeCompare(z))],V=(h==null?void 0:h.llmModel)||"Total",k=Y.map(W=>`<option value="${W}"${W===V?" selected":""}>${W}</option>`).join(""),T=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${N}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${_[_.length-1]} ${n==="en"?"data":"기준"}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"View":"조회"}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodPage('weekly')">${n==="en"?"Weekly":"주간"}</button>
          <button class="trend-tab" onclick="switchPeriodPage('monthly')">${n==="en"?"Monthly":"월간"}</button>
        </div>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group" id="vis-week-select-group"${_.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${H}">${nt}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${H}"${q.length>0?"":" disabled"}>${v||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${H};opacity:0.55;cursor:not-allowed" disabled>${k}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${U}</span></label>
        ${E}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${U}</span></label>
        ${K}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${U}</span></label>
        ${G}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${U}</span></label>
        ${S}
      </div>
    </div>
  </div>`,A=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Ir(t.noticeText)}</div></div>`:"",Q=[A,t.showTotal!==!1?$o(e,t,P,n,"weekly"):""].join(""),X=[A,t.showTotal!==!1?$o(e,t,P,n,"monthly"):""].join(""),lt=[];if(x&&Object.keys(x).length){const W=Re;Object.entries(x).forEach(([z,O])=>{const it=o.find(Tt=>Tt.id===z),Ft=(it==null?void 0:it.kr)||W[z]||z;Object.entries(O).forEach(([Tt,jt])=>{if(Tt==="Total"||Tt==="TTL"||Tt==="TOTAL")return;const Vt=jt.LG||jt.lg||[],Zt=Vt.length>0?Vt[Vt.length-1]:0;if(Zt<=0)return;let Gt="",Kt=0;Object.entries(jt).forEach(([_t,Dt])=>{if(_t==="LG"||_t==="lg")return;const qt=Array.isArray(Dt)&&Dt.length?Dt[Dt.length-1]:0;qt>Kt&&(Kt=qt,Gt=_t)});const oe=+(Zt-Kt).toFixed(1),ne={};Object.entries(jt).forEach(([_t,Dt])=>{if(Array.isArray(Dt)&&Dt.length){const qt=Dt[Dt.length-1];qt!=null&&(ne[_t]=qt)}}),lt.push({product:Ft,country:Tt,score:Zt,compName:Gt,compScore:Kt,gap:oe,allScores:ne})})})}const yt=((St=h==null?void 0:h.weeklyLabelsFull)==null?void 0:St[h.weeklyLabelsFull.length-1])||_[_.length-1]||"",vt=yt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${yt} ${n==="en"?"data":"기준"}</span>`:"",kt=[Q,t.showProducts!==!1?Bo(o,t,P,n,_,m,(h==null?void 0:h.monthlyVis)||[],x,vt):"",`<div id="trend-container">${Ur(o,x,_,P,n,m,vt)}</div>`,t.showCnty!==!1?jo(lt,t,P,n,m,vt):""].join(""),j=o.map(W=>{const z=W.monthlyScore||W.score,O=W.monthlyPrev||W.prev,it=W.vsComp||0,Ft=it>0?z/it*100:100;return{...W,score:z,prev:O,weeklyScore:z,weeklyPrev:O,monthlyScore:z,monthlyPrev:O,weekly:(W.monthlyScores||[]).map(Tt=>Tt.score),status:Ft>=100?"lead":Ft>=80?"behind":"critical"}}),Z=(((Ct=o[0])==null?void 0:Ct.monthlyScores)||[]).map(W=>{const z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],O=String(W.date).match(/(\d{1,2})월/),it=String(W.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return O?z[parseInt(O[1])-1]:it?it[1].charAt(0).toUpperCase()+it[1].slice(1).toLowerCase():W.date}),et=(h==null?void 0:h.monthlyVis)||[],dt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",gt=[X,t.showProducts!==!1?Bo(j,t,P,n,Z.length?Z:["Feb","Mar"],m,et,{},dt):"",`<div id="monthly-trend-container">${Hr(j,et,P,n,m,dt)}</div>`,t.showCnty!==!1?jo(c,t,P,n,m,dt):""].join(""),wt=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${Yt}`,Lt=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${wt};background:#fff;color:#0F172A">${n==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${wt};background:transparent;color:#94A3B8">${n==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Po(u==null?void 0:u.weeklyPR,u==null?void 0:u.weeklyPRLabels,n,t,u==null?void 0:u.appendixPrompts,u)}</div>
    <div id="pr-period-monthly" style="display:none">${Po(u==null?void 0:u.monthlyPR,u==null?void 0:u.monthlyPRLabels,n,t,u==null?void 0:u.appendixPrompts,u,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${$r({FONT:Yt,RED:ee,COMP:ue})}</style>
</head>
<body>
${b?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${T.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${kt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${gt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Lt}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Mo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${w?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${g?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
    <button class="tab-btn" onclick="switchTab('glossary')">Glossary</button>
  </div>
  <div id="lang-toggle" style="display:flex;gap:2px;background:#1E293B;border-radius:6px;padding:2px">
    <button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button>
    <button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button>
  </div>
</div>
<div id="gnb-visibility" class="gnb-sub active">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="gnb-citation" class="gnb-sub">
  <button class="gnb-sub-btn active" onclick="switchCitSub('touchpoint')">${n==="en"?"Touch Points":"외부접점채널"}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('dotcom')">${n==="en"?"Dotcom":"닷컴"}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('llm-compare')">${n==="en"?"LLM Compare":"LLM 모델별 비교"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${T}
    <div id="bu-weekly-content" class="dash-container">${kt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${gt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Lt}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Mo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
  <div id="cit-sub-llm-compare" style="display:none">
    <iframe id="cit-iframe-llm" data-src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=llm-compare" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - LLM Compare"></iframe>
  </div>
</div>
${w?`<div id="tab-readability" class="tab-panel">
  <!--READABILITY_EMBED-->
  <iframe id="readability-iframe" data-src="/p/GEO-KPI-Dashboard-${n==="en"?"EN":"KO"}-readability" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Readability"></iframe>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${M}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Vr(u==null?void 0:u.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Wr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${P.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Or({lang:n,weeklyAll:x,products:o,productsCnty:c,ulMap:m,monthlyVis:h==null?void 0:h.monthlyVis,total:e,meta:t,wLabels:_})}
<\/script>
</body>
</html>`}function qr(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),i=t.filter(p=>p.status==="critical"),a=[...t].sort((p,x)=>x.score-p.score)[0],n=[...t].sort((p,x)=>p.score-x.score)[0],c=(t.reduce((p,x)=>p+x.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&s.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(a.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?s.push(`취약 카테고리(${i.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Jr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Yr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const mt=Rt,Xr={citation:[mt.meta,mt.citTouchPoints,mt.citDomain,mt.citPageType],"weekly-report":[mt.meta,mt.visSummary,mt.citTouchPoints,mt.citPageType,mt.productMS,mt.productHS,mt.productES,mt.weeklyMS,mt.weeklyHS,mt.weeklyES],"monthly-report":[mt.meta,mt.visSummary,mt.citTouchPoints,mt.citPageType,mt.productMS,mt.productHS,mt.productES,mt.weeklyMS,mt.weeklyHS,mt.weeklyES],dashboard:[mt.meta,mt.visSummary,mt.citTouchPoints,mt.citDomain,mt.citPageType,mt.productMS,mt.productHS,mt.productES,mt.weeklyMS,mt.weeklyHS,mt.weeklyES,mt.monthlyPR,mt.weeklyPR,mt.weeklyBrandPrompt,mt.appendix,mt.unlaunched,mt.prTopicList],newsletter:[mt.meta,mt.visSummary,mt.citTouchPoints,mt.citDomain,mt.citPageType,mt.productMS,mt.productHS,mt.productES,mt.weeklyMS,mt.weeklyHS,mt.weeklyES,mt.unlaunched]};function Zr(t){return Xr[t]||[]}const Do="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Qr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ti({url:t,downloadName:e="sheet",mode:o}){const[i,a]=st.useState(!1),[n,c]=st.useState(""),s=o?Zr(o):[],p=s.length?"zip":"xlsx",x=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function f(){const d=Qr(t);if(!d){c("ERROR: 동기화 URL 비어있거나 잘못됨");return}a(!0),c("");try{const h=new URLSearchParams({id:d,name:e});s.length&&h.set("tabs",s.join(","));const u=await fetch(`/api/sheet-download?${h.toString()}`,{credentials:"include"});if(!u.ok){const g=await u.text().catch(()=>"");let w=g;try{const m=JSON.parse(g);w=m.error||m.detail||g}catch{}throw new Error(`(${u.status}) ${w}`)}const C=await u.blob(),b=document.createElement("a");b.href=URL.createObjectURL(C),b.download=`${e}.${p}`,document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(b.href),1e3),c("다운로드 완료")}catch(h){c("ERROR: "+(h.message||String(h)))}finally{a(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:f,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Do,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":x}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Do,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function ei({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:n,setMetaEn:c,total:s,setTotal:p,products:x,setProducts:f,citations:d,setCitations:h,dotcom:u,setDotcom:C,productsCnty:b,setProductsCnty:g,citationsCnty:w,setCitationsCnty:m,resolved:I,previewLang:M,setPreviewLang:P,snapshots:_,setSnapshots:$,setWeeklyLabels:D,setWeeklyAll:U,weeklyLabels:B,weeklyAll:K,citationsByCnty:E,dotcomByCnty:S,generateHTML:G,publishEndpoint:N,setMonthlyVis:J,onSyncExtra:nt,categoryStats:q,extra:v,monthlyVis:H,progressMonth:F,setProgressMonth:Y,progressDataMonth:V}){const k=st.useRef({products:x,productsCnty:b,citations:d,citationsCnty:w,total:s,dotcom:u,extra:v});k.current={products:x,productsCnty:b,citations:d,citationsCnty:w,total:s,dotcom:u,extra:v};function T(){return k.current}const[A,Q]=st.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[X,lt]=st.useState(!1),[yt,vt]=st.useState(null),[kt,j]=st.useState(""),[Z,et]=st.useState(""),[dt,gt]=st.useState(!1),[wt,Lt]=st.useState(""),[bt,St]=st.useState(!1),[Ct,W]=st.useState(!1),[z,O]=st.useState(!1),[it,Ft]=st.useState(!1),[Tt,jt]=st.useState(""),[Vt,Zt]=st.useState(!1),[Gt,Kt]=st.useState(!0),[oe,ne]=st.useState(""),[_t,Dt]=st.useState(null),[qt,ze]=st.useState([]),Ut=t==="newsletter",[Qt,Ge]=st.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function Ue(){Ut&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&ze(l.months)}).catch(()=>{})}st.useEffect(()=>{if(Ut){Ue();return}fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(y=>y.ok?y.json():null).then(Dt).catch(()=>{})},[t,N,Ut]);const nn=(()=>{const l=new Set,y=new Date;for(let ot=0;ot<24;ot++){const $t=new Date(y.getFullYear(),y.getMonth()-ot,1);l.add(`${$t.getFullYear()}-${String($t.getMonth()+1).padStart(2,"0")}`)}for(const ot of qt)l.add(ot.month);return Qt&&l.add(Qt),[...l].sort((ot,$t)=>$t.localeCompare(ot))})();function Te(l){const[y,ot]=l.split("-");return`${y}년 ${parseInt(ot,10)}월`}const[rn,io]=st.useState(null);st.useEffect(()=>{let l=!0;const y=()=>bo(t).then($t=>{l&&io($t)});y();const ot=setInterval(y,6e4);return()=>{l=!1,clearInterval(ot)}},[t]);function an(){bo(t).then(io)}async function sn(){if(!it){Ft(!0),jt("");try{const l=T(),y=Be(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),ot=Be(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let $t,zt,at;if(t==="dashboard"){const rt=H||[],ft=l.extra||v||{};$t=G(i,l.total,y.products,y.citations,l.dotcom,"ko",y.productsCnty,y.citationsCnty,B,K,E,S,rt,ft),zt=G(n,l.total,ot.products,ot.citations,l.dotcom,"en",ot.productsCnty,ot.citationsCnty,B,K,E,S,rt,ft),at=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else $t=G(i,l.total,y.products,y.citations,u,"ko",y.productsCnty,y.citationsCnty,{weeklyLabels:B,categoryStats:q,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),zt=G(n,l.total,ot.products,ot.citations,u,"en",ot.productsCnty,ot.citationsCnty,{weeklyLabels:B,categoryStats:q,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),at=`${i.period||""} ${i.title||"Newsletter"}`.trim();const se=N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),R={title:at,htmlKo:$t,htmlEn:zt};Ut&&(R.month=Qt);const Ot=await(await fetch(se,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(R)})).json();if(!Ot.ok)throw new Error(Ot.error||"게시 실패");if(Dt({...Ot,published:!0}),Ut&&Ue(),t==="dashboard")try{const rt=await je(t)||{},ft=l.extra||v||{};xo(t,{...rt,meta:i,total:l.total,weeklyPR:ft.weeklyPR||rt.weeklyPR,weeklyPRLabels:ft.weeklyPRLabels||rt.weeklyPRLabels,monthlyPR:ft.monthlyPR||rt.monthlyPR,monthlyPRLabels:ft.monthlyPRLabels||rt.monthlyPRLabels,weeklyBrandPrompt:ft.weeklyBrandPrompt||rt.weeklyBrandPrompt,weeklyBrandPromptLabels:ft.weeklyBrandPromptLabels||rt.weeklyBrandPromptLabels,appendixPrompts:ft.appendixPrompts||rt.appendixPrompts})}catch{}const Ht=`${window.location.origin}${Ot.urls.ko}`,tt=`${window.location.origin}${Ot.urls.en}`;try{await navigator.clipboard.writeText(Ht+`
`+tt)}catch{}jt(`KO: ${Ht}
EN: ${tt}`)}catch(l){jt("ERROR:"+l.message)}finally{Ft(!1),setTimeout(()=>jt(""),2e4)}}}async function ln(){if(!Vt){Zt(!0),ne("");try{const l=await Zn(Kr,Be,{includeProgressTracker:Gt});ne(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){ne("ERROR: "+l.message)}finally{Zt(!1),setTimeout(()=>ne(""),15e3)}}}async function ao(l){try{const y=N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),ot=Ut?`${y}?month=${encodeURIComponent(l||Qt)}`:y;(await(await fetch(ot,{method:"DELETE"})).json()).ok&&(Ut?Ue():Dt(null))}catch{}}async function cn(){if(M!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}W(!0)}async function so(l){W(!1),O(!0);const y=(l==null?void 0:l.products)??x,ot=(l==null?void 0:l.productsCnty)??b,$t=(l==null?void 0:l.citations)??d,zt=(l==null?void 0:l.citationsCnty)??w;try{const at=i,se=[at.title||"",at.dateLine||"",at.noticeText||"",at.totalInsight||"",at.reportType||"",at.productInsight||"",at.productHowToRead||"",at.citationInsight||"",at.citationHowToRead||"",at.dotcomInsight||"",at.dotcomHowToRead||"",at.todoText||"",at.todoNotice||"",at.kpiLogicText||"",at.cntyInsight||"",at.cntyHowToRead||"",at.citDomainInsight||"",at.citDomainHowToRead||"",at.citCntyInsight||"",at.citCntyHowToRead||"",at.citPrdInsight||"",at.citPrdHowToRead||"",at.period||"",at.team||"",at.reportNo||"",at.monthlyReportBody||""],R=y.map(ht=>ht.kr||""),re=y.map(ht=>ht.compName||""),Ot=$t.map(ht=>ht.category||""),Ht=[...new Set(ot.map(ht=>ht.country||""))],tt=[...new Set(ot.map(ht=>ht.product||""))],rt=[...new Set(ot.map(ht=>ht.compName||""))],ft=[...new Set(zt.map(ht=>ht.cnty||"").filter(ht=>ht&&ht!=="TTL"))],At=[...se,...R,...re,...Ot,...Ht,...tt,...rt,...ft].map(ht=>ht||" "),ut=await tr(At,{from:"ko",to:"en"});let ct=0;const le={...i,title:ut[ct++]||at.title,dateLine:ut[ct++]||at.dateLine,noticeText:ut[ct++]||at.noticeText,totalInsight:ut[ct++]||at.totalInsight,reportType:ut[ct++]||at.reportType,productInsight:ut[ct++]||at.productInsight,productHowToRead:ut[ct++]||at.productHowToRead,citationInsight:ut[ct++]||at.citationInsight,citationHowToRead:ut[ct++]||at.citationHowToRead,dotcomInsight:ut[ct++]||at.dotcomInsight,dotcomHowToRead:ut[ct++]||at.dotcomHowToRead,todoText:ut[ct++]||at.todoText,todoNotice:ut[ct++]||at.todoNotice,kpiLogicText:ut[ct++]||at.kpiLogicText,cntyInsight:ut[ct++]||at.cntyInsight,cntyHowToRead:ut[ct++]||at.cntyHowToRead,citDomainInsight:ut[ct++]||at.citDomainInsight,citDomainHowToRead:ut[ct++]||at.citDomainHowToRead,citCntyInsight:ut[ct++]||at.citCntyInsight,citCntyHowToRead:ut[ct++]||at.citCntyHowToRead,citPrdInsight:ut[ct++]||at.citPrdInsight,citPrdHowToRead:ut[ct++]||at.citPrdHowToRead,period:(ct++,at.period),team:ut[ct++]||at.team,reportNo:(ct++,at.reportNo),monthlyReportBody:ut[ct++]||at.monthlyReportBody},Jt=ht=>ht&&ht.replace(/\b\w/g,xt=>xt.toUpperCase()),ie=ht=>(ht||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),de={};y.forEach((ht,xt)=>{de[ht.id]={en:Jt(ut[ct+xt]||ht.kr),compNameEn:ie(ut[ct+R.length+xt]||ht.compName)}}),ct+=R.length+re.length;const Xt={};$t.forEach((ht,xt)=>{Xt[`${ht.rank}_${ht.source}`]=Jt(ut[ct+xt]||ht.category)}),ct+=Ot.length;const fe={};Ht.forEach((ht,xt)=>{fe[ht]=/^[A-Z]{2,3}$/.test(ht)?ht:ut[ct+xt]||ht}),ct+=Ht.length;const Ee={};tt.forEach((ht,xt)=>{Ee[ht]=ut[ct+xt]||ht}),ct+=tt.length;const be={};rt.forEach((ht,xt)=>{be[ht]=ut[ct+xt]||ht}),ct+=rt.length;const xe={};ft.forEach((ht,xt)=>{xe[ht]=/^[A-Z]{2,3}$/.test(ht)?ht:ut[ct+xt]||ht}),c(le),f(ht=>ht.map(xt=>{var lo,co;return{...xt,en:((lo=de[xt.id])==null?void 0:lo.en)||xt.en||xt.kr,compNameEn:((co=de[xt.id])==null?void 0:co.compNameEn)||xt.compNameEn||xt.compName}})),h(ht=>ht.map(xt=>({...xt,categoryEn:Xt[`${xt.rank}_${xt.source}`]||xt.categoryEn||xt.category}))),g(ht=>ht.map(xt=>({...xt,countryEn:Jt(fe[xt.country]||xt.country),productEn:Jt(Ee[xt.product]||xt.product),compNameEn:ie(be[xt.compName]||xt.compName)}))),m(ht=>ht.map(xt=>({...xt,cntyEn:xt.cnty==="TTL"?"TTL":Jt(xe[xt.cnty]||xt.cnty)}))),O(!1)}catch(at){alert("번역 오류: "+at.message),O(!1)}}async function dn(){const l=G(e,s,I.products,I.citations,u,M,I.productsCnty,I.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const y=document.createElement("textarea");y.value=l,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}gt(!0),setTimeout(()=>gt(!1),2500)}async function pn(){await lr(e,s,x,d,u)}async function un(){if(bt!=="sending"){St("sending");try{const l=T(),y=G(e,l.total,l.products,l.citations,l.dotcom,M,l.productsCnty,l.citationsCnty,{weeklyLabels:B,categoryStats:q,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),ot=`[LG GEO] ${e.title} · ${e.period}`,zt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:wt.trim(),subject:ot,html:y})})).json();if(!zt.ok)throw new Error(zt.error||"발송 실패");St("ok"),setTimeout(()=>St(!1),4e3)}catch(l){St("error"),j(l.message),setTimeout(()=>{St(!1),j("")},5e3)}}}async function hn(){var ot,$t,zt,at,se;if(X)return;const l=Fr(A.trim());if(!l){vt("error"),j("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>vt(null),3e3);return}lt(!0),vt(null),j(""),et("");const y=[];try{const R=await Er(l,tt=>j(tt));if(y.push(`[Sync] parsed keys: ${Object.keys(R).join(", ")||"(없음)"}`),R.meta&&y.push(`[Sync] meta keys: ${Object.keys(R.meta).join(", ")}`),R.productsPartial&&y.push(`[Sync] products: ${R.productsPartial.length}건`),y.push(`[Sync] citations: ${((ot=R.citations)==null?void 0:ot.length)??0}건`),y.push(`[Sync] citationsCnty: ${(($t=R.citationsCnty)==null?void 0:$t.length)??0}건`),y.push(`[Sync] dotcom: ${R.dotcom?"OK":"(없음)"}`),y.push(`[Sync] productsCnty: ${((zt=R.productsCnty)==null?void 0:zt.length)??0}건`),R.meta){const tt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(rt=>{const ft={...rt};for(const[At,ut]of Object.entries(R.meta))tt.includes(At)&&rt[At]||(ft[At]=ut);return ft}),c(rt=>({...rt,period:R.meta.period,dateLine:R.meta.dateLine,reportNo:R.meta.reportNo}))}if(R.citations&&(h(R.citations),k.current={...k.current,citations:R.citations}),R.dotcom&&(C(tt=>({...tt,...R.dotcom})),k.current={...k.current,dotcom:{...k.current.dotcom,...R.dotcom}}),R.productsCnty&&(g(R.productsCnty),k.current={...k.current,productsCnty:R.productsCnty}),R.citationsCnty&&(m(R.citationsCnty),k.current={...k.current,citationsCnty:R.citationsCnty}),R.monthlyVis&&J&&J(R.monthlyVis),nt){const tt={weeklyPR:R.weeklyPR||null,weeklyPRLabels:R.weeklyPRLabels||null,monthlyPR:R.monthlyPR||null,monthlyPRLabels:R.monthlyPRLabels||null,weeklyBrandPrompt:R.weeklyBrandPrompt||null,weeklyBrandPromptLabels:R.weeklyBrandPromptLabels||null,appendixPrompts:R.appendixPrompts||null,unlaunchedMap:R.unlaunchedMap||null,weeklyLabelsFull:R.weeklyLabelsFull||null,prTopicList:R.prTopicList||null,citTouchPointsTrend:R.citTouchPointsTrend||null,citTrendMonths:R.citTrendMonths||null,citDomainTrend:R.citDomainTrend||null,citDomainMonths:R.citDomainMonths||null,citTouchPointsByLlm:R.citTouchPointsByLlm||null,citDomainByLlm:R.citDomainByLlm||null};nt(tt),k.current={...k.current,extra:{...k.current.extra,...tt}}}const re=R.weeklyLabels||((at=R.meta)==null?void 0:at.weeklyLabels);console.log("[SYNC] weeklyLabels:",re,"weeklyLabelsFull:",R.weeklyLabelsFull),re&&re.length&&D(re),R.weeklyAll&&U(tt=>({...tt,...R.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(R));const Ot=R.weeklyMap?Object.keys(R.weeklyMap):[],Ht=((se=R.productsPartial)==null?void 0:se.map(tt=>tt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Ot.length?Ot:"NONE"),console.log("[SYNC] productsPartial IDs:",Ht.length?Ht:"NONE"),Ot.length&&Ht.length){const tt=Ht.filter(ft=>!Ot.includes(ft)),rt=Ot.filter(ft=>!Ht.includes(ft));tt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",tt),rt.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",rt),!tt.length&&!rt.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(R.productsPartial){const tt=R.productsPartial.map(rt=>{var be;const ft=((be=R.weeklyMap)==null?void 0:be[rt.id])||[],At=ft.filter(xe=>xe!=null&&xe>0),ut=rt.score,ct=rt.prev||0,le=rt.vsComp>0?Math.round(ut/rt.vsComp*100):100,Jt=At.length>0?At[At.length-1]:ut,ie=At.length>=5?At[At.length-5]:At[0]||0,de=ut,Xt=ct,fe=le,Ee=ct>0&&ct!==ut?[ct,ut]:[];return{...rt,score:de,prev:Xt,weekly:ft,monthly:Ee,weeklyScore:Jt,weeklyPrev:ie,monthlyScore:ut,monthlyPrev:ct,compRatio:fe,status:fe>=100?"lead":fe>=80?"behind":"critical"}});f(tt),k.current={...k.current,products:tt}}else R.weeklyMap&&f(tt=>tt.map(rt=>{var At;const ft=(At=R.weeklyMap)==null?void 0:At[rt.id];return ft?{...rt,weekly:ft}:rt}));if(R.total){const tt={...k.current.total,...R.total,...R.buTotals?{buTotals:R.buTotals}:{},...R.buTotalsPrev?{buTotalsPrev:R.buTotalsPrev}:{},...R.countryTotals?{countryTotals:R.countryTotals}:{},...R.countryTotalsPrev?{countryTotalsPrev:R.countryTotalsPrev}:{}};p(rt=>({...rt,...tt})),k.current={...k.current,total:tt}}{let tt=function(ct){if(!ct)return 0;const le=String(ct).trim(),Jt=le.match(/(\d{1,2})월/);if(Jt){const Xt=parseInt(Jt[1]);return Xt>=1&&Xt<=12?Xt:0}const ie=le.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ie)return At[ie[1].toLowerCase()]||0;const de=le.match(/\d{4}[-\/](\d{1,2})/);if(de){const Xt=parseInt(de[1]);return Xt>=1&&Xt<=12?Xt:0}return 0};const rt=new Date().getFullYear(),ft=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],At={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let ut=0;if(R.derivedPeriod){const ct=tt(R.derivedPeriod);ct>ut&&(ut=ct)}if(R.citDerivedPeriod){const ct=tt(R.citDerivedPeriod);ct>ut&&(ut=ct)}ut>0&&ut<=12&&(a(ct=>({...ct,period:`${rt}년 ${ut}월`})),c(ct=>({...ct,period:`${ft[ut]} ${rt}`})))}if(!R.total&&R.productsPartial&&R.productsPartial.length>0){const tt=R.productsPartial,rt=+(tt.reduce((At,ut)=>At+ut.score,0)/tt.length).toFixed(1),ft=+(tt.reduce((At,ut)=>At+(ut.vsComp||0),0)/tt.length).toFixed(1);p(At=>({...At,score:rt,vsComp:ft,rank:rt>=ft?1:2}))}if(setTimeout(()=>{xo(t,{meta:R.meta||null,total:R.total?{...R.total,...R.buTotals?{buTotals:R.buTotals}:{},...R.buTotalsPrev?{buTotalsPrev:R.buTotalsPrev}:{},...R.countryTotals?{countryTotals:R.countryTotals}:{},...R.countryTotalsPrev?{countryTotalsPrev:R.countryTotalsPrev}:{}}:null,productsPartial:R.productsPartial||null,weeklyMap:R.weeklyMap||null,weeklyLabels:R.weeklyLabels||null,weeklyLabelsFull:R.weeklyLabelsFull||null,weeklyAll:R.weeklyAll||null,citations:R.citations||null,dotcom:R.dotcom||null,productsCnty:R.productsCnty||null,citationsCnty:R.citationsCnty||null,citationsByCnty:R.citationsByCnty||null,dotcomByCnty:R.dotcomByCnty||null,appendixPrompts:R.appendixPrompts||null,unlaunchedMap:R.unlaunchedMap||null,prTopicList:R.prTopicList||null,monthlyVis:R.monthlyVis||null,weeklyPR:R.weeklyPR||null,weeklyPRLabels:R.weeklyPRLabels||null,monthlyPR:R.monthlyPR||null,monthlyPRLabels:R.monthlyPRLabels||null,weeklyBrandPrompt:R.weeklyBrandPrompt||null,weeklyBrandPromptLabels:R.weeklyBrandPromptLabels||null,monthlyBrandPrompt:R.monthlyBrandPrompt||null,monthlyBrandPromptLabels:R.monthlyBrandPromptLabels||null,dotcomTrend:R.dotcomTrend||null,dotcomTrendMonths:R.dotcomTrendMonths||null}),setTimeout(an,250)},100),et(y.join(`
`)),vt("ok"),j(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const tt={};R.productsPartial&&(tt.products=R.productsPartial.map(rt=>{var Jt;const ft=((Jt=R.weeklyMap)==null?void 0:Jt[rt.id])||[],At=rt.vsComp>0?rt.score/rt.vsComp*100:100,ut=ft.find(ie=>ie!=null&&ie>0),ct=rt.prev!=null&&rt.prev>0?rt.prev:ut||0,le=ct>0?[ct,rt.score]:[];return{...rt,prev:ct,weekly:ft,monthly:le,compRatio:Math.round(At),status:At>=100?"lead":At>=80?"behind":"critical"}})),R.productsCnty&&(tt.productsCnty=R.productsCnty),R.citations&&(tt.citations=R.citations),R.citationsCnty&&(tt.citationsCnty=R.citationsCnty);try{await so(tt)}catch{}j("동기화 + 번역 완료!")}}catch(R){y.push(`[ERROR] ${R.message}`),vt("error"),j(R.message),et(y.join(`
`))}finally{lt(!1),setTimeout(()=>{vt(null),j("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:Bt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Lr,{...rn||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:A,onChange:l=>Q(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Et,fontSize:11,padding:"7px 9px",marginBottom:8,color:A?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:hn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:X?"wait":"pointer",background:X?"#1E293B":Bt,fontSize:12,fontWeight:700,color:X?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(po,{size:13,style:{animation:X?"spin 1s linear infinite":"none"}}),X?"동기화 중...":"구글 시트 동기화"]}),(yt||X&&kt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:yt==="ok"?"#14532D":yt==="error"?"#450A0A":"#1E293B",color:yt==="ok"?"#86EFAC":yt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${yt==="ok"?"#22C55E33":yt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:kt}),Z&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Z,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Z).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ti,{url:A,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:cn,disabled:z,style:{width:"100%",padding:"9px 0",background:z?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:z?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:z?.6:1},children:[r.jsx(fn,{size:13})," ",z?"번역 중...":"AI 번역 (EN)"]}),Ct&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>W(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:so,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:pn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(mn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Ut&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"발행 월"}),r.jsx("select",{value:Qt,onChange:l=>Ge(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:nn.map(l=>r.jsxs("option",{value:l,children:[l," · ",Te(l),qt.find(y=>y.month===l)?" ✓ 게시됨":""]},l))})]}),Ut&&Y&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",V||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:F||"",onChange:l=>Y(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",V||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>r.jsx("option",{value:l,children:l},l))]}),F&&r.jsx("button",{onClick:()=>Y(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:sn,disabled:it,style:{width:"100%",padding:"9px 0",background:it?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:it?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:it?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(uo,{size:12}),it?"게시 중...":Ut?`${Te(Qt)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Gt,onChange:l=>Kt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:ln,disabled:Vt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Vt?"#1E293B":"#166534",color:Vt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:Vt?"wait":"pointer",marginBottom:6},children:[r.jsx(uo,{size:12}),Vt?"통합 게시 중...":"통합 대시보드 게시"]}),oe&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:oe.startsWith("ERROR")?"#450A0A":"#14532D",color:oe.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:oe.startsWith("ERROR:")?oe.slice(6):oe})]})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(ot=>ot.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const $t=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();$t.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+($t.error||""))}catch(ot){alert("아카이빙 실패: "+ot.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(gn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Tt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:Tt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Tt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Tt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Tt.startsWith("ERROR:")?Tt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(He,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[Tt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Ut&&(_t==null?void 0:_t.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>ao(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:_t.urls.ko},{label:"EN",url:_t.urls.en}].map(({label:l,url:y})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",y]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${y}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:_t.ts?new Date(_t.ts).toLocaleString("ko-KR"):""})]}),Ut&&qt.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",qt.length,")"]})}),qt.map(l=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L},children:Te(l.month)}),r.jsx("button",{onClick:()=>{confirm(`${Te(l.month)} 게시본을 삭제할까요?`)&&ao(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:y,url:ot})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:ot,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[y,": ",ot]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${ot}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},y)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(y=>({...y,reportType:l.target.value})),style:{...Et,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(y=>({...y,reportNo:l.target.value})),style:{...Et}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(y=>({...y,period:l.target.value})),style:{...Et}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(y=>({...y,title:l.target.value})),rows:4,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(y=>({...y,team:l.target.value})),style:{...Et,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(y=>({...y,dateLine:l.target.value})),style:{...Et,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(y=>({...y,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(y=>({...y,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(y=>({...y,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:Bt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(y=>({...y,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,y])=>r.jsx("button",{onClick:()=>o(ot=>({...ot,titleColor:l})),title:y,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showLlmShare",label:"모델별 인용비중"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:y})=>r.jsx("button",{onClick:()=>o(ot=>({...ot,[l]:!ot[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?Bt:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:y},l))}),(()=>{const l=tt=>String(tt||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),y=tt=>/brand/i.test(tt)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(tt)?"Brand":tt,ot=Array.isArray(v==null?void 0:v.citTrendMonths)?v.citTrendMonths:[],$t=ot.length?ot[ot.length-1]:null,zt=tt=>{if(!tt)return 0;if($t!=null&&tt[$t]!=null)return Number(tt[$t])||0;const rt=Object.values(tt).map(Number).filter(ft=>!isNaN(ft));return rt.length?rt[rt.length-1]:0},at=[],se=new Set,R=(tt,rt,ft)=>{tt&&!se.has(tt)&&(se.add(tt),at.push({value:tt,label:rt,score:ft}))};if(v!=null&&v.citTouchPointsTrend&&Object.entries(v.citTouchPointsTrend).forEach(([tt,rt])=>{const ft=y(tt);R(ft,ft,zt(rt))}),v!=null&&v.citDomainTrend){const tt=Object.entries(v.citDomainTrend).filter(([ft])=>ft.startsWith("TTL|"));(tt.length?tt:Object.entries(v.citDomainTrend)).forEach(([,ft])=>R(ft.domain,l(ft.domain),zt(ft.months)))}if(!at.length)return null;at.sort((tt,rt)=>rt.score-tt.score);const re=at.slice(0,10),Ot=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],Ht=tt=>o(rt=>{const ft=Array.isArray(rt.bumpHighlight)?rt.bumpHighlight:[];return{...rt,bumpHighlight:ft.includes(tt)?ft.filter(At=>At!==tt):[...ft,tt]}});return r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"범프차트 지적 요소 (색상 강조)"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:re.map(({value:tt,label:rt})=>{const ft=Ot.includes(tt);return r.jsx("button",{onClick:()=>Ht(tt),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:ft?Bt:"#1E293B",color:ft?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:rt},tt)})})]})})(),e.showLlmShare!==!1&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"인용비중 노출:"}),[5,10].map(l=>r.jsxs("button",{onClick:()=>o(y=>({...y,llmShareTopN:l})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:(e.llmShareTopN===5?5:10)===l?Bt:"#1E293B",color:(e.llmShareTopN===5?5:10)===l?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:["Top ",l]},l))]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?Bt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?Bt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?Bt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,monthlyReportBody:"⏳ AI 생성 중..."}));const y=await Mt("monthlyReportBody",{products:T().products,productsCnty:T().productsCnty,total:T().total,citations:T().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,monthlyReportBody:y}))}catch(y){console.error("[AI]",y),o(ot=>({...ot,monthlyReportBody:`[AI 실패: ${y.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(y=>({...y,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:L},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,totalInsight:"⏳ AI 생성 중..."}));const y=await Mt("totalInsight",{products:T().products,productsCnty:T().productsCnty,total:T().total,todoText:e.todoText||"",unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,totalInsight:y}))}catch(y){console.error("[AI]",y),o(ot=>({...ot,totalInsight:`[AI 실패: ${y.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(y=>({...y,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productInsight:"⏳ AI 생성 중..."}));const l=await Mt("product",{products:T().products,total:T().total},M);o(y=>({...y,productInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,productInsight:`[AI 실패: ${l.message}]

`+qr(T().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?Bt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(y=>({...y,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"제품별 GEO Visibility"},M);o(y=>({...y,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:Jr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?Bt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(y=>({...y,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,cntyInsight:"⏳ AI 생성 중..."}));const y=await Mt("cnty",{productsCnty:T().productsCnty,unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,cntyInsight:y}))}catch(y){console.error("[AI]",y),o(ot=>({...ot,cntyInsight:`[AI 실패: ${y.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?Bt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(y=>({...y,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"국가별 GEO Visibility"},M);o(y=>({...y,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:Yr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?Bt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(y=>({...y,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(y=>({...y,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(y=>({...y,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(y=>({...y,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(y=>({...y,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationInsight:"⏳ AI 생성 중..."}));const l=await Mt("citation",{citations:T().citations},M);o(y=>({...y,citationInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?Bt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(y=>({...y,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"Citation 도메인별 현황"},M);o(y=>({...y,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?Bt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(y=>({...y,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainInsight:"⏳ AI 생성 중..."}));const l=await Mt("citDomain",{citationsCnty:T().citationsCnty},M);o(y=>({...y,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?Bt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(y=>({...y,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"도메인별 Citation 현황"},M);o(y=>({...y,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?Bt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(y=>({...y,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyInsight:"⏳ AI 생성 중..."}));const l=await Mt("citCnty",{citationsCnty:T().citationsCnty},M);o(y=>({...y,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?Bt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(y=>({...y,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"국가별 Citation 도메인"},M);o(y=>({...y,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?Bt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(y=>({...y,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdInsight:"⏳ AI 생성 중..."}));const l=await Mt("citPrd",{citationsCnty:T().citationsCnty},M);o(y=>({...y,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?Bt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(y=>({...y,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"제품별 Citation"},M);o(y=>({...y,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?Bt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(y=>({...y,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),b.length>0&&(()=>{const l=[...new Set(I.productsCnty.map(y=>y.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(y=>{const ot=(e.cntyProductFilter||{})[y]!==!1;return r.jsx("button",{onClick:()=>o($t=>({...$t,cntyProductFilter:{...$t.cntyProductFilter||{},[y]:!ot}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:ot?"#166534":"#1E293B",color:ot?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:y},y)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomInsight:"⏳ AI 생성 중..."}));const l=await Mt("dotcom",{dotcom:T().dotcom},M);o(y=>({...y,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?Bt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(y=>({...y,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await Mt("howToRead",{section:"닷컴 Citation"},M);o(y=>({...y,dotcomHowToRead:l}))}catch{o(y=>({...y,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?Bt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(y=>({...y,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(y=>({...y,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,todoText:"⏳ AI 생성 중..."}));const l=await Mt("todo",{products:T().products},M);o(y=>({...y,todoText:l}))}catch(l){console.error("[AI]",l),o(y=>({...y,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Pt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?Bt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(y=>({...y,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:dn,style:{width:"100%",padding:"9px 0",background:dt?"#14532D":"transparent",border:`1px solid ${dt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:dt?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:dt?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:wt,onChange:l=>Lt(l.target.value),placeholder:"recipient@example.com",style:{...Et,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:un,disabled:bt==="sending"||!wt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:bt==="sending"||!wt.trim()?"not-allowed":"pointer",background:bt==="ok"?"#14532D":bt==="error"?"#7F1D1D":bt==="sending"?"#1E3A5F":wt.trim()?"#1D4ED8":"#1E293B",color:bt==="ok"?"#86EFAC":bt==="error"?"#FCA5A5":wt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:bt==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(po,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):bt==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 발송 완료!"]}):bt==="error"?r.jsxs(r.Fragment,{children:[r.jsx(ho,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(ho,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function oi({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:a,style:n}){const c=_o.useMemo(()=>Tn(o,i,a),[o,i,a]);return!c.length||c.length===1&&c[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:s=>e(s.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(s=>r.jsx("option",{value:s,children:s},s))})]})}const me="weekly-report",Oo="geo-weekly-report-cache";function ni({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:p,weeklyAll:x,categoryStats:f,cntyKeys:d=null,llmModel:h,monthlyVis:u}){const C=st.useRef(null),b=st.useMemo(()=>to(t,e,o,i,a,s,n,c,{weeklyLabels:p,weeklyAll:x,categoryStats:f,cntyKeys:d,llmModel:h,monthlyVis:u}),[t,e,o,i,a,s,n,c,p,x,f,d,h,u]);return _o.useEffect(()=>{const g=C.current;if(!g)return;const w=g.contentDocument||g.contentWindow.document;w.open(),w.write(b),w.close();const m=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const I=w.documentElement.scrollHeight;I&&(g.style.height=I+20+"px")}catch{}};setTimeout(m,150),setTimeout(m,400),setTimeout(m,1e3),setTimeout(m,2e3)},[b]),r.jsx("iframe",{ref:C,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function ri({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:p,weeklyAll:x,categoryStats:f,cntyKeys:d=null,llmModel:h,monthlyVis:u}){const[C,b]=st.useState(!1),g=st.useMemo(()=>to(t,e,o,i,a,s,n,c,{weeklyLabels:p,weeklyAll:x,categoryStats:f,cntyKeys:d,llmModel:h,monthlyVis:u}),[t,e,o,i,a,s,n,c,p,x,f,d,h,u]);async function w(){try{await navigator.clipboard.writeText(g)}catch{const m=document.createElement("textarea");m.value=g,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}b(!0),setTimeout(()=>b(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsx("div",{children:r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"주간 리포트 HTML"})}),r.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:C?"#14532D":Bt,color:C?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:C?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:g})})]})}function ii(){const t=st.useRef(Vn(Oo)).current,[e,o]=st.useState({...Ae,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=st.useState({...Ae,...(t==null?void 0:t.metaEn)??{}}),[n,c]=st.useState((t==null?void 0:t.total)??_n),[s,p]=st.useState((t==null?void 0:t.products)??zn),[x,f]=st.useState((t==null?void 0:t.citations)??Wn),[d,h]=st.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Gn),[u,C]=st.useState((t==null?void 0:t.productsCnty)??Un),[b,g]=st.useState((t==null?void 0:t.citationsCnty)??Hn),[w,m]=st.useState((t==null?void 0:t.weeklyLabels)??null),[I,M]=st.useState((t==null?void 0:t.weeklyAll)??{}),[P,_]=st.useState(null),[$,D]=st.useState("preview"),[U,B]=st.useState("ko"),[K,E]=st.useState("Total"),[S,G]=st.useState((t==null?void 0:t.monthlyVis)??[]),[N,J]=st.useState([]),[nt,q]=st.useState(""),[v,H]=st.useState(!1),[F,Y]=st.useState(""),[V,k]=st.useState(null),[T,A]=st.useState(!0),[Q,X]=st.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),lt=st.useMemo(()=>{const z=new Set;return(u||[]).forEach(O=>{O&&O.country&&!/^(ttl|total)$/i.test(O.country)&&z.add(String(O.country).toUpperCase())}),Array.from(z).sort()},[u]),yt=Q.length>0?Q:null,vt=st.useCallback(z=>{X(O=>O.includes(z)?O.filter(it=>it!==z):[...O,z])},[]),kt=st.useCallback(()=>X(lt),[lt]),j=st.useCallback(()=>X([]),[]);st.useEffect(()=>{let z=!1;const O=rr(e.period)||`${new Date().getMonth()+1}월`,it=ir(O);async function Ft(){var Tt,jt,Vt;try{const Zt=await fetch("/api/tracker-snapshot-v2"),Gt=Zt.ok?await Zt.json():null;if(Gt!=null&&Gt.ok&&((Vt=(jt=(Tt=Gt.data)==null?void 0:Tt.quantitativeGoals)==null?void 0:jt.rows)!=null&&Vt.length)){const Kt=wo(Gt.data,it);if(Kt!=null&&Kt.length&&!z){_(Kt);return}}}catch{}try{const[{parseKPISheet:Zt},Gt]=await Promise.all([Je(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Je(()=>import("./xlsx-DiWaSB7x.js").then(Ge=>Ge.x),__vite__mapDeps([0,1]))]),Kt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,oe=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Kt}&headers=1`,ne=await fetch(oe,{cache:"no-store"});if(!ne.ok)return;const _t=await ne.text(),Dt=Gt.read(_t,{type:"string"}),qt=Dt.Sheets[Dt.SheetNames[0]],ze=Gt.utils.sheet_to_json(qt,{header:1,defval:""}),Ut=Zt(ze),Qt=wo(Ut,it);Qt!=null&&Qt.length&&!z&&_(Qt)}catch{}}return Ft(),()=>{z=!0}},[e.period]);const Z=U==="en"?i:e,et=U==="en"?a:o,dt=st.useMemo(()=>Be(s,u,x,b,U),[s,u,x,b,U]);st.useEffect(()=>{qn(me).then(J)},[]);const gt=st.useRef(null);function wt(z,O=2e3){clearTimeout(gt.current),Y(z),gt.current=setTimeout(()=>Y(""),O)}st.useEffect(()=>()=>clearTimeout(gt.current),[]);const Lt=st.useRef(!1);st.useEffect(()=>{let z=!1;return je(me).then(O=>{z||!O||(Lt.current=!0,O.meta&&o(it=>({...it,...O.meta})),O.total&&c(it=>({...it,...O.total})),O.citations&&f(O.citations),O.dotcom&&h(it=>({...it,...O.dotcom})),O.productsCnty&&C(O.productsCnty),O.citationsCnty&&g(O.citationsCnty),O.weeklyLabels&&m(O.weeklyLabels),O.weeklyAll&&M(it=>({...it,...O.weeklyAll})),O.monthlyVis&&G(O.monthlyVis),O.productsPartial?p(O.productsPartial.map(it=>{var jt;const Ft=((jt=O.weeklyMap)==null?void 0:jt[it.id])||[],Tt=it.vsComp>0?it.score/it.vsComp*100:100;return{...it,weekly:Ft,monthly:[],compRatio:Math.round(Tt),status:Tt>=100?"lead":Tt>=80?"behind":"critical"}})):O.weeklyMap&&p(it=>it.map(Ft=>{var jt;const Tt=(jt=O.weeklyMap)==null?void 0:jt[Ft.id];return Tt?{...Ft,weekly:Tt}:Ft})))}),()=>{z=!0}},[]),st.useEffect(()=>{Kn(Oo,{metaKo:e,metaEn:i,total:n,products:s,citations:x,dotcom:d,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:I,selectedCountries:Q})},[e,i,n,s,x,d,u,b,w,I,Q]);async function bt(){if(!V)return;const O=await Yn(me,V,{metaKo:e,metaEn:i,total:n,products:s,citations:x,dotcom:d,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:I});O&&J(O),wt(O?"저장 완료!":"저장 실패")}async function St(){var it;const z=nt.trim()||`${Z.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,O=await Jn(me,z,{metaKo:e,metaEn:i,total:n,products:s,citations:x,dotcom:d,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:I});O&&(J(O),q(""),k(((it=O[0])==null?void 0:it.ts)||null)),wt(O?"새로 저장 완료!":"저장 실패")}function Ct(z){const O=z.data;o({...Ae,...O.metaKo||O.meta||{}}),a({...Ae,...O.metaEn||{}}),O.total&&c(O.total),O.products&&p(O.products),O.citations&&f(O.citations),O.dotcom&&h(O.dotcom),O.productsCnty&&C(O.productsCnty),O.citationsCnty&&g(O.citationsCnty),O.weeklyLabels&&m(O.weeklyLabels),O.weeklyAll&&M(O.weeklyAll),k(z.ts),wt(`"${z.name}" 불러옴`)}async function W(z){const O=N[z];if(!O)return;const it=await Xn(me,O.ts);it&&J(it),V===O.ts&&k(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[T&&r.jsx(ei,{mode:me,meta:Z,setMeta:et,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:n,setTotal:c,products:s,setProducts:p,citations:x,setCitations:f,dotcom:d,setDotcom:h,productsCnty:u,setProductsCnty:C,citationsCnty:b,setCitationsCnty:g,resolved:dt,previewLang:U,setPreviewLang:B,snapshots:N,setSnapshots:J,setWeeklyLabels:m,setWeeklyAll:M,weeklyLabels:w,weeklyAll:I,generateHTML:to}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>A(z=>!z),title:T?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:T?r.jsx(yn,{size:16}):r.jsx(bn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:z,tab:O,lang:it,label:Ft})=>{const Tt=O==="code"?$==="code":$==="preview"&&U===it;return r.jsx("button",{onClick:()=>{D(O),it&&B(it)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Tt?"#1E293B":"transparent",color:Tt?"#FFFFFF":"#475569",fontSize:11,fontWeight:Tt?700:500,fontFamily:L,cursor:"pointer"},children:Ft},z)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[F&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:F}),r.jsxs("button",{onClick:bt,disabled:!V,title:V?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:V?"pointer":"default",background:V?"#1D4ED8":"#1E293B",color:V?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:V?1:.5},children:[r.jsx(fo,{size:11})," 저장"]}),r.jsx("input",{value:nt,onChange:z=>q(z.target.value),placeholder:"버전 이름...",onKeyDown:z=>z.key==="Enter"&&St(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:St,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(fo,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>H(!v),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:v?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(xn,{size:11})," 불러오기 ",N.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",N.length,")"]})]}),v&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:z=>z.stopPropagation(),children:N.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):N.map((z,O)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:V===z.ts?"#1E3A5F":"#0F172A",border:V===z.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(z.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{Ct(z),H(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>W(O),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(vn,{size:10})})]},z.ts))})]})]})]}),lt.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),lt.map(z=>{const O=Q.includes(z);return r.jsx("button",{onClick:()=>vt(z),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(O?"#22C55E":"#334155"),background:O?"#16A34A":"#1E293B",color:O?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:z},z)}),r.jsx("button",{onClick:kt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:j,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:Q.length===0?"전체 국가":`${Q.length}개 선택`})]}),$==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(oi,{value:K,onChange:E,products:dt.products,productsCnty:dt.productsCnty,monthlyVis:S})}),r.jsx(ni,{meta:Z,total:n,products:dt.products,citations:dt.citations,dotcom:d,productsCnty:dt.productsCnty,citationsCnty:dt.citationsCnty,lang:U,weeklyLabels:w,weeklyAll:I,categoryStats:P,cntyKeys:yt,llmModel:K,monthlyVis:S})]})}):r.jsx(ri,{meta:Z,total:n,products:dt.products,citations:dt.citations,dotcom:d,productsCnty:dt.productsCnty,citationsCnty:dt.citationsCnty,lang:U,weeklyLabels:w,weeklyAll:I,categoryStats:P,cntyKeys:yt,llmModel:K,monthlyVis:S}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}wn.createRoot(document.getElementById("root")).render(r.jsx(ii,{}));
