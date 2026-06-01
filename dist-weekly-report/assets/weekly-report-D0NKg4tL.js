const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as n,b as q,R as so,L as cn,D as dn,G as lo,A as pn,c as ze,S as Et,C as We,d as Po,e as co,P as un,f as fn,h as po,F as hn,T as gn,i as yn}from"./react-BzJiA2Qb.js";import{R as mn}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const bn="modulepreload",xn=function(t){return"/admin/weekly-report/"+t},uo={},Ve=function(e,o,a){let l=Promise.resolve();if(o&&o.length>0){let u=function(b){return Promise.all(b.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=u(o.map(b=>{if(b=xn(b),b in uo)return;uo[b]=!0;const h=b.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":bn,h||(g.as="script"),g.crossOrigin="",g.href=b,p&&g.setAttribute("nonce",p),document.head.appendChild(g),h)return new Promise((c,w)=>{g.addEventListener("load",c),g.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${b}`)))})}))}function r(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return l.then(u=>{for(const s of u||[])s.status==="rejected"&&r(s.reason);return e().catch(r)})},vn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],$e={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},Do={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ce={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},xe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},wn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(vn.map((t,e)=>[t,e]));const Mo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},No=new Set(Object.values(Ce)),fo=[...new Set(Object.values(Mo))].filter(t=>!No.has(t));fo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:fo,validCodes:[...No]});const J="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Cn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function he(t){const e=Cn.indexOf(t);return e>=0?e:999}function Ft(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const ho=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function _o(t){return ho.filter(e=>t.includes(e)).concat(t.filter(e=>!ho.includes(e)))}const kn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Oo(t){return kn[String(t||"").trim().toUpperCase()]||t}function ve(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Sn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ke(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function me(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Fn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=$e,a=Do,l=[],r=[];Object.entries(t).forEach(([p,b])=>{if(!b)return;const h=b.Total||b.TTL||b.TOTAL;if(h){const d=h.LG||h.lg||[],g=d.length>0?d[d.length-1]:null,c=d.length>=2?d[d.length-2]:null;let w="",f=0;Object.entries(h).forEach(([k,v])=>{if(k==="LG"||k==="lg")return;const C=Array.isArray(v)&&v.length?v[v.length-1]:0;C>f&&(f=C,w=k)}),g!=null&&g>0&&l.push({id:p,kr:o[p]||p,bu:a[p]||"OTHER",score:g,prev:c,vsComp:f,compName:w,category:o[p]||p})}Object.entries(b).forEach(([d,g])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const c=g.LG||g.lg||[],w=c.length>0?c[c.length-1]:null,f=c.length>=2?c[c.length-2]:null;if(w==null||w<=0)return;let k="",v=0;Object.entries(g).forEach(([C,E])=>{if(C==="LG"||C==="lg")return;const j=Array.isArray(E)&&E.length?E[E.length-1]:0;j>v&&(v=j,k=C)}),r.push({product:o[p]||p,country:d,score:w,prev:f,compScore:v,compName:k})})});const u=(e==null?void 0:e[e.length-1])||"This Week",s=(e==null?void 0:e[e.length-2])||"Last Week";return{products:l,productsCnty:r,lastLabel:u,prevLabel:s}}function An(t,e,o,a){if(!t.length)return"";const l=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],u={};t.forEach(p=>{const b=p.bu||"OTHER";u[b]||(u[b]=[]),u[b].push(p)});const s=[];return r.forEach(p=>{const b=(u[p]||[]).slice().sort((h,d)=>he(h.kr||h.category||h.id)-he(d.kr||d.category||d.id));b.forEach((h,d)=>{const g=Sn(h.score,h.prev),c=me(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${d===0?`<td rowspan="${b.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${Ft(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${c};">${ve(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${c};">${ve(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${c};">${Ft(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${c};">${Ke(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${g}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${l.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
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
  </table>`}function En(t,e,o,a){const l=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},u=new Set,s=new Set;t.forEach(c=>{!c.country||!c.product||(u.add(c.country),s.add(c.product),r[c.product]||(r[c.product]={}),r[c.product][c.country]=c)});const p=_o(Array.from(u)),b=Array.from(s).sort((c,w)=>he(c)-he(w));if(!b.length||!p.length)return"";const h={};(o||[]).forEach(c=>{[c.kr,c.category,c.id,c.en].filter(Boolean).forEach(f=>{h[f]=c})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+p.map(c=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Ft(Oo(c))}</th>`).join(""),g=[];return b.forEach((c,w)=>{const f=w%2===0?"#FFFFFF":"#FAFAFA",k=h[c],C=(k?me(k.score,k.vsComp):null)||f,E=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${C};">${k?ve(k.score):"—"}</td>`,j=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${C};">${k?Ke(k.score,k.vsComp):"—"}</td>`,B=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;background:${C};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?Ft(k.compName):"—"}</td>`,P=p.map(G=>{var A;const m=(A=r[c])==null?void 0:A[G],S=(m?me(m.score,m.compScore):null)||f;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${S};">${m?ve(m.score):"—"}</td>`}).join(""),L=p.map(G=>{var A;const m=(A=r[c])==null?void 0:A[G],S=(m?me(m.score,m.compScore):null)||f;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${S};">${m?Ke(m.score,m.compScore):"—"}</td>`}).join(""),z=p.map(G=>{var A;const m=(A=r[c])==null?void 0:A[G],S=(m?me(m.score,m.compScore):null)||f;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;background:${S};color:#1A1A1A;font-weight:600;">${m!=null&&m.compName?Ft(m.compName):"—"}</td>`}).join("");g.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${J};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Ft(c)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};font-weight:600;background:#F5F5F5;white-space:nowrap;">${l.lg} (%)</td>
        ${E}${P}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};background:#F5F5F5;white-space:nowrap;">${l.ratio}</td>
        ${j}${L}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${B}${z}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${l.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${g.join("")}</tbody>
  </table>
  </div>`}function Tn(t,e,o,a){const l=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},r={},u=new Set,s=new Set;t.forEach(g=>{!g.country||!g.product||(u.add(g.country),s.add(g.product),r[g.product]||(r[g.product]={}),r[g.product][g.country]=g)});const p=_o(Array.from(u)),b=Array.from(s).sort((g,c)=>he(g)-he(c));if(!b.length||!p.length)return"";const h=p.map(g=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Ft(Oo(g))}</th>`).join(""),d=b.map(g=>{const c=p.map(w=>{var P;const f=(P=r[g])==null?void 0:P[w];if(!f||f.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${J};text-align:center;color:#999;">—</td>`;const k=f.score,v=f.prev,C=v!=null?+(k-v).toFixed(1):null,E=C==null?"#999":C>0?"#16A34A":C<0?"#DC2626":"#666",j=C==null?"":C>0?"▲":C<0?"▼":"─",B=C!=null?`${j}${Math.abs(C).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${J};text-align:center;">
        <div style="font-weight:700;color:#111;">${ve(k)}%</div>
        <div style="font-size:9px;color:${E};">${B}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Ft(g)}</td>
      ${c}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${l.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${l.product}</th>
      ${h}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${J};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Bn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((r,u)=>r+(u.score||0),0),l=t.map((r,u)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;">${u+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${Ft(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${a>0?(r.score/a*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function Ln(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,p)=>(p.citations||0)-(s.citations||0));const a=o.slice(0,20),l=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((s,p)=>s+(p.citations||0),0),u=a.map((s,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${Ft(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${Ft(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${r>0?(s.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${l.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${l.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${l.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function $n(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},l=Object.keys(o).filter(s=>o[s]!=null);if(!l.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},u=l.map(s=>{const p=o[s]||0,b=a[s]||0,h=p-b,d=h>0?"LG":h<0?"SS":"=",g=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",c=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${g};color:${c};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};font-weight:${s==="TTL"?"900":"600"};">${Ft(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${b.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function Rn(t,e){var u;if(!t||!t.length)return"";const o=((u=t[0])==null?void 0:u.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function l(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(s=>{const p=(s.monthRate||0).toFixed(0),b=(s.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${J};background:#F5F5F5;">${Ft(s.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.monthRate)};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.progressRate)};">${b}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${J};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${J};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function Xe(t,e,o,a,l={},r="ko",u=[],s=[],p={}){const{weeklyAll:b={},weeklyLabels:h=[],categoryStats:d=null,cntyKeys:g=null}=p;let c=b;if(Array.isArray(g)&&g.length>0){const B=new Set(g.map(L=>String(L).toUpperCase())),P=L=>/^(total|ttl)$/i.test(String(L));u=(u||[]).filter(L=>L&&B.has(String(L.country).toUpperCase())),s=(s||[]).filter(L=>L&&B.has(String(L.country).toUpperCase())),c={},Object.entries(b||{}).forEach(([L,z])=>{if(!z)return;const G={};Object.entries(z).forEach(([m,T])=>{(P(m)||B.has(String(m).toUpperCase()))&&(G[m]=T)}),c[L]=G})}const w=Fn(c,h),f=w.products.length?w.products:o,k=w.productsCnty.length?w.productsCnty:u,v=w.lastLabel,C=w.prevLabel,E=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",j=t.period||v||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Ft(E)} — ${Ft(j)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${J} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${J};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${J};">${Ft(E)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${J};">${Ft(j)} · ${v?`${Ft(v)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${An(f,r,v,C)}
    ${Tn(k,r,v,C)}
    ${En(k,r,f,v)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${J};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Bn(a,r)}
    ${Ln(s,r)}
    ${$n(l,r)}

    ${Rn(d,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${J};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const ht="#CF0652",$="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",In=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Ee={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:In,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},jn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Pn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Dn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Mn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Nn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],_n=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],zo=3;function On(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==zo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function zn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:zo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ne={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function se(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Gn(t){try{const e=await fetch(se(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Un(t,e,o){try{const a=await fetch(se(t).snapshots,{method:"POST",headers:Ne,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const l=await a.json();return l.ok?l.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function Hn(t,e,o){try{const a=await fetch(`${se(t).snapshots}/${e}`,{method:"PUT",headers:Ne,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const l=await a.json();return l.ok?l.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function Wn(t,e){try{const o=await fetch(`${se(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Tt(t,e,o="ko",a=""){try{const l=await fetch("/api/generate-insight",{method:"POST",headers:Ne,body:JSON.stringify({type:t,data:e,lang:o,rules:a})});if(!l.ok){const u=await l.json().catch(()=>({}));throw new Error(u.error||`HTTP ${l.status}`)}const r=await l.json();if(!r.ok)throw new Error(r.error||"AI 생성 실패");return r.insight}catch(l){throw console.error("[API] generateAIInsight failed:",l.message),l}}async function Re(t){try{const e=await fetch(se(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function go(t){try{const e=await fetch(se(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Vn(t,e,o={}){const{includePromptList:a=!1,includeReadability:l=!1}=o,[r,u]=await Promise.all([Re("dashboard").catch(()=>null),Re("visibility").catch(()=>null)]),s={...r||{},...u||{}};if(r&&Object.keys(r).forEach(A=>{s[A]==null&&r[A]!=null&&(s[A]=r[A])}),u!=null&&u.meta&&(r!=null&&r.meta)&&(s.meta={...r.meta||{},...u.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const p=s.meta||{},b=s.total||{},d=(s.productsPartial||s.products||[]).map(A=>{var F;const M=A.weekly||((F=s.weeklyMap)==null?void 0:F[A.id])||[],x=A.vsComp>0?A.score/A.vsComp*100:100;return{...A,weekly:M,monthly:A.monthly||[],compRatio:A.compRatio||Math.round(x),status:A.status||(x>=100?"lead":x>=80?"behind":"critical")}}),g=s.citations||[],c=s.dotcom||{},w=s.productsCnty||[],f=s.citationsCnty||[],k=s.weeklyLabels||null,v=s.weeklyAll||{},C=s.citationsByCnty||{},E=s.dotcomByCnty||{},j=e(d,w,g,f,"ko"),B=e(d,w,g,f,"en"),P={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},L={monthlyVis:s.monthlyVis||[],includePromptList:a,includeReadability:l},z=t(p,b,j.products,j.citations,c,"ko",j.productsCnty,j.citationsCnty,k,v,C,E,L,P),G=t({...p,title:p.title||"GEO KPI Dashboard"},b,B.products,B.citations,c,"en",B.productsCnty,B.citationsCnty,k,v,C,E,L,P),m=`${p.period||""} ${p.title||"KPI Dashboard"}`.trim(),S=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:m,htmlKo:z,htmlEn:G})})).json();if(!S.ok)throw new Error(S.error||"게시 실패");return S}async function yo(t,e){try{const o=await fetch(se(t).syncData,{method:"POST",headers:Ne,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Kn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ge={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},mo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Le(t,e,o,a,l){return l!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(r=>({...r,kr:r.en||Ge[r.kr]||r.kr,compName:r.compNameEn||mo[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||Kn[r.country]||r.country,product:r.productEn||Ge[r.product]||r.product,compName:r.compNameEn||mo[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||Ge[r.category]||r.category})),citationsCnty:a.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function qn(t,{from:e="ko",to:o="en"}={}){const l=[];for(let r=0;r<t.length;r+=20){const u=t.slice(r,r+20),s=await Promise.all(u.map(async p=>{if(!p||!p.trim())return p;const b=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,h=await fetch(b);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(g=>g[0]).join("")}));l.push(...s)}return l}const Te=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Jn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Yn(t){const e=Jn.indexOf(t);return e>=0?e:999}function Be(t){return Yn(t)}function Go(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Xn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Go(o)]=o)}),e}function bo(t,e){var d,g,c,w;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(c=(g=t==null?void 0:t._dashboard)==null?void 0:g.categoryStats)!=null&&c.length?[...t._dashboard.categoryStats].sort((f,k)=>Be(f.category)-Be(k.category)):null;const o=t.quantitativeGoals.rows,a=Xn((w=t.quantitativeResults)==null?void 0:w.rows),r=new Date().getMonth()+1-1,u=r>=3&&r<=12?`${r}월`:"3월";let s=e||t._month||u,p=Te.indexOf(s);p<0&&(s="3월",p=0);const b=[...new Set(o.map(f=>f.taskCategory).filter(Boolean))],h=p>0?Te[p-1]:null;return b.map(f=>{const k=o.filter(m=>m.taskCategory===f);let v=0,C=0,E=0,j=0,B=0,P=0;k.forEach(m=>{var x,F,_,I,R;const T=Go(m),S=a[T]||{},A=typeof((x=m.monthly)==null?void 0:x[s])=="number"?m.monthly[s]:0,M=typeof((F=S.monthly)==null?void 0:F[s])=="number"?S.monthly[s]:0;if(C+=A,v+=M,h){const H=typeof((_=m.monthly)==null?void 0:_[h])=="number"?m.monthly[h]:0,nt=typeof((I=S.monthly)==null?void 0:I[h])=="number"?S.monthly[h]:0;P+=H,B+=nt}for(let H=0;H<=p;H++){const nt=Te[H];typeof((R=S.monthly)==null?void 0:R[nt])=="number"&&(E+=S.monthly[nt])}Te.forEach(H=>{var nt;typeof((nt=m.monthly)==null?void 0:nt[H])=="number"&&(j+=m.monthly[H])})});const L=C>0?Math.round(v/C*1e3)/10:0,z=P>0?Math.round(B/P*1e3)/10:0,G=j>0?Math.round(E/j*1e3)/10:0;return{category:f,taskCount:k.length,targetMonth:s,monthRate:L,prevMonthRate:z,prevMonth:h,progressRate:G,monthActual:v,monthGoal:C,cumActual:E,annualGoal:j}}).sort((f,k)=>Be(f.category)-Be(k.category))}function Zn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function Qn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function Uo(){const t=await Ve(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function qe(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Pt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function tr(t,e){return Array.isArray(t)?t.length===0?(qe(e,"invalid input: empty rows",{len:0}),!1):!0:(qe(e,"invalid input: not an array",{type:typeof t}),!1)}function _e(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const a=o.map(l=>String(l??"").trim().toLowerCase());return e.every(l=>a.some(r=>l instanceof RegExp?l.test(r):r===String(l).toLowerCase()))})}function er(t,e="sync"){var l,r,u;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((l=t.products)==null?void 0:l.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(u=t.weeklyLabels)!=null&&u.length&&t.weeklyLabels.every((p,b)=>p===`W${b+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const bt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},xo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],vo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function or(t,e,o,a,l={}){const r=await Uo(),u=r.utils.book_new(),s=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(u,s,"meta");const p=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(u,p,"total");const b=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(f=>[f.id,f.bu,f.kr,f.score,f.prev,f.vsComp,f.compName])]);b["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(u,b,"products");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(f=>[f.id,f.kr,...f.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(u,h,"weekly");const d=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(f=>[f.rank,f.source,f.category,f.score,f.delta,f.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(u,d,"citations");const g=(l==null?void 0:l.lg)||{},c=(l==null?void 0:l.samsung)||{},w=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...xo.map(f=>`LG_${f}`),...vo.map(f=>`Samsung_${f}`)],[...xo.map(f=>g[f]??0),...vo.map(f=>c[f]??0)]]);w["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(u,w,"dotcom"),r.writeFile(u,"GEO_Newsletter_템플릿.xlsx")}function Wt(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),l=parseFloat(a)||0;return o?+l.toFixed(2):Math.abs(l)<=1&&l!==0?+(l*100).toFixed(2):+l.toFixed(2)}function Ie(t){return t==null||String(t).trim()===""?null:Wt(t)}function qt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Jt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const nr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function rr(t){const e=Jt(t);return nr[e]||e}function fe(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,l=0;const r=e.match(/(\d{4})/);if(r)l=parseInt(r[1]);else{const s=e.match(/(\d{2})년/);if(s)l=2e3+parseInt(s[1]);else{const p=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);p&&(l=2e3+parseInt(p[1]))}}const u=e.match(/(\d{1,2})월/);if(u)a=parseInt(u[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)a=o[s[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(a=parseInt(p[1]))}}return l?l*12+a:a}function ir(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],a=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(r=>{if(!r[0]||String(r[0]).startsWith("[")||String(r[0]).startsWith("※")||r[0]==="key")return;const u=String(r[0]).trim(),s=r[1]??"";if(o.includes(u))e[u]=parseInt(s)||(u==="titleFontSize"?24:10);else if(a.includes(u)){const p=String(s).trim().toLowerCase();e[u]=p==="y"||p==="yes"||p==="true"||p==="1"}else e[u]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(r=>{e[r]=!1}),e.weeklyLabels){const r=String(e.weeklyLabels).split(",").map(u=>u.trim()).filter(Boolean);r.length?e.weeklyLabels=r:delete e.weeklyLabels}if(e.period){const r={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},u=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);u&&(e.period=`${r[u[2]]||u[2]} ${u[1]}`)}if(e.dateLine){const r=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(r){const u=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${u[parseInt(r[2])]||r[2]} ${r[1]}`}}return Object.keys(e).length?{meta:e}:{}}function ar(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let l=!1;if(t.forEach(A=>{if(!A[0]||String(A[0]).startsWith("[")||String(A[0]).startsWith("※")||A[0]==="key")return;const M=String(A[0]).trim();(o.includes(M)||e.includes(M))&&(l=!0,e.includes(M)?a[M]=parseInt(A[1])||0:a[M]=Wt(A[1]))}),l&&Object.keys(a).length>=2)return{total:a};const r=t.find(A=>A.some(M=>String(M||"").trim().toUpperCase()==="LG")),u=r?r.findIndex(A=>String(A||"").trim().toUpperCase()==="LG"):4,s=r?r.findIndex(A=>{const M=String(A||"").trim().toUpperCase();return M==="SAMSUNG"||M==="SAMSUMG"}):5,p=s>=0?s:u+1,b=r?r.findIndex(A=>/date/i.test(String(A||"").trim())):0,h=r?r.findIndex(A=>/countries|country/i.test(String(A||"").trim())):2,d=r?r.findIndex(A=>/divisions?/i.test(String(A||"").trim())):3,g=[];t.filter(A=>{const M=String(A[b>=0?b:0]||"").trim();return M&&!M.startsWith("[")&&!M.startsWith("※")&&!/^date$/i.test(M)&&!/^key$/i.test(M)}).forEach(A=>{const M=String(A[b>=0?b:0]||"").trim(),x=Jt(A[h>=0?h:2]),F=String(A[d>=0?d:3]||"").trim().toUpperCase(),_=Wt(A[u]),I=Wt(A[p]);M&&_>0&&g.push({date:M,country:x,division:F,lg:_,comp:I})});const w=g.filter(A=>(A.country==="TOTAL"||A.country==="TTL")&&(A.division==="TOTAL"||A.division==="TTL"||A.division===""));w.sort((A,M)=>fe(A.date)-fe(M.date));const f=w[w.length-1],k=w.length>=2?w[w.length-2]:null;if(!f){const A=t.find(_=>_.some(I=>String(I||"").trim().toUpperCase()==="TOTAL"));if(!A)return Pt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(_=>_==null?void 0:_.slice(0,6))});const M=Wt(A[u]),x=Wt(A[p]),F={total:{score:M,prev:M,vsComp:x,rank:M>=x?1:2,totalBrands:12}};return g.length&&(F.monthlyVis=g),F}const v=f.lg,C=f.comp,E=k?k.lg:v,j=f.date,B=k?k.date:null;function P(A){const M={};return g.filter(x=>x.date===A&&(x.country==="TOTAL"||x.country==="TTL")&&x.division&&x.division!=="TOTAL"&&x.division!=="TTL"&&x.division!=="").forEach(x=>{M[x.division]={lg:x.lg,comp:x.comp}}),M}const L=P(j),z=B?P(B):{};function G(A){const M={};return g.filter(x=>x.date===A&&x.country&&x.country!=="TOTAL"&&x.country!=="TTL"&&(x.division==="TOTAL"||x.division==="TTL"||x.division==="")).forEach(x=>{M[x.country]={lg:x.lg,comp:x.comp}}),M}const m=G(j),T=B?G(B):{},S={total:{score:v,prev:E,vsComp:C,rank:v>=C?1:2,totalBrands:12},...Object.keys(L).length?{buTotals:L}:{},...Object.keys(z).length?{buTotalsPrev:z}:{},...Object.keys(m).length?{countryTotals:m}:{},...Object.keys(T).length?{countryTotalsPrev:T}:{}};return j&&(S.derivedPeriod=j),g.length&&(S.monthlyVis=g),S}function sr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,a)=>console.log(`  row${a}: [${o.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const a=String(o[0]||"").trim().toLowerCase();return a==="div"||a==="division"||a==="divisions"});if(e<0){const o=t.findIndex(a=>a.some((l,r)=>r>=1&&String(l||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),wo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),wo(t,e)}function wo(t,e){const o=t[e],a=o.findIndex((h,d)=>d>=3&&String(h||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const l=[];for(let h=4;h<o.length;h++){const d=String(o[h]||"").trim();d&&d.toUpperCase()!=="LG"&&l.push({name:d,col:h})}const r=t.slice(e+1).filter(h=>{const d=String(h[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),u={},s={};r.forEach(h=>{const d=String(h[0]||"").trim(),g=String(h[1]||"").trim(),c=String(h[2]||"").trim(),w=Jt(h[2])||c,f=String(h[3]||"").trim(),k=Wt(h[a]),v=l.map(B=>({name:B.name,score:Wt(h[B.col])})).filter(B=>B.score>0),C=[...v].sort((B,P)=>P.score-B.score)[0]||{name:"",score:0},E=+(k-C.score).toFixed(2),j={LG:k};if(v.forEach(B=>{j[B.name]=B.score}),w==="TTL"||w==="TOTAL"){const B=xe[f]||f.toLowerCase(),P=wn[f]||f;u[B]||(u[B]=[]),u[B].push({id:B,bu:d,kr:P,category:f,date:g,score:k,vsComp:C.score,compName:C.name,allScores:j})}else{const B=`${f}|${w}`;s[B]||(s[B]=[]),s[B].push({product:f,country:w,date:g,score:k,compName:C.name,compScore:C.score,gap:E,allScores:j})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(u).join(", ")||"없음"} / 국가별: ${Object.keys(s).length}건`);const p=[];for(const[h,d]of Object.entries(u)){d.sort((f,k)=>fe(f.date)-fe(k.date));const g=d[d.length-1],c=d.length>=2?d[d.length-2].score:null;console.log(`[parseProductCnty] ${h}: dates=[${d.map(f=>f.date).join(",")}] score=${g.score} prev=${c} vsComp=${g.vsComp}`);const w=d.map(f=>({date:f.date,score:f.score,comp:f.vsComp,allScores:f.allScores}));p.push({...g,prev:c,monthlyScores:w})}const b=[];for(const h of Object.values(s)){h.sort((w,f)=>fe(w.date)-fe(f.date));const d=h[h.length-1],g=h.length>=2?h[h.length-2].score:null,c=h.map(w=>({date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores}));b.push({...d,prev:g,monthlyScores:c})}return{...p.length?{productsPartial:p}:{},...b.length?{productsCnty:b}:{}}}function Ho(t,e=0,o){const a=o??t.length;for(let l=e;l<a;l++){const r=[];for(const u of t[l]||[]){const s=String(u||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&r.push(s.toUpperCase())}if(r.length>=2)return r}return null}const Ue={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Co(t,e){var f;const o=e?Ue[e]||{}:{...Ue.MS,...Ue.ES};if(!Object.keys(o).length)return Pt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const a=t.findIndex(k=>k.some(v=>String(v||"").trim()in o));if(a<0)return Pt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const l=t[a],r=t.findIndex((k,v)=>v>a&&k.some(C=>String(C||"").trim()==="TTL")),u=r>0?r+1:Math.min(a+20,t.length);let s=-1,p=-1;for(let k=a+1;k<u;k++){const v=t[k];if(!v.some(j=>String(j||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=k),v.some(j=>{const B=String(j||"").trim().toLowerCase().replace(/[\s_-]/g,"");return B==="nonbrand"||B==="nb"})){s=k;break}}const b=s>=0?s:p>=0?p:r;if(b<0)return Pt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:a,ttlRowIdx:r});const h=t[b],d=s>=0?"LG-NB":p>=0?"LG":"TTL",g={},c=Object.keys(o).map(k=>l.findIndex(v=>String(v||"").trim()===k)).filter(k=>k>=0).sort((k,v)=>k-v);for(const[k,v]of Object.entries(o)){const C=l.findIndex(B=>String(B||"").trim()===k);if(C<0)continue;const E=c.find(B=>B>C)||C+20,j=[];for(let B=C+1;B<E&&B<h.length;B++){const P=Wt(h[B]);P>0&&j.push(P)}j.length&&(g[v]=j)}if(!Object.keys(g).length)return Pt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:a,dataRowIdx:b,dataRowLabel:d});const w=Ho(t,a,u)||((f=Object.values(g)[0])==null?void 0:f.map((k,v)=>`W${v+1}`))||[];return{weeklyMap:g,weeklyLabels:w}}function lr(t,e,o){for(const a of Object.values(t))for(const l of Object.values(a))for(const[r,u]of Object.entries(l))l[r]=u.slice(o);for(const[a,l]of Object.entries(e))e[a]=l.slice(o)}function cr(t){const{data:e,rows:o,headerIdx:a,brandIdx:l,catIdx:r,countryIdx:u,isNonBrand:s,isTotal:p,weeklyMap:b,weeklyAll:h}=t;let d=t.wCols,g=t.weeklyLabels;if(!d.length){const c=e.find(w=>String(w[l]||"").trim().toUpperCase()==="LG"&&s(w));if(c){const w=[];for(let f=l+1;f<c.length;f++)if(String(c[f]||"").trim())w.push(f);else if(w.length)break;d=w,g=Ho(o,0,a+1)||d.map((f,k)=>`W${k+1}`)}}return e.forEach(c=>{if(!s(c))return;const w=String(c[l]||"").trim();if(!w)return;const f=String(c[r>=0?r:0]||"").trim();if(!f)return;const k=xe[f]||f.toLowerCase(),v=u>=0?Jt(c[u]):"TOTAL",C=v==="TOTAL"||v==="TTL"||!v?"Total":v;h[k]||(h[k]={}),h[k][C]||(h[k][C]={}),h[k][C][w]=d.map(E=>Ie(c[E]))}),e.forEach(c=>{if(String(c[l]||"").trim().toUpperCase()!=="LG"||!s(c)||!p(c))return;const f=String(c[r>=0?r:0]||"").trim();f&&(b[xe[f]||f.toLowerCase()]=d.map(k=>Ie(c[k])))}),{wCols:d,weeklyLabels:g}}function dr(t){const{data:e,header:o,lgIdx:a,catIdx:l,isTotal:r,weeklyMap:u}=t,s=o.findIndex(h=>{const d=String(h||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),p={},b=[];return e.forEach(h=>{if(!r(h))return;const d=String(h[l>=0?l:3]||"").trim();if(d){if(s>=0){const g=String(h[s]||"").trim();g&&!b.includes(g)&&b.push(g)}p[d]=p[d]||[],p[d].push(Ie(h[a]))}}),Object.entries(p).forEach(([h,d])=>{u[xe[h]||h.toLowerCase()]=d}),b.length?b:null}function pr(t){const{data:e,wCols:o,catIdx:a,isTotal:l,weeklyMap:r}=t;e.forEach(u=>{if(!l(u))return;const s=String(u[a>=0?a:0]||"").trim();s&&(r[xe[s]||s.toLowerCase()]=o.map(p=>Ie(u[p])))})}function He(t,e){const o={};let a=[],l=-1;for(let L=0;L<Math.min(t.length,10);L++){const z=t[L];if(!z)continue;let G=0;for(let m=0;m<z.length;m++)/^w\d+$/i.test(String(z[m]||"").trim())&&G++;if(G>=2){l=L;break}}let r=t.findIndex(L=>{const z=L.slice(0,5).map(G=>String(G||"").trim().toLowerCase());return z.includes("category")||z.includes("product")});if(r<0&&l>=0&&(r=l),r<0&&(r=t.findIndex(L=>{let z=!1,G=0;for(let m=0;m<Math.min(L.length,10);m++){const T=String(L[m]||"").trim();T.toUpperCase()==="LG"?(z=!0,G++):T&&isNaN(parseFloat(T))&&G++}return z&&G>=3})),r<0)return Co(t,e);const u=t[r],s=r+1;let p=null;if(t[s]){const L=t[s].slice(4,8).map(z=>String(z||"").trim()).filter(Boolean);L.length&&L.every(z=>/^\d{1,2}\/\d{1,2}/.test(z)||/~/.test(z)||/^\(/.test(z))&&(p=s)}const b=p!=null?p+1:s,h=t.slice(b).filter(L=>L[0]!=null&&String(L[0]).trim()),d=u.findIndex(L=>{const z=String(L||"").trim().toLowerCase();return z==="category"||z==="product"}),g=u.findIndex(L=>{const z=String(L||"").trim().toLowerCase();return z==="country"||z==="county"}),c=u.findIndex(L=>String(L||"").trim().toLowerCase()==="brand"),w=u.findIndex(L=>String(L||"").trim().toUpperCase()==="LG");let f=[];const k=l>=0?t[l]:u;for(let L=0;L<k.length;L++)/^w\d+$/i.test(String(k[L]||"").trim())&&f.push(L);if(!f.length)for(let L=0;L<u.length;L++){const z=String(u[L]||"").split(/\n/)[0].trim();/^w\d+/i.test(z)&&f.push(L)}a=f.map(L=>String(k[L]||"").trim().toUpperCase());let v=f.map((L,z)=>{const G=a[z]||`W${L}`;let m="";const T=p!=null?t[p]:l!==r&&l>=0?t[l+1]:null;if(T){const S=String(T[L]||"").trim();S&&/\d/.test(S)&&(m=S.startsWith("(")?S:`(${S})`)}return m?`${G}${m}`:G});console.log(`[parseWeekly:${e}] wLabelRow:${l} headerIdx:${r} dateRangeRow:${p} wCols:${f.length} labels:`,a.slice(0,5),"full:",v.slice(-2));function C(L){if(g<0)return!0;const z=String(L[g]||"").replace(/[()]/g,"").trim().toUpperCase();return z==="TOTAL"||z==="TTL"||z===""}const E=u.findIndex(L=>{const z=String(L||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="b/nb"||z==="bnb"||z==="brand/nonbrand"});function j(L){if(E<0)return!0;const z=String(L[E]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="nonbrand"||z==="nb"}const B={},P={data:h,rows:t,header:u,headerIdx:r,brandIdx:c,lgIdx:w,catIdx:d,countryIdx:g,wCols:f,weeklyLabels:a,weeklyMap:o,weeklyAll:B,isNonBrand:j,isTotal:C};if(c>=0){const L=cr(P);f=L.wCols,a=L.weeklyLabels}else if(w>=0){const L=dr(P);L&&(a=L)}else f.length&&pr(P);if(a.length>0){let L=a.length;for(const T of Object.values(B))for(const S of Object.values(T))for(const A of Object.values(S)){const M=A.findIndex(x=>x!=null);M>=0&&M<L&&(L=M)}for(const T of Object.values(o)){const S=T.findIndex(A=>A!=null);S>=0&&S<L&&(L=S)}const z=12,m=a.length-L>z?a.length-z:L;m>0&&m<a.length&&(a=a.slice(m),v=v.slice(m),lr(B,o,m))}if(Object.keys(o).length){const L={weeklyMap:o};return a.length&&(L.weeklyLabels=a),v.length&&(L.weeklyLabelsFull=v),Object.keys(B).length&&(L.weeklyAll=B),L}return Co(t,e)}function ur(t){const e=t.findIndex(E=>E.some(P=>{const L=String(P||"").trim().toLowerCase();return L.includes("page type")||L==="country"})?!E.some(P=>/^\[.*\]$/.test(String(P||"").trim())):!1);if(e<0)return Pt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(E=>E==null?void 0:E.slice(0,6))});const o=t[e],a=[];for(let E=2;E<o.length;E++){const j=String(o[E]||"").trim();if(/\bLG\b/i.test(j)){const B=E+1;B<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[B]||""))&&a.push({lg:E,ss:B})}}a.length||a.push({lg:2,ss:3});const l=t.slice(e+1).filter(E=>E[0]!=null&&String(E[0]).trim());let r=a[0];for(let E=a.length-1;E>=0;E--)if(l.some(j=>qt(j[a[E].lg])>0)){r=a[E];break}if(!l.some(E=>qt(E[r.lg])>0)){for(let E=Math.min(r.lg,o.length)-1;E>=2;E--)if(l.some(j=>qt(j[E])>0)){r={lg:E-1,ss:E};break}}const u={},s={},p={},b={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},h=new Set,d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=a.map(E=>{const j=String(o[E.lg]||"").trim(),B=j.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return B?B[1].charAt(0).toUpperCase()+B[1].slice(1).toLowerCase():j.replace(/\s*LG\s*/i,"").trim()}),c={};l.forEach(E=>{const j=Jt(E[0]),B=String(E[1]||"").replace(/[()]/g,"").trim();let P=/page total|^ttl$/i.test(B)?"TTL":B;P.toLowerCase()==="microsite"&&(P="Microsites");const L=b[j]||j.toUpperCase();h.add(L);const z=qt(E[r.lg]),G=qt(E[r.ss]);L==="TTL"?(u[P]=(u[P]||0)+z,s[P]=(s[P]||0)+G):(p[L]||(p[L]={lg:{},samsung:{}}),p[L].lg[P]=(p[L].lg[P]||0)+z,p[L].samsung[P]=(p[L].samsung[P]||0)+G),L==="TTL"&&(c[P]||(c[P]={}),a.forEach((m,T)=>{var M,x;const S=qt(E[m.lg]),A=qt(E[m.ss]);if(S>0||A>0){const F=g[T]||`M${T+1}`;c[P][F]={lg:(((M=c[P][F])==null?void 0:M.lg)||0)+S,samsung:(((x=c[P][F])==null?void 0:x.samsung)||0)+A}}}))});const w=new Set;Object.values(c).forEach(E=>Object.keys(E).forEach(j=>w.add(j)));const f=d.filter(E=>w.has(E)),k={},v={};a.forEach((E,j)=>{const B=g[j];if(!B)return;const P={},L={};l.forEach(z=>{const G=Jt(z[0]),m=String(z[1]||"").replace(/[()]/g,"").trim();let T=/page total|^ttl$/i.test(m)?"TTL":m;T.toLowerCase()==="microsite"&&(T="Microsites");const S=b[G]||G.toUpperCase(),A=qt(z[E.lg]),M=qt(z[E.ss]);A<=0&&M<=0||(S==="TTL"?(A>0&&(P[T]=(P[T]||0)+A),M>0&&(L[T]=(L[T]||0)+M)):(v[B]||(v[B]={}),v[B][S]||(v[B][S]={lg:{},samsung:{}}),A>0&&(v[B][S].lg[T]=(v[B][S].lg[T]||0)+A),M>0&&(v[B][S].samsung[T]=(v[B][S].samsung[T]||0)+M)))}),Object.keys(P).length&&(k[B]={lg:P,samsung:L})}),Object.keys(v).forEach(E=>{Object.keys(v[E]).forEach(j=>{const B=v[E][j];Object.values(B.lg).some(L=>L>0)||Object.values(B.samsung).some(L=>L>0)||delete v[E][j]}),Object.keys(v[E]).length||delete v[E]});const C={};return(u.TTL||Object.keys(u).length)&&(C.dotcom={lg:u,samsung:s,byMonth:k,byCntyByMonth:v}),Object.keys(p).length&&(C.dotcomByCnty=p),Object.keys(c).length&&f.length&&(C.dotcomTrend=c,C.dotcomTrendMonths=f),C}function fr(t){const e=t.findIndex(x=>x.some(I=>{const R=String(I||"").trim().toLowerCase();return R==="channel"||R==="country"})?!x.some(I=>/^\[.*\]$/.test(String(I||"").trim())):!1);e<0&&Pt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let l=-1,r=-1,u=-1;for(let x=0;x<o.length;x++){const F=String(o[x]||"").trim().toLowerCase();F==="country"&&l<0&&(l=x),F==="channel"&&r<0&&(r=x),F==="prd"&&u<0&&(u=x)}const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function p(x){const F=String(x||"").trim().toLowerCase();if(!F)return null;const _=F.match(/^(\d{1,2})월/);if(_){const R=parseInt(_[1]);if(R>=1&&R<=12)return s[R-1]}const I=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return I?I[1].charAt(0).toUpperCase()+I[1].slice(1).toLowerCase():null}const b=[],h=new Set;for(let x=0;x<o.length;x++){const F=p(o[x]);F&&!h.has(x)&&(b.push({col:x,label:F}),h.add(x))}if(e>0){const x=t[e-1];if(x)for(let F=0;F<x.length;F++){const _=p(x[F]);_&&!h.has(F)&&(b.push({col:F,label:_}),h.add(F))}}let d=2;if(b.length>0)d=Math.min(...b.map(x=>x.col));else if(l>=0&&r>=0)d=Math.max(l,r,u)+1;else{const x=t[a];x&&!String(x[0]||"").trim()?(l=1,r=2,d=3):(l=0,r=1,d=2)}if(l<0||r<0){const x=t[a],F=x&&!String(x[0]||"").trim()?1:0;l<0&&(l=F),r<0&&(r=F+1)}if(b.length>0){b.sort((I,R)=>I.col-R.col);const x=b[0],F=s.indexOf(x.label),_=new Set([l,r,u].filter(I=>I>=0));if(F>0&&x.col>d){let I=F-1;for(let R=x.col-1;R>=d&&I>=0;R--){if(h.has(R)||_.has(R))continue;const H=String(o[R]||"").trim(),nt=e>0?String((t[e-1]||[])[R]||"").trim():"";H||nt||(b.push({col:R,label:s[I]}),h.add(R),I--)}}}b.sort((x,F)=>s.indexOf(x.label)-s.indexOf(F.label));const g=t.slice(a).filter(x=>x.some(F=>F!=null&&String(F).trim())),c=[],w={},f={},k={},v={},C=new Set,E={};g.forEach(x=>{const F=Jt(x[l]),_=String(x[r]||"").replace(/[()]/g,"").trim(),I=u>=0?String(x[u]||"").trim():"";if(!F||!_||_.toLowerCase()==="total")return;C.add(F);const R={};if(b.forEach(({col:st,label:it})=>{const at=qt(x[st]);at>0&&(R[it]=at)}),Object.keys(R).length===0)return;const H=I.toUpperCase(),nt=!I||H==="TTL"||H==="TOTAL",lt=F==="TTL"||F==="TOTAL"?"TTL":F;E[lt]||(E[lt]={}),E[lt][_]||(E[lt][_]={ttl:null,prds:[]}),nt?E[lt][_].ttl=R:E[lt][_].prds.push({prd:I,monthScores:R})});const j=x=>{for(let F=b.length-1;F>=0;F--){const _=x[b[F].label];if(_>0)return _}return 0},B=x=>x.ttl?{...x.ttl}:{},P={};Object.entries(E).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([_,I])=>{const R=B(I);Object.keys(R).length!==0&&(P[x]||(P[x]={}),P[x][_]=R)})});const L=E.TTL||{};Object.entries(L).forEach(([x,F])=>{const _=B(F),I=j(_);I>0&&(c.push({source:x,category:"",score:I,delta:0,ratio:0,monthScores:_}),w[x]=_),F.prds.forEach(({prd:R,monthScores:H})=>{const nt=j(H);nt>0&&(k[R]||(k[R]=[]),k[R].push({source:x,category:"",score:nt,delta:0,ratio:0,monthScores:H}))})}),Object.entries(E).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([_,I])=>{const R=B(I),H=j(R);H>0&&(f[x]||(f[x]=[]),f[x].push({source:_,category:"",score:H,delta:0,ratio:0,monthScores:R,prd:""})),I.prds.forEach(({prd:nt,monthScores:lt})=>{const st=j(lt);if(st<=0)return;f[x]||(f[x]=[]),f[x].push({source:_,category:"",score:st,delta:0,ratio:0,monthScores:lt,prd:nt}),v[nt]||(v[nt]={}),v[nt][_]||(v[nt][_]={source:_,category:"",score:0,delta:0,ratio:0,monthScores:{}});const it=v[nt][_];it.score+=st,Object.entries(lt).forEach(([at,xt])=>{it.monthScores[at]=(it.monthScores[at]||0)+xt})})})});const z={};new Set([...Object.keys(k),...Object.keys(v)]).forEach(x=>{let F=k[x];(!F||!F.length)&&(F=Object.values(v[x]||{})),F&&F.length&&(z[x]=F)});const m=c.reduce((x,F)=>x+F.score,0);c.sort((x,F)=>F.score-x.score),c.forEach((x,F)=>{x.rank=F+1,x.ratio=m>0?+(x.score/m*100).toFixed(1):0});for(const[x,F]of Object.entries(f)){const _=F.reduce((I,R)=>I+R.score,0);F.sort((I,R)=>R.score-I.score),F.forEach((I,R)=>{I.rank=R+1,I.ratio=_>0?+(I.score/_*100).toFixed(1):0})}for(const[x,F]of Object.entries(z)){const _=F.reduce((I,R)=>I+R.score,0);F.sort((I,R)=>R.score-I.score),F.forEach((I,R)=>{I.rank=R+1,I.ratio=_>0?+(I.score/_*100).toFixed(1):0})}const T=b.map(x=>x.label).filter(x=>Object.values(w).some(F=>F[x]>0)),S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let A=null;if(T.length>0){const x={};Object.values(w).forEach(I=>{Object.entries(I).forEach(([R,H])=>{H>0&&(x[R]=(x[R]||0)+1)})});let F=T[T.length-1];if(T.length>=2){const I=x[F]||0,R=T[T.length-2],H=x[R]||0;H>0&&I<H*.5&&(F=R)}const _=S.findIndex(I=>F.toLowerCase().startsWith(I.toLowerCase()));_>=0&&(A=`${S[_]} ${new Date().getFullYear()}`)}const M={};return c.length>0&&(M.citations=c),Object.keys(f).length>0&&(M.citationsByCnty=f),Object.keys(z).length>0&&(M.citationsByPrd=z),Object.keys(w).length>0&&(M.citTouchPointsTrend=w,M.citTrendMonths=T),Object.keys(P).length>0&&(M.citTouchPointsTrendByCnty=P),A&&(M.citDerivedPeriod=A),M}function hr(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let l=null,r=0,u=-1,s=-1,p=-1,b=-1,h=-1,d=4;for(let m=0;m<Math.min(t.length,10);m++){const T=t[m];if(!T)continue;const S=T.some(F=>/^no$/i.test(String(F||"").trim())),A=T.some(F=>/^region$/i.test(String(F||"").trim())),M=T.some(F=>/domain|domian/i.test(String(F||"").trim())),x=T.some(F=>/^prd$/i.test(String(F||"").trim()));if(S||A||M||x){l=T,r=m+1;for(let F=0;F<T.length;F++){const _=String(T[F]||"").trim().toLowerCase();_==="prd"&&h<0&&(h=F),_==="no"&&u<0&&(u=F),_==="region"&&s<0&&(s=F),(_==="domain"||_==="domian")&&p<0&&(p=F),_==="type"&&b<0&&(b=F)}break}(String(T[0]||"").trim().startsWith("[")||!String(T[0]||"").trim())&&(r=m+1)}l||Pt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const g=u>=0||s>=0||h>=0;if(g)s<0&&(s=u>=0?u+1:h>=0?h+2:1),p<0&&(p=s+1),b<0&&(b=p+1),d=Math.max(p,b)+1;else if(p>=0)b=p+1,d=p+2;else{for(let m=r;m<Math.min(t.length,r+5);m++){const T=t[m];if(T){for(let S=0;S<Math.min(T.length,6);S++){const A=String(T[S]||"").trim();if(A.includes(".")&&A.length>3&&!a.test(A)){p=S,b=S+1,d=S+2;break}}if(p>=0)break}}p<0&&(p=0,b=1,d=2)}const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=m=>{const T=String(m||"").trim().toLowerCase();if(!T)return null;const S=T.match(/^(\d{1,2})월/);if(S){const M=parseInt(S[1]);if(M>=1&&M<=12)return c[M-1]}const A=T.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return A?A[1].charAt(0).toUpperCase()+A[1].slice(1).toLowerCase():null},f=[];if(l)for(let m=d;m<l.length;m++){const T=w(l[m]);T&&f.push({col:m,label:T})}const k=m=>/^(type|domain[_ ]type)$/i.test(String(m||"").trim()),v=m=>/^(domain|domian)$/i.test(String(m||"").trim()),C=m=>/^region$/i.test(String(m||"").trim()),E=[];l&&f.forEach(({col:m,label:T})=>{const S=m-1,A=m-2,M=m-3;M<0||k(l[S])&&v(l[A])&&C(l[M])&&E.push({regionCol:M,domainCol:A,typeCol:S,monthCol:m,label:T})});const j=[],B={},P={};let L="TTL";const z=m=>{let T=String(m||"").trim();if(!T)return"";const S=T.match(/^\[([^\]]+)\]/);S&&(T=S[1].trim()),T=T.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const A=T.indexOf("/");return A>=0&&(T=T.slice(0,A)),T};if(E.length>=2){const m={};for(let S=r;S<t.length;S++){const A=t[S];if(!A)continue;const M=h>=0?String(A[h]||"").trim():"";E.forEach(x=>{const F=z(A[x.domainCol]);if(!F||!F.includes("."))return;const _=String(A[x.monthCol]||"").replace(/,/g,"").trim(),I=parseFloat(_);if(isNaN(I)||I<=0)return;const R=String(A[x.regionCol]||"").trim().toUpperCase(),H=e[R]||R||"TTL",nt=String(A[x.typeCol]||"").trim(),lt=`${H}|${F}|${nt}|${M}`;m[lt]||(m[lt]={cnty:H,domain:F,type:nt,prd:M,monthScores:{}}),m[lt].monthScores[x.label]=(m[lt].monthScores[x.label]||0)+I})}Object.values(m).forEach(S=>{let A=0;for(let _=f.length-1;_>=0;_--){const I=S.monthScores[f[_].label];if(I>0){A=I;break}}if(A<=0)return;P[S.cnty]=(P[S.cnty]||0)+1,j.push({cnty:S.cnty,rank:P[S.cnty],domain:S.domain,type:S.type,citations:A,monthScores:S.monthScores,prd:S.prd});const M=`${S.cnty}|${S.domain}`,x=!S.prd||/^(ttl|total)$/i.test(S.prd);B[M]||(B[M]={cnty:S.cnty,domain:S.domain,type:S.type,months:{},_hasTtl:!1});const F=B[M];x?(F.type=S.type||F.type,F._hasTtl=!0,Object.entries(S.monthScores).forEach(([_,I])=>{I>0&&(F.months[_]=I)})):F._hasTtl||Object.entries(S.monthScores).forEach(([_,I])=>{I>0&&!F.months[_]&&(F.months[_]=I)})}),Object.values(B).forEach(S=>{delete S._hasTtl});const T={};j.forEach(S=>{T[S.cnty]||(T[S.cnty]=[]),T[S.cnty].push(S)}),Object.values(T).forEach(S=>{S.sort((A,M)=>M.citations-A.citations),S.forEach((A,M)=>{A.rank=M+1})})}else for(let m=r;m<t.length;m++){const T=t[m];if(!T)continue;const S=String(T[p]||"").trim(),A=String(T[b]||"").trim(),M=h>=0?String(T[h]||"").trim():"";if(!g&&(!S||!S.includes("."))){const I=String(T[p]||"").trim().toUpperCase(),R=e[I]||(o.includes(I)?I:null);R&&(!A||A==="")&&(L=R);continue}if(!S||!S.includes("."))continue;let x="TTL";if(g&&s>=0){const I=String(T[s]||"").trim().toUpperCase();x=e[I]||I}else g||(x=L);let F=0;if(f.length>0)for(let I=f.length-1;I>=0;I--){const R=String(T[f[I].col]||"").replace(/,/g,"").trim(),H=parseFloat(R);if(!isNaN(H)&&H>0){F=H;break}}else for(let I=T.length-1;I>=d;I--){const R=String(T[I]||"").replace(/,/g,"").trim();if(!R)continue;const H=parseFloat(R);if(!isNaN(H)&&H>0){F=H;break}}if(f.length>0){const I={};if(f.forEach(({col:R,label:H})=>{const nt=String(T[R]||"").replace(/,/g,"").trim(),lt=parseFloat(nt);!isNaN(lt)&&lt>0&&(I[H]=lt)}),Object.keys(I).length>0){const R=`${x}|${S}`;B[R]={cnty:x,domain:S,type:A,months:I}}}const _={};f.length>0&&f.forEach(({col:I,label:R})=>{const H=String(T[I]||"").replace(/,/g,"").trim(),nt=parseFloat(H);!isNaN(nt)&&nt>0&&(_[R]=nt)}),F>0&&(P[x]=(P[x]||0)+1,j.push({cnty:x,rank:P[x],domain:S,type:A,citations:F,monthScores:_,prd:M}))}const G={};if(j.length>0&&(G.citationsCnty=j),Object.keys(B).length>0){G.citDomainTrend=B;const m=f.map(T=>T.label).filter(T=>Object.values(B).some(S=>S.months[T]>0));G.citDomainMonths=m}return G}function ko(t,e){const o=_e(t,[/^type$/,/^(county|country)$/]);if(o<0)return Pt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const a=t[o];let l=-1,r=-1,u=-1,s=-1,p=4;for(let C=0;C<a.length;C++){const E=String(a[C]||"").trim().toLowerCase();E==="type"&&l<0&&(l=C),(E==="county"||E==="country")&&r<0&&(r=C),(E==="topic"||E==="topoc")&&u<0&&(u=C),E==="brand"&&s<0&&(s=C)}p=Math.max(l,r,u,s)+1;const b=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[],g=[o];for(let C=0;C<=o;C++)C!==o&&g.push(C);for(const C of g){if(d.length>0)break;const E=t[C];if(E)for(let j=p;j<E.length;j++){const B=String(E[j]||"").split(/\n/)[0].trim();B&&(b.test(B)||h.test(B))&&d.push({col:j,label:B})}}const c=t.slice(o+1),w=[];c.forEach(C=>{if(!C)return;const E=String(C[l]||"").trim(),j=Jt(C[r]),B=String(C[u]||"").trim(),P=String(C[s]||"").trim();if(!B||!P)return;const L={};let z=0;d.forEach(({col:G,label:m})=>{const T=Wt(C[G]);T>0&&(L[m]=T,z=T)}),(Object.keys(L).length>0||B)&&w.push({type:E,country:j,topic:B,brand:P,scores:L,latestScore:z})});const f=e==="weekly"?"weeklyPR":"monthlyPR",k=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",v={};return w.length>0&&(v[f]=w),d.length>0&&(v[k]=d.map(C=>C.label)),v}function So(t,e){const o=t.findIndex(v=>v?v.some(C=>/steakholders|stakeholders/i.test(String(C||"").trim()))||v.some(C=>/^type$/i.test(String(C||"").trim()))&&v.some(C=>/topoc|topic/i.test(String(C||"").trim())):!1);if(o<0)return Pt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const a=t[o];let l=-1,r=-1,u=-1,s=-1,p=4;for(let v=0;v<a.length;v++){const C=String(a[v]||"").trim().toLowerCase();(C==="steakholders"||C==="stakeholders")&&l<0&&(l=v),C==="type"&&r<0&&(r=v),(C==="country"||C==="county")&&u<0&&(u=v),(C==="topoc"||C==="topic")&&s<0&&(s=v)}p=Math.max(l,r,u,s)+1;const b=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,d=[];for(let v=p;v<a.length;v++){const C=String(a[v]||"").split(/\n/)[0].trim();C&&(b.test(C)||h.test(C))&&d.push({col:v,label:C})}const g=t.slice(o+1),c=[];g.forEach(v=>{if(!v)return;const C=String(v[l]||"").trim(),E=String(v[r]||"").trim(),j=Jt(v[u]),B=String(v[s]||"").trim();if(!B||!C)return;const P={};let L=0;d.forEach(({col:z,label:G})=>{const m=Wt(v[z]);m>0&&(P[G]=m,L=m)}),c.push({stakeholder:C,type:E,country:j,topic:B,scores:P,latestScore:L})});const w=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",f=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",k={};return c.length>0&&(k[w]=c),d.length>0&&(k[f]=d.map(v=>v.label)),k}function gr(t){const e=_e(t,[/^prompts?$/,/^country$/]);if(e<0)return Pt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],a={},l=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const p=String(o[s]||"").trim().toLowerCase();l.includes(p)&&!a[p]&&(a[p]=s)}const r=t.slice(e+1),u=[];return r.forEach(s=>{if(!s)return;const p=String(s[a.prompts]||"").trim();p&&u.push({country:Jt(s[a.country]),prompt:p,division:String(s[a.division]||"").trim(),category:String(s[a.category]||"").trim(),launched:String(s[a.launched]||"").trim(),branded:String(s[a.branded]||"").trim(),cej:String(s[a.cej]||"").trim(),topic:String(s[a.topic]||"").trim()})}),u.length>0?{appendixPrompts:u}:{}}const re={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function yr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(re).length}건`),{unlaunchedMap:{...re}};const e=_e(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,g)=>console.log(`  row${g}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(re).length}건`),{unlaunchedMap:{...re}};const o=t[e];let a=-1,l=-1,r=-1;for(let d=0;d<o.length;d++){const g=String(o[d]||"").trim().toLowerCase();a<0&&(g==="country"||g==="county")&&(a=d),l<0&&(g==="category"||g==="product"||g==="제품"||g==="카테고리")&&(l=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(g)&&(r=d)}if(a<0||l<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:l,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(re).length}건`),{unlaunchedMap:{...re}};const u=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...re};let p=0,b=0,h=0;return t.slice(e+1).forEach((d,g)=>{const c=e+1+g;try{if(!d){h++;return}const w=String(d[r]||"").trim();if(!w){h++;return}p++;const f=w.toLowerCase().replace(/\s+/g," ");if(!u.has(f)&&!u.has(f.replace(/\s/g,"")))return;const k=rr(d[a]),v=String(d[l]||"").trim();if(!k||!v){console.warn("[parseUnlaunched] row skipped",{rowIdx:c,raw:{country:d[a],category:d[l],status:d[r]},parsed:{country:k,rawCategory:v}}),h++;return}const C=v.toUpperCase(),E=Mo[C]||C;s[`${k}|${E}`]=!0,E!==C&&(s[`${k}|${C}`]=!0),b++}catch(w){let f;try{f={country:d==null?void 0:d[a],category:d==null?void 0:d[l],status:d==null?void 0:d[r]}}catch{f=d}console.warn("[parseUnlaunched] row error",{rowIdx:c,raw:f,error:w==null?void 0:w.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${b}건 + 디폴트 ${Object.keys(re).length}건 + skip ${h}건 / 총행 ${p} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function mr(t){const e=_e(t,[/^bu$/,/topic/]);if(e<0)return Pt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let a=-1,l=-1,r=-1,u=-1,s=-1;for(let h=0;h<o.length;h++){const d=String(o[h]||"").trim().toLowerCase();a<0&&d==="bu"&&(a=h),l<0&&d.includes("topic")&&d.includes("대시보드")&&(l=h),r<0&&(d==="explanation"||d==="설명")&&(r=h),u<0&&d.includes("기존")&&(u=h),s<0&&d.includes("topic")&&d.includes("row")&&(s=h)}l<0&&(l=1),r<0&&(r=2);const p=[];let b="";return t.slice(e+1).forEach(h=>{if(!h)return;const d=String(h[a]||"").trim();d&&(b=d);const g=String(h[l]||"").trim();if(!g)return;const c=String(h[r]||"").trim(),w=u>=0?String(h[u]||"").trim():"",f=s>=0?String(h[s]||"").trim():"";p.push({bu:b,topic:g,explanation:c,oldTopic:w,topicRow:f})}),p.length>0?{prTopicList:p}:{}}function br(t,e){var o;if(!tr(e,`parseSheetRows:${t}`))return{};try{if(t===bt.meta)return ir(e);if(t===bt.visSummary)return ar(e);if(t===bt.productMS||t===bt.productHS||t===bt.productES)return sr(e);if(t===bt.weeklyMS)return He(e,"MS");if(t===bt.weeklyHS)return He(e,"HS");if(t===bt.weeklyES)return He(e,"ES");if(t===bt.monthlyPR)return ko(e,"monthly");if(t===bt.weeklyPR)return ko(e,"weekly");if(t===bt.monthlyBrandPrompt)return So(e,"monthly");if(t===bt.weeklyBrandPrompt)return So(e,"weekly");if(t===bt.citPageType)return ur(e);if(t===bt.citTouchPoints)return fr(e);if(t===bt.citDomain)return hr(e);if(t===bt.appendix)return gr(e);if(t===bt.unlaunched)return yr(e);if(t===bt.prTopicList)return mr(e)}catch(a){return qe(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:a==null?void 0:a.message,stack:(o=a==null?void 0:a.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Pt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(bt)})}function xr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function vr(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,l=await fetch(a,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!l.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${l.status}).`);const r=await l.text(),u=await Uo(),s=u.read(r,{type:"string"}),p=s.Sheets[s.SheetNames[0]];return u.utils.sheet_to_json(p,{header:1,defval:""})}async function wr(t,e){var r,u;const o=Object.values(bt),a={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const l=await Promise.allSettled(o.map(s=>vr(t,s).then(p=>({name:s,rows:p}))));for(let s=0;s<o.length;s++){const p=o[s],b=l[s];if(e==null||e(`"${p}" 처리 중... (${s+1}/${o.length})`),b.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(r=b.reason)==null?void 0:r.message);continue}try{const{rows:h}=b.value,d=br(p,h);for(const[g,c]of Object.entries(d))g==="weeklyLabels"||g==="weeklyLabelsFull"?a[g]||(a[g]=c):Array.isArray(c)&&Array.isArray(a[g])?a[g]=[...a[g],...c]:c&&typeof c=="object"&&!Array.isArray(c)&&a[g]&&typeof a[g]=="object"&&!Array.isArray(a[g])?a[g]={...a[g],...c}:a[g]=c}catch(h){console.warn(`"${p}" 시트 처리 실패:`,h.message)}}if(!a.productsPartial&&a.weeklyAll&&a.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[p,b]of Object.entries(a.weeklyAll)){const h=b.Total||b.TTL||{},d=h.LG||h.lg||[],g=Object.entries(h).filter(([v])=>v!=="LG"&&v!=="lg"),c=d.length?d[d.length-1]:0,w=d.length>=5?d[0]:0;let f="",k=0;for(const[v,C]of g){const E=C.length?C[C.length-1]:0;E>k&&(k=E,f=v)}c>0&&s.push({id:p,bu:Do[p]||"HS",kr:$e[p]||p,category:p,date:((u=a.meta)==null?void 0:u.period)||"",score:c,prev:w,vsComp:k,compName:f,allScores:{LG:c,...f?{[f]:k}:{}}})}if(s.length&&(a.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(p=>`${p.id}=${p.score}`).join(", "))),!a.productsCnty){const p=[];for(const[b,h]of Object.entries(a.weeklyAll)){const d=$e[b]||b;for(const[g,c]of Object.entries(h)){if(g==="Total"||g==="TTL")continue;const w=c.LG||c.lg||[],f=w.length?w[w.length-1]:0;if(f<=0)continue;const k=w.length>=2?w[0]:0;let v="",C=0;const E={LG:f};for(const[B,P]of Object.entries(c)){if(B==="LG"||B==="lg")continue;const L=P.length?P[P.length-1]:0;E[B]=L,L>C&&(C=L,v=B)}const j=+(f-C).toFixed(1);p.push({product:d,country:g,score:f,prev:k,compName:v,compScore:C,gap:j,allScores:E})}}p.length&&(a.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(a.weeklyLabels&&a.weeklyLabels.length&&a.weeklyLabels.every((p,b)=>p===`W${b+1}`)){const p=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(b=>String(b).split(/\n/)[0].trim().toUpperCase()).filter(b=>/^W\d+/.test(b));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),a.weeklyLabels=p;const b=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(h=>{const d=String(h).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(h=>/^W\d+/.test(h));b.length&&(a.weeklyLabelsFull=b)}}if(a._syncIssues=er(a,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:a._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return a}const ut={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:$,outline:"none",boxSizing:"border-box"};function Cr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),l=Math.floor(a/24);return l>=1?`${l}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function kr({savedAt:t,ageMs:e,stale:o,style:a}){const l=t==null,r=l?"#1E293B":o?"#7F1D1D":"#064E3B",u=l?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=l?"#334155":o?"#B91C1C":"#047857",p=l?"○":o?"⚠️":"●",b=l?"동기화 정보 없음":`데이터 최신화: ${Cr(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:u,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:$,whiteSpace:"nowrap",...a||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),b]})}function Sr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Gt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Vt="#CF0652",ie="#94A3B8",je={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Wo={LG:Vt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Fo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Je={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Fr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Pe={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Ar={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Er={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},Ze=90;function Qe(t,e){const o=je[e]||je.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Tr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Br(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Ye(t){const e=String(t||"").trim().toUpperCase();return Pe[e]||t}function Lr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Ar[o]||Pe[o]||t:Er[o]||Pe[o]||t}let $r=0;function Ao(t,e,o,a,l,r={}){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const u=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,s=r.baselineLabel||"",p=r.labelOffsetY||0,b=r.lineOffsetY||0,h=$r++,d={t:18,r:10,b:20,l:10},g=o-d.l-d.r,c=a-d.t-d.b,w=t.filter(m=>m!=null);if(!w.length){let m=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const T=t.length,S=T>1?T-1:1;return m+=t.map((A,M)=>`<text x="${(d.l+M/S*g).toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Gt}">${e[M]||""}</text>`).join(""),m+="</svg>",m}const f=Math.min(...w)-1,k=Math.max(...w)+1,v=k-f||1,C=t.length,E=C>1?C-1:1,j=t.map((m,T)=>d.l+T/E*g),B=[];t.forEach((m,T)=>{m!=null&&B.push({x:j[T],y:d.t+(1-(m-f)/v)*c,v:m,idx:T})});let P=`<svg viewBox="0 0 ${o} ${a+12}" width="100%" height="${a+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const L=u>0?B.filter(m=>m.idx<u):[],z=u>0?B.filter(m=>m.idx>=u):B,G="#64748B";if(z.length>=2){const m=z.map((S,A)=>`${A?"L":"M"}${S.x.toFixed(1)},${S.y.toFixed(1)}`).join(" "),T=m+` L${z[z.length-1].x.toFixed(1)},${d.t+c} L${z[0].x.toFixed(1)},${d.t+c} Z`;P+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${l}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${l}" stop-opacity="0.03"/>
    </linearGradient></defs>`,P+=`<path d="${T}" fill="url(#lg${h})"/>`,P+=`<path d="${m}" stroke="${l}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(L.length>=2){const m=L.map((T,S)=>`${S?"L":"M"}${T.x.toFixed(1)},${T.y.toFixed(1)}`).join(" ");P+=`<path d="${m}" stroke="${G}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(P+=B.map(m=>{const T=u>0&&m.idx<u;return u>0&&m.idx===u?`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="4" fill="#000" stroke="${l}" stroke-width="3"/>`:`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${T?G:l}" stroke-width="2" opacity="${T?.85:1}"/>`}).join(""),P+=B.map(m=>{const S=u>0&&m.idx<u?G:l;return`<text x="${m.x.toFixed(1)}" y="${Math.max(m.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${S}" font-family="${Gt}">${m.v.toFixed(1)}</text>`}).join(""),u>0&&s){const m=j[u];P+=`<line x1="${m.toFixed(1)}" y1="${(d.t+b).toFixed(1)}" x2="${m.toFixed(1)}" y2="${(d.t+c+b).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const T=m>o*.7,S=(T?d.t+c+1:d.t+8)+p;P+=`<text x="${(T?m-5:m+5).toFixed(1)}" y="${S.toFixed(1)}" text-anchor="${T?"end":"start"}" font-size="9" fill="#64748B" font-family="${Gt}">${s}</text>`}return P+=t.map((m,T)=>`<text x="${j[T].toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Gt}">${e[T]||""}</text>`).join(""),P+="</svg>",P}function we(t,e){return Wo[t]||Fo[e%Fo.length]}function Vo(t,e,o,a,l={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const u=l.fadeBeforeIdx!=null?l.fadeBeforeIdx:-1,s=l.baselineLabel||"";let p=1/0,b=-1/0;if(r.forEach(C=>(t[C]||[]).forEach(E=>{E!=null&&(E<p&&(p=E),E>b&&(b=E))})),!isFinite(p))return"";const h=Math.max((b-p)*.15,2);p=Math.max(0,p-h),b=Math.min(100,b+h);const d=b-p||1,g=e.length,c=8,w=8,f=a-c-w,k="#64748B";let v="";for(let C=0;C<=4;C++){const E=c+C/4*f;v+=`<line x1="0" y1="${E.toFixed(1)}" x2="${o}" y2="${E.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((C,E)=>{const j=t[C]||[],B=we(C,E),P=C==="LG",L=P?2.5:1.5,z=P?1:.7,G=[];if(j.forEach((A,M)=>{if(A==null)return;const x=(M+.5)/g*o,F=c+(1-(A-p)/d)*f;G.push({x,y:F,v:A,idx:M})}),!G.length)return;const m=u>0?G.filter(A=>A.idx<u):[],T=u>0?G.filter(A=>A.idx>=u):G;function S(A,M,x,F){if(A.length>=2){const _=A.map((I,R)=>`${R?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ");v+=`<path d="${_}" stroke="${M}" fill="none" stroke-width="${L}" stroke-linecap="round" stroke-linejoin="round" opacity="${x}"/>`}A.forEach(_=>{F&&_.idx===u||(v+=`<circle cx="${_.x.toFixed(1)}" cy="${_.y.toFixed(1)}" r="${P?3.5:2.5}" fill="#fff" stroke="${M}" stroke-width="${P?2:1.5}" opacity="${x}"/>`)})}if(S(m,k,.85,!1),S(T,B,z,P&&u>0),P&&u>0){const A=G.find(M=>M.idx===u);A&&(v+=`<circle cx="${A.x.toFixed(1)}" cy="${A.y.toFixed(1)}" r="4.5" fill="#000" stroke="${B}" stroke-width="3"/>`)}}),u>0&&s){const C=(u+.5)/g*o;v+=`<line x1="${C.toFixed(1)}" y1="${c}" x2="${C.toFixed(1)}" y2="${c+f}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const E=C>o*.7;v+=`<text x="${(E?C-5:C+5).toFixed(1)}" y="${(c+12).toFixed(1)}" text-anchor="${E?"end":"start"}" font-size="11" fill="#64748B" font-family="${Gt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${v}</svg>`}function Rr({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:l,monthlyVis:r,total:u,meta:s,wLabels:p}){const b={monthlyVis:r};return`
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
var _PROD_TO_UL=${h(Ce)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((b==null?void 0:b.monthlyVis)||[])};
var _total=${h(u)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(p)};`})()}
${(()=>{const h=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(Wo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Vt}';
var _FONT=${h(Gt)};
var _COMP='${ie}';
var _REGIONS=${h(Object.fromEntries(Object.entries(Je).map(([d,g])=>[d,g.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Je).map(([h,d])=>[h,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${Ze};

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
`}const Ir=["audio","rac","aircare"];function Ko(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Ir.includes(String(e).toLowerCase())}function jr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function De(t,e){if(!Ko(t)||!e)return-1;const o=jr(t);if(o>0){const a=e.findIndex(l=>{const r=String(l||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(a>=0)return a}return e.findIndex(a=>{const l=String(a||"").trim();return/^Apr(il)?$/i.test(l)||l==="4월"})}const Me={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Pr(t){const e=Me[t]||Me.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function qo(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),a=Me[e]||Me.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.racair}</p>`:""}function Dr(t,e,o,a,l,r,u){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(b=>{const h=t.filter(g=>g.bu===b);if(!h.length)return"";const d=h.map(g=>{var m,T;const c=((m=e[g.id])==null?void 0:m.Total)||{},w=Object.keys(c).sort((S,A)=>{var F,_;if(S==="LG")return-1;if(A==="LG")return 1;const M=((F=c[S])==null?void 0:F[c[S].length-1])||0;return(((_=c[A])==null?void 0:_[c[A].length-1])||0)-M});if(!w.length)return"";const f=Qe(g.status,l),k=(T=c.LG)==null?void 0:T[c.LG.length-1],v=w.map((S,A)=>{const M=we(S,A),x=S==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${M};opacity:${x?1:.7}"></i><span style="font-size:13px;color:${x?"#1A1A1A":"#94A3B8"};font-weight:${x?700:400}">${S}</span></span>`}).join(""),C=o.length,E=`<colgroup><col style="width:${Ze}px">${o.map(()=>"<col>").join("")}</colgroup>`,j=De(g,o),B=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:8px 0;border:0">${Vo(c,o,C*80,180,{fadeBeforeIdx:j,baselineLabel:j>0?"*Baseline 재설정":""})}</td></tr>`,P=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:4px 0 6px;border:0">${v}</td></tr>`,L=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(S=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${S}</th>`).join("")}</tr>`,z=w.map((S,A)=>{const M=we(S,A),x=S==="LG",F=o.map((_,I)=>{var H;const R=(H=c[S])==null?void 0:H[I];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${R!=null?x?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${x?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${R!=null?R.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${x?"#FFF8F9":A%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${x?700:500};color:${M};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${M};margin-right:4px;vertical-align:0"></i>${S}</td>${F}</tr>`}).join(""),G=to(g.id||g.category,r);return`<div class="trend-row${G?" is-unlaunched":""}" data-prodid="${g.id||g.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Vt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${eo(g,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${G?"#F1F5F9":f.bg};color:${G?"#64748B":f.color};border:1px solid ${G?"#CBD5E1":f.border}">${G?l==="en"?"Unlaunched":"미출시":f.label}</span>
          ${k!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${k.toFixed(1)}%</span>`:""}
          ${g.compName?`<span style="font-size:14px;color:#94A3B8">vs ${g.compName} ${g.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Gt}">${E}<tbody>${B}${P}${L}${z}</tbody></table></div>
        ${qo(g,l)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${b}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${b}</span></div>
      ${d}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${l==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${u||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${l==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function Mr(t,e,o,a,l,r){if(!e||!e.length)return"";const u=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function b(c){const w=String(c).match(/(\d{1,2})월/);if(w)return parseInt(w[1])-1;const f=String(c).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return f?p[f[1].toLowerCase()]:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],d=s.slice(),g=u.map(c=>{const w=t.filter(k=>k.bu===c);if(!w.length)return"";const f=w.map(k=>{const v=k.monthlyScores||[];let C={};if(v.length>=2){const x=new Set;if(v.forEach(F=>{F.allScores&&Object.keys(F.allScores).forEach(_=>x.add(_))}),x.forEach(F=>{C[F]=h.map(_=>{var R;const I=v.find(H=>b(H.date)===_);return((R=I==null?void 0:I.allScores)==null?void 0:R[F])??null})}),!x.size&&(C.LG=h.map(F=>{const _=v.find(I=>b(I.date)===F);return _?_.score:null}),k.vsComp>0)){const F=h.map(_=>{const I=v.find(R=>b(R.date)===_);return(I==null?void 0:I.comp)??null});F.some(_=>_!=null)&&(C[k.compName||"Comp"]=F)}}else{const x=e.filter(R=>R.division===c&&(R.country==="TOTAL"||R.country==="TTL")),F={};x.forEach(R=>{const H=b(R.date);H>=0&&(F[H]=R)});const _=h.map(R=>{var H;return((H=F[R])==null?void 0:H.lg)||null}),I=h.map(R=>{var H;return((H=F[R])==null?void 0:H.comp)||null});C={LG:_},I.some(R=>R!=null&&R>0)&&(C.Samsung=I)}const E=Object.keys(C).sort((x,F)=>{if(x==="LG")return-1;if(F==="LG")return 1;const _=(C[x]||[]).filter(R=>R!=null).pop()||0;return((C[F]||[]).filter(R=>R!=null).pop()||0)-_});if(!E.length)return"";const j=Qe(k.status,a),B=(C.LG||[]).filter(x=>x!=null).pop(),P=E.map((x,F)=>{const _=we(x,F),I=x==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${_};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${x}</span></span>`}).join(""),L=d.length,z=`<colgroup><col style="width:${Ze}px">${d.map(()=>"<col>").join("")}</colgroup>`,G=De(k,d),m=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:8px 0;border:0">${Vo(C,d,L*80,180,{fadeBeforeIdx:G,baselineLabel:G>0?"*Baseline 재설정":""})}</td></tr>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:4px 0 6px;border:0">${P}</td></tr>`,S=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(x=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${x}</th>`).join("")}</tr>`,A=E.map((x,F)=>{const _=we(x,F),I=x==="LG",R=d.map((H,nt)=>{var st;const lt=(st=C[x])==null?void 0:st[nt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${lt!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${lt!=null?lt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":F%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${_};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${_};margin-right:4px;vertical-align:0"></i>${x}</td>${R}</tr>`}).join(""),M=to(k.id||k.category,l);return`<div class="trend-row${M?" is-unlaunched":""}" data-prodid="${k.id||k.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Vt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${eo(k,l)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${M?"#F1F5F9":j.bg};color:${M?"#64748B":j.color};border:1px solid ${M?"#CBD5E1":j.border}">${M?a==="en"?"Unlaunched":"미출시":j.label}</span>
          ${B!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${B.toFixed(1)}%</span>`:""}
          ${k.compName?`<span style="font-size:14px;color:#94A3B8">vs ${k.compName} ${k.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Gt}">${z}<tbody>${m}${T}${S}${A}</tbody></table></div>
        ${qo(k,a)}
      </div>`}).join("");return f?`<div class="bu-group" data-bu="${c}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${c}</span></div>
      ${f}
    </div>`:""}).join("");return g.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${g}</div>
  </div>`:""}function Jo(){return""}function Nr(t,e,o,a){const l=+(t.score-t.prev).toFixed(1),r=t.vsComp||0,u=+(t.score-r).toFixed(1),s=l>0?"▲":l<0?"▼":"─",p=l>0?"#22C55E":l<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Vt}"></div>
          </div>
          ${r>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(r,100)}%;background:${ie}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Vt}"></i> LG ${t.score}%</span>
            ${r>0?`<span><i style="background:${ie}"></i> Samsung ${r}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${r>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${r}%</span>
          <span class="hero-comp-gap" style="color:${u>=0?"#22C55E":"#EF4444"}">Gap ${u>=0?"+":""}${u}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function be(t,e){const o=Ce[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function to(t,e){return Fr.every(o=>{const a=Ce[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function eo(t,e){return be(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Eo(t,e,o,a,l,r,u,s,p){if(!t.length)return"";const h=["MS","HS","ES"].map(d=>{const g=t.filter(w=>w.bu===d);if(!g.length)return"";const c=g.map(w=>{var ct,pt;const f=w.weekly||[],k=f.filter(O=>O!=null),v=w.weeklyScore||(k.length>0?k[k.length-1]:w.score),C=w.monthlyScore||w.score,E=v,j=((ct=s==null?void 0:s[w.id])==null?void 0:ct.Total)||((pt=s==null?void 0:s[w.id])==null?void 0:pt.TTL)||{};let B=0;Object.entries(j).forEach(([O,N])=>{if(O==="LG"||O==="lg")return;const W=Array.isArray(N)&&N.length?N[N.length-1]:0;W>B&&(B=W)});const P=w.vsComp||0,L=B>0?v/B*100:P>0?v/P*100:100,z=P>0?C/P*100:100,G=Math.round(L*10)/10,m=Math.round(z*10)/10,T=G,S=L>=100?"lead":L>=80?"behind":"critical",A=Qe(S,a),M=k.length>=1?k[k.length-1]:null,x=k.length>=2?k[k.length-2]:null,F=M!=null&&x!=null?+(M-x).toFixed(1):null,_=F>0?"▲":F<0?"▼":"─",I=F>0?"#22C55E":F<0?"#EF4444":"#94A3B8",R=S==="critical"?"#BE123C":S==="behind"?"#D97706":"#15803D",H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function lt(O){const N=String(O).match(/(\d{1,2})월/);if(N)return parseInt(N[1])-1;const W=String(O).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return W?nt[W[1].toLowerCase()]:-1}let st=w.monthlyScores||[];if(st.length<2&&u.length>0){const O=u.filter(W=>W.division===w.bu&&(W.country==="TOTAL"||W.country==="TTL")),N={};O.forEach(W=>{const gt=lt(W.date);gt>=0&&(N[gt]={date:W.date,score:W.lg,comp:W.comp})}),st=Object.keys(N).sort((W,gt)=>W-gt).map(W=>N[W])}const it=st.length>0?st.map(O=>{const N=lt(O.date);return N>=0?H[N]:O.date}):["M-3","M-2","M-1","M0"],at=st.length>0?st.map(O=>O.score):[null,null,null,w.score],xt=st.length>=2?+(st[st.length-1].score-st[st.length-2].score).toFixed(1):null,Qt=xt>0?"▲":xt<0?"▼":"─",$t=xt>0?"#22C55E":xt<0?"#EF4444":"#94A3B8",Dt=T,Ct=Dt>=100?"#15803D":Dt>=80?"#D97706":"#BE123C",Bt=w.weeklyPrev||(k.length>=5?k[k.length-5]:k[0]||0),kt=v&&Bt?+(v-Bt).toFixed(1):null,vt=C&&(w.monthlyPrev||w.prev)?+(C-(w.monthlyPrev||w.prev)).toFixed(1):null,Mt=be(w.id||w.category,r),Ut=to(w.id||w.category,r),Z=Ut?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:A;return`<div class="prod-card${Ut?" is-unlaunched":""}" data-prodid="${w.id||w.category}" data-ws="${v.toFixed(1)}" data-ms="${C.toFixed(1)}" data-wr="${G}" data-mr="${m}" data-wmom="${kt??""}" data-mmom="${vt??""}" style="border-color:${Z.border}">
        <div class="prod-head">
          <span class="prod-name">${eo(w,r)}</span>
          ${Mt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${Z.bg};color:${Z.color};border-color:${Z.border}">${Z.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${E.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${I}">${F!=null?`WoW ${_} ${Math.abs(F).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${$t}">${Ko(w)||xt==null?"":`MoM ${Qt} ${Math.abs(xt).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const O=l.slice(-10),N=De(w,O),W=String(w.id||"").toLowerCase(),gt=W==="aircare"?30:W==="rac"?20:0;return Ao(f.slice(-10),O,300,90,R,{fadeBeforeIdx:N,baselineLabel:N>0?"*Baseline 재설정":"",labelOffsetY:gt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const O=De(w,it),W=String(w.id||"").toLowerCase()==="audio";return Ao(at,it,300,90,R,{fadeBeforeIdx:O,baselineLabel:O>0?"*Baseline 재설정":"",labelOffsetY:W?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${w.compName}`:`${w.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Dt,120)}%;background:${Ct}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Ct}">${Dt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${g.length}${o.categories}</span></div>
      <div class="prod-grid">${c}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Jo(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const d=t.filter(g=>be(g.id||g.category,r).length>0).map(g=>`${(g.id||"").toLowerCase()==="audio"||g.kr==="오디오"?"Audio-Sound Suite":g.kr}: ${be(g.id||g.category,r).map(c=>Lr(c,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Pr(a)})()}</div>
  </div>`}function To(t,e,o,a){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),u=Ce[r]||(r||"").toUpperCase(),s=a&&a[`${t.country}|${u}`],p=Br(t.score,t.compScore),b=s?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),d=s?"#64748B":h>=0?"#15803D":"#BE123C",g=130,c=["TCL","HISENSE","HAIER"];let w="",f=0;t.allScores&&Object.entries(t.allScores).forEach(([B,P])=>{const L=String(B).toUpperCase();c.some(G=>L.includes(G))&&P>f&&(w=B,f=P)});const k=Math.max(e,f),v=Math.max(3,Math.round(t.score/k*g)),C=t.compScore>0?Math.max(3,Math.round(t.compScore/k*g)):0,E=f>0?Math.max(3,Math.round(f/k*g)):0,j="#9333EA";return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${b}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${b}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ie}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${C}px;background:${ie}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${f>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${j}">${f.toFixed(1)}</span>
        <div class="vbar-col" style="height:${E}px;background:${j}"></div>
        <span class="vbar-col-name" style="color:${j}">${w.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${h>=0?"+":""}${h}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Bo(t,e,o,a,l,r){if(!t||!t.length)return"";const u=new Map;t.forEach(c=>{u.has(c.product)||u.set(c.product,[]),u.get(c.product).push(c)});const s=e.cntyProductFilter||{},p=[...u.entries()].filter(([c])=>s[c]!==!1).map(([c,w])=>{const f=Math.max(...w.map(v=>Math.max(v.score,v.compScore)),1),k=w.map(v=>To(v,f,Ye(v.country),l)).join("");return`<div class="cnty-product" data-group-product="${c}"><div class="bu-header"><span class="bu-label">${c}</span></div><div class="vbar-chart">${k}</div></div>`}).join(""),b=new Map;t.forEach(c=>{b.has(c.country)||b.set(c.country,[]),b.get(c.country).push(c)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],g=h.filter(c=>b.has(c)).concat([...b.keys()].filter(c=>!h.includes(c))).map(c=>{const w=b.get(c);if(!w)return"";const f=Math.max(...w.map(v=>Math.max(v.score,v.compScore)),1),k=w.map(v=>To(v,f,v.product,l)).join("");return`<div class="cnty-product" data-group-country="${c}"><div class="bu-header"><span class="bu-label">${Ye(c)}</span></div><div class="vbar-chart">${k}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ie}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${Jo(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${g}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!l||!Object.keys(l).length)return"";const c={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},f=[...new Set(t.map(k=>k.product))].map(k=>{const v=c[k]||String(k).toLowerCase(),C=be(v,l),E=v==="audio"?"Audio-Sound Suite":k;return C.length?`${E}: ${C.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return f.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${f.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Lo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function _r(t){const e=Lo[t]||Lo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(l=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${l.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${l.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Or(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",a=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",l=e==="en"?"All":"전체",r=e==="en"?"Total":"총",u=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",p=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],b={};p.forEach(c=>{const w=new Set;t.forEach(f=>{f[c.key]&&w.add(f[c.key])}),b[c.key]=[...w].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(b).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),g=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${a}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${r} ${t.length}${u?" "+u:""}</span>
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
      ${b[c.key].map(w=>`<div onclick="_plFilter('${c.key}','${w.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${w}</div>`).join("")}
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
      document.getElementById('pl-count').textContent='${r} '+f.length+'${u?" "+u:""}';
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
  <\/script>`}function $o(t,e,o,a,l,r){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const u=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let m=0;m<12;m++)s.push("w"+(5+m));const p=[...new Set(t.map(m=>m.topic))].filter(Boolean),b=[...new Set(t.map(m=>m.type))].filter(Boolean),h=[...new Set(t.map(m=>m.country))].filter(m=>m&&m!=="TTL"),d=u.filter(m=>h.includes(m)).concat(u.filter(m=>!h.includes(m))),g=JSON.stringify(t).replace(/</g,"\\u003c"),c=JSON.stringify(s),w=JSON.stringify(p),f=JSON.stringify(b),k=JSON.stringify(d),v=72;function C(m){const T={};return m&&String(m).split(`
`).forEach(S=>{const A=S.indexOf("=");if(A>0){const M=S.slice(0,A).trim(),x=S.slice(A+1).trim();M&&(T[M]=x)}}),T}const E=C(a==null?void 0:a.prTopicPromptsRaw);l&&l.length&&p.forEach(m=>{if(!E[m]){const T=l.find(S=>S.topic===m&&S.country==="US");T&&(E[m]=T.prompt)}});const j=(r==null?void 0:r.prTopicList)||[],B={},P={};j.forEach(m=>{[m.topic,m.topicRow,m.oldTopic].filter(Boolean).map(S=>S.trim()).forEach(S=>{m.explanation&&!B[S]&&(B[S]=m.explanation),m.bu&&!P[S]&&(P[S]=m.bu)})});const z={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...B,...C(a==null?void 0:a.prTopicDescsRaw)},G={};return p.forEach(m=>{const T=P[m];if(T)G[m]=T;else{const S=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];G[m]=S.some(A=>m.toLowerCase().includes(A.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Gt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Vt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${g},W=${c},TP=${w},TY=${f},CN=${k};
    var CW=${v};
    var TOPIC_CAT=${JSON.stringify(G)};
    var TOPIC_PROMPT=${JSON.stringify(E).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(z).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(j).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Pe)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Vt}',COMP='${ie}';
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
  <\/script>`}function Ro(t,e,o,a,l,r){const u=(t||[]).filter(f=>!0);if(!u.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let f=0;f<12;f++)s.push("w"+(5+f));const b=[...new Set(u.map(f=>f.stakeholder))].filter(Boolean).map(f=>({stakeholder:f,topics:[...new Set(u.filter(k=>k.stakeholder===f).map(k=>k.topic))].filter(Boolean)})),h=72,d=JSON.stringify(u).replace(/</g,"\\u003c"),g=JSON.stringify(s),c=JSON.stringify(b),w="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Gt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${l||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Vt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${w}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${g},GROUPS=${c};
    var CW=${h},RED='${Vt}';
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
      var el=document.getElementById('${w}-sections');if(!el)return;
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
  <\/script>`}function zr(t,e,o,a,l,r,u,s,p,b,h,d,g,c){var vt,Mt,Ut;o=(o||[]).map(U=>({...U,weekly:(U.weekly||[]).map(Z=>Z??0),monthly:(U.monthly||[]).map(Z=>Z??0)})),b&&typeof b=="object"&&Object.values(b).forEach(U=>{!U||typeof U!="object"||Object.values(U).forEach(Z=>{!Z||typeof Z!="object"||Object.keys(Z).forEach(ct=>{const pt=Z[ct];Array.isArray(pt)&&(Z[ct]=pt.map(O=>O??0))})})});const w={aircare:"Xiaomi"};o=o.map(U=>{const Z=w[(U.id||"").toLowerCase()];if(!Z||!U.allScores)return U;const ct=Object.entries(U.allScores).find(([N])=>N.toLowerCase()===Z.toLowerCase()&&N.toLowerCase()!=="lg");if(!ct)return U;const pt=ct[1];if(!(pt>0))return U;const O=Math.round(U.score/pt*100);return{...U,compName:ct[0],vsComp:pt,compRatio:O,status:O>=100?"lead":O>=80?"behind":"critical"}});const f=(g==null?void 0:g.visibilityOnly)||!1,k=(g==null?void 0:g.includePromptList)||!1,v=(g==null?void 0:g.includeReadability)===!0,C=(c==null?void 0:c.unlaunchedMap)||{},j=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,B=je[r]||je.ko;let P;if(p&&p.length)P=p.map(U=>String(U).toUpperCase().startsWith("W")?U.toUpperCase():U);else{const U=b?Math.max(...Object.values(b).flatMap(ct=>Object.values(ct).flatMap(pt=>Object.values(pt).map(O=>(O==null?void 0:O.length)||0))),0):0,Z=t.weekStart||Math.max(1,U-11);P=Array.from({length:Math.max(12,U)},(ct,pt)=>`W${Z+pt}`)}const L=new Set;b&&Object.values(b).forEach(U=>Object.keys(U).forEach(Z=>{Z!=="Total"&&L.add(Z)})),u&&u.forEach(U=>{U.country&&U.country!=="TTL"&&L.add(U.country)});const z=[...L].sort(),G=r==="en"?"All":"전체",m=["MS","HS","ES"],T=o.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${U.bu}" value="${U.id}" checked onchange="onFilterChange()"><span>${U.kr}</span></label>`).join(""),S=m.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${U}" checked onchange="onBuChange('${U}')"><span>${U}</span></label>`).join(""),A=z.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${U}" checked onchange="onFilterChange()"><span>${Ye(U)}</span></label>`).join(""),M=Object.entries(Je).map(([U,Z])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${U}" checked onchange="onRegionChange('${U}')"><span>${Z.labelEn}</span></label>`).join(""),x=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,F=g!=null&&g.weeklyLabelsFull&&g.weeklyLabelsFull.length===P.length?g.weeklyLabelsFull:P,_=P.map((U,Z)=>`<option value="${Z}"${Z===P.length-1?" selected":""}>${F[Z]||U}</option>`).join(""),I=(((vt=o[0])==null?void 0:vt.monthlyScores)||[]).map(U=>{const Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ct=String(U.date).match(/(\d{1,2})월/),pt=String(U.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ct?Z[parseInt(ct[1])-1]:pt?pt[1].charAt(0).toUpperCase()+pt[1].slice(1).toLowerCase():U.date}),R=I.map((U,Z)=>`<option value="${Z}"${Z===I.length-1?" selected":""}>${U}</option>`).join(""),H=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Gt}`,nt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${x}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${P[P.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${P.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${H}">${_}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${H}"${I.length>0?"":" disabled"}>${R||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${G}</span></label>
        ${S}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${G}</span></label>
        ${T}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${G}</span></label>
        ${M}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${G}</span></label>
        ${A}
      </div>
    </div>
  </div>`,st=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Tr(t.noticeText)}</div></div>`:"",t.showTotal!==!1?Nr(e,t,B,r):""].join(""),it=[];if(b&&Object.keys(b).length){const U=$e;Object.entries(b).forEach(([Z,ct])=>{const pt=o.find(N=>N.id===Z),O=(pt==null?void 0:pt.kr)||U[Z]||Z;Object.entries(ct).forEach(([N,W])=>{if(N==="Total"||N==="TTL"||N==="TOTAL")return;const gt=W.LG||W.lg||[],mt=gt.length>0?gt[gt.length-1]:0;if(mt<=0)return;let Lt="",Rt=0;Object.entries(W).forEach(([At,St])=>{if(At==="LG"||At==="lg")return;const Ht=Array.isArray(St)&&St.length?St[St.length-1]:0;Ht>Rt&&(Rt=Ht,Lt=At)});const Yt=+(mt-Rt).toFixed(1),wt={};Object.entries(W).forEach(([At,St])=>{if(Array.isArray(St)&&St.length){const Ht=St[St.length-1];Ht!=null&&(wt[At]=Ht)}}),it.push({product:O,country:N,score:mt,compName:Lt,compScore:Rt,gap:Yt,allScores:wt})})})}const at=((Mt=g==null?void 0:g.weeklyLabelsFull)==null?void 0:Mt[g.weeklyLabelsFull.length-1])||P[P.length-1]||"",xt=at?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${at} ${r==="en"?"data":"기준"}</span>`:"",Qt=[st,t.showProducts!==!1?Eo(o,t,B,r,P,C,(g==null?void 0:g.monthlyVis)||[],b,xt):"",`<div id="trend-container">${Dr(o,b,P,B,r,C,xt)}</div>`,t.showCnty!==!1?Bo(it,t,B,r,C,xt):""].join(""),$t=o.map(U=>{const Z=U.monthlyScore||U.score,ct=U.monthlyPrev||U.prev,pt=U.vsComp||0,O=pt>0?Z/pt*100:100;return{...U,score:Z,prev:ct,weeklyScore:Z,weeklyPrev:ct,monthlyScore:Z,monthlyPrev:ct,weekly:(U.monthlyScores||[]).map(N=>N.score),status:O>=100?"lead":O>=80?"behind":"critical"}}),Dt=(((Ut=o[0])==null?void 0:Ut.monthlyScores)||[]).map(U=>{const Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ct=String(U.date).match(/(\d{1,2})월/),pt=String(U.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ct?Z[parseInt(ct[1])-1]:pt?pt[1].charAt(0).toUpperCase()+pt[1].slice(1).toLowerCase():U.date}),Ct=(g==null?void 0:g.monthlyVis)||[],Bt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",kt=[st,t.showProducts!==!1?Eo($t,t,B,r,Dt.length?Dt:["Feb","Mar"],C,Ct,{},Bt):"",`<div id="monthly-trend-container">${Mr($t,Ct,B,r,C,Bt)}</div>`,t.showCnty!==!1?Bo(u,t,B,r,C,Bt):""].join("");return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Sr({FONT:Gt,RED:Vt,COMP:ie})}</style>
</head>
<body>
${f?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${nt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Qt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${kt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${$o(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Ro(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    ${nt}
    <div id="bu-weekly-content" class="dash-container">${Qt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${kt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${$o(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Ro(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${v?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${B.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${j}
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
${Rr({lang:r,weeklyAll:b,products:o,productsCnty:u,ulMap:C,monthlyVis:g==null?void 0:g.monthlyVis,total:e,meta:t,wLabels:P})}
<\/script>
</body>
</html>`}function Gr(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),a=t.filter(p=>p.status==="critical"),l=[...t].sort((p,b)=>b.score-p.score)[0],r=[...t].sort((p,b)=>p.score-b.score)[0],u=(t.reduce((p,b)=>p+b.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${u}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),l&&s.push(`가장 높은 카테고리는 ${l.kr} ${l.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(l.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?s.push(`취약 카테고리(${a.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Ur(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Hr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const tt=bt,Wr={citation:[tt.meta,tt.citTouchPoints,tt.citDomain,tt.citPageType],"weekly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],"monthly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],dashboard:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citDomain,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.weeklyPR,tt.weeklyBrandPrompt,tt.appendix,tt.unlaunched,tt.prTopicList],newsletter:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.unlaunched]};function Vr(t){return Wr[t]||[]}const Io="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Kr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function qr({url:t,downloadName:e="sheet",mode:o}){const[a,l]=q.useState(!1),[r,u]=q.useState(""),s=o?Vr(o):[],p=s.length?"zip":"xlsx",b=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const d=Kr(t);if(!d){u("ERROR: 동기화 URL 비어있거나 잘못됨");return}l(!0),u("");try{const g=new URLSearchParams({id:d,name:e});s.length&&g.set("tabs",s.join(","));const c=await fetch(`/api/sheet-download?${g.toString()}`,{credentials:"include"});if(!c.ok){const k=await c.text().catch(()=>"");let v=k;try{const C=JSON.parse(k);v=C.error||C.detail||k}catch{}throw new Error(`(${c.status}) ${v}`)}const w=await c.blob(),f=document.createElement("a");f.href=URL.createObjectURL(w),f.download=`${e}.${p}`,document.body.appendChild(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(f.href),1e3),u("다운로드 완료")}catch(g){u("ERROR: "+(g.message||String(g)))}finally{l(!1)}}return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("button",{onClick:h,disabled:a||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:a||!t?"#1E293B":"#1D4ED8",color:a||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Io,cursor:a||!t?"not-allowed":"pointer"},children:a?"다운로드 중…":b}),r&&n.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Io,background:r.startsWith("ERROR")?"#450A0A":"#14532D",color:r.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:r})]})}function Jr({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:l,metaEn:r,setMetaEn:u,total:s,setTotal:p,products:b,setProducts:h,citations:d,setCitations:g,dotcom:c,setDotcom:w,productsCnty:f,setProductsCnty:k,citationsCnty:v,setCitationsCnty:C,resolved:E,previewLang:j,setPreviewLang:B,snapshots:P,setSnapshots:L,setWeeklyLabels:z,setWeeklyAll:G,weeklyLabels:m,weeklyAll:T,citationsByCnty:S,dotcomByCnty:A,generateHTML:M,publishEndpoint:x,setMonthlyVis:F,onSyncExtra:_,categoryStats:I,extra:R,monthlyVis:H,progressMonth:nt,setProgressMonth:lt,progressDataMonth:st}){const it=q.useRef({products:b,productsCnty:f,citations:d,citationsCnty:v,total:s,dotcom:c,extra:R});it.current={products:b,productsCnty:f,citations:d,citationsCnty:v,total:s,dotcom:c,extra:R};function at(){return it.current}const[xt,Qt]=q.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[$t,Dt]=q.useState(!1),[Ct,Bt]=q.useState(null),[kt,vt]=q.useState(""),[Mt,Ut]=q.useState(""),[U,Z]=q.useState(!1),[ct,pt]=q.useState(""),[O,N]=q.useState(!1),[W,gt]=q.useState(!1),[mt,Lt]=q.useState(!1),[Rt,Yt]=q.useState(!1),[wt,At]=q.useState(""),[St,Ht]=q.useState(!1),[ke,Se]=q.useState(!0),[te,le]=q.useState(""),[Xt,ee]=q.useState(null),[ae,Yo]=q.useState([]),Nt=t==="newsletter",[ce,Xo]=q.useState(()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`});function Oe(){Nt&&fetch("/api/publish").then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.months)&&Yo(i.months)}).catch(()=>{})}q.useEffect(()=>{if(Nt){Oe();return}fetch(x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(y=>y.ok?y.json():null).then(ee).catch(()=>{})},[t,x,Nt]);const Zo=(()=>{const i=new Set,y=new Date;for(let et=0;et<24;et++){const yt=new Date(y.getFullYear(),y.getMonth()-et,1);i.add(`${yt.getFullYear()}-${String(yt.getMonth()+1).padStart(2,"0")}`)}for(const et of ae)i.add(et.month);return ce&&i.add(ce),[...i].sort((et,yt)=>yt.localeCompare(et))})();function Fe(i){const[y,et]=i.split("-");return`${y}년 ${parseInt(et,10)}월`}const[Qo,oo]=q.useState(null);q.useEffect(()=>{let i=!0;const y=()=>go(t).then(yt=>{i&&oo(yt)});y();const et=setInterval(y,6e4);return()=>{i=!1,clearInterval(et)}},[t]);function tn(){go(t).then(oo)}async function en(){if(!Rt){Yt(!0),At("");try{const i=at(),y=Le(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),et=Le(i.products,i.productsCnty,i.citations,i.citationsCnty,"en");let yt,_t,V;if(t==="dashboard"){const Q=H||[],dt=i.extra||R||{};yt=M(a,i.total,y.products,y.citations,i.dotcom,"ko",y.productsCnty,y.citationsCnty,m,T,S,A,Q,dt),_t=M(r,i.total,et.products,et.citations,i.dotcom,"en",et.productsCnty,et.citationsCnty,m,T,S,A,Q,dt),V=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else yt=M(a,i.total,y.products,y.citations,c,"ko",y.productsCnty,y.citationsCnty,{weeklyLabels:m,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),_t=M(r,i.total,et.products,et.citations,c,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:m,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),V=`${a.period||""} ${a.title||"Newsletter"}`.trim();const de=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),D={title:V,htmlKo:yt,htmlEn:_t};Nt&&(D.month=ce);const It=await(await fetch(de,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(D)})).json();if(!It.ok)throw new Error(It.error||"게시 실패");if(ee({...It,published:!0}),Nt&&Oe(),t==="dashboard")try{const Q=await Re(t)||{},dt=i.extra||R||{};yo(t,{...Q,meta:a,total:i.total,weeklyPR:dt.weeklyPR||Q.weeklyPR,weeklyPRLabels:dt.weeklyPRLabels||Q.weeklyPRLabels,weeklyBrandPrompt:dt.weeklyBrandPrompt||Q.weeklyBrandPrompt,weeklyBrandPromptLabels:dt.weeklyBrandPromptLabels||Q.weeklyBrandPromptLabels,appendixPrompts:dt.appendixPrompts||Q.appendixPrompts})}catch{}const Ot=`${window.location.origin}${It.urls.ko}`,ot=`${window.location.origin}${It.urls.en}`;try{await navigator.clipboard.writeText(Ot+`
`+ot)}catch{}At(`KO: ${Ot}
EN: ${ot}`)}catch(i){At("ERROR:"+i.message)}finally{Yt(!1),setTimeout(()=>At(""),2e4)}}}async function on(){if(!St){Ht(!0),le("");try{const i=await Vn(zr,Le,{includeProgressTracker:ke});le(`통합 게시 완료!
KO: ${window.location.origin}${i.urls.ko}
EN: ${window.location.origin}${i.urls.en}`)}catch(i){le("ERROR: "+i.message)}finally{Ht(!1),setTimeout(()=>le(""),15e3)}}}async function no(i){try{const y=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),et=Nt?`${y}?month=${encodeURIComponent(i||ce)}`:y;(await(await fetch(et,{method:"DELETE"})).json()).ok&&(Nt?Oe():ee(null))}catch{}}async function nn(){if(j!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}gt(!0)}async function ro(i){gt(!1),Lt(!0);const y=(i==null?void 0:i.products)??b,et=(i==null?void 0:i.productsCnty)??f,yt=(i==null?void 0:i.citations)??d,_t=(i==null?void 0:i.citationsCnty)??v;try{const V=a,de=[V.title||"",V.dateLine||"",V.noticeText||"",V.totalInsight||"",V.reportType||"",V.productInsight||"",V.productHowToRead||"",V.citationInsight||"",V.citationHowToRead||"",V.dotcomInsight||"",V.dotcomHowToRead||"",V.todoText||"",V.todoNotice||"",V.kpiLogicText||"",V.cntyInsight||"",V.cntyHowToRead||"",V.citDomainInsight||"",V.citDomainHowToRead||"",V.citCntyInsight||"",V.citCntyHowToRead||"",V.citPrdInsight||"",V.citPrdHowToRead||"",V.period||"",V.team||"",V.reportNo||"",V.monthlyReportBody||""],D=y.map(X=>X.kr||""),oe=y.map(X=>X.compName||""),It=yt.map(X=>X.category||""),Ot=[...new Set(et.map(X=>X.country||""))],ot=[...new Set(et.map(X=>X.product||""))],Q=[...new Set(et.map(X=>X.compName||""))],dt=[...new Set(_t.map(X=>X.cnty||"").filter(X=>X&&X!=="TTL"))],ft=[...de,...D,...oe,...It,...Ot,...ot,...Q,...dt].map(X=>X||" "),Y=await qn(ft,{from:"ko",to:"en"});let K=0;const Zt={...a,title:Y[K++]||V.title,dateLine:Y[K++]||V.dateLine,noticeText:Y[K++]||V.noticeText,totalInsight:Y[K++]||V.totalInsight,reportType:Y[K++]||V.reportType,productInsight:Y[K++]||V.productInsight,productHowToRead:Y[K++]||V.productHowToRead,citationInsight:Y[K++]||V.citationInsight,citationHowToRead:Y[K++]||V.citationHowToRead,dotcomInsight:Y[K++]||V.dotcomInsight,dotcomHowToRead:Y[K++]||V.dotcomHowToRead,todoText:Y[K++]||V.todoText,todoNotice:Y[K++]||V.todoNotice,kpiLogicText:Y[K++]||V.kpiLogicText,cntyInsight:Y[K++]||V.cntyInsight,cntyHowToRead:Y[K++]||V.cntyHowToRead,citDomainInsight:Y[K++]||V.citDomainInsight,citDomainHowToRead:Y[K++]||V.citDomainHowToRead,citCntyInsight:Y[K++]||V.citCntyInsight,citCntyHowToRead:Y[K++]||V.citCntyHowToRead,citPrdInsight:Y[K++]||V.citPrdInsight,citPrdHowToRead:Y[K++]||V.citPrdHowToRead,period:(K++,V.period),team:Y[K++]||V.team,reportNo:(K++,V.reportNo),monthlyReportBody:Y[K++]||V.monthlyReportBody},jt=X=>X&&X.replace(/\b\w/g,rt=>rt.toUpperCase()),Kt=X=>(X||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),ne={};y.forEach((X,rt)=>{ne[X.id]={en:jt(Y[K+rt]||X.kr),compNameEn:Kt(Y[K+D.length+rt]||X.compName)}}),K+=D.length+oe.length;const zt={};yt.forEach((X,rt)=>{zt[`${X.rank}_${X.source}`]=jt(Y[K+rt]||X.category)}),K+=It.length;const pe={};Ot.forEach((X,rt)=>{pe[X]=/^[A-Z]{2,3}$/.test(X)?X:Y[K+rt]||X}),K+=Ot.length;const Ae={};ot.forEach((X,rt)=>{Ae[X]=Y[K+rt]||X}),K+=ot.length;const ge={};Q.forEach((X,rt)=>{ge[X]=Y[K+rt]||X}),K+=Q.length;const ye={};dt.forEach((X,rt)=>{ye[X]=/^[A-Z]{2,3}$/.test(X)?X:Y[K+rt]||X}),u(Zt),h(X=>X.map(rt=>{var io,ao;return{...rt,en:((io=ne[rt.id])==null?void 0:io.en)||rt.en||rt.kr,compNameEn:((ao=ne[rt.id])==null?void 0:ao.compNameEn)||rt.compNameEn||rt.compName}})),g(X=>X.map(rt=>({...rt,categoryEn:zt[`${rt.rank}_${rt.source}`]||rt.categoryEn||rt.category}))),k(X=>X.map(rt=>({...rt,countryEn:jt(pe[rt.country]||rt.country),productEn:jt(Ae[rt.product]||rt.product),compNameEn:Kt(ge[rt.compName]||rt.compName)}))),C(X=>X.map(rt=>({...rt,cntyEn:rt.cnty==="TTL"?"TTL":jt(ye[rt.cnty]||rt.cnty)}))),Lt(!1)}catch(V){alert("번역 오류: "+V.message),Lt(!1)}}async function rn(){const i=M(e,s,E.products,E.citations,c,j,E.productsCnty,E.citationsCnty);try{await navigator.clipboard.writeText(i)}catch{const y=document.createElement("textarea");y.value=i,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}Z(!0),setTimeout(()=>Z(!1),2500)}async function an(){await or(e,s,b,d,c)}async function sn(){if(O!=="sending"){N("sending");try{const i=at(),y=M(e,i.total,i.products,i.citations,i.dotcom,j,i.productsCnty,i.citationsCnty,{weeklyLabels:m,categoryStats:I,unlaunchedMap:(R==null?void 0:R.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,_t=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:ct.trim(),subject:et,html:y})})).json();if(!_t.ok)throw new Error(_t.error||"발송 실패");N("ok"),setTimeout(()=>N(!1),4e3)}catch(i){N("error"),vt(i.message),setTimeout(()=>{N(!1),vt("")},5e3)}}}async function ln(){var et,yt,_t,V,de;if($t)return;const i=xr(xt.trim());if(!i){Bt("error"),vt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Bt(null),3e3);return}Dt(!0),Bt(null),vt(""),Ut("");const y=[];try{const D=await wr(i,ot=>vt(ot));if(y.push(`[Sync] parsed keys: ${Object.keys(D).join(", ")||"(없음)"}`),D.meta&&y.push(`[Sync] meta keys: ${Object.keys(D.meta).join(", ")}`),D.productsPartial&&y.push(`[Sync] products: ${D.productsPartial.length}건`),y.push(`[Sync] citations: ${((et=D.citations)==null?void 0:et.length)??0}건`),y.push(`[Sync] citationsCnty: ${((yt=D.citationsCnty)==null?void 0:yt.length)??0}건`),y.push(`[Sync] dotcom: ${D.dotcom?"OK":"(없음)"}`),y.push(`[Sync] productsCnty: ${((_t=D.productsCnty)==null?void 0:_t.length)??0}건`),D.meta){const ot=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];l(Q=>{const dt={...Q};for(const[ft,Y]of Object.entries(D.meta))ot.includes(ft)&&Q[ft]||(dt[ft]=Y);return dt}),u(Q=>({...Q,period:D.meta.period,dateLine:D.meta.dateLine,reportNo:D.meta.reportNo}))}if(D.citations&&(g(D.citations),it.current={...it.current,citations:D.citations}),D.dotcom&&(w(ot=>({...ot,...D.dotcom})),it.current={...it.current,dotcom:{...it.current.dotcom,...D.dotcom}}),D.productsCnty&&(k(D.productsCnty),it.current={...it.current,productsCnty:D.productsCnty}),D.citationsCnty&&(C(D.citationsCnty),it.current={...it.current,citationsCnty:D.citationsCnty}),D.monthlyVis&&F&&F(D.monthlyVis),_){const ot={weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,weeklyLabelsFull:D.weeklyLabelsFull||null,prTopicList:D.prTopicList||null};_(ot),it.current={...it.current,extra:{...it.current.extra,...ot}}}const oe=D.weeklyLabels||((V=D.meta)==null?void 0:V.weeklyLabels);console.log("[SYNC] weeklyLabels:",oe,"weeklyLabelsFull:",D.weeklyLabelsFull),oe&&oe.length&&z(oe),D.weeklyAll&&G(ot=>({...ot,...D.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(D));const It=D.weeklyMap?Object.keys(D.weeklyMap):[],Ot=((de=D.productsPartial)==null?void 0:de.map(ot=>ot.id))||[];if(console.log("[SYNC] weeklyMap keys:",It.length?It:"NONE"),console.log("[SYNC] productsPartial IDs:",Ot.length?Ot:"NONE"),It.length&&Ot.length){const ot=Ot.filter(dt=>!It.includes(dt)),Q=It.filter(dt=>!Ot.includes(dt));ot.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",ot),Q.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",Q),!ot.length&&!Q.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(D.productsPartial){const ot=D.productsPartial.map(Q=>{var ge;const dt=((ge=D.weeklyMap)==null?void 0:ge[Q.id])||[],ft=dt.filter(ye=>ye!=null&&ye>0),Y=Q.score,K=Q.prev||0,Zt=Q.vsComp>0?Math.round(Y/Q.vsComp*100):100,jt=ft.length>0?ft[ft.length-1]:Y,Kt=ft.length>=5?ft[ft.length-5]:ft[0]||0,ne=Y,zt=K,pe=Zt,Ae=K>0&&K!==Y?[K,Y]:[];return{...Q,score:ne,prev:zt,weekly:dt,monthly:Ae,weeklyScore:jt,weeklyPrev:Kt,monthlyScore:Y,monthlyPrev:K,compRatio:pe,status:pe>=100?"lead":pe>=80?"behind":"critical"}});h(ot),it.current={...it.current,products:ot}}else D.weeklyMap&&h(ot=>ot.map(Q=>{var ft;const dt=(ft=D.weeklyMap)==null?void 0:ft[Q.id];return dt?{...Q,weekly:dt}:Q}));if(D.total){const ot={...it.current.total,...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}};p(Q=>({...Q,...ot})),it.current={...it.current,total:ot}}{let ot=function(K){if(!K)return 0;const Zt=String(K).trim(),jt=Zt.match(/(\d{1,2})월/);if(jt){const zt=parseInt(jt[1]);return zt>=1&&zt<=12?zt:0}const Kt=Zt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Kt)return ft[Kt[1].toLowerCase()]||0;const ne=Zt.match(/\d{4}[-\/](\d{1,2})/);if(ne){const zt=parseInt(ne[1]);return zt>=1&&zt<=12?zt:0}return 0};const Q=new Date().getFullYear(),dt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ft={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let Y=0;if(D.derivedPeriod){const K=ot(D.derivedPeriod);K>Y&&(Y=K)}if(D.citDerivedPeriod){const K=ot(D.citDerivedPeriod);K>Y&&(Y=K)}Y>0&&Y<=12&&(l(K=>({...K,period:`${Q}년 ${Y}월`})),u(K=>({...K,period:`${dt[Y]} ${Q}`})))}if(!D.total&&D.productsPartial&&D.productsPartial.length>0){const ot=D.productsPartial,Q=+(ot.reduce((ft,Y)=>ft+Y.score,0)/ot.length).toFixed(1),dt=+(ot.reduce((ft,Y)=>ft+(Y.vsComp||0),0)/ot.length).toFixed(1);p(ft=>({...ft,score:Q,vsComp:dt,rank:Q>=dt?1:2}))}if(setTimeout(()=>{yo(t,{meta:D.meta||null,total:D.total?{...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}}:null,productsPartial:D.productsPartial||null,weeklyMap:D.weeklyMap||null,weeklyLabels:D.weeklyLabels||null,weeklyLabelsFull:D.weeklyLabelsFull||null,weeklyAll:D.weeklyAll||null,citations:D.citations||null,dotcom:D.dotcom||null,productsCnty:D.productsCnty||null,citationsCnty:D.citationsCnty||null,citationsByCnty:D.citationsByCnty||null,dotcomByCnty:D.dotcomByCnty||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,prTopicList:D.prTopicList||null,monthlyVis:D.monthlyVis||null,weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,monthlyPR:D.monthlyPR||null,monthlyPRLabels:D.monthlyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,monthlyBrandPrompt:D.monthlyBrandPrompt||null,monthlyBrandPromptLabels:D.monthlyBrandPromptLabels||null,dotcomTrend:D.dotcomTrend||null,dotcomTrendMonths:D.dotcomTrendMonths||null}),setTimeout(tn,250)},100),Ut(y.join(`
`)),Bt("ok"),vt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const ot={};D.productsPartial&&(ot.products=D.productsPartial.map(Q=>{var jt;const dt=((jt=D.weeklyMap)==null?void 0:jt[Q.id])||[],ft=Q.vsComp>0?Q.score/Q.vsComp*100:100,Y=dt.find(Kt=>Kt!=null&&Kt>0),K=Q.prev!=null&&Q.prev>0?Q.prev:Y||0,Zt=K>0?[K,Q.score]:[];return{...Q,prev:K,weekly:dt,monthly:Zt,compRatio:Math.round(ft),status:ft>=100?"lead":ft>=80?"behind":"critical"}})),D.productsCnty&&(ot.productsCnty=D.productsCnty),D.citations&&(ot.citations=D.citations),D.citationsCnty&&(ot.citationsCnty=D.citationsCnty);try{await ro(ot)}catch{}vt("동기화 + 번역 완료!")}}catch(D){y.push(`[ERROR] ${D.message}`),Bt("error"),vt(D.message),Ut(y.join(`
`))}finally{Dt(!1),setTimeout(()=>{Bt(null),vt("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:ht,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:$},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:$},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:$},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(kr,{...Qo||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:$},children:"Google Sheets URL"}),n.jsx("input",{value:xt,onChange:i=>Qt(i.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ut,fontSize:11,padding:"7px 9px",marginBottom:8,color:xt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:ln,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:$t?"wait":"pointer",background:$t?"#1E293B":ht,fontSize:12,fontWeight:700,color:$t?"#94A3B8":"#FFFFFF",fontFamily:$,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(so,{size:13,style:{animation:$t?"spin 1s linear infinite":"none"}}),$t?"동기화 중...":"구글 시트 동기화"]}),(Ct||$t&&kt)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.6,background:Ct==="ok"?"#14532D":Ct==="error"?"#450A0A":"#1E293B",color:Ct==="ok"?"#86EFAC":Ct==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Ct==="ok"?"#22C55E33":Ct==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:kt}),Mt&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Mt,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Mt).then(()=>{const i=document.getElementById("vis-debug-copy-btn");i&&(i.textContent="복사됨!",setTimeout(()=>{i.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:$,cursor:"pointer"},children:"로그 복사"})]}),n.jsx(qr,{url:xt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:nn,disabled:mt,style:{width:"100%",padding:"9px 0",background:mt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:$,cursor:mt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:mt?.6:1},children:[n.jsx(cn,{size:13})," ",mt?"번역 중...":"AI 번역 (EN)"]}),W&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:$},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:$},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>gt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:$,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:ro,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:$,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:an,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(dn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Nt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"발행 월"}),n.jsx("select",{value:ce,onChange:i=>Xo(i.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:Zo.map(i=>n.jsxs("option",{value:i,children:[i," · ",Fe(i),ae.find(y=>y.month===i)?" ✓ 게시됨":""]},i))})]}),Nt&&lt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",st||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:nt||"",onChange:i=>lt(i.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",st||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(i=>n.jsx("option",{value:i,children:i},i))]}),nt&&n.jsx("button",{onClick:()=>lt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:en,disabled:Rt,style:{width:"100%",padding:"9px 0",background:Rt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Rt?"#94A3B8":"#FFFFFF",fontFamily:$,cursor:Rt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(lo,{size:12}),Rt?"게시 중...":Nt?`${Fe(ce)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:$,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:ke,onChange:i=>Se(i.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:on,disabled:St,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:St?"#1E293B":"#166534",color:St?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:$,cursor:St?"wait":"pointer",marginBottom:6},children:[n.jsx(lo,{size:12}),St?"통합 게시 중...":"통합 대시보드 게시"]}),te&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.8,background:te.startsWith("ERROR")?"#450A0A":"#14532D",color:te.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:te.startsWith("ERROR:")?te.slice(6):te})]})]}),n.jsxs("button",{onClick:async()=>{const i={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(i).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const yt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:i})})).json();yt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(yt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(pn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&wt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.8,background:wt.startsWith("ERROR:")?"#450A0A":"#14532D",color:wt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${wt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:wt.startsWith("ERROR:")?wt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(ze,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[wt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Nt&&(Xt==null?void 0:Xt.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:$,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>no(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:$,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Xt.urls.ko},{label:"EN",url:Xt.urls.en}].map(({label:i,url:y})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:$,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i,": ",y]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${y}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(ze,{size:10})})]},i)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:Xt.ts?new Date(Xt.ts).toLocaleString("ko-KR"):""})]}),Nt&&ae.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:$,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ae.length,")"]})}),ae.map(i=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:$},children:Fe(i.month)}),n.jsx("button",{onClick:()=>{confirm(`${Fe(i.month)} 게시본을 삭제할까요?`)&&no(i.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:$,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:i.urls.ko},{label:"EN",url:i.urls.en}].map(({label:y,url:et})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:et,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:$,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[y,": ",et]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${et}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(ze,{size:10})})]},y)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:i.ts?new Date(i.ts).toLocaleString("ko-KR"):""})]},i.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:i=>o(y=>({...y,reportType:i.target.value})),style:{...ut,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:"보고서 번호"}),n.jsx("input",{value:e.reportNo,onChange:i=>o(y=>({...y,reportNo:i.target.value})),style:{...ut}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["기간 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:i=>o(y=>({...y,period:i.target.value})),style:{...ut}})]})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:i=>o(y=>({...y,title:i.target.value})),rows:4,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:i=>o(y=>({...y,team:i.target.value})),style:{...ut,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:i=>o(y=>({...y,dateLine:i.target.value})),style:{...ut,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Notice"}),n.jsx("button",{onClick:()=>o(i=>({...i,showNotice:!i.showNotice})),style:{background:e.showNotice?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:i=>o(y=>({...y,noticeText:i.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(i=>({...i,showKpiLogic:!i.showKpiLogic})),style:{background:e.showKpiLogic?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:i=>o(y=>({...y,kpiLogicText:i.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:$,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:i=>o(y=>({...y,titleFontSize:Number(i.target.value)})),style:{width:"100%",accentColor:ht,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:i=>o(y=>({...y,titleColor:i.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:$},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([i,y])=>n.jsx("button",{onClick:()=>o(et=>({...et,titleColor:i})),title:y,style:{width:16,height:16,borderRadius:"50%",background:i,border:e.titleColor===i?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},i))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:i,label:y})=>n.jsx("button",{onClick:()=>o(et=>({...et,[i]:!et[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[i]?ht:"#1E293B",color:e[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:y},i))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:$},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?ht:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(i=>({...i,trendMode:(i.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:$},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?ht:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?ht:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,monthlyReportBody:"⏳ AI 생성 중..."}));const i=await Tt("monthlyReportBody",{products:at().products,productsCnty:at().productsCnty,total:at().total,citations:at().citations,todoText:e.todoText||"",period:e.period||""},j);o(y=>({...y,monthlyReportBody:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,monthlyReportBody:`[AI 실패: ${i.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:i=>o(y=>({...y,monthlyReportBody:i.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:$},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,totalInsight:"⏳ AI 생성 중..."}));const i=await Tt("totalInsight",{products:at().products,productsCnty:at().productsCnty,total:at().total,todoText:e.todoText||""},j);o(y=>({...y,totalInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,totalInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:i=>o(y=>({...y,totalInsight:i.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productInsight:"⏳ AI 생성 중..."}));const i=await Tt("product",{products:at().products,total:at().total},j);o(y=>({...y,productInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,productInsight:`[AI 실패: ${i.message}]

`+Gr(at().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductInsight:!i.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?ht:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:i=>o(y=>({...y,productInsight:i.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"제품별 GEO Visibility"},j);o(y=>({...y,productHowToRead:i}))}catch{o(i=>({...i,productHowToRead:Ur()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductHowToRead:!i.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?ht:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:i=>o(y=>({...y,productHowToRead:i.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyInsight:"⏳ AI 생성 중..."}));const i=await Tt("cnty",{productsCnty:at().productsCnty},j);o(y=>({...y,cntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,cntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyInsight:!i.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?ht:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:i=>o(y=>({...y,cntyInsight:i.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"국가별 GEO Visibility"},j);o(y=>({...y,cntyHowToRead:i}))}catch{o(i=>({...i,cntyHowToRead:Hr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyHowToRead:!i.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?ht:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:i=>o(y=>({...y,cntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:i=>o(y=>({...y,prNotice:i.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:i=>o(y=>({...y,prTopicDescsRaw:i.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:i=>o(y=>({...y,prTopicPromptsRaw:i.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:i=>o(y=>({...y,bpNotice:i.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationInsight:"⏳ AI 생성 중..."}));const i=await Tt("citation",{citations:at().citations},j);o(y=>({...y,citationInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citationInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationInsight:!i.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?ht:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:i=>o(y=>({...y,citationInsight:i.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"Citation 도메인별 현황"},j);o(y=>({...y,citationHowToRead:i}))}catch{o(i=>({...i,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationHowToRead:!i.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?ht:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:i=>o(y=>({...y,citationHowToRead:i.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainInsight:"⏳ AI 생성 중..."}));const i=await Tt("citDomain",{citationsCnty:at().citationsCnty},j);o(y=>({...y,citDomainInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citDomainInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainInsight:!i.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?ht:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:i=>o(y=>({...y,citDomainInsight:i.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"도메인별 Citation 현황"},j);o(y=>({...y,citDomainHowToRead:i}))}catch{o(i=>({...i,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainHowToRead:!i.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?ht:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:i=>o(y=>({...y,citDomainHowToRead:i.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyInsight:"⏳ AI 생성 중..."}));const i=await Tt("citCnty",{citationsCnty:at().citationsCnty},j);o(y=>({...y,citCntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citCntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyInsight:!i.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?ht:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:i=>o(y=>({...y,citCntyInsight:i.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"국가별 Citation 도메인"},j);o(y=>({...y,citCntyHowToRead:i}))}catch{o(i=>({...i,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyHowToRead:!i.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?ht:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:i=>o(y=>({...y,citCntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdInsight:"⏳ AI 생성 중..."}));const i=await Tt("citPrd",{citationsCnty:at().citationsCnty},j);o(y=>({...y,citPrdInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citPrdInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdInsight:!i.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?ht:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:i=>o(y=>({...y,citPrdInsight:i.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"제품별 Citation"},j);o(y=>({...y,citPrdHowToRead:i}))}catch{o(i=>({...i,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdHowToRead:!i.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?ht:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:i=>o(y=>({...y,citPrdHowToRead:i.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),f.length>0&&(()=>{const i=[...new Set(E.productsCnty.map(y=>y.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:i.map(y=>{const et=(e.cntyProductFilter||{})[y]!==!1;return n.jsx("button",{onClick:()=>o(yt=>({...yt,cntyProductFilter:{...yt.cntyProductFilter||{},[y]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:y},y)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomInsight:"⏳ AI 생성 중..."}));const i=await Tt("dotcom",{dotcom:at().dotcom},j);o(y=>({...y,dotcomInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,dotcomInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomInsight:!i.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?ht:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:i=>o(y=>({...y,dotcomInsight:i.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomHowToRead:"⏳ AI 생성 중..."}));const i=await Tt("howToRead",{section:"닷컴 Citation"},j);o(y=>({...y,dotcomHowToRead:i}))}catch{o(y=>({...y,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomHowToRead:!i.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?ht:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:i=>o(y=>({...y,dotcomHowToRead:i.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:i=>o(y=>({...y,todoNotice:i.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,todoText:"⏳ AI 생성 중..."}));const i=await Tt("todo",{products:at().products},j);o(y=>({...y,todoText:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,todoText:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Et,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showTodo:!i.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?ht:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:i=>o(y=>({...y,todoText:i.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:rn,style:{width:"100%",padding:"9px 0",background:U?"#14532D":"transparent",border:`1px solid ${U?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:U?"#86EFAC":"#64748B",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:U?n.jsxs(n.Fragment,{children:[n.jsx(We,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Po,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:ct,onChange:i=>pt(i.target.value),placeholder:"recipient@example.com",style:{...ut,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:sn,disabled:O==="sending"||!ct.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:O==="sending"||!ct.trim()?"not-allowed":"pointer",background:O==="ok"?"#14532D":O==="error"?"#7F1D1D":O==="sending"?"#1E3A5F":ct.trim()?"#1D4ED8":"#1E293B",color:O==="ok"?"#86EFAC":O==="error"?"#FCA5A5":ct.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:O==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(so,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):O==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(We,{size:12})," 발송 완료!"]}):O==="error"?n.jsxs(n.Fragment,{children:[n.jsx(co,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(co,{size:12})," 메일 발송"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:$,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const ue="weekly-report",jo="geo-weekly-report-cache";function Yr({meta:t,total:e,products:o,citations:a,dotcom:l,productsCnty:r=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:p,weeklyAll:b,categoryStats:h,cntyKeys:d=null}){const g=q.useRef(null),c=q.useMemo(()=>Xe(t,e,o,a,l,s,r,u,{weeklyLabels:p,weeklyAll:b,categoryStats:h,cntyKeys:d}),[t,e,o,a,l,s,r,u,p,b,h,d]);return yn.useEffect(()=>{const w=g.current;if(!w)return;const f=w.contentDocument||w.contentWindow.document;f.open(),f.write(c),f.close();const k=()=>{try{f.body.style.overflow="hidden",f.documentElement.style.overflow="hidden";const v=f.documentElement.scrollHeight;v&&(w.style.height=v+20+"px")}catch{}};setTimeout(k,150),setTimeout(k,400),setTimeout(k,1e3),setTimeout(k,2e3)},[c]),n.jsx("iframe",{ref:g,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Xr({meta:t,total:e,products:o,citations:a,dotcom:l,productsCnty:r=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:p,weeklyAll:b,categoryStats:h,cntyKeys:d=null}){const[g,c]=q.useState(!1),w=q.useMemo(()=>Xe(t,e,o,a,l,s,r,u,{weeklyLabels:p,weeklyAll:b,categoryStats:h,cntyKeys:d}),[t,e,o,a,l,s,r,u,p,b,h,d]);async function f(){try{await navigator.clipboard.writeText(w)}catch{const k=document.createElement("textarea");k.value=w,document.body.appendChild(k),k.select(),document.execCommand("copy"),document.body.removeChild(k)}c(!0),setTimeout(()=>c(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:$},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:f,style:{padding:"6px 14px",borderRadius:7,border:"none",background:g?"#14532D":ht,color:g?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:g?n.jsxs(n.Fragment,{children:[n.jsx(We,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Po,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:w})})]})}function Zr(){const t=q.useRef(On(jo)).current,[e,o]=q.useState({...Ee,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,l]=q.useState({...Ee,...(t==null?void 0:t.metaEn)??{}}),[r,u]=q.useState((t==null?void 0:t.total)??jn),[s,p]=q.useState((t==null?void 0:t.products)??Pn),[b,h]=q.useState((t==null?void 0:t.citations)??_n),[d,g]=q.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Dn),[c,w]=q.useState((t==null?void 0:t.productsCnty)??Mn),[f,k]=q.useState((t==null?void 0:t.citationsCnty)??Nn),[v,C]=q.useState((t==null?void 0:t.weeklyLabels)??null),[E,j]=q.useState((t==null?void 0:t.weeklyAll)??{}),[B,P]=q.useState(null),[L,z]=q.useState("preview"),[G,m]=q.useState("ko"),[T,S]=q.useState([]),[A,M]=q.useState(""),[x,F]=q.useState(!1),[_,I]=q.useState(""),[R,H]=q.useState(null),[nt,lt]=q.useState(!0),[st,it]=q.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),at=q.useMemo(()=>{const O=new Set;return(c||[]).forEach(N=>{N&&N.country&&!/^(ttl|total)$/i.test(N.country)&&O.add(String(N.country).toUpperCase())}),Array.from(O).sort()},[c]),xt=st.length>0?st:null,Qt=q.useCallback(O=>{it(N=>N.includes(O)?N.filter(W=>W!==O):[...N,O])},[]),$t=q.useCallback(()=>it(at),[at]),Dt=q.useCallback(()=>it([]),[]);q.useEffect(()=>{let O=!1;const N=Zn(e.period)||`${new Date().getMonth()+1}월`,W=Qn(N);async function gt(){var mt,Lt,Rt;try{const Yt=await fetch("/api/tracker-snapshot-v2"),wt=Yt.ok?await Yt.json():null;if(wt!=null&&wt.ok&&((Rt=(Lt=(mt=wt.data)==null?void 0:mt.quantitativeGoals)==null?void 0:Lt.rows)!=null&&Rt.length)){const At=bo(wt.data,W);if(At!=null&&At.length&&!O){P(At);return}}}catch{}try{const[{parseKPISheet:Yt},wt]=await Promise.all([Ve(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ve(()=>import("./xlsx-2l-k0XfJ.js").then(ae=>ae.x),__vite__mapDeps([0,1]))]),At=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,St=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${At}&headers=1`,Ht=await fetch(St,{cache:"no-store"});if(!Ht.ok)return;const ke=await Ht.text(),Se=wt.read(ke,{type:"string"}),te=Se.Sheets[Se.SheetNames[0]],le=wt.utils.sheet_to_json(te,{header:1,defval:""}),Xt=Yt(le),ee=bo(Xt,W);ee!=null&&ee.length&&!O&&P(ee)}catch{}}return gt(),()=>{O=!0}},[e.period]);const Ct=G==="en"?a:e,Bt=G==="en"?l:o,kt=q.useMemo(()=>Le(s,c,b,f,G),[s,c,b,f,G]);q.useEffect(()=>{Gn(ue).then(S)},[]);const vt=q.useRef(null);function Mt(O,N=2e3){clearTimeout(vt.current),I(O),vt.current=setTimeout(()=>I(""),N)}q.useEffect(()=>()=>clearTimeout(vt.current),[]);const Ut=q.useRef(!1);q.useEffect(()=>{let O=!1;return Re(ue).then(N=>{O||!N||(Ut.current=!0,N.meta&&o(W=>({...W,...N.meta})),N.total&&u(W=>({...W,...N.total})),N.citations&&h(N.citations),N.dotcom&&g(W=>({...W,...N.dotcom})),N.productsCnty&&w(N.productsCnty),N.citationsCnty&&k(N.citationsCnty),N.weeklyLabels&&C(N.weeklyLabels),N.weeklyAll&&j(W=>({...W,...N.weeklyAll})),N.productsPartial?p(N.productsPartial.map(W=>{var Lt;const gt=((Lt=N.weeklyMap)==null?void 0:Lt[W.id])||[],mt=W.vsComp>0?W.score/W.vsComp*100:100;return{...W,weekly:gt,monthly:[],compRatio:Math.round(mt),status:mt>=100?"lead":mt>=80?"behind":"critical"}})):N.weeklyMap&&p(W=>W.map(gt=>{var Lt;const mt=(Lt=N.weeklyMap)==null?void 0:Lt[gt.id];return mt?{...gt,weekly:mt}:gt})))}),()=>{O=!0}},[]),q.useEffect(()=>{zn(jo,{metaKo:e,metaEn:a,total:r,products:s,citations:b,dotcom:d,productsCnty:c,citationsCnty:f,weeklyLabels:v,weeklyAll:E,selectedCountries:st})},[e,a,r,s,b,d,c,f,v,E,st]);async function U(){if(!R)return;const N=await Hn(ue,R,{metaKo:e,metaEn:a,total:r,products:s,citations:b,dotcom:d,productsCnty:c,citationsCnty:f,weeklyLabels:v,weeklyAll:E});N&&S(N),Mt(N?"저장 완료!":"저장 실패")}async function Z(){var W;const O=A.trim()||`${Ct.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,N=await Un(ue,O,{metaKo:e,metaEn:a,total:r,products:s,citations:b,dotcom:d,productsCnty:c,citationsCnty:f,weeklyLabels:v,weeklyAll:E});N&&(S(N),M(""),H(((W=N[0])==null?void 0:W.ts)||null)),Mt(N?"새로 저장 완료!":"저장 실패")}function ct(O){const N=O.data;o({...Ee,...N.metaKo||N.meta||{}}),l({...Ee,...N.metaEn||{}}),N.total&&u(N.total),N.products&&p(N.products),N.citations&&h(N.citations),N.dotcom&&g(N.dotcom),N.productsCnty&&w(N.productsCnty),N.citationsCnty&&k(N.citationsCnty),N.weeklyLabels&&C(N.weeklyLabels),N.weeklyAll&&j(N.weeklyAll),H(O.ts),Mt(`"${O.name}" 불러옴`)}async function pt(O){const N=T[O];if(!N)return;const W=await Wn(ue,N.ts);W&&S(W),R===N.ts&&H(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:$},children:[nt&&n.jsx(Jr,{mode:ue,meta:Ct,setMeta:Bt,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:l,total:r,setTotal:u,products:s,setProducts:p,citations:b,setCitations:h,dotcom:d,setDotcom:g,productsCnty:c,setProductsCnty:w,citationsCnty:f,setCitationsCnty:k,resolved:kt,previewLang:G,setPreviewLang:m,snapshots:T,setSnapshots:S,setWeeklyLabels:C,setWeeklyAll:j,weeklyLabels:v,weeklyAll:E,generateHTML:Xe}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>lt(O=>!O),title:nt?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:nt?n.jsx(un,{size:16}):n.jsx(fn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:O,tab:N,lang:W,label:gt})=>{const mt=N==="code"?L==="code":L==="preview"&&G===W;return n.jsx("button",{onClick:()=>{z(N),W&&m(W)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:mt?"#1E293B":"transparent",color:mt?"#FFFFFF":"#475569",fontSize:11,fontWeight:mt?700:500,fontFamily:$,cursor:"pointer"},children:gt},O)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[_&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:$},children:_}),n.jsxs("button",{onClick:U,disabled:!R,title:R?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:R?"pointer":"default",background:R?"#1D4ED8":"#1E293B",color:R?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4,opacity:R?1:.5},children:[n.jsx(po,{size:11})," 저장"]}),n.jsx("input",{value:A,onChange:O=>M(O.target.value),placeholder:"버전 이름...",onKeyDown:O=>O.key==="Enter"&&Z(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:$,outline:"none"}}),n.jsxs("button",{onClick:Z,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4},children:[n.jsx(po,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>F(!x),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:x?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4},children:[n.jsx(hn,{size:11})," 불러오기 ",T.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",T.length,")"]})]}),x&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:O=>O.stopPropagation(),children:T.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:$,textAlign:"center"},children:"저장된 버전이 없습니다"}):T.map((O,N)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:R===O.ts?"#1E3A5F":"#0F172A",border:R===O.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:$,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:new Date(O.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{ct(O),F(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$},children:"적용"}),n.jsx("button",{onClick:()=>pt(N),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(gn,{size:10})})]},O.ts))})]})]})]}),at.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),at.map(O=>{const N=st.includes(O);return n.jsx("button",{onClick:()=>Qt(O),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(N?"#22C55E":"#334155"),background:N?"#16A34A":"#1E293B",color:N?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:O},O)}),n.jsx("button",{onClick:$t,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:Dt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:st.length===0?"전체 국가":`${st.length}개 선택`})]}),L==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:n.jsx(Yr,{meta:Ct,total:r,products:kt.products,citations:kt.citations,dotcom:d,productsCnty:kt.productsCnty,citationsCnty:kt.citationsCnty,lang:G,weeklyLabels:v,weeklyAll:E,categoryStats:B,cntyKeys:xt})})}):n.jsx(Xr,{meta:Ct,total:r,products:kt.products,citations:kt.citations,dotcom:d,productsCnty:kt.productsCnty,citationsCnty:kt.citationsCnty,lang:G,weeklyLabels:v,weeklyAll:E,categoryStats:B,cntyKeys:xt}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:["v","3.1.9"]})})]})]})}mn.createRoot(document.getElementById("root")).render(n.jsx(Zr,{}));
