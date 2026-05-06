const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-2l-k0XfJ.js","assets/react-BzJiA2Qb.js"])))=>i.map(i=>d[i]);
import{j as r,b as q,R as Ue,L as Po,D as Oo,G as He,A as Mo,c as We,S as St,C as Te,d as yo,e as Ve,P as zo,f as _o,h as Ke,F as Go,T as Uo,i as Ho}from"./react-BzJiA2Qb.js";import{R as Wo}from"./react-dom-Dkh9X5ZJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=o(c);fetch(c.href,n)}})();const Vo="modulepreload",Ko=function(t){return"/admin/weekly-report/"+t},qe={},$e=function(e,o,i){let c=Promise.resolve();if(o&&o.length>0){let f=function(w){return Promise.all(w.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=f(o.map(w=>{if(w=Ko(w),w in qe)return;qe[w]=!0;const d=w.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${h}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Vo,d||(y.as="script"),y.crossOrigin="",y.href=w,p&&y.setAttribute("nonce",p),document.head.appendChild(y),d)return new Promise((s,C)=>{y.addEventListener("load",s),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${w}`)))})}))}function n(f){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=f,window.dispatchEvent(a),!a.defaultPrevented)throw f}return c.then(f=>{for(const a of f||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},_="'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",qo=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function ne(t){const e=qo.indexOf(t);return e>=0?e:999}function wt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Je=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function mo(t){return Je.filter(e=>t.includes(e)).concat(t.filter(e=>!Je.includes(e)))}const Jo={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function bo(t){return Jo[String(t||"").trim().toUpperCase()]||t}function ce(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Yo(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Le(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function se(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Xo(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},i={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},c=[],n=[];Object.entries(t).forEach(([p,w])=>{if(!w)return;const d=w.Total||w.TTL||w.TOTAL;if(d){const h=d.LG||d.lg||[],y=h.length>0?h[h.length-1]:null,s=h.length>=2?h[h.length-2]:null;let C="",u=0;Object.entries(d).forEach(([F,S])=>{if(F==="LG"||F==="lg")return;const b=Array.isArray(S)&&S.length?S[S.length-1]:0;b>u&&(u=b,C=F)}),y!=null&&y>0&&c.push({id:p,kr:o[p]||p,bu:i[p]||"OTHER",score:y,prev:s,vsComp:u,compName:C,category:o[p]||p})}Object.entries(w).forEach(([h,y])=>{if(h==="Total"||h==="TTL"||h==="TOTAL")return;const s=y.LG||y.lg||[],C=s.length>0?s[s.length-1]:null,u=s.length>=2?s[s.length-2]:null;if(C==null||C<=0)return;let F="",S=0;Object.entries(y).forEach(([b,g])=>{if(b==="LG"||b==="lg")return;const x=Array.isArray(g)&&g.length?g[g.length-1]:0;x>S&&(S=x,F=b)}),n.push({product:o[p]||p,country:h,score:C,prev:u,compScore:S,compName:F})})});const f=(e==null?void 0:e[e.length-1])||"This Week",a=(e==null?void 0:e[e.length-2])||"Last Week";return{products:c,productsCnty:n,lastLabel:f,prevLabel:a}}function Zo(t,e,o,i){if(!t.length)return"";const c=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},n=["MS","HS","ES"],f={};t.forEach(p=>{const w=p.bu||"OTHER";f[w]||(f[w]=[]),f[w].push(p)});const a=[];return n.forEach(p=>{const w=(f[p]||[]).slice().sort((d,h)=>ne(d.kr||d.category||d.id)-ne(h.kr||h.category||h.id));w.forEach((d,h)=>{const y=Yo(d.score,d.prev),s=se(d.score,d.vsComp)||"#FFFFFF";a.push(`<tr>
        ${h===0?`<td rowspan="${w.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;">${wt(d.kr||d.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;font-weight:700;background:${s};">${ce(d.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;background:${s};">${ce(d.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;background:${s};">${wt(d.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;font-weight:700;background:${s};">${Le(d.score,d.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${_};text-align:center;">${y}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${i})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
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
    <tbody>${a.join("")}</tbody>
  </table>`}function Qo(t,e,o,i){const c=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={},f=new Set,a=new Set;t.forEach(s=>{!s.country||!s.product||(f.add(s.country),a.add(s.product),n[s.product]||(n[s.product]={}),n[s.product][s.country]=s)});const p=mo(Array.from(f)),w=Array.from(a).sort((s,C)=>ne(s)-ne(C));if(!w.length||!p.length)return"";const d={};(o||[]).forEach(s=>{[s.kr,s.category,s.id,s.en].filter(Boolean).forEach(u=>{d[u]=s})});const h='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+p.map(s=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${wt(bo(s))}</th>`).join(""),y=[];return w.forEach((s,C)=>{const u=C%2===0?"#FFFFFF":"#FAFAFA",F=d[s],b=(F?se(F.score,F.vsComp):null)||u,g=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;font-weight:700;background:${b};">${F?ce(F.score):"—"}</td>`,x=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;font-weight:700;background:${b};">${F?Le(F.score,F.vsComp):"—"}</td>`,E=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;background:${b};color:#1A1A1A;font-weight:600;">${F!=null&&F.compName?wt(F.compName):"—"}</td>`,m=p.map(T=>{var R;const A=(R=n[s])==null?void 0:R[T],N=(A?se(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;font-weight:700;background:${N};">${A?ce(A.score):"—"}</td>`}).join(""),k=p.map(T=>{var R;const A=(R=n[s])==null?void 0:R[T],N=(A?se(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;font-weight:700;background:${N};">${A?Le(A.score,A.compScore):"—"}</td>`}).join(""),B=p.map(T=>{var R;const A=(R=n[s])==null?void 0:R[T],N=(A?se(A.score,A.compScore):null)||u;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${_};text-align:center;background:${N};color:#1A1A1A;font-weight:600;">${A!=null&&A.compName?wt(A.compName):"—"}</td>`}).join("");y.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${_};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${wt(s)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${_};font-weight:600;background:#F5F5F5;white-space:nowrap;">${c.lg} (%)</td>
        ${g}${m}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${_};background:#F5F5F5;white-space:nowrap;">${c.ratio}</td>
        ${x}${k}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${_};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${E}${B}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${c.title} <span style="font-size:12px;font-weight:400;color:#666;">(${i})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${c.metric}</th>
        ${h}
      </tr>
    </thead>
    <tbody>${y.join("")}</tbody>
  </table>
  </div>`}function tn(t,e,o,i){const c=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${i})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${i})`,product:"제품"},n={},f=new Set,a=new Set;t.forEach(y=>{!y.country||!y.product||(f.add(y.country),a.add(y.product),n[y.product]||(n[y.product]={}),n[y.product][y.country]=y)});const p=mo(Array.from(f)),w=Array.from(a).sort((y,s)=>ne(y)-ne(s));if(!w.length||!p.length)return"";const d=p.map(y=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${wt(bo(y))}</th>`).join(""),h=w.map(y=>{const s=p.map(C=>{var m;const u=(m=n[y])==null?void 0:m[C];if(!u||u.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${_};text-align:center;color:#999;">—</td>`;const F=u.score,S=u.prev,b=S!=null?+(F-S).toFixed(1):null,g=b==null?"#999":b>0?"#16A34A":b<0?"#DC2626":"#666",x=b==null?"":b>0?"▲":b<0?"▼":"─",E=b!=null?`${x}${Math.abs(b).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${_};text-align:center;">
        <div style="font-weight:700;color:#111;">${ce(F)}%</div>
        <div style="font-size:9px;color:${g};">${E}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${wt(y)}</td>
      ${s}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${c.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${c.product}</th>
      ${d}
    </tr></thead>
    <tbody>${h}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${_};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function en(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,f)=>n+(f.score||0),0),c=t.map((n,f)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:center;">${f+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};">${wt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function on(t,e){const o=(t||[]).filter(a=>a.cnty==="TTL"||a.cnty==="TOTAL"||!a.cnty);if(!o.length)return"";o.sort((a,p)=>(p.citations||0)-(a.citations||0));const i=o.slice(0,20),c=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((a,p)=>a+(p.citations||0),0),f=i.map((a,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};">${wt(a.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};">${wt(a.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;font-weight:700;">${(a.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;">${n>0?(a.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${c.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${c.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${c.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${c.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${f}</tbody>
  </table>`}function nn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},c=Object.keys(o).filter(a=>o[a]!=null);if(!c.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},f=c.map(a=>{const p=o[a]||0,w=i[a]||0,d=p-w,h=d>0?"LG":d<0?"SS":"=",y=d>0?"#86EFAC":d<0?"#FCA5A5":"#FFFFFF",s=d>0?"#14532D":d<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${y};color:${s};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};font-weight:${a==="TTL"?"900":"600"};">${wt(a)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;">${w.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:right;font-weight:700;">${d>0?"+":""}${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${_};text-align:center;font-weight:900;">${h}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${_};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${f}</tbody>
  </table>`}function rn(t,e){var f;if(!t||!t.length)return"";const o=((f=t[0])==null?void 0:f.targetMonth)||"3월",i=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function c(a){return a>=80?"#D1FAE5":a>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(a=>{const p=(a.monthRate||0).toFixed(0),w=(a.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${_};background:#F5F5F5;">${wt(a.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(a.monthRate)};">${p}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.monthActual||0).toLocaleString()} / ${(a.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${c(a.progressRate)};">${w}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.cumActual||0).toLocaleString()} / ${(a.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${_};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${_};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${_};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function je(t,e,o,i,c={},n="ko",f=[],a=[],p={}){const{weeklyAll:w={},weeklyLabels:d=[],categoryStats:h=null}=p,y=Xo(w,d),s=y.products.length?y.products:o,C=y.productsCnty.length?y.productsCnty:f,u=y.lastLabel,F=y.prevLabel,S=n==="en"?"GEO Weekly Report":"GEO 주간 보고서",b=t.period||u||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${wt(S)} — ${wt(b)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${_} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${_};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${_};">${wt(S)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${_};">${wt(b)} · ${u?`${wt(u)} ${n==="en"?"data":"기준"}`:""}</p>
    </div>

    ${Zo(s,n,u,F)}
    ${tn(C,n,u,F)}
    ${Qo(C,n,s,u)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${_};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${en(i,n)}
    ${on(a,n)}
    ${nn(c,n)}

    ${rn(h,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${_};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const ht="#CF0652",L="'LG Smart','Arial Narrow',Arial,sans-serif",fe={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,noticeText:"",showNotice:!1,todoText:"",showTodo:!1,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},an={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},sn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],ln={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},cn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],dn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],pn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],xo=3;function un(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==xo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function hn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:xo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const ke={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function Zt(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function gn(t){try{const e=await fetch(Zt(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function fn(t,e,o){try{const i=await fetch(Zt(t).snapshots,{method:"POST",headers:ke,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const c=await i.json();return c.ok?c.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function yn(t,e,o){try{const i=await fetch(`${Zt(t).snapshots}/${e}`,{method:"PUT",headers:ke,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const c=await i.json();return c.ok?c.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function mn(t,e){try{const o=await fetch(`${Zt(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function At(t,e,o="ko",i=""){try{const c=await fetch("/api/generate-insight",{method:"POST",headers:ke,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!c.ok){const f=await c.json().catch(()=>({}));throw new Error(f.error||`HTTP ${c.status}`)}const n=await c.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(c){throw console.error("[API] generateAIInsight failed:",c.message),c}}async function ve(t){try{const e=await fetch(Zt(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function Ye(t){try{const e=await fetch(Zt(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function bn(t,e,o={}){const{includeProgressTracker:i=!1,includePromptList:c=!1}=o,[n,f]=await Promise.all([ve("dashboard").catch(()=>null),ve("visibility").catch(()=>null)]),a={...n||{},...f||{}};if(n&&Object.keys(n).forEach(R=>{a[R]==null&&n[R]!=null&&(a[R]=n[R])}),f!=null&&f.meta&&(n!=null&&n.meta)&&(a.meta={...n.meta||{},...f.meta||{}}),!a||!Object.keys(a).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const p=a.meta||{},w=a.total||{},h=(a.productsPartial||a.products||[]).map(R=>{var W;const I=R.weekly||((W=a.weeklyMap)==null?void 0:W[R.id])||[],P=R.vsComp>0?R.score/R.vsComp*100:100;return{...R,weekly:I,monthly:R.monthly||[],compRatio:R.compRatio||Math.round(P),status:R.status||(P>=100?"lead":P>=80?"behind":"critical")}}),y=a.citations||[],s=a.dotcom||{},C=a.productsCnty||[],u=a.citationsCnty||[],F=a.weeklyLabels||null,S=a.weeklyAll||{},b=a.citationsByCnty||{},g=a.dotcomByCnty||{},x=e(h,C,y,u,"ko"),E=e(h,C,y,u,"en"),m={appendixPrompts:a.appendixPrompts||[],weeklyPR:a.weeklyPR||[],weeklyPRLabels:a.weeklyPRLabels||[],weeklyBrandPrompt:a.weeklyBrandPrompt||[],weeklyBrandPromptLabels:a.weeklyBrandPromptLabels||[],unlaunchedMap:a.unlaunchedMap||{},prTopicList:a.prTopicList||[],weeklyLabelsFull:a.weeklyLabelsFull||[]},k={monthlyVis:a.monthlyVis||[],includeProgressTracker:i,includePromptList:c},B=t(p,w,x.products,x.citations,s,"ko",x.productsCnty,x.citationsCnty,F,S,b,g,k,m),T=t({...p,title:p.title||"GEO KPI Dashboard"},w,E.products,E.citations,s,"en",E.productsCnty,E.citationsCnty,F,S,b,g,k,m),A=`${p.period||""} ${p.title||"KPI Dashboard"}`.trim(),N=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:A,htmlKo:B,htmlEn:T})})).json();if(!N.ok)throw new Error(N.error||"게시 실패");return N}async function Xe(t,e){try{const o=await fetch(Zt(t).syncData,{method:"POST",headers:ke,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const xn={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Se={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},Ze={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function xe(t,e,o,i,c){return c!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Se[n.kr]||n.kr,compName:n.compNameEn||Ze[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||xn[n.country]||n.country,product:n.productEn||Se[n.product]||n.product,compName:n.compNameEn||Ze[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Se[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function vn(t,{from:e="ko",to:o="en"}={}){const c=[];for(let n=0;n<t.length;n+=20){const f=t.slice(n,n+20),a=await Promise.all(f.map(async p=>{if(!p||!p.trim())return p;const w=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,d=await fetch(w);if(!d.ok)throw new Error(`번역 실패 (${d.status})`);return(await d.json())[0].map(y=>y[0]).join("")}));c.push(...a)}return c}const ye=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wn=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function me(t){const e=wn.indexOf(t);return e>=0?e:999}function vo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Cn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[vo(o)]=o)}),e}function Qe(t,e){var h,y,s,C;if(!((h=t==null?void 0:t.quantitativeGoals)!=null&&h.rows))return(s=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&s.length?[...t._dashboard.categoryStats].sort((u,F)=>me(u.category)-me(F.category)):null;const o=t.quantitativeGoals.rows,i=Cn((C=t.quantitativeResults)==null?void 0:C.rows),n=new Date().getMonth()+1-1,f=n>=3&&n<=12?`${n}월`:"3월";let a=e||t._month||f,p=ye.indexOf(a);p<0&&(a="3월",p=0);const w=[...new Set(o.map(u=>u.taskCategory).filter(Boolean))],d=p>0?ye[p-1]:null;return w.map(u=>{const F=o.filter(A=>A.taskCategory===u);let S=0,b=0,g=0,x=0,E=0,m=0;F.forEach(A=>{var P,W,Z,X,Y;const j=vo(A),N=i[j]||{},R=typeof((P=A.monthly)==null?void 0:P[a])=="number"?A.monthly[a]:0,I=typeof((W=N.monthly)==null?void 0:W[a])=="number"?N.monthly[a]:0;if(b+=R,S+=I,d){const ft=typeof((Z=A.monthly)==null?void 0:Z[d])=="number"?A.monthly[d]:0,et=typeof((X=N.monthly)==null?void 0:X[d])=="number"?N.monthly[d]:0;m+=ft,E+=et}for(let ft=0;ft<=p;ft++){const et=ye[ft];typeof((Y=N.monthly)==null?void 0:Y[et])=="number"&&(g+=N.monthly[et])}ye.forEach(ft=>{var et;typeof((et=A.monthly)==null?void 0:et[ft])=="number"&&(x+=A.monthly[ft])})});const k=b>0?Math.round(S/b*1e3)/10:0,B=m>0?Math.round(E/m*1e3)/10:0,T=x>0?Math.round(g/x*1e3)/10:0;return{category:u,taskCount:F.length,targetMonth:a,monthRate:k,prevMonthRate:B,prevMonth:d,progressRate:T,monthActual:S,monthGoal:b,cumActual:g,annualGoal:x}}).sort((u,F)=>me(u.category)-me(F.category))}function kn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}function Fn(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const i=parseInt(e[1])-1;return i<3?"3월":`${i}월`}async function wo(){const t=await $e(()=>import("./xlsx-2l-k0XfJ.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const bt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},le={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Sn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"},to=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],eo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function An(t,e,o,i,c={}){const n=await wo(),f=n.utils.book_new(),a=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);a["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(f,a,"meta");const p=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(f,p,"total");const w=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(u=>[u.id,u.bu,u.kr,u.score,u.prev,u.vsComp,u.compName])]);w["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(f,w,"products");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(u=>[u.id,u.kr,...u.weekly])]);d["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(f,d,"weekly");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(u=>[u.rank,u.source,u.category,u.score,u.delta,u.ratio??0])]);h["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(f,h,"citations");const y=(c==null?void 0:c.lg)||{},s=(c==null?void 0:c.samsung)||{},C=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...to.map(u=>`LG_${u}`),...eo.map(u=>`Samsung_${u}`)],[...to.map(u=>y[u]??0),...eo.map(u=>s[u]??0)]]);C["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(f,C,"dotcom"),n.writeFile(f,"GEO_Newsletter_템플릿.xlsx")}function Mt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),c=parseFloat(i)||0;return o?+c.toFixed(2):Math.abs(c)<=1&&c!==0?+(c*100).toFixed(2):+c.toFixed(2)}function be(t){return t==null||String(t).trim()===""?null:Mt(t)}function It(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Gt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const En={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function Tn(t){const e=Gt(t);return En[e]||e}function oe(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,c=0;const n=e.match(/(\d{4})/);n&&(c=parseInt(n[1]));const f=e.match(/(\d{1,2})월/);if(f)i=parseInt(f[1]);else{const a=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(a)i=o[a[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(i=parseInt(p[1]))}}return c?c*12+i:i}function $n(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const f=String(n[0]).trim(),a=n[1]??"";if(o.includes(f))e[f]=parseInt(a)||(f==="titleFontSize"?24:10);else if(i.includes(f)){const p=String(a).trim().toLowerCase();e[f]=p==="y"||p==="yes"||p==="true"||p==="1"}else e[f]=String(a)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(f=>f.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},f=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);f&&(e.period=`${n[f[2]]||f[2]} ${f[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const f=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${f[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function Ln(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let c=!1;if(t.forEach(R=>{if(!R[0]||String(R[0]).startsWith("[")||String(R[0]).startsWith("※")||R[0]==="key")return;const I=String(R[0]).trim();(o.includes(I)||e.includes(I))&&(c=!0,e.includes(I)?i[I]=parseInt(R[1])||0:i[I]=Mt(R[1]))}),c&&Object.keys(i).length>=2)return{total:i};const n=t.find(R=>R.some(I=>String(I||"").trim().toUpperCase()==="LG")),f=n?n.findIndex(R=>String(R||"").trim().toUpperCase()==="LG"):4,a=n?n.findIndex(R=>{const I=String(R||"").trim().toUpperCase();return I==="SAMSUNG"||I==="SAMSUMG"}):5,p=a>=0?a:f+1,w=n?n.findIndex(R=>/date/i.test(String(R||"").trim())):0,d=n?n.findIndex(R=>/countries|country/i.test(String(R||"").trim())):2,h=n?n.findIndex(R=>/divisions?/i.test(String(R||"").trim())):3,y=[];t.filter(R=>{const I=String(R[w>=0?w:0]||"").trim();return I&&!I.startsWith("[")&&!I.startsWith("※")&&!/^date$/i.test(I)&&!/^key$/i.test(I)}).forEach(R=>{const I=String(R[w>=0?w:0]||"").trim(),P=Gt(R[d>=0?d:2]),W=String(R[h>=0?h:3]||"").trim().toUpperCase(),Z=Mt(R[f]),X=Mt(R[p]);I&&Z>0&&y.push({date:I,country:P,division:W,lg:Z,comp:X})});const C=y.filter(R=>(R.country==="TOTAL"||R.country==="TTL")&&(R.division==="TOTAL"||R.division==="TTL"||R.division===""));C.sort((R,I)=>oe(R.date)-oe(I.date));const u=C[C.length-1],F=C.length>=2?C[C.length-2]:null;if(!u){const R=t.find(Z=>Z.some(X=>String(X||"").trim().toUpperCase()==="TOTAL"));if(!R)return{};const I=Mt(R[f]),P=Mt(R[p]),W={total:{score:I,prev:I,vsComp:P,rank:I>=P?1:2,totalBrands:12}};return y.length&&(W.monthlyVis=y),W}const S=u.lg,b=u.comp,g=F?F.lg:S,x=u.date,E=F?F.date:null;function m(R){const I={};return y.filter(P=>P.date===R&&(P.country==="TOTAL"||P.country==="TTL")&&P.division&&P.division!=="TOTAL"&&P.division!=="TTL"&&P.division!=="").forEach(P=>{I[P.division]={lg:P.lg,comp:P.comp}}),I}const k=m(x),B=E?m(E):{};function T(R){const I={};return y.filter(P=>P.date===R&&P.country&&P.country!=="TOTAL"&&P.country!=="TTL"&&(P.division==="TOTAL"||P.division==="TTL"||P.division==="")).forEach(P=>{I[P.country]={lg:P.lg,comp:P.comp}}),I}const A=T(x),j=E?T(E):{},N={total:{score:S,prev:g,vsComp:b,rank:S>=b?1:2,totalBrands:12},...Object.keys(k).length?{buTotals:k}:{},...Object.keys(B).length?{buTotalsPrev:B}:{},...Object.keys(A).length?{countryTotals:A}:{},...Object.keys(j).length?{countryTotalsPrev:j}:{}};return x&&(N.derivedPeriod=x),y.length&&(N.monthlyVis=y),N}function Bn(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((c,n)=>n>=1&&String(c||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),oo(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),oo(t,e)}function oo(t,e){const o=t[e],i=o.findIndex((d,h)=>h>=3&&String(d||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const c=[];for(let d=4;d<o.length;d++){const h=String(o[d]||"").trim();h&&h.toUpperCase()!=="LG"&&c.push({name:h,col:d})}const n=t.slice(e+1).filter(d=>{const h=String(d[0]||"").trim();return h&&!h.startsWith("[")&&!h.startsWith("※")}),f={},a={};n.forEach(d=>{const h=String(d[0]||"").trim(),y=String(d[1]||"").trim(),s=String(d[2]||"").trim(),C=Gt(d[2])||s,u=String(d[3]||"").trim(),F=Mt(d[i]),S=c.map(E=>({name:E.name,score:Mt(d[E.col])})).filter(E=>E.score>0),b=[...S].sort((E,m)=>m.score-E.score)[0]||{name:"",score:0},g=+(F-b.score).toFixed(2),x={LG:F};if(S.forEach(E=>{x[E.name]=E.score}),C==="TTL"||C==="TOTAL"){const E=le[u]||u.toLowerCase(),m=Sn[u]||u;f[E]||(f[E]=[]),f[E].push({id:E,bu:h,kr:m,category:u,date:y,score:F,vsComp:b.score,compName:b.name,allScores:x})}else{const E=`${u}|${C}`;a[E]||(a[E]=[]),a[E].push({product:u,country:C,date:y,score:F,compName:b.name,compScore:b.score,gap:g,allScores:x})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(f).join(", ")||"없음"} / 국가별: ${Object.keys(a).length}건`);const p=[];for(const[d,h]of Object.entries(f)){h.sort((u,F)=>oe(u.date)-oe(F.date));const y=h[h.length-1],s=h.length>=2?h[h.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${h.map(u=>u.date).join(",")}] score=${y.score} prev=${s} vsComp=${y.vsComp}`);const C=h.map(u=>({date:u.date,score:u.score,comp:u.vsComp,allScores:u.allScores}));p.push({...y,prev:s,monthlyScores:C})}const w=[];for(const d of Object.values(a)){d.sort((s,C)=>oe(s.date)-oe(C.date));const h=d[d.length-1],y=d.length>=2?d[d.length-2].score:null;w.push({...h,prev:y})}return{...p.length?{productsPartial:p}:{},...w.length?{productsCnty:w}:{}}}function Co(t,e=0,o){const i=o??t.length;for(let c=e;c<i;c++){const n=[];for(const f of t[c]||[]){const a=String(f||"").split(/\n/)[0].trim();/^W\d+/i.test(a)&&n.push(a.toUpperCase())}if(n.length>=2)return n}return null}const Ae={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function no(t,e){var C;const o=e?Ae[e]||{}:{...Ae.MS,...Ae.ES};if(!Object.keys(o).length)return{};const i=t.findIndex(u=>u.some(F=>String(F||"").trim()in o));if(i<0)return{};const c=t[i],n=t.findIndex((u,F)=>F>i&&u.some(S=>String(S||"").trim()==="TTL")),f=n>0?n+1:Math.min(i+20,t.length);let a=-1,p=-1;for(let u=i+1;u<f;u++){const F=t[u];if(!F.some(g=>String(g||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=u),F.some(g=>{const x=String(g||"").trim().toLowerCase().replace(/[\s_-]/g,"");return x==="nonbrand"||x==="nb"})){a=u;break}}const w=a>=0?a:p>=0?p:n;if(w<0)return{};const d=t[w],h={},y=Object.keys(o).map(u=>c.findIndex(F=>String(F||"").trim()===u)).filter(u=>u>=0).sort((u,F)=>u-F);for(const[u,F]of Object.entries(o)){const S=c.findIndex(x=>String(x||"").trim()===u);if(S<0)continue;const b=y.find(x=>x>S)||S+20,g=[];for(let x=S+1;x<b&&x<d.length;x++){const E=Mt(d[x]);E>0&&g.push(E)}g.length&&(h[F]=g)}if(!Object.keys(h).length)return{};const s=Co(t,i,f)||((C=Object.values(h)[0])==null?void 0:C.map((u,F)=>`W${F+1}`))||[];return{weeklyMap:h,weeklyLabels:s}}function Rn(t,e,o){for(const i of Object.values(t))for(const c of Object.values(i))for(const[n,f]of Object.entries(c))c[n]=f.slice(o);for(const[i,c]of Object.entries(e))e[i]=c.slice(o)}function Ee(t,e){const o={};let i=[],c=-1;for(let m=0;m<Math.min(t.length,10);m++){const k=t[m];if(!k)continue;let B=0;for(let T=0;T<k.length;T++)/^w\d+$/i.test(String(k[T]||"").trim())&&B++;if(B>=2){c=m;break}}let n=t.findIndex(m=>{const k=m.slice(0,5).map(B=>String(B||"").trim().toLowerCase());return k.includes("category")||k.includes("product")});if(n<0&&c>=0&&(n=c),n<0&&(n=t.findIndex(m=>{let k=!1,B=0;for(let T=0;T<Math.min(m.length,10);T++){const A=String(m[T]||"").trim();A.toUpperCase()==="LG"?(k=!0,B++):A&&isNaN(parseFloat(A))&&B++}return k&&B>=3})),n<0)return no(t,e);const f=t[n],a=n+1;let p=null;if(t[a]){const m=t[a].slice(4,8).map(k=>String(k||"").trim()).filter(Boolean);m.length&&m.every(k=>/^\d{1,2}\/\d{1,2}/.test(k)||/~/.test(k)||/^\(/.test(k))&&(p=a)}const w=p!=null?p+1:a,d=t.slice(w).filter(m=>m[0]!=null&&String(m[0]).trim()),h=f.findIndex(m=>{const k=String(m||"").trim().toLowerCase();return k==="category"||k==="product"}),y=f.findIndex(m=>{const k=String(m||"").trim().toLowerCase();return k==="country"||k==="county"}),s=f.findIndex(m=>String(m||"").trim().toLowerCase()==="brand"),C=f.findIndex(m=>String(m||"").trim().toUpperCase()==="LG"),u=[],F=c>=0?t[c]:f;for(let m=0;m<F.length;m++)/^w\d+$/i.test(String(F[m]||"").trim())&&u.push(m);if(!u.length)for(let m=0;m<f.length;m++){const k=String(f[m]||"").split(/\n/)[0].trim();/^w\d+/i.test(k)&&u.push(m)}i=u.map(m=>String(F[m]||"").trim().toUpperCase());let S=u.map((m,k)=>{const B=i[k]||`W${m}`;let T="";const A=p!=null?t[p]:c!==n&&c>=0?t[c+1]:null;if(A){const j=String(A[m]||"").trim();j&&/\d/.test(j)&&(T=j.startsWith("(")?j:`(${j})`)}return T?`${B}${T}`:B});console.log(`[parseWeekly:${e}] wLabelRow:${c} headerIdx:${n} dateRangeRow:${p} wCols:${u.length} labels:`,i.slice(0,5),"full:",S.slice(-2));function b(m){if(y<0)return!0;const k=String(m[y]||"").replace(/[()]/g,"").trim().toUpperCase();return k==="TOTAL"||k==="TTL"||k===""}const g=f.findIndex(m=>{const k=String(m||"").trim().toLowerCase().replace(/[\s_-]/g,"");return k==="b/nb"||k==="bnb"||k==="brand/nonbrand"});function x(m){if(g<0)return!0;const k=String(m[g]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return k==="nonbrand"||k==="nb"}const E={};if(s>=0){if(!u.length){const m=d.find(k=>String(k[s]||"").trim().toUpperCase()==="LG"&&x(k));if(m){for(let k=s+1;k<m.length;k++)if(String(m[k]||"").trim())u.push(k);else if(u.length)break;i=Co(t,0,n+1)||u.map((k,B)=>`W${B+1}`)}}d.forEach(m=>{if(!x(m))return;const k=String(m[s]||"").trim();if(!k)return;const B=String(m[h>=0?h:0]||"").trim();if(!B)return;const T=le[B]||B.toLowerCase(),A=y>=0?Gt(m[y]):"TOTAL",j=A==="TOTAL"||A==="TTL"||!A?"Total":A;E[T]||(E[T]={}),E[T][j]||(E[T][j]={}),E[T][j][k]=u.map(N=>be(m[N]))}),d.forEach(m=>{if(String(m[s]||"").trim().toUpperCase()!=="LG"||!x(m)||!b(m))return;const B=String(m[h>=0?h:0]||"").trim();B&&(o[le[B]||B.toLowerCase()]=u.map(T=>be(m[T])))})}else if(C>=0){const m=f.findIndex(T=>{const A=String(T||"").trim().toLowerCase();return A==="date"||A==="week"||A==="period"}),k={},B=[];d.forEach(T=>{if(!b(T))return;const A=String(T[h>=0?h:3]||"").trim();if(A){if(m>=0){const j=String(T[m]||"").trim();j&&!B.includes(j)&&B.push(j)}k[A]=k[A]||[],k[A].push(be(T[C]))}}),Object.entries(k).forEach(([T,A])=>{o[le[T]||T.toLowerCase()]=A}),B.length&&(i=B)}else u.length&&d.forEach(m=>{if(!b(m))return;const k=String(m[h>=0?h:0]||"").trim();k&&(o[le[k]||k.toLowerCase()]=u.map(B=>be(m[B])))});if(i.length>0){let m=i.length;for(const A of Object.values(E))for(const j of Object.values(A))for(const N of Object.values(j)){const R=N.findIndex(I=>I!=null);R>=0&&R<m&&(m=R)}for(const A of Object.values(o)){const j=A.findIndex(N=>N!=null);j>=0&&j<m&&(m=j)}const k=12,T=i.length-m>k?i.length-k:m;T>0&&T<i.length&&(i=i.slice(T),S=S.slice(T),Rn(E,o,T))}if(Object.keys(o).length){const m={weeklyMap:o};return i.length&&(m.weeklyLabels=i),S.length&&(m.weeklyLabelsFull=S),Object.keys(E).length&&(m.weeklyAll=E),m}return no(t,e)}function jn(t){const e=t.findIndex(g=>g.some(m=>{const k=String(m||"").trim().toLowerCase();return k.includes("page type")||k==="country"})?!g.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1);if(e<0)return{};const o=t[e],i=[];for(let g=2;g<o.length;g++){const x=String(o[g]||"").trim();if(/\bLG\b/i.test(x)){const E=g+1;E<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[E]||""))&&i.push({lg:g,ss:E})}}i.length||i.push({lg:2,ss:3});const c=t.slice(e+1).filter(g=>g[0]!=null&&String(g[0]).trim());let n=i[0];for(let g=i.length-1;g>=0;g--)if(c.some(x=>It(x[i[g].lg])>0)){n=i[g];break}if(!c.some(g=>It(g[n.lg])>0)){for(let g=Math.min(n.lg,o.length)-1;g>=2;g--)if(c.some(x=>It(x[g])>0)){n={lg:g-1,ss:g};break}}const f={},a={},p={},w={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},d=new Set,h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=i.map(g=>{const x=String(o[g.lg]||"").trim(),E=x.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():x.replace(/\s*LG\s*/i,"").trim()}),s={};c.forEach(g=>{const x=Gt(g[0]),E=String(g[1]||"").replace(/[()]/g,"").trim();let m=/page total|^ttl$/i.test(E)?"TTL":E;m.toLowerCase()==="microsite"&&(m="Microsites");const k=w[x]||x.toUpperCase();d.add(k);const B=It(g[n.lg]),T=It(g[n.ss]);k==="TTL"?(f[m]=(f[m]||0)+B,a[m]=(a[m]||0)+T):(p[k]||(p[k]={lg:{},samsung:{}}),p[k].lg[m]=(p[k].lg[m]||0)+B,p[k].samsung[m]=(p[k].samsung[m]||0)+T),k==="TTL"&&(s[m]||(s[m]={}),i.forEach((A,j)=>{var I,P;const N=It(g[A.lg]),R=It(g[A.ss]);if(N>0||R>0){const W=y[j]||`M${j+1}`;s[m][W]={lg:(((I=s[m][W])==null?void 0:I.lg)||0)+N,samsung:(((P=s[m][W])==null?void 0:P.samsung)||0)+R}}}))});const C=new Set;Object.values(s).forEach(g=>Object.keys(g).forEach(x=>C.add(x)));const u=h.filter(g=>C.has(g)),F={},S={};i.forEach((g,x)=>{const E=y[x];if(!E)return;const m={},k={};c.forEach(B=>{const T=Gt(B[0]),A=String(B[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test(A)?"TTL":A;j.toLowerCase()==="microsite"&&(j="Microsites");const N=w[T]||T.toUpperCase(),R=It(B[g.lg]),I=It(B[g.ss]);N==="TTL"?(m[j]=(m[j]||0)+R,k[j]=(k[j]||0)+I):(S[E]||(S[E]={}),S[E][N]||(S[E][N]={lg:{},samsung:{}}),S[E][N].lg[j]=(S[E][N].lg[j]||0)+R,S[E][N].samsung[j]=(S[E][N].samsung[j]||0)+I)}),Object.keys(m).length&&(F[E]={lg:m,samsung:k})});const b={};return(f.TTL||Object.keys(f).length)&&(b.dotcom={lg:f,samsung:a,byMonth:F,byCntyByMonth:S}),Object.keys(p).length&&(b.dotcomByCnty=p),Object.keys(s).length&&u.length&&(b.dotcomTrend=s,b.dotcomTrendMonths=u),b}function In(t){const e=t.findIndex(g=>g.some(m=>{const k=String(m||"").trim().toLowerCase();return k==="channel"||k==="country"})?!g.some(m=>/^\[.*\]$/.test(String(m||"").trim())):!1),o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let c=-1,n=-1,f=2;for(let g=0;g<o.length;g++){const x=String(o[g]||"").trim().toLowerCase();x==="country"&&c<0&&(c=g),x==="channel"&&n<0&&(n=g)}if(c>=0&&n>=0)f=Math.max(c,n)+1;else{const g=t[i];g&&!String(g[0]||"").trim()?(c=1,n=2,f=3):(c=0,n=1,f=2)}const a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,p=[];for(let g=f;g<o.length;g++){const x=String(o[g]||"").trim();x&&a.test(x)&&p.push({col:g,label:x})}if(e>0){const g=t[e-1];if(g)for(let x=f;x<g.length;x++){const E=String(g[x]||"").trim();E&&a.test(E)&&!p.some(m=>m.col===x)&&p.push({col:x,label:E})}}if(p.sort((g,x)=>g.col-x.col),p.length>0){const g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=p[0],E=g.findIndex(m=>x.label.toLowerCase().startsWith(m.toLowerCase()));if(E>0&&x.col>f){const m=t.slice(i),k=[];for(let B=f;B<x.col;B++)m.some(T=>{const A=typeof T[B]=="number"?T[B]:parseFloat(String(T[B]||"").replace(/,/g,""));return!isNaN(A)&&A>0})&&k.push(B);for(let B=k.length-1;B>=0;B--){const T=E-(k.length-B);T>=0&&p.push({col:k[B],label:g[T]})}p.sort((B,T)=>B.col-T.col)}}const w=t.slice(i).filter(g=>g.some(x=>x!=null&&String(x).trim())),d=[],h={},y={},s=new Set;w.forEach(g=>{const x=Gt(g[c]),E=String(g[n]||"").replace(/[()]/g,"").trim();if(!E||E.toLowerCase()==="total")return;s.add(x);let m=0;if(p.length>0)for(let B=p.length-1;B>=0;B--){const T=It(g[p[B].col]);if(T>0){m=T;break}}else for(let B=g.length-1;B>=f;B--){const T=It(g[B]);if(T>0){m=T;break}}const k={};p.forEach(({col:B,label:T})=>{const A=It(g[B]);A>0&&(k[T]=A)}),x==="TTL"||x==="TOTAL"?(m>0&&d.push({source:E,category:"",score:m,delta:0,ratio:0,monthScores:k}),Object.keys(k).length>0&&(h[E]=k)):m>0&&(y[x]||(y[x]=[]),y[x].push({source:E,category:"",score:m,delta:0,ratio:0,monthScores:k}))});const C=d.reduce((g,x)=>g+x.score,0);d.sort((g,x)=>x.score-g.score),d.forEach((g,x)=>{g.rank=x+1,g.ratio=C>0?+(g.score/C*100).toFixed(1):0});for(const[g,x]of Object.entries(y)){const E=x.reduce((m,k)=>m+k.score,0);x.sort((m,k)=>k.score-m.score),x.forEach((m,k)=>{m.rank=k+1,m.ratio=E>0?+(m.score/E*100).toFixed(1):0})}const u=p.map(g=>g.label).filter(g=>Object.values(h).some(x=>x[g]>0));for(const[g,x]of Object.entries(y));const F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let S=null;if(u.length>0){const g=u[u.length-1],x=F.findIndex(E=>g.toLowerCase().startsWith(E.toLowerCase()));x>=0&&(S=`${F[x]} ${new Date().getFullYear()}`)}const b={};return d.length>0&&(b.citations=d),Object.keys(y).length>0&&(b.citationsByCnty=y),Object.keys(h).length>0&&(b.citTouchPointsTrend=h,b.citTrendMonths=u),S&&(b.citDerivedPeriod=S),b}function Dn(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let c=null,n=0,f=-1,a=-1,p=-1,w=-1,d=4;for(let b=0;b<Math.min(t.length,10);b++){const g=t[b];if(!g)continue;const x=g.some(k=>/^no$/i.test(String(k||"").trim())),E=g.some(k=>/^region$/i.test(String(k||"").trim())),m=g.some(k=>/domain|domian/i.test(String(k||"").trim()));if(x||E||m){c=g,n=b+1;for(let k=0;k<g.length;k++){const B=String(g[k]||"").trim().toLowerCase();B==="no"&&f<0&&(f=k),B==="region"&&a<0&&(a=k),(B==="domain"||B==="domian")&&p<0&&(p=k)}break}(String(g[0]||"").trim().startsWith("[")||!String(g[0]||"").trim())&&(n=b+1)}const h=f>=0||a>=0;if(h)a=a>=0?a:1,p=2,w=3,d=4;else if(p>=0)w=p+1,d=p+2;else{for(let b=n;b<Math.min(t.length,n+5);b++){const g=t[b];if(g){for(let x=0;x<Math.min(g.length,6);x++){const E=String(g[x]||"").trim();if(E.includes(".")&&E.length>3&&!i.test(E)){p=x,w=x+1,d=x+2;break}}if(p>=0)break}}p<0&&(p=0,w=1,d=2)}const y=[];if(c)for(let b=d;b<c.length;b++){const g=String(c[b]||"").trim();g&&i.test(g)&&y.push({col:b,label:g})}const s=[],C={},u={};let F="TTL";for(let b=n;b<t.length;b++){const g=t[b];if(!g)continue;const x=String(g[p]||"").trim(),E=String(g[w]||"").trim();if(!h&&(!x||!x.includes("."))){const T=String(g[p]||"").trim().toUpperCase(),A=e[T]||(o.includes(T)?T:null);A&&(!E||E==="")&&(F=A);continue}if(!x||!x.includes("."))continue;let m="TTL";if(h&&a>=0){const T=String(g[a]||"").trim().toUpperCase();m=e[T]||T}else h||(m=F);let k=0;if(y.length>0)for(let T=y.length-1;T>=0;T--){const A=String(g[y[T].col]||"").replace(/,/g,"").trim(),j=parseFloat(A);if(!isNaN(j)&&j>0){k=j;break}}else for(let T=g.length-1;T>=d;T--){const A=String(g[T]||"").replace(/,/g,"").trim();if(!A)continue;const j=parseFloat(A);if(!isNaN(j)&&j>0){k=j;break}}if(y.length>0){const T={};if(y.forEach(({col:A,label:j})=>{const N=String(g[A]||"").replace(/,/g,"").trim(),R=parseFloat(N);!isNaN(R)&&R>0&&(T[j]=R)}),Object.keys(T).length>0){const A=`${m}|${x}`;C[A]={cnty:m,domain:x,type:E,months:T}}}const B={};y.length>0&&y.forEach(({col:T,label:A})=>{const j=String(g[T]||"").replace(/,/g,"").trim(),N=parseFloat(j);!isNaN(N)&&N>0&&(B[A]=N)}),k>0&&(u[m]=(u[m]||0)+1,s.push({cnty:m,rank:u[m],domain:x,type:E,citations:k,monthScores:B}))}const S={};if(s.length>0&&(S.citationsCnty=s),Object.keys(C).length>0){S.citDomainTrend=C;const b=y.map(g=>g.label).filter(g=>Object.values(C).some(x=>x.months[g]>0));S.citDomainMonths=b}return S}function ro(t,e){const o=t.findIndex(b=>b?b.some(g=>/^type$/i.test(String(g||"").trim()))&&b.some(g=>/^county|^country$/i.test(String(g||"").trim())):!1);if(o<0)return{};const i=t[o];let c=-1,n=-1,f=-1,a=-1,p=4;for(let b=0;b<i.length;b++){const g=String(i[b]||"").trim().toLowerCase();g==="type"&&c<0&&(c=b),(g==="county"||g==="country")&&n<0&&(n=b),(g==="topic"||g==="topoc")&&f<0&&(f=b),g==="brand"&&a<0&&(a=b)}p=Math.max(c,n,f,a)+1;const w=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,d=/^w\d+/i,h=[],y=[o];for(let b=0;b<=o;b++)b!==o&&y.push(b);for(const b of y){if(h.length>0)break;const g=t[b];if(g)for(let x=p;x<g.length;x++){const E=String(g[x]||"").split(/\n/)[0].trim();E&&(w.test(E)||d.test(E))&&h.push({col:x,label:E})}}const s=t.slice(o+1),C=[];s.forEach(b=>{if(!b)return;const g=String(b[c]||"").trim(),x=Gt(b[n]),E=String(b[f]||"").trim(),m=String(b[a]||"").trim();if(!E||!m)return;const k={};let B=0;h.forEach(({col:T,label:A})=>{const j=Mt(b[T]);j>0&&(k[A]=j,B=j)}),(Object.keys(k).length>0||E)&&C.push({type:g,country:x,topic:E,brand:m,scores:k,latestScore:B})});const u=e==="weekly"?"weeklyPR":"monthlyPR",F=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",S={};return C.length>0&&(S[u]=C),h.length>0&&(S[F]=h.map(b=>b.label)),S}function io(t,e){const o=t.findIndex(S=>S?S.some(b=>/steakholders|stakeholders/i.test(String(b||"").trim()))||S.some(b=>/^type$/i.test(String(b||"").trim()))&&S.some(b=>/topoc|topic/i.test(String(b||"").trim())):!1);if(o<0)return{};const i=t[o];let c=-1,n=-1,f=-1,a=-1,p=4;for(let S=0;S<i.length;S++){const b=String(i[S]||"").trim().toLowerCase();(b==="steakholders"||b==="stakeholders")&&c<0&&(c=S),b==="type"&&n<0&&(n=S),(b==="country"||b==="county")&&f<0&&(f=S),(b==="topoc"||b==="topic")&&a<0&&(a=S)}p=Math.max(c,n,f,a)+1;const w=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,d=/^w\d+/i,h=[];for(let S=p;S<i.length;S++){const b=String(i[S]||"").split(/\n/)[0].trim();b&&(w.test(b)||d.test(b))&&h.push({col:S,label:b})}const y=t.slice(o+1),s=[];y.forEach(S=>{if(!S)return;const b=String(S[c]||"").trim(),g=String(S[n]||"").trim(),x=Gt(S[f]),E=String(S[a]||"").trim();if(!E||!b)return;const m={};let k=0;h.forEach(({col:B,label:T})=>{const A=Mt(S[B]);A>0&&(m[T]=A,k=A)}),s.push({stakeholder:b,type:g,country:x,topic:E,scores:m,latestScore:k})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",u=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",F={};return s.length>0&&(F[C]=s),h.length>0&&(F[u]=h.map(S=>S.label)),F}function Nn(t){const e=t.findIndex(a=>a?a.some(p=>/^prompts?$/i.test(String(p||"").trim()))&&a.some(p=>/^country$/i.test(String(p||"").trim())):!1);if(e<0)return{};const o=t[e],i={},c=["country","prompts","division","category","launched","branded","cej","topic"];for(let a=0;a<o.length;a++){const p=String(o[a]||"").trim().toLowerCase();c.includes(p)&&!i[p]&&(i[p]=a)}const n=t.slice(e+1),f=[];return n.forEach(a=>{if(!a)return;const p=String(a[i.prompts]||"").trim();p&&f.push({country:Gt(a[i.country]),prompt:p,division:String(a[i.division]||"").trim(),category:String(a[i.category]||"").trim(),launched:String(a[i.launched]||"").trim(),branded:String(a[i.branded]||"").trim(),cej:String(a[i.cej]||"").trim(),topic:String(a[i.topic]||"").trim()})}),f.length>0?{appendixPrompts:f}:{}}function Pn(t){const e=t.findIndex(d=>{if(!d)return!1;const h=d.some(s=>/^(country|county)$/i.test(String(s||"").trim())),y=d.some(s=>/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(s||"").trim()));return h&&y});if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,h)=>console.log(`  row${h}:`,d==null?void 0:d.slice(0,6))),{};const o=t[e];let i=-1,c=-1,n=-1;for(let d=0;d<o.length;d++){const h=String(o[d]||"").trim().toLowerCase();i<0&&(h==="country"||h==="county")&&(i=d),c<0&&(h==="category"||h==="product"||h==="제품"||h==="카테고리")&&(c=d),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(h)&&(n=d)}if(i<0||c<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:c,statusCol:n,header:o}),{};const f=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),a={};let p=0,w=0;return t.slice(e+1).forEach(d=>{if(!d)return;const h=String(d[n]||"").trim();if(!h)return;p++;const y=h.toLowerCase().replace(/\s+/g," ");if(!f.has(y)&&!f.has(y.replace(/\s/g,"")))return;const s=Tn(d[i]),C=String(d[c]||"").trim();if(!s||!C)return;const u=C.toUpperCase(),S={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"}[u]||u;a[`${s}|${S}`]=!0,S!==u&&(a[`${s}|${u}`]=!0),w++}),console.log(`[parseUnlaunched] 총 ${p}행 중 ${w}행 매칭 / 미출시 ${Object.keys(a).length}건`),Object.keys(a).length>0?{unlaunchedMap:a}:{}}function On(t){const e=t.findIndex(d=>d&&d.some(h=>/^bu$/i.test(String(h||"").trim()))&&d.some(h=>/topic/i.test(String(h||"").trim())));if(e<0)return{};const o=t[e];let i=-1,c=-1,n=-1,f=-1,a=-1;for(let d=0;d<o.length;d++){const h=String(o[d]||"").trim().toLowerCase();i<0&&h==="bu"&&(i=d),c<0&&h.includes("topic")&&h.includes("대시보드")&&(c=d),n<0&&(h==="explanation"||h==="설명")&&(n=d),f<0&&h.includes("기존")&&(f=d),a<0&&h.includes("topic")&&h.includes("row")&&(a=d)}c<0&&(c=1),n<0&&(n=2);const p=[];let w="";return t.slice(e+1).forEach(d=>{if(!d)return;const h=String(d[i]||"").trim();h&&(w=h);const y=String(d[c]||"").trim();if(!y)return;const s=String(d[n]||"").trim(),C=f>=0?String(d[f]||"").trim():"",u=a>=0?String(d[a]||"").trim():"";p.push({bu:w,topic:y,explanation:s,oldTopic:C,topicRow:u})}),p.length>0?{prTopicList:p}:{}}function Mn(t,e){return t===bt.meta?$n(e):t===bt.visSummary?Ln(e):t===bt.productMS||t===bt.productHS||t===bt.productES?Bn(e):t===bt.weeklyMS?Ee(e,"MS"):t===bt.weeklyHS?Ee(e,"HS"):t===bt.weeklyES?Ee(e,"ES"):t===bt.monthlyPR?ro(e,"monthly"):t===bt.weeklyPR?ro(e,"weekly"):t===bt.monthlyBrandPrompt?io(e,"monthly"):t===bt.weeklyBrandPrompt?io(e,"weekly"):t===bt.citPageType?jn(e):t===bt.citTouchPoints?In(e):t===bt.citDomain?Dn(e):t===bt.appendix?Nn(e):t===bt.unlaunched?Pn(e):t===bt.prTopicList?On(e):{}}function zn(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function _n(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,c=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!c.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${c.status}).`);const n=await c.text(),f=await wo(),a=f.read(n,{type:"string"}),p=a.Sheets[a.SheetNames[0]];return f.utils.sheet_to_json(p,{header:1,defval:""})}async function Gn(t,e){var n,f;const o=Object.values(bt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const c=await Promise.allSettled(o.map(a=>_n(t,a).then(p=>({name:a,rows:p}))));for(let a=0;a<o.length;a++){const p=o[a],w=c[a];if(e==null||e(`"${p}" 처리 중... (${a+1}/${o.length})`),w.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(n=w.reason)==null?void 0:n.message);continue}try{const{rows:d}=w.value,h=Mn(p,d);for(const[y,s]of Object.entries(h))y==="weeklyLabels"||y==="weeklyLabelsFull"?i[y]||(i[y]=s):Array.isArray(s)&&Array.isArray(i[y])?i[y]=[...i[y],...s]:s&&typeof s=="object"&&!Array.isArray(s)&&i[y]&&typeof i[y]=="object"&&!Array.isArray(i[y])?i[y]={...i[y],...s}:i[y]=s}catch(d){console.warn(`"${p}" 시트 처리 실패:`,d.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const a={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"},p={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",rac:"ES",aircare:"ES"},w=[];for(const[d,h]of Object.entries(i.weeklyAll)){const y=h.Total||h.TTL||{},s=y.LG||y.lg||[],C=Object.entries(y).filter(([g])=>g!=="LG"&&g!=="lg"),u=s.length?s[s.length-1]:0,F=s.length>=5?s[0]:0;let S="",b=0;for(const[g,x]of C){const E=x.length?x[x.length-1]:0;E>b&&(b=E,S=g)}u>0&&w.push({id:d,bu:p[d]||"HS",kr:a[d]||d,category:d,date:((f=i.meta)==null?void 0:f.period)||"",score:u,prev:F,vsComp:b,compName:S,allScores:{LG:u,...S?{[S]:b}:{}}})}if(w.length&&(i.productsPartial=w,console.log(`[SYNC] weeklyAll에서 ${w.length}개 제품 생성:`,w.map(d=>`${d.id}=${d.score}`).join(", "))),!i.productsCnty){const d=[];for(const[h,y]of Object.entries(i.weeklyAll)){const s=a[h]||h;for(const[C,u]of Object.entries(y)){if(C==="Total"||C==="TTL")continue;const F=u.LG||u.lg||[],S=F.length?F[F.length-1]:0;if(S<=0)continue;const b=F.length>=2?F[0]:0;let g="",x=0;const E={LG:S};for(const[k,B]of Object.entries(u)){if(k==="LG"||k==="lg")continue;const T=B.length?B[B.length-1]:0;E[k]=T,T>x&&(x=T,g=k)}const m=+(S-x).toFixed(1);d.push({product:s,country:C,score:S,prev:b,compName:g,compScore:x,gap:m,allScores:E})}}d.length&&(i.productsCnty=d,console.log(`[SYNC] weeklyAll에서 productsCnty ${d.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((p,w)=>p===`W${w+1}`)){const p=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(w=>String(w).split(/\n/)[0].trim().toUpperCase()).filter(w=>/^W\d+/.test(w));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),i.weeklyLabels=p;const w=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(d=>{const h=String(d).split(/\n/);return h[0].trim().toUpperCase()+(h[1]?h[1].trim():"")}).filter(d=>/^W\d+/.test(d));w.length&&(i.weeklyLabelsFull=w)}}return i}const st={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function Un(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),c=Math.floor(i/24);return c>=1?`${c}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Hn({savedAt:t,ageMs:e,stale:o,style:i}){const c=t==null,n=c?"#1E293B":o?"#7F1D1D":"#064E3B",f=c?"#94A3B8":o?"#FCA5A5":"#86EFAC",a=c?"#334155":o?"#B91C1C":"#047857",p=c?"○":o?"⚠️":"●",w=c?"동기화 정보 없음":`데이터 최신화: ${Un(e)}`,d=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:d,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:f,border:`1px solid ${a}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),w]})}function Wn({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Ht="'LG Smart','Arial Narrow',Arial,sans-serif",zt="#CF0652",Yt="#94A3B8",we={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},ko={LG:zt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},ao=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Be={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Vn=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Fo={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Ie={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE"},De=90;function Ne(t,e){const o=we[e]||we.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Ce(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Kn(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Re(t){const e=String(t||"").trim().toUpperCase();return Fo[e]||t}let qn=0;function so(t,e,o,i,c){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const n=qn++,f={t:18,r:10,b:20,l:10},a=o-f.l-f.r,p=i-f.t-f.b,w=t.filter(b=>b!=null);if(!w.length){let b=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const g=t.length,x=g>1?g-1:1;return b+=t.map((E,m)=>`<text x="${(f.l+m/x*a).toFixed(1)}" y="${f.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Ht}">${e[m]||""}</text>`).join(""),b+="</svg>",b}const d=Math.min(...w)-1,h=Math.max(...w)+1,y=h-d||1,s=t.length,C=s>1?s-1:1,u=t.map((b,g)=>f.l+g/C*a),F=[];t.forEach((b,g)=>{b!=null&&F.push({x:u[g],y:f.t+(1-(b-d)/y)*p,v:b})});let S=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;if(F.length>=2){const b=F.map((x,E)=>`${E?"L":"M"}${x.x.toFixed(1)},${x.y.toFixed(1)}`).join(" "),g=b+` L${F[F.length-1].x.toFixed(1)},${f.t+p} L${F[0].x.toFixed(1)},${f.t+p} Z`;S+=`<defs><linearGradient id="lg${n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.03"/>
    </linearGradient></defs>`,S+=`<path d="${g}" fill="url(#lg${n})"/>`,S+=`<path d="${b}" stroke="${c}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}return S+=F.map(b=>`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${c}" stroke-width="2"/>`).join(""),S+=F.map(b=>`<text x="${b.x.toFixed(1)}" y="${Math.max(b.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" font-family="${Ht}">${b.v.toFixed(1)}</text>`).join(""),S+=t.map((b,g)=>`<text x="${u[g].toFixed(1)}" y="${f.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Ht}">${e[g]||""}</text>`).join(""),S+="</svg>",S}function de(t,e){return ko[t]||ao[e%ao.length]}function So(t,e,o,i){const c=Object.keys(t);if(!c.length||!e.length)return"";let n=1/0,f=-1/0;if(c.forEach(C=>(t[C]||[]).forEach(u=>{u!=null&&(u<n&&(n=u),u>f&&(f=u))})),!isFinite(n))return"";const a=Math.max((f-n)*.15,2);n=Math.max(0,n-a),f=Math.min(100,f+a);const p=f-n||1,w=e.length,d=8,h=8,y=i-d-h;let s="";for(let C=0;C<=4;C++){const u=d+C/4*y;s+=`<line x1="0" y1="${u.toFixed(1)}" x2="${o}" y2="${u.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}return c.forEach((C,u)=>{const F=t[C]||[],S=de(C,u),b=C==="LG",g=b?2.5:1.5,x=b?1:.7,E=[];if(F.forEach((m,k)=>{if(m==null)return;const B=(k+.5)/w*o,T=d+(1-(m-n)/p)*y;E.push({x:B,y:T,v:m})}),!!E.length){if(E.length>=2){const m=E.map((k,B)=>`${B?"L":"M"}${k.x.toFixed(1)},${k.y.toFixed(1)}`).join(" ");s+=`<path d="${m}" stroke="${S}" fill="none" stroke-width="${g}" stroke-linecap="round" stroke-linejoin="round" opacity="${x}"/>`}E.forEach(m=>{s+=`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="${b?3.5:2.5}" fill="#fff" stroke="${S}" stroke-width="${b?2:1.5}" opacity="${x}"/>`})}}),`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${s}</svg>`}function Jn({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:c,monthlyVis:n,total:f,meta:a,wLabels:p}){const w={monthlyVis:n};return`
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
${(()=>{const d=h=>JSON.stringify(h).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?d(e):"{}"};
var _products=${d(o.map(h=>({id:h.id,bu:h.bu,kr:h.kr,en:h.en||h.kr,category:h.category||"",date:h.date||"",status:h.status,score:h.score||0,prev:h.prev||0,vsComp:h.vsComp||0,compName:h.compName||"",compRatio:h.compRatio||0,allScores:h.allScores||{},monthlyScores:h.monthlyScores||[]})))};
var _productsCnty=${d(i||[])};
var _unlaunchedMap=${d(c)};
var _PROD_TO_UL={'tv':'TV','monitor':'IT','audio':'AV','washer':'WM','fridge':'REF','dw':'DW','vacuum':'VC','cooking':'COOKING','rac':'RAC','aircare':'AIRCARE'};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${d((w==null?void 0:w.monthlyVis)||[])};
var _total=${d(f)};
var _meta={period:${d(a.period||"")},reportNo:${d(a.reportNo||"")},totalInsight:${d(a.totalInsight||"")}};
var _wLabels=${d(p)};`})()}
${(()=>{const d=h=>JSON.stringify(h).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${d(ko)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${zt}';
var _FONT=${d(Ht)};
var _COMP='${Yt}';
var _REGIONS=${d(Object.fromEntries(Object.entries(Be).map(([h,y])=>[h,y.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Be).map(([d,h])=>[d,t==="en"?h.labelEn:h.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${De};
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
`}function Yn(t,e,o,i,c,n,f){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(w=>{const d=t.filter(y=>y.bu===w);if(!d.length)return"";const h=d.map(y=>{var T,A;const s=((T=e[y.id])==null?void 0:T.Total)||{},C=Object.keys(s).sort((j,N)=>{var P,W;if(j==="LG")return-1;if(N==="LG")return 1;const R=((P=s[j])==null?void 0:P[s[j].length-1])||0;return(((W=s[N])==null?void 0:W[s[N].length-1])||0)-R});if(!C.length)return"";const u=Ne(y.status,c),F=(A=s.LG)==null?void 0:A[s.LG.length-1],S=C.map((j,N)=>{const R=de(j,N),I=j==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${R};opacity:${I?1:.7}"></i><span style="font-size:13px;color:${I?"#1A1A1A":"#94A3B8"};font-weight:${I?700:400}">${j}</span></span>`}).join(""),b=o.length,g=`<colgroup><col style="width:${De}px">${o.map(()=>"<col>").join("")}</colgroup>`,x=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:8px 0;border:0">${So(s,o,b*80,180)}</td></tr>`,E=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:4px 0 6px;border:0">${S}</td></tr>`,m=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(j=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${j}</th>`).join("")}</tr>`,k=C.map((j,N)=>{const R=de(j,N),I=j==="LG",P=o.map((W,Z)=>{var Y;const X=(Y=s[j])==null?void 0:Y[Z];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${X!=null?I?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${I?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${X!=null?X.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${I?"#FFF8F9":N%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${I?700:500};color:${R};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${R};margin-right:4px;vertical-align:0"></i>${j}</td>${P}</tr>`}).join(""),B=Pe(y.id||y.category,n);return`<div class="trend-row${B?" is-unlaunched":""}" data-prodid="${y.id||y.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${zt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Oe(y,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${B?"#F1F5F9":u.bg};color:${B?"#64748B":u.color};border:1px solid ${B?"#CBD5E1":u.border}">${B?c==="en"?"Unlaunched":"미출시":u.label}</span>
          ${F!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${F.toFixed(1)}%</span>`:""}
          ${y.compName?`<span style="font-size:14px;color:#94A3B8">vs ${y.compName} ${y.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Ht}">${g}<tbody>${x}${E}${m}${k}</tbody></table></div>
      </div>`}).join("");return h?`<div class="bu-group" data-bu="${w}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${w}</span></div>
      ${h}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${c==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${f||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${c==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}${(()=>{const w=t.filter(d=>Wt(d.id||d.category,n).length>0).map(d=>`${d.kr}: ${Wt(d.id||d.category,n).join(", ")} ${c==="en"?"not launched":"미출시"}`);return w.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${w.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function Xn(t,e,o,i,c,n){if(!e||!e.length)return"";const f=["MS","HS","ES"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function w(s){const C=String(s).match(/(\d{1,2})월/);if(C)return parseInt(C[1])-1;const u=String(s).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return u?p[u[1].toLowerCase()]:-1}const d=[0,1,2,3,4,5,6,7,8,9,10,11],h=a.slice(),y=f.map(s=>{const C=t.filter(F=>F.bu===s);if(!C.length)return"";const u=C.map(F=>{const S=F.monthlyScores||[];let b={};if(S.length>=2){const I=new Set;if(S.forEach(P=>{P.allScores&&Object.keys(P.allScores).forEach(W=>I.add(W))}),I.forEach(P=>{b[P]=d.map(W=>{var X;const Z=S.find(Y=>w(Y.date)===W);return((X=Z==null?void 0:Z.allScores)==null?void 0:X[P])??null})}),!I.size&&(b.LG=d.map(P=>{const W=S.find(Z=>w(Z.date)===P);return W?W.score:null}),F.vsComp>0)){const P=d.map(W=>{const Z=S.find(X=>w(X.date)===W);return(Z==null?void 0:Z.comp)??null});P.some(W=>W!=null)&&(b[F.compName||"Comp"]=P)}}else{const I=e.filter(X=>X.division===s&&(X.country==="TOTAL"||X.country==="TTL")),P={};I.forEach(X=>{const Y=w(X.date);Y>=0&&(P[Y]=X)});const W=d.map(X=>{var Y;return((Y=P[X])==null?void 0:Y.lg)||null}),Z=d.map(X=>{var Y;return((Y=P[X])==null?void 0:Y.comp)||null});b={LG:W},Z.some(X=>X!=null&&X>0)&&(b.Samsung=Z)}const g=Object.keys(b).sort((I,P)=>{if(I==="LG")return-1;if(P==="LG")return 1;const W=(b[I]||[]).filter(X=>X!=null).pop()||0;return((b[P]||[]).filter(X=>X!=null).pop()||0)-W});if(!g.length)return"";const x=Ne(F.status,i),E=(b.LG||[]).filter(I=>I!=null).pop(),m=g.map((I,P)=>{const W=de(I,P),Z=I==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${W};opacity:${Z?1:.7}"></i><span style="font-size:13px;color:${Z?"#1A1A1A":"#94A3B8"};font-weight:${Z?700:400}">${I}</span></span>`}).join(""),k=h.length,B=`<colgroup><col style="width:${De}px">${h.map(()=>"<col>").join("")}</colgroup>`,T=`<tr><td style="padding:0;border:0"></td><td colspan="${k}" style="padding:8px 0;border:0">${So(b,h,k*80,180)}</td></tr>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${k}" style="padding:4px 0 6px;border:0">${m}</td></tr>`,j=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${h.map(I=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${I}</th>`).join("")}</tr>`,N=g.map((I,P)=>{const W=de(I,P),Z=I==="LG",X=h.map((Y,ft)=>{var lt;const et=(lt=b[I])==null?void 0:lt[ft];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${et!=null?Z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${Z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${et!=null?et.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${Z?"#FFF8F9":P%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${Z?700:500};color:${W};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${W};margin-right:4px;vertical-align:0"></i>${I}</td>${X}</tr>`}).join(""),R=Pe(F.id||F.category,c);return`<div class="trend-row${R?" is-unlaunched":""}" data-prodid="${F.id||F.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${zt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${Oe(F,c)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${R?"#F1F5F9":x.bg};color:${R?"#64748B":x.color};border:1px solid ${R?"#CBD5E1":x.border}">${R?i==="en"?"Unlaunched":"미출시":x.label}</span>
          ${E!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${E.toFixed(1)}%</span>`:""}
          ${F.compName?`<span style="font-size:14px;color:#94A3B8">vs ${F.compName} ${F.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Ht}">${B}<tbody>${T}${A}${j}${N}</tbody></table></div>
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${s}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${s}</span></div>
      ${u}
    </div>`:""}).join("");return y.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${h[0]}–${h[h.length-1]} (${h.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${y}${(()=>{const s=t.filter(C=>Wt(C.id||C.category,c).length>0).map(C=>`${C.kr}: ${Wt(C.id||C.category,c).join(", ")} ${i==="en"?"not launched":"미출시"}`);return s.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${s.join(" / ")}</p>`:""})()}</div>
  </div>`:""}function Ao(t,e,o,i,c){let n="";return e&&t&&(n+=`<div class="insight-box"><span class="insight-label">${c.insight}</span><span class="insight-text">${Ce(t)}</span></div>`),i&&o&&(n+=`<div class="howto-box"><span class="howto-label">${c.howToRead}</span><span class="howto-text">${Ce(o)}</span></div>`),n}function Zn(t,e,o,i){const c=+(t.score-t.prev).toFixed(1),n=t.vsComp||0,f=+(t.score-n).toFixed(1),a=c>0?"▲":c<0?"▼":"─",p=c>0?"#22C55E":c<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section">
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
          <span class="hero-delta" style="color:${p}">${a} ${Math.abs(c).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${zt}"></div>
          </div>
          ${n>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(n,100)}%;background:${Yt}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${zt}"></i> LG ${t.score}%</span>
            ${n>0?`<span><i style="background:${Yt}"></i> Samsung ${n}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${n>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${n}%</span>
          <span class="hero-comp-gap" style="color:${f>=0?"#22C55E":"#EF4444"}">Gap ${f>=0?"+":""}${f}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
    ${e.totalInsight?`<div class="hero-insight"><span class="hero-insight-label">${o.geoInsight}</span><span class="hero-insight-text">${Ce(e.totalInsight)}</span></div>`:""}
  </div>`}function Wt(t,e){const o=Ie[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function Pe(t,e){return Vn.every(o=>{const i=Ie[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function Oe(t,e){return Wt(t.id||t.category,e).length?`${t.kr}*`:t.kr}function lo(t,e,o,i,c,n,f,a,p){if(!t.length)return"";const d=["MS","HS","ES"].map(h=>{const y=t.filter(C=>C.bu===h);if(!y.length)return"";const s=y.map(C=>{var yt,Dt;const u=C.weekly||[],F=u.filter(ct=>ct!=null),S=C.weeklyScore||(F.length>0?F[F.length-1]:C.score),b=C.monthlyScore||C.score,g=S,x=((yt=a==null?void 0:a[C.id])==null?void 0:yt.Total)||((Dt=a==null?void 0:a[C.id])==null?void 0:Dt.TTL)||{};let E=0;Object.entries(x).forEach(([ct,nt])=>{if(ct==="LG"||ct==="lg")return;const it=Array.isArray(nt)&&nt.length?nt[nt.length-1]:0;it>E&&(E=it)});const m=C.vsComp||0,k=E>0?S/E*100:m>0?S/m*100:100,B=m>0?b/m*100:100,T=Math.round(k*10)/10,A=Math.round(B*10)/10,j=T,N=k>=100?"lead":k>=80?"behind":"critical",R=Ne(N,i),I=F.length>=1?F[F.length-1]:null,P=F.length>=2?F[F.length-2]:null,W=I!=null&&P!=null?+(I-P).toFixed(1):null,Z=W>0?"▲":W<0?"▼":"─",X=W>0?"#22C55E":W<0?"#EF4444":"#94A3B8",Y=N==="critical"?"#BE123C":N==="behind"?"#D97706":"#15803D",ft=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],et={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function lt(ct){const nt=String(ct).match(/(\d{1,2})월/);if(nt)return parseInt(nt[1])-1;const it=String(ct).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return it?et[it[1].toLowerCase()]:-1}let ut=C.monthlyScores||[];if(ut.length<2&&f.length>0){const ct=f.filter(it=>it.division===C.bu&&(it.country==="TOTAL"||it.country==="TTL")),nt={};ct.forEach(it=>{const Ft=lt(it.date);Ft>=0&&(nt[Ft]={date:it.date,score:it.lg,comp:it.comp})}),ut=Object.keys(nt).sort((it,Ft)=>it-Ft).map(it=>nt[it])}const Vt=ut.length>0?ut.map(ct=>{const nt=lt(ct.date);return nt>=0?ft[nt]:ct.date}):["M-3","M-2","M-1","M0"],gt=ut.length>0?ut.map(ct=>ct.score):[null,null,null,C.score],kt=ut.length>=2?+(ut[ut.length-1].score-ut[ut.length-2].score).toFixed(1):null,Ct=kt>0?"▲":kt<0?"▼":"─",Et=kt>0?"#22C55E":kt<0?"#EF4444":"#94A3B8",Bt=j,xt=Bt>=100?"#15803D":Bt>=80?"#D97706":"#BE123C",O=C.weeklyPrev||(F.length>=5?F[F.length-5]:F[0]||0),Q=S&&O?+(S-O).toFixed(1):null,M=b&&(C.monthlyPrev||C.prev)?+(b-(C.monthlyPrev||C.prev)).toFixed(1):null,D=Wt(C.id||C.category,n),U=Pe(C.id||C.category,n),ot=U?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:R;return`<div class="prod-card${U?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${S.toFixed(1)}" data-ms="${b.toFixed(1)}" data-wr="${T}" data-mr="${A}" data-wmom="${Q??""}" data-mmom="${M??""}" style="border-color:${ot.border}">
        <div class="prod-head">
          <span class="prod-name">${Oe(C,n)}</span>
          ${D.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${ot.bg};color:${ot.color};border-color:${ot.border}">${ot.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${g.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${X}">${W!=null?`WoW ${Z} ${Math.abs(W).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Et}">${kt!=null?`MoM ${Ct} ${Math.abs(kt).toFixed(1)}%p`:"MoM —"}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${so(u,c,300,90,Y)}</div>
          <div class="trend-monthly" style="display:none">${so(gt,Vt,300,90,Y)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(Bt,120)}%;background:${xt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${xt}">${Bt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${h}">
      <div class="bu-header"><span class="bu-label">${h}</span><span class="bu-count">${y.length}${o.categories}</span></div>
      <div class="prod-grid">${s}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Ao(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead,o)}
    <div class="section-body">${d}${(()=>{const h=t.filter(y=>Wt(y.id||y.category,n).length>0).map(y=>`${y.kr}: ${Wt(y.id||y.category,n).join(", ")} ${i==="en"?"not launched":"미출시"}`);return h.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${h.join(" / ")}</p>`:""})()}</div>
  </div>`}function co(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),f=Ie[n]||(n||"").toUpperCase(),a=i&&i[`${t.country}|${f}`],p=Kn(t.score,t.compScore),w=a?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",d=+(t.score-t.compScore).toFixed(1),h=a?"#64748B":d>=0?"#15803D":"#BE123C",y=130,s=["TCL","HISENSE","HAIER"];let C="",u=0;t.allScores&&Object.entries(t.allScores).forEach(([E,m])=>{const k=String(E).toUpperCase();s.some(T=>k.includes(T))&&m>u&&(C=E,u=m)});const F=Math.max(e,u),S=Math.max(3,Math.round(t.score/F*y)),b=t.compScore>0?Math.max(3,Math.round(t.compScore/F*y)):0,g=u>0?Math.max(3,Math.round(u/F*y)):0,x="#9333EA";return`<div class="vbar-item${a?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${w}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${S}px;background:${w}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${Yt}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${b}px;background:${Yt}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${u>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${x}">${u.toFixed(1)}</span>
        <div class="vbar-col" style="height:${g}px;background:${x}"></div>
        <span class="vbar-col-name" style="color:${x}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${h}">${d>=0?"+":""}${d}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function po(t,e,o,i,c,n){if(!t||!t.length)return"";const f=new Map;t.forEach(s=>{f.has(s.product)||f.set(s.product,[]),f.get(s.product).push(s)});const a=e.cntyProductFilter||{},p=[...f.entries()].filter(([s])=>a[s]!==!1).map(([s,C])=>{const u=Math.max(...C.map(S=>Math.max(S.score,S.compScore)),1),F=C.map(S=>co(S,u,Re(S.country),c)).join("");return`<div class="cnty-product" data-group-product="${s}"><div class="bu-header"><span class="bu-label">${s}</span></div><div class="vbar-chart">${F}</div></div>`}).join(""),w=new Map;t.forEach(s=>{w.has(s.country)||w.set(s.country,[]),w.get(s.country).push(s)});const d=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],y=d.filter(s=>w.has(s)).concat([...w.keys()].filter(s=>!d.includes(s))).map(s=>{const C=w.get(s);if(!C)return"";const u=Math.max(...C.map(S=>Math.max(S.score,S.compScore)),1),F=C.map(S=>co(S,u,S.product,c)).join("");return`<div class="cnty-product" data-group-country="${s}"><div class="bu-header"><span class="bu-label">${Re(s)}</span></div><div class="vbar-chart">${F}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${Yt}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${Ao(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead,o)}
    <div class="section-body">
      <div class="cnty-view-country">${y}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!c||!Object.keys(c).length)return"";const s={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},u=[...new Set(t.map(F=>F.product))].map(F=>{const S=s[F]||String(F).toLowerCase(),b=Wt(S,c);return b.length?`${F}: ${b.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const uo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Qn(t){const e=uo[t]||uo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(c=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${c.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${c.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function tr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",c=e==="en"?"All":"전체",n=e==="en"?"Total":"총",f=e==="en"?"":"개",a=e==="en"?"Clear filters":"필터 초기화",p=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],w={};p.forEach(s=>{const C=new Set;t.forEach(u=>{u[s.key]&&C.add(u[s.key])}),w[s.key]=[...C].sort()});const d=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(w).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const h=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),y=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${f?" "+f:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${a}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${p.map(s=>`<th data-col="${s.key}" onclick="_plToggle('${s.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${s.label} <span id="pl-arrow-${s.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${p.map(s=>`<div id="pl-dd-${s.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${s.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${c}</div>
      ${w[s.key].map(C=>`<div onclick="_plFilter('${s.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${d};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${f?" "+f:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(p.map(s=>s.key))}.forEach(function(k){
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
  <\/script>`}function ho(t,e,o,i,c,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const f=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],a=[];for(let A=0;A<12;A++)a.push("w"+(5+A));const p=[...new Set(t.map(A=>A.topic))].filter(Boolean),w=[...new Set(t.map(A=>A.type))].filter(Boolean),d=[...new Set(t.map(A=>A.country))].filter(A=>A&&A!=="TTL"),h=f.filter(A=>d.includes(A)).concat(f.filter(A=>!d.includes(A))),y=JSON.stringify(t).replace(/</g,"\\u003c"),s=JSON.stringify(a),C=JSON.stringify(p),u=JSON.stringify(w),F=JSON.stringify(h),S=72;function b(A){const j={};return A&&String(A).split(`
`).forEach(N=>{const R=N.indexOf("=");if(R>0){const I=N.slice(0,R).trim(),P=N.slice(R+1).trim();I&&(j[I]=P)}}),j}const g=b(i==null?void 0:i.prTopicPromptsRaw);c&&c.length&&p.forEach(A=>{if(!g[A]){const j=c.find(N=>N.topic===A&&N.country==="US");j&&(g[A]=j.prompt)}});const x=(n==null?void 0:n.prTopicList)||[],E={},m={};x.forEach(A=>{[A.topic,A.topicRow,A.oldTopic].filter(Boolean).map(N=>N.trim()).forEach(N=>{A.explanation&&!E[N]&&(E[N]=A.explanation),A.bu&&!m[N]&&(m[N]=A.bu)})});const B={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...E,...b(i==null?void 0:i.prTopicDescsRaw)},T={};return p.forEach(A=>{const j=m[A];if(j)T[A]=j;else{const N=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];T[A]=N.some(R=>A.toLowerCase().includes(R.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Ht}">
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
    var D=${y},W=${s},TP=${C},TY=${u},CN=${F};
    var CW=${S};
    var TOPIC_CAT=${JSON.stringify(T)};
    var TOPIC_PROMPT=${JSON.stringify(g).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(B).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(x).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Fo)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${zt}',COMP='${Yt}';
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
  <\/script>`}function go(t,e,o,i,c,n){const f=(t||[]).filter(u=>!0);if(!f.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const a=[];for(let u=0;u<12;u++)a.push("w"+(5+u));const w=[...new Set(f.map(u=>u.stakeholder))].filter(Boolean).map(u=>({stakeholder:u,topics:[...new Set(f.filter(F=>F.stakeholder===u).map(F=>F.topic))].filter(Boolean)})),d=72,h=JSON.stringify(f).replace(/</g,"\\u003c"),y=JSON.stringify(a),s=JSON.stringify(w),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Ht}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${c||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${zt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${h},W=${y},GROUPS=${s};
    var CW=${d},RED='${zt}';
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
  <\/script>`}function er(t,e,o,i,c,n,f,a,p,w,d,h,y,s){var Bt,xt;o=(o||[]).map(O=>({...O,weekly:(O.weekly||[]).map(Q=>Q??0),monthly:(O.monthly||[]).map(Q=>Q??0)})),w&&typeof w=="object"&&Object.values(w).forEach(O=>{!O||typeof O!="object"||Object.values(O).forEach(Q=>{!Q||typeof Q!="object"||Object.keys(Q).forEach(M=>{const D=Q[M];Array.isArray(D)&&(Q[M]=D.map(U=>U??0))})})});const C={aircare:"Xiaomi"};o=o.map(O=>{const Q=C[(O.id||"").toLowerCase()];if(!Q||!O.allScores)return O;const M=Object.entries(O.allScores).find(([dt])=>dt.toLowerCase()===Q.toLowerCase()&&dt.toLowerCase()!=="lg");if(!M)return O;const D=M[1];if(!(D>0))return O;const U=Math.round(O.score/D*100);return{...O,compName:M[0],vsComp:D,compRatio:U,status:U>=100?"lead":U>=80?"behind":"critical"}});const u=(y==null?void 0:y.visibilityOnly)||!1,F=(y==null?void 0:y.includeProgressTracker)===!0,S=(y==null?void 0:y.includePromptList)||!1,b=(s==null?void 0:s.unlaunchedMap)||{},g=n==="en"?"Progress Tracker will be available soon.":"준비 중입니다. 곧 제공될 예정입니다.",x=`/p/progress-tracker-v2/?lang=${n}`,E=F?`<iframe id="tracker-iframe" src="${x}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`:`<div class="progress-placeholder"><div class="inner"><div class="icon">⏳</div><h2>Coming Soon</h2><p>${g}</p></div></div>`,m=we[n]||we.ko;let k;if(p&&p.length)k=p.map(O=>String(O).toUpperCase().startsWith("W")?O.toUpperCase():O);else{const O=w?Math.max(...Object.values(w).flatMap(M=>Object.values(M).flatMap(D=>Object.values(D).map(U=>(U==null?void 0:U.length)||0))),0):0,Q=t.weekStart||Math.max(1,O-11);k=Array.from({length:Math.max(12,O)},(M,D)=>`W${Q+D}`)}const B=new Set;w&&Object.values(w).forEach(O=>Object.keys(O).forEach(Q=>{Q!=="Total"&&B.add(Q)})),f&&f.forEach(O=>{O.country&&O.country!=="TTL"&&B.add(O.country)});const T=[...B].sort(),A=n==="en"?"All":"전체",j=["MS","HS","ES"],N=o.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${O.bu}" value="${O.id}" checked onchange="onFilterChange()"><span>${O.kr}</span></label>`).join(""),R=j.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${O}" checked onchange="onBuChange('${O}')"><span>${O}</span></label>`).join(""),I=T.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${O}" checked onchange="onFilterChange()"><span>${Re(O)}</span></label>`).join(""),P=Object.entries(Be).map(([O,Q])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${O}" checked onchange="onRegionChange('${O}')"><span>${Q.labelEn}</span></label>`).join(""),Z=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${k[k.length-1]} ${n==="en"?"data":"기준"}</span>
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
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${A}</span></label>
        ${R}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${A}</span></label>
        ${N}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${A}</span></label>
        ${P}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${A}</span></label>
        ${I}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Display":"표시"}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${n==="en"?"GEO Insights":"GEO 인사이트"}</span></label>
      </div>
    </div>
  </div>`,Y=[t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Ce(t.noticeText)}</div></div>`:"",t.showTotal!==!1?Zn(e,t,m,n):""].join(""),ft=[];if(w&&Object.keys(w).length){const O={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare"};Object.entries(w).forEach(([Q,M])=>{const D=o.find(dt=>dt.id===Q),U=(D==null?void 0:D.kr)||O[Q]||Q;Object.entries(M).forEach(([dt,ot])=>{if(dt==="Total"||dt==="TTL"||dt==="TOTAL")return;const yt=ot.LG||ot.lg||[],Dt=yt.length>0?yt[yt.length-1]:0;if(Dt<=0)return;let ct="",nt=0;Object.entries(ot).forEach(([Nt,mt])=>{if(Nt==="LG"||Nt==="lg")return;const Tt=Array.isArray(mt)&&mt.length?mt[mt.length-1]:0;Tt>nt&&(nt=Tt,ct=Nt)});const it=+(Dt-nt).toFixed(1),Ft={};Object.entries(ot).forEach(([Nt,mt])=>{if(Array.isArray(mt)&&mt.length){const Tt=mt[mt.length-1];Tt!=null&&(Ft[Nt]=Tt)}}),ft.push({product:U,country:dt,score:Dt,compName:ct,compScore:nt,gap:it,allScores:Ft})})})}const et=((Bt=y==null?void 0:y.weeklyLabelsFull)==null?void 0:Bt[y.weeklyLabelsFull.length-1])||k[k.length-1]||"",lt=et?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${et} ${n==="en"?"data":"기준"}</span>`:"",ut=[Y,t.showProducts!==!1?lo(o,t,m,n,k,b,(y==null?void 0:y.monthlyVis)||[],w,lt):"",`<div id="trend-container">${Yn(o,w,k,m,n,b,lt)}</div>`,t.showCnty!==!1?po(ft,t,m,n,b,lt):""].join(""),Vt=o.map(O=>{const Q=O.monthlyScore||O.score,M=O.monthlyPrev||O.prev,D=O.vsComp||0,U=D>0?Q/D*100:100;return{...O,score:Q,prev:M,weeklyScore:Q,weeklyPrev:M,monthlyScore:Q,monthlyPrev:M,weekly:(O.monthlyScores||[]).map(dt=>dt.score),status:U>=100?"lead":U>=80?"behind":"critical"}}),gt=(((xt=o[0])==null?void 0:xt.monthlyScores)||[]).map(O=>{const Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],M=String(O.date).match(/(\d{1,2})월/),D=String(O.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return M?Q[parseInt(M[1])-1]:D?D[1].charAt(0).toUpperCase()+D[1].slice(1).toLowerCase():O.date}),kt=(y==null?void 0:y.monthlyVis)||[],Ct=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Et=[Y,t.showProducts!==!1?lo(Vt,t,m,n,gt.length?gt:["Feb","Mar"],b,kt,{},Ct):"",`<div id="monthly-trend-container">${Xn(Vt,kt,m,n,b,Ct)}</div>`,t.showCnty!==!1?po(f,t,m,n,b,Ct):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>${Wn({FONT:Ht,RED:zt,COMP:Yt})}</style>
</head>
<body>
${u?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${Z.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${ut}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Et}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${ho(s==null?void 0:s.weeklyPR,s==null?void 0:s.weeklyPRLabels,n,t,s==null?void 0:s.appendixPrompts,s)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${go(s==null?void 0:s.weeklyBrandPrompt,s==null?void 0:s.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    <button class="tab-btn" onclick="switchTab('readability')">Readability</button>
    ${F?`<button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>`:""}
    ${S?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
    ${Z}
    <div id="bu-weekly-content" class="dash-container">${ut}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Et}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${ho(s==null?void 0:s.weeklyPR,s==null?void 0:s.weeklyPRLabels,n,t,s==null?void 0:s.appendixPrompts,s)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${go(s==null?void 0:s.weeklyBrandPrompt,s==null?void 0:s.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
  ${E}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${tr(s==null?void 0:s.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Qn(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${m.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Jn({lang:n,weeklyAll:w,products:o,productsCnty:f,ulMap:b,monthlyVis:y==null?void 0:y.monthlyVis,total:e,meta:t,wLabels:k})}
<\/script>
</body>
</html>`}function or(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),i=t.filter(p=>p.status==="critical"),c=[...t].sort((p,w)=>w.score-p.score)[0],n=[...t].sort((p,w)=>p.score-w.score)[0],f=(t.reduce((p,w)=>p+w.score,0)/t.length).toFixed(1),a=[];return a.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${f}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),c&&a.push(`가장 높은 카테고리는 ${c.kr} ${c.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(c.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?a.push(`취약 카테고리(${i.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&a.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),a.join(" ")}function nr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function rr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}function ir({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:c,metaEn:n,setMetaEn:f,total:a,setTotal:p,products:w,setProducts:d,citations:h,setCitations:y,dotcom:s,setDotcom:C,productsCnty:u,setProductsCnty:F,citationsCnty:S,setCitationsCnty:b,resolved:g,previewLang:x,setPreviewLang:E,snapshots:m,setSnapshots:k,setWeeklyLabels:B,setWeeklyAll:T,weeklyLabels:A,weeklyAll:j,citationsByCnty:N,dotcomByCnty:R,generateHTML:I,publishEndpoint:P,setMonthlyVis:W,onSyncExtra:Z,categoryStats:X,extra:Y,monthlyVis:ft}){const et=q.useRef({products:w,productsCnty:u,citations:h,citationsCnty:S,total:a,dotcom:s,extra:Y});et.current={products:w,productsCnty:u,citations:h,citationsCnty:S,total:a,dotcom:s,extra:Y};function lt(){return et.current}const[ut,Vt]=q.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[gt,kt]=q.useState(!1),[Ct,Et]=q.useState(null),[Bt,xt]=q.useState(""),[O,Q]=q.useState(""),[M,D]=q.useState(!1),[U,dt]=q.useState(""),[ot,yt]=q.useState(!1),[Dt,ct]=q.useState(!1),[nt,it]=q.useState(!1),[Ft,Nt]=q.useState(!1),[mt,Tt]=q.useState(""),[Kt,pe]=q.useState(!1),[ue,Qt]=q.useState(!0),[qt,he]=q.useState(""),[Xt,Fe]=q.useState(null);q.useEffect(()=>{fetch(P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(v=>v.ok?v.json():null).then(Fe).catch(()=>{})},[t,P]);const[Eo,Me]=q.useState(null);q.useEffect(()=>{let l=!0;const v=()=>Ye(t).then(vt=>{l&&Me(vt)});v();const rt=setInterval(v,6e4);return()=>{l=!1,clearInterval(rt)}},[t]);function To(){Ye(t).then(Me)}async function $o(){if(!Ft){Nt(!0),Tt("");try{const l=lt(),v=xe(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),rt=xe(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let vt,Pt,H;if(t==="dashboard"){const V=ft||[],J=l.extra||Y||{};vt=I(i,l.total,v.products,v.citations,l.dotcom,"ko",v.productsCnty,v.citationsCnty,A,j,N,R,V,J),Pt=I(n,l.total,rt.products,rt.citations,l.dotcom,"en",rt.productsCnty,rt.citationsCnty,A,j,N,R,V,J),H=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else vt=I(i,l.total,v.products,v.citations,s,"ko",v.productsCnty,v.citationsCnty,{weeklyLabels:A,categoryStats:X,unlaunchedMap:(Y==null?void 0:Y.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Pt=I(n,l.total,rt.products,rt.citations,s,"en",rt.productsCnty,rt.citationsCnty,{weeklyLabels:A,categoryStats:X,unlaunchedMap:(Y==null?void 0:Y.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),H=`${i.period||""} ${i.title||"Newsletter"}`.trim();const $t=await(await fetch(P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:H,htmlKo:vt,htmlEn:Pt})})).json();if(!$t.ok)throw new Error($t.error||"게시 실패");if(Fe({...$t,published:!0}),t==="dashboard")try{const V=await ve(t)||{},J=l.extra||Y||{};Xe(t,{...V,meta:i,total:l.total,weeklyPR:J.weeklyPR||V.weeklyPR,weeklyPRLabels:J.weeklyPRLabels||V.weeklyPRLabels,weeklyBrandPrompt:J.weeklyBrandPrompt||V.weeklyBrandPrompt,weeklyBrandPromptLabels:J.weeklyBrandPromptLabels||V.weeklyBrandPromptLabels,appendixPrompts:J.appendixPrompts||V.appendixPrompts})}catch{}const Ot=`${window.location.origin}${$t.urls.ko}`,Rt=`${window.location.origin}${$t.urls.en}`;try{await navigator.clipboard.writeText(Ot+`
`+Rt)}catch{}Tt(`KO: ${Ot}
EN: ${Rt}`)}catch(l){Tt("ERROR:"+l.message)}finally{Nt(!1),setTimeout(()=>Tt(""),2e4)}}}async function Lo(){if(!Kt){pe(!0),he("");try{const l=await bn(er,xe,{includeProgressTracker:ue});he(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){he("ERROR: "+l.message)}finally{pe(!1),setTimeout(()=>he(""),15e3)}}}async function Bo(){try{(await(await fetch(P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),{method:"DELETE"})).json()).ok&&Fe(null)}catch{}}async function Ro(){if(x!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}ct(!0)}async function ze(l){ct(!1),it(!0);const v=(l==null?void 0:l.products)??w,rt=(l==null?void 0:l.productsCnty)??u,vt=(l==null?void 0:l.citations)??h,Pt=(l==null?void 0:l.citationsCnty)??S;try{const H=i,re=[H.title||"",H.dateLine||"",H.noticeText||"",H.totalInsight||"",H.reportType||"",H.productInsight||"",H.productHowToRead||"",H.citationInsight||"",H.citationHowToRead||"",H.dotcomInsight||"",H.dotcomHowToRead||"",H.todoText||"",H.kpiLogicText||"",H.cntyInsight||"",H.cntyHowToRead||"",H.citDomainInsight||"",H.citDomainHowToRead||"",H.citCntyInsight||"",H.citCntyHowToRead||"",H.period||"",H.team||"",H.reportNo||""],$=v.map(G=>G.kr||""),$t=v.map(G=>G.compName||""),Ot=vt.map(G=>G.category||""),Rt=[...new Set(rt.map(G=>G.country||""))],V=[...new Set(rt.map(G=>G.product||""))],J=[...new Set(rt.map(G=>G.compName||""))],pt=[...new Set(Pt.map(G=>G.cnty||"").filter(G=>G&&G!=="TTL"))],at=[...re,...$,...$t,...Ot,...Rt,...V,...J,...pt].map(G=>G||" "),K=await vn(at,{from:"ko",to:"en"});let z=0;const Ut={...i,title:K[z++]||H.title,dateLine:K[z++]||H.dateLine,noticeText:K[z++]||H.noticeText,totalInsight:K[z++]||H.totalInsight,reportType:K[z++]||H.reportType,productInsight:K[z++]||H.productInsight,productHowToRead:K[z++]||H.productHowToRead,citationInsight:K[z++]||H.citationInsight,citationHowToRead:K[z++]||H.citationHowToRead,dotcomInsight:K[z++]||H.dotcomInsight,dotcomHowToRead:K[z++]||H.dotcomHowToRead,todoText:K[z++]||H.todoText,kpiLogicText:K[z++]||H.kpiLogicText,cntyInsight:K[z++]||H.cntyInsight,cntyHowToRead:K[z++]||H.cntyHowToRead,citDomainInsight:K[z++]||H.citDomainInsight,citDomainHowToRead:K[z++]||H.citDomainHowToRead,citCntyInsight:K[z++]||H.citCntyInsight,citCntyHowToRead:K[z++]||H.citCntyHowToRead,period:(z++,H.period),team:K[z++]||H.team,reportNo:(z++,H.reportNo)},Lt=G=>G&&G.replace(/\b\w/g,tt=>tt.toUpperCase()),_t=G=>(G||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),Jt={};v.forEach((G,tt)=>{Jt[G.id]={en:Lt(K[z+tt]||G.kr),compNameEn:_t(K[z+$.length+tt]||G.compName)}}),z+=$.length+$t.length;const jt={};vt.forEach((G,tt)=>{jt[`${G.rank}_${G.source}`]=Lt(K[z+tt]||G.category)}),z+=Ot.length;const te={};Rt.forEach((G,tt)=>{te[G]=/^[A-Z]{2,3}$/.test(G)?G:K[z+tt]||G}),z+=Rt.length;const ge={};V.forEach((G,tt)=>{ge[G]=K[z+tt]||G}),z+=V.length;const ie={};J.forEach((G,tt)=>{ie[G]=K[z+tt]||G}),z+=J.length;const ae={};pt.forEach((G,tt)=>{ae[G]=/^[A-Z]{2,3}$/.test(G)?G:K[z+tt]||G}),f(Ut),d(G=>G.map(tt=>{var _e,Ge;return{...tt,en:((_e=Jt[tt.id])==null?void 0:_e.en)||tt.en||tt.kr,compNameEn:((Ge=Jt[tt.id])==null?void 0:Ge.compNameEn)||tt.compNameEn||tt.compName}})),y(G=>G.map(tt=>({...tt,categoryEn:jt[`${tt.rank}_${tt.source}`]||tt.categoryEn||tt.category}))),F(G=>G.map(tt=>({...tt,countryEn:Lt(te[tt.country]||tt.country),productEn:Lt(ge[tt.product]||tt.product),compNameEn:_t(ie[tt.compName]||tt.compName)}))),b(G=>G.map(tt=>({...tt,cntyEn:tt.cnty==="TTL"?"TTL":Lt(ae[tt.cnty]||tt.cnty)}))),it(!1)}catch(H){alert("번역 오류: "+H.message),it(!1)}}async function jo(){const l=I(e,a,g.products,g.citations,s,x,g.productsCnty,g.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const v=document.createElement("textarea");v.value=l,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v)}D(!0),setTimeout(()=>D(!1),2500)}async function Io(){await An(e,a,w,h,s)}async function Do(){if(ot!=="sending"){yt("sending");try{const l=lt(),v=I(e,l.total,l.products,l.citations,l.dotcom,x,l.productsCnty,l.citationsCnty,{weeklyLabels:A,categoryStats:X,unlaunchedMap:(Y==null?void 0:Y.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),rt=`[LG GEO] ${e.title} · ${e.period}`,Pt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:U.trim(),subject:rt,html:v})})).json();if(!Pt.ok)throw new Error(Pt.error||"발송 실패");yt("ok"),setTimeout(()=>yt(!1),4e3)}catch(l){yt("error"),xt(l.message),setTimeout(()=>{yt(!1),xt("")},5e3)}}}async function No(){var rt,vt,Pt,H,re;if(gt)return;const l=zn(ut.trim());if(!l){Et("error"),xt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Et(null),3e3);return}kt(!0),Et(null),xt(""),Q("");const v=[];try{const $=await Gn(l,V=>xt(V));if(v.push(`[Sync] parsed keys: ${Object.keys($).join(", ")||"(없음)"}`),$.meta&&v.push(`[Sync] meta keys: ${Object.keys($.meta).join(", ")}`),$.productsPartial&&v.push(`[Sync] products: ${$.productsPartial.length}건`),v.push(`[Sync] citations: ${((rt=$.citations)==null?void 0:rt.length)??0}건`),v.push(`[Sync] citationsCnty: ${((vt=$.citationsCnty)==null?void 0:vt.length)??0}건`),v.push(`[Sync] dotcom: ${$.dotcom?"OK":"(없음)"}`),v.push(`[Sync] productsCnty: ${((Pt=$.productsCnty)==null?void 0:Pt.length)??0}건`),$.meta){const V=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","noticeText","kpiLogicText","todoText","aiPromptRules"];c(J=>{const pt={...J};for(const[at,K]of Object.entries($.meta))V.includes(at)&&J[at]||(pt[at]=K);return pt}),f(J=>({...J,period:$.meta.period,dateLine:$.meta.dateLine,reportNo:$.meta.reportNo}))}if($.citations&&(y($.citations),et.current={...et.current,citations:$.citations}),$.dotcom&&(C(V=>({...V,...$.dotcom})),et.current={...et.current,dotcom:{...et.current.dotcom,...$.dotcom}}),$.productsCnty&&(F($.productsCnty),et.current={...et.current,productsCnty:$.productsCnty}),$.citationsCnty&&(b($.citationsCnty),et.current={...et.current,citationsCnty:$.citationsCnty}),$.monthlyVis&&W&&W($.monthlyVis),Z){const V={weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,weeklyLabelsFull:$.weeklyLabelsFull||null,prTopicList:$.prTopicList||null};Z(V),et.current={...et.current,extra:{...et.current.extra,...V}}}const $t=$.weeklyLabels||((H=$.meta)==null?void 0:H.weeklyLabels);console.log("[SYNC] weeklyLabels:",$t,"weeklyLabelsFull:",$.weeklyLabelsFull),$t&&$t.length&&B($t),$.weeklyAll&&T(V=>({...V,...$.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys($));const Ot=$.weeklyMap?Object.keys($.weeklyMap):[],Rt=((re=$.productsPartial)==null?void 0:re.map(V=>V.id))||[];if(console.log("[SYNC] weeklyMap keys:",Ot.length?Ot:"NONE"),console.log("[SYNC] productsPartial IDs:",Rt.length?Rt:"NONE"),Ot.length&&Rt.length){const V=Rt.filter(pt=>!Ot.includes(pt)),J=Ot.filter(pt=>!Rt.includes(pt));V.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",V),J.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",J),!V.length&&!J.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if($.productsPartial){const V=$.productsPartial.map(J=>{var ie;const pt=((ie=$.weeklyMap)==null?void 0:ie[J.id])||[],at=pt.filter(ae=>ae!=null&&ae>0),K=J.score,z=J.prev||0,Ut=J.vsComp>0?Math.round(K/J.vsComp*100):100,Lt=at.length>0?at[at.length-1]:K,_t=at.length>=5?at[at.length-5]:at[0]||0,Jt=K,jt=z,te=Ut,ge=z>0&&z!==K?[z,K]:[];return{...J,score:Jt,prev:jt,weekly:pt,monthly:ge,weeklyScore:Lt,weeklyPrev:_t,monthlyScore:K,monthlyPrev:z,compRatio:te,status:te>=100?"lead":te>=80?"behind":"critical"}});d(V),et.current={...et.current,products:V}}else $.weeklyMap&&d(V=>V.map(J=>{var at;const pt=(at=$.weeklyMap)==null?void 0:at[J.id];return pt?{...J,weekly:pt}:J}));if($.total){const V={...et.current.total,...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}};p(J=>({...J,...V})),et.current={...et.current,total:V}}{let V=function(z){if(!z)return 0;const Ut=String(z).trim(),Lt=Ut.match(/(\d{1,2})월/);if(Lt){const jt=parseInt(Lt[1]);return jt>=1&&jt<=12?jt:0}const _t=Ut.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(_t)return at[_t[1].toLowerCase()]||0;const Jt=Ut.match(/\d{4}[-\/](\d{1,2})/);if(Jt){const jt=parseInt(Jt[1]);return jt>=1&&jt<=12?jt:0}return 0};const J=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],at={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let K=0;if($.derivedPeriod){const z=V($.derivedPeriod);z>K&&(K=z)}if($.citDerivedPeriod){const z=V($.citDerivedPeriod);z>K&&(K=z)}K>0&&K<=12&&(c(z=>({...z,period:`${J}년 ${K}월`})),f(z=>({...z,period:`${pt[K]} ${J}`})))}if(!$.total&&$.productsPartial&&$.productsPartial.length>0){const V=$.productsPartial,J=+(V.reduce((at,K)=>at+K.score,0)/V.length).toFixed(1),pt=+(V.reduce((at,K)=>at+(K.vsComp||0),0)/V.length).toFixed(1);p(at=>({...at,score:J,vsComp:pt,rank:J>=pt?1:2}))}if(setTimeout(()=>{Xe(t,{meta:$.meta||null,total:$.total?{...$.total,...$.buTotals?{buTotals:$.buTotals}:{},...$.buTotalsPrev?{buTotalsPrev:$.buTotalsPrev}:{},...$.countryTotals?{countryTotals:$.countryTotals}:{},...$.countryTotalsPrev?{countryTotalsPrev:$.countryTotalsPrev}:{}}:null,productsPartial:$.productsPartial||null,weeklyMap:$.weeklyMap||null,weeklyLabels:$.weeklyLabels||null,weeklyLabelsFull:$.weeklyLabelsFull||null,weeklyAll:$.weeklyAll||null,citations:$.citations||null,dotcom:$.dotcom||null,productsCnty:$.productsCnty||null,citationsCnty:$.citationsCnty||null,citationsByCnty:$.citationsByCnty||null,dotcomByCnty:$.dotcomByCnty||null,appendixPrompts:$.appendixPrompts||null,unlaunchedMap:$.unlaunchedMap||null,prTopicList:$.prTopicList||null,monthlyVis:$.monthlyVis||null,weeklyPR:$.weeklyPR||null,weeklyPRLabels:$.weeklyPRLabels||null,monthlyPR:$.monthlyPR||null,monthlyPRLabels:$.monthlyPRLabels||null,weeklyBrandPrompt:$.weeklyBrandPrompt||null,weeklyBrandPromptLabels:$.weeklyBrandPromptLabels||null,monthlyBrandPrompt:$.monthlyBrandPrompt||null,monthlyBrandPromptLabels:$.monthlyBrandPromptLabels||null,dotcomTrend:$.dotcomTrend||null,dotcomTrendMonths:$.dotcomTrendMonths||null}),setTimeout(To,250)},100),Q(v.join(`
`)),Et("ok"),xt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const V={};$.productsPartial&&(V.products=$.productsPartial.map(J=>{var Lt;const pt=((Lt=$.weeklyMap)==null?void 0:Lt[J.id])||[],at=J.vsComp>0?J.score/J.vsComp*100:100,K=pt.find(_t=>_t!=null&&_t>0),z=J.prev!=null&&J.prev>0?J.prev:K||0,Ut=z>0?[z,J.score]:[];return{...J,prev:z,weekly:pt,monthly:Ut,compRatio:Math.round(at),status:at>=100?"lead":at>=80?"behind":"critical"}})),$.productsCnty&&(V.productsCnty=$.productsCnty),$.citations&&(V.citations=$.citations),$.citationsCnty&&(V.citationsCnty=$.citationsCnty);try{await ze(V)}catch{}xt("동기화 + 번역 완료!")}}catch($){v.push(`[ERROR] ${$.message}`),Et("error"),xt($.message),Q(v.join(`
`))}finally{kt(!1),setTimeout(()=>{Et(null),xt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:ht,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Hn,{...Eo||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:ut,onChange:l=>Vt(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...st,fontSize:11,padding:"7px 9px",marginBottom:8,color:ut?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:No,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:gt?"wait":"pointer",background:gt?"#1E293B":ht,fontSize:12,fontWeight:700,color:gt?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(Ue,{size:13,style:{animation:gt?"spin 1s linear infinite":"none"}}),gt?"동기화 중...":"구글 시트 동기화"]}),(Ct||gt&&Bt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:Ct==="ok"?"#14532D":Ct==="error"?"#450A0A":"#1E293B",color:Ct==="ok"?"#86EFAC":Ct==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${Ct==="ok"?"#22C55E33":Ct==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Bt}),O&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[O,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(O).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsxs("button",{onClick:Ro,disabled:nt,style:{width:"100%",padding:"9px 0",background:nt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:nt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:nt?.6:1},children:[r.jsx(Po,{size:13})," ",nt?"번역 중...":"AI 번역 (EN)"]}),Dt&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>ct(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:ze,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})}),r.jsxs("button",{onClick:Io,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(Oo,{size:12})," 구글 시트 템플릿 다운로드"]}),r.jsxs("button",{onClick:$o,disabled:Ft,style:{width:"100%",padding:"9px 0",background:Ft?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Ft?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:Ft?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(He,{size:12}),Ft?"게시 중...":"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:ue,onChange:l=>Qt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:Lo,disabled:Kt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Kt?"#1E293B":"#166534",color:Kt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:Kt?"wait":"pointer",marginBottom:6},children:[r.jsx(He,{size:12}),Kt?"통합 게시 중...":"통합 대시보드 게시"]}),qt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:qt.startsWith("ERROR")?"#450A0A":"#14532D",color:qt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:qt.startsWith("ERROR:")?qt.slice(6):qt})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||""};if(!Object.values(l).some(rt=>rt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const vt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();vt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(vt.error||""))}catch(rt){alert("아카이빙 실패: "+rt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(Mo,{size:12})," 완성본 아카이빙 (AI 학습)"]}),mt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:mt.startsWith("ERROR:")?"#450A0A":"#14532D",color:mt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${mt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:mt.startsWith("ERROR:")?mt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(We,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[mt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),(Xt==null?void 0:Xt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:Bo,style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Xt.urls.ko},{label:"EN",url:Xt.urls.en}].map(({label:l,url:v})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",v]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${v}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:Xt.ts?new Date(Xt.ts).toLocaleString("ko-KR"):""})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(v=>({...v,reportType:l.target.value})),style:{...st,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(v=>({...v,reportNo:l.target.value})),style:{...st}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(v=>({...v,period:l.target.value})),style:{...st}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(v=>({...v,title:l.target.value})),rows:4,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(v=>({...v,team:l.target.value})),style:{...st,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(v=>({...v,dateLine:l.target.value})),style:{...st,marginBottom:10}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(v=>({...v,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?ht:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(v=>({...v,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...st,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(v=>({...v,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:ht,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(v=>({...v,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,v])=>r.jsx("button",{onClick:()=>o(rt=>({...rt,titleColor:l})),title:v,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:v})=>r.jsx("button",{onClick:()=>o(rt=>({...rt,[l]:!rt[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?ht:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:v},l))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?ht:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?ht:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?ht:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,totalInsight:"⏳ AI 생성 중..."}));const l=await At("totalInsight",{products:lt().products,productsCnty:lt().productsCnty,total:lt().total,todoText:e.todoText||""},x);o(v=>({...v,totalInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,totalInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(v=>({...v,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,productInsight:"⏳ AI 생성 중..."}));const l=await At("product",{products:lt().products,total:lt().total},x);o(v=>({...v,productInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,productInsight:`[AI 실패: ${l.message}]

`+or(lt().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?ht:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(v=>({...v,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,productHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"제품별 GEO Visibility"},x);o(v=>({...v,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:nr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?ht:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(v=>({...v,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,cntyInsight:"⏳ AI 생성 중..."}));const l=await At("cnty",{productsCnty:lt().productsCnty},x);o(v=>({...v,cntyInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,cntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?ht:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(v=>({...v,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"국가별 GEO Visibility"},x);o(v=>({...v,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:rr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?ht:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(v=>({...v,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(v=>({...v,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(v=>({...v,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(v=>({...v,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(v=>({...v,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citationInsight:"⏳ AI 생성 중..."}));const l=await At("citation",{citations:lt().citations},x);o(v=>({...v,citationInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?ht:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(v=>({...v,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citationHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"Citation 도메인별 현황"},x);o(v=>({...v,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?ht:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(v=>({...v,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citDomainInsight:"⏳ AI 생성 중..."}));const l=await At("citDomain",{citationsCnty:lt().citationsCnty},x);o(v=>({...v,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?ht:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(v=>({...v,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"도메인별 Citation 현황"},x);o(v=>({...v,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?ht:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(v=>({...v,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citCntyInsight:"⏳ AI 생성 중..."}));const l=await At("citCnty",{citationsCnty:lt().citationsCnty},x);o(v=>({...v,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?ht:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(v=>({...v,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"국가별 Citation 도메인"},x);o(v=>({...v,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?ht:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(v=>({...v,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),u.length>0&&(()=>{const l=[...new Set(g.productsCnty.map(v=>v.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(v=>{const rt=(e.cntyProductFilter||{})[v]!==!1;return r.jsx("button",{onClick:()=>o(vt=>({...vt,cntyProductFilter:{...vt.cntyProductFilter||{},[v]:!rt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:rt?"#166534":"#1E293B",color:rt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:v},v)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,dotcomInsight:"⏳ AI 생성 중..."}));const l=await At("dotcom",{dotcom:lt().dotcom},x);o(v=>({...v,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?ht:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(v=>({...v,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await At("howToRead",{section:"닷컴 Citation"},x);o(v=>({...v,dotcomHowToRead:l}))}catch{o(v=>({...v,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?ht:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(v=>({...v,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(v=>({...v,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(v=>({...v,todoText:"⏳ AI 생성 중..."}));const l=await At("todo",{products:lt().products},x);o(v=>({...v,todoText:l}))}catch(l){console.error("[AI]",l),o(v=>({...v,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(St,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?ht:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(v=>({...v,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...st,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("button",{onClick:jo,style:{width:"100%",padding:"9px 0",background:M?"#14532D":"transparent",border:`1px solid ${M?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:M?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:M?r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," 이메일 HTML 복사"]})}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:U,onChange:l=>dt(l.target.value),placeholder:"recipient@example.com",style:{...st,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:Do,disabled:ot==="sending"||!U.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:ot==="sending"||!U.trim()?"not-allowed":"pointer",background:ot==="ok"?"#14532D":ot==="error"?"#7F1D1D":ot==="sending"?"#1E3A5F":U.trim()?"#1D4ED8":"#1E293B",color:ot==="ok"?"#86EFAC":ot==="error"?"#FCA5A5":U.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:ot==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(Ue,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):ot==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:12})," 발송 완료!"]}):ot==="error"?r.jsxs(r.Fragment,{children:[r.jsx(Ve,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(Ve,{size:12})," 메일 발송"]})})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}const ee="weekly-report",fo="geo-weekly-report-cache";function ar({meta:t,total:e,products:o,citations:i,dotcom:c,productsCnty:n=[],citationsCnty:f=[],lang:a="ko",weeklyLabels:p,weeklyAll:w,categoryStats:d}){const h=q.useRef(null),y=q.useMemo(()=>je(t,e,o,i,c,a,n,f,{weeklyLabels:p,weeklyAll:w,categoryStats:d}),[t,e,o,i,c,a,n,f,p,w,d]);return Ho.useEffect(()=>{const s=h.current;if(!s)return;const C=s.contentDocument||s.contentWindow.document;C.open(),C.write(y),C.close();const u=()=>{try{C.body.style.overflow="hidden",C.documentElement.style.overflow="hidden";const F=C.documentElement.scrollHeight;F&&(s.style.height=F+20+"px")}catch{}};setTimeout(u,150),setTimeout(u,400),setTimeout(u,1e3),setTimeout(u,2e3)},[y]),r.jsx("iframe",{ref:h,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function sr({meta:t,total:e,products:o,citations:i,dotcom:c,productsCnty:n=[],citationsCnty:f=[],lang:a="ko",weeklyLabels:p,weeklyAll:w,categoryStats:d}){const[h,y]=q.useState(!1),s=q.useMemo(()=>je(t,e,o,i,c,a,n,f,{weeklyLabels:p,weeklyAll:w,categoryStats:d}),[t,e,o,i,c,a,n,f,p,w,d]);async function C(){try{await navigator.clipboard.writeText(s)}catch{const u=document.createElement("textarea");u.value=s,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u)}y(!0),setTimeout(()=>y(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsx("div",{children:r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"주간 리포트 HTML"})}),r.jsx("button",{onClick:C,style:{padding:"6px 14px",borderRadius:7,border:"none",background:h?"#14532D":ht,color:h?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:h?r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:s})})]})}function lr(){const t=q.useRef(un(fo)).current,[e,o]=q.useState({...fe,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,c]=q.useState({...fe,...(t==null?void 0:t.metaEn)??{}}),[n,f]=q.useState((t==null?void 0:t.total)??an),[a,p]=q.useState((t==null?void 0:t.products)??sn),[w,d]=q.useState((t==null?void 0:t.citations)??pn),[h,y]=q.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:ln),[s,C]=q.useState((t==null?void 0:t.productsCnty)??cn),[u,F]=q.useState((t==null?void 0:t.citationsCnty)??dn),[S,b]=q.useState((t==null?void 0:t.weeklyLabels)??null),[g,x]=q.useState((t==null?void 0:t.weeklyAll)??{}),[E,m]=q.useState(null),[k,B]=q.useState("preview"),[T,A]=q.useState("ko"),[j,N]=q.useState([]),[R,I]=q.useState(""),[P,W]=q.useState(!1),[Z,X]=q.useState(""),[Y,ft]=q.useState(null),[et,lt]=q.useState(!0);q.useEffect(()=>{let M=!1;const D=kn(e.period)||`${new Date().getMonth()+1}월`,U=Fn(D);async function dt(){var ot,yt,Dt;try{const ct=await fetch("/api/tracker-snapshot-v2"),nt=ct.ok?await ct.json():null;if(nt!=null&&nt.ok&&((Dt=(yt=(ot=nt.data)==null?void 0:ot.quantitativeGoals)==null?void 0:yt.rows)!=null&&Dt.length)){const it=Qe(nt.data,U);if(it!=null&&it.length&&!M){m(it);return}}}catch{}try{const[{parseKPISheet:ct},nt]=await Promise.all([$e(()=>import("./sheetParser-BGRKNm5Y.js"),[]),$e(()=>import("./xlsx-2l-k0XfJ.js").then(qt=>qt.x),__vite__mapDeps([0,1]))]),it=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Ft=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${it}&headers=1`,Nt=await fetch(Ft,{cache:"no-store"});if(!Nt.ok)return;const mt=await Nt.text(),Tt=nt.read(mt,{type:"string"}),Kt=Tt.Sheets[Tt.SheetNames[0]],pe=nt.utils.sheet_to_json(Kt,{header:1,defval:""}),ue=ct(pe),Qt=Qe(ue,U);Qt!=null&&Qt.length&&!M&&m(Qt)}catch{}}return dt(),()=>{M=!0}},[e.period]);const ut=T==="en"?i:e,Vt=T==="en"?c:o,gt=q.useMemo(()=>xe(a,s,w,u,T),[a,s,w,u,T]);q.useEffect(()=>{gn(ee).then(N)},[]);const kt=q.useRef(null);function Ct(M,D=2e3){clearTimeout(kt.current),X(M),kt.current=setTimeout(()=>X(""),D)}q.useEffect(()=>()=>clearTimeout(kt.current),[]);const Et=q.useRef(!1);q.useEffect(()=>{let M=!1;return ve(ee).then(D=>{M||!D||(Et.current=!0,D.meta&&o(U=>({...U,...D.meta})),D.total&&f(U=>({...U,...D.total})),D.citations&&d(D.citations),D.dotcom&&y(U=>({...U,...D.dotcom})),D.productsCnty&&C(D.productsCnty),D.citationsCnty&&F(D.citationsCnty),D.weeklyLabels&&b(D.weeklyLabels),D.weeklyAll&&x(U=>({...U,...D.weeklyAll})),D.productsPartial?p(D.productsPartial.map(U=>{var yt;const dt=((yt=D.weeklyMap)==null?void 0:yt[U.id])||[],ot=U.vsComp>0?U.score/U.vsComp*100:100;return{...U,weekly:dt,monthly:[],compRatio:Math.round(ot),status:ot>=100?"lead":ot>=80?"behind":"critical"}})):D.weeklyMap&&p(U=>U.map(dt=>{var yt;const ot=(yt=D.weeklyMap)==null?void 0:yt[dt.id];return ot?{...dt,weekly:ot}:dt})))}),()=>{M=!0}},[]),q.useEffect(()=>{hn(fo,{metaKo:e,metaEn:i,total:n,products:a,citations:w,dotcom:h,productsCnty:s,citationsCnty:u,weeklyLabels:S,weeklyAll:g})},[e,i,n,a,w,h,s,u,S,g]);async function Bt(){if(!Y)return;const D=await yn(ee,Y,{metaKo:e,metaEn:i,total:n,products:a,citations:w,dotcom:h,productsCnty:s,citationsCnty:u,weeklyLabels:S,weeklyAll:g});D&&N(D),Ct(D?"저장 완료!":"저장 실패")}async function xt(){var U;const M=R.trim()||`${ut.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,D=await fn(ee,M,{metaKo:e,metaEn:i,total:n,products:a,citations:w,dotcom:h,productsCnty:s,citationsCnty:u,weeklyLabels:S,weeklyAll:g});D&&(N(D),I(""),ft(((U=D[0])==null?void 0:U.ts)||null)),Ct(D?"새로 저장 완료!":"저장 실패")}function O(M){const D=M.data;o({...fe,...D.metaKo||D.meta||{}}),c({...fe,...D.metaEn||{}}),D.total&&f(D.total),D.products&&p(D.products),D.citations&&d(D.citations),D.dotcom&&y(D.dotcom),D.productsCnty&&C(D.productsCnty),D.citationsCnty&&F(D.citationsCnty),D.weeklyLabels&&b(D.weeklyLabels),D.weeklyAll&&x(D.weeklyAll),ft(M.ts),Ct(`"${M.name}" 불러옴`)}async function Q(M){const D=j[M];if(!D)return;const U=await mn(ee,D.ts);U&&N(U),Y===D.ts&&ft(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[et&&r.jsx(ir,{mode:ee,meta:ut,setMeta:Vt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:c,total:n,setTotal:f,products:a,setProducts:p,citations:w,setCitations:d,dotcom:h,setDotcom:y,productsCnty:s,setProductsCnty:C,citationsCnty:u,setCitationsCnty:F,resolved:gt,previewLang:T,setPreviewLang:A,snapshots:j,setSnapshots:N,setWeeklyLabels:b,setWeeklyAll:x,weeklyLabels:S,weeklyAll:g,generateHTML:je}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>lt(M=>!M),title:et?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:et?r.jsx(zo,{size:16}):r.jsx(_o,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:M,tab:D,lang:U,label:dt})=>{const ot=D==="code"?k==="code":k==="preview"&&T===U;return r.jsx("button",{onClick:()=>{B(D),U&&A(U)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:ot?"#1E293B":"transparent",color:ot?"#FFFFFF":"#475569",fontSize:11,fontWeight:ot?700:500,fontFamily:L,cursor:"pointer"},children:dt},M)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[Z&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:Z}),r.jsxs("button",{onClick:Bt,disabled:!Y,title:Y?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:Y?"pointer":"default",background:Y?"#1D4ED8":"#1E293B",color:Y?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:Y?1:.5},children:[r.jsx(Ke,{size:11})," 저장"]}),r.jsx("input",{value:R,onChange:M=>I(M.target.value),placeholder:"버전 이름...",onKeyDown:M=>M.key==="Enter"&&xt(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:xt,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Ke,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>W(!P),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:P?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Go,{size:11})," 불러오기 ",j.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",j.length,")"]})]}),P&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:M=>M.stopPropagation(),children:j.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):j.map((M,D)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:Y===M.ts?"#1E3A5F":"#0F172A",border:Y===M.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(M.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{O(M),W(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>Q(D),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(Uo,{size:10})})]},M.ts))})]})]})]}),k==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:r.jsx(ar,{meta:ut,total:n,products:gt.products,citations:gt.citations,dotcom:h,productsCnty:gt.productsCnty,citationsCnty:gt.citationsCnty,lang:T,weeklyLabels:S,weeklyAll:g,categoryStats:E})})}):r.jsx(sr,{meta:ut,total:n,products:gt.products,citations:gt.citations,dotcom:h,productsCnty:gt.productsCnty,citationsCnty:gt.citationsCnty,lang:T,weeklyLabels:S,weeklyAll:g,categoryStats:E}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}Wo.createRoot(document.getElementById("root")).render(r.jsx(lr,{}));
