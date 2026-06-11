const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as it,R as po,L as hn,D as gn,G as uo,A as mn,c as He,S as Ot,C as qe,d as No,e as fo,f as _o,P as yn,h as bn,i as ho,F as xn,T as vn}from"./react-CVd_-pOw.js";import{R as wn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const Cn="modulepreload",kn=function(t){return"/admin/weekly-report/"+t},go={},Je=function(e,o,a){let i=Promise.resolve();if(o&&o.length>0){let c=function(x){return Promise.all(x.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),f=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=c(o.map(x=>{if(x=kn(x),x in go)return;go[x]=!0;const h=x.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":Cn,h||(u.as="script"),u.crossOrigin="",u.href=x,f&&u.setAttribute("nonce",f),document.head.appendChild(u),h)return new Promise((p,C)=>{u.addEventListener("load",p),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${x}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return i.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},Sn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],je={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},zo={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Fe={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Ce={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Fn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Sn.map((t,e)=>[t,e]));const Go={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Uo=new Set(Object.values(Fe)),mo=[...new Set(Object.values(Go))].filter(t=>!Uo.has(t));mo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:mo,validCodes:[...Uo]});const ae="Total";function Tn(...t){const e=new Set([ae]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(a=>{a!=null&&a.llmModel&&e.add(a.llmModel),((a==null?void 0:a.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(c=>e.add(c)))})}),[ae,...Array.from(e).filter(o=>o!==ae).sort((o,a)=>o.localeCompare(a))]}function Ho(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var x;const a=(o==null?void 0:o.monthlyScores)||[];if(!a.length)return o;const i=a.filter(h=>{var d;return(d=h==null?void 0:h.byLlm)==null?void 0:d[e]}),n=i[i.length-1]||null,c=i.length>=2?i[i.length-2]:null;if(!n)return o;const s=n.byLlm[e],f=(x=c==null?void 0:c.byLlm)==null?void 0:x[e];return{...o,score:s.score??o.score,prev:(f==null?void 0:f.score)??null,vsComp:s.comp??o.vsComp,allScores:s.allScores??o.allScores,monthlyScore:s.score??o.monthlyScore??o.score,monthlyPrev:(f==null?void 0:f.score)??null,monthlyScores:a.map(h=>{var u;const d=(u=h==null?void 0:h.byLlm)==null?void 0:u[e];return d?{...h,score:d.score,comp:d.comp,allScores:d.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function Wo(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var h;const a=(o==null?void 0:o.monthlyScores)||[];if(!a.length)return o;const i=a.filter(d=>{var u;return(u=d==null?void 0:d.byLlm)==null?void 0:u[e]}),n=i[i.length-1]||null,c=i.length>=2?i[i.length-2]:null;if(!n)return o;const s=n.byLlm[e],f=(h=c==null?void 0:c.byLlm)==null?void 0:h[e],x=s.compScore??o.compScore;return{...o,score:s.score??o.score,prev:(f==null?void 0:f.score)??null,compScore:x,compName:s.compName??o.compName,allScores:s.allScores??o.allScores,gap:+((s.score??o.score)-x||0).toFixed(2),monthlyScores:a.map(d=>{var p;const u=(p=d==null?void 0:d.byLlm)==null?void 0:p[e];return u?{...d,score:u.score,compScore:u.compScore,compName:u.compName,allScores:u.allScores}:{...d,score:null,compScore:null,compName:null,allScores:null}})}})}function An(t,e){if(!Array.isArray(t)||!e||e===ae)return(t||[]).filter(i=>!i.llmModel||i.llmModel===ae||i.llmModel==="TOTAL"||i.llmModel==="All");const o={};t.forEach(i=>{const n=`${i.date}|${i.country}|${i.division}`;o[n]||(o[n]={}),o[n][i.llmModel]=i});const a=[];return Object.values(o).forEach(i=>{const n=i[e]||i[ae]||i.TOTAL||i.All;n&&a.push(n)}),a}function Vo(t,e,o){if(!o||o===ae||!Array.isArray(e)||!e.length)return t;const a=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!a.length)return t;a.sort((c,s)=>String(c.date).localeCompare(String(s.date)));const i=a[a.length-1],n=a.length>=2?a[a.length-2]:null;return{...t,score:i.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:i.comp??t.vsComp}}const ct="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",En=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function ye(t){const e=En.indexOf(t);return e>=0?e:999}function Pt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const yo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Ko(t){return yo.filter(e=>t.includes(e)).concat(t.filter(e=>!yo.includes(e)))}const Ln={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function qo(t){return Ln[String(t||"").trim().toUpperCase()]||t}function ke(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function $n(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ye(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ve(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Bn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=je,a=zo,i=[],n=[];Object.entries(t).forEach(([f,x])=>{if(!x)return;const h=x.Total||x.TTL||x.TOTAL;if(h){const d=h.LG||h.lg||[],u=d.length>0?d[d.length-1]:null,p=d.length>=2?d[d.length-2]:null;let C="",y=0;Object.entries(h).forEach(([m,v])=>{if(m==="LG"||m==="lg")return;const g=Array.isArray(v)&&v.length?v[v.length-1]:0;g>y&&(y=g,C=m)}),u!=null&&u>0&&i.push({id:f,kr:o[f]||f,bu:a[f]||"OTHER",score:u,prev:p,vsComp:y,compName:C,category:o[f]||f})}Object.entries(x).forEach(([d,u])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const p=u.LG||u.lg||[],C=p.length>0?p[p.length-1]:null,y=p.length>=2?p[p.length-2]:null;if(C==null||C<=0)return;let m="",v=0;Object.entries(u).forEach(([g,I])=>{if(g==="LG"||g==="lg")return;const M=Array.isArray(I)&&I.length?I[I.length-1]:0;M>v&&(v=M,m=g)}),n.push({product:o[f]||f,country:d,score:C,prev:y,compScore:v,compName:m})})});const c=(e==null?void 0:e[e.length-1])||"This Week",s=(e==null?void 0:e[e.length-2])||"Last Week";return{products:i,productsCnty:n,lastLabel:c,prevLabel:s}}function jn(t,e,o,a){if(!t.length)return"";const i=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},n=["MS","HS","ES"],c={};t.forEach(f=>{const x=f.bu||"OTHER";c[x]||(c[x]=[]),c[x].push(f)});const s=[];return n.forEach(f=>{const x=(c[f]||[]).slice().sort((h,d)=>ye(h.kr||h.category||h.id)-ye(d.kr||d.category||d.id));x.forEach((h,d)=>{const u=$n(h.score,h.prev),p=ve(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${d===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${f}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;">${Pt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;font-weight:700;background:${p};">${ke(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;background:${p};">${ke(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;background:${p};">${Pt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;font-weight:700;background:${p};">${Ye(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;">${u}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.wow}</th>
      </tr>
    </thead>
    <tbody>${s.join("")}</tbody>
  </table>`}function Rn(t,e,o,a){const i=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={},c=new Set,s=new Set;t.forEach(p=>{!p.country||!p.product||(c.add(p.country),s.add(p.product),n[p.product]||(n[p.product]={}),n[p.product][p.country]=p)});const f=Ko(Array.from(c)),x=Array.from(s).sort((p,C)=>ye(p)-ye(C));if(!x.length||!f.length)return"";const h={};(o||[]).forEach(p=>{[p.kr,p.category,p.id,p.en].filter(Boolean).forEach(y=>{h[y]=p})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+f.map(p=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Pt(qo(p))}</th>`).join(""),u=[];return x.forEach((p,C)=>{const y=C%2===0?"#FFFFFF":"#FAFAFA",m=h[p],g=(m?ve(m.score,m.vsComp):null)||y,I=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${g};">${m?ke(m.score):"—"}</td>`,M=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${g};">${m?Ye(m.score,m.vsComp):"—"}</td>`,P=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;background:${g};color:#1A1A1A;font-weight:600;">${m!=null&&m.compName?Pt(m.compName):"—"}</td>`,N=f.map(_=>{var E;const F=(E=n[p])==null?void 0:E[_],A=(F?ve(F.score,F.compScore):null)||y;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${A};">${F?ke(F.score):"—"}</td>`}).join(""),j=f.map(_=>{var E;const F=(E=n[p])==null?void 0:E[_],A=(F?ve(F.score,F.compScore):null)||y;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${A};">${F?Ye(F.score,F.compScore):"—"}</td>`}).join(""),O=f.map(_=>{var E;const F=(E=n[p])==null?void 0:E[_],A=(F?ve(F.score,F.compScore):null)||y;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${F!=null&&F.compName?Pt(F.compName):"—"}</td>`}).join("");u.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${ct};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Pt(p)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};font-weight:600;background:#F5F5F5;white-space:nowrap;">${i.lg} (%)</td>
        ${I}${N}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};background:#F5F5F5;white-space:nowrap;">${i.ratio}</td>
        ${M}${j}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${P}${O}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${i.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${i.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${u.join("")}</tbody>
  </table>
  </div>`}function In(t,e,o,a){const i=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},n={},c=new Set,s=new Set;t.forEach(u=>{!u.country||!u.product||(c.add(u.country),s.add(u.product),n[u.product]||(n[u.product]={}),n[u.product][u.country]=u)});const f=Ko(Array.from(c)),x=Array.from(s).sort((u,p)=>ye(u)-ye(p));if(!x.length||!f.length)return"";const h=f.map(u=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Pt(qo(u))}</th>`).join(""),d=x.map(u=>{const p=f.map(C=>{var N;const y=(N=n[u])==null?void 0:N[C];if(!y||y.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${ct};text-align:center;color:#999;">—</td>`;const m=y.score,v=y.prev,g=v!=null?+(m-v).toFixed(1):null,I=g==null?"#999":g>0?"#16A34A":g<0?"#DC2626":"#666",M=g==null?"":g>0?"▲":g<0?"▼":"─",P=g!=null?`${M}${Math.abs(g).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${ct};text-align:center;">
        <div style="font-weight:700;color:#111;">${ke(m)}%</div>
        <div style="font-size:9px;color:${I};">${P}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Pt(u)}</td>
      ${p}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${i.product}</th>
      ${h}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${ct};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Pn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((n,c)=>n+(c.score||0),0),i=t.map((n,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Pt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${a>0?(n.score/a*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${i}</tbody>
  </table>`}function Mn(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,f)=>(f.citations||0)-(s.citations||0));const a=o.slice(0,20),i=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,f)=>s+(f.citations||0),0),c=a.map((s,f)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;">${f+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Pt(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Pt(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${i.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${i.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${i.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Dn(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},i=Object.keys(o).filter(s=>o[s]!=null);if(!i.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=i.map(s=>{const f=o[s]||0,x=a[s]||0,h=f-x,d=h>0?"LG":h<0?"SS":"=",u=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",p=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${u};color:${p};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};font-weight:${s==="TTL"?"900":"600"};">${Pt(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${f.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function On(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function i(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>{const f=(s.monthRate||0).toFixed(0),x=(s.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${ct};background:#F5F5F5;">${Pt(s.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(s.monthRate)};">${f}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(s.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${ct};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${ct};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function to(t,e,o,a,i={},n="ko",c=[],s=[],f={}){const{weeklyAll:x={},weeklyLabels:h=[],categoryStats:d=null,cntyKeys:u=null,llmModel:p,monthlyVis:C}=f;p&&p!=="Total"&&(o=Ho(o,p),c=Wo(c,p),e=Vo(e,C,p));let y=x;if(Array.isArray(u)&&u.length>0){const j=new Set(u.map(_=>String(_).toUpperCase())),O=_=>/^(total|ttl)$/i.test(String(_));c=(c||[]).filter(_=>_&&j.has(String(_.country).toUpperCase())),s=(s||[]).filter(_=>_&&j.has(String(_.country).toUpperCase())),y={},Object.entries(x||{}).forEach(([_,F])=>{if(!F)return;const H={};Object.entries(F).forEach(([A,E])=>{(O(A)||j.has(String(A).toUpperCase()))&&(H[A]=E)}),y[_]=H})}const m=Bn(y,h),v=m.products.length?m.products:o,g=m.productsCnty.length?m.productsCnty:c,I=m.lastLabel,M=m.prevLabel,P=n==="en"?"GEO Weekly Report":"GEO 주간 보고서",N=t.period||I||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${Pt(P)} — ${Pt(N)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${ct} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${ct};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${ct};">${Pt(P)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${ct};">${Pt(N)} · ${I?`${Pt(I)} ${n==="en"?"data":"기준"}`:""}</p>
    </div>

    ${jn(v,n,I,M)}
    ${In(g,n,I,M)}
    ${Rn(g,n,v,I)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${ct};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Pn(a,n)}
    ${Mn(s,n)}
    ${Dn(i,n)}

    ${On(d,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${ct};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const $t="#CF0652",B="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Nn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Ee={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Nn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showTouchPointsBump:!0,bumpHighlight:[],cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},_n={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},zn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Gn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Un=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Hn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Wn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Jo=3;function Vn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Jo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Kn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Jo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ne={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ue(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function qn(t){try{const e=await fetch(ue(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Jn(t,e,o){try{const a=await fetch(ue(t).snapshots,{method:"POST",headers:Ne,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const i=await a.json();return i.ok?i.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function Yn(t,e,o){try{const a=await fetch(`${ue(t).snapshots}/${e}`,{method:"PUT",headers:Ne,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const i=await a.json();return i.ok?i.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function Xn(t,e){try{const o=await fetch(`${ue(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Nt(t,e,o="ko",a=""){try{const i=await fetch("/api/generate-insight",{method:"POST",headers:Ne,body:JSON.stringify({type:t,data:e,lang:o,rules:a})});if(!i.ok){const c=await i.json().catch(()=>({}));throw new Error(c.error||`HTTP ${i.status}`)}const n=await i.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(i){throw console.error("[API] generateAIInsight failed:",i.message),i}}async function Re(t){try{const e=await fetch(ue(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function bo(t){try{const e=await fetch(ue(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Zn(t,e,o={}){const{includePromptList:a=!1,includeReadability:i=!1}=o,[n,c]=await Promise.all([Re("dashboard").catch(()=>null),Re("visibility").catch(()=>null)]),s={...n||{},...c||{}};if(n&&Object.keys(n).forEach(E=>{s[E]==null&&n[E]!=null&&(s[E]=n[E])}),c!=null&&c.meta&&(n!=null&&n.meta)&&(s.meta={...n.meta||{},...c.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const f=s.meta||{},x=s.total||{},d=(s.productsPartial||s.products||[]).map(E=>{var X;const U=E.weekly||((X=s.weeklyMap)==null?void 0:X[E.id])||[],W=E.vsComp>0?E.score/E.vsComp*100:100;return{...E,weekly:U,monthly:E.monthly||[],compRatio:E.compRatio||Math.round(W),status:E.status||(W>=100?"lead":W>=80?"behind":"critical")}}),u=s.citations||[],p=s.dotcom||{},C=s.productsCnty||[],y=s.citationsCnty||[],m=s.weeklyLabels||null,v=s.weeklyAll||{},g=s.citationsByCnty||{},I=s.dotcomByCnty||{},M=e(d,C,u,y,"ko"),P=e(d,C,u,y,"en"),N={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},j={monthlyVis:s.monthlyVis||[],includePromptList:a,includeReadability:i},O=t(f,x,M.products,M.citations,p,"ko",M.productsCnty,M.citationsCnty,m,v,g,I,j,N),_=t({...f,title:f.title||"GEO KPI Dashboard"},x,P.products,P.citations,p,"en",P.productsCnty,P.citationsCnty,m,v,g,I,j,N),F=`${f.period||""} ${f.title||"KPI Dashboard"}`.trim(),A=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:F,htmlKo:O,htmlEn:_})})).json();if(!A.ok)throw new Error(A.error||"게시 실패");return A}async function xo(t,e){try{const o=await fetch(ue(t).syncData,{method:"POST",headers:Ne,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Qn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},We={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},vo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Be(t,e,o,a,i){return i!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(n=>({...n,kr:n.en||We[n.kr]||n.kr,compName:n.compNameEn||vo[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||Qn[n.country]||n.country,product:n.productEn||We[n.product]||n.product,compName:n.compNameEn||vo[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||We[n.category]||n.category})),citationsCnty:a.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function tr(t,{from:e="ko",to:o="en"}={}){const i=[];for(let n=0;n<t.length;n+=20){const c=t.slice(n,n+20),s=await Promise.all(c.map(async f=>{if(!f||!f.trim())return f;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(f)}`,h=await fetch(x);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(u=>u[0]).join("")}));i.push(...s)}return i}const Le=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],er=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function or(t){const e=er.indexOf(t);return e>=0?e:999}function $e(t){return or(t)}function Yo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function nr(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Yo(o)]=o)}),e}function wo(t,e){var d,u,p,C;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(p=(u=t==null?void 0:t._dashboard)==null?void 0:u.categoryStats)!=null&&p.length?[...t._dashboard.categoryStats].sort((y,m)=>$e(y.category)-$e(m.category)):null;const o=t.quantitativeGoals.rows,a=nr((C=t.quantitativeResults)==null?void 0:C.rows),n=new Date().getMonth()+1-1,c=n>=3&&n<=12?`${n}월`:"3월";let s=e||t._month||c,f=Le.indexOf(s);f<0&&(s="3월",f=0);const x=[...new Set(o.map(y=>y.taskCategory).filter(Boolean))],h=f>0?Le[f-1]:null;return x.map(y=>{const m=o.filter(F=>F.taskCategory===y);let v=0,g=0,I=0,M=0,P=0,N=0;m.forEach(F=>{var W,X,nt,q,w;const H=Yo(F),A=a[H]||{},E=typeof((W=F.monthly)==null?void 0:W[s])=="number"?F.monthly[s]:0,U=typeof((X=A.monthly)==null?void 0:X[s])=="number"?A.monthly[s]:0;if(g+=E,v+=U,h){const z=typeof((nt=F.monthly)==null?void 0:nt[h])=="number"?F.monthly[h]:0,S=typeof((q=A.monthly)==null?void 0:q[h])=="number"?A.monthly[h]:0;N+=z,P+=S}for(let z=0;z<=f;z++){const S=Le[z];typeof((w=A.monthly)==null?void 0:w[S])=="number"&&(I+=A.monthly[S])}Le.forEach(z=>{var S;typeof((S=F.monthly)==null?void 0:S[z])=="number"&&(M+=F.monthly[z])})});const j=g>0?Math.round(v/g*1e3)/10:0,O=N>0?Math.round(P/N*1e3)/10:0,_=M>0?Math.round(I/M*1e3)/10:0;return{category:y,taskCount:m.length,targetMonth:s,monthRate:j,prevMonthRate:O,prevMonth:h,progressRate:_,monthActual:v,monthGoal:g,cumActual:I,annualGoal:M}}).sort((y,m)=>$e(y.category)-$e(m.category))}function rr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function ir(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function Xo(){const t=await Je(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function Xe(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function qt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function ar(t,e){return Array.isArray(t)?t.length===0?(Xe(e,"invalid input: empty rows",{len:0}),!1):!0:(Xe(e,"invalid input: not an array",{type:typeof t}),!1)}function _e(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const a=o.map(i=>String(i??"").trim().toLowerCase());return e.every(i=>a.some(n=>i instanceof RegExp?i.test(n):n===String(i).toLowerCase()))})}function sr(t,e="sync"){var i,n,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((i=t.products)==null?void 0:i.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((f,x)=>f===`W${x+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const Rt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Co=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],ko=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function lr(t,e,o,a,i={}){const n=await Xo(),c=n.utils.book_new(),s=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(c,s,"meta");const f=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);f["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(c,f,"total");const x=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(y=>[y.id,y.bu,y.kr,y.score,y.prev,y.vsComp,y.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(c,x,"products");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(y=>[y.id,y.kr,...y.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(c,h,"weekly");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(y=>[y.rank,y.source,y.category,y.score,y.delta,y.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(c,d,"citations");const u=(i==null?void 0:i.lg)||{},p=(i==null?void 0:i.samsung)||{},C=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Co.map(y=>`LG_${y}`),...ko.map(y=>`Samsung_${y}`)],[...Co.map(y=>u[y]??0),...ko.map(y=>p[y]??0)]]);C["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(c,C,"dotcom"),n.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function ee(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),i=parseFloat(a)||0;return o?+i.toFixed(2):Math.abs(i)<=1&&i!==0?+(i*100).toFixed(2):+i.toFixed(2)}function Ie(t){return t==null||String(t).trim()===""?null:ee(t)}function _t(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function re(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const cr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function dr(t){const e=re(t);return cr[e]||e}function me(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,i=0;const n=e.match(/(\d{4})/);if(n)i=parseInt(n[1]);else{const s=e.match(/(\d{2})년/);if(s)i=2e3+parseInt(s[1]);else{const f=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);f&&(i=2e3+parseInt(f[1]))}}const c=e.match(/(\d{1,2})월/);if(c)a=parseInt(c[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)a=o[s[1].toLowerCase()];else{const f=e.match(/\d{4}[-\/](\d{1,2})/);f&&(a=parseInt(f[1]))}}return i?i*12+a:a}function pr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],a=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const c=String(n[0]).trim(),s=n[1]??"";if(o.includes(c))e[c]=parseInt(s)||(c==="titleFontSize"?24:10);else if(a.includes(c)){const f=String(s).trim().toLowerCase();e[c]=f==="y"||f==="yes"||f==="true"||f==="1"}else e[c]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(c=>c.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},c=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);c&&(e.period=`${n[c[2]]||c[2]} ${c[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const c=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${c[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function ur(t){var q;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((w,z)=>console.log(`  row${z}: [${(w||[]).slice(0,8).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let i=!1,n=-1;if(t.forEach((w,z)=>{if(!w[0]||String(w[0]).startsWith("[")||String(w[0]).startsWith("※")||w[0]==="key")return;const S=String(w[0]).trim();(o.includes(S)||e.includes(S))&&(i||(n=z),i=!0,e.includes(S)?a[S]=parseInt(w[1])||0:a[S]=ee(w[1]))}),i&&Object.keys(a).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${n}: r[0]='${(q=t[n])==null?void 0:q[0]}' / kvObj keys:`,Object.keys(a)),{total:a};console.log("[parseVisSummary] Table path 진입");let c=t.find(w=>w.some(z=>String(z||"").trim().toUpperCase()==="LG"));c||(c=t.find(w=>w.some(z=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(z||"").trim()))));const s=c?c.findIndex(w=>String(w||"").trim().toUpperCase()==="LG"):-1,f=c?c.findIndex(w=>{const z=String(w||"").trim().toUpperCase();return z==="SAMSUNG"||z==="SAMSUMG"}):-1,x=c?c.findIndex(w=>/date/i.test(String(w||"").trim())):0,h=c?c.findIndex(w=>/countries|country/i.test(String(w||"").trim())):2,d=c?c.findIndex(w=>/divisions?/i.test(String(w||"").trim())):3,u=c?c.findIndex(w=>/^(llm\s*model|llm|model)$/i.test(String(w||"").trim())):-1,p=Math.max(x,h,d,u),C=s>=0?s:p>=0?p+1:4,y=f>=0?f:C+1;console.log(`[parseVisSummary] columns: date=${x} cnty=${h} div=${d} llm=${u} lg=${C}(raw=${s}) ss=${y}(raw=${f})`);const m=[];t.filter(w=>{const z=String(w[x>=0?x:0]||"").trim();return z&&!z.startsWith("[")&&!z.startsWith("※")&&!/^date$/i.test(z)&&!/^key$/i.test(z)}).forEach(w=>{const z=String(w[x>=0?x:0]||"").trim(),S=re(w[h>=0?h:2]),J=String(w[d>=0?d:3]||"").trim().toUpperCase(),k=(u>=0?String(w[u]||"").trim():"")||"Total",T=ee(w[C]),$=ee(w[y]);z&&T>0&&m.push({date:z,country:S,division:J,llmModel:k,lg:T,comp:$})});const g=m.filter(w=>(w.country==="TOTAL"||w.country==="TTL")&&(w.division==="TOTAL"||w.division==="TTL"||w.division==="")&&(w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"));g.sort((w,z)=>me(w.date)-me(z.date));const I=g[g.length-1],M=g.length>=2?g[g.length-2]:null;if(!I){const w=t.find(V=>V.some(k=>String(k||"").trim().toUpperCase()==="TOTAL"));if(!w)return qt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(V=>V==null?void 0:V.slice(0,6))});const z=ee(w[C]),S=ee(w[y]),J={total:{score:z,prev:z,vsComp:S,rank:z>=S?1:2,totalBrands:12}};return m.length&&(J.monthlyVis=m),J}const P=I.lg,N=I.comp,j=M?M.lg:P,O=I.date,_=M?M.date:null;function F(w){const z={};return m.filter(S=>S.date===w&&(S.country==="TOTAL"||S.country==="TTL")&&S.division&&S.division!=="TOTAL"&&S.division!=="TTL"&&S.division!==""&&(S.llmModel==="Total"||S.llmModel==="TOTAL"||S.llmModel==="All")).forEach(S=>{z[S.division]={lg:S.lg,comp:S.comp}}),z}const H=F(O),A=_?F(_):{};function E(w){const z={};return m.filter(S=>S.date===w&&S.country&&S.country!=="TOTAL"&&S.country!=="TTL"&&(S.division==="TOTAL"||S.division==="TTL"||S.division==="")&&(S.llmModel==="Total"||S.llmModel==="TOTAL"||S.llmModel==="All")).forEach(S=>{z[S.country]={lg:S.lg,comp:S.comp}}),z}const U=E(O),W=_?E(_):{},X={total:{score:P,prev:j,vsComp:N,rank:P>=N?1:2,totalBrands:12},...Object.keys(H).length?{buTotals:H}:{},...Object.keys(A).length?{buTotalsPrev:A}:{},...Object.keys(U).length?{countryTotals:U}:{},...Object.keys(W).length?{countryTotalsPrev:W}:{}};O&&(X.derivedPeriod=O),m.length&&(X.monthlyVis=m);const nt={};return m.forEach(w=>{nt[w.date]=(nt[w.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${m.length}행 / unique dates:`,nt,`/ TOTAL+TOTAL+Total 행: ${g.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(X)),X}function fr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((i,n)=>console.log(`  row${n}: [${i.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((i,n)=>{if(n===0)return;const c=String((i==null?void 0:i[1])||"").trim(),s=String((i==null?void 0:i[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(s==="TTL"||s==="TOTAL")&&o.push({date:c,cat:String((i==null?void 0:i[3])||"").trim(),llm:String((i==null?void 0:i[4])||"").trim()||"(empty)",div:String((i==null?void 0:i[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(i=>console.log(`  ${i.div} | ${i.date} | ${i.cat} | LLM='${i.llm}'`));const a=t.findIndex(i=>{const n=String(i[0]||"").trim().toLowerCase();return n==="div"||n==="division"||n==="divisions"});if(a<0){const i=t.findIndex(n=>n.some((c,s)=>s>=1&&String(c||"").trim().toUpperCase()==="LG"));return i<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${i}: [${t[i].slice(0,8).map(n=>JSON.stringify(String(n||"").trim())).join(", ")}]`),So(t,i))}return console.log(`[parseProductCnty] header at row${a}: [${t[a].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),So(t,a)}function So(t,e){const o=t[e],a=o.findIndex((d,u)=>u>=3&&String(d||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const i=o.findIndex(d=>/^(llm\s*model|llm|model)$/i.test(String(d||"").trim())),n=[];for(let d=a+1;d<o.length;d++){const u=String(o[d]||"").trim();u&&u.toUpperCase()!=="LG"&&n.push({name:u,col:d})}const c=t.slice(e+1).filter(d=>{const u=String(d[0]||"").trim();return u&&!u.startsWith("[")&&!u.startsWith("※")}),s={},f={};c.forEach(d=>{const u=String(d[0]||"").trim(),p=String(d[1]||"").trim(),C=String(d[2]||"").trim(),y=re(d[2])||C,m=String(d[3]||"").trim(),g=(i>=0?String(d[i]||"").trim():"")||"Total",I=ee(d[a]),M=n.map(O=>({name:O.name,score:ee(d[O.col])})).filter(O=>O.score>0),P=[...M].sort((O,_)=>_.score-O.score)[0]||{name:"",score:0},N=+(I-P.score).toFixed(2),j={LG:I};if(M.forEach(O=>{j[O.name]=O.score}),y==="TTL"||y==="TOTAL"){const O=Ce[m]||m.toLowerCase(),_=Fn[m]||m;s[O]||(s[O]=[]),s[O].push({id:O,bu:u,kr:_,category:m,date:p,llmModel:g,score:I,vsComp:P.score,compName:P.name,allScores:j})}else{const O=`${m}|${y}`;f[O]||(f[O]=[]),f[O].push({product:m,country:y,date:p,llmModel:g,score:I,compName:P.name,compScore:P.score,gap:N,allScores:j})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(s).join(", ")||"없음"} / 국가별: ${Object.keys(f).length}건`);const x=[];for(const[d,u]of Object.entries(s)){const p=u.filter(g=>g.llmModel==="Total"||g.llmModel==="TOTAL"||g.llmModel==="All"),C=p.length?p:u;C.sort((g,I)=>me(g.date)-me(I.date));const y=C[C.length-1],m=C.length>=2?C[C.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${C.map(g=>g.date).join(",")}] score=${y.score} prev=${m} vsComp=${y.vsComp}`);const v=C.map(g=>{const I=u.filter(P=>P.date===g.date),M={};return I.forEach(P=>{M[P.llmModel]={score:P.score,comp:P.vsComp,allScores:P.allScores}}),{date:g.date,score:g.score,comp:g.vsComp,allScores:g.allScores,byLlm:M}});x.push({...y,prev:m,monthlyScores:v})}const h=[];for(const d of Object.values(f)){const u=d.filter(v=>v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"),p=u.length?u:d;p.sort((v,g)=>me(v.date)-me(g.date));const C=p[p.length-1],y=p.length>=2?p[p.length-2].score:null,m=p.map(v=>{const g=d.filter(M=>M.date===v.date),I={};return g.forEach(M=>{I[M.llmModel]={score:M.score,compScore:M.compScore,compName:M.compName,allScores:M.allScores}}),{date:v.date,score:v.score,compScore:v.compScore,compName:v.compName,allScores:v.allScores,byLlm:I}});h.push({...C,prev:y,monthlyScores:m})}return{...x.length?{productsPartial:x}:{},...h.length?{productsCnty:h}:{}}}function Zo(t,e=0,o){const a=o??t.length;for(let i=e;i<a;i++){const n=[];for(const c of t[i]||[]){const s=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Ve={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Fo(t,e){var y;const o=e?Ve[e]||{}:{...Ve.MS,...Ve.ES};if(!Object.keys(o).length)return qt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const a=t.findIndex(m=>m.some(v=>String(v||"").trim()in o));if(a<0)return qt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const i=t[a],n=t.findIndex((m,v)=>v>a&&m.some(g=>String(g||"").trim()==="TTL")),c=n>0?n+1:Math.min(a+20,t.length);let s=-1,f=-1;for(let m=a+1;m<c;m++){const v=t[m];if(!v.some(M=>String(M||"").trim().toUpperCase()==="LG"))continue;if(f<0&&(f=m),v.some(M=>{const P=String(M||"").trim().toLowerCase().replace(/[\s_-]/g,"");return P==="nonbrand"||P==="nb"})){s=m;break}}const x=s>=0?s:f>=0?f:n;if(x<0)return qt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:a,ttlRowIdx:n});const h=t[x],d=s>=0?"LG-NB":f>=0?"LG":"TTL",u={},p=Object.keys(o).map(m=>i.findIndex(v=>String(v||"").trim()===m)).filter(m=>m>=0).sort((m,v)=>m-v);for(const[m,v]of Object.entries(o)){const g=i.findIndex(P=>String(P||"").trim()===m);if(g<0)continue;const I=p.find(P=>P>g)||g+20,M=[];for(let P=g+1;P<I&&P<h.length;P++){const N=ee(h[P]);N>0&&M.push(N)}M.length&&(u[v]=M)}if(!Object.keys(u).length)return qt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:a,dataRowIdx:x,dataRowLabel:d});const C=Zo(t,a,c)||((y=Object.values(u)[0])==null?void 0:y.map((m,v)=>`W${v+1}`))||[];return{weeklyMap:u,weeklyLabels:C}}function hr(t,e,o){for(const a of Object.values(t))for(const i of Object.values(a))for(const[n,c]of Object.entries(i))i[n]=c.slice(o);for(const[a,i]of Object.entries(e))e[a]=i.slice(o)}function gr(t){const{data:e,rows:o,headerIdx:a,brandIdx:i,catIdx:n,countryIdx:c,isNonBrand:s,isTotal:f,weeklyMap:x,weeklyAll:h}=t;let d=t.wCols,u=t.weeklyLabels;if(!d.length){const p=e.find(C=>String(C[i]||"").trim().toUpperCase()==="LG"&&s(C));if(p){const C=[];for(let y=i+1;y<p.length;y++)if(String(p[y]||"").trim())C.push(y);else if(C.length)break;d=C,u=Zo(o,0,a+1)||d.map((y,m)=>`W${m+1}`)}}return e.forEach(p=>{if(!s(p))return;const C=String(p[i]||"").trim();if(!C)return;const y=String(p[n>=0?n:0]||"").trim();if(!y)return;const m=Ce[y]||y.toLowerCase(),v=c>=0?re(p[c]):"TOTAL",g=v==="TOTAL"||v==="TTL"||!v?"Total":v;h[m]||(h[m]={}),h[m][g]||(h[m][g]={}),h[m][g][C]=d.map(I=>Ie(p[I]))}),e.forEach(p=>{if(String(p[i]||"").trim().toUpperCase()!=="LG"||!s(p)||!f(p))return;const y=String(p[n>=0?n:0]||"").trim();y&&(x[Ce[y]||y.toLowerCase()]=d.map(m=>Ie(p[m])))}),{wCols:d,weeklyLabels:u}}function mr(t){const{data:e,header:o,lgIdx:a,catIdx:i,isTotal:n,weeklyMap:c}=t,s=o.findIndex(h=>{const d=String(h||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),f={},x=[];return e.forEach(h=>{if(!n(h))return;const d=String(h[i>=0?i:3]||"").trim();if(d){if(s>=0){const u=String(h[s]||"").trim();u&&!x.includes(u)&&x.push(u)}f[d]=f[d]||[],f[d].push(Ie(h[a]))}}),Object.entries(f).forEach(([h,d])=>{c[Ce[h]||h.toLowerCase()]=d}),x.length?x:null}function yr(t){const{data:e,wCols:o,catIdx:a,isTotal:i,weeklyMap:n}=t;e.forEach(c=>{if(!i(c))return;const s=String(c[a>=0?a:0]||"").trim();s&&(n[Ce[s]||s.toLowerCase()]=o.map(f=>Ie(c[f])))})}function Ke(t,e){const o={};let a=[],i=-1;for(let j=0;j<Math.min(t.length,10);j++){const O=t[j];if(!O)continue;let _=0;for(let F=0;F<O.length;F++)/^w\d+$/i.test(String(O[F]||"").trim())&&_++;if(_>=2){i=j;break}}let n=t.findIndex(j=>{const O=j.slice(0,5).map(_=>String(_||"").trim().toLowerCase());return O.includes("category")||O.includes("product")});if(n<0&&i>=0&&(n=i),n<0&&(n=t.findIndex(j=>{let O=!1,_=0;for(let F=0;F<Math.min(j.length,10);F++){const H=String(j[F]||"").trim();H.toUpperCase()==="LG"?(O=!0,_++):H&&isNaN(parseFloat(H))&&_++}return O&&_>=3})),n<0)return Fo(t,e);const c=t[n],s=n+1;let f=null;if(t[s]){const j=t[s].slice(4,8).map(O=>String(O||"").trim()).filter(Boolean);j.length&&j.every(O=>/^\d{1,2}\/\d{1,2}/.test(O)||/~/.test(O)||/^\(/.test(O))&&(f=s)}const x=f!=null?f+1:s,h=t.slice(x).filter(j=>j[0]!=null&&String(j[0]).trim()),d=c.findIndex(j=>{const O=String(j||"").trim().toLowerCase();return O==="category"||O==="product"}),u=c.findIndex(j=>{const O=String(j||"").trim().toLowerCase();return O==="country"||O==="county"}),p=c.findIndex(j=>String(j||"").trim().toLowerCase()==="brand"),C=c.findIndex(j=>String(j||"").trim().toUpperCase()==="LG");let y=[];const m=i>=0?t[i]:c;for(let j=0;j<m.length;j++)/^w\d+$/i.test(String(m[j]||"").trim())&&y.push(j);if(!y.length)for(let j=0;j<c.length;j++){const O=String(c[j]||"").split(/\n/)[0].trim();/^w\d+/i.test(O)&&y.push(j)}a=y.map(j=>String(m[j]||"").trim().toUpperCase());let v=y.map((j,O)=>{const _=a[O]||`W${j}`;let F="";const H=f!=null?t[f]:i!==n&&i>=0?t[i+1]:null;if(H){const A=String(H[j]||"").trim();A&&/\d/.test(A)&&(F=A.startsWith("(")?A:`(${A})`)}return F?`${_}${F}`:_});console.log(`[parseWeekly:${e}] wLabelRow:${i} headerIdx:${n} dateRangeRow:${f} wCols:${y.length} labels:`,a.slice(0,5),"full:",v.slice(-2));function g(j){if(u<0)return!0;const O=String(j[u]||"").replace(/[()]/g,"").trim().toUpperCase();return O==="TOTAL"||O==="TTL"||O===""}const I=c.findIndex(j=>{const O=String(j||"").trim().toLowerCase().replace(/[\s_-]/g,"");return O==="b/nb"||O==="bnb"||O==="brand/nonbrand"});function M(j){if(I<0)return!0;const O=String(j[I]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return O==="nonbrand"||O==="nb"}const P={},N={data:h,rows:t,header:c,headerIdx:n,brandIdx:p,lgIdx:C,catIdx:d,countryIdx:u,wCols:y,weeklyLabels:a,weeklyMap:o,weeklyAll:P,isNonBrand:M,isTotal:g};if(p>=0){const j=gr(N);y=j.wCols,a=j.weeklyLabels}else if(C>=0){const j=mr(N);j&&(a=j)}else y.length&&yr(N);if(a.length>0){let j=a.length;for(const H of Object.values(P))for(const A of Object.values(H))for(const E of Object.values(A)){const U=E.findIndex(W=>W!=null);U>=0&&U<j&&(j=U)}for(const H of Object.values(o)){const A=H.findIndex(E=>E!=null);A>=0&&A<j&&(j=A)}const O=12,F=a.length-j>O?a.length-O:j;F>0&&F<a.length&&(a=a.slice(F),v=v.slice(F),hr(P,o,F))}if(Object.keys(o).length){const j={weeklyMap:o};return a.length&&(j.weeklyLabels=a),v.length&&(j.weeklyLabelsFull=v),Object.keys(P).length&&(j.weeklyAll=P),j}return Fo(t,e)}function br(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((S,J)=>console.log(`  row${J}: [${(S||[]).slice(0,10).map(V=>JSON.stringify(String(V||"").trim())).join(", ")}]`));const e=t.findIndex(S=>S.some(k=>{const T=String(k||"").trim().toLowerCase();return T.includes("page type")||T==="country"})?!S.some(k=>/^\[.*\]$/.test(String(k||"").trim())):!1);if(e<0)return qt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],a=o.findIndex(S=>{const J=String(S||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(J)}),i=o.findIndex(S=>/^country$|countries/i.test(String(S||"").trim())),n=o.findIndex(S=>{const J=String(S||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(J)||J==="type"}),c=i>=0?i:0,s=n>=0?n:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${a} cntyCol=${i} ptCol=${n} (fallbackCnty=${c} fallbackPt=${s})`),a<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(S=>Array.from(String(S||"")).map(J=>J.codePointAt(0).toString(16)).join(" ")));const f=[],x=new Set,h=Math.max(s+1,2);for(let S=h;S<o.length;S++){const J=String(o[S]||"").trim();if(/\bLG\b/i.test(J)){const V=S+1;if(V<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[V]||""))){const k=J.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),T=k?k[1].toLowerCase():`col${S}`;x.has(T)||(f.push({lg:S,ss:V}),x.add(T))}}}f.length||f.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",f.map(S=>`LG=${S.lg}/SS=${S.ss}`).join(", "));const d=new Map;let u="",p=0;t.slice(e+1).forEach(S=>{if(!S||!S.some(V=>String(V||"").trim())){u="";return}let J=a>=0?String(S[a]||"").trim():"";J?u=J:a>=0&&u&&(J=u,p++),d.set(S,J)}),p&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${p}건 상속`);const C=t.slice(e+1).filter(S=>S&&S[c]!=null&&String(S[c]).trim());console.log(`[parseCitPageType] data ${C.length}행 (필터 통과)`);let y=f[0];for(let S=f.length-1;S>=0;S--)if(C.some(J=>_t(J[f[S].lg])>0)){y=f[S];break}if(!C.some(S=>_t(S[y.lg])>0)){for(let S=Math.min(y.lg,o.length)-1;S>=2;S--)if(C.some(J=>_t(J[S])>0)){y={lg:S-1,ss:S};break}}const m={},v={},g={},I={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},M=new Set,P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=f.map(S=>{const J=String(o[S.lg]||"").trim(),V=J.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return V?V[1].charAt(0).toUpperCase()+V[1].slice(1).toLowerCase():J.replace(/\s*LG\s*/i,"").trim()}),j={},O=S=>String(S||"").trim().replace(/^\((.*)\)$/,"$1").trim(),_=S=>{const J=O(S);return!J||/^(total|all|ttl)$/i.test(J)},F=S=>{const J=re(S[c]),V=String(S[s]||"").replace(/[()]/g,"").trim();let k=/page total|^ttl$/i.test(V)?"TTL":V;return k.toLowerCase()==="microsite"&&(k="Microsites"),{cnty:I[J]||J.toUpperCase(),key:k}},H=new Set;C.forEach(S=>{const J=d.get(S)||"";if(_(J))return;const{cnty:V,key:k}=F(S);f.forEach((T,$)=>{(_t(S[T.lg])>0||_t(S[T.ss])>0)&&H.add(`${V}|${k}|${$}`)})});const A=(S,J,V,k)=>H.has(`${J}|${V}|${k}`)?!S:S,E=f.indexOf(y);H.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${H.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const U={};function W(S){return U[S]||(U[S]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),U[S]}C.forEach(S=>{const J=d.get(S)||"",V=_(J),k=V?"Total":J,{cnty:T,key:$}=F(S);M.add(T);const tt=_t(S[y.lg]),Z=_t(S[y.ss]);A(V,T,$,E)&&(T==="TTL"?(m[$]=(m[$]||0)+tt,v[$]=(v[$]||0)+Z):(g[T]||(g[T]={lg:{},samsung:{}}),g[T].lg[$]=(g[T].lg[$]||0)+tt,g[T].samsung[$]=(g[T].samsung[$]||0)+Z)),T==="TTL"&&f.forEach((yt,wt)=>{var Q,et;if(!A(V,T,$,wt))return;const kt=_t(S[yt.lg]),R=_t(S[yt.ss]);if(kt>0||R>0){j[$]||(j[$]={});const lt=N[wt]||`M${wt+1}`;j[$][lt]={lg:(((Q=j[$][lt])==null?void 0:Q.lg)||0)+kt,samsung:(((et=j[$][lt])==null?void 0:et.samsung)||0)+R}}});const at=W(k);T==="TTL"?(at.lg[$]=(at.lg[$]||0)+tt,at.samsung[$]=(at.samsung[$]||0)+Z,at.dotcomTrend[$]||(at.dotcomTrend[$]={}),f.forEach((yt,wt)=>{var Q,et;const kt=_t(S[yt.lg]),R=_t(S[yt.ss]);if(kt>0||R>0){const lt=N[wt]||`M${wt+1}`;at.dotcomTrend[$][lt]={lg:(((Q=at.dotcomTrend[$][lt])==null?void 0:Q.lg)||0)+kt,samsung:(((et=at.dotcomTrend[$][lt])==null?void 0:et.samsung)||0)+R}}})):(at.dotcomByCnty[T]||(at.dotcomByCnty[T]={lg:{},samsung:{}}),at.dotcomByCnty[T].lg[$]=(at.dotcomByCnty[T].lg[$]||0)+tt,at.dotcomByCnty[T].samsung[$]=(at.dotcomByCnty[T].samsung[$]||0)+Z)});const X=new Set;Object.values(j).forEach(S=>Object.keys(S).forEach(J=>X.add(J)));const nt=P.filter(S=>X.has(S)),q={},w={};f.forEach((S,J)=>{const V=N[J];if(!V)return;const k={},T={};C.forEach($=>{const tt=d.get($)||"",Z=_(tt),{cnty:at,key:yt}=F($);if(!A(Z,at,yt,J))return;const wt=_t($[S.lg]),kt=_t($[S.ss]);wt<=0&&kt<=0||(at==="TTL"?(wt>0&&(k[yt]=(k[yt]||0)+wt),kt>0&&(T[yt]=(T[yt]||0)+kt)):(w[V]||(w[V]={}),w[V][at]||(w[V][at]={lg:{},samsung:{}}),wt>0&&(w[V][at].lg[yt]=(w[V][at].lg[yt]||0)+wt),kt>0&&(w[V][at].samsung[yt]=(w[V][at].samsung[yt]||0)+kt)))}),Object.keys(k).length&&(q[V]={lg:k,samsung:T})}),Object.keys(w).forEach(S=>{Object.keys(w[S]).forEach(J=>{const V=w[S][J];Object.values(V.lg).some(T=>T>0)||Object.values(V.samsung).some(T=>T>0)||delete w[S][J]}),Object.keys(w[S]).length||delete w[S]});const z={};return(m.TTL||Object.keys(m).length)&&(z.dotcom={lg:m,samsung:v,byMonth:q,byCntyByMonth:w}),Object.keys(g).length&&(z.dotcomByCnty=g),Object.keys(j).length&&nt.length&&(z.dotcomTrend=j,z.dotcomTrendMonths=nt),(Object.keys(U).length>1||Object.keys(U).length===1&&!(U.Total||U.TOTAL||U.All))&&(z.dotcomByLlm=U),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(m).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(g).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(j).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(U).join(",")||"(EMPTY)"}`),z}function xr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((k,T)=>console.log(`  row${T}: [${(k||[]).slice(0,12).map($=>JSON.stringify(String($||"").trim())).join(", ")}]`));const e=t.findIndex(k=>k.some(tt=>{const Z=String(tt||"").trim().toLowerCase();return Z==="channel"||Z==="country"})?!k.some(tt=>/^\[.*\]$/.test(String(tt||"").trim())):!1);e<0&&qt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(k=>k==null?void 0:k.slice(0,6))});const o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let i=-1,n=-1,c=-1,s=-1;for(let k=0;k<o.length;k++){const T=String(o[k]||"").trim().toLowerCase();T==="country"&&i<0&&(i=k),T==="channel"&&n<0&&(n=k),T==="prd"&&c<0&&(c=k),/^(llm\s*model|llm|model)$/i.test(T)&&s<0&&(s=k)}const f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(k){const T=String(k||"").trim().toLowerCase();if(!T)return null;const $=T.match(/^(\d{1,2})월/);if($){const Z=parseInt($[1]);if(Z>=1&&Z<=12)return f[Z-1]}const tt=T.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return tt?tt[1].charAt(0).toUpperCase()+tt[1].slice(1).toLowerCase():null}const h=[],d=new Set;for(let k=0;k<o.length;k++){const T=x(o[k]);T&&!d.has(k)&&(h.push({col:k,label:T}),d.add(k))}if(e>0){const k=t[e-1];if(k)for(let T=0;T<k.length;T++){const $=x(k[T]);$&&!d.has(T)&&(h.push({col:T,label:$}),d.add(T))}}let u=2;if(h.length>0)u=Math.min(...h.map(k=>k.col));else if(i>=0&&n>=0)u=Math.max(i,n,c)+1;else{const k=t[a];k&&!String(k[0]||"").trim()?(i=1,n=2,u=3):(i=0,n=1,u=2)}if(i<0||n<0){const k=t[a],T=k&&!String(k[0]||"").trim()?1:0;i<0&&(i=T),n<0&&(n=T+1)}if(h.length>0){h.sort((tt,Z)=>tt.col-Z.col);const k=h[0],T=f.indexOf(k.label),$=new Set([i,n,c].filter(tt=>tt>=0));if(T>0&&k.col>u){let tt=T-1;for(let Z=k.col-1;Z>=u&&tt>=0;Z--){if(d.has(Z)||$.has(Z))continue;const at=String(o[Z]||"").trim(),yt=e>0?String((t[e-1]||[])[Z]||"").trim():"";at||yt||(h.push({col:Z,label:f[tt]}),d.add(Z),tt--)}}}h.sort((k,T)=>f.indexOf(k.label)-f.indexOf(T.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(k=>JSON.stringify(String(k||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${i} channelCol=${n} prdCol=${c} llmCol=${s} dataStartCol=${u}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(k=>`${k.label}@col${k.col}`).join(", "));const p=t.slice(a).filter(k=>k.some(T=>T!=null&&String(T).trim())),C=[],y={},m={},v={},g={},I=new Set,M={},P={},N={},j=k=>String(k||"").replace(/[()]/g,"").trim();p.forEach(k=>{const T=re(k[i]),$=j(k[n]);if(!T||!$||$.toLowerCase()==="total")return;const tt=T==="TTL"||T==="TOTAL",Z=s>=0?j(k[s]):"",at=!Z||/^(total|all|ttl)$/i.test(Z),yt=c>=0?j(k[c]):"",wt=!yt||/^(ttl|total)$/i.test(yt.toUpperCase());h.forEach(({col:kt,label:R})=>{_t(k[kt])<=0||(tt||(M[$]||(M[$]={}),M[$][R]=!0),at||(P[$]||(P[$]={}),P[$][R]=!0),wt||(N[$]||(N[$]={}),N[$][R]=!0))})});const O=Object.keys(M).map(k=>`${k}:[${Object.keys(M[k]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${O||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(P).map(k=>`${k}:[${Object.keys(P[k]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(N).map(k=>`${k}:[${Object.keys(N[k]).join(",")}]`).join(" ")||"(없음)");const _={},F={},H={},A={};p.forEach(k=>{const T=re(k[i]),$=j(k[n]),tt=c>=0?j(k[c]):"",Z=s>=0?j(k[s]):"";if(!T||!$||$.toLowerCase()==="total")return;const at=T==="TTL"||T==="TOTAL",yt=!Z||/^(total|all|ttl)$/i.test(Z),wt=tt.toUpperCase(),kt=!tt||wt==="TTL"||wt==="TOTAL";if(at||I.add(T),!at&&(H[T]||(H[T]={}),H[T][$]||(H[T][$]={ttl:null,prds:[]}),!kt)){const Q={};h.forEach(({col:et,label:lt})=>{var Ct;const gt=_t(k[et]);gt<=0||yt&&((Ct=P[$])!=null&&Ct[lt])||(Q[lt]=gt)}),Object.keys(Q).length&&H[T][$].prds.push({prd:tt,monthScores:Q})}_[$]||(_[$]={}),F[$]||(F[$]={});const R=at?"TTL":T;F[$][R]||(F[$][R]={}),h.forEach(({col:Q,label:et})=>{var D,Y,mt,K;const lt=_t(k[Q]);if(lt<=0)return;const gt=at&&((D=M[$])==null?void 0:D[et]),Ct=yt&&((Y=P[$])==null?void 0:Y[et]),Tt=kt&&((mt=N[$])==null?void 0:mt[et]),bt=yt?"Total":Z;!gt&&!(kt&&((K=N[$])!=null&&K[et]))&&(A[bt]||(A[bt]={}),A[bt][$]||(A[bt][$]={}),A[bt][$][et]=(A[bt][$][et]||0)+lt),!(gt||Ct||Tt)&&(_[$][et]=(_[$][et]||0)+lt,F[$][R][et]=(F[$][R][et]||0)+lt)})});const E=k=>{for(let T=h.length-1;T>=0;T--){const $=k[h[T].label];if($>0)return $}return 0},U={};Object.entries(F).forEach(([k,T])=>{Object.entries(T).forEach(([$,tt])=>{$!=="TTL"&&Object.keys(tt).length!==0&&(U[$]||(U[$]={}),U[$][k]=tt)})}),Object.entries(_).forEach(([k,T])=>{const $=E(T);$>0&&(C.push({source:k,category:"",score:$,delta:0,ratio:0,monthScores:T}),y[k]=T)}),Object.entries(F).forEach(([k,T])=>{Object.entries(T).forEach(([$,tt])=>{if($==="TTL")return;const Z=E(tt);Z>0&&(m[$]||(m[$]=[]),m[$].push({source:k,category:"",score:Z,delta:0,ratio:0,monthScores:tt,prd:""}))})}),Object.entries(H).forEach(([k,T])=>{Object.entries(T).forEach(([$,tt])=>{tt.prds.forEach(({prd:Z,monthScores:at})=>{const yt=E(at);if(yt<=0)return;m[k]||(m[k]=[]),m[k].push({source:$,category:"",score:yt,delta:0,ratio:0,monthScores:at,prd:Z}),g[Z]||(g[Z]={}),g[Z][$]||(g[Z][$]={source:$,category:"",score:0,delta:0,ratio:0,monthScores:{}});const wt=g[Z][$];wt.score+=yt,Object.entries(at).forEach(([kt,R])=>{wt.monthScores[kt]=(wt.monthScores[kt]||0)+R})})})});const W={};new Set([...Object.keys(v),...Object.keys(g)]).forEach(k=>{let T=v[k];(!T||!T.length)&&(T=Object.values(g[k]||{})),T&&T.length&&(W[k]=T)});const nt=C.reduce((k,T)=>k+T.score,0);C.sort((k,T)=>T.score-k.score),C.forEach((k,T)=>{k.rank=T+1,k.ratio=nt>0?+(k.score/nt*100).toFixed(1):0});for(const[k,T]of Object.entries(m)){const $=T.reduce((tt,Z)=>tt+Z.score,0);T.sort((tt,Z)=>Z.score-tt.score),T.forEach((tt,Z)=>{tt.rank=Z+1,tt.ratio=$>0?+(tt.score/$*100).toFixed(1):0})}for(const[k,T]of Object.entries(W)){const $=T.reduce((tt,Z)=>tt+Z.score,0);T.sort((tt,Z)=>Z.score-tt.score),T.forEach((tt,Z)=>{tt.rank=Z+1,tt.ratio=$>0?+(tt.score/$*100).toFixed(1):0})}const q=h.map(k=>k.label).filter(k=>Object.values(y).some(T=>T[k]>0)),w={};h.forEach(k=>{let T=0;Object.values(y).forEach($=>{T+=$[k.label]||0}),w[k.label]=T}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",w,"→ validMonths:",q);const z={};Object.entries(H.TTL||{}).forEach(([k,T])=>{z[k]={ttl:T.ttl,latestScore:E(T.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",z),console.log("[parseCitTouchPoints] citations top 3:",C.slice(0,3).map(k=>({source:k.source,score:k.score,monthScores:k.monthScores})));const S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let J=null;if(q.length>0){const k={};Object.values(y).forEach(tt=>{Object.entries(tt).forEach(([Z,at])=>{at>0&&(k[Z]=(k[Z]||0)+1)})});let T=q[q.length-1];if(q.length>=2){const tt=k[T]||0,Z=q[q.length-2],at=k[Z]||0;at>0&&tt<at*.5&&(T=Z)}const $=S.findIndex(tt=>T.toLowerCase().startsWith(tt.toLowerCase()));$>=0&&(J=`${S[$]} ${new Date().getFullYear()}`)}const V={};return C.length>0&&(V.citations=C),Object.keys(m).length>0&&(V.citationsByCnty=m),Object.keys(W).length>0&&(V.citationsByPrd=W),Object.keys(y).length>0&&(V.citTouchPointsTrend=y,V.citTrendMonths=q),Object.keys(U).length>0&&(V.citTouchPointsTrendByCnty=U),Object.keys(A).length>0&&(V.citTouchPointsByLlm=A,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(A).join(", "))),J&&(V.citDerivedPeriod=J),V}function vr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((A,E)=>console.log(`  row${E}: [${(A||[]).slice(0,14).map(U=>JSON.stringify(String(U||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let i=null,n=0,c=-1,s=-1,f=-1,x=-1,h=-1,d=-1,u=4;for(let A=0;A<Math.min(t.length,10);A++){const E=t[A];if(!E)continue;const U=E.some(q=>/^no$/i.test(String(q||"").trim())),W=E.some(q=>/^region$/i.test(String(q||"").trim())),X=E.some(q=>/domain|domian/i.test(String(q||"").trim())),nt=E.some(q=>/^prd$/i.test(String(q||"").trim()));if(U||W||X||nt){i=E,n=A+1;for(let q=0;q<E.length;q++){const w=String(E[q]||"").trim().toLowerCase();w==="prd"&&h<0&&(h=q),w==="no"&&c<0&&(c=q),w==="region"&&s<0&&(s=q),(w==="domain"||w==="domian")&&f<0&&(f=q),w==="type"&&x<0&&(x=q),/^(llm\s*model|llm|model)$/i.test(w)&&d<0&&(d=q)}console.log(`[parseCitDomain] header row${A}: [${(E||[]).slice(0,14).map(q=>JSON.stringify(String(q||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${c} regionCol=${s} domainCol=${f} typeCol=${x} llmCol=${d}`);break}(String(E[0]||"").trim().startsWith("[")||!String(E[0]||"").trim())&&(n=A+1)}i||qt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(A=>A==null?void 0:A.slice(0,6))});const p=c>=0||s>=0||h>=0;if(p)s<0&&(s=c>=0?c+1:h>=0?h+2:1),f<0&&(f=s+1),x<0&&(x=f+1),u=Math.max(f,x)+1;else if(f>=0)x=f+1,u=f+2;else{for(let A=n;A<Math.min(t.length,n+5);A++){const E=t[A];if(E){for(let U=0;U<Math.min(E.length,6);U++){const W=String(E[U]||"").trim();if(W.includes(".")&&W.length>3&&!a.test(W)){f=U,x=U+1,u=U+2;break}}if(f>=0)break}}f<0&&(f=0,x=1,u=2)}const C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=A=>{const E=String(A||"").trim().toLowerCase();if(!E)return null;const U=E.match(/^(\d{1,2})월/);if(U){const X=parseInt(U[1]);if(X>=1&&X<=12)return C[X-1]}const W=E.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return W?W[1].charAt(0).toUpperCase()+W[1].slice(1).toLowerCase():null},m=[];if(i)for(let A=u;A<i.length;A++){const E=y(i[A]);E&&m.push({col:A,label:E})}const v=A=>/^(type|domain[_ ]type)$/i.test(String(A||"").trim()),g=A=>/^(domain|domian)$/i.test(String(A||"").trim()),I=A=>/^region$/i.test(String(A||"").trim()),M=[];i&&m.forEach(({col:A,label:E})=>{const U=A-1,W=A-2,X=A-3;X<0||v(i[U])&&g(i[W])&&I(i[X])&&M.push({regionCol:X,domainCol:W,typeCol:U,monthCol:A,label:E})}),console.log(`[parseCitDomain] domainMonthLabels: ${m.map(A=>`${A.label}@col${A.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${M.length}개`,M.map(A=>`${A.label}@col${A.monthCol}(r${A.regionCol}/d${A.domainCol}/t${A.typeCol})`).join(", "));const P=[],N={};let j=null;const O={};let _="TTL";const F=A=>{let E=String(A||"").trim();if(!E)return"";const U=E.match(/^\[([^\]]+)\]/);U&&(E=U[1].trim()),E=E.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const W=E.indexOf("/");return W>=0&&(E=E.slice(0,W)),E};if(M.length>=2){const A=R=>String(R||"").replace(/[()]/g,"").trim(),E={},U=M.map(()=>({region:"",domain:"",type:""}));let W="",X=0,nt=0;for(let R=n;R<t.length;R++){const Q=t[R];if(!Q)continue;let et=h>=0?A(Q[h]):"";et?W=et:et=W;const lt=d>=0?A(Q[d]):"";M.forEach((gt,Ct)=>{const Tt=U[Ct],bt=F(Q[gt.domainCol]);bt&&bt.includes(".")&&(Tt.domain=bt,Tt.region=String(Q[gt.regionCol]||"").trim().toUpperCase(),Tt.type=String(Q[gt.typeCol]||"").trim());const D=String(Q[gt.monthCol]||"").replace(/,/g,"").trim(),Y=parseFloat(D);if(isNaN(Y)||Y<=0)return;let mt=bt,K,G;if(mt&&mt.includes("."))K=String(Q[gt.regionCol]||"").trim().toUpperCase(),G=String(Q[gt.typeCol]||"").trim();else if(Tt.domain)mt=Tt.domain,K=Tt.region,G=Tt.type,X++;else{nt++;return}const ut=e[K]||K||"TTL",jt=`${ut}|${mt}|${G}|${et}|${lt}`;E[jt]||(E[jt]={cnty:ut,domain:mt,type:G,prd:et,llm:lt,monthScores:{}}),E[jt].monthScores[gt.label]=(E[jt].monthScores[gt.label]||0)+Y})}(X||nt)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${X}건 / domain 없어 drop ${nt}건`);const q=R=>{const Q=A(R);return!Q||/^(total|all|ttl)$/i.test(Q)},w=new Set;Object.values(E).forEach(R=>{if(q(R.llm))return;const Q=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`;Object.entries(R.monthScores).forEach(([et,lt])=>{lt>0&&w.add(`${Q}|${et}`)})});const z={};Object.values(E).forEach(R=>{const Q=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`,et=q(R.llm);z[Q]||(z[Q]={cnty:R.cnty,domain:R.domain,type:R.type,prd:R.prd,monthScores:{}}),Object.entries(R.monthScores).forEach(([lt,gt])=>{gt>0&&w.has(`${Q}|${lt}`)!==et&&(z[Q].monthScores[lt]=(z[Q].monthScores[lt]||0)+gt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(E).length} → ${Object.keys(z).length} rows / breakdown 월 ${w.size}건`);const S=R=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(R||"").trim()),J=R=>{const Q=String(R||"").trim();return!Q||/^(ttl|total)$/i.test(Q)},V=R=>{for(let Q=m.length-1;Q>=0;Q--){const et=R[m[Q].label];if(et>0)return et}return 0},k=R=>R.find(Q=>Object.keys(Q).length)||{},T=(R,Q)=>{Object.entries(Q).forEach(([et,lt])=>{lt>0&&(R[et]=(R[et]||0)+lt)})},$={};Object.values(E).forEach(R=>{if(q(R.llm))return;const Q=A(R.llm);$[Q]||($[Q]={}),$[Q][R.domain]||($[Q][R.domain]=[{},{},{},{}]);const et=(S(R.cnty)?0:2)+(J(R.prd)?0:1);T($[Q][R.domain][et],R.monthScores)});const tt={};if(Object.entries($).forEach(([R,Q])=>{const et={};Object.entries(Q).forEach(([lt,gt])=>{const Ct=V(k(gt));Ct>0&&(et[lt]=Ct)}),Object.keys(et).length&&(tt[R]=et)}),Object.keys(tt).length){const R={};Object.values(z).forEach(et=>{R[et.domain]||(R[et.domain]=[{},{},{},{}]);const lt=(S(et.cnty)?0:2)+(J(et.prd)?0:1);T(R[et.domain][lt],et.monthScores)});const Q={};Object.entries(R).forEach(([et,lt])=>{const gt=V(k(lt));gt>0&&(Q[et]=gt)}),Object.keys(Q).length&&(tt.Total=Q),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(tt).join(", ")),Object.keys(tt).length>1&&(j=tt)}Object.values(z).forEach(R=>{let Q=0;for(let Ct=m.length-1;Ct>=0;Ct--){const Tt=R.monthScores[m[Ct].label];if(Tt>0){Q=Tt;break}}if(Q<=0)return;O[R.cnty]=(O[R.cnty]||0)+1,P.push({cnty:R.cnty,rank:O[R.cnty],domain:R.domain,type:R.type,citations:Q,monthScores:R.monthScores,prd:R.prd});const et=`${R.cnty}|${R.domain}`,lt=!R.prd||/^(ttl|total)$/i.test(R.prd);N[et]||(N[et]={cnty:R.cnty,domain:R.domain,type:R.type,months:{},_ttlMonths:{}});const gt=N[et];lt?(gt.type=R.type||gt.type,Object.entries(R.monthScores).forEach(([Ct,Tt])=>{Tt>0&&(gt._ttlMonths[Ct]?gt.months[Ct]+=Tt:(gt.months[Ct]=Tt,gt._ttlMonths[Ct]=!0))})):Object.entries(R.monthScores).forEach(([Ct,Tt])=>{!(Tt>0)||gt._ttlMonths[Ct]||(gt.months[Ct]=(gt.months[Ct]||0)+Tt)})}),Object.values(N).forEach(R=>{delete R._ttlMonths});const Z={TTL:{},CNTY:{}};Object.entries(N).forEach(([R,Q])=>{const et=R.startsWith("TTL|")?"TTL":"CNTY";Object.entries(Q.months).forEach(([lt,gt])=>{gt>0&&(Z[et][lt]=(Z[et][lt]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",Z.TTL,"/ CNTY:",Z.CNTY);const at={},yt={};Object.values(E).forEach(R=>{at[R.cnty]=(at[R.cnty]||0)+1,yt[R.prd||"(empty)"]=(yt[R.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(E).length} / cnty dist:`,at,"/ prd dist:",yt);const wt=Object.values(E).filter(R=>R.cnty==="TTL"&&R.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${wt.length}건):`,wt.map(R=>`${R.domain}|prd='${R.prd}'|type='${R.type}'|May=${R.monthScores.May}`).join(" / "));const kt={};P.forEach(R=>{kt[R.cnty]||(kt[R.cnty]=[]),kt[R.cnty].push(R)}),Object.values(kt).forEach(R=>{R.sort((Q,et)=>et.citations-Q.citations),R.forEach((Q,et)=>{Q.rank=et+1})})}else for(let A=n;A<t.length;A++){const E=t[A];if(!E)continue;const U=String(E[f]||"").trim(),W=String(E[x]||"").trim(),X=h>=0?String(E[h]||"").trim():"";if(!p&&(!U||!U.includes("."))){const z=String(E[f]||"").trim().toUpperCase(),S=e[z]||(o.includes(z)?z:null);S&&(!W||W==="")&&(_=S);continue}if(!U||!U.includes("."))continue;let nt="TTL";if(p&&s>=0){const z=String(E[s]||"").trim().toUpperCase();nt=e[z]||z}else p||(nt=_);let q=0;if(m.length>0)for(let z=m.length-1;z>=0;z--){const S=String(E[m[z].col]||"").replace(/,/g,"").trim(),J=parseFloat(S);if(!isNaN(J)&&J>0){q=J;break}}else for(let z=E.length-1;z>=u;z--){const S=String(E[z]||"").replace(/,/g,"").trim();if(!S)continue;const J=parseFloat(S);if(!isNaN(J)&&J>0){q=J;break}}if(m.length>0){const z={};if(m.forEach(({col:S,label:J})=>{const V=String(E[S]||"").replace(/,/g,"").trim(),k=parseFloat(V);!isNaN(k)&&k>0&&(z[J]=k)}),Object.keys(z).length>0){const S=`${nt}|${U}`;N[S]={cnty:nt,domain:U,type:W,months:z}}}const w={};m.length>0&&m.forEach(({col:z,label:S})=>{const J=String(E[z]||"").replace(/,/g,"").trim(),V=parseFloat(J);!isNaN(V)&&V>0&&(w[S]=V)}),q>0&&(O[nt]=(O[nt]||0)+1,P.push({cnty:nt,rank:O[nt],domain:U,type:W,citations:q,monthScores:w,prd:X}))}const H={};if(P.length>0&&(H.citationsCnty=P),Object.keys(N).length>0){H.citDomainTrend=N;const A=m.map(E=>E.label).filter(E=>Object.values(N).some(U=>U.months[E]>0));H.citDomainMonths=A}return j&&(H.citDomainByLlm=j),H}function To(t,e){const o=_e(t,[/^type$/,/^(county|country)$/]);if(o<0)return qt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(g=>g==null?void 0:g.slice(0,6))});const a=t[o];let i=-1,n=-1,c=-1,s=-1,f=4;for(let g=0;g<a.length;g++){const I=String(a[g]||"").trim().toLowerCase();I==="type"&&i<0&&(i=g),(I==="county"||I==="country")&&n<0&&(n=g),(I==="topic"||I==="topoc")&&c<0&&(c=g),I==="brand"&&s<0&&(s=g)}f=Math.max(i,n,c,s)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[],u=[o];for(let g=0;g<=o;g++)g!==o&&u.push(g);for(const g of u){if(d.length>0)break;const I=t[g];if(I)for(let M=f;M<I.length;M++){const P=String(I[M]||"").split(/\n/)[0].trim();P&&(x.test(P)||h.test(P))&&d.push({col:M,label:P})}}const p=t.slice(o+1),C=[];p.forEach(g=>{if(!g)return;const I=String(g[i]||"").trim(),M=re(g[n]),P=String(g[c]||"").trim(),N=String(g[s]||"").trim();if(!P||!N)return;const j={};let O=0;d.forEach(({col:_,label:F})=>{const H=ee(g[_]);H>0&&(j[F]=H,O=H)}),(Object.keys(j).length>0||P)&&C.push({type:I,country:M,topic:P,brand:N,scores:j,latestScore:O})});const y=e==="weekly"?"weeklyPR":"monthlyPR",m=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",v={};return C.length>0&&(v[y]=C),d.length>0&&(v[m]=d.map(g=>g.label)),v}function Ao(t,e){const o=t.findIndex(v=>v?v.some(g=>/steakholders|stakeholders/i.test(String(g||"").trim()))||v.some(g=>/^type$/i.test(String(g||"").trim()))&&v.some(g=>/topoc|topic/i.test(String(g||"").trim())):!1);if(o<0)return qt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const a=t[o];let i=-1,n=-1,c=-1,s=-1,f=4;for(let v=0;v<a.length;v++){const g=String(a[v]||"").trim().toLowerCase();(g==="steakholders"||g==="stakeholders")&&i<0&&(i=v),g==="type"&&n<0&&(n=v),(g==="country"||g==="county")&&c<0&&(c=v),(g==="topoc"||g==="topic")&&s<0&&(s=v)}f=Math.max(i,n,c,s)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[];for(let v=f;v<a.length;v++){const g=String(a[v]||"").split(/\n/)[0].trim();g&&(x.test(g)||h.test(g))&&d.push({col:v,label:g})}const u=t.slice(o+1),p=[];u.forEach(v=>{if(!v)return;const g=String(v[i]||"").trim(),I=String(v[n]||"").trim(),M=re(v[c]),P=String(v[s]||"").trim();if(!P||!g)return;const N={};let j=0;d.forEach(({col:O,label:_})=>{const F=ee(v[O]);F>0&&(N[_]=F,j=F)}),p.push({stakeholder:g,type:I,country:M,topic:P,scores:N,latestScore:j})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",y=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",m={};return p.length>0&&(m[C]=p),d.length>0&&(m[y]=d.map(v=>v.label)),m}function wr(t){const e=_e(t,[/^prompts?$/,/^country$/]);if(e<0)return qt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],a={},i=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const f=String(o[s]||"").trim().toLowerCase();i.includes(f)&&!a[f]&&(a[f]=s)}const n=t.slice(e+1),c=[];return n.forEach(s=>{if(!s)return;const f=String(s[a.prompts]||"").trim();f&&c.push({country:re(s[a.country]),prompt:f,division:String(s[a.division]||"").trim(),category:String(s[a.category]||"").trim(),launched:String(s[a.launched]||"").trim(),branded:String(s[a.branded]||"").trim(),cej:String(s[a.cej]||"").trim(),topic:String(s[a.topic]||"").trim()})}),c.length>0?{appendixPrompts:c}:{}}const ce={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Cr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const e=_e(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,u)=>console.log(`  row${u}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const o=t[e];let a=-1,i=-1,n=-1;for(let d=0;d<o.length;d++){const u=String(o[d]||"").trim().toLowerCase();a<0&&(u==="country"||u==="county")&&(a=d),i<0&&(u==="category"||u==="product"||u==="제품"||u==="카테고리")&&(i=d),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(u)&&(n=d)}if(a<0||i<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:i,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...ce};let f=0,x=0,h=0;return t.slice(e+1).forEach((d,u)=>{const p=e+1+u;try{if(!d){h++;return}const C=String(d[n]||"").trim();if(!C){h++;return}f++;const y=C.toLowerCase().replace(/\s+/g," ");if(!c.has(y)&&!c.has(y.replace(/\s/g,"")))return;const m=dr(d[a]),v=String(d[i]||"").trim();if(!m||!v){console.warn("[parseUnlaunched] row skipped",{rowIdx:p,raw:{country:d[a],category:d[i],status:d[n]},parsed:{country:m,rawCategory:v}}),h++;return}const g=v.toUpperCase(),I=Go[g]||g;s[`${m}|${I}`]=!0,I!==g&&(s[`${m}|${g}`]=!0),x++}catch(C){let y;try{y={country:d==null?void 0:d[a],category:d==null?void 0:d[i],status:d==null?void 0:d[n]}}catch{y=d}console.warn("[parseUnlaunched] row error",{rowIdx:p,raw:y,error:C==null?void 0:C.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(ce).length}건 + skip ${h}건 / 총행 ${f} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function kr(t){const e=_e(t,[/^bu$/,/topic/]);if(e<0)return qt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let a=-1,i=-1,n=-1,c=-1,s=-1;for(let h=0;h<o.length;h++){const d=String(o[h]||"").trim().toLowerCase();a<0&&d==="bu"&&(a=h),i<0&&d.includes("topic")&&d.includes("대시보드")&&(i=h),n<0&&(d==="explanation"||d==="설명")&&(n=h),c<0&&d.includes("기존")&&(c=h),s<0&&d.includes("topic")&&d.includes("row")&&(s=h)}i<0&&(i=1),n<0&&(n=2);const f=[];let x="";return t.slice(e+1).forEach(h=>{if(!h)return;const d=String(h[a]||"").trim();d&&(x=d);const u=String(h[i]||"").trim();if(!u)return;const p=String(h[n]||"").trim(),C=c>=0?String(h[c]||"").trim():"",y=s>=0?String(h[s]||"").trim():"";f.push({bu:x,topic:u,explanation:p,oldTopic:C,topicRow:y})}),f.length>0?{prTopicList:f}:{}}function Sr(t,e){var o;if(!ar(e,`parseSheetRows:${t}`))return{};try{if(t===Rt.meta)return pr(e);if(t===Rt.visSummary)return ur(e);if(t===Rt.productMS||t===Rt.productHS||t===Rt.productES)return fr(e);if(t===Rt.weeklyMS)return Ke(e,"MS");if(t===Rt.weeklyHS)return Ke(e,"HS");if(t===Rt.weeklyES)return Ke(e,"ES");if(t===Rt.monthlyPR)return To(e,"monthly");if(t===Rt.weeklyPR)return To(e,"weekly");if(t===Rt.monthlyBrandPrompt)return Ao(e,"monthly");if(t===Rt.weeklyBrandPrompt)return Ao(e,"weekly");if(t===Rt.citPageType)return br(e);if(t===Rt.citTouchPoints)return xr(e);if(t===Rt.citDomain)return vr(e);if(t===Rt.appendix)return wr(e);if(t===Rt.unlaunched)return Cr(e);if(t===Rt.prTopicList)return kr(e)}catch(a){return Xe(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:a==null?void 0:a.message,stack:(o=a==null?void 0:a.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return qt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(Rt)})}function Fr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Tr(t,e){var d;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,i=await fetch(a,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!i.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${i.status}).`);const n=await i.text(),c=await Xo(),s=c.read(n,{type:"string"}),f=s.Sheets[s.SheetNames[0]],x=c.utils.sheet_to_json(f,{header:1,defval:""}),h=n.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${n.length}자/${h}줄 → ${x.length}행 × ${((d=x[0])==null?void 0:d.length)??0}컬럼`),x}async function Ar(t,e){var n,c;const o=Object.values(Rt),a={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const i=await Promise.allSettled(o.map(s=>Tr(t,s).then(f=>({name:s,rows:f}))));for(let s=0;s<o.length;s++){const f=o[s],x=i[s];if(e==null||e(`"${f}" 처리 중... (${s+1}/${o.length})`),x.status==="rejected"){console.warn(`"${f}" 시트 건너뜀:`,(n=x.reason)==null?void 0:n.message);continue}try{const{rows:h}=x.value,d=Sr(f,h);for(const[u,p]of Object.entries(d))u==="weeklyLabels"||u==="weeklyLabelsFull"?a[u]||(a[u]=p):Array.isArray(p)&&Array.isArray(a[u])?a[u]=[...a[u],...p]:p&&typeof p=="object"&&!Array.isArray(p)&&a[u]&&typeof a[u]=="object"&&!Array.isArray(a[u])?a[u]={...a[u],...p}:a[u]=p}catch(h){console.warn(`"${f}" 시트 처리 실패:`,h.message)}}if(!a.productsPartial&&a.weeklyAll&&a.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[f,x]of Object.entries(a.weeklyAll)){const h=x.Total||x.TTL||{},d=h.LG||h.lg||[],u=Object.entries(h).filter(([v])=>v!=="LG"&&v!=="lg"),p=d.length?d[d.length-1]:0,C=d.length>=5?d[0]:0;let y="",m=0;for(const[v,g]of u){const I=g.length?g[g.length-1]:0;I>m&&(m=I,y=v)}p>0&&s.push({id:f,bu:zo[f]||"HS",kr:je[f]||f,category:f,date:((c=a.meta)==null?void 0:c.period)||"",score:p,prev:C,vsComp:m,compName:y,allScores:{LG:p,...y?{[y]:m}:{}}})}if(s.length&&(a.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(f=>`${f.id}=${f.score}`).join(", "))),!a.productsCnty){const f=[];for(const[x,h]of Object.entries(a.weeklyAll)){const d=je[x]||x;for(const[u,p]of Object.entries(h)){if(u==="Total"||u==="TTL")continue;const C=p.LG||p.lg||[],y=C.length?C[C.length-1]:0;if(y<=0)continue;const m=C.length>=2?C[0]:0;let v="",g=0;const I={LG:y};for(const[P,N]of Object.entries(p)){if(P==="LG"||P==="lg")continue;const j=N.length?N[N.length-1]:0;I[P]=j,j>g&&(g=j,v=P)}const M=+(y-g).toFixed(1);f.push({product:d,country:u,score:y,prev:m,compName:v,compScore:g,gap:M,allScores:I})}}f.length&&(a.productsCnty=f,console.log(`[SYNC] weeklyAll에서 productsCnty ${f.length}건 생성`))}}if(a.weeklyLabels&&a.weeklyLabels.length&&a.weeklyLabels.every((f,x)=>f===`W${x+1}`)){const f=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(f.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",f),a.weeklyLabels=f;const x=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(h=>{const d=String(h).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(h=>/^W\d+/.test(h));x.length&&(a.weeklyLabelsFull=x)}}if(a._syncIssues=sr(a,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:a._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return a}const Ft={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:B,outline:"none",boxSizing:"border-box"};function Er(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),i=Math.floor(a/24);return i>=1?`${i}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Lr({savedAt:t,ageMs:e,stale:o,style:a}){const i=t==null,n=i?"#1E293B":o?"#7F1D1D":"#064E3B",c=i?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=i?"#334155":o?"#B91C1C":"#047857",f=i?"○":o?"⚠️":"●",x=i?"동기화 정보 없음":`데이터 최신화: ${Er(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:c,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:B,whiteSpace:"nowrap",...a||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:f}),x]})}function $r({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Zt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",oe="#CF0652",de="#94A3B8",Pe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Qo={LG:oe,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Eo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Ze={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Br=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Me={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},jr={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Rr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},eo=90;function oo(t,e){const o=Pe[e]||Pe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Ir(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Pr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Qe(t){const e=String(t||"").trim().toUpperCase();return Me[e]||t}function Mr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?jr[o]||Me[o]||t:Rr[o]||Me[o]||t}let Dr=0;function Lo(t,e,o,a,i,n={}){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const c=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,s=n.baselineLabel||"",f=n.labelOffsetY||0,x=n.lineOffsetY||0,h=Dr++,d={t:18,r:10,b:20,l:10},u=o-d.l-d.r,p=a-d.t-d.b,C=t.filter(F=>F!=null);if(!C.length){let F=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const H=t.length,A=H>1?H-1:1;return F+=t.map((E,U)=>`<text x="${(d.l+U/A*u).toFixed(1)}" y="${d.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Zt}">${e[U]||""}</text>`).join(""),F+="</svg>",F}const y=Math.min(...C)-1,m=Math.max(...C)+1,v=m-y||1,g=t.length,I=g>1?g-1:1,M=t.map((F,H)=>d.l+H/I*u),P=[];t.forEach((F,H)=>{F!=null&&P.push({x:M[H],y:d.t+(1-(F-y)/v)*p,v:F,idx:H})});let N=`<svg viewBox="0 0 ${o} ${a+12}" width="100%" height="${a+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const j=c>0?P.filter(F=>F.idx<c):[],O=c>0?P.filter(F=>F.idx>=c):P,_="#64748B";if(O.length>=2){const F=O.map((A,E)=>`${E?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),H=F+` L${O[O.length-1].x.toFixed(1)},${d.t+p} L${O[0].x.toFixed(1)},${d.t+p} Z`;N+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${i}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${i}" stop-opacity="0.03"/>
    </linearGradient></defs>`,N+=`<path d="${H}" fill="url(#lg${h})"/>`,N+=`<path d="${F}" stroke="${i}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(j.length>=2){const F=j.map((H,A)=>`${A?"L":"M"}${H.x.toFixed(1)},${H.y.toFixed(1)}`).join(" ");N+=`<path d="${F}" stroke="${_}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(N+=P.map(F=>{const H=c>0&&F.idx<c;return c>0&&F.idx===c?`<circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="4" fill="#000" stroke="${i}" stroke-width="3"/>`:`<circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${H?_:i}" stroke-width="2" opacity="${H?.85:1}"/>`}).join(""),N+=P.map(F=>{const A=c>0&&F.idx<c?_:i;return`<text x="${F.x.toFixed(1)}" y="${Math.max(F.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${Zt}">${F.v.toFixed(1)}</text>`}).join(""),c>0&&s){const F=M[c];N+=`<line x1="${F.toFixed(1)}" y1="${(d.t+x).toFixed(1)}" x2="${F.toFixed(1)}" y2="${(d.t+p+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const H=F>o*.7,A=(H?d.t+p+1:d.t+8)+f;N+=`<text x="${(H?F-5:F+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${H?"end":"start"}" font-size="9" fill="#64748B" font-family="${Zt}">${s}</text>`}return N+=t.map((F,H)=>`<text x="${M[H].toFixed(1)}" y="${d.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Zt}">${e[H]||""}</text>`).join(""),N+="</svg>",N}function Se(t,e){return Qo[t]||Eo[e%Eo.length]}function tn(t,e,o,a,i={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const c=i.fadeBeforeIdx!=null?i.fadeBeforeIdx:-1,s=i.baselineLabel||"";let f=1/0,x=-1/0;if(n.forEach(g=>(t[g]||[]).forEach(I=>{I!=null&&(I<f&&(f=I),I>x&&(x=I))})),!isFinite(f))return"";const h=Math.max((x-f)*.15,2);f=Math.max(0,f-h),x=Math.min(100,x+h);const d=x-f||1,u=e.length,p=8,C=8,y=a-p-C,m="#64748B";let v="";for(let g=0;g<=4;g++){const I=p+g/4*y;v+=`<line x1="0" y1="${I.toFixed(1)}" x2="${o}" y2="${I.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((g,I)=>{const M=t[g]||[],P=Se(g,I),N=g==="LG",j=N?2.5:1.5,O=N?1:.7,_=[];if(M.forEach((E,U)=>{if(E==null)return;const W=(U+.5)/u*o,X=p+(1-(E-f)/d)*y;_.push({x:W,y:X,v:E,idx:U})}),!_.length)return;const F=c>0?_.filter(E=>E.idx<c):[],H=c>0?_.filter(E=>E.idx>=c):_;function A(E,U,W,X){if(E.length>=2){const nt=E.map((q,w)=>`${w?"L":"M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(" ");v+=`<path d="${nt}" stroke="${U}" fill="none" stroke-width="${j}" stroke-linecap="round" stroke-linejoin="round" opacity="${W}"/>`}E.forEach(nt=>{X&&nt.idx===c||(v+=`<circle cx="${nt.x.toFixed(1)}" cy="${nt.y.toFixed(1)}" r="${N?3.5:2.5}" fill="#fff" stroke="${U}" stroke-width="${N?2:1.5}" opacity="${W}"/>`)})}if(A(F,m,.85,!1),A(H,P,O,N&&c>0),N&&c>0){const E=_.find(U=>U.idx===c);E&&(v+=`<circle cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="4.5" fill="#000" stroke="${P}" stroke-width="3"/>`)}}),c>0&&s){const g=(c+.5)/u*o;v+=`<line x1="${g.toFixed(1)}" y1="${p}" x2="${g.toFixed(1)}" y2="${p+y}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const I=g>o*.7;v+=`<text x="${(I?g-5:g+5).toFixed(1)}" y="${(p+12).toFixed(1)}" text-anchor="${I?"end":"start"}" font-size="11" fill="#64748B" font-family="${Zt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${v}</svg>`}function Or({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:i,monthlyVis:n,total:c,meta:s,wLabels:f}){const x={monthlyVis:n};return`
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
${(()=>{const h=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${h(a||[])};
var _unlaunchedMap=${h(i)};
var _PROD_TO_UL=${h(Fe)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((x==null?void 0:x.monthlyVis)||[])};
var _total=${h(c)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(f)};`})()}
${(()=>{const h=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(Qo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${oe}';
var _FONT=${h(Zt)};
var _COMP='${de}';
var _REGIONS=${h(Object.fromEntries(Object.entries(Ze).map(([d,u])=>[d,u.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Ze).map(([h,d])=>[h,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
  if(!ttl.length)return null;
  ttl.sort(function(a,b){return _dateMi(a.date)-_dateMi(b.date)});
  var idx=-1;
  ttl.forEach(function(r,i){if(_dateMi(r.date)===_curMonthIdxIn12)idx=i});
  if(idx<0)return null;
  var cur=ttl[idx];var prev=idx>0?ttl[idx-1]:null;
  return{
    score:+(Number(cur.lg)||0).toFixed(1),
    prev:+(Number(prev?prev.lg:cur.lg)||0).toFixed(1),
    vsComp:+(Number(cur.comp)||0).toFixed(1),
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
`}const Nr=["audio","rac","aircare"];function _r(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Nr.includes(String(e).toLowerCase())}function zr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function De(t,e){if(!_r(t)||!e)return-1;const o=zr(t);if(o>0){const a=e.findIndex(i=>{const n=String(i||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(a>=0)return a}return e.findIndex(a=>{const i=String(a||"").trim();return/^Apr(il)?$/i.test(i)||i==="4월"})}const Oe={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Gr(t){const e=Oe[t]||Oe.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function en(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),a=Oe[e]||Oe.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.racair}</p>`:""}function Ur(t,e,o,a,i,n,c){if(!e||!Object.keys(e).length)return"";const f=["MS","HS","ES"].map(x=>{const h=t.filter(u=>u.bu===x);if(!h.length)return"";const d=h.map(u=>{var F,H;const p=((F=e[u.id])==null?void 0:F.Total)||{},C=Object.keys(p).sort((A,E)=>{var X,nt;if(A==="LG")return-1;if(E==="LG")return 1;const U=((X=p[A])==null?void 0:X[p[A].length-1])||0;return(((nt=p[E])==null?void 0:nt[p[E].length-1])||0)-U});if(!C.length)return"";const y=oo(u.status,i),m=(H=p.LG)==null?void 0:H[p.LG.length-1],v=C.map((A,E)=>{const U=Se(A,E),W=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${U};opacity:${W?1:.7}"></i><span style="font-size:13px;color:${W?"#1A1A1A":"#94A3B8"};font-weight:${W?700:400}">${A}</span></span>`}).join(""),g=o.length,I=`<colgroup><col style="width:${eo}px">${o.map(()=>"<col>").join("")}</colgroup>`,M=De(u,o),P=`<tr><td style="padding:0;border:0"></td><td colspan="${g}" style="padding:8px 0;border:0">${tn(p,o,g*80,180,{fadeBeforeIdx:M,baselineLabel:M>0?"*Baseline 재설정":""})}</td></tr>`,N=`<tr><td style="padding:0;border:0"></td><td colspan="${g}" style="padding:4px 0 6px;border:0">${v}</td></tr>`,j=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,O=C.map((A,E)=>{const U=Se(A,E),W=A==="LG",X=o.map((nt,q)=>{var z;const w=(z=p[A])==null?void 0:z[q];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${w!=null?W?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${W?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${w!=null?w.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${W?"#FFF8F9":E%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${W?700:500};color:${U};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${U};margin-right:4px;vertical-align:0"></i>${A}</td>${X}</tr>`}).join(""),_=no(u.id||u.category,n);return`<div class="trend-row${_?" is-unlaunched":""}" data-prodid="${u.id||u.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${oe};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(u,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${_?"#F1F5F9":y.bg};color:${_?"#64748B":y.color};border:1px solid ${_?"#CBD5E1":y.border}">${_?i==="en"?"Unlaunched":"미출시":y.label}</span>
          ${m!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${m.toFixed(1)}%</span>`:""}
          ${u.compName?`<span style="font-size:14px;color:#94A3B8">vs ${u.compName} ${u.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Zt}">${I}<tbody>${P}${N}${j}${O}</tbody></table></div>
        ${en(u,i)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${d}
    </div>`:""}).join("");return f.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${i==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${f}</div>
  </div>`:""}function Hr(t,e,o,a,i,n){if(!e||!e.length)return"";const c=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(p){const C=String(p||""),y=C.match(/(\d{1,2})월/);if(y)return parseInt(y[1])-1;const m=C.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(m)return f[m[1].toLowerCase()];const v=C.match(/\d{4}[-\/](\d{1,2})/);return v?parseInt(v[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],d=s.slice(),u=c.map(p=>{const C=t.filter(m=>m.bu===p);if(!C.length)return"";const y=C.map(m=>{const v=m.monthlyScores||[];let g={};if(v.length>=2){const W=new Set;if(v.forEach(X=>{X.allScores&&Object.keys(X.allScores).forEach(nt=>W.add(nt))}),W.forEach(X=>{g[X]=h.map(nt=>{var w;const q=v.find(z=>x(z.date)===nt);return((w=q==null?void 0:q.allScores)==null?void 0:w[X])??null})}),!W.size&&(g.LG=h.map(X=>{const nt=v.find(q=>x(q.date)===X);return nt?nt.score:null}),m.vsComp>0)){const X=h.map(nt=>{const q=v.find(w=>x(w.date)===nt);return(q==null?void 0:q.comp)??null});X.some(nt=>nt!=null)&&(g[m.compName||"Comp"]=X)}}else{const W=e.filter(w=>w.division===p&&(w.country==="TOTAL"||w.country==="TTL")),X={};W.forEach(w=>{const z=x(w.date);z>=0&&(X[z]=w)});const nt=h.map(w=>{var z;return((z=X[w])==null?void 0:z.lg)||null}),q=h.map(w=>{var z;return((z=X[w])==null?void 0:z.comp)||null});g={LG:nt},q.some(w=>w!=null&&w>0)&&(g.Samsung=q)}const I=Object.keys(g).sort((W,X)=>{if(W==="LG")return-1;if(X==="LG")return 1;const nt=(g[W]||[]).filter(w=>w!=null).pop()||0;return((g[X]||[]).filter(w=>w!=null).pop()||0)-nt});if(!I.length)return"";const M=oo(m.status,a),P=(g.LG||[]).filter(W=>W!=null).pop(),N=I.map((W,X)=>{const nt=Se(W,X),q=W==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${nt};opacity:${q?1:.7}"></i><span style="font-size:13px;color:${q?"#1A1A1A":"#94A3B8"};font-weight:${q?700:400}">${W}</span></span>`}).join(""),j=d.length,O=`<colgroup><col style="width:${eo}px">${d.map(()=>"<col>").join("")}</colgroup>`,_=De(m,d),F=`<tr><td style="padding:0;border:0"></td><td colspan="${j}" style="padding:8px 0;border:0">${tn(g,d,j*80,180,{fadeBeforeIdx:_,baselineLabel:_>0?"*Baseline 재설정":""})}</td></tr>`,H=`<tr><td style="padding:0;border:0"></td><td colspan="${j}" style="padding:4px 0 6px;border:0">${N}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(W=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${W}</th>`).join("")}</tr>`,E=I.map((W,X)=>{const nt=Se(W,X),q=W==="LG",w=d.map((z,S)=>{var V;const J=(V=g[W])==null?void 0:V[S];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${J!=null?q?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${q?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${J!=null?J.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${q?"#FFF8F9":X%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${q?700:500};color:${nt};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${nt};margin-right:4px;vertical-align:0"></i>${W}</td>${w}</tr>`}).join(""),U=no(m.id||m.category,i);return`<div class="trend-row${U?" is-unlaunched":""}" data-prodid="${m.id||m.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${oe};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(m,i)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${U?"#F1F5F9":M.bg};color:${U?"#64748B":M.color};border:1px solid ${U?"#CBD5E1":M.border}">${U?a==="en"?"Unlaunched":"미출시":M.label}</span>
          ${P!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${P.toFixed(1)}%</span>`:""}
          ${m.compName?`<span style="font-size:14px;color:#94A3B8">vs ${m.compName} ${m.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Zt}">${O}<tbody>${F}${H}${A}${E}</tbody></table></div>
        ${en(m,a)}
      </div>`}).join("");return y?`<div class="bu-group" data-bu="${p}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${p}</span></div>
      ${y}
    </div>`:""}).join("");return u.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${u}</div>
  </div>`:""}function on(){return""}function $o(t,e,o,a,i){const n=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,s=+(t.score-c).toFixed(1),f=n>0?"▲":n<0?"▼":"─",x=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section"${i==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
          <span class="hero-delta" style="color:${x}">${f} ${Math.abs(n).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${oe}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${de}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${oe}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${de}"></i> Samsung ${c}%</span>`:""}
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
  </div>`}function we(t,e){const o=Fe[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function no(t,e){return Br.every(o=>{const a=Fe[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function ro(t,e){return we(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Bo(t,e,o,a,i,n,c,s,f){if(!t.length)return"";const h=["MS","HS","ES"].map(d=>{const u=t.filter(C=>C.bu===d);if(!u.length)return"";const p=u.map(C=>{var Ct,Tt;const y=C.weekly||[],m=y.filter(bt=>bt!=null),v=C.weeklyScore||(m.length>0?m[m.length-1]:C.score),g=C.monthlyScore||C.score,I=v,M=((Ct=s==null?void 0:s[C.id])==null?void 0:Ct.Total)||((Tt=s==null?void 0:s[C.id])==null?void 0:Tt.TTL)||{};let P=0;Object.entries(M).forEach(([bt,D])=>{if(bt==="LG"||bt==="lg")return;const Y=Array.isArray(D)&&D.length?D[D.length-1]:0;Y>P&&(P=Y)});const N=C.vsComp||0,j=P>0?v/P*100:N>0?v/N*100:100,O=N>0?g/N*100:100,_=Math.round(j*10)/10,F=Math.round(O*10)/10,H=_,A=j>=100?"lead":j>=80?"behind":"critical",E=oo(A,a),U=m.length>=1?m[m.length-1]:null,W=m.length>=2?m[m.length-2]:null,X=U!=null&&W!=null?+(U-W).toFixed(1):null,nt=X>0?"▲":X<0?"▼":"─",q=X>0?"#22C55E":X<0?"#EF4444":"#94A3B8",w=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function J(bt){const D=String(bt||""),Y=D.match(/(\d{1,2})월/);if(Y)return parseInt(Y[1])-1;const mt=D.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(mt)return S[mt[1].toLowerCase()];const K=D.match(/\d{4}[-\/](\d{1,2})/);return K?parseInt(K[1])-1:-1}let V=C.monthlyScores||[];if(V.length<2&&c.length>0){const bt=c.filter(Y=>Y.division===C.bu&&(Y.country==="TOTAL"||Y.country==="TTL")),D={};bt.forEach(Y=>{const mt=J(Y.date);mt>=0&&(D[mt]={date:Y.date,score:Y.lg,comp:Y.comp})}),V=Object.keys(D).sort((Y,mt)=>Y-mt).map(Y=>D[Y])}const k=V.length>0?V.map(bt=>{const D=J(bt.date);return D>=0?z[D]:bt.date}):["M-3","M-2","M-1","M0"],T=V.length>0?V.map(bt=>bt.score):[null,null,null,C.score],$=V.length>=2?+(V[V.length-1].score-V[V.length-2].score).toFixed(1):null,tt=$>0?"▲":$<0?"▼":"─",Z=$>0?"#22C55E":$<0?"#EF4444":"#94A3B8",at=H,yt=at>=100?"#15803D":at>=80?"#D97706":"#BE123C",wt=C.weeklyPrev||(m.length>=5?m[m.length-5]:m[0]||0),kt=v&&wt?+(v-wt).toFixed(1):null,R=g&&(C.monthlyPrev||C.prev)?+(g-(C.monthlyPrev||C.prev)).toFixed(1):null,Q=we(C.id||C.category,n),et=no(C.id||C.category,n),gt=et?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:E;return`<div class="prod-card${et?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${v.toFixed(1)}" data-ms="${g.toFixed(1)}" data-wr="${_}" data-mr="${F}" data-wmom="${kt??""}" data-mmom="${R??""}" style="border-color:${gt.border}">
        <div class="prod-head">
          <span class="prod-name">${ro(C,n)}</span>
          ${Q.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${gt.bg};color:${gt.color};border-color:${gt.border}">${gt.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${I.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${q}">${X!=null?`WoW ${nt} ${Math.abs(X).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Z}">${$==null?"MoM —":`MoM ${tt} ${Math.abs($).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const bt=i.slice(-10),D=De(C,bt),Y=String(C.id||"").toLowerCase(),mt=Y==="aircare"?30:Y==="rac"?20:0;return Lo(y.slice(-10),bt,300,90,w,{fadeBeforeIdx:D,baselineLabel:D>0?"*Baseline 재설정":"",labelOffsetY:mt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const bt=De(C,k),Y=String(C.id||"").toLowerCase()==="audio";return Lo(T,k,300,90,w,{fadeBeforeIdx:bt,baselineLabel:bt>0?"*Baseline 재설정":"",labelOffsetY:Y?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(at,120)}%;background:${yt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${yt}">${at}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${u.length}${o.categories}</span></div>
      <div class="prod-grid">${p}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${f||""}${f?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${on(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const d=t.filter(u=>we(u.id||u.category,n).length>0).map(u=>`${(u.id||"").toLowerCase()==="audio"||u.kr==="오디오"?"Audio-Sound Suite":u.kr}: ${we(u.id||u.category,n).map(p=>Mr(p,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Gr(a)})()}</div>
  </div>`}function jo(t,e,o,a){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Fe[n]||(n||"").toUpperCase(),s=a&&a[`${t.country}|${c}`],f=Pr(t.score,t.compScore),x=s?"#94A3B8":f==="lead"?"#15803D":f==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),d=s?"#64748B":h>=0?"#15803D":"#BE123C",u=130,p=["TCL","HISENSE","HAIER"];let C="",y=0;t.allScores&&Object.entries(t.allScores).forEach(([O,_])=>{const F=String(O).toUpperCase();p.some(A=>F.includes(A))&&_>y&&(C=O,y=_)});const m=Math.max(e,y),v=s?1:t.score,g=Math.max(3,Math.round(v/m*u)),I=t.compScore>0?Math.max(3,Math.round(t.compScore/m*u)):0,M=y>0?Math.max(3,Math.round(y/m*u)):0,P="#9333EA",N=s?"—":t.score.toFixed(1),j=s?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${N}</span>
        <div class="vbar-col" style="height:${g}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${de}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${I}px;background:${de}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${y>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${P}">${y.toFixed(1)}</span>
        <div class="vbar-col" style="height:${M}px;background:${P}"></div>
        <span class="vbar-col-name" style="color:${P}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${j}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Ro(t,e,o,a,i,n){if(!t||!t.length)return"";const c=new Map;t.forEach(p=>{c.has(p.product)||c.set(p.product,[]),c.get(p.product).push(p)});const s=e.cntyProductFilter||{},f=[...c.entries()].filter(([p])=>s[p]!==!1).map(([p,C])=>{const y=Math.max(...C.map(v=>Math.max(v.score,v.compScore)),1),m=C.map(v=>jo(v,y,Qe(v.country),i)).join("");return`<div class="cnty-product" data-group-product="${p}"><div class="bu-header"><span class="bu-label">${p}</span></div><div class="vbar-chart">${m}</div></div>`}).join(""),x=new Map;t.forEach(p=>{x.has(p.country)||x.set(p.country,[]),x.get(p.country).push(p)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],u=h.filter(p=>x.has(p)).concat([...x.keys()].filter(p=>!h.includes(p))).map(p=>{const C=x.get(p);if(!C)return"";const y=Math.max(...C.map(v=>Math.max(v.score,v.compScore)),1),m=C.map(v=>jo(v,y,v.product,i)).join("");return`<div class="cnty-product" data-group-country="${p}"><div class="bu-header"><span class="bu-label">${Qe(p)}</span></div><div class="vbar-chart">${m}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${de}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${on(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${u}</div>
      <div class="cnty-view-product" style="display:none">${f}</div>
      ${(()=>{if(!i||!Object.keys(i).length)return"";const p={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},y=[...new Set(t.map(m=>m.product))].map(m=>{const v=p[m]||String(m).toLowerCase(),g=we(v,i),I=v==="audio"?"Audio-Sound Suite":m;return g.length?`${I}: ${g.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return y.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${y.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Io={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Wr(t){const e=Io[t]||Io.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(i=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${i.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${i.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Vr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",a=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",i=e==="en"?"All":"전체",n=e==="en"?"Total":"총",c=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",f=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],x={};f.forEach(p=>{const C=new Set;t.forEach(y=>{y[p.key]&&C.add(y[p.key])}),x[p.key]=[...C].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(x).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),u=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${a}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${c?" "+c:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${s}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${f.map(p=>`<th data-col="${p.key}" onclick="_plToggle('${p.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${p.label} <span id="pl-arrow-${p.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${f.map(p=>`<div id="pl-dd-${p.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${p.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${i}</div>
      ${x[p.key].map(C=>`<div onclick="_plFilter('${p.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${h};
    var _plFilters={};
    var _divC=${d};
    var _cejC=${u};
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
      ${JSON.stringify(f.map(p=>p.key))}.forEach(function(k){
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
  <\/script>`}function Po(t,e,o,a,i,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const c=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let F=0;F<12;F++)s.push("w"+(5+F));const f=[...new Set(t.map(F=>F.topic))].filter(Boolean),x=[...new Set(t.map(F=>F.type))].filter(Boolean),h=[...new Set(t.map(F=>F.country))].filter(F=>F&&F!=="TTL"),d=c.filter(F=>h.includes(F)).concat(c.filter(F=>!h.includes(F))),u=JSON.stringify(t).replace(/</g,"\\u003c"),p=JSON.stringify(s),C=JSON.stringify(f),y=JSON.stringify(x),m=JSON.stringify(d),v=72;function g(F){const H={};return F&&String(F).split(`
`).forEach(A=>{const E=A.indexOf("=");if(E>0){const U=A.slice(0,E).trim(),W=A.slice(E+1).trim();U&&(H[U]=W)}}),H}const I=g(a==null?void 0:a.prTopicPromptsRaw);i&&i.length&&f.forEach(F=>{if(!I[F]){const H=i.find(A=>A.topic===F&&A.country==="US");H&&(I[F]=H.prompt)}});const M=(n==null?void 0:n.prTopicList)||[],P={},N={};M.forEach(F=>{[F.topic,F.topicRow,F.oldTopic].filter(Boolean).map(A=>A.trim()).forEach(A=>{F.explanation&&!P[A]&&(P[A]=F.explanation),F.bu&&!N[A]&&(N[A]=F.bu)})});const O={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...P,...g(a==null?void 0:a.prTopicDescsRaw)},_={};return f.forEach(F=>{const H=N[F];if(H)_[F]=H;else{const A=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];_[F]=A.some(E=>F.toLowerCase().includes(E.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Zt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${oe};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${u},W=${p},TP=${C},TY=${y},CN=${m};
    var CW=${v};
    var TOPIC_CAT=${JSON.stringify(_)};
    var TOPIC_PROMPT=${JSON.stringify(I).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(O).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(M).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Me)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${oe}',COMP='${de}';
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
  <\/script>`}function Mo(t,e,o,a,i,n){const c=(t||[]).filter(y=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let y=0;y<12;y++)s.push("w"+(5+y));const x=[...new Set(c.map(y=>y.stakeholder))].filter(Boolean).map(y=>({stakeholder:y,topics:[...new Set(c.filter(m=>m.stakeholder===y).map(m=>m.topic))].filter(Boolean)})),h=72,d=JSON.stringify(c).replace(/</g,"\\u003c"),u=JSON.stringify(s),p=JSON.stringify(x),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Zt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${i||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${oe};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${u},GROUPS=${p};
    var CW=${h},RED='${oe}';
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
  <\/script>`}function Kr(t,e,o,a,i,n,c,s,f,x,h,d,u,p){var Ct,Tt,bt;u!=null&&u.llmModel&&u.llmModel!=="Total"&&(o=Ho(o,u.llmModel),c=Wo(c,u.llmModel),e=Vo(e,u.monthlyVis,u.llmModel),u.monthlyVis&&(u={...u,monthlyVis:An(u.monthlyVis,u.llmModel)})),o=(o||[]).map(D=>({...D,weekly:(D.weekly||[]).map(Y=>Y??0),monthly:(D.monthly||[]).map(Y=>Y??0)})),x&&typeof x=="object"&&Object.values(x).forEach(D=>{!D||typeof D!="object"||Object.values(D).forEach(Y=>{!Y||typeof Y!="object"||Object.keys(Y).forEach(mt=>{const K=Y[mt];Array.isArray(K)&&(Y[mt]=K.map(G=>G??0))})})});const C={aircare:"Xiaomi"};o=o.map(D=>{const Y=C[(D.id||"").toLowerCase()];if(!Y||!D.allScores)return D;const mt=Object.entries(D.allScores).find(([ut])=>ut.toLowerCase()===Y.toLowerCase()&&ut.toLowerCase()!=="lg");if(!mt)return D;const K=mt[1];if(!(K>0))return D;const G=Math.round(D.score/K*100);return{...D,compName:mt[0],vsComp:K,compRatio:G,status:G>=100?"lead":G>=80?"behind":"critical"}});const y=(u==null?void 0:u.visibilityOnly)||!1,m=(u==null?void 0:u.includePromptList)||!1,v=(u==null?void 0:u.includeReadability)===!0,g=(p==null?void 0:p.unlaunchedMap)||{},M=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,P=Pe[n]||Pe.ko;let N;if(f&&f.length)N=f.map(D=>String(D).toUpperCase().startsWith("W")?D.toUpperCase():D);else{const D=x?Math.max(...Object.values(x).flatMap(mt=>Object.values(mt).flatMap(K=>Object.values(K).map(G=>(G==null?void 0:G.length)||0))),0):0,Y=t.weekStart||Math.max(1,D-11);N=Array.from({length:Math.max(12,D)},(mt,K)=>`W${Y+K}`)}const j=new Set;x&&Object.values(x).forEach(D=>Object.keys(D).forEach(Y=>{Y!=="Total"&&j.add(Y)})),c&&c.forEach(D=>{D.country&&D.country!=="TTL"&&j.add(D.country)});const O=[...j].sort(),_=n==="en"?"All":"전체",F=["MS","HS","ES"],H=o.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${D.bu}" value="${D.id}" checked onchange="onFilterChange()"><span>${D.kr}</span></label>`).join(""),A=F.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${D}" checked onchange="onBuChange('${D}')"><span>${D}</span></label>`).join(""),E=O.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${D}" checked onchange="onFilterChange()"><span>${Qe(D)}</span></label>`).join(""),U=Object.entries(Ze).map(([D,Y])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${D}" checked onchange="onRegionChange('${D}')"><span>${Y.labelEn}</span></label>`).join(""),W=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,X=u!=null&&u.weeklyLabelsFull&&u.weeklyLabelsFull.length===N.length?u.weeklyLabelsFull:N,nt=N.map((D,Y)=>`<option value="${Y}"${Y===N.length-1?" selected":""}>${X[Y]||D}</option>`).join(""),q=(((Ct=o[0])==null?void 0:Ct.monthlyScores)||[]).map(D=>{const Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=String(D.date).match(/(\d{1,2})월/),K=String(D.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return mt?Y[parseInt(mt[1])-1]:K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():D.date}),w=q.map((D,Y)=>`<option value="${Y}"${Y===q.length-1?" selected":""}>${D}</option>`).join(""),z=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Zt}`,S=new Set(["Total"]);(o||[]).forEach(D=>(D.monthlyScores||[]).forEach(Y=>Object.keys(Y.byLlm||{}).forEach(mt=>S.add(mt)))),(c||[]).forEach(D=>(D.monthlyScores||[]).forEach(Y=>Object.keys(Y.byLlm||{}).forEach(mt=>S.add(mt)))),((u==null?void 0:u.monthlyVis)||[]).forEach(D=>{D.llmModel&&S.add(D.llmModel)});const J=["Total",...Array.from(S).filter(D=>D!=="Total").sort((D,Y)=>D.localeCompare(Y))],V=(u==null?void 0:u.llmModel)||"Total",k=J.map(D=>`<option value="${D}"${D===V?" selected":""}>${D}</option>`).join(""),T=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${W}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${N[N.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${N.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${z}">${nt}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${z}"${q.length>0?"":" disabled"}>${w||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${z};opacity:0.55;cursor:not-allowed" disabled>${k}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${_}</span></label>
        ${A}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${_}</span></label>
        ${H}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${_}</span></label>
        ${U}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${_}</span></label>
        ${E}
      </div>
    </div>
  </div>`,$=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Ir(t.noticeText)}</div></div>`:"",tt=[$,t.showTotal!==!1?$o(e,t,P,n,"weekly"):""].join(""),Z=[$,t.showTotal!==!1?$o(e,t,P,n,"monthly"):""].join(""),at=[];if(x&&Object.keys(x).length){const D=je;Object.entries(x).forEach(([Y,mt])=>{const K=o.find(ut=>ut.id===Y),G=(K==null?void 0:K.kr)||D[Y]||Y;Object.entries(mt).forEach(([ut,jt])=>{if(ut==="Total"||ut==="TTL"||ut==="TOTAL")return;const Bt=jt.LG||jt.lg||[],Mt=Bt.length>0?Bt[Bt.length-1]:0;if(Mt<=0)return;let Jt="",Yt=0;Object.entries(jt).forEach(([Ut,Dt])=>{if(Ut==="LG"||Ut==="lg")return;const zt=Array.isArray(Dt)&&Dt.length?Dt[Dt.length-1]:0;zt>Yt&&(Yt=zt,Jt=Ut)});const Vt=+(Mt-Yt).toFixed(1),Qt={};Object.entries(jt).forEach(([Ut,Dt])=>{if(Array.isArray(Dt)&&Dt.length){const zt=Dt[Dt.length-1];zt!=null&&(Qt[Ut]=zt)}}),at.push({product:G,country:ut,score:Mt,compName:Jt,compScore:Yt,gap:Vt,allScores:Qt})})})}const yt=((Tt=u==null?void 0:u.weeklyLabelsFull)==null?void 0:Tt[u.weeklyLabelsFull.length-1])||N[N.length-1]||"",wt=yt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${yt} ${n==="en"?"data":"기준"}</span>`:"",kt=[tt,t.showProducts!==!1?Bo(o,t,P,n,N,g,(u==null?void 0:u.monthlyVis)||[],x,wt):"",`<div id="trend-container">${Ur(o,x,N,P,n,g,wt)}</div>`,t.showCnty!==!1?Ro(at,t,P,n,g,wt):""].join(""),R=o.map(D=>{const Y=D.monthlyScore||D.score,mt=D.monthlyPrev||D.prev,K=D.vsComp||0,G=K>0?Y/K*100:100;return{...D,score:Y,prev:mt,weeklyScore:Y,weeklyPrev:mt,monthlyScore:Y,monthlyPrev:mt,weekly:(D.monthlyScores||[]).map(ut=>ut.score),status:G>=100?"lead":G>=80?"behind":"critical"}}),Q=(((bt=o[0])==null?void 0:bt.monthlyScores)||[]).map(D=>{const Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=String(D.date).match(/(\d{1,2})월/),K=String(D.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return mt?Y[parseInt(mt[1])-1]:K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():D.date}),et=(u==null?void 0:u.monthlyVis)||[],lt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",gt=[Z,t.showProducts!==!1?Bo(R,t,P,n,Q.length?Q:["Feb","Mar"],g,et,{},lt):"",`<div id="monthly-trend-container">${Hr(R,et,P,n,g,lt)}</div>`,t.showCnty!==!1?Ro(c,t,P,n,g,lt):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${$r({FONT:Zt,RED:oe,COMP:de})}</style>
</head>
<body>
${y?`
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
  ${Po(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Mo(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${v?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${m?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${Po(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Mo(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${v?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${P.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${M}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Vr(p==null?void 0:p.appendixPrompts,n)}
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
${Or({lang:n,weeklyAll:x,products:o,productsCnty:c,ulMap:g,monthlyVis:u==null?void 0:u.monthlyVis,total:e,meta:t,wLabels:N})}
<\/script>
</body>
</html>`}function qr(t){const e=t.filter(f=>f.status==="lead"),o=t.filter(f=>f.status==="behind"),a=t.filter(f=>f.status==="critical"),i=[...t].sort((f,x)=>x.score-f.score)[0],n=[...t].sort((f,x)=>f.score-x.score)[0],c=(t.reduce((f,x)=>f+x.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),i&&s.push(`가장 높은 카테고리는 ${i.kr} ${i.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(i.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?s.push(`취약 카테고리(${a.map(f=>f.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(f=>f.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Jr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Yr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const ft=Rt,Xr={citation:[ft.meta,ft.citTouchPoints,ft.citDomain,ft.citPageType],"weekly-report":[ft.meta,ft.visSummary,ft.citTouchPoints,ft.citPageType,ft.productMS,ft.productHS,ft.productES,ft.weeklyMS,ft.weeklyHS,ft.weeklyES],"monthly-report":[ft.meta,ft.visSummary,ft.citTouchPoints,ft.citPageType,ft.productMS,ft.productHS,ft.productES,ft.weeklyMS,ft.weeklyHS,ft.weeklyES],dashboard:[ft.meta,ft.visSummary,ft.citTouchPoints,ft.citDomain,ft.citPageType,ft.productMS,ft.productHS,ft.productES,ft.weeklyMS,ft.weeklyHS,ft.weeklyES,ft.weeklyPR,ft.weeklyBrandPrompt,ft.appendix,ft.unlaunched,ft.prTopicList],newsletter:[ft.meta,ft.visSummary,ft.citTouchPoints,ft.citDomain,ft.citPageType,ft.productMS,ft.productHS,ft.productES,ft.weeklyMS,ft.weeklyHS,ft.weeklyES,ft.unlaunched]};function Zr(t){return Xr[t]||[]}const Do="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Qr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ti({url:t,downloadName:e="sheet",mode:o}){const[a,i]=it.useState(!1),[n,c]=it.useState(""),s=o?Zr(o):[],f=s.length?"zip":"xlsx",x=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const d=Qr(t);if(!d){c("ERROR: 동기화 URL 비어있거나 잘못됨");return}i(!0),c("");try{const u=new URLSearchParams({id:d,name:e});s.length&&u.set("tabs",s.join(","));const p=await fetch(`/api/sheet-download?${u.toString()}`,{credentials:"include"});if(!p.ok){const m=await p.text().catch(()=>"");let v=m;try{const g=JSON.parse(m);v=g.error||g.detail||m}catch{}throw new Error(`(${p.status}) ${v}`)}const C=await p.blob(),y=document.createElement("a");y.href=URL.createObjectURL(C),y.download=`${e}.${f}`,document.body.appendChild(y),y.click(),y.remove(),setTimeout(()=>URL.revokeObjectURL(y.href),1e3),c("다운로드 완료")}catch(u){c("ERROR: "+(u.message||String(u)))}finally{i(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:h,disabled:a||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:a||!t?"#1E293B":"#1D4ED8",color:a||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Do,cursor:a||!t?"not-allowed":"pointer"},children:a?"다운로드 중…":x}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Do,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function ei({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:i,metaEn:n,setMetaEn:c,total:s,setTotal:f,products:x,setProducts:h,citations:d,setCitations:u,dotcom:p,setDotcom:C,productsCnty:y,setProductsCnty:m,citationsCnty:v,setCitationsCnty:g,resolved:I,previewLang:M,setPreviewLang:P,snapshots:N,setSnapshots:j,setWeeklyLabels:O,setWeeklyAll:_,weeklyLabels:F,weeklyAll:H,citationsByCnty:A,dotcomByCnty:E,generateHTML:U,publishEndpoint:W,setMonthlyVis:X,onSyncExtra:nt,categoryStats:q,extra:w,monthlyVis:z,progressMonth:S,setProgressMonth:J,progressDataMonth:V}){const k=it.useRef({products:x,productsCnty:y,citations:d,citationsCnty:v,total:s,dotcom:p,extra:w});k.current={products:x,productsCnty:y,citations:d,citationsCnty:v,total:s,dotcom:p,extra:w};function T(){return k.current}const[$,tt]=it.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Z,at]=it.useState(!1),[yt,wt]=it.useState(null),[kt,R]=it.useState(""),[Q,et]=it.useState(""),[lt,gt]=it.useState(!1),[Ct,Tt]=it.useState(""),[bt,D]=it.useState(!1),[Y,mt]=it.useState(!1),[K,G]=it.useState(!1),[ut,jt]=it.useState(!1),[Bt,Mt]=it.useState(""),[Jt,Yt]=it.useState(!1),[Vt,Qt]=it.useState(!0),[Ut,Dt]=it.useState(""),[zt,fe]=it.useState(null),[pe,ze]=it.useState([]),Ht=t==="newsletter",[te,Ge]=it.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function Ue(){Ht&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&ze(l.months)}).catch(()=>{})}it.useEffect(()=>{if(Ht){Ue();return}fetch(W||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(b=>b.ok?b.json():null).then(fe).catch(()=>{})},[t,W,Ht]);const nn=(()=>{const l=new Set,b=new Date;for(let ot=0;ot<24;ot++){const Et=new Date(b.getFullYear(),b.getMonth()-ot,1);l.add(`${Et.getFullYear()}-${String(Et.getMonth()+1).padStart(2,"0")}`)}for(const ot of pe)l.add(ot.month);return te&&l.add(te),[...l].sort((ot,Et)=>Et.localeCompare(ot))})();function Te(l){const[b,ot]=l.split("-");return`${b}년 ${parseInt(ot,10)}월`}const[rn,io]=it.useState(null);it.useEffect(()=>{let l=!0;const b=()=>bo(t).then(Et=>{l&&io(Et)});b();const ot=setInterval(b,6e4);return()=>{l=!1,clearInterval(ot)}},[t]);function an(){bo(t).then(io)}async function sn(){if(!ut){jt(!0),Mt("");try{const l=T(),b=Be(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),ot=Be(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let Et,Gt,rt;if(t==="dashboard"){const ht=z||[],St=l.extra||w||{};Et=U(a,l.total,b.products,b.citations,l.dotcom,"ko",b.productsCnty,b.citationsCnty,F,H,A,E,ht,St),Gt=U(n,l.total,ot.products,ot.citations,l.dotcom,"en",ot.productsCnty,ot.citationsCnty,F,H,A,E,ht,St),rt=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else Et=U(a,l.total,b.products,b.citations,p,"ko",b.productsCnty,b.citationsCnty,{weeklyLabels:F,categoryStats:q,unlaunchedMap:(w==null?void 0:w.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(w==null?void 0:w.citTouchPointsTrend)||null,citTrendMonths:(w==null?void 0:w.citTrendMonths)||[],citDomainTrend:(w==null?void 0:w.citDomainTrend)||null,citDomainMonths:(w==null?void 0:w.citDomainMonths)||[]}),Gt=U(n,l.total,ot.products,ot.citations,p,"en",ot.productsCnty,ot.citationsCnty,{weeklyLabels:F,categoryStats:q,unlaunchedMap:(w==null?void 0:w.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(w==null?void 0:w.citTouchPointsTrend)||null,citTrendMonths:(w==null?void 0:w.citTrendMonths)||[],citDomainTrend:(w==null?void 0:w.citDomainTrend)||null,citDomainMonths:(w==null?void 0:w.citDomainMonths)||[]}),rt=`${a.period||""} ${a.title||"Newsletter"}`.trim();const se=W||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),L={title:rt,htmlKo:Et,htmlEn:Gt};Ht&&(L.month=te);const Lt=await(await fetch(se,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(L)})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if(fe({...Lt,published:!0}),Ht&&Ue(),t==="dashboard")try{const ht=await Re(t)||{},St=l.extra||w||{};xo(t,{...ht,meta:a,total:l.total,weeklyPR:St.weeklyPR||ht.weeklyPR,weeklyPRLabels:St.weeklyPRLabels||ht.weeklyPRLabels,weeklyBrandPrompt:St.weeklyBrandPrompt||ht.weeklyBrandPrompt,weeklyBrandPromptLabels:St.weeklyBrandPromptLabels||ht.weeklyBrandPromptLabels,appendixPrompts:St.appendixPrompts||ht.appendixPrompts})}catch{}const Wt=`${window.location.origin}${Lt.urls.ko}`,xt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(Wt+`
`+xt)}catch{}Mt(`KO: ${Wt}
EN: ${xt}`)}catch(l){Mt("ERROR:"+l.message)}finally{jt(!1),setTimeout(()=>Mt(""),2e4)}}}async function ln(){if(!Jt){Yt(!0),Dt("");try{const l=await Zn(Kr,Be,{includeProgressTracker:Vt});Dt(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){Dt("ERROR: "+l.message)}finally{Yt(!1),setTimeout(()=>Dt(""),15e3)}}}async function ao(l){try{const b=W||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),ot=Ht?`${b}?month=${encodeURIComponent(l||te)}`:b;(await(await fetch(ot,{method:"DELETE"})).json()).ok&&(Ht?Ue():fe(null))}catch{}}async function cn(){if(M!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}mt(!0)}async function so(l){mt(!1),G(!0);const b=(l==null?void 0:l.products)??x,ot=(l==null?void 0:l.productsCnty)??y,Et=(l==null?void 0:l.citations)??d,Gt=(l==null?void 0:l.citationsCnty)??v;try{const rt=a,se=[rt.title||"",rt.dateLine||"",rt.noticeText||"",rt.totalInsight||"",rt.reportType||"",rt.productInsight||"",rt.productHowToRead||"",rt.citationInsight||"",rt.citationHowToRead||"",rt.dotcomInsight||"",rt.dotcomHowToRead||"",rt.todoText||"",rt.todoNotice||"",rt.kpiLogicText||"",rt.cntyInsight||"",rt.cntyHowToRead||"",rt.citDomainInsight||"",rt.citDomainHowToRead||"",rt.citCntyInsight||"",rt.citCntyHowToRead||"",rt.citPrdInsight||"",rt.citPrdHowToRead||"",rt.period||"",rt.team||"",rt.reportNo||"",rt.monthlyReportBody||""],L=b.map(pt=>pt.kr||""),It=b.map(pt=>pt.compName||""),Lt=Et.map(pt=>pt.category||""),Wt=[...new Set(ot.map(pt=>pt.country||""))],xt=[...new Set(ot.map(pt=>pt.product||""))],ht=[...new Set(ot.map(pt=>pt.compName||""))],St=[...new Set(Gt.map(pt=>pt.cnty||"").filter(pt=>pt&&pt!=="TTL"))],At=[...se,...L,...It,...Lt,...Wt,...xt,...ht,...St].map(pt=>pt||" "),dt=await tr(At,{from:"ko",to:"en"});let st=0;const ie={...a,title:dt[st++]||rt.title,dateLine:dt[st++]||rt.dateLine,noticeText:dt[st++]||rt.noticeText,totalInsight:dt[st++]||rt.totalInsight,reportType:dt[st++]||rt.reportType,productInsight:dt[st++]||rt.productInsight,productHowToRead:dt[st++]||rt.productHowToRead,citationInsight:dt[st++]||rt.citationInsight,citationHowToRead:dt[st++]||rt.citationHowToRead,dotcomInsight:dt[st++]||rt.dotcomInsight,dotcomHowToRead:dt[st++]||rt.dotcomHowToRead,todoText:dt[st++]||rt.todoText,todoNotice:dt[st++]||rt.todoNotice,kpiLogicText:dt[st++]||rt.kpiLogicText,cntyInsight:dt[st++]||rt.cntyInsight,cntyHowToRead:dt[st++]||rt.cntyHowToRead,citDomainInsight:dt[st++]||rt.citDomainInsight,citDomainHowToRead:dt[st++]||rt.citDomainHowToRead,citCntyInsight:dt[st++]||rt.citCntyInsight,citCntyHowToRead:dt[st++]||rt.citCntyHowToRead,citPrdInsight:dt[st++]||rt.citPrdInsight,citPrdHowToRead:dt[st++]||rt.citPrdHowToRead,period:(st++,rt.period),team:dt[st++]||rt.team,reportNo:(st++,rt.reportNo),monthlyReportBody:dt[st++]||rt.monthlyReportBody},Kt=pt=>pt&&pt.replace(/\b\w/g,vt=>vt.toUpperCase()),ne=pt=>(pt||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),le={};b.forEach((pt,vt)=>{le[pt.id]={en:Kt(dt[st+vt]||pt.kr),compNameEn:ne(dt[st+L.length+vt]||pt.compName)}}),st+=L.length+It.length;const Xt={};Et.forEach((pt,vt)=>{Xt[`${pt.rank}_${pt.source}`]=Kt(dt[st+vt]||pt.category)}),st+=Lt.length;const he={};Wt.forEach((pt,vt)=>{he[pt]=/^[A-Z]{2,3}$/.test(pt)?pt:dt[st+vt]||pt}),st+=Wt.length;const Ae={};xt.forEach((pt,vt)=>{Ae[pt]=dt[st+vt]||pt}),st+=xt.length;const be={};ht.forEach((pt,vt)=>{be[pt]=dt[st+vt]||pt}),st+=ht.length;const xe={};St.forEach((pt,vt)=>{xe[pt]=/^[A-Z]{2,3}$/.test(pt)?pt:dt[st+vt]||pt}),c(ie),h(pt=>pt.map(vt=>{var lo,co;return{...vt,en:((lo=le[vt.id])==null?void 0:lo.en)||vt.en||vt.kr,compNameEn:((co=le[vt.id])==null?void 0:co.compNameEn)||vt.compNameEn||vt.compName}})),u(pt=>pt.map(vt=>({...vt,categoryEn:Xt[`${vt.rank}_${vt.source}`]||vt.categoryEn||vt.category}))),m(pt=>pt.map(vt=>({...vt,countryEn:Kt(he[vt.country]||vt.country),productEn:Kt(Ae[vt.product]||vt.product),compNameEn:ne(be[vt.compName]||vt.compName)}))),g(pt=>pt.map(vt=>({...vt,cntyEn:vt.cnty==="TTL"?"TTL":Kt(xe[vt.cnty]||vt.cnty)}))),G(!1)}catch(rt){alert("번역 오류: "+rt.message),G(!1)}}async function dn(){const l=U(e,s,I.products,I.citations,p,M,I.productsCnty,I.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const b=document.createElement("textarea");b.value=l,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}gt(!0),setTimeout(()=>gt(!1),2500)}async function pn(){await lr(e,s,x,d,p)}async function un(){if(bt!=="sending"){D("sending");try{const l=T(),b=U(e,l.total,l.products,l.citations,l.dotcom,M,l.productsCnty,l.citationsCnty,{weeklyLabels:F,categoryStats:q,unlaunchedMap:(w==null?void 0:w.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(w==null?void 0:w.citTouchPointsTrend)||null,citTrendMonths:(w==null?void 0:w.citTrendMonths)||[],citDomainTrend:(w==null?void 0:w.citDomainTrend)||null,citDomainMonths:(w==null?void 0:w.citDomainMonths)||[]}),ot=`[LG GEO] ${e.title} · ${e.period}`,Gt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:Ct.trim(),subject:ot,html:b})})).json();if(!Gt.ok)throw new Error(Gt.error||"발송 실패");D("ok"),setTimeout(()=>D(!1),4e3)}catch(l){D("error"),R(l.message),setTimeout(()=>{D(!1),R("")},5e3)}}}async function fn(){var ot,Et,Gt,rt,se;if(Z)return;const l=Fr($.trim());if(!l){wt("error"),R("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>wt(null),3e3);return}at(!0),wt(null),R(""),et("");const b=[];try{const L=await Ar(l,xt=>R(xt));if(b.push(`[Sync] parsed keys: ${Object.keys(L).join(", ")||"(없음)"}`),L.meta&&b.push(`[Sync] meta keys: ${Object.keys(L.meta).join(", ")}`),L.productsPartial&&b.push(`[Sync] products: ${L.productsPartial.length}건`),b.push(`[Sync] citations: ${((ot=L.citations)==null?void 0:ot.length)??0}건`),b.push(`[Sync] citationsCnty: ${((Et=L.citationsCnty)==null?void 0:Et.length)??0}건`),b.push(`[Sync] dotcom: ${L.dotcom?"OK":"(없음)"}`),b.push(`[Sync] productsCnty: ${((Gt=L.productsCnty)==null?void 0:Gt.length)??0}건`),L.meta){const xt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];i(ht=>{const St={...ht};for(const[At,dt]of Object.entries(L.meta))xt.includes(At)&&ht[At]||(St[At]=dt);return St}),c(ht=>({...ht,period:L.meta.period,dateLine:L.meta.dateLine,reportNo:L.meta.reportNo}))}if(L.citations&&(u(L.citations),k.current={...k.current,citations:L.citations}),L.dotcom&&(C(xt=>({...xt,...L.dotcom})),k.current={...k.current,dotcom:{...k.current.dotcom,...L.dotcom}}),L.productsCnty&&(m(L.productsCnty),k.current={...k.current,productsCnty:L.productsCnty}),L.citationsCnty&&(g(L.citationsCnty),k.current={...k.current,citationsCnty:L.citationsCnty}),L.monthlyVis&&X&&X(L.monthlyVis),nt){const xt={weeklyPR:L.weeklyPR||null,weeklyPRLabels:L.weeklyPRLabels||null,weeklyBrandPrompt:L.weeklyBrandPrompt||null,weeklyBrandPromptLabels:L.weeklyBrandPromptLabels||null,appendixPrompts:L.appendixPrompts||null,unlaunchedMap:L.unlaunchedMap||null,weeklyLabelsFull:L.weeklyLabelsFull||null,prTopicList:L.prTopicList||null,citTouchPointsTrend:L.citTouchPointsTrend||null,citTrendMonths:L.citTrendMonths||null,citDomainTrend:L.citDomainTrend||null,citDomainMonths:L.citDomainMonths||null};nt(xt),k.current={...k.current,extra:{...k.current.extra,...xt}}}const It=L.weeklyLabels||((rt=L.meta)==null?void 0:rt.weeklyLabels);console.log("[SYNC] weeklyLabels:",It,"weeklyLabelsFull:",L.weeklyLabelsFull),It&&It.length&&O(It),L.weeklyAll&&_(xt=>({...xt,...L.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(L));const Lt=L.weeklyMap?Object.keys(L.weeklyMap):[],Wt=((se=L.productsPartial)==null?void 0:se.map(xt=>xt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Lt.length?Lt:"NONE"),console.log("[SYNC] productsPartial IDs:",Wt.length?Wt:"NONE"),Lt.length&&Wt.length){const xt=Wt.filter(St=>!Lt.includes(St)),ht=Lt.filter(St=>!Wt.includes(St));xt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",xt),ht.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",ht),!xt.length&&!ht.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(L.productsPartial){const xt=L.productsPartial.map(ht=>{var be;const St=((be=L.weeklyMap)==null?void 0:be[ht.id])||[],At=St.filter(xe=>xe!=null&&xe>0),dt=ht.score,st=ht.prev||0,ie=ht.vsComp>0?Math.round(dt/ht.vsComp*100):100,Kt=At.length>0?At[At.length-1]:dt,ne=At.length>=5?At[At.length-5]:At[0]||0,le=dt,Xt=st,he=ie,Ae=st>0&&st!==dt?[st,dt]:[];return{...ht,score:le,prev:Xt,weekly:St,monthly:Ae,weeklyScore:Kt,weeklyPrev:ne,monthlyScore:dt,monthlyPrev:st,compRatio:he,status:he>=100?"lead":he>=80?"behind":"critical"}});h(xt),k.current={...k.current,products:xt}}else L.weeklyMap&&h(xt=>xt.map(ht=>{var At;const St=(At=L.weeklyMap)==null?void 0:At[ht.id];return St?{...ht,weekly:St}:ht}));if(L.total){const xt={...k.current.total,...L.total,...L.buTotals?{buTotals:L.buTotals}:{},...L.buTotalsPrev?{buTotalsPrev:L.buTotalsPrev}:{},...L.countryTotals?{countryTotals:L.countryTotals}:{},...L.countryTotalsPrev?{countryTotalsPrev:L.countryTotalsPrev}:{}};f(ht=>({...ht,...xt})),k.current={...k.current,total:xt}}{let xt=function(st){if(!st)return 0;const ie=String(st).trim(),Kt=ie.match(/(\d{1,2})월/);if(Kt){const Xt=parseInt(Kt[1]);return Xt>=1&&Xt<=12?Xt:0}const ne=ie.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ne)return At[ne[1].toLowerCase()]||0;const le=ie.match(/\d{4}[-\/](\d{1,2})/);if(le){const Xt=parseInt(le[1]);return Xt>=1&&Xt<=12?Xt:0}return 0};const ht=new Date().getFullYear(),St=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],At={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let dt=0;if(L.derivedPeriod){const st=xt(L.derivedPeriod);st>dt&&(dt=st)}if(L.citDerivedPeriod){const st=xt(L.citDerivedPeriod);st>dt&&(dt=st)}dt>0&&dt<=12&&(i(st=>({...st,period:`${ht}년 ${dt}월`})),c(st=>({...st,period:`${St[dt]} ${ht}`})))}if(!L.total&&L.productsPartial&&L.productsPartial.length>0){const xt=L.productsPartial,ht=+(xt.reduce((At,dt)=>At+dt.score,0)/xt.length).toFixed(1),St=+(xt.reduce((At,dt)=>At+(dt.vsComp||0),0)/xt.length).toFixed(1);f(At=>({...At,score:ht,vsComp:St,rank:ht>=St?1:2}))}if(setTimeout(()=>{xo(t,{meta:L.meta||null,total:L.total?{...L.total,...L.buTotals?{buTotals:L.buTotals}:{},...L.buTotalsPrev?{buTotalsPrev:L.buTotalsPrev}:{},...L.countryTotals?{countryTotals:L.countryTotals}:{},...L.countryTotalsPrev?{countryTotalsPrev:L.countryTotalsPrev}:{}}:null,productsPartial:L.productsPartial||null,weeklyMap:L.weeklyMap||null,weeklyLabels:L.weeklyLabels||null,weeklyLabelsFull:L.weeklyLabelsFull||null,weeklyAll:L.weeklyAll||null,citations:L.citations||null,dotcom:L.dotcom||null,productsCnty:L.productsCnty||null,citationsCnty:L.citationsCnty||null,citationsByCnty:L.citationsByCnty||null,dotcomByCnty:L.dotcomByCnty||null,appendixPrompts:L.appendixPrompts||null,unlaunchedMap:L.unlaunchedMap||null,prTopicList:L.prTopicList||null,monthlyVis:L.monthlyVis||null,weeklyPR:L.weeklyPR||null,weeklyPRLabels:L.weeklyPRLabels||null,monthlyPR:L.monthlyPR||null,monthlyPRLabels:L.monthlyPRLabels||null,weeklyBrandPrompt:L.weeklyBrandPrompt||null,weeklyBrandPromptLabels:L.weeklyBrandPromptLabels||null,monthlyBrandPrompt:L.monthlyBrandPrompt||null,monthlyBrandPromptLabels:L.monthlyBrandPromptLabels||null,dotcomTrend:L.dotcomTrend||null,dotcomTrendMonths:L.dotcomTrendMonths||null}),setTimeout(an,250)},100),et(b.join(`
`)),wt("ok"),R(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const xt={};L.productsPartial&&(xt.products=L.productsPartial.map(ht=>{var Kt;const St=((Kt=L.weeklyMap)==null?void 0:Kt[ht.id])||[],At=ht.vsComp>0?ht.score/ht.vsComp*100:100,dt=St.find(ne=>ne!=null&&ne>0),st=ht.prev!=null&&ht.prev>0?ht.prev:dt||0,ie=st>0?[st,ht.score]:[];return{...ht,prev:st,weekly:St,monthly:ie,compRatio:Math.round(At),status:At>=100?"lead":At>=80?"behind":"critical"}})),L.productsCnty&&(xt.productsCnty=L.productsCnty),L.citations&&(xt.citations=L.citations),L.citationsCnty&&(xt.citationsCnty=L.citationsCnty);try{await so(xt)}catch{}R("동기화 + 번역 완료!")}}catch(L){b.push(`[ERROR] ${L.message}`),wt("error"),R(L.message),et(b.join(`
`))}finally{at(!1),setTimeout(()=>{wt(null),R("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:$t,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:B},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:B},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:B},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Lr,{...rn||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:B},children:"Google Sheets URL"}),r.jsx("input",{value:$,onChange:l=>tt(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Ft,fontSize:11,padding:"7px 9px",marginBottom:8,color:$?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:fn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Z?"wait":"pointer",background:Z?"#1E293B":$t,fontSize:12,fontWeight:700,color:Z?"#94A3B8":"#FFFFFF",fontFamily:B,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(po,{size:13,style:{animation:Z?"spin 1s linear infinite":"none"}}),Z?"동기화 중...":"구글 시트 동기화"]}),(yt||Z&&kt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.6,background:yt==="ok"?"#14532D":yt==="error"?"#450A0A":"#1E293B",color:yt==="ok"?"#86EFAC":yt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${yt==="ok"?"#22C55E33":yt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:kt}),Q&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Q,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Q).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:B,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ti,{url:$,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:cn,disabled:K,style:{width:"100%",padding:"9px 0",background:K?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:B,cursor:K?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:K?.6:1},children:[r.jsx(hn,{size:13})," ",K?"번역 중...":"AI 번역 (EN)"]}),Y&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:B},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:B},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>mt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:B,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:so,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:B,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:pn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(gn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Ht&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"발행 월"}),r.jsx("select",{value:te,onChange:l=>Ge(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:B,fontSize:11,fontWeight:700,cursor:"pointer"},children:nn.map(l=>r.jsxs("option",{value:l,children:[l," · ",Te(l),pe.find(b=>b.month===l)?" ✓ 게시됨":""]},l))})]}),Ht&&J&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",V||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:S||"",onChange:l=>J(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:B,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",V||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>r.jsx("option",{value:l,children:l},l))]}),S&&r.jsx("button",{onClick:()=>J(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:B,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:sn,disabled:ut,style:{width:"100%",padding:"9px 0",background:ut?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:ut?"#94A3B8":"#FFFFFF",fontFamily:B,cursor:ut?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(uo,{size:12}),ut?"게시 중...":Ht?`${Te(te)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:B,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Vt,onChange:l=>Qt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:ln,disabled:Jt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Jt?"#1E293B":"#166534",color:Jt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:B,cursor:Jt?"wait":"pointer",marginBottom:6},children:[r.jsx(uo,{size:12}),Jt?"통합 게시 중...":"통합 대시보드 게시"]}),Ut&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.8,background:Ut.startsWith("ERROR")?"#450A0A":"#14532D",color:Ut.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Ut.startsWith("ERROR:")?Ut.slice(6):Ut})]})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(ot=>ot.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Et=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();Et.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Et.error||""))}catch(ot){alert("아카이빙 실패: "+ot.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(mn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Bt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.8,background:Bt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Bt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Bt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Bt.startsWith("ERROR:")?Bt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(He,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[Bt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Ht&&(zt==null?void 0:zt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:B,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>ao(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:B,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:zt.urls.ko},{label:"EN",url:zt.urls.en}].map(({label:l,url:b})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:B,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",b]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${b}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:B},children:zt.ts?new Date(zt.ts).toLocaleString("ko-KR"):""})]}),Ht&&pe.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:B,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",pe.length,")"]})}),pe.map(l=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:B},children:Te(l.month)}),r.jsx("button",{onClick:()=>{confirm(`${Te(l.month)} 게시본을 삭제할까요?`)&&ao(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:B,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:b,url:ot})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:ot,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:B,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b,": ",ot]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${ot}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},b)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:B},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(b=>({...b,reportType:l.target.value})),style:{...Ft,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(b=>({...b,reportNo:l.target.value})),style:{...Ft}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(b=>({...b,period:l.target.value})),style:{...Ft}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(b=>({...b,title:l.target.value})),rows:4,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(b=>({...b,team:l.target.value})),style:{...Ft,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(b=>({...b,dateLine:l.target.value})),style:{...Ft,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?$t:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(b=>({...b,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Ft,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?$t:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(b=>({...b,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Ft,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:B,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(b=>({...b,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:$t,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(b=>({...b,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:B},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,b])=>r.jsx("button",{onClick:()=>o(ot=>({...ot,titleColor:l})),title:b,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:b})=>r.jsx("button",{onClick:()=>o(ot=>({...ot,[l]:!ot[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?$t:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:b},l))}),(()=>{const l=L=>String(L||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),b=L=>/brand/i.test(L)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(L)?"Brand":L,ot=[],Et=new Set,Gt=(L,It)=>{L&&!Et.has(L)&&(Et.add(L),ot.push({value:L,label:It}))};if(w!=null&&w.citTouchPointsTrend&&Object.keys(w.citTouchPointsTrend).forEach(L=>{const It=b(L);Gt(It,It)}),w!=null&&w.citDomainTrend){const L=Object.entries(w.citDomainTrend).filter(([Lt])=>Lt.startsWith("TTL|"));(L.length?L:Object.entries(w.citDomainTrend)).forEach(([,Lt])=>Gt(Lt.domain,l(Lt.domain)))}if(!ot.length)return null;const rt=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],se=L=>o(It=>{const Lt=Array.isArray(It.bumpHighlight)?It.bumpHighlight:[];return{...It,bumpHighlight:Lt.includes(L)?Lt.filter(Wt=>Wt!==L):[...Lt,L]}});return r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"범프차트 지적 요소 (색상 강조)"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:ot.map(({value:L,label:It})=>{const Lt=rt.includes(L);return r.jsx("button",{onClick:()=>se(L),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:Lt?$t:"#1E293B",color:Lt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:It},L)})})]})})(),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:B},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?$t:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:B},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?$t:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?$t:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,monthlyReportBody:"⏳ AI 생성 중..."}));const b=await Nt("monthlyReportBody",{products:T().products,productsCnty:T().productsCnty,total:T().total,citations:T().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,monthlyReportBody:b}))}catch(b){console.error("[AI]",b),o(ot=>({...ot,monthlyReportBody:`[AI 실패: ${b.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(b=>({...b,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:B},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,totalInsight:"⏳ AI 생성 중..."}));const b=await Nt("totalInsight",{products:T().products,productsCnty:T().productsCnty,total:T().total,todoText:e.todoText||"",unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,totalInsight:b}))}catch(b){console.error("[AI]",b),o(ot=>({...ot,totalInsight:`[AI 실패: ${b.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(b=>({...b,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productInsight:"⏳ AI 생성 중..."}));const l=await Nt("product",{products:T().products,total:T().total},M);o(b=>({...b,productInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,productInsight:`[AI 실패: ${l.message}]

`+qr(T().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?$t:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(b=>({...b,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"제품별 GEO Visibility"},M);o(b=>({...b,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:Jr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?$t:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(b=>({...b,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{var l;try{o(ot=>({...ot,cntyInsight:"⏳ AI 생성 중..."}));const b=await Nt("cnty",{productsCnty:T().productsCnty,unlaunchedMap:((l=T().extra)==null?void 0:l.unlaunchedMap)||{}},M);o(ot=>({...ot,cntyInsight:b}))}catch(b){console.error("[AI]",b),o(ot=>({...ot,cntyInsight:`[AI 실패: ${b.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?$t:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(b=>({...b,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"국가별 GEO Visibility"},M);o(b=>({...b,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:Yr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?$t:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(b=>({...b,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(b=>({...b,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(b=>({...b,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(b=>({...b,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(b=>({...b,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationInsight:"⏳ AI 생성 중..."}));const l=await Nt("citation",{citations:T().citations},M);o(b=>({...b,citationInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?$t:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(b=>({...b,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"Citation 도메인별 현황"},M);o(b=>({...b,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?$t:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(b=>({...b,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainInsight:"⏳ AI 생성 중..."}));const l=await Nt("citDomain",{citationsCnty:T().citationsCnty},M);o(b=>({...b,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?$t:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(b=>({...b,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"도메인별 Citation 현황"},M);o(b=>({...b,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?$t:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(b=>({...b,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyInsight:"⏳ AI 생성 중..."}));const l=await Nt("citCnty",{citationsCnty:T().citationsCnty},M);o(b=>({...b,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?$t:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(b=>({...b,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"국가별 Citation 도메인"},M);o(b=>({...b,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?$t:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(b=>({...b,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdInsight:"⏳ AI 생성 중..."}));const l=await Nt("citPrd",{citationsCnty:T().citationsCnty},M);o(b=>({...b,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?$t:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(b=>({...b,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"제품별 Citation"},M);o(b=>({...b,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?$t:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(b=>({...b,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),y.length>0&&(()=>{const l=[...new Set(I.productsCnty.map(b=>b.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(b=>{const ot=(e.cntyProductFilter||{})[b]!==!1;return r.jsx("button",{onClick:()=>o(Et=>({...Et,cntyProductFilter:{...Et.cntyProductFilter||{},[b]:!ot}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:ot?"#166534":"#1E293B",color:ot?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:b},b)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomInsight:"⏳ AI 생성 중..."}));const l=await Nt("dotcom",{dotcom:T().dotcom},M);o(b=>({...b,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?$t:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(b=>({...b,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"닷컴 Citation"},M);o(b=>({...b,dotcomHowToRead:l}))}catch{o(b=>({...b,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?$t:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(b=>({...b,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(b=>({...b,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,todoText:"⏳ AI 생성 중..."}));const l=await Nt("todo",{products:T().products},M);o(b=>({...b,todoText:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Ot,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?$t:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(b=>({...b,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:dn,style:{width:"100%",padding:"9px 0",background:lt?"#14532D":"transparent",border:`1px solid ${lt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:lt?"#86EFAC":"#64748B",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:lt?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:Ct,onChange:l=>Tt(l.target.value),placeholder:"recipient@example.com",style:{...Ft,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:un,disabled:bt==="sending"||!Ct.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:bt==="sending"||!Ct.trim()?"not-allowed":"pointer",background:bt==="ok"?"#14532D":bt==="error"?"#7F1D1D":bt==="sending"?"#1E3A5F":Ct.trim()?"#1D4ED8":"#1E293B",color:bt==="ok"?"#86EFAC":bt==="error"?"#FCA5A5":Ct.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:bt==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(po,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):bt==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 발송 완료!"]}):bt==="error"?r.jsxs(r.Fragment,{children:[r.jsx(fo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(fo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:B,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function oi({value:t,onChange:e,products:o,productsCnty:a,monthlyVis:i,style:n}){const c=_o.useMemo(()=>Tn(o,a,i),[o,a,i]);return!c.length||c.length===1&&c[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:s=>e(s.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(s=>r.jsx("option",{value:s,children:s},s))})]})}const ge="weekly-report",Oo="geo-weekly-report-cache";function ni({meta:t,total:e,products:o,citations:a,dotcom:i,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:f,weeklyAll:x,categoryStats:h,cntyKeys:d=null,llmModel:u,monthlyVis:p}){const C=it.useRef(null),y=it.useMemo(()=>to(t,e,o,a,i,s,n,c,{weeklyLabels:f,weeklyAll:x,categoryStats:h,cntyKeys:d,llmModel:u,monthlyVis:p}),[t,e,o,a,i,s,n,c,f,x,h,d,u,p]);return _o.useEffect(()=>{const m=C.current;if(!m)return;const v=m.contentDocument||m.contentWindow.document;v.open(),v.write(y),v.close();const g=()=>{try{v.body.style.overflow="hidden",v.documentElement.style.overflow="hidden";const I=v.documentElement.scrollHeight;I&&(m.style.height=I+20+"px")}catch{}};setTimeout(g,150),setTimeout(g,400),setTimeout(g,1e3),setTimeout(g,2e3)},[y]),r.jsx("iframe",{ref:C,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function ri({meta:t,total:e,products:o,citations:a,dotcom:i,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:f,weeklyAll:x,categoryStats:h,cntyKeys:d=null,llmModel:u,monthlyVis:p}){const[C,y]=it.useState(!1),m=it.useMemo(()=>to(t,e,o,a,i,s,n,c,{weeklyLabels:f,weeklyAll:x,categoryStats:h,cntyKeys:d,llmModel:u,monthlyVis:p}),[t,e,o,a,i,s,n,c,f,x,h,d,u,p]);async function v(){try{await navigator.clipboard.writeText(m)}catch{const g=document.createElement("textarea");g.value=m,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)}y(!0),setTimeout(()=>y(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsx("div",{children:r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:B},children:"주간 리포트 HTML"})}),r.jsx("button",{onClick:v,style:{padding:"6px 14px",borderRadius:7,border:"none",background:C?"#14532D":$t,color:C?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:C?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(No,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:m})})]})}function ii(){const t=it.useRef(Vn(Oo)).current,[e,o]=it.useState({...Ee,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,i]=it.useState({...Ee,...(t==null?void 0:t.metaEn)??{}}),[n,c]=it.useState((t==null?void 0:t.total)??_n),[s,f]=it.useState((t==null?void 0:t.products)??zn),[x,h]=it.useState((t==null?void 0:t.citations)??Wn),[d,u]=it.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Gn),[p,C]=it.useState((t==null?void 0:t.productsCnty)??Un),[y,m]=it.useState((t==null?void 0:t.citationsCnty)??Hn),[v,g]=it.useState((t==null?void 0:t.weeklyLabels)??null),[I,M]=it.useState((t==null?void 0:t.weeklyAll)??{}),[P,N]=it.useState(null),[j,O]=it.useState("preview"),[_,F]=it.useState("ko"),[H,A]=it.useState("Total"),[E,U]=it.useState((t==null?void 0:t.monthlyVis)??[]),[W,X]=it.useState([]),[nt,q]=it.useState(""),[w,z]=it.useState(!1),[S,J]=it.useState(""),[V,k]=it.useState(null),[T,$]=it.useState(!0),[tt,Z]=it.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),at=it.useMemo(()=>{const K=new Set;return(p||[]).forEach(G=>{G&&G.country&&!/^(ttl|total)$/i.test(G.country)&&K.add(String(G.country).toUpperCase())}),Array.from(K).sort()},[p]),yt=tt.length>0?tt:null,wt=it.useCallback(K=>{Z(G=>G.includes(K)?G.filter(ut=>ut!==K):[...G,K])},[]),kt=it.useCallback(()=>Z(at),[at]),R=it.useCallback(()=>Z([]),[]);it.useEffect(()=>{let K=!1;const G=rr(e.period)||`${new Date().getMonth()+1}월`,ut=ir(G);async function jt(){var Bt,Mt,Jt;try{const Yt=await fetch("/api/tracker-snapshot-v2"),Vt=Yt.ok?await Yt.json():null;if(Vt!=null&&Vt.ok&&((Jt=(Mt=(Bt=Vt.data)==null?void 0:Bt.quantitativeGoals)==null?void 0:Mt.rows)!=null&&Jt.length)){const Qt=wo(Vt.data,ut);if(Qt!=null&&Qt.length&&!K){N(Qt);return}}}catch{}try{const[{parseKPISheet:Yt},Vt]=await Promise.all([Je(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Je(()=>import("./xlsx-DiWaSB7x.js").then(Ge=>Ge.x),__vite__mapDeps([0,1]))]),Qt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Ut=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Qt}&headers=1`,Dt=await fetch(Ut,{cache:"no-store"});if(!Dt.ok)return;const zt=await Dt.text(),fe=Vt.read(zt,{type:"string"}),pe=fe.Sheets[fe.SheetNames[0]],ze=Vt.utils.sheet_to_json(pe,{header:1,defval:""}),Ht=Yt(ze),te=wo(Ht,ut);te!=null&&te.length&&!K&&N(te)}catch{}}return jt(),()=>{K=!0}},[e.period]);const Q=_==="en"?a:e,et=_==="en"?i:o,lt=it.useMemo(()=>Be(s,p,x,y,_),[s,p,x,y,_]);it.useEffect(()=>{qn(ge).then(X)},[]);const gt=it.useRef(null);function Ct(K,G=2e3){clearTimeout(gt.current),J(K),gt.current=setTimeout(()=>J(""),G)}it.useEffect(()=>()=>clearTimeout(gt.current),[]);const Tt=it.useRef(!1);it.useEffect(()=>{let K=!1;return Re(ge).then(G=>{K||!G||(Tt.current=!0,G.meta&&o(ut=>({...ut,...G.meta})),G.total&&c(ut=>({...ut,...G.total})),G.citations&&h(G.citations),G.dotcom&&u(ut=>({...ut,...G.dotcom})),G.productsCnty&&C(G.productsCnty),G.citationsCnty&&m(G.citationsCnty),G.weeklyLabels&&g(G.weeklyLabels),G.weeklyAll&&M(ut=>({...ut,...G.weeklyAll})),G.monthlyVis&&U(G.monthlyVis),G.productsPartial?f(G.productsPartial.map(ut=>{var Mt;const jt=((Mt=G.weeklyMap)==null?void 0:Mt[ut.id])||[],Bt=ut.vsComp>0?ut.score/ut.vsComp*100:100;return{...ut,weekly:jt,monthly:[],compRatio:Math.round(Bt),status:Bt>=100?"lead":Bt>=80?"behind":"critical"}})):G.weeklyMap&&f(ut=>ut.map(jt=>{var Mt;const Bt=(Mt=G.weeklyMap)==null?void 0:Mt[jt.id];return Bt?{...jt,weekly:Bt}:jt})))}),()=>{K=!0}},[]),it.useEffect(()=>{Kn(Oo,{metaKo:e,metaEn:a,total:n,products:s,citations:x,dotcom:d,productsCnty:p,citationsCnty:y,weeklyLabels:v,weeklyAll:I,selectedCountries:tt})},[e,a,n,s,x,d,p,y,v,I,tt]);async function bt(){if(!V)return;const G=await Yn(ge,V,{metaKo:e,metaEn:a,total:n,products:s,citations:x,dotcom:d,productsCnty:p,citationsCnty:y,weeklyLabels:v,weeklyAll:I});G&&X(G),Ct(G?"저장 완료!":"저장 실패")}async function D(){var ut;const K=nt.trim()||`${Q.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,G=await Jn(ge,K,{metaKo:e,metaEn:a,total:n,products:s,citations:x,dotcom:d,productsCnty:p,citationsCnty:y,weeklyLabels:v,weeklyAll:I});G&&(X(G),q(""),k(((ut=G[0])==null?void 0:ut.ts)||null)),Ct(G?"새로 저장 완료!":"저장 실패")}function Y(K){const G=K.data;o({...Ee,...G.metaKo||G.meta||{}}),i({...Ee,...G.metaEn||{}}),G.total&&c(G.total),G.products&&f(G.products),G.citations&&h(G.citations),G.dotcom&&u(G.dotcom),G.productsCnty&&C(G.productsCnty),G.citationsCnty&&m(G.citationsCnty),G.weeklyLabels&&g(G.weeklyLabels),G.weeklyAll&&M(G.weeklyAll),k(K.ts),Ct(`"${K.name}" 불러옴`)}async function mt(K){const G=W[K];if(!G)return;const ut=await Xn(ge,G.ts);ut&&X(ut),V===G.ts&&k(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:B},children:[T&&r.jsx(ei,{mode:ge,meta:Q,setMeta:et,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:i,total:n,setTotal:c,products:s,setProducts:f,citations:x,setCitations:h,dotcom:d,setDotcom:u,productsCnty:p,setProductsCnty:C,citationsCnty:y,setCitationsCnty:m,resolved:lt,previewLang:_,setPreviewLang:F,snapshots:W,setSnapshots:X,setWeeklyLabels:g,setWeeklyAll:M,weeklyLabels:v,weeklyAll:I,generateHTML:to}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>$(K=>!K),title:T?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:T?r.jsx(yn,{size:16}):r.jsx(bn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:K,tab:G,lang:ut,label:jt})=>{const Bt=G==="code"?j==="code":j==="preview"&&_===ut;return r.jsx("button",{onClick:()=>{O(G),ut&&F(ut)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Bt?"#1E293B":"transparent",color:Bt?"#FFFFFF":"#475569",fontSize:11,fontWeight:Bt?700:500,fontFamily:B,cursor:"pointer"},children:jt},K)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:B},children:S}),r.jsxs("button",{onClick:bt,disabled:!V,title:V?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:V?"pointer":"default",background:V?"#1D4ED8":"#1E293B",color:V?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4,opacity:V?1:.5},children:[r.jsx(ho,{size:11})," 저장"]}),r.jsx("input",{value:nt,onChange:K=>q(K.target.value),placeholder:"버전 이름...",onKeyDown:K=>K.key==="Enter"&&D(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:B,outline:"none"}}),r.jsxs("button",{onClick:D,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4},children:[r.jsx(ho,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>z(!w),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:w?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4},children:[r.jsx(xn,{size:11})," 불러오기 ",W.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",W.length,")"]})]}),w&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:K=>K.stopPropagation(),children:W.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:B,textAlign:"center"},children:"저장된 버전이 없습니다"}):W.map((K,G)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:V===K.ts?"#1E3A5F":"#0F172A",border:V===K.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:B,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:K.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:new Date(K.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{Y(K),z(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B},children:"적용"}),r.jsx("button",{onClick:()=>mt(G),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(vn,{size:10})})]},K.ts))})]})]})]}),at.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),at.map(K=>{const G=tt.includes(K);return r.jsx("button",{onClick:()=>wt(K),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(G?"#22C55E":"#334155"),background:G?"#16A34A":"#1E293B",color:G?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:K},K)}),r.jsx("button",{onClick:kt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:R,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:tt.length===0?"전체 국가":`${tt.length}개 선택`})]}),j==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(oi,{value:H,onChange:A,products:lt.products,productsCnty:lt.productsCnty,monthlyVis:E})}),r.jsx(ni,{meta:Q,total:n,products:lt.products,citations:lt.citations,dotcom:d,productsCnty:lt.productsCnty,citationsCnty:lt.citationsCnty,lang:_,weeklyLabels:v,weeklyAll:I,categoryStats:P,cntyKeys:yt,llmModel:H,monthlyVis:E})]})}):r.jsx(ri,{meta:Q,total:n,products:lt.products,citations:lt.citations,dotcom:d,productsCnty:lt.productsCnty,citationsCnty:lt.citationsCnty,lang:_,weeklyLabels:v,weeklyAll:I,categoryStats:P,cntyKeys:yt,llmModel:H,monthlyVis:E}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:B},children:["v","3.1.9"]})})]})]})}wn.createRoot(document.getElementById("root")).render(r.jsx(ii,{}));
