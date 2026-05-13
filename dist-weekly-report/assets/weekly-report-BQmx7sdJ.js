const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as n,b as J,R as eo,L as Xo,D as Zo,G as oo,A as Qo,c as Ie,S as kt,C as Ne,d as To,e as no,P as tn,f as en,h as ro,F as on,T as nn,i as rn}from"./react-BzJiA2Qb.js";import{R as an}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(c){if(c.ep)return;c.ep=!0;const r=o(c);fetch(c.href,r)}})();const sn="modulepreload",ln=function(t){return"/admin/weekly-report/"+t},io={},Me=function(e,o,a){let c=Promise.resolve();if(o&&o.length>0){let h=function(y){return Promise.all(y.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),g=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));c=h(o.map(y=>{if(y=ln(y),y in io)return;io[y]=!0;const p=y.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${u}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":sn,p||(m.as="script"),m.crossOrigin="",m.href=y,g&&m.setAttribute("nonce",g),document.head.appendChild(m),p)return new Promise((s,w)=>{m.addEventListener("load",s),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${y}`)))})}))}function r(h){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=h,window.dispatchEvent(l),!l.defaultPrevented)throw h}return c.then(h=>{for(const l of h||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},V="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",cn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function de(t){const e=cn.indexOf(t);return e>=0?e:999}function Ct(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const ao=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Bo(t){return ao.filter(e=>t.includes(e)).concat(t.filter(e=>!ao.includes(e)))}const dn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Lo(t){return dn[String(t||"").trim().toUpperCase()]||t}function me(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function pn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Oe(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ge(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function un(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},a={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},c=[],r=[];Object.entries(t).forEach(([g,y])=>{if(!y)return;const p=y.Total||y.TTL||y.TOTAL;if(p){const u=p.LG||p.lg||[],m=u.length>0?u[u.length-1]:null,s=u.length>=2?u[u.length-2]:null;let w="",d=0;Object.entries(p).forEach(([S,C])=>{if(S==="LG"||S==="lg")return;const v=Array.isArray(C)&&C.length?C[C.length-1]:0;v>d&&(d=v,w=S)}),m!=null&&m>0&&c.push({id:g,kr:o[g]||g,bu:a[g]||"OTHER",score:m,prev:s,vsComp:d,compName:w,category:o[g]||g})}Object.entries(y).forEach(([u,m])=>{if(u==="Total"||u==="TTL"||u==="TOTAL")return;const s=m.LG||m.lg||[],w=s.length>0?s[s.length-1]:null,d=s.length>=2?s[s.length-2]:null;if(w==null||w<=0)return;let S="",C=0;Object.entries(m).forEach(([v,E])=>{if(v==="LG"||v==="lg")return;const $=Array.isArray(E)&&E.length?E[E.length-1]:0;$>C&&(C=$,S=v)}),r.push({product:o[g]||g,country:u,score:w,prev:d,compScore:C,compName:S})})});const h=(e==null?void 0:e[e.length-1])||"This Week",l=(e==null?void 0:e[e.length-2])||"Last Week";return{products:c,productsCnty:r,lastLabel:h,prevLabel:l}}function hn(t,e,o,a){if(!t.length)return"";const c=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],h={};t.forEach(g=>{const y=g.bu||"OTHER";h[y]||(h[y]=[]),h[y].push(g)});const l=[];return r.forEach(g=>{const y=(h[g]||[]).slice().sort((p,u)=>de(p.kr||p.category||p.id)-de(u.kr||u.category||u.id));y.forEach((p,u)=>{const m=pn(p.score,p.prev),s=ge(p.score,p.vsComp)||"#FFFFFF";l.push(`<tr>
        ${u===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${g}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;">${Ct(p.kr||p.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;font-weight:700;background:${s};">${me(p.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;background:${s};">${me(p.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;background:${s};">${Ct(p.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;font-weight:700;background:${s};">${Oe(p.score,p.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${V};text-align:center;">${m}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
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
    <tbody>${l.join("")}</tbody>
  </table>`}function gn(t,e,o,a){const c=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},h=new Set,l=new Set;t.forEach(s=>{!s.country||!s.product||(h.add(s.country),l.add(s.product),r[s.product]||(r[s.product]={}),r[s.product][s.country]=s)});const g=Bo(Array.from(h)),y=Array.from(l).sort((s,w)=>de(s)-de(w));if(!y.length||!g.length)return"";const p={};(o||[]).forEach(s=>{[s.kr,s.category,s.id,s.en].filter(Boolean).forEach(d=>{p[d]=s})});const u='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+g.map(s=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Ct(Lo(s))}</th>`).join(""),m=[];return y.forEach((s,w)=>{const d=w%2===0?"#FFFFFF":"#FAFAFA",S=p[s],v=(S?ge(S.score,S.vsComp):null)||d,E=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;font-weight:700;background:${v};">${S?me(S.score):"—"}</td>`,$=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;font-weight:700;background:${v};">${S?Oe(S.score,S.vsComp):"—"}</td>`,B=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;background:${v};color:#1A1A1A;font-weight:600;">${S!=null&&S.compName?Ct(S.compName):"—"}</td>`,b=g.map(O=>{var T;const k=(T=r[s])==null?void 0:T[O],L=(k?ge(k.score,k.compScore):null)||d;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;font-weight:700;background:${L};">${k?me(k.score):"—"}</td>`}).join(""),R=g.map(O=>{var T;const k=(T=r[s])==null?void 0:T[O],L=(k?ge(k.score,k.compScore):null)||d;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;font-weight:700;background:${L};">${k?Oe(k.score,k.compScore):"—"}</td>`}).join(""),_=g.map(O=>{var T;const k=(T=r[s])==null?void 0:T[O],L=(k?ge(k.score,k.compScore):null)||d;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${V};text-align:center;background:${L};color:#1A1A1A;font-weight:600;">${k!=null&&k.compName?Ct(k.compName):"—"}</td>`}).join("");m.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${V};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Ct(s)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${V};font-weight:600;background:#F5F5F5;white-space:nowrap;">${c.lg} (%)</td>
        ${E}${b}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${V};background:#F5F5F5;white-space:nowrap;">${c.ratio}</td>
        ${$}${R}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${V};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${B}${_}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.metric}</th>
        ${u}
      </tr>
    </thead>
    <tbody>${m.join("")}</tbody>
  </table>
  </div>`}function fn(t,e,o,a){const c=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},r={},h=new Set,l=new Set;t.forEach(m=>{!m.country||!m.product||(h.add(m.country),l.add(m.product),r[m.product]||(r[m.product]={}),r[m.product][m.country]=m)});const g=Bo(Array.from(h)),y=Array.from(l).sort((m,s)=>de(m)-de(s));if(!y.length||!g.length)return"";const p=g.map(m=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Ct(Lo(m))}</th>`).join(""),u=y.map(m=>{const s=g.map(w=>{var b;const d=(b=r[m])==null?void 0:b[w];if(!d||d.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${V};text-align:center;color:#999;">—</td>`;const S=d.score,C=d.prev,v=C!=null?+(S-C).toFixed(1):null,E=v==null?"#999":v>0?"#16A34A":v<0?"#DC2626":"#666",$=v==null?"":v>0?"▲":v<0?"▼":"─",B=v!=null?`${$}${Math.abs(v).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${V};text-align:center;">
        <div style="font-weight:700;color:#111;">${me(S)}%</div>
        <div style="font-size:9px;color:${E};">${B}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Ct(m)}</td>
      ${s}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${c.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${c.product}</th>
      ${p}
    </tr></thead>
    <tbody>${u}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${V};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function mn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((r,h)=>r+(h.score||0),0),c=t.map((r,h)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:center;">${h+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};">${Ct(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;">${a>0?(r.score/a*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function yn(t,e){const o=(t||[]).filter(l=>l.cnty==="TTL"||l.cnty==="TOTAL"||!l.cnty);if(!o.length)return"";o.sort((l,g)=>(g.citations||0)-(l.citations||0));const a=o.slice(0,20),c=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((l,g)=>l+(g.citations||0),0),h=a.map((l,g)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:center;">${g+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};">${Ct(l.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};">${Ct(l.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;font-weight:700;">${(l.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;">${r>0?(l.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${c.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${c.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${c.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${h}</tbody>
  </table>`}function bn(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},c=Object.keys(o).filter(l=>o[l]!=null);if(!c.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},h=c.map(l=>{const g=o[l]||0,y=a[l]||0,p=g-y,u=p>0?"LG":p<0?"SS":"=",m=p>0?"#86EFAC":p<0?"#FCA5A5":"#FFFFFF",s=p>0?"#14532D":p<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${m};color:${s};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};font-weight:${l==="TTL"?"900":"600"};">${Ct(l)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;font-weight:700;">${g.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:right;font-weight:700;">${p>0?"+":""}${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${V};text-align:center;font-weight:900;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${V};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${h}</tbody>
  </table>`}function xn(t,e){var h;if(!t||!t.length)return"";const o=((h=t[0])==null?void 0:h.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function c(l){return l>=80?"#D1FAE5":l>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(l=>{const g=(l.monthRate||0).toFixed(0),y=(l.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${V};background:#F5F5F5;">${Ct(l.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(l.monthRate)};">${g}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.monthActual||0).toLocaleString()} / ${(l.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(l.progressRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.cumActual||0).toLocaleString()} / ${(l.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${V};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${V};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${V};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function Ge(t,e,o,a,c={},r="ko",h=[],l=[],g={}){const{weeklyAll:y={},weeklyLabels:p=[],categoryStats:u=null}=g,m=un(y,p),s=m.products.length?m.products:o,w=m.productsCnty.length?m.productsCnty:h,d=m.lastLabel,S=m.prevLabel,C=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",v=t.period||d||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Ct(C)} — ${Ct(v)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${V} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${V};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${V};">${Ct(C)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${V};">${Ct(v)} · ${d?`${Ct(d)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${hn(s,r,d,S)}
    ${fn(w,r,d,S)}
    ${gn(w,r,s,d)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${V};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${mn(a,r)}
    ${yn(l,r)}
    ${bn(c,r)}

    ${xn(u,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${V};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const yt="#CF0652",I="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",vn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,we={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:vn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},wn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Cn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],kn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Sn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Fn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],En=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],$o=3;function An(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==$o?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Tn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:$o}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Le={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function oe(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Bn(t){try{const e=await fetch(oe(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Ln(t,e,o){try{const a=await fetch(oe(t).snapshots,{method:"POST",headers:Le,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const c=await a.json();return c.ok?c.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function $n(t,e,o){try{const a=await fetch(`${oe(t).snapshots}/${e}`,{method:"PUT",headers:Le,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const c=await a.json();return c.ok?c.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function Rn(t,e){try{const o=await fetch(`${oe(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function St(t,e,o="ko",a=""){try{const c=await fetch("/api/generate-insight",{method:"POST",headers:Le,body:JSON.stringify({type:t,data:e,lang:o,rules:a})});if(!c.ok){const h=await c.json().catch(()=>({}));throw new Error(h.error||`HTTP ${c.status}`)}const r=await c.json();if(!r.ok)throw new Error(r.error||"AI 생성 실패");return r.insight}catch(c){throw console.error("[API] generateAIInsight failed:",c.message),c}}async function Ee(t){try{const e=await fetch(oe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function so(t){try{const e=await fetch(oe(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function In(t,e,o={}){const{includePromptList:a=!1,includeReadability:c=!1}=o,[r,h]=await Promise.all([Ee("dashboard").catch(()=>null),Ee("visibility").catch(()=>null)]),l={...r||{},...h||{}};if(r&&Object.keys(r).forEach(T=>{l[T]==null&&r[T]!=null&&(l[T]=r[T])}),h!=null&&h.meta&&(r!=null&&r.meta)&&(l.meta={...r.meta||{},...h.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const g=l.meta||{},y=l.total||{},u=(l.productsPartial||l.products||[]).map(T=>{var F;const P=T.weekly||((F=l.weeklyMap)==null?void 0:F[T.id])||[],x=T.vsComp>0?T.score/T.vsComp*100:100;return{...T,weekly:P,monthly:T.monthly||[],compRatio:T.compRatio||Math.round(x),status:T.status||(x>=100?"lead":x>=80?"behind":"critical")}}),m=l.citations||[],s=l.dotcom||{},w=l.productsCnty||[],d=l.citationsCnty||[],S=l.weeklyLabels||null,C=l.weeklyAll||{},v=l.citationsByCnty||{},E=l.dotcomByCnty||{},$=e(u,w,m,d,"ko"),B=e(u,w,m,d,"en"),b={appendixPrompts:l.appendixPrompts||[],weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},R={monthlyVis:l.monthlyVis||[],includePromptList:a,includeReadability:c},_=t(g,y,$.products,$.citations,s,"ko",$.productsCnty,$.citationsCnty,S,C,v,E,R,b),O=t({...g,title:g.title||"GEO KPI Dashboard"},y,B.products,B.citations,s,"en",B.productsCnty,B.citationsCnty,S,C,v,E,R,b),k=`${g.period||""} ${g.title||"KPI Dashboard"}`.trim(),L=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:k,htmlKo:_,htmlEn:O})})).json();if(!L.ok)throw new Error(L.error||"게시 실패");return L}async function lo(t,e){try{const o=await fetch(oe(t).syncData,{method:"POST",headers:Le,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const jn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},je={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},co={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Fe(t,e,o,a,c){return c!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(r=>({...r,kr:r.en||je[r.kr]||r.kr,compName:r.compNameEn||co[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||jn[r.country]||r.country,product:r.productEn||je[r.product]||r.product,compName:r.compNameEn||co[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||je[r.category]||r.category})),citationsCnty:a.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function Pn(t,{from:e="ko",to:o="en"}={}){const c=[];for(let r=0;r<t.length;r+=20){const h=t.slice(r,r+20),l=await Promise.all(h.map(async g=>{if(!g||!g.trim())return g;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(g)}`,p=await fetch(y);if(!p.ok)throw new Error(`번역 실패 (${p.status})`);return(await p.json())[0].map(m=>m[0]).join("")}));c.push(...l)}return c}const Ce=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Dn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function ke(t){const e=Dn.indexOf(t);return e>=0?e:999}function Ro(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Nn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Ro(o)]=o)}),e}function po(t,e){var u,m,s,w;if(!((u=t==null?void 0:t.quantitativeGoals)!=null&&u.rows))return(s=(m=t==null?void 0:t._dashboard)==null?void 0:m.categoryStats)!=null&&s.length?[...t._dashboard.categoryStats].sort((d,S)=>ke(d.category)-ke(S.category)):null;const o=t.quantitativeGoals.rows,a=Nn((w=t.quantitativeResults)==null?void 0:w.rows),r=new Date().getMonth()+1-1,h=r>=3&&r<=12?`${r}월`:"3월";let l=e||t._month||h,g=Ce.indexOf(l);g<0&&(l="3월",g=0);const y=[...new Set(o.map(d=>d.taskCategory).filter(Boolean))],p=g>0?Ce[g-1]:null;return y.map(d=>{const S=o.filter(k=>k.taskCategory===d);let C=0,v=0,E=0,$=0,B=0,b=0;S.forEach(k=>{var x,F,M,j,N;const A=Ro(k),L=a[A]||{},T=typeof((x=k.monthly)==null?void 0:x[l])=="number"?k.monthly[l]:0,P=typeof((F=L.monthly)==null?void 0:F[l])=="number"?L.monthly[l]:0;if(v+=T,C+=P,p){const Y=typeof((M=k.monthly)==null?void 0:M[p])=="number"?k.monthly[p]:0,ot=typeof((j=L.monthly)==null?void 0:j[p])=="number"?L.monthly[p]:0;b+=Y,B+=ot}for(let Y=0;Y<=g;Y++){const ot=Ce[Y];typeof((N=L.monthly)==null?void 0:N[ot])=="number"&&(E+=L.monthly[ot])}Ce.forEach(Y=>{var ot;typeof((ot=k.monthly)==null?void 0:ot[Y])=="number"&&($+=k.monthly[Y])})});const R=v>0?Math.round(C/v*1e3)/10:0,_=b>0?Math.round(B/b*1e3)/10:0,O=$>0?Math.round(E/$*1e3)/10:0;return{category:d,taskCount:S.length,targetMonth:l,monthRate:R,prevMonthRate:_,prevMonth:p,progressRate:O,monthActual:C,monthGoal:v,cumActual:E,annualGoal:$}}).sort((d,S)=>ke(d.category)-ke(S.category))}function Mn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function On(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function Io(){const t=await Me(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const wt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},_n={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},uo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],ho=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function zn(t,e,o,a,c={}){const r=await Io(),h=r.utils.book_new(),l=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);l["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(h,l,"meta");const g=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);g["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(h,g,"total");const y=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(d=>[d.id,d.bu,d.kr,d.score,d.prev,d.vsComp,d.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(h,y,"products");const p=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(d=>[d.id,d.kr,...d.weekly])]);p["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(h,p,"weekly");const u=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(d=>[d.rank,d.source,d.category,d.score,d.delta,d.ratio??0])]);u["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(h,u,"citations");const m=(c==null?void 0:c.lg)||{},s=(c==null?void 0:c.samsung)||{},w=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...uo.map(d=>`LG_${d}`),...ho.map(d=>`Samsung_${d}`)],[...uo.map(d=>m[d]??0),...ho.map(d=>s[d]??0)]]);w["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(h,w,"dotcom"),r.writeFile(h,"GEO_Newsletter_템플릿.xlsx")}function _t(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),c=parseFloat(a)||0;return o?+c.toFixed(2):Math.abs(c)<=1&&c!==0?+(c*100).toFixed(2):+c.toFixed(2)}function Se(t){return t==null||String(t).trim()===""?null:_t(t)}function Vt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function qt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Gn={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function Hn(t){const e=qt(t);return Gn[e]||e}function ce(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,c=0;const r=e.match(/(\d{4})/);r&&(c=parseInt(r[1]));const h=e.match(/(\d{1,2})월/);if(h)a=parseInt(h[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)a=o[l[1].toLowerCase()];else{const g=e.match(/\d{4}[-\/](\d{1,2})/);g&&(a=parseInt(g[1]))}}return c?c*12+a:a}function Un(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],a=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(r=>{if(!r[0]||String(r[0]).startsWith("[")||String(r[0]).startsWith("※")||r[0]==="key")return;const h=String(r[0]).trim(),l=r[1]??"";if(o.includes(h))e[h]=parseInt(l)||(h==="titleFontSize"?24:10);else if(a.includes(h)){const g=String(l).trim().toLowerCase();e[h]=g==="y"||g==="yes"||g==="true"||g==="1"}else e[h]=String(l)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(r=>{e[r]=!1}),e.weeklyLabels){const r=String(e.weeklyLabels).split(",").map(h=>h.trim()).filter(Boolean);r.length?e.weeklyLabels=r:delete e.weeklyLabels}if(e.period){const r={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},h=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);h&&(e.period=`${r[h[2]]||h[2]} ${h[1]}`)}if(e.dateLine){const r=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(r){const h=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${h[parseInt(r[2])]||r[2]} ${r[1]}`}}return Object.keys(e).length?{meta:e}:{}}function Wn(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let c=!1;if(t.forEach(T=>{if(!T[0]||String(T[0]).startsWith("[")||String(T[0]).startsWith("※")||T[0]==="key")return;const P=String(T[0]).trim();(o.includes(P)||e.includes(P))&&(c=!0,e.includes(P)?a[P]=parseInt(T[1])||0:a[P]=_t(T[1]))}),c&&Object.keys(a).length>=2)return{total:a};const r=t.find(T=>T.some(P=>String(P||"").trim().toUpperCase()==="LG")),h=r?r.findIndex(T=>String(T||"").trim().toUpperCase()==="LG"):4,l=r?r.findIndex(T=>{const P=String(T||"").trim().toUpperCase();return P==="SAMSUNG"||P==="SAMSUMG"}):5,g=l>=0?l:h+1,y=r?r.findIndex(T=>/date/i.test(String(T||"").trim())):0,p=r?r.findIndex(T=>/countries|country/i.test(String(T||"").trim())):2,u=r?r.findIndex(T=>/divisions?/i.test(String(T||"").trim())):3,m=[];t.filter(T=>{const P=String(T[y>=0?y:0]||"").trim();return P&&!P.startsWith("[")&&!P.startsWith("※")&&!/^date$/i.test(P)&&!/^key$/i.test(P)}).forEach(T=>{const P=String(T[y>=0?y:0]||"").trim(),x=qt(T[p>=0?p:2]),F=String(T[u>=0?u:3]||"").trim().toUpperCase(),M=_t(T[h]),j=_t(T[g]);P&&M>0&&m.push({date:P,country:x,division:F,lg:M,comp:j})});const w=m.filter(T=>(T.country==="TOTAL"||T.country==="TTL")&&(T.division==="TOTAL"||T.division==="TTL"||T.division===""));w.sort((T,P)=>ce(T.date)-ce(P.date));const d=w[w.length-1],S=w.length>=2?w[w.length-2]:null;if(!d){const T=t.find(M=>M.some(j=>String(j||"").trim().toUpperCase()==="TOTAL"));if(!T)return{};const P=_t(T[h]),x=_t(T[g]),F={total:{score:P,prev:P,vsComp:x,rank:P>=x?1:2,totalBrands:12}};return m.length&&(F.monthlyVis=m),F}const C=d.lg,v=d.comp,E=S?S.lg:C,$=d.date,B=S?S.date:null;function b(T){const P={};return m.filter(x=>x.date===T&&(x.country==="TOTAL"||x.country==="TTL")&&x.division&&x.division!=="TOTAL"&&x.division!=="TTL"&&x.division!=="").forEach(x=>{P[x.division]={lg:x.lg,comp:x.comp}}),P}const R=b($),_=B?b(B):{};function O(T){const P={};return m.filter(x=>x.date===T&&x.country&&x.country!=="TOTAL"&&x.country!=="TTL"&&(x.division==="TOTAL"||x.division==="TTL"||x.division==="")).forEach(x=>{P[x.country]={lg:x.lg,comp:x.comp}}),P}const k=O($),A=B?O(B):{},L={total:{score:C,prev:E,vsComp:v,rank:C>=v?1:2,totalBrands:12},...Object.keys(R).length?{buTotals:R}:{},...Object.keys(_).length?{buTotalsPrev:_}:{},...Object.keys(k).length?{countryTotals:k}:{},...Object.keys(A).length?{countryTotalsPrev:A}:{}};return $&&(L.derivedPeriod=$),m.length&&(L.monthlyVis=m),L}function Vn(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,a)=>console.log(`  row${a}: [${o.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const a=String(o[0]||"").trim().toLowerCase();return a==="div"||a==="division"||a==="divisions"});if(e<0){const o=t.findIndex(a=>a.some((c,r)=>r>=1&&String(c||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),go(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),go(t,e)}function go(t,e){const o=t[e],a=o.findIndex((p,u)=>u>=3&&String(p||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const c=[];for(let p=4;p<o.length;p++){const u=String(o[p]||"").trim();u&&u.toUpperCase()!=="LG"&&c.push({name:u,col:p})}const r=t.slice(e+1).filter(p=>{const u=String(p[0]||"").trim();return u&&!u.startsWith("[")&&!u.startsWith("※")}),h={},l={};r.forEach(p=>{const u=String(p[0]||"").trim(),m=String(p[1]||"").trim(),s=String(p[2]||"").trim(),w=qt(p[2])||s,d=String(p[3]||"").trim(),S=_t(p[a]),C=c.map(B=>({name:B.name,score:_t(p[B.col])})).filter(B=>B.score>0),v=[...C].sort((B,b)=>b.score-B.score)[0]||{name:"",score:0},E=+(S-v.score).toFixed(2),$={LG:S};if(C.forEach(B=>{$[B.name]=B.score}),w==="TTL"||w==="TOTAL"){const B=fe[d]||d.toLowerCase(),b=_n[d]||d;h[B]||(h[B]=[]),h[B].push({id:B,bu:u,kr:b,category:d,date:m,score:S,vsComp:v.score,compName:v.name,allScores:$})}else{const B=`${d}|${w}`;l[B]||(l[B]=[]),l[B].push({product:d,country:w,date:m,score:S,compName:v.name,compScore:v.score,gap:E,allScores:$})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(h).join(", ")||"없음"} / 국가별: ${Object.keys(l).length}건`);const g=[];for(const[p,u]of Object.entries(h)){u.sort((d,S)=>ce(d.date)-ce(S.date));const m=u[u.length-1],s=u.length>=2?u[u.length-2].score:null;console.log(`[parseProductCnty] ${p}: dates=[${u.map(d=>d.date).join(",")}] score=${m.score} prev=${s} vsComp=${m.vsComp}`);const w=u.map(d=>({date:d.date,score:d.score,comp:d.vsComp,allScores:d.allScores}));g.push({...m,prev:s,monthlyScores:w})}const y=[];for(const p of Object.values(l)){p.sort((w,d)=>ce(w.date)-ce(d.date));const u=p[p.length-1],m=p.length>=2?p[p.length-2].score:null,s=p.map(w=>({date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores}));y.push({...u,prev:m,monthlyScores:s})}return{...g.length?{productsPartial:g}:{},...y.length?{productsCnty:y}:{}}}function jo(t,e=0,o){const a=o??t.length;for(let c=e;c<a;c++){const r=[];for(const h of t[c]||[]){const l=String(h||"").split(/\n/)[0].trim();/^W\d+/i.test(l)&&r.push(l.toUpperCase())}if(r.length>=2)return r}return null}const Pe={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function fo(t,e){var w;const o=e?Pe[e]||{}:{...Pe.MS,...Pe.ES};if(!Object.keys(o).length)return{};const a=t.findIndex(d=>d.some(S=>String(S||"").trim()in o));if(a<0)return{};const c=t[a],r=t.findIndex((d,S)=>S>a&&d.some(C=>String(C||"").trim()==="TTL")),h=r>0?r+1:Math.min(a+20,t.length);let l=-1,g=-1;for(let d=a+1;d<h;d++){const S=t[d];if(!S.some(E=>String(E||"").trim().toUpperCase()==="LG"))continue;if(g<0&&(g=d),S.some(E=>{const $=String(E||"").trim().toLowerCase().replace(/[\s_-]/g,"");return $==="nonbrand"||$==="nb"})){l=d;break}}const y=l>=0?l:g>=0?g:r;if(y<0)return{};const p=t[y],u={},m=Object.keys(o).map(d=>c.findIndex(S=>String(S||"").trim()===d)).filter(d=>d>=0).sort((d,S)=>d-S);for(const[d,S]of Object.entries(o)){const C=c.findIndex($=>String($||"").trim()===d);if(C<0)continue;const v=m.find($=>$>C)||C+20,E=[];for(let $=C+1;$<v&&$<p.length;$++){const B=_t(p[$]);B>0&&E.push(B)}E.length&&(u[S]=E)}if(!Object.keys(u).length)return{};const s=jo(t,a,h)||((w=Object.values(u)[0])==null?void 0:w.map((d,S)=>`W${S+1}`))||[];return{weeklyMap:u,weeklyLabels:s}}function Kn(t,e,o){for(const a of Object.values(t))for(const c of Object.values(a))for(const[r,h]of Object.entries(c))c[r]=h.slice(o);for(const[a,c]of Object.entries(e))e[a]=c.slice(o)}function De(t,e){const o={};let a=[],c=-1;for(let b=0;b<Math.min(t.length,10);b++){const R=t[b];if(!R)continue;let _=0;for(let O=0;O<R.length;O++)/^w\d+$/i.test(String(R[O]||"").trim())&&_++;if(_>=2){c=b;break}}let r=t.findIndex(b=>{const R=b.slice(0,5).map(_=>String(_||"").trim().toLowerCase());return R.includes("category")||R.includes("product")});if(r<0&&c>=0&&(r=c),r<0&&(r=t.findIndex(b=>{let R=!1,_=0;for(let O=0;O<Math.min(b.length,10);O++){const k=String(b[O]||"").trim();k.toUpperCase()==="LG"?(R=!0,_++):k&&isNaN(parseFloat(k))&&_++}return R&&_>=3})),r<0)return fo(t,e);const h=t[r],l=r+1;let g=null;if(t[l]){const b=t[l].slice(4,8).map(R=>String(R||"").trim()).filter(Boolean);b.length&&b.every(R=>/^\d{1,2}\/\d{1,2}/.test(R)||/~/.test(R)||/^\(/.test(R))&&(g=l)}const y=g!=null?g+1:l,p=t.slice(y).filter(b=>b[0]!=null&&String(b[0]).trim()),u=h.findIndex(b=>{const R=String(b||"").trim().toLowerCase();return R==="category"||R==="product"}),m=h.findIndex(b=>{const R=String(b||"").trim().toLowerCase();return R==="country"||R==="county"}),s=h.findIndex(b=>String(b||"").trim().toLowerCase()==="brand"),w=h.findIndex(b=>String(b||"").trim().toUpperCase()==="LG"),d=[],S=c>=0?t[c]:h;for(let b=0;b<S.length;b++)/^w\d+$/i.test(String(S[b]||"").trim())&&d.push(b);if(!d.length)for(let b=0;b<h.length;b++){const R=String(h[b]||"").split(/\n/)[0].trim();/^w\d+/i.test(R)&&d.push(b)}a=d.map(b=>String(S[b]||"").trim().toUpperCase());let C=d.map((b,R)=>{const _=a[R]||`W${b}`;let O="";const k=g!=null?t[g]:c!==r&&c>=0?t[c+1]:null;if(k){const A=String(k[b]||"").trim();A&&/\d/.test(A)&&(O=A.startsWith("(")?A:`(${A})`)}return O?`${_}${O}`:_});console.log(`[parseWeekly:${e}] wLabelRow:${c} headerIdx:${r} dateRangeRow:${g} wCols:${d.length} labels:`,a.slice(0,5),"full:",C.slice(-2));function v(b){if(m<0)return!0;const R=String(b[m]||"").replace(/[()]/g,"").trim().toUpperCase();return R==="TOTAL"||R==="TTL"||R===""}const E=h.findIndex(b=>{const R=String(b||"").trim().toLowerCase().replace(/[\s_-]/g,"");return R==="b/nb"||R==="bnb"||R==="brand/nonbrand"});function $(b){if(E<0)return!0;const R=String(b[E]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return R==="nonbrand"||R==="nb"}const B={};if(s>=0){if(!d.length){const b=p.find(R=>String(R[s]||"").trim().toUpperCase()==="LG"&&$(R));if(b){for(let R=s+1;R<b.length;R++)if(String(b[R]||"").trim())d.push(R);else if(d.length)break;a=jo(t,0,r+1)||d.map((R,_)=>`W${_+1}`)}}p.forEach(b=>{if(!$(b))return;const R=String(b[s]||"").trim();if(!R)return;const _=String(b[u>=0?u:0]||"").trim();if(!_)return;const O=fe[_]||_.toLowerCase(),k=m>=0?qt(b[m]):"TOTAL",A=k==="TOTAL"||k==="TTL"||!k?"Total":k;B[O]||(B[O]={}),B[O][A]||(B[O][A]={}),B[O][A][R]=d.map(L=>Se(b[L]))}),p.forEach(b=>{if(String(b[s]||"").trim().toUpperCase()!=="LG"||!$(b)||!v(b))return;const _=String(b[u>=0?u:0]||"").trim();_&&(o[fe[_]||_.toLowerCase()]=d.map(O=>Se(b[O])))})}else if(w>=0){const b=h.findIndex(O=>{const k=String(O||"").trim().toLowerCase();return k==="date"||k==="week"||k==="period"}),R={},_=[];p.forEach(O=>{if(!v(O))return;const k=String(O[u>=0?u:3]||"").trim();if(k){if(b>=0){const A=String(O[b]||"").trim();A&&!_.includes(A)&&_.push(A)}R[k]=R[k]||[],R[k].push(Se(O[w]))}}),Object.entries(R).forEach(([O,k])=>{o[fe[O]||O.toLowerCase()]=k}),_.length&&(a=_)}else d.length&&p.forEach(b=>{if(!v(b))return;const R=String(b[u>=0?u:0]||"").trim();R&&(o[fe[R]||R.toLowerCase()]=d.map(_=>Se(b[_])))});if(a.length>0){let b=a.length;for(const k of Object.values(B))for(const A of Object.values(k))for(const L of Object.values(A)){const T=L.findIndex(P=>P!=null);T>=0&&T<b&&(b=T)}for(const k of Object.values(o)){const A=k.findIndex(L=>L!=null);A>=0&&A<b&&(b=A)}const R=12,O=a.length-b>R?a.length-R:b;O>0&&O<a.length&&(a=a.slice(O),C=C.slice(O),Kn(B,o,O))}if(Object.keys(o).length){const b={weeklyMap:o};return a.length&&(b.weeklyLabels=a),C.length&&(b.weeklyLabelsFull=C),Object.keys(B).length&&(b.weeklyAll=B),b}return fo(t,e)}function qn(t){const e=t.findIndex(E=>E.some(b=>{const R=String(b||"").trim().toLowerCase();return R.includes("page type")||R==="country"})?!E.some(b=>/^\[.*\]$/.test(String(b||"").trim())):!1);if(e<0)return{};const o=t[e],a=[];for(let E=2;E<o.length;E++){const $=String(o[E]||"").trim();if(/\bLG\b/i.test($)){const B=E+1;B<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[B]||""))&&a.push({lg:E,ss:B})}}a.length||a.push({lg:2,ss:3});const c=t.slice(e+1).filter(E=>E[0]!=null&&String(E[0]).trim());let r=a[0];for(let E=a.length-1;E>=0;E--)if(c.some($=>Vt($[a[E].lg])>0)){r=a[E];break}if(!c.some(E=>Vt(E[r.lg])>0)){for(let E=Math.min(r.lg,o.length)-1;E>=2;E--)if(c.some($=>Vt($[E])>0)){r={lg:E-1,ss:E};break}}const h={},l={},g={},y={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},p=new Set,u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=a.map(E=>{const $=String(o[E.lg]||"").trim(),B=$.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return B?B[1].charAt(0).toUpperCase()+B[1].slice(1).toLowerCase():$.replace(/\s*LG\s*/i,"").trim()}),s={};c.forEach(E=>{const $=qt(E[0]),B=String(E[1]||"").replace(/[()]/g,"").trim();let b=/page total|^ttl$/i.test(B)?"TTL":B;b.toLowerCase()==="microsite"&&(b="Microsites");const R=y[$]||$.toUpperCase();p.add(R);const _=Vt(E[r.lg]),O=Vt(E[r.ss]);R==="TTL"?(h[b]=(h[b]||0)+_,l[b]=(l[b]||0)+O):(g[R]||(g[R]={lg:{},samsung:{}}),g[R].lg[b]=(g[R].lg[b]||0)+_,g[R].samsung[b]=(g[R].samsung[b]||0)+O),R==="TTL"&&(s[b]||(s[b]={}),a.forEach((k,A)=>{var P,x;const L=Vt(E[k.lg]),T=Vt(E[k.ss]);if(L>0||T>0){const F=m[A]||`M${A+1}`;s[b][F]={lg:(((P=s[b][F])==null?void 0:P.lg)||0)+L,samsung:(((x=s[b][F])==null?void 0:x.samsung)||0)+T}}}))});const w=new Set;Object.values(s).forEach(E=>Object.keys(E).forEach($=>w.add($)));const d=u.filter(E=>w.has(E)),S={},C={};a.forEach((E,$)=>{const B=m[$];if(!B)return;const b={},R={};c.forEach(_=>{const O=qt(_[0]),k=String(_[1]||"").replace(/[()]/g,"").trim();let A=/page total|^ttl$/i.test(k)?"TTL":k;A.toLowerCase()==="microsite"&&(A="Microsites");const L=y[O]||O.toUpperCase(),T=Vt(_[E.lg]),P=Vt(_[E.ss]);T<=0&&P<=0||(L==="TTL"?(T>0&&(b[A]=(b[A]||0)+T),P>0&&(R[A]=(R[A]||0)+P)):(C[B]||(C[B]={}),C[B][L]||(C[B][L]={lg:{},samsung:{}}),T>0&&(C[B][L].lg[A]=(C[B][L].lg[A]||0)+T),P>0&&(C[B][L].samsung[A]=(C[B][L].samsung[A]||0)+P)))}),Object.keys(b).length&&(S[B]={lg:b,samsung:R})}),Object.keys(C).forEach(E=>{Object.keys(C[E]).forEach($=>{const B=C[E][$];Object.values(B.lg).some(R=>R>0)||Object.values(B.samsung).some(R=>R>0)||delete C[E][$]}),Object.keys(C[E]).length||delete C[E]});const v={};return(h.TTL||Object.keys(h).length)&&(v.dotcom={lg:h,samsung:l,byMonth:S,byCntyByMonth:C}),Object.keys(g).length&&(v.dotcomByCnty=g),Object.keys(s).length&&d.length&&(v.dotcomTrend=s,v.dotcomTrendMonths=d),v}function Jn(t){const e=t.findIndex(x=>x.some(j=>{const N=String(j||"").trim().toLowerCase();return N==="channel"||N==="country"})?!x.some(j=>/^\[.*\]$/.test(String(j||"").trim())):!1),o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let c=-1,r=-1,h=-1;for(let x=0;x<o.length;x++){const F=String(o[x]||"").trim().toLowerCase();F==="country"&&c<0&&(c=x),F==="channel"&&r<0&&(r=x),F==="prd"&&h<0&&(h=x)}const l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function g(x){const F=String(x||"").trim().toLowerCase();if(!F)return null;const M=F.match(/^(\d{1,2})월/);if(M){const N=parseInt(M[1]);if(N>=1&&N<=12)return l[N-1]}const j=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return j?j[1].charAt(0).toUpperCase()+j[1].slice(1).toLowerCase():null}const y=[],p=new Set;for(let x=0;x<o.length;x++){const F=g(o[x]);F&&!p.has(x)&&(y.push({col:x,label:F}),p.add(x))}if(e>0){const x=t[e-1];if(x)for(let F=0;F<x.length;F++){const M=g(x[F]);M&&!p.has(F)&&(y.push({col:F,label:M}),p.add(F))}}let u=2;if(y.length>0)u=Math.min(...y.map(x=>x.col));else if(c>=0&&r>=0)u=Math.max(c,r,h)+1;else{const x=t[a];x&&!String(x[0]||"").trim()?(c=1,r=2,u=3):(c=0,r=1,u=2)}if(c<0||r<0){const x=t[a],F=x&&!String(x[0]||"").trim()?1:0;c<0&&(c=F),r<0&&(r=F+1)}if(y.length>0){y.sort((j,N)=>j.col-N.col);const x=y[0],F=l.indexOf(x.label),M=new Set([c,r,h].filter(j=>j>=0));if(F>0&&x.col>u){let j=F-1;for(let N=x.col-1;N>=u&&j>=0;N--){if(p.has(N)||M.has(N))continue;const Y=String(o[N]||"").trim(),ot=e>0?String((t[e-1]||[])[N]||"").trim():"";Y||ot||(y.push({col:N,label:l[j]}),p.add(N),j--)}}}y.sort((x,F)=>l.indexOf(x.label)-l.indexOf(F.label));const m=t.slice(a).filter(x=>x.some(F=>F!=null&&String(F).trim())),s=[],w={},d={},S={},C={},v=new Set,E={};m.forEach(x=>{const F=qt(x[c]),M=String(x[r]||"").replace(/[()]/g,"").trim(),j=h>=0?String(x[h]||"").trim():"";if(!F||!M||M.toLowerCase()==="total")return;v.add(F);const N={};if(y.forEach(({col:mt,label:ut})=>{const at=Vt(x[mt]);at>0&&(N[ut]=at)}),Object.keys(N).length===0)return;const Y=j.toUpperCase(),ot=!j||Y==="TTL"||Y==="TOTAL",pt=F==="TTL"||F==="TOTAL"?"TTL":F;E[pt]||(E[pt]={}),E[pt][M]||(E[pt][M]={ttl:null,prds:[]}),ot?E[pt][M].ttl=N:E[pt][M].prds.push({prd:j,monthScores:N})});const $=x=>{for(let F=y.length-1;F>=0;F--){const M=x[y[F].label];if(M>0)return M}return 0},B=x=>x.ttl?{...x.ttl}:{},b={};Object.entries(E).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([M,j])=>{const N=B(j);Object.keys(N).length!==0&&(b[x]||(b[x]={}),b[x][M]=N)})});const R=E.TTL||{};Object.entries(R).forEach(([x,F])=>{const M=B(F),j=$(M);j>0&&(s.push({source:x,category:"",score:j,delta:0,ratio:0,monthScores:M}),w[x]=M),F.prds.forEach(({prd:N,monthScores:Y})=>{const ot=$(Y);ot>0&&(S[N]||(S[N]=[]),S[N].push({source:x,category:"",score:ot,delta:0,ratio:0,monthScores:Y}))})}),Object.entries(E).forEach(([x,F])=>{x!=="TTL"&&Object.entries(F).forEach(([M,j])=>{const N=B(j),Y=$(N);Y>0&&(d[x]||(d[x]=[]),d[x].push({source:M,category:"",score:Y,delta:0,ratio:0,monthScores:N,prd:""})),j.prds.forEach(({prd:ot,monthScores:pt})=>{const mt=$(pt);if(mt<=0)return;d[x]||(d[x]=[]),d[x].push({source:M,category:"",score:mt,delta:0,ratio:0,monthScores:pt,prd:ot}),C[ot]||(C[ot]={}),C[ot][M]||(C[ot][M]={source:M,category:"",score:0,delta:0,ratio:0,monthScores:{}});const ut=C[ot][M];ut.score+=mt,Object.entries(pt).forEach(([at,xt])=>{ut.monthScores[at]=(ut.monthScores[at]||0)+xt})})})});const _={};new Set([...Object.keys(S),...Object.keys(C)]).forEach(x=>{let F=S[x];(!F||!F.length)&&(F=Object.values(C[x]||{})),F&&F.length&&(_[x]=F)});const k=s.reduce((x,F)=>x+F.score,0);s.sort((x,F)=>F.score-x.score),s.forEach((x,F)=>{x.rank=F+1,x.ratio=k>0?+(x.score/k*100).toFixed(1):0});for(const[x,F]of Object.entries(d)){const M=F.reduce((j,N)=>j+N.score,0);F.sort((j,N)=>N.score-j.score),F.forEach((j,N)=>{j.rank=N+1,j.ratio=M>0?+(j.score/M*100).toFixed(1):0})}for(const[x,F]of Object.entries(_)){const M=F.reduce((j,N)=>j+N.score,0);F.sort((j,N)=>N.score-j.score),F.forEach((j,N)=>{j.rank=N+1,j.ratio=M>0?+(j.score/M*100).toFixed(1):0})}const A=y.map(x=>x.label).filter(x=>Object.values(w).some(F=>F[x]>0));for(const[x,F]of Object.entries(d));const L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let T=null;if(A.length>0){const x={};Object.values(w).forEach(j=>{Object.entries(j).forEach(([N,Y])=>{Y>0&&(x[N]=(x[N]||0)+1)})});let F=A[A.length-1];if(A.length>=2){const j=x[F]||0,N=A[A.length-2],Y=x[N]||0;Y>0&&j<Y*.5&&(F=N)}const M=L.findIndex(j=>F.toLowerCase().startsWith(j.toLowerCase()));M>=0&&(T=`${L[M]} ${new Date().getFullYear()}`)}const P={};return s.length>0&&(P.citations=s),Object.keys(d).length>0&&(P.citationsByCnty=d),Object.keys(_).length>0&&(P.citationsByPrd=_),Object.keys(w).length>0&&(P.citTouchPointsTrend=w,P.citTrendMonths=A),Object.keys(b).length>0&&(P.citTouchPointsTrendByCnty=b),T&&(P.citDerivedPeriod=T),P}function Yn(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let c=null,r=0,h=-1,l=-1,g=-1,y=-1,p=-1,u=4;for(let k=0;k<Math.min(t.length,10);k++){const A=t[k];if(!A)continue;const L=A.some(F=>/^no$/i.test(String(F||"").trim())),T=A.some(F=>/^region$/i.test(String(F||"").trim())),P=A.some(F=>/domain|domian/i.test(String(F||"").trim())),x=A.some(F=>/^prd$/i.test(String(F||"").trim()));if(L||T||P||x){c=A,r=k+1;for(let F=0;F<A.length;F++){const M=String(A[F]||"").trim().toLowerCase();M==="prd"&&p<0&&(p=F),M==="no"&&h<0&&(h=F),M==="region"&&l<0&&(l=F),(M==="domain"||M==="domian")&&g<0&&(g=F),M==="type"&&y<0&&(y=F)}break}(String(A[0]||"").trim().startsWith("[")||!String(A[0]||"").trim())&&(r=k+1)}const m=h>=0||l>=0||p>=0;if(m)l<0&&(l=h>=0?h+1:p>=0?p+2:1),g<0&&(g=l+1),y<0&&(y=g+1),u=Math.max(g,y)+1;else if(g>=0)y=g+1,u=g+2;else{for(let k=r;k<Math.min(t.length,r+5);k++){const A=t[k];if(A){for(let L=0;L<Math.min(A.length,6);L++){const T=String(A[L]||"").trim();if(T.includes(".")&&T.length>3&&!a.test(T)){g=L,y=L+1,u=L+2;break}}if(g>=0)break}}g<0&&(g=0,y=1,u=2)}const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=k=>{const A=String(k||"").trim().toLowerCase();if(!A)return null;const L=A.match(/^(\d{1,2})월/);if(L){const P=parseInt(L[1]);if(P>=1&&P<=12)return s[P-1]}const T=A.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return T?T[1].charAt(0).toUpperCase()+T[1].slice(1).toLowerCase():null},d=[];if(c)for(let k=u;k<c.length;k++){const A=w(c[k]);A&&d.push({col:k,label:A})}const S=k=>/^(type|domain[_ ]type)$/i.test(String(k||"").trim()),C=k=>/^(domain|domian)$/i.test(String(k||"").trim()),v=k=>/^region$/i.test(String(k||"").trim()),E=[];c&&d.forEach(({col:k,label:A})=>{const L=k-1,T=k-2,P=k-3;P<0||S(c[L])&&C(c[T])&&v(c[P])&&E.push({regionCol:P,domainCol:T,typeCol:L,monthCol:k,label:A})});const $=[],B={},b={};let R="TTL";const _=k=>{let A=String(k||"").trim();if(!A)return"";const L=A.match(/^\[([^\]]+)\]/);L&&(A=L[1].trim()),A=A.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const T=A.indexOf("/");return T>=0&&(A=A.slice(0,T)),A};if(E.length>=2){const k={};for(let L=r;L<t.length;L++){const T=t[L];if(!T)continue;const P=p>=0?String(T[p]||"").trim():"";E.forEach(x=>{const F=_(T[x.domainCol]);if(!F||!F.includes("."))return;const M=String(T[x.monthCol]||"").replace(/,/g,"").trim(),j=parseFloat(M);if(isNaN(j)||j<=0)return;const N=String(T[x.regionCol]||"").trim().toUpperCase(),Y=e[N]||N||"TTL",ot=String(T[x.typeCol]||"").trim(),pt=`${Y}|${F}|${ot}|${P}`;k[pt]||(k[pt]={cnty:Y,domain:F,type:ot,prd:P,monthScores:{}}),k[pt].monthScores[x.label]=(k[pt].monthScores[x.label]||0)+j})}Object.values(k).forEach(L=>{let T=0;for(let M=d.length-1;M>=0;M--){const j=L.monthScores[d[M].label];if(j>0){T=j;break}}if(T<=0)return;b[L.cnty]=(b[L.cnty]||0)+1,$.push({cnty:L.cnty,rank:b[L.cnty],domain:L.domain,type:L.type,citations:T,monthScores:L.monthScores,prd:L.prd});const P=`${L.cnty}|${L.domain}`,x=!L.prd||/^(ttl|total)$/i.test(L.prd);B[P]||(B[P]={cnty:L.cnty,domain:L.domain,type:L.type,months:{},_hasTtl:!1});const F=B[P];x?(F.type=L.type||F.type,F._hasTtl=!0,Object.entries(L.monthScores).forEach(([M,j])=>{j>0&&(F.months[M]=j)})):F._hasTtl||Object.entries(L.monthScores).forEach(([M,j])=>{j>0&&!F.months[M]&&(F.months[M]=j)})}),Object.values(B).forEach(L=>{delete L._hasTtl});const A={};$.forEach(L=>{A[L.cnty]||(A[L.cnty]=[]),A[L.cnty].push(L)}),Object.values(A).forEach(L=>{L.sort((T,P)=>P.citations-T.citations),L.forEach((T,P)=>{T.rank=P+1})})}else for(let k=r;k<t.length;k++){const A=t[k];if(!A)continue;const L=String(A[g]||"").trim(),T=String(A[y]||"").trim(),P=p>=0?String(A[p]||"").trim():"";if(!m&&(!L||!L.includes("."))){const j=String(A[g]||"").trim().toUpperCase(),N=e[j]||(o.includes(j)?j:null);N&&(!T||T==="")&&(R=N);continue}if(!L||!L.includes("."))continue;let x="TTL";if(m&&l>=0){const j=String(A[l]||"").trim().toUpperCase();x=e[j]||j}else m||(x=R);let F=0;if(d.length>0)for(let j=d.length-1;j>=0;j--){const N=String(A[d[j].col]||"").replace(/,/g,"").trim(),Y=parseFloat(N);if(!isNaN(Y)&&Y>0){F=Y;break}}else for(let j=A.length-1;j>=u;j--){const N=String(A[j]||"").replace(/,/g,"").trim();if(!N)continue;const Y=parseFloat(N);if(!isNaN(Y)&&Y>0){F=Y;break}}if(d.length>0){const j={};if(d.forEach(({col:N,label:Y})=>{const ot=String(A[N]||"").replace(/,/g,"").trim(),pt=parseFloat(ot);!isNaN(pt)&&pt>0&&(j[Y]=pt)}),Object.keys(j).length>0){const N=`${x}|${L}`;B[N]={cnty:x,domain:L,type:T,months:j}}}const M={};d.length>0&&d.forEach(({col:j,label:N})=>{const Y=String(A[j]||"").replace(/,/g,"").trim(),ot=parseFloat(Y);!isNaN(ot)&&ot>0&&(M[N]=ot)}),F>0&&(b[x]=(b[x]||0)+1,$.push({cnty:x,rank:b[x],domain:L,type:T,citations:F,monthScores:M,prd:P}))}const O={};if($.length>0&&(O.citationsCnty=$),Object.keys(B).length>0){O.citDomainTrend=B;const k=d.map(A=>A.label).filter(A=>Object.values(B).some(L=>L.months[A]>0));O.citDomainMonths=k}return O}function mo(t,e){const o=t.findIndex(v=>v?v.some(E=>/^type$/i.test(String(E||"").trim()))&&v.some(E=>/^county|^country$/i.test(String(E||"").trim())):!1);if(o<0)return{};const a=t[o];let c=-1,r=-1,h=-1,l=-1,g=4;for(let v=0;v<a.length;v++){const E=String(a[v]||"").trim().toLowerCase();E==="type"&&c<0&&(c=v),(E==="county"||E==="country")&&r<0&&(r=v),(E==="topic"||E==="topoc")&&h<0&&(h=v),E==="brand"&&l<0&&(l=v)}g=Math.max(c,r,h,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,p=/^w\d+/i,u=[],m=[o];for(let v=0;v<=o;v++)v!==o&&m.push(v);for(const v of m){if(u.length>0)break;const E=t[v];if(E)for(let $=g;$<E.length;$++){const B=String(E[$]||"").split(/\n/)[0].trim();B&&(y.test(B)||p.test(B))&&u.push({col:$,label:B})}}const s=t.slice(o+1),w=[];s.forEach(v=>{if(!v)return;const E=String(v[c]||"").trim(),$=qt(v[r]),B=String(v[h]||"").trim(),b=String(v[l]||"").trim();if(!B||!b)return;const R={};let _=0;u.forEach(({col:O,label:k})=>{const A=_t(v[O]);A>0&&(R[k]=A,_=A)}),(Object.keys(R).length>0||B)&&w.push({type:E,country:$,topic:B,brand:b,scores:R,latestScore:_})});const d=e==="weekly"?"weeklyPR":"monthlyPR",S=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",C={};return w.length>0&&(C[d]=w),u.length>0&&(C[S]=u.map(v=>v.label)),C}function yo(t,e){const o=t.findIndex(C=>C?C.some(v=>/steakholders|stakeholders/i.test(String(v||"").trim()))||C.some(v=>/^type$/i.test(String(v||"").trim()))&&C.some(v=>/topoc|topic/i.test(String(v||"").trim())):!1);if(o<0)return{};const a=t[o];let c=-1,r=-1,h=-1,l=-1,g=4;for(let C=0;C<a.length;C++){const v=String(a[C]||"").trim().toLowerCase();(v==="steakholders"||v==="stakeholders")&&c<0&&(c=C),v==="type"&&r<0&&(r=C),(v==="country"||v==="county")&&h<0&&(h=C),(v==="topoc"||v==="topic")&&l<0&&(l=C)}g=Math.max(c,r,h,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,p=/^w\d+/i,u=[];for(let C=g;C<a.length;C++){const v=String(a[C]||"").split(/\n/)[0].trim();v&&(y.test(v)||p.test(v))&&u.push({col:C,label:v})}const m=t.slice(o+1),s=[];m.forEach(C=>{if(!C)return;const v=String(C[c]||"").trim(),E=String(C[r]||"").trim(),$=qt(C[h]),B=String(C[l]||"").trim();if(!B||!v)return;const b={};let R=0;u.forEach(({col:_,label:O})=>{const k=_t(C[_]);k>0&&(b[O]=k,R=k)}),s.push({stakeholder:v,type:E,country:$,topic:B,scores:b,latestScore:R})});const w=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",d=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",S={};return s.length>0&&(S[w]=s),u.length>0&&(S[d]=u.map(C=>C.label)),S}function Xn(t){const e=t.findIndex(l=>l?l.some(g=>/^prompts?$/i.test(String(g||"").trim()))&&l.some(g=>/^country$/i.test(String(g||"").trim())):!1);if(e<0)return{};const o=t[e],a={},c=["country","prompts","division","category","launched","branded","cej","topic"];for(let l=0;l<o.length;l++){const g=String(o[l]||"").trim().toLowerCase();c.includes(g)&&!a[g]&&(a[g]=l)}const r=t.slice(e+1),h=[];return r.forEach(l=>{if(!l)return;const g=String(l[a.prompts]||"").trim();g&&h.push({country:qt(l[a.country]),prompt:g,division:String(l[a.division]||"").trim(),category:String(l[a.category]||"").trim(),launched:String(l[a.launched]||"").trim(),branded:String(l[a.branded]||"").trim(),cej:String(l[a.cej]||"").trim(),topic:String(l[a.topic]||"").trim()})}),h.length>0?{appendixPrompts:h}:{}}function Zn(t){const e=t.findIndex(p=>{if(!p)return!1;const u=p.some(s=>/^(country|county)$/i.test(String(s||"").trim())),m=p.some(s=>/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(s||"").trim()));return u&&m});if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((p,u)=>console.log(`  row${u}:`,p==null?void 0:p.slice(0,6))),{};const o=t[e];let a=-1,c=-1,r=-1;for(let p=0;p<o.length;p++){const u=String(o[p]||"").trim().toLowerCase();a<0&&(u==="country"||u==="county")&&(a=p),c<0&&(u==="category"||u==="product"||u==="제품"||u==="카테고리")&&(c=p),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(u)&&(r=p)}if(a<0||c<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:c,statusCol:r,header:o}),{};const h=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),l={};let g=0,y=0;return t.slice(e+1).forEach(p=>{if(!p)return;const u=String(p[r]||"").trim();if(!u)return;g++;const m=u.toLowerCase().replace(/\s+/g," ");if(!h.has(m)&&!h.has(m.replace(/\s/g,"")))return;const s=Hn(p[a]),w=String(p[c]||"").trim();if(!s||!w)return;const d=w.toUpperCase(),C={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"}[d]||d;l[`${s}|${C}`]=!0,C!==d&&(l[`${s}|${d}`]=!0),y++}),console.log(`[parseUnlaunched] 총 ${g}행 중 ${y}행 매칭 / 미출시 ${Object.keys(l).length}건`),Object.keys(l).length>0?{unlaunchedMap:l}:{}}function Qn(t){const e=t.findIndex(p=>p&&p.some(u=>/^bu$/i.test(String(u||"").trim()))&&p.some(u=>/topic/i.test(String(u||"").trim())));if(e<0)return{};const o=t[e];let a=-1,c=-1,r=-1,h=-1,l=-1;for(let p=0;p<o.length;p++){const u=String(o[p]||"").trim().toLowerCase();a<0&&u==="bu"&&(a=p),c<0&&u.includes("topic")&&u.includes("대시보드")&&(c=p),r<0&&(u==="explanation"||u==="설명")&&(r=p),h<0&&u.includes("기존")&&(h=p),l<0&&u.includes("topic")&&u.includes("row")&&(l=p)}c<0&&(c=1),r<0&&(r=2);const g=[];let y="";return t.slice(e+1).forEach(p=>{if(!p)return;const u=String(p[a]||"").trim();u&&(y=u);const m=String(p[c]||"").trim();if(!m)return;const s=String(p[r]||"").trim(),w=h>=0?String(p[h]||"").trim():"",d=l>=0?String(p[l]||"").trim():"";g.push({bu:y,topic:m,explanation:s,oldTopic:w,topicRow:d})}),g.length>0?{prTopicList:g}:{}}function tr(t,e){return t===wt.meta?Un(e):t===wt.visSummary?Wn(e):t===wt.productMS||t===wt.productHS||t===wt.productES?Vn(e):t===wt.weeklyMS?De(e,"MS"):t===wt.weeklyHS?De(e,"HS"):t===wt.weeklyES?De(e,"ES"):t===wt.monthlyPR?mo(e,"monthly"):t===wt.weeklyPR?mo(e,"weekly"):t===wt.monthlyBrandPrompt?yo(e,"monthly"):t===wt.weeklyBrandPrompt?yo(e,"weekly"):t===wt.citPageType?qn(e):t===wt.citTouchPoints?Jn(e):t===wt.citDomain?Yn(e):t===wt.appendix?Xn(e):t===wt.unlaunched?Zn(e):t===wt.prTopicList?Qn(e):{}}function er(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function or(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,c=await fetch(a,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!c.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${c.status}).`);const r=await c.text(),h=await Io(),l=h.read(r,{type:"string"}),g=l.Sheets[l.SheetNames[0]];return h.utils.sheet_to_json(g,{header:1,defval:""})}async function nr(t,e){var r,h;const o=Object.values(wt),a={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const c=await Promise.allSettled(o.map(l=>or(t,l).then(g=>({name:l,rows:g}))));for(let l=0;l<o.length;l++){const g=o[l],y=c[l];if(e==null||e(`"${g}" 처리 중... (${l+1}/${o.length})`),y.status==="rejected"){console.warn(`"${g}" 시트 건너뜀:`,(r=y.reason)==null?void 0:r.message);continue}try{const{rows:p}=y.value,u=tr(g,p);for(const[m,s]of Object.entries(u))m==="weeklyLabels"||m==="weeklyLabelsFull"?a[m]||(a[m]=s):Array.isArray(s)&&Array.isArray(a[m])?a[m]=[...a[m],...s]:s&&typeof s=="object"&&!Array.isArray(s)&&a[m]&&typeof a[m]=="object"&&!Array.isArray(a[m])?a[m]={...a[m],...s}:a[m]=s}catch(p){console.warn(`"${g}" 시트 처리 실패:`,p.message)}}if(!a.productsPartial&&a.weeklyAll&&a.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const l={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},g={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},y=[];for(const[p,u]of Object.entries(a.weeklyAll)){const m=u.Total||u.TTL||{},s=m.LG||m.lg||[],w=Object.entries(m).filter(([E])=>E!=="LG"&&E!=="lg"),d=s.length?s[s.length-1]:0,S=s.length>=5?s[0]:0;let C="",v=0;for(const[E,$]of w){const B=$.length?$[$.length-1]:0;B>v&&(v=B,C=E)}d>0&&y.push({id:p,bu:g[p]||"HS",kr:l[p]||p,category:p,date:((h=a.meta)==null?void 0:h.period)||"",score:d,prev:S,vsComp:v,compName:C,allScores:{LG:d,...C?{[C]:v}:{}}})}if(y.length&&(a.productsPartial=y,console.log(`[SYNC] weeklyAll에서 ${y.length}개 제품 생성:`,y.map(p=>`${p.id}=${p.score}`).join(", "))),!a.productsCnty){const p=[];for(const[u,m]of Object.entries(a.weeklyAll)){const s=l[u]||u;for(const[w,d]of Object.entries(m)){if(w==="Total"||w==="TTL")continue;const S=d.LG||d.lg||[],C=S.length?S[S.length-1]:0;if(C<=0)continue;const v=S.length>=2?S[0]:0;let E="",$=0;const B={LG:C};for(const[R,_]of Object.entries(d)){if(R==="LG"||R==="lg")continue;const O=_.length?_[_.length-1]:0;B[R]=O,O>$&&($=O,E=R)}const b=+(C-$).toFixed(1);p.push({product:s,country:w,score:C,prev:v,compName:E,compScore:$,gap:b,allScores:B})}}p.length&&(a.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(a.weeklyLabels&&a.weeklyLabels.length&&a.weeklyLabels.every((g,y)=>g===`W${y+1}`)){const g=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(g.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",g),a.weeklyLabels=g;const y=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(p=>{const u=String(p).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(p=>/^W\d+/.test(p));y.length&&(a.weeklyLabelsFull=y)}}return a}const gt={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:I,outline:"none",boxSizing:"border-box"};function rr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),c=Math.floor(a/24);return c>=1?`${c}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function ir({savedAt:t,ageMs:e,stale:o,style:a}){const c=t==null,r=c?"#1E293B":o?"#7F1D1D":"#064E3B",h=c?"#94A3B8":o?"#FCA5A5":"#86EFAC",l=c?"#334155":o?"#B91C1C":"#047857",g=c?"○":o?"⚠️":"●",y=c?"동기화 정보 없음":`데이터 최신화: ${rr(e)}`,p=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:p,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:h,border:`1px solid ${l}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:I,whiteSpace:"nowrap",...a||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:g}),y]})}function ar({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Kt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",zt="#CF0652",te="#94A3B8",Ae={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Po={LG:zt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},bo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],_e={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},sr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Te={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},lr={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},cr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},He={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE"},Ue=90;function We(t,e){const o=Ae[e]||Ae.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Be(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function dr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function ze(t){const e=String(t||"").trim().toUpperCase();return Te[e]||t}function Ve(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?lr[o]||Te[o]||t:cr[o]||Te[o]||t}let pr=0;function xo(t,e,o,a,c){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const r=pr++,h={t:18,r:10,b:20,l:10},l=o-h.l-h.r,g=a-h.t-h.b,y=t.filter(v=>v!=null);if(!y.length){let v=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const E=t.length,$=E>1?E-1:1;return v+=t.map((B,b)=>`<text x="${(h.l+b/$*l).toFixed(1)}" y="${h.t+g+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Kt}">${e[b]||""}</text>`).join(""),v+="</svg>",v}const p=Math.min(...y)-1,u=Math.max(...y)+1,m=u-p||1,s=t.length,w=s>1?s-1:1,d=t.map((v,E)=>h.l+E/w*l),S=[];t.forEach((v,E)=>{v!=null&&S.push({x:d[E],y:h.t+(1-(v-p)/m)*g,v})});let C=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;if(S.length>=2){const v=S.map(($,B)=>`${B?"L":"M"}${$.x.toFixed(1)},${$.y.toFixed(1)}`).join(" "),E=v+` L${S[S.length-1].x.toFixed(1)},${h.t+g} L${S[0].x.toFixed(1)},${h.t+g} Z`;C+=`<defs><linearGradient id="lg${r}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.03"/>
    </linearGradient></defs>`,C+=`<path d="${E}" fill="url(#lg${r})"/>`,C+=`<path d="${v}" stroke="${c}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}return C+=S.map(v=>`<circle cx="${v.x.toFixed(1)}" cy="${v.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${c}" stroke-width="2"/>`).join(""),C+=S.map(v=>`<text x="${v.x.toFixed(1)}" y="${Math.max(v.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" font-family="${Kt}">${v.v.toFixed(1)}</text>`).join(""),C+=t.map((v,E)=>`<text x="${d[E].toFixed(1)}" y="${h.t+g+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Kt}">${e[E]||""}</text>`).join(""),C+="</svg>",C}function ye(t,e){return Po[t]||bo[e%bo.length]}function Do(t,e,o,a){const c=Object.keys(t);if(!c.length||!e.length)return"";let r=1/0,h=-1/0;if(c.forEach(w=>(t[w]||[]).forEach(d=>{d!=null&&(d<r&&(r=d),d>h&&(h=d))})),!isFinite(r))return"";const l=Math.max((h-r)*.15,2);r=Math.max(0,r-l),h=Math.min(100,h+l);const g=h-r||1,y=e.length,p=8,u=8,m=a-p-u;let s="";for(let w=0;w<=4;w++){const d=p+w/4*m;s+=`<line x1="0" y1="${d.toFixed(1)}" x2="${o}" y2="${d.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}return c.forEach((w,d)=>{const S=t[w]||[],C=ye(w,d),v=w==="LG",E=v?2.5:1.5,$=v?1:.7,B=[];if(S.forEach((b,R)=>{if(b==null)return;const _=(R+.5)/y*o,O=p+(1-(b-r)/g)*m;B.push({x:_,y:O,v:b})}),!!B.length){if(B.length>=2){const b=B.map((R,_)=>`${_?"L":"M"}${R.x.toFixed(1)},${R.y.toFixed(1)}`).join(" ");s+=`<path d="${b}" stroke="${C}" fill="none" stroke-width="${E}" stroke-linecap="round" stroke-linejoin="round" opacity="${$}"/>`}B.forEach(b=>{s+=`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${v?3.5:2.5}" fill="#fff" stroke="${C}" stroke-width="${v?2:1.5}" opacity="${$}"/>`})}}),`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${s}</svg>`}function ur({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:c,monthlyVis:r,total:h,meta:l,wLabels:g}){const y={monthlyVis:r};return`
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
// 선택 월의 _productsCnty[].monthlyScores 데이터로 국가별 제품별 vbar-item 의 LG/Comp 점수·바·갭 갱신
function _updateCntyMonth(){
  if(_curMonthIdxIn12<0||!_productsCnty||!_productsCnty.length)return;
  var enM={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
  function dateMonthIdx(d){
    var km=String(d).match(/(\\d{1,2})월/);if(km)return parseInt(km[1])-1;
    var em=String(d).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);
    return em?enM[em[1].toLowerCase()]:-1;
  }
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
      mChart.innerHTML=_miniSvgNullAware(mData,mLabels,300,90,cc);
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
${(()=>{const p=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?p(e):"{}"};
var _products=${p(o.map(u=>({id:u.id,bu:u.bu,kr:u.kr,en:u.en||u.kr,category:u.category||"",date:u.date||"",status:u.status,score:u.score||0,prev:u.prev||0,vsComp:u.vsComp||0,compName:u.compName||"",compRatio:u.compRatio||0,allScores:u.allScores||{},monthlyScores:u.monthlyScores||[]})))};
var _productsCnty=${p(a||[])};
var _unlaunchedMap=${p(c)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${p((y==null?void 0:y.monthlyVis)||[])};
var _total=${p(h)};
var _meta={period:${p(l.period||"")},reportNo:${p(l.reportNo||"")},totalInsight:${p(l.totalInsight||"")}};
var _wLabels=${p(g)};`})()}
${(()=>{const p=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${p(Po)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${zt}';
var _FONT=${p(Kt)};
var _COMP='${te}';
var _REGIONS=${p(Object.fromEntries(Object.entries(_e).map(([u,m])=>[u,m.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(_e).map(([p,u])=>[p,t==="en"?u.labelEn:u.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${Ue};

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
            var msc=_sliceMsByCurMonth(prod.monthlyScores||[]);
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
      var ms=_sliceMsByCurMonth(prod.monthlyScores||[]);
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
`}function hr(t,e,o,a,c,r,h){if(!e||!Object.keys(e).length)return"";const g=["MS","HS","ES"].map(y=>{const p=t.filter(m=>m.bu===y);if(!p.length)return"";const u=p.map(m=>{var O,k;const s=((O=e[m.id])==null?void 0:O.Total)||{},w=Object.keys(s).sort((A,L)=>{var x,F;if(A==="LG")return-1;if(L==="LG")return 1;const T=((x=s[A])==null?void 0:x[s[A].length-1])||0;return(((F=s[L])==null?void 0:F[s[L].length-1])||0)-T});if(!w.length)return"";const d=We(m.status,c),S=(k=s.LG)==null?void 0:k[s.LG.length-1],C=w.map((A,L)=>{const T=ye(A,L),P=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${T};opacity:${P?1:.7}"></i><span style="font-size:13px;color:${P?"#1A1A1A":"#94A3B8"};font-weight:${P?700:400}">${A}</span></span>`}).join(""),v=o.length,E=`<colgroup><col style="width:${Ue}px">${o.map(()=>"<col>").join("")}</colgroup>`,$=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:8px 0;border:0">${Do(s,o,v*80,180)}</td></tr>`,B=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:4px 0 6px;border:0">${C}</td></tr>`,b=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,R=w.map((A,L)=>{const T=ye(A,L),P=A==="LG",x=o.map((F,M)=>{var N;const j=(N=s[A])==null?void 0:N[M];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${j!=null?P?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${P?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${j!=null?j.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${P?"#FFF8F9":L%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${P?700:500};color:${T};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${T};margin-right:4px;vertical-align:0"></i>${A}</td>${x}</tr>`}).join(""),_=Ke(m.id||m.category,r);return`<div class="trend-row${_?" is-unlaunched":""}" data-prodid="${m.id||m.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${zt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${qe(m,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${_?"#F1F5F9":d.bg};color:${_?"#64748B":d.color};border:1px solid ${_?"#CBD5E1":d.border}">${_?c==="en"?"Unlaunched":"미출시":d.label}</span>
          ${S!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${S.toFixed(1)}%</span>`:""}
          ${m.compName?`<span style="font-size:14px;color:#94A3B8">vs ${m.compName} ${m.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Kt}">${E}<tbody>${$}${B}${b}${R}</tbody></table></div>
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${u}
    </div>`:""}).join("");return g.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${c==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${h||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${c==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${g}${(()=>{const y=t.filter(p=>Yt(p.id||p.category,r).length>0).map(p=>`${p.kr}: ${Yt(p.id||p.category,r).map(u=>Ve(u,c)).join(", ")} ${c==="en"?"not launched":"미출시"}`);return y.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${y.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function gr(t,e,o,a,c,r){if(!e||!e.length)return"";const h=["MS","HS","ES"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(s){const w=String(s).match(/(\d{1,2})월/);if(w)return parseInt(w[1])-1;const d=String(s).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return d?g[d[1].toLowerCase()]:-1}const p=[0,1,2,3,4,5,6,7,8,9,10,11],u=l.slice(),m=h.map(s=>{const w=t.filter(S=>S.bu===s);if(!w.length)return"";const d=w.map(S=>{const C=S.monthlyScores||[];let v={};if(C.length>=2){const P=new Set;if(C.forEach(x=>{x.allScores&&Object.keys(x.allScores).forEach(F=>P.add(F))}),P.forEach(x=>{v[x]=p.map(F=>{var j;const M=C.find(N=>y(N.date)===F);return((j=M==null?void 0:M.allScores)==null?void 0:j[x])??null})}),!P.size&&(v.LG=p.map(x=>{const F=C.find(M=>y(M.date)===x);return F?F.score:null}),S.vsComp>0)){const x=p.map(F=>{const M=C.find(j=>y(j.date)===F);return(M==null?void 0:M.comp)??null});x.some(F=>F!=null)&&(v[S.compName||"Comp"]=x)}}else{const P=e.filter(j=>j.division===s&&(j.country==="TOTAL"||j.country==="TTL")),x={};P.forEach(j=>{const N=y(j.date);N>=0&&(x[N]=j)});const F=p.map(j=>{var N;return((N=x[j])==null?void 0:N.lg)||null}),M=p.map(j=>{var N;return((N=x[j])==null?void 0:N.comp)||null});v={LG:F},M.some(j=>j!=null&&j>0)&&(v.Samsung=M)}const E=Object.keys(v).sort((P,x)=>{if(P==="LG")return-1;if(x==="LG")return 1;const F=(v[P]||[]).filter(j=>j!=null).pop()||0;return((v[x]||[]).filter(j=>j!=null).pop()||0)-F});if(!E.length)return"";const $=We(S.status,a),B=(v.LG||[]).filter(P=>P!=null).pop(),b=E.map((P,x)=>{const F=ye(P,x),M=P==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${F};opacity:${M?1:.7}"></i><span style="font-size:13px;color:${M?"#1A1A1A":"#94A3B8"};font-weight:${M?700:400}">${P}</span></span>`}).join(""),R=u.length,_=`<colgroup><col style="width:${Ue}px">${u.map(()=>"<col>").join("")}</colgroup>`,O=`<tr><td style="padding:0;border:0"></td><td colspan="${R}" style="padding:8px 0;border:0">${Do(v,u,R*80,180)}</td></tr>`,k=`<tr><td style="padding:0;border:0"></td><td colspan="${R}" style="padding:4px 0 6px;border:0">${b}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${u.map(P=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${P}</th>`).join("")}</tr>`,L=E.map((P,x)=>{const F=ye(P,x),M=P==="LG",j=u.map((N,Y)=>{var pt;const ot=(pt=v[P])==null?void 0:pt[Y];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${ot!=null?M?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${M?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${ot!=null?ot.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${M?"#FFF8F9":x%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${M?700:500};color:${F};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${F};margin-right:4px;vertical-align:0"></i>${P}</td>${j}</tr>`}).join(""),T=Ke(S.id||S.category,c);return`<div class="trend-row${T?" is-unlaunched":""}" data-prodid="${S.id||S.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${zt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${qe(S,c)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${T?"#F1F5F9":$.bg};color:${T?"#64748B":$.color};border:1px solid ${T?"#CBD5E1":$.border}">${T?a==="en"?"Unlaunched":"미출시":$.label}</span>
          ${B!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${B.toFixed(1)}%</span>`:""}
          ${S.compName?`<span style="font-size:14px;color:#94A3B8">vs ${S.compName} ${S.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Kt}">${_}<tbody>${O}${k}${A}${L}</tbody></table></div>
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${s}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${s}</span></div>
      ${d}
    </div>`:""}).join("");return m.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${u[0]}–${u[u.length-1]} (${u.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${m}${(()=>{const s=t.filter(w=>Yt(w.id||w.category,c).length>0).map(w=>`${w.kr}: ${Yt(w.id||w.category,c).map(d=>Ve(d,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return s.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${s.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function No(t,e,o,a,c){let r="";return e&&t&&(r+=`<div class="insight-box"><span class="insight-label">${c.insight}</span><span class="insight-text">${Be(t)}</span></div>`),a&&o&&(r+=`<div class="howto-box"><span class="howto-label">${c.howToRead}</span><span class="howto-text">${Be(o)}</span></div>`),r}function fr(t,e,o,a){const c=+(t.score-t.prev).toFixed(1),r=t.vsComp||0,h=+(t.score-r).toFixed(1),l=c>0?"▲":c<0?"▼":"─",g=c>0?"#22C55E":c<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${g}">${l} ${Math.abs(c).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${zt}"></div>
          </div>
          ${r>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(r,100)}%;background:${te}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${zt}"></i> LG ${t.score}%</span>
            ${r>0?`<span><i style="background:${te}"></i> Samsung ${r}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${r>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${r}%</span>
          <span class="hero-comp-gap" style="color:${h>=0?"#22C55E":"#EF4444"}">Gap ${h>=0?"+":""}${h}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
    ${e.totalInsight?`<div class="hero-insight"><span class="hero-insight-label">${o.geoInsight}</span><span class="hero-insight-text">${Be(e.totalInsight)}</span></div>`:""}
  </div>`}function Yt(t,e){const o=He[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function Ke(t,e){return sr.every(o=>{const a=He[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function qe(t,e){return Yt(t.id||t.category,e).length?`${t.kr}*`:t.kr}function vo(t,e,o,a,c,r,h,l,g){if(!t.length)return"";const p=["MS","HS","ES"].map(u=>{const m=t.filter(w=>w.bu===u);if(!m.length)return"";const s=m.map(w=>{var st,ct;const d=w.weekly||[],S=d.filter(et=>et!=null),C=w.weeklyScore||(S.length>0?S[S.length-1]:w.score),v=w.monthlyScore||w.score,E=C,$=((st=l==null?void 0:l[w.id])==null?void 0:st.Total)||((ct=l==null?void 0:l[w.id])==null?void 0:ct.TTL)||{};let B=0;Object.entries($).forEach(([et,rt])=>{if(et==="LG"||et==="lg")return;const ht=Array.isArray(rt)&&rt.length?rt[rt.length-1]:0;ht>B&&(B=ht)});const b=w.vsComp||0,R=B>0?C/B*100:b>0?C/b*100:100,_=b>0?v/b*100:100,O=Math.round(R*10)/10,k=Math.round(_*10)/10,A=O,L=R>=100?"lead":R>=80?"behind":"critical",T=We(L,a),P=S.length>=1?S[S.length-1]:null,x=S.length>=2?S[S.length-2]:null,F=P!=null&&x!=null?+(P-x).toFixed(1):null,M=F>0?"▲":F<0?"▼":"─",j=F>0?"#22C55E":F<0?"#EF4444":"#94A3B8",N=L==="critical"?"#BE123C":L==="behind"?"#D97706":"#15803D",Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ot={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function pt(et){const rt=String(et).match(/(\d{1,2})월/);if(rt)return parseInt(rt[1])-1;const ht=String(et).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ht?ot[ht[1].toLowerCase()]:-1}let mt=w.monthlyScores||[];if(mt.length<2&&h.length>0){const et=h.filter(ht=>ht.division===w.bu&&(ht.country==="TOTAL"||ht.country==="TTL")),rt={};et.forEach(ht=>{const Tt=pt(ht.date);Tt>=0&&(rt[Tt]={date:ht.date,score:ht.lg,comp:ht.comp})}),mt=Object.keys(rt).sort((ht,Tt)=>ht-Tt).map(ht=>rt[ht])}const ut=mt.length>0?mt.map(et=>{const rt=pt(et.date);return rt>=0?Y[rt]:et.date}):["M-3","M-2","M-1","M0"],at=mt.length>0?mt.map(et=>et.score):[null,null,null,w.score],xt=mt.length>=2?+(mt[mt.length-1].score-mt[mt.length-2].score).toFixed(1):null,Gt=xt>0?"▲":xt<0?"▼":"─",At=xt>0?"#22C55E":xt<0?"#EF4444":"#94A3B8",Rt=A,Ft=Rt>=100?"#15803D":Rt>=80?"#D97706":"#BE123C",Et=w.weeklyPrev||(S.length>=5?S[S.length-5]:S[0]||0),Ht=C&&Et?+(C-Et).toFixed(1):null,Q=v&&(w.monthlyPrev||w.prev)?+(v-(w.monthlyPrev||w.prev)).toFixed(1):null,G=Yt(w.id||w.category,r),lt=Ke(w.id||w.category,r),H=lt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:T;return`<div class="prod-card${lt?" is-unlaunched":""}" data-prodid="${w.id||w.category}" data-ws="${C.toFixed(1)}" data-ms="${v.toFixed(1)}" data-wr="${O}" data-mr="${k}" data-wmom="${Ht??""}" data-mmom="${Q??""}" style="border-color:${H.border}">
        <div class="prod-head">
          <span class="prod-name">${qe(w,r)}</span>
          ${G.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${H.bg};color:${H.color};border-color:${H.border}">${H.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${E.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${j}">${F!=null?`WoW ${M} ${Math.abs(F).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${At}">${xt!=null?`MoM ${Gt} ${Math.abs(xt).toFixed(1)}%p`:"MoM —"}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${xo(d.slice(-10),c.slice(-10),300,90,N)}</div>
          <div class="trend-monthly" style="display:none">${xo(at,ut,300,90,N)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${w.compName}`:`${w.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Rt,120)}%;background:${Ft}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Ft}">${Rt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${u}">
      <div class="bu-header"><span class="bu-label">${u}</span><span class="bu-count">${m.length}${o.categories}</span></div>
      <div class="prod-grid">${s}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${g||""}${g?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${No(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead,o)}
    <div class="section-body">${p}${(()=>{const u=t.filter(m=>Yt(m.id||m.category,r).length>0).map(m=>`${m.kr}: ${Yt(m.id||m.category,r).map(s=>Ve(s,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:""})()}</div>
  </div>`}function wo(t,e,o,a){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),h=He[r]||(r||"").toUpperCase(),l=a&&a[`${t.country}|${h}`],g=dr(t.score,t.compScore),y=l?"#94A3B8":g==="lead"?"#15803D":g==="behind"?"#D97706":"#BE123C",p=+(t.score-t.compScore).toFixed(1),u=l?"#64748B":p>=0?"#15803D":"#BE123C",m=130,s=["TCL","HISENSE","HAIER"];let w="",d=0;t.allScores&&Object.entries(t.allScores).forEach(([B,b])=>{const R=String(B).toUpperCase();s.some(O=>R.includes(O))&&b>d&&(w=B,d=b)});const S=Math.max(e,d),C=Math.max(3,Math.round(t.score/S*m)),v=t.compScore>0?Math.max(3,Math.round(t.compScore/S*m)):0,E=d>0?Math.max(3,Math.round(d/S*m)):0,$="#9333EA";return`<div class="vbar-item${l?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${C}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${te}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${te}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${d>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${$}">${d.toFixed(1)}</span>
        <div class="vbar-col" style="height:${E}px;background:${$}"></div>
        <span class="vbar-col-name" style="color:${$}">${w.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${u}">${p>=0?"+":""}${p}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Co(t,e,o,a,c,r){if(!t||!t.length)return"";const h=new Map;t.forEach(s=>{h.has(s.product)||h.set(s.product,[]),h.get(s.product).push(s)});const l=e.cntyProductFilter||{},g=[...h.entries()].filter(([s])=>l[s]!==!1).map(([s,w])=>{const d=Math.max(...w.map(C=>Math.max(C.score,C.compScore)),1),S=w.map(C=>wo(C,d,ze(C.country),c)).join("");return`<div class="cnty-product" data-group-product="${s}"><div class="bu-header"><span class="bu-label">${s}</span></div><div class="vbar-chart">${S}</div></div>`}).join(""),y=new Map;t.forEach(s=>{y.has(s.country)||y.set(s.country,[]),y.get(s.country).push(s)});const p=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],m=p.filter(s=>y.has(s)).concat([...y.keys()].filter(s=>!p.includes(s))).map(s=>{const w=y.get(s);if(!w)return"";const d=Math.max(...w.map(C=>Math.max(C.score,C.compScore)),1),S=w.map(C=>wo(C,d,C.product,c)).join("");return`<div class="cnty-product" data-group-country="${s}"><div class="bu-header"><span class="bu-label">${ze(s)}</span></div><div class="vbar-chart">${S}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${te}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${No(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead,o)}
    <div class="section-body">
      <div class="cnty-view-country">${m}</div>
      <div class="cnty-view-product" style="display:none">${g}</div>
      ${(()=>{if(!c||!Object.keys(c).length)return"";const s={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},d=[...new Set(t.map(S=>S.product))].map(S=>{const C=s[S]||String(S).toLowerCase(),v=Yt(C,c);return v.length?`${S}: ${v.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const ko={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function mr(t){const e=ko[t]||ko.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(c=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${c.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${c.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function yr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",a=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",c=e==="en"?"All":"전체",r=e==="en"?"Total":"총",h=e==="en"?"":"개",l=e==="en"?"Clear filters":"필터 초기화",g=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],y={};g.forEach(s=>{const w=new Set;t.forEach(d=>{d[s.key]&&w.add(d[s.key])}),y[s.key]=[...w].sort()});const p=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(y).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const u=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),m=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${a}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${r} ${t.length}${h?" "+h:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${l}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${g.map(s=>`<th data-col="${s.key}" onclick="_plToggle('${s.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${s.label} <span id="pl-arrow-${s.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${g.map(s=>`<div id="pl-dd-${s.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${s.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${c}</div>
      ${y[s.key].map(w=>`<div onclick="_plFilter('${s.key}','${w.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${w}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${p};
    var _plFilters={};
    var _divC=${u};
    var _cejC=${m};
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
      document.getElementById('pl-count').textContent='${r} '+f.length+'${h?" "+h:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(g.map(s=>s.key))}.forEach(function(k){
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
  <\/script>`}function So(t,e,o,a,c,r){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],l=[];for(let k=0;k<12;k++)l.push("w"+(5+k));const g=[...new Set(t.map(k=>k.topic))].filter(Boolean),y=[...new Set(t.map(k=>k.type))].filter(Boolean),p=[...new Set(t.map(k=>k.country))].filter(k=>k&&k!=="TTL"),u=h.filter(k=>p.includes(k)).concat(h.filter(k=>!p.includes(k))),m=JSON.stringify(t).replace(/</g,"\\u003c"),s=JSON.stringify(l),w=JSON.stringify(g),d=JSON.stringify(y),S=JSON.stringify(u),C=72;function v(k){const A={};return k&&String(k).split(`
`).forEach(L=>{const T=L.indexOf("=");if(T>0){const P=L.slice(0,T).trim(),x=L.slice(T+1).trim();P&&(A[P]=x)}}),A}const E=v(a==null?void 0:a.prTopicPromptsRaw);c&&c.length&&g.forEach(k=>{if(!E[k]){const A=c.find(L=>L.topic===k&&L.country==="US");A&&(E[k]=A.prompt)}});const $=(r==null?void 0:r.prTopicList)||[],B={},b={};$.forEach(k=>{[k.topic,k.topicRow,k.oldTopic].filter(Boolean).map(L=>L.trim()).forEach(L=>{k.explanation&&!B[L]&&(B[L]=k.explanation),k.bu&&!b[L]&&(b[L]=k.bu)})});const _={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...B,...v(a==null?void 0:a.prTopicDescsRaw)},O={};return g.forEach(k=>{const A=b[k];if(A)O[k]=A;else{const L=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];O[k]=L.some(T=>k.toLowerCase().includes(T.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Kt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${zt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${m},W=${s},TP=${w},TY=${d},CN=${S};
    var CW=${C};
    var TOPIC_CAT=${JSON.stringify(O)};
    var TOPIC_PROMPT=${JSON.stringify(E).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(_).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify($).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Te)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${zt}',COMP='${te}';
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
  <\/script>`}function Fo(t,e,o,a,c,r){const h=(t||[]).filter(d=>!0);if(!h.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const l=[];for(let d=0;d<12;d++)l.push("w"+(5+d));const y=[...new Set(h.map(d=>d.stakeholder))].filter(Boolean).map(d=>({stakeholder:d,topics:[...new Set(h.filter(S=>S.stakeholder===d).map(S=>S.topic))].filter(Boolean)})),p=72,u=JSON.stringify(h).replace(/</g,"\\u003c"),m=JSON.stringify(l),s=JSON.stringify(y),w="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Kt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${c||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${zt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${w}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${u},W=${m},GROUPS=${s};
    var CW=${p},RED='${zt}';
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
  <\/script>`}function br(t,e,o,a,c,r,h,l,g,y,p,u,m,s){var Q,G,lt;o=(o||[]).map(z=>({...z,weekly:(z.weekly||[]).map(H=>H??0),monthly:(z.monthly||[]).map(H=>H??0)})),y&&typeof y=="object"&&Object.values(y).forEach(z=>{!z||typeof z!="object"||Object.values(z).forEach(H=>{!H||typeof H!="object"||Object.keys(H).forEach(st=>{const ct=H[st];Array.isArray(ct)&&(H[st]=ct.map(et=>et??0))})})});const w={aircare:"Xiaomi"};o=o.map(z=>{const H=w[(z.id||"").toLowerCase()];if(!H||!z.allScores)return z;const st=Object.entries(z.allScores).find(([rt])=>rt.toLowerCase()===H.toLowerCase()&&rt.toLowerCase()!=="lg");if(!st)return z;const ct=st[1];if(!(ct>0))return z;const et=Math.round(z.score/ct*100);return{...z,compName:st[0],vsComp:ct,compRatio:et,status:et>=100?"lead":et>=80?"behind":"critical"}});const d=(m==null?void 0:m.visibilityOnly)||!1,S=(m==null?void 0:m.includePromptList)||!1,C=(m==null?void 0:m.includeReadability)===!0,v=(s==null?void 0:s.unlaunchedMap)||{},$=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,B=Ae[r]||Ae.ko;let b;if(g&&g.length)b=g.map(z=>String(z).toUpperCase().startsWith("W")?z.toUpperCase():z);else{const z=y?Math.max(...Object.values(y).flatMap(st=>Object.values(st).flatMap(ct=>Object.values(ct).map(et=>(et==null?void 0:et.length)||0))),0):0,H=t.weekStart||Math.max(1,z-11);b=Array.from({length:Math.max(12,z)},(st,ct)=>`W${H+ct}`)}const R=new Set;y&&Object.values(y).forEach(z=>Object.keys(z).forEach(H=>{H!=="Total"&&R.add(H)})),h&&h.forEach(z=>{z.country&&z.country!=="TTL"&&R.add(z.country)});const _=[...R].sort(),O=r==="en"?"All":"전체",k=["MS","HS","ES"],A=o.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${z.bu}" value="${z.id}" checked onchange="onFilterChange()"><span>${z.kr}</span></label>`).join(""),L=k.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${z}" checked onchange="onBuChange('${z}')"><span>${z}</span></label>`).join(""),T=_.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${z}" checked onchange="onFilterChange()"><span>${ze(z)}</span></label>`).join(""),P=Object.entries(_e).map(([z,H])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${z}" checked onchange="onRegionChange('${z}')"><span>${H.labelEn}</span></label>`).join(""),x=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,F=m!=null&&m.weeklyLabelsFull&&m.weeklyLabelsFull.length===b.length?m.weeklyLabelsFull:b,M=b.map((z,H)=>`<option value="${H}"${H===b.length-1?" selected":""}>${F[H]||z}</option>`).join(""),j=(((Q=o[0])==null?void 0:Q.monthlyScores)||[]).map(z=>{const H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ct=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?H[parseInt(st[1])-1]:ct?ct[1].charAt(0).toUpperCase()+ct[1].slice(1).toLowerCase():z.date}),N=j.map((z,H)=>`<option value="${H}"${H===j.length-1?" selected":""}>${z}</option>`).join(""),Y=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Kt}`,ot=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${x}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${b[b.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${b.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${Y}">${M}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${Y}"${j.length>0?"":" disabled"}>${N||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${O}</span></label>
        ${L}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${O}</span></label>
        ${A}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${O}</span></label>
        ${P}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${O}</span></label>
        ${T}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Display":"표시"}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${r==="en"?"GEO Insights":"GEO 인사이트"}</span></label>
      </div>
    </div>
  </div>`,mt=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Be(t.noticeText)}</div></div>`:"",t.showTotal!==!1?fr(e,t,B,r):""].join(""),ut=[];if(y&&Object.keys(y).length){const z={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(y).forEach(([H,st])=>{const ct=o.find(rt=>rt.id===H),et=(ct==null?void 0:ct.kr)||z[H]||H;Object.entries(st).forEach(([rt,ht])=>{if(rt==="Total"||rt==="TTL"||rt==="TOTAL")return;const Tt=ht.LG||ht.lg||[],It=Tt.length>0?Tt[Tt.length-1]:0;if(It<=0)return;let Xt="",Bt=0;Object.entries(ht).forEach(([Pt,vt])=>{if(Pt==="LG"||Pt==="lg")return;const Ut=Array.isArray(vt)&&vt.length?vt[vt.length-1]:0;Ut>Bt&&(Bt=Ut,Xt=Pt)});const ne=+(It-Bt).toFixed(1),jt={};Object.entries(ht).forEach(([Pt,vt])=>{if(Array.isArray(vt)&&vt.length){const Ut=vt[vt.length-1];Ut!=null&&(jt[Pt]=Ut)}}),ut.push({product:et,country:rt,score:It,compName:Xt,compScore:Bt,gap:ne,allScores:jt})})})}const at=((G=m==null?void 0:m.weeklyLabelsFull)==null?void 0:G[m.weeklyLabelsFull.length-1])||b[b.length-1]||"",xt=at?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${at} ${r==="en"?"data":"기준"}</span>`:"",Gt=[mt,t.showProducts!==!1?vo(o,t,B,r,b,v,(m==null?void 0:m.monthlyVis)||[],y,xt):"",`<div id="trend-container">${hr(o,y,b,B,r,v,xt)}</div>`,t.showCnty!==!1?Co(ut,t,B,r,v,xt):""].join(""),At=o.map(z=>{const H=z.monthlyScore||z.score,st=z.monthlyPrev||z.prev,ct=z.vsComp||0,et=ct>0?H/ct*100:100;return{...z,score:H,prev:st,weeklyScore:H,weeklyPrev:st,monthlyScore:H,monthlyPrev:st,weekly:(z.monthlyScores||[]).map(rt=>rt.score),status:et>=100?"lead":et>=80?"behind":"critical"}}),Rt=(((lt=o[0])==null?void 0:lt.monthlyScores)||[]).map(z=>{const H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ct=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?H[parseInt(st[1])-1]:ct?ct[1].charAt(0).toUpperCase()+ct[1].slice(1).toLowerCase():z.date}),Ft=(m==null?void 0:m.monthlyVis)||[],Et=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Ht=[mt,t.showProducts!==!1?vo(At,t,B,r,Rt.length?Rt:["Feb","Mar"],v,Ft,{},Et):"",`<div id="monthly-trend-container">${gr(At,Ft,B,r,v,Et)}</div>`,t.showCnty!==!1?Co(h,t,B,r,v,Et):""].join("");return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${ar({FONT:Kt,RED:zt,COMP:te})}</style>
</head>
<body>
${d?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${ot.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Gt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Ht}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${So(s==null?void 0:s.weeklyPR,s==null?void 0:s.weeklyPRLabels,r,t,s==null?void 0:s.appendixPrompts,s)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Fo(s==null?void 0:s.weeklyBrandPrompt,s==null?void 0:s.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${C?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${S?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${ot}
    <div id="bu-weekly-content" class="dash-container">${Gt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Ht}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${So(s==null?void 0:s.weeklyPR,s==null?void 0:s.weeklyPRLabels,r,t,s==null?void 0:s.appendixPrompts,s)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Fo(s==null?void 0:s.weeklyBrandPrompt,s==null?void 0:s.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${C?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${B.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${$}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${yr(s==null?void 0:s.appendixPrompts,r)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${mr(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${B.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${ur({lang:r,weeklyAll:y,products:o,productsCnty:h,ulMap:v,monthlyVis:m==null?void 0:m.monthlyVis,total:e,meta:t,wLabels:b})}
<\/script>
</body>
</html>`}function xr(t){const e=t.filter(g=>g.status==="lead"),o=t.filter(g=>g.status==="behind"),a=t.filter(g=>g.status==="critical"),c=[...t].sort((g,y)=>y.score-g.score)[0],r=[...t].sort((g,y)=>g.score-y.score)[0],h=(t.reduce((g,y)=>g+y.score,0)/t.length).toFixed(1),l=[];return l.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${h}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),c&&l.push(`가장 높은 카테고리는 ${c.kr} ${c.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(c.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?l.push(`취약 카테고리(${a.map(g=>g.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&l.push(`추격 카테고리(${o.map(g=>g.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),l.join(" ")}function vr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function wr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const Z=wt,Cr={citation:[Z.meta,Z.citTouchPoints,Z.citDomain,Z.citPageType],"weekly-report":[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES],"monthly-report":[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES],dashboard:[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citDomain,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES,Z.weeklyPR,Z.weeklyBrandPrompt,Z.appendix,Z.unlaunched,Z.prTopicList],newsletter:[Z.meta,Z.visSummary,Z.citTouchPoints,Z.citPageType,Z.productMS,Z.productHS,Z.productES,Z.weeklyMS,Z.weeklyHS,Z.weeklyES,Z.unlaunched]};function kr(t){return Cr[t]||[]}const Eo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function Sr(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function Fr({url:t,downloadName:e="sheet",mode:o}){const[a,c]=J.useState(!1),[r,h]=J.useState(""),l=o?kr(o):[],g=l.length?"zip":"xlsx",y=l.length?`📥 시트 CSV ZIP 다운로드 (탭 ${l.length}개)`:"📥 시트 xlsx 다운로드";async function p(){const u=Sr(t);if(!u){h("ERROR: 동기화 URL 비어있거나 잘못됨");return}c(!0),h("");try{const m=new URLSearchParams({id:u,name:e});l.length&&m.set("tabs",l.join(","));const s=await fetch(`/api/sheet-download?${m.toString()}`,{credentials:"include"});if(!s.ok){const S=await s.text().catch(()=>"");let C=S;try{const v=JSON.parse(S);C=v.error||v.detail||S}catch{}throw new Error(`(${s.status}) ${C}`)}const w=await s.blob(),d=document.createElement("a");d.href=URL.createObjectURL(w),d.download=`${e}.${g}`,document.body.appendChild(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(d.href),1e3),h("다운로드 완료")}catch(m){h("ERROR: "+(m.message||String(m)))}finally{c(!1)}}return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("button",{onClick:p,disabled:a||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:a||!t?"#1E293B":"#1D4ED8",color:a||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Eo,cursor:a||!t?"not-allowed":"pointer"},children:a?"다운로드 중…":y}),r&&n.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Eo,background:r.startsWith("ERROR")?"#450A0A":"#14532D",color:r.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:r})]})}function Er({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:c,metaEn:r,setMetaEn:h,total:l,setTotal:g,products:y,setProducts:p,citations:u,setCitations:m,dotcom:s,setDotcom:w,productsCnty:d,setProductsCnty:S,citationsCnty:C,setCitationsCnty:v,resolved:E,previewLang:$,setPreviewLang:B,snapshots:b,setSnapshots:R,setWeeklyLabels:_,setWeeklyAll:O,weeklyLabels:k,weeklyAll:A,citationsByCnty:L,dotcomByCnty:T,generateHTML:P,publishEndpoint:x,setMonthlyVis:F,onSyncExtra:M,categoryStats:j,extra:N,monthlyVis:Y,progressMonth:ot,setProgressMonth:pt,progressDataMonth:mt}){const ut=J.useRef({products:y,productsCnty:d,citations:u,citationsCnty:C,total:l,dotcom:s,extra:N});ut.current={products:y,productsCnty:d,citations:u,citationsCnty:C,total:l,dotcom:s,extra:N};function at(){return ut.current}const[xt,Gt]=J.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[At,Rt]=J.useState(!1),[Ft,Et]=J.useState(null),[Ht,Q]=J.useState(""),[G,lt]=J.useState(""),[z,H]=J.useState(!1),[st,ct]=J.useState(""),[et,rt]=J.useState(!1),[ht,Tt]=J.useState(!1),[It,Xt]=J.useState(!1),[Bt,ne]=J.useState(!1),[jt,Pt]=J.useState(""),[vt,Ut]=J.useState(!1),[Je,Mo]=J.useState(!0),[re,be]=J.useState(""),[ee,$e]=J.useState(null),[pe,Oo]=J.useState([]),Dt=t==="newsletter",[ie,_o]=J.useState(()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`});function Re(){Dt&&fetch("/api/publish").then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.months)&&Oo(i.months)}).catch(()=>{})}J.useEffect(()=>{if(Dt){Re();return}fetch(x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(f=>f.ok?f.json():null).then($e).catch(()=>{})},[t,x,Dt]);const zo=(()=>{const i=new Set,f=new Date;for(let tt=0;tt<24;tt++){const bt=new Date(f.getFullYear(),f.getMonth()-tt,1);i.add(`${bt.getFullYear()}-${String(bt.getMonth()+1).padStart(2,"0")}`)}for(const tt of pe)i.add(tt.month);return ie&&i.add(ie),[...i].sort((tt,bt)=>bt.localeCompare(tt))})();function xe(i){const[f,tt]=i.split("-");return`${f}년 ${parseInt(tt,10)}월`}const[Go,Ye]=J.useState(null);J.useEffect(()=>{let i=!0;const f=()=>so(t).then(bt=>{i&&Ye(bt)});f();const tt=setInterval(f,6e4);return()=>{i=!1,clearInterval(tt)}},[t]);function Ho(){so(t).then(Ye)}async function Uo(){if(!Bt){ne(!0),Pt("");try{const i=at(),f=Fe(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),tt=Fe(i.products,i.productsCnty,i.citations,i.citationsCnty,"en");let bt,Nt,U;if(t==="dashboard"){const X=Y||[],dt=i.extra||N||{};bt=P(a,i.total,f.products,f.citations,i.dotcom,"ko",f.productsCnty,f.citationsCnty,k,A,L,T,X,dt),Nt=P(r,i.total,tt.products,tt.citations,i.dotcom,"en",tt.productsCnty,tt.citationsCnty,k,A,L,T,X,dt),U=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else bt=P(a,i.total,f.products,f.citations,s,"ko",f.productsCnty,f.citationsCnty,{weeklyLabels:k,categoryStats:j,unlaunchedMap:(N==null?void 0:N.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Nt=P(r,i.total,tt.products,tt.citations,s,"en",tt.productsCnty,tt.citationsCnty,{weeklyLabels:k,categoryStats:j,unlaunchedMap:(N==null?void 0:N.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),U=`${a.period||""} ${a.title||"Newsletter"}`.trim();const ae=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),D={title:U,htmlKo:bt,htmlEn:Nt};Dt&&(D.month=ie);const Lt=await(await fetch(ae,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(D)})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if($e({...Lt,published:!0}),Dt&&Re(),t==="dashboard")try{const X=await Ee(t)||{},dt=i.extra||N||{};lo(t,{...X,meta:a,total:i.total,weeklyPR:dt.weeklyPR||X.weeklyPR,weeklyPRLabels:dt.weeklyPRLabels||X.weeklyPRLabels,weeklyBrandPrompt:dt.weeklyBrandPrompt||X.weeklyBrandPrompt,weeklyBrandPromptLabels:dt.weeklyBrandPromptLabels||X.weeklyBrandPromptLabels,appendixPrompts:dt.appendixPrompts||X.appendixPrompts})}catch{}const Mt=`${window.location.origin}${Lt.urls.ko}`,nt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(Mt+`
`+nt)}catch{}Pt(`KO: ${Mt}
EN: ${nt}`)}catch(i){Pt("ERROR:"+i.message)}finally{ne(!1),setTimeout(()=>Pt(""),2e4)}}}async function Wo(){if(!vt){Ut(!0),be("");try{const i=await In(br,Fe,{includeProgressTracker:Je});be(`통합 게시 완료!
KO: ${window.location.origin}${i.urls.ko}
EN: ${window.location.origin}${i.urls.en}`)}catch(i){be("ERROR: "+i.message)}finally{Ut(!1),setTimeout(()=>be(""),15e3)}}}async function Xe(i){try{const f=x||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),tt=Dt?`${f}?month=${encodeURIComponent(i||ie)}`:f;(await(await fetch(tt,{method:"DELETE"})).json()).ok&&(Dt?Re():$e(null))}catch{}}async function Vo(){if($!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}Tt(!0)}async function Ze(i){Tt(!1),Xt(!0);const f=(i==null?void 0:i.products)??y,tt=(i==null?void 0:i.productsCnty)??d,bt=(i==null?void 0:i.citations)??u,Nt=(i==null?void 0:i.citationsCnty)??C;try{const U=a,ae=[U.title||"",U.dateLine||"",U.noticeText||"",U.totalInsight||"",U.reportType||"",U.productInsight||"",U.productHowToRead||"",U.citationInsight||"",U.citationHowToRead||"",U.dotcomInsight||"",U.dotcomHowToRead||"",U.todoText||"",U.todoNotice||"",U.kpiLogicText||"",U.cntyInsight||"",U.cntyHowToRead||"",U.citDomainInsight||"",U.citDomainHowToRead||"",U.citCntyInsight||"",U.citCntyHowToRead||"",U.citPrdInsight||"",U.citPrdHowToRead||"",U.period||"",U.team||"",U.reportNo||"",U.monthlyReportBody||""],D=f.map(q=>q.kr||""),Zt=f.map(q=>q.compName||""),Lt=bt.map(q=>q.category||""),Mt=[...new Set(tt.map(q=>q.country||""))],nt=[...new Set(tt.map(q=>q.product||""))],X=[...new Set(tt.map(q=>q.compName||""))],dt=[...new Set(Nt.map(q=>q.cnty||"").filter(q=>q&&q!=="TTL"))],ft=[...ae,...D,...Zt,...Lt,...Mt,...nt,...X,...dt].map(q=>q||" "),K=await Pn(ft,{from:"ko",to:"en"});let W=0;const Jt={...a,title:K[W++]||U.title,dateLine:K[W++]||U.dateLine,noticeText:K[W++]||U.noticeText,totalInsight:K[W++]||U.totalInsight,reportType:K[W++]||U.reportType,productInsight:K[W++]||U.productInsight,productHowToRead:K[W++]||U.productHowToRead,citationInsight:K[W++]||U.citationInsight,citationHowToRead:K[W++]||U.citationHowToRead,dotcomInsight:K[W++]||U.dotcomInsight,dotcomHowToRead:K[W++]||U.dotcomHowToRead,todoText:K[W++]||U.todoText,todoNotice:K[W++]||U.todoNotice,kpiLogicText:K[W++]||U.kpiLogicText,cntyInsight:K[W++]||U.cntyInsight,cntyHowToRead:K[W++]||U.cntyHowToRead,citDomainInsight:K[W++]||U.citDomainInsight,citDomainHowToRead:K[W++]||U.citDomainHowToRead,citCntyInsight:K[W++]||U.citCntyInsight,citCntyHowToRead:K[W++]||U.citCntyHowToRead,citPrdInsight:K[W++]||U.citPrdInsight,citPrdHowToRead:K[W++]||U.citPrdHowToRead,period:(W++,U.period),team:K[W++]||U.team,reportNo:(W++,U.reportNo),monthlyReportBody:K[W++]||U.monthlyReportBody},$t=q=>q&&q.replace(/\b\w/g,it=>it.toUpperCase()),Wt=q=>(q||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Qt={};f.forEach((q,it)=>{Qt[q.id]={en:$t(K[W+it]||q.kr),compNameEn:Wt(K[W+D.length+it]||q.compName)}}),W+=D.length+Zt.length;const Ot={};bt.forEach((q,it)=>{Ot[`${q.rank}_${q.source}`]=$t(K[W+it]||q.category)}),W+=Lt.length;const se={};Mt.forEach((q,it)=>{se[q]=/^[A-Z]{2,3}$/.test(q)?q:K[W+it]||q}),W+=Mt.length;const ve={};nt.forEach((q,it)=>{ve[q]=K[W+it]||q}),W+=nt.length;const ue={};X.forEach((q,it)=>{ue[q]=K[W+it]||q}),W+=X.length;const he={};dt.forEach((q,it)=>{he[q]=/^[A-Z]{2,3}$/.test(q)?q:K[W+it]||q}),h(Jt),p(q=>q.map(it=>{var Qe,to;return{...it,en:((Qe=Qt[it.id])==null?void 0:Qe.en)||it.en||it.kr,compNameEn:((to=Qt[it.id])==null?void 0:to.compNameEn)||it.compNameEn||it.compName}})),m(q=>q.map(it=>({...it,categoryEn:Ot[`${it.rank}_${it.source}`]||it.categoryEn||it.category}))),S(q=>q.map(it=>({...it,countryEn:$t(se[it.country]||it.country),productEn:$t(ve[it.product]||it.product),compNameEn:Wt(ue[it.compName]||it.compName)}))),v(q=>q.map(it=>({...it,cntyEn:it.cnty==="TTL"?"TTL":$t(he[it.cnty]||it.cnty)}))),Xt(!1)}catch(U){alert("번역 오류: "+U.message),Xt(!1)}}async function Ko(){const i=P(e,l,E.products,E.citations,s,$,E.productsCnty,E.citationsCnty);try{await navigator.clipboard.writeText(i)}catch{const f=document.createElement("textarea");f.value=i,document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f)}H(!0),setTimeout(()=>H(!1),2500)}async function qo(){await zn(e,l,y,u,s)}async function Jo(){if(et!=="sending"){rt("sending");try{const i=at(),f=P(e,i.total,i.products,i.citations,i.dotcom,$,i.productsCnty,i.citationsCnty,{weeklyLabels:k,categoryStats:j,unlaunchedMap:(N==null?void 0:N.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),tt=`[LG GEO] ${e.title} · ${e.period}`,Nt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:st.trim(),subject:tt,html:f})})).json();if(!Nt.ok)throw new Error(Nt.error||"발송 실패");rt("ok"),setTimeout(()=>rt(!1),4e3)}catch(i){rt("error"),Q(i.message),setTimeout(()=>{rt(!1),Q("")},5e3)}}}async function Yo(){var tt,bt,Nt,U,ae;if(At)return;const i=er(xt.trim());if(!i){Et("error"),Q("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Et(null),3e3);return}Rt(!0),Et(null),Q(""),lt("");const f=[];try{const D=await nr(i,nt=>Q(nt));if(f.push(`[Sync] parsed keys: ${Object.keys(D).join(", ")||"(없음)"}`),D.meta&&f.push(`[Sync] meta keys: ${Object.keys(D.meta).join(", ")}`),D.productsPartial&&f.push(`[Sync] products: ${D.productsPartial.length}건`),f.push(`[Sync] citations: ${((tt=D.citations)==null?void 0:tt.length)??0}건`),f.push(`[Sync] citationsCnty: ${((bt=D.citationsCnty)==null?void 0:bt.length)??0}건`),f.push(`[Sync] dotcom: ${D.dotcom?"OK":"(없음)"}`),f.push(`[Sync] productsCnty: ${((Nt=D.productsCnty)==null?void 0:Nt.length)??0}건`),D.meta){const nt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];c(X=>{const dt={...X};for(const[ft,K]of Object.entries(D.meta))nt.includes(ft)&&X[ft]||(dt[ft]=K);return dt}),h(X=>({...X,period:D.meta.period,dateLine:D.meta.dateLine,reportNo:D.meta.reportNo}))}if(D.citations&&(m(D.citations),ut.current={...ut.current,citations:D.citations}),D.dotcom&&(w(nt=>({...nt,...D.dotcom})),ut.current={...ut.current,dotcom:{...ut.current.dotcom,...D.dotcom}}),D.productsCnty&&(S(D.productsCnty),ut.current={...ut.current,productsCnty:D.productsCnty}),D.citationsCnty&&(v(D.citationsCnty),ut.current={...ut.current,citationsCnty:D.citationsCnty}),D.monthlyVis&&F&&F(D.monthlyVis),M){const nt={weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,weeklyLabelsFull:D.weeklyLabelsFull||null,prTopicList:D.prTopicList||null};M(nt),ut.current={...ut.current,extra:{...ut.current.extra,...nt}}}const Zt=D.weeklyLabels||((U=D.meta)==null?void 0:U.weeklyLabels);console.log("[SYNC] weeklyLabels:",Zt,"weeklyLabelsFull:",D.weeklyLabelsFull),Zt&&Zt.length&&_(Zt),D.weeklyAll&&O(nt=>({...nt,...D.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(D));const Lt=D.weeklyMap?Object.keys(D.weeklyMap):[],Mt=((ae=D.productsPartial)==null?void 0:ae.map(nt=>nt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Lt.length?Lt:"NONE"),console.log("[SYNC] productsPartial IDs:",Mt.length?Mt:"NONE"),Lt.length&&Mt.length){const nt=Mt.filter(dt=>!Lt.includes(dt)),X=Lt.filter(dt=>!Mt.includes(dt));nt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",nt),X.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",X),!nt.length&&!X.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(D.productsPartial){const nt=D.productsPartial.map(X=>{var ue;const dt=((ue=D.weeklyMap)==null?void 0:ue[X.id])||[],ft=dt.filter(he=>he!=null&&he>0),K=X.score,W=X.prev||0,Jt=X.vsComp>0?Math.round(K/X.vsComp*100):100,$t=ft.length>0?ft[ft.length-1]:K,Wt=ft.length>=5?ft[ft.length-5]:ft[0]||0,Qt=K,Ot=W,se=Jt,ve=W>0&&W!==K?[W,K]:[];return{...X,score:Qt,prev:Ot,weekly:dt,monthly:ve,weeklyScore:$t,weeklyPrev:Wt,monthlyScore:K,monthlyPrev:W,compRatio:se,status:se>=100?"lead":se>=80?"behind":"critical"}});p(nt),ut.current={...ut.current,products:nt}}else D.weeklyMap&&p(nt=>nt.map(X=>{var ft;const dt=(ft=D.weeklyMap)==null?void 0:ft[X.id];return dt?{...X,weekly:dt}:X}));if(D.total){const nt={...ut.current.total,...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}};g(X=>({...X,...nt})),ut.current={...ut.current,total:nt}}{let nt=function(W){if(!W)return 0;const Jt=String(W).trim(),$t=Jt.match(/(\d{1,2})월/);if($t){const Ot=parseInt($t[1]);return Ot>=1&&Ot<=12?Ot:0}const Wt=Jt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Wt)return ft[Wt[1].toLowerCase()]||0;const Qt=Jt.match(/\d{4}[-\/](\d{1,2})/);if(Qt){const Ot=parseInt(Qt[1]);return Ot>=1&&Ot<=12?Ot:0}return 0};const X=new Date().getFullYear(),dt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ft={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let K=0;if(D.derivedPeriod){const W=nt(D.derivedPeriod);W>K&&(K=W)}if(D.citDerivedPeriod){const W=nt(D.citDerivedPeriod);W>K&&(K=W)}K>0&&K<=12&&(c(W=>({...W,period:`${X}년 ${K}월`})),h(W=>({...W,period:`${dt[K]} ${X}`})))}if(!D.total&&D.productsPartial&&D.productsPartial.length>0){const nt=D.productsPartial,X=+(nt.reduce((ft,K)=>ft+K.score,0)/nt.length).toFixed(1),dt=+(nt.reduce((ft,K)=>ft+(K.vsComp||0),0)/nt.length).toFixed(1);g(ft=>({...ft,score:X,vsComp:dt,rank:X>=dt?1:2}))}if(setTimeout(()=>{lo(t,{meta:D.meta||null,total:D.total?{...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}}:null,productsPartial:D.productsPartial||null,weeklyMap:D.weeklyMap||null,weeklyLabels:D.weeklyLabels||null,weeklyLabelsFull:D.weeklyLabelsFull||null,weeklyAll:D.weeklyAll||null,citations:D.citations||null,dotcom:D.dotcom||null,productsCnty:D.productsCnty||null,citationsCnty:D.citationsCnty||null,citationsByCnty:D.citationsByCnty||null,dotcomByCnty:D.dotcomByCnty||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,prTopicList:D.prTopicList||null,monthlyVis:D.monthlyVis||null,weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,monthlyPR:D.monthlyPR||null,monthlyPRLabels:D.monthlyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,monthlyBrandPrompt:D.monthlyBrandPrompt||null,monthlyBrandPromptLabels:D.monthlyBrandPromptLabels||null,dotcomTrend:D.dotcomTrend||null,dotcomTrendMonths:D.dotcomTrendMonths||null}),setTimeout(Ho,250)},100),lt(f.join(`
`)),Et("ok"),Q(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const nt={};D.productsPartial&&(nt.products=D.productsPartial.map(X=>{var $t;const dt=(($t=D.weeklyMap)==null?void 0:$t[X.id])||[],ft=X.vsComp>0?X.score/X.vsComp*100:100,K=dt.find(Wt=>Wt!=null&&Wt>0),W=X.prev!=null&&X.prev>0?X.prev:K||0,Jt=W>0?[W,X.score]:[];return{...X,prev:W,weekly:dt,monthly:Jt,compRatio:Math.round(ft),status:ft>=100?"lead":ft>=80?"behind":"critical"}})),D.productsCnty&&(nt.productsCnty=D.productsCnty),D.citations&&(nt.citations=D.citations),D.citationsCnty&&(nt.citationsCnty=D.citationsCnty);try{await Ze(nt)}catch{}Q("동기화 + 번역 완료!")}}catch(D){f.push(`[ERROR] ${D.message}`),Et("error"),Q(D.message),lt(f.join(`
`))}finally{Rt(!1),setTimeout(()=>{Et(null),Q("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:yt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:I},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:I},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:I},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(ir,{...Go||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:I},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:I},children:"Google Sheets URL"}),n.jsx("input",{value:xt,onChange:i=>Gt(i.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...gt,fontSize:11,padding:"7px 9px",marginBottom:8,color:xt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:Yo,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:At?"wait":"pointer",background:At?"#1E293B":yt,fontSize:12,fontWeight:700,color:At?"#94A3B8":"#FFFFFF",fontFamily:I,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(eo,{size:13,style:{animation:At?"spin 1s linear infinite":"none"}}),At?"동기화 중...":"구글 시트 동기화"]}),(Ft||At&&Ht)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:I,lineHeight:1.6,background:Ft==="ok"?"#14532D":Ft==="error"?"#450A0A":"#1E293B",color:Ft==="ok"?"#86EFAC":Ft==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Ft==="ok"?"#22C55E33":Ft==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Ht}),G&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[G,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(G).then(()=>{const i=document.getElementById("vis-debug-copy-btn");i&&(i.textContent="복사됨!",setTimeout(()=>{i.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:I,cursor:"pointer"},children:"로그 복사"})]}),n.jsx(Fr,{url:xt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:Vo,disabled:It,style:{width:"100%",padding:"9px 0",background:It?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:I,cursor:It?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:It?.6:1},children:[n.jsx(Xo,{size:13})," ",It?"번역 중...":"AI 번역 (EN)"]}),ht&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:I},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:I},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>Tt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:I,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:Ze,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:I,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:qo,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:I,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(Zo,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Dt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:"발행 월"}),n.jsx("select",{value:ie,onChange:i=>_o(i.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:I,fontSize:11,fontWeight:700,cursor:"pointer"},children:zo.map(i=>n.jsxs("option",{value:i,children:[i," · ",xe(i),pe.find(f=>f.month===i)?" ✓ 게시됨":""]},i))})]}),Dt&&pt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",mt||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:ot||"",onChange:i=>pt(i.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:I,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",mt||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(i=>n.jsx("option",{value:i,children:i},i))]}),ot&&n.jsx("button",{onClick:()=>pt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:I,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:Uo,disabled:Bt,style:{width:"100%",padding:"9px 0",background:Bt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:I,cursor:Bt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(oo,{size:12}),Bt?"게시 중...":Dt?`${xe(ie)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:I,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:Je,onChange:i=>Mo(i.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:Wo,disabled:vt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:vt?"#1E293B":"#166534",color:vt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:I,cursor:vt?"wait":"pointer",marginBottom:6},children:[n.jsx(oo,{size:12}),vt?"통합 게시 중...":"통합 대시보드 게시"]}),re&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:I,lineHeight:1.8,background:re.startsWith("ERROR")?"#450A0A":"#14532D",color:re.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:re.startsWith("ERROR:")?re.slice(6):re})]})]}),n.jsxs("button",{onClick:async()=>{const i={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(i).some(tt=>tt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const bt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:i})})).json();bt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(bt.error||""))}catch(tt){alert("아카이빙 실패: "+tt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:I,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(Qo,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&jt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:I,lineHeight:1.8,background:jt.startsWith("ERROR:")?"#450A0A":"#14532D",color:jt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${jt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:jt.startsWith("ERROR:")?jt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(Ie,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[jt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Dt&&(ee==null?void 0:ee.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:I,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>Xe(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:I,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:ee.urls.ko},{label:"EN",url:ee.urls.en}].map(({label:i,url:f})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:f,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:I,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i,": ",f]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${f}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ie,{size:10})})]},i)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:I},children:ee.ts?new Date(ee.ts).toLocaleString("ko-KR"):""})]}),Dt&&pe.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:I,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",pe.length,")"]})}),pe.map(i=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:I},children:xe(i.month)}),n.jsx("button",{onClick:()=>{confirm(`${xe(i.month)} 게시본을 삭제할까요?`)&&Xe(i.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:I,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:i.urls.ko},{label:"EN",url:i.urls.en}].map(({label:f,url:tt})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:tt,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:I,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[f,": ",tt]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${tt}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ie,{size:10})})]},f)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:I},children:i.ts?new Date(i.ts).toLocaleString("ko-KR"):""})]},i.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:I},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:i=>o(f=>({...f,reportType:i.target.value})),style:{...gt,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:"보고서 번호"}),n.jsx("input",{value:e.reportNo,onChange:i=>o(f=>({...f,reportNo:i.target.value})),style:{...gt}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:["기간 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:i=>o(f=>({...f,period:i.target.value})),style:{...gt}})]})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:i=>o(f=>({...f,title:i.target.value})),rows:4,style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:i=>o(f=>({...f,team:i.target.value})),style:{...gt,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:I},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:i=>o(f=>({...f,dateLine:i.target.value})),style:{...gt,marginBottom:10}}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"Notice"}),n.jsx("button",{onClick:()=>o(i=>({...i,showNotice:!i.showNotice})),style:{background:e.showNotice?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:i=>o(f=>({...f,noticeText:i.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...gt,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:I},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(i=>({...i,showKpiLogic:!i.showKpiLogic})),style:{background:e.showKpiLogic?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:i=>o(f=>({...f,kpiLogicText:i.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...gt,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:I},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:I,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:i=>o(f=>({...f,titleFontSize:Number(i.target.value)})),style:{width:"100%",accentColor:yt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:i=>o(f=>({...f,titleColor:i.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:I},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([i,f])=>n.jsx("button",{onClick:()=>o(tt=>({...tt,titleColor:i})),title:f,style:{width:16,height:16,borderRadius:"50%",background:i,border:e.titleColor===i?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},i))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:I},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:i,label:f})=>n.jsx("button",{onClick:()=>o(tt=>({...tt,[i]:!tt[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[i]?yt:"#1E293B",color:e[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:f},i))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:I},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?yt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:I},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(i=>({...i,trendMode:(i.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:I},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:I},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?yt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:I},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?yt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:I},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:I},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,monthlyReportBody:"⏳ AI 생성 중..."}));const i=await St("monthlyReportBody",{products:at().products,productsCnty:at().productsCnty,total:at().total,citations:at().citations,todoText:e.todoText||"",period:e.period||""},$);o(f=>({...f,monthlyReportBody:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,monthlyReportBody:`[AI 실패: ${i.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:i=>o(f=>({...f,monthlyReportBody:i.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:I},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,totalInsight:"⏳ AI 생성 중..."}));const i=await St("totalInsight",{products:at().products,productsCnty:at().productsCnty,total:at().total,todoText:e.todoText||""},$);o(f=>({...f,totalInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,totalInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:i=>o(f=>({...f,totalInsight:i.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:I},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,productInsight:"⏳ AI 생성 중..."}));const i=await St("product",{products:at().products,total:at().total},$);o(f=>({...f,productInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,productInsight:`[AI 실패: ${i.message}]

`+xr(at().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductInsight:!i.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?yt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:i=>o(f=>({...f,productInsight:i.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,productHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 GEO Visibility"},$);o(f=>({...f,productHowToRead:i}))}catch{o(i=>({...i,productHowToRead:vr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductHowToRead:!i.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?yt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:i=>o(f=>({...f,productHowToRead:i.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,cntyInsight:"⏳ AI 생성 중..."}));const i=await St("cnty",{productsCnty:at().productsCnty},$);o(f=>({...f,cntyInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,cntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyInsight:!i.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?yt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:i=>o(f=>({...f,cntyInsight:i.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,cntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 GEO Visibility"},$);o(f=>({...f,cntyHowToRead:i}))}catch{o(i=>({...i,cntyHowToRead:wr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyHowToRead:!i.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?yt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:i=>o(f=>({...f,cntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:i=>o(f=>({...f,prNotice:i.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:i=>o(f=>({...f,prTopicDescsRaw:i.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:i=>o(f=>({...f,prTopicPromptsRaw:i.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:i=>o(f=>({...f,bpNotice:i.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citationInsight:"⏳ AI 생성 중..."}));const i=await St("citation",{citations:at().citations},$);o(f=>({...f,citationInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,citationInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationInsight:!i.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?yt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:i=>o(f=>({...f,citationInsight:i.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citationHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"Citation 도메인별 현황"},$);o(f=>({...f,citationHowToRead:i}))}catch{o(i=>({...i,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationHowToRead:!i.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?yt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:i=>o(f=>({...f,citationHowToRead:i.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citDomainInsight:"⏳ AI 생성 중..."}));const i=await St("citDomain",{citationsCnty:at().citationsCnty},$);o(f=>({...f,citDomainInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,citDomainInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainInsight:!i.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?yt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:i=>o(f=>({...f,citDomainInsight:i.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citDomainHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"도메인별 Citation 현황"},$);o(f=>({...f,citDomainHowToRead:i}))}catch{o(i=>({...i,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainHowToRead:!i.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?yt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:i=>o(f=>({...f,citDomainHowToRead:i.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citCntyInsight:"⏳ AI 생성 중..."}));const i=await St("citCnty",{citationsCnty:at().citationsCnty},$);o(f=>({...f,citCntyInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,citCntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyInsight:!i.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?yt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:i=>o(f=>({...f,citCntyInsight:i.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citCntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 Citation 도메인"},$);o(f=>({...f,citCntyHowToRead:i}))}catch{o(i=>({...i,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyHowToRead:!i.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?yt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:i=>o(f=>({...f,citCntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citPrdInsight:"⏳ AI 생성 중..."}));const i=await St("citPrd",{citationsCnty:at().citationsCnty},$);o(f=>({...f,citPrdInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,citPrdInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdInsight:!i.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?yt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:i=>o(f=>({...f,citPrdInsight:i.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,citPrdHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 Citation"},$);o(f=>({...f,citPrdHowToRead:i}))}catch{o(i=>({...i,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdHowToRead:!i.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?yt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:i=>o(f=>({...f,citPrdHowToRead:i.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),d.length>0&&(()=>{const i=[...new Set(E.productsCnty.map(f=>f.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:I},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:i.map(f=>{const tt=(e.cntyProductFilter||{})[f]!==!1;return n.jsx("button",{onClick:()=>o(bt=>({...bt,cntyProductFilter:{...bt.cntyProductFilter||{},[f]:!tt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:tt?"#166534":"#1E293B",color:tt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:f},f)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,dotcomInsight:"⏳ AI 생성 중..."}));const i=await St("dotcom",{dotcom:at().dotcom},$);o(f=>({...f,dotcomInsight:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,dotcomInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomInsight:!i.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?yt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:i=>o(f=>({...f,dotcomInsight:i.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,dotcomHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"닷컴 Citation"},$);o(f=>({...f,dotcomHowToRead:i}))}catch{o(f=>({...f,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomHowToRead:!i.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?yt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:i=>o(f=>({...f,dotcomHowToRead:i.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:i=>o(f=>({...f,todoNotice:i.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(f=>({...f,todoText:"⏳ AI 생성 중..."}));const i=await St("todo",{products:at().products},$);o(f=>({...f,todoText:i}))}catch(i){console.error("[AI]",i),o(f=>({...f,todoText:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showTodo:!i.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?yt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:i=>o(f=>({...f,todoText:i.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...gt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:I},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:Ko,style:{width:"100%",padding:"9px 0",background:z?"#14532D":"transparent",border:`1px solid ${z?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:z?"#86EFAC":"#64748B",fontFamily:I,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:z?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(To,{size:12})," 이메일 HTML 복사"]})}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:I},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:st,onChange:i=>ct(i.target.value),placeholder:"recipient@example.com",style:{...gt,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:Jo,disabled:et==="sending"||!st.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:et==="sending"||!st.trim()?"not-allowed":"pointer",background:et==="ok"?"#14532D":et==="error"?"#7F1D1D":et==="sending"?"#1E3A5F":st.trim()?"#1D4ED8":"#1E293B",color:et==="ok"?"#86EFAC":et==="error"?"#FCA5A5":st.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:et==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(eo,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):et==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{size:12})," 발송 완료!"]}):et==="error"?n.jsxs(n.Fragment,{children:[n.jsx(no,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(no,{size:12})," 메일 발송"]})})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:I,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const le="weekly-report",Ao="geo-weekly-report-cache";function Ar({meta:t,total:e,products:o,citations:a,dotcom:c,productsCnty:r=[],citationsCnty:h=[],lang:l="ko",weeklyLabels:g,weeklyAll:y,categoryStats:p}){const u=J.useRef(null),m=J.useMemo(()=>Ge(t,e,o,a,c,l,r,h,{weeklyLabels:g,weeklyAll:y,categoryStats:p}),[t,e,o,a,c,l,r,h,g,y,p]);return rn.useEffect(()=>{const s=u.current;if(!s)return;const w=s.contentDocument||s.contentWindow.document;w.open(),w.write(m),w.close();const d=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const S=w.documentElement.scrollHeight;S&&(s.style.height=S+20+"px")}catch{}};setTimeout(d,150),setTimeout(d,400),setTimeout(d,1e3),setTimeout(d,2e3)},[m]),n.jsx("iframe",{ref:u,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Tr({meta:t,total:e,products:o,citations:a,dotcom:c,productsCnty:r=[],citationsCnty:h=[],lang:l="ko",weeklyLabels:g,weeklyAll:y,categoryStats:p}){const[u,m]=J.useState(!1),s=J.useMemo(()=>Ge(t,e,o,a,c,l,r,h,{weeklyLabels:g,weeklyAll:y,categoryStats:p}),[t,e,o,a,c,l,r,h,g,y,p]);async function w(){try{await navigator.clipboard.writeText(s)}catch{const d=document.createElement("textarea");d.value=s,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d)}m(!0),setTimeout(()=>m(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:I},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:u?"#14532D":yt,color:u?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:u?n.jsxs(n.Fragment,{children:[n.jsx(Ne,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(To,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:s})})]})}function Br(){const t=J.useRef(An(Ao)).current,[e,o]=J.useState({...we,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,c]=J.useState({...we,...(t==null?void 0:t.metaEn)??{}}),[r,h]=J.useState((t==null?void 0:t.total)??wn),[l,g]=J.useState((t==null?void 0:t.products)??Cn),[y,p]=J.useState((t==null?void 0:t.citations)??En),[u,m]=J.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:kn),[s,w]=J.useState((t==null?void 0:t.productsCnty)??Sn),[d,S]=J.useState((t==null?void 0:t.citationsCnty)??Fn),[C,v]=J.useState((t==null?void 0:t.weeklyLabels)??null),[E,$]=J.useState((t==null?void 0:t.weeklyAll)??{}),[B,b]=J.useState(null),[R,_]=J.useState("preview"),[O,k]=J.useState("ko"),[A,L]=J.useState([]),[T,P]=J.useState(""),[x,F]=J.useState(!1),[M,j]=J.useState(""),[N,Y]=J.useState(null),[ot,pt]=J.useState(!0);J.useEffect(()=>{let Q=!1;const G=Mn(e.period)||`${new Date().getMonth()+1}월`,lt=On(G);async function z(){var H,st,ct;try{const et=await fetch("/api/tracker-snapshot-v2"),rt=et.ok?await et.json():null;if(rt!=null&&rt.ok&&((ct=(st=(H=rt.data)==null?void 0:H.quantitativeGoals)==null?void 0:st.rows)!=null&&ct.length)){const ht=po(rt.data,lt);if(ht!=null&&ht.length&&!Q){b(ht);return}}}catch{}try{const[{parseKPISheet:et},rt]=await Promise.all([Me(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Me(()=>import("./xlsx-2l-k0XfJ.js").then(Ut=>Ut.x),__vite__mapDeps([0,1]))]),ht=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Tt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${ht}&headers=1`,It=await fetch(Tt,{cache:"no-store"});if(!It.ok)return;const Xt=await It.text(),Bt=rt.read(Xt,{type:"string"}),ne=Bt.Sheets[Bt.SheetNames[0]],jt=rt.utils.sheet_to_json(ne,{header:1,defval:""}),Pt=et(jt),vt=po(Pt,lt);vt!=null&&vt.length&&!Q&&b(vt)}catch{}}return z(),()=>{Q=!0}},[e.period]);const mt=O==="en"?a:e,ut=O==="en"?c:o,at=J.useMemo(()=>Fe(l,s,y,d,O),[l,s,y,d,O]);J.useEffect(()=>{Bn(le).then(L)},[]);const xt=J.useRef(null);function Gt(Q,G=2e3){clearTimeout(xt.current),j(Q),xt.current=setTimeout(()=>j(""),G)}J.useEffect(()=>()=>clearTimeout(xt.current),[]);const At=J.useRef(!1);J.useEffect(()=>{let Q=!1;return Ee(le).then(G=>{Q||!G||(At.current=!0,G.meta&&o(lt=>({...lt,...G.meta})),G.total&&h(lt=>({...lt,...G.total})),G.citations&&p(G.citations),G.dotcom&&m(lt=>({...lt,...G.dotcom})),G.productsCnty&&w(G.productsCnty),G.citationsCnty&&S(G.citationsCnty),G.weeklyLabels&&v(G.weeklyLabels),G.weeklyAll&&$(lt=>({...lt,...G.weeklyAll})),G.productsPartial?g(G.productsPartial.map(lt=>{var st;const z=((st=G.weeklyMap)==null?void 0:st[lt.id])||[],H=lt.vsComp>0?lt.score/lt.vsComp*100:100;return{...lt,weekly:z,monthly:[],compRatio:Math.round(H),status:H>=100?"lead":H>=80?"behind":"critical"}})):G.weeklyMap&&g(lt=>lt.map(z=>{var st;const H=(st=G.weeklyMap)==null?void 0:st[z.id];return H?{...z,weekly:H}:z})))}),()=>{Q=!0}},[]),J.useEffect(()=>{Tn(Ao,{metaKo:e,metaEn:a,total:r,products:l,citations:y,dotcom:u,productsCnty:s,citationsCnty:d,weeklyLabels:C,weeklyAll:E})},[e,a,r,l,y,u,s,d,C,E]);async function Rt(){if(!N)return;const G=await $n(le,N,{metaKo:e,metaEn:a,total:r,products:l,citations:y,dotcom:u,productsCnty:s,citationsCnty:d,weeklyLabels:C,weeklyAll:E});G&&L(G),Gt(G?"저장 완료!":"저장 실패")}async function Ft(){var lt;const Q=T.trim()||`${mt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,G=await Ln(le,Q,{metaKo:e,metaEn:a,total:r,products:l,citations:y,dotcom:u,productsCnty:s,citationsCnty:d,weeklyLabels:C,weeklyAll:E});G&&(L(G),P(""),Y(((lt=G[0])==null?void 0:lt.ts)||null)),Gt(G?"새로 저장 완료!":"저장 실패")}function Et(Q){const G=Q.data;o({...we,...G.metaKo||G.meta||{}}),c({...we,...G.metaEn||{}}),G.total&&h(G.total),G.products&&g(G.products),G.citations&&p(G.citations),G.dotcom&&m(G.dotcom),G.productsCnty&&w(G.productsCnty),G.citationsCnty&&S(G.citationsCnty),G.weeklyLabels&&v(G.weeklyLabels),G.weeklyAll&&$(G.weeklyAll),Y(Q.ts),Gt(`"${Q.name}" 불러옴`)}async function Ht(Q){const G=A[Q];if(!G)return;const lt=await Rn(le,G.ts);lt&&L(lt),N===G.ts&&Y(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:I},children:[ot&&n.jsx(Er,{mode:le,meta:mt,setMeta:ut,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:c,total:r,setTotal:h,products:l,setProducts:g,citations:y,setCitations:p,dotcom:u,setDotcom:m,productsCnty:s,setProductsCnty:w,citationsCnty:d,setCitationsCnty:S,resolved:at,previewLang:O,setPreviewLang:k,snapshots:A,setSnapshots:L,setWeeklyLabels:v,setWeeklyAll:$,weeklyLabels:C,weeklyAll:E,generateHTML:Ge}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>pt(Q=>!Q),title:ot?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:ot?n.jsx(tn,{size:16}):n.jsx(en,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Q,tab:G,lang:lt,label:z})=>{const H=G==="code"?R==="code":R==="preview"&&O===lt;return n.jsx("button",{onClick:()=>{_(G),lt&&k(lt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:H?"#1E293B":"transparent",color:H?"#FFFFFF":"#475569",fontSize:11,fontWeight:H?700:500,fontFamily:I,cursor:"pointer"},children:z},Q)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[M&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:I},children:M}),n.jsxs("button",{onClick:Rt,disabled:!N,title:N?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:N?"pointer":"default",background:N?"#1D4ED8":"#1E293B",color:N?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:4,opacity:N?1:.5},children:[n.jsx(ro,{size:11})," 저장"]}),n.jsx("input",{value:T,onChange:Q=>P(Q.target.value),placeholder:"버전 이름...",onKeyDown:Q=>Q.key==="Enter"&&Ft(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:I,outline:"none"}}),n.jsxs("button",{onClick:Ft,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:4},children:[n.jsx(ro,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>F(!x),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:x?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:I,display:"flex",alignItems:"center",gap:4},children:[n.jsx(on,{size:11})," 불러오기 ",A.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",A.length,")"]})]}),x&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Q=>Q.stopPropagation(),children:A.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:I,textAlign:"center"},children:"저장된 버전이 없습니다"}):A.map((Q,G)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:N===Q.ts?"#1E3A5F":"#0F172A",border:N===Q.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:I,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Q.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:I},children:new Date(Q.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{Et(Q),F(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:I},children:"적용"}),n.jsx("button",{onClick:()=>Ht(G),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(nn,{size:10})})]},Q.ts))})]})]})]}),R==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:n.jsx(Ar,{meta:mt,total:r,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:O,weeklyLabels:C,weeklyAll:E,categoryStats:B})})}):n.jsx(Tr,{meta:mt,total:r,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:O,weeklyLabels:C,weeklyAll:E,categoryStats:B}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:I},children:["v","3.1.9"]})})]})]})}an.createRoot(document.getElementById("root")).render(n.jsx(Br,{}));
