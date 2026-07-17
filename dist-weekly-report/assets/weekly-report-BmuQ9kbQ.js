const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-CaYOwpyI.js","assets/react-Ce9l3SD5.js"])))=>i.map(i=>d[i]);
import{j as n,b as at,R as uo,L as gn,D as yn,G as ho,A as bn,c as He,S as Mt,P as xn,C as qe,d as _o,e as fo,f as zo,h as vn,i as wn,k as mo,F as Cn,T as kn}from"./react-Ce9l3SD5.js";import{R as Sn}from"./react-dom-D_GsT2Iz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const Fn="modulepreload",Tn=function(t){return"/admin/weekly-report/"+t},go={},Je=function(e,o,s){let a=Promise.resolve();if(o&&o.length>0){let l=function(x){return Promise.all(x.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=l(o.map(x=>{if(x=Tn(x),x in go)return;go[x]=!0;const f=x.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":Fn,f||(p.as="script"),p.crossOrigin="",p.href=x,h&&p.setAttribute("nonce",h),document.head.appendChild(p),f)return new Promise((u,k)=>{p.addEventListener("load",u),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},En=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Pe={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},Go={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Le={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Te={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},An={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(En.map((t,e)=>[t,e]));const Uo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Ho=new Set(Object.values(Le)),yo=[...new Set(Object.values(Uo))].filter(t=>!Ho.has(t));yo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:yo,validCodes:[...Ho]});const ae="Total";function Ln(...t){const e=new Set([ae]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(s=>{s!=null&&s.llmModel&&e.add(s.llmModel),((s==null?void 0:s.monthlyScores)||[]).forEach(r=>Object.keys((r==null?void 0:r.byLlm)||{}).forEach(l=>e.add(l)))})}),[ae,...Array.from(e).filter(o=>o!==ae).sort((o,s)=>o.localeCompare(s))]}function Wo(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var x;const s=(o==null?void 0:o.monthlyScores)||[];if(!s.length)return o;const a=s.filter(f=>{var d;return(d=f==null?void 0:f.byLlm)==null?void 0:d[e]}),r=a[a.length-1]||null,l=a.length>=2?a[a.length-2]:null;if(!r)return o;const c=r.byLlm[e],h=(x=l==null?void 0:l.byLlm)==null?void 0:x[e];return{...o,score:c.score??o.score,prev:(h==null?void 0:h.score)??null,vsComp:c.comp??o.vsComp,allScores:c.allScores??o.allScores,monthlyScore:c.score??o.monthlyScore??o.score,monthlyPrev:(h==null?void 0:h.score)??null,monthlyScores:s.map(f=>{var p;const d=(p=f==null?void 0:f.byLlm)==null?void 0:p[e];return d?{...f,score:d.score,comp:d.comp,allScores:d.allScores}:{...f,score:null,comp:null,allScores:null}})}})}function Vo(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var f;const s=(o==null?void 0:o.monthlyScores)||[];if(!s.length)return o;const a=s.filter(d=>{var p;return(p=d==null?void 0:d.byLlm)==null?void 0:p[e]}),r=a[a.length-1]||null,l=a.length>=2?a[a.length-2]:null;if(!r)return o;const c=r.byLlm[e],h=(f=l==null?void 0:l.byLlm)==null?void 0:f[e],x=c.compScore??o.compScore;return{...o,score:c.score??o.score,prev:(h==null?void 0:h.score)??null,compScore:x,compName:c.compName??o.compName,allScores:c.allScores??o.allScores,gap:+((c.score??o.score)-x||0).toFixed(2),monthlyScores:s.map(d=>{var u;const p=(u=d==null?void 0:d.byLlm)==null?void 0:u[e];return p?{...d,score:p.score,compScore:p.compScore,compName:p.compName,allScores:p.allScores}:{...d,score:null,compScore:null,compName:null,allScores:null}})}})}function Bn(t,e){if(!Array.isArray(t)||!e||e===ae)return(t||[]).filter(a=>!a.llmModel||a.llmModel===ae||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const r=`${a.date}|${a.country}|${a.division}`;o[r]||(o[r]={}),o[r][a.llmModel]=a});const s=[];return Object.values(o).forEach(a=>{const r=a[e]||a[ae]||a.TOTAL||a.All;r&&s.push(r)}),s}function Ko(t,e,o){if(!o||o===ae||!Array.isArray(e)||!e.length)return t;const s=e.filter(l=>(l.country==="TOTAL"||l.country==="TTL")&&(l.division==="TOTAL"||l.division==="TTL"||l.division==="")&&l.llmModel===o);if(!s.length)return t;s.sort((l,c)=>String(l.date).localeCompare(String(c.date)));const a=s[s.length-1],r=s.length>=2?s[s.length-2]:null;return{...t,score:a.lg??t.score,prev:(r==null?void 0:r.lg)??t.prev,vsComp:a.comp??t.vsComp}}const pt="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",$n=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function ve(t){const e=$n.indexOf(t);return e>=0?e:999}function Nt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const bo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function qo(t){return bo.filter(e=>t.includes(e)).concat(t.filter(e=>!bo.includes(e)))}const Rn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function Jo(t){return Rn[String(t||"").trim().toUpperCase()]||t}function Ee(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function In(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ye(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function Se(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function jn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Pe,s=Go,a=[],r=[];Object.entries(t).forEach(([h,x])=>{if(!x)return;const f=x.Total||x.TTL||x.TOTAL;if(f){const d=f.LG||f.lg||[],p=d.length>0?d[d.length-1]:null,u=d.length>=2?d[d.length-2]:null;let k="",v=0;Object.entries(f).forEach(([y,w])=>{if(y==="LG"||y==="lg")return;const b=Array.isArray(w)&&w.length?w[w.length-1]:0;b>v&&(v=b,k=y)}),p!=null&&p>0&&a.push({id:h,kr:o[h]||h,bu:s[h]||"OTHER",score:p,prev:u,vsComp:v,compName:k,category:o[h]||h})}Object.entries(x).forEach(([d,p])=>{if(d==="Total"||d==="TTL"||d==="TOTAL")return;const u=p.LG||p.lg||[],k=u.length>0?u[u.length-1]:null,v=u.length>=2?u[u.length-2]:null;if(k==null||k<=0)return;let y="",w=0;Object.entries(p).forEach(([b,O])=>{if(b==="LG"||b==="lg")return;const M=Array.isArray(O)&&O.length?O[O.length-1]:0;M>w&&(w=M,y=b)}),r.push({product:o[h]||h,country:d,score:k,prev:v,compScore:w,compName:y})})});const l=(e==null?void 0:e[e.length-1])||"This Week",c=(e==null?void 0:e[e.length-2])||"Last Week";return{products:a,productsCnty:r,lastLabel:l,prevLabel:c}}function Pn(t,e,o,s){if(!t.length)return"";const a=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],l={};t.forEach(h=>{const x=h.bu||"OTHER";l[x]||(l[x]=[]),l[x].push(h)});const c=[];return r.forEach(h=>{const x=(l[h]||[]).slice().sort((f,d)=>ve(f.kr||f.category||f.id)-ve(d.kr||d.category||d.id));x.forEach((f,d)=>{const p=In(f.score,f.prev),u=Se(f.score,f.vsComp)||"#FFFFFF";c.push(`<tr>
        ${d===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${h}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${Nt(f.kr||f.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${u};">${Ee(f.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${u};">${Ee(f.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${u};">${Nt(f.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${u};">${Ye(f.score,f.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${p}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${s})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.wow}</th>
      </tr>
    </thead>
    <tbody>${c.join("")}</tbody>
  </table>`}function Mn(t,e,o,s){const a=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},l=new Set,c=new Set;t.forEach(u=>{!u.country||!u.product||(l.add(u.country),c.add(u.product),r[u.product]||(r[u.product]={}),r[u.product][u.country]=u)});const h=qo(Array.from(l)),x=Array.from(c).sort((u,k)=>ve(u)-ve(k));if(!x.length||!h.length)return"";const f={};(o||[]).forEach(u=>{[u.kr,u.category,u.id,u.en].filter(Boolean).forEach(v=>{f[v]=u})});const d='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+h.map(u=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Nt(Jo(u))}</th>`).join(""),p=[];return x.forEach((u,k)=>{const v=k%2===0?"#FFFFFF":"#FAFAFA",y=f[u],b=(y?Se(y.score,y.vsComp):null)||v,O=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${b};">${y?Ee(y.score):"—"}</td>`,M=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${b};">${y?Ye(y.score,y.vsComp):"—"}</td>`,N=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${b};color:#1A1A1A;font-weight:600;">${y!=null&&y.compName?Nt(y.compName):"—"}</td>`,V=h.map(W=>{var R;const $=(R=r[u])==null?void 0:R[W],A=($?Se($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${A};">${$?Ee($.score):"—"}</td>`}).join(""),B=h.map(W=>{var R;const $=(R=r[u])==null?void 0:R[W],A=($?Se($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${A};">${$?Ye($.score,$.compScore):"—"}</td>`}).join(""),z=h.map(W=>{var R;const $=(R=r[u])==null?void 0:R[W],A=($?Se($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${$!=null&&$.compName?Nt($.compName):"—"}</td>`}).join("");p.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Nt(u)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${O}${V}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${M}${B}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${N}${z}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${s})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${d}
      </tr>
    </thead>
    <tbody>${p.join("")}</tbody>
  </table>
  </div>`}function Dn(t,e,o,s){const a=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${s})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${s})`,product:"제품"},r={},l=new Set,c=new Set;t.forEach(p=>{!p.country||!p.product||(l.add(p.country),c.add(p.product),r[p.product]||(r[p.product]={}),r[p.product][p.country]=p)});const h=qo(Array.from(l)),x=Array.from(c).sort((p,u)=>ve(p)-ve(u));if(!x.length||!h.length)return"";const f=h.map(p=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Nt(Jo(p))}</th>`).join(""),d=x.map(p=>{const u=h.map(k=>{var V;const v=(V=r[p])==null?void 0:V[k];if(!v||v.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;color:#999;">—</td>`;const y=v.score,w=v.prev,b=w!=null?+(y-w).toFixed(1):null,O=b==null?"#999":b>0?"#16A34A":b<0?"#DC2626":"#666",M=b==null?"":b>0?"▲":b<0?"▼":"─",N=b!=null?`${M}${Math.abs(b).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;">
        <div style="font-weight:700;color:#111;">${Ee(y)}%</div>
        <div style="font-size:9px;color:${O};">${N}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Nt(p)}</td>
      ${u}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${a.product}</th>
      ${f}
    </tr></thead>
    <tbody>${d}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${pt};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function On(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},s=t.reduce((r,l)=>r+(l.score||0),0),a=t.map((r,l)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${l+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${Nt(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${s>0?(r.score/s*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${a}</tbody>
  </table>`}function Nn(t,e){const o=(t||[]).filter(c=>c.cnty==="TTL"||c.cnty==="TOTAL"||!c.cnty);if(!o.length)return"";o.sort((c,h)=>(h.citations||0)-(c.citations||0));const s=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((c,h)=>c+(h.citations||0),0),l=s.map((c,h)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${h+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${Nt(c.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${Nt(c.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${(c.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${r>0?(c.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function _n(t,e){if(!t||!t.lg)return"";const o=t.lg,s=t.samsung||{},a=Object.keys(o).filter(c=>o[c]!=null);if(!a.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},l=a.map(c=>{const h=o[c]||0,x=s[c]||0,f=h-x,d=f>0?"LG":f<0?"SS":"=",p=f>0?"#86EFAC":f<0?"#FCA5A5":"#FFFFFF",u=f>0?"#14532D":f<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${p};color:${u};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:${c==="TTL"?"900":"600"};">${Nt(c)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${f>0?"+":""}${f.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;font-weight:900;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function zn(t,e){var l;if(!t||!t.length)return"";const o=((l=t[0])==null?void 0:l.targetMonth)||"3월",s=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(c){return c>=80?"#D1FAE5":c>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(c=>{const h=(c.monthRate||0).toFixed(0),x=(c.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${pt};background:#F5F5F5;">${Nt(c.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(c.monthRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.monthActual||0).toLocaleString()} / ${(c.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(c.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.cumActual||0).toLocaleString()} / ${(c.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${pt};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${s.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function to(t,e,o,s,a={},r="ko",l=[],c=[],h={}){const{weeklyAll:x={},weeklyLabels:f=[],categoryStats:d=null,cntyKeys:p=null,llmModel:u,monthlyVis:k}=h;u&&u!=="Total"&&(o=Wo(o,u),l=Vo(l,u),e=Ko(e,k,u));let v=x;if(Array.isArray(p)&&p.length>0){const B=new Set(p.map(W=>String(W).toUpperCase())),z=W=>/^(total|ttl)$/i.test(String(W));l=(l||[]).filter(W=>W&&B.has(String(W.country).toUpperCase())),c=(c||[]).filter(W=>W&&B.has(String(W.country).toUpperCase())),v={},Object.entries(x||{}).forEach(([W,$])=>{if(!$)return;const q={};Object.entries($).forEach(([A,R])=>{(z(A)||B.has(String(A).toUpperCase()))&&(q[A]=R)}),v[W]=q})}const y=jn(v,f),w=y.products.length?y.products:o,b=y.productsCnty.length?y.productsCnty:l,O=y.lastLabel,M=y.prevLabel,N=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",V=t.period||O||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Nt(N)} — ${Nt(V)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${pt} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${pt};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${pt};">${Nt(N)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${pt};">${Nt(V)} · ${O?`${Nt(O)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${Pn(w,r,O,M)}
    ${Dn(b,r,O,M)}
    ${Mn(b,r,w,O)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${On(s,r)}
    ${Nn(c,r)}
    ${_n(a,r)}

    ${zn(d,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${pt};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const Bt="#CF0652",T="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Gn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Re={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,modelDeltaInsight:"",showModelDeltaInsight:!1,showHighlight:!0,highlightInsight:"",showHighlightInsight:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Gn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showModelDelta:!0,showCompRatioDelta:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showDotcomChatGpt:!0,showTouchPointsBump:!0,showTouchPointsBumpChatGpt:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Un={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Hn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Wn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Vn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Kn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],qn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Yo=3;function Jn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Yo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Yn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Yo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ge={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function he(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Xn(t){try{const e=await fetch(he(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Zn(t,e,o){try{const s=await fetch(he(t).snapshots,{method:"POST",headers:Ge,body:JSON.stringify({name:e,data:o})});if(!s.ok)return console.warn("[API] postSnapshot:",s.status),null;const a=await s.json();return a.ok?a.snapshots:null}catch(s){return console.warn("[API] postSnapshot failed:",s.message),null}}async function Qn(t,e,o){try{const s=await fetch(`${he(t).snapshots}/${e}`,{method:"PUT",headers:Ge,body:JSON.stringify({data:o})});if(!s.ok)return console.warn("[API] updateSnapshot:",s.status),null;const a=await s.json();return a.ok?a.snapshots:null}catch(s){return console.warn("[API] updateSnapshot failed:",s.message),null}}async function tr(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const s=await o.json();return s.ok?s.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Dt(t,e,o="ko",s=""){try{const a=await fetch("/api/generate-insight",{method:"POST",headers:Ge,body:JSON.stringify({type:t,data:e,lang:o,rules:s})});if(!a.ok){const l=await a.json().catch(()=>({}));throw new Error(l.error||`HTTP ${a.status}`)}const r=await a.json();if(!r.ok)throw new Error(r.error||"AI 생성 실패");return r.insight}catch(a){throw console.error("[API] generateAIInsight failed:",a.message),a}}async function Me(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function xo(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function er(t,e,o={}){const{includeReadability:s=!1}=o,[a,r]=await Promise.all([Me("dashboard").catch(()=>null),Me("visibility").catch(()=>null)]),l={...a||{},...r||{}};if(a&&Object.keys(a).forEach(A=>{l[A]==null&&a[A]!=null&&(l[A]=a[A])}),r!=null&&r.meta&&(a!=null&&a.meta)&&(l.meta={...a.meta||{},...r.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const c=l.meta||{},h=l.total||{},f=(l.productsPartial||l.products||[]).map(A=>{var G;const R=A.weekly||((G=l.weeklyMap)==null?void 0:G[A.id])||[],L=A.vsComp>0?A.score/A.vsComp*100:100;return{...A,weekly:R,monthly:A.monthly||[],compRatio:A.compRatio||Math.round(L),status:A.status||(L>=100?"lead":L>=80?"behind":"critical")}}),d=l.citations||[],p=l.dotcom||{},u=l.productsCnty||[],k=l.citationsCnty||[],v=l.weeklyLabels||null,y=l.weeklyAll||{},w=l.citationsByCnty||{},b=l.dotcomByCnty||{},O=e(f,u,d,k,"ko"),M=e(f,u,d,k,"en"),N={weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],monthlyPR:l.monthlyPR||[],monthlyPRLabels:l.monthlyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},V={monthlyVis:l.monthlyVis||[],includeReadability:s},B=t(c,h,O.products,O.citations,p,"ko",O.productsCnty,O.citationsCnty,v,y,w,b,V,N),z=t({...c,title:c.title||"GEO KPI Dashboard"},h,M.products,M.citations,p,"en",M.productsCnty,M.citationsCnty,v,y,w,b,V,N),W=`${c.period||""} ${c.title||"KPI Dashboard"}`.trim(),q=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:W,htmlKo:B,htmlEn:z})})).json();if(!q.ok)throw new Error(q.error||"게시 실패");return q}async function vo(t,e){try{const o=await fetch(he(t).syncData,{method:"POST",headers:Ge,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const or={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},We={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},wo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function be(t,e,o,s,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:s}:{products:t.map(r=>({...r,kr:r.en||We[r.kr]||r.kr,compName:r.compNameEn||wo[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||or[r.country]||r.country,product:r.productEn||We[r.product]||r.product,compName:r.compNameEn||wo[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||We[r.category]||r.category})),citationsCnty:s.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function nr(t,{from:e="ko",to:o="en"}={}){const a=[];for(let r=0;r<t.length;r+=20){const l=t.slice(r,r+20),c=await Promise.all(l.map(async h=>{if(!h||!h.trim())return h;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(h)}`,f=await fetch(x);if(!f.ok)throw new Error(`번역 실패 (${f.status})`);return(await f.json())[0].map(p=>p[0]).join("")}));a.push(...c)}return a}const Ie=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],rr=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function ir(t){const e=rr.indexOf(t);return e>=0?e:999}function je(t){return ir(t)}function Xo(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function ar(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[Xo(o)]=o)}),e}function Co(t,e){var d,p,u,k;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(u=(p=t==null?void 0:t._dashboard)==null?void 0:p.categoryStats)!=null&&u.length?[...t._dashboard.categoryStats].sort((v,y)=>je(v.category)-je(y.category)):null;const o=t.quantitativeGoals.rows,s=ar((k=t.quantitativeResults)==null?void 0:k.rows),r=new Date().getMonth()+1-1,l=r>=3&&r<=12?`${r}월`:"3월";let c=e||t._month||l,h=Ie.indexOf(c);h<0&&(c="3월",h=0);const x=[...new Set(o.map(v=>v.taskCategory).filter(Boolean))],f=h>0?Ie[h-1]:null;return x.map(v=>{const y=o.filter($=>$.taskCategory===v);let w=0,b=0,O=0,M=0,N=0,V=0;y.forEach($=>{var G,K,tt,et,g;const q=Xo($),A=s[q]||{},R=typeof((G=$.monthly)==null?void 0:G[c])=="number"?$.monthly[c]:0,L=typeof((K=A.monthly)==null?void 0:K[c])=="number"?A.monthly[c]:0;if(b+=R,w+=L,f){const J=typeof((tt=$.monthly)==null?void 0:tt[f])=="number"?$.monthly[f]:0,U=typeof((et=A.monthly)==null?void 0:et[f])=="number"?A.monthly[f]:0;V+=J,N+=U}for(let J=0;J<=h;J++){const U=Ie[J];typeof((g=A.monthly)==null?void 0:g[U])=="number"&&(O+=A.monthly[U])}Ie.forEach(J=>{var U;typeof((U=$.monthly)==null?void 0:U[J])=="number"&&(M+=$.monthly[J])})});const B=b>0?Math.round(w/b*1e3)/10:0,z=V>0?Math.round(N/V*1e3)/10:0,W=M>0?Math.round(O/M*1e3)/10:0;return{category:v,taskCount:y.length,targetMonth:c,monthRate:B,prevMonthRate:z,prevMonth:f,progressRate:W,monthActual:w,monthGoal:b,cumActual:O,annualGoal:M}}).sort((v,y)=>je(v.category)-je(y.category))}function sr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},s=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return s?`${o[s[1].toLowerCase()]}월`:null}function lr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const s=parseInt(e[1])-1;return s<3?"3월":`${s}월`}async function Zo(){const t=await Je(()=>import("./xlsx-CaYOwpyI.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function Xe(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Kt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function cr(t,e){return Array.isArray(t)?t.length===0?(Xe(e,"invalid input: empty rows",{len:0}),!1):!0:(Xe(e,"invalid input: not an array",{type:typeof t}),!1)}function eo(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const s=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>s.some(r=>a instanceof RegExp?a.test(r):r===String(a).toLowerCase()))})}function dr(t,e="sync"){var a,r,l;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(l=t.weeklyLabels)!=null&&l.length&&t.weeklyLabels.every((h,x)=>h===`W${x+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const jt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",unlaunched:"unlaunched",prTopicList:"PR Topic List"},ko=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],So=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function pr(t,e,o,s,a={}){const r=await Zo(),l=r.utils.book_new(),c=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);c["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(l,c,"meta");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);h["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(l,h,"total");const x=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(v=>[v.id,v.bu,v.kr,v.score,v.prev,v.vsComp,v.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(l,x,"products");const f=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(v=>[v.id,v.kr,...v.weekly])]);f["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(l,f,"weekly");const d=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...s.map(v=>[v.rank,v.source,v.category,v.score,v.delta,v.ratio??0])]);d["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(l,d,"citations");const p=(a==null?void 0:a.lg)||{},u=(a==null?void 0:a.samsung)||{},k=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...ko.map(v=>`LG_${v}`),...So.map(v=>`Samsung_${v}`)],[...ko.map(v=>p[v]??0),...So.map(v=>u[v]??0)]]);k["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(l,k,"dotcom"),r.writeFile(l,"GEO_Newsletter_템플릿.xlsx")}function te(t){const e=String(t??"").trim(),o=e.includes("%"),s=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(s)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function De(t){return t==null||String(t).trim()===""?null:te(t)}function Gt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function se(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const ur={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function hr(t){const e=se(t);return ur[e]||e}function xe(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let s=0,a=0;const r=e.match(/(\d{4})/);if(r)a=parseInt(r[1]);else{const c=e.match(/(\d{2})년/);if(c)a=2e3+parseInt(c[1]);else{const h=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);h&&(a=2e3+parseInt(h[1]))}}const l=e.match(/(\d{1,2})월/);if(l)s=parseInt(l[1]);else{const c=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(c)s=o[c[1].toLowerCase()];else{const h=e.match(/\d{4}[-\/](\d{1,2})/);h&&(s=parseInt(h[1]))}}return a?a*12+s:s}function fr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],s=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(r=>{if(!r[0]||String(r[0]).startsWith("[")||String(r[0]).startsWith("※")||r[0]==="key")return;const l=String(r[0]).trim(),c=r[1]??"";if(o.includes(l))e[l]=parseInt(c)||(l==="titleFontSize"?24:10);else if(s.includes(l)){const h=String(c).trim().toLowerCase();e[l]=h==="y"||h==="yes"||h==="true"||h==="1"}else e[l]=String(c)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(r=>{e[r]=!1}),e.weeklyLabels){const r=String(e.weeklyLabels).split(",").map(l=>l.trim()).filter(Boolean);r.length?e.weeklyLabels=r:delete e.weeklyLabels}if(e.period){const r={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},l=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);l&&(e.period=`${r[l[2]]||l[2]} ${l[1]}`)}if(e.dateLine){const r=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(r){const l=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${l[parseInt(r[2])]||r[2]} ${r[1]}`}}return Object.keys(e).length?{meta:e}:{}}function mr(t){var et;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((g,J)=>console.log(`  row${J}: [${(g||[]).slice(0,8).map(U=>JSON.stringify(String(U||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],s={};let a=!1,r=-1;if(t.forEach((g,J)=>{if(!g[0]||String(g[0]).startsWith("[")||String(g[0]).startsWith("※")||g[0]==="key")return;const U=String(g[0]).trim();(o.includes(U)||e.includes(U))&&(a||(r=J),a=!0,e.includes(U)?s[U]=parseInt(g[1])||0:s[U]=te(g[1]))}),a&&Object.keys(s).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${r}: r[0]='${(et=t[r])==null?void 0:et[0]}' / kvObj keys:`,Object.keys(s)),{total:s};console.log("[parseVisSummary] Table path 진입");let l=t.find(g=>g.some(J=>String(J||"").trim().toUpperCase()==="LG"));l||(l=t.find(g=>g.some(J=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(J||"").trim()))));const c=l?l.findIndex(g=>String(g||"").trim().toUpperCase()==="LG"):-1,h=l?l.findIndex(g=>{const J=String(g||"").trim().toUpperCase();return J==="SAMSUNG"||J==="SAMSUMG"}):-1,x=l?l.findIndex(g=>/date/i.test(String(g||"").trim())):0,f=l?l.findIndex(g=>/countries|country/i.test(String(g||"").trim())):2,d=l?l.findIndex(g=>/divisions?/i.test(String(g||"").trim())):3,p=l?l.findIndex(g=>/^(llm\s*model|llm|model)$/i.test(String(g||"").trim())):-1,u=Math.max(x,f,d,p),k=c>=0?c:u>=0?u+1:4,v=h>=0?h:k+1;console.log(`[parseVisSummary] columns: date=${x} cnty=${f} div=${d} llm=${p} lg=${k}(raw=${c}) ss=${v}(raw=${h})`);const y=[];t.filter(g=>{const J=String(g[x>=0?x:0]||"").trim();return J&&!J.startsWith("[")&&!J.startsWith("※")&&!/^date$/i.test(J)&&!/^key$/i.test(J)}).forEach(g=>{const J=String(g[x>=0?x:0]||"").trim(),U=se(g[f>=0?f:2]),yt=String(g[d>=0?d:3]||"").trim().toUpperCase(),C=(p>=0?String(g[p]||"").trim():"")||"Total",F=te(g[k]),P=te(g[v]);J&&F>0&&y.push({date:J,country:U,division:yt,llmModel:C,lg:F,comp:P})});const b=y.filter(g=>(g.country==="TOTAL"||g.country==="TTL")&&(g.division==="TOTAL"||g.division==="TTL"||g.division==="")&&(g.llmModel==="Total"||g.llmModel==="TOTAL"||g.llmModel==="All"));b.sort((g,J)=>xe(g.date)-xe(J.date));const O=b[b.length-1],M=b.length>=2?b[b.length-2]:null;if(!O){const g=t.find(S=>S.some(C=>String(C||"").trim().toUpperCase()==="TOTAL"));if(!g)return Kt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const J=te(g[k]),U=te(g[v]),yt={total:{score:J,prev:J,vsComp:U,rank:J>=U?1:2,totalBrands:12}};return y.length&&(yt.monthlyVis=y),yt}const N=O.lg,V=O.comp,B=M?M.lg:N,z=O.date,W=M?M.date:null;function $(g){const J={};return y.filter(U=>U.date===g&&(U.country==="TOTAL"||U.country==="TTL")&&U.division&&U.division!=="TOTAL"&&U.division!=="TTL"&&U.division!==""&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{J[U.division]={lg:U.lg,comp:U.comp}}),J}const q=$(z),A=W?$(W):{};function R(g){const J={};return y.filter(U=>U.date===g&&U.country&&U.country!=="TOTAL"&&U.country!=="TTL"&&(U.division==="TOTAL"||U.division==="TTL"||U.division==="")&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{J[U.country]={lg:U.lg,comp:U.comp}}),J}const L=R(z),G=W?R(W):{},K={total:{score:N,prev:B,vsComp:V,rank:N>=V?1:2,totalBrands:12},...Object.keys(q).length?{buTotals:q}:{},...Object.keys(A).length?{buTotalsPrev:A}:{},...Object.keys(L).length?{countryTotals:L}:{},...Object.keys(G).length?{countryTotalsPrev:G}:{}};z&&(K.derivedPeriod=z),y.length&&(K.monthlyVis=y);const tt={};return y.forEach(g=>{tt[g.date]=(tt[g.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${y.length}행 / unique dates:`,tt,`/ TOTAL+TOTAL+Total 행: ${b.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(K)),K}function gr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,r)=>console.log(`  row${r}: [${a.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,r)=>{if(r===0)return;const l=String((a==null?void 0:a[1])||"").trim(),c=String((a==null?void 0:a[2])||"").trim().toUpperCase();l&&(e[l]=(e[l]||0)+1,(c==="TTL"||c==="TOTAL")&&o.push({date:l,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const s=t.findIndex(a=>{const r=String(a[0]||"").trim().toLowerCase();return r==="div"||r==="division"||r==="divisions"});if(s<0){const a=t.findIndex(r=>r.some((l,c)=>c>=1&&String(l||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(r=>JSON.stringify(String(r||"").trim())).join(", ")}]`),Fo(t,a))}return console.log(`[parseProductCnty] header at row${s}: [${t[s].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),Fo(t,s)}function Fo(t,e){const o=t[e],s=o.findIndex((d,p)=>p>=3&&String(d||"").trim().toUpperCase()==="LG");if(s<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(d=>/^(llm\s*model|llm|model)$/i.test(String(d||"").trim())),r=[];for(let d=s+1;d<o.length;d++){const p=String(o[d]||"").trim();p&&p.toUpperCase()!=="LG"&&r.push({name:p,col:d})}const l=t.slice(e+1).filter(d=>{const p=String(d[0]||"").trim();return p&&!p.startsWith("[")&&!p.startsWith("※")}),c={},h={};l.forEach(d=>{const p=String(d[0]||"").trim(),u=String(d[1]||"").trim(),k=String(d[2]||"").trim(),v=se(d[2])||k,y=String(d[3]||"").trim(),b=(a>=0?String(d[a]||"").trim():"")||"Total",O=te(d[s]),M=r.map(z=>({name:z.name,score:te(d[z.col])})).filter(z=>z.score>0),N=[...M].sort((z,W)=>W.score-z.score)[0]||{name:"",score:0},V=+(O-N.score).toFixed(2),B={LG:O};if(M.forEach(z=>{B[z.name]=z.score}),v==="TTL"||v==="TOTAL"){const z=Te[y]||y.toLowerCase(),W=An[y]||y;c[z]||(c[z]=[]),c[z].push({id:z,bu:p,kr:W,category:y,date:u,llmModel:b,score:O,vsComp:N.score,compName:N.name,allScores:B})}else{const z=`${y}|${v}`;h[z]||(h[z]=[]),h[z].push({product:y,country:v,date:u,llmModel:b,score:O,compName:N.name,compScore:N.score,gap:V,allScores:B})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(c).join(", ")||"없음"} / 국가별: ${Object.keys(h).length}건`);const x=[];for(const[d,p]of Object.entries(c)){const u=p.filter(b=>b.llmModel==="Total"||b.llmModel==="TOTAL"||b.llmModel==="All"),k=u.length?u:p;k.sort((b,O)=>xe(b.date)-xe(O.date));const v=k[k.length-1],y=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${d}: dates=[${k.map(b=>b.date).join(",")}] score=${v.score} prev=${y} vsComp=${v.vsComp}`);const w=k.map(b=>{const O=p.filter(N=>N.date===b.date),M={};return O.forEach(N=>{M[N.llmModel]={score:N.score,comp:N.vsComp,allScores:N.allScores}}),{date:b.date,score:b.score,comp:b.vsComp,allScores:b.allScores,byLlm:M}});x.push({...v,prev:y,monthlyScores:w})}const f=[];for(const d of Object.values(h)){const p=d.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),u=p.length?p:d;u.sort((w,b)=>xe(w.date)-xe(b.date));const k=u[u.length-1],v=u.length>=2?u[u.length-2].score:null,y=u.map(w=>{const b=d.filter(M=>M.date===w.date),O={};return b.forEach(M=>{O[M.llmModel]={score:M.score,compScore:M.compScore,compName:M.compName,allScores:M.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:O}});f.push({...k,prev:v,monthlyScores:y})}return{...x.length?{productsPartial:x}:{},...f.length?{productsCnty:f}:{}}}function Qo(t,e=0,o){const s=o??t.length;for(let a=e;a<s;a++){const r=[];for(const l of t[a]||[]){const c=String(l||"").split(/\n/)[0].trim();/^W\d+/i.test(c)&&r.push(c.toUpperCase())}if(r.length>=2)return r}return null}const Ve={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function To(t,e){var v;const o=e?Ve[e]||{}:{...Ve.MS,...Ve.ES};if(!Object.keys(o).length)return Kt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const s=t.findIndex(y=>y.some(w=>String(w||"").trim()in o));if(s<0)return Kt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[s],r=t.findIndex((y,w)=>w>s&&y.some(b=>String(b||"").trim()==="TTL")),l=r>0?r+1:Math.min(s+20,t.length);let c=-1,h=-1;for(let y=s+1;y<l;y++){const w=t[y];if(!w.some(M=>String(M||"").trim().toUpperCase()==="LG"))continue;if(h<0&&(h=y),w.some(M=>{const N=String(M||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="nonbrand"||N==="nb"})){c=y;break}}const x=c>=0?c:h>=0?h:r;if(x<0)return Kt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:s,ttlRowIdx:r});const f=t[x],d=c>=0?"LG-NB":h>=0?"LG":"TTL",p={},u=Object.keys(o).map(y=>a.findIndex(w=>String(w||"").trim()===y)).filter(y=>y>=0).sort((y,w)=>y-w);for(const[y,w]of Object.entries(o)){const b=a.findIndex(N=>String(N||"").trim()===y);if(b<0)continue;const O=u.find(N=>N>b)||b+20,M=[];for(let N=b+1;N<O&&N<f.length;N++){const V=te(f[N]);V>0&&M.push(V)}M.length&&(p[w]=M)}if(!Object.keys(p).length)return Kt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:s,dataRowIdx:x,dataRowLabel:d});const k=Qo(t,s,l)||((v=Object.values(p)[0])==null?void 0:v.map((y,w)=>`W${w+1}`))||[];return{weeklyMap:p,weeklyLabels:k}}function yr(t,e,o){for(const s of Object.values(t))for(const a of Object.values(s))for(const[r,l]of Object.entries(a))a[r]=l.slice(o);for(const[s,a]of Object.entries(e))e[s]=a.slice(o)}function br(t){const{data:e,rows:o,headerIdx:s,brandIdx:a,catIdx:r,countryIdx:l,isNonBrand:c,isTotal:h,weeklyMap:x,weeklyAll:f}=t;let d=t.wCols,p=t.weeklyLabels;if(!d.length){const u=e.find(k=>String(k[a]||"").trim().toUpperCase()==="LG"&&c(k));if(u){const k=[];for(let v=a+1;v<u.length;v++)if(String(u[v]||"").trim())k.push(v);else if(k.length)break;d=k,p=Qo(o,0,s+1)||d.map((v,y)=>`W${y+1}`)}}return e.forEach(u=>{if(!c(u))return;const k=String(u[a]||"").trim();if(!k)return;const v=String(u[r>=0?r:0]||"").trim();if(!v)return;const y=Te[v]||v.toLowerCase(),w=l>=0?se(u[l]):"TOTAL",b=w==="TOTAL"||w==="TTL"||!w?"Total":w;f[y]||(f[y]={}),f[y][b]||(f[y][b]={}),f[y][b][k]=d.map(O=>De(u[O]))}),e.forEach(u=>{if(String(u[a]||"").trim().toUpperCase()!=="LG"||!c(u)||!h(u))return;const v=String(u[r>=0?r:0]||"").trim();v&&(x[Te[v]||v.toLowerCase()]=d.map(y=>De(u[y])))}),{wCols:d,weeklyLabels:p}}function xr(t){const{data:e,header:o,lgIdx:s,catIdx:a,isTotal:r,weeklyMap:l}=t,c=o.findIndex(f=>{const d=String(f||"").trim().toLowerCase();return d==="date"||d==="week"||d==="period"}),h={},x=[];return e.forEach(f=>{if(!r(f))return;const d=String(f[a>=0?a:3]||"").trim();if(d){if(c>=0){const p=String(f[c]||"").trim();p&&!x.includes(p)&&x.push(p)}h[d]=h[d]||[],h[d].push(De(f[s]))}}),Object.entries(h).forEach(([f,d])=>{l[Te[f]||f.toLowerCase()]=d}),x.length?x:null}function vr(t){const{data:e,wCols:o,catIdx:s,isTotal:a,weeklyMap:r}=t;e.forEach(l=>{if(!a(l))return;const c=String(l[s>=0?s:0]||"").trim();c&&(r[Te[c]||c.toLowerCase()]=o.map(h=>De(l[h])))})}function Ke(t,e){const o={};let s=[],a=-1;for(let B=0;B<Math.min(t.length,10);B++){const z=t[B];if(!z)continue;let W=0;for(let $=0;$<z.length;$++)/^w\d+$/i.test(String(z[$]||"").trim())&&W++;if(W>=2){a=B;break}}let r=t.findIndex(B=>{const z=B.slice(0,5).map(W=>String(W||"").trim().toLowerCase());return z.includes("category")||z.includes("product")});if(r<0&&a>=0&&(r=a),r<0&&(r=t.findIndex(B=>{let z=!1,W=0;for(let $=0;$<Math.min(B.length,10);$++){const q=String(B[$]||"").trim();q.toUpperCase()==="LG"?(z=!0,W++):q&&isNaN(parseFloat(q))&&W++}return z&&W>=3})),r<0)return To(t,e);const l=t[r],c=r+1;let h=null;if(t[c]){const B=t[c].slice(4,8).map(z=>String(z||"").trim()).filter(Boolean);B.length&&B.every(z=>/^\d{1,2}\/\d{1,2}/.test(z)||/~/.test(z)||/^\(/.test(z))&&(h=c)}const x=h!=null?h+1:c,f=t.slice(x).filter(B=>B[0]!=null&&String(B[0]).trim()),d=l.findIndex(B=>{const z=String(B||"").trim().toLowerCase();return z==="category"||z==="product"}),p=l.findIndex(B=>{const z=String(B||"").trim().toLowerCase();return z==="country"||z==="county"}),u=l.findIndex(B=>String(B||"").trim().toLowerCase()==="brand"),k=l.findIndex(B=>String(B||"").trim().toUpperCase()==="LG");let v=[];const y=a>=0?t[a]:l;for(let B=0;B<y.length;B++)/^w\d+$/i.test(String(y[B]||"").trim())&&v.push(B);if(!v.length)for(let B=0;B<l.length;B++){const z=String(l[B]||"").split(/\n/)[0].trim();/^w\d+/i.test(z)&&v.push(B)}s=v.map(B=>String(y[B]||"").trim().toUpperCase());let w=v.map((B,z)=>{const W=s[z]||`W${B}`;let $="";const q=h!=null?t[h]:a!==r&&a>=0?t[a+1]:null;if(q){const A=String(q[B]||"").trim();A&&/\d/.test(A)&&($=A.startsWith("(")?A:`(${A})`)}return $?`${W}${$}`:W});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${r} dateRangeRow:${h} wCols:${v.length} labels:`,s.slice(0,5),"full:",w.slice(-2));function b(B){if(p<0)return!0;const z=String(B[p]||"").replace(/[()]/g,"").trim().toUpperCase();return z==="TOTAL"||z==="TTL"||z===""}const O=l.findIndex(B=>{const z=String(B||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="b/nb"||z==="bnb"||z==="brand/nonbrand"});function M(B){if(O<0)return!0;const z=String(B[O]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="nonbrand"||z==="nb"}const N={},V={data:f,rows:t,header:l,headerIdx:r,brandIdx:u,lgIdx:k,catIdx:d,countryIdx:p,wCols:v,weeklyLabels:s,weeklyMap:o,weeklyAll:N,isNonBrand:M,isTotal:b};if(u>=0){const B=br(V);v=B.wCols,s=B.weeklyLabels}else if(k>=0){const B=xr(V);B&&(s=B)}else v.length&&vr(V);if(s.length>0){let B=s.length;for(const q of Object.values(N))for(const A of Object.values(q))for(const R of Object.values(A)){const L=R.findIndex(G=>G!=null);L>=0&&L<B&&(B=L)}for(const q of Object.values(o)){const A=q.findIndex(R=>R!=null);A>=0&&A<B&&(B=A)}const z=12,$=s.length-B>z?s.length-z:B;$>0&&$<s.length&&(s=s.slice($),w=w.slice($),yr(N,o,$))}if(Object.keys(o).length){const B={weeklyMap:o};return s.length&&(B.weeklyLabels=s),w.length&&(B.weeklyLabelsFull=w),Object.keys(N).length&&(B.weeklyAll=N),B}return To(t,e)}function wr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((S,C)=>console.log(`  row${C}: [${(S||[]).slice(0,10).map(F=>JSON.stringify(String(F||"").trim())).join(", ")}]`));const e=t.findIndex(S=>S.some(P=>{const E=String(P||"").trim().toLowerCase();return E.includes("page type")||E==="country"})?!S.some(P=>/^\[.*\]$/.test(String(P||"").trim())):!1);if(e<0)return Kt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],s=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(C)}),a=o.findIndex(S=>/^country$|countries/i.test(String(S||"").trim())),r=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(C)||C==="type"}),l=a>=0?a:0,c=r>=0?r:l+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${s} cntyCol=${a} ptCol=${r} (fallbackCnty=${l} fallbackPt=${c})`),s<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(S=>Array.from(String(S||"")).map(C=>C.codePointAt(0).toString(16)).join(" ")));const h=[],x=new Set,f=Math.max(c+1,2);for(let S=f;S<o.length;S++){const C=String(o[S]||"").trim();if(/\bLG\b/i.test(C)){const F=S+1;if(F<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[F]||""))){const P=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),E=P?P[1].toLowerCase():`col${S}`;x.has(E)||(h.push({lg:S,ss:F}),x.add(E))}}}h.length||h.push({lg:f,ss:f+1}),console.log("[parseCitPageType] monthPairs:",h.map(S=>`LG=${S.lg}/SS=${S.ss}`).join(", "));const d=new Map;let p="",u=0;t.slice(e+1).forEach(S=>{if(!S||!S.some(F=>String(F||"").trim())){p="";return}let C=s>=0?String(S[s]||"").trim():"";C?p=C:s>=0&&p&&(C=p,u++),d.set(S,C)}),u&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${u}건 상속`);const k=t.slice(e+1).filter(S=>S&&S[l]!=null&&String(S[l]).trim());console.log(`[parseCitPageType] data ${k.length}행 (필터 통과)`);let v=h[0];for(let S=h.length-1;S>=0;S--)if(k.some(C=>Gt(C[h[S].lg])>0)){v=h[S];break}if(!k.some(S=>Gt(S[v.lg])>0)){for(let S=Math.min(v.lg,o.length)-1;S>=2;S--)if(k.some(C=>Gt(C[S])>0)){v={lg:S-1,ss:S};break}}const y={},w={},b={},O={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},M=new Set,N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=h.map(S=>{const C=String(o[S.lg]||"").trim(),F=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return F?F[1].charAt(0).toUpperCase()+F[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),B={},z=S=>String(S||"").trim().replace(/^\((.*)\)$/,"$1").trim(),W=S=>{const C=z(S);return!C||/^(total|all|ttl)$/i.test(C)},$={plp:"PLP",pdp:"PDP",microsite:"Microsites",microsites:"Microsites",newsroom:"Newsroom",support:"Support",buyingguide:"Buying-guide",experience:"Experience"},q=S=>{const C=String(S||"").replace(/[()]/g,"").trim();if(/page total|^ttl$/i.test(C))return"TTL";const F=C.toLowerCase().replace(/^lg[-\s]+/,"").replace(/[-\s]+/g,"");return $[F]||C},A=S=>{const C=se(S[l]);return{cnty:O[C]||C.toUpperCase(),key:q(S[c])}},R=new Set;k.forEach(S=>{const C=d.get(S)||"";if(W(C))return;const{cnty:F,key:P}=A(S);h.forEach((E,H)=>{(Gt(S[E.lg])>0||Gt(S[E.ss])>0)&&R.add(`${F}|${P}|${H}`)})});const L=(S,C,F,P)=>R.has(`${C}|${F}|${P}`)?!S:S,G=h.indexOf(v);R.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${R.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const K={};function tt(S){return K[S]||(K[S]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),K[S]}k.forEach(S=>{const C=d.get(S)||"",F=W(C),P=F?"Total":C,{cnty:E,key:H}=A(S);M.add(E);const xt=Gt(S[v.lg]),Ct=Gt(S[v.ss]);L(F,E,H,G)&&(E==="TTL"?(y[H]=(y[H]||0)+xt,w[H]=(w[H]||0)+Ct):(b[E]||(b[E]={lg:{},samsung:{}}),b[E].lg[H]=(b[E].lg[H]||0)+xt,b[E].samsung[H]=(b[E].samsung[H]||0)+Ct)),E==="TTL"&&h.forEach((vt,kt)=>{var Y,it;if(!L(F,E,H,kt))return;const Ft=Gt(S[vt.lg]),j=Gt(S[vt.ss]);if(Ft>0||j>0){B[H]||(B[H]={});const lt=V[kt]||`M${kt+1}`;B[H][lt]={lg:(((Y=B[H][lt])==null?void 0:Y.lg)||0)+Ft,samsung:(((it=B[H][lt])==null?void 0:it.samsung)||0)+j}}});const bt=tt(P);E==="TTL"?(bt.lg[H]=(bt.lg[H]||0)+xt,bt.samsung[H]=(bt.samsung[H]||0)+Ct,bt.dotcomTrend[H]||(bt.dotcomTrend[H]={}),h.forEach((vt,kt)=>{var Y,it;const Ft=Gt(S[vt.lg]),j=Gt(S[vt.ss]);if(Ft>0||j>0){const lt=V[kt]||`M${kt+1}`;bt.dotcomTrend[H][lt]={lg:(((Y=bt.dotcomTrend[H][lt])==null?void 0:Y.lg)||0)+Ft,samsung:(((it=bt.dotcomTrend[H][lt])==null?void 0:it.samsung)||0)+j}}})):(bt.dotcomByCnty[E]||(bt.dotcomByCnty[E]={lg:{},samsung:{}}),bt.dotcomByCnty[E].lg[H]=(bt.dotcomByCnty[E].lg[H]||0)+xt,bt.dotcomByCnty[E].samsung[H]=(bt.dotcomByCnty[E].samsung[H]||0)+Ct)});const et=new Set;Object.values(B).forEach(S=>Object.keys(S).forEach(C=>et.add(C)));const g=N.filter(S=>et.has(S)),J={},U={};h.forEach((S,C)=>{const F=V[C];if(!F)return;const P={},E={};k.forEach(H=>{const xt=d.get(H)||"",Ct=W(xt),{cnty:bt,key:vt}=A(H);if(!L(Ct,bt,vt,C))return;const kt=Gt(H[S.lg]),Ft=Gt(H[S.ss]);kt<=0&&Ft<=0||(bt==="TTL"?(kt>0&&(P[vt]=(P[vt]||0)+kt),Ft>0&&(E[vt]=(E[vt]||0)+Ft)):(U[F]||(U[F]={}),U[F][bt]||(U[F][bt]={lg:{},samsung:{}}),kt>0&&(U[F][bt].lg[vt]=(U[F][bt].lg[vt]||0)+kt),Ft>0&&(U[F][bt].samsung[vt]=(U[F][bt].samsung[vt]||0)+Ft)))}),Object.keys(P).length&&(J[F]={lg:P,samsung:E})}),Object.keys(U).forEach(S=>{Object.keys(U[S]).forEach(C=>{const F=U[S][C];Object.values(F.lg).some(E=>E>0)||Object.values(F.samsung).some(E=>E>0)||delete U[S][C]}),Object.keys(U[S]).length||delete U[S]});const yt={};return(y.TTL||Object.keys(y).length)&&(yt.dotcom={lg:y,samsung:w,byMonth:J,byCntyByMonth:U}),Object.keys(b).length&&(yt.dotcomByCnty=b),Object.keys(B).length&&g.length&&(yt.dotcomTrend=B,yt.dotcomTrendMonths=g),(Object.keys(K).length>1||Object.keys(K).length===1&&!(K.Total||K.TOTAL||K.All))&&(yt.dotcomByLlm=K),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(y).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(b).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(B).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(K).join(",")||"(EMPTY)"}`),yt}function Cr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((C,F)=>console.log(`  row${F}: [${(C||[]).slice(0,12).map(P=>JSON.stringify(String(P||"").trim())).join(", ")}]`));const e=t.findIndex(C=>C.some(E=>{const H=String(E||"").trim().toLowerCase();return H==="channel"||H==="country"})?!C.some(E=>/^\[.*\]$/.test(String(E||"").trim())):!1);e<0&&Kt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const o=e>=0?t[e]:[],s=(e>=0?e:0)+1;let a=-1,r=-1,l=-1,c=-1;for(let C=0;C<o.length;C++){const F=String(o[C]||"").trim().toLowerCase();F==="country"&&a<0&&(a=C),F==="channel"&&r<0&&(r=C),F==="prd"&&l<0&&(l=C),/^(llm\s*model|llm|model)$/i.test(F)&&c<0&&(c=C)}const h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(C){const F=String(C||"").trim().toLowerCase();if(!F)return null;const P=F.match(/^(\d{1,2})월/);if(P){const H=parseInt(P[1]);if(H>=1&&H<=12)return h[H-1]}const E=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():null}const f=[],d=new Set;for(let C=0;C<o.length;C++){const F=x(o[C]);F&&!d.has(C)&&(f.push({col:C,label:F}),d.add(C))}if(e>0){const C=t[e-1];if(C)for(let F=0;F<C.length;F++){const P=x(C[F]);P&&!d.has(F)&&(f.push({col:F,label:P}),d.add(F))}}let p=2;if(f.length>0)p=Math.min(...f.map(C=>C.col));else if(a>=0&&r>=0)p=Math.max(a,r,l)+1;else{const C=t[s];C&&!String(C[0]||"").trim()?(a=1,r=2,p=3):(a=0,r=1,p=2)}if(a<0||r<0){const C=t[s],F=C&&!String(C[0]||"").trim()?1:0;a<0&&(a=F),r<0&&(r=F+1)}if(f.length>0){f.sort((E,H)=>E.col-H.col);const C=f[0],F=h.indexOf(C.label),P=new Set([a,r,l].filter(E=>E>=0));if(F>0&&C.col>p){let E=F-1;for(let H=C.col-1;H>=p&&E>=0;H--){if(d.has(H)||P.has(H))continue;const xt=String(o[H]||"").trim(),Ct=e>0?String((t[e-1]||[])[H]||"").trim():"";xt||Ct||(f.push({col:H,label:h[E]}),d.add(H),E--)}}}f.sort((C,F)=>h.indexOf(C.label)-h.indexOf(F.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(C=>JSON.stringify(String(C||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${r} prdCol=${l} llmCol=${c} dataStartCol=${p}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",f.map(C=>`${C.label}@col${C.col}`).join(", "));const u=t.slice(s).filter(C=>C.some(F=>F!=null&&String(F).trim())),k=[],v={},y={},w={},b={},O=new Set,M={},N={},V={},B=C=>String(C||"").replace(/[()]/g,"").trim();u.forEach(C=>{const F=se(C[a]),P=B(C[r]);if(!F||!P||P.toLowerCase()==="total")return;const E=F==="TTL"||F==="TOTAL",H=c>=0?B(C[c]):"",xt=!H||/^(total|all|ttl)$/i.test(H),Ct=l>=0?B(C[l]):"",bt=!Ct||/^(ttl|total)$/i.test(Ct.toUpperCase());f.forEach(({col:vt,label:kt})=>{Gt(C[vt])<=0||(E||(M[P]||(M[P]={}),M[P][kt]=!0),xt||(N[P]||(N[P]={}),N[P][kt]=!0),bt||(V[P]||(V[P]={}),V[P][kt]=!0))})});const z=Object.keys(M).map(C=>`${C}:[${Object.keys(M[C]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${z||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(N).map(C=>`${C}:[${Object.keys(N[C]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(V).map(C=>`${C}:[${Object.keys(V[C]).join(",")}]`).join(" ")||"(없음)");const W={},$={},q={},A={};u.forEach(C=>{const F=se(C[a]),P=B(C[r]),E=l>=0?B(C[l]):"",H=c>=0?B(C[c]):"";if(!F||!P||P.toLowerCase()==="total")return;const xt=F==="TTL"||F==="TOTAL",Ct=!H||/^(total|all|ttl)$/i.test(H),bt=E.toUpperCase(),vt=!E||bt==="TTL"||bt==="TOTAL";if(xt||O.add(F),!xt&&(q[F]||(q[F]={}),q[F][P]||(q[F][P]={ttl:null,prds:[]}),!vt)){const Ft={};f.forEach(({col:j,label:Y})=>{var lt;const it=Gt(C[j]);it<=0||Ct&&((lt=N[P])!=null&&lt[Y])||(Ft[Y]=it)}),Object.keys(Ft).length&&q[F][P].prds.push({prd:E,monthScores:Ft})}W[P]||(W[P]={}),$[P]||($[P]={});const kt=xt?"TTL":F;$[P][kt]||($[P][kt]={}),f.forEach(({col:Ft,label:j})=>{var ft,D,ot,Z;const Y=Gt(C[Ft]);if(Y<=0)return;const it=xt&&((ft=M[P])==null?void 0:ft[j]),lt=Ct&&((D=N[P])==null?void 0:D[j]),wt=vt&&((ot=V[P])==null?void 0:ot[j]),ct=Ct?"Total":H;!it&&!(vt&&((Z=V[P])!=null&&Z[j]))&&(A[ct]||(A[ct]={}),A[ct][P]||(A[ct][P]={}),A[ct][P][j]=(A[ct][P][j]||0)+Y),!(it||lt||wt)&&(W[P][j]=(W[P][j]||0)+Y,$[P][kt][j]=($[P][kt][j]||0)+Y)})});const R=C=>{for(let F=f.length-1;F>=0;F--){const P=C[f[F].label];if(P>0)return P}return 0},L={};Object.entries($).forEach(([C,F])=>{Object.entries(F).forEach(([P,E])=>{P!=="TTL"&&Object.keys(E).length!==0&&(L[P]||(L[P]={}),L[P][C]=E)})}),Object.entries(W).forEach(([C,F])=>{const P=R(F);P>0&&(k.push({source:C,category:"",score:P,delta:0,ratio:0,monthScores:F}),v[C]=F)}),Object.entries($).forEach(([C,F])=>{Object.entries(F).forEach(([P,E])=>{if(P==="TTL")return;const H=R(E);H>0&&(y[P]||(y[P]=[]),y[P].push({source:C,category:"",score:H,delta:0,ratio:0,monthScores:E,prd:""}))})}),Object.entries(q).forEach(([C,F])=>{Object.entries(F).forEach(([P,E])=>{E.prds.forEach(({prd:H,monthScores:xt})=>{const Ct=R(xt);if(Ct<=0)return;y[C]||(y[C]=[]),y[C].push({source:P,category:"",score:Ct,delta:0,ratio:0,monthScores:xt,prd:H}),b[H]||(b[H]={}),b[H][P]||(b[H][P]={source:P,category:"",score:0,delta:0,ratio:0,monthScores:{}});const bt=b[H][P];bt.score+=Ct,Object.entries(xt).forEach(([vt,kt])=>{bt.monthScores[vt]=(bt.monthScores[vt]||0)+kt})})})});const G={};new Set([...Object.keys(w),...Object.keys(b)]).forEach(C=>{let F=w[C];(!F||!F.length)&&(F=Object.values(b[C]||{})),F&&F.length&&(G[C]=F)});const tt=k.reduce((C,F)=>C+F.score,0);k.sort((C,F)=>F.score-C.score),k.forEach((C,F)=>{C.rank=F+1,C.ratio=tt>0?+(C.score/tt*100).toFixed(1):0});for(const[C,F]of Object.entries(y)){const P=F.reduce((E,H)=>E+H.score,0);F.sort((E,H)=>H.score-E.score),F.forEach((E,H)=>{E.rank=H+1,E.ratio=P>0?+(E.score/P*100).toFixed(1):0})}for(const[C,F]of Object.entries(G)){const P=F.reduce((E,H)=>E+H.score,0);F.sort((E,H)=>H.score-E.score),F.forEach((E,H)=>{E.rank=H+1,E.ratio=P>0?+(E.score/P*100).toFixed(1):0})}const et=f.map(C=>C.label).filter(C=>Object.values(v).some(F=>F[C]>0)),g={};f.forEach(C=>{let F=0;Object.values(v).forEach(P=>{F+=P[C.label]||0}),g[C.label]=F}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",g,"→ validMonths:",et);const J={};Object.entries(q.TTL||{}).forEach(([C,F])=>{J[C]={ttl:F.ttl,latestScore:R(F.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",J),console.log("[parseCitTouchPoints] citations top 3:",k.slice(0,3).map(C=>({source:C.source,score:C.score,monthScores:C.monthScores})));const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let yt=null;if(et.length>0){const C={};Object.values(v).forEach(E=>{Object.entries(E).forEach(([H,xt])=>{xt>0&&(C[H]=(C[H]||0)+1)})});let F=et[et.length-1];if(et.length>=2){const E=C[F]||0,H=et[et.length-2],xt=C[H]||0;xt>0&&E<xt*.5&&(F=H)}const P=U.findIndex(E=>F.toLowerCase().startsWith(E.toLowerCase()));P>=0&&(yt=`${U[P]} ${new Date().getFullYear()}`)}const S={};return k.length>0&&(S.citations=k),Object.keys(y).length>0&&(S.citationsByCnty=y),Object.keys(G).length>0&&(S.citationsByPrd=G),Object.keys(v).length>0&&(S.citTouchPointsTrend=v,S.citTrendMonths=et),Object.keys(L).length>0&&(S.citTouchPointsTrendByCnty=L),Object.keys(A).length>0&&(S.citTouchPointsByLlm=A,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(A).join(", "))),yt&&(S.citDerivedPeriod=yt),S}function kr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((R,L)=>console.log(`  row${L}: [${(R||[]).slice(0,14).map(G=>JSON.stringify(String(G||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],s=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,r=0,l=-1,c=-1,h=-1,x=-1,f=-1,d=-1,p=4;for(let R=0;R<Math.min(t.length,10);R++){const L=t[R];if(!L)continue;const G=L.some(g=>/^no$/i.test(String(g||"").trim())),K=L.some(g=>/^region$/i.test(String(g||"").trim())),tt=L.some(g=>/domain|domian/i.test(String(g||"").trim())),et=L.some(g=>/^prd$/i.test(String(g||"").trim()));if(G||K||tt||et){a=L,r=R+1;for(let g=0;g<L.length;g++){const J=String(L[g]||"").trim().toLowerCase();J==="prd"&&f<0&&(f=g),J==="no"&&l<0&&(l=g),J==="region"&&c<0&&(c=g),(J==="domain"||J==="domian")&&h<0&&(h=g),J==="type"&&x<0&&(x=g),/^(llm\s*model|llm|model)$/i.test(J)&&d<0&&(d=g)}console.log(`[parseCitDomain] header row${R}: [${(L||[]).slice(0,14).map(g=>JSON.stringify(String(g||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${f} noCol=${l} regionCol=${c} domainCol=${h} typeCol=${x} llmCol=${d}`);break}(String(L[0]||"").trim().startsWith("[")||!String(L[0]||"").trim())&&(r=R+1)}a||Kt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(R=>R==null?void 0:R.slice(0,6))});const u=l>=0||c>=0||f>=0;if(u)c<0&&(c=l>=0?l+1:f>=0?f+2:1),h<0&&(h=c+1),x<0&&(x=h+1),p=Math.max(h,x)+1;else if(h>=0)x=h+1,p=h+2;else{for(let R=r;R<Math.min(t.length,r+5);R++){const L=t[R];if(L){for(let G=0;G<Math.min(L.length,6);G++){const K=String(L[G]||"").trim();if(K.includes(".")&&K.length>3&&!s.test(K)){h=G,x=G+1,p=G+2;break}}if(h>=0)break}}h<0&&(h=0,x=1,p=2)}const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=R=>{const L=String(R||"").trim().toLowerCase();if(!L)return null;const G=L.match(/^(\d{1,2})월/);if(G){const tt=parseInt(G[1]);if(tt>=1&&tt<=12)return k[tt-1]}const K=L.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():null},y=[];if(a)for(let R=p;R<a.length;R++){const L=v(a[R]);L&&y.push({col:R,label:L})}const w=R=>/^(type|domain[_ ]type)$/i.test(String(R||"").trim()),b=R=>/^(domain|domian)$/i.test(String(R||"").trim()),O=R=>/^region$/i.test(String(R||"").trim()),M=[];a&&y.forEach(({col:R,label:L})=>{const G=R-1,K=R-2,tt=R-3;tt<0||w(a[G])&&b(a[K])&&O(a[tt])&&M.push({regionCol:tt,domainCol:K,typeCol:G,monthCol:R,label:L})}),console.log(`[parseCitDomain] domainMonthLabels: ${y.map(R=>`${R.label}@col${R.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${M.length}개`,M.map(R=>`${R.label}@col${R.monthCol}(r${R.regionCol}/d${R.domainCol}/t${R.typeCol})`).join(", "));const N=[],V={};let B=null,z=null;const W={};let $="TTL";const q=R=>{let L=String(R||"").trim();if(!L)return"";const G=L.match(/^\[([^\]]+)\]/);G&&(L=G[1].trim()),L=L.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const K=L.indexOf("/");return K>=0&&(L=L.slice(0,K)),L};if(M.length>=2){const R=j=>String(j||"").replace(/[()]/g,"").trim(),L={},G=M.map(()=>({region:"",domain:"",type:""}));let K="",tt=0,et=0;for(let j=r;j<t.length;j++){const Y=t[j];if(!Y)continue;let it=f>=0?R(Y[f]):"";it?K=it:it=K;const lt=d>=0?R(Y[d]):"";M.forEach((wt,ct)=>{const ft=G[ct],D=q(Y[wt.domainCol]);D&&D.includes(".")&&(ft.domain=D,ft.region=String(Y[wt.regionCol]||"").trim().toUpperCase(),ft.type=String(Y[wt.typeCol]||"").trim());const ot=String(Y[wt.monthCol]||"").replace(/,/g,"").trim(),Z=parseFloat(ot);if(isNaN(Z)||Z<=0)return;let _=D,dt,At;if(_&&_.includes("."))dt=String(Y[wt.regionCol]||"").trim().toUpperCase(),At=String(Y[wt.typeCol]||"").trim();else if(ft.domain)_=ft.domain,dt=ft.region,At=ft.type,tt++;else{et++;return}const $t=e[dt]||dt||"TTL",Rt=`${$t}|${_}|${At}|${it}|${lt}`;L[Rt]||(L[Rt]={cnty:$t,domain:_,type:At,prd:it,llm:lt,monthScores:{}}),L[Rt].monthScores[wt.label]=(L[Rt].monthScores[wt.label]||0)+Z})}(tt||et)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${tt}건 / domain 없어 drop ${et}건`);const g=j=>{const Y=R(j);return!Y||/^(total|all|ttl)$/i.test(Y)},J=new Set;Object.values(L).forEach(j=>{if(g(j.llm))return;const Y=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`;Object.entries(j.monthScores).forEach(([it,lt])=>{lt>0&&J.add(`${Y}|${it}`)})});const U={};Object.values(L).forEach(j=>{const Y=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`,it=g(j.llm);U[Y]||(U[Y]={cnty:j.cnty,domain:j.domain,type:j.type,prd:j.prd,monthScores:{}}),Object.entries(j.monthScores).forEach(([lt,wt])=>{wt>0&&J.has(`${Y}|${lt}`)!==it&&(U[Y].monthScores[lt]=(U[Y].monthScores[lt]||0)+wt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(L).length} → ${Object.keys(U).length} rows / breakdown 월 ${J.size}건`);const yt=j=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(j||"").trim()),S=j=>{const Y=String(j||"").trim();return!Y||/^(ttl|total)$/i.test(Y)},C=j=>{for(let Y=y.length-1;Y>=0;Y--){const it=j[y[Y].label];if(it>0)return it}return 0},F=j=>j.find(Y=>Object.keys(Y).length)||{},P=(j,Y)=>{Object.entries(Y).forEach(([it,lt])=>{lt>0&&(j[it]=(j[it]||0)+lt)})},E={};Object.values(L).forEach(j=>{if(g(j.llm))return;const Y=R(j.llm);E[Y]||(E[Y]={}),E[Y][j.domain]||(E[Y][j.domain]=[{},{},{},{}]);const it=(yt(j.cnty)?0:2)+(S(j.prd)?0:1);P(E[Y][j.domain][it],j.monthScores)});const H={},xt={};if(Object.entries(E).forEach(([j,Y])=>{const it={},lt={};Object.entries(Y).forEach(([wt,ct])=>{const ft=F(ct),D=C(ft);D>0&&(it[wt]=D,lt[wt]=ft)}),Object.keys(it).length&&(H[j]=it),Object.keys(lt).length&&(xt[j]=lt)}),Object.keys(H).length){const j={};Object.values(U).forEach(lt=>{j[lt.domain]||(j[lt.domain]=[{},{},{},{}]);const wt=(yt(lt.cnty)?0:2)+(S(lt.prd)?0:1);P(j[lt.domain][wt],lt.monthScores)});const Y={},it={};Object.entries(j).forEach(([lt,wt])=>{const ct=F(wt),ft=C(ct);ft>0&&(Y[lt]=ft,it[lt]=ct)}),Object.keys(Y).length&&(H.Total=Y),Object.keys(it).length&&(xt.Total=it),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(H).join(", ")),Object.keys(H).length>1&&(B=H),Object.keys(xt).length>1&&(z=xt)}Object.values(U).forEach(j=>{let Y=0;for(let ct=y.length-1;ct>=0;ct--){const ft=j.monthScores[y[ct].label];if(ft>0){Y=ft;break}}if(Y<=0)return;W[j.cnty]=(W[j.cnty]||0)+1,N.push({cnty:j.cnty,rank:W[j.cnty],domain:j.domain,type:j.type,citations:Y,monthScores:j.monthScores,prd:j.prd});const it=`${j.cnty}|${j.domain}`,lt=!j.prd||/^(ttl|total)$/i.test(j.prd);V[it]||(V[it]={cnty:j.cnty,domain:j.domain,type:j.type,months:{},_ttlMonths:{}});const wt=V[it];lt?(wt.type=j.type||wt.type,Object.entries(j.monthScores).forEach(([ct,ft])=>{ft>0&&(wt._ttlMonths[ct]?wt.months[ct]+=ft:(wt.months[ct]=ft,wt._ttlMonths[ct]=!0))})):Object.entries(j.monthScores).forEach(([ct,ft])=>{!(ft>0)||wt._ttlMonths[ct]||(wt.months[ct]=(wt.months[ct]||0)+ft)})}),Object.values(V).forEach(j=>{delete j._ttlMonths});const Ct={TTL:{},CNTY:{}};Object.entries(V).forEach(([j,Y])=>{const it=j.startsWith("TTL|")?"TTL":"CNTY";Object.entries(Y.months).forEach(([lt,wt])=>{wt>0&&(Ct[it][lt]=(Ct[it][lt]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",Ct.TTL,"/ CNTY:",Ct.CNTY);const bt={},vt={};Object.values(L).forEach(j=>{bt[j.cnty]=(bt[j.cnty]||0)+1,vt[j.prd||"(empty)"]=(vt[j.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(L).length} / cnty dist:`,bt,"/ prd dist:",vt);const kt=Object.values(L).filter(j=>j.cnty==="TTL"&&j.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${kt.length}건):`,kt.map(j=>`${j.domain}|prd='${j.prd}'|type='${j.type}'|May=${j.monthScores.May}`).join(" / "));const Ft={};N.forEach(j=>{Ft[j.cnty]||(Ft[j.cnty]=[]),Ft[j.cnty].push(j)}),Object.values(Ft).forEach(j=>{j.sort((Y,it)=>it.citations-Y.citations),j.forEach((Y,it)=>{Y.rank=it+1})})}else for(let R=r;R<t.length;R++){const L=t[R];if(!L)continue;const G=String(L[h]||"").trim(),K=String(L[x]||"").trim(),tt=f>=0?String(L[f]||"").trim():"";if(!u&&(!G||!G.includes("."))){const U=String(L[h]||"").trim().toUpperCase(),yt=e[U]||(o.includes(U)?U:null);yt&&(!K||K==="")&&($=yt);continue}if(!G||!G.includes("."))continue;let et="TTL";if(u&&c>=0){const U=String(L[c]||"").trim().toUpperCase();et=e[U]||U}else u||(et=$);let g=0;if(y.length>0)for(let U=y.length-1;U>=0;U--){const yt=String(L[y[U].col]||"").replace(/,/g,"").trim(),S=parseFloat(yt);if(!isNaN(S)&&S>0){g=S;break}}else for(let U=L.length-1;U>=p;U--){const yt=String(L[U]||"").replace(/,/g,"").trim();if(!yt)continue;const S=parseFloat(yt);if(!isNaN(S)&&S>0){g=S;break}}if(y.length>0){const U={};if(y.forEach(({col:yt,label:S})=>{const C=String(L[yt]||"").replace(/,/g,"").trim(),F=parseFloat(C);!isNaN(F)&&F>0&&(U[S]=F)}),Object.keys(U).length>0){const yt=`${et}|${G}`;V[yt]={cnty:et,domain:G,type:K,months:U}}}const J={};y.length>0&&y.forEach(({col:U,label:yt})=>{const S=String(L[U]||"").replace(/,/g,"").trim(),C=parseFloat(S);!isNaN(C)&&C>0&&(J[yt]=C)}),g>0&&(W[et]=(W[et]||0)+1,N.push({cnty:et,rank:W[et],domain:G,type:K,citations:g,monthScores:J,prd:tt}))}const A={};if(N.length>0&&(A.citationsCnty=N),Object.keys(V).length>0){A.citDomainTrend=V;const R=y.map(L=>L.label).filter(L=>Object.values(V).some(G=>G.months[L]>0));A.citDomainMonths=R}return B&&(A.citDomainByLlm=B),z&&(A.citDomainByLlmTrend=z),A}function Eo(t,e){const o=eo(t,[/^type$/,/^(county|country)$/]);if(o<0)return Kt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(b=>b==null?void 0:b.slice(0,6))});const s=t[o];let a=-1,r=-1,l=-1,c=-1,h=4;for(let b=0;b<s.length;b++){const O=String(s[b]||"").split(/\n/)[0].trim().toLowerCase();O==="type"&&a<0&&(a=b),(O==="county"||O==="country")&&r<0&&(r=b),(O==="topic"||O==="topoc")&&l<0&&(l=b),O==="brand"&&c<0&&(c=b)}l<0&&(l=2,Kt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:s.slice(0,6)})),h=Math.max(a,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,f=/^w\d+/i,d=[],p=[o];for(let b=0;b<=o;b++)b!==o&&p.push(b);for(const b of p){if(d.length>0)break;const O=t[b];if(O)for(let M=h;M<O.length;M++){const N=String(O[M]||"").split(/\n/)[0].trim();N&&(x.test(N)||f.test(N))&&d.push({col:M,label:N})}}const u=t.slice(o+1),k=[];u.forEach(b=>{if(!b)return;const O=String(b[a]||"").trim(),M=se(b[r]),N=String(b[l]||"").trim(),V=String(b[c]||"").trim();if(!N||!V)return;const B={};let z=0;d.forEach(({col:W,label:$})=>{const q=te(b[W]);q>0&&(B[$]=q,z=q)}),(Object.keys(B).length>0||N)&&k.push({type:O,country:M,topic:N,brand:V,scores:B,latestScore:z})});const v=e==="weekly"?"weeklyPR":"monthlyPR",y=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return k.length>0&&(w[v]=k),d.length>0&&(w[y]=d.map(b=>b.label)),w}function Ao(t,e){const o=t.findIndex(w=>w?w.some(b=>/steakholders|stakeholders/i.test(String(b||"").trim()))||w.some(b=>/^type$/i.test(String(b||"").trim()))&&w.some(b=>/topoc|topic/i.test(String(b||"").trim())):!1);if(o<0)return Kt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const s=t[o];let a=-1,r=-1,l=-1,c=-1,h=4;for(let w=0;w<s.length;w++){const b=String(s[w]||"").trim().toLowerCase();(b==="steakholders"||b==="stakeholders")&&a<0&&(a=w),b==="type"&&r<0&&(r=w),(b==="country"||b==="county")&&l<0&&(l=w),(b==="topoc"||b==="topic")&&c<0&&(c=w)}h=Math.max(a,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,f=/^w\d+/i,d=[];for(let w=h;w<s.length;w++){const b=String(s[w]||"").split(/\n/)[0].trim();b&&(x.test(b)||f.test(b))&&d.push({col:w,label:b})}const p=t.slice(o+1),u=[];p.forEach(w=>{if(!w)return;const b=String(w[a]||"").trim(),O=String(w[r]||"").trim(),M=se(w[l]),N=String(w[c]||"").trim();if(!N||!b)return;const V={};let B=0;d.forEach(({col:z,label:W})=>{const $=te(w[z]);$>0&&(V[W]=$,B=$)}),u.push({stakeholder:b,type:O,country:M,topic:N,scores:V,latestScore:B})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",v=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",y={};return u.length>0&&(y[k]=u),d.length>0&&(y[v]=d.map(w=>w.label)),y}const ce={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Sr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const e=eo(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,p)=>console.log(`  row${p}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const o=t[e];let s=-1,a=-1,r=-1;for(let d=0;d<o.length;d++){const p=String(o[d]||"").trim().toLowerCase();s<0&&(p==="country"||p==="county")&&(s=d),a<0&&(p==="category"||p==="product"||p==="제품"||p==="카테고리")&&(a=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(p)&&(r=d)}if(s<0||a<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:s,categoryCol:a,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(ce).length}건`),{unlaunchedMap:{...ce}};const l=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),c={...ce};let h=0,x=0,f=0;return t.slice(e+1).forEach((d,p)=>{const u=e+1+p;try{if(!d){f++;return}const k=String(d[r]||"").trim();if(!k){f++;return}h++;const v=k.toLowerCase().replace(/\s+/g," ");if(!l.has(v)&&!l.has(v.replace(/\s/g,"")))return;const y=hr(d[s]),w=String(d[a]||"").trim();if(!y||!w){console.warn("[parseUnlaunched] row skipped",{rowIdx:u,raw:{country:d[s],category:d[a],status:d[r]},parsed:{country:y,rawCategory:w}}),f++;return}const b=w.toUpperCase(),O=Uo[b]||b;c[`${y}|${O}`]=!0,O!==b&&(c[`${y}|${b}`]=!0),x++}catch(k){let v;try{v={country:d==null?void 0:d[s],category:d==null?void 0:d[a],status:d==null?void 0:d[r]}}catch{v=d}console.warn("[parseUnlaunched] row error",{rowIdx:u,raw:v,error:k==null?void 0:k.message}),f++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(ce).length}건 + skip ${f}건 / 총행 ${h} / 최종키 ${Object.keys(c).length}개`),{unlaunchedMap:c}}function Fr(t){const e=eo(t,[/^bu$/,/topic/]);if(e<0)return Kt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(f=>f==null?void 0:f.slice(0,6))});const o=t[e];let s=-1,a=-1,r=-1,l=-1,c=-1;for(let f=0;f<o.length;f++){const d=String(o[f]||"").trim().toLowerCase();s<0&&d==="bu"&&(s=f),a<0&&d.includes("topic")&&d.includes("대시보드")&&(a=f),r<0&&(d==="explanation"||d==="설명")&&(r=f),l<0&&d.includes("기존")&&(l=f),c<0&&d.includes("topic")&&d.includes("row")&&(c=f)}a<0&&(a=1),r<0&&(r=2);const h=[];let x="";return t.slice(e+1).forEach(f=>{if(!f)return;const d=String(f[s]||"").trim();d&&(x=d);const p=String(f[a]||"").trim();if(!p)return;const u=String(f[r]||"").trim(),k=l>=0?String(f[l]||"").trim():"",v=c>=0?String(f[c]||"").trim():"";h.push({bu:x,topic:p,explanation:u,oldTopic:k,topicRow:v})}),h.length>0?{prTopicList:h}:{}}function Tr(t,e){var o;if(!cr(e,`parseSheetRows:${t}`))return{};try{if(t===jt.meta)return fr(e);if(t===jt.visSummary)return mr(e);if(t===jt.productMS||t===jt.productHS||t===jt.productES)return gr(e);if(t===jt.weeklyMS)return Ke(e,"MS");if(t===jt.weeklyHS)return Ke(e,"HS");if(t===jt.weeklyES)return Ke(e,"ES");if(t===jt.monthlyPR)return Eo(e,"monthly");if(t===jt.weeklyPR)return Eo(e,"weekly");if(t===jt.monthlyBrandPrompt)return Ao(e,"monthly");if(t===jt.weeklyBrandPrompt)return Ao(e,"weekly");if(t===jt.citPageType)return wr(e);if(t===jt.citTouchPoints)return Cr(e);if(t===jt.citDomain)return kr(e);if(t===jt.unlaunched)return Sr(e);if(t===jt.prTopicList)return Fr(e)}catch(s){return Xe(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:s==null?void 0:s.message,stack:(o=s==null?void 0:s.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Kt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(jt)})}function Er(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Ar(t,e){var d;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,s=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(s,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const r=await a.text(),l=await Zo(),c=l.read(r,{type:"string"}),h=c.Sheets[c.SheetNames[0]],x=l.utils.sheet_to_json(h,{header:1,defval:""}),f=r.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${r.length}자/${f}줄 → ${x.length}행 × ${((d=x[0])==null?void 0:d.length)??0}컬럼`),x}async function Lr(t,e){var r,l;const o=Object.values(jt),s={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(c=>Ar(t,c).then(h=>({name:c,rows:h}))));for(let c=0;c<o.length;c++){const h=o[c],x=a[c];if(e==null||e(`"${h}" 처리 중... (${c+1}/${o.length})`),x.status==="rejected"){console.warn(`"${h}" 시트 건너뜀:`,(r=x.reason)==null?void 0:r.message);continue}try{const{rows:f}=x.value,d=Tr(h,f);for(const[p,u]of Object.entries(d))p==="weeklyLabels"||p==="weeklyLabelsFull"?s[p]||(s[p]=u):Array.isArray(u)&&Array.isArray(s[p])?s[p]=[...s[p],...u]:u&&typeof u=="object"&&!Array.isArray(u)&&s[p]&&typeof s[p]=="object"&&!Array.isArray(s[p])?s[p]={...s[p],...u}:s[p]=u}catch(f){console.warn(`"${h}" 시트 처리 실패:`,f.message)}}if(!s.productsPartial&&s.weeklyAll&&s.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const c=[];for(const[h,x]of Object.entries(s.weeklyAll)){const f=x.Total||x.TTL||{},d=f.LG||f.lg||[],p=Object.entries(f).filter(([w])=>w!=="LG"&&w!=="lg"),u=d.length?d[d.length-1]:0,k=d.length>=5?d[0]:0;let v="",y=0;for(const[w,b]of p){const O=b.length?b[b.length-1]:0;O>y&&(y=O,v=w)}u>0&&c.push({id:h,bu:Go[h]||"HS",kr:Pe[h]||h,category:h,date:((l=s.meta)==null?void 0:l.period)||"",score:u,prev:k,vsComp:y,compName:v,allScores:{LG:u,...v?{[v]:y}:{}}})}if(c.length&&(s.productsPartial=c,console.log(`[SYNC] weeklyAll에서 ${c.length}개 제품 생성:`,c.map(h=>`${h.id}=${h.score}`).join(", "))),!s.productsCnty){const h=[];for(const[x,f]of Object.entries(s.weeklyAll)){const d=Pe[x]||x;for(const[p,u]of Object.entries(f)){if(p==="Total"||p==="TTL")continue;const k=u.LG||u.lg||[],v=k.length?k[k.length-1]:0;if(v<=0)continue;const y=k.length>=2?k[0]:0;let w="",b=0;const O={LG:v};for(const[N,V]of Object.entries(u)){if(N==="LG"||N==="lg")continue;const B=V.length?V[V.length-1]:0;O[N]=B,B>b&&(b=B,w=N)}const M=+(v-b).toFixed(1);h.push({product:d,country:p,score:v,prev:y,compName:w,compScore:b,gap:M,allScores:O})}}h.length&&(s.productsCnty=h,console.log(`[SYNC] weeklyAll에서 productsCnty ${h.length}건 생성`))}}if(s.weeklyLabels&&s.weeklyLabels.length&&s.weeklyLabels.every((h,x)=>h===`W${x+1}`)){const h=(s.weeklyPRLabels||s.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(h.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",h),s.weeklyLabels=h;const x=(s.weeklyPRLabels||s.weeklyBrandPromptLabels||[]).map(f=>{const d=String(f).split(/\n/);return d[0].trim().toUpperCase()+(d[1]?d[1].trim():"")}).filter(f=>/^W\d+/.test(f));x.length&&(s.weeklyLabelsFull=x)}}if(s._syncIssues=dr(s,"syncFromGoogleSheets"),typeof localStorage<"u")try{const c=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");c.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:s._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(c.slice(0,10)))}catch{}return s}const Tt={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:T,outline:"none",boxSizing:"border-box"};function Br(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),s=Math.floor(o/60),a=Math.floor(s/24);return a>=1?`${a}일 전`:s>=1?`${s}시간 전`:o>=1?`${o}분 전`:"방금 전"}function $r({savedAt:t,ageMs:e,stale:o,style:s}){const a=t==null,r=a?"#1E293B":o?"#7F1D1D":"#064E3B",l=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",c=a?"#334155":o?"#B91C1C":"#047857",h=a?"○":o?"⚠️":"●",x=a?"동기화 정보 없음":`데이터 최신화: ${Br(e)}`,f=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:f,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:l,border:`1px solid ${c}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:T,whiteSpace:"nowrap",...s||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:h}),x]})}function Rr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
.hero-compratio{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}
.hero-compratio-cap{font-size:13px;font-weight:700;color:#64748B;letter-spacing:0.3px}
.hero-compratio-val{font-size:20px;font-weight:900;letter-spacing:-0.5px}
.hero-compratio-sub{font-size:13px;color:#64748B}
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
`}const qt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",ee="#CF0652",de="#94A3B8",Oe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},tn={LG:ee,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Lo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Ze={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Ir=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Ne={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},jr={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Pr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},oo=90;function no(t,e){const o=Oe[e]||Oe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Mr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Dr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function Qe(t){const e=String(t||"").trim().toUpperCase();return Ne[e]||t}function Or(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?jr[o]||Ne[o]||t:Pr[o]||Ne[o]||t}let Nr=0;function Bo(t,e,o,s,a,r={}){if(!t||!t.length)return`<svg width="${o}" height="${s}"></svg>`;const l=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,c=r.baselineLabel||"",h=r.labelOffsetY||0,x=r.lineOffsetY||0,f=Nr++,d={t:18,r:10,b:20,l:10},p=o-d.l-d.r,u=s-d.t-d.b,k=t.filter($=>$!=null);if(!k.length){let $=`<svg viewBox="0 0 ${o} ${s}" width="100%" height="${s}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const q=t.length,A=q>1?q-1:1;return $+=t.map((R,L)=>`<text x="${(d.l+L/A*p).toFixed(1)}" y="${d.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[L]||""}</text>`).join(""),$+="</svg>",$}const v=Math.min(...k)-1,y=Math.max(...k)+1,w=y-v||1,b=t.length,O=b>1?b-1:1,M=t.map(($,q)=>d.l+q/O*p),N=[];t.forEach(($,q)=>{$!=null&&N.push({x:M[q],y:d.t+(1-($-v)/w)*u,v:$,idx:q})});let V=`<svg viewBox="0 0 ${o} ${s+12}" width="100%" height="${s+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const B=l>0?N.filter($=>$.idx<l):[],z=l>0?N.filter($=>$.idx>=l):N,W="#64748B";if(z.length>=2){const $=z.map((A,R)=>`${R?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),q=$+` L${z[z.length-1].x.toFixed(1)},${d.t+u} L${z[0].x.toFixed(1)},${d.t+u} Z`;V+=`<defs><linearGradient id="lg${f}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,V+=`<path d="${q}" fill="url(#lg${f})"/>`,V+=`<path d="${$}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(B.length>=2){const $=B.map((q,A)=>`${A?"L":"M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(" ");V+=`<path d="${$}" stroke="${W}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(V+=N.map($=>{const q=l>0&&$.idx<l;return l>0&&$.idx===l?`<circle cx="${$.x.toFixed(1)}" cy="${$.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${$.x.toFixed(1)}" cy="${$.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${q?W:a}" stroke-width="2" opacity="${q?.85:1}"/>`}).join(""),V+=N.map($=>{const A=l>0&&$.idx<l?W:a;return`<text x="${$.x.toFixed(1)}" y="${Math.max($.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${qt}">${$.v.toFixed(1)}</text>`}).join(""),l>0&&c){const $=M[l];V+=`<line x1="${$.toFixed(1)}" y1="${(d.t+x).toFixed(1)}" x2="${$.toFixed(1)}" y2="${(d.t+u+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const q=$>o*.7,A=(q?d.t+u+1:d.t+8)+h;V+=`<text x="${(q?$-5:$+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${q?"end":"start"}" font-size="9" fill="#64748B" font-family="${qt}">${c}</text>`}return V+=t.map(($,q)=>`<text x="${M[q].toFixed(1)}" y="${d.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[q]||""}</text>`).join(""),V+="</svg>",V}function Ae(t,e){return tn[t]||Lo[e%Lo.length]}function en(t,e,o,s,a={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const l=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,c=a.baselineLabel||"";let h=1/0,x=-1/0;if(r.forEach(b=>(t[b]||[]).forEach(O=>{O!=null&&(O<h&&(h=O),O>x&&(x=O))})),!isFinite(h))return"";const f=Math.max((x-h)*.15,2);h=Math.max(0,h-f),x=Math.min(100,x+f);const d=x-h||1,p=e.length,u=8,k=8,v=s-u-k,y="#64748B";let w="";for(let b=0;b<=4;b++){const O=u+b/4*v;w+=`<line x1="0" y1="${O.toFixed(1)}" x2="${o}" y2="${O.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((b,O)=>{const M=t[b]||[],N=Ae(b,O),V=b==="LG",B=V?2.5:1.5,z=V?1:.7,W=[];if(M.forEach((R,L)=>{if(R==null)return;const G=(L+.5)/p*o,K=u+(1-(R-h)/d)*v;W.push({x:G,y:K,v:R,idx:L})}),!W.length)return;const $=l>0?W.filter(R=>R.idx<l):[],q=l>0?W.filter(R=>R.idx>=l):W;function A(R,L,G,K){if(R.length>=2){const tt=R.map((et,g)=>`${g?"L":"M"}${et.x.toFixed(1)},${et.y.toFixed(1)}`).join(" ");w+=`<path d="${tt}" stroke="${L}" fill="none" stroke-width="${B}" stroke-linecap="round" stroke-linejoin="round" opacity="${G}"/>`}R.forEach(tt=>{K&&tt.idx===l||(w+=`<circle cx="${tt.x.toFixed(1)}" cy="${tt.y.toFixed(1)}" r="${V?3.5:2.5}" fill="#fff" stroke="${L}" stroke-width="${V?2:1.5}" opacity="${G}"/>`)})}if(A($,y,.85,!1),A(q,N,z,V&&l>0),V&&l>0){const R=W.find(L=>L.idx===l);R&&(w+=`<circle cx="${R.x.toFixed(1)}" cy="${R.y.toFixed(1)}" r="4.5" fill="#000" stroke="${N}" stroke-width="3"/>`)}}),l>0&&c){const b=(l+.5)/p*o;w+=`<line x1="${b.toFixed(1)}" y1="${u}" x2="${b.toFixed(1)}" y2="${u+v}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const O=b>o*.7;w+=`<text x="${(O?b-5:b+5).toFixed(1)}" y="${(u+12).toFixed(1)}" text-anchor="${O?"end":"start"}" font-size="11" fill="#64748B" font-family="${qt}">${c}</text>`}return`<svg viewBox="0 0 ${o} ${s}" width="100%" height="${s}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function _r({lang:t,weeklyAll:e,products:o,productsCnty:s,ulMap:a,monthlyVis:r,total:l,meta:c,wLabels:h}){const x={monthlyVis:r};return`
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
  // 활성 탭 안의 lazy iframe(data-src) 최초 1회 로드 (readability 등)
  var actPanel=document.getElementById('tab-'+id);
  if(actPanel){actPanel.querySelectorAll('iframe[data-src]').forEach(function(f){if(!f.src){f.src=f.getAttribute('data-src')}})}
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
function switchPRPeriod(mode){
  var wp=document.getElementById('pr-period-weekly');
  var mp=document.getElementById('pr-period-monthly');
  if(wp)wp.style.display=mode==='weekly'?'':'none';
  if(mp)mp.style.display=mode==='monthly'?'':'none';
  var wb=document.getElementById('pr-period-w-btn');
  var mb=document.getElementById('pr-period-m-btn');
  if(wb){wb.style.background=mode==='weekly'?'#fff':'transparent';wb.style.color=mode==='weekly'?'#0F172A':'#94A3B8'}
  if(mb){mb.style.background=mode==='monthly'?'#fff':'transparent';mb.style.color=mode==='monthly'?'#0F172A':'#94A3B8'}
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
  // 월간 진입 시 뱃지를 드롭다운의 선택 월로 동기화 (기본 meta.period 고정 표시 방지)
  if(mode==='monthly'&&monthBadge){
    var _msel=document.getElementById('vis-month-select');
    if(_msel&&_msel.options[_msel.selectedIndex]&&_msel.options[_msel.selectedIndex].textContent!=='—'){
      monthBadge.textContent=_msel.options[_msel.selectedIndex].textContent;
    }
  }
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
${(()=>{const f=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?f(e):"{}"};
var _products=${f(o.map(d=>({id:d.id,bu:d.bu,kr:d.kr,en:d.en||d.kr,category:d.category||"",date:d.date||"",status:d.status,score:d.score||0,prev:d.prev||0,vsComp:d.vsComp||0,compName:d.compName||"",compRatio:d.compRatio||0,allScores:d.allScores||{},monthlyScores:d.monthlyScores||[]})))};
var _productsCnty=${f(s||[])};
var _unlaunchedMap=${f(a)};
var _PROD_TO_UL=${f(Le)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${f((x==null?void 0:x.monthlyVis)||[])};
var _total=${f(l)};
var _meta={period:${f(c.period||"")},reportNo:${f(c.reportNo||"")},totalInsight:${f(c.totalInsight||"")}};
var _wLabels=${f(h)};`})()}
${(()=>{const f=d=>JSON.stringify(d).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${f(tn)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${ee}';
var _FONT=${f(qt)};
var _COMP='${de}';
var _REGIONS=${f(Object.fromEntries(Object.entries(Ze).map(([d,p])=>[d,p.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Ze).map(([f,d])=>[f,t==="en"?d.labelEn:d.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${oo};

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
      rows+='<div class="trend-row" data-prodid="'+(p.id||p.category||'')+'" style="margin-bottom:24px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="width:3px;height:16px;border-radius:2px;background:'+_RED+';flex-shrink:0"></span><span style="font-size:15px;font-weight:700;color:#1A1A1A">'+p.kr+'</span><span style="font-size:13px;font-weight:700;padding:2px 8px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>'+(lgL!=null?'<span style="font-size:13px;font-weight:700;color:#1A1A1A">LG '+lgL.toFixed(1)+'%</span>':'')+(p.compName?'<span style="font-size:13px;color:#94A3B8">vs '+p.compName+' '+(p.compRatio!=null&&p.compRatio!==''?Math.round(p.compRatio):'')+'%</span>':'')+'</div><div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:'+_FONT+'">'+colgroup+'<tbody>'+chartRow+legendRow+thead+tbody+'</tbody></table></div></div>';
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
    var compRatioEl=hero.querySelector('.hero-compratio-val');
    if(compRatioEl&&comp>0){var cr=Math.round((sc/comp)*100);compRatioEl.textContent=cr+'%';compRatioEl.style.color=cr>=100?'#22C55E':cr>=80?'#FBBF24':'#EF4444'}
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
  if(!ttl.length)return _monthTotalFromProducts();
  ttl.sort(function(a,b){return _dateMi(a.date)-_dateMi(b.date)});
  var idx=-1;
  ttl.forEach(function(r,i){if(_dateMi(r.date)===_curMonthIdxIn12)idx=i});
  if(idx<0)return _monthTotalFromProducts();
  var cur=ttl[idx];var prev=idx>0?ttl[idx-1]:null;
  return{
    score:+(Number(cur.lg)||0).toFixed(1),
    prev:+(Number(prev?prev.lg:cur.lg)||0).toFixed(1),
    vsComp:+(Number(cur.comp)||0).toFixed(1),
    compName:'SAMSUNG'
  };
}
// 폴백 — _monthlyVis TTL 행이 선택 월을 커버하지 않을 때, 작동 중인 cnty 카드/트렌드와
// 동일한 소스(_products[].monthlyScores: score=LG, comp=1위 경쟁사)를 월별 평균해서
// 선택 월 수치 + 직전(가용) 월 MoM 계산. _curMonthIdxIn12 미선택 시 null.
function _monthTotalFromProducts(){
  if(_curMonthIdxIn12<0||!_products||!_products.length)return null;
  var byMi={};
  _products.forEach(function(p){
    (p.monthlyScores||[]).forEach(function(m){
      if(m.score==null)return;
      var mi=_dateMi(m.date);if(mi<0)return;
      if(!byMi[mi])byMi[mi]={lgSum:0,lgCnt:0,compSum:0,compCnt:0};
      byMi[mi].lgSum+=Number(m.score)||0;byMi[mi].lgCnt++;
      if(m.comp!=null){byMi[mi].compSum+=Number(m.comp)||0;byMi[mi].compCnt++}
    });
  });
  var mis=Object.keys(byMi).map(Number).sort(function(a,b){return a-b});
  var pos=mis.indexOf(_curMonthIdxIn12);
  if(pos<0||!byMi[_curMonthIdxIn12].lgCnt)return null;
  var cur=byMi[_curMonthIdxIn12];
  var prev=pos>0?byMi[mis[pos-1]]:null;
  var curLg=cur.lgSum/cur.lgCnt;
  var prevLg=prev&&prev.lgCnt?prev.lgSum/prev.lgCnt:curLg;
  var curComp=cur.compCnt?cur.compSum/cur.compCnt:0;
  return{
    score:+curLg.toFixed(1),
    prev:+prevLg.toFixed(1),
    vsComp:+curComp.toFixed(1),
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
`}const zr=["audio","rac","aircare"];function Gr(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return zr.includes(String(e).toLowerCase())}function Ur(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function _e(t,e){if(!Gr(t)||!e)return-1;const o=Ur(t);if(o>0){const s=e.findIndex(a=>{const r=String(a||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(s>=0)return s}return e.findIndex(s=>{const a=String(s||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const ze={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function Hr(t){const e=ze[t]||ze.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function on(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),s=ze[e]||ze.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${s.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${s.racair}</p>`:""}function Wr(t,e,o,s,a,r,l){if(!e||!Object.keys(e).length)return"";const h=["MS","HS","ES"].map(x=>{const f=t.filter(p=>p.bu===x);if(!f.length)return"";const d=f.map(p=>{var $,q;const u=(($=e[p.id])==null?void 0:$.Total)||{},k=Object.keys(u).sort((A,R)=>{var K,tt;if(A==="LG")return-1;if(R==="LG")return 1;const L=((K=u[A])==null?void 0:K[u[A].length-1])||0;return(((tt=u[R])==null?void 0:tt[u[R].length-1])||0)-L});if(!k.length)return"";const v=no(p.status,a),y=(q=u.LG)==null?void 0:q[u.LG.length-1],w=k.map((A,R)=>{const L=Ae(A,R),G=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${L};opacity:${G?1:.7}"></i><span style="font-size:13px;color:${G?"#1A1A1A":"#94A3B8"};font-weight:${G?700:400}">${A}</span></span>`}).join(""),b=o.length,O=`<colgroup><col style="width:${oo}px">${o.map(()=>"<col>").join("")}</colgroup>`,M=_e(p,o),N=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:8px 0;border:0">${en(u,o,b*80,180,{fadeBeforeIdx:M,baselineLabel:M>0?"*Baseline 재설정":""})}</td></tr>`,V=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,B=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,z=k.map((A,R)=>{const L=Ae(A,R),G=A==="LG",K=o.map((tt,et)=>{var J;const g=(J=u[A])==null?void 0:J[et];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${g!=null?G?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${G?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${g!=null?g.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${G?"#FFF8F9":R%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${G?700:500};color:${L};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${L};margin-right:4px;vertical-align:0"></i>${A}</td>${K}</tr>`}).join(""),W=ro(p.id||p.category,r);return`<div class="trend-row${W?" is-unlaunched":""}" data-prodid="${p.id||p.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${io(p,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${W?"#F1F5F9":v.bg};color:${W?"#64748B":v.color};border:1px solid ${W?"#CBD5E1":v.border}">${W?a==="en"?"Unlaunched":"미출시":v.label}</span>
          ${y!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${y.toFixed(1)}%</span>`:""}
          ${p.compName?`<span style="font-size:14px;color:#94A3B8">vs ${p.compName} ${p.compRatio!=null&&p.compRatio!==""?Math.round(p.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${O}<tbody>${N}${V}${B}${z}</tbody></table></div>
        ${on(p,a)}
      </div>`}).join("");return d?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${d}
    </div>`:""}).join("");return h.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${l||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${h}</div>
  </div>`:""}function Vr(t,e,o,s,a,r){if(!e||!e.length)return"";const l=["MS","HS","ES"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(u){const k=String(u||""),v=k.match(/(\d{1,2})월/);if(v)return parseInt(v[1])-1;const y=k.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(y)return h[y[1].toLowerCase()];const w=k.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const f=[0,1,2,3,4,5,6,7,8,9,10,11],d=c.slice(),p=l.map(u=>{const k=t.filter(y=>y.bu===u);if(!k.length)return"";const v=k.map(y=>{const w=y.monthlyScores||[];let b={};if(w.length>=2){const G=new Set;if(w.forEach(K=>{K.allScores&&Object.keys(K.allScores).forEach(tt=>G.add(tt))}),G.forEach(K=>{b[K]=f.map(tt=>{var g;const et=w.find(J=>x(J.date)===tt);return((g=et==null?void 0:et.allScores)==null?void 0:g[K])??null})}),!G.size&&(b.LG=f.map(K=>{const tt=w.find(et=>x(et.date)===K);return tt?tt.score:null}),y.vsComp>0)){const K=f.map(tt=>{const et=w.find(g=>x(g.date)===tt);return(et==null?void 0:et.comp)??null});K.some(tt=>tt!=null)&&(b[y.compName||"Comp"]=K)}}else{const G=e.filter(g=>g.division===u&&(g.country==="TOTAL"||g.country==="TTL")),K={};G.forEach(g=>{const J=x(g.date);J>=0&&(K[J]=g)});const tt=f.map(g=>{var J;return((J=K[g])==null?void 0:J.lg)||null}),et=f.map(g=>{var J;return((J=K[g])==null?void 0:J.comp)||null});b={LG:tt},et.some(g=>g!=null&&g>0)&&(b.Samsung=et)}const O=Object.keys(b).sort((G,K)=>{if(G==="LG")return-1;if(K==="LG")return 1;const tt=(b[G]||[]).filter(g=>g!=null).pop()||0;return((b[K]||[]).filter(g=>g!=null).pop()||0)-tt});if(!O.length)return"";const M=no(y.status,s),N=(b.LG||[]).filter(G=>G!=null).pop(),V=O.map((G,K)=>{const tt=Ae(G,K),et=G==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${tt};opacity:${et?1:.7}"></i><span style="font-size:13px;color:${et?"#1A1A1A":"#94A3B8"};font-weight:${et?700:400}">${G}</span></span>`}).join(""),B=d.length,z=`<colgroup><col style="width:${oo}px">${d.map(()=>"<col>").join("")}</colgroup>`,W=_e(y,d),$=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:8px 0;border:0">${en(b,d,B*80,180,{fadeBeforeIdx:W,baselineLabel:W>0?"*Baseline 재설정":""})}</td></tr>`,q=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:4px 0 6px;border:0">${V}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${d.map(G=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${G}</th>`).join("")}</tr>`,R=O.map((G,K)=>{const tt=Ae(G,K),et=G==="LG",g=d.map((J,U)=>{var S;const yt=(S=b[G])==null?void 0:S[U];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${yt!=null?et?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${et?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${yt!=null?yt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${et?"#FFF8F9":K%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${et?700:500};color:${tt};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${tt};margin-right:4px;vertical-align:0"></i>${G}</td>${g}</tr>`}).join(""),L=ro(y.id||y.category,a);return`<div class="trend-row${L?" is-unlaunched":""}" data-prodid="${y.id||y.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${io(y,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${L?"#F1F5F9":M.bg};color:${L?"#64748B":M.color};border:1px solid ${L?"#CBD5E1":M.border}">${L?s==="en"?"Unlaunched":"미출시":M.label}</span>
          ${N!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${N.toFixed(1)}%</span>`:""}
          ${y.compName?`<span style="font-size:14px;color:#94A3B8">vs ${y.compName} ${y.compRatio!=null&&y.compRatio!==""?Math.round(y.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${z}<tbody>${$}${q}${A}${R}</tbody></table></div>
        ${on(y,s)}
      </div>`}).join("");return v?`<div class="bu-group" data-bu="${u}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${u}</span></div>
      ${v}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${s==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${d[0]}–${d[d.length-1]} (${d.length}${s==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function nn(){return""}function $o(t,e,o,s,a){const r=+(t.score-t.prev).toFixed(1),l=t.vsComp||0,c=+(t.score-l).toFixed(1),h=r>0?"▲":r<0?"▼":"─",x=r>0?"#22C55E":r<0?"#EF4444":"#94A3B8",f=l>0?Math.round(t.score/l*100):null,d=f==null?"#94A3B8":f>=100?"#22C55E":f>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${e.period||""}</span>
        <span class="hero-ctx-badge">${s==="en"?"All Divisions":"전체 본부"}</span>
        <span class="hero-ctx-badge">${s==="en"?"All Products":"전체 제품"}</span>
        <span class="hero-ctx-badge">${s==="en"?"All Countries":"전체 국가"}</span>
      </div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        ${f!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${s==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${d}">${f}%</span>
          <span class="hero-compratio-sub">${s==="en"?"vs Samsung":"삼성 대비"}</span>
        </div>`:""}
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${x}">${h} ${Math.abs(r).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${ee}"></div>
          </div>
          ${l>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(l,100)}%;background:${de}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${ee}"></i> LG ${t.score}%</span>
            ${l>0?`<span><i style="background:${de}"></i> Samsung ${l}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${l>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${l}%</span>
          <span class="hero-comp-gap" style="color:${c>=0?"#22C55E":"#EF4444"}">Gap ${c>=0?"+":""}${c}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function Fe(t,e){const o=Le[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(s=>s.endsWith("|"+o)).map(s=>s.split("|")[0])}function ro(t,e){return Ir.every(o=>{const s=Le[t]||(t||"").toUpperCase();return(e||{})[`${o}|${s}`]})}function io(t,e){return Fe(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Ro(t,e,o,s,a,r,l,c,h){if(!t.length)return"";const f=["MS","HS","ES"].map(d=>{const p=t.filter(k=>k.bu===d);if(!p.length)return"";const u=p.map(k=>{var lt,wt;const v=k.weekly||[],y=v.filter(ct=>ct!=null),w=k.weeklyScore||(y.length>0?y[y.length-1]:k.score),b=k.monthlyScore||k.score,O=w,M=((lt=c==null?void 0:c[k.id])==null?void 0:lt.Total)||((wt=c==null?void 0:c[k.id])==null?void 0:wt.TTL)||{};let N=0;Object.entries(M).forEach(([ct,ft])=>{if(ct==="LG"||ct==="lg")return;const D=Array.isArray(ft)&&ft.length?ft[ft.length-1]:0;D>N&&(N=D)});const V=k.vsComp||0,B=N>0?w/N*100:V>0?w/V*100:100,z=V>0?b/V*100:100,W=Math.round(B),$=Math.round(z),q=W,A=B>=100?"lead":B>=80?"behind":"critical",R=no(A,s),L=y.length>=1?y[y.length-1]:null,G=y.length>=2?y[y.length-2]:null,K=L!=null&&G!=null?+(L-G).toFixed(1):null,tt=K>0?"▲":K<0?"▼":"─",et=K>0?"#22C55E":K<0?"#EF4444":"#94A3B8",g=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function yt(ct){const ft=String(ct||""),D=ft.match(/(\d{1,2})월/);if(D)return parseInt(D[1])-1;const ot=ft.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ot)return U[ot[1].toLowerCase()];const Z=ft.match(/\d{4}[-\/](\d{1,2})/);return Z?parseInt(Z[1])-1:-1}let S=k.monthlyScores||[];if(S.length<2&&l.length>0){const ct=l.filter(D=>D.division===k.bu&&(D.country==="TOTAL"||D.country==="TTL")),ft={};ct.forEach(D=>{const ot=yt(D.date);ot>=0&&(ft[ot]={date:D.date,score:D.lg,comp:D.comp})}),S=Object.keys(ft).sort((D,ot)=>D-ot).map(D=>ft[D])}const C=S.length>0?S.map(ct=>{const ft=yt(ct.date);return ft>=0?J[ft]:ct.date}):["M-3","M-2","M-1","M0"],F=S.length>0?S.map(ct=>ct.score):[null,null,null,k.score],P=S.length>=2?+(S[S.length-1].score-S[S.length-2].score).toFixed(1):null,E=P>0?"▲":P<0?"▼":"─",H=P>0?"#22C55E":P<0?"#EF4444":"#94A3B8",xt=q,Ct=xt>=100?"#15803D":xt>=80?"#D97706":"#BE123C",bt=k.weeklyPrev||(y.length>=5?y[y.length-5]:y[0]||0),vt=w&&bt?+(w-bt).toFixed(1):null,kt=b&&(k.monthlyPrev||k.prev)?+(b-(k.monthlyPrev||k.prev)).toFixed(1):null,Ft=Fe(k.id||k.category,r),j=ro(k.id||k.category,r),it=j?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:s==="en"?"Unlaunched":"미출시"}:R;return`<div class="prod-card${j?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${w.toFixed(1)}" data-ms="${b.toFixed(1)}" data-wr="${W}" data-mr="${$}" data-wmom="${vt??""}" data-mmom="${kt??""}" style="border-color:${it.border}">
        <div class="prod-head">
          <span class="prod-name">${io(k,r)}</span>
          ${Ft.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${s==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${it.bg};color:${it.color};border-color:${it.border}">${it.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${O.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${et}">${K!=null?`WoW ${tt} ${Math.abs(K).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${H}">${P==null?"MoM —":`MoM ${E} ${Math.abs(P).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const ct=a.slice(-10),ft=_e(k,ct),D=String(k.id||"").toLowerCase(),ot=D==="aircare"?30:D==="rac"?20:0;return Bo(v.slice(-10),ct,300,90,g,{fadeBeforeIdx:ft,baselineLabel:ft>0?"*Baseline 재설정":"",labelOffsetY:ot})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const ct=_e(k,C),D=String(k.id||"").toLowerCase()==="audio";return Bo(F,C,300,90,g,{fadeBeforeIdx:ct,baselineLabel:ct>0?"*Baseline 재설정":"",labelOffsetY:D?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${s==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(xt,120)}%;background:${Ct}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Ct}">${xt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${d}">
      <div class="bu-header"><span class="bu-label">${d}</span><span class="bu-count">${p.length}${o.categories}</span></div>
      <div class="prod-grid">${u}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${h||""}${h?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${nn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${f}${(()=>{const d=t.filter(p=>Fe(p.id||p.category,r).length>0).map(p=>`${(p.id||"").toLowerCase()==="audio"||p.kr==="오디오"?"Audio-Sound Suite":p.kr}: ${Fe(p.id||p.category,r).map(u=>Or(u,s)).join(", ")} ${s==="en"?"not launched":"미출시"}`);return(d.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${d.join(" / ")}</p>`:"")+Hr(s)})()}</div>
  </div>`}function Io(t,e,o,s){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),l=Le[r]||(r||"").toUpperCase(),c=s&&s[`${t.country}|${l}`],h=Dr(t.score,t.compScore),x=c?"#94A3B8":h==="lead"?"#15803D":h==="behind"?"#D97706":"#BE123C",f=+(t.score-t.compScore).toFixed(1),d=c?"#64748B":f>=0?"#15803D":"#BE123C",p=130,u=["TCL","HISENSE","HAIER"];let k="",v=0;t.allScores&&Object.entries(t.allScores).forEach(([z,W])=>{const $=String(z).toUpperCase();u.some(A=>$.includes(A))&&W>v&&(k=z,v=W)});const y=Math.max(e,v),w=c?1:t.score,b=Math.max(3,Math.round(w/y*p)),O=t.compScore>0?Math.max(3,Math.round(t.compScore/y*p)):0,M=v>0?Math.max(3,Math.round(v/y*p)):0,N="#9333EA",V=c?"—":t.score.toFixed(1),B=c?"—":`${f>=0?"+":""}${f}%p`;return`<div class="vbar-item${c?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${V}</span>
        <div class="vbar-col" style="height:${b}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${de}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${O}px;background:${de}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${v>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${N}">${v.toFixed(1)}</span>
        <div class="vbar-col" style="height:${M}px;background:${N}"></div>
        <span class="vbar-col-name" style="color:${N}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${d}">${B}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function jo(t,e,o,s,a,r){if(!t||!t.length)return"";const l=new Map;t.forEach(u=>{l.has(u.product)||l.set(u.product,[]),l.get(u.product).push(u)});const c=e.cntyProductFilter||{},h=[...l.entries()].filter(([u])=>c[u]!==!1).map(([u,k])=>{const v=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),y=k.map(w=>Io(w,v,Qe(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${u}"><div class="bu-header"><span class="bu-label">${u}</span></div><div class="vbar-chart">${y}</div></div>`}).join(""),x=new Map;t.forEach(u=>{x.has(u.country)||x.set(u.country,[]),x.get(u.country).push(u)});const f=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],p=f.filter(u=>x.has(u)).concat([...x.keys()].filter(u=>!f.includes(u))).map(u=>{const k=x.get(u);if(!k)return"";const v=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),y=k.map(w=>Io(w,v,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${u}"><div class="bu-header"><span class="bu-label">${Qe(u)}</span></div><div class="vbar-chart">${y}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${de}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${nn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${p}</div>
      <div class="cnty-view-product" style="display:none">${h}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const u={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},v=[...new Set(t.map(y=>y.product))].map(y=>{const w=u[y]||String(y).toLowerCase(),b=Fe(w,a),O=w==="audio"?"Audio-Sound Suite":y;return b.length?`${O}: ${b.join(", ")} ${s==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return v.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${v.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Po={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Kr(t){const e=Po[t]||Po.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Mo(t,e,o,s,a,r="weekly"){const l=r==="monthly",c=l?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let x;l?x=e&&e.length?e.slice():[]:x=e&&e.length?e.slice(-12):[];const f=[...new Set(t.map(A=>A.topic))].filter(Boolean),d=[...new Set(t.map(A=>A.type))].filter(Boolean),p=[...new Set(t.map(A=>A.country))].filter(A=>A&&A!=="TTL"),u=h.filter(A=>p.includes(A)).concat(h.filter(A=>!p.includes(A))),k=JSON.stringify(t).replace(/</g,"\\u003c"),v=JSON.stringify(x),y=JSON.stringify(f),w=JSON.stringify(d),b=JSON.stringify(u),O=72;function M(A){const R={};return A&&String(A).split(`
`).forEach(L=>{const G=L.indexOf("=");if(G>0){const K=L.slice(0,G).trim(),tt=L.slice(G+1).trim();K&&(R[K]=tt)}}),R}const N=M(s==null?void 0:s.prTopicPromptsRaw),V=(a==null?void 0:a.prTopicList)||[],B={},z={};V.forEach(A=>{[A.topic,A.topicRow,A.oldTopic].filter(Boolean).map(L=>L.trim()).forEach(L=>{A.explanation&&!B[L]&&(B[L]=A.explanation),A.bu&&!z[L]&&(z[L]=A.bu)})});const $={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...B,...M(s==null?void 0:s.prTopicDescsRaw)},q={};return f.forEach(A=>{const R=z[A];if(R)q[A]=R;else{const L=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];q[A]=L.some(G=>A.toLowerCase().includes(G.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
    <!-- 필터 바 -->
    <div id="${c}-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="${c}-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="${c}-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"View":"보기"}</span>
        <div id="${c}-view-chips" style="display:flex;gap:4px"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${ee};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(s==null?void 0:s.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs #1 competitor":"() 는 1위 경쟁사 대비"}</span></span>
      </div>
      <div class="section-body" id="${c}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${l?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">${l?x.length?`${x[0]}–${x[x.length-1]} (${x.length}${o==="en"?" months":"개월"})`:"":x.length?`${x[0].toUpperCase()}–${x[x.length-1].toUpperCase()} (${x.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${c}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${k},W=${v},TP=${y},TY=${w},CN=${b};
    var CW=${O};
    var TOPIC_CAT=${JSON.stringify(q)};
    var TOPIC_PROMPT=${JSON.stringify(N).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify($).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(V).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Ne)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${ee}',COMP='${de}';
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
      var te=document.getElementById('${c}-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_${c}SetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('${c}-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_${c}CntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_${c}CntyTog('"+c+"')")}).join(' ');
      var ve=document.getElementById('${c}-view-chips');if(ve)ve.innerHTML=chip('${o==="en"?"By Country":"국가별 함께"}',fView==='together',"_${c}SetView('together')")+' '+chip('${o==="en"?"Total":"국가 Total"}',fView==='total',"_${c}SetView('total')");
    }
    // 특정 토픽+국가+브랜드의 특정 주 값
    function val(topic,cnty,brand,wk){
      var r=D.find(function(x){return x.topic===topic&&x.country===cnty&&x.brand===brand&&x.type===fType});
      return r&&r.scores[wk]!=null?r.scores[wk]:null;
    }
    function lastVal(topic,cnty,brand){for(var i=W.length-1;i>=0;i--){var v=val(topic,cnty,brand,W[i]);if(v!=null)return v}return null}
    function lastOf(arr){if(!arr)return null;for(var i=arr.length-1;i>=0;i--){if(arr[i]!=null)return arr[i]}return null}
    // 토픽의 1위 경쟁사 (LG 제외) — TTL 최신값 최고, TTL 없으면 국가 최신값 최댓값
    function topCompFor(topic){
      var brands={};
      D.forEach(function(x){if(x.topic===topic&&x.type===fType&&x.brand&&x.brand!=='LG')brands[x.brand]=1});
      var best=null,bestV=-1;
      Object.keys(brands).forEach(function(b){
        var v=lastVal(topic,'TTL',b);
        if(v==null){CN.forEach(function(c){var cv=lastVal(topic,c,b);if(cv!=null&&(v==null||cv>v))v=cv})}
        if(v!=null&&v>bestV){bestV=v;best=b}
      });
      return best;
    }
    // 특정 국가의 1위 경쟁사 (LG 제외) — 그 국가 최신값 최댓값
    function topCompForCnty(topic,cnty){
      var brands={};
      D.forEach(function(x){if(x.topic===topic&&x.type===fType&&x.country===cnty&&x.brand&&x.brand!=='LG')brands[x.brand]=1});
      var best=null,bestV=-1;
      Object.keys(brands).forEach(function(b){
        var v=lastVal(topic,cnty,b);
        if(v!=null&&v>bestV){bestV=v;best=b}
      });
      return best;
    }
    // 경쟁비(%) 색상 — lead≥100 / behind≥80 / critical<80
    function ratioColor(r){return r==null?'#CBD5E1':r>=100?'#15803D':r>=80?'#B45309':'#BE123C'}
    // ── 표1: TTL 전체 브랜드 표 + 1위 경쟁사 경쟁비 행 ──
    function buildT1(brands,chartData,comp,tblW){
      var h='<table style="border-collapse:collapse;table-layout:fixed;width:'+(240+tblW)+'px">';
      h+='<colgroup><col style="width:240px">';W.forEach(function(){h+='<col style="width:'+CW+'px">'});h+='</colgroup>';
      h+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:17px;color:#94A3B8;font-weight:600">Brand</th>';
      W.forEach(function(wk){h+='<th style="text-align:center;padding:5px 0;font-size:17px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
      h+='</tr>';
      brands.forEach(function(b,i){
        var c=bc(b,i);var isLG=b==='LG';
        h+='<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 8px;font-size:17px;font-weight:'+(isLG?700:500)+';color:'+c+';white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>';
        W.forEach(function(wk,wi){var v=chartData[b][wi];h+='<td style="text-align:center;padding:5px 0;font-size:17px;color:'+(v!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
        h+='</tr>';
      });
      var compName=comp||'${o==="en"?"N/A":"없음"}';
      h+='<tr style="background:#F8FAFC;border-top:2px solid #E8EDF2"><td style="padding:5px 8px;font-size:15px;font-weight:700;color:#BE123C;white-space:nowrap">${o==="en"?"#1 Competitor":"1위 경쟁사"} ('+compName+')</td>';
      W.forEach(function(wk,wi){
        var lgv=chartData.LG?chartData.LG[wi]:null;
        var cv=comp&&chartData[comp]?chartData[comp][wi]:null;
        var rn=(lgv!=null&&cv!=null&&cv>0)?Math.round(lgv/cv*100):null;
        h+='<td style="text-align:center;padding:5px 0;font-variant-numeric:tabular-nums">'+(cv!=null?'<div style="font-size:16px;font-weight:700;color:#475569">'+cv.toFixed(1)+'%</div>':'<div style="font-size:16px;color:#CBD5E1">—</div>')+(rn!=null?'<div style="font-size:12px;font-weight:600;color:'+ratioColor(rn)+'">('+rn+'%)</div>':'')+'</td>';
      });
      h+='</tr></table>';
      return h;
    }
    // ── 표2: 국가별 — 각 국가의 1위 경쟁사 대비 경쟁비 ──
    function buildT2(topic,ac,tblW){
      var rows='';
      ac.forEach(function(cn){
        var hasLG=D.some(function(r){return r.topic===topic&&r.country===cn&&r.brand==='LG'&&r.type===fType});
        if(!hasLG)return;
        var cnComp=topCompForCnty(topic,cn);
        var label=cf(cn)+(cnComp?' <span style="color:#94A3B8;font-weight:500">('+cnComp+')</span>':'');
        var cells=W.map(function(wk){
          var lgv=val(topic,cn,'LG',wk);
          var cv=cnComp?val(topic,cn,cnComp,wk):null;
          var rn=(lgv!=null&&cv!=null&&cv>0)?Math.round(lgv/cv*100):null;
          return'<td style="width:'+CW+'px;text-align:center;padding:5px 0;font-variant-numeric:tabular-nums">'+(lgv!=null?'<div style="font-size:16px;font-weight:600;color:#1A1A1A">'+lgv.toFixed(1)+'%</div>':'<div style="font-size:16px;color:#CBD5E1">—</div>')+(rn!=null?'<div style="font-size:12px;font-weight:600;color:'+ratioColor(rn)+'">('+rn+'%)</div>':'')+'</td>';
        }).join('');
        rows+='<tr style="border-top:1px solid #F1F5F9"><td style="padding:5px 8px;font-size:16px;font-weight:600;color:#64748B;white-space:nowrap">'+label+'</td>'+cells+'</tr>';
      });
      if(!rows)return'';
      var h='<table style="border-collapse:collapse;table-layout:fixed;width:'+(240+tblW)+'px">';
      h+='<colgroup><col style="width:240px">';W.forEach(function(){h+='<col style="width:'+CW+'px">'});h+='</colgroup>';
      h+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:15px;color:#94A3B8;font-weight:600">${o==="en"?"Country (vs #1)":"국가 (1위 경쟁사)"}</th>';
      W.forEach(function(wk){h+='<th style="text-align:center;padding:5px 0;font-size:15px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
      h+='</tr>'+rows+'</table>';
      return h;
    }
    // ── 상단 매트릭스: PR Topic List 시트 전용 ──
    // PR Topic List의 토픽만 행으로 사용. 기존 토픽(oldTopic)으로 Weekly PR 데이터 JOIN.
    function renderMatrix(){
      var el=document.getElementById('${c}-matrix');if(!el)return;
      if(!_prTopicList||!_prTopicList.length){el.innerHTML='<p style="text-align:center;color:#94A3B8;padding:20px">PR Topic List 시트를 동기화해주세요.</p>';return}
      var lastW=W[W.length-1];
      var ac=CN.filter(function(c){return fCnty[c]});
      var cols=['TTL'].concat(ac);
      var h='<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%">';
      h+='<thead><tr><th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;width:60px">BU</th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:120px">${o==="en"?"Topic":"토픽"} <span style="font-weight:400;color:#94A3B8">('+lastW+')</span></th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:140px">${o==="en"?"Description":"설명"}</th>';
      h+='<th style="padding:8px 10px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:80px">${o==="en"?"Competitor":"경쟁사"}</th>';
      cols.forEach(function(c){h+='<th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:56px">'+cf(c)+'</th>'});
      h+='</tr></thead><tbody>';
      var prevBU='';
      _prTopicList.forEach(function(row,idx){
        var bu=row.bu||'';
        var isNewBU=bu&&bu!==prevBU;
        var buCount=0;
        if(isNewBU){_prTopicList.forEach(function(r){if(r.bu===bu)buCount++})}
        var dataKey=(row.topicRow||'').trim();
        var comp=topCompFor(dataKey);
        h+='<tr style="border-bottom:1px solid #F1F5F9;'+(isNewBU&&idx>0?'border-top:2px solid #CBD5E1;':'')+'">';
        if(isNewBU){
          h+='<td rowspan="'+buCount+'" style="padding:6px 8px;font-size:15px;font-weight:700;color:#475569;vertical-align:middle;text-align:center;border-right:2px solid #E8EDF2;background:#F8FAFC;line-height:1.4;word-break:keep-all">'+bu+'</td>';
          prevBU=bu;
        }
        h+='<td style="padding:6px 10px;font-size:16px;font-weight:600;color:#1A1A1A">'+row.topic+'</td>';
        h+='<td style="padding:6px 10px;font-size:14px;color:#64748B;line-height:1.4">'+((row.explanation||''))+'</td>';
        h+='<td style="padding:6px 10px;font-size:15px;font-weight:600;color:#475569;white-space:nowrap;text-align:center">'+(comp||'—')+'</td>';
        cols.forEach(function(cnty){
          var lg=lastVal(dataKey,cnty,'LG');
          var ss=comp?lastVal(dataKey,cnty,comp):null;
          var s=tl(lg,ss);
          var ratio=(lg!=null&&ss!=null&&ss>0)?Math.round(lg/ss*100)+'%':'';
          h+='<td style="padding:4px 6px;text-align:center;background:'+s.bg+';color:'+s.color+';font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;border:1px solid '+s.border+'">'+(lg!=null?lg.toFixed(1)+'%':'—')+(ratio?'<div style="font-size:13px;font-weight:400;color:#64748B">('+ratio+')</div>':'')+'</td>';
        });
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
      var el=document.getElementById('${c}-sections');if(!el)return;
      var N=W.length;var tblW=CW*N;var html='';
      // PR Topic List의 Topic-row(topicRow)로 데이터 매칭, 대시보드 토픽명으로 표시
      var sectionTopics=[];
      if(_prTopicList&&_prTopicList.length){
        _prTopicList.forEach(function(t){if(t.topicRow&&t.topicRow.trim())sectionTopics.push({key:t.topicRow.trim(),name:t.topic||t.topicRow.trim()})});
      }
      if(!sectionTopics.length)TP.forEach(function(t){sectionTopics.push({key:t,name:t})});
      var bottomGroups='';  // fView==='total' 일 때 표2(국가별)를 하단에 모음
      var ac=CN.filter(function(c){return fCnty[c]});
      sectionTopics.forEach(function(st0){
        var topic=st0.key;var topicName=st0.name;
        var ttl=D.filter(function(r){return r.topic===topic&&r.country==='TTL'&&r.type===fType});
        if(!ttl.length)return;
        var brandMap={};
        ttl.forEach(function(r){if(!brandMap[r.brand])brandMap[r.brand]={}; W.forEach(function(wk){if(r.scores[wk]!=null){brandMap[r.brand][wk]=r.scores[wk]}})});
        var brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
        var chartData={};
        brands.forEach(function(b){chartData[b]=W.map(function(wk){return brandMap[b][wk]!=null?brandMap[b][wk]:null})});
        var lgLast=chartData.LG?chartData.LG[N-1]:null;
        var comp=topCompFor(topic);
        var ssLast=comp&&chartData[comp]?lastOf(chartData[comp]):null;
        var st=tl(lgLast,ssLast);
        var legend=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:10px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+'"></i><span style="font-size:15px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'}).join('');
        var t1=buildT1(brands,chartData,comp,tblW);
        var t2=buildT2(topic,ac,tblW);

        html+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:20px;overflow:hidden">';
        // 헤더
        html+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        html+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        html+='<span style="font-size:21px;font-weight:700;color:#1A1A1A">'+topicName+'</span>';
        var tpPrompt=TOPIC_PROMPT[topic]||'';
        if(tpPrompt)html+='<span style="font-size:18px;color:#64748B;font-weight:500;font-style:italic;max-width:700px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"'+tpPrompt+'"</span>';
        if(st.label!=='—')html+='<span style="font-size:17px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lgLast!=null)html+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">LG '+lgLast.toFixed(1)+'%</span>';
        if(ssLast!=null&&comp)html+='<span style="font-size:17px;color:#94A3B8">vs '+comp+' '+ssLast.toFixed(1)+'%</span>';
        html+='<span style="margin-left:auto">'+legend+'</span></div>';
        // 차트 + 표1 (TTL 전체)
        html+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:240px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(chartData,tblW,160)+'</div></div>';
        html+='<div style="font-size:14px;font-weight:700;color:#64748B;margin:4px 0 2px">${o==="en"?"Overall (TTL)":"전체 (TTL)"}</div>';
        html+=t1;
        // 표2 (국가별) — 국가별 함께 보기일 때만 토픽 안에 표시
        if(fView==='together'&&t2){
          html+='<div style="font-size:14px;font-weight:700;color:#64748B;margin:24px 0 2px">${o==="en"?"By Country (vs #1 ratio)":"국가별 (1위 경쟁사 경쟁비)"}</div>';
          html+=t2;
        }
        html+='</div></div>';
        // 국가 Total 보기일 때 — 표2를 하단에 모음
        if(fView==='total'&&t2){
          bottomGroups+='<div style="margin-bottom:16px"><div style="font-size:17px;font-weight:700;color:#1A1A1A;margin-bottom:6px"><span style="display:inline-block;width:4px;height:16px;border-radius:4px;background:'+RED+';vertical-align:-2px;margin-right:6px"></span>'+topicName+'</div><div style="overflow-x:auto">'+t2+'</div></div>';
        }
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${o==="en"?"No data":"데이터 없음"}</div>';
      if(fView==='total'&&bottomGroups){
        html+='<div style="border-top:3px solid #E8EDF2;margin-top:8px;padding-top:18px"><div style="font-size:19px;font-weight:700;color:#1A1A1A;margin-bottom:14px">${o==="en"?"By Country — #1 Competitor Ratio (gathered)":"국가별 — 1위 경쟁사 경쟁비 (모아보기)"}</div>'+bottomGroups+'</div>';
      }
      el.innerHTML=html;
    }
    function renderAll(){renderFilters();renderMatrix();renderSections()}
    window._${c}SetType=function(t){fType=t;renderAll()};
    window._${c}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${c}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    window._${c}SetView=function(v){fView=v;renderAll()};
    renderAll();
  })();
  <\/script>`}function Do(t,e,o,s,a,r){const l=(t||[]).filter(v=>!0);if(!l.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const c=e&&e.length?e.slice(-12):[],x=[...new Set(l.map(v=>v.stakeholder))].filter(Boolean).map(v=>({stakeholder:v,topics:[...new Set(l.filter(y=>y.stakeholder===v).map(y=>y.topic))].filter(Boolean)})),f=72,d=JSON.stringify(l).replace(/</g,"\\u003c"),p=JSON.stringify(c),u=JSON.stringify(x),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${c.length?`${c[0].toUpperCase()}–${c[c.length-1].toUpperCase()} (${c.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${ee};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${d},W=${p},GROUPS=${u};
    var CW=${f},RED='${ee}';
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
  <\/script>`}function qr(t,e,o,s,a,r,l,c,h,x,f,d,p,u){var wt,ct,ft;p!=null&&p.llmModel&&p.llmModel!=="Total"&&(o=Wo(o,p.llmModel),l=Vo(l,p.llmModel),e=Ko(e,p.monthlyVis,p.llmModel),p.monthlyVis&&(p={...p,monthlyVis:Bn(p.monthlyVis,p.llmModel)})),o=(o||[]).map(D=>({...D,weekly:(D.weekly||[]).map(ot=>ot??0),monthly:(D.monthly||[]).map(ot=>ot??0)})),x&&typeof x=="object"&&Object.values(x).forEach(D=>{!D||typeof D!="object"||Object.values(D).forEach(ot=>{!ot||typeof ot!="object"||Object.keys(ot).forEach(Z=>{const _=ot[Z];Array.isArray(_)&&(ot[Z]=_.map(dt=>dt??0))})})});const k={aircare:"Xiaomi"};o=o.map(D=>{const ot=k[(D.id||"").toLowerCase()];if(!ot||!D.allScores)return D;const Z=Object.entries(D.allScores).find(([At])=>At.toLowerCase()===ot.toLowerCase()&&At.toLowerCase()!=="lg");if(!Z)return D;const _=Z[1];if(!(_>0))return D;const dt=Math.round(D.score/_*100);return{...D,compName:Z[0],vsComp:_,compRatio:dt,status:dt>=100?"lead":dt>=80?"behind":"critical"}});const v=(p==null?void 0:p.visibilityOnly)||!1,y=(p==null?void 0:p.includeReadability)===!0,w=(u==null?void 0:u.unlaunchedMap)||{},O=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,M=Oe[r]||Oe.ko;let N;if(h&&h.length)N=h.map(D=>String(D).toUpperCase().startsWith("W")?D.toUpperCase():D);else{const D=x?Math.max(...Object.values(x).flatMap(Z=>Object.values(Z).flatMap(_=>Object.values(_).map(dt=>(dt==null?void 0:dt.length)||0))),0):0,ot=t.weekStart||Math.max(1,D-11);N=Array.from({length:Math.max(12,D)},(Z,_)=>`W${ot+_}`)}const V=new Set;x&&Object.values(x).forEach(D=>Object.keys(D).forEach(ot=>{ot!=="Total"&&V.add(ot)})),l&&l.forEach(D=>{D.country&&D.country!=="TTL"&&V.add(D.country)});const B=[...V].sort(),z=r==="en"?"All":"전체",W=["MS","HS","ES"],$=o.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${D.bu}" value="${D.id}" checked onchange="onFilterChange()"><span>${D.kr}</span></label>`).join(""),q=W.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${D}" checked onchange="onBuChange('${D}')"><span>${D}</span></label>`).join(""),A=B.map(D=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${D}" checked onchange="onFilterChange()"><span>${Qe(D)}</span></label>`).join(""),R=Object.entries(Ze).map(([D,ot])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${D}" checked onchange="onRegionChange('${D}')"><span>${ot.labelEn}</span></label>`).join(""),L=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,G=p!=null&&p.weeklyLabelsFull&&p.weeklyLabelsFull.length===N.length?p.weeklyLabelsFull:N,K=N.map((D,ot)=>`<option value="${ot}"${ot===N.length-1?" selected":""}>${G[ot]||D}</option>`).join(""),tt=(((wt=o[0])==null?void 0:wt.monthlyScores)||[]).map(D=>{const ot=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=String(D.date).match(/(\d{1,2})월/),_=String(D.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Z?ot[parseInt(Z[1])-1]:_?_[1].charAt(0).toUpperCase()+_[1].slice(1).toLowerCase():D.date}),et=tt.map((D,ot)=>`<option value="${ot}"${ot===tt.length-1?" selected":""}>${D}</option>`).join(""),g=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${qt}`,J=new Set(["Total"]);(o||[]).forEach(D=>(D.monthlyScores||[]).forEach(ot=>Object.keys(ot.byLlm||{}).forEach(Z=>J.add(Z)))),(l||[]).forEach(D=>(D.monthlyScores||[]).forEach(ot=>Object.keys(ot.byLlm||{}).forEach(Z=>J.add(Z)))),((p==null?void 0:p.monthlyVis)||[]).forEach(D=>{D.llmModel&&J.add(D.llmModel)});const U=["Total",...Array.from(J).filter(D=>D!=="Total").sort((D,ot)=>D.localeCompare(ot))],yt=(p==null?void 0:p.llmModel)||"Total",S=U.map(D=>`<option value="${D}"${D===yt?" selected":""}>${D}</option>`).join(""),C=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${L}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${N[N.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${N.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${g}">${K}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${g}"${tt.length>0?"":" disabled"}>${et||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${g};opacity:0.55;cursor:not-allowed" disabled>${S}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${z}</span></label>
        ${q}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${z}</span></label>
        ${$}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${z}</span></label>
        ${R}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${z}</span></label>
        ${A}
      </div>
    </div>
  </div>`,F=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Mr(t.noticeText)}</div></div>`:"",P=[F,t.showTotal!==!1?$o(e,t,M,r,"weekly"):""].join(""),E=[F,t.showTotal!==!1?$o(e,t,M,r,"monthly"):""].join(""),H=[];if(x&&Object.keys(x).length){const D=Pe;Object.entries(x).forEach(([ot,Z])=>{const _=o.find(At=>At.id===ot),dt=(_==null?void 0:_.kr)||D[ot]||ot;Object.entries(Z).forEach(([At,$t])=>{if(At==="Total"||At==="TTL"||At==="TOTAL")return;const Rt=$t.LG||$t.lg||[],Ht=Rt.length>0?Rt[Rt.length-1]:0;if(Ht<=0)return;let Jt="",It=0;Object.entries($t).forEach(([oe,Ot])=>{if(oe==="LG"||oe==="lg")return;const Wt=Array.isArray(Ot)&&Ot.length?Ot[Ot.length-1]:0;Wt>It&&(It=Wt,Jt=oe)});const Zt=+(Ht-It).toFixed(1),pe={};Object.entries($t).forEach(([oe,Ot])=>{if(Array.isArray(Ot)&&Ot.length){const Wt=Ot[Ot.length-1];Wt!=null&&(pe[oe]=Wt)}}),H.push({product:dt,country:At,score:Ht,compName:Jt,compScore:It,gap:Zt,allScores:pe})})})}const xt=((ct=p==null?void 0:p.weeklyLabelsFull)==null?void 0:ct[p.weeklyLabelsFull.length-1])||N[N.length-1]||"",Ct=xt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${xt} ${r==="en"?"data":"기준"}</span>`:"",bt=[P,t.showProducts!==!1?Ro(o,t,M,r,N,w,(p==null?void 0:p.monthlyVis)||[],x,Ct):"",`<div id="trend-container">${Wr(o,x,N,M,r,w,Ct)}</div>`,t.showCnty!==!1?jo(H,t,M,r,w,Ct):""].join(""),vt=o.map(D=>{const ot=D.monthlyScore||D.score,Z=D.monthlyPrev||D.prev,_=D.vsComp||0,dt=_>0?ot/_*100:100;return{...D,score:ot,prev:Z,weeklyScore:ot,weeklyPrev:Z,monthlyScore:ot,monthlyPrev:Z,weekly:(D.monthlyScores||[]).map(At=>At.score),status:dt>=100?"lead":dt>=80?"behind":"critical"}}),kt=(((ft=o[0])==null?void 0:ft.monthlyScores)||[]).map(D=>{const ot=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=String(D.date).match(/(\d{1,2})월/),_=String(D.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Z?ot[parseInt(Z[1])-1]:_?_[1].charAt(0).toUpperCase()+_[1].slice(1).toLowerCase():D.date}),Ft=(p==null?void 0:p.monthlyVis)||[],j=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Y=[E,t.showProducts!==!1?Ro(vt,t,M,r,kt.length?kt:["Feb","Mar"],w,Ft,{},j):"",`<div id="monthly-trend-container">${Vr(vt,Ft,M,r,w,j)}</div>`,t.showCnty!==!1?jo(l,t,M,r,w,j):""].join(""),it=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${qt}`,lt=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${it};background:#fff;color:#0F172A">${r==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${it};background:transparent;color:#94A3B8">${r==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Mo(u==null?void 0:u.weeklyPR,u==null?void 0:u.weeklyPRLabels,r,t,u)}</div>
    <div id="pr-period-monthly" style="display:none">${Mo(u==null?void 0:u.monthlyPR,u==null?void 0:u.monthlyPRLabels,r,t,u,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Rr({FONT:qt,RED:ee,COMP:de})}</style>
</head>
<body>
${v?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${C.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${bt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Y}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${lt}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Do(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${y?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
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
  <button class="gnb-sub-btn" onclick="switchCitSub('llm-compare')">${r==="en"?"LLM Compare":"LLM 모델별 비교"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${C}
    <div id="bu-weekly-content" class="dash-container">${bt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Y}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${lt}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Do(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${r==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${r==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
  <div id="cit-sub-llm-compare" style="display:none">
    <iframe id="cit-iframe-llm" data-src="/p/${r==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=llm-compare" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - LLM Compare"></iframe>
  </div>
</div>
${y?`<div id="tab-readability" class="tab-panel">
  <!--READABILITY_EMBED-->
  <iframe id="readability-iframe" data-src="/p/GEO-KPI-Dashboard-${r==="en"?"EN":"KO"}-readability" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Readability"></iframe>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${O}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Kr(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${M.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${_r({lang:r,weeklyAll:x,products:o,productsCnty:l,ulMap:w,monthlyVis:p==null?void 0:p.monthlyVis,total:e,meta:t,wLabels:N})}
<\/script>
</body>
</html>`}function Jr(t){const e=t.filter(h=>h.status==="lead"),o=t.filter(h=>h.status==="behind"),s=t.filter(h=>h.status==="critical"),a=[...t].sort((h,x)=>x.score-h.score)[0],r=[...t].sort((h,x)=>h.score-x.score)[0],l=(t.reduce((h,x)=>h+x.score,0)/t.length).toFixed(1),c=[];return c.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${l}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${s.length}개로 분류됩니다.`),a&&c.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(a.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),s.length?c.push(`취약 카테고리(${s.map(h=>h.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&c.push(`추격 카테고리(${o.map(h=>h.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),c.join(" ")}function Yr(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Xr(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const gt=jt,Zr={citation:[gt.meta,gt.citTouchPoints,gt.citDomain,gt.citPageType],"weekly-report":[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES],"monthly-report":[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES],dashboard:[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citDomain,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES,gt.monthlyPR,gt.weeklyPR,gt.weeklyBrandPrompt,gt.unlaunched,gt.prTopicList],newsletter:[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citDomain,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES,gt.unlaunched]};function Qr(t){return Zr[t]||[]}const Oo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function ti(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ei({url:t,downloadName:e="sheet",mode:o}){const[s,a]=at.useState(!1),[r,l]=at.useState(""),c=o?Qr(o):[],h=c.length?"zip":"xlsx",x=c.length?`📥 시트 CSV ZIP 다운로드 (탭 ${c.length}개)`:"📥 시트 xlsx 다운로드";async function f(){const d=ti(t);if(!d){l("ERROR: 동기화 URL 비어있거나 잘못됨");return}a(!0),l("");try{const p=new URLSearchParams({id:d,name:e});c.length&&p.set("tabs",c.join(","));const u=await fetch(`/api/sheet-download?${p.toString()}`,{credentials:"include"});if(!u.ok){const y=await u.text().catch(()=>"");let w=y;try{const b=JSON.parse(y);w=b.error||b.detail||y}catch{}throw new Error(`(${u.status}) ${w}`)}const k=await u.blob(),v=document.createElement("a");v.href=URL.createObjectURL(k),v.download=`${e}.${h}`,document.body.appendChild(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(v.href),1e3),l("다운로드 완료")}catch(p){l("ERROR: "+(p.message||String(p)))}finally{a(!1)}}return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("button",{onClick:f,disabled:s||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:s||!t?"#1E293B":"#1D4ED8",color:s||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Oo,cursor:s||!t?"not-allowed":"pointer"},children:s?"다운로드 중…":x}),r&&n.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Oo,background:r.startsWith("ERROR")?"#450A0A":"#14532D",color:r.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:r})]})}const oi=["title","dateLine","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","period","team","reportNo","monthlyReportBody","modelDeltaInsight","compRatioDeltaNote","highlightInsight"];function ni(t,e){const o=/<body[^>]*>([\s\S]*)<\/body>/i,s=(e.match(o)||[])[1];if(!s)return console.warn("[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송"),t;const a=`
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`;return/<\/body>/i.test(t)?t.replace(/<\/body>/i,`${a}${s}</body>`):(console.warn("[mergeBilingualEmail] KO </body> 미발견 — 단순 연결"),t+a+s)}function ri({mode:t,meta:e,setMeta:o,metaKo:s,setMetaKo:a,metaEn:r,setMetaEn:l,total:c,setTotal:h,products:x,setProducts:f,citations:d,setCitations:p,dotcom:u,setDotcom:k,productsCnty:v,setProductsCnty:y,citationsCnty:w,setCitationsCnty:b,resolved:O,previewLang:M,setPreviewLang:N,snapshots:V,setSnapshots:B,setWeeklyLabels:z,setWeeklyAll:W,weeklyLabels:$,weeklyAll:q,citationsByCnty:A,dotcomByCnty:R,generateHTML:L,publishEndpoint:G,setMonthlyVis:K,onSyncExtra:tt,categoryStats:et,extra:g,monthlyVis:J,progressMonth:U,setProgressMonth:yt,progressDataMonth:S,editMode:C=!1,setEditMode:F}){const P=at.useRef({products:x,productsCnty:v,citations:d,citationsCnty:w,total:c,dotcom:u,extra:g});P.current={products:x,productsCnty:v,citations:d,citationsCnty:w,total:c,dotcom:u,extra:g};function E(){return P.current}const[H,xt]=at.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Ct,bt]=at.useState(!1),[vt,kt]=at.useState(null),[Ft,j]=at.useState(""),[Y,it]=at.useState(""),[lt,wt]=at.useState(!1),[ct,ft]=at.useState(""),[D,ot]=at.useState(!1),[Z,_]=at.useState(!1),[dt,At]=at.useState(!1),[$t,Rt]=at.useState(!1),[Ht,Jt]=at.useState(""),[It,Zt]=at.useState(!1),[pe,oe]=at.useState(!0),[Ot,Wt]=at.useState(""),[re,we]=at.useState(null),[ue,fe]=at.useState([]),Pt=t==="newsletter",[me,rn]=at.useState(()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`});function Ue(){Pt&&fetch("/api/publish").then(i=>i.ok?i.json():null).then(i=>{i&&Array.isArray(i.months)&&fe(i.months)}).catch(()=>{})}at.useEffect(()=>{if(Pt){Ue();return}fetch(G||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(m=>m.ok?m.json():null).then(we).catch(()=>{})},[t,G,Pt]);const an=(()=>{const i=new Set,m=new Date;for(let X=0;X<24;X++){const Lt=new Date(m.getFullYear(),m.getMonth()-X,1);i.add(`${Lt.getFullYear()}-${String(Lt.getMonth()+1).padStart(2,"0")}`)}for(const X of ue)i.add(X.month);return me&&i.add(me),[...i].sort((X,Lt)=>Lt.localeCompare(X))})();function Be(i){const[m,X]=i.split("-");return`${m}년 ${parseInt(X,10)}월`}const[sn,ao]=at.useState(null);at.useEffect(()=>{let i=!0;const m=()=>xo(t).then(Lt=>{i&&ao(Lt)});m();const X=setInterval(m,6e4);return()=>{i=!1,clearInterval(X)}},[t]);function ln(){xo(t).then(ao)}async function cn(){if(!$t){Rt(!0),Jt("");try{const i=E(),m=be(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),X=be(i.products,i.productsCnty,i.citations,i.citationsCnty,"en");let Lt,Ut,rt;if(t==="dashboard"){const nt=J||[],mt=i.extra||g||{};Lt=L(s,i.total,m.products,m.citations,i.dotcom,"ko",m.productsCnty,m.citationsCnty,$,q,A,R,nt,mt),Ut=L(r,i.total,X.products,X.citations,i.dotcom,"en",X.productsCnty,X.citationsCnty,$,q,A,R,nt,mt),rt=`${s.period||""} ${s.title||"KPI Dashboard"}`.trim()}else Lt=L(s,i.total,m.products,m.citations,u,"ko",m.productsCnty,m.citationsCnty,{weeklyLabels:$,weeklyAll:q,categoryStats:et,unlaunchedMap:(g==null?void 0:g.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(g==null?void 0:g.citTouchPointsTrend)||null,citTrendMonths:(g==null?void 0:g.citTrendMonths)||[],citDomainTrend:(g==null?void 0:g.citDomainTrend)||null,citDomainMonths:(g==null?void 0:g.citDomainMonths)||[],citTouchPointsByLlm:(g==null?void 0:g.citTouchPointsByLlm)||null,citDomainByLlm:(g==null?void 0:g.citDomainByLlm)||null,citDomainByLlmTrend:(g==null?void 0:g.citDomainByLlmTrend)||null,dotcomByLlm:(g==null?void 0:g.dotcomByLlm)||null}),Ut=L(r,i.total,X.products,X.citations,u,"en",X.productsCnty,X.citationsCnty,{weeklyLabels:$,weeklyAll:q,categoryStats:et,unlaunchedMap:(g==null?void 0:g.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(g==null?void 0:g.citTouchPointsTrend)||null,citTrendMonths:(g==null?void 0:g.citTrendMonths)||[],citDomainTrend:(g==null?void 0:g.citDomainTrend)||null,citDomainMonths:(g==null?void 0:g.citDomainMonths)||[],citTouchPointsByLlm:(g==null?void 0:g.citTouchPointsByLlm)||null,citDomainByLlm:(g==null?void 0:g.citDomainByLlm)||null,citDomainByLlmTrend:(g==null?void 0:g.citDomainByLlmTrend)||null,dotcomByLlm:(g==null?void 0:g.dotcomByLlm)||null}),rt=`${s.period||""} ${s.title||"Newsletter"}`.trim();const Qt=G||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),I={title:rt,htmlKo:Lt,htmlEn:Ut};Pt&&(I.month=me);const _t=await(await fetch(Qt,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(I)})).json();if(!_t.ok)throw new Error(_t.error||"게시 실패");if(we({..._t,published:!0}),Pt&&Ue(),t==="dashboard")try{const nt=await Me(t)||{},mt=i.extra||g||{};vo(t,{...nt,meta:s,total:i.total,weeklyPR:mt.weeklyPR||nt.weeklyPR,weeklyPRLabels:mt.weeklyPRLabels||nt.weeklyPRLabels,monthlyPR:mt.monthlyPR||nt.monthlyPR,monthlyPRLabels:mt.monthlyPRLabels||nt.monthlyPRLabels,weeklyBrandPrompt:mt.weeklyBrandPrompt||nt.weeklyBrandPrompt,weeklyBrandPromptLabels:mt.weeklyBrandPromptLabels||nt.weeklyBrandPromptLabels})}catch{}const zt=`${window.location.origin}${_t.urls.ko}`,Q=`${window.location.origin}${_t.urls.en}`;try{await navigator.clipboard.writeText(zt+`
`+Q)}catch{}Jt(`KO: ${zt}
EN: ${Q}`)}catch(i){Jt("ERROR:"+i.message)}finally{Rt(!1),setTimeout(()=>Jt(""),2e4)}}}async function dn(){if(!It){Zt(!0),Wt("");try{const i=await er(qr,be,{includeProgressTracker:pe});Wt(`통합 게시 완료!
KO: ${window.location.origin}${i.urls.ko}
EN: ${window.location.origin}${i.urls.en}`)}catch(i){Wt("ERROR: "+i.message)}finally{Zt(!1),setTimeout(()=>Wt(""),15e3)}}}async function so(i){try{const m=G||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),X=Pt?`${m}?month=${encodeURIComponent(i||me)}`:m;(await(await fetch(X,{method:"DELETE"})).json()).ok&&(Pt?Ue():we(null))}catch{}}async function pn(){if(M!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}_(!0)}async function lo(i){_(!1),At(!0);const m=(i==null?void 0:i.products)??x,X=(i==null?void 0:i.productsCnty)??v,Lt=(i==null?void 0:i.citations)??d,Ut=(i==null?void 0:i.citationsCnty)??w;try{const rt=s,Qt=[rt.title||"",rt.dateLine||"",rt.noticeText||"",rt.totalInsight||"",rt.reportType||"",rt.productInsight||"",rt.productHowToRead||"",rt.citationInsight||"",rt.citationHowToRead||"",rt.dotcomInsight||"",rt.dotcomHowToRead||"",rt.todoText||"",rt.todoNotice||"",rt.kpiLogicText||"",rt.cntyInsight||"",rt.cntyHowToRead||"",rt.citDomainInsight||"",rt.citDomainHowToRead||"",rt.citCntyInsight||"",rt.citCntyHowToRead||"",rt.citPrdInsight||"",rt.citPrdHowToRead||"",rt.period||"",rt.team||"",rt.reportNo||"",rt.monthlyReportBody||""],I=m.map(ht=>ht.kr||""),Yt=m.map(ht=>ht.compName||""),_t=Lt.map(ht=>ht.category||""),zt=[...new Set(X.map(ht=>ht.country||""))],Q=[...new Set(X.map(ht=>ht.product||""))],nt=[...new Set(X.map(ht=>ht.compName||""))],mt=[...new Set(Ut.map(ht=>ht.cnty||"").filter(ht=>ht&&ht!=="TTL"))],Et=[...Qt,...I,...Yt,..._t,...zt,...Q,...nt,...mt].map(ht=>ht||" "),ut=await nr(Et,{from:"ko",to:"en"});let st=0;const ie={...s,title:ut[st++]||rt.title,dateLine:ut[st++]||rt.dateLine,noticeText:ut[st++]||rt.noticeText,totalInsight:ut[st++]||rt.totalInsight,reportType:ut[st++]||rt.reportType,productInsight:ut[st++]||rt.productInsight,productHowToRead:ut[st++]||rt.productHowToRead,citationInsight:ut[st++]||rt.citationInsight,citationHowToRead:ut[st++]||rt.citationHowToRead,dotcomInsight:ut[st++]||rt.dotcomInsight,dotcomHowToRead:ut[st++]||rt.dotcomHowToRead,todoText:ut[st++]||rt.todoText,todoNotice:ut[st++]||rt.todoNotice,kpiLogicText:ut[st++]||rt.kpiLogicText,cntyInsight:ut[st++]||rt.cntyInsight,cntyHowToRead:ut[st++]||rt.cntyHowToRead,citDomainInsight:ut[st++]||rt.citDomainInsight,citDomainHowToRead:ut[st++]||rt.citDomainHowToRead,citCntyInsight:ut[st++]||rt.citCntyInsight,citCntyHowToRead:ut[st++]||rt.citCntyHowToRead,citPrdInsight:ut[st++]||rt.citPrdInsight,citPrdHowToRead:ut[st++]||rt.citPrdHowToRead,period:(st++,rt.period),team:ut[st++]||rt.team,reportNo:(st++,rt.reportNo),monthlyReportBody:ut[st++]||rt.monthlyReportBody},Vt=ht=>ht&&ht.replace(/\b\w/g,St=>St.toUpperCase()),ne=ht=>(ht||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),le={};m.forEach((ht,St)=>{le[ht.id]={en:Vt(ut[st+St]||ht.kr),compNameEn:ne(ut[st+I.length+St]||ht.compName)}}),st+=I.length+Yt.length;const Xt={};Lt.forEach((ht,St)=>{Xt[`${ht.rank}_${ht.source}`]=Vt(ut[st+St]||ht.category)}),st+=_t.length;const ge={};zt.forEach((ht,St)=>{ge[ht]=/^[A-Z]{2,3}$/.test(ht)?ht:ut[st+St]||ht}),st+=zt.length;const $e={};Q.forEach((ht,St)=>{$e[ht]=ut[st+St]||ht}),st+=Q.length;const Ce={};nt.forEach((ht,St)=>{Ce[ht]=ut[st+St]||ht}),st+=nt.length;const ke={};mt.forEach((ht,St)=>{ke[ht]=/^[A-Z]{2,3}$/.test(ht)?ht:ut[st+St]||ht}),l(ie),f(ht=>ht.map(St=>{var co,po;return{...St,en:((co=le[St.id])==null?void 0:co.en)||St.en||St.kr,compNameEn:((po=le[St.id])==null?void 0:po.compNameEn)||St.compNameEn||St.compName}})),p(ht=>ht.map(St=>({...St,categoryEn:Xt[`${St.rank}_${St.source}`]||St.categoryEn||St.category}))),y(ht=>ht.map(St=>({...St,countryEn:Vt(ge[St.country]||St.country),productEn:Vt($e[St.product]||St.product),compNameEn:ne(Ce[St.compName]||St.compName)}))),b(ht=>ht.map(St=>({...St,cntyEn:St.cnty==="TTL"?"TTL":Vt(ke[St.cnty]||St.cnty)}))),At(!1)}catch(rt){alert("번역 오류: "+rt.message),At(!1)}}async function un(){const i=L(e,c,O.products,O.citations,u,M,O.productsCnty,O.citationsCnty);try{await navigator.clipboard.writeText(i)}catch{const m=document.createElement("textarea");m.value=i,document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}wt(!0),setTimeout(()=>wt(!1),2500)}async function hn(){await pr(e,c,x,d,u)}async function fn(){if(D!=="sending"){ot("sending");try{const i=E(),m=be(i.products,i.productsCnty,i.citations,i.citationsCnty,"ko"),X=be(i.products,i.productsCnty,i.citations,i.citationsCnty,"en"),Lt={weeklyLabels:$,weeklyAll:q,categoryStats:et,unlaunchedMap:(g==null?void 0:g.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(g==null?void 0:g.citTouchPointsTrend)||null,citTrendMonths:(g==null?void 0:g.citTrendMonths)||[],citDomainTrend:(g==null?void 0:g.citDomainTrend)||null,citDomainMonths:(g==null?void 0:g.citDomainMonths)||[],citTouchPointsByLlm:(g==null?void 0:g.citTouchPointsByLlm)||null,citDomainByLlm:(g==null?void 0:g.citDomainByLlm)||null,citDomainByLlmTrend:(g==null?void 0:g.citDomainByLlmTrend)||null,dotcomByLlm:(g==null?void 0:g.dotcomByLlm)||null},Ut={...s};oi.forEach(Q=>{Ut[Q]=r[Q]});const rt=L(s,i.total,m.products,m.citations,i.dotcom,"ko",m.productsCnty,m.citationsCnty,Lt),Qt=L(Ut,i.total,X.products,X.citations,i.dotcom,"en",X.productsCnty,X.citationsCnty,Lt),I=ni(rt,Qt),Yt=`[LG GEO] ${s.title} · ${s.period} (KO/EN)`,zt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:ct.trim(),subject:Yt,html:I})})).json();if(!zt.ok)throw new Error(zt.error||"발송 실패");ot("ok"),setTimeout(()=>ot(!1),4e3)}catch(i){ot("error"),j(i.message),setTimeout(()=>{ot(!1),j("")},5e3)}}}async function mn(){var X,Lt,Ut,rt,Qt;if(Ct)return;const i=Er(H.trim());if(!i){kt("error"),j("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>kt(null),3e3);return}bt(!0),kt(null),j(""),it("");const m=[];try{const I=await Lr(i,Q=>j(Q));if(m.push(`[Sync] parsed keys: ${Object.keys(I).join(", ")||"(없음)"}`),I.meta&&m.push(`[Sync] meta keys: ${Object.keys(I.meta).join(", ")}`),I.productsPartial&&m.push(`[Sync] products: ${I.productsPartial.length}건`),m.push(`[Sync] citations: ${((X=I.citations)==null?void 0:X.length)??0}건`),m.push(`[Sync] citationsCnty: ${((Lt=I.citationsCnty)==null?void 0:Lt.length)??0}건`),m.push(`[Sync] dotcom: ${I.dotcom?"OK":"(없음)"}`),m.push(`[Sync] productsCnty: ${((Ut=I.productsCnty)==null?void 0:Ut.length)??0}건`),I.meta){const Q=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(nt=>{const mt={...nt};for(const[Et,ut]of Object.entries(I.meta))Q.includes(Et)&&nt[Et]||(mt[Et]=ut);return mt}),l(nt=>({...nt,period:I.meta.period,dateLine:I.meta.dateLine,reportNo:I.meta.reportNo}))}if(I.citations&&(p(I.citations),P.current={...P.current,citations:I.citations}),I.dotcom&&(k(Q=>({...Q,...I.dotcom})),P.current={...P.current,dotcom:{...P.current.dotcom,...I.dotcom}}),I.productsCnty&&(y(I.productsCnty),P.current={...P.current,productsCnty:I.productsCnty}),I.citationsCnty&&(b(I.citationsCnty),P.current={...P.current,citationsCnty:I.citationsCnty}),I.monthlyVis&&K&&K(I.monthlyVis),tt){const Q={weeklyPR:I.weeklyPR||null,weeklyPRLabels:I.weeklyPRLabels||null,monthlyPR:I.monthlyPR||null,monthlyPRLabels:I.monthlyPRLabels||null,weeklyBrandPrompt:I.weeklyBrandPrompt||null,weeklyBrandPromptLabels:I.weeklyBrandPromptLabels||null,unlaunchedMap:I.unlaunchedMap||null,weeklyLabelsFull:I.weeklyLabelsFull||null,prTopicList:I.prTopicList||null,citTouchPointsTrend:I.citTouchPointsTrend||null,citTrendMonths:I.citTrendMonths||null,citDomainTrend:I.citDomainTrend||null,citDomainMonths:I.citDomainMonths||null,citTouchPointsByLlm:I.citTouchPointsByLlm||null,citDomainByLlm:I.citDomainByLlm||null,citDomainByLlmTrend:I.citDomainByLlmTrend||null,dotcomByLlm:I.dotcomByLlm||null};tt(Q),P.current={...P.current,extra:{...P.current.extra,...Q}}}const Yt=I.weeklyLabels||((rt=I.meta)==null?void 0:rt.weeklyLabels);console.log("[SYNC] weeklyLabels:",Yt,"weeklyLabelsFull:",I.weeklyLabelsFull),Yt&&Yt.length&&z(Yt),I.weeklyAll&&W(Q=>({...Q,...I.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(I));const _t=I.weeklyMap?Object.keys(I.weeklyMap):[],zt=((Qt=I.productsPartial)==null?void 0:Qt.map(Q=>Q.id))||[];if(console.log("[SYNC] weeklyMap keys:",_t.length?_t:"NONE"),console.log("[SYNC] productsPartial IDs:",zt.length?zt:"NONE"),_t.length&&zt.length){const Q=zt.filter(mt=>!_t.includes(mt)),nt=_t.filter(mt=>!zt.includes(mt));Q.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",Q),nt.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",nt),!Q.length&&!nt.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(I.productsPartial){const Q=I.productsPartial.map(nt=>{var Ce;const mt=((Ce=I.weeklyMap)==null?void 0:Ce[nt.id])||[],Et=mt.filter(ke=>ke!=null&&ke>0),ut=nt.score,st=nt.prev||0,ie=nt.vsComp>0?Math.round(ut/nt.vsComp*100):100,Vt=Et.length>0?Et[Et.length-1]:ut,ne=Et.length>=5?Et[Et.length-5]:Et[0]||0,le=ut,Xt=st,ge=ie,$e=st>0&&st!==ut?[st,ut]:[];return{...nt,score:le,prev:Xt,weekly:mt,monthly:$e,weeklyScore:Vt,weeklyPrev:ne,monthlyScore:ut,monthlyPrev:st,compRatio:ge,status:ge>=100?"lead":ge>=80?"behind":"critical"}});f(Q),P.current={...P.current,products:Q}}else I.weeklyMap&&f(Q=>Q.map(nt=>{var Et;const mt=(Et=I.weeklyMap)==null?void 0:Et[nt.id];return mt?{...nt,weekly:mt}:nt}));if(I.total){const Q={...P.current.total,...I.total,...I.buTotals?{buTotals:I.buTotals}:{},...I.buTotalsPrev?{buTotalsPrev:I.buTotalsPrev}:{},...I.countryTotals?{countryTotals:I.countryTotals}:{},...I.countryTotalsPrev?{countryTotalsPrev:I.countryTotalsPrev}:{}};h(nt=>({...nt,...Q})),P.current={...P.current,total:Q}}{let Q=function(st){if(!st)return 0;const ie=String(st).trim(),Vt=ie.match(/(\d{1,2})월/);if(Vt){const Xt=parseInt(Vt[1]);return Xt>=1&&Xt<=12?Xt:0}const ne=ie.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ne)return Et[ne[1].toLowerCase()]||0;const le=ie.match(/\d{4}[-\/](\d{1,2})/);if(le){const Xt=parseInt(le[1]);return Xt>=1&&Xt<=12?Xt:0}return 0};const nt=new Date().getFullYear(),mt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Et={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let ut=0;if(I.derivedPeriod){const st=Q(I.derivedPeriod);st>ut&&(ut=st)}if(I.citDerivedPeriod){const st=Q(I.citDerivedPeriod);st>ut&&(ut=st)}ut>0&&ut<=12&&(a(st=>({...st,period:`${nt}년 ${ut}월`})),l(st=>({...st,period:`${mt[ut]} ${nt}`})))}if(!I.total&&I.productsPartial&&I.productsPartial.length>0){const Q=I.productsPartial,nt=+(Q.reduce((Et,ut)=>Et+ut.score,0)/Q.length).toFixed(1),mt=+(Q.reduce((Et,ut)=>Et+(ut.vsComp||0),0)/Q.length).toFixed(1);h(Et=>({...Et,score:nt,vsComp:mt,rank:nt>=mt?1:2}))}if(setTimeout(()=>{vo(t,{meta:I.meta||null,total:I.total?{...I.total,...I.buTotals?{buTotals:I.buTotals}:{},...I.buTotalsPrev?{buTotalsPrev:I.buTotalsPrev}:{},...I.countryTotals?{countryTotals:I.countryTotals}:{},...I.countryTotalsPrev?{countryTotalsPrev:I.countryTotalsPrev}:{}}:null,productsPartial:I.productsPartial||null,weeklyMap:I.weeklyMap||null,weeklyLabels:I.weeklyLabels||null,weeklyLabelsFull:I.weeklyLabelsFull||null,weeklyAll:I.weeklyAll||null,citations:I.citations||null,dotcom:I.dotcom||null,productsCnty:I.productsCnty||null,citationsCnty:I.citationsCnty||null,citationsByCnty:I.citationsByCnty||null,dotcomByCnty:I.dotcomByCnty||null,unlaunchedMap:I.unlaunchedMap||null,prTopicList:I.prTopicList||null,monthlyVis:I.monthlyVis||null,weeklyPR:I.weeklyPR||null,weeklyPRLabels:I.weeklyPRLabels||null,monthlyPR:I.monthlyPR||null,monthlyPRLabels:I.monthlyPRLabels||null,weeklyBrandPrompt:I.weeklyBrandPrompt||null,weeklyBrandPromptLabels:I.weeklyBrandPromptLabels||null,monthlyBrandPrompt:I.monthlyBrandPrompt||null,monthlyBrandPromptLabels:I.monthlyBrandPromptLabels||null,dotcomTrend:I.dotcomTrend||null,dotcomTrendMonths:I.dotcomTrendMonths||null,dotcomByLlm:I.dotcomByLlm||null}),setTimeout(ln,250)},100),it(m.join(`
`)),kt("ok"),j(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const Q={};I.productsPartial&&(Q.products=I.productsPartial.map(nt=>{var Vt;const mt=((Vt=I.weeklyMap)==null?void 0:Vt[nt.id])||[],Et=nt.vsComp>0?nt.score/nt.vsComp*100:100,ut=mt.find(ne=>ne!=null&&ne>0),st=nt.prev!=null&&nt.prev>0?nt.prev:ut||0,ie=st>0?[st,nt.score]:[];return{...nt,prev:st,weekly:mt,monthly:ie,compRatio:Math.round(Et),status:Et>=100?"lead":Et>=80?"behind":"critical"}})),I.productsCnty&&(Q.productsCnty=I.productsCnty),I.citations&&(Q.citations=I.citations),I.citationsCnty&&(Q.citationsCnty=I.citationsCnty);try{await lo(Q)}catch{}j("동기화 + 번역 완료!")}}catch(I){m.push(`[ERROR] ${I.message}`),kt("error"),j(I.message),it(m.join(`
`))}finally{bt(!1),setTimeout(()=>{kt(null),j("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:Bt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:T},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:T},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:T},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx($r,{...sn||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:T},children:"Google Sheets URL"}),n.jsx("input",{value:H,onChange:i=>xt(i.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Tt,fontSize:11,padding:"7px 9px",marginBottom:8,color:H?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:mn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Ct?"wait":"pointer",background:Ct?"#1E293B":Bt,fontSize:12,fontWeight:700,color:Ct?"#94A3B8":"#FFFFFF",fontFamily:T,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(uo,{size:13,style:{animation:Ct?"spin 1s linear infinite":"none"}}),Ct?"동기화 중...":"구글 시트 동기화"]}),(vt||Ct&&Ft)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.6,background:vt==="ok"?"#14532D":vt==="error"?"#450A0A":"#1E293B",color:vt==="ok"?"#86EFAC":vt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${vt==="ok"?"#22C55E33":vt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Ft}),Y&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Y,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Y).then(()=>{const i=document.getElementById("vis-debug-copy-btn");i&&(i.textContent="복사됨!",setTimeout(()=>{i.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:T,cursor:"pointer"},children:"로그 복사"})]}),n.jsx(ei,{url:H,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:pn,disabled:dt,style:{width:"100%",padding:"9px 0",background:dt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:T,cursor:dt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:dt?.6:1},children:[n.jsx(gn,{size:13})," ",dt?"번역 중...":"AI 번역 (EN)"]}),Z&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:T},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:T},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>_(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:T,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:lo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:T,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:hn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(yn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Pt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"발행 월"}),n.jsx("select",{value:me,onChange:i=>rn(i.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:an.map(i=>n.jsxs("option",{value:i,children:[i," · ",Be(i),ue.find(m=>m.month===i)?" ✓ 게시됨":""]},i))})]}),Pt&&yt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",S||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:U||"",onChange:i=>yt(i.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",S||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(i=>n.jsx("option",{value:i,children:i},i))]}),U&&n.jsx("button",{onClick:()=>yt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:cn,disabled:$t,style:{width:"100%",padding:"9px 0",background:$t?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:$t?"#94A3B8":"#FFFFFF",fontFamily:T,cursor:$t?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(ho,{size:12}),$t?"게시 중...":Pt?`${Be(me)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:T,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:pe,onChange:i=>oe(i.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:dn,disabled:It,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:It?"#1E293B":"#166534",color:It?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:T,cursor:It?"wait":"pointer",marginBottom:6},children:[n.jsx(ho,{size:12}),It?"통합 게시 중...":"통합 대시보드 게시"]}),Ot&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.8,background:Ot.startsWith("ERROR")?"#450A0A":"#14532D",color:Ot.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Ot.startsWith("ERROR:")?Ot.slice(6):Ot})]})]}),n.jsxs("button",{onClick:async()=>{const i={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(i).some(X=>X.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Lt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:i})})).json();Lt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Lt.error||""))}catch(X){alert("아카이빙 실패: "+X.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(bn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Ht&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.8,background:Ht.startsWith("ERROR:")?"#450A0A":"#14532D",color:Ht.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Ht.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Ht.startsWith("ERROR:")?Ht.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(He,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Ht,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Pt&&(re==null?void 0:re.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:T,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>so(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:T,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:re.urls.ko},{label:"EN",url:re.urls.en}].map(({label:i,url:m})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:m,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:T,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i,": ",m]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${m}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(He,{size:10})})]},i)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:re.ts?new Date(re.ts).toLocaleString("ko-KR"):""})]}),Pt&&ue.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:T,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ue.length,")"]})}),ue.map(i=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:T},children:Be(i.month)}),n.jsx("button",{onClick:()=>{confirm(`${Be(i.month)} 게시본을 삭제할까요?`)&&so(i.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:T,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:i.urls.ko},{label:"EN",url:i.urls.en}].map(({label:m,url:X})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:X,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:T,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[m,": ",X]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${X}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(He,{size:10})})]},m)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:i.ts?new Date(i.ts).toLocaleString("ko-KR"):""})]},i.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:i=>o(m=>({...m,reportType:i.target.value})),style:{...Tt,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:"보고서 번호"}),n.jsx("input",{value:e.reportNo,onChange:i=>o(m=>({...m,reportNo:i.target.value})),style:{...Tt}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["기간 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:i=>o(m=>({...m,period:i.target.value})),style:{...Tt}})]})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:i=>o(m=>({...m,title:i.target.value})),rows:4,style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:i=>o(m=>({...m,team:i.target.value})),style:{...Tt,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:i=>o(m=>({...m,dateLine:i.target.value})),style:{...Tt,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Notice"}),n.jsx("button",{onClick:()=>o(i=>({...i,showNotice:!i.showNotice})),style:{background:e.showNotice?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:i=>o(m=>({...m,noticeText:i.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Tt,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(i=>({...i,showKpiLogic:!i.showKpiLogic})),style:{background:e.showKpiLogic?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:i=>o(m=>({...m,kpiLogicText:i.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Tt,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:T,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:i=>o(m=>({...m,titleFontSize:Number(i.target.value)})),style:{width:"100%",accentColor:Bt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:i=>o(m=>({...m,titleColor:i.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:T},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([i,m])=>n.jsx("button",{onClick:()=>o(X=>({...X,titleColor:i})),title:m,style:{width:16,height:16,borderRadius:"50%",background:i,border:e.titleColor===i?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},i))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showHighlight",label:"Highlight Insight"},{key:"showProducts",label:"제품별"},{key:"showModelDelta",label:"제품별 모델 증감"},{key:"showCompRatioDelta",label:"제품별 경쟁비 증감"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showTouchPointsBumpChatGpt",label:"외부채널 Chat-GPT"},{key:"showLlmShare",label:"모델별 인용비중"},{key:"showDotcom",label:"닷컴"},{key:"showDotcomChatGpt",label:"닷컴 Chat-GPT"},{key:"showTodo",label:"Action Plan"}].map(({key:i,label:m})=>n.jsx("button",{onClick:()=>o(X=>({...X,[i]:!X[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[i]?Bt:"#1E293B",color:e[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:m},i))}),(()=>{const i=Q=>String(Q||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),m=Q=>/brand/i.test(Q)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(Q)?"Brand":Q,X=Array.isArray(g==null?void 0:g.citTrendMonths)?g.citTrendMonths:[],Lt=X.length?X[X.length-1]:null,Ut=Q=>{if(!Q)return 0;if(Lt!=null&&Q[Lt]!=null)return Number(Q[Lt])||0;const nt=Object.values(Q).map(Number).filter(mt=>!isNaN(mt));return nt.length?nt[nt.length-1]:0},rt=[],Qt=new Set,I=(Q,nt,mt)=>{Q&&!Qt.has(Q)&&(Qt.add(Q),rt.push({value:Q,label:nt,score:mt}))};if(g!=null&&g.citTouchPointsTrend&&Object.entries(g.citTouchPointsTrend).forEach(([Q,nt])=>{const mt=m(Q);I(mt,mt,Ut(nt))}),g!=null&&g.citDomainTrend){const Q=Object.entries(g.citDomainTrend).filter(([mt])=>mt.startsWith("TTL|"));(Q.length?Q:Object.entries(g.citDomainTrend)).forEach(([,mt])=>I(mt.domain,i(mt.domain),Ut(mt.months)))}if(!rt.length)return null;rt.sort((Q,nt)=>nt.score-Q.score);const Yt=rt.slice(0,10),_t=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],zt=Q=>o(nt=>{const mt=Array.isArray(nt.bumpHighlight)?nt.bumpHighlight:[];return{...nt,bumpHighlight:mt.includes(Q)?mt.filter(Et=>Et!==Q):[...mt,Q]}});return n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"범프차트 지적 요소 (색상 강조)"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:Yt.map(({value:Q,label:nt})=>{const mt=_t.includes(Q);return n.jsx("button",{onClick:()=>zt(Q),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:mt?Bt:"#1E293B",color:mt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:nt},Q)})})]})})(),e.showLlmShare!==!1&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"인용비중 노출:"}),[5,10].map(i=>n.jsxs("button",{onClick:()=>o(m=>({...m,llmShareTopN:i})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:(e.llmShareTopN===5?5:10)===i?Bt:"#1E293B",color:(e.llmShareTopN===5?5:10)===i?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:["Top ",i]},i))]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?Bt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(i=>({...i,trendMode:(i.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?Bt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(i=>({...i,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?Bt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{var i;try{o(X=>({...X,monthlyReportBody:"⏳ AI 생성 중..."}));const m=await Dt("monthlyReportBody",{products:E().products,productsCnty:E().productsCnty,total:E().total,citations:E().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}},M);o(X=>({...X,monthlyReportBody:m}))}catch(m){console.error("[AI]",m),o(X=>({...X,monthlyReportBody:`[AI 실패: ${m.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:i=>o(m=>({...m,monthlyReportBody:i.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:T},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"증감 요인 분석 (Samsung 격차·MoM)"}),n.jsxs("button",{onClick:async()=>{var i;try{o(X=>({...X,monthlyDeltaAnalysis:"⏳ AI 분석 중..."}));const m=await Dt("monthlyDelta",{total:E().total,products:E().products,productsCnty:E().productsCnty,period:e.period||"",unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}},M);o(X=>({...X,monthlyDeltaAnalysis:m}))}catch(m){console.error("[AI]",m),o(X=>({...X,monthlyDeltaAnalysis:`[AI 실패: ${m.message}]`}))}},title:"경쟁사(Samsung) 대비 격차 증감 + 전월 대비 증감 요인 AI 분석",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 분석"]})]}),n.jsx("textarea",{value:e.monthlyDeltaAnalysis||"",onChange:i=>o(m=>({...m,monthlyDeltaAnalysis:i.target.value})),rows:16,placeholder:"Samsung 대비 격차 증감 + 전월 대비 증감 요인 분석. 'AI 분석' 버튼으로 자동 생성...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsx("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:T},children:"경쟁사(Samsung) 대비 격차 증감과 전월 대비 증감에 영향을 준 수치를 리스트업·정리합니다."})]}),Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>F&&F(i=>!i),style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:"pointer",background:C?Bt:"#1E293B",color:C?"#FFFFFF":"#94A3B8",fontSize:12,fontWeight:700,fontFamily:T,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s"},children:[n.jsx(xn,{size:13})," ",C?"편집 모드 켜짐 — 끄기":"편집 모드 켜기"]}),n.jsx("div",{style:{background:"#0F172A",border:"1px solid #1E293B",borderRadius:8,padding:"8px 10px",marginBottom:10},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:T,lineHeight:1.6},children:C?n.jsxs(n.Fragment,{children:["✏️ 미리보기에서 텍스트를 ",n.jsx("strong",{style:{color:"#E2E8F0"},children:"직접 클릭해 편집"})," (볼드·색·크기 적용된 상태 그대로).",n.jsx("br",{}),"바깥 클릭 = 저장 · Esc = 취소"]}):n.jsx(n.Fragment,{children:"편집 모드를 켜면 미리보기 텍스트를 직접 클릭해 편집할 수 있어요."})})}),[{label:"GEO 전략 인사이트",field:"totalInsight",type:"totalInsight",data:()=>{var i;return{products:E().products,productsCnty:E().productsCnty,total:E().total,todoText:e.todoText||"",unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}}}},{label:"Highlight 인사이트",field:"highlightInsight",toggle:"showHighlightInsight",type:"highlight",data:()=>({products:E().products,weeklyAll:q})},{label:"제품 인사이트",field:"productInsight",toggle:"showProductInsight",type:"product",data:()=>({products:E().products,total:E().total})},{label:"모델 증감 인사이트",field:"modelDeltaInsight",toggle:"showModelDeltaInsight",type:"modelDelta",data:()=>({products:E().products})},{label:"제품 How to Read",field:"productHowToRead",toggle:"showProductHowToRead",type:"howToRead",data:()=>({section:"제품별 GEO Visibility"})},{label:"국가별 인사이트",field:"cntyInsight",toggle:"showCntyInsight",type:"cnty",data:()=>{var i;return{productsCnty:E().productsCnty,unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}}}},{label:"국가별 How to Read",field:"cntyHowToRead",toggle:"showCntyHowToRead",type:"howToRead",data:()=>({section:"국가별 GEO Visibility"})},{label:"Citation 인사이트",field:"citationInsight",toggle:"showCitationInsight",type:"citation",data:()=>({citations:E().citations})},{label:"Citation How to Read",field:"citationHowToRead",toggle:"showCitationHowToRead",type:"howToRead",data:()=>({section:"Citation 도메인별 현황"})},{label:"제품별 Citation 인사이트",field:"citPrdInsight",toggle:"showCitPrdInsight",type:"citPrd",data:()=>({citationsCnty:E().citationsCnty})},{label:"제품별 Citation How to Read",field:"citPrdHowToRead",toggle:"showCitPrdHowToRead",type:"howToRead",data:()=>({section:"제품별 Citation"})},{label:"닷컴 인사이트",field:"dotcomInsight",toggle:"showDotcomInsight",type:"dotcom",data:()=>({dotcom:E().dotcom})},{label:"닷컴 How to Read",field:"dotcomHowToRead",toggle:"showDotcomHowToRead",type:"howToRead",data:()=>({section:"닷컴 Citation"})},{label:"Action Plan 인사이트",field:"todoText",type:"todo",data:()=>({products:E().products})}].map(i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 0"},children:[i.toggle?n.jsx("button",{onClick:()=>o(m=>({...m,[i.toggle]:!m[i.toggle]})),title:"표시 / 숨김",style:{background:e[i.toggle]?Bt:"#334155",border:"none",borderRadius:7,width:26,height:13,cursor:"pointer",position:"relative",padding:0,flexShrink:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e[i.toggle]?15:3,width:9,height:9,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})}):n.jsx("span",{style:{width:26,flexShrink:0}}),n.jsx("p",{style:{margin:0,flex:1,fontSize:11,color:"#94A3B8",fontFamily:T,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.label}),n.jsxs("button",{onClick:async()=>{try{o(X=>({...X,[i.field]:"⏳ AI 생성 중..."}));const m=await Dt(i.type,i.data(),M);o(X=>({...X,[i.field]:m}))}catch(m){console.error("[AI]",m),o(X=>({...X,[i.field]:`[AI 실패: ${m.message}]`}))}},title:`${i.label} AI 생성 (결과는 미리보기에 표시)`,style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:10,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[n.jsx(Mt,{size:9})," AI"]})]},i.field)),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0 16px"}})]}),t!=="monthly-report"&&t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{var i;try{o(X=>({...X,totalInsight:"⏳ AI 생성 중..."}));const m=await Dt("totalInsight",{products:E().products,productsCnty:E().productsCnty,total:E().total,todoText:e.todoText||"",unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}},M);o(X=>({...X,totalInsight:m}))}catch(m){console.error("[AI]",m),o(X=>({...X,totalInsight:`[AI 실패: ${m.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:i=>o(m=>({...m,totalInsight:i.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,productInsight:"⏳ AI 생성 중..."}));const i=await Dt("product",{products:E().products,total:E().total},M);o(m=>({...m,productInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,productInsight:`[AI 실패: ${i.message}]

`+Jr(E().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductInsight:!i.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?Bt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:i=>o(m=>({...m,productInsight:i.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,productHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"제품별 GEO Visibility"},M);o(m=>({...m,productHowToRead:i}))}catch{o(i=>({...i,productHowToRead:Yr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showProductHowToRead:!i.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?Bt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:i=>o(m=>({...m,productHowToRead:i.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{var i;try{o(X=>({...X,cntyInsight:"⏳ AI 생성 중..."}));const m=await Dt("cnty",{productsCnty:E().productsCnty,unlaunchedMap:((i=E().extra)==null?void 0:i.unlaunchedMap)||{}},M);o(X=>({...X,cntyInsight:m}))}catch(m){console.error("[AI]",m),o(X=>({...X,cntyInsight:`[AI 실패: ${m.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyInsight:!i.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?Bt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:i=>o(m=>({...m,cntyInsight:i.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,cntyHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"국가별 GEO Visibility"},M);o(m=>({...m,cntyHowToRead:i}))}catch{o(i=>({...i,cntyHowToRead:Xr()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCntyHowToRead:!i.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?Bt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:i=>o(m=>({...m,cntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:i=>o(m=>({...m,prNotice:i.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:i=>o(m=>({...m,prTopicDescsRaw:i.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:i=>o(m=>({...m,prTopicPromptsRaw:i.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater`,style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:i=>o(m=>({...m,bpNotice:i.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citationInsight:"⏳ AI 생성 중..."}));const i=await Dt("citation",{citations:E().citations},M);o(m=>({...m,citationInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,citationInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationInsight:!i.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?Bt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:i=>o(m=>({...m,citationInsight:i.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citationHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"Citation 도메인별 현황"},M);o(m=>({...m,citationHowToRead:i}))}catch{o(i=>({...i,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitationHowToRead:!i.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?Bt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:i=>o(m=>({...m,citationHowToRead:i.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citDomainInsight:"⏳ AI 생성 중..."}));const i=await Dt("citDomain",{citationsCnty:E().citationsCnty},M);o(m=>({...m,citDomainInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,citDomainInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainInsight:!i.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?Bt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:i=>o(m=>({...m,citDomainInsight:i.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citDomainHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"도메인별 Citation 현황"},M);o(m=>({...m,citDomainHowToRead:i}))}catch{o(i=>({...i,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitDomainHowToRead:!i.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?Bt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:i=>o(m=>({...m,citDomainHowToRead:i.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citCntyInsight:"⏳ AI 생성 중..."}));const i=await Dt("citCnty",{citationsCnty:E().citationsCnty},M);o(m=>({...m,citCntyInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,citCntyInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyInsight:!i.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?Bt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:i=>o(m=>({...m,citCntyInsight:i.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citCntyHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"국가별 Citation 도메인"},M);o(m=>({...m,citCntyHowToRead:i}))}catch{o(i=>({...i,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitCntyHowToRead:!i.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?Bt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:i=>o(m=>({...m,citCntyHowToRead:i.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citPrdInsight:"⏳ AI 생성 중..."}));const i=await Dt("citPrd",{citationsCnty:E().citationsCnty},M);o(m=>({...m,citPrdInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,citPrdInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdInsight:!i.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?Bt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:i=>o(m=>({...m,citPrdInsight:i.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,citPrdHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"제품별 Citation"},M);o(m=>({...m,citPrdHowToRead:i}))}catch{o(i=>({...i,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showCitPrdHowToRead:!i.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?Bt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:i=>o(m=>({...m,citPrdHowToRead:i.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),v.length>0&&(()=>{const i=[...new Set(O.productsCnty.map(m=>m.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:i.map(m=>{const X=(e.cntyProductFilter||{})[m]!==!1;return n.jsx("button",{onClick:()=>o(Lt=>({...Lt,cntyProductFilter:{...Lt.cntyProductFilter||{},[m]:!X}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:X?"#166534":"#1E293B",color:X?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:m},m)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,dotcomInsight:"⏳ AI 생성 중..."}));const i=await Dt("dotcom",{dotcom:E().dotcom},M);o(m=>({...m,dotcomInsight:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,dotcomInsight:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomInsight:!i.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?Bt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:i=>o(m=>({...m,dotcomInsight:i.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,dotcomHowToRead:"⏳ AI 생성 중..."}));const i=await Dt("howToRead",{section:"닷컴 Citation"},M);o(m=>({...m,dotcomHowToRead:i}))}catch{o(m=>({...m,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showDotcomHowToRead:!i.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?Bt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:i=>o(m=>({...m,dotcomHowToRead:i.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:i=>o(m=>({...m,todoNotice:i.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(m=>({...m,todoText:"⏳ AI 생성 중..."}));const i=await Dt("todo",{products:E().products},M);o(m=>({...m,todoText:i}))}catch(i){console.error("[AI]",i),o(m=>({...m,todoText:`[AI 실패: ${i.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(i=>({...i,showTodo:!i.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?Bt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:i=>o(m=>({...m,todoText:i.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Tt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:un,style:{width:"100%",padding:"9px 0",background:lt?"#14532D":"transparent",border:`1px solid ${lt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:lt?"#86EFAC":"#64748B",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:lt?n.jsxs(n.Fragment,{children:[n.jsx(qe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(_o,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:ct,onChange:i=>ft(i.target.value),placeholder:"recipient@example.com",style:{...Tt,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:fn,disabled:D==="sending"||!ct.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:D==="sending"||!ct.trim()?"not-allowed":"pointer",background:D==="ok"?"#14532D":D==="error"?"#7F1D1D":D==="sending"?"#1E3A5F":ct.trim()?"#1D4ED8":"#1E293B",color:D==="ok"?"#86EFAC":D==="error"?"#FCA5A5":ct.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:D==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(uo,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):D==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(qe,{size:12})," 발송 완료!"]}):D==="error"?n.jsxs(n.Fragment,{children:[n.jsx(fo,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(fo,{size:12})," 메일 발송 (KO + EN)"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:T,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function ii({value:t,onChange:e,products:o,productsCnty:s,monthlyVis:a,style:r}){const l=zo.useMemo(()=>Ln(o,s,a),[o,s,a]);return!l.length||l.length===1&&l[0]==="Total"?null:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...r},children:[n.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),n.jsx("select",{value:t||"Total",onChange:c=>e(c.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:l.map(c=>n.jsx("option",{value:c,children:c},c))})]})}const ye="weekly-report",No="geo-weekly-report-cache";function ai({meta:t,total:e,products:o,citations:s,dotcom:a,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:h,weeklyAll:x,categoryStats:f,cntyKeys:d=null,llmModel:p,monthlyVis:u}){const k=at.useRef(null),v=at.useMemo(()=>to(t,e,o,s,a,c,r,l,{weeklyLabels:h,weeklyAll:x,categoryStats:f,cntyKeys:d,llmModel:p,monthlyVis:u}),[t,e,o,s,a,c,r,l,h,x,f,d,p,u]);return zo.useEffect(()=>{const y=k.current;if(!y)return;const w=y.contentDocument||y.contentWindow.document;w.open(),w.write(v),w.close();const b=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const O=w.documentElement.scrollHeight;O&&(y.style.height=O+20+"px")}catch{}};setTimeout(b,150),setTimeout(b,400),setTimeout(b,1e3),setTimeout(b,2e3)},[v]),n.jsx("iframe",{ref:k,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function si({meta:t,total:e,products:o,citations:s,dotcom:a,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:h,weeklyAll:x,categoryStats:f,cntyKeys:d=null,llmModel:p,monthlyVis:u}){const[k,v]=at.useState(!1),y=at.useMemo(()=>to(t,e,o,s,a,c,r,l,{weeklyLabels:h,weeklyAll:x,categoryStats:f,cntyKeys:d,llmModel:p,monthlyVis:u}),[t,e,o,s,a,c,r,l,h,x,f,d,p,u]);async function w(){try{await navigator.clipboard.writeText(y)}catch{const b=document.createElement("textarea");b.value=y,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}v(!0),setTimeout(()=>v(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:T},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":Bt,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:k?n.jsxs(n.Fragment,{children:[n.jsx(qe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(_o,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:y})})]})}function li(){const t=at.useRef(Jn(No)).current,[e,o]=at.useState({...Re,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[s,a]=at.useState({...Re,...(t==null?void 0:t.metaEn)??{}}),[r,l]=at.useState((t==null?void 0:t.total)??Un),[c,h]=at.useState((t==null?void 0:t.products)??Hn),[x,f]=at.useState((t==null?void 0:t.citations)??qn),[d,p]=at.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Wn),[u,k]=at.useState((t==null?void 0:t.productsCnty)??Vn),[v,y]=at.useState((t==null?void 0:t.citationsCnty)??Kn),[w,b]=at.useState((t==null?void 0:t.weeklyLabels)??null),[O,M]=at.useState((t==null?void 0:t.weeklyAll)??{}),[N,V]=at.useState(null),[B,z]=at.useState("preview"),[W,$]=at.useState("ko"),[q,A]=at.useState("Total"),[R,L]=at.useState((t==null?void 0:t.monthlyVis)??[]),[G,K]=at.useState([]),[tt,et]=at.useState(""),[g,J]=at.useState(!1),[U,yt]=at.useState(""),[S,C]=at.useState(null),[F,P]=at.useState(!0),[E,H]=at.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),xt=at.useMemo(()=>{const Z=new Set;return(u||[]).forEach(_=>{_&&_.country&&!/^(ttl|total)$/i.test(_.country)&&Z.add(String(_.country).toUpperCase())}),Array.from(Z).sort()},[u]),Ct=E.length>0?E:null,bt=at.useCallback(Z=>{H(_=>_.includes(Z)?_.filter(dt=>dt!==Z):[..._,Z])},[]),vt=at.useCallback(()=>H(xt),[xt]),kt=at.useCallback(()=>H([]),[]);at.useEffect(()=>{let Z=!1;const _=sr(e.period)||`${new Date().getMonth()+1}월`,dt=lr(_);async function At(){var $t,Rt,Ht;try{const Jt=await fetch("/api/tracker-snapshot-v2"),It=Jt.ok?await Jt.json():null;if(It!=null&&It.ok&&((Ht=(Rt=($t=It.data)==null?void 0:$t.quantitativeGoals)==null?void 0:Rt.rows)!=null&&Ht.length)){const Zt=Co(It.data,dt);if(Zt!=null&&Zt.length&&!Z){V(Zt);return}}}catch{}try{const[{parseKPISheet:Jt},It]=await Promise.all([Je(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Je(()=>import("./xlsx-CaYOwpyI.js").then(Pt=>Pt.x),__vite__mapDeps([0,1]))]),Zt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,pe=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Zt}&headers=1`,oe=await fetch(pe,{cache:"no-store"});if(!oe.ok)return;const Ot=await oe.text(),Wt=It.read(Ot,{type:"string"}),re=Wt.Sheets[Wt.SheetNames[0]],we=It.utils.sheet_to_json(re,{header:1,defval:""}),ue=Jt(we),fe=Co(ue,dt);fe!=null&&fe.length&&!Z&&V(fe)}catch{}}return At(),()=>{Z=!0}},[e.period]);const Ft=W==="en"?s:e,j=W==="en"?a:o,Y=at.useMemo(()=>be(c,u,x,v,W),[c,u,x,v,W]);at.useEffect(()=>{Xn(ye).then(K)},[]);const it=at.useRef(null);function lt(Z,_=2e3){clearTimeout(it.current),yt(Z),it.current=setTimeout(()=>yt(""),_)}at.useEffect(()=>()=>clearTimeout(it.current),[]);const wt=at.useRef(!1);at.useEffect(()=>{let Z=!1;return Me(ye).then(_=>{Z||!_||(wt.current=!0,_.meta&&o(dt=>({...dt,..._.meta})),_.total&&l(dt=>({...dt,..._.total})),_.citations&&f(_.citations),_.dotcom&&p(dt=>({...dt,..._.dotcom})),_.productsCnty&&k(_.productsCnty),_.citationsCnty&&y(_.citationsCnty),_.weeklyLabels&&b(_.weeklyLabels),_.weeklyAll&&M(dt=>({...dt,..._.weeklyAll})),_.monthlyVis&&L(_.monthlyVis),_.productsPartial?h(_.productsPartial.map(dt=>{var Rt;const At=((Rt=_.weeklyMap)==null?void 0:Rt[dt.id])||[],$t=dt.vsComp>0?dt.score/dt.vsComp*100:100;return{...dt,weekly:At,monthly:[],compRatio:Math.round($t),status:$t>=100?"lead":$t>=80?"behind":"critical"}})):_.weeklyMap&&h(dt=>dt.map(At=>{var Rt;const $t=(Rt=_.weeklyMap)==null?void 0:Rt[At.id];return $t?{...At,weekly:$t}:At})))}),()=>{Z=!0}},[]),at.useEffect(()=>{Yn(No,{metaKo:e,metaEn:s,total:r,products:c,citations:x,dotcom:d,productsCnty:u,citationsCnty:v,weeklyLabels:w,weeklyAll:O,selectedCountries:E})},[e,s,r,c,x,d,u,v,w,O,E]);async function ct(){if(!S)return;const _=await Qn(ye,S,{metaKo:e,metaEn:s,total:r,products:c,citations:x,dotcom:d,productsCnty:u,citationsCnty:v,weeklyLabels:w,weeklyAll:O});_&&K(_),lt(_?"저장 완료!":"저장 실패")}async function ft(){var dt;const Z=tt.trim()||`${Ft.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,_=await Zn(ye,Z,{metaKo:e,metaEn:s,total:r,products:c,citations:x,dotcom:d,productsCnty:u,citationsCnty:v,weeklyLabels:w,weeklyAll:O});_&&(K(_),et(""),C(((dt=_[0])==null?void 0:dt.ts)||null)),lt(_?"새로 저장 완료!":"저장 실패")}function D(Z){const _=Z.data;o({...Re,..._.metaKo||_.meta||{}}),a({...Re,..._.metaEn||{}}),_.total&&l(_.total),_.products&&h(_.products),_.citations&&f(_.citations),_.dotcom&&p(_.dotcom),_.productsCnty&&k(_.productsCnty),_.citationsCnty&&y(_.citationsCnty),_.weeklyLabels&&b(_.weeklyLabels),_.weeklyAll&&M(_.weeklyAll),C(Z.ts),lt(`"${Z.name}" 불러옴`)}async function ot(Z){const _=G[Z];if(!_)return;const dt=await tr(ye,_.ts);dt&&K(dt),S===_.ts&&C(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:T},children:[F&&n.jsx(ri,{mode:ye,meta:Ft,setMeta:j,metaKo:e,setMetaKo:o,metaEn:s,setMetaEn:a,total:r,setTotal:l,products:c,setProducts:h,citations:x,setCitations:f,dotcom:d,setDotcom:p,productsCnty:u,setProductsCnty:k,citationsCnty:v,setCitationsCnty:y,resolved:Y,previewLang:W,setPreviewLang:$,snapshots:G,setSnapshots:K,setWeeklyLabels:b,setWeeklyAll:M,weeklyLabels:w,weeklyAll:O,generateHTML:to}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>P(Z=>!Z),title:F?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:F?n.jsx(vn,{size:16}):n.jsx(wn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Z,tab:_,lang:dt,label:At})=>{const $t=_==="code"?B==="code":B==="preview"&&W===dt;return n.jsx("button",{onClick:()=>{z(_),dt&&$(dt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:$t?"#1E293B":"transparent",color:$t?"#FFFFFF":"#475569",fontSize:11,fontWeight:$t?700:500,fontFamily:T,cursor:"pointer"},children:At},Z)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[U&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:T},children:U}),n.jsxs("button",{onClick:ct,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[n.jsx(mo,{size:11})," 저장"]}),n.jsx("input",{value:tt,onChange:Z=>et(Z.target.value),placeholder:"버전 이름...",onKeyDown:Z=>Z.key==="Enter"&&ft(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:T,outline:"none"}}),n.jsxs("button",{onClick:ft,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4},children:[n.jsx(mo,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>J(!g),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:g?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4},children:[n.jsx(Cn,{size:11})," 불러오기 ",G.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",G.length,")"]})]}),g&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Z=>Z.stopPropagation(),children:G.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:T,textAlign:"center"},children:"저장된 버전이 없습니다"}):G.map((Z,_)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===Z.ts?"#1E3A5F":"#0F172A",border:S===Z.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:T,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Z.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:new Date(Z.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{D(Z),J(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T},children:"적용"}),n.jsx("button",{onClick:()=>ot(_),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(kn,{size:10})})]},Z.ts))})]})]})]}),xt.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),xt.map(Z=>{const _=E.includes(Z);return n.jsx("button",{onClick:()=>bt(Z),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(_?"#22C55E":"#334155"),background:_?"#16A34A":"#1E293B",color:_?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:Z},Z)}),n.jsx("button",{onClick:vt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:kt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:E.length===0?"전체 국가":`${E.length}개 선택`})]}),B==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:n.jsx(ii,{value:q,onChange:A,products:Y.products,productsCnty:Y.productsCnty,monthlyVis:R})}),n.jsx(ai,{meta:Ft,total:r,products:Y.products,citations:Y.citations,dotcom:d,productsCnty:Y.productsCnty,citationsCnty:Y.citationsCnty,lang:W,weeklyLabels:w,weeklyAll:O,categoryStats:N,cntyKeys:Ct,llmModel:q,monthlyVis:R})]})}):n.jsx(si,{meta:Ft,total:r,products:Y.products,citations:Y.citations,dotcom:d,productsCnty:Y.productsCnty,citationsCnty:Y.citationsCnty,lang:W,weeklyLabels:w,weeklyAll:O,categoryStats:N,cntyKeys:Ct,llmModel:q,monthlyVis:R}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:["v","3.1.9"]})})]})]})}Sn.createRoot(document.getElementById("root")).render(n.jsx(li,{}));
