const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-CaYOwpyI.js","assets/react-Ce9l3SD5.js"])))=>i.map(i=>d[i]);
import{j as n,b as lt,R as bo,L as Fn,D as Tn,G as xo,A as En,c as Ve,S as Mt,P as An,C as Xe,d as Wo,e as vo,f as Ko,h as Ln,i as Bn,k as wo,F as $n,T as In}from"./react-Ce9l3SD5.js";import{R as Rn}from"./react-dom-D_GsT2Iz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const jn="modulepreload",Pn=function(t){return"/admin/weekly-report/"+t},Co={},Ze=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let l=function(x){return Promise.all(x.map(m=>Promise.resolve(m).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=l(o.map(x=>{if(x=Pn(x),x in Co)return;Co[x]=!0;const m=x.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${u}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":jn,m||(d.as="script"),d.crossOrigin="",d.href=x,h&&d.setAttribute("nonce",h),document.head.appendChild(d),m)return new Promise((p,k)=>{d.addEventListener("load",p),d.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},Mn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Pe={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},qo={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ae={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Dn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Mn.map((t,e)=>[t,e]));const je={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},Jo=new Set(Object.values(Ae)),ko=[...new Set(Object.values(je))].filter(t=>!Jo.has(t));ko.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:ko,validCodes:[...Jo]});const ae="Total";function On(...t){const e=new Set([ae]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(r=>Object.keys((r==null?void 0:r.byLlm)||{}).forEach(l=>e.add(l)))})}),[ae,...Array.from(e).filter(o=>o!==ae).sort((o,i)=>o.localeCompare(i))]}function Yo(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var x;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(m=>{var u;return(u=m==null?void 0:m.byLlm)==null?void 0:u[e]}),r=a[a.length-1]||null,l=a.length>=2?a[a.length-2]:null;if(!r)return o;const c=r.byLlm[e],h=(x=l==null?void 0:l.byLlm)==null?void 0:x[e];return{...o,score:c.score??o.score,prev:(h==null?void 0:h.score)??null,vsComp:c.comp??o.vsComp,allScores:c.allScores??o.allScores,monthlyScore:c.score??o.monthlyScore??o.score,monthlyPrev:(h==null?void 0:h.score)??null,monthlyScores:i.map(m=>{var d;const u=(d=m==null?void 0:m.byLlm)==null?void 0:d[e];return u?{...m,score:u.score,comp:u.comp,allScores:u.allScores}:{...m,score:null,comp:null,allScores:null}})}})}function Xo(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var m;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(u=>{var d;return(d=u==null?void 0:u.byLlm)==null?void 0:d[e]}),r=a[a.length-1]||null,l=a.length>=2?a[a.length-2]:null;if(!r)return o;const c=r.byLlm[e],h=(m=l==null?void 0:l.byLlm)==null?void 0:m[e],x=c.compScore??o.compScore;return{...o,score:c.score??o.score,prev:(h==null?void 0:h.score)??null,compScore:x,compName:c.compName??o.compName,allScores:c.allScores??o.allScores,gap:+((c.score??o.score)-x||0).toFixed(2),monthlyScores:i.map(u=>{var p;const d=(p=u==null?void 0:u.byLlm)==null?void 0:p[e];return d?{...u,score:d.score,compScore:d.compScore,compName:d.compName,allScores:d.allScores}:{...u,score:null,compScore:null,compName:null,allScores:null}})}})}function Nn(t,e){if(!Array.isArray(t)||!e||e===ae)return(t||[]).filter(a=>!a.llmModel||a.llmModel===ae||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const r=`${a.date}|${a.country}|${a.division}`;o[r]||(o[r]={}),o[r][a.llmModel]=a});const i=[];return Object.values(o).forEach(a=>{const r=a[e]||a[ae]||a.TOTAL||a.All;r&&i.push(r)}),i}function Zo(t,e,o){if(!o||o===ae||!Array.isArray(e)||!e.length)return t;const i=e.filter(l=>(l.country==="TOTAL"||l.country==="TTL")&&(l.division==="TOTAL"||l.division==="TTL"||l.division==="")&&l.llmModel===o);if(!i.length)return t;i.sort((l,c)=>String(l.date).localeCompare(String(c.date)));const a=i[i.length-1],r=i.length>=2?i[i.length-2]:null;return{...t,score:a.lg??t.score,prev:(r==null?void 0:r.lg)??t.prev,vsComp:a.comp??t.vsComp}}function _n(t){const e=String(t??"").trim().toUpperCase();return!e||e==="TTL"||e==="TOTAL"}function zn(t){const e=String(t??"").trim();return!e||/^(total|all|ttl)$/i.test(e)}function Gn(t){const e=new Map;(t||[]).forEach(i=>{if(!i||!i.domain)return;const a=Number(i.citations)||0;if(!(a>0))return;e.has(i.domain)||e.set(i.domain,{cnty:i.cnty,domain:i.domain,ttlSum:0,ttlTop:0,ttlType:"",prdSum:0,prdTop:0,prdType:""});const r=e.get(i.domain);_n(i.prd)?(r.ttlSum+=a,a>r.ttlTop&&(r.ttlTop=a,r.ttlType=i.type||"")):(r.prdSum+=a,a>r.prdTop&&(r.prdTop=a,r.prdType=i.type||""))});const o=[];return e.forEach(i=>{const a=i.ttlSum>0,r=a?i.ttlSum:i.prdSum;r>0&&o.push({cnty:i.cnty,domain:i.domain,type:(a?i.ttlType:i.prdType)||"",citations:r})}),o.sort((i,a)=>a.citations-i.citations||String(i.domain).localeCompare(String(a.domain))),o.forEach((i,a)=>{i.rank=a+1}),o}const pt="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Un=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function xe(t){const e=Un.indexOf(t);return e>=0?e:999}function _t(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const So=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function Qo(t){return So.filter(e=>t.includes(e)).concat(t.filter(e=>!So.includes(e)))}const Hn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function tn(t){return Hn[String(t||"").trim().toUpperCase()]||t}function Te(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Vn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Qe(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ke(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Wn(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Pe,i=qo,a=[],r=[];Object.entries(t).forEach(([h,x])=>{if(!x)return;const m=x.Total||x.TTL||x.TOTAL;if(m){const u=m.LG||m.lg||[],d=u.length>0?u[u.length-1]:null,p=u.length>=2?u[u.length-2]:null;let k="",v=0;Object.entries(m).forEach(([y,w])=>{if(y==="LG"||y==="lg")return;const b=Array.isArray(w)&&w.length?w[w.length-1]:0;b>v&&(v=b,k=y)}),d!=null&&d>0&&a.push({id:h,kr:o[h]||h,bu:i[h]||"OTHER",score:d,prev:p,vsComp:v,compName:k,category:o[h]||h})}Object.entries(x).forEach(([u,d])=>{if(u==="Total"||u==="TTL"||u==="TOTAL")return;const p=d.LG||d.lg||[],k=p.length>0?p[p.length-1]:null,v=p.length>=2?p[p.length-2]:null;if(k==null||k<=0)return;let y="",w=0;Object.entries(d).forEach(([b,D])=>{if(b==="LG"||b==="lg")return;const P=Array.isArray(D)&&D.length?D[D.length-1]:0;P>w&&(w=P,y=b)}),r.push({product:o[h]||h,country:u,score:k,prev:v,compScore:w,compName:y})})});const l=(e==null?void 0:e[e.length-1])||"This Week",c=(e==null?void 0:e[e.length-2])||"Last Week";return{products:a,productsCnty:r,lastLabel:l,prevLabel:c}}function Kn(t,e,o,i){if(!t.length)return"";const a=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],l={};t.forEach(h=>{const x=h.bu||"OTHER";l[x]||(l[x]=[]),l[x].push(h)});const c=[];return r.forEach(h=>{const x=(l[h]||[]).slice().sort((m,u)=>xe(m.kr||m.category||m.id)-xe(u.kr||u.category||u.id));x.forEach((m,u)=>{const d=Vn(m.score,m.prev),p=ke(m.score,m.vsComp)||"#FFFFFF";c.push(`<tr>
        ${u===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${h}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${_t(m.kr||m.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${p};">${Te(m.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${p};">${Te(m.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;background:${p};">${_t(m.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;font-weight:700;background:${p};">${Qe(m.score,m.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${pt};text-align:center;">${d}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${i})</span></h2>
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
  </table>`}function qn(t,e,o,i){const a=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},l=new Set,c=new Set;t.forEach(p=>{!p.country||!p.product||(l.add(p.country),c.add(p.product),r[p.product]||(r[p.product]={}),r[p.product][p.country]=p)});const h=Qo(Array.from(l)),x=Array.from(c).sort((p,k)=>xe(p)-xe(k));if(!x.length||!h.length)return"";const m={};(o||[]).forEach(p=>{[p.kr,p.category,p.id,p.en].filter(Boolean).forEach(v=>{m[v]=p})});const u='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+h.map(p=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${_t(tn(p))}</th>`).join(""),d=[];return x.forEach((p,k)=>{const v=k%2===0?"#FFFFFF":"#FAFAFA",y=m[p],b=(y?ke(y.score,y.vsComp):null)||v,D=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${b};">${y?Te(y.score):"—"}</td>`,P=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${b};">${y?Qe(y.score,y.vsComp):"—"}</td>`,N=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${b};color:#1A1A1A;font-weight:600;">${y!=null&&y.compName?_t(y.compName):"—"}</td>`,V=h.map(H=>{var I;const $=(I=r[p])==null?void 0:I[H],A=($?ke($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${A};">${$?Te($.score):"—"}</td>`}).join(""),B=h.map(H=>{var I;const $=(I=r[p])==null?void 0:I[H],A=($?ke($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;font-weight:700;background:${A};">${$?Qe($.score,$.compScore):"—"}</td>`}).join(""),_=h.map(H=>{var I;const $=(I=r[p])==null?void 0:I[H],A=($?ke($.score,$.compScore):null)||v;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${pt};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${$!=null&&$.compName?_t($.compName):"—"}</td>`}).join("");d.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${_t(p)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${D}${V}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${P}${B}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${pt};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${N}${_}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title} <span style="font-size:12px;font-weight:400;color:#666;">(${i})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${u}
      </tr>
    </thead>
    <tbody>${d.join("")}</tbody>
  </table>
  </div>`}function Jn(t,e,o,i){const a=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${i})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${i})`,product:"제품"},r={},l=new Set,c=new Set;t.forEach(d=>{!d.country||!d.product||(l.add(d.country),c.add(d.product),r[d.product]||(r[d.product]={}),r[d.product][d.country]=d)});const h=Qo(Array.from(l)),x=Array.from(c).sort((d,p)=>xe(d)-xe(p));if(!x.length||!h.length)return"";const m=h.map(d=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${_t(tn(d))}</th>`).join(""),u=x.map(d=>{const p=h.map(k=>{var V;const v=(V=r[d])==null?void 0:V[k];if(!v||v.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;color:#999;">—</td>`;const y=v.score,w=v.prev,b=w!=null?+(y-w).toFixed(1):null,D=b==null?"#999":b>0?"#16A34A":b<0?"#DC2626":"#666",P=b==null?"":b>0?"▲":b<0?"▼":"─",N=b!=null?`${P}${Math.abs(b).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${pt};text-align:center;">
        <div style="font-weight:700;color:#111;">${Te(y)}%</div>
        <div style="font-size:9px;color:${D};">${N}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${_t(d)}</td>
      ${p}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${pt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${a.product}</th>
      ${m}
    </tr></thead>
    <tbody>${u}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${pt};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function Yn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((r,l)=>r+(l.score||0),0),a=t.map((r,l)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${l+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${_t(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${i>0?(r.score/i*100).toFixed(1)+"%":"—"}</td>
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
  </table>`}function Xn(t,e){const o=Gn((t||[]).filter(c=>(c.cnty==="TTL"||c.cnty==="TOTAL"||!c.cnty)&&zn(c.llm)));if(!o.length)return"";const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((c,h)=>c+(h.citations||0),0),l=i.map((c,h)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;">${h+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${_t(c.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};">${_t(c.type||"")}</td>
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
  </table>`}function Zn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(c=>o[c]!=null);if(!a.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},l=a.map(c=>{const h=o[c]||0,x=i[c]||0,m=h-x,u=m>0?"LG":m<0?"SS":"=",d=m>0?"#86EFAC":m<0?"#FCA5A5":"#FFFFFF",p=m>0?"#14532D":m<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${d};color:${p};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};font-weight:${c==="TTL"?"900":"600"};">${_t(c)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:right;font-weight:700;">${m>0?"+":""}${m.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${pt};text-align:center;font-weight:900;">${u}</td>
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
  </table>`}function Qn(t,e){var l;if(!t||!t.length)return"";const o=((l=t[0])==null?void 0:l.targetMonth)||"3월",i=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(c){return c>=80?"#D1FAE5":c>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(c=>{const h=(c.monthRate||0).toFixed(0),x=(c.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${pt};background:#F5F5F5;">${_t(c.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(c.monthRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.monthActual||0).toLocaleString()} / ${(c.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(c.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.cumActual||0).toLocaleString()} / ${(c.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${pt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${pt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function ro(t,e,o,i,a={},r="ko",l=[],c=[],h={}){const{weeklyAll:x={},weeklyLabels:m=[],categoryStats:u=null,cntyKeys:d=null,llmModel:p,monthlyVis:k}=h;p&&p!=="Total"&&(o=Yo(o,p),l=Xo(l,p),e=Zo(e,k,p));let v=x;if(Array.isArray(d)&&d.length>0){const B=new Set(d.map(H=>String(H).toUpperCase())),_=H=>/^(total|ttl)$/i.test(String(H));l=(l||[]).filter(H=>H&&B.has(String(H.country).toUpperCase())),c=(c||[]).filter(H=>H&&B.has(String(H.country).toUpperCase())),v={},Object.entries(x||{}).forEach(([H,$])=>{if(!$)return;const q={};Object.entries($).forEach(([A,I])=>{(_(A)||B.has(String(A).toUpperCase()))&&(q[A]=I)}),v[H]=q})}const y=Wn(v,m),w=y.products.length?y.products:o,b=y.productsCnty.length?y.productsCnty:l,D=y.lastLabel,P=y.prevLabel,N=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",V=t.period||D||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${_t(N)} — ${_t(V)}</title>
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
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${pt};">${_t(N)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${pt};">${_t(V)} · ${D?`${_t(D)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${Kn(w,r,D,P)}
    ${Jn(b,r,D,P)}
    ${qn(b,r,w,D)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${pt};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Yn(i,r)}
    ${Xn(c,r)}
    ${Zn(a,r)}

    ${Qn(u,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${pt};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const Lt="#CF0652",T="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",tr=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,$e={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",showTotalInsight:!0,showInsightV2:!1,showInsightV3:!0,productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,showHighlight:!0,highlightInsight:"",showHighlightInsight:!1,bumpInsight:"",showBumpInsight:!1,hlChapterTitle:"",hlWeeklyTitle:"",hlModelTitle:"",hlBumpTitle:"",kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,showTodoV2:!1,monthlyReportBody:tr,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showDotcomChatGpt:!0,showTouchPointsBump:!0,showTouchPointsBumpChatGpt:!0,showDomainBumpModels:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},er={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},or=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],nr={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},rr=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],ir=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],ar=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],en=3;function sr(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==en?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function lr(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:en}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ge={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function de(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function cr(t){try{const e=await fetch(de(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function dr(t,e){try{const o=await fetch(`${de(t).snapshots}/${e}`);if(!o.ok)return null;const i=await o.json();return i.ok?i.snapshot:null}catch(o){return console.warn("[API] fetchSnapshotData failed:",o.message),null}}async function pr(t,e,o){try{const i=await fetch(de(t).snapshots,{method:"POST",headers:Ge,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function ur(t,e,o){try{const i=await fetch(`${de(t).snapshots}/${e}`,{method:"PUT",headers:Ge,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function hr(t,e){try{const o=await fetch(`${de(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Dt(t,e,o="ko",i="",a=""){try{const r=await fetch("/api/generate-insight",{method:"POST",headers:Ge,body:JSON.stringify({type:t,data:e,lang:o,rules:i,extraPrompt:a})});if(!r.ok){const c=await r.json().catch(()=>({}));throw new Error(c.error||`HTTP ${r.status}`)}const l=await r.json();if(!l.ok)throw new Error(l.error||"AI 생성 실패");return l.insight}catch(r){throw console.error("[API] generateAIInsight failed:",r.message),r}}async function Me(t){try{const e=await fetch(de(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function Fo(t){try{const e=await fetch(de(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function fr(t,e,o={}){const{includeReadability:i=!1}=o,[a,r]=await Promise.all([Me("dashboard").catch(()=>null),Me("visibility").catch(()=>null)]),l={...a||{},...r||{}};if(a&&Object.keys(a).forEach(A=>{l[A]==null&&a[A]!=null&&(l[A]=a[A])}),r!=null&&r.meta&&(a!=null&&a.meta)&&(l.meta={...a.meta||{},...r.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const c=l.meta||{},h=l.total||{},m=(l.productsPartial||l.products||[]).map(A=>{var z;const I=A.weekly||((z=l.weeklyMap)==null?void 0:z[A.id])||[],L=A.vsComp>0?A.score/A.vsComp*100:100;return{...A,weekly:I,monthly:A.monthly||[],compRatio:A.compRatio||Math.round(L),status:A.status||(L>=100?"lead":L>=80?"behind":"critical")}}),u=l.citations||[],d=l.dotcom||{},p=l.productsCnty||[],k=l.citationsCnty||[],v=l.weeklyLabels||null,y=l.weeklyAll||{},w=l.citationsByCnty||{},b=l.dotcomByCnty||{},D=e(m,p,u,k,"ko"),P=e(m,p,u,k,"en"),N={weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],monthlyPR:l.monthlyPR||[],monthlyPRLabels:l.monthlyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},V={monthlyVis:l.monthlyVis||[],includeReadability:i},B=t(c,h,D.products,D.citations,d,"ko",D.productsCnty,D.citationsCnty,v,y,w,b,V,N),_=t({...c,title:c.title||"GEO KPI Dashboard"},h,P.products,P.citations,d,"en",P.productsCnty,P.citationsCnty,v,y,w,b,V,N),H=`${c.period||""} ${c.title||"KPI Dashboard"}`.trim(),q=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:H,htmlKo:B,htmlEn:_})})).json();if(!q.ok)throw new Error(q.error||"게시 실패");return q}async function To(t,e){try{const o=await fetch(de(t).syncData,{method:"POST",headers:Ge,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const mr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},We={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},Eo={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function ye(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(r=>({...r,kr:r.en||We[r.kr]||r.kr,compName:r.compNameEn||Eo[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||mr[r.country]||r.country,product:r.productEn||We[r.product]||r.product,compName:r.compNameEn||Eo[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||We[r.category]||r.category})),citationsCnty:i.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function gr(t,{from:e="ko",to:o="en"}={}){const a=[];for(let r=0;r<t.length;r+=20){const l=t.slice(r,r+20),c=await Promise.all(l.map(async h=>{if(!h||!h.trim())return h;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(h)}`,m=await fetch(x);if(!m.ok)throw new Error(`번역 실패 (${m.status})`);return(await m.json())[0].map(d=>d[0]).join("")}));a.push(...c)}return a}const Ie=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],yr=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function br(t){const e=yr.indexOf(t);return e>=0?e:999}function Re(t){return br(t)}function on(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function xr(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[on(o)]=o)}),e}function Ao(t,e){var u,d,p,k;if(!((u=t==null?void 0:t.quantitativeGoals)!=null&&u.rows))return(p=(d=t==null?void 0:t._dashboard)==null?void 0:d.categoryStats)!=null&&p.length?[...t._dashboard.categoryStats].sort((v,y)=>Re(v.category)-Re(y.category)):null;const o=t.quantitativeGoals.rows,i=xr((k=t.quantitativeResults)==null?void 0:k.rows),r=new Date().getMonth()+1-1,l=r>=3&&r<=12?`${r}월`:"3월";let c=e||t._month||l,h=Ie.indexOf(c);h<0&&(c="3월",h=0);const x=[...new Set(o.map(v=>v.taskCategory).filter(Boolean))],m=h>0?Ie[h-1]:null;return x.map(v=>{const y=o.filter($=>$.taskCategory===v);let w=0,b=0,D=0,P=0,N=0,V=0;y.forEach($=>{var z,K,ot,nt,f;const q=on($),A=i[q]||{},I=typeof((z=$.monthly)==null?void 0:z[c])=="number"?$.monthly[c]:0,L=typeof((K=A.monthly)==null?void 0:K[c])=="number"?A.monthly[c]:0;if(b+=I,w+=L,m){const Y=typeof((ot=$.monthly)==null?void 0:ot[m])=="number"?$.monthly[m]:0,G=typeof((nt=A.monthly)==null?void 0:nt[m])=="number"?A.monthly[m]:0;V+=Y,N+=G}for(let Y=0;Y<=h;Y++){const G=Ie[Y];typeof((f=A.monthly)==null?void 0:f[G])=="number"&&(D+=A.monthly[G])}Ie.forEach(Y=>{var G;typeof((G=$.monthly)==null?void 0:G[Y])=="number"&&(P+=$.monthly[Y])})});const B=b>0?Math.round(w/b*1e3)/10:0,_=V>0?Math.round(N/V*1e3)/10:0,H=P>0?Math.round(D/P*1e3)/10:0;return{category:v,taskCount:y.length,targetMonth:c,monthRate:B,prevMonthRate:_,prevMonth:m,progressRate:H,monthActual:w,monthGoal:b,cumActual:D,annualGoal:P}}).sort((v,y)=>Re(v.category)-Re(y.category))}function vr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}function wr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const i=parseInt(e[1])-1;return i<3?"3월":`${i}월`}async function nn(){const t=await Ze(()=>import("./xlsx-CaYOwpyI.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function to(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Kt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function Cr(t,e,o){console.log(`[${t}]`,e,"")}function kr(t,e){return Array.isArray(t)?t.length===0?(to(e,"invalid input: empty rows",{len:0}),!1):!0:(to(e,"invalid input: not an array",{type:typeof t}),!1)}function io(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>i.some(r=>a instanceof RegExp?a.test(r):r===String(a).toLowerCase()))})}function Sr(t,e="sync"){var a,r,l;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(l=t.weeklyLabels)!=null&&l.length&&t.weeklyLabels.every((h,x)=>h===`W${x+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const Ot={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Lo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],Bo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Fr(t,e,o,i,a={}){const r=await nn(),l=r.utils.book_new(),c=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);c["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(l,c,"meta");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);h["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(l,h,"total");const x=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(v=>[v.id,v.bu,v.kr,v.score,v.prev,v.vsComp,v.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(l,x,"products");const m=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(v=>[v.id,v.kr,...v.weekly])]);m["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(l,m,"weekly");const u=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(v=>[v.rank,v.source,v.category,v.score,v.delta,v.ratio??0])]);u["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(l,u,"citations");const d=(a==null?void 0:a.lg)||{},p=(a==null?void 0:a.samsung)||{},k=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Lo.map(v=>`LG_${v}`),...Bo.map(v=>`Samsung_${v}`)],[...Lo.map(v=>d[v]??0),...Bo.map(v=>p[v]??0)]]);k["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(l,k,"dotcom"),r.writeFile(l,"GEO_Newsletter_템플릿.xlsx")}function te(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function De(t){return t==null||String(t).trim()===""?null:te(t)}function Ut(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function se(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Tr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function Er(t){const e=se(t);return Tr[e]||e}function be(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const r=e.match(/(\d{4})/);if(r)a=parseInt(r[1]);else{const c=e.match(/(\d{2})년/);if(c)a=2e3+parseInt(c[1]);else{const h=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);h&&(a=2e3+parseInt(h[1]))}}const l=e.match(/(\d{1,2})월/);if(l)i=parseInt(l[1]);else{const c=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(c)i=o[c[1].toLowerCase()];else{const h=e.match(/\d{4}[-\/](\d{1,2})/);h&&(i=parseInt(h[1]))}}return a?a*12+i:i}function Ar(t){var nt;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((f,Y)=>console.log(`  row${Y}: [${(f||[]).slice(0,8).map(G=>JSON.stringify(String(G||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1,r=-1;if(t.forEach((f,Y)=>{if(!f[0]||String(f[0]).startsWith("[")||String(f[0]).startsWith("※")||f[0]==="key")return;const G=String(f[0]).trim();(o.includes(G)||e.includes(G))&&(a||(r=Y),a=!0,e.includes(G)?i[G]=parseInt(f[1])||0:i[G]=te(f[1]))}),a&&Object.keys(i).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${r}: r[0]='${(nt=t[r])==null?void 0:nt[0]}' / kvObj keys:`,Object.keys(i)),{total:i};console.log("[parseVisSummary] Table path 진입");let l=t.find(f=>f.some(Y=>String(Y||"").trim().toUpperCase()==="LG"));l||(l=t.find(f=>f.some(Y=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(Y||"").trim()))));const c=l?l.findIndex(f=>String(f||"").trim().toUpperCase()==="LG"):-1,h=l?l.findIndex(f=>{const Y=String(f||"").trim().toUpperCase();return Y==="SAMSUNG"||Y==="SAMSUMG"}):-1,x=l?l.findIndex(f=>/date/i.test(String(f||"").trim())):0,m=l?l.findIndex(f=>/countries|country/i.test(String(f||"").trim())):2,u=l?l.findIndex(f=>/divisions?/i.test(String(f||"").trim())):3,d=l?l.findIndex(f=>/^(llm\s*model|llm|model)$/i.test(String(f||"").trim())):-1,p=Math.max(x,m,u,d),k=c>=0?c:p>=0?p+1:4,v=h>=0?h:k+1;console.log(`[parseVisSummary] columns: date=${x} cnty=${m} div=${u} llm=${d} lg=${k}(raw=${c}) ss=${v}(raw=${h})`);const y=[];t.filter(f=>{const Y=String(f[x>=0?x:0]||"").trim();return Y&&!Y.startsWith("[")&&!Y.startsWith("※")&&!/^date$/i.test(Y)&&!/^key$/i.test(Y)}).forEach(f=>{const Y=String(f[x>=0?x:0]||"").trim(),G=se(f[m>=0?m:2]),ft=String(f[u>=0?u:3]||"").trim().toUpperCase(),C=(d>=0?String(f[d]||"").trim():"")||"Total",F=te(f[k]),M=te(f[v]);Y&&F>0&&y.push({date:Y,country:G,division:ft,llmModel:C,lg:F,comp:M})});const b=y.filter(f=>(f.country==="TOTAL"||f.country==="TTL")&&(f.division==="TOTAL"||f.division==="TTL"||f.division==="")&&(f.llmModel==="Total"||f.llmModel==="TOTAL"||f.llmModel==="All"));b.sort((f,Y)=>be(f.date)-be(Y.date));const D=b[b.length-1],P=b.length>=2?b[b.length-2]:null;if(!D){const f=t.find(S=>S.some(C=>String(C||"").trim().toUpperCase()==="TOTAL"));if(!f)return Kt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const Y=te(f[k]),G=te(f[v]),ft={total:{score:Y,prev:Y,vsComp:G,rank:Y>=G?1:2,totalBrands:12}};return y.length&&(ft.monthlyVis=y),ft}const N=D.lg,V=D.comp,B=P?P.lg:N,_=D.date,H=P?P.date:null;function $(f){const Y={};return y.filter(G=>G.date===f&&(G.country==="TOTAL"||G.country==="TTL")&&G.division&&G.division!=="TOTAL"&&G.division!=="TTL"&&G.division!==""&&(G.llmModel==="Total"||G.llmModel==="TOTAL"||G.llmModel==="All")).forEach(G=>{Y[G.division]={lg:G.lg,comp:G.comp}}),Y}const q=$(_),A=H?$(H):{};function I(f){const Y={};return y.filter(G=>G.date===f&&G.country&&G.country!=="TOTAL"&&G.country!=="TTL"&&(G.division==="TOTAL"||G.division==="TTL"||G.division==="")&&(G.llmModel==="Total"||G.llmModel==="TOTAL"||G.llmModel==="All")).forEach(G=>{Y[G.country]={lg:G.lg,comp:G.comp}}),Y}const L=I(_),z=H?I(H):{},K={total:{score:N,prev:B,vsComp:V,rank:N>=V?1:2,totalBrands:12},...Object.keys(q).length?{buTotals:q}:{},...Object.keys(A).length?{buTotalsPrev:A}:{},...Object.keys(L).length?{countryTotals:L}:{},...Object.keys(z).length?{countryTotalsPrev:z}:{}};_&&(K.derivedPeriod=_),y.length&&(K.monthlyVis=y);const ot={};return y.forEach(f=>{ot[f.date]=(ot[f.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${y.length}행 / unique dates:`,ot,`/ TOTAL+TOTAL+Total 행: ${b.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(K)),K}function Lr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,r)=>console.log(`  row${r}: [${a.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,r)=>{if(r===0)return;const l=String((a==null?void 0:a[1])||"").trim(),c=String((a==null?void 0:a[2])||"").trim().toUpperCase();l&&(e[l]=(e[l]||0)+1,(c==="TTL"||c==="TOTAL")&&o.push({date:l,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const i=t.findIndex(a=>{const r=String(a[0]||"").trim().toLowerCase();return r==="div"||r==="division"||r==="divisions"});if(i<0){const a=t.findIndex(r=>r.some((l,c)=>c>=1&&String(l||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(r=>JSON.stringify(String(r||"").trim())).join(", ")}]`),$o(t,a))}return console.log(`[parseProductCnty] header at row${i}: [${t[i].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),$o(t,i)}function $o(t,e){const o=t[e],i=o.findIndex((u,d)=>d>=3&&String(u||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(u=>/^(llm\s*model|llm|model)$/i.test(String(u||"").trim())),r=[];for(let u=i+1;u<o.length;u++){const d=String(o[u]||"").trim();d&&d.toUpperCase()!=="LG"&&r.push({name:d,col:u})}const l=t.slice(e+1).filter(u=>{const d=String(u[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),c={},h={};l.forEach(u=>{const d=String(u[0]||"").trim(),p=String(u[1]||"").trim(),k=String(u[2]||"").trim(),v=se(u[2])||k,y=String(u[3]||"").trim(),b=(a>=0?String(u[a]||"").trim():"")||"Total",D=te(u[i]),P=r.map(_=>({name:_.name,score:te(u[_.col])})).filter(_=>_.score>0),N=[...P].sort((_,H)=>H.score-_.score)[0]||{name:"",score:0},V=+(D-N.score).toFixed(2),B={LG:D};if(P.forEach(_=>{B[_.name]=_.score}),v==="TTL"||v==="TOTAL"){const _=Fe[y]||y.toLowerCase(),H=Dn[y]||y;c[_]||(c[_]=[]),c[_].push({id:_,bu:d,kr:H,category:y,date:p,llmModel:b,score:D,vsComp:N.score,compName:N.name,allScores:B})}else{const _=`${y}|${v}`;h[_]||(h[_]=[]),h[_].push({product:y,country:v,date:p,llmModel:b,score:D,compName:N.name,compScore:N.score,gap:V,allScores:B})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(c).join(", ")||"없음"} / 국가별: ${Object.keys(h).length}건`);const x=[];for(const[u,d]of Object.entries(c)){const p=d.filter(b=>b.llmModel==="Total"||b.llmModel==="TOTAL"||b.llmModel==="All"),k=p.length?p:d;k.sort((b,D)=>be(b.date)-be(D.date));const v=k[k.length-1],y=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${u}: dates=[${k.map(b=>b.date).join(",")}] score=${v.score} prev=${y} vsComp=${v.vsComp}`);const w=k.map(b=>{const D=d.filter(N=>N.date===b.date),P={};return D.forEach(N=>{P[N.llmModel]={score:N.score,comp:N.vsComp,allScores:N.allScores}}),{date:b.date,score:b.score,comp:b.vsComp,allScores:b.allScores,byLlm:P}});x.push({...v,prev:y,monthlyScores:w})}const m=[];for(const u of Object.values(h)){const d=u.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),p=d.length?d:u;p.sort((w,b)=>be(w.date)-be(b.date));const k=p[p.length-1],v=p.length>=2?p[p.length-2].score:null,y=p.map(w=>{const b=u.filter(P=>P.date===w.date),D={};return b.forEach(P=>{D[P.llmModel]={score:P.score,compScore:P.compScore,compName:P.compName,allScores:P.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:D}});m.push({...k,prev:v,monthlyScores:y})}return{...x.length?{productsPartial:x}:{},...m.length?{productsCnty:m}:{}}}function rn(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const r=[];for(const l of t[a]||[]){const c=String(l||"").split(/\n/)[0].trim();/^W\d+/i.test(c)&&r.push(c.toUpperCase())}if(r.length>=2)return r}return null}const Ke={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Io(t,e){var v;const o=e?Ke[e]||{}:{...Ke.MS,...Ke.ES};if(!Object.keys(o).length)return Kt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(y=>y.some(w=>String(w||"").trim()in o));if(i<0)return Kt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[i],r=t.findIndex((y,w)=>w>i&&y.some(b=>String(b||"").trim()==="TTL")),l=r>0?r+1:Math.min(i+20,t.length);let c=-1,h=-1;for(let y=i+1;y<l;y++){const w=t[y];if(!w.some(P=>String(P||"").trim().toUpperCase()==="LG"))continue;if(h<0&&(h=y),w.some(P=>{const N=String(P||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="nonbrand"||N==="nb"})){c=y;break}}const x=c>=0?c:h>=0?h:r;if(x<0)return Kt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:r});const m=t[x],u=c>=0?"LG-NB":h>=0?"LG":"TTL",d={},p=Object.keys(o).map(y=>a.findIndex(w=>String(w||"").trim()===y)).filter(y=>y>=0).sort((y,w)=>y-w);for(const[y,w]of Object.entries(o)){const b=a.findIndex(N=>String(N||"").trim()===y);if(b<0)continue;const D=p.find(N=>N>b)||b+20,P=[];for(let N=b+1;N<D&&N<m.length;N++){const V=te(m[N]);V>0&&P.push(V)}P.length&&(d[w]=P)}if(!Object.keys(d).length)return Kt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:x,dataRowLabel:u});const k=rn(t,i,l)||((v=Object.values(d)[0])==null?void 0:v.map((y,w)=>`W${w+1}`))||[];return{weeklyMap:d,weeklyLabels:k}}function Br(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[r,l]of Object.entries(a))a[r]=l.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function $r(t){const{data:e,rows:o,headerIdx:i,brandIdx:a,catIdx:r,countryIdx:l,isNonBrand:c,isTotal:h,weeklyMap:x,weeklyAll:m}=t;let u=t.wCols,d=t.weeklyLabels;if(!u.length){const p=e.find(k=>String(k[a]||"").trim().toUpperCase()==="LG"&&c(k));if(p){const k=[];for(let v=a+1;v<p.length;v++)if(String(p[v]||"").trim())k.push(v);else if(k.length)break;u=k,d=rn(o,0,i+1)||u.map((v,y)=>`W${y+1}`)}}return e.forEach(p=>{if(!c(p))return;const k=String(p[a]||"").trim();if(!k)return;const v=String(p[r>=0?r:0]||"").trim();if(!v)return;const y=Fe[v]||v.toLowerCase(),w=l>=0?se(p[l]):"TOTAL",b=w==="TOTAL"||w==="TTL"||!w?"Total":w;m[y]||(m[y]={}),m[y][b]||(m[y][b]={}),m[y][b][k]=u.map(D=>De(p[D]))}),e.forEach(p=>{if(String(p[a]||"").trim().toUpperCase()!=="LG"||!c(p)||!h(p))return;const v=String(p[r>=0?r:0]||"").trim();v&&(x[Fe[v]||v.toLowerCase()]=u.map(y=>De(p[y])))}),{wCols:u,weeklyLabels:d}}function Ir(t){const{data:e,header:o,lgIdx:i,catIdx:a,isTotal:r,weeklyMap:l}=t,c=o.findIndex(m=>{const u=String(m||"").trim().toLowerCase();return u==="date"||u==="week"||u==="period"}),h={},x=[];return e.forEach(m=>{if(!r(m))return;const u=String(m[a>=0?a:3]||"").trim();if(u){if(c>=0){const d=String(m[c]||"").trim();d&&!x.includes(d)&&x.push(d)}h[u]=h[u]||[],h[u].push(De(m[i]))}}),Object.entries(h).forEach(([m,u])=>{l[Fe[m]||m.toLowerCase()]=u}),x.length?x:null}function Rr(t){const{data:e,wCols:o,catIdx:i,isTotal:a,weeklyMap:r}=t;e.forEach(l=>{if(!a(l))return;const c=String(l[i>=0?i:0]||"").trim();c&&(r[Fe[c]||c.toLowerCase()]=o.map(h=>De(l[h])))})}function qe(t,e){const o={};let i=[],a=-1;for(let B=0;B<Math.min(t.length,10);B++){const _=t[B];if(!_)continue;let H=0;for(let $=0;$<_.length;$++)/^w\d+$/i.test(String(_[$]||"").trim())&&H++;if(H>=2){a=B;break}}let r=t.findIndex(B=>{const _=B.slice(0,5).map(H=>String(H||"").trim().toLowerCase());return _.includes("category")||_.includes("product")});if(r<0&&a>=0&&(r=a),r<0&&(r=t.findIndex(B=>{let _=!1,H=0;for(let $=0;$<Math.min(B.length,10);$++){const q=String(B[$]||"").trim();q.toUpperCase()==="LG"?(_=!0,H++):q&&isNaN(parseFloat(q))&&H++}return _&&H>=3})),r<0)return Io(t,e);const l=t[r],c=r+1;let h=null;if(t[c]){const B=t[c].slice(4,8).map(_=>String(_||"").trim()).filter(Boolean);B.length&&B.every(_=>/^\d{1,2}\/\d{1,2}/.test(_)||/~/.test(_)||/^\(/.test(_))&&(h=c)}const x=h!=null?h+1:c,m=t.slice(x).filter(B=>B[0]!=null&&String(B[0]).trim()),u=l.findIndex(B=>{const _=String(B||"").trim().toLowerCase();return _==="category"||_==="product"}),d=l.findIndex(B=>{const _=String(B||"").trim().toLowerCase();return _==="country"||_==="county"}),p=l.findIndex(B=>String(B||"").trim().toLowerCase()==="brand"),k=l.findIndex(B=>String(B||"").trim().toUpperCase()==="LG");let v=[];const y=a>=0?t[a]:l;for(let B=0;B<y.length;B++)/^w\d+$/i.test(String(y[B]||"").trim())&&v.push(B);if(!v.length)for(let B=0;B<l.length;B++){const _=String(l[B]||"").split(/\n/)[0].trim();/^w\d+/i.test(_)&&v.push(B)}i=v.map(B=>String(y[B]||"").trim().toUpperCase());let w=v.map((B,_)=>{const H=i[_]||`W${B}`;let $="";const q=h!=null?t[h]:a!==r&&a>=0?t[a+1]:null;if(q){const A=String(q[B]||"").trim();A&&/\d/.test(A)&&($=A.startsWith("(")?A:`(${A})`)}return $?`${H}${$}`:H});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${r} dateRangeRow:${h} wCols:${v.length} labels:`,i.slice(0,5),"full:",w.slice(-2));function b(B){if(d<0)return!0;const _=String(B[d]||"").replace(/[()]/g,"").trim().toUpperCase();return _==="TOTAL"||_==="TTL"||_===""}const D=l.findIndex(B=>{const _=String(B||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="b/nb"||_==="bnb"||_==="brand/nonbrand"});function P(B){if(D<0)return!0;const _=String(B[D]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="nonbrand"||_==="nb"}const N={},V={data:m,rows:t,header:l,headerIdx:r,brandIdx:p,lgIdx:k,catIdx:u,countryIdx:d,wCols:v,weeklyLabels:i,weeklyMap:o,weeklyAll:N,isNonBrand:P,isTotal:b};if(p>=0){const B=$r(V);v=B.wCols,i=B.weeklyLabels}else if(k>=0){const B=Ir(V);B&&(i=B)}else v.length&&Rr(V);if(i.length>0){let B=i.length;for(const q of Object.values(N))for(const A of Object.values(q))for(const I of Object.values(A)){const L=I.findIndex(z=>z!=null);L>=0&&L<B&&(B=L)}for(const q of Object.values(o)){const A=q.findIndex(I=>I!=null);A>=0&&A<B&&(B=A)}const _=12,$=i.length-B>_?i.length-_:B;$>0&&$<i.length&&(i=i.slice($),w=w.slice($),Br(N,o,$))}if(Object.keys(o).length){const B={weeklyMap:o};return i.length&&(B.weeklyLabels=i),w.length&&(B.weeklyLabelsFull=w),Object.keys(N).length&&(B.weeklyAll=N),B}return Io(t,e)}function jr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((S,C)=>console.log(`  row${C}: [${(S||[]).slice(0,10).map(F=>JSON.stringify(String(F||"").trim())).join(", ")}]`));const e=t.findIndex(S=>S.some(M=>{const E=String(M||"").trim().toLowerCase();return E.includes("page type")||E==="country"})?!S.some(M=>/^\[.*\]$/.test(String(M||"").trim())):!1);if(e<0)return Kt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],i=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(C)}),a=o.findIndex(S=>/^country$|countries/i.test(String(S||"").trim())),r=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(C)||C==="type"}),l=a>=0?a:0,c=r>=0?r:l+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${i} cntyCol=${a} ptCol=${r} (fallbackCnty=${l} fallbackPt=${c})`),i<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(S=>Array.from(String(S||"")).map(C=>C.codePointAt(0).toString(16)).join(" ")));const h=[],x=new Set,m=Math.max(c+1,2);for(let S=m;S<o.length;S++){const C=String(o[S]||"").trim();if(/\bLG\b/i.test(C)){const F=S+1;if(F<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[F]||""))){const M=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),E=M?M[1].toLowerCase():`col${S}`;x.has(E)||(h.push({lg:S,ss:F}),x.add(E))}}}h.length||h.push({lg:m,ss:m+1}),console.log("[parseCitPageType] monthPairs:",h.map(S=>`LG=${S.lg}/SS=${S.ss}`).join(", "));const u=new Map;let d="",p=0;t.slice(e+1).forEach(S=>{if(!S||!S.some(F=>String(F||"").trim())){d="";return}let C=i>=0?String(S[i]||"").trim():"";C?d=C:i>=0&&d&&(C=d,p++),u.set(S,C)}),p&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${p}건 상속`);const k=t.slice(e+1).filter(S=>S&&S[l]!=null&&String(S[l]).trim());console.log(`[parseCitPageType] data ${k.length}행 (필터 통과)`);let v=h[0];for(let S=h.length-1;S>=0;S--)if(k.some(C=>Ut(C[h[S].lg])>0)){v=h[S];break}if(!k.some(S=>Ut(S[v.lg])>0)){for(let S=Math.min(v.lg,o.length)-1;S>=2;S--)if(k.some(C=>Ut(C[S])>0)){v={lg:S-1,ss:S};break}}const y={},w={},b={},D={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},P=new Set,N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=h.map(S=>{const C=String(o[S.lg]||"").trim(),F=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return F?F[1].charAt(0).toUpperCase()+F[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),B={},_=S=>String(S||"").trim().replace(/^\((.*)\)$/,"$1").trim(),H=S=>{const C=_(S);return!C||/^(total|all|ttl)$/i.test(C)},$={plp:"PLP",pdp:"PDP",microsite:"Microsites",microsites:"Microsites",newsroom:"Newsroom",support:"Support",buyingguide:"Buying-guide",experience:"Experience"},q=S=>{const C=String(S||"").replace(/[()]/g,"").trim();if(/page total|^ttl$/i.test(C))return"TTL";const F=C.toLowerCase().replace(/^lg[-\s]+/,"").replace(/[-\s]+/g,"");return $[F]||C},A=S=>{const C=se(S[l]);return{cnty:D[C]||C.toUpperCase(),key:q(S[c])}},I=new Set;k.forEach(S=>{const C=u.get(S)||"";if(H(C))return;const{cnty:F,key:M}=A(S);h.forEach((E,U)=>{(Ut(S[E.lg])>0||Ut(S[E.ss])>0)&&I.add(`${F}|${M}|${U}`)})});const L=(S,C,F,M)=>I.has(`${C}|${F}|${M}`)?!S:S,z=h.indexOf(v);I.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${I.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const K={};function ot(S){return K[S]||(K[S]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),K[S]}k.forEach(S=>{const C=u.get(S)||"",F=H(C),M=F?"Total":C,{cnty:E,key:U}=A(S);P.add(E);const yt=Ut(S[v.lg]),wt=Ut(S[v.ss]);L(F,E,U,z)&&(E==="TTL"?(y[U]=(y[U]||0)+yt,w[U]=(w[U]||0)+wt):(b[E]||(b[E]={lg:{},samsung:{}}),b[E].lg[U]=(b[E].lg[U]||0)+yt,b[E].samsung[U]=(b[E].samsung[U]||0)+wt)),E==="TTL"&&h.forEach((bt,Ct)=>{var X,at;if(!L(F,E,U,Ct))return;const St=Ut(S[bt.lg]),j=Ut(S[bt.ss]);if(St>0||j>0){B[U]||(B[U]={});const ct=V[Ct]||`M${Ct+1}`;B[U][ct]={lg:(((X=B[U][ct])==null?void 0:X.lg)||0)+St,samsung:(((at=B[U][ct])==null?void 0:at.samsung)||0)+j}}});const mt=ot(M);E==="TTL"?(mt.lg[U]=(mt.lg[U]||0)+yt,mt.samsung[U]=(mt.samsung[U]||0)+wt,mt.dotcomTrend[U]||(mt.dotcomTrend[U]={}),h.forEach((bt,Ct)=>{var X,at;const St=Ut(S[bt.lg]),j=Ut(S[bt.ss]);if(St>0||j>0){const ct=V[Ct]||`M${Ct+1}`;mt.dotcomTrend[U][ct]={lg:(((X=mt.dotcomTrend[U][ct])==null?void 0:X.lg)||0)+St,samsung:(((at=mt.dotcomTrend[U][ct])==null?void 0:at.samsung)||0)+j}}})):(mt.dotcomByCnty[E]||(mt.dotcomByCnty[E]={lg:{},samsung:{}}),mt.dotcomByCnty[E].lg[U]=(mt.dotcomByCnty[E].lg[U]||0)+yt,mt.dotcomByCnty[E].samsung[U]=(mt.dotcomByCnty[E].samsung[U]||0)+wt)});const nt=new Set;Object.values(B).forEach(S=>Object.keys(S).forEach(C=>nt.add(C)));const f=N.filter(S=>nt.has(S)),Y={},G={};h.forEach((S,C)=>{const F=V[C];if(!F)return;const M={},E={};k.forEach(U=>{const yt=u.get(U)||"",wt=H(yt),{cnty:mt,key:bt}=A(U);if(!L(wt,mt,bt,C))return;const Ct=Ut(U[S.lg]),St=Ut(U[S.ss]);Ct<=0&&St<=0||(mt==="TTL"?(Ct>0&&(M[bt]=(M[bt]||0)+Ct),St>0&&(E[bt]=(E[bt]||0)+St)):(G[F]||(G[F]={}),G[F][mt]||(G[F][mt]={lg:{},samsung:{}}),Ct>0&&(G[F][mt].lg[bt]=(G[F][mt].lg[bt]||0)+Ct),St>0&&(G[F][mt].samsung[bt]=(G[F][mt].samsung[bt]||0)+St)))}),Object.keys(M).length&&(Y[F]={lg:M,samsung:E})}),Object.keys(G).forEach(S=>{Object.keys(G[S]).forEach(C=>{const F=G[S][C];Object.values(F.lg).some(E=>E>0)||Object.values(F.samsung).some(E=>E>0)||delete G[S][C]}),Object.keys(G[S]).length||delete G[S]});const ft={};return(y.TTL||Object.keys(y).length)&&(ft.dotcom={lg:y,samsung:w,byMonth:Y,byCntyByMonth:G}),Object.keys(b).length&&(ft.dotcomByCnty=b),Object.keys(B).length&&f.length&&(ft.dotcomTrend=B,ft.dotcomTrendMonths=f),(Object.keys(K).length>1||Object.keys(K).length===1&&!(K.Total||K.TOTAL||K.All))&&(ft.dotcomByLlm=K),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(y).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(b).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(B).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(K).join(",")||"(EMPTY)"}`),ft}function Pr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((C,F)=>console.log(`  row${F}: [${(C||[]).slice(0,12).map(M=>JSON.stringify(String(M||"").trim())).join(", ")}]`));const e=t.findIndex(C=>C.some(E=>{const U=String(E||"").trim().toLowerCase();return U==="channel"||U==="country"})?!C.some(E=>/^\[.*\]$/.test(String(E||"").trim())):!1);e<0&&Kt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,r=-1,l=-1,c=-1;for(let C=0;C<o.length;C++){const F=String(o[C]||"").trim().toLowerCase();F==="country"&&a<0&&(a=C),F==="channel"&&r<0&&(r=C),F==="prd"&&l<0&&(l=C),/^(llm\s*model|llm|model)$/i.test(F)&&c<0&&(c=C)}const h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(C){const F=String(C||"").trim().toLowerCase();if(!F)return null;const M=F.match(/^(\d{1,2})월/);if(M){const U=parseInt(M[1]);if(U>=1&&U<=12)return h[U-1]}const E=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return E?E[1].charAt(0).toUpperCase()+E[1].slice(1).toLowerCase():null}const m=[],u=new Set;for(let C=0;C<o.length;C++){const F=x(o[C]);F&&!u.has(C)&&(m.push({col:C,label:F}),u.add(C))}if(e>0){const C=t[e-1];if(C)for(let F=0;F<C.length;F++){const M=x(C[F]);M&&!u.has(F)&&(m.push({col:F,label:M}),u.add(F))}}let d=2;if(m.length>0)d=Math.min(...m.map(C=>C.col));else if(a>=0&&r>=0)d=Math.max(a,r,l)+1;else{const C=t[i];C&&!String(C[0]||"").trim()?(a=1,r=2,d=3):(a=0,r=1,d=2)}if(a<0||r<0){const C=t[i],F=C&&!String(C[0]||"").trim()?1:0;a<0&&(a=F),r<0&&(r=F+1)}if(m.length>0){m.sort((E,U)=>E.col-U.col);const C=m[0],F=h.indexOf(C.label),M=new Set([a,r,l].filter(E=>E>=0));if(F>0&&C.col>d){let E=F-1;for(let U=C.col-1;U>=d&&E>=0;U--){if(u.has(U)||M.has(U))continue;const yt=String(o[U]||"").trim(),wt=e>0?String((t[e-1]||[])[U]||"").trim():"";yt||wt||(m.push({col:U,label:h[E]}),u.add(U),E--)}}}m.sort((C,F)=>h.indexOf(C.label)-h.indexOf(F.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(C=>JSON.stringify(String(C||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${r} prdCol=${l} llmCol=${c} dataStartCol=${d}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",m.map(C=>`${C.label}@col${C.col}`).join(", "));const p=t.slice(i).filter(C=>C.some(F=>F!=null&&String(F).trim())),k=[],v={},y={},w={},b={},D=new Set,P={},N={},V={},B=C=>String(C||"").replace(/[()]/g,"").trim();p.forEach(C=>{const F=se(C[a]),M=B(C[r]);if(!F||!M||M.toLowerCase()==="total")return;const E=F==="TTL"||F==="TOTAL",U=c>=0?B(C[c]):"",yt=!U||/^(total|all|ttl)$/i.test(U),wt=l>=0?B(C[l]):"",mt=!wt||/^(ttl|total)$/i.test(wt.toUpperCase());m.forEach(({col:bt,label:Ct})=>{Ut(C[bt])<=0||(E||(P[M]||(P[M]={}),P[M][Ct]=!0),yt||(N[M]||(N[M]={}),N[M][Ct]=!0),mt||(V[M]||(V[M]={}),V[M][Ct]=!0))})});const _=Object.keys(P).map(C=>`${C}:[${Object.keys(P[C]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${_||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(N).map(C=>`${C}:[${Object.keys(N[C]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(V).map(C=>`${C}:[${Object.keys(V[C]).join(",")}]`).join(" ")||"(없음)");const H={},$={},q={},A={};p.forEach(C=>{const F=se(C[a]),M=B(C[r]),E=l>=0?B(C[l]):"",U=c>=0?B(C[c]):"";if(!F||!M||M.toLowerCase()==="total")return;const yt=F==="TTL"||F==="TOTAL",wt=!U||/^(total|all|ttl)$/i.test(U),mt=E.toUpperCase(),bt=!E||mt==="TTL"||mt==="TOTAL";if(yt||D.add(F),!yt&&(q[F]||(q[F]={}),q[F][M]||(q[F][M]={ttl:null,prds:[]}),!bt)){const St={};m.forEach(({col:j,label:X})=>{var ct;const at=Ut(C[j]);at<=0||wt&&((ct=N[M])!=null&&ct[X])||(St[X]=at)}),Object.keys(St).length&&q[F][M].prds.push({prd:E,monthScores:St})}H[M]||(H[M]={}),$[M]||($[M]={});const Ct=yt?"TTL":F;$[M][Ct]||($[M][Ct]={}),m.forEach(({col:St,label:j})=>{var ht,O,rt,Z;const X=Ut(C[St]);if(X<=0)return;const at=yt&&((ht=P[M])==null?void 0:ht[j]),ct=wt&&((O=N[M])==null?void 0:O[j]),xt=bt&&((rt=V[M])==null?void 0:rt[j]),dt=wt?"Total":U;!at&&!(bt&&((Z=V[M])!=null&&Z[j]))&&(A[dt]||(A[dt]={}),A[dt][M]||(A[dt][M]={}),A[dt][M][j]=(A[dt][M][j]||0)+X),!(at||ct||xt)&&(H[M][j]=(H[M][j]||0)+X,$[M][Ct][j]=($[M][Ct][j]||0)+X)})});const I=C=>{for(let F=m.length-1;F>=0;F--){const M=C[m[F].label];if(M>0)return M}return 0},L={};Object.entries($).forEach(([C,F])=>{Object.entries(F).forEach(([M,E])=>{M!=="TTL"&&Object.keys(E).length!==0&&(L[M]||(L[M]={}),L[M][C]=E)})}),Object.entries(H).forEach(([C,F])=>{const M=I(F);M>0&&(k.push({source:C,category:"",score:M,delta:0,ratio:0,monthScores:F}),v[C]=F)}),Object.entries($).forEach(([C,F])=>{Object.entries(F).forEach(([M,E])=>{if(M==="TTL")return;const U=I(E);U>0&&(y[M]||(y[M]=[]),y[M].push({source:C,category:"",score:U,delta:0,ratio:0,monthScores:E,prd:""}))})}),Object.entries(q).forEach(([C,F])=>{Object.entries(F).forEach(([M,E])=>{E.prds.forEach(({prd:U,monthScores:yt})=>{const wt=I(yt);if(wt<=0)return;y[C]||(y[C]=[]),y[C].push({source:M,category:"",score:wt,delta:0,ratio:0,monthScores:yt,prd:U}),b[U]||(b[U]={}),b[U][M]||(b[U][M]={source:M,category:"",score:0,delta:0,ratio:0,monthScores:{}});const mt=b[U][M];mt.score+=wt,Object.entries(yt).forEach(([bt,Ct])=>{mt.monthScores[bt]=(mt.monthScores[bt]||0)+Ct})})})});const z={};new Set([...Object.keys(w),...Object.keys(b)]).forEach(C=>{let F=w[C];(!F||!F.length)&&(F=Object.values(b[C]||{})),F&&F.length&&(z[C]=F)});const ot=k.reduce((C,F)=>C+F.score,0);k.sort((C,F)=>F.score-C.score),k.forEach((C,F)=>{C.rank=F+1,C.ratio=ot>0?+(C.score/ot*100).toFixed(1):0});for(const[C,F]of Object.entries(y)){const M=F.reduce((E,U)=>E+U.score,0);F.sort((E,U)=>U.score-E.score),F.forEach((E,U)=>{E.rank=U+1,E.ratio=M>0?+(E.score/M*100).toFixed(1):0})}for(const[C,F]of Object.entries(z)){const M=F.reduce((E,U)=>E+U.score,0);F.sort((E,U)=>U.score-E.score),F.forEach((E,U)=>{E.rank=U+1,E.ratio=M>0?+(E.score/M*100).toFixed(1):0})}const nt=m.map(C=>C.label).filter(C=>Object.values(v).some(F=>F[C]>0)),f={};m.forEach(C=>{let F=0;Object.values(v).forEach(M=>{F+=M[C.label]||0}),f[C.label]=F}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",f,"→ validMonths:",nt);const Y={};Object.entries(q.TTL||{}).forEach(([C,F])=>{Y[C]={ttl:F.ttl,latestScore:I(F.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",Y),console.log("[parseCitTouchPoints] citations top 3:",k.slice(0,3).map(C=>({source:C.source,score:C.score,monthScores:C.monthScores})));const G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let ft=null;if(nt.length>0){const C={};Object.values(v).forEach(E=>{Object.entries(E).forEach(([U,yt])=>{yt>0&&(C[U]=(C[U]||0)+1)})});let F=nt[nt.length-1];if(nt.length>=2){const E=C[F]||0,U=nt[nt.length-2],yt=C[U]||0;yt>0&&E<yt*.5&&(F=U)}const M=G.findIndex(E=>F.toLowerCase().startsWith(E.toLowerCase()));M>=0&&(ft=`${G[M]} ${new Date().getFullYear()}`)}const S={};return k.length>0&&(S.citations=k),Object.keys(y).length>0&&(S.citationsByCnty=y),Object.keys(z).length>0&&(S.citationsByPrd=z),Object.keys(v).length>0&&(S.citTouchPointsTrend=v,S.citTrendMonths=nt),Object.keys(L).length>0&&(S.citTouchPointsTrendByCnty=L),Object.keys(A).length>0&&(S.citTouchPointsByLlm=A,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(A).join(", "))),ft&&(S.citDerivedPeriod=ft),S}function Mr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((I,L)=>console.log(`  row${L}: [${(I||[]).slice(0,14).map(z=>JSON.stringify(String(z||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,r=0,l=-1,c=-1,h=-1,x=-1,m=-1,u=-1,d=4;for(let I=0;I<Math.min(t.length,10);I++){const L=t[I];if(!L)continue;const z=L.some(f=>/^no$/i.test(String(f||"").trim())),K=L.some(f=>/^region$/i.test(String(f||"").trim())),ot=L.some(f=>/domain|domian/i.test(String(f||"").trim())),nt=L.some(f=>/^prd$/i.test(String(f||"").trim()));if(z||K||ot||nt){a=L,r=I+1;for(let f=0;f<L.length;f++){const Y=String(L[f]||"").trim().toLowerCase();Y==="prd"&&m<0&&(m=f),Y==="no"&&l<0&&(l=f),Y==="region"&&c<0&&(c=f),(Y==="domain"||Y==="domian")&&h<0&&(h=f),Y==="type"&&x<0&&(x=f),/^(llm\s*model|llm|model)$/i.test(Y)&&u<0&&(u=f)}console.log(`[parseCitDomain] header row${I}: [${(L||[]).slice(0,14).map(f=>JSON.stringify(String(f||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${m} noCol=${l} regionCol=${c} domainCol=${h} typeCol=${x} llmCol=${u}`);break}(String(L[0]||"").trim().startsWith("[")||!String(L[0]||"").trim())&&(r=I+1)}a||Kt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(I=>I==null?void 0:I.slice(0,6))});const p=l>=0||c>=0||m>=0;if(p)c<0&&(c=l>=0?l+1:m>=0?m+2:1),h<0&&(h=c+1),x<0&&(x=h+1),d=Math.max(h,x)+1;else if(h>=0)x=h+1,d=h+2;else{for(let I=r;I<Math.min(t.length,r+5);I++){const L=t[I];if(L){for(let z=0;z<Math.min(L.length,6);z++){const K=String(L[z]||"").trim();if(K.includes(".")&&K.length>3&&!i.test(K)){h=z,x=z+1,d=z+2;break}}if(h>=0)break}}h<0&&(h=0,x=1,d=2)}const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=I=>{const L=String(I||"").trim().toLowerCase();if(!L)return null;const z=L.match(/^(\d{1,2})월/);if(z){const ot=parseInt(z[1]);if(ot>=1&&ot<=12)return k[ot-1]}const K=L.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():null},y=[];if(a)for(let I=d;I<a.length;I++){const L=v(a[I]);L&&y.push({col:I,label:L})}const w=I=>/^(type|domain[_ ]type)$/i.test(String(I||"").trim()),b=I=>/^(domain|domian)$/i.test(String(I||"").trim()),D=I=>/^region$/i.test(String(I||"").trim()),P=[];a&&y.forEach(({col:I,label:L})=>{const z=I-1,K=I-2,ot=I-3;ot<0||w(a[z])&&b(a[K])&&D(a[ot])&&P.push({regionCol:ot,domainCol:K,typeCol:z,monthCol:I,label:L})}),console.log(`[parseCitDomain] domainMonthLabels: ${y.map(I=>`${I.label}@col${I.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${P.length}개`,P.map(I=>`${I.label}@col${I.monthCol}(r${I.regionCol}/d${I.domainCol}/t${I.typeCol})`).join(", "));const N=[],V={};let B=null,_=null;const H={};let $="TTL";const q=I=>{let L=String(I||"").trim();if(!L)return"";const z=L.match(/^\[([^\]]+)\]/);z&&(L=z[1].trim()),L=L.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const K=L.indexOf("/");return K>=0&&(L=L.slice(0,K)),L};if(P.length>=2){const I=j=>String(j||"").replace(/[()]/g,"").trim(),L={},z=P.map(()=>({region:"",domain:"",type:""}));let K="",ot=0,nt=0;for(let j=r;j<t.length;j++){const X=t[j];if(!X)continue;let at=m>=0?I(X[m]):"";at?K=at:at=K;const ct=u>=0?I(X[u]):"";P.forEach((xt,dt)=>{const ht=z[dt],O=q(X[xt.domainCol]);O&&O.includes(".")&&(ht.domain=O,ht.region=String(X[xt.regionCol]||"").trim().toUpperCase(),ht.type=String(X[xt.typeCol]||"").trim());const rt=String(X[xt.monthCol]||"").replace(/,/g,"").trim(),Z=parseFloat(rt);if(isNaN(Z)||Z<=0)return;let W=O,Q,Et;if(W&&W.includes("."))Q=String(X[xt.regionCol]||"").trim().toUpperCase(),Et=String(X[xt.typeCol]||"").trim();else if(ht.domain)W=ht.domain,Q=ht.region,Et=ht.type,ot++;else{nt++;return}const Bt=e[Q]||Q||"TTL",Rt=`${Bt}|${W}|${Et}|${at}|${ct}`;L[Rt]||(L[Rt]={cnty:Bt,domain:W,type:Et,prd:at,llm:ct,monthScores:{}}),L[Rt].monthScores[xt.label]=(L[Rt].monthScores[xt.label]||0)+Z})}(ot||nt)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${ot}건 / domain 없어 drop ${nt}건`);const f=j=>{const X=I(j);return!X||/^(total|all|ttl)$/i.test(X)},Y=new Set;Object.values(L).forEach(j=>{if(f(j.llm))return;const X=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`;Object.entries(j.monthScores).forEach(([at,ct])=>{ct>0&&Y.add(`${X}|${at}`)})});const G={};Object.values(L).forEach(j=>{const X=`${j.cnty}|${j.domain}|${j.type}|${j.prd}`,at=f(j.llm);G[X]||(G[X]={cnty:j.cnty,domain:j.domain,type:j.type,prd:j.prd,monthScores:{}}),Object.entries(j.monthScores).forEach(([ct,xt])=>{xt>0&&Y.has(`${X}|${ct}`)!==at&&(G[X].monthScores[ct]=(G[X].monthScores[ct]||0)+xt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(L).length} → ${Object.keys(G).length} rows / breakdown 월 ${Y.size}건`);const ft=j=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(j||"").trim()),S=j=>{const X=String(j||"").trim();return!X||/^(ttl|total)$/i.test(X)},C=j=>{for(let X=y.length-1;X>=0;X--){const at=j[y[X].label];if(at>0)return at}return 0},F=j=>j.find(X=>Object.keys(X).length)||{},M=(j,X)=>{Object.entries(X).forEach(([at,ct])=>{ct>0&&(j[at]=(j[at]||0)+ct)})},E={};Object.values(L).forEach(j=>{if(f(j.llm))return;const X=I(j.llm);E[X]||(E[X]={}),E[X][j.domain]||(E[X][j.domain]=[{},{},{},{}]);const at=(ft(j.cnty)?0:2)+(S(j.prd)?0:1);M(E[X][j.domain][at],j.monthScores)});const U={},yt={};if(Object.entries(E).forEach(([j,X])=>{const at={},ct={};Object.entries(X).forEach(([xt,dt])=>{const ht=F(dt),O=C(ht);O>0&&(at[xt]=O,ct[xt]=ht)}),Object.keys(at).length&&(U[j]=at),Object.keys(ct).length&&(yt[j]=ct)}),Object.keys(U).length){const j={};Object.values(G).forEach(ct=>{j[ct.domain]||(j[ct.domain]=[{},{},{},{}]);const xt=(ft(ct.cnty)?0:2)+(S(ct.prd)?0:1);M(j[ct.domain][xt],ct.monthScores)});const X={},at={};Object.entries(j).forEach(([ct,xt])=>{const dt=F(xt),ht=C(dt);ht>0&&(X[ct]=ht,at[ct]=dt)}),Object.keys(X).length&&(U.Total=X),Object.keys(at).length&&(yt.Total=at),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(U).join(", ")),Object.keys(U).length>1&&(B=U),Object.keys(yt).length>1&&(_=yt)}Object.values(G).forEach(j=>{let X=0;for(let dt=y.length-1;dt>=0;dt--){const ht=j.monthScores[y[dt].label];if(ht>0){X=ht;break}}if(X<=0)return;H[j.cnty]=(H[j.cnty]||0)+1,N.push({cnty:j.cnty,rank:H[j.cnty],domain:j.domain,type:j.type,citations:X,monthScores:j.monthScores,prd:j.prd});const at=`${j.cnty}|${j.domain}`,ct=!j.prd||/^(ttl|total)$/i.test(j.prd);V[at]||(V[at]={cnty:j.cnty,domain:j.domain,type:j.type,months:{},_ttlMonths:{}});const xt=V[at];ct?(xt.type=j.type||xt.type,Object.entries(j.monthScores).forEach(([dt,ht])=>{ht>0&&(xt._ttlMonths[dt]?xt.months[dt]+=ht:(xt.months[dt]=ht,xt._ttlMonths[dt]=!0))})):Object.entries(j.monthScores).forEach(([dt,ht])=>{!(ht>0)||xt._ttlMonths[dt]||(xt.months[dt]=(xt.months[dt]||0)+ht)})}),Object.values(V).forEach(j=>{delete j._ttlMonths});const wt={TTL:{},CNTY:{}};Object.entries(V).forEach(([j,X])=>{const at=j.startsWith("TTL|")?"TTL":"CNTY";Object.entries(X.months).forEach(([ct,xt])=>{xt>0&&(wt[at][ct]=(wt[at][ct]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",wt.TTL,"/ CNTY:",wt.CNTY);const mt={},bt={};Object.values(L).forEach(j=>{mt[j.cnty]=(mt[j.cnty]||0)+1,bt[j.prd||"(empty)"]=(bt[j.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(L).length} / cnty dist:`,mt,"/ prd dist:",bt);const Ct=Object.values(L).filter(j=>j.cnty==="TTL"&&j.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${Ct.length}건):`,Ct.map(j=>`${j.domain}|prd='${j.prd}'|type='${j.type}'|May=${j.monthScores.May}`).join(" / "));const St={};N.forEach(j=>{St[j.cnty]||(St[j.cnty]=[]),St[j.cnty].push(j)}),Object.values(St).forEach(j=>{j.sort((X,at)=>at.citations-X.citations),j.forEach((X,at)=>{X.rank=at+1})})}else for(let I=r;I<t.length;I++){const L=t[I];if(!L)continue;const z=String(L[h]||"").trim(),K=String(L[x]||"").trim(),ot=m>=0?String(L[m]||"").trim():"";if(!p&&(!z||!z.includes("."))){const G=String(L[h]||"").trim().toUpperCase(),ft=e[G]||(o.includes(G)?G:null);ft&&(!K||K==="")&&($=ft);continue}if(!z||!z.includes("."))continue;let nt="TTL";if(p&&c>=0){const G=String(L[c]||"").trim().toUpperCase();nt=e[G]||G}else p||(nt=$);let f=0;if(y.length>0)for(let G=y.length-1;G>=0;G--){const ft=String(L[y[G].col]||"").replace(/,/g,"").trim(),S=parseFloat(ft);if(!isNaN(S)&&S>0){f=S;break}}else for(let G=L.length-1;G>=d;G--){const ft=String(L[G]||"").replace(/,/g,"").trim();if(!ft)continue;const S=parseFloat(ft);if(!isNaN(S)&&S>0){f=S;break}}if(y.length>0){const G={};if(y.forEach(({col:ft,label:S})=>{const C=String(L[ft]||"").replace(/,/g,"").trim(),F=parseFloat(C);!isNaN(F)&&F>0&&(G[S]=F)}),Object.keys(G).length>0){const ft=`${nt}|${z}`;V[ft]={cnty:nt,domain:z,type:K,months:G}}}const Y={};y.length>0&&y.forEach(({col:G,label:ft})=>{const S=String(L[G]||"").replace(/,/g,"").trim(),C=parseFloat(S);!isNaN(C)&&C>0&&(Y[ft]=C)}),f>0&&(H[nt]=(H[nt]||0)+1,N.push({cnty:nt,rank:H[nt],domain:z,type:K,citations:f,monthScores:Y,prd:ot}))}const A={};if(N.length>0&&(A.citationsCnty=N),Object.keys(V).length>0){A.citDomainTrend=V;const I=y.map(L=>L.label).filter(L=>Object.values(V).some(z=>z.months[L]>0));A.citDomainMonths=I}return B&&(A.citDomainByLlm=B),_&&(A.citDomainByLlmTrend=_),A}function Ro(t,e){const o=io(t,[/^type$/,/^(county|country)$/]);if(o<0)return Kt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(b=>b==null?void 0:b.slice(0,6))});const i=t[o];let a=-1,r=-1,l=-1,c=-1,h=4;for(let b=0;b<i.length;b++){const D=String(i[b]||"").split(/\n/)[0].trim().toLowerCase();D==="type"&&a<0&&(a=b),(D==="county"||D==="country")&&r<0&&(r=b),(D==="topic"||D==="topoc")&&l<0&&(l=b),D==="brand"&&c<0&&(c=b)}l<0&&(l=2,Kt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:i.slice(0,6)})),h=Math.max(a,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,m=/^w\d+/i,u=[],d=[o];for(let b=0;b<=o;b++)b!==o&&d.push(b);for(const b of d){if(u.length>0)break;const D=t[b];if(D)for(let P=h;P<D.length;P++){const N=String(D[P]||"").split(/\n/)[0].trim();N&&(x.test(N)||m.test(N))&&u.push({col:P,label:N})}}const p=t.slice(o+1),k=[];p.forEach(b=>{if(!b)return;const D=String(b[a]||"").trim(),P=se(b[r]),N=String(b[l]||"").trim(),V=String(b[c]||"").trim();if(!N||!V)return;const B={};let _=0;u.forEach(({col:H,label:$})=>{const q=te(b[H]);q>0&&(B[$]=q,_=q)}),(Object.keys(B).length>0||N)&&k.push({type:D,country:P,topic:N,brand:V,scores:B,latestScore:_})});const v=e==="weekly"?"weeklyPR":"monthlyPR",y=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return k.length>0&&(w[v]=k),u.length>0&&(w[y]=u.map(b=>b.label)),w}function jo(t,e){const o=t.findIndex(w=>w?w.some(b=>/steakholders|stakeholders/i.test(String(b||"").trim()))||w.some(b=>/^type$/i.test(String(b||"").trim()))&&w.some(b=>/topoc|topic/i.test(String(b||"").trim())):!1);if(o<0)return Kt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const i=t[o];let a=-1,r=-1,l=-1,c=-1,h=4;for(let w=0;w<i.length;w++){const b=String(i[w]||"").trim().toLowerCase();(b==="steakholders"||b==="stakeholders")&&a<0&&(a=w),b==="type"&&r<0&&(r=w),(b==="country"||b==="county")&&l<0&&(l=w),(b==="topoc"||b==="topic")&&c<0&&(c=w)}h=Math.max(a,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,m=/^w\d+/i,u=[];for(let w=h;w<i.length;w++){const b=String(i[w]||"").split(/\n/)[0].trim();b&&(x.test(b)||m.test(b))&&u.push({col:w,label:b})}const d=t.slice(o+1),p=[];d.forEach(w=>{if(!w)return;const b=String(w[a]||"").trim(),D=String(w[r]||"").trim(),P=se(w[l]),N=String(w[c]||"").trim();if(!N||!b)return;const V={};let B=0;u.forEach(({col:_,label:H})=>{const $=te(w[_]);$>0&&(V[H]=$,B=$)}),p.push({stakeholder:b,type:D,country:P,topic:N,scores:V,latestScore:B})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",v=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",y={};return p.length>0&&(y[k]=p),u.length>0&&(y[v]=u.map(w=>w.label)),y}const le={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0},Dr={"IN|DW":!0};function Or(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const e=io(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,p)=>console.log(`  row${p}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const o=t[e];let i=-1,a=-1,r=-1;for(let d=0;d<o.length;d++){const p=String(o[d]||"").trim().toLowerCase();i<0&&(p==="country"||p==="county")&&(i=d),a<0&&(p==="category"||p==="product"||p==="제품"||p==="카테고리")&&(a=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(p)&&(r=d)}if(i<0||a<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const l=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),c={...le};let h=0,x=0,m=0;t.slice(e+1).forEach((d,p)=>{const k=e+1+p;try{if(!d){m++;return}const v=String(d[r]||"").trim();if(!v){m++;return}h++;const y=v.toLowerCase().replace(/\s+/g," ");if(!l.has(y)&&!l.has(y.replace(/\s/g,"")))return;const w=Er(d[i]),b=String(d[a]||"").trim();if(!w||!b){console.warn("[parseUnlaunched] row skipped",{rowIdx:k,raw:{country:d[i],category:d[a],status:d[r]},parsed:{country:w,rawCategory:b}}),m++;return}const D=b.toUpperCase(),P=je[D]||D;c[`${w}|${P}`]=!0,P!==D&&(c[`${w}|${D}`]=!0),x++}catch(v){let y;try{y={country:d==null?void 0:d[i],category:d==null?void 0:d[a],status:d==null?void 0:d[r]}}catch{y=d}console.warn("[parseUnlaunched] row error",{rowIdx:k,raw:y,error:v==null?void 0:v.message}),m++}});let u=0;return Object.keys(Dr).forEach(d=>{const[p,k]=d.split("|");[k,...Object.keys(je).filter(v=>je[v]===k)].forEach(v=>{c[`${p}|${v}`]&&(delete c[`${p}|${v}`],u++)})}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(le).length}건 + 강제출시 제거 ${u}건 + skip ${m}건 / 총행 ${h} / 최종키 ${Object.keys(c).length}개`),{unlaunchedMap:c}}function Nr(t){const e=io(t,[/^bu$/,/topic/]);if(e<0)return Kt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const o=t[e];let i=-1,a=-1,r=-1,l=-1,c=-1;for(let m=0;m<o.length;m++){const u=String(o[m]||"").trim().toLowerCase();i<0&&u==="bu"&&(i=m),a<0&&u.includes("topic")&&u.includes("대시보드")&&(a=m),r<0&&(u==="explanation"||u==="설명")&&(r=m),l<0&&u.includes("기존")&&(l=m),c<0&&u.includes("topic")&&u.includes("row")&&(c=m)}a<0&&(a=1),r<0&&(r=2);const h=[];let x="";return t.slice(e+1).forEach(m=>{if(!m)return;const u=String(m[i]||"").trim();u&&(x=u);const d=String(m[a]||"").trim();if(!d)return;const p=String(m[r]||"").trim(),k=l>=0?String(m[l]||"").trim():"",v=c>=0?String(m[c]||"").trim():"";h.push({bu:x,topic:d,explanation:p,oldTopic:k,topicRow:v})}),h.length>0?{prTopicList:h}:{}}function _r(t,e){var o;if(!kr(e,`parseSheetRows:${t}`))return{};try{if(t===Ot.meta)return Cr("parseSheetRows","meta 시트 무시 — 문구는 서버 기본값 사용"),{};if(t===Ot.visSummary)return Ar(e);if(t===Ot.productMS||t===Ot.productHS||t===Ot.productES)return Lr(e);if(t===Ot.weeklyMS)return qe(e,"MS");if(t===Ot.weeklyHS)return qe(e,"HS");if(t===Ot.weeklyES)return qe(e,"ES");if(t===Ot.monthlyPR)return Ro(e,"monthly");if(t===Ot.weeklyPR)return Ro(e,"weekly");if(t===Ot.monthlyBrandPrompt)return jo(e,"monthly");if(t===Ot.weeklyBrandPrompt)return jo(e,"weekly");if(t===Ot.citPageType)return jr(e);if(t===Ot.citTouchPoints)return Pr(e);if(t===Ot.citDomain)return Mr(e);if(t===Ot.unlaunched)return Or(e);if(t===Ot.prTopicList)return Nr(e)}catch(i){return to(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Kt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(Ot)})}function zr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Gr(t,e){var u;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const r=await a.text(),l=await nn(),c=l.read(r,{type:"string"}),h=c.Sheets[c.SheetNames[0]],x=l.utils.sheet_to_json(h,{header:1,defval:""}),m=r.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${r.length}자/${m}줄 → ${x.length}행 × ${((u=x[0])==null?void 0:u.length)??0}컬럼`),x}async function Ur(t,e){var r,l;const o=Object.values(Ot),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(c=>Gr(t,c).then(h=>({name:c,rows:h}))));for(let c=0;c<o.length;c++){const h=o[c],x=a[c];if(e==null||e(`"${h}" 처리 중... (${c+1}/${o.length})`),x.status==="rejected"){console.warn(`"${h}" 시트 건너뜀:`,(r=x.reason)==null?void 0:r.message);continue}try{const{rows:m}=x.value,u=_r(h,m);for(const[d,p]of Object.entries(u))d==="weeklyLabels"||d==="weeklyLabelsFull"?i[d]||(i[d]=p):Array.isArray(p)&&Array.isArray(i[d])?i[d]=[...i[d],...p]:p&&typeof p=="object"&&!Array.isArray(p)&&i[d]&&typeof i[d]=="object"&&!Array.isArray(i[d])?i[d]={...i[d],...p}:i[d]=p}catch(m){console.warn(`"${h}" 시트 처리 실패:`,m.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const c=[];for(const[h,x]of Object.entries(i.weeklyAll)){const m=x.Total||x.TTL||{},u=m.LG||m.lg||[],d=Object.entries(m).filter(([w])=>w!=="LG"&&w!=="lg"),p=u.length?u[u.length-1]:0,k=u.length>=5?u[0]:0;let v="",y=0;for(const[w,b]of d){const D=b.length?b[b.length-1]:0;D>y&&(y=D,v=w)}p>0&&c.push({id:h,bu:qo[h]||"HS",kr:Pe[h]||h,category:h,date:((l=i.meta)==null?void 0:l.period)||"",score:p,prev:k,vsComp:y,compName:v,allScores:{LG:p,...v?{[v]:y}:{}}})}if(c.length&&(i.productsPartial=c,console.log(`[SYNC] weeklyAll에서 ${c.length}개 제품 생성:`,c.map(h=>`${h.id}=${h.score}`).join(", "))),!i.productsCnty){const h=[];for(const[x,m]of Object.entries(i.weeklyAll)){const u=Pe[x]||x;for(const[d,p]of Object.entries(m)){if(d==="Total"||d==="TTL")continue;const k=p.LG||p.lg||[],v=k.length?k[k.length-1]:0;if(v<=0)continue;const y=k.length>=2?k[0]:0;let w="",b=0;const D={LG:v};for(const[N,V]of Object.entries(p)){if(N==="LG"||N==="lg")continue;const B=V.length?V[V.length-1]:0;D[N]=B,B>b&&(b=B,w=N)}const P=+(v-b).toFixed(1);h.push({product:u,country:d,score:v,prev:y,compName:w,compScore:b,gap:P,allScores:D})}}h.length&&(i.productsCnty=h,console.log(`[SYNC] weeklyAll에서 productsCnty ${h.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((h,x)=>h===`W${x+1}`)){const h=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(x=>String(x).split(/\n/)[0].trim().toUpperCase()).filter(x=>/^W\d+/.test(x));if(h.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",h),i.weeklyLabels=h;const x=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(m=>{const u=String(m).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(m=>/^W\d+/.test(m));x.length&&(i.weeklyLabelsFull=x)}}if(i._syncIssues=Sr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const c=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");c.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(c.slice(0,10)))}catch{}return i}const Ft={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:T,outline:"none",boxSizing:"border-box"};function Hr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Vr({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,r=a?"#1E293B":o?"#7F1D1D":"#064E3B",l=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",c=a?"#334155":o?"#B91C1C":"#047857",h=a?"○":o?"⚠️":"●",x=a?"동기화 정보 없음":`데이터 최신화: ${Hr(e)}`,m=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:m,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:l,border:`1px solid ${c}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:T,whiteSpace:"nowrap",...i||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:h}),x]})}function Wr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const qt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",ee="#CF0652",ce="#94A3B8",Oe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},an={LG:ee,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Po=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],eo={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Kr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Ne={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},qr={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Jr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},ao=90;function so(t,e){const o=Oe[e]||Oe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function Yr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Xr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function oo(t){const e=String(t||"").trim().toUpperCase();return Ne[e]||t}function Zr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?qr[o]||Ne[o]||t:Jr[o]||Ne[o]||t}let Qr=0;function Mo(t,e,o,i,a,r={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const l=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,c=r.baselineLabel||"",h=r.labelOffsetY||0,x=r.lineOffsetY||0,m=Qr++,u={t:18,r:10,b:20,l:10},d=o-u.l-u.r,p=i-u.t-u.b,k=t.filter($=>$!=null);if(!k.length){let $=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const q=t.length,A=q>1?q-1:1;return $+=t.map((I,L)=>`<text x="${(u.l+L/A*d).toFixed(1)}" y="${u.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[L]||""}</text>`).join(""),$+="</svg>",$}const v=Math.min(...k)-1,y=Math.max(...k)+1,w=y-v||1,b=t.length,D=b>1?b-1:1,P=t.map(($,q)=>u.l+q/D*d),N=[];t.forEach(($,q)=>{$!=null&&N.push({x:P[q],y:u.t+(1-($-v)/w)*p,v:$,idx:q})});let V=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const B=l>0?N.filter($=>$.idx<l):[],_=l>0?N.filter($=>$.idx>=l):N,H="#64748B";if(_.length>=2){const $=_.map((A,I)=>`${I?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),q=$+` L${_[_.length-1].x.toFixed(1)},${u.t+p} L${_[0].x.toFixed(1)},${u.t+p} Z`;V+=`<defs><linearGradient id="lg${m}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,V+=`<path d="${q}" fill="url(#lg${m})"/>`,V+=`<path d="${$}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(B.length>=2){const $=B.map((q,A)=>`${A?"L":"M"}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(" ");V+=`<path d="${$}" stroke="${H}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(V+=N.map($=>{const q=l>0&&$.idx<l;return l>0&&$.idx===l?`<circle cx="${$.x.toFixed(1)}" cy="${$.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${$.x.toFixed(1)}" cy="${$.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${q?H:a}" stroke-width="2" opacity="${q?.85:1}"/>`}).join(""),V+=N.map($=>{const A=l>0&&$.idx<l?H:a;return`<text x="${$.x.toFixed(1)}" y="${Math.max($.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${qt}">${$.v.toFixed(1)}</text>`}).join(""),l>0&&c){const $=P[l];V+=`<line x1="${$.toFixed(1)}" y1="${(u.t+x).toFixed(1)}" x2="${$.toFixed(1)}" y2="${(u.t+p+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const q=$>o*.7,A=(q?u.t+p+1:u.t+8)+h;V+=`<text x="${(q?$-5:$+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${q?"end":"start"}" font-size="9" fill="#64748B" font-family="${qt}">${c}</text>`}return V+=t.map(($,q)=>`<text x="${P[q].toFixed(1)}" y="${u.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${qt}">${e[q]||""}</text>`).join(""),V+="</svg>",V}function Ee(t,e){return an[t]||Po[e%Po.length]}function sn(t,e,o,i,a={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const l=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,c=a.baselineLabel||"";let h=1/0,x=-1/0;if(r.forEach(b=>(t[b]||[]).forEach(D=>{D!=null&&(D<h&&(h=D),D>x&&(x=D))})),!isFinite(h))return"";const m=Math.max((x-h)*.15,2);h=Math.max(0,h-m),x=Math.min(100,x+m);const u=x-h||1,d=e.length,p=8,k=8,v=i-p-k,y="#64748B";let w="";for(let b=0;b<=4;b++){const D=p+b/4*v;w+=`<line x1="0" y1="${D.toFixed(1)}" x2="${o}" y2="${D.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((b,D)=>{const P=t[b]||[],N=Ee(b,D),V=b==="LG",B=V?2.5:1.5,_=V?1:.7,H=[];if(P.forEach((I,L)=>{if(I==null)return;const z=(L+.5)/d*o,K=p+(1-(I-h)/u)*v;H.push({x:z,y:K,v:I,idx:L})}),!H.length)return;const $=l>0?H.filter(I=>I.idx<l):[],q=l>0?H.filter(I=>I.idx>=l):H;function A(I,L,z,K){if(I.length>=2){const ot=I.map((nt,f)=>`${f?"L":"M"}${nt.x.toFixed(1)},${nt.y.toFixed(1)}`).join(" ");w+=`<path d="${ot}" stroke="${L}" fill="none" stroke-width="${B}" stroke-linecap="round" stroke-linejoin="round" opacity="${z}"/>`}I.forEach(ot=>{K&&ot.idx===l||(w+=`<circle cx="${ot.x.toFixed(1)}" cy="${ot.y.toFixed(1)}" r="${V?3.5:2.5}" fill="#fff" stroke="${L}" stroke-width="${V?2:1.5}" opacity="${z}"/>`)})}if(A($,y,.85,!1),A(q,N,_,V&&l>0),V&&l>0){const I=H.find(L=>L.idx===l);I&&(w+=`<circle cx="${I.x.toFixed(1)}" cy="${I.y.toFixed(1)}" r="4.5" fill="#000" stroke="${N}" stroke-width="3"/>`)}}),l>0&&c){const b=(l+.5)/d*o;w+=`<line x1="${b.toFixed(1)}" y1="${p}" x2="${b.toFixed(1)}" y2="${p+v}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const D=b>o*.7;w+=`<text x="${(D?b-5:b+5).toFixed(1)}" y="${(p+12).toFixed(1)}" text-anchor="${D?"end":"start"}" font-size="11" fill="#64748B" font-family="${qt}">${c}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function ti({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:a,monthlyVis:r,total:l,meta:c,wLabels:h}){const x={monthlyVis:r};return`
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
    // 경쟁비 업데이트 — 실제값 그대로 (120 캡 제거: 서버 첫 렌더·뉴스레터와 수치 일치, 바 폭만 시각 클램프)
    var compEl=card.querySelector('.prod-comp-pct');
    if(compEl&&!isNaN(ratio))compEl.textContent=Math.round(ratio)+'%';
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
${(()=>{const m=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?m(e):"{}"};
var _products=${m(o.map(u=>({id:u.id,bu:u.bu,kr:u.kr,en:u.en||u.kr,category:u.category||"",date:u.date||"",status:u.status,score:u.score||0,prev:u.prev||0,vsComp:u.vsComp||0,compName:u.compName||"",compRatio:u.compRatio||0,allScores:u.allScores||{},monthlyScores:u.monthlyScores||[]})))};
var _productsCnty=${m(i||[])};
var _unlaunchedMap=${m(a)};
var _PROD_TO_UL=${m(Ae)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${m((x==null?void 0:x.monthlyVis)||[])};
var _total=${m(l)};
var _meta={period:${m(c.period||"")},reportNo:${m(c.reportNo||"")},totalInsight:${m(c.totalInsight||"")}};
var _wLabels=${m(h)};`})()}
${(()=>{const m=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${m(an)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${ee}';
var _FONT=${m(qt)};
var _COMP='${ce}';
var _REGIONS=${m(Object.fromEntries(Object.entries(eo).map(([u,d])=>[u,d.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(eo).map(([m,u])=>[m,t==="en"?u.labelEn:u.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${ao};

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
`}const ei=["audio","rac","aircare"];function oi(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return ei.includes(String(e).toLowerCase())}function ni(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function _e(t,e){if(!oi(t)||!e)return-1;const o=ni(t);if(o>0){const i=e.findIndex(a=>{const r=String(a||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const a=String(i||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const ze={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function ri(t){const e=ze[t]||ze.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function ln(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=ze[e]||ze.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function ii(t,e,o,i,a,r,l){if(!e||!Object.keys(e).length)return"";const h=["MS","HS","ES"].map(x=>{const m=t.filter(d=>d.bu===x);if(!m.length)return"";const u=m.map(d=>{var $,q;const p=(($=e[d.id])==null?void 0:$.Total)||{},k=Object.keys(p).sort((A,I)=>{var K,ot;if(A==="LG")return-1;if(I==="LG")return 1;const L=((K=p[A])==null?void 0:K[p[A].length-1])||0;return(((ot=p[I])==null?void 0:ot[p[I].length-1])||0)-L});if(!k.length)return"";const v=so(d.status,a),y=(q=p.LG)==null?void 0:q[p.LG.length-1],w=k.map((A,I)=>{const L=Ee(A,I),z=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${L};opacity:${z?1:.7}"></i><span style="font-size:13px;color:${z?"#1A1A1A":"#94A3B8"};font-weight:${z?700:400}">${A}</span></span>`}).join(""),b=o.length,D=`<colgroup><col style="width:${ao}px">${o.map(()=>"<col>").join("")}</colgroup>`,P=_e(d,o),N=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:8px 0;border:0">${sn(p,o,b*80,180,{fadeBeforeIdx:P,baselineLabel:P>0?"*Baseline 재설정":""})}</td></tr>`,V=`<tr><td style="padding:0;border:0"></td><td colspan="${b}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,B=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,_=k.map((A,I)=>{const L=Ee(A,I),z=A==="LG",K=o.map((ot,nt)=>{var Y;const f=(Y=p[A])==null?void 0:Y[nt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${f!=null?z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${f!=null?f.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${z?"#FFF8F9":I%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${z?700:500};color:${L};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${L};margin-right:4px;vertical-align:0"></i>${A}</td>${K}</tr>`}).join(""),H=lo(d.id||d.category,r);return`<div class="trend-row${H?" is-unlaunched":""}" data-prodid="${d.id||d.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${co(d,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${H?"#F1F5F9":v.bg};color:${H?"#64748B":v.color};border:1px solid ${H?"#CBD5E1":v.border}">${H?a==="en"?"Unlaunched":"미출시":v.label}</span>
          ${y!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${y.toFixed(1)}%</span>`:""}
          ${d.compName?`<span style="font-size:14px;color:#94A3B8">vs ${d.compName} ${d.compRatio!=null&&d.compRatio!==""?Math.round(d.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${D}<tbody>${N}${V}${B}${_}</tbody></table></div>
        ${ln(d,a)}
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${u}
    </div>`:""}).join("");return h.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${l||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${h}</div>
  </div>`:""}function ai(t,e,o,i,a,r){if(!e||!e.length)return"";const l=["MS","HS","ES"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(p){const k=String(p||""),v=k.match(/(\d{1,2})월/);if(v)return parseInt(v[1])-1;const y=k.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(y)return h[y[1].toLowerCase()];const w=k.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const m=[0,1,2,3,4,5,6,7,8,9,10,11],u=c.slice(),d=l.map(p=>{const k=t.filter(y=>y.bu===p);if(!k.length)return"";const v=k.map(y=>{const w=y.monthlyScores||[];let b={};if(w.length>=2){const z=new Set;if(w.forEach(K=>{K.allScores&&Object.keys(K.allScores).forEach(ot=>z.add(ot))}),z.forEach(K=>{b[K]=m.map(ot=>{var f;const nt=w.find(Y=>x(Y.date)===ot);return((f=nt==null?void 0:nt.allScores)==null?void 0:f[K])??null})}),!z.size&&(b.LG=m.map(K=>{const ot=w.find(nt=>x(nt.date)===K);return ot?ot.score:null}),y.vsComp>0)){const K=m.map(ot=>{const nt=w.find(f=>x(f.date)===ot);return(nt==null?void 0:nt.comp)??null});K.some(ot=>ot!=null)&&(b[y.compName||"Comp"]=K)}}else{const z=e.filter(f=>f.division===p&&(f.country==="TOTAL"||f.country==="TTL")),K={};z.forEach(f=>{const Y=x(f.date);Y>=0&&(K[Y]=f)});const ot=m.map(f=>{var Y;return((Y=K[f])==null?void 0:Y.lg)||null}),nt=m.map(f=>{var Y;return((Y=K[f])==null?void 0:Y.comp)||null});b={LG:ot},nt.some(f=>f!=null&&f>0)&&(b.Samsung=nt)}const D=Object.keys(b).sort((z,K)=>{if(z==="LG")return-1;if(K==="LG")return 1;const ot=(b[z]||[]).filter(f=>f!=null).pop()||0;return((b[K]||[]).filter(f=>f!=null).pop()||0)-ot});if(!D.length)return"";const P=so(y.status,i),N=(b.LG||[]).filter(z=>z!=null).pop(),V=D.map((z,K)=>{const ot=Ee(z,K),nt=z==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${ot};opacity:${nt?1:.7}"></i><span style="font-size:13px;color:${nt?"#1A1A1A":"#94A3B8"};font-weight:${nt?700:400}">${z}</span></span>`}).join(""),B=u.length,_=`<colgroup><col style="width:${ao}px">${u.map(()=>"<col>").join("")}</colgroup>`,H=_e(y,u),$=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:8px 0;border:0">${sn(b,u,B*80,180,{fadeBeforeIdx:H,baselineLabel:H>0?"*Baseline 재설정":""})}</td></tr>`,q=`<tr><td style="padding:0;border:0"></td><td colspan="${B}" style="padding:4px 0 6px;border:0">${V}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${u.map(z=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${z}</th>`).join("")}</tr>`,I=D.map((z,K)=>{const ot=Ee(z,K),nt=z==="LG",f=u.map((Y,G)=>{var S;const ft=(S=b[z])==null?void 0:S[G];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${ft!=null?nt?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${nt?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${ft!=null?ft.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${nt?"#FFF8F9":K%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${nt?700:500};color:${ot};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${ot};margin-right:4px;vertical-align:0"></i>${z}</td>${f}</tr>`}).join(""),L=lo(y.id||y.category,a);return`<div class="trend-row${L?" is-unlaunched":""}" data-prodid="${y.id||y.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${co(y,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${L?"#F1F5F9":P.bg};color:${L?"#64748B":P.color};border:1px solid ${L?"#CBD5E1":P.border}">${L?i==="en"?"Unlaunched":"미출시":P.label}</span>
          ${N!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${N.toFixed(1)}%</span>`:""}
          ${y.compName?`<span style="font-size:14px;color:#94A3B8">vs ${y.compName} ${y.compRatio!=null&&y.compRatio!==""?Math.round(y.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${qt}">${_}<tbody>${$}${q}${A}${I}</tbody></table></div>
        ${ln(y,i)}
      </div>`}).join("");return v?`<div class="bu-group" data-bu="${p}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${p}</span></div>
      ${v}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${u[0]}–${u[u.length-1]} (${u.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function cn(){return""}function Do(t,e,o,i,a){const r=+(t.score-t.prev).toFixed(1),l=t.vsComp||0,c=+(t.score-l).toFixed(1),h=r>0?"▲":r<0?"▼":"─",x=r>0?"#22C55E":r<0?"#EF4444":"#94A3B8",m=l>0?Math.round(t.score/l*100):null,u=m==null?"#94A3B8":m>=100?"#22C55E":m>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
        ${m!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${i==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${u}">${m}%</span>
          <span class="hero-compratio-sub">${i==="en"?"vs Samsung":"삼성 대비"}</span>
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
            <div class="hero-gauge-bar" style="width:${Math.min(l,100)}%;background:${ce}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${ee}"></i> LG ${t.score}%</span>
            ${l>0?`<span><i style="background:${ce}"></i> Samsung ${l}%</span>`:""}
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
  </div>`}function Se(t,e){const o=Ae[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function lo(t,e){return Kr.every(o=>{const i=Ae[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function co(t,e){return Se(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Oo(t,e,o,i,a,r,l,c,h){if(!t.length)return"";const m=["MS","HS","ES"].map(u=>{const d=t.filter(k=>k.bu===u);if(!d.length)return"";const p=d.map(k=>{var ct,xt;const v=k.weekly||[],y=v.filter(dt=>dt!=null),w=k.weeklyScore||(y.length>0?y[y.length-1]:k.score),b=k.monthlyScore||k.score,D=w,P=((ct=c==null?void 0:c[k.id])==null?void 0:ct.Total)||((xt=c==null?void 0:c[k.id])==null?void 0:xt.TTL)||{};let N=0;Object.entries(P).forEach(([dt,ht])=>{if(dt==="LG"||dt==="lg")return;const O=Array.isArray(ht)&&ht.length?ht[ht.length-1]:0;O>N&&(N=O)});const V=k.vsComp||0,B=N>0?w/N*100:V>0?w/V*100:100,_=V>0?b/V*100:100,H=Math.round(B),$=Math.round(_),q=H,A=B>=100?"lead":B>=80?"behind":"critical",I=so(A,i),L=y.length>=1?y[y.length-1]:null,z=y.length>=2?y[y.length-2]:null,K=L!=null&&z!=null?+(L-z).toFixed(1):null,ot=K>0?"▲":K<0?"▼":"─",nt=K>0?"#22C55E":K<0?"#EF4444":"#94A3B8",f=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],G={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ft(dt){const ht=String(dt||""),O=ht.match(/(\d{1,2})월/);if(O)return parseInt(O[1])-1;const rt=ht.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(rt)return G[rt[1].toLowerCase()];const Z=ht.match(/\d{4}[-\/](\d{1,2})/);return Z?parseInt(Z[1])-1:-1}let S=k.monthlyScores||[];if(S.length<2&&l.length>0){const dt=l.filter(O=>O.division===k.bu&&(O.country==="TOTAL"||O.country==="TTL")),ht={};dt.forEach(O=>{const rt=ft(O.date);rt>=0&&(ht[rt]={date:O.date,score:O.lg,comp:O.comp})}),S=Object.keys(ht).sort((O,rt)=>O-rt).map(O=>ht[O])}const C=S.length>0?S.map(dt=>{const ht=ft(dt.date);return ht>=0?Y[ht]:dt.date}):["M-3","M-2","M-1","M0"],F=S.length>0?S.map(dt=>dt.score):[null,null,null,k.score],M=S.length>=2?+(S[S.length-1].score-S[S.length-2].score).toFixed(1):null,E=M>0?"▲":M<0?"▼":"─",U=M>0?"#22C55E":M<0?"#EF4444":"#94A3B8",yt=q,wt=yt>=100?"#15803D":yt>=80?"#D97706":"#BE123C",mt=k.weeklyPrev||(y.length>=5?y[y.length-5]:y[0]||0),bt=w&&mt?+(w-mt).toFixed(1):null,Ct=b&&(k.monthlyPrev||k.prev)?+(b-(k.monthlyPrev||k.prev)).toFixed(1):null,St=Se(k.id||k.category,r),j=lo(k.id||k.category,r),at=j?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:I;return`<div class="prod-card${j?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${w.toFixed(1)}" data-ms="${b.toFixed(1)}" data-wr="${H}" data-mr="${$}" data-wmom="${bt??""}" data-mmom="${Ct??""}" style="border-color:${at.border}">
        <div class="prod-head">
          <span class="prod-name">${co(k,r)}</span>
          ${St.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${at.bg};color:${at.color};border-color:${at.border}">${at.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${D.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${nt}">${K!=null?`WoW ${ot} ${Math.abs(K).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${U}">${M==null?"MoM —":`MoM ${E} ${Math.abs(M).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const dt=a.slice(-10),ht=_e(k,dt),O=String(k.id||"").toLowerCase(),rt=O==="aircare"?30:O==="rac"?20:0;return Mo(v.slice(-10),dt,300,90,f,{fadeBeforeIdx:ht,baselineLabel:ht>0?"*Baseline 재설정":"",labelOffsetY:rt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const dt=_e(k,C),O=String(k.id||"").toLowerCase()==="audio";return Mo(F,C,300,90,f,{fadeBeforeIdx:dt,baselineLabel:dt>0?"*Baseline 재설정":"",labelOffsetY:O?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(yt,120)}%;background:${wt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${wt}">${yt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${u}">
      <div class="bu-header"><span class="bu-label">${u}</span><span class="bu-count">${d.length}${o.categories}</span></div>
      <div class="prod-grid">${p}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${h||""}${h?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${cn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${m}${(()=>{const u=t.filter(d=>Se(d.id||d.category,r).length>0).map(d=>`${(d.id||"").toLowerCase()==="audio"||d.kr==="오디오"?"Audio-Sound Suite":d.kr}: ${Se(d.id||d.category,r).map(p=>Zr(p,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:"")+ri(i)})()}</div>
  </div>`}function No(t,e,o,i){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),l=Ae[r]||(r||"").toUpperCase(),c=i&&i[`${t.country}|${l}`],h=Xr(t.score,t.compScore),x=c?"#94A3B8":h==="lead"?"#15803D":h==="behind"?"#D97706":"#BE123C",m=+(t.score-t.compScore).toFixed(1),u=c?"#64748B":m>=0?"#15803D":"#BE123C",d=130,p=["TCL","HISENSE","HAIER"];let k="",v=0;t.allScores&&Object.entries(t.allScores).forEach(([_,H])=>{const $=String(_).toUpperCase();p.some(A=>$.includes(A))&&H>v&&(k=_,v=H)});const y=Math.max(e,v),w=c?1:t.score,b=Math.max(3,Math.round(w/y*d)),D=t.compScore>0?Math.max(3,Math.round(t.compScore/y*d)):0,P=v>0?Math.max(3,Math.round(v/y*d)):0,N="#9333EA",V=c?"—":t.score.toFixed(1),B=c?"—":`${m>=0?"+":""}${m}%p`;return`<div class="vbar-item${c?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${V}</span>
        <div class="vbar-col" style="height:${b}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ce}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${D}px;background:${ce}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${v>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${N}">${v.toFixed(1)}</span>
        <div class="vbar-col" style="height:${P}px;background:${N}"></div>
        <span class="vbar-col-name" style="color:${N}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${u}">${B}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function _o(t,e,o,i,a,r){if(!t||!t.length)return"";const l=new Map;t.forEach(p=>{l.has(p.product)||l.set(p.product,[]),l.get(p.product).push(p)});const c=e.cntyProductFilter||{},h=[...l.entries()].filter(([p])=>c[p]!==!1).map(([p,k])=>{const v=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),y=k.map(w=>No(w,v,oo(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${p}"><div class="bu-header"><span class="bu-label">${p}</span></div><div class="vbar-chart">${y}</div></div>`}).join(""),x=new Map;t.forEach(p=>{x.has(p.country)||x.set(p.country,[]),x.get(p.country).push(p)});const m=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],d=m.filter(p=>x.has(p)).concat([...x.keys()].filter(p=>!m.includes(p))).map(p=>{const k=x.get(p);if(!k)return"";const v=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),y=k.map(w=>No(w,v,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${p}"><div class="bu-header"><span class="bu-label">${oo(p)}</span></div><div class="vbar-chart">${y}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ce}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${cn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${d}</div>
      <div class="cnty-view-product" style="display:none">${h}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const p={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},v=[...new Set(t.map(y=>y.product))].map(y=>{const w=p[y]||String(y).toLowerCase(),b=Se(w,a),D=w==="audio"?"Audio-Sound Suite":y;return b.length?`${D}: ${b.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return v.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${v.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const zo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function si(t){const e=zo[t]||zo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Go(t,e,o,i,a,r="weekly"){const l=r==="monthly",c=l?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let x;l?x=e&&e.length?e.slice():[]:x=e&&e.length?e.slice(-12):[];const m=[...new Set(t.map(A=>A.topic))].filter(Boolean),u=[...new Set(t.map(A=>A.type))].filter(Boolean),d=[...new Set(t.map(A=>A.country))].filter(A=>A&&A!=="TTL"),p=h.filter(A=>d.includes(A)).concat(h.filter(A=>!d.includes(A))),k=JSON.stringify(t).replace(/</g,"\\u003c"),v=JSON.stringify(x),y=JSON.stringify(m),w=JSON.stringify(u),b=JSON.stringify(p),D=72;function P(A){const I={};return A&&String(A).split(`
`).forEach(L=>{const z=L.indexOf("=");if(z>0){const K=L.slice(0,z).trim(),ot=L.slice(z+1).trim();K&&(I[K]=ot)}}),I}const N=P(i==null?void 0:i.prTopicPromptsRaw),V=(a==null?void 0:a.prTopicList)||[],B={},_={};V.forEach(A=>{[A.topic,A.topicRow,A.oldTopic].filter(Boolean).map(L=>L.trim()).forEach(L=>{A.explanation&&!B[L]&&(B[L]=A.explanation),A.bu&&!_[L]&&(_[L]=A.bu)})});const $={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...B,...P(i==null?void 0:i.prTopicDescsRaw)},q={};return m.forEach(A=>{const I=_[A];if(I)q[A]=I;else{const L=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];q[A]=L.some(z=>A.toLowerCase().includes(z.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
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
      <span style="font-size:15px;color:#fff;line-height:1.8">${(i==null?void 0:i.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
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
    var CW=${D};
    var TOPIC_CAT=${JSON.stringify(q)};
    var TOPIC_PROMPT=${JSON.stringify(N).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify($).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(V).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Ne)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${ee}',COMP='${ce}';
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
    // ── 국가 필터 집계 헬퍼 — 부분 선택 시 선택 국가 평균(null-aware)으로 재집계 ──
    function allSel(){return CN.every(function(c){return fCnty[c]})}
    function selCntys(){return CN.filter(function(c){return fCnty[c]})}
    // 토픽×브랜드의 주차별 선택 국가 평균 시리즈
    function aggSeries(topic,brand,cntys){
      return W.map(function(wk){
        var sum=0,cnt=0;
        cntys.forEach(function(cn){var v=val(topic,cn,brand,wk);if(v!=null){sum+=v;cnt++}});
        return cnt?Math.round(sum/cnt*10)/10:null;
      });
    }
    // 토픽×브랜드의 최신(뒤에서부터) 선택 국가 평균
    function aggLatest(topic,brand,cntys){
      for(var i=W.length-1;i>=0;i--){
        var sum=0,cnt=0;
        cntys.forEach(function(cn){var v=val(topic,cn,brand,W[i]);if(v!=null){sum+=v;cnt++}});
        if(cnt)return sum/cnt;
      }
      return null;
    }
    // 토픽의 1위 경쟁사 (LG 제외) — TTL 최신값 최고, TTL 없으면 국가 최신값 최댓값
    function topCompFor(topic){
      var brands={};
      D.forEach(function(x){if(x.topic===topic&&x.type===fType&&x.brand&&x.brand!=='LG')brands[x.brand]=1});
      var best=null,bestV=-1;
      var partial=!allSel(),ac=selCntys();
      Object.keys(brands).forEach(function(b){
        var v;
        if(partial){
          v=aggLatest(topic,b,ac);  // 부분 국가 선택: 선택 국가 평균 기준
        }else{
          v=lastVal(topic,'TTL',b);
          if(v==null){CN.forEach(function(c){var cv=lastVal(topic,c,b);if(cv!=null&&(v==null||cv>v))v=cv})}
        }
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
        var allOn=allSel();
        var brands,chartData={};
        if(allOn){
          // 전체 선택: strict TTL 행만 (design rule — 다른 국가 합산 X)
          var ttl=D.filter(function(r){return r.topic===topic&&r.country==='TTL'&&r.type===fType});
          if(!ttl.length)return;
          var brandMap={};
          ttl.forEach(function(r){if(!brandMap[r.brand])brandMap[r.brand]={}; W.forEach(function(wk){if(r.scores[wk]!=null){brandMap[r.brand][wk]=r.scores[wk]}})});
          brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
          brands.forEach(function(b){chartData[b]=W.map(function(wk){return brandMap[b][wk]!=null?brandMap[b][wk]:null})});
        }else{
          // 부분 국가 선택: 선택 국가 행을 평균 재집계 → 차트·표1 도 필터 반영
          var selRows=D.filter(function(r){return r.topic===topic&&ac.indexOf(r.country)>=0&&r.type===fType});
          if(!selRows.length)return;
          var brandSet={};
          selRows.forEach(function(r){if(r.brand)brandSet[r.brand]=1});
          brands=Object.keys(brandSet).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
          brands.forEach(function(b){chartData[b]=aggSeries(topic,b,ac)});
        }
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
        var t1Label=allOn?'${o==="en"?"Overall (TTL)":"전체 (TTL)"}':'${o==="en"?"Selected countries avg":"선택 국가 평균"} ('+ac.length+')';
        html+='<div style="font-size:14px;font-weight:700;color:#64748B;margin:4px 0 2px">'+t1Label+'</div>';
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
  <\/script>`}function Uo(t,e,o,i,a,r){const l=(t||[]).filter(v=>!0);if(!l.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const c=e&&e.length?e.slice(-12):[],x=[...new Set(l.map(v=>v.stakeholder))].filter(Boolean).map(v=>({stakeholder:v,topics:[...new Set(l.filter(y=>y.stakeholder===v).map(y=>y.topic))].filter(Boolean)})),m=72,u=JSON.stringify(l).replace(/</g,"\\u003c"),d=JSON.stringify(c),p=JSON.stringify(x),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${qt}">
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
    var D=${u},W=${d},GROUPS=${p};
    var CW=${m},RED='${ee}';
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
  <\/script>`}function li(t,e,o,i,a,r,l,c,h,x,m,u,d,p){var xt,dt,ht;d!=null&&d.llmModel&&d.llmModel!=="Total"&&(o=Yo(o,d.llmModel),l=Xo(l,d.llmModel),e=Zo(e,d.monthlyVis,d.llmModel),d.monthlyVis&&(d={...d,monthlyVis:Nn(d.monthlyVis,d.llmModel)})),o=(o||[]).map(O=>({...O,weekly:(O.weekly||[]).map(rt=>rt??0),monthly:(O.monthly||[]).map(rt=>rt??0)})),x&&typeof x=="object"&&Object.values(x).forEach(O=>{!O||typeof O!="object"||Object.values(O).forEach(rt=>{!rt||typeof rt!="object"||Object.keys(rt).forEach(Z=>{const W=rt[Z];Array.isArray(W)&&(rt[Z]=W.map(Q=>Q??0))})})});const k={aircare:"Xiaomi"};o=o.map(O=>{const rt=k[(O.id||"").toLowerCase()];if(!rt||!O.allScores)return O;const Z=Object.entries(O.allScores).find(([Et])=>Et.toLowerCase()===rt.toLowerCase()&&Et.toLowerCase()!=="lg");if(!Z)return O;const W=Z[1];if(!(W>0))return O;const Q=Math.round(O.score/W*100);return{...O,compName:Z[0],vsComp:W,compRatio:Q,status:Q>=100?"lead":Q>=80?"behind":"critical"}});const v=(d==null?void 0:d.visibilityOnly)||!1,y=(d==null?void 0:d.includeReadability)===!0,w=(p==null?void 0:p.unlaunchedMap)||{},D=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,P=Oe[r]||Oe.ko;let N;if(h&&h.length)N=h.map(O=>String(O).toUpperCase().startsWith("W")?O.toUpperCase():O);else{const O=x?Math.max(...Object.values(x).flatMap(Z=>Object.values(Z).flatMap(W=>Object.values(W).map(Q=>(Q==null?void 0:Q.length)||0))),0):0,rt=t.weekStart||Math.max(1,O-11);N=Array.from({length:Math.max(12,O)},(Z,W)=>`W${rt+W}`)}const V=new Set;x&&Object.values(x).forEach(O=>Object.keys(O).forEach(rt=>{rt!=="Total"&&V.add(rt)})),l&&l.forEach(O=>{O.country&&O.country!=="TTL"&&V.add(O.country)});const B=[...V].sort(),_=r==="en"?"All":"전체",H=["MS","HS","ES"],$=o.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${O.bu}" value="${O.id}" checked onchange="onFilterChange()"><span>${O.kr}</span></label>`).join(""),q=H.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${O}" checked onchange="onBuChange('${O}')"><span>${O}</span></label>`).join(""),A=B.map(O=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${O}" checked onchange="onFilterChange()"><span>${oo(O)}</span></label>`).join(""),I=Object.entries(eo).map(([O,rt])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${O}" checked onchange="onRegionChange('${O}')"><span>${rt.labelEn}</span></label>`).join(""),L=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,z=d!=null&&d.weeklyLabelsFull&&d.weeklyLabelsFull.length===N.length?d.weeklyLabelsFull:N,K=N.map((O,rt)=>`<option value="${rt}"${rt===N.length-1?" selected":""}>${z[rt]||O}</option>`).join(""),ot=(((xt=o[0])==null?void 0:xt.monthlyScores)||[]).map(O=>{const rt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=String(O.date).match(/(\d{1,2})월/),W=String(O.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Z?rt[parseInt(Z[1])-1]:W?W[1].charAt(0).toUpperCase()+W[1].slice(1).toLowerCase():O.date}),nt=ot.map((O,rt)=>`<option value="${rt}"${rt===ot.length-1?" selected":""}>${O}</option>`).join(""),f=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${qt}`,Y=new Set(["Total"]);(o||[]).forEach(O=>(O.monthlyScores||[]).forEach(rt=>Object.keys(rt.byLlm||{}).forEach(Z=>Y.add(Z)))),(l||[]).forEach(O=>(O.monthlyScores||[]).forEach(rt=>Object.keys(rt.byLlm||{}).forEach(Z=>Y.add(Z)))),((d==null?void 0:d.monthlyVis)||[]).forEach(O=>{O.llmModel&&Y.add(O.llmModel)});const G=["Total",...Array.from(Y).filter(O=>O!=="Total").sort((O,rt)=>O.localeCompare(rt))],ft=(d==null?void 0:d.llmModel)||"Total",S=G.map(O=>`<option value="${O}"${O===ft?" selected":""}>${O}</option>`).join(""),C=`<div class="filter-layer" id="filter-layer">
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
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${f}">${K}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${f}"${ot.length>0?"":" disabled"}>${nt||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${f};opacity:0.55;cursor:not-allowed" disabled>${S}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${_}</span></label>
        ${q}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${_}</span></label>
        ${$}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${_}</span></label>
        ${I}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${_}</span></label>
        ${A}
      </div>
    </div>
  </div>`,F=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${Yr(t.noticeText)}</div></div>`:"",M=[F,t.showTotal!==!1?Do(e,t,P,r,"weekly"):""].join(""),E=[F,t.showTotal!==!1?Do(e,t,P,r,"monthly"):""].join(""),U=[];if(x&&Object.keys(x).length){const O=Pe;Object.entries(x).forEach(([rt,Z])=>{const W=o.find(Et=>Et.id===rt),Q=(W==null?void 0:W.kr)||O[rt]||rt;Object.entries(Z).forEach(([Et,Bt])=>{if(Et==="Total"||Et==="TTL"||Et==="TOTAL")return;const Rt=Bt.LG||Bt.lg||[],Ht=Rt.length>0?Rt[Rt.length-1]:0;if(Ht<=0)return;let Jt="",jt=0;Object.entries(Bt).forEach(([oe,Nt])=>{if(oe==="LG"||oe==="lg")return;const Wt=Array.isArray(Nt)&&Nt.length?Nt[Nt.length-1]:0;Wt>jt&&(jt=Wt,Jt=oe)});const Zt=+(Ht-jt).toFixed(1),pe={};Object.entries(Bt).forEach(([oe,Nt])=>{if(Array.isArray(Nt)&&Nt.length){const Wt=Nt[Nt.length-1];Wt!=null&&(pe[oe]=Wt)}}),U.push({product:Q,country:Et,score:Ht,compName:Jt,compScore:jt,gap:Zt,allScores:pe})})})}const yt=((dt=d==null?void 0:d.weeklyLabelsFull)==null?void 0:dt[d.weeklyLabelsFull.length-1])||N[N.length-1]||"",wt=yt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${yt} ${r==="en"?"data":"기준"}</span>`:"",mt=[M,t.showProducts!==!1?Oo(o,t,P,r,N,w,(d==null?void 0:d.monthlyVis)||[],x,wt):"",`<div id="trend-container">${ii(o,x,N,P,r,w,wt)}</div>`,t.showCnty!==!1?_o(U,t,P,r,w,wt):""].join(""),bt=o.map(O=>{const rt=O.monthlyScore||O.score,Z=O.monthlyPrev||O.prev,W=O.vsComp||0,Q=W>0?rt/W*100:100;return{...O,score:rt,prev:Z,weeklyScore:rt,weeklyPrev:Z,monthlyScore:rt,monthlyPrev:Z,weekly:(O.monthlyScores||[]).map(Et=>Et.score),status:Q>=100?"lead":Q>=80?"behind":"critical"}}),Ct=(((ht=o[0])==null?void 0:ht.monthlyScores)||[]).map(O=>{const rt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=String(O.date).match(/(\d{1,2})월/),W=String(O.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Z?rt[parseInt(Z[1])-1]:W?W[1].charAt(0).toUpperCase()+W[1].slice(1).toLowerCase():O.date}),St=(d==null?void 0:d.monthlyVis)||[],j=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",X=[E,t.showProducts!==!1?Oo(bt,t,P,r,Ct.length?Ct:["Feb","Mar"],w,St,{},j):"",`<div id="monthly-trend-container">${ai(bt,St,P,r,w,j)}</div>`,t.showCnty!==!1?_o(l,t,P,r,w,j):""].join(""),at=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${qt}`,ct=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${at};background:#fff;color:#0F172A">${r==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${at};background:transparent;color:#94A3B8">${r==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Go(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,r,t,p)}</div>
    <div id="pr-period-monthly" style="display:none">${Go(p==null?void 0:p.monthlyPR,p==null?void 0:p.monthlyPRLabels,r,t,p,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Wr({FONT:qt,RED:ee,COMP:ce})}</style>
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
  <div id="bu-weekly-content" class="dash-container">${mt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${X}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${ct}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Uo(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <div id="bu-weekly-content" class="dash-container">${mt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${X}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${ct}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Uo(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
  ${D}
</div>
<div id="tab-glossary" class="tab-panel">
  ${si(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${P.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${ti({lang:r,weeklyAll:x,products:o,productsCnty:l,ulMap:w,monthlyVis:d==null?void 0:d.monthlyVis,total:e,meta:t,wLabels:N})}
<\/script>
</body>
</html>`}function ci(t){const e=t.filter(h=>h.status==="lead"),o=t.filter(h=>h.status==="behind"),i=t.filter(h=>h.status==="critical"),a=[...t].sort((h,x)=>x.score-h.score)[0],r=[...t].sort((h,x)=>h.score-x.score)[0],l=(t.reduce((h,x)=>h+x.score,0)/t.length).toFixed(1),c=[];return c.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${l}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&c.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(a.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?c.push(`취약 카테고리(${i.map(h=>h.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&c.push(`추격 카테고리(${o.map(h=>h.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),c.join(" ")}function di(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function pi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const dn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Je={year:2026,month:2,vol:3};function pn(t){const e=String(t||"").trim();if(!e)return null;let o=null,i=null;const a=e.match(/(\d{4})/);if(a)o=parseInt(a[1]);else{const l=e.match(/(\d{2})년/);l&&(o=2e3+parseInt(l[1]))}const r=e.match(/(\d{1,2})\s*월/);if(r)i=parseInt(r[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)i=dn.findIndex(c=>c.toLowerCase()===l[1].toLowerCase())+1;else{const c=e.match(/\d{4}[-/](\d{1,2})/);c&&(i=parseInt(c[1]))}}return!o||!i||i<1||i>12?null:{year:o,month:i}}function no(t){const e=pn(t);if(!e)return null;const o=(e.year-Je.year)*12+(e.month-Je.month),i=Je.vol+o;return i<1?null:`Vol.${String(i).padStart(2,"0")}`}function ui(t){const e=pn(t);return e?e.month===1?{year:e.year-1,month:12}:{year:e.year,month:e.month-1}:null}function un(t,e="en"){const o=ui(t);return o?e==="ko"?`${o.year}년 ${o.month}월 기준`:`As of ${dn[o.month-1]} ${o.year}`:null}function Ho(t){const e={},o=no(t);o&&(e.reportNo=o);const i=un(t,"en");return i&&(e.dateLine=i),e}const Ue=["title","dateLine","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","period","team","reportNo","monthlyReportBody","highlightInsight","bumpInsight","hlChapterTitle","hlWeeklyTitle","hlModelTitle","hlBumpTitle"],hn=["v2ExIntro2","v2Ex1T2","v2Ex1B2","v2Ex2T2","v2Ex2B2","v2Ex3T2","v2Ex3B2","v2T11Caption","v2CaseCaption","v2C1Title","v2C1Keep","v2C1Bko","v2C1Tko","v2C2Title4","v2C2Keep2","v2C2Bko4","v2C2Tko4","v2VisTblHtml8","todoV2Title","todoV2NoticeLabel","todoV2NoticeHtml","todoV2PerfTitle","todoV2ChBu","todoV2NewBu","todoV2FixBu","todoV2TechBu","todoV2NextSecTitle","todoV2NextTitle","todoV2NextHtml3"];Ue.push(...hn);const hi=["rd_h1","rd_intro","rd_introNotes","rd_summary","rd_areaIntro","rd_h2","rd_d1Title","rd_d1","rd_d1Notes","rd_d2Title","rd_d2","rd_d3Title","rd_d3","rd_d4Title","rd_d4"];Ue.push(...hi);const fi=["v3Ex1T","v3Ex1B","v3Ex2T","v3Ex2B"];Ue.push(...fi);function Ye(t,e){const o={...t};return Ue.forEach(i=>{o[i]=e==null?void 0:e[i]}),o}function mi(t,e){const o=/<body[^>]*>([\s\S]*)<\/body>/i,i=(e.match(o)||[])[1];if(!i)return console.warn("[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송"),t;const a=`
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`;return/<\/body>/i.test(t)?t.replace(/<\/body>/i,`${a}${i}</body>`):(console.warn("[mergeBilingualEmail] KO </body> 미발견 — 단순 연결"),t+a+i)}function gi({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:r,setMetaEn:l,total:c,setTotal:h,products:x,setProducts:m,citations:u,setCitations:d,dotcom:p,setDotcom:k,productsCnty:v,setProductsCnty:y,citationsCnty:w,setCitationsCnty:b,resolved:D,previewLang:P,setPreviewLang:N,snapshots:V,setSnapshots:B,setWeeklyLabels:_,setWeeklyAll:H,weeklyLabels:$,weeklyAll:q,citationsByCnty:A,dotcomByCnty:I,generateHTML:L,publishEndpoint:z,setMonthlyVis:K,onSyncExtra:ot,categoryStats:nt,extra:f,monthlyVis:Y,progressMonth:G,setProgressMonth:ft,progressDataMonth:S,editMode:C=!1,setEditMode:F}){const M=lt.useRef({products:x,productsCnty:v,citations:u,citationsCnty:w,total:c,dotcom:p,extra:f});M.current={products:x,productsCnty:v,citations:u,citationsCnty:w,total:c,dotcom:p,extra:f};function E(){return M.current}const[U,yt]=lt.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[wt,mt]=lt.useState(!1),[bt,Ct]=lt.useState(null),[St,j]=lt.useState(""),[X,at]=lt.useState(""),[ct,xt]=lt.useState(!1),[dt,ht]=lt.useState(""),[O,rt]=lt.useState(!1),[Z,W]=lt.useState(!1),[Q,Et]=lt.useState(!1),[Bt,Rt]=lt.useState(!1),[Ht,Jt]=lt.useState(""),[jt,Zt]=lt.useState(!1),[pe,oe]=lt.useState(!0),[Nt,Wt]=lt.useState(""),[ie,ve]=lt.useState(null),[ue,me]=lt.useState([]),Pt=t==="newsletter",[ge,fn]=lt.useState(()=>{const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`});function He(){Pt&&fetch("/api/publish").then(s=>s.ok?s.json():null).then(s=>{s&&Array.isArray(s.months)&&me(s.months)}).catch(()=>{})}lt.useEffect(()=>{if(Pt){He();return}fetch(z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(g=>g.ok?g.json():null).then(ve).catch(()=>{})},[t,z,Pt]);const mn=(()=>{const s=new Set,g=new Date;for(let J=0;J<24;J++){const At=new Date(g.getFullYear(),g.getMonth()-J,1);s.add(`${At.getFullYear()}-${String(At.getMonth()+1).padStart(2,"0")}`)}for(const J of ue)s.add(J.month);return ge&&s.add(ge),[...s].sort((J,At)=>At.localeCompare(J))})();function Le(s){const[g,J]=s.split("-");return`${g}년 ${parseInt(J,10)}월`}const[gn,po]=lt.useState(null);lt.useEffect(()=>{let s=!0;const g=()=>Fo(t).then(At=>{s&&po(At)});g();const J=setInterval(g,6e4);return()=>{s=!1,clearInterval(J)}},[t]);function yn(){Fo(t).then(po)}async function bn(){if(!Bt){Rt(!0),Jt("");try{const s=E(),g=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),J=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"en");let At,Vt,et;if(t==="dashboard"){const it=Y||[],ut=s.extra||f||{};At=L(i,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,$,q,A,I,it,ut),Vt=L(Ye(i,r),s.total,J.products,J.citations,s.dotcom,"en",J.productsCnty,J.citationsCnty,$,q,A,I,it,ut),et=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else At=L(i,s.total,g.products,g.citations,p,"ko",g.productsCnty,g.citationsCnty,{weeklyLabels:$,weeklyAll:q,categoryStats:nt,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),Vt=L(Ye(i,r),s.total,J.products,J.citations,p,"en",J.productsCnty,J.citationsCnty,{weeklyLabels:$,weeklyAll:q,categoryStats:nt,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),et=`${i.period||""} ${i.title||"Newsletter"}`.trim();const Qt=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),R={title:et,htmlKo:At,htmlEn:Vt};Pt&&(R.month=ge);const zt=await(await fetch(Qt,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(R)})).json();if(!zt.ok)throw new Error(zt.error||"게시 실패");if(ve({...zt,published:!0}),Pt&&He(),t==="dashboard")try{const it=await Me(t)||{},ut=s.extra||f||{};To(t,{...it,meta:i,total:s.total,weeklyPR:ut.weeklyPR||it.weeklyPR,weeklyPRLabels:ut.weeklyPRLabels||it.weeklyPRLabels,monthlyPR:ut.monthlyPR||it.monthlyPR,monthlyPRLabels:ut.monthlyPRLabels||it.monthlyPRLabels,weeklyBrandPrompt:ut.weeklyBrandPrompt||it.weeklyBrandPrompt,weeklyBrandPromptLabels:ut.weeklyBrandPromptLabels||it.weeklyBrandPromptLabels})}catch{}const Gt=`${window.location.origin}${zt.urls.ko}`,tt=`${window.location.origin}${zt.urls.en}`;try{await navigator.clipboard.writeText(Gt+`
`+tt)}catch{}Jt(`KO: ${Gt}
EN: ${tt}`)}catch(s){Jt("ERROR:"+s.message)}finally{Rt(!1),setTimeout(()=>Jt(""),2e4)}}}async function xn(){if(!jt){Zt(!0),Wt("");try{const s=await fr(li,ye,{includeProgressTracker:pe});Wt(`통합 게시 완료!
KO: ${window.location.origin}${s.urls.ko}
EN: ${window.location.origin}${s.urls.en}`)}catch(s){Wt("ERROR: "+s.message)}finally{Zt(!1),setTimeout(()=>Wt(""),15e3)}}}async function uo(s){try{const g=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),J=Pt?`${g}?month=${encodeURIComponent(s||ge)}`:g;(await(await fetch(J,{method:"DELETE"})).json()).ok&&(Pt?He():ve(null))}catch{}}async function vn(){if(P!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}W(!0)}async function ho(s){W(!1),Et(!0);const g=(s==null?void 0:s.products)??x,J=(s==null?void 0:s.productsCnty)??v,At=(s==null?void 0:s.citations)??u,Vt=(s==null?void 0:s.citationsCnty)??w;try{const et=i,Qt=[et.title||"",et.dateLine||"",et.noticeText||"",et.totalInsight||"",et.reportType||"",et.productInsight||"",et.productHowToRead||"",et.citationInsight||"",et.citationHowToRead||"",et.dotcomInsight||"",et.dotcomHowToRead||"",et.todoText||"",et.todoNotice||"",et.kpiLogicText||"",et.cntyInsight||"",et.cntyHowToRead||"",et.citDomainInsight||"",et.citDomainHowToRead||"",et.citCntyInsight||"",et.citCntyHowToRead||"",et.citPrdInsight||"",et.citPrdHowToRead||"",et.period||"",et.team||"",et.reportNo||"",et.monthlyReportBody||""],R=g.map(st=>st.kr||""),Yt=g.map(st=>st.compName||""),zt=At.map(st=>st.category||""),Gt=[...new Set(J.map(st=>st.country||""))],tt=[...new Set(J.map(st=>st.product||""))],it=[...new Set(J.map(st=>st.compName||""))],ut=[...new Set(Vt.map(st=>st.cnty||"").filter(st=>st&&st!=="TTL"))],Tt=hn.filter(st=>et[st]!=null&&String(et[st]).trim()!==""),$t=Tt.map(st=>String(et[st])),It=[...Qt,...R,...Yt,...zt,...Gt,...tt,...it,...ut,...$t].map(st=>st||" "),kt=await gr(It,{from:"ko",to:"en"});let gt=0;const ne={...i,title:kt[gt++]||et.title,dateLine:kt[gt++]||et.dateLine,noticeText:kt[gt++]||et.noticeText,totalInsight:kt[gt++]||et.totalInsight,reportType:kt[gt++]||et.reportType,productInsight:kt[gt++]||et.productInsight,productHowToRead:kt[gt++]||et.productHowToRead,citationInsight:kt[gt++]||et.citationInsight,citationHowToRead:kt[gt++]||et.citationHowToRead,dotcomInsight:kt[gt++]||et.dotcomInsight,dotcomHowToRead:kt[gt++]||et.dotcomHowToRead,todoText:kt[gt++]||et.todoText,todoNotice:kt[gt++]||et.todoNotice,kpiLogicText:kt[gt++]||et.kpiLogicText,cntyInsight:kt[gt++]||et.cntyInsight,cntyHowToRead:kt[gt++]||et.cntyHowToRead,citDomainInsight:kt[gt++]||et.citDomainInsight,citDomainHowToRead:kt[gt++]||et.citDomainHowToRead,citCntyInsight:kt[gt++]||et.citCntyInsight,citCntyHowToRead:kt[gt++]||et.citCntyHowToRead,citPrdInsight:kt[gt++]||et.citPrdInsight,citPrdHowToRead:kt[gt++]||et.citPrdHowToRead,period:(gt++,et.period),team:kt[gt++]||et.team,reportNo:(gt++,et.reportNo),monthlyReportBody:kt[gt++]||et.monthlyReportBody},re=st=>st&&st.replace(/\b\w/g,vt=>vt.toUpperCase()),Xt=st=>(st||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),he={};g.forEach((st,vt)=>{he[st.id]={en:re(kt[gt+vt]||st.kr),compNameEn:Xt(kt[gt+R.length+vt]||st.compName)}}),gt+=R.length+Yt.length;const Be={};At.forEach((st,vt)=>{Be[`${st.rank}_${st.source}`]=re(kt[gt+vt]||st.category)}),gt+=zt.length;const we={};Gt.forEach((st,vt)=>{we[st]=/^[A-Z]{2,3}$/.test(st)?st:kt[gt+vt]||st}),gt+=Gt.length;const Ce={};tt.forEach((st,vt)=>{Ce[st]=kt[gt+vt]||st}),gt+=tt.length;const fo={};it.forEach((st,vt)=>{fo[st]=kt[gt+vt]||st}),gt+=it.length;const mo={};ut.forEach((st,vt)=>{mo[st]=/^[A-Z]{2,3}$/.test(st)?st:kt[gt+vt]||st}),gt+=ut.length,Tt.forEach((st,vt)=>{ne[st]=kt[gt+vt]||et[st]}),l(ne),m(st=>st.map(vt=>{var go,yo;return{...vt,en:((go=he[vt.id])==null?void 0:go.en)||vt.en||vt.kr,compNameEn:((yo=he[vt.id])==null?void 0:yo.compNameEn)||vt.compNameEn||vt.compName}})),d(st=>st.map(vt=>({...vt,categoryEn:Be[`${vt.rank}_${vt.source}`]||vt.categoryEn||vt.category}))),y(st=>st.map(vt=>({...vt,countryEn:re(we[vt.country]||vt.country),productEn:re(Ce[vt.product]||vt.product),compNameEn:Xt(fo[vt.compName]||vt.compName)}))),b(st=>st.map(vt=>({...vt,cntyEn:vt.cnty==="TTL"?"TTL":re(mo[vt.cnty]||vt.cnty)}))),Et(!1)}catch(et){alert("번역 오류: "+et.message),Et(!1)}}async function wn(){const s=L(e,c,D.products,D.citations,p,P,D.productsCnty,D.citationsCnty);try{await navigator.clipboard.writeText(s)}catch{const g=document.createElement("textarea");g.value=s,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)}xt(!0),setTimeout(()=>xt(!1),2500)}async function Cn(){await Fr(e,c,x,u,p)}async function kn(){if(O!=="sending"){rt("sending");try{const s=E(),g=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),J=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"en"),At={weeklyLabels:$,weeklyAll:q,categoryStats:nt,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null},Vt=Ye(i,r),et=L(i,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,At),Qt=L(Vt,s.total,J.products,J.citations,s.dotcom,"en",J.productsCnty,J.citationsCnty,At),R=mi(et,Qt),Yt=`[LG GEO] ${i.title} · ${i.period} (KO/EN)`,Gt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:dt.trim(),subject:Yt,html:R})})).json();if(!Gt.ok)throw new Error(Gt.error||"발송 실패");rt("ok"),setTimeout(()=>rt(!1),4e3)}catch(s){rt("error"),j(s.message),setTimeout(()=>{rt(!1),j("")},5e3)}}}async function Sn(){var J,At,Vt,et,Qt;if(wt)return;const s=zr(U.trim());if(!s){Ct("error"),j("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Ct(null),3e3);return}mt(!0),Ct(null),j(""),at("");const g=[];try{const R=await Ur(s,tt=>j(tt));if(g.push(`[Sync] parsed keys: ${Object.keys(R).join(", ")||"(없음)"}`),R.meta&&g.push(`[Sync] meta keys: ${Object.keys(R.meta).join(", ")}`),R.productsPartial&&g.push(`[Sync] products: ${R.productsPartial.length}건`),g.push(`[Sync] citations: ${((J=R.citations)==null?void 0:J.length)??0}건`),g.push(`[Sync] citationsCnty: ${((At=R.citationsCnty)==null?void 0:At.length)??0}건`),g.push(`[Sync] dotcom: ${R.dotcom?"OK":"(없음)"}`),g.push(`[Sync] productsCnty: ${((Vt=R.productsCnty)==null?void 0:Vt.length)??0}건`),R.meta){const tt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(it=>{const ut={...it};for(const[Tt,$t]of Object.entries(R.meta))tt.includes(Tt)&&it[Tt]||(ut[Tt]=$t);return ut}),l(it=>({...it,period:R.meta.period,dateLine:R.meta.dateLine,reportNo:R.meta.reportNo}))}if(R.citations&&(d(R.citations),M.current={...M.current,citations:R.citations}),R.dotcom&&(k(tt=>({...tt,...R.dotcom})),M.current={...M.current,dotcom:{...M.current.dotcom,...R.dotcom}}),R.productsCnty&&(y(R.productsCnty),M.current={...M.current,productsCnty:R.productsCnty}),R.citationsCnty&&(b(R.citationsCnty),M.current={...M.current,citationsCnty:R.citationsCnty}),R.monthlyVis&&K&&K(R.monthlyVis),ot){const tt={weeklyPR:R.weeklyPR||null,weeklyPRLabels:R.weeklyPRLabels||null,monthlyPR:R.monthlyPR||null,monthlyPRLabels:R.monthlyPRLabels||null,weeklyBrandPrompt:R.weeklyBrandPrompt||null,weeklyBrandPromptLabels:R.weeklyBrandPromptLabels||null,unlaunchedMap:R.unlaunchedMap||null,weeklyLabelsFull:R.weeklyLabelsFull||null,prTopicList:R.prTopicList||null,citTouchPointsTrend:R.citTouchPointsTrend||null,citTrendMonths:R.citTrendMonths||null,citDomainTrend:R.citDomainTrend||null,citDomainMonths:R.citDomainMonths||null,citTouchPointsByLlm:R.citTouchPointsByLlm||null,citDomainByLlm:R.citDomainByLlm||null,citDomainByLlmTrend:R.citDomainByLlmTrend||null,dotcomByLlm:R.dotcomByLlm||null};ot(tt),M.current={...M.current,extra:{...M.current.extra,...tt}}}const Yt=R.weeklyLabels||((et=R.meta)==null?void 0:et.weeklyLabels);console.log("[SYNC] weeklyLabels:",Yt,"weeklyLabelsFull:",R.weeklyLabelsFull),Yt&&Yt.length&&_(Yt),R.weeklyAll&&H(tt=>({...tt,...R.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(R));const zt=R.weeklyMap?Object.keys(R.weeklyMap):[],Gt=((Qt=R.productsPartial)==null?void 0:Qt.map(tt=>tt.id))||[];if(console.log("[SYNC] weeklyMap keys:",zt.length?zt:"NONE"),console.log("[SYNC] productsPartial IDs:",Gt.length?Gt:"NONE"),zt.length&&Gt.length){const tt=Gt.filter(ut=>!zt.includes(ut)),it=zt.filter(ut=>!Gt.includes(ut));tt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",tt),it.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",it),!tt.length&&!it.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(R.productsPartial){const tt=R.productsPartial.map(it=>{var we;const ut=((we=R.weeklyMap)==null?void 0:we[it.id])||[],Tt=ut.filter(Ce=>Ce!=null&&Ce>0),$t=it.score,It=it.prev||0,kt=it.vsComp>0?Math.round($t/it.vsComp*100):100,gt=Tt.length>0?Tt[Tt.length-1]:$t,ne=Tt.length>=2?Tt[Tt.length-2]:0,re=$t,Xt=It,he=kt,Be=It>0&&It!==$t?[It,$t]:[];return{...it,score:re,prev:Xt,weekly:ut,monthly:Be,weeklyScore:gt,weeklyPrev:ne,monthlyScore:$t,monthlyPrev:It,compRatio:he,status:he>=100?"lead":he>=80?"behind":"critical"}});m(tt),M.current={...M.current,products:tt}}else R.weeklyMap&&m(tt=>tt.map(it=>{var Tt;const ut=(Tt=R.weeklyMap)==null?void 0:Tt[it.id];return ut?{...it,weekly:ut}:it}));if(R.total){const tt={...M.current.total,...R.total,...R.buTotals?{buTotals:R.buTotals}:{},...R.buTotalsPrev?{buTotalsPrev:R.buTotalsPrev}:{},...R.countryTotals?{countryTotals:R.countryTotals}:{},...R.countryTotalsPrev?{countryTotalsPrev:R.countryTotalsPrev}:{}};h(it=>({...it,...tt})),M.current={...M.current,total:tt}}{let tt=function(It){if(!It)return 0;const kt=String(It).trim(),gt=kt.match(/(\d{1,2})월/);if(gt){const Xt=parseInt(gt[1]);return Xt>=1&&Xt<=12?Xt:0}const ne=kt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ne)return Tt[ne[1].toLowerCase()]||0;const re=kt.match(/\d{4}[-\/](\d{1,2})/);if(re){const Xt=parseInt(re[1]);return Xt>=1&&Xt<=12?Xt:0}return 0};const it=new Date().getFullYear(),ut=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Tt={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let $t=0;if(R.derivedPeriod){const It=tt(R.derivedPeriod);It>$t&&($t=It)}if(R.citDerivedPeriod){const It=tt(R.citDerivedPeriod);It>$t&&($t=It)}$t>0&&$t<=12&&(a(It=>({...It,period:`${it}년 ${$t}월`})),l(It=>({...It,period:`${ut[$t]} ${it}`})))}if(!R.total&&R.productsPartial&&R.productsPartial.length>0){const tt=R.productsPartial,it=+(tt.reduce((Tt,$t)=>Tt+$t.score,0)/tt.length).toFixed(1),ut=+(tt.reduce((Tt,$t)=>Tt+($t.vsComp||0),0)/tt.length).toFixed(1);h(Tt=>({...Tt,score:it,vsComp:ut,rank:it>=ut?1:2}))}if(setTimeout(()=>{To(t,{meta:R.meta||null,total:R.total?{...R.total,...R.buTotals?{buTotals:R.buTotals}:{},...R.buTotalsPrev?{buTotalsPrev:R.buTotalsPrev}:{},...R.countryTotals?{countryTotals:R.countryTotals}:{},...R.countryTotalsPrev?{countryTotalsPrev:R.countryTotalsPrev}:{}}:null,productsPartial:R.productsPartial||null,weeklyMap:R.weeklyMap||null,weeklyLabels:R.weeklyLabels||null,weeklyLabelsFull:R.weeklyLabelsFull||null,weeklyAll:R.weeklyAll||null,citations:R.citations||null,dotcom:R.dotcom||null,productsCnty:R.productsCnty||null,citationsCnty:R.citationsCnty||null,citationsByCnty:R.citationsByCnty||null,dotcomByCnty:R.dotcomByCnty||null,unlaunchedMap:R.unlaunchedMap||null,prTopicList:R.prTopicList||null,monthlyVis:R.monthlyVis||null,weeklyPR:R.weeklyPR||null,weeklyPRLabels:R.weeklyPRLabels||null,monthlyPR:R.monthlyPR||null,monthlyPRLabels:R.monthlyPRLabels||null,weeklyBrandPrompt:R.weeklyBrandPrompt||null,weeklyBrandPromptLabels:R.weeklyBrandPromptLabels||null,monthlyBrandPrompt:R.monthlyBrandPrompt||null,monthlyBrandPromptLabels:R.monthlyBrandPromptLabels||null,dotcomTrend:R.dotcomTrend||null,dotcomTrendMonths:R.dotcomTrendMonths||null,dotcomByLlm:R.dotcomByLlm||null}),setTimeout(yn,250)},100),at(g.join(`
`)),Ct("ok"),j(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const tt={};R.productsPartial&&(tt.products=R.productsPartial.map(it=>{var gt;const ut=((gt=R.weeklyMap)==null?void 0:gt[it.id])||[],Tt=it.vsComp>0?it.score/it.vsComp*100:100,$t=ut.find(ne=>ne!=null&&ne>0),It=it.prev!=null&&it.prev>0?it.prev:$t||0,kt=It>0?[It,it.score]:[];return{...it,prev:It,weekly:ut,monthly:kt,compRatio:Math.round(Tt),status:Tt>=100?"lead":Tt>=80?"behind":"critical"}})),R.productsCnty&&(tt.productsCnty=R.productsCnty),R.citations&&(tt.citations=R.citations),R.citationsCnty&&(tt.citationsCnty=R.citationsCnty);try{await ho(tt)}catch{}j("동기화 + 번역 완료!")}}catch(R){g.push(`[ERROR] ${R.message}`),Ct("error"),j(R.message),at(g.join(`
`))}finally{mt(!1),setTimeout(()=>{Ct(null),j("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:Lt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:T},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:T},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:T},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(Vr,{...gn||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:T},children:"Google Sheets URL"}),n.jsx("input",{value:U,onChange:s=>yt(s.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Ft,fontSize:11,padding:"7px 9px",marginBottom:8,color:U?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:Sn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:wt?"wait":"pointer",background:wt?"#1E293B":Lt,fontSize:12,fontWeight:700,color:wt?"#94A3B8":"#FFFFFF",fontFamily:T,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(bo,{size:13,style:{animation:wt?"spin 1s linear infinite":"none"}}),wt?"동기화 중...":"구글 시트 동기화"]}),(bt||wt&&St)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.6,background:bt==="ok"?"#14532D":bt==="error"?"#450A0A":"#1E293B",color:bt==="ok"?"#86EFAC":bt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${bt==="ok"?"#22C55E33":bt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:St}),X&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[X,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(X).then(()=>{const s=document.getElementById("vis-debug-copy-btn");s&&(s.textContent="복사됨!",setTimeout(()=>{s.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:T,cursor:"pointer"},children:"로그 복사"})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:vn,disabled:Q,style:{width:"100%",padding:"9px 0",background:Q?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:T,cursor:Q?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:Q?.6:1},children:[n.jsx(Fn,{size:13})," ",Q?"번역 중...":"AI 번역 (EN)"]}),Z&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:T},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:T},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>W(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:T,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:ho,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:T,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:Cn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(Tn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Pt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"발행 월"}),n.jsx("select",{value:ge,onChange:s=>fn(s.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:mn.map(s=>n.jsxs("option",{value:s,children:[s," · ",Le(s),ue.find(g=>g.month===s)?" ✓ 게시됨":""]},s))})]}),Pt&&ft&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",S||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:G||"",onChange:s=>ft(s.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",S||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(s=>n.jsx("option",{value:s,children:s},s))]}),G&&n.jsx("button",{onClick:()=>ft(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:T,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:bn,disabled:Bt,style:{width:"100%",padding:"9px 0",background:Bt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:T,cursor:Bt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(xo,{size:12}),Bt?"게시 중...":Pt?`${Le(ge)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:T,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:pe,onChange:s=>oe(s.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:xn,disabled:jt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:jt?"#1E293B":"#166534",color:jt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:T,cursor:jt?"wait":"pointer",marginBottom:6},children:[n.jsx(xo,{size:12}),jt?"통합 게시 중...":"통합 대시보드 게시"]}),Nt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.8,background:Nt.startsWith("ERROR")?"#450A0A":"#14532D",color:Nt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Nt.startsWith("ERROR:")?Nt.slice(6):Nt})]})]}),n.jsxs("button",{onClick:async()=>{const s={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(s).some(J=>J.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const At=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:s})})).json();At.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(At.error||""))}catch(J){alert("아카이빙 실패: "+J.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(En,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Ht&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:T,lineHeight:1.8,background:Ht.startsWith("ERROR:")?"#450A0A":"#14532D",color:Ht.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Ht.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Ht.startsWith("ERROR:")?Ht.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(Ve,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Ht,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Pt&&(ie==null?void 0:ie.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:T,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>uo(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:T,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:ie.urls.ko},{label:"EN",url:ie.urls.en}].map(({label:s,url:g})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:T,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s,": ",g]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${g}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ve,{size:10})})]},s)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:ie.ts?new Date(ie.ts).toLocaleString("ko-KR"):""})]}),Pt&&ue.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:T,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ue.length,")"]})}),ue.map(s=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:T},children:Le(s.month)}),n.jsx("button",{onClick:()=>{confirm(`${Le(s.month)} 게시본을 삭제할까요?`)&&uo(s.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:T,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:s.urls.ko},{label:"EN",url:s.urls.en}].map(({label:g,url:J})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:J,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:T,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g,": ",J]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${J}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ve,{size:10})})]},g)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:s.ts?new Date(s.ts).toLocaleString("ko-KR"):""})]},s.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:s=>o(g=>({...g,reportType:s.target.value})),style:{...Ft,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["보고서 번호 ",n.jsx("span",{style:{color:"#334155"},children:"(자동)"})]}),n.jsx("input",{value:e.reportNo,onChange:s=>o(g=>({...g,reportNo:s.target.value})),style:{...Ft}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["발행월 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:s=>{const g=s.target.value;o(J=>({...J,period:g,...Ho(g)})),l&&l(J=>({...J,period:g,...Ho(g)}))},style:{...Ft}})]})]}),no(e.period)&&n.jsxs("p",{style:{margin:"-4px 0 8px",fontSize:10.5,color:"#64748B",fontFamily:T,lineHeight:1.5},children:["자동 연동 — 보고서 번호 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:no(e.period)})," · ","데이터 기준 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:un(e.period,"ko")})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:s=>o(g=>({...g,title:s.target.value})),rows:4,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:s=>o(g=>({...g,team:s.target.value})),style:{...Ft,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:T},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:s=>o(g=>({...g,dateLine:s.target.value})),style:{...Ft,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Notice"}),n.jsx("button",{onClick:()=>o(s=>({...s,showNotice:!s.showNotice})),style:{background:e.showNotice?Lt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:s=>o(g=>({...g,noticeText:s.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Ft,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(s=>({...s,showKpiLogic:!s.showKpiLogic})),style:{background:e.showKpiLogic?Lt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:s=>o(g=>({...g,kpiLogicText:s.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Ft,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:T,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:s=>o(g=>({...g,titleFontSize:Number(s.target.value)})),style:{width:"100%",accentColor:Lt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:s=>o(g=>({...g,titleColor:s.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:T},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([s,g])=>n.jsx("button",{onClick:()=>o(J=>({...J,titleColor:s})),title:g,style:{width:16,height:16,borderRadius:"50%",background:s,border:e.titleColor===s?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},s))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"섹션 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showTotalInsight",label:"인사이트 V1 (기존)"},{key:"showInsightV2",label:"6월 인사이트 V2"},{key:"showInsightV3",label:"8월 Executive Summary"},{key:"showHighlight",label:"Highlight Insight"},{key:"showReadability",label:"Readability Highlight"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showTouchPointsBumpChatGpt",label:"외부채널 모델별(3개)"},{key:"showDomainBumpModels",label:"도메인 모델별(3개)"},{key:"showLlmShare",label:"모델별 인용비중"},{key:"showDotcom",label:"닷컴"},{key:"showDotcomChatGpt",label:"닷컴 Chat-GPT"},{key:"showTodo",label:"Action Plan"},{key:"showTodoV2",label:"액션 아이템 V2"}].map(({key:s,label:g})=>n.jsx("button",{onClick:()=>o(J=>({...J,[s]:!J[s]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[s]?Lt:"#1E293B",color:e[s]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:g},s))}),(()=>{const s=tt=>String(tt||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),g=tt=>/brand/i.test(tt)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(tt)?"Brand":tt,J=Array.isArray(f==null?void 0:f.citTrendMonths)?f.citTrendMonths:[],At=J.length?J[J.length-1]:null,Vt=tt=>{if(!tt)return 0;if(At!=null&&tt[At]!=null)return Number(tt[At])||0;const it=Object.values(tt).map(Number).filter(ut=>!isNaN(ut));return it.length?it[it.length-1]:0},et=[],Qt=new Set,R=(tt,it,ut)=>{tt&&!Qt.has(tt)&&(Qt.add(tt),et.push({value:tt,label:it,score:ut}))};if(f!=null&&f.citTouchPointsTrend&&Object.entries(f.citTouchPointsTrend).forEach(([tt,it])=>{const ut=g(tt);R(ut,ut,Vt(it))}),f!=null&&f.citDomainTrend){const tt=Object.entries(f.citDomainTrend).filter(([ut])=>ut.startsWith("TTL|"));(tt.length?tt:Object.entries(f.citDomainTrend)).forEach(([,ut])=>R(ut.domain,s(ut.domain),Vt(ut.months)))}if(!et.length)return null;et.sort((tt,it)=>it.score-tt.score);const Yt=et.slice(0,10),zt=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],Gt=tt=>o(it=>{const ut=Array.isArray(it.bumpHighlight)?it.bumpHighlight:[];return{...it,bumpHighlight:ut.includes(tt)?ut.filter(Tt=>Tt!==tt):[...ut,tt]}});return n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"범프차트 지적 요소 (색상 강조)"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:Yt.map(({value:tt,label:it})=>{const ut=zt.includes(tt);return n.jsx("button",{onClick:()=>Gt(tt),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:ut?Lt:"#1E293B",color:ut?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:it},tt)})})]})})(),e.showLlmShare!==!1&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"인용비중 노출:"}),[5,10].map(s=>n.jsxs("button",{onClick:()=>o(g=>({...g,llmShareTopN:s})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:(e.llmShareTopN===5?5:10)===s?Lt:"#1E293B",color:(e.llmShareTopN===5?5:10)===s?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:["Top ",s]},s))]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"제품 카드:"}),n.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?Lt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V1 트렌드"}),n.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),n.jsx("button",{onClick:()=>o(s=>({...s,trendMode:(s.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[n.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:T},children:"카드 타입:"}),n.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?Lt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V2 국가별"}),n.jsx("button",{onClick:()=>o(s=>({...s,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?Lt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:T},children:"V3 경쟁사"})]}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:T},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,monthlyReportBody:"⏳ AI 생성 중..."}));const g=await Dt("monthlyReportBody",{products:E().products,productsCnty:E().productsCnty,total:E().total,citations:E().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,monthlyReportBody:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyReportBody:`[AI 실패: ${g.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:s=>o(g=>({...g,monthlyReportBody:s.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:T},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"증감 요인 분석 (Samsung 격차·MoM)"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,monthlyDeltaAnalysis:"⏳ AI 분석 중..."}));const g=await Dt("monthlyDelta",{total:E().total,products:E().products,productsCnty:E().productsCnty,period:e.period||"",unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,monthlyDeltaAnalysis:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyDeltaAnalysis:`[AI 실패: ${g.message}]`}))}},title:"경쟁사(Samsung) 대비 격차 증감 + 전월 대비 증감 요인 AI 분석",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 분석"]})]}),n.jsx("textarea",{value:e.monthlyDeltaAnalysis||"",onChange:s=>o(g=>({...g,monthlyDeltaAnalysis:s.target.value})),rows:16,placeholder:"Samsung 대비 격차 증감 + 전월 대비 증감 요인 분석. 'AI 분석' 버튼으로 자동 생성...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsx("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:T},children:"경쟁사(Samsung) 대비 격차 증감과 전월 대비 증감에 영향을 준 수치를 리스트업·정리합니다."})]}),Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>F&&F(s=>!s),style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:"pointer",background:C?Lt:"#1E293B",color:C?"#FFFFFF":"#94A3B8",fontSize:12,fontWeight:700,fontFamily:T,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s"},children:[n.jsx(An,{size:13})," ",C?"편집 모드 켜짐 — 끄기":"편집 모드 켜기"]}),n.jsx("div",{style:{background:"#0F172A",border:"1px solid #1E293B",borderRadius:8,padding:"8px 10px",marginBottom:10},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:T,lineHeight:1.6},children:C?n.jsxs(n.Fragment,{children:["✏️ 미리보기에서 텍스트를 ",n.jsx("strong",{style:{color:"#E2E8F0"},children:"직접 클릭해 편집"})," (볼드·색·크기 적용된 상태 그대로).",n.jsx("br",{}),"바깥 클릭 = 저장 · Esc = 취소"]}):n.jsx(n.Fragment,{children:"편집 모드를 켜면 미리보기 텍스트를 직접 클릭해 편집할 수 있어요."})})}),[{label:"GEO 전략 인사이트",field:"totalInsight",type:"totalInsight",data:()=>{var s;return{products:E().products,productsCnty:E().productsCnty,total:E().total,todoText:e.todoText||"",unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"Highlight 인사이트",field:"highlightInsight",toggle:"showHighlightInsight",type:"highlight",data:()=>({products:E().products,weeklyAll:q})},{label:"Citation 범프 인사이트",field:"bumpInsight",toggle:"showBumpInsight",type:"bump",data:()=>({citTouchPointsTrend:f==null?void 0:f.citTouchPointsTrend,citDomainTrend:f==null?void 0:f.citDomainTrend,citTrendMonths:f==null?void 0:f.citTrendMonths,citDomainMonths:f==null?void 0:f.citDomainMonths})},{label:"제품 인사이트",field:"productInsight",toggle:"showProductInsight",type:"product",data:()=>({products:E().products,total:E().total})},{label:"제품 How to Read",field:"productHowToRead",toggle:"showProductHowToRead",type:"howToRead",data:()=>({section:"제품별 GEO Visibility"})},{label:"국가별 인사이트",field:"cntyInsight",toggle:"showCntyInsight",type:"cnty",data:()=>{var s;return{productsCnty:E().productsCnty,unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"국가별 How to Read",field:"cntyHowToRead",toggle:"showCntyHowToRead",type:"howToRead",data:()=>({section:"국가별 GEO Visibility"})},{label:"Citation 인사이트",field:"citationInsight",toggle:"showCitationInsight",type:"citation",data:()=>({citations:E().citations})},{label:"Citation How to Read",field:"citationHowToRead",toggle:"showCitationHowToRead",type:"howToRead",data:()=>({section:"Citation 도메인별 현황"})},{label:"제품별 Citation 인사이트",field:"citPrdInsight",toggle:"showCitPrdInsight",type:"citPrd",data:()=>({citationsCnty:E().citationsCnty})},{label:"제품별 Citation How to Read",field:"citPrdHowToRead",toggle:"showCitPrdHowToRead",type:"howToRead",data:()=>({section:"제품별 Citation"})},{label:"닷컴 인사이트",field:"dotcomInsight",toggle:"showDotcomInsight",type:"dotcom",data:()=>({dotcom:E().dotcom})},{label:"닷컴 How to Read",field:"dotcomHowToRead",toggle:"showDotcomHowToRead",type:"howToRead",data:()=>({section:"닷컴 Citation"})},{label:"Action Plan 인사이트",field:"todoText",type:"todo",data:()=>({products:E().products})}].map(s=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 0"},children:[s.toggle?n.jsx("button",{onClick:()=>o(g=>({...g,[s.toggle]:!g[s.toggle]})),title:"표시 / 숨김",style:{background:e[s.toggle]?Lt:"#334155",border:"none",borderRadius:7,width:26,height:13,cursor:"pointer",position:"relative",padding:0,flexShrink:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e[s.toggle]?15:3,width:9,height:9,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})}):n.jsx("span",{style:{width:26,flexShrink:0}}),n.jsx("p",{style:{margin:0,flex:1,fontSize:11,color:"#94A3B8",fontFamily:T,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.label}),n.jsxs("button",{onClick:async()=>{try{o(J=>({...J,[s.field]:"⏳ AI 생성 중..."}));const g=await Dt(s.type,s.data(),P);o(J=>({...J,[s.field]:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,[s.field]:`[AI 실패: ${g.message}]`}))}},title:`${s.label} AI 생성 (결과는 미리보기에 표시)`,style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:10,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[n.jsx(Mt,{size:9})," AI"]})]},s.field)),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0 16px"}})]}),t!=="monthly-report"&&t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,totalInsight:"⏳ AI 생성 중..."}));const g=await Dt("totalInsight",{products:E().products,productsCnty:E().productsCnty,total:E().total,todoText:e.todoText||"",unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,totalInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,totalInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:s=>o(g=>({...g,totalInsight:s.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productInsight:"⏳ AI 생성 중..."}));const s=await Dt("product",{products:E().products,total:E().total},P);o(g=>({...g,productInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,productInsight:`[AI 실패: ${s.message}]

`+ci(E().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductInsight:!s.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?Lt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:s=>o(g=>({...g,productInsight:s.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"제품별 GEO Visibility"},P);o(g=>({...g,productHowToRead:s}))}catch{o(s=>({...s,productHowToRead:di()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductHowToRead:!s.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?Lt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:s=>o(g=>({...g,productHowToRead:s.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,cntyInsight:"⏳ AI 생성 중..."}));const g=await Dt("cnty",{productsCnty:E().productsCnty,unlaunchedMap:((s=E().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,cntyInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,cntyInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyInsight:!s.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?Lt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:s=>o(g=>({...g,cntyInsight:s.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,cntyHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"국가별 GEO Visibility"},P);o(g=>({...g,cntyHowToRead:s}))}catch{o(s=>({...s,cntyHowToRead:pi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyHowToRead:!s.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?Lt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:s=>o(g=>({...g,cntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:s=>o(g=>({...g,prNotice:s.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:s=>o(g=>({...g,prTopicDescsRaw:s.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:s=>o(g=>({...g,prTopicPromptsRaw:s.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:s=>o(g=>({...g,bpNotice:s.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationInsight:"⏳ AI 생성 중..."}));const s=await Dt("citation",{citations:E().citations},P);o(g=>({...g,citationInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citationInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationInsight:!s.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?Lt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:s=>o(g=>({...g,citationInsight:s.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"Citation 도메인별 현황"},P);o(g=>({...g,citationHowToRead:s}))}catch{o(s=>({...s,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationHowToRead:!s.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?Lt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:s=>o(g=>({...g,citationHowToRead:s.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainInsight:"⏳ AI 생성 중..."}));const s=await Dt("citDomain",{citationsCnty:E().citationsCnty},P);o(g=>({...g,citDomainInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citDomainInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainInsight:!s.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?Lt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:s=>o(g=>({...g,citDomainInsight:s.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"도메인별 Citation 현황"},P);o(g=>({...g,citDomainHowToRead:s}))}catch{o(s=>({...s,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainHowToRead:!s.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?Lt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:s=>o(g=>({...g,citDomainHowToRead:s.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyInsight:"⏳ AI 생성 중..."}));const s=await Dt("citCnty",{citationsCnty:E().citationsCnty},P);o(g=>({...g,citCntyInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citCntyInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyInsight:!s.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?Lt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:s=>o(g=>({...g,citCntyInsight:s.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"국가별 Citation 도메인"},P);o(g=>({...g,citCntyHowToRead:s}))}catch{o(s=>({...s,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyHowToRead:!s.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?Lt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:s=>o(g=>({...g,citCntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdInsight:"⏳ AI 생성 중..."}));const s=await Dt("citPrd",{citationsCnty:E().citationsCnty},P);o(g=>({...g,citPrdInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citPrdInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdInsight:!s.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?Lt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:s=>o(g=>({...g,citPrdInsight:s.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"제품별 Citation"},P);o(g=>({...g,citPrdHowToRead:s}))}catch{o(s=>({...s,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdHowToRead:!s.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?Lt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:s=>o(g=>({...g,citPrdHowToRead:s.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),v.length>0&&(()=>{const s=[...new Set(D.productsCnty.map(g=>g.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:T},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:s.map(g=>{const J=(e.cntyProductFilter||{})[g]!==!1;return n.jsx("button",{onClick:()=>o(At=>({...At,cntyProductFilter:{...At.cntyProductFilter||{},[g]:!J}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:J?"#166534":"#1E293B",color:J?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:g},g)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomInsight:"⏳ AI 생성 중..."}));const s=await Dt("dotcom",{dotcom:E().dotcom},P);o(g=>({...g,dotcomInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,dotcomInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomInsight:!s.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?Lt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:s=>o(g=>({...g,dotcomInsight:s.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomHowToRead:"⏳ AI 생성 중..."}));const s=await Dt("howToRead",{section:"닷컴 Citation"},P);o(g=>({...g,dotcomHowToRead:s}))}catch{o(g=>({...g,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomHowToRead:!s.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?Lt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:s=>o(g=>({...g,dotcomHowToRead:s.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:s=>o(g=>({...g,todoNotice:s.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,todoText:"⏳ AI 생성 중..."}));const s=await Dt("todo",{products:E().products},P);o(g=>({...g,todoText:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,todoText:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Mt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showTodo:!s.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?Lt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:s=>o(g=>({...g,todoText:s.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Ft,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:T},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:wn,style:{width:"100%",padding:"9px 0",background:ct?"#14532D":"transparent",border:`1px solid ${ct?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:ct?"#86EFAC":"#64748B",fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:ct?n.jsxs(n.Fragment,{children:[n.jsx(Xe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Wo,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:T},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:dt,onChange:s=>ht(s.target.value),placeholder:"recipient@example.com",style:{...Ft,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:kn,disabled:O==="sending"||!dt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:O==="sending"||!dt.trim()?"not-allowed":"pointer",background:O==="ok"?"#14532D":O==="error"?"#7F1D1D":O==="sending"?"#1E3A5F":dt.trim()?"#1D4ED8":"#1E293B",color:O==="ok"?"#86EFAC":O==="error"?"#FCA5A5":dt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:O==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(bo,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):O==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(Xe,{size:12})," 발송 완료!"]}):O==="error"?n.jsxs(n.Fragment,{children:[n.jsx(vo,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(vo,{size:12})," 메일 발송 (KO + EN)"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:T,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function yi({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:a,style:r}){const l=Ko.useMemo(()=>On(o,i,a),[o,i,a]);return!l.length||l.length===1&&l[0]==="Total"?null:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...r},children:[n.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),n.jsx("select",{value:t||"Total",onChange:c=>e(c.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:l.map(c=>n.jsx("option",{value:c,children:c},c))})]})}const fe="weekly-report",Vo="geo-weekly-report-cache";function bi({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:h,weeklyAll:x,categoryStats:m,cntyKeys:u=null,llmModel:d,monthlyVis:p}){const k=lt.useRef(null),v=lt.useMemo(()=>ro(t,e,o,i,a,c,r,l,{weeklyLabels:h,weeklyAll:x,categoryStats:m,cntyKeys:u,llmModel:d,monthlyVis:p}),[t,e,o,i,a,c,r,l,h,x,m,u,d,p]);return Ko.useEffect(()=>{const y=k.current;if(!y)return;const w=y.contentDocument||y.contentWindow.document;w.open(),w.write(v),w.close();const b=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const D=w.documentElement.scrollHeight;D&&(y.style.height=D+20+"px")}catch{}};setTimeout(b,150),setTimeout(b,400),setTimeout(b,1e3),setTimeout(b,2e3)},[v]),n.jsx("iframe",{ref:k,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function xi({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:h,weeklyAll:x,categoryStats:m,cntyKeys:u=null,llmModel:d,monthlyVis:p}){const[k,v]=lt.useState(!1),y=lt.useMemo(()=>ro(t,e,o,i,a,c,r,l,{weeklyLabels:h,weeklyAll:x,categoryStats:m,cntyKeys:u,llmModel:d,monthlyVis:p}),[t,e,o,i,a,c,r,l,h,x,m,u,d,p]);async function w(){try{await navigator.clipboard.writeText(y)}catch{const b=document.createElement("textarea");b.value=y,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}v(!0),setTimeout(()=>v(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:T},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":Lt,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:k?n.jsxs(n.Fragment,{children:[n.jsx(Xe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(Wo,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:y})})]})}function vi(){const t=lt.useRef(sr(Vo)).current,[e,o]=lt.useState({...$e,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=lt.useState({...$e,...(t==null?void 0:t.metaEn)??{}}),[r,l]=lt.useState((t==null?void 0:t.total)??er),[c,h]=lt.useState((t==null?void 0:t.products)??or),[x,m]=lt.useState((t==null?void 0:t.citations)??ar),[u,d]=lt.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:nr),[p,k]=lt.useState((t==null?void 0:t.productsCnty)??rr),[v,y]=lt.useState((t==null?void 0:t.citationsCnty)??ir),[w,b]=lt.useState((t==null?void 0:t.weeklyLabels)??null),[D,P]=lt.useState((t==null?void 0:t.weeklyAll)??{}),[N,V]=lt.useState(null),[B,_]=lt.useState("preview"),[H,$]=lt.useState("ko"),[q,A]=lt.useState("Total"),[I,L]=lt.useState((t==null?void 0:t.monthlyVis)??[]),[z,K]=lt.useState([]),[ot,nt]=lt.useState(""),[f,Y]=lt.useState(!1),[G,ft]=lt.useState(""),[S,C]=lt.useState(null),[F,M]=lt.useState(!0),[E,U]=lt.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),yt=lt.useMemo(()=>{const Z=new Set;return(p||[]).forEach(W=>{W&&W.country&&!/^(ttl|total)$/i.test(W.country)&&Z.add(String(W.country).toUpperCase())}),Array.from(Z).sort()},[p]),wt=E.length>0?E:null,mt=lt.useCallback(Z=>{U(W=>W.includes(Z)?W.filter(Q=>Q!==Z):[...W,Z])},[]),bt=lt.useCallback(()=>U(yt),[yt]),Ct=lt.useCallback(()=>U([]),[]);lt.useEffect(()=>{let Z=!1;const W=vr(e.period)||`${new Date().getMonth()+1}월`,Q=wr(W);async function Et(){var Bt,Rt,Ht;try{const Jt=await fetch("/api/tracker-snapshot-v2"),jt=Jt.ok?await Jt.json():null;if(jt!=null&&jt.ok&&((Ht=(Rt=(Bt=jt.data)==null?void 0:Bt.quantitativeGoals)==null?void 0:Rt.rows)!=null&&Ht.length)){const Zt=Ao(jt.data,Q);if(Zt!=null&&Zt.length&&!Z){V(Zt);return}}}catch{}try{const[{parseKPISheet:Jt},jt]=await Promise.all([Ze(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ze(()=>import("./xlsx-CaYOwpyI.js").then(Pt=>Pt.x),__vite__mapDeps([0,1]))]),Zt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,pe=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Zt}&headers=1`,oe=await fetch(pe,{cache:"no-store"});if(!oe.ok)return;const Nt=await oe.text(),Wt=jt.read(Nt,{type:"string"}),ie=Wt.Sheets[Wt.SheetNames[0]],ve=jt.utils.sheet_to_json(ie,{header:1,defval:""}),ue=Jt(ve),me=Ao(ue,Q);me!=null&&me.length&&!Z&&V(me)}catch{}}return Et(),()=>{Z=!0}},[e.period]);const St=H==="en"?i:e,j=H==="en"?a:o,X=lt.useMemo(()=>ye(c,p,x,v,H),[c,p,x,v,H]);lt.useEffect(()=>{cr(fe).then(K)},[]);const at=lt.useRef(null);function ct(Z,W=2e3){clearTimeout(at.current),ft(Z),at.current=setTimeout(()=>ft(""),W)}lt.useEffect(()=>()=>clearTimeout(at.current),[]);const xt=lt.useRef(!1);lt.useEffect(()=>{let Z=!1;return Me(fe).then(W=>{Z||!W||(xt.current=!0,W.meta&&o(Q=>({...Q,...W.meta})),W.total&&l(Q=>({...Q,...W.total})),W.citations&&m(W.citations),W.dotcom&&d(Q=>({...Q,...W.dotcom})),W.productsCnty&&k(W.productsCnty),W.citationsCnty&&y(W.citationsCnty),W.weeklyLabels&&b(W.weeklyLabels),W.weeklyAll&&P(Q=>({...Q,...W.weeklyAll})),W.monthlyVis&&L(W.monthlyVis),W.productsPartial?h(W.productsPartial.map(Q=>{var Rt;const Et=((Rt=W.weeklyMap)==null?void 0:Rt[Q.id])||[],Bt=Q.vsComp>0?Q.score/Q.vsComp*100:100;return{...Q,weekly:Et,monthly:[],compRatio:Math.round(Bt),status:Bt>=100?"lead":Bt>=80?"behind":"critical"}})):W.weeklyMap&&h(Q=>Q.map(Et=>{var Rt;const Bt=(Rt=W.weeklyMap)==null?void 0:Rt[Et.id];return Bt?{...Et,weekly:Bt}:Et})))}),()=>{Z=!0}},[]),lt.useEffect(()=>{lr(Vo,{metaKo:e,metaEn:i,total:r,products:c,citations:x,dotcom:u,productsCnty:p,citationsCnty:v,weeklyLabels:w,weeklyAll:D,selectedCountries:E})},[e,i,r,c,x,u,p,v,w,D,E]);async function dt(){if(!S)return;const W=await ur(fe,S,{metaKo:e,metaEn:i,total:r,products:c,citations:x,dotcom:u,productsCnty:p,citationsCnty:v,weeklyLabels:w,weeklyAll:D});W&&K(W),ct(W?"저장 완료!":"저장 실패")}async function ht(){var Q;const Z=ot.trim()||`${St.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,W=await pr(fe,Z,{metaKo:e,metaEn:i,total:r,products:c,citations:x,dotcom:u,productsCnty:p,citationsCnty:v,weeklyLabels:w,weeklyAll:D});W&&(K(W),nt(""),C(((Q=W[0])==null?void 0:Q.ts)||null)),ct(W?"새로 저장 완료!":"저장 실패")}async function O(Z){const W=await dr(fe,Z.ts);if(!W||W.data==null){ft("불러오기 실패 — 저장본을 찾을 수 없습니다");return}const Q=W.data;o({...$e,...Q.metaKo||Q.meta||{}}),a({...$e,...Q.metaEn||{}}),Q.total&&l(Q.total),Q.products&&h(Q.products),Q.citations&&m(Q.citations),Q.dotcom&&d(Q.dotcom),Q.productsCnty&&k(Q.productsCnty),Q.citationsCnty&&y(Q.citationsCnty),Q.weeklyLabels&&b(Q.weeklyLabels),Q.weeklyAll&&P(Q.weeklyAll),C(Z.ts),ct(`"${Z.name}" 불러옴`)}async function rt(Z){const W=z[Z];if(!W)return;const Q=await hr(fe,W.ts);Q&&K(Q),S===W.ts&&C(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:T},children:[F&&n.jsx(gi,{mode:fe,meta:St,setMeta:j,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:r,setTotal:l,products:c,setProducts:h,citations:x,setCitations:m,dotcom:u,setDotcom:d,productsCnty:p,setProductsCnty:k,citationsCnty:v,setCitationsCnty:y,resolved:X,previewLang:H,setPreviewLang:$,snapshots:z,setSnapshots:K,setWeeklyLabels:b,setWeeklyAll:P,weeklyLabels:w,weeklyAll:D,generateHTML:ro}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>M(Z=>!Z),title:F?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:F?n.jsx(Ln,{size:16}):n.jsx(Bn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Z,tab:W,lang:Q,label:Et})=>{const Bt=W==="code"?B==="code":B==="preview"&&H===Q;return n.jsx("button",{onClick:()=>{_(W),Q&&$(Q)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Bt?"#1E293B":"transparent",color:Bt?"#FFFFFF":"#475569",fontSize:11,fontWeight:Bt?700:500,fontFamily:T,cursor:"pointer"},children:Et},Z)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[G&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:T},children:G}),n.jsxs("button",{onClick:dt,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[n.jsx(wo,{size:11})," 저장"]}),n.jsx("input",{value:ot,onChange:Z=>nt(Z.target.value),placeholder:"버전 이름...",onKeyDown:Z=>Z.key==="Enter"&&ht(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:T,outline:"none"}}),n.jsxs("button",{onClick:ht,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4},children:[n.jsx(wo,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>Y(!f),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:f?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:T,display:"flex",alignItems:"center",gap:4},children:[n.jsx($n,{size:11})," 불러오기 ",z.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",z.length,")"]})]}),f&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Z=>Z.stopPropagation(),children:z.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:T,textAlign:"center"},children:"저장된 버전이 없습니다"}):z.map((Z,W)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===Z.ts?"#1E3A5F":"#0F172A",border:S===Z.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:T,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Z.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:T},children:new Date(Z.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{O(Z),Y(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:T},children:"적용"}),n.jsx("button",{onClick:()=>rt(W),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(In,{size:10})})]},Z.ts))})]})]})]}),yt.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),yt.map(Z=>{const W=E.includes(Z);return n.jsx("button",{onClick:()=>mt(Z),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(W?"#22C55E":"#334155"),background:W?"#16A34A":"#1E293B",color:W?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:Z},Z)}),n.jsx("button",{onClick:bt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:Ct,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:E.length===0?"전체 국가":`${E.length}개 선택`})]}),B==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:n.jsx(yi,{value:q,onChange:A,products:X.products,productsCnty:X.productsCnty,monthlyVis:I})}),n.jsx(bi,{meta:St,total:r,products:X.products,citations:X.citations,dotcom:u,productsCnty:X.productsCnty,citationsCnty:X.citationsCnty,lang:H,weeklyLabels:w,weeklyAll:D,categoryStats:N,cntyKeys:wt,llmModel:q,monthlyVis:I})]})}):n.jsx(xi,{meta:St,total:r,products:X.products,citations:X.citations,dotcom:u,productsCnty:X.productsCnty,citationsCnty:X.citationsCnty,lang:H,weeklyLabels:w,weeklyAll:D,categoryStats:N,cntyKeys:wt,llmModel:q,monthlyVis:I}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:T},children:["v","3.1.9"]})})]})]})}Rn.createRoot(document.getElementById("root")).render(n.jsx(vi,{}));
