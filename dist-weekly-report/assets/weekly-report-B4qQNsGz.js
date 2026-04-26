const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as r,b as W,R as We,L as Mo,D as zo,G as Ve,A as _o,c as Ke,S as St,C as $e,d as bo,e as qe,P as Go,f as Ho,h as Je,F as Uo,T as Wo,i as Vo}from"./react-BzJiA2Qb.js";import{R as Ko}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=o(c);fetch(c.href,n)}})();const qo="modulepreload",Jo=function(t){return"/admin/weekly-report/"+t},Ye={},Le=function(e,o,i){let c=Promise.resolve();if(o&&o.length>0){let g=function(v){return Promise.all(v.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),l=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));c=g(o.map(v=>{if(v=Jo(v),v in Ye)return;Ye[v]=!0;const d=v.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":qo,d||(y.as="script"),y.crossOrigin="",y.href=v,l&&y.setAttribute("nonce",l),document.head.appendChild(y),d)return new Promise((a,C)=>{y.addEventListener("load",a),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${v}`)))})}))}function n(g){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=g,window.dispatchEvent(p),!p.defaultPrevented)throw g}return c.then(g=>{for(const p of g||[])p.status==="rejected"&&n(p.reason);return e().catch(n)})},z="'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Yo=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function ae(t){const e=Yo.indexOf(t);return e>=0?e:999}function xt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Xe=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function xo(t){return Xe.filter(e=>t.includes(e)).concat(t.filter(e=>!Xe.includes(e)))}const Xo={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function vo(t){return Xo[String(t||"").trim().toUpperCase()]||t}function ue(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Zo(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Be(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function de(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Qo(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},i={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},c=[],n=[];Object.entries(t).forEach(([l,v])=>{if(!v)return;const d=v.Total||v.TTL||v.TOTAL;if(d){const f=d.LG||d.lg||[],y=f.length>0?f[f.length-1]:null,a=f.length>=2?f[f.length-2]:null;let C="",u=0;Object.entries(d).forEach(([k,F])=>{if(k==="LG"||k==="lg")return;const m=Array.isArray(F)&&F.length?F[F.length-1]:0;m>u&&(u=m,C=k)}),y!=null&&y>0&&c.push({id:l,kr:o[l]||l,bu:i[l]||"OTHER",score:y,prev:a,vsComp:u,compName:C,category:o[l]||l})}Object.entries(v).forEach(([f,y])=>{if(f==="Total"||f==="TTL"||f==="TOTAL")return;const a=y.LG||y.lg||[],C=a.length>0?a[a.length-1]:null,u=a.length>=2?a[a.length-2]:null;if(C==null||C<=0)return;let k="",F=0;Object.entries(y).forEach(([m,h])=>{if(m==="LG"||m==="lg")return;const x=Array.isArray(h)&&h.length?h[h.length-1]:0;x>F&&(F=x,k=m)}),n.push({product:o[l]||l,country:f,score:C,prev:u,compScore:F,compName:k})})});const g=(e==null?void 0:e[e.length-1])||"This Week",p=(e==null?void 0:e[e.length-2])||"Last Week";return{products:c,productsCnty:n,lastLabel:g,prevLabel:p}}function tn(t,e,o,i){if(!t.length)return"";const c=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},n=["MS","HS","ES"],g={};t.forEach(l=>{const v=l.bu||"OTHER";g[v]||(g[v]=[]),g[v].push(l)});const p=[];return n.forEach(l=>{const v=(g[l]||[]).slice().sort((d,f)=>ae(d.kr||d.category||d.id)-ae(f.kr||f.category||f.id));v.forEach((d,f)=>{const y=Zo(d.score,d.prev),a=de(d.score,d.vsComp)||"#FFFFFF";p.push(`<tr>
        ${f===0?`<td rowspan="${v.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${l}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${xt(d.kr||d.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${a};">${ue(d.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${a};">${ue(d.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${a};">${xt(d.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${a};">${Be(d.score,d.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${y}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${i})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${c.wow}</th>
      </tr>
    </thead>
    <tbody>${p.join("")}</tbody>
  </table>`}function en(t,e,o,i){const c=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={},g=new Set,p=new Set;t.forEach(a=>{!a.country||!a.product||(g.add(a.country),p.add(a.product),n[a.product]||(n[a.product]={}),n[a.product][a.country]=a)});const l=xo(Array.from(g)),v=Array.from(p).sort((a,C)=>ae(a)-ae(C));if(!v.length||!l.length)return"";const d={};(o||[]).forEach(a=>{[a.kr,a.category,a.id,a.en].filter(Boolean).forEach(u=>{d[u]=a})});const f='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+l.map(a=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${xt(vo(a))}</th>`).join(""),y=[];return v.forEach((a,C)=>{const u=C%2===0?"#FFFFFF":"#FAFAFA",k=d[a],m=(k?de(k.score,k.vsComp):null)||u,h=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${m};">${k?ue(k.score):"—"}</td>`,x=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${m};">${k?Be(k.score,k.vsComp):"—"}</td>`,E=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;background:${m};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?xt(k.compName):"—"}</td>`,b=l.map(T=>{var I;const A=(I=n[a])==null?void 0:I[T],P=(A?de(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${P};">${A?ue(A.score):"—"}</td>`}).join(""),S=l.map(T=>{var I;const A=(I=n[a])==null?void 0:I[T],P=(A?de(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${P};">${A?Be(A.score,A.compScore):"—"}</td>`}).join(""),R=l.map(T=>{var I;const A=(I=n[a])==null?void 0:I[T],P=(A?de(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;background:${P};color:#1A1A1A;font-weight:600;">${A!=null&&A.compName?xt(A.compName):"—"}</td>`}).join("");y.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${z};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${xt(a)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};font-weight:600;background:#F5F5F5;white-space:nowrap;">${c.lg} (%)</td>
        ${h}${b}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};background:#F5F5F5;white-space:nowrap;">${c.ratio}</td>
        ${x}${S}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${E}${R}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${i})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.metric}</th>
        ${f}
      </tr>
    </thead>
    <tbody>${y.join("")}</tbody>
  </table>
  </div>`}function on(t,e,o,i){const c=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${i})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${i})`,product:"제품"},n={},g=new Set,p=new Set;t.forEach(y=>{!y.country||!y.product||(g.add(y.country),p.add(y.product),n[y.product]||(n[y.product]={}),n[y.product][y.country]=y)});const l=xo(Array.from(g)),v=Array.from(p).sort((y,a)=>ae(y)-ae(a));if(!v.length||!l.length)return"";const d=l.map(y=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${xt(vo(y))}</th>`).join(""),f=v.map(y=>{const a=l.map(C=>{var b;const u=(b=n[y])==null?void 0:b[C];if(!u||u.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${z};text-align:center;color:#999;">—</td>`;const k=u.score,F=u.prev,m=F!=null?+(k-F).toFixed(1):null,h=m==null?"#999":m>0?"#16A34A":m<0?"#DC2626":"#666",x=m==null?"":m>0?"▲":m<0?"▼":"─",E=m!=null?`${x}${Math.abs(m).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${z};text-align:center;">
        <div style="font-weight:700;color:#111;">${ue(k)}%</div>
        <div style="font-size:9px;color:${h};">${E}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${xt(y)}</td>
      ${a}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${c.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${c.product}</th>
      ${d}
    </tr></thead>
    <tbody>${f}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${z};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function nn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,g)=>n+(g.score||0),0),c=t.map((n,g)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;">${g+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${xt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function rn(t,e){const o=(t||[]).filter(p=>p.cnty==="TTL"||p.cnty==="TOTAL"||!p.cnty);if(!o.length)return"";o.sort((p,l)=>(l.citations||0)-(p.citations||0));const i=o.slice(0,20),c=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((p,l)=>p+(l.citations||0),0),g=i.map((p,l)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;">${l+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${xt(p.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${xt(p.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${(p.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;">${n>0?(p.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${c.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${c.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${c.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function an(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},c=Object.keys(o).filter(p=>o[p]!=null);if(!c.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},g=c.map(p=>{const l=o[p]||0,v=i[p]||0,d=l-v,f=d>0?"LG":d<0?"SS":"=",y=d>0?"#86EFAC":d<0?"#FCA5A5":"#FFFFFF",a=d>0?"#14532D":d<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${y};color:${a};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};font-weight:${p==="TTL"?"900":"600"};">${xt(p)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${l.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;">${v.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${d>0?"+":""}${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;font-weight:900;">${f}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function sn(t,e){var g;if(!t||!t.length)return"";const o=((g=t[0])==null?void 0:g.targetMonth)||"3월",i=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function c(p){return p>=80?"#D1FAE5":p>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(p=>{const l=(p.monthRate||0).toFixed(0),v=(p.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${z};background:#F5F5F5;">${xt(p.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(p.monthRate)};">${l}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.monthActual||0).toLocaleString()} / ${(p.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(p.progressRate)};">${v}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.cumActual||0).toLocaleString()} / ${(p.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${z};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${z};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Ie(t,e,o,i,c={},n="ko",g=[],p=[],l={}){const{weeklyAll:v={},weeklyLabels:d=[],categoryStats:f=null}=l,y=Qo(v,d),a=y.products.length?y.products:o,C=y.productsCnty.length?y.productsCnty:g,u=y.lastLabel,k=y.prevLabel,F=n==="en"?"GEO Weekly Report":"GEO 주간 보고서",m=t.period||u||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${xt(F)} — ${xt(m)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${z} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${z};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${z};">${xt(F)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${z};">${xt(m)} · ${u?`${xt(u)} ${n==="en"?"data":"기준"}`:""}</p>
    </div>

    ${tn(a,n,u,k)}
    ${on(C,n,u,k)}
    ${en(C,n,a,u)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${z};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${nn(i,n)}
    ${rn(p,n)}
    ${an(c,n)}

    ${sn(f,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${z};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const dt="#CF0652",B="'LG Smart','Arial Narrow',Arial,sans-serif",ye={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,noticeText:"",showNotice:!1,todoText:"",showTodo:!1,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},ln={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},cn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],dn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},pn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],un=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],hn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],wo=3;function gn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==wo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function fn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:wo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Fe={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function te(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function yn(t){try{const e=await fetch(te(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function mn(t,e,o){try{const i=await fetch(te(t).snapshots,{method:"POST",headers:Fe,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const c=await i.json();return c.ok?c.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function bn(t,e,o){try{const i=await fetch(`${te(t).snapshots}/${e}`,{method:"PUT",headers:Fe,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const c=await i.json();return c.ok?c.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function xn(t,e){try{const o=await fetch(`${te(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function At(t,e,o="ko",i=""){try{const c=await fetch("/api/generate-insight",{method:"POST",headers:Fe,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!c.ok){const g=await c.json().catch(()=>({}));throw new Error(g.error||`HTTP ${c.status}`)}const n=await c.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(c){throw console.error("[API] generateAIInsight failed:",c.message),c}}async function we(t){try{const e=await fetch(te(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function Ze(t){try{const e=await fetch(te(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function vn(t,e,o={}){const{includeProgressTracker:i=!1,trackerVersion:c="v1",includePromptList:n=!1}=o,[g,p]=await Promise.all([we("dashboard").catch(()=>null),we("visibility").catch(()=>null)]),l={...g||{},...p||{}};if(g&&Object.keys(g).forEach(j=>{l[j]==null&&g[j]!=null&&(l[j]=g[j])}),p!=null&&p.meta&&(g!=null&&g.meta)&&(l.meta={...g.meta||{},...p.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const v=l.meta||{},d=l.total||{},y=(l.productsPartial||l.products||[]).map(j=>{var X;const N=j.weekly||((X=l.weeklyMap)==null?void 0:X[j.id])||[],G=j.vsComp>0?j.score/j.vsComp*100:100;return{...j,weekly:N,monthly:j.monthly||[],compRatio:j.compRatio||Math.round(G),status:j.status||(G>=100?"lead":G>=80?"behind":"critical")}}),a=l.citations||[],C=l.dotcom||{},u=l.productsCnty||[],k=l.citationsCnty||[],F=l.weeklyLabels||null,m=l.weeklyAll||{},h=l.citationsByCnty||{},x=l.dotcomByCnty||{},E=e(y,u,a,k,"ko"),b=e(y,u,a,k,"en"),S={appendixPrompts:l.appendixPrompts||[],weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},R={monthlyVis:l.monthlyVis||[],includeProgressTracker:i,trackerVersion:c,includePromptList:n},T=t(v,d,E.products,E.citations,C,"ko",E.productsCnty,E.citationsCnty,F,m,h,x,R,S),A=t({...v,title:v.title||"GEO KPI Dashboard"},d,b.products,b.citations,C,"en",b.productsCnty,b.citationsCnty,F,m,h,x,R,S),D=`${v.period||""} ${v.title||"KPI Dashboard"}`.trim(),I=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:D,htmlKo:T,htmlEn:A})})).json();if(!I.ok)throw new Error(I.error||"게시 실패");return I}async function Qe(t,e){try{const o=await fetch(te(t).syncData,{method:"POST",headers:Fe,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const wn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ae={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},to={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function ve(t,e,o,i,c){return c!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ae[n.kr]||n.kr,compName:n.compNameEn||to[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||wn[n.country]||n.country,product:n.productEn||Ae[n.product]||n.product,compName:n.compNameEn||to[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ae[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function Cn(t,{from:e="ko",to:o="en"}={}){const c=[];for(let n=0;n<t.length;n+=20){const g=t.slice(n,n+20),p=await Promise.all(g.map(async l=>{if(!l||!l.trim())return l;const v=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(l)}`,d=await fetch(v);if(!d.ok)throw new Error(`번역 실패 (${d.status})`);return(await d.json())[0].map(y=>y[0]).join("")}));c.push(...p)}return c}const me=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],kn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function be(t){const e=kn.indexOf(t);return e>=0?e:999}function Co(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Fn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Co(o)]=o)}),e}function eo(t,e){var f,y,a,C;if(!((f=t==null?void 0:t.quantitativeGoals)!=null&&f.rows))return(a=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&a.length?[...t._dashboard.categoryStats].sort((u,k)=>be(u.category)-be(k.category)):null;const o=t.quantitativeGoals.rows,i=Fn((C=t.quantitativeResults)==null?void 0:C.rows),n=new Date().getMonth()+1-1,g=n>=3&&n<=12?`${n}월`:"3월";let p=e||t._month||g,l=me.indexOf(p);l<0&&(p="3월",l=0);const v=[...new Set(o.map(u=>u.taskCategory).filter(Boolean))],d=l>0?me[l-1]:null;return v.map(u=>{const k=o.filter(A=>A.taskCategory===u);let F=0,m=0,h=0,x=0,E=0,b=0;k.forEach(A=>{var N,G,X,Y,J;const D=Co(A),P=i[D]||{},I=typeof((N=A.monthly)==null?void 0:N[p])=="number"?A.monthly[p]:0,j=typeof((G=P.monthly)==null?void 0:G[p])=="number"?P.monthly[p]:0;if(m+=I,F+=j,d){const gt=typeof((X=A.monthly)==null?void 0:X[d])=="number"?A.monthly[d]:0,tt=typeof((Y=P.monthly)==null?void 0:Y[d])=="number"?P.monthly[d]:0;b+=gt,E+=tt}for(let gt=0;gt<=l;gt++){const tt=me[gt];typeof((J=P.monthly)==null?void 0:J[tt])=="number"&&(h+=P.monthly[tt])}me.forEach(gt=>{var tt;typeof((tt=A.monthly)==null?void 0:tt[gt])=="number"&&(x+=A.monthly[gt])})});const S=m>0?Math.round(F/m*1e3)/10:0,R=b>0?Math.round(E/b*1e3)/10:0,T=x>0?Math.round(h/x*1e3)/10:0;return{category:u,taskCount:k.length,targetMonth:p,monthRate:S,prevMonthRate:R,prevMonth:d,progressRate:T,monthActual:F,monthGoal:m,cumActual:h,annualGoal:x}}).sort((u,k)=>be(u.category)-be(k.category))}function Sn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}function An(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const i=parseInt(e[1])-1;return i<3?"3월":`${i}월`}async function ko(){const t=await Le(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const mt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},pe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},En={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},oo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],no=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Tn(t,e,o,i,c={}){const n=await ko(),g=n.utils.book_new(),p=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);p["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(g,p,"meta");const l=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);l["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(g,l,"total");const v=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(u=>[u.id,u.bu,u.kr,u.score,u.prev,u.vsComp,u.compName])]);v["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(g,v,"products");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(u=>[u.id,u.kr,...u.weekly])]);d["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(g,d,"weekly");const f=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(u=>[u.rank,u.source,u.category,u.score,u.delta,u.ratio??0])]);f["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(g,f,"citations");const y=(c==null?void 0:c.lg)||{},a=(c==null?void 0:c.samsung)||{},C=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...oo.map(u=>`LG_${u}`),...no.map(u=>`Samsung_${u}`)],[...oo.map(u=>y[u]??0),...no.map(u=>a[u]??0)]]);C["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(g,C,"dotcom"),n.writeFile(g,"GEO_Newsletter_템플릿.xlsx")}function zt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),c=parseFloat(i)||0;return o?+c.toFixed(2):Math.abs(c)<=1&&c!==0?+(c*100).toFixed(2):+c.toFixed(2)}function xe(t){return t==null||String(t).trim()===""?null:zt(t)}function jt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Wt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}function ie(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,c=0;const n=e.match(/(\d{4})/);n&&(c=parseInt(n[1]));const g=e.match(/(\d{1,2})월/);if(g)i=parseInt(g[1]);else{const p=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(p)i=o[p[1].toLowerCase()];else{const l=e.match(/\d{4}[-\/](\d{1,2})/);l&&(i=parseInt(l[1]))}}return c?c*12+i:i}function $n(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const g=String(n[0]).trim(),p=n[1]??"";if(o.includes(g))e[g]=parseInt(p)||(g==="titleFontSize"?24:10);else if(i.includes(g)){const l=String(p).trim().toLowerCase();e[g]=l==="y"||l==="yes"||l==="true"||l==="1"}else e[g]=String(p)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(g=>g.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},g=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);g&&(e.period=`${n[g[2]]||g[2]} ${g[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const g=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${g[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function Ln(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let c=!1;if(t.forEach(I=>{if(!I[0]||String(I[0]).startsWith("[")||String(I[0]).startsWith("※")||I[0]==="key")return;const j=String(I[0]).trim();(o.includes(j)||e.includes(j))&&(c=!0,e.includes(j)?i[j]=parseInt(I[1])||0:i[j]=zt(I[1]))}),c&&Object.keys(i).length>=2)return{total:i};const n=t.find(I=>I.some(j=>String(j||"").trim().toUpperCase()==="LG")),g=n?n.findIndex(I=>String(I||"").trim().toUpperCase()==="LG"):4,p=n?n.findIndex(I=>{const j=String(I||"").trim().toUpperCase();return j==="SAMSUNG"||j==="SAMSUMG"}):5,l=p>=0?p:g+1,v=n?n.findIndex(I=>/date/i.test(String(I||"").trim())):0,d=n?n.findIndex(I=>/countries|country/i.test(String(I||"").trim())):2,f=n?n.findIndex(I=>/divisions?/i.test(String(I||"").trim())):3,y=[];t.filter(I=>{const j=String(I[v>=0?v:0]||"").trim();return j&&!j.startsWith("[")&&!j.startsWith("※")&&!/^date$/i.test(j)&&!/^key$/i.test(j)}).forEach(I=>{const j=String(I[v>=0?v:0]||"").trim(),N=Wt(I[d>=0?d:2]),G=String(I[f>=0?f:3]||"").trim().toUpperCase(),X=zt(I[g]),Y=zt(I[l]);j&&X>0&&y.push({date:j,country:N,division:G,lg:X,comp:Y})});const C=y.filter(I=>(I.country==="TOTAL"||I.country==="TTL")&&(I.division==="TOTAL"||I.division==="TTL"||I.division===""));C.sort((I,j)=>ie(I.date)-ie(j.date));const u=C[C.length-1],k=C.length>=2?C[C.length-2]:null;if(!u){const I=t.find(X=>X.some(Y=>String(Y||"").trim().toUpperCase()==="TOTAL"));if(!I)return{};const j=zt(I[g]),N=zt(I[l]),G={total:{score:j,prev:j,vsComp:N,rank:j>=N?1:2,totalBrands:12}};return y.length&&(G.monthlyVis=y),G}const F=u.lg,m=u.comp,h=k?k.lg:F,x=u.date,E=k?k.date:null;function b(I){const j={};return y.filter(N=>N.date===I&&(N.country==="TOTAL"||N.country==="TTL")&&N.division&&N.division!=="TOTAL"&&N.division!=="TTL"&&N.division!=="").forEach(N=>{j[N.division]={lg:N.lg,comp:N.comp}}),j}const S=b(x),R=E?b(E):{};function T(I){const j={};return y.filter(N=>N.date===I&&N.country&&N.country!=="TOTAL"&&N.country!=="TTL"&&(N.division==="TOTAL"||N.division==="TTL"||N.division==="")).forEach(N=>{j[N.country]={lg:N.lg,comp:N.comp}}),j}const A=T(x),D=E?T(E):{},P={total:{score:F,prev:h,vsComp:m,rank:F>=m?1:2,totalBrands:12},...Object.keys(S).length?{buTotals:S}:{},...Object.keys(R).length?{buTotalsPrev:R}:{},...Object.keys(A).length?{countryTotals:A}:{},...Object.keys(D).length?{countryTotalsPrev:D}:{}};return x&&(P.derivedPeriod=x),y.length&&(P.monthlyVis=y),P}function Bn(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((c,n)=>n>=1&&String(c||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),ro(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),ro(t,e)}function ro(t,e){const o=t[e],i=o.findIndex((d,f)=>f>=3&&String(d||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const c=[];for(let d=4;d<o.length;d++){const f=String(o[d]||"").trim();f&&f.toUpperCase()!=="LG"&&c.push({name:f,col:d})}const n=t.slice(e+1).filter(d=>{const f=String(d[0]||"").trim();return f&&!f.startsWith("[")&&!f.startsWith("※")}),g={},p={};n.forEach(d=>{const f=String(d[0]||"").trim(),y=String(d[1]||"").trim(),a=String(d[2]||"").trim(),C=Wt(d[2])||a,u=String(d[3]||"").trim(),k=zt(d[i]),F=c.map(E=>({name:E.name,score:zt(d[E.col])})).filter(E=>E.score>0),m=[...F].sort((E,b)=>b.score-E.score)[0]||{name:"",score:0},h=+(k-m.score).toFixed(2),x={LG:k};if(F.forEach(E=>{x[E.name]=E.score}),C==="TTL"||C==="TOTAL"){const E=pe[u]||u.toLowerCase(),b=En[u]||u;g[E]||(g[E]=[]),g[E].push({id:E,bu:f,kr:b,category:u,date:y,score:k,vsComp:m.score,compName:m.name,allScores:x})}else{const E=`${u}|${C}`;p[E]||(p[E]=[]),p[E].push({product:u,country:C,date:y,score:k,compName:m.name,compScore:m.score,gap:h,allScores:x})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(g).join(", ")||"없음"} / 국가별: ${Object.keys(p).length}건`);const l=[];for(const[d,f]of Object.entries(g)){f.sort((u,k)=>ie(u.date)-ie(k.date));const y=f[f.length-1],a=f.length>=2?f[f.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${f.map(u=>u.date).join(",")}] score=${y.score} prev=${a} vsComp=${y.vsComp}`);const C=f.map(u=>({date:u.date,score:u.score,comp:u.vsComp,allScores:u.allScores}));l.push({...y,prev:a,monthlyScores:C})}const v=[];for(const d of Object.values(p)){d.sort((a,C)=>ie(a.date)-ie(C.date));const f=d[d.length-1],y=d.length>=2?d[d.length-2].score:null;v.push({...f,prev:y})}return{...l.length?{productsPartial:l}:{},...v.length?{productsCnty:v}:{}}}function Fo(t,e=0,o){const i=o??t.length;for(let c=e;c<i;c++){const n=[];for(const g of t[c]||[]){const p=String(g||"").split(/\n/)[0].trim();/^W\d+/i.test(p)&&n.push(p.toUpperCase())}if(n.length>=2)return n}return null}const Ee={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function io(t,e){var C;const o=e?Ee[e]||{}:{...Ee.MS,...Ee.ES};if(!Object.keys(o).length)return{};const i=t.findIndex(u=>u.some(k=>String(k||"").trim()in o));if(i<0)return{};const c=t[i],n=t.findIndex((u,k)=>k>i&&u.some(F=>String(F||"").trim()==="TTL")),g=n>0?n+1:Math.min(i+20,t.length);let p=-1,l=-1;for(let u=i+1;u<g;u++){const k=t[u];if(!k.some(h=>String(h||"").trim().toUpperCase()==="LG"))continue;if(l<0&&(l=u),k.some(h=>{const x=String(h||"").trim().toLowerCase().replace(/[\s_-]/g,"");return x==="nonbrand"||x==="nb"})){p=u;break}}const v=p>=0?p:l>=0?l:n;if(v<0)return{};const d=t[v],f={},y=Object.keys(o).map(u=>c.findIndex(k=>String(k||"").trim()===u)).filter(u=>u>=0).sort((u,k)=>u-k);for(const[u,k]of Object.entries(o)){const F=c.findIndex(x=>String(x||"").trim()===u);if(F<0)continue;const m=y.find(x=>x>F)||F+20,h=[];for(let x=F+1;x<m&&x<d.length;x++){const E=zt(d[x]);E>0&&h.push(E)}h.length&&(f[k]=h)}if(!Object.keys(f).length)return{};const a=Fo(t,i,g)||((C=Object.values(f)[0])==null?void 0:C.map((u,k)=>`W${k+1}`))||[];return{weeklyMap:f,weeklyLabels:a}}function Rn(t,e,o){for(const i of Object.values(t))for(const c of Object.values(i))for(const[n,g]of Object.entries(c))c[n]=g.slice(o);for(const[i,c]of Object.entries(e))e[i]=c.slice(o)}function Te(t,e){const o={};let i=[],c=-1;for(let b=0;b<Math.min(t.length,10);b++){const S=t[b];if(!S)continue;let R=0;for(let T=0;T<S.length;T++)/^w\d+$/i.test(String(S[T]||"").trim())&&R++;if(R>=2){c=b;break}}let n=t.findIndex(b=>{const S=b.slice(0,5).map(R=>String(R||"").trim().toLowerCase());return S.includes("category")||S.includes("product")});if(n<0&&c>=0&&(n=c),n<0&&(n=t.findIndex(b=>{let S=!1,R=0;for(let T=0;T<Math.min(b.length,10);T++){const A=String(b[T]||"").trim();A.toUpperCase()==="LG"?(S=!0,R++):A&&isNaN(parseFloat(A))&&R++}return S&&R>=3})),n<0)return io(t,e);const g=t[n],p=n+1;let l=null;if(t[p]){const b=t[p].slice(4,8).map(S=>String(S||"").trim()).filter(Boolean);b.length&&b.every(S=>/^\d{1,2}\/\d{1,2}/.test(S)||/~/.test(S)||/^\(/.test(S))&&(l=p)}const v=l!=null?l+1:p,d=t.slice(v).filter(b=>b[0]!=null&&String(b[0]).trim()),f=g.findIndex(b=>{const S=String(b||"").trim().toLowerCase();return S==="category"||S==="product"}),y=g.findIndex(b=>{const S=String(b||"").trim().toLowerCase();return S==="country"||S==="county"}),a=g.findIndex(b=>String(b||"").trim().toLowerCase()==="brand"),C=g.findIndex(b=>String(b||"").trim().toUpperCase()==="LG"),u=[],k=c>=0?t[c]:g;for(let b=0;b<k.length;b++)/^w\d+$/i.test(String(k[b]||"").trim())&&u.push(b);if(!u.length)for(let b=0;b<g.length;b++){const S=String(g[b]||"").split(/\n/)[0].trim();/^w\d+/i.test(S)&&u.push(b)}i=u.map(b=>String(k[b]||"").trim().toUpperCase());let F=u.map((b,S)=>{const R=i[S]||`W${b}`;let T="";const A=l!=null?t[l]:c!==n&&c>=0?t[c+1]:null;if(A){const D=String(A[b]||"").trim();D&&/\d/.test(D)&&(T=D.startsWith("(")?D:`(${D})`)}return T?`${R}${T}`:R});console.log(`[parseWeekly:${e}] wLabelRow:${c} headerIdx:${n} dateRangeRow:${l} wCols:${u.length} labels:`,i.slice(0,5),"full:",F.slice(-2));function m(b){if(y<0)return!0;const S=String(b[y]||"").replace(/[()]/g,"").trim().toUpperCase();return S==="TOTAL"||S==="TTL"||S===""}const h=g.findIndex(b=>{const S=String(b||"").trim().toLowerCase().replace(/[\s_-]/g,"");return S==="b/nb"||S==="bnb"||S==="brand/nonbrand"});function x(b){if(h<0)return!0;const S=String(b[h]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return S==="nonbrand"||S==="nb"}const E={};if(a>=0){if(!u.length){const b=d.find(S=>String(S[a]||"").trim().toUpperCase()==="LG"&&x(S));if(b){for(let S=a+1;S<b.length;S++)if(String(b[S]||"").trim())u.push(S);else if(u.length)break;i=Fo(t,0,n+1)||u.map((S,R)=>`W${R+1}`)}}d.forEach(b=>{if(!x(b))return;const S=String(b[a]||"").trim();if(!S)return;const R=String(b[f>=0?f:0]||"").trim();if(!R)return;const T=pe[R]||R.toLowerCase(),A=y>=0?Wt(b[y]):"TOTAL",D=A==="TOTAL"||A==="TTL"||!A?"Total":A;E[T]||(E[T]={}),E[T][D]||(E[T][D]={}),E[T][D][S]=u.map(P=>xe(b[P]))}),d.forEach(b=>{if(String(b[a]||"").trim().toUpperCase()!=="LG"||!x(b)||!m(b))return;const R=String(b[f>=0?f:0]||"").trim();R&&(o[pe[R]||R.toLowerCase()]=u.map(T=>xe(b[T])))})}else if(C>=0){const b=g.findIndex(T=>{const A=String(T||"").trim().toLowerCase();return A==="date"||A==="week"||A==="period"}),S={},R=[];d.forEach(T=>{if(!m(T))return;const A=String(T[f>=0?f:3]||"").trim();if(A){if(b>=0){const D=String(T[b]||"").trim();D&&!R.includes(D)&&R.push(D)}S[A]=S[A]||[],S[A].push(xe(T[C]))}}),Object.entries(S).forEach(([T,A])=>{o[pe[T]||T.toLowerCase()]=A}),R.length&&(i=R)}else u.length&&d.forEach(b=>{if(!m(b))return;const S=String(b[f>=0?f:0]||"").trim();S&&(o[pe[S]||S.toLowerCase()]=u.map(R=>xe(b[R])))});if(i.length>0){let b=i.length;for(const A of Object.values(E))for(const D of Object.values(A))for(const P of Object.values(D)){const I=P.findIndex(j=>j!=null);I>=0&&I<b&&(b=I)}for(const A of Object.values(o)){const D=A.findIndex(P=>P!=null);D>=0&&D<b&&(b=D)}const S=12,T=i.length-b>S?i.length-S:b;T>0&&T<i.length&&(i=i.slice(T),F=F.slice(T),Rn(E,o,T))}if(Object.keys(o).length){const b={weeklyMap:o};return i.length&&(b.weeklyLabels=i),F.length&&(b.weeklyLabelsFull=F),Object.keys(E).length&&(b.weeklyAll=E),b}return io(t,e)}function jn(t){const e=t.findIndex(h=>h.some(b=>{const S=String(b||"").trim().toLowerCase();return S.includes("page type")||S==="country"})?!h.some(b=>/^\[.*\]$/.test(String(b||"").trim())):!1);if(e<0)return{};const o=t[e],i=[];for(let h=2;h<o.length;h++){const x=String(o[h]||"").trim();if(/\bLG\b/i.test(x)){const E=h+1;E<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[E]||""))&&i.push({lg:h,ss:E})}}i.length||i.push({lg:2,ss:3});const c=t.slice(e+1).filter(h=>h[0]!=null&&String(h[0]).trim());let n=i[0];for(let h=i.length-1;h>=0;h--)if(c.some(x=>jt(x[i[h].lg])>0)){n=i[h];break}if(!c.some(h=>jt(h[n.lg])>0)){for(let h=Math.min(n.lg,o.length)-1;h>=2;h--)if(c.some(x=>jt(x[h])>0)){n={lg:h-1,ss:h};break}}const g={},p={},l={},v={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},d=new Set,f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=i.map(h=>{const x=String(o[h.lg]||"").trim(),E=x.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():x.replace(/\s*LG\s*/i,"").trim()}),a={};c.forEach(h=>{const x=Wt(h[0]),E=String(h[1]||"").replace(/[()]/g,"").trim();let b=/page total|^ttl$/i.test(E)?"TTL":E;b.toLowerCase()==="microsite"&&(b="Microsites");const S=v[x]||x.toUpperCase();d.add(S);const R=jt(h[n.lg]),T=jt(h[n.ss]);S==="TTL"?(g[b]=(g[b]||0)+R,p[b]=(p[b]||0)+T):(l[S]||(l[S]={lg:{},samsung:{}}),l[S].lg[b]=(l[S].lg[b]||0)+R,l[S].samsung[b]=(l[S].samsung[b]||0)+T),S==="TTL"&&(a[b]||(a[b]={}),i.forEach((A,D)=>{var j,N;const P=jt(h[A.lg]),I=jt(h[A.ss]);if(P>0||I>0){const G=y[D]||`M${D+1}`;a[b][G]={lg:(((j=a[b][G])==null?void 0:j.lg)||0)+P,samsung:(((N=a[b][G])==null?void 0:N.samsung)||0)+I}}}))});const C=new Set;Object.values(a).forEach(h=>Object.keys(h).forEach(x=>C.add(x)));const u=f.filter(h=>C.has(h)),k={},F={};i.forEach((h,x)=>{const E=y[x];if(!E)return;const b={},S={};c.forEach(R=>{const T=Wt(R[0]),A=String(R[1]||"").replace(/[()]/g,"").trim();let D=/page total|^ttl$/i.test(A)?"TTL":A;D.toLowerCase()==="microsite"&&(D="Microsites");const P=v[T]||T.toUpperCase(),I=jt(R[h.lg]),j=jt(R[h.ss]);P==="TTL"?(b[D]=(b[D]||0)+I,S[D]=(S[D]||0)+j):(F[E]||(F[E]={}),F[E][P]||(F[E][P]={lg:{},samsung:{}}),F[E][P].lg[D]=(F[E][P].lg[D]||0)+I,F[E][P].samsung[D]=(F[E][P].samsung[D]||0)+j)}),Object.keys(b).length&&(k[E]={lg:b,samsung:S})});const m={};return(g.TTL||Object.keys(g).length)&&(m.dotcom={lg:g,samsung:p,byMonth:k,byCntyByMonth:F}),Object.keys(l).length&&(m.dotcomByCnty=l),Object.keys(a).length&&u.length&&(m.dotcomTrend=a,m.dotcomTrendMonths=u),m}function In(t){const e=t.findIndex(h=>h.some(b=>{const S=String(b||"").trim().toLowerCase();return S==="channel"||S==="country"})?!h.some(b=>/^\[.*\]$/.test(String(b||"").trim())):!1),o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let c=-1,n=-1,g=2;for(let h=0;h<o.length;h++){const x=String(o[h]||"").trim().toLowerCase();x==="country"&&c<0&&(c=h),x==="channel"&&n<0&&(n=h)}if(c>=0&&n>=0)g=Math.max(c,n)+1;else{const h=t[i];h&&!String(h[0]||"").trim()?(c=1,n=2,g=3):(c=0,n=1,g=2)}const p=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,l=[];for(let h=g;h<o.length;h++){const x=String(o[h]||"").trim();x&&p.test(x)&&l.push({col:h,label:x})}if(e>0){const h=t[e-1];if(h)for(let x=g;x<h.length;x++){const E=String(h[x]||"").trim();E&&p.test(E)&&!l.some(b=>b.col===x)&&l.push({col:x,label:E})}}if(l.sort((h,x)=>h.col-x.col),l.length>0){const h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=l[0],E=h.findIndex(b=>x.label.toLowerCase().startsWith(b.toLowerCase()));if(E>0&&x.col>g){const b=t.slice(i),S=[];for(let R=g;R<x.col;R++)b.some(T=>{const A=typeof T[R]=="number"?T[R]:parseFloat(String(T[R]||"").replace(/,/g,""));return!isNaN(A)&&A>0})&&S.push(R);for(let R=S.length-1;R>=0;R--){const T=E-(S.length-R);T>=0&&l.push({col:S[R],label:h[T]})}l.sort((R,T)=>R.col-T.col)}}const v=t.slice(i).filter(h=>h.some(x=>x!=null&&String(x).trim())),d=[],f={},y={},a=new Set;v.forEach(h=>{const x=Wt(h[c]),E=String(h[n]||"").replace(/[()]/g,"").trim();if(!E||E.toLowerCase()==="total")return;a.add(x);let b=0;if(l.length>0)for(let R=l.length-1;R>=0;R--){const T=jt(h[l[R].col]);if(T>0){b=T;break}}else for(let R=h.length-1;R>=g;R--){const T=jt(h[R]);if(T>0){b=T;break}}const S={};l.forEach(({col:R,label:T})=>{const A=jt(h[R]);A>0&&(S[T]=A)}),x==="TTL"||x==="TOTAL"?(b>0&&d.push({source:E,category:"",score:b,delta:0,ratio:0,monthScores:S}),Object.keys(S).length>0&&(f[E]=S)):b>0&&(y[x]||(y[x]=[]),y[x].push({source:E,category:"",score:b,delta:0,ratio:0,monthScores:S}))});const C=d.reduce((h,x)=>h+x.score,0);d.sort((h,x)=>x.score-h.score),d.forEach((h,x)=>{h.rank=x+1,h.ratio=C>0?+(h.score/C*100).toFixed(1):0});for(const[h,x]of Object.entries(y)){const E=x.reduce((b,S)=>b+S.score,0);x.sort((b,S)=>S.score-b.score),x.forEach((b,S)=>{b.rank=S+1,b.ratio=E>0?+(b.score/E*100).toFixed(1):0})}const u=l.map(h=>h.label).filter(h=>Object.values(f).some(x=>x[h]>0));for(const[h,x]of Object.entries(y));const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let F=null;if(u.length>0){const h=u[u.length-1],x=k.findIndex(E=>h.toLowerCase().startsWith(E.toLowerCase()));x>=0&&(F=`${k[x]} ${new Date().getFullYear()}`)}const m={};return d.length>0&&(m.citations=d),Object.keys(y).length>0&&(m.citationsByCnty=y),Object.keys(f).length>0&&(m.citTouchPointsTrend=f,m.citTrendMonths=u),F&&(m.citDerivedPeriod=F),m}function Dn(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let c=null,n=0,g=-1,p=-1,l=-1,v=-1,d=4;for(let m=0;m<Math.min(t.length,10);m++){const h=t[m];if(!h)continue;const x=h.some(S=>/^no$/i.test(String(S||"").trim())),E=h.some(S=>/^region$/i.test(String(S||"").trim())),b=h.some(S=>/domain|domian/i.test(String(S||"").trim()));if(x||E||b){c=h,n=m+1;for(let S=0;S<h.length;S++){const R=String(h[S]||"").trim().toLowerCase();R==="no"&&g<0&&(g=S),R==="region"&&p<0&&(p=S),(R==="domain"||R==="domian")&&l<0&&(l=S)}break}(String(h[0]||"").trim().startsWith("[")||!String(h[0]||"").trim())&&(n=m+1)}const f=g>=0||p>=0;if(f)p=p>=0?p:1,l=2,v=3,d=4;else if(l>=0)v=l+1,d=l+2;else{for(let m=n;m<Math.min(t.length,n+5);m++){const h=t[m];if(h){for(let x=0;x<Math.min(h.length,6);x++){const E=String(h[x]||"").trim();if(E.includes(".")&&E.length>3&&!i.test(E)){l=x,v=x+1,d=x+2;break}}if(l>=0)break}}l<0&&(l=0,v=1,d=2)}const y=[];if(c)for(let m=d;m<c.length;m++){const h=String(c[m]||"").trim();h&&i.test(h)&&y.push({col:m,label:h})}const a=[],C={},u={};let k="TTL";for(let m=n;m<t.length;m++){const h=t[m];if(!h)continue;const x=String(h[l]||"").trim(),E=String(h[v]||"").trim();if(!f&&(!x||!x.includes("."))){const T=String(h[l]||"").trim().toUpperCase(),A=e[T]||(o.includes(T)?T:null);A&&(!E||E==="")&&(k=A);continue}if(!x||!x.includes("."))continue;let b="TTL";if(f&&p>=0){const T=String(h[p]||"").trim().toUpperCase();b=e[T]||T}else f||(b=k);let S=0;if(y.length>0)for(let T=y.length-1;T>=0;T--){const A=String(h[y[T].col]||"").replace(/,/g,"").trim(),D=parseFloat(A);if(!isNaN(D)&&D>0){S=D;break}}else for(let T=h.length-1;T>=d;T--){const A=String(h[T]||"").replace(/,/g,"").trim();if(!A)continue;const D=parseFloat(A);if(!isNaN(D)&&D>0){S=D;break}}if(y.length>0){const T={};if(y.forEach(({col:A,label:D})=>{const P=String(h[A]||"").replace(/,/g,"").trim(),I=parseFloat(P);!isNaN(I)&&I>0&&(T[D]=I)}),Object.keys(T).length>0){const A=`${b}|${x}`;C[A]={cnty:b,domain:x,type:E,months:T}}}const R={};y.length>0&&y.forEach(({col:T,label:A})=>{const D=String(h[T]||"").replace(/,/g,"").trim(),P=parseFloat(D);!isNaN(P)&&P>0&&(R[A]=P)}),S>0&&(u[b]=(u[b]||0)+1,a.push({cnty:b,rank:u[b],domain:x,type:E,citations:S,monthScores:R}))}const F={};if(a.length>0&&(F.citationsCnty=a),Object.keys(C).length>0){F.citDomainTrend=C;const m=y.map(h=>h.label).filter(h=>Object.values(C).some(x=>x.months[h]>0));F.citDomainMonths=m}return F}function ao(t,e){const o=t.findIndex(m=>m?m.some(h=>/^type$/i.test(String(h||"").trim()))&&m.some(h=>/^county|^country$/i.test(String(h||"").trim())):!1);if(o<0)return{};const i=t[o];let c=-1,n=-1,g=-1,p=-1,l=4;for(let m=0;m<i.length;m++){const h=String(i[m]||"").trim().toLowerCase();h==="type"&&c<0&&(c=m),(h==="county"||h==="country")&&n<0&&(n=m),(h==="topic"||h==="topoc")&&g<0&&(g=m),h==="brand"&&p<0&&(p=m)}l=Math.max(c,n,g,p)+1;const v=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,d=/^w\d+/i,f=[],y=[o];for(let m=0;m<=o;m++)m!==o&&y.push(m);for(const m of y){if(f.length>0)break;const h=t[m];if(h)for(let x=l;x<h.length;x++){const E=String(h[x]||"").split(/\n/)[0].trim();E&&(v.test(E)||d.test(E))&&f.push({col:x,label:E})}}const a=t.slice(o+1),C=[];a.forEach(m=>{if(!m)return;const h=String(m[c]||"").trim(),x=Wt(m[n]),E=String(m[g]||"").trim(),b=String(m[p]||"").trim();if(!E||!b)return;const S={};let R=0;f.forEach(({col:T,label:A})=>{const D=zt(m[T]);D>0&&(S[A]=D,R=D)}),(Object.keys(S).length>0||E)&&C.push({type:h,country:x,topic:E,brand:b,scores:S,latestScore:R})});const u=e==="weekly"?"weeklyPR":"monthlyPR",k=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",F={};return C.length>0&&(F[u]=C),f.length>0&&(F[k]=f.map(m=>m.label)),F}function so(t,e){const o=t.findIndex(F=>F?F.some(m=>/steakholders|stakeholders/i.test(String(m||"").trim()))||F.some(m=>/^type$/i.test(String(m||"").trim()))&&F.some(m=>/topoc|topic/i.test(String(m||"").trim())):!1);if(o<0)return{};const i=t[o];let c=-1,n=-1,g=-1,p=-1,l=4;for(let F=0;F<i.length;F++){const m=String(i[F]||"").trim().toLowerCase();(m==="steakholders"||m==="stakeholders")&&c<0&&(c=F),m==="type"&&n<0&&(n=F),(m==="country"||m==="county")&&g<0&&(g=F),(m==="topoc"||m==="topic")&&p<0&&(p=F)}l=Math.max(c,n,g,p)+1;const v=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,d=/^w\d+/i,f=[];for(let F=l;F<i.length;F++){const m=String(i[F]||"").split(/\n/)[0].trim();m&&(v.test(m)||d.test(m))&&f.push({col:F,label:m})}const y=t.slice(o+1),a=[];y.forEach(F=>{if(!F)return;const m=String(F[c]||"").trim(),h=String(F[n]||"").trim(),x=Wt(F[g]),E=String(F[p]||"").trim();if(!E||!m)return;const b={};let S=0;f.forEach(({col:R,label:T})=>{const A=zt(F[R]);A>0&&(b[T]=A,S=A)}),a.push({stakeholder:m,type:h,country:x,topic:E,scores:b,latestScore:S})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",u=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",k={};return a.length>0&&(k[C]=a),f.length>0&&(k[u]=f.map(F=>F.label)),k}function Pn(t){const e=t.findIndex(p=>p?p.some(l=>/^prompts?$/i.test(String(l||"").trim()))&&p.some(l=>/^country$/i.test(String(l||"").trim())):!1);if(e<0)return{};const o=t[e],i={},c=["country","prompts","division","category","launched","branded","cej","topic"];for(let p=0;p<o.length;p++){const l=String(o[p]||"").trim().toLowerCase();c.includes(l)&&!i[l]&&(i[l]=p)}const n=t.slice(e+1),g=[];return n.forEach(p=>{if(!p)return;const l=String(p[i.prompts]||"").trim();l&&g.push({country:Wt(p[i.country]),prompt:l,division:String(p[i.division]||"").trim(),category:String(p[i.category]||"").trim(),launched:String(p[i.launched]||"").trim(),branded:String(p[i.branded]||"").trim(),cej:String(p[i.cej]||"").trim(),topic:String(p[i.topic]||"").trim()})}),g.length>0?{appendixPrompts:g}:{}}function Nn(t){const e=t.findIndex(d=>{if(!d)return!1;const f=d.some(a=>/^(country|county)$/i.test(String(a||"").trim())),y=d.some(a=>/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(a||"").trim()));return f&&y});if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,f)=>console.log(`  row${f}:`,d==null?void 0:d.slice(0,6))),{};const o=t[e];let i=-1,c=-1,n=-1;for(let d=0;d<o.length;d++){const f=String(o[d]||"").trim().toLowerCase();i<0&&(f==="country"||f==="county")&&(i=d),c<0&&(f==="category"||f==="product"||f==="제품"||f==="카테고리")&&(c=d),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(f)&&(n=d)}if(i<0||c<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:c,statusCol:n,header:o}),{};const g=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),p={};let l=0,v=0;return t.slice(e+1).forEach(d=>{if(!d)return;const f=String(d[n]||"").trim();if(!f)return;l++;const y=f.toLowerCase().replace(/\s+/g," ");if(!g.has(y)&&!g.has(y.replace(/\s/g,"")))return;const a=Wt(d[i]),C=String(d[c]||"").trim();if(!a||!C)return;const u=C.toUpperCase(),F={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"}[u]||u;p[`${a}|${F}`]=!0,F!==u&&(p[`${a}|${u}`]=!0),v++}),console.log(`[parseUnlaunched] 총 ${l}행 중 ${v}행 매칭 / 미출시 ${Object.keys(p).length}건`),Object.keys(p).length>0?{unlaunchedMap:p}:{}}function On(t){const e=t.findIndex(d=>d&&d.some(f=>/^bu$/i.test(String(f||"").trim()))&&d.some(f=>/topic/i.test(String(f||"").trim())));if(e<0)return{};const o=t[e];let i=-1,c=-1,n=-1,g=-1,p=-1;for(let d=0;d<o.length;d++){const f=String(o[d]||"").trim().toLowerCase();i<0&&f==="bu"&&(i=d),c<0&&f.includes("topic")&&f.includes("대시보드")&&(c=d),n<0&&(f==="explanation"||f==="설명")&&(n=d),g<0&&f.includes("기존")&&(g=d),p<0&&f.includes("topic")&&f.includes("row")&&(p=d)}c<0&&(c=1),n<0&&(n=2);const l=[];let v="";return t.slice(e+1).forEach(d=>{if(!d)return;const f=String(d[i]||"").trim();f&&(v=f);const y=String(d[c]||"").trim();if(!y)return;const a=String(d[n]||"").trim(),C=g>=0?String(d[g]||"").trim():"",u=p>=0?String(d[p]||"").trim():"";l.push({bu:v,topic:y,explanation:a,oldTopic:C,topicRow:u})}),l.length>0?{prTopicList:l}:{}}function Mn(t,e){return t===mt.meta?$n(e):t===mt.visSummary?Ln(e):t===mt.productMS||t===mt.productHS||t===mt.productES?Bn(e):t===mt.weeklyMS?Te(e,"MS"):t===mt.weeklyHS?Te(e,"HS"):t===mt.weeklyES?Te(e,"ES"):t===mt.monthlyPR?ao(e,"monthly"):t===mt.weeklyPR?ao(e,"weekly"):t===mt.monthlyBrandPrompt?so(e,"monthly"):t===mt.weeklyBrandPrompt?so(e,"weekly"):t===mt.citPageType?jn(e):t===mt.citTouchPoints?In(e):t===mt.citDomain?Dn(e):t===mt.appendix?Pn(e):t===mt.unlaunched?Nn(e):t===mt.prTopicList?On(e):{}}function zn(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function _n(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,c=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!c.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${c.status}).`);const n=await c.text(),g=await ko(),p=g.read(n,{type:"string"}),l=p.Sheets[p.SheetNames[0]];return g.utils.sheet_to_json(l,{header:1,defval:""})}async function Gn(t,e){var n,g;const o=Object.values(mt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const c=await Promise.allSettled(o.map(p=>_n(t,p).then(l=>({name:p,rows:l}))));for(let p=0;p<o.length;p++){const l=o[p],v=c[p];if(e==null||e(`"${l}" 처리 중... (${p+1}/${o.length})`),v.status==="rejected"){console.warn(`"${l}" 시트 건너뜀:`,(n=v.reason)==null?void 0:n.message);continue}try{const{rows:d}=v.value,f=Mn(l,d);for(const[y,a]of Object.entries(f))y==="weeklyLabels"||y==="weeklyLabelsFull"?i[y]||(i[y]=a):Array.isArray(a)&&Array.isArray(i[y])?i[y]=[...i[y],...a]:a&&typeof a=="object"&&!Array.isArray(a)&&i[y]&&typeof i[y]=="object"&&!Array.isArray(i[y])?i[y]={...i[y],...a}:i[y]=a}catch(d){console.warn(`"${l}" 시트 처리 실패:`,d.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const p={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},l={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},v=[];for(const[d,f]of Object.entries(i.weeklyAll)){const y=f.Total||f.TTL||{},a=y.LG||y.lg||[],C=Object.entries(y).filter(([h])=>h!=="LG"&&h!=="lg"),u=a.length?a[a.length-1]:0,k=a.length>=5?a[0]:0;let F="",m=0;for(const[h,x]of C){const E=x.length?x[x.length-1]:0;E>m&&(m=E,F=h)}u>0&&v.push({id:d,bu:l[d]||"HS",kr:p[d]||d,category:d,date:((g=i.meta)==null?void 0:g.period)||"",score:u,prev:k,vsComp:m,compName:F,allScores:{LG:u,...F?{[F]:m}:{}}})}if(v.length&&(i.productsPartial=v,console.log(`[SYNC] weeklyAll에서 ${v.length}개 제품 생성:`,v.map(d=>`${d.id}=${d.score}`).join(", "))),!i.productsCnty){const d=[];for(const[f,y]of Object.entries(i.weeklyAll)){const a=p[f]||f;for(const[C,u]of Object.entries(y)){if(C==="Total"||C==="TTL")continue;const k=u.LG||u.lg||[],F=k.length?k[k.length-1]:0;if(F<=0)continue;const m=k.length>=2?k[0]:0;let h="",x=0;const E={LG:F};for(const[S,R]of Object.entries(u)){if(S==="LG"||S==="lg")continue;const T=R.length?R[R.length-1]:0;E[S]=T,T>x&&(x=T,h=S)}const b=+(F-x).toFixed(1);d.push({product:a,country:C,score:F,prev:m,compName:h,compScore:x,gap:b,allScores:E})}}d.length&&(i.productsCnty=d,console.log(`[SYNC] weeklyAll에서 productsCnty ${d.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((l,v)=>l===`W${v+1}`)){const l=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(v=>String(v).split(/\n/)[0].trim().toUpperCase()).filter(v=>/^W\d+/.test(v));if(l.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",l),i.weeklyLabels=l;const v=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(d=>{const f=String(d).split(/\n/);return f[0].trim().toUpperCase()+(f[1]?f[1].trim():"")}).filter(d=>/^W\d+/.test(d));v.length&&(i.weeklyLabelsFull=v)}}return i}const st={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:B,outline:"none",boxSizing:"border-box"};function Hn(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),c=Math.floor(i/24);return c>=1?`${c}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Un({savedAt:t,ageMs:e,stale:o,style:i}){const c=t==null,n=c?"#1E293B":o?"#7F1D1D":"#064E3B",g=c?"#94A3B8":o?"#FCA5A5":"#86EFAC",p=c?"#334155":o?"#B91C1C":"#047857",l=c?"○":o?"⚠️":"●",v=c?"동기화 정보 없음":`데이터 최신화: ${Hn(e)}`,d=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:d,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:g,border:`1px solid ${p}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:B,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:l}),v]})}function Wn({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
.vbar-col-name{font-size:11px;font-weight:600;color:#94A3B8;margin-top:3px;white-space:nowrap;width:26px;text-align:center;overflow:hidden;text-overflow:clip;letter-spacing:-0.5px}
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
`}const Kt="'LG Smart','Arial Narrow',Arial,sans-serif",_t="#CF0652",Xt="#94A3B8",Ce={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},So={LG:_t,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},lo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Re={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Vn=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Ao={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},De={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE"},Pe=90;function Ne(t,e){const o=Ce[e]||Ce.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function ke(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Kn(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function je(t){const e=String(t||"").trim().toUpperCase();return Ao[e]||t}let qn=0;function co(t,e,o,i,c){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const n=qn++,g={t:18,r:10,b:20,l:10},p=o-g.l-g.r,l=i-g.t-g.b,v=t.filter(m=>m!=null);if(!v.length){let m=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const h=t.length,x=h>1?h-1:1;return m+=t.map((E,b)=>`<text x="${(g.l+b/x*p).toFixed(1)}" y="${g.t+l+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Kt}">${e[b]||""}</text>`).join(""),m+="</svg>",m}const d=Math.min(...v)-1,f=Math.max(...v)+1,y=f-d||1,a=t.length,C=a>1?a-1:1,u=t.map((m,h)=>g.l+h/C*p),k=[];t.forEach((m,h)=>{m!=null&&k.push({x:u[h],y:g.t+(1-(m-d)/y)*l,v:m})});let F=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;if(k.length>=2){const m=k.map((x,E)=>`${E?"L":"M"}${x.x.toFixed(1)},${x.y.toFixed(1)}`).join(" "),h=m+` L${k[k.length-1].x.toFixed(1)},${g.t+l} L${k[0].x.toFixed(1)},${g.t+l} Z`;F+=`<defs><linearGradient id="lg${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.03"/>
    </linearGradient></defs>`,F+=`<path d="${h}" fill="url(#lg${n})"/>`,F+=`<path d="${m}" stroke="${c}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}return F+=k.map(m=>`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${c}" stroke-width="2"/>`).join(""),F+=k.map(m=>`<text x="${m.x.toFixed(1)}" y="${Math.max(m.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" font-family="${Kt}">${m.v.toFixed(1)}</text>`).join(""),F+=t.map((m,h)=>`<text x="${u[h].toFixed(1)}" y="${g.t+l+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Kt}">${e[h]||""}</text>`).join(""),F+="</svg>",F}function he(t,e){return So[t]||lo[e%lo.length]}function Eo(t,e,o,i){const c=Object.keys(t);if(!c.length||!e.length)return"";let n=1/0,g=-1/0;if(c.forEach(C=>(t[C]||[]).forEach(u=>{u!=null&&(u<n&&(n=u),u>g&&(g=u))})),!isFinite(n))return"";const p=Math.max((g-n)*.15,2);n=Math.max(0,n-p),g=Math.min(100,g+p);const l=g-n||1,v=e.length,d=8,f=8,y=i-d-f;let a="";for(let C=0;C<=4;C++){const u=d+C/4*y;a+=`<line x1="0" y1="${u.toFixed(1)}" x2="${o}" y2="${u.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}return c.forEach((C,u)=>{const k=t[C]||[],F=he(C,u),m=C==="LG",h=m?2.5:1.5,x=m?1:.7,E=[];if(k.forEach((b,S)=>{if(b==null)return;const R=(S+.5)/v*o,T=d+(1-(b-n)/l)*y;E.push({x:R,y:T,v:b})}),!!E.length){if(E.length>=2){const b=E.map((S,R)=>`${R?"L":"M"}${S.x.toFixed(1)},${S.y.toFixed(1)}`).join(" ");a+=`<path d="${b}" stroke="${F}" fill="none" stroke-width="${h}" stroke-linecap="round" stroke-linejoin="round" opacity="${x}"/>`}E.forEach(b=>{a+=`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${m?3.5:2.5}" fill="#fff" stroke="${F}" stroke-width="${m?2:1.5}" opacity="${x}"/>`})}}),`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${a}</svg>`}function Jn({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:c,monthlyVis:n,total:g,meta:p,wLabels:l}){const v={monthlyVis:n};return`
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
  // Tracker iframe 전환 (v2 외부 URL이면 lang만 변경하지 않음)
  var trkIframe=document.getElementById('tracker-iframe');
  if(trkIframe&&trkIframe.src.indexOf('geo-progress-tracker-v2')<0)trkIframe.src='/p/progress-tracker/?lang='+lang;
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
    // MoM/WoW 업데이트
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
${(()=>{const d=f=>JSON.stringify(f).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?d(e):"{}"};
var _products=${d(o.map(f=>({id:f.id,bu:f.bu,kr:f.kr,en:f.en||f.kr,category:f.category||"",date:f.date||"",status:f.status,score:f.score||0,prev:f.prev||0,vsComp:f.vsComp||0,compName:f.compName||"",compRatio:f.compRatio||0,allScores:f.allScores||{},monthlyScores:f.monthlyScores||[]})))};
var _productsCnty=${d(i||[])};
var _unlaunchedMap=${d(c)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${d((v==null?void 0:v.monthlyVis)||[])};
var _total=${d(g)};
var _meta={period:${d(p.period||"")},reportNo:${d(p.reportNo||"")},totalInsight:${d(p.totalInsight||"")}};
var _wLabels=${d(l)};`})()}
${(()=>{const d=f=>JSON.stringify(f).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${d(So)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${_t}';
var _FONT=${d(Kt)};
var _COMP='${Xt}';
var _REGIONS=${d(Object.fromEntries(Object.entries(Re).map(([f,y])=>[f,y.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Re).map(([d,f])=>[d,t==="en"?f.labelEn:f.label]))).replace(/<\//g,"<\\/")};
function _brandColor(name,idx){return _BRAND_COLORS[name]||_FALLBACK[idx%_FALLBACK.length]}
function _trendMultiSvg(brandData,labels,w,h){
  var brands=Object.keys(brandData);if(!brands.length||!labels.length)return'';
  var mn=Infinity,mx=-Infinity;
  brands.forEach(function(b){(brandData[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
  if(!isFinite(mn))return'';
  var pad=Math.max((mx-mn)*0.15,2);mn=Math.max(0,mn-pad);mx=Math.min(100,mx+pad);var rng=mx-mn||1;
  var N=labels.length;var pt=8,pb=8,ch=h-pt-pb;var g='';
  for(var i=0;i<=4;i++){var y=pt+(i/4)*ch;g+='<line x1="0" y1="'+y.toFixed(1)+'" x2="'+w+'" y2="'+y.toFixed(1)+'" stroke="#E8EDF2" stroke-width="1"/>';}
  brands.forEach(function(b,bi){
    var vals=brandData[b]||[];var color=_brandColor(b,bi);var isLG=b==='LG';var sw=isLG?2.5:1.5;var op=isLG?1:0.7;
    var pts=[];
    vals.forEach(function(v,i){if(v!=null){var x=((i+0.5)/N)*w;var y=pt+(1-(v-mn)/rng)*ch;pts.push({x:x,y:y,v:v})}});
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
var _TREND_BC=${Pe};
function _svgML(bd,labels,w,h){
  var brands=Object.keys(bd);if(!brands.length||!labels.length)return'';
  var mn=Infinity,mx=-Infinity;var N=labels.length;
  brands.forEach(function(b){(bd[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
  if(!isFinite(mn))return'';
  var pad=Math.max((mx-mn)*0.15,2);mn=Math.max(0,mn-pad);mx=Math.min(100,mx+pad);var rng=mx-mn||1;
  var pt=8,pb=8,ch=h-pt-pb;
  var g='';
  for(var i=0;i<=4;i++){var y=pt+(i/4)*ch;
    g+='<line x1="0" y1="'+y.toFixed(1)+'" x2="'+w+'" y2="'+y.toFixed(1)+'" stroke="#E8EDF2" stroke-width="1"/>';
  }
  brands.forEach(function(b,bi){var vals=bd[b]||[];var c=_bc(b,bi);var isLG=b==='LG';var sw=isLG?2.5:1.5;var op=isLG?1:0.7;var pts=[];
    vals.forEach(function(v,i){if(v==null)return;var x=((i+0.5)/N)*w;var y=pt+(1-(v-mn)/rng)*ch;pts.push({x:x,y:y,v:v})});
    if(!pts.length)return;
    if(pts.length>=2){var d=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
    g+='<path d="'+d+'" stroke="'+c+'" fill="none" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round" opacity="'+op+'"/>';}
    pts.forEach(function(p){g+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?3.5:2.5)+'" fill="#fff" stroke="'+c+'" stroke-width="'+(isLG?2:1.5)+'" opacity="'+op+'"/>'});
  });
  return '<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">'+g+'</svg>';
}

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
      // TTL 미니차트 복원
      var nameEl=card.querySelector('.prod-name');
      if(nameEl){
        var name=nameEl.textContent.replace(/\\*$/,'');
        var prod=_products.find(function(p){return p.kr===name||p.en===name});
        if(prod){
          var mChart=card.querySelector('.trend-monthly');
          if(mChart){
            var msc=prod.monthlyScores||[];
            var mData=msc.length?msc.map(function(m){return m.score}):[ms];
            var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var mLabels=msc.length?msc.map(function(m){var km=String(m.date||'').match(/(\\d{1,2})월/);return km?ML[parseInt(km[1])-1]:m.date}):['M0'];
            mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,sparkColor);
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
    avgByProdId[prodId].scores.push(r.score||0);
    avgByProdId[prodId].compScores.push(r.compScore||0);
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
    // 월간 미니차트: TTL 기반 트렌드에서 마지막 점을 선택 국가 평균으로 교체
    var mChart=card.querySelector('.trend-monthly');
    if(mChart&&prod){
      var ms=prod.monthlyScores||[];
      var mData=ms.length?ms.map(function(m){return m.score}):[score];
      // 마지막 점을 현재 필터 점수로 교체
      if(mData.length)mData[mData.length-1]=score;
      var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var mLabels=ms.length?ms.map(function(m){var km=String(m.date||'').match(/(\\d{1,2})월/);return km?ML[parseInt(km[1])-1]:m.date}):['M0'];
      mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,sparkColor);
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
    if(svgTd){svgTd.innerHTML=_trendMultiSvg(brandData,mLabels,N*80,180)}
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
  // 트렌드 row
  document.querySelectorAll('.trend-row[data-prodid]').forEach(function(row){
    var pid = row.getAttribute('data-prodid');
    var allUL = countries.every(function(c){return _isUnlaunched(c,pid)});
    row.classList.toggle('is-unlaunched', allUL);
    var badge = row.querySelector('.trend-status-badge');
    if(badge && allUL){badge.textContent = (document.documentElement.lang==='en'?'Unlaunched':'미출시')}
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
      var chartRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:8px 0;border:0">'+_svgML(data,_wLabels,N*80,180)+'</td></tr>';
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
      var chartSvg=_svgML(brandData,ML,svgW,svgH);
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
// 미니 SVG 라인 차트 생성 (클라이언트용)
function _miniSvg(data,labels,w,h,color){
  if(!data||data.length<2)return'<svg width="'+w+'" height="'+h+'"></svg>';
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var mn=Math.min.apply(null,data)-1;var mx=Math.max.apply(null,data)+1;var rng=mx-mn||1;
  var pts=data.map(function(v,i){return{x:pl+(i/(data.length-1))*cw,y:pt+(1-(v-mn)/rng)*ch,v:v}});
  var line=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
  var area=line+' L'+pts[pts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+pts[0].x.toFixed(1)+','+(pt+ch)+' Z';
  var id='ms'+Math.random().toString(36).slice(2,6);
  var s='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" xmlns="http://www.w3.org/2000/svg" style="display:block">';
  s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
  s+='<path d="'+area+'" fill="url(#'+id+')"/>';
  s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+color+'" stroke-width="2"/>'});
  pts.forEach(function(p){s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+color+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
  pts.forEach(function(p,i){s+='<text x="'+p.x.toFixed(1)+'" y="'+(pt+ch+14)+'" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="'+_FONT+'">'+(labels[i]||'')+'</text>'});
  s+='</svg>';return s;
}
function _miniSvgNullAware(data,labels,w,h,color){
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var N=data.length;var divisor=N>1?N-1:1;
  var allX=data.map(function(_,i){return pl+(i/divisor)*cw});
  var valid=data.filter(function(v){return v!=null});
  var s='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" xmlns="http://www.w3.org/2000/svg" style="display:block">';
  if(valid.length){
    var mn=Math.min.apply(null,valid)-1;var mx=Math.max.apply(null,valid)+1;var rng=mx-mn||1;
    var pts=[];
    data.forEach(function(v,i){if(v!=null)pts.push({x:allX[i],y:pt+(1-(v-mn)/rng)*ch,v:v})});
    if(pts.length>=2){
      var id='mn'+Math.random().toString(36).slice(2,6);
      var line=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
      var area=line+' L'+pts[pts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+pts[0].x.toFixed(1)+','+(pt+ch)+' Z';
      s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
      s+='<path d="'+area+'" fill="url(#'+id+')"/>';
      s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+color+'" stroke-width="2"/>'});
    pts.forEach(function(p){s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+color+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
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
  var chartWrap=card.querySelector('.trend-weekly');
  if(chartWrap){
    chartWrap.innerHTML=weeklyData&&weeklyData.length>=1?_miniSvg(weeklyData,wLabels,300,90,sparkColor):'<svg width="300" height="90"></svg>';
  }
  // 월간 미니 차트 (4M: [null,null,null,score])
  if(mLabels&&mLabels.length){
    var m4=[null,null,null,monthlyLG!=null?monthlyLG:null];
    var mChartWrap=card.querySelector('.trend-monthly');
    if(mChartWrap)mChartWrap.innerHTML=_miniSvgNullAware(m4,mLabels,300,90,sparkColor);
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
  // 전체 국가 선택 시 → 주간 TTL 데이터 사용 (마지막 주 LG 점수 + 경쟁사)
  if(selCountry.isAll){
    cards.forEach(function(card){
      var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
      var prod=_products.find(function(p){return p.kr===nameEl.textContent||p.en===nameEl.textContent});if(!prod)return;
      var totalData=(_weeklyAll[prod.id]||{})['Total']||{};
      var weekly=totalData.LG||[];
      var validW=weekly.filter(function(v){return v!=null});
      // 주간 마지막 주 점수 (null 제외)
      var wScore=validW.length>0?validW[validW.length-1]:prod.score;
      // 주간 경쟁사 마지막 주 1위 (null 제외)
      var wComp=0;
      Object.keys(totalData).forEach(function(b){if(b==='LG'||b==='lg')return;var arr=(totalData[b]||[]).filter(function(v){return v!=null});var last=arr.length?arr[arr.length-1]:0;if(last>wComp)wComp=last});
      var wRatio=wComp>0?Math.round(wScore/wComp*100):100;
      var mL=_get4MLabels(prod);
      _updateCard(card,wScore,wRatio,weekly,_wLabels,null,mL);
    });
    return;
  }
  if(!countries||!countries.length)return;
  // 주간 국가별 데이터: weeklyAll에서 선택된 국가의 마지막 주 LG/경쟁사 평균
  cards.forEach(function(card){
    var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
    var prod=_products.find(function(p){return p.kr===nameEl.textContent||p.en===nameEl.textContent});if(!prod)return;
    var prodData=_weeklyAll[prod.id]||{};
    var scores=[];var compScores=[];
    countries.forEach(function(c){
      var cd=prodData[c];if(!cd)return;
      var lgArr=cd.LG||cd.lg||[];var last=lgArr.length?lgArr[lgArr.length-1]:0;
      if(last>0)scores.push(last);
      // 경쟁사 1위
      var topComp=0;
      Object.keys(cd).forEach(function(b){if(b==='LG'||b==='lg')return;var a=cd[b]||[];var l=a.length?a[a.length-1]:0;if(l>topComp)topComp=l});
      if(topComp>0)compScores.push(topComp);
    });
    var score,compPct;
    if(scores.length){
      score=+(scores.reduce(function(s,v){return s+v},0)/scores.length).toFixed(1);
      var comp=compScores.length?+(compScores.reduce(function(s,v){return s+v},0)/compScores.length).toFixed(1):0;
      compPct=comp>0?Math.round(score/comp*100):100;
    }else{
      // 선택 국가에 주간 데이터 없으면 TTL 폴백
      var totalLG=(prodData['Total']||{}).LG||[];
      score=totalLG.length?totalLG[totalLG.length-1]:prod.score;
      compPct=prod.compRatio||100;
    }
    var weekly=_getWeeklyForCountries(prod.id,countries);
    var mL=_get4MLabels(prod);
    _updateCard(card,score,compPct,weekly,_wLabels,null,mL);
  });
}

// ─── Hero / Executive Summary 동적 업데이트 (체크박스 기반) ───
function updateHeroFromCheckboxes(){
  var selBU=getCheckedValues('bu');
  var selProd=getCheckedValues('product');
  var selRegion=getCheckedValues('region');
  var selCountry=getCheckedValues('country');
  var hero=document.getElementById('hero-section');if(!hero)return;
  var ctx=document.getElementById('hero-ctx');
  var allL=_lang==='en'?'All':'전체';
  // Context badges
  var badges='<span class="hero-ctx-badge">'+_meta.period+'</span>';
  var buLabel=selBU.isAll?(allL+(_lang==='en'?' Divisions':' 본부')):Object.keys(selBU.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+buLabel+'</span>';
  var prodLabel=selProd.isAll?(allL+(_lang==='en'?' Products':' 제품')):_products.filter(function(p){return selProd.vals[p.id]}).map(function(p){return p.kr}).join(', ');
  badges+='<span class="hero-ctx-badge">'+prodLabel+'</span>';
  var cntyLabel=selCountry.isAll?(allL+(_lang==='en'?' Countries':' 국가')):Object.keys(selCountry.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+cntyLabel+'</span>';
  if(ctx)ctx.innerHTML=badges;
  // Calculate filtered scores
  var result=calcFilteredDataCB(selBU,selProd,selCountry);
  if(!result)return;
  var sc=result.score;var comp=result.vsComp;var compName='SAMSUNG';
  var d=+(sc-(result.prev||sc)).toFixed(1);
  var gap=+(sc-comp).toFixed(1);
  var dArrow=d>0?'▲':d<0?'▼':'─';
  var dColor=d>0?'#22C55E':d<0?'#EF4444':'#94A3B8';
  var scoreRow=hero.querySelector('.hero-score-row');
  if(scoreRow)scoreRow.innerHTML='<span class="hero-score">'+sc.toFixed(1)+'</span><span class="hero-pct">%</span><span class="hero-delta" style="color:'+dColor+'">'+dArrow+' '+Math.abs(d).toFixed(1)+'%p</span><span class="hero-mom">MoM</span>';
  var tracks=hero.querySelectorAll('.hero-gauge-track');
  if(tracks[0]){var bar=tracks[0].querySelector('.hero-gauge-bar');if(bar)bar.style.width=Math.min(sc,100)+'%'}
  if(tracks[1]){var bar2=tracks[1].querySelector('.hero-gauge-bar');if(bar2)bar2.style.width=Math.min(comp,100)+'%'}
  var legend=hero.querySelector('.hero-legend');
  if(legend)legend.innerHTML='<span><i style="background:'+_RED+'"></i> LG '+sc.toFixed(1)+'%</span>'+(comp>0?'<span><i style="background:'+_COMP+'"></i> '+compName+' '+comp.toFixed(1)+'%</span>':'')+'<span><i style="background:#475569"></i> prev '+(result.prev||sc).toFixed(1)+'%</span>';
  var compDiv=hero.querySelector('.hero-comp');
  if(compDiv&&comp>0){compDiv.innerHTML='<span class="hero-comp-label">'+compName.toUpperCase()+'</span> <span class="hero-comp-score">'+comp.toFixed(1)+'%</span><span class="hero-comp-gap" style="color:'+(gap>=0?'#22C55E':'#EF4444')+'">Gap '+(gap>=0?'+':'')+gap.toFixed(1)+'%p</span>'}
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
`}function Yn(t,e,o,i,c,n,g){if(!e||!Object.keys(e).length)return"";const l=["MS","HS","ES"].map(v=>{const d=t.filter(y=>y.bu===v);if(!d.length)return"";const f=d.map(y=>{var T,A;const a=((T=e[y.id])==null?void 0:T.Total)||{},C=Object.keys(a).sort((D,P)=>{var N,G;if(D==="LG")return-1;if(P==="LG")return 1;const I=((N=a[D])==null?void 0:N[a[D].length-1])||0;return(((G=a[P])==null?void 0:G[a[P].length-1])||0)-I});if(!C.length)return"";const u=Ne(y.status,c),k=(A=a.LG)==null?void 0:A[a.LG.length-1],F=C.map((D,P)=>{const I=he(D,P),j=D==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${I};opacity:${j?1:.7}"></i><span style="font-size:13px;color:${j?"#1A1A1A":"#94A3B8"};font-weight:${j?700:400}">${D}</span></span>`}).join(""),m=o.length,h=`<colgroup><col style="width:${Pe}px">${o.map(()=>"<col>").join("")}</colgroup>`,x=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:8px 0;border:0">${Eo(a,o,m*80,180)}</td></tr>`,E=`<tr><td style="padding:0;border:0"></td><td colspan="${m}" style="padding:4px 0 6px;border:0">${F}</td></tr>`,b=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(D=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${D}</th>`).join("")}</tr>`,S=C.map((D,P)=>{const I=he(D,P),j=D==="LG",N=o.map((G,X)=>{var J;const Y=(J=a[D])==null?void 0:J[X];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${Y!=null?j?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${j?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${Y!=null?Y.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${j?"#FFF8F9":P%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${j?700:500};color:${I};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${I};margin-right:4px;vertical-align:0"></i>${D}</td>${N}</tr>`}).join(""),R=Oe(y.id||y.category,n);return`<div class="trend-row${R?" is-unlaunched":""}" data-prodid="${y.id||y.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${_t};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Me(y,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${R?"#F1F5F9":u.bg};color:${R?"#64748B":u.color};border:1px solid ${R?"#CBD5E1":u.border}">${R?c==="en"?"Unlaunched":"미출시":u.label}</span>
          ${k!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${k.toFixed(1)}%</span>`:""}
          ${y.compName?`<span style="font-size:14px;color:#94A3B8">vs ${y.compName} ${y.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Kt}">${h}<tbody>${x}${E}${b}${S}</tbody></table></div>
      </div>`}).join("");return f?`<div class="bu-group" data-bu="${v}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${v}</span></div>
      ${f}
    </div>`:""}).join("");return l.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${c==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${g||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${c==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${l}${(()=>{const v=t.filter(d=>qt(d.id||d.category,n).length>0).map(d=>`${d.kr}: ${qt(d.id||d.category,n).join(", ")} ${c==="en"?"not launched":"미출시"}`);return v.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${v.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function Xn(t,e,o,i,c,n){if(!e||!e.length)return"";const g=["MS","HS","ES"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function v(a){const C=String(a).match(/(\d{1,2})월/);if(C)return parseInt(C[1])-1;const u=String(a).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return u?l[u[1].toLowerCase()]:-1}const d=[0,1,2,3,4,5,6,7,8,9,10,11],f=p.slice(),y=g.map(a=>{const C=t.filter(k=>k.bu===a);if(!C.length)return"";const u=C.map(k=>{const F=k.monthlyScores||[];let m={};if(F.length>=2){const j=new Set;if(F.forEach(N=>{N.allScores&&Object.keys(N.allScores).forEach(G=>j.add(G))}),j.forEach(N=>{m[N]=d.map(G=>{var Y;const X=F.find(J=>v(J.date)===G);return((Y=X==null?void 0:X.allScores)==null?void 0:Y[N])??null})}),!j.size&&(m.LG=d.map(N=>{const G=F.find(X=>v(X.date)===N);return G?G.score:null}),k.vsComp>0)){const N=d.map(G=>{const X=F.find(Y=>v(Y.date)===G);return(X==null?void 0:X.comp)??null});N.some(G=>G!=null)&&(m[k.compName||"Comp"]=N)}}else{const j=e.filter(Y=>Y.division===a&&(Y.country==="TOTAL"||Y.country==="TTL")),N={};j.forEach(Y=>{const J=v(Y.date);J>=0&&(N[J]=Y)});const G=d.map(Y=>{var J;return((J=N[Y])==null?void 0:J.lg)||null}),X=d.map(Y=>{var J;return((J=N[Y])==null?void 0:J.comp)||null});m={LG:G},X.some(Y=>Y!=null&&Y>0)&&(m.Samsung=X)}const h=Object.keys(m).sort((j,N)=>{if(j==="LG")return-1;if(N==="LG")return 1;const G=(m[j]||[]).filter(Y=>Y!=null).pop()||0;return((m[N]||[]).filter(Y=>Y!=null).pop()||0)-G});if(!h.length)return"";const x=Ne(k.status,i),E=(m.LG||[]).filter(j=>j!=null).pop(),b=h.map((j,N)=>{const G=he(j,N),X=j==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${G};opacity:${X?1:.7}"></i><span style="font-size:13px;color:${X?"#1A1A1A":"#94A3B8"};font-weight:${X?700:400}">${j}</span></span>`}).join(""),S=f.length,R=`<colgroup><col style="width:${Pe}px">${f.map(()=>"<col>").join("")}</colgroup>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${S}" style="padding:8px 0;border:0">${Eo(m,f,S*80,180)}</td></tr>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${S}" style="padding:4px 0 6px;border:0">${b}</td></tr>`,D=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${f.map(j=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${j}</th>`).join("")}</tr>`,P=h.map((j,N)=>{const G=he(j,N),X=j==="LG",Y=f.map((J,gt)=>{var ct;const tt=(ct=m[j])==null?void 0:ct[gt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${tt!=null?X?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${X?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${tt!=null?tt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${X?"#FFF8F9":N%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${X?700:500};color:${G};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${G};margin-right:4px;vertical-align:0"></i>${j}</td>${Y}</tr>`}).join(""),I=Oe(k.id||k.category,c);return`<div class="trend-row${I?" is-unlaunched":""}" data-prodid="${k.id||k.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${_t};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Me(k,c)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${I?"#F1F5F9":x.bg};color:${I?"#64748B":x.color};border:1px solid ${I?"#CBD5E1":x.border}">${I?i==="en"?"Unlaunched":"미출시":x.label}</span>
          ${E!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${E.toFixed(1)}%</span>`:""}
          ${k.compName?`<span style="font-size:14px;color:#94A3B8">vs ${k.compName} ${k.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Kt}">${R}<tbody>${T}${A}${D}${P}</tbody></table></div>
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${a}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${a}</span></div>
      ${u}
    </div>`:""}).join("");return y.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${f[0]}–${f[f.length-1]} (${f.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${y}${(()=>{const a=t.filter(C=>qt(C.id||C.category,c).length>0).map(C=>`${C.kr}: ${qt(C.id||C.category,c).join(", ")} ${i==="en"?"not launched":"미출시"}`);return a.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${a.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function To(t,e,o,i,c){let n="";return e&&t&&(n+=`<div class="insight-box"><span class="insight-label">${c.insight}</span><span class="insight-text">${ke(t)}</span></div>`),i&&o&&(n+=`<div class="howto-box"><span class="howto-label">${c.howToRead}</span><span class="howto-text">${ke(o)}</span></div>`),n}function Zn(t,e,o,i){const c=+(t.score-t.prev).toFixed(1),n=t.vsComp||0,g=+(t.score-n).toFixed(1),p=c>0?"▲":c<0?"▼":"─",l=c>0?"#22C55E":c<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${l}">${p} ${Math.abs(c).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${_t}"></div>
          </div>
          ${n>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(n,100)}%;background:${Xt}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${_t}"></i> LG ${t.score}%</span>
            ${n>0?`<span><i style="background:${Xt}"></i> Samsung ${n}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${n>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${n}%</span>
          <span class="hero-comp-gap" style="color:${g>=0?"#22C55E":"#EF4444"}">Gap ${g>=0?"+":""}${g}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
    ${e.totalInsight?`<div class="hero-insight"><span class="hero-insight-label">${o.geoInsight}</span><span class="hero-insight-text">${ke(e.totalInsight)}</span></div>`:""}
  </div>`}function qt(t,e){const o=De[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function Oe(t,e){return Vn.every(o=>{const i=De[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function Me(t,e){return qt(t.id||t.category,e).length?`${t.kr}*`:t.kr}function po(t,e,o,i,c,n,g,p,l){if(!t.length)return"";const d=["MS","HS","ES"].map(f=>{const y=t.filter(C=>C.bu===f);if(!y.length)return"";const a=y.map(C=>{var ot,yt;const u=C.weekly||[],k=u.filter(lt=>lt!=null),F=C.weeklyScore||(k.length>0?k[k.length-1]:C.score),m=C.monthlyScore||C.score,h=F,x=((ot=p==null?void 0:p[C.id])==null?void 0:ot.Total)||((yt=p==null?void 0:p[C.id])==null?void 0:yt.TTL)||{};let E=0;Object.entries(x).forEach(([lt,nt])=>{if(lt==="LG"||lt==="lg")return;const rt=Array.isArray(nt)&&nt.length?nt[nt.length-1]:0;rt>E&&(E=rt)});const b=C.vsComp||0,S=E>0?F/E*100:b>0?F/b*100:100,R=b>0?m/b*100:100,T=Math.round(S*10)/10,A=Math.round(R*10)/10,D=T,P=S>=100?"lead":S>=80?"behind":"critical",I=Ne(P,i),j=k.length>=1?k[k.length-1]:null,N=k.length>=2?k[k.length-2]:null,G=j!=null&&N!=null?+(j-N).toFixed(1):null,X=G>0?"▲":G<0?"▼":"─",Y=G>0?"#22C55E":G<0?"#EF4444":"#94A3B8",J=P==="critical"?"#BE123C":P==="behind"?"#D97706":"#15803D",gt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ct(lt){const nt=String(lt).match(/(\d{1,2})월/);if(nt)return parseInt(nt[1])-1;const rt=String(lt).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return rt?tt[rt[1].toLowerCase()]:-1}let ut=C.monthlyScores||[];if(ut.length<2&&g.length>0){const lt=g.filter(rt=>rt.division===C.bu&&(rt.country==="TOTAL"||rt.country==="TTL")),nt={};lt.forEach(rt=>{const Ct=ct(rt.date);Ct>=0&&(nt[Ct]={date:rt.date,score:rt.lg,comp:rt.comp})}),ut=Object.keys(nt).sort((rt,Ct)=>rt-Ct).map(rt=>nt[rt])}const Jt=ut.length>0?ut.map(lt=>{const nt=ct(lt.date);return nt>=0?gt[nt]:lt.date}):["M-3","M-2","M-1","M0"],ht=ut.length>0?ut.map(lt=>lt.score):[null,null,null,C.score],vt=ut.length>=2?+(ut[ut.length-1].score-ut[ut.length-2].score).toFixed(1):null,wt=vt>0?"▲":vt<0?"▼":"─",Et=vt>0?"#22C55E":vt<0?"#EF4444":"#94A3B8",Lt=D,ft=Lt>=100?"#15803D":Lt>=80?"#D97706":"#BE123C",It=C.weeklyPrev||(k.length>=5?k[k.length-5]:k[0]||0),Dt=F&&It?+(F-It).toFixed(1):null,Z=m&&(C.monthlyPrev||C.prev)?+(m-(C.monthlyPrev||C.prev)).toFixed(1):null,$=qt(C.id||C.category,n),O=Oe(C.id||C.category,n),H=O?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:I;return`<div class="prod-card${O?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${F.toFixed(1)}" data-ms="${m.toFixed(1)}" data-wr="${T}" data-mr="${A}" data-wmom="${Dt??""}" data-mmom="${Z??""}" style="border-color:${H.border}">
        <div class="prod-head">
          <span class="prod-name">${Me(C,n)}</span>
          ${$.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${H.bg};color:${H.color};border-color:${H.border}">${H.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${h.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${Y}">${G!=null?`WoW ${X} ${Math.abs(G).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Et}">${vt!=null?`MoM ${wt} ${Math.abs(vt).toFixed(1)}%p`:"MoM —"}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${co(u,c,300,90,J)}</div>
          <div class="trend-monthly" style="display:none">${co(ht,Jt,300,90,J)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Lt,120)}%;background:${ft}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${ft}">${Lt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${f}">
      <div class="bu-header"><span class="bu-label">${f}</span><span class="bu-count">${y.length}${o.categories}</span></div>
      <div class="prod-grid">${a}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${l||""}${l?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${To(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead,o)}
    <div class="section-body">${d}${(()=>{const f=t.filter(y=>qt(y.id||y.category,n).length>0).map(y=>`${y.kr}: ${qt(y.id||y.category,n).join(", ")} ${i==="en"?"not launched":"미출시"}`);return f.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${f.join(" / ")}</p>`:""})()}</div>
  </div>`}function uo(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),g=De[n]||(n||"").toUpperCase(),p=i&&i[`${t.country}|${g}`],l=Kn(t.score,t.compScore),v=p?"#94A3B8":l==="lead"?"#15803D":l==="behind"?"#D97706":"#BE123C",d=+(t.score-t.compScore).toFixed(1),f=p?"#64748B":d>=0?"#15803D":"#BE123C",y=130,a=["TCL","HISENSE","HAIER"];let C="",u=0;t.allScores&&Object.entries(t.allScores).forEach(([E,b])=>{const S=String(E).toUpperCase();a.some(T=>S.includes(T))&&b>u&&(C=E,u=b)});const k=Math.max(e,u),F=Math.max(3,Math.round(t.score/k*y)),m=t.compScore>0?Math.max(3,Math.round(t.compScore/k*y)):0,h=u>0?Math.max(3,Math.round(u/k*y)):0,x="#9333EA";return`<div class="vbar-item${p?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${v}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${F}px;background:${v}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${Xt}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${m}px;background:${Xt}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${u>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${x}">${u.toFixed(1)}</span>
        <div class="vbar-col" style="height:${h}px;background:${x}"></div>
        <span class="vbar-col-name" style="color:${x}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${f}">${d>=0?"+":""}${d}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function ho(t,e,o,i,c,n){if(!t||!t.length)return"";const g=new Map;t.forEach(a=>{g.has(a.product)||g.set(a.product,[]),g.get(a.product).push(a)});const p=e.cntyProductFilter||{},l=[...g.entries()].filter(([a])=>p[a]!==!1).map(([a,C])=>{const u=Math.max(...C.map(F=>Math.max(F.score,F.compScore)),1),k=C.map(F=>uo(F,u,je(F.country),c)).join("");return`<div class="cnty-product" data-group-product="${a}"><div class="bu-header"><span class="bu-label">${a}</span></div><div class="vbar-chart">${k}</div></div>`}).join(""),v=new Map;t.forEach(a=>{v.has(a.country)||v.set(a.country,[]),v.get(a.country).push(a)});const d=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],y=d.filter(a=>v.has(a)).concat([...v.keys()].filter(a=>!d.includes(a))).map(a=>{const C=v.get(a);if(!C)return"";const u=Math.max(...C.map(F=>Math.max(F.score,F.compScore)),1),k=C.map(F=>uo(F,u,F.product,c)).join("");return`<div class="cnty-product" data-group-country="${a}"><div class="bu-header"><span class="bu-label">${je(a)}</span></div><div class="vbar-chart">${k}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${Xt}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${To(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead,o)}
    <div class="section-body">
      <div class="cnty-view-country">${y}</div>
      <div class="cnty-view-product" style="display:none">${l}</div>
      ${(()=>{if(!c||!Object.keys(c).length)return"";const a={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},u=[...new Set(t.map(k=>k.product))].map(k=>{const F=a[k]||String(k).toLowerCase(),m=qt(F,c);return m.length?`${k}: ${m.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const go={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Qn(t){const e=go[t]||go.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(c=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${c.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${c.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function tr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",c=e==="en"?"All":"전체",n=e==="en"?"Total":"총",g=e==="en"?"":"개",p=e==="en"?"Clear filters":"필터 초기화",l=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],v={};l.forEach(a=>{const C=new Set;t.forEach(u=>{u[a.key]&&C.add(u[a.key])}),v[a.key]=[...C].sort()});const d=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(v).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const f=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),y=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${g?" "+g:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${p}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${l.map(a=>`<th data-col="${a.key}" onclick="_plToggle('${a.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${a.label} <span id="pl-arrow-${a.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${l.map(a=>`<div id="pl-dd-${a.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${a.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${c}</div>
      ${v[a.key].map(C=>`<div onclick="_plFilter('${a.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${d};
    var _plFilters={};
    var _divC=${f};
    var _cejC=${y};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${g?" "+g:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(l.map(a=>a.key))}.forEach(function(k){
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
  <\/script>`}function fo(t,e,o,i,c,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const g=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],p=[];for(let A=0;A<12;A++)p.push("w"+(5+A));const l=[...new Set(t.map(A=>A.topic))].filter(Boolean),v=[...new Set(t.map(A=>A.type))].filter(Boolean),d=[...new Set(t.map(A=>A.country))].filter(A=>A&&A!=="TTL"),f=g.filter(A=>d.includes(A)).concat(g.filter(A=>!d.includes(A))),y=JSON.stringify(t).replace(/</g,"\\u003c"),a=JSON.stringify(p),C=JSON.stringify(l),u=JSON.stringify(v),k=JSON.stringify(f),F=72;function m(A){const D={};return A&&String(A).split(`
`).forEach(P=>{const I=P.indexOf("=");if(I>0){const j=P.slice(0,I).trim(),N=P.slice(I+1).trim();j&&(D[j]=N)}}),D}const h=m(i==null?void 0:i.prTopicPromptsRaw);c&&c.length&&l.forEach(A=>{if(!h[A]){const D=c.find(P=>P.topic===A&&P.country==="US");D&&(h[A]=D.prompt)}});const x=(n==null?void 0:n.prTopicList)||[],E={},b={};x.forEach(A=>{[A.topic,A.topicRow,A.oldTopic].filter(Boolean).map(P=>P.trim()).forEach(P=>{A.explanation&&!E[P]&&(E[P]=A.explanation),A.bu&&!b[P]&&(b[P]=A.bu)})});const R={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...E,...m(i==null?void 0:i.prTopicDescsRaw)},T={};return l.forEach(A=>{const D=b[A];if(D)T[A]=D;else{const P=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];T[A]=P.some(I=>A.toLowerCase().includes(I.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Kt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${_t};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${y},W=${a},TP=${C},TY=${u},CN=${k};
    var CW=${F};
    var TOPIC_CAT=${JSON.stringify(T)};
    var TOPIC_PROMPT=${JSON.stringify(h).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(R).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(x).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Ao)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${_t}',COMP='${Xt}';
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
  <\/script>`}function yo(t,e,o,i,c,n){const g=(t||[]).filter(u=>!0);if(!g.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const p=[];for(let u=0;u<12;u++)p.push("w"+(5+u));const v=[...new Set(g.map(u=>u.stakeholder))].filter(Boolean).map(u=>({stakeholder:u,topics:[...new Set(g.filter(k=>k.stakeholder===u).map(k=>k.topic))].filter(Boolean)})),d=72,f=JSON.stringify(g).replace(/</g,"\\u003c"),y=JSON.stringify(p),a=JSON.stringify(v),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Kt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${c||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${_t};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${f},W=${y},GROUPS=${a};
    var CW=${d},RED='${_t}';
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
  <\/script>`}function er(t,e,o,i,c,n,g,p,l,v,d,f,y,a){var Dt,Z;o=(o||[]).map($=>({...$,weekly:($.weekly||[]).map(O=>O??0),monthly:($.monthly||[]).map(O=>O??0)})),v&&typeof v=="object"&&Object.values(v).forEach($=>{!$||typeof $!="object"||Object.values($).forEach(O=>{!O||typeof O!="object"||Object.keys(O).forEach(it=>{const H=O[it];Array.isArray(H)&&(O[it]=H.map(ot=>ot??0))})})});const C={aircare:"Xiaomi"};o=o.map($=>{const O=C[($.id||"").toLowerCase()];if(!O||!$.allScores)return $;const it=Object.entries($.allScores).find(([yt])=>yt.toLowerCase()===O.toLowerCase()&&yt.toLowerCase()!=="lg");if(!it)return $;const H=it[1];if(!(H>0))return $;const ot=Math.round($.score/H*100);return{...$,compName:it[0],vsComp:H,compRatio:ot,status:ot>=100?"lead":ot>=80?"behind":"critical"}});const u=(y==null?void 0:y.visibilityOnly)||!1,k=(y==null?void 0:y.includeProgressTracker)===!0,F=(y==null?void 0:y.trackerVersion)||"v1",m=(y==null?void 0:y.includePromptList)||!1,h=(a==null?void 0:a.unlaunchedMap)||{},x=n==="en"?"Progress Tracker will be available soon.":"준비 중입니다. 곧 제공될 예정입니다.",E=`/p/progress-tracker/?lang=${n}`,R=k?`<iframe id="tracker-iframe" src="${F==="v2"?"https://geo-progress-tracker-v2.onrender.com/p/progress-tracker-v2/":E}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`:`<div class="progress-placeholder"><div class="inner"><div class="icon">⏳</div><h2>Coming Soon</h2><p>${x}</p></div></div>`,T=Ce[n]||Ce.ko;let A;if(l&&l.length)A=l.map($=>String($).toUpperCase().startsWith("W")?$.toUpperCase():$);else{const $=v?Math.max(...Object.values(v).flatMap(it=>Object.values(it).flatMap(H=>Object.values(H).map(ot=>(ot==null?void 0:ot.length)||0))),0):0,O=t.weekStart||Math.max(1,$-11);A=Array.from({length:Math.max(12,$)},(it,H)=>`W${O+H}`)}const D=new Set;v&&Object.values(v).forEach($=>Object.keys($).forEach(O=>{O!=="Total"&&D.add(O)})),g&&g.forEach($=>{$.country&&$.country!=="TTL"&&D.add($.country)});const P=[...D].sort(),I=n==="en"?"All":"전체",j=["MS","HS","ES"],N=o.map($=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${$.bu}" value="${$.id}" checked onchange="onFilterChange()"><span>${$.kr}</span></label>`).join(""),G=j.map($=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${$}" checked onchange="onBuChange('${$}')"><span>${$}</span></label>`).join(""),X=P.map($=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${$}" checked onchange="onFilterChange()"><span>${je($)}</span></label>`).join(""),Y=Object.entries(Re).map(([$,O])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${$}" checked onchange="onRegionChange('${$}')"><span>${O.labelEn}</span></label>`).join(""),gt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${A[A.length-1]} ${n==="en"?"data":"기준"}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"View":"조회"}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodPage('weekly')">${n==="en"?"Weekly":"주간"}</button>
          <button class="trend-tab" onclick="switchPeriodPage('monthly')">${n==="en"?"Monthly":"월간"}</button>
        </div>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${I}</span></label>
        ${G}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${I}</span></label>
        ${N}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${I}</span></label>
        ${Y}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${I}</span></label>
        ${X}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Display":"표시"}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${n==="en"?"GEO Insights":"GEO 인사이트"}</span></label>
      </div>
    </div>
  </div>`,ct=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${ke(t.noticeText)}</div></div>`:"",t.showTotal!==!1?Zn(e,t,T,n):""].join(""),ut=[];if(v&&Object.keys(v).length){const $={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(v).forEach(([O,it])=>{const H=o.find(yt=>yt.id===O),ot=(H==null?void 0:H.kr)||$[O]||O;Object.entries(it).forEach(([yt,lt])=>{if(yt==="Total"||yt==="TTL"||yt==="TOTAL")return;const nt=lt.LG||lt.lg||[],rt=nt.length>0?nt[nt.length-1]:0;if(rt<=0)return;let Ct="",Gt=0;Object.entries(lt).forEach(([kt,Ft])=>{if(kt==="LG"||kt==="lg")return;const Nt=Array.isArray(Ft)&&Ft.length?Ft[Ft.length-1]:0;Nt>Gt&&(Gt=Nt,Ct=kt)});const Pt=+(rt-Gt).toFixed(1),Ht={};Object.entries(lt).forEach(([kt,Ft])=>{if(Array.isArray(Ft)&&Ft.length){const Nt=Ft[Ft.length-1];Nt!=null&&(Ht[kt]=Nt)}}),ut.push({product:ot,country:yt,score:rt,compName:Ct,compScore:Gt,gap:Pt,allScores:Ht})})})}const Jt=((Dt=y==null?void 0:y.weeklyLabelsFull)==null?void 0:Dt[y.weeklyLabelsFull.length-1])||A[A.length-1]||"",ht=Jt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${Jt} ${n==="en"?"data":"기준"}</span>`:"",vt=[ct,t.showProducts!==!1?po(o,t,T,n,A,h,(y==null?void 0:y.monthlyVis)||[],v,ht):"",`<div id="trend-container">${Yn(o,v,A,T,n,h,ht)}</div>`,t.showCnty!==!1?ho(ut,t,T,n,h,ht):""].join(""),wt=o.map($=>{const O=$.monthlyScore||$.score,it=$.monthlyPrev||$.prev,H=$.vsComp||0,ot=H>0?O/H*100:100;return{...$,score:O,prev:it,weeklyScore:O,weeklyPrev:it,monthlyScore:O,monthlyPrev:it,weekly:($.monthlyScores||[]).map(yt=>yt.score),status:ot>=100?"lead":ot>=80?"behind":"critical"}}),Et=(((Z=o[0])==null?void 0:Z.monthlyScores)||[]).map($=>{const O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],it=String($.date).match(/(\d{1,2})월/),H=String($.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return it?O[parseInt(it[1])-1]:H?H[1].charAt(0).toUpperCase()+H[1].slice(1).toLowerCase():$.date}),Lt=(y==null?void 0:y.monthlyVis)||[],ft=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",It=[ct,t.showProducts!==!1?po(wt,t,T,n,Et.length?Et:["Feb","Mar"],h,Lt,{},ft):"",`<div id="monthly-trend-container">${Xn(wt,Lt,T,n,h,ft)}</div>`,t.showCnty!==!1?ho(g,t,T,n,h,ft):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>${Wn({FONT:Kt,RED:_t,COMP:Xt})}</style>
</head>
<body>
${u?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${gt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${vt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${It}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${fo(a==null?void 0:a.weeklyPR,a==null?void 0:a.weeklyPRLabels,n,t,a==null?void 0:a.appendixPrompts,a)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${yo(a==null?void 0:a.weeklyBrandPrompt,a==null?void 0:a.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    <button class="tab-btn" onclick="switchTab('readability')">Readability</button>
    ${k?`<button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>`:""}
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
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${gt}
    <div id="bu-weekly-content" class="dash-container">${vt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${It}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${fo(a==null?void 0:a.weeklyPR,a==null?void 0:a.weeklyPRLabels,n,t,a==null?void 0:a.appendixPrompts,a)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${yo(a==null?void 0:a.weeklyBrandPrompt,a==null?void 0:a.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${T.readabilityMsg}</p>
  </div></div>
</div>
<div id="tab-progress" class="tab-panel">
  ${R}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${tr(a==null?void 0:a.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Qn(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${T.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Jn({lang:n,weeklyAll:v,products:o,productsCnty:g,ulMap:h,monthlyVis:y==null?void 0:y.monthlyVis,total:e,meta:t,wLabels:A})}
<\/script>
</body>
</html>`}function or(t){const e=t.filter(l=>l.status==="lead"),o=t.filter(l=>l.status==="behind"),i=t.filter(l=>l.status==="critical"),c=[...t].sort((l,v)=>v.score-l.score)[0],n=[...t].sort((l,v)=>l.score-v.score)[0],g=(t.reduce((l,v)=>l+v.score,0)/t.length).toFixed(1),p=[];return p.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${g}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),c&&p.push(`가장 높은 카테고리는 ${c.kr} ${c.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(c.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?p.push(`취약 카테고리(${i.map(l=>l.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&p.push(`추격 카테고리(${o.map(l=>l.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),p.join(" ")}function nr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function rr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}function ir({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:c,metaEn:n,setMetaEn:g,total:p,setTotal:l,products:v,setProducts:d,citations:f,setCitations:y,dotcom:a,setDotcom:C,productsCnty:u,setProductsCnty:k,citationsCnty:F,setCitationsCnty:m,resolved:h,previewLang:x,setPreviewLang:E,snapshots:b,setSnapshots:S,setWeeklyLabels:R,setWeeklyAll:T,weeklyLabels:A,weeklyAll:D,citationsByCnty:P,dotcomByCnty:I,generateHTML:j,publishEndpoint:N,setMonthlyVis:G,onSyncExtra:X,categoryStats:Y,extra:J,monthlyVis:gt}){const tt=W.useRef({products:v,productsCnty:u,citations:f,citationsCnty:F,total:p,dotcom:a,extra:J});tt.current={products:v,productsCnty:u,citations:f,citationsCnty:F,total:p,dotcom:a,extra:J};function ct(){return tt.current}const[ut,Jt]=W.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[ht,vt]=W.useState(!1),[wt,Et]=W.useState(null),[Lt,ft]=W.useState(""),[It,Dt]=W.useState(""),[Z,$]=W.useState(!1),[O,it]=W.useState(""),[H,ot]=W.useState(!1),[yt,lt]=W.useState(!1),[nt,rt]=W.useState(!1),[Ct,Gt]=W.useState(!1),[Pt,Ht]=W.useState(""),[kt,Ft]=W.useState(!1),[Nt,ee]=W.useState(!0),[Zt,ze]=W.useState("v2"),[oe,ge]=W.useState(""),[Qt,Se]=W.useState(null);W.useEffect(()=>{fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(w=>w.ok?w.json():null).then(Se).catch(()=>{})},[t,N]);const[$o,_e]=W.useState(null);W.useEffect(()=>{let s=!0;const w=()=>Ze(t).then(bt=>{s&&_e(bt)});w();const et=setInterval(w,6e4);return()=>{s=!1,clearInterval(et)}},[t]);function Lo(){Ze(t).then(_e)}async function Bo(){if(!Ct){Gt(!0),Ht("");try{const s=ct(),w=ve(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),et=ve(s.products,s.productsCnty,s.citations,s.citationsCnty,"en");let bt,Ot,U;if(t==="dashboard"){const V=gt||[],q=s.extra||J||{};bt=j(i,s.total,w.products,w.citations,s.dotcom,"ko",w.productsCnty,w.citationsCnty,A,D,P,I,V,q),Ot=j(n,s.total,et.products,et.citations,s.dotcom,"en",et.productsCnty,et.citationsCnty,A,D,P,I,V,q),U=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else bt=j(i,s.total,w.products,w.citations,a,"ko",w.productsCnty,w.citationsCnty,{weeklyLabels:A,categoryStats:Y,unlaunchedMap:(J==null?void 0:J.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Ot=j(n,s.total,et.products,et.citations,a,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:A,categoryStats:Y,unlaunchedMap:(J==null?void 0:J.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),U=`${i.period||""} ${i.title||"Newsletter"}`.trim();const Tt=await(await fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:U,htmlKo:bt,htmlEn:Ot})})).json();if(!Tt.ok)throw new Error(Tt.error||"게시 실패");if(Se({...Tt,published:!0}),t==="dashboard")try{const V=await we(t)||{},q=s.extra||J||{};Qe(t,{...V,meta:i,total:s.total,weeklyPR:q.weeklyPR||V.weeklyPR,weeklyPRLabels:q.weeklyPRLabels||V.weeklyPRLabels,weeklyBrandPrompt:q.weeklyBrandPrompt||V.weeklyBrandPrompt,weeklyBrandPromptLabels:q.weeklyBrandPromptLabels||V.weeklyBrandPromptLabels,appendixPrompts:q.appendixPrompts||V.appendixPrompts})}catch{}const Mt=`${window.location.origin}${Tt.urls.ko}`,Bt=`${window.location.origin}${Tt.urls.en}`;try{await navigator.clipboard.writeText(Mt+`
`+Bt)}catch{}Ht(`KO: ${Mt}
EN: ${Bt}`)}catch(s){Ht("ERROR:"+s.message)}finally{Gt(!1),setTimeout(()=>Ht(""),2e4)}}}async function Ro(){if(!kt){Ft(!0),ge("");try{const s=await vn(er,ve,{includeProgressTracker:Nt,trackerVersion:Zt});ge(`통합 게시 완료!
KO: ${window.location.origin}${s.urls.ko}
EN: ${window.location.origin}${s.urls.en}`)}catch(s){ge("ERROR: "+s.message)}finally{Ft(!1),setTimeout(()=>ge(""),15e3)}}}async function jo(){try{(await(await fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"DELETE"})).json()).ok&&Se(null)}catch{}}async function Io(){if(x!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}lt(!0)}async function Ge(s){lt(!1),rt(!0);const w=(s==null?void 0:s.products)??v,et=(s==null?void 0:s.productsCnty)??u,bt=(s==null?void 0:s.citations)??f,Ot=(s==null?void 0:s.citationsCnty)??F;try{const U=i,se=[U.title||"",U.dateLine||"",U.noticeText||"",U.totalInsight||"",U.reportType||"",U.productInsight||"",U.productHowToRead||"",U.citationInsight||"",U.citationHowToRead||"",U.dotcomInsight||"",U.dotcomHowToRead||"",U.todoText||"",U.kpiLogicText||"",U.cntyInsight||"",U.cntyHowToRead||"",U.citDomainInsight||"",U.citDomainHowToRead||"",U.citCntyInsight||"",U.citCntyHowToRead||"",U.period||"",U.team||"",U.reportNo||""],L=w.map(_=>_.kr||""),Tt=w.map(_=>_.compName||""),Mt=bt.map(_=>_.category||""),Bt=[...new Set(et.map(_=>_.country||""))],V=[...new Set(et.map(_=>_.product||""))],q=[...new Set(et.map(_=>_.compName||""))],pt=[...new Set(Ot.map(_=>_.cnty||"").filter(_=>_&&_!=="TTL"))],at=[...se,...L,...Tt,...Mt,...Bt,...V,...q,...pt].map(_=>_||" "),K=await Cn(at,{from:"ko",to:"en"});let M=0;const Vt={...i,title:K[M++]||U.title,dateLine:K[M++]||U.dateLine,noticeText:K[M++]||U.noticeText,totalInsight:K[M++]||U.totalInsight,reportType:K[M++]||U.reportType,productInsight:K[M++]||U.productInsight,productHowToRead:K[M++]||U.productHowToRead,citationInsight:K[M++]||U.citationInsight,citationHowToRead:K[M++]||U.citationHowToRead,dotcomInsight:K[M++]||U.dotcomInsight,dotcomHowToRead:K[M++]||U.dotcomHowToRead,todoText:K[M++]||U.todoText,kpiLogicText:K[M++]||U.kpiLogicText,cntyInsight:K[M++]||U.cntyInsight,cntyHowToRead:K[M++]||U.cntyHowToRead,citDomainInsight:K[M++]||U.citDomainInsight,citDomainHowToRead:K[M++]||U.citDomainHowToRead,citCntyInsight:K[M++]||U.citCntyInsight,citCntyHowToRead:K[M++]||U.citCntyHowToRead,period:(M++,U.period),team:K[M++]||U.team,reportNo:(M++,U.reportNo)},$t=_=>_&&_.replace(/\b\w/g,Q=>Q.toUpperCase()),Ut=_=>(_||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Yt={};w.forEach((_,Q)=>{Yt[_.id]={en:$t(K[M+Q]||_.kr),compNameEn:Ut(K[M+L.length+Q]||_.compName)}}),M+=L.length+Tt.length;const Rt={};bt.forEach((_,Q)=>{Rt[`${_.rank}_${_.source}`]=$t(K[M+Q]||_.category)}),M+=Mt.length;const ne={};Bt.forEach((_,Q)=>{ne[_]=/^[A-Z]{2,3}$/.test(_)?_:K[M+Q]||_}),M+=Bt.length;const fe={};V.forEach((_,Q)=>{fe[_]=K[M+Q]||_}),M+=V.length;const le={};q.forEach((_,Q)=>{le[_]=K[M+Q]||_}),M+=q.length;const ce={};pt.forEach((_,Q)=>{ce[_]=/^[A-Z]{2,3}$/.test(_)?_:K[M+Q]||_}),g(Vt),d(_=>_.map(Q=>{var He,Ue;return{...Q,en:((He=Yt[Q.id])==null?void 0:He.en)||Q.en||Q.kr,compNameEn:((Ue=Yt[Q.id])==null?void 0:Ue.compNameEn)||Q.compNameEn||Q.compName}})),y(_=>_.map(Q=>({...Q,categoryEn:Rt[`${Q.rank}_${Q.source}`]||Q.categoryEn||Q.category}))),k(_=>_.map(Q=>({...Q,countryEn:$t(ne[Q.country]||Q.country),productEn:$t(fe[Q.product]||Q.product),compNameEn:Ut(le[Q.compName]||Q.compName)}))),m(_=>_.map(Q=>({...Q,cntyEn:Q.cnty==="TTL"?"TTL":$t(ce[Q.cnty]||Q.cnty)}))),rt(!1)}catch(U){alert("번역 오류: "+U.message),rt(!1)}}async function Do(){const s=j(e,p,h.products,h.citations,a,x,h.productsCnty,h.citationsCnty);try{await navigator.clipboard.writeText(s)}catch{const w=document.createElement("textarea");w.value=s,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w)}$(!0),setTimeout(()=>$(!1),2500)}async function Po(){await Tn(e,p,v,f,a)}async function No(){if(H!=="sending"){ot("sending");try{const s=ct(),w=j(e,s.total,s.products,s.citations,s.dotcom,x,s.productsCnty,s.citationsCnty,{weeklyLabels:A,categoryStats:Y,unlaunchedMap:(J==null?void 0:J.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,Ot=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:O.trim(),subject:et,html:w})})).json();if(!Ot.ok)throw new Error(Ot.error||"발송 실패");ot("ok"),setTimeout(()=>ot(!1),4e3)}catch(s){ot("error"),ft(s.message),setTimeout(()=>{ot(!1),ft("")},5e3)}}}async function Oo(){var et,bt,Ot,U,se;if(ht)return;const s=zn(ut.trim());if(!s){Et("error"),ft("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Et(null),3e3);return}vt(!0),Et(null),ft(""),Dt("");const w=[];try{const L=await Gn(s,V=>ft(V));if(w.push(`[Sync] parsed keys: ${Object.keys(L).join(", ")||"(없음)"}`),L.meta&&w.push(`[Sync] meta keys: ${Object.keys(L.meta).join(", ")}`),L.productsPartial&&w.push(`[Sync] products: ${L.productsPartial.length}건`),w.push(`[Sync] citations: ${((et=L.citations)==null?void 0:et.length)??0}건`),w.push(`[Sync] citationsCnty: ${((bt=L.citationsCnty)==null?void 0:bt.length)??0}건`),w.push(`[Sync] dotcom: ${L.dotcom?"OK":"(없음)"}`),w.push(`[Sync] productsCnty: ${((Ot=L.productsCnty)==null?void 0:Ot.length)??0}건`),L.meta){const V=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","noticeText","kpiLogicText","todoText","aiPromptRules"];c(q=>{const pt={...q};for(const[at,K]of Object.entries(L.meta))V.includes(at)&&q[at]||(pt[at]=K);return pt}),g(q=>({...q,period:L.meta.period,dateLine:L.meta.dateLine,reportNo:L.meta.reportNo}))}if(L.citations&&(y(L.citations),tt.current={...tt.current,citations:L.citations}),L.dotcom&&(C(V=>({...V,...L.dotcom})),tt.current={...tt.current,dotcom:{...tt.current.dotcom,...L.dotcom}}),L.productsCnty&&(k(L.productsCnty),tt.current={...tt.current,productsCnty:L.productsCnty}),L.citationsCnty&&(m(L.citationsCnty),tt.current={...tt.current,citationsCnty:L.citationsCnty}),L.monthlyVis&&G&&G(L.monthlyVis),X){const V={weeklyPR:L.weeklyPR||null,weeklyPRLabels:L.weeklyPRLabels||null,weeklyBrandPrompt:L.weeklyBrandPrompt||null,weeklyBrandPromptLabels:L.weeklyBrandPromptLabels||null,appendixPrompts:L.appendixPrompts||null,unlaunchedMap:L.unlaunchedMap||null,weeklyLabelsFull:L.weeklyLabelsFull||null,prTopicList:L.prTopicList||null};X(V),tt.current={...tt.current,extra:{...tt.current.extra,...V}}}const Tt=L.weeklyLabels||((U=L.meta)==null?void 0:U.weeklyLabels);console.log("[SYNC] weeklyLabels:",Tt,"weeklyLabelsFull:",L.weeklyLabelsFull),Tt&&Tt.length&&R(Tt),L.weeklyAll&&T(V=>({...V,...L.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(L));const Mt=L.weeklyMap?Object.keys(L.weeklyMap):[],Bt=((se=L.productsPartial)==null?void 0:se.map(V=>V.id))||[];if(console.log("[SYNC] weeklyMap keys:",Mt.length?Mt:"NONE"),console.log("[SYNC] productsPartial IDs:",Bt.length?Bt:"NONE"),Mt.length&&Bt.length){const V=Bt.filter(pt=>!Mt.includes(pt)),q=Mt.filter(pt=>!Bt.includes(pt));V.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",V),q.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",q),!V.length&&!q.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(L.productsPartial){const V=L.productsPartial.map(q=>{var le;const pt=((le=L.weeklyMap)==null?void 0:le[q.id])||[],at=pt.filter(ce=>ce!=null&&ce>0),K=q.score,M=q.prev||0,Vt=q.vsComp>0?Math.round(K/q.vsComp*100):100,$t=at.length>0?at[at.length-1]:K,Ut=at.length>=5?at[at.length-5]:at[0]||0,Yt=K,Rt=M,ne=Vt,fe=M>0&&M!==K?[M,K]:[];return{...q,score:Yt,prev:Rt,weekly:pt,monthly:fe,weeklyScore:$t,weeklyPrev:Ut,monthlyScore:K,monthlyPrev:M,compRatio:ne,status:ne>=100?"lead":ne>=80?"behind":"critical"}});d(V),tt.current={...tt.current,products:V}}else L.weeklyMap&&d(V=>V.map(q=>{var at;const pt=(at=L.weeklyMap)==null?void 0:at[q.id];return pt?{...q,weekly:pt}:q}));if(L.total){const V={...tt.current.total,...L.total,...L.buTotals?{buTotals:L.buTotals}:{},...L.buTotalsPrev?{buTotalsPrev:L.buTotalsPrev}:{},...L.countryTotals?{countryTotals:L.countryTotals}:{},...L.countryTotalsPrev?{countryTotalsPrev:L.countryTotalsPrev}:{}};l(q=>({...q,...V})),tt.current={...tt.current,total:V}}{let V=function(M){if(!M)return 0;const Vt=String(M).trim(),$t=Vt.match(/(\d{1,2})월/);if($t){const Rt=parseInt($t[1]);return Rt>=1&&Rt<=12?Rt:0}const Ut=Vt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Ut)return at[Ut[1].toLowerCase()]||0;const Yt=Vt.match(/\d{4}[-\/](\d{1,2})/);if(Yt){const Rt=parseInt(Yt[1]);return Rt>=1&&Rt<=12?Rt:0}return 0};const q=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],at={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let K=0;if(L.derivedPeriod){const M=V(L.derivedPeriod);M>K&&(K=M)}if(L.citDerivedPeriod){const M=V(L.citDerivedPeriod);M>K&&(K=M)}K>0&&K<=12&&(c(M=>({...M,period:`${q}년 ${K}월`})),g(M=>({...M,period:`${pt[K]} ${q}`})))}if(!L.total&&L.productsPartial&&L.productsPartial.length>0){const V=L.productsPartial,q=+(V.reduce((at,K)=>at+K.score,0)/V.length).toFixed(1),pt=+(V.reduce((at,K)=>at+(K.vsComp||0),0)/V.length).toFixed(1);l(at=>({...at,score:q,vsComp:pt,rank:q>=pt?1:2}))}if(setTimeout(()=>{Qe(t,{meta:L.meta||null,total:L.total?{...L.total,...L.buTotals?{buTotals:L.buTotals}:{},...L.buTotalsPrev?{buTotalsPrev:L.buTotalsPrev}:{},...L.countryTotals?{countryTotals:L.countryTotals}:{},...L.countryTotalsPrev?{countryTotalsPrev:L.countryTotalsPrev}:{}}:null,productsPartial:L.productsPartial||null,weeklyMap:L.weeklyMap||null,weeklyLabels:L.weeklyLabels||null,weeklyLabelsFull:L.weeklyLabelsFull||null,weeklyAll:L.weeklyAll||null,citations:L.citations||null,dotcom:L.dotcom||null,productsCnty:L.productsCnty||null,citationsCnty:L.citationsCnty||null,citationsByCnty:L.citationsByCnty||null,dotcomByCnty:L.dotcomByCnty||null,appendixPrompts:L.appendixPrompts||null,unlaunchedMap:L.unlaunchedMap||null,prTopicList:L.prTopicList||null,monthlyVis:L.monthlyVis||null,weeklyPR:L.weeklyPR||null,weeklyPRLabels:L.weeklyPRLabels||null,monthlyPR:L.monthlyPR||null,monthlyPRLabels:L.monthlyPRLabels||null,weeklyBrandPrompt:L.weeklyBrandPrompt||null,weeklyBrandPromptLabels:L.weeklyBrandPromptLabels||null,monthlyBrandPrompt:L.monthlyBrandPrompt||null,monthlyBrandPromptLabels:L.monthlyBrandPromptLabels||null,dotcomTrend:L.dotcomTrend||null,dotcomTrendMonths:L.dotcomTrendMonths||null}),setTimeout(Lo,250)},100),Dt(w.join(`
`)),Et("ok"),ft(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const V={};L.productsPartial&&(V.products=L.productsPartial.map(q=>{var $t;const pt=(($t=L.weeklyMap)==null?void 0:$t[q.id])||[],at=q.vsComp>0?q.score/q.vsComp*100:100,K=pt.find(Ut=>Ut!=null&&Ut>0),M=q.prev!=null&&q.prev>0?q.prev:K||0,Vt=M>0?[M,q.score]:[];return{...q,prev:M,weekly:pt,monthly:Vt,compRatio:Math.round(at),status:at>=100?"lead":at>=80?"behind":"critical"}})),L.productsCnty&&(V.productsCnty=L.productsCnty),L.citations&&(V.citations=L.citations),L.citationsCnty&&(V.citationsCnty=L.citationsCnty);try{await Ge(V)}catch{}ft("동기화 + 번역 완료!")}}catch(L){w.push(`[ERROR] ${L.message}`),Et("error"),ft(L.message),Dt(w.join(`
`))}finally{vt(!1),setTimeout(()=>{Et(null),ft("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:dt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:B},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:B},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:B},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Un,{...$o||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:B},children:"Google Sheets URL"}),r.jsx("input",{value:ut,onChange:s=>Jt(s.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...st,fontSize:11,padding:"7px 9px",marginBottom:8,color:ut?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:Oo,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:ht?"wait":"pointer",background:ht?"#1E293B":dt,fontSize:12,fontWeight:700,color:ht?"#94A3B8":"#FFFFFF",fontFamily:B,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(We,{size:13,style:{animation:ht?"spin 1s linear infinite":"none"}}),ht?"동기화 중...":"구글 시트 동기화"]}),(wt||ht&&Lt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.6,background:wt==="ok"?"#14532D":wt==="error"?"#450A0A":"#1E293B",color:wt==="ok"?"#86EFAC":wt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${wt==="ok"?"#22C55E33":wt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Lt}),It&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[It,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(It).then(()=>{const s=document.getElementById("vis-debug-copy-btn");s&&(s.textContent="복사됨!",setTimeout(()=>{s.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:B,cursor:"pointer"},children:"로그 복사"})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsxs("button",{onClick:Io,disabled:nt,style:{width:"100%",padding:"9px 0",background:nt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:B,cursor:nt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:nt?.6:1},children:[r.jsx(Mo,{size:13})," ",nt?"번역 중...":"AI 번역 (EN)"]}),yt&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:B},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:B},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>lt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:B,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:Ge,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:B,cursor:"pointer"},children:"예, 번역하기"})]})]})}),r.jsxs("button",{onClick:Po,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(zo,{size:12})," 구글 시트 템플릿 다운로드"]}),r.jsxs("button",{onClick:Bo,disabled:Ct,style:{width:"100%",padding:"9px 0",background:Ct?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Ct?"#94A3B8":"#FFFFFF",fontFamily:B,cursor:Ct?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(Ve,{size:12}),Ct?"게시 중...":"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:B,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Nt,onChange:s=>ee(s.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),Nt&&r.jsxs("div",{style:{display:"flex",gap:4,marginBottom:6,marginLeft:18},children:[r.jsx("button",{onClick:()=>ze("v1"),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:Zt==="v1"?dt:"#1E293B",color:Zt==="v1"?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V1"}),r.jsx("button",{onClick:()=>ze("v2"),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:Zt==="v2"?dt:"#1E293B",color:Zt==="v2"?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V2 (외부)"})]}),r.jsxs("button",{onClick:Ro,disabled:kt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:kt?"#1E293B":"#166534",color:kt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:B,cursor:kt?"wait":"pointer",marginBottom:6},children:[r.jsx(Ve,{size:12}),kt?"통합 게시 중...":"통합 대시보드 게시"]}),oe&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.8,background:oe.startsWith("ERROR")?"#450A0A":"#14532D",color:oe.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:oe.startsWith("ERROR:")?oe.slice(6):oe})]}),r.jsxs("button",{onClick:async()=>{const s={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||""};if(!Object.values(s).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const bt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:s})})).json();bt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(bt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(_o,{size:12})," 완성본 아카이빙 (AI 학습)"]}),Pt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:B,lineHeight:1.8,background:Pt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Pt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Pt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Pt.startsWith("ERROR:")?Pt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(Ke,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[Pt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),(Qt==null?void 0:Qt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:B,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:jo,style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:B,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Qt.urls.ko},{label:"EN",url:Qt.urls.en}].map(({label:s,url:w})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:w,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:B,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s,": ",w]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${w}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(Ke,{size:10})})]},s)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:B},children:Qt.ts?new Date(Qt.ts).toLocaleString("ko-KR"):""})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:s=>o(w=>({...w,reportType:s.target.value})),style:{...st,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:s=>o(w=>({...w,reportNo:s.target.value})),style:{...st}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:s=>o(w=>({...w,period:s.target.value})),style:{...st}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:s=>o(w=>({...w,title:s.target.value})),rows:4,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:s=>o(w=>({...w,team:s.target.value})),style:{...st,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:B},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:s=>o(w=>({...w,dateLine:s.target.value})),style:{...st,marginBottom:10}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Notice"}),r.jsx("button",{onClick:()=>o(s=>({...s,showNotice:!s.showNotice})),style:{background:e.showNotice?dt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:s=>o(w=>({...w,noticeText:s.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(s=>({...s,showKpiLogic:!s.showKpiLogic})),style:{background:e.showKpiLogic?dt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:s=>o(w=>({...w,kpiLogicText:s.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:B,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:s=>o(w=>({...w,titleFontSize:Number(s.target.value)})),style:{width:"100%",accentColor:dt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:s=>o(w=>({...w,titleColor:s.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:B},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([s,w])=>r.jsx("button",{onClick:()=>o(et=>({...et,titleColor:s})),title:w,style:{width:16,height:16,borderRadius:"50%",background:s,border:e.titleColor===s?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},s))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:s,label:w})=>r.jsx("button",{onClick:()=>o(et=>({...et,[s]:!et[s]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[s]?dt:"#1E293B",color:e[s]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:w},s))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:B},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?dt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(s=>({...s,trendMode:(s.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:B},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?dt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?dt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:B},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:B},children:"콘텐츠 편집"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,totalInsight:"⏳ AI 생성 중..."}));const s=await At("totalInsight",{products:ct().products,productsCnty:ct().productsCnty,total:ct().total,todoText:e.todoText||""},x);o(w=>({...w,totalInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,totalInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:s=>o(w=>({...w,totalInsight:s.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productInsight:"⏳ AI 생성 중..."}));const s=await At("product",{products:ct().products,total:ct().total},x);o(w=>({...w,productInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,productInsight:`[AI 실패: ${s.message}]

`+or(ct().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showProductInsight:!s.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?dt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:s=>o(w=>({...w,productInsight:s.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"제품별 GEO Visibility"},x);o(w=>({...w,productHowToRead:s}))}catch{o(s=>({...s,productHowToRead:nr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showProductHowToRead:!s.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?dt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:s=>o(w=>({...w,productHowToRead:s.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyInsight:"⏳ AI 생성 중..."}));const s=await At("cnty",{productsCnty:ct().productsCnty},x);o(w=>({...w,cntyInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,cntyInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCntyInsight:!s.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?dt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:s=>o(w=>({...w,cntyInsight:s.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"국가별 GEO Visibility"},x);o(w=>({...w,cntyHowToRead:s}))}catch{o(s=>({...s,cntyHowToRead:rr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCntyHowToRead:!s.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?dt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:s=>o(w=>({...w,cntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:s=>o(w=>({...w,prNotice:s.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:s=>o(w=>({...w,prTopicDescsRaw:s.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:s=>o(w=>({...w,prTopicPromptsRaw:s.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:s=>o(w=>({...w,bpNotice:s.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationInsight:"⏳ AI 생성 중..."}));const s=await At("citation",{citations:ct().citations},x);o(w=>({...w,citationInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,citationInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitationInsight:!s.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?dt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:s=>o(w=>({...w,citationInsight:s.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"Citation 도메인별 현황"},x);o(w=>({...w,citationHowToRead:s}))}catch{o(s=>({...s,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitationHowToRead:!s.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?dt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:s=>o(w=>({...w,citationHowToRead:s.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainInsight:"⏳ AI 생성 중..."}));const s=await At("citDomain",{citationsCnty:ct().citationsCnty},x);o(w=>({...w,citDomainInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,citDomainInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainInsight:!s.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?dt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:s=>o(w=>({...w,citDomainInsight:s.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"도메인별 Citation 현황"},x);o(w=>({...w,citDomainHowToRead:s}))}catch{o(s=>({...s,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainHowToRead:!s.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?dt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:s=>o(w=>({...w,citDomainHowToRead:s.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyInsight:"⏳ AI 생성 중..."}));const s=await At("citCnty",{citationsCnty:ct().citationsCnty},x);o(w=>({...w,citCntyInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,citCntyInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyInsight:!s.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?dt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:s=>o(w=>({...w,citCntyInsight:s.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"국가별 Citation 도메인"},x);o(w=>({...w,citCntyHowToRead:s}))}catch{o(s=>({...s,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyHowToRead:!s.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?dt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:s=>o(w=>({...w,citCntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),u.length>0&&(()=>{const s=[...new Set(h.productsCnty.map(w=>w.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:B},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:s.map(w=>{const et=(e.cntyProductFilter||{})[w]!==!1;return r.jsx("button",{onClick:()=>o(bt=>({...bt,cntyProductFilter:{...bt.cntyProductFilter||{},[w]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:w},w)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomInsight:"⏳ AI 생성 중..."}));const s=await At("dotcom",{dotcom:ct().dotcom},x);o(w=>({...w,dotcomInsight:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,dotcomInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showDotcomInsight:!s.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?dt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:s=>o(w=>({...w,dotcomInsight:s.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomHowToRead:"⏳ AI 생성 중..."}));const s=await At("howToRead",{section:"닷컴 Citation"},x);o(w=>({...w,dotcomHowToRead:s}))}catch{o(w=>({...w,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showDotcomHowToRead:!s.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?dt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:s=>o(w=>({...w,dotcomHowToRead:s.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:s=>o(w=>({...w,todoNotice:s.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,todoText:"⏳ AI 생성 중..."}));const s=await At("todo",{products:ct().products},x);o(w=>({...w,todoText:s}))}catch(s){console.error("[AI]",s),o(w=>({...w,todoText:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(s=>({...s,showTodo:!s.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?dt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:s=>o(w=>({...w,todoText:s.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:B},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("button",{onClick:Do,style:{width:"100%",padding:"9px 0",background:Z?"#14532D":"transparent",border:`1px solid ${Z?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:Z?"#86EFAC":"#64748B",fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:Z?r.jsxs(r.Fragment,{children:[r.jsx($e,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(bo,{size:12})," 이메일 HTML 복사"]})}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:B},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:O,onChange:s=>it(s.target.value),placeholder:"recipient@example.com",style:{...st,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:No,disabled:H==="sending"||!O.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:H==="sending"||!O.trim()?"not-allowed":"pointer",background:H==="ok"?"#14532D":H==="error"?"#7F1D1D":H==="sending"?"#1E3A5F":O.trim()?"#1D4ED8":"#1E293B",color:H==="ok"?"#86EFAC":H==="error"?"#FCA5A5":O.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:H==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(We,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):H==="ok"?r.jsxs(r.Fragment,{children:[r.jsx($e,{size:12})," 발송 완료!"]}):H==="error"?r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(qe,{size:12})," 메일 발송"]})})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:B,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const re="weekly-report",mo="geo-weekly-report-cache";function ar({meta:t,total:e,products:o,citations:i,dotcom:c,productsCnty:n=[],citationsCnty:g=[],lang:p="ko",weeklyLabels:l,weeklyAll:v,categoryStats:d}){const f=W.useRef(null),y=W.useMemo(()=>Ie(t,e,o,i,c,p,n,g,{weeklyLabels:l,weeklyAll:v,categoryStats:d}),[t,e,o,i,c,p,n,g,l,v,d]);return Vo.useEffect(()=>{const a=f.current;if(!a)return;const C=a.contentDocument||a.contentWindow.document;C.open(),C.write(y),C.close();const u=()=>{try{C.body.style.overflow="hidden",C.documentElement.style.overflow="hidden";const k=C.documentElement.scrollHeight;k&&(a.style.height=k+20+"px")}catch{}};setTimeout(u,150),setTimeout(u,400),setTimeout(u,1e3),setTimeout(u,2e3)},[y]),r.jsx("iframe",{ref:f,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function sr({meta:t,total:e,products:o,citations:i,dotcom:c,productsCnty:n=[],citationsCnty:g=[],lang:p="ko",weeklyLabels:l,weeklyAll:v,categoryStats:d}){const[f,y]=W.useState(!1),a=W.useMemo(()=>Ie(t,e,o,i,c,p,n,g,{weeklyLabels:l,weeklyAll:v,categoryStats:d}),[t,e,o,i,c,p,n,g,l,v,d]);async function C(){try{await navigator.clipboard.writeText(a)}catch{const u=document.createElement("textarea");u.value=a,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u)}y(!0),setTimeout(()=>y(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsx("div",{children:r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:B},children:"주간 리포트 HTML"})}),r.jsx("button",{onClick:C,style:{padding:"6px 14px",borderRadius:7,border:"none",background:f?"#14532D":dt,color:f?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:f?r.jsxs(r.Fragment,{children:[r.jsx($e,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(bo,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:a})})]})}function lr(){const t=W.useRef(gn(mo)).current,[e,o]=W.useState({...ye,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,c]=W.useState({...ye,...(t==null?void 0:t.metaEn)??{}}),[n,g]=W.useState((t==null?void 0:t.total)??ln),[p,l]=W.useState((t==null?void 0:t.products)??cn),[v,d]=W.useState((t==null?void 0:t.citations)??hn),[f,y]=W.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:dn),[a,C]=W.useState((t==null?void 0:t.productsCnty)??pn),[u,k]=W.useState((t==null?void 0:t.citationsCnty)??un),[F,m]=W.useState((t==null?void 0:t.weeklyLabels)??null),[h,x]=W.useState((t==null?void 0:t.weeklyAll)??{}),[E,b]=W.useState(null),[S,R]=W.useState("preview"),[T,A]=W.useState("ko"),[D,P]=W.useState([]),[I,j]=W.useState(""),[N,G]=W.useState(!1),[X,Y]=W.useState(""),[J,gt]=W.useState(null),[tt,ct]=W.useState(!0);W.useEffect(()=>{let Z=!1;const $=Sn(e.period)||`${new Date().getMonth()+1}월`,O=An($);async function it(){var H,ot,yt;try{const lt=await fetch("/api/tracker-snapshot"),nt=lt.ok?await lt.json():null;if(nt!=null&&nt.ok&&((yt=(ot=(H=nt.data)==null?void 0:H.quantitativeGoals)==null?void 0:ot.rows)!=null&&yt.length)){const rt=eo(nt.data,O);if(rt!=null&&rt.length&&!Z){b(rt);return}}}catch{}try{const[{parseKPISheet:lt},nt]=await Promise.all([Le(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Le(()=>import("./xlsx-2l-k0XfJ.js").then(Zt=>Zt.x),__vite__mapDeps([0,1]))]),rt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Ct=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${rt}&headers=1`,Gt=await fetch(Ct,{cache:"no-store"});if(!Gt.ok)return;const Pt=await Gt.text(),Ht=nt.read(Pt,{type:"string"}),kt=Ht.Sheets[Ht.SheetNames[0]],Ft=nt.utils.sheet_to_json(kt,{header:1,defval:""}),Nt=lt(Ft),ee=eo(Nt,O);ee!=null&&ee.length&&!Z&&b(ee)}catch{}}return it(),()=>{Z=!0}},[e.period]);const ut=T==="en"?i:e,Jt=T==="en"?c:o,ht=W.useMemo(()=>ve(p,a,v,u,T),[p,a,v,u,T]);W.useEffect(()=>{yn(re).then(P)},[]);const vt=W.useRef(null);function wt(Z,$=2e3){clearTimeout(vt.current),Y(Z),vt.current=setTimeout(()=>Y(""),$)}W.useEffect(()=>()=>clearTimeout(vt.current),[]);const Et=W.useRef(!1);W.useEffect(()=>{let Z=!1;return we(re).then($=>{Z||!$||(Et.current=!0,$.meta&&o(O=>({...O,...$.meta})),$.total&&g(O=>({...O,...$.total})),$.citations&&d($.citations),$.dotcom&&y(O=>({...O,...$.dotcom})),$.productsCnty&&C($.productsCnty),$.citationsCnty&&k($.citationsCnty),$.weeklyLabels&&m($.weeklyLabels),$.weeklyAll&&x(O=>({...O,...$.weeklyAll})),$.productsPartial?l($.productsPartial.map(O=>{var ot;const it=((ot=$.weeklyMap)==null?void 0:ot[O.id])||[],H=O.vsComp>0?O.score/O.vsComp*100:100;return{...O,weekly:it,monthly:[],compRatio:Math.round(H),status:H>=100?"lead":H>=80?"behind":"critical"}})):$.weeklyMap&&l(O=>O.map(it=>{var ot;const H=(ot=$.weeklyMap)==null?void 0:ot[it.id];return H?{...it,weekly:H}:it})))}),()=>{Z=!0}},[]),W.useEffect(()=>{fn(mo,{metaKo:e,metaEn:i,total:n,products:p,citations:v,dotcom:f,productsCnty:a,citationsCnty:u,weeklyLabels:F,weeklyAll:h})},[e,i,n,p,v,f,a,u,F,h]);async function Lt(){if(!J)return;const $=await bn(re,J,{metaKo:e,metaEn:i,total:n,products:p,citations:v,dotcom:f,productsCnty:a,citationsCnty:u,weeklyLabels:F,weeklyAll:h});$&&P($),wt($?"저장 완료!":"저장 실패")}async function ft(){var O;const Z=I.trim()||`${ut.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,$=await mn(re,Z,{metaKo:e,metaEn:i,total:n,products:p,citations:v,dotcom:f,productsCnty:a,citationsCnty:u,weeklyLabels:F,weeklyAll:h});$&&(P($),j(""),gt(((O=$[0])==null?void 0:O.ts)||null)),wt($?"새로 저장 완료!":"저장 실패")}function It(Z){const $=Z.data;o({...ye,...$.metaKo||$.meta||{}}),c({...ye,...$.metaEn||{}}),$.total&&g($.total),$.products&&l($.products),$.citations&&d($.citations),$.dotcom&&y($.dotcom),$.productsCnty&&C($.productsCnty),$.citationsCnty&&k($.citationsCnty),$.weeklyLabels&&m($.weeklyLabels),$.weeklyAll&&x($.weeklyAll),gt(Z.ts),wt(`"${Z.name}" 불러옴`)}async function Dt(Z){const $=D[Z];if(!$)return;const O=await xn(re,$.ts);O&&P(O),J===$.ts&&gt(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:B},children:[tt&&r.jsx(ir,{mode:re,meta:ut,setMeta:Jt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:c,total:n,setTotal:g,products:p,setProducts:l,citations:v,setCitations:d,dotcom:f,setDotcom:y,productsCnty:a,setProductsCnty:C,citationsCnty:u,setCitationsCnty:k,resolved:ht,previewLang:T,setPreviewLang:A,snapshots:D,setSnapshots:P,setWeeklyLabels:m,setWeeklyAll:x,weeklyLabels:F,weeklyAll:h,generateHTML:Ie}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>ct(Z=>!Z),title:tt?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:tt?r.jsx(Go,{size:16}):r.jsx(Ho,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Z,tab:$,lang:O,label:it})=>{const H=$==="code"?S==="code":S==="preview"&&T===O;return r.jsx("button",{onClick:()=>{R($),O&&A(O)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:H?"#1E293B":"transparent",color:H?"#FFFFFF":"#475569",fontSize:11,fontWeight:H?700:500,fontFamily:B,cursor:"pointer"},children:it},Z)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[X&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:B},children:X}),r.jsxs("button",{onClick:Lt,disabled:!J,title:J?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:J?"pointer":"default",background:J?"#1D4ED8":"#1E293B",color:J?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4,opacity:J?1:.5},children:[r.jsx(Je,{size:11})," 저장"]}),r.jsx("input",{value:I,onChange:Z=>j(Z.target.value),placeholder:"버전 이름...",onKeyDown:Z=>Z.key==="Enter"&&ft(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:B,outline:"none"}}),r.jsxs("button",{onClick:ft,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Je,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>G(!N),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:N?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:B,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Uo,{size:11})," 불러오기 ",D.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",D.length,")"]})]}),N&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Z=>Z.stopPropagation(),children:D.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:B,textAlign:"center"},children:"저장된 버전이 없습니다"}):D.map((Z,$)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:J===Z.ts?"#1E3A5F":"#0F172A",border:J===Z.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:B,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Z.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:B},children:new Date(Z.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{It(Z),G(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:B},children:"적용"}),r.jsx("button",{onClick:()=>Dt($),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(Wo,{size:10})})]},Z.ts))})]})]})]}),S==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:r.jsx(ar,{meta:ut,total:n,products:ht.products,citations:ht.citations,dotcom:f,productsCnty:ht.productsCnty,citationsCnty:ht.citationsCnty,lang:T,weeklyLabels:F,weeklyAll:h,categoryStats:E})})}):r.jsx(sr,{meta:ut,total:n,products:ht.products,citations:ht.citations,dotcom:f,productsCnty:ht.productsCnty,citationsCnty:ht.citationsCnty,lang:T,weeklyLabels:F,weeklyAll:h,categoryStats:E}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:B},children:["v","3.1.9"]})})]})]})}Ko.createRoot(document.getElementById("root")).render(r.jsx(lr,{}));
