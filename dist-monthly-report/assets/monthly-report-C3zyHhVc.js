const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DDJ6sQze.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as r,b as W,R as Je,L as Uo,D as Wo,G as Ye,A as Vo,c as Xe,S as At,C as Ie,d as So,e as Ze,P as Ko,f as qo,h as Qe,F as Jo,T as Yo,i as Xo}from"./react-BzJiA2Qb.js";import{R as Zo}from"./react-dom-Dkh9X5ZJ.js";import{a as vt}from"./xlsx-DDJ6sQze.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const Qo="modulepreload",tn=function(t){return"/admin/monthly-report/"+t},to={},eo=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let u=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=u(o.map(v=>{if(v=tn(v),v in to)return;to[v]=!0;const p=v.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${b}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":Qo,p||(f.as="script"),f.crossOrigin="",f.href=v,l&&f.setAttribute("nonce",l),document.head.appendChild(f),p)return new Promise((d,y)=>{f.addEventListener("load",d),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function n(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return a.then(u=>{for(const s of u||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},z="'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",en=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function Ce(t){const e=en.indexOf(t);return e>=0?e:999}function ft(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const oo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Pe(t){return oo.filter(e=>t.includes(e)).concat(t.filter(e=>!oo.includes(e)))}const on={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Ne(t){return on[String(t||"").trim().toUpperCase()]||t}function Vt(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Ae(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function ke(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ne(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function nn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function rn(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},a=["MS","HS","ES"],u=a.filter(s=>t[s]).concat(Object.keys(t).filter(s=>!a.includes(s))).map(s=>{const l=t[s],v=(e||{})[s],p=l.comp>0?Math.round(l.lg/l.comp*100):100,b=ne(l.lg,l.comp)||"#FFFFFF",f=v&&v.lg!=null?Ae(l.lg,v.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};font-weight:700;text-align:center;background:#F5F5F5;">${ft(s)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${b};">${Vt(l.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${b};">${Vt(l.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${b};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${f}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function an(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=Pe(Object.keys(t)).map(u=>{const s=t[u],l=(e||{})[u],v=s.comp>0?Math.round(s.lg/s.comp*100):100,p=ne(s.lg,s.comp)||"#FFFFFF",b=l&&l.lg!=null?Ae(s.lg,l.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};font-weight:700;text-align:center;background:#F5F5F5;">${ft(Ne(u))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${p};">${Vt(s.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${p};">${Vt(s.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${p};">${v}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${b}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function sn(t,e,o,i){const a=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(h=>{h.country&&h.product&&(n[`${h.country}|${h.product}`]=h.score)});const u={},s=new Set,l=new Set;(t||[]).forEach(h=>{!h.country||h.country==="TTL"||h.country==="TOTAL"||!h.product||(s.add(h.country),l.add(h.product),u[h.product]||(u[h.product]={}),u[h.product][h.country]=h)});const v=Pe(Array.from(s)),p=Array.from(l).sort((h,E)=>Ce(h)-Ce(E));if(!p.length||!v.length)return`<p style="font-size:11px;color:#666;font-family:${z};">데이터가 없습니다.</p>`;const b={};(i||[]).forEach(h=>{[h.kr,h.category,h.id,h.en].filter(Boolean).forEach(F=>{b[F]=h})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+v.map(h=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${ft(Ne(h))}</th>`).join(""),y=[];return p.forEach((h,E)=>{const F=E%2===0?"#FFFFFF":"#FAFAFA",x=b[h],C=(x?ne(x.score,x.vsComp):null)||F,S=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${C};">${x?Vt(x.score):"—"}</td>`,m=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${C};">${x?ke(x.score,x.vsComp):"—"}</td>`,k=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;background:${C};color:#1A1A1A;font-weight:600;">${x!=null&&x.compName?ft(x.compName):"—"}</td>`,B=v.map(j=>{var M;const N=(M=u[h])==null?void 0:M[j],R=(N?ne(N.score,N.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${R};">${N?Vt(N.score):"—"}</td>`}).join(""),A=v.map(j=>{var M;const N=(M=u[h])==null?void 0:M[j],R=(N?ne(N.score,N.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;font-weight:700;background:${R};">${N?ke(N.score,N.compScore):"—"}</td>`}).join(""),T=v.map(j=>{var M;const N=(M=u[h])==null?void 0:M[j],R=(N?ne(N.score,N.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${z};text-align:center;background:${R};color:#1A1A1A;font-weight:600;">${N!=null&&N.compName?ft(N.compName):"—"}</td>`}).join("");y.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${z};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${ft(h)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${S}${B}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${m}${A}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${z};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${k}${T}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>
      ${y.join("")}
    </tbody>
  </table>
  </div>`}function ln(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},a={};(e||[]).forEach(l=>{l.id&&(a[l.id]=l.score)});const n=["MS","HS","ES"],u={};(t||[]).forEach(l=>{const v=l.bu||"OTHER";u[v]||(u[v]=[]),u[v].push(l)});const s=[];return n.forEach(l=>{const v=(u[l]||[]).slice().sort((p,b)=>Ce(p.kr||p.category||p.id)-Ce(b.kr||b.category||b.id));v.forEach((p,b)=>{const f=p.prev!=null&&p.prev>0?p.prev:a[p.id],d=Ae(p.score,f),y=ne(p.score,p.vsComp)||"#FFFFFF";s.push(`<tr>
        ${b===0?`<td rowspan="${v.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${l}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${ft(p.kr||p.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${y};">${Vt(p.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${y};">${Vt(p.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;background:${y};">${ft(p.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;font-weight:700;background:${y};">${ke(p.score,p.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${z};text-align:center;">${d}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
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
  </table>`}function cn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,u)=>n+(u.score||0),0),a=t.map((n,u)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;">${u+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${ft(n.source||n.category||"")}</td>
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
    <tbody>${a}</tbody>
  </table>`}function dn(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,l)=>(l.citations||0)-(s.citations||0));const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,l)=>s+(l.citations||0),0),u=i.map((s,l)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;">${l+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${ft(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};">${ft(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function pn(t,e){const o={};(t||[]).forEach(s=>{!s.cnty||s.cnty==="TTL"||s.cnty==="TOTAL"||(o[s.cnty]||(o[s.cnty]=[]),o[s.cnty].push(s))});const i=Pe(Object.keys(o));if(!i.length)return"";const a=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,u=i.map(s=>{const l=o[s].sort((f,d)=>(d.citations||0)-(f.citations||0)),v=l.reduce((f,d)=>f+(d.citations||0),0),p=l.slice(0,n),b=[];for(let f=0;f<n;f++){const d=p[f],y=d?nn(d.domain):null,h=y?`background:${y.bg};`:"",E=y?`color:${y.color};font-weight:700;`:"";b.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${z};${h}${E}">${d?`${ft(d.domain||"")} <span style="color:#666;font-weight:400;">(${(d.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};font-weight:700;background:#F5F5F5;text-align:center;">${ft(Ne(s))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${v.toLocaleString("en-US")}</td>
      ${b.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${z};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${a.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${a.total}</th>
      ${Array.from({length:n},(s,l)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${l+1}</th>`).join("")}
    </tr></thead>
    <tbody>${u}</tbody>
  </table>
  </div>`}function un(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(s=>o[s]!=null);if(!a.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},u=a.map(s=>{const l=o[s]||0,v=i[s]||0,p=l-v,b=p>0?"LG":p<0?"SS":"=",f=p>0?"#86EFAC":p<0?"#FCA5A5":"#FFFFFF",d=p>0?"#14532D":p<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${f};color:${d};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};font-weight:${s==="TTL"?"900":"600"};">${ft(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${l.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;">${v.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:right;font-weight:700;">${p>0?"+":""}${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${z};text-align:center;font-weight:900;">${b}</td>
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
    <tbody>${u}</tbody>
  </table>`}function gn(t,e,o){var s;if(!t||!t.length)return"";const i=((s=t[0])==null?void 0:s.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(l){return l>=80?"#D1FAE5":l>=50?"#FEF3C7":"#FEE2E2"}const u=t.map(l=>{const v=(l.monthRate||0).toFixed(0),p=(l.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${z};background:#F5F5F5;">${ft(l.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(l.monthRate)};">${v}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.monthActual||0).toLocaleString()} / ${(l.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(l.progressRate)};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.cumActual||0).toLocaleString()} / ${(l.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${z};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${z};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${u}</tbody>
  </table>`}function hn(t,e){var u;if(!t||!t.length)return"";const o=((u=t[0])==null?void 0:u.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${z};background:#F5F5F5;">${ft(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.monthRate)};">${(s.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.progressRate)};">${(s.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${z};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${z};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Me(t,e,o,i,a={},n="ko",u=[],s=[],l={}){const{productsCntyPrev:v=[],productsPrev:p=[],categoryStats:b=null,stakeholderStats:f=null}=l,d=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",y=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${ft(d)} — ${ft(y)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: italic; src: url('/font/LG%20Smart%20Regular%20Italic.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: italic; src: url('/font/LG%20Smart%20Bold%20Italic.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${z} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${z};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${z};">${ft(d)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${z};">${ft(y)} · ${ft(t.team||"")}</p>
    </div>

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${z};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Vt(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Vt(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${ke(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Ae(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${rn(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${an(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${ln(o,p,n)}
    ${sn(u,v,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${z};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${cn(i,n)}
    ${dn(s,n)}
    ${pn(s,n)}
    ${un(a,n)}

    ${gn(b,n)}
    ${hn(f,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${z};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const dt="#CF0652",L="'LG Smart','Arial Narrow',Arial,sans-serif",be={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,noticeText:"",showNotice:!1,todoText:"",showTodo:!1,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},fn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},yn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],mn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},bn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],xn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],vn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Eo=3;function wn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Eo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Cn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Eo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Te={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ie(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function kn(t){try{const e=await fetch(ie(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Fn(t,e,o){try{const i=await fetch(ie(t).snapshots,{method:"POST",headers:Te,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Sn(t,e,o){try{const i=await fetch(`${ie(t).snapshots}/${e}`,{method:"PUT",headers:Te,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function En(t,e){try{const o=await fetch(`${ie(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Tt(t,e,o="ko",i=""){try{const a=await fetch("/api/generate-insight",{method:"POST",headers:Te,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!a.ok){const u=await a.json().catch(()=>({}));throw new Error(u.error||`HTTP ${a.status}`)}const n=await a.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(a){throw console.error("[API] generateAIInsight failed:",a.message),a}}async function Fe(t){try{const e=await fetch(ie(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function no(t){try{const e=await fetch(ie(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function An(t,e,o={}){const{includeProgressTracker:i=!1,trackerVersion:a="v1",includePromptList:n=!1}=o,[u,s]=await Promise.all([Fe("dashboard").catch(()=>null),Fe("visibility").catch(()=>null)]),l={...u||{},...s||{}};if(u&&Object.keys(u).forEach(R=>{l[R]==null&&u[R]!=null&&(l[R]=u[R])}),s!=null&&s.meta&&(u!=null&&u.meta)&&(l.meta={...u.meta||{},...s.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const v=l.meta||{},p=l.total||{},f=(l.productsPartial||l.products||[]).map(R=>{var K;const M=R.weekly||((K=l.weeklyMap)==null?void 0:K[R.id])||[],U=R.vsComp>0?R.score/R.vsComp*100:100;return{...R,weekly:M,monthly:R.monthly||[],compRatio:R.compRatio||Math.round(U),status:R.status||(U>=100?"lead":U>=80?"behind":"critical")}}),d=l.citations||[],y=l.dotcom||{},h=l.productsCnty||[],E=l.citationsCnty||[],F=l.weeklyLabels||null,x=l.weeklyAll||{},g=l.citationsByCnty||{},C=l.dotcomByCnty||{},S=e(f,h,d,E,"ko"),m=e(f,h,d,E,"en"),k={appendixPrompts:l.appendixPrompts||[],weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},B={monthlyVis:l.monthlyVis||[],includeProgressTracker:i,trackerVersion:a,includePromptList:n},A=t(v,p,S.products,S.citations,y,"ko",S.productsCnty,S.citationsCnty,F,x,g,C,B,k),T=t({...v,title:v.title||"GEO KPI Dashboard"},p,m.products,m.citations,y,"en",m.productsCnty,m.citationsCnty,F,x,g,C,B,k),j=`${v.period||""} ${v.title||"KPI Dashboard"}`.trim(),I=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:j,htmlKo:A,htmlEn:T})})).json();if(!I.ok)throw new Error(I.error||"게시 실패");return I}async function ro(t,e){try{const o=await fetch(ie(t).syncData,{method:"POST",headers:Te,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Tn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Le={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},io={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function we(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Le[n.kr]||n.kr,compName:n.compNameEn||io[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||Tn[n.country]||n.country,product:n.productEn||Le[n.product]||n.product,compName:n.compNameEn||io[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Le[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function $n(t,{from:e="ko",to:o="en"}={}){const a=[];for(let n=0;n<t.length;n+=20){const u=t.slice(n,n+20),s=await Promise.all(u.map(async l=>{if(!l||!l.trim())return l;const v=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(l)}`,p=await fetch(v);if(!p.ok)throw new Error(`번역 실패 (${p.status})`);return(await p.json())[0].map(f=>f[0]).join("")}));a.push(...s)}return a}const re=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Ln=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function xe(t){const e=Ln.indexOf(t);return e>=0?e:999}function Oe(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Ao(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Oe(o)]=o)}),e}function ao(t,e){var l,v,p,b;if(!((l=t==null?void 0:t.quantitativeGoals)!=null&&l.rows))return(p=(v=t==null?void 0:t._dashboard)==null?void 0:v.categoryStats)!=null&&p.length?[...t._dashboard.categoryStats].sort((f,d)=>xe(f.category)-xe(d.category)):null;const o=t.quantitativeGoals.rows,i=Ao((b=t.quantitativeResults)==null?void 0:b.rows);new Date().getMonth()+1;let a=e,n=re.indexOf(a);n<0&&(a="3월",n=0);const u=[...new Set(o.map(f=>f.taskCategory).filter(Boolean))],s=n>0?re[n-1]:null;return u.map(f=>{const d=o.filter(k=>k.taskCategory===f);let y=0,h=0,E=0,F=0,x=0,g=0;d.forEach(k=>{var N,I,R,M,U;const B=Oe(k),A=i[B]||{},T=typeof((N=k.monthly)==null?void 0:N[a])=="number"?k.monthly[a]:0,j=typeof((I=A.monthly)==null?void 0:I[a])=="number"?A.monthly[a]:0;if(h+=T,y+=j,s){const K=typeof((R=k.monthly)==null?void 0:R[s])=="number"?k.monthly[s]:0,Y=typeof((M=A.monthly)==null?void 0:M[s])=="number"?A.monthly[s]:0;g+=K,x+=Y}for(let K=0;K<=n;K++){const Y=re[K];typeof((U=A.monthly)==null?void 0:U[Y])=="number"&&(E+=A.monthly[Y])}re.forEach(K=>{var Y;typeof((Y=k.monthly)==null?void 0:Y[K])=="number"&&(F+=k.monthly[K])})});const C=h>0?Math.round(y/h*1e3)/10:0,S=g>0?Math.round(x/g*1e3)/10:0,m=F>0?Math.round(E/F*1e3)/10:0;return{category:f,taskCount:d.length,targetMonth:a,monthRate:C,prevMonthRate:S,prevMonth:s,progressRate:m,monthActual:y,monthGoal:h,cumActual:E,annualGoal:F}}).sort((f,d)=>xe(f.category)-xe(d.category))}const Bn=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function so(t){const e=Bn.indexOf(t);return e>=0?e:999}function lo(t,e){var s,l;if(!((s=t==null?void 0:t.quantitativeGoals)!=null&&s.rows))return null;const o=t.quantitativeGoals.rows,i=Ao((l=t.quantitativeResults)==null?void 0:l.rows);new Date().getMonth()+1;let a=e,n=re.indexOf(a);return n<0&&(a="3월",n=0),[...new Set(o.map(v=>v.stakeholder).filter(Boolean))].map(v=>{const p=o.filter(F=>F.stakeholder===v);let b=0,f=0,d=0,y=0;p.forEach(F=>{var m,k,B;const x=Oe(F),g=i[x]||{},C=typeof((m=F.monthly)==null?void 0:m[a])=="number"?F.monthly[a]:0,S=typeof((k=g.monthly)==null?void 0:k[a])=="number"?g.monthly[a]:0;f+=C,b+=S;for(let A=0;A<=n;A++){const T=re[A];typeof((B=g.monthly)==null?void 0:B[T])=="number"&&(d+=g.monthly[T])}re.forEach(A=>{var T;typeof((T=F.monthly)==null?void 0:T[A])=="number"&&(y+=F.monthly[A])})});const h=f>0?Math.round(b/f*1e3)/10:0,E=y>0?Math.round(d/y*1e3)/10:0;return{stakeholder:v,taskCount:p.length,targetMonth:a,monthRate:h,monthActual:b,monthGoal:f,progressRate:E,cumActual:d,annualGoal:y}}).sort((v,p)=>so(v.stakeholder)-so(p.stakeholder))}function Rn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}const yt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},ge={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},jn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},co=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],po=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];function In(t,e,o,i,a={}){const n=vt.utils.book_new(),u=vt.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);u["!cols"]=[{wch:24},{wch:50},{wch:40}],vt.utils.book_append_sheet(n,u,"meta");const s=vt.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);s["!cols"]=[{wch:14},{wch:10},{wch:44}],vt.utils.book_append_sheet(n,s,"total");const l=vt.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(y=>[y.id,y.bu,y.kr,y.score,y.prev,y.vsComp,y.compName])]);l["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],vt.utils.book_append_sheet(n,l,"products");const v=vt.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(y=>[y.id,y.kr,...y.weekly])]);v["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],vt.utils.book_append_sheet(n,v,"weekly");const p=vt.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(y=>[y.rank,y.source,y.category,y.score,y.delta,y.ratio??0])]);p["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],vt.utils.book_append_sheet(n,p,"citations");const b=(a==null?void 0:a.lg)||{},f=(a==null?void 0:a.samsung)||{},d=vt.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...co.map(y=>`LG_${y}`),...po.map(y=>`Samsung_${y}`)],[...co.map(y=>b[y]??0),...po.map(y=>f[y]??0)]]);d["!cols"]=Array(15).fill({wch:14}),vt.utils.book_append_sheet(n,d,"dotcom"),vt.writeFile(n,"GEO_Newsletter_템플릿.xlsx")}function Gt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function ve(t){return t==null||String(t).trim()===""?null:Gt(t)}function Pt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Kt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}function ce(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const n=e.match(/(\d{4})/);n&&(a=parseInt(n[1]));const u=e.match(/(\d{1,2})월/);if(u)i=parseInt(u[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)i=o[s[1].toLowerCase()];else{const l=e.match(/\d{4}[-\/](\d{1,2})/);l&&(i=parseInt(l[1]))}}return a?a*12+i:i}function Dn(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const u=String(n[0]).trim(),s=n[1]??"";if(o.includes(u))e[u]=parseInt(s)||(u==="titleFontSize"?24:10);else if(i.includes(u)){const l=String(s).trim().toLowerCase();e[u]=l==="y"||l==="yes"||l==="true"||l==="1"}else e[u]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(u=>u.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},u=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);u&&(e.period=`${n[u[2]]||u[2]} ${u[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const u=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${u[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function Pn(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1;if(t.forEach(I=>{if(!I[0]||String(I[0]).startsWith("[")||String(I[0]).startsWith("※")||I[0]==="key")return;const R=String(I[0]).trim();(o.includes(R)||e.includes(R))&&(a=!0,e.includes(R)?i[R]=parseInt(I[1])||0:i[R]=Gt(I[1]))}),a&&Object.keys(i).length>=2)return{total:i};const n=t.find(I=>I.some(R=>String(R||"").trim().toUpperCase()==="LG")),u=n?n.findIndex(I=>String(I||"").trim().toUpperCase()==="LG"):4,s=n?n.findIndex(I=>{const R=String(I||"").trim().toUpperCase();return R==="SAMSUNG"||R==="SAMSUMG"}):5,l=s>=0?s:u+1,v=n?n.findIndex(I=>/date/i.test(String(I||"").trim())):0,p=n?n.findIndex(I=>/countries|country/i.test(String(I||"").trim())):2,b=n?n.findIndex(I=>/divisions?/i.test(String(I||"").trim())):3,f=[];t.filter(I=>{const R=String(I[v>=0?v:0]||"").trim();return R&&!R.startsWith("[")&&!R.startsWith("※")&&!/^date$/i.test(R)&&!/^key$/i.test(R)}).forEach(I=>{const R=String(I[v>=0?v:0]||"").trim(),M=Kt(I[p>=0?p:2]),U=String(I[b>=0?b:3]||"").trim().toUpperCase(),K=Gt(I[u]),Y=Gt(I[l]);R&&K>0&&f.push({date:R,country:M,division:U,lg:K,comp:Y})});const y=f.filter(I=>(I.country==="TOTAL"||I.country==="TTL")&&(I.division==="TOTAL"||I.division==="TTL"||I.division===""));y.sort((I,R)=>ce(I.date)-ce(R.date));const h=y[y.length-1],E=y.length>=2?y[y.length-2]:null;if(!h){const I=t.find(K=>K.some(Y=>String(Y||"").trim().toUpperCase()==="TOTAL"));if(!I)return{};const R=Gt(I[u]),M=Gt(I[l]),U={total:{score:R,prev:R,vsComp:M,rank:R>=M?1:2,totalBrands:12}};return f.length&&(U.monthlyVis=f),U}const F=h.lg,x=h.comp,g=E?E.lg:F,C=h.date,S=E?E.date:null;function m(I){const R={};return f.filter(M=>M.date===I&&(M.country==="TOTAL"||M.country==="TTL")&&M.division&&M.division!=="TOTAL"&&M.division!=="TTL"&&M.division!=="").forEach(M=>{R[M.division]={lg:M.lg,comp:M.comp}}),R}const k=m(C),B=S?m(S):{};function A(I){const R={};return f.filter(M=>M.date===I&&M.country&&M.country!=="TOTAL"&&M.country!=="TTL"&&(M.division==="TOTAL"||M.division==="TTL"||M.division==="")).forEach(M=>{R[M.country]={lg:M.lg,comp:M.comp}}),R}const T=A(C),j=S?A(S):{},N={total:{score:F,prev:g,vsComp:x,rank:F>=x?1:2,totalBrands:12},...Object.keys(k).length?{buTotals:k}:{},...Object.keys(B).length?{buTotalsPrev:B}:{},...Object.keys(T).length?{countryTotals:T}:{},...Object.keys(j).length?{countryTotalsPrev:j}:{}};return C&&(N.derivedPeriod=C),f.length&&(N.monthlyVis=f),N}function Nn(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((a,n)=>n>=1&&String(a||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),uo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),uo(t,e)}function uo(t,e){const o=t[e],i=o.findIndex((p,b)=>b>=3&&String(p||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=[];for(let p=4;p<o.length;p++){const b=String(o[p]||"").trim();b&&b.toUpperCase()!=="LG"&&a.push({name:b,col:p})}const n=t.slice(e+1).filter(p=>{const b=String(p[0]||"").trim();return b&&!b.startsWith("[")&&!b.startsWith("※")}),u={},s={};n.forEach(p=>{const b=String(p[0]||"").trim(),f=String(p[1]||"").trim(),d=String(p[2]||"").trim(),y=Kt(p[2])||d,h=String(p[3]||"").trim(),E=Gt(p[i]),F=a.map(S=>({name:S.name,score:Gt(p[S.col])})).filter(S=>S.score>0),x=[...F].sort((S,m)=>m.score-S.score)[0]||{name:"",score:0},g=+(E-x.score).toFixed(2),C={LG:E};if(F.forEach(S=>{C[S.name]=S.score}),y==="TTL"||y==="TOTAL"){const S=ge[h]||h.toLowerCase(),m=jn[h]||h;u[S]||(u[S]=[]),u[S].push({id:S,bu:b,kr:m,category:h,date:f,score:E,vsComp:x.score,compName:x.name,allScores:C})}else{const S=`${h}|${y}`;s[S]||(s[S]=[]),s[S].push({product:h,country:y,date:f,score:E,compName:x.name,compScore:x.score,gap:g,allScores:C})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(u).join(", ")||"없음"} / 국가별: ${Object.keys(s).length}건`);const l=[];for(const[p,b]of Object.entries(u)){b.sort((h,E)=>ce(h.date)-ce(E.date));const f=b[b.length-1],d=b.length>=2?b[b.length-2].score:null;console.log(`[parseProductCnty] ${p}: dates=[${b.map(h=>h.date).join(",")}] score=${f.score} prev=${d} vsComp=${f.vsComp}`);const y=b.map(h=>({date:h.date,score:h.score,comp:h.vsComp,allScores:h.allScores}));l.push({...f,prev:d,monthlyScores:y})}const v=[];for(const p of Object.values(s)){p.sort((d,y)=>ce(d.date)-ce(y.date));const b=p[p.length-1],f=p.length>=2?p[p.length-2].score:null;v.push({...b,prev:f})}return{...l.length?{productsPartial:l}:{},...v.length?{productsCnty:v}:{}}}function To(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const n=[];for(const u of t[a]||[]){const s=String(u||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Be={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function go(t,e){var y;const o=e?Be[e]||{}:{...Be.MS,...Be.ES};if(!Object.keys(o).length)return{};const i=t.findIndex(h=>h.some(E=>String(E||"").trim()in o));if(i<0)return{};const a=t[i],n=t.findIndex((h,E)=>E>i&&h.some(F=>String(F||"").trim()==="TTL")),u=n>0?n+1:Math.min(i+20,t.length);let s=-1,l=-1;for(let h=i+1;h<u;h++){const E=t[h];if(!E.some(g=>String(g||"").trim().toUpperCase()==="LG"))continue;if(l<0&&(l=h),E.some(g=>{const C=String(g||"").trim().toLowerCase().replace(/[\s_-]/g,"");return C==="nonbrand"||C==="nb"})){s=h;break}}const v=s>=0?s:l>=0?l:n;if(v<0)return{};const p=t[v],b={},f=Object.keys(o).map(h=>a.findIndex(E=>String(E||"").trim()===h)).filter(h=>h>=0).sort((h,E)=>h-E);for(const[h,E]of Object.entries(o)){const F=a.findIndex(C=>String(C||"").trim()===h);if(F<0)continue;const x=f.find(C=>C>F)||F+20,g=[];for(let C=F+1;C<x&&C<p.length;C++){const S=Gt(p[C]);S>0&&g.push(S)}g.length&&(b[E]=g)}if(!Object.keys(b).length)return{};const d=To(t,i,u)||((y=Object.values(b)[0])==null?void 0:y.map((h,E)=>`W${E+1}`))||[];return{weeklyMap:b,weeklyLabels:d}}function Mn(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[n,u]of Object.entries(a))a[n]=u.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function Re(t,e){const o={};let i=[],a=-1;for(let m=0;m<Math.min(t.length,10);m++){const k=t[m];if(!k)continue;let B=0;for(let A=0;A<k.length;A++)/^w\d+$/i.test(String(k[A]||"").trim())&&B++;if(B>=2){a=m;break}}let n=t.findIndex(m=>{const k=m.slice(0,5).map(B=>String(B||"").trim().toLowerCase());return k.includes("category")||k.includes("product")});if(n<0&&a>=0&&(n=a),n<0&&(n=t.findIndex(m=>{let k=!1,B=0;for(let A=0;A<Math.min(m.length,10);A++){const T=String(m[A]||"").trim();T.toUpperCase()==="LG"?(k=!0,B++):T&&isNaN(parseFloat(T))&&B++}return k&&B>=3})),n<0)return go(t,e);const u=t[n],s=n+1;let l=null;if(t[s]){const m=t[s].slice(4,8).map(k=>String(k||"").trim()).filter(Boolean);m.length&&m.every(k=>/^\d{1,2}\/\d{1,2}/.test(k)||/~/.test(k)||/^\(/.test(k))&&(l=s)}const v=l!=null?l+1:s,p=t.slice(v).filter(m=>m[0]!=null&&String(m[0]).trim()),b=u.findIndex(m=>{const k=String(m||"").trim().toLowerCase();return k==="category"||k==="product"}),f=u.findIndex(m=>{const k=String(m||"").trim().toLowerCase();return k==="country"||k==="county"}),d=u.findIndex(m=>String(m||"").trim().toLowerCase()==="brand"),y=u.findIndex(m=>String(m||"").trim().toUpperCase()==="LG"),h=[],E=a>=0?t[a]:u;for(let m=0;m<E.length;m++)/^w\d+$/i.test(String(E[m]||"").trim())&&h.push(m);if(!h.length)for(let m=0;m<u.length;m++){const k=String(u[m]||"").split(/\n/)[0].trim();/^w\d+/i.test(k)&&h.push(m)}i=h.map(m=>String(E[m]||"").trim().toUpperCase());let F=h.map((m,k)=>{const B=i[k]||`W${m}`;let A="";const T=l!=null?t[l]:a!==n&&a>=0?t[a+1]:null;if(T){const j=String(T[m]||"").trim();j&&/\d/.test(j)&&(A=j.startsWith("(")?j:`(${j})`)}return A?`${B}${A}`:B});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${n} dateRangeRow:${l} wCols:${h.length} labels:`,i.slice(0,5),"full:",F.slice(-2));function x(m){if(f<0)return!0;const k=String(m[f]||"").replace(/[()]/g,"").trim().toUpperCase();return k==="TOTAL"||k==="TTL"||k===""}const g=u.findIndex(m=>{const k=String(m||"").trim().toLowerCase().replace(/[\s_-]/g,"");return k==="b/nb"||k==="bnb"||k==="brand/nonbrand"});function C(m){if(g<0)return!0;const k=String(m[g]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return k==="nonbrand"||k==="nb"}const S={};if(d>=0){if(!h.length){const m=p.find(k=>String(k[d]||"").trim().toUpperCase()==="LG"&&C(k));if(m){for(let k=d+1;k<m.length;k++)if(String(m[k]||"").trim())h.push(k);else if(h.length)break;i=To(t,0,n+1)||h.map((k,B)=>`W${B+1}`)}}p.forEach(m=>{if(!C(m))return;const k=String(m[d]||"").trim();if(!k)return;const B=String(m[b>=0?b:0]||"").trim();if(!B)return;const A=ge[B]||B.toLowerCase(),T=f>=0?Kt(m[f]):"TOTAL",j=T==="TOTAL"||T==="TTL"||!T?"Total":T;S[A]||(S[A]={}),S[A][j]||(S[A][j]={}),S[A][j][k]=h.map(N=>ve(m[N]))}),p.forEach(m=>{if(String(m[d]||"").trim().toUpperCase()!=="LG"||!C(m)||!x(m))return;const B=String(m[b>=0?b:0]||"").trim();B&&(o[ge[B]||B.toLowerCase()]=h.map(A=>ve(m[A])))})}else if(y>=0){const m=u.findIndex(A=>{const T=String(A||"").trim().toLowerCase();return T==="date"||T==="week"||T==="period"}),k={},B=[];p.forEach(A=>{if(!x(A))return;const T=String(A[b>=0?b:3]||"").trim();if(T){if(m>=0){const j=String(A[m]||"").trim();j&&!B.includes(j)&&B.push(j)}k[T]=k[T]||[],k[T].push(ve(A[y]))}}),Object.entries(k).forEach(([A,T])=>{o[ge[A]||A.toLowerCase()]=T}),B.length&&(i=B)}else h.length&&p.forEach(m=>{if(!x(m))return;const k=String(m[b>=0?b:0]||"").trim();k&&(o[ge[k]||k.toLowerCase()]=h.map(B=>ve(m[B])))});if(i.length>0){let m=i.length;for(const T of Object.values(S))for(const j of Object.values(T))for(const N of Object.values(j)){const I=N.findIndex(R=>R!=null);I>=0&&I<m&&(m=I)}for(const T of Object.values(o)){const j=T.findIndex(N=>N!=null);j>=0&&j<m&&(m=j)}const k=12,A=i.length-m>k?i.length-k:m;A>0&&A<i.length&&(i=i.slice(A),F=F.slice(A),Mn(S,o,A))}if(Object.keys(o).length){const m={weeklyMap:o};return i.length&&(m.weeklyLabels=i),F.length&&(m.weeklyLabelsFull=F),Object.keys(S).length&&(m.weeklyAll=S),m}return go(t,e)}function On(t){const e=t.findIndex(g=>g.some(m=>{const k=String(m||"").trim().toLowerCase();return k.includes("page type")||k==="country"})?!g.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1);if(e<0)return{};const o=t[e],i=[];for(let g=2;g<o.length;g++){const C=String(o[g]||"").trim();if(/\bLG\b/i.test(C)){const S=g+1;S<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[S]||""))&&i.push({lg:g,ss:S})}}i.length||i.push({lg:2,ss:3});const a=t.slice(e+1).filter(g=>g[0]!=null&&String(g[0]).trim());let n=i[0];for(let g=i.length-1;g>=0;g--)if(a.some(C=>Pt(C[i[g].lg])>0)){n=i[g];break}if(!a.some(g=>Pt(g[n.lg])>0)){for(let g=Math.min(n.lg,o.length)-1;g>=2;g--)if(a.some(C=>Pt(C[g])>0)){n={lg:g-1,ss:g};break}}const u={},s={},l={},v={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},p=new Set,b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=i.map(g=>{const C=String(o[g.lg]||"").trim(),S=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return S?S[1].charAt(0).toUpperCase()+S[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),d={};a.forEach(g=>{const C=Kt(g[0]),S=String(g[1]||"").replace(/[()]/g,"").trim();let m=/page total|^ttl$/i.test(S)?"TTL":S;m.toLowerCase()==="microsite"&&(m="Microsites");const k=v[C]||C.toUpperCase();p.add(k);const B=Pt(g[n.lg]),A=Pt(g[n.ss]);k==="TTL"?(u[m]=(u[m]||0)+B,s[m]=(s[m]||0)+A):(l[k]||(l[k]={lg:{},samsung:{}}),l[k].lg[m]=(l[k].lg[m]||0)+B,l[k].samsung[m]=(l[k].samsung[m]||0)+A),k==="TTL"&&(d[m]||(d[m]={}),i.forEach((T,j)=>{var R,M;const N=Pt(g[T.lg]),I=Pt(g[T.ss]);if(N>0||I>0){const U=f[j]||`M${j+1}`;d[m][U]={lg:(((R=d[m][U])==null?void 0:R.lg)||0)+N,samsung:(((M=d[m][U])==null?void 0:M.samsung)||0)+I}}}))});const y=new Set;Object.values(d).forEach(g=>Object.keys(g).forEach(C=>y.add(C)));const h=b.filter(g=>y.has(g)),E={},F={};i.forEach((g,C)=>{const S=f[C];if(!S)return;const m={},k={};a.forEach(B=>{const A=Kt(B[0]),T=String(B[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test(T)?"TTL":T;j.toLowerCase()==="microsite"&&(j="Microsites");const N=v[A]||A.toUpperCase(),I=Pt(B[g.lg]),R=Pt(B[g.ss]);N==="TTL"?(m[j]=(m[j]||0)+I,k[j]=(k[j]||0)+R):(F[S]||(F[S]={}),F[S][N]||(F[S][N]={lg:{},samsung:{}}),F[S][N].lg[j]=(F[S][N].lg[j]||0)+I,F[S][N].samsung[j]=(F[S][N].samsung[j]||0)+R)}),Object.keys(m).length&&(E[S]={lg:m,samsung:k})});const x={};return(u.TTL||Object.keys(u).length)&&(x.dotcom={lg:u,samsung:s,byMonth:E,byCntyByMonth:F}),Object.keys(l).length&&(x.dotcomByCnty=l),Object.keys(d).length&&h.length&&(x.dotcomTrend=d,x.dotcomTrendMonths=h),x}function zn(t){const e=t.findIndex(g=>g.some(m=>{const k=String(m||"").trim().toLowerCase();return k==="channel"||k==="country"})?!g.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1),o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,n=-1,u=2;for(let g=0;g<o.length;g++){const C=String(o[g]||"").trim().toLowerCase();C==="country"&&a<0&&(a=g),C==="channel"&&n<0&&(n=g)}if(a>=0&&n>=0)u=Math.max(a,n)+1;else{const g=t[i];g&&!String(g[0]||"").trim()?(a=1,n=2,u=3):(a=0,n=1,u=2)}const s=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,l=[];for(let g=u;g<o.length;g++){const C=String(o[g]||"").trim();C&&s.test(C)&&l.push({col:g,label:C})}if(e>0){const g=t[e-1];if(g)for(let C=u;C<g.length;C++){const S=String(g[C]||"").trim();S&&s.test(S)&&!l.some(m=>m.col===C)&&l.push({col:C,label:S})}}if(l.sort((g,C)=>g.col-C.col),l.length>0){const g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],C=l[0],S=g.findIndex(m=>C.label.toLowerCase().startsWith(m.toLowerCase()));if(S>0&&C.col>u){const m=t.slice(i),k=[];for(let B=u;B<C.col;B++)m.some(A=>{const T=typeof A[B]=="number"?A[B]:parseFloat(String(A[B]||"").replace(/,/g,""));return!isNaN(T)&&T>0})&&k.push(B);for(let B=k.length-1;B>=0;B--){const A=S-(k.length-B);A>=0&&l.push({col:k[B],label:g[A]})}l.sort((B,A)=>B.col-A.col)}}const v=t.slice(i).filter(g=>g.some(C=>C!=null&&String(C).trim())),p=[],b={},f={},d=new Set;v.forEach(g=>{const C=Kt(g[a]),S=String(g[n]||"").replace(/[()]/g,"").trim();if(!S||S.toLowerCase()==="total")return;d.add(C);let m=0;if(l.length>0)for(let B=l.length-1;B>=0;B--){const A=Pt(g[l[B].col]);if(A>0){m=A;break}}else for(let B=g.length-1;B>=u;B--){const A=Pt(g[B]);if(A>0){m=A;break}}const k={};l.forEach(({col:B,label:A})=>{const T=Pt(g[B]);T>0&&(k[A]=T)}),C==="TTL"||C==="TOTAL"?(m>0&&p.push({source:S,category:"",score:m,delta:0,ratio:0,monthScores:k}),Object.keys(k).length>0&&(b[S]=k)):m>0&&(f[C]||(f[C]=[]),f[C].push({source:S,category:"",score:m,delta:0,ratio:0,monthScores:k}))});const y=p.reduce((g,C)=>g+C.score,0);p.sort((g,C)=>C.score-g.score),p.forEach((g,C)=>{g.rank=C+1,g.ratio=y>0?+(g.score/y*100).toFixed(1):0});for(const[g,C]of Object.entries(f)){const S=C.reduce((m,k)=>m+k.score,0);C.sort((m,k)=>k.score-m.score),C.forEach((m,k)=>{m.rank=k+1,m.ratio=S>0?+(m.score/S*100).toFixed(1):0})}const h=l.map(g=>g.label).filter(g=>Object.values(b).some(C=>C[g]>0));for(const[g,C]of Object.entries(f));const E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let F=null;if(h.length>0){const g=h[h.length-1],C=E.findIndex(S=>g.toLowerCase().startsWith(S.toLowerCase()));C>=0&&(F=`${E[C]} ${new Date().getFullYear()}`)}const x={};return p.length>0&&(x.citations=p),Object.keys(f).length>0&&(x.citationsByCnty=f),Object.keys(b).length>0&&(x.citTouchPointsTrend=b,x.citTrendMonths=h),F&&(x.citDerivedPeriod=F),x}function _n(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,n=0,u=-1,s=-1,l=-1,v=-1,p=4;for(let x=0;x<Math.min(t.length,10);x++){const g=t[x];if(!g)continue;const C=g.some(k=>/^no$/i.test(String(k||"").trim())),S=g.some(k=>/^region$/i.test(String(k||"").trim())),m=g.some(k=>/domain|domian/i.test(String(k||"").trim()));if(C||S||m){a=g,n=x+1;for(let k=0;k<g.length;k++){const B=String(g[k]||"").trim().toLowerCase();B==="no"&&u<0&&(u=k),B==="region"&&s<0&&(s=k),(B==="domain"||B==="domian")&&l<0&&(l=k)}break}(String(g[0]||"").trim().startsWith("[")||!String(g[0]||"").trim())&&(n=x+1)}const b=u>=0||s>=0;if(b)s=s>=0?s:1,l=2,v=3,p=4;else if(l>=0)v=l+1,p=l+2;else{for(let x=n;x<Math.min(t.length,n+5);x++){const g=t[x];if(g){for(let C=0;C<Math.min(g.length,6);C++){const S=String(g[C]||"").trim();if(S.includes(".")&&S.length>3&&!i.test(S)){l=C,v=C+1,p=C+2;break}}if(l>=0)break}}l<0&&(l=0,v=1,p=2)}const f=[];if(a)for(let x=p;x<a.length;x++){const g=String(a[x]||"").trim();g&&i.test(g)&&f.push({col:x,label:g})}const d=[],y={},h={};let E="TTL";for(let x=n;x<t.length;x++){const g=t[x];if(!g)continue;const C=String(g[l]||"").trim(),S=String(g[v]||"").trim();if(!b&&(!C||!C.includes("."))){const A=String(g[l]||"").trim().toUpperCase(),T=e[A]||(o.includes(A)?A:null);T&&(!S||S==="")&&(E=T);continue}if(!C||!C.includes("."))continue;let m="TTL";if(b&&s>=0){const A=String(g[s]||"").trim().toUpperCase();m=e[A]||A}else b||(m=E);let k=0;if(f.length>0)for(let A=f.length-1;A>=0;A--){const T=String(g[f[A].col]||"").replace(/,/g,"").trim(),j=parseFloat(T);if(!isNaN(j)&&j>0){k=j;break}}else for(let A=g.length-1;A>=p;A--){const T=String(g[A]||"").replace(/,/g,"").trim();if(!T)continue;const j=parseFloat(T);if(!isNaN(j)&&j>0){k=j;break}}if(f.length>0){const A={};if(f.forEach(({col:T,label:j})=>{const N=String(g[T]||"").replace(/,/g,"").trim(),I=parseFloat(N);!isNaN(I)&&I>0&&(A[j]=I)}),Object.keys(A).length>0){const T=`${m}|${C}`;y[T]={cnty:m,domain:C,type:S,months:A}}}const B={};f.length>0&&f.forEach(({col:A,label:T})=>{const j=String(g[A]||"").replace(/,/g,"").trim(),N=parseFloat(j);!isNaN(N)&&N>0&&(B[T]=N)}),k>0&&(h[m]=(h[m]||0)+1,d.push({cnty:m,rank:h[m],domain:C,type:S,citations:k,monthScores:B}))}const F={};if(d.length>0&&(F.citationsCnty=d),Object.keys(y).length>0){F.citDomainTrend=y;const x=f.map(g=>g.label).filter(g=>Object.values(y).some(C=>C.months[g]>0));F.citDomainMonths=x}return F}function ho(t,e){const o=t.findIndex(x=>x?x.some(g=>/^type$/i.test(String(g||"").trim()))&&x.some(g=>/^county|^country$/i.test(String(g||"").trim())):!1);if(o<0)return{};const i=t[o];let a=-1,n=-1,u=-1,s=-1,l=4;for(let x=0;x<i.length;x++){const g=String(i[x]||"").trim().toLowerCase();g==="type"&&a<0&&(a=x),(g==="county"||g==="country")&&n<0&&(n=x),(g==="topic"||g==="topoc")&&u<0&&(u=x),g==="brand"&&s<0&&(s=x)}l=Math.max(a,n,u,s)+1;const v=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,p=/^w\d+/i,b=[],f=[o];for(let x=0;x<=o;x++)x!==o&&f.push(x);for(const x of f){if(b.length>0)break;const g=t[x];if(g)for(let C=l;C<g.length;C++){const S=String(g[C]||"").split(/\n/)[0].trim();S&&(v.test(S)||p.test(S))&&b.push({col:C,label:S})}}const d=t.slice(o+1),y=[];d.forEach(x=>{if(!x)return;const g=String(x[a]||"").trim(),C=Kt(x[n]),S=String(x[u]||"").trim(),m=String(x[s]||"").trim();if(!S||!m)return;const k={};let B=0;b.forEach(({col:A,label:T})=>{const j=Gt(x[A]);j>0&&(k[T]=j,B=j)}),(Object.keys(k).length>0||S)&&y.push({type:g,country:C,topic:S,brand:m,scores:k,latestScore:B})});const h=e==="weekly"?"weeklyPR":"monthlyPR",E=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",F={};return y.length>0&&(F[h]=y),b.length>0&&(F[E]=b.map(x=>x.label)),F}function fo(t,e){const o=t.findIndex(F=>F?F.some(x=>/steakholders|stakeholders/i.test(String(x||"").trim()))||F.some(x=>/^type$/i.test(String(x||"").trim()))&&F.some(x=>/topoc|topic/i.test(String(x||"").trim())):!1);if(o<0)return{};const i=t[o];let a=-1,n=-1,u=-1,s=-1,l=4;for(let F=0;F<i.length;F++){const x=String(i[F]||"").trim().toLowerCase();(x==="steakholders"||x==="stakeholders")&&a<0&&(a=F),x==="type"&&n<0&&(n=F),(x==="country"||x==="county")&&u<0&&(u=F),(x==="topoc"||x==="topic")&&s<0&&(s=F)}l=Math.max(a,n,u,s)+1;const v=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,p=/^w\d+/i,b=[];for(let F=l;F<i.length;F++){const x=String(i[F]||"").split(/\n/)[0].trim();x&&(v.test(x)||p.test(x))&&b.push({col:F,label:x})}const f=t.slice(o+1),d=[];f.forEach(F=>{if(!F)return;const x=String(F[a]||"").trim(),g=String(F[n]||"").trim(),C=Kt(F[u]),S=String(F[s]||"").trim();if(!S||!x)return;const m={};let k=0;b.forEach(({col:B,label:A})=>{const T=Gt(F[B]);T>0&&(m[A]=T,k=T)}),d.push({stakeholder:x,type:g,country:C,topic:S,scores:m,latestScore:k})});const y=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",h=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",E={};return d.length>0&&(E[y]=d),b.length>0&&(E[h]=b.map(F=>F.label)),E}function Gn(t){const e=t.findIndex(s=>s?s.some(l=>/^prompts?$/i.test(String(l||"").trim()))&&s.some(l=>/^country$/i.test(String(l||"").trim())):!1);if(e<0)return{};const o=t[e],i={},a=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const l=String(o[s]||"").trim().toLowerCase();a.includes(l)&&!i[l]&&(i[l]=s)}const n=t.slice(e+1),u=[];return n.forEach(s=>{if(!s)return;const l=String(s[i.prompts]||"").trim();l&&u.push({country:Kt(s[i.country]),prompt:l,division:String(s[i.division]||"").trim(),category:String(s[i.category]||"").trim(),launched:String(s[i.launched]||"").trim(),branded:String(s[i.branded]||"").trim(),cej:String(s[i.cej]||"").trim(),topic:String(s[i.topic]||"").trim()})}),u.length>0?{appendixPrompts:u}:{}}function Hn(t){const e=t.findIndex(p=>{if(!p)return!1;const b=p.some(d=>/^(country|county)$/i.test(String(d||"").trim())),f=p.some(d=>/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(d||"").trim()));return b&&f});if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((p,b)=>console.log(`  row${b}:`,p==null?void 0:p.slice(0,6))),{};const o=t[e];let i=-1,a=-1,n=-1;for(let p=0;p<o.length;p++){const b=String(o[p]||"").trim().toLowerCase();i<0&&(b==="country"||b==="county")&&(i=p),a<0&&(b==="category"||b==="product"||b==="제품"||b==="카테고리")&&(a=p),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(b)&&(n=p)}if(i<0||a<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:n,header:o}),{};const u=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={};let l=0,v=0;return t.slice(e+1).forEach(p=>{if(!p)return;const b=String(p[n]||"").trim();if(!b)return;l++;const f=b.toLowerCase().replace(/\s+/g," ");if(!u.has(f)&&!u.has(f.replace(/\s/g,"")))return;const d=Kt(p[i]),y=String(p[a]||"").trim();if(!d||!y)return;const h=y.toUpperCase(),F={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"}[h]||h;s[`${d}|${F}`]=!0,F!==h&&(s[`${d}|${h}`]=!0),v++}),console.log(`[parseUnlaunched] 총 ${l}행 중 ${v}행 매칭 / 미출시 ${Object.keys(s).length}건`),Object.keys(s).length>0?{unlaunchedMap:s}:{}}function Un(t){const e=t.findIndex(p=>p&&p.some(b=>/^bu$/i.test(String(b||"").trim()))&&p.some(b=>/topic/i.test(String(b||"").trim())));if(e<0)return{};const o=t[e];let i=-1,a=-1,n=-1,u=-1,s=-1;for(let p=0;p<o.length;p++){const b=String(o[p]||"").trim().toLowerCase();i<0&&b==="bu"&&(i=p),a<0&&b.includes("topic")&&b.includes("대시보드")&&(a=p),n<0&&(b==="explanation"||b==="설명")&&(n=p),u<0&&b.includes("기존")&&(u=p),s<0&&b.includes("topic")&&b.includes("row")&&(s=p)}a<0&&(a=1),n<0&&(n=2);const l=[];let v="";return t.slice(e+1).forEach(p=>{if(!p)return;const b=String(p[i]||"").trim();b&&(v=b);const f=String(p[a]||"").trim();if(!f)return;const d=String(p[n]||"").trim(),y=u>=0?String(p[u]||"").trim():"",h=s>=0?String(p[s]||"").trim():"";l.push({bu:v,topic:f,explanation:d,oldTopic:y,topicRow:h})}),l.length>0?{prTopicList:l}:{}}function Wn(t,e){return t===yt.meta?Dn(e):t===yt.visSummary?Pn(e):t===yt.productMS||t===yt.productHS||t===yt.productES?Nn(e):t===yt.weeklyMS?Re(e,"MS"):t===yt.weeklyHS?Re(e,"HS"):t===yt.weeklyES?Re(e,"ES"):t===yt.monthlyPR?ho(e,"monthly"):t===yt.weeklyPR?ho(e,"weekly"):t===yt.monthlyBrandPrompt?fo(e,"monthly"):t===yt.weeklyBrandPrompt?fo(e,"weekly"):t===yt.citPageType?On(e):t===yt.citTouchPoints?zn(e):t===yt.citDomain?_n(e):t===yt.appendix?Gn(e):t===yt.unlaunched?Hn(e):t===yt.prTopicList?Un(e):{}}function Vn(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Kn(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const n=await a.text(),u=vt.read(n,{type:"string"}),s=u.Sheets[u.SheetNames[0]];return vt.utils.sheet_to_json(s,{header:1,defval:""})}async function qn(t,e){var n,u;const o=Object.values(yt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(s=>Kn(t,s).then(l=>({name:s,rows:l}))));for(let s=0;s<o.length;s++){const l=o[s],v=a[s];if(e==null||e(`"${l}" 처리 중... (${s+1}/${o.length})`),v.status==="rejected"){console.warn(`"${l}" 시트 건너뜀:`,(n=v.reason)==null?void 0:n.message);continue}try{const{rows:p}=v.value,b=Wn(l,p);for(const[f,d]of Object.entries(b))f==="weeklyLabels"||f==="weeklyLabelsFull"?i[f]||(i[f]=d):Array.isArray(d)&&Array.isArray(i[f])?i[f]=[...i[f],...d]:d&&typeof d=="object"&&!Array.isArray(d)&&i[f]&&typeof i[f]=="object"&&!Array.isArray(i[f])?i[f]={...i[f],...d}:i[f]=d}catch(p){console.warn(`"${l}" 시트 처리 실패:`,p.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},l={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},v=[];for(const[p,b]of Object.entries(i.weeklyAll)){const f=b.Total||b.TTL||{},d=f.LG||f.lg||[],y=Object.entries(f).filter(([g])=>g!=="LG"&&g!=="lg"),h=d.length?d[d.length-1]:0,E=d.length>=5?d[0]:0;let F="",x=0;for(const[g,C]of y){const S=C.length?C[C.length-1]:0;S>x&&(x=S,F=g)}h>0&&v.push({id:p,bu:l[p]||"HS",kr:s[p]||p,category:p,date:((u=i.meta)==null?void 0:u.period)||"",score:h,prev:E,vsComp:x,compName:F,allScores:{LG:h,...F?{[F]:x}:{}}})}if(v.length&&(i.productsPartial=v,console.log(`[SYNC] weeklyAll에서 ${v.length}개 제품 생성:`,v.map(p=>`${p.id}=${p.score}`).join(", "))),!i.productsCnty){const p=[];for(const[b,f]of Object.entries(i.weeklyAll)){const d=s[b]||b;for(const[y,h]of Object.entries(f)){if(y==="Total"||y==="TTL")continue;const E=h.LG||h.lg||[],F=E.length?E[E.length-1]:0;if(F<=0)continue;const x=E.length>=2?E[0]:0;let g="",C=0;const S={LG:F};for(const[k,B]of Object.entries(h)){if(k==="LG"||k==="lg")continue;const A=B.length?B[B.length-1]:0;S[k]=A,A>C&&(C=A,g=k)}const m=+(F-C).toFixed(1);p.push({product:d,country:y,score:F,prev:x,compName:g,compScore:C,gap:m,allScores:S})}}p.length&&(i.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((l,v)=>l===`W${v+1}`)){const l=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(v=>String(v).split(/\n/)[0].trim().toUpperCase()).filter(v=>/^W\d+/.test(v));if(l.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",l),i.weeklyLabels=l;const v=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(p=>{const b=String(p).split(/\n/);return b[0].trim().toUpperCase()+(b[1]?b[1].trim():"")}).filter(p=>/^W\d+/.test(p));v.length&&(i.weeklyLabelsFull=v)}}return i}const lt={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function Jn(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Yn({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,n=a?"#1E293B":o?"#7F1D1D":"#064E3B",u=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=a?"#334155":o?"#B91C1C":"#047857",l=a?"○":o?"⚠️":"●",v=a?"동기화 정보 없음":`데이터 최신화: ${Jn(e)}`,p=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:p,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:u,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:l}),v]})}function Xn({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Xt="'LG Smart','Arial Narrow',Arial,sans-serif",Ht="#CF0652",ee="#94A3B8",Se={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},$o={LG:Ht,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},yo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],je={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Zn=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],ze={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE"},_e=90;function Ge(t,e){const o=Se[e]||Se.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Ee(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}let Lo=0;function mo(t,e,o,i,a){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const n=Lo++,u={t:18,r:10,b:20,l:10},s=o-u.l-u.r,l=i-u.t-u.b,v=t.filter(x=>x!=null);if(!v.length){let x=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const g=t.length,C=g>1?g-1:1;return x+=t.map((S,m)=>`<text x="${(u.l+m/C*s).toFixed(1)}" y="${u.t+l+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[m]||""}</text>`).join(""),x+="</svg>",x}const p=Math.min(...v)-1,b=Math.max(...v)+1,f=b-p||1,d=t.length,y=d>1?d-1:1,h=t.map((x,g)=>u.l+g/y*s),E=[];t.forEach((x,g)=>{x!=null&&E.push({x:h[g],y:u.t+(1-(x-p)/f)*l,v:x})});let F=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;if(E.length>=2){const x=E.map((C,S)=>`${S?"L":"M"}${C.x.toFixed(1)},${C.y.toFixed(1)}`).join(" "),g=x+` L${E[E.length-1].x.toFixed(1)},${u.t+l} L${E[0].x.toFixed(1)},${u.t+l} Z`;F+=`<defs><linearGradient id="lg${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,F+=`<path d="${g}" fill="url(#lg${n})"/>`,F+=`<path d="${x}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}return F+=E.map(x=>`<circle cx="${x.x.toFixed(1)}" cy="${x.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${a}" stroke-width="2"/>`).join(""),F+=E.map(x=>`<text x="${x.x.toFixed(1)}" y="${Math.max(x.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${a}" font-family="${Xt}">${x.v.toFixed(1)}</text>`).join(""),F+=t.map((x,g)=>`<text x="${h[g].toFixed(1)}" y="${u.t+l+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[g]||""}</text>`).join(""),F+="</svg>",F}function he(t,e){return $o[t]||yo[e%yo.length]}function Bo(t,e,o,i){const a=Object.keys(t);if(!a.length||!e.length)return"";let n=1/0,u=-1/0;if(a.forEach(y=>(t[y]||[]).forEach(h=>{h!=null&&(h<n&&(n=h),h>u&&(u=h))})),!isFinite(n))return"";const s=Math.max((u-n)*.15,2);n=Math.max(0,n-s),u=Math.min(100,u+s);const l=u-n||1,v=e.length,p=8,b=8,f=i-p-b;let d="";for(let y=0;y<=4;y++){const h=p+y/4*f;d+=`<line x1="0" y1="${h.toFixed(1)}" x2="${o}" y2="${h.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}return a.forEach((y,h)=>{const E=t[y]||[],F=he(y,h),x=y==="LG",g=x?2.5:1.5,C=x?1:.7,S=[];if(E.forEach((m,k)=>{if(m==null)return;const B=(k+.5)/v*o,A=p+(1-(m-n)/l)*f;S.push({x:B,y:A,v:m})}),!!S.length){if(S.length>=2){const m=S.map((k,B)=>`${B?"L":"M"}${k.x.toFixed(1)},${k.y.toFixed(1)}`).join(" ");d+=`<path d="${m}" stroke="${F}" fill="none" stroke-width="${g}" stroke-linecap="round" stroke-linejoin="round" opacity="${C}"/>`}S.forEach(m=>{d+=`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="${x?3.5:2.5}" fill="#fff" stroke="${F}" stroke-width="${x?2:1.5}" opacity="${C}"/>`})}}),`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${d}</svg>`}function Qn(t,e,o,i,a,n,u){if(!e||!Object.keys(e).length)return"";const l=["MS","HS","ES"].map(v=>{const p=t.filter(f=>f.bu===v);if(!p.length)return"";const b=p.map(f=>{var A,T;const d=((A=e[f.id])==null?void 0:A.Total)||{},y=Object.keys(d).sort((j,N)=>{var M,U;if(j==="LG")return-1;if(N==="LG")return 1;const I=((M=d[j])==null?void 0:M[d[j].length-1])||0;return(((U=d[N])==null?void 0:U[d[N].length-1])||0)-I});if(!y.length)return"";const h=Ge(f.status,a),E=(T=d.LG)==null?void 0:T[d.LG.length-1],F=y.map((j,N)=>{const I=he(j,N),R=j==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${I};opacity:${R?1:.7}"></i><span style="font-size:13px;color:${R?"#1A1A1A":"#94A3B8"};font-weight:${R?700:400}">${j}</span></span>`}).join(""),x=o.length,g=`<colgroup><col style="width:${_e}px">${o.map(()=>"<col>").join("")}</colgroup>`,C=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:8px 0;border:0">${Bo(d,o,x*80,180)}</td></tr>`,S=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:4px 0 6px;border:0">${F}</td></tr>`,m=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(j=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${j}</th>`).join("")}</tr>`,k=y.map((j,N)=>{const I=he(j,N),R=j==="LG",M=o.map((U,K)=>{var et;const Y=(et=d[j])==null?void 0:et[K];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${Y!=null?R?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${R?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${Y!=null?Y.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${R?"#FFF8F9":N%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${R?700:500};color:${I};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${I};margin-right:4px;vertical-align:0"></i>${j}</td>${M}</tr>`}).join(""),B=He(f.id||f.category,n);return`<div class="trend-row${B?" is-unlaunched":""}" data-prodid="${f.id||f.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ht};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Ue(f,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${B?"#F1F5F9":h.bg};color:${B?"#64748B":h.color};border:1px solid ${B?"#CBD5E1":h.border}">${B?a==="en"?"Unlaunched":"미출시":h.label}</span>
          ${E!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${E.toFixed(1)}%</span>`:""}
          ${f.compName?`<span style="font-size:14px;color:#94A3B8">vs ${f.compName} ${f.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${g}<tbody>${C}${S}${m}${k}</tbody></table></div>
      </div>`}).join("");return b?`<div class="bu-group" data-bu="${v}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${v}</span></div>
      ${b}
    </div>`:""}).join("");return l.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${u||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${l}${(()=>{const v=t.filter(p=>Zt(p.id||p.category,n).length>0).map(p=>`${p.kr}: ${Zt(p.id||p.category,n).join(", ")} ${a==="en"?"not launched":"미출시"}`);return v.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${v.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function tr(t,e,o,i,a,n){if(!e||!e.length)return"";const u=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function v(d){const y=String(d).match(/(\d{1,2})월/);if(y)return parseInt(y[1])-1;const h=String(d).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return h?l[h[1].toLowerCase()]:-1}const p=[0,1,2,3,4,5,6,7,8,9,10,11],b=s.slice(),f=u.map(d=>{const y=t.filter(E=>E.bu===d);if(!y.length)return"";const h=y.map(E=>{const F=E.monthlyScores||[];let x={};if(F.length>=2){const R=new Set;if(F.forEach(M=>{M.allScores&&Object.keys(M.allScores).forEach(U=>R.add(U))}),R.forEach(M=>{x[M]=p.map(U=>{var Y;const K=F.find(et=>v(et.date)===U);return((Y=K==null?void 0:K.allScores)==null?void 0:Y[M])??null})}),!R.size&&(x.LG=p.map(M=>{const U=F.find(K=>v(K.date)===M);return U?U.score:null}),E.vsComp>0)){const M=p.map(U=>{const K=F.find(Y=>v(Y.date)===U);return(K==null?void 0:K.comp)??null});M.some(U=>U!=null)&&(x[E.compName||"Comp"]=M)}}else{const R=e.filter(Y=>Y.division===d&&(Y.country==="TOTAL"||Y.country==="TTL")),M={};R.forEach(Y=>{const et=v(Y.date);et>=0&&(M[et]=Y)});const U=p.map(Y=>{var et;return((et=M[Y])==null?void 0:et.lg)||null}),K=p.map(Y=>{var et;return((et=M[Y])==null?void 0:et.comp)||null});x={LG:U},K.some(Y=>Y!=null&&Y>0)&&(x.Samsung=K)}const g=Object.keys(x).sort((R,M)=>{if(R==="LG")return-1;if(M==="LG")return 1;const U=(x[R]||[]).filter(Y=>Y!=null).pop()||0;return((x[M]||[]).filter(Y=>Y!=null).pop()||0)-U});if(!g.length)return"";const C=Ge(E.status,i),S=(x.LG||[]).filter(R=>R!=null).pop(),m=g.map((R,M)=>{const U=he(R,M),K=R==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${U};opacity:${K?1:.7}"></i><span style="font-size:13px;color:${K?"#1A1A1A":"#94A3B8"};font-weight:${K?700:400}">${R}</span></span>`}).join(""),k=b.length,B=`<colgroup><col style="width:${_e}px">${b.map(()=>"<col>").join("")}</colgroup>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${k}" style="padding:8px 0;border:0">${Bo(x,b,k*80,180)}</td></tr>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${k}" style="padding:4px 0 6px;border:0">${m}</td></tr>`,j=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${b.map(R=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${R}</th>`).join("")}</tr>`,N=g.map((R,M)=>{const U=he(R,M),K=R==="LG",Y=b.map((et,Nt)=>{var ct;const Q=(ct=x[R])==null?void 0:ct[Nt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${Q!=null?K?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${K?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${Q!=null?Q.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${K?"#FFF8F9":M%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${K?700:500};color:${U};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${U};margin-right:4px;vertical-align:0"></i>${R}</td>${Y}</tr>`}).join(""),I=He(E.id||E.category,a);return`<div class="trend-row${I?" is-unlaunched":""}" data-prodid="${E.id||E.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ht};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Ue(E,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${I?"#F1F5F9":C.bg};color:${I?"#64748B":C.color};border:1px solid ${I?"#CBD5E1":C.border}">${I?i==="en"?"Unlaunched":"미출시":C.label}</span>
          ${S!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${S.toFixed(1)}%</span>`:""}
          ${E.compName?`<span style="font-size:14px;color:#94A3B8">vs ${E.compName} ${E.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${B}<tbody>${A}${T}${j}${N}</tbody></table></div>
      </div>`}).join("");return h?`<div class="bu-group" data-bu="${d}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${d}</span></div>
      ${h}
    </div>`:""}).join("");return f.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${b[0]}–${b[b.length-1]} (${b.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${f}${(()=>{const d=t.filter(y=>Zt(y.id||y.category,a).length>0).map(y=>`${y.kr}: ${Zt(y.id||y.category,a).join(", ")} ${i==="en"?"not launched":"미출시"}`);return d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function Ro(t,e,o,i,a){let n="";return e&&t&&(n+=`<div class="insight-box"><span class="insight-label">${a.insight}</span><span class="insight-text">${Ee(t)}</span></div>`),i&&o&&(n+=`<div class="howto-box"><span class="howto-label">${a.howToRead}</span><span class="howto-text">${Ee(o)}</span></div>`),n}function er(t,e,o,i){const a=+(t.score-t.prev).toFixed(1),n=t.vsComp||0,u=+(t.score-n).toFixed(1),s=a>0?"▲":a<0?"▼":"─",l=a>0?"#22C55E":a<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${l}">${s} ${Math.abs(a).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Ht}"></div>
          </div>
          ${n>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(n,100)}%;background:${ee}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Ht}"></i> LG ${t.score}%</span>
            ${n>0?`<span><i style="background:${ee}"></i> Samsung ${n}%</span>`:""}
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
    ${e.totalInsight?`<div class="hero-insight"><span class="hero-insight-label">${o.geoInsight}</span><span class="hero-insight-text">${Ee(e.totalInsight)}</span></div>`:""}
  </div>`}function Zt(t,e){const o=ze[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function He(t,e){return Zn.every(o=>{const i=ze[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function Ue(t,e){return Zt(t.id||t.category,e).length?`${t.kr}*`:t.kr}function bo(t,e,o,i,a,n,u,s,l){if(!t.length)return"";const p=["MS","HS","ES"].map(b=>{const f=t.filter(y=>y.bu===b);if(!f.length)return"";const d=f.map(y=>{var ot,it;const h=y.weekly||[],E=h.filter(rt=>rt!=null),F=y.weeklyScore||(E.length>0?E[E.length-1]:y.score),x=y.monthlyScore||y.score,g=F,C=((ot=s==null?void 0:s[y.id])==null?void 0:ot.Total)||((it=s==null?void 0:s[y.id])==null?void 0:it.TTL)||{};let S=0;Object.entries(C).forEach(([rt,at])=>{if(rt==="LG"||rt==="lg")return;const tt=Array.isArray(at)&&at.length?at[at.length-1]:0;tt>S&&(S=tt)});const m=y.vsComp||0,k=S>0?F/S*100:m>0?F/m*100:100,B=m>0?x/m*100:100,A=Math.round(k*10)/10,T=Math.round(B*10)/10,j=A,N=k>=100?"lead":k>=80?"behind":"critical",I=Ge(N,i),R=E.length>=1?E[E.length-1]:null,M=E.length>=2?E[E.length-2]:null,U=R!=null&&M!=null?+(R-M).toFixed(1):null,K=U>0?"▲":U<0?"▼":"─",Y=U>0?"#22C55E":U<0?"#EF4444":"#94A3B8",et=N==="critical"?"#BE123C":N==="behind"?"#D97706":"#15803D",Nt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Q={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ct(rt){const at=String(rt).match(/(\d{1,2})월/);if(at)return parseInt(at[1])-1;const tt=String(rt).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return tt?Q[tt[1].toLowerCase()]:-1}let ut=y.monthlyScores||[];if(ut.length<2&&u.length>0){const rt=u.filter(tt=>tt.division===y.bu&&(tt.country==="TOTAL"||tt.country==="TTL")),at={};rt.forEach(tt=>{const ht=ct(tt.date);ht>=0&&(at[ht]={date:tt.date,score:tt.lg,comp:tt.comp})}),ut=Object.keys(at).sort((tt,ht)=>tt-ht).map(tt=>at[tt])}const Qt=ut.length>0?ut.map(rt=>{const at=ct(rt.date);return at>=0?Nt[at]:rt.date}):["M-3","M-2","M-1","M0"],mt=ut.length>0?ut.map(rt=>rt.score):[null,null,null,y.score],kt=ut.length>=2?+(ut[ut.length-1].score-ut[ut.length-2].score).toFixed(1):null,gt=kt>0?"▲":kt<0?"▼":"─",wt=kt>0?"#22C55E":kt<0?"#EF4444":"#94A3B8",Ft=j,bt=Ft>=100?"#15803D":Ft>=80?"#D97706":"#BE123C",Mt=y.weeklyPrev||(E.length>=5?E[E.length-5]:E[0]||0),Bt=F&&Mt?+(F-Mt).toFixed(1):null,Rt=x&&(y.monthlyPrev||y.prev)?+(x-(y.monthlyPrev||y.prev)).toFixed(1):null,O=Zt(y.id||y.category,n),D=He(y.id||y.category,n),_=D?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:I;return`<div class="prod-card${D?" is-unlaunched":""}" data-prodid="${y.id||y.category}" data-ws="${F.toFixed(1)}" data-ms="${x.toFixed(1)}" data-wr="${A}" data-mr="${T}" data-wmom="${Bt??""}" data-mmom="${Rt??""}" style="border-color:${_.border}">
        <div class="prod-head">
          <span class="prod-name">${Ue(y,n)}</span>
          ${O.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${_.bg};color:${_.color};border-color:${_.border}">${_.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${g.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${Y}">${U!=null?`WoW ${K} ${Math.abs(U).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${wt}">${kt!=null?`MoM ${gt} ${Math.abs(kt).toFixed(1)}%p`:"MoM —"}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${mo(h,a,300,90,et)}</div>
          <div class="trend-monthly" style="display:none">${mo(mt,Qt,300,90,et)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${y.compName}`:`${y.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Ft,120)}%;background:${bt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${bt}">${Ft}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${b}">
      <div class="bu-header"><span class="bu-label">${b}</span><span class="bu-count">${f.length}${o.categories}</span></div>
      <div class="prod-grid">${d}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${l||""}${l?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Ro(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead,o)}
    <div class="section-body">${p}${(()=>{const b=t.filter(f=>Zt(f.id||f.category,n).length>0).map(f=>`${f.kr}: ${Zt(f.id||f.category,n).join(", ")} ${i==="en"?"not launched":"미출시"}`);return b.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${b.join(" / ")}</p>`:""})()}</div>
  </div>`}function or(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function xo(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),u=ze[n]||(n||"").toUpperCase(),s=i&&i[`${t.country}|${u}`],l=or(t.score,t.compScore),v=s?"#94A3B8":l==="lead"?"#15803D":l==="behind"?"#D97706":"#BE123C",p=+(t.score-t.compScore).toFixed(1),b=s?"#64748B":p>=0?"#15803D":"#BE123C",f=130,d=["TCL","HISENSE","HAIER"];let y="",h=0;t.allScores&&Object.entries(t.allScores).forEach(([S,m])=>{const k=String(S).toUpperCase();d.some(A=>k.includes(A))&&m>h&&(y=S,h=m)});const E=Math.max(e,h),F=Math.max(3,Math.round(t.score/E*f)),x=t.compScore>0?Math.max(3,Math.round(t.compScore/E*f)):0,g=h>0?Math.max(3,Math.round(h/E*f)):0,C="#9333EA";return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${v}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${F}px;background:${v}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ee}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${x}px;background:${ee}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${h>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${C}">${h.toFixed(1)}</span>
        <div class="vbar-col" style="height:${g}px;background:${C}"></div>
        <span class="vbar-col-name" style="color:${C}">${y.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${b}">${p>=0?"+":""}${p}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}const jo={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function De(t){const e=String(t||"").trim().toUpperCase();return jo[e]||t}function vo(t,e,o,i,a,n){if(!t||!t.length)return"";const u=new Map;t.forEach(d=>{u.has(d.product)||u.set(d.product,[]),u.get(d.product).push(d)});const s=e.cntyProductFilter||{},l=[...u.entries()].filter(([d])=>s[d]!==!1).map(([d,y])=>{const h=Math.max(...y.map(F=>Math.max(F.score,F.compScore)),1),E=y.map(F=>xo(F,h,De(F.country),a)).join("");return`<div class="cnty-product" data-group-product="${d}"><div class="bu-header"><span class="bu-label">${d}</span></div><div class="vbar-chart">${E}</div></div>`}).join(""),v=new Map;t.forEach(d=>{v.has(d.country)||v.set(d.country,[]),v.get(d.country).push(d)});const p=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],f=p.filter(d=>v.has(d)).concat([...v.keys()].filter(d=>!p.includes(d))).map(d=>{const y=v.get(d);if(!y)return"";const h=Math.max(...y.map(F=>Math.max(F.score,F.compScore)),1),E=y.map(F=>xo(F,h,F.product,a)).join("");return`<div class="cnty-product" data-group-country="${d}"><div class="bu-header"><span class="bu-label">${De(d)}</span></div><div class="vbar-chart">${E}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ee}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${Ro(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead,o)}
    <div class="section-body">
      <div class="cnty-view-country">${f}</div>
      <div class="cnty-view-product" style="display:none">${l}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const d={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},h=[...new Set(t.map(E=>E.product))].map(E=>{const F=d[E]||String(E).toLowerCase(),x=Zt(F,a);return x.length?`${E}: ${x.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return h.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${h.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const wo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function nr(t){const e=wo[t]||wo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function rr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",a=e==="en"?"All":"전체",n=e==="en"?"Total":"총",u=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",l=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],v={};l.forEach(d=>{const y=new Set;t.forEach(h=>{h[d.key]&&y.add(h[d.key])}),v[d.key]=[...y].sort()});const p=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(v).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const b=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),f=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
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
            ${l.map(d=>`<th data-col="${d.key}" onclick="_plToggle('${d.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${d.label} <span id="pl-arrow-${d.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${l.map(d=>`<div id="pl-dd-${d.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${d.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${a}</div>
      ${v[d.key].map(y=>`<div onclick="_plFilter('${d.key}','${y.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${y}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${p};
    var _plFilters={};
    var _divC=${b};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${u?" "+u:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(l.map(d=>d.key))}.forEach(function(k){
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
  <\/script>`}function Co(t,e,o,i,a,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const u=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let T=0;T<12;T++)s.push("w"+(5+T));const l=[...new Set(t.map(T=>T.topic))].filter(Boolean),v=[...new Set(t.map(T=>T.type))].filter(Boolean),p=[...new Set(t.map(T=>T.country))].filter(T=>T&&T!=="TTL"),b=u.filter(T=>p.includes(T)).concat(u.filter(T=>!p.includes(T))),f=JSON.stringify(t).replace(/</g,"\\u003c"),d=JSON.stringify(s),y=JSON.stringify(l),h=JSON.stringify(v),E=JSON.stringify(b),F=72;function x(T){const j={};return T&&String(T).split(`
`).forEach(N=>{const I=N.indexOf("=");if(I>0){const R=N.slice(0,I).trim(),M=N.slice(I+1).trim();R&&(j[R]=M)}}),j}const g=x(i==null?void 0:i.prTopicPromptsRaw);a&&a.length&&l.forEach(T=>{if(!g[T]){const j=a.find(N=>N.topic===T&&N.country==="US");j&&(g[T]=j.prompt)}});const C=(n==null?void 0:n.prTopicList)||[],S={},m={};C.forEach(T=>{[T.topic,T.topicRow,T.oldTopic].filter(Boolean).map(N=>N.trim()).forEach(N=>{T.explanation&&!S[N]&&(S[N]=T.explanation),T.bu&&!m[N]&&(m[N]=T.bu)})});const B={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...S,...x(i==null?void 0:i.prTopicDescsRaw)},A={};return l.forEach(T=>{const j=m[T];if(j)A[T]=j;else{const N=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];A[T]=N.some(I=>T.toLowerCase().includes(I.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Ht};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${f},W=${d},TP=${y},TY=${h},CN=${E};
    var CW=${F};
    var TOPIC_CAT=${JSON.stringify(A)};
    var TOPIC_PROMPT=${JSON.stringify(g).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(B).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(C).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(jo)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Ht}',COMP='${ee}';
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
  <\/script>`}function ko(t,e,o,i,a,n){const u=(t||[]).filter(h=>!0);if(!u.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let h=0;h<12;h++)s.push("w"+(5+h));const v=[...new Set(u.map(h=>h.stakeholder))].filter(Boolean).map(h=>({stakeholder:h,topics:[...new Set(u.filter(E=>E.stakeholder===h).map(E=>E.topic))].filter(Boolean)})),p=72,b=JSON.stringify(u).replace(/</g,"\\u003c"),f=JSON.stringify(s),d=JSON.stringify(v),y="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Ht};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${y}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${b},W=${f},GROUPS=${d};
    var CW=${p},RED='${Ht}';
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
      var el=document.getElementById('${y}-sections');if(!el)return;
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
  <\/script>`}function ir(t,e,o,i,a,n,u,s,l,v,p,b,f,d){var Bt,Rt;o=(o||[]).map(O=>({...O,weekly:(O.weekly||[]).map(D=>D??0),monthly:(O.monthly||[]).map(D=>D??0)})),v&&typeof v=="object"&&Object.values(v).forEach(O=>{!O||typeof O!="object"||Object.values(O).forEach(D=>{!D||typeof D!="object"||Object.keys(D).forEach(P=>{const _=D[P];Array.isArray(_)&&(D[P]=_.map(ot=>ot??0))})})});const y={aircare:"Xiaomi"};o=o.map(O=>{const D=y[(O.id||"").toLowerCase()];if(!D||!O.allScores)return O;const P=Object.entries(O.allScores).find(([it])=>it.toLowerCase()===D.toLowerCase()&&it.toLowerCase()!=="lg");if(!P)return O;const _=P[1];if(!(_>0))return O;const ot=Math.round(O.score/_*100);return{...O,compName:P[0],vsComp:_,compRatio:ot,status:ot>=100?"lead":ot>=80?"behind":"critical"}});const h=(f==null?void 0:f.visibilityOnly)||!1,E=(f==null?void 0:f.includeProgressTracker)===!0,F=(f==null?void 0:f.trackerVersion)||"v1",x=(f==null?void 0:f.includePromptList)||!1,g=(d==null?void 0:d.unlaunchedMap)||{},C=n==="en"?"Progress Tracker will be available soon.":"준비 중입니다. 곧 제공될 예정입니다.",S=`/p/progress-tracker/?lang=${n}`,B=E?`<iframe id="tracker-iframe" src="${F==="v2"?"https://geo-progress-tracker-v2.onrender.com/p/progress-tracker-v2/":S}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`:`<div class="progress-placeholder"><div class="inner"><div class="icon">⏳</div><h2>Coming Soon</h2><p>${C}</p></div></div>`;Lo=0;const A=Se[n]||Se.ko;let T;if(l&&l.length)T=l.map(O=>String(O).toUpperCase().startsWith("W")?O.toUpperCase():O);else{const O=v?Math.max(...Object.values(v).flatMap(P=>Object.values(P).flatMap(_=>Object.values(_).map(ot=>(ot==null?void 0:ot.length)||0))),0):0,D=t.weekStart||Math.max(1,O-11);T=Array.from({length:Math.max(12,O)},(P,_)=>`W${D+_}`)}const j=new Set;v&&Object.values(v).forEach(O=>Object.keys(O).forEach(D=>{D!=="Total"&&j.add(D)})),u&&u.forEach(O=>{O.country&&O.country!=="TTL"&&j.add(O.country)});const N=[...j].sort(),I=n==="en"?"All":"전체",R=["MS","HS","ES"],M=o.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${O.bu}" value="${O.id}" checked onchange="onFilterChange()"><span>${O.kr}</span></label>`).join(""),U=R.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${O}" checked onchange="onBuChange('${O}')"><span>${O}</span></label>`).join(""),K=N.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${O}" checked onchange="onFilterChange()"><span>${De(O)}</span></label>`).join(""),Y=Object.entries(je).map(([O,D])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${O}" checked onchange="onRegionChange('${O}')"><span>${D.labelEn}</span></label>`).join(""),Nt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${T[T.length-1]} ${n==="en"?"data":"기준"}</span>
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
        ${U}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${I}</span></label>
        ${M}
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
        ${K}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Display":"표시"}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${n==="en"?"GEO Insights":"GEO 인사이트"}</span></label>
      </div>
    </div>
  </div>`,ct=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Ee(t.noticeText)}</div></div>`:"",t.showTotal!==!1?er(e,t,A,n):""].join(""),ut=[];if(v&&Object.keys(v).length){const O={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(v).forEach(([D,P])=>{const _=o.find(it=>it.id===D),ot=(_==null?void 0:_.kr)||O[D]||D;Object.entries(P).forEach(([it,rt])=>{if(it==="Total"||it==="TTL"||it==="TOTAL")return;const at=rt.LG||rt.lg||[],tt=at.length>0?at[at.length-1]:0;if(tt<=0)return;let ht="",St=0;Object.entries(rt).forEach(([Ct,Et])=>{if(Ct==="LG"||Ct==="lg")return;const Ot=Array.isArray(Et)&&Et.length?Et[Et.length-1]:0;Ot>St&&(St=Ot,ht=Ct)});const jt=+(tt-St).toFixed(1),qt={};Object.entries(rt).forEach(([Ct,Et])=>{if(Array.isArray(Et)&&Et.length){const Ot=Et[Et.length-1];Ot!=null&&(qt[Ct]=Ot)}}),ut.push({product:ot,country:it,score:tt,compName:ht,compScore:St,gap:jt,allScores:qt})})})}const Qt=((Bt=f==null?void 0:f.weeklyLabelsFull)==null?void 0:Bt[f.weeklyLabelsFull.length-1])||T[T.length-1]||"",mt=Qt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${Qt} ${n==="en"?"data":"기준"}</span>`:"",kt=[ct,t.showProducts!==!1?bo(o,t,A,n,T,g,(f==null?void 0:f.monthlyVis)||[],v,mt):"",`<div id="trend-container">${Qn(o,v,T,A,n,g,mt)}</div>`,t.showCnty!==!1?vo(ut,t,A,n,g,mt):""].join(""),gt=o.map(O=>{const D=O.monthlyScore||O.score,P=O.monthlyPrev||O.prev,_=O.vsComp||0,ot=_>0?D/_*100:100;return{...O,score:D,prev:P,weeklyScore:D,weeklyPrev:P,monthlyScore:D,monthlyPrev:P,weekly:(O.monthlyScores||[]).map(it=>it.score),status:ot>=100?"lead":ot>=80?"behind":"critical"}}),wt=(((Rt=o[0])==null?void 0:Rt.monthlyScores)||[]).map(O=>{const D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],P=String(O.date).match(/(\d{1,2})월/),_=String(O.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?D[parseInt(P[1])-1]:_?_[1].charAt(0).toUpperCase()+_[1].slice(1).toLowerCase():O.date}),Ft=(f==null?void 0:f.monthlyVis)||[],bt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Mt=[ct,t.showProducts!==!1?bo(gt,t,A,n,wt.length?wt:["Feb","Mar"],g,Ft,{},bt):"",`<div id="monthly-trend-container">${tr(gt,Ft,A,n,g,bt)}</div>`,t.showCnty!==!1?vo(u,t,A,n,g,bt):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>${Xn({FONT:Xt,RED:Ht,COMP:ee})}</style>
</head>
<body>
${h?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${Nt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${kt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Mt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Co(d==null?void 0:d.weeklyPR,d==null?void 0:d.weeklyPRLabels,n,t,d==null?void 0:d.appendixPrompts,d)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${ko(d==null?void 0:d.weeklyBrandPrompt,d==null?void 0:d.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    <button class="tab-btn" onclick="switchTab('readability')">Readability</button>
    ${E?`<button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>`:""}
    ${x?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${Nt}
    <div id="bu-weekly-content" class="dash-container">${kt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Mt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Co(d==null?void 0:d.weeklyPR,d==null?void 0:d.weeklyPRLabels,n,t,d==null?void 0:d.appendixPrompts,d)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${ko(d==null?void 0:d.weeklyBrandPrompt,d==null?void 0:d.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <p>${A.readabilityMsg}</p>
  </div></div>
</div>
<div id="tab-progress" class="tab-panel">
  ${B}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${rr(d==null?void 0:d.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${nr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${A.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
var _periodMode='weekly';
var _curLang='${n}';
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
${(()=>{const O=D=>JSON.stringify(D).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${v?O(v):"{}"};
var _products=${O(o.map(D=>({id:D.id,bu:D.bu,kr:D.kr,en:D.en||D.kr,category:D.category||"",date:D.date||"",status:D.status,score:D.score||0,prev:D.prev||0,vsComp:D.vsComp||0,compName:D.compName||"",compRatio:D.compRatio||0,allScores:D.allScores||{},monthlyScores:D.monthlyScores||[]})))};
var _productsCnty=${O(u||[])};
var _unlaunchedMap=${O(g)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${O((f==null?void 0:f.monthlyVis)||[])};
var _total=${O(e)};
var _meta={period:${O(t.period||"")},reportNo:${O(t.reportNo||"")},totalInsight:${O(t.totalInsight||"")}};
var _wLabels=${O(T)};`})()}
${(()=>{const O=D=>JSON.stringify(D).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${n}';
var _BRAND_COLORS=${O($o)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Ht}';
var _FONT=${O(Xt)};
var _COMP='${ee}';
var _REGIONS=${O(Object.fromEntries(Object.entries(je).map(([D,P])=>[D,P.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(je).map(([O,D])=>[O,n==="en"?D.labelEn:D.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${_e};
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
<\/script>
</body>
</html>`}function ar(t){const e=t.filter(l=>l.status==="lead"),o=t.filter(l=>l.status==="behind"),i=t.filter(l=>l.status==="critical"),a=[...t].sort((l,v)=>v.score-l.score)[0],n=[...t].sort((l,v)=>l.score-v.score)[0],u=(t.reduce((l,v)=>l+v.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${u}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&s.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(a.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?s.push(`취약 카테고리(${i.map(l=>l.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(l=>l.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function sr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function lr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}function cr({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:n,setMetaEn:u,total:s,setTotal:l,products:v,setProducts:p,citations:b,setCitations:f,dotcom:d,setDotcom:y,productsCnty:h,setProductsCnty:E,citationsCnty:F,setCitationsCnty:x,resolved:g,previewLang:C,setPreviewLang:S,snapshots:m,setSnapshots:k,setWeeklyLabels:B,setWeeklyAll:A,weeklyLabels:T,weeklyAll:j,citationsByCnty:N,dotcomByCnty:I,generateHTML:R,publishEndpoint:M,setMonthlyVis:U,onSyncExtra:K,categoryStats:Y,extra:et,monthlyVis:Nt}){const Q=W.useRef({products:v,productsCnty:h,citations:b,citationsCnty:F,total:s,dotcom:d,extra:et});Q.current={products:v,productsCnty:h,citations:b,citationsCnty:F,total:s,dotcom:d,extra:et};function ct(){return Q.current}const[ut,Qt]=W.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[mt,kt]=W.useState(!1),[gt,wt]=W.useState(null),[Ft,bt]=W.useState(""),[Mt,Bt]=W.useState(""),[Rt,O]=W.useState(!1),[D,P]=W.useState(""),[_,ot]=W.useState(!1),[it,rt]=W.useState(!1),[at,tt]=W.useState(!1),[ht,St]=W.useState(!1),[jt,qt]=W.useState(""),[Ct,Et]=W.useState(!1),[Ot,fe]=W.useState(!0),[Ut,Jt]=W.useState("v2"),[ae,ye]=W.useState(""),[oe,$e]=W.useState(null);W.useEffect(()=>{fetch(M||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(w=>w.ok?w.json():null).then($e).catch(()=>{})},[t,M]);const[Io,We]=W.useState(null);W.useEffect(()=>{let c=!0;const w=()=>no(t).then(xt=>{c&&We(xt)});w();const nt=setInterval(w,6e4);return()=>{c=!1,clearInterval(nt)}},[t]);function Do(){no(t).then(We)}async function Po(){if(!ht){St(!0),qt("");try{const c=ct(),w=we(c.products,c.productsCnty,c.citations,c.citationsCnty,"ko"),nt=we(c.products,c.productsCnty,c.citations,c.citationsCnty,"en");let xt,zt,V;if(t==="dashboard"){const q=Nt||[],X=c.extra||et||{};xt=R(i,c.total,w.products,w.citations,c.dotcom,"ko",w.productsCnty,w.citationsCnty,T,j,N,I,q,X),zt=R(n,c.total,nt.products,nt.citations,c.dotcom,"en",nt.productsCnty,nt.citationsCnty,T,j,N,I,q,X),V=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else xt=R(i,c.total,w.products,w.citations,d,"ko",w.productsCnty,w.citationsCnty,{weeklyLabels:T,categoryStats:Y,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),zt=R(n,c.total,nt.products,nt.citations,d,"en",nt.productsCnty,nt.citationsCnty,{weeklyLabels:T,categoryStats:Y,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),V=`${i.period||""} ${i.title||"Newsletter"}`.trim();const $t=await(await fetch(M||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:V,htmlKo:xt,htmlEn:zt})})).json();if(!$t.ok)throw new Error($t.error||"게시 실패");if($e({...$t,published:!0}),t==="dashboard")try{const q=await Fe(t)||{},X=c.extra||et||{};ro(t,{...q,meta:i,total:c.total,weeklyPR:X.weeklyPR||q.weeklyPR,weeklyPRLabels:X.weeklyPRLabels||q.weeklyPRLabels,weeklyBrandPrompt:X.weeklyBrandPrompt||q.weeklyBrandPrompt,weeklyBrandPromptLabels:X.weeklyBrandPromptLabels||q.weeklyBrandPromptLabels,appendixPrompts:X.appendixPrompts||q.appendixPrompts})}catch{}const _t=`${window.location.origin}${$t.urls.ko}`,It=`${window.location.origin}${$t.urls.en}`;try{await navigator.clipboard.writeText(_t+`
`+It)}catch{}qt(`KO: ${_t}
EN: ${It}`)}catch(c){qt("ERROR:"+c.message)}finally{St(!1),setTimeout(()=>qt(""),2e4)}}}async function No(){if(!Ct){Et(!0),ye("");try{const c=await An(ir,we,{includeProgressTracker:Ot,trackerVersion:Ut});ye(`통합 게시 완료!
KO: ${window.location.origin}${c.urls.ko}
EN: ${window.location.origin}${c.urls.en}`)}catch(c){ye("ERROR: "+c.message)}finally{Et(!1),setTimeout(()=>ye(""),15e3)}}}async function Mo(){try{(await(await fetch(M||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"DELETE"})).json()).ok&&$e(null)}catch{}}async function Oo(){if(C!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}rt(!0)}async function Ve(c){rt(!1),tt(!0);const w=(c==null?void 0:c.products)??v,nt=(c==null?void 0:c.productsCnty)??h,xt=(c==null?void 0:c.citations)??b,zt=(c==null?void 0:c.citationsCnty)??F;try{const V=i,de=[V.title||"",V.dateLine||"",V.noticeText||"",V.totalInsight||"",V.reportType||"",V.productInsight||"",V.productHowToRead||"",V.citationInsight||"",V.citationHowToRead||"",V.dotcomInsight||"",V.dotcomHowToRead||"",V.todoText||"",V.kpiLogicText||"",V.cntyInsight||"",V.cntyHowToRead||"",V.citDomainInsight||"",V.citDomainHowToRead||"",V.citCntyInsight||"",V.citCntyHowToRead||"",V.period||"",V.team||"",V.reportNo||""],$=w.map(H=>H.kr||""),$t=w.map(H=>H.compName||""),_t=xt.map(H=>H.category||""),It=[...new Set(nt.map(H=>H.country||""))],q=[...new Set(nt.map(H=>H.product||""))],X=[...new Set(nt.map(H=>H.compName||""))],pt=[...new Set(zt.map(H=>H.cnty||"").filter(H=>H&&H!=="TTL"))],st=[...de,...$,...$t,..._t,...It,...q,...X,...pt].map(H=>H||" "),J=await $n(st,{from:"ko",to:"en"});let G=0;const Yt={...i,title:J[G++]||V.title,dateLine:J[G++]||V.dateLine,noticeText:J[G++]||V.noticeText,totalInsight:J[G++]||V.totalInsight,reportType:J[G++]||V.reportType,productInsight:J[G++]||V.productInsight,productHowToRead:J[G++]||V.productHowToRead,citationInsight:J[G++]||V.citationInsight,citationHowToRead:J[G++]||V.citationHowToRead,dotcomInsight:J[G++]||V.dotcomInsight,dotcomHowToRead:J[G++]||V.dotcomHowToRead,todoText:J[G++]||V.todoText,kpiLogicText:J[G++]||V.kpiLogicText,cntyInsight:J[G++]||V.cntyInsight,cntyHowToRead:J[G++]||V.cntyHowToRead,citDomainInsight:J[G++]||V.citDomainInsight,citDomainHowToRead:J[G++]||V.citDomainHowToRead,citCntyInsight:J[G++]||V.citCntyInsight,citCntyHowToRead:J[G++]||V.citCntyHowToRead,period:(G++,V.period),team:J[G++]||V.team,reportNo:(G++,V.reportNo)},Lt=H=>H&&H.replace(/\b\w/g,Z=>Z.toUpperCase()),Wt=H=>(H||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),te={};w.forEach((H,Z)=>{te[H.id]={en:Lt(J[G+Z]||H.kr),compNameEn:Wt(J[G+$.length+Z]||H.compName)}}),G+=$.length+$t.length;const Dt={};xt.forEach((H,Z)=>{Dt[`${H.rank}_${H.source}`]=Lt(J[G+Z]||H.category)}),G+=_t.length;const se={};It.forEach((H,Z)=>{se[H]=/^[A-Z]{2,3}$/.test(H)?H:J[G+Z]||H}),G+=It.length;const me={};q.forEach((H,Z)=>{me[H]=J[G+Z]||H}),G+=q.length;const pe={};X.forEach((H,Z)=>{pe[H]=J[G+Z]||H}),G+=X.length;const ue={};pt.forEach((H,Z)=>{ue[H]=/^[A-Z]{2,3}$/.test(H)?H:J[G+Z]||H}),u(Yt),p(H=>H.map(Z=>{var Ke,qe;return{...Z,en:((Ke=te[Z.id])==null?void 0:Ke.en)||Z.en||Z.kr,compNameEn:((qe=te[Z.id])==null?void 0:qe.compNameEn)||Z.compNameEn||Z.compName}})),f(H=>H.map(Z=>({...Z,categoryEn:Dt[`${Z.rank}_${Z.source}`]||Z.categoryEn||Z.category}))),E(H=>H.map(Z=>({...Z,countryEn:Lt(se[Z.country]||Z.country),productEn:Lt(me[Z.product]||Z.product),compNameEn:Wt(pe[Z.compName]||Z.compName)}))),x(H=>H.map(Z=>({...Z,cntyEn:Z.cnty==="TTL"?"TTL":Lt(ue[Z.cnty]||Z.cnty)}))),tt(!1)}catch(V){alert("번역 오류: "+V.message),tt(!1)}}async function zo(){const c=R(e,s,g.products,g.citations,d,C,g.productsCnty,g.citationsCnty);try{await navigator.clipboard.writeText(c)}catch{const w=document.createElement("textarea");w.value=c,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w)}O(!0),setTimeout(()=>O(!1),2500)}function _o(){In(e,s,v,b,d)}async function Go(){if(_!=="sending"){ot("sending");try{const c=ct(),w=R(e,c.total,c.products,c.citations,c.dotcom,C,c.productsCnty,c.citationsCnty,{weeklyLabels:T,categoryStats:Y,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),nt=`[LG GEO] ${e.title} · ${e.period}`,zt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:D.trim(),subject:nt,html:w})})).json();if(!zt.ok)throw new Error(zt.error||"발송 실패");ot("ok"),setTimeout(()=>ot(!1),4e3)}catch(c){ot("error"),bt(c.message),setTimeout(()=>{ot(!1),bt("")},5e3)}}}async function Ho(){var nt,xt,zt,V,de;if(mt)return;const c=Vn(ut.trim());if(!c){wt("error"),bt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>wt(null),3e3);return}kt(!0),wt(null),bt(""),Bt("");const w=[];try{const $=await qn(c,q=>bt(q));if(w.push(`[Sync] parsed keys: ${Object.keys($).join(", ")||"(없음)"}`),$.meta&&w.push(`[Sync] meta keys: ${Object.keys($.meta).join(", ")}`),$.productsPartial&&w.push(`[Sync] products: ${$.productsPartial.length}건`),w.push(`[Sync] citations: ${((nt=$.citations)==null?void 0:nt.length)??0}건`),w.push(`[Sync] citationsCnty: ${((xt=$.citationsCnty)==null?void 0:xt.length)??0}건`),w.push(`[Sync] dotcom: ${$.dotcom?"OK":"(없음)"}`),w.push(`[Sync] productsCnty: ${((zt=$.productsCnty)==null?void 0:zt.length)??0}건`),$.meta){const q=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","noticeText","kpiLogicText","todoText","aiPromptRules"];a(X=>{const pt={...X};for(const[st,J]of Object.entries($.meta))q.includes(st)&&X[st]||(pt[st]=J);return pt}),u(X=>({...X,period:$.meta.period,dateLine:$.meta.dateLine,reportNo:$.meta.reportNo}))}if($.citations&&(f($.citations),Q.current={...Q.current,citations:$.citations}),$.dotcom&&(y(q=>({...q,...$.dotcom})),Q.current={...Q.current,dotcom:{...Q.current.dotcom,...$.dotcom}}),$.productsCnty&&(E($.productsCnty),Q.current={...Q.current,productsCnty:$.productsCnty}),$.citationsCnty&&(x($.citationsCnty),Q.current={...Q.current,citationsCnty:$.citationsCnty}),$.monthlyVis&&U&&U($.monthlyVis),K){const q={weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,weeklyLabelsFull:$.weeklyLabelsFull||null,prTopicList:$.prTopicList||null};K(q),Q.current={...Q.current,extra:{...Q.current.extra,...q}}}const $t=$.weeklyLabels||((V=$.meta)==null?void 0:V.weeklyLabels);console.log("[SYNC] weeklyLabels:",$t,"weeklyLabelsFull:",$.weeklyLabelsFull),$t&&$t.length&&B($t),$.weeklyAll&&A(q=>({...q,...$.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys($));const _t=$.weeklyMap?Object.keys($.weeklyMap):[],It=((de=$.productsPartial)==null?void 0:de.map(q=>q.id))||[];if(console.log("[SYNC] weeklyMap keys:",_t.length?_t:"NONE"),console.log("[SYNC] productsPartial IDs:",It.length?It:"NONE"),_t.length&&It.length){const q=It.filter(pt=>!_t.includes(pt)),X=_t.filter(pt=>!It.includes(pt));q.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",q),X.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",X),!q.length&&!X.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if($.productsPartial){const q=$.productsPartial.map(X=>{var pe;const pt=((pe=$.weeklyMap)==null?void 0:pe[X.id])||[],st=pt.filter(ue=>ue!=null&&ue>0),J=X.score,G=X.prev||0,Yt=X.vsComp>0?Math.round(J/X.vsComp*100):100,Lt=st.length>0?st[st.length-1]:J,Wt=st.length>=5?st[st.length-5]:st[0]||0,te=J,Dt=G,se=Yt,me=G>0&&G!==J?[G,J]:[];return{...X,score:te,prev:Dt,weekly:pt,monthly:me,weeklyScore:Lt,weeklyPrev:Wt,monthlyScore:J,monthlyPrev:G,compRatio:se,status:se>=100?"lead":se>=80?"behind":"critical"}});p(q),Q.current={...Q.current,products:q}}else $.weeklyMap&&p(q=>q.map(X=>{var st;const pt=(st=$.weeklyMap)==null?void 0:st[X.id];return pt?{...X,weekly:pt}:X}));if($.total){const q={...Q.current.total,...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}};l(X=>({...X,...q})),Q.current={...Q.current,total:q}}{let q=function(G){if(!G)return 0;const Yt=String(G).trim(),Lt=Yt.match(/(\d{1,2})월/);if(Lt){const Dt=parseInt(Lt[1]);return Dt>=1&&Dt<=12?Dt:0}const Wt=Yt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Wt)return st[Wt[1].toLowerCase()]||0;const te=Yt.match(/\d{4}[-\/](\d{1,2})/);if(te){const Dt=parseInt(te[1]);return Dt>=1&&Dt<=12?Dt:0}return 0};const X=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let J=0;if($.derivedPeriod){const G=q($.derivedPeriod);G>J&&(J=G)}if($.citDerivedPeriod){const G=q($.citDerivedPeriod);G>J&&(J=G)}J>0&&J<=12&&(a(G=>({...G,period:`${X}년 ${J}월`})),u(G=>({...G,period:`${pt[J]} ${X}`})))}if(!$.total&&$.productsPartial&&$.productsPartial.length>0){const q=$.productsPartial,X=+(q.reduce((st,J)=>st+J.score,0)/q.length).toFixed(1),pt=+(q.reduce((st,J)=>st+(J.vsComp||0),0)/q.length).toFixed(1);l(st=>({...st,score:X,vsComp:pt,rank:X>=pt?1:2}))}if(setTimeout(()=>{ro(t,{meta:$.meta||null,total:$.total?{...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}}:null,productsPartial:$.productsPartial||null,weeklyMap:$.weeklyMap||null,weeklyLabels:$.weeklyLabels||null,weeklyLabelsFull:$.weeklyLabelsFull||null,weeklyAll:$.weeklyAll||null,citations:$.citations||null,dotcom:$.dotcom||null,productsCnty:$.productsCnty||null,citationsCnty:$.citationsCnty||null,citationsByCnty:$.citationsByCnty||null,dotcomByCnty:$.dotcomByCnty||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,prTopicList:$.prTopicList||null,monthlyVis:$.monthlyVis||null,weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,monthlyPR:$.monthlyPR||null,monthlyPRLabels:$.monthlyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,monthlyBrandPrompt:$.monthlyBrandPrompt||null,monthlyBrandPromptLabels:$.monthlyBrandPromptLabels||null,dotcomTrend:$.dotcomTrend||null,dotcomTrendMonths:$.dotcomTrendMonths||null}),setTimeout(Do,250)},100),Bt(w.join(`
`)),wt("ok"),bt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const q={};$.productsPartial&&(q.products=$.productsPartial.map(X=>{var Lt;const pt=((Lt=$.weeklyMap)==null?void 0:Lt[X.id])||[],st=X.vsComp>0?X.score/X.vsComp*100:100,J=pt.find(Wt=>Wt!=null&&Wt>0),G=X.prev!=null&&X.prev>0?X.prev:J||0,Yt=G>0?[G,X.score]:[];return{...X,prev:G,weekly:pt,monthly:Yt,compRatio:Math.round(st),status:st>=100?"lead":st>=80?"behind":"critical"}})),$.productsCnty&&(q.productsCnty=$.productsCnty),$.citations&&(q.citations=$.citations),$.citationsCnty&&(q.citationsCnty=$.citationsCnty);try{await Ve(q)}catch{}bt("동기화 + 번역 완료!")}}catch($){w.push(`[ERROR] ${$.message}`),wt("error"),bt($.message),Bt(w.join(`
`))}finally{kt(!1),setTimeout(()=>{wt(null),bt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:dt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Yn,{...Io||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:ut,onChange:c=>Qt(c.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...lt,fontSize:11,padding:"7px 9px",marginBottom:8,color:ut?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:Ho,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:mt?"wait":"pointer",background:mt?"#1E293B":dt,fontSize:12,fontWeight:700,color:mt?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(Je,{size:13,style:{animation:mt?"spin 1s linear infinite":"none"}}),mt?"동기화 중...":"구글 시트 동기화"]}),(gt||mt&&Ft)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:gt==="ok"?"#14532D":gt==="error"?"#450A0A":"#1E293B",color:gt==="ok"?"#86EFAC":gt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${gt==="ok"?"#22C55E33":gt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Ft}),Mt&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Mt,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Mt).then(()=>{const c=document.getElementById("vis-debug-copy-btn");c&&(c.textContent="복사됨!",setTimeout(()=>{c.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsxs("button",{onClick:Oo,disabled:at,style:{width:"100%",padding:"9px 0",background:at?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:at?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:at?.6:1},children:[r.jsx(Uo,{size:13})," ",at?"번역 중...":"AI 번역 (EN)"]}),it&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>rt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:Ve,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})}),r.jsxs("button",{onClick:_o,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(Wo,{size:12})," 구글 시트 템플릿 다운로드"]}),r.jsxs("button",{onClick:Po,disabled:ht,style:{width:"100%",padding:"9px 0",background:ht?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:ht?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:ht?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(Ye,{size:12}),ht?"게시 중...":"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Ot,onChange:c=>fe(c.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),Ot&&r.jsxs("div",{style:{display:"flex",gap:4,marginBottom:6,marginLeft:18},children:[r.jsx("button",{onClick:()=>Jt("v1"),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:Ut==="v1"?dt:"#1E293B",color:Ut==="v1"?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1"}),r.jsx("button",{onClick:()=>Jt("v2"),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:Ut==="v2"?dt:"#1E293B",color:Ut==="v2"?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 (외부)"})]}),r.jsxs("button",{onClick:No,disabled:Ct,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Ct?"#1E293B":"#166534",color:Ct?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:Ct?"wait":"pointer",marginBottom:6},children:[r.jsx(Ye,{size:12}),Ct?"통합 게시 중...":"통합 대시보드 게시"]}),ae&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:ae.startsWith("ERROR")?"#450A0A":"#14532D",color:ae.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:ae.startsWith("ERROR:")?ae.slice(6):ae})]}),r.jsxs("button",{onClick:async()=>{const c={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||""};if(!Object.values(c).some(nt=>nt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const xt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:c})})).json();xt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(xt.error||""))}catch(nt){alert("아카이빙 실패: "+nt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(Vo,{size:12})," 완성본 아카이빙 (AI 학습)"]}),jt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:jt.startsWith("ERROR:")?"#450A0A":"#14532D",color:jt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${jt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:jt.startsWith("ERROR:")?jt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(Xe,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[jt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),(oe==null?void 0:oe.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:Mo,style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:oe.urls.ko},{label:"EN",url:oe.urls.en}].map(({label:c,url:w})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:w,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[c,": ",w]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${w}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(Xe,{size:10})})]},c)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:oe.ts?new Date(oe.ts).toLocaleString("ko-KR"):""})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:c=>o(w=>({...w,reportType:c.target.value})),style:{...lt,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:c=>o(w=>({...w,reportNo:c.target.value})),style:{...lt}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:c=>o(w=>({...w,period:c.target.value})),style:{...lt}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:c=>o(w=>({...w,title:c.target.value})),rows:4,style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:c=>o(w=>({...w,team:c.target.value})),style:{...lt,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:c=>o(w=>({...w,dateLine:c.target.value})),style:{...lt,marginBottom:10}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(c=>({...c,showNotice:!c.showNotice})),style:{background:e.showNotice?dt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:c=>o(w=>({...w,noticeText:c.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...lt,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(c=>({...c,showKpiLogic:!c.showKpiLogic})),style:{background:e.showKpiLogic?dt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:c=>o(w=>({...w,kpiLogicText:c.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...lt,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:c=>o(w=>({...w,titleFontSize:Number(c.target.value)})),style:{width:"100%",accentColor:dt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:c=>o(w=>({...w,titleColor:c.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([c,w])=>r.jsx("button",{onClick:()=>o(nt=>({...nt,titleColor:c})),title:w,style:{width:16,height:16,borderRadius:"50%",background:c,border:e.titleColor===c?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},c))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:c,label:w})=>r.jsx("button",{onClick:()=>o(nt=>({...nt,[c]:!nt[c]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[c]?dt:"#1E293B",color:e[c]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:w},c))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(c=>({...c,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?dt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(c=>({...c,trendMode:(c.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(c=>({...c,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?dt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(c=>({...c,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?dt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,totalInsight:"⏳ AI 생성 중..."}));const c=await Tt("totalInsight",{products:ct().products,productsCnty:ct().productsCnty,total:ct().total,todoText:e.todoText||""},C);o(w=>({...w,totalInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,totalInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:c=>o(w=>({...w,totalInsight:c.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productInsight:"⏳ AI 생성 중..."}));const c=await Tt("product",{products:ct().products,total:ct().total},C);o(w=>({...w,productInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,productInsight:`[AI 실패: ${c.message}]

`+ar(ct().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showProductInsight:!c.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?dt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:c=>o(w=>({...w,productInsight:c.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"제품별 GEO Visibility"},C);o(w=>({...w,productHowToRead:c}))}catch{o(c=>({...c,productHowToRead:sr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showProductHowToRead:!c.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?dt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:c=>o(w=>({...w,productHowToRead:c.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyInsight:"⏳ AI 생성 중..."}));const c=await Tt("cnty",{productsCnty:ct().productsCnty},C);o(w=>({...w,cntyInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,cntyInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCntyInsight:!c.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?dt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:c=>o(w=>({...w,cntyInsight:c.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"국가별 GEO Visibility"},C);o(w=>({...w,cntyHowToRead:c}))}catch{o(c=>({...c,cntyHowToRead:lr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCntyHowToRead:!c.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?dt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:c=>o(w=>({...w,cntyHowToRead:c.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:c=>o(w=>({...w,prNotice:c.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:c=>o(w=>({...w,prTopicDescsRaw:c.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:c=>o(w=>({...w,prTopicPromptsRaw:c.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:c=>o(w=>({...w,bpNotice:c.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationInsight:"⏳ AI 생성 중..."}));const c=await Tt("citation",{citations:ct().citations},C);o(w=>({...w,citationInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,citationInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitationInsight:!c.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?dt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:c=>o(w=>({...w,citationInsight:c.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"Citation 도메인별 현황"},C);o(w=>({...w,citationHowToRead:c}))}catch{o(c=>({...c,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitationHowToRead:!c.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?dt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:c=>o(w=>({...w,citationHowToRead:c.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainInsight:"⏳ AI 생성 중..."}));const c=await Tt("citDomain",{citationsCnty:ct().citationsCnty},C);o(w=>({...w,citDomainInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,citDomainInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitDomainInsight:!c.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?dt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:c=>o(w=>({...w,citDomainInsight:c.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"도메인별 Citation 현황"},C);o(w=>({...w,citDomainHowToRead:c}))}catch{o(c=>({...c,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitDomainHowToRead:!c.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?dt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:c=>o(w=>({...w,citDomainHowToRead:c.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyInsight:"⏳ AI 생성 중..."}));const c=await Tt("citCnty",{citationsCnty:ct().citationsCnty},C);o(w=>({...w,citCntyInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,citCntyInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitCntyInsight:!c.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?dt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:c=>o(w=>({...w,citCntyInsight:c.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"국가별 Citation 도메인"},C);o(w=>({...w,citCntyHowToRead:c}))}catch{o(c=>({...c,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showCitCntyHowToRead:!c.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?dt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:c=>o(w=>({...w,citCntyHowToRead:c.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),h.length>0&&(()=>{const c=[...new Set(g.productsCnty.map(w=>w.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:c.map(w=>{const nt=(e.cntyProductFilter||{})[w]!==!1;return r.jsx("button",{onClick:()=>o(xt=>({...xt,cntyProductFilter:{...xt.cntyProductFilter||{},[w]:!nt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:nt?"#166534":"#1E293B",color:nt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:w},w)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomInsight:"⏳ AI 생성 중..."}));const c=await Tt("dotcom",{dotcom:ct().dotcom},C);o(w=>({...w,dotcomInsight:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,dotcomInsight:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showDotcomInsight:!c.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?dt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:c=>o(w=>({...w,dotcomInsight:c.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomHowToRead:"⏳ AI 생성 중..."}));const c=await Tt("howToRead",{section:"닷컴 Citation"},C);o(w=>({...w,dotcomHowToRead:c}))}catch{o(w=>({...w,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showDotcomHowToRead:!c.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?dt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:c=>o(w=>({...w,dotcomHowToRead:c.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:c=>o(w=>({...w,todoNotice:c.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,todoText:"⏳ AI 생성 중..."}));const c=await Tt("todo",{products:ct().products},C);o(w=>({...w,todoText:c}))}catch(c){console.error("[AI]",c),o(w=>({...w,todoText:`[AI 실패: ${c.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(At,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(c=>({...c,showTodo:!c.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?dt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:c=>o(w=>({...w,todoText:c.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...lt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("button",{onClick:zo,style:{width:"100%",padding:"9px 0",background:Rt?"#14532D":"transparent",border:`1px solid ${Rt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:Rt?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:Rt?r.jsxs(r.Fragment,{children:[r.jsx(Ie,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(So,{size:12})," 이메일 HTML 복사"]})}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:D,onChange:c=>P(c.target.value),placeholder:"recipient@example.com",style:{...lt,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:Go,disabled:_==="sending"||!D.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:_==="sending"||!D.trim()?"not-allowed":"pointer",background:_==="ok"?"#14532D":_==="error"?"#7F1D1D":_==="sending"?"#1E3A5F":D.trim()?"#1D4ED8":"#1E293B",color:_==="ok"?"#86EFAC":_==="error"?"#FCA5A5":D.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:_==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):_==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Ie,{size:12})," 발송 완료!"]}):_==="error"?r.jsxs(r.Fragment,{children:[r.jsx(Ze,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(Ze,{size:12})," 메일 발송"]})})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const le="monthly-report",Fo="geo-monthly-report-cache";function dr({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:l,categoryStats:v,stakeholderStats:p}){const b=W.useRef(null),f=W.useMemo(()=>Me(t,e,o,i,a,s,n,u,{categoryStats:v,stakeholderStats:p}),[t,e,o,i,a,s,n,u,l]);return Xo.useEffect(()=>{const d=b.current;if(!d)return;const y=d.contentDocument||d.contentWindow.document;y.open(),y.write(f),y.close();const h=()=>{try{y.body.style.overflow="hidden",y.documentElement.style.overflow="hidden";const E=y.documentElement.scrollHeight;E&&(d.style.height=E+20+"px")}catch{}};setTimeout(h,150),setTimeout(h,400),setTimeout(h,1e3),setTimeout(h,2e3)},[f]),r.jsx("iframe",{ref:b,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function pr({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:u=[],lang:s="ko",weeklyLabels:l,categoryStats:v,stakeholderStats:p}){const[b,f]=W.useState(!1),d=W.useMemo(()=>Me(t,e,o,i,a,s,n,u,{categoryStats:v,stakeholderStats:p}),[t,e,o,i,a,s,n,u,l,v]);async function y(){try{await navigator.clipboard.writeText(d)}catch{const h=document.createElement("textarea");h.value=d,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h)}f(!0),setTimeout(()=>f(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:L,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:y,style:{padding:"6px 14px",borderRadius:7,border:"none",background:b?"#14532D":dt,color:b?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:b?r.jsxs(r.Fragment,{children:[r.jsx(Ie,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(So,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:d})})]})}function ur(){const t=W.useRef(wn(Fo)).current,[e,o]=W.useState({...be,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=W.useState({...be,...(t==null?void 0:t.metaEn)??{}}),[n,u]=W.useState((t==null?void 0:t.total)??fn),[s,l]=W.useState((t==null?void 0:t.products)??yn),[v,p]=W.useState((t==null?void 0:t.citations)??vn),[b,f]=W.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:mn),[d,y]=W.useState((t==null?void 0:t.productsCnty)??bn),[h,E]=W.useState((t==null?void 0:t.citationsCnty)??xn),[F,x]=W.useState((t==null?void 0:t.weeklyLabels)??null),[g,C]=W.useState((t==null?void 0:t.weeklyAll)??{}),[S,m]=W.useState(null),[k,B]=W.useState(null),[A,T]=W.useState("preview"),[j,N]=W.useState("ko"),[I,R]=W.useState([]),[M,U]=W.useState(""),[K,Y]=W.useState(!1),[et,Nt]=W.useState(""),[Q,ct]=W.useState(null),[ut,Qt]=W.useState(!0);W.useEffect(()=>{let D=!1;const P=Rn(e.period)||"3월";async function _(){var ot,it,rt;try{const at=await fetch("/api/tracker-snapshot"),tt=at.ok?await at.json():null;if(tt!=null&&tt.ok&&((rt=(it=(ot=tt.data)==null?void 0:ot.quantitativeGoals)==null?void 0:it.rows)!=null&&rt.length)){const ht=ao(tt.data,P),St=lo(tt.data,P);if(ht!=null&&ht.length&&!D){m(ht),St!=null&&St.length&&B(St);return}}}catch{}try{const[{parseKPISheet:at},tt]=await Promise.all([eo(()=>import("./sheetParser-BGRKNm5Y.js"),[]),eo(()=>import("./xlsx-DDJ6sQze.js").then(Jt=>Jt.x),__vite__mapDeps([0,1]))]),ht=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,St=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${ht}&headers=1`,jt=await fetch(St,{cache:"no-store"});if(!jt.ok)return;const qt=await jt.text(),Ct=tt.read(qt,{type:"string"}),Et=Ct.Sheets[Ct.SheetNames[0]],Ot=tt.utils.sheet_to_json(Et,{header:1,defval:""}),fe=at(Ot),Ut=ao(fe,P);if(Ut!=null&&Ut.length&&!D){m(Ut);const Jt=lo(fe,P);Jt!=null&&Jt.length&&B(Jt)}}catch{}}return _(),()=>{D=!0}},[e.period]);const mt=j==="en"?i:e,kt=j==="en"?a:o,gt=W.useMemo(()=>we(s,d,v,h,j),[s,d,v,h,j]);W.useEffect(()=>{kn(le).then(R)},[]);const wt=W.useRef(null);function Ft(D,P=2e3){clearTimeout(wt.current),Nt(D),wt.current=setTimeout(()=>Nt(""),P)}W.useEffect(()=>()=>clearTimeout(wt.current),[]);const bt=W.useRef(!1);W.useEffect(()=>{let D=!1;return Fe(le).then(P=>{D||!P||(bt.current=!0,P.meta&&o(_=>({..._,...P.meta})),P.total&&u(_=>({..._,...P.total})),P.citations&&p(P.citations),P.dotcom&&f(_=>({..._,...P.dotcom})),P.productsCnty&&y(P.productsCnty),P.citationsCnty&&E(P.citationsCnty),P.weeklyLabels&&x(P.weeklyLabels),P.weeklyAll&&C(_=>({..._,...P.weeklyAll})),P.productsPartial?l(P.productsPartial.map(_=>{var rt;const ot=((rt=P.weeklyMap)==null?void 0:rt[_.id])||[],it=_.vsComp>0?_.score/_.vsComp*100:100;return{..._,weekly:ot,monthly:[],compRatio:Math.round(it),status:it>=100?"lead":it>=80?"behind":"critical"}})):P.weeklyMap&&l(_=>_.map(ot=>{var rt;const it=(rt=P.weeklyMap)==null?void 0:rt[ot.id];return it?{...ot,weekly:it}:ot})))}),()=>{D=!0}},[]),W.useEffect(()=>{Cn(Fo,{metaKo:e,metaEn:i,total:n,products:s,citations:v,dotcom:b,productsCnty:d,citationsCnty:h,weeklyLabels:F,weeklyAll:g})},[e,i,n,s,v,b,d,h,F,g]);async function Mt(){if(!Q)return;const P=await Sn(le,Q,{metaKo:e,metaEn:i,total:n,products:s,citations:v,dotcom:b,productsCnty:d,citationsCnty:h,weeklyLabels:F,weeklyAll:g});P&&R(P),Ft(P?"저장 완료!":"저장 실패")}async function Bt(){var _;const D=M.trim()||`${mt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,P=await Fn(le,D,{metaKo:e,metaEn:i,total:n,products:s,citations:v,dotcom:b,productsCnty:d,citationsCnty:h,weeklyLabels:F,weeklyAll:g});P&&(R(P),U(""),ct(((_=P[0])==null?void 0:_.ts)||null)),Ft(P?"새로 저장 완료!":"저장 실패")}function Rt(D){const P=D.data;o({...be,...P.metaKo||P.meta||{}}),a({...be,...P.metaEn||{}}),P.total&&u(P.total),P.products&&l(P.products),P.citations&&p(P.citations),P.dotcom&&f(P.dotcom),P.productsCnty&&y(P.productsCnty),P.citationsCnty&&E(P.citationsCnty),P.weeklyLabels&&x(P.weeklyLabels),P.weeklyAll&&C(P.weeklyAll),ct(D.ts),Ft(`"${D.name}" 불러옴`)}async function O(D){const P=I[D];if(!P)return;const _=await En(le,P.ts);_&&R(_),Q===P.ts&&ct(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[ut&&r.jsx(cr,{mode:le,meta:mt,setMeta:kt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:n,setTotal:u,products:s,setProducts:l,citations:v,setCitations:p,dotcom:b,setDotcom:f,productsCnty:d,setProductsCnty:y,citationsCnty:h,setCitationsCnty:E,resolved:gt,previewLang:j,setPreviewLang:N,snapshots:I,setSnapshots:R,setWeeklyLabels:x,setWeeklyAll:C,weeklyLabels:F,weeklyAll:g,generateHTML:Me}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>Qt(D=>!D),title:ut?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:ut?r.jsx(Ko,{size:16}):r.jsx(qo,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:D,tab:P,lang:_,label:ot})=>{const it=P==="code"?A==="code":A==="preview"&&j===_;return r.jsx("button",{onClick:()=>{T(P),_&&N(_)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:it?"#1E293B":"transparent",color:it?"#FFFFFF":"#475569",fontSize:11,fontWeight:it?700:500,fontFamily:L,cursor:"pointer"},children:ot},D)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[et&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:et}),r.jsxs("button",{onClick:Mt,disabled:!Q,title:Q?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:Q?"pointer":"default",background:Q?"#1D4ED8":"#1E293B",color:Q?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:Q?1:.5},children:[r.jsx(Qe,{size:11})," 저장"]}),r.jsx("input",{value:M,onChange:D=>U(D.target.value),placeholder:"버전 이름...",onKeyDown:D=>D.key==="Enter"&&Bt(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:Bt,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Qe,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>Y(!K),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:K?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Jo,{size:11})," 불러오기 ",I.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",I.length,")"]})]}),K&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:D=>D.stopPropagation(),children:I.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):I.map((D,P)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:Q===D.ts?"#1E3A5F":"#0F172A",border:Q===D.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:D.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(D.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{Rt(D),Y(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>O(P),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(Yo,{size:10})})]},D.ts))})]})]})]}),A==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:r.jsx(dr,{meta:mt,total:n,products:gt.products,citations:gt.citations,dotcom:b,productsCnty:gt.productsCnty,citationsCnty:gt.citationsCnty,lang:j,weeklyLabels:F,categoryStats:S,stakeholderStats:k})})}):r.jsx(pr,{meta:mt,total:n,products:gt.products,citations:gt.citations,dotcom:b,productsCnty:gt.productsCnty,citationsCnty:gt.citationsCnty,lang:j,weeklyLabels:F,categoryStats:S,stakeholderStats:k}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}Zo.createRoot(document.getElementById("root")).render(r.jsx(ur,{}));
