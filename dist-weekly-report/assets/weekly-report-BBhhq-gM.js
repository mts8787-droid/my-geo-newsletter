const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-CaYOwpyI.js","assets/react-Ce9l3SD5.js"])))=>i.map(i=>d[i]);
import{j as n,b as at,R as ko,L as Rn,D as jn,G as So,A as Pn,c as Ke,S as jt,P as Mn,C as to,d as en,e as Fo,f as on,h as Dn,i as On,k as To,F as Nn,T as _n}from"./react-Ce9l3SD5.js";import{R as zn}from"./react-dom-D_GsT2Iz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const Gn="modulepreload",Un=function(t){return"/admin/weekly-report/"+t},Eo={},eo=function(e,o,a){let i=Promise.resolve();if(o&&o.length>0){let l=function(x){return Promise.all(x.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),y=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=l(o.map(x=>{if(x=Un(x),x in Eo)return;Eo[x]=!0;const h=x.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${p}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Gn,h||(d.as="script"),d.crossOrigin="",d.href=x,y&&d.setAttribute("nonce",y),document.head.appendChild(d),h)return new Promise((u,k)=>{d.addEventListener("load",u),d.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},Hn=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Me={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},nn={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Le={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Te={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Wn={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Hn.map((t,e)=>[t,e]));const Pe={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},rn=new Set(Object.values(Le)),Ao=[...new Set(Object.values(Pe))].filter(t=>!rn.has(t));Ao.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Ao,validCodes:[...rn]});const ae="Total";function Vn(...t){const e=new Set([ae]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(a=>{a!=null&&a.llmModel&&e.add(a.llmModel),((a==null?void 0:a.monthlyScores)||[]).forEach(r=>Object.keys((r==null?void 0:r.byLlm)||{}).forEach(l=>e.add(l)))})}),[ae,...Array.from(e).filter(o=>o!==ae).sort((o,a)=>o.localeCompare(a))]}function an(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var x;const a=(o==null?void 0:o.monthlyScores)||[];if(!a.length)return o;const i=a.filter(h=>{var p;return(p=h==null?void 0:h.byLlm)==null?void 0:p[e]}),r=i[i.length-1]||null,l=i.length>=2?i[i.length-2]:null;if(!r)return o;const c=r.byLlm[e],y=(x=l==null?void 0:l.byLlm)==null?void 0:x[e];return{...o,score:c.score??o.score,prev:(y==null?void 0:y.score)??null,vsComp:c.comp??o.vsComp,allScores:c.allScores??o.allScores,monthlyScore:c.score??o.monthlyScore??o.score,monthlyPrev:(y==null?void 0:y.score)??null,monthlyScores:a.map(h=>{var d;const p=(d=h==null?void 0:h.byLlm)==null?void 0:d[e];return p?{...h,score:p.score,comp:p.comp,allScores:p.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function sn(t,e){return!Array.isArray(t)||!e||e===ae?t:t.map(o=>{var h;const a=(o==null?void 0:o.monthlyScores)||[];if(!a.length)return o;const i=a.filter(p=>{var d;return(d=p==null?void 0:p.byLlm)==null?void 0:d[e]}),r=i[i.length-1]||null,l=i.length>=2?i[i.length-2]:null;if(!r)return o;const c=r.byLlm[e],y=(h=l==null?void 0:l.byLlm)==null?void 0:h[e],x=c.compScore??o.compScore;return{...o,score:c.score??o.score,prev:(y==null?void 0:y.score)??null,compScore:x,compName:c.compName??o.compName,allScores:c.allScores??o.allScores,gap:+((c.score??o.score)-x||0).toFixed(2),monthlyScores:a.map(p=>{var u;const d=(u=p==null?void 0:p.byLlm)==null?void 0:u[e];return d?{...p,score:d.score,compScore:d.compScore,compName:d.compName,allScores:d.allScores}:{...p,score:null,compScore:null,compName:null,allScores:null}})}})}function Kn(t,e){if(!Array.isArray(t)||!e||e===ae)return(t||[]).filter(i=>!i.llmModel||i.llmModel===ae||i.llmModel==="TOTAL"||i.llmModel==="All");const o={};t.forEach(i=>{const r=`${i.date}|${i.country}|${i.division}`;o[r]||(o[r]={}),o[r][i.llmModel]=i});const a=[];return Object.values(o).forEach(i=>{const r=i[e]||i[ae]||i.TOTAL||i.All;r&&a.push(r)}),a}function ln(t,e,o){if(!o||o===ae||!Array.isArray(e)||!e.length)return t;const a=e.filter(l=>(l.country==="TOTAL"||l.country==="TTL")&&(l.division==="TOTAL"||l.division==="TTL"||l.division==="")&&l.llmModel===o);if(!a.length)return t;a.sort((l,c)=>String(l.date).localeCompare(String(c.date)));const i=a[a.length-1],r=a.length>=2?a[a.length-2]:null;return{...t,score:i.lg??t.score,prev:(r==null?void 0:r.lg)??t.prev,vsComp:i.comp??t.vsComp}}function qn(t){const e=String(t??"").trim().toUpperCase();return!e||e==="TTL"||e==="TOTAL"}function Jn(t){const e=String(t??"").trim();return!e||/^(total|all|ttl)$/i.test(e)}function Yn(t){const e=new Map;(t||[]).forEach(a=>{if(!a||!a.domain)return;const i=Number(a.citations)||0;if(!(i>0))return;e.has(a.domain)||e.set(a.domain,{cnty:a.cnty,domain:a.domain,ttlSum:0,ttlTop:0,ttlType:"",prdSum:0,prdTop:0,prdType:""});const r=e.get(a.domain);qn(a.prd)?(r.ttlSum+=i,i>r.ttlTop&&(r.ttlTop=i,r.ttlType=a.type||"")):(r.prdSum+=i,i>r.prdTop&&(r.prdTop=i,r.prdType=a.type||""))});const o=[];return e.forEach(a=>{const i=a.ttlSum>0,r=i?a.ttlSum:a.prdSum;r>0&&o.push({cnty:a.cnty,domain:a.domain,type:(i?a.ttlType:a.prdType)||"",citations:r})}),o.sort((a,i)=>i.citations-a.citations||String(a.domain).localeCompare(String(i.domain))),o.forEach((a,i)=>{a.rank=i+1}),o}const ct="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Xn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function xe(t){const e=Xn.indexOf(t);return e>=0?e:999}function Dt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Lo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function cn(t){return Lo.filter(e=>t.includes(e)).concat(t.filter(e=>!Lo.includes(e)))}const Zn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function dn(t){return Zn[String(t||"").trim().toUpperCase()]||t}function Ee(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Qn(t,e){if(t==null||e==null)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function oo(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function Se(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function tr(t,e){if(!t||!Object.keys(t).length)return{products:[],productsCnty:[],lastLabel:null,prevLabel:null};const o=Me,a=nn,i=[],r=[];Object.entries(t).forEach(([y,x])=>{if(!x)return;const h=x.Total||x.TTL||x.TOTAL;if(h){const p=h.LG||h.lg||[],d=p.length>0?p[p.length-1]:null,u=p.length>=2?p[p.length-2]:null;let k="",b=0;Object.entries(h).forEach(([m,w])=>{if(m==="LG"||m==="lg")return;const v=Array.isArray(w)&&w.length?w[w.length-1]:0;v>b&&(b=v,k=m)}),d!=null&&d>0&&i.push({id:y,kr:o[y]||y,bu:a[y]||"OTHER",score:d,prev:u,vsComp:b,compName:k,category:o[y]||y})}Object.entries(x).forEach(([p,d])=>{if(p==="Total"||p==="TTL"||p==="TOTAL")return;const u=d.LG||d.lg||[],k=u.length>0?u[u.length-1]:null,b=u.length>=2?u[u.length-2]:null;if(k==null||k<=0)return;let m="",w=0;Object.entries(d).forEach(([v,j])=>{if(v==="LG"||v==="lg")return;const M=Array.isArray(j)&&j.length?j[j.length-1]:0;M>w&&(w=M,m=v)}),r.push({product:o[y]||y,country:p,score:k,prev:b,compScore:w,compName:m})})});const l=(e==null?void 0:e[e.length-1])||"This Week",c=(e==null?void 0:e[e.length-2])||"Last Week";return{products:i,productsCnty:r,lastLabel:l,prevLabel:c}}function er(t,e,o,a){if(!t.length)return"";const i=e==="en"?{title:"Weekly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",wow:"WoW(%p)"}:{title:"주간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",wow:"WoW(%p)"},r=["MS","HS","ES"],l={};t.forEach(y=>{const x=y.bu||"OTHER";l[x]||(l[x]=[]),l[x].push(y)});const c=[];return r.forEach(y=>{const x=(l[y]||[]).slice().sort((h,p)=>xe(h.kr||h.category||h.id)-xe(p.kr||p.category||p.id));x.forEach((h,p)=>{const d=Qn(h.score,h.prev),u=Se(h.score,h.vsComp)||"#FFFFFF";c.push(`<tr>
        ${p===0?`<td rowspan="${x.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${y}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;">${Dt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;font-weight:700;background:${u};">${Ee(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;background:${u};">${Ee(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;background:${u};">${Dt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;font-weight:700;background:${u};">${oo(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${ct};text-align:center;">${d}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title} <span style="font-size:12px;font-weight:400;color:#666;">(${o} vs ${a})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.wow}</th>
      </tr>
    </thead>
    <tbody>${c.join("")}</tbody>
  </table>`}function or(t,e,o,a){const i=e==="en"?{product:"Product",metric:"Metric",title:"Weekly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"주간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={},l=new Set,c=new Set;t.forEach(u=>{!u.country||!u.product||(l.add(u.country),c.add(u.product),r[u.product]||(r[u.product]={}),r[u.product][u.country]=u)});const y=cn(Array.from(l)),x=Array.from(c).sort((u,k)=>xe(u)-xe(k));if(!x.length||!y.length)return"";const h={};(o||[]).forEach(u=>{[u.kr,u.category,u.id,u.en].filter(Boolean).forEach(b=>{h[b]=u})});const p='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+y.map(u=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Dt(dn(u))}</th>`).join(""),d=[];return x.forEach((u,k)=>{const b=k%2===0?"#FFFFFF":"#FAFAFA",m=h[u],v=(m?Se(m.score,m.vsComp):null)||b,j=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${v};">${m?Ee(m.score):"—"}</td>`,M=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${v};">${m?oo(m.score,m.vsComp):"—"}</td>`,G=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;background:${v};color:#1A1A1A;font-weight:600;">${m!=null&&m.compName?Dt(m.compName):"—"}</td>`,V=y.map(W=>{var I;const B=(I=r[u])==null?void 0:I[W],L=(B?Se(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${L};">${B?Ee(B.score):"—"}</td>`}).join(""),F=y.map(W=>{var I;const B=(I=r[u])==null?void 0:I[W],L=(B?Se(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;font-weight:700;background:${L};">${B?oo(B.score,B.compScore):"—"}</td>`}).join(""),z=y.map(W=>{var I;const B=(I=r[u])==null?void 0:I[W],L=(B?Se(B.score,B.compScore):null)||b;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${ct};text-align:center;background:${L};color:#1A1A1A;font-weight:600;">${B!=null&&B.compName?Dt(B.compName):"—"}</td>`}).join("");d.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${ct};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Dt(u)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};font-weight:600;background:#F5F5F5;white-space:nowrap;">${i.lg} (%)</td>
        ${j}${V}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};background:#F5F5F5;white-space:nowrap;">${i.ratio}</td>
        ${M}${F}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${ct};background:#F5F5F5;white-space:nowrap;">${e==="en"?"Top Comp":"경쟁사"}</td>
        ${G}${z}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title} <span style="font-size:12px;font-weight:400;color:#666;">(${a})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${i.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${i.metric}</th>
        ${p}
      </tr>
    </thead>
    <tbody>${d.join("")}</tbody>
  </table>
  </div>`}function nr(t,e,o,a){const i=e==="en"?{title:`Country × Product — Week-over-Week (${o} vs ${a})`,product:"Product"}:{title:`국가별 × 제품별 전주대비 (${o} vs ${a})`,product:"제품"},r={},l=new Set,c=new Set;t.forEach(d=>{!d.country||!d.product||(l.add(d.country),c.add(d.product),r[d.product]||(r[d.product]={}),r[d.product][d.country]=d)});const y=cn(Array.from(l)),x=Array.from(c).sort((d,u)=>xe(d)-xe(u));if(!x.length||!y.length)return"";const h=y.map(d=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${Dt(dn(d))}</th>`).join(""),p=x.map(d=>{const u=y.map(k=>{var V;const b=(V=r[d])==null?void 0:V[k];if(!b||b.score==null)return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${ct};text-align:center;color:#999;">—</td>`;const m=b.score,w=b.prev,v=w!=null?+(m-w).toFixed(1):null,j=v==null?"#999":v>0?"#16A34A":v<0?"#DC2626":"#666",M=v==null?"":v>0?"▲":v<0?"▼":"─",G=v!=null?`${M}${Math.abs(v).toFixed(1)}`:"—";return`<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${ct};text-align:center;">
        <div style="font-weight:700;color:#111;">${Ee(m)}%</div>
        <div style="font-size:9px;color:${j};">${G}</div>
      </td>`}).join("");return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${Dt(d)}</td>
      ${u}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${i.product}</th>
      ${h}
    </tr></thead>
    <tbody>${p}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${ct};">* ${e==="en"?"Each cell: current week LG score (% difference vs. previous week)":"각 셀: 이번주 LG 점수 (전주 대비 차이)"}</p>`}function rr(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},a=t.reduce((r,l)=>r+(l.score||0),0),i=t.map((r,l)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;">${l+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Dt(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${a>0?(r.score/a*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${i}</tbody>
  </table>`}function ir(t,e){const o=Yn((t||[]).filter(c=>(c.cnty==="TTL"||c.cnty==="TOTAL"||!c.cnty)&&Jn(c.llm)));if(!o.length)return"";const a=o.slice(0,20),i=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((c,y)=>c+(y.citations||0),0),l=a.map((c,y)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;">${y+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Dt(c.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};">${Dt(c.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${(c.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${r>0?(c.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${i.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${i.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${i.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function ar(t,e){if(!t||!t.lg)return"";const o=t.lg,a=t.samsung||{},i=Object.keys(o).filter(c=>o[c]!=null);if(!i.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},l=i.map(c=>{const y=o[c]||0,x=a[c]||0,h=y-x,p=h>0?"LG":h<0?"SS":"=",d=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",u=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${d};color:${u};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};font-weight:${c==="TTL"?"900":"600"};">${Dt(c)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;">${x.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${ct};text-align:center;font-weight:900;">${p}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${ct};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${l}</tbody>
  </table>`}function sr(t,e){var l;if(!t||!t.length)return"";const o=((l=t[0])==null?void 0:l.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${o} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${o} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function i(c){return c>=80?"#D1FAE5":c>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(c=>{const y=(c.monthRate||0).toFixed(0),x=(c.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${ct};background:#F5F5F5;">${Dt(c.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(c.monthRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.monthActual||0).toLocaleString()} / ${(c.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(c.progressRate)};">${x}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.cumActual||0).toLocaleString()} / ${(c.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${ct};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${ct};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${ct};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function so(t,e,o,a,i={},r="ko",l=[],c=[],y={}){const{weeklyAll:x={},weeklyLabels:h=[],categoryStats:p=null,cntyKeys:d=null,llmModel:u,monthlyVis:k}=y;u&&u!=="Total"&&(o=an(o,u),l=sn(l,u),e=ln(e,k,u));let b=x;if(Array.isArray(d)&&d.length>0){const F=new Set(d.map(W=>String(W).toUpperCase())),z=W=>/^(total|ttl)$/i.test(String(W));l=(l||[]).filter(W=>W&&F.has(String(W.country).toUpperCase())),c=(c||[]).filter(W=>W&&F.has(String(W.country).toUpperCase())),b={},Object.entries(x||{}).forEach(([W,B])=>{if(!B)return;const J={};Object.entries(B).forEach(([L,I])=>{(z(L)||F.has(String(L).toUpperCase()))&&(J[L]=I)}),b[W]=J})}const m=tr(b,h),w=m.products.length?m.products:o,v=m.productsCnty.length?m.productsCnty:l,j=m.lastLabel,M=m.prevLabel,G=r==="en"?"GEO Weekly Report":"GEO 주간 보고서",V=t.period||j||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Dt(G)} — ${Dt(V)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${ct} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${ct};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${ct};">${Dt(G)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${ct};">${Dt(V)} · ${j?`${Dt(j)} ${r==="en"?"data":"기준"}`:""}</p>
    </div>

    ${er(w,r,j,M)}
    ${nr(v,r,j,M)}
    ${or(v,r,w,j)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${ct};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${rr(a,r)}
    ${ir(c,r)}
    ${ar(i,r)}

    ${sr(p,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${ct};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const It="#CF0652",E="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",lr=`1. GEO 최적화의 중요성 및 방향성 정의

LLM 모델의 발전에 따라 마케팅 패러다임이 기존 자사몰 유입 트래픽 중심에서 생성형 AI 답변 내 브랜드 노출(Visibility) 및 자사 콘텐츠 인용(Citation) 확보로 전환되고 있습니다. 닷컴뿐만 아니라 제3자 콘텐츠를 크로스체크하는 AI의 특성상, 외부 접점 채널의 콘텐츠를 AI 향으로 최적화하는 활동은 향후 AI 커머스 및 마케팅 경쟁력 유지의 핵심 요소입니다. 이에 따라 Brand Visibility를 핵심 KPI로 설정하고, AI Citations 및 Readability를 보조 지표로 선정하여 실시간 시각화 대시보드를 통해 성과를 관리하고 있습니다.

GEO KPI Dashboard 바로가기

2. 4월 실적 리뷰 - AI 노출 및 인용 현황

2.1 글로벌 성과 요약

4월 기준 글로벌 Visibility 41.9%를 기록하며 주요 경쟁사(38.5%)를 3.4%p 앞서며 리더십을 유지하고 있습니다. 모니터(60.1%), 세탁기(40.2%), 냉장고(44%), RAC(44.6%)는 안정적인 우위를 점하고 있으나, TV(85.9%)는 전월 대비 -1.5%p 하락하며 경쟁사 대비 경쟁비 1.0 수준에 머물러 있어 주의가 필요합니다.

2.2 지역별 세부 현황

북미 (미국·캐나다): 세탁기(미국 1.4, 캐나다 1.3)와 냉장고(양국 1.2)에서 삼성 대비 확실한 우위를 유지 중입니다. TV는 가시성 자체는 높으나(미국 88.1%, 캐나다 79.1%), 경쟁비가 각각 1.0, 0.9로 접전 상황입니다. 청소기(0.08~0.11) 및 식기세척기(0.7)는 Dyson, Bosch 등 전문 브랜드 대비 열세가 지속되고 있습니다.

유럽 (영국·독일·스페인): 스페인은 세탁기(1.2) 및 냉장고(1.0)에서 우위를 보이며 HA 카테고리 경쟁력이 양호합니다. 반면 독일은 Bosch의 영향으로 세탁기 0.6, 식기세척기 0.08의 낮은 경쟁비를 기록했습니다. TV는 3개국 모두 삼성과 경쟁비 0.9~1.0 수준으로 접전 중이며, 청소기(0.01~0.04)는 Dyson 대비 극히 열세입니다.

중남미 (브라질·멕시코): RAC 영역에서 Media 대비 최고 1.6(멕시코)의 압도적 우위를 기록했습니다. 브라질은 Cooking에서 경쟁비 2.4로 리더십을 보였으나 냉장고(0.9)는 열세입니다. 멕시코는 냉장고(1.0)와 세탁기(1.1) 모두 우위를 유지하고 있습니다.

아시아 (베트남·호주·인도): 세탁기(1.1~1.2)는 3개국 모두 우세하며, 냉장고 역시 상대적으로 양호한 성과를 보입니다. 특히 인도는 모니터(1.2), RAC(1.3), Cooking(1.0) 등 전 품목에서 균형 잡힌 경쟁력을 확보했습니다.

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Ie={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",showTotalInsight:!0,showInsightV2:!1,showInsightV3:!0,productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,showHighlight:!0,highlightInsight:"",showHighlightInsight:!1,bumpInsight:"",showBumpInsight:!1,hlChapterTitle:"",hlWeeklyTitle:"",hlModelTitle:"",hlBumpTitle:"",kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,showTodoV2:!1,monthlyReportBody:lr,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showDotcomChatGpt:!0,showTouchPointsBump:!0,showTouchPointsBumpChatGpt:!0,showDomainBumpModels:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},cr={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},dr=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],pr={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},ur=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],hr=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],fr=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],mr=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"],pn=3;function gr(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==pn?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function yr(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:pn}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ue={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function de(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function br(t){try{const e=await fetch(de(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function xr(t,e){try{const o=await fetch(`${de(t).snapshots}/${e}`);if(!o.ok)return null;const a=await o.json();return a.ok?a.snapshot:null}catch(o){return console.warn("[API] fetchSnapshotData failed:",o.message),null}}async function vr(t,e,o){try{const a=await fetch(de(t).snapshots,{method:"POST",headers:Ue,body:JSON.stringify({name:e,data:o})});if(!a.ok)return console.warn("[API] postSnapshot:",a.status),null;const i=await a.json();return i.ok?i.snapshots:null}catch(a){return console.warn("[API] postSnapshot failed:",a.message),null}}async function wr(t,e,o){try{const a=await fetch(`${de(t).snapshots}/${e}`,{method:"PUT",headers:Ue,body:JSON.stringify({data:o})});if(!a.ok)return console.warn("[API] updateSnapshot:",a.status),null;const i=await a.json();return i.ok?i.snapshots:null}catch(a){return console.warn("[API] updateSnapshot failed:",a.message),null}}async function Cr(t,e){try{const o=await fetch(`${de(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const a=await o.json();return a.ok?a.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Pt(t,e,o="ko",a="",i=""){try{const r=await fetch("/api/generate-insight",{method:"POST",headers:Ue,body:JSON.stringify({type:t,data:e,lang:o,rules:a,extraPrompt:i})});if(!r.ok){const c=await r.json().catch(()=>({}));throw new Error(c.error||`HTTP ${r.status}`)}const l=await r.json();if(!l.ok)throw new Error(l.error||"AI 생성 실패");return l.insight}catch(r){throw console.error("[API] generateAIInsight failed:",r.message),r}}async function De(t){try{const e=await fetch(de(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function $o(t){try{const e=await fetch(de(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function kr(t,e,o={}){const{includeReadability:a=!1}=o,[i,r]=await Promise.all([De("dashboard").catch(()=>null),De("visibility").catch(()=>null)]),l={...i||{},...r||{}};if(i&&Object.keys(i).forEach(L=>{l[L]==null&&i[L]!=null&&(l[L]=i[L])}),r!=null&&r.meta&&(i!=null&&i.meta)&&(l.meta={...i.meta||{},...r.meta||{}}),!l||!Object.keys(l).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const c=l.meta||{},y=l.total||{},h=(l.productsPartial||l.products||[]).map(L=>{var H;const I=L.weekly||((H=l.weeklyMap)==null?void 0:H[L.id])||[],R=L.vsComp>0?L.score/L.vsComp*100:100;return{...L,weekly:I,monthly:L.monthly||[],compRatio:L.compRatio||Math.round(R),status:L.status||(R>=100?"lead":R>=80?"behind":"critical")}}),p=l.citations||[],d=l.dotcom||{},u=l.productsCnty||[],k=l.citationsCnty||[],b=l.weeklyLabels||null,m=l.weeklyAll||{},w=l.citationsByCnty||{},v=l.dotcomByCnty||{},j=e(h,u,p,k,"ko"),M=e(h,u,p,k,"en"),G={weeklyPR:l.weeklyPR||[],weeklyPRLabels:l.weeklyPRLabels||[],monthlyPR:l.monthlyPR||[],monthlyPRLabels:l.monthlyPRLabels||[],weeklyBrandPrompt:l.weeklyBrandPrompt||[],weeklyBrandPromptLabels:l.weeklyBrandPromptLabels||[],unlaunchedMap:l.unlaunchedMap||{},prTopicList:l.prTopicList||[],weeklyLabelsFull:l.weeklyLabelsFull||[]},V={monthlyVis:l.monthlyVis||[],includeReadability:a},F=t(c,y,j.products,j.citations,d,"ko",j.productsCnty,j.citationsCnty,b,m,w,v,V,G),z=t({...c,title:c.title||"GEO KPI Dashboard"},y,M.products,M.citations,d,"en",M.productsCnty,M.citationsCnty,b,m,w,v,V,G),W=`${c.period||""} ${c.title||"KPI Dashboard"}`.trim(),J=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:W,htmlKo:F,htmlEn:z})})).json();if(!J.ok)throw new Error(J.error||"게시 실패");return J}async function Bo(t,e){try{const o=await fetch(de(t).syncData,{method:"POST",headers:Ue,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Sr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},qe={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},Io={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function ye(t,e,o,a,i){return i!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:a}:{products:t.map(r=>({...r,kr:r.en||qe[r.kr]||r.kr,compName:r.compNameEn||Io[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||Sr[r.country]||r.country,product:r.productEn||qe[r.product]||r.product,compName:r.compNameEn||Io[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||qe[r.category]||r.category})),citationsCnty:a.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function Fr(t,{from:e="ko",to:o="en"}={}){var a;try{const i=await fetch("/api/translate",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({texts:t,from:e,to:o})}),r=await i.json().catch(()=>({}));if(!i.ok||!r.ok)throw new Error(r.error||`번역 실패 (${i.status})`);if(!Array.isArray(r.translated)||r.translated.length!==t.length)throw new Error(`번역 결과 길이 불일치 (${(a=r.translated)==null?void 0:a.length} ≠ ${t.length})`);return r.translated}catch(i){return console.warn("[translate] 서버 프록시 실패 → 직접 호출 폴백:",i.message),Tr(t,{from:e,to:o})}}async function Tr(t,{from:e="ko",to:o="en"}={}){const i=[];for(let r=0;r<t.length;r+=5){const l=t.slice(r,r+5),c=await Promise.all(l.map(async y=>{if(!y||!y.trim())return y;const x=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(y)}`,h=await fetch(x);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(d=>d[0]).join("")}));i.push(...c)}return i}const Re=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Er=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Ar(t){const e=Er.indexOf(t);return e>=0?e:999}function je(t){return Ar(t)}function un(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Lr(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[un(o)]=o)}),e}function Ro(t,e){var p,d,u,k;if(!((p=t==null?void 0:t.quantitativeGoals)!=null&&p.rows))return(u=(d=t==null?void 0:t._dashboard)==null?void 0:d.categoryStats)!=null&&u.length?[...t._dashboard.categoryStats].sort((b,m)=>je(b.category)-je(m.category)):null;const o=t.quantitativeGoals.rows,a=Lr((k=t.quantitativeResults)==null?void 0:k.rows),r=new Date().getMonth()+1-1,l=r>=3&&r<=12?`${r}월`:"3월";let c=e||t._month||l,y=Re.indexOf(c);y<0&&(c="3월",y=0);const x=[...new Set(o.map(b=>b.taskCategory).filter(Boolean))],h=y>0?Re[y-1]:null;return x.map(b=>{const m=o.filter(B=>B.taskCategory===b);let w=0,v=0,j=0,M=0,G=0,V=0;m.forEach(B=>{var H,K,ot,et,f;const J=un(B),L=a[J]||{},I=typeof((H=B.monthly)==null?void 0:H[c])=="number"?B.monthly[c]:0,R=typeof((K=L.monthly)==null?void 0:K[c])=="number"?L.monthly[c]:0;if(v+=I,w+=R,h){const Z=typeof((ot=B.monthly)==null?void 0:ot[h])=="number"?B.monthly[h]:0,U=typeof((et=L.monthly)==null?void 0:et[h])=="number"?L.monthly[h]:0;V+=Z,G+=U}for(let Z=0;Z<=y;Z++){const U=Re[Z];typeof((f=L.monthly)==null?void 0:f[U])=="number"&&(j+=L.monthly[U])}Re.forEach(Z=>{var U;typeof((U=B.monthly)==null?void 0:U[Z])=="number"&&(M+=B.monthly[Z])})});const F=v>0?Math.round(w/v*1e3)/10:0,z=V>0?Math.round(G/V*1e3)/10:0,W=M>0?Math.round(j/M*1e3)/10:0;return{category:b,taskCount:m.length,targetMonth:c,monthRate:F,prevMonthRate:z,prevMonth:h,progressRate:W,monthActual:w,monthGoal:v,cumActual:j,annualGoal:M}}).sort((b,m)=>je(b.category)-je(m.category))}function $r(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},a=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return a?`${o[a[1].toLowerCase()]}월`:null}function Br(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(!e)return t;const a=parseInt(e[1])-1;return a<3?"3월":`${a}월`}async function hn(){const t=await eo(()=>import("./xlsx-CaYOwpyI.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}function no(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Xt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function Ir(t,e,o){console.log(`[${t}]`,e,"")}function Rr(t,e){return Array.isArray(t)?t.length===0?(no(e,"invalid input: empty rows",{len:0}),!1):!0:(no(e,"invalid input: not an array",{type:typeof t}),!1)}function lo(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const a=o.map(i=>String(i??"").trim().toLowerCase());return e.every(i=>a.some(r=>i instanceof RegExp?i.test(r):r===String(i).toLowerCase()))})}function jr(t,e="sync"){var i,r,l;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((i=t.products)==null?void 0:i.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(l=t.weeklyLabels)!=null&&l.length&&t.weeklyLabels.every((y,x)=>y===`W${x+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const Mt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",unlaunched:"unlaunched",prTopicList:"PR Topic List"},jo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],Po=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Pr(t,e,o,a,i={}){const r=await hn(),l=r.utils.book_new(),c=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);c["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(l,c,"meta");const y=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);y["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(l,y,"total");const x=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(b=>[b.id,b.bu,b.kr,b.score,b.prev,b.vsComp,b.compName])]);x["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(l,x,"products");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(b=>[b.id,b.kr,...b.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(l,h,"weekly");const p=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...a.map(b=>[b.rank,b.source,b.category,b.score,b.delta,b.ratio??0])]);p["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(l,p,"citations");const d=(i==null?void 0:i.lg)||{},u=(i==null?void 0:i.samsung)||{},k=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...jo.map(b=>`LG_${b}`),...Po.map(b=>`Samsung_${b}`)],[...jo.map(b=>d[b]??0),...Po.map(b=>u[b]??0)]]);k["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(l,k,"dotcom"),r.writeFile(l,"GEO_Newsletter_템플릿.xlsx")}function ee(t){const e=String(t??"").trim(),o=e.includes("%"),a=e.replace(/%/g,"").replace(/,/g,"").trim(),i=parseFloat(a)||0;return o?+i.toFixed(2):Math.abs(i)<=1&&i!==0?+(i*100).toFixed(2):+i.toFixed(2)}function Oe(t){return t==null||String(t).trim()===""?null:ee(t)}function Wt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function se(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Mr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function Dr(t){const e=se(t);return Mr[e]||e}function be(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let a=0,i=0;const r=e.match(/(\d{4})/);if(r)i=parseInt(r[1]);else{const c=e.match(/(\d{2})년/);if(c)i=2e3+parseInt(c[1]);else{const y=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);y&&(i=2e3+parseInt(y[1]))}}const l=e.match(/(\d{1,2})월/);if(l)a=parseInt(l[1]);else{const c=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(c)a=o[c[1].toLowerCase()];else{const y=e.match(/\d{4}[-\/](\d{1,2})/);y&&(a=parseInt(y[1]))}}return i?i*12+a:a}function Or(t){var et;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((f,Z)=>console.log(`  row${Z}: [${(f||[]).slice(0,8).map(U=>JSON.stringify(String(U||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],a={};let i=!1,r=-1;if(t.forEach((f,Z)=>{if(!f[0]||String(f[0]).startsWith("[")||String(f[0]).startsWith("※")||f[0]==="key")return;const U=String(f[0]).trim();(o.includes(U)||e.includes(U))&&(i||(r=Z),i=!0,e.includes(U)?a[U]=parseInt(f[1])||0:a[U]=ee(f[1]))}),i&&Object.keys(a).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${r}: r[0]='${(et=t[r])==null?void 0:et[0]}' / kvObj keys:`,Object.keys(a)),{total:a};console.log("[parseVisSummary] Table path 진입");let l=t.find(f=>f.some(Z=>String(Z||"").trim().toUpperCase()==="LG"));l||(l=t.find(f=>f.some(Z=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(Z||"").trim()))));const c=l?l.findIndex(f=>String(f||"").trim().toUpperCase()==="LG"):-1,y=l?l.findIndex(f=>{const Z=String(f||"").trim().toUpperCase();return Z==="SAMSUNG"||Z==="SAMSUMG"}):-1,x=l?l.findIndex(f=>/date/i.test(String(f||"").trim())):0,h=l?l.findIndex(f=>/countries|country/i.test(String(f||"").trim())):2,p=l?l.findIndex(f=>/divisions?/i.test(String(f||"").trim())):3,d=l?l.findIndex(f=>/^(llm\s*model|llm|model)$/i.test(String(f||"").trim())):-1,u=Math.max(x,h,p,d),k=c>=0?c:u>=0?u+1:4,b=y>=0?y:k+1;console.log(`[parseVisSummary] columns: date=${x} cnty=${h} div=${p} llm=${d} lg=${k}(raw=${c}) ss=${b}(raw=${y})`);const m=[];t.filter(f=>{const Z=String(f[x>=0?x:0]||"").trim();return Z&&!Z.startsWith("[")&&!Z.startsWith("※")&&!/^date$/i.test(Z)&&!/^key$/i.test(Z)}).forEach(f=>{const Z=String(f[x>=0?x:0]||"").trim(),U=se(f[h>=0?h:2]),ht=String(f[p>=0?p:3]||"").trim().toUpperCase(),C=(d>=0?String(f[d]||"").trim():"")||"Total",T=ee(f[k]),_=ee(f[b]);Z&&T>0&&m.push({date:Z,country:U,division:ht,llmModel:C,lg:T,comp:_})});const v=m.filter(f=>(f.country==="TOTAL"||f.country==="TTL")&&(f.division==="TOTAL"||f.division==="TTL"||f.division==="")&&(f.llmModel==="Total"||f.llmModel==="TOTAL"||f.llmModel==="All"));v.sort((f,Z)=>be(f.date)-be(Z.date));const j=v[v.length-1],M=v.length>=2?v[v.length-2]:null;if(!j){const f=t.find(S=>S.some(C=>String(C||"").trim().toUpperCase()==="TOTAL"));if(!f)return Xt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const Z=ee(f[k]),U=ee(f[b]),ht={total:{score:Z,prev:Z,vsComp:U,rank:Z>=U?1:2,totalBrands:12}};return m.length&&(ht.monthlyVis=m),ht}const G=j.lg,V=j.comp,F=M?M.lg:G,z=j.date,W=M?M.date:null;function B(f){const Z={};return m.filter(U=>U.date===f&&(U.country==="TOTAL"||U.country==="TTL")&&U.division&&U.division!=="TOTAL"&&U.division!=="TTL"&&U.division!==""&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Z[U.division]={lg:U.lg,comp:U.comp}}),Z}const J=B(z),L=W?B(W):{};function I(f){const Z={};return m.filter(U=>U.date===f&&U.country&&U.country!=="TOTAL"&&U.country!=="TTL"&&(U.division==="TOTAL"||U.division==="TTL"||U.division==="")&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Z[U.country]={lg:U.lg,comp:U.comp}}),Z}const R=I(z),H=W?I(W):{},K={total:{score:G,prev:F,vsComp:V,rank:G>=V?1:2,totalBrands:12},...Object.keys(J).length?{buTotals:J}:{},...Object.keys(L).length?{buTotalsPrev:L}:{},...Object.keys(R).length?{countryTotals:R}:{},...Object.keys(H).length?{countryTotalsPrev:H}:{}};z&&(K.derivedPeriod=z),m.length&&(K.monthlyVis=m);const ot={};return m.forEach(f=>{ot[f.date]=(ot[f.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${m.length}행 / unique dates:`,ot,`/ TOTAL+TOTAL+Total 행: ${v.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(K)),K}function Nr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((i,r)=>console.log(`  row${r}: [${i.slice(0,8).map(l=>JSON.stringify(String(l||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((i,r)=>{if(r===0)return;const l=String((i==null?void 0:i[1])||"").trim(),c=String((i==null?void 0:i[2])||"").trim().toUpperCase();l&&(e[l]=(e[l]||0)+1,(c==="TTL"||c==="TOTAL")&&o.push({date:l,cat:String((i==null?void 0:i[3])||"").trim(),llm:String((i==null?void 0:i[4])||"").trim()||"(empty)",div:String((i==null?void 0:i[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(i=>console.log(`  ${i.div} | ${i.date} | ${i.cat} | LLM='${i.llm}'`));const a=t.findIndex(i=>{const r=String(i[0]||"").trim().toLowerCase();return r==="div"||r==="division"||r==="divisions"});if(a<0){const i=t.findIndex(r=>r.some((l,c)=>c>=1&&String(l||"").trim().toUpperCase()==="LG"));return i<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${i}: [${t[i].slice(0,8).map(r=>JSON.stringify(String(r||"").trim())).join(", ")}]`),Mo(t,i))}return console.log(`[parseProductCnty] header at row${a}: [${t[a].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),Mo(t,a)}function Mo(t,e){const o=t[e],a=o.findIndex((p,d)=>d>=3&&String(p||"").trim().toUpperCase()==="LG");if(a<0)return console.warn("[parseProductCnty] LG column not found"),{};const i=o.findIndex(p=>/^(llm\s*model|llm|model)$/i.test(String(p||"").trim())),r=[];for(let p=a+1;p<o.length;p++){const d=String(o[p]||"").trim();d&&d.toUpperCase()!=="LG"&&r.push({name:d,col:p})}const l=t.slice(e+1).filter(p=>{const d=String(p[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),c={},y={};l.forEach(p=>{const d=String(p[0]||"").trim(),u=String(p[1]||"").trim(),k=String(p[2]||"").trim(),b=se(p[2])||k,m=String(p[3]||"").trim(),v=(i>=0?String(p[i]||"").trim():"")||"Total",j=ee(p[a]),M=r.map(z=>({name:z.name,score:ee(p[z.col])})).filter(z=>z.score>0),G=[...M].sort((z,W)=>W.score-z.score)[0]||{name:"",score:0},V=+(j-G.score).toFixed(2),F={LG:j};if(M.forEach(z=>{F[z.name]=z.score}),b==="TTL"||b==="TOTAL"){const z=Te[m]||m.toLowerCase(),W=Wn[m]||m;c[z]||(c[z]=[]),c[z].push({id:z,bu:d,kr:W,category:m,date:u,llmModel:v,score:j,vsComp:G.score,compName:G.name,allScores:F})}else{const z=`${m}|${b}`;y[z]||(y[z]=[]),y[z].push({product:m,country:b,date:u,llmModel:v,score:j,compName:G.name,compScore:G.score,gap:V,allScores:F})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(c).join(", ")||"없음"} / 국가별: ${Object.keys(y).length}건`);const x=[];for(const[p,d]of Object.entries(c)){const u=d.filter(v=>v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"),k=u.length?u:d;k.sort((v,j)=>be(v.date)-be(j.date));const b=k[k.length-1],m=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${p}: dates=[${k.map(v=>v.date).join(",")}] score=${b.score} prev=${m} vsComp=${b.vsComp}`);const w=k.map(v=>{const j=d.filter(G=>G.date===v.date),M={};return j.forEach(G=>{M[G.llmModel]={score:G.score,comp:G.vsComp,allScores:G.allScores}}),{date:v.date,score:v.score,comp:v.vsComp,allScores:v.allScores,byLlm:M}});x.push({...b,prev:m,monthlyScores:w})}const h=[];for(const p of Object.values(y)){const d=p.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),u=d.length?d:p;u.sort((w,v)=>be(w.date)-be(v.date));const k=u[u.length-1],b=u.length>=2?u[u.length-2].score:null,m=u.map(w=>{const v=p.filter(M=>M.date===w.date),j={};return v.forEach(M=>{j[M.llmModel]={score:M.score,compScore:M.compScore,compName:M.compName,allScores:M.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:j}});h.push({...k,prev:b,monthlyScores:m})}return{...x.length?{productsPartial:x}:{},...h.length?{productsCnty:h}:{}}}function fn(t,e=0,o){const a=o??t.length;for(let i=e;i<a;i++){const r=[];for(const l of t[i]||[]){const c=String(l||"").split(/\n/)[0].trim();/^W\d+/i.test(c)&&r.push(c.toUpperCase())}if(r.length>=2)return r}return null}const Je={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Do(t,e){var b;const o=e?Je[e]||{}:{...Je.MS,...Je.ES};if(!Object.keys(o).length)return Xt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const a=t.findIndex(m=>m.some(w=>String(w||"").trim()in o));if(a<0)return Xt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const i=t[a],r=t.findIndex((m,w)=>w>a&&m.some(v=>String(v||"").trim()==="TTL")),l=r>0?r+1:Math.min(a+20,t.length);let c=-1,y=-1;for(let m=a+1;m<l;m++){const w=t[m];if(!w.some(M=>String(M||"").trim().toUpperCase()==="LG"))continue;if(y<0&&(y=m),w.some(M=>{const G=String(M||"").trim().toLowerCase().replace(/[\s_-]/g,"");return G==="nonbrand"||G==="nb"})){c=m;break}}const x=c>=0?c:y>=0?y:r;if(x<0)return Xt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:a,ttlRowIdx:r});const h=t[x],p=c>=0?"LG-NB":y>=0?"LG":"TTL",d={},u=Object.keys(o).map(m=>i.findIndex(w=>String(w||"").trim()===m)).filter(m=>m>=0).sort((m,w)=>m-w);for(const[m,w]of Object.entries(o)){const v=i.findIndex(G=>String(G||"").trim()===m);if(v<0)continue;const j=u.find(G=>G>v)||v+20,M=[];for(let G=v+1;G<j&&G<h.length;G++){const V=ee(h[G]);V>0&&M.push(V)}M.length&&(d[w]=M)}if(!Object.keys(d).length)return Xt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:a,dataRowIdx:x,dataRowLabel:p});const k=fn(t,a,l)||((b=Object.values(d)[0])==null?void 0:b.map((m,w)=>`W${w+1}`))||[];return{weeklyMap:d,weeklyLabels:k}}function _r(t,e,o){for(const a of Object.values(t))for(const i of Object.values(a))for(const[r,l]of Object.entries(i))i[r]=l.slice(o);for(const[a,i]of Object.entries(e))e[a]=i.slice(o)}function zr(t){const{data:e,rows:o,headerIdx:a,brandIdx:i,catIdx:r,countryIdx:l,isNonBrand:c,isTotal:y,weeklyMap:x,weeklyAll:h}=t;let p=t.wCols,d=t.weeklyLabels;if(!p.length){const u=e.find(k=>String(k[i]||"").trim().toUpperCase()==="LG"&&c(k));if(u){const k=[];for(let b=i+1;b<u.length;b++)if(String(u[b]||"").trim())k.push(b);else if(k.length)break;p=k,d=fn(o,0,a+1)||p.map((b,m)=>`W${m+1}`)}}return e.forEach(u=>{if(!c(u))return;const k=String(u[i]||"").trim();if(!k)return;const b=String(u[r>=0?r:0]||"").trim();if(!b)return;const m=Te[b]||b.toLowerCase(),w=l>=0?se(u[l]):"TOTAL",v=w==="TOTAL"||w==="TTL"||!w?"Total":w;h[m]||(h[m]={}),h[m][v]||(h[m][v]={}),h[m][v][k]=p.map(j=>Oe(u[j]))}),e.forEach(u=>{if(String(u[i]||"").trim().toUpperCase()!=="LG"||!c(u)||!y(u))return;const b=String(u[r>=0?r:0]||"").trim();b&&(x[Te[b]||b.toLowerCase()]=p.map(m=>Oe(u[m])))}),{wCols:p,weeklyLabels:d}}function Gr(t){const{data:e,header:o,lgIdx:a,catIdx:i,isTotal:r,weeklyMap:l}=t,c=o.findIndex(h=>{const p=String(h||"").trim().toLowerCase();return p==="date"||p==="week"||p==="period"}),y={},x=[];return e.forEach(h=>{if(!r(h))return;const p=String(h[i>=0?i:3]||"").trim();if(p){if(c>=0){const d=String(h[c]||"").trim();d&&!x.includes(d)&&x.push(d)}y[p]=y[p]||[],y[p].push(Oe(h[a]))}}),Object.entries(y).forEach(([h,p])=>{l[Te[h]||h.toLowerCase()]=p}),x.length?x:null}function Ur(t){const{data:e,wCols:o,catIdx:a,isTotal:i,weeklyMap:r}=t;e.forEach(l=>{if(!i(l))return;const c=String(l[a>=0?a:0]||"").trim();c&&(r[Te[c]||c.toLowerCase()]=o.map(y=>Oe(l[y])))})}function Ye(t,e){const o={};let a=[],i=-1;for(let F=0;F<Math.min(t.length,10);F++){const z=t[F];if(!z)continue;let W=0;for(let B=0;B<z.length;B++)/^w\d+$/i.test(String(z[B]||"").trim())&&W++;if(W>=2){i=F;break}}let r=t.findIndex(F=>{const z=F.slice(0,5).map(W=>String(W||"").trim().toLowerCase());return z.includes("category")||z.includes("product")});if(r<0&&i>=0&&(r=i),r<0&&(r=t.findIndex(F=>{let z=!1,W=0;for(let B=0;B<Math.min(F.length,10);B++){const J=String(F[B]||"").trim();J.toUpperCase()==="LG"?(z=!0,W++):J&&isNaN(parseFloat(J))&&W++}return z&&W>=3})),r<0)return Do(t,e);const l=t[r],c=r+1;let y=null;if(t[c]){const F=t[c].slice(4,8).map(z=>String(z||"").trim()).filter(Boolean);F.length&&F.every(z=>/^\d{1,2}\/\d{1,2}/.test(z)||/~/.test(z)||/^\(/.test(z))&&(y=c)}const x=y!=null?y+1:c,h=t.slice(x).filter(F=>F[0]!=null&&String(F[0]).trim()),p=l.findIndex(F=>{const z=String(F||"").trim().toLowerCase();return z==="category"||z==="product"}),d=l.findIndex(F=>{const z=String(F||"").trim().toLowerCase();return z==="country"||z==="county"}),u=l.findIndex(F=>String(F||"").trim().toLowerCase()==="brand"),k=l.findIndex(F=>String(F||"").trim().toUpperCase()==="LG");let b=[];const m=i>=0?t[i]:l;for(let F=0;F<m.length;F++)/^w\d+$/i.test(String(m[F]||"").trim())&&b.push(F);if(!b.length)for(let F=0;F<l.length;F++){const z=String(l[F]||"").split(/\n/)[0].trim();/^w\d+/i.test(z)&&b.push(F)}a=b.map(F=>String(m[F]||"").trim().toUpperCase());let w=b.map((F,z)=>{const W=a[z]||`W${F}`;let B="";const J=y!=null?t[y]:i!==r&&i>=0?t[i+1]:null;if(J){const L=String(J[F]||"").trim();L&&/\d/.test(L)&&(B=L.startsWith("(")?L:`(${L})`)}return B?`${W}${B}`:W});console.log(`[parseWeekly:${e}] wLabelRow:${i} headerIdx:${r} dateRangeRow:${y} wCols:${b.length} labels:`,a.slice(0,5),"full:",w.slice(-2));function v(F){if(d<0)return!0;const z=String(F[d]||"").replace(/[()]/g,"").trim().toUpperCase();return z==="TOTAL"||z==="TTL"||z===""}const j=l.findIndex(F=>{const z=String(F||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="b/nb"||z==="bnb"||z==="brand/nonbrand"});function M(F){if(j<0)return!0;const z=String(F[j]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return z==="nonbrand"||z==="nb"}const G={},V={data:h,rows:t,header:l,headerIdx:r,brandIdx:u,lgIdx:k,catIdx:p,countryIdx:d,wCols:b,weeklyLabels:a,weeklyMap:o,weeklyAll:G,isNonBrand:M,isTotal:v};if(u>=0){const F=zr(V);b=F.wCols,a=F.weeklyLabels}else if(k>=0){const F=Gr(V);F&&(a=F)}else b.length&&Ur(V);if(a.length>0){let F=a.length;for(const J of Object.values(G))for(const L of Object.values(J))for(const I of Object.values(L)){const R=I.findIndex(H=>H!=null);R>=0&&R<F&&(F=R)}for(const J of Object.values(o)){const L=J.findIndex(I=>I!=null);L>=0&&L<F&&(F=L)}const z=12,B=a.length-F>z?a.length-z:F;B>0&&B<a.length&&(a=a.slice(B),w=w.slice(B),_r(G,o,B))}if(Object.keys(o).length){const F={weeklyMap:o};return a.length&&(F.weeklyLabels=a),w.length&&(F.weeklyLabelsFull=w),Object.keys(G).length&&(F.weeklyAll=G),F}return Do(t,e)}function Hr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((S,C)=>console.log(`  row${C}: [${(S||[]).slice(0,10).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`));const e=t.findIndex(S=>S.some(_=>{const O=String(_||"").trim().toLowerCase();return O.includes("page type")||O==="country"})?!S.some(_=>/^\[.*\]$/.test(String(_||"").trim())):!1);if(e<0)return Xt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],a=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(C)}),i=o.findIndex(S=>/^country$|countries/i.test(String(S||"").trim())),r=o.findIndex(S=>{const C=String(S||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(C)||C==="type"}),l=i>=0?i:0,c=r>=0?r:l+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${a} cntyCol=${i} ptCol=${r} (fallbackCnty=${l} fallbackPt=${c})`),a<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(S=>Array.from(String(S||"")).map(C=>C.codePointAt(0).toString(16)).join(" ")));const y=[],x=new Set,h=Math.max(c+1,2);for(let S=h;S<o.length;S++){const C=String(o[S]||"").trim();if(/\bLG\b/i.test(C)){const T=S+1;if(T<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[T]||""))){const _=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),O=_?_[1].toLowerCase():`col${S}`;x.has(O)||(y.push({lg:S,ss:T}),x.add(O))}}}y.length||y.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",y.map(S=>`LG=${S.lg}/SS=${S.ss}`).join(", "));const p=new Map;let d="",u=0;t.slice(e+1).forEach(S=>{if(!S||!S.some(T=>String(T||"").trim())){d="";return}let C=a>=0?String(S[a]||"").trim():"";C?d=C:a>=0&&d&&(C=d,u++),p.set(S,C)}),u&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${u}건 상속`);const k=t.slice(e+1).filter(S=>S&&S[l]!=null&&String(S[l]).trim());console.log(`[parseCitPageType] data ${k.length}행 (필터 통과)`);let b=y[0];for(let S=y.length-1;S>=0;S--)if(k.some(C=>Wt(C[y[S].lg])>0)){b=y[S];break}if(!k.some(S=>Wt(S[b.lg])>0)){for(let S=Math.min(b.lg,o.length)-1;S>=2;S--)if(k.some(C=>Wt(C[S])>0)){b={lg:S-1,ss:S};break}}const m={},w={},v={},j={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},M=new Set,G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=y.map(S=>{const C=String(o[S.lg]||"").trim(),T=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return T?T[1].charAt(0).toUpperCase()+T[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),F={},z=S=>String(S||"").trim().replace(/^\((.*)\)$/,"$1").trim(),W=S=>{const C=z(S);return!C||/^(total|all|ttl)$/i.test(C)},B={plp:"PLP",pdp:"PDP",microsite:"Microsites",microsites:"Microsites",newsroom:"Newsroom",support:"Support",buyingguide:"Buying-guide",experience:"Experience"},J=S=>{const C=String(S||"").replace(/[()]/g,"").trim();if(/page total|^ttl$/i.test(C))return"TTL";const T=C.toLowerCase().replace(/^lg[-\s]+/,"").replace(/[-\s]+/g,"");return B[T]||C},L=S=>{const C=se(S[l]);return{cnty:j[C]||C.toUpperCase(),key:J(S[c])}},I=new Set;k.forEach(S=>{const C=p.get(S)||"";if(W(C))return;const{cnty:T,key:_}=L(S);y.forEach((O,$)=>{(Wt(S[O.lg])>0||Wt(S[O.ss])>0)&&I.add(`${T}|${_}|${$}`)})});const R=(S,C,T,_)=>I.has(`${C}|${T}|${_}`)?!S:S,H=y.indexOf(b);I.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${I.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const K={};function ot(S){return K[S]||(K[S]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),K[S]}k.forEach(S=>{const C=p.get(S)||"",T=W(C),_=T?"Total":C,{cnty:O,key:$}=L(S);M.add(O);const gt=Wt(S[b.lg]),Tt=Wt(S[b.ss]);R(T,O,$,H)&&(O==="TTL"?(m[$]=(m[$]||0)+gt,w[$]=(w[$]||0)+Tt):(v[O]||(v[O]={lg:{},samsung:{}}),v[O].lg[$]=(v[O].lg[$]||0)+gt,v[O].samsung[$]=(v[O].samsung[$]||0)+Tt)),O==="TTL"&&y.forEach((Ct,vt)=>{var q,it;if(!R(T,O,$,vt))return;const kt=Wt(S[Ct.lg]),D=Wt(S[Ct.ss]);if(kt>0||D>0){F[$]||(F[$]={});const lt=V[vt]||`M${vt+1}`;F[$][lt]={lg:(((q=F[$][lt])==null?void 0:q.lg)||0)+kt,samsung:(((it=F[$][lt])==null?void 0:it.samsung)||0)+D}}});const ut=ot(_);O==="TTL"?(ut.lg[$]=(ut.lg[$]||0)+gt,ut.samsung[$]=(ut.samsung[$]||0)+Tt,ut.dotcomTrend[$]||(ut.dotcomTrend[$]={}),y.forEach((Ct,vt)=>{var q,it;const kt=Wt(S[Ct.lg]),D=Wt(S[Ct.ss]);if(kt>0||D>0){const lt=V[vt]||`M${vt+1}`;ut.dotcomTrend[$][lt]={lg:(((q=ut.dotcomTrend[$][lt])==null?void 0:q.lg)||0)+kt,samsung:(((it=ut.dotcomTrend[$][lt])==null?void 0:it.samsung)||0)+D}}})):(ut.dotcomByCnty[O]||(ut.dotcomByCnty[O]={lg:{},samsung:{}}),ut.dotcomByCnty[O].lg[$]=(ut.dotcomByCnty[O].lg[$]||0)+gt,ut.dotcomByCnty[O].samsung[$]=(ut.dotcomByCnty[O].samsung[$]||0)+Tt)});const et=new Set;Object.values(F).forEach(S=>Object.keys(S).forEach(C=>et.add(C)));const f=G.filter(S=>et.has(S)),Z={},U={};y.forEach((S,C)=>{const T=V[C];if(!T)return;const _={},O={};k.forEach($=>{const gt=p.get($)||"",Tt=W(gt),{cnty:ut,key:Ct}=L($);if(!R(Tt,ut,Ct,C))return;const vt=Wt($[S.lg]),kt=Wt($[S.ss]);vt<=0&&kt<=0||(ut==="TTL"?(vt>0&&(_[Ct]=(_[Ct]||0)+vt),kt>0&&(O[Ct]=(O[Ct]||0)+kt)):(U[T]||(U[T]={}),U[T][ut]||(U[T][ut]={lg:{},samsung:{}}),vt>0&&(U[T][ut].lg[Ct]=(U[T][ut].lg[Ct]||0)+vt),kt>0&&(U[T][ut].samsung[Ct]=(U[T][ut].samsung[Ct]||0)+kt)))}),Object.keys(_).length&&(Z[T]={lg:_,samsung:O})}),Object.keys(U).forEach(S=>{Object.keys(U[S]).forEach(C=>{const T=U[S][C];Object.values(T.lg).some(O=>O>0)||Object.values(T.samsung).some(O=>O>0)||delete U[S][C]}),Object.keys(U[S]).length||delete U[S]});const ht={};return(m.TTL||Object.keys(m).length)&&(ht.dotcom={lg:m,samsung:w,byMonth:Z,byCntyByMonth:U}),Object.keys(v).length&&(ht.dotcomByCnty=v),Object.keys(F).length&&f.length&&(ht.dotcomTrend=F,ht.dotcomTrendMonths=f),(Object.keys(K).length>1||Object.keys(K).length===1&&!(K.Total||K.TOTAL||K.All))&&(ht.dotcomByLlm=K),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(m).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(v).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(F).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(K).join(",")||"(EMPTY)"}`),ht}function Wr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((C,T)=>console.log(`  row${T}: [${(C||[]).slice(0,12).map(_=>JSON.stringify(String(_||"").trim())).join(", ")}]`));const e=t.findIndex(C=>C.some(O=>{const $=String(O||"").trim().toLowerCase();return $==="channel"||$==="country"})?!C.some(O=>/^\[.*\]$/.test(String(O||"").trim())):!1);e<0&&Xt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const o=e>=0?t[e]:[],a=(e>=0?e:0)+1;let i=-1,r=-1,l=-1,c=-1;for(let C=0;C<o.length;C++){const T=String(o[C]||"").trim().toLowerCase();T==="country"&&i<0&&(i=C),T==="channel"&&r<0&&(r=C),T==="prd"&&l<0&&(l=C),/^(llm\s*model|llm|model)$/i.test(T)&&c<0&&(c=C)}const y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(C){const T=String(C||"").trim().toLowerCase();if(!T)return null;const _=T.match(/^(\d{1,2})월/);if(_){const $=parseInt(_[1]);if($>=1&&$<=12)return y[$-1]}const O=T.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return O?O[1].charAt(0).toUpperCase()+O[1].slice(1).toLowerCase():null}const h=[],p=new Set;for(let C=0;C<o.length;C++){const T=x(o[C]);T&&!p.has(C)&&(h.push({col:C,label:T}),p.add(C))}if(e>0){const C=t[e-1];if(C)for(let T=0;T<C.length;T++){const _=x(C[T]);_&&!p.has(T)&&(h.push({col:T,label:_}),p.add(T))}}let d=2;if(h.length>0)d=Math.min(...h.map(C=>C.col));else if(i>=0&&r>=0)d=Math.max(i,r,l)+1;else{const C=t[a];C&&!String(C[0]||"").trim()?(i=1,r=2,d=3):(i=0,r=1,d=2)}if(i<0||r<0){const C=t[a],T=C&&!String(C[0]||"").trim()?1:0;i<0&&(i=T),r<0&&(r=T+1)}if(h.length>0){h.sort((O,$)=>O.col-$.col);const C=h[0],T=y.indexOf(C.label),_=new Set([i,r,l].filter(O=>O>=0));if(T>0&&C.col>d){let O=T-1;for(let $=C.col-1;$>=d&&O>=0;$--){if(p.has($)||_.has($))continue;const gt=String(o[$]||"").trim(),Tt=e>0?String((t[e-1]||[])[$]||"").trim():"";gt||Tt||(h.push({col:$,label:y[O]}),p.add($),O--)}}}h.sort((C,T)=>y.indexOf(C.label)-y.indexOf(T.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(C=>JSON.stringify(String(C||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${i} channelCol=${r} prdCol=${l} llmCol=${c} dataStartCol=${d}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(C=>`${C.label}@col${C.col}`).join(", "));const u=t.slice(a).filter(C=>C.some(T=>T!=null&&String(T).trim())),k=[],b={},m={},w={},v={},j=new Set,M={},G={},V={},F=C=>String(C||"").replace(/[()]/g,"").trim();u.forEach(C=>{const T=se(C[i]),_=F(C[r]);if(!T||!_||_.toLowerCase()==="total")return;const O=T==="TTL"||T==="TOTAL",$=c>=0?F(C[c]):"",gt=!$||/^(total|all|ttl)$/i.test($),Tt=l>=0?F(C[l]):"",ut=!Tt||/^(ttl|total)$/i.test(Tt.toUpperCase());h.forEach(({col:Ct,label:vt})=>{Wt(C[Ct])<=0||(O||(M[_]||(M[_]={}),M[_][vt]=!0),gt||(G[_]||(G[_]={}),G[_][vt]=!0),ut||(V[_]||(V[_]={}),V[_][vt]=!0))})});const z=Object.keys(M).map(C=>`${C}:[${Object.keys(M[C]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${z||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(G).map(C=>`${C}:[${Object.keys(G[C]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(V).map(C=>`${C}:[${Object.keys(V[C]).join(",")}]`).join(" ")||"(없음)");const W={},B={},J={},L={};u.forEach(C=>{const T=se(C[i]),_=F(C[r]),O=l>=0?F(C[l]):"",$=c>=0?F(C[c]):"";if(!T||!_||_.toLowerCase()==="total")return;const gt=T==="TTL"||T==="TOTAL",Tt=!$||/^(total|all|ttl)$/i.test($),ut=O.toUpperCase(),Ct=!O||ut==="TTL"||ut==="TOTAL";if(gt||j.add(T),!gt&&(J[T]||(J[T]={}),J[T][_]||(J[T][_]={ttl:null,prds:[]}),!Ct)){const kt={};h.forEach(({col:D,label:q})=>{var lt;const it=Wt(C[D]);it<=0||Tt&&((lt=G[_])!=null&&lt[q])||(kt[q]=it)}),Object.keys(kt).length&&J[T][_].prds.push({prd:O,monthScores:kt})}W[_]||(W[_]={}),B[_]||(B[_]={});const vt=gt?"TTL":T;B[_][vt]||(B[_][vt]={}),h.forEach(({col:kt,label:D})=>{var st,wt,Lt,A;const q=Wt(C[kt]);if(q<=0)return;const it=gt&&((st=M[_])==null?void 0:st[D]),lt=Tt&&((wt=G[_])==null?void 0:wt[D]),yt=Ct&&((Lt=V[_])==null?void 0:Lt[D]),pt=Tt?"Total":$;!it&&!(Ct&&((A=V[_])!=null&&A[D]))&&(L[pt]||(L[pt]={}),L[pt][_]||(L[pt][_]={}),L[pt][_][D]=(L[pt][_][D]||0)+q),!(it||lt||yt)&&(W[_][D]=(W[_][D]||0)+q,B[_][vt][D]=(B[_][vt][D]||0)+q)})});const I=C=>{for(let T=h.length-1;T>=0;T--){const _=C[h[T].label];if(_>0)return _}return 0},R={};Object.entries(B).forEach(([C,T])=>{Object.entries(T).forEach(([_,O])=>{_!=="TTL"&&Object.keys(O).length!==0&&(R[_]||(R[_]={}),R[_][C]=O)})}),Object.entries(W).forEach(([C,T])=>{const _=I(T);_>0&&(k.push({source:C,category:"",score:_,delta:0,ratio:0,monthScores:T}),b[C]=T)}),Object.entries(B).forEach(([C,T])=>{Object.entries(T).forEach(([_,O])=>{if(_==="TTL")return;const $=I(O);$>0&&(m[_]||(m[_]=[]),m[_].push({source:C,category:"",score:$,delta:0,ratio:0,monthScores:O,prd:""}))})}),Object.entries(J).forEach(([C,T])=>{Object.entries(T).forEach(([_,O])=>{O.prds.forEach(({prd:$,monthScores:gt})=>{const Tt=I(gt);if(Tt<=0)return;m[C]||(m[C]=[]),m[C].push({source:_,category:"",score:Tt,delta:0,ratio:0,monthScores:gt,prd:$}),v[$]||(v[$]={}),v[$][_]||(v[$][_]={source:_,category:"",score:0,delta:0,ratio:0,monthScores:{}});const ut=v[$][_];ut.score+=Tt,Object.entries(gt).forEach(([Ct,vt])=>{ut.monthScores[Ct]=(ut.monthScores[Ct]||0)+vt})})})});const H={};new Set([...Object.keys(w),...Object.keys(v)]).forEach(C=>{let T=w[C];(!T||!T.length)&&(T=Object.values(v[C]||{})),T&&T.length&&(H[C]=T)});const ot=k.reduce((C,T)=>C+T.score,0);k.sort((C,T)=>T.score-C.score),k.forEach((C,T)=>{C.rank=T+1,C.ratio=ot>0?+(C.score/ot*100).toFixed(1):0});for(const[C,T]of Object.entries(m)){const _=T.reduce((O,$)=>O+$.score,0);T.sort((O,$)=>$.score-O.score),T.forEach((O,$)=>{O.rank=$+1,O.ratio=_>0?+(O.score/_*100).toFixed(1):0})}for(const[C,T]of Object.entries(H)){const _=T.reduce((O,$)=>O+$.score,0);T.sort((O,$)=>$.score-O.score),T.forEach((O,$)=>{O.rank=$+1,O.ratio=_>0?+(O.score/_*100).toFixed(1):0})}const et=h.map(C=>C.label).filter(C=>Object.values(b).some(T=>T[C]>0)),f={};h.forEach(C=>{let T=0;Object.values(b).forEach(_=>{T+=_[C.label]||0}),f[C.label]=T}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",f,"→ validMonths:",et);const Z={};Object.entries(J.TTL||{}).forEach(([C,T])=>{Z[C]={ttl:T.ttl,latestScore:I(T.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",Z),console.log("[parseCitTouchPoints] citations top 3:",k.slice(0,3).map(C=>({source:C.source,score:C.score,monthScores:C.monthScores})));const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let ht=null;if(et.length>0){const C={};Object.values(b).forEach(O=>{Object.entries(O).forEach(([$,gt])=>{gt>0&&(C[$]=(C[$]||0)+1)})});let T=et[et.length-1];if(et.length>=2){const O=C[T]||0,$=et[et.length-2],gt=C[$]||0;gt>0&&O<gt*.5&&(T=$)}const _=U.findIndex(O=>T.toLowerCase().startsWith(O.toLowerCase()));_>=0&&(ht=`${U[_]} ${new Date().getFullYear()}`)}const S={};return k.length>0&&(S.citations=k),Object.keys(m).length>0&&(S.citationsByCnty=m),Object.keys(H).length>0&&(S.citationsByPrd=H),Object.keys(b).length>0&&(S.citTouchPointsTrend=b,S.citTrendMonths=et),Object.keys(R).length>0&&(S.citTouchPointsTrendByCnty=R),Object.keys(L).length>0&&(S.citTouchPointsByLlm=L,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(L).join(", "))),ht&&(S.citDerivedPeriod=ht),S}function Vr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((I,R)=>console.log(`  row${R}: [${(I||[]).slice(0,14).map(H=>JSON.stringify(String(H||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],a=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let i=null,r=0,l=-1,c=-1,y=-1,x=-1,h=-1,p=-1,d=4;for(let I=0;I<Math.min(t.length,10);I++){const R=t[I];if(!R)continue;const H=R.some(f=>/^no$/i.test(String(f||"").trim())),K=R.some(f=>/^region$/i.test(String(f||"").trim())),ot=R.some(f=>/domain|domian/i.test(String(f||"").trim())),et=R.some(f=>/^prd$/i.test(String(f||"").trim()));if(H||K||ot||et){i=R,r=I+1;for(let f=0;f<R.length;f++){const Z=String(R[f]||"").trim().toLowerCase();Z==="prd"&&h<0&&(h=f),Z==="no"&&l<0&&(l=f),Z==="region"&&c<0&&(c=f),(Z==="domain"||Z==="domian")&&y<0&&(y=f),Z==="type"&&x<0&&(x=f),/^(llm\s*model|llm|model)$/i.test(Z)&&p<0&&(p=f)}console.log(`[parseCitDomain] header row${I}: [${(R||[]).slice(0,14).map(f=>JSON.stringify(String(f||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${l} regionCol=${c} domainCol=${y} typeCol=${x} llmCol=${p}`);break}(String(R[0]||"").trim().startsWith("[")||!String(R[0]||"").trim())&&(r=I+1)}i||Xt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(I=>I==null?void 0:I.slice(0,6))});const u=l>=0||c>=0||h>=0;if(u)c<0&&(c=l>=0?l+1:h>=0?h+2:1),y<0&&(y=c+1),x<0&&(x=y+1),d=Math.max(y,x)+1;else if(y>=0)x=y+1,d=y+2;else{for(let I=r;I<Math.min(t.length,r+5);I++){const R=t[I];if(R){for(let H=0;H<Math.min(R.length,6);H++){const K=String(R[H]||"").trim();if(K.includes(".")&&K.length>3&&!a.test(K)){y=H,x=H+1,d=H+2;break}}if(y>=0)break}}y<0&&(y=0,x=1,d=2)}const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=I=>{const R=String(I||"").trim().toLowerCase();if(!R)return null;const H=R.match(/^(\d{1,2})월/);if(H){const ot=parseInt(H[1]);if(ot>=1&&ot<=12)return k[ot-1]}const K=R.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():null},m=[];if(i)for(let I=d;I<i.length;I++){const R=b(i[I]);R&&m.push({col:I,label:R})}const w=I=>/^(type|domain[_ ]type)$/i.test(String(I||"").trim()),v=I=>/^(domain|domian)$/i.test(String(I||"").trim()),j=I=>/^region$/i.test(String(I||"").trim()),M=[];i&&m.forEach(({col:I,label:R})=>{const H=I-1,K=I-2,ot=I-3;ot<0||w(i[H])&&v(i[K])&&j(i[ot])&&M.push({regionCol:ot,domainCol:K,typeCol:H,monthCol:I,label:R})}),console.log(`[parseCitDomain] domainMonthLabels: ${m.map(I=>`${I.label}@col${I.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${M.length}개`,M.map(I=>`${I.label}@col${I.monthCol}(r${I.regionCol}/d${I.domainCol}/t${I.typeCol})`).join(", "));const G=[],V={};let F=null,z=null;const W={};let B="TTL";const J=I=>{let R=String(I||"").trim();if(!R)return"";const H=R.match(/^\[([^\]]+)\]/);H&&(R=H[1].trim()),R=R.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const K=R.indexOf("/");return K>=0&&(R=R.slice(0,K)),R};if(M.length>=2){const I=D=>String(D||"").replace(/[()]/g,"").trim(),R={},H=M.map(()=>({region:"",domain:"",type:""}));let K="",ot=0,et=0;for(let D=r;D<t.length;D++){const q=t[D];if(!q)continue;let it=h>=0?I(q[h]):"";it?K=it:it=K;const lt=p>=0?I(q[p]):"";M.forEach((yt,pt)=>{const st=H[pt],wt=J(q[yt.domainCol]);wt&&wt.includes(".")&&(st.domain=wt,st.region=String(q[yt.regionCol]||"").trim().toUpperCase(),st.type=String(q[yt.typeCol]||"").trim());const Lt=String(q[yt.monthCol]||"").replace(/,/g,"").trim(),A=parseFloat(Lt);if(isNaN(A)||A<=0)return;let N=wt,Y,ft;if(N&&N.includes("."))Y=String(q[yt.regionCol]||"").trim().toUpperCase(),ft=String(q[yt.typeCol]||"").trim();else if(st.domain)N=st.domain,Y=st.region,ft=st.type,ot++;else{et++;return}const Ft=e[Y]||Y||"TTL",bt=`${Ft}|${N}|${ft}|${it}|${lt}`;R[bt]||(R[bt]={cnty:Ft,domain:N,type:ft,prd:it,llm:lt,monthScores:{}}),R[bt].monthScores[yt.label]=(R[bt].monthScores[yt.label]||0)+A})}(ot||et)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${ot}건 / domain 없어 drop ${et}건`);const f=D=>{const q=I(D);return!q||/^(total|all|ttl)$/i.test(q)},Z=new Set;Object.values(R).forEach(D=>{if(f(D.llm))return;const q=`${D.cnty}|${D.domain}|${D.type}|${D.prd}`;Object.entries(D.monthScores).forEach(([it,lt])=>{lt>0&&Z.add(`${q}|${it}`)})});const U={};Object.values(R).forEach(D=>{const q=`${D.cnty}|${D.domain}|${D.type}|${D.prd}`,it=f(D.llm);U[q]||(U[q]={cnty:D.cnty,domain:D.domain,type:D.type,prd:D.prd,monthScores:{}}),Object.entries(D.monthScores).forEach(([lt,yt])=>{yt>0&&Z.has(`${q}|${lt}`)!==it&&(U[q].monthScores[lt]=(U[q].monthScores[lt]||0)+yt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(R).length} → ${Object.keys(U).length} rows / breakdown 월 ${Z.size}건`);const ht=D=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(D||"").trim()),S=D=>{const q=String(D||"").trim();return!q||/^(ttl|total)$/i.test(q)},C=D=>{for(let q=m.length-1;q>=0;q--){const it=D[m[q].label];if(it>0)return it}return 0},T=D=>D.find(q=>Object.keys(q).length)||{},_=(D,q)=>{Object.entries(q).forEach(([it,lt])=>{lt>0&&(D[it]=(D[it]||0)+lt)})},O={};Object.values(R).forEach(D=>{if(f(D.llm))return;const q=I(D.llm);O[q]||(O[q]={}),O[q][D.domain]||(O[q][D.domain]=[{},{},{},{}]);const it=(ht(D.cnty)?0:2)+(S(D.prd)?0:1);_(O[q][D.domain][it],D.monthScores)});const $={},gt={};if(Object.entries(O).forEach(([D,q])=>{const it={},lt={};Object.entries(q).forEach(([yt,pt])=>{const st=T(pt),wt=C(st);wt>0&&(it[yt]=wt,lt[yt]=st)}),Object.keys(it).length&&($[D]=it),Object.keys(lt).length&&(gt[D]=lt)}),Object.keys($).length){const D={};Object.values(U).forEach(lt=>{D[lt.domain]||(D[lt.domain]=[{},{},{},{}]);const yt=(ht(lt.cnty)?0:2)+(S(lt.prd)?0:1);_(D[lt.domain][yt],lt.monthScores)});const q={},it={};Object.entries(D).forEach(([lt,yt])=>{const pt=T(yt),st=C(pt);st>0&&(q[lt]=st,it[lt]=pt)}),Object.keys(q).length&&($.Total=q),Object.keys(it).length&&(gt.Total=it),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys($).join(", ")),Object.keys($).length>1&&(F=$),Object.keys(gt).length>1&&(z=gt)}Object.values(U).forEach(D=>{let q=0;for(let pt=m.length-1;pt>=0;pt--){const st=D.monthScores[m[pt].label];if(st>0){q=st;break}}if(q<=0)return;W[D.cnty]=(W[D.cnty]||0)+1,G.push({cnty:D.cnty,rank:W[D.cnty],domain:D.domain,type:D.type,citations:q,monthScores:D.monthScores,prd:D.prd});const it=`${D.cnty}|${D.domain}`,lt=!D.prd||/^(ttl|total)$/i.test(D.prd);V[it]||(V[it]={cnty:D.cnty,domain:D.domain,type:D.type,months:{},_ttlMonths:{}});const yt=V[it];lt?(yt.type=D.type||yt.type,Object.entries(D.monthScores).forEach(([pt,st])=>{st>0&&(yt._ttlMonths[pt]?yt.months[pt]+=st:(yt.months[pt]=st,yt._ttlMonths[pt]=!0))})):Object.entries(D.monthScores).forEach(([pt,st])=>{!(st>0)||yt._ttlMonths[pt]||(yt.months[pt]=(yt.months[pt]||0)+st)})}),Object.values(V).forEach(D=>{delete D._ttlMonths});const Tt={TTL:{},CNTY:{}};Object.entries(V).forEach(([D,q])=>{const it=D.startsWith("TTL|")?"TTL":"CNTY";Object.entries(q.months).forEach(([lt,yt])=>{yt>0&&(Tt[it][lt]=(Tt[it][lt]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",Tt.TTL,"/ CNTY:",Tt.CNTY);const ut={},Ct={};Object.values(R).forEach(D=>{ut[D.cnty]=(ut[D.cnty]||0)+1,Ct[D.prd||"(empty)"]=(Ct[D.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(R).length} / cnty dist:`,ut,"/ prd dist:",Ct);const vt=Object.values(R).filter(D=>D.cnty==="TTL"&&D.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${vt.length}건):`,vt.map(D=>`${D.domain}|prd='${D.prd}'|type='${D.type}'|May=${D.monthScores.May}`).join(" / "));const kt={};G.forEach(D=>{kt[D.cnty]||(kt[D.cnty]=[]),kt[D.cnty].push(D)}),Object.values(kt).forEach(D=>{D.sort((q,it)=>it.citations-q.citations),D.forEach((q,it)=>{q.rank=it+1})})}else for(let I=r;I<t.length;I++){const R=t[I];if(!R)continue;const H=String(R[y]||"").trim(),K=String(R[x]||"").trim(),ot=h>=0?String(R[h]||"").trim():"";if(!u&&(!H||!H.includes("."))){const U=String(R[y]||"").trim().toUpperCase(),ht=e[U]||(o.includes(U)?U:null);ht&&(!K||K==="")&&(B=ht);continue}if(!H||!H.includes("."))continue;let et="TTL";if(u&&c>=0){const U=String(R[c]||"").trim().toUpperCase();et=e[U]||U}else u||(et=B);let f=0;if(m.length>0)for(let U=m.length-1;U>=0;U--){const ht=String(R[m[U].col]||"").replace(/,/g,"").trim(),S=parseFloat(ht);if(!isNaN(S)&&S>0){f=S;break}}else for(let U=R.length-1;U>=d;U--){const ht=String(R[U]||"").replace(/,/g,"").trim();if(!ht)continue;const S=parseFloat(ht);if(!isNaN(S)&&S>0){f=S;break}}if(m.length>0){const U={};if(m.forEach(({col:ht,label:S})=>{const C=String(R[ht]||"").replace(/,/g,"").trim(),T=parseFloat(C);!isNaN(T)&&T>0&&(U[S]=T)}),Object.keys(U).length>0){const ht=`${et}|${H}`;V[ht]={cnty:et,domain:H,type:K,months:U}}}const Z={};m.length>0&&m.forEach(({col:U,label:ht})=>{const S=String(R[U]||"").replace(/,/g,"").trim(),C=parseFloat(S);!isNaN(C)&&C>0&&(Z[ht]=C)}),f>0&&(W[et]=(W[et]||0)+1,G.push({cnty:et,rank:W[et],domain:H,type:K,citations:f,monthScores:Z,prd:ot}))}const L={};if(G.length>0&&(L.citationsCnty=G),Object.keys(V).length>0){L.citDomainTrend=V;const I=m.map(R=>R.label).filter(R=>Object.values(V).some(H=>H.months[R]>0));L.citDomainMonths=I}return F&&(L.citDomainByLlm=F),z&&(L.citDomainByLlmTrend=z),L}function Oo(t,e){const o=lo(t,[/^type$/,/^(county|country)$/]);if(o<0)return Xt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const a=t[o];let i=-1,r=-1,l=-1,c=-1,y=4;for(let v=0;v<a.length;v++){const j=String(a[v]||"").split(/\n/)[0].trim().toLowerCase();j==="type"&&i<0&&(i=v),(j==="county"||j==="country")&&r<0&&(r=v),(j==="topic"||j==="topoc")&&l<0&&(l=v),j==="brand"&&c<0&&(c=v)}l<0&&(l=2,Xt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:a.slice(0,6)})),y=Math.max(i,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,p=[],d=[o];for(let v=0;v<=o;v++)v!==o&&d.push(v);for(const v of d){if(p.length>0)break;const j=t[v];if(j)for(let M=y;M<j.length;M++){const G=String(j[M]||"").split(/\n/)[0].trim();G&&(x.test(G)||h.test(G))&&p.push({col:M,label:G})}}const u=t.slice(o+1),k=[];u.forEach(v=>{if(!v)return;const j=String(v[i]||"").trim(),M=se(v[r]),G=String(v[l]||"").trim(),V=String(v[c]||"").trim();if(!G||!V)return;const F={};let z=0;p.forEach(({col:W,label:B})=>{const J=ee(v[W]);J>0&&(F[B]=J,z=J)}),(Object.keys(F).length>0||G)&&k.push({type:j,country:M,topic:G,brand:V,scores:F,latestScore:z})});const b=e==="weekly"?"weeklyPR":"monthlyPR",m=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return k.length>0&&(w[b]=k),p.length>0&&(w[m]=p.map(v=>v.label)),w}function No(t,e){const o=t.findIndex(w=>w?w.some(v=>/steakholders|stakeholders/i.test(String(v||"").trim()))||w.some(v=>/^type$/i.test(String(v||"").trim()))&&w.some(v=>/topoc|topic/i.test(String(v||"").trim())):!1);if(o<0)return Xt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const a=t[o];let i=-1,r=-1,l=-1,c=-1,y=4;for(let w=0;w<a.length;w++){const v=String(a[w]||"").trim().toLowerCase();(v==="steakholders"||v==="stakeholders")&&i<0&&(i=w),v==="type"&&r<0&&(r=w),(v==="country"||v==="county")&&l<0&&(l=w),(v==="topoc"||v==="topic")&&c<0&&(c=w)}y=Math.max(i,r,l,c)+1;const x=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,p=[];for(let w=y;w<a.length;w++){const v=String(a[w]||"").split(/\n/)[0].trim();v&&(x.test(v)||h.test(v))&&p.push({col:w,label:v})}const d=t.slice(o+1),u=[];d.forEach(w=>{if(!w)return;const v=String(w[i]||"").trim(),j=String(w[r]||"").trim(),M=se(w[l]),G=String(w[c]||"").trim();if(!G||!v)return;const V={};let F=0;p.forEach(({col:z,label:W})=>{const B=ee(w[z]);B>0&&(V[W]=B,F=B)}),u.push({stakeholder:v,type:j,country:M,topic:G,scores:V,latestScore:F})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",b=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",m={};return u.length>0&&(m[k]=u),p.length>0&&(m[b]=p.map(w=>w.label)),m}const le={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0},Kr={"IN|DW":!0};function qr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const e=lo(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,u)=>console.log(`  row${u}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const o=t[e];let a=-1,i=-1,r=-1;for(let d=0;d<o.length;d++){const u=String(o[d]||"").trim().toLowerCase();a<0&&(u==="country"||u==="county")&&(a=d),i<0&&(u==="category"||u==="product"||u==="제품"||u==="카테고리")&&(i=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(u)&&(r=d)}if(a<0||i<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:a,categoryCol:i,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(le).length}건`),{unlaunchedMap:{...le}};const l=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),c={...le};let y=0,x=0,h=0;t.slice(e+1).forEach((d,u)=>{const k=e+1+u;try{if(!d){h++;return}const b=String(d[r]||"").trim();if(!b){h++;return}y++;const m=b.toLowerCase().replace(/\s+/g," ");if(!l.has(m)&&!l.has(m.replace(/\s/g,"")))return;const w=Dr(d[a]),v=String(d[i]||"").trim();if(!w||!v){console.warn("[parseUnlaunched] row skipped",{rowIdx:k,raw:{country:d[a],category:d[i],status:d[r]},parsed:{country:w,rawCategory:v}}),h++;return}const j=v.toUpperCase(),M=Pe[j]||j;c[`${w}|${M}`]=!0,M!==j&&(c[`${w}|${j}`]=!0),x++}catch(b){let m;try{m={country:d==null?void 0:d[a],category:d==null?void 0:d[i],status:d==null?void 0:d[r]}}catch{m=d}console.warn("[parseUnlaunched] row error",{rowIdx:k,raw:m,error:b==null?void 0:b.message}),h++}});let p=0;return Object.keys(Kr).forEach(d=>{const[u,k]=d.split("|");[k,...Object.keys(Pe).filter(b=>Pe[b]===k)].forEach(b=>{c[`${u}|${b}`]&&(delete c[`${u}|${b}`],p++)})}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${x}건 + 디폴트 ${Object.keys(le).length}건 + 강제출시 제거 ${p}건 + skip ${h}건 / 총행 ${y} / 최종키 ${Object.keys(c).length}개`),{unlaunchedMap:c}}function Jr(t){const e=lo(t,[/^bu$/,/topic/]);if(e<0)return Xt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let a=-1,i=-1,r=-1,l=-1,c=-1;for(let h=0;h<o.length;h++){const p=String(o[h]||"").trim().toLowerCase();a<0&&p==="bu"&&(a=h),i<0&&p.includes("topic")&&p.includes("대시보드")&&(i=h),r<0&&(p==="explanation"||p==="설명")&&(r=h),l<0&&p.includes("기존")&&(l=h),c<0&&p.includes("topic")&&p.includes("row")&&(c=h)}i<0&&(i=1),r<0&&(r=2);const y=[];let x="";return t.slice(e+1).forEach(h=>{if(!h)return;const p=String(h[a]||"").trim();p&&(x=p);const d=String(h[i]||"").trim();if(!d)return;const u=String(h[r]||"").trim(),k=l>=0?String(h[l]||"").trim():"",b=c>=0?String(h[c]||"").trim():"";y.push({bu:x,topic:d,explanation:u,oldTopic:k,topicRow:b})}),y.length>0?{prTopicList:y}:{}}function Yr(t,e){var o;if(!Rr(e,`parseSheetRows:${t}`))return{};try{if(t===Mt.meta)return Ir("parseSheetRows","meta 시트 무시 — 문구는 서버 기본값 사용"),{};if(t===Mt.visSummary)return Or(e);if(t===Mt.productMS||t===Mt.productHS||t===Mt.productES)return Nr(e);if(t===Mt.weeklyMS)return Ye(e,"MS");if(t===Mt.weeklyHS)return Ye(e,"HS");if(t===Mt.weeklyES)return Ye(e,"ES");if(t===Mt.monthlyPR)return Oo(e,"monthly");if(t===Mt.weeklyPR)return Oo(e,"weekly");if(t===Mt.monthlyBrandPrompt)return No(e,"monthly");if(t===Mt.weeklyBrandPrompt)return No(e,"weekly");if(t===Mt.citPageType)return Hr(e);if(t===Mt.citTouchPoints)return Wr(e);if(t===Mt.citDomain)return Vr(e);if(t===Mt.unlaunched)return qr(e);if(t===Mt.prTopicList)return Jr(e)}catch(a){return no(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:a==null?void 0:a.message,stack:(o=a==null?void 0:a.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Xt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(Mt)})}function Xr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Zr(t,e){var u;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,a=typeof window>"u",r=`${a?"https://docs.google.com":"/gsheets-proxy"}/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,l=await fetch(r,{cache:"no-store",headers:a?{"User-Agent":"Mozilla/5.0","Cache-Control":"no-cache, no-store",Pragma:"no-cache"}:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"},...a&&typeof AbortSignal<"u"&&AbortSignal.timeout?{signal:AbortSignal.timeout(3e4)}:{}});if(!l.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${l.status}).`);const c=await l.text(),y=await hn(),x=y.read(c,{type:"string"}),h=x.Sheets[x.SheetNames[0]],p=y.utils.sheet_to_json(h,{header:1,defval:""}),d=c.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${c.length}자/${d}줄 → ${p.length}행 × ${((u=p[0])==null?void 0:u.length)??0}컬럼`),{rows:p,csv:c}}async function Qr(t,e,o={}){var l,c,y;const a=Object.values(Mt),i={};e==null||e(`${a.length}개 시트 병렬 로드 중...`);const r=await Promise.allSettled(a.map(x=>Zr(t,x).then(({rows:h,csv:p})=>({name:x,rows:h,csv:p}))));for(let x=0;x<a.length;x++){const h=a[x],p=r[x];if(e==null||e(`"${h}" 처리 중... (${x+1}/${a.length})`),p.status==="rejected"){console.warn(`"${h}" 시트 건너뜀:`,(l=p.reason)==null?void 0:l.message);continue}try{const{rows:d,csv:u}=p.value;try{(c=o.onRaw)==null||c.call(o,h,u,d.length)}catch(b){console.warn("[SYNC] onRaw 실패:",b.message)}const k=Yr(h,d);for(const[b,m]of Object.entries(k))b==="weeklyLabels"||b==="weeklyLabelsFull"?i[b]||(i[b]=m):Array.isArray(m)&&Array.isArray(i[b])?i[b]=[...i[b],...m]:m&&typeof m=="object"&&!Array.isArray(m)&&i[b]&&typeof i[b]=="object"&&!Array.isArray(i[b])?i[b]={...i[b],...m}:i[b]=m}catch(d){console.warn(`"${h}" 시트 처리 실패:`,d.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const x=[];for(const[h,p]of Object.entries(i.weeklyAll)){const d=p.Total||p.TTL||{},u=d.LG||d.lg||[],k=Object.entries(d).filter(([j])=>j!=="LG"&&j!=="lg"),b=u.length?u[u.length-1]:0,m=u.length>=5?u[0]:0;let w="",v=0;for(const[j,M]of k){const G=M.length?M[M.length-1]:0;G>v&&(v=G,w=j)}b>0&&x.push({id:h,bu:nn[h]||"HS",kr:Me[h]||h,category:h,date:((y=i.meta)==null?void 0:y.period)||"",score:b,prev:m,vsComp:v,compName:w,allScores:{LG:b,...w?{[w]:v}:{}}})}if(x.length&&(i.productsPartial=x,console.log(`[SYNC] weeklyAll에서 ${x.length}개 제품 생성:`,x.map(h=>`${h.id}=${h.score}`).join(", "))),!i.productsCnty){const h=[];for(const[p,d]of Object.entries(i.weeklyAll)){const u=Me[p]||p;for(const[k,b]of Object.entries(d)){if(k==="Total"||k==="TTL")continue;const m=b.LG||b.lg||[],w=m.length?m[m.length-1]:0;if(w<=0)continue;const v=m.length>=2?m[0]:0;let j="",M=0;const G={LG:w};for(const[F,z]of Object.entries(b)){if(F==="LG"||F==="lg")continue;const W=z.length?z[z.length-1]:0;G[F]=W,W>M&&(M=W,j=F)}const V=+(w-M).toFixed(1);h.push({product:u,country:k,score:w,prev:v,compName:j,compScore:M,gap:V,allScores:G})}}h.length&&(i.productsCnty=h,console.log(`[SYNC] weeklyAll에서 productsCnty ${h.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((h,p)=>h===`W${p+1}`)){const h=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(p=>String(p).split(/\n/)[0].trim().toUpperCase()).filter(p=>/^W\d+/.test(p));if(h.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",h),i.weeklyLabels=h;const p=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(d=>{const u=String(d).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(d=>/^W\d+/.test(d));p.length&&(i.weeklyLabelsFull=p)}}if(i._syncIssues=jr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const x=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");x.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:a.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(x.slice(0,10)))}catch{}return i}const At={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none",boxSizing:"border-box"};function ti(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),a=Math.floor(o/60),i=Math.floor(a/24);return i>=1?`${i}일 전`:a>=1?`${a}시간 전`:o>=1?`${o}분 전`:"방금 전"}function ei({savedAt:t,ageMs:e,stale:o,style:a}){const i=t==null,r=i?"#1E293B":o?"#7F1D1D":"#064E3B",l=i?"#94A3B8":o?"#FCA5A5":"#86EFAC",c=i?"#334155":o?"#B91C1C":"#047857",y=i?"○":o?"⚠️":"●",x=i?"동기화 정보 없음":`데이터 최신화: ${ti(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:l,border:`1px solid ${c}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:E,whiteSpace:"nowrap",...a||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:y}),x]})}function oi({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Yt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",oe="#CF0652",ce="#94A3B8",Ne={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},mn={LG:oe,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},_o=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],ro={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},ni=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],_e={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},ri={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},ii={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},co=90;function po(t,e){const o=Ne[e]||Ne.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function ai(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function si(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function io(t){const e=String(t||"").trim().toUpperCase();return _e[e]||t}function li(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?ri[o]||_e[o]||t:ii[o]||_e[o]||t}let ci=0;function zo(t,e,o,a,i,r={}){if(!t||!t.length)return`<svg width="${o}" height="${a}"></svg>`;const l=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,c=r.baselineLabel||"",y=r.labelOffsetY||0,x=r.lineOffsetY||0,h=ci++,p={t:18,r:10,b:20,l:10},d=o-p.l-p.r,u=a-p.t-p.b,k=t.filter(B=>B!=null);if(!k.length){let B=`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const J=t.length,L=J>1?J-1:1;return B+=t.map((I,R)=>`<text x="${(p.l+R/L*d).toFixed(1)}" y="${p.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Yt}">${e[R]||""}</text>`).join(""),B+="</svg>",B}const b=Math.min(...k)-1,m=Math.max(...k)+1,w=m-b||1,v=t.length,j=v>1?v-1:1,M=t.map((B,J)=>p.l+J/j*d),G=[];t.forEach((B,J)=>{B!=null&&G.push({x:M[J],y:p.t+(1-(B-b)/w)*u,v:B,idx:J})});let V=`<svg viewBox="0 0 ${o} ${a+12}" width="100%" height="${a+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const F=l>0?G.filter(B=>B.idx<l):[],z=l>0?G.filter(B=>B.idx>=l):G,W="#64748B";if(z.length>=2){const B=z.map((L,I)=>`${I?"L":"M"}${L.x.toFixed(1)},${L.y.toFixed(1)}`).join(" "),J=B+` L${z[z.length-1].x.toFixed(1)},${p.t+u} L${z[0].x.toFixed(1)},${p.t+u} Z`;V+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${i}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${i}" stop-opacity="0.03"/>
    </linearGradient></defs>`,V+=`<path d="${J}" fill="url(#lg${h})"/>`,V+=`<path d="${B}" stroke="${i}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(F.length>=2){const B=F.map((J,L)=>`${L?"L":"M"}${J.x.toFixed(1)},${J.y.toFixed(1)}`).join(" ");V+=`<path d="${B}" stroke="${W}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(V+=G.map(B=>{const J=l>0&&B.idx<l;return l>0&&B.idx===l?`<circle cx="${B.x.toFixed(1)}" cy="${B.y.toFixed(1)}" r="4" fill="#000" stroke="${i}" stroke-width="3"/>`:`<circle cx="${B.x.toFixed(1)}" cy="${B.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${J?W:i}" stroke-width="2" opacity="${J?.85:1}"/>`}).join(""),V+=G.map(B=>{const L=l>0&&B.idx<l?W:i;return`<text x="${B.x.toFixed(1)}" y="${Math.max(B.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${L}" font-family="${Yt}">${B.v.toFixed(1)}</text>`}).join(""),l>0&&c){const B=M[l];V+=`<line x1="${B.toFixed(1)}" y1="${(p.t+x).toFixed(1)}" x2="${B.toFixed(1)}" y2="${(p.t+u+x).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const J=B>o*.7,L=(J?p.t+u+1:p.t+8)+y;V+=`<text x="${(J?B-5:B+5).toFixed(1)}" y="${L.toFixed(1)}" text-anchor="${J?"end":"start"}" font-size="9" fill="#64748B" font-family="${Yt}">${c}</text>`}return V+=t.map((B,J)=>`<text x="${M[J].toFixed(1)}" y="${p.t+u+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Yt}">${e[J]||""}</text>`).join(""),V+="</svg>",V}function Ae(t,e){return mn[t]||_o[e%_o.length]}function gn(t,e,o,a,i={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const l=i.fadeBeforeIdx!=null?i.fadeBeforeIdx:-1,c=i.baselineLabel||"";let y=1/0,x=-1/0;if(r.forEach(v=>(t[v]||[]).forEach(j=>{j!=null&&(j<y&&(y=j),j>x&&(x=j))})),!isFinite(y))return"";const h=Math.max((x-y)*.15,2);y=Math.max(0,y-h),x=Math.min(100,x+h);const p=x-y||1,d=e.length,u=8,k=8,b=a-u-k,m="#64748B";let w="";for(let v=0;v<=4;v++){const j=u+v/4*b;w+=`<line x1="0" y1="${j.toFixed(1)}" x2="${o}" y2="${j.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((v,j)=>{const M=t[v]||[],G=Ae(v,j),V=v==="LG",F=V?2.5:1.5,z=V?1:.7,W=[];if(M.forEach((I,R)=>{if(I==null)return;const H=(R+.5)/d*o,K=u+(1-(I-y)/p)*b;W.push({x:H,y:K,v:I,idx:R})}),!W.length)return;const B=l>0?W.filter(I=>I.idx<l):[],J=l>0?W.filter(I=>I.idx>=l):W;function L(I,R,H,K){if(I.length>=2){const ot=I.map((et,f)=>`${f?"L":"M"}${et.x.toFixed(1)},${et.y.toFixed(1)}`).join(" ");w+=`<path d="${ot}" stroke="${R}" fill="none" stroke-width="${F}" stroke-linecap="round" stroke-linejoin="round" opacity="${H}"/>`}I.forEach(ot=>{K&&ot.idx===l||(w+=`<circle cx="${ot.x.toFixed(1)}" cy="${ot.y.toFixed(1)}" r="${V?3.5:2.5}" fill="#fff" stroke="${R}" stroke-width="${V?2:1.5}" opacity="${H}"/>`)})}if(L(B,m,.85,!1),L(J,G,z,V&&l>0),V&&l>0){const I=W.find(R=>R.idx===l);I&&(w+=`<circle cx="${I.x.toFixed(1)}" cy="${I.y.toFixed(1)}" r="4.5" fill="#000" stroke="${G}" stroke-width="3"/>`)}}),l>0&&c){const v=(l+.5)/d*o;w+=`<line x1="${v.toFixed(1)}" y1="${u}" x2="${v.toFixed(1)}" y2="${u+b}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const j=v>o*.7;w+=`<text x="${(j?v-5:v+5).toFixed(1)}" y="${(u+12).toFixed(1)}" text-anchor="${j?"end":"start"}" font-size="11" fill="#64748B" font-family="${Yt}">${c}</text>`}return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="${a}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function di({lang:t,weeklyAll:e,products:o,productsCnty:a,ulMap:i,monthlyVis:r,total:l,meta:c,wLabels:y}){const x={monthlyVis:r};return`
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
  // 주소창 hash 갱신 — 탭을 연 상태로 링크를 복사·공유할 수 있게 한다.
  // (복원 로직은 있었는데 갱신이 없어 링크가 항상 첫 탭으로 열렸다)
  // replaceState 라 뒤로가기 히스토리를 더럽히지 않는다.
  try{if(window.history&&history.replaceState)history.replaceState(null,'','#'+id);else window.location.hash=id}catch(e){}
}
// 해시로 직접 들어온 경우(#citation 등) 뒤늦은 hashchange 도 반영
window.addEventListener('hashchange',function(){
  var h=window.location.hash.replace('#','');
  if(h&&document.getElementById('tab-'+h))switchTab(h);
});
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
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(p=>({id:p.id,bu:p.bu,kr:p.kr,en:p.en||p.kr,category:p.category||"",date:p.date||"",status:p.status,score:p.score||0,prev:p.prev||0,vsComp:p.vsComp||0,compName:p.compName||"",compRatio:p.compRatio||0,allScores:p.allScores||{},monthlyScores:p.monthlyScores||[]})))};
var _productsCnty=${h(a||[])};
var _unlaunchedMap=${h(i)};
var _PROD_TO_UL=${h(Le)};
function _isUnlaunched(cnty,prodId){if(prodId==null)return false;var code=_PROD_TO_UL[prodId]||String(prodId).toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((x==null?void 0:x.monthlyVis)||[])};
var _total=${h(l)};
var _meta={period:${h(c.period||"")},reportNo:${h(c.reportNo||"")},totalInsight:${h(c.totalInsight||"")}};
var _wLabels=${h(y)};`})()}
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(mn)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${oe}';
var _FONT=${h(Yt)};
var _COMP='${ce}';
var _REGIONS=${h(Object.fromEntries(Object.entries(ro).map(([p,d])=>[p,d.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(ro).map(([h,p])=>[h,t==="en"?p.labelEn:p.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${co};

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
    // 미출시 국가 제외 (2026-09-15) — 반드시 prodId 확정 뒤에 (앞에 두면 var 호이스팅으로
    // undefined 참조 → 이 집계 전체가 죽어 국가 선택 시 월별 기능이 무반응이 됐다, 2026-09-17 수리)
    if(_isUnlaunched(r.country||'',prodId))return;
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
      if(_isUnlaunched(c,prodId))return; // 미출시 국가는 평균·Total 폴백 모두 제외 (2026-09-15)
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
    // 미출시 국가는 평균에서 제외 (사용자 지시 2026-09-15) — 시트에 점수가 실려 있어도 집계 오염 방지
    return countries.indexOf(r.country||'')>=0 && prodKeys.indexOf((r.product||'').toUpperCase())>=0
      && !_isUnlaunched(r.country||'',prodId);
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
    if(_isUnlaunched(r.country||'',prodId))return; // 미출시 국가 제외 (2026-09-15)
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
  // 다중 국가 → LG 브랜드 평균 (미출시 국가 제외 — 2026-09-15)
  var live=countries.filter(function(c){return !_isUnlaunched(c,prodId)});
  if(!live.length)return totalLG; // 전부 미출시면 Total (카드 레벨에서 회색 처리)
  var result=[];var maxLen=0;
  live.forEach(function(c){var d=(prodData[c]||{}).LG||[];if(d.length>maxLen)maxLen=d.length});
  if(!maxLen)return totalLG;
  for(var i=0;i<maxLen;i++){var sum=0;var cnt=0;
    live.forEach(function(c){var v=(prodData[c]||{}).LG;if(v&&v[i]!=null){sum+=v[i];cnt++}});
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
`}const pi=["audio","rac","aircare"];function ui(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return pi.includes(String(e).toLowerCase())}function hi(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function ze(t,e){if(!ui(t)||!e)return-1;const o=hi(t);if(o>0){const a=e.findIndex(i=>{const r=String(i||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(a>=0)return a}return e.findIndex(a=>{const i=String(a||"").trim();return/^Apr(il)?$/i.test(i)||i==="4월"})}const Ge={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function fi(t){const e=Ge[t]||Ge.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function yn(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),a=Ge[e]||Ge.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${a.racair}</p>`:""}function mi(t,e,o,a,i,r,l){if(!e||!Object.keys(e).length)return"";const y=["MS","HS","ES"].map(x=>{const h=t.filter(d=>d.bu===x);if(!h.length)return"";const p=h.map(d=>{var B,J;const u=((B=e[d.id])==null?void 0:B.Total)||{},k=Object.keys(u).sort((L,I)=>{var K,ot;if(L==="LG")return-1;if(I==="LG")return 1;const R=((K=u[L])==null?void 0:K[u[L].length-1])||0;return(((ot=u[I])==null?void 0:ot[u[I].length-1])||0)-R});if(!k.length)return"";const b=po(d.status,i),m=(J=u.LG)==null?void 0:J[u.LG.length-1],w=k.map((L,I)=>{const R=Ae(L,I),H=L==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${R};opacity:${H?1:.7}"></i><span style="font-size:13px;color:${H?"#1A1A1A":"#94A3B8"};font-weight:${H?700:400}">${L}</span></span>`}).join(""),v=o.length,j=`<colgroup><col style="width:${co}px">${o.map(()=>"<col>").join("")}</colgroup>`,M=ze(d,o),G=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:8px 0;border:0">${gn(u,o,v*80,180,{fadeBeforeIdx:M,baselineLabel:M>0?"*Baseline 재설정":""})}</td></tr>`,V=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,F=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(L=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${L}</th>`).join("")}</tr>`,z=k.map((L,I)=>{const R=Ae(L,I),H=L==="LG",K=o.map((ot,et)=>{var Z;const f=(Z=u[L])==null?void 0:Z[et];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${f!=null?H?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${H?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${f!=null?f.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${H?"#FFF8F9":I%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${H?700:500};color:${R};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${R};margin-right:4px;vertical-align:0"></i>${L}</td>${K}</tr>`}).join(""),W=uo(d.id||d.category,r);return`<div class="trend-row${W?" is-unlaunched":""}" data-prodid="${d.id||d.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${oe};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ho(d,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${W?"#F1F5F9":b.bg};color:${W?"#64748B":b.color};border:1px solid ${W?"#CBD5E1":b.border}">${W?i==="en"?"Unlaunched":"미출시":b.label}</span>
          ${m!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${m.toFixed(1)}%</span>`:""}
          ${d.compName?`<span style="font-size:14px;color:#94A3B8">vs ${d.compName} ${d.compRatio!=null&&d.compRatio!==""?Math.round(d.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Yt}">${j}<tbody>${G}${V}${F}${z}</tbody></table></div>
        ${yn(d,i)}
      </div>`}).join("");return p?`<div class="bu-group" data-bu="${x}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${x}</span></div>
      ${p}
    </div>`:""}).join("");return y.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${l||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${i==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${y}</div>
  </div>`:""}function gi(t,e,o,a,i,r){if(!e||!e.length)return"";const l=["MS","HS","ES"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function x(u){const k=String(u||""),b=k.match(/(\d{1,2})월/);if(b)return parseInt(b[1])-1;const m=k.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(m)return y[m[1].toLowerCase()];const w=k.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],p=c.slice(),d=l.map(u=>{const k=t.filter(m=>m.bu===u);if(!k.length)return"";const b=k.map(m=>{const w=m.monthlyScores||[];let v={};if(w.length>=2){const H=new Set;if(w.forEach(K=>{K.allScores&&Object.keys(K.allScores).forEach(ot=>H.add(ot))}),H.forEach(K=>{v[K]=h.map(ot=>{var f;const et=w.find(Z=>x(Z.date)===ot);return((f=et==null?void 0:et.allScores)==null?void 0:f[K])??null})}),!H.size&&(v.LG=h.map(K=>{const ot=w.find(et=>x(et.date)===K);return ot?ot.score:null}),m.vsComp>0)){const K=h.map(ot=>{const et=w.find(f=>x(f.date)===ot);return(et==null?void 0:et.comp)??null});K.some(ot=>ot!=null)&&(v[m.compName||"Comp"]=K)}}else{const H=e.filter(f=>f.division===u&&(f.country==="TOTAL"||f.country==="TTL")),K={};H.forEach(f=>{const Z=x(f.date);Z>=0&&(K[Z]=f)});const ot=h.map(f=>{var Z;return((Z=K[f])==null?void 0:Z.lg)||null}),et=h.map(f=>{var Z;return((Z=K[f])==null?void 0:Z.comp)||null});v={LG:ot},et.some(f=>f!=null&&f>0)&&(v.Samsung=et)}const j=Object.keys(v).sort((H,K)=>{if(H==="LG")return-1;if(K==="LG")return 1;const ot=(v[H]||[]).filter(f=>f!=null).pop()||0;return((v[K]||[]).filter(f=>f!=null).pop()||0)-ot});if(!j.length)return"";const M=po(m.status,a),G=(v.LG||[]).filter(H=>H!=null).pop(),V=j.map((H,K)=>{const ot=Ae(H,K),et=H==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${ot};opacity:${et?1:.7}"></i><span style="font-size:13px;color:${et?"#1A1A1A":"#94A3B8"};font-weight:${et?700:400}">${H}</span></span>`}).join(""),F=p.length,z=`<colgroup><col style="width:${co}px">${p.map(()=>"<col>").join("")}</colgroup>`,W=ze(m,p),B=`<tr><td style="padding:0;border:0"></td><td colspan="${F}" style="padding:8px 0;border:0">${gn(v,p,F*80,180,{fadeBeforeIdx:W,baselineLabel:W>0?"*Baseline 재설정":""})}</td></tr>`,J=`<tr><td style="padding:0;border:0"></td><td colspan="${F}" style="padding:4px 0 6px;border:0">${V}</td></tr>`,L=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${p.map(H=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${H}</th>`).join("")}</tr>`,I=j.map((H,K)=>{const ot=Ae(H,K),et=H==="LG",f=p.map((Z,U)=>{var S;const ht=(S=v[H])==null?void 0:S[U];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${ht!=null?et?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${et?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${ht!=null?ht.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${et?"#FFF8F9":K%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${et?700:500};color:${ot};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${ot};margin-right:4px;vertical-align:0"></i>${H}</td>${f}</tr>`}).join(""),R=uo(m.id||m.category,i);return`<div class="trend-row${R?" is-unlaunched":""}" data-prodid="${m.id||m.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${oe};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${ho(m,i)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${R?"#F1F5F9":M.bg};color:${R?"#64748B":M.color};border:1px solid ${R?"#CBD5E1":M.border}">${R?a==="en"?"Unlaunched":"미출시":M.label}</span>
          ${G!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${G.toFixed(1)}%</span>`:""}
          ${m.compName?`<span style="font-size:14px;color:#94A3B8">vs ${m.compName} ${m.compRatio!=null&&m.compRatio!==""?Math.round(m.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Yt}">${z}<tbody>${B}${J}${L}${I}</tbody></table></div>
        ${yn(m,a)}
      </div>`}).join("");return b?`<div class="bu-group" data-bu="${u}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${u}</span></div>
      ${b}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${p[0]}–${p[p.length-1]} (${p.length}${a==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function bn(){return""}function Go(t,e,o,a,i){const r=+(t.score-t.prev).toFixed(1),l=t.vsComp||0,c=+(t.score-l).toFixed(1),y=r>0?"▲":r<0?"▼":"─",x=r>0?"#22C55E":r<0?"#EF4444":"#94A3B8",h=l>0?Math.round(t.score/l*100):null,p=h==null?"#94A3B8":h>=100?"#22C55E":h>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${i==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
        ${h!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${a==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${p}">${h}%</span>
          <span class="hero-compratio-sub">${a==="en"?"vs Samsung":"삼성 대비"}</span>
        </div>`:""}
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${x}">${y} ${Math.abs(r).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${oe}"></div>
          </div>
          ${l>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(l,100)}%;background:${ce}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${oe}"></i> LG ${t.score}%</span>
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
  </div>`}function Fe(t,e){const o=Le[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(a=>a.endsWith("|"+o)).map(a=>a.split("|")[0])}function uo(t,e){return ni.every(o=>{const a=Le[t]||(t||"").toUpperCase();return(e||{})[`${o}|${a}`]})}function ho(t,e){return Fe(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Uo(t,e,o,a,i,r,l,c,y){if(!t.length)return"";const h=["MS","HS","ES"].map(p=>{const d=t.filter(k=>k.bu===p);if(!d.length)return"";const u=d.map(k=>{var lt,yt;const b=k.weekly||[],m=b.filter(pt=>pt!=null),w=k.weeklyScore||(m.length>0?m[m.length-1]:k.score),v=k.monthlyScore||k.score,j=w,M=((lt=c==null?void 0:c[k.id])==null?void 0:lt.Total)||((yt=c==null?void 0:c[k.id])==null?void 0:yt.TTL)||{};let G=0;Object.entries(M).forEach(([pt,st])=>{if(pt==="LG"||pt==="lg")return;const wt=Array.isArray(st)&&st.length?st[st.length-1]:0;wt>G&&(G=wt)});const V=k.vsComp||0,F=G>0?w/G*100:V>0?w/V*100:100,z=V>0?v/V*100:100,W=Math.round(F),B=Math.round(z),J=W,L=F>=100?"lead":F>=80?"behind":"critical",I=po(L,a),R=m.length>=1?m[m.length-1]:null,H=m.length>=2?m[m.length-2]:null,K=R!=null&&H!=null?+(R-H).toFixed(1):null,ot=K>0?"▲":K<0?"▼":"─",et=K>0?"#22C55E":K<0?"#EF4444":"#94A3B8",f=L==="critical"?"#BE123C":L==="behind"?"#D97706":"#15803D",Z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ht(pt){const st=String(pt||""),wt=st.match(/(\d{1,2})월/);if(wt)return parseInt(wt[1])-1;const Lt=st.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(Lt)return U[Lt[1].toLowerCase()];const A=st.match(/\d{4}[-\/](\d{1,2})/);return A?parseInt(A[1])-1:-1}let S=k.monthlyScores||[];if(S.length<2&&l.length>0){const pt=l.filter(wt=>wt.division===k.bu&&(wt.country==="TOTAL"||wt.country==="TTL")),st={};pt.forEach(wt=>{const Lt=ht(wt.date);Lt>=0&&(st[Lt]={date:wt.date,score:wt.lg,comp:wt.comp})}),S=Object.keys(st).sort((wt,Lt)=>wt-Lt).map(wt=>st[wt])}const C=S.length>0?S.map(pt=>{const st=ht(pt.date);return st>=0?Z[st]:pt.date}):["M-3","M-2","M-1","M0"],T=S.length>0?S.map(pt=>pt.score):[null,null,null,k.score],_=S.length>=2?+(S[S.length-1].score-S[S.length-2].score).toFixed(1):null,O=_>0?"▲":_<0?"▼":"─",$=_>0?"#22C55E":_<0?"#EF4444":"#94A3B8",gt=J,Tt=gt>=100?"#15803D":gt>=80?"#D97706":"#BE123C",ut=k.weeklyPrev||(m.length>=5?m[m.length-5]:m[0]||0),Ct=w&&ut?+(w-ut).toFixed(1):null,vt=v&&(k.monthlyPrev||k.prev)?+(v-(k.monthlyPrev||k.prev)).toFixed(1):null,kt=Fe(k.id||k.category,r),D=uo(k.id||k.category,r),it=D?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:a==="en"?"Unlaunched":"미출시"}:I;return`<div class="prod-card${D?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${w.toFixed(1)}" data-ms="${v.toFixed(1)}" data-wr="${W}" data-mr="${B}" data-wmom="${Ct??""}" data-mmom="${vt??""}" style="border-color:${it.border}">
        <div class="prod-head">
          <span class="prod-name">${ho(k,r)}</span>
          ${kt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${a==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${it.bg};color:${it.color};border-color:${it.border}">${it.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${j.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${et}">${K!=null?`WoW ${ot} ${Math.abs(K).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${$}">${_==null?"MoM —":`MoM ${O} ${Math.abs(_).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const pt=i.slice(-10),st=ze(k,pt),wt=String(k.id||"").toLowerCase(),Lt=wt==="aircare"?30:wt==="rac"?20:0;return zo(b.slice(-10),pt,300,90,f,{fadeBeforeIdx:st,baselineLabel:st>0?"*Baseline 재설정":"",labelOffsetY:Lt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const pt=ze(k,C),wt=String(k.id||"").toLowerCase()==="audio";return zo(T,C,300,90,f,{fadeBeforeIdx:pt,baselineLabel:pt>0?"*Baseline 재설정":"",labelOffsetY:wt?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${a==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(gt,120)}%;background:${Tt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${Tt}">${gt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${p}">
      <div class="bu-header"><span class="bu-label">${p}</span><span class="bu-count">${d.length}${o.categories}</span></div>
      <div class="prod-grid">${u}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${y||""}${y?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${bn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const p=t.filter(d=>Fe(d.id||d.category,r).length>0).map(d=>`${(d.id||"").toLowerCase()==="audio"||d.kr==="오디오"?"Audio-Sound Suite":d.kr}: ${Fe(d.id||d.category,r).map(u=>li(u,a)).join(", ")} ${a==="en"?"not launched":"미출시"}`);return(p.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${p.join(" / ")}</p>`:"")+fi(a)})()}</div>
  </div>`}function Ho(t,e,o,a){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),l=Le[r]||(r||"").toUpperCase(),c=a&&a[`${t.country}|${l}`],y=si(t.score,t.compScore),x=c?"#94A3B8":y==="lead"?"#15803D":y==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),p=c?"#64748B":h>=0?"#15803D":"#BE123C",d=130,u=["TCL","HISENSE","HAIER"];let k="",b=0;t.allScores&&Object.entries(t.allScores).forEach(([z,W])=>{const B=String(z).toUpperCase();u.some(L=>B.includes(L))&&W>b&&(k=z,b=W)});const m=Math.max(e,b),w=c?1:t.score,v=Math.max(3,Math.round(w/m*d)),j=t.compScore>0?Math.max(3,Math.round(t.compScore/m*d)):0,M=b>0?Math.max(3,Math.round(b/m*d)):0,G="#9333EA",V=c?"—":t.score.toFixed(1),F=c?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${c?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${x}">${V}</span>
        <div class="vbar-col" style="height:${v}px;background:${x}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ce}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${j}px;background:${ce}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${b>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${G}">${b.toFixed(1)}</span>
        <div class="vbar-col" style="height:${M}px;background:${G}"></div>
        <span class="vbar-col-name" style="color:${G}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${p}">${F}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Wo(t,e,o,a,i,r){if(!t||!t.length)return"";const l=new Map;t.forEach(u=>{l.has(u.product)||l.set(u.product,[]),l.get(u.product).push(u)});const c=e.cntyProductFilter||{},y=[...l.entries()].filter(([u])=>c[u]!==!1).map(([u,k])=>{const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),m=k.map(w=>Ho(w,b,io(w.country),i)).join("");return`<div class="cnty-product" data-group-product="${u}"><div class="bu-header"><span class="bu-label">${u}</span></div><div class="vbar-chart">${m}</div></div>`}).join(""),x=new Map;t.forEach(u=>{x.has(u.country)||x.set(u.country,[]),x.get(u.country).push(u)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],d=h.filter(u=>x.has(u)).concat([...x.keys()].filter(u=>!h.includes(u))).map(u=>{const k=x.get(u);if(!k)return"";const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),m=k.map(w=>Ho(w,b,w.product,i)).join("");return`<div class="cnty-product" data-group-country="${u}"><div class="bu-header"><span class="bu-label">${io(u)}</span></div><div class="vbar-chart">${m}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
    ${bn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${d}</div>
      <div class="cnty-view-product" style="display:none">${y}</div>
      ${(()=>{if(!i||!Object.keys(i).length)return"";const u={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},b=[...new Set(t.map(m=>m.product))].map(m=>{const w=u[m]||String(m).toLowerCase(),v=Fe(w,i),j=w==="audio"?"Audio-Sound Suite":m;return v.length?`${j}: ${v.join(", ")} ${a==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return b.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${b.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Vo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function yi(t){const e=Vo[t]||Vo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(i=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${i.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${i.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Ko(t,e,o,a,i,r="weekly"){const l=r==="monthly",c=l?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const y=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let x;l?x=e&&e.length?e.slice():[]:x=e&&e.length?e.slice(-12):[];const h=[...new Set(t.map(L=>L.topic))].filter(Boolean),p=[...new Set(t.map(L=>L.type))].filter(Boolean),d=[...new Set(t.map(L=>L.country))].filter(L=>L&&L!=="TTL"),u=y.filter(L=>d.includes(L)).concat(y.filter(L=>!d.includes(L))),k=JSON.stringify(t).replace(/</g,"\\u003c"),b=JSON.stringify(x),m=JSON.stringify(h),w=JSON.stringify(p),v=JSON.stringify(u),j=72;function M(L){const I={};return L&&String(L).split(`
`).forEach(R=>{const H=R.indexOf("=");if(H>0){const K=R.slice(0,H).trim(),ot=R.slice(H+1).trim();K&&(I[K]=ot)}}),I}const G=M(a==null?void 0:a.prTopicPromptsRaw),V=(i==null?void 0:i.prTopicList)||[],F={},z={};V.forEach(L=>{[L.topic,L.topicRow,L.oldTopic].filter(Boolean).map(R=>R.trim()).forEach(R=>{L.explanation&&!F[R]&&(F[R]=L.explanation),L.bu&&!z[R]&&(z[R]=L.bu)})});const B={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...F,...M(a==null?void 0:a.prTopicDescsRaw)},J={};return h.forEach(L=>{const I=z[L];if(I)J[L]=I;else{const R=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];J[L]=R.some(H=>L.toLowerCase().includes(H.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Yt}">
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
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${l?o==="en"?"Month":"월":o==="en"?"Week":"주차"}</span>
        <select id="${c}-period-sel" onchange="_${c}SetPeriod(this.selectedIndex)"
          style="padding:4px 10px;border-radius:6px;border:1px solid #E2E8F0;background:#F8FAFC;color:#0F172A;font-size:16px;font-weight:600;font-family:${Yt};cursor:pointer">
          ${x.map((L,I)=>`<option value="${I}"${I===x.length-1?" selected":""}>${l?L:String(L).toUpperCase()}</option>`).join("")}
        </select>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${oe};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(a==null?void 0:a.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span id="${c}-basis-tag" style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs #1 competitor":"() 는 1위 경쟁사 대비"}</span></span>
      </div>
      <div class="section-body" id="${c}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${l?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend" id="${c}-trend-range">${l?x.length?`${x[0]}–${x[x.length-1]} (${x.length}${o==="en"?" months":"개월"})`:"":x.length?`${x[0].toUpperCase()}–${x[x.length-1].toUpperCase()} (${x.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${c}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${k},W_ALL=${b},TP=${m},TY=${w},CN=${v};
    // 기간 필터 (2026-09-06) — 선택 시점까지 W 를 잘라 매트릭스·트렌드·기준 태그가 일괄 반영
    var fPeriod=W_ALL.length-1;
    var W=W_ALL.slice();
    var CW=${j};
    var TOPIC_CAT=${JSON.stringify(J)};
    var TOPIC_PROMPT=${JSON.stringify(G).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(B).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(V).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(_e)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${oe}',COMP='${ce}';
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
    function updatePeriodTags(){
      var last=W.length?W[W.length-1]:'';
      var disp=${l?"last":"String(last).toUpperCase()"};
      var b=document.getElementById('${c}-basis-tag');if(b)b.textContent=disp+' ${o==="en"?"data":"기준"}';
      var tr=document.getElementById('${c}-trend-range');
      if(tr&&W.length){var f=${l?"W[0]":"String(W[0]).toUpperCase()"};tr.textContent=f+'–'+disp+' ('+W.length+'${l?o==="en"?" months":"개월":o==="en"?" weeks":"주"})';}
    }
    function renderAll(){renderFilters();renderMatrix();renderSections();updatePeriodTags()}
    window._${c}SetType=function(t){fType=t;renderAll()};
    window._${c}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${c}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    window._${c}SetView=function(v){fView=v;renderAll()};
    window._${c}SetPeriod=function(i){fPeriod=i;W=W_ALL.slice(0,i+1);renderAll()};
    renderAll();
  })();
  <\/script>`}function qo(t,e,o,a,i,r){const l=(t||[]).filter(b=>!0);if(!l.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const c=e&&e.length?e.slice(-12):[],x=[...new Set(l.map(b=>b.stakeholder))].filter(Boolean).map(b=>({stakeholder:b,topics:[...new Set(l.filter(m=>m.stakeholder===b).map(m=>m.topic))].filter(Boolean)})),h=72,p=JSON.stringify(l).replace(/</g,"\\u003c"),d=JSON.stringify(c),u=JSON.stringify(x),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Yt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${i||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${c.length?`${c[0].toUpperCase()}–${c[c.length-1].toUpperCase()} (${c.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${oe};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${p},W=${d},GROUPS=${u};
    var CW=${h},RED='${oe}';
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
  <\/script>`}function bi(t,e,o,a,i,r,l,c,y,x,h,p,d,u){var st,wt,Lt;d!=null&&d.llmModel&&d.llmModel!=="Total"&&(o=an(o,d.llmModel),l=sn(l,d.llmModel),e=ln(e,d.monthlyVis,d.llmModel),d.monthlyVis&&(d={...d,monthlyVis:Kn(d.monthlyVis,d.llmModel)})),o=(o||[]).map(A=>({...A,weekly:(A.weekly||[]).map(N=>N??0),monthly:(A.monthly||[]).map(N=>N??0)})),x&&typeof x=="object"&&Object.values(x).forEach(A=>{!A||typeof A!="object"||Object.values(A).forEach(N=>{!N||typeof N!="object"||Object.keys(N).forEach(Y=>{const ft=N[Y];Array.isArray(ft)&&(N[Y]=ft.map(Ft=>Ft??0))})})});const k={aircare:"Xiaomi"};o=o.map(A=>{const N=k[(A.id||"").toLowerCase()];if(!N||!A.allScores)return A;const Y=Object.entries(A.allScores).find(([bt])=>bt.toLowerCase()===N.toLowerCase()&&bt.toLowerCase()!=="lg");if(!Y)return A;const ft=Y[1];if(!(ft>0))return A;const Ft=Math.round(A.score/ft*100);return{...A,compName:Y[0],vsComp:ft,compRatio:Ft,status:Ft>=100?"lead":Ft>=80?"behind":"critical"}});const b=(d==null?void 0:d.visibilityOnly)||!1,m=(d==null?void 0:d.includeReadability)===!0,w=(d==null?void 0:d.sheetRaw)||null,v=()=>{var Ft;const A=bt=>`<div class="dash-container" style="max-width:900px;margin:0 auto;padding:28px 16px;">${bt}</div>`;if(!w||!((Ft=w.sheets)!=null&&Ft.length))return A(`<div style="background:#fff;border:1px solid #E8EDF2;border-radius:12px;padding:28px;text-align:center;color:#64748B;font-size:14px;">${r==="en"?'No raw data stored yet — generated at the next data refresh (daily 00:00 KST or "Publish All").':'아직 저장된 원본 데이터가 없습니다 — 다음 데이터 새로고침(매일 00시 KST 또는 "전체 게시") 때 생성됩니다.'}</div>`);const N=new Date(w.syncedAt).toLocaleString(r==="en"?"en-US":"ko-KR",{timeZone:"Asia/Seoul"}),Y=bt=>bt>=1048576?(bt/1048576).toFixed(1)+" MB":Math.max(1,Math.round(bt/1024))+" KB",ft=w.sheets.map((bt,Zt)=>`
      <tr style="border-bottom:1px solid #F1F5F9;${Zt%2===0?"background:#FAFBFC;":""}">
        <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#1A1A1A;">${bt.name}</td>
        <td style="padding:10px 14px;font-size:12px;color:#64748B;text-align:right;font-variant-numeric:tabular-nums;">${(bt.rows||0).toLocaleString("en-US")}${r==="en"?" rows":"행"}</td>
        <td style="padding:10px 14px;font-size:12px;color:#64748B;text-align:right;font-variant-numeric:tabular-nums;">${Y(bt.bytes||0)}</td>
        <td style="padding:10px 14px;text-align:right;">
          <a href="/p/sheet-raw/${bt.slug}.csv" download style="display:inline-block;padding:5px 14px;border-radius:6px;background:#CF0652;color:#fff;font-size:12px;font-weight:700;text-decoration:none;">CSV</a>
        </td>
      </tr>`).join("");return A(`
      <div style="background:#fff;border:1px solid #E8EDF2;border-radius:12px;overflow:hidden;">
        <div style="padding:16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
          <div style="font-size:16px;font-weight:800;color:#1A1A1A;">${r==="en"?"Raw Data Download":"Raw 데이터 다운로드"}</div>
          <div style="margin-top:4px;font-size:12px;color:#64748B;">${r==="en"?`Source sheets as of ${N} (KST) — refreshed on every data sync. Meta sheet excluded.`:`${N} (KST) 동기화 기준 원본 시트 — 데이터 동기화 때마다 갱신됩니다. 메타 시트 제외.`}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <thead><tr style="border-bottom:2px solid #E8EDF2;">
            <th style="padding:9px 14px;text-align:left;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">${r==="en"?"Sheet":"시트"}</th>
            <th style="padding:9px 14px;text-align:right;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">${r==="en"?"Rows":"행수"}</th>
            <th style="padding:9px 14px;text-align:right;font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;">${r==="en"?"Size":"용량"}</th>
            <th style="padding:9px 14px;"></th>
          </tr></thead>
          <tbody>${ft}</tbody>
        </table>
      </div>`)},j=(u==null?void 0:u.unlaunchedMap)||{},G=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,V=Ne[r]||Ne.ko;let F;if(y&&y.length)F=y.map(A=>String(A).toUpperCase().startsWith("W")?A.toUpperCase():A);else{const A=x?Math.max(...Object.values(x).flatMap(Y=>Object.values(Y).flatMap(ft=>Object.values(ft).map(Ft=>(Ft==null?void 0:Ft.length)||0))),0):0,N=t.weekStart||Math.max(1,A-11);F=Array.from({length:Math.max(12,A)},(Y,ft)=>`W${N+ft}`)}const z=new Set;x&&Object.values(x).forEach(A=>Object.keys(A).forEach(N=>{N!=="Total"&&z.add(N)})),l&&l.forEach(A=>{A.country&&A.country!=="TTL"&&z.add(A.country)});const W=[...z].sort(),B=r==="en"?"All":"전체",J=["MS","HS","ES"],L=o.map(A=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${A.bu}" value="${A.id}" checked onchange="onFilterChange()"><span>${A.kr}</span></label>`).join(""),I=J.map(A=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${A}" checked onchange="onBuChange('${A}')"><span>${A}</span></label>`).join(""),R=W.map(A=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${A}" checked onchange="onFilterChange()"><span>${io(A)}</span></label>`).join(""),H=Object.entries(ro).map(([A,N])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${A}" checked onchange="onRegionChange('${A}')"><span>${N.labelEn}</span></label>`).join(""),K=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,ot=d!=null&&d.weeklyLabelsFull&&d.weeklyLabelsFull.length===F.length?d.weeklyLabelsFull:F,et=F.map((A,N)=>`<option value="${N}"${N===F.length-1?" selected":""}>${ot[N]||A}</option>`).join(""),f=(((st=o[0])==null?void 0:st.monthlyScores)||[]).map(A=>{const N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Y=String(A.date).match(/(\d{1,2})월/),ft=String(A.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Y?N[parseInt(Y[1])-1]:ft?ft[1].charAt(0).toUpperCase()+ft[1].slice(1).toLowerCase():A.date}),Z=f.map((A,N)=>`<option value="${N}"${N===f.length-1?" selected":""}>${A}</option>`).join(""),U=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Yt}`,ht=new Set(["Total"]);(o||[]).forEach(A=>(A.monthlyScores||[]).forEach(N=>Object.keys(N.byLlm||{}).forEach(Y=>ht.add(Y)))),(l||[]).forEach(A=>(A.monthlyScores||[]).forEach(N=>Object.keys(N.byLlm||{}).forEach(Y=>ht.add(Y)))),((d==null?void 0:d.monthlyVis)||[]).forEach(A=>{A.llmModel&&ht.add(A.llmModel)});const S=["Total",...Array.from(ht).filter(A=>A!=="Total").sort((A,N)=>A.localeCompare(N))],C=(d==null?void 0:d.llmModel)||"Total",T=S.map(A=>`<option value="${A}"${A===C?" selected":""}>${A}</option>`).join(""),_=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${K}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${F[F.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${F.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${U}">${et}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${U}"${f.length>0?"":" disabled"}>${Z||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${U};opacity:0.55;cursor:not-allowed" disabled>${T}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${B}</span></label>
        ${I}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${B}</span></label>
        ${L}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${B}</span></label>
        ${H}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${B}</span></label>
        ${R}
      </div>
    </div>
  </div>`,O=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${ai(t.noticeText)}</div></div>`:"",$=[O,t.showTotal!==!1?Go(e,t,V,r,"weekly"):""].join(""),gt=[O,t.showTotal!==!1?Go(e,t,V,r,"monthly"):""].join(""),Tt=[];if(x&&Object.keys(x).length){const A=Me;Object.entries(x).forEach(([N,Y])=>{const ft=o.find(bt=>bt.id===N),Ft=(ft==null?void 0:ft.kr)||A[N]||N;Object.entries(Y).forEach(([bt,Zt])=>{if(bt==="Total"||bt==="TTL"||bt==="TOTAL")return;const Gt=Zt.LG||Zt.lg||[],Ot=Gt.length>0?Gt[Gt.length-1]:0;if(Ot<=0)return;let Ut="",re=0;Object.entries(Zt).forEach(([Vt,Ht])=>{if(Vt==="LG"||Vt==="lg")return;const Kt=Array.isArray(Ht)&&Ht.length?Ht[Ht.length-1]:0;Kt>re&&(re=Kt,Ut=Vt)});const pe=+(Ot-re).toFixed(1),fe={};Object.entries(Zt).forEach(([Vt,Ht])=>{if(Array.isArray(Ht)&&Ht.length){const Kt=Ht[Ht.length-1];Kt!=null&&(fe[Vt]=Kt)}}),Tt.push({product:Ft,country:bt,score:Ot,compName:Ut,compScore:re,gap:pe,allScores:fe})})})}const ut=((wt=d==null?void 0:d.weeklyLabelsFull)==null?void 0:wt[d.weeklyLabelsFull.length-1])||F[F.length-1]||"",Ct=ut?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${ut} ${r==="en"?"data":"기준"}</span>`:"",vt=[$,t.showProducts!==!1?Uo(o,t,V,r,F,j,(d==null?void 0:d.monthlyVis)||[],x,Ct):"",`<div id="trend-container">${mi(o,x,F,V,r,j,Ct)}</div>`,t.showCnty!==!1?Wo(Tt,t,V,r,j,Ct):""].join(""),kt=o.map(A=>{const N=A.monthlyScore||A.score,Y=A.monthlyPrev||A.prev,ft=A.vsComp||0,Ft=ft>0?N/ft*100:100;return{...A,score:N,prev:Y,weeklyScore:N,weeklyPrev:Y,monthlyScore:N,monthlyPrev:Y,weekly:(A.monthlyScores||[]).map(bt=>bt.score),status:Ft>=100?"lead":Ft>=80?"behind":"critical"}}),D=(((Lt=o[0])==null?void 0:Lt.monthlyScores)||[]).map(A=>{const N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Y=String(A.date).match(/(\d{1,2})월/),ft=String(A.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Y?N[parseInt(Y[1])-1]:ft?ft[1].charAt(0).toUpperCase()+ft[1].slice(1).toLowerCase():A.date}),q=(d==null?void 0:d.monthlyVis)||[],it=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",lt=[gt,t.showProducts!==!1?Uo(kt,t,V,r,D.length?D:["Feb","Mar"],j,q,{},it):"",`<div id="monthly-trend-container">${gi(kt,q,V,r,j,it)}</div>`,t.showCnty!==!1?Wo(l,t,V,r,j,it):""].join(""),yt=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${Yt}`,pt=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${yt};background:#fff;color:#0F172A">${r==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${yt};background:transparent;color:#94A3B8">${r==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Ko(u==null?void 0:u.weeklyPR,u==null?void 0:u.weeklyPRLabels,r,t,u)}</div>
    <div id="pr-period-monthly" style="display:none">${Ko(u==null?void 0:u.monthlyPR,u==null?void 0:u.monthlyPRLabels,r,t,u,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${oi({FONT:Yt,RED:oe,COMP:ce})}</style>
</head>
<body>
${b?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${_.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${vt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${lt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${pt}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${qo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${m?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    <button class="tab-btn" onclick="switchTab('glossary')">Glossary</button>
    <button class="tab-btn" onclick="switchTab('rawdata')">${r==="en"?"Raw Data":"Raw 데이터"}</button>
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
    ${_}
    <div id="bu-weekly-content" class="dash-container">${vt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${lt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${pt}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${qo(u==null?void 0:u.weeklyBrandPrompt,u==null?void 0:u.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${m?`<div id="tab-readability" class="tab-panel">
  <!--READABILITY_EMBED-->
  <iframe id="readability-iframe" data-src="/p/GEO-KPI-Dashboard-${r==="en"?"EN":"KO"}-readability" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Readability"></iframe>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${G}
</div>
<div id="tab-glossary" class="tab-panel">
  ${yi(r)}
</div>
<div id="tab-rawdata" class="tab-panel">
  ${v()}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${V.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${di({lang:r,weeklyAll:x,products:o,productsCnty:l,ulMap:j,monthlyVis:d==null?void 0:d.monthlyVis,total:e,meta:t,wLabels:F})}
<\/script>
</body>
</html>`}function xi(t){const e=t.filter(y=>y.status==="lead"),o=t.filter(y=>y.status==="behind"),a=t.filter(y=>y.status==="critical"),i=[...t].sort((y,x)=>x.score-y.score)[0],r=[...t].sort((y,x)=>y.score-x.score)[0],l=(t.reduce((y,x)=>y+x.score,0)/t.length).toFixed(1),c=[];return c.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${l}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${a.length}개로 분류됩니다.`),i&&c.push(`가장 높은 카테고리는 ${i.kr} ${i.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(i.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),a.length?c.push(`취약 카테고리(${a.map(y=>y.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&c.push(`추격 카테고리(${o.map(y=>y.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),c.join(" ")}function vi(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function wi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const fo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xe={year:2026,month:7,vol:5};function He(t){const e=String(t||"").trim();if(!e)return null;let o=null,a=null;const i=e.match(/(\d{4})/);if(i)o=parseInt(i[1]);else{const l=e.match(/(\d{2})년/);l&&(o=2e3+parseInt(l[1]))}const r=e.match(/(\d{1,2})\s*월/);if(r)a=parseInt(r[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)a=fo.findIndex(c=>c.toLowerCase()===l[1].toLowerCase())+1;else{const c=e.match(/\d{4}[-/](\d{1,2})/);c&&(a=parseInt(c[1]))}}return!o||!a||a<1||a>12?null:{year:o,month:a}}function xn({year:t,month:e}){return`${fo[e-1]} ${t}`}function Ci({year:t,month:e}){return e===1?{year:t-1,month:12}:{year:t,month:e-1}}function ki(t){const e=He(t);return e?xn(Ci(e)):null}function ao(t){const e=He(t);if(!e)return null;const o=(e.year-Xe.year)*12+(e.month-Xe.month),a=Xe.vol+o;return a<1?null:`Vol.${String(a).padStart(2,"0")}`}function vn(t,e="en"){const o=He(t);return o?e==="ko"?`${o.year}년 ${o.month}월 기준`:`As of ${fo[o.month-1]} ${o.year}`:null}function Si(t){const e={},o=ao(t);o&&(e.reportNo=o);const a=vn(t,"en");return a&&(e.dateLine=a),e}function Fi(t){const e=ki(t);return e?{period:e,...Si(e)}:null}function Ti(t){const e=He(t);if(!e)return null;const o=e.month===12?{year:e.year+1,month:1}:{year:e.year,month:e.month+1};return xn(o)}const $e=["title","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","team","monthlyReportBody","highlightInsight","bumpInsight","hlChapterTitle","hlChapterTitle2","hlWeeklyTitle","hlModelTitle","hlBumpTitle","semiHighlightText"],Ei=["v2ExIntro2","v2Ex1T2","v2Ex1B2","v2Ex2T2","v2Ex2B2","v2Ex3T2","v2Ex3B2","v2T11Caption","v2CaseCaption","v2C1Title","v2C1Keep","v2C1Bko","v2C1Tko","v2C2Title4","v2C2Keep2","v2C2Bko4","v2C2Tko4","v2VisTblHtml8","todoV2Title","todoV2NoticeLabel","todoV2NoticeHtml","todoV2PerfTitle","todoV2ChBu","todoV2NewBu","todoV2FixBu","todoV2TechBu","todoV2NextSecTitle","todoV2NextTitle","todoV2NextHtml3"];$e.push(...Ei);const Ai=["rd_h1","rd_intro","rd_introNotes","rd_summary","rd_areaIntro","rd_h2","rd_d1Title","rd_d1","rd_d1Notes","rd_d2Title","rd_d2","rd_d3Title","rd_d3","rd_d4Title","rd_d4"];$e.push(...Ai);const Li=["v3Ex1T","v3Ex1B","v3Ex2T","v3Ex2B","v3ExIntro","v3Ex1T2","v3Ex1B2","v3Ex2T2","v3Ex2B2","v3Ex3T2","v3Ex3B2"];$e.push(...Li);function wn(t,e){return t.startsWith("rd_")&&(typeof e=="string"||e==null)}function $i(t,e){return $e.includes(t)||wn(t,e)}function Ze(t,e){const o={...t};return $e.forEach(a=>{o[a]=e==null?void 0:e[a]}),new Set([...Object.keys(t||{}),...Object.keys(e||{})]).forEach(a=>{wn(a,t==null?void 0:t[a])&&(o[a]=e==null?void 0:e[a])}),o}function Qe({label:t,value:e,options:o,onSelect:a,accent:i=It}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[n.jsx("span",{style:{width:66,flexShrink:0,fontSize:11,color:"#64748B",fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:o.map(r=>{const l=e===r.value;return n.jsx("button",{onClick:()=>a(r.value),title:r.hint||"",style:{padding:"3px 9px",borderRadius:4,border:"none",cursor:"pointer",background:l?r.accent||i:"#1E293B",color:l?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:E},children:r.label},r.value)})})]})}function Bi({label:t,items:e,meta:o,setMeta:a}){return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:e.map(({key:i,label:r})=>n.jsx("button",{onClick:()=>a(l=>({...l,[i]:!l[i]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:o[i]?It:"#1E293B",color:o[i]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:r},i))})]})}const Jo=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-06",label:"6월 하이라이트 인사이트",keys:["showInsightV2"]},{value:"2026-07",label:"7월 하이라이트",keys:["showHighlight","showReadability"]}],Yo=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-08",label:"8월 Executive Summary",keys:["showInsightV3","showTotal","showTotalInsight"]}],Ii=["showInsightV3","showTotal","showTotalInsight"];function Xo(t,e){const o=t.find(a=>a.keys.length&&a.keys.every(i=>e[i]));return o?o.value:""}function Zo({label:t,value:e,variants:o,allKeys:a,setMeta:i}){const r=a||[...new Set(o.flatMap(l=>l.keys))];return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("select",{value:e,onChange:l=>{const c=o.find(y=>y.value===l.target.value);i(y=>{const x={...y};return r.forEach(h=>{x[h]=!1}),((c==null?void 0:c.keys)||[]).forEach(h=>{x[h]=!0}),x})},style:{width:"100%",padding:"6px 8px",borderRadius:6,cursor:"pointer",background:"#1E293B",color:"#E2E8F0",border:"1px solid #334155",fontSize:11,fontWeight:700,fontFamily:E},children:o.map(l=>n.jsx("option",{value:l.value,children:l.label},l.value))})]})}const Ri=[{label:"비저빌리티",items:[{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"}]},{label:"사이테이션",items:[{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showTouchPointsBumpChatGpt",label:"외부채널 모델별(3개)"},{key:"showDomainBumpModels",label:"도메인 모델별(3개)"},{key:"showLlmShare",label:"모델별 인용비중"}]},{label:"닷컴",items:[{key:"showDotcom",label:"닷컴"},{key:"showDotcomChatGpt",label:"닷컴 Chat-GPT"}]},{label:"Action Plan",items:[{key:"showTodo",label:"Action Plan"},{key:"showTodoV2",label:"액션 아이템 V2"}]}];function Qo({children:t}){return n.jsx("p",{style:{margin:"14px 0 8px 2px",fontSize:10,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:t})}function ji(t,e){const o=/<body[^>]*>([\s\S]*)<\/body>/i,a=(e.match(o)||[])[1];if(!a)return console.warn("[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송"),t;const i=`
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`;return/<\/body>/i.test(t)?t.replace(/<\/body>/i,`${i}${a}</body>`):(console.warn("[mergeBilingualEmail] KO </body> 미발견 — 단순 연결"),t+i+a)}function Pi({mode:t,meta:e,setMeta:o,metaKo:a,setMetaKo:i,metaEn:r,setMetaEn:l,total:c,setTotal:y,products:x,setProducts:h,citations:p,setCitations:d,dotcom:u,setDotcom:k,productsCnty:b,setProductsCnty:m,citationsCnty:w,setCitationsCnty:v,resolved:j,previewLang:M,setPreviewLang:G,snapshots:V,setSnapshots:F,setWeeklyLabels:z,setWeeklyAll:W,weeklyLabels:B,weeklyAll:J,citationsByCnty:L,dotcomByCnty:I,generateHTML:R,publishEndpoint:H,setMonthlyVis:K,onSyncExtra:ot,categoryStats:et,extra:f,monthlyVis:Z,progressMonth:U,setProgressMonth:ht,progressDataMonth:S,editMode:C=!1,setEditMode:T,hidePublish:_=!1}){const O=at.useRef({products:x,productsCnty:b,citations:p,citationsCnty:w,total:c,dotcom:u,extra:f});O.current={products:x,productsCnty:b,citations:p,citationsCnty:w,total:c,dotcom:u,extra:f};function $(){return O.current}const[gt,Tt]=at.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[ut,Ct]=at.useState(!1),[vt,kt]=at.useState(null),[D,q]=at.useState(""),[it,lt]=at.useState(""),[yt,pt]=at.useState(!1),[st,wt]=at.useState(""),[Lt,A]=at.useState(!1),[N,Y]=at.useState(!1),[ft,Ft]=at.useState(!1),[bt,Zt]=at.useState(!1),[Gt,Ot]=at.useState(""),[Ut,re]=at.useState(!1),[pe,fe]=at.useState(!0),[Vt,Ht]=at.useState(""),[Kt,ve]=at.useState(null),[ne,We]=at.useState([]),Nt=t==="newsletter",[me,Cn]=at.useState(()=>{const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`});function Ve(){Nt&&fetch("/api/publish").then(s=>s.ok?s.json():null).then(s=>{s&&Array.isArray(s.months)&&We(s.months)}).catch(()=>{})}at.useEffect(()=>{if(Nt){Ve();return}fetch(H||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(g=>g.ok?g.json():null).then(ve).catch(()=>{})},[t,H,Nt]);const kn=(()=>{const s=new Set,g=new Date;for(let X=0;X<24;X++){const Et=new Date(g.getFullYear(),g.getMonth()-X,1);s.add(`${Et.getFullYear()}-${String(Et.getMonth()+1).padStart(2,"0")}`)}for(const X of ne)s.add(X.month);return me&&s.add(me),[...s].sort((X,Et)=>Et.localeCompare(X))})();function Be(s){const[g,X]=s.split("-");return`${g}년 ${parseInt(X,10)}월`}const[Sn,mo]=at.useState(null);at.useEffect(()=>{let s=!0;const g=()=>$o(t).then(Et=>{s&&mo(Et)});g();const X=setInterval(g,6e4);return()=>{s=!1,clearInterval(X)}},[t]);function Fn(){$o(t).then(mo)}async function Tn(){if(!bt){Zt(!0),Ot("");try{const s=$(),g=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),X=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"en");let Et,Jt,tt;if(t==="dashboard"){const nt=Z||[],dt=s.extra||f||{};Et=R(a,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,B,J,L,I,nt,dt),Jt=R(Ze(a,r),s.total,X.products,X.citations,s.dotcom,"en",X.productsCnty,X.citationsCnty,B,J,L,I,nt,dt),tt=`${a.period||""} ${a.title||"KPI Dashboard"}`.trim()}else Et=R(a,s.total,g.products,g.citations,u,"ko",g.productsCnty,g.citationsCnty,{weeklyLabels:B,weeklyAll:J,categoryStats:et,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),Jt=R(Ze(a,r),s.total,X.products,X.citations,u,"en",X.productsCnty,X.citationsCnty,{weeklyLabels:B,weeklyAll:J,categoryStats:et,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),tt=`${a.period||""} ${a.title||"Newsletter"}`.trim();const te=H||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),P={title:tt,htmlKo:Et,htmlEn:Jt};Nt&&(P.month=me);const _t=await(await fetch(te,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(P)})).json();if(!_t.ok)throw new Error(_t.error||"게시 실패");if(ve({..._t,published:!0}),Nt&&Ve(),t==="dashboard")try{const nt=await De(t)||{},dt=s.extra||f||{};Bo(t,{...nt,meta:a,total:s.total,weeklyPR:dt.weeklyPR||nt.weeklyPR,weeklyPRLabels:dt.weeklyPRLabels||nt.weeklyPRLabels,monthlyPR:dt.monthlyPR||nt.monthlyPR,monthlyPRLabels:dt.monthlyPRLabels||nt.monthlyPRLabels,weeklyBrandPrompt:dt.weeklyBrandPrompt||nt.weeklyBrandPrompt,weeklyBrandPromptLabels:dt.weeklyBrandPromptLabels||nt.weeklyBrandPromptLabels})}catch{}const zt=`${window.location.origin}${_t.urls.ko}`,Q=`${window.location.origin}${_t.urls.en}`;try{await navigator.clipboard.writeText(zt+`
`+Q)}catch{}Ot(`KO: ${zt}
EN: ${Q}`)}catch(s){Ot("ERROR:"+s.message)}finally{Zt(!1),setTimeout(()=>Ot(""),2e4)}}}async function En(){if(!Ut){re(!0),Ht("");try{const s=await kr(bi,ye,{includeProgressTracker:pe});Ht(`통합 게시 완료!
KO: ${window.location.origin}${s.urls.ko}
EN: ${window.location.origin}${s.urls.en}`)}catch(s){Ht("ERROR: "+s.message)}finally{re(!1),setTimeout(()=>Ht(""),15e3)}}}async function go(s){try{const g=H||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),X=Nt?`${g}?month=${encodeURIComponent(s||me)}`:g;(await(await fetch(X,{method:"DELETE"})).json()).ok&&(Nt?Ve():ve(null))}catch{}}async function An(){if(M!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}Y(!0)}async function yo(s){Y(!1),Ft(!0);const g=(s==null?void 0:s.products)??x,X=(s==null?void 0:s.productsCnty)??b,Et=(s==null?void 0:s.citations)??p,Jt=(s==null?void 0:s.citationsCnty)??w;try{const tt=a,te=[tt.title||"",tt.dateLine||"",tt.noticeText||"",tt.totalInsight||"",tt.reportType||"",tt.productInsight||"",tt.productHowToRead||"",tt.citationInsight||"",tt.citationHowToRead||"",tt.dotcomInsight||"",tt.dotcomHowToRead||"",tt.todoText||"",tt.todoNotice||"",tt.kpiLogicText||"",tt.cntyInsight||"",tt.cntyHowToRead||"",tt.citDomainInsight||"",tt.citDomainHowToRead||"",tt.citCntyInsight||"",tt.citCntyHowToRead||"",tt.citPrdInsight||"",tt.citPrdHowToRead||"",tt.period||"",tt.team||"",tt.reportNo||"",tt.monthlyReportBody||""],P=g.map(rt=>rt.kr||""),Qt=g.map(rt=>rt.compName||""),_t=Et.map(rt=>rt.category||""),zt=[...new Set(X.map(rt=>rt.country||""))],Q=[...new Set(X.map(rt=>rt.product||""))],nt=[...new Set(X.map(rt=>rt.compName||""))],dt=[...new Set(Jt.map(rt=>rt.cnty||"").filter(rt=>rt&&rt!=="TTL"))],$t=new Set(["title","dateLine","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","period","team","reportNo","monthlyReportBody"]),Bt=Object.keys(tt).filter(rt=>!$t.has(rt)&&typeof tt[rt]=="string"&&tt[rt].trim()!==""&&$i(rt,tt[rt])),Rt=Bt.map(rt=>String(tt[rt])),ie=[...te,...P,...Qt,..._t,...zt,...Q,...nt,...dt,...Rt].map(rt=>rt||" "),St=await Fr(ie,{from:"ko",to:"en"});let mt=0;const ue={...a,title:St[mt++]||tt.title,dateLine:St[mt++]||tt.dateLine,noticeText:St[mt++]||tt.noticeText,totalInsight:St[mt++]||tt.totalInsight,reportType:St[mt++]||tt.reportType,productInsight:St[mt++]||tt.productInsight,productHowToRead:St[mt++]||tt.productHowToRead,citationInsight:St[mt++]||tt.citationInsight,citationHowToRead:St[mt++]||tt.citationHowToRead,dotcomInsight:St[mt++]||tt.dotcomInsight,dotcomHowToRead:St[mt++]||tt.dotcomHowToRead,todoText:St[mt++]||tt.todoText,todoNotice:St[mt++]||tt.todoNotice,kpiLogicText:St[mt++]||tt.kpiLogicText,cntyInsight:St[mt++]||tt.cntyInsight,cntyHowToRead:St[mt++]||tt.cntyHowToRead,citDomainInsight:St[mt++]||tt.citDomainInsight,citDomainHowToRead:St[mt++]||tt.citDomainHowToRead,citCntyInsight:St[mt++]||tt.citCntyInsight,citCntyHowToRead:St[mt++]||tt.citCntyHowToRead,citPrdInsight:St[mt++]||tt.citPrdInsight,citPrdHowToRead:St[mt++]||tt.citPrdHowToRead,period:(mt++,tt.period),team:St[mt++]||tt.team,reportNo:(mt++,tt.reportNo),monthlyReportBody:St[mt++]||tt.monthlyReportBody},qt=rt=>rt&&rt.replace(/\b\w/g,xt=>xt.toUpperCase()),ge=rt=>(rt||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),we={};g.forEach((rt,xt)=>{we[rt.id]={en:qt(St[mt+xt]||rt.kr),compNameEn:ge(St[mt+P.length+xt]||rt.compName)}}),mt+=P.length+Qt.length;const Ce={};Et.forEach((rt,xt)=>{Ce[`${rt.rank}_${rt.source}`]=qt(St[mt+xt]||rt.category)}),mt+=_t.length;const ke={};zt.forEach((rt,xt)=>{ke[rt]=/^[A-Z]{2,3}$/.test(rt)?rt:St[mt+xt]||rt}),mt+=zt.length;const bo={};Q.forEach((rt,xt)=>{bo[rt]=St[mt+xt]||rt}),mt+=Q.length;const xo={};nt.forEach((rt,xt)=>{xo[rt]=St[mt+xt]||rt}),mt+=nt.length;const vo={};dt.forEach((rt,xt)=>{vo[rt]=/^[A-Z]{2,3}$/.test(rt)?rt:St[mt+xt]||rt}),mt+=dt.length,Bt.forEach((rt,xt)=>{ue[rt]=St[mt+xt]||tt[rt]}),l(ue),h(rt=>rt.map(xt=>{var wo,Co;return{...xt,en:((wo=we[xt.id])==null?void 0:wo.en)||xt.en||xt.kr,compNameEn:((Co=we[xt.id])==null?void 0:Co.compNameEn)||xt.compNameEn||xt.compName}})),d(rt=>rt.map(xt=>({...xt,categoryEn:Ce[`${xt.rank}_${xt.source}`]||xt.categoryEn||xt.category}))),m(rt=>rt.map(xt=>({...xt,countryEn:qt(ke[xt.country]||xt.country),productEn:qt(bo[xt.product]||xt.product),compNameEn:ge(xo[xt.compName]||xt.compName)}))),v(rt=>rt.map(xt=>({...xt,cntyEn:xt.cnty==="TTL"?"TTL":qt(vo[xt.cnty]||xt.cnty)}))),Ft(!1)}catch(tt){alert("번역 오류: "+tt.message),Ft(!1)}}async function Ln(){const s=R(e,c,j.products,j.citations,u,M,j.productsCnty,j.citationsCnty);try{await navigator.clipboard.writeText(s)}catch{const g=document.createElement("textarea");g.value=s,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)}pt(!0),setTimeout(()=>pt(!1),2500)}async function $n(){await Pr(e,c,x,p,u)}async function Bn(){if(Lt!=="sending"){A("sending");try{const s=$(),g=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),X=ye(s.products,s.productsCnty,s.citations,s.citationsCnty,"en"),Et={weeklyLabels:B,weeklyAll:J,categoryStats:et,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null},Jt=Ze(a,r),tt=R(a,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,Et),te=R(Jt,s.total,X.products,X.citations,s.dotcom,"en",X.productsCnty,X.citationsCnty,Et),P=ji(tt,te),Qt=`[LG GEO] ${a.title} · ${a.period} (KO/EN)`,zt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:st.trim(),subject:Qt,html:P})})).json();if(!zt.ok)throw new Error(zt.error||"발송 실패");A("ok"),setTimeout(()=>A(!1),4e3)}catch(s){A("error"),q(s.message),setTimeout(()=>{A(!1),q("")},5e3)}}}async function In(){var X,Et,Jt,tt,te;if(ut)return;const s=Xr(gt.trim());if(!s){kt("error"),q("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>kt(null),3e3);return}Ct(!0),kt(null),q(""),lt("");const g=[];try{const P=await Qr(s,Q=>q(Q));if(g.push(`[Sync] parsed keys: ${Object.keys(P).join(", ")||"(없음)"}`),P.meta&&g.push(`[Sync] meta keys: ${Object.keys(P.meta).join(", ")}`),P.productsPartial&&g.push(`[Sync] products: ${P.productsPartial.length}건`),g.push(`[Sync] citations: ${((X=P.citations)==null?void 0:X.length)??0}건`),g.push(`[Sync] citationsCnty: ${((Et=P.citationsCnty)==null?void 0:Et.length)??0}건`),g.push(`[Sync] dotcom: ${P.dotcom?"OK":"(없음)"}`),g.push(`[Sync] productsCnty: ${((Jt=P.productsCnty)==null?void 0:Jt.length)??0}건`),P.meta){const Q=mr;i(nt=>{const dt={...nt};for(const[$t,Bt]of Object.entries(P.meta))Q.includes($t)&&nt[$t]||(dt[$t]=Bt);return dt}),l(nt=>({...nt,period:P.meta.period,dateLine:P.meta.dateLine,reportNo:P.meta.reportNo}))}if(P.citations&&(d(P.citations),O.current={...O.current,citations:P.citations}),P.dotcom&&(k(Q=>({...Q,...P.dotcom})),O.current={...O.current,dotcom:{...O.current.dotcom,...P.dotcom}}),P.productsCnty&&(m(P.productsCnty),O.current={...O.current,productsCnty:P.productsCnty}),P.citationsCnty&&(v(P.citationsCnty),O.current={...O.current,citationsCnty:P.citationsCnty}),P.monthlyVis&&K&&K(P.monthlyVis),ot){const Q={weeklyPR:P.weeklyPR||null,weeklyPRLabels:P.weeklyPRLabels||null,monthlyPR:P.monthlyPR||null,monthlyPRLabels:P.monthlyPRLabels||null,weeklyBrandPrompt:P.weeklyBrandPrompt||null,weeklyBrandPromptLabels:P.weeklyBrandPromptLabels||null,unlaunchedMap:P.unlaunchedMap||null,weeklyLabelsFull:P.weeklyLabelsFull||null,prTopicList:P.prTopicList||null,citTouchPointsTrend:P.citTouchPointsTrend||null,citTrendMonths:P.citTrendMonths||null,citDomainTrend:P.citDomainTrend||null,citDomainMonths:P.citDomainMonths||null,citTouchPointsByLlm:P.citTouchPointsByLlm||null,citDomainByLlm:P.citDomainByLlm||null,citDomainByLlmTrend:P.citDomainByLlmTrend||null,dotcomByLlm:P.dotcomByLlm||null};ot(Q),O.current={...O.current,extra:{...O.current.extra,...Q}}}const Qt=P.weeklyLabels||((tt=P.meta)==null?void 0:tt.weeklyLabels);console.log("[SYNC] weeklyLabels:",Qt,"weeklyLabelsFull:",P.weeklyLabelsFull),Qt&&Qt.length&&z(Qt),P.weeklyAll&&W(Q=>({...Q,...P.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(P));const _t=P.weeklyMap?Object.keys(P.weeklyMap):[],zt=((te=P.productsPartial)==null?void 0:te.map(Q=>Q.id))||[];if(console.log("[SYNC] weeklyMap keys:",_t.length?_t:"NONE"),console.log("[SYNC] productsPartial IDs:",zt.length?zt:"NONE"),_t.length&&zt.length){const Q=zt.filter(dt=>!_t.includes(dt)),nt=_t.filter(dt=>!zt.includes(dt));Q.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",Q),nt.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",nt),!Q.length&&!nt.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(P.productsPartial){const Q=P.productsPartial.map(nt=>{var Ce;const dt=((Ce=P.weeklyMap)==null?void 0:Ce[nt.id])||[],$t=dt.filter(ke=>ke!=null&&ke>0),Bt=nt.score,Rt=nt.prev||0,ie=nt.vsComp>0?Math.round(Bt/nt.vsComp*100):100,St=$t.length>0?$t[$t.length-1]:Bt,mt=$t.length>=2?$t[$t.length-2]:0,ue=Bt,qt=Rt,ge=ie,we=Rt>0&&Rt!==Bt?[Rt,Bt]:[];return{...nt,score:ue,prev:qt,weekly:dt,monthly:we,weeklyScore:St,weeklyPrev:mt,monthlyScore:Bt,monthlyPrev:Rt,compRatio:ge,status:ge>=100?"lead":ge>=80?"behind":"critical"}});h(Q),O.current={...O.current,products:Q}}else P.weeklyMap&&h(Q=>Q.map(nt=>{var $t;const dt=($t=P.weeklyMap)==null?void 0:$t[nt.id];return dt?{...nt,weekly:dt}:nt}));if(P.total){const Q={...O.current.total,...P.total,...P.buTotals?{buTotals:P.buTotals}:{},...P.buTotalsPrev?{buTotalsPrev:P.buTotalsPrev}:{},...P.countryTotals?{countryTotals:P.countryTotals}:{},...P.countryTotalsPrev?{countryTotalsPrev:P.countryTotalsPrev}:{}};y(nt=>({...nt,...Q})),O.current={...O.current,total:Q}}{let Q=function(Rt){if(!Rt)return 0;const ie=String(Rt).trim(),St=ie.match(/(\d{1,2})월/);if(St){const qt=parseInt(St[1]);return qt>=1&&qt<=12?qt:0}const mt=ie.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(mt)return $t[mt[1].toLowerCase()]||0;const ue=ie.match(/\d{4}[-\/](\d{1,2})/);if(ue){const qt=parseInt(ue[1]);return qt>=1&&qt<=12?qt:0}return 0};const nt=new Date().getFullYear(),dt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$t={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let Bt=0;if(P.derivedPeriod){const Rt=Q(P.derivedPeriod);Rt>Bt&&(Bt=Rt)}if(P.citDerivedPeriod){const Rt=Q(P.citDerivedPeriod);Rt>Bt&&(Bt=Rt)}Bt>0&&Bt<=12&&(i(Rt=>({...Rt,period:`${nt}년 ${Bt}월`})),l(Rt=>({...Rt,period:`${dt[Bt]} ${nt}`})))}if(!P.total&&P.productsPartial&&P.productsPartial.length>0){const Q=P.productsPartial,nt=+(Q.reduce(($t,Bt)=>$t+Bt.score,0)/Q.length).toFixed(1),dt=+(Q.reduce(($t,Bt)=>$t+(Bt.vsComp||0),0)/Q.length).toFixed(1);y($t=>({...$t,score:nt,vsComp:dt,rank:nt>=dt?1:2}))}if(setTimeout(()=>{Bo(t,{meta:P.meta||null,total:P.total?{...P.total,...P.buTotals?{buTotals:P.buTotals}:{},...P.buTotalsPrev?{buTotalsPrev:P.buTotalsPrev}:{},...P.countryTotals?{countryTotals:P.countryTotals}:{},...P.countryTotalsPrev?{countryTotalsPrev:P.countryTotalsPrev}:{}}:null,productsPartial:P.productsPartial||null,weeklyMap:P.weeklyMap||null,weeklyLabels:P.weeklyLabels||null,weeklyLabelsFull:P.weeklyLabelsFull||null,weeklyAll:P.weeklyAll||null,citations:P.citations||null,dotcom:P.dotcom||null,productsCnty:P.productsCnty||null,citationsCnty:P.citationsCnty||null,citationsByCnty:P.citationsByCnty||null,dotcomByCnty:P.dotcomByCnty||null,unlaunchedMap:P.unlaunchedMap||null,prTopicList:P.prTopicList||null,monthlyVis:P.monthlyVis||null,weeklyPR:P.weeklyPR||null,weeklyPRLabels:P.weeklyPRLabels||null,monthlyPR:P.monthlyPR||null,monthlyPRLabels:P.monthlyPRLabels||null,weeklyBrandPrompt:P.weeklyBrandPrompt||null,weeklyBrandPromptLabels:P.weeklyBrandPromptLabels||null,monthlyBrandPrompt:P.monthlyBrandPrompt||null,monthlyBrandPromptLabels:P.monthlyBrandPromptLabels||null,dotcomTrend:P.dotcomTrend||null,dotcomTrendMonths:P.dotcomTrendMonths||null,dotcomByLlm:P.dotcomByLlm||null}),setTimeout(Fn,250)},100),lt(g.join(`
`)),kt("ok"),q(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const Q={};P.productsPartial&&(Q.products=P.productsPartial.map(nt=>{var St;const dt=((St=P.weeklyMap)==null?void 0:St[nt.id])||[],$t=nt.vsComp>0?nt.score/nt.vsComp*100:100,Bt=dt.find(mt=>mt!=null&&mt>0),Rt=nt.prev!=null&&nt.prev>0?nt.prev:Bt||0,ie=Rt>0?[Rt,nt.score]:[];return{...nt,prev:Rt,weekly:dt,monthly:ie,compRatio:Math.round($t),status:$t>=100?"lead":$t>=80?"behind":"critical"}})),P.productsCnty&&(Q.productsCnty=P.productsCnty),P.citations&&(Q.citations=P.citations),P.citationsCnty&&(Q.citationsCnty=P.citationsCnty);try{await yo(Q)}catch{}q("동기화 + 번역 완료!")}}catch(P){g.push(`[ERROR] ${P.message}`),kt("error"),q(P.message),lt(g.join(`
`))}finally{Ct(!1),setTimeout(()=>{kt(null),q("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:It,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:E},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:E},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(ei,{...Sn||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:E},children:"Google Sheets URL"}),n.jsx("input",{value:gt,onChange:s=>Tt(s.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...At,fontSize:11,padding:"7px 9px",marginBottom:8,color:gt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:In,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:ut?"wait":"pointer",background:ut?"#1E293B":It,fontSize:12,fontWeight:700,color:ut?"#94A3B8":"#FFFFFF",fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(ko,{size:13,style:{animation:ut?"spin 1s linear infinite":"none"}}),ut?"동기화 중...":"구글 시트 동기화"]}),(vt||ut&&D)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.6,background:vt==="ok"?"#14532D":vt==="error"?"#450A0A":"#1E293B",color:vt==="ok"?"#86EFAC":vt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${vt==="ok"?"#22C55E33":vt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:D}),it&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[it,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(it).then(()=>{const s=document.getElementById("vis-debug-copy-btn");s&&(s.textContent="복사됨!",setTimeout(()=>{s.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"로그 복사"})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:An,disabled:ft,style:{width:"100%",padding:"9px 0",background:ft?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:E,cursor:ft?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:ft?.6:1},children:[n.jsx(Rn,{size:13})," ",ft?"번역 중...":"AI 번역 (EN)"]}),N&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:E},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>Y(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:E,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:yo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:$n,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(jn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Nt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"발행 월"}),n.jsx("select",{value:me,onChange:s=>Cn(s.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:kn.map(s=>n.jsxs("option",{value:s,children:[s," · ",Be(s),ne.find(g=>g.month===s)?" ✓ 게시됨":""]},s))})]}),Nt&&ht&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",S||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:U||"",onChange:s=>ht(s.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",S||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(s=>n.jsx("option",{value:s,children:s},s))]}),U&&n.jsx("button",{onClick:()=>ht(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),_?n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.7,background:"#1E293B",color:"#94A3B8",marginBottom:8},children:["게시는 ",n.jsx("b",{style:{color:"#CBD5E1"},children:"통합 대시보드 어드민"}),'의 "전체 게시" 버튼으로 일원화되었습니다. 매일 00시(KST)에 자동 새로고침·게시됩니다.']}):n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:Tn,disabled:bt,style:{width:"100%",padding:"9px 0",background:bt?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:bt?"#94A3B8":"#FFFFFF",fontFamily:E,cursor:bt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(So,{size:12}),bt?"게시 중...":Nt?`${Be(me)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:E,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:pe,onChange:s=>fe(s.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:En,disabled:Ut,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Ut?"#1E293B":"#166534",color:Ut?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,cursor:Ut?"wait":"pointer",marginBottom:6},children:[n.jsx(So,{size:12}),Ut?"통합 게시 중...":"통합 대시보드 게시"]}),Vt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:Vt.startsWith("ERROR")?"#450A0A":"#14532D",color:Vt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Vt.startsWith("ERROR:")?Vt.slice(6):Vt})]})]})]}),n.jsxs("button",{onClick:async()=>{const s={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(s).some(X=>X.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Et=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:s})})).json();Et.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Et.error||""))}catch(X){alert("아카이빙 실패: "+X.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(Pn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Gt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:Gt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Gt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Gt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Gt.startsWith("ERROR:")?Gt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(Ke,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Gt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Nt&&(Kt==null?void 0:Kt.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>go(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Kt.urls.ko},{label:"EN",url:Kt.urls.en}].map(({label:s,url:g})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s,": ",g]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${g}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ke,{size:10})})]},s)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:Kt.ts?new Date(Kt.ts).toLocaleString("ko-KR"):""})]}),Nt&&ne.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",ne.length,")"]})}),ne.map(s=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E},children:Be(s.month)}),n.jsx("button",{onClick:()=>{confirm(`${Be(s.month)} 게시본을 삭제할까요?`)&&go(s.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:s.urls.ko},{label:"EN",url:s.urls.en}].map(({label:g,url:X})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:X,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g,": ",X]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${X}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ke,{size:10})})]},g)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:s.ts?new Date(s.ts).toLocaleString("ko-KR"):""})]},s.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&!Nt&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:s=>o(g=>({...g,reportType:s.target.value})),style:{...At,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["보고서 번호 ",n.jsx("span",{style:{color:"#334155"},children:"(자동)"})]}),n.jsx("input",{value:e.reportNo,onChange:s=>o(g=>({...g,reportNo:s.target.value})),style:{...At}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["발행월 ",n.jsx("span",{style:{color:"#334155"},children:"(표기는 전월 데이터 기준 자동)"})]}),n.jsx("input",{value:e.pubMonth??(Ti(e.period)||e.period||""),onChange:s=>{const g=s.target.value,X=Fi(g);o(Et=>({...Et,pubMonth:g,...X||{}})),l&&l(Et=>({...Et,pubMonth:g,...X||{}}))},style:{...At}})]})]}),ao(e.period)&&n.jsxs("p",{style:{margin:"-4px 0 8px",fontSize:10.5,color:"#64748B",fontFamily:E,lineHeight:1.5},children:["자동 연동 — 표기월 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:e.period})," · ","보고서 번호 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:ao(e.period)})," · ","데이터 기준 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:vn(e.period,"ko")})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:s=>o(g=>({...g,title:s.target.value})),rows:4,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:s=>o(g=>({...g,team:s.target.value})),style:{...At,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:s=>o(g=>({...g,dateLine:s.target.value})),style:{...At,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Notice"}),n.jsx("button",{onClick:()=>o(s=>({...s,showNotice:!s.showNotice})),style:{background:e.showNotice?It:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&!Nt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:s=>o(g=>({...g,noticeText:s.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...At,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(s=>({...s,showKpiLogic:!s.showKpiLogic})),style:{background:e.showKpiLogic?It:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&!Nt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:s=>o(g=>({...g,kpiLogicText:s.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...At,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:s=>o(g=>({...g,titleFontSize:Number(s.target.value)})),style:{width:"100%",accentColor:It,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:s=>o(g=>({...g,titleColor:s.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:E},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([s,g])=>n.jsx("button",{onClick:()=>o(X=>({...X,titleColor:s})),title:g,style:{width:16,height:16,borderRadius:"50%",background:s,border:e.titleColor===s?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},s))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"섹션 표시"}),n.jsxs("div",{style:{marginBottom:16},children:[n.jsx(Zo,{label:"익스큐티브 서머리",variants:Yo,allKeys:Ii,value:Xo(Yo,e),setMeta:o}),n.jsx(Zo,{label:"하이라이트",variants:Jo,value:Xo(Jo,e),setMeta:o}),Ri.map(s=>n.jsx(Bi,{label:s.label,items:s.items,meta:e,setMeta:o},s.label))]}),(()=>{const s=Q=>String(Q||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),g=Q=>/brand/i.test(Q)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(Q)?"Brand":Q,X=Array.isArray(f==null?void 0:f.citTrendMonths)?f.citTrendMonths:[],Et=X.length?X[X.length-1]:null,Jt=Q=>{if(!Q)return 0;if(Et!=null&&Q[Et]!=null)return Number(Q[Et])||0;const nt=Object.values(Q).map(Number).filter(dt=>!isNaN(dt));return nt.length?nt[nt.length-1]:0},tt=[],te=new Set,P=(Q,nt,dt)=>{Q&&!te.has(Q)&&(te.add(Q),tt.push({value:Q,label:nt,score:dt}))};if(f!=null&&f.citTouchPointsTrend&&Object.entries(f.citTouchPointsTrend).forEach(([Q,nt])=>{const dt=g(Q);P(dt,dt,Jt(nt))}),f!=null&&f.citDomainTrend){const Q=Object.entries(f.citDomainTrend).filter(([dt])=>dt.startsWith("TTL|"));(Q.length?Q:Object.entries(f.citDomainTrend)).forEach(([,dt])=>P(dt.domain,s(dt.domain),Jt(dt.months)))}if(!tt.length)return null;tt.sort((Q,nt)=>nt.score-Q.score);const Qt=tt.slice(0,10),_t=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],zt=Q=>o(nt=>{const dt=Array.isArray(nt.bumpHighlight)?nt.bumpHighlight:[];return{...nt,bumpHighlight:dt.includes(Q)?dt.filter($t=>$t!==Q):[...dt,Q]}});return n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"범프차트 지적 요소 (색상 강조)"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:Qt.map(({value:Q,label:nt})=>{const dt=_t.includes(Q);return n.jsx("button",{onClick:()=>zt(Q),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:dt?It:"#1E293B",color:dt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:nt},Q)})})]})})(),e.showLlmShare!==!1&&n.jsxs(n.Fragment,{children:[n.jsx(Qo,{children:"Citation"}),n.jsx(Qe,{label:"인용비중",value:e.llmShareTopN===5?5:10,options:[{value:5,label:"Top 5"},{value:10,label:"Top 10"}],onSelect:s=>o(g=>({...g,llmShareTopN:s}))})]}),n.jsx(Qo,{children:"제품 카드"}),n.jsx(Qe,{label:"버전",value:e.productCardVersion||"v1",options:[{value:"v1",label:"V1 트렌드",hint:"점수 + MoM + 미니 트렌드"},{value:"v4",label:"V4 경합",hint:"V1 트렌드 + 경쟁비 0.05 이하는 검은색",accent:"#1A1A1A"}],onSelect:s=>o(g=>({...g,productCardVersion:s}))}),n.jsx(Qe,{label:"트렌드 기준",value:e.trendMode||"weekly",options:[{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],onSelect:s=>o(g=>({...g,trendMode:s})),accent:"#166534"}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{var s;try{o(X=>({...X,monthlyReportBody:"⏳ AI 생성 중..."}));const g=await Pt("monthlyReportBody",{products:$().products,productsCnty:$().productsCnty,total:$().total,citations:$().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},M);o(X=>({...X,monthlyReportBody:g}))}catch(g){console.error("[AI]",g),o(X=>({...X,monthlyReportBody:`[AI 실패: ${g.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:s=>o(g=>({...g,monthlyReportBody:s.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"증감 요인 분석 (Samsung 격차·MoM)"}),n.jsxs("button",{onClick:async()=>{var s;try{o(X=>({...X,monthlyDeltaAnalysis:"⏳ AI 분석 중..."}));const g=await Pt("monthlyDelta",{total:$().total,products:$().products,productsCnty:$().productsCnty,period:e.period||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},M);o(X=>({...X,monthlyDeltaAnalysis:g}))}catch(g){console.error("[AI]",g),o(X=>({...X,monthlyDeltaAnalysis:`[AI 실패: ${g.message}]`}))}},title:"경쟁사(Samsung) 대비 격차 증감 + 전월 대비 증감 요인 AI 분석",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 분석"]})]}),n.jsx("textarea",{value:e.monthlyDeltaAnalysis||"",onChange:s=>o(g=>({...g,monthlyDeltaAnalysis:s.target.value})),rows:16,placeholder:"Samsung 대비 격차 증감 + 전월 대비 증감 요인 분석. 'AI 분석' 버튼으로 자동 생성...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsx("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:"경쟁사(Samsung) 대비 격차 증감과 전월 대비 증감에 영향을 준 수치를 리스트업·정리합니다."})]}),Nt&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>T&&T(s=>!s),style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:"pointer",background:C?It:"#1E293B",color:C?"#FFFFFF":"#94A3B8",fontSize:12,fontWeight:700,fontFamily:E,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s"},children:[n.jsx(Mn,{size:13})," ",C?"편집 모드 켜짐 — 끄기":"편집 모드 켜기"]}),n.jsx("div",{style:{background:"#0F172A",border:"1px solid #1E293B",borderRadius:8,padding:"8px 10px",marginBottom:10},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,lineHeight:1.6},children:C?n.jsxs(n.Fragment,{children:["✏️ 미리보기에서 텍스트를 ",n.jsx("strong",{style:{color:"#E2E8F0"},children:"직접 클릭해 편집"})," (볼드·색·크기 적용된 상태 그대로).",n.jsx("br",{}),"바깥 클릭 = 저장 · Esc = 취소"]}):n.jsx(n.Fragment,{children:"편집 모드를 켜면 미리보기 텍스트를 직접 클릭해 편집할 수 있어요."})})}),[{label:"GEO 전략 인사이트",field:"totalInsight",type:"totalInsight",data:()=>{var s;return{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"Highlight 인사이트",field:"highlightInsight",toggle:"showHighlightInsight",type:"highlight",data:()=>({products:$().products,weeklyAll:J})},{label:"Citation 범프 인사이트",field:"bumpInsight",toggle:"showBumpInsight",type:"bump",data:()=>({citTouchPointsTrend:f==null?void 0:f.citTouchPointsTrend,citDomainTrend:f==null?void 0:f.citDomainTrend,citTrendMonths:f==null?void 0:f.citTrendMonths,citDomainMonths:f==null?void 0:f.citDomainMonths})},{label:"제품 인사이트",field:"productInsight",toggle:"showProductInsight",type:"product",data:()=>({products:$().products,total:$().total})},{label:"제품 How to Read",field:"productHowToRead",toggle:"showProductHowToRead",type:"howToRead",data:()=>({section:"제품별 GEO Visibility"})},{label:"국가별 인사이트",field:"cntyInsight",toggle:"showCntyInsight",type:"cnty",data:()=>{var s;return{productsCnty:$().productsCnty,unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"국가별 How to Read",field:"cntyHowToRead",toggle:"showCntyHowToRead",type:"howToRead",data:()=>({section:"국가별 GEO Visibility"})},{label:"Citation 인사이트",field:"citationInsight",toggle:"showCitationInsight",type:"citation",data:()=>({citations:$().citations})},{label:"Citation How to Read",field:"citationHowToRead",toggle:"showCitationHowToRead",type:"howToRead",data:()=>({section:"Citation 도메인별 현황"})},{label:"제품별 Citation 인사이트",field:"citPrdInsight",toggle:"showCitPrdInsight",type:"citPrd",data:()=>({citationsCnty:$().citationsCnty})},{label:"제품별 Citation How to Read",field:"citPrdHowToRead",toggle:"showCitPrdHowToRead",type:"howToRead",data:()=>({section:"제품별 Citation"})},{label:"닷컴 인사이트",field:"dotcomInsight",toggle:"showDotcomInsight",type:"dotcom",data:()=>({dotcom:$().dotcom})},{label:"닷컴 How to Read",field:"dotcomHowToRead",toggle:"showDotcomHowToRead",type:"howToRead",data:()=>({section:"닷컴 Citation"})},{label:"Action Plan 인사이트",field:"todoText",type:"todo",data:()=>({products:$().products})}].map(s=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 0"},children:[s.toggle?n.jsx("button",{onClick:()=>o(g=>({...g,[s.toggle]:!g[s.toggle]})),title:"표시 / 숨김",style:{background:e[s.toggle]?It:"#334155",border:"none",borderRadius:7,width:26,height:13,cursor:"pointer",position:"relative",padding:0,flexShrink:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e[s.toggle]?15:3,width:9,height:9,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})}):n.jsx("span",{style:{width:26,flexShrink:0}}),n.jsx("p",{style:{margin:0,flex:1,fontSize:11,color:"#94A3B8",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.label}),n.jsxs("button",{onClick:async()=>{try{o(X=>({...X,[s.field]:"⏳ AI 생성 중..."}));const g=await Pt(s.type,s.data(),M);o(X=>({...X,[s.field]:g}))}catch(g){console.error("[AI]",g),o(X=>({...X,[s.field]:`[AI 실패: ${g.message}]`}))}},title:`${s.label} AI 생성 (결과는 미리보기에 표시)`,style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:10,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[n.jsx(jt,{size:9})," AI"]})]},s.field)),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0 16px"}})]}),t!=="monthly-report"&&t!=="dashboard"&&!Nt&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{var s;try{o(X=>({...X,totalInsight:"⏳ AI 생성 중..."}));const g=await Pt("totalInsight",{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},M);o(X=>({...X,totalInsight:g}))}catch(g){console.error("[AI]",g),o(X=>({...X,totalInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:s=>o(g=>({...g,totalInsight:s.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productInsight:"⏳ AI 생성 중..."}));const s=await Pt("product",{products:$().products,total:$().total},M);o(g=>({...g,productInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,productInsight:`[AI 실패: ${s.message}]

`+xi($().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductInsight:!s.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?It:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:s=>o(g=>({...g,productInsight:s.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"제품별 GEO Visibility"},M);o(g=>({...g,productHowToRead:s}))}catch{o(s=>({...s,productHowToRead:vi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductHowToRead:!s.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?It:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:s=>o(g=>({...g,productHowToRead:s.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{var s;try{o(X=>({...X,cntyInsight:"⏳ AI 생성 중..."}));const g=await Pt("cnty",{productsCnty:$().productsCnty,unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},M);o(X=>({...X,cntyInsight:g}))}catch(g){console.error("[AI]",g),o(X=>({...X,cntyInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyInsight:!s.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?It:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:s=>o(g=>({...g,cntyInsight:s.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,cntyHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"국가별 GEO Visibility"},M);o(g=>({...g,cntyHowToRead:s}))}catch{o(s=>({...s,cntyHowToRead:wi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyHowToRead:!s.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?It:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:s=>o(g=>({...g,cntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:s=>o(g=>({...g,prNotice:s.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:s=>o(g=>({...g,prTopicDescsRaw:s.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:s=>o(g=>({...g,prTopicPromptsRaw:s.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:s=>o(g=>({...g,bpNotice:s.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationInsight:"⏳ AI 생성 중..."}));const s=await Pt("citation",{citations:$().citations},M);o(g=>({...g,citationInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citationInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationInsight:!s.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?It:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:s=>o(g=>({...g,citationInsight:s.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"Citation 도메인별 현황"},M);o(g=>({...g,citationHowToRead:s}))}catch{o(s=>({...s,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationHowToRead:!s.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?It:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:s=>o(g=>({...g,citationHowToRead:s.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainInsight:"⏳ AI 생성 중..."}));const s=await Pt("citDomain",{citationsCnty:$().citationsCnty},M);o(g=>({...g,citDomainInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citDomainInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainInsight:!s.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?It:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:s=>o(g=>({...g,citDomainInsight:s.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"도메인별 Citation 현황"},M);o(g=>({...g,citDomainHowToRead:s}))}catch{o(s=>({...s,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainHowToRead:!s.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?It:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:s=>o(g=>({...g,citDomainHowToRead:s.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyInsight:"⏳ AI 생성 중..."}));const s=await Pt("citCnty",{citationsCnty:$().citationsCnty},M);o(g=>({...g,citCntyInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citCntyInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyInsight:!s.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?It:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:s=>o(g=>({...g,citCntyInsight:s.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"국가별 Citation 도메인"},M);o(g=>({...g,citCntyHowToRead:s}))}catch{o(s=>({...s,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyHowToRead:!s.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?It:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:s=>o(g=>({...g,citCntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdInsight:"⏳ AI 생성 중..."}));const s=await Pt("citPrd",{citationsCnty:$().citationsCnty},M);o(g=>({...g,citPrdInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citPrdInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdInsight:!s.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?It:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:s=>o(g=>({...g,citPrdInsight:s.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"제품별 Citation"},M);o(g=>({...g,citPrdHowToRead:s}))}catch{o(s=>({...s,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdHowToRead:!s.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?It:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:s=>o(g=>({...g,citPrdHowToRead:s.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),b.length>0&&(()=>{const s=[...new Set(j.productsCnty.map(g=>g.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:s.map(g=>{const X=(e.cntyProductFilter||{})[g]!==!1;return n.jsx("button",{onClick:()=>o(Et=>({...Et,cntyProductFilter:{...Et.cntyProductFilter||{},[g]:!X}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:X?"#166534":"#1E293B",color:X?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:g},g)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomInsight:"⏳ AI 생성 중..."}));const s=await Pt("dotcom",{dotcom:$().dotcom},M);o(g=>({...g,dotcomInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,dotcomInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomInsight:!s.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?It:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:s=>o(g=>({...g,dotcomInsight:s.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomHowToRead:"⏳ AI 생성 중..."}));const s=await Pt("howToRead",{section:"닷컴 Citation"},M);o(g=>({...g,dotcomHowToRead:s}))}catch{o(g=>({...g,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomHowToRead:!s.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?It:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:s=>o(g=>({...g,dotcomHowToRead:s.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:s=>o(g=>({...g,todoNotice:s.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,todoText:"⏳ AI 생성 중..."}));const s=await Pt("todo",{products:$().products},M);o(g=>({...g,todoText:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,todoText:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(jt,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showTodo:!s.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?It:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:s=>o(g=>({...g,todoText:s.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:Ln,style:{width:"100%",padding:"9px 0",background:yt?"#14532D":"transparent",border:`1px solid ${yt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:yt?"#86EFAC":"#64748B",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:yt?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(en,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:st,onChange:s=>wt(s.target.value),placeholder:"recipient@example.com",style:{...At,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:Bn,disabled:Lt==="sending"||!st.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:Lt==="sending"||!st.trim()?"not-allowed":"pointer",background:Lt==="ok"?"#14532D":Lt==="error"?"#7F1D1D":Lt==="sending"?"#1E3A5F":st.trim()?"#1D4ED8":"#1E293B",color:Lt==="ok"?"#86EFAC":Lt==="error"?"#FCA5A5":st.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:Lt==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(ko,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):Lt==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 발송 완료!"]}):Lt==="error"?n.jsxs(n.Fragment,{children:[n.jsx(Fo,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(Fo,{size:12})," 메일 발송 (KO + EN)"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:E,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function Mi({value:t,onChange:e,products:o,productsCnty:a,monthlyVis:i,style:r}){const l=on.useMemo(()=>Vn(o,a,i),[o,a,i]);return!l.length||l.length===1&&l[0]==="Total"?null:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...r},children:[n.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),n.jsx("select",{value:t||"Total",onChange:c=>e(c.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:l.map(c=>n.jsx("option",{value:c,children:c},c))})]})}const he="weekly-report",tn="geo-weekly-report-cache";function Di({meta:t,total:e,products:o,citations:a,dotcom:i,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:y,weeklyAll:x,categoryStats:h,cntyKeys:p=null,llmModel:d,monthlyVis:u}){const k=at.useRef(null),b=at.useMemo(()=>so(t,e,o,a,i,c,r,l,{weeklyLabels:y,weeklyAll:x,categoryStats:h,cntyKeys:p,llmModel:d,monthlyVis:u}),[t,e,o,a,i,c,r,l,y,x,h,p,d,u]);return on.useEffect(()=>{const m=k.current;if(!m)return;const w=m.contentDocument||m.contentWindow.document;w.open(),w.write(b),w.close();const v=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const j=w.documentElement.scrollHeight;j&&(m.style.height=j+20+"px")}catch{}};setTimeout(v,150),setTimeout(v,400),setTimeout(v,1e3),setTimeout(v,2e3)},[b]),n.jsx("iframe",{ref:k,title:"weekly-report-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Oi({meta:t,total:e,products:o,citations:a,dotcom:i,productsCnty:r=[],citationsCnty:l=[],lang:c="ko",weeklyLabels:y,weeklyAll:x,categoryStats:h,cntyKeys:p=null,llmModel:d,monthlyVis:u}){const[k,b]=at.useState(!1),m=at.useMemo(()=>so(t,e,o,a,i,c,r,l,{weeklyLabels:y,weeklyAll:x,categoryStats:h,cntyKeys:p,llmModel:d,monthlyVis:u}),[t,e,o,a,i,c,r,l,y,x,h,p,d,u]);async function w(){try{await navigator.clipboard.writeText(m)}catch{const v=document.createElement("textarea");v.value=m,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v)}b(!0),setTimeout(()=>b(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsx("div",{children:n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E},children:"주간 리포트 HTML"})}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":It,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",gap:5},children:k?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(en,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:m})})]})}function Ni(){const t=at.useRef(gr(tn)).current,[e,o]=at.useState({...Ie,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[a,i]=at.useState({...Ie,...(t==null?void 0:t.metaEn)??{}}),[r,l]=at.useState((t==null?void 0:t.total)??cr),[c,y]=at.useState((t==null?void 0:t.products)??dr),[x,h]=at.useState((t==null?void 0:t.citations)??fr),[p,d]=at.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:pr),[u,k]=at.useState((t==null?void 0:t.productsCnty)??ur),[b,m]=at.useState((t==null?void 0:t.citationsCnty)??hr),[w,v]=at.useState((t==null?void 0:t.weeklyLabels)??null),[j,M]=at.useState((t==null?void 0:t.weeklyAll)??{}),[G,V]=at.useState(null),[F,z]=at.useState("preview"),[W,B]=at.useState("ko"),[J,L]=at.useState("Total"),[I,R]=at.useState((t==null?void 0:t.monthlyVis)??[]),[H,K]=at.useState([]),[ot,et]=at.useState(""),[f,Z]=at.useState(!1),[U,ht]=at.useState(""),[S,C]=at.useState(null),[T,_]=at.useState(!0),[O,$]=at.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),gt=at.useMemo(()=>{const A=new Set;return(u||[]).forEach(N=>{N&&N.country&&!/^(ttl|total)$/i.test(N.country)&&A.add(String(N.country).toUpperCase())}),Array.from(A).sort()},[u]),Tt=O.length>0?O:null,ut=at.useCallback(A=>{$(N=>N.includes(A)?N.filter(Y=>Y!==A):[...N,A])},[]),Ct=at.useCallback(()=>$(gt),[gt]),vt=at.useCallback(()=>$([]),[]);at.useEffect(()=>{let A=!1;const N=$r(e.period)||`${new Date().getMonth()+1}월`,Y=Br(N);async function ft(){var Ft,bt,Zt;try{const Gt=await fetch("/api/tracker-snapshot-v2"),Ot=Gt.ok?await Gt.json():null;if(Ot!=null&&Ot.ok&&((Zt=(bt=(Ft=Ot.data)==null?void 0:Ft.quantitativeGoals)==null?void 0:bt.rows)!=null&&Zt.length)){const Ut=Ro(Ot.data,Y);if(Ut!=null&&Ut.length&&!A){V(Ut);return}}}catch{}try{const[{parseKPISheet:Gt},Ot]=await Promise.all([eo(()=>import("./sheetParser-BGRKNm5Y.js"),[]),eo(()=>import("./xlsx-CaYOwpyI.js").then(We=>We.x),__vite__mapDeps([0,1]))]),Ut=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,re=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Ut}&headers=1`,pe=await fetch(re,{cache:"no-store"});if(!pe.ok)return;const fe=await pe.text(),Vt=Ot.read(fe,{type:"string"}),Ht=Vt.Sheets[Vt.SheetNames[0]],Kt=Ot.utils.sheet_to_json(Ht,{header:1,defval:""}),ve=Gt(Kt),ne=Ro(ve,Y);ne!=null&&ne.length&&!A&&V(ne)}catch{}}return ft(),()=>{A=!0}},[e.period]);const kt=W==="en"?a:e,D=W==="en"?i:o,q=at.useMemo(()=>ye(c,u,x,b,W),[c,u,x,b,W]);at.useEffect(()=>{br(he).then(K)},[]);const it=at.useRef(null);function lt(A,N=2e3){clearTimeout(it.current),ht(A),it.current=setTimeout(()=>ht(""),N)}at.useEffect(()=>()=>clearTimeout(it.current),[]);const yt=at.useRef(!1);at.useEffect(()=>{let A=!1;return De(he).then(N=>{A||!N||(yt.current=!0,N.meta&&o(Y=>({...Y,...N.meta})),N.total&&l(Y=>({...Y,...N.total})),N.citations&&h(N.citations),N.dotcom&&d(Y=>({...Y,...N.dotcom})),N.productsCnty&&k(N.productsCnty),N.citationsCnty&&m(N.citationsCnty),N.weeklyLabels&&v(N.weeklyLabels),N.weeklyAll&&M(Y=>({...Y,...N.weeklyAll})),N.monthlyVis&&R(N.monthlyVis),N.productsPartial?y(N.productsPartial.map(Y=>{var bt;const ft=((bt=N.weeklyMap)==null?void 0:bt[Y.id])||[],Ft=Y.vsComp>0?Y.score/Y.vsComp*100:100;return{...Y,weekly:ft,monthly:[],compRatio:Math.round(Ft),status:Ft>=100?"lead":Ft>=80?"behind":"critical"}})):N.weeklyMap&&y(Y=>Y.map(ft=>{var bt;const Ft=(bt=N.weeklyMap)==null?void 0:bt[ft.id];return Ft?{...ft,weekly:Ft}:ft})))}),()=>{A=!0}},[]),at.useEffect(()=>{yr(tn,{metaKo:e,metaEn:a,total:r,products:c,citations:x,dotcom:p,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:j,selectedCountries:O})},[e,a,r,c,x,p,u,b,w,j,O]);async function pt(){if(!S)return;const N=await wr(he,S,{metaKo:e,metaEn:a,total:r,products:c,citations:x,dotcom:p,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:j});N&&K(N),lt(N?"저장 완료!":"저장 실패")}async function st(){var Y;const A=ot.trim()||`${kt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,N=await vr(he,A,{metaKo:e,metaEn:a,total:r,products:c,citations:x,dotcom:p,productsCnty:u,citationsCnty:b,weeklyLabels:w,weeklyAll:j});N&&(K(N),et(""),C(((Y=N[0])==null?void 0:Y.ts)||null)),lt(N?"새로 저장 완료!":"저장 실패")}async function wt(A){const N=await xr(he,A.ts);if(!N||N.data==null){ht("불러오기 실패 — 저장본을 찾을 수 없습니다");return}const Y=N.data;o({...Ie,...Y.metaKo||Y.meta||{}}),i({...Ie,...Y.metaEn||{}}),Y.total&&l(Y.total),Y.products&&y(Y.products),Y.citations&&h(Y.citations),Y.dotcom&&d(Y.dotcom),Y.productsCnty&&k(Y.productsCnty),Y.citationsCnty&&m(Y.citationsCnty),Y.weeklyLabels&&v(Y.weeklyLabels),Y.weeklyAll&&M(Y.weeklyAll),C(A.ts),lt(`"${A.name}" 불러옴`)}async function Lt(A){const N=H[A];if(!N)return;const Y=await Cr(he,N.ts);Y&&K(Y),S===N.ts&&C(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:E},children:[T&&n.jsx(Pi,{mode:he,meta:kt,setMeta:D,metaKo:e,setMetaKo:o,metaEn:a,setMetaEn:i,total:r,setTotal:l,products:c,setProducts:y,citations:x,setCitations:h,dotcom:p,setDotcom:d,productsCnty:u,setProductsCnty:k,citationsCnty:b,setCitationsCnty:m,resolved:q,previewLang:W,setPreviewLang:B,snapshots:H,setSnapshots:K,setWeeklyLabels:v,setWeeklyAll:M,weeklyLabels:w,weeklyAll:j,generateHTML:so}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>_(A=>!A),title:T?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:T?n.jsx(Dn,{size:16}):n.jsx(On,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"주간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"주간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:A,tab:N,lang:Y,label:ft})=>{const Ft=N==="code"?F==="code":F==="preview"&&W===Y;return n.jsx("button",{onClick:()=>{z(N),Y&&B(Y)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Ft?"#1E293B":"transparent",color:Ft?"#FFFFFF":"#475569",fontSize:11,fontWeight:Ft?700:500,fontFamily:E,cursor:"pointer"},children:ft},A)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[U&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:E},children:U}),n.jsxs("button",{onClick:pt,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[n.jsx(To,{size:11})," 저장"]}),n.jsx("input",{value:ot,onChange:A=>et(A.target.value),placeholder:"버전 이름...",onKeyDown:A=>A.key==="Enter"&&st(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none"}}),n.jsxs("button",{onClick:st,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(To,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>Z(!f),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:f?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(Nn,{size:11})," 불러오기 ",H.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",H.length,")"]})]}),f&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:A=>A.stopPropagation(),children:H.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:E,textAlign:"center"},children:"저장된 버전이 없습니다"}):H.map((A,N)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===A.ts?"#1E3A5F":"#0F172A",border:S===A.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:A.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:new Date(A.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{wt(A),Z(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E},children:"적용"}),n.jsx("button",{onClick:()=>Lt(N),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(_n,{size:10})})]},A.ts))})]})]})]}),gt.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),gt.map(A=>{const N=O.includes(A);return n.jsx("button",{onClick:()=>ut(A),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(N?"#22C55E":"#334155"),background:N?"#16A34A":"#1E293B",color:N?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:A},A)}),n.jsx("button",{onClick:Ct,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:vt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:O.length===0?"전체 국가":`${O.length}개 선택`})]}),F==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:n.jsx(Mi,{value:J,onChange:L,products:q.products,productsCnty:q.productsCnty,monthlyVis:I})}),n.jsx(Di,{meta:kt,total:r,products:q.products,citations:q.citations,dotcom:p,productsCnty:q.productsCnty,citationsCnty:q.citationsCnty,lang:W,weeklyLabels:w,weeklyAll:j,categoryStats:G,cntyKeys:Tt,llmModel:J,monthlyVis:I})]})}):n.jsx(Oi,{meta:kt,total:r,products:q.products,citations:q.citations,dotcom:p,productsCnty:q.productsCnty,citationsCnty:q.citationsCnty,lang:W,weeklyLabels:w,weeklyAll:j,categoryStats:G,cntyKeys:Tt,llmModel:J,monthlyVis:I}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:["v","3.1.9"]})})]})]})}zn.createRoot(document.getElementById("root")).render(n.jsx(Ni,{}));
