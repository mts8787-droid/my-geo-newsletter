const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as H,R as po,L as gn,D as yn,G as uo,A as mn,c as He,S as Tt,C as qe,d as _o,e as fo,f as Oo,P as bn,h as xn,i as ho,F as vn,T as wn}from"./react-CVd_-pOw.js";import{R as Cn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const kn="modulepreload",Sn=function(t){return"/admin/weekly-report/"+t},go={},Je=function(e,o,i){let s=Promise.resolve();if(o&&o.length>0){let p=function(y){return Promise.all(y.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=p(o.map(y=>{if(y=Sn(y),y in go)return;go[y]=!0;const g=y.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${d}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":kn,g||(f.as="script"),f.crossOrigin="",f.href=y,u&&f.setAttribute("nonce",u),document.head.appendChild(f),g)return new Promise((c,F)=>{f.addEventListener("load",c),f.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${y}`)))})}))}function n(p){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=p,window.dispatchEvent(l),!l.defaultPrevented)throw p}return s.then(p=>{for(const l of p||[])l.status==="rejected"&&n(l.reason);return e().catch(n)})},Fn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Re={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},zo={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Fe={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Ce={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},An={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Fn.map((t,e)=>[t,e]));const Go={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Uo=new Set(Object.values(Fe)),yo=[...new Set(Object.values(Go))].filter(t=>!Uo.has(t));yo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:yo,validCodes:[...Uo]});const oe="Total";function En(...t){const e=new Set([oe]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(p=>e.add(p)))})}),[oe,...Array.from(e).filter(o=>o!==oe).sort((o,i)=>o.localeCompare(i))]}function Ho(t,e){return!Array.isArray(t)||!e||e===oe?t:t.map(o=>{var u,y;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null,p=(u=s==null?void 0:s.byLlm)==null?void 0:u[e],l=(y=n==null?void 0:n.byLlm)==null?void 0:y[e];return p?{...o,score:p.score??o.score,prev:(l==null?void 0:l.score)??o.prev,vsComp:p.comp??o.vsComp,allScores:p.allScores??o.allScores,monthlyScores:i.map(g=>{var f;const d=(f=g==null?void 0:g.byLlm)==null?void 0:f[e];return d?{...g,score:d.score,comp:d.comp,allScores:d.allScores}:g})}:o})}function Wo(t,e){return!Array.isArray(t)||!e||e===oe?t:t.map(o=>{var y,g;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null,p=(y=s==null?void 0:s.byLlm)==null?void 0:y[e],l=(g=n==null?void 0:n.byLlm)==null?void 0:g[e];if(!p)return o;const u=p.compScore??o.compScore;return{...o,score:p.score??o.score,prev:(l==null?void 0:l.score)??o.prev,compScore:u,compName:p.compName??o.compName,allScores:p.allScores??o.allScores,gap:+((p.score??o.score)-u||0).toFixed(2),monthlyScores:i.map(d=>{var c;const f=(c=d==null?void 0:d.byLlm)==null?void 0:c[e];return f?{...d,score:f.score,compScore:f.compScore,compName:f.compName,allScores:f.allScores}:d})}})}function Tn(t,e){if(!Array.isArray(t)||!e||e===oe)return(t||[]).filter(s=>!s.llmModel||s.llmModel===oe||s.llmModel==="TOTAL"||s.llmModel==="All");const o={};t.forEach(s=>{const n=`${s.date}|${s.country}|${s.division}`;o[n]||(o[n]={}),o[n][s.llmModel]=s});const i=[];return Object.values(o).forEach(s=>{const n=s[e]||s[oe]||s.TOTAL||s.All;n&&i.push(n)}),i}function Vo(t,e,o){if(!o||o===oe||!Array.isArray(e)||!e.length)return t;const i=e.filter(p=>(p.country==="TOTAL"||p.country==="TTL")&&(p.division==="TOTAL"||p.division==="TTL"||p.division==="")&&p.llmModel===o);if(!i.length)return t;i.sort((p,l)=>String(p.date).localeCompare(String(l.date)));const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null;return{...t,score:s.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:s.comp??t.vsComp}}const q="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Ln=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function me(t){const e=Ln.indexOf(t);return e>=0?e:999}function Ct(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const mo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Ko(t){return mo.filter(e=>t.includes(e)).concat(t.filter(e=>!mo.includes(e)))}const Bn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function qo(t){return Bn[String(t||"").trim().toUpperCase()]||t}function ke(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function $n(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ye(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ve(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Rn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Re,i=zo,s=[],n=[];Object.entries(t).forEach(([u,y])=>{if(!y)return;const g=y.Total||y.TTL||y.TOTAL;if(g){const d=g.LG||g.lg||[],f=d.length>0?d[d.length-1]:null,c=d.length>=2?d[d.length-2]:null;let F="",h=0;Object.entries(g).forEach(([k,v])=>{if(k==="LG"||k==="lg")return;const m=Array.isArray(v)&&v.length?v[v.length-1]:0;m>h&&(h=m,F=k)}),f!=null&&f>0&&s.push({id:u,kr:o[u]||u,bu:i[u]||"OTHER",score:f,prev:c,vsComp:h,compName:F,category:o[u]||u})}Object.entries(y).forEach(([d,f])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const c=f.LG||f.lg||[],F=c.length>0?c[c.length-1]:null,h=c.length>=2?c[c.length-2]:null;if(F==null||F<=0)return;let k="",v=0;Object.entries(f).forEach(([m,S])=>{if(m==="LG"||m==="lg")return;const $=Array.isArray(S)&&S.length?S[S.length-1]:0;$>v&&(v=$,k=m)}),n.push({product:o[u]||u,country:d,score:F,prev:h,compScore:v,compName:k})})});const p=(e==null?void 0:e[e.length-1])||"This Week",l=(e==null?void 0:e[e.length-2])||"Last Week";return{products:s,productsCnty:n,lastLabel:p,prevLabel:l}}function In(t,e,o,i){if(!t.length)return"";const s=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},n=["MS","HS","ES"],p={};t.forEach(u=>{const y=u.bu||"OTHER";p[y]||(p[y]=[]),p[y].push(u)});const l=[];return n.forEach(u=>{const y=(p[u]||[]).slice().sort((g,d)=>me(g.kr||g.category||g.id)-me(d.kr||d.category||d.id));y.forEach((g,d)=>{const f=$n(g.score,g.prev),c=ve(g.score,g.vsComp)||"#FFFFFF";l.push(`<tr>
        ${d===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${u}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;">${Ct(g.kr||g.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;font-weight:700;background:${c};">${ke(g.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;background:${c};">${ke(g.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;background:${c};">${Ct(g.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;font-weight:700;background:${c};">${Ye(g.score,g.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${q};text-align:center;">${f}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${s.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${i})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.wow}</th>
      </tr>
    </thead>
    <tbody>${l.join("")}</tbody>
  </table>`}function jn(t,e,o,i){const s=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={},p=new Set,l=new Set;t.forEach(c=>{!c.country||!c.product||(p.add(c.country),l.add(c.product),n[c.product]||(n[c.product]={}),n[c.product][c.country]=c)});const u=Ko(Array.from(p)),y=Array.from(l).sort((c,F)=>me(c)-me(F));if(!y.length||!u.length)return"";const g={};(o||[]).forEach(c=>{[c.kr,c.category,c.id,c.en].filter(Boolean).forEach(h=>{g[h]=c})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+u.map(c=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Ct(qo(c))}</th>`).join(""),f=[];return y.forEach((c,F)=>{const h=F%2===0?"#FFFFFF":"#FAFAFA",k=g[c],m=(k?ve(k.score,k.vsComp):null)||h,S=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;font-weight:700;background:${m};">${k?ke(k.score):"—"}</td>`,$=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;font-weight:700;background:${m};">${k?Ye(k.score,k.vsComp):"—"}</td>`,T=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;background:${m};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?Ct(k.compName):"—"}</td>`,j=u.map(O=>{var P;const x=(P=n[c])==null?void 0:P[O],A=(x?ve(x.score,x.compScore):null)||h;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;font-weight:700;background:${A};">${x?ke(x.score):"—"}</td>`}).join(""),L=u.map(O=>{var P;const x=(P=n[c])==null?void 0:P[O],A=(x?ve(x.score,x.compScore):null)||h;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;font-weight:700;background:${A};">${x?Ye(x.score,x.compScore):"—"}</td>`}).join(""),N=u.map(O=>{var P;const x=(P=n[c])==null?void 0:P[O],A=(x?ve(x.score,x.compScore):null)||h;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${q};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${x!=null&&x.compName?Ct(x.compName):"—"}</td>`}).join("");f.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${q};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Ct(c)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${q};font-weight:600;background:#F5F5F5;white-space:nowrap;">${s.lg} (%)</td>
        ${S}${j}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${q};background:#F5F5F5;white-space:nowrap;">${s.ratio}</td>
        ${$}${L}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${q};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${T}${N}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${s.title} <span style="font-size:12px;font-weight:400;color:#666;">(${i})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${f.join("")}</tbody>
  </table>
  </div>`}function Pn(t,e,o,i){const s=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${i})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${i})`,product:"제품"},n={},p=new Set,l=new Set;t.forEach(f=>{!f.country||!f.product||(p.add(f.country),l.add(f.product),n[f.product]||(n[f.product]={}),n[f.product][f.country]=f)});const u=Ko(Array.from(p)),y=Array.from(l).sort((f,c)=>me(f)-me(c));if(!y.length||!u.length)return"";const g=u.map(f=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Ct(qo(f))}</th>`).join(""),d=y.map(f=>{const c=u.map(F=>{var j;const h=(j=n[f])==null?void 0:j[F];if(!h||h.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${q};text-align:center;color:#999;">—</td>`;const k=h.score,v=h.prev,m=v!=null?+(k-v).toFixed(1):null,S=m==null?"#999":m>0?"#16A34A":m<0?"#DC2626":"#666",$=m==null?"":m>0?"▲":m<0?"▼":"─",T=m!=null?`${$}${Math.abs(m).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${q};text-align:center;">
        <div style="font-weight:700;color:#111;">${ke(k)}%</div>
        <div style="font-size:9px;color:${S};">${T}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Ct(f)}</td>
      ${c}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${s.product}</th>
      ${g}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${q};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Dn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,p)=>n+(p.score||0),0),s=t.map((n,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};">${Ct(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${s}</tbody>
  </table>`}function Mn(t,e){const o=(t||[]).filter(l=>l.cnty==="TTL"||l.cnty==="TOTAL"||!l.cnty);if(!o.length)return"";o.sort((l,u)=>(u.citations||0)-(l.citations||0));const i=o.slice(0,20),s=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((l,u)=>l+(u.citations||0),0),p=i.map((l,u)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:center;">${u+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};">${Ct(l.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};">${Ct(l.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;font-weight:700;">${(l.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;">${n>0?(l.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${s.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${s.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${p}</tbody>
  </table>`}function Nn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},s=Object.keys(o).filter(l=>o[l]!=null);if(!s.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},p=s.map(l=>{const u=o[l]||0,y=i[l]||0,g=u-y,d=g>0?"LG":g<0?"SS":"=",f=g>0?"#86EFAC":g<0?"#FCA5A5":"#FFFFFF",c=g>0?"#14532D":g<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${f};color:${c};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};font-weight:${l==="TTL"?"900":"600"};">${Ct(l)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;font-weight:700;">${u.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:right;font-weight:700;">${g>0?"+":""}${g.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${q};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${q};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${p}</tbody>
  </table>`}function _n(t,e){var p;if(!t||!t.length)return"";const o=((p=t[0])==null?void 0:p.targetMonth)||"3월",i=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function s(l){return l>=80?"#D1FAE5":l>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(l=>{const u=(l.monthRate||0).toFixed(0),y=(l.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${q};background:#F5F5F5;">${Ct(l.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(l.monthRate)};">${u}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.monthActual||0).toLocaleString()} / ${(l.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(l.progressRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.cumActual||0).toLocaleString()} / ${(l.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${q};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${q};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function to(t,e,o,i,s={},n="ko",p=[],l=[],u={}){const{weeklyAll:y={},weeklyLabels:g=[],categoryStats:d=null,cntyKeys:f=null,llmModel:c,monthlyVis:F}=u;c&&c!=="Total"&&(o=Ho(o,c),p=Wo(p,c),e=Vo(e,F,c));let h=y;if(Array.isArray(f)&&f.length>0){const L=new Set(f.map(O=>String(O).toUpperCase())),N=O=>/^(total|ttl)$/i.test(String(O));p=(p||[]).filter(O=>O&&L.has(String(O.country).toUpperCase())),l=(l||[]).filter(O=>O&&L.has(String(O.country).toUpperCase())),h={},Object.entries(y||{}).forEach(([O,x])=>{if(!x)return;const E={};Object.entries(x).forEach(([A,P])=>{(N(A)||L.has(String(A).toUpperCase()))&&(E[A]=P)}),h[O]=E})}const k=Rn(h,g),v=k.products.length?k.products:o,m=k.productsCnty.length?k.productsCnty:p,S=k.lastLabel,$=k.prevLabel,T=n==="en"?"GEO Weekly Report":"GEO 주간 보고서",j=t.period||S||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${Ct(T)} — ${Ct(j)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${q} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${q};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${q};">${Ct(T)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${q};">${Ct(j)} · ${S?`${Ct(S)} ${n==="en"?"data":"기준"}`:""}</p>
    </div>

    ${In(v,n,S,$)}
    ${Pn(m,n,S,$)}
    ${jn(m,n,v,S)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${q};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Dn(i,n)}
    ${Mn(l,n)}
    ${Nn(s,n)}

    ${_n(d,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${q};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const yt="#CF0652",R="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",On=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Te={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:On,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},zn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Gn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Un={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Hn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Wn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Vn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Jo=3;function Kn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Jo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function qn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Jo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const _e={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function pe(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Jn(t){try{const e=await fetch(pe(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Yn(t,e,o){try{const i=await fetch(pe(t).snapshots,{method:"POST",headers:_e,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Xn(t,e,o){try{const i=await fetch(`${pe(t).snapshots}/${e}`,{method:"PUT",headers:_e,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function Zn(t,e){try{const o=await fetch(`${pe(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Lt(t,e,o="ko",i=""){try{const s=await fetch("/api/generate-insight",{method:"POST",headers:_e,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!s.ok){const p=await s.json().catch(()=>({}));throw new Error(p.error||`HTTP ${s.status}`)}const n=await s.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(s){throw console.error("[API] generateAIInsight failed:",s.message),s}}async function Ie(t){try{const e=await fetch(pe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function bo(t){try{const e=await fetch(pe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Qn(t,e,o={}){const{includePromptList:i=!1,includeReadability:s=!1}=o,[n,p]=await Promise.all([Ie("dashboard").catch(()=>null),Ie("visibility").catch(()=>null)]),l={...n||{},...p||{}};if(n&&Object.keys(n).forEach(P=>{l[P]==null&&n[P]!=null&&(l[P]=n[P])}),p!=null&&p.meta&&(n!=null&&n.meta)&&(l.meta={...n.meta||{},...p.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const u=l.meta||{},y=l.total||{},d=(l.productsPartial||l.products||[]).map(P=>{var C;const B=P.weekly||((C=l.weeklyMap)==null?void 0:C[P.id])||[],w=P.vsComp>0?P.score/P.vsComp*100:100;return{...P,weekly:B,monthly:P.monthly||[],compRatio:P.compRatio||Math.round(w),status:P.status||(w>=100?"lead":w>=80?"behind":"critical")}}),f=l.citations||[],c=l.dotcom||{},F=l.productsCnty||[],h=l.citationsCnty||[],k=l.weeklyLabels||null,v=l.weeklyAll||{},m=l.citationsByCnty||{},S=l.dotcomByCnty||{},$=e(d,F,f,h,"ko"),T=e(d,F,f,h,"en"),j={appendixPrompts:l.appendixPrompts||[],weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},L={monthlyVis:l.monthlyVis||[],includePromptList:i,includeReadability:s},N=t(u,y,$.products,$.citations,c,"ko",$.productsCnty,$.citationsCnty,k,v,m,S,L,j),O=t({...u,title:u.title||"GEO KPI Dashboard"},y,T.products,T.citations,c,"en",T.productsCnty,T.citationsCnty,k,v,m,S,L,j),x=`${u.period||""} ${u.title||"KPI Dashboard"}`.trim(),A=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:x,htmlKo:N,htmlEn:O})})).json();if(!A.ok)throw new Error(A.error||"게시 실패");return A}async function xo(t,e){try{const o=await fetch(pe(t).syncData,{method:"POST",headers:_e,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const tr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},We={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},vo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function $e(t,e,o,i,s){return s!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||We[n.kr]||n.kr,compName:n.compNameEn||vo[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||tr[n.country]||n.country,product:n.productEn||We[n.product]||n.product,compName:n.compNameEn||vo[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||We[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function er(t,{from:e="ko",to:o="en"}={}){const s=[];for(let n=0;n<t.length;n+=20){const p=t.slice(n,n+20),l=await Promise.all(p.map(async u=>{if(!u||!u.trim())return u;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(u)}`,g=await fetch(y);if(!g.ok)throw new Error(`번역 실패 (${g.status})`);return(await g.json())[0].map(f=>f[0]).join("")}));s.push(...l)}return s}const Le=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],or=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function nr(t){const e=or.indexOf(t);return e>=0?e:999}function Be(t){return nr(t)}function Yo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function rr(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Yo(o)]=o)}),e}function wo(t,e){var d,f,c,F;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(c=(f=t==null?void 0:t._dashboard)==null?void 0:f.categoryStats)!=null&&c.length?[...t._dashboard.categoryStats].sort((h,k)=>Be(h.category)-Be(k.category)):null;const o=t.quantitativeGoals.rows,i=rr((F=t.quantitativeResults)==null?void 0:F.rows),n=new Date().getMonth()+1-1,p=n>=3&&n<=12?`${n}월`:"3월";let l=e||t._month||p,u=Le.indexOf(l);u<0&&(l="3월",u=0);const y=[...new Set(o.map(h=>h.taskCategory).filter(Boolean))],g=u>0?Le[u-1]:null;return y.map(h=>{const k=o.filter(x=>x.taskCategory===h);let v=0,m=0,S=0,$=0,T=0,j=0;k.forEach(x=>{var w,C,_,I,D;const E=Yo(x),A=i[E]||{},P=typeof((w=x.monthly)==null?void 0:w[l])=="number"?x.monthly[l]:0,B=typeof((C=A.monthly)==null?void 0:C[l])=="number"?A.monthly[l]:0;if(m+=P,v+=B,g){const U=typeof((_=x.monthly)==null?void 0:_[g])=="number"?x.monthly[g]:0,ot=typeof((I=A.monthly)==null?void 0:I[g])=="number"?A.monthly[g]:0;j+=U,T+=ot}for(let U=0;U<=u;U++){const ot=Le[U];typeof((D=A.monthly)==null?void 0:D[ot])=="number"&&(S+=A.monthly[ot])}Le.forEach(U=>{var ot;typeof((ot=x.monthly)==null?void 0:ot[U])=="number"&&($+=x.monthly[U])})});const L=m>0?Math.round(v/m*1e3)/10:0,N=j>0?Math.round(T/j*1e3)/10:0,O=$>0?Math.round(S/$*1e3)/10:0;return{category:h,taskCount:k.length,targetMonth:l,monthRate:L,prevMonthRate:N,prevMonth:g,progressRate:O,monthActual:v,monthGoal:m,cumActual:S,annualGoal:$}}).sort((h,k)=>Be(h.category)-Be(k.category))}function ir(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}function ar(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const i=parseInt(e[1])-1;return i<3?"3월":`${i}월`}async function Xo(){const t=await Je(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function Xe(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function zt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function sr(t,e){return Array.isArray(t)?t.length===0?(Xe(e,"invalid input: empty rows",{len:0}),!1):!0:(Xe(e,"invalid input: not an array",{type:typeof t}),!1)}function Oe(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(s=>String(s??"").trim().toLowerCase());return e.every(s=>i.some(n=>s instanceof RegExp?s.test(n):n===String(s).toLowerCase()))})}function lr(t,e="sync"){var s,n,p;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((s=t.products)==null?void 0:s.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(p=t.weeklyLabels)!=null&&p.length&&t.weeklyLabels.every((u,y)=>u===`W${y+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const xt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Co=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],ko=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function cr(t,e,o,i,s={}){const n=await Xo(),p=n.utils.book_new(),l=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);l["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(p,l,"meta");const u=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);u["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(p,u,"total");const y=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(h=>[h.id,h.bu,h.kr,h.score,h.prev,h.vsComp,h.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(p,y,"products");const g=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(h=>[h.id,h.kr,...h.weekly])]);g["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(p,g,"weekly");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(h=>[h.rank,h.source,h.category,h.score,h.delta,h.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(p,d,"citations");const f=(s==null?void 0:s.lg)||{},c=(s==null?void 0:s.samsung)||{},F=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Co.map(h=>`LG_${h}`),...ko.map(h=>`Samsung_${h}`)],[...Co.map(h=>f[h]??0),...ko.map(h=>c[h]??0)]]);F["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(p,F,"dotcom"),n.writeFile(p,"GEO_Newsletter_템플릿.xlsx")}function Jt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),s=parseFloat(i)||0;return o?+s.toFixed(2):Math.abs(s)<=1&&s!==0?+(s*100).toFixed(2):+s.toFixed(2)}function je(t){return t==null||String(t).trim()===""?null:Jt(t)}function Zt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Qt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const dr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function pr(t){const e=Qt(t);return dr[e]||e}function ye(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,s=0;const n=e.match(/(\d{4})/);if(n)s=parseInt(n[1]);else{const l=e.match(/(\d{2})년/);if(l)s=2e3+parseInt(l[1]);else{const u=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);u&&(s=2e3+parseInt(u[1]))}}const p=e.match(/(\d{1,2})월/);if(p)i=parseInt(p[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)i=o[l[1].toLowerCase()];else{const u=e.match(/\d{4}[-\/](\d{1,2})/);u&&(i=parseInt(u[1]))}}return s?s*12+i:i}function ur(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const p=String(n[0]).trim(),l=n[1]??"";if(o.includes(p))e[p]=parseInt(l)||(p==="titleFontSize"?24:10);else if(i.includes(p)){const u=String(l).trim().toLowerCase();e[p]=u==="y"||u==="yes"||u==="true"||u==="1"}else e[p]=String(l)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(p=>p.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},p=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);p&&(e.period=`${n[p[2]]||p[2]} ${p[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const p=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${p[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function fr(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let s=!1;if(t.forEach(B=>{if(!B[0]||String(B[0]).startsWith("[")||String(B[0]).startsWith("※")||B[0]==="key")return;const w=String(B[0]).trim();(o.includes(w)||e.includes(w))&&(s=!0,e.includes(w)?i[w]=parseInt(B[1])||0:i[w]=Jt(B[1]))}),s&&Object.keys(i).length>=2)return{total:i};const n=t.find(B=>B.some(w=>String(w||"").trim().toUpperCase()==="LG")),p=n?n.findIndex(B=>String(B||"").trim().toUpperCase()==="LG"):4,l=n?n.findIndex(B=>{const w=String(B||"").trim().toUpperCase();return w==="SAMSUNG"||w==="SAMSUMG"}):5,u=l>=0?l:p+1,y=n?n.findIndex(B=>/date/i.test(String(B||"").trim())):0,g=n?n.findIndex(B=>/countries|country/i.test(String(B||"").trim())):2,d=n?n.findIndex(B=>/divisions?/i.test(String(B||"").trim())):3,f=n?n.findIndex(B=>/^(llm\s*model|llm|model)$/i.test(String(B||"").trim())):-1,c=[];t.filter(B=>{const w=String(B[y>=0?y:0]||"").trim();return w&&!w.startsWith("[")&&!w.startsWith("※")&&!/^date$/i.test(w)&&!/^key$/i.test(w)}).forEach(B=>{const w=String(B[y>=0?y:0]||"").trim(),C=Qt(B[g>=0?g:2]),_=String(B[d>=0?d:3]||"").trim().toUpperCase(),D=(f>=0?String(B[f]||"").trim():"")||"Total",U=Jt(B[p]),ot=Jt(B[u]);w&&U>0&&c.push({date:w,country:C,division:_,llmModel:D,lg:U,comp:ot})});const h=c.filter(B=>(B.country==="TOTAL"||B.country==="TTL")&&(B.division==="TOTAL"||B.division==="TTL"||B.division==="")&&(B.llmModel==="Total"||B.llmModel==="TOTAL"||B.llmModel==="All"));h.sort((B,w)=>ye(B.date)-ye(w.date));const k=h[h.length-1],v=h.length>=2?h[h.length-2]:null;if(!k){const B=t.find(I=>I.some(D=>String(D||"").trim().toUpperCase()==="TOTAL"));if(!B)return zt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(I=>I==null?void 0:I.slice(0,6))});const w=Jt(B[p]),C=Jt(B[u]),_={total:{score:w,prev:w,vsComp:C,rank:w>=C?1:2,totalBrands:12}};return c.length&&(_.monthlyVis=c),_}const m=k.lg,S=k.comp,$=v?v.lg:m,T=k.date,j=v?v.date:null;function L(B){const w={};return c.filter(C=>C.date===B&&(C.country==="TOTAL"||C.country==="TTL")&&C.division&&C.division!=="TOTAL"&&C.division!=="TTL"&&C.division!==""&&(C.llmModel==="Total"||C.llmModel==="TOTAL"||C.llmModel==="All")).forEach(C=>{w[C.division]={lg:C.lg,comp:C.comp}}),w}const N=L(T),O=j?L(j):{};function x(B){const w={};return c.filter(C=>C.date===B&&C.country&&C.country!=="TOTAL"&&C.country!=="TTL"&&(C.division==="TOTAL"||C.division==="TTL"||C.division==="")&&(C.llmModel==="Total"||C.llmModel==="TOTAL"||C.llmModel==="All")).forEach(C=>{w[C.country]={lg:C.lg,comp:C.comp}}),w}const E=x(T),A=j?x(j):{},P={total:{score:m,prev:$,vsComp:S,rank:m>=S?1:2,totalBrands:12},...Object.keys(N).length?{buTotals:N}:{},...Object.keys(O).length?{buTotalsPrev:O}:{},...Object.keys(E).length?{countryTotals:E}:{},...Object.keys(A).length?{countryTotalsPrev:A}:{}};return T&&(P.derivedPeriod=T),c.length&&(P.monthlyVis=c),P}function hr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(s=>JSON.stringify(String(s||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((s,n)=>n>=1&&String(s||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),So(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),So(t,e)}function So(t,e){const o=t[e],i=o.findIndex((d,f)=>f>=3&&String(d||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const s=o.findIndex(d=>/^(llm\s*model|llm|model)$/i.test(String(d||"").trim())),n=[];for(let d=i+1;d<o.length;d++){const f=String(o[d]||"").trim();f&&f.toUpperCase()!=="LG"&&n.push({name:f,col:d})}const p=t.slice(e+1).filter(d=>{const f=String(d[0]||"").trim();return f&&!f.startsWith("[")&&!f.startsWith("※")}),l={},u={};p.forEach(d=>{const f=String(d[0]||"").trim(),c=String(d[1]||"").trim(),F=String(d[2]||"").trim(),h=Qt(d[2])||F,k=String(d[3]||"").trim(),m=(s>=0?String(d[s]||"").trim():"")||"Total",S=Jt(d[i]),$=n.map(N=>({name:N.name,score:Jt(d[N.col])})).filter(N=>N.score>0),T=[...$].sort((N,O)=>O.score-N.score)[0]||{name:"",score:0},j=+(S-T.score).toFixed(2),L={LG:S};if($.forEach(N=>{L[N.name]=N.score}),h==="TTL"||h==="TOTAL"){const N=Ce[k]||k.toLowerCase(),O=An[k]||k;l[N]||(l[N]=[]),l[N].push({id:N,bu:f,kr:O,category:k,date:c,llmModel:m,score:S,vsComp:T.score,compName:T.name,allScores:L})}else{const N=`${k}|${h}`;u[N]||(u[N]=[]),u[N].push({product:k,country:h,date:c,llmModel:m,score:S,compName:T.name,compScore:T.score,gap:j,allScores:L})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(l).join(", ")||"없음"} / 국가별: ${Object.keys(u).length}건`);const y=[];for(const[d,f]of Object.entries(l)){const c=f.filter(m=>m.llmModel==="Total"||m.llmModel==="TOTAL"||m.llmModel==="All"),F=c.length?c:f;F.sort((m,S)=>ye(m.date)-ye(S.date));const h=F[F.length-1],k=F.length>=2?F[F.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${F.map(m=>m.date).join(",")}] score=${h.score} prev=${k} vsComp=${h.vsComp}`);const v=F.map(m=>{const S=f.filter(T=>T.date===m.date),$={};return S.forEach(T=>{$[T.llmModel]={score:T.score,comp:T.vsComp,allScores:T.allScores}}),{date:m.date,score:m.score,comp:m.vsComp,allScores:m.allScores,byLlm:$}});y.push({...h,prev:k,monthlyScores:v})}const g=[];for(const d of Object.values(u)){const f=d.filter(v=>v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"),c=f.length?f:d;c.sort((v,m)=>ye(v.date)-ye(m.date));const F=c[c.length-1],h=c.length>=2?c[c.length-2].score:null,k=c.map(v=>{const m=d.filter($=>$.date===v.date),S={};return m.forEach($=>{S[$.llmModel]={score:$.score,compScore:$.compScore,compName:$.compName,allScores:$.allScores}}),{date:v.date,score:v.score,compScore:v.compScore,compName:v.compName,allScores:v.allScores,byLlm:S}});g.push({...F,prev:h,monthlyScores:k})}return{...y.length?{productsPartial:y}:{},...g.length?{productsCnty:g}:{}}}function Zo(t,e=0,o){const i=o??t.length;for(let s=e;s<i;s++){const n=[];for(const p of t[s]||[]){const l=String(p||"").split(/\n/)[0].trim();/^W\d+/i.test(l)&&n.push(l.toUpperCase())}if(n.length>=2)return n}return null}const Ve={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Fo(t,e){var h;const o=e?Ve[e]||{}:{...Ve.MS,...Ve.ES};if(!Object.keys(o).length)return zt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(k=>k.some(v=>String(v||"").trim()in o));if(i<0)return zt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const s=t[i],n=t.findIndex((k,v)=>v>i&&k.some(m=>String(m||"").trim()==="TTL")),p=n>0?n+1:Math.min(i+20,t.length);let l=-1,u=-1;for(let k=i+1;k<p;k++){const v=t[k];if(!v.some($=>String($||"").trim().toUpperCase()==="LG"))continue;if(u<0&&(u=k),v.some($=>{const T=String($||"").trim().toLowerCase().replace(/[\s_-]/g,"");return T==="nonbrand"||T==="nb"})){l=k;break}}const y=l>=0?l:u>=0?u:n;if(y<0)return zt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const g=t[y],d=l>=0?"LG-NB":u>=0?"LG":"TTL",f={},c=Object.keys(o).map(k=>s.findIndex(v=>String(v||"").trim()===k)).filter(k=>k>=0).sort((k,v)=>k-v);for(const[k,v]of Object.entries(o)){const m=s.findIndex(T=>String(T||"").trim()===k);if(m<0)continue;const S=c.find(T=>T>m)||m+20,$=[];for(let T=m+1;T<S&&T<g.length;T++){const j=Jt(g[T]);j>0&&$.push(j)}$.length&&(f[v]=$)}if(!Object.keys(f).length)return zt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:y,dataRowLabel:d});const F=Zo(t,i,p)||((h=Object.values(f)[0])==null?void 0:h.map((k,v)=>`W${v+1}`))||[];return{weeklyMap:f,weeklyLabels:F}}function gr(t,e,o){for(const i of Object.values(t))for(const s of Object.values(i))for(const[n,p]of Object.entries(s))s[n]=p.slice(o);for(const[i,s]of Object.entries(e))e[i]=s.slice(o)}function yr(t){const{data:e,rows:o,headerIdx:i,brandIdx:s,catIdx:n,countryIdx:p,isNonBrand:l,isTotal:u,weeklyMap:y,weeklyAll:g}=t;let d=t.wCols,f=t.weeklyLabels;if(!d.length){const c=e.find(F=>String(F[s]||"").trim().toUpperCase()==="LG"&&l(F));if(c){const F=[];for(let h=s+1;h<c.length;h++)if(String(c[h]||"").trim())F.push(h);else if(F.length)break;d=F,f=Zo(o,0,i+1)||d.map((h,k)=>`W${k+1}`)}}return e.forEach(c=>{if(!l(c))return;const F=String(c[s]||"").trim();if(!F)return;const h=String(c[n>=0?n:0]||"").trim();if(!h)return;const k=Ce[h]||h.toLowerCase(),v=p>=0?Qt(c[p]):"TOTAL",m=v==="TOTAL"||v==="TTL"||!v?"Total":v;g[k]||(g[k]={}),g[k][m]||(g[k][m]={}),g[k][m][F]=d.map(S=>je(c[S]))}),e.forEach(c=>{if(String(c[s]||"").trim().toUpperCase()!=="LG"||!l(c)||!u(c))return;const h=String(c[n>=0?n:0]||"").trim();h&&(y[Ce[h]||h.toLowerCase()]=d.map(k=>je(c[k])))}),{wCols:d,weeklyLabels:f}}function mr(t){const{data:e,header:o,lgIdx:i,catIdx:s,isTotal:n,weeklyMap:p}=t,l=o.findIndex(g=>{const d=String(g||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),u={},y=[];return e.forEach(g=>{if(!n(g))return;const d=String(g[s>=0?s:3]||"").trim();if(d){if(l>=0){const f=String(g[l]||"").trim();f&&!y.includes(f)&&y.push(f)}u[d]=u[d]||[],u[d].push(je(g[i]))}}),Object.entries(u).forEach(([g,d])=>{p[Ce[g]||g.toLowerCase()]=d}),y.length?y:null}function br(t){const{data:e,wCols:o,catIdx:i,isTotal:s,weeklyMap:n}=t;e.forEach(p=>{if(!s(p))return;const l=String(p[i>=0?i:0]||"").trim();l&&(n[Ce[l]||l.toLowerCase()]=o.map(u=>je(p[u])))})}function Ke(t,e){const o={};let i=[],s=-1;for(let L=0;L<Math.min(t.length,10);L++){const N=t[L];if(!N)continue;let O=0;for(let x=0;x<N.length;x++)/^w\d+$/i.test(String(N[x]||"").trim())&&O++;if(O>=2){s=L;break}}let n=t.findIndex(L=>{const N=L.slice(0,5).map(O=>String(O||"").trim().toLowerCase());return N.includes("category")||N.includes("product")});if(n<0&&s>=0&&(n=s),n<0&&(n=t.findIndex(L=>{let N=!1,O=0;for(let x=0;x<Math.min(L.length,10);x++){const E=String(L[x]||"").trim();E.toUpperCase()==="LG"?(N=!0,O++):E&&isNaN(parseFloat(E))&&O++}return N&&O>=3})),n<0)return Fo(t,e);const p=t[n],l=n+1;let u=null;if(t[l]){const L=t[l].slice(4,8).map(N=>String(N||"").trim()).filter(Boolean);L.length&&L.every(N=>/^\d{1,2}\/\d{1,2}/.test(N)||/~/.test(N)||/^\(/.test(N))&&(u=l)}const y=u!=null?u+1:l,g=t.slice(y).filter(L=>L[0]!=null&&String(L[0]).trim()),d=p.findIndex(L=>{const N=String(L||"").trim().toLowerCase();return N==="category"||N==="product"}),f=p.findIndex(L=>{const N=String(L||"").trim().toLowerCase();return N==="country"||N==="county"}),c=p.findIndex(L=>String(L||"").trim().toLowerCase()==="brand"),F=p.findIndex(L=>String(L||"").trim().toUpperCase()==="LG");let h=[];const k=s>=0?t[s]:p;for(let L=0;L<k.length;L++)/^w\d+$/i.test(String(k[L]||"").trim())&&h.push(L);if(!h.length)for(let L=0;L<p.length;L++){const N=String(p[L]||"").split(/\n/)[0].trim();/^w\d+/i.test(N)&&h.push(L)}i=h.map(L=>String(k[L]||"").trim().toUpperCase());let v=h.map((L,N)=>{const O=i[N]||`W${L}`;let x="";const E=u!=null?t[u]:s!==n&&s>=0?t[s+1]:null;if(E){const A=String(E[L]||"").trim();A&&/\d/.test(A)&&(x=A.startsWith("(")?A:`(${A})`)}return x?`${O}${x}`:O});console.log(`[parseWeekly:${e}] wLabelRow:${s} headerIdx:${n} dateRangeRow:${u} wCols:${h.length} labels:`,i.slice(0,5),"full:",v.slice(-2));function m(L){if(f<0)return!0;const N=String(L[f]||"").replace(/[()]/g,"").trim().toUpperCase();return N==="TOTAL"||N==="TTL"||N===""}const S=p.findIndex(L=>{const N=String(L||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="b/nb"||N==="bnb"||N==="brand/nonbrand"});function $(L){if(S<0)return!0;const N=String(L[S]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="nonbrand"||N==="nb"}const T={},j={data:g,rows:t,header:p,headerIdx:n,brandIdx:c,lgIdx:F,catIdx:d,countryIdx:f,wCols:h,weeklyLabels:i,weeklyMap:o,weeklyAll:T,isNonBrand:$,isTotal:m};if(c>=0){const L=yr(j);h=L.wCols,i=L.weeklyLabels}else if(F>=0){const L=mr(j);L&&(i=L)}else h.length&&br(j);if(i.length>0){let L=i.length;for(const E of Object.values(T))for(const A of Object.values(E))for(const P of Object.values(A)){const B=P.findIndex(w=>w!=null);B>=0&&B<L&&(L=B)}for(const E of Object.values(o)){const A=E.findIndex(P=>P!=null);A>=0&&A<L&&(L=A)}const N=12,x=i.length-L>N?i.length-N:L;x>0&&x<i.length&&(i=i.slice(x),v=v.slice(x),gr(T,o,x))}if(Object.keys(o).length){const L={weeklyMap:o};return i.length&&(L.weeklyLabels=i),v.length&&(L.weeklyLabelsFull=v),Object.keys(T).length&&(L.weeklyAll=T),L}return Fo(t,e)}function xr(t){const e=t.findIndex(S=>S.some(j=>{const L=String(j||"").trim().toLowerCase();return L.includes("page type")||L==="country"})?!S.some(j=>/^\[.*\]$/.test(String(j||"").trim())):!1);if(e<0)return zt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],i=[];for(let S=2;S<o.length;S++){const $=String(o[S]||"").trim();if(/\bLG\b/i.test($)){const T=S+1;T<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[T]||""))&&i.push({lg:S,ss:T})}}i.length||i.push({lg:2,ss:3});const s=t.slice(e+1).filter(S=>S[0]!=null&&String(S[0]).trim());let n=i[0];for(let S=i.length-1;S>=0;S--)if(s.some($=>Zt($[i[S].lg])>0)){n=i[S];break}if(!s.some(S=>Zt(S[n.lg])>0)){for(let S=Math.min(n.lg,o.length)-1;S>=2;S--)if(s.some($=>Zt($[S])>0)){n={lg:S-1,ss:S};break}}const p={},l={},u={},y={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},g=new Set,d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=i.map(S=>{const $=String(o[S.lg]||"").trim(),T=$.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return T?T[1].charAt(0).toUpperCase()+T[1].slice(1).toLowerCase():$.replace(/\s*LG\s*/i,"").trim()}),c={};s.forEach(S=>{const $=Qt(S[0]),T=String(S[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test(T)?"TTL":T;j.toLowerCase()==="microsite"&&(j="Microsites");const L=y[$]||$.toUpperCase();g.add(L);const N=Zt(S[n.lg]),O=Zt(S[n.ss]);L==="TTL"?(p[j]=(p[j]||0)+N,l[j]=(l[j]||0)+O):(u[L]||(u[L]={lg:{},samsung:{}}),u[L].lg[j]=(u[L].lg[j]||0)+N,u[L].samsung[j]=(u[L].samsung[j]||0)+O),L==="TTL"&&(c[j]||(c[j]={}),i.forEach((x,E)=>{var B,w;const A=Zt(S[x.lg]),P=Zt(S[x.ss]);if(A>0||P>0){const C=f[E]||`M${E+1}`;c[j][C]={lg:(((B=c[j][C])==null?void 0:B.lg)||0)+A,samsung:(((w=c[j][C])==null?void 0:w.samsung)||0)+P}}}))});const F=new Set;Object.values(c).forEach(S=>Object.keys(S).forEach($=>F.add($)));const h=d.filter(S=>F.has(S)),k={},v={};i.forEach((S,$)=>{const T=f[$];if(!T)return;const j={},L={};s.forEach(N=>{const O=Qt(N[0]),x=String(N[1]||"").replace(/[()]/g,"").trim();let E=/page total|^ttl$/i.test(x)?"TTL":x;E.toLowerCase()==="microsite"&&(E="Microsites");const A=y[O]||O.toUpperCase(),P=Zt(N[S.lg]),B=Zt(N[S.ss]);P<=0&&B<=0||(A==="TTL"?(P>0&&(j[E]=(j[E]||0)+P),B>0&&(L[E]=(L[E]||0)+B)):(v[T]||(v[T]={}),v[T][A]||(v[T][A]={lg:{},samsung:{}}),P>0&&(v[T][A].lg[E]=(v[T][A].lg[E]||0)+P),B>0&&(v[T][A].samsung[E]=(v[T][A].samsung[E]||0)+B)))}),Object.keys(j).length&&(k[T]={lg:j,samsung:L})}),Object.keys(v).forEach(S=>{Object.keys(v[S]).forEach($=>{const T=v[S][$];Object.values(T.lg).some(L=>L>0)||Object.values(T.samsung).some(L=>L>0)||delete v[S][$]}),Object.keys(v[S]).length||delete v[S]});const m={};return(p.TTL||Object.keys(p).length)&&(m.dotcom={lg:p,samsung:l,byMonth:k,byCntyByMonth:v}),Object.keys(u).length&&(m.dotcomByCnty=u),Object.keys(c).length&&h.length&&(m.dotcomTrend=c,m.dotcomTrendMonths=h),m}function vr(t){const e=t.findIndex(w=>w.some(I=>{const D=String(I||"").trim().toLowerCase();return D==="channel"||D==="country"})?!w.some(I=>/^\[.*\]$/.test(String(I||"").trim())):!1);e<0&&zt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let s=-1,n=-1,p=-1;for(let w=0;w<o.length;w++){const C=String(o[w]||"").trim().toLowerCase();C==="country"&&s<0&&(s=w),C==="channel"&&n<0&&(n=w),C==="prd"&&p<0&&(p=w)}const l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function u(w){const C=String(w||"").trim().toLowerCase();if(!C)return null;const _=C.match(/^(\d{1,2})월/);if(_){const D=parseInt(_[1]);if(D>=1&&D<=12)return l[D-1]}const I=C.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return I?I[1].charAt(0).toUpperCase()+I[1].slice(1).toLowerCase():null}const y=[],g=new Set;for(let w=0;w<o.length;w++){const C=u(o[w]);C&&!g.has(w)&&(y.push({col:w,label:C}),g.add(w))}if(e>0){const w=t[e-1];if(w)for(let C=0;C<w.length;C++){const _=u(w[C]);_&&!g.has(C)&&(y.push({col:C,label:_}),g.add(C))}}let d=2;if(y.length>0)d=Math.min(...y.map(w=>w.col));else if(s>=0&&n>=0)d=Math.max(s,n,p)+1;else{const w=t[i];w&&!String(w[0]||"").trim()?(s=1,n=2,d=3):(s=0,n=1,d=2)}if(s<0||n<0){const w=t[i],C=w&&!String(w[0]||"").trim()?1:0;s<0&&(s=C),n<0&&(n=C+1)}if(y.length>0){y.sort((I,D)=>I.col-D.col);const w=y[0],C=l.indexOf(w.label),_=new Set([s,n,p].filter(I=>I>=0));if(C>0&&w.col>d){let I=C-1;for(let D=w.col-1;D>=d&&I>=0;D--){if(g.has(D)||_.has(D))continue;const U=String(o[D]||"").trim(),ot=e>0?String((t[e-1]||[])[D]||"").trim():"";U||ot||(y.push({col:D,label:l[I]}),g.add(D),I--)}}}y.sort((w,C)=>l.indexOf(w.label)-l.indexOf(C.label));const f=t.slice(i).filter(w=>w.some(C=>C!=null&&String(C).trim())),c=[],F={},h={},k={},v={},m=new Set,S={};f.forEach(w=>{const C=Qt(w[s]),_=String(w[n]||"").replace(/[()]/g,"").trim(),I=p>=0?String(w[p]||"").trim():"";if(!C||!_||_.toLowerCase()==="total")return;m.add(C);const D={};if(y.forEach(({col:lt,label:dt})=>{const pt=Zt(w[lt]);pt>0&&(D[dt]=pt)}),Object.keys(D).length===0)return;const U=I.toUpperCase(),ot=!I||U==="TTL"||U==="TOTAL",ct=C==="TTL"||C==="TOTAL"?"TTL":C;S[ct]||(S[ct]={}),S[ct][_]||(S[ct][_]={ttl:null,prds:[]}),ot?S[ct][_].ttl=D:S[ct][_].prds.push({prd:I,monthScores:D})});const $=w=>{for(let C=y.length-1;C>=0;C--){const _=w[y[C].label];if(_>0)return _}return 0},T=w=>w.ttl?{...w.ttl}:{},j={};Object.entries(S).forEach(([w,C])=>{w!=="TTL"&&Object.entries(C).forEach(([_,I])=>{const D=T(I);Object.keys(D).length!==0&&(j[w]||(j[w]={}),j[w][_]=D)})});const L=S.TTL||{};Object.entries(L).forEach(([w,C])=>{const _=T(C),I=$(_);I>0&&(c.push({source:w,category:"",score:I,delta:0,ratio:0,monthScores:_}),F[w]=_),C.prds.forEach(({prd:D,monthScores:U})=>{const ot=$(U);ot>0&&(k[D]||(k[D]=[]),k[D].push({source:w,category:"",score:ot,delta:0,ratio:0,monthScores:U}))})}),Object.entries(S).forEach(([w,C])=>{w!=="TTL"&&Object.entries(C).forEach(([_,I])=>{const D=T(I),U=$(D);U>0&&(h[w]||(h[w]=[]),h[w].push({source:_,category:"",score:U,delta:0,ratio:0,monthScores:D,prd:""})),I.prds.forEach(({prd:ot,monthScores:ct})=>{const lt=$(ct);if(lt<=0)return;h[w]||(h[w]=[]),h[w].push({source:_,category:"",score:lt,delta:0,ratio:0,monthScores:ct,prd:ot}),v[ot]||(v[ot]={}),v[ot][_]||(v[ot][_]={source:_,category:"",score:0,delta:0,ratio:0,monthScores:{}});const dt=v[ot][_];dt.score+=lt,Object.entries(ct).forEach(([pt,wt])=>{dt.monthScores[pt]=(dt.monthScores[pt]||0)+wt})})})});const N={};new Set([...Object.keys(k),...Object.keys(v)]).forEach(w=>{let C=k[w];(!C||!C.length)&&(C=Object.values(v[w]||{})),C&&C.length&&(N[w]=C)});const x=c.reduce((w,C)=>w+C.score,0);c.sort((w,C)=>C.score-w.score),c.forEach((w,C)=>{w.rank=C+1,w.ratio=x>0?+(w.score/x*100).toFixed(1):0});for(const[w,C]of Object.entries(h)){const _=C.reduce((I,D)=>I+D.score,0);C.sort((I,D)=>D.score-I.score),C.forEach((I,D)=>{I.rank=D+1,I.ratio=_>0?+(I.score/_*100).toFixed(1):0})}for(const[w,C]of Object.entries(N)){const _=C.reduce((I,D)=>I+D.score,0);C.sort((I,D)=>D.score-I.score),C.forEach((I,D)=>{I.rank=D+1,I.ratio=_>0?+(I.score/_*100).toFixed(1):0})}const E=y.map(w=>w.label).filter(w=>Object.values(F).some(C=>C[w]>0)),A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let P=null;if(E.length>0){const w={};Object.values(F).forEach(I=>{Object.entries(I).forEach(([D,U])=>{U>0&&(w[D]=(w[D]||0)+1)})});let C=E[E.length-1];if(E.length>=2){const I=w[C]||0,D=E[E.length-2],U=w[D]||0;U>0&&I<U*.5&&(C=D)}const _=A.findIndex(I=>C.toLowerCase().startsWith(I.toLowerCase()));_>=0&&(P=`${A[_]} ${new Date().getFullYear()}`)}const B={};return c.length>0&&(B.citations=c),Object.keys(h).length>0&&(B.citationsByCnty=h),Object.keys(N).length>0&&(B.citationsByPrd=N),Object.keys(F).length>0&&(B.citTouchPointsTrend=F,B.citTrendMonths=E),Object.keys(j).length>0&&(B.citTouchPointsTrendByCnty=j),P&&(B.citDerivedPeriod=P),B}function wr(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let s=null,n=0,p=-1,l=-1,u=-1,y=-1,g=-1,d=4;for(let x=0;x<Math.min(t.length,10);x++){const E=t[x];if(!E)continue;const A=E.some(C=>/^no$/i.test(String(C||"").trim())),P=E.some(C=>/^region$/i.test(String(C||"").trim())),B=E.some(C=>/domain|domian/i.test(String(C||"").trim())),w=E.some(C=>/^prd$/i.test(String(C||"").trim()));if(A||P||B||w){s=E,n=x+1;for(let C=0;C<E.length;C++){const _=String(E[C]||"").trim().toLowerCase();_==="prd"&&g<0&&(g=C),_==="no"&&p<0&&(p=C),_==="region"&&l<0&&(l=C),(_==="domain"||_==="domian")&&u<0&&(u=C),_==="type"&&y<0&&(y=C)}break}(String(E[0]||"").trim().startsWith("[")||!String(E[0]||"").trim())&&(n=x+1)}s||zt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const f=p>=0||l>=0||g>=0;if(f)l<0&&(l=p>=0?p+1:g>=0?g+2:1),u<0&&(u=l+1),y<0&&(y=u+1),d=Math.max(u,y)+1;else if(u>=0)y=u+1,d=u+2;else{for(let x=n;x<Math.min(t.length,n+5);x++){const E=t[x];if(E){for(let A=0;A<Math.min(E.length,6);A++){const P=String(E[A]||"").trim();if(P.includes(".")&&P.length>3&&!i.test(P)){u=A,y=A+1,d=A+2;break}}if(u>=0)break}}u<0&&(u=0,y=1,d=2)}const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],F=x=>{const E=String(x||"").trim().toLowerCase();if(!E)return null;const A=E.match(/^(\d{1,2})월/);if(A){const B=parseInt(A[1]);if(B>=1&&B<=12)return c[B-1]}const P=E.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?P[1].charAt(0).toUpperCase()+P[1].slice(1).toLowerCase():null},h=[];if(s)for(let x=d;x<s.length;x++){const E=F(s[x]);E&&h.push({col:x,label:E})}const k=x=>/^(type|domain[_ ]type)$/i.test(String(x||"").trim()),v=x=>/^(domain|domian)$/i.test(String(x||"").trim()),m=x=>/^region$/i.test(String(x||"").trim()),S=[];s&&h.forEach(({col:x,label:E})=>{const A=x-1,P=x-2,B=x-3;B<0||k(s[A])&&v(s[P])&&m(s[B])&&S.push({regionCol:B,domainCol:P,typeCol:A,monthCol:x,label:E})});const $=[],T={},j={};let L="TTL";const N=x=>{let E=String(x||"").trim();if(!E)return"";const A=E.match(/^\[([^\]]+)\]/);A&&(E=A[1].trim()),E=E.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const P=E.indexOf("/");return P>=0&&(E=E.slice(0,P)),E};if(S.length>=2){const x={};for(let A=n;A<t.length;A++){const P=t[A];if(!P)continue;const B=g>=0?String(P[g]||"").trim():"";S.forEach(w=>{const C=N(P[w.domainCol]);if(!C||!C.includes("."))return;const _=String(P[w.monthCol]||"").replace(/,/g,"").trim(),I=parseFloat(_);if(isNaN(I)||I<=0)return;const D=String(P[w.regionCol]||"").trim().toUpperCase(),U=e[D]||D||"TTL",ot=String(P[w.typeCol]||"").trim(),ct=`${U}|${C}|${ot}|${B}`;x[ct]||(x[ct]={cnty:U,domain:C,type:ot,prd:B,monthScores:{}}),x[ct].monthScores[w.label]=(x[ct].monthScores[w.label]||0)+I})}Object.values(x).forEach(A=>{let P=0;for(let _=h.length-1;_>=0;_--){const I=A.monthScores[h[_].label];if(I>0){P=I;break}}if(P<=0)return;j[A.cnty]=(j[A.cnty]||0)+1,$.push({cnty:A.cnty,rank:j[A.cnty],domain:A.domain,type:A.type,citations:P,monthScores:A.monthScores,prd:A.prd});const B=`${A.cnty}|${A.domain}`,w=!A.prd||/^(ttl|total)$/i.test(A.prd);T[B]||(T[B]={cnty:A.cnty,domain:A.domain,type:A.type,months:{},_hasTtl:!1});const C=T[B];w?(C.type=A.type||C.type,C._hasTtl=!0,Object.entries(A.monthScores).forEach(([_,I])=>{I>0&&(C.months[_]=I)})):C._hasTtl||Object.entries(A.monthScores).forEach(([_,I])=>{I>0&&!C.months[_]&&(C.months[_]=I)})}),Object.values(T).forEach(A=>{delete A._hasTtl});const E={};$.forEach(A=>{E[A.cnty]||(E[A.cnty]=[]),E[A.cnty].push(A)}),Object.values(E).forEach(A=>{A.sort((P,B)=>B.citations-P.citations),A.forEach((P,B)=>{P.rank=B+1})})}else for(let x=n;x<t.length;x++){const E=t[x];if(!E)continue;const A=String(E[u]||"").trim(),P=String(E[y]||"").trim(),B=g>=0?String(E[g]||"").trim():"";if(!f&&(!A||!A.includes("."))){const I=String(E[u]||"").trim().toUpperCase(),D=e[I]||(o.includes(I)?I:null);D&&(!P||P==="")&&(L=D);continue}if(!A||!A.includes("."))continue;let w="TTL";if(f&&l>=0){const I=String(E[l]||"").trim().toUpperCase();w=e[I]||I}else f||(w=L);let C=0;if(h.length>0)for(let I=h.length-1;I>=0;I--){const D=String(E[h[I].col]||"").replace(/,/g,"").trim(),U=parseFloat(D);if(!isNaN(U)&&U>0){C=U;break}}else for(let I=E.length-1;I>=d;I--){const D=String(E[I]||"").replace(/,/g,"").trim();if(!D)continue;const U=parseFloat(D);if(!isNaN(U)&&U>0){C=U;break}}if(h.length>0){const I={};if(h.forEach(({col:D,label:U})=>{const ot=String(E[D]||"").replace(/,/g,"").trim(),ct=parseFloat(ot);!isNaN(ct)&&ct>0&&(I[U]=ct)}),Object.keys(I).length>0){const D=`${w}|${A}`;T[D]={cnty:w,domain:A,type:P,months:I}}}const _={};h.length>0&&h.forEach(({col:I,label:D})=>{const U=String(E[I]||"").replace(/,/g,"").trim(),ot=parseFloat(U);!isNaN(ot)&&ot>0&&(_[D]=ot)}),C>0&&(j[w]=(j[w]||0)+1,$.push({cnty:w,rank:j[w],domain:A,type:P,citations:C,monthScores:_,prd:B}))}const O={};if($.length>0&&(O.citationsCnty=$),Object.keys(T).length>0){O.citDomainTrend=T;const x=h.map(E=>E.label).filter(E=>Object.values(T).some(A=>A.months[E]>0));O.citDomainMonths=x}return O}function Ao(t,e){const o=Oe(t,[/^type$/,/^(county|country)$/]);if(o<0)return zt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const i=t[o];let s=-1,n=-1,p=-1,l=-1,u=4;for(let m=0;m<i.length;m++){const S=String(i[m]||"").trim().toLowerCase();S==="type"&&s<0&&(s=m),(S==="county"||S==="country")&&n<0&&(n=m),(S==="topic"||S==="topoc")&&p<0&&(p=m),S==="brand"&&l<0&&(l=m)}u=Math.max(s,n,p,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,g=/^w\d+/i,d=[],f=[o];for(let m=0;m<=o;m++)m!==o&&f.push(m);for(const m of f){if(d.length>0)break;const S=t[m];if(S)for(let $=u;$<S.length;$++){const T=String(S[$]||"").split(/\n/)[0].trim();T&&(y.test(T)||g.test(T))&&d.push({col:$,label:T})}}const c=t.slice(o+1),F=[];c.forEach(m=>{if(!m)return;const S=String(m[s]||"").trim(),$=Qt(m[n]),T=String(m[p]||"").trim(),j=String(m[l]||"").trim();if(!T||!j)return;const L={};let N=0;d.forEach(({col:O,label:x})=>{const E=Jt(m[O]);E>0&&(L[x]=E,N=E)}),(Object.keys(L).length>0||T)&&F.push({type:S,country:$,topic:T,brand:j,scores:L,latestScore:N})});const h=e==="weekly"?"weeklyPR":"monthlyPR",k=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",v={};return F.length>0&&(v[h]=F),d.length>0&&(v[k]=d.map(m=>m.label)),v}function Eo(t,e){const o=t.findIndex(v=>v?v.some(m=>/steakholders|stakeholders/i.test(String(m||"").trim()))||v.some(m=>/^type$/i.test(String(m||"").trim()))&&v.some(m=>/topoc|topic/i.test(String(m||"").trim())):!1);if(o<0)return zt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const i=t[o];let s=-1,n=-1,p=-1,l=-1,u=4;for(let v=0;v<i.length;v++){const m=String(i[v]||"").trim().toLowerCase();(m==="steakholders"||m==="stakeholders")&&s<0&&(s=v),m==="type"&&n<0&&(n=v),(m==="country"||m==="county")&&p<0&&(p=v),(m==="topoc"||m==="topic")&&l<0&&(l=v)}u=Math.max(s,n,p,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,g=/^w\d+/i,d=[];for(let v=u;v<i.length;v++){const m=String(i[v]||"").split(/\n/)[0].trim();m&&(y.test(m)||g.test(m))&&d.push({col:v,label:m})}const f=t.slice(o+1),c=[];f.forEach(v=>{if(!v)return;const m=String(v[s]||"").trim(),S=String(v[n]||"").trim(),$=Qt(v[p]),T=String(v[l]||"").trim();if(!T||!m)return;const j={};let L=0;d.forEach(({col:N,label:O})=>{const x=Jt(v[N]);x>0&&(j[O]=x,L=x)}),c.push({stakeholder:m,type:S,country:$,topic:T,scores:j,latestScore:L})});const F=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",h=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",k={};return c.length>0&&(k[F]=c),d.length>0&&(k[h]=d.map(v=>v.label)),k}function Cr(t){const e=Oe(t,[/^prompts?$/,/^country$/]);if(e<0)return zt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(l=>l==null?void 0:l.slice(0,6))});const o=t[e],i={},s=["country","prompts","division","category","launched","branded","cej","topic"];for(let l=0;l<o.length;l++){const u=String(o[l]||"").trim().toLowerCase();s.includes(u)&&!i[u]&&(i[u]=l)}const n=t.slice(e+1),p=[];return n.forEach(l=>{if(!l)return;const u=String(l[i.prompts]||"").trim();u&&p.push({country:Qt(l[i.country]),prompt:u,division:String(l[i.division]||"").trim(),category:String(l[i.category]||"").trim(),launched:String(l[i.launched]||"").trim(),branded:String(l[i.branded]||"").trim(),cej:String(l[i.cej]||"").trim(),topic:String(l[i.topic]||"").trim()})}),p.length>0?{appendixPrompts:p}:{}}const se={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function kr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(se).length}건`),{unlaunchedMap:{...se}};const e=Oe(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,f)=>console.log(`  row${f}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(se).length}건`),{unlaunchedMap:{...se}};const o=t[e];let i=-1,s=-1,n=-1;for(let d=0;d<o.length;d++){const f=String(o[d]||"").trim().toLowerCase();i<0&&(f==="country"||f==="county")&&(i=d),s<0&&(f==="category"||f==="product"||f==="제품"||f==="카테고리")&&(s=d),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(f)&&(n=d)}if(i<0||s<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:s,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(se).length}건`),{unlaunchedMap:{...se}};const p=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),l={...se};let u=0,y=0,g=0;return t.slice(e+1).forEach((d,f)=>{const c=e+1+f;try{if(!d){g++;return}const F=String(d[n]||"").trim();if(!F){g++;return}u++;const h=F.toLowerCase().replace(/\s+/g," ");if(!p.has(h)&&!p.has(h.replace(/\s/g,"")))return;const k=pr(d[i]),v=String(d[s]||"").trim();if(!k||!v){console.warn("[parseUnlaunched] row skipped",{rowIdx:c,raw:{country:d[i],category:d[s],status:d[n]},parsed:{country:k,rawCategory:v}}),g++;return}const m=v.toUpperCase(),S=Go[m]||m;l[`${k}|${S}`]=!0,S!==m&&(l[`${k}|${m}`]=!0),y++}catch(F){let h;try{h={country:d==null?void 0:d[i],category:d==null?void 0:d[s],status:d==null?void 0:d[n]}}catch{h=d}console.warn("[parseUnlaunched] row error",{rowIdx:c,raw:h,error:F==null?void 0:F.message}),g++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${y}건 + 디폴트 ${Object.keys(se).length}건 + skip ${g}건 / 총행 ${u} / 최종키 ${Object.keys(l).length}개`),{unlaunchedMap:l}}function Sr(t){const e=Oe(t,[/^bu$/,/topic/]);if(e<0)return zt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(g=>g==null?void 0:g.slice(0,6))});const o=t[e];let i=-1,s=-1,n=-1,p=-1,l=-1;for(let g=0;g<o.length;g++){const d=String(o[g]||"").trim().toLowerCase();i<0&&d==="bu"&&(i=g),s<0&&d.includes("topic")&&d.includes("대시보드")&&(s=g),n<0&&(d==="explanation"||d==="설명")&&(n=g),p<0&&d.includes("기존")&&(p=g),l<0&&d.includes("topic")&&d.includes("row")&&(l=g)}s<0&&(s=1),n<0&&(n=2);const u=[];let y="";return t.slice(e+1).forEach(g=>{if(!g)return;const d=String(g[i]||"").trim();d&&(y=d);const f=String(g[s]||"").trim();if(!f)return;const c=String(g[n]||"").trim(),F=p>=0?String(g[p]||"").trim():"",h=l>=0?String(g[l]||"").trim():"";u.push({bu:y,topic:f,explanation:c,oldTopic:F,topicRow:h})}),u.length>0?{prTopicList:u}:{}}function Fr(t,e){var o;if(!sr(e,`parseSheetRows:${t}`))return{};try{if(t===xt.meta)return ur(e);if(t===xt.visSummary)return fr(e);if(t===xt.productMS||t===xt.productHS||t===xt.productES)return hr(e);if(t===xt.weeklyMS)return Ke(e,"MS");if(t===xt.weeklyHS)return Ke(e,"HS");if(t===xt.weeklyES)return Ke(e,"ES");if(t===xt.monthlyPR)return Ao(e,"monthly");if(t===xt.weeklyPR)return Ao(e,"weekly");if(t===xt.monthlyBrandPrompt)return Eo(e,"monthly");if(t===xt.weeklyBrandPrompt)return Eo(e,"weekly");if(t===xt.citPageType)return xr(e);if(t===xt.citTouchPoints)return vr(e);if(t===xt.citDomain)return wr(e);if(t===xt.appendix)return Cr(e);if(t===xt.unlaunched)return kr(e);if(t===xt.prTopicList)return Sr(e)}catch(i){return Xe(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return zt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(xt)})}function Ar(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Er(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,s=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!s.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${s.status}).`);const n=await s.text(),p=await Xo(),l=p.read(n,{type:"string"}),u=l.Sheets[l.SheetNames[0]];return p.utils.sheet_to_json(u,{header:1,defval:""})}async function Tr(t,e){var n,p;const o=Object.values(xt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const s=await Promise.allSettled(o.map(l=>Er(t,l).then(u=>({name:l,rows:u}))));for(let l=0;l<o.length;l++){const u=o[l],y=s[l];if(e==null||e(`"${u}" 처리 중... (${l+1}/${o.length})`),y.status==="rejected"){console.warn(`"${u}" 시트 건너뜀:`,(n=y.reason)==null?void 0:n.message);continue}try{const{rows:g}=y.value,d=Fr(u,g);for(const[f,c]of Object.entries(d))f==="weeklyLabels"||f==="weeklyLabelsFull"?i[f]||(i[f]=c):Array.isArray(c)&&Array.isArray(i[f])?i[f]=[...i[f],...c]:c&&typeof c=="object"&&!Array.isArray(c)&&i[f]&&typeof i[f]=="object"&&!Array.isArray(i[f])?i[f]={...i[f],...c}:i[f]=c}catch(g){console.warn(`"${u}" 시트 처리 실패:`,g.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const l=[];for(const[u,y]of Object.entries(i.weeklyAll)){const g=y.Total||y.TTL||{},d=g.LG||g.lg||[],f=Object.entries(g).filter(([v])=>v!=="LG"&&v!=="lg"),c=d.length?d[d.length-1]:0,F=d.length>=5?d[0]:0;let h="",k=0;for(const[v,m]of f){const S=m.length?m[m.length-1]:0;S>k&&(k=S,h=v)}c>0&&l.push({id:u,bu:zo[u]||"HS",kr:Re[u]||u,category:u,date:((p=i.meta)==null?void 0:p.period)||"",score:c,prev:F,vsComp:k,compName:h,allScores:{LG:c,...h?{[h]:k}:{}}})}if(l.length&&(i.productsPartial=l,console.log(`[SYNC] weeklyAll에서 ${l.length}개 제품 생성:`,l.map(u=>`${u.id}=${u.score}`).join(", "))),!i.productsCnty){const u=[];for(const[y,g]of Object.entries(i.weeklyAll)){const d=Re[y]||y;for(const[f,c]of Object.entries(g)){if(f==="Total"||f==="TTL")continue;const F=c.LG||c.lg||[],h=F.length?F[F.length-1]:0;if(h<=0)continue;const k=F.length>=2?F[0]:0;let v="",m=0;const S={LG:h};for(const[T,j]of Object.entries(c)){if(T==="LG"||T==="lg")continue;const L=j.length?j[j.length-1]:0;S[T]=L,L>m&&(m=L,v=T)}const $=+(h-m).toFixed(1);u.push({product:d,country:f,score:h,prev:k,compName:v,compScore:m,gap:$,allScores:S})}}u.length&&(i.productsCnty=u,console.log(`[SYNC] weeklyAll에서 productsCnty ${u.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((u,y)=>u===`W${y+1}`)){const u=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(u.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",u),i.weeklyLabels=u;const y=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(g=>{const d=String(g).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(g=>/^W\d+/.test(g));y.length&&(i.weeklyLabelsFull=y)}}if(i._syncIssues=lr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const l=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");l.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(l.slice(0,10)))}catch{}return i}const ft={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none",boxSizing:"border-box"};function Lr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),s=Math.floor(i/24);return s>=1?`${s}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Br({savedAt:t,ageMs:e,stale:o,style:i}){const s=t==null,n=s?"#1E293B":o?"#7F1D1D":"#064E3B",p=s?"#94A3B8":o?"#FCA5A5":"#86EFAC",l=s?"#334155":o?"#B91C1C":"#047857",u=s?"○":o?"⚠️":"●",y=s?"동기화 정보 없음":`데이터 최신화: ${Lr(e)}`,g=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:g,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:p,border:`1px solid ${l}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:R,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:u}),y]})}function $r({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Wt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Yt="#CF0652",le="#94A3B8",Pe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Qo={LG:Yt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},To=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Ze={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Rr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],De={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Ir={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},jr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},eo=90;function oo(t,e){const o=Pe[e]||Pe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Pr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Dr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Qe(t){const e=String(t||"").trim().toUpperCase();return De[e]||t}function Mr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Ir[o]||De[o]||t:jr[o]||De[o]||t}let Nr=0;function Lo(t,e,o,i,s,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const p=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,l=n.baselineLabel||"",u=n.labelOffsetY||0,y=n.lineOffsetY||0,g=Nr++,d={t:18,r:10,b:20,l:10},f=o-d.l-d.r,c=i-d.t-d.b,F=t.filter(x=>x!=null);if(!F.length){let x=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const E=t.length,A=E>1?E-1:1;return x+=t.map((P,B)=>`<text x="${(d.l+B/A*f).toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Wt}">${e[B]||""}</text>`).join(""),x+="</svg>",x}const h=Math.min(...F)-1,k=Math.max(...F)+1,v=k-h||1,m=t.length,S=m>1?m-1:1,$=t.map((x,E)=>d.l+E/S*f),T=[];t.forEach((x,E)=>{x!=null&&T.push({x:$[E],y:d.t+(1-(x-h)/v)*c,v:x,idx:E})});let j=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const L=p>0?T.filter(x=>x.idx<p):[],N=p>0?T.filter(x=>x.idx>=p):T,O="#64748B";if(N.length>=2){const x=N.map((A,P)=>`${P?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),E=x+` L${N[N.length-1].x.toFixed(1)},${d.t+c} L${N[0].x.toFixed(1)},${d.t+c} Z`;j+=`<defs><linearGradient id="lg${g}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${s}" stop-opacity="0.03"/>
    </linearGradient></defs>`,j+=`<path d="${E}" fill="url(#lg${g})"/>`,j+=`<path d="${x}" stroke="${s}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(L.length>=2){const x=L.map((E,A)=>`${A?"L":"M"}${E.x.toFixed(1)},${E.y.toFixed(1)}`).join(" ");j+=`<path d="${x}" stroke="${O}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(j+=T.map(x=>{const E=p>0&&x.idx<p;return p>0&&x.idx===p?`<circle cx="${x.x.toFixed(1)}" cy="${x.y.toFixed(1)}" r="4" fill="#000" stroke="${s}" stroke-width="3"/>`:`<circle cx="${x.x.toFixed(1)}" cy="${x.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${E?O:s}" stroke-width="2" opacity="${E?.85:1}"/>`}).join(""),j+=T.map(x=>{const A=p>0&&x.idx<p?O:s;return`<text x="${x.x.toFixed(1)}" y="${Math.max(x.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${Wt}">${x.v.toFixed(1)}</text>`}).join(""),p>0&&l){const x=$[p];j+=`<line x1="${x.toFixed(1)}" y1="${(d.t+y).toFixed(1)}" x2="${x.toFixed(1)}" y2="${(d.t+c+y).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const E=x>o*.7,A=(E?d.t+c+1:d.t+8)+u;j+=`<text x="${(E?x-5:x+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${E?"end":"start"}" font-size="9" fill="#64748B" font-family="${Wt}">${l}</text>`}return j+=t.map((x,E)=>`<text x="${$[E].toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Wt}">${e[E]||""}</text>`).join(""),j+="</svg>",j}function Se(t,e){return Qo[t]||To[e%To.length]}function tn(t,e,o,i,s={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const p=s.fadeBeforeIdx!=null?s.fadeBeforeIdx:-1,l=s.baselineLabel||"";let u=1/0,y=-1/0;if(n.forEach(m=>(t[m]||[]).forEach(S=>{S!=null&&(S<u&&(u=S),S>y&&(y=S))})),!isFinite(u))return"";const g=Math.max((y-u)*.15,2);u=Math.max(0,u-g),y=Math.min(100,y+g);const d=y-u||1,f=e.length,c=8,F=8,h=i-c-F,k="#64748B";let v="";for(let m=0;m<=4;m++){const S=c+m/4*h;v+=`<line x1="0" y1="${S.toFixed(1)}" x2="${o}" y2="${S.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((m,S)=>{const $=t[m]||[],T=Se(m,S),j=m==="LG",L=j?2.5:1.5,N=j?1:.7,O=[];if($.forEach((P,B)=>{if(P==null)return;const w=(B+.5)/f*o,C=c+(1-(P-u)/d)*h;O.push({x:w,y:C,v:P,idx:B})}),!O.length)return;const x=p>0?O.filter(P=>P.idx<p):[],E=p>0?O.filter(P=>P.idx>=p):O;function A(P,B,w,C){if(P.length>=2){const _=P.map((I,D)=>`${D?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ");v+=`<path d="${_}" stroke="${B}" fill="none" stroke-width="${L}" stroke-linecap="round" stroke-linejoin="round" opacity="${w}"/>`}P.forEach(_=>{C&&_.idx===p||(v+=`<circle cx="${_.x.toFixed(1)}" cy="${_.y.toFixed(1)}" r="${j?3.5:2.5}" fill="#fff" stroke="${B}" stroke-width="${j?2:1.5}" opacity="${w}"/>`)})}if(A(x,k,.85,!1),A(E,T,N,j&&p>0),j&&p>0){const P=O.find(B=>B.idx===p);P&&(v+=`<circle cx="${P.x.toFixed(1)}" cy="${P.y.toFixed(1)}" r="4.5" fill="#000" stroke="${T}" stroke-width="3"/>`)}}),p>0&&l){const m=(p+.5)/f*o;v+=`<line x1="${m.toFixed(1)}" y1="${c}" x2="${m.toFixed(1)}" y2="${c+h}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const S=m>o*.7;v+=`<text x="${(S?m-5:m+5).toFixed(1)}" y="${(c+12).toFixed(1)}" text-anchor="${S?"end":"start"}" font-size="11" fill="#64748B" font-family="${Wt}">${l}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${v}</svg>`}function _r({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:s,monthlyVis:n,total:p,meta:l,wLabels:u}){const y={monthlyVis:n};return`
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
${(()=>{const g=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?g(e):"{}"};
var _products=${g(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${g(i||[])};
var _unlaunchedMap=${g(s)};
var _PROD_TO_UL=${g(Fe)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${g((y==null?void 0:y.monthlyVis)||[])};
var _total=${g(p)};
var _meta={period:${g(l.period||"")},reportNo:${g(l.reportNo||"")},totalInsight:${g(l.totalInsight||"")}};
var _wLabels=${g(u)};`})()}
${(()=>{const g=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${g(Qo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Yt}';
var _FONT=${g(Wt)};
var _COMP='${le}';
var _REGIONS=${g(Object.fromEntries(Object.entries(Ze).map(([d,f])=>[d,f.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Ze).map(([g,d])=>[g,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
// 초기 로드 — script 가 </body> 직전이라 DOM 이미 파싱 완료 상태. 직접 호출.
updateHeroFromCheckboxes();
`}const Or=["audio","rac","aircare"];function en(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Or.includes(String(e).toLowerCase())}function zr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function Me(t,e){if(!en(t)||!e)return-1;const o=zr(t);if(o>0){const i=e.findIndex(s=>{const n=String(s||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const s=String(i||"").trim();return/^Apr(il)?$/i.test(s)||s==="4월"})}const Ne={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Gr(t){const e=Ne[t]||Ne.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function on(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=Ne[e]||Ne.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Ur(t,e,o,i,s,n,p){if(!e||!Object.keys(e).length)return"";const u=["MS","HS","ES"].map(y=>{const g=t.filter(f=>f.bu===y);if(!g.length)return"";const d=g.map(f=>{var x,E;const c=((x=e[f.id])==null?void 0:x.Total)||{},F=Object.keys(c).sort((A,P)=>{var C,_;if(A==="LG")return-1;if(P==="LG")return 1;const B=((C=c[A])==null?void 0:C[c[A].length-1])||0;return(((_=c[P])==null?void 0:_[c[P].length-1])||0)-B});if(!F.length)return"";const h=oo(f.status,s),k=(E=c.LG)==null?void 0:E[c.LG.length-1],v=F.map((A,P)=>{const B=Se(A,P),w=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${B};opacity:${w?1:.7}"></i><span style="font-size:13px;color:${w?"#1A1A1A":"#94A3B8"};font-weight:${w?700:400}">${A}</span></span>`}).join(""),m=o.length,S=`<colgroup><col style="width:${eo}px">${o.map(()=>"<col>").join("")}</colgroup>`,$=Me(f,o),T=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:8px 0;border:0">${tn(c,o,m*80,180,{fadeBeforeIdx:$,baselineLabel:$>0?"*Baseline 재설정":""})}</td></tr>`,j=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:4px 0 6px;border:0">${v}</td></tr>`,L=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,N=F.map((A,P)=>{const B=Se(A,P),w=A==="LG",C=o.map((_,I)=>{var U;const D=(U=c[A])==null?void 0:U[I];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${D!=null?w?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${w?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${D!=null?D.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${w?"#FFF8F9":P%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${w?700:500};color:${B};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${B};margin-right:4px;vertical-align:0"></i>${A}</td>${C}</tr>`}).join(""),O=no(f.id||f.category,n);return`<div class="trend-row${O?" is-unlaunched":""}" data-prodid="${f.id||f.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Yt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(f,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${O?"#F1F5F9":h.bg};color:${O?"#64748B":h.color};border:1px solid ${O?"#CBD5E1":h.border}">${O?s==="en"?"Unlaunched":"미출시":h.label}</span>
          ${k!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${k.toFixed(1)}%</span>`:""}
          ${f.compName?`<span style="font-size:14px;color:#94A3B8">vs ${f.compName} ${f.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Wt}">${S}<tbody>${T}${j}${L}${N}</tbody></table></div>
        ${on(f,s)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${d}
    </div>`:""}).join("");return u.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${s==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${p||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${s==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${u}</div>
  </div>`:""}function Hr(t,e,o,i,s,n){if(!e||!e.length)return"";const p=["MS","HS","ES"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(c){const F=String(c).match(/(\d{1,2})월/);if(F)return parseInt(F[1])-1;const h=String(c).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return h?u[h[1].toLowerCase()]:-1}const g=[0,1,2,3,4,5,6,7,8,9,10,11],d=l.slice(),f=p.map(c=>{const F=t.filter(k=>k.bu===c);if(!F.length)return"";const h=F.map(k=>{const v=k.monthlyScores||[];let m={};if(v.length>=2){const w=new Set;if(v.forEach(C=>{C.allScores&&Object.keys(C.allScores).forEach(_=>w.add(_))}),w.forEach(C=>{m[C]=g.map(_=>{var D;const I=v.find(U=>y(U.date)===_);return((D=I==null?void 0:I.allScores)==null?void 0:D[C])??null})}),!w.size&&(m.LG=g.map(C=>{const _=v.find(I=>y(I.date)===C);return _?_.score:null}),k.vsComp>0)){const C=g.map(_=>{const I=v.find(D=>y(D.date)===_);return(I==null?void 0:I.comp)??null});C.some(_=>_!=null)&&(m[k.compName||"Comp"]=C)}}else{const w=e.filter(D=>D.division===c&&(D.country==="TOTAL"||D.country==="TTL")),C={};w.forEach(D=>{const U=y(D.date);U>=0&&(C[U]=D)});const _=g.map(D=>{var U;return((U=C[D])==null?void 0:U.lg)||null}),I=g.map(D=>{var U;return((U=C[D])==null?void 0:U.comp)||null});m={LG:_},I.some(D=>D!=null&&D>0)&&(m.Samsung=I)}const S=Object.keys(m).sort((w,C)=>{if(w==="LG")return-1;if(C==="LG")return 1;const _=(m[w]||[]).filter(D=>D!=null).pop()||0;return((m[C]||[]).filter(D=>D!=null).pop()||0)-_});if(!S.length)return"";const $=oo(k.status,i),T=(m.LG||[]).filter(w=>w!=null).pop(),j=S.map((w,C)=>{const _=Se(w,C),I=w==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${_};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${w}</span></span>`}).join(""),L=d.length,N=`<colgroup><col style="width:${eo}px">${d.map(()=>"<col>").join("")}</colgroup>`,O=Me(k,d),x=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:8px 0;border:0">${tn(m,d,L*80,180,{fadeBeforeIdx:O,baselineLabel:O>0?"*Baseline 재설정":""})}</td></tr>`,E=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:4px 0 6px;border:0">${j}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(w=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${w}</th>`).join("")}</tr>`,P=S.map((w,C)=>{const _=Se(w,C),I=w==="LG",D=d.map((U,ot)=>{var lt;const ct=(lt=m[w])==null?void 0:lt[ot];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${ct!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${ct!=null?ct.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":C%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${_};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${_};margin-right:4px;vertical-align:0"></i>${w}</td>${D}</tr>`}).join(""),B=no(k.id||k.category,s);return`<div class="trend-row${B?" is-unlaunched":""}" data-prodid="${k.id||k.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Yt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ro(k,s)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${B?"#F1F5F9":$.bg};color:${B?"#64748B":$.color};border:1px solid ${B?"#CBD5E1":$.border}">${B?i==="en"?"Unlaunched":"미출시":$.label}</span>
          ${T!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${T.toFixed(1)}%</span>`:""}
          ${k.compName?`<span style="font-size:14px;color:#94A3B8">vs ${k.compName} ${k.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Wt}">${N}<tbody>${x}${E}${A}${P}</tbody></table></div>
        ${on(k,i)}
      </div>`}).join("");return h?`<div class="bu-group" data-bu="${c}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${c}</span></div>
      ${h}
    </div>`:""}).join("");return f.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${f}</div>
  </div>`:""}function nn(){return""}function Bo(t,e,o,i,s){const n=+(t.score-t.prev).toFixed(1),p=t.vsComp||0,l=+(t.score-p).toFixed(1),u=n>0?"▲":n<0?"▼":"─",y=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section"${s==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${y}">${u} ${Math.abs(n).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Yt}"></div>
          </div>
          ${p>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(p,100)}%;background:${le}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Yt}"></i> LG ${t.score}%</span>
            ${p>0?`<span><i style="background:${le}"></i> Samsung ${p}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${p>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${p}%</span>
          <span class="hero-comp-gap" style="color:${l>=0?"#22C55E":"#EF4444"}">Gap ${l>=0?"+":""}${l}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function we(t,e){const o=Fe[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function no(t,e){return Rr.every(o=>{const i=Fe[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function ro(t,e){return we(t.id||t.category,e).length?`${t.kr}*`:t.kr}function $o(t,e,o,i,s,n,p,l,u){if(!t.length)return"";const g=["MS","HS","ES"].map(d=>{const f=t.filter(F=>F.bu===d);if(!f.length)return"";const c=f.map(F=>{var Z,gt;const h=F.weekly||[],k=h.filter(K=>K!=null),v=F.weeklyScore||(k.length>0?k[k.length-1]:F.score),m=F.monthlyScore||F.score,S=v,$=((Z=l==null?void 0:l[F.id])==null?void 0:Z.Total)||((gt=l==null?void 0:l[F.id])==null?void 0:gt.TTL)||{};let T=0;Object.entries($).forEach(([K,rt])=>{if(K==="LG"||K==="lg")return;const st=Array.isArray(rt)&&rt.length?rt[rt.length-1]:0;st>T&&(T=st)});const j=F.vsComp||0,L=T>0?v/T*100:j>0?v/j*100:100,N=j>0?m/j*100:100,O=Math.round(L*10)/10,x=Math.round(N*10)/10,E=O,A=L>=100?"lead":L>=80?"behind":"critical",P=oo(A,i),B=k.length>=1?k[k.length-1]:null,w=k.length>=2?k[k.length-2]:null,C=B!=null&&w!=null?+(B-w).toFixed(1):null,_=C>0?"▲":C<0?"▼":"─",I=C>0?"#22C55E":C<0?"#EF4444":"#94A3B8",D=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ot={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ct(K){const rt=String(K).match(/(\d{1,2})월/);if(rt)return parseInt(rt[1])-1;const st=String(K).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?ot[st[1].toLowerCase()]:-1}let lt=F.monthlyScores||[];if(lt.length<2&&p.length>0){const K=p.filter(st=>st.division===F.bu&&(st.country==="TOTAL"||st.country==="TTL")),rt={};K.forEach(st=>{const St=ct(st.date);St>=0&&(rt[St]={date:st.date,score:st.lg,comp:st.comp})}),lt=Object.keys(rt).sort((st,St)=>st-St).map(st=>rt[st])}const dt=lt.length>0?lt.map(K=>{const rt=ct(K.date);return rt>=0?U[rt]:K.date}):["M-3","M-2","M-1","M0"],pt=lt.length>0?lt.map(K=>K.score):[null,null,null,F.score],wt=lt.length>=2?+(lt[lt.length-1].score-lt[lt.length-2].score).toFixed(1):null,It=wt>0?"▲":wt<0?"▼":"─",Bt=wt>0?"#22C55E":wt<0?"#EF4444":"#94A3B8",jt=E,$t=jt>=100?"#15803D":jt>=80?"#D97706":"#BE123C",Dt=F.weeklyPrev||(k.length>=5?k[k.length-5]:k[0]||0),Vt=v&&Dt?+(v-Dt).toFixed(1):null,kt=m&&(F.monthlyPrev||F.prev)?+(m-(F.monthlyPrev||F.prev)).toFixed(1):null,_t=we(F.id||F.category,n),Kt=no(F.id||F.category,n),G=Kt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:P;return`<div class="prod-card${Kt?" is-unlaunched":""}" data-prodid="${F.id||F.category}" data-ws="${v.toFixed(1)}" data-ms="${m.toFixed(1)}" data-wr="${O}" data-mr="${x}" data-wmom="${Vt??""}" data-mmom="${kt??""}" style="border-color:${G.border}">
        <div class="prod-head">
          <span class="prod-name">${ro(F,n)}</span>
          ${_t.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${G.bg};color:${G.color};border-color:${G.border}">${G.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${S.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${I}">${C!=null?`WoW ${_} ${Math.abs(C).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Bt}">${en(F)||wt==null?"":`MoM ${It} ${Math.abs(wt).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const K=s.slice(-10),rt=Me(F,K),st=String(F.id||"").toLowerCase(),St=st==="aircare"?30:st==="rac"?20:0;return Lo(h.slice(-10),K,300,90,D,{fadeBeforeIdx:rt,baselineLabel:rt>0?"*Baseline 재설정":"",labelOffsetY:St})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const K=Me(F,dt),st=String(F.id||"").toLowerCase()==="audio";return Lo(pt,dt,300,90,D,{fadeBeforeIdx:K,baselineLabel:K>0?"*Baseline 재설정":"",labelOffsetY:st?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${F.compName}`:`${F.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(jt,120)}%;background:${$t}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${$t}">${jt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${f.length}${o.categories}</span></div>
      <div class="prod-grid">${c}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${u||""}${u?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${nn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${g}${(()=>{const d=t.filter(f=>we(f.id||f.category,n).length>0).map(f=>`${(f.id||"").toLowerCase()==="audio"||f.kr==="오디오"?"Audio-Sound Suite":f.kr}: ${we(f.id||f.category,n).map(c=>Mr(c,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Gr(i)})()}</div>
  </div>`}function Ro(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),p=Fe[n]||(n||"").toUpperCase(),l=i&&i[`${t.country}|${p}`],u=Dr(t.score,t.compScore),y=l?"#94A3B8":u==="lead"?"#15803D":u==="behind"?"#D97706":"#BE123C",g=+(t.score-t.compScore).toFixed(1),d=l?"#64748B":g>=0?"#15803D":"#BE123C",f=130,c=["TCL","HISENSE","HAIER"];let F="",h=0;t.allScores&&Object.entries(t.allScores).forEach(([T,j])=>{const L=String(T).toUpperCase();c.some(O=>L.includes(O))&&j>h&&(F=T,h=j)});const k=Math.max(e,h),v=Math.max(3,Math.round(t.score/k*f)),m=t.compScore>0?Math.max(3,Math.round(t.compScore/k*f)):0,S=h>0?Math.max(3,Math.round(h/k*f)):0,$="#9333EA";return`<div class="vbar-item${l?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${le}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${m}px;background:${le}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${h>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${$}">${h.toFixed(1)}</span>
        <div class="vbar-col" style="height:${S}px;background:${$}"></div>
        <span class="vbar-col-name" style="color:${$}">${F.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${g>=0?"+":""}${g}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Io(t,e,o,i,s,n){if(!t||!t.length)return"";const p=new Map;t.forEach(c=>{p.has(c.product)||p.set(c.product,[]),p.get(c.product).push(c)});const l=e.cntyProductFilter||{},u=[...p.entries()].filter(([c])=>l[c]!==!1).map(([c,F])=>{const h=Math.max(...F.map(v=>Math.max(v.score,v.compScore)),1),k=F.map(v=>Ro(v,h,Qe(v.country),s)).join("");return`<div class="cnty-product" data-group-product="${c}"><div class="bu-header"><span class="bu-label">${c}</span></div><div class="vbar-chart">${k}</div></div>`}).join(""),y=new Map;t.forEach(c=>{y.has(c.country)||y.set(c.country,[]),y.get(c.country).push(c)});const g=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],f=g.filter(c=>y.has(c)).concat([...y.keys()].filter(c=>!g.includes(c))).map(c=>{const F=y.get(c);if(!F)return"";const h=Math.max(...F.map(v=>Math.max(v.score,v.compScore)),1),k=F.map(v=>Ro(v,h,v.product,s)).join("");return`<div class="cnty-product" data-group-country="${c}"><div class="bu-header"><span class="bu-label">${Qe(c)}</span></div><div class="vbar-chart">${k}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${le}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${nn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${f}</div>
      <div class="cnty-view-product" style="display:none">${u}</div>
      ${(()=>{if(!s||!Object.keys(s).length)return"";const c={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},h=[...new Set(t.map(k=>k.product))].map(k=>{const v=c[k]||String(k).toLowerCase(),m=we(v,s),S=v==="audio"?"Audio-Sound Suite":k;return m.length?`${S}: ${m.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return h.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${h.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const jo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Wr(t){const e=jo[t]||jo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(s=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${s.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${s.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Vr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",s=e==="en"?"All":"전체",n=e==="en"?"Total":"총",p=e==="en"?"":"개",l=e==="en"?"Clear filters":"필터 초기화",u=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],y={};u.forEach(c=>{const F=new Set;t.forEach(h=>{h[c.key]&&F.add(h[c.key])}),y[c.key]=[...F].sort()});const g=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(y).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),f=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${p?" "+p:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${l}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${u.map(c=>`<th data-col="${c.key}" onclick="_plToggle('${c.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${c.label} <span id="pl-arrow-${c.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${u.map(c=>`<div id="pl-dd-${c.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${c.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${s}</div>
      ${y[c.key].map(F=>`<div onclick="_plFilter('${c.key}','${F.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${F}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${g};
    var _plFilters={};
    var _divC=${d};
    var _cejC=${f};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${p?" "+p:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(u.map(c=>c.key))}.forEach(function(k){
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
  <\/script>`}function Po(t,e,o,i,s,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const p=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],l=[];for(let x=0;x<12;x++)l.push("w"+(5+x));const u=[...new Set(t.map(x=>x.topic))].filter(Boolean),y=[...new Set(t.map(x=>x.type))].filter(Boolean),g=[...new Set(t.map(x=>x.country))].filter(x=>x&&x!=="TTL"),d=p.filter(x=>g.includes(x)).concat(p.filter(x=>!g.includes(x))),f=JSON.stringify(t).replace(/</g,"\\u003c"),c=JSON.stringify(l),F=JSON.stringify(u),h=JSON.stringify(y),k=JSON.stringify(d),v=72;function m(x){const E={};return x&&String(x).split(`
`).forEach(A=>{const P=A.indexOf("=");if(P>0){const B=A.slice(0,P).trim(),w=A.slice(P+1).trim();B&&(E[B]=w)}}),E}const S=m(i==null?void 0:i.prTopicPromptsRaw);s&&s.length&&u.forEach(x=>{if(!S[x]){const E=s.find(A=>A.topic===x&&A.country==="US");E&&(S[x]=E.prompt)}});const $=(n==null?void 0:n.prTopicList)||[],T={},j={};$.forEach(x=>{[x.topic,x.topicRow,x.oldTopic].filter(Boolean).map(A=>A.trim()).forEach(A=>{x.explanation&&!T[A]&&(T[A]=x.explanation),x.bu&&!j[A]&&(j[A]=x.bu)})});const N={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...T,...m(i==null?void 0:i.prTopicDescsRaw)},O={};return u.forEach(x=>{const E=j[x];if(E)O[x]=E;else{const A=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];O[x]=A.some(P=>x.toLowerCase().includes(P.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Wt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Yt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(i==null?void 0:i.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
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
    var D=${f},W=${c},TP=${F},TY=${h},CN=${k};
    var CW=${v};
    var TOPIC_CAT=${JSON.stringify(O)};
    var TOPIC_PROMPT=${JSON.stringify(S).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(N).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify($).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(De)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Yt}',COMP='${le}';
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
  <\/script>`}function Do(t,e,o,i,s,n){const p=(t||[]).filter(h=>!0);if(!p.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const l=[];for(let h=0;h<12;h++)l.push("w"+(5+h));const y=[...new Set(p.map(h=>h.stakeholder))].filter(Boolean).map(h=>({stakeholder:h,topics:[...new Set(p.filter(k=>k.stakeholder===h).map(k=>k.topic))].filter(Boolean)})),g=72,d=JSON.stringify(p).replace(/</g,"\\u003c"),f=JSON.stringify(l),c=JSON.stringify(y),F="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Wt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Yt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${F}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${f},GROUPS=${c};
    var CW=${g},RED='${Yt}';
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
      var el=document.getElementById('${F}-sections');if(!el)return;
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
  <\/script>`}function Kr(t,e,o,i,s,n,p,l,u,y,g,d,f,c){var _t,Kt,vt;f!=null&&f.llmModel&&f.llmModel!=="Total"&&(o=Ho(o,f.llmModel),p=Wo(p,f.llmModel),e=Vo(e,f.monthlyVis,f.llmModel),f.monthlyVis&&(f={...f,monthlyVis:Tn(f.monthlyVis,f.llmModel)})),o=(o||[]).map(G=>({...G,weekly:(G.weekly||[]).map(Z=>Z??0),monthly:(G.monthly||[]).map(Z=>Z??0)})),y&&typeof y=="object"&&Object.values(y).forEach(G=>{!G||typeof G!="object"||Object.values(G).forEach(Z=>{!Z||typeof Z!="object"||Object.keys(Z).forEach(gt=>{const K=Z[gt];Array.isArray(K)&&(Z[gt]=K.map(rt=>rt??0))})})});const F={aircare:"Xiaomi"};o=o.map(G=>{const Z=F[(G.id||"").toLowerCase()];if(!Z||!G.allScores)return G;const gt=Object.entries(G.allScores).find(([st])=>st.toLowerCase()===Z.toLowerCase()&&st.toLowerCase()!=="lg");if(!gt)return G;const K=gt[1];if(!(K>0))return G;const rt=Math.round(G.score/K*100);return{...G,compName:gt[0],vsComp:K,compRatio:rt,status:rt>=100?"lead":rt>=80?"behind":"critical"}});const h=(f==null?void 0:f.visibilityOnly)||!1,k=(f==null?void 0:f.includePromptList)||!1,v=(f==null?void 0:f.includeReadability)===!0,m=(c==null?void 0:c.unlaunchedMap)||{},$=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,T=Pe[n]||Pe.ko;let j;if(u&&u.length)j=u.map(G=>String(G).toUpperCase().startsWith("W")?G.toUpperCase():G);else{const G=y?Math.max(...Object.values(y).flatMap(gt=>Object.values(gt).flatMap(K=>Object.values(K).map(rt=>(rt==null?void 0:rt.length)||0))),0):0,Z=t.weekStart||Math.max(1,G-11);j=Array.from({length:Math.max(12,G)},(gt,K)=>`W${Z+K}`)}const L=new Set;y&&Object.values(y).forEach(G=>Object.keys(G).forEach(Z=>{Z!=="Total"&&L.add(Z)})),p&&p.forEach(G=>{G.country&&G.country!=="TTL"&&L.add(G.country)});const N=[...L].sort(),O=n==="en"?"All":"전체",x=["MS","HS","ES"],E=o.map(G=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${G.bu}" value="${G.id}" checked onchange="onFilterChange()"><span>${G.kr}</span></label>`).join(""),A=x.map(G=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${G}" checked onchange="onBuChange('${G}')"><span>${G}</span></label>`).join(""),P=N.map(G=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${G}" checked onchange="onFilterChange()"><span>${Qe(G)}</span></label>`).join(""),B=Object.entries(Ze).map(([G,Z])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${G}" checked onchange="onRegionChange('${G}')"><span>${Z.labelEn}</span></label>`).join(""),w=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,C=f!=null&&f.weeklyLabelsFull&&f.weeklyLabelsFull.length===j.length?f.weeklyLabelsFull:j,_=j.map((G,Z)=>`<option value="${Z}"${Z===j.length-1?" selected":""}>${C[Z]||G}</option>`).join(""),I=(((_t=o[0])==null?void 0:_t.monthlyScores)||[]).map(G=>{const Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],gt=String(G.date).match(/(\d{1,2})월/),K=String(G.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return gt?Z[parseInt(gt[1])-1]:K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():G.date}),D=I.map((G,Z)=>`<option value="${Z}"${Z===I.length-1?" selected":""}>${G}</option>`).join(""),U=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Wt}`,ot=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${w}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${j[j.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${j.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${U}">${_}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${U}"${I.length>0?"":" disabled"}>${D||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${O}</span></label>
        ${A}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${O}</span></label>
        ${E}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${O}</span></label>
        ${B}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${O}</span></label>
        ${P}
      </div>
    </div>
  </div>`,ct=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Pr(t.noticeText)}</div></div>`:"",lt=[ct,t.showTotal!==!1?Bo(e,t,T,n,"weekly"):""].join(""),dt=[ct,t.showTotal!==!1?Bo(e,t,T,n,"monthly"):""].join(""),pt=[];if(y&&Object.keys(y).length){const G=Re;Object.entries(y).forEach(([Z,gt])=>{const K=o.find(st=>st.id===Z),rt=(K==null?void 0:K.kr)||G[Z]||Z;Object.entries(gt).forEach(([st,St])=>{if(st==="Total"||st==="TTL"||st==="TOTAL")return;const J=St.LG||St.lg||[],z=J.length>0?J[J.length-1]:0;if(z<=0)return;let at="",Ft=0;Object.entries(St).forEach(([Pt,At])=>{if(Pt==="LG"||Pt==="lg")return;const Et=Array.isArray(At)&&At.length?At[At.length-1]:0;Et>Ft&&(Ft=Et,at=Pt)});const bt=+(z-Ft).toFixed(1),Rt={};Object.entries(St).forEach(([Pt,At])=>{if(Array.isArray(At)&&At.length){const Et=At[At.length-1];Et!=null&&(Rt[Pt]=Et)}}),pt.push({product:rt,country:st,score:z,compName:at,compScore:Ft,gap:bt,allScores:Rt})})})}const wt=((Kt=f==null?void 0:f.weeklyLabelsFull)==null?void 0:Kt[f.weeklyLabelsFull.length-1])||j[j.length-1]||"",It=wt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${wt} ${n==="en"?"data":"기준"}</span>`:"",Bt=[lt,t.showProducts!==!1?$o(o,t,T,n,j,m,(f==null?void 0:f.monthlyVis)||[],y,It):"",`<div id="trend-container">${Ur(o,y,j,T,n,m,It)}</div>`,t.showCnty!==!1?Io(pt,t,T,n,m,It):""].join(""),jt=o.map(G=>{const Z=G.monthlyScore||G.score,gt=G.monthlyPrev||G.prev,K=G.vsComp||0,rt=K>0?Z/K*100:100;return{...G,score:Z,prev:gt,weeklyScore:Z,weeklyPrev:gt,monthlyScore:Z,monthlyPrev:gt,weekly:(G.monthlyScores||[]).map(st=>st.score),status:rt>=100?"lead":rt>=80?"behind":"critical"}}),$t=(((vt=o[0])==null?void 0:vt.monthlyScores)||[]).map(G=>{const Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],gt=String(G.date).match(/(\d{1,2})월/),K=String(G.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return gt?Z[parseInt(gt[1])-1]:K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():G.date}),Dt=(f==null?void 0:f.monthlyVis)||[],Vt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",kt=[dt,t.showProducts!==!1?$o(jt,t,T,n,$t.length?$t:["Feb","Mar"],m,Dt,{},Vt):"",`<div id="monthly-trend-container">${Hr(jt,Dt,T,n,m,Vt)}</div>`,t.showCnty!==!1?Io(p,t,T,n,m,Vt):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${$r({FONT:Wt,RED:Yt,COMP:le})}</style>
</head>
<body>
${h?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${ot.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Bt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${kt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Po(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,n,t,c==null?void 0:c.appendixPrompts,c)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Do(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${v?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${k?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${ot}
    <div id="bu-weekly-content" class="dash-container">${Bt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${kt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Po(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,n,t,c==null?void 0:c.appendixPrompts,c)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Do(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
</div>
${v?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${T.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${$}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Vr(c==null?void 0:c.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Wr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${T.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${_r({lang:n,weeklyAll:y,products:o,productsCnty:p,ulMap:m,monthlyVis:f==null?void 0:f.monthlyVis,total:e,meta:t,wLabels:j})}
<\/script>
</body>
</html>`}function qr(t){const e=t.filter(u=>u.status==="lead"),o=t.filter(u=>u.status==="behind"),i=t.filter(u=>u.status==="critical"),s=[...t].sort((u,y)=>y.score-u.score)[0],n=[...t].sort((u,y)=>u.score-y.score)[0],p=(t.reduce((u,y)=>u+y.score,0)/t.length).toFixed(1),l=[];return l.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${p}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),s&&l.push(`가장 높은 카테고리는 ${s.kr} ${s.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(s.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?l.push(`취약 카테고리(${i.map(u=>u.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&l.push(`추격 카테고리(${o.map(u=>u.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),l.join(" ")}function Jr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Yr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const tt=xt,Xr={citation:[tt.meta,tt.citTouchPoints,tt.citDomain,tt.citPageType],"weekly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],"monthly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],dashboard:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citDomain,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.weeklyPR,tt.weeklyBrandPrompt,tt.appendix,tt.unlaunched,tt.prTopicList],newsletter:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.unlaunched]};function Zr(t){return Xr[t]||[]}const Mo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Qr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ti({url:t,downloadName:e="sheet",mode:o}){const[i,s]=H.useState(!1),[n,p]=H.useState(""),l=o?Zr(o):[],u=l.length?"zip":"xlsx",y=l.length?`📥 시트 CSV ZIP 다운로드 (탭 ${l.length}개)`:"📥 시트 xlsx 다운로드";async function g(){const d=Qr(t);if(!d){p("ERROR: 동기화 URL 비어있거나 잘못됨");return}s(!0),p("");try{const f=new URLSearchParams({id:d,name:e});l.length&&f.set("tabs",l.join(","));const c=await fetch(`/api/sheet-download?${f.toString()}`,{credentials:"include"});if(!c.ok){const k=await c.text().catch(()=>"");let v=k;try{const m=JSON.parse(k);v=m.error||m.detail||k}catch{}throw new Error(`(${c.status}) ${v}`)}const F=await c.blob(),h=document.createElement("a");h.href=URL.createObjectURL(F),h.download=`${e}.${u}`,document.body.appendChild(h),h.click(),h.remove(),setTimeout(()=>URL.revokeObjectURL(h.href),1e3),p("다운로드 완료")}catch(f){p("ERROR: "+(f.message||String(f)))}finally{s(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:g,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Mo,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":y}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Mo,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function ei({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:s,metaEn:n,setMetaEn:p,total:l,setTotal:u,products:y,setProducts:g,citations:d,setCitations:f,dotcom:c,setDotcom:F,productsCnty:h,setProductsCnty:k,citationsCnty:v,setCitationsCnty:m,resolved:S,previewLang:$,setPreviewLang:T,snapshots:j,setSnapshots:L,setWeeklyLabels:N,setWeeklyAll:O,weeklyLabels:x,weeklyAll:E,citationsByCnty:A,dotcomByCnty:P,generateHTML:B,publishEndpoint:w,setMonthlyVis:C,onSyncExtra:_,categoryStats:I,extra:D,monthlyVis:U,progressMonth:ot,setProgressMonth:ct,progressDataMonth:lt}){const dt=H.useRef({products:y,productsCnty:h,citations:d,citationsCnty:v,total:l,dotcom:c,extra:D});dt.current={products:y,productsCnty:h,citations:d,citationsCnty:v,total:l,dotcom:c,extra:D};function pt(){return dt.current}const[wt,It]=H.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Bt,jt]=H.useState(!1),[$t,Dt]=H.useState(null),[Vt,kt]=H.useState(""),[_t,Kt]=H.useState(""),[vt,G]=H.useState(!1),[Z,gt]=H.useState(""),[K,rt]=H.useState(!1),[st,St]=H.useState(!1),[J,z]=H.useState(!1),[at,Ft]=H.useState(!1),[bt,Rt]=H.useState(""),[Pt,At]=H.useState(!1),[Et,ne]=H.useState(!0),[re,ce]=H.useState(""),[te,ue]=H.useState(null),[de,ze]=H.useState([]),Mt=t==="newsletter",[qt,Ge]=H.useState(()=>{const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`});function Ue(){Mt&&fetch("/api/publish").then(a=>a.ok?a.json():null).then(a=>{a&&Array.isArray(a.months)&&ze(a.months)}).catch(()=>{})}H.useEffect(()=>{if(Mt){Ue();return}fetch(w||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(b=>b.ok?b.json():null).then(ue).catch(()=>{})},[t,w,Mt]);const rn=(()=>{const a=new Set,b=new Date;for(let et=0;et<24;et++){const mt=new Date(b.getFullYear(),b.getMonth()-et,1);a.add(`${mt.getFullYear()}-${String(mt.getMonth()+1).padStart(2,"0")}`)}for(const et of de)a.add(et.month);return qt&&a.add(qt),[...a].sort((et,mt)=>mt.localeCompare(et))})();function Ae(a){const[b,et]=a.split("-");return`${b}년 ${parseInt(et,10)}월`}const[an,io]=H.useState(null);H.useEffect(()=>{let a=!0;const b=()=>bo(t).then(mt=>{a&&io(mt)});b();const et=setInterval(b,6e4);return()=>{a=!1,clearInterval(et)}},[t]);function sn(){bo(t).then(io)}async function ln(){if(!at){Ft(!0),Rt("");try{const a=pt(),b=$e(a.products,a.productsCnty,a.citations,a.citationsCnty,"ko"),et=$e(a.products,a.productsCnty,a.citations,a.citationsCnty,"en");let mt,Gt,W;if(t==="dashboard"){const Q=U||[],ut=a.extra||D||{};mt=B(i,a.total,b.products,b.citations,a.dotcom,"ko",b.productsCnty,b.citationsCnty,x,E,A,P,Q,ut),Gt=B(n,a.total,et.products,et.citations,a.dotcom,"en",et.productsCnty,et.citationsCnty,x,E,A,P,Q,ut),W=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else mt=B(i,a.total,b.products,b.citations,c,"ko",b.productsCnty,b.citationsCnty,{weeklyLabels:x,categoryStats:I,unlaunchedMap:(D==null?void 0:D.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Gt=B(n,a.total,et.products,et.citations,c,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:x,categoryStats:I,unlaunchedMap:(D==null?void 0:D.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),W=`${i.period||""} ${i.title||"Newsletter"}`.trim();const fe=w||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),M={title:W,htmlKo:mt,htmlEn:Gt};Mt&&(M.month=qt);const Nt=await(await fetch(fe,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(M)})).json();if(!Nt.ok)throw new Error(Nt.error||"게시 실패");if(ue({...Nt,published:!0}),Mt&&Ue(),t==="dashboard")try{const Q=await Ie(t)||{},ut=a.extra||D||{};xo(t,{...Q,meta:i,total:a.total,weeklyPR:ut.weeklyPR||Q.weeklyPR,weeklyPRLabels:ut.weeklyPRLabels||Q.weeklyPRLabels,weeklyBrandPrompt:ut.weeklyBrandPrompt||Q.weeklyBrandPrompt,weeklyBrandPromptLabels:ut.weeklyBrandPromptLabels||Q.weeklyBrandPromptLabels,appendixPrompts:ut.appendixPrompts||Q.appendixPrompts})}catch{}const Ut=`${window.location.origin}${Nt.urls.ko}`,nt=`${window.location.origin}${Nt.urls.en}`;try{await navigator.clipboard.writeText(Ut+`
`+nt)}catch{}Rt(`KO: ${Ut}
EN: ${nt}`)}catch(a){Rt("ERROR:"+a.message)}finally{Ft(!1),setTimeout(()=>Rt(""),2e4)}}}async function cn(){if(!Pt){At(!0),ce("");try{const a=await Qn(Kr,$e,{includeProgressTracker:Et});ce(`통합 게시 완료!
KO: ${window.location.origin}${a.urls.ko}
EN: ${window.location.origin}${a.urls.en}`)}catch(a){ce("ERROR: "+a.message)}finally{At(!1),setTimeout(()=>ce(""),15e3)}}}async function ao(a){try{const b=w||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),et=Mt?`${b}?month=${encodeURIComponent(a||qt)}`:b;(await(await fetch(et,{method:"DELETE"})).json()).ok&&(Mt?Ue():ue(null))}catch{}}async function dn(){if($!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}St(!0)}async function so(a){St(!1),z(!0);const b=(a==null?void 0:a.products)??y,et=(a==null?void 0:a.productsCnty)??h,mt=(a==null?void 0:a.citations)??d,Gt=(a==null?void 0:a.citationsCnty)??v;try{const W=i,fe=[W.title||"",W.dateLine||"",W.noticeText||"",W.totalInsight||"",W.reportType||"",W.productInsight||"",W.productHowToRead||"",W.citationInsight||"",W.citationHowToRead||"",W.dotcomInsight||"",W.dotcomHowToRead||"",W.todoText||"",W.todoNotice||"",W.kpiLogicText||"",W.cntyInsight||"",W.cntyHowToRead||"",W.citDomainInsight||"",W.citDomainHowToRead||"",W.citCntyInsight||"",W.citCntyHowToRead||"",W.citPrdInsight||"",W.citPrdHowToRead||"",W.period||"",W.team||"",W.reportNo||"",W.monthlyReportBody||""],M=b.map(X=>X.kr||""),ie=b.map(X=>X.compName||""),Nt=mt.map(X=>X.category||""),Ut=[...new Set(et.map(X=>X.country||""))],nt=[...new Set(et.map(X=>X.product||""))],Q=[...new Set(et.map(X=>X.compName||""))],ut=[...new Set(Gt.map(X=>X.cnty||"").filter(X=>X&&X!=="TTL"))],ht=[...fe,...M,...ie,...Nt,...Ut,...nt,...Q,...ut].map(X=>X||" "),Y=await er(ht,{from:"ko",to:"en"});let V=0;const ee={...i,title:Y[V++]||W.title,dateLine:Y[V++]||W.dateLine,noticeText:Y[V++]||W.noticeText,totalInsight:Y[V++]||W.totalInsight,reportType:Y[V++]||W.reportType,productInsight:Y[V++]||W.productInsight,productHowToRead:Y[V++]||W.productHowToRead,citationInsight:Y[V++]||W.citationInsight,citationHowToRead:Y[V++]||W.citationHowToRead,dotcomInsight:Y[V++]||W.dotcomInsight,dotcomHowToRead:Y[V++]||W.dotcomHowToRead,todoText:Y[V++]||W.todoText,todoNotice:Y[V++]||W.todoNotice,kpiLogicText:Y[V++]||W.kpiLogicText,cntyInsight:Y[V++]||W.cntyInsight,cntyHowToRead:Y[V++]||W.cntyHowToRead,citDomainInsight:Y[V++]||W.citDomainInsight,citDomainHowToRead:Y[V++]||W.citDomainHowToRead,citCntyInsight:Y[V++]||W.citCntyInsight,citCntyHowToRead:Y[V++]||W.citCntyHowToRead,citPrdInsight:Y[V++]||W.citPrdInsight,citPrdHowToRead:Y[V++]||W.citPrdHowToRead,period:(V++,W.period),team:Y[V++]||W.team,reportNo:(V++,W.reportNo),monthlyReportBody:Y[V++]||W.monthlyReportBody},Ot=X=>X&&X.replace(/\b\w/g,it=>it.toUpperCase()),Xt=X=>(X||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),ae={};b.forEach((X,it)=>{ae[X.id]={en:Ot(Y[V+it]||X.kr),compNameEn:Xt(Y[V+M.length+it]||X.compName)}}),V+=M.length+ie.length;const Ht={};mt.forEach((X,it)=>{Ht[`${X.rank}_${X.source}`]=Ot(Y[V+it]||X.category)}),V+=Nt.length;const he={};Ut.forEach((X,it)=>{he[X]=/^[A-Z]{2,3}$/.test(X)?X:Y[V+it]||X}),V+=Ut.length;const Ee={};nt.forEach((X,it)=>{Ee[X]=Y[V+it]||X}),V+=nt.length;const be={};Q.forEach((X,it)=>{be[X]=Y[V+it]||X}),V+=Q.length;const xe={};ut.forEach((X,it)=>{xe[X]=/^[A-Z]{2,3}$/.test(X)?X:Y[V+it]||X}),p(ee),g(X=>X.map(it=>{var lo,co;return{...it,en:((lo=ae[it.id])==null?void 0:lo.en)||it.en||it.kr,compNameEn:((co=ae[it.id])==null?void 0:co.compNameEn)||it.compNameEn||it.compName}})),f(X=>X.map(it=>({...it,categoryEn:Ht[`${it.rank}_${it.source}`]||it.categoryEn||it.category}))),k(X=>X.map(it=>({...it,countryEn:Ot(he[it.country]||it.country),productEn:Ot(Ee[it.product]||it.product),compNameEn:Xt(be[it.compName]||it.compName)}))),m(X=>X.map(it=>({...it,cntyEn:it.cnty==="TTL"?"TTL":Ot(xe[it.cnty]||it.cnty)}))),z(!1)}catch(W){alert("번역 오류: "+W.message),z(!1)}}async function pn(){const a=B(e,l,S.products,S.citations,c,$,S.productsCnty,S.citationsCnty);try{await navigator.clipboard.writeText(a)}catch{const b=document.createElement("textarea");b.value=a,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}G(!0),setTimeout(()=>G(!1),2500)}async function un(){await cr(e,l,y,d,c)}async function fn(){if(K!=="sending"){rt("sending");try{const a=pt(),b=B(e,a.total,a.products,a.citations,a.dotcom,$,a.productsCnty,a.citationsCnty,{weeklyLabels:x,categoryStats:I,unlaunchedMap:(D==null?void 0:D.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,Gt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:Z.trim(),subject:et,html:b})})).json();if(!Gt.ok)throw new Error(Gt.error||"발송 실패");rt("ok"),setTimeout(()=>rt(!1),4e3)}catch(a){rt("error"),kt(a.message),setTimeout(()=>{rt(!1),kt("")},5e3)}}}async function hn(){var et,mt,Gt,W,fe;if(Bt)return;const a=Ar(wt.trim());if(!a){Dt("error"),kt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Dt(null),3e3);return}jt(!0),Dt(null),kt(""),Kt("");const b=[];try{const M=await Tr(a,nt=>kt(nt));if(b.push(`[Sync] parsed keys: ${Object.keys(M).join(", ")||"(없음)"}`),M.meta&&b.push(`[Sync] meta keys: ${Object.keys(M.meta).join(", ")}`),M.productsPartial&&b.push(`[Sync] products: ${M.productsPartial.length}건`),b.push(`[Sync] citations: ${((et=M.citations)==null?void 0:et.length)??0}건`),b.push(`[Sync] citationsCnty: ${((mt=M.citationsCnty)==null?void 0:mt.length)??0}건`),b.push(`[Sync] dotcom: ${M.dotcom?"OK":"(없음)"}`),b.push(`[Sync] productsCnty: ${((Gt=M.productsCnty)==null?void 0:Gt.length)??0}건`),M.meta){const nt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];s(Q=>{const ut={...Q};for(const[ht,Y]of Object.entries(M.meta))nt.includes(ht)&&Q[ht]||(ut[ht]=Y);return ut}),p(Q=>({...Q,period:M.meta.period,dateLine:M.meta.dateLine,reportNo:M.meta.reportNo}))}if(M.citations&&(f(M.citations),dt.current={...dt.current,citations:M.citations}),M.dotcom&&(F(nt=>({...nt,...M.dotcom})),dt.current={...dt.current,dotcom:{...dt.current.dotcom,...M.dotcom}}),M.productsCnty&&(k(M.productsCnty),dt.current={...dt.current,productsCnty:M.productsCnty}),M.citationsCnty&&(m(M.citationsCnty),dt.current={...dt.current,citationsCnty:M.citationsCnty}),M.monthlyVis&&C&&C(M.monthlyVis),_){const nt={weeklyPR:M.weeklyPR||null,weeklyPRLabels:M.weeklyPRLabels||null,weeklyBrandPrompt:M.weeklyBrandPrompt||null,weeklyBrandPromptLabels:M.weeklyBrandPromptLabels||null,appendixPrompts:M.appendixPrompts||null,unlaunchedMap:M.unlaunchedMap||null,weeklyLabelsFull:M.weeklyLabelsFull||null,prTopicList:M.prTopicList||null};_(nt),dt.current={...dt.current,extra:{...dt.current.extra,...nt}}}const ie=M.weeklyLabels||((W=M.meta)==null?void 0:W.weeklyLabels);console.log("[SYNC] weeklyLabels:",ie,"weeklyLabelsFull:",M.weeklyLabelsFull),ie&&ie.length&&N(ie),M.weeklyAll&&O(nt=>({...nt,...M.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(M));const Nt=M.weeklyMap?Object.keys(M.weeklyMap):[],Ut=((fe=M.productsPartial)==null?void 0:fe.map(nt=>nt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Nt.length?Nt:"NONE"),console.log("[SYNC] productsPartial IDs:",Ut.length?Ut:"NONE"),Nt.length&&Ut.length){const nt=Ut.filter(ut=>!Nt.includes(ut)),Q=Nt.filter(ut=>!Ut.includes(ut));nt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",nt),Q.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",Q),!nt.length&&!Q.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(M.productsPartial){const nt=M.productsPartial.map(Q=>{var be;const ut=((be=M.weeklyMap)==null?void 0:be[Q.id])||[],ht=ut.filter(xe=>xe!=null&&xe>0),Y=Q.score,V=Q.prev||0,ee=Q.vsComp>0?Math.round(Y/Q.vsComp*100):100,Ot=ht.length>0?ht[ht.length-1]:Y,Xt=ht.length>=5?ht[ht.length-5]:ht[0]||0,ae=Y,Ht=V,he=ee,Ee=V>0&&V!==Y?[V,Y]:[];return{...Q,score:ae,prev:Ht,weekly:ut,monthly:Ee,weeklyScore:Ot,weeklyPrev:Xt,monthlyScore:Y,monthlyPrev:V,compRatio:he,status:he>=100?"lead":he>=80?"behind":"critical"}});g(nt),dt.current={...dt.current,products:nt}}else M.weeklyMap&&g(nt=>nt.map(Q=>{var ht;const ut=(ht=M.weeklyMap)==null?void 0:ht[Q.id];return ut?{...Q,weekly:ut}:Q}));if(M.total){const nt={...dt.current.total,...M.total,...M.buTotals?{buTotals:M.buTotals}:{},...M.buTotalsPrev?{buTotalsPrev:M.buTotalsPrev}:{},...M.countryTotals?{countryTotals:M.countryTotals}:{},...M.countryTotalsPrev?{countryTotalsPrev:M.countryTotalsPrev}:{}};u(Q=>({...Q,...nt})),dt.current={...dt.current,total:nt}}{let nt=function(V){if(!V)return 0;const ee=String(V).trim(),Ot=ee.match(/(\d{1,2})월/);if(Ot){const Ht=parseInt(Ot[1]);return Ht>=1&&Ht<=12?Ht:0}const Xt=ee.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Xt)return ht[Xt[1].toLowerCase()]||0;const ae=ee.match(/\d{4}[-\/](\d{1,2})/);if(ae){const Ht=parseInt(ae[1]);return Ht>=1&&Ht<=12?Ht:0}return 0};const Q=new Date().getFullYear(),ut=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ht={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let Y=0;if(M.derivedPeriod){const V=nt(M.derivedPeriod);V>Y&&(Y=V)}if(M.citDerivedPeriod){const V=nt(M.citDerivedPeriod);V>Y&&(Y=V)}Y>0&&Y<=12&&(s(V=>({...V,period:`${Q}년 ${Y}월`})),p(V=>({...V,period:`${ut[Y]} ${Q}`})))}if(!M.total&&M.productsPartial&&M.productsPartial.length>0){const nt=M.productsPartial,Q=+(nt.reduce((ht,Y)=>ht+Y.score,0)/nt.length).toFixed(1),ut=+(nt.reduce((ht,Y)=>ht+(Y.vsComp||0),0)/nt.length).toFixed(1);u(ht=>({...ht,score:Q,vsComp:ut,rank:Q>=ut?1:2}))}if(setTimeout(()=>{xo(t,{meta:M.meta||null,total:M.total?{...M.total,...M.buTotals?{buTotals:M.buTotals}:{},...M.buTotalsPrev?{buTotalsPrev:M.buTotalsPrev}:{},...M.countryTotals?{countryTotals:M.countryTotals}:{},...M.countryTotalsPrev?{countryTotalsPrev:M.countryTotalsPrev}:{}}:null,productsPartial:M.productsPartial||null,weeklyMap:M.weeklyMap||null,weeklyLabels:M.weeklyLabels||null,weeklyLabelsFull:M.weeklyLabelsFull||null,weeklyAll:M.weeklyAll||null,citations:M.citations||null,dotcom:M.dotcom||null,productsCnty:M.productsCnty||null,citationsCnty:M.citationsCnty||null,citationsByCnty:M.citationsByCnty||null,dotcomByCnty:M.dotcomByCnty||null,appendixPrompts:M.appendixPrompts||null,unlaunchedMap:M.unlaunchedMap||null,prTopicList:M.prTopicList||null,monthlyVis:M.monthlyVis||null,weeklyPR:M.weeklyPR||null,weeklyPRLabels:M.weeklyPRLabels||null,monthlyPR:M.monthlyPR||null,monthlyPRLabels:M.monthlyPRLabels||null,weeklyBrandPrompt:M.weeklyBrandPrompt||null,weeklyBrandPromptLabels:M.weeklyBrandPromptLabels||null,monthlyBrandPrompt:M.monthlyBrandPrompt||null,monthlyBrandPromptLabels:M.monthlyBrandPromptLabels||null,dotcomTrend:M.dotcomTrend||null,dotcomTrendMonths:M.dotcomTrendMonths||null}),setTimeout(sn,250)},100),Kt(b.join(`
`)),Dt("ok"),kt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const nt={};M.productsPartial&&(nt.products=M.productsPartial.map(Q=>{var Ot;const ut=((Ot=M.weeklyMap)==null?void 0:Ot[Q.id])||[],ht=Q.vsComp>0?Q.score/Q.vsComp*100:100,Y=ut.find(Xt=>Xt!=null&&Xt>0),V=Q.prev!=null&&Q.prev>0?Q.prev:Y||0,ee=V>0?[V,Q.score]:[];return{...Q,prev:V,weekly:ut,monthly:ee,compRatio:Math.round(ht),status:ht>=100?"lead":ht>=80?"behind":"critical"}})),M.productsCnty&&(nt.productsCnty=M.productsCnty),M.citations&&(nt.citations=M.citations),M.citationsCnty&&(nt.citationsCnty=M.citationsCnty);try{await so(nt)}catch{}kt("동기화 + 번역 완료!")}}catch(M){b.push(`[ERROR] ${M.message}`),Dt("error"),kt(M.message),Kt(b.join(`
`))}finally{jt(!1),setTimeout(()=>{Dt(null),kt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:yt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:R},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:R},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Br,{...an||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:R},children:"Google Sheets URL"}),r.jsx("input",{value:wt,onChange:a=>It(a.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ft,fontSize:11,padding:"7px 9px",marginBottom:8,color:wt?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:hn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Bt?"wait":"pointer",background:Bt?"#1E293B":yt,fontSize:12,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(po,{size:13,style:{animation:Bt?"spin 1s linear infinite":"none"}}),Bt?"동기화 중...":"구글 시트 동기화"]}),($t||Bt&&Vt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.6,background:$t==="ok"?"#14532D":$t==="error"?"#450A0A":"#1E293B",color:$t==="ok"?"#86EFAC":$t==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${$t==="ok"?"#22C55E33":$t==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Vt}),_t&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[_t,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(_t).then(()=>{const a=document.getElementById("vis-debug-copy-btn");a&&(a.textContent="복사됨!",setTimeout(()=>{a.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ti,{url:wt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:dn,disabled:J,style:{width:"100%",padding:"9px 0",background:J?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:R,cursor:J?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:J?.6:1},children:[r.jsx(gn,{size:13})," ",J?"번역 중...":"AI 번역 (EN)"]}),st&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:R},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>St(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:R,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:so,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:un,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(yn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Mt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"발행 월"}),r.jsx("select",{value:qt,onChange:a=>Ge(a.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:rn.map(a=>r.jsxs("option",{value:a,children:[a," · ",Ae(a),de.find(b=>b.month===a)?" ✓ 게시됨":""]},a))})]}),Mt&&ct&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",lt||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:ot||"",onChange:a=>ct(a.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",lt||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(a=>r.jsx("option",{value:a,children:a},a))]}),ot&&r.jsx("button",{onClick:()=>ct(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:ln,disabled:at,style:{width:"100%",padding:"9px 0",background:at?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:at?"#94A3B8":"#FFFFFF",fontFamily:R,cursor:at?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(uo,{size:12}),at?"게시 중...":Mt?`${Ae(qt)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:R,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Et,onChange:a=>ne(a.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:cn,disabled:Pt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Pt?"#1E293B":"#166534",color:Pt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,cursor:Pt?"wait":"pointer",marginBottom:6},children:[r.jsx(uo,{size:12}),Pt?"통합 게시 중...":"통합 대시보드 게시"]}),re&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:re.startsWith("ERROR")?"#450A0A":"#14532D",color:re.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:re.startsWith("ERROR:")?re.slice(6):re})]})]}),r.jsxs("button",{onClick:async()=>{const a={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(a).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const mt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:a})})).json();mt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(mt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(mn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&bt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:bt.startsWith("ERROR:")?"#450A0A":"#14532D",color:bt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${bt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:bt.startsWith("ERROR:")?bt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(He,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[bt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Mt&&(te==null?void 0:te.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>ao(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:te.urls.ko},{label:"EN",url:te.urls.en}].map(({label:a,url:b})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[a,": ",b]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${b}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},a)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:te.ts?new Date(te.ts).toLocaleString("ko-KR"):""})]}),Mt&&de.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",de.length,")"]})}),de.map(a=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R},children:Ae(a.month)}),r.jsx("button",{onClick:()=>{confirm(`${Ae(a.month)} 게시본을 삭제할까요?`)&&ao(a.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:a.urls.ko},{label:"EN",url:a.urls.en}].map(({label:b,url:et})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:et,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b,": ",et]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${et}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(He,{size:10})})]},b)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:a.ts?new Date(a.ts).toLocaleString("ko-KR"):""})]},a.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:a=>o(b=>({...b,reportType:a.target.value})),style:{...ft,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:a=>o(b=>({...b,reportNo:a.target.value})),style:{...ft}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:a=>o(b=>({...b,period:a.target.value})),style:{...ft}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:a=>o(b=>({...b,title:a.target.value})),rows:4,style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:a=>o(b=>({...b,team:a.target.value})),style:{...ft,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:a=>o(b=>({...b,dateLine:a.target.value})),style:{...ft,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Notice"}),r.jsx("button",{onClick:()=>o(a=>({...a,showNotice:!a.showNotice})),style:{background:e.showNotice?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:a=>o(b=>({...b,noticeText:a.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ft,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(a=>({...a,showKpiLogic:!a.showKpiLogic})),style:{background:e.showKpiLogic?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:a=>o(b=>({...b,kpiLogicText:a.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ft,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:R,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:a=>o(b=>({...b,titleFontSize:Number(a.target.value)})),style:{width:"100%",accentColor:yt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:a=>o(b=>({...b,titleColor:a.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:R},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([a,b])=>r.jsx("button",{onClick:()=>o(et=>({...et,titleColor:a})),title:b,style:{width:16,height:16,borderRadius:"50%",background:a,border:e.titleColor===a?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},a))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:a,label:b})=>r.jsx("button",{onClick:()=>o(et=>({...et,[a]:!et[a]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[a]?yt:"#1E293B",color:e[a]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:b},a))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?yt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(a=>({...a,trendMode:(a.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?yt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?yt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,monthlyReportBody:"⏳ AI 생성 중..."}));const a=await Lt("monthlyReportBody",{products:pt().products,productsCnty:pt().productsCnty,total:pt().total,citations:pt().citations,todoText:e.todoText||"",period:e.period||""},$);o(b=>({...b,monthlyReportBody:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,monthlyReportBody:`[AI 실패: ${a.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:a=>o(b=>({...b,monthlyReportBody:a.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:R},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,totalInsight:"⏳ AI 생성 중..."}));const a=await Lt("totalInsight",{products:pt().products,productsCnty:pt().productsCnty,total:pt().total,todoText:e.todoText||""},$);o(b=>({...b,totalInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,totalInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:a=>o(b=>({...b,totalInsight:a.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productInsight:"⏳ AI 생성 중..."}));const a=await Lt("product",{products:pt().products,total:pt().total},$);o(b=>({...b,productInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,productInsight:`[AI 실패: ${a.message}]

`+qr(pt().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showProductInsight:!a.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?yt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:a=>o(b=>({...b,productInsight:a.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"제품별 GEO Visibility"},$);o(b=>({...b,productHowToRead:a}))}catch{o(a=>({...a,productHowToRead:Jr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showProductHowToRead:!a.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?yt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:a=>o(b=>({...b,productHowToRead:a.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyInsight:"⏳ AI 생성 중..."}));const a=await Lt("cnty",{productsCnty:pt().productsCnty},$);o(b=>({...b,cntyInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,cntyInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCntyInsight:!a.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?yt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:a=>o(b=>({...b,cntyInsight:a.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"국가별 GEO Visibility"},$);o(b=>({...b,cntyHowToRead:a}))}catch{o(a=>({...a,cntyHowToRead:Yr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCntyHowToRead:!a.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?yt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:a=>o(b=>({...b,cntyHowToRead:a.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:a=>o(b=>({...b,prNotice:a.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:a=>o(b=>({...b,prTopicDescsRaw:a.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:a=>o(b=>({...b,prTopicPromptsRaw:a.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:a=>o(b=>({...b,bpNotice:a.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationInsight:"⏳ AI 생성 중..."}));const a=await Lt("citation",{citations:pt().citations},$);o(b=>({...b,citationInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,citationInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitationInsight:!a.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?yt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:a=>o(b=>({...b,citationInsight:a.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"Citation 도메인별 현황"},$);o(b=>({...b,citationHowToRead:a}))}catch{o(a=>({...a,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitationHowToRead:!a.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?yt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:a=>o(b=>({...b,citationHowToRead:a.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainInsight:"⏳ AI 생성 중..."}));const a=await Lt("citDomain",{citationsCnty:pt().citationsCnty},$);o(b=>({...b,citDomainInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,citDomainInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitDomainInsight:!a.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?yt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:a=>o(b=>({...b,citDomainInsight:a.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"도메인별 Citation 현황"},$);o(b=>({...b,citDomainHowToRead:a}))}catch{o(a=>({...a,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitDomainHowToRead:!a.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?yt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:a=>o(b=>({...b,citDomainHowToRead:a.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyInsight:"⏳ AI 생성 중..."}));const a=await Lt("citCnty",{citationsCnty:pt().citationsCnty},$);o(b=>({...b,citCntyInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,citCntyInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitCntyInsight:!a.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?yt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:a=>o(b=>({...b,citCntyInsight:a.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"국가별 Citation 도메인"},$);o(b=>({...b,citCntyHowToRead:a}))}catch{o(a=>({...a,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitCntyHowToRead:!a.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?yt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:a=>o(b=>({...b,citCntyHowToRead:a.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdInsight:"⏳ AI 생성 중..."}));const a=await Lt("citPrd",{citationsCnty:pt().citationsCnty},$);o(b=>({...b,citPrdInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,citPrdInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitPrdInsight:!a.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?yt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:a=>o(b=>({...b,citPrdInsight:a.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"제품별 Citation"},$);o(b=>({...b,citPrdHowToRead:a}))}catch{o(a=>({...a,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitPrdHowToRead:!a.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?yt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:a=>o(b=>({...b,citPrdHowToRead:a.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),h.length>0&&(()=>{const a=[...new Set(S.productsCnty.map(b=>b.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:a.map(b=>{const et=(e.cntyProductFilter||{})[b]!==!1;return r.jsx("button",{onClick:()=>o(mt=>({...mt,cntyProductFilter:{...mt.cntyProductFilter||{},[b]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:b},b)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomInsight:"⏳ AI 생성 중..."}));const a=await Lt("dotcom",{dotcom:pt().dotcom},$);o(b=>({...b,dotcomInsight:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,dotcomInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showDotcomInsight:!a.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?yt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:a=>o(b=>({...b,dotcomInsight:a.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomHowToRead:"⏳ AI 생성 중..."}));const a=await Lt("howToRead",{section:"닷컴 Citation"},$);o(b=>({...b,dotcomHowToRead:a}))}catch{o(b=>({...b,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showDotcomHowToRead:!a.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?yt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:a=>o(b=>({...b,dotcomHowToRead:a.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:a=>o(b=>({...b,todoNotice:a.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,todoText:"⏳ AI 생성 중..."}));const a=await Lt("todo",{products:pt().products},$);o(b=>({...b,todoText:a}))}catch(a){console.error("[AI]",a),o(b=>({...b,todoText:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showTodo:!a.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?yt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:a=>o(b=>({...b,todoText:a.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:pn,style:{width:"100%",padding:"9px 0",background:vt?"#14532D":"transparent",border:`1px solid ${vt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:vt?"#86EFAC":"#64748B",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:vt?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(_o,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:Z,onChange:a=>gt(a.target.value),placeholder:"recipient@example.com",style:{...ft,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:fn,disabled:K==="sending"||!Z.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:K==="sending"||!Z.trim()?"not-allowed":"pointer",background:K==="ok"?"#14532D":K==="error"?"#7F1D1D":K==="sending"?"#1E3A5F":Z.trim()?"#1D4ED8":"#1E293B",color:K==="ok"?"#86EFAC":K==="error"?"#FCA5A5":Z.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:K==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(po,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):K==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 발송 완료!"]}):K==="error"?r.jsxs(r.Fragment,{children:[r.jsx(fo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(fo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:R,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function oi({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:s,style:n}){const p=Oo.useMemo(()=>En(o,i,s),[o,i,s]);return!p.length||p.length===1&&p[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:l=>e(l.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:p.map(l=>r.jsx("option",{value:l,children:l},l))})]})}const ge="weekly-report",No="geo-weekly-report-cache";function ni({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:p=[],lang:l="ko",weeklyLabels:u,weeklyAll:y,categoryStats:g,cntyKeys:d=null,llmModel:f,monthlyVis:c}){const F=H.useRef(null),h=H.useMemo(()=>to(t,e,o,i,s,l,n,p,{weeklyLabels:u,weeklyAll:y,categoryStats:g,cntyKeys:d,llmModel:f,monthlyVis:c}),[t,e,o,i,s,l,n,p,u,y,g,d,f,c]);return Oo.useEffect(()=>{const k=F.current;if(!k)return;const v=k.contentDocument||k.contentWindow.document;v.open(),v.write(h),v.close();const m=()=>{try{v.body.style.overflow="hidden",v.documentElement.style.overflow="hidden";const S=v.documentElement.scrollHeight;S&&(k.style.height=S+20+"px")}catch{}};setTimeout(m,150),setTimeout(m,400),setTimeout(m,1e3),setTimeout(m,2e3)},[h]),r.jsx("iframe",{ref:F,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function ri({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:p=[],lang:l="ko",weeklyLabels:u,weeklyAll:y,categoryStats:g,cntyKeys:d=null,llmModel:f,monthlyVis:c}){const[F,h]=H.useState(!1),k=H.useMemo(()=>to(t,e,o,i,s,l,n,p,{weeklyLabels:u,weeklyAll:y,categoryStats:g,cntyKeys:d,llmModel:f,monthlyVis:c}),[t,e,o,i,s,l,n,p,u,y,g,d,f,c]);async function v(){try{await navigator.clipboard.writeText(k)}catch{const m=document.createElement("textarea");m.value=k,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}h(!0),setTimeout(()=>h(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsx("div",{children:r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R},children:"주간 리포트 HTML"})}),r.jsx("button",{onClick:v,style:{padding:"6px 14px",borderRadius:7,border:"none",background:F?"#14532D":yt,color:F?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:F?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(_o,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:k})})]})}function ii(){const t=H.useRef(Kn(No)).current,[e,o]=H.useState({...Te,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,s]=H.useState({...Te,...(t==null?void 0:t.metaEn)??{}}),[n,p]=H.useState((t==null?void 0:t.total)??zn),[l,u]=H.useState((t==null?void 0:t.products)??Gn),[y,g]=H.useState((t==null?void 0:t.citations)??Vn),[d,f]=H.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Un),[c,F]=H.useState((t==null?void 0:t.productsCnty)??Hn),[h,k]=H.useState((t==null?void 0:t.citationsCnty)??Wn),[v,m]=H.useState((t==null?void 0:t.weeklyLabels)??null),[S,$]=H.useState((t==null?void 0:t.weeklyAll)??{}),[T,j]=H.useState(null),[L,N]=H.useState("preview"),[O,x]=H.useState("ko"),[E,A]=H.useState("Total"),[P,B]=H.useState((t==null?void 0:t.monthlyVis)??[]),[w,C]=H.useState([]),[_,I]=H.useState(""),[D,U]=H.useState(!1),[ot,ct]=H.useState(""),[lt,dt]=H.useState(null),[pt,wt]=H.useState(!0),[It,Bt]=H.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),jt=H.useMemo(()=>{const J=new Set;return(c||[]).forEach(z=>{z&&z.country&&!/^(ttl|total)$/i.test(z.country)&&J.add(String(z.country).toUpperCase())}),Array.from(J).sort()},[c]),$t=It.length>0?It:null,Dt=H.useCallback(J=>{Bt(z=>z.includes(J)?z.filter(at=>at!==J):[...z,J])},[]),Vt=H.useCallback(()=>Bt(jt),[jt]),kt=H.useCallback(()=>Bt([]),[]);H.useEffect(()=>{let J=!1;const z=ir(e.period)||`${new Date().getMonth()+1}월`,at=ar(z);async function Ft(){var bt,Rt,Pt;try{const At=await fetch("/api/tracker-snapshot-v2"),Et=At.ok?await At.json():null;if(Et!=null&&Et.ok&&((Pt=(Rt=(bt=Et.data)==null?void 0:bt.quantitativeGoals)==null?void 0:Rt.rows)!=null&&Pt.length)){const ne=wo(Et.data,at);if(ne!=null&&ne.length&&!J){j(ne);return}}}catch{}try{const[{parseKPISheet:At},Et]=await Promise.all([Je(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Je(()=>import("./xlsx-DiWaSB7x.js").then(Ge=>Ge.x),__vite__mapDeps([0,1]))]),ne=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,re=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${ne}&headers=1`,ce=await fetch(re,{cache:"no-store"});if(!ce.ok)return;const te=await ce.text(),ue=Et.read(te,{type:"string"}),de=ue.Sheets[ue.SheetNames[0]],ze=Et.utils.sheet_to_json(de,{header:1,defval:""}),Mt=At(ze),qt=wo(Mt,at);qt!=null&&qt.length&&!J&&j(qt)}catch{}}return Ft(),()=>{J=!0}},[e.period]);const _t=O==="en"?i:e,Kt=O==="en"?s:o,vt=H.useMemo(()=>$e(l,c,y,h,O),[l,c,y,h,O]);H.useEffect(()=>{Jn(ge).then(C)},[]);const G=H.useRef(null);function Z(J,z=2e3){clearTimeout(G.current),ct(J),G.current=setTimeout(()=>ct(""),z)}H.useEffect(()=>()=>clearTimeout(G.current),[]);const gt=H.useRef(!1);H.useEffect(()=>{let J=!1;return Ie(ge).then(z=>{J||!z||(gt.current=!0,z.meta&&o(at=>({...at,...z.meta})),z.total&&p(at=>({...at,...z.total})),z.citations&&g(z.citations),z.dotcom&&f(at=>({...at,...z.dotcom})),z.productsCnty&&F(z.productsCnty),z.citationsCnty&&k(z.citationsCnty),z.weeklyLabels&&m(z.weeklyLabels),z.weeklyAll&&$(at=>({...at,...z.weeklyAll})),z.monthlyVis&&B(z.monthlyVis),z.productsPartial?u(z.productsPartial.map(at=>{var Rt;const Ft=((Rt=z.weeklyMap)==null?void 0:Rt[at.id])||[],bt=at.vsComp>0?at.score/at.vsComp*100:100;return{...at,weekly:Ft,monthly:[],compRatio:Math.round(bt),status:bt>=100?"lead":bt>=80?"behind":"critical"}})):z.weeklyMap&&u(at=>at.map(Ft=>{var Rt;const bt=(Rt=z.weeklyMap)==null?void 0:Rt[Ft.id];return bt?{...Ft,weekly:bt}:Ft})))}),()=>{J=!0}},[]),H.useEffect(()=>{qn(No,{metaKo:e,metaEn:i,total:n,products:l,citations:y,dotcom:d,productsCnty:c,citationsCnty:h,weeklyLabels:v,weeklyAll:S,selectedCountries:It})},[e,i,n,l,y,d,c,h,v,S,It]);async function K(){if(!lt)return;const z=await Xn(ge,lt,{metaKo:e,metaEn:i,total:n,products:l,citations:y,dotcom:d,productsCnty:c,citationsCnty:h,weeklyLabels:v,weeklyAll:S});z&&C(z),Z(z?"저장 완료!":"저장 실패")}async function rt(){var at;const J=_.trim()||`${_t.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,z=await Yn(ge,J,{metaKo:e,metaEn:i,total:n,products:l,citations:y,dotcom:d,productsCnty:c,citationsCnty:h,weeklyLabels:v,weeklyAll:S});z&&(C(z),I(""),dt(((at=z[0])==null?void 0:at.ts)||null)),Z(z?"새로 저장 완료!":"저장 실패")}function st(J){const z=J.data;o({...Te,...z.metaKo||z.meta||{}}),s({...Te,...z.metaEn||{}}),z.total&&p(z.total),z.products&&u(z.products),z.citations&&g(z.citations),z.dotcom&&f(z.dotcom),z.productsCnty&&F(z.productsCnty),z.citationsCnty&&k(z.citationsCnty),z.weeklyLabels&&m(z.weeklyLabels),z.weeklyAll&&$(z.weeklyAll),dt(J.ts),Z(`"${J.name}" 불러옴`)}async function St(J){const z=w[J];if(!z)return;const at=await Zn(ge,z.ts);at&&C(at),lt===z.ts&&dt(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:R},children:[pt&&r.jsx(ei,{mode:ge,meta:_t,setMeta:Kt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:s,total:n,setTotal:p,products:l,setProducts:u,citations:y,setCitations:g,dotcom:d,setDotcom:f,productsCnty:c,setProductsCnty:F,citationsCnty:h,setCitationsCnty:k,resolved:vt,previewLang:O,setPreviewLang:x,snapshots:w,setSnapshots:C,setWeeklyLabels:m,setWeeklyAll:$,weeklyLabels:v,weeklyAll:S,generateHTML:to}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>wt(J=>!J),title:pt?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:pt?r.jsx(bn,{size:16}):r.jsx(xn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:J,tab:z,lang:at,label:Ft})=>{const bt=z==="code"?L==="code":L==="preview"&&O===at;return r.jsx("button",{onClick:()=>{N(z),at&&x(at)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:bt?"#1E293B":"transparent",color:bt?"#FFFFFF":"#475569",fontSize:11,fontWeight:bt?700:500,fontFamily:R,cursor:"pointer"},children:Ft},J)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[ot&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:R},children:ot}),r.jsxs("button",{onClick:K,disabled:!lt,title:lt?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:lt?"pointer":"default",background:lt?"#1D4ED8":"#1E293B",color:lt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4,opacity:lt?1:.5},children:[r.jsx(ho,{size:11})," 저장"]}),r.jsx("input",{value:_,onChange:J=>I(J.target.value),placeholder:"버전 이름...",onKeyDown:J=>J.key==="Enter"&&rt(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none"}}),r.jsxs("button",{onClick:rt,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(ho,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>U(!D),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:D?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(vn,{size:11})," 불러오기 ",w.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",w.length,")"]})]}),D&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:J=>J.stopPropagation(),children:w.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:R,textAlign:"center"},children:"저장된 버전이 없습니다"}):w.map((J,z)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:lt===J.ts?"#1E3A5F":"#0F172A",border:lt===J.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:J.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:new Date(J.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{st(J),U(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R},children:"적용"}),r.jsx("button",{onClick:()=>St(z),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(wn,{size:10})})]},J.ts))})]})]})]}),jt.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),jt.map(J=>{const z=It.includes(J);return r.jsx("button",{onClick:()=>Dt(J),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(z?"#22C55E":"#334155"),background:z?"#16A34A":"#1E293B",color:z?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:J},J)}),r.jsx("button",{onClick:Vt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:kt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:It.length===0?"전체 국가":`${It.length}개 선택`})]}),L==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(oi,{value:E,onChange:A,products:vt.products,productsCnty:vt.productsCnty,monthlyVis:P})}),r.jsx(ni,{meta:_t,total:n,products:vt.products,citations:vt.citations,dotcom:d,productsCnty:vt.productsCnty,citationsCnty:vt.citationsCnty,lang:O,weeklyLabels:v,weeklyAll:S,categoryStats:T,cntyKeys:$t,llmModel:E,monthlyVis:P})]})}):r.jsx(ri,{meta:_t,total:n,products:vt.products,citations:vt.citations,dotcom:d,productsCnty:vt.productsCnty,citationsCnty:vt.citationsCnty,lang:O,weeklyLabels:v,weeklyAll:S,categoryStats:T,cntyKeys:$t,llmModel:E,monthlyVis:P}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:["v","3.1.9"]})})]})]})}Cn.createRoot(document.getElementById("root")).render(r.jsx(ii,{}));
