const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as n,b as Y,R as ro,L as sn,D as ln,G as io,A as cn,c as Ne,S as kt,C as Ge,d as Io,e as ao,P as dn,f as pn,h as so,F as un,T as fn,i as hn}from"./react-BzJiA2Qb.js";import{R as gn}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const mn="modulepreload",yn=function(t){return"/admin/weekly-report/"+t},lo={},He=function(e,o,a){let s=Promise.resolve();if(o&&o.length>0){let f=function(x){return Promise.all(x.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),g=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=f(o.map(x=>{if(x=yn(x),x in lo)return;lo[x]=!0;const u=x.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":mn,u||(h.as="script"),h.crossOrigin="",h.href=x,g&&h.setAttribute("nonce",g),document.head.appendChild(h),u)return new Promise((c,k)=>{h.addEventListener("load",c),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function r(f){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=f,window.dispatchEvent(l),!l.defaultPrevented)throw f}return s.then(f=>{for(const l of f||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},K="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",bn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function pe(t){const e=bn.indexOf(t);return e>=0?e:999}function Ct(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const co=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function jo(t){return co.filter(e=>t.includes(e)).concat(t.filter(e=>!co.includes(e)))}const xn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Po(t){return xn[String(t||"").trim().toUpperCase()]||t}function be(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function vn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ue(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ge(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function wn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},a={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},s=[],r=[];Object.entries(t).forEach(([g,x])=>{if(!x)return;const u=x.Total||x.TTL||x.TOTAL;if(u){const d=u.LG||u.lg||[],h=d.length>0?d[d.length-1]:null,c=d.length>=2?d[d.length-2]:null;let k="",p=0;Object.entries(u).forEach(([S,C])=>{if(S==="LG"||S==="lg")return;const w=Array.isArray(C)&&C.length?C[C.length-1]:0;w>p&&(p=w,k=S)}),h!=null&&h>0&&s.push({id:g,kr:o[g]||g,bu:a[g]||"OTHER",score:h,prev:c,vsComp:p,compName:k,category:o[g]||g})}Object.entries(x).forEach(([d,h])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const c=h.LG||h.lg||[],k=c.length>0?c[c.length-1]:null,p=c.length>=2?c[c.length-2]:null;if(k==null||k<=0)return;let S="",C=0;Object.entries(h).forEach(([w,B])=>{if(w==="LG"||w==="lg")return;const R=Array.isArray(B)&&B.length?B[B.length-1]:0;R>C&&(C=R,S=w)}),r.push({product:o[g]||g,country:d,score:k,prev:p,compScore:C,compName:S})})});const f=(e==null?void 0:e[e.length-1])||"This Week",l=(e==null?void 0:e[e.length-2])||"Last Week";return{products:s,productsCnty:r,lastLabel:f,prevLabel:l}}function Cn(t,e,o,a){if(!t.length)return"";const s=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],f={};t.forEach(g=>{const x=g.bu||"OTHER";f[x]||(f[x]=[]),f[x].push(g)});const l=[];return r.forEach(g=>{const x=(f[g]||[]).slice().sort((u,d)=>pe(u.kr||u.category||u.id)-pe(d.kr||d.category||d.id));x.forEach((u,d)=>{const h=vn(u.score,u.prev),c=ge(u.score,u.vsComp)||"#FFFFFF";l.push(`<tr>
        ${d===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${g}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;">${Ct(u.kr||u.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;font-weight:700;background:${c};">${be(u.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;background:${c};">${be(u.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;background:${c};">${Ct(u.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;font-weight:700;background:${c};">${Ue(u.score,u.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${K};text-align:center;">${h}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${s.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
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
  </table>`}function kn(t,e,o,a){const s=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},f=new Set,l=new Set;t.forEach(c=>{!c.country||!c.product||(f.add(c.country),l.add(c.product),r[c.product]||(r[c.product]={}),r[c.product][c.country]=c)});const g=jo(Array.from(f)),x=Array.from(l).sort((c,k)=>pe(c)-pe(k));if(!x.length||!g.length)return"";const u={};(o||[]).forEach(c=>{[c.kr,c.category,c.id,c.en].filter(Boolean).forEach(p=>{u[p]=c})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+g.map(c=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Ct(Po(c))}</th>`).join(""),h=[];return x.forEach((c,k)=>{const p=k%2===0?"#FFFFFF":"#FAFAFA",S=u[c],w=(S?ge(S.score,S.vsComp):null)||p,B=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${w};">${S?be(S.score):"—"}</td>`,R=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${w};">${S?Ue(S.score,S.vsComp):"—"}</td>`,L=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;background:${w};color:#1A1A1A;font-weight:600;">${S!=null&&S.compName?Ct(S.compName):"—"}</td>`,v=g.map(N=>{var E;const m=(E=r[c])==null?void 0:E[N],T=(m?ge(m.score,m.compScore):null)||p;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${T};">${m?be(m.score):"—"}</td>`}).join(""),I=g.map(N=>{var E;const m=(E=r[c])==null?void 0:E[N],T=(m?ge(m.score,m.compScore):null)||p;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;font-weight:700;background:${T};">${m?Ue(m.score,m.compScore):"—"}</td>`}).join(""),O=g.map(N=>{var E;const m=(E=r[c])==null?void 0:E[N],T=(m?ge(m.score,m.compScore):null)||p;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${K};text-align:center;background:${T};color:#1A1A1A;font-weight:600;">${m!=null&&m.compName?Ct(m.compName):"—"}</td>`}).join("");h.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${K};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Ct(c)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};font-weight:600;background:#F5F5F5;white-space:nowrap;">${s.lg} (%)</td>
        ${B}${v}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};background:#F5F5F5;white-space:nowrap;">${s.ratio}</td>
        ${R}${I}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${K};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${L}${O}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${s.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${h.join("")}</tbody>
  </table>
  </div>`}function Sn(t,e,o,a){const s=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},r={},f=new Set,l=new Set;t.forEach(h=>{!h.country||!h.product||(f.add(h.country),l.add(h.product),r[h.product]||(r[h.product]={}),r[h.product][h.country]=h)});const g=jo(Array.from(f)),x=Array.from(l).sort((h,c)=>pe(h)-pe(c));if(!x.length||!g.length)return"";const u=g.map(h=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Ct(Po(h))}</th>`).join(""),d=x.map(h=>{const c=g.map(k=>{var v;const p=(v=r[h])==null?void 0:v[k];if(!p||p.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${K};text-align:center;color:#999;">—</td>`;const S=p.score,C=p.prev,w=C!=null?+(S-C).toFixed(1):null,B=w==null?"#999":w>0?"#16A34A":w<0?"#DC2626":"#666",R=w==null?"":w>0?"▲":w<0?"▼":"─",L=w!=null?`${R}${Math.abs(w).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${K};text-align:center;">
        <div style="font-weight:700;color:#111;">${be(S)}%</div>
        <div style="font-size:9px;color:${B};">${L}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Ct(h)}</td>
      ${c}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${s.product}</th>
      ${u}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${K};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Fn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((r,f)=>r+(f.score||0),0),s=t.map((r,f)=>`
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
    <tbody>${s}</tbody>
  </table>`}function En(t,e){const o=(t||[]).filter(l=>l.cnty==="TTL"||l.cnty==="TOTAL"||!l.cnty);if(!o.length)return"";o.sort((l,g)=>(g.citations||0)-(l.citations||0));const a=o.slice(0,20),s=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((l,g)=>l+(g.citations||0),0),f=a.map((l,g)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:center;">${g+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};">${Ct(l.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};">${Ct(l.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${(l.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;">${r>0?(l.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${K};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${K};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${s.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${s.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${f}</tbody>
  </table>`}function An(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},s=Object.keys(o).filter(l=>o[l]!=null);if(!s.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},f=s.map(l=>{const g=o[l]||0,x=a[l]||0,u=g-x,d=u>0?"LG":u<0?"SS":"=",h=u>0?"#86EFAC":u<0?"#FCA5A5":"#FFFFFF",c=u>0?"#14532D":u<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${h};color:${c};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};font-weight:${l==="TTL"?"900":"600"};">${Ct(l)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${g.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${K};text-align:right;font-weight:700;">${u>0?"+":""}${u.toLocaleString("en-US")}</td>
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
  </table>`}function Tn(t,e){var f;if(!t||!t.length)return"";const o=((f=t[0])==null?void 0:f.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function s(l){return l>=80?"#D1FAE5":l>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(l=>{const g=(l.monthRate||0).toFixed(0),x=(l.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${K};background:#F5F5F5;">${Ct(l.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(l.monthRate)};">${g}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.monthActual||0).toLocaleString()} / ${(l.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(l.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.cumActual||0).toLocaleString()} / ${(l.annualGoal||0).toLocaleString()}</td>
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
  </table>`}function Ke(t,e,o,a,s={},r="ko",f=[],l=[],g={}){const{weeklyAll:x={},weeklyLabels:u=[],categoryStats:d=null}=g,h=wn(x,u),c=h.products.length?h.products:o,k=h.productsCnty.length?h.productsCnty:f,p=h.lastLabel,S=h.prevLabel,C=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",w=t.period||p||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Ct(C)} — ${Ct(w)}</title>
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
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${K};">${Ct(C)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${K};">${Ct(w)} · ${p?`${Ct(p)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${Cn(c,r,p,S)}
    ${Sn(k,r,p,S)}
    ${kn(k,r,c,p)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${K};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Fn(a,r)}
    ${En(l,r)}
    ${An(s,r)}

    ${Tn(d,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${K};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const yt="#CF0652",$="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Bn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,ke={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Bn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Ln={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},$n=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Rn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},In=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],jn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Pn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Do=3;function Dn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Do?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Mn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Do}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ie={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ne(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Nn(t){try{const e=await fetch(ne(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function _n(t,e,o){try{const a=await fetch(ne(t).snapshots,{method:"POST",headers:Ie,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const s=await a.json();return s.ok?s.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function On(t,e,o){try{const a=await fetch(`${ne(t).snapshots}/${e}`,{method:"PUT",headers:Ie,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const s=await a.json();return s.ok?s.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function zn(t,e){try{const o=await fetch(`${ne(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function St(t,e,o="ko",a=""){try{const s=await fetch("/api/generate-insight",{method:"POST",headers:Ie,body:JSON.stringify({type:t,data:e,lang:o,rules:a})});if(!s.ok){const f=await s.json().catch(()=>({}));throw new Error(f.error||`HTTP ${s.status}`)}const r=await s.json();if(!r.ok)throw new Error(r.error||"AI 생성 실패");return r.insight}catch(s){throw console.error("[API] generateAIInsight failed:",s.message),s}}async function Te(t){try{const e=await fetch(ne(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function po(t){try{const e=await fetch(ne(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Gn(t,e,o={}){const{includePromptList:a=!1,includeReadability:s=!1}=o,[r,f]=await Promise.all([Te("dashboard").catch(()=>null),Te("visibility").catch(()=>null)]),l={...r||{},...f||{}};if(r&&Object.keys(r).forEach(E=>{l[E]==null&&r[E]!=null&&(l[E]=r[E])}),f!=null&&f.meta&&(r!=null&&r.meta)&&(l.meta={...r.meta||{},...f.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const g=l.meta||{},x=l.total||{},d=(l.productsPartial||l.products||[]).map(E=>{var F;const M=E.weekly||((F=l.weeklyMap)==null?void 0:F[E.id])||[],b=E.vsComp>0?E.score/E.vsComp*100:100;return{...E,weekly:M,monthly:E.monthly||[],compRatio:E.compRatio||Math.round(b),status:E.status||(b>=100?"lead":b>=80?"behind":"critical")}}),h=l.citations||[],c=l.dotcom||{},k=l.productsCnty||[],p=l.citationsCnty||[],S=l.weeklyLabels||null,C=l.weeklyAll||{},w=l.citationsByCnty||{},B=l.dotcomByCnty||{},R=e(d,k,h,p,"ko"),L=e(d,k,h,p,"en"),v={appendixPrompts:l.appendixPrompts||[],weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},I={monthlyVis:l.monthlyVis||[],includePromptList:a,includeReadability:s},O=t(g,x,R.products,R.citations,c,"ko",R.productsCnty,R.citationsCnty,S,C,w,B,I,v),N=t({...g,title:g.title||"GEO KPI Dashboard"},x,L.products,L.citations,c,"en",L.productsCnty,L.citationsCnty,S,C,w,B,I,v),m=`${g.period||""} ${g.title||"KPI Dashboard"}`.trim(),T=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:m,htmlKo:O,htmlEn:N})})).json();if(!T.ok)throw new Error(T.error||"게시 실패");return T}async function uo(t,e){try{const o=await fetch(ne(t).syncData,{method:"POST",headers:Ie,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Hn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},_e={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},fo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Ae(t,e,o,a,s){return s!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(r=>({...r,kr:r.en||_e[r.kr]||r.kr,compName:r.compNameEn||fo[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||Hn[r.country]||r.country,product:r.productEn||_e[r.product]||r.product,compName:r.compNameEn||fo[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||_e[r.category]||r.category})),citationsCnty:a.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function Un(t,{from:e="ko",to:o="en"}={}){const s=[];for(let r=0;r<t.length;r+=20){const f=t.slice(r,r+20),l=await Promise.all(f.map(async g=>{if(!g||!g.trim())return g;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(g)}`,u=await fetch(x);if(!u.ok)throw new Error(`번역 실패 (${u.status})`);return(await u.json())[0].map(h=>h[0]).join("")}));s.push(...l)}return s}const Se=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Wn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Fe(t){const e=Wn.indexOf(t);return e>=0?e:999}function Mo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Vn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Mo(o)]=o)}),e}function ho(t,e){var d,h,c,k;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(c=(h=t==null?void 0:t._dashboard)==null?void 0:h.categoryStats)!=null&&c.length?[...t._dashboard.categoryStats].sort((p,S)=>Fe(p.category)-Fe(S.category)):null;const o=t.quantitativeGoals.rows,a=Vn((k=t.quantitativeResults)==null?void 0:k.rows),r=new Date().getMonth()+1-1,f=r>=3&&r<=12?`${r}월`:"3월";let l=e||t._month||f,g=Se.indexOf(l);g<0&&(l="3월",g=0);const x=[...new Set(o.map(p=>p.taskCategory).filter(Boolean))],u=g>0?Se[g-1]:null;return x.map(p=>{const S=o.filter(m=>m.taskCategory===p);let C=0,w=0,B=0,R=0,L=0,v=0;S.forEach(m=>{var b,F,_,P,j;const A=Mo(m),T=a[A]||{},E=typeof((b=m.monthly)==null?void 0:b[l])=="number"?m.monthly[l]:0,M=typeof((F=T.monthly)==null?void 0:F[l])=="number"?T.monthly[l]:0;if(w+=E,C+=M,u){const H=typeof((_=m.monthly)==null?void 0:_[u])=="number"?m.monthly[u]:0,rt=typeof((P=T.monthly)==null?void 0:P[u])=="number"?T.monthly[u]:0;v+=H,L+=rt}for(let H=0;H<=g;H++){const rt=Se[H];typeof((j=T.monthly)==null?void 0:j[rt])=="number"&&(B+=T.monthly[rt])}Se.forEach(H=>{var rt;typeof((rt=m.monthly)==null?void 0:rt[H])=="number"&&(R+=m.monthly[H])})});const I=w>0?Math.round(C/w*1e3)/10:0,O=v>0?Math.round(L/v*1e3)/10:0,N=R>0?Math.round(B/R*1e3)/10:0;return{category:p,taskCount:S.length,targetMonth:l,monthRate:I,prevMonthRate:O,prevMonth:u,progressRate:N,monthActual:C,monthGoal:w,cumActual:B,annualGoal:R}}).sort((p,S)=>Fe(p.category)-Fe(S.category))}function Kn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function qn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function No(){const t=await He(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const je={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},me={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Jn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},_o={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Oo=new Set(Object.values(je)),go=[...new Set(Object.values(_o))].filter(t=>!Oo.has(t));go.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:go,validCodes:[...Oo]});function mo(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Rt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function Yn(t,e){return Array.isArray(t)?t.length===0?(mo(e,"invalid input: empty rows",{len:0}),!1):!0:(mo(e,"invalid input: not an array",{type:typeof t}),!1)}function Pe(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const a=o.map(s=>String(s??"").trim().toLowerCase());return e.every(s=>a.some(r=>s instanceof RegExp?s.test(r):r===String(s).toLowerCase()))})}const wt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},yo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],bo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Xn(t,e,o,a,s={}){const r=await No(),f=r.utils.book_new(),l=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);l["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(f,l,"meta");const g=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);g["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(f,g,"total");const x=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(p=>[p.id,p.bu,p.kr,p.score,p.prev,p.vsComp,p.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(f,x,"products");const u=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(p=>[p.id,p.kr,...p.weekly])]);u["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(f,u,"weekly");const d=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(p=>[p.rank,p.source,p.category,p.score,p.delta,p.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(f,d,"citations");const h=(s==null?void 0:s.lg)||{},c=(s==null?void 0:s.samsung)||{},k=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...yo.map(p=>`LG_${p}`),...bo.map(p=>`Samsung_${p}`)],[...yo.map(p=>h[p]??0),...bo.map(p=>c[p]??0)]]);k["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(f,k,"dotcom"),r.writeFile(f,"GEO_Newsletter_템플릿.xlsx")}function Gt(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),s=parseFloat(a)||0;return o?+s.toFixed(2):Math.abs(s)<=1&&s!==0?+(s*100).toFixed(2):+s.toFixed(2)}function Ee(t){return t==null||String(t).trim()===""?null:Gt(t)}function qt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Jt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Zn={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function Qn(t){const e=Jt(t);return Zn[e]||e}function de(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,s=0;const r=e.match(/(\d{4})/);if(r)s=parseInt(r[1]);else{const l=e.match(/(\d{2})년/);if(l)s=2e3+parseInt(l[1]);else{const g=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);g&&(s=2e3+parseInt(g[1]))}}const f=e.match(/(\d{1,2})월/);if(f)a=parseInt(f[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)a=o[l[1].toLowerCase()];else{const g=e.match(/\d{4}[-\/](\d{1,2})/);g&&(a=parseInt(g[1]))}}return s?s*12+a:a}function tr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],a=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(r=>{if(!r[0]||String(r[0]).startsWith("[")||String(r[0]).startsWith("※")||r[0]==="key")return;const f=String(r[0]).trim(),l=r[1]??"";if(o.includes(f))e[f]=parseInt(l)||(f==="titleFontSize"?24:10);else if(a.includes(f)){const g=String(l).trim().toLowerCase();e[f]=g==="y"||g==="yes"||g==="true"||g==="1"}else e[f]=String(l)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(r=>{e[r]=!1}),e.weeklyLabels){const r=String(e.weeklyLabels).split(",").map(f=>f.trim()).filter(Boolean);r.length?e.weeklyLabels=r:delete e.weeklyLabels}if(e.period){const r={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},f=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);f&&(e.period=`${r[f[2]]||f[2]} ${f[1]}`)}if(e.dateLine){const r=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(r){const f=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${f[parseInt(r[2])]||r[2]} ${r[1]}`}}return Object.keys(e).length?{meta:e}:{}}function er(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let s=!1;if(t.forEach(E=>{if(!E[0]||String(E[0]).startsWith("[")||String(E[0]).startsWith("※")||E[0]==="key")return;const M=String(E[0]).trim();(o.includes(M)||e.includes(M))&&(s=!0,e.includes(M)?a[M]=parseInt(E[1])||0:a[M]=Gt(E[1]))}),s&&Object.keys(a).length>=2)return{total:a};const r=t.find(E=>E.some(M=>String(M||"").trim().toUpperCase()==="LG")),f=r?r.findIndex(E=>String(E||"").trim().toUpperCase()==="LG"):4,l=r?r.findIndex(E=>{const M=String(E||"").trim().toUpperCase();return M==="SAMSUNG"||M==="SAMSUMG"}):5,g=l>=0?l:f+1,x=r?r.findIndex(E=>/date/i.test(String(E||"").trim())):0,u=r?r.findIndex(E=>/countries|country/i.test(String(E||"").trim())):2,d=r?r.findIndex(E=>/divisions?/i.test(String(E||"").trim())):3,h=[];t.filter(E=>{const M=String(E[x>=0?x:0]||"").trim();return M&&!M.startsWith("[")&&!M.startsWith("※")&&!/^date$/i.test(M)&&!/^key$/i.test(M)}).forEach(E=>{const M=String(E[x>=0?x:0]||"").trim(),b=Jt(E[u>=0?u:2]),F=String(E[d>=0?d:3]||"").trim().toUpperCase(),_=Gt(E[f]),P=Gt(E[g]);M&&_>0&&h.push({date:M,country:b,division:F,lg:_,comp:P})});const k=h.filter(E=>(E.country==="TOTAL"||E.country==="TTL")&&(E.division==="TOTAL"||E.division==="TTL"||E.division===""));k.sort((E,M)=>de(E.date)-de(M.date));const p=k[k.length-1],S=k.length>=2?k[k.length-2]:null;if(!p){const E=t.find(_=>_.some(P=>String(P||"").trim().toUpperCase()==="TOTAL"));if(!E)return Rt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(_=>_==null?void 0:_.slice(0,6))});const M=Gt(E[f]),b=Gt(E[g]),F={total:{score:M,prev:M,vsComp:b,rank:M>=b?1:2,totalBrands:12}};return h.length&&(F.monthlyVis=h),F}const C=p.lg,w=p.comp,B=S?S.lg:C,R=p.date,L=S?S.date:null;function v(E){const M={};return h.filter(b=>b.date===E&&(b.country==="TOTAL"||b.country==="TTL")&&b.division&&b.division!=="TOTAL"&&b.division!=="TTL"&&b.division!=="").forEach(b=>{M[b.division]={lg:b.lg,comp:b.comp}}),M}const I=v(R),O=L?v(L):{};function N(E){const M={};return h.filter(b=>b.date===E&&b.country&&b.country!=="TOTAL"&&b.country!=="TTL"&&(b.division==="TOTAL"||b.division==="TTL"||b.division==="")).forEach(b=>{M[b.country]={lg:b.lg,comp:b.comp}}),M}const m=N(R),A=L?N(L):{},T={total:{score:C,prev:B,vsComp:w,rank:C>=w?1:2,totalBrands:12},...Object.keys(I).length?{buTotals:I}:{},...Object.keys(O).length?{buTotalsPrev:O}:{},...Object.keys(m).length?{countryTotals:m}:{},...Object.keys(A).length?{countryTotalsPrev:A}:{}};return R&&(T.derivedPeriod=R),h.length&&(T.monthlyVis=h),T}function or(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,a)=>console.log(`  row${a}: [${o.slice(0,8).map(s=>JSON.stringify(String(s||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const a=String(o[0]||"").trim().toLowerCase();return a==="div"||a==="division"||a==="divisions"});if(e<0){const o=t.findIndex(a=>a.some((s,r)=>r>=1&&String(s||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),xo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),xo(t,e)}function xo(t,e){const o=t[e],a=o.findIndex((u,d)=>d>=3&&String(u||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const s=[];for(let u=4;u<o.length;u++){const d=String(o[u]||"").trim();d&&d.toUpperCase()!=="LG"&&s.push({name:d,col:u})}const r=t.slice(e+1).filter(u=>{const d=String(u[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),f={},l={};r.forEach(u=>{const d=String(u[0]||"").trim(),h=String(u[1]||"").trim(),c=String(u[2]||"").trim(),k=Jt(u[2])||c,p=String(u[3]||"").trim(),S=Gt(u[a]),C=s.map(L=>({name:L.name,score:Gt(u[L.col])})).filter(L=>L.score>0),w=[...C].sort((L,v)=>v.score-L.score)[0]||{name:"",score:0},B=+(S-w.score).toFixed(2),R={LG:S};if(C.forEach(L=>{R[L.name]=L.score}),k==="TTL"||k==="TOTAL"){const L=me[p]||p.toLowerCase(),v=Jn[p]||p;f[L]||(f[L]=[]),f[L].push({id:L,bu:d,kr:v,category:p,date:h,score:S,vsComp:w.score,compName:w.name,allScores:R})}else{const L=`${p}|${k}`;l[L]||(l[L]=[]),l[L].push({product:p,country:k,date:h,score:S,compName:w.name,compScore:w.score,gap:B,allScores:R})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(f).join(", ")||"없음"} / 국가별: ${Object.keys(l).length}건`);const g=[];for(const[u,d]of Object.entries(f)){d.sort((p,S)=>de(p.date)-de(S.date));const h=d[d.length-1],c=d.length>=2?d[d.length-2].score:null;console.log(`[parseProductCnty] ${u}: dates=[${d.map(p=>p.date).join(",")}] score=${h.score} prev=${c} vsComp=${h.vsComp}`);const k=d.map(p=>({date:p.date,score:p.score,comp:p.vsComp,allScores:p.allScores}));g.push({...h,prev:c,monthlyScores:k})}const x=[];for(const u of Object.values(l)){u.sort((k,p)=>de(k.date)-de(p.date));const d=u[u.length-1],h=u.length>=2?u[u.length-2].score:null,c=u.map(k=>({date:k.date,score:k.score,compScore:k.compScore,compName:k.compName,allScores:k.allScores}));x.push({...d,prev:h,monthlyScores:c})}return{...g.length?{productsPartial:g}:{},...x.length?{productsCnty:x}:{}}}function zo(t,e=0,o){const a=o??t.length;for(let s=e;s<a;s++){const r=[];for(const f of t[s]||[]){const l=String(f||"").split(/\n/)[0].trim();/^W\d+/i.test(l)&&r.push(l.toUpperCase())}if(r.length>=2)return r}return null}const Oe={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function vo(t,e){var p;const o=e?Oe[e]||{}:{...Oe.MS,...Oe.ES};if(!Object.keys(o).length)return Rt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const a=t.findIndex(S=>S.some(C=>String(C||"").trim()in o));if(a<0)return Rt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const s=t[a],r=t.findIndex((S,C)=>C>a&&S.some(w=>String(w||"").trim()==="TTL")),f=r>0?r+1:Math.min(a+20,t.length);let l=-1,g=-1;for(let S=a+1;S<f;S++){const C=t[S];if(!C.some(R=>String(R||"").trim().toUpperCase()==="LG"))continue;if(g<0&&(g=S),C.some(R=>{const L=String(R||"").trim().toLowerCase().replace(/[\s_-]/g,"");return L==="nonbrand"||L==="nb"})){l=S;break}}const x=l>=0?l:g>=0?g:r;if(x<0)return Rt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:a,ttlRowIdx:r});const u=t[x],d=l>=0?"LG-NB":g>=0?"LG":"TTL",h={},c=Object.keys(o).map(S=>s.findIndex(C=>String(C||"").trim()===S)).filter(S=>S>=0).sort((S,C)=>S-C);for(const[S,C]of Object.entries(o)){const w=s.findIndex(L=>String(L||"").trim()===S);if(w<0)continue;const B=c.find(L=>L>w)||w+20,R=[];for(let L=w+1;L<B&&L<u.length;L++){const v=Gt(u[L]);v>0&&R.push(v)}R.length&&(h[C]=R)}if(!Object.keys(h).length)return Rt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:a,dataRowIdx:x,dataRowLabel:d});const k=zo(t,a,f)||((p=Object.values(h)[0])==null?void 0:p.map((S,C)=>`W${C+1}`))||[];return{weeklyMap:h,weeklyLabels:k}}function nr(t,e,o){for(const a of Object.values(t))for(const s of Object.values(a))for(const[r,f]of Object.entries(s))s[r]=f.slice(o);for(const[a,s]of Object.entries(e))e[a]=s.slice(o)}function ze(t,e){const o={};let a=[],s=-1;for(let v=0;v<Math.min(t.length,10);v++){const I=t[v];if(!I)continue;let O=0;for(let N=0;N<I.length;N++)/^w\d+$/i.test(String(I[N]||"").trim())&&O++;if(O>=2){s=v;break}}let r=t.findIndex(v=>{const I=v.slice(0,5).map(O=>String(O||"").trim().toLowerCase());return I.includes("category")||I.includes("product")});if(r<0&&s>=0&&(r=s),r<0&&(r=t.findIndex(v=>{let I=!1,O=0;for(let N=0;N<Math.min(v.length,10);N++){const m=String(v[N]||"").trim();m.toUpperCase()==="LG"?(I=!0,O++):m&&isNaN(parseFloat(m))&&O++}return I&&O>=3})),r<0)return vo(t,e);const f=t[r],l=r+1;let g=null;if(t[l]){const v=t[l].slice(4,8).map(I=>String(I||"").trim()).filter(Boolean);v.length&&v.every(I=>/^\d{1,2}\/\d{1,2}/.test(I)||/~/.test(I)||/^\(/.test(I))&&(g=l)}const x=g!=null?g+1:l,u=t.slice(x).filter(v=>v[0]!=null&&String(v[0]).trim()),d=f.findIndex(v=>{const I=String(v||"").trim().toLowerCase();return I==="category"||I==="product"}),h=f.findIndex(v=>{const I=String(v||"").trim().toLowerCase();return I==="country"||I==="county"}),c=f.findIndex(v=>String(v||"").trim().toLowerCase()==="brand"),k=f.findIndex(v=>String(v||"").trim().toUpperCase()==="LG"),p=[],S=s>=0?t[s]:f;for(let v=0;v<S.length;v++)/^w\d+$/i.test(String(S[v]||"").trim())&&p.push(v);if(!p.length)for(let v=0;v<f.length;v++){const I=String(f[v]||"").split(/\n/)[0].trim();/^w\d+/i.test(I)&&p.push(v)}a=p.map(v=>String(S[v]||"").trim().toUpperCase());let C=p.map((v,I)=>{const O=a[I]||`W${v}`;let N="";const m=g!=null?t[g]:s!==r&&s>=0?t[s+1]:null;if(m){const A=String(m[v]||"").trim();A&&/\d/.test(A)&&(N=A.startsWith("(")?A:`(${A})`)}return N?`${O}${N}`:O});console.log(`[parseWeekly:${e}] wLabelRow:${s} headerIdx:${r} dateRangeRow:${g} wCols:${p.length} labels:`,a.slice(0,5),"full:",C.slice(-2));function w(v){if(h<0)return!0;const I=String(v[h]||"").replace(/[()]/g,"").trim().toUpperCase();return I==="TOTAL"||I==="TTL"||I===""}const B=f.findIndex(v=>{const I=String(v||"").trim().toLowerCase().replace(/[\s_-]/g,"");return I==="b/nb"||I==="bnb"||I==="brand/nonbrand"});function R(v){if(B<0)return!0;const I=String(v[B]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return I==="nonbrand"||I==="nb"}const L={};if(c>=0){if(!p.length){const v=u.find(I=>String(I[c]||"").trim().toUpperCase()==="LG"&&R(I));if(v){for(let I=c+1;I<v.length;I++)if(String(v[I]||"").trim())p.push(I);else if(p.length)break;a=zo(t,0,r+1)||p.map((I,O)=>`W${O+1}`)}}u.forEach(v=>{if(!R(v))return;const I=String(v[c]||"").trim();if(!I)return;const O=String(v[d>=0?d:0]||"").trim();if(!O)return;const N=me[O]||O.toLowerCase(),m=h>=0?Jt(v[h]):"TOTAL",A=m==="TOTAL"||m==="TTL"||!m?"Total":m;L[N]||(L[N]={}),L[N][A]||(L[N][A]={}),L[N][A][I]=p.map(T=>Ee(v[T]))}),u.forEach(v=>{if(String(v[c]||"").trim().toUpperCase()!=="LG"||!R(v)||!w(v))return;const O=String(v[d>=0?d:0]||"").trim();O&&(o[me[O]||O.toLowerCase()]=p.map(N=>Ee(v[N])))})}else if(k>=0){const v=f.findIndex(N=>{const m=String(N||"").trim().toLowerCase();return m==="date"||m==="week"||m==="period"}),I={},O=[];u.forEach(N=>{if(!w(N))return;const m=String(N[d>=0?d:3]||"").trim();if(m){if(v>=0){const A=String(N[v]||"").trim();A&&!O.includes(A)&&O.push(A)}I[m]=I[m]||[],I[m].push(Ee(N[k]))}}),Object.entries(I).forEach(([N,m])=>{o[me[N]||N.toLowerCase()]=m}),O.length&&(a=O)}else p.length&&u.forEach(v=>{if(!w(v))return;const I=String(v[d>=0?d:0]||"").trim();I&&(o[me[I]||I.toLowerCase()]=p.map(O=>Ee(v[O])))});if(a.length>0){let v=a.length;for(const m of Object.values(L))for(const A of Object.values(m))for(const T of Object.values(A)){const E=T.findIndex(M=>M!=null);E>=0&&E<v&&(v=E)}for(const m of Object.values(o)){const A=m.findIndex(T=>T!=null);A>=0&&A<v&&(v=A)}const I=12,N=a.length-v>I?a.length-I:v;N>0&&N<a.length&&(a=a.slice(N),C=C.slice(N),nr(L,o,N))}if(Object.keys(o).length){const v={weeklyMap:o};return a.length&&(v.weeklyLabels=a),C.length&&(v.weeklyLabelsFull=C),Object.keys(L).length&&(v.weeklyAll=L),v}return vo(t,e)}function rr(t){const e=t.findIndex(B=>B.some(v=>{const I=String(v||"").trim().toLowerCase();return I.includes("page type")||I==="country"})?!B.some(v=>/^\[.*\]$/.test(String(v||"").trim())):!1);if(e<0)return Rt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(B=>B==null?void 0:B.slice(0,6))});const o=t[e],a=[];for(let B=2;B<o.length;B++){const R=String(o[B]||"").trim();if(/\bLG\b/i.test(R)){const L=B+1;L<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[L]||""))&&a.push({lg:B,ss:L})}}a.length||a.push({lg:2,ss:3});const s=t.slice(e+1).filter(B=>B[0]!=null&&String(B[0]).trim());let r=a[0];for(let B=a.length-1;B>=0;B--)if(s.some(R=>qt(R[a[B].lg])>0)){r=a[B];break}if(!s.some(B=>qt(B[r.lg])>0)){for(let B=Math.min(r.lg,o.length)-1;B>=2;B--)if(s.some(R=>qt(R[B])>0)){r={lg:B-1,ss:B};break}}const f={},l={},g={},x={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},u=new Set,d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=a.map(B=>{const R=String(o[B.lg]||"").trim(),L=R.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return L?L[1].charAt(0).toUpperCase()+L[1].slice(1).toLowerCase():R.replace(/\s*LG\s*/i,"").trim()}),c={};s.forEach(B=>{const R=Jt(B[0]),L=String(B[1]||"").replace(/[()]/g,"").trim();let v=/page total|^ttl$/i.test(L)?"TTL":L;v.toLowerCase()==="microsite"&&(v="Microsites");const I=x[R]||R.toUpperCase();u.add(I);const O=qt(B[r.lg]),N=qt(B[r.ss]);I==="TTL"?(f[v]=(f[v]||0)+O,l[v]=(l[v]||0)+N):(g[I]||(g[I]={lg:{},samsung:{}}),g[I].lg[v]=(g[I].lg[v]||0)+O,g[I].samsung[v]=(g[I].samsung[v]||0)+N),I==="TTL"&&(c[v]||(c[v]={}),a.forEach((m,A)=>{var M,b;const T=qt(B[m.lg]),E=qt(B[m.ss]);if(T>0||E>0){const F=h[A]||`M${A+1}`;c[v][F]={lg:(((M=c[v][F])==null?void 0:M.lg)||0)+T,samsung:(((b=c[v][F])==null?void 0:b.samsung)||0)+E}}}))});const k=new Set;Object.values(c).forEach(B=>Object.keys(B).forEach(R=>k.add(R)));const p=d.filter(B=>k.has(B)),S={},C={};a.forEach((B,R)=>{const L=h[R];if(!L)return;const v={},I={};s.forEach(O=>{const N=Jt(O[0]),m=String(O[1]||"").replace(/[()]/g,"").trim();let A=/page total|^ttl$/i.test(m)?"TTL":m;A.toLowerCase()==="microsite"&&(A="Microsites");const T=x[N]||N.toUpperCase(),E=qt(O[B.lg]),M=qt(O[B.ss]);E<=0&&M<=0||(T==="TTL"?(E>0&&(v[A]=(v[A]||0)+E),M>0&&(I[A]=(I[A]||0)+M)):(C[L]||(C[L]={}),C[L][T]||(C[L][T]={lg:{},samsung:{}}),E>0&&(C[L][T].lg[A]=(C[L][T].lg[A]||0)+E),M>0&&(C[L][T].samsung[A]=(C[L][T].samsung[A]||0)+M)))}),Object.keys(v).length&&(S[L]={lg:v,samsung:I})}),Object.keys(C).forEach(B=>{Object.keys(C[B]).forEach(R=>{const L=C[B][R];Object.values(L.lg).some(I=>I>0)||Object.values(L.samsung).some(I=>I>0)||delete C[B][R]}),Object.keys(C[B]).length||delete C[B]});const w={};return(f.TTL||Object.keys(f).length)&&(w.dotcom={lg:f,samsung:l,byMonth:S,byCntyByMonth:C}),Object.keys(g).length&&(w.dotcomByCnty=g),Object.keys(c).length&&p.length&&(w.dotcomTrend=c,w.dotcomTrendMonths=p),w}function ir(t){const e=t.findIndex(b=>b.some(P=>{const j=String(P||"").trim().toLowerCase();return j==="channel"||j==="country"})?!b.some(P=>/^\[.*\]$/.test(String(P||"").trim())):!1);e<0&&Rt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(b=>b==null?void 0:b.slice(0,6))});const o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let s=-1,r=-1,f=-1;for(let b=0;b<o.length;b++){const F=String(o[b]||"").trim().toLowerCase();F==="country"&&s<0&&(s=b),F==="channel"&&r<0&&(r=b),F==="prd"&&f<0&&(f=b)}const l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function g(b){const F=String(b||"").trim().toLowerCase();if(!F)return null;const _=F.match(/^(\d{1,2})월/);if(_){const j=parseInt(_[1]);if(j>=1&&j<=12)return l[j-1]}const P=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?P[1].charAt(0).toUpperCase()+P[1].slice(1).toLowerCase():null}const x=[],u=new Set;for(let b=0;b<o.length;b++){const F=g(o[b]);F&&!u.has(b)&&(x.push({col:b,label:F}),u.add(b))}if(e>0){const b=t[e-1];if(b)for(let F=0;F<b.length;F++){const _=g(b[F]);_&&!u.has(F)&&(x.push({col:F,label:_}),u.add(F))}}let d=2;if(x.length>0)d=Math.min(...x.map(b=>b.col));else if(s>=0&&r>=0)d=Math.max(s,r,f)+1;else{const b=t[a];b&&!String(b[0]||"").trim()?(s=1,r=2,d=3):(s=0,r=1,d=2)}if(s<0||r<0){const b=t[a],F=b&&!String(b[0]||"").trim()?1:0;s<0&&(s=F),r<0&&(r=F+1)}if(x.length>0){x.sort((P,j)=>P.col-j.col);const b=x[0],F=l.indexOf(b.label),_=new Set([s,r,f].filter(P=>P>=0));if(F>0&&b.col>d){let P=F-1;for(let j=b.col-1;j>=d&&P>=0;j--){if(u.has(j)||_.has(j))continue;const H=String(o[j]||"").trim(),rt=e>0?String((t[e-1]||[])[j]||"").trim():"";H||rt||(x.push({col:j,label:l[P]}),u.add(j),P--)}}}x.sort((b,F)=>l.indexOf(b.label)-l.indexOf(F.label));const h=t.slice(a).filter(b=>b.some(F=>F!=null&&String(F).trim())),c=[],k={},p={},S={},C={},w=new Set,B={};h.forEach(b=>{const F=Jt(b[s]),_=String(b[r]||"").replace(/[()]/g,"").trim(),P=f>=0?String(b[f]||"").trim():"";if(!F||!_||_.toLowerCase()==="total")return;w.add(F);const j={};if(x.forEach(({col:gt,label:pt})=>{const at=qt(b[gt]);at>0&&(j[pt]=at)}),Object.keys(j).length===0)return;const H=P.toUpperCase(),rt=!P||H==="TTL"||H==="TOTAL",dt=F==="TTL"||F==="TOTAL"?"TTL":F;B[dt]||(B[dt]={}),B[dt][_]||(B[dt][_]={ttl:null,prds:[]}),rt?B[dt][_].ttl=j:B[dt][_].prds.push({prd:P,monthScores:j})});const R=b=>{for(let F=x.length-1;F>=0;F--){const _=b[x[F].label];if(_>0)return _}return 0},L=b=>b.ttl?{...b.ttl}:{},v={};Object.entries(B).forEach(([b,F])=>{b!=="TTL"&&Object.entries(F).forEach(([_,P])=>{const j=L(P);Object.keys(j).length!==0&&(v[b]||(v[b]={}),v[b][_]=j)})});const I=B.TTL||{};Object.entries(I).forEach(([b,F])=>{const _=L(F),P=R(_);P>0&&(c.push({source:b,category:"",score:P,delta:0,ratio:0,monthScores:_}),k[b]=_),F.prds.forEach(({prd:j,monthScores:H})=>{const rt=R(H);rt>0&&(S[j]||(S[j]=[]),S[j].push({source:b,category:"",score:rt,delta:0,ratio:0,monthScores:H}))})}),Object.entries(B).forEach(([b,F])=>{b!=="TTL"&&Object.entries(F).forEach(([_,P])=>{const j=L(P),H=R(j);H>0&&(p[b]||(p[b]=[]),p[b].push({source:_,category:"",score:H,delta:0,ratio:0,monthScores:j,prd:""})),P.prds.forEach(({prd:rt,monthScores:dt})=>{const gt=R(dt);if(gt<=0)return;p[b]||(p[b]=[]),p[b].push({source:_,category:"",score:gt,delta:0,ratio:0,monthScores:dt,prd:rt}),C[rt]||(C[rt]={}),C[rt][_]||(C[rt][_]={source:_,category:"",score:0,delta:0,ratio:0,monthScores:{}});const pt=C[rt][_];pt.score+=gt,Object.entries(dt).forEach(([at,xt])=>{pt.monthScores[at]=(pt.monthScores[at]||0)+xt})})})});const O={};new Set([...Object.keys(S),...Object.keys(C)]).forEach(b=>{let F=S[b];(!F||!F.length)&&(F=Object.values(C[b]||{})),F&&F.length&&(O[b]=F)});const m=c.reduce((b,F)=>b+F.score,0);c.sort((b,F)=>F.score-b.score),c.forEach((b,F)=>{b.rank=F+1,b.ratio=m>0?+(b.score/m*100).toFixed(1):0});for(const[b,F]of Object.entries(p)){const _=F.reduce((P,j)=>P+j.score,0);F.sort((P,j)=>j.score-P.score),F.forEach((P,j)=>{P.rank=j+1,P.ratio=_>0?+(P.score/_*100).toFixed(1):0})}for(const[b,F]of Object.entries(O)){const _=F.reduce((P,j)=>P+j.score,0);F.sort((P,j)=>j.score-P.score),F.forEach((P,j)=>{P.rank=j+1,P.ratio=_>0?+(P.score/_*100).toFixed(1):0})}const A=x.map(b=>b.label).filter(b=>Object.values(k).some(F=>F[b]>0)),T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let E=null;if(A.length>0){const b={};Object.values(k).forEach(P=>{Object.entries(P).forEach(([j,H])=>{H>0&&(b[j]=(b[j]||0)+1)})});let F=A[A.length-1];if(A.length>=2){const P=b[F]||0,j=A[A.length-2],H=b[j]||0;H>0&&P<H*.5&&(F=j)}const _=T.findIndex(P=>F.toLowerCase().startsWith(P.toLowerCase()));_>=0&&(E=`${T[_]} ${new Date().getFullYear()}`)}const M={};return c.length>0&&(M.citations=c),Object.keys(p).length>0&&(M.citationsByCnty=p),Object.keys(O).length>0&&(M.citationsByPrd=O),Object.keys(k).length>0&&(M.citTouchPointsTrend=k,M.citTrendMonths=A),Object.keys(v).length>0&&(M.citTouchPointsTrendByCnty=v),E&&(M.citDerivedPeriod=E),M}function ar(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let s=null,r=0,f=-1,l=-1,g=-1,x=-1,u=-1,d=4;for(let m=0;m<Math.min(t.length,10);m++){const A=t[m];if(!A)continue;const T=A.some(F=>/^no$/i.test(String(F||"").trim())),E=A.some(F=>/^region$/i.test(String(F||"").trim())),M=A.some(F=>/domain|domian/i.test(String(F||"").trim())),b=A.some(F=>/^prd$/i.test(String(F||"").trim()));if(T||E||M||b){s=A,r=m+1;for(let F=0;F<A.length;F++){const _=String(A[F]||"").trim().toLowerCase();_==="prd"&&u<0&&(u=F),_==="no"&&f<0&&(f=F),_==="region"&&l<0&&(l=F),(_==="domain"||_==="domian")&&g<0&&(g=F),_==="type"&&x<0&&(x=F)}break}(String(A[0]||"").trim().startsWith("[")||!String(A[0]||"").trim())&&(r=m+1)}s||Rt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const h=f>=0||l>=0||u>=0;if(h)l<0&&(l=f>=0?f+1:u>=0?u+2:1),g<0&&(g=l+1),x<0&&(x=g+1),d=Math.max(g,x)+1;else if(g>=0)x=g+1,d=g+2;else{for(let m=r;m<Math.min(t.length,r+5);m++){const A=t[m];if(A){for(let T=0;T<Math.min(A.length,6);T++){const E=String(A[T]||"").trim();if(E.includes(".")&&E.length>3&&!a.test(E)){g=T,x=T+1,d=T+2;break}}if(g>=0)break}}g<0&&(g=0,x=1,d=2)}const c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=m=>{const A=String(m||"").trim().toLowerCase();if(!A)return null;const T=A.match(/^(\d{1,2})월/);if(T){const M=parseInt(T[1]);if(M>=1&&M<=12)return c[M-1]}const E=A.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():null},p=[];if(s)for(let m=d;m<s.length;m++){const A=k(s[m]);A&&p.push({col:m,label:A})}const S=m=>/^(type|domain[_ ]type)$/i.test(String(m||"").trim()),C=m=>/^(domain|domian)$/i.test(String(m||"").trim()),w=m=>/^region$/i.test(String(m||"").trim()),B=[];s&&p.forEach(({col:m,label:A})=>{const T=m-1,E=m-2,M=m-3;M<0||S(s[T])&&C(s[E])&&w(s[M])&&B.push({regionCol:M,domainCol:E,typeCol:T,monthCol:m,label:A})});const R=[],L={},v={};let I="TTL";const O=m=>{let A=String(m||"").trim();if(!A)return"";const T=A.match(/^\[([^\]]+)\]/);T&&(A=T[1].trim()),A=A.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const E=A.indexOf("/");return E>=0&&(A=A.slice(0,E)),A};if(B.length>=2){const m={};for(let T=r;T<t.length;T++){const E=t[T];if(!E)continue;const M=u>=0?String(E[u]||"").trim():"";B.forEach(b=>{const F=O(E[b.domainCol]);if(!F||!F.includes("."))return;const _=String(E[b.monthCol]||"").replace(/,/g,"").trim(),P=parseFloat(_);if(isNaN(P)||P<=0)return;const j=String(E[b.regionCol]||"").trim().toUpperCase(),H=e[j]||j||"TTL",rt=String(E[b.typeCol]||"").trim(),dt=`${H}|${F}|${rt}|${M}`;m[dt]||(m[dt]={cnty:H,domain:F,type:rt,prd:M,monthScores:{}}),m[dt].monthScores[b.label]=(m[dt].monthScores[b.label]||0)+P})}Object.values(m).forEach(T=>{let E=0;for(let _=p.length-1;_>=0;_--){const P=T.monthScores[p[_].label];if(P>0){E=P;break}}if(E<=0)return;v[T.cnty]=(v[T.cnty]||0)+1,R.push({cnty:T.cnty,rank:v[T.cnty],domain:T.domain,type:T.type,citations:E,monthScores:T.monthScores,prd:T.prd});const M=`${T.cnty}|${T.domain}`,b=!T.prd||/^(ttl|total)$/i.test(T.prd);L[M]||(L[M]={cnty:T.cnty,domain:T.domain,type:T.type,months:{},_hasTtl:!1});const F=L[M];b?(F.type=T.type||F.type,F._hasTtl=!0,Object.entries(T.monthScores).forEach(([_,P])=>{P>0&&(F.months[_]=P)})):F._hasTtl||Object.entries(T.monthScores).forEach(([_,P])=>{P>0&&!F.months[_]&&(F.months[_]=P)})}),Object.values(L).forEach(T=>{delete T._hasTtl});const A={};R.forEach(T=>{A[T.cnty]||(A[T.cnty]=[]),A[T.cnty].push(T)}),Object.values(A).forEach(T=>{T.sort((E,M)=>M.citations-E.citations),T.forEach((E,M)=>{E.rank=M+1})})}else for(let m=r;m<t.length;m++){const A=t[m];if(!A)continue;const T=String(A[g]||"").trim(),E=String(A[x]||"").trim(),M=u>=0?String(A[u]||"").trim():"";if(!h&&(!T||!T.includes("."))){const P=String(A[g]||"").trim().toUpperCase(),j=e[P]||(o.includes(P)?P:null);j&&(!E||E==="")&&(I=j);continue}if(!T||!T.includes("."))continue;let b="TTL";if(h&&l>=0){const P=String(A[l]||"").trim().toUpperCase();b=e[P]||P}else h||(b=I);let F=0;if(p.length>0)for(let P=p.length-1;P>=0;P--){const j=String(A[p[P].col]||"").replace(/,/g,"").trim(),H=parseFloat(j);if(!isNaN(H)&&H>0){F=H;break}}else for(let P=A.length-1;P>=d;P--){const j=String(A[P]||"").replace(/,/g,"").trim();if(!j)continue;const H=parseFloat(j);if(!isNaN(H)&&H>0){F=H;break}}if(p.length>0){const P={};if(p.forEach(({col:j,label:H})=>{const rt=String(A[j]||"").replace(/,/g,"").trim(),dt=parseFloat(rt);!isNaN(dt)&&dt>0&&(P[H]=dt)}),Object.keys(P).length>0){const j=`${b}|${T}`;L[j]={cnty:b,domain:T,type:E,months:P}}}const _={};p.length>0&&p.forEach(({col:P,label:j})=>{const H=String(A[P]||"").replace(/,/g,"").trim(),rt=parseFloat(H);!isNaN(rt)&&rt>0&&(_[j]=rt)}),F>0&&(v[b]=(v[b]||0)+1,R.push({cnty:b,rank:v[b],domain:T,type:E,citations:F,monthScores:_,prd:M}))}const N={};if(R.length>0&&(N.citationsCnty=R),Object.keys(L).length>0){N.citDomainTrend=L;const m=p.map(A=>A.label).filter(A=>Object.values(L).some(T=>T.months[A]>0));N.citDomainMonths=m}return N}function wo(t,e){const o=Pe(t,[/^type$/,/^(county|country)$/]);if(o<0)return Rt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const a=t[o];let s=-1,r=-1,f=-1,l=-1,g=4;for(let w=0;w<a.length;w++){const B=String(a[w]||"").trim().toLowerCase();B==="type"&&s<0&&(s=w),(B==="county"||B==="country")&&r<0&&(r=w),(B==="topic"||B==="topoc")&&f<0&&(f=w),B==="brand"&&l<0&&(l=w)}g=Math.max(s,r,f,l)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,u=/^w\d+/i,d=[],h=[o];for(let w=0;w<=o;w++)w!==o&&h.push(w);for(const w of h){if(d.length>0)break;const B=t[w];if(B)for(let R=g;R<B.length;R++){const L=String(B[R]||"").split(/\n/)[0].trim();L&&(x.test(L)||u.test(L))&&d.push({col:R,label:L})}}const c=t.slice(o+1),k=[];c.forEach(w=>{if(!w)return;const B=String(w[s]||"").trim(),R=Jt(w[r]),L=String(w[f]||"").trim(),v=String(w[l]||"").trim();if(!L||!v)return;const I={};let O=0;d.forEach(({col:N,label:m})=>{const A=Gt(w[N]);A>0&&(I[m]=A,O=A)}),(Object.keys(I).length>0||L)&&k.push({type:B,country:R,topic:L,brand:v,scores:I,latestScore:O})});const p=e==="weekly"?"weeklyPR":"monthlyPR",S=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",C={};return k.length>0&&(C[p]=k),d.length>0&&(C[S]=d.map(w=>w.label)),C}function Co(t,e){const o=t.findIndex(C=>C?C.some(w=>/steakholders|stakeholders/i.test(String(w||"").trim()))||C.some(w=>/^type$/i.test(String(w||"").trim()))&&C.some(w=>/topoc|topic/i.test(String(w||"").trim())):!1);if(o<0)return Rt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const a=t[o];let s=-1,r=-1,f=-1,l=-1,g=4;for(let C=0;C<a.length;C++){const w=String(a[C]||"").trim().toLowerCase();(w==="steakholders"||w==="stakeholders")&&s<0&&(s=C),w==="type"&&r<0&&(r=C),(w==="country"||w==="county")&&f<0&&(f=C),(w==="topoc"||w==="topic")&&l<0&&(l=C)}g=Math.max(s,r,f,l)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,u=/^w\d+/i,d=[];for(let C=g;C<a.length;C++){const w=String(a[C]||"").split(/\n/)[0].trim();w&&(x.test(w)||u.test(w))&&d.push({col:C,label:w})}const h=t.slice(o+1),c=[];h.forEach(C=>{if(!C)return;const w=String(C[s]||"").trim(),B=String(C[r]||"").trim(),R=Jt(C[f]),L=String(C[l]||"").trim();if(!L||!w)return;const v={};let I=0;d.forEach(({col:O,label:N})=>{const m=Gt(C[O]);m>0&&(v[N]=m,I=m)}),c.push({stakeholder:w,type:B,country:R,topic:L,scores:v,latestScore:I})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",p=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",S={};return c.length>0&&(S[k]=c),d.length>0&&(S[p]=d.map(C=>C.label)),S}function sr(t){const e=Pe(t,[/^prompts?$/,/^country$/]);if(e<0)return Rt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(l=>l==null?void 0:l.slice(0,6))});const o=t[e],a={},s=["country","prompts","division","category","launched","branded","cej","topic"];for(let l=0;l<o.length;l++){const g=String(o[l]||"").trim().toLowerCase();s.includes(g)&&!a[g]&&(a[g]=l)}const r=t.slice(e+1),f=[];return r.forEach(l=>{if(!l)return;const g=String(l[a.prompts]||"").trim();g&&f.push({country:Jt(l[a.country]),prompt:g,division:String(l[a.division]||"").trim(),category:String(l[a.category]||"").trim(),launched:String(l[a.launched]||"").trim(),branded:String(l[a.branded]||"").trim(),cej:String(l[a.cej]||"").trim(),topic:String(l[a.topic]||"").trim()})}),f.length>0?{appendixPrompts:f}:{}}const te={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function lr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const e=Pe(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,h)=>console.log(`  row${h}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const o=t[e];let a=-1,s=-1,r=-1;for(let d=0;d<o.length;d++){const h=String(o[d]||"").trim().toLowerCase();a<0&&(h==="country"||h==="county")&&(a=d),s<0&&(h==="category"||h==="product"||h==="제품"||h==="카테고리")&&(s=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(h)&&(r=d)}if(a<0||s<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:s,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(te).length}건`),{unlaunchedMap:{...te}};const f=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),l={...te};let g=0,x=0,u=0;return t.slice(e+1).forEach((d,h)=>{const c=e+1+h;try{if(!d){u++;return}const k=String(d[r]||"").trim();if(!k){u++;return}g++;const p=k.toLowerCase().replace(/\s+/g," ");if(!f.has(p)&&!f.has(p.replace(/\s/g,"")))return;const S=Qn(d[a]),C=String(d[s]||"").trim();if(!S||!C){console.warn("[parseUnlaunched] row skipped",{rowIdx:c,raw:{country:d[a],category:d[s],status:d[r]},parsed:{country:S,rawCategory:C}}),u++;return}const w=C.toUpperCase(),B=_o[w]||w;l[`${S}|${B}`]=!0,B!==w&&(l[`${S}|${w}`]=!0),x++}catch(k){let p;try{p={country:d==null?void 0:d[a],category:d==null?void 0:d[s],status:d==null?void 0:d[r]}}catch{p=d}console.warn("[parseUnlaunched] row error",{rowIdx:c,raw:p,error:k==null?void 0:k.message}),u++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(te).length}건 + skip ${u}건 / 총행 ${g} / 최종키 ${Object.keys(l).length}개`),{unlaunchedMap:l}}function cr(t){const e=Pe(t,[/^bu$/,/topic/]);if(e<0)return Rt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(u=>u==null?void 0:u.slice(0,6))});const o=t[e];let a=-1,s=-1,r=-1,f=-1,l=-1;for(let u=0;u<o.length;u++){const d=String(o[u]||"").trim().toLowerCase();a<0&&d==="bu"&&(a=u),s<0&&d.includes("topic")&&d.includes("대시보드")&&(s=u),r<0&&(d==="explanation"||d==="설명")&&(r=u),f<0&&d.includes("기존")&&(f=u),l<0&&d.includes("topic")&&d.includes("row")&&(l=u)}s<0&&(s=1),r<0&&(r=2);const g=[];let x="";return t.slice(e+1).forEach(u=>{if(!u)return;const d=String(u[a]||"").trim();d&&(x=d);const h=String(u[s]||"").trim();if(!h)return;const c=String(u[r]||"").trim(),k=f>=0?String(u[f]||"").trim():"",p=l>=0?String(u[l]||"").trim():"";g.push({bu:x,topic:h,explanation:c,oldTopic:k,topicRow:p})}),g.length>0?{prTopicList:g}:{}}function dr(t,e){return Yn(e,`parseSheetRows:${t}`)?t===wt.meta?tr(e):t===wt.visSummary?er(e):t===wt.productMS||t===wt.productHS||t===wt.productES?or(e):t===wt.weeklyMS?ze(e,"MS"):t===wt.weeklyHS?ze(e,"HS"):t===wt.weeklyES?ze(e,"ES"):t===wt.monthlyPR?wo(e,"monthly"):t===wt.weeklyPR?wo(e,"weekly"):t===wt.monthlyBrandPrompt?Co(e,"monthly"):t===wt.weeklyBrandPrompt?Co(e,"weekly"):t===wt.citPageType?rr(e):t===wt.citTouchPoints?ir(e):t===wt.citDomain?ar(e):t===wt.appendix?sr(e):t===wt.unlaunched?lr(e):t===wt.prTopicList?cr(e):Rt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(wt)}):{}}function pr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function ur(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,s=await fetch(a,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!s.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${s.status}).`);const r=await s.text(),f=await No(),l=f.read(r,{type:"string"}),g=l.Sheets[l.SheetNames[0]];return f.utils.sheet_to_json(g,{header:1,defval:""})}async function fr(t,e){var r,f;const o=Object.values(wt),a={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const s=await Promise.allSettled(o.map(l=>ur(t,l).then(g=>({name:l,rows:g}))));for(let l=0;l<o.length;l++){const g=o[l],x=s[l];if(e==null||e(`"${g}" 처리 중... (${l+1}/${o.length})`),x.status==="rejected"){console.warn(`"${g}" 시트 건너뜀:`,(r=x.reason)==null?void 0:r.message);continue}try{const{rows:u}=x.value,d=dr(g,u);for(const[h,c]of Object.entries(d))h==="weeklyLabels"||h==="weeklyLabelsFull"?a[h]||(a[h]=c):Array.isArray(c)&&Array.isArray(a[h])?a[h]=[...a[h],...c]:c&&typeof c=="object"&&!Array.isArray(c)&&a[h]&&typeof a[h]=="object"&&!Array.isArray(a[h])?a[h]={...a[h],...c}:a[h]=c}catch(u){console.warn(`"${g}" 시트 처리 실패:`,u.message)}}if(!a.productsPartial&&a.weeklyAll&&a.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const l={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},g={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},x=[];for(const[u,d]of Object.entries(a.weeklyAll)){const h=d.Total||d.TTL||{},c=h.LG||h.lg||[],k=Object.entries(h).filter(([B])=>B!=="LG"&&B!=="lg"),p=c.length?c[c.length-1]:0,S=c.length>=5?c[0]:0;let C="",w=0;for(const[B,R]of k){const L=R.length?R[R.length-1]:0;L>w&&(w=L,C=B)}p>0&&x.push({id:u,bu:g[u]||"HS",kr:l[u]||u,category:u,date:((f=a.meta)==null?void 0:f.period)||"",score:p,prev:S,vsComp:w,compName:C,allScores:{LG:p,...C?{[C]:w}:{}}})}if(x.length&&(a.productsPartial=x,console.log(`[SYNC] weeklyAll에서 ${x.length}개 제품 생성:`,x.map(u=>`${u.id}=${u.score}`).join(", "))),!a.productsCnty){const u=[];for(const[d,h]of Object.entries(a.weeklyAll)){const c=l[d]||d;for(const[k,p]of Object.entries(h)){if(k==="Total"||k==="TTL")continue;const S=p.LG||p.lg||[],C=S.length?S[S.length-1]:0;if(C<=0)continue;const w=S.length>=2?S[0]:0;let B="",R=0;const L={LG:C};for(const[I,O]of Object.entries(p)){if(I==="LG"||I==="lg")continue;const N=O.length?O[O.length-1]:0;L[I]=N,N>R&&(R=N,B=I)}const v=+(C-R).toFixed(1);u.push({product:c,country:k,score:C,prev:w,compName:B,compScore:R,gap:v,allScores:L})}}u.length&&(a.productsCnty=u,console.log(`[SYNC] weeklyAll에서 productsCnty ${u.length}건 생성`))}}if(a.weeklyLabels&&a.weeklyLabels.length&&a.weeklyLabels.every((g,x)=>g===`W${x+1}`)){const g=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(g.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",g),a.weeklyLabels=g;const x=(a.weeklyPRLabels||a.weeklyBrandPromptLabels||[]).map(u=>{const d=String(u).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(u=>/^W\d+/.test(u));x.length&&(a.weeklyLabelsFull=x)}}return a}const ht={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:$,outline:"none",boxSizing:"border-box"};function hr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),s=Math.floor(a/24);return s>=1?`${s}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function gr({savedAt:t,ageMs:e,stale:o,style:a}){const s=t==null,r=s?"#1E293B":o?"#7F1D1D":"#064E3B",f=s?"#94A3B8":o?"#FCA5A5":"#86EFAC",l=s?"#334155":o?"#B91C1C":"#047857",g=s?"○":o?"⚠️":"●",x=s?"동기화 정보 없음":`데이터 최신화: ${hr(e)}`,u=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:u,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:f,border:`1px solid ${l}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:$,whiteSpace:"nowrap",...a||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:g}),x]})}function mr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const zt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Ht="#CF0652",ee="#94A3B8",Be={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},Go={LG:Ht,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},ko=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],We={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},yr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Le={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},br={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},xr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},qe=90;function Je(t,e){const o=Be[e]||Be.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function vr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function wr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Ve(t){const e=String(t||"").trim().toUpperCase();return Le[e]||t}function Cr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?br[o]||Le[o]||t:xr[o]||Le[o]||t}let kr=0;function So(t,e,o,a,s,r={}){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const f=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,l=r.baselineLabel||"",g=r.labelOffsetY||0,x=r.lineOffsetY||0,u=kr++,d={t:18,r:10,b:20,l:10},h=o-d.l-d.r,c=a-d.t-d.b,k=t.filter(m=>m!=null);if(!k.length){let m=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const A=t.length,T=A>1?A-1:1;return m+=t.map((E,M)=>`<text x="${(d.l+M/T*h).toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${zt}">${e[M]||""}</text>`).join(""),m+="</svg>",m}const p=Math.min(...k)-1,S=Math.max(...k)+1,C=S-p||1,w=t.length,B=w>1?w-1:1,R=t.map((m,A)=>d.l+A/B*h),L=[];t.forEach((m,A)=>{m!=null&&L.push({x:R[A],y:d.t+(1-(m-p)/C)*c,v:m,idx:A})});let v=`<svg viewBox="0 0 ${o} ${a+12}" width="100%" height="${a+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const I=f>0?L.filter(m=>m.idx<f):[],O=f>0?L.filter(m=>m.idx>=f):L,N="#64748B";if(O.length>=2){const m=O.map((T,E)=>`${E?"L":"M"}${T.x.toFixed(1)},${T.y.toFixed(1)}`).join(" "),A=m+` L${O[O.length-1].x.toFixed(1)},${d.t+c} L${O[0].x.toFixed(1)},${d.t+c} Z`;v+=`<defs><linearGradient id="lg${u}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${s}" stop-opacity="0.03"/>
    </linearGradient></defs>`,v+=`<path d="${A}" fill="url(#lg${u})"/>`,v+=`<path d="${m}" stroke="${s}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(I.length>=2){const m=I.map((A,T)=>`${T?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" ");v+=`<path d="${m}" stroke="${N}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(v+=L.map(m=>{const A=f>0&&m.idx<f;return f>0&&m.idx===f?`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="4" fill="#000" stroke="${s}" stroke-width="3"/>`:`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${A?N:s}" stroke-width="2" opacity="${A?.85:1}"/>`}).join(""),v+=L.map(m=>{const T=f>0&&m.idx<f?N:s;return`<text x="${m.x.toFixed(1)}" y="${Math.max(m.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${T}" font-family="${zt}">${m.v.toFixed(1)}</text>`}).join(""),f>0&&l){const m=R[f];v+=`<line x1="${m.toFixed(1)}" y1="${(d.t+x).toFixed(1)}" x2="${m.toFixed(1)}" y2="${(d.t+c+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const A=m>o*.7,T=(A?d.t+c+1:d.t+8)+g;v+=`<text x="${(A?m-5:m+5).toFixed(1)}" y="${T.toFixed(1)}" text-anchor="${A?"end":"start"}" font-size="9" fill="#64748B" font-family="${zt}">${l}</text>`}return v+=t.map((m,A)=>`<text x="${R[A].toFixed(1)}" y="${d.t+c+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${zt}">${e[A]||""}</text>`).join(""),v+="</svg>",v}function xe(t,e){return Go[t]||ko[e%ko.length]}function Ho(t,e,o,a,s={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const f=s.fadeBeforeIdx!=null?s.fadeBeforeIdx:-1,l=s.baselineLabel||"";let g=1/0,x=-1/0;if(r.forEach(w=>(t[w]||[]).forEach(B=>{B!=null&&(B<g&&(g=B),B>x&&(x=B))})),!isFinite(g))return"";const u=Math.max((x-g)*.15,2);g=Math.max(0,g-u),x=Math.min(100,x+u);const d=x-g||1,h=e.length,c=8,k=8,p=a-c-k,S="#64748B";let C="";for(let w=0;w<=4;w++){const B=c+w/4*p;C+=`<line x1="0" y1="${B.toFixed(1)}" x2="${o}" y2="${B.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((w,B)=>{const R=t[w]||[],L=xe(w,B),v=w==="LG",I=v?2.5:1.5,O=v?1:.7,N=[];if(R.forEach((E,M)=>{if(E==null)return;const b=(M+.5)/h*o,F=c+(1-(E-g)/d)*p;N.push({x:b,y:F,v:E,idx:M})}),!N.length)return;const m=f>0?N.filter(E=>E.idx<f):[],A=f>0?N.filter(E=>E.idx>=f):N;function T(E,M,b,F){if(E.length>=2){const _=E.map((P,j)=>`${j?"L":"M"}${P.x.toFixed(1)},${P.y.toFixed(1)}`).join(" ");C+=`<path d="${_}" stroke="${M}" fill="none" stroke-width="${I}" stroke-linecap="round" stroke-linejoin="round" opacity="${b}"/>`}E.forEach(_=>{F&&_.idx===f||(C+=`<circle cx="${_.x.toFixed(1)}" cy="${_.y.toFixed(1)}" r="${v?3.5:2.5}" fill="#fff" stroke="${M}" stroke-width="${v?2:1.5}" opacity="${b}"/>`)})}if(T(m,S,.85,!1),T(A,L,O,v&&f>0),v&&f>0){const E=N.find(M=>M.idx===f);E&&(C+=`<circle cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="4.5" fill="#000" stroke="${L}" stroke-width="3"/>`)}}),f>0&&l){const w=(f+.5)/h*o;C+=`<line x1="${w.toFixed(1)}" y1="${c}" x2="${w.toFixed(1)}" y2="${c+p}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const B=w>o*.7;C+=`<text x="${(B?w-5:w+5).toFixed(1)}" y="${(c+12).toFixed(1)}" text-anchor="${B?"end":"start"}" font-size="11" fill="#64748B" font-family="${zt}">${l}</text>`}return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${C}</svg>`}function Sr({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:s,monthlyVis:r,total:f,meta:l,wLabels:g}){const x={monthlyVis:r};return`
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
${(()=>{const u=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?u(e):"{}"};
var _products=${u(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${u(a||[])};
var _unlaunchedMap=${u(s)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${u((x==null?void 0:x.monthlyVis)||[])};
var _total=${u(f)};
var _meta={period:${u(l.period||"")},reportNo:${u(l.reportNo||"")},totalInsight:${u(l.totalInsight||"")}};
var _wLabels=${u(g)};`})()}
${(()=>{const u=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${u(Go)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Ht}';
var _FONT=${u(zt)};
var _COMP='${ee}';
var _REGIONS=${u(Object.fromEntries(Object.entries(We).map(([d,h])=>[d,h.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(We).map(([u,d])=>[u,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${qe};

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
`}const Fr=["audio","rac","aircare"];function Uo(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Fr.includes(String(e).toLowerCase())}function Er(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function $e(t,e){if(!Uo(t)||!e)return-1;const o=Er(t);if(o>0){const a=e.findIndex(s=>{const r=String(s||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(a>=0)return a}return e.findIndex(a=>{const s=String(a||"").trim();return/^Apr(il)?$/i.test(s)||s==="4월"})}const Re={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Ar(t){const e=Re[t]||Re.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function Wo(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),a=Re[e]||Re.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.racair}</p>`:""}function Tr(t,e,o,a,s,r,f){if(!e||!Object.keys(e).length)return"";const g=["MS","HS","ES"].map(x=>{const u=t.filter(h=>h.bu===x);if(!u.length)return"";const d=u.map(h=>{var m,A;const c=((m=e[h.id])==null?void 0:m.Total)||{},k=Object.keys(c).sort((T,E)=>{var F,_;if(T==="LG")return-1;if(E==="LG")return 1;const M=((F=c[T])==null?void 0:F[c[T].length-1])||0;return(((_=c[E])==null?void 0:_[c[E].length-1])||0)-M});if(!k.length)return"";const p=Je(h.status,s),S=(A=c.LG)==null?void 0:A[c.LG.length-1],C=k.map((T,E)=>{const M=xe(T,E),b=T==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${M};opacity:${b?1:.7}"></i><span style="font-size:13px;color:${b?"#1A1A1A":"#94A3B8"};font-weight:${b?700:400}">${T}</span></span>`}).join(""),w=o.length,B=`<colgroup><col style="width:${qe}px">${o.map(()=>"<col>").join("")}</colgroup>`,R=$e(h,o),L=`<tr><td style="padding:0;border:0"></td><td colspan="${w}" style="padding:8px 0;border:0">${Ho(c,o,w*80,180,{fadeBeforeIdx:R,baselineLabel:R>0?"*Baseline 재설정":""})}</td></tr>`,v=`<tr><td style="padding:0;border:0"></td><td colspan="${w}" style="padding:4px 0 6px;border:0">${C}</td></tr>`,I=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(T=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${T}</th>`).join("")}</tr>`,O=k.map((T,E)=>{const M=xe(T,E),b=T==="LG",F=o.map((_,P)=>{var H;const j=(H=c[T])==null?void 0:H[P];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${j!=null?b?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${b?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${j!=null?j.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${b?"#FFF8F9":E%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${b?700:500};color:${M};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${M};margin-right:4px;vertical-align:0"></i>${T}</td>${F}</tr>`}).join(""),N=Ye(h.id||h.category,r);return`<div class="trend-row${N?" is-unlaunched":""}" data-prodid="${h.id||h.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ht};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Xe(h,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${N?"#F1F5F9":p.bg};color:${N?"#64748B":p.color};border:1px solid ${N?"#CBD5E1":p.border}">${N?s==="en"?"Unlaunched":"미출시":p.label}</span>
          ${S!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${S.toFixed(1)}%</span>`:""}
          ${h.compName?`<span style="font-size:14px;color:#94A3B8">vs ${h.compName} ${h.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${zt}">${B}<tbody>${L}${v}${I}${O}</tbody></table></div>
        ${Wo(h,s)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${d}
    </div>`:""}).join("");return g.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${s==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${f||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${s==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${g}</div>
  </div>`:""}function Br(t,e,o,a,s,r){if(!e||!e.length)return"";const f=["MS","HS","ES"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(c){const k=String(c).match(/(\d{1,2})월/);if(k)return parseInt(k[1])-1;const p=String(c).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return p?g[p[1].toLowerCase()]:-1}const u=[0,1,2,3,4,5,6,7,8,9,10,11],d=l.slice(),h=f.map(c=>{const k=t.filter(S=>S.bu===c);if(!k.length)return"";const p=k.map(S=>{const C=S.monthlyScores||[];let w={};if(C.length>=2){const b=new Set;if(C.forEach(F=>{F.allScores&&Object.keys(F.allScores).forEach(_=>b.add(_))}),b.forEach(F=>{w[F]=u.map(_=>{var j;const P=C.find(H=>x(H.date)===_);return((j=P==null?void 0:P.allScores)==null?void 0:j[F])??null})}),!b.size&&(w.LG=u.map(F=>{const _=C.find(P=>x(P.date)===F);return _?_.score:null}),S.vsComp>0)){const F=u.map(_=>{const P=C.find(j=>x(j.date)===_);return(P==null?void 0:P.comp)??null});F.some(_=>_!=null)&&(w[S.compName||"Comp"]=F)}}else{const b=e.filter(j=>j.division===c&&(j.country==="TOTAL"||j.country==="TTL")),F={};b.forEach(j=>{const H=x(j.date);H>=0&&(F[H]=j)});const _=u.map(j=>{var H;return((H=F[j])==null?void 0:H.lg)||null}),P=u.map(j=>{var H;return((H=F[j])==null?void 0:H.comp)||null});w={LG:_},P.some(j=>j!=null&&j>0)&&(w.Samsung=P)}const B=Object.keys(w).sort((b,F)=>{if(b==="LG")return-1;if(F==="LG")return 1;const _=(w[b]||[]).filter(j=>j!=null).pop()||0;return((w[F]||[]).filter(j=>j!=null).pop()||0)-_});if(!B.length)return"";const R=Je(S.status,a),L=(w.LG||[]).filter(b=>b!=null).pop(),v=B.map((b,F)=>{const _=xe(b,F),P=b==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${_};opacity:${P?1:.7}"></i><span style="font-size:13px;color:${P?"#1A1A1A":"#94A3B8"};font-weight:${P?700:400}">${b}</span></span>`}).join(""),I=d.length,O=`<colgroup><col style="width:${qe}px">${d.map(()=>"<col>").join("")}</colgroup>`,N=$e(S,d),m=`<tr><td style="padding:0;border:0"></td><td colspan="${I}" style="padding:8px 0;border:0">${Ho(w,d,I*80,180,{fadeBeforeIdx:N,baselineLabel:N>0?"*Baseline 재설정":""})}</td></tr>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${I}" style="padding:4px 0 6px;border:0">${v}</td></tr>`,T=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(b=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${b}</th>`).join("")}</tr>`,E=B.map((b,F)=>{const _=xe(b,F),P=b==="LG",j=d.map((H,rt)=>{var gt;const dt=(gt=w[b])==null?void 0:gt[rt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${dt!=null?P?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${P?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${dt!=null?dt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${P?"#FFF8F9":F%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${P?700:500};color:${_};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${_};margin-right:4px;vertical-align:0"></i>${b}</td>${j}</tr>`}).join(""),M=Ye(S.id||S.category,s);return`<div class="trend-row${M?" is-unlaunched":""}" data-prodid="${S.id||S.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Ht};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Xe(S,s)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${M?"#F1F5F9":R.bg};color:${M?"#64748B":R.color};border:1px solid ${M?"#CBD5E1":R.border}">${M?a==="en"?"Unlaunched":"미출시":R.label}</span>
          ${L!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${L.toFixed(1)}%</span>`:""}
          ${S.compName?`<span style="font-size:14px;color:#94A3B8">vs ${S.compName} ${S.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${zt}">${O}<tbody>${m}${A}${T}${E}</tbody></table></div>
        ${Wo(S,a)}
      </div>`}).join("");return p?`<div class="bu-group" data-bu="${c}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${c}</span></div>
      ${p}
    </div>`:""}).join("");return h.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${h}</div>
  </div>`:""}function Vo(){return""}function Lr(t,e,o,a){const s=+(t.score-t.prev).toFixed(1),r=t.vsComp||0,f=+(t.score-r).toFixed(1),l=s>0?"▲":s<0?"▼":"─",g=s>0?"#22C55E":s<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${g}">${l} ${Math.abs(s).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Ht}"></div>
          </div>
          ${r>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(r,100)}%;background:${ee}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Ht}"></i> LG ${t.score}%</span>
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
  </div>`}function ye(t,e){const o=je[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function Ye(t,e){return yr.every(o=>{const a=je[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function Xe(t,e){return ye(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Fo(t,e,o,a,s,r,f,l,g){if(!t.length)return"";const u=["MS","HS","ES"].map(d=>{const h=t.filter(k=>k.bu===d);if(!h.length)return"";const c=h.map(k=>{var st,ut;const p=k.weekly||[],S=p.filter(X=>X!=null),C=k.weeklyScore||(S.length>0?S[S.length-1]:k.score),w=k.monthlyScore||k.score,B=C,R=((st=l==null?void 0:l[k.id])==null?void 0:st.Total)||((ut=l==null?void 0:l[k.id])==null?void 0:ut.TTL)||{};let L=0;Object.entries(R).forEach(([X,ot])=>{if(X==="LG"||X==="lg")return;const ct=Array.isArray(ot)&&ot.length?ot[ot.length-1]:0;ct>L&&(L=ct)});const v=k.vsComp||0,I=L>0?C/L*100:v>0?C/v*100:100,O=v>0?w/v*100:100,N=Math.round(I*10)/10,m=Math.round(O*10)/10,A=N,T=I>=100?"lead":I>=80?"behind":"critical",E=Je(T,a),M=S.length>=1?S[S.length-1]:null,b=S.length>=2?S[S.length-2]:null,F=M!=null&&b!=null?+(M-b).toFixed(1):null,_=F>0?"▲":F<0?"▼":"─",P=F>0?"#22C55E":F<0?"#EF4444":"#94A3B8",j=T==="critical"?"#BE123C":T==="behind"?"#D97706":"#15803D",H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function dt(X){const ot=String(X).match(/(\d{1,2})월/);if(ot)return parseInt(ot[1])-1;const ct=String(X).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ct?rt[ct[1].toLowerCase()]:-1}let gt=k.monthlyScores||[];if(gt.length<2&&f.length>0){const X=f.filter(ct=>ct.division===k.bu&&(ct.country==="TOTAL"||ct.country==="TTL")),ot={};X.forEach(ct=>{const Et=dt(ct.date);Et>=0&&(ot[Et]={date:ct.date,score:ct.lg,comp:ct.comp})}),gt=Object.keys(ot).sort((ct,Et)=>ct-Et).map(ct=>ot[ct])}const pt=gt.length>0?gt.map(X=>{const ot=dt(X.date);return ot>=0?H[ot]:X.date}):["M-3","M-2","M-1","M0"],at=gt.length>0?gt.map(X=>X.score):[null,null,null,k.score],xt=gt.length>=2?+(gt[gt.length-1].score-gt[gt.length-2].score).toFixed(1):null,Ut=xt>0?"▲":xt<0?"▼":"─",Tt=xt>0?"#22C55E":xt<0?"#EF4444":"#94A3B8",It=A,Ft=It>=100?"#15803D":It>=80?"#D97706":"#BE123C",At=k.weeklyPrev||(S.length>=5?S[S.length-5]:S[0]||0),Wt=C&&At?+(C-At).toFixed(1):null,tt=w&&(k.monthlyPrev||k.prev)?+(w-(k.monthlyPrev||k.prev)).toFixed(1):null,G=ye(k.id||k.category,r),lt=Ye(k.id||k.category,r),U=lt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:E;return`<div class="prod-card${lt?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${C.toFixed(1)}" data-ms="${w.toFixed(1)}" data-wr="${N}" data-mr="${m}" data-wmom="${Wt??""}" data-mmom="${tt??""}" style="border-color:${U.border}">
        <div class="prod-head">
          <span class="prod-name">${Xe(k,r)}</span>
          ${G.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${U.bg};color:${U.color};border-color:${U.border}">${U.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${B.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${P}">${F!=null?`WoW ${_} ${Math.abs(F).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Tt}">${Uo(k)||xt==null?"":`MoM ${Ut} ${Math.abs(xt).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const X=s.slice(-10),ot=$e(k,X),ct=String(k.id||"").toLowerCase(),Et=ct==="aircare"?30:ct==="rac"?20:0;return So(p.slice(-10),X,300,90,j,{fadeBeforeIdx:ot,baselineLabel:ot>0?"*Baseline 재설정":"",labelOffsetY:Et})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const X=$e(k,pt),ct=String(k.id||"").toLowerCase()==="audio";return So(at,pt,300,90,j,{fadeBeforeIdx:X,baselineLabel:X>0?"*Baseline 재설정":"",labelOffsetY:ct?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(It,120)}%;background:${Ft}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Ft}">${It}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${h.length}${o.categories}</span></div>
      <div class="prod-grid">${c}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${g||""}${g?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Vo(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${u}${(()=>{const d=t.filter(h=>ye(h.id||h.category,r).length>0).map(h=>`${(h.id||"").toLowerCase()==="audio"||h.kr==="오디오"?"Audio-Sound Suite":h.kr}: ${ye(h.id||h.category,r).map(c=>Cr(c,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Ar(a)})()}</div>
  </div>`}function Eo(t,e,o,a){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),f=je[r]||(r||"").toUpperCase(),l=a&&a[`${t.country}|${f}`],g=wr(t.score,t.compScore),x=l?"#94A3B8":g==="lead"?"#15803D":g==="behind"?"#D97706":"#BE123C",u=+(t.score-t.compScore).toFixed(1),d=l?"#64748B":u>=0?"#15803D":"#BE123C",h=130,c=["TCL","HISENSE","HAIER"];let k="",p=0;t.allScores&&Object.entries(t.allScores).forEach(([L,v])=>{const I=String(L).toUpperCase();c.some(N=>I.includes(N))&&v>p&&(k=L,p=v)});const S=Math.max(e,p),C=Math.max(3,Math.round(t.score/S*h)),w=t.compScore>0?Math.max(3,Math.round(t.compScore/S*h)):0,B=p>0?Math.max(3,Math.round(p/S*h)):0,R="#9333EA";return`<div class="vbar-item${l?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${C}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ee}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${w}px;background:${ee}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${p>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${R}">${p.toFixed(1)}</span>
        <div class="vbar-col" style="height:${B}px;background:${R}"></div>
        <span class="vbar-col-name" style="color:${R}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${u>=0?"+":""}${u}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Ao(t,e,o,a,s,r){if(!t||!t.length)return"";const f=new Map;t.forEach(c=>{f.has(c.product)||f.set(c.product,[]),f.get(c.product).push(c)});const l=e.cntyProductFilter||{},g=[...f.entries()].filter(([c])=>l[c]!==!1).map(([c,k])=>{const p=Math.max(...k.map(C=>Math.max(C.score,C.compScore)),1),S=k.map(C=>Eo(C,p,Ve(C.country),s)).join("");return`<div class="cnty-product" data-group-product="${c}"><div class="bu-header"><span class="bu-label">${c}</span></div><div class="vbar-chart">${S}</div></div>`}).join(""),x=new Map;t.forEach(c=>{x.has(c.country)||x.set(c.country,[]),x.get(c.country).push(c)});const u=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],h=u.filter(c=>x.has(c)).concat([...x.keys()].filter(c=>!u.includes(c))).map(c=>{const k=x.get(c);if(!k)return"";const p=Math.max(...k.map(C=>Math.max(C.score,C.compScore)),1),S=k.map(C=>Eo(C,p,C.product,s)).join("");return`<div class="cnty-product" data-group-country="${c}"><div class="bu-header"><span class="bu-label">${Ve(c)}</span></div><div class="vbar-chart">${S}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
    ${Vo(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${h}</div>
      <div class="cnty-view-product" style="display:none">${g}</div>
      ${(()=>{if(!s||!Object.keys(s).length)return"";const c={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},p=[...new Set(t.map(S=>S.product))].map(S=>{const C=c[S]||String(S).toLowerCase(),w=ye(C,s),B=C==="audio"?"Audio-Sound Suite":S;return w.length?`${B}: ${w.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return p.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${p.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const To={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function $r(t){const e=To[t]||To.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(s=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${s.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${s.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Rr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",a=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",s=e==="en"?"All":"전체",r=e==="en"?"Total":"총",f=e==="en"?"":"개",l=e==="en"?"Clear filters":"필터 초기화",g=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],x={};g.forEach(c=>{const k=new Set;t.forEach(p=>{p[c.key]&&k.add(p[c.key])}),x[c.key]=[...k].sort()});const u=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(x).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const d=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),h=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${a}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${r} ${t.length}${f?" "+f:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${l}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${g.map(c=>`<th data-col="${c.key}" onclick="_plToggle('${c.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${c.label} <span id="pl-arrow-${c.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${g.map(c=>`<div id="pl-dd-${c.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${c.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${s}</div>
      ${x[c.key].map(k=>`<div onclick="_plFilter('${c.key}','${k.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${k}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${u};
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
      document.getElementById('pl-count').textContent='${r} '+f.length+'${f?" "+f:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(g.map(c=>c.key))}.forEach(function(k){
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
  <\/script>`}function Bo(t,e,o,a,s,r){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const f=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],l=[];for(let m=0;m<12;m++)l.push("w"+(5+m));const g=[...new Set(t.map(m=>m.topic))].filter(Boolean),x=[...new Set(t.map(m=>m.type))].filter(Boolean),u=[...new Set(t.map(m=>m.country))].filter(m=>m&&m!=="TTL"),d=f.filter(m=>u.includes(m)).concat(f.filter(m=>!u.includes(m))),h=JSON.stringify(t).replace(/</g,"\\u003c"),c=JSON.stringify(l),k=JSON.stringify(g),p=JSON.stringify(x),S=JSON.stringify(d),C=72;function w(m){const A={};return m&&String(m).split(`
`).forEach(T=>{const E=T.indexOf("=");if(E>0){const M=T.slice(0,E).trim(),b=T.slice(E+1).trim();M&&(A[M]=b)}}),A}const B=w(a==null?void 0:a.prTopicPromptsRaw);s&&s.length&&g.forEach(m=>{if(!B[m]){const A=s.find(T=>T.topic===m&&T.country==="US");A&&(B[m]=A.prompt)}});const R=(r==null?void 0:r.prTopicList)||[],L={},v={};R.forEach(m=>{[m.topic,m.topicRow,m.oldTopic].filter(Boolean).map(T=>T.trim()).forEach(T=>{m.explanation&&!L[T]&&(L[T]=m.explanation),m.bu&&!v[T]&&(v[T]=m.bu)})});const O={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...L,...w(a==null?void 0:a.prTopicDescsRaw)},N={};return g.forEach(m=>{const A=v[m];if(A)N[m]=A;else{const T=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];N[m]=T.some(E=>m.toLowerCase().includes(E.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${zt}">
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
    var D=${h},W=${c},TP=${k},TY=${p},CN=${S};
    var CW=${C};
    var TOPIC_CAT=${JSON.stringify(N)};
    var TOPIC_PROMPT=${JSON.stringify(B).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(O).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(R).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Le)};
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
  <\/script>`}function Lo(t,e,o,a,s,r){const f=(t||[]).filter(p=>!0);if(!f.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const l=[];for(let p=0;p<12;p++)l.push("w"+(5+p));const x=[...new Set(f.map(p=>p.stakeholder))].filter(Boolean).map(p=>({stakeholder:p,topics:[...new Set(f.filter(S=>S.stakeholder===p).map(S=>S.topic))].filter(Boolean)})),u=72,d=JSON.stringify(f).replace(/</g,"\\u003c"),h=JSON.stringify(l),c=JSON.stringify(x),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${zt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Ht};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${h},GROUPS=${c};
    var CW=${u},RED='${Ht}';
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
  <\/script>`}function Ir(t,e,o,a,s,r,f,l,g,x,u,d,h,c){var tt,G,lt;o=(o||[]).map(z=>({...z,weekly:(z.weekly||[]).map(U=>U??0),monthly:(z.monthly||[]).map(U=>U??0)})),x&&typeof x=="object"&&Object.values(x).forEach(z=>{!z||typeof z!="object"||Object.values(z).forEach(U=>{!U||typeof U!="object"||Object.keys(U).forEach(st=>{const ut=U[st];Array.isArray(ut)&&(U[st]=ut.map(X=>X??0))})})});const k={aircare:"Xiaomi"};o=o.map(z=>{const U=k[(z.id||"").toLowerCase()];if(!U||!z.allScores)return z;const st=Object.entries(z.allScores).find(([ot])=>ot.toLowerCase()===U.toLowerCase()&&ot.toLowerCase()!=="lg");if(!st)return z;const ut=st[1];if(!(ut>0))return z;const X=Math.round(z.score/ut*100);return{...z,compName:st[0],vsComp:ut,compRatio:X,status:X>=100?"lead":X>=80?"behind":"critical"}});const p=(h==null?void 0:h.visibilityOnly)||!1,S=(h==null?void 0:h.includePromptList)||!1,C=(h==null?void 0:h.includeReadability)===!0,w=(c==null?void 0:c.unlaunchedMap)||{},R=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,L=Be[r]||Be.ko;let v;if(g&&g.length)v=g.map(z=>String(z).toUpperCase().startsWith("W")?z.toUpperCase():z);else{const z=x?Math.max(...Object.values(x).flatMap(st=>Object.values(st).flatMap(ut=>Object.values(ut).map(X=>(X==null?void 0:X.length)||0))),0):0,U=t.weekStart||Math.max(1,z-11);v=Array.from({length:Math.max(12,z)},(st,ut)=>`W${U+ut}`)}const I=new Set;x&&Object.values(x).forEach(z=>Object.keys(z).forEach(U=>{U!=="Total"&&I.add(U)})),f&&f.forEach(z=>{z.country&&z.country!=="TTL"&&I.add(z.country)});const O=[...I].sort(),N=r==="en"?"All":"전체",m=["MS","HS","ES"],A=o.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${z.bu}" value="${z.id}" checked onchange="onFilterChange()"><span>${z.kr}</span></label>`).join(""),T=m.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${z}" checked onchange="onBuChange('${z}')"><span>${z}</span></label>`).join(""),E=O.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${z}" checked onchange="onFilterChange()"><span>${Ve(z)}</span></label>`).join(""),M=Object.entries(We).map(([z,U])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${z}" checked onchange="onRegionChange('${z}')"><span>${U.labelEn}</span></label>`).join(""),b=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,F=h!=null&&h.weeklyLabelsFull&&h.weeklyLabelsFull.length===v.length?h.weeklyLabelsFull:v,_=v.map((z,U)=>`<option value="${U}"${U===v.length-1?" selected":""}>${F[U]||z}</option>`).join(""),P=(((tt=o[0])==null?void 0:tt.monthlyScores)||[]).map(z=>{const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ut=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?U[parseInt(st[1])-1]:ut?ut[1].charAt(0).toUpperCase()+ut[1].slice(1).toLowerCase():z.date}),j=P.map((z,U)=>`<option value="${U}"${U===P.length-1?" selected":""}>${z}</option>`).join(""),H=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${zt}`,rt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${b}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${v[v.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${v.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${H}">${_}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${H}"${P.length>0?"":" disabled"}>${j||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${N}</span></label>
        ${T}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${N}</span></label>
        ${A}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${N}</span></label>
        ${M}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${N}</span></label>
        ${E}
      </div>
    </div>
  </div>`,gt=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${vr(t.noticeText)}</div></div>`:"",t.showTotal!==!1?Lr(e,t,L,r):""].join(""),pt=[];if(x&&Object.keys(x).length){const z={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(x).forEach(([U,st])=>{const ut=o.find(ot=>ot.id===U),X=(ut==null?void 0:ut.kr)||z[U]||U;Object.entries(st).forEach(([ot,ct])=>{if(ot==="Total"||ot==="TTL"||ot==="TOTAL")return;const Et=ct.LG||ct.lg||[],jt=Et.length>0?Et[Et.length-1]:0;if(jt<=0)return;let Xt="",Bt=0;Object.entries(ct).forEach(([Dt,vt])=>{if(Dt==="LG"||Dt==="lg")return;const Vt=Array.isArray(vt)&&vt.length?vt[vt.length-1]:0;Vt>Bt&&(Bt=Vt,Xt=Dt)});const re=+(jt-Bt).toFixed(1),Pt={};Object.entries(ct).forEach(([Dt,vt])=>{if(Array.isArray(vt)&&vt.length){const Vt=vt[vt.length-1];Vt!=null&&(Pt[Dt]=Vt)}}),pt.push({product:X,country:ot,score:jt,compName:Xt,compScore:Bt,gap:re,allScores:Pt})})})}const at=((G=h==null?void 0:h.weeklyLabelsFull)==null?void 0:G[h.weeklyLabelsFull.length-1])||v[v.length-1]||"",xt=at?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${at} ${r==="en"?"data":"기준"}</span>`:"",Ut=[gt,t.showProducts!==!1?Fo(o,t,L,r,v,w,(h==null?void 0:h.monthlyVis)||[],x,xt):"",`<div id="trend-container">${Tr(o,x,v,L,r,w,xt)}</div>`,t.showCnty!==!1?Ao(pt,t,L,r,w,xt):""].join(""),Tt=o.map(z=>{const U=z.monthlyScore||z.score,st=z.monthlyPrev||z.prev,ut=z.vsComp||0,X=ut>0?U/ut*100:100;return{...z,score:U,prev:st,weeklyScore:U,weeklyPrev:st,monthlyScore:U,monthlyPrev:st,weekly:(z.monthlyScores||[]).map(ot=>ot.score),status:X>=100?"lead":X>=80?"behind":"critical"}}),It=(((lt=o[0])==null?void 0:lt.monthlyScores)||[]).map(z=>{const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],st=String(z.date).match(/(\d{1,2})월/),ut=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return st?U[parseInt(st[1])-1]:ut?ut[1].charAt(0).toUpperCase()+ut[1].slice(1).toLowerCase():z.date}),Ft=(h==null?void 0:h.monthlyVis)||[],At=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Wt=[gt,t.showProducts!==!1?Fo(Tt,t,L,r,It.length?It:["Feb","Mar"],w,Ft,{},At):"",`<div id="monthly-trend-container">${Br(Tt,Ft,L,r,w,At)}</div>`,t.showCnty!==!1?Ao(f,t,L,r,w,At):""].join("");return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${mr({FONT:zt,RED:Ht,COMP:ee})}</style>
</head>
<body>
${p?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${rt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Ut}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Wt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Bo(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Lo(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    ${rt}
    <div id="bu-weekly-content" class="dash-container">${Ut}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Wt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Bo(c==null?void 0:c.weeklyPR,c==null?void 0:c.weeklyPRLabels,r,t,c==null?void 0:c.appendixPrompts,c)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Lo(c==null?void 0:c.weeklyBrandPrompt,c==null?void 0:c.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <p>${L.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${R}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Rr(c==null?void 0:c.appendixPrompts,r)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${$r(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${L.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Sr({lang:r,weeklyAll:x,products:o,productsCnty:f,ulMap:w,monthlyVis:h==null?void 0:h.monthlyVis,total:e,meta:t,wLabels:v})}
<\/script>
</body>
</html>`}function jr(t){const e=t.filter(g=>g.status==="lead"),o=t.filter(g=>g.status==="behind"),a=t.filter(g=>g.status==="critical"),s=[...t].sort((g,x)=>x.score-g.score)[0],r=[...t].sort((g,x)=>g.score-x.score)[0],f=(t.reduce((g,x)=>g+x.score,0)/t.length).toFixed(1),l=[];return l.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${f}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),s&&l.push(`가장 높은 카테고리는 ${s.kr} ${s.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(s.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?l.push(`취약 카테고리(${a.map(g=>g.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&l.push(`추격 카테고리(${o.map(g=>g.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),l.join(" ")}function Pr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Dr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const Q=wt,Mr={citation:[Q.meta,Q.citTouchPoints,Q.citDomain,Q.citPageType],"weekly-report":[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES],"monthly-report":[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES],dashboard:[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citDomain,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES,Q.weeklyPR,Q.weeklyBrandPrompt,Q.appendix,Q.unlaunched,Q.prTopicList],newsletter:[Q.meta,Q.visSummary,Q.citTouchPoints,Q.citPageType,Q.productMS,Q.productHS,Q.productES,Q.weeklyMS,Q.weeklyHS,Q.weeklyES,Q.unlaunched]};function Nr(t){return Mr[t]||[]}const $o="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function _r(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function Or({url:t,downloadName:e="sheet",mode:o}){const[a,s]=Y.useState(!1),[r,f]=Y.useState(""),l=o?Nr(o):[],g=l.length?"zip":"xlsx",x=l.length?`📥 시트 CSV ZIP 다운로드 (탭 ${l.length}개)`:"📥 시트 xlsx 다운로드";async function u(){const d=_r(t);if(!d){f("ERROR: 동기화 URL 비어있거나 잘못됨");return}s(!0),f("");try{const h=new URLSearchParams({id:d,name:e});l.length&&h.set("tabs",l.join(","));const c=await fetch(`/api/sheet-download?${h.toString()}`,{credentials:"include"});if(!c.ok){const S=await c.text().catch(()=>"");let C=S;try{const w=JSON.parse(S);C=w.error||w.detail||S}catch{}throw new Error(`(${c.status}) ${C}`)}const k=await c.blob(),p=document.createElement("a");p.href=URL.createObjectURL(k),p.download=`${e}.${g}`,document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(p.href),1e3),f("다운로드 완료")}catch(h){f("ERROR: "+(h.message||String(h)))}finally{s(!1)}}return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("button",{onClick:u,disabled:a||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:a||!t?"#1E293B":"#1D4ED8",color:a||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:$o,cursor:a||!t?"not-allowed":"pointer"},children:a?"다운로드 중…":x}),r&&n.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:$o,background:r.startsWith("ERROR")?"#450A0A":"#14532D",color:r.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:r})]})}function zr({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:s,metaEn:r,setMetaEn:f,total:l,setTotal:g,products:x,setProducts:u,citations:d,setCitations:h,dotcom:c,setDotcom:k,productsCnty:p,setProductsCnty:S,citationsCnty:C,setCitationsCnty:w,resolved:B,previewLang:R,setPreviewLang:L,snapshots:v,setSnapshots:I,setWeeklyLabels:O,setWeeklyAll:N,weeklyLabels:m,weeklyAll:A,citationsByCnty:T,dotcomByCnty:E,generateHTML:M,publishEndpoint:b,setMonthlyVis:F,onSyncExtra:_,categoryStats:P,extra:j,monthlyVis:H,progressMonth:rt,setProgressMonth:dt,progressDataMonth:gt}){const pt=Y.useRef({products:x,productsCnty:p,citations:d,citationsCnty:C,total:l,dotcom:c,extra:j});pt.current={products:x,productsCnty:p,citations:d,citationsCnty:C,total:l,dotcom:c,extra:j};function at(){return pt.current}const[xt,Ut]=Y.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Tt,It]=Y.useState(!1),[Ft,At]=Y.useState(null),[Wt,tt]=Y.useState(""),[G,lt]=Y.useState(""),[z,U]=Y.useState(!1),[st,ut]=Y.useState(""),[X,ot]=Y.useState(!1),[ct,Et]=Y.useState(!1),[jt,Xt]=Y.useState(!1),[Bt,re]=Y.useState(!1),[Pt,Dt]=Y.useState(""),[vt,Vt]=Y.useState(!1),[Ze,Ko]=Y.useState(!0),[ie,ve]=Y.useState(""),[oe,De]=Y.useState(null),[ue,qo]=Y.useState([]),Mt=t==="newsletter",[ae,Jo]=Y.useState(()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`});function Me(){Mt&&fetch("/api/publish").then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.months)&&qo(i.months)}).catch(()=>{})}Y.useEffect(()=>{if(Mt){Me();return}fetch(b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(y=>y.ok?y.json():null).then(De).catch(()=>{})},[t,b,Mt]);const Yo=(()=>{const i=new Set,y=new Date;for(let et=0;et<24;et++){const bt=new Date(y.getFullYear(),y.getMonth()-et,1);i.add(`${bt.getFullYear()}-${String(bt.getMonth()+1).padStart(2,"0")}`)}for(const et of ue)i.add(et.month);return ae&&i.add(ae),[...i].sort((et,bt)=>bt.localeCompare(et))})();function we(i){const[y,et]=i.split("-");return`${y}년 ${parseInt(et,10)}월`}const[Xo,Qe]=Y.useState(null);Y.useEffect(()=>{let i=!0;const y=()=>po(t).then(bt=>{i&&Qe(bt)});y();const et=setInterval(y,6e4);return()=>{i=!1,clearInterval(et)}},[t]);function Zo(){po(t).then(Qe)}async function Qo(){if(!Bt){re(!0),Dt("");try{const i=at(),y=Ae(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),et=Ae(i.products,i.productsCnty,i.citations,i.citationsCnty,"en");let bt,Nt,W;if(t==="dashboard"){const Z=H||[],ft=i.extra||j||{};bt=M(a,i.total,y.products,y.citations,i.dotcom,"ko",y.productsCnty,y.citationsCnty,m,A,T,E,Z,ft),Nt=M(r,i.total,et.products,et.citations,i.dotcom,"en",et.productsCnty,et.citationsCnty,m,A,T,E,Z,ft),W=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else bt=M(a,i.total,y.products,y.citations,c,"ko",y.productsCnty,y.citationsCnty,{weeklyLabels:m,categoryStats:P,unlaunchedMap:(j==null?void 0:j.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Nt=M(r,i.total,et.products,et.citations,c,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:m,categoryStats:P,unlaunchedMap:(j==null?void 0:j.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),W=`${a.period||""} ${a.title||"Newsletter"}`.trim();const se=b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),D={title:W,htmlKo:bt,htmlEn:Nt};Mt&&(D.month=ae);const Lt=await(await fetch(se,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(D)})).json();if(!Lt.ok)throw new Error(Lt.error||"게시 실패");if(De({...Lt,published:!0}),Mt&&Me(),t==="dashboard")try{const Z=await Te(t)||{},ft=i.extra||j||{};uo(t,{...Z,meta:a,total:i.total,weeklyPR:ft.weeklyPR||Z.weeklyPR,weeklyPRLabels:ft.weeklyPRLabels||Z.weeklyPRLabels,weeklyBrandPrompt:ft.weeklyBrandPrompt||Z.weeklyBrandPrompt,weeklyBrandPromptLabels:ft.weeklyBrandPromptLabels||Z.weeklyBrandPromptLabels,appendixPrompts:ft.appendixPrompts||Z.appendixPrompts})}catch{}const _t=`${window.location.origin}${Lt.urls.ko}`,nt=`${window.location.origin}${Lt.urls.en}`;try{await navigator.clipboard.writeText(_t+`
`+nt)}catch{}Dt(`KO: ${_t}
EN: ${nt}`)}catch(i){Dt("ERROR:"+i.message)}finally{re(!1),setTimeout(()=>Dt(""),2e4)}}}async function tn(){if(!vt){Vt(!0),ve("");try{const i=await Gn(Ir,Ae,{includeProgressTracker:Ze});ve(`통합 게시 완료!
KO: ${window.location.origin}${i.urls.ko}
EN: ${window.location.origin}${i.urls.en}`)}catch(i){ve("ERROR: "+i.message)}finally{Vt(!1),setTimeout(()=>ve(""),15e3)}}}async function to(i){try{const y=b||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),et=Mt?`${y}?month=${encodeURIComponent(i||ae)}`:y;(await(await fetch(et,{method:"DELETE"})).json()).ok&&(Mt?Me():De(null))}catch{}}async function en(){if(R!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}Et(!0)}async function eo(i){Et(!1),Xt(!0);const y=(i==null?void 0:i.products)??x,et=(i==null?void 0:i.productsCnty)??p,bt=(i==null?void 0:i.citations)??d,Nt=(i==null?void 0:i.citationsCnty)??C;try{const W=a,se=[W.title||"",W.dateLine||"",W.noticeText||"",W.totalInsight||"",W.reportType||"",W.productInsight||"",W.productHowToRead||"",W.citationInsight||"",W.citationHowToRead||"",W.dotcomInsight||"",W.dotcomHowToRead||"",W.todoText||"",W.todoNotice||"",W.kpiLogicText||"",W.cntyInsight||"",W.cntyHowToRead||"",W.citDomainInsight||"",W.citDomainHowToRead||"",W.citCntyInsight||"",W.citCntyHowToRead||"",W.citPrdInsight||"",W.citPrdHowToRead||"",W.period||"",W.team||"",W.reportNo||"",W.monthlyReportBody||""],D=y.map(J=>J.kr||""),Zt=y.map(J=>J.compName||""),Lt=bt.map(J=>J.category||""),_t=[...new Set(et.map(J=>J.country||""))],nt=[...new Set(et.map(J=>J.product||""))],Z=[...new Set(et.map(J=>J.compName||""))],ft=[...new Set(Nt.map(J=>J.cnty||"").filter(J=>J&&J!=="TTL"))],mt=[...se,...D,...Zt,...Lt,..._t,...nt,...Z,...ft].map(J=>J||" "),q=await Un(mt,{from:"ko",to:"en"});let V=0;const Yt={...a,title:q[V++]||W.title,dateLine:q[V++]||W.dateLine,noticeText:q[V++]||W.noticeText,totalInsight:q[V++]||W.totalInsight,reportType:q[V++]||W.reportType,productInsight:q[V++]||W.productInsight,productHowToRead:q[V++]||W.productHowToRead,citationInsight:q[V++]||W.citationInsight,citationHowToRead:q[V++]||W.citationHowToRead,dotcomInsight:q[V++]||W.dotcomInsight,dotcomHowToRead:q[V++]||W.dotcomHowToRead,todoText:q[V++]||W.todoText,todoNotice:q[V++]||W.todoNotice,kpiLogicText:q[V++]||W.kpiLogicText,cntyInsight:q[V++]||W.cntyInsight,cntyHowToRead:q[V++]||W.cntyHowToRead,citDomainInsight:q[V++]||W.citDomainInsight,citDomainHowToRead:q[V++]||W.citDomainHowToRead,citCntyInsight:q[V++]||W.citCntyInsight,citCntyHowToRead:q[V++]||W.citCntyHowToRead,citPrdInsight:q[V++]||W.citPrdInsight,citPrdHowToRead:q[V++]||W.citPrdHowToRead,period:(V++,W.period),team:q[V++]||W.team,reportNo:(V++,W.reportNo),monthlyReportBody:q[V++]||W.monthlyReportBody},$t=J=>J&&J.replace(/\b\w/g,it=>it.toUpperCase()),Kt=J=>(J||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Qt={};y.forEach((J,it)=>{Qt[J.id]={en:$t(q[V+it]||J.kr),compNameEn:Kt(q[V+D.length+it]||J.compName)}}),V+=D.length+Zt.length;const Ot={};bt.forEach((J,it)=>{Ot[`${J.rank}_${J.source}`]=$t(q[V+it]||J.category)}),V+=Lt.length;const le={};_t.forEach((J,it)=>{le[J]=/^[A-Z]{2,3}$/.test(J)?J:q[V+it]||J}),V+=_t.length;const Ce={};nt.forEach((J,it)=>{Ce[J]=q[V+it]||J}),V+=nt.length;const fe={};Z.forEach((J,it)=>{fe[J]=q[V+it]||J}),V+=Z.length;const he={};ft.forEach((J,it)=>{he[J]=/^[A-Z]{2,3}$/.test(J)?J:q[V+it]||J}),f(Yt),u(J=>J.map(it=>{var oo,no;return{...it,en:((oo=Qt[it.id])==null?void 0:oo.en)||it.en||it.kr,compNameEn:((no=Qt[it.id])==null?void 0:no.compNameEn)||it.compNameEn||it.compName}})),h(J=>J.map(it=>({...it,categoryEn:Ot[`${it.rank}_${it.source}`]||it.categoryEn||it.category}))),S(J=>J.map(it=>({...it,countryEn:$t(le[it.country]||it.country),productEn:$t(Ce[it.product]||it.product),compNameEn:Kt(fe[it.compName]||it.compName)}))),w(J=>J.map(it=>({...it,cntyEn:it.cnty==="TTL"?"TTL":$t(he[it.cnty]||it.cnty)}))),Xt(!1)}catch(W){alert("번역 오류: "+W.message),Xt(!1)}}async function on(){const i=M(e,l,B.products,B.citations,c,R,B.productsCnty,B.citationsCnty);try{await navigator.clipboard.writeText(i)}catch{const y=document.createElement("textarea");y.value=i,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}U(!0),setTimeout(()=>U(!1),2500)}async function nn(){await Xn(e,l,x,d,c)}async function rn(){if(X!=="sending"){ot("sending");try{const i=at(),y=M(e,i.total,i.products,i.citations,i.dotcom,R,i.productsCnty,i.citationsCnty,{weeklyLabels:m,categoryStats:P,unlaunchedMap:(j==null?void 0:j.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,Nt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:st.trim(),subject:et,html:y})})).json();if(!Nt.ok)throw new Error(Nt.error||"발송 실패");ot("ok"),setTimeout(()=>ot(!1),4e3)}catch(i){ot("error"),tt(i.message),setTimeout(()=>{ot(!1),tt("")},5e3)}}}async function an(){var et,bt,Nt,W,se;if(Tt)return;const i=pr(xt.trim());if(!i){At("error"),tt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>At(null),3e3);return}It(!0),At(null),tt(""),lt("");const y=[];try{const D=await fr(i,nt=>tt(nt));if(y.push(`[Sync] parsed keys: ${Object.keys(D).join(", ")||"(없음)"}`),D.meta&&y.push(`[Sync] meta keys: ${Object.keys(D.meta).join(", ")}`),D.productsPartial&&y.push(`[Sync] products: ${D.productsPartial.length}건`),y.push(`[Sync] citations: ${((et=D.citations)==null?void 0:et.length)??0}건`),y.push(`[Sync] citationsCnty: ${((bt=D.citationsCnty)==null?void 0:bt.length)??0}건`),y.push(`[Sync] dotcom: ${D.dotcom?"OK":"(없음)"}`),y.push(`[Sync] productsCnty: ${((Nt=D.productsCnty)==null?void 0:Nt.length)??0}건`),D.meta){const nt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];s(Z=>{const ft={...Z};for(const[mt,q]of Object.entries(D.meta))nt.includes(mt)&&Z[mt]||(ft[mt]=q);return ft}),f(Z=>({...Z,period:D.meta.period,dateLine:D.meta.dateLine,reportNo:D.meta.reportNo}))}if(D.citations&&(h(D.citations),pt.current={...pt.current,citations:D.citations}),D.dotcom&&(k(nt=>({...nt,...D.dotcom})),pt.current={...pt.current,dotcom:{...pt.current.dotcom,...D.dotcom}}),D.productsCnty&&(S(D.productsCnty),pt.current={...pt.current,productsCnty:D.productsCnty}),D.citationsCnty&&(w(D.citationsCnty),pt.current={...pt.current,citationsCnty:D.citationsCnty}),D.monthlyVis&&F&&F(D.monthlyVis),_){const nt={weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,weeklyLabelsFull:D.weeklyLabelsFull||null,prTopicList:D.prTopicList||null};_(nt),pt.current={...pt.current,extra:{...pt.current.extra,...nt}}}const Zt=D.weeklyLabels||((W=D.meta)==null?void 0:W.weeklyLabels);console.log("[SYNC] weeklyLabels:",Zt,"weeklyLabelsFull:",D.weeklyLabelsFull),Zt&&Zt.length&&O(Zt),D.weeklyAll&&N(nt=>({...nt,...D.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(D));const Lt=D.weeklyMap?Object.keys(D.weeklyMap):[],_t=((se=D.productsPartial)==null?void 0:se.map(nt=>nt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Lt.length?Lt:"NONE"),console.log("[SYNC] productsPartial IDs:",_t.length?_t:"NONE"),Lt.length&&_t.length){const nt=_t.filter(ft=>!Lt.includes(ft)),Z=Lt.filter(ft=>!_t.includes(ft));nt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",nt),Z.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",Z),!nt.length&&!Z.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(D.productsPartial){const nt=D.productsPartial.map(Z=>{var fe;const ft=((fe=D.weeklyMap)==null?void 0:fe[Z.id])||[],mt=ft.filter(he=>he!=null&&he>0),q=Z.score,V=Z.prev||0,Yt=Z.vsComp>0?Math.round(q/Z.vsComp*100):100,$t=mt.length>0?mt[mt.length-1]:q,Kt=mt.length>=5?mt[mt.length-5]:mt[0]||0,Qt=q,Ot=V,le=Yt,Ce=V>0&&V!==q?[V,q]:[];return{...Z,score:Qt,prev:Ot,weekly:ft,monthly:Ce,weeklyScore:$t,weeklyPrev:Kt,monthlyScore:q,monthlyPrev:V,compRatio:le,status:le>=100?"lead":le>=80?"behind":"critical"}});u(nt),pt.current={...pt.current,products:nt}}else D.weeklyMap&&u(nt=>nt.map(Z=>{var mt;const ft=(mt=D.weeklyMap)==null?void 0:mt[Z.id];return ft?{...Z,weekly:ft}:Z}));if(D.total){const nt={...pt.current.total,...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}};g(Z=>({...Z,...nt})),pt.current={...pt.current,total:nt}}{let nt=function(V){if(!V)return 0;const Yt=String(V).trim(),$t=Yt.match(/(\d{1,2})월/);if($t){const Ot=parseInt($t[1]);return Ot>=1&&Ot<=12?Ot:0}const Kt=Yt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Kt)return mt[Kt[1].toLowerCase()]||0;const Qt=Yt.match(/\d{4}[-\/](\d{1,2})/);if(Qt){const Ot=parseInt(Qt[1]);return Ot>=1&&Ot<=12?Ot:0}return 0};const Z=new Date().getFullYear(),ft=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let q=0;if(D.derivedPeriod){const V=nt(D.derivedPeriod);V>q&&(q=V)}if(D.citDerivedPeriod){const V=nt(D.citDerivedPeriod);V>q&&(q=V)}q>0&&q<=12&&(s(V=>({...V,period:`${Z}년 ${q}월`})),f(V=>({...V,period:`${ft[q]} ${Z}`})))}if(!D.total&&D.productsPartial&&D.productsPartial.length>0){const nt=D.productsPartial,Z=+(nt.reduce((mt,q)=>mt+q.score,0)/nt.length).toFixed(1),ft=+(nt.reduce((mt,q)=>mt+(q.vsComp||0),0)/nt.length).toFixed(1);g(mt=>({...mt,score:Z,vsComp:ft,rank:Z>=ft?1:2}))}if(setTimeout(()=>{uo(t,{meta:D.meta||null,total:D.total?{...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}}:null,productsPartial:D.productsPartial||null,weeklyMap:D.weeklyMap||null,weeklyLabels:D.weeklyLabels||null,weeklyLabelsFull:D.weeklyLabelsFull||null,weeklyAll:D.weeklyAll||null,citations:D.citations||null,dotcom:D.dotcom||null,productsCnty:D.productsCnty||null,citationsCnty:D.citationsCnty||null,citationsByCnty:D.citationsByCnty||null,dotcomByCnty:D.dotcomByCnty||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,prTopicList:D.prTopicList||null,monthlyVis:D.monthlyVis||null,weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,monthlyPR:D.monthlyPR||null,monthlyPRLabels:D.monthlyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,monthlyBrandPrompt:D.monthlyBrandPrompt||null,monthlyBrandPromptLabels:D.monthlyBrandPromptLabels||null,dotcomTrend:D.dotcomTrend||null,dotcomTrendMonths:D.dotcomTrendMonths||null}),setTimeout(Zo,250)},100),lt(y.join(`
`)),At("ok"),tt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const nt={};D.productsPartial&&(nt.products=D.productsPartial.map(Z=>{var $t;const ft=(($t=D.weeklyMap)==null?void 0:$t[Z.id])||[],mt=Z.vsComp>0?Z.score/Z.vsComp*100:100,q=ft.find(Kt=>Kt!=null&&Kt>0),V=Z.prev!=null&&Z.prev>0?Z.prev:q||0,Yt=V>0?[V,Z.score]:[];return{...Z,prev:V,weekly:ft,monthly:Yt,compRatio:Math.round(mt),status:mt>=100?"lead":mt>=80?"behind":"critical"}})),D.productsCnty&&(nt.productsCnty=D.productsCnty),D.citations&&(nt.citations=D.citations),D.citationsCnty&&(nt.citationsCnty=D.citationsCnty);try{await eo(nt)}catch{}tt("동기화 + 번역 완료!")}}catch(D){y.push(`[ERROR] ${D.message}`),At("error"),tt(D.message),lt(y.join(`
`))}finally{It(!1),setTimeout(()=>{At(null),tt("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:yt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:$},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:$},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:$},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(gr,{...Xo||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:$},children:"Google Sheets URL"}),n.jsx("input",{value:xt,onChange:i=>Ut(i.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ht,fontSize:11,padding:"7px 9px",marginBottom:8,color:xt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:an,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Tt?"wait":"pointer",background:Tt?"#1E293B":yt,fontSize:12,fontWeight:700,color:Tt?"#94A3B8":"#FFFFFF",fontFamily:$,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(ro,{size:13,style:{animation:Tt?"spin 1s linear infinite":"none"}}),Tt?"동기화 중...":"구글 시트 동기화"]}),(Ft||Tt&&Wt)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.6,background:Ft==="ok"?"#14532D":Ft==="error"?"#450A0A":"#1E293B",color:Ft==="ok"?"#86EFAC":Ft==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Ft==="ok"?"#22C55E33":Ft==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Wt}),G&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[G,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(G).then(()=>{const i=document.getElementById("vis-debug-copy-btn");i&&(i.textContent="복사됨!",setTimeout(()=>{i.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:$,cursor:"pointer"},children:"로그 복사"})]}),n.jsx(Or,{url:xt,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:en,disabled:jt,style:{width:"100%",padding:"9px 0",background:jt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:$,cursor:jt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:jt?.6:1},children:[n.jsx(sn,{size:13})," ",jt?"번역 중...":"AI 번역 (EN)"]}),ct&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:$},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:$},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>Et(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:$,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:eo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:$,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:nn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(ln,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Mt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"발행 월"}),n.jsx("select",{value:ae,onChange:i=>Jo(i.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:Yo.map(i=>n.jsxs("option",{value:i,children:[i," · ",we(i),ue.find(y=>y.month===i)?" ✓ 게시됨":""]},i))})]}),Mt&&dt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",gt||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:rt||"",onChange:i=>dt(i.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",gt||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(i=>n.jsx("option",{value:i,children:i},i))]}),rt&&n.jsx("button",{onClick:()=>dt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:$,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:Qo,disabled:Bt,style:{width:"100%",padding:"9px 0",background:Bt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:$,cursor:Bt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(io,{size:12}),Bt?"게시 중...":Mt?`${we(ae)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:$,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:Ze,onChange:i=>Ko(i.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:tn,disabled:vt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:vt?"#1E293B":"#166534",color:vt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:$,cursor:vt?"wait":"pointer",marginBottom:6},children:[n.jsx(io,{size:12}),vt?"통합 게시 중...":"통합 대시보드 게시"]}),ie&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.8,background:ie.startsWith("ERROR")?"#450A0A":"#14532D",color:ie.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:ie.startsWith("ERROR:")?ie.slice(6):ie})]})]}),n.jsxs("button",{onClick:async()=>{const i={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(i).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const bt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:i})})).json();bt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(bt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(cn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Pt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:$,lineHeight:1.8,background:Pt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Pt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Pt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Pt.startsWith("ERROR:")?Pt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(Ne,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Pt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Mt&&(oe==null?void 0:oe.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:$,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>to(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:$,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:oe.urls.ko},{label:"EN",url:oe.urls.en}].map(({label:i,url:y})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:$,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i,": ",y]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${y}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ne,{size:10})})]},i)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:oe.ts?new Date(oe.ts).toLocaleString("ko-KR"):""})]}),Mt&&ue.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:$,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ue.length,")"]})}),ue.map(i=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:$},children:we(i.month)}),n.jsx("button",{onClick:()=>{confirm(`${we(i.month)} 게시본을 삭제할까요?`)&&to(i.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:$,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:i.urls.ko},{label:"EN",url:i.urls.en}].map(({label:y,url:et})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:et,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:$,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[y,": ",et]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${et}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ne,{size:10})})]},y)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:i.ts?new Date(i.ts).toLocaleString("ko-KR"):""})]},i.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:i=>o(y=>({...y,reportType:i.target.value})),style:{...ht,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:"보고서 번호"}),n.jsx("input",{value:e.reportNo,onChange:i=>o(y=>({...y,reportNo:i.target.value})),style:{...ht}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["기간 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:i=>o(y=>({...y,period:i.target.value})),style:{...ht}})]})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:i=>o(y=>({...y,title:i.target.value})),rows:4,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:i=>o(y=>({...y,team:i.target.value})),style:{...ht,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:$},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:i=>o(y=>({...y,dateLine:i.target.value})),style:{...ht,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Notice"}),n.jsx("button",{onClick:()=>o(i=>({...i,showNotice:!i.showNotice})),style:{background:e.showNotice?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:i=>o(y=>({...y,noticeText:i.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ht,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(i=>({...i,showKpiLogic:!i.showKpiLogic})),style:{background:e.showKpiLogic?yt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:i=>o(y=>({...y,kpiLogicText:i.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ht,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:$,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:i=>o(y=>({...y,titleFontSize:Number(i.target.value)})),style:{width:"100%",accentColor:yt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:i=>o(y=>({...y,titleColor:i.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:$},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([i,y])=>n.jsx("button",{onClick:()=>o(et=>({...et,titleColor:i})),title:y,style:{width:16,height:16,borderRadius:"50%",background:i,border:e.titleColor===i?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},i))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:i,label:y})=>n.jsx("button",{onClick:()=>o(et=>({...et,[i]:!et[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[i]?yt:"#1E293B",color:e[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:y},i))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:$},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?yt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(i=>({...i,trendMode:(i.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:$},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?yt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?yt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:$},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:$},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,monthlyReportBody:"⏳ AI 생성 중..."}));const i=await St("monthlyReportBody",{products:at().products,productsCnty:at().productsCnty,total:at().total,citations:at().citations,todoText:e.todoText||"",period:e.period||""},R);o(y=>({...y,monthlyReportBody:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,monthlyReportBody:`[AI 실패: ${i.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:i=>o(y=>({...y,monthlyReportBody:i.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:$},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,totalInsight:"⏳ AI 생성 중..."}));const i=await St("totalInsight",{products:at().products,productsCnty:at().productsCnty,total:at().total,todoText:e.todoText||""},R);o(y=>({...y,totalInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,totalInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:i=>o(y=>({...y,totalInsight:i.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productInsight:"⏳ AI 생성 중..."}));const i=await St("product",{products:at().products,total:at().total},R);o(y=>({...y,productInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,productInsight:`[AI 실패: ${i.message}]

`+jr(at().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductInsight:!i.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?yt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:i=>o(y=>({...y,productInsight:i.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,productHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 GEO Visibility"},R);o(y=>({...y,productHowToRead:i}))}catch{o(i=>({...i,productHowToRead:Pr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductHowToRead:!i.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?yt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:i=>o(y=>({...y,productHowToRead:i.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyInsight:"⏳ AI 생성 중..."}));const i=await St("cnty",{productsCnty:at().productsCnty},R);o(y=>({...y,cntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,cntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyInsight:!i.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?yt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:i=>o(y=>({...y,cntyInsight:i.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,cntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 GEO Visibility"},R);o(y=>({...y,cntyHowToRead:i}))}catch{o(i=>({...i,cntyHowToRead:Dr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyHowToRead:!i.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?yt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:i=>o(y=>({...y,cntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:i=>o(y=>({...y,prNotice:i.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:i=>o(y=>({...y,prTopicDescsRaw:i.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:i=>o(y=>({...y,prTopicPromptsRaw:i.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:i=>o(y=>({...y,bpNotice:i.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationInsight:"⏳ AI 생성 중..."}));const i=await St("citation",{citations:at().citations},R);o(y=>({...y,citationInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citationInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationInsight:!i.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?yt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:i=>o(y=>({...y,citationInsight:i.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citationHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"Citation 도메인별 현황"},R);o(y=>({...y,citationHowToRead:i}))}catch{o(i=>({...i,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationHowToRead:!i.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?yt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:i=>o(y=>({...y,citationHowToRead:i.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainInsight:"⏳ AI 생성 중..."}));const i=await St("citDomain",{citationsCnty:at().citationsCnty},R);o(y=>({...y,citDomainInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citDomainInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainInsight:!i.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?yt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:i=>o(y=>({...y,citDomainInsight:i.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citDomainHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"도메인별 Citation 현황"},R);o(y=>({...y,citDomainHowToRead:i}))}catch{o(i=>({...i,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainHowToRead:!i.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?yt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:i=>o(y=>({...y,citDomainHowToRead:i.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyInsight:"⏳ AI 생성 중..."}));const i=await St("citCnty",{citationsCnty:at().citationsCnty},R);o(y=>({...y,citCntyInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citCntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyInsight:!i.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?yt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:i=>o(y=>({...y,citCntyInsight:i.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citCntyHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"국가별 Citation 도메인"},R);o(y=>({...y,citCntyHowToRead:i}))}catch{o(i=>({...i,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyHowToRead:!i.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?yt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:i=>o(y=>({...y,citCntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdInsight:"⏳ AI 생성 중..."}));const i=await St("citPrd",{citationsCnty:at().citationsCnty},R);o(y=>({...y,citPrdInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,citPrdInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdInsight:!i.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?yt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:i=>o(y=>({...y,citPrdInsight:i.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,citPrdHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"제품별 Citation"},R);o(y=>({...y,citPrdHowToRead:i}))}catch{o(i=>({...i,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdHowToRead:!i.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?yt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:i=>o(y=>({...y,citPrdHowToRead:i.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),p.length>0&&(()=>{const i=[...new Set(B.productsCnty.map(y=>y.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:$},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:i.map(y=>{const et=(e.cntyProductFilter||{})[y]!==!1;return n.jsx("button",{onClick:()=>o(bt=>({...bt,cntyProductFilter:{...bt.cntyProductFilter||{},[y]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:y},y)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomInsight:"⏳ AI 생성 중..."}));const i=await St("dotcom",{dotcom:at().dotcom},R);o(y=>({...y,dotcomInsight:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,dotcomInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomInsight:!i.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?yt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:i=>o(y=>({...y,dotcomInsight:i.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,dotcomHowToRead:"⏳ AI 생성 중..."}));const i=await St("howToRead",{section:"닷컴 Citation"},R);o(y=>({...y,dotcomHowToRead:i}))}catch{o(y=>({...y,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomHowToRead:!i.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?yt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:i=>o(y=>({...y,dotcomHowToRead:i.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:i=>o(y=>({...y,todoNotice:i.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(y=>({...y,todoText:"⏳ AI 생성 중..."}));const i=await St("todo",{products:at().products},R);o(y=>({...y,todoText:i}))}catch(i){console.error("[AI]",i),o(y=>({...y,todoText:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:3},children:[n.jsx(kt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showTodo:!i.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?yt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:i=>o(y=>({...y,todoText:i.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ht,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:$},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:on,style:{width:"100%",padding:"9px 0",background:z?"#14532D":"transparent",border:`1px solid ${z?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:z?"#86EFAC":"#64748B",fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:z?n.jsxs(n.Fragment,{children:[n.jsx(Ge,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Io,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:$},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:st,onChange:i=>ut(i.target.value),placeholder:"recipient@example.com",style:{...ht,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:rn,disabled:X==="sending"||!st.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:X==="sending"||!st.trim()?"not-allowed":"pointer",background:X==="ok"?"#14532D":X==="error"?"#7F1D1D":X==="sending"?"#1E3A5F":st.trim()?"#1D4ED8":"#1E293B",color:X==="ok"?"#86EFAC":X==="error"?"#FCA5A5":st.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:X==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(ro,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):X==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(Ge,{size:12})," 발송 완료!"]}):X==="error"?n.jsxs(n.Fragment,{children:[n.jsx(ao,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(ao,{size:12})," 메일 발송"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:$,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const ce="weekly-report",Ro="geo-weekly-report-cache";function Gr({meta:t,total:e,products:o,citations:a,dotcom:s,productsCnty:r=[],citationsCnty:f=[],lang:l="ko",weeklyLabels:g,weeklyAll:x,categoryStats:u}){const d=Y.useRef(null),h=Y.useMemo(()=>Ke(t,e,o,a,s,l,r,f,{weeklyLabels:g,weeklyAll:x,categoryStats:u}),[t,e,o,a,s,l,r,f,g,x,u]);return hn.useEffect(()=>{const c=d.current;if(!c)return;const k=c.contentDocument||c.contentWindow.document;k.open(),k.write(h),k.close();const p=()=>{try{k.body.style.overflow="hidden",k.documentElement.style.overflow="hidden";const S=k.documentElement.scrollHeight;S&&(c.style.height=S+20+"px")}catch{}};setTimeout(p,150),setTimeout(p,400),setTimeout(p,1e3),setTimeout(p,2e3)},[h]),n.jsx("iframe",{ref:d,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Hr({meta:t,total:e,products:o,citations:a,dotcom:s,productsCnty:r=[],citationsCnty:f=[],lang:l="ko",weeklyLabels:g,weeklyAll:x,categoryStats:u}){const[d,h]=Y.useState(!1),c=Y.useMemo(()=>Ke(t,e,o,a,s,l,r,f,{weeklyLabels:g,weeklyAll:x,categoryStats:u}),[t,e,o,a,s,l,r,f,g,x,u]);async function k(){try{await navigator.clipboard.writeText(c)}catch{const p=document.createElement("textarea");p.value=c,document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p)}h(!0),setTimeout(()=>h(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:$},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:k,style:{padding:"6px 14px",borderRadius:7,border:"none",background:d?"#14532D":yt,color:d?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ge,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Io,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:c})})]})}function Ur(){const t=Y.useRef(Dn(Ro)).current,[e,o]=Y.useState({...ke,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,s]=Y.useState({...ke,...(t==null?void 0:t.metaEn)??{}}),[r,f]=Y.useState((t==null?void 0:t.total)??Ln),[l,g]=Y.useState((t==null?void 0:t.products)??$n),[x,u]=Y.useState((t==null?void 0:t.citations)??Pn),[d,h]=Y.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Rn),[c,k]=Y.useState((t==null?void 0:t.productsCnty)??In),[p,S]=Y.useState((t==null?void 0:t.citationsCnty)??jn),[C,w]=Y.useState((t==null?void 0:t.weeklyLabels)??null),[B,R]=Y.useState((t==null?void 0:t.weeklyAll)??{}),[L,v]=Y.useState(null),[I,O]=Y.useState("preview"),[N,m]=Y.useState("ko"),[A,T]=Y.useState([]),[E,M]=Y.useState(""),[b,F]=Y.useState(!1),[_,P]=Y.useState(""),[j,H]=Y.useState(null),[rt,dt]=Y.useState(!0);Y.useEffect(()=>{let tt=!1;const G=Kn(e.period)||`${new Date().getMonth()+1}월`,lt=qn(G);async function z(){var U,st,ut;try{const X=await fetch("/api/tracker-snapshot-v2"),ot=X.ok?await X.json():null;if(ot!=null&&ot.ok&&((ut=(st=(U=ot.data)==null?void 0:U.quantitativeGoals)==null?void 0:st.rows)!=null&&ut.length)){const ct=ho(ot.data,lt);if(ct!=null&&ct.length&&!tt){v(ct);return}}}catch{}try{const[{parseKPISheet:X},ot]=await Promise.all([He(()=>import("./sheetParser-BGRKNm5Y.js"),[]),He(()=>import("./xlsx-2l-k0XfJ.js").then(Vt=>Vt.x),__vite__mapDeps([0,1]))]),ct=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Et=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${ct}&headers=1`,jt=await fetch(Et,{cache:"no-store"});if(!jt.ok)return;const Xt=await jt.text(),Bt=ot.read(Xt,{type:"string"}),re=Bt.Sheets[Bt.SheetNames[0]],Pt=ot.utils.sheet_to_json(re,{header:1,defval:""}),Dt=X(Pt),vt=ho(Dt,lt);vt!=null&&vt.length&&!tt&&v(vt)}catch{}}return z(),()=>{tt=!0}},[e.period]);const gt=N==="en"?a:e,pt=N==="en"?s:o,at=Y.useMemo(()=>Ae(l,c,x,p,N),[l,c,x,p,N]);Y.useEffect(()=>{Nn(ce).then(T)},[]);const xt=Y.useRef(null);function Ut(tt,G=2e3){clearTimeout(xt.current),P(tt),xt.current=setTimeout(()=>P(""),G)}Y.useEffect(()=>()=>clearTimeout(xt.current),[]);const Tt=Y.useRef(!1);Y.useEffect(()=>{let tt=!1;return Te(ce).then(G=>{tt||!G||(Tt.current=!0,G.meta&&o(lt=>({...lt,...G.meta})),G.total&&f(lt=>({...lt,...G.total})),G.citations&&u(G.citations),G.dotcom&&h(lt=>({...lt,...G.dotcom})),G.productsCnty&&k(G.productsCnty),G.citationsCnty&&S(G.citationsCnty),G.weeklyLabels&&w(G.weeklyLabels),G.weeklyAll&&R(lt=>({...lt,...G.weeklyAll})),G.productsPartial?g(G.productsPartial.map(lt=>{var st;const z=((st=G.weeklyMap)==null?void 0:st[lt.id])||[],U=lt.vsComp>0?lt.score/lt.vsComp*100:100;return{...lt,weekly:z,monthly:[],compRatio:Math.round(U),status:U>=100?"lead":U>=80?"behind":"critical"}})):G.weeklyMap&&g(lt=>lt.map(z=>{var st;const U=(st=G.weeklyMap)==null?void 0:st[z.id];return U?{...z,weekly:U}:z})))}),()=>{tt=!0}},[]),Y.useEffect(()=>{Mn(Ro,{metaKo:e,metaEn:a,total:r,products:l,citations:x,dotcom:d,productsCnty:c,citationsCnty:p,weeklyLabels:C,weeklyAll:B})},[e,a,r,l,x,d,c,p,C,B]);async function It(){if(!j)return;const G=await On(ce,j,{metaKo:e,metaEn:a,total:r,products:l,citations:x,dotcom:d,productsCnty:c,citationsCnty:p,weeklyLabels:C,weeklyAll:B});G&&T(G),Ut(G?"저장 완료!":"저장 실패")}async function Ft(){var lt;const tt=E.trim()||`${gt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,G=await _n(ce,tt,{metaKo:e,metaEn:a,total:r,products:l,citations:x,dotcom:d,productsCnty:c,citationsCnty:p,weeklyLabels:C,weeklyAll:B});G&&(T(G),M(""),H(((lt=G[0])==null?void 0:lt.ts)||null)),Ut(G?"새로 저장 완료!":"저장 실패")}function At(tt){const G=tt.data;o({...ke,...G.metaKo||G.meta||{}}),s({...ke,...G.metaEn||{}}),G.total&&f(G.total),G.products&&g(G.products),G.citations&&u(G.citations),G.dotcom&&h(G.dotcom),G.productsCnty&&k(G.productsCnty),G.citationsCnty&&S(G.citationsCnty),G.weeklyLabels&&w(G.weeklyLabels),G.weeklyAll&&R(G.weeklyAll),H(tt.ts),Ut(`"${tt.name}" 불러옴`)}async function Wt(tt){const G=A[tt];if(!G)return;const lt=await zn(ce,G.ts);lt&&T(lt),j===G.ts&&H(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:$},children:[rt&&n.jsx(zr,{mode:ce,meta:gt,setMeta:pt,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:s,total:r,setTotal:f,products:l,setProducts:g,citations:x,setCitations:u,dotcom:d,setDotcom:h,productsCnty:c,setProductsCnty:k,citationsCnty:p,setCitationsCnty:S,resolved:at,previewLang:N,setPreviewLang:m,snapshots:A,setSnapshots:T,setWeeklyLabels:w,setWeeklyAll:R,weeklyLabels:C,weeklyAll:B,generateHTML:Ke}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>dt(tt=>!tt),title:rt?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:rt?n.jsx(dn,{size:16}):n.jsx(pn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:tt,tab:G,lang:lt,label:z})=>{const U=G==="code"?I==="code":I==="preview"&&N===lt;return n.jsx("button",{onClick:()=>{O(G),lt&&m(lt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:U?"#1E293B":"transparent",color:U?"#FFFFFF":"#475569",fontSize:11,fontWeight:U?700:500,fontFamily:$,cursor:"pointer"},children:z},tt)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[_&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:$},children:_}),n.jsxs("button",{onClick:It,disabled:!j,title:j?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:j?"pointer":"default",background:j?"#1D4ED8":"#1E293B",color:j?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4,opacity:j?1:.5},children:[n.jsx(so,{size:11})," 저장"]}),n.jsx("input",{value:E,onChange:tt=>M(tt.target.value),placeholder:"버전 이름...",onKeyDown:tt=>tt.key==="Enter"&&Ft(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:$,outline:"none"}}),n.jsxs("button",{onClick:Ft,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4},children:[n.jsx(so,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>F(!b),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:b?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:$,display:"flex",alignItems:"center",gap:4},children:[n.jsx(un,{size:11})," 불러오기 ",A.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",A.length,")"]})]}),b&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:tt=>tt.stopPropagation(),children:A.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:$,textAlign:"center"},children:"저장된 버전이 없습니다"}):A.map((tt,G)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:j===tt.ts?"#1E3A5F":"#0F172A",border:j===tt.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:$,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:tt.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:$},children:new Date(tt.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{At(tt),F(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:$},children:"적용"}),n.jsx("button",{onClick:()=>Wt(G),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(fn,{size:10})})]},tt.ts))})]})]})]}),I==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:n.jsx(Gr,{meta:gt,total:r,products:at.products,citations:at.citations,dotcom:d,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:N,weeklyLabels:C,weeklyAll:B,categoryStats:L})})}):n.jsx(Hr,{meta:gt,total:r,products:at.products,citations:at.citations,dotcom:d,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:N,weeklyLabels:C,weeklyAll:B,categoryStats:L}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:$},children:["v","3.1.9"]})})]})]})}gn.createRoot(document.getElementById("root")).render(n.jsx(Ur,{}));
