const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as r,b as H,R as Ke,L as _o,D as Go,G as qe,A as Uo,c as Je,S as Tt,C as Le,d as Co,e as Ye,P as Ho,f as Vo,h as Xe,F as Wo,T as Ko,i as qo}from"./react-BzJiA2Qb.js";import{R as Jo}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const Yo="modulepreload",Xo=function(t){return"/admin/monthly-report/"+t},Ze={},Be=function(e,o,i){let s=Promise.resolve();if(o&&o.length>0){let g=function(x){return Promise.all(x.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=g(o.map(x=>{if(x=Xo(x),x in Ze)return;Ze[x]=!0;const c=x.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${h}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":Yo,c||(y.as="script"),y.crossOrigin="",y.href=x,d&&y.setAttribute("nonce",d),document.head.appendChild(y),c)return new Promise((u,k)=>{y.addEventListener("load",u),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function n(g){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=g,window.dispatchEvent(a),!a.defaultPrevented)throw g}return s.then(g=>{for(const a of g||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},M="'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Zo=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function xe(t){const e=Zo.indexOf(t);return e>=0?e:999}function bt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Qe=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Ie(t){return Qe.filter(e=>t.includes(e)).concat(t.filter(e=>!Qe.includes(e)))}const Qo={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function De(t){return Qo[String(t||"").trim().toUpperCase()]||t}function Ht(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Fe(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function ve(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function te(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function tn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function en(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},s=["MS","HS","ES"],g=s.filter(a=>t[a]).concat(Object.keys(t).filter(a=>!s.includes(a))).map(a=>{const d=t[a],x=(e||{})[a],c=d.comp>0?Math.round(d.lg/d.comp*100):100,h=te(d.lg,d.comp)||"#FFFFFF",y=x&&x.lg!=null?Fe(d.lg,x.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};font-weight:700;text-align:center;background:#F5F5F5;">${bt(a)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${h};">${Ht(d.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;background:${h};">${Ht(d.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${h};">${c}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;">${y}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function on(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=Ie(Object.keys(t)).map(g=>{const a=t[g],d=(e||{})[g],x=a.comp>0?Math.round(a.lg/a.comp*100):100,c=te(a.lg,a.comp)||"#FFFFFF",h=d&&d.lg!=null?Fe(a.lg,d.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};font-weight:700;text-align:center;background:#F5F5F5;">${bt(De(g))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${c};">${Ht(a.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;background:${c};">${Ht(a.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${c};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;">${h}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function nn(t,e,o,i){const s=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(p=>{p.country&&p.product&&(n[`${p.country}|${p.product}`]=p.score)});const g={},a=new Set,d=new Set;(t||[]).forEach(p=>{!p.country||p.country==="TTL"||p.country==="TOTAL"||!p.product||(a.add(p.country),d.add(p.product),g[p.product]||(g[p.product]={}),g[p.product][p.country]=p)});const x=Ie(Array.from(a)),c=Array.from(d).sort((p,A)=>xe(p)-xe(A));if(!c.length||!x.length)return`<p style="font-size:11px;color:#666;font-family:${M};">데이터가 없습니다.</p>`;const h={};(i||[]).forEach(p=>{[p.kr,p.category,p.id,p.en].filter(Boolean).forEach(F=>{h[F]=p})});const u='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+x.map(p=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${bt(De(p))}</th>`).join(""),k=[];return c.forEach((p,A)=>{const F=A%2===0?"#FFFFFF":"#FAFAFA",b=h[p],v=(b?te(b.score,b.vsComp):null)||F,S=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;font-weight:700;background:${v};">${b?Ht(b.score):"—"}</td>`,m=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;font-weight:700;background:${v};">${b?ve(b.score,b.vsComp):"—"}</td>`,C=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;background:${v};color:#1A1A1A;font-weight:600;">${b!=null&&b.compName?bt(b.compName):"—"}</td>`,B=x.map(j=>{var N;const D=(N=g[p])==null?void 0:N[j],I=(D?te(D.score,D.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;font-weight:700;background:${I};">${D?Ht(D.score):"—"}</td>`}).join(""),E=x.map(j=>{var N;const D=(N=g[p])==null?void 0:N[j],I=(D?te(D.score,D.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;font-weight:700;background:${I};">${D?ve(D.score,D.compScore):"—"}</td>`}).join(""),T=x.map(j=>{var N;const D=(N=g[p])==null?void 0:N[j],I=(D?te(D.score,D.compScore):null)||F;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${M};text-align:center;background:${I};color:#1A1A1A;font-weight:600;">${D!=null&&D.compName?bt(D.compName):"—"}</td>`}).join("");k.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${M};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${bt(p)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${M};font-weight:600;background:#F5F5F5;white-space:nowrap;">${s.lg} (%)</td>
        ${S}${B}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${M};background:#F5F5F5;white-space:nowrap;">${s.ratio}</td>
        ${m}${E}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${M};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${C}${T}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.metric}</th>
        ${u}
      </tr>
    </thead>
    <tbody>
      ${k.join("")}
    </tbody>
  </table>
  </div>`}function rn(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},s={};(e||[]).forEach(d=>{d.id&&(s[d.id]=d.score)});const n=["MS","HS","ES"],g={};(t||[]).forEach(d=>{const x=d.bu||"OTHER";g[x]||(g[x]=[]),g[x].push(d)});const a=[];return n.forEach(d=>{const x=(g[d]||[]).slice().sort((c,h)=>xe(c.kr||c.category||c.id)-xe(h.kr||h.category||h.id));x.forEach((c,h)=>{const y=c.prev!=null&&c.prev>0?c.prev:s[c.id],u=Fe(c.score,y),k=te(c.score,c.vsComp)||"#FFFFFF";a.push(`<tr>
        ${h===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${d}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;">${bt(c.kr||c.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${k};">${Ht(c.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;background:${k};">${Ht(c.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;background:${k};">${bt(c.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;font-weight:700;background:${k};">${ve(c.score,c.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${M};text-align:center;">${u}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
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
      ${a.join("")}
    </tbody>
  </table>`}function an(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,g)=>n+(g.score||0),0),s=t.map((n,g)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:center;">${g+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};">${bt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${s}</tbody>
  </table>`}function sn(t,e){const o=(t||[]).filter(a=>a.cnty==="TTL"||a.cnty==="TOTAL"||!a.cnty);if(!o.length)return"";o.sort((a,d)=>(d.citations||0)-(a.citations||0));const i=o.slice(0,20),s=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((a,d)=>a+(d.citations||0),0),g=i.map((a,d)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:center;">${d+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};">${bt(a.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};">${bt(a.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;font-weight:700;">${(a.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;">${n>0?(a.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${s.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${s.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function ln(t,e){const o={};(t||[]).forEach(a=>{!a.cnty||a.cnty==="TTL"||a.cnty==="TOTAL"||(o[a.cnty]||(o[a.cnty]=[]),o[a.cnty].push(a))});const i=Ie(Object.keys(o));if(!i.length)return"";const s=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,g=i.map(a=>{const d=o[a].sort((y,u)=>(u.citations||0)-(y.citations||0)),x=d.reduce((y,u)=>y+(u.citations||0),0),c=d.slice(0,n),h=[];for(let y=0;y<n;y++){const u=c[y],k=u?tn(u.domain):null,p=k?`background:${k.bg};`:"",A=k?`color:${k.color};font-weight:700;`:"";h.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${M};${p}${A}">${u?`${bt(u.domain||"")} <span style="color:#666;font-weight:400;">(${(u.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};font-weight:700;background:#F5F5F5;text-align:center;">${bt(De(a))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;font-weight:700;">${x.toLocaleString("en-US")}</td>
      ${h.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${s.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${s.total}</th>
      ${Array.from({length:n},(a,d)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${d+1}</th>`).join("")}
    </tr></thead>
    <tbody>${g}</tbody>
  </table>
  </div>`}function cn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},s=Object.keys(o).filter(a=>o[a]!=null);if(!s.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},g=s.map(a=>{const d=o[a]||0,x=i[a]||0,c=d-x,h=c>0?"LG":c<0?"SS":"=",y=c>0?"#86EFAC":c<0?"#FCA5A5":"#FFFFFF",u=c>0?"#14532D":c<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${y};color:${u};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};font-weight:${a==="TTL"?"900":"600"};">${bt(a)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;font-weight:700;">${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:right;font-weight:700;">${c>0?"+":""}${c.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${M};text-align:center;font-weight:900;">${h}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${M};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function dn(t,e,o){var a;if(!t||!t.length)return"";const i=((a=t[0])==null?void 0:a.targetMonth)||"3월",s=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(d){return d>=80?"#D1FAE5":d>=50?"#FEF3C7":"#FEE2E2"}const g=t.map(d=>{const x=(d.monthRate||0).toFixed(0),c=(d.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${M};background:#F5F5F5;">${bt(d.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.monthRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.monthActual||0).toLocaleString()} / ${(d.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.progressRate)};">${c}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.cumActual||0).toLocaleString()} / ${(d.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${M};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${M};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${s.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
    </tr></thead>
    <tbody>${g}</tbody>
  </table>`}function pn(t,e){var g;if(!t||!t.length)return"";const o=((g=t[0])==null?void 0:g.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function s(a){return a>=80?"#D1FAE5":a>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(a=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${M};background:#F5F5F5;">${bt(a.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${a.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(a.monthRate)};">${(a.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.monthActual||0).toLocaleString()} / ${(a.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(a.progressRate)};">${(a.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.cumActual||0).toLocaleString()} / ${(a.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${M};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${M};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Ne(t,e,o,i,s={},n="ko",g=[],a=[],d={}){const{productsCntyPrev:x=[],productsPrev:c=[],categoryStats:h=null,stakeholderStats:y=null}=d,u=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",k=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${bt(u)} — ${bt(k)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: italic; src: url('/font/LG%20Smart%20Regular%20Italic.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: italic; src: url('/font/LG%20Smart%20Bold%20Italic.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${M} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${M};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${M};">${bt(u)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${M};">${bt(k)} · ${bt(t.team||"")}</p>
    </div>

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${M};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Ht(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Ht(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${ve(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Fe(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${en(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${on(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${rn(o,c,n)}
    ${nn(g,x,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${M};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${an(i,n)}
    ${sn(a,n)}
    ${ln(a,n)}
    ${cn(s,n)}

    ${dn(h,n)}
    ${pn(y,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${M};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const ht="#CF0652",L="'LG Smart','Arial Narrow',Arial,sans-serif",fe={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,noticeText:"",showNotice:!1,todoText:"",showTodo:!1,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},un={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},gn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],hn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},fn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],yn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],mn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],ko=3;function bn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==ko?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function xn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:ko}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Se={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function oe(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function vn(t){try{const e=await fetch(oe(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function wn(t,e,o){try{const i=await fetch(oe(t).snapshots,{method:"POST",headers:Se,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Cn(t,e,o){try{const i=await fetch(`${oe(t).snapshots}/${e}`,{method:"PUT",headers:Se,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function kn(t,e){try{const o=await fetch(`${oe(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function $t(t,e,o="ko",i=""){try{const s=await fetch("/api/generate-insight",{method:"POST",headers:Se,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!s.ok){const g=await s.json().catch(()=>({}));throw new Error(g.error||`HTTP ${s.status}`)}const n=await s.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(s){throw console.error("[API] generateAIInsight failed:",s.message),s}}async function we(t){try{const e=await fetch(oe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function to(t){try{const e=await fetch(oe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Fn(t,e,o={}){const{includeProgressTracker:i=!1,includePromptList:s=!1}=o,[n,g]=await Promise.all([we("dashboard").catch(()=>null),we("visibility").catch(()=>null)]),a={...n||{},...g||{}};if(n&&Object.keys(n).forEach(R=>{a[R]==null&&n[R]!=null&&(a[R]=n[R])}),g!=null&&g.meta&&(n!=null&&n.meta)&&(a.meta={...n.meta||{},...g.meta||{}}),!a||!Object.keys(a).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const d=a.meta||{},x=a.total||{},h=(a.productsPartial||a.products||[]).map(R=>{var V;const I=R.weekly||((V=a.weeklyMap)==null?void 0:V[R.id])||[],N=R.vsComp>0?R.score/R.vsComp*100:100;return{...R,weekly:I,monthly:R.monthly||[],compRatio:R.compRatio||Math.round(N),status:R.status||(N>=100?"lead":N>=80?"behind":"critical")}}),y=a.citations||[],u=a.dotcom||{},k=a.productsCnty||[],p=a.citationsCnty||[],A=a.weeklyLabels||null,F=a.weeklyAll||{},b=a.citationsByCnty||{},f=a.dotcomByCnty||{},v=e(h,k,y,p,"ko"),S=e(h,k,y,p,"en"),m={appendixPrompts:a.appendixPrompts||[],weeklyPR:a.weeklyPR||[],weeklyPRLabels:a.weeklyPRLabels||[],weeklyBrandPrompt:a.weeklyBrandPrompt||[],weeklyBrandPromptLabels:a.weeklyBrandPromptLabels||[],unlaunchedMap:a.unlaunchedMap||{},prTopicList:a.prTopicList||[],weeklyLabelsFull:a.weeklyLabelsFull||[]},C={monthlyVis:a.monthlyVis||[],includeProgressTracker:i,includePromptList:s},B=t(d,x,v.products,v.citations,u,"ko",v.productsCnty,v.citationsCnty,A,F,b,f,C,m),E=t({...d,title:d.title||"GEO KPI Dashboard"},x,S.products,S.citations,u,"en",S.productsCnty,S.citationsCnty,A,F,b,f,C,m),T=`${d.period||""} ${d.title||"KPI Dashboard"}`.trim(),D=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:T,htmlKo:B,htmlEn:E})})).json();if(!D.ok)throw new Error(D.error||"게시 실패");return D}async function eo(t,e){try{const o=await fetch(oe(t).syncData,{method:"POST",headers:Se,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Sn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ee={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},oo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function be(t,e,o,i,s){return s!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ee[n.kr]||n.kr,compName:n.compNameEn||oo[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||Sn[n.country]||n.country,product:n.productEn||Ee[n.product]||n.product,compName:n.compNameEn||oo[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ee[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function An(t,{from:e="ko",to:o="en"}={}){const s=[];for(let n=0;n<t.length;n+=20){const g=t.slice(n,n+20),a=await Promise.all(g.map(async d=>{if(!d||!d.trim())return d;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(d)}`,c=await fetch(x);if(!c.ok)throw new Error(`번역 실패 (${c.status})`);return(await c.json())[0].map(y=>y[0]).join("")}));s.push(...a)}return s}const ee=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],En=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function ye(t){const e=En.indexOf(t);return e>=0?e:999}function Pe(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Fo(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Pe(o)]=o)}),e}function no(t,e){var d,x,c,h;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(c=(x=t==null?void 0:t._dashboard)==null?void 0:x.categoryStats)!=null&&c.length?[...t._dashboard.categoryStats].sort((y,u)=>ye(y.category)-ye(u.category)):null;const o=t.quantitativeGoals.rows,i=Fo((h=t.quantitativeResults)==null?void 0:h.rows);new Date().getMonth()+1;let s=e,n=ee.indexOf(s);n<0&&(s="3월",n=0);const g=[...new Set(o.map(y=>y.taskCategory).filter(Boolean))],a=n>0?ee[n-1]:null;return g.map(y=>{const u=o.filter(C=>C.taskCategory===y);let k=0,p=0,A=0,F=0,b=0,f=0;u.forEach(C=>{var D,R,I,N,V;const B=Pe(C),E=i[B]||{},T=typeof((D=C.monthly)==null?void 0:D[s])=="number"?C.monthly[s]:0,j=typeof((R=E.monthly)==null?void 0:R[s])=="number"?E.monthly[s]:0;if(p+=T,k+=j,a){const q=typeof((I=C.monthly)==null?void 0:I[a])=="number"?C.monthly[a]:0,J=typeof((N=E.monthly)==null?void 0:N[a])=="number"?E.monthly[a]:0;f+=q,b+=J}for(let q=0;q<=n;q++){const J=ee[q];typeof((V=E.monthly)==null?void 0:V[J])=="number"&&(A+=E.monthly[J])}ee.forEach(q=>{var J;typeof((J=C.monthly)==null?void 0:J[q])=="number"&&(F+=C.monthly[q])})});const v=p>0?Math.round(k/p*1e3)/10:0,S=f>0?Math.round(b/f*1e3)/10:0,m=F>0?Math.round(A/F*1e3)/10:0;return{category:y,taskCount:u.length,targetMonth:s,monthRate:v,prevMonthRate:S,prevMonth:a,progressRate:m,monthActual:k,monthGoal:p,cumActual:A,annualGoal:F}}).sort((y,u)=>ye(y.category)-ye(u.category))}const Tn=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function ro(t){const e=Tn.indexOf(t);return e>=0?e:999}function io(t,e){var a,d;if(!((a=t==null?void 0:t.quantitativeGoals)!=null&&a.rows))return null;const o=t.quantitativeGoals.rows,i=Fo((d=t.quantitativeResults)==null?void 0:d.rows);new Date().getMonth()+1;let s=e,n=ee.indexOf(s);return n<0&&(s="3월",n=0),[...new Set(o.map(x=>x.stakeholder).filter(Boolean))].map(x=>{const c=o.filter(F=>F.stakeholder===x);let h=0,y=0,u=0,k=0;c.forEach(F=>{var m,C,B;const b=Pe(F),f=i[b]||{},v=typeof((m=F.monthly)==null?void 0:m[s])=="number"?F.monthly[s]:0,S=typeof((C=f.monthly)==null?void 0:C[s])=="number"?f.monthly[s]:0;y+=v,h+=S;for(let E=0;E<=n;E++){const T=ee[E];typeof((B=f.monthly)==null?void 0:B[T])=="number"&&(u+=f.monthly[T])}ee.forEach(E=>{var T;typeof((T=F.monthly)==null?void 0:T[E])=="number"&&(k+=F.monthly[E])})});const p=y>0?Math.round(h/y*1e3)/10:0,A=k>0?Math.round(u/k*1e3)/10:0;return{stakeholder:x,taskCount:c.length,targetMonth:s,monthRate:p,monthActual:h,monthGoal:y,progressRate:A,cumActual:u,annualGoal:k}}).sort((x,c)=>ro(x.stakeholder)-ro(c.stakeholder))}function $n(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function So(){const t=await Be(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const vt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},ce={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Ln={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},ao=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],so=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Bn(t,e,o,i,s={}){const n=await So(),g=n.utils.book_new(),a=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);a["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(g,a,"meta");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);d["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(g,d,"total");const x=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(p=>[p.id,p.bu,p.kr,p.score,p.prev,p.vsComp,p.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(g,x,"products");const c=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(p=>[p.id,p.kr,...p.weekly])]);c["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(g,c,"weekly");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(p=>[p.rank,p.source,p.category,p.score,p.delta,p.ratio??0])]);h["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(g,h,"citations");const y=(s==null?void 0:s.lg)||{},u=(s==null?void 0:s.samsung)||{},k=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...ao.map(p=>`LG_${p}`),...so.map(p=>`Samsung_${p}`)],[...ao.map(p=>y[p]??0),...so.map(p=>u[p]??0)]]);k["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(g,k,"dotcom"),n.writeFile(g,"GEO_Newsletter_템플릿.xlsx")}function _t(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),s=parseFloat(i)||0;return o?+s.toFixed(2):Math.abs(s)<=1&&s!==0?+(s*100).toFixed(2):+s.toFixed(2)}function me(t){return t==null||String(t).trim()===""?null:_t(t)}function Dt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Vt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Rn={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function jn(t){const e=Vt(t);return Rn[e]||e}function ie(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,s=0;const n=e.match(/(\d{4})/);n&&(s=parseInt(n[1]));const g=e.match(/(\d{1,2})월/);if(g)i=parseInt(g[1]);else{const a=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(a)i=o[a[1].toLowerCase()];else{const d=e.match(/\d{4}[-\/](\d{1,2})/);d&&(i=parseInt(d[1]))}}return s?s*12+i:i}function In(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const g=String(n[0]).trim(),a=n[1]??"";if(o.includes(g))e[g]=parseInt(a)||(g==="titleFontSize"?24:10);else if(i.includes(g)){const d=String(a).trim().toLowerCase();e[g]=d==="y"||d==="yes"||d==="true"||d==="1"}else e[g]=String(a)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(g=>g.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},g=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);g&&(e.period=`${n[g[2]]||g[2]} ${g[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const g=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${g[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function Dn(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let s=!1;if(t.forEach(R=>{if(!R[0]||String(R[0]).startsWith("[")||String(R[0]).startsWith("※")||R[0]==="key")return;const I=String(R[0]).trim();(o.includes(I)||e.includes(I))&&(s=!0,e.includes(I)?i[I]=parseInt(R[1])||0:i[I]=_t(R[1]))}),s&&Object.keys(i).length>=2)return{total:i};const n=t.find(R=>R.some(I=>String(I||"").trim().toUpperCase()==="LG")),g=n?n.findIndex(R=>String(R||"").trim().toUpperCase()==="LG"):4,a=n?n.findIndex(R=>{const I=String(R||"").trim().toUpperCase();return I==="SAMSUNG"||I==="SAMSUMG"}):5,d=a>=0?a:g+1,x=n?n.findIndex(R=>/date/i.test(String(R||"").trim())):0,c=n?n.findIndex(R=>/countries|country/i.test(String(R||"").trim())):2,h=n?n.findIndex(R=>/divisions?/i.test(String(R||"").trim())):3,y=[];t.filter(R=>{const I=String(R[x>=0?x:0]||"").trim();return I&&!I.startsWith("[")&&!I.startsWith("※")&&!/^date$/i.test(I)&&!/^key$/i.test(I)}).forEach(R=>{const I=String(R[x>=0?x:0]||"").trim(),N=Vt(R[c>=0?c:2]),V=String(R[h>=0?h:3]||"").trim().toUpperCase(),q=_t(R[g]),J=_t(R[d]);I&&q>0&&y.push({date:I,country:N,division:V,lg:q,comp:J})});const k=y.filter(R=>(R.country==="TOTAL"||R.country==="TTL")&&(R.division==="TOTAL"||R.division==="TTL"||R.division===""));k.sort((R,I)=>ie(R.date)-ie(I.date));const p=k[k.length-1],A=k.length>=2?k[k.length-2]:null;if(!p){const R=t.find(q=>q.some(J=>String(J||"").trim().toUpperCase()==="TOTAL"));if(!R)return{};const I=_t(R[g]),N=_t(R[d]),V={total:{score:I,prev:I,vsComp:N,rank:I>=N?1:2,totalBrands:12}};return y.length&&(V.monthlyVis=y),V}const F=p.lg,b=p.comp,f=A?A.lg:F,v=p.date,S=A?A.date:null;function m(R){const I={};return y.filter(N=>N.date===R&&(N.country==="TOTAL"||N.country==="TTL")&&N.division&&N.division!=="TOTAL"&&N.division!=="TTL"&&N.division!=="").forEach(N=>{I[N.division]={lg:N.lg,comp:N.comp}}),I}const C=m(v),B=S?m(S):{};function E(R){const I={};return y.filter(N=>N.date===R&&N.country&&N.country!=="TOTAL"&&N.country!=="TTL"&&(N.division==="TOTAL"||N.division==="TTL"||N.division==="")).forEach(N=>{I[N.country]={lg:N.lg,comp:N.comp}}),I}const T=E(v),j=S?E(S):{},D={total:{score:F,prev:f,vsComp:b,rank:F>=b?1:2,totalBrands:12},...Object.keys(C).length?{buTotals:C}:{},...Object.keys(B).length?{buTotalsPrev:B}:{},...Object.keys(T).length?{countryTotals:T}:{},...Object.keys(j).length?{countryTotalsPrev:j}:{}};return v&&(D.derivedPeriod=v),y.length&&(D.monthlyVis=y),D}function Nn(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(s=>JSON.stringify(String(s||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((s,n)=>n>=1&&String(s||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),lo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),lo(t,e)}function lo(t,e){const o=t[e],i=o.findIndex((c,h)=>h>=3&&String(c||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const s=[];for(let c=4;c<o.length;c++){const h=String(o[c]||"").trim();h&&h.toUpperCase()!=="LG"&&s.push({name:h,col:c})}const n=t.slice(e+1).filter(c=>{const h=String(c[0]||"").trim();return h&&!h.startsWith("[")&&!h.startsWith("※")}),g={},a={};n.forEach(c=>{const h=String(c[0]||"").trim(),y=String(c[1]||"").trim(),u=String(c[2]||"").trim(),k=Vt(c[2])||u,p=String(c[3]||"").trim(),A=_t(c[i]),F=s.map(S=>({name:S.name,score:_t(c[S.col])})).filter(S=>S.score>0),b=[...F].sort((S,m)=>m.score-S.score)[0]||{name:"",score:0},f=+(A-b.score).toFixed(2),v={LG:A};if(F.forEach(S=>{v[S.name]=S.score}),k==="TTL"||k==="TOTAL"){const S=ce[p]||p.toLowerCase(),m=Ln[p]||p;g[S]||(g[S]=[]),g[S].push({id:S,bu:h,kr:m,category:p,date:y,score:A,vsComp:b.score,compName:b.name,allScores:v})}else{const S=`${p}|${k}`;a[S]||(a[S]=[]),a[S].push({product:p,country:k,date:y,score:A,compName:b.name,compScore:b.score,gap:f,allScores:v})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(g).join(", ")||"없음"} / 국가별: ${Object.keys(a).length}건`);const d=[];for(const[c,h]of Object.entries(g)){h.sort((p,A)=>ie(p.date)-ie(A.date));const y=h[h.length-1],u=h.length>=2?h[h.length-2].score:null;console.log(`[parseProductCnty] ${c}: dates=[${h.map(p=>p.date).join(",")}] score=${y.score} prev=${u} vsComp=${y.vsComp}`);const k=h.map(p=>({date:p.date,score:p.score,comp:p.vsComp,allScores:p.allScores}));d.push({...y,prev:u,monthlyScores:k})}const x=[];for(const c of Object.values(a)){c.sort((u,k)=>ie(u.date)-ie(k.date));const h=c[c.length-1],y=c.length>=2?c[c.length-2].score:null;x.push({...h,prev:y})}return{...d.length?{productsPartial:d}:{},...x.length?{productsCnty:x}:{}}}function Ao(t,e=0,o){const i=o??t.length;for(let s=e;s<i;s++){const n=[];for(const g of t[s]||[]){const a=String(g||"").split(/\n/)[0].trim();/^W\d+/i.test(a)&&n.push(a.toUpperCase())}if(n.length>=2)return n}return null}const Te={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function co(t,e){var k;const o=e?Te[e]||{}:{...Te.MS,...Te.ES};if(!Object.keys(o).length)return{};const i=t.findIndex(p=>p.some(A=>String(A||"").trim()in o));if(i<0)return{};const s=t[i],n=t.findIndex((p,A)=>A>i&&p.some(F=>String(F||"").trim()==="TTL")),g=n>0?n+1:Math.min(i+20,t.length);let a=-1,d=-1;for(let p=i+1;p<g;p++){const A=t[p];if(!A.some(f=>String(f||"").trim().toUpperCase()==="LG"))continue;if(d<0&&(d=p),A.some(f=>{const v=String(f||"").trim().toLowerCase().replace(/[\s_-]/g,"");return v==="nonbrand"||v==="nb"})){a=p;break}}const x=a>=0?a:d>=0?d:n;if(x<0)return{};const c=t[x],h={},y=Object.keys(o).map(p=>s.findIndex(A=>String(A||"").trim()===p)).filter(p=>p>=0).sort((p,A)=>p-A);for(const[p,A]of Object.entries(o)){const F=s.findIndex(v=>String(v||"").trim()===p);if(F<0)continue;const b=y.find(v=>v>F)||F+20,f=[];for(let v=F+1;v<b&&v<c.length;v++){const S=_t(c[v]);S>0&&f.push(S)}f.length&&(h[A]=f)}if(!Object.keys(h).length)return{};const u=Ao(t,i,g)||((k=Object.values(h)[0])==null?void 0:k.map((p,A)=>`W${A+1}`))||[];return{weeklyMap:h,weeklyLabels:u}}function Pn(t,e,o){for(const i of Object.values(t))for(const s of Object.values(i))for(const[n,g]of Object.entries(s))s[n]=g.slice(o);for(const[i,s]of Object.entries(e))e[i]=s.slice(o)}function $e(t,e){const o={};let i=[],s=-1;for(let m=0;m<Math.min(t.length,10);m++){const C=t[m];if(!C)continue;let B=0;for(let E=0;E<C.length;E++)/^w\d+$/i.test(String(C[E]||"").trim())&&B++;if(B>=2){s=m;break}}let n=t.findIndex(m=>{const C=m.slice(0,5).map(B=>String(B||"").trim().toLowerCase());return C.includes("category")||C.includes("product")});if(n<0&&s>=0&&(n=s),n<0&&(n=t.findIndex(m=>{let C=!1,B=0;for(let E=0;E<Math.min(m.length,10);E++){const T=String(m[E]||"").trim();T.toUpperCase()==="LG"?(C=!0,B++):T&&isNaN(parseFloat(T))&&B++}return C&&B>=3})),n<0)return co(t,e);const g=t[n],a=n+1;let d=null;if(t[a]){const m=t[a].slice(4,8).map(C=>String(C||"").trim()).filter(Boolean);m.length&&m.every(C=>/^\d{1,2}\/\d{1,2}/.test(C)||/~/.test(C)||/^\(/.test(C))&&(d=a)}const x=d!=null?d+1:a,c=t.slice(x).filter(m=>m[0]!=null&&String(m[0]).trim()),h=g.findIndex(m=>{const C=String(m||"").trim().toLowerCase();return C==="category"||C==="product"}),y=g.findIndex(m=>{const C=String(m||"").trim().toLowerCase();return C==="country"||C==="county"}),u=g.findIndex(m=>String(m||"").trim().toLowerCase()==="brand"),k=g.findIndex(m=>String(m||"").trim().toUpperCase()==="LG"),p=[],A=s>=0?t[s]:g;for(let m=0;m<A.length;m++)/^w\d+$/i.test(String(A[m]||"").trim())&&p.push(m);if(!p.length)for(let m=0;m<g.length;m++){const C=String(g[m]||"").split(/\n/)[0].trim();/^w\d+/i.test(C)&&p.push(m)}i=p.map(m=>String(A[m]||"").trim().toUpperCase());let F=p.map((m,C)=>{const B=i[C]||`W${m}`;let E="";const T=d!=null?t[d]:s!==n&&s>=0?t[s+1]:null;if(T){const j=String(T[m]||"").trim();j&&/\d/.test(j)&&(E=j.startsWith("(")?j:`(${j})`)}return E?`${B}${E}`:B});console.log(`[parseWeekly:${e}] wLabelRow:${s} headerIdx:${n} dateRangeRow:${d} wCols:${p.length} labels:`,i.slice(0,5),"full:",F.slice(-2));function b(m){if(y<0)return!0;const C=String(m[y]||"").replace(/[()]/g,"").trim().toUpperCase();return C==="TOTAL"||C==="TTL"||C===""}const f=g.findIndex(m=>{const C=String(m||"").trim().toLowerCase().replace(/[\s_-]/g,"");return C==="b/nb"||C==="bnb"||C==="brand/nonbrand"});function v(m){if(f<0)return!0;const C=String(m[f]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return C==="nonbrand"||C==="nb"}const S={};if(u>=0){if(!p.length){const m=c.find(C=>String(C[u]||"").trim().toUpperCase()==="LG"&&v(C));if(m){for(let C=u+1;C<m.length;C++)if(String(m[C]||"").trim())p.push(C);else if(p.length)break;i=Ao(t,0,n+1)||p.map((C,B)=>`W${B+1}`)}}c.forEach(m=>{if(!v(m))return;const C=String(m[u]||"").trim();if(!C)return;const B=String(m[h>=0?h:0]||"").trim();if(!B)return;const E=ce[B]||B.toLowerCase(),T=y>=0?Vt(m[y]):"TOTAL",j=T==="TOTAL"||T==="TTL"||!T?"Total":T;S[E]||(S[E]={}),S[E][j]||(S[E][j]={}),S[E][j][C]=p.map(D=>me(m[D]))}),c.forEach(m=>{if(String(m[u]||"").trim().toUpperCase()!=="LG"||!v(m)||!b(m))return;const B=String(m[h>=0?h:0]||"").trim();B&&(o[ce[B]||B.toLowerCase()]=p.map(E=>me(m[E])))})}else if(k>=0){const m=g.findIndex(E=>{const T=String(E||"").trim().toLowerCase();return T==="date"||T==="week"||T==="period"}),C={},B=[];c.forEach(E=>{if(!b(E))return;const T=String(E[h>=0?h:3]||"").trim();if(T){if(m>=0){const j=String(E[m]||"").trim();j&&!B.includes(j)&&B.push(j)}C[T]=C[T]||[],C[T].push(me(E[k]))}}),Object.entries(C).forEach(([E,T])=>{o[ce[E]||E.toLowerCase()]=T}),B.length&&(i=B)}else p.length&&c.forEach(m=>{if(!b(m))return;const C=String(m[h>=0?h:0]||"").trim();C&&(o[ce[C]||C.toLowerCase()]=p.map(B=>me(m[B])))});if(i.length>0){let m=i.length;for(const T of Object.values(S))for(const j of Object.values(T))for(const D of Object.values(j)){const R=D.findIndex(I=>I!=null);R>=0&&R<m&&(m=R)}for(const T of Object.values(o)){const j=T.findIndex(D=>D!=null);j>=0&&j<m&&(m=j)}const C=12,E=i.length-m>C?i.length-C:m;E>0&&E<i.length&&(i=i.slice(E),F=F.slice(E),Pn(S,o,E))}if(Object.keys(o).length){const m={weeklyMap:o};return i.length&&(m.weeklyLabels=i),F.length&&(m.weeklyLabelsFull=F),Object.keys(S).length&&(m.weeklyAll=S),m}return co(t,e)}function Mn(t){const e=t.findIndex(f=>f.some(m=>{const C=String(m||"").trim().toLowerCase();return C.includes("page type")||C==="country"})?!f.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1);if(e<0)return{};const o=t[e],i=[];for(let f=2;f<o.length;f++){const v=String(o[f]||"").trim();if(/\bLG\b/i.test(v)){const S=f+1;S<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[S]||""))&&i.push({lg:f,ss:S})}}i.length||i.push({lg:2,ss:3});const s=t.slice(e+1).filter(f=>f[0]!=null&&String(f[0]).trim());let n=i[0];for(let f=i.length-1;f>=0;f--)if(s.some(v=>Dt(v[i[f].lg])>0)){n=i[f];break}if(!s.some(f=>Dt(f[n.lg])>0)){for(let f=Math.min(n.lg,o.length)-1;f>=2;f--)if(s.some(v=>Dt(v[f])>0)){n={lg:f-1,ss:f};break}}const g={},a={},d={},x={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},c=new Set,h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=i.map(f=>{const v=String(o[f.lg]||"").trim(),S=v.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return S?S[1].charAt(0).toUpperCase()+S[1].slice(1).toLowerCase():v.replace(/\s*LG\s*/i,"").trim()}),u={};s.forEach(f=>{const v=Vt(f[0]),S=String(f[1]||"").replace(/[()]/g,"").trim();let m=/page total|^ttl$/i.test(S)?"TTL":S;m.toLowerCase()==="microsite"&&(m="Microsites");const C=x[v]||v.toUpperCase();c.add(C);const B=Dt(f[n.lg]),E=Dt(f[n.ss]);C==="TTL"?(g[m]=(g[m]||0)+B,a[m]=(a[m]||0)+E):(d[C]||(d[C]={lg:{},samsung:{}}),d[C].lg[m]=(d[C].lg[m]||0)+B,d[C].samsung[m]=(d[C].samsung[m]||0)+E),C==="TTL"&&(u[m]||(u[m]={}),i.forEach((T,j)=>{var I,N;const D=Dt(f[T.lg]),R=Dt(f[T.ss]);if(D>0||R>0){const V=y[j]||`M${j+1}`;u[m][V]={lg:(((I=u[m][V])==null?void 0:I.lg)||0)+D,samsung:(((N=u[m][V])==null?void 0:N.samsung)||0)+R}}}))});const k=new Set;Object.values(u).forEach(f=>Object.keys(f).forEach(v=>k.add(v)));const p=h.filter(f=>k.has(f)),A={},F={};i.forEach((f,v)=>{const S=y[v];if(!S)return;const m={},C={};s.forEach(B=>{const E=Vt(B[0]),T=String(B[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test(T)?"TTL":T;j.toLowerCase()==="microsite"&&(j="Microsites");const D=x[E]||E.toUpperCase(),R=Dt(B[f.lg]),I=Dt(B[f.ss]);D==="TTL"?(m[j]=(m[j]||0)+R,C[j]=(C[j]||0)+I):(F[S]||(F[S]={}),F[S][D]||(F[S][D]={lg:{},samsung:{}}),F[S][D].lg[j]=(F[S][D].lg[j]||0)+R,F[S][D].samsung[j]=(F[S][D].samsung[j]||0)+I)}),Object.keys(m).length&&(A[S]={lg:m,samsung:C})});const b={};return(g.TTL||Object.keys(g).length)&&(b.dotcom={lg:g,samsung:a,byMonth:A,byCntyByMonth:F}),Object.keys(d).length&&(b.dotcomByCnty=d),Object.keys(u).length&&p.length&&(b.dotcomTrend=u,b.dotcomTrendMonths=p),b}function On(t){const e=t.findIndex(f=>f.some(m=>{const C=String(m||"").trim().toLowerCase();return C==="channel"||C==="country"})?!f.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1),o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let s=-1,n=-1,g=2;for(let f=0;f<o.length;f++){const v=String(o[f]||"").trim().toLowerCase();v==="country"&&s<0&&(s=f),v==="channel"&&n<0&&(n=f)}if(s>=0&&n>=0)g=Math.max(s,n)+1;else{const f=t[i];f&&!String(f[0]||"").trim()?(s=1,n=2,g=3):(s=0,n=1,g=2)}const a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,d=[];for(let f=g;f<o.length;f++){const v=String(o[f]||"").trim();v&&a.test(v)&&d.push({col:f,label:v})}if(e>0){const f=t[e-1];if(f)for(let v=g;v<f.length;v++){const S=String(f[v]||"").trim();S&&a.test(S)&&!d.some(m=>m.col===v)&&d.push({col:v,label:S})}}if(d.sort((f,v)=>f.col-v.col),d.length>0){const f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=d[0],S=f.findIndex(m=>v.label.toLowerCase().startsWith(m.toLowerCase()));if(S>0&&v.col>g){const m=t.slice(i),C=[];for(let B=g;B<v.col;B++)m.some(E=>{const T=typeof E[B]=="number"?E[B]:parseFloat(String(E[B]||"").replace(/,/g,""));return!isNaN(T)&&T>0})&&C.push(B);for(let B=C.length-1;B>=0;B--){const E=S-(C.length-B);E>=0&&d.push({col:C[B],label:f[E]})}d.sort((B,E)=>B.col-E.col)}}const x=t.slice(i).filter(f=>f.some(v=>v!=null&&String(v).trim())),c=[],h={},y={},u=new Set;x.forEach(f=>{const v=Vt(f[s]),S=String(f[n]||"").replace(/[()]/g,"").trim();if(!S||S.toLowerCase()==="total")return;u.add(v);let m=0;if(d.length>0)for(let B=d.length-1;B>=0;B--){const E=Dt(f[d[B].col]);if(E>0){m=E;break}}else for(let B=f.length-1;B>=g;B--){const E=Dt(f[B]);if(E>0){m=E;break}}const C={};d.forEach(({col:B,label:E})=>{const T=Dt(f[B]);T>0&&(C[E]=T)}),v==="TTL"||v==="TOTAL"?(m>0&&c.push({source:S,category:"",score:m,delta:0,ratio:0,monthScores:C}),Object.keys(C).length>0&&(h[S]=C)):m>0&&(y[v]||(y[v]=[]),y[v].push({source:S,category:"",score:m,delta:0,ratio:0,monthScores:C}))});const k=c.reduce((f,v)=>f+v.score,0);c.sort((f,v)=>v.score-f.score),c.forEach((f,v)=>{f.rank=v+1,f.ratio=k>0?+(f.score/k*100).toFixed(1):0});for(const[f,v]of Object.entries(y)){const S=v.reduce((m,C)=>m+C.score,0);v.sort((m,C)=>C.score-m.score),v.forEach((m,C)=>{m.rank=C+1,m.ratio=S>0?+(m.score/S*100).toFixed(1):0})}const p=d.map(f=>f.label).filter(f=>Object.values(h).some(v=>v[f]>0));for(const[f,v]of Object.entries(y));const A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let F=null;if(p.length>0){const f=p[p.length-1],v=A.findIndex(S=>f.toLowerCase().startsWith(S.toLowerCase()));v>=0&&(F=`${A[v]} ${new Date().getFullYear()}`)}const b={};return c.length>0&&(b.citations=c),Object.keys(y).length>0&&(b.citationsByCnty=y),Object.keys(h).length>0&&(b.citTouchPointsTrend=h,b.citTrendMonths=p),F&&(b.citDerivedPeriod=F),b}function zn(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let s=null,n=0,g=-1,a=-1,d=-1,x=-1,c=4;for(let b=0;b<Math.min(t.length,10);b++){const f=t[b];if(!f)continue;const v=f.some(C=>/^no$/i.test(String(C||"").trim())),S=f.some(C=>/^region$/i.test(String(C||"").trim())),m=f.some(C=>/domain|domian/i.test(String(C||"").trim()));if(v||S||m){s=f,n=b+1;for(let C=0;C<f.length;C++){const B=String(f[C]||"").trim().toLowerCase();B==="no"&&g<0&&(g=C),B==="region"&&a<0&&(a=C),(B==="domain"||B==="domian")&&d<0&&(d=C)}break}(String(f[0]||"").trim().startsWith("[")||!String(f[0]||"").trim())&&(n=b+1)}const h=g>=0||a>=0;if(h)a=a>=0?a:1,d=2,x=3,c=4;else if(d>=0)x=d+1,c=d+2;else{for(let b=n;b<Math.min(t.length,n+5);b++){const f=t[b];if(f){for(let v=0;v<Math.min(f.length,6);v++){const S=String(f[v]||"").trim();if(S.includes(".")&&S.length>3&&!i.test(S)){d=v,x=v+1,c=v+2;break}}if(d>=0)break}}d<0&&(d=0,x=1,c=2)}const y=[];if(s)for(let b=c;b<s.length;b++){const f=String(s[b]||"").trim();f&&i.test(f)&&y.push({col:b,label:f})}const u=[],k={},p={};let A="TTL";for(let b=n;b<t.length;b++){const f=t[b];if(!f)continue;const v=String(f[d]||"").trim(),S=String(f[x]||"").trim();if(!h&&(!v||!v.includes("."))){const E=String(f[d]||"").trim().toUpperCase(),T=e[E]||(o.includes(E)?E:null);T&&(!S||S==="")&&(A=T);continue}if(!v||!v.includes("."))continue;let m="TTL";if(h&&a>=0){const E=String(f[a]||"").trim().toUpperCase();m=e[E]||E}else h||(m=A);let C=0;if(y.length>0)for(let E=y.length-1;E>=0;E--){const T=String(f[y[E].col]||"").replace(/,/g,"").trim(),j=parseFloat(T);if(!isNaN(j)&&j>0){C=j;break}}else for(let E=f.length-1;E>=c;E--){const T=String(f[E]||"").replace(/,/g,"").trim();if(!T)continue;const j=parseFloat(T);if(!isNaN(j)&&j>0){C=j;break}}if(y.length>0){const E={};if(y.forEach(({col:T,label:j})=>{const D=String(f[T]||"").replace(/,/g,"").trim(),R=parseFloat(D);!isNaN(R)&&R>0&&(E[j]=R)}),Object.keys(E).length>0){const T=`${m}|${v}`;k[T]={cnty:m,domain:v,type:S,months:E}}}const B={};y.length>0&&y.forEach(({col:E,label:T})=>{const j=String(f[E]||"").replace(/,/g,"").trim(),D=parseFloat(j);!isNaN(D)&&D>0&&(B[T]=D)}),C>0&&(p[m]=(p[m]||0)+1,u.push({cnty:m,rank:p[m],domain:v,type:S,citations:C,monthScores:B}))}const F={};if(u.length>0&&(F.citationsCnty=u),Object.keys(k).length>0){F.citDomainTrend=k;const b=y.map(f=>f.label).filter(f=>Object.values(k).some(v=>v.months[f]>0));F.citDomainMonths=b}return F}function po(t,e){const o=t.findIndex(b=>b?b.some(f=>/^type$/i.test(String(f||"").trim()))&&b.some(f=>/^county|^country$/i.test(String(f||"").trim())):!1);if(o<0)return{};const i=t[o];let s=-1,n=-1,g=-1,a=-1,d=4;for(let b=0;b<i.length;b++){const f=String(i[b]||"").trim().toLowerCase();f==="type"&&s<0&&(s=b),(f==="county"||f==="country")&&n<0&&(n=b),(f==="topic"||f==="topoc")&&g<0&&(g=b),f==="brand"&&a<0&&(a=b)}d=Math.max(s,n,g,a)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,c=/^w\d+/i,h=[],y=[o];for(let b=0;b<=o;b++)b!==o&&y.push(b);for(const b of y){if(h.length>0)break;const f=t[b];if(f)for(let v=d;v<f.length;v++){const S=String(f[v]||"").split(/\n/)[0].trim();S&&(x.test(S)||c.test(S))&&h.push({col:v,label:S})}}const u=t.slice(o+1),k=[];u.forEach(b=>{if(!b)return;const f=String(b[s]||"").trim(),v=Vt(b[n]),S=String(b[g]||"").trim(),m=String(b[a]||"").trim();if(!S||!m)return;const C={};let B=0;h.forEach(({col:E,label:T})=>{const j=_t(b[E]);j>0&&(C[T]=j,B=j)}),(Object.keys(C).length>0||S)&&k.push({type:f,country:v,topic:S,brand:m,scores:C,latestScore:B})});const p=e==="weekly"?"weeklyPR":"monthlyPR",A=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",F={};return k.length>0&&(F[p]=k),h.length>0&&(F[A]=h.map(b=>b.label)),F}function uo(t,e){const o=t.findIndex(F=>F?F.some(b=>/steakholders|stakeholders/i.test(String(b||"").trim()))||F.some(b=>/^type$/i.test(String(b||"").trim()))&&F.some(b=>/topoc|topic/i.test(String(b||"").trim())):!1);if(o<0)return{};const i=t[o];let s=-1,n=-1,g=-1,a=-1,d=4;for(let F=0;F<i.length;F++){const b=String(i[F]||"").trim().toLowerCase();(b==="steakholders"||b==="stakeholders")&&s<0&&(s=F),b==="type"&&n<0&&(n=F),(b==="country"||b==="county")&&g<0&&(g=F),(b==="topoc"||b==="topic")&&a<0&&(a=F)}d=Math.max(s,n,g,a)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,c=/^w\d+/i,h=[];for(let F=d;F<i.length;F++){const b=String(i[F]||"").split(/\n/)[0].trim();b&&(x.test(b)||c.test(b))&&h.push({col:F,label:b})}const y=t.slice(o+1),u=[];y.forEach(F=>{if(!F)return;const b=String(F[s]||"").trim(),f=String(F[n]||"").trim(),v=Vt(F[g]),S=String(F[a]||"").trim();if(!S||!b)return;const m={};let C=0;h.forEach(({col:B,label:E})=>{const T=_t(F[B]);T>0&&(m[E]=T,C=T)}),u.push({stakeholder:b,type:f,country:v,topic:S,scores:m,latestScore:C})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",p=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",A={};return u.length>0&&(A[k]=u),h.length>0&&(A[p]=h.map(F=>F.label)),A}function _n(t){const e=t.findIndex(a=>a?a.some(d=>/^prompts?$/i.test(String(d||"").trim()))&&a.some(d=>/^country$/i.test(String(d||"").trim())):!1);if(e<0)return{};const o=t[e],i={},s=["country","prompts","division","category","launched","branded","cej","topic"];for(let a=0;a<o.length;a++){const d=String(o[a]||"").trim().toLowerCase();s.includes(d)&&!i[d]&&(i[d]=a)}const n=t.slice(e+1),g=[];return n.forEach(a=>{if(!a)return;const d=String(a[i.prompts]||"").trim();d&&g.push({country:Vt(a[i.country]),prompt:d,division:String(a[i.division]||"").trim(),category:String(a[i.category]||"").trim(),launched:String(a[i.launched]||"").trim(),branded:String(a[i.branded]||"").trim(),cej:String(a[i.cej]||"").trim(),topic:String(a[i.topic]||"").trim()})}),g.length>0?{appendixPrompts:g}:{}}function Gn(t){const e=t.findIndex(c=>{if(!c)return!1;const h=c.some(u=>/^(country|county)$/i.test(String(u||"").trim())),y=c.some(u=>/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(u||"").trim()));return h&&y});if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((c,h)=>console.log(`  row${h}:`,c==null?void 0:c.slice(0,6))),{};const o=t[e];let i=-1,s=-1,n=-1;for(let c=0;c<o.length;c++){const h=String(o[c]||"").trim().toLowerCase();i<0&&(h==="country"||h==="county")&&(i=c),s<0&&(h==="category"||h==="product"||h==="제품"||h==="카테고리")&&(s=c),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(h)&&(n=c)}if(i<0||s<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:s,statusCol:n,header:o}),{};const g=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),a={};let d=0,x=0;return t.slice(e+1).forEach(c=>{if(!c)return;const h=String(c[n]||"").trim();if(!h)return;d++;const y=h.toLowerCase().replace(/\s+/g," ");if(!g.has(y)&&!g.has(y.replace(/\s/g,"")))return;const u=jn(c[i]),k=String(c[s]||"").trim();if(!u||!k)return;const p=k.toUpperCase(),F={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"}[p]||p;a[`${u}|${F}`]=!0,F!==p&&(a[`${u}|${p}`]=!0),x++}),console.log(`[parseUnlaunched] 총 ${d}행 중 ${x}행 매칭 / 미출시 ${Object.keys(a).length}건`),Object.keys(a).length>0?{unlaunchedMap:a}:{}}function Un(t){const e=t.findIndex(c=>c&&c.some(h=>/^bu$/i.test(String(h||"").trim()))&&c.some(h=>/topic/i.test(String(h||"").trim())));if(e<0)return{};const o=t[e];let i=-1,s=-1,n=-1,g=-1,a=-1;for(let c=0;c<o.length;c++){const h=String(o[c]||"").trim().toLowerCase();i<0&&h==="bu"&&(i=c),s<0&&h.includes("topic")&&h.includes("대시보드")&&(s=c),n<0&&(h==="explanation"||h==="설명")&&(n=c),g<0&&h.includes("기존")&&(g=c),a<0&&h.includes("topic")&&h.includes("row")&&(a=c)}s<0&&(s=1),n<0&&(n=2);const d=[];let x="";return t.slice(e+1).forEach(c=>{if(!c)return;const h=String(c[i]||"").trim();h&&(x=h);const y=String(c[s]||"").trim();if(!y)return;const u=String(c[n]||"").trim(),k=g>=0?String(c[g]||"").trim():"",p=a>=0?String(c[a]||"").trim():"";d.push({bu:x,topic:y,explanation:u,oldTopic:k,topicRow:p})}),d.length>0?{prTopicList:d}:{}}function Hn(t,e){return t===vt.meta?In(e):t===vt.visSummary?Dn(e):t===vt.productMS||t===vt.productHS||t===vt.productES?Nn(e):t===vt.weeklyMS?$e(e,"MS"):t===vt.weeklyHS?$e(e,"HS"):t===vt.weeklyES?$e(e,"ES"):t===vt.monthlyPR?po(e,"monthly"):t===vt.weeklyPR?po(e,"weekly"):t===vt.monthlyBrandPrompt?uo(e,"monthly"):t===vt.weeklyBrandPrompt?uo(e,"weekly"):t===vt.citPageType?Mn(e):t===vt.citTouchPoints?On(e):t===vt.citDomain?zn(e):t===vt.appendix?_n(e):t===vt.unlaunched?Gn(e):t===vt.prTopicList?Un(e):{}}function Vn(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Wn(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,s=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!s.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${s.status}).`);const n=await s.text(),g=await So(),a=g.read(n,{type:"string"}),d=a.Sheets[a.SheetNames[0]];return g.utils.sheet_to_json(d,{header:1,defval:""})}async function Kn(t,e){var n,g;const o=Object.values(vt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const s=await Promise.allSettled(o.map(a=>Wn(t,a).then(d=>({name:a,rows:d}))));for(let a=0;a<o.length;a++){const d=o[a],x=s[a];if(e==null||e(`"${d}" 처리 중... (${a+1}/${o.length})`),x.status==="rejected"){console.warn(`"${d}" 시트 건너뜀:`,(n=x.reason)==null?void 0:n.message);continue}try{const{rows:c}=x.value,h=Hn(d,c);for(const[y,u]of Object.entries(h))y==="weeklyLabels"||y==="weeklyLabelsFull"?i[y]||(i[y]=u):Array.isArray(u)&&Array.isArray(i[y])?i[y]=[...i[y],...u]:u&&typeof u=="object"&&!Array.isArray(u)&&i[y]&&typeof i[y]=="object"&&!Array.isArray(i[y])?i[y]={...i[y],...u}:i[y]=u}catch(c){console.warn(`"${d}" 시트 처리 실패:`,c.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const a={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},d={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},x=[];for(const[c,h]of Object.entries(i.weeklyAll)){const y=h.Total||h.TTL||{},u=y.LG||y.lg||[],k=Object.entries(y).filter(([f])=>f!=="LG"&&f!=="lg"),p=u.length?u[u.length-1]:0,A=u.length>=5?u[0]:0;let F="",b=0;for(const[f,v]of k){const S=v.length?v[v.length-1]:0;S>b&&(b=S,F=f)}p>0&&x.push({id:c,bu:d[c]||"HS",kr:a[c]||c,category:c,date:((g=i.meta)==null?void 0:g.period)||"",score:p,prev:A,vsComp:b,compName:F,allScores:{LG:p,...F?{[F]:b}:{}}})}if(x.length&&(i.productsPartial=x,console.log(`[SYNC] weeklyAll에서 ${x.length}개 제품 생성:`,x.map(c=>`${c.id}=${c.score}`).join(", "))),!i.productsCnty){const c=[];for(const[h,y]of Object.entries(i.weeklyAll)){const u=a[h]||h;for(const[k,p]of Object.entries(y)){if(k==="Total"||k==="TTL")continue;const A=p.LG||p.lg||[],F=A.length?A[A.length-1]:0;if(F<=0)continue;const b=A.length>=2?A[0]:0;let f="",v=0;const S={LG:F};for(const[C,B]of Object.entries(p)){if(C==="LG"||C==="lg")continue;const E=B.length?B[B.length-1]:0;S[C]=E,E>v&&(v=E,f=C)}const m=+(F-v).toFixed(1);c.push({product:u,country:k,score:F,prev:b,compName:f,compScore:v,gap:m,allScores:S})}}c.length&&(i.productsCnty=c,console.log(`[SYNC] weeklyAll에서 productsCnty ${c.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((d,x)=>d===`W${x+1}`)){const d=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(d.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",d),i.weeklyLabels=d;const x=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(c=>{const h=String(c).split(/\n/);return h[0].trim().toUpperCase()+(h[1]?h[1].trim():"")}).filter(c=>/^W\d+/.test(c));x.length&&(i.weeklyLabelsFull=x)}}return i}const st={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function qn(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),s=Math.floor(i/24);return s>=1?`${s}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Jn({savedAt:t,ageMs:e,stale:o,style:i}){const s=t==null,n=s?"#1E293B":o?"#7F1D1D":"#064E3B",g=s?"#94A3B8":o?"#FCA5A5":"#86EFAC",a=s?"#334155":o?"#B91C1C":"#047857",d=s?"○":o?"⚠️":"●",x=s?"동기화 정보 없음":`데이터 최신화: ${qn(e)}`,c=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:c,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:g,border:`1px solid ${a}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:d}),x]})}function Yn({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const qt="'LG Smart','Arial Narrow',Arial,sans-serif",Gt="#CF0652",Zt="#94A3B8",Ce={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Eo={LG:Gt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},go=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Re={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Xn=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],To={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Me={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE"},Oe=90;function ze(t,e){const o=Ce[e]||Ce.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function ke(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Zn(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function je(t){const e=String(t||"").trim().toUpperCase();return To[e]||t}let Qn=0;function ho(t,e,o,i,s){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const n=Qn++,g={t:18,r:10,b:20,l:10},a=o-g.l-g.r,d=i-g.t-g.b,x=t.filter(b=>b!=null);if(!x.length){let b=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const f=t.length,v=f>1?f-1:1;return b+=t.map((S,m)=>`<text x="${(g.l+m/v*a).toFixed(1)}" y="${g.t+d+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[m]||""}</text>`).join(""),b+="</svg>",b}const c=Math.min(...x)-1,h=Math.max(...x)+1,y=h-c||1,u=t.length,k=u>1?u-1:1,p=t.map((b,f)=>g.l+f/k*a),A=[];t.forEach((b,f)=>{b!=null&&A.push({x:p[f],y:g.t+(1-(b-c)/y)*d,v:b})});let F=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;if(A.length>=2){const b=A.map((v,S)=>`${S?"L":"M"}${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" "),f=b+` L${A[A.length-1].x.toFixed(1)},${g.t+d} L${A[0].x.toFixed(1)},${g.t+d} Z`;F+=`<defs><linearGradient id="lg${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${s}" stop-opacity="0.03"/>
    </linearGradient></defs>`,F+=`<path d="${f}" fill="url(#lg${n})"/>`,F+=`<path d="${b}" stroke="${s}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}return F+=A.map(b=>`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${s}" stroke-width="2"/>`).join(""),F+=A.map(b=>`<text x="${b.x.toFixed(1)}" y="${Math.max(b.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${s}" font-family="${qt}">${b.v.toFixed(1)}</text>`).join(""),F+=t.map((b,f)=>`<text x="${p[f].toFixed(1)}" y="${g.t+d+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[f]||""}</text>`).join(""),F+="</svg>",F}function de(t,e){return Eo[t]||go[e%go.length]}function $o(t,e,o,i){const s=Object.keys(t);if(!s.length||!e.length)return"";let n=1/0,g=-1/0;if(s.forEach(k=>(t[k]||[]).forEach(p=>{p!=null&&(p<n&&(n=p),p>g&&(g=p))})),!isFinite(n))return"";const a=Math.max((g-n)*.15,2);n=Math.max(0,n-a),g=Math.min(100,g+a);const d=g-n||1,x=e.length,c=8,h=8,y=i-c-h;let u="";for(let k=0;k<=4;k++){const p=c+k/4*y;u+=`<line x1="0" y1="${p.toFixed(1)}" x2="${o}" y2="${p.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}return s.forEach((k,p)=>{const A=t[k]||[],F=de(k,p),b=k==="LG",f=b?2.5:1.5,v=b?1:.7,S=[];if(A.forEach((m,C)=>{if(m==null)return;const B=(C+.5)/x*o,E=c+(1-(m-n)/d)*y;S.push({x:B,y:E,v:m})}),!!S.length){if(S.length>=2){const m=S.map((C,B)=>`${B?"L":"M"}${C.x.toFixed(1)},${C.y.toFixed(1)}`).join(" ");u+=`<path d="${m}" stroke="${F}" fill="none" stroke-width="${f}" stroke-linecap="round" stroke-linejoin="round" opacity="${v}"/>`}S.forEach(m=>{u+=`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="${b?3.5:2.5}" fill="#fff" stroke="${F}" stroke-width="${b?2:1.5}" opacity="${v}"/>`})}}),`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${u}</svg>`}function tr({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:s,monthlyVis:n,total:g,meta:a,wLabels:d}){const x={monthlyVis:n};return`
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
${(()=>{const c=h=>JSON.stringify(h).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?c(e):"{}"};
var _products=${c(o.map(h=>({id:h.id,bu:h.bu,kr:h.kr,en:h.en||h.kr,category:h.category||"",date:h.date||"",status:h.status,score:h.score||0,prev:h.prev||0,vsComp:h.vsComp||0,compName:h.compName||"",compRatio:h.compRatio||0,allScores:h.allScores||{},monthlyScores:h.monthlyScores||[]})))};
var _productsCnty=${c(i||[])};
var _unlaunchedMap=${c(s)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${c((x==null?void 0:x.monthlyVis)||[])};
var _total=${c(g)};
var _meta={period:${c(a.period||"")},reportNo:${c(a.reportNo||"")},totalInsight:${c(a.totalInsight||"")}};
var _wLabels=${c(d)};`})()}
${(()=>{const c=h=>JSON.stringify(h).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${c(Eo)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Gt}';
var _FONT=${c(qt)};
var _COMP='${Zt}';
var _REGIONS=${c(Object.fromEntries(Object.entries(Re).map(([h,y])=>[h,y.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Re).map(([c,h])=>[c,t==="en"?h.labelEn:h.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${Oe};
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
      // 미출시 국가가 있는 제품은 prodNameUL이 'kr*' 형식으로 렌더 → 트레일링 * 제거 후 매치
      var name=nameEl.textContent.replace(/\\*$/,'');
      var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
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
    var name=nameEl.textContent.replace(/\\*$/,'');
    var prod=_products.find(function(p){return p.kr===name||p.en===name});if(!prod)return;
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
`}function er(t,e,o,i,s,n,g){if(!e||!Object.keys(e).length)return"";const d=["MS","HS","ES"].map(x=>{const c=t.filter(y=>y.bu===x);if(!c.length)return"";const h=c.map(y=>{var E,T;const u=((E=e[y.id])==null?void 0:E.Total)||{},k=Object.keys(u).sort((j,D)=>{var N,V;if(j==="LG")return-1;if(D==="LG")return 1;const R=((N=u[j])==null?void 0:N[u[j].length-1])||0;return(((V=u[D])==null?void 0:V[u[D].length-1])||0)-R});if(!k.length)return"";const p=ze(y.status,s),A=(T=u.LG)==null?void 0:T[u.LG.length-1],F=k.map((j,D)=>{const R=de(j,D),I=j==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${R};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${j}</span></span>`}).join(""),b=o.length,f=`<colgroup><col style="width:${Oe}px">${o.map(()=>"<col>").join("")}</colgroup>`,v=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:8px 0;border:0">${$o(u,o,b*80,180)}</td></tr>`,S=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:4px 0 6px;border:0">${F}</td></tr>`,m=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(j=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${j}</th>`).join("")}</tr>`,C=k.map((j,D)=>{const R=de(j,D),I=j==="LG",N=o.map((V,q)=>{var et;const J=(et=u[j])==null?void 0:et[q];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${J!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${J!=null?J.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":D%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${R};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${R};margin-right:4px;vertical-align:0"></i>${j}</td>${N}</tr>`}).join(""),B=_e(y.id||y.category,n);return`<div class="trend-row${B?" is-unlaunched":""}" data-prodid="${y.id||y.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Gt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Ge(y,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${B?"#F1F5F9":p.bg};color:${B?"#64748B":p.color};border:1px solid ${B?"#CBD5E1":p.border}">${B?s==="en"?"Unlaunched":"미출시":p.label}</span>
          ${A!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${A.toFixed(1)}%</span>`:""}
          ${y.compName?`<span style="font-size:14px;color:#94A3B8">vs ${y.compName} ${y.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${f}<tbody>${v}${S}${m}${C}</tbody></table></div>
      </div>`}).join("");return h?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${h}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${s==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${g||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${s==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${d}${(()=>{const x=t.filter(c=>Jt(c.id||c.category,n).length>0).map(c=>`${c.kr}: ${Jt(c.id||c.category,n).join(", ")} ${s==="en"?"not launched":"미출시"}`);return x.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${x.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function or(t,e,o,i,s,n){if(!e||!e.length)return"";const g=["MS","HS","ES"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(u){const k=String(u).match(/(\d{1,2})월/);if(k)return parseInt(k[1])-1;const p=String(u).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return p?d[p[1].toLowerCase()]:-1}const c=[0,1,2,3,4,5,6,7,8,9,10,11],h=a.slice(),y=g.map(u=>{const k=t.filter(A=>A.bu===u);if(!k.length)return"";const p=k.map(A=>{const F=A.monthlyScores||[];let b={};if(F.length>=2){const I=new Set;if(F.forEach(N=>{N.allScores&&Object.keys(N.allScores).forEach(V=>I.add(V))}),I.forEach(N=>{b[N]=c.map(V=>{var J;const q=F.find(et=>x(et.date)===V);return((J=q==null?void 0:q.allScores)==null?void 0:J[N])??null})}),!I.size&&(b.LG=c.map(N=>{const V=F.find(q=>x(q.date)===N);return V?V.score:null}),A.vsComp>0)){const N=c.map(V=>{const q=F.find(J=>x(J.date)===V);return(q==null?void 0:q.comp)??null});N.some(V=>V!=null)&&(b[A.compName||"Comp"]=N)}}else{const I=e.filter(J=>J.division===u&&(J.country==="TOTAL"||J.country==="TTL")),N={};I.forEach(J=>{const et=x(J.date);et>=0&&(N[et]=J)});const V=c.map(J=>{var et;return((et=N[J])==null?void 0:et.lg)||null}),q=c.map(J=>{var et;return((et=N[J])==null?void 0:et.comp)||null});b={LG:V},q.some(J=>J!=null&&J>0)&&(b.Samsung=q)}const f=Object.keys(b).sort((I,N)=>{if(I==="LG")return-1;if(N==="LG")return 1;const V=(b[I]||[]).filter(J=>J!=null).pop()||0;return((b[N]||[]).filter(J=>J!=null).pop()||0)-V});if(!f.length)return"";const v=ze(A.status,i),S=(b.LG||[]).filter(I=>I!=null).pop(),m=f.map((I,N)=>{const V=de(I,N),q=I==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${V};opacity:${q?1:.7}"></i><span style="font-size:13px;color:${q?"#1A1A1A":"#94A3B8"};font-weight:${q?700:400}">${I}</span></span>`}).join(""),C=h.length,B=`<colgroup><col style="width:${Oe}px">${h.map(()=>"<col>").join("")}</colgroup>`,E=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:8px 0;border:0">${$o(b,h,C*80,180)}</td></tr>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${C}" style="padding:4px 0 6px;border:0">${m}</td></tr>`,j=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${h.map(I=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${I}</th>`).join("")}</tr>`,D=f.map((I,N)=>{const V=de(I,N),q=I==="LG",J=h.map((et,Nt)=>{var lt;const tt=(lt=b[I])==null?void 0:lt[Nt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${tt!=null?q?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${q?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${tt!=null?tt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${q?"#FFF8F9":N%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${q?700:500};color:${V};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${V};margin-right:4px;vertical-align:0"></i>${I}</td>${J}</tr>`}).join(""),R=_e(A.id||A.category,s);return`<div class="trend-row${R?" is-unlaunched":""}" data-prodid="${A.id||A.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Gt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Ge(A,s)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${R?"#F1F5F9":v.bg};color:${R?"#64748B":v.color};border:1px solid ${R?"#CBD5E1":v.border}">${R?i==="en"?"Unlaunched":"미출시":v.label}</span>
          ${S!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${S.toFixed(1)}%</span>`:""}
          ${A.compName?`<span style="font-size:14px;color:#94A3B8">vs ${A.compName} ${A.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${B}<tbody>${E}${T}${j}${D}</tbody></table></div>
      </div>`}).join("");return p?`<div class="bu-group" data-bu="${u}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${u}</span></div>
      ${p}
    </div>`:""}).join("");return y.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${h[0]}–${h[h.length-1]} (${h.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${y}${(()=>{const u=t.filter(k=>Jt(k.id||k.category,s).length>0).map(k=>`${k.kr}: ${Jt(k.id||k.category,s).join(", ")} ${i==="en"?"not launched":"미출시"}`);return u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function Lo(t,e,o,i,s){let n="";return e&&t&&(n+=`<div class="insight-box"><span class="insight-label">${s.insight}</span><span class="insight-text">${ke(t)}</span></div>`),i&&o&&(n+=`<div class="howto-box"><span class="howto-label">${s.howToRead}</span><span class="howto-text">${ke(o)}</span></div>`),n}function nr(t,e,o,i){const s=+(t.score-t.prev).toFixed(1),n=t.vsComp||0,g=+(t.score-n).toFixed(1),a=s>0?"▲":s<0?"▼":"─",d=s>0?"#22C55E":s<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${d}">${a} ${Math.abs(s).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Gt}"></div>
          </div>
          ${n>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(n,100)}%;background:${Zt}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Gt}"></i> LG ${t.score}%</span>
            ${n>0?`<span><i style="background:${Zt}"></i> Samsung ${n}%</span>`:""}
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
  </div>`}function Jt(t,e){const o=Me[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function _e(t,e){return Xn.every(o=>{const i=Me[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function Ge(t,e){return Jt(t.id||t.category,e).length?`${t.kr}*`:t.kr}function fo(t,e,o,i,s,n,g,a,d){if(!t.length)return"";const c=["MS","HS","ES"].map(h=>{const y=t.filter(k=>k.bu===h);if(!y.length)return"";const u=y.map(k=>{var gt,yt;const p=k.weekly||[],A=p.filter(rt=>rt!=null),F=k.weeklyScore||(A.length>0?A[A.length-1]:k.score),b=k.monthlyScore||k.score,f=F,v=((gt=a==null?void 0:a[k.id])==null?void 0:gt.Total)||((yt=a==null?void 0:a[k.id])==null?void 0:yt.TTL)||{};let S=0;Object.entries(v).forEach(([rt,it])=>{if(rt==="LG"||rt==="lg")return;const ot=Array.isArray(it)&&it.length?it[it.length-1]:0;ot>S&&(S=ot)});const m=k.vsComp||0,C=S>0?F/S*100:m>0?F/m*100:100,B=m>0?b/m*100:100,E=Math.round(C*10)/10,T=Math.round(B*10)/10,j=E,D=C>=100?"lead":C>=80?"behind":"critical",R=ze(D,i),I=A.length>=1?A[A.length-1]:null,N=A.length>=2?A[A.length-2]:null,V=I!=null&&N!=null?+(I-N).toFixed(1):null,q=V>0?"▲":V<0?"▼":"─",J=V>0?"#22C55E":V<0?"#EF4444":"#94A3B8",et=D==="critical"?"#BE123C":D==="behind"?"#D97706":"#15803D",Nt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function lt(rt){const it=String(rt).match(/(\d{1,2})월/);if(it)return parseInt(it[1])-1;const ot=String(rt).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ot?tt[ot[1].toLowerCase()]:-1}let ft=k.monthlyScores||[];if(ft.length<2&&g.length>0){const rt=g.filter(ot=>ot.division===k.bu&&(ot.country==="TOTAL"||ot.country==="TTL")),it={};rt.forEach(ot=>{const mt=lt(ot.date);mt>=0&&(it[mt]={date:ot.date,score:ot.lg,comp:ot.comp})}),ft=Object.keys(it).sort((ot,mt)=>ot-mt).map(ot=>it[ot])}const Yt=ft.length>0?ft.map(rt=>{const it=lt(rt.date);return it>=0?Nt[it]:rt.date}):["M-3","M-2","M-1","M0"],Ct=ft.length>0?ft.map(rt=>rt.score):[null,null,null,k.score],At=ft.length>=2?+(ft[ft.length-1].score-ft[ft.length-2].score).toFixed(1):null,ut=At>0?"▲":At<0?"▼":"─",Ft=At>0?"#22C55E":At<0?"#EF4444":"#94A3B8",Et=j,kt=Et>=100?"#15803D":Et>=80?"#D97706":"#BE123C",O=k.weeklyPrev||(A.length>=5?A[A.length-5]:A[0]||0),Z=F&&O?+(F-O).toFixed(1):null,ct=b&&(k.monthlyPrev||k.prev)?+(b-(k.monthlyPrev||k.prev)).toFixed(1):null,dt=Jt(k.id||k.category,n),z=_e(k.id||k.category,n),Y=z?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:R;return`<div class="prod-card${z?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${F.toFixed(1)}" data-ms="${b.toFixed(1)}" data-wr="${E}" data-mr="${T}" data-wmom="${Z??""}" data-mmom="${ct??""}" style="border-color:${Y.border}">
        <div class="prod-head">
          <span class="prod-name">${Ge(k,n)}</span>
          ${dt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${Y.bg};color:${Y.color};border-color:${Y.border}">${Y.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${f.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${J}">${V!=null?`WoW ${q} ${Math.abs(V).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Ft}">${At!=null?`MoM ${ut} ${Math.abs(At).toFixed(1)}%p`:"MoM —"}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${ho(p,s,300,90,et)}</div>
          <div class="trend-monthly" style="display:none">${ho(Ct,Yt,300,90,et)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Et,120)}%;background:${kt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${kt}">${Et}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${h}">
      <div class="bu-header"><span class="bu-label">${h}</span><span class="bu-count">${y.length}${o.categories}</span></div>
      <div class="prod-grid">${u}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${d||""}${d?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Lo(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead,o)}
    <div class="section-body">${c}${(()=>{const h=t.filter(y=>Jt(y.id||y.category,n).length>0).map(y=>`${y.kr}: ${Jt(y.id||y.category,n).join(", ")} ${i==="en"?"not launched":"미출시"}`);return h.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${h.join(" / ")}</p>`:""})()}</div>
  </div>`}function yo(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),g=Me[n]||(n||"").toUpperCase(),a=i&&i[`${t.country}|${g}`],d=Zn(t.score,t.compScore),x=a?"#94A3B8":d==="lead"?"#15803D":d==="behind"?"#D97706":"#BE123C",c=+(t.score-t.compScore).toFixed(1),h=a?"#64748B":c>=0?"#15803D":"#BE123C",y=130,u=["TCL","HISENSE","HAIER"];let k="",p=0;t.allScores&&Object.entries(t.allScores).forEach(([S,m])=>{const C=String(S).toUpperCase();u.some(E=>C.includes(E))&&m>p&&(k=S,p=m)});const A=Math.max(e,p),F=Math.max(3,Math.round(t.score/A*y)),b=t.compScore>0?Math.max(3,Math.round(t.compScore/A*y)):0,f=p>0?Math.max(3,Math.round(p/A*y)):0,v="#9333EA";return`<div class="vbar-item${a?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${F}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${Zt}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${b}px;background:${Zt}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${p>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${v}">${p.toFixed(1)}</span>
        <div class="vbar-col" style="height:${f}px;background:${v}"></div>
        <span class="vbar-col-name" style="color:${v}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${h}">${c>=0?"+":""}${c}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function mo(t,e,o,i,s,n){if(!t||!t.length)return"";const g=new Map;t.forEach(u=>{g.has(u.product)||g.set(u.product,[]),g.get(u.product).push(u)});const a=e.cntyProductFilter||{},d=[...g.entries()].filter(([u])=>a[u]!==!1).map(([u,k])=>{const p=Math.max(...k.map(F=>Math.max(F.score,F.compScore)),1),A=k.map(F=>yo(F,p,je(F.country),s)).join("");return`<div class="cnty-product" data-group-product="${u}"><div class="bu-header"><span class="bu-label">${u}</span></div><div class="vbar-chart">${A}</div></div>`}).join(""),x=new Map;t.forEach(u=>{x.has(u.country)||x.set(u.country,[]),x.get(u.country).push(u)});const c=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],y=c.filter(u=>x.has(u)).concat([...x.keys()].filter(u=>!c.includes(u))).map(u=>{const k=x.get(u);if(!k)return"";const p=Math.max(...k.map(F=>Math.max(F.score,F.compScore)),1),A=k.map(F=>yo(F,p,F.product,s)).join("");return`<div class="cnty-product" data-group-country="${u}"><div class="bu-header"><span class="bu-label">${je(u)}</span></div><div class="vbar-chart">${A}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${Zt}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${Lo(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead,o)}
    <div class="section-body">
      <div class="cnty-view-country">${y}</div>
      <div class="cnty-view-product" style="display:none">${d}</div>
      ${(()=>{if(!s||!Object.keys(s).length)return"";const u={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},p=[...new Set(t.map(A=>A.product))].map(A=>{const F=u[A]||String(A).toLowerCase(),b=Jt(F,s);return b.length?`${A}: ${b.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return p.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${p.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const bo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function rr(t){const e=bo[t]||bo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(s=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${s.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${s.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function ir(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",s=e==="en"?"All":"전체",n=e==="en"?"Total":"총",g=e==="en"?"":"개",a=e==="en"?"Clear filters":"필터 초기화",d=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],x={};d.forEach(u=>{const k=new Set;t.forEach(p=>{p[u.key]&&k.add(p[u.key])}),x[u.key]=[...k].sort()});const c=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(x).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const h=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),y=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${g?" "+g:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${a}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${d.map(u=>`<th data-col="${u.key}" onclick="_plToggle('${u.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${u.label} <span id="pl-arrow-${u.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${d.map(u=>`<div id="pl-dd-${u.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${u.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${s}</div>
      ${x[u.key].map(k=>`<div onclick="_plFilter('${u.key}','${k.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${k}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${c};
    var _plFilters={};
    var _divC=${h};
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
      ${JSON.stringify(d.map(u=>u.key))}.forEach(function(k){
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
  <\/script>`}function xo(t,e,o,i,s,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const g=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],a=[];for(let T=0;T<12;T++)a.push("w"+(5+T));const d=[...new Set(t.map(T=>T.topic))].filter(Boolean),x=[...new Set(t.map(T=>T.type))].filter(Boolean),c=[...new Set(t.map(T=>T.country))].filter(T=>T&&T!=="TTL"),h=g.filter(T=>c.includes(T)).concat(g.filter(T=>!c.includes(T))),y=JSON.stringify(t).replace(/</g,"\\u003c"),u=JSON.stringify(a),k=JSON.stringify(d),p=JSON.stringify(x),A=JSON.stringify(h),F=72;function b(T){const j={};return T&&String(T).split(`
`).forEach(D=>{const R=D.indexOf("=");if(R>0){const I=D.slice(0,R).trim(),N=D.slice(R+1).trim();I&&(j[I]=N)}}),j}const f=b(i==null?void 0:i.prTopicPromptsRaw);s&&s.length&&d.forEach(T=>{if(!f[T]){const j=s.find(D=>D.topic===T&&D.country==="US");j&&(f[T]=j.prompt)}});const v=(n==null?void 0:n.prTopicList)||[],S={},m={};v.forEach(T=>{[T.topic,T.topicRow,T.oldTopic].filter(Boolean).map(D=>D.trim()).forEach(D=>{T.explanation&&!S[D]&&(S[D]=T.explanation),T.bu&&!m[D]&&(m[D]=T.bu)})});const B={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...S,...b(i==null?void 0:i.prTopicDescsRaw)},E={};return d.forEach(T=>{const j=m[T];if(j)E[T]=j;else{const D=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];E[T]=D.some(R=>T.toLowerCase().includes(R.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Gt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${y},W=${u},TP=${k},TY=${p},CN=${A};
    var CW=${F};
    var TOPIC_CAT=${JSON.stringify(E)};
    var TOPIC_PROMPT=${JSON.stringify(f).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(B).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(v).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(To)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Gt}',COMP='${Zt}';
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
  <\/script>`}function vo(t,e,o,i,s,n){const g=(t||[]).filter(p=>!0);if(!g.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const a=[];for(let p=0;p<12;p++)a.push("w"+(5+p));const x=[...new Set(g.map(p=>p.stakeholder))].filter(Boolean).map(p=>({stakeholder:p,topics:[...new Set(g.filter(A=>A.stakeholder===p).map(A=>A.topic))].filter(Boolean)})),c=72,h=JSON.stringify(g).replace(/</g,"\\u003c"),y=JSON.stringify(a),u=JSON.stringify(x),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Gt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${h},W=${y},GROUPS=${u};
    var CW=${c},RED='${Gt}';
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
      var el=document.getElementById('${k}-sections');if(!el)return;
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
  <\/script>`}function ar(t,e,o,i,s,n,g,a,d,x,c,h,y,u){var Et,kt;o=(o||[]).map(O=>({...O,weekly:(O.weekly||[]).map(Z=>Z??0),monthly:(O.monthly||[]).map(Z=>Z??0)})),x&&typeof x=="object"&&Object.values(x).forEach(O=>{!O||typeof O!="object"||Object.values(O).forEach(Z=>{!Z||typeof Z!="object"||Object.keys(Z).forEach(ct=>{const dt=Z[ct];Array.isArray(dt)&&(Z[ct]=dt.map(z=>z??0))})})});const k={aircare:"Xiaomi"};o=o.map(O=>{const Z=k[(O.id||"").toLowerCase()];if(!Z||!O.allScores)return O;const ct=Object.entries(O.allScores).find(([P])=>P.toLowerCase()===Z.toLowerCase()&&P.toLowerCase()!=="lg");if(!ct)return O;const dt=ct[1];if(!(dt>0))return O;const z=Math.round(O.score/dt*100);return{...O,compName:ct[0],vsComp:dt,compRatio:z,status:z>=100?"lead":z>=80?"behind":"critical"}});const p=(y==null?void 0:y.visibilityOnly)||!1,A=(y==null?void 0:y.includeProgressTracker)===!0,F=(y==null?void 0:y.includePromptList)||!1,b=(u==null?void 0:u.unlaunchedMap)||{},f=n==="en"?"Progress Tracker will be available soon.":"준비 중입니다. 곧 제공될 예정입니다.",v=`/p/progress-tracker-v2/?lang=${n}`,S=A?`<iframe id="tracker-iframe" src="${v}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`:`<div class="progress-placeholder"><div class="inner"><div class="icon">⏳</div><h2>Coming Soon</h2><p>${f}</p></div></div>`,m=Ce[n]||Ce.ko;let C;if(d&&d.length)C=d.map(O=>String(O).toUpperCase().startsWith("W")?O.toUpperCase():O);else{const O=x?Math.max(...Object.values(x).flatMap(ct=>Object.values(ct).flatMap(dt=>Object.values(dt).map(z=>(z==null?void 0:z.length)||0))),0):0,Z=t.weekStart||Math.max(1,O-11);C=Array.from({length:Math.max(12,O)},(ct,dt)=>`W${Z+dt}`)}const B=new Set;x&&Object.values(x).forEach(O=>Object.keys(O).forEach(Z=>{Z!=="Total"&&B.add(Z)})),g&&g.forEach(O=>{O.country&&O.country!=="TTL"&&B.add(O.country)});const E=[...B].sort(),T=n==="en"?"All":"전체",j=["MS","HS","ES"],D=o.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${O.bu}" value="${O.id}" checked onchange="onFilterChange()"><span>${O.kr}</span></label>`).join(""),R=j.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${O}" checked onchange="onBuChange('${O}')"><span>${O}</span></label>`).join(""),I=E.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${O}" checked onchange="onFilterChange()"><span>${je(O)}</span></label>`).join(""),N=Object.entries(Re).map(([O,Z])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${O}" checked onchange="onRegionChange('${O}')"><span>${Z.labelEn}</span></label>`).join(""),q=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${C[C.length-1]} ${n==="en"?"data":"기준"}</span>
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
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${T}</span></label>
        ${R}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${T}</span></label>
        ${D}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${T}</span></label>
        ${N}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${T}</span></label>
        ${I}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Display":"표시"}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${n==="en"?"GEO Insights":"GEO 인사이트"}</span></label>
      </div>
    </div>
  </div>`,et=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${ke(t.noticeText)}</div></div>`:"",t.showTotal!==!1?nr(e,t,m,n):""].join(""),Nt=[];if(x&&Object.keys(x).length){const O={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(x).forEach(([Z,ct])=>{const dt=o.find(P=>P.id===Z),z=(dt==null?void 0:dt.kr)||O[Z]||Z;Object.entries(ct).forEach(([P,Y])=>{if(P==="Total"||P==="TTL"||P==="TOTAL")return;const gt=Y.LG||Y.lg||[],yt=gt.length>0?gt[gt.length-1]:0;if(yt<=0)return;let rt="",it=0;Object.entries(Y).forEach(([St,xt])=>{if(St==="LG"||St==="lg")return;const Rt=Array.isArray(xt)&&xt.length?xt[xt.length-1]:0;Rt>it&&(it=Rt,rt=St)});const ot=+(yt-it).toFixed(1),mt={};Object.entries(Y).forEach(([St,xt])=>{if(Array.isArray(xt)&&xt.length){const Rt=xt[xt.length-1];Rt!=null&&(mt[St]=Rt)}}),Nt.push({product:z,country:P,score:yt,compName:rt,compScore:it,gap:ot,allScores:mt})})})}const tt=((Et=y==null?void 0:y.weeklyLabelsFull)==null?void 0:Et[y.weeklyLabelsFull.length-1])||C[C.length-1]||"",lt=tt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${tt} ${n==="en"?"data":"기준"}</span>`:"",ft=[et,t.showProducts!==!1?fo(o,t,m,n,C,b,(y==null?void 0:y.monthlyVis)||[],x,lt):"",`<div id="trend-container">${er(o,x,C,m,n,b,lt)}</div>`,t.showCnty!==!1?mo(Nt,t,m,n,b,lt):""].join(""),Yt=o.map(O=>{const Z=O.monthlyScore||O.score,ct=O.monthlyPrev||O.prev,dt=O.vsComp||0,z=dt>0?Z/dt*100:100;return{...O,score:Z,prev:ct,weeklyScore:Z,weeklyPrev:ct,monthlyScore:Z,monthlyPrev:ct,weekly:(O.monthlyScores||[]).map(P=>P.score),status:z>=100?"lead":z>=80?"behind":"critical"}}),Ct=(((kt=o[0])==null?void 0:kt.monthlyScores)||[]).map(O=>{const Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ct=String(O.date).match(/(\d{1,2})월/),dt=String(O.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ct?Z[parseInt(ct[1])-1]:dt?dt[1].charAt(0).toUpperCase()+dt[1].slice(1).toLowerCase():O.date}),At=(y==null?void 0:y.monthlyVis)||[],ut=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Ft=[et,t.showProducts!==!1?fo(Yt,t,m,n,Ct.length?Ct:["Feb","Mar"],b,At,{},ut):"",`<div id="monthly-trend-container">${or(Yt,At,m,n,b,ut)}</div>`,t.showCnty!==!1?mo(g,t,m,n,b,ut):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>${Yn({FONT:qt,RED:Gt,COMP:Zt})}</style>
</head>
<body>
${p?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${q.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${ft}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Ft}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${xo(u==null?void 0:u.weeklyPR,u==null?void 0:u.weeklyPRLabels,n,t,u==null?void 0:u.appendixPrompts,u)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${vo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    <button class="tab-btn" onclick="switchTab('readability')">Readability</button>
    ${A?`<button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>`:""}
    ${F?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${q}
    <div id="bu-weekly-content" class="dash-container">${ft}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Ft}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${xo(u==null?void 0:u.weeklyPR,u==null?void 0:u.weeklyPRLabels,n,t,u==null?void 0:u.appendixPrompts,u)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${vo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <p>${m.readabilityMsg}</p>
  </div></div>
</div>
<div id="tab-progress" class="tab-panel">
  ${S}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${ir(u==null?void 0:u.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${rr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${m.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${tr({lang:n,weeklyAll:x,products:o,productsCnty:g,ulMap:b,monthlyVis:y==null?void 0:y.monthlyVis,total:e,meta:t,wLabels:C})}
<\/script>
</body>
</html>`}function sr(t){const e=t.filter(d=>d.status==="lead"),o=t.filter(d=>d.status==="behind"),i=t.filter(d=>d.status==="critical"),s=[...t].sort((d,x)=>x.score-d.score)[0],n=[...t].sort((d,x)=>d.score-x.score)[0],g=(t.reduce((d,x)=>d+x.score,0)/t.length).toFixed(1),a=[];return a.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${g}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),s&&a.push(`가장 높은 카테고리는 ${s.kr} ${s.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(s.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?a.push(`취약 카테고리(${i.map(d=>d.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&a.push(`추격 카테고리(${o.map(d=>d.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),a.join(" ")}function lr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function cr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}function dr({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:s,metaEn:n,setMetaEn:g,total:a,setTotal:d,products:x,setProducts:c,citations:h,setCitations:y,dotcom:u,setDotcom:k,productsCnty:p,setProductsCnty:A,citationsCnty:F,setCitationsCnty:b,resolved:f,previewLang:v,setPreviewLang:S,snapshots:m,setSnapshots:C,setWeeklyLabels:B,setWeeklyAll:E,weeklyLabels:T,weeklyAll:j,citationsByCnty:D,dotcomByCnty:R,generateHTML:I,publishEndpoint:N,setMonthlyVis:V,onSyncExtra:q,categoryStats:J,extra:et,monthlyVis:Nt}){const tt=H.useRef({products:x,productsCnty:p,citations:h,citationsCnty:F,total:a,dotcom:u,extra:et});tt.current={products:x,productsCnty:p,citations:h,citationsCnty:F,total:a,dotcom:u,extra:et};function lt(){return tt.current}const[ft,Yt]=H.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Ct,At]=H.useState(!1),[ut,Ft]=H.useState(null),[Et,kt]=H.useState(""),[O,Z]=H.useState(""),[ct,dt]=H.useState(!1),[z,P]=H.useState(""),[Y,gt]=H.useState(!1),[yt,rt]=H.useState(!1),[it,ot]=H.useState(!1),[mt,St]=H.useState(!1),[xt,Rt]=H.useState(""),[Wt,pe]=H.useState(!1),[ue,ge]=H.useState(!0),[Pt,Mt]=H.useState(""),[Qt,Ae]=H.useState(null);H.useEffect(()=>{fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(w=>w.ok?w.json():null).then(Ae).catch(()=>{})},[t,N]);const[Bo,Ue]=H.useState(null);H.useEffect(()=>{let l=!0;const w=()=>to(t).then(wt=>{l&&Ue(wt)});w();const nt=setInterval(w,6e4);return()=>{l=!1,clearInterval(nt)}},[t]);function Ro(){to(t).then(Ue)}async function jo(){if(!mt){St(!0),Rt("");try{const l=lt(),w=be(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),nt=be(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let wt,Ot,U;if(t==="dashboard"){const W=Nt||[],X=l.extra||et||{};wt=I(i,l.total,w.products,w.citations,l.dotcom,"ko",w.productsCnty,w.citationsCnty,T,j,D,R,W,X),Ot=I(n,l.total,nt.products,nt.citations,l.dotcom,"en",nt.productsCnty,nt.citationsCnty,T,j,D,R,W,X),U=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else wt=I(i,l.total,w.products,w.citations,u,"ko",w.productsCnty,w.citationsCnty,{weeklyLabels:T,categoryStats:J,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Ot=I(n,l.total,nt.products,nt.citations,u,"en",nt.productsCnty,nt.citationsCnty,{weeklyLabels:T,categoryStats:J,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),U=`${i.period||""} ${i.title||"Newsletter"}`.trim();const Lt=await(await fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:U,htmlKo:wt,htmlEn:Ot})})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if(Ae({...Lt,published:!0}),t==="dashboard")try{const W=await we(t)||{},X=l.extra||et||{};eo(t,{...W,meta:i,total:l.total,weeklyPR:X.weeklyPR||W.weeklyPR,weeklyPRLabels:X.weeklyPRLabels||W.weeklyPRLabels,weeklyBrandPrompt:X.weeklyBrandPrompt||W.weeklyBrandPrompt,weeklyBrandPromptLabels:X.weeklyBrandPromptLabels||W.weeklyBrandPromptLabels,appendixPrompts:X.appendixPrompts||W.appendixPrompts})}catch{}const zt=`${window.location.origin}${Lt.urls.ko}`,jt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(zt+`
`+jt)}catch{}Rt(`KO: ${zt}
EN: ${jt}`)}catch(l){Rt("ERROR:"+l.message)}finally{St(!1),setTimeout(()=>Rt(""),2e4)}}}async function Io(){if(!Wt){pe(!0),Mt("");try{const l=await Fn(ar,be,{includeProgressTracker:ue});Mt(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){Mt("ERROR: "+l.message)}finally{pe(!1),setTimeout(()=>Mt(""),15e3)}}}async function Do(){try{(await(await fetch(N||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"DELETE"})).json()).ok&&Ae(null)}catch{}}async function No(){if(v!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}rt(!0)}async function He(l){rt(!1),ot(!0);const w=(l==null?void 0:l.products)??x,nt=(l==null?void 0:l.productsCnty)??p,wt=(l==null?void 0:l.citations)??h,Ot=(l==null?void 0:l.citationsCnty)??F;try{const U=i,ae=[U.title||"",U.dateLine||"",U.noticeText||"",U.totalInsight||"",U.reportType||"",U.productInsight||"",U.productHowToRead||"",U.citationInsight||"",U.citationHowToRead||"",U.dotcomInsight||"",U.dotcomHowToRead||"",U.todoText||"",U.kpiLogicText||"",U.cntyInsight||"",U.cntyHowToRead||"",U.citDomainInsight||"",U.citDomainHowToRead||"",U.citCntyInsight||"",U.citCntyHowToRead||"",U.period||"",U.team||"",U.reportNo||""],$=w.map(G=>G.kr||""),Lt=w.map(G=>G.compName||""),zt=wt.map(G=>G.category||""),jt=[...new Set(nt.map(G=>G.country||""))],W=[...new Set(nt.map(G=>G.product||""))],X=[...new Set(nt.map(G=>G.compName||""))],pt=[...new Set(Ot.map(G=>G.cnty||"").filter(G=>G&&G!=="TTL"))],at=[...ae,...$,...Lt,...zt,...jt,...W,...X,...pt].map(G=>G||" "),K=await An(at,{from:"ko",to:"en"});let _=0;const Kt={...i,title:K[_++]||U.title,dateLine:K[_++]||U.dateLine,noticeText:K[_++]||U.noticeText,totalInsight:K[_++]||U.totalInsight,reportType:K[_++]||U.reportType,productInsight:K[_++]||U.productInsight,productHowToRead:K[_++]||U.productHowToRead,citationInsight:K[_++]||U.citationInsight,citationHowToRead:K[_++]||U.citationHowToRead,dotcomInsight:K[_++]||U.dotcomInsight,dotcomHowToRead:K[_++]||U.dotcomHowToRead,todoText:K[_++]||U.todoText,kpiLogicText:K[_++]||U.kpiLogicText,cntyInsight:K[_++]||U.cntyInsight,cntyHowToRead:K[_++]||U.cntyHowToRead,citDomainInsight:K[_++]||U.citDomainInsight,citDomainHowToRead:K[_++]||U.citDomainHowToRead,citCntyInsight:K[_++]||U.citCntyInsight,citCntyHowToRead:K[_++]||U.citCntyHowToRead,period:(_++,U.period),team:K[_++]||U.team,reportNo:(_++,U.reportNo)},Bt=G=>G&&G.replace(/\b\w/g,Q=>Q.toUpperCase()),Ut=G=>(G||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Xt={};w.forEach((G,Q)=>{Xt[G.id]={en:Bt(K[_+Q]||G.kr),compNameEn:Ut(K[_+$.length+Q]||G.compName)}}),_+=$.length+Lt.length;const It={};wt.forEach((G,Q)=>{It[`${G.rank}_${G.source}`]=Bt(K[_+Q]||G.category)}),_+=zt.length;const ne={};jt.forEach((G,Q)=>{ne[G]=/^[A-Z]{2,3}$/.test(G)?G:K[_+Q]||G}),_+=jt.length;const he={};W.forEach((G,Q)=>{he[G]=K[_+Q]||G}),_+=W.length;const se={};X.forEach((G,Q)=>{se[G]=K[_+Q]||G}),_+=X.length;const le={};pt.forEach((G,Q)=>{le[G]=/^[A-Z]{2,3}$/.test(G)?G:K[_+Q]||G}),g(Kt),c(G=>G.map(Q=>{var Ve,We;return{...Q,en:((Ve=Xt[Q.id])==null?void 0:Ve.en)||Q.en||Q.kr,compNameEn:((We=Xt[Q.id])==null?void 0:We.compNameEn)||Q.compNameEn||Q.compName}})),y(G=>G.map(Q=>({...Q,categoryEn:It[`${Q.rank}_${Q.source}`]||Q.categoryEn||Q.category}))),A(G=>G.map(Q=>({...Q,countryEn:Bt(ne[Q.country]||Q.country),productEn:Bt(he[Q.product]||Q.product),compNameEn:Ut(se[Q.compName]||Q.compName)}))),b(G=>G.map(Q=>({...Q,cntyEn:Q.cnty==="TTL"?"TTL":Bt(le[Q.cnty]||Q.cnty)}))),ot(!1)}catch(U){alert("번역 오류: "+U.message),ot(!1)}}async function Po(){const l=I(e,a,f.products,f.citations,u,v,f.productsCnty,f.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const w=document.createElement("textarea");w.value=l,document.body.appendChild(w),w.select(),document.execCommand("copy"),document.body.removeChild(w)}dt(!0),setTimeout(()=>dt(!1),2500)}async function Mo(){await Bn(e,a,x,h,u)}async function Oo(){if(Y!=="sending"){gt("sending");try{const l=lt(),w=I(e,l.total,l.products,l.citations,l.dotcom,v,l.productsCnty,l.citationsCnty,{weeklyLabels:T,categoryStats:J,unlaunchedMap:(et==null?void 0:et.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),nt=`[LG GEO] ${e.title} · ${e.period}`,Ot=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:z.trim(),subject:nt,html:w})})).json();if(!Ot.ok)throw new Error(Ot.error||"발송 실패");gt("ok"),setTimeout(()=>gt(!1),4e3)}catch(l){gt("error"),kt(l.message),setTimeout(()=>{gt(!1),kt("")},5e3)}}}async function zo(){var nt,wt,Ot,U,ae;if(Ct)return;const l=Vn(ft.trim());if(!l){Ft("error"),kt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Ft(null),3e3);return}At(!0),Ft(null),kt(""),Z("");const w=[];try{const $=await Kn(l,W=>kt(W));if(w.push(`[Sync] parsed keys: ${Object.keys($).join(", ")||"(없음)"}`),$.meta&&w.push(`[Sync] meta keys: ${Object.keys($.meta).join(", ")}`),$.productsPartial&&w.push(`[Sync] products: ${$.productsPartial.length}건`),w.push(`[Sync] citations: ${((nt=$.citations)==null?void 0:nt.length)??0}건`),w.push(`[Sync] citationsCnty: ${((wt=$.citationsCnty)==null?void 0:wt.length)??0}건`),w.push(`[Sync] dotcom: ${$.dotcom?"OK":"(없음)"}`),w.push(`[Sync] productsCnty: ${((Ot=$.productsCnty)==null?void 0:Ot.length)??0}건`),$.meta){const W=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","noticeText","kpiLogicText","todoText","aiPromptRules"];s(X=>{const pt={...X};for(const[at,K]of Object.entries($.meta))W.includes(at)&&X[at]||(pt[at]=K);return pt}),g(X=>({...X,period:$.meta.period,dateLine:$.meta.dateLine,reportNo:$.meta.reportNo}))}if($.citations&&(y($.citations),tt.current={...tt.current,citations:$.citations}),$.dotcom&&(k(W=>({...W,...$.dotcom})),tt.current={...tt.current,dotcom:{...tt.current.dotcom,...$.dotcom}}),$.productsCnty&&(A($.productsCnty),tt.current={...tt.current,productsCnty:$.productsCnty}),$.citationsCnty&&(b($.citationsCnty),tt.current={...tt.current,citationsCnty:$.citationsCnty}),$.monthlyVis&&V&&V($.monthlyVis),q){const W={weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,weeklyLabelsFull:$.weeklyLabelsFull||null,prTopicList:$.prTopicList||null};q(W),tt.current={...tt.current,extra:{...tt.current.extra,...W}}}const Lt=$.weeklyLabels||((U=$.meta)==null?void 0:U.weeklyLabels);console.log("[SYNC] weeklyLabels:",Lt,"weeklyLabelsFull:",$.weeklyLabelsFull),Lt&&Lt.length&&B(Lt),$.weeklyAll&&E(W=>({...W,...$.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys($));const zt=$.weeklyMap?Object.keys($.weeklyMap):[],jt=((ae=$.productsPartial)==null?void 0:ae.map(W=>W.id))||[];if(console.log("[SYNC] weeklyMap keys:",zt.length?zt:"NONE"),console.log("[SYNC] productsPartial IDs:",jt.length?jt:"NONE"),zt.length&&jt.length){const W=jt.filter(pt=>!zt.includes(pt)),X=zt.filter(pt=>!jt.includes(pt));W.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",W),X.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",X),!W.length&&!X.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if($.productsPartial){const W=$.productsPartial.map(X=>{var se;const pt=((se=$.weeklyMap)==null?void 0:se[X.id])||[],at=pt.filter(le=>le!=null&&le>0),K=X.score,_=X.prev||0,Kt=X.vsComp>0?Math.round(K/X.vsComp*100):100,Bt=at.length>0?at[at.length-1]:K,Ut=at.length>=5?at[at.length-5]:at[0]||0,Xt=K,It=_,ne=Kt,he=_>0&&_!==K?[_,K]:[];return{...X,score:Xt,prev:It,weekly:pt,monthly:he,weeklyScore:Bt,weeklyPrev:Ut,monthlyScore:K,monthlyPrev:_,compRatio:ne,status:ne>=100?"lead":ne>=80?"behind":"critical"}});c(W),tt.current={...tt.current,products:W}}else $.weeklyMap&&c(W=>W.map(X=>{var at;const pt=(at=$.weeklyMap)==null?void 0:at[X.id];return pt?{...X,weekly:pt}:X}));if($.total){const W={...tt.current.total,...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}};d(X=>({...X,...W})),tt.current={...tt.current,total:W}}{let W=function(_){if(!_)return 0;const Kt=String(_).trim(),Bt=Kt.match(/(\d{1,2})월/);if(Bt){const It=parseInt(Bt[1]);return It>=1&&It<=12?It:0}const Ut=Kt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Ut)return at[Ut[1].toLowerCase()]||0;const Xt=Kt.match(/\d{4}[-\/](\d{1,2})/);if(Xt){const It=parseInt(Xt[1]);return It>=1&&It<=12?It:0}return 0};const X=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],at={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let K=0;if($.derivedPeriod){const _=W($.derivedPeriod);_>K&&(K=_)}if($.citDerivedPeriod){const _=W($.citDerivedPeriod);_>K&&(K=_)}K>0&&K<=12&&(s(_=>({..._,period:`${X}년 ${K}월`})),g(_=>({..._,period:`${pt[K]} ${X}`})))}if(!$.total&&$.productsPartial&&$.productsPartial.length>0){const W=$.productsPartial,X=+(W.reduce((at,K)=>at+K.score,0)/W.length).toFixed(1),pt=+(W.reduce((at,K)=>at+(K.vsComp||0),0)/W.length).toFixed(1);d(at=>({...at,score:X,vsComp:pt,rank:X>=pt?1:2}))}if(setTimeout(()=>{eo(t,{meta:$.meta||null,total:$.total?{...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}}:null,productsPartial:$.productsPartial||null,weeklyMap:$.weeklyMap||null,weeklyLabels:$.weeklyLabels||null,weeklyLabelsFull:$.weeklyLabelsFull||null,weeklyAll:$.weeklyAll||null,citations:$.citations||null,dotcom:$.dotcom||null,productsCnty:$.productsCnty||null,citationsCnty:$.citationsCnty||null,citationsByCnty:$.citationsByCnty||null,dotcomByCnty:$.dotcomByCnty||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,prTopicList:$.prTopicList||null,monthlyVis:$.monthlyVis||null,weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,monthlyPR:$.monthlyPR||null,monthlyPRLabels:$.monthlyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,monthlyBrandPrompt:$.monthlyBrandPrompt||null,monthlyBrandPromptLabels:$.monthlyBrandPromptLabels||null,dotcomTrend:$.dotcomTrend||null,dotcomTrendMonths:$.dotcomTrendMonths||null}),setTimeout(Ro,250)},100),Z(w.join(`
`)),Ft("ok"),kt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const W={};$.productsPartial&&(W.products=$.productsPartial.map(X=>{var Bt;const pt=((Bt=$.weeklyMap)==null?void 0:Bt[X.id])||[],at=X.vsComp>0?X.score/X.vsComp*100:100,K=pt.find(Ut=>Ut!=null&&Ut>0),_=X.prev!=null&&X.prev>0?X.prev:K||0,Kt=_>0?[_,X.score]:[];return{...X,prev:_,weekly:pt,monthly:Kt,compRatio:Math.round(at),status:at>=100?"lead":at>=80?"behind":"critical"}})),$.productsCnty&&(W.productsCnty=$.productsCnty),$.citations&&(W.citations=$.citations),$.citationsCnty&&(W.citationsCnty=$.citationsCnty);try{await He(W)}catch{}kt("동기화 + 번역 완료!")}}catch($){w.push(`[ERROR] ${$.message}`),Ft("error"),kt($.message),Z(w.join(`
`))}finally{At(!1),setTimeout(()=>{Ft(null),kt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:ht,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Jn,{...Bo||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:ft,onChange:l=>Yt(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...st,fontSize:11,padding:"7px 9px",marginBottom:8,color:ft?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:zo,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Ct?"wait":"pointer",background:Ct?"#1E293B":ht,fontSize:12,fontWeight:700,color:Ct?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(Ke,{size:13,style:{animation:Ct?"spin 1s linear infinite":"none"}}),Ct?"동기화 중...":"구글 시트 동기화"]}),(ut||Ct&&Et)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:ut==="ok"?"#14532D":ut==="error"?"#450A0A":"#1E293B",color:ut==="ok"?"#86EFAC":ut==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${ut==="ok"?"#22C55E33":ut==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Et}),O&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[O,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(O).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsxs("button",{onClick:No,disabled:it,style:{width:"100%",padding:"9px 0",background:it?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:it?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:it?.6:1},children:[r.jsx(_o,{size:13})," ",it?"번역 중...":"AI 번역 (EN)"]}),yt&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>rt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:He,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})}),r.jsxs("button",{onClick:Mo,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(Go,{size:12})," 구글 시트 템플릿 다운로드"]}),r.jsxs("button",{onClick:jo,disabled:mt,style:{width:"100%",padding:"9px 0",background:mt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:mt?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:mt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(qe,{size:12}),mt?"게시 중...":"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:ue,onChange:l=>ge(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:Io,disabled:Wt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Wt?"#1E293B":"#166534",color:Wt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:Wt?"wait":"pointer",marginBottom:6},children:[r.jsx(qe,{size:12}),Wt?"통합 게시 중...":"통합 대시보드 게시"]}),Pt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:Pt.startsWith("ERROR")?"#450A0A":"#14532D",color:Pt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Pt.startsWith("ERROR:")?Pt.slice(6):Pt})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||""};if(!Object.values(l).some(nt=>nt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const wt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();wt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(wt.error||""))}catch(nt){alert("아카이빙 실패: "+nt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(Uo,{size:12})," 완성본 아카이빙 (AI 학습)"]}),xt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:xt.startsWith("ERROR:")?"#450A0A":"#14532D",color:xt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${xt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:xt.startsWith("ERROR:")?xt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(Je,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[xt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),(Qt==null?void 0:Qt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:Do,style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Qt.urls.ko},{label:"EN",url:Qt.urls.en}].map(({label:l,url:w})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:w,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",w]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${w}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(Je,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:Qt.ts?new Date(Qt.ts).toLocaleString("ko-KR"):""})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(w=>({...w,reportType:l.target.value})),style:{...st,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(w=>({...w,reportNo:l.target.value})),style:{...st}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(w=>({...w,period:l.target.value})),style:{...st}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(w=>({...w,title:l.target.value})),rows:4,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(w=>({...w,team:l.target.value})),style:{...st,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(w=>({...w,dateLine:l.target.value})),style:{...st,marginBottom:10}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(w=>({...w,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(w=>({...w,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(w=>({...w,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:ht,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(w=>({...w,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,w])=>r.jsx("button",{onClick:()=>o(nt=>({...nt,titleColor:l})),title:w,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:w})=>r.jsx("button",{onClick:()=>o(nt=>({...nt,[l]:!nt[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?ht:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:w},l))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?ht:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?ht:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?ht:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,totalInsight:"⏳ AI 생성 중..."}));const l=await $t("totalInsight",{products:lt().products,productsCnty:lt().productsCnty,total:lt().total,todoText:e.todoText||""},v);o(w=>({...w,totalInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,totalInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(w=>({...w,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productInsight:"⏳ AI 생성 중..."}));const l=await $t("product",{products:lt().products,total:lt().total},v);o(w=>({...w,productInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,productInsight:`[AI 실패: ${l.message}]

`+sr(lt().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?ht:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(w=>({...w,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,productHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"제품별 GEO Visibility"},v);o(w=>({...w,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:lr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?ht:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(w=>({...w,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyInsight:"⏳ AI 생성 중..."}));const l=await $t("cnty",{productsCnty:lt().productsCnty},v);o(w=>({...w,cntyInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,cntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?ht:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(w=>({...w,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"국가별 GEO Visibility"},v);o(w=>({...w,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:cr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?ht:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(w=>({...w,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(w=>({...w,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(w=>({...w,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(w=>({...w,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(w=>({...w,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationInsight:"⏳ AI 생성 중..."}));const l=await $t("citation",{citations:lt().citations},v);o(w=>({...w,citationInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?ht:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(w=>({...w,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citationHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"Citation 도메인별 현황"},v);o(w=>({...w,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?ht:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(w=>({...w,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainInsight:"⏳ AI 생성 중..."}));const l=await $t("citDomain",{citationsCnty:lt().citationsCnty},v);o(w=>({...w,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?ht:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(w=>({...w,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"도메인별 Citation 현황"},v);o(w=>({...w,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?ht:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(w=>({...w,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyInsight:"⏳ AI 생성 중..."}));const l=await $t("citCnty",{citationsCnty:lt().citationsCnty},v);o(w=>({...w,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?ht:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(w=>({...w,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"국가별 Citation 도메인"},v);o(w=>({...w,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?ht:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(w=>({...w,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),p.length>0&&(()=>{const l=[...new Set(f.productsCnty.map(w=>w.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(w=>{const nt=(e.cntyProductFilter||{})[w]!==!1;return r.jsx("button",{onClick:()=>o(wt=>({...wt,cntyProductFilter:{...wt.cntyProductFilter||{},[w]:!nt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:nt?"#166534":"#1E293B",color:nt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:w},w)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomInsight:"⏳ AI 생성 중..."}));const l=await $t("dotcom",{dotcom:lt().dotcom},v);o(w=>({...w,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?ht:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(w=>({...w,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"닷컴 Citation"},v);o(w=>({...w,dotcomHowToRead:l}))}catch{o(w=>({...w,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?ht:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(w=>({...w,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(w=>({...w,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(w=>({...w,todoText:"⏳ AI 생성 중..."}));const l=await $t("todo",{products:lt().products},v);o(w=>({...w,todoText:l}))}catch(l){console.error("[AI]",l),o(w=>({...w,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Tt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?ht:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(w=>({...w,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("button",{onClick:Po,style:{width:"100%",padding:"9px 0",background:ct?"#14532D":"transparent",border:`1px solid ${ct?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:ct?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:ct?r.jsxs(r.Fragment,{children:[r.jsx(Le,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Co,{size:12})," 이메일 HTML 복사"]})}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:z,onChange:l=>P(l.target.value),placeholder:"recipient@example.com",style:{...st,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:Oo,disabled:Y==="sending"||!z.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:Y==="sending"||!z.trim()?"not-allowed":"pointer",background:Y==="ok"?"#14532D":Y==="error"?"#7F1D1D":Y==="sending"?"#1E3A5F":z.trim()?"#1D4ED8":"#1E293B",color:Y==="ok"?"#86EFAC":Y==="error"?"#FCA5A5":z.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:Y==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(Ke,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):Y==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Le,{size:12})," 발송 완료!"]}):Y==="error"?r.jsxs(r.Fragment,{children:[r.jsx(Ye,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(Ye,{size:12})," 메일 발송"]})})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const re="monthly-report",wo="geo-monthly-report-cache";function pr({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:g=[],lang:a="ko",weeklyLabels:d,categoryStats:x,stakeholderStats:c}){const h=H.useRef(null),y=H.useMemo(()=>Ne(t,e,o,i,s,a,n,g,{categoryStats:x,stakeholderStats:c}),[t,e,o,i,s,a,n,g,d]);return qo.useEffect(()=>{const u=h.current;if(!u)return;const k=u.contentDocument||u.contentWindow.document;k.open(),k.write(y),k.close();const p=()=>{try{k.body.style.overflow="hidden",k.documentElement.style.overflow="hidden";const A=k.documentElement.scrollHeight;A&&(u.style.height=A+20+"px")}catch{}};setTimeout(p,150),setTimeout(p,400),setTimeout(p,1e3),setTimeout(p,2e3)},[y]),r.jsx("iframe",{ref:h,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function ur({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:g=[],lang:a="ko",weeklyLabels:d,categoryStats:x,stakeholderStats:c}){const[h,y]=H.useState(!1),u=H.useMemo(()=>Ne(t,e,o,i,s,a,n,g,{categoryStats:x,stakeholderStats:c}),[t,e,o,i,s,a,n,g,d,x]);async function k(){try{await navigator.clipboard.writeText(u)}catch{const p=document.createElement("textarea");p.value=u,document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p)}y(!0),setTimeout(()=>y(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:L,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:k,style:{padding:"6px 14px",borderRadius:7,border:"none",background:h?"#14532D":ht,color:h?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:h?r.jsxs(r.Fragment,{children:[r.jsx(Le,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Co,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:u})})]})}function gr(){const t=H.useRef(bn(wo)).current,[e,o]=H.useState({...fe,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,s]=H.useState({...fe,...(t==null?void 0:t.metaEn)??{}}),[n,g]=H.useState((t==null?void 0:t.total)??un),[a,d]=H.useState((t==null?void 0:t.products)??gn),[x,c]=H.useState((t==null?void 0:t.citations)??mn),[h,y]=H.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:hn),[u,k]=H.useState((t==null?void 0:t.productsCnty)??fn),[p,A]=H.useState((t==null?void 0:t.citationsCnty)??yn),[F,b]=H.useState((t==null?void 0:t.weeklyLabels)??null),[f,v]=H.useState((t==null?void 0:t.weeklyAll)??{}),[S,m]=H.useState(null),[C,B]=H.useState(null),[E,T]=H.useState("preview"),[j,D]=H.useState("ko"),[R,I]=H.useState([]),[N,V]=H.useState(""),[q,J]=H.useState(!1),[et,Nt]=H.useState(""),[tt,lt]=H.useState(null),[ft,Yt]=H.useState(!0);H.useEffect(()=>{let z=!1;const P=$n(e.period)||"3월";async function Y(){var gt,yt,rt;try{const it=await fetch("/api/tracker-snapshot-v2"),ot=it.ok?await it.json():null;if(ot!=null&&ot.ok&&((rt=(yt=(gt=ot.data)==null?void 0:gt.quantitativeGoals)==null?void 0:yt.rows)!=null&&rt.length)){const mt=no(ot.data,P),St=io(ot.data,P);if(mt!=null&&mt.length&&!z){m(mt),St!=null&&St.length&&B(St);return}}}catch{}try{const[{parseKPISheet:it},ot]=await Promise.all([Be(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Be(()=>import("./xlsx-2l-k0XfJ.js").then(Mt=>Mt.x),__vite__mapDeps([0,1]))]),mt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,St=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${mt}&headers=1`,xt=await fetch(St,{cache:"no-store"});if(!xt.ok)return;const Rt=await xt.text(),Wt=ot.read(Rt,{type:"string"}),pe=Wt.Sheets[Wt.SheetNames[0]],ue=ot.utils.sheet_to_json(pe,{header:1,defval:""}),ge=it(ue),Pt=no(ge,P);if(Pt!=null&&Pt.length&&!z){m(Pt);const Mt=io(ge,P);Mt!=null&&Mt.length&&B(Mt)}}catch{}}return Y(),()=>{z=!0}},[e.period]);const Ct=j==="en"?i:e,At=j==="en"?s:o,ut=H.useMemo(()=>be(a,u,x,p,j),[a,u,x,p,j]);H.useEffect(()=>{vn(re).then(I)},[]);const Ft=H.useRef(null);function Et(z,P=2e3){clearTimeout(Ft.current),Nt(z),Ft.current=setTimeout(()=>Nt(""),P)}H.useEffect(()=>()=>clearTimeout(Ft.current),[]);const kt=H.useRef(!1);H.useEffect(()=>{let z=!1;return we(re).then(P=>{z||!P||(kt.current=!0,P.meta&&o(Y=>({...Y,...P.meta})),P.total&&g(Y=>({...Y,...P.total})),P.citations&&c(P.citations),P.dotcom&&y(Y=>({...Y,...P.dotcom})),P.productsCnty&&k(P.productsCnty),P.citationsCnty&&A(P.citationsCnty),P.weeklyLabels&&b(P.weeklyLabels),P.weeklyAll&&v(Y=>({...Y,...P.weeklyAll})),P.productsPartial?d(P.productsPartial.map(Y=>{var rt;const gt=((rt=P.weeklyMap)==null?void 0:rt[Y.id])||[],yt=Y.vsComp>0?Y.score/Y.vsComp*100:100;return{...Y,weekly:gt,monthly:[],compRatio:Math.round(yt),status:yt>=100?"lead":yt>=80?"behind":"critical"}})):P.weeklyMap&&d(Y=>Y.map(gt=>{var rt;const yt=(rt=P.weeklyMap)==null?void 0:rt[gt.id];return yt?{...gt,weekly:yt}:gt})))}),()=>{z=!0}},[]),H.useEffect(()=>{xn(wo,{metaKo:e,metaEn:i,total:n,products:a,citations:x,dotcom:h,productsCnty:u,citationsCnty:p,weeklyLabels:F,weeklyAll:f})},[e,i,n,a,x,h,u,p,F,f]);async function O(){if(!tt)return;const P=await Cn(re,tt,{metaKo:e,metaEn:i,total:n,products:a,citations:x,dotcom:h,productsCnty:u,citationsCnty:p,weeklyLabels:F,weeklyAll:f});P&&I(P),Et(P?"저장 완료!":"저장 실패")}async function Z(){var Y;const z=N.trim()||`${Ct.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,P=await wn(re,z,{metaKo:e,metaEn:i,total:n,products:a,citations:x,dotcom:h,productsCnty:u,citationsCnty:p,weeklyLabels:F,weeklyAll:f});P&&(I(P),V(""),lt(((Y=P[0])==null?void 0:Y.ts)||null)),Et(P?"새로 저장 완료!":"저장 실패")}function ct(z){const P=z.data;o({...fe,...P.metaKo||P.meta||{}}),s({...fe,...P.metaEn||{}}),P.total&&g(P.total),P.products&&d(P.products),P.citations&&c(P.citations),P.dotcom&&y(P.dotcom),P.productsCnty&&k(P.productsCnty),P.citationsCnty&&A(P.citationsCnty),P.weeklyLabels&&b(P.weeklyLabels),P.weeklyAll&&v(P.weeklyAll),lt(z.ts),Et(`"${z.name}" 불러옴`)}async function dt(z){const P=R[z];if(!P)return;const Y=await kn(re,P.ts);Y&&I(Y),tt===P.ts&&lt(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[ft&&r.jsx(dr,{mode:re,meta:Ct,setMeta:At,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:s,total:n,setTotal:g,products:a,setProducts:d,citations:x,setCitations:c,dotcom:h,setDotcom:y,productsCnty:u,setProductsCnty:k,citationsCnty:p,setCitationsCnty:A,resolved:ut,previewLang:j,setPreviewLang:D,snapshots:R,setSnapshots:I,setWeeklyLabels:b,setWeeklyAll:v,weeklyLabels:F,weeklyAll:f,generateHTML:Ne}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>Yt(z=>!z),title:ft?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:ft?r.jsx(Ho,{size:16}):r.jsx(Vo,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:z,tab:P,lang:Y,label:gt})=>{const yt=P==="code"?E==="code":E==="preview"&&j===Y;return r.jsx("button",{onClick:()=>{T(P),Y&&D(Y)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:yt?"#1E293B":"transparent",color:yt?"#FFFFFF":"#475569",fontSize:11,fontWeight:yt?700:500,fontFamily:L,cursor:"pointer"},children:gt},z)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[et&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:et}),r.jsxs("button",{onClick:O,disabled:!tt,title:tt?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:tt?"pointer":"default",background:tt?"#1D4ED8":"#1E293B",color:tt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:tt?1:.5},children:[r.jsx(Xe,{size:11})," 저장"]}),r.jsx("input",{value:N,onChange:z=>V(z.target.value),placeholder:"버전 이름...",onKeyDown:z=>z.key==="Enter"&&Z(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:Z,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Xe,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>J(!q),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:q?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Wo,{size:11})," 불러오기 ",R.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",R.length,")"]})]}),q&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:z=>z.stopPropagation(),children:R.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):R.map((z,P)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:tt===z.ts?"#1E3A5F":"#0F172A",border:tt===z.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(z.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{ct(z),J(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>dt(P),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(Ko,{size:10})})]},z.ts))})]})]})]}),E==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsx("div",{style:{maxWidth:960,margin:"0 auto"},children:r.jsx(pr,{meta:Ct,total:n,products:ut.products,citations:ut.citations,dotcom:h,productsCnty:ut.productsCnty,citationsCnty:ut.citationsCnty,lang:j,weeklyLabels:F,categoryStats:S,stakeholderStats:C})})}):r.jsx(ur,{meta:Ct,total:n,products:ut.products,citations:ut.citations,dotcom:h,productsCnty:ut.productsCnty,citationsCnty:ut.citationsCnty,lang:j,weeklyLabels:F,categoryStats:S,stakeholderStats:C}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}Jo.createRoot(document.getElementById("root")).render(r.jsx(gr,{}));
