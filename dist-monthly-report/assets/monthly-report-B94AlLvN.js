const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as r,b as K,R as co,L as pn,D as un,G as po,A as fn,c as ze,S as kt,C as We,d as _o,e as uo,P as hn,f as gn,h as fo,F as yn,T as mn,i as bn}from"./react-BzJiA2Qb.js";import{R as xn}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(l){if(l.ep)return;l.ep=!0;const n=o(l);fetch(l.href,n)}})();const vn="modulepreload",wn=function(t){return"/admin/monthly-report/"+t},ho={},Ve=function(e,o,i){let l=Promise.resolve();if(o&&o.length>0){let u=function(m){return Promise.all(m.map(h=>Promise.resolve(h).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=u(o.map(m=>{if(m=wn(m),m in ho)return;ho[m]=!0;const h=m.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${c}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":vn,h||(g.as="script"),g.crossOrigin="",g.href=m,d&&g.setAttribute("nonce",d),document.head.appendChild(g),h)return new Promise((p,x)=>{g.addEventListener("load",p),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return l.then(u=>{for(const s of u||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},U="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Cn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function Ae(t){const e=Cn.indexOf(t);return e>=0?e:999}function yt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function kn(t){if(!t||!String(t).trim())return"";const e=u=>yt(u).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),i=[];let l=[];const n=()=>{l.length&&(i.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${U};color:#222;">${l.map(e).join("<br/>")}</p>`),l=[])};for(const u of o){const s=u.trim();if(!s){n();continue}let d;(d=s.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(n(),i.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${U};color:#111;">${yt(d[1])}.${yt(d[2])} ${e(d[3])}</h3>`)):(d=s.match(/^(\d+)\.\s+(.+)$/))?(n(),i.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${U};color:#000;">${yt(d[1])}. ${e(d[2])}</h2>`)):l.push(s)}return n(),i.join("")}const go=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Ye(t){return go.filter(e=>t.includes(e)).concat(t.filter(e=>!go.includes(e)))}const Sn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Xe(t){return Sn[String(t||"").trim().toUpperCase()]||t}function Jt(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Pe(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Te(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ae(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Fn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function En(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},l=["MS","HS","ES"],u=l.filter(s=>t[s]).concat(Object.keys(t).filter(s=>!l.includes(s))).map(s=>{const d=t[s],m=(e||{})[s],h=d.comp>0?Math.round(d.lg/d.comp*100):100,c=ae(d.lg,d.comp)||"#FFFFFF",g=m&&m.lg!=null?Pe(d.lg,m.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};font-weight:700;text-align:center;background:#F5F5F5;">${yt(s)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${c};">${Jt(d.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;background:${c};">${Jt(d.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${c};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;">${g}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function An(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=Ye(Object.keys(t)).map(u=>{const s=t[u],d=(e||{})[u],m=s.comp>0?Math.round(s.lg/s.comp*100):100,h=ae(s.lg,s.comp)||"#FFFFFF",c=d&&d.lg!=null?Pe(s.lg,d.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};font-weight:700;text-align:center;background:#F5F5F5;">${yt(Xe(u))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${h};">${Jt(s.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;background:${h};">${Jt(s.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${h};">${m}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;">${c}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Tn(t,e,o,i){const l=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(f=>{f.country&&f.product&&(n[`${f.country}|${f.product}`]=f.score)});const u={},s=new Set,d=new Set;(t||[]).forEach(f=>{!f.country||f.country==="TTL"||f.country==="TOTAL"||!f.product||(s.add(f.country),d.add(f.product),u[f.product]||(u[f.product]={}),u[f.product][f.country]=f)});const m=Ye(Array.from(s)),h=Array.from(d).sort((f,E)=>Ae(f)-Ae(E));if(!h.length||!m.length)return`<p style="font-size:11px;color:#666;font-family:${U};">데이터가 없습니다.</p>`;const c={};(i||[]).forEach(f=>{[f.kr,f.category,f.id,f.en].filter(Boolean).forEach(v=>{c[v]=f})});const p='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+m.map(f=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${yt(Xe(f))}</th>`).join(""),x=[];return h.forEach((f,E)=>{const v=E%2===0?"#FFFFFF":"#FAFAFA",C=c[f],P=(C?ae(C.score,C.vsComp):null)||v,$=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;font-weight:700;background:${P};">${C?Jt(C.score):"—"}</td>`,D=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;font-weight:700;background:${P};">${C?Te(C.score,C.vsComp):"—"}</td>`,B=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;background:${P};color:#1A1A1A;font-weight:600;">${C!=null&&C.compName?yt(C.compName):"—"}</td>`,O=m.map(A=>{var b;const k=(b=u[f])==null?void 0:b[A],j=(k?ae(k.score,k.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;font-weight:700;background:${j};">${k?Jt(k.score):"—"}</td>`}).join(""),z=m.map(A=>{var b;const k=(b=u[f])==null?void 0:b[A],j=(k?ae(k.score,k.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;font-weight:700;background:${j};">${k?Te(k.score,k.compScore):"—"}</td>`}).join(""),w=m.map(A=>{var b;const k=(b=u[f])==null?void 0:b[A],j=(k?ae(k.score,k.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${U};text-align:center;background:${j};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?yt(k.compName):"—"}</td>`}).join("");x.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${U};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${yt(f)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${U};font-weight:600;background:#F5F5F5;white-space:nowrap;">${l.lg} (%)</td>
        ${$}${O}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${U};background:#F5F5F5;white-space:nowrap;">${l.ratio}</td>
        ${D}${z}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${U};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${B}${w}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${l.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${l.metric}</th>
        ${p}
      </tr>
    </thead>
    <tbody>
      ${x.join("")}
    </tbody>
  </table>
  </div>`}function $n(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},l={};(e||[]).forEach(d=>{d.id&&(l[d.id]=d.score)});const n=["MS","HS","ES"],u={};(t||[]).forEach(d=>{const m=d.bu||"OTHER";u[m]||(u[m]=[]),u[m].push(d)});const s=[];return n.forEach(d=>{const m=(u[d]||[]).slice().sort((h,c)=>Ae(h.kr||h.category||h.id)-Ae(c.kr||c.category||c.id));m.forEach((h,c)=>{const g=h.prev!=null&&h.prev>0?h.prev:l[h.id],p=Pe(h.score,g),x=ae(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${c===0?`<td rowspan="${m.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${d}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;">${yt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${x};">${Jt(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;background:${x};">${Jt(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;background:${x};">${yt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;font-weight:700;background:${x};">${Te(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${U};text-align:center;">${p}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
      </tr>
    </thead>
    <tbody>
      ${s.join("")}
    </tbody>
  </table>`}function Bn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,u)=>n+(u.score||0),0),l=t.map((n,u)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:center;">${u+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};">${yt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function Ln(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,d)=>(d.citations||0)-(s.citations||0));const i=o.slice(0,20),l=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,d)=>s+(d.citations||0),0),u=i.map((s,d)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:center;">${d+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};">${yt(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};">${yt(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${l.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${l.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${l.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${l.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function Rn(t,e){const o={};(t||[]).forEach(s=>{!s.cnty||s.cnty==="TTL"||s.cnty==="TOTAL"||(o[s.cnty]||(o[s.cnty]=[]),o[s.cnty].push(s))});const i=Ye(Object.keys(o));if(!i.length)return"";const l=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,u=i.map(s=>{const d=o[s].sort((g,p)=>(p.citations||0)-(g.citations||0)),m=d.reduce((g,p)=>g+(p.citations||0),0),h=d.slice(0,n),c=[];for(let g=0;g<n;g++){const p=h[g],x=p?Fn(p.domain):null,f=x?`background:${x.bg};`:"",E=x?`color:${x.color};font-weight:700;`:"";c.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${U};${f}${E}">${p?`${yt(p.domain||"")} <span style="color:#666;font-weight:400;">(${(p.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};font-weight:700;background:#F5F5F5;text-align:center;">${yt(Xe(s))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;font-weight:700;">${m.toLocaleString("en-US")}</td>
      ${c.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${l.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${l.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${l.total}</th>
      ${Array.from({length:n},(s,d)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${d+1}</th>`).join("")}
    </tr></thead>
    <tbody>${u}</tbody>
  </table>
  </div>`}function In(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},l=Object.keys(o).filter(s=>o[s]!=null);if(!l.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},u=l.map(s=>{const d=o[s]||0,m=i[s]||0,h=d-m,c=h>0?"LG":h<0?"SS":"=",g=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",p=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${g};color:${p};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};font-weight:${s==="TTL"?"900":"600"};">${yt(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;font-weight:700;">${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;">${m.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${U};text-align:center;font-weight:900;">${c}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${U};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function jn(t,e,o){var s;if(!t||!t.length)return"";const i=((s=t[0])==null?void 0:s.targetMonth)||"3월",l=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(d){return d>=80?"#D1FAE5":d>=50?"#FEF3C7":"#FEE2E2"}const u=t.map(d=>{const m=(d.monthRate||0).toFixed(0),h=(d.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${U};background:#F5F5F5;">${yt(d.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.monthRate)};">${m}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.monthActual||0).toLocaleString()} / ${(d.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.progressRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.cumActual||0).toLocaleString()} / ${(d.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${U};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${U};color:#000;">${l.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${l.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${l.count}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function Pn(t,e){var u;if(!t||!t.length)return"";const o=((u=t[0])==null?void 0:u.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function l(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${U};background:#F5F5F5;">${yt(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.monthRate)};">${(s.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${l(s.progressRate)};">${(s.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${U};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${U};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Ze(t,e,o,i,l={},n="ko",u=[],s=[],d={}){const{productsCntyPrev:m=[],productsPrev:h=[],categoryStats:c=null,stakeholderStats:g=null}=d,p=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",x=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${yt(p)} — ${yt(x)}</title>
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
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: italic; src: url('/font/LG%20Smart%20Regular%20Italic.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: italic; src: url('/font/LG%20Smart%20Bold%20Italic.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${U} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${U};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${U};">${yt(p)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${U};">${yt(x)} · ${yt(t.team||"")}</p>
    </div>

    ${t.showMonthlyReportBody!==!1&&t.monthlyReportBody?`
    <section style="margin-bottom:28px;">
      ${kn(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${U};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Jt(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Jt(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Te(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Pe(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${En(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${An(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${$n(o,h,n)}
    ${Tn(u,m,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${U};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Bn(i,n)}
    ${Ln(s,n)}
    ${Rn(s,n)}
    ${In(l,n)}

    ${jn(c,n)}
    ${Pn(g,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${U};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const gt="#CF0652",R="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Dn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Se={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Dn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Mn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Nn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],_n={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},On=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],zn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Gn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Oo=3;function Un(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Oo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Hn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Oo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const De={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function le(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Wn(t){try{const e=await fetch(le(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Vn(t,e,o){try{const i=await fetch(le(t).snapshots,{method:"POST",headers:De,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const l=await i.json();return l.ok?l.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Kn(t,e,o){try{const i=await fetch(`${le(t).snapshots}/${e}`,{method:"PUT",headers:De,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const l=await i.json();return l.ok?l.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function qn(t,e){try{const o=await fetch(`${le(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function St(t,e,o="ko",i=""){try{const l=await fetch("/api/generate-insight",{method:"POST",headers:De,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!l.ok){const u=await l.json().catch(()=>({}));throw new Error(u.error||`HTTP ${l.status}`)}const n=await l.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(l){throw console.error("[API] generateAIInsight failed:",l.message),l}}async function $e(t){try{const e=await fetch(le(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function yo(t){try{const e=await fetch(le(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Jn(t,e,o={}){const{includePromptList:i=!1,includeReadability:l=!1}=o,[n,u]=await Promise.all([$e("dashboard").catch(()=>null),$e("visibility").catch(()=>null)]),s={...n||{},...u||{}};if(n&&Object.keys(n).forEach(F=>{s[F]==null&&n[F]!=null&&(s[F]=n[F])}),u!=null&&u.meta&&(n!=null&&n.meta)&&(s.meta={...n.meta||{},...u.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const d=s.meta||{},m=s.total||{},c=(s.productsPartial||s.products||[]).map(F=>{var S;const j=F.weekly||((S=s.weeklyMap)==null?void 0:S[F.id])||[],b=F.vsComp>0?F.score/F.vsComp*100:100;return{...F,weekly:j,monthly:F.monthly||[],compRatio:F.compRatio||Math.round(b),status:F.status||(b>=100?"lead":b>=80?"behind":"critical")}}),g=s.citations||[],p=s.dotcom||{},x=s.productsCnty||[],f=s.citationsCnty||[],E=s.weeklyLabels||null,v=s.weeklyAll||{},C=s.citationsByCnty||{},T=s.dotcomByCnty||{},P=e(c,x,g,f,"ko"),$=e(c,x,g,f,"en"),D={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},B={monthlyVis:s.monthlyVis||[],includePromptList:i,includeReadability:l},O=t(d,m,P.products,P.citations,p,"ko",P.productsCnty,P.citationsCnty,E,v,C,T,B,D),z=t({...d,title:d.title||"GEO KPI Dashboard"},m,$.products,$.citations,p,"en",$.productsCnty,$.citationsCnty,E,v,C,T,B,D),w=`${d.period||""} ${d.title||"KPI Dashboard"}`.trim(),k=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:w,htmlKo:O,htmlEn:z})})).json();if(!k.ok)throw new Error(k.error||"게시 실패");return k}async function mo(t,e){try{const o=await fetch(le(t).syncData,{method:"POST",headers:De,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Yn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ge={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},bo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Ee(t,e,o,i,l){return l!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ge[n.kr]||n.kr,compName:n.compNameEn||bo[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||Yn[n.country]||n.country,product:n.productEn||Ge[n.product]||n.product,compName:n.compNameEn||bo[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ge[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function Xn(t,{from:e="ko",to:o="en"}={}){const l=[];for(let n=0;n<t.length;n+=20){const u=t.slice(n,n+20),s=await Promise.all(u.map(async d=>{if(!d||!d.trim())return d;const m=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(d)}`,h=await fetch(m);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(g=>g[0]).join("")}));l.push(...s)}return l}const se=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Zn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Fe(t){const e=Zn.indexOf(t);return e>=0?e:999}function Qe(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function zo(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Qe(o)]=o)}),e}function xo(t,e){var d,m,h,c;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(h=(m=t==null?void 0:t._dashboard)==null?void 0:m.categoryStats)!=null&&h.length?[...t._dashboard.categoryStats].sort((g,p)=>Fe(g.category)-Fe(p.category)):null;const o=t.quantitativeGoals.rows,i=zo((c=t.quantitativeResults)==null?void 0:c.rows);new Date().getMonth()+1;let l=e,n=se.indexOf(l);n<0&&(l="3월",n=0);const u=[...new Set(o.map(g=>g.taskCategory).filter(Boolean))],s=n>0?se[n-1]:null;return u.map(g=>{const p=o.filter(B=>B.taskCategory===g);let x=0,f=0,E=0,v=0,C=0,T=0;p.forEach(B=>{var k,F,j,b,S;const O=Qe(B),z=i[O]||{},w=typeof((k=B.monthly)==null?void 0:k[l])=="number"?B.monthly[l]:0,A=typeof((F=z.monthly)==null?void 0:F[l])=="number"?z.monthly[l]:0;if(f+=w,x+=A,s){const N=typeof((j=B.monthly)==null?void 0:j[s])=="number"?B.monthly[s]:0,I=typeof((b=z.monthly)==null?void 0:b[s])=="number"?z.monthly[s]:0;T+=N,C+=I}for(let N=0;N<=n;N++){const I=se[N];typeof((S=z.monthly)==null?void 0:S[I])=="number"&&(E+=z.monthly[I])}se.forEach(N=>{var I;typeof((I=B.monthly)==null?void 0:I[N])=="number"&&(v+=B.monthly[N])})});const P=f>0?Math.round(x/f*1e3)/10:0,$=T>0?Math.round(C/T*1e3)/10:0,D=v>0?Math.round(E/v*1e3)/10:0;return{category:g,taskCount:p.length,targetMonth:l,monthRate:P,prevMonthRate:$,prevMonth:s,progressRate:D,monthActual:x,monthGoal:f,cumActual:E,annualGoal:v}}).sort((g,p)=>Fe(g.category)-Fe(p.category))}const Qn=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function vo(t){const e=Qn.indexOf(t);return e>=0?e:999}function wo(t,e){var s,d;if(!((s=t==null?void 0:t.quantitativeGoals)!=null&&s.rows))return null;const o=t.quantitativeGoals.rows,i=zo((d=t.quantitativeResults)==null?void 0:d.rows);new Date().getMonth()+1;let l=e,n=se.indexOf(l);return n<0&&(l="3월",n=0),[...new Set(o.map(m=>m.stakeholder).filter(Boolean))].map(m=>{const h=o.filter(v=>v.stakeholder===m);let c=0,g=0,p=0,x=0;h.forEach(v=>{var D,B,O;const C=Qe(v),T=i[C]||{},P=typeof((D=v.monthly)==null?void 0:D[l])=="number"?v.monthly[l]:0,$=typeof((B=T.monthly)==null?void 0:B[l])=="number"?T.monthly[l]:0;g+=P,c+=$;for(let z=0;z<=n;z++){const w=se[z];typeof((O=T.monthly)==null?void 0:O[w])=="number"&&(p+=T.monthly[w])}se.forEach(z=>{var w;typeof((w=v.monthly)==null?void 0:w[z])=="number"&&(x+=v.monthly[z])})});const f=g>0?Math.round(c/g*1e3)/10:0,E=x>0?Math.round(p/x*1e3)/10:0;return{stakeholder:m,taskCount:h.length,targetMonth:l,monthRate:f,monthActual:c,monthGoal:g,progressRate:E,cumActual:p,annualGoal:x}}).sort((m,h)=>vo(m.stakeholder)-vo(h.stakeholder))}function tr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function Go(){const t=await Ve(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const Me={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},xe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},er={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},Uo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Ho=new Set(Object.values(Me)),Co=[...new Set(Object.values(Uo))].filter(t=>!Ho.has(t));Co.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Co,validCodes:[...Ho]});function Ke(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Pt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function or(t,e){return Array.isArray(t)?t.length===0?(Ke(e,"invalid input: empty rows",{len:0}),!1):!0:(Ke(e,"invalid input: not an array",{type:typeof t}),!1)}function Ne(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(l=>String(l??"").trim().toLowerCase());return e.every(l=>i.some(n=>l instanceof RegExp?l.test(n):n===String(l).toLowerCase()))})}const xt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},ko=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],So=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function nr(t,e,o,i,l={}){const n=await Go(),u=n.utils.book_new(),s=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(u,s,"meta");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);d["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(u,d,"total");const m=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(f=>[f.id,f.bu,f.kr,f.score,f.prev,f.vsComp,f.compName])]);m["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(u,m,"products");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(f=>[f.id,f.kr,...f.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(u,h,"weekly");const c=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(f=>[f.rank,f.source,f.category,f.score,f.delta,f.ratio??0])]);c["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(u,c,"citations");const g=(l==null?void 0:l.lg)||{},p=(l==null?void 0:l.samsung)||{},x=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...ko.map(f=>`LG_${f}`),...So.map(f=>`Samsung_${f}`)],[...ko.map(f=>g[f]??0),...So.map(f=>p[f]??0)]]);x["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(u,x,"dotcom"),n.writeFile(u,"GEO_Newsletter_템플릿.xlsx")}function Ht(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),l=parseFloat(i)||0;return o?+l.toFixed(2):Math.abs(l)<=1&&l!==0?+(l*100).toFixed(2):+l.toFixed(2)}function Be(t){return t==null||String(t).trim()===""?null:Ht(t)}function qt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Yt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const rr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function ir(t){const e=Yt(t);return rr[e]||e}function he(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,l=0;const n=e.match(/(\d{4})/);if(n)l=parseInt(n[1]);else{const s=e.match(/(\d{2})년/);if(s)l=2e3+parseInt(s[1]);else{const d=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);d&&(l=2e3+parseInt(d[1]))}}const u=e.match(/(\d{1,2})월/);if(u)i=parseInt(u[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)i=o[s[1].toLowerCase()];else{const d=e.match(/\d{4}[-\/](\d{1,2})/);d&&(i=parseInt(d[1]))}}return l?l*12+i:i}function ar(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const u=String(n[0]).trim(),s=n[1]??"";if(o.includes(u))e[u]=parseInt(s)||(u==="titleFontSize"?24:10);else if(i.includes(u)){const d=String(s).trim().toLowerCase();e[u]=d==="y"||d==="yes"||d==="true"||d==="1"}else e[u]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(u=>u.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},u=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);u&&(e.period=`${n[u[2]]||u[2]} ${u[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const u=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${u[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function sr(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let l=!1;if(t.forEach(F=>{if(!F[0]||String(F[0]).startsWith("[")||String(F[0]).startsWith("※")||F[0]==="key")return;const j=String(F[0]).trim();(o.includes(j)||e.includes(j))&&(l=!0,e.includes(j)?i[j]=parseInt(F[1])||0:i[j]=Ht(F[1]))}),l&&Object.keys(i).length>=2)return{total:i};const n=t.find(F=>F.some(j=>String(j||"").trim().toUpperCase()==="LG")),u=n?n.findIndex(F=>String(F||"").trim().toUpperCase()==="LG"):4,s=n?n.findIndex(F=>{const j=String(F||"").trim().toUpperCase();return j==="SAMSUNG"||j==="SAMSUMG"}):5,d=s>=0?s:u+1,m=n?n.findIndex(F=>/date/i.test(String(F||"").trim())):0,h=n?n.findIndex(F=>/countries|country/i.test(String(F||"").trim())):2,c=n?n.findIndex(F=>/divisions?/i.test(String(F||"").trim())):3,g=[];t.filter(F=>{const j=String(F[m>=0?m:0]||"").trim();return j&&!j.startsWith("[")&&!j.startsWith("※")&&!/^date$/i.test(j)&&!/^key$/i.test(j)}).forEach(F=>{const j=String(F[m>=0?m:0]||"").trim(),b=Yt(F[h>=0?h:2]),S=String(F[c>=0?c:3]||"").trim().toUpperCase(),N=Ht(F[u]),I=Ht(F[d]);j&&N>0&&g.push({date:j,country:b,division:S,lg:N,comp:I})});const x=g.filter(F=>(F.country==="TOTAL"||F.country==="TTL")&&(F.division==="TOTAL"||F.division==="TTL"||F.division===""));x.sort((F,j)=>he(F.date)-he(j.date));const f=x[x.length-1],E=x.length>=2?x[x.length-2]:null;if(!f){const F=t.find(N=>N.some(I=>String(I||"").trim().toUpperCase()==="TOTAL"));if(!F)return Pt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(N=>N==null?void 0:N.slice(0,6))});const j=Ht(F[u]),b=Ht(F[d]),S={total:{score:j,prev:j,vsComp:b,rank:j>=b?1:2,totalBrands:12}};return g.length&&(S.monthlyVis=g),S}const v=f.lg,C=f.comp,T=E?E.lg:v,P=f.date,$=E?E.date:null;function D(F){const j={};return g.filter(b=>b.date===F&&(b.country==="TOTAL"||b.country==="TTL")&&b.division&&b.division!=="TOTAL"&&b.division!=="TTL"&&b.division!=="").forEach(b=>{j[b.division]={lg:b.lg,comp:b.comp}}),j}const B=D(P),O=$?D($):{};function z(F){const j={};return g.filter(b=>b.date===F&&b.country&&b.country!=="TOTAL"&&b.country!=="TTL"&&(b.division==="TOTAL"||b.division==="TTL"||b.division==="")).forEach(b=>{j[b.country]={lg:b.lg,comp:b.comp}}),j}const w=z(P),A=$?z($):{},k={total:{score:v,prev:T,vsComp:C,rank:v>=C?1:2,totalBrands:12},...Object.keys(B).length?{buTotals:B}:{},...Object.keys(O).length?{buTotalsPrev:O}:{},...Object.keys(w).length?{countryTotals:w}:{},...Object.keys(A).length?{countryTotalsPrev:A}:{}};return P&&(k.derivedPeriod=P),g.length&&(k.monthlyVis=g),k}function lr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((l,n)=>n>=1&&String(l||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),Fo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),Fo(t,e)}function Fo(t,e){const o=t[e],i=o.findIndex((h,c)=>c>=3&&String(h||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const l=[];for(let h=4;h<o.length;h++){const c=String(o[h]||"").trim();c&&c.toUpperCase()!=="LG"&&l.push({name:c,col:h})}const n=t.slice(e+1).filter(h=>{const c=String(h[0]||"").trim();return c&&!c.startsWith("[")&&!c.startsWith("※")}),u={},s={};n.forEach(h=>{const c=String(h[0]||"").trim(),g=String(h[1]||"").trim(),p=String(h[2]||"").trim(),x=Yt(h[2])||p,f=String(h[3]||"").trim(),E=Ht(h[i]),v=l.map($=>({name:$.name,score:Ht(h[$.col])})).filter($=>$.score>0),C=[...v].sort(($,D)=>D.score-$.score)[0]||{name:"",score:0},T=+(E-C.score).toFixed(2),P={LG:E};if(v.forEach($=>{P[$.name]=$.score}),x==="TTL"||x==="TOTAL"){const $=xe[f]||f.toLowerCase(),D=er[f]||f;u[$]||(u[$]=[]),u[$].push({id:$,bu:c,kr:D,category:f,date:g,score:E,vsComp:C.score,compName:C.name,allScores:P})}else{const $=`${f}|${x}`;s[$]||(s[$]=[]),s[$].push({product:f,country:x,date:g,score:E,compName:C.name,compScore:C.score,gap:T,allScores:P})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(u).join(", ")||"없음"} / 국가별: ${Object.keys(s).length}건`);const d=[];for(const[h,c]of Object.entries(u)){c.sort((f,E)=>he(f.date)-he(E.date));const g=c[c.length-1],p=c.length>=2?c[c.length-2].score:null;console.log(`[parseProductCnty] ${h}: dates=[${c.map(f=>f.date).join(",")}] score=${g.score} prev=${p} vsComp=${g.vsComp}`);const x=c.map(f=>({date:f.date,score:f.score,comp:f.vsComp,allScores:f.allScores}));d.push({...g,prev:p,monthlyScores:x})}const m=[];for(const h of Object.values(s)){h.sort((x,f)=>he(x.date)-he(f.date));const c=h[h.length-1],g=h.length>=2?h[h.length-2].score:null,p=h.map(x=>({date:x.date,score:x.score,compScore:x.compScore,compName:x.compName,allScores:x.allScores}));m.push({...c,prev:g,monthlyScores:p})}return{...d.length?{productsPartial:d}:{},...m.length?{productsCnty:m}:{}}}function Wo(t,e=0,o){const i=o??t.length;for(let l=e;l<i;l++){const n=[];for(const u of t[l]||[]){const s=String(u||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Ue={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Eo(t,e){var f;const o=e?Ue[e]||{}:{...Ue.MS,...Ue.ES};if(!Object.keys(o).length)return Pt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(E=>E.some(v=>String(v||"").trim()in o));if(i<0)return Pt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const l=t[i],n=t.findIndex((E,v)=>v>i&&E.some(C=>String(C||"").trim()==="TTL")),u=n>0?n+1:Math.min(i+20,t.length);let s=-1,d=-1;for(let E=i+1;E<u;E++){const v=t[E];if(!v.some(P=>String(P||"").trim().toUpperCase()==="LG"))continue;if(d<0&&(d=E),v.some(P=>{const $=String(P||"").trim().toLowerCase().replace(/[\s_-]/g,"");return $==="nonbrand"||$==="nb"})){s=E;break}}const m=s>=0?s:d>=0?d:n;if(m<0)return Pt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const h=t[m],c=s>=0?"LG-NB":d>=0?"LG":"TTL",g={},p=Object.keys(o).map(E=>l.findIndex(v=>String(v||"").trim()===E)).filter(E=>E>=0).sort((E,v)=>E-v);for(const[E,v]of Object.entries(o)){const C=l.findIndex($=>String($||"").trim()===E);if(C<0)continue;const T=p.find($=>$>C)||C+20,P=[];for(let $=C+1;$<T&&$<h.length;$++){const D=Ht(h[$]);D>0&&P.push(D)}P.length&&(g[v]=P)}if(!Object.keys(g).length)return Pt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:m,dataRowLabel:c});const x=Wo(t,i,u)||((f=Object.values(g)[0])==null?void 0:f.map((E,v)=>`W${v+1}`))||[];return{weeklyMap:g,weeklyLabels:x}}function cr(t,e,o){for(const i of Object.values(t))for(const l of Object.values(i))for(const[n,u]of Object.entries(l))l[n]=u.slice(o);for(const[i,l]of Object.entries(e))e[i]=l.slice(o)}function dr(t){const{data:e,rows:o,headerIdx:i,brandIdx:l,catIdx:n,countryIdx:u,isNonBrand:s,isTotal:d,weeklyMap:m,weeklyAll:h}=t;let c=t.wCols,g=t.weeklyLabels;if(!c.length){const p=e.find(x=>String(x[l]||"").trim().toUpperCase()==="LG"&&s(x));if(p){const x=[];for(let f=l+1;f<p.length;f++)if(String(p[f]||"").trim())x.push(f);else if(x.length)break;c=x,g=Wo(o,0,i+1)||c.map((f,E)=>`W${E+1}`)}}return e.forEach(p=>{if(!s(p))return;const x=String(p[l]||"").trim();if(!x)return;const f=String(p[n>=0?n:0]||"").trim();if(!f)return;const E=xe[f]||f.toLowerCase(),v=u>=0?Yt(p[u]):"TOTAL",C=v==="TOTAL"||v==="TTL"||!v?"Total":v;h[E]||(h[E]={}),h[E][C]||(h[E][C]={}),h[E][C][x]=c.map(T=>Be(p[T]))}),e.forEach(p=>{if(String(p[l]||"").trim().toUpperCase()!=="LG"||!s(p)||!d(p))return;const f=String(p[n>=0?n:0]||"").trim();f&&(m[xe[f]||f.toLowerCase()]=c.map(E=>Be(p[E])))}),{wCols:c,weeklyLabels:g}}function pr(t){const{data:e,header:o,lgIdx:i,catIdx:l,isTotal:n,weeklyMap:u}=t,s=o.findIndex(h=>{const c=String(h||"").trim().toLowerCase();return c==="date"||c==="week"||c==="period"}),d={},m=[];return e.forEach(h=>{if(!n(h))return;const c=String(h[l>=0?l:3]||"").trim();if(c){if(s>=0){const g=String(h[s]||"").trim();g&&!m.includes(g)&&m.push(g)}d[c]=d[c]||[],d[c].push(Be(h[i]))}}),Object.entries(d).forEach(([h,c])=>{u[xe[h]||h.toLowerCase()]=c}),m.length?m:null}function ur(t){const{data:e,wCols:o,catIdx:i,isTotal:l,weeklyMap:n}=t;e.forEach(u=>{if(!l(u))return;const s=String(u[i>=0?i:0]||"").trim();s&&(n[xe[s]||s.toLowerCase()]=o.map(d=>Be(u[d])))})}function He(t,e){const o={};let i=[],l=-1;for(let B=0;B<Math.min(t.length,10);B++){const O=t[B];if(!O)continue;let z=0;for(let w=0;w<O.length;w++)/^w\d+$/i.test(String(O[w]||"").trim())&&z++;if(z>=2){l=B;break}}let n=t.findIndex(B=>{const O=B.slice(0,5).map(z=>String(z||"").trim().toLowerCase());return O.includes("category")||O.includes("product")});if(n<0&&l>=0&&(n=l),n<0&&(n=t.findIndex(B=>{let O=!1,z=0;for(let w=0;w<Math.min(B.length,10);w++){const A=String(B[w]||"").trim();A.toUpperCase()==="LG"?(O=!0,z++):A&&isNaN(parseFloat(A))&&z++}return O&&z>=3})),n<0)return Eo(t,e);const u=t[n],s=n+1;let d=null;if(t[s]){const B=t[s].slice(4,8).map(O=>String(O||"").trim()).filter(Boolean);B.length&&B.every(O=>/^\d{1,2}\/\d{1,2}/.test(O)||/~/.test(O)||/^\(/.test(O))&&(d=s)}const m=d!=null?d+1:s,h=t.slice(m).filter(B=>B[0]!=null&&String(B[0]).trim()),c=u.findIndex(B=>{const O=String(B||"").trim().toLowerCase();return O==="category"||O==="product"}),g=u.findIndex(B=>{const O=String(B||"").trim().toLowerCase();return O==="country"||O==="county"}),p=u.findIndex(B=>String(B||"").trim().toLowerCase()==="brand"),x=u.findIndex(B=>String(B||"").trim().toUpperCase()==="LG");let f=[];const E=l>=0?t[l]:u;for(let B=0;B<E.length;B++)/^w\d+$/i.test(String(E[B]||"").trim())&&f.push(B);if(!f.length)for(let B=0;B<u.length;B++){const O=String(u[B]||"").split(/\n/)[0].trim();/^w\d+/i.test(O)&&f.push(B)}i=f.map(B=>String(E[B]||"").trim().toUpperCase());let v=f.map((B,O)=>{const z=i[O]||`W${B}`;let w="";const A=d!=null?t[d]:l!==n&&l>=0?t[l+1]:null;if(A){const k=String(A[B]||"").trim();k&&/\d/.test(k)&&(w=k.startsWith("(")?k:`(${k})`)}return w?`${z}${w}`:z});console.log(`[parseWeekly:${e}] wLabelRow:${l} headerIdx:${n} dateRangeRow:${d} wCols:${f.length} labels:`,i.slice(0,5),"full:",v.slice(-2));function C(B){if(g<0)return!0;const O=String(B[g]||"").replace(/[()]/g,"").trim().toUpperCase();return O==="TOTAL"||O==="TTL"||O===""}const T=u.findIndex(B=>{const O=String(B||"").trim().toLowerCase().replace(/[\s_-]/g,"");return O==="b/nb"||O==="bnb"||O==="brand/nonbrand"});function P(B){if(T<0)return!0;const O=String(B[T]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return O==="nonbrand"||O==="nb"}const $={},D={data:h,rows:t,header:u,headerIdx:n,brandIdx:p,lgIdx:x,catIdx:c,countryIdx:g,wCols:f,weeklyLabels:i,weeklyMap:o,weeklyAll:$,isNonBrand:P,isTotal:C};if(p>=0){const B=dr(D);f=B.wCols,i=B.weeklyLabels}else if(x>=0){const B=pr(D);B&&(i=B)}else f.length&&ur(D);if(i.length>0){let B=i.length;for(const A of Object.values($))for(const k of Object.values(A))for(const F of Object.values(k)){const j=F.findIndex(b=>b!=null);j>=0&&j<B&&(B=j)}for(const A of Object.values(o)){const k=A.findIndex(F=>F!=null);k>=0&&k<B&&(B=k)}const O=12,w=i.length-B>O?i.length-O:B;w>0&&w<i.length&&(i=i.slice(w),v=v.slice(w),cr($,o,w))}if(Object.keys(o).length){const B={weeklyMap:o};return i.length&&(B.weeklyLabels=i),v.length&&(B.weeklyLabelsFull=v),Object.keys($).length&&(B.weeklyAll=$),B}return Eo(t,e)}function fr(t){const e=t.findIndex(T=>T.some(D=>{const B=String(D||"").trim().toLowerCase();return B.includes("page type")||B==="country"})?!T.some(D=>/^\[.*\]$/.test(String(D||"").trim())):!1);if(e<0)return Pt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const o=t[e],i=[];for(let T=2;T<o.length;T++){const P=String(o[T]||"").trim();if(/\bLG\b/i.test(P)){const $=T+1;$<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[$]||""))&&i.push({lg:T,ss:$})}}i.length||i.push({lg:2,ss:3});const l=t.slice(e+1).filter(T=>T[0]!=null&&String(T[0]).trim());let n=i[0];for(let T=i.length-1;T>=0;T--)if(l.some(P=>qt(P[i[T].lg])>0)){n=i[T];break}if(!l.some(T=>qt(T[n.lg])>0)){for(let T=Math.min(n.lg,o.length)-1;T>=2;T--)if(l.some(P=>qt(P[T])>0)){n={lg:T-1,ss:T};break}}const u={},s={},d={},m={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},h=new Set,c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=i.map(T=>{const P=String(o[T.lg]||"").trim(),$=P.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return $?$[1].charAt(0).toUpperCase()+$[1].slice(1).toLowerCase():P.replace(/\s*LG\s*/i,"").trim()}),p={};l.forEach(T=>{const P=Yt(T[0]),$=String(T[1]||"").replace(/[()]/g,"").trim();let D=/page total|^ttl$/i.test($)?"TTL":$;D.toLowerCase()==="microsite"&&(D="Microsites");const B=m[P]||P.toUpperCase();h.add(B);const O=qt(T[n.lg]),z=qt(T[n.ss]);B==="TTL"?(u[D]=(u[D]||0)+O,s[D]=(s[D]||0)+z):(d[B]||(d[B]={lg:{},samsung:{}}),d[B].lg[D]=(d[B].lg[D]||0)+O,d[B].samsung[D]=(d[B].samsung[D]||0)+z),B==="TTL"&&(p[D]||(p[D]={}),i.forEach((w,A)=>{var j,b;const k=qt(T[w.lg]),F=qt(T[w.ss]);if(k>0||F>0){const S=g[A]||`M${A+1}`;p[D][S]={lg:(((j=p[D][S])==null?void 0:j.lg)||0)+k,samsung:(((b=p[D][S])==null?void 0:b.samsung)||0)+F}}}))});const x=new Set;Object.values(p).forEach(T=>Object.keys(T).forEach(P=>x.add(P)));const f=c.filter(T=>x.has(T)),E={},v={};i.forEach((T,P)=>{const $=g[P];if(!$)return;const D={},B={};l.forEach(O=>{const z=Yt(O[0]),w=String(O[1]||"").replace(/[()]/g,"").trim();let A=/page total|^ttl$/i.test(w)?"TTL":w;A.toLowerCase()==="microsite"&&(A="Microsites");const k=m[z]||z.toUpperCase(),F=qt(O[T.lg]),j=qt(O[T.ss]);F<=0&&j<=0||(k==="TTL"?(F>0&&(D[A]=(D[A]||0)+F),j>0&&(B[A]=(B[A]||0)+j)):(v[$]||(v[$]={}),v[$][k]||(v[$][k]={lg:{},samsung:{}}),F>0&&(v[$][k].lg[A]=(v[$][k].lg[A]||0)+F),j>0&&(v[$][k].samsung[A]=(v[$][k].samsung[A]||0)+j)))}),Object.keys(D).length&&(E[$]={lg:D,samsung:B})}),Object.keys(v).forEach(T=>{Object.keys(v[T]).forEach(P=>{const $=v[T][P];Object.values($.lg).some(B=>B>0)||Object.values($.samsung).some(B=>B>0)||delete v[T][P]}),Object.keys(v[T]).length||delete v[T]});const C={};return(u.TTL||Object.keys(u).length)&&(C.dotcom={lg:u,samsung:s,byMonth:E,byCntyByMonth:v}),Object.keys(d).length&&(C.dotcomByCnty=d),Object.keys(p).length&&f.length&&(C.dotcomTrend=p,C.dotcomTrendMonths=f),C}function hr(t){const e=t.findIndex(b=>b.some(I=>{const _=String(I||"").trim().toLowerCase();return _==="channel"||_==="country"})?!b.some(I=>/^\[.*\]$/.test(String(I||"").trim())):!1);e<0&&Pt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(b=>b==null?void 0:b.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let l=-1,n=-1,u=-1;for(let b=0;b<o.length;b++){const S=String(o[b]||"").trim().toLowerCase();S==="country"&&l<0&&(l=b),S==="channel"&&n<0&&(n=b),S==="prd"&&u<0&&(u=b)}const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function d(b){const S=String(b||"").trim().toLowerCase();if(!S)return null;const N=S.match(/^(\d{1,2})월/);if(N){const _=parseInt(N[1]);if(_>=1&&_<=12)return s[_-1]}const I=S.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return I?I[1].charAt(0).toUpperCase()+I[1].slice(1).toLowerCase():null}const m=[],h=new Set;for(let b=0;b<o.length;b++){const S=d(o[b]);S&&!h.has(b)&&(m.push({col:b,label:S}),h.add(b))}if(e>0){const b=t[e-1];if(b)for(let S=0;S<b.length;S++){const N=d(b[S]);N&&!h.has(S)&&(m.push({col:S,label:N}),h.add(S))}}let c=2;if(m.length>0)c=Math.min(...m.map(b=>b.col));else if(l>=0&&n>=0)c=Math.max(l,n,u)+1;else{const b=t[i];b&&!String(b[0]||"").trim()?(l=1,n=2,c=3):(l=0,n=1,c=2)}if(l<0||n<0){const b=t[i],S=b&&!String(b[0]||"").trim()?1:0;l<0&&(l=S),n<0&&(n=S+1)}if(m.length>0){m.sort((I,_)=>I.col-_.col);const b=m[0],S=s.indexOf(b.label),N=new Set([l,n,u].filter(I=>I>=0));if(S>0&&b.col>c){let I=S-1;for(let _=b.col-1;_>=c&&I>=0;_--){if(h.has(_)||N.has(_))continue;const Y=String(o[_]||"").trim(),et=e>0?String((t[e-1]||[])[_]||"").trim():"";Y||et||(m.push({col:_,label:s[I]}),h.add(_),I--)}}}m.sort((b,S)=>s.indexOf(b.label)-s.indexOf(S.label));const g=t.slice(i).filter(b=>b.some(S=>S!=null&&String(S).trim())),p=[],x={},f={},E={},v={},C=new Set,T={};g.forEach(b=>{const S=Yt(b[l]),N=String(b[n]||"").replace(/[()]/g,"").trim(),I=u>=0?String(b[u]||"").trim():"";if(!S||!N||N.toLowerCase()==="total")return;C.add(S);const _={};if(m.forEach(({col:ft,label:dt})=>{const ct=qt(b[ft]);ct>0&&(_[dt]=ct)}),Object.keys(_).length===0)return;const Y=I.toUpperCase(),et=!I||Y==="TTL"||Y==="TOTAL",lt=S==="TTL"||S==="TOTAL"?"TTL":S;T[lt]||(T[lt]={}),T[lt][N]||(T[lt][N]={ttl:null,prds:[]}),et?T[lt][N].ttl=_:T[lt][N].prds.push({prd:I,monthScores:_})});const P=b=>{for(let S=m.length-1;S>=0;S--){const N=b[m[S].label];if(N>0)return N}return 0},$=b=>b.ttl?{...b.ttl}:{},D={};Object.entries(T).forEach(([b,S])=>{b!=="TTL"&&Object.entries(S).forEach(([N,I])=>{const _=$(I);Object.keys(_).length!==0&&(D[b]||(D[b]={}),D[b][N]=_)})});const B=T.TTL||{};Object.entries(B).forEach(([b,S])=>{const N=$(S),I=P(N);I>0&&(p.push({source:b,category:"",score:I,delta:0,ratio:0,monthScores:N}),x[b]=N),S.prds.forEach(({prd:_,monthScores:Y})=>{const et=P(Y);et>0&&(E[_]||(E[_]=[]),E[_].push({source:b,category:"",score:et,delta:0,ratio:0,monthScores:Y}))})}),Object.entries(T).forEach(([b,S])=>{b!=="TTL"&&Object.entries(S).forEach(([N,I])=>{const _=$(I),Y=P(_);Y>0&&(f[b]||(f[b]=[]),f[b].push({source:N,category:"",score:Y,delta:0,ratio:0,monthScores:_,prd:""})),I.prds.forEach(({prd:et,monthScores:lt})=>{const ft=P(lt);if(ft<=0)return;f[b]||(f[b]=[]),f[b].push({source:N,category:"",score:ft,delta:0,ratio:0,monthScores:lt,prd:et}),v[et]||(v[et]={}),v[et][N]||(v[et][N]={source:N,category:"",score:0,delta:0,ratio:0,monthScores:{}});const dt=v[et][N];dt.score+=ft,Object.entries(lt).forEach(([ct,vt])=>{dt.monthScores[ct]=(dt.monthScores[ct]||0)+vt})})})});const O={};new Set([...Object.keys(E),...Object.keys(v)]).forEach(b=>{let S=E[b];(!S||!S.length)&&(S=Object.values(v[b]||{})),S&&S.length&&(O[b]=S)});const w=p.reduce((b,S)=>b+S.score,0);p.sort((b,S)=>S.score-b.score),p.forEach((b,S)=>{b.rank=S+1,b.ratio=w>0?+(b.score/w*100).toFixed(1):0});for(const[b,S]of Object.entries(f)){const N=S.reduce((I,_)=>I+_.score,0);S.sort((I,_)=>_.score-I.score),S.forEach((I,_)=>{I.rank=_+1,I.ratio=N>0?+(I.score/N*100).toFixed(1):0})}for(const[b,S]of Object.entries(O)){const N=S.reduce((I,_)=>I+_.score,0);S.sort((I,_)=>_.score-I.score),S.forEach((I,_)=>{I.rank=_+1,I.ratio=N>0?+(I.score/N*100).toFixed(1):0})}const A=m.map(b=>b.label).filter(b=>Object.values(x).some(S=>S[b]>0)),k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let F=null;if(A.length>0){const b={};Object.values(x).forEach(I=>{Object.entries(I).forEach(([_,Y])=>{Y>0&&(b[_]=(b[_]||0)+1)})});let S=A[A.length-1];if(A.length>=2){const I=b[S]||0,_=A[A.length-2],Y=b[_]||0;Y>0&&I<Y*.5&&(S=_)}const N=k.findIndex(I=>S.toLowerCase().startsWith(I.toLowerCase()));N>=0&&(F=`${k[N]} ${new Date().getFullYear()}`)}const j={};return p.length>0&&(j.citations=p),Object.keys(f).length>0&&(j.citationsByCnty=f),Object.keys(O).length>0&&(j.citationsByPrd=O),Object.keys(x).length>0&&(j.citTouchPointsTrend=x,j.citTrendMonths=A),Object.keys(D).length>0&&(j.citTouchPointsTrendByCnty=D),F&&(j.citDerivedPeriod=F),j}function gr(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let l=null,n=0,u=-1,s=-1,d=-1,m=-1,h=-1,c=4;for(let w=0;w<Math.min(t.length,10);w++){const A=t[w];if(!A)continue;const k=A.some(S=>/^no$/i.test(String(S||"").trim())),F=A.some(S=>/^region$/i.test(String(S||"").trim())),j=A.some(S=>/domain|domian/i.test(String(S||"").trim())),b=A.some(S=>/^prd$/i.test(String(S||"").trim()));if(k||F||j||b){l=A,n=w+1;for(let S=0;S<A.length;S++){const N=String(A[S]||"").trim().toLowerCase();N==="prd"&&h<0&&(h=S),N==="no"&&u<0&&(u=S),N==="region"&&s<0&&(s=S),(N==="domain"||N==="domian")&&d<0&&(d=S),N==="type"&&m<0&&(m=S)}break}(String(A[0]||"").trim().startsWith("[")||!String(A[0]||"").trim())&&(n=w+1)}l||Pt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const g=u>=0||s>=0||h>=0;if(g)s<0&&(s=u>=0?u+1:h>=0?h+2:1),d<0&&(d=s+1),m<0&&(m=d+1),c=Math.max(d,m)+1;else if(d>=0)m=d+1,c=d+2;else{for(let w=n;w<Math.min(t.length,n+5);w++){const A=t[w];if(A){for(let k=0;k<Math.min(A.length,6);k++){const F=String(A[k]||"").trim();if(F.includes(".")&&F.length>3&&!i.test(F)){d=k,m=k+1,c=k+2;break}}if(d>=0)break}}d<0&&(d=0,m=1,c=2)}const p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=w=>{const A=String(w||"").trim().toLowerCase();if(!A)return null;const k=A.match(/^(\d{1,2})월/);if(k){const j=parseInt(k[1]);if(j>=1&&j<=12)return p[j-1]}const F=A.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return F?F[1].charAt(0).toUpperCase()+F[1].slice(1).toLowerCase():null},f=[];if(l)for(let w=c;w<l.length;w++){const A=x(l[w]);A&&f.push({col:w,label:A})}const E=w=>/^(type|domain[_ ]type)$/i.test(String(w||"").trim()),v=w=>/^(domain|domian)$/i.test(String(w||"").trim()),C=w=>/^region$/i.test(String(w||"").trim()),T=[];l&&f.forEach(({col:w,label:A})=>{const k=w-1,F=w-2,j=w-3;j<0||E(l[k])&&v(l[F])&&C(l[j])&&T.push({regionCol:j,domainCol:F,typeCol:k,monthCol:w,label:A})});const P=[],$={},D={};let B="TTL";const O=w=>{let A=String(w||"").trim();if(!A)return"";const k=A.match(/^\[([^\]]+)\]/);k&&(A=k[1].trim()),A=A.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const F=A.indexOf("/");return F>=0&&(A=A.slice(0,F)),A};if(T.length>=2){const w={};for(let k=n;k<t.length;k++){const F=t[k];if(!F)continue;const j=h>=0?String(F[h]||"").trim():"";T.forEach(b=>{const S=O(F[b.domainCol]);if(!S||!S.includes("."))return;const N=String(F[b.monthCol]||"").replace(/,/g,"").trim(),I=parseFloat(N);if(isNaN(I)||I<=0)return;const _=String(F[b.regionCol]||"").trim().toUpperCase(),Y=e[_]||_||"TTL",et=String(F[b.typeCol]||"").trim(),lt=`${Y}|${S}|${et}|${j}`;w[lt]||(w[lt]={cnty:Y,domain:S,type:et,prd:j,monthScores:{}}),w[lt].monthScores[b.label]=(w[lt].monthScores[b.label]||0)+I})}Object.values(w).forEach(k=>{let F=0;for(let N=f.length-1;N>=0;N--){const I=k.monthScores[f[N].label];if(I>0){F=I;break}}if(F<=0)return;D[k.cnty]=(D[k.cnty]||0)+1,P.push({cnty:k.cnty,rank:D[k.cnty],domain:k.domain,type:k.type,citations:F,monthScores:k.monthScores,prd:k.prd});const j=`${k.cnty}|${k.domain}`,b=!k.prd||/^(ttl|total)$/i.test(k.prd);$[j]||($[j]={cnty:k.cnty,domain:k.domain,type:k.type,months:{},_hasTtl:!1});const S=$[j];b?(S.type=k.type||S.type,S._hasTtl=!0,Object.entries(k.monthScores).forEach(([N,I])=>{I>0&&(S.months[N]=I)})):S._hasTtl||Object.entries(k.monthScores).forEach(([N,I])=>{I>0&&!S.months[N]&&(S.months[N]=I)})}),Object.values($).forEach(k=>{delete k._hasTtl});const A={};P.forEach(k=>{A[k.cnty]||(A[k.cnty]=[]),A[k.cnty].push(k)}),Object.values(A).forEach(k=>{k.sort((F,j)=>j.citations-F.citations),k.forEach((F,j)=>{F.rank=j+1})})}else for(let w=n;w<t.length;w++){const A=t[w];if(!A)continue;const k=String(A[d]||"").trim(),F=String(A[m]||"").trim(),j=h>=0?String(A[h]||"").trim():"";if(!g&&(!k||!k.includes("."))){const I=String(A[d]||"").trim().toUpperCase(),_=e[I]||(o.includes(I)?I:null);_&&(!F||F==="")&&(B=_);continue}if(!k||!k.includes("."))continue;let b="TTL";if(g&&s>=0){const I=String(A[s]||"").trim().toUpperCase();b=e[I]||I}else g||(b=B);let S=0;if(f.length>0)for(let I=f.length-1;I>=0;I--){const _=String(A[f[I].col]||"").replace(/,/g,"").trim(),Y=parseFloat(_);if(!isNaN(Y)&&Y>0){S=Y;break}}else for(let I=A.length-1;I>=c;I--){const _=String(A[I]||"").replace(/,/g,"").trim();if(!_)continue;const Y=parseFloat(_);if(!isNaN(Y)&&Y>0){S=Y;break}}if(f.length>0){const I={};if(f.forEach(({col:_,label:Y})=>{const et=String(A[_]||"").replace(/,/g,"").trim(),lt=parseFloat(et);!isNaN(lt)&&lt>0&&(I[Y]=lt)}),Object.keys(I).length>0){const _=`${b}|${k}`;$[_]={cnty:b,domain:k,type:F,months:I}}}const N={};f.length>0&&f.forEach(({col:I,label:_})=>{const Y=String(A[I]||"").replace(/,/g,"").trim(),et=parseFloat(Y);!isNaN(et)&&et>0&&(N[_]=et)}),S>0&&(D[b]=(D[b]||0)+1,P.push({cnty:b,rank:D[b],domain:k,type:F,citations:S,monthScores:N,prd:j}))}const z={};if(P.length>0&&(z.citationsCnty=P),Object.keys($).length>0){z.citDomainTrend=$;const w=f.map(A=>A.label).filter(A=>Object.values($).some(k=>k.months[A]>0));z.citDomainMonths=w}return z}function Ao(t,e){const o=Ne(t,[/^type$/,/^(county|country)$/]);if(o<0)return Pt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const i=t[o];let l=-1,n=-1,u=-1,s=-1,d=4;for(let C=0;C<i.length;C++){const T=String(i[C]||"").trim().toLowerCase();T==="type"&&l<0&&(l=C),(T==="county"||T==="country")&&n<0&&(n=C),(T==="topic"||T==="topoc")&&u<0&&(u=C),T==="brand"&&s<0&&(s=C)}d=Math.max(l,n,u,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,c=[],g=[o];for(let C=0;C<=o;C++)C!==o&&g.push(C);for(const C of g){if(c.length>0)break;const T=t[C];if(T)for(let P=d;P<T.length;P++){const $=String(T[P]||"").split(/\n/)[0].trim();$&&(m.test($)||h.test($))&&c.push({col:P,label:$})}}const p=t.slice(o+1),x=[];p.forEach(C=>{if(!C)return;const T=String(C[l]||"").trim(),P=Yt(C[n]),$=String(C[u]||"").trim(),D=String(C[s]||"").trim();if(!$||!D)return;const B={};let O=0;c.forEach(({col:z,label:w})=>{const A=Ht(C[z]);A>0&&(B[w]=A,O=A)}),(Object.keys(B).length>0||$)&&x.push({type:T,country:P,topic:$,brand:D,scores:B,latestScore:O})});const f=e==="weekly"?"weeklyPR":"monthlyPR",E=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",v={};return x.length>0&&(v[f]=x),c.length>0&&(v[E]=c.map(C=>C.label)),v}function To(t,e){const o=t.findIndex(v=>v?v.some(C=>/steakholders|stakeholders/i.test(String(C||"").trim()))||v.some(C=>/^type$/i.test(String(C||"").trim()))&&v.some(C=>/topoc|topic/i.test(String(C||"").trim())):!1);if(o<0)return Pt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const i=t[o];let l=-1,n=-1,u=-1,s=-1,d=4;for(let v=0;v<i.length;v++){const C=String(i[v]||"").trim().toLowerCase();(C==="steakholders"||C==="stakeholders")&&l<0&&(l=v),C==="type"&&n<0&&(n=v),(C==="country"||C==="county")&&u<0&&(u=v),(C==="topoc"||C==="topic")&&s<0&&(s=v)}d=Math.max(l,n,u,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,c=[];for(let v=d;v<i.length;v++){const C=String(i[v]||"").split(/\n/)[0].trim();C&&(m.test(C)||h.test(C))&&c.push({col:v,label:C})}const g=t.slice(o+1),p=[];g.forEach(v=>{if(!v)return;const C=String(v[l]||"").trim(),T=String(v[n]||"").trim(),P=Yt(v[u]),$=String(v[s]||"").trim();if(!$||!C)return;const D={};let B=0;c.forEach(({col:O,label:z})=>{const w=Ht(v[O]);w>0&&(D[z]=w,B=w)}),p.push({stakeholder:C,type:T,country:P,topic:$,scores:D,latestScore:B})});const x=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",f=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",E={};return p.length>0&&(E[x]=p),c.length>0&&(E[f]=c.map(v=>v.label)),E}function yr(t){const e=Ne(t,[/^prompts?$/,/^country$/]);if(e<0)return Pt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],i={},l=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const d=String(o[s]||"").trim().toLowerCase();l.includes(d)&&!i[d]&&(i[d]=s)}const n=t.slice(e+1),u=[];return n.forEach(s=>{if(!s)return;const d=String(s[i.prompts]||"").trim();d&&u.push({country:Yt(s[i.country]),prompt:d,division:String(s[i.division]||"").trim(),category:String(s[i.category]||"").trim(),launched:String(s[i.launched]||"").trim(),branded:String(s[i.branded]||"").trim(),cej:String(s[i.cej]||"").trim(),topic:String(s[i.topic]||"").trim()})}),u.length>0?{appendixPrompts:u}:{}}const oe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function mr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(oe).length}건`),{unlaunchedMap:{...oe}};const e=Ne(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((c,g)=>console.log(`  row${g}:`,c==null?void 0:c.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(oe).length}건`),{unlaunchedMap:{...oe}};const o=t[e];let i=-1,l=-1,n=-1;for(let c=0;c<o.length;c++){const g=String(o[c]||"").trim().toLowerCase();i<0&&(g==="country"||g==="county")&&(i=c),l<0&&(g==="category"||g==="product"||g==="제품"||g==="카테고리")&&(l=c),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(g)&&(n=c)}if(i<0||l<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:l,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(oe).length}건`),{unlaunchedMap:{...oe}};const u=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...oe};let d=0,m=0,h=0;return t.slice(e+1).forEach((c,g)=>{const p=e+1+g;try{if(!c){h++;return}const x=String(c[n]||"").trim();if(!x){h++;return}d++;const f=x.toLowerCase().replace(/\s+/g," ");if(!u.has(f)&&!u.has(f.replace(/\s/g,"")))return;const E=ir(c[i]),v=String(c[l]||"").trim();if(!E||!v){console.warn("[parseUnlaunched] row skipped",{rowIdx:p,raw:{country:c[i],category:c[l],status:c[n]},parsed:{country:E,rawCategory:v}}),h++;return}const C=v.toUpperCase(),T=Uo[C]||C;s[`${E}|${T}`]=!0,T!==C&&(s[`${E}|${C}`]=!0),m++}catch(x){let f;try{f={country:c==null?void 0:c[i],category:c==null?void 0:c[l],status:c==null?void 0:c[n]}}catch{f=c}console.warn("[parseUnlaunched] row error",{rowIdx:p,raw:f,error:x==null?void 0:x.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${m}건 + 디폴트 ${Object.keys(oe).length}건 + skip ${h}건 / 총행 ${d} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function br(t){const e=Ne(t,[/^bu$/,/topic/]);if(e<0)return Pt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let i=-1,l=-1,n=-1,u=-1,s=-1;for(let h=0;h<o.length;h++){const c=String(o[h]||"").trim().toLowerCase();i<0&&c==="bu"&&(i=h),l<0&&c.includes("topic")&&c.includes("대시보드")&&(l=h),n<0&&(c==="explanation"||c==="설명")&&(n=h),u<0&&c.includes("기존")&&(u=h),s<0&&c.includes("topic")&&c.includes("row")&&(s=h)}l<0&&(l=1),n<0&&(n=2);const d=[];let m="";return t.slice(e+1).forEach(h=>{if(!h)return;const c=String(h[i]||"").trim();c&&(m=c);const g=String(h[l]||"").trim();if(!g)return;const p=String(h[n]||"").trim(),x=u>=0?String(h[u]||"").trim():"",f=s>=0?String(h[s]||"").trim():"";d.push({bu:m,topic:g,explanation:p,oldTopic:x,topicRow:f})}),d.length>0?{prTopicList:d}:{}}function xr(t,e){var o;if(!or(e,`parseSheetRows:${t}`))return{};try{if(t===xt.meta)return ar(e);if(t===xt.visSummary)return sr(e);if(t===xt.productMS||t===xt.productHS||t===xt.productES)return lr(e);if(t===xt.weeklyMS)return He(e,"MS");if(t===xt.weeklyHS)return He(e,"HS");if(t===xt.weeklyES)return He(e,"ES");if(t===xt.monthlyPR)return Ao(e,"monthly");if(t===xt.weeklyPR)return Ao(e,"weekly");if(t===xt.monthlyBrandPrompt)return To(e,"monthly");if(t===xt.weeklyBrandPrompt)return To(e,"weekly");if(t===xt.citPageType)return fr(e);if(t===xt.citTouchPoints)return hr(e);if(t===xt.citDomain)return gr(e);if(t===xt.appendix)return yr(e);if(t===xt.unlaunched)return mr(e);if(t===xt.prTopicList)return br(e)}catch(i){return Ke(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Pt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(xt)})}function vr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function wr(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,l=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!l.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${l.status}).`);const n=await l.text(),u=await Go(),s=u.read(n,{type:"string"}),d=s.Sheets[s.SheetNames[0]];return u.utils.sheet_to_json(d,{header:1,defval:""})}async function Cr(t,e){var n,u;const o=Object.values(xt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const l=await Promise.allSettled(o.map(s=>wr(t,s).then(d=>({name:s,rows:d}))));for(let s=0;s<o.length;s++){const d=o[s],m=l[s];if(e==null||e(`"${d}" 처리 중... (${s+1}/${o.length})`),m.status==="rejected"){console.warn(`"${d}" 시트 건너뜀:`,(n=m.reason)==null?void 0:n.message);continue}try{const{rows:h}=m.value,c=xr(d,h);for(const[g,p]of Object.entries(c))g==="weeklyLabels"||g==="weeklyLabelsFull"?i[g]||(i[g]=p):Array.isArray(p)&&Array.isArray(i[g])?i[g]=[...i[g],...p]:p&&typeof p=="object"&&!Array.isArray(p)&&i[g]&&typeof i[g]=="object"&&!Array.isArray(i[g])?i[g]={...i[g],...p}:i[g]=p}catch(h){console.warn(`"${d}" 시트 처리 실패:`,h.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},d={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},m=[];for(const[h,c]of Object.entries(i.weeklyAll)){const g=c.Total||c.TTL||{},p=g.LG||g.lg||[],x=Object.entries(g).filter(([T])=>T!=="LG"&&T!=="lg"),f=p.length?p[p.length-1]:0,E=p.length>=5?p[0]:0;let v="",C=0;for(const[T,P]of x){const $=P.length?P[P.length-1]:0;$>C&&(C=$,v=T)}f>0&&m.push({id:h,bu:d[h]||"HS",kr:s[h]||h,category:h,date:((u=i.meta)==null?void 0:u.period)||"",score:f,prev:E,vsComp:C,compName:v,allScores:{LG:f,...v?{[v]:C}:{}}})}if(m.length&&(i.productsPartial=m,console.log(`[SYNC] weeklyAll에서 ${m.length}개 제품 생성:`,m.map(h=>`${h.id}=${h.score}`).join(", "))),!i.productsCnty){const h=[];for(const[c,g]of Object.entries(i.weeklyAll)){const p=s[c]||c;for(const[x,f]of Object.entries(g)){if(x==="Total"||x==="TTL")continue;const E=f.LG||f.lg||[],v=E.length?E[E.length-1]:0;if(v<=0)continue;const C=E.length>=2?E[0]:0;let T="",P=0;const $={LG:v};for(const[B,O]of Object.entries(f)){if(B==="LG"||B==="lg")continue;const z=O.length?O[O.length-1]:0;$[B]=z,z>P&&(P=z,T=B)}const D=+(v-P).toFixed(1);h.push({product:p,country:x,score:v,prev:C,compName:T,compScore:P,gap:D,allScores:$})}}h.length&&(i.productsCnty=h,console.log(`[SYNC] weeklyAll에서 productsCnty ${h.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((d,m)=>d===`W${m+1}`)){const d=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(m=>String(m).split(/\n/)[0].trim().toUpperCase()).filter(m=>/^W\d+/.test(m));if(d.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",d),i.weeklyLabels=d;const m=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(h=>{const c=String(h).split(/\n/);return c[0].trim().toUpperCase()+(c[1]?c[1].trim():"")}).filter(h=>/^W\d+/.test(h));m.length&&(i.weeklyLabelsFull=m)}}return i}const ut={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none",boxSizing:"border-box"};function kr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),l=Math.floor(i/24);return l>=1?`${l}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Sr({savedAt:t,ageMs:e,stale:o,style:i}){const l=t==null,n=l?"#1E293B":o?"#7F1D1D":"#064E3B",u=l?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=l?"#334155":o?"#B91C1C":"#047857",d=l?"○":o?"⚠️":"●",m=l?"동기화 정보 없음":`데이터 최신화: ${kr(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:u,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:R,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:d}),m]})}function Fr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Gt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Wt="#CF0652",ne="#94A3B8",Le={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Vo={LG:Wt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},$o=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],qe={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Er=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Re={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Ar={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Tr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},to=90;function eo(t,e){const o=Le[e]||Le.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function $r(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Br(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Je(t){const e=String(t||"").trim().toUpperCase();return Re[e]||t}function Lr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Ar[o]||Re[o]||t:Tr[o]||Re[o]||t}let Rr=0;function Bo(t,e,o,i,l,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const u=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,s=n.baselineLabel||"",d=n.labelOffsetY||0,m=n.lineOffsetY||0,h=Rr++,c={t:18,r:10,b:20,l:10},g=o-c.l-c.r,p=i-c.t-c.b,x=t.filter(w=>w!=null);if(!x.length){let w=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const A=t.length,k=A>1?A-1:1;return w+=t.map((F,j)=>`<text x="${(c.l+j/k*g).toFixed(1)}" y="${c.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Gt}">${e[j]||""}</text>`).join(""),w+="</svg>",w}const f=Math.min(...x)-1,E=Math.max(...x)+1,v=E-f||1,C=t.length,T=C>1?C-1:1,P=t.map((w,A)=>c.l+A/T*g),$=[];t.forEach((w,A)=>{w!=null&&$.push({x:P[A],y:c.t+(1-(w-f)/v)*p,v:w,idx:A})});let D=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const B=u>0?$.filter(w=>w.idx<u):[],O=u>0?$.filter(w=>w.idx>=u):$,z="#64748B";if(O.length>=2){const w=O.map((k,F)=>`${F?"L":"M"}${k.x.toFixed(1)},${k.y.toFixed(1)}`).join(" "),A=w+` L${O[O.length-1].x.toFixed(1)},${c.t+p} L${O[0].x.toFixed(1)},${c.t+p} Z`;D+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${l}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${l}" stop-opacity="0.03"/>
    </linearGradient></defs>`,D+=`<path d="${A}" fill="url(#lg${h})"/>`,D+=`<path d="${w}" stroke="${l}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(B.length>=2){const w=B.map((A,k)=>`${k?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" ");D+=`<path d="${w}" stroke="${z}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(D+=$.map(w=>{const A=u>0&&w.idx<u;return u>0&&w.idx===u?`<circle cx="${w.x.toFixed(1)}" cy="${w.y.toFixed(1)}" r="4" fill="#000" stroke="${l}" stroke-width="3"/>`:`<circle cx="${w.x.toFixed(1)}" cy="${w.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${A?z:l}" stroke-width="2" opacity="${A?.85:1}"/>`}).join(""),D+=$.map(w=>{const k=u>0&&w.idx<u?z:l;return`<text x="${w.x.toFixed(1)}" y="${Math.max(w.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${k}" font-family="${Gt}">${w.v.toFixed(1)}</text>`}).join(""),u>0&&s){const w=P[u];D+=`<line x1="${w.toFixed(1)}" y1="${(c.t+m).toFixed(1)}" x2="${w.toFixed(1)}" y2="${(c.t+p+m).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const A=w>o*.7,k=(A?c.t+p+1:c.t+8)+d;D+=`<text x="${(A?w-5:w+5).toFixed(1)}" y="${k.toFixed(1)}" text-anchor="${A?"end":"start"}" font-size="9" fill="#64748B" font-family="${Gt}">${s}</text>`}return D+=t.map((w,A)=>`<text x="${P[A].toFixed(1)}" y="${c.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Gt}">${e[A]||""}</text>`).join(""),D+="</svg>",D}function ve(t,e){return Vo[t]||$o[e%$o.length]}function Ko(t,e,o,i,l={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const u=l.fadeBeforeIdx!=null?l.fadeBeforeIdx:-1,s=l.baselineLabel||"";let d=1/0,m=-1/0;if(n.forEach(C=>(t[C]||[]).forEach(T=>{T!=null&&(T<d&&(d=T),T>m&&(m=T))})),!isFinite(d))return"";const h=Math.max((m-d)*.15,2);d=Math.max(0,d-h),m=Math.min(100,m+h);const c=m-d||1,g=e.length,p=8,x=8,f=i-p-x,E="#64748B";let v="";for(let C=0;C<=4;C++){const T=p+C/4*f;v+=`<line x1="0" y1="${T.toFixed(1)}" x2="${o}" y2="${T.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((C,T)=>{const P=t[C]||[],$=ve(C,T),D=C==="LG",B=D?2.5:1.5,O=D?1:.7,z=[];if(P.forEach((F,j)=>{if(F==null)return;const b=(j+.5)/g*o,S=p+(1-(F-d)/c)*f;z.push({x:b,y:S,v:F,idx:j})}),!z.length)return;const w=u>0?z.filter(F=>F.idx<u):[],A=u>0?z.filter(F=>F.idx>=u):z;function k(F,j,b,S){if(F.length>=2){const N=F.map((I,_)=>`${_?"L":"M"}${I.x.toFixed(1)},${I.y.toFixed(1)}`).join(" ");v+=`<path d="${N}" stroke="${j}" fill="none" stroke-width="${B}" stroke-linecap="round" stroke-linejoin="round" opacity="${b}"/>`}F.forEach(N=>{S&&N.idx===u||(v+=`<circle cx="${N.x.toFixed(1)}" cy="${N.y.toFixed(1)}" r="${D?3.5:2.5}" fill="#fff" stroke="${j}" stroke-width="${D?2:1.5}" opacity="${b}"/>`)})}if(k(w,E,.85,!1),k(A,$,O,D&&u>0),D&&u>0){const F=z.find(j=>j.idx===u);F&&(v+=`<circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="4.5" fill="#000" stroke="${$}" stroke-width="3"/>`)}}),u>0&&s){const C=(u+.5)/g*o;v+=`<line x1="${C.toFixed(1)}" y1="${p}" x2="${C.toFixed(1)}" y2="${p+f}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const T=C>o*.7;v+=`<text x="${(T?C-5:C+5).toFixed(1)}" y="${(p+12).toFixed(1)}" text-anchor="${T?"end":"start"}" font-size="11" fill="#64748B" font-family="${Gt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${v}</svg>`}function Ir({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:l,monthlyVis:n,total:u,meta:s,wLabels:d}){const m={monthlyVis:n};return`
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
${(()=>{const h=c=>JSON.stringify(c).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(c=>({id:c.id,bu:c.bu,kr:c.kr,en:c.en||c.kr,category:c.category||"",date:c.date||"",status:c.status,score:c.score||0,prev:c.prev||0,vsComp:c.vsComp||0,compName:c.compName||"",compRatio:c.compRatio||0,allScores:c.allScores||{},monthlyScores:c.monthlyScores||[]})))};
var _productsCnty=${h(i||[])};
var _unlaunchedMap=${h(l)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((m==null?void 0:m.monthlyVis)||[])};
var _total=${h(u)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(d)};`})()}
${(()=>{const h=c=>JSON.stringify(c).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(Vo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Wt}';
var _FONT=${h(Gt)};
var _COMP='${ne}';
var _REGIONS=${h(Object.fromEntries(Object.entries(qe).map(([c,g])=>[c,g.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(qe).map(([h,c])=>[h,t==="en"?c.labelEn:c.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${to};

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
`}const jr=["audio","rac","aircare"];function qo(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return jr.includes(String(e).toLowerCase())}function Pr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function Ie(t,e){if(!qo(t)||!e)return-1;const o=Pr(t);if(o>0){const i=e.findIndex(l=>{const n=String(l||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const l=String(i||"").trim();return/^Apr(il)?$/i.test(l)||l==="4월"})}const je={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Dr(t){const e=je[t]||je.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function Jo(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=je[e]||je.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Mr(t,e,o,i,l,n,u){if(!e||!Object.keys(e).length)return"";const d=["MS","HS","ES"].map(m=>{const h=t.filter(g=>g.bu===m);if(!h.length)return"";const c=h.map(g=>{var w,A;const p=((w=e[g.id])==null?void 0:w.Total)||{},x=Object.keys(p).sort((k,F)=>{var S,N;if(k==="LG")return-1;if(F==="LG")return 1;const j=((S=p[k])==null?void 0:S[p[k].length-1])||0;return(((N=p[F])==null?void 0:N[p[F].length-1])||0)-j});if(!x.length)return"";const f=eo(g.status,l),E=(A=p.LG)==null?void 0:A[p.LG.length-1],v=x.map((k,F)=>{const j=ve(k,F),b=k==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${j};opacity:${b?1:.7}"></i><span style="font-size:13px;color:${b?"#1A1A1A":"#94A3B8"};font-weight:${b?700:400}">${k}</span></span>`}).join(""),C=o.length,T=`<colgroup><col style="width:${to}px">${o.map(()=>"<col>").join("")}</colgroup>`,P=Ie(g,o),$=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:8px 0;border:0">${Ko(p,o,C*80,180,{fadeBeforeIdx:P,baselineLabel:P>0?"*Baseline 재설정":""})}</td></tr>`,D=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:4px 0 6px;border:0">${v}</td></tr>`,B=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(k=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${k}</th>`).join("")}</tr>`,O=x.map((k,F)=>{const j=ve(k,F),b=k==="LG",S=o.map((N,I)=>{var Y;const _=(Y=p[k])==null?void 0:Y[I];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${_!=null?b?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${b?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${_!=null?_.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${b?"#FFF8F9":F%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${b?700:500};color:${j};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${j};margin-right:4px;vertical-align:0"></i>${k}</td>${S}</tr>`}).join(""),z=oo(g.id||g.category,n);return`<div class="trend-row${z?" is-unlaunched":""}" data-prodid="${g.id||g.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Wt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${no(g,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${z?"#F1F5F9":f.bg};color:${z?"#64748B":f.color};border:1px solid ${z?"#CBD5E1":f.border}">${z?l==="en"?"Unlaunched":"미출시":f.label}</span>
          ${E!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${E.toFixed(1)}%</span>`:""}
          ${g.compName?`<span style="font-size:14px;color:#94A3B8">vs ${g.compName} ${g.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Gt}">${T}<tbody>${$}${D}${B}${O}</tbody></table></div>
        ${Jo(g,l)}
      </div>`}).join("");return c?`<div class="bu-group" data-bu="${m}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${m}</span></div>
      ${c}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${l==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${u||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${l==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function Nr(t,e,o,i,l,n){if(!e||!e.length)return"";const u=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function m(p){const x=String(p).match(/(\d{1,2})월/);if(x)return parseInt(x[1])-1;const f=String(p).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return f?d[f[1].toLowerCase()]:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],c=s.slice(),g=u.map(p=>{const x=t.filter(E=>E.bu===p);if(!x.length)return"";const f=x.map(E=>{const v=E.monthlyScores||[];let C={};if(v.length>=2){const b=new Set;if(v.forEach(S=>{S.allScores&&Object.keys(S.allScores).forEach(N=>b.add(N))}),b.forEach(S=>{C[S]=h.map(N=>{var _;const I=v.find(Y=>m(Y.date)===N);return((_=I==null?void 0:I.allScores)==null?void 0:_[S])??null})}),!b.size&&(C.LG=h.map(S=>{const N=v.find(I=>m(I.date)===S);return N?N.score:null}),E.vsComp>0)){const S=h.map(N=>{const I=v.find(_=>m(_.date)===N);return(I==null?void 0:I.comp)??null});S.some(N=>N!=null)&&(C[E.compName||"Comp"]=S)}}else{const b=e.filter(_=>_.division===p&&(_.country==="TOTAL"||_.country==="TTL")),S={};b.forEach(_=>{const Y=m(_.date);Y>=0&&(S[Y]=_)});const N=h.map(_=>{var Y;return((Y=S[_])==null?void 0:Y.lg)||null}),I=h.map(_=>{var Y;return((Y=S[_])==null?void 0:Y.comp)||null});C={LG:N},I.some(_=>_!=null&&_>0)&&(C.Samsung=I)}const T=Object.keys(C).sort((b,S)=>{if(b==="LG")return-1;if(S==="LG")return 1;const N=(C[b]||[]).filter(_=>_!=null).pop()||0;return((C[S]||[]).filter(_=>_!=null).pop()||0)-N});if(!T.length)return"";const P=eo(E.status,i),$=(C.LG||[]).filter(b=>b!=null).pop(),D=T.map((b,S)=>{const N=ve(b,S),I=b==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${N};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${b}</span></span>`}).join(""),B=c.length,O=`<colgroup><col style="width:${to}px">${c.map(()=>"<col>").join("")}</colgroup>`,z=Ie(E,c),w=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:8px 0;border:0">${Ko(C,c,B*80,180,{fadeBeforeIdx:z,baselineLabel:z>0?"*Baseline 재설정":""})}</td></tr>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:4px 0 6px;border:0">${D}</td></tr>`,k=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${c.map(b=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${b}</th>`).join("")}</tr>`,F=T.map((b,S)=>{const N=ve(b,S),I=b==="LG",_=c.map((Y,et)=>{var ft;const lt=(ft=C[b])==null?void 0:ft[et];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${lt!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${lt!=null?lt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":S%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${N};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${N};margin-right:4px;vertical-align:0"></i>${b}</td>${_}</tr>`}).join(""),j=oo(E.id||E.category,l);return`<div class="trend-row${j?" is-unlaunched":""}" data-prodid="${E.id||E.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Wt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${no(E,l)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${j?"#F1F5F9":P.bg};color:${j?"#64748B":P.color};border:1px solid ${j?"#CBD5E1":P.border}">${j?i==="en"?"Unlaunched":"미출시":P.label}</span>
          ${$!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${$.toFixed(1)}%</span>`:""}
          ${E.compName?`<span style="font-size:14px;color:#94A3B8">vs ${E.compName} ${E.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Gt}">${O}<tbody>${w}${A}${k}${F}</tbody></table></div>
        ${Jo(E,i)}
      </div>`}).join("");return f?`<div class="bu-group" data-bu="${p}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${p}</span></div>
      ${f}
    </div>`:""}).join("");return g.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${c[0]}–${c[c.length-1]} (${c.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${g}</div>
  </div>`:""}function Yo(){return""}function _r(t,e,o,i){const l=+(t.score-t.prev).toFixed(1),n=t.vsComp||0,u=+(t.score-n).toFixed(1),s=l>0?"▲":l<0?"▼":"─",d=l>0?"#22C55E":l<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${d}">${s} ${Math.abs(l).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Wt}"></div>
          </div>
          ${n>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(n,100)}%;background:${ne}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Wt}"></i> LG ${t.score}%</span>
            ${n>0?`<span><i style="background:${ne}"></i> Samsung ${n}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${n>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${n}%</span>
          <span class="hero-comp-gap" style="color:${u>=0?"#22C55E":"#EF4444"}">Gap ${u>=0?"+":""}${u}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function be(t,e){const o=Me[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function oo(t,e){return Er.every(o=>{const i=Me[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function no(t,e){return be(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Lo(t,e,o,i,l,n,u,s,d){if(!t.length)return"";const h=["MS","HS","ES"].map(c=>{const g=t.filter(x=>x.bu===c);if(!g.length)return"";const p=g.map(x=>{var rt,nt;const f=x.weekly||[],E=f.filter(V=>V!=null),v=x.weeklyScore||(E.length>0?E[E.length-1]:x.score),C=x.monthlyScore||x.score,T=v,P=((rt=s==null?void 0:s[x.id])==null?void 0:rt.Total)||((nt=s==null?void 0:s[x.id])==null?void 0:nt.TTL)||{};let $=0;Object.entries(P).forEach(([V,it])=>{if(V==="LG"||V==="lg")return;const st=Array.isArray(it)&&it.length?it[it.length-1]:0;st>$&&($=st)});const D=x.vsComp||0,B=$>0?v/$*100:D>0?v/D*100:100,O=D>0?C/D*100:100,z=Math.round(B*10)/10,w=Math.round(O*10)/10,A=z,k=B>=100?"lead":B>=80?"behind":"critical",F=eo(k,i),j=E.length>=1?E[E.length-1]:null,b=E.length>=2?E[E.length-2]:null,S=j!=null&&b!=null?+(j-b).toFixed(1):null,N=S>0?"▲":S<0?"▼":"─",I=S>0?"#22C55E":S<0?"#EF4444":"#94A3B8",_=k==="critical"?"#BE123C":k==="behind"?"#D97706":"#15803D",Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],et={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function lt(V){const it=String(V).match(/(\d{1,2})월/);if(it)return parseInt(it[1])-1;const st=String(V).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?et[st[1].toLowerCase()]:-1}let ft=x.monthlyScores||[];if(ft.length<2&&u.length>0){const V=u.filter(st=>st.division===x.bu&&(st.country==="TOTAL"||st.country==="TTL")),it={};V.forEach(st=>{const bt=lt(st.date);bt>=0&&(it[bt]={date:st.date,score:st.lg,comp:st.comp})}),ft=Object.keys(it).sort((st,bt)=>st-bt).map(st=>it[st])}const dt=ft.length>0?ft.map(V=>{const it=lt(V.date);return it>=0?Y[it]:V.date}):["M-3","M-2","M-1","M0"],ct=ft.length>0?ft.map(V=>V.score):[null,null,null,x.score],vt=ft.length>=2?+(ft[ft.length-1].score-ft[ft.length-2].score).toFixed(1):null,Ft=vt>0?"▲":vt<0?"▼":"─",Et=vt>0?"#22C55E":vt<0?"#EF4444":"#94A3B8",Bt=A,Tt=Bt>=100?"#15803D":Bt>=80?"#D97706":"#BE123C",$t=x.weeklyPrev||(E.length>=5?E[E.length-5]:E[0]||0),Ut=v&&$t?+(v-$t).toFixed(1):null,Ct=C&&(x.monthlyPrev||x.prev)?+(C-(x.monthlyPrev||x.prev)).toFixed(1):null,Vt=be(x.id||x.category,n),ot=oo(x.id||x.category,n),G=ot?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:F;return`<div class="prod-card${ot?" is-unlaunched":""}" data-prodid="${x.id||x.category}" data-ws="${v.toFixed(1)}" data-ms="${C.toFixed(1)}" data-wr="${z}" data-mr="${w}" data-wmom="${Ut??""}" data-mmom="${Ct??""}" style="border-color:${G.border}">
        <div class="prod-head">
          <span class="prod-name">${no(x,n)}</span>
          ${Vt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${G.bg};color:${G.color};border-color:${G.border}">${G.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${T.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${I}">${S!=null?`WoW ${N} ${Math.abs(S).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Et}">${qo(x)||vt==null?"":`MoM ${Ft} ${Math.abs(vt).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const V=l.slice(-10),it=Ie(x,V),st=String(x.id||"").toLowerCase(),bt=st==="aircare"?30:st==="rac"?20:0;return Bo(f.slice(-10),V,300,90,_,{fadeBeforeIdx:it,baselineLabel:it>0?"*Baseline 재설정":"",labelOffsetY:bt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const V=Ie(x,dt),st=String(x.id||"").toLowerCase()==="audio";return Bo(ct,dt,300,90,_,{fadeBeforeIdx:V,baselineLabel:V>0?"*Baseline 재설정":"",labelOffsetY:st?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${x.compName}`:`${x.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Bt,120)}%;background:${Tt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Tt}">${Bt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${c}">
      <div class="bu-header"><span class="bu-label">${c}</span><span class="bu-count">${g.length}${o.categories}</span></div>
      <div class="prod-grid">${p}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${d||""}${d?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Yo(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const c=t.filter(g=>be(g.id||g.category,n).length>0).map(g=>`${(g.id||"").toLowerCase()==="audio"||g.kr==="오디오"?"Audio-Sound Suite":g.kr}: ${be(g.id||g.category,n).map(p=>Lr(p,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(c.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${c.join(" / ")}</p>`:"")+Dr(i)})()}</div>
  </div>`}function Ro(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),u=Me[n]||(n||"").toUpperCase(),s=i&&i[`${t.country}|${u}`],d=Br(t.score,t.compScore),m=s?"#94A3B8":d==="lead"?"#15803D":d==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),c=s?"#64748B":h>=0?"#15803D":"#BE123C",g=130,p=["TCL","HISENSE","HAIER"];let x="",f=0;t.allScores&&Object.entries(t.allScores).forEach(([$,D])=>{const B=String($).toUpperCase();p.some(z=>B.includes(z))&&D>f&&(x=$,f=D)});const E=Math.max(e,f),v=Math.max(3,Math.round(t.score/E*g)),C=t.compScore>0?Math.max(3,Math.round(t.compScore/E*g)):0,T=f>0?Math.max(3,Math.round(f/E*g)):0,P="#9333EA";return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${m}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${m}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ne}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${C}px;background:${ne}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${f>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${P}">${f.toFixed(1)}</span>
        <div class="vbar-col" style="height:${T}px;background:${P}"></div>
        <span class="vbar-col-name" style="color:${P}">${x.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${c}">${h>=0?"+":""}${h}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Io(t,e,o,i,l,n){if(!t||!t.length)return"";const u=new Map;t.forEach(p=>{u.has(p.product)||u.set(p.product,[]),u.get(p.product).push(p)});const s=e.cntyProductFilter||{},d=[...u.entries()].filter(([p])=>s[p]!==!1).map(([p,x])=>{const f=Math.max(...x.map(v=>Math.max(v.score,v.compScore)),1),E=x.map(v=>Ro(v,f,Je(v.country),l)).join("");return`<div class="cnty-product" data-group-product="${p}"><div class="bu-header"><span class="bu-label">${p}</span></div><div class="vbar-chart">${E}</div></div>`}).join(""),m=new Map;t.forEach(p=>{m.has(p.country)||m.set(p.country,[]),m.get(p.country).push(p)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],g=h.filter(p=>m.has(p)).concat([...m.keys()].filter(p=>!h.includes(p))).map(p=>{const x=m.get(p);if(!x)return"";const f=Math.max(...x.map(v=>Math.max(v.score,v.compScore)),1),E=x.map(v=>Ro(v,f,v.product,l)).join("");return`<div class="cnty-product" data-group-country="${p}"><div class="bu-header"><span class="bu-label">${Je(p)}</span></div><div class="vbar-chart">${E}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ne}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${Yo(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${g}</div>
      <div class="cnty-view-product" style="display:none">${d}</div>
      ${(()=>{if(!l||!Object.keys(l).length)return"";const p={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},f=[...new Set(t.map(E=>E.product))].map(E=>{const v=p[E]||String(E).toLowerCase(),C=be(v,l),T=v==="audio"?"Audio-Sound Suite":E;return C.length?`${T}: ${C.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return f.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${f.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const jo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Or(t){const e=jo[t]||jo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(l=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${l.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${l.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function zr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",l=e==="en"?"All":"전체",n=e==="en"?"Total":"총",u=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",d=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],m={};d.forEach(p=>{const x=new Set;t.forEach(f=>{f[p.key]&&x.add(f[p.key])}),m[p.key]=[...x].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(m).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const c=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),g=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${u?" "+u:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${s}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${d.map(p=>`<th data-col="${p.key}" onclick="_plToggle('${p.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${p.label} <span id="pl-arrow-${p.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${d.map(p=>`<div id="pl-dd-${p.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${p.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${l}</div>
      ${m[p.key].map(x=>`<div onclick="_plFilter('${p.key}','${x.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${x}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${h};
    var _plFilters={};
    var _divC=${c};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${u?" "+u:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(d.map(p=>p.key))}.forEach(function(k){
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
  <\/script>`}function Po(t,e,o,i,l,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const u=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let w=0;w<12;w++)s.push("w"+(5+w));const d=[...new Set(t.map(w=>w.topic))].filter(Boolean),m=[...new Set(t.map(w=>w.type))].filter(Boolean),h=[...new Set(t.map(w=>w.country))].filter(w=>w&&w!=="TTL"),c=u.filter(w=>h.includes(w)).concat(u.filter(w=>!h.includes(w))),g=JSON.stringify(t).replace(/</g,"\\u003c"),p=JSON.stringify(s),x=JSON.stringify(d),f=JSON.stringify(m),E=JSON.stringify(c),v=72;function C(w){const A={};return w&&String(w).split(`
`).forEach(k=>{const F=k.indexOf("=");if(F>0){const j=k.slice(0,F).trim(),b=k.slice(F+1).trim();j&&(A[j]=b)}}),A}const T=C(i==null?void 0:i.prTopicPromptsRaw);l&&l.length&&d.forEach(w=>{if(!T[w]){const A=l.find(k=>k.topic===w&&k.country==="US");A&&(T[w]=A.prompt)}});const P=(n==null?void 0:n.prTopicList)||[],$={},D={};P.forEach(w=>{[w.topic,w.topicRow,w.oldTopic].filter(Boolean).map(k=>k.trim()).forEach(k=>{w.explanation&&!$[k]&&($[k]=w.explanation),w.bu&&!D[k]&&(D[k]=w.bu)})});const O={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...$,...C(i==null?void 0:i.prTopicDescsRaw)},z={};return d.forEach(w=>{const A=D[w];if(A)z[w]=A;else{const k=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];z[w]=k.some(F=>w.toLowerCase().includes(F.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Gt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Wt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${g},W=${p},TP=${x},TY=${f},CN=${E};
    var CW=${v};
    var TOPIC_CAT=${JSON.stringify(z)};
    var TOPIC_PROMPT=${JSON.stringify(T).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(O).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(P).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Re)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Wt}',COMP='${ne}';
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
  <\/script>`}function Do(t,e,o,i,l,n){const u=(t||[]).filter(f=>!0);if(!u.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let f=0;f<12;f++)s.push("w"+(5+f));const m=[...new Set(u.map(f=>f.stakeholder))].filter(Boolean).map(f=>({stakeholder:f,topics:[...new Set(u.filter(E=>E.stakeholder===f).map(E=>E.topic))].filter(Boolean)})),h=72,c=JSON.stringify(u).replace(/</g,"\\u003c"),g=JSON.stringify(s),p=JSON.stringify(m),x="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Gt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${l||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Wt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${x}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${c},W=${g},GROUPS=${p};
    var CW=${h},RED='${Wt}';
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
      var el=document.getElementById('${x}-sections');if(!el)return;
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
  <\/script>`}function Gr(t,e,o,i,l,n,u,s,d,m,h,c,g,p){var Ct,Vt,ot;o=(o||[]).map(L=>({...L,weekly:(L.weekly||[]).map(G=>G??0),monthly:(L.monthly||[]).map(G=>G??0)})),m&&typeof m=="object"&&Object.values(m).forEach(L=>{!L||typeof L!="object"||Object.values(L).forEach(G=>{!G||typeof G!="object"||Object.keys(G).forEach(rt=>{const nt=G[rt];Array.isArray(nt)&&(G[rt]=nt.map(V=>V??0))})})});const x={aircare:"Xiaomi"};o=o.map(L=>{const G=x[(L.id||"").toLowerCase()];if(!G||!L.allScores)return L;const rt=Object.entries(L.allScores).find(([it])=>it.toLowerCase()===G.toLowerCase()&&it.toLowerCase()!=="lg");if(!rt)return L;const nt=rt[1];if(!(nt>0))return L;const V=Math.round(L.score/nt*100);return{...L,compName:rt[0],vsComp:nt,compRatio:V,status:V>=100?"lead":V>=80?"behind":"critical"}});const f=(g==null?void 0:g.visibilityOnly)||!1,E=(g==null?void 0:g.includePromptList)||!1,v=(g==null?void 0:g.includeReadability)===!0,C=(p==null?void 0:p.unlaunchedMap)||{},P=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,$=Le[n]||Le.ko;let D;if(d&&d.length)D=d.map(L=>String(L).toUpperCase().startsWith("W")?L.toUpperCase():L);else{const L=m?Math.max(...Object.values(m).flatMap(rt=>Object.values(rt).flatMap(nt=>Object.values(nt).map(V=>(V==null?void 0:V.length)||0))),0):0,G=t.weekStart||Math.max(1,L-11);D=Array.from({length:Math.max(12,L)},(rt,nt)=>`W${G+nt}`)}const B=new Set;m&&Object.values(m).forEach(L=>Object.keys(L).forEach(G=>{G!=="Total"&&B.add(G)})),u&&u.forEach(L=>{L.country&&L.country!=="TTL"&&B.add(L.country)});const O=[...B].sort(),z=n==="en"?"All":"전체",w=["MS","HS","ES"],A=o.map(L=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${L.bu}" value="${L.id}" checked onchange="onFilterChange()"><span>${L.kr}</span></label>`).join(""),k=w.map(L=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${L}" checked onchange="onBuChange('${L}')"><span>${L}</span></label>`).join(""),F=O.map(L=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${L}" checked onchange="onFilterChange()"><span>${Je(L)}</span></label>`).join(""),j=Object.entries(qe).map(([L,G])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${L}" checked onchange="onRegionChange('${L}')"><span>${G.labelEn}</span></label>`).join(""),b=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,S=g!=null&&g.weeklyLabelsFull&&g.weeklyLabelsFull.length===D.length?g.weeklyLabelsFull:D,N=D.map((L,G)=>`<option value="${G}"${G===D.length-1?" selected":""}>${S[G]||L}</option>`).join(""),I=(((Ct=o[0])==null?void 0:Ct.monthlyScores)||[]).map(L=>{const G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rt=String(L.date).match(/(\d{1,2})월/),nt=String(L.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return rt?G[parseInt(rt[1])-1]:nt?nt[1].charAt(0).toUpperCase()+nt[1].slice(1).toLowerCase():L.date}),_=I.map((L,G)=>`<option value="${G}"${G===I.length-1?" selected":""}>${L}</option>`).join(""),Y=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Gt}`,et=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${b}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${D[D.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${D.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${Y}">${N}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${Y}"${I.length>0?"":" disabled"}>${_||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${z}</span></label>
        ${k}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${z}</span></label>
        ${A}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${z}</span></label>
        ${j}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${z}</span></label>
        ${F}
      </div>
    </div>
  </div>`,ft=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${$r(t.noticeText)}</div></div>`:"",t.showTotal!==!1?_r(e,t,$,n):""].join(""),dt=[];if(m&&Object.keys(m).length){const L={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(m).forEach(([G,rt])=>{const nt=o.find(it=>it.id===G),V=(nt==null?void 0:nt.kr)||L[G]||G;Object.entries(rt).forEach(([it,st])=>{if(it==="Total"||it==="TTL"||it==="TOTAL")return;const bt=st.LG||st.lg||[],At=bt.length>0?bt[bt.length-1]:0;if(At<=0)return;let Xt="",Rt=0;Object.entries(st).forEach(([Mt,wt])=>{if(Mt==="LG"||Mt==="lg")return;const It=Array.isArray(wt)&&wt.length?wt[wt.length-1]:0;It>Rt&&(Rt=It,Xt=Mt)});const re=+(At-Rt).toFixed(1),Dt={};Object.entries(st).forEach(([Mt,wt])=>{if(Array.isArray(wt)&&wt.length){const It=wt[wt.length-1];It!=null&&(Dt[Mt]=It)}}),dt.push({product:V,country:it,score:At,compName:Xt,compScore:Rt,gap:re,allScores:Dt})})})}const ct=((Vt=g==null?void 0:g.weeklyLabelsFull)==null?void 0:Vt[g.weeklyLabelsFull.length-1])||D[D.length-1]||"",vt=ct?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${ct} ${n==="en"?"data":"기준"}</span>`:"",Ft=[ft,t.showProducts!==!1?Lo(o,t,$,n,D,C,(g==null?void 0:g.monthlyVis)||[],m,vt):"",`<div id="trend-container">${Mr(o,m,D,$,n,C,vt)}</div>`,t.showCnty!==!1?Io(dt,t,$,n,C,vt):""].join(""),Et=o.map(L=>{const G=L.monthlyScore||L.score,rt=L.monthlyPrev||L.prev,nt=L.vsComp||0,V=nt>0?G/nt*100:100;return{...L,score:G,prev:rt,weeklyScore:G,weeklyPrev:rt,monthlyScore:G,monthlyPrev:rt,weekly:(L.monthlyScores||[]).map(it=>it.score),status:V>=100?"lead":V>=80?"behind":"critical"}}),Bt=(((ot=o[0])==null?void 0:ot.monthlyScores)||[]).map(L=>{const G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rt=String(L.date).match(/(\d{1,2})월/),nt=String(L.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return rt?G[parseInt(rt[1])-1]:nt?nt[1].charAt(0).toUpperCase()+nt[1].slice(1).toLowerCase():L.date}),Tt=(g==null?void 0:g.monthlyVis)||[],$t=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Ut=[ft,t.showProducts!==!1?Lo(Et,t,$,n,Bt.length?Bt:["Feb","Mar"],C,Tt,{},$t):"",`<div id="monthly-trend-container">${Nr(Et,Tt,$,n,C,$t)}</div>`,t.showCnty!==!1?Io(u,t,$,n,C,$t):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Fr({FONT:Gt,RED:Wt,COMP:ne})}</style>
</head>
<body>
${f?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${et.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Ft}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Ut}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Po(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Do(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${v?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${E?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${et}
    <div id="bu-weekly-content" class="dash-container">${Ft}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Ut}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Po(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Do(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <p>${$.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${P}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${zr(p==null?void 0:p.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Or(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${$.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Ir({lang:n,weeklyAll:m,products:o,productsCnty:u,ulMap:C,monthlyVis:g==null?void 0:g.monthlyVis,total:e,meta:t,wLabels:D})}
<\/script>
</body>
</html>`}function Ur(t){const e=t.filter(d=>d.status==="lead"),o=t.filter(d=>d.status==="behind"),i=t.filter(d=>d.status==="critical"),l=[...t].sort((d,m)=>m.score-d.score)[0],n=[...t].sort((d,m)=>d.score-m.score)[0],u=(t.reduce((d,m)=>d+m.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${u}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),l&&s.push(`가장 높은 카테고리는 ${l.kr} ${l.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(l.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?s.push(`취약 카테고리(${i.map(d=>d.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(d=>d.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Hr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Wr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const Z=xt,Vr={citation:[Z.meta,Z.citTouchPoints,Z.citDomain,Z.citPageType],"weekly-report":[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES],"monthly-report":[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES],dashboard:[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citDomain,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES,Z.weeklyPR,Z.weeklyBrandPrompt,Z.appendix,Z.unlaunched,Z.prTopicList],newsletter:[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES,Z.unlaunched]};function Kr(t){return Vr[t]||[]}const Mo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function qr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function Jr({url:t,downloadName:e="sheet",mode:o}){const[i,l]=K.useState(!1),[n,u]=K.useState(""),s=o?Kr(o):[],d=s.length?"zip":"xlsx",m=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const c=qr(t);if(!c){u("ERROR: 동기화 URL 비어있거나 잘못됨");return}l(!0),u("");try{const g=new URLSearchParams({id:c,name:e});s.length&&g.set("tabs",s.join(","));const p=await fetch(`/api/sheet-download?${g.toString()}`,{credentials:"include"});if(!p.ok){const E=await p.text().catch(()=>"");let v=E;try{const C=JSON.parse(E);v=C.error||C.detail||E}catch{}throw new Error(`(${p.status}) ${v}`)}const x=await p.blob(),f=document.createElement("a");f.href=URL.createObjectURL(x),f.download=`${e}.${d}`,document.body.appendChild(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(f.href),1e3),u("다운로드 완료")}catch(g){u("ERROR: "+(g.message||String(g)))}finally{l(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:h,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Mo,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":m}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Mo,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function Yr({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:l,metaEn:n,setMetaEn:u,total:s,setTotal:d,products:m,setProducts:h,citations:c,setCitations:g,dotcom:p,setDotcom:x,productsCnty:f,setProductsCnty:E,citationsCnty:v,setCitationsCnty:C,resolved:T,previewLang:P,setPreviewLang:$,snapshots:D,setSnapshots:B,setWeeklyLabels:O,setWeeklyAll:z,weeklyLabels:w,weeklyAll:A,citationsByCnty:k,dotcomByCnty:F,generateHTML:j,publishEndpoint:b,setMonthlyVis:S,onSyncExtra:N,categoryStats:I,extra:_,monthlyVis:Y,progressMonth:et,setProgressMonth:lt,progressDataMonth:ft}){const dt=K.useRef({products:m,productsCnty:f,citations:c,citationsCnty:v,total:s,dotcom:p,extra:_});dt.current={products:m,productsCnty:f,citations:c,citationsCnty:v,total:s,dotcom:p,extra:_};function ct(){return dt.current}const[vt,Ft]=K.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Et,Bt]=K.useState(!1),[Tt,$t]=K.useState(null),[Ut,Ct]=K.useState(""),[Vt,ot]=K.useState(""),[L,G]=K.useState(!1),[rt,nt]=K.useState(""),[V,it]=K.useState(!1),[st,bt]=K.useState(!1),[At,Xt]=K.useState(!1),[Rt,re]=K.useState(!1),[Dt,Mt]=K.useState(""),[wt,It]=K.useState(!1),[Zt,Xo]=K.useState(!0),[ce,we]=K.useState(""),[ie,_e]=K.useState(null),[ge,Zo]=K.useState([]),Nt=t==="newsletter",[de,Qo]=K.useState(()=>{const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`});function Oe(){Nt&&fetch("/api/publish").then(a=>a.ok?a.json():null).then(a=>{a&&Array.isArray(a.months)&&Zo(a.months)}).catch(()=>{})}K.useEffect(()=>{if(Nt){Oe();return}fetch(b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(y=>y.ok?y.json():null).then(_e).catch(()=>{})},[t,b,Nt]);const tn=(()=>{const a=new Set,y=new Date;for(let Q=0;Q<24;Q++){const mt=new Date(y.getFullYear(),y.getMonth()-Q,1);a.add(`${mt.getFullYear()}-${String(mt.getMonth()+1).padStart(2,"0")}`)}for(const Q of ge)a.add(Q.month);return de&&a.add(de),[...a].sort((Q,mt)=>mt.localeCompare(Q))})();function Ce(a){const[y,Q]=a.split("-");return`${y}년 ${parseInt(Q,10)}월`}const[en,ro]=K.useState(null);K.useEffect(()=>{let a=!0;const y=()=>yo(t).then(mt=>{a&&ro(mt)});y();const Q=setInterval(y,6e4);return()=>{a=!1,clearInterval(Q)}},[t]);function on(){yo(t).then(ro)}async function nn(){if(!Rt){re(!0),Mt("");try{const a=ct(),y=Ee(a.products,a.productsCnty,a.citations,a.citationsCnty,"ko"),Q=Ee(a.products,a.productsCnty,a.citations,a.citationsCnty,"en");let mt,_t,H;if(t==="dashboard"){const X=Y||[],pt=a.extra||_||{};mt=j(i,a.total,y.products,y.citations,a.dotcom,"ko",y.productsCnty,y.citationsCnty,w,A,k,F,X,pt),_t=j(n,a.total,Q.products,Q.citations,a.dotcom,"en",Q.productsCnty,Q.citationsCnty,w,A,k,F,X,pt),H=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else mt=j(i,a.total,y.products,y.citations,p,"ko",y.productsCnty,y.citationsCnty,{weeklyLabels:w,categoryStats:I,unlaunchedMap:(_==null?void 0:_.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),_t=j(n,a.total,Q.products,Q.citations,p,"en",Q.productsCnty,Q.citationsCnty,{weeklyLabels:w,categoryStats:I,unlaunchedMap:(_==null?void 0:_.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),H=`${i.period||""} ${i.title||"Newsletter"}`.trim();const pe=b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),M={title:H,htmlKo:mt,htmlEn:_t};Nt&&(M.month=de);const Lt=await(await fetch(pe,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(M)})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if(_e({...Lt,published:!0}),Nt&&Oe(),t==="dashboard")try{const X=await $e(t)||{},pt=a.extra||_||{};mo(t,{...X,meta:i,total:a.total,weeklyPR:pt.weeklyPR||X.weeklyPR,weeklyPRLabels:pt.weeklyPRLabels||X.weeklyPRLabels,weeklyBrandPrompt:pt.weeklyBrandPrompt||X.weeklyBrandPrompt,weeklyBrandPromptLabels:pt.weeklyBrandPromptLabels||X.weeklyBrandPromptLabels,appendixPrompts:pt.appendixPrompts||X.appendixPrompts})}catch{}const Ot=`${window.location.origin}${Lt.urls.ko}`,tt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(Ot+`
`+tt)}catch{}Mt(`KO: ${Ot}
EN: ${tt}`)}catch(a){Mt("ERROR:"+a.message)}finally{re(!1),setTimeout(()=>Mt(""),2e4)}}}async function rn(){if(!wt){It(!0),we("");try{const a=await Jn(Gr,Ee,{includeProgressTracker:Zt});we(`통합 게시 완료!
KO: ${window.location.origin}${a.urls.ko}
EN: ${window.location.origin}${a.urls.en}`)}catch(a){we("ERROR: "+a.message)}finally{It(!1),setTimeout(()=>we(""),15e3)}}}async function io(a){try{const y=b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),Q=Nt?`${y}?month=${encodeURIComponent(a||de)}`:y;(await(await fetch(Q,{method:"DELETE"})).json()).ok&&(Nt?Oe():_e(null))}catch{}}async function an(){if(P!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}bt(!0)}async function ao(a){bt(!1),Xt(!0);const y=(a==null?void 0:a.products)??m,Q=(a==null?void 0:a.productsCnty)??f,mt=(a==null?void 0:a.citations)??c,_t=(a==null?void 0:a.citationsCnty)??v;try{const H=i,pe=[H.title||"",H.dateLine||"",H.noticeText||"",H.totalInsight||"",H.reportType||"",H.productInsight||"",H.productHowToRead||"",H.citationInsight||"",H.citationHowToRead||"",H.dotcomInsight||"",H.dotcomHowToRead||"",H.todoText||"",H.todoNotice||"",H.kpiLogicText||"",H.cntyInsight||"",H.cntyHowToRead||"",H.citDomainInsight||"",H.citDomainHowToRead||"",H.citCntyInsight||"",H.citCntyHowToRead||"",H.citPrdInsight||"",H.citPrdHowToRead||"",H.period||"",H.team||"",H.reportNo||"",H.monthlyReportBody||""],M=y.map(J=>J.kr||""),te=y.map(J=>J.compName||""),Lt=mt.map(J=>J.category||""),Ot=[...new Set(Q.map(J=>J.country||""))],tt=[...new Set(Q.map(J=>J.product||""))],X=[...new Set(Q.map(J=>J.compName||""))],pt=[...new Set(_t.map(J=>J.cnty||"").filter(J=>J&&J!=="TTL"))],ht=[...pe,...M,...te,...Lt,...Ot,...tt,...X,...pt].map(J=>J||" "),q=await Xn(ht,{from:"ko",to:"en"});let W=0;const Qt={...i,title:q[W++]||H.title,dateLine:q[W++]||H.dateLine,noticeText:q[W++]||H.noticeText,totalInsight:q[W++]||H.totalInsight,reportType:q[W++]||H.reportType,productInsight:q[W++]||H.productInsight,productHowToRead:q[W++]||H.productHowToRead,citationInsight:q[W++]||H.citationInsight,citationHowToRead:q[W++]||H.citationHowToRead,dotcomInsight:q[W++]||H.dotcomInsight,dotcomHowToRead:q[W++]||H.dotcomHowToRead,todoText:q[W++]||H.todoText,todoNotice:q[W++]||H.todoNotice,kpiLogicText:q[W++]||H.kpiLogicText,cntyInsight:q[W++]||H.cntyInsight,cntyHowToRead:q[W++]||H.cntyHowToRead,citDomainInsight:q[W++]||H.citDomainInsight,citDomainHowToRead:q[W++]||H.citDomainHowToRead,citCntyInsight:q[W++]||H.citCntyInsight,citCntyHowToRead:q[W++]||H.citCntyHowToRead,citPrdInsight:q[W++]||H.citPrdInsight,citPrdHowToRead:q[W++]||H.citPrdHowToRead,period:(W++,H.period),team:q[W++]||H.team,reportNo:(W++,H.reportNo),monthlyReportBody:q[W++]||H.monthlyReportBody},jt=J=>J&&J.replace(/\b\w/g,at=>at.toUpperCase()),Kt=J=>(J||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),ee={};y.forEach((J,at)=>{ee[J.id]={en:jt(q[W+at]||J.kr),compNameEn:Kt(q[W+M.length+at]||J.compName)}}),W+=M.length+te.length;const zt={};mt.forEach((J,at)=>{zt[`${J.rank}_${J.source}`]=jt(q[W+at]||J.category)}),W+=Lt.length;const ue={};Ot.forEach((J,at)=>{ue[J]=/^[A-Z]{2,3}$/.test(J)?J:q[W+at]||J}),W+=Ot.length;const ke={};tt.forEach((J,at)=>{ke[J]=q[W+at]||J}),W+=tt.length;const ye={};X.forEach((J,at)=>{ye[J]=q[W+at]||J}),W+=X.length;const me={};pt.forEach((J,at)=>{me[J]=/^[A-Z]{2,3}$/.test(J)?J:q[W+at]||J}),u(Qt),h(J=>J.map(at=>{var so,lo;return{...at,en:((so=ee[at.id])==null?void 0:so.en)||at.en||at.kr,compNameEn:((lo=ee[at.id])==null?void 0:lo.compNameEn)||at.compNameEn||at.compName}})),g(J=>J.map(at=>({...at,categoryEn:zt[`${at.rank}_${at.source}`]||at.categoryEn||at.category}))),E(J=>J.map(at=>({...at,countryEn:jt(ue[at.country]||at.country),productEn:jt(ke[at.product]||at.product),compNameEn:Kt(ye[at.compName]||at.compName)}))),C(J=>J.map(at=>({...at,cntyEn:at.cnty==="TTL"?"TTL":jt(me[at.cnty]||at.cnty)}))),Xt(!1)}catch(H){alert("번역 오류: "+H.message),Xt(!1)}}async function sn(){const a=j(e,s,T.products,T.citations,p,P,T.productsCnty,T.citationsCnty);try{await navigator.clipboard.writeText(a)}catch{const y=document.createElement("textarea");y.value=a,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}G(!0),setTimeout(()=>G(!1),2500)}async function ln(){await nr(e,s,m,c,p)}async function cn(){if(V!=="sending"){it("sending");try{const a=ct(),y=j(e,a.total,a.products,a.citations,a.dotcom,P,a.productsCnty,a.citationsCnty,{weeklyLabels:w,categoryStats:I,unlaunchedMap:(_==null?void 0:_.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Q=`[LG GEO] ${e.title} · ${e.period}`,_t=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:rt.trim(),subject:Q,html:y})})).json();if(!_t.ok)throw new Error(_t.error||"발송 실패");it("ok"),setTimeout(()=>it(!1),4e3)}catch(a){it("error"),Ct(a.message),setTimeout(()=>{it(!1),Ct("")},5e3)}}}async function dn(){var Q,mt,_t,H,pe;if(Et)return;const a=vr(vt.trim());if(!a){$t("error"),Ct("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>$t(null),3e3);return}Bt(!0),$t(null),Ct(""),ot("");const y=[];try{const M=await Cr(a,tt=>Ct(tt));if(y.push(`[Sync] parsed keys: ${Object.keys(M).join(", ")||"(없음)"}`),M.meta&&y.push(`[Sync] meta keys: ${Object.keys(M.meta).join(", ")}`),M.productsPartial&&y.push(`[Sync] products: ${M.productsPartial.length}건`),y.push(`[Sync] citations: ${((Q=M.citations)==null?void 0:Q.length)??0}건`),y.push(`[Sync] citationsCnty: ${((mt=M.citationsCnty)==null?void 0:mt.length)??0}건`),y.push(`[Sync] dotcom: ${M.dotcom?"OK":"(없음)"}`),y.push(`[Sync] productsCnty: ${((_t=M.productsCnty)==null?void 0:_t.length)??0}건`),M.meta){const tt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];l(X=>{const pt={...X};for(const[ht,q]of Object.entries(M.meta))tt.includes(ht)&&X[ht]||(pt[ht]=q);return pt}),u(X=>({...X,period:M.meta.period,dateLine:M.meta.dateLine,reportNo:M.meta.reportNo}))}if(M.citations&&(g(M.citations),dt.current={...dt.current,citations:M.citations}),M.dotcom&&(x(tt=>({...tt,...M.dotcom})),dt.current={...dt.current,dotcom:{...dt.current.dotcom,...M.dotcom}}),M.productsCnty&&(E(M.productsCnty),dt.current={...dt.current,productsCnty:M.productsCnty}),M.citationsCnty&&(C(M.citationsCnty),dt.current={...dt.current,citationsCnty:M.citationsCnty}),M.monthlyVis&&S&&S(M.monthlyVis),N){const tt={weeklyPR:M.weeklyPR||null,weeklyPRLabels:M.weeklyPRLabels||null,weeklyBrandPrompt:M.weeklyBrandPrompt||null,weeklyBrandPromptLabels:M.weeklyBrandPromptLabels||null,appendixPrompts:M.appendixPrompts||null,unlaunchedMap:M.unlaunchedMap||null,weeklyLabelsFull:M.weeklyLabelsFull||null,prTopicList:M.prTopicList||null};N(tt),dt.current={...dt.current,extra:{...dt.current.extra,...tt}}}const te=M.weeklyLabels||((H=M.meta)==null?void 0:H.weeklyLabels);console.log("[SYNC] weeklyLabels:",te,"weeklyLabelsFull:",M.weeklyLabelsFull),te&&te.length&&O(te),M.weeklyAll&&z(tt=>({...tt,...M.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(M));const Lt=M.weeklyMap?Object.keys(M.weeklyMap):[],Ot=((pe=M.productsPartial)==null?void 0:pe.map(tt=>tt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Lt.length?Lt:"NONE"),console.log("[SYNC] productsPartial IDs:",Ot.length?Ot:"NONE"),Lt.length&&Ot.length){const tt=Ot.filter(pt=>!Lt.includes(pt)),X=Lt.filter(pt=>!Ot.includes(pt));tt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",tt),X.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",X),!tt.length&&!X.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(M.productsPartial){const tt=M.productsPartial.map(X=>{var ye;const pt=((ye=M.weeklyMap)==null?void 0:ye[X.id])||[],ht=pt.filter(me=>me!=null&&me>0),q=X.score,W=X.prev||0,Qt=X.vsComp>0?Math.round(q/X.vsComp*100):100,jt=ht.length>0?ht[ht.length-1]:q,Kt=ht.length>=5?ht[ht.length-5]:ht[0]||0,ee=q,zt=W,ue=Qt,ke=W>0&&W!==q?[W,q]:[];return{...X,score:ee,prev:zt,weekly:pt,monthly:ke,weeklyScore:jt,weeklyPrev:Kt,monthlyScore:q,monthlyPrev:W,compRatio:ue,status:ue>=100?"lead":ue>=80?"behind":"critical"}});h(tt),dt.current={...dt.current,products:tt}}else M.weeklyMap&&h(tt=>tt.map(X=>{var ht;const pt=(ht=M.weeklyMap)==null?void 0:ht[X.id];return pt?{...X,weekly:pt}:X}));if(M.total){const tt={...dt.current.total,...M.total,...M.buTotals?{buTotals:M.buTotals}:{},...M.buTotalsPrev?{buTotalsPrev:M.buTotalsPrev}:{},...M.countryTotals?{countryTotals:M.countryTotals}:{},...M.countryTotalsPrev?{countryTotalsPrev:M.countryTotalsPrev}:{}};d(X=>({...X,...tt})),dt.current={...dt.current,total:tt}}{let tt=function(W){if(!W)return 0;const Qt=String(W).trim(),jt=Qt.match(/(\d{1,2})월/);if(jt){const zt=parseInt(jt[1]);return zt>=1&&zt<=12?zt:0}const Kt=Qt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Kt)return ht[Kt[1].toLowerCase()]||0;const ee=Qt.match(/\d{4}[-\/](\d{1,2})/);if(ee){const zt=parseInt(ee[1]);return zt>=1&&zt<=12?zt:0}return 0};const X=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ht={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let q=0;if(M.derivedPeriod){const W=tt(M.derivedPeriod);W>q&&(q=W)}if(M.citDerivedPeriod){const W=tt(M.citDerivedPeriod);W>q&&(q=W)}q>0&&q<=12&&(l(W=>({...W,period:`${X}년 ${q}월`})),u(W=>({...W,period:`${pt[q]} ${X}`})))}if(!M.total&&M.productsPartial&&M.productsPartial.length>0){const tt=M.productsPartial,X=+(tt.reduce((ht,q)=>ht+q.score,0)/tt.length).toFixed(1),pt=+(tt.reduce((ht,q)=>ht+(q.vsComp||0),0)/tt.length).toFixed(1);d(ht=>({...ht,score:X,vsComp:pt,rank:X>=pt?1:2}))}if(setTimeout(()=>{mo(t,{meta:M.meta||null,total:M.total?{...M.total,...M.buTotals?{buTotals:M.buTotals}:{},...M.buTotalsPrev?{buTotalsPrev:M.buTotalsPrev}:{},...M.countryTotals?{countryTotals:M.countryTotals}:{},...M.countryTotalsPrev?{countryTotalsPrev:M.countryTotalsPrev}:{}}:null,productsPartial:M.productsPartial||null,weeklyMap:M.weeklyMap||null,weeklyLabels:M.weeklyLabels||null,weeklyLabelsFull:M.weeklyLabelsFull||null,weeklyAll:M.weeklyAll||null,citations:M.citations||null,dotcom:M.dotcom||null,productsCnty:M.productsCnty||null,citationsCnty:M.citationsCnty||null,citationsByCnty:M.citationsByCnty||null,dotcomByCnty:M.dotcomByCnty||null,appendixPrompts:M.appendixPrompts||null,unlaunchedMap:M.unlaunchedMap||null,prTopicList:M.prTopicList||null,monthlyVis:M.monthlyVis||null,weeklyPR:M.weeklyPR||null,weeklyPRLabels:M.weeklyPRLabels||null,monthlyPR:M.monthlyPR||null,monthlyPRLabels:M.monthlyPRLabels||null,weeklyBrandPrompt:M.weeklyBrandPrompt||null,weeklyBrandPromptLabels:M.weeklyBrandPromptLabels||null,monthlyBrandPrompt:M.monthlyBrandPrompt||null,monthlyBrandPromptLabels:M.monthlyBrandPromptLabels||null,dotcomTrend:M.dotcomTrend||null,dotcomTrendMonths:M.dotcomTrendMonths||null}),setTimeout(on,250)},100),ot(y.join(`
`)),$t("ok"),Ct(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const tt={};M.productsPartial&&(tt.products=M.productsPartial.map(X=>{var jt;const pt=((jt=M.weeklyMap)==null?void 0:jt[X.id])||[],ht=X.vsComp>0?X.score/X.vsComp*100:100,q=pt.find(Kt=>Kt!=null&&Kt>0),W=X.prev!=null&&X.prev>0?X.prev:q||0,Qt=W>0?[W,X.score]:[];return{...X,prev:W,weekly:pt,monthly:Qt,compRatio:Math.round(ht),status:ht>=100?"lead":ht>=80?"behind":"critical"}})),M.productsCnty&&(tt.productsCnty=M.productsCnty),M.citations&&(tt.citations=M.citations),M.citationsCnty&&(tt.citationsCnty=M.citationsCnty);try{await ao(tt)}catch{}Ct("동기화 + 번역 완료!")}}catch(M){y.push(`[ERROR] ${M.message}`),$t("error"),Ct(M.message),ot(y.join(`
`))}finally{Bt(!1),setTimeout(()=>{$t(null),Ct("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:gt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:R},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:R},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Sr,{...en||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:R},children:"Google Sheets URL"}),r.jsx("input",{value:vt,onChange:a=>Ft(a.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ut,fontSize:11,padding:"7px 9px",marginBottom:8,color:vt?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:dn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Et?"wait":"pointer",background:Et?"#1E293B":gt,fontSize:12,fontWeight:700,color:Et?"#94A3B8":"#FFFFFF",fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(co,{size:13,style:{animation:Et?"spin 1s linear infinite":"none"}}),Et?"동기화 중...":"구글 시트 동기화"]}),(Tt||Et&&Ut)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.6,background:Tt==="ok"?"#14532D":Tt==="error"?"#450A0A":"#1E293B",color:Tt==="ok"?"#86EFAC":Tt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Tt==="ok"?"#22C55E33":Tt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Ut}),Vt&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Vt,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Vt).then(()=>{const a=document.getElementById("vis-debug-copy-btn");a&&(a.textContent="복사됨!",setTimeout(()=>{a.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(Jr,{url:vt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:an,disabled:At,style:{width:"100%",padding:"9px 0",background:At?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:R,cursor:At?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:At?.6:1},children:[r.jsx(pn,{size:13})," ",At?"번역 중...":"AI 번역 (EN)"]}),st&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:R},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>bt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:R,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:ao,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:ln,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(un,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Nt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"발행 월"}),r.jsx("select",{value:de,onChange:a=>Qo(a.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:tn.map(a=>r.jsxs("option",{value:a,children:[a," · ",Ce(a),ge.find(y=>y.month===a)?" ✓ 게시됨":""]},a))})]}),Nt&&lt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",ft||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:et||"",onChange:a=>lt(a.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",ft||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(a=>r.jsx("option",{value:a,children:a},a))]}),et&&r.jsx("button",{onClick:()=>lt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:nn,disabled:Rt,style:{width:"100%",padding:"9px 0",background:Rt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Rt?"#94A3B8":"#FFFFFF",fontFamily:R,cursor:Rt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(po,{size:12}),Rt?"게시 중...":Nt?`${Ce(de)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:R,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Zt,onChange:a=>Xo(a.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:rn,disabled:wt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:wt?"#1E293B":"#166534",color:wt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,cursor:wt?"wait":"pointer",marginBottom:6},children:[r.jsx(po,{size:12}),wt?"통합 게시 중...":"통합 대시보드 게시"]}),ce&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:ce.startsWith("ERROR")?"#450A0A":"#14532D",color:ce.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:ce.startsWith("ERROR:")?ce.slice(6):ce})]})]}),r.jsxs("button",{onClick:async()=>{const a={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(a).some(Q=>Q.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const mt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:a})})).json();mt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(mt.error||""))}catch(Q){alert("아카이빙 실패: "+Q.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(fn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Dt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:Dt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Dt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Dt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Dt.startsWith("ERROR:")?Dt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(ze,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[Dt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Nt&&(ie==null?void 0:ie.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>io(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:ie.urls.ko},{label:"EN",url:ie.urls.en}].map(({label:a,url:y})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[a,": ",y]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${y}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(ze,{size:10})})]},a)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:ie.ts?new Date(ie.ts).toLocaleString("ko-KR"):""})]}),Nt&&ge.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ge.length,")"]})}),ge.map(a=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R},children:Ce(a.month)}),r.jsx("button",{onClick:()=>{confirm(`${Ce(a.month)} 게시본을 삭제할까요?`)&&io(a.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:a.urls.ko},{label:"EN",url:a.urls.en}].map(({label:y,url:Q})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:Q,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[y,": ",Q]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${Q}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(ze,{size:10})})]},y)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:a.ts?new Date(a.ts).toLocaleString("ko-KR"):""})]},a.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:a=>o(y=>({...y,reportType:a.target.value})),style:{...ut,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:a=>o(y=>({...y,reportNo:a.target.value})),style:{...ut}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:a=>o(y=>({...y,period:a.target.value})),style:{...ut}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:a=>o(y=>({...y,title:a.target.value})),rows:4,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:a=>o(y=>({...y,team:a.target.value})),style:{...ut,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:a=>o(y=>({...y,dateLine:a.target.value})),style:{...ut,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Notice"}),r.jsx("button",{onClick:()=>o(a=>({...a,showNotice:!a.showNotice})),style:{background:e.showNotice?gt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:a=>o(y=>({...y,noticeText:a.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(a=>({...a,showKpiLogic:!a.showKpiLogic})),style:{background:e.showKpiLogic?gt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:a=>o(y=>({...y,kpiLogicText:a.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:R,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:a=>o(y=>({...y,titleFontSize:Number(a.target.value)})),style:{width:"100%",accentColor:gt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:a=>o(y=>({...y,titleColor:a.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:R},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([a,y])=>r.jsx("button",{onClick:()=>o(Q=>({...Q,titleColor:a})),title:y,style:{width:16,height:16,borderRadius:"50%",background:a,border:e.titleColor===a?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},a))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:a,label:y})=>r.jsx("button",{onClick:()=>o(Q=>({...Q,[a]:!Q[a]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[a]?gt:"#1E293B",color:e[a]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:y},a))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?gt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(a=>({...a,trendMode:(a.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?gt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(a=>({...a,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?gt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,monthlyReportBody:"⏳ AI 생성 중..."}));const a=await St("monthlyReportBody",{products:ct().products,productsCnty:ct().productsCnty,total:ct().total,citations:ct().citations,todoText:e.todoText||"",period:e.period||""},P);o(y=>({...y,monthlyReportBody:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,monthlyReportBody:`[AI 실패: ${a.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:a=>o(y=>({...y,monthlyReportBody:a.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:R},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,totalInsight:"⏳ AI 생성 중..."}));const a=await St("totalInsight",{products:ct().products,productsCnty:ct().productsCnty,total:ct().total,todoText:e.todoText||""},P);o(y=>({...y,totalInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,totalInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:a=>o(y=>({...y,totalInsight:a.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productInsight:"⏳ AI 생성 중..."}));const a=await St("product",{products:ct().products,total:ct().total},P);o(y=>({...y,productInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,productInsight:`[AI 실패: ${a.message}]

`+Ur(ct().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showProductInsight:!a.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?gt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:a=>o(y=>({...y,productInsight:a.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"제품별 GEO Visibility"},P);o(y=>({...y,productHowToRead:a}))}catch{o(a=>({...a,productHowToRead:Hr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showProductHowToRead:!a.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?gt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:a=>o(y=>({...y,productHowToRead:a.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyInsight:"⏳ AI 생성 중..."}));const a=await St("cnty",{productsCnty:ct().productsCnty},P);o(y=>({...y,cntyInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,cntyInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCntyInsight:!a.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?gt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:a=>o(y=>({...y,cntyInsight:a.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"국가별 GEO Visibility"},P);o(y=>({...y,cntyHowToRead:a}))}catch{o(a=>({...a,cntyHowToRead:Wr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCntyHowToRead:!a.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?gt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:a=>o(y=>({...y,cntyHowToRead:a.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:a=>o(y=>({...y,prNotice:a.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:a=>o(y=>({...y,prTopicDescsRaw:a.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:a=>o(y=>({...y,prTopicPromptsRaw:a.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:a=>o(y=>({...y,bpNotice:a.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationInsight:"⏳ AI 생성 중..."}));const a=await St("citation",{citations:ct().citations},P);o(y=>({...y,citationInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,citationInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitationInsight:!a.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?gt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:a=>o(y=>({...y,citationInsight:a.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"Citation 도메인별 현황"},P);o(y=>({...y,citationHowToRead:a}))}catch{o(a=>({...a,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitationHowToRead:!a.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?gt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:a=>o(y=>({...y,citationHowToRead:a.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainInsight:"⏳ AI 생성 중..."}));const a=await St("citDomain",{citationsCnty:ct().citationsCnty},P);o(y=>({...y,citDomainInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,citDomainInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitDomainInsight:!a.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?gt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:a=>o(y=>({...y,citDomainInsight:a.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"도메인별 Citation 현황"},P);o(y=>({...y,citDomainHowToRead:a}))}catch{o(a=>({...a,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitDomainHowToRead:!a.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?gt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:a=>o(y=>({...y,citDomainHowToRead:a.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyInsight:"⏳ AI 생성 중..."}));const a=await St("citCnty",{citationsCnty:ct().citationsCnty},P);o(y=>({...y,citCntyInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,citCntyInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitCntyInsight:!a.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?gt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:a=>o(y=>({...y,citCntyInsight:a.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"국가별 Citation 도메인"},P);o(y=>({...y,citCntyHowToRead:a}))}catch{o(a=>({...a,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitCntyHowToRead:!a.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?gt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:a=>o(y=>({...y,citCntyHowToRead:a.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdInsight:"⏳ AI 생성 중..."}));const a=await St("citPrd",{citationsCnty:ct().citationsCnty},P);o(y=>({...y,citPrdInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,citPrdInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitPrdInsight:!a.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?gt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:a=>o(y=>({...y,citPrdInsight:a.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"제품별 Citation"},P);o(y=>({...y,citPrdHowToRead:a}))}catch{o(a=>({...a,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showCitPrdHowToRead:!a.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?gt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:a=>o(y=>({...y,citPrdHowToRead:a.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),f.length>0&&(()=>{const a=[...new Set(T.productsCnty.map(y=>y.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:a.map(y=>{const Q=(e.cntyProductFilter||{})[y]!==!1;return r.jsx("button",{onClick:()=>o(mt=>({...mt,cntyProductFilter:{...mt.cntyProductFilter||{},[y]:!Q}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:Q?"#166534":"#1E293B",color:Q?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:y},y)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomInsight:"⏳ AI 생성 중..."}));const a=await St("dotcom",{dotcom:ct().dotcom},P);o(y=>({...y,dotcomInsight:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,dotcomInsight:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showDotcomInsight:!a.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?gt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:a=>o(y=>({...y,dotcomInsight:a.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomHowToRead:"⏳ AI 생성 중..."}));const a=await St("howToRead",{section:"닷컴 Citation"},P);o(y=>({...y,dotcomHowToRead:a}))}catch{o(y=>({...y,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showDotcomHowToRead:!a.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?gt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:a=>o(y=>({...y,dotcomHowToRead:a.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:a=>o(y=>({...y,todoNotice:a.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(y=>({...y,todoText:"⏳ AI 생성 중..."}));const a=await St("todo",{products:ct().products},P);o(y=>({...y,todoText:a}))}catch(a){console.error("[AI]",a),o(y=>({...y,todoText:`[AI 실패: ${a.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(kt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(a=>({...a,showTodo:!a.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?gt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:a=>o(y=>({...y,todoText:a.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:sn,style:{width:"100%",padding:"9px 0",background:L?"#14532D":"transparent",border:`1px solid ${L?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:L?"#86EFAC":"#64748B",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:L?r.jsxs(r.Fragment,{children:[r.jsx(We,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(_o,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:rt,onChange:a=>nt(a.target.value),placeholder:"recipient@example.com",style:{...ut,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:cn,disabled:V==="sending"||!rt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:V==="sending"||!rt.trim()?"not-allowed":"pointer",background:V==="ok"?"#14532D":V==="error"?"#7F1D1D":V==="sending"?"#1E3A5F":rt.trim()?"#1D4ED8":"#1E293B",color:V==="ok"?"#86EFAC":V==="error"?"#FCA5A5":rt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:V==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(co,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):V==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(We,{size:12})," 발송 완료!"]}):V==="error"?r.jsxs(r.Fragment,{children:[r.jsx(uo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(uo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:R,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const fe="monthly-report",No="geo-monthly-report-cache";function Xr({meta:t,total:e,products:o,citations:i,dotcom:l,productsCnty:n=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:d,categoryStats:m,stakeholderStats:h}){const c=K.useRef(null),g=K.useMemo(()=>Ze(t,e,o,i,l,s,n,u,{categoryStats:m,stakeholderStats:h}),[t,e,o,i,l,s,n,u,d]);return bn.useEffect(()=>{const p=c.current;if(!p)return;const x=p.contentDocument||p.contentWindow.document;x.open(),x.write(g),x.close();const f=()=>{try{x.body.style.overflow="hidden",x.documentElement.style.overflow="hidden";const E=x.documentElement.scrollHeight;E&&(p.style.height=E+20+"px")}catch{}};setTimeout(f,150),setTimeout(f,400),setTimeout(f,1e3),setTimeout(f,2e3)},[g]),r.jsx("iframe",{ref:c,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Zr({meta:t,total:e,products:o,citations:i,dotcom:l,productsCnty:n=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:d,categoryStats:m,stakeholderStats:h}){const[c,g]=K.useState(!1),p=K.useMemo(()=>Ze(t,e,o,i,l,s,n,u,{categoryStats:m,stakeholderStats:h}),[t,e,o,i,l,s,n,u,d,m]);async function x(){try{await navigator.clipboard.writeText(p)}catch{const f=document.createElement("textarea");f.value=p,document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f)}g(!0),setTimeout(()=>g(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:R,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:x,style:{padding:"6px 14px",borderRadius:7,border:"none",background:c?"#14532D":gt,color:c?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:c?r.jsxs(r.Fragment,{children:[r.jsx(We,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(_o,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:p})})]})}function Qr(){const t=K.useRef(Un(No)).current,[e,o]=K.useState({...Se,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,l]=K.useState({...Se,...(t==null?void 0:t.metaEn)??{}}),[n,u]=K.useState((t==null?void 0:t.total)??Mn),[s,d]=K.useState((t==null?void 0:t.products)??Nn),[m,h]=K.useState((t==null?void 0:t.citations)??Gn),[c,g]=K.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:_n),[p,x]=K.useState((t==null?void 0:t.productsCnty)??On),[f,E]=K.useState((t==null?void 0:t.citationsCnty)??zn),[v,C]=K.useState((t==null?void 0:t.weeklyLabels)??null),[T,P]=K.useState((t==null?void 0:t.weeklyAll)??{}),[$,D]=K.useState(null),[B,O]=K.useState(null),[z,w]=K.useState("preview"),[A,k]=K.useState("ko"),[F,j]=K.useState([]),[b,S]=K.useState(""),[N,I]=K.useState(!1),[_,Y]=K.useState(""),[et,lt]=K.useState(null),[ft,dt]=K.useState(!0);K.useEffect(()=>{let ot=!1;const L=tr(e.period)||"3월";async function G(){var rt,nt,V;try{const it=await fetch("/api/tracker-snapshot-v2"),st=it.ok?await it.json():null;if(st!=null&&st.ok&&((V=(nt=(rt=st.data)==null?void 0:rt.quantitativeGoals)==null?void 0:nt.rows)!=null&&V.length)){const bt=xo(st.data,L),At=wo(st.data,L);if(bt!=null&&bt.length&&!ot){D(bt),At!=null&&At.length&&O(At);return}}}catch{}try{const[{parseKPISheet:it},st]=await Promise.all([Ve(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ve(()=>import("./xlsx-2l-k0XfJ.js").then(Zt=>Zt.x),__vite__mapDeps([0,1]))]),bt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,At=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${bt}&headers=1`,Xt=await fetch(At,{cache:"no-store"});if(!Xt.ok)return;const Rt=await Xt.text(),re=st.read(Rt,{type:"string"}),Dt=re.Sheets[re.SheetNames[0]],Mt=st.utils.sheet_to_json(Dt,{header:1,defval:""}),wt=it(Mt),It=xo(wt,L);if(It!=null&&It.length&&!ot){D(It);const Zt=wo(wt,L);Zt!=null&&Zt.length&&O(Zt)}}catch{}}return G(),()=>{ot=!0}},[e.period]);const ct=A==="en"?i:e,vt=A==="en"?l:o,Ft=K.useMemo(()=>Ee(s,p,m,f,A),[s,p,m,f,A]);K.useEffect(()=>{Wn(fe).then(j)},[]);const Et=K.useRef(null);function Bt(ot,L=2e3){clearTimeout(Et.current),Y(ot),Et.current=setTimeout(()=>Y(""),L)}K.useEffect(()=>()=>clearTimeout(Et.current),[]);const Tt=K.useRef(!1);K.useEffect(()=>{let ot=!1;return $e(fe).then(L=>{ot||!L||(Tt.current=!0,L.meta&&o(G=>({...G,...L.meta})),L.total&&u(G=>({...G,...L.total})),L.citations&&h(L.citations),L.dotcom&&g(G=>({...G,...L.dotcom})),L.productsCnty&&x(L.productsCnty),L.citationsCnty&&E(L.citationsCnty),L.weeklyLabels&&C(L.weeklyLabels),L.weeklyAll&&P(G=>({...G,...L.weeklyAll})),L.productsPartial?d(L.productsPartial.map(G=>{var V;const rt=((V=L.weeklyMap)==null?void 0:V[G.id])||[],nt=G.vsComp>0?G.score/G.vsComp*100:100;return{...G,weekly:rt,monthly:[],compRatio:Math.round(nt),status:nt>=100?"lead":nt>=80?"behind":"critical"}})):L.weeklyMap&&d(G=>G.map(rt=>{var V;const nt=(V=L.weeklyMap)==null?void 0:V[rt.id];return nt?{...rt,weekly:nt}:rt})))}),()=>{ot=!0}},[]),K.useEffect(()=>{Hn(No,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:c,productsCnty:p,citationsCnty:f,weeklyLabels:v,weeklyAll:T})},[e,i,n,s,m,c,p,f,v,T]);async function $t(){if(!et)return;const L=await Kn(fe,et,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:c,productsCnty:p,citationsCnty:f,weeklyLabels:v,weeklyAll:T});L&&j(L),Bt(L?"저장 완료!":"저장 실패")}async function Ut(){var G;const ot=b.trim()||`${ct.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,L=await Vn(fe,ot,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:c,productsCnty:p,citationsCnty:f,weeklyLabels:v,weeklyAll:T});L&&(j(L),S(""),lt(((G=L[0])==null?void 0:G.ts)||null)),Bt(L?"새로 저장 완료!":"저장 실패")}function Ct(ot){const L=ot.data;o({...Se,...L.metaKo||L.meta||{}}),l({...Se,...L.metaEn||{}}),L.total&&u(L.total),L.products&&d(L.products),L.citations&&h(L.citations),L.dotcom&&g(L.dotcom),L.productsCnty&&x(L.productsCnty),L.citationsCnty&&E(L.citationsCnty),L.weeklyLabels&&C(L.weeklyLabels),L.weeklyAll&&P(L.weeklyAll),lt(ot.ts),Bt(`"${ot.name}" 불러옴`)}async function Vt(ot){const L=F[ot];if(!L)return;const G=await qn(fe,L.ts);G&&j(G),et===L.ts&&lt(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:R},children:[ft&&r.jsx(Yr,{mode:fe,meta:ct,setMeta:vt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:l,total:n,setTotal:u,products:s,setProducts:d,citations:m,setCitations:h,dotcom:c,setDotcom:g,productsCnty:p,setProductsCnty:x,citationsCnty:f,setCitationsCnty:E,resolved:Ft,previewLang:A,setPreviewLang:k,snapshots:F,setSnapshots:j,setWeeklyLabels:C,setWeeklyAll:P,weeklyLabels:v,weeklyAll:T,generateHTML:Ze}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>dt(ot=>!ot),title:ft?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:ft?r.jsx(hn,{size:16}):r.jsx(gn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:ot,tab:L,lang:G,label:rt})=>{const nt=L==="code"?z==="code":z==="preview"&&A===G;return r.jsx("button",{onClick:()=>{w(L),G&&k(G)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:nt?"#1E293B":"transparent",color:nt?"#FFFFFF":"#475569",fontSize:11,fontWeight:nt?700:500,fontFamily:R,cursor:"pointer"},children:rt},ot)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[_&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:R},children:_}),r.jsxs("button",{onClick:$t,disabled:!et,title:et?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:et?"pointer":"default",background:et?"#1D4ED8":"#1E293B",color:et?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4,opacity:et?1:.5},children:[r.jsx(fo,{size:11})," 저장"]}),r.jsx("input",{value:b,onChange:ot=>S(ot.target.value),placeholder:"버전 이름...",onKeyDown:ot=>ot.key==="Enter"&&Ut(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none"}}),r.jsxs("button",{onClick:Ut,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(fo,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>I(!N),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:N?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(yn,{size:11})," 불러오기 ",F.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",F.length,")"]})]}),N&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:ot=>ot.stopPropagation(),children:F.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:R,textAlign:"center"},children:"저장된 버전이 없습니다"}):F.map((ot,L)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:et===ot.ts?"#1E3A5F":"#0F172A",border:et===ot.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:ot.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:new Date(ot.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{Ct(ot),I(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R},children:"적용"}),r.jsx("button",{onClick:()=>Vt(L),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(mn,{size:10})})]},ot.ts))})]})]})]}),z==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:r.jsx(Xr,{meta:ct,total:n,products:Ft.products,citations:Ft.citations,dotcom:c,productsCnty:Ft.productsCnty,citationsCnty:Ft.citationsCnty,lang:A,weeklyLabels:v,categoryStats:$,stakeholderStats:B})})}):r.jsx(Zr,{meta:ct,total:n,products:Ft.products,citations:Ft.citations,dotcom:c,productsCnty:Ft.productsCnty,citationsCnty:Ft.citationsCnty,lang:A,weeklyLabels:v,categoryStats:$,stakeholderStats:B}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:["v","3.1.9"]})})]})]})}xn.createRoot(document.getElementById("root")).render(r.jsx(Qr,{}));
